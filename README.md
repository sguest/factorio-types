# factorio-types

Typescript declarations for the factorio mod API.

## Installation

Install `factorio-types` from [npm](https://www.npmjs.com/package/factorio-types)

Intended to be used with [Typescript to Lua](https://github.com/TypeScriptToLua/TypeScriptToLua) (which is a peer dependency)

## Configuration

This library includes [tsconfig.base.json](./tsconfig.base.json) in the root of the package with recommended configuration. This can be used as follows

`tsconfig.json`:

```json
{
    "extends": "factorio-types/tsconfig.base.json",
    // other config like included files and output paths
}
```

## Examples

A very minimal proof-of-concept showing basic toolchain setup can be found [Here](https://github.com/sguest/factorio-fire-armor-typescript)

## Noise library

A note on using the `noise` library from within Factorio: Several mods (typically those that deal with terrain generation) will `require('noise')`. While this seems to work, this is not an officially documented part of the Factorio modding API and is not expressed in these types. If you want to use it, you'll want to add the following to your configuration

`tsconfig.json`:

```json
{
    "tstl": {
        "noResolvePaths": ["noise"]
    }
}
```

Then, include a definition file at the root of your project

`noise.d.ts`:

```typescript
declare module 'noise' {
    // declare any functions from the noise library that you are using
}
```
