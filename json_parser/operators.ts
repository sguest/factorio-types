import * as ts from 'typescript';
import { parseMethod } from './methods';
import { parseType } from './types';
import { writeDocs } from './docs';

export function parseOperator(operator: Method | Attribute) {
    switch(operator.name)
    {
        case 'length':
            const lengthReturn = ts.factory.createTypeReferenceNode('LuaLengthMethod', [parseType((operator as Attribute).read_type)]);
            const node = ts.factory.createPropertySignature([], operator.name, undefined, lengthReturn);
            return writeDocs(node, operator);
        case 'index':
            // Using "any" as key type since the JSON doesn't give any type information on it
            const attribute = operator as Attribute;
            const getReturn = ts.factory.createTypeReferenceNode('LuaTableGetMethod', [parseType('any'), parseType(attribute.read_type)]);
            const getNode = ts.factory.createPropertySignature([], 'get', undefined, getReturn);
            const setReturn = ts.factory.createTypeReferenceNode('LuaTableSetMethod', [parseType('any'), parseType(attribute.read_type)]);
            const setNode = ts.factory.createPropertySignature([], 'set', undefined, setReturn);

            return [
                writeDocs(getNode, operator),
                writeDocs(setNode, operator),
            ];
        case 'call':
            operator.name = '';
            return parseMethod(operator as Method);
        default:
            throw new Error(`Unrecognized operator name ${operator.name}`);
    }
}