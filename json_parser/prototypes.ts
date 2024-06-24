import * as ts from 'typescript';
import { parseType } from './types';
import { createHeritage, printNode } from './tsUtils';
import { writeFile } from './files';
import { parseAttribute } from './attributes';
import { writeDocs } from './docs';
import { parseParentStructure } from './format';

function parsePrototype(prototype: FactorioPrototype) {
    // Ugly hack, but this is a weird one-off where a property in a sub-class is a more generic union than the superclass
    // a truly dynamic fix probably isn't worth it for this one case, so just "fix" it manually by maknig the parent accept the union
    if(prototype.name === 'ItemWithInventoryPrototype') {
        let property = prototype.properties.find(p => p.name === 'inventory_size');
        property!.type = {
            complex_type: 'union',
            options: [
                'ItemStackIndex',
                {
                    "complex_type": "literal",
                    "value": "dynamic"
                }
            ],
        };
        property!.description += ' - This will only accept an ItemStackIndex. The union with \'dynamic\' is only to satisfy BlueprintBookPrototype within Typescript\'s inheritance rules';
    }

    const node = ts.factory.createInterfaceDeclaration([], prototype.name, [], createHeritage(prototype.parent), prototype.properties.map(parseAttribute));

    return writeDocs(node, prototype);
}

function parseDataCollection(prototypes: FactorioPrototype[]) {
    let members: ts.TypeElement[] = [];
    for(let prototype of prototypes) {
        if(prototype.typename) {
            const indexer = ts.factory.createIndexSignature(
                undefined,
                [ts.factory.createParameterDeclaration([], undefined, "key", undefined, parseType('string'), undefined)],
                parseType(prototype.name))
            let type = ts.factory.createTypeLiteralNode([indexer]);
            members.push(ts.factory.createPropertySignature([], `'${prototype.typename}'`, undefined, type));
        }
    }

    return ts.factory.createInterfaceDeclaration([], 'dataCollection', [], [], members);
}

export function writePrototypes(apiData: PrototypeData) {
    parseParentStructure(apiData.prototypes);

    let output = '';
    let dataExtensionUnion: ts.TypeNode[] = [];

    for(let prototype of apiData.prototypes) {
        output += printNode(parsePrototype(prototype)) + '\n';
        if(prototype.typename) {
            /*
             * using an intersection type to add the "type" property instead of putting it directly on the type itself
             * because inheritance relationships have different types.
             * For example ArmorPrototype (type: 'armor') extends ToolPrototype (type: 'tool')
             * this would make an invalid inheritance hierarchy.
             */
            dataExtensionUnion.push(ts.factory.createIntersectionTypeNode([
                ts.factory.createTypeLiteralNode([
                    ts.factory.createPropertySignature([], 'type', undefined, ts.factory.createTypeReferenceNode(`'${prototype.typename}'`))
                ]),
                ts.factory.createTypeReferenceNode(prototype.name)
            ]));
        }
    }

    const unionNode = ts.factory.createUnionTypeNode([
        ...dataExtensionUnion,
        ts.factory.createTypeReferenceNode('settings.dataExtendType'),
        ts.factory.createTypeReferenceNode('PrototypeBase'),
    ]);

    output += printNode(ts.factory.createTypeAliasDeclaration([], 'dataExtendType', [], unionNode));

    writeFile('Factorio prototypes', 'prototype', output, 'prototypes', apiData);
}

export function writeDataCollection(apiData: PrototypeData) {
    let output = printNode(parseDataCollection(apiData.prototypes));

    writeFile('Factorio prototype data collection', 'prototype', output, 'datacollection', apiData);
}