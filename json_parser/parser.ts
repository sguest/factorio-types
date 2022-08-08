/// <reference path="./factorio-json.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as http from 'https';
import * as fs from 'fs';

const fileName = __dirname + '/runtime-api.json';

let arg = process.argv[2];
if(arg === '-clean' && fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
}

if(!fs.existsSync(fileName)) {
    // Save a local copy of the file so it's possible to re-run the parser without waiting for a download each time
    // Run with -clean or delete the local copy to get fresh data (like between versions)
    http.get('https://lua-api.factorio.com/latest/runtime-api.json', (response) => {
        response.on('end', handleFile);
        response.pipe(fs.createWriteStream(fileName));
    });
}
else {
    handleFile();
}

function handleFile() {
    const content = fs.readFileSync(fileName, 'utf-8');
    const apiData = JSON.parse(content) as ApiData;
    var apiVersion = apiData['application_version'];

    fs.mkdirSync(__dirname + '/../dist', {recursive: true});
    writeClasses(apiData, apiVersion);
    writeEvents(apiData, apiVersion);
    writeDefines(apiData, apiVersion);
    writeConcepts(apiData, apiVersion);
    writeGlobals(apiData, apiVersion);
}

function writeHeaders(apiData: ApiData) {
    let output = '// Factorio API reference https://lua-api.factorio.com/latest/index.html\n';
    output += '// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json\n';
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

function writeDocs(itemData: FactorioClass | FactorioEvent | Concept | Method | Attribute | { description: string }, indent: string) {
    let output = '';
    if(itemData.description) {
        output += `${indent} * ${formatLinks(formatDocLines(itemData.description, indent))}\n`;
    }
    if('notes' in itemData && itemData.notes) {
        output += `${indent} * @remarks\n`;
        for(let note of itemData.notes)
        {
            output += `${indent} * ${formatLinks(note)}\n`;
        }
        output += `${indent} *\n`;
    }
    if('parameters' in itemData) {
        for(let parameter of itemData.parameters) {
            let prepend = '';
            if('takes_table' in itemData && itemData.takes_table) {
                prepend = 'table.';
            }
            if(parameter.description) {
                output += `${indent} * @param ${prepend}${fixName(parameter.name)} - ${parameter.description}\n`;
            }
        }
        if('variadic_description' in itemData && itemData.variadic_description) {
            output += `${indent} * @param ...args - ${itemData.variadic_description}\n`;
        }
    }
    // Would be really cool to parse the lua examples and display them as TS instead, but that's out of scope for now at least
    if('examples' in itemData && itemData.examples) {
        for(let example of itemData.examples)
        {
            output += `${indent} * @example\n${indent} * ${formatDocLines(example, indent)}\n${indent} *\n`;
        }
    }
    if('see_also' in itemData && itemData.see_also) {
        for(let see of itemData['see_also'])
        {
            output += `${indent} * @see {@link ${see}}\n`;
        }
    }
    if('return_description' in itemData && itemData.return_description) {
        output += `${indent} * @returns ${itemData.return_description}\n`;
    }

    if(output) {
        output = `${indent}/**\n${output}${indent} */\n`;
    }
    return output;
}

function parseType(type: FactorioType | undefined, indent: string): string {
    if (!type) {
        return 'void';
    }

    if(typeof type === 'string') {
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
                    return parseType(type.value, '') + '[]';
                }
                else {
                    return `Array<${parseType(type.value, '')}>`;
                }
            case 'union':
                // Unions just allow their composite types to handle description, something like
                // type MyType = /* foo description */ FooType | /* bar description */ BarType
                // This ends up a little messy and isn't accessible via doc parsers
                // Would love to do a better job of this, but it seems like support isn't there yet
                // https://github.com/microsoft/TypeScript/issues/38106
                return type.options.map(o => parseType(o, '')).filter((value, index, self) => self.indexOf(value) === index).join(' | ');
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
                if(type.variant_parameter_groups) {
                    // The docs say this can exist, but currently the json data doesn't have any instance of it
                    // I'm not sure exactly what this would look like, so for now throw in case it's ever introduced
                    //throw new Error('Found table type with variant parameters');
                }
                let paramStrings = type.parameters.map((p, index) => {
                    let str = p.name;
                    
                    // at least one type (CircularProjectileCreationSpecification) has multiple properties named _, so differentiate them since that's not valid TS
                    if(str === '_') {
                        str = '_' + index;
                    }

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
            case 'struct':
                return `{\n${type.attributes.map(a => writeAttribute(a, '')).join('')}}`;
        }

        //Unreachable assuming the current types are exhaustive, but leaving this here so that future added types will throw instead of being silently ignored
        throw new Error('unrecognized complex type ' + type['complex_type']);
    }
}

function writeMethod(method: Method, indent: string = '    ') {
    if(method.subclasses) {
        let notes = method.notes || [];
        notes.push('Applies to subclasses: ' + method.subclasses.join(','));
        method.notes = notes;
    }
    let output = writeDocs(method, indent);
    output += `${indent}${method.name}(this: void`;

    let paramIndent = `${indent}    `;
    let useComma = true;
    if(method.takes_table) {
        output += `,\n${indent}    table`
        if(method.table_is_optional) {
            output += '?';
        }
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
    if(method.variadic_type) {
        output += `,\n${paramIndent}...args: ${parseType({ complex_type: 'array', value: method.variadic_type }, '')}`;
    }
    if(method.takes_table) {
        output += `\n${indent}    }`;
    }

    let returnType = parseType(method.return_type, '');
    if(/(or|returns) `?nil/i.test(method.return_description || '')) {
        returnType += ' | null';
    }
    output += `): ${returnType}\n\n`;

    return output;
}

function writeAttribute(attribute: Attribute, indent: string): string {
    if(attribute.subclasses) {
        let notes = attribute.notes || [];
        notes.push('Applies to subclasses: ' + attribute.subclasses.join(','));
        attribute.notes = notes;
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
            let notes = operator.notes;
            notes = notes || [];
            notes.push(`This will return a [${returnType}](${returnType}). The return type is any due to typescript limitations.`);
            operator.notes = notes;

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
                                            let variantClass = {
                                                name: variantRootName + formatTypeName(group.name),
                                                order: 0,
                                                description: group.description,
                                                attributes: group.parameters.map(parameterToAttribute),
                                                notes: [`Applies to variant case \`${group.name}\``],
                                                base_classes: [variantBaseName],
                                            };
                                            variantClass.attributes.unshift({
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
                                                base_classes: [variantBaseName],
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
                            notes: method.variant_parameter_description ? [method.variant_parameter_description] : [],
                        });
                        for(let group of method.variant_parameter_groups) {
                            variantClasses.push({
                                name: variantRootName + formatTypeName(group.name),
                                order: 0,
                                description: group.description,
                                attributes: group.parameters.map(parameterToAttribute),
                                notes: [`Applies to variant case \`${group.name}\``],
                                base_classes: [variantRootName],
                            })
                        }
                    }
                    method.parameters = [{
                        name: 'table',
                        order: 0,
                        description: '',
                        type: variantRootName,
                        optional: method.table_is_optional || false,
                    }];
                    method.takes_table = false;
                }
            }
        }
    }
    return { variantClasses, variantUnions };
}

