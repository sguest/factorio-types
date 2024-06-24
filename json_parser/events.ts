import * as ts from 'typescript';
import { writeDocs } from './docs';
import { parseType } from './types';
import { printNode, questionToken } from './tsUtils';
import { writeFile } from './files';

function parseEvent(event: FactorioEvent) {
    const members = event.data.map(param => {
        const prop = ts.factory.createPropertySignature([], param.name, param.optional ? questionToken : undefined, parseType(param.type));
        return writeDocs(prop, param);
    });
    var eventDefinition = ts.factory.createInterfaceDeclaration([], event.name, [], undefined, members);

    return writeDocs(eventDefinition, event);

}

export function writeEvents(apiData: RuntimeData) {
    let output = '';

    for(let event of apiData.events)
    {
        output += printNode(parseEvent(event)) + '\n';
    }

    writeFile('Factorio event definitions', 'runtime', output, 'events', apiData);
}