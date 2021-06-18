/// <reference path="./factorio-json.d.ts" />

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
    writeClasses(apiData.classes, apiVersion);
    writeEvents(apiData.events, apiVersion);
    writeDefines(apiData.defines, apiVersion);
    writeConcepts(apiData.concepts, apiVersion);
    writeGlobalObjects(apiData.global_objects, apiVersion);
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

function parseType(type: FactorioType | undefined): string {
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

        if(type === 'PrototypeFilter') {
            return 'ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter';
        }
        return type;
    }
    else {
        switch(type.complex_type) {
            case 'array':
                if(typeof type.value === 'string') {
                    return parseType(type.value) + '[]';
                }
                else {
                    return `Array<${parseType(type.value)}>`;
                }
            case 'variant':
                return type.options.map(parseType).filter((value, index, self) => self.indexOf(value) === index).join(' | ');
            case 'dictionary':
            case 'LuaCustomTable':
                // typescript requires either a number or string as indexer key.
                // if it's not a number, just make it a string, which is as close as we can get.
                let keyType = parseType(type.key);
                if(keyType !== 'number') {
                    keyType = 'string';
                }
                return `{[key: ${keyType}]: ${parseType(type.value)}}`;
            case 'function':
                // The json spec doesn't appear to have enough info to identify the return type of the function, so we're stuck with `any`
                return `(${type.parameters.map((paramType, index) => `arg${index}: ${paramType}`).join(', ')}) => any`;
            case 'table':
                // todo: variant parameters
                let paramStrings = type.parameters.map(p => {
                    let str = p.name;
                    if(p.optional) {
                        str += '?';
                    }
                    return str + `: ${parseType(p.type)}`;
                })
                return '{ ' + paramStrings.join(', ') + ' }';
            case 'LuaLazyLoadedValue':
                return `LuaLazyLoadedValue<${parseType(type.value)}>`;
        }

        //Unreachable assuming the current types are exhaustive, but leaving this here so that future added types will throw instead of being silently ignored
        throw new Error('unrecognized complex type ' + type['complex_type']);
    }
}

/*
    variant_parameter_groups :: array[ParameterGroup] (optional): The optional parameters that depend on one of the main parameters. Only applies if takes_table is true.
    variant_parameter_description :: string (optional): The text description of the optional parameter groups.
*/

