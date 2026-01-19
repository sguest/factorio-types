// https://github.com/wube/factorio-data/blob/master/core/lualib/meld.lua

// Lots of "any" types in this declaration - it's not immediately obvious what it's supposed to do and not many example usages in the base mod
declare module "meld" {

    export const control_marker: {};

    export const controler_handlers: {
        delete(this: void, target: any, k: string, v: any): void;
        overwrite(this: void, target: any, k: string, v: any): any;
        invoke(this: void, target: any, k: string, v: any): any;
        append(this: void, target: any, k: string, v: any): void;
    };

    function _delete(this: void): void;
    export { _delete as delete };

    export function overwrite(this: void, _new: any): any;

    export function invoke(this: void, fct: any): any;

    export function append(this: void, data: any): any;

    /**
     * recursive table merge but it reuses target table (this: void, does not deepcopy it). When target is not to be reused or more than
     *  2 tables are to be merged, consider using util.merge. When there is conflict of 2 values, a value from the source will
     *  win overwriting the existing value. There are also control structures available for extra operations that would not
     *  be possible under normal merge rules
     */
    export function meld(this: void, target: Table, source: Table): Table
}

declare function meld(this: Table, target: Table, source: Table): void;