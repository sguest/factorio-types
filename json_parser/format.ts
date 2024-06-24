export function formatTypeName(rawName: string) {
    let pieces = rawName.split('.');
    let piece = pieces[pieces.length - 1];
    return piece.replace(/(?:^|[-_ ])(.)/g, (_, g1) => g1.toUpperCase());
}

export function extractTypeNames(description: string): string[] {
    let regex = /`(?:\\?"|')?([^'"`]*)(?:\\?"|')?`/g;
    let names: string[] = [];

    var result = regex.exec(description);
    while(result)
    {
        if(result && result.length >= 2) {
            names.push(result[1]);
        }
        result = regex.exec(description);
    }

    return names;
}

export function mapBuiltin(type: string): string | null {
    if(/^u?int(\d*)$/.test(type) || type === 'float' || type === 'double') {
        return 'number';
    }
    if(type === 'table') {
        return 'Table';
    }
    if(type === 'LuaObject') {
        return 'object';
    }
    if(type === 'nil') {
        return 'null';
    }
    if(type === 'bool') {
        return 'boolean';
    }

    return null;
}

export function parameterToAttribute(parameter: Parameter): Attribute {
    return {
        name: `'${parameter.name}'`,
        order: parameter.order,
        description: parameter.description,
        type: parameter.type,
        read: true,
        write: true,
        optional: parameter.optional,
    }
}

export function parseParentStructure<T extends { parent: string, name: string, properties: Attribute[]}>(items: T[]) {
    const childTypes: {[key: string]: T[]} = {};

    for(let item of items) {
        if(item.parent) {
            childTypes[item.parent] = childTypes[item.parent] || [];
            childTypes[item.parent].push(item);
        }
    }

    for(let item of items) {
        if(childTypes[item.name]) {
            for(let child of childTypes[item.name])
            {
                if(item.properties && child.properties)
                {
                    for(let parentProp of item.properties)
                    {
                        for(let childProp of child.properties)
                        {
                            if(childProp.name === parentProp.name && childProp.optional && !parentProp.optional)
                            {
                                // Can't inherit a required prop with an optional one in TS, so just set the parent prop to optional
                                parentProp.optional = true;
                            }
                        }
                    }
                }
            }
        }
    }

    return childTypes;
}

export function fixReservedName(name: string) {
    // add to this if necessary
    if(name === 'function') {
        return '_' + name;
    }
    return name;
}