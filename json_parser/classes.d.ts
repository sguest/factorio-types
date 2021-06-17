// Factorio class definitions for API version 1.1.35

/**
 * Collection of settings for overriding default ai behavior.
 */
interface LuaAISettings {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for accumulators.
 */
interface LuaAccumulatorControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a achievement.
 */
interface LuaAchievementPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a ammo category.
 */
interface LuaAmmoCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for arithmetic combinators.
 */
interface LuaArithmeticCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of an autoplace control.
 */
interface LuaAutoplaceControlPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
        event: number): (arg0: EventData) => any

    /**
     * Gets the mod event order as a string.
     */
    get_event_order(this: void): string

    /**
     * Register a function to be run when mod configuration changes. This is called when the game version or any mod version changes; when any mod is added or removed; or when prototypes or startup mod settings have changed. It allows the mod to make any changes it deems appropriate to both the data structures in its `global` table or to the game state through {@link LuaGameScript | LuaGameScript}.
     * @param f - The handler for this event. Passing `nil` will unregister it.
     */
    on_configuration_changed(this: void,
        f: (arg0: ConfigurationChangedData) => any): void

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
     * Register for the [on_built_entity](on_built_entity) event, limiting it to only be received when a `"fast-inserter"` is built. 
     * ```
     * script.on_event(defines.events.on_built_entity,
     * function(event) game.print("Gotta go fast!") end,
     * {{filter = "name", name = "fast-inserter"}})
     * ```
     *
     */
    on_event(this: void,
        event: defines.events | defines.events[] | string,
        f: (arg0: EventData) => any,
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
        f: () => any): void

    /**
     * Register a function to be run on save load. This is only called for mods that have been part of the save previously, or for players connecting to a running multiplayer session. It gives the mod the opportunity to do some very specific actions, should it need to. Doing anything other than these three will lead to desyncs, which breaks multiplayer and replay functionality. Access to {@link LuaGameScript | LuaGameScript} and {@link LuaRendering | LuaRendering} is not available. The `global` table can be accessed and is safe to read from, but not write to.
     * For all other purposes, {@link LuaBootstrap::on_init | LuaBootstrap::on_init}, {@link LuaBootstrap::on_configuration_changed | LuaBootstrap::on_configuration_changed} or migration scripts should be used instead.
     * @param f - The handler for this event. Passing `nil` will unregister it.
     */
    on_load(this: void,
        f: () => any): void

    /**
     * Register a handler to run every nth-tick(s). When the game is on tick 0 it will trigger all registered handlers.
     * @param f - The handler to run. Passing `nil` will unregister it for the provided nth-tick(s).
     * @param tick - The nth-tick(s) to invoke the handler on. Passing `nil` as the only parameter will unregister all nth-tick handlers.
     */
    on_nth_tick(this: void,
        f: (arg0: NthTickEventData) => any,
        tick: number | number[]): void

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
            message: string,
            player_index: number
        }): void

    /**
     * Raise an event. Only events generated with {@link LuaBootstrap::generate_event_name | LuaBootstrap::generate_event_name} and the following can be raised:
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
        data: table,
        event: number): void

    /**
     * Raises {@link on_market_item_purchased | on_market_item_purchased} with the given parameters.
     * @param table.count - The amount of offers purchased.
     * @param table.market - The market entity.
     * @param table.offer_index - The index of the offer purchased.
     * @param table.player_index - The player who did the purchasing.
     */
    raise_market_item_purchased(this: void,
        table: {
            count: number,
            market: LuaEntity,
            offer_index: number,
            player_index: number
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
            entity: LuaEntity,
            from_player: boolean,
            player_index: number
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
     * Limit the [on_built_entity](on_built_entity) event to only be received when either a `unit` or a `unit-spawner` is built. 
     * ```
     * script.set_event_filter(defines.events.on_built_entity, {{filter = "type", type = "unit"}, {filter = "type", type = "unit-spawner"}})
     * ```
     * Limit the [on_entity_damaged](on_entity_damaged) event to only be received when a `rail` is damaged by an `acid` attack. 
     * ```
     * script.set_event_filter(defines.events.on_entity_damaged, {{filter = "rail"}, {filter = "damage-type", type = "acid", mode = "and"}})
     * ```
     *
     */
    set_event_filter(this: void,
        event: number,
        filters?: EventFilter[]): void

}

/**
 * A reference to the burner energy source owned by a specific {@link LuaEntity | LuaEntity} or {@link LuaEquipment | LuaEquipment}.
 */
interface LuaBurner {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a burner energy source.
 */
interface LuaBurnerPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

interface LuaCombinatorControlBehavior extends LuaControlBehavior {
    /**
     * Gets the value of a specific signal sent by this combinator behavior last tick or nil if the signal didn't exist.
     * @param signal - The signal to get
     * @returns The value or `nil` if none.
     */
    get_signal_last_tick(this: void,
        signal: SignalID): number | null

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
        fn: (arg0: CustomCommandData) => any,
        help: LocalisedString,
        name: string): void

    /**
     * Remove a custom console command.
     * @param name - The name of the command to remove (case sensitive).
     * @returns Whether the command was successfully removed. Returns `false` if the command didn't exist.
     */
    remove_command(this: void,
        name: string): boolean

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

}

/**
 * Control behavior for container entities.
 */
interface LuaContainerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
            count: number,
            index: number
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
     * This will silently fail if personal logistics are not researched.
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
     * Sets the personal request and trash to the given values.
     * @remarks
     * This will silently return an empty value (.name will be nil) if personal logistics aren't researched yet.
     *
     * @param slot_index - The slot to get.
     */
    get_personal_logistic_slot(this: void,
        slot_index: number): PersonalLogisticParameters

    /**
     * Sets the vehicle logistic request and trash to the given values.
     * @remarks
     * This will silently return an empty value (.name will be nil) if the vehicle does not use logistics.
     *
     * @param slot_index - The slot to get.
     */
    get_vehicle_logistic_slot(this: void,
        slot_index: number): PersonalLogisticParameters

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
     * Returns whether the player is holding a blueprint, it takes into account a blueprint as an item as well as blueprint from the blueprint record from the blueprint library. Note that the is_cursor_blueprint and get_cursor_blueprint_entities refer to the currently selected blueprint, so it returns blueprint related information also when holding a blueprint book with a blueprint being selected in it.
     */
    is_cursor_blueprint(this: void): boolean

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
     * @param table.type - Where to point to. This field determines what other fields are mandatory. May be `"nowhere"`, `"goal"`, `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"`, or `"item_stack"`.
     */
    set_gui_arrow(this: void,
        table: {
            type: string
        }): void

    /**
     * Sets the personal request and trash to the given values.
     * @remarks
     * This will silently fail if personal logistics are not researched.
     *
     * @param slot_index - The slot to set/
     * @returns If the slot was set.
     */
    set_personal_logistic_slot(this: void,
        slot_index: number,
        value: PersonalLogisticParameters): boolean

    /**
     * Sets the vehicle logistic request and trash to the given values.
     * @remarks
     * This will silently fail if the spider does not use logistics.
     *
     * @param slot_index - The slot to set/
     * @returns If the slot was set.
     */
    set_vehicle_logistic_slot(this: void,
        slot_index: number,
        value: PersonalLogisticParameters): boolean

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
        circuit_connector?: defines.circuit_connector_id,
        wire: defines.wire_type): LuaCircuitNetwork | null

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

}

