# factorio-types

Typescript declarations for the factorio mod API. Note this library is not particularly "battle-hardened" by real use, but is here for anyone that may get value from it.

Install `factorio-types` from [npm](https://www.npmjs.com/package/factorio-types), but note the warning above about minimal testing.

Intended to be used with [Typescript to Lua](https://github.com/TypeScriptToLua/TypeScriptToLua).

Versions up to 0.0.7 had typing parsed from [the wiki](https://wiki.factorio.com/Prototype_overview), but that page is multiple years out of date, and the type info generated from it tended to be wrong/incomplete anyways, so those types have been removed and only runtime-phase types are supported.

A very minimal proof-of-concept showing basic toolchain setup can be found [Here](https://github.com/sguest/factorio-fire-armor-typescript)

Note on versions: as of factorio version 1.1.54, the API docs have changed to version 2 with a number of changes. The last version of this package with v1 type definitions is 0.0.20
