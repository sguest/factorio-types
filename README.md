# factorio-types

Typescript declarations for the factorio mod API.

## Installation

Install `factorio-types` from [npm](https://www.npmjs.com/package/factorio-types)

Intended to be used with [Typescript to Lua](https://github.com/TypeScriptToLua/TypeScriptToLua) (which is a peer dependency)

## Configuration

This library includes [tsconfig.base.json](https://github.com/sguest/factorio-types/blob/master/tsconfig.base.json) in the root of the package with recommended configuration. This can be used as follows

`tsconfig.json`:

```json
{
    "extends": "factorio-types/tsconfig.base.json",
    // other config like included files and output paths
}
```

## Stages

Factorio mods and the api go through [three distinct stages](https://lua-api.factorio.com/latest/). Types are organized into namespaces `runtime`, `prototype`, and `settings` representing the types to be used in each stage. These types, and therefore their corresponding namespaces, are a compile-time-only feature as lua does not have types, however using a type from the wrong namespace during the wrong stage is likely to result in a runtime error as you will be attempting to access something Factorio does not let you access at that time.

Note there is some overlap between the types for the Settings and Prototype phases since both regularly provide prototype data to `data.extend()`, and in fact the settings-phase prototypes extend `prototype.PrototypeBase`. However, you should only be providing types from the `settings` namespace during the settings phase, and from the `prototype` namespace during the prototype phase.

## Examples

A very minimal proof-of-concept showing basic toolchain setup can be found [Here](https://github.com/sguest/factorio-fire-armor-typescript)

A slightly more in-depth and realistic mode can be found [Here](https://github.com/sguest/basic-seablock)

## Primitives

Primitive types like `uint8` or `nil` are preserved from the docs to better represent expected data formats, and are aliased as typescript types, so `nil` is `null`, and the various numeric formats such as `uint8`, `float`, etc are aliases for `number`.

Note that since typescript has a single `number` type, the compiler will **not** prevent things like passing a `float` to a method that expects `uint8` because these are both just `number` types under the hood.

## Lua tables

Various types in the Factorio API are implemented as lua tables, specifically those with a `complex_type` of `dictionary` or `LuaCustomTable`. These types have intentionally been implemented as [Record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) types instead of TypescriptToLua's [Lua Table Type](https://typescripttolua.github.io/docs/advanced/language-extensions/#lua-table-types) because `LuaTable`s cannot be instantiated with `{ key1: 'value1', key2: 'value2' }` initializer syntax, and instead repeated calls to `set()` would be required, making initialization of such objects considerably more verbose.

## Read vs Write attributes

Some attributes have separate read and write types defined, which is not supported by typescript. These are modeled by the read property having the attribute's name, and a separate `<name>_write` property representing writing to the property. This will map to the correct property name via a [@customName annotation](https://typescripttolua.github.io/docs/advanced/compiler-annotations/#customname). These properties are readable since typescript does not support the concept of writeonly, and reading them will succeed, but the type of the returned value will be wrong.

Typescript:

```typescript
function example(burner: LuaBurner)
{
    let read: ItemIDAndQualityIDPair = burner.currently_burning;
    burner.currently_burning_write = 'coal';
}
```

Output lua:

```lua
local function example(burner)
    local read = burner.currently_burning
    burner.currently_burning = "coal"
end
```

## Lualib

Factorio makes various lua functions available to mods via [LuaLib](https://github.com/wube/factorio-data/tree/master/core/lualib)

Unlike the main parts of the factorio API, these do not exist as ambient globals but instead must be imported

The `noise` lualib definitions were previous present in this library. However, as of version 2.0.7, `noise.lua` was [removed from lualib in the factorio-data repo](https://github.com/wube/factorio-data/commit/7522d3763e76e09ce1a46cba676dfc2b6d12b127). This was accompanied by many of the required supporting types being removed from the prototype definitions, and therefore the noise definitions have been removed from this library, at least temporarily.