/**
 * Prototype of a custom input.
 */
interface LuaCustomInputPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * Prototype of a damage.
 */
interface LuaDamagePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for decider combinators.
 */
interface LuaDeciderCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of an optimized decorative.
 */
interface LuaDecorativePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of an electric energy source.
 */
interface LuaElectricEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
        position: Position,
        target: LuaEntity): boolean

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
            create_build_effect_smoke?: boolean,
            force?: ForceIdentification,
            position: Position,
            surface?: LuaSurface
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
        by_player?: PlayerIdentification,
        entity: LuaEntity): {[key: string]: number}

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
        dealer?: LuaEntity,
        force: ForceIdentification,
        type?: string): number

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
        cause?: LuaEntity,
        force?: ForceIdentification): boolean

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
        circuit_connector?: defines.circuit_connector_id,
        wire: defines.wire_type): LuaCircuitNetwork | null

    /**
     * @remarks
     * Applies to subclasses: Rail
     *
     * @returns Rail connected in the specified manner to this one.
     */
    get_connected_rail(this: void,
        table: {
            rail_connection_direction: defines.rail_connection_direction,
            rail_direction: defines.rail_direction
        }): LuaEntity

    /**
     * Get the rails that this signal is connected to.
     * @remarks
     * Applies to subclasses: RailSignal
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
     * @returns The amounts, indexed by fluid names.
     */
    get_fluid_contents(this: void): {[key: string]: number}

    /**
     * Get the amount of all or some fluid in this entity.
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
        circuit_connector?: defines.circuit_connector_id,
        signal: SignalID): number

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
     * @param index - Index of the requested transport line.
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
     * Same as {@link LuaEntity::has_flag | LuaEntity::has_flag} but targets the inner entity on a entity ghost.
     * @remarks
     * Applies to subclasses: EntityGhost
     *
     * @param flag - The flag to test
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
     * Test whether this entity's prototype has a flag set.
     * @remarks
     * `entity.has_flag(f)` is a shortcut for `entity.prototype.has_flag(f)`.
     *
     * @param flag - The flag to test
     * @returns `true` if the entity has the given flag set.
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
     * @remarks
     * Applies to subclasses: CraftingMachine
     *
     * @returns `true` if this machine is currently crafting.
     */
    is_crafting(this: void): boolean

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
            force?: boolean,
            ignore_minable?: boolean,
            inventory?: LuaInventory,
            raise_destroyed?: boolean
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
            direction?: defines.direction,
            force: ForceIdentification,
            player?: PlayerIdentification,
            target: EntityPrototypeIdentification
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
            amount: number,
            maximum_temperature?: number,
            minimum_temperature?: number,
            name: string,
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
        extra_time?: number,
        force: ForceIdentification): void

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
            raise_revive?: boolean,
            return_item_request_proxy?: boolean
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
            by_player?: PlayerIdentification,
            enable_looted?: boolean,
            force?: LuaForce | string,
            reverse?: boolean,
            spill_items?: boolean
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
        item: string,
        slot_index: number): void

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
        filter: InfinityInventoryFilter,
        index: number): void

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
     * Applies to subclasses: CraftingMachine
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
            raise_revive?: boolean,
            return_item_request_proxy?: boolean
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
     * Does this prototype have a flag enabled?
     * @param flag - The flag to check. Must be one of
     */
    has_flag(this: void,
        flag: string): boolean

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * Prototype of a equipment category.
 */
interface LuaEquipmentCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
            by_player?: PlayerIdentification,
            name: string,
            position?: Position
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
            by_player?: PlayerIdentification,
            equipment?: LuaEquipment,
            position?: Position
        }): SimpleItemStack | null

    /**
     * Remove all equipment from the grid.
     * @param by_player - If provided, the action is done 'as' this player and [on_player_removed_equipment](on_player_removed_equipment) is triggered.
     * @returns Count of each removed equipment, indexed by their prototype names.
     */
    take_all(this: void,
        by_player?: PlayerIdentification): {[key: string]: number}

}

/**
 * Prototype of an equipment grid.
 */
interface LuaEquipmentGridPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a modular equipment.
 */
interface LuaEquipmentPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Encapsulates statistic data for different parts of the game. In the context of flow statistics, `input` and `output` describe on which side of the associated GUI the values are shown. Input values are shown on the left side, output values on the right side.
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
            count?: boolean,
            input: boolean,
            name: string,
            precision_index: defines.flow_precision_index
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
        count: number,
        name: string): void

    /**
     * Sets the total input count for a given prototype.
     * @param count - The new count. The type depends on the instance of the statistics.
     * @param name - The prototype name.
     */
    set_input_count(this: void,
        count: number,
        name: string): void

    /**
     * Sets the total output count for a given prototype.
     * @param count - The new count. The type depends on the instance of the statistics.
     * @param name - The prototype name.
     */
    set_output_count(this: void,
        count: number,
        name: string): void

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
        fluid?: FluidIdentification,
        index: number): {[key: string]: number}

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
        filter?: FluidBoxFilterSpec,
        index: number): boolean

}

/**
 * A prototype of a fluidbox owned by some {@link LuaEntityPrototype | LuaEntityPrototype}.
 */
interface LuaFluidBoxPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a fluid energy source.
 */
interface LuaFluidEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a fluid.
 */
interface LuaFluidPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a font.
 */
