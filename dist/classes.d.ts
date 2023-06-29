// Factorio class definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.86
// API version 3

/**
 * Collection of settings for overriding default ai behavior.
 */
interface LuaAISettings {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

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
     * Defines how coarse the pathfinder's grid is, where smaller values mean a coarser grid. Defaults to `0`, which equals a resolution of `1x1` tiles, centered on tile centers. Values range from `-8` to `8` inclusive, where each integer increment doubles/halves the resolution. So, a resolution of `-8` equals a grid of `256x256` tiles, and a resolution of `8` equals `1/256` of a tile.
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
    help(this: void): void

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * This arithmetic combinator's parameters.
     * @remarks
     * Writing `nil` clears the combinator's parameters.
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
    help(this: void): void

    readonly can_be_disabled: boolean

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
     */
    generate_event_name(this: void): void

    /**
     * Gets the filters for the given event.
     * @param event - ID of the event to get.
     */
    get_event_filter(this: void,
        event: number): void

    /**
     * Find the event handler for an event.
     * @param event - The event identifier to get a handler for.
     */
    get_event_handler(this: void,
        event: number): void

    /**
     * Gets the mod event order as a string.
     */
    get_event_order(this: void): void

    /**
     * Gets the prototype history for the given type and name.
     */
    get_prototype_history(this: void,
        type: string,
        name: string): void

    /**
     * Register a function to be run when mod configuration changes. This is called when the game version or any mod version changed, when any mod was added or removed, when a startup setting has changed, when any prototypes have been added or removed, or when a migration was applied. It allows the mod to make any changes it deems appropriate to both the data structures in its {@link global | global} table or to the game state through {@link LuaGameScript | LuaGameScript}.
     * @remarks
     * For more context, refer to the {@link Data Lifecycle | data-lifecycle} page.
     *
     * @param handler - The handler for this event. Passing `nil` will unregister it.
     */
    on_configuration_changed(this: void,
        handler: (this: void, arg0: ConfigurationChangedData) => any | null): void

    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event - The event(s) or custom-input to invoke the handler on.
     * @param filters - The filters for this event. Can only be used when registering for individual events.
     * @param handler - The handler for this event. Passing `nil` will unregister it.
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
        handler: (this: void, arg0: EventData) => any | null,
        filters?: EventFilter): void

    /**
     * Register a function to be run on mod initialization. This is only called when a new save game is created or when a save file is loaded that previously didn't contain the mod. During it, the mod gets the chance to set up initial values that it will use for its lifetime. It has full access to {@link LuaGameScript | LuaGameScript} and the {@link global | global} table and can change anything about them that it deems appropriate. No other events will be raised for the mod until it has finished this step.
     * @remarks
     * For more context, refer to the {@link Data Lifecycle | data-lifecycle} page.
     *
     * @param handler - The handler for this event. Passing `nil` will unregister it.
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
        handler: (this: void) => any | null): void

    /**
     * Register a function to be run on save load. This is only called for mods that have been part of the save previously, or for players connecting to a running multiplayer session.
     * 
     * It gives the mod the opportunity to rectify potential differences in local state introduced by the save/load cycle. Doing anything other than the following three will lead to desyncs, breaking multiplayer and replay functionality. Access to {@link LuaGameScript | LuaGameScript} is not available. The {@link global | global} table can be accessed and is safe to read from, but not write to, as doing so will lead to an error.
     * 
     * The only legitimate uses of this event are these:
     * - Re-setup {@link metatables | https://www.lua.org/pil/13.html} as they are not persisted through the save/load cycle.
     * - Re-setup conditional event handlers, meaning subscribing to an event only when some condition is met to save processing time.
     * - Create local references to data stored in the {@link global | global} table.
     * 
     * For all other purposes, {@link LuaBootstrap::on_init | LuaBootstrap::on_init}, {@link LuaBootstrap::on_configuration_changed | LuaBootstrap::on_configuration_changed} or {@link migrations | migrations} should be used instead.
     * @remarks
     * For more context, refer to the {@link Data Lifecycle | data-lifecycle} page.
     *
     * @param handler - The handler for this event. Passing `nil` will unregister it.
     */
    on_load(this: void,
        handler: (this: void) => any | null): void

    /**
     * Register a handler to run every nth-tick(s). When the game is on tick 0 it will trigger all registered handlers.
     * @param handler - The handler to run. Passing `nil` will unregister it for the provided nth-tick(s).
     * @param tick - The nth-tick(s) to invoke the handler on. Passing `nil` as the only parameter will unregister all nth-tick handlers.
     */
    on_nth_tick(this: void,
        tick: number | number[] | null,
        handler: (this: void, arg0: NthTickEventData) => any | null): void

    /**
     * @param table.entity - The entity that was built.
     */
    raise_biter_base_built(this: void,
        table: {
            entity: LuaEntity
        }): void

    /**
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
     * 
     * - {@link on_console_chat | on_console_chat}
     * - {@link on_player_crafted_item | on_player_crafted_item}
     * - {@link on_player_fast_transferred | on_player_fast_transferred}
     * - {@link on_biter_base_built | on_biter_base_built}
     * - {@link on_market_item_purchased | on_market_item_purchased}
     * - {@link script_raised_built | script_raised_built}
     * - {@link script_raised_destroy | script_raised_destroy}
     * - {@link script_raised_revive | script_raised_revive}
     * - {@link script_raised_teleported | script_raised_teleported}
     * - {@link script_raised_set_tiles | script_raised_set_tiles}
     * @param data - Table with extra data that will be passed to the event handler. Any invalid LuaObjects will silently stop the event from being raised.
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
     * @param table.entity - The entity transferred from or to.
     * @param table.from_player - Whether the transfer was from player to entity. If `false`, the transfer was from entity to player.
     * @param table.is_split - Whether the transfer was a split action (half stack).
     * @param table.player_index - The player transferred from or to.
     */
    raise_player_fast_transferred(this: void,
        table: {
            player_index: number,
            entity: LuaEntity,
            from_player: boolean,
            is_split: boolean
        }): void

    /**
     * @param table.entity - The entity that has been built.
     */
    raise_script_built(this: void,
        table: {
            entity: LuaEntity
        }): void

    /**
     * @param table.entity - The entity that was destroyed.
     */
    raise_script_destroy(this: void,
        table: {
            entity: LuaEntity
        }): void

    /**
     * @param table.entity - The entity that was revived.
     * @param table.tags - The tags associated with this entity, if any.
     */
    raise_script_revive(this: void,
        table: {
            entity: LuaEntity,
            tags?: Tags
        }): void

    /**
     * @param table.surface_index - The surface whose tiles have been changed.
     * @param table.tiles - The tiles that have been changed.
     */
    raise_script_set_tiles(this: void,
        table: {
            surface_index: number,
            tiles: Tile[]
        }): void

    /**
     * @param table.entity - The entity that was teleported.
     * @param table.old_position - The entity's position before the teleportation.
     * @param table.old_surface_index - The entity's surface before the teleportation.
     */
    raise_script_teleported(this: void,
        table: {
            entity: LuaEntity,
            old_surface_index: number,
            old_position: MapPosition
        }): void

    /**
     * Register a metatable to have linkage recorded and restored when saving/loading. The metatable itself will not be saved. Instead, only the linkage to a registered metatable is saved, and the metatable registered under that name will be used when loading the table.
     * @remarks
     * `register_metatable()` can not be used in the console, in event listeners or during a `remote.call()`.
     *
     * @param metatable - The metatable to register.
     * @param name - The name of this metatable. Names must be unique per mod.
     * @example
     * The metatable first needs to be defined in the mod's root scope, then registered using this method. From then on, it will be properly restored for tables in [global](global). 
     * ```
     * local metatable = {
     *    __index = function(key)
     *       return "no value for key " .. key
     *    end
     * }
     * script.register_metatable("my_metatable", metatable)
     * ```
     *  This previously defined `metatable` can then be set on any table as usual: 
     * ```
     * local table = {key="value"}
     * setmetatable(table, metatable)
     * ```
     *
     */
    register_metatable(this: void,
        name: string,
        metatable: Table): void

    /**
     * Registers an entity so that after it's destroyed, {@link on_entity_destroyed | on_entity_destroyed} is called. Once an entity is registered, it stays registered until it is actually destroyed, even through save/load cycles. The registration is global across all mods, meaning once one mod registers an entity, all mods listening to {@link on_entity_destroyed | on_entity_destroyed} will receive the event when it is destroyed. Registering the same entity multiple times will still only fire the destruction event once, and will return the same registration number.
     * @remarks
     * Depending on when a given entity is destroyed, {@link on_entity_destroyed | on_entity_destroyed} will either be fired at the end of the current tick or at the end of the next tick.
     *
     * @param entity - The entity to register.
     */
    register_on_entity_destroyed(this: void,
        entity: LuaEntity): void

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
        filters?: EventFilter): void

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
    readonly level: {
        
        /**
         * The campaign name if any.
         */
        campaign_name?: string,
        
        /**
         * Is this level a simulation? (The main menu and 'Tips and tricks' use simulations)
         */
        is_simulation?: boolean,
        
        /**
         * Is this level a tutorial?
         */
        is_tutorial?: boolean,
        
        /**
         * The level name.
         */
        level_name: string,
        
        /**
         * The mod name if any.
         */
        mod_name?: string
    }

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
    help(this: void): void

    /**
     * The burnt result inventory.
     */
    readonly burnt_result_inventory: LuaInventory

    /**
     * The currently burning item. Writing `nil` will void the currently burning item without producing a {@link LuaBurner::burnt_result | LuaBurner::burnt_result}.
     * @remarks
     * Writing to this automatically handles correcting {@link LuaBurner::remaining_burning_fuel | LuaBurner::remaining_burning_fuel}.
     *
     */
    currently_burning?: LuaItemPrototype

    /**
     * The fuel categories this burner uses.
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     */
    readonly fuel_categories: {[key: string]: boolean}

    /**
     * The current heat (energy) stored in this burner.
     */
    heat: number

    /**
     * The maximum heat (maximum energy) that this burner can store.
     */
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
     * The amount of energy left in the currently-burning fuel item.
     * @remarks
     * Writing to this will silently do nothing if there's no {@link LuaBurner::currently_burning | LuaBurner::currently_burning} set.
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
    help(this: void): void

    readonly burnt_inventory_size: number

    readonly effectivity: number

    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions: number

    /**
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     *
     */
    readonly fuel_categories: {[key: string]: boolean}

    readonly fuel_inventory_size: number

    /**
     * The light flicker definition for this burner prototype.
     */
    readonly light_flicker?: {
        border_fix_speed: number,
        color: Color,
        derivation_change_deviation: number,
        derivation_change_frequency: number,
        light_intensity_to_size_coefficient: number,
        maximum_intensity: number,
        minimum_intensity: number,
        minimum_light_size: number
    }

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly render_no_network_icon: boolean

    readonly render_no_power_icon: boolean

    /**
     * The smoke sources for this burner prototype.
     */
    readonly smoke?: SmokeSource[]

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * A chunk iterator can be used for iterating chunks coordinates of a surface.
 * 
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
    help(this: void): void

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * Gets the next chunk position if the iterator is not yet done and increments the it.
     */
    (this: void): void

}

/**
 * A circuit network associated with a given entity, connector, and wire type.
 */
interface LuaCircuitNetwork {
    /**
     * @param signal - The signal to read.
     */
    get_signal(this: void,
        signal: SignalID): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * The circuit connector ID on the associated entity this network was gotten from.
     */
    readonly circuit_connector_id: defines.circuit_connector_id

    /**
     * The number of circuits connected to this network.
     */
    readonly connected_circuit_count: number

    /**
     * The entity this circuit network reference is associated with.
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
     * The circuit network signals last tick. `nil` if there were no signals last tick.
     */
    readonly signals?: Signal[]

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
     * Gets the value of a specific signal sent by this combinator behavior last tick or `nil` if the signal didn't exist.
     * @param signal - The signal to get
     */
    get_signal_last_tick(this: void,
        signal: SignalID): void

    /**
     * The circuit network signals sent by this combinator last tick.
     */
    readonly signals_last_tick: Signal[]

}

