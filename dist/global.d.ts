// Factorio global object definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.42
// API version 1

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