interface LuaFontPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
     * game.player.force.chart(game.player.surface,
     *                         {{x = -1024, y = -1024}, {x = 1024, y = 1024}})
     * ```
     *
     */
    chart(this: void,
        area: BoundingBox,
        surface: SurfaceIdentification): void

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
        area?: BoundingBox,
        surface: SurfaceIdentification): LuaCustomChartTag[]

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
     * Will this force attack members of another force?
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
     * Is this force a friend?
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
        link_id: number,
        prototype: EntityPrototypeIdentification): LuaInventory

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
        position: ChunkPosition,
        surface: SurfaceIdentification): boolean

    /**
     * Is the given chunk currently charted and visible (not covered by fog of war) on the map.
     */
    is_chunk_visible(this: void,
        position: ChunkPosition,
        surface: SurfaceIdentification): boolean

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
            override_sound_type?: SoundType,
            path: SoundPath,
            position?: Position,
            volume_modifier?: number
        }): void

    /**
     * Print text to the chat console of all players on this force.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        color?: Color,
        message: LocalisedString): void

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
     * Stop attacking members of a given force.
     * @param cease_fire - When `true`, this force won't attack `other`; otherwise it will.
     */
    set_cease_fire(this: void,
        cease_fire: boolean,
        other: ForceIdentification): void

    /**
     * Friends have unrestricted access to buildings and turrets won't fire at them.
     */
    set_friend(this: void,
        friend: boolean,
        other: ForceIdentification): void

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
        hand_crafting_disabled: boolean,
        recipe: string | LuaRecipe): void

    /**
     * Sets the count of a given item launched in rockets.
     * @param count - The count to set
     * @param item - The item to set
     */
    set_item_launched(this: void,
        count: number,
        item: string): void

    /**
     * Sets the saved progress for the given technology. The technology must not be in progress, must not be completed, and the new progress must be < 100%.
     * @param progress - Progress as a percent. Set to `nil` to remove the saved progress.
     * @param technology - The technology
     */
    set_saved_technology_progress(this: void,
        progress: number,
        technology: TechnologyIdentification): void

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
        modifier: number,
        turret: string): void

    /**
     * @param position - The chunk position to unchart.
     * @param surface - Surface to unchart on.
     */
    unchart_chunk(this: void,
        position: ChunkPosition,
        surface: SurfaceIdentification): void

}

/**
 * Prototype of a fuel category.
 */
interface LuaFuelCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
            force?: ForceIdentification,
            name?: string | string[],
            surface?: SurfaceIdentification
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
        destination: ForceIdentification,
        source: ForceIdentification): void

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
            override_sound_type?: SoundType,
            path: SoundPath,
            position?: Position,
            volume_modifier?: number
        }): void

    /**
     * Print text to the chat console all players.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        color?: Color,
        message: LocalisedString): void

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
            can_continue: boolean,
            game_finished: boolean,
            next_level: string,
            player_won: boolean,
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
            image?: string,
            point_to?: GuiArrowSpecification,
            style?: string,
            text: LocalisedString,
            wrapper_frame_style?: string
        }): void

    /**
     * Convert a table to a JSON string
     */
    table_to_json(this: void,
        data: table): string

    /**
     * Take a screenshot and save it to a file.
     * @remarks
     * If Factorio is running headless, this function will do nothing.
     *
     * @param table.allow_in_replay - If true, the screenshot will be saved even during replay playback, otherwise this function call does nothing in replays.
     * @param table.anti_alias - Render in double resolution and scale down (including GUI)?
     * @param table.by_player - If defined, the screenshot will only be taken for this player.
     * @param table.daytime - Overrides current surface daytime for duration of screenshot rendering.
     * @param table.force_render - Screenshot requests are processed in between update and render. The game may skip rendering (drop frames) if previous frame has not finished rendering or the game simulation starts to fall under 60 updates per second. If force_render is set to true, the game won't drop frames and process the screenshot request at the end of the update in which the request was created. This is not honored on multiplayer clients that are catching up to server.
     * @param table.path - Path to save the screenshot in
     * @param table.position - If defined, the screenshot will be centered on this position.
     * @param table.quality - The render quality if using jpg format (0-100 inclusive).
     * @param table.resolution - Maximum allowed resolution is 16384x16384 (resp. 8192x8192 when anti_alias is true), but maximum recommended resolution is 4096x4096 (resp. 2048x2048).
     * @param table.show_cursor_building_preview - When true, and player is specified, building preview for item in player's cursor will be rendered also.
     * @param table.show_entity_info - Include entity info (alt-mode)?
     * @param table.show_gui - Include game GUI in the screenshot?
     * @param table.surface - If defined, the screenshot will be taken on this surface.
     * @param table.water_tick - Overrides tick of water animation (if animated water is enabled).
     */
    take_screenshot(this: void,
        table: {
            allow_in_replay?: boolean,
            anti_alias?: boolean,
            by_player?: PlayerIdentification,
            daytime?: number,
            force_render?: boolean,
            path?: string,
            player?: PlayerIdentification,
            position?: Position,
            quality?: number,
            resolution?: Position,
            show_cursor_building_preview?: boolean,
            show_entity_info?: boolean,
            show_gui?: boolean,
            surface?: SurfaceIdentification,
            water_tick?: number,
            zoom?: number
        }): void

    /**
     * @param table.by_player - If defined, the screenshot will only be taken for this player.
     * @param table.force - The force to use. If not given the `"player`" force is used.
     * @param table.path - Path to save the screenshot in.
     * @param table.quality - The render quality if using jpg format (0-100 inclusive).
     * @param table.selected_technology - The technology to highlight.
     * @param table.skip_disabled - If `true`, disabled technologies will be skipped. Their successors will be attached to the disabled technology's parents. Defaults to `false`.
     */
    take_technology_screenshot(this: void,
        table: {
            by_player?: PlayerIdentification,
            force?: ForceIdentification,
            path?: string,
            quality?: number,
            selected_technology?: TechnologyIdentification,
            skip_disabled?: boolean
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
        append?: boolean,
        data: LocalisedString,
        filename: string,
        for_player?: number): void

}

/**
 * An abstract base class for behaviors that support switching the entity on or off based on some condition.
 */
interface LuaGenericOnOffControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Item group or subgroup.
 */