/**
 * Allows for the registration of custom console commands through the global object named `commands`. Similarly to {@link event subscriptions | LuaBootstrap::on_event}, these don't persist through a save-and-load cycle.
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
     */
    remove_command(this: void,
        name: string): void

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
        index: number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Sets the signal at the given index.
     * @param signal - Passing `nil` clears the signal.
     */
    set_signal(this: void,
        index: number,
        signal?: Signal): void

    /**
     * Turns this constant combinator on and off.
     */
    enabled: boolean

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * This constant combinator's parameters. `nil` if the {@link item_slot_count | LuaEntityPrototype::item_slot_count} of the combinator's prototype is `0`.
     * 
     * Writing `nil` clears the combinator's parameters.
     */
    parameters?: ConstantCombinatorParameters[]

    /**
     * The number of signals this constant combinator supports.
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
    help(this: void): void

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
     */
    begin_crafting(this: void,
        table: {
            count: number,
            recipe: string | LuaRecipe,
            silent?: boolean
        }): void

    /**
     * Can at least some items be inserted?
     * @param items - Items that would be inserted.
     */
    can_insert(this: void,
        items: ItemStackIdentification): void

    /**
     * Can a given entity be opened or accessed?
     */
    can_reach_entity(this: void,
        entity: LuaEntity): void

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
     * Gets the entities that are part of the currently selected blueprint, regardless of it being in a blueprint book or picked from the blueprint library.
     */
    get_blueprint_entities(this: void): void

    /**
     * Gets the count of the given recipe that can be crafted.
     * @param recipe - The recipe.
     */
    get_craftable_count(this: void,
        recipe: string | LuaRecipe): void

    /**
     * Get an inventory belonging to this entity. This can be either the "main" inventory or some auxiliary one, like the module slots or logistic trash slots.
     * @remarks
     * A given {@link defines.inventory | defines.inventory} is only meaningful for the corresponding LuaObject type. EG: get_inventory(defines.inventory.character_main) is only meaningful if 'this' is a player character. You may get a value back but if the type of 'this' isn't the type referred to by the {@link defines.inventory | defines.inventory} it's almost guaranteed to not be the inventory asked for.
     *
     */
    get_inventory(this: void,
        inventory: defines.inventory): void

    /**
     * Get the number of all or some items in this entity.
     * @param item - Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(this: void,
        item?: string): void

    /**
     * Gets the main inventory for this character or player if this is a character or player.
     */
    get_main_inventory(this: void): void

    /**
     * The highest index of all inventories this entity can use. Allows iteration over all of them if desired.
     * @example
     * ```
     *  for k = 1, entity.get_max_inventory_index() do [...] end
     * ```
     *
     */
    get_max_inventory_index(this: void): void

    /**
     * Gets the parameters of a personal logistic request and auto-trash slot.
     * @param slot_index - The slot to get.
     */
    get_personal_logistic_slot(this: void,
        slot_index: number): void

    /**
     * Gets the parameters of a vehicle logistic request and auto-trash slot. Only used on `spider-vehicle`.
     * @param slot_index - The slot to get.
     */
    get_vehicle_logistic_slot(this: void,
        slot_index: number): void

    /**
     * Does this entity have any item inside it?
     */
    has_items_inside(this: void): void

    /**
     * Insert items into this entity. This works the same way as inserters or shift-clicking: the "best" inventory is chosen automatically.
     * @param items - The items to insert.
     */
    insert(this: void,
        items: ItemStackIdentification): void

    /**
     * Returns whether the player is holding a blueprint. This takes both blueprint items as well as blueprint records from the blueprint library into account.
     * 
     * Note that both this method and {@link LuaControl::get_blueprint_entities | LuaControl::get_blueprint_entities} refer to the currently selected blueprint, meaning a blueprint book with a selected blueprint will return the information as well.
     */
    is_cursor_blueprint(this: void): void

    /**
     * Returns whether the player is holding something in the cursor. It takes into account items from the blueprint library, as well as items and ghost cursor.
     */
    is_cursor_empty(this: void): void

    /**
     * Is the flashlight enabled.
     */
    is_flashlight_enabled(this: void): void

    /**
     * When `true` control adapter is a LuaPlayer object, `false` for entities including characters with players.
     */
    is_player(this: void): void

    /**
     * Mines the given entity as if this player (or character) mined it.
     * @param entity - The entity to mine
     * @param force - Forces mining the entity even if the items can't fit in the player.
     */
    mine_entity(this: void,
        entity: LuaEntity,
        force?: boolean): void

    /**
     * Mines the given tile as if this player (or character) mined it.
     * @param tile - The tile to mine.
     */
    mine_tile(this: void,
        tile: LuaTile): void

    /**
     * Open the technology GUI and select a given technology.
     * @param technology - The technology to select after opening the GUI.
     */
    open_technology_gui(this: void,
        technology?: TechnologyIdentification): void

    /**
     * Remove items from this entity.
     * @param items - The items to remove.
     */
    remove_item(this: void,
        items: ItemStackIdentification): void

    /**
     * Create an arrow which points at this entity. This is used in the tutorial. For examples, see `control.lua` in the campaign missions.
     */
    set_gui_arrow(this: void,
        table: LuaControlSetGuiArrowParams): void

    /**
     * Sets a personal logistic request and auto-trash slot to the given value.
     * @remarks
     * This will silently fail if personal logistics are not researched yet.
     *
     * @param slot_index - The slot to set.
     * @param value - The logistic request parameters.
     */
    set_personal_logistic_slot(this: void,
        slot_index: number,
        value: LogisticParameters): void

    /**
     * Sets a vehicle logistic request and auto-trash slot to the given value. Only used on `spider-vehicle`.
     * @param slot_index - The slot to set.
     * @param value - The logistic request parameters.
     */
    set_vehicle_logistic_slot(this: void,
        slot_index: number,
        value: LogisticParameters): void

    /**
     * Teleport the entity to a given position, possibly on another surface.
     * @remarks
     * Some entities may not be teleported. For instance, transport belts won't allow teleportation and this method will always return `false` when used on any such entity.
     * You can also pass 1 or 2 numbers as the parameters and they will be used as relative teleport coordinates `'teleport(0, 1)'` to move the entity 1 tile positive y. `'teleport(4)'` to move the entity 4 tiles to the positive x.
     * `script_raised_teleported` will not be raised if teleporting a player with no character.
     *
     * @param position - Where to teleport to.
     * @param raise_teleported - If true, [defines.events.script_raised_teleported](defines.events.script_raised_teleported) will be fired on successful entity teleportation.
     * @param surface - Surface to teleport to. If not given, will teleport to the entity's current surface. Only players, cars, and spidertrons can be teleported cross-surface.
     */
    teleport(this: void,
        position: MapPosition,
        surface?: SurfaceIdentification,
        raise_teleported?: boolean): void

    /**
     * Select an entity, as if by hovering the mouse above it.
     * @param position - Position of the entity to select.
     */
    update_selected_entity(this: void,
        position: MapPosition): void

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
     * The current mining progress between 0 and 1 of this character, or 0 if they aren't mining.
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
     * The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
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
     * When `true` hand crafting is free and instant.
     */
    cheat_mode: boolean

    /**
     * The current crafting queue items.
     */
    readonly crafting_queue: CraftingQueueItem[]

    /**
     * The crafting queue progress in the range `[0-1]`. `0` when no recipe is being crafted.
     */
    crafting_queue_progress: number

    /**
     * Size of the crafting queue.
     */
    readonly crafting_queue_size: number

    /**
     * The ghost prototype in the player's cursor. When read, it will be a {@link LuaItemPrototype | LuaItemPrototype}.
     * @remarks
     * Items in the cursor stack will take priority over the cursor ghost.
     *
     */
    cursor_ghost?: ItemPrototypeIdentification

    /**
     * The player's cursor stack. `nil` if the player controller is a spectator.
     * @example
     * Even though this property is marked as read-only, it returns a [LuaItemStack](LuaItemStack), meaning it can be manipulated like so: 
     * ```
     * player.cursor_stack.clear()
     * ```
     *
     */
    readonly cursor_stack?: LuaItemStack

    /**
     * `true` if the player is in a vehicle. Writing to this attribute puts the player in or out of a vehicle.
     */
    driving: boolean

    /**
     * The item drop distance of this character or max uint when not a character or player connected to a character.
     */
    readonly drop_item_distance: number

    /**
     * The current combat robots following the character.
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
     * Unique {@link index | LuaForce::index} (ID) associated with the force of this entity.
     */
    readonly force_index: number

    /**
     * Whether this character entity is in combat.
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
     * When the player isn't mining tiles, the player will mine what ever entity is currently selected. See {@link LuaControl::selected | LuaControl::selected} and {@link LuaControl::update_selected_entity | LuaControl::update_selected_entity}.
     *
     */
    mining_state: {
        
        /**
         * Whether the player is mining at all.
         */
        mining: boolean,
        
        /**
         * What location the player is mining. Only relevant if `mining` is `true`.
         */
        position?: MapPosition
    }

    /**
     * The GUI the player currently has open.
     * 
     * This is the GUI that will asked to close (by firing the {@link on_gui_closed | on_gui_closed} event) when the `Esc` or `E` keys are pressed. If this attribute is not `nil`, and a new GUI is written to it, the existing one will be asked to close.
     * @remarks
     * Write supports any of the types. Read will return the `entity`, `equipment`, `equipment-grid`, `player`, `element`, `inventory`, `technology`, or `nil`.
     *
     */
    opened?: LuaEntity | LuaItemStack | LuaEquipment | LuaEquipmentGrid | LuaPlayer | LuaGuiElement | LuaInventory | LuaTechnology | defines.gui_type

    readonly opened_gui_type?: defines.gui_type

    /**
     * Current item-picking state.
     */
    picking_state: boolean

    /**
     * The current position of the entity.
     */
    readonly position: MapPosition

    /**
     * The reach distance of this character or max uint when not a character or player connected to a character.
     */
    readonly reach_distance: number

    /**
     * Current repair state.
     */
    repair_state: {
        
        /**
         * The position being repaired
         */
        position: MapPosition,
        
        /**
         * The current state
         */
        repairing: boolean
    }

    /**
     * The resource reach distance of this character or max double when not a character or player connected to a character.
     */
    readonly resource_reach_distance: number

    /**
     * Current riding state of this car, or of the car this player is riding in.
     */
    riding_state: RidingState

    /**
     * The currently selected entity. Assigning an entity will select it if is selectable, otherwise the selection is cleared.
     */
    selected?: LuaEntity

    /**
     * Current shooting state.
     */
    shooting_state: {
        
        /**
         * The position being shot at
         */
        position: MapPosition,
        
        /**
         * The current state
         */
        state: defines.shooting
    }

    /**
     * The surface this entity is currently on.
     */
    readonly surface: LuaSurface

    /**
     * Unique {@link index | LuaSurface::index} (ID) associated with the surface this entity is currently on.
     */
    readonly surface_index: number

    /**
     * The vehicle the player is currently sitting in.
     */
    readonly vehicle?: LuaEntity

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
    walking_state: {
        
        /**
         * Direction where the player is walking
         */
        direction: defines.direction,
        
        /**
         * If `false`, the player is currently not walking; otherwise it's going somewhere
         */
        walking: boolean
    }

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
     */
    get_circuit_network(this: void,
        wire: defines.wire_type,
        circuit_connector?: defines.circuit_connector_id): void

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
    help(this: void): void

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
    last_user?: LuaPlayer

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The position of this tag.
     */
    readonly position: MapPosition

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
    help(this: void): void

    /**
     * The action that happens when this custom input is triggered.
     */
    readonly action: string

    /**
     * The default alternative key sequence for this custom input, if any
     */
    readonly alternative_key_sequence?: string

    /**
     * The consuming type: `"none"` or `"game-only"`.
     */
    readonly consuming: string

    /**
     * The default controller alternative key sequence for this custom input, if any
     */
    readonly controller_alternative_key_sequence?: string

    /**
     * The default controller key sequence for this custom input, if any
     */
    readonly controller_key_sequence?: string

    /**
     * Whether this custom input is enabled. Disabled custom inputs exist but are not used by the game.
     */
    readonly enabled: boolean

    /**
     * Whether this custom input is enabled while using the cutscene controller.
     */
    readonly enabled_while_in_cutscene: boolean

    /**
     * Whether this custom input is enabled while using the spectator controller.
     */
    readonly enabled_while_spectating: boolean

    /**
     * Whether this custom input will include the selected prototype (if any) when triggered.
     */
    readonly include_selected_prototype: boolean

    /**
     * The item that gets spawned when this custom input is fired, if any.
     */
    readonly item_to_spawn?: LuaItemPrototype

    /**
     * The default key sequence for this custom input.
     */
    readonly key_sequence: string

    /**
     * The linked game control name, if any.
     */
    readonly linked_game_control?: string

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Lazily evaluated table. For performance reasons, we sometimes return a custom table-like type instead of a native Lua table. This custom type lazily constructs the necessary Lua wrappers of the corresponding C++ objects, therefore preventing their unnecessary construction in some cases.
 * 
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
    help(this: void): void

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * This decider combinator's parameters.
     * @remarks
     * Writing `nil` clears the combinator's parameters.
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
    help(this: void): void

    /**
     * Autoplace specification for this decorative prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

    readonly buffer_capacity: number

    readonly drain: number

    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
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
 * 
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
        position: MapPosition): void

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
     */
    can_be_destroyed(this: void): void

    /**
     * Whether this character can shoot the given entity or position.
     */
    can_shoot(this: void,
        target: LuaEntity,
        position: MapPosition): void

    /**
     * Can wires reach between these entities.
     */
    can_wires_reach(this: void,
        entity: LuaEntity): void

    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     * @param force - The force who did the deconstruction order.
     * @param player - The player to set the `last_user` to if any.
     */
    cancel_deconstruction(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): void

    /**
     * Cancels upgrade if it is scheduled, does nothing otherwise.
     * @param force - The force who did the upgrade order.
     * @param player - The player to set the last_user to if any.
     */
    cancel_upgrade(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): void

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
     * @param table.create_build_effect_smoke - If false, the building effect smoke will not be shown around the new entity.
     * @param table.position - The destination position
     * @param table.surface - The destination surface
     */
    clone(this: void,
        table: {
            position: MapPosition,
            surface?: LuaSurface,
            force?: ForceIdentification,
            create_build_effect_smoke?: boolean
        }): void

    /**
     * Connects current linked belt with another one.
     * 
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
     * 
     * - To connect two electric poles, `target` must be a {@link LuaEntity | LuaEntity} that specifies another electric pole. This will connect them with copper cable.
     * - To connect two devices with circuit wire, `target` must be a table of type {@link WireConnectionDefinition | WireConnectionDefinition}.
     * @param target - The target with which to establish a connection.
     */
    connect_neighbour(this: void,
        target: LuaEntity | WireConnectionDefinition): void

    /**
     * Connects the rolling stock in the given direction.
     */
    connect_rolling_stock(this: void,
        direction: defines.rail_direction): void

    /**
     * Copies settings from the given entity onto this entity.
     * @param by_player - If provided, the copying is done 'as' this player and [on_entity_settings_pasted](on_entity_settings_pasted) is triggered.
     */
    copy_settings(this: void,
        entity: LuaEntity,
        by_player?: PlayerIdentification): void

    /**
     * Creates the same smoke that is created when you place a building by hand. You can play the building sound to go with it by using {@link LuaSurface::play_sound | LuaSurface::play_sound}, eg: entity.surface.play_sound{path="entity-build/"..entity.prototype.name, position=entity.position}
     */
    create_build_effect_smoke(this: void): void

    /**
     * Damages the entity.
     * @remarks
     * Applies to subclasses: EntityWithHealth
     *
     * @param damage - The amount of damage to be done.
     * @param dealer - The entity to consider as the damage dealer. Needs to be on the same surface as the entity being damaged.
     * @param force - The force that will be doing the damage.
     * @param type - The type of damage to be done, defaults to "impact". Can't be `nil`.
     */
    damage(this: void,
        damage: number,
        force: ForceIdentification,
        type?: string,
        dealer?: LuaEntity): void

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
     */
    destroy(this: void,
        table?: {
            do_cliff_correction?: boolean,
            raise_destroy?: boolean
        }): void

    /**
     * Immediately kills the entity. Does nothing if the entity doesn't have health.
     * 
     * Unlike {@link LuaEntity::destroy | LuaEntity::destroy}, `die` will trigger the {@link on_entity_died | on_entity_died} event and the entity will produce a corpse and drop loot if it has any.
     * @param cause - The cause to attribute the kill to.
     * @param force - The force to attribute the kill to.
     * @example
     * This function can be called with only the `cause` argument and no `force`: 
     * ```
     * entity.die(nil, killer_entity)
     * ```
     *
     */
    die(this: void,
        force?: ForceIdentification,
        cause?: LuaEntity): void

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
     * 
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
     */
    disconnect_rolling_stock(this: void,
        direction: defines.rail_direction): void

    /**
     * Returns a table with all entities affected by this beacon
     * @remarks
     * Applies to subclasses: Beacon
     *
     */
    get_beacon_effect_receivers(this: void): void

    /**
     * Returns a table with all beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    get_beacons(this: void): void

    /**
     * Get the source of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    get_beam_source(this: void): void

    /**
     * Get the target of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    get_beam_target(this: void): void

    /**
     * The burnt result inventory for this entity or `nil` if this entity doesn't have a burnt result inventory.
     */
    get_burnt_result_inventory(this: void): void

    /**
     * Returns all child signals. Child signals can be either RailSignal or RailChainSignal. Child signals are signals which are checked by this signal to determine a chain state.
     * @remarks
     * Applies to subclasses: RailChainSignal
     *
     */
    get_child_signals(this: void): void

    /**
     * @param circuit_connector - The connector to get circuit network for. Must be specified for entities with more than one circuit network connector.
     * @param wire - Wire color of the network connected to this entity.
     */
    get_circuit_network(this: void,
        wire: defines.wire_type,
        circuit_connector?: defines.circuit_connector_id): void

    /**
     * @remarks
     * Applies to subclasses: Rail
     *
     */
    get_connected_rail(this: void,
        table: {
            rail_direction: defines.rail_direction,
            rail_connection_direction: defines.rail_connection_direction
        }): void

    /**
     * Get the rails that this signal is connected to.
     * @remarks
     * Applies to subclasses: RailSignal,RailChainSignal
     *
     */
    get_connected_rails(this: void): void

    /**
     * Gets rolling stock connected to the given end of this stock.
     */
    get_connected_rolling_stock(this: void,
        direction: defines.rail_direction): void

    /**
     * Gets the control behavior of the entity (if any).
     */
    get_control_behavior(this: void): void

    /**
     * Returns the amount of damage to be taken by this entity.
     */
    get_damage_to_be_taken(this: void): void

    /**
     * Gets the driver of this vehicle if any.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    get_driver(this: void): void

    /**
     * Get the filter for a slot in an inserter, loader, or logistic storage container.
     * @remarks
     * The entity must allow filters.
     *
     * @param slot_index - Index of the slot to get the filter for.
     */
    get_filter(this: void,
        slot_index: number): void

    /**
     * Get amounts of all fluids in this entity.
     * @remarks
     * If information about fluid temperatures is required, {@link LuaEntity::fluidbox | LuaEntity::fluidbox} should be used instead.
     *
     */
    get_fluid_contents(this: void): void

    /**
     * Get the amount of all or some fluid in this entity.
     * @remarks
     * If information about fluid temperatures is required, {@link LuaEntity::fluidbox | LuaEntity::fluidbox} should be used instead.
     *
     * @param fluid - Prototype name of the fluid to count. If not specified, count all fluids.
     */
    get_fluid_count(this: void,
        fluid?: string): void

    /**
     * The fuel inventory for this entity or `nil` if this entity doesn't have a fuel inventory.
     */
    get_fuel_inventory(this: void): void

    /**
     * The health ratio of this entity between 1 and 0 (for full health and no health respectively).
     */
    get_health_ratio(this: void): void

    /**
     * Gets the heat setting for this heat interface.
     * @remarks
     * Applies to subclasses: HeatInterface
     *
     */
    get_heat_setting(this: void): void

    /**
     * Returns all signals guarding entrance to a rail block this rail belongs to.
     * @remarks
     * Applies to subclasses: Rail
     *
     */
    get_inbound_signals(this: void): void

    /**
     * Gets the filter for this infinity container at the given index, or `nil` if the filter index doesn't exist or is empty.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     * @param index - The index to get.
     */
    get_infinity_container_filter(this: void,
        index: number): void

    /**
     * Gets the filter for this infinity pipe, or `nil` if the filter is empty.
     * @remarks
     * Applies to subclasses: InfinityPipe
     *
     */
    get_infinity_pipe_filter(this: void): void

    /**
     * Gets all the `LuaLogisticPoint`s that this entity owns. Optionally returns only the point specified by the index parameter.
     * @remarks
     * When `index` is not given, this will be a single `LuaLogisticPoint` for most entities. For some (such as the player character), it can be zero or more.
     *
     * @param index - If provided, only returns the `LuaLogisticPoint` specified by this index.
     */
    get_logistic_point(this: void,
        index?: defines.logistic_member_index): void

    /**
     * Get all offers in a market as an array.
     * @remarks
     * Applies to subclasses: Market
     *
     */
    get_market_items(this: void): void

    /**
     * Get the maximum transport line index of a belt or belt connectable entity.
     * @remarks
     * Applies to subclasses: TransportBeltConnectable
     *
     */
    get_max_transport_line_index(this: void): void

    /**
     * Read a single signal from the combined circuit networks.
     * @param circuit_connector - The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     * @param signal - The signal to read.
     */
    get_merged_signal(this: void,
        signal: SignalID,
        circuit_connector?: defines.circuit_connector_id): void

    /**
     * The merged circuit network signals or `nil` if there are no signals.
     * @param circuit_connector - The connector to get signals for. Must be specified for entities with more than one circuit network connector.
     */
    get_merged_signals(this: void,
        circuit_connector?: defines.circuit_connector_id): void

    /**
     * Inventory for storing modules of this entity; `nil` if this entity has no module inventory.
     */
    get_module_inventory(this: void): void

    /**
     * Gets (and or creates if needed) the control behavior of the entity.
     */
    get_or_create_control_behavior(this: void): void

    /**
     * Returns all signals guarding exit from a rail block this rail belongs to.
     * @remarks
     * Applies to subclasses: Rail
     *
     */
    get_outbound_signals(this: void): void

    /**
     * Gets the entity's output inventory if it has one.
     */
    get_output_inventory(this: void): void

    /**
     * Returns all parent signals. Parent signals are always RailChainSignal. Parent signals are those signals that are checking state of this signal to determine their own chain state.
     * @remarks
     * Applies to subclasses: RailSignal,RailChainSignal
     *
     */
    get_parent_signals(this: void): void

    /**
     * Gets the passenger of this car or spidertron if any.
     * @remarks
     * This differs over {@link LuaEntity::get_driver | LuaEntity::get_driver} in that the passenger can't drive the car.
     * Applies to subclasses: Car,SpiderVehicle
     *
     */
    get_passenger(this: void): void

    /**
     * The radius of this entity.
     */
    get_radius(this: void): void

    /**
     * Get the rail at the end of the rail segment this rail is in.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     */
    get_rail_segment_end(this: void,
        direction: defines.rail_direction): void

    /**
     * Get the rail signal or train stop at the start/end of the rail segment this rail is in.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     * @param direction - The direction of travel relative to this rail.
     * @param in_else_out - If true, gets the entity at the entrance of the rail segment, otherwise gets the entity at the exit of the rail segment.
     */
    get_rail_segment_entity(this: void,
        direction: defines.rail_direction,
        in_else_out: boolean): void

    /**
     * Get the length of the rail segment this rail is in.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     */
    get_rail_segment_length(this: void): void

    /**
     * Get a rail from each rail segment that overlaps with this rail's rail segment.
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     */
    get_rail_segment_overlaps(this: void): void

    /**
     * Get all rails of a rail segment this rail is in
     * @remarks
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * Applies to subclasses: Rail
     *
     * @param direction - Selects end of this rail that points to a rail segment end from which to start returning rails
     */
    get_rail_segment_rails(this: void,
        direction: defines.rail_direction): void

    /**
     * Current recipe being assembled by this machine, if any.
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    get_recipe(this: void): void

    /**
     * Get a logistic requester slot.
     * @remarks
     * Useable only on entities that have requester slots.
     *
     * @param slot - The slot index.
     */
    get_request_slot(this: void,
        slot: number): void

    /**
     * Gets legs of given SpiderVehicle.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    get_spider_legs(this: void): void

    /**
     * The train currently stopped at this train stop, if any.
     * @remarks
     * Applies to subclasses: TrainStop
     *
     */
    get_stopped_train(this: void): void

    /**
     * The trains scheduled to stop at this train stop.
     * @remarks
     * Applies to subclasses: TrainStop
     *
     */
    get_train_stop_trains(this: void): void

    /**
     * Get a transport line of a belt or belt connectable entity.
     * @remarks
     * Applies to subclasses: TransportBeltConnectable
     *
     * @param index - Index of the requested transport line. Transport lines are 1-indexed.
     */
    get_transport_line(this: void,
        index: number): void

    /**
     * Returns the new entity direction after upgrading.
     */
    get_upgrade_direction(this: void): void

    /**
     * Returns the new entity prototype.
     */
    get_upgrade_target(this: void): void

    /**
     * Same as {@link LuaEntity::has_flag | LuaEntity::has_flag}, but targets the inner entity on a entity ghost.
     * @remarks
     * Applies to subclasses: EntityGhost
     *
     * @param flag - The flag to test. See [EntityPrototypeFlags](EntityPrototypeFlags) for a list of flags.
     */
    ghost_has_flag(this: void,
        flag: string): void

    /**
     * Has this unit been assigned a command?
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    has_command(this: void): void

    /**
     * Test whether this entity's prototype has a certain flag set.
     * @remarks
     * `entity.has_flag(f)` is a shortcut for `entity.prototype.has_flag(f)`.
     *
     * @param flag - The flag to test. See [EntityPrototypeFlags](EntityPrototypeFlags) for a list of flags.
     */
    has_flag(this: void,
        flag: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Insert fluid into this entity. Fluidbox is chosen automatically.
     * @param fluid - Fluid to insert.
     */
    insert_fluid(this: void,
        fluid: Fluid): void

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     */
    is_closed(this: void): void

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     */
    is_closing(this: void): void

    /**
     * Returns `true` if this entity produces or consumes electricity and is connected to an electric network that has at least one entity that can produce power.
     */
    is_connected_to_electric_network(this: void): void

    /**
     * Returns whether a craft is currently in process. It does not indicate whether progress is currently being made, but whether a crafting process has been started in this machine.
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    is_crafting(this: void): void

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     */
    is_opened(this: void): void

    /**
     * @remarks
     * Applies to subclasses: Gate
     *
     */
    is_opening(this: void): void

    /**
     * Checks if this rail and other rail both belong to the same rail block.
     * @remarks
     * Applies to subclasses: Rail
     *
     */
    is_rail_in_same_rail_block_as(this: void,
        other_rail: LuaEntity): void

    /**
     * Checks if this rail and other rail both belong to the same rail segment.
     * @remarks
     * Applies to subclasses: Rail
     *
     */
    is_rail_in_same_rail_segment_as(this: void,
        other_rail: LuaEntity): void

    /**
     * Is this entity or tile ghost or item request proxy registered for construction? If false, it means a construction robot has been dispatched to build the entity, or it is not an entity that can be constructed.
     */
    is_registered_for_construction(this: void): void

    /**
     * Is this entity registered for deconstruction with this force? If false, it means a construction robot has been dispatched to deconstruct it, or it is not marked for deconstruction. The complexity is effectively O(1) - it depends on the number of objects targeting this entity which should be small enough.
     * @param force - The force construction manager to check.
     */
    is_registered_for_deconstruction(this: void,
        force: ForceIdentification): void

    /**
     * Is this entity registered for repair? If false, it means a construction robot has been dispatched to upgrade it, or it is not damaged. This is worst-case O(N) complexity where N is the current number of things in the repair queue.
     */
    is_registered_for_repair(this: void): void

    /**
     * Is this entity registered for upgrade? If false, it means a construction robot has been dispatched to upgrade it, or it is not marked for upgrade. This is worst-case O(N) complexity where N is the current number of things in the upgrade queue.
     */
    is_registered_for_upgrade(this: void): void

    /**
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    launch_rocket(this: void): void

    /**
     * Mines this entity.
     * @remarks
     * 'Standard' operation is to keep calling `LuaEntity.mine` with an inventory until all items are transferred and the items dealt with.
     * The result of mining the entity (the item(s) it produces when mined) will be dropped on the ground if they don't fit into the provided inventory.
     *
     * @param table.force - If true, when the item(s) don't fit into the given inventory the entity is force mined. If false, the mining operation fails when there isn't enough room to transfer all of the items into the inventory. Defaults to false. This is ignored and acts as `true` if no inventory is provided.
     * @param table.ignore_minable - If true, the minable state of the entity is ignored. Defaults to `false`. If false, an entity that isn't minable (set as not-minable in the prototype or isn't minable for other reasons) will fail to be mined.
     * @param table.inventory - If provided the item(s) will be transferred into this inventory. If provided, this must be an inventory created with [LuaGameScript::create_inventory](LuaGameScript::create_inventory) or be a basic inventory owned by some entity.
     * @param table.raise_destroyed - If true, [script_raised_destroy](script_raised_destroy) will be raised. Defaults to `true`.
     */
    mine(this: void,
        table?: {
            inventory?: LuaInventory,
            force?: boolean,
            raise_destroyed?: boolean,
            ignore_minable?: boolean
        }): void

    /**
     * Sets the entity to be deconstructed by construction robots.
     * @param force - The force whose robots are supposed to do the deconstruction.
     * @param player - The player to set the `last_user` to if any.
     */
    order_deconstruction(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): void

    /**
     * Sets the entity to be upgraded by construction robots.
     * @param table.direction - The new direction if any.
     * @param table.force - The force whose robots are supposed to do the upgrade.
     * @param table.target - The prototype of the entity to upgrade to.
     */
    order_upgrade(this: void,
        table: {
            force: ForceIdentification,
            target: EntityPrototypeIdentification,
            player?: PlayerIdentification,
            direction?: defines.direction
        }): void

    /**
     * Plays a note with the given instrument and note.
     * @remarks
     * Applies to subclasses: ProgrammableSpeaker
     *
     */
    play_note(this: void,
        instrument: number,
        note: number): void

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
     */
    remove_fluid(this: void,
        table: {
            name: string,
            amount: number,
            minimum_temperature?: number,
            maximum_temperature?: number,
            temperature?: number
        }): void

    /**
     * Remove an offer from a market.
     * @remarks
     * The other offers are moved down to fill the gap created by removing the offer, which decrements the overall size of the offer array.
     * Applies to subclasses: Market
     *
     * @param offer - Index of offer to remove.
     */
    remove_market_item(this: void,
        offer: number): void

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
     * @param table.raise_revive - If true, and an entity ghost; [script_raised_revive](script_raised_revive) will be called. Else if true, and a tile ghost; [script_raised_set_tiles](script_raised_set_tiles) will be called.
     * @param table.return_item_request_proxy - If `true` the function will return item request proxy as the third return value.
     */
    revive(this: void,
        table?: {
            return_item_request_proxy?: boolean,
            raise_revive?: boolean
        }): void

    /**
     * Rotates this entity as if the player rotated it.
     * @param table.by_player - If not specified, the [on_player_rotated_entity](on_player_rotated_entity) event will not be fired.
     * @param table.enable_looted - When true, each spilled item will be flagged with the [LuaEntity::to_be_looted](LuaEntity::to_be_looted) flag.
     * @param table.force - When provided the spilled items will be marked for deconstruction by this force.
     * @param table.reverse - If `true`, rotate the entity in the counter-clockwise direction.
     * @param table.spill_items - If the player is not given should extra items be spilled or returned as a second return value from this.
     */
    rotate(this: void,
        table?: {
            reverse?: boolean,
            by_player?: PlayerIdentification,
            spill_items?: boolean,
            enable_looted?: boolean,
            force?: LuaForce | string
        }): void

    /**
     * Set the source of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    set_beam_source(this: void,
        source: LuaEntity | MapPosition): void

    /**
     * Set the target of this beam.
     * @remarks
     * Applies to subclasses: Beam
     *
     */
    set_beam_target(this: void,
        target: LuaEntity | MapPosition): void

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
     * This differs from {@link LuaEntity::set_passenger | LuaEntity::set_passenger} in that the passenger can't drive the vehicle.
     * Applies to subclasses: Vehicle
     *
     * @param driver - The new driver. Writing `nil` ejects the current driver, if any.
     */
    set_driver(this: void,
        driver?: LuaEntity | PlayerIdentification): void

    /**
     * Set the filter for a slot in an inserter, loader, or logistic storage container.
     * @remarks
     * The entity must allow filters.
     *
     * @param item - Prototype name of the item to filter, or `nil` to clear the filter.
     * @param slot_index - Index of the slot to set the filter for.
     */
    set_filter(this: void,
        slot_index: number,
        item: string | null): void

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
     * @param filter - The new filter, or `nil` to clear the filter.
     * @param index - The index to set.
     */
    set_infinity_container_filter(this: void,
        index: number,
        filter: InfinityInventoryFilter | null): void

    /**
     * Sets the filter for this infinity pipe.
     * @remarks
     * Applies to subclasses: InfinityPipe
     *
     * @param filter - The new filter, or `nil` to clear the filter.
     */
    set_infinity_pipe_filter(this: void,
        filter: InfinityPipeFilter | null): void

    /**
     * Sets the passenger of this car or spidertron.
     * @remarks
     * This differs from {@link LuaEntity::get_driver | LuaEntity::get_driver} in that the passenger can't drive the car.
     * Applies to subclasses: Car,SpiderVehicle
     *
     * @param passenger - The new passenger. Writing `nil` ejects the current passenger, if any.
     */
    set_passenger(this: void,
        passenger?: LuaEntity | PlayerIdentification): void

    /**
     * Sets the given recipe in this assembly machine.
     * @remarks
     * Applies to subclasses: AssemblingMachine
     *
     * @param recipe - The new recipe. Writing `nil` clears the recipe, if any.
     */
    set_recipe(this: void,
        recipe?: string | LuaRecipe): void

    /**
     * Set a logistic requester slot.
     * @remarks
     * Useable only on entities that have requester slots.
     *
     * @param request - What to request.
     * @param slot - The slot index.
     */
    set_request_slot(this: void,
        request: ItemStackIdentification,
        slot: number): void

    /**
     * Revives a ghost silently.
     * @param table.raise_revive - If true, and an entity ghost; [script_raised_revive](script_raised_revive) will be called. Else if true, and a tile ghost; [script_raised_set_tiles](script_raised_set_tiles) will be called.
     * @param table.return_item_request_proxy - If `true` the function will return item request proxy as the third parameter.
     */
    silent_revive(this: void,
        table?: {
            return_item_request_proxy?: boolean,
            raise_revive?: boolean
        }): void

    /**
     * Triggers spawn_decoration actions defined in the entity prototype or does nothing if entity is not "turret" or "unit-spawner".
     */
    spawn_decorations(this: void): void

    /**
     * Only works if the entity is a speech-bubble, with an "effect" defined in its wrapper_flow_style. Starts animating the opacity of the speech bubble towards zero, and destroys the entity when it hits zero.
     */
    start_fading_out(this: void): void

    /**
     * Sets the {@link speed | LuaEntity::speed} of the given SpiderVehicle to zero. Notably does not clear its {@link autopilot_destination | LuaEntity::autopilot_destination}, which it will continue moving towards if set.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    stop_spider(this: void): void

    /**
     * Whether this entity supports a backer name.
     */
    supports_backer_name(this: void): void

    /**
     * Is this entity marked for deconstruction?
     */
    to_be_deconstructed(this: void): void

    /**
     * Is this entity marked for upgrade?
     */
    to_be_upgraded(this: void): void

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
     * Whether this land mine is armed.
     * @remarks
     * Applies to subclasses: LandMine
     *
     */
    readonly armed: boolean

    /**
     * The player this character is associated with, if any. Set to `nil` to clear.
     * 
     * The player will be automatically disassociated when a controller is set on the character. Also, all characters associated to a player will be logged off when the player logs off in multiplayer.
     * 
     * Reading this property will return a {@link LuaPlayer | LuaPlayer}, while {@link PlayerIdentification | PlayerIdentification} can be used when writing.
     * @remarks
     * A character associated with a player is not directly controlled by any player.
     * Applies to subclasses: Character
     *
     */
    associated_player?: LuaPlayer | PlayerIdentification

    /**
     * Whether this rocket silo automatically launches the rocket when cargo is inserted.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    auto_launch: boolean

    /**
     * Destination of this spidertron's autopilot, if any. Writing `nil` clears all destinations.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    autopilot_destination?: MapPosition

    /**
     * The queued destination positions of spidertron's autopilot.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly autopilot_destinations: MapPosition[]

    /**
     * The backer name assigned to this entity. Entities that support backer names are labs, locomotives, radars, roboports, and train stops. `nil` if this entity doesn't support backer names.
     * @remarks
     * While train stops get the name of a backer when placed down, players can rename them if they want to. In this case, `backer_name` returns the player-given name of the entity.
     *
     */
    backer_name?: string

    /**
     * Number of beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    readonly beacons_count?: number

    /**
     * The belt connectable neighbours of this belt connectable entity. Only entities that input to or are outputs of this entity. Does not contain the other end of an underground belt, see {@link LuaEntity::neighbours | LuaEntity::neighbours} for that. This is a dictionary with `"inputs"`, `"outputs"` entries that are arrays of transport belt connectable entities, or empty tables if no entities.
     * @remarks
     * Applies to subclasses: TransportBeltConnectable
     *
     */
    readonly belt_neighbours: {[key: string]: LuaEntity[]}

    /**
     * Whether this underground belt goes into or out of the ground.
     * @remarks
     * Applies to subclasses: TransportBeltToGround
     *
     */
    readonly belt_to_ground_type: 'input' | 'output'

    /**
     * The bonus mining progress for this mining drill. Read yields a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    bonus_mining_progress?: number

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
     * The burner energy source for this entity, if any.
     */
    readonly burner?: LuaBurner

    /**
     * The state of this chain signal.
     * @remarks
     * Applies to subclasses: RailChainSignal
     *
     */
    readonly chain_signal_state: defines.chain_signal_state

    /**
     * The reason this character corpse character died. `""` if there is no reason.
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
     * Entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network.
     */
    readonly circuit_connected_entities?: {
        
        /**
         * Entities connected via the green wire.
         */
        green: LuaEntity[],
        
        /**
         * Entities connected via the red wire.
         */
        red: LuaEntity[]
    }

    /**
     * The connection definition for entities that are directly connected to this entity via the circuit network. `nil` if this entity can't be connected to the circuit network.
     */
    readonly circuit_connection_definitions?: CircuitConnectionDefinition[]

    /**
     * The orientation of this cliff.
     */
    readonly cliff_orientation: CliffOrientation

    /**
     * The color of this character, rolling stock, train stop, car, spider-vehicle, flying text, corpse or simple-entity-with-owner. `nil` if this entity doesn't use custom colors.
     * @remarks
     * Car color is overridden by the color of the current driver/passenger, if there is one.
     *
     */
    color?: Color

    /**
     * The owner of this combat robot, if any.
     */
    combat_robot_owner?: LuaEntity

    /**
     * The command given to this unit, if any.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly command?: Command

    /**
     * The rail entity this train stop is connected to, if any.
     * @remarks
     * Applies to subclasses: TrainStop
     *
     */
    readonly connected_rail?: LuaEntity

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
     * If set to `false`, this entity can't be damaged and won't be attacked automatically. It can however still be mined.
     * @remarks
     * Entities that are indestructible naturally (they have no health, like smoke, resource etc) can't be set to be destructible.
     *
     */
    destructible: boolean

    /**
     * The current direction this entity is facing.
     */
    direction: defines.direction

    /**
     * The distraction command given to this unit, if any.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly distraction_command?: Command

    /**
     * Whether the driver of this car or spidertron is the gunner. If `false`, the passenger is the gunner. `nil` if this is neither a car or a spidertron.
     * @remarks
     * Applies to subclasses: Car,SpiderVehicle
     *
     */
    driver_is_gunner?: boolean

    /**
     * Position where the entity puts its stuff.
     * @remarks
     * Meaningful only for entities that put stuff somewhere, such as mining drills or inserters. Mining drills can't have their drop position changed; inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the drop position.
     *
     */
    drop_position: MapPosition

    /**
     * The entity this entity is putting its items to. If there are multiple possible entities at the drop-off point, writing to this attribute allows a mod to choose which one to drop off items to. The entity needs to collide with the tile box under the drop-off position. `nil` if there is no entity to put items to, or if this is not an entity that puts items somewhere.
     */
    drop_target?: LuaEntity

    /**
     * The current speed of this unit in tiles per tick, taking into account any walking speed modifier given by the tile the unit is standing on. `nil` if this is not a unit.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly effective_speed?: number

    /**
     * Multiplies the acceleration the vehicle can create for one unit of energy. Defaults to `1`.
     * @remarks
     * Applies to subclasses: Car
     *
     */
    effectivity_modifier: number

    /**
     * The effects being applied to this entity, if any. For beacons, this is the effect the beacon is broadcasting.
     */
    readonly effects?: ModuleEffects

    /**
     * The buffer size for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     * @remarks
     * Write access is limited to the ElectricEnergyInterface type
     *
     */
    electric_buffer_size?: number

    /**
     * The electric drain for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_drain?: number

    /**
     * The emissions for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_emissions?: number

    /**
     * The input flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_input_flow_limit?: number

    /**
     * Returns the id of the electric network that this entity is connected to, if any.
     */
    readonly electric_network_id?: number

    /**
     * The electric network statistics for this electric pole.
     * @remarks
     * Applies to subclasses: ElectricPole
     *
     */
    readonly electric_network_statistics: LuaFlowStatistics

    /**
     * The output flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_output_flow_limit?: number

    /**
     * Whether equipment grid logistics are enabled while this vehicle is moving.
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
     * The label on this spider-vehicle entity, if any. `nil` if this is not a spider-vehicle.
     */
    entity_label?: string

    /**
     * The number of filter slots this inserter, loader, or logistic storage container has. 0 if not one of those entities.
     */
    readonly filter_slot_count: number

    /**
     * Fluidboxes of this entity.
     */
    fluidbox: LuaFluidBox

    /**
     * The follow offset of this spidertron, if any entity is being followed. This is randomized each time the follow entity is set.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    follow_offset?: Vector

    /**
     * The follow target of this spidertron, if any.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    follow_target?: LuaEntity

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
     * The {@link unit_number | LuaEntity::unit_number} of the entity contained in this ghost. It is the same as the unit number of the {@link EntityWithOwner | https://wiki.factorio.com/Prototype/EntityWithOwner} that was destroyed to create this ghost. If it was created by other means, or if the inner entity does not support unit numbers, this property is `nil`.
     * @remarks
     * Applies to subclasses: EntityGhost
     *
     */
    readonly ghost_unit_number?: number

    /**
     * The graphics variation for this entity. `nil` if this entity doesn't use graphics variations.
     */
    graphics_variation?: number

    /**
     * This entity's equipment grid, if any.
     */
    readonly grid?: LuaEquipmentGrid

    /**
     * The current health of the entity, if any. Health is automatically clamped to be between `0` and max health (inclusive). Entities with a health of `0` can not be attacked.
     * @remarks
     * To get the maximum possible health of this entity, see {@link LuaEntityPrototype::max_health | LuaEntityPrototype::max_health} on its prototype.
     *
     */
    health?: number

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
    readonly held_stack_position: MapPosition

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
     * Count of initial resource units contained. `nil` if this is not an infinite resource.
     * @remarks
     * If this is not an infinite resource, writing will produce an error.
     * Applies to subclasses: ResourceEntity
     *
     */
    initial_amount?: number

    /**
     * The filter mode for this filter inserter. Either `"whitelist"` or `"blacklist"`. `nil` if this inserter doesn't use filters.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    inserter_filter_mode?: string

    /**
     * Sets the stack size limit on this inserter. If the stack size is > than the force stack size limit the value is ignored.
     * @remarks
     * Set to 0 to reset.
     *
     */
    inserter_stack_size_override: number

    /**
     * Returns the current target pickup count of the inserter.
     * @remarks
     * This considers the circuit network, manual override and the inserter stack size limit based on technology.
     *
     */
    readonly inserter_target_pickup_count: number

    /**
     * (deprecated by 1.1.51) If this entity is a MilitaryTarget. Returns same value as LuaEntity::is_military_target
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
     * Whether this entity is a MilitaryTarget. Can be written to if {@link LuaEntityPrototype::allow_run_time_change_of_is_military_target | LuaEntityPrototype::allow_run_time_change_of_is_military_target} returns `true`.
     */
    is_military_target: boolean

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
     * The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. `nil` if the last user is not part of the save anymore.
     * 
     * Reading this property will return a {@link LuaPlayer | LuaPlayer}, while {@link PlayerIdentification | PlayerIdentification} can be used when writing.
     * @remarks
     * Applies to subclasses: EntityWithOwner
     *
     */
    last_user?: LuaPlayer | PlayerIdentification

    /**
     * The link ID this linked container is using.
     */
    link_id: number

    /**
     * Neighbour to which this linked belt is connected to, if any.
     * @remarks
     * Can also be used on entity ghost if it contains linked-belt
     * May return entity ghost which contains linked belt to which connection is made
     * Applies to subclasses: LinkedBelt
     *
     */
    readonly linked_belt_neighbour?: LuaEntity

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
     * The container entity this loader is pointing at/pulling from depending on the {@link LuaEntity::loader_type | LuaEntity::loader_type}, if any.
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly loader_container?: LuaEntity

    /**
     * Whether this loader gets items from or puts item into a container.
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    loader_type: 'input' | 'output'

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
     * The logistic network this entity is a part of, or `nil` if this entity is not a part of any logistic network.
     */
    logistic_network?: LuaLogisticNetwork

    /**
     * @remarks
     * Not minable entities can still be destroyed.
     * Entities that are not minable naturally (like smoke, character, enemy units etc) can't be set to minable.
     *
     */
    minable: boolean

    /**
     * The mining progress for this mining drill. Is a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    mining_progress?: number

    /**
     * The mining target, if any.
     * @remarks
     * Applies to subclasses: MiningDrill
     *
     */
    readonly mining_target?: LuaEntity

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
     * A list of neighbours for certain types of entities. Applies to electric poles, power switches, underground belts, walls, gates, reactors, cliffs, and pipe-connectable entities.
     * 
     * - When called on an electric pole, this is a dictionary of all connections, indexed by the strings `"copper"`, `"red"`, and `"green"`.
     * - When called on a pipe-connectable entity, this is an array of entity arrays of all entities a given fluidbox is connected to.
     * - When called on an underground transport belt, this is the other end of the underground belt connection, or `nil` if none.
     * - When called on a wall-connectable entity or reactor, this is a dictionary of all connections indexed by the connection direction "north", "south", "east", and "west".
     * - When called on a cliff entity, this is a dictionary of all connections indexed by the connection direction "north", "south", "east", and "west".
     */
    readonly neighbours?: {[key: string]: LuaEntity[]} | Array<LuaEntity[]> | LuaEntity

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * Player can't open gui of this entity and he can't quick insert/input stuff in to the entity when it is not operable.
     */
    operable: boolean

    /**
     * The smooth orientation of this entity.
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
    pickup_position: MapPosition

    /**
     * The entity this inserter will attempt to pick up items from. If there are multiple possible entities at the pick-up point, writing to this attribute allows a mod to choose which one to pick up items from. The entity needs to collide with the tile box under the pick-up position. `nil` if there is no entity to pull items from.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    pickup_target?: LuaEntity

    /**
     * The player connected to this character, if any.
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly player?: LuaPlayer

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
     * The previous recipe this furnace was using, if any.
     * @remarks
     * Applies to subclasses: Furnace
     *
     */
    readonly previous_recipe?: LuaRecipe

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
     * The target entity for this item-request-proxy, if any.
     */
    readonly proxy_target?: LuaEntity

    /**
     * The rail target of this pump, if any.
     * @remarks
     * Applies to subclasses: Pump
     *
     */
    readonly pump_rail_target?: LuaEntity

    /**
     * The current radar scan progress, as a number in range [0, 1].
     * @remarks
     * Applies to subclasses: Radar
     *
     */
    readonly radar_scan_progress: number

    /**
     * When locked; the recipe in this assembling machine can't be changed by the player.
     * @remarks
     * Applies to subclasses: AssemblingMachine
     *
     */
    recipe_locked: boolean

    /**
     * The relative orientation of the vehicle turret, artillery turret, artillery wagon. `nil` if this entity isn't a vehicle with a vehicle turret or artillery turret/wagon.
     * @remarks
     * Writing does nothing if the vehicle doesn't have a turret.
     *
     */
    relative_turret_orientation?: RealOrientation

    /**
     * Whether items not included in this infinity container filters should be removed from the container.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     */
    remove_unfiltered_items: boolean

    /**
     * The player that this `simple-entity-with-owner`, `simple-entity-with-force`, `flying-text`, or `highlight-box` is visible to. `nil` when this entity is rendered for all players.
     * 
     * Reading this property will return a {@link LuaPlayer | LuaPlayer}, while {@link PlayerIdentification | PlayerIdentification} can be used when writing.
     */
    render_player?: LuaPlayer | PlayerIdentification

    /**
     * The forces that this `simple-entity-with-owner`, `simple-entity-with-force`, or `flying-text` is visible to. `nil` or an empty array when this entity is rendered for all forces.
     * @remarks
     * Reading will always give an array of {@link LuaForce | LuaForce}
     *
     */
    render_to_forces?: ForceIdentification[]

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
     * The status of this rocket silo entity.
     */
    readonly rocket_silo_status: defines.rocket_silo_status

    /**
     * When entity is not to be rotatable (inserter, transport belt etc), it can't be rotated by player using the R key.
     * @remarks
     * Entities that are not rotatable naturally (like chest or furnace) can't be set to be rotatable.
     *
     */
    rotatable: boolean

    /**
     * The secondary bounding box of this entity or `nil` if it doesn't have one. This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_bounding_box?: BoundingBox

    /**
     * The secondary selection box of this entity or `nil` if it doesn't have one. This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_selection_box?: BoundingBox

    /**
     * Index of the currently selected weapon slot of this character, car, or spidertron. `nil` if this entity doesn't have guns.
     * @remarks
     * Applies to subclasses: Character,Car,SpiderVehicle
     *
     */
    selected_gun_index?: number

    /**
     * {@link LuaEntityPrototype::selection_box | LuaEntityPrototype::selection_box} around entity's given position and respecting the current entity orientation.
     */
    readonly selection_box: BoundingBox

    /**
     * The shooting target for this turret, if any. Can't be set to `nil` via script.
     */
    shooting_target?: LuaEntity

    /**
     * The state of this rail signal.
     * @remarks
     * Applies to subclasses: RailSignal,RailChainSignal
     *
     */
    readonly signal_state: defines.signal_state

    /**
     * The spawner associated with this unit entity, if any.
     */
    readonly spawner?: LuaEntity

    /**
     * The current speed if this is a car, rolling stock, projectile or spidertron, or the maximum speed if this is a unit. The speed is in tiles per tick. `nil` if this is not a car, rolling stock, unit, projectile or spidertron.
     * 
     * Only the speed of units, cars, and projectiles are writable.
     */
    speed?: number

    /**
     * The speed bonus of this entity.
     * @remarks
     * This includes force based bonuses as well as beacon/module bonuses.
     *
     */
    readonly speed_bonus: number

    /**
     * The filter for this splitter, if any is set.
     * @remarks
     * Applies to subclasses: Splitter
     *
     */
    splitter_filter?: LuaItemPrototype

    /**
     * The input priority for this splitter. Either `"left"`, `"none"`, or `"right"`.
     * @remarks
     * Applies to subclasses: Splitter
     *
     */
    splitter_input_priority: string

    /**
     * The output priority for this splitter. Either `"left"`, `"none"`, or `"right"`.
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
     * The status of this entity, if any.
     */
    readonly status?: defines.entity_status

    /**
     * The entity this sticker is sticked to.
     */
    readonly sticked_to: LuaEntity

    /**
     * The sticker entities attached to this entity, if any.
     */
    readonly stickers?: LuaEntity[]

    /**
     * The storage filter for this logistic storage container.
     */
    storage_filter?: LuaItemPrototype

    /**
     * Whether the entity has direction. When it is false for this entity, it will always return north direction when asked for.
     */
    readonly supports_direction: boolean

    /**
     * The tags associated with this entity ghost. `nil` if this is not an entity ghost.
     */
    tags?: Tags

    /**
     * The temperature of this entity's heat energy source. `nil` if this entity does not use a heat energy source.
     */
    temperature?: number

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
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension). Uses the current direction of the entity.
     */
    readonly tile_height: number

    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension). Uses the current direction of the entity.
     */
    readonly tile_width: number

    /**
     * The ticks left before a ghost, combat robot, highlight box or smoke with trigger is destroyed.
     * 
     * - for ghosts set to uint32 max (4'294'967'295) to never expire.
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
     * The train this rolling stock belongs to, if any. `nil` if this is not a rolling stock.
     */
    readonly train?: LuaTrain

    /**
     * Amount of trains related to this particular train stop. Includes train stopped at this train stop (until it finds a path to next target) and trains having this train stop as goal or waypoint.
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
     * Amount of trains above which no new trains will be sent to this train stop. Writing nil will disable the limit (will set a maximum possible value).
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
     * The unit group this unit is a member of, if any.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly unit_group?: LuaUnitGroup

    /**
     * A unique number identifying this entity for the lifetime of the save. These are allocated sequentially, and not re-used (until overflow).
     * 
     * Only entities inheriting from {@link EntityWithOwner | https://wiki.factorio.com/Prototype/EntityWithOwner}, as well as {@link ItemRequestProxy | https://wiki.factorio.com/Prototype/ItemRequestProxy} and {@link EntityGhost | https://wiki.factorio.com/Prototype/EntityGhost} are assigned a unit number. Returns `nil` otherwise.
     */
    readonly unit_number?: number

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
        index: defines.inventory): void

    /**
     * Test whether this entity prototype has a certain flag set.
     * @param flag - The flag to test. See [EntityPrototypeFlags](EntityPrototypeFlags) for a list of flags.
     */
    has_flag(this: void,
        flag: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * The active energy usage of this rocket silo or combinator prototype.
     * @remarks
     * Applies to subclasses: RocketSilo,Combinator
     *
     */
    readonly active_energy_usage?: number

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
    readonly adjacent_tile_collision_box?: BoundingBox

    /**
     * Tiles adjacent to the offshore pump must not collide with this collision mask.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly adjacent_tile_collision_mask?: CollisionMask

    /**
     * If this mask is not empty, tiles adjacent to the offshore pump must not collide with this collision mask.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly adjacent_tile_collision_test?: CollisionMask

    /**
     * Whether this unit prototype is affected by tile walking speed modifiers.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly affected_by_tiles?: boolean

    /**
     * The air resistance of this rolling stock prototype.
     * @remarks
     * Applies to subclasses: RollingStock
     *
     */
    readonly air_resistance?: number

    /**
     * The alert icon scale of this entity prototype.
     */
    readonly alert_icon_scale: number

    /**
     * The alert icon shift of this entity prototype.
     */
    readonly alert_icon_shift: Vector

    /**
     * Whether this turret raises an alert when attacking
     * @remarks
     * Applies to subclasses: Turret
     *
     */
    readonly alert_when_attacking?: boolean

    /**
     * Whether this entity raises an alert when damaged.
     * @remarks
     * Applies to subclasses: EntityWithHealth
     *
     */
    readonly alert_when_damaged?: boolean

    /**
     * Whether this market allows access to all forces or just friendly ones.
     * @remarks
     * Applies to subclasses: Market
     *
     */
    readonly allow_access_to_all_forces?: boolean

    /**
     * Whether this inserter allows burner leeching.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly allow_burner_leech?: boolean

    /**
     * When false copy-paste is not allowed for this entity.
     */
    readonly allow_copy_paste: boolean

    /**
     * Whether this inserter allows custom pickup and drop vectors.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly allow_custom_vectors?: boolean

    /**
     * Whether this vehicle allows passengers.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    readonly allow_passengers?: boolean

    /**
     * True if this entity-with-owner's is_military_target can be changed run-time (on the entity, not on the prototype itself)
     * @remarks
     * Applies to subclasses: EntityWithOwner
     *
     */
    readonly allow_run_time_change_of_is_military_target?: boolean

    /**
     * The allowed module effects for this entity, if any.
     */
    readonly allowed_effects?: {[key: string]: boolean}

    /**
     * Whether the lamp is always on (except when out of power or turned off by the circuit network).
     * @remarks
     * Applies to subclasses: Lamp
     *
     */
    readonly always_on?: boolean

    /**
     * Name of the ammo category of this land mine.
     * @remarks
     * Applies to subclasses: LandMine
     *
     */
    readonly ammo_category?: string

    /**
     * The animation speed coefficient of this belt connectable prototype.
     * @remarks
     * Applies to subclasses: BeltConnectable
     *
     */
    readonly animation_speed_coefficient?: number

    /**
     * The attack parameters for this entity, if any.
     */
    readonly attack_parameters?: AttackParameters

    /**
     * The attack result of this entity, if any.
     */
    readonly attack_result?: TriggerItem[]

    /**
     * The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret.
     * @remarks
     * Applies to subclasses: ArtilleryTurret,AmmoTurret
     *
     */
    readonly automated_ammo_count?: number

    /**
     * Whether this spider vehicle prototype automatically cycles weapons.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly automatic_weapon_cycling?: boolean

    /**
     * Autoplace specification for this entity prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification

    /**
     * The base productivity of this crafting machine, lab, or mining drill.
     * @remarks
     * Applies to subclasses: CraftingMachine,Lab,MiningDrill
     *
     */
    readonly base_productivity?: number

    /**
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly belt_distance?: number

    /**
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly belt_length?: number

    /**
     * The speed of this transport belt.
     * @remarks
     * Applies to subclasses: TransportBeltConnectable
     *
     */
    readonly belt_speed?: number

    /**
     * The braking force of this vehicle prototype.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    readonly braking_force?: number

    /**
     * The evolution requirement to build this entity as a base when expanding enemy bases.
     */
    readonly build_base_evolution_requirement: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly build_distance?: number

    /**
     * The log2 of grid size of the building
     */
    readonly building_grid_bit_shift: number

    /**
     * The burner energy source prototype this entity uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype

    /**
     * Whether this generator prototype burns fluid.
     * @remarks
     * Applies to subclasses: Generator
     *
     */
    readonly burns_fluid?: boolean

    /**
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly call_for_help_radius?: number

    /**
     * Whether this unit prototype can open gates.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly can_open_gates?: boolean

    /**
     * The collision mask used only for collision test with tile directly at offshore pump position.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly center_collision_mask?: CollisionMask

    /**
     * The chain shooting cooldown modifier of this spider vehicle prototype.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly chain_shooting_cooldown_modifier?: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly character_corpse?: LuaEntityPrototype

    /**
     * The chunk exploration radius of this spider vehicle prototype.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly chunk_exploration_radius?: number

    /**
     * The item prototype name used to destroy this cliff.
     * @remarks
     * Applies to subclasses: Cliff
     *
     */
    readonly cliff_explosive_prototype?: string

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
     * The color of the prototype, if any.
     */
    readonly color?: Color

    /**
     * The construction radius for this roboport prototype.
     * @remarks
     * Applies to subclasses: Roboport
     *
     */
    readonly construction_radius?: number

    /**
     * The energy consumption of this car prototype.
     * @remarks
     * Applies to subclasses: Car
     *
     */
    readonly consumption?: number

    /**
     * @remarks
     * Applies to subclasses: Loader
     *
     */
    readonly container_distance?: number

    /**
     * Corpses used when this entity is destroyed. It is a dictionary indexed by the corpse's prototype name.
     * @remarks
     * Applies to subclasses: EntityWithHealth
     *
     */
    readonly corpses?: {[key: string]: LuaEntityPrototype}

    /**
     * If this simple-entity is counted as a rock for the deconstruction planner "trees and rocks only" filter.
     * @remarks
     * Applies to subclasses: SimpleEntity
     *
     */
    readonly count_as_rock_for_filtered_deconstruction?: boolean

    /**
     * The crafting categories this entity prototype supports.
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     * Applies to subclasses: CraftingMachine Character
     *
     */
    readonly crafting_categories?: {[key: string]: boolean}

    /**
     * The crafting speed..
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    readonly crafting_speed?: number

    /**
     * If this prototype will attempt to create a ghost of itself on death.
     * @remarks
     * If this is false then a ghost will never be made, if it's true a ghost may be made.
     *
     */
    readonly create_ghost_on_death: boolean

    /**
     * The trigger to run when this entity is created, if any.
     */
    readonly created_effect?: TriggerItem[]

    /**
     * The smoke trigger run when this entity is built, if any.
     */
    readonly created_smoke?: {
        initial_height: number,
        max_radius?: number,
        offset_deviation: BoundingBox,
        offsets: Vector[],
        smoke_name: string,
        speed: Vector,
        speed_from_center: number,
        speed_from_center_deviation: number,
        speed_multiplier: number,
        speed_multiplier_deviation: number,
        starting_frame: number,
        starting_frame_deviation: number,
        starting_frame_speed: number,
        starting_frame_speed_deviation: number
    }

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly damage_hit_tint?: Color

    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are off.
     * @remarks
     * Applies to subclasses: Lamp
     *
     */
    readonly darkness_for_all_lamps_off?: number

    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are on.
     * @remarks
     * Applies to subclasses: Lamp
     *
     */
    readonly darkness_for_all_lamps_on?: number

    /**
     * The hardcoded default collision mask (with flags) for this entity prototype type.
     */
    readonly default_collision_mask_with_flags: CollisionMaskWithFlags

    /**
     * Whether this generator prototype destroys non-fuel fluids.
     * @remarks
     * Applies to subclasses: Generator
     *
     */
    readonly destroy_non_fuel_fluid?: boolean

    /**
     * The distraction cooldown of this unit prototype.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly distraction_cooldown?: number

    /**
     * The distribution effectivity for this beacon prototype.
     * @remarks
     * Applies to subclasses: Beacon
     *
     */
    readonly distribution_effectivity?: number

    /**
     * The door opening speed for this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly door_opening_speed?: number

    /**
     * Whether this logistics or construction robot renders its cargo when flying.
     * @remarks
     * Applies to subclasses: RobotWithLogisticsInterface
     *
     */
    readonly draw_cargo?: boolean

    /**
     * The bounding box used for drawing the entity icon.
     */
    readonly drawing_box: BoundingBox

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly drop_item_distance?: number

    /**
     * The dying time of this corpse prototype.
     * @remarks
     * Applies to subclasses: Corpse
     *
     */
    readonly dying_speed?: number

    /**
     * The effectivity of this car prototype, generator prototype.
     * @remarks
     * Applies to subclasses: Car,Generator
     *
     */
    readonly effectivity?: number

    /**
     * The electric energy source prototype this entity uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype

    /**
     * Amount of pollution emissions per second this entity will create.
     */
    readonly emissions_per_second: number

    /**
     * The enemy map color used when charting this entity.
     */
    readonly enemy_map_color: Color

    /**
     * The energy used per hitpoint taken for this vehicle during collisions.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    readonly energy_per_hit_point?: number

    /**
     * The energy consumed per tile moved for this flying robot.
     * @remarks
     * Applies to subclasses: FlyingRobot
     *
     */
    readonly energy_per_move?: number

    /**
     * The energy consumed per tick for this flying robot.
     * @remarks
     * Applies to subclasses: FlyingRobot
     *
     */
    readonly energy_per_tick?: number

    /**
     * The direct energy usage of this entity, if any.
     */
    readonly energy_usage?: number

    /**
     * The engine starting speed for this rocket silo rocket prototype.
     * @remarks
     * Applies to subclasses: RocketSiloRocket
     *
     */
    readonly engine_starting_speed?: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly enter_vehicle_distance?: number

    /**
     * Whether this explosion has a beam.
     * @remarks
     * Applies to subclasses: Explosion
     *
     */
    readonly explosion_beam?: number

    /**
     * Whether this explosion rotates.
     * @remarks
     * Applies to subclasses: Explosion
     *
     */
    readonly explosion_rotate?: number

    /**
     * The group of mutually fast-replaceable entities, if any.
     */
    readonly fast_replaceable_group?: string

    /**
     * The filter count of this inserter, loader, or logistic chest. For logistic containers, `nil` means no limit.
     * @remarks
     * Applies to subclasses: Inserter,Loader,LogisticContainer
     *
     */
    readonly filter_count?: number

    /**
     * The final attack result for this projectile.
     * @remarks
     * Applies to subclasses: Projectile
     *
     */
    readonly final_attack_result?: TriggerItem[]

    /**
     * The fixed recipe name for this assembling machine prototype, if any.
     * @remarks
     * Applies to subclasses: AssemblingMachine
     *
     */
    readonly fixed_recipe?: string

    /**
     * The flags for this entity prototype.
     */
    readonly flags: EntityPrototypeFlags

    /**
     * The fluid this offshore pump produces.
     * @remarks
     * Applies to subclasses: OffshorePump
     *
     */
    readonly fluid?: LuaFluidPrototype

    /**
     * The fluid capacity of this entity or 0 if this entity doesn't support fluids.
     * @remarks
     * Crafting machines will report 0 due to their fluid capacity being whatever a given recipe needs.
     *
     */
    readonly fluid_capacity: number

    /**
     * The fluid energy source prototype this entity uses, if any.
     */
    readonly fluid_energy_source_prototype?: LuaFluidEnergySourcePrototype

    /**
     * The fluid usage of this generator prototype.
     * @remarks
     * Applies to subclasses: Generator
     *
     */
    readonly fluid_usage_per_tick?: number

    /**
     * The fluidbox prototypes for this entity.
     */
    readonly fluidbox_prototypes: LuaFluidBoxPrototype[]

    /**
     * The flying acceleration for this rocket silo rocket prototype.
     * @remarks
     * Applies to subclasses: RocketSiloRocket
     *
     */
    readonly flying_acceleration?: number

    /**
     * The flying speed for this rocket silo rocket prototype.
     * @remarks
     * Applies to subclasses: RocketSiloRocket
     *
     */
    readonly flying_speed?: number

    /**
     * The friction of this vehicle prototype.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    readonly friction_force?: number

    /**
     * The friendly map color used when charting this entity.
     */
    readonly friendly_map_color: Color

    /**
     * The equipment grid prototype for this entity, if any.
     */
    readonly grid_prototype?: LuaEquipmentGridPrototype

    /**
     * Group of this entity.
     */
    readonly group: LuaGroup

    /**
     * A mapping of the gun name to the gun prototype this prototype uses. `nil` if this entity prototype doesn't use guns.
     */
    readonly guns?: {[key: string]: LuaItemPrototype}

    /**
     * Whether this unit, car, or character prototype has belt immunity.
     * @remarks
     * Applies to subclasses: Unit,Car,Character
     *
     */
    readonly has_belt_immunity?: boolean

    /**
     * Amount this entity can heal per tick, if any.
     */
    readonly healing_per_tick?: number

    /**
     * The heat buffer prototype this entity uses, if any.
     */
    readonly heat_buffer_prototype?: LuaHeatBufferPrototype

    /**
     * The heat energy source prototype this entity uses, if any.
     */
    readonly heat_energy_source_prototype?: LuaHeatEnergySourcePrototype

    /**
     * The height of this spider vehicle prototype.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly height?: number

    /**
     * The idle energy usage of this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly idle_energy_usage?: number

    /**
     * A vector of the gun prototypes of this car, spider vehicle, artillery wagon, or turret.
     * @remarks
     * Applies to subclasses: Car,SpiderVehicle,ArtilleryTurret,ArtilleryWagon
     *
     */
    readonly indexed_guns?: LuaItemPrototype[]

    /**
     * Every time this infinite resource 'ticks' down, it is reduced by this amount. Meaningless if this isn't an infinite resource.
     * @remarks
     * Applies to subclasses: ResourceEntity
     *
     */
    readonly infinite_depletion_resource_amount?: number

    /**
     * Whether this resource is infinite.
     * @remarks
     * Applies to subclasses: ResourceEntity
     *
     */
    readonly infinite_resource?: boolean

    /**
     * The max number of ingredients this crafting machine prototype supports.
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     */
    readonly ingredient_count?: number

    /**
     * True if this inserter chases items on belts for pickup.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly inserter_chases_belt_items?: boolean

    /**
     * The drop position for this inserter.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly inserter_drop_position?: Vector

    /**
     * The extension speed of this inserter.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly inserter_extension_speed?: number

    /**
     * The pickup position for this inserter.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly inserter_pickup_position?: Vector

    /**
     * The rotation speed of this inserter.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly inserter_rotation_speed?: number

    /**
     * The built-in stack size bonus of this inserter prototype.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly inserter_stack_size_bonus?: number

    /**
     * The instruments for this programmable speaker.
     * @remarks
     * Applies to subclasses: ProgrammableSpeaker
     *
     */
    readonly instruments?: ProgrammableSpeakerInstrument[]

    /**
     * Everything in the following list is considered a building.
     * 
     * - AccumulatorPrototype
     * - ArtilleryTurretPrototype
     * - BeaconPrototype
     * - BoilerPrototype
     * - BurnerGeneratorPrototype
     * - CombinatorPrototype → ArithmeticCombinator, DeciderCombinator
     * - ConstantCombinatorPrototype
     * - ContainerPrototype → LogisticContainer, InfinityContainer
     * - CraftingMachinePrototype → AssemblingMachine, RocketSilo, Furnace
     * - ElectricEnergyInterfacePrototype
     * - ElectricPolePrototype
     * - EnemySpawnerPrototype
     * - GatePrototype
     * - GeneratorPrototype
     * - HeatInterfacePrototype
     * - HeatPipePrototype
     * - InserterPrototype
     * - LabPrototype
     * - LampPrototype
     * - LinkedContainerPrototype
     * - MarketPrototype
     * - MiningDrillPrototype
     * - OffshorePumpPrototype
     * - PipePrototype → InfinityPipe
     * - PipeToGroundPrototype
     * - PlayerPortPrototype
     * - PowerSwitchPrototype
     * - ProgrammableSpeakerPrototype
     * - PumpPrototype
     * - RadarPrototype
     * - RailPrototype → CurvedRail, StraightRail
     * - RailSignalBasePrototype → RailChainSignal, RailSignal
     * - ReactorPrototype
     * - RoboportPrototype
     * - SimpleEntityPrototype
     * - SimpleEntityWithOwnerPrototype → SimpleEntityWithForce
     * - SolarPanelPrototype
     * - StorageTankPrototype
     * - TrainStopPrototype
     * - TransportBeltConnectablePrototype → LinkedBelt, Loader1x1, Loader1x2, Splitter, TransportBelt, UndergroundBelt
     * - TurretPrototype → AmmoTurret, ElectricTurret, FluidTurret
     * - WallPrototype
     */
    readonly is_building: boolean

    /**
     * True if this is entity-with-owner
     */
    readonly is_entity_with_owner: boolean

    /**
     * True if this entity-with-owner is military target
     * @remarks
     * Applies to subclasses: EntityWithOwner
     *
     */
    readonly is_military_target?: boolean

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly item_pickup_distance?: number

    /**
     * The item slot count of this constant combinator prototype.
     * @remarks
     * Applies to subclasses: ConstantCombinator
     *
     */
    readonly item_slot_count?: number

    /**
     * Items that when placed will produce this entity, if any. Construction bots will choose the first item in the list to build this entity.
     */
    readonly items_to_place_this?: ItemStackDefinition[]

    /**
     * The item prototype names that are the inputs of this lab prototype.
     * @remarks
     * Applies to subclasses: Lab
     *
     */
    readonly lab_inputs?: string[]

    /**
     * The lamp energy usage of this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly lamp_energy_usage?: number

    /**
     * The rocket launch delay for this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly launch_wait_time?: number

    /**
     * The light blinking speed for this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly light_blinking_speed?: number

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * The logistic mode of this logistic container. One of `"requester"`, `"active-provider"`, `"passive-provider"`, `"buffer"`, `"storage"`, `"none"`.
     * @remarks
     * Applies to subclasses: LogisticContainer
     *
     */
    readonly logistic_mode?: string

    /**
     * The logistic parameters for this roboport.
     * @remarks
     * Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys instead of an array.
     * Applies to subclasses: Roboport
     *
     */
    readonly logistic_parameters?: {
        charge_approach_distance: number,
        charging_distance: number,
        charging_energy: number,
        charging_station_count: number,
        charging_station_shift: Vector,
        charging_threshold_distance: number,
        construction_radius: number,
        logistic_radius: number,
        logistics_connection_distance: number,
        robot_limit: number,
        robot_vertical_acceleration: number,
        robots_shrink_when_entering_and_exiting: boolean,
        spawn_and_station_height: number,
        spawn_and_station_shadow_height_offset: number,
        stationing_offset: Vector
    }

    /**
     * The logistic radius for this roboport prototype.
     * @remarks
     * Applies to subclasses: Roboport
     *
     */
    readonly logistic_radius?: number

    /**
     * Loot that will be dropped when this entity is killed, if any.
     * @remarks
     * Applies to subclasses: EntityWithHealth
     *
     */
    readonly loot?: Loot[]

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly loot_pickup_distance?: number

    /**
     * The manual range modifier for this artillery turret or wagon prototype.
     * 
     * subclass(ArtilleryWagon, ArtilleryTurret)
     */
    readonly manual_range_modifier?: number

    /**
     * The map color used when charting this entity if a friendly or enemy color isn't defined, if any.
     */
    readonly map_color?: Color

    /**
     * The bounding box used for map generator collision checking.
     */
    readonly map_generator_bounding_box: BoundingBox

    /**
     * The maximum circuit wire distance for this entity. 0 if the entity doesn't support circuit wires.
     */
    readonly max_circuit_wire_distance: number

    /**
     * Count of enemies this spawner can sustain.
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly max_count_of_owned_units?: number

    /**
     * The maximum darkness at which this unit spawner can spawn entities.
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly max_darkness_to_spawn?: number

    /**
     * The radius of the area constantly revealed by this radar, in chunks.
     * @remarks
     * Applies to subclasses: Radar
     *
     */
    readonly max_distance_of_nearby_sector_revealed?: number

    /**
     * The radius of the area this radar can chart, in chunks.
     * @remarks
     * Applies to subclasses: Radar
     *
     */
    readonly max_distance_of_sector_revealed?: number

    /**
     * The max energy for this flying robot.
     * @remarks
     * Applies to subclasses: FlyingRobot
     *
     */
    readonly max_energy?: number

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
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly max_friends_around_to_spawn?: number

    /**
     * Max health of this entity. Will be `0` if this is not an entity with health.
     */
    readonly max_health: number

    /**
     * The max payload size of this logistics or construction robot.
     * @remarks
     * Applies to subclasses: RobotWithLogisticsInterface
     *
     */
    readonly max_payload_size?: number

    /**
     * The maximum polyphony for this programmable speaker.
     * @remarks
     * Applies to subclasses: ProgrammableSpeaker
     *
     */
    readonly max_polyphony?: number

    /**
     * The default maximum power output of this generator prototype.
     * @remarks
     * Applies to subclasses: BurnerGenerator,Generator
     *
     */
    readonly max_power_output?: number

    /**
     * The maximum pursue distance of this unit prototype.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly max_pursue_distance?: number

    /**
     * The max speed of this projectile or flying robot prototype.
     * @remarks
     * Applies to subclasses: Projectile,FlyingRobot
     *
     */
    readonly max_speed?: number

    /**
     * The maximum energy for this flying robot above which it won't try to recharge when stationing.
     * @remarks
     * Applies to subclasses: FlyingRobot
     *
     */
    readonly max_to_charge?: number

    /**
     * The max underground distance for underground belts and underground pipes.
     * @remarks
     * Applies to subclasses: UndergroundBelt,PipeToGround
     *
     */
    readonly max_underground_distance?: number

    /**
     * The maximum wire distance for this entity. 0 if the entity doesn't support wires.
     */
    readonly max_wire_distance: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly maximum_corner_sliding_distance?: number

    /**
     * The maximum fluid temperature of this generator prototype.
     * @remarks
     * Applies to subclasses: Generator
     *
     */
    readonly maximum_temperature?: number

    /**
     * The minimum darkness at which this unit spawner can spawn entities.
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly min_darkness_to_spawn?: number

    /**
     * The minimum pursue time of this unit prototype.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly min_pursue_time?: number

    /**
     * The minimum energy for this flying robot before it tries to recharge.
     * @remarks
     * Applies to subclasses: FlyingRobot
     *
     */
    readonly min_to_charge?: number

    /**
     * Whether this entity is minable and what can be obtained by mining it.
     */
    readonly mineable_properties: {
        
        /**
         * The required fluid amount if any.
         */
        fluid_amount?: number,
        
        /**
         * Is this entity mineable at all?
         */
        minable: boolean,
        
        /**
         * Prototype name of the particle produced when mining this entity. Will only be present if this entity produces any particle during mining.
         */
        mining_particle?: string,
        
        /**
         * Energy required to mine an entity.
         */
        mining_time: number,
        
        /**
         * The mining trigger if any.
         */
        mining_trigger?: TriggerItem[],
        
        /**
         * Products obtained by mining this entity.
         */
        products?: Product[],
        
        /**
         * The prototype name of the required fluid if any.
         */
        required_fluid?: string
    }

    /**
     * Minimum amount of this resource.
     * @remarks
     * Applies to subclasses: ResourceEntity
     *
     */
    readonly minimum_resource_amount?: number

    /**
     * The mining radius of this mining drill prototype.
     * @remarks
     * Applies to subclasses: MiningDrill
     *
     */
    readonly mining_drill_radius?: number

    /**
     * The mining speed of this mining drill/character prototype.
     * @remarks
     * Applies to subclasses: MiningDrill,Character
     *
     */
    readonly mining_speed?: number

    /**
     * The module inventory size. `nil` if this entity doesn't support modules.
     */
    readonly module_inventory_size?: number

    /**
     * Whether this unit prototype can move while shooting.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly move_while_shooting?: boolean

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * @remarks
     * Applies to subclasses: Reactor
     *
     */
    readonly neighbour_bonus?: number

    /**
     * The next upgrade for this entity, if any.
     */
    readonly next_upgrade?: LuaEntityPrototype

    /**
     * The normal amount for this resource.
     * @remarks
     * Applies to subclasses: ResourceEntity
     *
     */
    readonly normal_resource_amount?: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly pollution_to_join_attack?: number

    /**
     * True if this entity prototype should be included during tile collision checks with {@link LuaTilePrototype::check_collision_with_entities | LuaTilePrototype::check_collision_with_entities} enabled.
     */
    readonly protected_from_tile_building: boolean

    /**
     * The pumping speed of this offshore or normal pump.
     * @remarks
     * Applies to subclasses: OffshorePump,Pump
     *
     */
    readonly pumping_speed?: number

    /**
     * The radar range of this unit prototype.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly radar_range?: number

    /**
     * The radius of this entity prototype.
     */
    readonly radius: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly reach_distance?: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly reach_resource_distance?: number

    /**
     * @remarks
     * Applies to subclasses: TransportBelt
     *
     */
    readonly related_underground_belt?: LuaEntityPrototype

    /**
     * The remains left behind when this entity is mined.
     */
    readonly remains_when_mined: LuaEntityPrototype[]

    readonly remove_decoratives: string

    /**
     * Repair-speed modifier for this entity, if any. Actual repair speed will be `tool_repair_speed * entity_repair_speed_modifier`.
     * @remarks
     * Applies to subclasses: EntityWithHealth
     *
     */
    readonly repair_speed_modifier?: number

    /**
     * The base researching speed of this lab prototype.
     * @remarks
     * Applies to subclasses: Lab
     *
     */
    readonly researching_speed?: number

    /**
     * List of resistances towards each damage type. It is a dictionary indexed by damage type names (see `data/base/prototypes/damage-type.lua`).
     * @remarks
     * Applies to subclasses: EntityWithHealth
     *
     */
    readonly resistances?: {[key: string]: Resistance}

    /**
     * The resource categories this character or mining drill supports.
     * @remarks
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     * Applies to subclasses: MiningDrill,Character
     *
     */
    readonly resource_categories?: {[key: string]: boolean}

    /**
     * Name of the category of this resource.
     * @remarks
     * During data stage, this property is named "category".
     * Applies to subclasses: ResourceEntity
     *
     */
    readonly resource_category?: string

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly respawn_time?: number

    /**
     * The result units and spawn points with weight and evolution factor for a biter spawner entity.
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly result_units?: UnitSpawnDefinition[]

    /**
     * The rising speed for this rocket silo rocket prototype.
     * @remarks
     * Applies to subclasses: RocketSiloRocket
     *
     */
    readonly rising_speed?: number

    /**
     * The rocket entity prototype associated with this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly rocket_entity_prototype?: LuaEntityPrototype

    /**
     * The rocket parts required for this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly rocket_parts_required?: number

    /**
     * The rocket rising delay for this rocket silo prototype.
     * @remarks
     * Applies to subclasses: RocketSilo
     *
     */
    readonly rocket_rising_delay?: number

    /**
     * The rotation speed of this car prototype.
     * @remarks
     * Applies to subclasses: Car
     *
     */
    readonly rotation_speed?: number

    /**
     * The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly running_speed?: number

    /**
     * Whether this generator prototype scales fluid usage.
     * @remarks
     * Applies to subclasses: Generator
     *
     */
    readonly scale_fluid_usage?: boolean

    /**
     * The secondary bounding box used for collision checking, if any. This is only used in rails and rail remnants.
     */
    readonly secondary_collision_box?: BoundingBox

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
     * The spawning cooldown for this enemy spawner prototype.
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly spawn_cooldown?: {
        max: number,
        min: number
    }

    /**
     * How far from the spawner can the units be spawned.
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly spawning_radius?: number

    /**
     * What spaces should be between the spawned units.
     * @remarks
     * Applies to subclasses: Spawner
     *
     */
    readonly spawning_spacing?: number

    /**
     * The spawning time modifier of this unit prototype.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly spawning_time_modifier?: number

    /**
     * The default speed of this flying robot, rolling stock or unit. For rolling stocks, this is their `max_speed`.
     * @remarks
     * Applies to subclasses: FlyingRobot,RollingStock,Unit
     *
     */
    readonly speed?: number

    /**
     * The speed multiplier when this flying robot is out of energy.
     * @remarks
     * Applies to subclasses: FlyingRobot
     *
     */
    readonly speed_multiplier_when_out_of_energy?: number

    /**
     * Whether this inserter is a stack-type.
     * @remarks
     * Applies to subclasses: Inserter
     *
     */
    readonly stack?: boolean

    /**
     * The bounding box used to attach sticker type entities.
     */
    readonly sticker_box: BoundingBox

    /**
     * Subgroup of this entity.
     */
    readonly subgroup: LuaGroup

    /**
     * The supply area of this electric pole or beacon prototype.
     * @remarks
     * Applies to subclasses: ElectricPole,Beacon
     *
     */
    readonly supply_area_distance?: number

    /**
     * Whether this entity prototype could possibly ever be rotated.
     */
    readonly supports_direction: boolean

    /**
     * If this car prototype uses tank controls to drive.
     * @remarks
     * Applies to subclasses: Car
     *
     */
    readonly tank_driving?: boolean

    /**
     * The target temperature of this boiler prototype.
     * @remarks
     * Applies to subclasses: Boiler
     *
     */
    readonly target_temperature?: number

    /**
     * The terrain friction modifier for this vehicle.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    readonly terrain_friction_modifier?: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly ticks_to_keep_aiming_direction?: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly ticks_to_keep_gun?: number

    /**
     * @remarks
     * Applies to subclasses: Character
     *
     */
    readonly ticks_to_stay_in_combat?: number

    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_height: number

    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_width: number

    /**
     * The time to live for this prototype or `0` if prototype doesn't have time_to_live or time_before_removed.
     */
    readonly time_to_live: number

    /**
     * The time it takes this land mine to arm.
     * @remarks
     * Applies to subclasses: LandMine
     *
     */
    readonly timeout?: number

    /**
     * The torso bob speed of this spider vehicle prototype.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly torso_bob_speed?: number

    /**
     * The torso rotation speed of this spider vehicle prototype.
     * @remarks
     * Applies to subclasses: SpiderVehicle
     *
     */
    readonly torso_rotation_speed?: number

    /**
     * If it is a tree, return the number of colors it supports.
     * @remarks
     * Applies to subclasses: Tree
     *
     */
    readonly tree_color_count?: number

    /**
     * The collision mask entities must collide with to make this landmine blow up.
     * @remarks
     * Applies to subclasses: LandMine
     *
     */
    readonly trigger_collision_mask?: CollisionMaskWithFlags

    /**
     * The range of this turret.
     * @remarks
     * Applies to subclasses: Turret
     *
     */
    readonly turret_range?: number

    /**
     * The turret rotation speed of this car prototype.
     * @remarks
     * Applies to subclasses: Car
     *
     */
    readonly turret_rotation_speed?: number

    /**
     * Type of this prototype.
     */
    readonly type: string

    /**
     * Whether this logistic container prototype uses exact mode
     * @remarks
     * Applies to subclasses: LogisticContainer
     *
     */
    readonly use_exact_mode?: boolean

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The vision distance of this unit prototype.
     * @remarks
     * Applies to subclasses: Unit
     *
     */
    readonly vision_distance?: number

    /**
     * The void energy source prototype this entity uses, if any.
     */
    readonly void_energy_source_prototype?: LuaVoidEnergySourcePrototype

    /**
     * The weight of this vehicle prototype.
     * @remarks
     * Applies to subclasses: Vehicle
     *
     */
    readonly weight?: number

}

