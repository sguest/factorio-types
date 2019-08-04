/// <reference path="./classes.d.ts" />
/// <reference path="./concepts.d.ts" />
/// <reference path="./defines.d.ts" />
/// <reference path="./data.d.ts" />
/// <reference path="./events.d.ts" />

declare const game: LuaGameScript

declare const table : {
    deepcopy<T>(this: void, value: T): T
}

declare const script: LuaBootstrap