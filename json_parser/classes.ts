import * as ts from 'typescript';
import { parseMethod } from './methods';
import { parseAttribute } from './attributes';
import { writeDocs } from './docs';
import { parseOperator } from './operators';
import { extractTypeNames, formatTypeName, parameterToAttribute } from './format';
import { writeFile } from './files';
import { createHeritage, printNode } from './tsUtils';

function parseVariants(classData: FactorioClass, method: Method) {
    if(!method.format.takes_table) {
        // Unsure how to document variant parameters in the case where it's not a table-valued function
        throw new Error(`Unexpected class method ${classData.name}#${method.name} that has variant_parameter_groups but does not take a table`);
    }
    const unionName = formatTypeName(classData.name) + formatTypeName(method.name) + 'Params';
    const baseName = 'Base' + unionName;
    const unionTypes = [baseName];

    let markerProperty: Parameter | undefined = undefined;

    if(method.variant_parameter_description) {
        let variantMarkerTypes = extractTypeNames(method.variant_parameter_description);
        if(variantMarkerTypes.length === 1) {
            markerProperty = method.parameters.find(p => p.name === variantMarkerTypes[0]);

            if(markerProperty) {
                markerProperty.type = {
                    complex_type: 'union',
                    options: method.variant_parameter_groups!.map(g => `'${g.name}'`),
                }
            }
        }
    }

    let classNodes = [...parseClass({
        name: baseName,
        description : '',
        order: 0,
        attributes: method.parameters.map(parameterToAttribute),
    })];

    for(let variantGroup of method.variant_parameter_groups!) {
        let parameters = variantGroup.parameters;
        if(markerProperty) {
            parameters.unshift({ ...markerProperty, type: `'${variantGroup.name}'` });
        }
        let attributes = variantGroup.parameters.map(parameterToAttribute);

        let typeName = unionName + formatTypeName(variantGroup.name);
        classNodes.push(...parseClass({
            name: typeName,
            order: 0,
            description: variantGroup.description + `\nApplies to variant case \`${variantGroup.name}\``,
            parent: baseName,
            attributes,
        }));
        unionTypes.push(typeName);
    }

    method.parameters = [{
        name: 'table',
        order: 0,
        description: '',
        type: unionName,
        optional: false,
    }];
    // The method actually *does* take a table, but it's using a reference to the union we just generated instead of an inline table type
    method.format.takes_table = false;

    const unionNode = ts.factory.createTypeAliasDeclaration(undefined, unionName, [],
        ts.factory.createUnionTypeNode(unionTypes.map(u => ts.factory.createTypeReferenceNode(u)))
    )

    return [unionNode, ...classNodes];
}

function parseClass(classData: FactorioClass) {
    const members: ts.TypeElement[] = [];
    const generics: ts.TypeParameterDeclaration[] = [];

    // LuaLazyLoadedValue should be a generic, but this concept is not reflected in the api definition
    if(classData.name === 'LuaLazyLoadedValue') {
        generics.push(ts.factory.createTypeParameterDeclaration([], 'T'));
        const getMethod = classData.methods?.find(m => m.name === 'get');
        getMethod!.return_values[0].type = 'T';
    }

    const variantNodes: ts.Node[] = [];

    for(let method of classData.methods ?? []) {
        if(method.variant_parameter_groups?.length) {
            variantNodes.push(...parseVariants(classData, method));
            // Mark the variant paramter groups as "handled" so the guard clause in parseMethod doesn't throw
            method.variant_parameter_groups = undefined;
        }
    }

    members.push(...classData.methods?.map(parseMethod) ?? []);

    members.push(...classData.attributes?.map(parseAttribute).flat() ?? []);

    members.push(...classData.operators?.map(parseOperator).flat() ?? []);

    var classDefinition = ts.factory.createInterfaceDeclaration([], classData.name, generics, createHeritage(classData.parent), members);

    return [writeDocs(classDefinition, classData), ...variantNodes];
}

// Generate a specific `on_event` definition for each event type, to make implicit typing much more useful
// typescript core typings use a similar pattern for HTML events
function addEventOverloads(apiData: RuntimeData) {
    const luaBootstrap = apiData.classes.find(c => c.name === 'LuaBootstrap');
    const eventIndex = luaBootstrap!.methods!.findIndex(m => m.name === 'on_event');
    const onEvent = luaBootstrap!.methods![eventIndex];
    const eventDefine = apiData.defines.find(d => d.name === 'events');
    const newMethods: Method[] = [];

    for(let eventName of eventDefine!.values!.map(e => e.name)) {
        const parameters = onEvent.parameters.map<Parameter>(p => {
            if(p.name === 'event') {
                return { ...p, type: 'defines.events.' + eventName };
            }
            if(p.name === 'handler') {
                return { ...p, type: {
                    complex_type: 'union',
                    options: [
                        {
                            complex_type: 'function',
                            parameters: [ 'runtime.' + eventName ],
                        },
                        'nil',
                    ]
                }};
            }
            return p;
        });
        newMethods.push({ ...onEvent, parameters });
    }

    luaBootstrap!.methods!.splice(eventIndex, 0, ...newMethods);
}

export function writeClasses(apiData: RuntimeData) {
    let output = '';

    let classDataList = apiData.classes;

    addEventOverloads(apiData);

    for(let classData of classDataList)
    {
        for(let node of parseClass(classData)) {
            output += printNode(node) + '\n';
        }
    }

    writeFile('Factorio class definitions', 'runtime', output, 'classes', apiData);
}