/**
 * An item in a {@link LuaEquipmentGrid | LuaEquipmentGrid}, for example a fusion reactor placed in one's power armor.
 * 
 * An equipment reference becomes invalid once the equipment is removed or the equipment grid it resides in is destroyed.
 */
interface LuaEquipment {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * The burner energy source for this equipment, if any.
     */
    readonly burner?: LuaBurner

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
    readonly position: EquipmentPosition

    readonly prototype: LuaEquipmentPrototype

    /**
     * Shape of this equipment.
     */
    readonly shape: {
        height: number,
        width: number
    }

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
            position: EquipmentPosition
        }): void

    /**
     * Clear all equipment from the grid, removing it without actually returning it.
     * @param by_player - If provided, the action is done 'as' this player and [on_player_removed_equipment](on_player_removed_equipment) is triggered.
     */
    clear(this: void,
        by_player?: PlayerIdentification): void

    /**
     * Get the number of all or some equipment in this grid.
     * @param equipment - Prototype name of the equipment to count. If not specified, count all equipment.
     */
    count(this: void,
        equipment?: string): void

    /**
     * Find equipment by name.
     * @param equipment - Prototype name of the equipment to find.
     */
    find(this: void,
        equipment: string): void

    /**
     * Find equipment in the Equipment Grid based off a position.
     * @param position - The position
     */
    get(this: void,
        position: EquipmentPosition): void

    /**
     * Get counts of all equipment in this grid.
     */
    get_contents(this: void): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Move an equipment within this grid.
     * @param table.equipment - The equipment to move
     * @param table.position - Where to put it
     */
    move(this: void,
        table: {
            equipment: LuaEquipment,
            position: EquipmentPosition
        }): void

    /**
     * Insert an equipment into the grid.
     * @param table.by_player - If provided the action is done 'as' this player and [on_player_placed_equipment](on_player_placed_equipment) is triggered.
     * @param table.name - Equipment prototype name
     * @param table.position - Grid position to put the equipment in.
     */
    put(this: void,
        table: {
            name: string,
            position?: EquipmentPosition,
            by_player?: PlayerIdentification
        }): void

    /**
     * Remove an equipment from the grid.
     * @param table.by_player - If provided the action is done 'as' this player and [on_player_removed_equipment](on_player_removed_equipment) is triggered.
     * @param table.equipment - Take this exact equipment.
     * @param table.position - Take the equipment that contains this position in the grid.
     */
    take(this: void,
        table: {
            position?: EquipmentPosition,
            equipment?: LuaEquipment,
            by_player?: PlayerIdentification
        }): void

    /**
     * Remove all equipment from the grid.
     * @param by_player - If provided, the action is done 'as' this player and [on_player_removed_equipment](on_player_removed_equipment) is triggered.
     */
    take_all(this: void,
        by_player?: PlayerIdentification): void

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
     * Whether this grid's equipment movement bonus is active.
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
     * Unique identifier of this equipment grid.
     */
    readonly unique_id: number

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
    help(this: void): void

    /**
     * Equipment category names for the {@link categories | LuaEquipmentPrototype::equipment_categories} that may be inserted into this equipment grid. The grid will accept any equipment that has at least one category in this list.
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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

    /**
     * The equipment attack parameters.
     * @remarks
     * Applies to subclasses: ActiveDefenseEquipment
     *
     */
    readonly attack_parameters?: AttackParameters

    /**
     * Whether this active defense equipment is automatic. Returns false if not active defense equipment.
     */
    readonly automatic: boolean

    /**
     * The background color of this equipment prototype.
     */
    readonly background_color: Color

    /**
     * The burner energy source prototype this equipment uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype

    /**
     * The electric energy source prototype this equipment uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype

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
     * Category names for this equipment. These {@link categories | LuaEquipmentGridPrototype::equipment_categories} will be used to determine whether this equipment is allowed in a particular equipment grid.
     */
    readonly equipment_categories: string[]

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * The logistic parameters for this roboport equipment.
     * @remarks
     * Both the `charging_station_shift` and `stationing_offset` vectors are tables with `x` and `y` keys instead of an array.
     * Applies to subclasses: RoboportEquipment
     *
     */
    readonly logistic_parameters?: {
        charge_approach_distance: number,
        charging_distance: number,
        charging_energy: number,
        charging_station_count: number,
        charging_station_shift: Vector,
        charging_threshold_distance: number,
        construction_radius: number,
        logistic_radius: number,
        logistics_connection_distance: number,
        robot_limit: number,
        robot_vertical_acceleration: number,
        robots_shrink_when_entering_and_exiting: boolean,
        spawn_and_station_height: number,
        spawn_and_station_shadow_height_offset: number,
        stationing_offset: Vector
    }

    /**
     * @remarks
     * Applies to subclasses: MovementBonusEquipment
     *
     */
    readonly movement_bonus?: number

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * Shape of this equipment prototype.
     */
    readonly shape: {
        height: number,
        
        /**
         * Only set when the shape is "manual"
         */
        points?: EquipmentPoint[],
        width: number
    }

    /**
     * The shield value of this equipment. 0 for non-shield equipment.
     */
    readonly shield: number

    /**
     * The result item when taking this equipment out of an equipment grid, if any.
     */
    readonly take_result?: LuaItemPrototype

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
 * 
 * Examples:
 * - The item production GUI shows "consumption" on the right, thus `output` describes the item consumption numbers. The same goes for fluid consumption.
 * - The kills GUI shows "losses" on the right, so `output` describes how many of the force's entities were killed by enemies.
 * - The electric network GUI shows "power consumption" on the left side, so in this case `input` describes the power consumption numbers.
 */
