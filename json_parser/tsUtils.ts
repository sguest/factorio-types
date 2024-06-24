import * as ts from 'typescript';

const file = ts.createSourceFile('', '', ts.ScriptTarget.ESNext);
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

export const questionToken = ts.factory.createToken(ts.SyntaxKind.QuestionToken);

export function printNode(node: ts.Node) {
    return printer.printNode(ts.EmitHint.Unspecified, node, file);
}

export function createHeritage(name: string | undefined) {
    if(!name) {
        return []
    }

    return [
        ts.factory.createHeritageClause(
            ts.SyntaxKind.ExtendsKeyword,
            [ts.factory.createExpressionWithTypeArguments(ts.factory.createIdentifier(name), undefined)])
    ]
}