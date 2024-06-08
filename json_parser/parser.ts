/// <reference path="./factorio-json.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as http from 'https';
import * as fs from 'fs';

const files = [{ name: 'runtime-api.json', handler: handleRuntimeFile }, { name: 'prototype-api.json', handler: handlePrototypeFile }];

let arg = process.argv[2];
if(arg === '-clean') {
    for(let file of files)
    {
        const fileName = `${__dirname}/${file.name}`;
        if(fs.existsSync(fileName))
        {
            fs.unlinkSync(fileName);
        }
    }
}

for(let file of files)
{
    const fileName = `${__dirname}/${file.name}`;
    if(!fs.existsSync(fileName)) {
        // Save a local copy of the file so it's possible to re-run the parser without waiting for a download each time
        // Run with -clean or delete the local copy to get fresh data (like between versions)
        http.get(`https://lua-api.factorio.com/latest/${file.name}`, (response) => {
            response.on('end', () => file.handler(fileName));
            response.pipe(fs.createWriteStream(fileName));
        });
    }
    else {
        file.handler(fileName);
    }
}

function handleRuntimeFile(fileName: string) {
    const content = fs.readFileSync(fileName, 'utf-8');
    const apiData = JSON.parse(content) as RuntimeData;
    var apiVersion = apiData['application_version'];

    fs.mkdirSync(__dirname + '/../dist', {recursive: true});
    writeClasses(apiData, apiVersion);
    writeEvents(apiData, apiVersion);
    writeDefines(apiData, apiVersion);
    writeConcepts(apiData, apiVersion);
    writeGlobals(apiData, apiVersion);

    const packageJson = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`, 'utf-8'));
    packageJson.factorioVersion = apiVersion;
    fs.writeFileSync(`${__dirname}/../package.json`, JSON.stringify(packageJson, null, 2));
}

function handlePrototypeFile(fileName: string) {
    const content = fs.readFileSync(fileName, 'utf-8');
    const apiData = JSON.parse(content) as PrototypeData;
    var apiVersion = apiData['application_version'];
    fs.mkdirSync(__dirname + '/../dist', {recursive: true});
    writePrototypes(apiData, apiVersion);
    writePrototypeTypes(apiData, apiVersion);
}

function writeHeaders(apiData: ApiData) {
    let output = '// Factorio API reference https://lua-api.factorio.com/latest/index.html\n';
    output += `// Generated from JSON source https://lua-api.factorio.com/latest/${apiData.stage}-api.json\n`;
    output += '// Definition source https://github.com/sguest/factorio-types\n';
    output += `// Factorio version ${apiData.application_version}\n`;
    output += `// API version ${apiData.api_version}\n\n`;
    return output;
}

function formatLinks(text: string) {
    return text.replace(/\[([^\]]*)\]\(([^\)]*)\)/g, '{@link $1 | $2}');
}

function formatDocLines(text: string, indent: string) {
    return text.replace(/\n/g, `\n${indent} * `);
}

// Fix reserved words
function fixName(name: string) {
    if(name === 'function') {
        return 'fn';
    }

    return name;
}

function writeDocs(itemData: FactorioClass | FactorioEvent | Concept | Method | Attribute | FactorioPrototypeType | { description: string }, indent: string) {
    let output = '';
    if(itemData.description) {
        output += `${indent} * ${formatLinks(formatDocLines(itemData.description, indent))}\n`;
    }
    if('lists' in itemData && itemData.lists) {
        for(let list of itemData.lists) {
            output += `${indent} * ${formatLinks(formatDocLines(list, indent))}\n`;
        }
    }
    if('parameters' in itemData) {
        for(let parameter of itemData.parameters) {
            let prepend = '';
            if('format' in itemData && 'takes_table' in itemData.format && itemData.format.takes_table) {
                prepend = 'table.';
            }
            if(parameter.description) {
                output += `${indent} * @param ${prepend}${fixName(parameter.name)} - ${parameter.description}\n`;
            }
        }
        if('variadic_parameter' in itemData && itemData.variadic_parameter?.description) {
            output += `${indent} * @param ...args - ${itemData.variadic_parameter.description}\n`;
        }
    }
    // Would be really cool to parse the lua examples and display them as TS instead, but that's out of scope for now at least
    if('examples' in itemData && itemData.examples) {
        for(let example of itemData.examples)
        {
            output += `${indent} * @example\n${indent} * ${formatDocLines(example, indent)}\n${indent} *\n`;
        }
    }
    if('return_values' in itemData && itemData.return_values?.length > 0)
    {
        if(itemData.return_values.length === 1) {
            if(itemData.return_values[0].description)
            {
                output += `${indent} * @returns ${itemData.return_values[0].description}\n`
            }
        }
        else {
            output += `${indent} * @returns multiple values\n`
            for(let returnValue of itemData.return_values)
            {
                output += `${indent} *  [${returnValue.order}] - ${returnValue.description}\n`
            }
        }
    }

    if(output) {
        output = `${indent}/**\n${output}${indent} */\n`;
    }
    return output;
}