interface LuaFlowStatistics {
    /**
     * Reset all the statistics data to 0.
     */
    clear(this: void): void

    /**
     * Gets the flow count value for the given time frame. If `sample_index` is not provided, then the value returned is the average across the provided precision time period. These are the values shown in the bottom section of the statistics GUIs.
     * 
     * Use `sample_index` to access the data used to generate the statistics graphs. Each precision level contains 300 samples of data so at a precision of 1 minute, each sample contains data averaged across 60s / 300 = 0.2s = 12 ticks.
     * 
     * All return values are normalized to be per-tick for electric networks and per-minute for all other types.
     * @param table.count - If true, the count of items/fluids/entities is returned instead of the per-time-frame value.
     * @param table.input - Read the input values or the output values
     * @param table.name - The prototype name.
     * @param table.precision_index - The precision range to read.
     * @param table.sample_index - The sample index to read from within the precision range. If not provided, the entire precision range is read. Must be between 1 and 300 where 1 is the most recent sample and 300 is the oldest.
     */
    get_flow_count(this: void,
        table: {
            name: string,
            input: boolean,
            precision_index: defines.flow_precision_index,
            sample_index?: number,
            count?: boolean
        }): void

    /**
     * Gets the total input count for a given prototype.
     * @param name - The prototype name.
     */
    get_input_count(this: void,
        name: string): void

    /**
     * Gets the total output count for a given prototype.
     * @param name - The prototype name.
     */
    get_output_count(this: void,
        name: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

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
     * The force these statistics belong to. `nil` for pollution statistics.
     */
    readonly force?: LuaForce

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
 * An array of fluid boxes of an entity. Entities may contain more than one fluid box, and some can change the number of fluid boxes -- for instance, an assembling machine will change its number of fluid boxes depending on its active recipe. See {@link Fluid | Fluid}.
 * 
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
     */
    flush(this: void,
        index: number,
        fluid?: FluidIdentification): void

    /**
     * The capacity of the given fluidbox index.
     */
    get_capacity(this: void,
        index: number): void

    /**
     * The fluidboxes to which the fluidbox at the given index is connected.
     */
    get_connections(this: void,
        index: number): void

    /**
     * Get a fluid box filter
     * @param index - The index of the filter to get.
     */
    get_filter(this: void,
        index: number): void

    /**
     * Flow through the fluidbox in the last tick. It is the larger of in-flow and out-flow.
     * @remarks
     * Fluid wagons do not track it and will return 0.
     *
     */
    get_flow(this: void,
        index: number): void

    /**
     * Gets counts of all fluids in the fluid system. May return `nil` for fluid wagon, fluid turret's internal buffer, or a fluidbox which does not belong to a fluid system.
     */
    get_fluid_system_contents(this: void,
        index: number): void

    /**
     * Gets unique fluid system identifier of selected fluid box. May return nil for fluid wagon, fluid turret's internal buffer or a fluidbox which does not belong to a fluid system
     */
    get_fluid_system_id(this: void,
        index: number): void

    /**
     * Returns the fluid the fluidbox is locked onto
     */
    get_locked_fluid(this: void,
        index: number): void

    /**
     * Get the fluid box's connections and associated data.
     */
    get_pipe_connections(this: void,
        index: number): void

    /**
     * The prototype of this fluidbox index. If this is used on a fluidbox of a crafting machine which due to recipe was created by merging multiple prototypes, a table of prototypes that were merged will be returned instead
     */
    get_prototype(this: void,
        index: number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Set a fluid box filter.
     * @remarks
     * Some entities cannot have their fluidbox filter set, notably fluid wagons and crafting machines.
     *
     * @param filter - The filter to set. Setting `nil` clears the filter.
     * @param index - The index of the filter to set.
     */
    set_filter(this: void,
        index: number,
        filter: FluidBoxFilterSpec | null): void

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
     * Access, set or clear a fluid box. The index must always be in bounds (see {@link LuaFluidBox::length_operator | LuaFluidBox::length_operator}). New fluidboxes may not be added or removed using this operator.
     * 
     * Is `nil` if the given fluid box does not contain any fluid. Writing `nil` removes all fluid from the fluid box.
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
    help(this: void): void

    readonly base_area: number

    readonly base_level: number

    /**
     * The entity that this belongs to.
     */
    readonly entity: LuaEntityPrototype

    /**
     * The filter, if any is set.
     */
    readonly filter?: LuaFluidPrototype

    readonly height: number

    /**
     * The index of this fluidbox prototype in the owning entity.
     */
    readonly index: number

    /**
     * The maximum temperature, if any is set.
     */
    readonly maximum_temperature?: number

    /**
     * The minimum temperature, if any is set.
     */
    readonly minimum_temperature?: number

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
    help(this: void): void

    readonly burns_fluid: boolean

    readonly destroy_non_fuel_fluid: boolean

    readonly effectivity: number

    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
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
     * The smoke sources for this prototype, if any.
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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

    readonly border: boolean

    /**
     * The border color, if any.
     */
    readonly border_color?: Color

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
        tag: ChartTagSpec): void

    /**
     * Add this technology to the back of the research queue if the queue is enabled. Otherwise, set this technology to be researched now.
     */
    add_research(this: void,
        technology: TechnologyIdentification): void

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
        area?: BoundingBox): void

    /**
     * @param position - Position to find a network for
     * @param surface - Surface to search on
     */
    find_logistic_network_by_position(this: void,
        position: MapPosition,
        surface: SurfaceIdentification): void

    /**
     * @param ammo - Ammo category
     */
    get_ammo_damage_modifier(this: void,
        ammo: string): void

    /**
     * Is `other` force in this force's cease fire list?
     */
    get_cease_fire(this: void,
        other: ForceIdentification): void

    /**
     * Count entities of given type.
     * @remarks
     * This function has O(1) time complexity as entity counts are kept and maintained in the game engine.
     *
     * @param name - Prototype name of the entity.
     */
    get_entity_count(this: void,
        name: string): void

