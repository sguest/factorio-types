import * as ts from 'typescript';
import { parseType } from './types';
import { writeDocs } from './docs';
import { questionToken } from './tsUtils';

export function parseProperty(property: Property) {
    const modifiers: ts.Modifier[] = [];

    const node = ts.factory.createPropertySignature(modifiers, property.name, property.optional ? questionToken : undefined, parseType(property.type))

    return writeDocs(node, property);
}