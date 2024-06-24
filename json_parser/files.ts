import * as fs from 'fs';

function writeHeaders(apiData: ApiData) {
    let output = '// Factorio API reference https://lua-api.factorio.com/latest/index.html\n';
    output += `// Generated from JSON source https://lua-api.factorio.com/latest/${apiData.stage}-api.json\n`;
    output += '// Definition source https://github.com/sguest/factorio-types\n';
    output += `// Factorio version ${apiData.application_version}\n`;
    output += `// API version ${apiData.api_version}\n\n`;
    return output;
}

export function writeFile(topHeader: string, namespace: string | undefined, contents: string, fileName: string, apiData: ApiData) {
    if(namespace) {
        contents = `declare namespace ${namespace} {\n${contents}\n}`;
    }
    const output = `// ${topHeader}\n${writeHeaders(apiData)}${contents}`;
    fs.writeFileSync(__dirname + `/../dist/${fileName}.d.ts`, output);
}