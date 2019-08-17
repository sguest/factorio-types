const http = require('https');
const fs = require('fs');
const parser = require('node-html-parser');

const fileName = __dirname + '/prototype_overview.html';

if(!fs.existsSync(fileName)) {
    const request = http.get('https://wiki.factorio.com/Prototype_overview', (response) => {
        response.on('end', handleFile);
        response.pipe(fs.createWriteStream(fileName));
    });
}
else {
    handleFile();
}

function handleFile() {
    const content = fs.readFileSync(fileName, 'utf-8');
    const document = parser.parse(content);
    const rows = document.querySelectorAll('.prototype-toc tr');

    let prototypes = [];
    let currentPrototype;

    for(let row of rows) {
        let firstCell = row.childNodes[0];
        if(firstCell.classNames[0] === 'prototype-toc-section-title') {
            currentPrototype = {
                name: firstCell.childNodes[0].text,
                props: [],
            };

            if(firstCell.childNodes.length === 6) {
                currentPrototype.extends = firstCell.childNodes[4].text
            }
            prototypes.push(currentPrototype);
        }
        else {
            const currentProp = {};
            currentProp.name = firstCell.childNodes[0].text;
            const typeCell = row.childNodes[2];
            currentProp.type = typeCell.text;
            currentPrototype.props.push(currentProp);
        }
    }

    let output = '';

    for(let prototype of prototypes) {
        output += `interface ${prototype.name.replace('\/', '')}`;

        if(prototype.extends) {
            output += ` extends ${prototype.extends.replace('\/', '')}`;
        }

        output += ' {\n'

        for(let prop of prototype.props) {
            if(/IconSpecification/.test(prop.type)) {
                let baseName = prop.name.split(',')[0]
                baseName = baseName.replace(/icons$/, '');
                output += writeProperty({name: baseName + 'icons', type: 'IconData', isArray: true, optional: true});
                output += writeProperty({name: baseName + 'icon_size', type: 'SpriteSizeType'});
                output += writeProperty({name: baseName + 'icon_mipmaps', type: 'number', optional: true});
                output += writeProperty({name: baseName + 'icon', type: 'FileName', optional: true});
            }
            else {
                output += writeProperty(prop);
            }
        }

        output += '}\n\n'
    }

    output = output.replace(/\n$/, '');

    fs.writeFileSync(__dirname + '/prototypes.d.ts', output);
}

function writeProperty(prop) {
    if(/\(optional\)$/.test(prop.type)) {
        prop.optional = true;
        prop.type = prop.type.replace(/\s*\(optional\)$/, '');
    }

    if(/ or /.test(prop.name)) {
        let names = prop.name.split(' or ');
        return names.map(name => {
            prop.name = name;
            return writeProperty(prop);
        }).join('');
    }

    prop.type = prop.type.split(' or ').map(parsePropType).join(' | ');

    let output = `    ${prop.name}`;
    if(prop.optional) {
        output += '?';
    }
    output += `: ${prop.type}`;
    output += '\n';
    return output;
}

function parsePropType(propType) {
    let simpleArraySuffix = '';
    let arrayPrefix = '';
    let arraySuffix = '';

    //manual fixes for weird documentation
    propType = propType.replace('strings of prototype names', 'string')
        .replace('two types/double', 'double')
        .replace('table (array)', 'array')
        .replace(/string to ([^ ]*)/, (match, group1) => { return `{[key: string]: ${mapPropType(group1)} }` });

    while(/(tables?|array) of/i.test(propType)) {
        simpleArraySuffix += '[]';
        arrayPrefix += 'Array<';
        arraySuffix += '>';
        propType = propType.replace(/(tables?|array) of\s*/i, '');
    }

    let baseType = mapPropType(propType.trim());

    if(/[^a-zA-Z0-9]/.test(baseType)) {
        return `${arrayPrefix}${baseType}${arraySuffix}`;
    }
    else {
        return `${baseType}${simpleArraySuffix}`;
    }
}

function mapPropType(rawType) {
    rawType = rawType.replace(/^Types\//, '');
    switch(rawType) {
        case 'bool':
        case 'boolean':
            return 'boolean';
        case 'int8':
        case 'int16':
        case 'int32':
        case 'uint8':
        case 'uint16':
        case 'uint32':
        case 'double':
        case 'float':
        case 'number':
            return 'number';
        case 'string':
        case 'strings':
            return 'string';
        case 'tables':
            return 'Table';
        default:
            return rawType[0].toUpperCase() + rawType.substring(1);
    }
}