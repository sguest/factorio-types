# factorio-types

Typescript declarations for the factorio mod API. Note this library is not particularly "battle-hardened" by real use, but is here for anyone that may get value from it.

Install `factorio-types` from [npm](https://www.npmjs.com/package/factorio-types), but note the warning above about minimal testing.

Intended to be used with [Typescript to Lua](https://github.com/TypeScriptToLua/TypeScriptToLua). This library uses some language extensions from the TSTL library, such as the `LuaMultiReturn` type to handle functions that return multiple values. Enable these extensions in your project's tsconfig as per [the docs](https://typescripttolua.github.io/docs/advanced/language-extensions/)

A very minimal proof-of-concept showing basic toolchain setup can be found [Here](https://github.com/sguest/factorio-fire-armor-typescript)
