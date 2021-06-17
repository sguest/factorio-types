/// <reference path="./factorio-json.d.ts" />

import * as http from 'https';
import * as fs from 'fs';

const fileName = __dirname + '/runtime-api.json';

let arg = process.argv[2];
if(arg === '-clean' && fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
}

if(!fs.existsSync(fileName)) {
    // Save a local copy of the file so it's possible to re-run the parser without waiting for a download each time
    // Run with -clean or delete the local copy to get fresh data (like between versions)
    http.get('https://lua-api.factorio.com/latest/runtime-api.json', (response) => {
        response.on('end', handleFile);
        response.pipe(fs.createWriteStream(fileName));
    });
}
else {
    handleFile();
}

function handleFile() {
    const content = fs.readFileSync(fileName, 'utf-8');
    const apiData = JSON.parse(content) as ApiData;
    var apiVersion = apiData['application_version'];
    writeClasses(apiData.classes, apiVersion);
}

function formatLinks(text: string) {
    return text.replace(/\[([^\]]*)\]\(([^\)]*)\)/g, '{@link $1 | $2}');
}

function formatDocLines(text: string, indent: string) {
    return text.replace(/\n/g, `\n${indent} * `);
}

// Fix reserved words
function fixName(name: string) {
    if(name === 'function') {
        return 'fn';
    }

    return name;
}

function writeDocs(itemData: FactorioClass | Method, indent: string) {
    let output = '';
    if(itemData.description) {
        output += `${indent} * ${formatLinks(formatDocLines(itemData.description, indent))}\n`;
    }
    if(itemData.notes) {
        output += `${indent} * @remarks\n`;
        for(let note of itemData.notes)
        {
            output += `${indent} * ${formatLinks(note)}\n`;
        }
        output += `${indent} *\n`;
    }
    if('parameters' in itemData) {
        for(let parameter of itemData.parameters) {
            let prepend = itemData.takes_table ? 'table.' : '';
            if(parameter.description) {
                output += `${indent} * @param ${prepend}${fixName(parameter.name)} - ${parameter.description}\n`;
            }
        }
        if(itemData.variadic_description) {
            output += `${indent} * @param ...args - ${itemData.variadic_description}\n`;
        }
    }
    // Would be really cool to parse the lua examples and display them as TS instead, but that's out of scope for now at least
    if(itemData.examples) {
        for(let example of itemData.examples)
        {
            output += `${indent} * @example\n${indent} * ${formatDocLines(example, indent)}\n${indent} *\n`;
        }
    }
    if(itemData['see_also']) {
        for(let see of itemData['see_also'])
        {
            output += `${indent} * @see {@link ${see}}\n`;
        }
    }
    if('return_description' in itemData && itemData.return_description) {
        output += `${indent} * @returns ${itemData.return_description}\n`;
    }

    if(output) {
        output = `${indent}/**\n${output}${indent} */\n`;
    }
    return output;
}

function parseType(type: FactorioType | undefined): string {
    if (!type) {
        return 'void';
    }

    if(typeof type === 'string') {
        if(/^u?int(\d*)$/.test(type) || type === 'float' || type === 'double') {
            return 'number';
        }
        if(type === 'Any') {
            return 'any';
        }
        return type;
    }
    else {
        switch(type.complex_type) {
            case 'array':
                if(typeof type.value === 'string') {
                    return parseType(type.value) + '[]';
                }
                else {
                    return `Array<${parseType(type.value)}>`;
                }
            case 'variant':
                return type.options.map(parseType).filter((value, index, self) => self.indexOf(value) === index).join(' | ');
            case 'dictionary':
            case 'LuaCustomTable':
                return `{[key: ${parseType(type.key)}]: ${parseType(type.value)}}`;
            case 'function':
                // The json spec doesn't appear to have enough info to identify the return type of the function, so we're stuck with `any`
                return `(${type.parameters.map((paramType, index) => `arg${index}: ${paramType}`).join(', ')}) => any`;
        }

        throw new Error('unrecognized complex type ' + type['complex_type']);
    }
}

/*
    variant_parameter_groups :: array[ParameterGroup] (optional): The optional parameters that depend on one of the main parameters. Only applies if takes_table is true.
    variant_parameter_description :: string (optional): The text description of the optional parameter groups.
*/

function writeMethod(method: Method) {
    if(method.subclasses) {
        let notes = method.notes || [];
        notes.push('Applies to subclasses: ' + method.subclasses.join(','));
        method.notes = notes;
    }
    let output = writeDocs(method, '    ');
    output += `    ${method.name}(this: void`;

    let paramIndent = '        ';
    let useComma = true;
    if(method.takes_table) {
        output += ',\n        table'
        if(method.table_is_optional) {
            output += '?';
        }
        output += ': {\n';
        paramIndent += '    ';
        useComma = false;
    }
    for(let parameter of method.parameters)
    {
        if(useComma) {
            output += ',\n';
        }
        else {
            useComma = true;
        }
        output += `${paramIndent}${fixName(parameter.name)}`;
        if(parameter.optional) {
            output += '?';
        }
        output += `: ${parseType(parameter.type)}`;
    }
    if(method.variadic_type) {
        output += `,\n${paramIndent}...args: ${parseType({ complex_type: 'array', value: method.variadic_type })}`;
    }
    if(method.takes_table) {
        output += '\n        }';
    }

    let returnType = parseType(method.return_type);
    if(/or `?nil/.test(method.return_description || '')) {
        returnType += ' | null';
    }
    output += `): ${returnType}\n\n`;

    return output;
}

/*
    attributes :: array[Attribute]: The attributes that are part of the class.
    operators :: array[Operator]: A list of operators on the class. They are called call, index, or length and have the format of either a Method or an Attribute.
*/
function writeClasses(classDataList: FactorioClass[], apiVersion: string) {
    var output = `// Factorio class definitions for API version ${apiVersion}\n\n`;

    for(let classData of classDataList)
    {
        output += writeDocs(classData, '');

        output += `interface ${classData.name}`;

        if(classData['base_classes']) {
            output += ' extends ' + classData.base_classes.join(', ');
        }

        output += ' {\n';

        if(classData.methods) {
            classData.methods.forEach(m => output += writeMethod(m));
        }

        output += '}\n\n';
    }

    fs.writeFileSync(__dirname + '/classes.d.ts', output);
}