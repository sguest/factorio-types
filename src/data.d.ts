declare const data: {
    raw: dataCollection,
    extend(values: any[]): void,
};

type damageType = 'physical' | 'impact' | 'poison' | 'explosion' | 'fire' | 'laser' | 'acid' | 'electric';

interface dataCollection {
    armor: { [key: string]: LuaItemPrototype }
    recipe: { [key: string]: LuaRecipePrototype }
}

interface MapSettings {
}