function writeClasses(apiData: ApiData, apiVersion: string) {
    let output = '// Factorio class definitions\n';
    output += writeHeaders(apiData);

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
                    method.return_type = 'T';
                }
            }
        }

        if(classData.name === 'LuaBootstrap') {
            for(let method of classData.methods!) {
                if(method.name === 'on_event') {
                    method.name = 'on_event<T extends event>'
                    for(let parameter of method.parameters) {
                        if(parameter.name === 'f') {
                            ((parameter.type as UnionType).options[0] as FunctionType).parameters = ['T'];
                        }
                    }
                }
            }
        }

        output += writeDocs(classData, '');

        output += `interface ${classData.name}`;

        if(classData['base_classes']) {
            output += ' extends ' + classData.base_classes.join(', ');
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

    fs.writeFileSync(__dirname + '/../dist/classes.d.ts', output);
}

function writeEvent(eventData: FactorioEvent, isBase: boolean = false): string {
    let output = writeDocs(eventData, '');
    output += `interface ${eventData.name} `;
    if(!isBase) {
        output += 'extends event ';
    }
    output += ' {\n';

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

function writeEvents(apiData: ApiData, apiVersion: string) {
    var output = '// Factorio event definitions\n';
    output += writeHeaders(apiData);

    let eventDataList = apiData.events;
    output += writeEvent({
        name: 'event',
        order: 0,
        description: 'Base type for all events',
        notes: ['Not a member of the factorio API, added to type definitions for ease of use'],
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
                output += `${indent}    ${value.name},\n`;
            }
        }
    }

    output += `${indent}}\n`;

    return output;
}

function writeDefines(apiData: ApiData, apiVersion: string) {
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
        if(typeof concept.type === 'object' && 'complex_type' in concept.type && (concept.type.complex_type === 'table' || concept.type.complex_type === 'tuple')) {
            if(concept.type.variant_parameter_groups && concept.type.variant_parameter_groups.length) {
                let variantsCreated = false;
                if(concept.type.variant_parameter_description) {
                    let notes = concept.notes || [];
                    notes.push(concept.type.variant_parameter_description);
                    concept.notes = notes;
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
                                    // The parser will ignore the old table properties, we want to preserve description, notes, etc
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
                            description: '',
                            notes: [`Applies to \`${group.name}\` variant case`],
                        });
                    }
                }
            }
        }
    }
    return variantConcepts;
}

function writeConcepts(apiData: ApiData, apiVersion: string) {
    var output ='// Factorio concept definitions\n';
    output += writeHeaders(apiData);

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
        output += writeDocs(concept, '');
        if(typeof concept.type === 'object' && 'complex_type' in concept.type && (concept.type.complex_type === 'table' || concept.type.complex_type === 'tuple' || concept.type.complex_type === 'struct')) {
            output += `interface ${concept.name} `;
        }
        else {
            output += `type ${concept.name} = `
        }
        output += `${parseType(concept.type, '')}\n\n`;
    }

    fs.writeFileSync(__dirname + '/../dist/concepts.d.ts', output);
}

function writeGlobals(apiData: ApiData, apiVersion: string) {
    var output = '// Factorio global definitions\n';
    output += writeHeaders(apiData);

    for(let globalObject of apiData.global_objects) {
        if(globalObject.description) {
            output += writeDocs(globalObject, '');
        }
        output += `declare const ${globalObject.name}: ${parseType(globalObject.type, '')}\n`;
    }

    for(let globalFunction of apiData.global_functions) {
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