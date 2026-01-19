// https://github.com/wube/factorio-data/blob/master/core/lualib/silo-script.lua
declare module "silo-script" {
    export const events: { [defines.events.on_rocket_launched]: (this: void, event: runtime.on_rocket_launched) => void };

    export function on_configuration_changed(this: void): void;

    export function on_init(this: void): void;

    export function on_load(this: void): void;

    /** legacy */
    export function get_events(this: void): { [defines.events.on_rocket_launched]: (this: void, event: runtime.on_rocket_launched) => void };

    /** legacy */
    export function add_remote_interface(this: void): void;

    /** legacy */
    export function add_commands(this: void): void;
}