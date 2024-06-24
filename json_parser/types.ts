import * as ts from 'typescript';
import { writeDocs } from './docs';
import { parseAttribute } from './attributes';
import { questionToken } from './tsUtils';

const parseArray = (type: ArrayType, parent?: FactorioPrototype | FactorioPrototypeType) => ts.factory.createArrayTypeNode(parseType(type.value, parent));

// Unions just allow their composite types to handle description, something like
// type MyType = /* foo description */ FooType | /* bar description */ BarType
// This ends up a little messy and isn't accessible via doc parsers
// Would love to do a better job of this, but it seems like support isn't there yet
// https://github.com/microsoft/TypeScript/issues/38106
const parseUnion = (type: UnionType, parent?: FactorioPrototype | FactorioPrototypeType) =>
    ts.factory.createUnionTypeNode(type.options.map(t => parseType(t, parent)));

const parseDictionary = (type: DictionaryType) => ts.factory.createTypeReferenceNode('Record', [parseType(type.key), parseType(type.value)]);

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
    const members = type.attributes.map(parseAttribute);
    return ts.factory.createTypeLiteralNode(members);
}

const parseStructParent = (parent?: FactorioPrototype | FactorioPrototypeType) => {
    if(!parent) {
        throw new Error('Cannot parse struct type without parent info');
    }
    return ts.factory.createTypeLiteralNode(parent.properties.map(parseAttribute));
}

export function parseType(type: FactorioType | undefined, parent?: FactorioPrototype | FactorioPrototypeType): ts.TypeNode {
    type ??= 'void';
    if(typeof type === 'string') {
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