interface LuaGroup {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * An element of a custom GUI. This type is used to represent any kind of a GUI element - labels, buttons and frames are all instances of this type. Just like {@link LuaEntity | LuaEntity}, different kinds of elements support different attributes; attempting to access an attribute on an element that doesn't support it (for instance, trying to access the `column_count` of a `textfield`) will result in a runtime error.
 * The following types of GUI element are supported:
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
     * @param table.anchor - Where to position the child element when in the `relative` element.
     * @param table.caption - Text displayed on the child element. For frames, this is their title. For other elements, like buttons or labels, this is the content. Whilst this attribute may be used on all elements, it doesn't make sense for tables and flows as they won't display it.
     * @param table.enabled - Whether the child element is enabled. Defaults to `true`.
     * @param table.ignored_by_interaction - Whether the child element is ignored by interaction. Defaults to `false`.
     * @param table.index - Location in its parent that the child element should slot into. By default, the child will be appended onto the end.
     * @param table.name - Name of the child element.
     * @param table.style - Style of the child element.
     * @param table.tags - [Tags](Tags) associated with the child element.
     * @param table.tooltip - Tooltip of the child element.
     * @param table.type - The kind of element to add. Has to be one of the GUI element types listed at the top of this page.
     * @param table.visible - Whether the child element is visible. Defaults to `true`.
     * @returns The added GUI element.
     */
    add(this: void,
        table: {
            anchor?: GuiAnchor,
            caption?: LocalisedString,
            enabled?: boolean,
            ignored_by_interaction?: boolean,
            index?: number,
            name?: string,
            style?: string,
            tags?: Tags,
            tooltip?: LocalisedString,
            type: string,
            visible?: boolean
        }): LuaGuiElement

    /**
     * Inserts a string at the end or at the given index of this dropdown or listbox.
     * @param index - The index at which to insert the item.
     * @param string - The text to insert.
     */
    add_item(this: void,
        index?: number,
        string: LocalisedString): void

    /**
     * Adds the given tab and content widgets to this tabbed pane as a new tab.
     * @remarks
     * Applies to subclasses: tabbed-pane
     *
     * @param content - The content to show when this tab is selected. Can be any type of GUI element.
     * @param tab - The tab to add, must be a GUI element of type "tab".
     */
    add_tab(this: void,
        content: LuaGuiElement,
        tab: LuaGuiElement): void

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
        end: number,
        start: number): void

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
        maximum: number,
        minimum: number): void

    /**
     * Sets the minimum distance this slider can move.
     * @remarks
     * The minimum distance can't be > (max - min).
     *
     */
    set_slider_value_step(this: void,
        value: number): void

}

/**
 * Prototype of a heat energy source.
 */
interface LuaHeatEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for inserters.
 */
interface LuaInserterControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
        filter: string,
        index: number): boolean

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
        filter: string,
        index: number): boolean

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
     * Does this prototype have a flag enabled?
     * Any other value will cause an error.
     * @param flag - The flag to check. Can be one of [ItemPrototypeFlags](ItemPrototypeFlags)
     */
    has_flag(this: void,
        flag: string): boolean

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
     * Build this blueprint
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
            by_player?: PlayerIdentification,
            direction?: defines.direction,
            force: ForceIdentification,
            force_build?: boolean,
            position: Position,
            raise_built?: boolean,
            skip_fog_of_war?: boolean,
            surface: SurfaceIdentification
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
            area: BoundingBox,
            by_player?: PlayerIdentification,
            force: ForceIdentification,
            skip_fog_of_war?: boolean,
            surface: SurfaceIdentification
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
            always_include_tiles?: boolean,
            area: BoundingBox,
            force: ForceIdentification,
            include_entities?: boolean,
            include_fuel?: boolean,
            include_modules?: boolean,
            include_station_names?: boolean,
            include_trains?: boolean,
            surface: SurfaceIdentification
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
            area: BoundingBox,
            by_player?: PlayerIdentification,
            force: ForceIdentification,
            skip_fog_of_war?: boolean,
            surface: SurfaceIdentification
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
     * Export a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) to a string
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
     * Import a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) from a string
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
        filter: string | LuaEntityPrototype | LuaEntity,
        index: number): boolean

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
        filter: UpgradeFilter,
        index: number,
        type: string): void

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
        tag: AnyBasic,
        tag_name: string): AnyBasic

    /**
     * Sets the tile filter at the given index for this deconstruction item.
     * @remarks
     * Applies to subclasses: DeconstructionItem
     *
     * @param filter - Setting to nil erases the filter.
     * @returns If the new filter was set (was valid.)
     */
    set_tile_filter(this: void,
        filter: string | LuaTilePrototype | LuaTile,
        index: number): boolean

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

}

/**
 * Control behavior for lamps.
 */
interface LuaLampControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * A lazily loaded value. For performance reasons, we sometimes return a custom lazily-loaded value type instead of the native Lua value. This custom type lazily constructs the necessary value when {@link LuaLazyLoadedValue::get | LuaLazyLoadedValue::get} is called, therefore preventing its unnecessary construction in some cases.
 * An instance of LuaLazyLoadedValue is only valid during the event it was created from and cannot be saved.
 */
interface LuaLazyLoadedValue {
    /**
     * Gets the value of this lazy loaded value.
     */
    get(this: void): any

    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * Control behavior for logistic chests.
 */
interface LuaLogisticContainerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
            members?: string,
            stack: ItemStackIdentification
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
            include_buffers?: boolean,
            members?: string,
            name: string,
            position?: Position
        }): LuaLogisticPoint

}

/**
 * Logistic point of a particular {@link LuaEntity | LuaEntity}. A "Logistic point" is the name given for settings and properties used by requester, provider, and storage points in a given logistic network. These "points" don't have to be a logistic container but often are. One other entity that can own several points is the "character" character type entity.
 */
