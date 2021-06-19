declare const table: {
    deepcopy<T>(this: void, value: T): T,
};

declare const data: {
    // data-phase type info not currently supported because API docs are long-since not updated
    raw: any,
    extend(values: any[]): void,
};

declare const global: { [key: string]: any };

declare function log(str: LocalisedString): void;

declare function table_size(tbl: object): number;

declare const serpent: Serpent;

// The documentation in some places just says "Table", with extra info only available in the specific prototype doc
// can eventually fix these on a per-case basis
type Table = any;

// The docs and json definition make reference to these types but have no information as to what they are
type BlueprintCircuitConnection = any;
type BlueprintControlBehavior = any;

// This is a copy from the data stage, which this package doesn't have type info for currently
type MapGenPreset = any;