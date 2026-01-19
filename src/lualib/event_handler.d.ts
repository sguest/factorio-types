// https://github.com/wube/factorio-data/blob/master/core/lualib/event_handler.lua
declare module "event_handler" {
    // Looking at the implementation of these functions, the objects seem close to LuaBootstrap as they have many of the same members
    // on_configuration_changed, on_init, on_load, etc
    // they also have a few additional fields not mentioned elsewhere
    // hopefull this type is close enough
    export type Library = Partial<runtime.LuaBootstrap> & {
        add_remote_interface?: (this: void) => void;
        add_commands?: (this: void) => void;
        events: Record<string, runtime.LuaEventType>;
    }

    export function add_lib(this: void, lib: Library): void;

    export function add_libraries(this: void, libs: Record<string, Library>): void;
}