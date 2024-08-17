import * as ts from 'typescript';
import { writeDocs } from './docs';
import { printNode } from './tsUtils';
import { writeFile } from './files';

function parseDefine(define: Define): ts.EnumDeclaration | ts.ModuleDeclaration {
    if(define.values?.length && define.subkeys?.length) {
        // This currently doesn't exist, and it's unclear what such a structure would look like
        // throwing just in case such a structure is ever added
        throw new Error('Cannot write define with both subkeys and values');
    }

    if(/-/.test(define.name)) {
        define.description = (`@customName ${define.name}\n` + define.description).trim();
        define.name = define.name.replace(/-/g, '_');
    }

    if(define.subkeys?.length) {
        return writeDocs(ts.factory.createModuleDeclaration(
            undefined,
            ts.factory.createIdentifier(define.name),
            ts.factory.createModuleBlock(define.subkeys.map(parseDefine)),
            ts.NodeFlags.Namespace), define);
    }
    else {
        const members = define.values?.map(member => {
            if(/-/.test(member.name)) {
                member.name = `'${member.name}'`;
            }
            const memberNode = ts.factory.createEnumMember(member.name, ts.factory.createNumericLiteral(member.order));
            return writeDocs(memberNode, member);
        }) ?? [];

        return writeDocs(ts.factory.createEnumDeclaration([], define.name, members), define);
    }
}

export function writeDefines(apiData: RuntimeData) {
    var output = '';
    for(let define of apiData.defines)
    {
        output += printNode(parseDefine(define)) + '\n';
    }
    writeFile('Factorio defines', 'defines', output, 'defines', apiData);
}