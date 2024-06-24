import * as ts from 'typescript';
import { parseParameter } from './parameters';
import { parseType } from './types';
import { writeDocs } from './docs';
import { questionToken } from './tsUtils';

function parseReturnValue(returnValue: MethodReturnValue) {
    const type = parseType(returnValue.type);

    return returnValue.optional ? ts.factory.createUnionTypeNode([type, ts.factory.createTypeReferenceNode('null')]) : type;
}

function parseMethodReturnValue(method: Method) {
    if(method.return_values.length === 1)
    {
        return parseReturnValue(method.return_values[0]);
    }
    else if(method.return_values.length > 1)
    {
        const generics = ts.factory.createTupleTypeNode(method.return_values.map(parseReturnValue));
        return ts.factory.createTypeReferenceNode('LuaMultiReturn', [generics]);
    }
    return parseType('void');
}

function parseMethodParams(method: Method) {
    const parameters = method.parameters.sort((a, b) => a.order - b.order);
    let params: ts.ParameterDeclaration[] = method.format.takes_table ? [
        ts.factory.createParameterDeclaration([], undefined, 'table', undefined, 
        ts.factory.createTypeLiteralNode(parameters.map(p => ts.factory.createPropertySignature([], p.name, p.optional ? questionToken : undefined, parseType(p.type)))), undefined)
    ] : parameters.sort((a, b) => a.order - b.order).map(parseParameter);
    params.unshift(parseParameter({ name: 'this', type: 'void', order: 0, description: '', optional: false}))
    if(method.variadic_parameter) {
        params.push(ts.factory.createParameterDeclaration(
            [],
            ts.factory.createToken(ts.SyntaxKind.DotDotDotToken),
            'args',
            undefined,
            parseType({
                complex_type: 'array',
                value: method.variadic_parameter.type
            })))
    }
    return params;
}

export function parseMethod(method: Method) {
    if(method.variant_parameter_groups?.length) {
        // Variant parameter groups should have been taken care of at a higher level, such as the class parsing
        // throw to make sure we don't miss any
        throw new Error('Unexpected method with variant_parameterGroups: ' + method.name);
    }
    const params = parseMethodParams(method);
    const returnValue = parseMethodReturnValue(method);
    const node = ts.factory.createMethodSignature([], method.name, undefined, [], params, returnValue);

    return writeDocs(node, method);
}