    /**
     * Is `other` force in this force's friends list.
     */
    get_friend(this: void,
        other: ForceIdentification): void

    /**
     * @param ammo - Ammo category
     */
    get_gun_speed_modifier(this: void,
        ammo: string): void

    /**
     * Gets if the given recipe is explicitly disabled from being hand crafted.
     */
    get_hand_crafting_disabled_for_recipe(this: void,
        recipe: string | LuaRecipe): void

    /**
     * Gets the count of a given item launched in rockets.
     * @param item - The item to get
     */
    get_item_launched(this: void,
        item: string): void

    /**
     * Gets the linked inventory for the given prototype and link ID if it exists or `nil`.
     */
    get_linked_inventory(this: void,
        prototype: EntityPrototypeIdentification,
        link_id: number): void

    /**
     * Gets the saved progress for the given technology or `nil` if there is no saved progress.
     * @param technology - The technology
     */
    get_saved_technology_progress(this: void,
        technology: TechnologyIdentification): void

    get_spawn_position(this: void,
        surface: SurfaceIdentification): void

    /**
     * Gets train stops matching the given filters.
     * @param table.name - The name(s) of the train stops. Not providing names will match any stop.
     * @param table.surface - The surface to search. Not providing a surface will match stops on any surface.
     */
    get_train_stops(this: void,
        table?: {
            name?: string | string[],
            surface?: SurfaceIdentification
        }): void

    /**
     * @param surface - The surface to search. Not providing a surface will match trains on any surface.
     */
    get_trains(this: void,
        surface?: SurfaceIdentification): void

    /**
     * @param turret - Turret prototype name
     */
    get_turret_attack_modifier(this: void,
        turret: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Has a chunk been charted?
     * @param position - Position of the chunk.
     */
    is_chunk_charted(this: void,
        surface: SurfaceIdentification,
        position: ChunkPosition): void

    /**
     * Is the given chunk currently charted and visible (not covered by fog of war) on the map.
     */
    is_chunk_visible(this: void,
        surface: SurfaceIdentification,
        position: ChunkPosition): void

    /**
     * Is this force an enemy? This differs from `get_cease_fire` in that it is always false for neutral force. This is equivalent to checking the `enemy` ForceCondition.
     */
    is_enemy(this: void,
        other: ForceIdentification): void

    /**
     * Is this force a friend? This differs from `get_friend` in that it is always true for neutral force. This is equivalent to checking the `friend` ForceCondition.
     */
    is_friend(this: void,
        other: ForceIdentification): void

    /**
     * Is pathfinder busy? When the pathfinder is busy, it won't accept any more pathfinding requests.
     */
    is_pathfinder_busy(this: void): void

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
            position?: MapPosition,
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
     * @param surface - Which surface to rechart or all if not given.
     */
    rechart(this: void,
        surface?: SurfaceIdentification): void

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
        position: MapPosition,
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
     * Effective color of this force.
     */
    readonly color: Color

    /**
     * The connected players belonging to this force.
     * 
     * This is primarily useful when you want to do some action against all online players of this force.
     * @remarks
     * This does *not* index using player index. See {@link LuaPlayer::index | LuaPlayer::index} on each player instance for the player index.
     *
     */
    readonly connected_players: LuaPlayer[]

    /**
     * The currently ongoing technology research, if any.
     */
    readonly current_research?: LuaTechnology

    /**
     * Custom color for this force. If specified, will take priority over other sources of the force color. Writing nil clears custom color. Will return nil if it was not specified or if was set to {0,0,0,0}
     */
    custom_color?: Color

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
     * This force's index in {@link LuaGameScript::forces | LuaGameScript::forces} (unique ID). It is assigned when a force is created, and remains so until it is {@link merged | on_forces_merged} (ie. deleted). Indexes of merged forces can be reused.
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
     * All of the items that have been launched in rockets. The attribute is a dictionary mapping the item prototype names to the launched amounts.
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
     * The previous research, if any.
     */
    previous_research?: LuaTechnology

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
     * 
     * To write to this, the entire table must be written. Providing an empty table or `nil` will empty the research queue and cancel the current research. Writing to this when the research queue is disabled will simply set the last research in the table as the current research.
     * @remarks
     * This only allows mods to queue research that this force is able to research in the first place. As an example, an already researched technology or one whose prerequisites are not fulfilled will not be queued, but dropped silently instead.
     *
     */
    research_queue?: TechnologyIdentification[]

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
     */
    create_force(this: void,
        force: string): void

    /**
     * Creates an inventory that is not owned by any game object. It can be resized later with {@link LuaInventory::resize | LuaInventory::resize}.
     * @remarks
     * Make sure to destroy it when you are done with it using {@link LuaInventory::destroy | LuaInventory::destroy}.
     *
     * @param size - The number of slots the inventory initially has.
     */
    create_inventory(this: void,
        size: number): void

    /**
     * Creates a {@link LuaProfiler | LuaProfiler}, which is used for measuring script performance.
     * @remarks
     * LuaProfiler cannot be serialized.
     *
     * @param stopped - Create the timer stopped
     */
    create_profiler(this: void,
        stopped?: boolean): void

    /**
     * Creates a deterministic standalone random generator with the given seed or if a seed is not provided the initial map seed is used.
     * @remarks
     * *Make sure* you actually want to use this over math.random(...) as this provides entirely different functionality over math.random(...).
     *
     */
    create_random_generator(this: void,
        seed?: number): void

    /**
     * Create a new surface.
     * @remarks
     * The game currently supports a maximum of 4'294'967'295 surfaces, including the default surface.
     * Surface names must be unique.
     *
     * @param name - Name of the new surface.
     * @param settings - Map generation settings.
     */
    create_surface(this: void,
        name: string,
        settings?: MapGenSettings): void

    /**
     * Base64 decodes and inflates the given string.
     * @param string - The string to decode.
     */
    decode_string(this: void,
        string: string): void

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
     */
    encode_string(this: void,
        string: string): void

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
        variables?: {[key: string]: number}): void

    /**
     * Force a CRC check. Tells all peers to calculate their current CRC, which are then compared to each other. If a mismatch is detected, the game desyncs and some peers are forced to reconnect.
     */
    force_crc(this: void): void

    /**
     * Gets the number of entities that are active (updated each tick).
     * @remarks
     * This is very expensive to determine.
     *
     * @param surface - If given, only the entities active on this surface are counted.
     */
    get_active_entities_count(this: void,
        surface?: SurfaceIdentification): void

    get_entity_by_tag(this: void,
        tag: string): void

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
        filters: AchievementPrototypeFilter[]): void

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
        filters: DecorativePrototypeFilter[]): void

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
        filters: EntityPrototypeFilter[]): void

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
        filters: EquipmentPrototypeFilter[]): void

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
        filters: FluidPrototypeFilter[]): void

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
        filters: ItemPrototypeFilter[]): void

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
        filters: ModSettingPrototypeFilter[]): void

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
        filters: RecipePrototypeFilter[]): void

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
        filters: TechnologyPrototypeFilter[]): void

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
        filters: TilePrototypeFilter[]): void

    /**
     * Gets the map exchange string for the map generation settings that were used to create this map.
     */
    get_map_exchange_string(this: void): void

    /**
     * Gets the given player or returns `nil` if no player is found.
     * @param player - The player index or name.
     */
    get_player(this: void,
        player: number | string): void

    /**
     * Gets the inventories created through {@link LuaGameScript::create_inventory | LuaGameScript::create_inventory}
     * @remarks
     * Inventories created through console commands will be owned by `"core"`.
     *
     * @param mod - The mod who's inventories to get. If not provided all inventories are returned.
     */
    get_script_inventories(this: void,
        mod?: string): void

    /**
     * Gets the given surface or returns `nil` if no surface is found.
     * @remarks
     * This is a shortcut for game.surfaces[...]
     *
     * @param surface - The surface index or name.
     */
    get_surface(this: void,
        surface: number | string): void

    /**
     * Gets train stops matching the given filters.
     * @param table.force - The force to search. Not providing a force will match stops in any force.
     * @param table.name - The name(s) of the train stops. Not providing names will match any stop.
     * @param table.surface - The surface to search. Not providing a surface will match stops on any surface.
     */
    get_train_stops(this: void,
        table?: {
            name?: string | string[],
            surface?: SurfaceIdentification,
            force?: ForceIdentification
        }): void

    /**
     * Is this the demo version of Factorio?
     */
    is_demo(this: void): void

    /**
     * Whether the save is loaded as a multiplayer map.
     */
    is_multiplayer(this: void): void

    /**
     * Checks if the given SoundPath is valid.
     * @param sound_path - Path to the sound.
     */
    is_valid_sound_path(this: void,
        sound_path: SoundPath): void

    /**
     * Checks if the given SpritePath is valid and contains a loaded sprite. The existence of the image is not checked for paths of type `file`.
     * @param sprite_path - Path to the image.
     */
    is_valid_sprite_path(this: void,
        sprite_path: SpritePath): void

    /**
     * Convert a JSON string to a table.
     * @param json - The string to convert.
     */
    json_to_table(this: void,
        json: string): void

    /**
     * Kicks the given player from this multiplayer game. Does nothing if this is a single player game or if the player running this isn't an admin.
     * @param player - The player to kick.
     * @param reason - The reason given if any.
     */
    kick_player(this: void,
        player: PlayerIdentification,
        reason?: LocalisedString): void

    /**
     * Marks two forces to be merged together. All players and entities in the source force will be reassigned to the target force. The source force will then be destroyed. Importantly, this does not merge technologies or bonuses, which are instead retained from the target force.
     * @remarks
     * The three built-in forces (player, enemy and neutral) can't be destroyed, meaning they can't be used as the source argument to this function.
     * The source force is not removed until the end of the current tick, or if called during the {@link on_forces_merging | on_forces_merging} or {@link on_forces_merged | on_forces_merged} event, the end of the next tick.
     *
     * @param destination - The force to reassign all entities to.
     * @param source - The force to remove.
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
        map_exchange_string: string): void

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
            position?: MapPosition,
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
     * Remove a file or directory in the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. Can be used to remove files created by {@link LuaGameScript::write_file | LuaGameScript::write_file}.
     * @param path - The path to the file or directory to remove, relative to `script-output`.
     */
    remove_path(this: void,
        path: string): void

    /**
     * Reset scenario state (game_finished, player_won, etc.).
     */
    reset_game_state(this: void): void

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
     * Set scenario state. Any parameters not provided do not change the current state.
     */
    set_game_state(this: void,
        table: {
            game_finished?: boolean,
            player_won?: boolean,
            next_level?: string,
            can_continue?: boolean,
            victorious_force?: ForceIdentification
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
        data: Table): void

    /**
     * Take a screenshot of the game and save it to the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. The name of the image file can be specified via the `path` parameter.
     * @remarks
     * If Factorio is running headless, this function will do nothing.
     *
     * @param table.allow_in_replay - Whether to save the screenshot even during replay playback. Defaults to `false`.
     * @param table.anti_alias - Whether to render in double resolution and downscale the result (including GUI). Defaults to `false`.
     * @param table.by_player - If defined, the screenshot will only be taken for this player.
     * @param table.daytime - Overrides the current surface daytime for the duration of screenshot rendering.
     * @param table.force_render - Screenshot requests are processed in between game update and render. The game may skip rendering (ie. drop frames) if the previous frame has not finished rendering or the game simulation starts to fall below 60 updates per second. If `force_render` is set to `true`, the game won't drop frames and process the screenshot request at the end of the update in which the request was created. This is not honored on multiplayer clients that are catching up to server. Defaults to `false`.
     * @param table.path - The name of the image file. It should include a file extension indicating the desired format. Supports `.png`, `.jpg` /`.jpeg`, `.tga` and `.bmp`. Providing a directory path (ex. `"save/here/screenshot.png"`) will create the necessary folder structure in `script-output`. Defaults to `"screenshot.png"`.
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
            position?: MapPosition,
            resolution?: TilePosition,
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
     * Take a screenshot of the technology screen and save it to the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. The name of the image file can be specified via the `path` parameter.
     * @param table.by_player - If given, the screenshot will only be taken for this player.
     * @param table.force - The force whose technology to screenshot. If not given, the `"player`" force is used.
     * @param table.path - The name of the image file. It should include a file extension indicating the desired format. Supports `.png`, `.jpg` /`.jpeg`, `.tga` and `.bmp`. Providing a directory path (ex. `"save/here/screenshot.png"`) will create the necessary folder structure in `script-output`. Defaults to `"technology-screenshot.png"`.
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
     * Write a file to the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. The name and file extension of the file can be specified via the `filename` parameter.
     * @param append - If `true`, `data` will be appended to the end of the file. Defaults to `false`, which will overwrite any pre-existing file with the new `data`.
     * @param data - The content to write to the file.
     * @param filename - The name of the file. Providing a directory path (ex. `"save/here/example.txt"`) will create the necessary folder structure in `script-output`.
     * @param for_player - If given, the file will only be written for this `player_index`. Providing `0` will only write to the server's output if present.
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
     * 
     * This is primarily useful when you want to do some action against all online players.
     * @remarks
     * This does *not* index using player index. See {@link LuaPlayer::index | LuaPlayer::index} on each player instance for the player index.
     *
     */
    readonly connected_players: LuaPlayer[]

    /**
     * Whether a console command has been used.
     */
    readonly console_command_used: boolean

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
     * True while the victory screen is shown.
     */
    readonly finished: boolean

    /**
     * True after players finished the game and clicked "continue".
     */
    readonly finished_but_continuing: boolean

    /**
     * A dictionary containing every LuaFluidPrototype indexed by `name`.
     */
    readonly fluid_prototypes: {[key: string]: LuaFluidPrototype}

    /**
     * A dictionary containing every LuaFontPrototype indexed by `name`.
     */
    readonly font_prototypes: {[key: string]: LuaFontPrototype}

    /**
     * Get a table of all the forces that currently exist. This sparse table allows you to find forces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the hash part of the table. Iterating with `ipairs()` will not work at all.
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
     * This property is only populated inside {@link custom command | LuaCommandProcessor} handlers and when writing {@link Lua console commands | https://wiki.factorio.com/Console#Scripting_and_cheat_commands}. Returns the player that is typing the command, `nil` in all other instances.
     * 
     * See {@link LuaGameScript::players | LuaGameScript::players} for accessing all players.
     */
    readonly player?: LuaPlayer

    /**
     * Get a table of all the players that currently exist. This sparse table allows you to find players by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the array part of the table. Iterating with `ipairs()` will not work at all.
     * 
     * If only a single player is required, {@link LuaGameScript::get_player | LuaGameScript::get_player} should be used instead, as it avoids the unnecessary overhead of passing the whole table to Lua.
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
     * Get a table of all the surfaces that currently exist. This sparse table allows you to find surfaces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will only iterate the hash part of the table. Iterating with `ipairs()` will not work at all.
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
     * The number of ticks since this game was created using either "new game" or "new game from scenario". Notably, this number progresses even when the game is {@link tick_paused | LuaGameScript::tick_paused}.
     * 
     * This differs from {@link LuaGameScript::tick | LuaGameScript::tick} in that creating a game from a scenario always starts with this value at `0`, even if the scenario has its own level data where the `tick` has progressed past `0`.
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
    help(this: void): void

    /**
     * The circuit condition. Writing `nil` clears the circuit condition.
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
     * The logistic condition. Writing `nil` clears the logistic condition.
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
    help(this: void): void

    /**
     * The parent group, if any.
     */
    readonly group?: LuaGroup

    /**
     * Localised name of the group.
     */
    readonly localised_name?: LocalisedString

    readonly name?: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * The additional order value used in recipe ordering. Can only be used on groups, not on subgroups.
     */
    readonly order_in_recipe?: string

    /**
     * Subgroups of this group. Can only be used on groups, not on subgroups.
     */
    readonly subgroups?: LuaGroup[]

    readonly type?: string

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
    help(this: void): void

    /**
     * Returns `true` if sprite_path is valid and contains loaded sprite, otherwise `false`. Sprite path of type `file` doesn't validate if file exists.
     * 
     * If you want to avoid needing a LuaGui object, {@link LuaGameScript::is_valid_sprite_path | LuaGameScript::is_valid_sprite_path} can be used instead.
     * @param sprite_path - Path to a image.
     */
    is_valid_sprite_path(this: void,
        sprite_path: SpritePath): void

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
 * 
 * The following types of GUI element are supported:
 * 
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
 * - `"radiobutton"`: An element that is similar to a `checkbox`, but with a circular appearance. Clicking a selected radio button will not unselect it. Radio buttons are not linked to each other in any way. Relevant event: {@link on_gui_checked_state_changed | on_gui_checked_state_changed}
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
 * 
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
     */
    add(this: void,
        table: LuaGuiElementAddParams): void

    /**
     * Inserts a string at the end or at the given index of this dropdown or listbox.
     * @remarks
     * Applies to subclasses: drop-down,list-box
     *
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
     * @remarks
     * Applies to subclasses: drop-down,list-box
     *
     */
    clear_items(this: void): void

    /**
     * Closes the dropdown list if this is a dropdown and it is open.
     */
    close_dropdown(this: void): void

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
    get_index_in_parent(this: void): void

    /**
     * Gets the item at the given index from this dropdown or listbox.
     * @remarks
     * Applies to subclasses: drop-down,list-box
     *
     * @param index - The index to get
     */
    get_item(this: void,
        index: number): void

    /**
     * The mod that owns this Gui element or `nil` if it's owned by the scenario script.
     * @remarks
     * This has a not-super-expensive, but non-free cost to get.
     *
     */
    get_mod(this: void): void

    /**
     * Returns whether this slider only allows being moved to discrete positions.
     */
    get_slider_discrete_slider(this: void): void

    /**
     * Returns whether this slider only allows discrete values.
     */
    get_slider_discrete_values(this: void): void

    /**
     * Gets this sliders maximum value.
     */
    get_slider_maximum(this: void): void

    /**
     * Gets this sliders minimum value.
     */
    get_slider_minimum(this: void): void

    /**
     * Gets the minimum distance this slider can move.
     */
    get_slider_value_step(this: void): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Removes the item at the given index from this dropdown or listbox.
     * @remarks
     * Applies to subclasses: drop-down,list-box
     *
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
     * @param scroll_mode - Where the item should be positioned in the list-box. Must be either `"in-view"` or `"top-third"`. Defaults to `"in-view"`.
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
     * @remarks
     * Applies to subclasses: drop-down,list-box
     *
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
     * The anchor for this relative widget, if any. Setting `nil` clears the anchor.
     */
    anchor?: GuiAnchor

    /**
     * Whether this frame auto-centers on window resize when stored in {@link LuaGui::screen | LuaGui::screen}.
     * @remarks
     * Applies to subclasses: frame
     *
     */
    auto_center: boolean

    /**
     * Whether this button will automatically toggle when clicked.
     * @remarks
     * Applies to subclasses: button,sprite-button
     *
     */
    auto_toggle: boolean

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
     * The sprite to display on this sprite-button when it is clicked.
     * @remarks
     * Applies to subclasses: sprite-button
     *
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
     * The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level.
     * @remarks
     * Only top-level elements in {@link LuaGui::screen | LuaGui::screen} can be `drag_target`s.
     * Applies to subclasses: flow,frame,label,table,empty-widget
     *
     * @example
     * This creates a frame that contains a dragging handle which can move the frame. 
     * ```
     * local frame = player.gui.screen.add{type="frame", direction="vertical"}
     * local dragger = frame.add{type="empty-widget", style="draggable_space"}
     * dragger.style.size = {128, 24}
     * dragger.drag_target = frame
     * ```
     *
     */
    drag_target?: LuaGuiElement

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
     * The elem filters of this choose-elem-button, if any. The compatible type of filter is determined by `elem_type`.
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
    elem_filters?: ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter

    /**
     * The elem type of this choose-elem-button.
     * @remarks
     * Applies to subclasses: choose-elem-button
     *
     */
    readonly elem_type: string

    /**
     * The elem value of this choose-elem-button, if any.
     * @remarks
     * The `"signal"` type operates with {@link SignalID | SignalID}, while all other types use strings.
     * Applies to subclasses: choose-elem-button
     *
     */
    elem_value?: string | SignalID

    /**
     * Whether this GUI element is enabled. Disabled GUI elements don't trigger events when clicked.
     */
    enabled: boolean

    /**
     * The entity associated with this entity-preview, camera, minimap, if any.
     * @remarks
     * Applies to subclasses: entity-preview,camera,minimap
     *
     */
    entity?: LuaEntity

    /**
     * The force this minimap is using, if any.
     * @remarks
     * Applies to subclasses: minimap
     *
     */
    force?: string

    /**
     * How this element should interact with game controllers.
     */
    game_controller_interaction: defines.game_controller_interaction

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
     * The sprite to display on this sprite-button when it is hovered.
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
     * @remarks
     * Applies to subclasses: drop-down,list-box
     *
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
     * The location of this widget when stored in {@link LuaGui::screen | LuaGui::screen}. `nil` if not set or not in {@link LuaGui::screen | LuaGui::screen}.
     */
    location?: GuiLocation

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
     * @remarks
     * Applies to subclasses: button,sprite-button
     *
     */
    mouse_button_filter: MouseButtonFlags

    /**
     * The name of this element. `""` if no name was set.
     * @example
     * ```
     * game.player.gui.top.greeting.name == "greeting"
     * ```
     *
     */
    name: string

    /**
     * The number to be shown in the bottom right corner of this sprite-button. Set this to `nil` to show nothing.
     * @remarks
     * Applies to subclasses: sprite-button
     *
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
     * The direct parent of this element. `nil` if this is a top-level element.
     */
    readonly parent?: LuaGuiElement

    /**
     * Index into {@link LuaGameScript::players | LuaGameScript::players} specifying the player who owns this element.
     */
    readonly player_index: number

    /**
     * The position this camera or minimap is focused on, if any.
     * @remarks
     * Applies to subclasses: camera,minimap
     *
     */
    position: MapPosition

    /**
     * Whether this element will raise {@link on_gui_hover | on_gui_hover} and {@link on_gui_leave | on_gui_leave}.
     */
    raise_hover_events: boolean

    /**
     * Whether this text-box is read-only. Defaults to `false`.
     * @remarks
     * Applies to subclasses: text-box
     *
     */
    read_only: boolean

    /**
     * Whether the sprite widget should resize according to the sprite in it. Defaults to `true`.
     * @remarks
     * Applies to subclasses: sprite
     *
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
     * @remarks
     * Applies to subclasses: drop-down,list-box
     *
     */
    selected_index: number

    /**
     * The selected tab index for this tabbed pane, if any.
     * @remarks
     * Applies to subclasses: tabbed-pane
     *
     */
    selected_tab_index?: number

    /**
     * Related to the number to be shown in the bottom right corner of this sprite-button. When set to `true`, numbers that are non-zero and smaller than one are shown as a percentage rather than the value. For example, `0.5` will be shown as `50%` instead.
     * @remarks
     * Applies to subclasses: sprite-button
     *
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
     * The sprite to display on this sprite-button or sprite in the default state.
     * @remarks
     * Applies to subclasses: sprite-button,sprite
     *
     */
    sprite: SpritePath

    /**
     * Is this checkbox or radiobutton checked?
     * @remarks
     * Applies to subclasses: checkbox,radiobutton
     *
     */
    state: boolean

    /**
     * The style of this element. When read, this evaluates to a {@link LuaStyle | LuaStyle}. For writing, it only accepts a string that specifies the textual identifier (prototype name) of the desired style.
     */
    style: LuaStyle | string

    /**
     * The surface index this camera or minimap is using.
     * @remarks
     * Applies to subclasses: camera,minimap
     *
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
     * @remarks
     * Applies to subclasses: tabbed-pane
     *
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

    /**
     * Whether this button is currently toggled. When a button is toggled, it will use the `selected_graphical_set` and `selected_font_color` defined in its style.
     * @remarks
     * Applies to subclasses: button,sprite-button
     *
     */
    toggled: boolean

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
     * The zoom this camera or minimap is using. This value must be positive.
     * @remarks
     * Applies to subclasses: camera,minimap
     *
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
 * Prototype of a heat buffer.
 */
interface LuaHeatBufferPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    readonly connections: HeatConnection[]

    readonly default_temperature: number

    readonly max_temperature: number

    readonly max_transfer: number

    readonly min_temperature_gradient: number

    readonly min_working_temperature: number

    readonly minimum_glow_temperature: number

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    readonly specific_heat: number

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

}

/**
 * Prototype of a heat energy source.
 */