function parseType(type: FactorioType | undefined, indent: string, parent?: FactorioPrototypeType | FactorioPrototype): string {
    if (!type) {
        return 'void';
    }

    if(typeof type === 'string') {
        if(type === 'PrototypeFilter') {
            return 'ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter';
        }

        return type;
    }
    else {
        let result: string;
        switch(type.complex_type) {
            case 'array':
                if(typeof type.value === 'string') {
                    return parseType(type.value, '', parent) + '[]';
                }
                else {
                    return `Array<${parseType(type.value, '', parent)}>`;
                }
            case 'union':
                // Unions just allow their composite types to handle description, something like
                // type MyType = /* foo description */ FooType | /* bar description */ BarType
                // This ends up a little messy and isn't accessible via doc parsers
                // Would love to do a better job of this, but it seems like support isn't there yet
                // https://github.com/microsoft/TypeScript/issues/38106
                return type.options.map(o => parseType(o, '', parent)).filter((value, index, self) => self.indexOf(value) === index).join(' | ');
            case 'dictionary':
            case 'LuaCustomTable':
                // typescript requires either a number or string as indexer key.
                // if it's not a number, just make it a string, which is as close as we can get.
                let keyType = parseType(type.key, '');
                if(keyType !== 'number') {
                    keyType = 'string';
                }
                return `{[key: ${keyType}]: ${parseType(type.value, indent)}}`;
            case 'function':
                let value = '(this: void';
                if(type.parameters.length) {
                    value += ', ';
                }
                // The json spec doesn't appear to have enough info to identify the return type of the function, so we're stuck with `any`
                return value + `${type.parameters.map((paramType, index) => `arg${index}: ${paramType}`).join(', ')}) => any`;
            case 'table':
            case 'tuple':
                if(type.complex_type === 'tuple' && 'values' in type)
                {
                    return `\n[${indent}    ${type.values.map(t => parseType(t, indent + '    ')).join(`,\n${indent}    `)}\n${indent}]`;
                }
                else {
                    let paramStrings = type.parameters.map(p => {
                        let str = p.name;

                        if(/-/.test(str)) {
                            str = `'${str}'`
                        }
                        if(p.optional) {
                            str += '?';
                        }

                        if(p.description) {
                            str = `\n    ${indent}/**\n${indent}     * ${formatLinks(p.description)}\n${indent}     */\n${indent}    ${str}`
                        }

                        return str + `: ${parseType(p.type, indent)}`;
                    })
                    return `{\n${indent}    ` + paramStrings.join(`,\n${indent}    `) + `\n${indent}}`;
                }
            case 'LuaLazyLoadedValue':
                return `LuaLazyLoadedValue<${parseType(type.value, '')}>`;
            case 'literal':
                result = '';
                if(type.description) {
                    result = `/* ${formatLinks(type.description)} */ `
                }
                if(typeof type.value === 'string') {
                    return result + `'${type.value}'`;
                }
                return result + type.value.toString();
            case 'type':
                result = '';
                if(type.description) {
                    result = `/* ${formatLinks(type.description)} */ `
                }
                return result + parseType(type.value, indent);
            case 'LuaStruct':
                return `{\n${type.attributes.map(a => writeAttribute(a, '')).join('')}}`;
            case 'struct':
                if(!parent) {
                    throw new Error('Found "struct" type without parent supplied, cannot parse');
                }
                let paramStrings = parent.properties.map((p, index) => {
                    let str = p.name;

                    if(/-/.test(str)) {
                        str = `'${str}'`
                    }
                    if(p.optional) {
                        str += '?';
                    }

                    if(p.description) {
                        str = `\n    ${indent}/**\n${indent}     * ${formatLinks(p.description)}\n${indent}     */\n${indent}    ${str}`
                    }

                    return str + `: ${parseType(p.type, indent)}`;
                })
                return `{\n${indent}    ` + paramStrings.join(`,\n${indent}    `) + `\n${indent}}`;
            case 'builtin':
                return 'builtin';
        }

        //Unreachable assuming the current types are exhaustive, but leaving this here so that future added types will throw instead of being silently ignored
        throw new Error(`unrecognized complex type ${type['complex_type']}`);
    }
}

