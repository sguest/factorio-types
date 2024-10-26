import * as ts from 'typescript';
import { writeDocs } from './docs';
import { writeFile } from './files';
import { mapBuiltin, parseParentStructure } from './format';
import { createHeritage, printNode } from './tsUtils';
import { parseType } from './types';
import { parseAttribute } from './attributes';
import { parseProperty } from './properties';

export function writePrototypeTypes(apiData: PrototypeData) {
    let output = '';

    const childTypes = parseParentStructure(apiData.types);

    const indexedTypes:  {[key: string]: FactorioPrototypeType} = {};

    for(let typeData of apiData.types) {
        indexedTypes[typeData.name] = typeData;
        if(childTypes[typeData.name]) {
            /*
             * Factorio prototypes often have super/sub classes with a "type" property of different literal strings
             * Typescript doesn't support this inheritance as the properties are incompatible, so inject a 
             * surrogate "base" interface with all the properties, and a new interface to handle the base type's literal
             */
            const typeIndex = typeData.properties.findIndex(p => p.name === 'type');
            if(typeIndex >= 0) {
                let typeProp = typeData.properties[typeIndex];
                let handled = false;
                if(typeof typeProp.type === 'object' && (typeProp.type.complex_type === 'literal' || typeProp.type.complex_type === 'union')) {
                    let typeValue = '';

                    if(typeProp.type.complex_type === 'literal') {
                        typeValue = `'${typeProp.type.value}'`;
                        handled = true;
                    }
                    else if(typeProp.type.complex_type === 'union') {
                        handled = true;
                        for(let option of typeProp.type.options) {
                            if(typeof option !== 'object' || option.complex_type !== 'literal') {
                                handled = false;
                            }
                        }
                        if(handled) {
                            typeValue = typeProp.type.options.map(s => `'${(s as LiteralType).value}'`).join(' | ')
                        }
                    }

                    if(handled)
                    {
                        let baseName = typeData.name + 'Base';
                        let typeName = typeData.name;

                        output += `interface ${typeName} extends ${baseName} {\n`;
                        output += `    type: ${typeValue}\n`
                        output += '}\n\n';

                        typeData.name = baseName;
                        typeProp.type = 'string';

                        for(let child of childTypes[typeName]) {
                            child.parent = baseName;
                        }
                    }
                }
                if(!handled) {
                    throw new Error('Cannot handle type inheritance where type property is not a literal or union of literals');
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
                let parentType: FactorioPrototypeType | undefined;
                if(typeData.parent) {
                    parentType = indexedTypes[typeData.parent];
                }

                if(typeof parentType?.type === 'object' && 'complex_type' in parentType.type && parentType?.type.complex_type !== 'struct') {
                    // Handle struct inheriting from non-struct. By default structs are an interface, but non-structs are modeled as types instead
                    // interface can't inherit from a type, so use an intersection type instead
                    let intersection = ts.factory.createIntersectionTypeNode([parseType(typeData.parent), parseType(typeData.type, typeData)])
                    node = ts.factory.createTypeAliasDeclaration([], typeData.name, [], intersection); 
                }
                else
                {
                    node = ts.factory.createInterfaceDeclaration([], typeData.name, [], createHeritage(typeData.parent), typeData.properties.map(parseProperty));
                }
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