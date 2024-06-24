import * as ts from 'typescript';
import { parseType } from './types';
import { questionToken } from './tsUtils';
import { fixReservedName } from './format';

export function parseParameter(parameter: Parameter) {
    return ts.factory.createParameterDeclaration([], undefined, fixReservedName(parameter.name), parameter.optional ? questionToken : undefined, parseType(parameter.type), undefined)
}