interface LuaLogisticPoint {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for mining drills.
 */
interface LuaMiningDrillControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a mod setting.
 */
interface LuaModSettingPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a module category.
 */
interface LuaModuleCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a named noise expression.
 */
interface LuaNamedNoiseExpression {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a noise layer.
 */
interface LuaNoiseLayerPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of an optimized particle.
 */
interface LuaParticlePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
            alt?: boolean,
            direction?: defines.direction,
            position: Position,
            skip_fog_of_war?: boolean,
            terrain_building_size?: number
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
            alt?: boolean,
            direction?: defines.direction,
            position: Position,
            skip_fog_of_war?: boolean,
            terrain_building_size?: number
        }): boolean

    /**
     * Checks if this player can build the give entity at the given location on the surface the player is on.
     * @param table.direction - Direction the entity would be placed
     * @param table.name - Name of the entity to check
     * @param table.position - Where the entity would be placed
     */
    can_place_entity(this: void,
        table: {
            direction?: defines.direction,
            name: string,
            position: Position
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
            description?: LocalisedString,
            name?: LocalisedString,
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
            color?: Color,
            create_at_cursor?: boolean,
            position?: Position,
            speed?: number,
            text: LocalisedString,
            time_to_live?: number
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
            position?: Position,
            prototype?: LuaEntityPrototype,
            surface?: SurfaceIdentification,
            type?: defines.alert_type
        }): {[key: number]: {[key: defines.alert_type]: Alert[]}}

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
            override_sound_type?: SoundType,
            path: SoundPath,
            position?: Position,
            volume_modifier?: number
        }): void

    /**
     * Print text to the chat console.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        color?: Color,
        message: LocalisedString): void

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
            icon?: SignalID,
            message?: LocalisedString,
            position?: Position,
            prototype?: LuaEntityPrototype,
            surface?: SurfaceIdentification,
            type?: defines.alert_type
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
        page_index: number,
        screen_index: number): void

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
            character?: LuaEntity,
            chart_mode_cutoff?: number,
            final_transition_time?: number,
            start_position?: Position,
            start_zoom?: number,
            type: defines.controllers,
            waypoints?: CutsceneWaypoint
        }): void

    /**
     * Setup the screen to be shown when the game is finished.
     * @param file - Path to image to be shown.
     * @param message - Message to be shown.
     */
    set_ending_screen_data(this: void,
        file?: string,
        message: LocalisedString): void

    /**
     * Set the text in the goal window (top left).
     * @param only_update - When `true`, won't play the "goal updated" sound.
     * @param text - The text to display. Lines can be delimited with `\n`. Passing an empty string or omitting this parameter entirely will make the goal window disappear.
     */
    set_goal_description(this: void,
        only_update?: boolean,
        text?: LocalisedString): void

    /**
     * Sets the filter for this map editor infinity filters at the given index.
     * @remarks
     * Applies to subclasses: InfinityContainer
     *
     * @param filter - The new filter or `nil` to clear the filter.
     * @param index - The index to set.
     */
    set_infinity_inventory_filter(this: void,
        filter: InfinityInventoryFilter,
        index: number): void

    /**
     * Sets the quick bar filter for the given slot.
     * @param filter - The filter or `nil`.
     * @param index - The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     */
    set_quick_bar_slot(this: void,
        filter: string | LuaItemPrototype | LuaItemStack,
        index: number): void

    /**
     * Make a custom Lua shortcut available or unavailable.
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    set_shortcut_available(this: void,
        available: boolean,
        prototype_name: string): void

    /**
     * Toggle or untoggle a custom Lua shortcut
     * @param prototype_name - Prototype name of the custom shortcut.
     */
    set_shortcut_toggled(this: void,
        prototype_name: string,
        toggled: boolean): void

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

}

/**
 * Control behavior for programmable speakers.
 */
interface LuaProgrammableSpeakerControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * Control behavior for rail chain signals.
 */
interface LuaRailChainSignalControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * A rail path.
 */
interface LuaRailPath {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for rail signals.
 */
interface LuaRailSignalControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * Prototype of a recipe category.
 */
interface LuaRecipeCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * A crafting recipe prototype.
 */
interface LuaRecipePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
        functions: {[key: string]: () => any},
        name: string): void

    /**
     * Call a function of an interface.
     * @param fn - Function name that belongs to `interface`.
     * @param interface - Interface to look up `function` in.
     * @param ...args - Arguments to pass to the called function.
     */
    call(this: void,
        fn: string,
        interface: string,
        ...args: any[]): any

    /**
     * Removes an interface with the given name.
     * @param name - Name of the interface.
     * @returns If the interface was removed. `False` if the interface didn't exist.
     */
    remove_interface(this: void,
        name: string): boolean

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
            animation_offset?: number,
            animation_speed?: number,
            forces?: ForceIdentification[],
            only_in_alt_mode?: boolean,
            orientation?: RealOrientation,
            orientation_target?: Position | LuaEntity,
            orientation_target_offset?: Vector,
            oriented_offset?: Vector,
            players?: PlayerIdentification[],
            render_layer?: RenderLayer,
            surface: SurfaceIdentification,
            target: Position | LuaEntity,
            target_offset?: Vector,
            time_to_live?: number,
            tint?: Color,
            visible?: boolean,
            x_scale?: number,
            y_scale?: number
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
            angle: number,
            color: Color,
            draw_on_ground?: boolean,
            forces?: ForceIdentification[],
            max_radius: number,
            min_radius: number,
            only_in_alt_mode?: boolean,
            players?: PlayerIdentification[],
            start_angle: number,
            surface: SurfaceIdentification,
            target: Position | LuaEntity,
            target_offset?: Vector,
            time_to_live?: number,
            visible?: boolean
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
            draw_on_ground?: boolean,
            filled: boolean,
            forces?: ForceIdentification[],
            only_in_alt_mode?: boolean,
            players?: PlayerIdentification[],
            radius: number,
            surface: SurfaceIdentification,
            target: Position | LuaEntity,
            target_offset?: Vector,
            time_to_live?: number,
            visible?: boolean,
            width?: number
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
            color?: Color,
            forces?: ForceIdentification[],
            intensity?: number,
            minimum_darkness?: number,
            only_in_alt_mode?: boolean,
            orientation?: RealOrientation,
            oriented?: boolean,
            players?: PlayerIdentification[],
            scale?: number,
            sprite: SpritePath,
            surface: SurfaceIdentification,
            target: Position | LuaEntity,
            target_offset?: Vector,
            time_to_live?: number,
            visible?: boolean
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
            dash_length?: number,
            draw_on_ground?: boolean,
            forces?: ForceIdentification[],
            from: Position | LuaEntity,
            from_offset?: Vector,
            gap_length?: number,
            only_in_alt_mode?: boolean,
            players?: PlayerIdentification[],
            surface: SurfaceIdentification,
            time_to_live?: number,
            to: Position | LuaEntity,
            to_offset?: Vector,
            visible?: boolean,
            width: number
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
            draw_on_ground?: boolean,
            forces?: ForceIdentification[],
            only_in_alt_mode?: boolean,
            orientation?: RealOrientation,
            orientation_target?: Position | LuaEntity,
            orientation_target_offset?: Vector,
            players?: PlayerIdentification[],
            surface: SurfaceIdentification,
            target?: Position | LuaEntity,
            target_offset?: Vector,
            time_to_live?: number,
            vertices: ScriptRenderVertexTarget[],
            visible?: boolean
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
            draw_on_ground?: boolean,
            filled: boolean,
            forces?: ForceIdentification[],
            left_top: Position | LuaEntity,
            left_top_offset?: Vector,
            only_in_alt_mode?: boolean,
            players?: PlayerIdentification[],
            right_bottom: Position | LuaEntity,
            right_bottom_offset?: Vector,
            surface: SurfaceIdentification,
            time_to_live?: number,
            visible?: boolean,
            width?: number
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
            forces?: ForceIdentification[],
            only_in_alt_mode?: boolean,
            orientation?: RealOrientation,
            orientation_target?: Position | LuaEntity,
            orientation_target_offset?: Vector,
            oriented_offset?: Vector,
            players?: PlayerIdentification[],
            render_layer?: RenderLayer,
            sprite: SpritePath,
            surface: SurfaceIdentification,
            target: Position | LuaEntity,
            target_offset?: Vector,
            time_to_live?: number,
            tint?: Color,
            visible?: boolean,
            x_scale?: number,
            y_scale?: number
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
            alignment?: string,
            color: Color,
            draw_on_ground?: boolean,
            font?: string,
            forces?: ForceIdentification[],
            only_in_alt_mode?: boolean,
            orientation?: RealOrientation,
            players?: PlayerIdentification[],
            scale?: number,
            scale_with_zoom?: boolean,
            surface: SurfaceIdentification,
            target: Position | LuaEntity,
            target_offset?: Vector,
            text: LocalisedString,
            time_to_live?: number,
            vertical_alignment?: string,
            visible?: boolean
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
        alignment: string,
        id: number): void

    /**
     * Set the angle of the arc with this id. Does nothing if this object is not a arc.
     * @remarks
     * Applies to subclasses: Arc
     *
     * @param angle - angle in radian
     */
    set_angle(this: void,
        angle: number,
        id: number): void

    /**
     * Set the animation prototype name of the animation with this id. Does nothing if this object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     */
    set_animation(this: void,
        animation: string,
        id: number): void

    /**
     * Set the animation offset of the animation with this id. Does nothing if this object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     * @param animation_offset - Animation offset in frames.
     */
    set_animation_offset(this: void,
        animation_offset: number,
        id: number): void

    /**
     * Set the animation speed of the animation with this id. Does nothing if this object is not an animation.
     * @remarks
     * Applies to subclasses: Animation
     *
     * @param animation_speed - Animation speed in frames per tick.
     */
    set_animation_speed(this: void,
        animation_speed: number,
        id: number): void

    /**
     * Set the color or tint of the object with this id. Does nothing if this object does not support color.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon,Sprite,Light,Animation
     *
     */
    set_color(this: void,
        color: Color,
        id: number): void

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
        dash_length: number,
        id: number): void

    /**
     * Set the length of the dashes and the length of the gaps in the line with this id. Does nothing if this object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_dashes(this: void,
        dash_length: number,
        gap_length: number,
        id: number): void

    /**
     * Set whether this is being drawn on the ground, under most entities and sprites.
     * @remarks
     * Applies to subclasses: Text,Line,Circle,Rectangle,Arc,Polygon
     *
     */
    set_draw_on_ground(this: void,
        draw_on_ground: boolean,
        id: number): void

    /**
     * Set if the circle or rectangle with this id is filled. Does nothing if this object is not a circle or rectangle.
     * @remarks
     * Applies to subclasses: Circle,Rectangle
     *
     */
    set_filled(this: void,
        filled: boolean,
        id: number): void

    /**
     * Set the font of the text with this id. Does nothing if this object is not a text.
     * @remarks
     * Applies to subclasses: Text
     *
     */
    set_font(this: void,
        font: string,
        id: number): void

    /**
     * Set the forces that the object with this id is rendered to.
     * @param forces - Providing an empty array will set the object to be visible to all forces.
     */
    set_forces(this: void,
        forces: ForceIdentification[],
        id: number): void

    /**
     * Set from where the line with this id is drawn. Does nothing if the object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_from(this: void,
        from: Position | LuaEntity,
        from_offset?: Vector,
        id: number): void

    /**
     * Set the length of the gaps in the line with this id. Does nothing if this object is not a line.
     * @remarks
     * Applies to subclasses: Line
     *
     */
    set_gap_length(this: void,
        gap_length: number,
        id: number): void

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
        alignment: string,
        id: number): void

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

}

