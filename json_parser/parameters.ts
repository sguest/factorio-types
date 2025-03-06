import * as ts from 'typescript';
import { parseType } from './types';
import { questionToken } from './tsUtils';
import { fixReservedName } from './format';

export function parseParameter(parameter: Parameter) {
    // Fix for some bad data
    if(parameter.type === 'interrupt_index') {
        [parameter.type, parameter.name] = [parameter.name, parameter.type];
    }
    return ts.factory.createParameterDeclaration([], undefined, fixReservedName(parameter.name), parameter.optional ? questionToken : undefined, parseType(parameter.type), undefined)
}