interface LuaHeatEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    readonly connections: HeatConnection[]

    readonly default_temperature: number

    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions: number

    readonly heat_buffer_prototype: LuaHeatBufferPrototype

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
    help(this: void): void

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
     */
    can_insert(this: void,
        items: ItemStackIdentification): void

    /**
     * If the given inventory slot filter can be set to the given filter.
     * @param filter - The item name of the filter
     * @param index - The item stack index
     */
    can_set_filter(this: void,
        index: number,
        filter: string): void

    /**
     * Make this inventory empty.
     */
    clear(this: void): void

    /**
     * Counts the number of empty stacks.
     * @param include_bar - If true, slots blocked by the current bar will be included. Defaults to true.
     * @param include_filtered - If true, filtered slots will be included. Defaults to false.
     */
    count_empty_stacks(this: void,
        include_filtered?: boolean,
        include_bar?: boolean): void

    /**
     * Destroys this inventory.
     * @remarks
     * Only inventories created by {@link LuaGameScript::create_inventory | LuaGameScript::create_inventory} can be destroyed this way.
     *
     */
    destroy(this: void): void

    /**
     * Finds the first empty stack. Filtered slots are excluded unless a filter item is given.
     * @param item - If given, empty stacks that are filtered for this item will be included.
     */
    find_empty_stack(this: void,
        item?: string): void

    /**
     * Finds the first LuaItemStack in the inventory that matches the given item name.
     * @param item - The item name to find
     */
    find_item_stack(this: void,
        item: string): void

    /**
     * Get the current bar. This is the index at which the red area starts.
     * @remarks
     * Only useable if this inventory supports having a bar.
     *
     */
    get_bar(this: void): void

    /**
     * Get counts of all items in this inventory.
     */
    get_contents(this: void): void

    /**
     * Gets the filter for the given item stack index.
     * @param index - The item stack index
     */
    get_filter(this: void,
        index: number): void

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
        item?: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Insert items into this inventory.
     * @param items - Items to insert.
     */
    insert(this: void,
        items: ItemStackIdentification): void

    /**
     * Does this inventory contain nothing?
     */
    is_empty(this: void): void

    /**
     * If this inventory supports filters and has at least 1 filter set.
     */
    is_filtered(this: void): void

    /**
     * Is every stack in this inventory full? Ignores stacks blocked by the current bar.
     */
    is_full(this: void): void

    /**
     * Remove items from this inventory.
     * @param items - Items to remove.
     */
    remove(this: void,
        items: ItemStackIdentification): void

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
     * @param filter - The new filter. `nil` erases any existing filter.
     * @param index - The item stack index.
     */
    set_filter(this: void,
        index: number,
        filter: string | null): void

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
    supports_bar(this: void): void

    /**
     * If this inventory supports filters.
     */
    supports_filters(this: void): void

    /**
     * The entity that owns this inventory, if any.
     */
    readonly entity_owner?: LuaEntity

    /**
     * The equipment that owns this inventory, if any.
     */
    readonly equipment_owner?: LuaEquipment

    /**
     * The inventory index this inventory uses, if any.
     */
    readonly index?: defines.inventory

    /**
     * The mod that owns this inventory, if any.
     */
    readonly mod_owner?: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The player that owns this inventory, if any.
     */
    readonly player_owner?: LuaPlayer

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
     * The type of this ammo prototype.
     * @remarks
     * Applies to subclasses: AmmoItem
     *
     * @param ammo_source_type - One of `"default"`, `"player"`, `"turret"`, or `"vehicle"`. Defaults to `"default"`.
     */
    get_ammo_type(this: void,
        ammo_source_type?: string): void

    /**
     * Does this prototype have a flag enabled?
     * @param flag - The flag to check. Can be one of [ItemPrototypeFlags](ItemPrototypeFlags). Any other value will cause an error.
     */
    has_flag(this: void,
        flag: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * The alt entity filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_entity_filter_mode?: string

    /**
     * The alt entity filters used by this selection tool indexed by entity name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_entity_filters?: {[key: string]: LuaEntityPrototype}

    /**
     * The alt entity type filters used by this selection tool indexed by entity type.
     * @remarks
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_entity_type_filters?: {[key: string]: boolean}

    /**
     * The alt reverse entity filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_alt_entity_filter_mode?: string

    /**
     * The alt reverse entity filters used by this selection tool indexed by entity name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_entity_filters?: {[key: string]: LuaEntityPrototype}

    /**
     * The alt reverse entity type filters used by this selection tool indexed by entity type.
     * @remarks
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_entity_type_filters?: {[key: string]: boolean}

    /**
     * The color used when doing alt reverse selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_selection_border_color?: Color

    /**
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_selection_cursor_box_type?: string

    /**
     * Flags that affect which entities will be selected during alt reverse selection.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_selection_mode_flags?: SelectionModeFlags

    /**
     * The alt reverse tile filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_tile_filter_mode?: string

    /**
     * The alt reverse tile filters used by this selection tool indexed by tile name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_reverse_tile_filters?: {[key: string]: LuaTilePrototype}

    /**
     * The color used when doing alt selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_selection_border_color?: Color

    /**
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_selection_cursor_box_type?: string

    /**
     * Flags that affect which entities will be selected during alternate selection.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_selection_mode_flags?: SelectionModeFlags

    /**
     * The alt tile filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_tile_filter_mode?: string

    /**
     * The alt tile filters used by this selection tool indexed by tile name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly alt_tile_filters?: {[key: string]: LuaTilePrototype}

    /**
     * If tiles area always included when doing selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly always_include_tiles?: boolean

    /**
     * The gun attack parameters.
     * @remarks
     * Applies to subclasses: Gun
     *
     */
    readonly attack_parameters?: AttackParameters

    /**
     * The result of burning this item as fuel, if any.
     */
    readonly burnt_result?: LuaItemPrototype

    /**
     * If this item can be mod-opened.
     */
    readonly can_be_mod_opened: boolean

    /**
     * The capsule action for this capsule item prototype.
     * @remarks
     * Applies to subclasses: Capsule
     *
     */
    readonly capsule_action?: CapsuleAction

    /**
     * The name of a {@link LuaModuleCategoryPrototype | LuaModuleCategoryPrototype}. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly category?: string

    /**
     * The curved rail prototype used for this rail planner prototype.
     * @remarks
     * Applies to subclasses: RailPlanner
     *
     */
    readonly curved_rail?: LuaEntityPrototype

    /**
     * The default label color used for this item with label, if any.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    readonly default_label_color?: Color

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
    readonly draw_label_for_cursor_render?: boolean

    /**
     * The durability of this tool item.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     */
    readonly durability?: number

    /**
     * The durability message key used when displaying the durability of this tool.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     */
    readonly durability_description_key?: string

    /**
     * The entity filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly entity_filter_mode?: string

    /**
     * The number of entity filters this deconstruction item has.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    readonly entity_filter_slots?: number

    /**
     * The entity filters used by this selection tool indexed by entity name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly entity_filters?: {[key: string]: LuaEntityPrototype}

    /**
     * The entity type filters used by this selection tool indexed by entity type.
     * @remarks
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     * Applies to subclasses: SelectionTool
     *
     */
    readonly entity_type_filters?: {[key: string]: boolean}

    /**
     * The prototype of this armor equipment grid, if any.
     * @remarks
     * Applies to subclasses: Armor
     *
     */
    readonly equipment_grid?: LuaEquipmentGridPrototype

    /**
     * If this item with inventory extends the inventory it resides in by default.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly extend_inventory_by_default?: boolean

    /**
     * The filter mode used by this item with inventory.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly filter_mode?: string

    /**
     * The flags for this item prototype.
     */
    readonly flags: ItemPrototypeFlags

    /**
     * The acceleration multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_acceleration_multiplier: number

    /**
     * The fuel category of this item prototype, if any.
     */
    readonly fuel_category?: string

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
     * If this tool item has infinite durability.
     * @remarks
     * Applies to subclasses: ToolItem
     *
     */
    readonly infinite?: boolean

    /**
     * The insertion priority mode used by this item with inventory.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly insertion_priority_mode?: string

    /**
     * The main inventory size for item-with-inventory-prototype.
     * @remarks
     * Applies to subclasses: ItemWithInventoryPrototype
     *
     */
    readonly inventory_size?: number

    /**
     * The inventory size bonus for this armor prototype.
     * @remarks
     * Applies to subclasses: ArmorPrototype
     *
     */
    readonly inventory_size_bonus?: number

    /**
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly item_filters?: {[key: string]: LuaItemPrototype}

    /**
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly item_group_filters?: {[key: string]: LuaGroup}

    /**
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly item_subgroup_filters?: {[key: string]: LuaGroup}

    /**
     * The limitation message key used when the player attempts to use this modules in some place it's not allowed.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly limitation_message_key?: string

    /**
     * An array of recipe names this module is allowed to work with. Empty when all recipes are allowed.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly limitations?: string[]

    readonly localised_description: LocalisedString

    /**
     * The localised string used when the player attempts to put items into this item with inventory that aren't allowed.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    readonly localised_filter_message?: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * Size of full magazine.
     * @remarks
     * Applies to subclasses: AmmoItem
     *
     */
    readonly magazine_size?: number

    /**
     * How many filters an upgrade item has.
     * @remarks
     * Applies to subclasses: UpgradeItem
     *
     */
    readonly mapper_count?: number

    /**
     * Effects of this module.
     * @remarks
     * Applies to subclasses: ModuleItem
     *
     */
    readonly module_effects?: ModuleEffects

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * Prototype of the equipment that will be created by placing this item in an equipment grid, if any.
     */
    readonly place_as_equipment_result?: LuaEquipmentPrototype

    /**
     * The place-as-tile result if one is defined, if any.
     */
    readonly place_as_tile_result?: PlaceAsTileResult

    /**
     * Prototype of the entity that will be created by placing this item, if any.
     */
    readonly place_result?: LuaEntityPrototype

    /**
     * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine.
     * @remarks
     * Applies to subclasses: AmmoItem
     *
     */
    readonly reload_time?: number

    /**
     * The repair result of this repair tool prototype.
     * @remarks
     * Applies to subclasses: RepairTool
     *
     */
    readonly repair_result?: TriggerItem[]

    /**
     * Resistances of this armor item, if any, indexed by damage type name.
     * @remarks
     * Applies to subclasses: Armor
     *
     */
    readonly resistances?: {[key: string]: Resistance}

    /**
     * The reverse entity filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_alt_entity_filter_mode?: string

    /**
     * The reverse entity filters used by this selection tool indexed by entity name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_entity_filters?: {[key: string]: LuaEntityPrototype}

    /**
     * The reverse entity type filters used by this selection tool indexed by entity type.
     * @remarks
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_entity_type_filters?: {[key: string]: boolean}

    /**
     * The color used when doing reverse selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_selection_border_color?: Color

    /**
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_selection_cursor_box_type?: string

    /**
     * Flags that affect which entities will be selected during reverse selection.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_selection_mode_flags?: SelectionModeFlags

    /**
     * The reverse tile filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_tile_filter_mode?: string

    /**
     * The reverse tile filters used by this selection tool indexed by tile name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly reverse_tile_filters?: {[key: string]: LuaTilePrototype}

    /**
     * The results of launching this item in a rocket.
     */
    readonly rocket_launch_products: Product[]

    /**
     * The color used when doing normal selection with this selection tool prototype.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly selection_border_color?: Color

    /**
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly selection_cursor_box_type?: string

    /**
     * Flags that affect which entities will be selected.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly selection_mode_flags?: SelectionModeFlags

    /**
     * The repairing speed if this is a repairing tool.
     * @remarks
     * Applies to subclasses: RepairTool
     *
     */
    readonly speed?: number

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
    readonly straight_rail?: LuaEntityPrototype

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
    readonly tier?: number

    /**
     * The tile filter mode used by this selection tool.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly tile_filter_mode?: string

    /**
     * The number of tile filters this deconstruction item has.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    readonly tile_filter_slots?: number

    /**
     * The tile filters used by this selection tool indexed by tile name.
     * @remarks
     * Applies to subclasses: SelectionTool
     *
     */
    readonly tile_filters?: {[key: string]: LuaTilePrototype}

    /**
     * Type of this prototype. E.g. `"gun"` or `"mining-tool"`.
     */
    readonly type: string

    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean

    /**
     * The number of items needed to connect two entities with this as wire.
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
     */
    build_blueprint(this: void,
        table: {
            surface: SurfaceIdentification,
            force: ForceIdentification,
            position: MapPosition,
            force_build?: boolean,
            direction?: defines.direction,
            skip_fog_of_war?: boolean,
            by_player?: PlayerIdentification,
            raise_built?: boolean
        }): void

    /**
     * Would a call to {@link LuaItemStack::set_stack | LuaItemStack::set_stack} succeed?
     * @param stack - Stack that would be set, possibly `nil`.
     */
    can_set_stack(this: void,
        stack?: ItemStackIdentification): void

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
        }): void

    /**
     * Creates the equipment grid for this item if it doesn't exist and this is an item-with-entity-data that supports equipment grids.
     * @remarks
     * Applies to subclasses: ItemWithEntityData
     *
     */
    create_grid(this: void): void

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
     */
    export_stack(this: void): void

    /**
     * The entities in this blueprint.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_entities(this: void): void

    /**
     * Gets the number of entities in this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_entity_count(this: void): void

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
        tag: string): void

    /**
     * Gets the tags for the given blueprint entity index in this blueprint item.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_entity_tags(this: void,
        index: number): void

    /**
     * A list of the tiles in this blueprint.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    get_blueprint_tiles(this: void): void

    /**
     * Gets the entity filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    get_entity_filter(this: void,
        index: number): void

    /**
     * Access the inner inventory of an item.
     * @param inventory - Index of the inventory to access, which can only be [defines.inventory.item_main](defines.inventory.item_main).
     */
    get_inventory(this: void,
        inventory: defines.inventory): void

    /**
     * Gets the filter at the given index for this upgrade item.
     * @remarks
     * Applies to subclasses: UpgradeItem
     *
     * @param index - The index of the mapper to read.
     * @param type - `"from"` or `"to"`.
     */
    get_mapper(this: void,
        index: number,
        type: string): void

    /**
     * Gets the tag with the given name or returns `nil` if it doesn't exist.
     * @remarks
     * Applies to subclasses: ItemWithTags
     *
     */
    get_tag(this: void,
        tag_name: string): void

    /**
     * Gets the tile filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     */
    get_tile_filter(this: void,
        index: number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Import a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) from a string.
     * @param data - The string to import
     */
    import_stack(this: void,
        data: string): void

    /**
     * Is this blueprint item setup? I.e. is it a non-empty blueprint?
     */
    is_blueprint_setup(this: void): void

    /**
     * Removes a tag with the given name.
     * @remarks
     * Applies to subclasses: ItemWithTags
     *
     */
    remove_tag(this: void,
        tag: string): void

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
     * @param filter - Writing `nil` removes the filter.
     */
    set_entity_filter(this: void,
        index: number,
        filter: string | LuaEntityPrototype | LuaEntity | null): void

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
     * @param stack - Item stack to set it to. Omitting this parameter or passing `nil` will clear this item stack, as if [LuaItemStack::clear](LuaItemStack::clear) was called.
     */
    set_stack(this: void,
        stack?: ItemStackIdentification): void

    /**
     * Sets the tag with the given name and value.
     * @remarks
     * Applies to subclasses: ItemWithTags
     *
     */
    set_tag(this: void,
        tag_name: string,
        tag: AnyBasic): void

    /**
     * Sets the tile filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     * @param filter - Setting to nil erases the filter.
     */
    set_tile_filter(this: void,
        index: number,
        filter: string | LuaTilePrototype | LuaTile): void

    /**
     * Swaps this item stack with the given item stack if allowed.
     */
    swap_stack(this: void,
        stack: LuaItemStack): void

    /**
     * Transfers the given item stack into this item stack.
     */
    transfer_stack(this: void,
        stack: ItemStackIdentification): void

    /**
     * Use the capsule item with the entity as the source, targeting the given position.
     * @param entity - The entity to use the capsule item with.
     * @param target_position - The position to use the capsule item with.
     */
    use_capsule(this: void,
        entity: LuaEntity,
        target_position: MapPosition): void

    /**
     * The active blueprint index for this blueprint book. `nil` if this blueprint book is empty.
     * @remarks
     * Applies to subclasses: BlueprintBookItem
     *
     */
    active_index?: number

    /**
     * Whether the label for this item can be manually changed. When false the label can only be changed through the API.
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
     * Icons of this blueprint item, blueprint book, deconstruction item or upgrade planner. An item that doesn't have icons returns `nil` on read and throws error on write.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    blueprint_icons?: BlueprintSignalIcon[]

    /**
     * The offset from the absolute grid. `nil` if absolute snapping is not enabled.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    blueprint_position_relative_to_grid?: TilePosition

    /**
     * The snapping grid size in this blueprint item. `nil` if snapping is not enabled.
     * @remarks
     * Applies to subclasses: BlueprintItem
     *
     */
    blueprint_snap_to_grid?: TilePosition

    /**
     * If this item is a spidertron remote that has a spidertron bound to it, it returns the connected spider-vehicle entity.
     * @remarks
     * Applies to subclasses: SpidertronRemote
     *
     */
    connected_entity?: LuaEntity

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
    readonly default_icons: BlueprintSignalIcon[]

    /**
     * Durability of the contained item. Automatically capped at the item's maximum durability.
     * @remarks
     * Applies to subclasses: Tool
     *
     */
    durability?: number

    /**
     * If this is an item with entity data, get the stored entity color.
     * @remarks
     * Applies to subclasses: ItemWithEntityData
     *
     */
    entity_color?: Color

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
     * If this is an item with entity data, get the stored entity label.
     * @remarks
     * Applies to subclasses: ItemWithEntityData
     *
     */
    entity_label?: string

    /**
     * If this item extends the inventory it resides in (provides its contents for counts, crafting, insertion). Only callable on items with inventories.
     * @remarks
     * Applies to subclasses: ItemWithInventory
     *
     */
    extends_inventory: boolean

    /**
     * The equipment grid of this item, if any.
     */
    readonly grid?: LuaEquipmentGrid

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
     * The unique identifier for this item , if any. Note that this ID stays the same no matter where the item is moved to.
     * 
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
    readonly item_number?: number

    /**
     * The current label for this item, if any.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    label?: string

    /**
     * The current label color for this item, if any.
     * @remarks
     * Applies to subclasses: ItemWithLabel
     *
     */
    label_color?: Color

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
    help(this: void): void

    /**
     * The color the lamp is showing, if any.
     */
    readonly color?: Color

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
 * 
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
    help(this: void): void

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
    help(this: void): void

    /**
     * Is a given position within the construction range of this cell?
     */
    is_in_construction_range(this: void,
        position: MapPosition): void

    /**
     * Is a given position within the logistic range of this cell?
     */
    is_in_logistic_range(this: void,
        position: MapPosition): void

    /**
     * Are two cells neighbours?
     */
    is_neighbour_with(this: void,
        other: LuaLogisticCell): void

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
     * The network that owns this cell, if any.
     */
    readonly logistic_network?: LuaLogisticNetwork

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
    help(this: void): void

    /**
     * The circuit mode of operations for the logistic container. Can only be set on containers whose {@link logistic_mode | LuaEntityPrototype::logistic_mode} is set to "requester".
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
     * Can the network satisfy a request for a given item and count.
     * @param count - Count to check. Defaults to 1.
     * @param include_buffers - Should buffers be considered? Defaults to false.
     * @param item - Item name to check.
     */
    can_satisfy_request(this: void,
        item: string,
        count?: number,
        include_buffers?: boolean): void

    /**
     * Find logistic cell closest to a given position.
     */
    find_cell_closest_to(this: void,
        position: MapPosition): void

    /**
     * Get item counts for the entire network, similar to how {@link LuaInventory::get_contents | LuaInventory::get_contents} does.
     */
    get_contents(this: void): void

    /**
     * Count given or all items in the network or given members.
     * @param item - Item name to count. If not given, gives counts of all items in the network.
     * @param member - Logistic members to check, must be either `"storage"` or `"providers"`. If not given, gives count in the entire network.
     */
    get_item_count(this: void,
        item?: string,
        member?: string): void

    /**
     * Get the amount of items of the given type indexed by the storage member.
     * @param item - Item name to check.
     */
    get_supply_counts(this: void,
        item: string): void

    /**
     * Gets the logistic points with of the given type indexed by the storage member.
     * @param item - Item name to check.
     */
    get_supply_points(this: void,
        item: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Insert items into the logistic network. This will actually insert the items into some logistic chests.
     * @param item - What to insert.
     * @param members - Which logistic members to insert the items to. Must be `"storage"`, `"storage-empty"` (storage chests that are completely empty), `"storage-empty-slot"` (storage chests that have an empty slot), or `"requester"`. If not specified, inserts items into the logistic network in the usual order.
     */
    insert(this: void,
        item: ItemStackIdentification,
        members?: string): void

    /**
     * Remove items from the logistic network. This will actually remove the items from some logistic chests.
     * @param item - What to remove.
     * @param members - Which logistic members to remove from. Must be `"storage"`, `"passive-provider"`, `"buffer"`, or `"active-provider"`. If not specified, removes from the network in the usual order.
     */
    remove_item(this: void,
        item: ItemStackIdentification,
        members?: string): void

    /**
     * Find a logistic point to drop the specific item stack.
     * @param table.members - When given, it will find from only the specific type of member. Must be `"storage"`, `"storage-empty"`, `"storage-empty-slot"` or `"requester"`. If not specified, selects with normal priorities.
     * @param table.stack - Name of the item to select.
     */
    select_drop_point(this: void,
        table: {
            stack: ItemStackIdentification,
            members?: string
        }): void

    /**
     * Find the 'best' logistic point with this item ID and from the given position or from given chest type.
     * @param table.include_buffers - Whether to consider buffer chests or not. Defaults to false. Only considered if selecting with position.
     * @param table.members - When given, it will find from only the specific type of member. Must be `"storage"`, `"passive-provider"`, `"buffer"` or `"active-provider"`. If not specified, selects with normal priorities. Not considered if position is specified.
     * @param table.name - Name of the item to select.
     * @param table.position - When given, it will find the storage 'best' storage point from this position.
     */
    select_pickup_point(this: void,
        table: {
            name: string,
            position?: MapPosition,
            include_buffers?: boolean,
            members?: string
        }): void

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
    help(this: void): void

    /**
     * If this logistic point is using the exact mode. In exact mode robots never over-deliver requests.
     */
    readonly exact: boolean

    /**
     * The logistic filters for this logistic point, if this uses any.
     * @remarks
     * The returned array will always have an entry for each filter and will be indexed in sequence when not nil.
     *
     */
    readonly filters?: LogisticFilter[]

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
     * Items targeted to be dropped off into this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts.
     */
    readonly targeted_items_deliver: {[key: string]: number}

    /**
     * Items targeted to be picked up from this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts.
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
    help(this: void): void

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
    help(this: void): void

    /**
     * Whether this string setting allows blank values. `nil` if not a string setting.
     */
    readonly allow_blank?: boolean

    /**
     * The allowed values for this setting. `nil` if this setting doesn't use the a fixed set of values.
     */
    readonly allowed_values?: string[] | number[]

    /**
     * Whether this string setting auto-trims values. `nil` if not a string setting
     */
    readonly auto_trim?: boolean

    /**
     * The default value of this setting.
     */
    readonly default_value: boolean | number | string

    /**
     * Whether this setting is hidden from the GUI.
     */
    readonly hidden: boolean

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    /**
     * The maximum value for this setting. `nil` if this setting type doesn't support a maximum.
     */
    readonly maximum_value?: number

    /**
     * The minimum value for this setting. `nil` if this setting type doesn't support a minimum.
     */
    readonly minimum_value?: number

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    readonly setting_type: string

    /**
     * Type of this prototype.
     */
    readonly type: string

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
     */
    add_player(this: void,
        player: PlayerIdentification): void

    /**
     * Whether this group allows the given action.
     * @param action - The action in question.
     */
    allows_action(this: void,
        action: defines.input_action): void

    /**
     * Destroys this group.
     */
    destroy(this: void): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Removes the given player from this group.
     */
    remove_player(this: void,
        player: PlayerIdentification): void

    /**
     * Sets whether this group allows the performance the given action.
     * @param action - The action in question.
     * @param allow_action - Whether to allow the specified action.
     */
    set_allows_action(this: void,
        action: defines.input_action,
        allow_action: boolean): void

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
     */
    create_group(this: void,
        name?: string): void

    /**
     * Gets the permission group with the given name or group ID.
     */
    get_group(this: void,
        group: string | number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

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
     * Builds whatever is in the cursor on the surface the player is on. The cursor stack will automatically be reduced as if the player built normally.
     * @param table.alt - If alt build should be used instead of normal build. Defaults to normal.
     * @param table.direction - Direction the entity would be placed
     * @param table.position - Where the entity would be placed
     * @param table.skip_fog_of_war - If chunks covered by fog-of-war are skipped.
     * @param table.terrain_building_size - The size for building terrain if building terrain. Defaults to 2.
     */
    build_from_cursor(this: void,
        table: {
            position: MapPosition,
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
            position: MapPosition,
            direction?: defines.direction,
            alt?: boolean,
            terrain_building_size?: number,
            skip_fog_of_war?: boolean
        }): void

    /**
     * Checks if this player can build the given entity at the given location on the surface the player is on.
     * @param table.direction - Direction the entity would be placed. Defaults to `north`.
     * @param table.name - Name of the entity to check.
     * @param table.position - Where the entity would be placed.
     */
    can_place_entity(this: void,
        table: {
            name: string,
            position: MapPosition,
            direction?: defines.direction
        }): void

    /**
     * Clear the chat console.
     */
    clear_console(this: void): void

    /**
     * Invokes the "clear cursor" action on the player as if the user pressed it.
     */
    clear_cursor(this: void): void

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
     */
    create_character(this: void,
        character?: string): void

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
            position?: MapPosition,
            create_at_cursor?: boolean,
            color?: Color,
            time_to_live?: number,
            speed?: number
        }): void

    /**
     * Disables alerts for the given alert category.
     */
    disable_alert(this: void,
        alert_type: defines.alert_type): void

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
     */
    drag_wire(this: void,
        table: {
            position: MapPosition
        }): void

    /**
     * Enables alerts for the given alert category.
     */
    enable_alert(this: void,
        alert_type: defines.alert_type): void

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
        index: number): void

    /**
     * Get all alerts matching the given filters, or all alerts if no filters are given.
     */
    get_alerts(this: void,
        table: {
            entity?: LuaEntity,
            prototype?: LuaEntityPrototype,
            position?: MapPosition,
            type?: defines.alert_type,
            surface?: SurfaceIdentification
        }): void

    /**
     * The characters associated with this player.
     * @remarks
     * The array will always be empty when the player is disconnected (see {@link LuaPlayer::connected | LuaPlayer::connected}) regardless of there being associated characters.
     * Characters associated with this player will be logged off when this player disconnects but are not controlled by any player.
     *
     */
    get_associated_characters(this: void): void

    /**
     * Get the current goal description, as a localised string.
     */
    get_goal_description(this: void): void

    /**
     * Gets the filter for this map editor infinity filters at the given index or `nil` if the filter index doesn't exist or is empty.
     * @param index - The index to get.
     */
    get_infinity_inventory_filter(this: void,
        index: number): void

    /**
     * Gets the quick bar filter for the given slot or `nil`.
     * @param index - The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     */
    get_quick_bar_slot(this: void,
        index: number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * If the given alert type is currently enabled.
     */
    is_alert_enabled(this: void,
        alert_type: defines.alert_type): void

    /**
     * If the given alert type is currently muted.
     */
    is_alert_muted(this: void,
        alert_type: defines.alert_type): void

    /**
     * Is a custom Lua shortcut currently available?
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    is_shortcut_available(this: void,
        prototype_name: string): void

    /**
     * Is a custom Lua shortcut currently toggled?
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    is_shortcut_toggled(this: void,
        prototype_name: string): void

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
     */
    mute_alert(this: void,
        alert_type: defines.alert_type): void

    /**
     * Queues a request to open the map at the specified position. If the map is already opened, the request will simply set the position, scale, and entity to follow. Render mode change requests are processed before rendering of the next frame.
     * @param entity - The entity to follow. If not given the current entity being followed will be cleared.
     */
    open_map(this: void,
        position: MapPosition,
        scale?: number,
        entity?: LuaEntity): void

    /**
     * Invokes the "smart pipette" action on the player as if the user pressed it.
     */
    pipette_entity(this: void,
        entity: string | LuaEntity | LuaEntityPrototype): void

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
            position?: MapPosition,
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
            prototype?: LuaEntityPrototype | string,
            position?: MapPosition,
            type?: defines.alert_type,
            surface?: SurfaceIdentification,
            icon?: SignalID,
            message?: LocalisedString
        }): void

    /**
     * Requests a translation for the given localised string. If the request is successful, the {@link on_string_translated | on_string_translated} event will be fired with the results.
     * @remarks
     * Does nothing if this player is not connected (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     *
     */
    request_translation(this: void,
        localised_string: LocalisedString): void

    /**
     * Requests translation for the given set of localised strings. If the request is successful, a {@link on_string_translated | on_string_translated} event will be fired for each string with the results.
     * @remarks
     * Does nothing if this player is not connected (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     *
     */
    request_translations(this: void,
        localised_strings: LocalisedString[]): void

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
            start_position?: MapPosition,
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
     * @param filter - The new filter or `nil` to clear the filter.
     * @param index - The index to set.
     */
    set_infinity_inventory_filter(this: void,
        index: number,
        filter: InfinityInventoryFilter | null): void

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
        position: MapPosition,
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
     */
    unmute_alert(this: void,
        alert_type: defines.alert_type): void

    /**
     * Uses the current item in the cursor if it's a capsule or does nothing if not.
     * @param position - Where the item would be used.
     */
    use_from_cursor(this: void,
        position: MapPosition): void

    /**
     * Queues a request to zoom to world at the specified position. If the player is already zooming to world, the request will simply set the position, scale, and entity to follow. Render mode change requests are processed before rendering of the next frame.
     * @param entity - The entity to follow. If not given the current entity being followed will be cleared.
     */
    zoom_to_world(this: void,
        position: MapPosition,
        scale?: number,
        entity?: LuaEntity): void

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
     * The character attached to this player, if any. Returns `nil` when the player is disconnected (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     */
    character?: LuaEntity

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
     * Returns true if the current item stack in cursor will be destroyed after clearing the cursor. Manually putting it into inventory still preserves the item. If the cursor stack is not one of the supported types (blueprint, blueprint-book, deconstruction-planner, upgrade-planner), write operation will be silently ignored.
     */
    cursor_stack_temporary: boolean

    /**
     * When in a cutscene; the character this player would be using once the cutscene is over, if any. Returns `nil` when the player is disconnected (see {@link LuaPlayer::connected | LuaPlayer::connected}).
     */
    readonly cutscene_character?: LuaEntity

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
     * The wire drag target for this player, if any.
     */
    readonly drag_target?: DragTarget

    /**
     * The source entity used during entity settings copy-paste, if any.
     */
    readonly entity_copy_source?: LuaEntity

    /**
     * The player's game view settings.
     */
    game_view_settings: GameViewSettings

    readonly gui: LuaGui

    /**
     * The original location of the item in the cursor, marked with a hand. `nil` if the cursor stack is empty. When writing, the specified inventory slot must be empty and the cursor stack must not be empty.
     */
    hand_location?: ItemStackLocation

    /**
     * This player's index in {@link LuaGameScript::players | LuaGameScript::players} (unique ID). It is assigned when a player is created, and remains so (even when the player is not {@link connected | LuaPlayer::connected}) until the player is irreversably {@link removed | on_player_removed}. Indexes of removed players can be reused.
     */
    readonly index: number

    /**
     * The filters for this map editor infinity inventory settings.
     */
    infinity_inventory_filters: InfinityInventoryFilter[]

    /**
     * The input method of the player, mouse and keyboard or game controller
     */
    readonly input_method: defines.input_method

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
     * The current per-player settings for the this player, indexed by prototype name. Returns the same structure as {@link LuaSettings::get_player_settings | LuaSettings::get_player_settings}. This table becomes invalid if its associated player does.
     * 
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting | ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     * @example
     * ```
     * -- Change the value of the "active_lifestyle" setting
     * player.mod_settings["active_lifestyle"] = {value = true}
     * ```
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
     * The permission group this player is part of, if any.
     */
    permission_group?: LuaPermissionGroup

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
     * The stashed controller type, if any.
     * @remarks
     * This is mainly useful when a player is in the map editor.
     *
     */
    readonly stashed_controller_type?: defines.controllers

    /**
     * The tag that is shown after the player in chat and on the map.
     */
    tag: string

    /**
     * The number of ticks until this player will respawn. `nil` if this player is not waiting to respawn.
     * 
     * Set to `nil` to immediately respawn the player.
     * @remarks
     * Set to any positive value to trigger the respawn state for this player.
     *
     */
    ticks_to_respawn?: number

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
 * Since performance is non-deterministic, these objects don't allow reading the raw time values from Lua. They can be used anywhere a {@link LocalisedString | LocalisedString} is used, except for {@link LuaGuiElement::add | LuaGuiElement::add}'s LocalisedString arguments, {@link LuaSurface::create_entity | LuaSurface::create_entity}'s `text` argument, and {@link LuaEntity::add_market_item | LuaEntity::add_market_item}.
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
    help(this: void): void

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
    help(this: void): void

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
 * An interface to send messages to the calling RCON interface through the global object named `rcon`.
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
    help(this: void): void

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
    help(this: void): void

    /**
     * The current rail index.
     */
    readonly current: number

    /**
     * If the path goes from the front of the train
     */
    readonly is_front: boolean

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
    help(this: void): void

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
    help(this: void): void

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
        upper?: number): void

}