/**
 * Prototype of a resource category.
 */
interface LuaResourceCategoryPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for roboports.
 */
interface LuaRoboportControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Object containing mod settings of three distinct types: `startup`, `global`, and `player`. An instance of LuaSettings is available through the global object named `settings`.
 */
interface LuaSettings {
    /**
     * Gets the current per-player settings for the given player, indexed by prototype name. Returns the same structure as {@link LuaPlayer::mod_settings | LuaPlayer::mod_settings}.
     * @remarks
     * This can become invalid if during operation if the given player becomes invalid.
     *
     */
    get_player_settings(this: void,
        player: PlayerIdentification): {[key: string]: ModSetting}

}

/**
 * Prototype of a shortcut.
 */
interface LuaShortcutPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for storage tanks.
 */
interface LuaStorageTankControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Style of a GUI element. All of the attributes listed here may be `nil` if not available for a particular GUI element.
 */
interface LuaStyle {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
        force?: ForceIdentification,
        position: Position,
        unit_count: number): void

    /**
     * @param positions - Positions for which to calculate property values
     * @param property_names - Names of properties (e.g. "elevation") to calculate
     * @returns Table of property value lists, keyed by property name
     */
    calculate_tile_properties(this: void,
        positions: Position[],
        property_names: string[]): {[key: string]: number[]}

    /**
     * If there exists an entity at the given location that can be fast-replaced with the given entity parameters.
     * @param table.direction - Direction the entity would be placed
     * @param table.force - The force that would place the entity. If not specified, the enemy force is assumed.
     * @param table.name - Name of the entity to check
     * @param table.position - Where the entity would be placed
     */
    can_fast_replace(this: void,
        table: {
            direction?: defines.direction,
            force?: ForceIdentification,
            name: string,
            position: Position
        }): boolean

    /**
     * Check for collisions with terrain or other entities.
     * @param table.build_check_type - Which type of check should be carried out.
     * @param table.direction - Direction of the placed entity.
     * @param table.force - The force that would place the entity. If not specified, the enemy force is assumed.
     * @param table.forced - This parameter is only used if `build_check_type` is either `manual_ghost`, `script_ghost` or `blueprint_ghost`. If `forced` is `true`, entities that can be marked for deconstruction are ignored.
     * @param table.name - Name of the entity prototype to check.
     * @param table.position - Where the entity would be placed.
     */
    can_place_entity(this: void,
        table: {
            build_check_type?: defines.build_check_type,
            direction?: defines.direction,
            force?: ForceIdentification,
            forced?: boolean,
            name: string,
            position: Position
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
            item?: LuaItemStack,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean
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
            item?: LuaItemStack,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean
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
            clear_destination_decoratives?: boolean,
            clear_destination_entities?: boolean,
            clone_decoratives?: boolean,
            clone_entities?: boolean,
            clone_tiles?: boolean,
            create_build_effect_smoke?: boolean,
            destination_area: BoundingBox,
            destination_force?: LuaForce | string,
            destination_surface?: SurfaceIdentification,
            expand_map?: boolean,
            source_area: BoundingBox
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
            clear_destination_decoratives?: boolean,
            clear_destination_entities?: boolean,
            clone_decoratives?: boolean,
            clone_entities?: boolean,
            clone_tiles?: boolean,
            create_build_effect_smoke?: boolean,
            destination_force?: LuaForce | string,
            destination_offset: TilePosition,
            destination_surface?: SurfaceIdentification,
            expand_map?: boolean,
            manual_collision_mode?: boolean,
            source_offset: TilePosition,
            source_positions: TilePosition[]
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
            create_build_effect_smoke?: boolean,
            destination_force?: ForceIdentification,
            destination_offset: Vector,
            destination_surface?: SurfaceIdentification,
            entities: LuaEntity[],
            snap_to_grid?: boolean
        }): void

    /**
     * Count entities of given type or name in a given area. Works just like {@link LuaSurface::find_entities_filtered | LuaSurface::find_entities_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of entities.
     * If no area or position are given, then the entire surface is searched. If position is given, returns entities colliding with that position (i.e the given position is within the entity's collision box). If position and radius are given, returns entities in that radius of the position. If area is specified, returns entities colliding with that area.
     * @param table.invert - If the filters should be inverted. These filters are: name, type, ghost_name, ghost_type, direction, collision_mask, force.
     * @param table.radius - If given with position, will count all entities within the radius of the position.
     */
    count_entities_filtered(this: void,
        table: {
            area?: BoundingBox,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            direction?: defines.direction | defines.direction[],
            force?: ForceIdentification | ForceIdentification[],
            ghost_name?: string | string[],
            ghost_type?: string | string[],
            invert?: boolean,
            limit?: number,
            name?: string | string[],
            position?: Position,
            radius?: number,
            to_be_deconstructed?: boolean,
            to_be_upgraded?: boolean,
            type?: string | string[]
        }): number

    /**
     * Count tiles of a given name in a given area. Works just like {@link LuaSurface::find_tiles_filtered | LuaSurface::find_tiles_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of tiles.
     * If no area or position and radius is given, then the entire surface is searched. If position and radius are given, only tiles within the radius of the position are included.
     * @param table.position - Ignored if not given with radius.
     * @param table.radius - If given with position, will return all entities within the radius of the position.
     */
    count_tiles_filtered(this: void,
        table: {
            area?: BoundingBox,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            has_hidden_tile?: boolean,
            limit?: number,
            name?: string | string[],
            position?: Position,
            radius?: number
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
     * @param table.create_build_effect_smoke - If false, the building effect smoke will not be shown around the new entity.
     * @param table.direction - Desired orientation of the entity after creation.
     * @param table.fast_replace - If true, building will attempt to simulate fast-replace building.
     * @param table.force - Force of the entity, default is enemy.
     * @param table.item - If provided, the entity will attempt to pull stored values from this item (for example; creating a spidertron from a previously named and mined spidertron)
     * @param table.move_stuck_players - If true, any characters that are in the way of the entity are teleported out of the way.
     * @param table.name - The entity prototype name to create.
     * @param table.player - If given set the last_user to this player. If fast_replace is true simulate fast replace using this player.
     * @param table.position - Where to create the entity.
     * @param table.raise_built - If true; [defines.events.script_raised_built](defines.events.script_raised_built) will be fired on successful entity creation.
     * @param table.source - Source entity. Used for beams and highlight-boxes.
     * @param table.spawn_decorations - If true, entity types that have spawn_decorations property will apply triggers defined in the property.
     * @param table.spill - If false while fast_replace is true and player is nil any items from fast-replacing will be deleted instead of dropped on the ground.
     * @param table.target - Entity with health for the new entity to target.
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
        table: {
            create_build_effect_smoke?: boolean,
            direction?: defines.direction,
            fast_replace?: boolean,
            force?: ForceIdentification,
            item?: LuaItemStack,
            move_stuck_players?: boolean,
            name: string,
            player?: PlayerIdentification,
            position: Position,
            raise_built?: boolean,
            source?: LuaEntity,
            spawn_decorations?: boolean,
            spill?: boolean,
            target?: LuaEntity
        }): LuaEntity | null

    /**
     * Creates a particle at the given location
     * @param table.name - The particle name.
     * @param table.position - Where to create the particle.
     */
    create_particle(this: void,
        table: {
            frame_speed: number,
            height: number,
            movement: Vector,
            name: string,
            position: Position,
            vertical_speed: number
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
            force?: ForceIdentification,
            position: Position
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
            item?: LuaItemStack,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean
        }): void

    /**
     * @param position - The position to check
     * @param prototype - The decorative prototype to check
     */
    decorative_prototype_collides(this: void,
        position: Position,
        prototype: string): void

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
            invert?: boolean,
            limit?: number,
            name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[],
            position?: TilePosition
        }): void

    /**
     * Sets the given script area to the new values.
     * @param id - The area to edit.
     */
    edit_script_area(this: void,
        area: ScriptArea,
        id: number): void

    /**
     * Sets the given script position to the new values.
     * @param id - The position to edit.
     */
    edit_script_position(this: void,
        area: ScriptPosition,
        id: number): void

    /**
     * @param position - The position to check
     * @param prototype - The entity prototype to check
     * @param use_map_generation_bounding_box - If the map generation bounding box should be used instead of the collision bounding box
     */
    entity_prototype_collides(this: void,
        direction?: defines.direction,
        position: Position,
        prototype: EntityPrototypeIdentification,
        use_map_generation_bounding_box: boolean): void

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
            invert?: boolean,
            limit?: number,
            name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[],
            position?: TilePosition
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
        force?: LuaForce | string,
        radius: number): LuaEntity[]

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
     * Find entities of given type or name in a given area.
     * If no filters (`name`, `type`, `force`, etc.) are given, returns all entities in the search area. If multiple filters are specified, returns only entities matching all given filters.
     * If no area or position are given, then the entire surface is searched. If position is given, returns entities colliding with that position (i.e the given position is within the entity's collision box). If position and radius are given, returns entities in that radius of the position. If area is specified, returns entities colliding with that area.
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
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            direction?: defines.direction | defines.direction[],
            force?: ForceIdentification | ForceIdentification[],
            ghost_name?: string | string[],
            ghost_type?: string | string[],
            invert?: boolean,
            limit?: number,
            name?: string | string[],
            position?: Position,
            radius?: number,
            to_be_deconstructed?: boolean,
            to_be_upgraded?: boolean,
            type?: string | string[]
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
        force: ForceIdentification,
        position: Position): LuaLogisticNetwork | null

    /**
     * Finds all of the logistics networks whose construction area intersects with the given position.
     * @param force - Force the logistic networks should belong to.
     */
    find_logistic_networks_by_construction_area(this: void,
        force: ForceIdentification,
        position: Position): LuaLogisticNetwork[]

    /**
     * Find the enemy entity-with-force ({@link military entity | https://wiki.factorio.com/Military_units_and_structures}) closest to the given position.
     * @param table.force - The force the result will be an enemy of. Uses the player force if not specified.
     * @param table.max_distance - Radius of the circular search area.
     * @param table.position - Center of the search area.
     * @returns The nearest enemy entity-with-force or `nil` if no enemy could be found within the given area.
     */
    find_nearest_enemy(this: void,
        table: {
            force?: ForceIdentification,
            max_distance: number,
            position: Position
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
        center: Position,
        force_to_tile_center?: boolean,
        name: string,
        precision: number,
        radius: number): Position

    /**
     * Find a non-colliding position within a given rectangle.
     * @param force_to_tile_center - Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Default false.
     * @param name - Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param precision - The step length from the given position as it searches, in tiles. Minimum value is 0.01.
     * @param search_space - The rectangle to search inside.
     * @returns The non-colliding position. May be `nil` if no suitable position was found.
     */
    find_non_colliding_position_in_box(this: void,
        force_to_tile_center?: boolean,
        name: string,
        precision: number,
        search_space: BoundingBox): Position

    /**
     * Find tiles of a given name in a given area.
     * If no filters are given returns all tiles in the search area.
     * If no area or position and radius is given, then the entire surface is searched. If position and radius are given, only tiles within the radius of the position are included.
     * @param table.position - Ignored if not given with radius.
     * @param table.radius - If given with position, will return all entities within the radius of the position.
     */
    find_tiles_filtered(this: void,
        table: {
            area?: BoundingBox,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
            has_hidden_tile?: boolean,
            limit?: number,
            name?: string | string[],
            position?: Position,
            radius?: number
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
            condition: ForceCondition,
            force: LuaForce | string
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
        entities: LuaEntity[],
        position: Position): LuaEntity

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
        force: LuaForce | string,
        position: ChunkPosition): LuaEntity[]

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
            force?: ForceIdentification,
            name?: string | string[]
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
            override_sound_type?: SoundType,
            path: SoundPath,
            position?: Position,
            volume_modifier?: number
        }): void

    /**
     * Spawn pollution at the given position.
     * @param amount - How much pollution to add.
     * @param source - Where to spawn the pollution.
     */
    pollute(this: void,
        amount: number,
        source: Position): void

    /**
     * Print text to the chat console of all players on this surface.
     * @remarks
     * Messages that are identical to a message sent in the last 60 ticks are not printed again.
     *
     */
    print(this: void,
        color?: Color,
        message: LocalisedString): void

    /**
     * Regenerate autoplacement of some decoratives on this surface. This can be used to autoplace newly-added decoratives.
     * @remarks
     * All specified decorative prototypes must be autoplacable. If nothing is given all decoratives are generated on all chunks.
     *
     * @param chunks - The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     * @param decoratives - Prototype names of decorative or decoratives to autoplace. When `nil` all decoratives with an autoplace are used.
     */
    regenerate_decorative(this: void,
        chunks?: ChunkPosition[],
        decoratives?: string | string[]): void

    /**
     * Regenerate autoplacement of some entities on this surface. This can be used to autoplace newly-added entities.
     * @remarks
     * All specified entity prototypes must be autoplacable. If nothing is given all entities are generated on all chunks.
     *
     * @param chunks - The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     * @param entities - Prototype names of entity or entities to autoplace. When `nil` all entities with an autoplace are used.
     */
    regenerate_entity(this: void,
        chunks?: ChunkPosition[],
        entities?: string | string[]): void

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
     * Starts a path find request without actually ordering a unit to move. Result is ultimately returned asynchronously via {@link on_script_path_request_finished | on_script_path_request_finished}.
     * @param table.can_open_gates - If the path request can open gates. Default false.
     * @param table.entity_to_ignore - If given, the pathfind will ignore collisions with this entity.
     * @param table.path_resolution_modifier - The resolution modifier of the pathing. Defaults to 0.
     * @param table.pathfind_flags - Flags to affect the pathfinder.
     * @param table.radius - How close we need to get to the goal. Default 1.
     * @returns A unique handle to identify this call when [on_script_path_request_finished](on_script_path_request_finished) fires.
     */
    request_path(this: void,
        table: {
            bounding_box: BoundingBox,
            can_open_gates?: boolean,
            collision_mask: CollisionMask | string[],
            entity_to_ignore?: LuaEntity,
            force: LuaForce | string,
            goal: Position,
            path_resolution_modifier?: number,
            pathfind_flags?: PathfinderFlags,
            radius?: number,
            start: Position
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
            force?: ForceIdentification,
            unit_count: number,
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
        correct_tiles?: boolean,
        raise_event?: boolean,
        remove_colliding_decoratives?: boolean,
        remove_colliding_entities?: boolean | string,
        tiles: Tile[]): void

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
        allow_belts?: boolean,
        enable_looted?: boolean,
        force?: LuaForce | string,
        items: ItemStackIdentification,
        position: Position): LuaEntity[]

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
            item: LuaItemStack,
            player?: PlayerIdentification,
            skip_fog_of_war?: boolean
        }): void

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

}

/**
 * A Technology prototype.
 */
interface LuaTechnologyPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * Prototype of a tile.
 */
interface LuaTilePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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

}

/**
 * Control behavior for train stops.
 */
interface LuaTrainStopControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for transport belts.
 */
interface LuaTransportBeltControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
        items: ItemStackIdentification,
        position: number): boolean

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

}

/**
 * Prototype of a trivial smoke.
 */
interface LuaTrivialSmokePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

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
     * Make the group start moving even if some of its members haven't yet arrived.
     */
    start_moving(this: void): void

}

/**
 * Prototype of a virtual signal.
 */
interface LuaVirtualSignalPrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Prototype of a void energy source.
 */
interface LuaVoidEnergySourcePrototype {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

/**
 * Control behavior for walls.
 */
interface LuaWallControlBehavior extends LuaControlBehavior {
    /**
     * All methods and properties that this object supports.
     */
    help(this: void): string

}

