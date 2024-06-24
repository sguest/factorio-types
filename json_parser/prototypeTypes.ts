import * as ts from 'typescript';
import { writeDocs } from './docs';
import { writeFile } from './files';
import { mapBuiltin, parseParentStructure } from './format';
import { createHeritage, printNode } from './tsUtils';
import { parseType } from './types';
import { parseAttribute } from './attributes';

export function writePrototypeTypes(apiData: PrototypeData) {
    let output = '';

    const childTypes = parseParentStructure(apiData.types);

    for(let typeData of apiData.types) {
        if(childTypes[typeData.name]) {
            /*
             * Factorio prototypes often have super/sub classes with a "type" property of different literal strings
             * Typescript doesn't support this inheritance as the properties are incompatible, so inject a 
             * surrogate "base" interface with all the properties, and a new interface to handle the base type's literal
             */
            const typeIndex = typeData.properties.findIndex(p => p.name === 'type');
            if(typeIndex >= 0) {
                let typeProp = typeData.properties[typeIndex];
                if(typeof typeProp.type === 'object' && typeProp.type.complex_type === 'literal') {
                    let baseName = typeData.name + 'Base';
                    let typeName = typeData.name;

                    output += `interface ${typeName} extends ${baseName} {\n`;
                    output += `    type: '${typeProp.type.value}'\n`
                    output += '}\n\n';

                    typeData.name = baseName;
                    typeProp.type = 'string';

                    for(let child of childTypes[typeName]) {
                        child.parent = baseName;
                    }
                }
                else {
                    throw new Error('Cannot handle type inheritance where type property is non-literal');
                }
            }
        }
    }

    for(let typeData of apiData.types)
    {
        let node: ts.Node | undefined = undefined;
        if(typeData.type === 'builtin')
        {
            var mapped = mapBuiltin(typeData.name);

            if(mapped) {
                node = ts.factory.createTypeAliasDeclaration([], typeData.name, [], ts.factory.createTypeReferenceNode(mapped));
            }
        }
        else {
            if(typeof typeData.type === 'object' && 'complex_type' in typeData.type && typeData.type.complex_type === 'struct') {
                node = ts.factory.createInterfaceDeclaration([], typeData.name, [], createHeritage(typeData.parent), typeData.properties.map(parseAttribute));
            }
            else {
                try{
                node = ts.factory.createTypeAliasDeclaration([], typeData.name, [], parseType(typeData.type, typeData))
                }
                catch(e)
                {
                    console.log('Failed - ' + JSON.stringify(typeData));
                    throw e;
                }
            }
        }

        if(node) {
            output += printNode(writeDocs(node, typeData)) + '\n';
        }
    }

    writeFile('Factorio type definitions for prototypes', 'prototype', output, 'types', apiData);
}