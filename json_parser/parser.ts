/// <reference path="./factorio-json.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as http from 'https';
import * as fs from 'fs';
import { writeClasses } from './classes';
import { writeEvents } from './events';
import { writeConcepts } from './concepts';
import { writeGlobals } from './globals';
import { writeDefines } from './defines';
import { writeDataCollection, writePrototypes } from './prototypes';
import { writePrototypeTypes } from './prototypeTypes';

const mapFilename = (fileName: string) => `${__dirname}/../temp/${fileName}`;

fs.mkdirSync(__dirname + '/../dist', {recursive: true});
fs.mkdirSync(__dirname + '/../temp', {recursive: true});

const files = [{ name: 'runtime-api.json', handler: handleRuntimeFile }, { name: 'prototype-api.json', handler: handlePrototypeFile }];

let arg = process.argv[2];
if(arg === '-clean') {
    for(let file of files)
    {
        const fileName = mapFilename(file.name);
        if(fs.existsSync(fileName))
        {
            fs.unlinkSync(fileName);
        }
    }
}

for(let file of files)
{
    const fileName = mapFilename(file.name);
    if(!fs.existsSync(fileName)) {
        // Save a local copy of the file so it's possible to re-run the parser without waiting for a download each time
        // Run with -clean or delete the local copy to get fresh data (like between versions)
        http.get(`https://lua-api.factorio.com/latest/${file.name}`, (response) => {
            response.on('end', () => file.handler(fileName));
            response.pipe(fs.createWriteStream(fileName));
        });
    }
    else {
        file.handler(fileName);
    }
}

function handleRuntimeFile(fileName: string) {
    const content = fs.readFileSync(fileName, 'utf-8');
    const apiData = JSON.parse(content) as RuntimeData;

    writeClasses(apiData);
    writeEvents(apiData);
    writeDefines(apiData);
    writeConcepts(apiData);
    writeGlobals(apiData);

    updatePackageInfo(apiData);
}

function updatePackageInfo(apiData: ApiData) {
    const apiVersion = apiData['application_version'];
    const packageJson = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`, 'utf-8'));
    packageJson.factorioVersion = apiVersion;
    fs.writeFileSync(`${__dirname}/../package.json`, JSON.stringify(packageJson, null, 2));
}

function handlePrototypeFile(fileName: string) {
    const content = fs.readFileSync(fileName, 'utf-8');
    const apiData = JSON.parse(content) as PrototypeData;

    writePrototypes(apiData);
    writePrototypeTypes(apiData);
    writeDataCollection(apiData);
}