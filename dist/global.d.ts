// Factorio global definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.65
// API version 3

/**
 * Allows registering custom commands for the in-game console accessible via the grave key.
 */
declare const commands: LuaCommandProcessor
/**
 * This is the main object, through which most of the API is accessed. It is, however, not available inside handlers registered with {@link LuaBootstrap::on_load | LuaBootstrap::on_load}.
 */
declare const game: LuaGameScript
/**
 * Allows printing messages to the calling RCON instance if any.
 */
declare const rcon: LuaRCON
/**
 * Allows inter-mod communication by way of providing a repository of interfaces that is shared by all mods.
 */
declare const remote: LuaRemote
/**
 * Allows rendering of geometric shapes, text and sprites in the game world.
 */
declare const rendering: LuaRendering
/**
 * Provides an interface for registering event handlers.
 */
declare const script: LuaBootstrap
/**
 * Allows reading the current mod settings.
 */
declare const settings: LuaSettings
/**
 * `localised_print()` allows printing {@link LocalisedString | LocalisedString} to stdout without polluting the Factorio {@link log file | https://wiki.factorio.com/Log_file}. This is primarily useful when communicating with external tools that launch Factorio as a child process.
 */
declare function localised_print(this: void,
    string: LocalisedString): void

/**
 * `log()` can print {@link LocalisedStrings | LocalisedString} to the Factorio {@link log file | https://wiki.factorio.com/Log_file}. This, in combination with the serpent library, makes debugging in the data stage easier because it allows the inspection of entire prototype tables. For example, printing all properties of the sulfur item prototype can be done like so: `log(serpent.block(data.raw["item"]["sulfur"]))`
 */
declare function log(this: void,
    string: LocalisedString): void

/**
 * Factorio provides the `table_size()` function as a simple way to determine the size of tables with non-continuous keys, as the standard `#` operator does not work correctly for these. The function is a C++ implementation of the following Lua code, which is faster than doing the same in Lua:
 * 
 * ```
 * local function size(t)
 *     local count = 0
 *     for k,v in pairs(t) do
 *         count = count + 1
 *     end
 *     return count
 * end
 * ```
 * 
 * Note that `table_size()` does not work correctly for {@link LuaCustomTable | LuaCustomTable}, their size has to be determined with {@link LuaCustomTable::length | LuaCustomTable::length} instead.
 */
declare function table_size(this: void,
    table: Table): void

