import * as ts from 'typescript';
import { writeDocs } from './docs';
import { parseAttribute } from './attributes';
import { questionToken } from './tsUtils';
import { parseProperty } from './properties';

const specialCaseKeys = [
    'CollisionLayerID',
    'EntityPrototypeFlag',
    'AirbornePollutantID',
    'ItemID',
    'EntityID',
    'TileID',
    'DecorativeID',
    'AutoplaceControlID',
    'DirectionString',
    'ItemPrototypeFlag'
]

// This could be expanded in the future, but these handle most of the cases present in the type definitions currently
// The special case keys are cases where the property resolves to a string, but is represented by a type alias
// This relationship is very difficult to figure out at this point in the process, so just handle a few special cases
// If anything slips through this filter it will be represented by a LuaTable which is still valid
// just less conventient to work with than a Record
function isValidRecordKey(type: FactorioType) {
    if(typeof type === 'string') {
        return type === 'string' || type === 'uint' || specialCaseKeys.includes(type) || /^defines\./.test(type);
    }

    if(type.complex_type === 'literal') {
        return true;
    }

    if(type.complex_type === 'union') {
        for(let option of type.options) {
            if(!isValidRecordKey(option)) {
                return false;
            }
        }

        return true;
    }

    return false;
}

const parseArray = (type: ArrayType, parent?: FactorioPrototype | FactorioPrototypeType) => ts.factory.createArrayTypeNode(parseType(type.value, parent));

// Unions just allow their composite types to handle description, something like
// type MyType = /* foo description */ FooType | /* bar description */ BarType
// This ends up a little messy and isn't accessible via doc parsers
// Would love to do a better job of this, but it seems like support isn't there yet
// https://github.com/microsoft/TypeScript/issues/38106
const parseUnion = (type: UnionType, parent?: FactorioPrototype | FactorioPrototypeType) =>
    ts.factory.createUnionTypeNode(type.options.map(t => parseType(t, parent)));

const parseDictionary = (type: DictionaryType) => isValidRecordKey(type.key) ?
    ts.factory.createTypeReferenceNode('Record', [parseType(type.key), parseType(type.value)]) :
    ts.factory.createTypeReferenceNode('LuaTable', [parseType(type.key), parseType(type.value)]);

const parseFunction = (type: FunctionType) => {
    // The json spec doesn't appear to have enough info to identify the return type of the function, so we're stuck with `any`
    const params = [
        ts.factory.createParameterDeclaration([], undefined, 'this', undefined, ts.factory.createTypeReferenceNode('void'), undefined),
        ...type.parameters.map((parameter, index) => ts.factory.createParameterDeclaration([], undefined, `arg${index}`, undefined, parseType(parameter), undefined))
    ]
    return ts.factory.createFunctionTypeNode(undefined, params, parseType('any'));
};

const parseTable = (type: TableType) => {
    if(type.variant_parameter_groups) {
        // Currently variant_parameter_groups are only found within class methods (which are handled at the class level)
        // or within concepts, which are handled at the concept level.
        // If they're ever introduced elsewhere, it would require additional considerations how to handle them
        throw new Error('Unexpected variant_parameter_groups in non-concept table type');
    }
    const members = type.parameters.sort((a, b) => a.order - b.order).map(p => {
        let name = p.name;
        if(/-/.test(name)) {
            name = `'${name}'`;
        }
        const node = ts.factory.createPropertySignature([], name, p.optional ? questionToken : undefined, parseType(p.type))
        return writeDocs(node, { description: p.description });
    });
    return ts.factory.createTypeLiteralNode(members);
};

const parseTuple = (type: TupleType, parent?: FactorioPrototype | FactorioPrototypeType) => ts.factory.createTupleTypeNode(type.values.map(t => parseType(t, parent)));

const parseLuaLazyLoadedValue = (type: LuaLazyLoadedValueType, parent?: FactorioPrototype | FactorioPrototypeType) => ts.factory.createTypeReferenceNode('LuaLazyLoadedValue', [parseType(type.value, parent)]);

const parseLiteral = (type: LiteralType) => {
    let value = type.value;
    if(typeof value === 'string') {
        value = `'${value}'`;
    }
    return ts.factory.createTypeReferenceNode(value.toString());
};

const parseStruct = (type: StructType) => {
    const members = type.attributes.map(parseAttribute).flat();
    return ts.factory.createTypeLiteralNode(members);
}

const parseStructParent = (parent?: FactorioPrototype | FactorioPrototypeType) => {
    if(!parent) {
        throw new Error('Cannot parse struct type without parent info');
    }
    return ts.factory.createTypeLiteralNode(parent.properties.map(parseProperty));
}

export function parseType(type: FactorioType | undefined, parent?: FactorioPrototype | FactorioPrototypeType): ts.TypeNode {
    type ??= 'void';
    if(typeof type === 'string') {
        // This type doesn't exist but has been referenced in the spec for several versions now. Adding an exception to get the build working.
        // https://forums.factorio.com/viewtopic.php?p=650354#p650354
        if(type === 'DamageEntityTriggerEffectItem')
        {
            type = 'DamageTriggerEffectItem';
        }
        return ts.factory.createTypeReferenceNode(type)
    }

    let node: ts.TypeNode | undefined = undefined;
    switch(type.complex_type) {
        case 'array':
            node = parseArray(type, parent);
            break;
        case 'union':
            node = parseUnion(type, parent);
            break;
        case 'dictionary':
        case 'LuaCustomTable':
            node = parseDictionary(type);
            break;
        case 'function':
            node = parseFunction(type);
            break;
        case 'table':
            node = parseTable(type);
            break;
        case 'tuple':
            node = parseTuple(type, parent);
            break;
        case 'LuaLazyLoadedValue':
            node = parseLuaLazyLoadedValue(type, parent);
            break;
        case 'literal':
            node = parseLiteral(type);
            break;
        case 'type':
            node = parseType(type.value);
            break;
        case 'LuaStruct':
            node = parseStruct(type);
            break;
        case 'struct':
            node = parseStructParent(parent);
            break;
    }

    if(!node) {
        //Unreachable assuming the current types are exhaustive, but leaving this here so that future added types will throw instead of being silently ignored
        throw new Error(`unrecognized complex type ${type['complex_type']}`);
    }

    if('description' in type) {
        return writeDocs(node, type);
    }

    return node;
}