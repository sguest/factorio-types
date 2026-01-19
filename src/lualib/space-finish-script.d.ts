// https://github.com/wube/factorio-data/blob/master/core/lualib/space-finish-script.lua
declare module "space-finish-script" {
    export const events: { [defines.events.on_space_platform_changed_state]: (this: void, event: runtime.on_space_platform_changed_state) => void }

    export function on_configuration_changed(this: void): void;

    export function on_init(this: void): void;

    export function on_load(this: void): void;
}