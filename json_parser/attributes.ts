import * as ts from 'typescript';
import { parseType } from './types';
import { writeDocs } from './docs';
import { questionToken } from './tsUtils';
import { deepEqual } from './utils';

export function parseAttribute(attribute: Attribute) {
    const modifiers: ts.Modifier[] = [];

    const type = attribute.read_type || attribute.write_type;

    const mismatchedTypes = !!attribute.read_type && !!attribute.write_type && !deepEqual(attribute.read_type, attribute.write_type)

    // Typescript doesn't support writeonly, so only checking for write capability
    if(!attribute.write_type || mismatchedTypes) {
        modifiers.push(ts.factory.createModifier(ts.SyntaxKind.ReadonlyKeyword));
    }
    const nodes: ts.PropertySignature[] = [writeDocs(
        ts.factory.createPropertySignature(modifiers, attribute.name, attribute.optional ? questionToken : undefined, parseType(type))
    , attribute)];

    if(mismatchedTypes) {
        nodes.push(writeDocs(
            ts.factory.createPropertySignature([], attribute.name + '_write', attribute.optional ? questionToken : undefined, parseType(attribute.write_type))
        , attribute, { customAttributes: [`@customName ${attribute.name}`]}));
    }

    return nodes;
}