import * as ts from 'typescript';
import { extractTypeNames, formatTypeName, mapBuiltin, parameterToAttribute } from './format';
import { parseType } from './types';
import { writeDocs } from './docs';
import { parseAttribute } from './attributes';
import { writeFile } from './files';
import { createHeritage, printNode } from './tsUtils';

function parseVariants(concept: Concept) {
    const tableType = concept.type as TableType;
    const conceptName = concept.name;
    const baseName = 'Base' + conceptName;
    const unionTypes = [baseName];

    let markerProperty: Parameter | undefined = undefined;

    if(tableType.variant_parameter_description) {
        let variantMarkerTypes = extractTypeNames(tableType.variant_parameter_description);
        if(variantMarkerTypes.length === 1) {
            markerProperty = tableType.parameters.find(p => p.name === variantMarkerTypes[0]);
        }
    }

    concept.name = baseName;

    let conceptNodes: ts.Node[] = [];

    for(let variantGroup of tableType.variant_parameter_groups!) {
        let parameters = variantGroup.parameters;
        if(markerProperty) {
            // concept type discriminators have a couple weird cases we're just going to handle manually
            let typeValue: string | undefined = variantGroup.name;
            // TechnologyModifier has this as magic string that means "none of the above". Best representation is simply remove it from the subclass
            if(typeValue === 'OtherTypes') {
                typeValue = undefined;
            }
            // true if the type is a define
            else if(!/\./.test(typeValue)) {
                typeValue = `'${typeValue}'`;
            }

            if(typeValue) {
                parameters.unshift({ ...markerProperty, type: typeValue });
            }
        }
        let attributes = variantGroup.parameters.map(parameterToAttribute);

        let typeName = conceptName + formatTypeName(variantGroup.name);
        let typeNode = ts.factory.createInterfaceDeclaration(
            [],
            typeName,
            [],
            createHeritage(baseName),
            attributes.map(parseAttribute).flat())

        conceptNodes.push(writeDocs(typeNode, { description: variantGroup.description + `\nApplies to variant case \`${variantGroup.name}\``}));
        unionTypes.push(typeName);
    }

    const unionNode = ts.factory.createTypeAliasDeclaration(undefined, conceptName, [],
        ts.factory.createUnionTypeNode(unionTypes.map(u => ts.factory.createTypeReferenceNode(u)))
    )

    return [writeDocs(unionNode, concept), ...conceptNodes];
}

function parseConcept(concept: Concept) {
    let complexType: string | undefined = undefined;

    if(typeof concept.type === 'object' && 'complex_type' in concept.type) {
        complexType = concept.type.complex_type;
    }

    if(complexType === 'builtin') {
        const parsed = mapBuiltin(concept.name);
        if(!parsed) {
            return [];
        }
        concept.type = parsed;
    }

    // Add the extra layers 13-55 supported by CollisionMaskLayer but not present in the API spec
    if(concept.name === 'CollisionMaskLayer') {
        let cmlType = concept.type as UnionType;
        for(let i = 13; i <= 55; i++) {
            cmlType.options.push({
                complex_type: 'literal',
                value: `layer-${i}`,
                description: '',
            })
        }
    }

    // The variant groups setup for this type is very strange and feels wrong. Just omitting it for now.
    if(concept.name === 'LuaPostEntityDiedEventFilter') {
        (concept.type as TableType).variant_parameter_groups = undefined;
    }

    const variantNodes: ts.Node[] = [];

    if(complexType === 'table' && (concept.type as TableType).variant_parameter_groups?.length) {
        // mark the variants as handled
        variantNodes.push(...parseVariants(concept));
        (concept.type as TableType).variant_parameter_groups = undefined;
    }

    const type = parseType(concept.type);
    let node: ts.Node;
    if(complexType === 'table' || complexType === 'LuaStruct') {
        const literalNode = type as ts.TypeLiteralNode;
        node = ts.factory.createInterfaceDeclaration([], concept.name, [], [], literalNode.members);
    }
    else {
        node = ts.factory.createTypeAliasDeclaration([], concept.name, [], type);
    }

    return [writeDocs(node, concept), ...variantNodes];
}

export function writeConcepts(apiData: RuntimeData) {
    var output ='';

    for(let concept of apiData.concepts) {
        for(let parsed of parseConcept(concept)) {
            output += printNode(parsed) + '\n';
        }
    }

    writeFile('Factorio concept definitions', 'runtime', output, 'concepts', apiData);
}