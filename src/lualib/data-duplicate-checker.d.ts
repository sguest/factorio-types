// https://github.com/wube/factorio-data/blob/master/core/lualib/data-duplicate-checker.lua
declare module "data-duplicate-checker" {
    export function check_for_duplicates(this: void, prototypes: Record<string, prototype.AnyPrototype>, overwrite: prototype.AnyPrototype): void;

    export function check_for_overwrites(this: void, prototypes: Record<string, prototype.AnyPrototype>, overwrite: prototype.AnyPrototype): void;
}