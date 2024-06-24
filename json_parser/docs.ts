import * as ts from 'typescript';
import { printNode } from './tsUtils';
import { fixReservedName } from './format';

function formatLinks(text: string) {
    return text.replace(/\[([^\]]*)\]\(([^\)]*)\)/g, '{@link $1 | $2}');
}

export function writeDocs<T extends ts.Node>(node: T, data: FactorioClass | FactorioEvent | Concept | Method | Attribute | FactorioPrototypeType | { description?: string }) {
    const tags: ts.JSDocTag[] = [];
    let description = data.description;
    if('lists' in data && data.lists) {
        for(let list of data.lists) {
            description += '\n' + list
        }
    }
    if('parameters' in data) {
        for(let parameter of data.parameters.sort((a, b) => a.order - b.order)) {
            let prepend = '';
            if('format' in data && 'takes_table' in data.format && data.format.takes_table) {
                prepend = 'table.';
            }
            if(parameter.description) {
                tags.push(ts.factory.createJSDocParameterTag(undefined, ts.factory.createIdentifier(prepend + fixReservedName(parameter.name)), false, undefined, true, parameter.description));
            }
        }
        if('variadic_parameter' in data && data.variadic_parameter?.description) {
            tags.push(ts.factory.createJSDocParameterTag(undefined, ts.factory.createIdentifier('args'), false, undefined, true, data.variadic_parameter.description));
        }
    }
    if('examples' in data && data.examples) {
        for(let example of data.examples)
        {
            tags.push(ts.factory.createJSDocUnknownTag(ts.factory.createIdentifier('example'), example))
        }
    }
    if('return_values' in data && data.return_values?.length > 0)
    {
        if(data.return_values.length === 1) {
            if(data.return_values[0].description)
            {
                tags.push(ts.factory.createJSDocReturnTag(undefined, undefined, data.return_values[0].description))
            }
        }
        else {
            for(let returnValue of data.return_values)
            {
                tags.push(ts.factory.createJSDocReturnTag(undefined, undefined, `[${returnValue.order}] - ${returnValue.description}`))
            }
        }
    }

    var comment = ts.factory.createJSDocComment(description, tags);
    let text = printNode(comment).replace(/^\/\*|\*\/$/g, '');

    text = formatLinks(text);

    if(description?.length || tags.length) {
        return ts.addSyntheticLeadingComment(node, ts.SyntaxKind.MultiLineCommentTrivia, text, true);
    }

    return node;
}