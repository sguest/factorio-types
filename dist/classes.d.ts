// Factorio class definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.47
// API version 1

/**
 * Collection of settings for overriding default ai behavior.
 */
interface LuaAISettings {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     */
    allow_destroy_when_commands_fail: boolean

    /**
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     */
    allow_try_return_to_spawner: boolean

    /**
     * If enabled, units will try to separate themselves from nearby friendly units.
     */
    do_separation: boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The pathing resolution modifier, must be between -8 and 8.
     */
    path_resolution_modifier: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for accumulators.
 */
interface LuaAccumulatorControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    output_signal: SignalID

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a achievement.
 */
interface LuaAchievementPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly allowed_without_fight: boolean

    readonly hidden: boolean

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a ammo category.
 */
interface LuaAmmoCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly bonus_gui_order: string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for arithmetic combinators.
 */
interface LuaArithmeticCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The arithmetic combinator parameters.
     * @remarks
     * `parameters` may be `nil` in order to clear the parameters.
     *
     */
    parameters: ArithmeticCombinatorParameters

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of an autoplace control.
 */
interface LuaAutoplaceControlPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Category name of this prototype.
     */
    readonly category: string

    readonly control_order: string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    readonly richness: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Entry point for registering event handlers. It is accessible through the global object named `script`.
 */
interface LuaBootstrap {
    /**
     * Generate a new, unique event ID that can be used to raise custom events with {@link LuaBootstrap::raise_event | LuaBootstrap::raise_event}.
     * @returns The newly generated event ID.
     */
    generate_event_name(this: void): number

    /**
     * Gets the filters for the given event.
     * @param event - ID of the event to get.
     * @returns The filters or `nil` if none are defined.
     */
    get_event_filter(this: void,
        event: number): EventFilter[] | null

    /**
     * Find the event handler for an event.
     * @param event - The event identifier to get a handler for.
     * @returns Reference to the function currently registered as the handler.
     */
    get_event_handler(this: void,
        event: number): (this: void, arg0: EventData) => any

    /**
     * Gets the mod event order as a string.
     */
    get_event_order(this: void): string

    /**
     * Register a function to be run when mod configuration changes. This is called when the game version or any mod version changes; when any mod is added or removed; or when prototypes or startup mod settings have changed. It allows the mod to make any changes it deems appropriate to both the data structures in its `global` table or to the game state through {@link LuaGameScript | LuaGameScript}.
     * @param f - The handler for this event. Passing `nil` will unregister it.
     */
    on_configuration_changed(this: void,
        f: (this: void, arg0: ConfigurationChangedData) => any): void

    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event - The event(s) or custom-input to invoke the handler on.
     * @param f - The handler for this event. Passing `nil` will unregister it.
     * @param filters - The filters for this event. Can only be used when registering for individual events.
     * @example
     * Register for the [on_tick](on_tick) event to print the current tick to console each tick. 
     * ```
     * script.on_event(defines.events.on_tick,
     * function(event) game.print(event.tick) end)
     * ```
     *
     * @example
     * Register for the [on_built_entity](on_built_entity) event, limiting it to only be received when a `"fast-inserter"` is built. 
     * ```
     * script.on_event(defines.events.on_built_entity,
     * function(event) game.print("Gotta go fast!") end,
     * {{filter = "name", name = "fast-inserter"}})
     * ```
     *
     */
    on_event<T extends event>(this: void,
        event: defines.events | defines.events[] | string,
        f: (this: void, arg0: T) => any,
        filters?: EventFilter[]): void

    /**
     * Register a callback to be run on mod initialization. This is only called when a new save game is created or when a save file is loaded that previously didn't contain the mod. During it, the mod gets the chance to set up initial values that it will use for its lifetime. It has full access to {@link LuaGameScript | LuaGameScript} and the `global` table and can change anything about them that it deems appropriate. No other events will be raised for the mod until it has finished this step.
     * @param f - The handler for this event. Passing `nil` will unregister it.
     * @example
     * Initialize a `players` table in `global` for later use. 
     * ```
     * script.on_init(function()
     *   global.players = {}
     * end)
     * ```
     *
     */
    on_init(this: void,
        f: (this: void) => any): void

    /**
     * Register a function to be run on save load. This is only called for mods that have been part of the save previously, or for players connecting to a running multiplayer session. It gives the mod the opportunity to do some very specific actions, should it need to. Doing anything other than these three will lead to desyncs, which breaks multiplayer and replay functionality. Access to {@link LuaGameScript | LuaGameScript} and {@link LuaRendering | LuaRendering} is not available. The `global` table can be accessed and is safe to read from, but not write to.
     * The only legitimate uses of this event are these three:
     * - Re-setup {@link metatables | https://www.lua.org/pil/13.html} as they are not persisted through save-load.
     * - Re-setup conditional event handlers.
     * - Create local references to data stored in the {@link global | Global.html} table.
     * For all other purposes, {@link LuaBootstrap::on_init | LuaBootstrap::on_init}, {@link LuaBootstrap::on_configuration_changed | LuaBootstrap::on_configuration_changed} or migration scripts should be used instead.
     * @param f - The handler for this event. Passing `nil` will unregister it.
     */
    on_load(this: void,
        f: (this: void) => any): void

    /**
     * Register a handler to run every nth-tick(s). When the game is on tick 0 it will trigger all registered handlers.
     * @param f - The handler to run. Passing `nil` will unregister it for the provided nth-tick(s).
     * @param tick - The nth-tick(s) to invoke the handler on. Passing `nil` as the only parameter will unregister all nth-tick handlers.
     */
    on_nth_tick(this: void,
        tick: number | number[],
        f: (this: void, arg0: NthTickEventData) => any): void

    /**
     * Raises {@link on_biter_base_built | on_biter_base_built} with the given parameters.
     * @param table.entity - The entity that was built.
     */
    raise_biter_base_built(this: void,
        table: {
            entity: LuaEntity
        }): void

    /**
     * Raises {@link on_console_chat | on_console_chat} with the given parameters.
     * @param table.message - The chat message to send.
     * @param table.player_index - The player doing the chatting.
     */
    raise_console_chat(this: void,
        table: {
            player_index: number,
            message: string
        }): void

    /**
     * Raise an event. Only events generated with {@link LuaBootstrap::generate_event_name | LuaBootstrap::generate_event_name} and the following can be raised:
     * - {@link on_console_chat | on_console_chat}
     * - {@link on_player_crafted_item | on_player_crafted_item}
     * - {@link on_player_fast_transferred | on_player_fast_transferred}
     * - {@link on_biter_base_built | on_biter_base_built}
     * - {@link on_market_item_purchased | on_market_item_purchased}
     * - {@link script_raised_built | script_raised_built}
     * - {@link script_raised_destroy | script_raised_destroy}
     * - {@link script_raised_revive | script_raised_revive}
     * - {@link script_raised_set_tiles | script_raised_set_tiles}
     * @param data - Table with extra data that will be passed to the event handler.
     * @param event - ID of the event to raise.
     * @example
     * Raise the [on_console_chat](on_console_chat) event with the desired message 'from' the first player. 
     * ```
     * local data = {player_index = 1, message = "Hello friends!"}
     * script.raise_event(defines.events.on_console_chat, data)
     * ```
     *
     */
    raise_event(this: void,
        event: number,
        data: Table): void

    /**
     * Raises {@link on_market_item_purchased | on_market_item_purchased} with the given parameters.
     * @param table.count - The amount of offers purchased.
     * @param table.market - The market entity.
     * @param table.offer_index - The index of the offer purchased.
     * @param table.player_index - The player who did the purchasing.
     */
    raise_market_item_purchased(this: void,
        table: {
            player_index: number,
            market: LuaEntity,
            offer_index: number,
            count: number
        }): void

    /**
     * Raises {@link on_player_crafted_item | on_player_crafted_item} with the given parameters.
     * @param table.item_stack - The item that has been crafted.
     * @param table.player_index - The player doing the crafting.
     * @param table.recipe - The recipe used to craft this item.
     */
    raise_player_crafted_item(this: void,
        table: {
            item_stack: LuaItemStack,
            player_index: number,
            recipe: LuaRecipe
        }): void

    /**
     * Raises {@link on_player_fast_transferred | on_player_fast_transferred} with the given parameters.
     * @param table.entity - The entity transferred from or to.
     * @param table.from_player - Whether the transfer was from player to entity. If `false`, the transfer was from entity to player.
     * @param table.player_index - The player transferred from or to.
     */
    raise_player_fast_transferred(this: void,
        table: {
            player_index: number,
            entity: LuaEntity,
            from_player: boolean
        }): void

    /**
     * Raises {@link script_raised_built | script_raised_built} with the given parameters.
     * @param table.entity - The entity that has been built.
     */
    raise_script_built(this: void,
        table: {
            entity: LuaEntity
        }): void

    /**
     * Raises {@link script_raised_destroy | script_raised_destroy} with the given parameters.
     * @param table.entity - The entity that was destroyed.
     */
    raise_script_destroy(this: void,
        table: {
            entity: LuaEntity
        }): void

    /**
     * Raises {@link script_raised_revive | script_raised_revive} with the given parameters.
     * @param table.entity - The entity that was revived.
     * @param table.tags - The tags associated with this entity, if any.
     */
    raise_script_revive(this: void,
        table: {
            entity: LuaEntity,
            tags?: Tags
        }): void

    /**
     * Raises {@link script_raised_set_tiles | script_raised_set_tiles} with the given parameters.
     * @param table.surface_index - The surface whose tiles have been changed.
     * @param table.tiles - The tiles that have been changed.
     */
    raise_script_set_tiles(this: void,
        table: {
            surface_index: number,
            tiles: Tile[]
        }): void

    /**
     * Registers an entity so that after it's destroyed, {@link on_entity_destroyed | on_entity_destroyed} is called. Once an entity is registered, it stays registered until it is actually destroyed, even through save/load cycles. The registration is global across all mods, meaning once one mod registers an entity, all mods listening to {@link on_entity_destroyed | on_entity_destroyed} will receive the event when it is destroyed. Registering the same entity multiple times will still only fire the destruction event once, and will return the same registration number.
     * @remarks
     * Depending on when a given entity is destroyed, {@link on_entity_destroyed | on_entity_destroyed} will either be fired at the end of the current tick or at the end of the next tick.
     *
     * @param entity - The entity to register.
     * @returns The registration number. It is used to identify the entity in the [on_entity_destroyed](on_entity_destroyed) event.
     */
    register_on_entity_destroyed(this: void,
        entity: LuaEntity): number

    /**
     * Sets the filters for the given event. The filters are only retained when set after the actual event registration, because registering for an event with different or no filters will overwrite previously set ones.
     * @param event - ID of the event to filter.
     * @param filters - The filters or `nil` to clear them.
     * @example
     * Limit the [on_marked_for_deconstruction](on_marked_for_deconstruction) event to only be received when a non-ghost entity is marked for deconstruction. 
     * ```
     * script.set_event_filter(defines.events.on_marked_for_deconstruction, {{filter = "ghost", invert = true}})
     * ```
     *
     * @example
     * Limit the [on_built_entity](on_built_entity) event to only be received when either a `unit` or a `unit-spawner` is built. 
     * ```
     * script.set_event_filter(defines.events.on_built_entity, {{filter = "type", type = "unit"}, {filter = "type", type = "unit-spawner"}})
     * ```
     *
     * @example
     * Limit the [on_entity_damaged](on_entity_damaged) event to only be received when a `rail` is damaged by an `acid` attack. 
     * ```
     * script.set_event_filter(defines.events.on_entity_damaged, {{filter = "rail"}, {filter = "damage-type", type = "acid", mode = "and"}})
     * ```
     *
     */
    set_event_filter(this: void,
        event: number,
        filters?: EventFilter[]): void

    /**
     * A dictionary listing the names of all currently active mods and mapping them to their version.
     * @example
     * This will print the names and versions of all active mods to the console. 
     * ```
     * for name, version in pairs(script.active_mods) do
     *   game.print(name .. " version " .. version)
     * end
     * ```
     *
     */
    readonly active_mods: {[key: string]: string}

    /**
     * Information about the currently running scenario/campaign/tutorial.
     */
    readonly level: { campaign_name?: string, is_simulation?: boolean, is_tutorial?: boolean, level_name: string, mod_name?: string }

    /**
     * The name of the mod from the environment this is used in.
     */
    readonly mod_name: string

    /**
     * This object's name.
     */
    readonly object_name: string

}

/**
 * A reference to the burner energy source owned by a specific {@link LuaEntity | LuaEntity} or {@link LuaEquipment | LuaEquipment}.
 */
interface LuaBurner {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The burnt result inventory.
     */
    readonly burnt_result_inventory: LuaInventory

    /**
     * @remarks
     * Writing automatically handles correcting {@link LuaBurner::remaining_burning_fuel | LuaBurner::remaining_burning_fuel}.
     *
     */
    currently_burning: LuaItemPrototype

    /**
     * The fuel categories this burner uses.
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
     *
     */
    readonly fuel_categories: {[key: string]: boolean}

    heat: number

    readonly heat_capacity: number

    /**
     * The fuel inventory.
     */
    readonly inventory: LuaInventory

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The owner of this burner energy source
     */
    readonly owner: LuaEntity | LuaEquipment

    /**
     * @remarks
     * Writing will silently do nothing if there's no {@link LuaBurner::currently_burning | LuaBurner::currently_burning} set.
     *
     */
    remaining_burning_fuel: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a burner energy source.
 */
interface LuaBurnerPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly burnt_inventory_size: number

    readonly effectivity: number

    readonly emissions: number

    /**
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
     *
     */
    readonly fuel_categories: {[key: string]: boolean}

    readonly fuel_inventory_size: number

    /**
     * The light flicker definition for this burner prototype if any.
     */
    readonly light_flicker: { border_fix_speed: number, color: Color, derivation_change_deviation: number, derivation_change_frequency: number, light_intensity_to_size_coefficient: number, maximum_intensity: number, minimum_intensity: number, minimum_light_size: number }

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly render_no_network_icon: boolean

    readonly render_no_power_icon: boolean

    /**
     * The smoke sources for this burner prototype if any.
     */
    readonly smoke: SmokeSource[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A chunk iterator can be used for iterating chunks coordinates of a surface.
 * The returned type is a {@link ChunkPositionAndArea | ChunkPositionAndArea} containing the chunk coordinates and its area.
 * @example
 * ```
 * for chunk in some_surface.get_chunks() do
 *   game.player.print("x: " .. chunk.x .. ", y: " .. chunk.y)
 *   game.player.print("area: " .. serpent.line(chunk.area))
 * end
 * ```
 *
 */
interface LuaChunkIterator {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Get the next chunk position or `nil`, and increments the iterator.
     */
    (this: void): ChunkPositionAndArea

}

/**
 * A circuit network associated with a given entity, connector, and wire type.
 */
interface LuaCircuitNetwork {
    /**
     * @param signal - The signal to read.
     * @returns The current value of the signal.
     */
    get_signal(this: void,
        signal: SignalID): number

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The circuit connector ID on the associated entity this network was gotten from.
     */
    readonly circuit_connector_id: defines.circuit_connector_id

    /**
     * The number of circuits connected to this network.
     */
    readonly connected_circuit_count: number

    /**
     * The entity this circuit network reference is associated with
     */
    readonly entity: LuaEntity

    /**
     * The circuit networks ID.
     */
    readonly network_id: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The circuit network signals last tick. `nil` if there are no signals.
     */
    readonly signals: Signal[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The wire type this network is associated with.
     */
    readonly wire_type: defines.wire_type

}

interface LuaCombinatorControlBehavior extends LuaControlBehavior {
    /**
     * Gets the value of a specific signal sent by this combinator behavior last tick or nil if the signal didn't exist.
     * @param signal - The signal to get
     * @returns The value or `nil` if none.
     */
    get_signal_last_tick(this: void,
        signal: SignalID): number | null

    /**
     * The circuit network signals sent by this combinator last tick.
     */
    readonly signals_last_tick: Signal[]

}

/**
 * Allows for the registration of custom console commands. Similarly to {@link event subscriptions | LuaBootstrap::on_event}, these don't persist through a save-and-load cycle.
 */
interface LuaCommandProcessor {
    /**
     * Add a custom console command.
     * @remarks
     * Trying to add a command with the `name` of a game command or the name of a custom command that is already in use will result in an error.
     *
     * @param fn - The function that will be called when this command is invoked.
     * @param help - The localised help message. It will be shown to players using the `/help` command.
     * @param name - The desired name of the command (case sensitive).
     * @example
     * This will register a custom event called `print_tick` that prints the current tick to either the player issuing the command or to everyone on the server, depending on the command parameter. It shows the usage of the table that gets passed to any function handling a custom command. This specific example makes use of the `tick` and the optional `player_index` and `parameter` fields. The user is supposed to either call it without any parameter (`"/print_tick"`) or with the `"me"` parameter (`"/print_tick me"`). 
     * ```
     * commands.add_command("print_tick", nil, function(command)
     *   if command.player_index ~= nil and command.parameter == "me" then
     *     game.get_player(command.player_index).print(command.tick)
     *   else
     *     game.print(command.tick)
     *   end
     * end)
     * ```
     *
     */
    add_command(this: void,
        name: string,
        help: LocalisedString,
        fn: (this: void, arg0: CustomCommandData) => any): void

    /**
     * Remove a custom console command.
     * @param name - The name of the command to remove (case sensitive).
     * @returns Whether the command was successfully removed. Returns `false` if the command didn't exist.
     */
    remove_command(this: void,
        name: string): boolean

    /**
     * Lists the custom commands registered by scripts through `LuaCommandProcessor`.
     */
    readonly commands: {[key: string]: LocalisedString}

    /**
     * Lists the built-in commands of the core game. The {@link wiki | https://wiki.factorio.com/Console} has an overview of these.
     */
    readonly game_commands: {[key: string]: LocalisedString}

    /**
     * This object's name.
     */
    readonly object_name: string

}

/**
 * Control behavior for constant combinators.
 */
interface LuaConstantCombinatorControlBehavior extends LuaControlBehavior {
    /**
     * Gets the signal at the given index. Returned {@link Signal | Signal} will not contain signal if none is set for the index.
     */
    get_signal(this: void,
        index: number): Signal

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Sets the signal at the given index
     */
    set_signal(this: void,
        index: number,
        signal: Signal): void

    /**
     * Turns this constant combinator on and off.
     */
    enabled: boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The constant combinator parameters
     * @remarks
     * Setting to `nil` clears the parameters.
     *
     */
    parameters: ConstantCombinatorParameters[]

    /**
     * The number of signals this constant combinator supports
     */
    readonly signals_count: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for container entities.
 */
interface LuaContainerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * This is an abstract base class containing the common functionality between {@link LuaPlayer | LuaPlayer} and entities (see {@link LuaEntity | LuaEntity}). When accessing player-related functions through a {@link LuaEntity | LuaEntity}, it must refer to a character entity.
 */
interface LuaControl {
    /**
     * Begins crafting the given count of the given recipe.
     * @param table.count - The count to craft.
     * @param table.recipe - The recipe to craft.
     * @param table.silent - If false and the recipe can't be crafted the requested number of times printing the failure is skipped.
     * @returns The count that was actually started crafting.
     */
    begin_crafting(this: void,
        table: {
            count: number,
            recipe: string | LuaRecipe,
            silent?: boolean
        }): number

    /**
     * Can at least some items be inserted?
     * @param items - Items that would be inserted.
     * @returns `true` if at least a part of the given items could be inserted into this inventory.
     */
    can_insert(this: void,
        items: ItemStackIdentification): boolean

    /**
     * Can a given entity be opened or accessed?
     */
    can_reach_entity(this: void,
        entity: LuaEntity): boolean

    /**
     * Cancels crafting the given count of the given crafting queue index.
     * @param table.count - The count to cancel crafting.
     * @param table.index - The crafting queue index.
     */
    cancel_crafting(this: void,
        table: {
            index: number,
            count: number
        }): void

    /**
     * Removes the arrow created by `set_gui_arrow`.
     */
    clear_gui_arrow(this: void): void

    /**
     * Remove all items from this entity.
     */
    clear_items_inside(this: void): void

    /**
     * @remarks
     * This will silently fail if personal logistics are not researched yet.
     *
     * @param slot_index - The slot to clear.
     */
    clear_personal_logistic_slot(this: void,
        slot_index: number): void

    /**
     * Unselect any selected entity.
     */
    clear_selected_entity(this: void): void

    /**
     * @remarks
     * This will silently fail if the vehicle does not use logistics.
     *
     * @param slot_index - The slot to clear.
     */
    clear_vehicle_logistic_slot(this: void,
        slot_index: number): void

    /**
     * Disable the flashlight.
     */
    disable_flashlight(this: void): void

    /**
     * Enable the flashlight.
     */
    enable_flashlight(this: void): void

    /**
     * Gets the entities that are part of the currently selected blueprint, regardless of it being in a blueprint book or picked from the blueprint library. Returns `nil` if there is no currently selected blueprint.
     */
    get_blueprint_entities(this: void): BlueprintEntity[]

    /**
     * Gets the count of the given recipe that can be crafted.
     * @param recipe - The recipe.
     * @returns The count that can be crafted.
     */
    get_craftable_count(this: void,
        recipe: string | LuaRecipe): number

    /**
     * Get an inventory belonging to this entity. This can be either the "main" inventory or some auxiliary one, like the module slots or logistic trash slots.
     * @remarks
     * A given {@link defines.inventory | defines.inventory} is only meaningful for the corresponding LuaObject type. EG: get_inventory(defines.inventory.character_main) is only meaningful if 'this' is a player character. You may get a value back but if the type of 'this' isn't the type referred to by the {@link defines.inventory | defines.inventory} it's almost guaranteed to not be the inventory asked for.
     *
     * @returns or `nil` if this entity doesn't have an inventory with the given index.
     */
    get_inventory(this: void,
        inventory: defines.inventory): LuaInventory | null

    /**
     * Get the number of all or some items in this entity.
     * @param item - Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(this: void,
        item?: string): number

    /**
     * Gets the main inventory for this character or player if this is a character or player.
     * @returns or `nil` if this entity is not a character or player.
     */
    get_main_inventory(this: void): LuaInventory | null

    /**
     * Gets the parameters of a personal logistic request and auto-trash slot.
     * @param slot_index - The slot to get.
     * @returns The logistic parameters. If personal logistics are not researched yet, their `name` will be `nil`.
     */
    get_personal_logistic_slot(this: void,
        slot_index: number): LogisticParameters

    /**
     * Gets the parameters of a vehicle logistic request and auto-trash slot.
     * @param slot_index - The slot to get.
     * @returns The logistic parameters. If the vehicle does not use logistics, their `name` will be `nil`.
     */
    get_vehicle_logistic_slot(this: void,
        slot_index: number): LogisticParameters

    /**
     * Does this entity have any item inside it?
     */
    has_items_inside(this: void): boolean

    /**
     * Insert items into this entity. This works the same way as inserters or shift-clicking: the "best" inventory is chosen automatically.
     * @param items - Items to insert.
     * @returns Number of items actually inserted.
     */
    insert(this: void,
        items: ItemStackIdentification): number

    /**
     * Returns whether the player is holding a blueprint. This takes both blueprint items as well as blueprint records from the blueprint library into account.
     * @remarks
     * Both this method and {@link LuaControl::get_blueprint_entities | LuaControl::get_blueprint_entities} refer to the currently selected blueprint, meaning a blueprint book with a selected blueprint will return the information as well.
     *
     */
    is_cursor_blueprint(this: void): boolean

    /**
     * Returns whether the player is holding something in the cursor. It takes into account items from the blueprint library, as well as items and ghost cursor.
     */
    is_cursor_empty(this: void): boolean

    /**
     * Is the flashlight enabled.
     */
    is_flashlight_enabled(this: void): void

    /**
     * When `true` control adapter is a LuaPlayer object, `false` for entities including characters with players
     */
    is_player(this: void): boolean

    /**
     * Mines the given entity as if this player (or character) mined it.
     * @param entity - The entity to mine
     * @param force - Forces mining the entity even if the items can't fit in the player.
     * @returns If the mining succeeded.
     */
    mine_entity(this: void,
        entity: LuaEntity,
        force?: boolean): boolean

    /**
     * Mines the given tile as if this player (or character) mined it.
     * @param tile - The tile to mine.
     * @returns If the mining succeeded.
     */
    mine_tile(this: void,
        tile: LuaTile): boolean

    /**
     * Open the technology GUI and select a given technology.
     * @param technology - The technology to select after opening the GUI.
     */
    open_technology_gui(this: void,
        technology?: TechnologyIdentification): void

    /**
     * Remove items from this entity.
     * @param items - Items to remove.
     * @returns Number of items actually removed.
     */
    remove_item(this: void,
        items: ItemStackIdentification): number

    /**
     * Create an arrow which points at this entity. This is used in the tutorial. For examples, see `control.lua` in the campaign missions.
     */
    set_gui_arrow(this: void,
        table: LuaControlSetGuiArrowParams): void

    /**
     * Sets a personal logistic request and auto-trash slot to the given value.
     * @param slot_index - The slot to set.
     * @param value - The logistic request parameters.
     * @returns Whether the slot was set successfully. `false` if personal logistics are not researched yet.
     */
    set_personal_logistic_slot(this: void,
        slot_index: number,
        value: LogisticParameters): boolean

    /**
     * Sets a vehicle logistic request and auto-trash slot to the given value.
     * @param slot_index - The slot to set.
     * @param value - The logistic request parameters.
     * @returns Whether the slot was set successfully. `false` if the vehicle does not use logistics.
     */
    set_vehicle_logistic_slot(this: void,
        slot_index: number,
        value: LogisticParameters): boolean

    /**
     * Teleport the entity to a given position, possibly on another surface.
     * @remarks
     * Some entities may not be teleported. For instance, transport belts won't allow teleportation and this method will always return `false` when used on any such entity.
     * You can also pass 1 or 2 numbers as the parameters and they will be used as relative teleport coordinates `'teleport(0, 1)'` to move the entity 1 tile positive y. `'teleport(4)'` to move the entity 4 tiles to the positive x.
     *
     * @param position - Where to teleport to.
     * @param surface - Surface to teleport to. If not given, will teleport to the entity's current surface. Only players, cars, and spidertrons can be teleported cross-surface.
     * @returns `true` when the entity was successfully teleported.
     */
    teleport(this: void,
        position: Position,
        surface?: SurfaceIdentification): boolean

    /**
     * Select an entity, as if by hovering the mouse above it.
     * @param position - Position of the entity to select
     */
    update_selected_entity(this: void,
        position: Position): void

    /**
     * The build distance of this character or max uint when not a character or player connected to a character.
     */
    readonly build_distance: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_additional_mining_categories: string[]

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_build_distance_bonus: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_crafting_speed_modifier: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_health_bonus: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_inventory_slots_bonus: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_item_drop_distance_bonus: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_item_pickup_distance_bonus: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_loot_pickup_distance_bonus: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_maximum_following_robot_count_bonus: number

    /**
     * Gets the current mining progress between 0 and 1 of this character, or 0 if they aren't mining.
     */
    readonly character_mining_progress: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_mining_speed_modifier: number

    /**
     * If personal logistic requests are enabled for this character or players character.
     */
    character_personal_logistic_requests_enabled: boolean

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_reach_distance_bonus: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_resource_reach_distance_bonus: number

    /**
     * Gets the current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
     */
    readonly character_running_speed: number

    /**
     * Modifies the running speed of this character by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`.
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_running_speed_modifier: number

    /**
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    character_trash_slot_count_bonus: number

    /**
     * When `true` hand crafting is free and instant
     */
    cheat_mode: boolean

    /**
     * Gets the current crafting queue items.
     */
    readonly crafting_queue: CraftingQueueItem[]

    /**
     * The crafting queue progress [0-1] 0 when no recipe is being crafted.
     */
    readonly crafting_queue_progress: number

    /**
     * Size of the crafting queue.
     */
    readonly crafting_queue_size: number

    /**
     * The ghost prototype in the player's cursor.
     * @remarks
     * When read, it will be a {@link LuaItemPrototype | LuaItemPrototype}.
     * Items in the cursor stack will take priority over the cursor ghost.
     *
     */
    cursor_ghost: ItemPrototypeIdentification

    /**
     * The player's cursor stack, or `nil` if the player controller is a spectator. Even though this property is marked as read-only, it returns a {@link LuaItemStack | LuaItemStack}, meaning it can be manipulated like so:
     * @example
     * ```
     * player.cursor_stack.clear()
     * ```
     *
     */
    readonly cursor_stack: LuaItemStack

    /**
     * `true` if the player is in a vehicle. Writing to this attribute puts the player in or out of a vehicle.
     */
    driving: boolean

    /**
     * The item drop distance of this character or max uint when not a character or player connected to a character.
     */
    readonly drop_item_distance: number

    /**
     * The current combat robots following the character
     * @remarks
     * When called on a {@link LuaPlayer | LuaPlayer}, it must be associated with a character(see {@link LuaPlayer::character | LuaPlayer::character}).
     *
     */
    readonly following_robots: LuaEntity[]

    /**
     * The force of this entity. Reading will always give a {@link LuaForce | LuaForce}, but it is possible to assign either {@link string | string} or {@link LuaForce | LuaForce} to this attribute to change the force.
     */
    force: ForceIdentification

    /**
     * If this character entity is in combat.
     */
    readonly in_combat: boolean

    /**
     * The item pickup distance of this character or max double when not a character or player connected to a character.
     */
    readonly item_pickup_distance: number

    /**
     * The loot pickup distance of this character or max double when not a character or player connected to a character.
     */
    readonly loot_pickup_distance: number

    /**
     * Current mining state.
     * @remarks
     * When the player isn't mining tiles the player will mine what ever entity is currently selected. See {@link LuaControl::selected | LuaControl::selected} and {@link LuaControl::update_selected_entity | LuaControl::update_selected_entity}.
     *
     */
    mining_state: { mining: boolean, position?: Position }

    /**
     * The GUI the player currently has open, or `nil` if no GUI is open. Writing to it fires the {@link on_gui_opened | on_gui_opened} event.
     * This is the GUI that will asked to close (by firing the {@link on_gui_closed | on_gui_closed} event) when the `Esc` or `E` keys are pressed. If this attribute is not `nil`, and a new GUI is written to it, the existing one will be asked to close.
     * @remarks
     * Write supports any of the types. Read will return the `entity`, `equipment`, `equipment-grid`, `player`, `element` or `nil`.
     *
     */
    opened: LuaEntity | LuaItemStack | LuaEquipment | LuaEquipmentGrid | LuaPlayer | LuaGuiElement | defines.gui_type

    /**
     * Returns the {@link defines.gui_type | defines.gui_type} or `nil`.
     */
    readonly opened_gui_type: defines.gui_type

    /**
     * Current item-picking state.
     */
    picking_state: boolean

    /**
     * Current position of the entity.
     */
    readonly position: Position

    /**
     * The reach distance of this character or max uint when not a character or player connected to a character.
     */
    readonly reach_distance: number

    /**
     * Current repair state.
     */
    repair_state: { position: Position, repairing: boolean }

    /**
     * The resource reach distance of this character or max double when not a character or player connected to a character.
     */
    readonly resource_reach_distance: number

    /**
     * Current riding state of this car or the vehicle this player is riding in.
     */
    riding_state: RidingState

    /**
     * The currently selected entity; `nil` if none. Assigning an entity will select it if selectable otherwise clears selection.
     */
    selected: LuaEntity

    /**
     * Current shooting state.
     */
    shooting_state: { position: Position, state: defines.shooting }

    /**
     * The surface this entity is currently on.
     */
    readonly surface: LuaSurface

    /**
     * The vehicle the player is currently sitting in; `nil` if none.
     */
    readonly vehicle: LuaEntity

    /**
     * If personal logistic requests are enabled for this vehicle (spidertron).
     */
    vehicle_logistic_requests_enabled: boolean

    /**
     * Current walking state.
     * @example
     * Make the player go north. Note that a one-shot action like this will only make the player walk for one tick. 
     * ```
     * game.player.walking_state = {walking = true, direction = defines.direction.north}
     * ```
     *
     */
    walking_state: { direction: defines.direction, walking: boolean }

}

/**
 * The control behavior for an entity. Inserters have logistic network and circuit network behavior logic, lamps have circuit logic and so on. This is an abstract base class that concrete control behaviors inherit.
 * @remarks
 * An control reference becomes invalid once the control behavior is removed or the entity (see {@link LuaEntity | LuaEntity}) it resides in is destroyed.
 *
 */
interface LuaControlBehavior {
    /**
     * @param circuit_connector - The connector to get circuit network for. Must be specified for entities with more than one circuit network connector.
     * @param wire - Wire color of the network connected to this entity.
     * @returns The circuit network or nil.
     */
    get_circuit_network(this: void,
        wire: defines.wire_type,
        circuit_connector?: defines.circuit_connector_id): LuaCircuitNetwork | null

    /**
     * The entity this control behavior belongs to.
     */
    readonly entity: LuaEntity

    /**
     * The concrete type of this control behavior.
     */
    readonly type: defines.control_behavior.type

}

/**
 * A custom tag that shows on the map view.
 */
interface LuaCustomChartTag {
    /**
     * Destroys this tag.
     */
    destroy(this: void): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The force this tag belongs to.
     */
    readonly force: LuaForce

    /**
     * This tag's icon, if it has one. Writing `nil` removes it.
     */
    icon: SignalID

    /**
     * The player who last edited this tag.
     */
    last_user: LuaPlayer

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The position of this tag.
     */
    readonly position: Position

    /**
     * The surface this tag belongs to.
     */
    readonly surface: LuaSurface

    /**
     * The unique ID for this tag on this force.
     */
    readonly tag_number: number

    text: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a custom input.
 */
interface LuaCustomInputPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The action that happens when this custom input is triggered.
     */
    readonly action: string

    /**
     * The default alternative key sequence for this custom input. `nil` when not defined.
     */
    readonly alternative_key_sequence: string

    /**
     * The consuming type: `"none"` or `"game-only"`.
     */
    readonly consuming: string

    /**
     * If this custom input is enabled. Disabled custom inputs exist but are not used by the game.
     */
    readonly enabled: boolean

    /**
     * If this custom input is enabled while using the cutscene controller.
     */
    readonly enabled_while_in_cutscene: boolean

    /**
     * If this custom input is enabled while using the spectator controller.
     */
    readonly enabled_while_spectating: boolean

    /**
     * If this custom input will include the selected prototype (if any) when triggered.
     */
    readonly include_selected_prototype: boolean

    /**
     * The item that gets spawned when this custom input is fired or `nil`.
     */
    readonly item_to_spawn: LuaItemPrototype

    /**
     * The default key sequence for this custom input.
     */
    readonly key_sequence: string

    /**
     * The linked game control name or `nil`.
     */
    readonly linked_game_control: string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Lazily evaluated table. For performance reasons, we sometimes return a custom table-like type instead of a native Lua table. This custom type lazily constructs the necessary Lua wrappers of the corresponding C++ objects, therefore preventing their unnecessary construction in some cases.
 * There are some notable consequences to the usage of a custom table type rather than the native Lua table type: Iterating a custom table is only possible using the `pairs` Lua function; `ipairs` won't work. Another key difference is that custom tables cannot be serialised into a game save file -- if saving the game would require serialisation of a custom table, an error will be displayed and the game will not be saved.
 * @example
 * In previous versions of Factorio, this would create a [LuaPlayer](LuaPlayer) instance for every player in the game, even though only one such wrapper is needed. In the current version, accessing [game.players](LuaGameScript::players) by itself does not create any [LuaPlayer](LuaPlayer) instances; they are created lazily when accessed. Therefore, this example only constructs one [LuaPlayer](LuaPlayer) instance, no matter how many elements there are in `game.players`. 
 * ```
 * game.players["Oxyd"].character.die()
 * ```
 *
 * @example
 * Custom tables may be iterated using `pairs`. 
 * ```
 * for _, p in pairs(game.players) do game.player.print(p.name); end
 * ```
 *
 * @example
 * The following will produce no output because `ipairs` is not supported with custom tables. 
 * ```
 * for _, p in ipairs(game.players) do game.player.print(p.name); end  -- incorrect; use pairs instead
 * ```
 *
 * @example
 * This statement will execute successfully and `global.p` will be useable as one might expect. However, as soon as the user tries to save the game, a "LuaCustomTable cannot be serialized" error will be shown. The game will remain unsaveable so long as `global.p` refers to an instance of a custom table. 
 * ```
 * global.p = game.players  -- This has high potential to make the game unsaveable
 * ```
 *
 */
interface LuaCustomTable {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Access an element of this custom table.
     * @remarks
     * This will return a {@link any | any}. The return type is any due to typescript limitations.
     *
     */
    [key: string]: any

    /**
     * Number of elements in this table.
     */
    readonly '#': number

}

/**
 * Prototype of a damage.
 */
interface LuaDamagePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Whether this damage type is hidden from entity tooltips.
     */
    readonly hidden: boolean

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for decider combinators.
 */
interface LuaDeciderCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The decider combinator parameters
     * @remarks
     * Setting to `nil` clears the parameters.
     *
     */
    parameters: DeciderCombinatorParameters

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of an optimized decorative.
 */
interface LuaDecorativePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Autoplace specification for this decorative prototype. `nil` if none.
     */
    readonly autoplace_specification: AutoplaceSpecification

    /**
     * The bounding box used for collision checking.
     */
    readonly collision_box: BoundingBox

    /**
     * The collision masks this decorative uses
     */
    readonly collision_mask: CollisionMask

    readonly collision_mask_with_flags: CollisionMaskWithFlags

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of an electric energy source.
 */
interface LuaElectricEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly buffer_capacity: number

    readonly drain: number

    readonly emissions: number

    readonly input_flow_limit: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly output_flow_limit: number

    readonly render_no_network_icon: boolean

    readonly render_no_power_icon: boolean

    readonly usage_priority: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * The primary interface for interacting with entities through the Lua API. Entities are everything that exists on the map except for tiles (see {@link LuaTile | LuaTile}).
 * Most functions on LuaEntity also work when the entity is contained in a ghost.
 */
interface LuaEntity extends LuaControl {
    /**
     * Adds the given position to this spidertron's autopilot's queue of destinations.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     * @param position - The position the spidertron should move to.
     */
    add_autopilot_destination(this: void,
        position: Position): void

    /**
     * Offer a thing on the market.
     * @remarks
     * Applies to subclasses: Market
     *
     * @example
     * Adds market offer, 1 copper ore for 10 iron ore. 
     * ```
     * market.add_market_item{price={{"iron-ore", 10}}, offer={type="give-item", item="copper-ore"}}
     * ```
     *
     * @example
     * Adds market offer, 1 copper ore for 5 iron ore and 5 stone ore. 
     * ```
     * market.add_market_item{price={{"iron-ore", 5}, {"stone", 5}}, offer={type="give-item", item="copper-ore"}}
     * ```
     *
     */
    add_market_item(this: void,
        offer: Offer): void

    /**
     * Checks if the entity can be destroyed
     * @returns if the entity can be destroyed.
     */
    can_be_destroyed(this: void): boolean

    /**
     * If this character can shoot the given entity or position.
     */
    can_shoot(this: void,
        target: LuaEntity,
        position: Position): boolean

    /**
     * Can wires reach between these entities.
     */
    can_wires_reach(this: void,
        entity: LuaEntity): boolean

    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     * @param force - The force who did the deconstruction order.
     * @param player - The player to set the last_user to if any.
     */
    cancel_deconstruction(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): void

    /**
     * Cancels upgrade if it is scheduled, does nothing otherwise.
     * @param force - The force who did the upgrade order.
     * @param player - The player to set the last_user to if any.
     * @returns If the cancel was successful.
     */
    cancel_upgrade(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): boolean

    /**
     * Remove all fluids from this entity.
     */
    clear_fluid_inside(this: void): void

    /**
     * Removes all offers from a market.
     * @remarks
     * Applies to subclasses: Market
     *
     */
    clear_market_items(this: void): void

    /**
     * Clear a logistic requester slot.
     * @remarks
     * Useable only on entities that have requester slots.
     *
     * @param slot - The slot index.
     */
    clear_request_slot(this: void,
        slot: number): void

    /**
     * Clones this entity.
     * @remarks
     * {@link defines.events.on_entity_cloned | defines.events.on_entity_cloned} is raised.
     *
     * @param table.create_build_effect_smoke - If false, the building effect smoke will not be shown around the new entity.
     * @param table.position - The destination position
     * @param table.surface - The destination surface
     * @returns The cloned entity or `nil` if this entity can't be cloned/can't be cloned to the given location.
     */
    clone(this: void,
        table: {
            position: Position,
            surface?: LuaSurface,
            force?: ForceIdentification,
            create_build_effect_smoke?: boolean
        }): LuaEntity | null

    /**
     * Connects current linked belt with another one.
     * Neighbours have to be of different type. If given linked belt is connected to something else it will be disconnected first. If provided neighbour is connected to something else it will also be disconnected first. Automatically updates neighbour to be connected back to this one.
     * @remarks
     * Can also be used on entity ghost if it contains linked-belt
     * Applies to subclasses: LinkedBelt
     *
     * @param neighbour - Another linked belt or entity ghost containing linked belt to connect or nil to disconnect
     */
    connect_linked_belts(this: void,
        neighbour: LuaEntity): void

    /**
     * Connect two devices with a circuit wire or copper cable. Depending on which type of connection should be made, there are different procedures:
     * - To connect two electric poles, `target` must be a {@link LuaEntity | LuaEntity} that specifies another electric pole. This will connect them with copper cable.
     * - To connect two devices with circuit wire, `target` must be a table of type {@link WireConnectionDefinition | WireConnectionDefinition}.
     * @param target - The target with which to establish a connection.
     * @returns Whether the connection was successfully formed.
     */
    connect_neighbour(this: void,
        target: LuaEntity | WireConnectionDefinition): boolean

    /**
     * Connects the rolling stock in the given direction.
     * @returns If any connection was made
     */
    connect_rolling_stock(this: void,
        direction: defines.rail_direction): boolean

    /**
     * Copies settings from the given entity onto this entity.
     * @param by_player - If provided, the copying is done 'as' this player and [on_entity_settings_pasted](on_entity_settings_pasted) is triggered.
     * @returns Any items removed from this entity as a result of copying the settings.
     */
    copy_settings(this: void,
        entity: LuaEntity,
        by_player?: PlayerIdentification): {[key: string]: number}

    /**
     * Creates the same smoke that is created when you place a building by hand. You can play the building sound to go with it by using {@link LuaSurface::play_sound | LuaSurface::play_sound}, eg: entity.surface.play_sound{path="entity-build/"..entity.prototype.name, position=entity.position}
     */
    create_build_effect_smoke(this: void): void

    /**
     * Damages the entity.
     * @remarks
     * Applies to subclasses: EntityWithHealth
     *
     * @param damage - The amount of damage to be done
     * @param dealer - The entity to consider as the damage dealer.
     * @param force - The force that will be doing the damage.
     * @param type - The type of damage to be done, defaults to "impact".
     * @returns the total damage actually applied after resistances.
     */
    damage(this: void,
        damage: number,
        force: ForceIdentification,
        type?: string,
        dealer?: LuaEntity): number

    /**
     * Depletes and destroys this resource entity.
     * @remarks
     * Applies to subclasses: ResourceEntity
     *
     */
    deplete(this: void): void

    /**
     * Destroys the entity.
     * @remarks
     * Not all entities can be destroyed - things such as rails under trains cannot be destroyed until the train is moved or destroyed.
     *
     * @param table.do_cliff_correction - Whether neighbouring cliffs should be corrected. Defaults to `false`.
     * @param table.raise_destroy - If `true`, [script_raised_destroy](script_raised_destroy) will be called. Defaults to `false`.
     * @returns Returns `false` if the entity was valid and destruction failed, `true` in all other cases.
     */
    destroy(this: void,
        table?: {
            do_cliff_correction?: boolean,
            raise_destroy?: boolean
        }): boolean

    /**
     * Immediately kills the entity. Does nothing if the entity doesn't have health.
     * Unlike {@link LuaEntity::destroy | LuaEntity::destroy}, `die` will trigger the {@link on_entity_died | on_entity_died} event and the entity will produce a corpse and drop loot if it has any.
     * @remarks
     * If `force` is not specified, `on_entity_died` will blame the `"neutral"` force.
     *
     * @param cause - The cause to attribute the kill to.
     * @param force - The force to attribute the kill to.
     * @example
     * This function can be called with only the `cause` argument and no `force`: 
     * ```
     * entity.die(nil, killer_entity)
     * ```
     *
     * @returns Whether the entity was successfully killed.
     */
    die(this: void,
        force?: ForceIdentification,
        cause?: LuaEntity): boolean

    /**
     * Disconnects linked belt from its neighbour.
     * @remarks
     * Can also be used on entity ghost if it contains linked-belt
     * Applies to subclasses: LinkedBelt
     *
     */
    disconnect_linked_belts(this: void): void

    /**
     * Disconnect circuit wires or copper cables between devices. Depending on which type of connection should be cut, there are different procedures:
     * - To remove all copper cables, leave the `target` parameter blank: `pole.disconnect_neighbour()`.
     * - To remove all wires of a specific color, set `target` to {@link defines.wire_type.red | defines.wire_type.red} or {@link defines.wire_type.green | defines.wire_type.green}.
     * - To remove a specific copper cable between two electric poles, `target` must be a {@link LuaEntity | LuaEntity} that specifies the other pole: `pole1.disconnect_neighbour(pole2)`.
     * - To remove a specific circuit wire, `target` must be a table of type {@link WireConnectionDefinition | WireConnectionDefinition}.
     * @param target - The target with which to cut a connection.
     */
    disconnect_neighbour(this: void,
        target?: defines.wire_type | LuaEntity | WireConnectionDefinition): void

    /**
     * Tries to disconnect this rolling stock in the given direction.
     * @returns If anything was disconnected
     */
    disconnect_rolling_stock(this: void,
        direction: defines.rail_direction): boolean

    /**
     * Get the source of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    get_beam_source(this: void): BeamTarget

    /**
     * Get the target of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    get_beam_target(this: void): BeamTarget

    /**
     * The burnt result inventory for this entity or `nil` if this entity doesn't have a burnt result inventory.
     */
    get_burnt_result_inventory(this: void): LuaInventory

    /**
     * @param circuit_connector - The connector to get circuit network for. Must be specified for entities with more than one circuit network connector.
     * @param wire - Wire color of the network connected to this entity.
     * @returns The circuit network or nil.
     */
    get_circuit_network(this: void,
        wire: defines.wire_type,
        circuit_connector?: defines.circuit_connector_id): LuaCircuitNetwork | null

    /**
     * @remarks
     * Applies to subclasses: Rail
     *
     * @returns Rail connected in the specified manner to this one.
     */
    get_connected_rail(this: void,
        table: {
            rail_direction: defines.rail_direction,
            rail_connection_direction: defines.rail_connection_direction
        }): LuaEntity

    /**
     * Get the rails that this signal is connected to.
     * @remarks
     * Applies to subclasses: RailSignal,RailChainSignal
     *
     */
    get_connected_rails(this: void): LuaEntity[]

    /**
     * Gets rolling stock connected to the given end of this stock
     * @remarks
     * This will also return {@link defines.rail_direction | defines.rail_direction} of other rolling stock that is connected back to this rolling stock
     *
     * @returns One of connected rolling stocks
     */
    get_connected_rolling_stock(this: void,
        direction: defines.rail_direction): LuaEntity

    /**
     * Gets the control behavior of the entity (if any).
     * @returns The control behavior or nil.
     */
    get_control_behavior(this: void): LuaControlBehavior | null

    /**
     * Returns the amount of damage to be taken by this entity.
     */
    get_damage_to_be_taken(this: void): number

    /**
     * Gets the driver of this vehicle if any.
     * @remarks
     * May be `nil` if the vehicle contains no driver. To check if there's a passenger see {@link LuaEntity::get_passenger | LuaEntity::get_passenger}.
     * Applies to subclasses: Vehicle
     *
     */
    get_driver(this: void): LuaEntity | LuaPlayer

    /**
     * Get the filter for a slot in an inserter, loader, or logistic storage container.
     * @remarks
     * The entity must allow filters.
     *
     * @param slot_index - Index of the slot to get the filter for.
     * @returns Prototype name of the item being filtered. `nil` if the given slot has no filter.
     */
    get_filter(this: void,
        slot_index: number): string

    /**
     * Get amounts of all fluids in this entity.
     * @remarks
     * If information about fluid temperatures is required, {@link LuaEntity::fluidbox | LuaEntity::fluidbox} should be used instead.
     *
     * @returns The amounts, indexed by fluid names.
     */
    get_fluid_contents(this: void): {[key: string]: number}

    /**
     * Get the amount of all or some fluid in this entity.
     * @remarks
     * If information about fluid temperatures is required, {@link LuaEntity::fluidbox | LuaEntity::fluidbox} should be used instead.
     *
     * @param fluid - Prototype name of the fluid to count. If not specified, count all fluids.
     */
    get_fluid_count(this: void,
        fluid?: string): number

    /**
     * The fuel inventory for this entity or `nil` if this entity doesn't have a fuel inventory.
     */
    get_fuel_inventory(this: void): LuaInventory

    /**
     * The health ratio of this entity between 1 and 0 (for full health and no health respectively).
     */
    get_health_ratio(this: void): number

    /**
     * Gets the heat setting for this heat interface.
     * @remarks
     * Applies to subclasses: HeatInterface
     *
     */
    get_heat_setting(this: void): HeatSetting

    /**
     * Gets the filter for this infinity container at the given index or `nil` if the filter index doesn't exist or is empty.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     * @param index - The index to get.
     */
    get_infinity_container_filter(this: void,
        index: number): InfinityInventoryFilter

    /**
     * Gets the filter for this infinity pipe or `nil` if the filter is empty.
     * @remarks
     * Applies to subclasses: InfinityPipe
     *
     */
    get_infinity_pipe_filter(this: void): InfinityPipeFilter

    /**
     * Gets all the `LuaLogisticPoint`s that this entity owns. Optionally returns only the point specified by the index parameter.
     * @remarks
     * When `index` is not given, this will be a single `LuaLogisticPoint` for most entities. For some (such as the player character), it can be zero or more.
     *
     * @param index - If provided, only returns the `LuaLogisticPoint` specified by this index.
     */
    get_logistic_point(this: void,
        index?: defines.logistic_member_index): LuaLogisticPoint | LuaLogisticPoint[]

    /**
     * Get all offers in a market as an array.
     * @remarks
     * Applies to subclasses: Market
     *
     */
    get_market_items(this: void): Offer[]

    /**
     * Get the maximum transport line index of a belt or belt connectable entity.
     * @remarks
     * Applies to subclasses: TransportBeltConnectable
     *
     */
    get_max_transport_line_index(this: void): number

    /**
     * Read a single signal from the combined circuit networks.
     * @param circuit_connector - The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     * @param signal - The signal to read.
     * @returns The current value of the signal.
     */
    get_merged_signal(this: void,
        signal: SignalID,
        circuit_connector?: defines.circuit_connector_id): number

    /**
     * The merged circuit network signals or `nil` if there are no signals.
     * @param circuit_connector - The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     * @returns The sum of signals on both the red and green networks, or nil if it doesn't have a circuit connector.
     */
    get_merged_signals(this: void,
        circuit_connector?: defines.circuit_connector_id): Signal[] | null

    /**
     * @returns Inventory for storing modules of this entity; `nil` if this entity has no module inventory.
     */
    get_module_inventory(this: void): LuaInventory

    /**
     * Gets (and or creates if needed) the control behavior of the entity.
     * @returns The control behavior or nil.
     */
    get_or_create_control_behavior(this: void): LuaControlBehavior | null

    /**
     * Gets the entities output inventory if it has one.
     * @returns a reference to the entities output inventory.
     */
    get_output_inventory(this: void): LuaInventory

    /**
     * Gets the passenger of this car or spidertron if any.
     * @remarks
     * May be `nil` if the vehicle contains no passenger. To check if there's a driver see {@link LuaEntity::get_driver | LuaEntity::get_driver}.
     * This differs over {@link LuaEntity::get_driver | LuaEntity::get_driver} in that the passenger can't drive the car.
     * Applies to subclasses: Vehicle
     *
     */
    get_passenger(this: void): LuaEntity | LuaPlayer

    /**
     * The radius of this entity.
     */
    get_radius(this: void): number

    /**
     * Get the rail at the end of the rail segment this rail is in.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * This function has a second return value. A {@link defines.rail_direction | defines.rail_direction} that points out of the rail segment from the end rail.
     * Applies to subclasses: Rail
     *
     */
    get_rail_segment_end(this: void,
        direction: defines.rail_direction): LuaEntity

    /**
     * Get the rail signal or train stop at the start/end of the rail segment this rail is in, or `nil` if the rail segment doesn't start/end with a signal nor a train stop.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     * @param direction - The direction of travel relative to this rail.
     * @param in_else_out - If true, gets the entity at the entrance of the rail segment, otherwise gets the entity at the exit of the rail segment.
     */
    get_rail_segment_entity(this: void,
        direction: defines.rail_direction,
        in_else_out: boolean): LuaEntity

    /**
     * Get the length of the rail segment this rail is in.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     */
    get_rail_segment_length(this: void): number

    /**
     * Get a rail from each rail segment that overlaps with this rail's rail segment.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     */
    get_rail_segment_overlaps(this: void): LuaEntity[]

    /**
     * Current recipe being assembled by this machine or `nil` if no recipe is set.
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    get_recipe(this: void): LuaRecipe

    /**
     * Get a logistic requester slot.
     * @remarks
     * Useable only on entities that have requester slots.
     *
     * @param slot - The slot index.
     * @returns Contents of the specified slot; `nil` if the given slot contains no request.
     */
    get_request_slot(this: void,
        slot: number): SimpleItemStack

    /**
     * The train currently stopped at this train stop or `nil` if none.
     * @remarks
     * Applies to subclasses: TrainStop
     *
     */
    get_stopped_train(this: void): LuaTrain

    /**
     * The trains scheduled to stop at this train stop.
     * @remarks
     * Applies to subclasses: TrainStop
     *
     */
    get_train_stop_trains(this: void): LuaTrain[]

    /**
     * Get a transport line of a belt or belt connectable entity.
     * @remarks
     * Applies to subclasses: TransportBeltConnectable
     *
     * @param index - Index of the requested transport line. Transport lines are 1-indexed.
     */
    get_transport_line(this: void,
        index: number): LuaTransportLine

    /**
     * Returns the new entity direction after upgrading.
     * @returns nil if this entity is not marked for upgrade.
     */
    get_upgrade_direction(this: void): defines.direction

    /**
     * Returns the new entity prototype.
     * @returns nil if this entity is not marked for upgrade.
     */
    get_upgrade_target(this: void): LuaEntityPrototype

    /**
     * Same as {@link LuaEntity::has_flag | LuaEntity::has_flag}, but targets the inner entity on a entity ghost.
     * @remarks
     * Applies to subclasses: EntityGhost
     *
     * @param flag - The flag to test. See [EntityPrototypeFlags](EntityPrototypeFlags) for a list of flags.
     * @returns `true` if the entity has the given flag set.
     */
    ghost_has_flag(this: void,
        flag: string): boolean

    /**
     * Has this unit been assigned a command?
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    has_command(this: void): boolean

    /**
     * Test whether this entity's prototype has a certain flag set.
     * @remarks
     * `entity.has_flag(f)` is a shortcut for `entity.prototype.has_flag(f)`.
     *
     * @param flag - The flag to test. See [EntityPrototypeFlags](EntityPrototypeFlags) for a list of flags.
     * @returns `true` if this entity has the given flag set.
     */
    has_flag(this: void,
        flag: string): boolean

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Insert fluid into this entity. Fluidbox is chosen automatically.
     * @param fluid - Fluid to insert.
     * @returns Amount of fluid actually inserted.
     */
    insert_fluid(this: void,
        fluid: Fluid): number

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     * @returns `true` if this gate is currently closed.
     */
    is_closed(this: void): boolean

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     * @returns `true` if this gate is currently closing
     */
    is_closing(this: void): boolean

    /**
     * Returns true if this entity is connected to an electric network.
     */
    is_connected_to_electric_network(this: void): boolean

    /**
     * Returns whether a craft is currently in process. It does not indicate whether progress is currently being made, but whether any crafting action has made progress in this machine.
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    is_crafting(this: void): void

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     * @returns `true` if this gate is currently opened.
     */
    is_opened(this: void): boolean

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     * @returns `true` if this gate is currently opening.
     */
    is_opening(this: void): boolean

    /**
     * Is this entity or tile ghost or item request proxy registered for construction? If false, it means a construction robot has been dispatched to build the entity, or it is not an entity that can be constructed.
     */
    is_registered_for_construction(this: void): boolean

    /**
     * Is this entity registered for deconstruction with this force? If false, it means a construction robot has been dispatched to deconstruct it, or it is not marked for deconstruction. This is worst-case O(N) complexity where N is the current number of things in the deconstruct queue.
     * @param force - The force construction manager to check.
     */
    is_registered_for_deconstruction(this: void,
        force: ForceIdentification): boolean

    /**
     * Is this entity registered for repair? If false, it means a construction robot has been dispatched to upgrade it, or it is not damaged. This is worst-case O(N) complexity where N is the current number of things in the repair queue.
     */
    is_registered_for_repair(this: void): boolean

    /**
     * Is this entity registered for upgrade? If false, it means a construction robot has been dispatched to upgrade it, or it is not marked for upgrade. This is worst-case O(N) complexity where N is the current number of things in the upgrade queue.
     */
    is_registered_for_upgrade(this: void): boolean

    /**
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     * @returns `true` if the rocket was successfully launched. Return value of `false` means the silo is not ready for launch.
     */
    launch_rocket(this: void): boolean

    /**
     * Mines this entity.
     * @remarks
     * 'standard' operation is to keep calling mine() with an inventory until all items are transferred and the items dealt with.
     * The result of mining the entity (the item(s) it produces when mined) will be dropped on the ground if they don't fit into the provided inventory.
     *
     * @param table.force - If true, when the item(s) don't fit into the given inventory the entity is force mined. If false, the mining operation fails when there isn't enough room to transfer all of the items into the inventory. Defaults to false. This is ignored and acts as 'true' if no inventory is provided.
     * @param table.ignore_minable - If true, the minable state of the entity is ignored. Defaults to false. If false, an entity that isn't minable (set as not-minable in the prototype or isn't minable for other reasons) will fail to be mined.
     * @param table.inventory - If provided the item(s) will be transferred into this inventory. If provided, this must be an inventory created with [LuaGameScript::create_inventory](LuaGameScript::create_inventory) or be a basic inventory owned by some entity.
     * @param table.raise_destroyed - If true, [script_raised_destroy](script_raised_destroy) will be raised. Defaults to true.
     * @returns Whether mining succeeded.
     */
    mine(this: void,
        table?: {
            inventory?: LuaInventory,
            force?: boolean,
            raise_destroyed?: boolean,
            ignore_minable?: boolean
        }): boolean

    /**
     * Sets the entity to be deconstructed by construction robots.
     * @param force - The force whose robots are supposed to do the deconstruction.
     * @param player - The player to set the last_user to if any.
     * @returns if the entity was marked for deconstruction.
     */
    order_deconstruction(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): boolean

    /**
     * Sets the entity to be upgraded by construction robots.
     * @param table.direction - The new direction if any.
     * @param table.force - The force whose robots are supposed to do the upgrade.
     * @param table.target - The prototype of the entity to upgrade to.
     * @returns if the entity was marked for upgrade.
     */
    order_upgrade(this: void,
        table: {
            force: ForceIdentification,
            target: EntityPrototypeIdentification,
            player?: PlayerIdentification,
            direction?: defines.direction
        }): boolean

    /**
     * Plays a note with the given instrument and note.
     * @remarks
     * Applies to subclasses: ProgrammableSpeaker
     *
     * @returns If the request is valid. The sound may or may not be played depending on polyphony settings.
     */
    play_note(this: void,
        instrument: number,
        note: number): boolean

    /**
     * Release the unit from the spawner which spawned it. This allows the spawner to continue spawning additional units.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    release_from_spawner(this: void): void

    /**
     * Remove fluid from this entity.
     * @remarks
     * If temperature is given only fluid matching that exact temperature is removed. If minimum and maximum is given fluid within that range is removed.
     *
     * @param table.amount - Amount to remove
     * @param table.name - Fluid prototype name.
     * @returns Amount of fluid actually removed.
     */
    remove_fluid(this: void,
        table: {
            name: string,
            amount: number,
            minimum_temperature?: number,
            maximum_temperature?: number,
            temperature?: number
        }): number

    /**
     * Remove an offer from a market.
     * @remarks
     * The other offers are moved down to fill the gap created by removing the offer, which decrements the overall size of the offer array.
     * Applies to subclasses: Market
     *
     * @param offer - Index of offer to remove.
     * @returns `true` if the offer was successfully removed; `false` when the given index was not valid.
     */
    remove_market_item(this: void,
        offer: number): boolean

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     * @param force - The force that requests the gate to be closed.
     */
    request_to_close(this: void,
        force: ForceIdentification): void

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     * @param extra_time - Extra ticks to stay open.
     * @param force - The force that requests the gate to be open.
     */
    request_to_open(this: void,
        force: ForceIdentification,
        extra_time?: number): void

    /**
     * Revive a ghost. I.e. turn it from a ghost to a real entity or tile.
     * @remarks
     * If this is an entity ghost and it is successfully revived this will also return the revived entity or `nil` as a second return value and possibly item request proxy as the third parameter depending on value of return_item_request_proxy.
     *
     * @param table.raise_revive - If true, and an entity ghost; [script_raised_revive](script_raised_revive) will be called. Else if true, and a tile ghost; [script_raised_set_tiles](script_raised_set_tiles) will be called.
     * @param table.return_item_request_proxy - If `true` the function will return item request proxy as the third parameter.
     * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
     */
    revive(this: void,
        table?: {
            return_item_request_proxy?: boolean,
            raise_revive?: boolean
        }): {[key: string]: number} | null

    /**
     * Rotates this entity as if the player rotated it.
     * @param table.enable_looted - When true, each spilled item will be flagged with the [LuaEntity::to_be_looted](LuaEntity::to_be_looted) flag.
     * @param table.force - When provided the spilled items will be marked for deconstruction by this force.
     * @param table.reverse - If `true`, rotate the entity in the counter-clockwise direction.
     * @param table.spill_items - If the player is not given should extra items be spilled or returned as a second return value from this.
     * @returns Whether the rotation was successful.
     */
    rotate(this: void,
        table?: {
            reverse?: boolean,
            by_player?: PlayerIdentification,
            spill_items?: boolean,
            enable_looted?: boolean,
            force?: LuaForce | string
        }): boolean

    /**
     * Set the source of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    set_beam_source(this: void,
        source: LuaEntity | Position): void

    /**
     * Set the target of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    set_beam_target(this: void,
        target: LuaEntity | Position): void

    /**
     * Give the entity a command.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    set_command(this: void,
        command: Command): void

    /**
     * Give the entity a distraction command.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    set_distraction_command(this: void,
        command: Command): void

    /**
     * Sets the driver of this vehicle.
     * @remarks
     * This differs over {@link LuaEntity::set_passenger | LuaEntity::set_passenger} in that the passenger can't drive the vehicle.
     * Applies to subclasses: Vehicle
     *
     * @param driver - The new driver or `nil` to eject the current driver if any.
     */
    set_driver(this: void,
        driver: LuaEntity | PlayerIdentification): void

    /**
     * Set the filter for a slot in an inserter, loader, or logistic storage container.
     * @remarks
     * The entity must allow filters.
     *
     * @param item - Prototype name of the item to filter.
     * @param slot_index - Index of the slot to set the filter for.
     */
    set_filter(this: void,
        slot_index: number,
        item: string): void

    /**
     * Sets the heat setting for this heat interface.
     * @remarks
     * Applies to subclasses: HeatInterface
     *
     * @param filter - The new setting.
     */
    set_heat_setting(this: void,
        filter: HeatSetting): void

    /**
     * Sets the filter for this infinity container at the given index.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     * @param filter - The new filter or `nil` to clear the filter.
     * @param index - The index to set.
     */
    set_infinity_container_filter(this: void,
        index: number,
        filter: InfinityInventoryFilter): void

    /**
     * Sets the filter for this infinity pipe.
     * @remarks
     * Applies to subclasses: InfinityPipe
     *
     * @param filter - The new filter or `nil` to clear the filter.
     */
    set_infinity_pipe_filter(this: void,
        filter: InfinityPipeFilter): void

    /**
     * Sets the passenger of this car or spidertron.
     * @remarks
     * This differs over {@link LuaEntity::get_driver | LuaEntity::get_driver} in that the passenger can't drive the car.
     * Applies to subclasses: Vehicle
     *
     */
    set_passenger(this: void,
        passenger: LuaEntity | PlayerIdentification): void

    /**
     * Sets the current recipe in this assembly machine.
     * @remarks
     * Applies to subclasses: AssemblingMachine
     *
     * @param recipe - The new recipe or `nil` to clear the recipe.
     * @returns Any items removed from this entity as a result of setting the recipe.
     */
    set_recipe(this: void,
        recipe: string | LuaRecipe): {[key: string]: number}

    /**
     * Set a logistic requester slot.
     * @remarks
     * Useable only on entities that have requester slots.
     *
     * @param request - What to request.
     * @param slot - The slot index.
     * @returns If the slot was set.
     */
    set_request_slot(this: void,
        request: ItemStackIdentification,
        slot: number): boolean

    /**
     * Revives a ghost silently.
     * @remarks
     * If this is an entity ghost and it is successfully revived this will also return the revived entity or `nil` as a second return value and possibly item request proxy as the third parameter depending on value of return_item_request_proxy.
     *
     * @param table.raise_revive - If true, and an entity ghost; [script_raised_revive](script_raised_revive) will be called. Else if true, and a tile ghost; [script_raised_set_tiles](script_raised_set_tiles) will be called.
     * @param table.return_item_request_proxy - If `true` the function will return item request proxy as the third parameter.
     * @returns Any items the new real entity collided with or `nil` if the ghost could not be revived.
     */
    silent_revive(this: void,
        table?: {
            return_item_request_proxy?: boolean,
            raise_revive?: boolean
        }): {[key: string]: number} | null

    /**
     * Triggers spawn_decoration actions defined in the entity prototype or does nothing if entity is not "turret" or "unit-spawner".
     */
    spawn_decorations(this: void): void

    /**
     * Only works if the entity is a speech-bubble, with an "effect" defined in its wrapper_flow_style. Starts animating the opacity of the speech bubble towards zero, and destroys the entity when it hits zero.
     */
    start_fading_out(this: void): void

    /**
     * Whether this entity supports a backer name.
     */
    supports_backer_name(this: void): boolean

    /**
     * Is this entity marked for deconstruction?
     */
    to_be_deconstructed(this: void): boolean

    /**
     * Is this entity marked for upgrade?
     */
    to_be_upgraded(this: void): boolean

    /**
     * Toggle this entity's equipment movement bonus. Does nothing if the entity does not have an equipment grid.
     * @remarks
     * This property can also be read and written on the equipment grid of this entity.
     *
     */
    toggle_equipment_movement_bonus(this: void): void

    /**
     * Reconnect loader, beacon, cliff and mining drill connections to entities that might have been teleported out or in by the script. The game doesn't do this automatically as we don't want to loose performance by checking this in normal games.
     */
    update_connections(this: void): void

    /**
     * Deactivating an entity will stop all its operations (car will stop moving, inserters will stop working, fish will stop moving etc).
     * @remarks
     * Entities that are not active naturally can't be set to be active (setting it to be active will do nothing)
     * Ghosts, simple smoke, and corpses can't be modified at this time.
     * It is even possible to set the character to not be active, so he can't move and perform most of the tasks.
     *
     */
    active: boolean

    /**
     * The ai settings of this unit.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly ai_settings: LuaAISettings

    /**
     * @remarks
     * Applies to subclasses: ProgrammableSpeaker
     *
     */
    alert_parameters: ProgrammableSpeakerAlertParameters

    /**
     * Whether this character's personal roboports are allowed to dispatch robots.
     * @remarks
     * Applies to subclasses: Character
     *
     */
    allow_dispatching_robots: boolean

    /**
     * Count of resource units contained.
     * @remarks
     * Applies to subclasses: ResourceEntity
     *
     */
    amount: number

    /**
     * If this land mine is armed.
     * @remarks
     * Applies to subclasses: LandMine
     *
     */
    readonly armed: boolean

    /**
     * The player this character is associated with or `nil` if none. When the player logs off in multiplayer all of the associated characters will be logged off with him.
     * @remarks
     * A character associated with a player is not directly controlled by any player.
     * Set to `nil` to clear. The player will be automatically disassociated when a controller is set on the character.
     * Applies to subclasses: Character
     *
     */
    associated_player: LuaPlayer

    /**
     * Whether this rocket silo automatically launches the rocket when cargo is inserted.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    auto_launch: boolean

    /**
     * Destination position of spidertron's autopilot. Returns `nil` if autopilot doesn't have destination set.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    autopilot_destination: Position

    /**
     * The queued destination positions of spidertron's autopilot.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly autopilot_destinations: Position[]

    /**
     * The backer name assigned to this entity, or `nil` if this entity doesn't support backer names. Entities that support backer names are labs, locomotives, radars, roboports, and train stops.
     * @remarks
     * While train stops get the name of a backer when placed down, players can rename them if they want to. In this case, `backer_name` returns the player-given name of the entity.
     *
     */
    backer_name: string

    /**
     * The belt connectable neighbours of this belt connectable entity. Only entities that input to or are outputs of this entity. Does not contain the other end of an underground belt, see {@link LuaEntity::neighbours | LuaEntity::neighbours} for that. This is a dictionary with `"inputs"`, `"outputs"` entries that are arrays of transport belt connectable entities, or empty tables if no entities.
     * @remarks
     * Applies to subclasses: TransportBeltConnectable
     *
     */
    readonly belt_neighbours: {[key: string]: LuaEntity[]}

    /**
     * `"input"` or `"output"`, depending on whether this underground belt goes down or up.
     * @remarks
     * Applies to subclasses: TransportBeltToGround
     *
     */
    readonly belt_to_ground_type: string

    /**
     * The bonus mining progress for this mining drill or `nil` if this isn't a mining drill. Read yields a number in range [0, mining_target.prototype.mineable_properties.mining_time]
     */
    bonus_mining_progress: number

    /**
     * The current productivity bonus progress, as a number in range [0, 1].
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    bonus_progress: number

    /**
     * {@link LuaEntityPrototype::collision_box | LuaEntityPrototype::collision_box} around entity's given position and respecting the current entity orientation.
     */
    readonly bounding_box: BoundingBox

    /**
     * The burner energy source for this entity or `nil` if there isn't one.
     */
    readonly burner: LuaBurner

    /**
     * The state of this chain signal.
     * @remarks
     * Applies to subclasses: RailChainSignal
     *
     */
    readonly chain_signal_state: defines.chain_signal_state

    /**
     * The reason this character corpse character died (if any).
     * @remarks
     * Applies to subclasses: CharacterCorpse
     *
     */
    character_corpse_death_cause: LocalisedString

    /**
     * The player index associated with this character corpse.
     * @remarks
     * The index is not guaranteed to be valid so it should always be checked first if a player with that index actually exists.
     * Applies to subclasses: CharacterCorpse
     *
     */
    character_corpse_player_index: number

    /**
     * The tick this character corpse died at.
     * @remarks
     * Applies to subclasses: CharacterCorpse
     *
     */
    character_corpse_tick_of_death: number

    /**
     * Entities that are directly connected to this entity via the circuit network.
     */
    readonly circuit_connected_entities: { green: LuaEntity[], red: LuaEntity[] }

    /**
     * The connection definition for entities that are directly connected to this entity via the circuit network.
     */
    readonly circuit_connection_definitions: CircuitConnectionDefinition[]

    /**
     * The orientation of this cliff.
     */
    readonly cliff_orientation: CliffOrientation

    /**
     * The character, rolling stock, train stop, car, spider-vehicle, flying text, corpse or simple-entity-with-owner color. Returns `nil` if this entity doesn't use custom colors.
     * @remarks
     * Car color is overridden by the color of the current driver/passenger, if there is one.
     *
     */
    color: Color

    /**
     * The owner of this combat robot if any.
     */
    combat_robot_owner: LuaEntity

    /**
     * The command given to this unit or `nil` is the unit has no command.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly command: Command

    /**
     * The rail entity this train stop is connected to or `nil` if there is none.
     * @remarks
     * Applies to subclasses: TrainStop
     *
     */
    readonly connected_rail: LuaEntity

    /**
     * Rail direction to which this train stop is binding. This returns a value even when no rails are present.
     * @remarks
     * Applies to subclasses: TrainStop
     *
     */
    readonly connected_rail_direction: defines.rail_direction

    /**
     * The consumption bonus of this entity.
     */
    readonly consumption_bonus: number

    /**
     * Multiplies the energy consumption.
     * @remarks
     * Applies to subclasses: Car
     *
     */
    consumption_modifier: number

    /**
     * Whether this corpse will ever fade away.
     * @remarks
     * Useable only on corpses.
     *
     */
    corpse_expires: boolean

    /**
     * If true, corpse won't be destroyed when entities are placed over it. If false, whether corpse will be removed or not depends on value of CorpsePrototype::remove_on_entity_placement.
     * @remarks
     * Useable only on corpses.
     *
     */
    corpse_immune_to_entity_placement: boolean

    /**
     * The current crafting progress, as a number in range [0, 1].
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    crafting_progress: number

    /**
     * The current crafting speed, including speed bonuses from modules and beacons.
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    readonly crafting_speed: number

    /**
     * The damage dealt by this turret, artillery turret, or artillery wagon.
     * @remarks
     * Applies to subclasses: Turret
     *
     */
    damage_dealt: number

    /**
     * When the entity is not destructible it can't be damaged.
     * @remarks
     * An indestructible entity can still be mined.
     * Entities that are indestructible naturally (they have no health, like smoke, resource etc) can't be set to be destructible.
     *
     */
    destructible: boolean

    /**
     * The current direction this entity is facing.
     */
    direction: defines.direction

    /**
     * The distraction command given to this unit or `nil` is the unit currently isn't distracted.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly distraction_command: Command

    /**
     * Whether the driver of this car or spidertron is the gunner, if false, the passenger is the gunner.
     */
    driver_is_gunner: boolean

    /**
     * Position where the entity puts its stuff.
     * @remarks
     * Meaningful only for entities that put stuff somewhere, such as mining drills or inserters. Mining drills can't have their drop position changed; inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the drop position.
     *
     */
    drop_position: Position

    /**
     * The entity this entity is putting its items to, or `nil` if there is no such entity. If there are multiple possible entities at the drop-off point, writing to this attribute allows a mod to choose which one to drop off items to. The entity needs to collide with the tile box under the drop-off position.
     * @remarks
     * Meaningful only for entities that put items somewhere, such as mining drills or inserters. Returns `nil` for any other entity.
     *
     */
    drop_target: LuaEntity

    /**
     * The current speed of this unit in tiles per tick, taking into account any walking speed modifier given by the tile the unit is standing on.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly effective_speed: number

    /**
     * Multiplies the acceleration the vehicle can create for one unit of energy. By default is `1`.
     * @remarks
     * Applies to subclasses: Car
     *
     */
    effectivity_modifier: number

    /**
     * The effects being applied to this entity or `nil`. For beacons this is the effect the beacon is broadcasting.
     */
    readonly effects: ModuleEffects

    /**
     * The buffer size for the electric energy source or nil if the entity doesn't have an electric energy source.
     * @remarks
     * Write access is limited to the ElectricEnergyInterface type
     *
     */
    electric_buffer_size: number

    /**
     * The electric drain for the electric energy source or nil if the entity doesn't have an electric energy source.
     */
    readonly electric_drain: number

    /**
     * The emissions for the electric energy source or nil if the entity doesn't have an electric energy source.
     */
    readonly electric_emissions: number

    /**
     * The input flow limit for the electric energy source or nil if the entity doesn't have an electric energy source.
     */
    readonly electric_input_flow_limit: number

    /**
     * Returns the id of the electric network that this entity is connected to or `nil`.
     */
    readonly electric_network_id: number

    /**
     * The electric network statistics for this electric pole.
     * @remarks
     * Applies to subclasses: ElectricPole
     *
     */
    readonly electric_network_statistics: LuaFlowStatistics

    /**
     * The output flow limit for the electric energy source or nil if the entity doesn't have an electric energy source.
     */
    readonly electric_output_flow_limit: number

    /**
     * If equipment grid logistics are enabled while this vehicle is moving.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    enable_logistics_while_moving: boolean

    /**
     * Energy stored in the entity (heat in furnace, energy stored in electrical devices etc.). always 0 for entities that don't have the concept of energy stored inside.
     * @example
     * ```
     * game.player.print("Machine energy: " .. game.player.selected.energy .. "J")
     * game.player.selected.energy = 3000
     * ```
     *
     */
    energy: number

    /**
     * How much energy this generator generated in the last tick.
     * @remarks
     * Applies to subclasses: Generator
     *
     */
    readonly energy_generated_last_tick: number

    /**
     * The label of this entity if it has one or `nil`. Changing the value will trigger on_entity_renamed event
     * @remarks
     * only usable on entities that have labels (currently only spider-vehicles).
     *
     */
    entity_label: string

    /**
     * The number of filter slots this inserter, loader, or logistic storage container has. 0 if not one of those entities.
     */
    readonly filter_slot_count: number

    /**
     * Fluidboxes of this entity.
     */
    fluidbox: LuaFluidBox

    /**
     * The follow offset of this spidertron if any. If it is not following an entity this will be nil. This is randomized each time the follow entity is set.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    follow_offset: Position

    /**
     * The follow target of this spidertron if any.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    follow_target: LuaEntity

    /**
     * Multiplies the car friction rate.
     * @remarks
     * Applies to subclasses: Car
     *
     * @example
     * This will allow the car to go much faster 
     * ```
     * game.player.vehicle.friction_modifier = 0.5
     * ```
     *
     */
    friction_modifier: number

    /**
     * @remarks
     * Applies to subclasses: Ghost
     *
     */
    readonly ghost_localised_description: LocalisedString

    /**
     * Localised name of the entity or tile contained in this ghost.
     * @remarks
     * Applies to subclasses: Ghost
     *
     */
    readonly ghost_localised_name: LocalisedString

    /**
     * Name of the entity or tile contained in this ghost
     * @remarks
     * Applies to subclasses: Ghost
     *
     */
    readonly ghost_name: string

    /**
     * The prototype of the entity or tile contained in this ghost.
     * @remarks
     * Applies to subclasses: Ghost
     *
     */
    readonly ghost_prototype: LuaEntityPrototype | LuaTilePrototype

    /**
     * The prototype type of the entity or tile contained in this ghost.
     * @remarks
     * Applies to subclasses: Ghost
     *
     */
    readonly ghost_type: string

    /**
     * The unit number of the entity contained in this ghost or nil if the entity doesn't have one.
     * @remarks
     * Applies to subclasses: EntityGhost
     *
     */
    readonly ghost_unit_number: number

    /**
     * The graphics variation for this entity or `nil` if this entity doesn't use graphics variations.
     */
    graphics_variation: number

    /**
     * The equipment grid or `nil` if this entity doesn't have an equipment grid.
     */
    readonly grid: LuaEquipmentGrid

    /**
     * The current health of the entity, or `nil` if it doesn't have health. Health is automatically clamped to be between `0` and max health (inclusive). Entities with a health of `0` can not be attacked.
     * @remarks
     * To get the maximum possible health of this entity, see {@link LuaEntityPrototype::max_health | LuaEntityPrototype::max_health} on its prototype.
     *
     */
    health: number

    /**
     * The item stack currently held in an inserter's hand.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly held_stack: LuaItemStack

    /**
     * Current position of the inserter's "hand".
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly held_stack_position: Position

    /**
     * The blink interval of this highlight box entity. 0 indicates no blink.
     * @remarks
     * Applies to subclasses: HighlightBox
     *
     */
    highlight_box_blink_interval: number

    /**
     * The hightlight box type of this highlight box entity.
     * @remarks
     * Applies to subclasses: HighlightBox
     *
     */
    highlight_box_type: string

    /**
     * The filters for this infinity container.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     */
    infinity_container_filters: InfinityInventoryFilter[]

    /**
     * Count of initial resource units contained.
     * @remarks
     * If this is not an infinite resource reading will give `nil` and writing will give an error.
     * Applies to subclasses: ResourceEntity
     *
     */
    initial_amount: number

    /**
     * The filter mode for this filter inserter: "whitelist", "blacklist", or `nil` if this inserter doesn't use filters.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    inserter_filter_mode: string

    /**
     * Sets the stack size limit on this inserter. If the stack size is > than the force stack size limit the value is ignored.
     * @remarks
     * Set to 0 to reset.
     *
     */
    inserter_stack_size_override: number

    /**
     * If this entity is EntityWithForce
     */
    readonly is_entity_with_force: boolean

    /**
     * If this entity is EntityWithHealth
     */
    readonly is_entity_with_health: boolean

    /**
     * If this entity is EntityWithOwner
     */
    readonly is_entity_with_owner: boolean

    /**
     * Items this ghost will request when revived or items this item request proxy is requesting. Result is a dictionary mapping each item prototype name to the required count.
     */
    item_requests: {[key: string]: number}

    /**
     * The number of units killed by this turret, artillery turret, or artillery wagon.
     * @remarks
     * Applies to subclasses: Turret
     *
     */
    kills: number

    /**
     * The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. Can be `nil` if the last user is not part of the save anymore. Mods can overwrite it if desired.
     * @remarks
     * Applies to subclasses: EntityWithOwner
     *
     */
    last_user: LuaPlayer

    /**
     * The link ID this linked container is using.
     */
    link_id: number

    /**
     * Neighbour to which this linked belt is connected to. Returns nil if not connected.
     * @remarks
     * Can also be used on entity ghost if it contains linked-belt
     * May return entity ghost which contains linked belt to which connection is made
     * Applies to subclasses: LinkedBelt
     *
     */
    readonly linked_belt_neighbour: LuaEntity

    /**
     * Type of linked belt: it is either `"input"` or `"output"`. Changing type will also flip direction so the belt is out of the same side
     * @remarks
     * Can only be changed when linked belt is disconnected (has no neighbour set)
     * Can also be used on entity ghost if it contains linked-belt
     * Applies to subclasses: LinkedBelt
     *
     */
    linked_belt_type: string

    /**
     * The container entity this loader is pointing at/pulling from depending on the {@link LuaEntity::loader_type | LuaEntity::loader_type}.
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly loader_container: LuaEntity

    /**
     * `"input"` or `"output"`, depending on whether this loader puts to or gets from a container.
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    loader_type: string

    readonly localised_description: LocalisedString

    /**
     * Localised name of the entity.
     */
    readonly localised_name: LocalisedString

    /**
     * The logistic cell this entity is a part of. Will be `nil` if this entity is not a part of any logistic cell.
     */
    readonly logistic_cell: LuaLogisticCell

    /**
     * The logistic network this entity is a part of.
     */
    logistic_network: LuaLogisticNetwork

    /**
     * @remarks
     * Not minable entities can still be destroyed.
     * Entities that are not minable naturally (like smoke, character, enemy units etc) can't be set to minable.
     *
     */
    minable: boolean

    /**
     * The mining progress for this mining drill or `nil` if this isn't a mining drill. Is a number in range [0, mining_target.prototype.mineable_properties.mining_time]
     */
    mining_progress: number

    /**
     * The mining target or `nil` if none
     * @remarks
     * Applies to subclasses: MiningDrill
     *
     */
    readonly mining_target: LuaEntity

    /**
     * Returns true if this unit is moving.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly moving: boolean

    /**
     * Name of the entity prototype. E.g. "inserter" or "filter-inserter".
     */
    readonly name: string

    /**
     * The current total neighbour bonus of this reactor.
     * @remarks
     * Applies to subclasses: Reactor
     *
     */
    readonly neighbour_bonus: number

    /**
     * - When called on an electric pole, this is a dictionary of all connections, indexed by the strings `"copper"`, `"red"`, and `"green"`.
     * - When called on a pipe-connectable entity, this is an array of entity arrays of all entities a given fluidbox is connected to.
     * - When called on an underground transport belt, this is the other end of the underground belt connection, or `nil` if none.
     * - When called on a wall-connectable entity or reactor, this is a dictionary of all connections indexed by the connection direction "north", "south", "east", and "west".
     */
    readonly neighbours: {[key: string]: LuaEntity[]} | Array<LuaEntity[]> | LuaEntity

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Player can't open gui of this entity and he can't quick insert/input stuff in to the entity when it is not operable.
     */
    operable: boolean

    /**
     * The smooth orientation of this entity, if it supports orientation.
     */
    orientation: RealOrientation

    /**
     * @remarks
     * Applies to subclasses: ProgrammableSpeaker
     *
     */
    parameters: ProgrammableSpeakerParameters

    /**
     * Where the inserter will pick up items from.
     * @remarks
     * Inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the pickup position.
     * Applies to subclasses: Inserter
     *
     */
    pickup_position: Position

    /**
     * The entity this inserter will attempt to pick up items from, or `nil` if there is no such entity. If there are multiple possible entities at the pick-up point, writing to this attribute allows a mod to choose which one to pick up items from. The entity needs to collide with the tile box under the pick-up position.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    pickup_target: LuaEntity

    /**
     * The player connected to this character or `nil` if none.
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly player: LuaPlayer

    /**
     * The pollution bonus of this entity.
     */
    readonly pollution_bonus: number

    /**
     * The power production specific to the ElectricEnergyInterface entity type.
     * @remarks
     * Applies to subclasses: ElectricEnergyInterface
     *
     */
    power_production: number

    /**
     * The state of this power switch.
     */
    power_switch_state: boolean

    /**
     * The power usage specific to the ElectricEnergyInterface entity type.
     * @remarks
     * Applies to subclasses: ElectricEnergyInterface
     *
     */
    power_usage: number

    /**
     * The previous recipe this furnace was using or nil if the furnace had no previous recipe.
     * @remarks
     * Applies to subclasses: Furnace
     *
     */
    readonly previous_recipe: LuaRecipe

    /**
     * The productivity bonus of this entity.
     * @remarks
     * This includes force based bonuses as well as beacon/module bonuses.
     *
     */
    readonly productivity_bonus: number

    /**
     * The number of products this machine finished crafting in its lifetime.
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    products_finished: number

    /**
     * The entity prototype of this entity.
     */
    readonly prototype: LuaEntityPrototype

    /**
     * The target entity for this item-request-proxy or `nil`
     */
    readonly proxy_target: LuaEntity

    /**
     * The rail target of this pump or `nil`.
     * @remarks
     * Applies to subclasses: Pump
     *
     */
    readonly pump_rail_target: LuaEntity

    /**
     * When locked; the recipe in this assembling machine can't be changed by the player.
     * @remarks
     * Applies to subclasses: AssemblingMachine
     *
     */
    recipe_locked: boolean

    /**
     * The relative orientation of the vehicle turret, artillery turret, artillery wagon or `nil` if this entity isn't a vehicle with a vehicle turret or artillery turret/wagon.
     * @remarks
     * Writing does nothing if the vehicle doesn't have a turret.
     *
     */
    relative_turret_orientation: RealOrientation

    /**
     * If items not included in this infinity container filters should be removed from the container.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     */
    remove_unfiltered_items: boolean

    /**
     * The player that this `simple-entity-with-owner`, `simple-entity-with-force`, `flying-text`, or `highlight-box` is visible to. `nil` means it is rendered for every player.
     */
    render_player: LuaPlayer

    /**
     * The forces that this `simple-entity-with-owner`, `simple-entity-with-force`, or `flying-text` is visible to. `nil` or an empty array means it is rendered for every force.
     * @remarks
     * Reading will always give an array of {@link LuaForce | LuaForce}
     *
     */
    render_to_forces: ForceIdentification[]

    /**
     * Whether this requester chest is set to also request from buffer chests.
     * @remarks
     * Useable only on entities that have requester slots.
     *
     */
    request_from_buffers: boolean

    /**
     * The index of the configured request with the highest index for this entity. This means 0 if no requests are set and e.g. 20 if the 20th request slot is configured.
     */
    readonly request_slot_count: number

    /**
     * Number of rocket parts in the silo.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    rocket_parts: number

    /**
     * When entity is not to be rotatable (inserter, transport belt etc), it can't be rotated by player using the R key.
     * @remarks
     * Entities that are not rotatable naturally (like chest or furnace) can't be set to be rotatable.
     *
     */
    rotatable: boolean

    /**
     * The secondary bounding box of this entity or `nil` if it doesn't have one.
     */
    readonly secondary_bounding_box: BoundingBox

    /**
     * The secondary selection box of this entity or `nil` if it doesn't have one.
     */
    readonly secondary_selection_box: BoundingBox

    /**
     * Index of the currently selected weapon slot of this character, car, or spidertron, or `nil` if the car/spidertron doesn't have guns.
     * @remarks
     * Applies to subclasses: Character,Car
     *
     */
    selected_gun_index: number

    /**
     * {@link LuaEntityPrototype::selection_box | LuaEntityPrototype::selection_box} around entity's given position and respecting the current entity orientation.
     */
    readonly selection_box: BoundingBox

    /**
     * The shooting target for this turret or `nil`.
     */
    shooting_target: LuaEntity

    /**
     * The state of this rail signal.
     * @remarks
     * Applies to subclasses: RailSignal,RailChainSignal
     *
     */
    readonly signal_state: defines.signal_state

    /**
     * The spawner associated with this unit entity or `nil` if the unit has no associated spawner.
     */
    readonly spawner: LuaEntity

    /**
     * The current speed of this car in tiles per tick, rolling stock, projectile or spider vehicle, or current max speed of the unit. Only the speed of units, cars, and projectiles are writable.
     */
    speed: number

    /**
     * The speed bonus of this entity.
     * @remarks
     * This includes force based bonuses as well as beacon/module bonuses.
     *
     */
    readonly speed_bonus: number

    /**
     * The filter for this splitter or `nil` if no filter is set.
     * @remarks
     * Applies to subclasses: Splitter
     *
     */
    splitter_filter: LuaItemPrototype

    /**
     * The input priority for this splitter : "left", "none", or "right".
     * @remarks
     * Applies to subclasses: Splitter
     *
     */
    splitter_input_priority: string

    /**
     * The output priority for this splitter : "left", "none", or "right".
     * @remarks
     * Applies to subclasses: Splitter
     *
     */
    splitter_output_priority: string

    /**
     * @remarks
     * Applies to subclasses: ItemEntity
     *
     */
    readonly stack: LuaItemStack

    /**
     * The status of this entity or `nil` if no status.
     */
    readonly status: defines.entity_status

    /**
     * The entity this sticker is sticked to.
     */
    readonly sticked_to: LuaEntity

    /**
     * The sticker entities attached to this entity or `nil` if none.
     */
    readonly stickers: LuaEntity[]

    /**
     * The storage filter for this logistic storage container.
     */
    storage_filter: LuaItemPrototype

    /**
     * Whether the entity has direction. When it is false for this entity, it will always return north direction when asked for.
     */
    readonly supports_direction: boolean

    /**
     * The tags associated with this entity ghost or `nil` if not an entity ghost.
     */
    tags: Tags

    /**
     * The temperature of this entities heat energy source if this entity uses a heat energy source or `nil`.
     */
    temperature: number

    /**
     * The text of this flying-text entity.
     * @remarks
     * Applies to subclasses: FlyingText
     *
     */
    text: LocalisedString

    /**
     * The last tick this character entity was attacked.
     * @remarks
     * Applies to subclasses: Character
     *
     */
    tick_of_last_attack: number

    /**
     * The last tick this character entity was damaged.
     * @remarks
     * Applies to subclasses: Character
     *
     */
    tick_of_last_damage: number

    /**
     * The ticks left before a ghost, combat robot, highlight box or smoke with trigger is destroyed.
     * - for ghosts set to uint32 max (4,294,967,295) to never expire.
     * - for ghosts Cannot be set higher than {@link LuaForce::ghost_time_to_live | LuaForce::ghost_time_to_live} of the entity's force.
     */
    time_to_live: number

    /**
     * The ticks until the next trigger effect of this smoke-with-trigger.
     * @remarks
     * Applies to subclasses: SmokeWithTrigger
     *
     */
    time_to_next_effect: number

    /**
     * The timeout that's left on this landmine in ticks. It describes the time between the landmine being placed and it being armed.
     * @remarks
     * Applies to subclasses: LandMine
     *
     */
    timeout: number

    /**
     * Will this entity be picked up automatically when the player walks over it?
     * @remarks
     * Applies to subclasses: ItemEntity
     *
     */
    to_be_looted: boolean

    /**
     * The torso orientation of this spider vehicle.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    torso_orientation: RealOrientation

    /**
     * The train this rolling stock belongs to or nil if not rolling stock.
     */
    readonly train: LuaTrain

    /**
     * Amount of trains related to this particular train stop. Includes train stopped at this train stop (until it finds a path to next target) and trains having this train stop as goal or waypoint. Writing nil will disable the limit (will set a maximum possible value).
     * @remarks
     * Train may be included multiple times when braking distance covers this train stop multiple times
     * Value may be read even when train stop has no control behavior
     * Applies to subclasses: TrainStop
     *
     */
    readonly trains_count: number

    /**
     * The number of trains in this rail block for this rail entity.
     * @remarks
     * Applies to subclasses: Rail
     *
     */
    readonly trains_in_block: number

    /**
     * Amount of trains above which no new trains will be sent to this train stop.
     * @remarks
     * When a train stop has a control behavior with wire connected and set_trains_limit enabled, this value will be overwritten by it
     * Applies to subclasses: TrainStop
     *
     */
    trains_limit: number

    /**
     * Index of the tree color.
     */
    tree_color_index: number

    /**
     * Maximum index of the tree colors.
     */
    readonly tree_color_index_max: number

    /**
     * Index of the tree gray stage
     */
    tree_gray_stage_index: number

    /**
     * Maximum index of the tree gray stages.
     */
    readonly tree_gray_stage_index_max: number

    /**
     * Index of the tree stage.
     */
    tree_stage_index: number

    /**
     * Maximum index of the tree stages.
     */
    readonly tree_stage_index_max: number

    /**
     * The entity prototype type of this entity.
     */
    readonly type: string

    /**
     * The unit group this unit is a member of, or `nil` if none.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly unit_group: LuaUnitGroup

    /**
     * The unit number or nil if the entity doesn't have one. This is universally unique for every entity that has one, for the lifetime of a whole game.
     */
    readonly unit_number: number

    /**
     * The units associated with this spawner entity.
     */
    readonly units: LuaEntity[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Read when this spidertron auto-targets enemies
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    vehicle_automatic_targeting_parameters: VehicleAutomaticTargetingParameters

}

/**
 * Prototype of an entity.
 */
interface LuaEntityPrototype {
    /**
     * Gets the base size of the given inventory on this entity or `nil` if the given inventory doesn't exist.
     */
    get_inventory_size(this: void,
        index: defines.inventory): number

    /**
     * Test whether this entity prototype has a certain flag set.
     * @param flag - The flag to test. See [EntityPrototypeFlags](EntityPrototypeFlags) for a list of flags.
     * @returns `true` if this prototype has the given flag set.
     */
    has_flag(this: void,
        flag: string): boolean

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Entities this entity can be pasted onto in addition to the normal allowed ones.
     */
    readonly additional_pastable_entities: LuaEntityPrototype[]

    /**
     * The bounding box that specifies which tiles adjacent to the offshore pump should be checked.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly adjacent_tile_collision_box: BoundingBox

    /**
     * Tiles adjacent to the offshore pump must not collide with this collision mask.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly adjacent_tile_collision_mask: CollisionMask

    /**
     * If this mask is not empty, tiles adjacent to the offshore pump must not collide with this collision mask.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly adjacent_tile_collision_test: CollisionMask

    /**
     * Whether this unit prototype is affected by tile walking speed modifiers or `nil`.
     */
    readonly affected_by_tiles: boolean

    /**
     * The air resistance of this rolling stock prototype or `nil` if not a rolling stock prototype.
     */
    readonly air_resistance: number

    /**
     * The alert icon shift of this entity prototype.
     */
    readonly alert_icon_shift: Vector

    /**
     * Does this turret prototype alert when attacking? or `nil` if not turret prototype.
     */
    readonly alert_when_attacking: boolean

    /**
     * Does this entity with health prototype alert when damaged? or `nil` if not entity with health prototype.
     */
    readonly alert_when_damaged: boolean

    /**
     * If this market allows access to all forces or just friendly ones.
     */
    readonly allow_access_to_all_forces: boolean

    /**
     * If this inserter allows burner leeching.
     */
    readonly allow_burner_leech: boolean

    /**
     * When false copy-paste is not allowed for this entity.
     */
    readonly allow_copy_paste: boolean

    /**
     * If this inserter allows custom pickup and drop vectors.
     */
    readonly allow_custom_vectors: boolean

    /**
     * If this vehicle allows passengers.
     */
    readonly allow_passengers: boolean

    /**
     * The allowed module effects for this entity or `nil`.
     */
    readonly allowed_effects: {[key: string]: boolean}

    /**
     * Whether the lamp is always on (except when out of power or turned off by the circuit network) or `nil`.
     */
    readonly always_on: boolean

    /**
     * The attack parameters for this entity or `nil` if the entity doesn't use attack parameters.
     */
    readonly attack_parameters: AttackParameters

    /**
     * The attack result of this entity if the entity has one, else `nil`.
     */
    readonly attack_result: TriggerItem[]

    /**
     * The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret or `nil`.
     */
    readonly automated_ammo_count: number

    /**
     * Autoplace specification for this entity prototype. `nil` if none.
     */
    readonly autoplace_specification: AutoplaceSpecification

    /**
     * The base productivity of this crafting machine, lab, or mining drill, or `nil`.
     */
    readonly base_productivity: number

    /**
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly belt_distance: number

    /**
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly belt_length: number

    /**
     * The speed of this transport belt or `nil` if this isn't a transport belt related prototype.
     */
    readonly belt_speed: number

    /**
     * The braking force of this vehicle prototype or `nil` if not a vehicle prototype.
     */
    readonly braking_force: number

    /**
     * The evolution requirement to build this entity as a base when expanding enemy bases.
     */
    readonly build_base_evolution_requirement: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly build_distance: number

    /**
     * The log2 of grid size of the building
     */
    readonly building_grid_bit_shift: number

    /**
     * The burner energy source prototype this entity uses or `nil`.
     */
    readonly burner_prototype: LuaBurnerPrototype

    readonly call_for_help_radius: number

    /**
     * Whether this unit prototype can open gates or `nil`.
     */
    readonly can_open_gates: boolean

    /**
     * The collision mask used only for collision test with tile directly at offshore pump position.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly center_collision_mask: CollisionMask

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly character_corpse: LuaEntityPrototype

    /**
     * The item prototype name used to destroy this cliff or `nil`.
     */
    readonly cliff_explosive_prototype: string

    /**
     * The bounding box used for collision checking.
     */
    readonly collision_box: BoundingBox

    /**
     * The collision masks this entity uses
     */
    readonly collision_mask: CollisionMask

    /**
     * Does this prototype collision mask collide with itself?
     */
    readonly collision_mask_collides_with_self: boolean

    /**
     * Does this prototype collision mask collide with tiles only?
     */
    readonly collision_mask_collides_with_tiles_only: boolean

    /**
     * Does this prototype collision mask consider tile transitions?
     */
    readonly collision_mask_considers_tile_transitions: boolean

    readonly collision_mask_with_flags: CollisionMaskWithFlags

    /**
     * The color of the prototype, or `nil` if the prototype doesn't have color.
     */
    readonly color: Color

    /**
     * The construction radius for this roboport prototype or `nil`.
     */
    readonly construction_radius: number

    /**
     * The energy consumption of this car prototype or `nil` if not a car prototype.
     */
    readonly consumption: number

    /**
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly container_distance: number

    /**
     * Corpses used when this entity is destroyed. It is a dictionary indexed by the corpse's prototype name.
     */
    readonly corpses: {[key: string]: LuaEntityPrototype}

    /**
     * If this simple-entity is counted as a rock for the deconstruction planner "trees and rocks only" filter.
     */
    readonly count_as_rock_for_filtered_deconstruction: boolean

    /**
     * The crafting categories this entity supports. Only meaningful when this is a crafting-machine or player entity type.
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
     *
     */
    readonly crafting_categories: {[key: string]: boolean}

    /**
     * The crafting speed of this crafting-machine or `nil`.
     */
    readonly crafting_speed: number

    /**
     * If this prototype will attempt to create a ghost of itself on death.
     * @remarks
     * If this is false then a ghost will never be made, if it's true a ghost may be made.
     *
     */
    readonly create_ghost_on_death: boolean

    /**
     * The trigger run when this entity is created or `nil`.
     */
    readonly created_effect: TriggerItem[]

    /**
     * The smoke trigger run when this entity is built or `nil`.
     */
    readonly created_smoke: { initial_height: number, max_radius?: number, offset_deviation: BoundingBox, offsets: Vector[], smoke_name: string, speed: Vector, speed_from_center: number, speed_from_center_deviation: number, speed_multiplier: number, speed_multiplier_deviation: number, starting_frame: number, starting_frame_deviation: number, starting_frame_speed: number, starting_frame_speed_deviation: number }

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly damage_hit_tint: Color

    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are off or `nil`.
     */
    readonly darkness_for_all_lamps_off: number

    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are on or `nil`.
     */
    readonly darkness_for_all_lamps_on: number

    /**
     * The hardcoded default collision mask (with flags) for this entity prototype type.
     */
    readonly default_collision_mask_with_flags: CollisionMaskWithFlags

    /**
     * The distraction cooldown of this unit prototype or `nil`.
     */
    readonly distraction_cooldown: number

    /**
     * The distribution effectivity for this beacon prototype or `nil` if not a beacon prototype.
     */
    readonly distribution_effectivity: number

    /**
     * The door opening speed for this rocket silo prototype or `nil`.
     */
    readonly door_opening_speed: number

    /**
     * Whether this logistics or construction robot renders its cargo when flying or `nil`.
     */
    readonly draw_cargo: boolean

    /**
     * The bounding box used for drawing the entity icon.
     */
    readonly drawing_box: BoundingBox

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly drop_item_distance: number

    /**
     * The effectivity of this car prototype, generator prototype or `nil`.
     */
    readonly effectivity: number

    /**
     * The electric energy source prototype this entity uses or `nil`.
     */
    readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype

    /**
     * Amount of pollution emissions per second this entity will create.
     */
    readonly emissions_per_second: number

    /**
     * The enemy map color used when charting this entity.
     */
    readonly enemy_map_color: Color

    /**
     * The energy used per hitpoint taken for this vehicle during collisions or `nil`.
     */
    readonly energy_per_hit_point: number

    /**
     * The energy consumed per tile moved for this flying robot or `nil`.
     */
    readonly energy_per_move: number

    /**
     * The energy consumed per tick for this flying robot or `nil`.
     */
    readonly energy_per_tick: number

    /**
     * The direct energy usage of this entity or `nil` if this entity doesn't have a direct energy usage.
     */
    readonly energy_usage: number

    /**
     * The engine starting speed for this rocket silo rocket prototype or `nil`.
     */
    readonly engine_starting_speed: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly enter_vehicle_distance: number

    /**
     * Does this explosion have a beam or `nil` if not an explosion prototype.
     */
    readonly explosion_beam: number

    /**
     * Does this explosion rotate or `nil` if not an explosion prototype.
     */
    readonly explosion_rotate: number

    /**
     * The group of mutually fast-replaceable entities. Possibly `nil`.
     */
    readonly fast_replaceable_group: string

    /**
     * The filter count of this inserter, loader, or logistic chest or `nil`. For logistic containers, `nil` means no limit.
     */
    readonly filter_count: number

    /**
     * The final attack result for projectiles `nil` if not a projectile
     */
    readonly final_attack_result: TriggerItem[]

    /**
     * The fixed recipe name for this assembling machine prototype or `nil`.
     */
    readonly fixed_recipe: string

    /**
     * The flags for this entity prototype.
     */
    readonly flags: EntityPrototypeFlags

    /**
     * The fluid this offshore pump produces or `nil`.
     */
    readonly fluid: LuaFluidPrototype

    /**
     * The fluid capacity of this entity or 0 if this entity doesn't support fluids.
     * @remarks
     * Crafting machines will report 0 due to their fluid capacity being what ever a given recipe needs.
     *
     */
    readonly fluid_capacity: number

    /**
     * The fluid energy source prototype this entity uses or `nil`.
     */
    readonly fluid_energy_source_prototype: LuaFluidEnergySourcePrototype

    /**
     * The fluid usage of this generator prototype or `nil`.
     */
    readonly fluid_usage_per_tick: number

    /**
     * The fluidbox prototypes for this entity.
     */
    readonly fluidbox_prototypes: LuaFluidBoxPrototype[]

    /**
     * The flying acceleration for this rocket silo rocket prototype or `nil`.
     */
    readonly flying_acceleration: number

    /**
     * The flying speed for this rocket silo rocket prototype or `nil`.
     */
    readonly flying_speed: number

    /**
     * The friction of this vehicle prototype or `nil` if not a vehicle prototype.
     */
    readonly friction_force: number

    /**
     * The friendly map color used when charting this entity.
     */
    readonly friendly_map_color: Color

    /**
     * The equipment grid prototype for this entity or `nil`.
     */
    readonly grid_prototype: LuaEquipmentGridPrototype

    /**
     * Group of this entity.
     */
    readonly group: LuaGroup

    /**
     * The guns this prototype uses or `nil`.
     */
    readonly guns: {[key: string]: LuaItemPrototype}

    /**
     * Whether this unit, car, or character prototype has belt immunity, `nil` if not car, unit, or character prototype.
     */
    readonly has_belt_immunity: boolean

    /**
     * Amount this entity can heal per tick.
     */
    readonly healing_per_tick: number

    /**
     * The heat energy source prototype this entity uses or `nil`.
     */
    readonly heat_energy_source_prototype: LuaHeatEnergySourcePrototype

    /**
     * Every time this infinite resource 'ticks' down it is reduced by this amount. `nil` when not a resource. Meaningless if this isn't an infinite type resource.
     */
    readonly infinite_depletion_resource_amount: number

    /**
     * Is this resource infinite? Will be `nil` when used on a non-resource.
     */
    readonly infinite_resource: boolean

    /**
     * The max number of ingredients this crafting-machine prototype supports or `nil` if this isn't a crafting-machine prototype.
     */
    readonly ingredient_count: number

    /**
     * True if this inserter chases items on belts for pickup or `nil`.
     */
    readonly inserter_chases_belt_items: boolean

    /**
     * The drop position for this inserter or `nil`.
     */
    readonly inserter_drop_position: Vector

    /**
     * The extension speed of this inserter or `nil`.
     */
    readonly inserter_extension_speed: number

    /**
     * The pickup position for this inserter or `nil`.
     */
    readonly inserter_pickup_position: Vector

    /**
     * The rotation speed of this inserter or `nil`.
     */
    readonly inserter_rotation_speed: number

    /**
     * Gets the current stack size bonus of this entity, returns nil if not an inserter.
     */
    readonly inserter_stack_size_bonus: number

    /**
     * The instruments for this programmable speaker or `nil`.
     */
    readonly instruments: ProgrammableSpeakerInstrument[]

    readonly is_building: boolean

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly item_pickup_distance: number

    /**
     * The item slot count of this constant combinator prototype or `nil`.
     */
    readonly item_slot_count: number

    /**
     * Items that, when placed, will produce this entity. It is an array of items, or `nil` if no items place this entity. Construction bots will always choose the first item in this list to build this entity.
     */
    readonly items_to_place_this: SimpleItemStack[]

    /**
     * The item prototype names that are the inputs of this lab prototype or `nil`.
     */
    readonly lab_inputs: string[]

    /**
     * The rocket launch delay for this rocket silo prototype or `nil`.
     */
    readonly launch_wait_time: number

    /**
     * The light blinking speed for this rocket silo prototype or `nil`.
     */
    readonly light_blinking_speed: number

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * The logistic mode of this logistic container or `nil` if this isn't a logistic container prototype. One of `"requester"`, `"active-provider"`, `"passive-provider"`, `"buffer"`, `"storage"`, `"none"`.
     */
    readonly logistic_mode: string

    /**
     * The logistic radius for this roboport prototype or `nil`.
     */
    readonly logistic_radius: number

    /**
     * Loot that will be dropped when this entity is killed. `nil` if there is no loot.
     */
    readonly loot: Loot[]

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly loot_pickup_distance: number

    /**
     * The map color used when charting this entity if a friendly or enemy color isn't defined or `nil`.
     */
    readonly map_color: Color

    /**
     * The bounding box used for map generator collision checking.
     */
    readonly map_generator_bounding_box: BoundingBox

    /**
     * The maximum circuit wire distance for this entity. 0 when the entity doesn't support circuit wires.
     */
    readonly max_circuit_wire_distance: number

    /**
     * Count of enemies this spawner can sustain.
     */
    readonly max_count_of_owned_units: number

    /**
     * The maximum darkness at which this unit spawner can spawn entities.
     */
    readonly max_darkness_to_spawn: number

    /**
     * The radius of the area constantly revealed by this radar, in chunks.
     */
    readonly max_distance_of_nearby_sector_revealed: number

    /**
     * The radius of the area this radar can chart, in chunks.
     */
    readonly max_distance_of_sector_revealed: number

    /**
     * The max energy for this flying robot or `nil`.
     */
    readonly max_energy: number

    /**
     * The theoretical maximum energy production for this this entity.
     */
    readonly max_energy_production: number

    /**
     * The theoretical maximum energy usage for this entity.
     */
    readonly max_energy_usage: number

    /**
     * How many friendly units are required within the spawning_radius of this spawner for it to stop producing more units.
     */
    readonly max_friends_around_to_spawn: number

    /**
     * Max health of this entity. Will be `0` if this is not an entity with health.
     */
    readonly max_health: number

    /**
     * The max payload size of this logistics or construction robot or `nil`.
     */
    readonly max_payload_size: number

    /**
     * The maximum polyphony for this programmable speaker or `nil`.
     */
    readonly max_polyphony: number

    /**
     * The maximum pursue distance of this unit prototype or `nil`.
     */
    readonly max_pursue_distance: number

    /**
     * The max speed of this projectile prototype or flying robot prototype or `nil`.
     */
    readonly max_speed: number

    /**
     * The maximum energy for this flying robot above which it won't try to recharge when stationing or `nil`.
     */
    readonly max_to_charge: number

    /**
     * The max underground distance for underground belts and underground pipes or `nil` if this isn't one of those prototypes.
     */
    readonly max_underground_distance: number

    /**
     * The maximum wire distance for this entity. 0 when the entity doesn't support wires.
     */
    readonly max_wire_distance: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly maximum_corner_sliding_distance: number

    /**
     * The maximum fluid temperature of this generator prototype or `nil`.
     */
    readonly maximum_temperature: number

    /**
     * The minimum darkness at which this unit spawner can spawn entities.
     */
    readonly min_darkness_to_spawn: number

    /**
     * The minimum pursue time of this unit prototype or `nil`.
     */
    readonly min_pursue_time: number

    /**
     * The minimum energy for this flying robot before it tries to recharge or `nil`.
     */
    readonly min_to_charge: number

    /**
     * Whether this entity is minable and what can be obtained by mining it.
     */
    readonly mineable_properties: { fluid_amount?: number, minable: boolean, mining_particle?: string, mining_time: number, mining_trigger?: TriggerItem[], products?: Product[], required_fluid?: string }

    /**
     * Minimum amount of this resource. Will be `nil` when used on a non-resource.
     */
    readonly minimum_resource_amount: number

    /**
     * The mining radius of this mining drill prototype or `nil` if this isn't a mining drill prototype.
     */
    readonly mining_drill_radius: number

    /**
     * The mining speed of this mining drill/character prototype or `nil`.
     */
    readonly mining_speed: number

    /**
     * The module inventory size or `nil` if this entity doesn't support modules.
     */
    readonly module_inventory_size: number

    /**
     * Whether this unit prototype can move while shooting or `nil`.
     */
    readonly move_while_shooting: boolean

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * @remarks
     * Applies to subclasses: Reactor
     *
     */
    readonly neighbour_bonus: number

    /**
     * Controls how much a reactor extends when connected to other reactors.
     * @remarks
     * Applies to subclasses: Reactor
     *
     */
    readonly neighbour_collision_increase: number

    /**
     * The next upgrade for this entity or `nil`.
     */
    readonly next_upgrade: LuaEntityPrototype

    /**
     * The normal amount for this resource. `nil` when not a resource.
     */
    readonly normal_resource_amount: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution. `nil` when prototype is not a unit prototype.
     */
    readonly pollution_to_join_attack: number

    /**
     * The pumping speed of this offshore pump, normal pump, or `nil`.
     */
    readonly pumping_speed: number

    /**
     * The radar range of this unit prototype or `nil`.
     */
    readonly radar_range: number

    /**
     * The radius of this entity prototype.
     */
    readonly radius: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly reach_distance: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly reach_resource_distance: number

    /**
     * @remarks
     * Applies to subclasses: TransportBelt
     *
     */
    readonly related_underground_belt: LuaEntityPrototype

    /**
     * The remains left behind when this entity is mined.
     */
    readonly remains_when_mined: LuaEntityPrototype[]

    readonly remove_decoratives: string

    /**
     * Repair-speed modifier for this entity. Actual repair speed will be `tool_repair_speed * entity_repair_speed_modifier`. May be `nil`.
     */
    readonly repair_speed_modifier: number

    /**
     * The base researching speed of this lab prototype or `nil`.
     */
    readonly researching_speed: number

    /**
     * List of resistances towards each damage type. It is a dictionary indexed by damage type names (see `data/base/prototypes/damage-type.lua`).
     */
    readonly resistances: {[key: string]: Resistance}

    /**
     * The resource categories this character or mining drill supports, or `nil` if not a character or mining dill.
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow the dictionary type for easy lookup.
     *
     */
    readonly resource_categories: {[key: string]: boolean}

    /**
     * Name of the category of this resource or `nil` when not a resource.
     * @remarks
     * During data stage this property is named "category".
     *
     */
    readonly resource_category: string

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly respawn_time: number

    /**
     * The result units and spawn points with weight and evolution factor for a biter spawner entity.
     */
    readonly result_units: UnitSpawnDefinition[]

    /**
     * The rising speed for this rocket silo rocket prototype or `nil`.
     */
    readonly rising_speed: number

    /**
     * The rocket entity prototype associated with this rocket silo prototype or `nil`.
     */
    readonly rocket_entity_prototype: LuaEntityPrototype

    /**
     * The rocket parts required for this rocket silo prototype or `nil`.
     */
    readonly rocket_parts_required: number

    /**
     * The rocket rising delay for this rocket silo prototype or `nil`.
     */
    readonly rocket_rising_delay: number

    /**
     * The rotation speed of this car prototype or `nil` if not a car prototype.
     */
    readonly rotation_speed: number

    /**
     * Gets the current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly running_speed: number

    /**
     * The secondary bounding box used for collision checking, or `nil` if it doesn't have one. This is only used in rails and rail remnants.
     */
    readonly secondary_collision_box: BoundingBox

    /**
     * Is this entity selectable?
     */
    readonly selectable_in_game: boolean

    /**
     * The bounding box used for drawing selection.
     */
    readonly selection_box: BoundingBox

    /**
     * The selection priority of this entity - a value between 0 and 255
     */
    readonly selection_priority: number

    /**
     * The cursor size used when shooting at this entity.
     */
    readonly shooting_cursor_size: number

    /**
     * The spawning cooldown for this enemy spawner prototype or `nil`.
     */
    readonly spawn_cooldown: { max: number, min: number }

    /**
     * How far from the spawner can the units be spawned.
     */
    readonly spawning_radius: number

    /**
     * What spaces should be between the spawned units.
     */
    readonly spawning_spacing: number

    /**
     * The spawning time modifier of this unit prototype or `nil`.
     */
    readonly spawning_time_modifier: number

    /**
     * The default speed of this flying robot, rolling stock or unit, `nil` if not one of these.
     * @remarks
     * For rolling stocks, this is their `max_speed`.
     *
     */
    readonly speed: number

    /**
     * The speed multiplier when this flying robot is out of energy or `nil`.
     */
    readonly speed_multiplier_when_out_of_energy: number

    /**
     * If this inserter is a stack-type.
     */
    readonly stack: boolean

    /**
     * The bounding box used to attach sticker type entities.
     */
    readonly sticker_box: BoundingBox

    /**
     * Subgroup of this entity.
     */
    readonly subgroup: LuaGroup

    /**
     * The supply area of this electric pole, beacon, or `nil` if this is neither.
     */
    readonly supply_area_distance: number

    /**
     * If this entity prototype could possibly ever be rotated.
     */
    readonly supports_direction: boolean

    /**
     * If this car prototype uses tank controls to drive or `nil` if this is not a car prototype.
     */
    readonly tank_driving: boolean

    /**
     * The target temperature of this boiler prototype or `nil`.
     */
    readonly target_temperature: number

    /**
     * The terrain friction modifier for this vehicle.
     */
    readonly terrain_friction_modifier: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly ticks_to_keep_aiming_direction: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly ticks_to_keep_gun: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly ticks_to_stay_in_combat: number

    /**
     * The time to live for this prototype or `0` if prototype doesn't have time_to_live or time_before_removed.
     */
    readonly time_to_live: number

    /**
     * The time it takes this land mine to arm.
     */
    readonly timeout: number

    /**
     * If it is a tree, return the number of colors it supports. `nil` otherwise.
     */
    readonly tree_color_count: number

    /**
     * The range of this turret or `nil` if this isn't a turret related prototype.
     */
    readonly turret_range: number

    /**
     * The turret rotation speed of this car prototype or `nil` if not a car prototype.
     */
    readonly turret_rotation_speed: number

    /**
     * Type of this prototype.
     */
    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The vision distance of this unit prototype or `nil`.
     */
    readonly vision_distance: number

    /**
     * The void energy source prototype this entity uses or `nil`.
     */
    readonly void_energy_source_prototype: LuaVoidEnergySourcePrototype

    /**
     * The weight of this vehicle prototype or `nil` if not a vehicle prototype.
     */
    readonly weight: number

}

/**
 * An item in a {@link LuaEquipmentGrid | LuaEquipmentGrid}, for example one's power armor.
 * @remarks
 * An equipment reference becomes invalid once the equipment is removed or the equipment grid it resides in is destroyed.
 *
 */
interface LuaEquipment {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The burner energy source for this equipment or `nil` if there isn't one.
     */
    readonly burner: LuaBurner

    /**
     * Current available energy.
     */
    energy: number

    /**
     * Energy generated per tick.
     */
    readonly generator_power: number

    /**
     * Maximum amount of energy that can be stored in this equipment.
     */
    readonly max_energy: number

    /**
     * Maximum shield value.
     */
    readonly max_shield: number

    /**
     * Maximum solar power generated.
     */
    readonly max_solar_power: number

    /**
     * Movement speed bonus.
     */
    readonly movement_bonus: number

    /**
     * Name of this equipment.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Position of this equipment in the equipment grid.
     */
    readonly position: Position

    readonly prototype: LuaEquipmentPrototype

    /**
     * Shape of this equipment.
     */
    readonly shape: { height: number, width: number }

    /**
     * Current shield value of the equipment.
     * @remarks
     * Can't be set higher than {@link LuaEquipment::max_shield | LuaEquipment::max_shield}.
     *
     */
    shield: number

    /**
     * Type of this equipment.
     */
    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of an equipment category.
 */
interface LuaEquipmentCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * An equipment grid is for example the inside of a power armor.
 */
interface LuaEquipmentGrid {
    /**
     * Check whether moving an equipment would succeed.
     * @param table.equipment - The equipment to move
     * @param table.position - Where to put it
     */
    can_move(this: void,
        table: {
            equipment: LuaEquipment,
            position: Position
        }): boolean

    /**
     * Clear all equipment from the grid, removing it without actually returning it.
     * @param by_player - If provided, the action is done 'as' this player and [on_player_removed_equipment](on_player_removed_equipment) is triggered.
     */
    clear(this: void,
        by_player?: PlayerIdentification): void

    /**
     * Find equipment in the Equipment Grid based off a position.
     * @param position - The position
     * @returns The found equipment, or `nil` if equipment could not be found at the given position.
     */
    get(this: void,
        position: Position): LuaEquipment | null

    /**
     * Get counts of all equipment in this grid.
     * @returns The counts, indexed by equipment names.
     */
    get_contents(this: void): {[key: string]: number}

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Move an equipment within this grid.
     * @param table.equipment - The equipment to move
     * @param table.position - Where to put it
     * @returns `true` if the equipment was successfully moved.
     */
    move(this: void,
        table: {
            equipment: LuaEquipment,
            position: Position
        }): boolean

    /**
     * Insert an equipment into the grid.
     * @param table.by_player - If provided the action is done 'as' this player and [on_player_placed_equipment](on_player_placed_equipment) is triggered.
     * @param table.name - Equipment prototype name
     * @param table.position - Grid position to put the equipment in.
     * @returns The newly-added equipment, or `nil` if the equipment could not be added.
     */
    put(this: void,
        table: {
            name: string,
            position?: Position,
            by_player?: PlayerIdentification
        }): LuaEquipment | null

    /**
     * Remove an equipment from the grid.
     * @param table.by_player - If provided the action is done 'as' this player and [on_player_removed_equipment](on_player_removed_equipment) is triggered.
     * @param table.equipment - Take this exact equipment.
     * @param table.position - Take the equipment that contains this position in the grid.
     * @returns The removed equipment, or `nil` if no equipment was removed.
     */
    take(this: void,
        table: {
            position?: Position,
            equipment?: LuaEquipment,
            by_player?: PlayerIdentification
        }): SimpleItemStack | null

    /**
     * Remove all equipment from the grid.
     * @param by_player - If provided, the action is done 'as' this player and [on_player_removed_equipment](on_player_removed_equipment) is triggered.
     * @returns Count of each removed equipment, indexed by their prototype names.
     */
    take_all(this: void,
        by_player?: PlayerIdentification): {[key: string]: number}

    /**
     * The total energy stored in all batteries in the equipment grid.
     */
    readonly available_in_batteries: number

    /**
     * Total energy storage capacity of all batteries in the equipment grid.
     */
    readonly battery_capacity: number

    /**
     * All the equipment in this grid.
     */
    readonly equipment: LuaEquipment[]

    /**
     * Total energy per tick generated by the equipment inside this grid.
     */
    readonly generator_energy: number

    /**
     * Height of the equipment grid.
     */
    readonly height: number

    /**
     * True if this movement bonus equipment is turned off, otherwise false.
     */
    inhibit_movement_bonus: boolean

    /**
     * The maximum amount of shields this equipment grid has.
     */
    readonly max_shield: number

    /**
     * Maximum energy per tick that can be created by any solar panels in the equipment grid. Actual generated energy varies depending on the daylight levels.
     */
    readonly max_solar_energy: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly prototype: LuaEquipmentGridPrototype

    /**
     * The amount of shields this equipment grid has.
     */
    readonly shield: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Width of the equipment grid.
     */
    readonly width: number

}

/**
 * Prototype of an equipment grid.
 */
interface LuaEquipmentGridPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Equipment category names for the categories that may be inserted into this equipment grid. The grid will accept any equipment that has at least one category in this list.
     * @see {@link LuaEquipmentPrototype::equipment_categories}
     */
    readonly equipment_categories: string[]

    readonly height: number

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * If the player can move equipment into or out of this grid.
     */
    readonly locked: boolean

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    readonly width: number

}

/**
 * Prototype of a modular equipment.
 */
interface LuaEquipmentPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The equipment attack parameters or `nil`.
     */
    readonly attack_parameters: AttackParameters

    /**
     * Is this active defense equipment automatic. Returns false if not active defense equipment.
     */
    readonly automatic: boolean

    /**
     * The background color of this equipment prototype.
     */
    readonly background_color: Color

    /**
     * The burner energy source prototype this equipment uses or `nil`.
     */
    readonly burner_prototype: LuaBurnerPrototype

    /**
     * The electric energy source prototype this equipment uses or `nil`.
     */
    readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype

    readonly energy_consumption: number

    /**
     * The energy per shield point restored. 0 for non-shield equipment.
     */
    readonly energy_per_shield: number

    /**
     * The max power generated by this equipment.
     */
    readonly energy_production: number

    /**
     * The energy source prototype for the equipment.
     */
    readonly energy_source: LuaElectricEnergySourcePrototype

    /**
     * Category names for this equipment. These categories will be used to determine whether this equipment is allowed in a particular equipment grid.
     * @see {@link LuaEquipmentGridPrototype::equipment_categories}
     */
    readonly equipment_categories: string[]

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * The logistic parameters for this roboport equipment.
     * @remarks
     * Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys instead of an array.
     *
     */
    readonly logistic_parameters: { charge_approach_distance: number, charging_distance: number, charging_energy: number, charging_station_count: number, charging_station_shift: Vector, charging_threshold_distance: number, construction_radius: number, logistic_radius: number, logistics_connection_distance: number, robot_limit: number, robot_vertical_acceleration: number, robots_shrink_when_entering_and_exiting: boolean, spawn_and_station_height: number, spawn_and_station_shadow_height_offset: number, stationing_offset: Vector }

    /**
     * @remarks
     * Applies to subclasses: MovementBonusEquipmentPrototype
     *
     */
    readonly movement_bonus: number

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Shape of this equipment prototype.
     */
    readonly shape: { height: number, points?: EquipmentPoint[], width: number }

    /**
     * The shield value of this equipment. 0 for non-shield equipment.
     */
    readonly shield: number

    /**
     * The result item when taking this equipment out of an equipment grid. `nil` if there is no result item.
     */
    readonly take_result: LuaItemPrototype

    /**
     * Type of this equipment prototype.
     */
    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Encapsulates statistic data for different parts of the game. In the context of flow statistics, `input` and `output` describe on which side of the associated GUI the values are shown. Input values are shown on the left side, output values on the right side.
 * Examples:
 * - The item production GUI shows "consumption" on the right, thus `output` describes the item consumption numbers. The same goes for fluid consumption.
 * - The kills gui shows "losses" on the right, so `output` describes how many of the force's entities were killed by enemies.
 * - The electric network GUI shows "power consumption" on the left side, so in this case `input` describes the power consumption numbers.
 */
interface LuaFlowStatistics {
    /**
     * Reset all the statistics data to 0.
     */
    clear(this: void): void

    /**
     * Gets the flow count value for the given time frame.
     * @param table.count - If true, the count is returned instead of the per-time-frame value.
     * @param table.input - Read the input values or the output values
     * @param table.name - The prototype name.
     * @param table.precision_index - The precision to read.
     */
    get_flow_count(this: void,
        table: {
            name: string,
            input: boolean,
            precision_index: defines.flow_precision_index,
            count?: boolean
        }): number

    /**
     * Gets the total input count for a given prototype.
     * @param name - The prototype name.
     */
    get_input_count(this: void,
        name: string): number

    /**
     * Gets the total output count for a given prototype.
     * @param name - The prototype name.
     */
    get_output_count(this: void,
        name: string): number

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Adds a value to this flow statistics.
     * @param count - The count: positive or negative determines if the value goes in the input or output statistics.
     * @param name - The prototype name.
     */
    on_flow(this: void,
        name: string,
        count: number): void

    /**
     * Sets the total input count for a given prototype.
     * @param count - The new count. The type depends on the instance of the statistics.
     * @param name - The prototype name.
     */
    set_input_count(this: void,
        name: string,
        count: number): void

    /**
     * Sets the total output count for a given prototype.
     * @param count - The new count. The type depends on the instance of the statistics.
     * @param name - The prototype name.
     */
    set_output_count(this: void,
        name: string,
        count: number): void

    /**
     * The force these statistics belong to or `nil` for pollution statistics.
     */
    readonly force: LuaForce

    /**
     * List of input counts indexed by prototype name. Represents the data that is shown on the left side of the GUI for the given statistics.
     */
    readonly input_counts: {[key: string]: number}

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * List of output counts indexed by prototype name. Represents the data that is shown on the right side of the GUI for the given statistics.
     */
    readonly output_counts: {[key: string]: number}

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * An array of fluid boxes of an entity. Entities may contain more than one fluid box, and some can change the number of fluid boxes -- for instance, an assembling machine will change its number of fluid boxes depending on its active recipe.
 * See {@link Fluid | Fluid}
 * Do note that reading from a {@link LuaFluidBox | LuaFluidBox} creates a new table and writing will copy the given fields from the table into the engine's own fluid box structure. Therefore, the correct way to update a fluidbox of an entity is to read it first, modify the table, then write the modified table back. Directly accessing the returned table's attributes won't have the desired effect.
 * @example
 * Double the temperature of the fluid in `entity`'s first fluid box. 
 * ```
 * fluid = entity.fluidbox[1]
 * fluid.temperature = fluid.temperature * 2
 * entity.fluidbox[1] = fluid
 * ```
 *
 */
interface LuaFluidBox {
    /**
     * Flushes all fluid from this fluidbox and its fluid system.
     * @param fluid - If provided, only this fluid is flushed.
     * @returns The fluid removed.
     */
    flush(this: void,
        index: number,
        fluid?: FluidIdentification): {[key: string]: number}

    /**
     * The capacity of the given fluidbox index.
     */
    get_capacity(this: void,
        index: number): number

    /**
     * The fluidbox connections for the given fluidbox index.
     */
    get_connections(this: void,
        index: number): LuaFluidBox[]

    /**
     * Get a fluid box filter
     * @param index - The index of the filter to get.
     * @returns The filter at the requested index. `nil` if there isn't one.
     */
    get_filter(this: void,
        index: number): FluidBoxFilter

    /**
     * Flow through the fluidbox in the last tick. It is the larger of in-flow and out-flow.
     * @remarks
     * Fluid wagons do not track it and will return 0.
     *
     */
    get_flow(this: void,
        index: number): number

    /**
     * Returns the fluid the fluidbox is locked onto Returns 'nil' for no lock
     */
    get_locked_fluid(this: void,
        index: number): string

    /**
     * The prototype of this fluidbox index.
     */
    get_prototype(this: void,
        index: number): LuaFluidBoxPrototype

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Set a fluid box filter.
     * @remarks
     * Some entities cannot have their fluidbox filter set, notably fluid wagons and crafting machines.
     *
     * @param filter - The filter to set. Setting `nil` clears the filter.
     * @param index - The index of the filter to set.
     * @returns Whether the filter was set successfully.
     */
    set_filter(this: void,
        index: number,
        filter?: FluidBoxFilterSpec): boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The entity that owns this fluidbox.
     */
    readonly owner: LuaEntity

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Access, set or clear a fluid box. The index must always be in bounds (see {@link LuaFluidBox::operator # | LuaFluidBox::operator #}). New fluidboxes may not be added or removed using this operator. If the given fluid box doesn't contain any fluid, `nil` is returned. Similarly, `nil` can be written to a fluid box to remove all fluid from it.
     * @remarks
     * This will return a {@link Fluid | Fluid}. The return type is any due to typescript limitations.
     *
     */
    readonly [key: string]: any

    /**
     * Number of fluid boxes.
     */
    readonly '#': number

}

/**
 * A prototype of a fluidbox owned by some {@link LuaEntityPrototype | LuaEntityPrototype}.
 */
interface LuaFluidBoxPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly base_area: number

    readonly base_level: number

    /**
     * The entity that this belongs to.
     */
    readonly entity: LuaEntityPrototype

    /**
     * The filter or `nil` if no filter is set.
     */
    readonly filter: LuaFluidPrototype

    readonly height: number

    /**
     * The index of this fluidbox prototype in the owning entity.
     */
    readonly index: number

    /**
     * The maximum temperature or `nil` if none is set.
     */
    readonly maximum_temperature: number

    /**
     * The minimum temperature or `nil` if none is set.
     */
    readonly minimum_temperature: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The pipe connection points.
     */
    readonly pipe_connections: FluidBoxConnection[]

    /**
     * The production type. "input", "output", "input-output", or "none".
     */
    readonly production_type: string

    /**
     * The render layer.
     */
    readonly render_layer: string

    /**
     * The secondary draw orders for the 4 possible connection directions.
     */
    readonly secondary_draw_orders: number[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    readonly volume: number

}

/**
 * Prototype of a fluid energy source.
 */
interface LuaFluidEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly burns_fluid: boolean

    readonly destroy_non_fuel_fluid: boolean

    readonly effectivity: number

    readonly emissions: number

    /**
     * The fluid box for this energy source.
     */
    readonly fluid_box: LuaFluidBoxPrototype

    readonly fluid_usage_per_tick: number

    readonly maximum_temperature: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly render_no_network_icon: boolean

    readonly render_no_power_icon: boolean

    readonly scale_fluid_usage: boolean

    /**
     * The smoke sources for this prototype if any.
     */
    readonly smoke: SmokeSource[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a fluid.
 */
interface LuaFluidPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly base_color: Color

    /**
     * Default temperature of this fluid.
     */
    readonly default_temperature: number

    /**
     * A multiplier on the amount of emissions produced when this fluid is burnt in a generator. A value above `1.0` increases emissions and vice versa. The multiplier can't be negative.
     */
    readonly emissions_multiplier: number

    readonly flow_color: Color

    /**
     * The amount of energy in Joules one unit of this fluid will produce when burnt in a generator. A value of `0` means this fluid can't be used for energy generation. The value can't be negative.
     */
    readonly fuel_value: number

    /**
     * The temperature above which this fluid will be shown as gaseous inside tanks and pipes.
     */
    readonly gas_temperature: number

    /**
     * Group of this prototype.
     */
    readonly group: LuaGroup

    /**
     * The amount of energy in Joules required to heat one unit of this fluid by 1°C.
     */
    readonly heat_capacity: number

    /**
     * Whether this fluid is hidden from the fluid and signal selectors.
     */
    readonly hidden: boolean

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Maximum temperature this fluid can reach.
     */
    readonly max_temperature: number

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string for this prototype.
     */
    readonly order: string

    /**
     * Subgroup of this prototype.
     */
    readonly subgroup: LuaGroup

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a font.
 */
interface LuaFontPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly border: boolean

    /**
     * The border color or `nil` if not set.
     */
    readonly border_color: Color

    readonly filtered: boolean

    readonly from: string

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly size: number

    readonly spacing: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * `LuaForce` encapsulates data local to each "force" or "faction" of the game. Default forces are player, enemy and neutral. Players and mods can create additional forces (up to 64 total).
 */
interface LuaForce {
    /**
     * Adds a custom chart tag to the given surface and returns the new tag or `nil` if the given position isn't valid for a chart tag.
     * @remarks
     * The chunk must be charted for a tag to be valid at that location.
     *
     * @param surface - Which surface to add the tag to.
     * @param tag - The tag to add.
     */
    add_chart_tag(this: void,
        surface: SurfaceIdentification,
        tag: ChartTagSpec): LuaCustomChartTag

    /**
     * Add this technology to the back of the research queue if the queue is enabled. Otherwise, set this technology to be researched now.
     * @returns If the technology was added.
     */
    add_research(this: void,
        technology: TechnologyIdentification): boolean

    /**
     * Cancels pending chart requests for the given surface or all surfaces.
     */
    cancel_charting(this: void,
        surface?: SurfaceIdentification): void

    /**
     * Stop the research currently in progress. This will remove any dependent technologies from the research queue.
     */
    cancel_current_research(this: void): void

    /**
     * Chart a portion of the map. The chart for the given area is refreshed; it creates chart for any parts of the given area that haven't been charted yet.
     * @param area - The area on the given surface to chart.
     * @example
     * Charts a 2048x2048 rectangle centered around the origin. 
     * ```
     * game.player.force.chart(game.player.surface, {{x = -1024, y = -1024}, {x = 1024, y = 1024}})
     * ```
     *
     */
    chart(this: void,
        surface: SurfaceIdentification,
        area: BoundingBox): void

    /**
     * Chart all generated chunks.
     * @param surface - Which surface to chart or all if not given.
     */
    chart_all(this: void,
        surface?: SurfaceIdentification): void

    /**
     * Erases chart data for this force.
     * @param surface - Which surface to erase chart data for or if not provided all surfaces charts are erased.
     */
    clear_chart(this: void,
        surface?: SurfaceIdentification): void

    /**
     * Disable all recipes and technologies. Only recipes and technologies enabled explicitly will be useable from this point.
     */
    disable_all_prototypes(this: void): void

    /**
     * Disable research for this force.
     */
    disable_research(this: void): void

    /**
     * Enables all recipes and technologies. The opposite of {@link LuaForce::disable_all_prototypes | LuaForce::disable_all_prototypes}
     */
    enable_all_prototypes(this: void): void

    /**
     * Unlock all recipes.
     */
    enable_all_recipes(this: void): void

    /**
     * Unlock all technologies.
     */
    enable_all_technologies(this: void): void

    /**
     * Enable research for this force.
     */
    enable_research(this: void): void

    /**
     * Finds all custom chart tags within the given bounding box on the given surface.
     */
    find_chart_tags(this: void,
        surface: SurfaceIdentification,
        area?: BoundingBox): LuaCustomChartTag[]

    /**
     * @param position - Position to find a network for
     * @param surface - Surface to search on
     * @returns The found network or `nil`.
     */
    find_logistic_network_by_position(this: void,
        position: Position,
        surface: SurfaceIdentification): LuaLogisticNetwork | null

    /**
     * @param ammo - Ammo category
     */
    get_ammo_damage_modifier(this: void,
        ammo: string): number

    /**
     * Is `other` force in this force's cease fire list?
     */
    get_cease_fire(this: void,
        other: ForceIdentification): boolean

    /**
     * Count entities of given type.
     * @remarks
     * This function has O(1) time complexity as entity counts are kept and maintained in the game engine.
     *
     * @param name - Prototype name of the entity.
     * @returns Number of entities of given prototype belonging to this force.
     */
    get_entity_count(this: void,
        name: string): number

    /**
     * Is `other` force in this force's friends list.
     */
    get_friend(this: void,
        other: ForceIdentification): boolean

    /**
     * @param ammo - Ammo category
     */
    get_gun_speed_modifier(this: void,
        ammo: string): number

    /**
     * Gets if the given recipe is explicitly disabled from being hand crafted.
     */
    get_hand_crafting_disabled_for_recipe(this: void,
        recipe: string | LuaRecipe): boolean

    /**
     * Gets the count of a given item launched in rockets.
     * @param item - The item to get
     * @returns The count of the item that has been launched.
     */
    get_item_launched(this: void,
        item: string): number

    /**
     * Gets the linked inventory for the given prototype and link ID if it exists or `nil`.
     */
    get_linked_inventory(this: void,
        prototype: EntityPrototypeIdentification,
        link_id: number): LuaInventory

    /**
     * Gets the saved progress for the given technology or `nil` if there is no saved progress.
     * @param technology - The technology
     * @returns The progress as a percent.
     */
    get_saved_technology_progress(this: void,
        technology: TechnologyIdentification): number

    get_spawn_position(this: void,
        surface: SurfaceIdentification): Position

    /**
     * Gets train stops matching the given filters.
     */
    get_train_stops(this: void,
        table?: {
            name?: string | string[],
            surface?: SurfaceIdentification
        }): LuaEntity[]

    /**
     * @param surface - If given only trains on the surface are returned.
     */
    get_trains(this: void,
        surface?: SurfaceIdentification): LuaTrain[]

    /**
     * @param turret - Turret prototype name
     */
    get_turret_attack_modifier(this: void,
        turret: string): number

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Has a chunk been charted?
     * @param position - Position of the chunk.
     */
    is_chunk_charted(this: void,
        surface: SurfaceIdentification,
        position: ChunkPosition): boolean

    /**
     * Is the given chunk currently charted and visible (not covered by fog of war) on the map.
     */
    is_chunk_visible(this: void,
        surface: SurfaceIdentification,
        position: ChunkPosition): boolean

    /**
     * Is this force an enemy? This differs from `get_cease_fire` in that it is always false for neutral force. This is equivalent to checking the `enemy` ForceCondition.
     */
    is_enemy(this: void,
        other: ForceIdentification): boolean

    /**
     * Is this force a friend? This differs from `get_friend` in that it is always true for neutral force. This is equivalent to checking the `friend` ForceCondition.
     */
    is_friend(this: void,
        other: ForceIdentification): boolean

    /**
     * Is pathfinder busy? When the pathfinder is busy, it won't accept any more pathfinding requests.
     */
    is_pathfinder_busy(this: void): boolean

    /**
     * Kill all units and flush the pathfinder.
     */
    kill_all_units(this: void): void

    /**
     * Play a sound for every player in this force.
     * @param table.override_sound_type - The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     * @param table.path - The sound to play.
     * @param table.position - Where the sound should be played. If not given, it's played at the current position of each player.
     * @param table.volume_modifier - The volume of the sound to play. Must be between 0 and 1 inclusive.
     */
    play_sound(this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
            override_sound_type?: SoundType
        }): void

    /**
     * Print text to the chat console of all players on this force.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        message: LocalisedString,
        color?: Color): void

    /**
     * Force a rechart of the whole chart.
     */
    rechart(this: void): void

    /**
     * Research all technologies.
     * @param include_disabled_prototypes - Whether technologies that are explicitly disabled in the prototype should also be researched. Defaults to `false`.
     */
    research_all_technologies(this: void,
        include_disabled_prototypes?: boolean): void

    /**
     * Reset everything. All technologies are set to not researched, all modifiers are set to default values.
     */
    reset(this: void): void

    /**
     * Resets evolution for this force to zero.
     */
    reset_evolution(this: void): void

    /**
     * Load the original version of all recipes from the prototypes.
     */
    reset_recipes(this: void): void

    /**
     * Load the original versions of technologies from prototypes. Preserves research state of technologies.
     */
    reset_technologies(this: void): void

    /**
     * Reapplies all possible research effects, including unlocked recipes. Any custom changes are lost. Preserves research state of technologies.
     */
    reset_technology_effects(this: void): void

    /**
     * @param ammo - Ammo category
     */
    set_ammo_damage_modifier(this: void,
        ammo: string,
        modifier: number): void

    /**
     * Add `other` force to this force's cease fire list. Forces on the cease fire list won't be targeted for attack.
     */
    set_cease_fire(this: void,
        other: ForceIdentification,
        cease_fire: boolean): void

    /**
     * Add `other` force to this force's friends list. Friends have unrestricted access to buildings and turrets won't fire at them.
     */
    set_friend(this: void,
        other: ForceIdentification,
        friend: boolean): void

    /**
     * @param ammo - Ammo category
     */
    set_gun_speed_modifier(this: void,
        ammo: string,
        modifier: number): void

    /**
     * Sets if the given recipe can be hand-crafted. This is used to explicitly disable hand crafting a recipe - it won't allow hand-crafting otherwise not hand-craftable recipes.
     */
    set_hand_crafting_disabled_for_recipe(this: void,
        recipe: string | LuaRecipe,
        hand_crafting_disabled: boolean): void

    /**
     * Sets the count of a given item launched in rockets.
     * @param count - The count to set
     * @param item - The item to set
     */
    set_item_launched(this: void,
        item: string,
        count: number): void

    /**
     * Sets the saved progress for the given technology. The technology must not be in progress, must not be completed, and the new progress must be < 100%.
     * @param progress - Progress as a percent. Set to `nil` to remove the saved progress.
     * @param technology - The technology
     */
    set_saved_technology_progress(this: void,
        technology: TechnologyIdentification,
        progress: number): void

    /**
     * @param position - The new position on the given surface.
     * @param surface - Surface to set the spawn position for.
     */
    set_spawn_position(this: void,
        position: Position,
        surface: SurfaceIdentification): void

    /**
     * @param turret - Turret prototype name
     */
    set_turret_attack_modifier(this: void,
        turret: string,
        modifier: number): void

    /**
     * @param position - The chunk position to unchart.
     * @param surface - Surface to unchart on.
     */
    unchart_chunk(this: void,
        position: ChunkPosition,
        surface: SurfaceIdentification): void

    /**
     * Enables some higher-level AI behaviour for this force. When set to `true`, biters belonging to this force will automatically expand into new territories, build new spawners, and form unit groups. By default, this value is `true` for the enemy force and `false` for all others.
     * @remarks
     * Setting this to `false` does not turn off biters' AI. They will still move around and attack players who come close.
     * It is necessary for a force to be AI controllable in order to be able to create unit groups or build bases from scripts.
     *
     */
    ai_controllable: boolean

    artillery_range_modifier: number

    character_build_distance_bonus: number

    character_health_bonus: number

    /**
     * the number of additional inventory slots the character main inventory has.
     */
    character_inventory_slots_bonus: number

    character_item_drop_distance_bonus: number

    character_item_pickup_distance_bonus: number

    /**
     * `true` if character requester logistics is enabled.
     */
    character_logistic_requests: boolean

    character_loot_pickup_distance_bonus: number

    character_reach_distance_bonus: number

    character_resource_reach_distance_bonus: number

    /**
     * Modifies the running speed of all characters in this force by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`.
     */
    character_running_speed_modifier: number

    /**
     * Number of character trash slots.
     */
    character_trash_slot_count: number

    /**
     * The connected players belonging to this force.
     * This is primarily useful when you want to do some action against all online players of this force.
     * @remarks
     * This does *not* index using player index. See {@link LuaPlayer::index | LuaPlayer::index} on each player instance for the player index.
     *
     */
    readonly connected_players: LuaPlayer[]

    /**
     * The current technology in research, or `nil` if no research is currently ongoing.
     */
    readonly current_research: LuaTechnology

    /**
     * The time, in ticks, before a deconstruction order is removed.
     */
    deconstruction_time_to_live: number

    /**
     * The entity build statistics for this force (built and mined)
     */
    readonly entity_build_count_statistics: LuaFlowStatistics

    /**
     * Evolution factor of this force.
     */
    evolution_factor: number

    evolution_factor_by_killing_spawners: number

    evolution_factor_by_pollution: number

    evolution_factor_by_time: number

    /**
     * The fluid production statistics for this force.
     */
    readonly fluid_production_statistics: LuaFlowStatistics

    /**
     * Additional lifetime for following robots.
     */
    following_robots_lifetime_modifier: number

    /**
     * If friendly fire is enabled for this force.
     */
    friendly_fire: boolean

    /**
     * The time, in ticks, before a placed ghost disappears.
     */
    ghost_time_to_live: number

    /**
     * Unique ID associated with this force.
     */
    readonly index: number

    /**
     * The inserter stack size bonus for non stack inserters
     */
    inserter_stack_size_bonus: number

    /**
     * The item production statistics for this force.
     */
    readonly item_production_statistics: LuaFlowStatistics

    /**
     * All of the items that have been launched in rockets.
     */
    readonly items_launched: {[key: string]: number}

    /**
     * The kill counter statistics for this force.
     */
    readonly kill_count_statistics: LuaFlowStatistics

    laboratory_productivity_bonus: number

    laboratory_speed_modifier: number

    /**
     * List of logistic networks, grouped by surface.
     */
    readonly logistic_networks: {[key: string]: LuaLogisticNetwork[]}

    /**
     * Multiplier of the manual crafting speed. Default value is `0`. The actual crafting speed will be multiplied by `1 + manual_crafting_speed_modifier`.
     * @example
     * Double the player's crafting speed 
     * ```
     * game.player.force.manual_crafting_speed_modifier = 1
     * ```
     *
     */
    manual_crafting_speed_modifier: number

    /**
     * Multiplier of the manual mining speed. Default value is `0`. The actual mining speed will be multiplied by `1 + manual_mining_speed_modifier`.
     * @example
     * Double the player's mining speed 
     * ```
     * game.player.force.manual_mining_speed_modifier = 1
     * ```
     *
     */
    manual_mining_speed_modifier: number

    max_failed_attempts_per_tick_per_construction_queue: number

    max_successful_attempts_per_tick_per_construction_queue: number

    /**
     * Maximum number of follower robots.
     */
    maximum_following_robot_count: number

    mining_drill_productivity_bonus: number

    /**
     * Name of the force.
     * @example
     * Prints "`player`" 
     * ```
     * game.player.print(game.player.force.name)
     * ```
     *
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Players belonging to this force.
     */
    readonly players: LuaPlayer[]

    /**
     * The previous research if any.
     */
    previous_research: LuaTechnology

    /**
     * Recipes available to this force, indexed by `name`.
     * @example
     * Prints the category of the given recipe 
     * ```
     * game.player.print(game.player.force.recipes["transport-belt"].category)
     * ```
     *
     */
    readonly recipes: {[key: string]: LuaRecipe}

    /**
     * Whether research is enabled for this force, see {@link LuaForce::enable_research | LuaForce::enable_research} and {@link LuaForce::disable_research | LuaForce::disable_research}
     */
    readonly research_enabled: boolean

    /**
     * Progress of current research, as a number in range [0, 1].
     */
    research_progress: number

    /**
     * The research queue of this force. The first technology in the array is the currently active one. Reading this attribute gives an array of {@link LuaTechnology | LuaTechnology}.
     * To write to this, the entire table must be written. Providing an empty table or `nil` will empty the research queue and cancel the current research. Writing to this when the research queue is disabled will simply set the last research in the table as the current research.
     * @remarks
     * This only allows mods to queue research that this force is able to research in the first place. As an example, an already researched technology or one whose prerequisites are not fulfilled will not be queued, but dropped silently instead.
     *
     */
    research_queue: TechnologyIdentification[]

    /**
     * Whether the research queue is available for this force.
     */
    research_queue_enabled: boolean

    /**
     * The number of rockets launched.
     */
    rockets_launched: number

    /**
     * If sharing chart data is enabled for this force.
     */
    share_chart: boolean

    /**
     * Number of items that can be transferred by stack inserters. When writing to this value, it must be >= 0 and <= 254.
     */
    stack_inserter_capacity_bonus: number

    /**
     * Technologies owned by this force, indexed by `name`.
     * @example
     * Researches the technology for the player's force 
     * ```
     * game.player.force.technologies["steel-processing"].researched = true
     * ```
     *
     */
    readonly technologies: {[key: string]: LuaTechnology}

    train_braking_force_bonus: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    worker_robots_battery_modifier: number

    worker_robots_speed_modifier: number

    worker_robots_storage_bonus: number

    /**
     * Ability to create new blueprints using empty blueprint item when using zoom-to-world.
     */
    zoom_to_world_blueprint_enabled: boolean

    /**
     * Ability to use deconstruction planner when using zoom-to-world.
     */
    zoom_to_world_deconstruction_planner_enabled: boolean

    /**
     * Ability to use zoom-to-world on map.
     */
    zoom_to_world_enabled: boolean

    /**
     * Ability to build ghosts through blueprint or direct ghost placement, or "mine" ghosts when using zoom-to-world.
     */
    zoom_to_world_ghost_building_enabled: boolean

    /**
     * Ability to use custom selection tools when using zoom-to-world.
     */
    zoom_to_world_selection_tool_enabled: boolean

}

/**
 * Prototype of a fuel category.
 */
interface LuaFuelCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Main toplevel type, provides access to most of the API though its members. An instance of LuaGameScript is available as the global object named `game`.
 */
interface LuaGameScript {
    /**
     * Instruct the game to perform an auto-save.
     * @remarks
     * Only the server will save in multiplayer. In single player a standard auto-save is triggered.
     *
     * @param name - The autosave name if any. Saves will be named _autosave-*name* when provided.
     */
    auto_save(this: void,
        name?: string): void

    /**
     * Bans the given player from this multiplayer game. Does nothing if this is a single player game of if the player running this isn't an admin.
     * @param player - The player to ban.
     * @param reason - The reason given if any.
     */
    ban_player(this: void,
        player: PlayerIdentification,
        reason?: LocalisedString): void

    /**
     * Run internal consistency checks. Allegedly prints any errors it finds.
     * @remarks
     * Exists mainly for debugging reasons.
     *
     */
    check_consistency(this: void): void

    /**
     * Goes over all items, entities, tiles, recipes, technologies among other things and logs if the locale is incorrect.
     * @remarks
     * Also prints true/false if called from the console.
     *
     */
    check_prototype_translations(this: void): void

    /**
     * Counts how many distinct groups of pipes exist in the world.
     */
    count_pipe_groups(this: void): void

    /**
     * Create a new force.
     * @remarks
     * The game currently supports a maximum of 64 forces, including the three built-in forces. This means that a maximum of 61 new forces may be created.
     * Force names must be unique.
     *
     * @param force - Name of the new force
     * @returns The force that was just created
     */
    create_force(this: void,
        force: string): LuaForce

    /**
     * Creates an inventory that is not owned by any game object. It can be resized later with {@link LuaInventory::resize | LuaInventory::resize}.
     * @remarks
     * Make sure to destroy it when you are done with it with {@link LuaInventory::destroy | LuaInventory::destroy}.
     *
     * @param size - The number of slots the inventory initially has.
     */
    create_inventory(this: void,
        size: number): LuaInventory

    /**
     * Creates a {@link LuaProfiler | LuaProfiler}, which is used for measuring script performance.
     * @remarks
     * LuaProfiler cannot be serialized.
     *
     * @param stopped - Create the timer stopped
     */
    create_profiler(this: void,
        stopped?: boolean): LuaProfiler

    /**
     * Creates a deterministic standalone random generator with the given seed or if a seed is not provided the initial map seed is used.
     * @remarks
     * *Make sure* you actually want to use this over math.random(...) as this provides entirely different functionality over math.random(...).
     *
     */
    create_random_generator(this: void,
        seed?: number): LuaRandomGenerator

    /**
     * Create a new surface
     * @remarks
     * The game currently supports a maximum of 4,294,967,295 surfaces, including the default surface.
     * Surface names must be unique
     *
     * @param name - Name of the new surface
     * @param settings - Map generation settings
     * @returns The surface that was just created
     */
    create_surface(this: void,
        name: string,
        settings?: MapGenSettings): LuaSurface

    /**
     * Base64 decodes and inflates the given string.
     * @param string - The string to decode.
     * @returns The decoded string or `nil` if the decode failed.
     */
    decode_string(this: void,
        string: string): string | null

    /**
     * Deletes the given surface and all entities on it.
     * @param surface - The surface to be deleted. Currently the primary surface (1, 'nauvis') cannot be deleted.
     */
    delete_surface(this: void,
        surface: string | LuaSurface): void

    /**
     * Converts the given direction into the string version of the direction.
     */
    direction_to_string(this: void,
        direction: defines.direction): void

    /**
     * Disables replay saving for the current save file. Once done there's no way to re-enable replay saving for the save file without loading an old save.
     */
    disable_replay(this: void): void

    /**
     * Disables tutorial triggers, that unlock new tutorials and show notices about unlocked tutorials.
     */
    disable_tutorial_triggers(this: void): void

    /**
     * Deflates and base64 encodes the given string.
     * @param string - The string to encode.
     * @returns The encoded string or `nil` if the encode failed.
     */
    encode_string(this: void,
        string: string): string | null

    /**
     * Evaluate an expression, substituting variables as provided. For details on the formula, see the relevant page on the {@link Factorio wiki | https://wiki.factorio.com/Prototype/Technology#unit}.
     * @param expression - The expression to evaluate.
     * @param variables - Variables to be substituted.
     * @example
     * Calculate the number of research units required to unlock mining productivity level 10. 
     * ```
     * local formula = game.forces["player"].technologies["mining-productivity-4"].research_unit_count_formula
     * local units = game.evaluate_expression(formula, { L = 10, l = 10 })
     * ```
     *
     */
    evaluate_expression(this: void,
        expression: string,
        variables?: {[key: string]: number}): number

    /**
     * Force a CRC check. Tells all peers to calculate their current map CRC; these CRC are then compared against each other. If a mismatch is detected, the game is desynced and some peers are forced to reconnect.
     */
    force_crc(this: void): void

    /**
     * Gets the number of entities that are active (updated each tick).
     * @remarks
     * This is very expensive to calculate.
     *
     * @param surface - If give, only the entities active on this surface are counted.
     */
    get_active_entities_count(this: void,
        surface?: SurfaceIdentification): number

    get_entity_by_tag(this: void,
        tag: string): LuaEntity

    /**
     * Returns a dictionary of all LuaAchievementPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every achievement prototype that is not allowed to be completed on the peaceful difficulty setting. 
     * ```
     * local prototypes = game.get_filtered_achievement_prototypes{{filter="allowed-without-fight", invert=true}}
     * ```
     *
     */
    get_filtered_achievement_prototypes(this: void,
        filters: AchievementPrototypeFilter[]): {[key: string]: LuaAchievementPrototype}

    /**
     * Returns a dictionary of all LuaDecorativePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every decorative prototype that is auto-placed. 
     * ```
     * local prototypes = game.get_filtered_decorative_prototypes{{filter="autoplace"}}
     * ```
     *
     */
    get_filtered_decorative_prototypes(this: void,
        filters: DecorativePrototypeFilter[]): {[key: string]: LuaDecorativePrototype}

    /**
     * Returns a dictionary of all LuaEntityPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every entity prototype that can craft recipes involving fluids in the way some assembling machines can. 
     * ```
     * local prototypes = game.get_filtered_entity_prototypes{{filter="crafting-category", crafting_category="crafting-with-fluid"}}
     * ```
     *
     */
    get_filtered_entity_prototypes(this: void,
        filters: EntityPrototypeFilter[]): {[key: string]: LuaEntityPrototype}

    /**
     * Returns a dictionary of all LuaEquipmentPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every equipment prototype that functions as a battery. 
     * ```
     * local prototypes = game.get_filtered_equipment_prototypes{{filter="type", type="battery-equipment"}}
     * ```
     *
     */
    get_filtered_equipment_prototypes(this: void,
        filters: EquipmentPrototypeFilter[]): {[key: string]: LuaEquipmentPrototype}

    /**
     * Returns a dictionary of all LuaFluidPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every fluid prototype that has a heat capacity of exactly `100`. 
     * ```
     * local prototypes = game.get_filtered_fluid_prototypes{{filter="heat-capacity", comparison="=", value=100}}
     * ```
     *
     */
    get_filtered_fluid_prototypes(this: void,
        filters: FluidPrototypeFilter[]): {[key: string]: LuaFluidPrototype}

    /**
     * Returns a dictionary of all LuaItemPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every item prototype that, when launched with a rocket, produces a result. 
     * ```
     * local prototypes = game.get_filtered_item_prototypes{{filter="has-rocket-launch-products"}}
     * ```
     *
     */
    get_filtered_item_prototypes(this: void,
        filters: ItemPrototypeFilter[]): {[key: string]: LuaItemPrototype}

    /**
     * Returns a dictionary of all LuaModSettingPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every mod setting prototype that belongs to the specified mod. 
     * ```
     * local prototypes = game.get_filtered_mod_setting_prototypes{{filter="mod", mod="space-exploration"}}
     * ```
     *
     */
    get_filtered_mod_setting_prototypes(this: void,
        filters: ModSettingPrototypeFilter[]): {[key: string]: LuaModSettingPrototype}

    /**
     * Returns a dictionary of all LuaRecipePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every recipe prototype that takes less than half a second to craft (at crafting speed `1`). 
     * ```
     * local prototypes = game.get_filtered_recipe_prototypes{{filter="energy", comparison="<", value=0.5}}
     * ```
     *
     */
    get_filtered_recipe_prototypes(this: void,
        filters: RecipePrototypeFilter[]): {[key: string]: LuaRecipePrototype}

    /**
     * Returns a dictionary of all LuaTechnologyPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every technology prototype that can be researched at the start of the game. 
     * ```
     * local prototypes = game.get_filtered_technology_prototypes{{filter="has-prerequisites", invert=true}}
     * ```
     *
     */
    get_filtered_technology_prototypes(this: void,
        filters: TechnologyPrototypeFilter[]): {[key: string]: LuaTechnologyPrototype}

    /**
     * Returns a dictionary of all LuaTilePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example
     * Get every tile prototype that improves a player's walking speed by at least 50%. 
     * ```
     * local prototypes = game.get_filtered_tile_prototypes{{filter="walking-speed-modifier", comparison="≥", value=1.5}}
     * ```
     *
     */
    get_filtered_tile_prototypes(this: void,
        filters: TilePrototypeFilter[]): {[key: string]: LuaTilePrototype}

    /**
     * Gets the map exchange string for the map generation settings that were used to create this map.
     */
    get_map_exchange_string(this: void): string

    /**
     * Gets the given player or returns `nil` if no player is found.
     * @remarks
     * This is a shortcut for game.players[...]
     *
     * @param player - The player index or name.
     */
    get_player(this: void,
        player: number | string): LuaPlayer

    /**
     * Gets the inventories created through {@link LuaGameScript::create_inventory | LuaGameScript::create_inventory}
     * @remarks
     * Inventories created through console commands will be owned by `"core"`.
     *
     * @param mod - The mod who's inventories to get. If not provided all inventories are returned.
     * @returns A mapping of mod name to array of inventories owned by that mod.
     */
    get_script_inventories(this: void,
        mod?: string): {[key: string]: LuaInventory[]}

    /**
     * Gets the given surface or returns `nil` if no surface is found.
     * @remarks
     * This is a shortcut for game.surfaces[...]
     *
     * @param surface - The surface index or name.
     */
    get_surface(this: void,
        surface: number | string): LuaSurface

    /**
     * Gets train stops matching the given filters.
     */
    get_train_stops(this: void,
        table?: {
            name?: string | string[],
            surface?: SurfaceIdentification,
            force?: ForceIdentification
        }): LuaEntity[]

    /**
     * Is this the demo version of Factorio?
     */
    is_demo(this: void): boolean

    /**
     * Is the map loaded is multiplayer?
     */
    is_multiplayer(this: void): boolean

    /**
     * Checks if the given SoundPath is valid.
     * @param sound_path - Path to the sound.
     */
    is_valid_sound_path(this: void,
        sound_path: SoundPath): boolean

    /**
     * Checks if the given SpritePath is valid and contains a loaded sprite.
     * @remarks
     * The existence of the image is not checked for paths of type `file`.
     *
     * @param sprite_path - Path to the image.
     */
    is_valid_sprite_path(this: void,
        sprite_path: SpritePath): boolean

    /**
     * Convert a JSON string to a table.
     * @param json - The string to convert.
     * @returns The returned object, or `nil` if the json was invalid.
     */
    json_to_table(this: void,
        json: string): AnyBasic | null

    /**
     * Kicks the given player from this multiplayer game. Does nothing if this is a single player game or if the player running this isn't an admin.
     * @param player - The player to kick.
     * @param reason - The reason given if any.
     */
    kick_player(this: void,
        player: PlayerIdentification,
        reason?: LocalisedString): void

    /**
     * Marks two forces to be merge together. All entities in the source force will be reassigned to the target force. The source force will then be destroyed.
     * @remarks
     * The three built-in forces -- player, enemy and neutral -- can't be destroyed. I.e. they can't be used as the source argument to this function.
     * The source force is not merged until the end of the current tick or if called during the {@link on_forces_merging | on_forces_merging} event or {@link on_forces_merged | on_forces_merged} event the end of the next tick.
     *
     * @param destination - The force to reassign all entities to
     * @param source - The force to remove
     */
    merge_forces(this: void,
        source: ForceIdentification,
        destination: ForceIdentification): void

    /**
     * Mutes the given player. Does nothing if the player running this isn't an admin.
     * @param player - The player to mute.
     */
    mute_player(this: void,
        player: PlayerIdentification): void

    /**
     * Convert a map exchange string to map gen settings and map settings.
     */
    parse_map_exchange_string(this: void,
        map_exchange_string: string): MapExchangeStringData

    /**
     * Play a sound for every player in the game.
     * @param table.override_sound_type - The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     * @param table.path - The sound to play.
     * @param table.position - Where the sound should be played. If not given, it's played at the current position of each player.
     * @param table.volume_modifier - The volume of the sound to play. Must be between 0 and 1 inclusive.
     */
    play_sound(this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
            override_sound_type?: SoundType
        }): void

    /**
     * Print text to the chat console all players.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        message: LocalisedString,
        color?: Color): void

    /**
     * Purges the given players messages from the game. Does nothing if the player running this isn't an admin.
     * @param player - The player to purge.
     */
    purge_player(this: void,
        player: PlayerIdentification): void

    /**
     * Regenerate autoplacement of some entities on all surfaces. This can be used to autoplace newly-added entities.
     * @remarks
     * All specified entity prototypes must be autoplacable.
     *
     * @param entities - Prototype names of entity or entities to autoplace.
     */
    regenerate_entity(this: void,
        entities: string | string[]): void

    /**
     * Forces a reload of all mods.
     * @remarks
     * This will act like saving and loading from the mod(s) perspective.
     * This will do nothing if run in multiplayer.
     * This disables the replay if replay is enabled.
     *
     */
    reload_mods(this: void): void

    /**
     * Forces a reload of the scenario script from the original scenario location.
     * @remarks
     * This disables the replay if replay is enabled.
     *
     */
    reload_script(this: void): void

    /**
     * Remove players who are currently not connected from the map.
     * @param players - List of players to remove. If not specified, remove all offline players.
     */
    remove_offline_players(this: void,
        players?: Array<LuaPlayer | string>): void

    /**
     * Remove file or directory. Given path is taken relative to the script output directory. Can be used to remove files created by {@link LuaGameScript::write_file | LuaGameScript::write_file}.
     * @param path - Path to remove, relative to the script output directory
     */
    remove_path(this: void,
        path: string): void

    /**
     * Resets the amount of time played for this map.
     */
    reset_time_played(this: void): void

    /**
     * Saves the current configuration of Atlas to a file. This will result in huge file containing all of the game graphics moved to as small space as possible.
     * @remarks
     * Exists mainly for debugging reasons.
     *
     */
    save_atlas(this: void): void

    /**
     * Instruct the server to save the map.
     * @param name - Save name. If not specified, writes into the currently-running save.
     */
    server_save(this: void,
        name?: string): void

    /**
     * Set scenario state.
     */
    set_game_state(this: void,
        table: {
            game_finished: boolean,
            player_won: boolean,
            next_level: string,
            can_continue: boolean,
            victorious_force: ForceIdentification
        }): void

    /**
     * Forces the screenshot saving system to wait until all queued screenshots have been written to disk.
     */
    set_wait_for_screenshots_to_finish(this: void): void

    /**
     * Show an in-game message dialog.
     * @remarks
     * Can only be used when the map contains exactly one player.
     *
     * @param table.image - Path to an image to show on the dialog
     * @param table.point_to - If specified, dialog will show an arrow pointing to this place. When not specified, the arrow will point to the player's position. (Use `point_to={type="nowhere"}` to remove the arrow entirely.) The dialog itself will be placed near the arrow's target.
     * @param table.style - The gui style to use for this speech bubble. Must be of type speech_bubble.
     * @param table.text - What the dialog should say
     * @param table.wrapper_frame_style - Must be of type flow_style.
     */
    show_message_dialog(this: void,
        table: {
            text: LocalisedString,
            image?: string,
            point_to?: GuiArrowSpecification,
            style?: string,
            wrapper_frame_style?: string
        }): void

    /**
     * Convert a table to a JSON string
     */
    table_to_json(this: void,
        data: Table): string

    /**
     * Take a screenshot and save it to a file. The filename should include a file extension indicating the desired image format. Supports `.png`, `.jpg` / `.jpeg`, `.tga` and `.bmp`.
     * @remarks
     * If Factorio is running headless, this function will do nothing.
     *
     * @param table.allow_in_replay - Whether to save the screenshot even during replay playback. Defaults to `false`.
     * @param table.anti_alias - Whether to render in double resolution and downscale the result (including GUI). Defaults to `false`.
     * @param table.by_player - If defined, the screenshot will only be taken for this player.
     * @param table.daytime - Overrides the current surface daytime for the duration of screenshot rendering.
     * @param table.force_render - Screenshot requests are processed in between game update and render. The game may skip rendering (ie. drop frames) if the previous frame has not finished rendering or the game simulation starts to fall below 60 updates per second. If `force_render` is set to `true`, the game won't drop frames and process the screenshot request at the end of the update in which the request was created. This is not honored on multiplayer clients that are catching up to server. Defaults to `false`.
     * @param table.path - The sub-path in `"script-output"` to save the screenshot to. Defaults to `"screenshot.png"`.
     * @param table.player - The player to focus on. Defaults to the local player.
     * @param table.position - If defined, the screenshot will be centered on this position. Otherwise, the screenshot will center on `player`.
     * @param table.quality - The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more compressed image. Defaults to `80`.
     * @param table.resolution - The maximum allowed resolution is 16384x16384 (8192x8192 when `anti_alias` is `true`), but the maximum recommended resolution is 4096x4096 (resp. 2048x2048).
     * @param table.show_cursor_building_preview - When `true` and when `player` is specified, the building preview for the item in the player's cursor will also be rendered. Defaults to `false`.
     * @param table.show_entity_info - Whether to include entity info ("Alt mode") or not. Defaults to `false`.
     * @param table.show_gui - Whether to include GUIs in the screenshot or not. Defaults to `false`.
     * @param table.surface - If defined, the screenshot will be taken on this surface.
     * @param table.water_tick - Overrides the tick of water animation, if animated water is enabled.
     * @param table.zoom - The map zoom to take the screenshot at. Defaults to `1`.
     */
    take_screenshot(this: void,
        table: {
            player?: PlayerIdentification,
            by_player?: PlayerIdentification,
            surface?: SurfaceIdentification,
            position?: Position,
            resolution?: Position,
            zoom?: number,
            path?: string,
            show_gui?: boolean,
            show_entity_info?: boolean,
            show_cursor_building_preview?: boolean,
            anti_alias?: boolean,
            quality?: number,
            allow_in_replay?: boolean,
            daytime?: number,
            water_tick?: number,
            force_render?: boolean
        }): void

    /**
     * Take a screenshot of the technology screen and save it to a file. The filename should include a file extension indicating the desired image format. Supports `.png`, `.jpg` / `.jpeg`, `.tga` and `.bmp`.
     * @param table.by_player - If given, the screenshot will only be taken for this player.
     * @param table.force - The force whose technology to screenshot. If not given, the `"player`" force is used.
     * @param table.path - The sub-path in `"script-output"` to save the screenshot to. Defaults to `"technology-screenshot.png"`.
     * @param table.quality - The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more compressed image. Defaults to `80`.
     * @param table.selected_technology - The technology to highlight.
     * @param table.skip_disabled - If `true`, disabled technologies will be skipped. Their successors will be attached to the disabled technology's parents. Defaults to `false`.
     */
    take_technology_screenshot(this: void,
        table: {
            force?: ForceIdentification,
            path?: string,
            by_player?: PlayerIdentification,
            selected_technology?: TechnologyIdentification,
            skip_disabled?: boolean,
            quality?: number
        }): void

    /**
     * Unbans the given player from this multiplayer game. Does nothing if this is a single player game of if the player running this isn't an admin.
     * @param player - The player to unban.
     */
    unban_player(this: void,
        player: PlayerIdentification): void

    /**
     * Unmutes the given player. Does nothing if the player running this isn't an admin.
     * @param player - The player to unmute.
     */
    unmute_player(this: void,
        player: PlayerIdentification): void

    /**
     * Write a string to a file.
     * @param append - When `true`, this will append to the end of the file. Defaults to `false`, which will overwrite any pre-existing file with the new data.
     * @param data - File content
     * @param filename - Path to the file to write to.
     * @param for_player - If given, the file will only be written for this player_index. 0 means only the server if one exists.
     */
    write_file(this: void,
        filename: string,
        data: LocalisedString,
        append?: boolean,
        for_player?: number): void

    /**
     * A dictionary containing every LuaAchievementPrototype indexed by `name`.
     */
    readonly achievement_prototypes: {[key: string]: LuaAchievementPrototype}

    /**
     * The active mods versions. The keys are mod names, the values are the versions.
     * @example
     * This will print the names and versions of active mods to player p's console. 
     * ```
     * for name, version in pairs(game.active_mods) do
     *   p.print(name .. " version " .. version)
     * end
     * ```
     *
     */
    readonly active_mods: {[key: string]: string}

    /**
     * A dictionary containing every LuaAmmoCategoryPrototype indexed by `name`.
     */
    readonly ammo_category_prototypes: {[key: string]: LuaAmmoCategoryPrototype}

    /**
     * A dictionary containing every LuaAutoplaceControlPrototype indexed by `name`.
     */
    readonly autoplace_control_prototypes: {[key: string]: LuaAutoplaceControlPrototype}

    /**
     * True by default. Can be used to disable autosaving. Make sure to turn it back on soon after.
     */
    autosave_enabled: boolean

    /**
     * Array of the names of all the backers that supported the game development early on. These are used as names for labs, locomotives, radars, roboports, and train stops.
     */
    readonly backer_names: {[key: number]: string}

    /**
     * The players that are currently online.
     * This is primarily useful when you want to do some action against all online players.
     * @remarks
     * This does *not* index using player index. See {@link LuaPlayer::index | LuaPlayer::index} on each player instance for the player index.
     *
     */
    readonly connected_players: LuaPlayer[]

    /**
     * A dictionary containing every LuaCustomInputPrototype indexed by `name`.
     */
    readonly custom_input_prototypes: {[key: string]: LuaCustomInputPrototype}

    /**
     * A dictionary containing every LuaDamagePrototype indexed by `name`.
     */
    readonly damage_prototypes: {[key: string]: LuaDamagePrototype}

    /**
     * A dictionary containing every LuaDecorativePrototype indexed by `name`.
     */
    readonly decorative_prototypes: {[key: string]: LuaDecorativePrototype}

    /**
     * The default map gen settings for this save.
     */
    readonly default_map_gen_settings: MapGenSettings

    /**
     * Current scenario difficulty.
     */
    readonly difficulty: defines.difficulty

    /**
     * The currently active set of difficulty settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game. This is however not recommended as different difficulties can have differing technology and recipe trees, which can cause problems for players.
     * @example
     * This will set the technology price multiplier to 12. 
     * ```
     * game.difficulty_settings.technology_price_multiplier = 12
     * ```
     *
     */
    readonly difficulty_settings: DifficultySettings

    /**
     * True by default. Can be used to disable the highlighting of resource patches when they are hovered on the map.
     */
    draw_resource_selection: boolean

    /**
     * Determines if enemy land mines are completely invisible or not.
     */
    enemy_has_vision_on_land_mines: boolean

    /**
     * A dictionary containing every LuaEntityPrototype indexed by `name`.
     */
    readonly entity_prototypes: {[key: string]: LuaEntityPrototype}

    /**
     * A dictionary containing every LuaEquipmentCategoryPrototype indexed by `name`.
     */
    readonly equipment_category_prototypes: {[key: string]: LuaEquipmentCategoryPrototype}

    /**
     * A dictionary containing every LuaEquipmentGridPrototype indexed by `name`.
     */
    readonly equipment_grid_prototypes: {[key: string]: LuaEquipmentGridPrototype}

    /**
     * A dictionary containing every LuaEquipmentPrototype indexed by `name`.
     */
    readonly equipment_prototypes: {[key: string]: LuaEquipmentPrototype}

    /**
     * Is the scenario finished?
     */
    readonly finished: boolean

    /**
     * A dictionary containing every LuaFluidPrototype indexed by `name`.
     */
    readonly fluid_prototypes: {[key: string]: LuaFluidPrototype}

    /**
     * A dictionary containing every LuaFontPrototype indexed by `name`.
     */
    readonly font_prototypes: {[key: string]: LuaFontPrototype}

    /**
     * Get a table of all the forces that currently exist. This sparse table allows you to find forces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of the table. Iterating with `ipairs()` will not work at all.
     */
    readonly forces: {[key: string]: LuaForce}

    /**
     * A dictionary containing every LuaFuelCategoryPrototype indexed by `name`.
     */
    readonly fuel_category_prototypes: {[key: string]: LuaFuelCategoryPrototype}

    /**
     * A dictionary containing every ItemGroup indexed by `name`.
     */
    readonly item_group_prototypes: {[key: string]: LuaGroup}

    /**
     * A dictionary containing every LuaItemPrototype indexed by `name`.
     */
    readonly item_prototypes: {[key: string]: LuaItemPrototype}

    /**
     * A dictionary containing every ItemSubgroup indexed by `name`.
     */
    readonly item_subgroup_prototypes: {[key: string]: LuaGroup}

    /**
     * A dictionary containing every MapGenPreset indexed by `name`.
     * @remarks
     * A MapGenPreset is an exact copy of the prototype table provided from the data stage.
     *
     */
    readonly map_gen_presets: {[key: string]: MapGenPreset}

    /**
     * The currently active set of map settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game.
     * @remarks
     * This does not contain difficulty settings, use {@link LuaGameScript::difficulty_settings | LuaGameScript::difficulty_settings} instead.
     *
     */
    readonly map_settings: MapSettings

    readonly max_beacon_supply_area_distance: number

    readonly max_electric_pole_connection_distance: number

    readonly max_electric_pole_supply_area_distance: number

    readonly max_force_distraction_chunk_distance: number

    readonly max_force_distraction_distance: number

    readonly max_gate_activation_distance: number

    readonly max_inserter_reach_distance: number

    readonly max_pipe_to_ground_distance: number

    readonly max_underground_belt_distance: number

    /**
     * A dictionary containing every LuaModSettingPrototype indexed by `name`.
     */
    readonly mod_setting_prototypes: {[key: string]: LuaModSettingPrototype}

    /**
     * A dictionary containing every LuaModuleCategoryPrototype indexed by `name`.
     */
    readonly module_category_prototypes: {[key: string]: LuaModuleCategoryPrototype}

    /**
     * A dictionary containing every LuaNamedNoiseExpression indexed by `name`.
     */
    readonly named_noise_expressions: {[key: string]: LuaNamedNoiseExpression}

    /**
     * A dictionary containing every LuaNoiseLayerPrototype indexed by `name`.
     */
    readonly noise_layer_prototypes: {[key: string]: LuaNoiseLayerPrototype}

    /**
     * This object's name.
     */
    readonly object_name: string

    /**
     * A dictionary containing every LuaParticlePrototype indexed by `name`.
     */
    readonly particle_prototypes: {[key: string]: LuaParticlePrototype}

    readonly permissions: LuaPermissionGroups

    /**
     * The player typing at the console - `nil` in all other instances. See {@link LuaGameScript::players | LuaGameScript::players} for accessing all players.
     */
    readonly player: LuaPlayer

    /**
     * Get a table of all the players that currently exist. This sparse table allows you to find players by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of the table. Iterating with `ipairs()` will not work at all.
     */
    readonly players: {[key: string]: LuaPlayer}

    /**
     * The pollution statistics for this map.
     */
    readonly pollution_statistics: LuaFlowStatistics

    /**
     * A dictionary containing every LuaRecipeCategoryPrototype indexed by `name`.
     */
    readonly recipe_category_prototypes: {[key: string]: LuaRecipeCategoryPrototype}

    /**
     * A dictionary containing every LuaRecipePrototype indexed by `name`.
     */
    readonly recipe_prototypes: {[key: string]: LuaRecipePrototype}

    /**
     * A dictionary containing every LuaResourceCategoryPrototype indexed by `name`.
     */
    readonly resource_category_prototypes: {[key: string]: LuaResourceCategoryPrototype}

    /**
     * A dictionary containing every LuaShortcutPrototype indexed by `name`.
     */
    readonly shortcut_prototypes: {[key: string]: LuaShortcutPrototype}

    /**
     * Speed to update the map at. 1.0 is normal speed -- 60 UPS.
     * @remarks
     * Minimum value is 0.01.
     *
     */
    speed: number

    /**
     * The styles that {@link LuaGuiElement | LuaGuiElement} can use, indexed by `name`.
     */
    readonly styles: {[key: string]: string}

    /**
     * Get a table of all the surfaces that currently exist. This sparse table allows you to find surfaces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of the table. Iterating with `ipairs()` will not work at all.
     */
    readonly surfaces: {[key: string]: LuaSurface}

    /**
     * A dictionary containing every {@link LuaTechnologyPrototype | LuaTechnologyPrototype} indexed by `name`.
     */
    readonly technology_prototypes: {[key: string]: LuaTechnologyPrototype}

    /**
     * Current map tick.
     */
    readonly tick: number

    /**
     * If the tick has been paused. This means that entity update has been paused.
     */
    tick_paused: boolean

    /**
     * The number of ticks since this game was 'created'. A game is 'created' either by using "new game" or "new game from scenario".
     * @remarks
     * This differs over {@link LuaGameScript::tick | LuaGameScript::tick} in that making a game from a scenario always starts with ticks_played value at 0 even if the scenario has its own level data where the {@link LuaGameScript::tick | LuaGameScript::tick} is > 0.
     * This value has no relation with {@link LuaGameScript::tick | LuaGameScript::tick} and can be completely different values.
     *
     */
    readonly ticks_played: number

    /**
     * The number of ticks to be run while the tick is paused. When {@link LuaGameScript::tick_paused | LuaGameScript::tick_paused} is true, ticks_to_run behaves the following way: While this is > 0, the entity update is running normally and this value is decremented every tick. When this reaches 0, the game will pause again.
     */
    ticks_to_run: number

    /**
     * A dictionary containing every LuaTilePrototype indexed by `name`.
     */
    readonly tile_prototypes: {[key: string]: LuaTilePrototype}

    /**
     * A dictionary containing every LuaTrivialSmokePrototype indexed by `name`.
     */
    readonly trivial_smoke_prototypes: {[key: string]: LuaTrivialSmokePrototype}

    /**
     * A dictionary containing every LuaVirtualSignalPrototype indexed by `name`.
     */
    readonly virtual_signal_prototypes: {[key: string]: LuaVirtualSignalPrototype}

}

/**
 * An abstract base class for behaviors that support switching the entity on or off based on some condition.
 */
interface LuaGenericOnOffControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The circuit condition.
     * @remarks
     * `condition` may be `nil` in order to clear the circuit condition.
     *
     * @example
     * Tell an entity to be active (e.g. a lamp to be lit) when it receives a circuit signal of more than 4 chain signals. 
     * ```
     * a_behavior.circuit_condition = {condition={comparator=">",
     *                                            first_signal={type="item", name="rail-chain-signal"},
     *                                            constant=4}}
     * ```
     *
     */
    circuit_condition: CircuitConditionDefinition

    /**
     * `true` if this should connect to the logistic network.
     */
    connect_to_logistic_network: boolean

    /**
     * If the entity is currently disabled because of the control behavior.
     */
    readonly disabled: boolean

    /**
     * The logistic condition.
     * @remarks
     * `condition` may be `nil` in order to clear the logistic condition.
     *
     * @example
     * Tell an entity to be active (e.g. a lamp to be lit) when the logistics network it's connected to has more than four chain signals. 
     * ```
     * a_behavior.logistic_condition = {condition={comparator=">",
     *                                             first_signal={type="item", name="rail-chain-signal"},
     *                                             constant=4}}
     * ```
     *
     */
    logistic_condition: CircuitConditionDefinition

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Item group or subgroup.
 */
interface LuaGroup {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The parent group if any; `nil` if none.
     */
    readonly group: LuaGroup

    /**
     * Localised name of the group.
     */
    readonly localised_name: LocalisedString

    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly order: string

    /**
     * The additional order value used in recipe ordering.
     * @remarks
     * Can only be used on groups, not on subgroups.
     *
     */
    readonly order_in_recipe: string

    /**
     * Subgroups of this group.
     * @remarks
     * Can only be used on groups, not on subgroups.
     *
     */
    readonly subgroups: LuaGroup[]

    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * The root of the GUI. This type houses the root elements, `top`, `left`, `center`, `goal`, and `screen`, to which other elements can be added to be displayed on screen.
 * @remarks
 * Every player can have a different GUI state.
 *
 */
interface LuaGui {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Returns `true` if sprite_path is valid and contains loaded sprite, otherwise `false`. Sprite path of type `file` doesn't validate if file exists.
     * @param sprite_path - Path to a image.
     */
    is_valid_sprite_path(this: void,
        sprite_path: SpritePath): boolean

    /**
     * The center part of the GUI. It is a flow element.
     */
    readonly center: LuaGuiElement

    /**
     * The children GUI elements mapped by name <> element.
     */
    readonly children: {[key: string]: LuaGuiElement}

    /**
     * The flow used in the objectives window. It is a flow element. The objectives window is only visible when the flow is not empty or the objective text is set.
     */
    readonly goal: LuaGuiElement

    /**
     * The left part of the GUI. It is a flow element inside a scroll pane element.
     */
    readonly left: LuaGuiElement

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The player who owns this gui.
     */
    readonly player: LuaPlayer

    /**
     * For showing a GUI somewhere relative to one of the game GUIs. It is an empty-widget element.
     */
    readonly relative: LuaGuiElement

    /**
     * For showing a GUI somewhere on the entire screen. It is an empty-widget element.
     */
    readonly screen: LuaGuiElement

    /**
     * The top part of the GUI. It is a flow element inside a scroll pane element.
     */
    readonly top: LuaGuiElement

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * An element of a custom GUI. This type is used to represent any kind of a GUI element - labels, buttons and frames are all instances of this type. Just like {@link LuaEntity | LuaEntity}, different kinds of elements support different attributes; attempting to access an attribute on an element that doesn't support it (for instance, trying to access the `column_count` of a `textfield`) will result in a runtime error.
 * The following types of GUI element are supported:
 * - `"button"`: A clickable element. Relevant event: {@link on_gui_click | on_gui_click}
 * - `"sprite-button"`: A `button` that displays a sprite rather than text. Relevant event: {@link on_gui_click | on_gui_click}
 * - `"checkbox"`: A clickable element with a check mark that can be turned off or on. Relevant event: {@link on_gui_checked_state_changed | on_gui_checked_state_changed}
 * - `"flow"`: An invisible container that lays out its children either horizontally or vertically.
 * - `"frame"`: A non-transparent box that contains other elements. It can have a title (set via the `caption` attribute). Just like a `flow`, it lays out its children either horizontally or vertically. Relevant event: {@link on_gui_location_changed | on_gui_location_changed}
 * - `"label"`: A piece of text.
 * - `"line"`: A horizontal or vertical separation line.
 * - `"progressbar"`: A partially filled bar that can be used to indicate progress.
 * - `"table"`: An invisible container that lays out its children in a specific number of columns. The width of each column is determined by the widest element it contains.
 * - `"textfield"`: A single-line box the user can type into. Relevant events: {@link on_gui_text_changed | on_gui_text_changed}, {@link on_gui_confirmed | on_gui_confirmed}
 * - `"radiobutton"`: A clickable element that is functionally identical to a `checkbox`, but has a circular appearance. Relevant event: {@link on_gui_checked_state_changed | on_gui_checked_state_changed}
 * - `"sprite"`: An element that shows an image.
 * - `"scroll-pane"`: An invisible element that is similar to a `flow`, but has the ability to show and use scroll bars.
 * - `"drop-down"`: A drop-down containing strings of text. Relevant event: {@link on_gui_selection_state_changed | on_gui_selection_state_changed}
 * - `"list-box"`: A list of strings, only one of which can be selected at a time. Shows a scroll bar if necessary. Relevant event: {@link on_gui_selection_state_changed | on_gui_selection_state_changed}
 * - `"camera"`: A camera that shows the game at the given position on the given surface. It can visually track an {@link entity | LuaGuiElement::entity} that is set after the element has been created.
 * - `"choose-elem-button"`: A button that lets the player pick from a certain kind of prototype, with optional filtering. Relevant event: {@link on_gui_elem_changed | on_gui_elem_changed}
 * - `"text-box"`: A multi-line `textfield`. Relevant event: {@link on_gui_text_changed | on_gui_text_changed}
 * - `"slider"`: A horizontal number line which can be used to choose a number. Relevant event: {@link on_gui_value_changed | on_gui_value_changed}
 * - `"minimap"`: A minimap preview, similar to the normal player minimap. It can visually track an {@link entity | LuaGuiElement::entity} that is set after the element has been created.
 * - `"entity-preview"`: A preview of an entity. The {@link entity | LuaGuiElement::entity} has to be set after the element has been created.
 * - `"empty-widget"`: An empty element that just exists. The root GUI elements `screen` and `relative` are `empty-widget`s.
 * - `"tabbed-pane"`: A collection of `tab`s and their contents. Relevant event: {@link on_gui_selected_tab_changed | on_gui_selected_tab_changed}
 * - `"tab"`: A tab for use in a `tabbed-pane`.
 * - `"switch"`: A switch with three possible states. Can have labels attached to either side. Relevant event: {@link on_gui_switch_state_changed | on_gui_switch_state_changed}
 * Each GUI element allows access to its children by having them as attributes. Thus, one can use the `parent.child` syntax to refer to children. Lua also supports the `parent["child"]` syntax to refer to the same element. This can be used in cases where the child has a name that isn't a valid Lua identifier.
 * @example
 * This will add a label called `greeting` to the top flow. Immediately after, it will change its text to illustrate accessing child elements. 
 * ```
 * game.player.gui.top.add{type="label", name="greeting", caption="Hi"}
 * game.player.gui.top.greeting.caption = "Hello there!"
 * game.player.gui.top["greeting"].caption = "Actually, never mind, I don't like your face"
 * ```
 *
 * @example
 * This will add a tabbed-pane and 2 tabs with contents. 
 * ```
 * local tabbed_pane = game.player.gui.top.add{type="tabbed-pane"}
 * local tab1 = tabbed_pane.add{type="tab", caption="Tab 1"}
 * local tab2 = tabbed_pane.add{type="tab", caption="Tab 2"}
 * local label1 = tabbed_pane.add{type="label", caption="Label 1"}
 * local label2 = tabbed_pane.add{type="label", caption="Label 2"}
 * tabbed_pane.add_tab(tab1, label1)
 * tabbed_pane.add_tab(tab2, label2)
 * ```
 *
 */
interface LuaGuiElement {
    /**
     * Add a new child element to this GuiElement.
     * @returns The added GUI element.
     */
    add(this: void,
        table: LuaGuiElementAddParams): LuaGuiElement

    /**
     * Inserts a string at the end or at the given index of this dropdown or listbox.
     * @param index - The index at which to insert the item.
     * @param string - The text to insert.
     */
    add_item(this: void,
        string: LocalisedString,
        index?: number): void

    /**
     * Adds the given tab and content widgets to this tabbed pane as a new tab.
     * @remarks
     * Applies to subclasses: tabbed-pane
     *
     * @param content - The content to show when this tab is selected. Can be any type of GUI element.
     * @param tab - The tab to add, must be a GUI element of type "tab".
     */
    add_tab(this: void,
        tab: LuaGuiElement,
        content: LuaGuiElement): void

    /**
     * Moves this GUI element to the "front" so it will draw over other elements.
     * @remarks
     * Only works for elements in {@link LuaGui::screen | LuaGui::screen}
     *
     */
    bring_to_front(this: void): void

    /**
     * Remove children of this element. Any {@link LuaGuiElement | LuaGuiElement} objects referring to the destroyed elements become invalid after this operation.
     * @example
     * ```
     * game.player.gui.top.clear()
     * ```
     *
     */
    clear(this: void): void

    /**
     * Removes the items in this dropdown or listbox.
     */
    clear_items(this: void): void

    /**
     * Remove this element, along with its children. Any {@link LuaGuiElement | LuaGuiElement} objects referring to the destroyed elements become invalid after this operation.
     * @remarks
     * The top-level GUI elements - {@link LuaGui::top | LuaGui::top}, {@link LuaGui::left | LuaGui::left}, {@link LuaGui::center | LuaGui::center} and {@link LuaGui::screen | LuaGui::screen} - can't be destroyed.
     *
     * @example
     * ```
     * game.player.gui.top.greeting.destroy()
     * ```
     *
     */
    destroy(this: void): void

    /**
     * Focuses this GUI element if possible.
     */
    focus(this: void): void

    /**
     * Forces this frame to re-auto-center. Only works on frames stored directly in {@link LuaGui::screen | LuaGui::screen}.
     * @remarks
     * Applies to subclasses: frame
     *
     */
    force_auto_center(this: void): void

    /**
     * Gets the index that this element has in its parent element.
     * @remarks
     * This iterates through the children of the parent of this element, meaning this has a non-free cost to get, but is faster than doing the equivalent in Lua.
     *
     */
    get_index_in_parent(this: void): number

    /**
     * Gets the item at the given index from this dropdown or listbox.
     * @param index - The index to get
     */
    get_item(this: void,
        index: number): LocalisedString

    /**
     * The mod that owns this Gui element or `nil` if it's owned by the scenario script.
     * @remarks
     * This has a not-super-expensive, but non-free cost to get.
     *
     */
    get_mod(this: void): string

    /**
     * Returns whether this slider only allows being moved to discrete positions.
     */
    get_slider_discrete_slider(this: void): boolean

    /**
     * Returns whether this slider only allows discrete values.
     */
    get_slider_discrete_values(this: void): boolean

    /**
     * Gets this sliders maximum value.
     */
    get_slider_maximum(this: void): number

    /**
     * Gets this sliders minimum value.
     */
    get_slider_minimum(this: void): number

    /**
     * Gets the minimum distance this slider can move.
     */
    get_slider_value_step(this: void): number

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Removes the item at the given index from this dropdown or listbox.
     * @param index - The index
     */
    remove_item(this: void,
        index: number): void

    /**
     * Removes the given tab and its associated content from this tabbed pane.
     * @remarks
     * Removing a tab does not destroy the tab or the tab contents. It just removes them from the view.
     * When removing tabs, {@link LuaGuiElement::selected_tab_index | LuaGuiElement::selected_tab_index} needs to be manually updated.
     * Applies to subclasses: tabbed-pane
     *
     * @param tab - The tab to remove. If not given, it removes all tabs.
     */
    remove_tab(this: void,
        tab: LuaGuiElement): void

    /**
     * Scrolls this scroll bar to the bottom.
     * @remarks
     * Applies to subclasses: scroll-pane,text-box
     *
     */
    scroll_to_bottom(this: void): void

    /**
     * Scrolls this scroll bar such that the specified GUI element is visible to the player.
     * @remarks
     * Applies to subclasses: scroll-pane
     *
     * @param element - The element to scroll to.
     * @param scroll_mode - Where the element should be positioned in the scroll-pane. Must be either `"in-view"` or `"top-third"`. Defaults to `"in-view"`.
     */
    scroll_to_element(this: void,
        element: LuaGuiElement,
        scroll_mode?: string): void

    /**
     * Scrolls the scroll bar such that the specified listbox item is visible to the player.
     * @remarks
     * Applies to subclasses: list-box
     *
     * @param index - The item index to scroll to.
     * @param scroll_mode - Where the item should be positioned in the scroll-pane. Must be either `"in-view"` or `"top-third"`. Defaults to `"in-view"`.
     */
    scroll_to_item(this: void,
        index: number,
        scroll_mode?: string): void

    /**
     * Scrolls this scroll bar to the left.
     * @remarks
     * Applies to subclasses: scroll-pane,text-box
     *
     */
    scroll_to_left(this: void): void

    /**
     * Scrolls this scroll bar to the right.
     * @remarks
     * Applies to subclasses: scroll-pane,text-box
     *
     */
    scroll_to_right(this: void): void

    /**
     * Scrolls this scroll bar to the top.
     * @remarks
     * Applies to subclasses: scroll-pane,text-box
     *
     */
    scroll_to_top(this: void): void

    /**
     * Selects a range of text in this textbox.
     * @remarks
     * Applies to subclasses: textfield,text-box
     *
     * @param end - The index of the last character to select
     * @param start - The index of the first character to select
     * @example
     * Select the characters `amp` from `example`: 
     * ```
     * textbox.select(3, 5)
     * ```
     *
     * @example
     * Move the cursor to the start of the text box: 
     * ```
     * textbox.select(1, 0)
     * ```
     *
     */
    select(this: void,
        start: number,
        end: number): void

    /**
     * Selects all the text in this textbox.
     * @remarks
     * Applies to subclasses: textfield,text-box
     *
     */
    select_all(this: void): void

    /**
     * Sets the given string at the given index in this dropdown or listbox.
     * @param index - The index whose text to replace.
     * @param string - The text to set at the given index.
     */
    set_item(this: void,
        index: number,
        string: LocalisedString): void

    /**
     * Sets whether this slider only allows being moved to discrete positions.
     */
    set_slider_discrete_slider(this: void,
        value: boolean): void

    /**
     * Sets whether this slider only allows discrete values.
     */
    set_slider_discrete_values(this: void,
        value: boolean): void

    /**
     * Sets this sliders minimum and maximum values.
     * @remarks
     * The minimum can't be >= the maximum.
     *
     */
    set_slider_minimum_maximum(this: void,
        minimum: number,
        maximum: number): void

    /**
     * Sets the minimum distance this slider can move.
     * @remarks
     * The minimum distance can't be > (max - min).
     *
     */
    set_slider_value_step(this: void,
        value: number): void

    /**
     * Swaps the children at the given indices in this element.
     * @param index_1 - The index of the first child.
     * @param index_2 - The index of the second child.
     */
    swap_children(this: void,
        index_1: number,
        index_2: number): void

    /**
     * Whether this textfield (when in numeric mode) allows decimal numbers.
     * @remarks
     * Applies to subclasses: textfield
     *
     */
    allow_decimal: boolean

    /**
     * Whether this textfield (when in numeric mode) allows negative numbers.
     * @remarks
     * Applies to subclasses: textfield
     *
     */
    allow_negative: boolean

    /**
     * Whether the `"none"` state is allowed for this switch.
     * @remarks
     * This can't be set to false if the current switch_state is 'none'.
     * Applies to subclasses: switch
     *
     */
    allow_none_state: boolean

    /**
     * Sets the anchor for this relative widget. Setting `nil` clears the anchor.
     */
    anchor: GuiAnchor

    /**
     * Whether this frame auto-centers on window resize when stored in {@link LuaGui::screen | LuaGui::screen}.
     * @remarks
     * Applies to subclasses: frame
     *
     */
    auto_center: boolean

    /**
     * The text to display after the normal tab text (designed to work with numbers)
     * @remarks
     * Applies to subclasses: tab
     *
     */
    badge_text: LocalisedString

    /**
     * The text displayed on this element. For frames, this is the "heading". For other elements, like buttons or labels, this is the content.
     * @remarks
     * Whilst this attribute may be used on all elements without producing an error, it doesn't make sense for tables and flows as they won't display it.
     *
     */
    caption: LocalisedString

    /**
     * The child-elements of this GUI element.
     */
    readonly children: LuaGuiElement[]

    /**
     * Names of all the children of this element. These are the identifiers that can be used to access the child as an attribute of this element.
     */
    readonly children_names: string[]

    /**
     * Makes it so right-clicking on this textfield clears and focuses it.
     * @remarks
     * Applies to subclasses: textfield,text-box
     *
     */
    clear_and_focus_on_right_click: boolean

    /**
     * The image to display on this sprite-button when it is clicked.
     */
    clicked_sprite: SpritePath

    /**
     * The number of columns in this table.
     * @remarks
     * Applies to subclasses: table
     *
     */
    readonly column_count: number

    /**
     * Direction of this element's layout. May be either `"horizontal"` or `"vertical"`.
     * @remarks
     * Applies to subclasses: frame,flow,line
     *
     */
    readonly direction: string

    /**
     * The frame drag target for this flow, frame, label, table, or empty-widget.
     * @remarks
     * drag_target can only be set to a frame stored directly in {@link LuaGui::screen | LuaGui::screen} or `nil`.
     * drag_target can only be set on child elements in {@link LuaGui::screen | LuaGui::screen}.
     * drag_target can only be set to a higher level parent element (this element must be owned at some nested level by the drag_target).
     *
     */
    drag_target: LuaGuiElement

    /**
     * Whether this table should draw a horizontal grid line below the first table row.
     * @remarks
     * Applies to subclasses: table
     *
     */
    draw_horizontal_line_after_headers: boolean

    /**
     * Whether this table should draw horizontal grid lines.
     * @remarks
     * Applies to subclasses: table
     *
     */
    draw_horizontal_lines: boolean

    /**
     * Whether this table should draw vertical grid lines.
     * @remarks
     * Applies to subclasses: table
     *
     */
    draw_vertical_lines: boolean

    /**
     * The elem filters of this choose-elem-button or `nil` if there are no filters.
     * The compatible type of filter is determined by elem_type:
     * - Type `"item"` - {@link ItemPrototypeFilter | ItemPrototypeFilter}
     * - Type `"tile"` - {@link TilePrototypeFilter | TilePrototypeFilter}
     * - Type `"entity"` - {@link EntityPrototypeFilter | EntityPrototypeFilter}
     * - Type `"signal"` - Does not support filters
     * - Type `"fluid"` - {@link FluidPrototypeFilter | FluidPrototypeFilter}
     * - Type `"recipe"` - {@link RecipePrototypeFilter | RecipePrototypeFilter}
     * - Type `"decorative"` - {@link DecorativePrototypeFilter | DecorativePrototypeFilter}
     * - Type `"item-group"` - Does not support filters
     * - Type `"achievement"` - {@link AchievementPrototypeFilter | AchievementPrototypeFilter}
     * - Type `"equipment"` - {@link EquipmentPrototypeFilter | EquipmentPrototypeFilter}
     * - Type `"technology"` - {@link TechnologyPrototypeFilter | TechnologyPrototypeFilter}
     * @remarks
     * Writing to this field does not change or clear the currently selected element.
     * Applies to subclasses: choose-elem-button
     *
     * @example
     * This will configure a choose-elem-button of type `"entity"` to only show items of type `"furnace"`. 
     * ```
     * button.elem_filters = {{filter = "type", type = "furnace"}}
     * ```
     *
     * @example
     * Then, there are some types of filters that work on a specific kind of attribute. The following will configure a choose-elem-button of type `"entity"` to only show entities that have their `"hidden"` [flags](EntityPrototypeFlags) set. 
     * ```
     * button.elem_filters = {{filter = "hidden"}}
     * ```
     *
     * @example
     * Lastly, these filters can be combined at will, taking care to specify how they should be combined (either `"and"` or `"or"`. The following will filter for any `"entities"` that are `"furnaces"` and that are not `"hidden"`. 
     * ```
     * button.elem_filters = {{filter = "type", type = "furnace"}, {filter = "hidden", invert = true, mode = "and"}}
     * ```
     *
     */
    elem_filters: ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter[]

    /**
     * The elem type of this choose-elem-button.
     * @remarks
     * Applies to subclasses: choose-elem-button
     *
     */
    readonly elem_type: string

    /**
     * The elem value of this choose-elem-button or `nil` if there is no value.
     * @remarks
     * The `"signal"` type operates with {@link SignalID | SignalID}, while all other types use strings.
     * Applies to subclasses: choose-elem-button
     *
     */
    elem_value: string | SignalID

    /**
     * Whether this GUI element is enabled. Disabled GUI elements don't trigger events when clicked.
     */
    enabled: boolean

    /**
     * The entity associated with this entity-preview, camera, minimap or `nil` if no entity is associated.
     */
    entity: LuaEntity

    /**
     * The force this minimap is using or `nil` if no force is set.
     */
    force: string

    /**
     * The GUI this element is a child of.
     */
    readonly gui: LuaGui

    /**
     * Policy of the horizontal scroll bar. Possible values are `"auto"`, `"never"`, `"always"`, `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`.
     * @remarks
     * Applies to subclasses: scroll-pane
     *
     */
    horizontal_scroll_policy: string

    /**
     * The image to display on this sprite-button when it is hovered.
     * @remarks
     * Applies to subclasses: sprite-button
     *
     */
    hovered_sprite: SpritePath

    /**
     * Whether this GUI element is ignored by interaction. This makes clicks on this element 'go through' to the GUI element or even the game surface below it.
     */
    ignored_by_interaction: boolean

    /**
     * The index of this GUI element (unique amongst the GUI elements of a LuaPlayer).
     */
    readonly index: number

    /**
     * Whether this textfield displays as a password field, which renders all characters as `*`.
     * @remarks
     * Applies to subclasses: textfield
     *
     */
    is_password: boolean

    /**
     * The items in this dropdown or listbox.
     */
    items: LocalisedString[]

    /**
     * The text shown for the left switch label.
     * @remarks
     * Applies to subclasses: switch
     *
     */
    left_label_caption: LocalisedString

    /**
     * The tooltip shown on the left switch label.
     * @remarks
     * Applies to subclasses: switch
     *
     */
    left_label_tooltip: LocalisedString

    /**
     * The location of this widget when stored in {@link LuaGui::screen | LuaGui::screen}, or `nil` if not set or not in {@link LuaGui::screen | LuaGui::screen}.
     */
    location: GuiLocation

    /**
     * Whether this choose-elem-button can be changed by the player.
     * @remarks
     * Applies to subclasses: choose-elem-button
     *
     */
    locked: boolean

    /**
     * Whether this textfield loses focus after {@link defines.events.on_gui_confirmed | defines.events.on_gui_confirmed} is fired.
     * @remarks
     * Applies to subclasses: textfield
     *
     */
    lose_focus_on_confirm: boolean

    /**
     * The player index this minimap is using.
     * @remarks
     * Applies to subclasses: minimap
     *
     */
    minimap_player_index: number

    /**
     * The mouse button filters for this button or sprite-button.
     */
    mouse_button_filter: MouseButtonFlags

    /**
     * The name of this element.
     * @example
     * ```
     * game.player.gui.top.greeting.name == "greeting"
     * ```
     *
     */
    name: string

    /**
     * The number to be shown in the bottom right corner of this sprite-button. Set this to `nil` to show nothing.
     */
    number: number

    /**
     * Whether this textfield is limited to only numberic characters.
     * @remarks
     * Applies to subclasses: textfield
     *
     */
    numeric: boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The direct parent of this element; `nil` if this is a top-level element.
     */
    readonly parent: LuaGuiElement

    /**
     * Index into {@link LuaGameScript::players | LuaGameScript::players} specifying the player who owns this element.
     */
    readonly player_index: number

    /**
     * The position this camera or minimap is focused on, if any.
     */
    position: Position

    /**
     * Whether this text-box is read-only. Defaults to `false`.
     * @remarks
     * Applies to subclasses: text-box
     *
     */
    read_only: boolean

    /**
     * Whether the image widget should resize according to the sprite in it. Defaults to `true`.
     */
    resize_to_sprite: boolean

    /**
     * The text shown for the right switch label.
     * @remarks
     * Applies to subclasses: switch
     *
     */
    right_label_caption: LocalisedString

    /**
     * The tooltip shown on the right switch label.
     * @remarks
     * Applies to subclasses: switch
     *
     */
    right_label_tooltip: LocalisedString

    /**
     * Whether the contents of this text-box are selectable. Defaults to `true`.
     * @remarks
     * Applies to subclasses: text-box
     *
     */
    selectable: boolean

    /**
     * The selected index for this dropdown or listbox. Returns `0` if none is selected.
     */
    selected_index: number

    /**
     * The selected tab index for this tabbed pane or `nil` if no tab is selected.
     * @remarks
     * Applies to subclasses: tabbed-pane
     *
     */
    selected_tab_index: number

    /**
     * Related to the number to be shown in the bottom right corner of this sprite-button. When set to `true`, numbers that are non-zero and smaller than one are shown as a percentage rather than the value. For example, `0.5` will be shown as `50%` instead.
     */
    show_percent_for_small_numbers: boolean

    /**
     * The value of this slider element.
     * @remarks
     * Applies to subclasses: slider
     *
     */
    slider_value: number

    /**
     * The image to display on this sprite-button or sprite in the default state.
     */
    sprite: SpritePath

    /**
     * Is this checkbox or radiobutton checked?
     * @remarks
     * Applies to subclasses: CheckBox,RadioButton
     *
     */
    state: boolean

    /**
     * The style of this element. When read, this evaluates to a {@link LuaStyle | LuaStyle}. For writing, it only accepts a string that specifies the textual identifier (prototype name) of the desired style.
     */
    style: LuaStyle | string

    /**
     * The surface index this camera or minimap is using.
     */
    surface_index: number

    /**
     * The switch state (left, none, right) for this switch.
     * @remarks
     * If {@link LuaGuiElement::allow_none_state | LuaGuiElement::allow_none_state} is false this can't be set to `"none"`.
     * Applies to subclasses: switch
     *
     */
    switch_state: string

    /**
     * The tabs and contents being shown in this tabbed-pane.
     */
    readonly tabs: TabAndContent[]

    /**
     * The tags associated with this LuaGuiElement.
     */
    tags: Tags

    /**
     * The text contained in this textfield or text-box.
     * @remarks
     * Applies to subclasses: textfield,text-box
     *
     */
    text: string

    tooltip: LocalisedString

    /**
     * The type of this GUI element.
     */
    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * How much this progress bar is filled. It is a value in the range [0, 1].
     * @remarks
     * Applies to subclasses: progressbar
     *
     */
    value: number

    /**
     * Whether the content of this table should be vertically centered. Overrides {@link LuaStyle::column_alignments | LuaStyle::column_alignments}. Defaults to `true`.
     * @remarks
     * Applies to subclasses: table
     *
     */
    vertical_centering: boolean

    /**
     * Policy of the vertical scroll bar. Possible values are `"auto"`, `"never"`, `"always"`, `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`.
     * @remarks
     * Applies to subclasses: scroll-pane
     *
     */
    vertical_scroll_policy: string

    /**
     * Sets whether this GUI element is visible or completely hidden, taking no space in the layout.
     */
    visible: boolean

    /**
     * Whether this text-box will word-wrap automatically. Defaults to `false`.
     * @remarks
     * Applies to subclasses: text-box
     *
     */
    word_wrap: boolean

    /**
     * The zoom this camera or minimap is using.
     */
    zoom: number

    /**
     * The indexing operator. Gets children by name.
     * @remarks
     * This will return a {@link LuaGuiElement | LuaGuiElement}. The return type is any due to typescript limitations.
     *
     */
    readonly [key: string]: any

}

/**
 * Prototype of a heat energy source.
 */
interface LuaHeatEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly connections: HeatConnection[]

    readonly default_temperature: number

    readonly emissions: number

    readonly max_temperature: number

    readonly max_transfer: number

    readonly min_temperature_gradient: number

    readonly min_working_temperature: number

    readonly minimum_glow_temperature: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly render_no_network_icon: boolean

    readonly render_no_power_icon: boolean

    readonly specific_heat: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for inserters.
 */
interface LuaInserterControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The hand read mode for the inserter.
     */
    circuit_hand_read_mode: defines.control_behavior.inserter.hand_read_mode

    /**
     * The circuit mode of operations for the inserter.
     */
    circuit_mode_of_operation: defines.control_behavior.inserter.circuit_mode_of_operation

    /**
     * `true` if the contents of the inserter hand should be sent to the circuit network
     */
    circuit_read_hand_contents: boolean

    /**
     * If the stack size of the inserter is set through the circuit network or not.
     */
    circuit_set_stack_size: boolean

    /**
     * The signal used to set the stack size of the inserter.
     */
    circuit_stack_control_signal: SignalID

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A storage of item stacks.
 */
interface LuaInventory {
    /**
     * Can at least some items be inserted?
     * @param items - Items that would be inserted.
     * @returns `true` if at least a part of the given items could be inserted into this inventory.
     */
    can_insert(this: void,
        items: ItemStackIdentification): boolean

    /**
     * If the given inventory slot filter can be set to the given filter.
     * @param filter - The item name of the filter
     * @param index - The item stack index
     */
    can_set_filter(this: void,
        index: number,
        filter: string): boolean

    /**
     * Make this inventory empty.
     */
    clear(this: void): void

    /**
     * Counts the number of empty stacks.
     * @param include_filtered - If true, filtered slots will be included. Defaults to false.
     */
    count_empty_stacks(this: void,
        include_filtered?: boolean): number

    /**
     * Destroys this inventory.
     * @remarks
     * Only inventories created by {@link LuaGameScript::create_inventory | LuaGameScript::create_inventory} can be destroyed this way.
     *
     */
    destroy(this: void): void

    /**
     * Finds the first empty stack. Filtered slots are excluded unless a filter item is given.
     * @remarks
     * This will also return the stack index if one is found that matches as a second return value.
     *
     * @param item - If given, empty stacks that are filtered for this item will be included.
     * @returns The first empty stack, or `nil` if there aren't any empty stacks.
     */
    find_empty_stack(this: void,
        item?: string): LuaItemStack | null

    /**
     * Gets the first LuaItemStack in the inventory that matches the given item name.
     * @remarks
     * This will also return the stack index if one is found that matches as a second return value.
     *
     * @param item - The item name to find
     * @returns The first matching stack, or `nil` if none match.
     */
    find_item_stack(this: void,
        item: string): LuaItemStack | null

    /**
     * Get the current bar. This is the index at which the red area starts.
     * @remarks
     * Only useable if this inventory supports having a bar.
     *
     */
    get_bar(this: void): number

    /**
     * Get counts of all items in this inventory.
     * @returns The counts, indexed by item names.
     */
    get_contents(this: void): {[key: string]: number}

    /**
     * Gets the filter for the given item stack index.
     * @param index - The item stack index
     * @returns The current filter or nil if none.
     */
    get_filter(this: void,
        index: number): string | null

    /**
     * Gets the number of the given item that can be inserted into this inventory.
     * @remarks
     * This is a "best guess" number; things like assembling machine filtered slots, module slots, items with durability, and items with mixed health will cause the result to be inaccurate.
     * The main use for this is in checking how many of a basic item can fit into a basic inventory.
     * This accounts for the 'bar' on the inventory.
     *
     * @param item - The item to check.
     */
    get_insertable_count(this: void,
        item: string): void

    /**
     * Get the number of all or some items in this inventory.
     * @param item - Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(this: void,
        item?: string): number

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Insert items into this inventory.
     * @param items - Items to insert.
     * @returns Number of items actually inserted.
     */
    insert(this: void,
        items: ItemStackIdentification): number

    /**
     * Does this inventory contain nothing?
     */
    is_empty(this: void): boolean

    /**
     * If this inventory supports filters and has at least 1 filter set.
     */
    is_filtered(this: void): boolean

    /**
     * Remove items from this inventory.
     * @param items - Items to remove.
     * @returns Number of items actually removed.
     */
    remove(this: void,
        items: ItemStackIdentification): number

    /**
     * Resizes the inventory.
     * @remarks
     * Items in slots beyond the new capacity are deleted.
     * Only inventories created by {@link LuaGameScript::create_inventory | LuaGameScript::create_inventory} can be resized.
     *
     * @param size - New size of a inventory
     */
    resize(this: void,
        size: number): void

    /**
     * Set the current bar.
     * @remarks
     * Only useable if this inventory supports having a bar.
     *
     * @param bar - The new limit. Omitting this parameter will clear the limit.
     */
    set_bar(this: void,
        bar?: number): void

    /**
     * Sets the filter for the given item stack index.
     * @remarks
     * Some inventory slots don't allow some filters (gun ammo can't be filtered for non-ammo).
     *
     * @param filter - The new filter or nil to erase the filter
     * @param index - The item stack index
     * @returns If the filter was allowed to be set.
     */
    set_filter(this: void,
        index: number,
        filter: string): boolean

    /**
     * Sorts and merges the items in this inventory.
     */
    sort_and_merge(this: void): void

    /**
     * Does this inventory support a bar? Bar is the draggable red thing, found for example on chests, that limits the portion of the inventory that may be manipulated by machines.
     * @remarks
     * "Supporting a bar" doesn't mean that the bar is set to some nontrivial value. Supporting a bar means the inventory supports having this limit at all. The character's inventory is an example of an inventory without a bar; the wooden chest's inventory is an example of one with a bar.
     *
     */
    supports_bar(this: void): boolean

    /**
     * If this inventory supports filters.
     */
    supports_filters(this: void): boolean

    /**
     * The entity that owns this inventory or `nil` if this isn't owned by an entity.
     */
    readonly entity_owner: LuaEntity

    /**
     * The equipment that owns this inventory or `nil` if this isn't owned by an equipment.
     */
    readonly equipment_owner: LuaEquipment

    /**
     * The inventory index this inventory uses, or `nil` if the inventory doesn't have an index.
     */
    readonly index: defines.inventory

    /**
     * The mod that owns this inventory or `nil` if this isn't owned by a mod.
     */
    readonly mod_owner: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The player that owns this inventory or `nil` if this isn't owned by a player.
     */
    readonly player_owner: LuaPlayer

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The indexing operator.
     * @remarks
     * This will return a {@link LuaItemStack | LuaItemStack}. The return type is any due to typescript limitations.
     *
     * @example
     * Will get the first item in the player's inventory. 
     * ```
     * game.player.get_main_inventory()[1]
     * ```
     *
     */
    readonly [key: string]: any

    /**
     * Get the number of slots in this inventory.
     * @example
     * Will print the number of slots in the player's main inventory. 
     * ```
     * game.player.print(#game.player.get_main_inventory())
     * ```
     *
     */
    readonly '#': number

}

/**
 * Prototype of an item.
 * @example
 * ```
 * game.item_prototypes["iron-plate"]
 * ```
 *
 */
interface LuaItemPrototype {
    /**
     * Type of this ammo prototype or `nil` if this is not an ammo prototype.
     * @param ammo_source_type - "default", "player", "turret", or "vehicle"
     */
    get_ammo_type(this: void,
        ammo_source_type?: string): AmmoType

    /**
     * Test whether this item prototype has a certain flag set.
     * @param flag - The flag to test. See [ItemPrototypeFlags](ItemPrototypeFlags) for a list of flags.
     * @returns `true` if this prototype has the given flag set.
     */
    has_flag(this: void,
        flag: string): boolean

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The alt entity filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_entity_filter_mode: string

    /**
     * The alt entity filters used by this selection tool indexed by entity name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_entity_filters: {[key: string]: LuaEntityPrototype}

    /**
     * The alt entity type filters used by this selection tool indexed by entity type.
     * @remarks
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_entity_type_filters: {[key: string]: boolean}

    /**
     * The color used when doing alt selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_selection_border_color: Color

    /**
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_selection_cursor_box_type: string

    /**
     * Flags that affect which entities will be selected during alternate selection.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_selection_mode_flags: SelectionModeFlags

    /**
     * The alt tile filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_tile_filter_mode: string

    /**
     * The alt tile filters used by this selection tool indexed by tile name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_tile_filters: {[key: string]: LuaTilePrototype}

    /**
     * If tiles area always included when doing selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly always_include_tiles: boolean

    /**
     * The gun attack parameters or `nil` if not a gun item prototype.
     */
    readonly attack_parameters: AttackParameters

    /**
     * The result of burning this item as fuel or `nil`.
     */
    readonly burnt_result: LuaItemPrototype

    /**
     * If this item can be mod-opened.
     */
    readonly can_be_mod_opened: boolean

    /**
     * The capsule action for this capsule item prototype or `nil` if this isn't a capsule item prototype.
     */
    readonly capsule_action: CapsuleAction

    /**
     * The name of a {@link LuaModuleCategoryPrototype | LuaModuleCategoryPrototype}. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly category: string

    /**
     * The curved rail prototype used for this rail planner prototype.
     * @remarks
     * Applies to subclasses: RailPlanner
     *
     */
    readonly curved_rail: LuaEntityPrototype

    /**
     * The default label color used for this item with label. `nil` if not defined or if this isn't an item with label.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    readonly default_label_color: Color

    /**
     * The default request value.
     */
    readonly default_request_amount: number

    /**
     * If true, and this item with label has a label it is drawn in place of the normal number when held in the cursor.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    readonly draw_label_for_cursor_render: boolean

    /**
     * The durability of this tool item or `nil` if not a tool item.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     */
    readonly durability: number

    /**
     * The durability message key used when displaying the durability of this tool.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     */
    readonly durability_description_key: string

    /**
     * The entity filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly entity_filter_mode: string

    /**
     * The number of entity filters this deconstruction item has or `nil` if this isn't a deconstruction item prototype.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    readonly entity_filter_slots: number

    /**
     * The entity filters used by this selection tool indexed by entity name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly entity_filters: {[key: string]: LuaEntityPrototype}

    /**
     * The entity type filters used by this selection tool indexed by entity type.
     * @remarks
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     * Applies to subclasses: SelectionTool
     *
     */
    readonly entity_type_filters: {[key: string]: boolean}

    /**
     * The prototype of this armor equipment grid or `nil` if none or this is not an armor item.
     */
    readonly equipment_grid: LuaEquipmentGridPrototype

    /**
     * If this item with inventory extends the inventory it resides in by default.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly extend_inventory_by_default: boolean

    /**
     * The filter mode used by this item with inventory.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly filter_mode: string

    /**
     * The flags for this item prototype.
     */
    readonly flags: ItemPrototypeFlags

    /**
     * The acceleration multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_acceleration_multiplier: number

    /**
     * The fuel category or `nil`.
     */
    readonly fuel_category: string

    /**
     * The emissions multiplier if this is used as fuel.
     */
    readonly fuel_emissions_multiplier: number

    /**
     * The fuel top speed multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_top_speed_multiplier: number

    /**
     * Fuel value when burned.
     */
    readonly fuel_value: number

    /**
     * The group this prototype belongs to.
     */
    readonly group: LuaGroup

    /**
     * If this tool item has infinite durability. `nil` if not a tool type item.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     */
    readonly infinite: boolean

    /**
     * The insertion priority mode used by this item with inventory.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly insertion_priority_mode: string

    /**
     * The main inventory size for item-with-inventory-prototype. `nil` if not an item-with-inventory-prototype.
     * @remarks
     * Applies to subclasses: ItemWithInventoryPrototype
     *
     */
    readonly inventory_size: number

    /**
     * The inventory size bonus for this armor prototype. `nil` if this isn't an armor prototype.
     * @remarks
     * Applies to subclasses: ArmorPrototype
     *
     */
    readonly inventory_size_bonus: number

    /**
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly item_filters: {[key: string]: LuaItemPrototype}

    /**
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly item_group_filters: {[key: string]: LuaGroup}

    /**
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly item_subgroup_filters: {[key: string]: LuaGroup}

    /**
     * The limitation message key used when the player attempts to use this modules in some place it's not allowed.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly limitation_message_key: string

    /**
     * An array of recipe names this module is allowed to work with. Empty when all recipes are allowed.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly limitations: string[]

    readonly localised_description: LocalisedString

    /**
     * The localised string used when the player attempts to put items into this item with inventory that aren't allowed.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly localised_filter_message: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Size of full magazine; `nil` if this is not an ammo item.
     */
    readonly magazine_size: number

    /**
     * How many filters an upgrade item has. `nil` if not a upgrade item.
     * @remarks
     * Applies to subclasses: UpgradeItem
     *
     */
    readonly mapper_count: number

    /**
     * Effects of this module; `nil` if this is not a module.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly module_effects: ModuleEffects

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string.
     */
    readonly order: string

    /**
     * Prototype of the equipment that will be created by placing this item in an equipment grid or `nil` if there is no equipment defined.
     */
    readonly place_as_equipment_result: LuaEquipmentPrototype

    /**
     * The place-as-tile result if one is defined, else `nil`.
     */
    readonly place_as_tile_result: PlaceAsTileResult

    /**
     * Prototype of the entity that will be created by placing this item, or `nil` if there is no such entity.
     */
    readonly place_result: LuaEntityPrototype

    /**
     * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine or `nil` if this is not an ammo item.
     */
    readonly reload_time: number

    /**
     * The repair result of this repair tool prototype or `nil` if this isn't a repair tool prototype.
     * @remarks
     * Applies to subclasses: RepairTool
     *
     */
    readonly repair_result: TriggerItem[]

    /**
     * Resistances of this armour item, indexed by damage type name. `nil` if not an armor or the armor has no resistances.
     */
    readonly resistances: {[key: string]: Resistance}

    /**
     * The results from launching this item in a rocket.
     */
    readonly rocket_launch_products: Product[]

    /**
     * The color used when doing normal selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly selection_border_color: Color

    /**
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly selection_cursor_box_type: string

    /**
     * Flags that affect which entities will be selected.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly selection_mode_flags: SelectionModeFlags

    /**
     * The repairing speed if this is a repairing tool; otherwise `nil`.
     */
    readonly speed: number

    /**
     * Maximum stack size of the item specified by this prototype.
     */
    readonly stack_size: number

    /**
     * Is this item allowed to stack at all?
     */
    readonly stackable: boolean

    /**
     * The straight rail prototype used for this rail planner prototype.
     * @remarks
     * Applies to subclasses: RailPlanner
     *
     */
    readonly straight_rail: LuaEntityPrototype

    /**
     * The subgroup this prototype belongs to.
     */
    readonly subgroup: LuaGroup

    /**
     * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly tier: number

    /**
     * The tile filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly tile_filter_mode: string

    /**
     * The number of tile filters this deconstruction item has or `nil` if this isn't a deconstruction item prototype.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    readonly tile_filter_slots: number

    /**
     * The tile filters used by this selection tool indexed by tile name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly tile_filters: {[key: string]: LuaTilePrototype}

    /**
     * Type of this prototype. E.g. `"gun"` or `"mining-tool"`.
     */
    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The number of items needed to connect 2 entities with this as wire.
     */
    readonly wire_count: number

}

/**
 * A reference to an item and count owned by some external entity.
 * @remarks
 * In most instances this is a simple reference as in: it points at a specific slot in an inventory and not the item in the slot.
 * In the instance this references an item on a {@link LuaTransportLine | LuaTransportLine} the reference is only guaranteed to stay valid (and refer to the same item) as long as nothing changes the transport line.
 *
 */
interface LuaItemStack {
    /**
     * Add ammo to this ammo item.
     * @remarks
     * Applies to subclasses: AmmoItem
     *
     * @param amount - Amount of ammo to add.
     */
    add_ammo(this: void,
        amount: number): void

    /**
     * Add durability to this tool item.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     * @param amount - Amount of durability to add.
     */
    add_durability(this: void,
        amount: number): void

    /**
     * @remarks
     * Built entities can be come invalid between the building of the blueprint and the function returning if by_player or raise_built is used and one of those events invalidates the entity.
     *
     * @param table.by_player - The player to use if any. If provided [defines.events.on_built_entity](defines.events.on_built_entity) will also be fired on successful entity creation.
     * @param table.direction - The direction to use when building
     * @param table.force - Force to use for the building
     * @param table.force_build - When true, anything that can be built is else nothing is built if any one thing can't be built
     * @param table.position - The position to build at
     * @param table.raise_built - If true; [defines.events.script_raised_built](defines.events.script_raised_built) will be fired on successful entity creation. Note: this is ignored if by_player is provided.
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     * @param table.surface - Surface to build on
     * @returns Array of created ghosts
     */
    build_blueprint(this: void,
        table: {
            surface: SurfaceIdentification,
            force: ForceIdentification,
            position: Position,
            force_build?: boolean,
            direction?: defines.direction,
            skip_fog_of_war?: boolean,
            by_player?: PlayerIdentification,
            raise_built?: boolean
        }): LuaEntity[]

    /**
     * Would a call to {@link LuaItemStack::set_stack | LuaItemStack::set_stack} succeed?
     * @param stack - Stack that would be set, possibly `nil`.
     */
    can_set_stack(this: void,
        stack?: ItemStackIdentification): boolean

    /**
     * Cancel deconstruct the given area with this deconstruction item.
     * @param table.area - The area to deconstruct
     * @param table.by_player - The player to use if any.
     * @param table.force - Force to use for canceling deconstruction
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     * @param table.surface - Surface to cancel deconstruct on
     */
    cancel_deconstruct_area(this: void,
        table: {
            surface: SurfaceIdentification,
            force: ForceIdentification,
            area: BoundingBox,
            skip_fog_of_war?: boolean,
            by_player?: PlayerIdentification
        }): void

    /**
     * Clear this item stack.
     */
    clear(this: void): void

    /**
     * Clears this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    clear_blueprint(this: void): void

    /**
     * Clears all settings/filters on this deconstruction item resetting it to default values.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    clear_deconstruction_item(this: void): void

    /**
     * Clears all settings/filters on this upgrade item resetting it to default values.
     * @remarks
     * Applies to subclasses: UpgradeItem
     *
     */
    clear_upgrade_item(this: void): void

    /**
     * Sets up this blueprint using the found blueprintable entities/tiles on the surface.
     * @param table.always_include_tiles - When true, blueprintable tiles are always included in the blueprint. When false they're only included if no entities exist in the setup area.
     * @param table.area - The bounding box
     * @param table.force - Force to use for the creation
     * @param table.include_entities - When true, entities are included in the blueprint. Defaults to true.
     * @param table.include_fuel - When true, train fuel is included in the blueprint, Defaults to true.
     * @param table.include_modules - When true, modules are included in the blueprint. Defaults to true.
     * @param table.include_station_names - When true, station names are included in the blueprint. Defaults to false.
     * @param table.include_trains - When true, trains are included in the blueprint. Defaults to false.
     * @param table.surface - Surface to create from
     * @returns The blueprint entity index to source entity mapping.
     */
    create_blueprint(this: void,
        table: {
            surface: SurfaceIdentification,
            force: ForceIdentification,
            area: BoundingBox,
            always_include_tiles?: boolean,
            include_entities?: boolean,
            include_modules?: boolean,
            include_station_names?: boolean,
            include_trains?: boolean,
            include_fuel?: boolean
        }): {[key: number]: LuaEntity}

    /**
     * Creates the equipment grid for this item if it doesn't exist and this is an item-with-entity-data that supports equipment grids.
     * @remarks
     * Applies to subclasses: ItemWithEntityData
     *
     */
    create_grid(this: void): LuaEquipmentGrid

    /**
     * Deconstruct the given area with this deconstruction item.
     * @param table.area - The area to deconstruct
     * @param table.by_player - The player to use if any.
     * @param table.force - Force to use for the deconstruction
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     * @param table.surface - Surface to deconstruct on
     */
    deconstruct_area(this: void,
        table: {
            surface: SurfaceIdentification,
            force: ForceIdentification,
            area: BoundingBox,
            skip_fog_of_war?: boolean,
            by_player?: PlayerIdentification
        }): void

    /**
     * Remove ammo from this ammo item.
     * @remarks
     * Applies to subclasses: AmmoItem
     *
     * @param amount - Amount of ammo to remove.
     */
    drain_ammo(this: void,
        amount: number): void

    /**
     * Remove durability from this tool item.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     * @param amount - Amount of durability to remove.
     */
    drain_durability(this: void,
        amount: number): void

    /**
     * Export a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) to a string.
     * @returns The exported string
     */
    export_stack(this: void): string

    /**
     * The entities in this blueprint.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_entities(this: void): BlueprintEntity[]

    /**
     * Gets the number of entities in this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_entity_count(this: void): number

    /**
     * Gets the given tag on the given blueprint entity index in this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     * @param index - The entity index.
     * @param tag - The tag to get.
     */
    get_blueprint_entity_tag(this: void,
        index: number,
        tag: string): AnyBasic

    /**
     * Gets the tags for the given blueprint entity index in this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_entity_tags(this: void,
        index: number): Tags

    /**
     * A list of the tiles in this blueprint.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_tiles(this: void): Tile[]

    /**
     * Gets the entity filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    get_entity_filter(this: void,
        index: number): string

    /**
     * Access the inner inventory of an item.
     * @param inventory - Index of the inventory to access -- currently can only be [defines.inventory.item_main](defines.inventory.item_main).
     * @returns or `nil` if there is no inventory with the given index.
     */
    get_inventory(this: void,
        inventory: defines.inventory): LuaInventory | null

    /**
     * Gets the filter at the given index for this upgrade item.
     * @remarks
     * Applies to subclasses: UpgradeItem
     *
     * @param index - The index of the mapper to read.
     * @param type - 'from' or 'to'.
     */
    get_mapper(this: void,
        index: number,
        type: string): UpgradeFilter

    /**
     * Gets the tag with the given name or returns `nil` if it doesn't exist.
     * @remarks
     * Applies to subclasses: ItemWithTags
     *
     */
    get_tag(this: void,
        tag_name: string): AnyBasic

    /**
     * Gets the tile filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    get_tile_filter(this: void,
        index: number): string

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Import a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) from a string.
     * @param data - The string to import
     * @returns 0 if the import succeeded with no errors. -1 if the import succeeded with errors. 1 if the import failed.
     */
    import_stack(this: void,
        data: string): number

    /**
     * Is this blueprint item setup? I.e. is it a non-empty blueprint?
     */
    is_blueprint_setup(this: void): boolean

    /**
     * Removes a tag with the given name.
     * @remarks
     * Applies to subclasses: ItemWithTags
     *
     * @returns If the tag existed and was removed.
     */
    remove_tag(this: void,
        tag: string): boolean

    /**
     * Set new entities to be a part of this blueprint.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     * @param entities - The new blueprint entities.
     */
    set_blueprint_entities(this: void,
        entities: BlueprintEntity[]): void

    /**
     * Sets the given tag on the given blueprint entity index in this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     * @param index - The entity index.
     * @param tag - The tag to set.
     * @param value - The tag value to set or `nil` to clear the tag.
     */
    set_blueprint_entity_tag(this: void,
        index: number,
        tag: string,
        value: AnyBasic): void

    /**
     * Sets the tags on the given blueprint entity index in this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     * @param index - The entity index
     */
    set_blueprint_entity_tags(this: void,
        index: number,
        tags: Tags): void

    /**
     * Set specific tiles in this blueprint.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     * @param tiles - Tiles to be a part of the blueprint.
     */
    set_blueprint_tiles(this: void,
        tiles: Tile[]): void

    /**
     * Sets the entity filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     * @param filter - Setting to nil erases the filter.
     * @returns If the new filter was set (was valid.)
     */
    set_entity_filter(this: void,
        index: number,
        filter: string | LuaEntityPrototype | LuaEntity): boolean

    /**
     * Sets the module filter at the given index for this upgrade item.
     * @remarks
     * Applies to subclasses: UpgradeItem
     *
     * @param filter - The filter to set or `nil`
     * @param index - The index of the mapper to set.
     * @param type - `from` or `to`.
     */
    set_mapper(this: void,
        index: number,
        type: string,
        filter: UpgradeFilter): void

    /**
     * Set this item stack to another item stack.
     * @param stack - Item stack to set this one to. Omitting this parameter or passing `nil` will clear this item stack, as if by calling [LuaItemStack::clear](LuaItemStack::clear).
     * @returns Was the stack set successfully?
     */
    set_stack(this: void,
        stack?: ItemStackIdentification): boolean

    /**
     * Sets the tag with the given name and value.
     * @remarks
     * Applies to subclasses: ItemWithTags
     *
     */
    set_tag(this: void,
        tag_name: string,
        tag: AnyBasic): AnyBasic

    /**
     * Sets the tile filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     * @param filter - Setting to nil erases the filter.
     * @returns If the new filter was set (was valid.)
     */
    set_tile_filter(this: void,
        index: number,
        filter: string | LuaTilePrototype | LuaTile): boolean

    /**
     * Swaps this item stack with the given item stack if allowed.
     * @returns if the 2 stacks were swapped successfully.
     */
    swap_stack(this: void,
        stack: LuaItemStack): boolean

    /**
     * Transfers the given item stack into this item stack.
     * @returns True if the full stack was transferred.
     */
    transfer_stack(this: void,
        stack: ItemStackIdentification): boolean

    /**
     * The active blueprint index for this blueprint book. May be `nil`.
     * @remarks
     * Applies to subclasses: BlueprintBookItem
     *
     */
    active_index: number

    /**
     * If the label for this item can be manually changed. When false the label can only be changed through the API.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    allow_manual_label_change: boolean

    /**
     * Number of bullets left in the magazine.
     * @remarks
     * Applies to subclasses: AmmoItem
     *
     */
    ammo: number

    /**
     * If absolute snapping is enabled on this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    blueprint_absolute_snapping: boolean

    /**
     * Icons of a blueprint item, blueprint book, deconstruction item or upgrade planner. An item that doesn't have icons returns nil on read and throws error on write.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    blueprint_icons: BlueprintSignalIcon[]

    /**
     * The offset from the absolute grid or nil if absolute snapping is not enabled.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    blueprint_position_relative_to_grid: Position

    /**
     * The snapping grid size in this blueprint item or nil if snapping is not enabled.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    blueprint_snap_to_grid: Position

    /**
     * If this item is a spidertron remote that has a spidertron bound to it, it returns the connected spider-vehicle entity, `nil` otherwise.
     */
    connected_entity: LuaEntity

    /**
     * Raw materials required to build this blueprint. Result is a dictionary mapping each item prototype name to the required count.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    readonly cost_to_build: {[key: string]: number}

    /**
     * Number of items in this stack.
     */
    count: number

    /**
     * The custom description this item-with-tags. This is shown over the normal item description if this is set to a non-empty value.
     */
    custom_description: LocalisedString

    /**
     * The default icons for a blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    readonly default_icons: BlueprintItemIcon[]

    /**
     * Durability of the contained item. Automatically capped at the item's maximum durability.
     * @remarks
     * When used on a non-tool item, the value of this attribute is `nil`.
     *
     */
    durability: number

    /**
     * The number of entity filters this deconstruction item supports.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    readonly entity_filter_count: number

    /**
     * The blacklist/whitelist entity filter mode for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    entity_filter_mode: defines.deconstruction_item.entity_filter_mode

    /**
     * The entity filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be entity prototype names that don't have the `"not-deconstructable"` flag set and are either a `cliff` or marked as `minable`.
     */
    entity_filters: string[]

    /**
     * If this item extends the inventory it resides in (provides its contents for counts, crafting, insertion). Only callable on items with inventories.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    extends_inventory: boolean

    /**
     * The equipment grid of this item or `nil` if this item doesn't have a grid.
     */
    readonly grid: LuaEquipmentGrid

    /**
     * How much health the item has, as a number in range [0, 1].
     */
    health: number

    /**
     * If this is an armor item.
     */
    readonly is_armor: boolean

    /**
     * If this is a blueprint item.
     */
    readonly is_blueprint: boolean

    /**
     * If this is a blueprint book item.
     */
    readonly is_blueprint_book: boolean

    /**
     * If this is a deconstruction tool item.
     */
    readonly is_deconstruction_item: boolean

    /**
     * If this is an item with entity data item.
     */
    readonly is_item_with_entity_data: boolean

    /**
     * If this is an item with inventory item.
     */
    readonly is_item_with_inventory: boolean

    /**
     * If this is an item with label item.
     */
    readonly is_item_with_label: boolean

    /**
     * If this is an item with tags item.
     */
    readonly is_item_with_tags: boolean

    /**
     * If this is a mining tool item.
     */
    readonly is_mining_tool: boolean

    /**
     * If this is a module item.
     */
    readonly is_module: boolean

    /**
     * If this is a repair tool item.
     */
    readonly is_repair_tool: boolean

    /**
     * If this is a selection tool item.
     */
    readonly is_selection_tool: boolean

    /**
     * If this is a tool item.
     */
    readonly is_tool: boolean

    /**
     * If this is a upgrade item.
     */
    readonly is_upgrade_item: boolean

    /**
     * The unique identifier for this item if it has one, `nil` otherwise. Note that this ID stays the same no matter where the item is moved to.
     * Only these types of items have unique IDs:
     * - `"armor"`
     * - `"spidertron-remote"`
     * - `"selection-tool"`
     * - `"copy-paste-tool"`
     * - `"upgrade-item"`
     * - `"deconstruction-item"`
     * - `"blueprint"`
     * - `"blueprint-book"`
     * - `"item-with-entity-data"`
     * - `"item-with-inventory"`
     * - `"item-with-tags"`
     */
    readonly item_number: number

    /**
     * The current label for this item. Nil when none.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    label: string

    /**
     * The current label color for this item. Nil when none.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    label_color: Color

    /**
     * Prototype name of the item held in this stack.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The insertion mode priority this ItemWithInventory uses when items are inserted into an inventory it resides in. Only callable on items with inventories.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    prioritize_insertion_mode: string

    /**
     * Prototype of the item held in this stack.
     */
    readonly prototype: LuaItemPrototype

    /**
     * @remarks
     * Applies to subclasses: ItemWithTags
     *
     */
    tags: Tags

    /**
     * The number of tile filters this deconstruction item supports.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    readonly tile_filter_count: number

    /**
     * The blacklist/whitelist tile filter mode for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    tile_filter_mode: defines.deconstruction_item.tile_filter_mode

    /**
     * The tile filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be tile prototype names.
     */
    tile_filters: string[]

    /**
     * The tile selection mode for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    tile_selection_mode: defines.deconstruction_item.tile_selection_mode

    /**
     * If this deconstruction item is set to allow trees and rocks only.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    trees_and_rocks_only: boolean

    /**
     * Type of the item prototype.
     */
    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Is this valid for reading? Differs from the usual `valid` in that `valid` will be `true` even if the item stack is blank but the entity that holds it is still valid.
     */
    readonly valid_for_read: boolean

}

/**
 * Control behavior for lamps.
 */
interface LuaLampControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The color the lamp is showing or `nil` if not using any color.
     */
    readonly color: Color

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * `true` if the lamp should set the color from the circuit network signals.
     */
    use_colors: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A lazily loaded value. For performance reasons, we sometimes return a custom lazily-loaded value type instead of the native Lua value. This custom type lazily constructs the necessary value when {@link LuaLazyLoadedValue::get | LuaLazyLoadedValue::get} is called, therefore preventing its unnecessary construction in some cases.
 * An instance of LuaLazyLoadedValue is only valid during the event it was created from and cannot be saved.
 */
interface LuaLazyLoadedValue<T> {
    /**
     * Gets the value of this lazy loaded value.
     */
    get(this: void): T

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Logistic cell of a particular {@link LuaEntity | LuaEntity}. A "Logistic Cell" is the given name for settings and properties used by what would normally be seen as a "Roboport". A logistic cell however doesn't have to be attached to the roboport entity (the character has one for the personal roboport).
 */
interface LuaLogisticCell {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Is a given position within the construction range of this cell?
     */
    is_in_construction_range(this: void,
        position: Position): boolean

    /**
     * Is a given position within the logistic range of this cell?
     */
    is_in_logistic_range(this: void,
        position: Position): boolean

    /**
     * Are two cells neighbours?
     */
    is_neighbour_with(this: void,
        other: LuaLogisticCell): boolean

    /**
     * Radius at which the robots hover when waiting to be charged.
     */
    readonly charge_approach_distance: number

    /**
     * Number of robots currently charging.
     */
    readonly charging_robot_count: number

    /**
     * Robots currently being charged.
     */
    readonly charging_robots: LuaEntity[]

    /**
     * Construction radius of this cell.
     */
    readonly construction_radius: number

    /**
     * The network that owns this cell or `nil`.
     */
    readonly logistic_network: LuaLogisticNetwork

    /**
     * Logistic radius of this cell.
     */
    readonly logistic_radius: number

    /**
     * Logistic connection distance of this cell.
     */
    readonly logistics_connection_distance: number

    /**
     * `true` if this is a mobile cell. In vanilla, only the logistic cell created by a character's personal roboport is mobile.
     */
    readonly mobile: boolean

    /**
     * Neighbouring cells.
     */
    readonly neighbours: LuaLogisticCell[]

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * This cell's owner.
     */
    readonly owner: LuaEntity

    /**
     * Number of stationed construction robots in this cell.
     */
    readonly stationed_construction_robot_count: number

    /**
     * Number of stationed logistic robots in this cell.
     */
    readonly stationed_logistic_robot_count: number

    /**
     * Number of robots waiting to charge.
     */
    readonly to_charge_robot_count: number

    /**
     * Robots waiting to charge.
     */
    readonly to_charge_robots: LuaEntity[]

    /**
     * `true` if this cell is active.
     */
    readonly transmitting: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for logistic chests.
 */
interface LuaLogisticContainerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The circuit mode of operations for the logistic container.
     */
    circuit_mode_of_operation: defines.control_behavior.logistic_container.circuit_mode_of_operation

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A single logistic network of a given force on a given surface.
 */
interface LuaLogisticNetwork {
    /**
     * Find logistic cell closest to a given position.
     * @returns May be `nil` if no cell was found.
     */
    find_cell_closest_to(this: void,
        position: Position): LuaLogisticCell

    /**
     * Get item counts for the entire network.
     * @see {@link LuaInventory::get_contents}
     * @returns A mapping of item prototype names to the number available in the network.
     */
    get_contents(this: void): {[key: string]: number}

    /**
     * Count given or all items in the network or given members.
     * @param item - Item name to count. If not given, gives counts of all items in the network.
     * @param member - Logistic members to check, must be either `"storage"` or `"providers"`. If not given, gives count in the entire network.
     */
    get_item_count(this: void,
        item?: string,
        member?: string): number

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Insert items into the logistic network. This will actually insert the items into some logistic chests.
     * @param item - What to insert.
     * @param members - Which logistic members to insert the items to. Must be `"storage"`, `"storage-empty"` (storage chests that are completely empty), `"storage-empty-slot"` (storage chests that have an empty slot), or `"requester"`. If not specified, inserts items into the logistic network in the usual order.
     * @returns Number of items actually inserted.
     */
    insert(this: void,
        item: ItemStackIdentification,
        members?: string): number

    /**
     * Remove items from the logistic network. This will actually remove the items from some logistic chests.
     * @param item - What to remove.
     * @param members - Which logistic members to remove from. Must be `"storage"`, `"passive-provider"`, `"buffer"`, or `"active-provider"`. If not specified, removes from the network in the usual order.
     * @returns Number of items removed.
     */
    remove_item(this: void,
        item: ItemStackIdentification,
        members?: string): number

    /**
     * Find a logistic point to drop the specific item stack.
     * @param table.members - When given, it will find from only the specific type of member. Must be `"storage"`, `"storage-empty"`, `"storage-empty-slot"` or `"requester"`. If not specified, selects with normal priorities.
     * @param table.stack - Name of the item to select.
     * @returns May be `nil` if no point was found.
     */
    select_drop_point(this: void,
        table: {
            stack: ItemStackIdentification,
            members?: string
        }): LuaLogisticPoint

    /**
     * Find the 'best' logistic point with this item ID and from the given position or from given chest type.
     * @param table.include_buffers - Whether to consider buffer chests or not. Defaults to false. Only considered if selecting with position.
     * @param table.members - When given, it will find from only the specific type of member. Must be `"storage"`, `"passive-provider"`, `"buffer"` or `"active-provider"`. If not specified, selects with normal priorities. Not considered if position is specified.
     * @param table.name - Name of the item to select.
     * @param table.position - When given, it will find the storage 'best' storage point from this position.
     * @returns May be `nil` if no point was found.
     */
    select_pickup_point(this: void,
        table: {
            name: string,
            position?: Position,
            include_buffers?: boolean,
            members?: string
        }): LuaLogisticPoint

    /**
     * All active provider points in this network.
     */
    readonly active_provider_points: LuaLogisticPoint[]

    /**
     * The total number of construction robots in the network (idle and active + in roboports).
     */
    readonly all_construction_robots: number

    /**
     * The total number of logistic robots in the network (idle and active + in roboports).
     */
    readonly all_logistic_robots: number

    /**
     * Number of construction robots available for a job.
     */
    readonly available_construction_robots: number

    /**
     * Number of logistic robots available for a job.
     */
    readonly available_logistic_robots: number

    /**
     * All cells in this network.
     */
    readonly cells: LuaLogisticCell[]

    /**
     * All construction robots in this logistic network.
     */
    readonly construction_robots: LuaEntity[]

    /**
     * All things that have empty provider points in this network.
     */
    readonly empty_provider_points: LuaLogisticPoint[]

    /**
     * All entities that have empty logistic provider points in this network.
     */
    readonly empty_providers: LuaEntity[]

    /**
     * The force this logistic network belongs to.
     */
    readonly force: LuaForce

    /**
     * All other entities that have logistic points in this network (inserters mostly).
     */
    readonly logistic_members: LuaEntity[]

    /**
     * All logistic robots in this logistic network.
     */
    readonly logistic_robots: LuaEntity[]

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * All passive provider points in this network.
     */
    readonly passive_provider_points: LuaLogisticPoint[]

    /**
     * All things that have provider points in this network.
     */
    readonly provider_points: LuaLogisticPoint[]

    /**
     * All entities that have logistic provider points in this network.
     */
    readonly providers: LuaEntity[]

    /**
     * All things that have requester points in this network.
     */
    readonly requester_points: LuaLogisticPoint[]

    /**
     * All entities that have logistic requester points in this network.
     */
    readonly requesters: LuaEntity[]

    /**
     * Maximum number of robots the network can work with. Currently only used for the personal roboport.
     */
    readonly robot_limit: number

    /**
     * All robots in this logistic network.
     */
    readonly robots: LuaEntity[]

    /**
     * All things that have storage points in this network.
     */
    readonly storage_points: LuaLogisticPoint[]

    /**
     * All entities that have logistic storage points in this network.
     */
    readonly storages: LuaEntity[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Logistic point of a particular {@link LuaEntity | LuaEntity}. A "Logistic point" is the name given for settings and properties used by requester, provider, and storage points in a given logistic network. These "points" don't have to be a logistic container but often are. One other entity that can own several points is the "character" character type entity.
 */
interface LuaLogisticPoint {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * If this logistic point is using the exact mode. In exact mode robots never over-deliver requests.
     */
    readonly exact: boolean

    /**
     * The logistic filters for this logistic point or `nil` if this doesn't use logistic filters.
     * @remarks
     * The returned array will always have an entry for each filter and will be indexed in sequence when not nil.
     *
     */
    readonly filters: LogisticFilter[]

    /**
     * The force of this logistic point.
     * @remarks
     * This will always be the same as the {@link LuaLogisticPoint::owner | LuaLogisticPoint::owner} force.
     *
     */
    readonly force: LuaForce

    /**
     * The Logistic member index of this logistic point.
     */
    readonly logistic_member_index: number

    readonly logistic_network: LuaLogisticNetwork

    /**
     * The logistic mode.
     */
    readonly mode: defines.logistic_mode

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The {@link LuaEntity | LuaEntity} owner of this {@link LuaLogisticPoint | LuaLogisticPoint}.
     */
    readonly owner: LuaEntity

    /**
     * Items targeted to be dropped off into this logistic point by robots.
     */
    readonly targeted_items_deliver: {[key: string]: number}

    /**
     * Items targeted to be picked up from this logistic point by robots.
     */
    readonly targeted_items_pickup: {[key: string]: number}

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for mining drills.
 */
interface LuaMiningDrillControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * `true` if this drill is enabled or disabled using the logistics or circuit condition.
     */
    circuit_enable_disable: boolean

    /**
     * `true` if this drill should send the resources in the field to the circuit network. Which resources depends on {@link LuaMiningDrillControlBehavior::resource_read_mode | LuaMiningDrillControlBehavior::resource_read_mode}
     */
    circuit_read_resources: boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * If the mining drill should send just the resources in its area or the entire field it's on to the circuit network.
     */
    resource_read_mode: defines.control_behavior.mining_drill.resource_read_mode

    /**
     * The resource entities that the mining drill will send information about to the circuit network or an empty array.
     */
    readonly resource_read_targets: LuaEntity[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a mod setting.
 */
interface LuaModSettingPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * If this string setting allows blank values or `nil` if not a string setting.
     */
    readonly allow_blank: boolean

    /**
     * The allowed values for this setting or `nil` if this setting doesn't use the a fixed set of values.
     */
    readonly allowed_values: string[] | number[]

    /**
     * If this string setting auto-trims values or `nil` if not a string setting.
     */
    readonly auto_trim: boolean

    /**
     * The default value of this setting.
     */
    readonly default_value: boolean | number | string

    /**
     * If this setting is hidden from the GUI.
     */
    readonly hidden: boolean

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * The maximum value for this setting or `nil` if this setting type doesn't support a maximum.
     */
    readonly maximum_value: number

    /**
     * The minimum value for this setting or `nil` if this setting type doesn't support a minimum.
     */
    readonly minimum_value: number

    /**
     * The mod that owns this setting.
     */
    readonly mod: string

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    readonly setting_type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a module category.
 */
interface LuaModuleCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a named noise expression.
 */
interface LuaNamedNoiseExpression {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The expression itself.
     */
    readonly expression: NoiseExpression

    /**
     * Name of the property that this expression is intended to provide a value for, if any.
     */
    readonly intended_property: string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a noise layer.
 */
interface LuaNoiseLayerPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of an optimized particle.
 */
interface LuaParticlePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly ended_in_water_trigger_effect: TriggerEffectItem

    readonly life_time: number

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    readonly mining_particle_frame_speed: number

    readonly movement_modifier: number

    readonly movement_modifier_when_on_ground: number

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    readonly regular_trigger_effect: TriggerEffectItem

    readonly regular_trigger_effect_frequency: number

    readonly render_layer: RenderLayer

    readonly render_layer_when_on_ground: RenderLayer

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A permission group that defines what players in this group are allowed to do.
 */
interface LuaPermissionGroup {
    /**
     * Adds the given player to this group.
     * @returns If the player was added.
     */
    add_player(this: void,
        player: PlayerIdentification): boolean

    /**
     * Whether this group allows the given action.
     * @param action - The action in question.
     */
    allows_action(this: void,
        action: defines.input_action): boolean

    /**
     * Destroys this group.
     * @returns Whether the group was successfully destroyed.
     */
    destroy(this: void): boolean

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Removes the given player from this group.
     * @returns If the player was removed.
     */
    remove_player(this: void,
        player: PlayerIdentification): boolean

    /**
     * Sets whether this group allows the performance the given action.
     * @param action - The action in question.
     * @param allow_action - Whether to allow the specified action.
     * @returns Whether the value was successfully applied.
     */
    set_allows_action(this: void,
        action: defines.input_action,
        allow_action: boolean): boolean

    /**
     * The group ID
     */
    readonly group_id: number

    /**
     * The name of this group.
     * @remarks
     * Setting the name to `nil` or an empty string sets the name to the default value.
     *
     */
    name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The players in this group.
     */
    readonly players: LuaPlayer[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * All permission groups.
 */
interface LuaPermissionGroups {
    /**
     * Creates a new permission group.
     * @remarks
     * May return nil if the calling player doesn't have permission to make groups.
     *
     */
    create_group(this: void,
        name?: string): LuaPermissionGroup

    /**
     * Gets the permission group with the given name or group ID or `nil` if there is no matching group.
     */
    get_group(this: void,
        group: string | number): LuaPermissionGroup

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * All of the permission groups.
     */
    readonly groups: LuaPermissionGroup[]

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A player in the game. Pay attention that a player may or may not have a character, which is the {@link LuaEntity | LuaEntity} of the little guy running around the world doing things.
 */
interface LuaPlayer extends LuaControl {
    /**
     * Gets a copy of the currently selected blueprint in the clipboard queue into the player's cursor, as if the player activated Paste.
     */
    activate_paste(this: void): void

    /**
     * Adds an alert to this player for the given entity of the given alert type.
     */
    add_alert(this: void,
        entity: LuaEntity,
        type: defines.alert_type): void

    /**
     * Adds a custom alert to this player.
     * @param entity - If the alert is clicked, the map will open at the position of this entity.
     */
    add_custom_alert(this: void,
        entity: LuaEntity,
        icon: SignalID,
        message: LocalisedString,
        show_on_map: boolean): void

    /**
     * Adds the given recipe to the list of recipe notifications for this player.
     * @param recipe - Name of the recipe prototype to add.
     */
    add_recipe_notification(this: void,
        recipe: string): void

    /**
     * Adds the given blueprint to this player's clipboard queue.
     * @param blueprint - The blueprint to add.
     */
    add_to_clipboard(this: void,
        blueprint: LuaItemStack): void

    /**
     * Associates a character with this player.
     * @remarks
     * The character must not be connected to any controller.
     * If this player is currently disconnected (see {@link LuaPlayer::connected | LuaPlayer::connected}) the character will be immediately "logged off".
     * See {@link LuaPlayer::get_associated_characters | LuaPlayer::get_associated_characters} for more information.
     *
     * @param character - The character entity.
     */
    associate_character(this: void,
        character: LuaEntity): void

    /**
     * Builds what ever is in the cursor on the surface the player is on.
     * @remarks
     * Anything built will fire normal player-built events.
     * The cursor stack will automatically be reduced as if the player built normally.
     *
     * @param table.alt - If alt build should be used instead of normal build. Defaults to normal.
     * @param table.direction - Direction the entity would be placed
     * @param table.position - Where the entity would be placed
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     * @param table.terrain_building_size - The size for building terrain if building terrain. Defaults to 2.
     */
    build_from_cursor(this: void,
        table: {
            position: Position,
            direction?: defines.direction,
            alt?: boolean,
            terrain_building_size?: number,
            skip_fog_of_war?: boolean
        }): void

    /**
     * Checks if this player can build what ever is in the cursor on the surface the player is on.
     * @param table.alt - If alt build should be used instead of normal build. Defaults to normal.
     * @param table.direction - Direction the entity would be placed
     * @param table.position - Where the entity would be placed
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     * @param table.terrain_building_size - The size for building terrain if building terrain. Defaults to 2.
     */
    can_build_from_cursor(this: void,
        table: {
            position: Position,
            direction?: defines.direction,
            alt?: boolean,
            terrain_building_size?: number,
            skip_fog_of_war?: boolean
        }): boolean

    /**
     * Checks if this player can build the give entity at the given location on the surface the player is on.
     * @param table.direction - Direction the entity would be placed
     * @param table.name - Name of the entity to check
     * @param table.position - Where the entity would be placed
     */
    can_place_entity(this: void,
        table: {
            name: string,
            position: Position,
            direction?: defines.direction
        }): boolean

    /**
     * Clear the chat console.
     */
    clear_console(this: void): void

    /**
     * Invokes the "clear cursor" action on the player as if the user pressed it.
     * @returns If the cursor is now empty.
     */
    clear_cursor(this: void): boolean

    /**
     * Clears all recipe notifications for this player.
     */
    clear_recipe_notifications(this: void): void

    /**
     * Clears the players selection tool selection position.
     */
    clear_selection(this: void): void

    /**
     * Queues request to switch to the normal game view from the map or zoom to world view. Render mode change requests are processed before rendering of the next frame.
     */
    close_map(this: void): void

    /**
     * Asks the player if they would like to connect to the given server.
     * @remarks
     * This only does anything when used on a multiplayer peer. Single player and server hosts will ignore the prompt.
     *
     * @param table.address - The server (address:port) if port is not given the default Factorio port is used.
     * @param table.name - The name of the server.
     * @param table.password - The password if different from the one used to join this game. Note, if the current password is not empty but the one required to join the new server is an empty string should be given for this field.
     */
    connect_to_server(this: void,
        table: {
            address: string,
            name?: LocalisedString,
            description?: LocalisedString,
            password?: string
        }): void

    /**
     * Creates and attaches a character entity to this player.
     * @remarks
     * The player must not have a character already connected and must be online (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     *
     * @param character - The character to create else the default is used.
     * @returns Whether the character was created.
     */
    create_character(this: void,
        character?: string): boolean

    /**
     * Spawn flying text that is only visible to this player. Either `position` or `create_at_cursor` are required. When `create_at_cursor` is `true`, all parameters other than `text` are ignored.
     * @remarks
     * If no custom `speed` is set and the text is longer than 25 characters, its `time_to_live` and `speed` are dynamically adjusted to give players more time to read it.
     * Local flying text is not saved, which means it will disappear after a save/load-cycle.
     *
     * @param table.color - The color of the flying text. Defaults to white text.
     * @param table.create_at_cursor - If `true`, the flying text is created at the player's cursor. Defaults to `false`.
     * @param table.position - The location on the map at which to show the flying text.
     * @param table.speed - The speed at which the text rises upwards in tiles/second. Can't be a negative value.
     * @param table.text - The flying text to show.
     * @param table.time_to_live - The amount of ticks that the flying text will be shown for. Defaults to `80`.
     */
    create_local_flying_text(this: void,
        table: {
            text: LocalisedString,
            position?: Position,
            create_at_cursor?: boolean,
            color?: Color,
            time_to_live?: number,
            speed?: number
        }): void

    /**
     * Disables alerts for the given alert category.
     * @returns If the alert type was disabled (false if it was already disabled).
     */
    disable_alert(this: void,
        alert_type: defines.alert_type): boolean

    /**
     * Disable recipe groups.
     */
    disable_recipe_groups(this: void): void

    /**
     * Disable recipe subgroups.
     */
    disable_recipe_subgroups(this: void): void

    /**
     * Disassociates a character from this player. This is functionally the same as setting {@link LuaEntity::associated_player | LuaEntity::associated_player} to `nil`.
     * @remarks
     * See {@link LuaPlayer::get_associated_characters | LuaPlayer::get_associated_characters} for more information.
     *
     * @param character - The character entity
     */
    disassociate_character(this: void,
        character: LuaEntity): void

    /**
     * Start/end wire dragging at the specified location, wire type is based on the cursor contents
     * @param table.position - Position at which cursor was clicked. Used only to decide which side of arithmetic combinator, decider combinator or power switch is to be connected. Entity itself to be connected is based on the player's selected entity.
     * @returns `true` if the action did something
     */
    drag_wire(this: void,
        table: {
            position: Position
        }): boolean

    /**
     * Enables alerts for the given alert category.
     * @returns If the alert type was enabled (false if it was already enabled).
     */
    enable_alert(this: void,
        alert_type: defines.alert_type): boolean

    /**
     * Enable recipe groups.
     */
    enable_recipe_groups(this: void): void

    /**
     * Enable recipe subgroups.
     */
    enable_recipe_subgroups(this: void): void

    /**
     * Exit the current cutscene. Errors if not in a cutscene.
     */
    exit_cutscene(this: void): void

    /**
     * Gets which quick bar page is being used for the given screen page or `nil` if not known.
     * @param index - The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number of bars on the screen to account for the interface config setting change.
     */
    get_active_quick_bar_page(this: void,
        index: number): number

    /**
     * Get all alerts matching the given filters, or all alerts if no filters are given.
     * @returns A mapping of surface index to an array of arrays of [alerts](Alert) indexed by the [alert type](defines.alert_type).
     */
    get_alerts(this: void,
        table: {
            entity?: LuaEntity,
            prototype?: LuaEntityPrototype,
            position?: Position,
            type?: defines.alert_type,
            surface?: SurfaceIdentification
        }): {[key: number]: {[key: string]: Alert[]}}

    /**
     * The characters associated with this player.
     * @remarks
     * The array will always be empty when the player is disconnected (see {@link LuaPlayer::connected | LuaPlayer::connected}) regardless of there being associated characters.
     * Characters associated with this player will be logged off when this player disconnects but are not controlled by any player.
     *
     */
    get_associated_characters(this: void): LuaEntity[]

    /**
     * Get the current goal description, as a localised string.
     */
    get_goal_description(this: void): LocalisedString

    /**
     * Gets the filter for this map editor infinity filters at the given index or `nil` if the filter index doesn't exist or is empty.
     * @param index - The index to get.
     */
    get_infinity_inventory_filter(this: void,
        index: number): InfinityInventoryFilter

    /**
     * Gets the quick bar filter for the given slot or `nil`.
     * @param index - The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     */
    get_quick_bar_slot(this: void,
        index: number): LuaItemPrototype

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * If the given alert type is currently enabled.
     */
    is_alert_enabled(this: void,
        alert_type: defines.alert_type): boolean

    /**
     * If the given alert type is currently muted.
     */
    is_alert_muted(this: void,
        alert_type: defines.alert_type): boolean

    /**
     * Is a custom Lua shortcut currently available?
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    is_shortcut_available(this: void,
        prototype_name: string): boolean

    /**
     * Is a custom Lua shortcut currently toggled?
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    is_shortcut_toggled(this: void,
        prototype_name: string): boolean

    /**
     * Jump to the specified cutscene waypoint. Only works when the player is viewing a cutscene.
     */
    jump_to_cutscene_waypoint(this: void,
        waypoint_index: number): void

    /**
     * Logs a dictionary of chunks -> active entities for the surface this player is on.
     */
    log_active_entity_chunk_counts(this: void): void

    /**
     * Logs a dictionary of active entities -> count for the surface this player is on.
     */
    log_active_entity_counts(this: void): void

    /**
     * Mutes alerts for the given alert category.
     * @returns If the alert type was muted (false if it was already muted).
     */
    mute_alert(this: void,
        alert_type: defines.alert_type): boolean

    /**
     * Queues a request to open the map at the specified position. If the map is already opened, the request will simply set the position (and scale). Render mode change requests are processed before rendering of the next frame.
     */
    open_map(this: void,
        position: Position,
        scale?: number): void

    /**
     * Invokes the "smart pipette" action on the player as if the user pressed it.
     * @returns If the smart pipette found something to place
     */
    pipette_entity(this: void,
        entity: string | LuaEntity | LuaEntityPrototype): boolean

    /**
     * Play a sound for this player.
     * @param table.override_sound_type - The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     * @param table.path - The sound to play.
     * @param table.position - Where the sound should be played. If not given, it's played at the current position of the player.
     * @param table.volume_modifier - The volume of the sound to play. Must be between 0 and 1 inclusive.
     */
    play_sound(this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
            override_sound_type?: SoundType
        }): void

    /**
     * Print text to the chat console.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        message: LocalisedString,
        color?: Color): void

    /**
     * Print entity statistics to the player's console.
     * @param entities - Entity prototypes to get statistics for. If not specified or empty, display statistics for all entities.
     */
    print_entity_statistics(this: void,
        entities?: string[]): void

    /**
     * Print LuaObject counts per mod.
     */
    print_lua_object_statistics(this: void): void

    /**
     * Print construction robot job counts to the players console.
     */
    print_robot_jobs(this: void): void

    /**
     * Removes all alerts matching the given filters or if an empty filters table is given all alerts are removed.
     */
    remove_alert(this: void,
        table: {
            entity?: LuaEntity,
            prototype?: LuaEntityPrototype,
            position?: Position,
            type?: defines.alert_type,
            surface?: SurfaceIdentification,
            icon?: SignalID,
            message?: LocalisedString
        }): void

    /**
     * Requests a translation for the given localised string. If the request is successful the {@link on_string_translated | on_string_translated} event will be fired at a later time with the results.
     * @remarks
     * Does nothing if this player is not connected. (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     *
     * @returns If the request was sent or not.
     */
    request_translation(this: void,
        localised_string: LocalisedString): boolean

    /**
     * Sets which quick bar page is being used for the given screen page.
     * @param page_index - The new quick bar page.
     * @param screen_index - The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number of bars on the screen to account for the interface config setting change.
     */
    set_active_quick_bar_page(this: void,
        screen_index: number,
        page_index: number): void

    /**
     * Set the controller type of the player.
     * @remarks
     * Setting a player to {@link defines.controllers.editor | defines.controllers.editor} auto promotes the player to admin and enables cheat mode.
     * Setting a player to {@link defines.controllers.editor | defines.controllers.editor} also requires the calling player be an admin.
     *
     * @param table.character - Entity to control. Mandatory when `type` is [defines.controllers.character](defines.controllers.character), ignored otherwise.
     * @param table.chart_mode_cutoff - If specified and `type` is [defines.controllers.cutscene](defines.controllers.cutscene), the game will switch to chart-mode (map zoomed out) rendering when the zoom level is less than this value.
     * @param table.final_transition_time - If specified and `type` is [defines.controllers.cutscene](defines.controllers.cutscene), it is the time in ticks it will take for the camera to pan from the final waypoint back to the starting position. If not given the camera will not pan back to the start position/zoom.
     * @param table.start_position - If specified and `type` is [defines.controllers.cutscene](defines.controllers.cutscene), the cutscene will start at this position. If not given the start position will be the player position.
     * @param table.start_zoom - If specified and `type` is [defines.controllers.cutscene](defines.controllers.cutscene), the cutscene will start at this zoom level. If not given the start zoom will be the players zoom.
     * @param table.type - Which controller to use.
     * @param table.waypoints - List of waypoints for the cutscene controller. This parameter is mandatory when `type` is [defines.controllers.cutscene](defines.controllers.cutscene).
     */
    set_controller(this: void,
        table: {
            type: defines.controllers,
            character?: LuaEntity,
            waypoints?: CutsceneWaypoint,
            start_position?: Position,
            start_zoom?: number,
            final_transition_time?: number,
            chart_mode_cutoff?: number
        }): void

    /**
     * Setup the screen to be shown when the game is finished.
     * @param file - Path to image to be shown.
     * @param message - Message to be shown.
     */
    set_ending_screen_data(this: void,
        message: LocalisedString,
        file?: string): void

    /**
     * Set the text in the goal window (top left).
     * @param only_update - When `true`, won't play the "goal updated" sound.
     * @param text - The text to display. Lines can be delimited with `\n`. Passing an empty string or omitting this parameter entirely will make the goal window disappear.
     */
    set_goal_description(this: void,
        text?: LocalisedString,
        only_update?: boolean): void

    /**
     * Sets the filter for this map editor infinity filters at the given index.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     * @param filter - The new filter or `nil` to clear the filter.
     * @param index - The index to set.
     */
    set_infinity_inventory_filter(this: void,
        index: number,
        filter: InfinityInventoryFilter): void

    /**
     * Sets the quick bar filter for the given slot.
     * @param filter - The filter or `nil`.
     * @param index - The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     */
    set_quick_bar_slot(this: void,
        index: number,
        filter: string | LuaItemPrototype | LuaItemStack): void

    /**
     * Make a custom Lua shortcut available or unavailable.
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    set_shortcut_available(this: void,
        prototype_name: string,
        available: boolean): void

    /**
     * Toggle or untoggle a custom Lua shortcut
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    set_shortcut_toggled(this: void,
        prototype_name: string,
        toggled: boolean): void

    /**
     * Starts selection with selection tool from the specified position. Does nothing if the players cursor is not a selection tool.
     * @param position - The position to start selection from.
     * @param selection_mode - The type of selection to start. Can be `select`, `alternative-select`, `reverse-select`.
     */
    start_selection(this: void,
        position: Position,
        selection_mode: string): void

    /**
     * Toggles this player into or out of the map editor. Does nothing if this player isn't an admin or if the player doesn't have permission to use the map editor.
     */
    toggle_map_editor(this: void): void

    /**
     * Unlock the achievements of the given player. This has any effect only when this is the local player, the achievement isn't unlocked so far and the achievement is of the type "achievement".
     * @param name - name of the achievement to unlock
     */
    unlock_achievement(this: void,
        name: string): void

    /**
     * Unmutes alerts for the given alert category.
     * @returns If the alert type was unmuted (false if it was wasn't muted).
     */
    unmute_alert(this: void,
        alert_type: defines.alert_type): boolean

    /**
     * Uses the current item in the cursor if it's a capsule or does nothing if not.
     * @param position - Where the item would be used.
     */
    use_from_cursor(this: void,
        position: Position): void

    /**
     * Queues a request to zoom to world at the specified position. If the player is already zooming to world, the request will simply set the position (and scale). Render mode change requests are processed before rendering of the next frame.
     */
    zoom_to_world(this: void,
        position: Position,
        scale?: number): void

    /**
     * `true` if the player is an admin.
     * @remarks
     * Trying to change player admin status from the console when you aren't an admin does nothing.
     *
     */
    admin: boolean

    /**
     * How many ticks since the last action of this player
     */
    readonly afk_time: number

    /**
     * If the main inventory will be auto sorted.
     */
    readonly auto_sort_main_inventory: boolean

    /**
     * The item stack containing a blueprint to be setup.
     */
    readonly blueprint_to_setup: LuaItemStack

    /**
     * The character attached to this player, or `nil` if no character.
     * @remarks
     * Will also return `nil` when the player is disconnected (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     *
     */
    character: LuaEntity

    /**
     * The color used when this player talks in game.
     */
    chat_color: Color

    /**
     * The color associated with the player. This will be used to tint the player's character as well as their buildings and vehicles.
     */
    color: Color

    /**
     * `true` if the player is currently connected to the game.
     */
    readonly connected: boolean

    readonly controller_type: defines.controllers

    /**
     * When in a cutscene; the character this player would be using once the cutscene is over.
     * @remarks
     * Will also return `nil` when the player is disconnected (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     *
     */
    readonly cutscene_character: LuaEntity

    /**
     * The display resolution for this player.
     * @remarks
     * During {@link on_player_created | on_player_created}, this attribute will always return a resolution of `{width=1920, height=1080}`. To get the actual resolution, listen to the {@link on_player_display_resolution_changed | on_player_display_resolution_changed} event raised shortly afterwards.
     *
     */
    readonly display_resolution: DisplayResolution

    /**
     * The display scale for this player.
     * @remarks
     * During {@link on_player_created | on_player_created}, this attribute will always return a scale of `1`. To get the actual scale, listen to the {@link on_player_display_scale_changed | on_player_display_scale_changed} event raised shortly afterwards.
     *
     */
    readonly display_scale: number

    /**
     * The source entity used during entity settings copy-paste if any.
     * `nil` if there isn't currently a source entity.
     */
    readonly entity_copy_source: LuaEntity

    /**
     * The player's game view settings.
     */
    game_view_settings: GameViewSettings

    readonly gui: LuaGui

    /**
     * The original location of the item in the cursor, marked with a hand. When writing, the specified inventory slot must be empty and the cursor stack must not be empty.
     */
    hand_location: ItemStackLocation

    /**
     * This player's index in {@link LuaGameScript::players | LuaGameScript::players}.
     */
    readonly index: number

    /**
     * The filters for this map editor infinity inventory settings.
     */
    infinity_inventory_filters: InfinityInventoryFilter[]

    /**
     * At what tick this player was last online.
     */
    readonly last_online: number

    /**
     * The player's map view settings. To write to this, use a table containing the fields that should be changed.
     */
    map_view_settings: MapViewSettings

    /**
     * `true` if the minimap is visible.
     */
    minimap_enabled: boolean

    /**
     * Gets the current per-player settings for the this player, indexed by prototype name. Returns the same structure as {@link LuaSettings::get_player_settings | LuaSettings::get_player_settings}.
     * @remarks
     * This table will become invalid if its associated player does.
     *
     */
    readonly mod_settings: {[key: string]: ModSetting}

    /**
     * The player's username.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * How many ticks did this player spend playing this save (all sessions combined)
     */
    readonly online_time: number

    /**
     * `true` if the player opened itself. I.e. if they opened the character or god-controller GUI.
     */
    readonly opened_self: boolean

    /**
     * The permission group this player is part of or `nil` if not part of any group.
     */
    permission_group: LuaPermissionGroup

    /**
     * If items not included in this map editor infinity inventory filters should be removed.
     */
    remove_unfiltered_items: boolean

    /**
     * The render mode of the player, like map or zoom to world. The render mode can be set using {@link LuaPlayer::open_map | LuaPlayer::open_map}, {@link LuaPlayer::zoom_to_world | LuaPlayer::zoom_to_world} and {@link LuaPlayer::close_map | LuaPlayer::close_map}.
     */
    readonly render_mode: defines.render_mode

    /**
     * If `true`, circle and name of given player is rendered on the map/chart.
     */
    show_on_map: boolean

    /**
     * If `true`, zoom-to-world noise effect will be disabled and environmental sounds will be based on zoom-to-world view instead of position of player's character.
     */
    spectator: boolean

    /**
     * The stashed controller type or `nil` if no controller is stashed.
     * @remarks
     * This is mainly useful when a player is in the map editor.
     *
     */
    readonly stashed_controller_type: defines.controllers

    /**
     * The tag that is shown after the player in chat and on the map.
     */
    tag: string

    /**
     * The number of ticks until this player will respawn or `nil` if not waiting to respawn.
     * @remarks
     * Set to `nil` to immediately respawn the player.
     * Set to any positive value to trigger the respawn state for this player.
     *
     */
    ticks_to_respawn: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The player's zoom-level.
     */
    zoom: number

}

/**
 * An object used to measure script performance.
 * @remarks
 * Since performance is non-deterministic these objects don't allow reading the raw time values from lua. They can be used anywhere a {@link LocalisedString | LocalisedString} is used.
 *
 */
interface LuaProfiler {
    /**
     * Add the duration of another timer to this timer. Useful to reduce start/stop overhead when accumulating time onto many timers at once.
     * @remarks
     * If other is running, the time to now will be added.
     *
     * @param other - The timer to add to this timer.
     */
    add(this: void,
        other: LuaProfiler): void

    /**
     * Divides the current duration by a set value. Useful for calculating the average of many iterations.
     * @remarks
     * Does nothing if this isn't stopped.
     *
     * @param number - The number to divide by. Must be > 0.
     */
    divide(this: void,
        number: number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Resets the clock, also restarting it.
     */
    reset(this: void): void

    /**
     * Start the clock again, without resetting it.
     */
    restart(this: void): void

    /**
     * Stops the clock.
     */
    stop(this: void): void

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for programmable speakers.
 */
interface LuaProgrammableSpeakerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    circuit_condition: CircuitConditionDefinition

    circuit_parameters: ProgrammableSpeakerCircuitParameters

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * An interface to send messages to the calling RCON interface.
 */
interface LuaRCON {
    /**
     * Print text to the calling RCON interface if any.
     */
    print(this: void,
        message: LocalisedString): void

    /**
     * This object's name.
     */
    readonly object_name: string

}

/**
 * Control behavior for rail chain signals.
 */
interface LuaRailChainSignalControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    blue_signal: SignalID

    green_signal: SignalID

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    orange_signal: SignalID

    red_signal: SignalID

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A rail path.
 */
interface LuaRailPath {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The current rail index.
     */
    readonly current: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Array of the rails that this path travels over.
     */
    readonly rails: {[key: number]: LuaEntity}

    /**
     * The total number of rails in this path.
     */
    readonly size: number

    /**
     * The total path distance.
     */
    readonly total_distance: number

    /**
     * The total distance travelled.
     */
    readonly travelled_distance: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for rail signals.
 */
interface LuaRailSignalControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The circuit condition when controlling the signal through the circuit network.
     */
    circuit_condition: CircuitConditionDefinition

    /**
     * If this will close the rail signal based off the circuit condition.
     */
    close_signal: boolean

    green_signal: SignalID

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    orange_signal: SignalID

    /**
     * If this will read the rail signal state.
     */
    read_signal: boolean

    red_signal: SignalID

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A deterministic random generator independent from the core games random generator that can be seeded and re-seeded at will. This random generator can be saved and loaded and will maintain its state. Note this is entirely different from calling {@link math.random | Libraries.html#math.random}() and you should be sure you actually want to use this over calling `math.random()`. If you aren't sure if you need to use this over calling `math.random()` then you probably don't need to use this.
 * @example
 * Create a generator and use it to print a random number. 
 * ```
 * global.generator = game.create_random_generator()
 * game.player.print(global.generator())
 * ```
 *
 */
interface LuaRandomGenerator {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Re-seeds the random generator with the given value.
     * @remarks
     * Seeds that are close together will produce similar results. Seeds from 0 to 341 will produce the same results.
     *
     */
    re_seed(this: void,
        seed: number): void

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Generates a random number. If no parameters are given a number in the [0, 1) range is returned. If a single parameter is given a floored number in the [1, N] range is returned. If 2 parameters are given a floored number in the [N1, N2] range is returned.
     * @param lower - Inclusive lower bound on the result
     * @param upper - Inclusive upper bound on the result
     */
    (this: void,
        lower?: number,
        upper?: number): number

}

/**
 * A crafting recipe. Recipes belong to forces (see {@link LuaForce | LuaForce}) because some recipes are unlocked by research, and researches are per-force.
 */
interface LuaRecipe {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Reload the recipe from the prototype.
     */
    reload(this: void): void

    /**
     * Category of the recipe.
     */
    readonly category: string

    /**
     * Can the recipe be used?
     */
    enabled: boolean

    /**
     * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
     */
    readonly energy: number

    /**
     * The force that owns this recipe.
     */
    readonly force: LuaForce

    /**
     * Group of this recipe.
     */
    readonly group: LuaGroup

    /**
     * Is the recipe hidden? Hidden recipe don't show up in the crafting menu.
     */
    readonly hidden: boolean

    /**
     * Is the recipe hidden from flow statistics?
     */
    hidden_from_flow_stats: boolean

    /**
     * Ingredients for this recipe.
     * @example
     * What the "steel-chest" recipe would return 
     * ```
     * {{type="item", name="steel-plate", amount=8}}
     * ```
     *
     * @example
     * What the "advanced-oil-processing" recipe would return 
     * ```
     * {{type="fluid", name="crude-oil", amount=10}, {type="fluid", name="water", amount=5}}
     * ```
     *
     */
    readonly ingredients: Ingredient[]

    readonly localised_description: LocalisedString

    /**
     * Localised name of the recipe.
     */
    readonly localised_name: LocalisedString

    /**
     * Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string. This is used to sort the crafting menu.
     */
    readonly order: string

    /**
     * The results of this recipe.
     */
    readonly products: Product[]

    /**
     * The prototype for this recipe.
     */
    readonly prototype: LuaRecipePrototype

    /**
     * Subgroup of this recipe.
     */
    readonly subgroup: LuaGroup

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a recipe category.
 */
interface LuaRecipeCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A crafting recipe prototype.
 */
interface LuaRecipePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * If this recipe is enabled for the purpose of intermediate hand-crafting.
     */
    readonly allow_as_intermediate: boolean

    /**
     * Is this recipe allowed to be broken down for the recipe tooltip "Total raw" calculations?
     */
    readonly allow_decomposition: boolean

    /**
     * If the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
     */
    readonly allow_inserter_overload: boolean

    /**
     * If this recipe is allowed to use intermediate recipes when hand-crafting.
     */
    readonly allow_intermediates: boolean

    /**
     * Should this recipe always show "Made in" in the tooltip?
     */
    readonly always_show_made_in: boolean

    /**
     * If the products are always shown in the recipe tooltip.
     */
    readonly always_show_products: boolean

    /**
     * Category of the recipe.
     */
    readonly category: string

    /**
     * The emissions multiplier for this recipe.
     */
    readonly emissions_multiplier: number

    /**
     * If this recipe prototype is enabled by default (enabled at the beginning of a game).
     */
    readonly enabled: boolean

    /**
     * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
     */
    readonly energy: number

    /**
     * Group of this recipe.
     */
    readonly group: LuaGroup

    /**
     * Is the recipe hidden? Hidden recipe don't show up in the crafting menu.
     */
    readonly hidden: boolean

    /**
     * Is the recipe hidden from flow statistics (item/fluid production statistics)?
     */
    readonly hidden_from_flow_stats: boolean

    /**
     * Is the recipe hidden from player crafting? The recipe will still show up for selection in machines.
     */
    readonly hidden_from_player_crafting: boolean

    /**
     * Ingredients for this recipe.
     */
    readonly ingredients: Ingredient[]

    readonly localised_description: LocalisedString

    /**
     * Localised name of the recipe.
     */
    readonly localised_name: LocalisedString

    /**
     * The main product of this recipe, `nil` if no main product is defined.
     */
    readonly main_product: Product

    /**
     * Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string. This is used to sort the crafting menu.
     */
    readonly order: string

    /**
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough".
     */
    readonly overload_multiplier: number

    /**
     * The results of this recipe.
     */
    readonly products: Product[]

    /**
     * The multiplier used when this recipe is copied from an assembling machine to a requester chest. For each item in the recipe the item count * this value is set in the requester chest.
     */
    readonly request_paste_multiplier: number

    /**
     * If the amount is shown in the recipe tooltip title when the recipe produces more than 1 product.
     */
    readonly show_amount_in_title: boolean

    /**
     * Subgroup of this recipe.
     */
    readonly subgroup: LuaGroup

    /**
     * Is this recipe unlocks the result item(s) so they're shown in filter-select GUIs.
     */
    readonly unlock_results: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Registry of interfaces between scripts. An interface is simply a dictionary mapping names to functions. A script or mod can then register an interface with {@link LuaRemote | LuaRemote}, after that any script can call the registered functions, provided it knows the interface name and the desired function name. An instance of LuaRemote is available through the global object named `remote`.
 * @example
 * Will register a remote interface containing two functions. Later, it will call these functions through `remote`. 
 * ```
 * remote.add_interface("human interactor",
 *                      {hello = function() game.player.print("Hi!") end,
 *                       bye = function(name) game.player.print("Bye " .. name) end})
 * -- Some time later, possibly in a different mod...
 * remote.call("human interactor", "hello")
 * remote.call("human interactor", "bye", "dear reader")
 * ```
 *
 */
interface LuaRemote {
    /**
     * Add a remote interface.
     * @remarks
     * It is an error if the given interface `name` is already registered.
     *
     * @param functions - List of functions that are members of the new interface.
     * @param name - Name of the interface.
     */
    add_interface(this: void,
        name: string,
        functions: {[key: string]: (this: void) => any}): void

    /**
     * Call a function of an interface.
     * @param fn - Function name that belongs to `interface`.
     * @param interface - Interface to look up `function` in.
     * @param ...args - Arguments to pass to the called function.
     */
    call(this: void,
        interface: string,
        fn: string,
        ...args: any[]): any

    /**
     * Removes an interface with the given name.
     * @param name - Name of the interface.
     * @returns If the interface was removed. `False` if the interface didn't exist.
     */
    remove_interface(this: void,
        name: string): boolean

    /**
     * List of all registered interfaces. For each interface name, `remote.interfaces[name]` is a dictionary mapping the interface's registered functions to the value `true`.
     * @example
     * Assuming the "human interactor" interface is registered as above 
     * ```
     * game.player.print(tostring(remote.interfaces["human interactor"]["hello"]))        -- prints true
     * game.player.print(tostring(remote.interfaces["human interactor"]["nonexistent"]))  -- prints nil
     * ```
     *
     */
    readonly interfaces: {[key: string]: {[key: string]: boolean}}

    /**
     * This object's name.
     */
    readonly object_name: string

}

/**
 * Allows rendering of geometric shapes, text and sprites in the game world. Each render object is identified by an id that is universally unique for the lifetime of a whole game.
 * @remarks
 * If an entity target of an object is destroyed or changes surface, then the object is also destroyed.
 *
 */
interface LuaRendering {
    /**
     * Reorder this object so that it is drawn in front of the already existing objects.
     */
    bring_to_front(this: void,
        id: number): void

    /**
     * Destroys all render objects.
     * @param mod_name - If provided, only the render objects created by this mod are destroyed.
     */
    clear(this: void,
        mod_name?: string): void

    /**
     * Destroy the object with the given id.
     */
    destroy(this: void,
        id: number): void

    /**
     * Create an animation.
     * @param table.animation - Name of an [animation prototype](https://wiki.factorio.com/Prototype/Animation).
     * @param table.animation_offset - Offset of the animation in frames. Default is 0.
     * @param table.animation_speed - How many frames the animation goes forward per tick. Default is 1.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the animation. Default is 0.
     * @param table.orientation_target - If given, the animation rotates so that it faces this target. Note that `orientation` is still applied to the animation.
     * @param table.orientation_target_offset - Only used if `orientation_target` is a LuaEntity.
     * @param table.oriented_offset - Offsets the center of the animation if `orientation_target` is given. This offset will rotate together with the animation.
     * @param table.players - The players that this object is rendered to.
     * @param table.target - Center of the animation.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.x_scale - Horizontal scale of the animation. Default is 1.
     * @param table.y_scale - Vertical scale of the animation. Default is 1.
     * @returns Id of the render object
     */
    draw_animation(this: void,
        table: {
            animation: string,
            orientation?: RealOrientation,
            x_scale?: number,
            y_scale?: number,
            tint?: Color,
            render_layer?: RenderLayer,
            animation_speed?: number,
            animation_offset?: number,
            orientation_target?: Position | LuaEntity,
            orientation_target_offset?: Vector,
            oriented_offset?: Vector,
            target: Position | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create an arc.
     * @param table.angle - The angle of the arc, in radian.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.max_radius - The radius of the outer edge of the arc, in tiles.
     * @param table.min_radius - The radius of the inner edge of the arc, in tiles.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to.
     * @param table.start_angle - Where the arc starts, in radian.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @returns Id of the render object
     */
    draw_arc(this: void,
        table: {
            color: Color,
            max_radius: number,
            min_radius: number,
            start_angle: number,
            angle: number,
            target: Position | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create a circle.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.filled - If the circle should be filled.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to.
     * @param table.radius - In tiles.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.width - Width of the outline, used only if filled = false. Value is in pixels (32 per tile).
     * @returns Id of the render object
     */
    draw_circle(this: void,
        table: {
            color: Color,
            radius: number,
            width?: number,
            filled: boolean,
            target: Position | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create a light.
     * @remarks
     * The base game uses the utility sprites `light_medium` and `light_small` for lights.
     *
     * @param table.color - Defaults to white (no tint).
     * @param table.forces - The forces that this object is rendered to.
     * @param table.intensity - Default is 1.
     * @param table.minimum_darkness - The minimum darkness at which this light is rendered. Default is 0.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the light. Default is 0.
     * @param table.oriented - If this light has the same orientation as the entity target, default is false. Note that `orientation` is still applied to the sprite.
     * @param table.players - The players that this object is rendered to.
     * @param table.scale - Default is 1.
     * @param table.target - Center of the light.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @returns Id of the render object
     */
    draw_light(this: void,
        table: {
            sprite: SpritePath,
            orientation?: RealOrientation,
            scale?: number,
            intensity?: number,
            minimum_darkness?: number,
            oriented?: boolean,
            color?: Color,
            target: Position | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create a line.
     * @param table.dash_length - Length of the dashes that this line has. Used only if gap_length > 0. Default is 0.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.from_offset - Only used if `from` is a LuaEntity.
     * @param table.gap_length - Length of the gaps that this line has, in tiles. Default is 0.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.to_offset - Only used if `to` is a LuaEntity.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.width - In pixels (32 per tile).
     * @example
     * Draw a white and 2 pixel wide line from {0, 0} to {2, 2}. 
     * ```
     * rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {2, 2}, color = {1, 1, 1}, width = 2}
     * ```
     *
     * @example
     * Draw a red and 3 pixel wide line from {0, 0} to {0, 5}. The line has 1 tile long dashes and gaps. 
     * ```
     * rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {0, 5}, color = {r = 1}, width = 3, gap_length = 1, dash_length = 1}
     * ```
     *
     * @returns Id of the render object
     */
    draw_line(this: void,
        table: {
            color: Color,
            width: number,
            gap_length?: number,
            dash_length?: number,
            from: Position | LuaEntity,
            from_offset?: Vector,
            to: Position | LuaEntity,
            to_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create a triangle mesh defined by a triangle strip.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation applied to all vertices. Default is 0.
     * @param table.orientation_target - If given, the vertices (that are not set to an entity) rotate so that it faces this target. Note that `orientation` is still applied.
     * @param table.orientation_target_offset - Only used if `orientation_target` is a LuaEntity.
     * @param table.players - The players that this object is rendered to.
     * @param table.target - Acts like an offset applied to all vertices that are not set to an entity.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @returns Id of the render object
     */
    draw_polygon(this: void,
        table: {
            color: Color,
            vertices: ScriptRenderVertexTarget[],
            target?: Position | LuaEntity,
            target_offset?: Vector,
            orientation?: RealOrientation,
            orientation_target?: Position | LuaEntity,
            orientation_target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create a rectangle.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.filled - If the rectangle should be filled.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.left_top_offset - Only used if `left_top` is a LuaEntity.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to.
     * @param table.right_bottom_offset - Only used if `right_bottom` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.width - Width of the outline, used only if filled = false. Value is in pixels (32 per tile).
     * @returns Id of the render object
     */
    draw_rectangle(this: void,
        table: {
            color: Color,
            width?: number,
            filled: boolean,
            left_top: Position | LuaEntity,
            left_top_offset?: Vector,
            right_bottom: Position | LuaEntity,
            right_bottom_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create a sprite.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the sprite. Default is 0.
     * @param table.orientation_target - If given, the sprite rotates so that it faces this target. Note that `orientation` is still applied to the sprite.
     * @param table.orientation_target_offset - Only used if `orientation_target` is a LuaEntity.
     * @param table.oriented_offset - Offsets the center of the sprite if `orientation_target` is given. This offset will rotate together with the sprite.
     * @param table.players - The players that this object is rendered to.
     * @param table.target - Center of the sprite.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.x_scale - Horizontal scale of the sprite. Default is 1.
     * @param table.y_scale - Vertical scale of the sprite. Default is 1.
     * @example
     * This will draw an iron plate icon at the character's feet. The sprite will move together with the character. 
     * ```
     * rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, surface = game.player.surface}
     * ```
     *
     * @example
     * This will draw an iron plate icon at the character's head. The sprite will move together with the character. 
     * ```
     * rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, target_offset = {0, -2}, surface = game.player.surface}
     * ```
     *
     * @returns Id of the render object
     */
    draw_sprite(this: void,
        table: {
            sprite: SpritePath,
            orientation?: RealOrientation,
            x_scale?: number,
            y_scale?: number,
            tint?: Color,
            render_layer?: RenderLayer,
            orientation_target?: Position | LuaEntity,
            orientation_target_offset?: Vector,
            oriented_offset?: Vector,
            target: Position | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Create a text.
     * @remarks
     * Not all fonts support scaling.
     *
     * @param table.alignment - Defaults to "left". Other options are "right" and "center".
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.font - Name of font to use. Defaults to the same font as flying-text.
     * @param table.forces - The forces that this object is rendered to.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the text. Default is 0.
     * @param table.players - The players that this object is rendered to.
     * @param table.scale_with_zoom - Defaults to false. If true, the text scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.text - The text to display.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.vertical_alignment - Defaults to "top". Other options are "middle", "baseline" and "bottom".
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @returns Id of the render object
     */
    draw_text(this: void,
        table: {
            text: LocalisedString,
            surface: SurfaceIdentification,
            target: Position | LuaEntity,
            target_offset?: Vector,
            color: Color,
            scale?: number,
            font?: string,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            orientation?: RealOrientation,
            alignment?: string,
            vertical_alignment?: string,
            scale_with_zoom?: boolean,
            only_in_alt_mode?: boolean
        }): number

    /**
     * Get the alignment of the text with this id or `nil` if the object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_alignment(this: void,
        id: number): string

    /**
     * Gets an array of all valid object ids.
     * @param mod_name - If provided, get only the render objects created by this mod.
     */
    get_all_ids(this: void,
        mod_name?: string): number[]

    /**
     * Get the angle of the arc with this id or `nil` if the object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     * @returns angle in radian
     */
    get_angle(this: void,
        id: number): number

    /**
     * Get the animation prototype name of the animation with this id or `nil` if the object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     */
    get_animation(this: void,
        id: number): string

    /**
     * Get the animation offset of the animation with this id or `nil` if the object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     * @returns Animation offset in frames.
     */
    get_animation_offset(this: void,
        id: number): number

    /**
     * Get the animation speed of the animation with this id or `nil` if the object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     * @returns Animation speed in frames per tick.
     */
    get_animation_speed(this: void,
        id: number): number

    /**
     * Get the color or tint of the object with this id.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon,Sprite,Light,Animation
     *
     * @returns or `nil` if the object does not support color.
     */
    get_color(this: void,
        id: number): Color | null

    /**
     * Get the dash length of the line with this id or `nil` if the object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_dash_length(this: void,
        id: number): number

    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon
     *
     */
    get_draw_on_ground(this: void,
        id: number): boolean

    /**
     * Get if the circle or rectangle with this id is filled or `nil` if the object is not a circle or rectangle.
     * @remarks
     * Applies to subclasses: Circle,Rectangle
     *
     */
    get_filled(this: void,
        id: number): boolean

    /**
     * Get the font of the text with this id or `nil` if the object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_font(this: void,
        id: number): string

    /**
     * Get the forces that the object with this id is rendered to or `nil` if visible to all forces.
     */
    get_forces(this: void,
        id: number): LuaForce[]

    /**
     * Get from where the line with this id is drawn or `nil` if this object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_from(this: void,
        id: number): ScriptRenderTarget

    /**
     * Get the length of the gaps in the line with this id or `nil` if the object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_gap_length(this: void,
        id: number): number

    /**
     * Get the intensity of the light with this id or `nil` if the object is not a light.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    get_intensity(this: void,
        id: number): number

    /**
     * Get where top left corner of the rectangle with this id is drawn or `nil` if the object is not a rectangle.
     * @remarks
     * Applies to subclasses: Rectangle
     *
     */
    get_left_top(this: void,
        id: number): ScriptRenderTarget

    /**
     * Get the radius of the outer edge of the arc with this id or `nil` if the object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    get_max_radius(this: void,
        id: number): number

    /**
     * Get the radius of the inner edge of the arc with this id or `nil` if the object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    get_min_radius(this: void,
        id: number): number

    /**
     * Get the minimum darkness at which the light with this id is rendered or `nil` if the object is not a light.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    get_minimum_darkness(this: void,
        id: number): number

    /**
     * Get whether this is only rendered in alt-mode.
     */
    get_only_in_alt_mode(this: void,
        id: number): boolean

    /**
     * Get the orientation of the object with this id or `nil` if the object is not a text, polygon, sprite, light or animation.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Text,Polygon,Sprite,Light,Animation
     *
     */
    get_orientation(this: void,
        id: number): RealOrientation

    /**
     * The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Get the orientation_target of the object with this id or `nil` if no target or if this object is not a polygon, sprite, or animation.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Polygon,Sprite,Animation
     *
     */
    get_orientation_target(this: void,
        id: number): ScriptRenderTarget

    /**
     * Get if the light with this id is rendered has the same orientation as the target entity or `nil` if the object is not a light. Note that `orientation` is still applied to the sprite.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    get_oriented(this: void,
        id: number): boolean

    /**
     * Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation. Get the oriented_offset of the sprite or animation with this id or `nil` if this object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_oriented_offset(this: void,
        id: number): Vector

    /**
     * Get the players that the object with this id is rendered to or `nil` if visible to all players.
     */
    get_players(this: void,
        id: number): LuaPlayer[]

    /**
     * Get the radius of the circle with this id or `nil` if the object is not a circle.
     * @remarks
     * Applies to subclasses: Circle
     *
     */
    get_radius(this: void,
        id: number): number

    /**
     * Get the render layer of the sprite or animation with this id or `nil` if the object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_render_layer(this: void,
        id: number): RenderLayer

    /**
     * Get where bottom right corner of the rectangle with this id is drawn or `nil` if the object is not a rectangle.
     * @remarks
     * Applies to subclasses: Rectangle
     *
     */
    get_right_bottom(this: void,
        id: number): ScriptRenderTarget

    /**
     * Get the scale of the text or light with this id or `nil` if the object is not a text or light.
     * @remarks
     * Applies to subclasses: Text,Light
     *
     */
    get_scale(this: void,
        id: number): number

    /**
     * Get if the text with this id scales with player zoom or `nil` if the object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_scale_with_zoom(this: void,
        id: number): boolean

    /**
     * Get the sprite of the sprite or light with this id or `nil` if the object is not a sprite or light.
     * @remarks
     * Applies to subclasses: Sprite,Light
     *
     */
    get_sprite(this: void,
        id: number): SpritePath

    /**
     * Get where the arc with this id starts or `nil` if the object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     * @returns angle in radian
     */
    get_start_angle(this: void,
        id: number): number

    /**
     * The surface the object with this id is rendered on.
     */
    get_surface(this: void,
        id: number): LuaSurface

    /**
     * Get where the object with this id is drawn or `nil` if the object does not support target.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Text,Circle,Arc,Polygon,Sprite,Light,Animation
     *
     */
    get_target(this: void,
        id: number): ScriptRenderTarget

    /**
     * Get the text that is displayed by the text with this id or `nil` if the object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_text(this: void,
        id: number): LocalisedString

    /**
     * Get the time to live of the object with this id. This will be 0 if the object does not expire.
     */
    get_time_to_live(this: void,
        id: number): number

    /**
     * Get where the line with this id is drawn to or `nil` if the object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_to(this: void,
        id: number): ScriptRenderTarget

    /**
     * Gets the type of the given object. The types are "text", "line", "circle", "rectangle", "arc", "polygon", "sprite", "light" and "animation".
     */
    get_type(this: void,
        id: number): string

    /**
     * Get the vertical alignment of the text with this id or `nil` if the object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_vertical_alignment(this: void,
        id: number): string

    /**
     * Get the vertices of the polygon with this id or `nil` if the object is not a polygon.
     * @remarks
     * Applies to subclasses: Polygon
     *
     */
    get_vertices(this: void,
        id: number): ScriptRenderTarget[]

    /**
     * Get whether this is rendered to anyone at all.
     */
    get_visible(this: void,
        id: number): boolean

    /**
     * Get the width of the object with this id. Value is in pixels (32 per tile).
     * @remarks
     * Applies to subclasses: Line,Circle,Rectangle
     *
     * @returns or `nil` if the object does not support width.
     */
    get_width(this: void,
        id: number): number | null

    /**
     * Get the horizontal scale of the sprite or animation with this id or `nil` if the object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_x_scale(this: void,
        id: number): number

    /**
     * Get the vertical scale of the sprite or animation with this id or `nil` if the object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_y_scale(this: void,
        id: number): number

    /**
     * Does a font with this name exist?
     */
    is_font_valid(this: void,
        font_name: string): boolean

    /**
     * Does a valid object with this id exist?
     */
    is_valid(this: void,
        id: number): boolean

    /**
     * Set the alignment of the text with this id. Does nothing if this object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     * @param alignment - "left", "right" or "center".
     */
    set_alignment(this: void,
        id: number,
        alignment: string): void

    /**
     * Set the angle of the arc with this id. Does nothing if this object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     * @param angle - angle in radian
     */
    set_angle(this: void,
        id: number,
        angle: number): void

    /**
     * Set the animation prototype name of the animation with this id. Does nothing if this object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     */
    set_animation(this: void,
        id: number,
        animation: string): void

    /**
     * Set the animation offset of the animation with this id. Does nothing if this object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     * @param animation_offset - Animation offset in frames.
     */
    set_animation_offset(this: void,
        id: number,
        animation_offset: number): void

    /**
     * Set the animation speed of the animation with this id. Does nothing if this object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     * @param animation_speed - Animation speed in frames per tick.
     */
    set_animation_speed(this: void,
        id: number,
        animation_speed: number): void

    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon,Sprite,Light,Animation
     *
     */
    set_color(this: void,
        id: number,
        color: Color): void

    /**
     * Set the corners of the rectangle with this id. Does nothing if this object is not a rectangle.
     * @remarks
     * Applies to subclasses: Rectangle
     *
     */
    set_corners(this: void,
        id: number,
        left_top: Position | LuaEntity,
        left_top_offset: Vector,
        right_bottom: Position | LuaEntity,
        right_bottom_offset: Vector): void

    /**
     * Set the dash length of the line with this id. Does nothing if this object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_dash_length(this: void,
        id: number,
        dash_length: number): void

    /**
     * Set the length of the dashes and the length of the gaps in the line with this id. Does nothing if this object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_dashes(this: void,
        id: number,
        dash_length: number,
        gap_length: number): void

    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon
     *
     */
    set_draw_on_ground(this: void,
        id: number,
        draw_on_ground: boolean): void

    /**
     * Set if the circle or rectangle with this id is filled. Does nothing if this object is not a circle or rectangle.
     * @remarks
     * Applies to subclasses: Circle,Rectangle
     *
     */
    set_filled(this: void,
        id: number,
        filled: boolean): void

    /**
     * Set the font of the text with this id. Does nothing if this object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    set_font(this: void,
        id: number,
        font: string): void

    /**
     * Set the forces that the object with this id is rendered to.
     * @param forces - Providing an empty array will set the object to be visible to all forces.
     */
    set_forces(this: void,
        id: number,
        forces: ForceIdentification[]): void

    /**
     * Set from where the line with this id is drawn. Does nothing if the object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_from(this: void,
        id: number,
        from: Position | LuaEntity,
        from_offset?: Vector): void

    /**
     * Set the length of the gaps in the line with this id. Does nothing if this object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_gap_length(this: void,
        id: number,
        gap_length: number): void

    /**
     * Set the intensity of the light with this id. Does nothing if this object is not a light.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    set_intensity(this: void,
        id: number,
        intensity: number): void

    /**
     * Set where top left corner of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
     * @remarks
     * Applies to subclasses: Rectangle
     *
     */
    set_left_top(this: void,
        id: number,
        left_top: Position | LuaEntity,
        left_top_offset?: Vector): void

    /**
     * Set the radius of the outer edge of the arc with this id. Does nothing if this object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    set_max_radius(this: void,
        id: number,
        max_radius: number): void

    /**
     * Set the radius of the inner edge of the arc with this id. Does nothing if this object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    set_min_radius(this: void,
        id: number,
        min_radius: number): void

    /**
     * Set the minimum darkness at which the light with this id is rendered. Does nothing if this object is not a light.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    set_minimum_darkness(this: void,
        id: number,
        minimum_darkness: number): void

    /**
     * Set whether this is only rendered in alt-mode.
     */
    set_only_in_alt_mode(this: void,
        id: number,
        only_in_alt_mode: boolean): void

    /**
     * Set the orientation of the object with this id. Does nothing if this object is not a text, polygon, sprite, light or animation.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Text,Polygon,Sprite,Light,Animation
     *
     */
    set_orientation(this: void,
        id: number,
        orientation: RealOrientation): void

    /**
     * The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Set the orientation_target of the object with this id. Does nothing if this object is not a polygon, sprite, or animation. Set to `nil` if the object should not have an orientation_target.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Polygon,Sprite,Animation
     *
     */
    set_orientation_target(this: void,
        id: number,
        orientation_target: Position | LuaEntity,
        orientation_target_offset?: Vector): void

    /**
     * Set if the light with this id is rendered has the same orientation as the target entity. Does nothing if this object is not a light. Note that `orientation` is still applied to the sprite.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    set_oriented(this: void,
        id: number,
        oriented: boolean): void

    /**
     * Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation. Set the oriented_offset of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    set_oriented_offset(this: void,
        id: number,
        oriented_offset: Vector): void

    /**
     * Set the players that the object with this id is rendered to.
     * @param players - Providing an empty array will set the object to be visible to all players.
     */
    set_players(this: void,
        id: number,
        players: PlayerIdentification[]): void

    /**
     * Set the radius of the circle with this id. Does nothing if this object is not a circle.
     * @remarks
     * Applies to subclasses: Circle
     *
     */
    set_radius(this: void,
        id: number,
        radius: number): void

    /**
     * Set the render layer of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    set_render_layer(this: void,
        id: number,
        render_layer: RenderLayer): void

    /**
     * Set where top bottom right of the rectangle with this id is drawn. Does nothing if this object is not a rectangle.
     * @remarks
     * Applies to subclasses: Rectangle
     *
     */
    set_right_bottom(this: void,
        id: number,
        right_bottom: Position | LuaEntity,
        right_bottom_offset?: Vector): void

    /**
     * Set the scale of the text or light with this id. Does nothing if this object is not a text or light.
     * @remarks
     * Applies to subclasses: Text,Light
     *
     */
    set_scale(this: void,
        id: number,
        scale: number): void

    /**
     * Set if the text with this id scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes. Does nothing if this object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    set_scale_with_zoom(this: void,
        id: number,
        scale_with_zoom: boolean): void

    /**
     * Set the sprite of the sprite or light with this id. Does nothing if this object is not a sprite or light.
     * @remarks
     * Applies to subclasses: Sprite,Light
     *
     */
    set_sprite(this: void,
        id: number,
        sprite: SpritePath): void

    /**
     * Set where the arc with this id starts. Does nothing if this object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     * @param start_angle - angle in radian
     */
    set_start_angle(this: void,
        id: number,
        start_angle: number): void

    /**
     * Set where the object with this id is drawn. Does nothing if this object does not support target.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Text,Circle,Arc,Polygon,Sprite,Light,Animation
     *
     */
    set_target(this: void,
        id: number,
        target: Position | LuaEntity,
        target_offset?: Vector): void

    /**
     * Set the text that is displayed by the text with this id. Does nothing if this object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    set_text(this: void,
        id: number,
        text: LocalisedString): void

    /**
     * Set the time to live of the object with this id. Set to 0 if the object should not expire.
     */
    set_time_to_live(this: void,
        id: number,
        time_to_live: number): void

    /**
     * Set where the line with this id is drawn to. Does nothing if this object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_to(this: void,
        id: number,
        to: Position | LuaEntity,
        to_offset?: Vector): void

    /**
     * Set the vertical alignment of the text with this id. Does nothing if this object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     * @param alignment - "top", "middle", "baseline" or "bottom"
     */
    set_vertical_alignment(this: void,
        id: number,
        alignment: string): void

    /**
     * Set the vertices of the polygon with this id. Does nothing if this object is not a polygon.
     * @remarks
     * Applies to subclasses: Polygon
     *
     */
    set_vertices(this: void,
        id: number,
        vertices: ScriptRenderVertexTarget[]): void

    /**
     * Set whether this is rendered to anyone at all.
     */
    set_visible(this: void,
        id: number,
        visible: boolean): void

    /**
     * Set the width of the object with this id. Does nothing if this object does not support width. Value is in pixels (32 per tile).
     * @remarks
     * Applies to subclasses: Line,Circle,Rectangle
     *
     */
    set_width(this: void,
        id: number,
        width: number): void

    /**
     * Set the horizontal scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    set_x_scale(this: void,
        id: number,
        x_scale: number): void

    /**
     * Set the vertical scale of the sprite or animation with this id. Does nothing if this object is not a sprite or animation.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    set_y_scale(this: void,
        id: number,
        y_scale: number): void

    /**
     * This object's name.
     */
    readonly object_name: string

}

/**
 * Prototype of a resource category.
 */
interface LuaResourceCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for roboports.
 */
interface LuaRoboportControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    available_construction_output_signal: SignalID

    available_logistic_output_signal: SignalID

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * `true` if the roboport should report the logistics network content to the circuit network.
     */
    read_logistics: boolean

    /**
     * `true` if the roboport should report the robot statistics to the circuit network.
     */
    read_robot_stats: boolean

    total_construction_output_signal: SignalID

    total_logistic_output_signal: SignalID

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Object containing mod settings of three distinct types: `startup`, `global`, and `player`. An instance of LuaSettings is available through the global object named `settings`.
 */
interface LuaSettings {
    /**
     * Gets the current per-player settings for the given player, indexed by prototype name. Returns the same structure as {@link LuaPlayer::mod_settings | LuaPlayer::mod_settings}.
     * @remarks
     * This table will become invalid if its associated player does.
     *
     */
    get_player_settings(this: void,
        player: PlayerIdentification): {[key: string]: ModSetting}

    /**
     * The current global mod settings, indexed by prototype name.
     * Even though these are marked as read-only, they can be changed by overwriting individual {@link ModSetting | ModSetting} tables in the custom table. Mods can only change their own settings. Using the in-game console, all global settings can be changed.
     */
    readonly global: {[key: string]: ModSetting}

    /**
     * This object's name.
     */
    readonly object_name: string

    /**
     * The default player mod settings for this map, indexed by prototype name.
     * Even though these are marked as read-only, they can be changed by overwriting individual {@link ModSetting | ModSetting} tables in the custom table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     */
    readonly player: {[key: string]: ModSetting}

    /**
     * The startup mod settings, indexed by prototype name.
     */
    readonly startup: {[key: string]: ModSetting}

}

/**
 * Prototype of a shortcut.
 */
interface LuaShortcutPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly action: string

    readonly associated_control_input: string

    readonly item_to_spawn: LuaItemPrototype

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    readonly technology_to_unlock: LuaTechnologyPrototype

    readonly toggleable: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for storage tanks.
 */
interface LuaStorageTankControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Style of a GUI element. All of the attributes listed here may be `nil` if not available for a particular GUI element.
 */
interface LuaStyle {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * @remarks
     * Applies to subclasses: TabStyle
     *
     */
    badge_font: string

    /**
     * @remarks
     * Applies to subclasses: TabStyle
     *
     */
    badge_horizontal_spacing: number

    /**
     * @remarks
     * Applies to subclasses: LuaProgressBarStyle
     *
     */
    bar_width: number

    /**
     * Space between the table cell contents bottom and border.
     * @remarks
     * Applies to subclasses: LuaTableStyle
     *
     */
    bottom_cell_padding: number

    bottom_margin: number

    bottom_padding: number

    /**
     * Space between the table cell contents and border. Sets top/right/bottom/left cell paddings to this value.
     * @remarks
     * Applies to subclasses: LuaTableStyle
     *
     */
    cell_padding: number

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    clicked_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    clicked_vertical_offset: number

    /**
     * @remarks
     * Applies to subclasses: LuaProgressBarStyle
     *
     */
    color: Color

    /**
     * Array containing the alignment for every column of this table element. Even though this property is marked as read-only, the alignment can be changed by indexing the LuaCustomTable, like so:
     * @example
     * ```
     * table_element.style.column_alignments[1] = "center"
     * ```
     *
     */
    readonly column_alignments: {[key: number]: Alignment}

    /**
     * @remarks
     * Applies to subclasses: TabStyle
     *
     */
    default_badge_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: TabStyle
     *
     */
    disabled_badge_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle,LuaTabStyle
     *
     */
    disabled_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_bottom_margin_when_activated: number

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_bottom_padding_when_activated: number

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_left_margin_when_activated: number

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_left_padding_when_activated: number

    /**
     * Sets extra_top/right/bottom/left_margin_when_activated to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    extra_margin_when_activated: number | number[]

    /**
     * Sets extra_top/right/bottom/left_padding_when_actived to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    extra_padding_when_activated: number | number[]

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_right_margin_when_activated: number

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_right_padding_when_activated: number

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_top_margin_when_activated: number

    /**
     * @remarks
     * Applies to subclasses: ScrollPaneStyle
     *
     */
    extra_top_padding_when_activated: number

    font: string

    font_color: Color

    /**
     * Gui of the {@link LuaGuiElement | LuaGuiElement} of this style.
     */
    readonly gui: LuaGui

    /**
     * Sets both minimal and maximal height to the given value.
     */
    height: number

    /**
     * Horizontal align of the inner content of the widget, possible values are "left", "center" or "right"
     */
    horizontal_align: string

    /**
     * Horizontal space between individual cells.
     * @remarks
     * Applies to subclasses: LuaTableStyle,LuaFlowStyle,LuaHorizontalFlow
     *
     */
    horizontal_spacing: number

    /**
     * If the GUI element can be squashed (by maximal width of some parent element) horizontally. This is mainly meant to be used for scroll-pane The default value is false.
     */
    horizontally_squashable: boolean

    /**
     * If the GUI element stretches its size horizontally to other elements.
     */
    horizontally_stretchable: boolean

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    hovered_font_color: Color

    /**
     * Space between the table cell contents left and border.
     * @remarks
     * Applies to subclasses: LuaTableStyle
     *
     */
    left_cell_padding: number

    left_margin: number

    left_padding: number

    /**
     * Sets top/right/bottom/left margins to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    margin: number | number[]

    /**
     * Maximal height ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_height: number

    /**
     * Maximal width ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_width: number

    /**
     * Minimal height ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_height: number

    /**
     * Minimal width ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_width: number

    /**
     * Name of this style.
     */
    readonly name: string

    /**
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_height: number

    /**
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_width: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Sets top/right/bottom/left paddings to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    padding: number | number[]

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    pie_progress_color: Color

    /**
     * How this GUI element handles rich text.
     * @remarks
     * Applies to subclasses: LuaLabelStyle,LuaTextBoxStyle,LuaTextFieldStyle
     *
     */
    rich_text_setting: defines.rich_text_setting

    /**
     * Space between the table cell contents right and border.
     * @remarks
     * Applies to subclasses: LuaTableStyle
     *
     */
    right_cell_padding: number

    right_margin: number

    right_padding: number

    /**
     * @remarks
     * Applies to subclasses: TabStyle
     *
     */
    selected_badge_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    selected_clicked_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    selected_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    selected_hovered_font_color: Color

    /**
     * @remarks
     * Applies to subclasses: LabelStyle
     *
     */
    single_line: boolean

    /**
     * Sets both width and height to the given value. Also accepts an array with two values, setting width to the first and height to the second one.
     */
    size: number | number[]

    /**
     * @remarks
     * Applies to subclasses: ImageStyle
     *
     */
    stretch_image_to_widget_size: boolean

    /**
     * @remarks
     * Applies to subclasses: LuaButtonStyle
     *
     */
    strikethrough_color: Color

    /**
     * Space between the table cell contents top and border.
     * @remarks
     * Applies to subclasses: LuaTableStyle
     *
     */
    top_cell_padding: number

    top_margin: number

    top_padding: number

    /**
     * @remarks
     * Applies to subclasses: LuaFrameStyle
     *
     */
    use_header_filler: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Vertical align of the inner content of the widget, possible values are "top", "center" or "bottom"
     */
    vertical_align: string

    /**
     * Vertical space between individual cells.
     * @remarks
     * Applies to subclasses: LuaTableStyle,LuaFlowStyle,LuaVerticalFlowStyle,LuaTabbedPaneStyle
     *
     */
    vertical_spacing: number

    /**
     * If the GUI element can be squashed (by maximal height of some parent element) vertically. This is mainly meant to be used for scroll-pane The default (parent) value for scroll pane is true, false otherwise.
     */
    vertically_squashable: boolean

    /**
     * If the GUI element stretches its size vertically to other elements.
     */
    vertically_stretchable: boolean

    /**
     * Sets both minimal and maximal width to the given value.
     */
    width: number

}

/**
 * A "domain" of the world. Surfaces can only be created and deleted through the API. Surfaces are uniquely identified by their name. Every game contains at least the surface "nauvis".
 */
interface LuaSurface {
    /**
     * Adds the given script area.
     * @returns The id of the created area.
     */
    add_script_area(this: void,
        area: ScriptArea): number

    /**
     * Adds the given script position.
     * @returns The id of the created position.
     */
    add_script_position(this: void,
        area: ScriptPosition): number

    /**
     * Sets the given area to the checkerboard lab tiles.
     * @param area - The tile area.
     */
    build_checkerboard(this: void,
        area: BoundingBox): void

    /**
     * Send a group to build a new base.
     * @remarks
     * The specified force must be AI-controlled; i.e. `force.ai_controllable` must be `true`.
     *
     * @param force - Force the new base will belong to. Defaults to enemy.
     * @param position - Location of the new base.
     * @param unit_count - Number of biters to send for the base-building task.
     */
    build_enemy_base(this: void,
        position: Position,
        unit_count: number,
        force?: ForceIdentification): void

    /**
     * @param positions - Positions for which to calculate property values
     * @param property_names - Names of properties (e.g. "elevation") to calculate
     * @returns Table of property value lists, keyed by property name
     */
    calculate_tile_properties(this: void,
        property_names: string[],
        positions: Position[]): {[key: string]: number[]}

    /**
     * If there exists an entity at the given location that can be fast-replaced with the given entity parameters.
     * @param table.direction - Direction the entity would be placed
     * @param table.force - The force that would place the entity. If not specified, the enemy force is assumed.
     * @param table.name - Name of the entity to check
     * @param table.position - Where the entity would be placed
     */
    can_fast_replace(this: void,
        table: {
            name: string,
            position: Position,
            direction?: defines.direction,
            force?: ForceIdentification
        }): boolean

    /**
     * Check for collisions with terrain or other entities.
     * @param table.build_check_type - Which type of check should be carried out.
     * @param table.direction - Direction of the placed entity.
     * @param table.force - The force that would place the entity. If not specified, the enemy force is assumed.
     * @param table.forced - If `true`, entities that can be marked for deconstruction are ignored. Only used if `build_check_type` is either `manual_ghost`, `script_ghost` or `blueprint_ghost`.
     * @param table.inner_name - The prototype name of the entity contained in the ghost. Only used if `name` is `entity-ghost`.
     * @param table.name - Name of the entity prototype to check.
     * @param table.position - Where the entity would be placed.
     */
    can_place_entity(this: void,
        table: {
            name: string,
            position: Position,
            direction?: defines.direction,
            force?: ForceIdentification,
            build_check_type?: defines.build_check_type,
            forced?: boolean,
            inner_name?: string
        }): boolean

    /**
     * Cancel a deconstruction order.
     * @param table.area - The area to cancel deconstruction orders in.
     * @param table.force - The force whose deconstruction orders to cancel.
     * @param table.item - The deconstruction item to use if any.
     * @param table.player - The player to set the last_user to if any.
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     */
    cancel_deconstruct_area(this: void,
        table: {
            area: BoundingBox,
            force: ForceIdentification,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean,
            item?: LuaItemStack
        }): void

    /**
     * Cancel a upgrade order.
     * @param table.area - The area to cancel upgrade orders in.
     * @param table.force - The force whose upgrade orders to cancel.
     * @param table.item - The upgrade item to use if any.
     * @param table.player - The player to set the last_user to if any.
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     */
    cancel_upgrade_area(this: void,
        table: {
            area: BoundingBox,
            force: ForceIdentification,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean,
            item?: LuaItemStack
        }): void

    /**
     * Clears this surface deleting all entities and chunks on it.
     * @remarks
     * This won't clear the surface immediately. It will be cleared at the end of the current tick.
     *
     * @param ignore_characters - Whether characters on this surface that are connected to or associated with players should be ignored (not destroyed).
     */
    clear(this: void,
        ignore_characters?: boolean): void

    /**
     * Clears all pollution on this surface.
     */
    clear_pollution(this: void): void

    /**
     * Clones the given area.
     * @remarks
     * {@link defines.events.on_entity_cloned | defines.events.on_entity_cloned} is raised for each entity, and then {@link defines.events.on_area_cloned | defines.events.on_area_cloned} is raised.
     * Entities are cloned in an order such that they can always be created, eg rails before trains.
     *
     * @param table.clear_destination_decoratives - If the destination decoratives should be cleared
     * @param table.clear_destination_entities - If the destination entities should be cleared
     * @param table.clone_decoratives - If decoratives should be cloned
     * @param table.clone_entities - If entities should be cloned
     * @param table.clone_tiles - If tiles should be cloned
     * @param table.create_build_effect_smoke - If true, the building effect smoke will be shown around the new entities.
     * @param table.expand_map - If the destination surface should be expanded when destination_area is outside current bounds. Default false.
     */
    clone_area(this: void,
        table: {
            source_area: BoundingBox,
            destination_area: BoundingBox,
            destination_surface?: SurfaceIdentification,
            destination_force?: LuaForce | string,
            clone_tiles?: boolean,
            clone_entities?: boolean,
            clone_decoratives?: boolean,
            clear_destination_entities?: boolean,
            clear_destination_decoratives?: boolean,
            expand_map?: boolean,
            create_build_effect_smoke?: boolean
        }): void

    /**
     * Clones the given area.
     * @remarks
     * {@link defines.events.on_entity_cloned | defines.events.on_entity_cloned} is raised for each entity, and then {@link defines.events.on_area_cloned | defines.events.on_area_cloned} is raised.
     * Entities are cloned in an order such that they can always be created, eg rails before trains.
     *
     * @param table.clear_destination_decoratives - If the destination decoratives should be cleared
     * @param table.clear_destination_entities - If the destination entities should be cleared
     * @param table.clone_decoratives - If decoratives should be cloned
     * @param table.clone_entities - If entities should be cloned
     * @param table.clone_tiles - If tiles should be cloned
     * @param table.create_build_effect_smoke - If true, the building effect smoke will be shown around the new entities.
     * @param table.expand_map - If the destination surface should be expanded when destination_area is outside current bounds. Default false.
     * @param table.manual_collision_mode - If manual-style collision checks should be done.
     */
    clone_brush(this: void,
        table: {
            source_offset: TilePosition,
            destination_offset: TilePosition,
            source_positions: TilePosition[],
            destination_surface?: SurfaceIdentification,
            destination_force?: LuaForce | string,
            clone_tiles?: boolean,
            clone_entities?: boolean,
            clone_decoratives?: boolean,
            clear_destination_entities?: boolean,
            clear_destination_decoratives?: boolean,
            expand_map?: boolean,
            manual_collision_mode?: boolean,
            create_build_effect_smoke?: boolean
        }): void

    /**
     * Clones the given entities.
     * @remarks
     * {@link defines.events.on_entity_cloned | defines.events.on_entity_cloned} is raised for each entity.
     * Entities are cloned in an order such that they can always be created, eg rails before trains.
     *
     * @param table.create_build_effect_smoke - If true, the building effect smoke will be shown around the new entities.
     */
    clone_entities(this: void,
        table: {
            entities: LuaEntity[],
            destination_offset: Vector,
            destination_surface?: SurfaceIdentification,
            destination_force?: ForceIdentification,
            snap_to_grid?: boolean,
            create_build_effect_smoke?: boolean
        }): void

    /**
     * Count entities of given type or name in a given area. Works just like {@link LuaSurface::find_entities_filtered | LuaSurface::find_entities_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of entities.
     * If no `area` or `position` are given, the entire surface is searched. If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box). If `position` and `radius` are given, this returns entities in the radius of the position. If `area` is specified, this returns entities colliding with that area.
     * @param table.invert - If the filters should be inverted. These filters are: name, type, ghost_name, ghost_type, direction, collision_mask, force.
     * @param table.radius - If given with position, will count all entities within the radius of the position.
     */
    count_entities_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: Position,
            radius?: number,
            name?: string | string[],
            type?: string | string[],
            ghost_name?: string | string[],
            ghost_type?: string | string[],
            direction?: defines.direction | defines.direction[],
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            force?: ForceIdentification | ForceIdentification[],
            to_be_deconstructed?: boolean,
            to_be_upgraded?: boolean,
            limit?: number,
            invert?: boolean
        }): number

    /**
     * Count tiles of a given name in a given area. Works just like {@link LuaSurface::find_tiles_filtered | LuaSurface::find_tiles_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of tiles.
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     * @param table.position - Ignored if not given with radius.
     * @param table.radius - If given with position, will return all entities within the radius of the position.
     */
    count_tiles_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: Position,
            radius?: number,
            name?: string | string[],
            limit?: number,
            has_hidden_tile?: boolean,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[]
        }): number

    /**
     * Adds the given decoratives to the surface.
     * @remarks
     * This will merge decoratives of the same type that already exist effectively increasing the "amount" field.
     *
     * @param table.check_collision - If collision should be checked against entities/tiles.
     */
    create_decoratives(this: void,
        table: {
            check_collision?: boolean,
            decoratives: Decorative[]
        }): void

    /**
     * Create an entity on this surface.
     * @example
     * ```
     * asm = game.surfaces[1].create_entity{name = "assembling-machine-1", position = {15, 3}, force = game.forces.player, recipe = "iron-stick"}
     * ```
     *
     * @example
     * Creates a filter inserter with circuit conditions and a filter 
     * ```
     * game.surfaces[1].create_entity{
     *   name = "filter-inserter", position = {20, 15}, force = game.player.force,
     *   conditions = {red = {name = "wood", count = 3, operator = ">"},
     *               green = {name = "iron-ore", count = 1, operator = "<"},
     *   logistics = {name = "wood", count = 3, operator = "="}},
     *   filters = {{index = 1, name = "iron-ore"}}
     * }
     * ```
     *
     * @example
     * Creates a requester chest already set to request 128 iron plates. 
     * ```
     * game.surfaces[1].create_entity{
     *   name = "logistic-chest-requester", position = {game.player.position.x+3, game.player.position.y},
     *   force = game.player.force, request_filters = {{index = 1, name = "iron-plate", count = 128}}
     * }
     * ```
     *
     * @example
     * ```
     * game.surfaces[1].create_entity{name = "big-biter", position = {15, 3}, force = game.forces.player} -- Friendly biter
     * game.surfaces[1].create_entity{name = "medium-biter", position = {15, 3}, force = game.forces.enemy} -- Enemy biter
     * ```
     *
     * @example
     * Creates a basic inserter at the player's location facing north 
     * ```
     * game.surfaces[1].create_entity{name = "inserter", position = game.player.position, direction = defines.direction.north}
     * ```
     *
     * @returns The created entity or `nil` if the creation failed.
     */
    create_entity(this: void,
        table: LuaSurfaceCreateEntityParams): LuaEntity | null

    /**
     * Creates a particle at the given location
     * @param table.name - The particle name.
     * @param table.position - Where to create the particle.
     */
    create_particle(this: void,
        table: {
            name: string,
            position: Position,
            movement: Vector,
            height: number,
            vertical_speed: number,
            frame_speed: number
        }): void

    /**
     * @param table.name - The smoke prototype name to create.
     * @param table.position - Where to create the smoke.
     */
    create_trivial_smoke(this: void,
        table: {
            name: string,
            position: Position
        }): void

    /**
     * Create a new unit group at a given position.
     * @param table.force - Force of the new unit group. Defaults to `"enemy"`.
     * @param table.position - Initial position of the new unit group.
     */
    create_unit_group(this: void,
        table: {
            position: Position,
            force?: ForceIdentification
        }): LuaUnitGroup

    /**
     * Place a deconstruction request.
     * @param table.area - The area to mark for deconstruction.
     * @param table.force - The force whose bots should perform the deconstruction.
     * @param table.item - The deconstruction item to use if any.
     * @param table.player - The player to set the last_user to if any.
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     */
    deconstruct_area(this: void,
        table: {
            area: BoundingBox,
            force: ForceIdentification,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean,
            item?: LuaItemStack
        }): void

    /**
     * @param position - The position to check
     * @param prototype - The decorative prototype to check
     */
    decorative_prototype_collides(this: void,
        prototype: string,
        position: Position): void

    /**
     * @remarks
     * This won't delete the chunk immediately. Chunks are deleted at the end of the current tick.
     *
     * @param position - The chunk position to delete
     */
    delete_chunk(this: void,
        position: ChunkPosition): void

    /**
     * Removes all decoratives from the given area. If no area and no position are given, then the entire surface is searched.
     * @param table.invert - If the filters should be inverted.
     */
    destroy_decoratives(this: void,
        table: {
            area?: BoundingBox,
            position?: TilePosition,
            name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[],
            limit?: number,
            invert?: boolean
        }): void

    /**
     * Sets the given script area to the new values.
     * @param id - The area to edit.
     */
    edit_script_area(this: void,
        id: number,
        area: ScriptArea): void

    /**
     * Sets the given script position to the new values.
     * @param id - The position to edit.
     */
    edit_script_position(this: void,
        id: number,
        area: ScriptPosition): void

    /**
     * @param position - The position to check
     * @param prototype - The entity prototype to check
     * @param use_map_generation_bounding_box - If the map generation bounding box should be used instead of the collision bounding box
     */
    entity_prototype_collides(this: void,
        prototype: EntityPrototypeIdentification,
        position: Position,
        use_map_generation_bounding_box: boolean,
        direction?: defines.direction): void

    /**
     * Find decoratives of a given name in a given area.
     * If no filters are given, returns all decoratives in the search area. If multiple filters are specified, returns only decoratives matching every given filter. If no area and no position are given, the entire surface is searched.
     * @param table.invert - If the filters should be inverted.
     * @example
     * ```
     * game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, name = "sand-decal"} -- gets all sand-decals in the rectangle
     * game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 decoratives in the rectangle
     * ```
     *
     */
    find_decoratives_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: TilePosition,
            name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[],
            limit?: number,
            invert?: boolean
        }): DecorativeResult[]

    /**
     * Find enemy units (entities with type "unit") of a given force within an area.
     * @remarks
     * This is more efficient than {@link LuaSurface::find_entities | LuaSurface::find_entities}.
     *
     * @param center - Center of the search area
     * @param force - Force to find enemies of. If not given, uses the player force.
     * @param radius - Radius of the circular search area
     * @example
     * Find all units who would be interested to attack the player, within 100-tile area. 
     * ```
     * local enemies = game.player.surface.find_enemy_units(game.player.position, 100)
     * ```
     *
     */
    find_enemy_units(this: void,
        center: Position,
        radius: number,
        force?: LuaForce | string): LuaEntity[]

    /**
     * Find entities in a given area.
     * If no area is given all entities on the surface are returned.
     * @example
     * Will evaluate to a list of all entities within given area. 
     * ```
     * game.surfaces["nauvis"].find_entities({{-10, -10}, {10, 10}})
     * ```
     *
     */
    find_entities(this: void,
        area?: BoundingBox): LuaEntity[]

    /**
     * Find all entities of the given type or name in the given area.
     * If no filters (`name`, `type`, `force`, etc.) are given, this returns all entities in the search area. If multiple filters are specified, only entities matching all given filters are returned.
     * If no `area` or `position` are given, the entire surface is searched. If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box). If `position` and `radius` are given, this returns the entities within the radius of the position. If `area` is specified, this returns the entities colliding with that area.
     * @param table.invert - If the filters should be inverted. These filters are: name, type, ghost_name, ghost_type, direction, collision_mask, force.
     * @param table.position - Has precedence over area field.
     * @param table.radius - If given with position, will return all entities within the radius of the position.
     * @example
     * ```
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, type = "resource"} -- gets all resources in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = "iron-ore"} -- gets all iron ores in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = {"iron-ore", "copper-ore"}} -- gets all iron ore and copper ore in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, force = "player"}  -- gets player owned entities in the rectangle
     * game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 entities in the rectangle
     * game.surfaces[1].find_entities_filtered{position = {0, 0}, radius = 10}  -- gets all entities within 10 tiles of the position [0,0].
     * ```
     *
     */
    find_entities_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: Position,
            radius?: number,
            name?: string | string[],
            type?: string | string[],
            ghost_name?: string | string[],
            ghost_type?: string | string[],
            direction?: defines.direction | defines.direction[],
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            force?: ForceIdentification | ForceIdentification[],
            to_be_deconstructed?: boolean,
            to_be_upgraded?: boolean,
            limit?: number,
            invert?: boolean
        }): LuaEntity[]

    /**
     * Find a specific entity at a specific position.
     * @param entity - Entity to look for
     * @param position - Coordinates to look at
     * @example
     * ```
     * game.player.selected.surface.find_entity('filter-inserter', {0,0})
     * ```
     *
     * @returns Will be `nil` if no such entity is found.
     */
    find_entity(this: void,
        entity: string,
        position: Position): LuaEntity

    /**
     * Find the logistic network that covers a given position.
     * @param force - Force the logistic network should belong to.
     * @returns The found network or `nil` if no such network was found.
     */
    find_logistic_network_by_position(this: void,
        position: Position,
        force: ForceIdentification): LuaLogisticNetwork | null

    /**
     * Finds all of the logistics networks whose construction area intersects with the given position.
     * @param force - Force the logistic networks should belong to.
     */
    find_logistic_networks_by_construction_area(this: void,
        position: Position,
        force: ForceIdentification): LuaLogisticNetwork[]

    /**
     * Find the enemy entity-with-force ({@link military entity | https://wiki.factorio.com/Military_units_and_structures}) closest to the given position.
     * @param table.force - The force the result will be an enemy of. Uses the player force if not specified.
     * @param table.max_distance - Radius of the circular search area.
     * @param table.position - Center of the search area.
     * @returns The nearest enemy entity-with-force or `nil` if no enemy could be found within the given area.
     */
    find_nearest_enemy(this: void,
        table: {
            position: Position,
            max_distance: number,
            force?: ForceIdentification
        }): LuaEntity | null

    /**
     * Find the enemy entity-with-owner closest to the given position.
     * @param table.force - The force the result will be an enemy of. Uses the player force if not specified.
     * @param table.max_distance - Radius of the circular search area.
     * @param table.position - Center of the search area.
     * @returns The nearest enemy entity-with-owner or `nil` if no enemy could be found within the given area.
     */
    find_nearest_enemy_entity_with_owner(this: void,
        table: {
            position: Position,
            max_distance: number,
            force?: ForceIdentification
        }): LuaEntity | null

    /**
     * Find a non-colliding position within a given radius.
     * @remarks
     * Special care needs to be taken when using a radius of `0`. The game will not stop searching until it finds a suitable position, so it is important to make sure such a position exists. One particular case where it would not be able to find a solution is running it before any chunks have been generated.
     *
     * @param center - Center of the search area.
     * @param force_to_tile_center - Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Default false.
     * @param name - Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param precision - The step length from the given position as it searches, in tiles. Minimum value is `0.01`.
     * @param radius - Max distance from `center` to search in. A radius of `0` means an infinitely-large search area.
     * @returns The non-colliding position. May be `nil` if no suitable position was found.
     */
    find_non_colliding_position(this: void,
        name: string,
        center: Position,
        radius: number,
        precision: number,
        force_to_tile_center?: boolean): Position

    /**
     * Find a non-colliding position within a given rectangle.
     * @param force_to_tile_center - Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Default false.
     * @param name - Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param precision - The step length from the given position as it searches, in tiles. Minimum value is 0.01.
     * @param search_space - The rectangle to search inside.
     * @returns The non-colliding position. May be `nil` if no suitable position was found.
     */
    find_non_colliding_position_in_box(this: void,
        name: string,
        search_space: BoundingBox,
        precision: number,
        force_to_tile_center?: boolean): Position

    /**
     * Find all tiles of the given name in the given area.
     * If no filters are given, this returns all tiles in the search area.
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     * @param table.position - Ignored if not given with radius.
     * @param table.radius - If given with position, will return all entities within the radius of the position.
     */
    find_tiles_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: Position,
            radius?: number,
            name?: string | string[],
            limit?: number,
            has_hidden_tile?: boolean,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[]
        }): LuaTile[]

    /**
     * Find units (entities with type "unit") of a given force and force condition within a given area.
     * @remarks
     * This is more efficient than {@link LuaSurface::find_entities | LuaSurface::find_entities}.
     *
     * @param table.area - Box to find units within.
     * @param table.condition - Only forces which meet the condition will be included in the search.
     * @param table.force - Force performing the search.
     * @example
     * Find friendly units to "player" force 
     * ```
     * local friendly_units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "friend")
     * ```
     *
     * @example
     * Find units of "player" force 
     * ```
     * local units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "same"})
     * ```
     *
     */
    find_units(this: void,
        table: {
            area: BoundingBox,
            force: LuaForce | string,
            condition: ForceCondition
        }): LuaEntity[]

    /**
     * Blocks and generates all chunks that have been requested using all available threads.
     */
    force_generate_chunk_requests(this: void): void

    /**
     * Get an iterator going over every chunk on this surface.
     */
    get_chunks(this: void): LuaChunkIterator

    /**
     * Gets the closest entity in the list to this position.
     * @param entities - The Entities to check
     */
    get_closest(this: void,
        position: Position,
        entities: LuaEntity[]): LuaEntity

    /**
     * Gets all tiles of the given types that are connected horizontally or vertically to the given tile position including the given tile position.
     * @remarks
     * This won't find tiles in non-generated chunks.
     *
     * @param position - The tile position to start at.
     * @param tiles - The tiles to search for.
     * @returns The resulting set of tiles.
     */
    get_connected_tiles(this: void,
        position: Position,
        tiles: string[]): Position[]

    /**
     * Returns all the entities with force on this chunk for the given force.
     * @param force - Entities of this force will be returned.
     * @param position - The chunk's position.
     */
    get_entities_with_force(this: void,
        position: ChunkPosition,
        force: LuaForce | string): LuaEntity[]

    /**
     * The hidden tile name or `nil` if there isn't one for the given position.
     * @param position - The tile position.
     */
    get_hidden_tile(this: void,
        position: TilePosition): string

    /**
     * Gets the map exchange string for the current map generation settings of this surface.
     */
    get_map_exchange_string(this: void): string

    /**
     * Get the pollution for a given position.
     * @remarks
     * Pollution is stored per chunk, so this will return the same value for all positions in one chunk.
     *
     * @example
     * ```
     * game.surfaces[1].get_pollution({1,2})
     * ```
     *
     */
    get_pollution(this: void,
        position: Position): number

    /**
     * Gets a random generated chunk position or 0,0 if no chunks have been generated on this surface.
     */
    get_random_chunk(this: void): ChunkPosition

    /**
     * Gets the resource amount of all resources on this surface
     */
    get_resource_counts(this: void): {[key: string]: number}

    /**
     * Gets the first script area by name or id.
     * @param key - The name or id of the area to get.
     */
    get_script_area(this: void,
        key?: string | number): ScriptArea

    /**
     * Gets the script areas that match the given name or if no name is given all areas are returned.
     */
    get_script_areas(this: void,
        name?: string): ScriptArea[]

    /**
     * Gets the first script position by name or id.
     * @param key - The name or id of the position to get.
     */
    get_script_position(this: void,
        key?: string | number): ScriptPosition

    /**
     * Gets the script positions that match the given name or if no name is given all positions are returned.
     */
    get_script_positions(this: void,
        name?: string): ScriptPosition[]

    /**
     * Gets the starting area radius of this surface.
     */
    get_starting_area_radius(this: void): number

    /**
     * Get the tile at a given position.
     * @remarks
     * The input position params can also be a single tile position.
     *
     */
    get_tile(this: void,
        x: number,
        y: number): LuaTile

    /**
     * Gets the total amount of pollution on the surface by iterating over all of the chunks containing pollution.
     */
    get_total_pollution(this: void): number

    /**
     * Gets train stops matching the given filters.
     */
    get_train_stops(this: void,
        table?: {
            name?: string | string[],
            force?: ForceIdentification
        }): LuaEntity[]

    /**
     * @param force - If given only trains matching this force are returned.
     */
    get_trains(this: void,
        force?: ForceIdentification): LuaTrain[]

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Is a given chunk generated?
     * @param position - The chunk's position.
     */
    is_chunk_generated(this: void,
        position: ChunkPosition): boolean

    /**
     * Play a sound for every player on this surface.
     * @param table.override_sound_type - The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     * @param table.path - The sound to play.
     * @param table.position - Where the sound should be played. If not given, it's played at the current position of each player.
     * @param table.volume_modifier - The volume of the sound to play. Must be between 0 and 1 inclusive.
     */
    play_sound(this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
            override_sound_type?: SoundType
        }): void

    /**
     * Spawn pollution at the given position.
     * @param amount - How much pollution to add.
     * @param source - Where to spawn the pollution.
     */
    pollute(this: void,
        source: Position,
        amount: number): void

    /**
     * Print text to the chat console of all players on this surface.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        message: LocalisedString,
        color?: Color): void

    /**
     * Regenerate autoplacement of some decoratives on this surface. This can be used to autoplace newly-added decoratives.
     * @remarks
     * All specified decorative prototypes must be autoplacable. If nothing is given all decoratives are generated on all chunks.
     *
     * @param chunks - The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     * @param decoratives - Prototype names of decorative or decoratives to autoplace. When `nil` all decoratives with an autoplace are used.
     */
    regenerate_decorative(this: void,
        decoratives?: string | string[],
        chunks?: ChunkPosition[]): void

    /**
     * Regenerate autoplacement of some entities on this surface. This can be used to autoplace newly-added entities.
     * @remarks
     * All specified entity prototypes must be autoplacable. If nothing is given all entities are generated on all chunks.
     *
     * @param chunks - The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     * @param entities - Prototype names of entity or entities to autoplace. When `nil` all entities with an autoplace are used.
     */
    regenerate_entity(this: void,
        entities?: string | string[],
        chunks?: ChunkPosition[]): void

    /**
     * Removes the given script area.
     * @returns If the area was actually removed. False when it didn't exist.
     */
    remove_script_area(this: void,
        id: number): boolean

    /**
     * Removes the given script position.
     * @returns If the position was actually removed. False when it didn't exist.
     */
    remove_script_position(this: void,
        id: number): boolean

    /**
     * Generates a path with the specified constraints (as an array of {@link PathfinderWaypoints | PathfinderWaypoint}) using the unit pathfinding algorithm. This path can be used to emulate pathing behavior by script for non-unit entities. If you want to command actual units to move, use the {@link LuaEntity::set_command | LuaEntity::set_command} functionality instead.
     * The resulting path is ultimately returned asynchronously via {@link on_script_path_request_finished | on_script_path_request_finished}.
     * @param table.bounding_box - The dimensions of the object that's supposed to travel the path.
     * @param table.can_open_gates - Whether the path request can open gates. Defaults to `false`.
     * @param table.collision_mask - The list of masks the `bounding_box` collides with.
     * @param table.entity_to_ignore - Makes the pathfinder ignore collisions with this entity if it is given.
     * @param table.force - The force for which to generate the path, determining which gates can be opened for example.
     * @param table.goal - The position to find a path to.
     * @param table.path_resolution_modifier - Defines how coarse the pathfinder's grid is. Smaller values mean a coarser grid (negative numbers allowed). Defaults to `0`.
     * @param table.pathfind_flags - Flags that affect pathfinder behavior.
     * @param table.radius - How close the pathfinder needs to get to its `goal` (in tiles). Defaults to `1`.
     * @param table.start - The position from which to start pathfinding.
     * @returns A unique handle to identify this call when [on_script_path_request_finished](on_script_path_request_finished) fires.
     */
    request_path(this: void,
        table: {
            bounding_box: BoundingBox,
            collision_mask: CollisionMask | string[],
            start: Position,
            goal: Position,
            force: ForceIdentification,
            radius?: number,
            pathfind_flags?: PathfinderFlags,
            can_open_gates?: boolean,
            path_resolution_modifier?: number,
            entity_to_ignore?: LuaEntity
        }): number

    /**
     * Request that the game's map generator generate chunks at the given position for the given radius on this surface.
     * @param position - Where to generate the new chunks.
     * @param radius - The chunk radius from `position` to generate new chunks in.
     */
    request_to_generate_chunks(this: void,
        position: Position,
        radius: number): void

    /**
     * Set generated status of a chunk. Useful when copying chunks.
     * @param position - The chunk's position.
     * @param status - The chunk's new status.
     */
    set_chunk_generated_status(this: void,
        position: ChunkPosition,
        status: defines.chunk_generated_status): void

    /**
     * Set the hidden tile for the specified position. While during normal gameplay only {@link non-mineable | LuaTilePrototype::mineable_properties} tiles can become hidden, this method allows any kind of tile to be set as the hidden one.
     * @param position - The tile position.
     * @param tile - The new hidden tile or `nil` to clear the hidden tile.
     */
    set_hidden_tile(this: void,
        position: TilePosition,
        tile: string | LuaTilePrototype): void

    /**
     * Give a command to multiple units. This will automatically select suitable units for the task.
     * @param table.force - Force of the units this command is to be given to. If not specified, uses the enemy force.
     * @param table.unit_count - Number of units to give the command to.
     * @param table.unit_search_distance - Radius to search for units. The search area is centered on the destination of the command.
     * @returns Number of units actually sent. May be less than `count` if not enough units were available.
     */
    set_multi_command(this: void,
        table: {
            command: Command,
            unit_count: number,
            force?: ForceIdentification,
            unit_search_distance?: number
        }): number

    /**
     * Set tiles at specified locations. Can automatically correct the edges around modified tiles.
     * Placing a {@link mineable | LuaTilePrototype::mineable_properties} tile on top of a non-mineable one will turn the latter into the {@link LuaTile::hidden_tile | LuaTile::hidden_tile} for that tile. Placing a mineable tile on a mineable one or a non-mineable tile on a non-mineable one will not modify the hidden tile. This restriction can however be circumvented by using {@link LuaSurface::set_hidden_tile | LuaSurface::set_hidden_tile}.
     * @remarks
     * It is recommended to call this method once for all the tiles you want to change rather than calling it individually for every tile. As the tile correction is used after every step, calling it one by one could cause the tile correction logic to redo some of the changes. Also, many small API calls are generally more performance intensive than one big one.
     *
     * @param correct_tiles - If `false`, the correction logic is not applied to the changed tiles. Defaults to `true`.
     * @param raise_event - `true` or `false`. Defaults to `false`.
     * @param remove_colliding_decoratives - `true` or `false`. Defaults to `true`.
     * @param remove_colliding_entities - `true`, `false`, or `abort_on_collision`. Defaults to `true`.
     */
    set_tiles(this: void,
        tiles: Tile[],
        correct_tiles?: boolean,
        remove_colliding_entities?: boolean | string,
        remove_colliding_decoratives?: boolean,
        raise_event?: boolean): void

    /**
     * Spill items on the ground centered at a given location.
     * @param allow_belts - Whether items can be spilled onto belts. Defaults to `true`.
     * @param enable_looted - When true, each created item will be flagged with the [LuaEntity::to_be_looted](LuaEntity::to_be_looted) flag.
     * @param force - When provided (and not `nil`) the items will be marked for deconstruction by this force.
     * @param items - Items to spill
     * @param position - Center of the spillage
     * @returns The created item-on-ground entities.
     */
    spill_item_stack(this: void,
        position: Position,
        items: ItemStackIdentification,
        enable_looted?: boolean,
        force?: LuaForce | string,
        allow_belts?: boolean): LuaEntity[]

    /**
     * Place an upgrade request.
     * @param table.area - The area to mark for upgrade.
     * @param table.force - The force whose bots should perform the upgrade.
     * @param table.item - The upgrade item to use.
     * @param table.player - The player to set the last_user to if any.
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     */
    upgrade_area(this: void,
        table: {
            area: BoundingBox,
            force: ForceIdentification,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean,
            item: LuaItemStack
        }): void

    /**
     * When set to true, the sun will always shine.
     */
    always_day: boolean

    /**
     * Defines how surface daytime brightness influences each color channel of the current color lookup table (LUT).
     * The LUT is multiplied by `((1 - weight) + brightness * weight)` and result is clamped to range [0, 1].
     * Default is `{0, 0, 0}`, which means no influence.
     * @example
     * Makes night on the surface pitch black, assuming [LuaSurface::min_brightness](LuaSurface::min_brightness) being set to default value `0.15`. 
     * ```
     * game.surfaces[1].brightness_visual_weights = { 1 / 0.85, 1 / 0.85, 1 / 0.85 }
     * ```
     *
     */
    brightness_visual_weights: ColorModifier

    /**
     * Amount of darkness at the current time.
     */
    readonly darkness: number

    /**
     * The daytime when dawn starts.
     */
    dawn: number

    /**
     * Current time of day, as a number in range [0, 1).
     */
    daytime: number

    /**
     * The daytime when dusk starts.
     */
    dusk: number

    /**
     * The daytime when evening starts.
     */
    evening: number

    /**
     * True if daytime is currently frozen.
     */
    freeze_daytime: boolean

    /**
     * When set to true, new chunks will be generated with lab tiles, instead of using the surface's map generation settings.
     */
    generate_with_lab_tiles: boolean

    /**
     * Unique ID associated with this surface.
     */
    readonly index: number

    /**
     * The generation settings for this surface. These can be modified to after surface generation, but note that this will not retroactively update the surface. To manually adjust it, {@link LuaSurface::regenerate_entity | LuaSurface::regenerate_entity}, {@link LuaSurface::regenerate_decorative | LuaSurface::regenerate_decorative} and {@link LuaSurface::delete_chunk | LuaSurface::delete_chunk} can be used.
     */
    map_gen_settings: MapGenSettings

    /**
     * The minimal brightness during the night. Default is `0.15`. The value has an effect on the game simalution only, it doesn't have any effect on rendering.
     */
    min_brightness: number

    /**
     * The daytime when morning starts.
     */
    morning: number

    /**
     * The name of this surface. Names are unique among surfaces.
     * @remarks
     * the default surface can't be renamed.
     *
     */
    name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is peaceful mode enabled on this surface?
     */
    peaceful_mode: boolean

    /**
     * If clouds are shown on this surface.
     * @remarks
     * If false, clouds are never shown. If true the player must also have clouds enabled in graphics settings for them to be shown.
     *
     */
    show_clouds: boolean

    /**
     * The multiplier of solar power on this surface. Cannot be less than 0.
     * @remarks
     * Solar equipment is still limited to its maximum power output.
     *
     */
    solar_power_multiplier: number

    /**
     * The number of ticks per day for this surface.
     */
    ticks_per_day: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Current wind direction.
     */
    wind_orientation: RealOrientation

    /**
     * Change in wind orientation per tick.
     */
    wind_orientation_change: number

    /**
     * Current wind speed.
     */
    wind_speed: number

}

/**
 * One research item.
 */
interface LuaTechnology {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Reload this technology from its prototype.
     */
    reload(this: void): void

    /**
     * Effects applied when this technology is researched.
     */
    readonly effects: TechnologyModifier[]

    /**
     * Can this technology be researched?
     */
    enabled: boolean

    /**
     * The force this technology belongs to.
     */
    readonly force: LuaForce

    /**
     * The current level of this technology. For level-based technology writing to this is the same as researching the technology to the *previous* level. Writing the level will set {@link LuaTechnology::enabled | LuaTechnology::enabled} to `true`.
     */
    level: number

    readonly localised_description: LocalisedString

    /**
     * Localised name of this technology.
     */
    readonly localised_name: LocalisedString

    /**
     * Name of this technology.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string for this prototype.
     */
    readonly order: string

    /**
     * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnology | LuaTechnology} object.
     */
    readonly prerequisites: {[key: string]: LuaTechnology}

    /**
     * The prototype of this technology.
     */
    readonly prototype: LuaTechnologyPrototype

    /**
     * Number of research units required for this technology.
     * @remarks
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype::ignore_tech_cost_multiplier | LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     *
     * @see {@link LuaTechnology::research_unit_ingredients}
     */
    readonly research_unit_count: number

    /**
     * The count formula used for this infinite research or nil if this isn't an infinite research.
     * @see {@link LuaGameScript::evaluate_expression}
     */
    readonly research_unit_count_formula: string

    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: number

    /**
     * Ingredients labs will require to research this technology.
     * @see {@link LuaTechnology::research_unit_count}
     */
    readonly research_unit_ingredients: Ingredient[]

    /**
     * Has this technology been researched? Switching from `false` to `true` will trigger the technology advancement perks; switching from `true` to `false` will reverse them.
     */
    researched: boolean

    /**
     * Is this an upgrade-type research?
     */
    readonly upgrade: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * If this technology will be visible in the research GUI even though it is disabled.
     */
    visible_when_disabled: boolean

}

/**
 * A Technology prototype.
 */
interface LuaTechnologyPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Effects applied when this technology is researched.
     */
    readonly effects: TechnologyModifier[]

    /**
     * If this technology prototype is enabled by default (enabled at the beginning of a game).
     */
    readonly enabled: boolean

    /**
     * If this technology prototype is hidden.
     */
    readonly hidden: boolean

    /**
     * If this technology ignores the technology cost multiplier setting.
     * @remarks
     * {@link LuaTechnologyPrototype::research_unit_count | LuaTechnologyPrototype::research_unit_count} will already take this setting into account.
     *
     */
    readonly ignore_tech_cost_multiplier: boolean

    /**
     * The level of this research.
     */
    readonly level: number

    readonly localised_description: LocalisedString

    /**
     * Localised name of this technology.
     */
    readonly localised_name: LocalisedString

    /**
     * The max level of this research.
     */
    readonly max_level: number

    /**
     * Name of this technology.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string for this prototype.
     */
    readonly order: string

    /**
     * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnologyPrototype | LuaTechnologyPrototype} object.
     */
    readonly prerequisites: {[key: string]: LuaTechnologyPrototype}

    /**
     * Number of research units required for this technology.
     * @remarks
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype::ignore_tech_cost_multiplier | LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     *
     * @see {@link LuaTechnologyPrototype::research_unit_ingredients}
     */
    readonly research_unit_count: number

    /**
     * The count formula used for this infinite research or nil if this isn't an infinite research.
     * @see {@link LuaGameScript::evaluate_expression}
     */
    readonly research_unit_count_formula: string

    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: number

    /**
     * Ingredients labs will require to research this technology.
     * @see {@link LuaTechnologyPrototype::research_unit_count}
     */
    readonly research_unit_ingredients: Ingredient[]

    /**
     * If the is technology prototype is an upgrade to some other technology.
     */
    readonly upgrade: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * If this technology will be visible in the research GUI even though it is disabled.
     */
    readonly visible_when_disabled: boolean

}

/**
 * A single "square" on the map.
 */
interface LuaTile {
    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     * @param force - The force who did the deconstruction order.
     * @param player - The player to set the last_user to if any.
     */
    cancel_deconstruction(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): void

    /**
     * What type of things can collide with this tile?
     * @example
     * Check if the character would collide with a tile 
     * ```
     * game.player.print(tostring(game.player.surface.get_tile(1, 1).collides_with("player-layer")))
     * ```
     *
     */
    collides_with(this: void,
        layer: CollisionMaskLayer): boolean

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Orders deconstruction of this tile by the given force.
     * @param force - The force whose robots are supposed to do the deconstruction.
     * @param player - The player to set the last_user to if any.
     * @returns The deconstructible tile proxy created if any or `nil`.
     */
    order_deconstruction(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): LuaEntity | null

    /**
     * Is this tile marked for deconstruction?
     */
    to_be_deconstructed(this: void): boolean

    /**
     * The name of the {@link LuaTilePrototype | LuaTilePrototype} hidden under this tile or `nil` if there is no hidden tile. During normal gameplay, only {@link non-mineable | LuaTilePrototype::mineable_properties} tiles can become hidden. This can however be circumvented with {@link LuaSurface::set_hidden_tile | LuaSurface::set_hidden_tile}.
     */
    readonly hidden_tile: string

    /**
     * Prototype name of this tile. E.g. `"sand-3"` or `"grass-2"`.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The position this tile references.
     */
    readonly position: Position

    readonly prototype: LuaTilePrototype

    /**
     * The surface this tile is on.
     */
    readonly surface: LuaSurface

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a tile.
 */
interface LuaTilePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly allowed_neighbors: {[key: string]: LuaTilePrototype}

    readonly automatic_neighbors: boolean

    /**
     * Autoplace specification for this prototype. `nil` if none.
     */
    readonly autoplace_specification: AutoplaceSpecification

    /**
     * False if this tile is not allowed in blueprints regardless of the ability to build it.
     */
    readonly can_be_part_of_blueprint: boolean

    /**
     * The collision mask this tile uses
     */
    readonly collision_mask: CollisionMask

    readonly collision_mask_with_flags: CollisionMaskWithFlags

    /**
     * The probability that decorative entities will be removed from on top of this tile when this tile is generated.
     */
    readonly decorative_removal_probability: number

    /**
     * Amount of pollution emissions per second this tile will absorb.
     */
    readonly emissions_per_second: number

    /**
     * Items that when placed will produce this tile. It is a dictionary indexed by the item prototype name.
     */
    readonly items_to_place_this: SimpleItemStack[]

    readonly layer: number

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    readonly map_color: Color

    readonly mineable_properties: { minable: boolean, miningparticle?: string, miningtime: number, products: Product[] }

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * If this tile needs correction logic applied when it's generated in the world..
     */
    readonly needs_correction: boolean

    /**
     * The next direction of this tile or `nil` - used when a tile has multiple directions (such as hazard concrete)
     */
    readonly next_direction: LuaTilePrototype

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    readonly vehicle_friction_modifier: number

    readonly walking_speed_modifier: number

}

/**
 * A train. Trains are a sequence of connected rolling stocks -- locomotives and wagons.
 */
interface LuaTrain {
    /**
     * Clears all fluids in this train.
     */
    clear_fluids_inside(this: void): void

    /**
     * Clear all items in this train.
     */
    clear_items_inside(this: void): void

    /**
     * Get a mapping of the train's inventory.
     * @returns The counts, indexed by item names.
     */
    get_contents(this: void): {[key: string]: number}

    /**
     * Gets a mapping of the train's fluid inventory.
     * @returns The counts, indexed by fluid names.
     */
    get_fluid_contents(this: void): {[key: string]: number}

    /**
     * Get the amount of a particular fluid stored in the train.
     * @param fluid - Fluid name to count. If not given, counts all fluids.
     */
    get_fluid_count(this: void,
        fluid?: string): number

    /**
     * Get the amount of a particular item stored in the train.
     * @param item - Item name to count. If not given, counts all items.
     */
    get_item_count(this: void,
        item?: string): number

    /**
     * Gets all rails under the train.
     */
    get_rails(this: void): LuaEntity[]

    /**
     * Go to the station specified by the index in the train's schedule.
     */
    go_to_station(this: void,
        index: number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Insert a stack into the train.
     */
    insert(this: void,
        stack: ItemStackIdentification): void

    /**
     * Inserts the given fluid into the first available location in this train.
     * @returns The amount inserted.
     */
    insert_fluid(this: void,
        fluid: Fluid): number

    /**
     * Checks if the path is invalid and tries to re-path if it isn't.
     * @param force - Forces the train to re-path regardless of the current path being valid or not.
     * @returns If the train has a path after the repath attempt.
     */
    recalculate_path(this: void,
        force?: boolean): boolean

    /**
     * Remove some fluid from the train.
     * @returns The amount of fluid actually removed.
     */
    remove_fluid(this: void,
        fluid: Fluid): number

    /**
     * Remove some items from the train.
     * @param stack - The amount and type of items to remove
     * @returns Number of items actually removed.
     */
    remove_item(this: void,
        stack: ItemStackIdentification): number

    /**
     * The rail at the back end of the train, possibly `nil`.
     */
    readonly back_rail: LuaEntity

    /**
     * The back stock of this train or `nil`.
     */
    readonly back_stock: LuaEntity

    /**
     * The cargo carriages the train contains.
     */
    readonly cargo_wagons: LuaEntity[]

    /**
     * Rolling stocks the train is composed of.
     */
    readonly carriages: LuaEntity[]

    /**
     * The fluid carriages the train contains.
     */
    readonly fluid_wagons: LuaEntity[]

    /**
     * The rail at the front end of the train, possibly `nil`.
     */
    readonly front_rail: LuaEntity

    /**
     * The front stock of this train or `nil`.
     */
    readonly front_stock: LuaEntity

    /**
     * If this train has a path.
     */
    readonly has_path: boolean

    /**
     * The unique train ID.
     */
    readonly id: number

    /**
     * The total number of kills by this train.
     */
    readonly kill_count: number

    /**
     * The players killed by this train.
     * The keys are the player indices, the values are how often this train killed that player.
     */
    readonly killed_players: {[key: number]: number}

    /**
     * Arrays of locomotives. The result is two arrays, indexed by `"front_movers"` and `"back_movers"` containing the locomotives. E.g. `{front_movers={loco1, loco2}, back_movers={loco3}}`.
     */
    readonly locomotives: {[key: string]: LuaEntity[]}

    /**
     * When `true`, the train is explicitly controlled by the player or script. When `false`, the train moves autonomously according to its schedule.
     */
    manual_mode: boolean

    /**
     * Current max speed when moving backwards, depends on locomotive prototype and fuel.
     */
    readonly max_backward_speed: number

    /**
     * Current max speed when moving forward, depends on locomotive prototype and fuel.
     */
    readonly max_forward_speed: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The player passengers on the train
     * @remarks
     * This does *not* index using player index. See {@link LuaPlayer::index | LuaPlayer::index} on each player instance for the player index.
     *
     */
    readonly passengers: LuaPlayer[]

    /**
     * The path this train is using or `nil` if none.
     */
    readonly path: LuaRailPath

    /**
     * The destination rail this train is currently pathing to or `nil`.
     */
    readonly path_end_rail: LuaEntity

    /**
     * The destination train stop this train is currently pathing to or `nil`.
     */
    readonly path_end_stop: LuaEntity

    readonly rail_direction_from_back_rail: defines.rail_direction

    readonly rail_direction_from_front_rail: defines.rail_direction

    /**
     * The riding state of this train.
     */
    readonly riding_state: RidingState

    /**
     * The trains current schedule or `nil` if empty. Set to `nil` to clear.
     * @remarks
     * The schedule can't be changed by modifying the returned table. Instead, changes must be made by assigning a new table to this attribute.
     *
     */
    schedule: TrainSchedule

    /**
     * The signal this train is arriving or waiting at or `nil` if none.
     */
    readonly signal: LuaEntity

    /**
     * Current speed.
     * @remarks
     * Changing the speed of the train is potentially an unsafe operation because train uses the speed for its internal calculations of break distances, etc.
     *
     */
    speed: number

    /**
     * This train's current state.
     */
    readonly state: defines.train_state

    /**
     * The train stop this train is stopped at or `nil`.
     */
    readonly station: LuaEntity

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The weight of this train.
     */
    readonly weight: number

}

/**
 * Control behavior for train stops.
 */
interface LuaTrainStopControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * `true` if the train stop is enabled/disabled through the circuit network.
     */
    enable_disable: boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * `true` if the train stop should send the train contents to the circuit network.
     */
    read_from_train: boolean

    /**
     * `true` if the train stop should send the stopped train id to the circuit network.
     */
    read_stopped_train: boolean

    /**
     * `true` if the train stop should send amount of incoming trains to the circuit network.
     */
    read_trains_count: boolean

    /**
     * `true` if the train stop should send the circuit network contents to the train to use.
     */
    send_to_train: boolean

    /**
     * `true` if the trains_limit_signal is used to set a limit of trains incoming for train stop.
     */
    set_trains_limit: boolean

    /**
     * The signal that will be sent when using the send-train-id option.
     */
    stopped_train_signal: SignalID

    /**
     * The signal that will be sent when using the read-trains-count option.
     */
    trains_count_signal: SignalID

    /**
     * The signal to be used by set-trains-limit to limit amount of incoming trains
     */
    trains_limit_signal: SignalID

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for transport belts.
 */
interface LuaTransportBeltControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * If the belt will be enabled/disabled based off the circuit network.
     */
    enable_disable: boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * If the belt will read the contents and send them to the circuit network.
     */
    read_contents: boolean

    /**
     * The read mode for the belt.
     */
    read_contents_mode: defines.control_behavior.transport_belt.content_read_mode

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * One line on a transport belt.
 */
interface LuaTransportLine {
    /**
     * Can an item be inserted at a given position?
     * @param position - Where to insert an item.
     */
    can_insert_at(this: void,
        position: number): boolean

    /**
     * Can an item be inserted at the back of this line?
     */
    can_insert_at_back(this: void): boolean

    /**
     * Remove all items from this transport line.
     */
    clear(this: void): void

    /**
     * Get counts of all items on this line.
     * @see {@link LuaInventory::get_contents}
     * @returns The counts, indexed by item names.
     */
    get_contents(this: void): {[key: string]: number}

    /**
     * Count some or all items on this line.
     * @param item - Prototype name of the item to count. If not specified, count all items.
     * @see {@link LuaInventory::get_item_count}
     */
    get_item_count(this: void,
        item?: string): number

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Insert items at a given position.
     * @param items - Items to insert.
     * @param position - Where on the line to insert the items.
     * @returns Were the items inserted successfully?
     */
    insert_at(this: void,
        position: number,
        items: ItemStackIdentification): boolean

    /**
     * Insert items at the back of this line.
     * @returns Were the items inserted successfully?
     */
    insert_at_back(this: void,
        items: ItemStackIdentification): boolean

    /**
     * Returns whether the associated internal transport line of this line is the same as the others associated internal transport line.
     * @remarks
     * This can return true even when the {@link LuaTransportLine::owner | LuaTransportLine::owner}s are different (so `this == other` is false), because the internal transport lines can span multiple tiles.
     *
     */
    line_equals(this: void,
        other: LuaTransportLine): boolean

    /**
     * Remove some items from this line.
     * @param items - Items to remove.
     * @returns Number of items actually removed.
     */
    remove_item(this: void,
        items: ItemStackIdentification): number

    /**
     * The transport lines that this transport line is fed by or an empty table if none.
     */
    readonly input_lines: LuaTransportLine[]

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The transport lines that this transport line outputs items to or an empty table if none.
     */
    readonly output_lines: LuaTransportLine[]

    /**
     * The entity this transport line belongs to.
     */
    readonly owner: LuaEntity

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The indexing operator.
     * @remarks
     * This will return a {@link LuaItemStack | LuaItemStack}. The return type is any due to typescript limitations.
     *
     */
    readonly [key: string]: any

    /**
     * Get the number of items on this transport line.
     */
    readonly '#': number

}

/**
 * Prototype of a trivial smoke.
 */
interface LuaTrivialSmokePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly affected_by_wind: boolean

    readonly color: Color

    readonly cyclic: boolean

    readonly duration: number

    readonly end_scale: number

    readonly fade_away_duration: number

    readonly fade_in_duration: number

    readonly glow_animation: boolean

    readonly glow_fade_away_duration: number

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    readonly movement_slow_down_factor: number

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    readonly render_layer: RenderLayer

    readonly show_when_smoke_off: boolean

    readonly spread_duration: number

    readonly start_scale: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A collection of units moving and attacking together. The engine creates autonomous unit groups to attack polluted areas. The script can create and control such groups as well. Groups can accept commands in the same manner as regular units.
 */
interface LuaUnitGroup {
    /**
     * Make a unit a member of this group. Has the same effect as giving a `group_command` with this group to the unit.
     * @remarks
     * The member must have the same force as the unit group.
     *
     */
    add_member(this: void,
        unit: LuaEntity): void

    /**
     * Dissolve this group. Its members won't be destroyed, they will be merely unlinked from this group.
     */
    destroy(this: void): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * Make this group autonomous. Autonomous groups will automatically attack polluted areas. Autonomous groups aren't considered to be script driven
     * @see {@link LuaUnitGroup::is_script_driven}
     */
    set_autonomous(this: void): void

    /**
     * Give this group a command.
     * @see {@link LuaEntity::set_command}
     */
    set_command(this: void,
        command: Command): void

    /**
     * Give this group a distraction command.
     * @see {@link LuaEntity::set_command}
     */
    set_distraction_command(this: void,
        command: Command): void

    /**
     * Make the group start moving even if some of its members haven't yet arrived.
     */
    start_moving(this: void): void

    /**
     * The command given to this group or `nil` is the group has no command.
     */
    readonly command: Command

    /**
     * The distraction command given to this group or `nil` is the group currently isn't distracted.
     */
    readonly distraction_command: Command

    /**
     * The force of this unit group.
     */
    readonly force: LuaForce

    /**
     * The group number for this unit group.
     */
    readonly group_number: number

    /**
     * Whether this unit group is controlled by a script or by the game engine.
     * @see {@link LuaUnitGroup::set_autonomous}
     */
    readonly is_script_driven: boolean

    /**
     * Members of this group.
     */
    readonly members: LuaEntity[]

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Group position. This can have different meanings depending on the group state. When the group is gathering, the position is the place of gathering. When the group is moving, the position is the expected position of its members along the path. When the group is attacking, it is the average position of its members.
     */
    readonly position: Position

    /**
     * Whether this group is gathering, moving or attacking.
     */
    readonly state: defines.group_state

    /**
     * The surface of this unit group.
     */
    readonly surface: LuaSurface

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a virtual signal.
 */
interface LuaVirtualSignalPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Order string of this prototype.
     */
    readonly order: string

    /**
     * If this is a special signal
     */
    readonly special: boolean

    readonly subgroup: LuaGroup

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a void energy source.
 */
interface LuaVoidEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    readonly emissions: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly render_no_network_icon: boolean

    readonly render_no_power_icon: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Control behavior for walls.
 */
interface LuaWallControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

    /**
     * The circuit condition.
     */
    circuit_condition: CircuitConditionDefinition

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    open_gate: boolean

    output_signal: SignalID

    read_sensor: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

interface BaseLuaControlSetGuiArrowParams {
}

/**
 * @remarks
 * Applies to variant case `crafting_queue`
 *
 */
interface LuaControlSetGuiArrowParamsCraftingQueue extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory. May be `"nowhere"`, `"goal"`, `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"`, or `"item_stack"`.
     */
    type: 'crafting_queue'

    'crafting_queueindex': number

}

/**
 * @remarks
 * Applies to variant case `entity`
 *
 */
interface LuaControlSetGuiArrowParamsEntity extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory. May be `"nowhere"`, `"goal"`, `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"`, or `"item_stack"`.
     */
    type: 'entity'

    'entity': LuaEntity

}

/**
 * @remarks
 * Applies to variant case `item_stack`
 *
 */
interface LuaControlSetGuiArrowParamsItemStack extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory. May be `"nowhere"`, `"goal"`, `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"`, or `"item_stack"`.
     */
    type: 'item_stack'

    'inventory_index': defines.inventory

    'item_stack_index': number

    /**
     * May be either `"player"` or `"target"`.
     */
    'source': string

}

/**
 * @remarks
 * Applies to variant case `position`
 *
 */
interface LuaControlSetGuiArrowParamsPosition extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory. May be `"nowhere"`, `"goal"`, `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"`, or `"item_stack"`.
     */
    type: 'position'

    'position': Position

}

interface DefaultLuaControlSetGuiArrowParams extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory. May be `"nowhere"`, `"goal"`, `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"`, or `"item_stack"`.
     */
    type: 'nowhere' | 'goal' | 'entity_info' | 'active_window'

}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 */
interface LuaGuiElementAddParams {
    /**
     * Where to position the child element when in the `relative` element.
     */
    'anchor'?: GuiAnchor

    /**
     * Text displayed on the child element. For frames, this is their title. For other elements, like buttons or labels, this is the content. Whilst this attribute may be used on all elements, it doesn't make sense for tables and flows as they won't display it.
     */
    'caption'?: LocalisedString

    /**
     * Whether the child element is enabled. Defaults to `true`.
     */
    'enabled'?: boolean

    /**
     * Whether the child element is ignored by interaction. Defaults to `false`.
     */
    'ignored_by_interaction'?: boolean

    /**
     * Location in its parent that the child element should slot into. By default, the child will be appended onto the end.
     */
    'index'?: number

    /**
     * Name of the child element.
     */
    'name'?: string

    /**
     * Style of the child element.
     */
    'style'?: string

    /**
     * {@link Tags | Tags} associated with the child element.
     */
    'tags'?: Tags

    /**
     * Tooltip of the child element.
     */
    'tooltip'?: LocalisedString

    /**
     * The kind of element to add. Has to be one of the GUI element types listed at the top of this page.
     */
    'type': string

    /**
     * Whether the child element is visible. Defaults to `true`.
     */
    'visible'?: boolean

}

/**
 * @remarks
 * Applies to variant case `button`
 *
 */
interface LuaGuiElementAddParamsButton extends LuaGuiElementAddParams {
    /**
     * Which mouse buttons the button responds to. Defaults to `"left-and-right"`.
     */
    'mouse_button_filter'?: MouseButtonFlags

}

/**
 * @remarks
 * Applies to variant case `camera`
 *
 */
interface LuaGuiElementAddParamsCamera extends LuaGuiElementAddParams {
    /**
     * The position the camera centers on.
     */
    'position': Position

    /**
     * The surface that the camera will render. Defaults to the player's current surface.
     */
    'surface_index'?: number

    /**
     * The initial camera zoom. Defaults to `0.75`.
     */
    'zoom'?: number

}

/**
 * @remarks
 * Applies to variant case `checkbox`
 *
 */
interface LuaGuiElementAddParamsCheckbox extends LuaGuiElementAddParams {
    /**
     * The initial checked-state of the checkbox.
     */
    'state': boolean

}

/**
 * @remarks
 * Applies to variant case `choose-elem-button`
 *
 */
interface LuaGuiElementAddParamsChooseElemButton extends LuaGuiElementAddParams {
    /**
     * If type is `"achievement"` - the default value for the button.
     */
    'achievement'?: string

    /**
     * If type is `"decorative"` - the default value for the button.
     */
    'decorative'?: string

    /**
     * Filters describing what to show in the selection window. See {@link LuaGuiElement::elem_filters | LuaGuiElement::elem_filters}.
     */
    'elem_filters'?: ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter[]

    /**
     * The type of the button - one of the following values.
     */
    'elem_type': string

    /**
     * If type is `"entity"` - the default value for the button.
     */
    'entity'?: string

    /**
     * If type is `"equipment"` - the default value for the button.
     */
    'equipment'?: string

    /**
     * If type is `"fluid"` - the default value for the button.
     */
    'fluid'?: string

    /**
     * If type is `"item"` - the default value for the button.
     */
    'item'?: string

    /**
     * If type is `"item-group"` - the default value for the button.
     */
    'item-group'?: string

    /**
     * If type is `"recipe"` - the default value for the button.
     */
    'recipe'?: string

    /**
     * If type is `"signal"` - the default value for the button.
     */
    'signal'?: SignalID

    /**
     * If type is `"technology"` - the default value for the button.
     */
    'technology'?: string

    /**
     * If type is `"tile"` - the default value for the button.
     */
    'tile'?: string

}

/**
 * @remarks
 * Applies to variant case `drop-down`
 *
 */
interface LuaGuiElementAddParamsDropDown extends LuaGuiElementAddParams {
    /**
     * The initial items in the dropdown.
     */
    'items'?: LocalisedString[]

    /**
     * The index of the initially selected item. Defaults to 0.
     */
    'selected_index'?: number

}

/**
 * @remarks
 * Applies to variant case `flow`
 *
 */
interface LuaGuiElementAddParamsFlow extends LuaGuiElementAddParams {
    /**
     * The initial direction of the flow's layout. See {@link LuaGuiElement::direction | LuaGuiElement::direction}. Defaults to `"horizontal"`.
     */
    'direction'?: string

}

/**
 * @remarks
 * Applies to variant case `frame`
 *
 */
interface LuaGuiElementAddParamsFrame extends LuaGuiElementAddParams {
    /**
     * The initial direction of the frame's layout. See {@link LuaGuiElement::direction | LuaGuiElement::direction}. Defaults to `"horizontal"`.
     */
    'direction'?: string

}

/**
 * @remarks
 * Applies to variant case `line`
 *
 */
interface LuaGuiElementAddParamsLine extends LuaGuiElementAddParams {
    /**
     * The initial direction of the line. Defaults to `"horizontal"`.
     */
    'direction'?: string

}

/**
 * @remarks
 * Applies to variant case `list-box`
 *
 */
interface LuaGuiElementAddParamsListBox extends LuaGuiElementAddParams {
    /**
     * The initial items in the listbox.
     */
    'items'?: LocalisedString[]

    /**
     * The index of the initially selected item. Defaults to 0.
     */
    'selected_index'?: number

}

/**
 * @remarks
 * Applies to variant case `minimap`
 *
 */
interface LuaGuiElementAddParamsMinimap extends LuaGuiElementAddParams {
    /**
     * The player index the map should use. Defaults to the current player.
     */
    'chart_player_index'?: number

    /**
     * The force this minimap should use. Defaults to the player's current force.
     */
    'force'?: string

    /**
     * The position the minimap centers on. Defaults to the player's current position.
     */
    'position'?: Position

    /**
     * The surface the camera will render. Defaults to the player's current surface.
     */
    'surface_index'?: number

    /**
     * The initial camera zoom. Defaults to `0.75`.
     */
    'zoom'?: number

}

/**
 * @remarks
 * Applies to variant case `progressbar`
 *
 */
interface LuaGuiElementAddParamsProgressbar extends LuaGuiElementAddParams {
    /**
     * The initial value of the progressbar, in the range [0, 1]. Defaults to `0`.
     */
    'value'?: number

}

/**
 * @remarks
 * Applies to variant case `radiobutton`
 *
 */
interface LuaGuiElementAddParamsRadiobutton extends LuaGuiElementAddParams {
    /**
     * The initial checked-state of the radiobutton.
     */
    'state': boolean

}

/**
 * @remarks
 * Applies to variant case `scroll-pane`
 *
 */
interface LuaGuiElementAddParamsScrollPane extends LuaGuiElementAddParams {
    /**
     * Policy of the horizontal scroll bar. Possible values are `"auto"`, `"never"`, `"always"`, `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`. Defaults to `"auto"`.
     */
    'horizontal_scroll_policy'?: string

    /**
     * Policy of the vertical scroll bar. Possible values are `"auto"`, `"never"`, `"always"`, `"auto-and-reserve-space"`, `"dont-show-but-allow-scrolling"`. Defaults to `"auto"`.
     */
    'vertical_scroll_policy'?: string

}

/**
 * @remarks
 * Applies to variant case `slider`
 *
 */
interface LuaGuiElementAddParamsSlider extends LuaGuiElementAddParams {
    /**
     * Defaults to `false`.
     */
    'discrete_slider'?: boolean

    /**
     * Defaults to `true`.
     */
    'discrete_values'?: boolean

    /**
     * The maximum value for the slider. Defaults to `30`.
     */
    'maximum_value'?: number

    /**
     * The minimum value for the slider. Defaults to `0`.
     */
    'minimum_value'?: number

    /**
     * The initial value for the slider. Defaults to `minimum_value`.
     */
    'value'?: number

    /**
     * The minimum value the slider can move. Defaults to `1`.
     */
    'value_step'?: number

}

/**
 * @remarks
 * Applies to variant case `sprite`
 *
 */
interface LuaGuiElementAddParamsSprite extends LuaGuiElementAddParams {
    /**
     * Whether the widget should resize according to the sprite in it. Defaults to `true`.
     */
    'resize_to_sprite'?: boolean

    /**
     * Path to the image to display.
     */
    'sprite'?: SpritePath

}

/**
 * @remarks
 * Applies to variant case `sprite-button`
 *
 */
interface LuaGuiElementAddParamsSpriteButton extends LuaGuiElementAddParams {
    /**
     * Path to the image to display on the button when it is clicked.
     */
    'clicked_sprite'?: SpritePath

    /**
     * Path to the image to display on the button when it is hovered.
     */
    'hovered_sprite'?: SpritePath

    /**
     * The mouse buttons that the button responds to. Defaults to `"left-and-right"`.
     */
    'mouse_button_filter'?: MouseButtonFlags

    /**
     * The number shown on the button.
     */
    'number'?: number

    /**
     * Formats small numbers as percentages. Defaults to `false`.
     */
    'show_percent_for_small_numbers'?: boolean

    /**
     * Path to the image to display on the button.
     */
    'sprite'?: SpritePath

}

/**
 * @remarks
 * Applies to variant case `switch`
 *
 */
interface LuaGuiElementAddParamsSwitch extends LuaGuiElementAddParams {
    /**
     * Whether the switch can be set to a middle state. Defaults to `false`.
     */
    'allow_none_state'?: boolean

    'left_label_caption'?: LocalisedString

    'left_label_tooltip'?: LocalisedString

    'right_label_caption'?: LocalisedString

    'right_label_tooltip'?: LocalisedString

    /**
     * Possible values are `"left"`, `"right"`, or `"none"`. If set to "none", `allow_none_state` must be `true`. Defaults to `"left"`.
     */
    'switch_state'?: string

}

/**
 * @remarks
 * Applies to variant case `tab`
 *
 */
interface LuaGuiElementAddParamsTab extends LuaGuiElementAddParams {
    /**
     * The text to display after the normal tab text (designed to work with numbers).
     */
    'badge_text'?: LocalisedString

}

/**
 * @remarks
 * Applies to variant case `table`
 *
 */
interface LuaGuiElementAddParamsTable extends LuaGuiElementAddParams {
    /**
     * Number of columns. This can't be changed after the table is created.
     */
    'column_count': number

    /**
     * Whether the table should draw a single horizontal grid line after the headers. Defaults to `false`.
     */
    'draw_horizontal_line_after_headers'?: boolean

    /**
     * Whether the table should draw horizontal grid lines. Defaults to `false`.
     */
    'draw_horizontal_lines'?: boolean

    /**
     * Whether the table should draw vertical grid lines. Defaults to `false`.
     */
    'draw_vertical_lines'?: boolean

    /**
     * Whether the content of the table should be vertically centered. Defaults to `true`.
     */
    'vertical_centering'?: boolean

}

/**
 * @remarks
 * Applies to variant case `text-box`
 *
 */
interface LuaGuiElementAddParamsTextBox extends LuaGuiElementAddParams {
    /**
     * Defaults to `false`.
     */
    'clear_and_focus_on_right_click'?: boolean

    /**
     * The initial text contained in the text-box.
     */
    'text'?: string

}

/**
 * @remarks
 * Applies to variant case `textfield`
 *
 */
interface LuaGuiElementAddParamsTextfield extends LuaGuiElementAddParams {
    /**
     * Defaults to `false`.
     */
    'allow_decimal'?: boolean

    /**
     * Defaults to `false`.
     */
    'allow_negative'?: boolean

    /**
     * Defaults to `false`.
     */
    'clear_and_focus_on_right_click'?: boolean

    /**
     * Defaults to `false`.
     */
    'is_password'?: boolean

    /**
     * Defaults to `false`.
     */
    'lose_focus_on_confirm'?: boolean

    /**
     * Defaults to `false`.
     */
    'numeric'?: boolean

    /**
     * The initial text contained in the textfield.
     */
    'text'?: string

}

/**
 * @remarks
 * Other attributes may be specified depending on the type of entity:
 *
 */
interface LuaSurfaceCreateEntityParams {
    /**
     * If false, the building effect smoke will not be shown around the new entity.
     */
    'create_build_effect_smoke'?: boolean

    /**
     * Desired orientation of the entity after creation.
     */
    'direction'?: defines.direction

    /**
     * If true, building will attempt to simulate fast-replace building.
     */
    'fast_replace'?: boolean

    /**
     * Force of the entity, default is enemy.
     */
    'force'?: ForceIdentification

    /**
     * If provided, the entity will attempt to pull stored values from this item (for example; creating a spidertron from a previously named and mined spidertron)
     */
    'item'?: LuaItemStack

    /**
     * If true, any characters that are in the way of the entity are teleported out of the way.
     */
    'move_stuck_players'?: boolean

    /**
     * The entity prototype name to create.
     */
    'name': string

    /**
     * If given set the last_user to this player. If fast_replace is true simulate fast replace using this player.
     */
    'player'?: PlayerIdentification

    /**
     * Where to create the entity.
     */
    'position': Position

    /**
     * If true; {@link defines.events.script_raised_built | defines.events.script_raised_built} will be fired on successful entity creation.
     */
    'raise_built'?: boolean

    /**
     * Source entity. Used for beams and highlight-boxes.
     */
    'source'?: LuaEntity

    /**
     * If true, entity types that have spawn_decorations property will apply triggers defined in the property.
     */
    'spawn_decorations'?: boolean

    /**
     * If false while fast_replace is true and player is nil any items from fast-replacing will be deleted instead of dropped on the ground.
     */
    'spill'?: boolean

    /**
     * Entity with health for the new entity to target.
     */
    'target'?: LuaEntity

}

/**
 * @remarks
 * Applies to variant case `artillery-flare`
 *
 */
interface LuaSurfaceCreateEntityParamsArtilleryFlare extends LuaSurfaceCreateEntityParams {
    'frame_speed': number

    'height': number

    'movement': Vector

    'vertical_speed': number

}

/**
 * @remarks
 * Applies to variant case `assembling-machine`
 *
 */
interface LuaSurfaceCreateEntityParamsAssemblingMachine extends LuaSurfaceCreateEntityParams {
    'recipe'?: string

}

/**
 * @remarks
 * Applies to variant case `beam`
 *
 */
interface LuaSurfaceCreateEntityParamsBeam extends LuaSurfaceCreateEntityParams {
    /**
     * If set, beam will be destroyed after this value of ticks.
     */
    'duration'?: number

    /**
     * If set, beam will be destroyed when distance between source and target is greater than this value.
     */
    'max_length'?: number

    /**
     * Source position will be offset by this value when rendering the beam.
     */
    'source_offset'?: Vector

    /**
     * Absolute source position that can be used instead of source entity (entity has precedence if both entity and position are defined).
     */
    'source_position'?: Position

    /**
     * Absolute target position that can be used instead of target entity (entity has precedence if both entity and position are defined).
     */
    'target_position'?: Position

}

/**
 * @remarks
 * Applies to variant case `character-corpse`
 *
 */
interface LuaSurfaceCreateEntityParamsCharacterCorpse extends LuaSurfaceCreateEntityParams {
    'inventory_size'?: number

    'player_index'?: number

}

/**
 * @remarks
 * Applies to variant case `cliff`
 *
 */
interface LuaSurfaceCreateEntityParamsCliff extends LuaSurfaceCreateEntityParams {
    /**
     * If not specified, `direction` will be used instead.
     */
    'cliff_orientation'?: CliffOrientation

}

/**
 * @remarks
 * Applies to variant case `container`
 *
 */
interface LuaSurfaceCreateEntityParamsContainer extends LuaSurfaceCreateEntityParams {
    /**
     * Inventory index where the red limiting bar should be set.
     */
    'bar'?: number

}

/**
 * @remarks
 * Applies to variant case `entity-ghost`
 *
 */
interface LuaSurfaceCreateEntityParamsEntityGhost extends LuaSurfaceCreateEntityParams {
    /**
     * If `false` the ghost entity will not expire. Default is `false`.
     */
    'expires'?: boolean

    /**
     * The prototype name of the entity contained in the ghost.
     */
    'inner_name': string

}

/**
 * @remarks
 * Applies to variant case `fire`
 *
 */
interface LuaSurfaceCreateEntityParamsFire extends LuaSurfaceCreateEntityParams {
    /**
     * With how many small flames should the fire on ground be created. Defaults to the initial flame count of the prototype.
     */
    'initial_ground_flame_count'?: number

}

/**
 * @remarks
 * Applies to variant case `flying-text`
 *
 */
interface LuaSurfaceCreateEntityParamsFlyingText extends LuaSurfaceCreateEntityParams {
    /**
     * Color of the displayed text.
     */
    'color'?: Color

    'render_player_index'?: number

    /**
     * The string to show.
     */
    'text': LocalisedString

}

/**
 * @remarks
 * Applies to variant case `highlight-box`
 *
 */
interface LuaSurfaceCreateEntityParamsHighlightBox extends LuaSurfaceCreateEntityParams {
    /**
     * The blink interval for this highlight box. Makes it be shown every `blink_interval` ticks. Defaults to `0` (constantly shown).
     */
    'blink_interval'?: number

    /**
     * The bounding box defining the highlight box using absolute map coordinates. If specified, the `position` parameter is ignored, but needs to be present anyways. If not specified, the game falls back to the `source` parameter first, then the `target` parameter second. One of these three parameters need to be specified.
     */
    'bounding_box'?: BoundingBox

    /**
     * Specifies the graphical appearance (color) of the highlight box. Defaults to `"electricity"`.
     */
    'box_type'?: CursorBoxRenderType

    /**
     * The player to render the highlight box for. If not provided, it will be rendered for all players.
     */
    'render_player_index'?: number

    /**
     * The amount of time in ticks that the highlight box will exist for. Defaults to existing forever.
     */
    'time_to_live'?: number

}

/**
 * @remarks
 * Applies to variant case `inserter`
 *
 */
interface LuaSurfaceCreateEntityParamsInserter extends LuaSurfaceCreateEntityParams {
    'conditions': InserterCircuitConditions

    'filters': InventoryFilter[]

}

/**
 * @remarks
 * Applies to variant case `item-entity`
 *
 */
interface LuaSurfaceCreateEntityParamsItemEntity extends LuaSurfaceCreateEntityParams {
    /**
     * The stack of items to create.
     */
    'stack': SimpleItemStack

}

/**
 * @remarks
 * Applies to variant case `item-request-proxy`
 *
 */
interface LuaSurfaceCreateEntityParamsItemRequestProxy extends LuaSurfaceCreateEntityParams {
    /**
     * The stacks of items to be delivered to target entity from logistic network.
     */
    'modules': {[key: string]: number}

    /**
     * The target items are to be delivered to.
     */
    'target': LuaEntity

}

/**
 * @remarks
 * Applies to variant case `locomotive`
 *
 */
interface LuaSurfaceCreateEntityParamsLocomotive extends LuaSurfaceCreateEntityParams {
    /**
     * Whether the locomotive should snap to an adjacent train stop. Defaults to true.
     */
    'snap_to_train_stop'?: boolean

}

/**
 * @remarks
 * Applies to variant case `logistic-container`
 *
 */
interface LuaSurfaceCreateEntityParamsLogisticContainer extends LuaSurfaceCreateEntityParams {
    'request_filters'?: InventoryFilter[]

}

/**
 * @remarks
 * Applies to variant case `particle`
 *
 */
interface LuaSurfaceCreateEntityParamsParticle extends LuaSurfaceCreateEntityParams {
    'frame_speed': number

    'height': number

    'movement': Vector

    'vertical_speed': number

}

/**
 * @remarks
 * Applies to variant case `programmable-speaker`
 *
 */
interface LuaSurfaceCreateEntityParamsProgrammableSpeaker extends LuaSurfaceCreateEntityParams {
    'alert_parameters'?: ProgrammableSpeakerAlertParameters

    'parameters'?: ProgrammableSpeakerParameters

}

/**
 * @remarks
 * Applies to variant case `projectile`
 *
 */
interface LuaSurfaceCreateEntityParamsProjectile extends LuaSurfaceCreateEntityParams {
    'max_range': number

    'speed': number

}

/**
 * @remarks
 * Applies to variant case `resource`
 *
 */
interface LuaSurfaceCreateEntityParamsResource extends LuaSurfaceCreateEntityParams {
    'amount': number

    /**
     * If colliding cliffs are removed. Default is true.
     */
    'enable_cliff_removal'?: boolean

    /**
     * If colliding trees are removed normally for this resource entity based off the prototype tree removal values. Default is true.
     */
    'enable_tree_removal'?: boolean

    /**
     * If true, the resource entity will be placed to center of a tile as map generator would place it, otherwise standard non-resource grid alignment rules will apply. Default is true.
     */
    'snap_to_tile_center'?: boolean

}

/**
 * @remarks
 * Applies to variant case `rolling-stock`
 *
 */
interface LuaSurfaceCreateEntityParamsRollingStock extends LuaSurfaceCreateEntityParams {
    /**
     * The color of this rolling stock, if it supports colors.
     */
    'color'?: Color

    /**
     * The orientation of this rolling stock.
     */
    'orientation'?: RealOrientation

}

/**
 * @remarks
 * Applies to variant case `simple-entity-with-force`
 *
 */
interface LuaSurfaceCreateEntityParamsSimpleEntityWithForce extends LuaSurfaceCreateEntityParams {
    'render_player_index'?: number

}

/**
 * @remarks
 * Applies to variant case `simple-entity-with-owner`
 *
 */
interface LuaSurfaceCreateEntityParamsSimpleEntityWithOwner extends LuaSurfaceCreateEntityParams {
    'render_player_index'?: number

}

/**
 * @remarks
 * Applies to variant case `speech-bubble`
 *
 */
interface LuaSurfaceCreateEntityParamsSpeechBubble extends LuaSurfaceCreateEntityParams {
    'lifetime'?: number

    'text': LocalisedString

}

/**
 * @remarks
 * Applies to variant case `underground-belt`
 *
 */
interface LuaSurfaceCreateEntityParamsUndergroundBelt extends LuaSurfaceCreateEntityParams {
    /**
     * `"output"` or `"input"`; default is `"input"`.
     */
    'type'?: string

}

type LuaControlSetGuiArrowParams = LuaControlSetGuiArrowParamsCraftingQueue | LuaControlSetGuiArrowParamsEntity | LuaControlSetGuiArrowParamsItemStack | LuaControlSetGuiArrowParamsPosition | DefaultLuaControlSetGuiArrowParams

