declare const table: {
    deepcopy<T>(this: void, value: T): T,
};

declare const game: LuaGameScript;

declare const script: LuaBootstrap;

declare const remote: LuaRemote;

declare const commands: LuaCommandProcessor;

declare const settings: LuaAiSettings;

declare const rcon: LuaRCON;

declare const rendering: LuaRendering;

declare const data: {
    raw: dataCollection,
    extend(values: any[]): void,
};

declare const global: { [key: string]: any };

declare function log(str: LocalisedString): void;

declare function table_size(tbl: object): number;

declare const serpent: Serpent;
