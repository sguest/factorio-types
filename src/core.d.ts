// Misc type definitions for Factorio API
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types

declare namespace table {
    function deepcopy<T>(this: void, value: T): T;
    function compare(this: void, table1: object | [], table2: object | []): boolean;
}

declare const data: {
    raw: prototype.dataCollection,
    extend(values: prototype.dataExtendType[]): void,
};

/**
 * Mapping of currently loaded mods to their version. Only exists at the data stage.
 */
declare const mods: { [key: string] : string}

/**
 * Mod-specific storage lookup that is persisted to save files https://lua-api.factorio.com/latest/auxiliary/storage.html
 */
declare const storage: { [key: string]: any };

declare function log(str: runtime.LocalisedString): void;

declare function table_size(tbl: object): number;

declare const serpent: Serpent;

// The documentation in some places just says "Table", with extra info only available in the specific prototype doc
// can eventually fix these on a per-case basis
type Table = any;

// These ones seem to be strangely missing from concepts and therefore not available in the runtime namespace
type uint = number;
type uint32 = number;
type bool = boolean;

/*
 * The data.extend method. It's the primary way to add prototypes to the data table.
 * 
 * The method has two positional function parameters:
 * 
 * - `self` :: [Data](prototype:Data): Usually provided by calling `data:extend(otherdata)`, which is syntax sugar for `data.extend(data, otherdata)`.
 * 
 * - `otherdata` :: array[[AnyPrototype](prototype:AnyPrototype)]: A continuous array of non-abstract prototypes.",
 * @example
 * ```
 * data:extend({\n  {\n    type = \"item\",
 *     name = \"a-thing\",
 *     icon = \"__base__/graphics/icons/coal.png\",
 *     icon_size = 64,
 *     stack_size = 2
 *   }
 * })
 * ```,
 * @example
 * ```
 * local recipe_cat =
 * {
 *   type = \"recipe-category\",
 *   name = \"my-category\"
 * }
 * local assembler =
 * {
 *   type = \"assembling-machine\",
 *   name = \"cool-assembler\",
 *   energy_usage = \"30kW\",
 *   energy_source = {type = \"void\"},
 *   crafting_speed = 1,
 *   crafting_categories = {\"crafting\"}
 * }
 * 
 * data:extend({recipe_cat, assembler})
 * ```
 */
type DataExtendMethod = (data: prototype.Data, ...otherData: any[]) => void;

// The docs and json definition make reference to these types but have no information as to what they are
type BlueprintCircuitConnection = any;
type BlueprintControlBehavior = any;