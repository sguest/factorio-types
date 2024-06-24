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

## Lualib

Factorio makes various lua functions available to mods via [LuaLib](https://github.com/wube/factorio-data/tree/master/core/lualib)

Unlike the main parts of the factorio API, these do not exist as ambient globals but instead must be imported

```typescript
import * as noise from "noise";
let x = noise.var_get('x');
```

Also unlike the main factorio API, these types are not documented in a machine-readable way and therefore are not generated here along with the main API types. Instead, they are hand-written as needed and as a result are incomplete and more likely to be wrong. See the [existing declarations](https://github.com/sguest/factorio-types/tree/master/src/lualib).

If there are types of lualib that you need but do not exist, either open an issue asking for it, or write the type definitions and open a pull request. If you would like to continue working with these types while they do not exist in `factorio-types`, you can add the import path to `tstl.noResolvePaths` in tsconfig.json, and then `require()` the paths, which will be typed as `any`.

`tsconfig.json`

```json
{
    "tstl": {
        "noResolvePaths": ["math2d"]
    }
}
```

`some-file.ts`

```typescript
const math2d = require('math2d');
```

### Noise

The `noise` module has mostly-complete type definitions. A couple notes on usage due to the limitations of typescript

The `noise.var` function is named `noise.var_get` since `var` is a reserved word in typscript. It will be emitted as `noise.var` thanks to a [@customName compiler annotation](https://typescripttolua.github.io/docs/advanced/compiler-annotations/#customname).

typescript

```ts
import * as noise from "noise";
let x = noise.var_get('x');
```

output lua

```lua
local noise = require("noise")
local x = noise.var("x")
```

Noise values have operator overloads for common arithmetic operations, however Typescript does not support operator overloading. These are implemented as [Operator map types](https://typescripttolua.github.io/docs/advanced/language-extensions#operator-map-types) in the noise library, which will emit as regular operators in lua. Available operators are named following lua conventions for overloaded operators without the preceding double-underscore:

- Addition: `noise.add`
- Subraction: `noise.sub`
- Multiplication: `noise.mul`
- Division: `noise.div`
- Unary Negation: `noise.unm`
- Exponentiation: `noise.pow`

typescript

```ts
let x = noise.var_get('x');
let y = noise.var_get('y');
let sum = noise.add(x, y);
```

Output lua

```lua
local x = noise.var("x")
local y = noise.var("y")
local sum = x + y;
```