/**
 * A crafting recipe. Recipes belong to forces (see {@link LuaForce | LuaForce}) because some recipes are unlocked by research, and researches are per-force.
 */
interface LuaRecipe {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

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
     * The ingredients to this recipe.
     * @example
     * The ingredients of `"advanced-oil-processing"` would look like this: 
     * ```
     * {{type="fluid", name="crude-oil", amount=100}, {type="fluid", name="water", amount=50}}
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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * The results/products of this recipe.
     * @example
     * The products of `"advanced-oil-processing"` would look like this: 
     * ```
     * {{type="fluid", name="heavy-oil", amount=25}, {type="fluid", name="light-oil", amount=45}, {type="fluid", name="petroleum-gas", amount=55}}
     * ```
     *
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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

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
     * The ingredients to this recipe.
     * @example
     * The ingredients of `"advanced-oil-processing"` would look like this: 
     * ```
     * {{type="fluid", name="crude-oil", amount=100}, {type="fluid", name="water", amount=50}}
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
     * The main product of this recipe, if any.
     */
    readonly main_product?: Product

    /**
     * Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item.
     */
    readonly name: string

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough".
     */
    readonly overload_multiplier: number

    /**
     * The results/products of this recipe.
     * @example
     * The products of `"advanced-oil-processing"` would look like this: 
     * ```
     * {{type="fluid", name="heavy-oil", amount=25}, {type="fluid", name="light-oil", amount=45}, {type="fluid", name="petroleum-gas", amount=55}}
     * ```
     *
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
     * @param functions - List of functions that are members of the new interface.
     * @param name - Name of the interface. If the name matches any existing interface, an error is thrown.
     */
    add_interface(this: void,
        name: string,
        functions: {[key: string]: (this: void) => any}): void

    /**
     * Call a function of an interface.
     * @param fn - Function name that belongs to the `interface`.
     * @param interface - Interface to look up `function` in.
     * @param ...args - Arguments to pass to the called function. Note that any arguments passed through the interface are a copy of the original, not a reference. Metatables are not retained, while references to LuaObjects stay intact.
     */
    call(this: void,
        interface: string,
        fn: string,
        ...args: any[]): void

    /**
     * Removes an interface with the given name.
     * @param name - Name of the interface.
     */
    remove_interface(this: void,
        name: string): void

    /**
     * List of all registered interfaces. For each interface name, `remote.interfaces[name]` is a dictionary mapping the interface's registered functions to `true`.
     * @example
     * Assuming the "human interactor" interface is registered as above 
     * ```
     * game.player.print(tostring(remote.interfaces["human interactor"]["hello"]))        -- prints true
     * game.player.print(tostring(remote.interfaces["human interactor"]["nonexistent"]))  -- prints nil
     * ```
     *
     */
    readonly interfaces: {[key: string]: {[key: string]: true}}

    /**
     * This object's name.
     */
    readonly object_name: string

}

