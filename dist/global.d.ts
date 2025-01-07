// Factorio global definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 2.0.29
// API version 6

/**
 * Allows registration of custom commands for the in-game console.
 */
declare const commands: runtime.LuaCommandProcessor;
/**
 * The main scripting interface through which most of the API is accessed.
 */
declare const game: runtime.LuaGameScript;
/**
 * Provides access to various helper and utility functions.
 */
declare const helpers: runtime.LuaHelpers;
/**
 * Allows read-only access to prototypes.
 */
declare const prototypes: runtime.LuaPrototypes;
/**
 * Allows printing messages to the calling RCON instance, if any.
 */
declare const rcon: runtime.LuaRCON;
/**
 * Allows registration and use of functions to communicate between mods.
 */
declare const remote: runtime.LuaRemote;
/**
 * Allows rendering of geometric shapes, text and sprites in the game world.
 */
declare const rendering: runtime.LuaRendering;
/**
 * Provides an interface for registering game event handlers.
 */
declare const script: runtime.LuaBootstrap;
/**
 * Provides access to the current mod settings.
 */
declare const settings: runtime.LuaSettings;
/**
 * `localised_print()` allows printing {@link LocalisedString | runtime:LocalisedString} to stdout without polluting the Factorio {@link log file | https://wiki.factorio.com/Log_file}. This is primarily useful when communicating with external tools that launch Factorio as a child process.
 */
declare function localised_print(this: void, string: runtime.LocalisedString): void;
/**
 * `log()` can print {@link LocalisedStrings | runtime:LocalisedString} to the Factorio {@link log file | https://wiki.factorio.com/Log_file}. This, in combination with the serpent library, makes debugging in the data stage easier because it allows the inspection of entire prototype tables. For example, printing all properties of the sulfur item prototype can be done like so: `log(serpent.block(data.raw["item"]["sulfur"]))`
 */
declare function log(this: void, string: runtime.LocalisedString): void;
/**
 * Factorio provides the `table_size()` function as a simple way to determine the size of tables with non-continuous keys, as the standard `#` operator does not work correctly for these. The function is a C++ implementation of the following Lua code, which is faster than doing the same in Lua:
 *
 * ```
 * local function size(t)
 *   local count = 0
 *   for k,v in pairs(t) do
 *     count = count + 1
 *   end
 *   return count
 * end
 * ```
 *
 * Note that `table_size()` does not work correctly for {@link LuaCustomTable | runtime:LuaCustomTable}, their size has to be determined with {@link LuaCustomTable::length_operator | runtime:LuaCustomTable::length_operator} instead.
 */
declare function table_size(this: void, table: runtime.table): uint;