function writeMethod(method: Method, indent: string = '    ') {
    if(method.subclasses) {
        method.description += '\nApplies to subclasses: ' + method.subclasses.join(',')
    }
    let output = writeDocs(method, indent);
    output += `${indent}${method.name}(this: void`;

    let paramIndent = `${indent}    `;
    let useComma = true;
    if(method.format.takes_table) {
        output += `,\n${indent}    table`
        output += ': {\n';
        paramIndent += '    ';
        useComma = false;
    }
    for(let parameter of method.parameters.sort((a, b) => a.order - b.order))
    {
        if(useComma) {
            output += ',\n';
        }
        else {
            useComma = true;
        }
        output += `${paramIndent}${fixName(parameter.name)}`;
        if(parameter.optional) {
            output += '?';
        }
        output += `: ${parseType(parameter.type, indent + '    ')}`;
    }
    if(method.variadic_parameter) {
        output += `,\n${paramIndent}...args: ${parseType({ complex_type: 'array', value: method.variadic_parameter.type }, '')}`;
    }
    if(method.format.takes_table) {
        output += `\n${indent}    }`;
    }

    let returnType = 'void';
    if(method.return_values.length === 1) {
        returnType = parseType(method.return_values[0].type, '');
        if(method.return_values[0].optional) {
            returnType += ' | null';
        }
    }
    else if(method.return_values.length > 1) {
        returnType = 'LuaMultiReturn<[';
        returnType += method.return_values.map(v => parseType(v.type, '') + (v.optional ? ' | null' : '')).join(', ');
        returnType += ']>';
    }

    output += `): ${returnType}\n\n`;

    return output;
}