/**
 * Allows rendering of geometric shapes, text and sprites in the game world through the global object named `rendering`. Each render object is identified by an id that is universally unique for the lifetime of a whole game.
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
     * Destroys all render objects. Passing an empty string (`""`)
     * @param mod_name - If provided, only the render objects created by this mod are destroyed. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
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
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the animation. Default is 0.
     * @param table.orientation_target - If given, the animation rotates so that it faces this target. Note that `orientation` is still applied to the animation.
     * @param table.orientation_target_offset - Only used if `orientation_target` is a LuaEntity.
     * @param table.oriented_offset - Offsets the center of the animation if `orientation_target` is given. This offset will rotate together with the animation.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.render_layer - Render layer of the animation. Defaults to `"arrow"`.
     * @param table.target - Center of the animation.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.use_target_orientation - Only used if `orientation_target` is a LuaEntity.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.x_scale - Horizontal scale of the animation. Default is 1.
     * @param table.y_scale - Vertical scale of the animation. Default is 1.
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
            orientation_target?: MapPosition | LuaEntity,
            orientation_target_offset?: Vector,
            use_target_orientation?: boolean,
            oriented_offset?: Vector,
            target: MapPosition | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create an arc.
     * @param table.angle - The angle of the arc, in radian.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.max_radius - The radius of the outer edge of the arc, in tiles.
     * @param table.min_radius - The radius of the inner edge of the arc, in tiles.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.start_angle - Where the arc starts, in radian.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     */
    draw_arc(this: void,
        table: {
            color: Color,
            max_radius: number,
            min_radius: number,
            start_angle: number,
            angle: number,
            target: MapPosition | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create a circle.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.filled - If the circle should be filled.
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.radius - In tiles.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.width - Width of the outline, used only if filled = false. Value is in pixels (32 per tile).
     */
    draw_circle(this: void,
        table: {
            color: Color,
            radius: number,
            width?: number,
            filled: boolean,
            target: MapPosition | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create a light.
     * @remarks
     * The base game uses the utility sprites `light_medium` and `light_small` for lights.
     *
     * @param table.color - Defaults to white (no tint).
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.intensity - Default is 1.
     * @param table.minimum_darkness - The minimum darkness at which this light is rendered. Default is 0.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the light. Default is 0.
     * @param table.oriented - If this light has the same orientation as the entity target, default is false. Note that `orientation` is still applied to the sprite.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.scale - Default is 1.
     * @param table.target - Center of the light.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
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
            target: MapPosition | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create a line.
     * @param table.dash_length - Length of the dashes that this line has. Used only if gap_length > 0. Default is 0.
     * @param table.dash_offset - Starting offset to apply to dashes. Cannot be greater than dash_length + gap_length. Default is 0.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.from_offset - Only used if `from` is a LuaEntity.
     * @param table.gap_length - Length of the gaps that this line has, in tiles. Default is 0.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
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
     */
    draw_line(this: void,
        table: {
            color: Color,
            width: number,
            gap_length?: number,
            dash_length?: number,
            dash_offset?: number,
            from: MapPosition | LuaEntity,
            from_offset?: Vector,
            to: MapPosition | LuaEntity,
            to_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create a triangle mesh defined by a triangle strip.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation applied to all vertices. Default is 0.
     * @param table.orientation_target - If given, the vertices (that are not set to an entity) rotate so that it faces this target. Note that `orientation` is still applied.
     * @param table.orientation_target_offset - Only used if `orientation_target` is a LuaEntity.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.target - Acts like an offset applied to all vertices that are not set to an entity.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.use_target_orientation - Only used if `orientation_target` is a LuaEntity.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     */
    draw_polygon(this: void,
        table: {
            color: Color,
            vertices: ScriptRenderVertexTarget[],
            target?: MapPosition | LuaEntity,
            target_offset?: Vector,
            orientation?: RealOrientation,
            orientation_target?: MapPosition | LuaEntity,
            orientation_target_offset?: Vector,
            use_target_orientation?: boolean,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create a rectangle.
     * @param table.draw_on_ground - If this should be drawn below sprites and entities.
     * @param table.filled - If the rectangle should be filled.
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.left_top_offset - Only used if `left_top` is a LuaEntity.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.right_bottom_offset - Only used if `right_bottom` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     * @param table.width - Width of the outline, used only if filled = false. Value is in pixels (32 per tile).
     */
    draw_rectangle(this: void,
        table: {
            color: Color,
            width?: number,
            filled: boolean,
            left_top: MapPosition | LuaEntity,
            left_top_offset?: Vector,
            right_bottom: MapPosition | LuaEntity,
            right_bottom_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            draw_on_ground?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create a sprite.
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the sprite. Default is 0.
     * @param table.orientation_target - If given, the sprite rotates so that it faces this target. Note that `orientation` is still applied to the sprite.
     * @param table.orientation_target_offset - Only used if `orientation_target` is a LuaEntity.
     * @param table.oriented_offset - Offsets the center of the sprite if `orientation_target` is given. This offset will rotate together with the sprite.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.render_layer - Render layer of the sprite. Defaults to `"arrow"`.
     * @param table.target - Center of the sprite.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.use_target_orientation - Only used if `orientation_target` is a LuaEntity.
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
     */
    draw_sprite(this: void,
        table: {
            sprite: SpritePath,
            orientation?: RealOrientation,
            x_scale?: number,
            y_scale?: number,
            tint?: Color,
            render_layer?: RenderLayer,
            orientation_target?: MapPosition | LuaEntity,
            orientation_target_offset?: Vector,
            use_target_orientation?: boolean,
            oriented_offset?: Vector,
            target: MapPosition | LuaEntity,
            target_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            forces?: ForceIdentification[],
            players?: PlayerIdentification[],
            visible?: boolean,
            only_in_alt_mode?: boolean
        }): void

    /**
     * Create a text.
     * @remarks
     * Not all fonts support scaling.
     *
     * @param table.alignment - Defaults to "left". Other options are "right" and "center".
     * @param table.draw_on_ground - If this should be drawn below sprites and entities. Rich text does not support this option.
     * @param table.font - Name of font to use. Defaults to the same font as flying-text.
     * @param table.forces - The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.only_in_alt_mode - If this should only be rendered in alt mode. Defaults to false.
     * @param table.orientation - The orientation of the text. Default is 0.
     * @param table.players - The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.scale_with_zoom - Defaults to false. If true, the text scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes.
     * @param table.target_offset - Only used if `target` is a LuaEntity.
     * @param table.text - The text to display.
     * @param table.time_to_live - In ticks. Defaults to living forever.
     * @param table.use_rich_text - If rich text rendering is enabled. Defaults to false.
     * @param table.vertical_alignment - Defaults to "top". Other options are "middle", "baseline" and "bottom".
     * @param table.visible - If this is rendered to anyone at all. Defaults to true.
     */
    draw_text(this: void,
        table: {
            text: LocalisedString,
            surface: SurfaceIdentification,
            target: MapPosition | LuaEntity,
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
            only_in_alt_mode?: boolean,
            use_rich_text?: boolean
        }): void

    /**
     * Get the alignment of the text with this id.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_alignment(this: void,
        id: number): void

    /**
     * Gets an array of all valid object ids.
     * @param mod_name - If provided, get only the render objects created by this mod. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
     */
    get_all_ids(this: void,
        mod_name?: string): void

    /**
     * Get the angle of the arc with this id.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    get_angle(this: void,
        id: number): void

    /**
     * Get the animation prototype name of the animation with this id.
     * @remarks
     * Applies to subclasses: Animation
     *
     */
    get_animation(this: void,
        id: number): void

    /**
     * Get the animation offset of the animation with this id.
     * @remarks
     * Applies to subclasses: Animation
     *
     */
    get_animation_offset(this: void,
        id: number): void

    /**
     * Get the animation speed of the animation with this id.
     * @remarks
     * Applies to subclasses: Animation
     *
     */
    get_animation_speed(this: void,
        id: number): void

    /**
     * Get the color or tint of the object with this id.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon,Sprite,Light,Animation
     *
     */
    get_color(this: void,
        id: number): void

    /**
     * Get the dash length of the line with this id.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_dash_length(this: void,
        id: number): void

    /**
     * Get whether this is being drawn on the ground, under most entities and sprites.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon
     *
     */
    get_draw_on_ground(this: void,
        id: number): void

    /**
     * Get if the circle or rectangle with this id is filled.
     * @remarks
     * Applies to subclasses: Circle,Rectangle
     *
     */
    get_filled(this: void,
        id: number): void

    /**
     * Get the font of the text with this id.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_font(this: void,
        id: number): void

    /**
     * Get the forces that the object with this id is rendered to or `nil` if visible to all forces.
     */
    get_forces(this: void,
        id: number): void

    /**
     * Get from where the line with this id is drawn.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_from(this: void,
        id: number): void

    /**
     * Get the length of the gaps in the line with this id.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_gap_length(this: void,
        id: number): void

    /**
     * Get the intensity of the light with this id.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    get_intensity(this: void,
        id: number): void

    /**
     * Get where top left corner of the rectangle with this id is drawn.
     * @remarks
     * Applies to subclasses: Rectangle
     *
     */
    get_left_top(this: void,
        id: number): void

    /**
     * Get the radius of the outer edge of the arc with this id.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    get_max_radius(this: void,
        id: number): void

    /**
     * Get the radius of the inner edge of the arc with this id.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    get_min_radius(this: void,
        id: number): void

    /**
     * Get the minimum darkness at which the light with this id is rendered.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    get_minimum_darkness(this: void,
        id: number): void

    /**
     * Get whether this is only rendered in alt-mode.
     */
    get_only_in_alt_mode(this: void,
        id: number): void

    /**
     * Get the orientation of the object with this id.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Text,Polygon,Sprite,Light,Animation
     *
     */
    get_orientation(this: void,
        id: number): void

    /**
     * The object rotates so that it faces this target. Note that `orientation` is still applied to the object. Get the orientation_target of the object with this id.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Polygon,Sprite,Animation
     *
     */
    get_orientation_target(this: void,
        id: number): void

    /**
     * Get if the light with this id is rendered has the same orientation as the target entity. Note that `orientation` is still applied to the sprite.
     * @remarks
     * Applies to subclasses: Light
     *
     */
    get_oriented(this: void,
        id: number): void

    /**
     * Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation. Get the oriented_offset of the sprite or animation with this id.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_oriented_offset(this: void,
        id: number): void

    /**
     * Get the players that the object with this id is rendered to or `nil` if visible to all players.
     */
    get_players(this: void,
        id: number): void

    /**
     * Get the radius of the circle with this id.
     * @remarks
     * Applies to subclasses: Circle
     *
     */
    get_radius(this: void,
        id: number): void

    /**
     * Get the render layer of the sprite or animation with this id.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_render_layer(this: void,
        id: number): void

    /**
     * Get where bottom right corner of the rectangle with this id is drawn.
     * @remarks
     * Applies to subclasses: Rectangle
     *
     */
    get_right_bottom(this: void,
        id: number): void

    /**
     * Get the scale of the text or light with this id.
     * @remarks
     * Applies to subclasses: Text,Light
     *
     */
    get_scale(this: void,
        id: number): void

    /**
     * Get if the text with this id scales with player zoom.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_scale_with_zoom(this: void,
        id: number): void

    /**
     * Get the sprite of the sprite or light with this id.
     * @remarks
     * Applies to subclasses: Sprite,Light
     *
     */
    get_sprite(this: void,
        id: number): void

    /**
     * Get where the arc with this id starts.
     * @remarks
     * Applies to subclasses: Arc
     *
     */
    get_start_angle(this: void,
        id: number): void

    /**
     * The surface the object with this id is rendered on.
     */
    get_surface(this: void,
        id: number): void

    /**
     * Get where the object with this id is drawn.
     * @remarks
     * Polygon vertices that are set to an entity will ignore this.
     * Applies to subclasses: Text,Circle,Arc,Polygon,Sprite,Light,Animation
     *
     */
    get_target(this: void,
        id: number): void

    /**
     * Get the text that is displayed by the text with this id.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_text(this: void,
        id: number): void

    /**
     * Get the time to live of the object with this id. This will be 0 if the object does not expire.
     */
    get_time_to_live(this: void,
        id: number): void

    /**
     * Get where the line with this id is drawn to.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    get_to(this: void,
        id: number): void

    /**
     * Gets the type of the given object. The types are "text", "line", "circle", "rectangle", "arc", "polygon", "sprite", "light" and "animation".
     */
    get_type(this: void,
        id: number): void

    /**
     * Get if the text with this id parses rich text tags.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_use_rich_text(this: void,
        id: number): void

    /**
     * Get whether this uses the target orientation.
     */
    get_use_target_orientation(this: void,
        id: number): void

    /**
     * Get the vertical alignment of the text with this id.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    get_vertical_alignment(this: void,
        id: number): void

    /**
     * Get the vertices of the polygon with this id.
     * @remarks
     * Applies to subclasses: Polygon
     *
     */
    get_vertices(this: void,
        id: number): void

    /**
     * Get whether this is rendered to anyone at all.
     */
    get_visible(this: void,
        id: number): void

    /**
     * Get the width of the object with this id. Value is in pixels (32 per tile).
     * @remarks
     * Applies to subclasses: Line,Circle,Rectangle
     *
     */
    get_width(this: void,
        id: number): void

    /**
     * Get the horizontal scale of the sprite or animation with this id.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_x_scale(this: void,
        id: number): void

    /**
     * Get the vertical scale of the sprite or animation with this id.
     * @remarks
     * Applies to subclasses: Sprite,Animation
     *
     */
    get_y_scale(this: void,
        id: number): void

    /**
     * Does a font with this name exist?
     */
    is_font_valid(this: void,
        font_name: string): void

    /**
     * Does a valid object with this id exist?
     */
    is_valid(this: void,
        id: number): void

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
        left_top: MapPosition | LuaEntity,
        left_top_offset: Vector,
        right_bottom: MapPosition | LuaEntity,
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
        from: MapPosition | LuaEntity,
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
        left_top: MapPosition | LuaEntity,
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
        orientation_target: MapPosition | LuaEntity,
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
        right_bottom: MapPosition | LuaEntity,
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
        target: MapPosition | LuaEntity,
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
        to: MapPosition | LuaEntity,
        to_offset?: Vector): void

    /**
     * Set if the text with this id parses rich text tags.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    set_use_rich_text(this: void,
        id: number,
        use_rich_text: boolean): void

    /**
     * Set whether this uses the target orientation.
     */
    set_use_target_orientation(this: void,
        id: number,
        use_target_orientation: boolean): void

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

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
     * Gets the current per-player settings for the given player, indexed by prototype name. Returns the same structure as {@link LuaPlayer::mod_settings | LuaPlayer::mod_settings}. This table becomes invalid if its associated player does.
     * 
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting | ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     * @example
     * ```
     * -- Change the value of the "active_lifestyle" setting
     * settings.get_player_settings(player_index)["active_lifestyle"] = {value = true}
     * ```
     *
     */
    get_player_settings(this: void,
        player: PlayerIdentification): void

    /**
     * The current global mod settings, indexed by prototype name.
     * 
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting | ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     */
    readonly global: {[key: string]: ModSetting}

    /**
     * This object's name.
     */
    readonly object_name: string

    /**
     * The default player mod settings for this map, indexed by prototype name.
     * 
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting | ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
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
    help(this: void): void

    readonly action: string

    /**
     * The control input that is associated with this shortcut, if any.
     */
    readonly associated_control_input?: string

    /**
     * The item to create when this shortcut is used, if any.
     */
    readonly item_to_spawn?: LuaItemPrototype

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * The technology that needs to be researched once (in any save) for this shortcut to be unlocked (in all saves).
     */
    readonly technology_to_unlock?: LuaTechnologyPrototype

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
    help(this: void): void

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
    help(this: void): void

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
     * Sets `extra_top/right/bottom/left_margin_when_activated` to this value. An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    extra_margin_when_activated: number | number[]

    /**
     * Sets `extra_top/right/bottom/left_padding_when_activated` to this value. An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
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
     * Horizontal align of the inner content of the widget, if any. Possible values are "left", "center" or "right".
     */
    horizontal_align?: string

    /**
     * Horizontal space between individual cells.
     * @remarks
     * Applies to subclasses: LuaTableStyle,LuaFlowStyle,LuaHorizontalFlowStyle
     *
     */
    horizontal_spacing: number

    /**
     * Whether the GUI element can be squashed (by maximal width of some parent element) horizontally. `nil` if this element does not support squashing. This is mainly meant to be used for scroll-pane The default value is false.
     */
    horizontally_squashable?: boolean

    /**
     * Whether the GUI element stretches its size horizontally to other elements. `nil` if this element does not support stretching.
     */
    horizontally_stretchable?: boolean

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
     * Vertical align of the inner content of the widget, if any. Possible values are "top", "center" or "bottom".
     */
    vertical_align?: string

    /**
     * Vertical space between individual cells.
     * @remarks
     * Applies to subclasses: LuaTableStyle,LuaFlowStyle,LuaVerticalFlowStyle,LuaTabbedPaneStyle
     *
     */
    vertical_spacing: number

    /**
     * Whether the GUI element can be squashed (by maximal height of some parent element) vertically. `nil` if this element does not support squashing. This is mainly meant to be used for scroll-pane The default (parent) value for scroll pane is true, false otherwise.
     */
    vertically_squashable?: boolean

    /**
     * Whether the GUI element stretches its size vertically to other elements. `nil` if this element does not support stretching.
     */
    vertically_stretchable?: boolean

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
     */
    add_script_area(this: void,
        area: ScriptArea): void

    /**
     * Adds the given script position.
     */
    add_script_position(this: void,
        area: ScriptPosition): void

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
        position: MapPosition,
        unit_count: number,
        force?: ForceIdentification): void

    /**
     * @param positions - Positions for which to calculate property values
     * @param property_names - Names of properties (e.g. "elevation") to calculate
     */
    calculate_tile_properties(this: void,
        property_names: string[],
        positions: MapPosition[]): void

    /**
     * If there exists an entity at the given location that can be fast-replaced with the given entity parameters.
     * @param table.direction - Direction the entity would be placed. Defaults to `north`.
     * @param table.force - The force that would place the entity. Defaults to the `"neutral"` force.
     * @param table.name - Name of the entity to check.
     * @param table.position - Where the entity would be placed.
     */
    can_fast_replace(this: void,
        table: {
            name: string,
            position: MapPosition,
            direction?: defines.direction,
            force?: ForceIdentification
        }): void

    /**
     * Check for collisions with terrain or other entities.
     * @param table.build_check_type - Which type of check should be carried out. Defaults to `ghost_revive`.
     * @param table.direction - Direction of the placed entity. Defaults to `north`.
     * @param table.force - The force that would place the entity. Defaults to the `"neutral"` force.
     * @param table.forced - If `true`, entities that can be marked for deconstruction are ignored. Only used if `build_check_type` is either `manual_ghost`, `script_ghost` or `blueprint_ghost`. Defaults to `false`.
     * @param table.inner_name - The prototype name of the entity contained in the ghost. Only used if `name` is `entity-ghost`.
     * @param table.name - Name of the entity prototype to check.
     * @param table.position - Where the entity would be placed.
     */
    can_place_entity(this: void,
        table: {
            name: string,
            position: MapPosition,
            direction?: defines.direction,
            force?: ForceIdentification,
            build_check_type?: defines.build_check_type,
            forced?: boolean,
            inner_name?: string
        }): void

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
     * 
     * If no `area` or `position` are given, the entire surface is searched. If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box). If `position` and `radius` are given, this returns entities in the radius of the position. If `area` is specified, this returns entities colliding with that area.
     * @param table.invert - Whether the filters should be inverted.
     * @param table.radius - If given with position, will count all entities within the radius of the position.
     */
    count_entities_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: MapPosition,
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
            is_military_target?: boolean,
            invert?: boolean
        }): void

    /**
     * Count tiles of a given name in a given area. Works just like {@link LuaSurface::find_tiles_filtered | LuaSurface::find_tiles_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of tiles.
     * 
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     * @param table.has_tile_ghost - Can be further filtered by supplying a `force` filter.
     * @param table.invert - If the filters should be inverted.
     * @param table.position - Ignored if not given with radius.
     * @param table.radius - If given with position, will return all entities within the radius of the position.
     * @param table.to_be_deconstructed - Can be further filtered by supplying a `force` filter.
     */
    count_tiles_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: MapPosition,
            radius?: number,
            name?: string | string[],
            force?: ForceIdentification | ForceIdentification[],
            limit?: number,
            has_hidden_tile?: boolean,
            has_tile_ghost?: boolean,
            to_be_deconstructed?: boolean,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            invert?: boolean
        }): void

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
     */
    create_entity(this: void,
        table: LuaSurfaceCreateEntityParams): void

    /**
     * Creates a particle at the given location
     * @param table.name - The particle name.
     * @param table.position - Where to create the particle.
     */
    create_particle(this: void,
        table: {
            name: string,
            position: MapPosition,
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
            position: MapPosition
        }): void

    /**
     * Create a new unit group at a given position.
     * @param table.force - Force of the new unit group. Defaults to `"enemy"`.
     * @param table.position - Initial position of the new unit group.
     */
    create_unit_group(this: void,
        table: {
            position: MapPosition,
            force?: ForceIdentification
        }): void

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
     * Whether the given decorative prototype collides at the given position and direction.
     * @param position - The position to check
     * @param prototype - The decorative prototype to check
     */
    decorative_prototype_collides(this: void,
        prototype: string,
        position: MapPosition): void

    /**
     * @param position - The chunk position to delete
     */
    delete_chunk(this: void,
        position: ChunkPosition): void

    /**
     * Removes all decoratives from the given area. If no area and no position are given, then the entire surface is searched.
     * @param table.exclude_soft - Soft decoratives can be drawn over rails.
     * @param table.invert - If the filters should be inverted.
     */
    destroy_decoratives(this: void,
        table: {
            area?: BoundingBox,
            position?: TilePosition,
            name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[],
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            from_layer?: string,
            to_layer?: string,
            exclude_soft?: boolean,
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
     * Whether the given entity prototype collides at the given position and direction.
     * @param position - The position to check
     * @param prototype - The entity prototype to check
     * @param use_map_generation_bounding_box - If the map generation bounding box should be used instead of the collision bounding box
     */
    entity_prototype_collides(this: void,
        prototype: EntityPrototypeIdentification,
        position: MapPosition,
        use_map_generation_bounding_box: boolean,
        direction?: defines.direction): void

    /**
     * Find the logistic network with a cell closest to a given position.
     * @param force - Force the logistic network should belong to.
     */
    find_closest_logistic_network_by_position(this: void,
        position: MapPosition,
        force: ForceIdentification): void

    /**
     * Find decoratives of a given name in a given area.
     * 
     * If no filters are given, returns all decoratives in the search area. If multiple filters are specified, returns only decoratives matching every given filter. If no area and no position are given, the entire surface is searched.
     * @param table.exclude_soft - Soft decoratives can be drawn over rails.
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
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            from_layer?: string,
            to_layer?: string,
            exclude_soft?: boolean,
            limit?: number,
            invert?: boolean
        }): void

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
        center: MapPosition,
        radius: number,
        force?: LuaForce | string): void

    /**
     * Find entities in a given area.
     * 
     * If no area is given all entities on the surface are returned.
     * @example
     * Will evaluate to a list of all entities within given area. 
     * ```
     * game.surfaces["nauvis"].find_entities({{-10, -10}, {10, 10}})
     * ```
     *
     */
    find_entities(this: void,
        area?: BoundingBox): void

    /**
     * Find all entities of the given type or name in the given area.
     * 
     * If no filters (`name`, `type`, `force`, etc.) are given, this returns all entities in the search area. If multiple filters are specified, only entities matching all given filters are returned.
     * 
     * - If no `area` or `position` are given, the entire surface is searched.
     * - If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box).
     * - If `position` and `radius` are given, this returns the entities within the radius of the position. Looks for the center of entities.
     * - If `area` is specified, this returns the entities colliding with that area.
     * @param table.invert - Whether the filters should be inverted.
     * @param table.position - Has precedence over area field.
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
            position?: MapPosition,
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
            is_military_target?: boolean,
            has_item_inside?: LuaItemPrototype,
            invert?: boolean
        }): void

    /**
     * Find an entity of the given type at the given position. This checks both the exact position and the bounding box of the entity.
     * @param entity - Entity to look for.
     * @param position - Coordinates to look at.
     * @example
     * ```
     * game.player.selected.surface.find_entity('filter-inserter', {0,0})
     * ```
     *
     */
    find_entity(this: void,
        entity: string,
        position: MapPosition): void

    /**
     * Find the logistic network that covers a given position.
     * @param force - Force the logistic network should belong to.
     */
    find_logistic_network_by_position(this: void,
        position: MapPosition,
        force: ForceIdentification): void

    /**
     * Finds all of the logistics networks whose construction area intersects with the given position.
     * @param force - Force the logistic networks should belong to.
     */
    find_logistic_networks_by_construction_area(this: void,
        position: MapPosition,
        force: ForceIdentification): void

    /**
     * Find the enemy military target ({@link military entity | https://wiki.factorio.com/Military_units_and_structures}) closest to the given position.
     * @param table.force - The force the result will be an enemy of. Uses the player force if not specified.
     * @param table.max_distance - Radius of the circular search area.
     * @param table.position - Center of the search area.
     */
    find_nearest_enemy(this: void,
        table: {
            position: MapPosition,
            max_distance: number,
            force?: ForceIdentification
        }): void

    /**
     * Find the enemy entity-with-owner closest to the given position.
     * @param table.force - The force the result will be an enemy of. Uses the player force if not specified.
     * @param table.max_distance - Radius of the circular search area.
     * @param table.position - Center of the search area.
     */
    find_nearest_enemy_entity_with_owner(this: void,
        table: {
            position: MapPosition,
            max_distance: number,
            force?: ForceIdentification
        }): void

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
     */
    find_non_colliding_position(this: void,
        name: string,
        center: MapPosition,
        radius: number,
        precision: number,
        force_to_tile_center?: boolean): void

    /**
     * Find a non-colliding position within a given rectangle.
     * @param force_to_tile_center - Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Default false.
     * @param name - Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param precision - The step length from the given position as it searches, in tiles. Minimum value is 0.01.
     * @param search_space - The rectangle to search inside.
     */
    find_non_colliding_position_in_box(this: void,
        name: string,
        search_space: BoundingBox,
        precision: number,
        force_to_tile_center?: boolean): void

    /**
     * Find all tiles of the given name in the given area.
     * 
     * If no filters are given, this returns all tiles in the search area.
     * 
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     * @param table.has_tile_ghost - Can be further filtered by supplying a `force` filter.
     * @param table.invert - Whether the filters should be inverted.
     * @param table.position - Ignored if not given with radius.
     * @param table.radius - If given with position, will return all entities within the radius of the position.
     * @param table.to_be_deconstructed - Can be further filtered by supplying a `force` filter.
     */
    find_tiles_filtered(this: void,
        table: {
            area?: BoundingBox,
            position?: MapPosition,
            radius?: number,
            name?: string | string[],
            force?: ForceIdentification | ForceIdentification[],
            limit?: number,
            has_hidden_tile?: boolean,
            has_tile_ghost?: boolean,
            to_be_deconstructed?: boolean,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            invert?: boolean
        }): void

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
        }): void

    /**
     * Blocks and generates all chunks that have been requested using all available threads.
     */
    force_generate_chunk_requests(this: void): void

    /**
     * Get an iterator going over every chunk on this surface.
     */
    get_chunks(this: void): void

    /**
     * Gets the closest entity in the list to this position.
     * @param entities - The Entities to check
     */
    get_closest(this: void,
        position: MapPosition,
        entities: LuaEntity[]): void

    /**
     * Gets all tiles of the given types that are connected horizontally or vertically to the given tile position including the given tile position.
     * @remarks
     * This won't find tiles in non-generated chunks.
     *
     * @param area - The area to find connected tiles in. If provided the start position must be in this area.
     * @param include_diagonal - Include tiles that are connected diagonally.
     * @param position - The tile position to start at.
     * @param tiles - The tiles to search for.
     */
    get_connected_tiles(this: void,
        position: TilePosition,
        tiles: string[],
        include_diagonal?: boolean,
        area?: BoundingBox): void

    /**
     * Returns all the military targets (entities with force) on this chunk for the given force.
     * @param force - Entities of this force will be returned.
     * @param position - The chunk's position.
     */
    get_entities_with_force(this: void,
        position: ChunkPosition,
        force: LuaForce | string): void

    /**
     * The hidden tile name.
     * @param position - The tile position.
     */
    get_hidden_tile(this: void,
        position: TilePosition): void

    /**
     * Gets the map exchange string for the current map generation settings of this surface.
     */
    get_map_exchange_string(this: void): void

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
        position: MapPosition): void

    /**
     * Gets a random generated chunk position or 0,0 if no chunks have been generated on this surface.
     */
    get_random_chunk(this: void): void

    /**
     * Gets the resource amount of all resources on this surface
     */
    get_resource_counts(this: void): void

    /**
     * Gets the first script area by name or id.
     * @param key - The name or id of the area to get.
     */
    get_script_area(this: void,
        key?: string | number): void

    /**
     * Gets the script areas that match the given name or if no name is given all areas are returned.
     */
    get_script_areas(this: void,
        name?: string): void

    /**
     * Gets the first script position by name or id.
     * @param key - The name or id of the position to get.
     */
    get_script_position(this: void,
        key?: string | number): void

    /**
     * Gets the script positions that match the given name or if no name is given all positions are returned.
     */
    get_script_positions(this: void,
        name?: string): void

    /**
     * Gets the starting area radius of this surface.
     */
    get_starting_area_radius(this: void): void

    /**
     * Get the tile at a given position. An alternative call signature for this method is passing it a single {@link TilePosition | TilePosition}.
     * @remarks
     * Non-integer values will result in them being rounded down.
     *
     */
    get_tile(this: void,
        x: number,
        y: number): void

    /**
     * Gets the total amount of pollution on the surface by iterating over all of the chunks containing pollution.
     */
    get_total_pollution(this: void): void

    /**
     * Gets train stops matching the given filters.
     * @param table.force - The force to search. Not providing a force will match stops in any force.
     * @param table.name - The name(s) of the train stops. Not providing names will match any stop.
     */
    get_train_stops(this: void,
        table?: {
            name?: string | string[],
            force?: ForceIdentification
        }): void

    /**
     * @param force - The force to search. Not providing a force will match trains in any force.
     */
    get_trains(this: void,
        force?: ForceIdentification): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Is a given chunk generated?
     * @param position - The chunk's position.
     */
    is_chunk_generated(this: void,
        position: ChunkPosition): void

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
            position?: MapPosition,
            volume_modifier?: number,
            override_sound_type?: SoundType
        }): void

    /**
     * Spawn pollution at the given position.
     * @param amount - How much pollution to add.
     * @param source - Where to spawn the pollution.
     */
    pollute(this: void,
        source: MapPosition,
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
     */
    remove_script_area(this: void,
        id: number): void

    /**
     * Removes the given script position.
     */
    remove_script_position(this: void,
        id: number): void

    /**
     * Generates a path with the specified constraints (as an array of {@link PathfinderWaypoints | PathfinderWaypoint}) using the unit pathfinding algorithm. This path can be used to emulate pathing behavior by script for non-unit entities, such as vehicles. If you want to command actual units (such as biters or spitters) to move, use {@link LuaEntity::set_command | LuaEntity::set_command} instead.
     * 
     * The resulting path is ultimately returned asynchronously via {@link on_script_path_request_finished | on_script_path_request_finished}.
     * @param table.bounding_box - The dimensions of the object that's supposed to travel the path.
     * @param table.can_open_gates - Whether the path request can open gates. Defaults to `false`.
     * @param table.collision_mask - The list of masks the `bounding_box` collides with.
     * @param table.entity_to_ignore - Makes the pathfinder ignore collisions with this entity if it is given.
     * @param table.force - The force for which to generate the path, determining which gates can be opened for example.
     * @param table.goal - The position to find a path to.
     * @param table.path_resolution_modifier - Defines how coarse the pathfinder's grid is, where smaller values mean a coarser grid. Defaults to `0`, which equals a resolution of `1x1` tiles, centered on tile centers. Values range from `-8` to `8` inclusive, where each integer increment doubles/halves the resolution. So, a resolution of `-8` equals a grid of `256x256` tiles, and a resolution of `8` equals `1/256` of a tile.
     * @param table.pathfind_flags - Flags that affect pathfinder behavior.
     * @param table.radius - How close the pathfinder needs to get to its `goal` (in tiles). Defaults to `1`.
     * @param table.start - The position from which to start pathfinding.
     */
    request_path(this: void,
        table: {
            bounding_box: BoundingBox,
            collision_mask: CollisionMaskWithFlags | string[],
            start: MapPosition,
            goal: MapPosition,
            force: ForceIdentification,
            radius?: number,
            pathfind_flags?: PathfinderFlags,
            can_open_gates?: boolean,
            path_resolution_modifier?: number,
            entity_to_ignore?: LuaEntity
        }): void

    /**
     * Request that the game's map generator generate chunks at the given position for the given radius on this surface.
     * @param position - Where to generate the new chunks.
     * @param radius - The chunk radius from `position` to generate new chunks in.
     */
    request_to_generate_chunks(this: void,
        position: MapPosition,
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
     */
    set_multi_command(this: void,
        table: {
            command: Command,
            unit_count: number,
            force?: ForceIdentification,
            unit_search_distance?: number
        }): void

    /**
     * Set tiles at specified locations. Can automatically correct the edges around modified tiles.
     * 
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
     */
    spill_item_stack(this: void,
        position: MapPosition,
        items: ItemStackIdentification,
        enable_looted?: boolean,
        force?: LuaForce | string,
        allow_belts?: boolean): void

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
     * 
     * The LUT is multiplied by `((1 - weight) + brightness * weight)` and result is clamped to range [0, 1].
     * 
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
     * Amount of darkness at the current time, as a number in range [0, 1].
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
     * This surface's index in {@link LuaGameScript::surfaces | LuaGameScript::surfaces} (unique ID). It is assigned when a surface is created, and remains so until it is {@link deleted | on_surface_deleted}. Indexes of deleted surfaces can be reused.
     */
    readonly index: number

    /**
     * The generation settings for this surface. These can be modified after surface generation, but note that this will not retroactively update the surface. To manually regenerate it, {@link LuaSurface::regenerate_entity | LuaSurface::regenerate_entity}, {@link LuaSurface::regenerate_decorative | LuaSurface::regenerate_decorative}, and {@link LuaSurface::delete_chunk | LuaSurface::delete_chunk} can be used.
     */
    map_gen_settings: MapGenSettings

    /**
     * The minimal brightness during the night. Defaults to `0.15`. This has an effect on both rendering and game mechanics such as biter spawns and solar power.
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
     * Current wind speed in tiles per tick.
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
    help(this: void): void

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
     * The current level of this technology. For level-based technology writing to this is the same as researching the technology to the previous level. Writing the level will set {@link LuaTechnology::enabled | LuaTechnology::enabled} to `true`.
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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
     * The number of research units required for this technology.
     * @remarks
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype::ignore_tech_cost_multiplier | LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     *
     */
    readonly research_unit_count: number

    /**
     * The count formula, if this research has any. See the {@link wiki | https://wiki.factorio.com/Prototype/Technology#Technology_data} for details.
     */
    readonly research_unit_count_formula?: string

    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: number

    /**
     * The types of ingredients that labs will require to research this technology.
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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnologyPrototype | LuaTechnologyPrototype} object.
     */
    readonly prerequisites: {[key: string]: LuaTechnologyPrototype}

    /**
     * The number of research units required for this technology.
     * @remarks
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype::ignore_tech_cost_multiplier | LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     *
     */
    readonly research_unit_count: number

    /**
     * The count formula, if this research has any. See the {@link wiki | https://wiki.factorio.com/Prototype/Technology#Technology_data} for details.
     */
    readonly research_unit_count_formula?: string

    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: number

    /**
     * The types of ingredients that labs will require to research this technology.
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
        layer: CollisionMaskLayer): void

    /**
     * Gets all tile ghosts on this tile.
     * @param force - Get tile ghosts of this force.
     */
    get_tile_ghosts(this: void,
        force?: ForceIdentification): void

    /**
     * Does this tile have any tile ghosts on it.
     * @param force - Check for tile ghosts of this force.
     */
    has_tile_ghost(this: void,
        force?: ForceIdentification): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Orders deconstruction of this tile by the given force.
     * @param force - The force whose robots are supposed to do the deconstruction.
     * @param player - The player to set the last_user to if any.
     */
    order_deconstruction(this: void,
        force: ForceIdentification,
        player?: PlayerIdentification): void

    /**
     * Is this tile marked for deconstruction?
     * @param force - The force who did the deconstruction order.
     */
    to_be_deconstructed(this: void,
        force?: ForceIdentification): void

    /**
     * The name of the {@link LuaTilePrototype | LuaTilePrototype} hidden under this tile, if any. During normal gameplay, only {@link non-mineable | LuaTilePrototype::mineable_properties} tiles can become hidden. This can however be circumvented with {@link LuaSurface::set_hidden_tile | LuaSurface::set_hidden_tile}.
     */
    readonly hidden_tile?: string

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
    readonly position: TilePosition

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
    help(this: void): void

    readonly allowed_neighbors: {[key: string]: LuaTilePrototype}

    readonly automatic_neighbors: boolean

    /**
     * Autoplace specification for this prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification

    /**
     * False if this tile is not allowed in blueprints regardless of the ability to build it.
     */
    readonly can_be_part_of_blueprint: boolean

    /**
     * True if building this tile should check for colliding entities above and prevent building if such are found. Also during mining tiles above this tile checks for entities colliding with this tile and prevents mining if such are found.
     */
    readonly check_collision_with_entities: boolean

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
     * Items that when placed will produce this tile, if any. Construction bots will choose the first item in the list to build this tile.
     */
    readonly items_to_place_this?: ItemStackDefinition[]

    readonly layer: number

    readonly localised_description: LocalisedString

    readonly localised_name: LocalisedString

    readonly map_color: Color

    readonly mineable_properties: {
        
        /**
         * Is this tile mineable at all?
         */
        minable: boolean,
        
        /**
         * Prototype name of the particle produced when mining this tile. Will only be present if this tile produces any particle during mining.
         */
        mining_particle?: string,
        
        /**
         * Energy required to mine a tile.
         */
        mining_time: number,
        
        /**
         * Products obtained by mining this tile.
         */
        products: Product[]
    }

    /**
     * Name of this prototype.
     */
    readonly name: string

    /**
     * If this tile needs correction logic applied when it's generated in the world..
     */
    readonly needs_correction: boolean

    /**
     * The next direction of this tile, if any. Used when a tile has multiple directions (such as hazard concrete)
     */
    readonly next_direction?: LuaTilePrototype

    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string

    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
     */
    get_contents(this: void): void

    /**
     * Gets a mapping of the train's fluid inventory.
     */
    get_fluid_contents(this: void): void

    /**
     * Get the amount of a particular fluid stored in the train.
     * @param fluid - Fluid name to count. If not given, counts all fluids.
     */
    get_fluid_count(this: void,
        fluid?: string): void

    /**
     * Get the amount of a particular item stored in the train.
     * @param item - Item name to count. If not given, counts all items.
     */
    get_item_count(this: void,
        item?: string): void

    /**
     * Gets all rails under the train.
     */
    get_rails(this: void): void

    /**
     * Go to the station specified by the index in the train's schedule.
     */
    go_to_station(this: void,
        index: number): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Insert a stack into the train.
     */
    insert(this: void,
        stack: ItemStackIdentification): void

    /**
     * Inserts the given fluid into the first available location in this train.
     */
    insert_fluid(this: void,
        fluid: Fluid): void

    /**
     * Checks if the path is invalid and tries to re-path if it isn't.
     * @param force - Forces the train to re-path regardless of the current path being valid or not.
     */
    recalculate_path(this: void,
        force?: boolean): void

    /**
     * Remove some fluid from the train.
     */
    remove_fluid(this: void,
        fluid: Fluid): void

    /**
     * Remove some items from the train.
     * @param stack - The amount and type of items to remove
     */
    remove_item(this: void,
        stack: ItemStackIdentification): void

    /**
     * The rail at the back end of the train, if any.
     */
    readonly back_rail?: LuaEntity

    /**
     * The back stock of this train, if any. The back of the train is at the opposite end of the {@link front | LuaTrain::front_stock}.
     */
    readonly back_stock?: LuaEntity

    /**
     * The cargo carriages the train contains.
     */
    readonly cargo_wagons: LuaEntity[]

    /**
     * The rolling stocks this train is composed of, with the numbering starting at the {@link front | LuaTrain::front_stock} of the train.
     */
    readonly carriages: LuaEntity[]

    /**
     * The fluid carriages the train contains.
     */
    readonly fluid_wagons: LuaEntity[]

    /**
     * The rail at the front end of the train, if any.
     */
    readonly front_rail?: LuaEntity

    /**
     * The front stock of this train, if any. The front of the train is in the direction that a majority of locomotives are pointing in. If it's a tie, the North and West directions take precedence.
     */
    readonly front_stock?: LuaEntity

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
     * 
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
     * The path this train is using, if any.
     */
    readonly path?: LuaRailPath

    /**
     * The destination rail this train is currently pathing to, if any.
     */
    readonly path_end_rail?: LuaEntity

    /**
     * The destination train stop this train is currently pathing to, if any.
     */
    readonly path_end_stop?: LuaEntity

    readonly rail_direction_from_back_rail: defines.rail_direction

    readonly rail_direction_from_front_rail: defines.rail_direction

    /**
     * The riding state of this train.
     */
    readonly riding_state: RidingState

    /**
     * This train's current schedule, if any. Set to `nil` to clear.
     * @remarks
     * The schedule can't be changed by modifying the returned table. Instead, changes must be made by assigning a new table to this attribute.
     *
     */
    schedule?: TrainSchedule

    /**
     * The signal this train is arriving or waiting at, if any.
     */
    readonly signal?: LuaEntity

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
     * The train stop this train is stopped at, if any.
     */
    readonly station?: LuaEntity

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
    help(this: void): void

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
    help(this: void): void

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
        position: number): void

    /**
     * Can an item be inserted at the back of this line?
     */
    can_insert_at_back(this: void): void

    /**
     * Remove all items from this transport line.
     */
    clear(this: void): void

    /**
     * Get counts of all items on this line, similar to how {@link LuaInventory::get_contents | LuaInventory::get_contents} does.
     */
    get_contents(this: void): void

    /**
     * Count some or all items on this line, similar to how {@link LuaInventory::get_item_count | LuaInventory::get_item_count} does.
     * @param item - Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(this: void,
        item?: string): void

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): void

    /**
     * Insert items at a given position.
     * @param items - Items to insert.
     * @param position - Where on the line to insert the items.
     */
    insert_at(this: void,
        position: number,
        items: ItemStackIdentification): void

    /**
     * Insert items at the back of this line.
     */
    insert_at_back(this: void,
        items: ItemStackIdentification): void

    /**
     * Returns whether the associated internal transport line of this line is the same as the others associated internal transport line.
     * @remarks
     * This can return true even when the {@link LuaTransportLine::owner | LuaTransportLine::owner}s are different (so `this == other` is false), because the internal transport lines can span multiple tiles.
     *
     */
    line_equals(this: void,
        other: LuaTransportLine): void

    /**
     * Remove some items from this line.
     * @param items - Items to remove.
     */
    remove_item(this: void,
        items: ItemStackIdentification): void

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
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
    help(this: void): void

    /**
     * Make this group autonomous. Autonomous groups will automatically attack polluted areas. Autonomous groups aren't considered to be {@link script-driven | LuaUnitGroup::is_script_driven}.
     */
    set_autonomous(this: void): void

    /**
     * Give this group a command.
     */
    set_command(this: void,
        command: Command): void

    /**
     * Give this group a distraction command.
     */
    set_distraction_command(this: void,
        command: Command): void

    /**
     * Make the group start moving even if some of its members haven't yet arrived.
     */
    start_moving(this: void): void

    /**
     * The command given to this group, if any.
     */
    readonly command?: Command

    /**
     * The distraction command given to this group, if any.
     */
    readonly distraction_command?: Command

    /**
     * The force of this unit group.
     */
    readonly force: LuaForce

    /**
     * The group number for this unit group.
     */
    readonly group_number: number

    /**
     * Whether this unit group is controlled by a script or by the game engine. This can be changed using {@link LuaUnitGroup::set_autonomous | LuaUnitGroup::set_autonomous}.
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
    readonly position: MapPosition

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
    help(this: void): void

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
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string

    /**
     * Whether this is a special signal. The `everything`, `anything`, `each`, and `unknown` signals are considered special.
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
    help(this: void): void

    /**
     * The emissions of this energy source in `pollution/Joule`. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
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
    help(this: void): void

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

    'position': MapPosition

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
     * How the element should interact with game controllers. Defaults to {@link defines.game_controller_interaction.normal | defines.game_controller_interaction.normal}.
     */
    'game_controller_interaction'?: defines.game_controller_interaction

    /**
     * Whether the child element is ignored by interaction. Defaults to `false`.
     */
    'ignored_by_interaction'?: boolean

    /**
     * Location in its parent that the child element should slot into. By default, the child will be appended onto the end.
     */
    'index'?: number

    /**
     * Name of the child element. It must be unique within the parent element.
     */
    'name'?: string

    /**
     * Whether this element will raise {@link on_gui_hover | on_gui_hover} and {@link on_gui_leave | on_gui_leave}. Defaults to `false`.
     */
    'raise_hover_events'?: boolean

    /**
     * The name of the style prototype to apply to the new element.
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
     * Whether the button will automatically toggle when clicked. Defaults to `false`.
     */
    'auto_toggle'?: boolean

    /**
     * Which mouse buttons the button responds to. Defaults to `"left-and-right"`.
     */
    'mouse_button_filter'?: MouseButtonFlags

    /**
     * The initial toggled state of the button. Defaults to `false`.
     */
    'toggled'?: boolean

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
    'position': MapPosition

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
     * Filters describing what to show in the selection window. The applicable filter depends on the `elem_type`.
     */
    'elem_filters'?: ItemPrototypeFilter | TilePrototypeFilter | EntityPrototypeFilter | FluidPrototypeFilter | RecipePrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | EquipmentPrototypeFilter | TechnologyPrototypeFilter

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
    'position'?: MapPosition

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
     * Whether the button will automatically toggle when clicked. Defaults to `false`.
     */
    'auto_toggle'?: boolean

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

    /**
     * The initial toggled state of the button. Defaults to `false`.
     */
    'toggled'?: boolean

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
     * If fast_replace is true simulate fast replace using this character.
     */
    'character'?: LuaEntity

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
    'position': MapPosition

    /**
     * If true; {@link defines.events.script_raised_built | defines.events.script_raised_built} will be fired on successful entity creation.
     */
    'raise_built'?: boolean

    /**
     * Source entity. Used for beams, projectiles, and highlight-boxes.
     */
    'source'?: LuaEntity | MapPosition

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
    'target'?: LuaEntity | MapPosition

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
 * Applies to variant case `artillery-projectile`
 *
 */
interface LuaSurfaceCreateEntityParamsArtilleryProjectile extends LuaSurfaceCreateEntityParams {
    'max_range'?: number

    'speed': number

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
    'source_position'?: MapPosition

    /**
     * Absolute target position that can be used instead of target entity (entity has precedence if both entity and position are defined).
     */
    'target_position'?: MapPosition

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
     * The bounding box defining the highlight box using absolute map coordinates. If specified, the general `position` parameter still needs to be present, but will be ignored. If not specified, the game falls back to the `source` parameter first, then the `target` parameter second. One of these three parameters need to be specified.
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
    'max_range'?: number

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
 * Applies to variant case `stream`
 *
 */
interface LuaSurfaceCreateEntityParamsStream extends LuaSurfaceCreateEntityParams {
    /**
     * Source position will be offset by this value when rendering the stream.
     */
    'source_offset'?: Vector

    /**
     * Absolute source position that can be used instead of source entity (entity has precedence if both entity and position are defined).
     */
    'source_position'?: MapPosition

    /**
     * Absolute target position that can be used instead of target entity (entity has precedence if both entity and position are defined).
     */
    'target_position'?: MapPosition

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

