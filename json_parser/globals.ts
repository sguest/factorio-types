import * as ts from 'typescript';
import { parseType } from './types';
import { writeDocs } from './docs';
import { parseMethod } from './methods';
import { writeFile } from './files';
import { printNode } from './tsUtils';

const declareModifier = ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword);

function parseGlobalObject(obj: GlobalObject) {
    const node = ts.factory.createVariableStatement(
        [declareModifier],
        ts.factory.createVariableDeclarationList([
            ts.factory.createVariableDeclaration(obj.name, undefined, parseType('runtime.' + obj.type))
        ], ts.NodeFlags.Const)
    );
    return writeDocs(node, obj);
} 

function parseGlobalFunction(fn: Method) {
    for(let param of fn.parameters) {
        if(typeof param.type !== 'string') {
            // Currently all global functions have params of type string, which makes this the easiest way to prepend "runtime"
            // Figure out a better method later if this is ever not true
            throw new Error(`Unexpected non-string type for global function parameter ${fn.name}#${param.name}`);
        }
        param.type = 'runtime.' + param.type;
    }

    const method = parseMethod(fn);
    const node = ts.factory.createFunctionDeclaration([declareModifier], undefined, fn.name, undefined, method.parameters, method.type, undefined);
    return writeDocs(node, fn);
}

export function writeGlobals(apiData: RuntimeData) {
    let output = '';

    for(let globalObject of apiData.global_objects) {
        output += printNode(parseGlobalObject(globalObject)) + '\n';
    }

    for(let globalFunction of apiData.global_functions) {
        output += printNode(parseGlobalFunction(globalFunction)) + '\n';
    }

    writeFile('Factorio global definitions', undefined, output, 'global', apiData);
}