function writeMethod(method: Method) {
    if(method.subclasses) {
        let notes = method.notes || [];
        notes.push('Applies to subclasses: ' + method.subclasses.join(','));
        method.notes = notes;
    }
    let output = writeDocs(method, '    ');
    output += `    ${method.name}(this: void`;

    let paramIndent = '        ';
    let useComma = true;
    if(method.takes_table) {
        output += ',\n        table'
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
        output += `: ${parseType(parameter.type)}`;
    }
    if(method.variadic_type) {
        output += `,\n${paramIndent}...args: ${parseType({ complex_type: 'array', value: method.variadic_type })}`;
    }
    if(method.takes_table) {
        output += '\n        }';
    }

    let returnType = parseType(method.return_type);
    if(/or `?nil/.test(method.return_description || '')) {
        returnType += ' | null';
    }
    output += `): ${returnType}\n\n`;

    return output;
}

function writeAttribute(attribute: Attribute): string {
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
    return output + `${attribute.name}: ${parseType(attribute.type)}\n\n`;
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
            let returnType = parseType((operator as Attribute).type);
            (operator as Attribute).type = 'any';
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
    return writeAttribute(operator);
}

function writeClasses(classDataList: FactorioClass[], apiVersion: string) {
    let output = `// Factorio class definitions for API version ${apiVersion}\n\n`;

    for(let classData of classDataList)
    {
        // Special handling for this type that *really* should be a generic
        if(classData.name === 'LuaLazyLoadedValue') {
            classData.name = 'LuaLazyLoadedValue<T>';
            for(let method of classData.methods!) {
                if(method.name === 'get') {
                    method.return_type = 'T';
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
            classData.attributes.forEach(a => output += writeAttribute(a));
        }

        if(classData.operators) {
            classData.operators.forEach(o => output += writeOperator(o));
        }

        output += '}\n\n';
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
            output += `: ${parseType(data.type)}\n`;
        }
    }

    output += '}\n';
    return output;
}

function writeEvents(eventDataList: FactorioEvent[], apiVersion: string) {
    var output = `// Factorio event definitions for API version ${apiVersion}\n\n`;

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

/*
    values :: array[BasicMember] (optional): The members of the define.
    subkeys :: array[Define] (optional): A list of sub-defines.
*/
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

function writeDefines(defines: Define[], apiVersion: string) {
    var output = `// Factorio defines for API version ${apiVersion}\n\ndeclare namespace defines {\n`;

    for(let define of defines)
    {
        output += writeDefine(define, '    ');
    }

    output += '}';

    fs.writeFileSync(__dirname + '/../dist/defines.d.ts', output);
}

// This are just text descriptions, no real way to handle them other than manually.
function writeCustomConcept(concept: UntypedConcept) {
    let output = '';
    switch(concept.name) {
        case 'Any':
            return 'type Any = any;\n\n';
        case 'AnyBasic':
            return 'type AnyBasic = string | number | boolean | object\n\n';
        case 'CircularProjectileCreationSpecification':
            return 'type CircularProjectileCreationSpecification = [RealOrientation, Vector]\n\n';
        case 'CollisionMask':
            return 'type CollisionMask = {[key in CollisionMaskLayer]: boolean}\n\n';
        case 'CollisionMaskLayer':
            output = "type CollisionMaskLayer = 'ground-tile' | 'water-tile' | 'resource-layer' | 'doodad-layer' | 'floor-layer' | 'item-layer' | 'ghost-layer' | 'object-layer' | 'player-layer' | 'train-layer' | 'rail-layer' | 'transport-belt-layer' | 'not-setup'";
            for(let i = 13; i <= 55; i++) {
                output += ` | 'layer-${i}'`;
            }
            return output + '\n\n';
        case 'CollisionMaskWithFlags':
            return 'type CollisionMaskWithFlags = CollisionMask & {[key:string]: true}\n\n';
        case 'EventFilter':
            return 'type EventFilter = LuaEntityClonedEventFilter | LuaEntityDamagedEventFilter | LuaPlayerMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPostEntityDiedEventFilter | LuaEntityDiedEventFilter | LuaScriptRaisedReviveEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaSectorScannedEventFilter | LuaRobotMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerRepairedEntityEventFilter\n\n';
        case 'LocalisedString':
            return 'type LocalisedString = string[] | string | number\n\n';
        case 'MapGenSize':
            return "type MapGenSize = number | 'none' | 'very-low' | 'very-small' | 'very-poor' | 'low' | 'small' | 'poor' | 'normal' | 'medium' | 'regular' | 'high' | 'big' | 'good' | 'very-high' | 'very-big' | 'very-good'\n\n";
        case 'MapSettings':
            return 'type MapSettings = PrototypeMapSettings\n\n';
        case 'MouseButtonFlags':
            output = 'type MouseButtonFlags = MouseButtonFlagKey[] | {[key in MouseButtonFlagKey]: true}\n\n';
            output += "type MouseButtonFlagKey = 'left' | 'right' | 'left-and-right' | 'middle' | 'button-4' | 'button-5' | 'button-6' | 'button-7' | 'button-8' | 'button-9'\n\n";
            return output;
        case 'RealOrientation':
            return 'type RealOrientation = number\n\n';
        case 'RenderLayer':
            return "type RenderLayer = 'water-tile' |  '15' | 'ground-tile' | '25' | 'tile-transition' | '26' | 'decals' | '27' | 'lower-radius-visualization' | '29' | 'radius-visualization' | '30' | 'transport-belt-integration' | '65' | 'resource' | '6' | 'building-smoke' | '7' | 'decorative' | '92' | 'ground-patch' | '93' | 'ground-patch-higher' | '94' | 'ground-patch-higher2' | '95' | 'remnants' | '112' | 'floor' | '113' | 'transport-belt' | '114' | 'transport-belt-endings' | '115' | 'floor-mechanics-under-corpse' | '120' | 'corpse' | '121' | 'floor-mechanics' | '122' | 'item' | '123' | 'lower-object' | '124' | 'transport-belt-circuit-connector' | '126' | 'lower-object-above-shadow' | '127' | 'object' | '129' | 'higher-object-under' | '131' | 'higher-object-above' | '132' | 'item-in-inserter-hand' | '134' | 'wires' | '135' | 'wires-above' | '136' | 'entity-info-icon' | '138' | 'entity-info-icon-above' | '139' | 'explosion' | '142' | 'projectile' | '143' | 'smoke' | '144' | 'air-object' | '145' | 'air-entity-info-icon' | '147' | 'light-effect' | '148' | 'selection-box' | '187' | 'higher-selection-box' | '188' | 'collision-selection-box' | '189' | 'arrow' | '190' | 'cursor' | '210'\n\n";
        case 'SoundPath':
            return 'type SoundPath = string\n\n';
        case 'SpritePath':
            return 'type SpritePath = string\n\n';
        case 'Tags':
            return 'type Tags = {[key: string]: string | boolean | number | object}\n\n';
        case 'TriggerTargetMask':
            return 'type TriggerTargetMask = {[key: string]: boolean}\n\n'
        case 'Vector':
            return 'type Vector = [number, number] | {x: number, y: number}\n\n';
        default:
            throw new Error(`Unrecognized "concept" type concept ${concept.name}`);
    }
}

function writeConcepts(concepts: Concept[], apiVersion: string) {
    var output = `// Factorio global object definitions for API version ${apiVersion}\n\n`;

    for(let concept of concepts) {
        if(concept.category === 'union') {
            let notes = concept.notes || [];
            for(let option of concept.options) {
                if(option.description) {
                    notes.push(`For type ${parseType(option.type)} - ${option.description}`);
                }
            }
            concept.notes = notes;
        }
        output += writeDocs(concept, '');

        switch(concept.category) {
            case 'table':
            case 'table_or_array':
            case 'filter':
                // todo: variant parameters for table and filter
                output += `interface ${concept.name} {\n`
                for(let parameter of concept.parameters) {
                    output += writeDocs(parameter, '    ');
                    output += `    '${parameter.name}'`;
                    if(parameter.optional) {
                        output += '?';
                    }
                    output += `: ${parseType(parameter.type)}\n`;
                }
                output += '}\n\n';
                break;
            case 'enum':
                output += `declare enum ${concept.name} {\n`;
                for(let option of concept.options) {
                    output += writeDocs(option, '    ');
                    output += `    '${option.name}',\n`;
                }
                output += '}\n\n';
                break;
            case 'flag':
                output += `type ${concept.name} = {\n    [key in ${concept.name}Key]: true\n}\n\n`;
                output += `type ${concept.name}Key = ${concept.options.map(o => `'${o.name}'`).join(' | ')}\n\n`;
                break;
            case 'union':
                output += `type ${concept.name} = ${concept.options.map(o => parseType(o.type)).join(' | ')}\n\n`;
                break;
            case 'struct':
                output += `interface ${concept.name} {\n`;
                concept.attributes.forEach(a => output += writeAttribute(a));
                output += '}\n\n';
                break;
            case 'concept':
                output += writeCustomConcept(concept);
                break;
            default:
                // Unreachable with current types, but leaving this here in case more are added in the future
                throw new Error(`Unrecognized concept category ${(concept as Concept).category}`);
        }
    }

    fs.writeFileSync(__dirname + '/../dist/concepts.d.ts', output);
}

function writeGlobalObjects(globals: GlobalObject[], apiVersion: string) {
    var output = `// Factorio global object definitions for API version ${apiVersion}\n\n`;

    for(let globalObject of globals) {
        if(globalObject.description) {
            output += writeDocs(globalObject, '');
        }
        output += `declare const ${globalObject.name}: ${parseType(globalObject.type)}\n`;
    }

    fs.writeFileSync(__dirname + '/../dist/global.d.ts', output);
}