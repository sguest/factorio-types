// Misc type definitions for Factorio API
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types

declare namespace table {
    function deepcopy<T>(this: void, value: T): T;
}

declare const data: {
    raw: prototype.dataCollection,
    extend(values: prototype.dataExtendType[]): void,
};

declare const global: { [key: string]: any };

declare function log(str: runtime.LocalisedString): void;

declare function table_size(tbl: object): number;

declare const serpent: Serpent;

// The documentation in some places just says "Table", with extra info only available in the specific prototype doc
// can eventually fix these on a per-case basis
type Table = any;

// https://lua-api.factorio.com/latest/types/DataExtendMethod.html
type DataExtendMethod = (data: prototype.Data, ...otherData: any[]) => void;

// The docs and json definition make reference to these types but have no information as to what they are
type BlueprintCircuitConnection = any;
type BlueprintControlBehavior = any;