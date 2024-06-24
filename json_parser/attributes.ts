import * as ts from 'typescript';
import { parseType } from './types';
import { writeDocs } from './docs';
import { questionToken } from './tsUtils';

export function parseAttribute(attribute: Attribute) {
    const modifiers: ts.Modifier[] = [];

    // Typescript doesn't support writeonly, so only checking for write capability
    if(attribute.write === false) {
        modifiers.push(ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword));
    }

    const node = ts.factory.createPropertySignature(modifiers, attribute.name, attribute.optional ? questionToken : undefined, parseType(attribute.type));

    return writeDocs(node, attribute);
}