function writeAttribute(attribute: Attribute, indent: string): string {
    if(attribute.subclasses) {
        attribute.description += '\nApplies to subclasses: ' + attribute.subclasses.join(',');
    }
    let output = writeDocs(attribute, '    ');
    output += '    ';
    // Just assuming attribute can be read, typescript doesn't support write-only
    if(!attribute.write) {
        output += 'readonly ';
    }
    output += attribute.name;
    if(attribute.optional || /(or|returns) ?`nil/i.test(attribute.description)) {
        output += '?'
    }
    return output + `: ${parseType(attribute.type, indent)}\n\n`;
}

function writeOperator(operator: Method | Attribute): string {
    switch(operator.name)
    {
        case 'length':
            operator.name = "'#'";
            break;
        case 'index':
            // This could also be [key: number] but the json doesn't give enough info to differentiate
            operator.name = '[key: string]';

            // Have to change indexing operators to return `any` since typescript won't let us have a typed indexer along with other fields
            // add a note to indicate the type it actually returns
            let returnType = parseType((operator as Attribute).type, '');
            (operator as Attribute).type = 'any';
            (operator as Attribute).optional = false;
            operator.description += `\nThis will return a [${returnType}](${returnType}). The return type is any due to typescript limitations.`;

            break;
        case 'call':
            operator.name = '';
            break;
        default:
            throw new Error(`Unrecognized operator name ${operator.name}`);
    }

    if('parameters' in operator) {
        return writeMethod(operator);
    }
    return writeAttribute(operator, '');
}

function extractTypeNames(description: string): string[] {
    let regex = /`(?:\\?"|')?([^'"`]*)(?:\\?"|')?`/g;
    let names: string[] = [];

    var result = regex.exec(description);
    while(result)
    {
        if(result && result.length >= 2) {
            names.push(result[1]);
        }
        result = regex.exec(description);
    }

    return names;
}

function formatTypeName(rawName: string) {
    let pieces = rawName.split('.');
    let piece = pieces[pieces.length - 1];
    return piece.replace(/(?:^|[-_ ])(.)/g, (_, g1) => g1.toUpperCase());
}

function parameterToAttribute(parameter: Parameter): Attribute {
    return {
        name: `'${parameter.name}'`,
        order: parameter.order,
        description: parameter.description,
        type: parameter.type,
        read: true,
        write: true,
        optional: parameter.optional,
    }
}

function parseVariantClasses(classes: FactorioClass[]) {
    let variantClasses: FactorioClass[] = [];
    let variantUnions: string[] = [];
    for(let classData of classes) {
        if(classData.methods) {
            for(let method of classData.methods) {
                if(method.variant_parameter_groups && method.variant_parameter_groups.length) {
                    let variantRootName = formatTypeName(classData.name) + formatTypeName(method.name) + 'Params';
                    let variantsCreated = false;
                    if(method.variant_parameter_description) {
                        let variantMarkerTypes = extractTypeNames(method.variant_parameter_description);
                        if(variantMarkerTypes.length === 1) {
                            let variantParamName = variantMarkerTypes[0];
                            for(let param of method.parameters) {
                                if(param.name === variantParamName) {
                                    let variantOptions = extractTypeNames(param.description);
                                    if(variantOptions.length >= 1) {
                                        variantsCreated = true;
                                        let variantBaseName = 'Base' + variantRootName;
                                        variantClasses.push({
                                            name: variantBaseName,
                                            order: 0,
                                            description: '',
                                            attributes: method.parameters.filter(p => p.name !== variantParamName).map(parameterToAttribute),
                                        });

                                        let unionTypeNames: string[] = [];

                                        for(let group of method.variant_parameter_groups) {
                                            let variantClass: FactorioClass = {
                                                name: variantRootName + formatTypeName(group.name),
                                                order: 0,
                                                description: group.description + `\nApplies to variant case \`${group.name}\``,
                                                attributes: group.parameters.map(parameterToAttribute),
                                                parent: variantBaseName,
                                            };
                                            variantClass.attributes!.unshift({
                                                name: variantParamName,
                                                order: -1,
                                                description: param.description,
                                                type: `'${group.name}'`,
                                                read: true,
                                                write: true,
                                                optional: false,
                                            })
                                            variantClasses.push(variantClass);
                                            variantOptions.splice(variantOptions.indexOf(group.name), 1);
                                            unionTypeNames.push(variantClass.name);
                                        }

                                        if(variantOptions.length) {
                                            variantClasses.push({
                                                name: 'Default' + variantRootName,
                                                order: 0,
                                                description: '',
                                                attributes: [{
                                                    name: variantParamName,
                                                    order: -1,
                                                    description: param.description,
                                                    type: variantOptions.map(o => `'${o}'`).join(' | '),
                                                    read: true,
                                                    write: true,
                                                    optional: param.optional,
                                                }],
                                                parent: variantBaseName,
                                            });
                                            unionTypeNames.push('Default' + variantRootName);
                                        }

                                        variantUnions.push(`type ${variantRootName} = ${unionTypeNames.join(' | ')}`);
                                    }
                                }
                            }
                        }
                    }
                    if(!variantsCreated) {
                        variantClasses.push({
                            name: variantRootName,
                            order: 0,
                            description: '',
                            attributes: method.parameters.map(parameterToAttribute),
                        });
                        for(let group of method.variant_parameter_groups) {
                            variantClasses.push({
                                name: variantRootName + formatTypeName(group.name),
                                order: 0,
                                description: group.description + `\nApplies to variant case \`${group.name}\``,
                                attributes: group.parameters.map(parameterToAttribute),
                                parent: variantRootName,
                            })
                        }
                    }
                    method.parameters = [{
                        name: 'table',
                        order: 0,
                        description: '',
                        type: variantRootName,
                        optional: false,
                    }];
                    method.format.takes_table = false;
                }
            }
        }
    }
    return { variantClasses, variantUnions };
}

function writePrototypes(apiData: PrototypeData, apiVersion: string) {
    let output = '// Factorio prototypes\n';
    output += writeHeaders(apiData);

    output += 'declare namespace prototype {\n\n';

    output += 'interface dataCollection {\n'

    for(let prototype of apiData.prototypes) {
        if(prototype.typename) {
            output += `    '${prototype.typename}': { [key: string]: ${prototype.name} }\n`
        }
    }

    output += '\n}'

    parseParentStructure(apiData.prototypes);

    let dataExtensions: string[] = [];

    for(let prototype of apiData.prototypes) {
        // Ugly hack, but this is a weird one-off where a property in a sub-class is a more generic union than the superclass
        // a truly dynamic fix probably isn't worth it for this one case, so just "fix" it manually by maknig the parent accept the union
        if(prototype.name === 'ItemWithInventoryPrototype') {
            for(let property of prototype.properties) {
                if(property.name === 'inventory_size') {
                    property.type = {
                        complex_type: 'union',
                        options: [
                            'ItemStackIndex',
                            {
                                "complex_type": "literal",
                                "value": "dynamic"
                            }
                        ],
                    };
                    property.description += ' - This will only accept an ItemStackIndex (aka number). The union with \'dynamic\' is only to satisfy BlueprintBookPrototype within Typescript\'s inheritance rules';
                }
            }
        }

        output += writeDocs(prototype, '');
        output += `interface ${prototype.name} `;
        if(prototype.parent) {
            output += `extends ${prototype.parent}`;
        }

        if(prototype.typename) {
            /*
             * using an intersection type to add the "type" property instead of putting it directly on the type itself
             * because inheritance relationships have different types.
             * For example ArmorPrototype (type: 'armor') extends ToolPrototype (type: 'tool')
             * this would make an invalid inheritance hierarchy.
             */
            dataExtensions.push(`({ type: '${prototype.typename}' } & ${prototype.name})`)
        }
        output += parseType({ complex_type: 'struct' }, '', prototype) + '\n\n';
    }

    output += 'type dataExtendType = ' + dataExtensions.join(' | ') + ' | settings.dataExtendType | PrototypeBase';

    output += '\n}'

    fs.writeFileSync(__dirname + '/../dist/prototypes.d.ts', output);
}

function mapBuiltin(type: string): string | null {
    if(/^u?int(\d*)$/.test(type) || type === 'float' || type === 'double') {
        return 'number';
    }
    if(type === 'Any') {
        return 'any';
    }
    if(type === 'table') {
        return 'Table';
    }
    if(type === 'LuaObject') {
        return 'object';
    }
    if(type === 'nil') {
        return 'null';
    }
    if(type === 'bool') {
        return 'boolean';
    }

    return null;
}

function writePrototypeTypes(apiData: PrototypeData, apiVersion: string) {
    let output = '// Factorio type definitions for prototypes\n';
    output += writeHeaders(apiData);

    output += 'declare namespace prototype {\n\n';

    const childTypes = parseParentStructure(apiData.types);

    for(let typeData of apiData.types) {
        if(childTypes[typeData.name]) {
            /*
             * Factorio prototypes often have super/sub classes with a "type" property of different literal strings
             * Typescript doesn't support this inheritance as the properties are incompatible, so inject a 
             * surrogate "base" interface with all the properties, and a new interface to handle the base type's literal
             */
            const typeIndex = typeData.properties.findIndex(p => p.name === 'type');
            if(typeIndex >= 0) {
                let typeProp = typeData.properties[typeIndex];
                if(typeof typeProp.type === 'object' && typeProp.type.complex_type === 'literal') {
                    let baseName = typeData.name + 'Base';
                    let typeName = typeData.name;

                    output += `interface ${typeName} extends ${baseName} {\n`;
                    output += `    type: '${typeProp.type.value}'\n`
                    output += '}\n\n';

                    typeData.name = baseName;
                    typeProp.type = 'string';

                    for(let child of childTypes[typeName]) {
                        child.parent = baseName;
                    }
                }
                else {
                    throw new Error('Cannot handle type inheritance where type property is non-literal');
                }
            }
        }
    }

    for(let typeData of apiData.types)
    {
        if(typeData.type === 'builtin')
        {
            var mapped = mapBuiltin(typeData.name);

            if(mapped) {
                output += writeDocs(typeData, '');
                output += `type ${typeData.name} = ${mapped};\n\n`
            }
        }
        else {
            output += writeDocs(typeData, '');
            if(typeof typeData.type === 'object' && 'complex_type' in typeData.type && typeData.type.complex_type === 'struct') {
                output += `interface ${typeData.name} `;
                if(typeData.parent) {
                    output += `extends ${typeData.parent}`;
                }
                output += parseType(typeData.type, '', typeData) + '\n\n';
            }
            else {
                output += `type ${typeData.name} = ${parseType(typeData.type, '', typeData)}\n\n`;
            }
        }
    }
    output += '\n}'

    fs.writeFileSync(__dirname + '/../dist/types.d.ts', output);
}

function parseParentStructure<T extends { parent: string, name: string, properties: Attribute[]}>(items: T[]) {
    const childTypes: {[key: string]: T[]} = {};

    for(let item of items) {
        if(item.parent) {
            childTypes[item.parent] = childTypes[item.parent] || [];
            childTypes[item.parent].push(item);
        }
    }

    for(let item of items) {
        if(childTypes[item.name]) {
            for(let child of childTypes[item.name])
            {
                if(item.properties && child.properties)
                {
                    for(let parentProp of item.properties)
                    {
                        for(let childProp of child.properties)
                        {
                            if(childProp.name === parentProp.name && childProp.optional && !parentProp.optional)
                            {
                                // Can't inherit a required prop with an optional one in TS, so just set the parent prop to optional
                                parentProp.optional = true;
                            }
                        }
                    }
                }
            }
        }
    }

    return childTypes;
}

function writeClasses(apiData: RuntimeData, apiVersion: string) {
    let output = '// Factorio class definitions\n';
    output += writeHeaders(apiData);

    output += 'declare namespace runtime {\n';

    let classDataList = apiData.classes;
    let variantInfo = parseVariantClasses(classDataList);
    classDataList.push(...variantInfo.variantClasses);

    for(let classData of classDataList)
    {
        // Special handling for types that *really* should be generics
        if(classData.name === 'LuaLazyLoadedValue') {
            classData.name = 'LuaLazyLoadedValue<T>';
            for(let method of classData.methods!) {
                if(method.name === 'get') {
                    method.return_values[0].type = 'T';
                }
            }
        }

        // Generate a specific `on_event` definition for each event type, so that the handler function can correctly type the event
        if(classData.name === 'LuaBootstrap') {
            const newMethods: Method[] = [];
            let eventIndex = 0;
            for(let method of classData.methods!) {
                if(method.name === 'on_event') {
                    const eventDefine = apiData.defines.find(d => d.name === 'events');
                    for(let eventName of eventDefine!.values!.map(e => e.name)) {
                        newMethods.push({
                            name: 'on_event',
                            order: 0,
                            description: method.description,
                            examples: method.examples,
                            parameters: [
                                {
                                    name: 'event',
                                    order: 0,
                                    description: method.parameters.find(p => p.name === 'event')!.description,
                                    optional: false,
                                    type: 'defines.events.' + eventName,
                                },
                                {
                                    name: 'handler',
                                    order: 1,
                                    description: method.parameters.find(p => p.name === 'handler')!.description,
                                    optional: false,
                                    type: {
                                        complex_type: 'union',
                                        options: [
                                            {
                                                complex_type: 'function',
                                                parameters: ['runtime.' + eventName],
                                            },
                                            'nil'
                                        ]
                                    },
                                },
                                method.parameters.find(p => p.name === 'filters')!,
                            ],
                            format: {
                                takes_table: method.format.takes_table,
                            },
                            return_values: method.return_values,
                        })
                    }

                    eventIndex = classData.methods?.findIndex(m => m.name === 'on_event')!;
                }
            }
            classData.methods?.splice(eventIndex, 0, ...newMethods);
        }

        output += writeDocs(classData, '');

        output += `interface ${classData.name}`;

        if(classData['parent']) {
            output += ' extends ' + classData.parent;
        }

        output += ' {\n';

        if(classData.methods) {
            classData.methods.forEach(m => output += writeMethod(m));
        }

        if(classData.attributes) {
            classData.attributes.forEach(a => output += writeAttribute(a, '    '));
        }

        if(classData.operators) {
            classData.operators.forEach(o => output += writeOperator(o));
        }

        output += '}\n\n';
    }

    for(let union of variantInfo.variantUnions) {
        output += union + '\n\n';
    }

    output += '\n}';

    fs.writeFileSync(__dirname + '/../dist/classes.d.ts', output);
}

function writeEvent(eventData: FactorioEvent, isBase: boolean = false): string {
    let output = writeDocs(eventData, '');
    output += `interface ${eventData.name} `;
    if(!isBase) {
        output += 'extends event ';
    }
    output += '{\n';

    for(let data of eventData.data)
    {
        if (isBase || (data.name !== 'name' && data.name !== 'tick'))
        {
            output += writeDocs(data, '    ');
            output += `    ${data.name}`;
            if(data.optional) {
                output += '?';
            }
            output += `: ${parseType(data.type, '')}\n`;
        }
    }

    output += '}\n';
    return output;
}

function writeEvents(apiData: RuntimeData, apiVersion: string) {
    var output = '// Factorio event definitions\n';
    output += writeHeaders(apiData);

    output += 'declare namespace runtime {\n';

    let eventDataList = apiData.events;
    output += writeEvent({
        name: 'event',
        order: 0,
        description: 'Base type for all events\nNot a member of the factorio API, added to type definitions for ease of use',
        data: [
            {
                name: 'name',
                order: 0,
                description: 'Identifier of the event',
                type: 'defines.events',
                optional: false
            },
            {
                name: 'tick',
                order: 1,
                description: 'Tick the event was generated.',
                type: 'number',
                optional: false
            }
        ]
    }, true);

    for(let eventData of eventDataList)
    {
        output += writeEvent(eventData);
    }

    output += '\n}';

    fs.writeFileSync(__dirname + '/../dist/events.d.ts', output);
}

function writeDefine(define: Define, indent: string) {
    if(define.values && define.values.length && define.subkeys && define.subkeys.length) {
        // I don't think this exists so not handling it, but throw in case it ever gets added
        // not sure what this would look like anyways.
        throw new Error('Cannot write define with both subkeys and values');
    }

    var output = writeDocs(define, indent);

    if(define.subkeys && define.subkeys.length) {
        output += `${indent}namespace ${define.name} {\n`

        for(let subkey of define.subkeys) {
            output += writeDefine(subkey, indent + '    ');
        }
    }
    else {
        output += `${indent}enum ${define.name} {\n`

        if(define.values) {
            for(let value of define.values) {
                output += writeDocs(value, indent + '    ');
                output += `${indent}    ${value.name} = ${value.order},\n`;
            }
        }
    }

    output += `${indent}}\n`;

    return output;
}

function writeDefines(apiData: RuntimeData, apiVersion: string) {
    var output = '// Factorio defines\n';
    output += writeHeaders(apiData);

    output += 'declare namespace defines {\n'

    for(let define of apiData.defines)
    {
        output += writeDefine(define, '    ');
    }

    output += '}';

    fs.writeFileSync(__dirname + '/../dist/defines.d.ts', output);
}

function parseVariantConcepts(concepts: Concept[]) {
    let variantConcepts: Concept[] = [];
    for(let concept of concepts) {
        if(typeof concept.type === 'object' && 'complex_type' in concept.type && (concept.type.complex_type === 'table' || (concept.type.complex_type === 'tuple' && !('values' in concept.type)))) {
            if(concept.type.variant_parameter_groups && concept.type.variant_parameter_groups.length) {
                let variantsCreated = false;
                if(concept.type.variant_parameter_description) {
                    concept.description += '\n' + concept.type.variant_parameter_description;
                    let variantPropertyNameList = extractTypeNames(concept.type.variant_parameter_description);
                    if(variantPropertyNameList.length === 1) {
                        let variantPropertyName = variantPropertyNameList[0];
                        for(let parameter of concept.type.parameters) {
                            if(parameter.name === variantPropertyName) {
                                let variantOptions = extractTypeNames(parameter.description);
                                if(variantOptions.length) {
                                    variantsCreated = true;
                                    let unionNames: string[] = [];
                                    let baseName = 'Base' + concept.name
                                    variantConcepts.push({
                                        type: {
                                            complex_type: 'table',
                                            parameters: concept.type.parameters.filter(p => p.name !== variantPropertyName),
                                        },
                                        name: baseName,
                                        order: 0,
                                        description: '',
                                    });
                                    for(let group of concept.type.variant_parameter_groups) {
                                        let newConceptType: TableType = {
                                            complex_type: 'table',
                                            parameters: group.parameters,
                                        };
                                        let newConcept: Concept = {
                                            type: newConceptType,
                                            name: `${concept.name}${formatTypeName(group.name)} extends ${baseName}`,
                                            order: 0,
                                            description: '',
                                        };
                                        newConceptType.parameters.unshift({
                                            name: variantPropertyName,
                                            order: -1,
                                            description: parameter.description,
                                            type: `'${group.name}'`,
                                            optional: parameter.optional,
                                        });
                                        variantConcepts.push(newConcept);
                                        variantOptions.splice(variantOptions.indexOf(group.name), 1);
                                        unionNames.push(concept.name + formatTypeName(group.name));
                                    }
                                    if(variantOptions.length) {
                                        variantConcepts.push({
                                            type: {
                                                complex_type: 'table',
                                                parameters: [{
                                                    name: variantPropertyName,
                                                    order: -1,
                                                    description: parameter.description,
                                                    type: variantOptions.map(o => `'${o}'`).join(' | '),
                                                    optional: parameter.optional,
                                                }],
                                            },
                                            name: `Default${concept.name} extends ${baseName}`,
                                            order: 0,
                                            description: '',
                                        });
                                        unionNames.push('Default' + concept.name);
                                    }
                                    // Dirty type hacks to "convert" the base concept to a union type
                                    // The parser will ignore the old table properties, we want to preserve description etc
                                    (concept as any).type.complex_type = 'union';
                                    (concept.type as any as UnionType).options = unionNames;
                                }
                            }
                        }
                    }
                }

                if(!variantsCreated) {
                    for(let group of concept.type.variant_parameter_groups) {
                        variantConcepts.push({
                            type: {
                                complex_type: 'table',
                                parameters: group.parameters,
                            },
                            name: `${concept.name}${formatTypeName(group.name)} extends ${concept.name}`,
                            order: 0,
                            description: `Applies to \`${group.name}\` variant case`,
                        });
                    }
                }
            }
        }
    }
    return variantConcepts;
}

function writeConcepts(apiData: RuntimeData, apiVersion: string) {
    var output ='// Factorio concept definitions\n';
    output += writeHeaders(apiData);

    output += 'declare namespace runtime {\n';

    let concepts = apiData.concepts;

    let collisionMaskLayer = concepts.find(c => c.name === 'CollisionMaskLayer');
    if(collisionMaskLayer) {
        let cmlType = collisionMaskLayer.type as UnionType;
        for(let i = 13; i <= 55; i++) {
            cmlType.options.push({
                complex_type: 'literal',
                value: `layer-${i}`,
                description: '',
            })
        }
    }

    concepts.push(...parseVariantConcepts(concepts));
    for(let concept of concepts) {
        let parsed: string | null = parseType(concept.type, '');
        if(parsed === 'builtin') {
            parsed = mapBuiltin(concept.name)
        }
        if(parsed) {
            output += writeDocs(concept, '');
            if(typeof concept.type === 'object' && 'complex_type' in concept.type && (concept.type.complex_type === 'table' || concept.type.complex_type === 'LuaStruct')) {
                output += `interface ${concept.name} `;
            }
            else {
                output += `type ${concept.name} = `
            }
            output += `${parsed}\n\n`;
        }
    }

    output += '\n}';

    fs.writeFileSync(__dirname + '/../dist/concepts.d.ts', output);
}

function writeGlobals(apiData: RuntimeData, apiVersion: string) {
    var output = '// Factorio global definitions\n';
    output += writeHeaders(apiData);

    for(let globalObject of apiData.global_objects) {
        if(globalObject.description) {
            output += writeDocs(globalObject, '');
        }
        output += `declare const ${globalObject.name}: runtime.${parseType(globalObject.type, '')}\n`;
    }

    for(let globalFunction of apiData.global_functions) {
        for(let parameter of globalFunction.parameters) {
            parameter.type = 'runtime.' + parameter.type;
        }

        let fnOutput = writeMethod(globalFunction, '');
        if(fnOutput.indexOf('*/') === -1) {
            fnOutput = 'declare function ' + fnOutput;
        }
        else {
            fnOutput = fnOutput.replace('*/\n', '*/\ndeclare function ');
        }
        output += fnOutput;
    }

    fs.writeFileSync(__dirname + '/../dist/global.d.ts', output);
}