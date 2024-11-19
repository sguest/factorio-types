// Factorio class definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 2.0.20
// API version 6

declare namespace runtime {
/**
 * Collection of settings for overriding default ai behavior.
 */
interface LuaAISettings {
    /**
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     */
    allow_destroy_when_commands_fail: boolean;
    /**
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     */
    allow_try_return_to_spawner: boolean;
    /**
     * If enabled, units will try to separate themselves from nearby friendly units.
     */
    do_separation: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Defines how coarse the pathfinder's grid is, where smaller values mean a coarser grid. Defaults to `0`, which equals a resolution of `1x1` tiles, centered on tile centers. Values range from `-8` to `8` inclusive, where each integer increment doubles/halves the resolution. So, a resolution of `-8` equals a grid of `256x256` tiles, and a resolution of `8` equals `1/256` of a tile.
     */
    path_resolution_modifier: int8;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for accumulators.
 */
interface LuaAccumulatorControlBehavior extends LuaControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    output_signal?: SignalID;
    /**
     * `true` if this accumulator sends its charge percent to circuit network.
     */
    read_charge: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a achievement.
 */
interface LuaAchievementPrototype extends LuaPrototypeBase {
    readonly allowed_without_fight: boolean;
    readonly alternative_armor?: LuaItemPrototype;
    readonly ammo_type?: LuaItemPrototype;
    readonly amount?: uint;
    readonly armor?: LuaItemPrototype;
    readonly count?: uint;
    readonly damage_dealer?: LuaEntityPrototype[];
    readonly damage_type?: LuaDamagePrototype;
    readonly dont_build?: LuaEntityPrototype[];
    readonly dont_research?: LuaItemPrototype[];
    readonly excluded?: LuaEntityPrototype[];
    readonly fluid_product?: LuaFluidPrototype;
    readonly in_vehicle?: boolean;
    readonly included?: LuaEntityPrototype[];
    readonly item_product?: LuaItemPrototype;
    readonly last_hour_only?: boolean;
    readonly limit_equip_quality?: LuaQualityPrototype;
    readonly limit_quality?: LuaQualityPrototype;
    readonly limited_to_one_game?: boolean;
    readonly minimum_damage?: float;
    readonly minimum_distance?: double;
    readonly minimum_energy_produced?: double;
    readonly module?: string[];
    readonly more_than_manually?: boolean;
    readonly not_to_kill?: LuaEntityPrototype;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly objective_condition?: string;
    readonly personally?: boolean;
    readonly quality?: LuaQualityPrototype;
    readonly research_all?: boolean;
    readonly research_with?: LuaItemPrototype[];
    readonly science_pack?: LuaItemPrototype;
    readonly should_survive?: boolean;
    readonly surface?: string;
    readonly technology?: LuaTechnologyPrototype;
    readonly to_build?: LuaEntityPrototype;
    readonly to_kill?: LuaEntityPrototype[];
    readonly to_use?: LuaItemPrototype;
    readonly type_not_to_kill?: string;
    readonly type_of_dealer?: string;
    readonly type_to_kill?: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    readonly within?: uint;
}
/**
 * Prototype of an Active Trigger.
 */
interface LuaActiveTriggerPrototype extends LuaPrototypeBase {
    /**
     * The chance that a new fork will spawn after each jump [0,1]. default = 0.
     */
    readonly fork_chance: double;
    /**
     * The tick delay between each jump. 0 = all jumps instantaneous. default = 0.
     */
    readonly jump_delay_ticks: uint;
    /**
     * maximum number of forks allowed to spawn for the entire chain. default = infinity.
     */
    readonly max_forks: uint;
    /**
     * The maximum number of forks that can spawn from a single jump. default = 1.
     */
    readonly max_forks_per_jump: uint;
    /**
     * The max number of jumps per trigger. default = 5.
     */
    readonly max_jumps: uint;
    /**
     * The max distance jumps are allowed to travel away from the original target. default = infinity.
     */
    readonly max_range: double;
    /**
     * The max length of jumps. default = 5.
     */
    readonly max_range_per_jump: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for agricultural tower
 */
interface LuaAgriculturalTowerControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * `true` if the agricultural tower reads seeds and harvested plants.
     */
    read_contents: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Airborne pollutant prototype.
 */
interface LuaAirbornePollutantPrototype extends LuaPrototypeBase {
    readonly affects_evolution: boolean;
    readonly chart_color: Color;
    readonly localised_name_with_amount_key: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a ammo category.
 */
interface LuaAmmoCategoryPrototype extends LuaPrototypeBase {
    readonly bonus_gui_order: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for arithmetic combinators.
 */
interface LuaArithmeticCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * This arithmetic combinator's parameters. Writing `nil` clears the combinator's parameters.
     */
    parameters: ArithmeticCombinatorParameters;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for artillery turrets.
 */
interface LuaArtilleryTurretControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * `true` if the turret will send the ammunition or fluid it contains to the circuit network.
     */
    read_ammo: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for assembling machines.
 */
interface LuaAssemblingMachineControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * `true` if the assembling machine reads its ingredients contents, product contents, materials in crafting and trash inventories.
     */
    circuit_read_contents: boolean;
    /**
     * `true` if the assembling machine outputs ingredients of current recipe as a signals to circuit network.
     */
    circuit_read_ingredients: boolean;
    /**
     * `true` if the the assembling machine sends a signal when the recipe finishes.
     */
    circuit_read_recipe_finished: boolean;
    /**
     * `true` if the the assembling machine sends a signal when it is working.
     */
    circuit_read_working: boolean;
    /**
     * The signal sent when the assembling machine finishes a recipe.
     */
    circuit_recipe_finished_signal?: SignalID;
    /**
     * `true` if the assembling machine sets its recipe from the circuit network.
     */
    circuit_set_recipe: boolean;
    /**
     * The signal sent when the assembling machine is working.
     */
    circuit_working_signal?: SignalID;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of an asteroid chunk.
 */
interface LuaAsteroidChunkPrototype extends LuaPrototypeBase {
    readonly hide_from_signal_gui: boolean;
    readonly item_signal_alias?: LuaItemPrototype;
    readonly mineable_properties: MineableProperties;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for asteroid collectors.
 */
interface LuaAsteroidCollectorControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * `true` if this asteroid collector reads its content and sends it to a circuit network
     */
    read_content: boolean;
    /**
     * `true` if this asteroid collector has filters set from circuit network
     */
    set_filter: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of an autoplace control.
 */
interface LuaAutoplaceControlPrototype extends LuaPrototypeBase {
    readonly can_be_disabled: boolean;
    /**
     * Category name of this prototype.
     */
    readonly category: 'resource' | 'terrain' | 'cliff' | 'enemy';
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly richness: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Entry point for registering event handlers. It is accessible through the global object named `script`.
 */
interface LuaBootstrap {
    /**
     * Generate a new, unique event ID that can be used to raise custom events with {@link LuaBootstrap::raise_event | runtime:LuaBootstrap::raise_event}.
     * @returns The newly generated event ID.
     */
    generate_event_name(this: void): uint;
    /**
     * Gets the filters for the given event.
     * @param event ID of the event to get.
     * @returns The filters or `nil` if none are defined.
     */
    get_event_filter(this: void, event: uint): EventFilter | null;
    /**
     * Find the event handler for an event.
     * @param event The event identifier to get a handler for.
     * @returns Reference to the function currently registered as the handler, if it was found.
     */
    get_event_handler(this: void, event: uint): ((this: void, arg0: EventData) => any) | null;
    /**
     * Gets the mod event order as a string.
     */
    get_event_order(this: void): string;
    /**
     * Register a function to be run when mod configuration changes.
     *
     * This is called when the game version or any mod version changed, when any mod was added or removed, when a startup setting has changed, when any prototypes have been added or removed, or when a migration was applied. It allows the mod to make any changes it deems appropriate to both the data structures in its {@link storage | runtime:storage} table or to the game state through {@link LuaGameScript | runtime:LuaGameScript}.
     *
     * For more context, refer to the {@link Data Lifecycle | runtime:data-lifecycle} page.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     */
    on_configuration_changed(this: void, handler: ((this: void, arg0: ConfigurationChangedData) => any) | nil): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_achievement_gained, handler: ((this: void, arg0: runtime.on_achievement_gained) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_ai_command_completed, handler: ((this: void, arg0: runtime.on_ai_command_completed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_area_cloned, handler: ((this: void, arg0: runtime.on_area_cloned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_biter_base_built, handler: ((this: void, arg0: runtime.on_biter_base_built) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_brush_cloned, handler: ((this: void, arg0: runtime.on_brush_cloned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_build_base_arrived, handler: ((this: void, arg0: runtime.on_build_base_arrived) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_built_entity, handler: ((this: void, arg0: runtime.on_built_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_cancelled_deconstruction, handler: ((this: void, arg0: runtime.on_cancelled_deconstruction) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_cancelled_upgrade, handler: ((this: void, arg0: runtime.on_cancelled_upgrade) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_character_corpse_expired, handler: ((this: void, arg0: runtime.on_character_corpse_expired) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_chart_tag_added, handler: ((this: void, arg0: runtime.on_chart_tag_added) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_chart_tag_modified, handler: ((this: void, arg0: runtime.on_chart_tag_modified) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_chart_tag_removed, handler: ((this: void, arg0: runtime.on_chart_tag_removed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_chunk_charted, handler: ((this: void, arg0: runtime.on_chunk_charted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_chunk_deleted, handler: ((this: void, arg0: runtime.on_chunk_deleted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_chunk_generated, handler: ((this: void, arg0: runtime.on_chunk_generated) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_combat_robot_expired, handler: ((this: void, arg0: runtime.on_combat_robot_expired) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_console_chat, handler: ((this: void, arg0: runtime.on_console_chat) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_console_command, handler: ((this: void, arg0: runtime.on_console_command) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_cutscene_cancelled, handler: ((this: void, arg0: runtime.on_cutscene_cancelled) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_cutscene_finished, handler: ((this: void, arg0: runtime.on_cutscene_finished) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_cutscene_started, handler: ((this: void, arg0: runtime.on_cutscene_started) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_cutscene_waypoint_reached, handler: ((this: void, arg0: runtime.on_cutscene_waypoint_reached) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_cloned, handler: ((this: void, arg0: runtime.on_entity_cloned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_color_changed, handler: ((this: void, arg0: runtime.on_entity_color_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_damaged, handler: ((this: void, arg0: runtime.on_entity_damaged) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_died, handler: ((this: void, arg0: runtime.on_entity_died) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_logistic_slot_changed, handler: ((this: void, arg0: runtime.on_entity_logistic_slot_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_renamed, handler: ((this: void, arg0: runtime.on_entity_renamed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_settings_pasted, handler: ((this: void, arg0: runtime.on_entity_settings_pasted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_entity_spawned, handler: ((this: void, arg0: runtime.on_entity_spawned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_equipment_inserted, handler: ((this: void, arg0: runtime.on_equipment_inserted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_equipment_removed, handler: ((this: void, arg0: runtime.on_equipment_removed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_force_cease_fire_changed, handler: ((this: void, arg0: runtime.on_force_cease_fire_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_force_created, handler: ((this: void, arg0: runtime.on_force_created) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_force_friends_changed, handler: ((this: void, arg0: runtime.on_force_friends_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_force_reset, handler: ((this: void, arg0: runtime.on_force_reset) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_forces_merged, handler: ((this: void, arg0: runtime.on_forces_merged) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_forces_merging, handler: ((this: void, arg0: runtime.on_forces_merging) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_game_created_from_scenario, handler: ((this: void, arg0: runtime.on_game_created_from_scenario) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_checked_state_changed, handler: ((this: void, arg0: runtime.on_gui_checked_state_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_click, handler: ((this: void, arg0: runtime.on_gui_click) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_closed, handler: ((this: void, arg0: runtime.on_gui_closed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_confirmed, handler: ((this: void, arg0: runtime.on_gui_confirmed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_elem_changed, handler: ((this: void, arg0: runtime.on_gui_elem_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_hover, handler: ((this: void, arg0: runtime.on_gui_hover) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_leave, handler: ((this: void, arg0: runtime.on_gui_leave) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_location_changed, handler: ((this: void, arg0: runtime.on_gui_location_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_opened, handler: ((this: void, arg0: runtime.on_gui_opened) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_selected_tab_changed, handler: ((this: void, arg0: runtime.on_gui_selected_tab_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_selection_state_changed, handler: ((this: void, arg0: runtime.on_gui_selection_state_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_switch_state_changed, handler: ((this: void, arg0: runtime.on_gui_switch_state_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_text_changed, handler: ((this: void, arg0: runtime.on_gui_text_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_gui_value_changed, handler: ((this: void, arg0: runtime.on_gui_value_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_land_mine_armed, handler: ((this: void, arg0: runtime.on_land_mine_armed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_lua_shortcut, handler: ((this: void, arg0: runtime.on_lua_shortcut) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_marked_for_deconstruction, handler: ((this: void, arg0: runtime.on_marked_for_deconstruction) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_marked_for_upgrade, handler: ((this: void, arg0: runtime.on_marked_for_upgrade) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_market_item_purchased, handler: ((this: void, arg0: runtime.on_market_item_purchased) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_mod_item_opened, handler: ((this: void, arg0: runtime.on_mod_item_opened) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_object_destroyed, handler: ((this: void, arg0: runtime.on_object_destroyed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_permission_group_added, handler: ((this: void, arg0: runtime.on_permission_group_added) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_permission_group_deleted, handler: ((this: void, arg0: runtime.on_permission_group_deleted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_permission_group_edited, handler: ((this: void, arg0: runtime.on_permission_group_edited) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_permission_string_imported, handler: ((this: void, arg0: runtime.on_permission_string_imported) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_picked_up_item, handler: ((this: void, arg0: runtime.on_picked_up_item) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_alt_reverse_selected_area, handler: ((this: void, arg0: runtime.on_player_alt_reverse_selected_area) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_alt_selected_area, handler: ((this: void, arg0: runtime.on_player_alt_selected_area) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_ammo_inventory_changed, handler: ((this: void, arg0: runtime.on_player_ammo_inventory_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_armor_inventory_changed, handler: ((this: void, arg0: runtime.on_player_armor_inventory_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_banned, handler: ((this: void, arg0: runtime.on_player_banned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_built_tile, handler: ((this: void, arg0: runtime.on_player_built_tile) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_cancelled_crafting, handler: ((this: void, arg0: runtime.on_player_cancelled_crafting) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_changed_force, handler: ((this: void, arg0: runtime.on_player_changed_force) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_changed_position, handler: ((this: void, arg0: runtime.on_player_changed_position) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_changed_surface, handler: ((this: void, arg0: runtime.on_player_changed_surface) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_cheat_mode_disabled, handler: ((this: void, arg0: runtime.on_player_cheat_mode_disabled) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_cheat_mode_enabled, handler: ((this: void, arg0: runtime.on_player_cheat_mode_enabled) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_clicked_gps_tag, handler: ((this: void, arg0: runtime.on_player_clicked_gps_tag) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_configured_blueprint, handler: ((this: void, arg0: runtime.on_player_configured_blueprint) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_controller_changed, handler: ((this: void, arg0: runtime.on_player_controller_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_crafted_item, handler: ((this: void, arg0: runtime.on_player_crafted_item) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_created, handler: ((this: void, arg0: runtime.on_player_created) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_cursor_stack_changed, handler: ((this: void, arg0: runtime.on_player_cursor_stack_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_deconstructed_area, handler: ((this: void, arg0: runtime.on_player_deconstructed_area) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_demoted, handler: ((this: void, arg0: runtime.on_player_demoted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_died, handler: ((this: void, arg0: runtime.on_player_died) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_display_density_scale_changed, handler: ((this: void, arg0: runtime.on_player_display_density_scale_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_display_resolution_changed, handler: ((this: void, arg0: runtime.on_player_display_resolution_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_display_scale_changed, handler: ((this: void, arg0: runtime.on_player_display_scale_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_driving_changed_state, handler: ((this: void, arg0: runtime.on_player_driving_changed_state) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_dropped_item, handler: ((this: void, arg0: runtime.on_player_dropped_item) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_fast_transferred, handler: ((this: void, arg0: runtime.on_player_fast_transferred) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_flipped_entity, handler: ((this: void, arg0: runtime.on_player_flipped_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_flushed_fluid, handler: ((this: void, arg0: runtime.on_player_flushed_fluid) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_gun_inventory_changed, handler: ((this: void, arg0: runtime.on_player_gun_inventory_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_input_method_changed, handler: ((this: void, arg0: runtime.on_player_input_method_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_joined_game, handler: ((this: void, arg0: runtime.on_player_joined_game) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_kicked, handler: ((this: void, arg0: runtime.on_player_kicked) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_left_game, handler: ((this: void, arg0: runtime.on_player_left_game) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_locale_changed, handler: ((this: void, arg0: runtime.on_player_locale_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_main_inventory_changed, handler: ((this: void, arg0: runtime.on_player_main_inventory_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_mined_entity, handler: ((this: void, arg0: runtime.on_player_mined_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_mined_item, handler: ((this: void, arg0: runtime.on_player_mined_item) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_mined_tile, handler: ((this: void, arg0: runtime.on_player_mined_tile) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_muted, handler: ((this: void, arg0: runtime.on_player_muted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_pipette, handler: ((this: void, arg0: runtime.on_player_pipette) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_placed_equipment, handler: ((this: void, arg0: runtime.on_player_placed_equipment) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_promoted, handler: ((this: void, arg0: runtime.on_player_promoted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_removed, handler: ((this: void, arg0: runtime.on_player_removed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_removed_equipment, handler: ((this: void, arg0: runtime.on_player_removed_equipment) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_repaired_entity, handler: ((this: void, arg0: runtime.on_player_repaired_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_respawned, handler: ((this: void, arg0: runtime.on_player_respawned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_reverse_selected_area, handler: ((this: void, arg0: runtime.on_player_reverse_selected_area) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_rotated_entity, handler: ((this: void, arg0: runtime.on_player_rotated_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_selected_area, handler: ((this: void, arg0: runtime.on_player_selected_area) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_set_quick_bar_slot, handler: ((this: void, arg0: runtime.on_player_set_quick_bar_slot) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_setup_blueprint, handler: ((this: void, arg0: runtime.on_player_setup_blueprint) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_toggled_alt_mode, handler: ((this: void, arg0: runtime.on_player_toggled_alt_mode) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_toggled_map_editor, handler: ((this: void, arg0: runtime.on_player_toggled_map_editor) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_trash_inventory_changed, handler: ((this: void, arg0: runtime.on_player_trash_inventory_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_unbanned, handler: ((this: void, arg0: runtime.on_player_unbanned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_unmuted, handler: ((this: void, arg0: runtime.on_player_unmuted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_used_capsule, handler: ((this: void, arg0: runtime.on_player_used_capsule) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_player_used_spidertron_remote, handler: ((this: void, arg0: runtime.on_player_used_spidertron_remote) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_post_entity_died, handler: ((this: void, arg0: runtime.on_post_entity_died) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_build, handler: ((this: void, arg0: runtime.on_pre_build) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_chunk_deleted, handler: ((this: void, arg0: runtime.on_pre_chunk_deleted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_entity_settings_pasted, handler: ((this: void, arg0: runtime.on_pre_entity_settings_pasted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_ghost_deconstructed, handler: ((this: void, arg0: runtime.on_pre_ghost_deconstructed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_ghost_upgraded, handler: ((this: void, arg0: runtime.on_pre_ghost_upgraded) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_permission_group_deleted, handler: ((this: void, arg0: runtime.on_pre_permission_group_deleted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_permission_string_imported, handler: ((this: void, arg0: runtime.on_pre_permission_string_imported) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_player_crafted_item, handler: ((this: void, arg0: runtime.on_pre_player_crafted_item) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_player_died, handler: ((this: void, arg0: runtime.on_pre_player_died) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_player_left_game, handler: ((this: void, arg0: runtime.on_pre_player_left_game) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_player_mined_item, handler: ((this: void, arg0: runtime.on_pre_player_mined_item) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_player_removed, handler: ((this: void, arg0: runtime.on_pre_player_removed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_player_toggled_map_editor, handler: ((this: void, arg0: runtime.on_pre_player_toggled_map_editor) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_robot_exploded_cliff, handler: ((this: void, arg0: runtime.on_pre_robot_exploded_cliff) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_scenario_finished, handler: ((this: void, arg0: runtime.on_pre_scenario_finished) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_script_inventory_resized, handler: ((this: void, arg0: runtime.on_pre_script_inventory_resized) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_surface_cleared, handler: ((this: void, arg0: runtime.on_pre_surface_cleared) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_pre_surface_deleted, handler: ((this: void, arg0: runtime.on_pre_surface_deleted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_redo_applied, handler: ((this: void, arg0: runtime.on_redo_applied) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_research_cancelled, handler: ((this: void, arg0: runtime.on_research_cancelled) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_research_finished, handler: ((this: void, arg0: runtime.on_research_finished) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_research_moved, handler: ((this: void, arg0: runtime.on_research_moved) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_research_reversed, handler: ((this: void, arg0: runtime.on_research_reversed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_research_started, handler: ((this: void, arg0: runtime.on_research_started) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_resource_depleted, handler: ((this: void, arg0: runtime.on_resource_depleted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_robot_built_entity, handler: ((this: void, arg0: runtime.on_robot_built_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_robot_built_tile, handler: ((this: void, arg0: runtime.on_robot_built_tile) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_robot_exploded_cliff, handler: ((this: void, arg0: runtime.on_robot_exploded_cliff) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_robot_mined, handler: ((this: void, arg0: runtime.on_robot_mined) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_robot_mined_entity, handler: ((this: void, arg0: runtime.on_robot_mined_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_robot_mined_tile, handler: ((this: void, arg0: runtime.on_robot_mined_tile) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_robot_pre_mined, handler: ((this: void, arg0: runtime.on_robot_pre_mined) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_rocket_launch_ordered, handler: ((this: void, arg0: runtime.on_rocket_launch_ordered) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_rocket_launched, handler: ((this: void, arg0: runtime.on_rocket_launched) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_runtime_mod_setting_changed, handler: ((this: void, arg0: runtime.on_runtime_mod_setting_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_script_inventory_resized, handler: ((this: void, arg0: runtime.on_script_inventory_resized) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_script_path_request_finished, handler: ((this: void, arg0: runtime.on_script_path_request_finished) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_script_trigger_effect, handler: ((this: void, arg0: runtime.on_script_trigger_effect) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_sector_scanned, handler: ((this: void, arg0: runtime.on_sector_scanned) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_segment_entity_created, handler: ((this: void, arg0: runtime.on_segment_entity_created) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_selected_entity_changed, handler: ((this: void, arg0: runtime.on_selected_entity_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_space_platform_built_entity, handler: ((this: void, arg0: runtime.on_space_platform_built_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_space_platform_built_tile, handler: ((this: void, arg0: runtime.on_space_platform_built_tile) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_space_platform_changed_state, handler: ((this: void, arg0: runtime.on_space_platform_changed_state) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_space_platform_mined_entity, handler: ((this: void, arg0: runtime.on_space_platform_mined_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_space_platform_mined_item, handler: ((this: void, arg0: runtime.on_space_platform_mined_item) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_space_platform_mined_tile, handler: ((this: void, arg0: runtime.on_space_platform_mined_tile) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_space_platform_pre_mined, handler: ((this: void, arg0: runtime.on_space_platform_pre_mined) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_spider_command_completed, handler: ((this: void, arg0: runtime.on_spider_command_completed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_string_translated, handler: ((this: void, arg0: runtime.on_string_translated) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_surface_cleared, handler: ((this: void, arg0: runtime.on_surface_cleared) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_surface_created, handler: ((this: void, arg0: runtime.on_surface_created) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_surface_deleted, handler: ((this: void, arg0: runtime.on_surface_deleted) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_surface_imported, handler: ((this: void, arg0: runtime.on_surface_imported) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_surface_renamed, handler: ((this: void, arg0: runtime.on_surface_renamed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_technology_effects_reset, handler: ((this: void, arg0: runtime.on_technology_effects_reset) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_tick, handler: ((this: void, arg0: runtime.on_tick) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_train_changed_state, handler: ((this: void, arg0: runtime.on_train_changed_state) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_train_created, handler: ((this: void, arg0: runtime.on_train_created) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_train_schedule_changed, handler: ((this: void, arg0: runtime.on_train_schedule_changed) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_trigger_created_entity, handler: ((this: void, arg0: runtime.on_trigger_created_entity) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_trigger_fired_artillery, handler: ((this: void, arg0: runtime.on_trigger_fired_artillery) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_undo_applied, handler: ((this: void, arg0: runtime.on_undo_applied) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_unit_added_to_group, handler: ((this: void, arg0: runtime.on_unit_added_to_group) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_unit_group_created, handler: ((this: void, arg0: runtime.on_unit_group_created) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_unit_group_finished_gathering, handler: ((this: void, arg0: runtime.on_unit_group_finished_gathering) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_unit_removed_from_group, handler: ((this: void, arg0: runtime.on_unit_removed_from_group) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.on_worker_robot_expired, handler: ((this: void, arg0: runtime.on_worker_robot_expired) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.script_raised_built, handler: ((this: void, arg0: runtime.script_raised_built) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.script_raised_destroy, handler: ((this: void, arg0: runtime.script_raised_destroy) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.script_raised_revive, handler: ((this: void, arg0: runtime.script_raised_revive) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.script_raised_set_tiles, handler: ((this: void, arg0: runtime.script_raised_set_tiles) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events.script_raised_teleported, handler: ((this: void, arg0: runtime.script_raised_teleported) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a handler to run on the specified event(s). Each mod can only register once for every event, as any additional registration will overwrite the previous one. This holds true even if different filters are used for subsequent registrations.
     * @param event The event(s) or custom-input to invoke the handler on.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @param filters The filters for this event. Can only be used when registering for individual events.
     * @example ```
    -- Register for the on_tick event to print the current tick to console each tick
    script.on_event(defines.events.on_tick,
    function(event) game.print(event.tick) end)
    ```
     * @example ```
    -- Register for the on_built_entity event, limiting it to only be received when a `"fast-inserter"` is built
    script.on_event(defines.events.on_built_entity,
    function(event) game.print("Gotta go fast!") end,
    {{filter = "name", name = "fast-inserter"}})
    ```
     */
    on_event(this: void, event: defines.events | string | (defines.events | string)[], handler: ((this: void, arg0: EventData) => any) | nil, filters?: EventFilter): void;
    /**
     * Register a function to be run on mod initialization.
     *
     * This is only called when a new save game is created or when a save file is loaded that previously didn't contain the mod. During it, the mod gets the chance to set up initial values that it will use for its lifetime. It has full access to {@link LuaGameScript | runtime:LuaGameScript} and the {@link storage | runtime:storage} table and can change anything about them that it deems appropriate. No other events will be raised for the mod until it has finished this step.
     *
     * For more context, refer to the {@link Data Lifecycle | runtime:data-lifecycle} page.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     * @example ```
    -- Initialize a `players` table in `storage` for later use
    script.on_init(function()
      storage.players = {}
    end)
    ```
     */
    on_init(this: void, handler: ((this: void) => any) | nil): void;
    /**
     * Register a function to be run on save load. This is only called for mods that have been part of the save previously, or for players connecting to a running multiplayer session.
     *
     * It gives the mod the opportunity to rectify potential differences in local state introduced by the save/load cycle. Doing anything other than the following three will lead to desyncs, breaking multiplayer and replay functionality. Access to {@link LuaGameScript | runtime:LuaGameScript} is not available. The {@link storage | runtime:storage} table can be accessed and is safe to read from, but not write to, as doing so will lead to an error.
     *
     * The only legitimate uses of this event are these:
     *
     * - Re-setup {@link metatables | https://www.lua.org/pil/13.html} as they are not persisted through the save/load cycle.
     *
     * - Re-setup conditional event handlers, meaning subscribing to an event only when some condition is met to save processing time.
     *
     * - Create local references to data stored in the {@link storage | runtime:storage} table.
     *
     * For all other purposes, {@link LuaBootstrap::on_init | runtime:LuaBootstrap::on_init}, {@link LuaBootstrap::on_configuration_changed | runtime:LuaBootstrap::on_configuration_changed} or {@link migrations | runtime:migrations} should be used instead.
     *
     * For more context, refer to the {@link Data Lifecycle | runtime:data-lifecycle} page.
     * @param handler The handler for this event. Passing `nil` will unregister it.
     */
    on_load(this: void, handler: ((this: void) => any) | nil): void;
    /**
     * Register a handler to run every nth-tick(s). When the game is on tick 0 it will trigger all registered handlers.
     * @param tick The nth-tick(s) to invoke the handler on. Passing `nil` as the only parameter will unregister all nth-tick handlers.
     * @param handler The handler to run. Passing `nil` will unregister it for the provided nth-tick(s).
     */
    on_nth_tick(this: void, tick: uint | uint[] | nil, handler: ((this: void, arg0: NthTickEventData) => any) | nil): void;
    /**
     * @param table.entity The entity that was built.
     */
    raise_biter_base_built(this: void, table: {
        entity: LuaEntity;
    }): void;
    /**
     * @param table.player_index The player doing the chatting.
     * @param table.message The chat message to send.
     */
    raise_console_chat(this: void, table: {
        player_index: uint;
        message: string;
    }): void;
    /**
     * Raise an event. Only events generated with {@link LuaBootstrap::generate_event_name | runtime:LuaBootstrap::generate_event_name} and the following can be raised:
     * Events that can be raised manually:
     *
     * - {@link on_console_chat | runtime:on_console_chat}
     * - {@link on_player_crafted_item | runtime:on_player_crafted_item}
     * - {@link on_player_fast_transferred | runtime:on_player_fast_transferred}
     * - {@link on_biter_base_built | runtime:on_biter_base_built}
     * - {@link on_market_item_purchased | runtime:on_market_item_purchased}
     * - {@link script_raised_built | runtime:script_raised_built}
     * - {@link script_raised_destroy | runtime:script_raised_destroy}
     * - {@link script_raised_revive | runtime:script_raised_revive}
     * - {@link script_raised_teleported | runtime:script_raised_teleported}
     * - {@link script_raised_set_tiles | runtime:script_raised_set_tiles}
     * @param event ID or name of the event to raise.
     * @param data Table with extra data that will be passed to the event handler. Any invalid LuaObjects will silently stop the event from being raised.
     * @example ```
    -- Raise the on_console_chat event with the desired message 'from' the first player
    local data = {player_index = 1, message = "Hello friends!"}
    script.raise_event(defines.events.on_console_chat, data)
    ```
     */
    raise_event(this: void, event: uint | string, data: table): void;
    /**
     * @param table.player_index The player who did the purchasing.
     * @param table.market The market entity.
     * @param table.offer_index The index of the offer purchased.
     * @param table.count The amount of offers purchased.
     */
    raise_market_item_purchased(this: void, table: {
        player_index: uint;
        market: LuaEntity;
        offer_index: uint;
        count: uint;
    }): void;
    /**
     * @param table.item_stack The item that has been crafted.
     * @param table.player_index The player doing the crafting.
     * @param table.recipe The recipe used to craft this item.
     */
    raise_player_crafted_item(this: void, table: {
        item_stack: LuaItemStack;
        player_index: uint;
        recipe: RecipeID;
    }): void;
    /**
     * @param table.player_index The player transferred from or to.
     * @param table.entity The entity transferred from or to.
     * @param table.from_player Whether the transfer was from player to entity. If `false`, the transfer was from entity to player.
     * @param table.is_split Whether the transfer was a split action (half stack).
     */
    raise_player_fast_transferred(this: void, table: {
        player_index: uint;
        entity: LuaEntity;
        from_player: boolean;
        is_split: boolean;
    }): void;
    /**
     * @param table.entity The entity that has been built.
     */
    raise_script_built(this: void, table: {
        entity: LuaEntity;
    }): void;
    /**
     * @param table.entity The entity that was destroyed.
     */
    raise_script_destroy(this: void, table: {
        entity: LuaEntity;
    }): void;
    /**
     * @param table.entity The entity that was revived.
     * @param table.tags The tags associated with this entity, if any.
     */
    raise_script_revive(this: void, table: {
        entity: LuaEntity;
        tags?: Tags;
    }): void;
    /**
     * @param table.surface_index The surface whose tiles have been changed.
     * @param table.tiles The tiles that have been changed.
     */
    raise_script_set_tiles(this: void, table: {
        surface_index: uint;
        tiles: Tile[];
    }): void;
    /**
     * @param table.entity The entity that was teleported.
     * @param table.old_surface_index The entity's surface before the teleportation.
     * @param table.old_position The entity's position before the teleportation.
     */
    raise_script_teleported(this: void, table: {
        entity: LuaEntity;
        old_surface_index: uint8;
        old_position: MapPosition;
    }): void;
    /**
     * Register a metatable to have linkage recorded and restored when saving/loading.
     *
     * The metatable itself will not be saved. Instead, only the linkage to a registered metatable is saved, and the metatable registered under that name will be used when loading the table.
     *
     * `register_metatable()` can not be used in the console, in event listeners or during a `remote.call()`.
     *
     * The metatable first needs to be defined in the mod's root scope, then registered using this method. From then on, it will be properly restored for tables in {@link storage | runtime:storage}.
     *
     * ```
     * local metatable = {
     *   __index = function(key)
     *     return "no value for key " .. key
     *   end
     * }
     * script.register_metatable("my_metatable", metatable)
     * ```
     *
     * This previously defined `metatable` can then be set on any table as usual:
     *
     * ```
     * local table = {key="value"}
     * setmetatable(table, metatable)
     * ```
     * @param name The name of this metatable. Names must be unique per mod.
     * @param metatable The metatable to register.
     */
    register_metatable(this: void, name: string, metatable: table): void;
    /**
     * Registers an object so that after it's destroyed, {@link on_object_destroyed | runtime:on_object_destroyed} is called.
     *
     * Once an object is registered, it stays registered until it is actually destroyed, even through save/load cycles. The registration is global across all mods, meaning once one mod registers an object, all mods listening to {@link on_object_destroyed | runtime:on_object_destroyed} will receive the event when it is destroyed. Registering the same object multiple times will still only fire the destruction event once, and will return the same registration number.
     *
     * Depending on when a given object is destroyed, {@link on_object_destroyed | runtime:on_object_destroyed} will either be fired at the end of the current tick or at the end of the next tick.
     * @param object The object to register.
     * @returns [0] - The registration number. It is used to identify the object in the {@link on_object_destroyed | runtime:on_object_destroyed} event.
     * @returns [1] - Useful identifier of the object if it has one. This identifier is specific to the object type, for example for trains it is the value {@link LuaTrain::id | runtime:LuaTrain::id}.
     * @returns [2] - Type of the target object.
     */
    register_on_object_destroyed(this: void, object: RegistrationTarget): LuaMultiReturn<[
        uint64,
        uint64,
        defines.target_type
    ]>;
    /**
     * Sets the filters for the given event. The filters are only retained when set after the actual event registration, because registering for an event with different or no filters will overwrite previously set ones.
     *
     * Limit the {@link on_marked_for_deconstruction | runtime:on_marked_for_deconstruction} event to only be received when a non-ghost entity is marked for deconstruction.
     *
     * ```
     * script.set_event_filter(defines.events.on_marked_for_deconstruction, {{filter = "ghost", invert = true}})
     * ```
     *
     * Limit the {@link on_built_entity | runtime:on_built_entity} event to only be received when either a `unit` or a `unit-spawner` is built.
     *
     * ```
     * script.set_event_filter(defines.events.on_built_entity, {{filter = "type", type = "unit"}, {filter = "type", type = "unit-spawner"}})
     * ```
     *
     * Limit the {@link on_entity_damaged | runtime:on_entity_damaged} event to only be received when a `rail` is damaged by an `acid` attack.
     *
     * ```
     * script.set_event_filter(defines.events.on_entity_damaged, {{filter = "rail"}, {filter = "damage-type", type = "acid", mode = "and"}})
     * ```
     * @param event ID of the event to filter.
     * @param filters The filters or `nil` to clear them.
     */
    set_event_filter(this: void, event: uint, filters?: EventFilter): void;
    /**
     * A dictionary listing the names of all currently active mods and mapping them to their version.
     * @example ```
    -- This will print the names and versions of all active mods to the console.
    for name, version in pairs(script.active_mods) do
      game.print(name .. " version " .. version)
    end
    ```
     */
    readonly active_mods: Record<string, string>;
    /**
     * A dictionary of feature flags mapping to whether they are enabled.
     */
    readonly feature_flags: {
        quality: boolean;
        rail_bridges: boolean;
        space_travel: boolean;
        spoiling: boolean;
        freezing: boolean;
        segmented_units: boolean;
        expansion_shaders: boolean;
    };
    /**
     * Information about the currently running scenario/campaign/tutorial.
     */
    readonly level: {
        /**
         * Is this level a simulation? (The main menu and 'Tips and tricks' use simulations)
         */
        is_simulation?: boolean;
        /**
         * Is this level a tutorial?
         */
        is_tutorial?: boolean;
        /**
         * The campaign name if any.
         */
        campaign_name?: string;
        /**
         * The level name.
         */
        level_name: string;
        /**
         * The mod name if any.
         */
        mod_name?: string;
    };
    /**
     * The name of the mod from the environment this is used in.
     */
    readonly mod_name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
}
/**
 * A reference to the burner energy source owned by a specific {@link LuaEntity | runtime:LuaEntity} or {@link LuaEquipment | runtime:LuaEquipment}.
 */
interface LuaBurner {
    /**
     * The burnt result inventory.
     */
    readonly burnt_result_inventory: LuaInventory;
    /**
     * The currently burning item. Writing `nil` will void the currently burning item without producing a {@link LuaBurner::burnt_result | runtime:LuaBurner::burnt_result}.
     *
     * Writing to this automatically handles correcting {@link LuaBurner::remaining_burning_fuel | runtime:LuaBurner::remaining_burning_fuel}.
     */
    readonly currently_burning?: ItemIDAndQualityIDPair;
    /**
     * The currently burning item. Writing `nil` will void the currently burning item without producing a {@link LuaBurner::burnt_result | runtime:LuaBurner::burnt_result}.
     *
     * Writing to this automatically handles correcting {@link LuaBurner::remaining_burning_fuel | runtime:LuaBurner::remaining_burning_fuel}.
     * @customName currently_burning
     */
    currently_burning_write?: ItemWithQualityID;
    /**
     * The fuel categories this burner uses.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    readonly fuel_categories: Record<string, true>;
    /**
     * The current heat (energy) stored in this burner.
     */
    heat: double;
    /**
     * The maximum heat (maximum energy) that this burner can store.
     */
    readonly heat_capacity: double;
    /**
     * The fuel inventory.
     */
    readonly inventory: LuaInventory;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The owner of this burner energy source
     */
    readonly owner: LuaEntity | LuaEquipment;
    /**
     * The amount of energy left in the currently-burning fuel item.
     *
     * Writing to this will silently do nothing if there's no {@link LuaBurner::currently_burning | runtime:LuaBurner::currently_burning} set.
     */
    remaining_burning_fuel: double;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a burner energy source.
 */
interface LuaBurnerPrototype {
    readonly burnt_inventory_size: uint;
    readonly effectivity: double;
    /**
     * The table of emissions of this energy source in `pollution/Joule`, indexed by pollutant type. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions_per_joule: Record<string, double>;
    /**
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    readonly fuel_categories: Record<string, true>;
    readonly fuel_inventory_size: uint;
    /**
     * The light flicker definition for this burner prototype.
     */
    readonly light_flicker?: {
        minimum_intensity: float;
        maximum_intensity: float;
        derivation_change_frequency: float;
        derivation_change_deviation: float;
        border_fix_speed: float;
        minimum_light_size: float;
        light_intensity_to_size_coefficient: float;
        color: Color;
    };
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly render_no_network_icon: boolean;
    readonly render_no_power_icon: boolean;
    /**
     * The smoke sources for this burner prototype.
     */
    readonly smoke?: SmokeSource[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Description of burner usage.
 */
interface LuaBurnerUsagePrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for cargo landing pad.
 */
interface LuaCargoLandingPadControlBehavior extends LuaControlBehavior {
    /**
     * The circuit mode of operations for the cargo landing pad.
     */
    circuit_exclusive_mode_of_operation: defines.control_behavior.cargo_landing_pad.exclusive_mode;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A chunk iterator can be used for iterating chunks coordinates of a surface.
 *
 * The returned type is a {@link ChunkPositionAndArea | runtime:ChunkPositionAndArea} containing the chunk coordinates and its area.
 * @example ```
for chunk in some_surface.get_chunks() do
  game.player.print("x: " .. chunk.x .. ", y: " .. chunk.y)
  game.player.print("area: " .. serpent.line(chunk.area))
end
```
 */
interface LuaChunkIterator {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Gets the next chunk position if the iterator is not yet done and increments the it.
     */
    (this: void): ChunkPositionAndArea | null;
}
/**
 * A circuit network associated with a given entity, connector, and wire type.
 */
interface LuaCircuitNetwork {
    /**
     * @param signal The signal to read.
     * @returns The current value of the signal.
     */
    get_signal(this: void, signal: SignalID): int;
    /**
     * The number of circuits connected to this network.
     */
    readonly connected_circuit_count: uint;
    /**
     * The entity this circuit network reference is associated with.
     */
    readonly entity: LuaEntity;
    /**
     * The circuit networks ID.
     */
    readonly network_id: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The circuit network signals last tick. `nil` if there were no signals last tick.
     */
    readonly signals?: Signal[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Wire connector ID on associated entity this network was gotten from.
     */
    readonly wire_connector_id: defines.wire_connector_id;
    /**
     * The wire type this network is associated with.
     */
    readonly wire_type: defines.wire_type;
}
/**
 * Prototype of a collision layer.
 */
interface LuaCollisionLayerPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
interface LuaCombinatorControlBehavior extends LuaControlBehavior {
    /**
     * Gets the value of a specific signal sent by this combinator behavior last tick or `nil` if the signal didn't exist.
     * @param signal The signal to get
     */
    get_signal_last_tick(this: void, signal: SignalID): int | null;
    /**
     * The circuit network signals sent by this combinator last tick.
     */
    readonly signals_last_tick: Signal[];
}
/**
 * Allows for the registration of custom console commands through the global object named `commands`. Similarly to {@link event subscriptions | runtime:LuaBootstrap::on_event}, these don't persist through a save-and-load cycle.
 */
interface LuaCommandProcessor {
    /**
     * Add a custom console command.
     *
     * Trying to add a command with the `name` of a game command or the name of a custom command that is already in use will result in an error.
     *
     * This example command will register a custom event called `print_tick` that prints the current tick to either the player issuing the command or to everyone on the server, depending on the command parameter:
     *
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
     * This shows the usage of the table that gets passed to any function handling a custom command. This specific example makes use of the `tick` and the optional `player_index` and `parameter` fields. The user is supposed to either call it without any parameter (`"/print_tick"`) or with the `"me"` parameter (`"/print_tick me"`).
     * @param name The desired name of the command (case sensitive).
     * @param help The localised help message. It will be shown to players using the `/help` command.
     * @param _function The function that will be called when this command is invoked.
     */
    add_command(this: void, name: string, help: LocalisedString, _function: (this: void, arg0: CustomCommandData) => any): void;
    /**
     * Remove a custom console command.
     * @param name The name of the command to remove (case sensitive).
     * @returns Whether the command was successfully removed. Returns `false` if the command didn't exist.
     */
    remove_command(this: void, name: string): boolean;
    /**
     * Lists the custom commands registered by scripts through `LuaCommandProcessor`.
     */
    readonly commands: Record<string, LocalisedString>;
    /**
     * Lists the built-in commands of the core game. The {@link wiki | https://wiki.factorio.com/Console} has an overview of these.
     */
    readonly game_commands: Record<string, LocalisedString>;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
}
/**
 * AI object which can be ordered commands. This can represent a UnitGroup (a set of multiple commandables) or can be a single Unit, SpiderUnit or other commandable entity.
 */
interface LuaCommandable {
    /**
     * Adds a member to this UnitGroup. Has the same effect as setting defines.command.group command on the member to join the group.
     *
     * The member must have the same force be on the same surface as the group.
     */
    add_member(this: void, member: LuaCommandable | LuaEntity): void;
    /**
     * Destroys this commandable. If it is a unit group, members will not be destroyed, they will be merely unlinked from the group.
     */
    destroy(this: void): void;
    /**
     * Release the commandable from the spawner. This allows the spawner to continue spawning additional units.
     */
    release_from_spawner(this: void): void;
    /**
     * Make this group autonomous. Autonomous groups will automatically attack polluted areas. Autonomous groups aren't considered to be {@link script-driven | runtime:LuaCommandable::is_script_driven}.
     */
    set_autonomous(this: void): void;
    /**
     * Give this commandable a command.
     */
    set_command(this: void, command: Command): void;
    /**
     * Give this commandable a distraction command.
     */
    set_distraction_command(this: void, command: Command): void;
    /**
     * Make the group start moving even if some of its members haven't yet arrived.
     */
    start_moving(this: void): void;
    /**
     * The command of this commandable, if any.
     */
    readonly command?: Command;
    /**
     * Non recursively returns all members of this unit group.
     */
    readonly commandable_members: LuaCommandable[];
    /**
     * The distraction command of this commandable, if any.
     */
    readonly distraction_command?: Command;
    /**
     * Returns entity object for this commandable.
     */
    readonly entity: LuaEntity;
    /**
     * The force of this commandable.
     */
    readonly force: LuaForce;
    /**
     * If this commandable has a command assigned.
     */
    readonly has_command: boolean;
    /**
     * If this commandable is Entity.
     */
    readonly is_entity: boolean;
    /**
     * Whether this unit group is controlled by a script or by the game engine. This can be changed using {@link LuaCommandable::set_autonomous | runtime:LuaCommandable::set_autonomous}.
     */
    readonly is_script_driven: boolean;
    /**
     * If this commandable is UnitGroup.
     */
    readonly is_unit_group: boolean;
    /**
     * All entity members of this unit group, recursive (if unit group is member of this unit group, its members will be returned here).
     */
    readonly members: LuaEntity[];
    /**
     * Current moving state of the commandable's behavior
     */
    readonly moving_state: defines.moving_state;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The unit group this commandable is a member of, if any.
     */
    readonly parent_group?: LuaCommandable;
    /**
     * Current position of this commandable.
     *
     * If commandable is a UnitGroup, this can have different meanings depending on the group state. When the group is gathering, the position is the place of gathering. When the group is moving, the position is the expected position of its members along the path. When the group is attacking, it is the average position of its members.
     */
    readonly position: MapPosition;
    /**
     * The spawner associated with this commandable, if any.
     */
    readonly spawner?: LuaEntity;
    /**
     * Whether this group is gathering, moving or attacking.
     */
    readonly state: defines.group_state;
    /**
     * Surface this commandable is on.
     */
    readonly surface: LuaSurface;
    /**
     * Unique identifier of this commandable.
     */
    readonly unique_id: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for constant combinators.
 */
interface LuaConstantCombinatorControlBehavior extends LuaControlBehavior {
    /**
     * Adds a new logistic section to this constant combinator if possible.
     * @param group The group to assign this section to.
     * @returns Logistic section if added.
     */
    add_section(this: void, group?: string): LuaLogisticSection | null;
    /**
     * Gets section on the selected index, if it exists.
     * @param section_index Index of the section.
     */
    get_section(this: void, section_index: uint): LuaLogisticSection | null;
    /**
     * Removes the given logistic section if possible. Removal may fail if the section index is out of range or the section is not {@link manual | runtime:LuaLogisticSection::is_manual}.
     * @param section_index Index of the section.
     * @returns Whether section was removed.
     */
    remove_section(this: void, section_index: uint): boolean;
    /**
     * Turns this constant combinator on and off.
     */
    enabled: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * All logistic sections of this constant combinator.
     */
    readonly sections: LuaLogisticSection[];
    /**
     * Amount of logistic sections this constant combinator has.
     */
    readonly sections_count: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for container entities.
 */
interface LuaContainerControlBehavior extends LuaControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * `true` if this container is sending its content to a circuit network
     */
    read_contents: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * This is an abstract base class containing the common functionality between {@link LuaPlayer | runtime:LuaPlayer} and entities (see {@link LuaEntity | runtime:LuaEntity}). When accessing player-related functions through a {@link LuaEntity | runtime:LuaEntity}, it must refer to a character entity.
 */
interface LuaControl {
    /**
     * Begins crafting the given count of the given recipe.
     * @param table.count The count to craft.
     * @param table.recipe The recipe to craft.
     * @param table.silent If false and the recipe can't be crafted the requested number of times printing the failure is skipped.
     * @returns The count that was actually started crafting.
     */
    begin_crafting(this: void, table: {
        count: uint;
        recipe: RecipeID;
        silent?: boolean;
    }): uint;
    /**
     * Can at least some items be inserted?
     * @param items Items that would be inserted.
     * @returns `true` if at least a part of the given items could be inserted into this inventory.
     */
    can_insert(this: void, items: ItemStackIdentification): boolean;
    /**
     * Can a given entity be opened or accessed?
     */
    can_reach_entity(this: void, entity: LuaEntity): boolean;
    /**
     * Cancels crafting the given count of the given crafting queue index.
     * @param table.index The crafting queue index.
     * @param table.count The count to cancel crafting.
     */
    cancel_crafting(this: void, table: {
        index: uint;
        count: uint;
    }): void;
    /**
     * Removes the arrow created by `set_gui_arrow`.
     */
    clear_gui_arrow(this: void): void;
    /**
     * Remove all items from this entity.
     */
    clear_items_inside(this: void): void;
    /**
     * Unselect any selected entity.
     */
    clear_selected_entity(this: void): void;
    /**
     * Disable the flashlight.
     */
    disable_flashlight(this: void): void;
    /**
     * Enable the flashlight.
     */
    enable_flashlight(this: void): void;
    /**
     * Gets the count of the given recipe that can be crafted.
     * @param recipe The recipe.
     * @returns The count that can be crafted.
     */
    get_craftable_count(this: void, recipe: RecipeID): uint;
    /**
     * Get an inventory belonging to this entity. This can be either the "main" inventory or some auxiliary one, like the module slots or logistic trash slots.
     *
     * A given {@link defines.inventory | runtime:defines.inventory} is only meaningful for the corresponding LuaObject type. EG: get_inventory(defines.inventory.character_main) is only meaningful if 'this' is a player character. You may get a value back but if the type of 'this' isn't the type referred to by the {@link defines.inventory | runtime:defines.inventory} it's almost guaranteed to not be the inventory asked for.
     * @returns The inventory or `nil` if none with the given index was found.
     */
    get_inventory(this: void, inventory: defines.inventory): LuaInventory | null;
    /**
     * Get the number of all or some items in this entity.
     * @param item Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(this: void, item?: ItemID): uint;
    /**
     * Gets the main inventory for this character or player if this is a character or player.
     * @returns The inventory or `nil` if this entity is not a character or player.
     */
    get_main_inventory(this: void): LuaInventory | null;
    /**
     * The highest index of all inventories this entity can use. Allows iteration over all of them if desired.
     * @example ```
    for k = 1, entity.get_max_inventory_index() do [...] end
    ```
     */
    get_max_inventory_index(this: void): defines.inventory;
    /**
     * Gets the requester logistic point for this entity if it has one.
     */
    get_requester_point(this: void): LuaLogisticPoint | null;
    /**
     * Does this entity have any item inside it?
     */
    has_items_inside(this: void): boolean;
    /**
     * Insert items into this entity. This works the same way as inserters or shift-clicking: the "best" inventory is chosen automatically.
     * @param items The items to insert.
     * @returns The number of items that were actually inserted.
     */
    insert(this: void, items: ItemStackIdentification): uint;
    /**
     * Returns whether the player is holding a blueprint. This takes both blueprint items as well as blueprint records from the blueprint library into account.
     *
     * Note that both this method refers to the currently selected blueprint, which means that a blueprint book with a selected blueprint will return the information as well.
     */
    is_cursor_blueprint(this: void): boolean;
    /**
     * Returns whether the player is holding something in the cursor. Takes into account items from the blueprint library, as well as items and ghost cursor.
     */
    is_cursor_empty(this: void): boolean;
    /**
     * Is the flashlight enabled.
     */
    is_flashlight_enabled(this: void): boolean;
    /**
     * When `true` control adapter is a LuaPlayer object, `false` for entities including characters with players.
     */
    is_player(this: void): boolean;
    /**
     * Mines the given entity as if this player (or character) mined it.
     * @param entity The entity to mine
     * @param force Forces mining the entity even if the items can't fit in the player.
     * @returns Whether the mining succeeded.
     */
    mine_entity(this: void, entity: LuaEntity, force?: boolean): boolean;
    /**
     * Mines the given tile as if this player (or character) mined it.
     * @param tile The tile to mine.
     * @returns Whether the mining succeeded.
     */
    mine_tile(this: void, tile: LuaTile): boolean;
    /**
     * Open the technology GUI and select a given technology.
     * @param technology The technology to select after opening the GUI.
     */
    open_technology_gui(this: void, technology?: TechnologyID): void;
    /**
     * Remove items from this entity.
     * @param items The items to remove.
     * @returns The number of items that were actually removed.
     */
    remove_item(this: void, items: ItemStackIdentification): uint;
    /**
     * Sets if this characer or player is driving. Returns if the player or character is still driving.
     * @param driving True for enter-vehicle, false for leave.
     * @param force If true, the player will be ejected and left at the position of the car if normal "leave" is not possible.
     */
    set_driving(this: void, driving: bool, force?: bool): void;
    /**
     * Create an arrow which points at this entity. This is used in the tutorial. For examples, see `control.lua` in the campaign missions.
     */
    set_gui_arrow(this: void, table: LuaControlSetGuiArrowParams): void;
    /**
     * Teleport the entity to a given position, possibly on another surface.
     *
     * Some entities may not be teleported. For instance, transport belts won't allow teleportation and this method will always return `false` when used on any such entity.
     *
     * You can also pass 1 or 2 numbers as the parameters and they will be used as relative teleport coordinates `'teleport(0, 1)'` to move the entity 1 tile positive y. `'teleport(4)'` to move the entity 4 tiles to the positive x.
     *
     * `script_raised_teleported` will not be raised if teleporting a player with no character.
     * @param position Where to teleport to.
     * @param surface Surface to teleport to. If not given, will teleport to the entity's current surface. Only players, cars, and spidertrons can be teleported cross-surface.
     * @param raise_teleported If true, {@link defines.events.script_raised_teleported | runtime:defines.events.script_raised_teleported} will be fired on successful entity teleportation.
     * @param snap_to_grid If false the exact position given is used to instead of snapping to the normal entity grid. This only applies if the entity normally snaps to the grid.
     * @returns `true` if the entity was successfully teleported.
     */
    teleport(this: void, position: MapPosition, surface?: SurfaceIdentification, raise_teleported?: boolean, snap_to_grid?: boolean): boolean;
    /**
     * Select an entity, as if by hovering the mouse above it.
     * @param position Position of the entity to select.
     */
    update_selected_entity(this: void, position: MapPosition): void;
    /**
     * The build distance of this character or max uint when not a character or player connected to a character.
     */
    readonly build_distance: uint;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_additional_mining_categories: string[];
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_build_distance_bonus: uint;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_crafting_speed_modifier: double;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_health_bonus: float;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_inventory_slots_bonus: uint;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_item_drop_distance_bonus: uint;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_item_pickup_distance_bonus: uint;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_loot_pickup_distance_bonus: uint;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_maximum_following_robot_count_bonus: uint;
    /**
     * The current mining progress between 0 and 1 of this character, or 0 if they aren't mining.
     */
    readonly character_mining_progress: double;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_mining_speed_modifier: double;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_reach_distance_bonus: uint;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_resource_reach_distance_bonus: uint;
    /**
     * The current movement speed of this character, including effects from exoskeletons, tiles, stickers and shooting.
     */
    readonly character_running_speed: double;
    /**
     * Modifies the running speed of this character by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`.
     *
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_running_speed_modifier: double;
    /**
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    character_trash_slot_count_bonus: uint;
    /**
     * When `true` hand crafting is free and instant.
     */
    cheat_mode: boolean;
    /**
     * The current crafting queue items.
     */
    readonly crafting_queue: CraftingQueueItem[];
    /**
     * The crafting queue progress in the range `[0-1]`. `0` when no recipe is being crafted.
     */
    crafting_queue_progress: double;
    /**
     * Size of the crafting queue.
     */
    readonly crafting_queue_size: uint;
    /**
     * The ghost prototype in the player's cursor.
     *
     * Items in the cursor stack will take priority over the cursor ghost.
     */
    readonly cursor_ghost?: ItemIDAndQualityIDPair;
    /**
     * The ghost prototype in the player's cursor.
     *
     * Items in the cursor stack will take priority over the cursor ghost.
     * @customName cursor_ghost
     */
    cursor_ghost_write?: ItemWithQualityID;
    /**
     * The blueprint record in the player's cursor.
     */
    readonly cursor_record?: LuaRecord;
    /**
     * The player's cursor stack. `nil` if the player controller is a spectator.
     * @example ```
    -- Even though this property is marked as read-only, it returns a LuaItemStack,
    -- meaning it can be manipulated like so:
    player.cursor_stack.clear()
    ```
     */
    readonly cursor_stack?: LuaItemStack;
    /**
     * `true` if the player is in a vehicle. Writing to this attribute puts the player in or out of a vehicle.
     */
    driving: boolean;
    /**
     * The item drop distance of this character or max uint when not a character or player connected to a character.
     */
    readonly drop_item_distance: uint;
    /**
     * The current combat robots following the character.
     *
     * When called on a {@link LuaPlayer | runtime:LuaPlayer}, it must be associated with a character (see {@link LuaPlayer::character | runtime:LuaPlayer::character}).
     */
    readonly following_robots: LuaEntity[];
    /**
     * The force of this entity. Reading will always give a {@link LuaForce | runtime:LuaForce}, but it is possible to assign either {@link string | runtime:string}, {@link uint8 | runtime:uint8} or {@link LuaForce | runtime:LuaForce} to this attribute to change the force.
     */
    readonly force: LuaForce;
    /**
     * The force of this entity. Reading will always give a {@link LuaForce | runtime:LuaForce}, but it is possible to assign either {@link string | runtime:string}, {@link uint8 | runtime:uint8} or {@link LuaForce | runtime:LuaForce} to this attribute to change the force.
     * @customName force
     */
    force_write: ForceID;
    /**
     * Unique {@link index | runtime:LuaForce::index} (ID) associated with the force of this entity.
     */
    readonly force_index: uint;
    /**
     * Whether this character entity is in combat.
     */
    readonly in_combat: boolean;
    /**
     * The item pickup distance of this character or max double when not a character or player connected to a character.
     */
    readonly item_pickup_distance: double;
    /**
     * The loot pickup distance of this character or max double when not a character or player connected to a character.
     */
    readonly loot_pickup_distance: double;
    /**
     * Current mining state.
     *
     * When the player isn't mining tiles the player will mine whatever entity is currently selected. See {@link LuaControl::selected | runtime:LuaControl::selected} and {@link LuaControl::update_selected_entity | runtime:LuaControl::update_selected_entity}.
     */
    mining_state: {
        /**
         * Whether the player is mining at all.
         */
        mining: boolean;
        /**
         * What location the player is mining. Only relevant if `mining` is `true`.
         */
        position?: MapPosition;
    };
    /**
     * The GUI the player currently has open.
     *
     * This is the GUI that will asked to close (by firing the {@link on_gui_closed | runtime:on_gui_closed} event) when the `Esc` or `E` keys are pressed. If this attribute is non-nil, then writing `nil` or a new GUI to it will ask the existing GUI to close.
     *
     * Write supports any of the types. Read will return the `entity`, `equipment`, `equipment-grid`, `player`, `element`, `inventory` or `nil`.
     */
    opened?: LuaEntity | LuaItemStack | LuaEquipment | LuaEquipmentGrid | LuaPlayer | LuaGuiElement | LuaInventory | LuaLogisticNetwork | defines.gui_type;
    readonly opened_gui_type?: defines.gui_type;
    /**
     * Current item-picking state.
     */
    picking_state: boolean;
    /**
     * The current position of the entity.
     */
    readonly position: MapPosition;
    /**
     * The reach distance of this character or max uint when not a character or player connected to a character.
     */
    readonly reach_distance: uint;
    /**
     * Current repair state.
     */
    repair_state: {
        /**
         * The current state
         */
        repairing: boolean;
        /**
         * The position being repaired
         */
        position: MapPosition;
    };
    /**
     * The resource reach distance of this character or max double when not a character or player connected to a character.
     */
    readonly resource_reach_distance: double;
    /**
     * Current riding state of this car, or of the car this player is riding in.
     */
    riding_state: RidingState;
    /**
     * The currently selected entity. Assigning an entity will select it if is selectable, otherwise the selection is cleared.
     */
    selected?: LuaEntity;
    /**
     * Current shooting state.
     */
    shooting_state: {
        /**
         * The current state
         */
        state: defines.shooting;
        /**
         * The position being shot at
         */
        position: MapPosition;
    };
    /**
     * The surface this entity is currently on.
     */
    readonly surface: LuaSurface;
    /**
     * Unique {@link index | runtime:LuaSurface::index} (ID) associated with the surface this entity is currently on.
     */
    readonly surface_index: uint;
    /**
     * The vehicle the player is currently sitting in.
     */
    readonly vehicle?: LuaEntity;
    /**
     * Current walking state.
     * @example ```
    -- Make the player go north. Note that a one-shot action like this will only make the player walk for one tick.
    game.player.walking_state = {walking = true, direction = defines.direction.north}
    ```
     */
    walking_state: {
        /**
         * If `false`, the player is currently not walking; otherwise it's going somewhere
         */
        walking: boolean;
        /**
         * Direction where the player is walking
         */
        direction: defines.direction;
    };
}
type LuaControlSetGuiArrowParams = BaseLuaControlSetGuiArrowParams | LuaControlSetGuiArrowParamsCraftingQueue | LuaControlSetGuiArrowParamsEntity | LuaControlSetGuiArrowParamsItemStack | LuaControlSetGuiArrowParamsPosition;
interface BaseLuaControlSetGuiArrowParams {
    'margin': uint;
    /**
     * Where to point to. This field determines what other fields are mandatory.
     */
    'type': 'crafting_queue' | 'entity' | 'item_stack' | 'position';
}
/**
 *
 * Applies to variant case `crafting_queue`
 */
interface LuaControlSetGuiArrowParamsCraftingQueue extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory.
     */
    'type': 'crafting_queue';
    /**
     * Index in the crafting queue to point to.
     */
    'crafting_queueindex': uint;
}
/**
 *
 * Applies to variant case `entity`
 */
interface LuaControlSetGuiArrowParamsEntity extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory.
     */
    'type': 'entity';
    'entity': LuaEntity;
}
/**
 *
 * Applies to variant case `item_stack`
 */
interface LuaControlSetGuiArrowParamsItemStack extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory.
     */
    'type': 'item_stack';
    /**
     * Which inventory the stack is in.
     */
    'inventory_index': defines.inventory;
    /**
     * Which stack to point to.
     */
    'item_stack_index': uint;
    'source': 'player' | 'target' | 'player-quickbar';
}
/**
 *
 * Applies to variant case `position`
 */
interface LuaControlSetGuiArrowParamsPosition extends BaseLuaControlSetGuiArrowParams {
    /**
     * Where to point to. This field determines what other fields are mandatory.
     */
    'type': 'position';
    'position': MapPosition;
}
/**
 * The control behavior for an entity. Inserters have logistic network and circuit network behavior logic, lamps have circuit logic and so on. This is an abstract base class that concrete control behaviors inherit.
 *
 * An control reference becomes invalid once the control behavior is removed or the entity (see {@link LuaEntity | runtime:LuaEntity}) it resides in is destroyed.
 */
interface LuaControlBehavior {
    /**
     * @param wire_connector_id Wire connector to get circuit network for.
     * @returns The circuit network or nil.
     */
    get_circuit_network(this: void, wire_connector_id: defines.wire_connector_id): LuaCircuitNetwork | null;
    /**
     * The entity this control behavior belongs to.
     */
    readonly entity: LuaEntity;
    /**
     * The concrete type of this control behavior.
     */
    readonly type: defines.control_behavior.type;
}
/**
 * A custom tag that shows on the map view.
 */
interface LuaCustomChartTag {
    /**
     * Destroys this tag.
     */
    destroy(this: void): void;
    /**
     * The force this tag belongs to.
     */
    readonly force: LuaForce;
    /**
     * This tag's icon, if it has one. Writing `nil` removes it.
     */
    icon: SignalID;
    /**
     * The player who last edited this tag.
     */
    last_user?: LuaPlayer;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The position of this tag.
     */
    readonly position: MapPosition;
    /**
     * The surface this tag belongs to.
     */
    readonly surface: LuaSurface;
    /**
     * The unique ID for this tag on this force.
     */
    readonly tag_number: uint;
    text: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a custom event.
 */
interface LuaCustomEventPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a custom input.
 */
interface LuaCustomInputPrototype extends LuaPrototypeBase {
    /**
     * The action that happens when this custom input is triggered.
     */
    readonly action: string;
    /**
     * The default alternative key sequence for this custom input, if any
     */
    readonly alternative_key_sequence?: string;
    /**
     * The consuming type.
     */
    readonly consuming: 'none' | 'game-only';
    /**
     * The default controller alternative key sequence for this custom input, if any
     */
    readonly controller_alternative_key_sequence?: string;
    /**
     * The default controller key sequence for this custom input, if any
     */
    readonly controller_key_sequence?: string;
    /**
     * Whether this custom input is enabled. Disabled custom inputs exist but are not used by the game.
     */
    readonly enabled: boolean;
    /**
     * Whether this custom input is enabled while using the cutscene controller.
     */
    readonly enabled_while_in_cutscene: boolean;
    /**
     * Whether this custom input is enabled while using the spectator controller.
     */
    readonly enabled_while_spectating: boolean;
    /**
     * Whether this custom input will include the selected prototype (if any) when triggered.
     */
    readonly include_selected_prototype: boolean;
    /**
     * The item that gets spawned when this custom input is fired, if any.
     */
    readonly item_to_spawn?: LuaItemPrototype;
    /**
     * The default key sequence for this custom input.
     */
    readonly key_sequence: string;
    /**
     * The linked game control name, if any.
     */
    readonly linked_game_control?: LinkedGameControl;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Lazily evaluated table. For performance reasons, we sometimes return a custom table-like type instead of a native Lua table. This custom type lazily constructs the necessary Lua wrappers of the corresponding C++ objects, therefore preventing their unnecessary construction in some cases.
 *
 * There are some notable consequences to the usage of a custom table type rather than the native Lua table type: Iterating a custom table is only possible using the `pairs` Lua function; `ipairs` won't work. Another key difference is that custom tables cannot be serialised into a game save file -- if saving the game would require serialisation of a custom table, an error will be displayed and the game will not be saved.
 *
 * In previous versions of Factorio, this would create a {@link LuaPlayer | runtime:LuaPlayer} instance for every player in the game, even though only one such wrapper is needed. In the current version, accessing {@link game.players | runtime:LuaGameScript::players} by itself does not create any {@link LuaPlayer | runtime:LuaPlayer} instances; they are created lazily when accessed. Therefore, this example only constructs one {@link LuaPlayer | runtime:LuaPlayer} instance, no matter how many elements there are in `game.players`.
 *
 * ```
 * game.players["Oxyd"].character.die()
 * ```
 *
 * This statement will execute successfully and `storage.p` will be useable as one might expect. However, as soon as the user tries to save the game, a "LuaCustomTable cannot be serialized" error will be shown. The game will remain unsaveable so long as `storage.p` refers to an instance of a custom table.
 *
 * ```
 * storage.p = game.players  -- This has high potential to make the game unsaveable
 * ```
 *
 * The following will produce no output because `ipairs` is not supported with custom tables.
 *
 * ```
 * for _, p in ipairs(game.players) do game.player.print(p.name); end  -- incorrect; use pairs instead
 * ```
 * @example ```
-- Custom tables may be iterated using `pairs`.
for _, p in pairs(game.players) do game.player.print(p.name); end
```
 */
interface LuaCustomTable {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Access an element of this custom table.
     */
    get: LuaTableGetMethod<any, Any>;
    /**
     * Access an element of this custom table.
     */
    set: LuaTableSetMethod<any, Any>;
    /**
     * Number of elements in this table.
     */
    length: LuaLengthMethod<uint>;
}
/**
 * Prototype of a damage.
 */
interface LuaDamagePrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for decider combinators.
 */
interface LuaDeciderCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * Adds a new condition.
     * @param condition New condition to insert.
     * @param index Index to insert new condition at. If not specified, appends to the end.
     */
    add_condition(this: void, condition: DeciderCombinatorCondition, index?: uint): void;
    /**
     * Adds a new output.
     * @param output New output to insert.
     * @param index Index to insert new output at. If not specified, appends to the end.
     */
    add_output(this: void, output: DeciderCombinatorOutput, index?: uint): void;
    /**
     * Gets the condition at `index`.
     * @param index Index of condition to get.
     */
    get_condition(this: void, index: uint): DeciderCombinatorCondition;
    /**
     * Gets the output at `index`.
     * @param index Index of output to get.
     */
    get_output(this: void, index: uint): DeciderCombinatorOutput;
    /**
     * Removes the condition at `index`.
     * @param index Index of condition to remove.
     */
    remove_condition(this: void, index: uint): void;
    /**
     * Removes the output at `index`.
     * @param index Index of output to remove.
     */
    remove_output(this: void, index: uint): void;
    /**
     * Sets the condition at `index`.
     * @param index Index of condition to modify.
     * @param condition Data to set selected condition to.
     */
    set_condition(this: void, index: uint, condition: DeciderCombinatorCondition): void;
    /**
     * Sets the output at `index`.
     * @param index Index of output to modify.
     * @param output Data to set selected output to.
     */
    set_output(this: void, index: uint, output: DeciderCombinatorOutput): void;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * This decider combinator's parameters. Writing `nil` clears the combinator's parameters.
     */
    parameters: DeciderCombinatorParameters;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of an optimized decorative.
 */
interface LuaDecorativePrototype extends LuaPrototypeBase {
    /**
     * Autoplace specification for this decorative prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification;
    /**
     * The bounding box used for collision checking.
     */
    readonly collision_box: BoundingBox;
    /**
     * The collision masks this decorative uses
     */
    readonly collision_mask: CollisionMask;
    readonly decal: boolean;
    readonly grows_through_rail_path: boolean;
    readonly minimal_separation: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly placed_effect?: TriggerEffectItem[];
    readonly render_layer: string;
    readonly target_count: uint;
    readonly trigger_effect?: TriggerEffectItem[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for display panels.
 */
interface LuaDisplayPanelControlBehavior extends LuaControlBehavior {
    /**
     * Get a specific message definition
     * @param index Message index.
     * @returns The message definition at the specified index.
     */
    get_message(this: void, index: uint): DisplayPanelMessageDefinition;
    /**
     * Set the message at the specified index
     * @param index Message index. Use `-1` to append new element.
     * @param message The message definition for the specified index. Specify `nil` to remove the message.
     */
    set_message(this: void, index: uint, message: DisplayPanelMessageDefinition): void;
    /**
     * The full list of configured messages.
     */
    messages: DisplayPanelMessageDefinition[];
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of an electric energy source.
 */
interface LuaElectricEnergySourcePrototype {
    get_input_flow_limit(this: void, quality?: QualityID): double;
    get_output_flow_limit(this: void, quality?: QualityID): double;
    readonly buffer_capacity: double;
    readonly drain: double;
    /**
     * The table of emissions of this energy source in `pollution/Joule`, indexed by pollutant type. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions_per_joule: Record<string, double>;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly render_no_network_icon: boolean;
    readonly render_no_power_icon: boolean;
    readonly usage_priority: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * The primary interface for interacting with entities through the Lua API. Entities are everything that exists on the map except for tiles (see {@link LuaTile | runtime:LuaTile}).
 *
 * Most functions on LuaEntity also work when the entity is contained in a ghost.
 */
interface LuaEntity extends LuaControl {
    /**
     * Adds the given position to this spidertron's autopilot's queue of destinations.
     * @param position The position the spidertron should move to.
     */
    add_autopilot_destination(this: void, position: MapPosition): void;
    /**
     * Offer a thing on the market.
     * @example ```
    -- Adds market offer, 1 copper ore for 10 iron ore
    market.add_market_item{price={{name = "iron-ore", count = 10}}, offer={type="give-item", item="copper-ore"}}
    ```
     * @example ```
    -- Adds market offer, 1 copper ore for 5 iron ore and 5 stone ore
    market.add_market_item{price={{name = "iron-ore", count = 5}, {name = "stone", count = 5}}, offer={type="give-item", item="copper-ore"}}
    ```
     */
    add_market_item(this: void, offer: Offer): void;
    /**
     * Whether the entity can be destroyed
     */
    can_be_destroyed(this: void): boolean;
    /**
     * Whether this character can shoot the given entity or position.
     */
    can_shoot(this: void, target: LuaEntity, position: MapPosition): boolean;
    /**
     * Can wires reach between these entities.
     */
    can_wires_reach(this: void, entity: LuaEntity): boolean;
    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     * @param force The force who did the deconstruction order.
     * @param player The player to set the `last_user` to if any.
     */
    cancel_deconstruction(this: void, force: ForceID, player?: PlayerIdentification): void;
    /**
     * Cancels upgrade if it is scheduled, does nothing otherwise.
     * @param force The force who did the upgrade order.
     * @param player The player to set the last_user to if any.
     * @returns Whether the cancel was successful.
     */
    cancel_upgrade(this: void, force: ForceID, player?: PlayerIdentification): boolean;
    /**
     * Remove all fluids from this entity.
     */
    clear_fluid_inside(this: void): void;
    /**
     * Removes all offers from a market.
     */
    clear_market_items(this: void): void;
    /**
     * Clones this entity.
     * @param table.position The destination position
     * @param table.surface The destination surface
     * @param table.create_build_effect_smoke If false, the building effect smoke will not be shown around the new entity.
     * @returns The cloned entity or `nil` if this entity can't be cloned/can't be cloned to the given location.
     */
    clone(this: void, table: {
        position: MapPosition;
        surface?: LuaSurface;
        force?: ForceID;
        create_build_effect_smoke?: boolean;
    }): LuaEntity | null;
    /**
     * Connects current linked belt with another one.
     *
     * Neighbours have to be of different type. If given linked belt is connected to something else it will be disconnected first. If provided neighbour is connected to something else it will also be disconnected first. Automatically updates neighbour to be connected back to this one.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     * @param neighbour Another linked belt or entity ghost containing linked belt to connect or nil to disconnect
     */
    connect_linked_belts(this: void, neighbour?: LuaEntity): void;
    /**
     * Connects the rolling stock in the given direction.
     * @returns Whether any connection was made
     */
    connect_rolling_stock(this: void, direction: defines.rail_direction): boolean;
    /**
     * Copies settings from the given entity onto this entity.
     * @param by_player If provided, the copying is done 'as' this player and {@link on_entity_settings_pasted | runtime:on_entity_settings_pasted} is triggered.
     * @returns Any items removed from this entity as a result of copying the settings.
     */
    copy_settings(this: void, entity: LuaEntity, by_player?: PlayerIdentification): ItemCountWithQuality[];
    /**
     * Creates the same smoke that is created when you place a building by hand.
     *
     * You can play the building sound to go with it by using {@link LuaSurface::play_sound | runtime:LuaSurface::play_sound}, eg: `entity.surface.play_sound{path="entity-build/"..entity.prototype.name, position=entity.position}`
     */
    create_build_effect_smoke(this: void): void;
    /**
     * Damages the entity.
     * @param damage The amount of damage to be done.
     * @param force The force that will be doing the damage.
     * @param type The type of damage to be done, defaults to `"impact"`.
     * @param source The entity that is directly dealing the damage (e.g. the projectile, flame, sticker, grenade, laser beam, etc.). Needs to be on the same surface as the entity being damaged.
     * @param cause The entity that originally triggered the events that led to this damage being dealt (e.g. the character, turret, enemy, etc. that pulled the trigger). Does not need to be on the same surface as the entity being damaged.
     * @returns the total damage actually applied after resistances.
     */
    damage(this: void, damage: float, force: ForceID, type?: DamageTypeID, source?: LuaEntity, cause?: LuaEntity): float;
    /**
     * Depletes and destroys this resource entity.
     */
    deplete(this: void): void;
    /**
     * Destroys the entity.
     *
     * Not all entities can be destroyed - things such as rails under trains cannot be destroyed until the train is moved or destroyed.
     * @param table.do_cliff_correction Whether neighbouring cliffs should be corrected. Defaults to `false`.
     * @param table.raise_destroy If `true`, {@link script_raised_destroy | runtime:script_raised_destroy} will be called. Defaults to `false`.
     * @param table.player The player whose undo queue this action should be added to.
     * @param table.item_index The index of the undo item to add this action to. An index of `0` creates a new undo item for it. Defaults to putting it into the appropriate undo item automatically if not specified.
     * @returns Returns `false` if the entity was valid and destruction failed, `true` in all other cases.
     */
    destroy(this: void, table: {
        do_cliff_correction?: boolean;
        raise_destroy?: boolean;
        player?: PlayerIdentification;
        item_index?: uint;
    }): boolean;
    /**
     * Immediately kills the entity. Does nothing if the entity doesn't have health.
     *
     * Unlike {@link LuaEntity::destroy | runtime:LuaEntity::destroy}, `die` will trigger the {@link on_entity_died | runtime:on_entity_died} event and the entity will produce a corpse and drop loot if it has any.
     * @param force The force to attribute the kill to.
     * @param cause The cause to attribute the kill to.
     * @example ```
    -- This function can be called with only the `cause` argument and no `force`:
    entity.die(nil, killer_entity)
    ```
     * @returns Whether the entity was successfully killed.
     */
    die(this: void, force?: ForceID, cause?: LuaEntity): boolean;
    /**
     * Disconnects linked belt from its neighbour.
     *
     * Can also be used on entity ghost if it contains linked-belt
     */
    disconnect_linked_belts(this: void): void;
    /**
     * Tries to disconnect this rolling stock in the given direction.
     * @returns If anything was disconnected
     */
    disconnect_rolling_stock(this: void, direction: defines.rail_direction): boolean;
    /**
     * Take an ascending cargo pod and safely make it skip all animation and immediately switch surface.
     */
    force_finish_ascending(this: void): void;
    /**
     * Take a descending cargo pod and safely make it arrive and deposit cargo.
     */
    force_finish_descending(this: void): void;
    /**
     * Returns a table with all entities affected by this beacon
     */
    get_beacon_effect_receivers(this: void): LuaEntity[];
    /**
     * Returns a table with all beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    get_beacons(this: void): LuaEntity[] | null;
    /**
     * Get the source of this beam.
     */
    get_beam_source(this: void): BeamTarget | null;
    /**
     * Get the target of this beam.
     */
    get_beam_target(this: void): BeamTarget | null;
    /**
     * The burnt result inventory for this entity or `nil` if this entity doesn't have a burnt result inventory.
     */
    get_burnt_result_inventory(this: void): LuaInventory | null;
    /**
     * Returns all child signals. Child signals can be either RailSignal or RailChainSignal. Child signals are signals which are checked by this signal to determine a chain state.
     */
    get_child_signals(this: void): LuaEntity[];
    /**
     * @param wire_connector_id Wire connector to get circuit network for.
     * @returns The circuit network or nil.
     */
    get_circuit_network(this: void, wire_connector_id: defines.wire_connector_id): LuaCircuitNetwork | null;
    /**
     * @returns [0] - Rail connected in the specified manner to this one, `nil` if unsuccessful.
     * @returns [1] - Rail direction of the returned rail which points to origin rail
     * @returns [2] - Turn to be taken when going back from returned rail to origin rail
     */
    get_connected_rail(this: void, table: {
        rail_direction: defines.rail_direction;
        rail_connection_direction: defines.rail_connection_direction;
    }): LuaMultiReturn<[
        LuaEntity | null,
        defines.rail_direction | null,
        defines.rail_connection_direction | null
    ]>;
    /**
     * Get the rails that this signal is connected to.
     */
    get_connected_rails(this: void): LuaEntity[];
    /**
     * Gets rolling stock connected to the given end of this stock.
     * @returns [0] - The rolling stock connected at the given end, `nil` if none is connected there.
     * @returns [1] - The rail direction of the connected rolling stock if any.
     */
    get_connected_rolling_stock(this: void, direction: defines.rail_direction): LuaMultiReturn<[
        LuaEntity | null,
        defines.rail_direction | null
    ]>;
    /**
     * Gets the control behavior of the entity (if any).
     * @returns The control behavior or `nil`.
     */
    get_control_behavior(this: void): LuaControlBehavior | null;
    /**
     * Returns the amount of damage to be taken by this entity.
     * @returns `nil` if this entity does not have health.
     */
    get_damage_to_be_taken(this: void): float | null;
    /**
     * Gets the driver of this vehicle if any.
     * @returns `nil` if the vehicle contains no driver. To check if there's a passenger see {@link LuaEntity::get_passenger | runtime:LuaEntity::get_passenger}.
     */
    get_driver(this: void): (LuaEntity | LuaPlayer) | null;
    /**
     * The input flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    get_electric_input_flow_limit(this: void, quality?: QualityID): double | null;
    /**
     * The output flow limit for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    get_electric_output_flow_limit(this: void, quality?: QualityID): double | null;
    /**
     * Get the filter for a slot in an inserter, loader, or logistic storage container. The entity must allow filters.
     * @param slot_index Index of the slot to get the filter for.
     * @returns The filter, or `nil` if the given slot has no filter.
     */
    get_filter(this: void, slot_index: uint): ItemFilter | null;
    /**
     * Gets fluid of the i-th fluid storage.
     * @param index Fluid storage index. Valid values are from 1 up to {@link LuaEntity::fluids_count | runtime:LuaEntity::fluids_count}.
     * @returns Fluid in this storage. nil if fluid storage is empty.
     */
    get_fluid(this: void, index: uint): Fluid | null;
    /**
     * Get amounts of all fluids in this entity.
     *
     * If information about fluid temperatures is required, {@link LuaEntity::fluidbox | runtime:LuaEntity::fluidbox} should be used instead.
     * @returns The amounts, indexed by fluid names.
     */
    get_fluid_contents(this: void): Record<string, double>;
    /**
     * Get the amount of all or some fluid in this entity.
     *
     * If information about fluid temperatures is required, {@link LuaEntity::fluidbox | runtime:LuaEntity::fluidbox} should be used instead.
     * @param fluid Prototype name of the fluid to count. If not specified, count all fluids.
     */
    get_fluid_count(this: void, fluid?: string): double;
    /**
     * The fuel inventory for this entity or `nil` if this entity doesn't have a fuel inventory.
     */
    get_fuel_inventory(this: void): LuaInventory | null;
    /**
     * The health ratio of this entity between 1 and 0 (for full health and no health respectively).
     * @returns `nil` if this entity doesn't have health.
     */
    get_health_ratio(this: void): float | null;
    /**
     * Gets the heat setting for this heat interface.
     */
    get_heat_setting(this: void): HeatSetting;
    /**
     * Returns all signals guarding entrance to a rail block this rail belongs to.
     */
    get_inbound_signals(this: void): LuaEntity[];
    /**
     * Gets the filter for this infinity container at the given index, or `nil` if the filter index doesn't exist or is empty.
     * @param index The index to get.
     */
    get_infinity_container_filter(this: void, index: uint): InfinityInventoryFilter | null;
    /**
     * Gets the filter for this infinity pipe, or `nil` if the filter is empty.
     */
    get_infinity_pipe_filter(this: void): InfinityPipeFilter | null;
    /**
     * Get an item insert specification onto a belt connectable: for a given map position provides into which line at what position item should be inserted to be closest to the provided position.
     * @param position Position where the item is to be inserted.
     * @returns [0] - Index of the transport line that is closest to the provided map position.
     * @returns [1] - Position along the transport line where item should be dropped.
     */
    get_item_insert_specification(this: void, position: MapPosition): LuaMultiReturn<[
        uint,
        float
    ]>;
    /**
     * Get a map position related to a position on a transport line.
     * @param index Index of the transport line. Transport lines are 1-indexed.
     * @param position Linear position along the transport line. Clamped to the transport line range.
     */
    get_line_item_position(this: void, index: uint, position: float): MapPosition;
    /**
     * Gets all the `LuaLogisticPoint`s that this entity owns. Optionally returns only the point specified by the index parameter.
     *
     * When `index` is not given, this will be a single `LuaLogisticPoint` for most entities. For some (such as the player character), it can be zero or more.
     * @param index If provided, only returns the `LuaLogisticPoint` specified by this index.
     */
    get_logistic_point(this: void, index?: defines.logistic_member_index): (LuaLogisticPoint | Record<defines.logistic_member_index, LuaLogisticPoint>) | null;
    /**
     * Gives logistic sections of this entity if it uses logistic sections.
     */
    get_logistic_sections(this: void): LuaLogisticSections | null;
    /**
     * Get all offers in a market as an array.
     */
    get_market_items(this: void): Offer[];
    /**
     * Get the maximum transport line index of a belt or belt connectable entity.
     */
    get_max_transport_line_index(this: void): uint;
    /**
     * Inventory for storing modules of this entity; `nil` if this entity has no module inventory.
     */
    get_module_inventory(this: void): LuaInventory | null;
    /**
     * Gets (and or creates if needed) the control behavior of the entity.
     * @returns The control behavior or `nil`.
     */
    get_or_create_control_behavior(this: void): LuaControlBehavior | null;
    /**
     * Returns all signals guarding exit from a rail block this rail belongs to.
     */
    get_outbound_signals(this: void): LuaEntity[];
    /**
     * Gets the entity's output inventory if it has one.
     * @returns A reference to the entity's output inventory.
     */
    get_output_inventory(this: void): LuaInventory | null;
    /**
     * Returns all parent signals. Parent signals are always RailChainSignal. Parent signals are those signals that are checking state of this signal to determine their own chain state.
     */
    get_parent_signals(this: void): LuaEntity[];
    /**
     * Gets the passenger of this car or spidertron if any.
     *
     * This differs over {@link LuaEntity::get_driver | runtime:LuaEntity::get_driver} in that the passenger can't drive the car.
     * @returns `nil` if the vehicle contains no passenger. To check if there's a driver see {@link LuaEntity::get_driver | runtime:LuaEntity::get_driver}.
     */
    get_passenger(this: void): (LuaEntity | LuaPlayer) | null;
    /**
     * Get the entity ID at the specified position in the turret's priority list.
     * @param index The index of the entry to fetch.
     */
    get_priority_target(this: void, index: uint): LuaEntityPrototype | null;
    /**
     * The radius of this entity.
     */
    get_radius(this: void): double;
    /**
     * Gets a LuaRailEnd object for specified end of this rail
     */
    get_rail_end(this: void, direction: defines.rail_direction): LuaRailEnd;
    /**
     * Get the rail at the end of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * @returns [0] - The rail entity.
     * @returns [1] - A rail direction pointing out of the rail segment from the end rail.
     */
    get_rail_segment_end(this: void, direction: defines.rail_direction): LuaMultiReturn<[
        LuaEntity,
        defines.rail_direction
    ]>;
    /**
     * Get the length of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     */
    get_rail_segment_length(this: void): double;
    /**
     * Get a rail from each rail segment that overlaps with this rail's rail segment.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     */
    get_rail_segment_overlaps(this: void): LuaEntity[];
    /**
     * Get all rails of a rail segment this rail is in
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * @param direction Selects end of this rail that points to a rail segment end from which to start returning rails
     * @returns Rails of this rail segment
     */
    get_rail_segment_rails(this: void, direction: defines.rail_direction): LuaEntity[];
    /**
     * Get the rail signal at the start/end of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * @param direction The direction of travel relative to this rail.
     * @param in_else_out If true, gets the signal at the entrance of the rail segment, otherwise gets the signal at the exit of the rail segment.
     * @returns `nil` if the rail segment doesn't start/end with a signal.
     */
    get_rail_segment_signal(this: void, direction: defines.rail_direction, in_else_out: boolean): LuaEntity | null;
    /**
     * Get train stop at the start/end of the rail segment this rail is in.
     *
     * A rail segment is a continuous section of rail with no branches, signals, nor train stops.
     * @param direction The direction of travel relative to this rail.
     * @returns `nil` if the rail segment doesn't start/end with a train stop.
     */
    get_rail_segment_stop(this: void, direction: defines.rail_direction): LuaEntity | null;
    /**
     * Current recipe being assembled by this machine, if any.
     * @returns [0] -
     * @returns [1] -
     */
    get_recipe(this: void): LuaMultiReturn<[
        LuaRecipe | null,
        LuaQualityPrototype | null
    ]>;
    /**
     * Read a single signal from the selected wire connector
     * @param signal The signal to read.
     * @param wire_connector_id Wire connector ID from which to get the signal
     * @param extra_wire_connector_id Additional wire connector ID. If specified, signal will be added to the result
     * @returns The current value of the signal.
     */
    get_signal(this: void, signal: SignalID, wire_connector_id: defines.wire_connector_id, extra_wire_connector_id?: defines.wire_connector_id): int;
    /**
     * Read all signals from the selected wire connector.
     * @param wire_connector_id Wire connector ID from which to get the signal
     * @param extra_wire_connector_id Additional wire connector ID. If specified, signals will be added to the result
     * @returns Current values of all signals.
     */
    get_signals(this: void, wire_connector_id: defines.wire_connector_id, extra_wire_connector_id?: defines.wire_connector_id): Signal[] | null;
    /**
     * Gets legs of given SpiderVehicle.
     */
    get_spider_legs(this: void): LuaEntity[];
    /**
     * The train currently stopped at this train stop, if any.
     */
    get_stopped_train(this: void): LuaTrain | null;
    /**
     * The trains scheduled to stop at this train stop.
     */
    get_train_stop_trains(this: void): LuaTrain[];
    /**
     * Get a transport line of a belt or belt connectable entity.
     * @param index Index of the requested transport line. Transport lines are 1-indexed.
     */
    get_transport_line(this: void, index: uint): LuaTransportLine;
    /**
     * Returns the new entity prototype and its quality.
     * @returns [0] - `nil` if this entity is not marked for upgrade.
     * @returns [1] - `nil` if this entity is not marked for upgrade.
     */
    get_upgrade_target(this: void): LuaMultiReturn<[
        LuaEntityPrototype | null,
        LuaQualityPrototype | null
    ]>;
    /**
     * Gets a single wire connector of this entity
     * @param wire_connector_id Identifier of a specific connector to get
     * @param or_create If true and connector does not exist, it will be allocated if possible
     */
    get_wire_connector(this: void, wire_connector_id: defines.wire_connector_id, or_create: boolean): LuaWireConnector;
    /**
     * Gets all wire connectors of this entity
     * @param or_create If true, it will try to create all connectors possible
     */
    get_wire_connectors(this: void, or_create: boolean): Record<defines.wire_connector_id, LuaWireConnector>;
    /**
     * Same as {@link LuaEntity::has_flag | runtime:LuaEntity::has_flag}, but targets the inner entity on a entity ghost.
     * @param flag The flag to test.
     * @returns `true` if the entity has the given flag set.
     */
    ghost_has_flag(this: void, flag: EntityPrototypeFlag): boolean;
    /**
     * Test whether this entity's prototype has a certain flag set.
     *
     * `entity.has_flag(f)` is a shortcut for `entity.prototype.has_flag(f)`.
     * @param flag The flag to test.
     * @returns `true` if this entity has the given flag set.
     */
    has_flag(this: void, flag: EntityPrototypeFlag): boolean;
    /**
     * Insert fluid into this entity. Fluidbox is chosen automatically.
     * @param fluid Fluid to insert.
     * @returns Amount of fluid actually inserted.
     */
    insert_fluid(this: void, fluid: Fluid): double;
    /**
     * @returns `true` if this gate is currently closed.
     */
    is_closed(this: void): boolean;
    /**
     * @returns `true` if this gate is currently closing
     */
    is_closing(this: void): boolean;
    /**
     * Returns `true` if this entity produces or consumes electricity and is connected to an electric network that has at least one entity that can produce power.
     */
    is_connected_to_electric_network(this: void): boolean;
    /**
     * Returns whether a craft is currently in process. It does not indicate whether progress is currently being made, but whether a crafting process has been started in this machine.
     */
    is_crafting(this: void): boolean;
    /**
     * @returns `true` if this gate is currently opened.
     */
    is_opened(this: void): boolean;
    /**
     * @returns `true` if this gate is currently opening.
     */
    is_opening(this: void): boolean;
    /**
     * Checks if this rail and other rail both belong to the same rail block.
     */
    is_rail_in_same_rail_block_as(this: void, other_rail: LuaEntity): boolean;
    /**
     * Checks if this rail and other rail both belong to the same rail segment.
     */
    is_rail_in_same_rail_segment_as(this: void, other_rail: LuaEntity): boolean;
    /**
     * Is this entity or tile ghost or item request proxy registered for construction? If false, it means a construction robot has been dispatched to build the entity, or it is not an entity that can be constructed.
     */
    is_registered_for_construction(this: void): boolean;
    /**
     * Is this entity registered for deconstruction with this force? If false, it means a construction robot has been dispatched to deconstruct it, or it is not marked for deconstruction. The complexity is effectively O(1) - it depends on the number of objects targeting this entity which should be small enough.
     * @param force The force construction manager to check.
     */
    is_registered_for_deconstruction(this: void, force: ForceID): boolean;
    /**
     * Is this entity registered for repair? If false, it means a construction robot has been dispatched to upgrade it, or it is not damaged. This is worst-case O(N) complexity where N is the current number of things in the repair queue.
     */
    is_registered_for_repair(this: void): boolean;
    /**
     * Is this entity registered for upgrade? If false, it means a construction robot has been dispatched to upgrade it, or it is not marked for upgrade. This is worst-case O(N) complexity where N is the current number of things in the upgrade queue.
     */
    is_registered_for_upgrade(this: void): boolean;
    /**
     * @returns `true` if the rocket was successfully launched. Return value of `false` means the silo is not ready for launch.
     */
    launch_rocket(this: void): boolean;
    /**
     * Mines this entity.
     *
     * 'Standard' operation is to keep calling `LuaEntity.mine` with an inventory until all items are transferred and the items dealt with.
     *
     * The result of mining the entity (the item(s) it produces when mined) will be dropped on the ground if they don't fit into the provided inventory. If no inventory is provided, the items will be destroyed.
     * @param table.inventory If provided the item(s) will be transferred into this inventory. If provided, this must be an inventory created with {@link LuaGameScript::create_inventory | runtime:LuaGameScript::create_inventory} or be a basic inventory owned by some entity.
     * @param table.force If true, when the item(s) don't fit into the given inventory the entity is force mined. If false, the mining operation fails when there isn't enough room to transfer all of the items into the inventory. Defaults to false. This is ignored and acts as `true` if no inventory is provided.
     * @param table.raise_destroyed If true, {@link script_raised_destroy | runtime:script_raised_destroy} will be raised. Defaults to `true`.
     * @param table.ignore_minable If true, the minable state of the entity is ignored. Defaults to `false`. If false, an entity that isn't minable (set as not-minable in the prototype or isn't minable for other reasons) will fail to be mined.
     * @returns Whether mining succeeded.
     */
    mine(this: void, table: {
        inventory?: LuaInventory;
        force?: boolean;
        raise_destroyed?: boolean;
        ignore_minable?: boolean;
    }): boolean;
    /**
     * Sets the entity to be deconstructed by construction robots.
     * @param force The force whose robots are supposed to do the deconstruction.
     * @param player The player to set the last_user to, if any. Also the player whose undo queue this action should be added to.
     * @param item_index The index of the undo item to add this action to. An index of `0` creates a new undo item for it. An index of `1` adds the action to the latest undo action on the stack. Defaults to putting it into the appropriate undo item automatically if one is not specified.
     * @returns if the entity was marked for deconstruction.
     */
    order_deconstruction(this: void, force: ForceID, player?: PlayerIdentification, item_index?: uint): boolean;
    /**
     * Sets the entity to be upgraded by construction robots.
     * @param table.target The prototype of the entity to upgrade to.
     * @param table.force The force whose robots are supposed to do the upgrade.
     * @param table.player The player whose undo queue this action should be added to.
     * @param table.item_index The index of the undo item to add this action to. An index of `0` creates a new undo item for it. Defaults to putting it into the appropriate undo item automatically if not specified.
     * @returns Whether the entity was marked for upgrade.
     */
    order_upgrade(this: void, table: {
        target: EntityWithQualityID;
        force: ForceID;
        player?: PlayerIdentification;
        item_index?: uint;
    }): boolean;
    /**
     * Plays a note with the given instrument and note.
     * @returns Whether the request is valid. The sound may or may not be played depending on polyphony settings.
     */
    play_note(this: void, instrument: uint, note: uint): boolean;
    /**
     * Release the unit from the spawner which spawned it. This allows the spawner to continue spawning additional units.
     */
    release_from_spawner(this: void): void;
    /**
     * Remove fluid from this entity.
     *
     * If temperature is given only fluid matching that exact temperature is removed. If minimum and maximum is given fluid within that range is removed.
     * @param table.name Fluid prototype name.
     * @param table.amount Amount to remove
     * @returns Amount of fluid actually removed.
     */
    remove_fluid(this: void, table: {
        name: string;
        amount: double;
        minimum_temperature?: double;
        maximum_temperature?: double;
        temperature?: double;
    }): double;
    /**
     * Remove an offer from a market.
     *
     * The other offers are moved down to fill the gap created by removing the offer, which decrements the overall size of the offer array.
     * @param offer Index of offer to remove.
     * @returns `true` if the offer was successfully removed; `false` when the given index was not valid.
     */
    remove_market_item(this: void, offer: uint): boolean;
    /**
     * @param force The force that requests the gate to be closed.
     */
    request_to_close(this: void, force: ForceID): void;
    /**
     * @param force The force that requests the gate to be open.
     * @param extra_time Extra ticks to stay open.
     */
    request_to_open(this: void, force: ForceID, extra_time?: uint): void;
    /**
     * Revive a ghost, which turns it from a ghost into a real entity or tile.
     * @param table.return_item_request_proxy If `true` the function will return item request proxy as the third return value.
     * @param table.raise_revive If true, and an entity ghost; {@link script_raised_revive | runtime:script_raised_revive} will be called. Else if true, and a tile ghost; {@link script_raised_set_tiles | runtime:script_raised_set_tiles} will be called.
     * @returns [0] - Any items the new real entity collided with or `nil` if the ghost could not be revived.
     * @returns [1] - The revived entity if an entity ghost was successfully revived.
     * @returns [2] - The item request proxy if it was requested with `return_item_request_proxy`.
     */
    revive(this: void, table: {
        return_item_request_proxy?: boolean;
        raise_revive?: boolean;
    }): LuaMultiReturn<[
        Record<string, uint> | null,
        LuaEntity | null,
        LuaEntity | null
    ]>;
    /**
     * Rotates this entity as if the player rotated it.
     * @param table.reverse If `true`, rotate the entity in the counter-clockwise direction.
     * @returns Whether the rotation was successful.
     */
    rotate(this: void, table: {
        reverse?: boolean;
        by_player?: PlayerIdentification;
    }): boolean;
    /**
     * Set the source of this beam.
     */
    set_beam_source(this: void, source: LuaEntity | MapPosition): void;
    /**
     * Set the target of this beam.
     */
    set_beam_target(this: void, target: LuaEntity | MapPosition): void;
    /**
     * Sets the driver of this vehicle.
     *
     * This differs from {@link LuaEntity::set_passenger | runtime:LuaEntity::set_passenger} in that the passenger can't drive the vehicle.
     * @param driver The new driver. Writing `nil` ejects the current driver, if any.
     */
    set_driver(this: void, driver?: LuaEntity | PlayerIdentification): void;
    /**
     * Set the filter for a slot in an inserter (ItemFilter), loader (ItemFilter), mining drill (EntityID) or logistic storage container (ItemWithQualityID). The entity must allow filters.
     * @param index Index of the slot to set the filter for.
     * @param filter The item or entity to filter, or `nil` to clear the filter.
     */
    set_filter(this: void, index: uint, filter?: ItemFilter | ItemWithQualityID | EntityID): void;
    /**
     * Sets fluid to the i-th fluid storage.
     *
     * Fluid storages that are part of FluidBoxes (also available through {@link LuaFluidBox | runtime:LuaFluidBox}) may reject some fluids if they do not match filters or are above the FluidBox volume. To verify how much fluid was set a return value can be used which is the same as value that would be returned by {@link LuaEntity::get_fluid | runtime:LuaEntity::get_fluid}.
     * @param index Fluid storage index. Valid values are from 1 up to {@link LuaEntity::fluids_count | runtime:LuaEntity::fluids_count}.
     * @param fluid Fluid to set. Fluid storage will be cleared if this is not provided.
     * @returns Fluid in this storage after it was set. nil if fluid storage is empty.
     */
    set_fluid(this: void, index: uint, fluid?: Fluid): Fluid | null;
    /**
     * Sets the heat setting for this heat interface.
     * @param filter The new setting.
     */
    set_heat_setting(this: void, filter: HeatSetting): void;
    /**
     * Sets the filter for this infinity container at the given index.
     * @param index The index to set.
     * @param filter The new filter, or `nil` to clear the filter.
     */
    set_infinity_container_filter(this: void, index: uint, filter: InfinityInventoryFilter | nil): void;
    /**
     * Sets the filter for this infinity pipe.
     * @param filter The new filter, or `nil` to clear the filter.
     */
    set_infinity_pipe_filter(this: void, filter: InfinityPipeFilter | nil): void;
    /**
     * Sets the passenger of this car or spidertron.
     *
     * This differs from {@link LuaEntity::get_driver | runtime:LuaEntity::get_driver} in that the passenger can't drive the car.
     * @param passenger The new passenger. Writing `nil` ejects the current passenger, if any.
     */
    set_passenger(this: void, passenger?: LuaEntity | PlayerIdentification): void;
    /**
     * Set the entity ID name at the specified position in the turret's priority list.
     * @param index The index of the entry to set.
     * @param entity_id The name of the entity prototype, or `nil` to clear the entry.
     */
    set_priority_target(this: void, index: uint, entity_id?: EntityID): void;
    /**
     * Sets the given recipe in this assembly machine.
     * @param recipe The new recipe. Writing `nil` clears the recipe, if any.
     * @param quality The quality. If not provided `normal` is used.
     * @returns Any items removed from this entity as a result of setting the recipe.
     */
    set_recipe(this: void, recipe?: RecipeID, quality?: QualityID): ItemCountWithQuality[];
    /**
     * Revives a ghost silently, so the revival makes no sound and no smoke is created.
     * @param table.raise_revive If true, and an entity ghost; {@link script_raised_revive | runtime:script_raised_revive} will be called. Else if true, and a tile ghost; {@link script_raised_set_tiles | runtime:script_raised_set_tiles} will be called.
     * @returns [0] - Any items the new real entity collided with or `nil` if the ghost could not be revived.
     * @returns [1] - The revived entity if an entity ghost was successfully revived.
     * @returns [2] - The item request proxy.
     */
    silent_revive(this: void, table: {
        raise_revive?: boolean;
    }): LuaMultiReturn<[
        ItemCountWithQuality[],
        LuaEntity | null,
        LuaEntity | null
    ]>;
    /**
     * Triggers spawn_decoration actions defined in the entity prototype or does nothing if entity is not "turret" or "unit-spawner".
     */
    spawn_decorations(this: void): void;
    /**
     * Only works if the entity is a speech-bubble, with an "effect" defined in its wrapper_flow_style. Starts animating the opacity of the speech bubble towards zero, and destroys the entity when it hits zero.
     */
    start_fading_out(this: void): void;
    /**
     * Sets the {@link speed | runtime:LuaEntity::speed} of the given SpiderVehicle to zero. Notably does not clear its {@link autopilot_destination | runtime:LuaEntity::autopilot_destination}, which it will continue moving towards if set.
     */
    stop_spider(this: void): void;
    /**
     * Whether this entity supports a backer name.
     */
    supports_backer_name(this: void): boolean;
    /**
     * Is this entity marked for deconstruction?
     */
    to_be_deconstructed(this: void): boolean;
    /**
     * Is this entity marked for upgrade?
     */
    to_be_upgraded(this: void): boolean;
    /**
     * Toggle this entity's equipment movement bonus. Does nothing if the entity does not have an equipment grid.
     *
     * This property can also be read and written on the equipment grid of this entity.
     */
    toggle_equipment_movement_bonus(this: void): void;
    /**
     * Reconnect loader, beacon, cliff and mining drill connections to entities that might have been teleported out or in by the script. The game doesn't do this automatically as we don't want to lose performance by checking this in normal games.
     */
    update_connections(this: void): void;
    readonly absorbed_pollution: double;
    /**
     * Deactivating an entity will stop all its operations (car will stop moving, inserters will stop working, fish will stop moving etc).
     *
     * Entities that are not active naturally can't be set to be active (setting it to be active will do nothing)
     *
     * Ghosts, simple smoke, and corpses can't be modified at this time.
     *
     * It is even possible to set the character to not be active, so he can't move and perform most of the tasks.
     */
    active: boolean;
    /**
     * The ai settings of this unit.
     */
    readonly ai_settings: LuaAISettings;
    alert_parameters: ProgrammableSpeakerAlertParameters;
    /**
     * Whether this character's personal roboports are allowed to dispatch robots.
     */
    allow_dispatching_robots: boolean;
    /**
     * If the lamp is always on when not driven by control behavior.
     */
    always_on: boolean;
    /**
     * Count of resource units contained.
     */
    amount: uint;
    /**
     * Whether this land mine is armed.
     */
    readonly armed: boolean;
    /**
     * If this artillery auto-targets enemies.
     */
    artillery_auto_targeting: boolean;
    /**
     * The player this character is associated with, if any. Set to `nil` to clear.
     *
     * The player will be automatically disassociated when a controller is set on the character. Also, all characters associated to a player will be logged off when the player logs off in multiplayer.
     *
     * Reading this property will return a {@link LuaPlayer | runtime:LuaPlayer}, while {@link PlayerIdentification | runtime:PlayerIdentification} can be used when writing.
     *
     * A character associated with a player is not directly controlled by any player.
     */
    associated_player?: LuaPlayer | PlayerIdentification;
    /**
     * Destination of this spidertron's autopilot, if any. Writing `nil` clears all destinations.
     */
    autopilot_destination?: MapPosition;
    /**
     * The queued destination positions of spidertron's autopilot.
     */
    readonly autopilot_destinations: MapPosition[];
    /**
     * The backer name assigned to this entity. Entities that support backer names are labs, locomotives, radars, roboports, and train stops. `nil` if this entity doesn't support backer names.
     *
     * While train stops get the name of a backer when placed down, players can rename them if they want to. In this case, `backer_name` returns the player-given name of the entity.
     */
    backer_name?: string;
    /**
     * Number of beacons affecting this effect receiver. Can only be used when the entity has an effect receiver (AssemblingMachine, Furnace, Lab, MiningDrills)
     */
    readonly beacons_count?: uint;
    /**
     * The belt connectable neighbours of this belt connectable entity. Only entities that input to or are outputs of this entity. Does not contain the other end of an underground belt, see {@link LuaEntity::neighbours | runtime:LuaEntity::neighbours} for that.
     */
    readonly belt_neighbours: {
        /**
         * Array of transport belt connectable entities.
         */
        inputs: LuaEntity[];
        /**
         * Array of transport belt connectable entities.
         */
        outputs: LuaEntity[];
    };
    /**
     * Gives what is the current shape of a transport-belt.
     *
     * Can also be used on entity ghost if it contains transport-belt.
     */
    readonly belt_shape: 'straight' | 'left' | 'right';
    /**
     * Whether this underground belt goes into or out of the ground.
     */
    readonly belt_to_ground_type: 'input' | 'output';
    /**
     * The bonus mining progress for this mining drill. Read yields a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    bonus_mining_progress?: double;
    /**
     * The current productivity bonus progress, as a number in range `[0, 1]`.
     */
    bonus_progress: double;
    /**
     * {@link LuaEntityPrototype::collision_box | runtime:LuaEntityPrototype::collision_box} around entity's given position and respecting the current entity orientation.
     */
    readonly bounding_box: BoundingBox;
    /**
     * The burner energy source for this entity, if any.
     */
    readonly burner?: LuaBurner;
    /**
     * Gets the cargo pod attached to this rocket silo rocket if one exists.
     */
    readonly cargo_pod?: LuaEntity;
    /**
     * The state of this chain signal.
     */
    readonly chain_signal_state: defines.chain_signal_state;
    /**
     * The reason this character corpse character died. `""` if there is no reason.
     */
    character_corpse_death_cause: LocalisedString;
    /**
     * The player index associated with this character corpse.
     *
     * The index is not guaranteed to be valid so it should always be checked first if a player with that index actually exists.
     */
    character_corpse_player_index: uint;
    /**
     * The tick this character corpse died at.
     */
    character_corpse_tick_of_death: uint;
    /**
     * The orientation of this cliff.
     */
    readonly cliff_orientation: CliffOrientation;
    /**
     * The color of this character, rolling stock, train stop, car, spider-vehicle, flying text, corpse or simple-entity-with-owner. `nil` if this entity doesn't use custom colors.
     *
     * Car color is overridden by the color of the current driver/passenger, if there is one.
     */
    color?: Color;
    /**
     * The owner of this combat robot, if any.
     */
    combat_robot_owner?: LuaEntity;
    /**
     * The description on this combinator
     */
    combinator_description: string;
    /**
     * Returns a LuaCommandable for this entity or nil if entity is not commandable.
     */
    readonly commandable?: LuaCommandable;
    /**
     * The rail entity this train stop is connected to, if any.
     */
    readonly connected_rail?: LuaEntity;
    /**
     * Rail direction to which this train stop is binding. This returns a value even when no rails are present.
     */
    readonly connected_rail_direction: defines.rail_direction;
    /**
     * The consumption bonus of this entity.
     */
    readonly consumption_bonus: double;
    /**
     * Multiplies the energy consumption.
     */
    consumption_modifier: float;
    /**
     * If this RollingStock has 'copy color from train stop' enabled.
     */
    copy_color_from_train_stop: boolean;
    /**
     * Whether this corpse will ever fade away.
     */
    corpse_expires: boolean;
    /**
     * If true, corpse won't be destroyed when entities are placed over it. If false, whether corpse will be removed or not depends on value of {@link CorpsePrototype::remove_on_entity_placement | prototype:CorpsePrototype::remove_on_entity_placement}.
     */
    corpse_immune_to_entity_placement: boolean;
    /**
     * The current crafting progress, as a number in range `[0, 1]`.
     */
    crafting_progress: float;
    /**
     * The current crafting speed, including speed bonuses from modules and beacons.
     */
    readonly crafting_speed: double;
    /**
     * Destination of the crane of this entity. Throws when trying to set the destination out of range.
     */
    crane_destination: MapPosition;
    /**
     * Destination of the crane of this entity in 3D. Throws when trying to set the destination out of range.
     */
    crane_destination_3d: Vector3D;
    /**
     * Will set destination for the grappler of crane of this entity. The crane grappler will start moving to reach the destination, but the rest of the arm will remain stationary. Throws when trying to set the destination out of range.
     */
    crane_grappler_destination: MapPosition;
    /**
     * Will set destination in 3D for the grappler of crane of this entity. The crane grappler will start moving to reach the destination, but the rest of the arm will remain stationary. Throws when trying to set the destination out of range.
     */
    crane_grappler_destination_3d: Vector3D;
    /**
     * A custom status for this entity that will be displayed in the GUI.
     */
    custom_status?: CustomEntityStatus;
    /**
     * The damage dealt by this turret, artillery turret, or artillery wagon.
     */
    damage_dealt: double;
    /**
     * If set to `false`, this entity can't be damaged and won't be attacked automatically. It can however still be mined.
     *
     * Entities that are indestructible naturally (they have no health, like smoke, resource etc) can't be set to be destructible.
     */
    destructible: boolean;
    /**
     * The current direction this entity is facing.
     */
    direction: defines.direction;
    /**
     * Gives a draw data of the given entity if it supports such data.
     */
    readonly draw_data: RollingStockDrawData;
    /**
     * Whether the driver of this car or spidertron is the gunner. If `false`, the passenger is the gunner. `nil` if this is neither a car or a spidertron.
     */
    driver_is_gunner?: boolean;
    /**
     * Position where the entity puts its stuff.
     *
     * Mining drills and crafting machines can't have their drop position changed; inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the drop position.
     *
     * Meaningful only for entities that put stuff somewhere, such as mining drills, crafting machines with a drop target or inserters.
     */
    drop_position: MapPosition;
    /**
     * The entity this entity is putting its items to. If there are multiple possible entities at the drop-off point, writing to this attribute allows a mod to choose which one to drop off items to. The entity needs to collide with the tile box under the drop-off position. `nil` if there is no entity to put items to, or if this is not an entity that puts items somewhere.
     */
    drop_target?: LuaEntity;
    /**
     * The current speed of this unit in tiles per tick, taking into account any walking speed modifier given by the tile the unit is standing on. `nil` if this is not a unit.
     */
    readonly effective_speed?: float;
    /**
     * Multiplies the acceleration the vehicle can create for one unit of energy. Defaults to `1`.
     */
    effectivity_modifier: float;
    /**
     * The effects being applied to this entity, if any. For beacons, this is the effect the beacon is broadcasting.
     */
    readonly effects?: ModuleEffects;
    /**
     * The buffer size for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     *
     * Write access is limited to the ElectricEnergyInterface type.
     */
    electric_buffer_size?: double;
    /**
     * The electric drain for the electric energy source. `nil` if the entity doesn't have an electric energy source.
     */
    readonly electric_drain?: double;
    /**
     * The table of emissions of this energy source in `pollution/Joule`, indexed by pollutant type. `nil` if the entity doesn't have an electric energy source. Multiplying values in the returned table by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly electric_emissions_per_joule?: Record<string, double>;
    /**
     * Returns the id of the electric network that this entity is connected to, if any.
     */
    readonly electric_network_id?: uint;
    /**
     * The electric network statistics for this electric pole.
     */
    readonly electric_network_statistics: LuaFlowStatistics;
    /**
     * Whether equipment grid logistics are enabled while this vehicle is moving.
     */
    enable_logistics_while_moving: boolean;
    /**
     * Energy stored in the entity's energy buffer (energy stored in electrical devices etc.). Always 0 for entities that don't have the concept of energy stored inside.
     * @example ```
    game.player.print("Machine energy: " .. game.player.selected.energy .. "J")
    game.player.selected.energy = 3000
    ```
     */
    energy: double;
    /**
     * How much energy this generator generated in the last tick.
     */
    readonly energy_generated_last_tick: double;
    /**
     * The label on this spider-vehicle entity, if any. `nil` if this is not a spider-vehicle.
     */
    entity_label?: string;
    /**
     * The number of filter slots this inserter, loader, mining drill or logistic storage container has. 0 if not one of those entities.
     */
    readonly filter_slot_count: uint;
    /**
     * Fluidboxes of this entity.
     */
    readonly fluidbox: LuaFluidBox;
    /**
     * Returns count of fluid storages. This includes fluid storages provided by FluidBoxes but also covers other fluid storages like FluidTurret's internal buffer and FluidWagon's fluid since they are not FluidBox and cannot be exposed through {@link LuaFluidBox | runtime:LuaFluidBox}.
     */
    readonly fluids_count: uint;
    /**
     * The follow offset of this spidertron, if any entity is being followed. This is randomized each time the follow entity is set.
     */
    follow_offset?: Vector;
    /**
     * The follow target of this spidertron, if any.
     */
    follow_target?: LuaEntity;
    /**
     * Multiplies the car friction rate.
     * @example ```
    -- This will allow the car to go much faster
    game.player.vehicle.friction_modifier = 0.5
    ```
     */
    friction_modifier: float;
    readonly ghost_localised_description: LocalisedString;
    /**
     * Localised name of the entity or tile contained in this ghost.
     */
    readonly ghost_localised_name: LocalisedString;
    /**
     * Name of the entity or tile contained in this ghost
     */
    readonly ghost_name: string;
    /**
     * The prototype of the entity or tile contained in this ghost.
     */
    readonly ghost_prototype: LuaEntityPrototype | LuaTilePrototype;
    /**
     * The prototype type of the entity or tile contained in this ghost.
     */
    readonly ghost_type: string;
    /**
     * The {@link unit_number | runtime:LuaEntity::unit_number} of the entity contained in this ghost. It is the same as the unit number of the {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype} that was destroyed to create this ghost. If it was created by other means, or if the inner entity does not support unit numbers, this property is `nil`.
     */
    readonly ghost_unit_number?: uint;
    /**
     * Returns a {@link rich text | https://wiki.factorio.com/Rich_text} string containing this entity's position and surface name as a gps tag. {@link Printing | runtime:LuaGameScript::print} it will ping the location of the entity.
     * @example ```
    -- called on a LuaEntity on the default surface it returns:
    entity.gps_tag -- => "[gps=-4,-9]"
    
    -- called on a LuaEntity on "custom-surface" it returns:
    different_entity.gps_tag -- => "[gps=1,-5,custom-surface]"
    ```
     */
    readonly gps_tag: string;
    /**
     * The graphics variation for this entity. `nil` if this entity doesn't use graphics variations.
     */
    graphics_variation?: uint8;
    /**
     * This entity's equipment grid, if any.
     */
    readonly grid?: LuaEquipmentGrid;
    /**
     * The current health of the entity, if any. Health is automatically clamped to be between `0` and max health (inclusive). Entities with a health of `0` can not be attacked.
     *
     * To get the maximum possible health of this entity, see {@link LuaEntity::max_health | runtime:LuaEntity::max_health}.
     */
    health?: float;
    /**
     * The item stack currently held in an inserter's hand.
     */
    readonly held_stack: LuaItemStack;
    /**
     * Current position of the inserter's "hand".
     */
    readonly held_stack_position: MapPosition;
    /**
     * The blink interval of this highlight box entity. `0` indicates no blink.
     */
    highlight_box_blink_interval: uint;
    /**
     * The highlight box type of this highlight box entity.
     */
    highlight_box_type: CursorBoxRenderType;
    /**
     * Whether this turret shoots at targets that are not on its priority list.
     */
    ignore_unprioritised_targets: boolean;
    /**
     * The filters for this infinity container.
     */
    infinity_container_filters: InfinityInventoryFilter[];
    /**
     * Count of initial resource units contained. `nil` if this is not an infinite resource.
     *
     * If this is not an infinite resource, writing will produce an error.
     */
    initial_amount?: uint;
    /**
     * The insert plan for this ghost or item request proxy.
     */
    insert_plan: BlueprintInsertPlan[];
    /**
     * The filter mode for this filter inserter. `nil` if this inserter doesn't use filters.
     */
    inserter_filter_mode?: 'whitelist' | 'blacklist';
    /**
     * Sets the stack size limit on this inserter. If the stack size is > than the force stack size limit the value is ignored.
     *
     * Set to `0` to reset.
     */
    inserter_stack_size_override: uint;
    /**
     * Returns the current target pickup count of the inserter.
     *
     * This considers the circuit network, manual override and the inserter stack size limit based on technology.
     */
    readonly inserter_target_pickup_count: uint;
    /**
     * If this entity is EntityWithHealth
     */
    readonly is_entity_with_health: boolean;
    /**
     * If this entity is EntityWithOwner
     */
    readonly is_entity_with_owner: boolean;
    /**
     * If the rolling stock is facing train's front.
     */
    readonly is_headed_to_trains_front: boolean;
    /**
     * Whether this entity is a MilitaryTarget. Can be written to if {@link LuaEntityPrototype::allow_run_time_change_of_is_military_target | runtime:LuaEntityPrototype::allow_run_time_change_of_is_military_target} returns `true`.
     */
    is_military_target: boolean;
    /**
     * Items this ghost will request when revived or items this item request proxy is requesting.
     */
    readonly item_requests: ItemCountWithQuality[];
    /**
     * The number of units killed by this turret, artillery turret, or artillery wagon.
     */
    kills: uint;
    /**
     * The last player that changed any setting on this entity. This includes building the entity, changing its color, or configuring its circuit network. `nil` if the last user is not part of the save anymore.
     *
     * Reading this property will return a {@link LuaPlayer | runtime:LuaPlayer}, while {@link PlayerIdentification | runtime:PlayerIdentification} can be used when writing.
     */
    last_user?: LuaPlayer | PlayerIdentification;
    /**
     * The link ID this linked container is using.
     */
    link_id: uint;
    /**
     * Neighbour to which this linked belt is connected to, if any.
     *
     * Can also be used on entity ghost if it contains linked-belt.
     *
     * May return entity ghost which contains linked belt to which connection is made.
     */
    readonly linked_belt_neighbour?: LuaEntity;
    /**
     * Type of linked belt. Changing type will also flip direction so the belt is out of the same side.
     *
     * Can only be changed when linked belt is disconnected (has no neighbour set).
     *
     * Can also be used on entity ghost if it contains linked-belt.
     */
    linked_belt_type: 'input' | 'output';
    /**
     * The container entity this loader is pointing at/pulling from depending on the {@link LuaEntity::loader_type | runtime:LuaEntity::loader_type}, if any.
     */
    readonly loader_container?: LuaEntity;
    /**
     * The filter mode for this loader. `nil` if this loader does not support filters.
     */
    loader_filter_mode?: 'none' | 'whitelist' | 'blacklist';
    /**
     * Whether this loader gets items from or puts item into a container.
     */
    loader_type: 'input' | 'output';
    readonly localised_description: LocalisedString;
    /**
     * Localised name of the entity.
     */
    readonly localised_name: LocalisedString;
    /**
     * The logistic cell this entity is a part of. Will be `nil` if this entity is not a part of any logistic cell.
     */
    readonly logistic_cell: LuaLogisticCell;
    /**
     * The logistic network this entity is a part of, or `nil` if this entity is not a part of any logistic network.
     */
    logistic_network: LuaLogisticNetwork;
    /**
     * Max health of this entity.
     */
    readonly max_health: float;
    /**
     * Not minable entities can still be destroyed.
     *
     * Entities that are not minable naturally (like smoke, character, enemy units etc) can't be set to minable.
     */
    minable: boolean;
    /**
     * The filter mode for this mining drill. `nil` if this mining drill doesn't have filters.
     */
    mining_drill_filter_mode?: 'whitelist' | 'blacklist';
    /**
     * The mining progress for this mining drill. Is a number in range [0, mining_target.prototype.mineable_properties.mining_time]. `nil` if this isn't a mining drill.
     */
    mining_progress?: double;
    /**
     * The mining target, if any.
     */
    readonly mining_target?: LuaEntity;
    /**
     * If the entity is currently mirrored.
     */
    mirroring: boolean;
    /**
     * Name of the entity prototype. E.g. "inserter" or "fast-inserter".
     */
    readonly name: string;
    /**
     * Name tag of this entity. Returns `nil` if entity has no name tag. When name tag is already used by other entity, the name will be removed from the other entity. Entity name tags can also be set in the entity "extra settings" GUI in the map editor.
     */
    name_tag: string;
    /**
     * The current total neighbour bonus of this reactor.
     */
    readonly neighbour_bonus: double;
    /**
     * A list of neighbours for certain types of entities. Applies to underground belts, walls, gates, reactors, cliffs, and pipe-connectable entities.
     * Differs depending on the type of entity:
     *
     * - When called on a pipe-connectable entity, this is an array of entity arrays of all entities a given fluidbox is connected to.
     * - When called on an underground transport belt, this is the other end of the underground belt connection, or `nil` if none.
     * - When called on a wall-connectable entity or reactor, this is a dictionary of all connections indexed by the connection direction "north", "south", "east", and "west".
     * - When called on a cliff entity, this is a dictionary of all connections indexed by the connection direction "north", "south", "east", and "west".
     */
    readonly neighbours?: Record<string, LuaEntity[]> | LuaEntity[][] | LuaEntity;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Player can't open gui of this entity and he can't quick insert/input stuff in to the entity when it is not operable.
     */
    operable: boolean;
    /**
     * The smooth orientation of this entity.
     */
    orientation: RealOrientation;
    parameters: ProgrammableSpeakerParameters;
    /**
     * Where the inserter will pick up items from.
     *
     * Inserters must have `allow_custom_vectors` set to true on their prototype to allow changing the pickup position.
     */
    pickup_position: MapPosition;
    /**
     * The entity this inserter will attempt to pick up items from. If there are multiple possible entities at the pick-up point, writing to this attribute allows a mod to choose which one to pick up items from. The entity needs to collide with the tile box under the pick-up position. `nil` if there is no entity to pull items from.
     */
    pickup_target?: LuaEntity;
    /**
     * The player connected to this character, if any.
     */
    readonly player?: LuaPlayer;
    /**
     * The pollution bonus of this entity.
     */
    readonly pollution_bonus: double;
    /**
     * The power production specific to the ElectricEnergyInterface entity type.
     */
    power_production: double;
    /**
     * The state of this power switch.
     */
    power_switch_state: boolean;
    /**
     * The power usage specific to the ElectricEnergyInterface entity type.
     */
    power_usage: double;
    /**
     * The previous recipe this furnace was using, if any.
     */
    readonly previous_recipe?: RecipeIDAndQualityIDPair;
    /**
     * how far into the current procession the cargo pod is.
     */
    procession_tick: MapTick;
    /**
     * The productivity bonus of this entity.
     *
     * This includes force based bonuses as well as beacon/module bonuses.
     */
    readonly productivity_bonus: double;
    /**
     * The number of products this machine finished crafting in its lifetime.
     */
    products_finished: uint;
    /**
     * The entity prototype of this entity.
     */
    readonly prototype: LuaEntityPrototype;
    /**
     * The target entity for this item-request-proxy, if any.
     */
    readonly proxy_target?: LuaEntity;
    /**
     * The rail target of this pump, if any.
     */
    readonly pump_rail_target?: LuaEntity;
    /**
     * The quality of this entity.
     *
     * Not all entities support quality and will give the "normal" quality back if they don't.
     */
    readonly quality: LuaQualityPrototype;
    /**
     * The current radar scan progress, as a number in range `[0, 1]`.
     */
    readonly radar_scan_progress: float;
    /**
     * Gets rail layer of a given signal
     */
    readonly rail_layer: defines.rail_layer;
    /**
     * When locked; the recipe in this assembling machine can't be changed by the player.
     */
    recipe_locked: boolean;
    /**
     * The relative orientation of the vehicle turret, artillery turret, artillery wagon. `nil` if this entity isn't a vehicle with a vehicle turret or artillery turret/wagon.
     *
     * Writing does nothing if the vehicle doesn't have a turret.
     */
    relative_turret_orientation?: RealOrientation;
    /**
     * The removal plan for this item request proxy.
     */
    removal_plan: BlueprintInsertPlan[];
    /**
     * Whether items not included in this infinity container filters should be removed from the container.
     */
    remove_unfiltered_items: boolean;
    /**
     * The player that this `simple-entity-with-owner`, `simple-entity-with-force`, or `highlight-box` is visible to. `nil` when this entity is rendered for all players.
     *
     * Reading this property will return a {@link LuaPlayer | runtime:LuaPlayer}, while {@link PlayerIdentification | runtime:PlayerIdentification} can be used when writing.
     */
    render_player?: LuaPlayer | PlayerIdentification;
    /**
     * The forces that this `simple-entity-with-owner` or `simple-entity-with-force` is visible to. `nil` or an empty array when this entity is rendered for all forces.
     *
     * Reading will always give an array of {@link LuaForce | runtime:LuaForce}
     */
    render_to_forces?: ForceSet;
    /**
     * Whether this requester chest is set to also request from buffer chests.
     *
     * Useable only on entities that have requester slots.
     */
    request_from_buffers: boolean;
    /**
     * The quality produced when this crafting machine finishes crafting. `nil` when crafting is not in progress.
     *
     * Note: Writing `nil` is not allowed.
     */
    readonly result_quality?: LuaQualityPrototype;
    /**
     * The quality produced when this crafting machine finishes crafting. `nil` when crafting is not in progress.
     *
     * Note: Writing `nil` is not allowed.
     * @customName result_quality
     */
    result_quality_write?: QualityID;
    /**
     * Get the current queue of robot orders.
     */
    readonly robot_order_queue: WorkerRobotOrder[];
    /**
     * Number of rocket parts in the silo.
     */
    rocket_parts: uint;
    /**
     * The status of this rocket silo entity.
     */
    readonly rocket_silo_status: defines.rocket_silo_status;
    /**
     * When entity is not to be rotatable (inserter, transport belt etc), it can't be rotated by player using the R key.
     *
     * Entities that are not rotatable naturally (like chest or furnace) can't be set to be rotatable.
     */
    rotatable: boolean;
    /**
     * The secondary bounding box of this entity or `nil` if it doesn't have one. This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_bounding_box?: BoundingBox;
    /**
     * The secondary selection box of this entity or `nil` if it doesn't have one. This only exists for curved rails, and is automatically determined by the game.
     */
    readonly secondary_selection_box?: BoundingBox;
    /**
     * Index of the currently selected weapon slot of this character, car, or spidertron. `nil` if this entity doesn't have guns.
     */
    selected_gun_index?: uint;
    /**
     * {@link LuaEntityPrototype::selection_box | runtime:LuaEntityPrototype::selection_box} around entity's given position and respecting the current entity orientation.
     */
    readonly selection_box: BoundingBox;
    /**
     * The shooting target for this turret, if any. Can't be set to `nil` via script.
     */
    shooting_target?: LuaEntity;
    /**
     * The state of this rail signal.
     */
    readonly signal_state: defines.signal_state;
    readonly spawn_shift: double;
    readonly spawning_cooldown: double;
    /**
     * The current speed if this is a car, rolling stock, projectile or spidertron, or the maximum speed if this is a unit. The speed is in tiles per tick. `nil` if this is not a car, rolling stock, unit, projectile or spidertron.
     *
     * Only the speed of units, cars, and projectiles are writable.
     */
    speed?: float;
    /**
     * The speed bonus of this entity.
     *
     * This includes force based bonuses as well as beacon/module bonuses.
     */
    readonly speed_bonus: double;
    /**
     * The filter for this splitter, if any is set.
     */
    splitter_filter?: ItemFilter;
    /**
     * The input priority for this splitter.
     */
    splitter_input_priority: 'left' | 'none' | 'right';
    /**
     * The output priority for this splitter.
     */
    splitter_output_priority: 'left' | 'none' | 'right';
    readonly stack: LuaItemStack;
    /**
     * The status of this entity, if any.
     *
     * This is always the actual status of the entity, even if {@link LuaEntity::custom_status | runtime:LuaEntity::custom_status} is set.
     */
    readonly status?: defines.entity_status;
    /**
     * The entity this sticker is sticked to.
     */
    readonly sticked_to: LuaEntity;
    /**
     * The vehicle modifiers applied to this entity through the attached stickers.
     */
    readonly sticker_vehicle_modifiers?: {
        speed_modifier: double;
        speed_max: double;
        friction_modifier: double;
    };
    /**
     * The sticker entities attached to this entity, if any.
     */
    readonly stickers?: LuaEntity[];
    /**
     * The storage filter for this logistic storage container.
     *
     * Useable only on logistic containers with the `"storage"` {@link logistic_mode | runtime:LuaEntityPrototype::logistic_mode}.
     */
    storage_filter?: LuaItemPrototype;
    /**
     * Whether the entity has direction. When it is false for this entity, it will always return north direction when asked for.
     */
    readonly supports_direction: boolean;
    /**
     * The tags associated with this entity ghost. `nil` if this is not an entity ghost.
     */
    tags?: Tags;
    /**
     * The temperature of this entity's heat energy source. `nil` if this entity does not use a heat energy source.
     */
    temperature?: double;
    /**
     * The tick when this plant is fully grown.
     */
    tick_grown: MapTick;
    /**
     * The last tick this character entity was attacked.
     */
    tick_of_last_attack: uint;
    /**
     * The last tick this character entity was damaged.
     */
    tick_of_last_damage: uint;
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension). Uses the current direction of the entity.
     */
    readonly tile_height: uint;
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension). Uses the current direction of the entity.
     */
    readonly tile_width: uint;
    /**
     * The ticks left before a combat robot, highlight box, smoke, or sticker entity is destroyed.
     */
    time_to_live: uint64;
    /**
     * The ticks until the next trigger effect of this smoke-with-trigger.
     */
    time_to_next_effect: uint;
    /**
     * The timeout that's left on this landmine in ticks. It describes the time between the landmine being placed and it being armed.
     */
    timeout: uint;
    /**
     * Will this item entity be picked up automatically when the player walks over it?
     */
    to_be_looted: boolean;
    /**
     * The torso orientation of this spider vehicle.
     */
    torso_orientation: RealOrientation;
    /**
     * The train this rolling stock belongs to, if any. `nil` if this is not a rolling stock.
     */
    readonly train?: LuaTrain;
    /**
     * Priority of this train stop.
     */
    train_stop_priority: uint8;
    /**
     * Amount of trains related to this particular train stop. Includes train stopped at this train stop (until it finds a path to next target) and trains having this train stop as goal or waypoint.
     *
     * Train may be included multiple times when braking distance covers this train stop multiple times.
     *
     * Value may be read even when train stop has no control behavior.
     */
    readonly trains_count: uint;
    /**
     * The number of trains in this rail block for this rail entity.
     */
    readonly trains_in_block: uint;
    /**
     * Amount of trains above which no new trains will be sent to this train stop. Writing nil will disable the limit (will set a maximum possible value).
     *
     * When a train stop has a control behavior with wire connected and set_trains_limit enabled, this value will be overwritten by it.
     */
    trains_limit: uint;
    /**
     * Index of the tree color.
     */
    tree_color_index: uint8;
    /**
     * Maximum index of the tree colors.
     */
    readonly tree_color_index_max: uint8;
    /**
     * Index of the tree gray stage
     */
    tree_gray_stage_index: uint8;
    /**
     * Maximum index of the tree gray stages.
     */
    readonly tree_gray_stage_index_max: uint8;
    /**
     * Index of the tree stage.
     */
    tree_stage_index: uint8;
    /**
     * Maximum index of the tree stages.
     */
    readonly tree_stage_index_max: uint8;
    /**
     * The entity prototype type of this entity.
     */
    readonly type: string;
    /**
     * A unique number identifying this entity for the lifetime of the save. These are allocated sequentially, and not re-used (until overflow).
     *
     * Only entities inheriting from {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype}, as well as {@link ItemRequestProxyPrototype | prototype:ItemRequestProxyPrototype} and {@link EntityGhostPrototype | prototype:EntityGhostPrototype} are assigned a unit number. Returns `nil` otherwise.
     */
    readonly unit_number?: uint;
    /**
     * The units associated with this spawner entity.
     */
    readonly units: LuaEntity[];
    /**
     * If set to 'true', this inserter will use filtering logic.
     *
     * This has no effect if the prototype does not support filters.
     */
    use_filters: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Read when this spidertron auto-targets enemies
     */
    vehicle_automatic_targeting_parameters: VehicleAutomaticTargetingParameters;
}
/**
 * Prototype of an entity.
 */
interface LuaEntityPrototype extends LuaPrototypeBase {
    /**
     * The crafting speed of this crafting-machine.
     */
    get_crafting_speed(this: void, quality?: QualityID): double;
    /**
     * The extension speed of this inserter.
     */
    get_inserter_extension_speed(this: void, quality?: QualityID): double | null;
    /**
     * The rotation speed of this inserter.
     */
    get_inserter_rotation_speed(this: void, quality?: QualityID): double | null;
    /**
     * Gets the base size of the given inventory on this entity or `nil` if the given inventory doesn't exist.
     */
    get_inventory_size(this: void, index: defines.inventory, quality?: QualityID): uint | null;
    /**
     * The maximum circuit wire distance for this entity. 0 if the entity doesn't support circuit wires.
     */
    get_max_circuit_wire_distance(this: void, quality?: QualityID): double;
    /**
     * The radius of the area constantly revealed by this radar, or cargo landing pad, in chunks.
     */
    get_max_distance_of_nearby_sector_revealed(this: void, quality?: QualityID): uint | null;
    /**
     * The radius of the area this radar can chart, in chunks.
     */
    get_max_distance_of_sector_revealed(this: void, quality?: QualityID): uint | null;
    /**
     * The max energy for this flying robot prototype.
     */
    get_max_energy(this: void, quality?: QualityID): double | null;
    /**
     * The theoretical maximum energy production for this entity.
     */
    get_max_energy_production(this: void, quality?: QualityID): double;
    /**
     * The theoretical maximum energy usage for this entity.
     */
    get_max_energy_usage(this: void, quality?: QualityID): double;
    /**
     * Max health of this entity. Will be `0` if this is not an entity with health.
     */
    get_max_health(this: void, quality?: QualityID): float;
    /**
     * The maximum wire distance for this entity. 0 if the entity doesn't support wires.
     */
    get_max_wire_distance(this: void, quality?: QualityID): double;
    /**
     * The base researching speed of this lab prototype.
     */
    get_researching_speed(this: void, quality?: QualityID): double | null;
    /**
     * The supply area of this electric pole or beacon prototype.
     */
    get_supply_area_distance(this: void, quality?: QualityID): double;
    /**
     * Test whether this entity prototype has a certain flag set.
     * @param flag The flag to test.
     * @returns `true` if this prototype has the given flag set.
     */
    has_flag(this: void, flag: EntityPrototypeFlag): boolean;
    /**
     * A table of pollutions amounts that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution, indexed by the name of each absorbed pollution type.
     */
    readonly absorptions_to_join_attack?: Record<string, float>;
    /**
     * The active energy usage of this rocket silo or combinator prototype.
     */
    readonly active_energy_usage?: double;
    /**
     * Entities this entity can be pasted onto in addition to the normal allowed ones.
     */
    readonly additional_pastable_entities: LuaEntityPrototype[];
    /**
     * Whether this unit prototype is affected by tile walking speed modifiers.
     */
    readonly affected_by_tiles?: boolean;
    /**
     * The air resistance of this rolling stock prototype.
     */
    readonly air_resistance?: double;
    /**
     * The alert icon scale of this entity prototype.
     */
    readonly alert_icon_scale: float;
    /**
     * The alert icon shift of this entity prototype.
     */
    readonly alert_icon_shift: Vector;
    /**
     * Whether this turret raises an alert when attacking
     */
    readonly alert_when_attacking?: boolean;
    /**
     * Whether this entity raises an alert when damaged.
     */
    readonly alert_when_damaged?: boolean;
    /**
     * Whether this market allows access to all forces or just friendly ones.
     */
    readonly allow_access_to_all_forces?: boolean;
    /**
     * Whether this inserter allows burner leeching.
     */
    readonly allow_burner_leech?: boolean;
    /**
     * When false copy-paste is not allowed for this entity.
     */
    readonly allow_copy_paste: boolean;
    /**
     * Whether this inserter allows custom pickup and drop vectors.
     */
    readonly allow_custom_vectors?: boolean;
    /**
     * Whether this vehicle allows passengers.
     */
    readonly allow_passengers?: boolean;
    /**
     * True if this entity-with-owner's is_military_target can be changed run-time (on the entity, not on the prototype itself)
     */
    readonly allow_run_time_change_of_is_military_target?: boolean;
    /**
     * The allowed module effects for this entity, if any.
     */
    readonly allowed_effects?: Record<string, boolean>;
    /**
     * The allowed module categories for this entity, if any.
     */
    readonly allowed_module_categories?: Record<string, true>;
    /**
     * Whether the lamp is always on (except when out of power or turned off by the circuit network).
     */
    readonly always_on?: boolean;
    /**
     * Name of the ammo category of this land mine.
     */
    readonly ammo_category?: string;
    /**
     * The animation speed coefficient of this belt connectable prototype.
     */
    readonly animation_speed_coefficient?: double;
    /**
     * The attack parameters for this entity, if any.
     */
    readonly attack_parameters?: AttackParameters;
    /**
     * The attack result of this entity, if any.
     */
    readonly attack_result?: TriggerItem[];
    /**
     * The amount of ammo that inserters automatically insert into this ammo-turret or artillery-turret.
     */
    readonly automated_ammo_count?: uint;
    /**
     * Whether this spider vehicle prototype automatically cycles weapons.
     */
    readonly automatic_weapon_cycling?: boolean;
    /**
     * Autoplace specification for this entity prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification;
    /**
     * The beacon counter used by effect receiver when deciding which sample to take from beacon profile.
     */
    readonly beacon_counter?: 'total' | 'same_type';
    readonly belt_distance?: double;
    readonly belt_length?: double;
    /**
     * The speed of this transport belt.
     */
    readonly belt_speed?: double;
    /**
     * The boiler operation mode of this boiler prototype.
     */
    readonly boiler_mode?: 'heat-fluid-inside' | 'output-to-separate-pipe';
    /**
     * The braking force of this vehicle prototype.
     */
    readonly braking_force?: double;
    /**
     * The evolution requirement to build this entity as a base when expanding enemy bases.
     */
    readonly build_base_evolution_requirement: double;
    readonly build_distance?: uint;
    /**
     * The log2 of grid size of the building
     */
    readonly building_grid_bit_shift: uint;
    /**
     * Whether this inserter is a bulk-type.
     */
    readonly bulk?: boolean;
    /**
     * The burner energy source prototype this entity uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype;
    /**
     * Whether this generator prototype burns fluid.
     */
    readonly burns_fluid?: boolean;
    readonly call_for_help_radius?: double;
    /**
     * Whether this unit prototype can open gates.
     */
    readonly can_open_gates?: boolean;
    /**
     * The chain shooting cooldown modifier of this spider vehicle prototype.
     */
    readonly chain_shooting_cooldown_modifier?: double;
    readonly character_corpse?: LuaEntityPrototype;
    /**
     * The chunk exploration radius of this spider vehicle prototype.
     */
    readonly chunk_exploration_radius?: double;
    /**
     * The item prototype name used to destroy this cliff.
     */
    readonly cliff_explosive_prototype?: string;
    /**
     * The bounding box used for collision checking.
     */
    readonly collision_box: BoundingBox;
    /**
     * The collision masks this entity uses
     */
    readonly collision_mask: CollisionMask;
    /**
     * Does this prototype collision mask collide with itself?
     */
    readonly collision_mask_collides_with_self: boolean;
    /**
     * Does this prototype collision mask collide with tiles only?
     */
    readonly collision_mask_collides_with_tiles_only: boolean;
    /**
     * Does this prototype collision mask consider tile transitions?
     */
    readonly collision_mask_considers_tile_transitions: boolean;
    /**
     * The color of the prototype, if any.
     */
    readonly color?: Color;
    readonly connection_distance?: double;
    /**
     * The construction radius for this roboport prototype.
     */
    readonly construction_radius?: double;
    /**
     * The energy consumption of this car prototype.
     */
    readonly consumption?: double;
    readonly container_distance?: double;
    /**
     * Corpses used when this entity is destroyed. It is a dictionary indexed by the corpse's prototype name.
     */
    readonly corpses?: Record<string, LuaEntityPrototype>;
    /**
     * If this simple-entity is counted as a rock for the deconstruction planner "trees and rocks only" filter.
     */
    readonly count_as_rock_for_filtered_deconstruction?: boolean;
    /**
     * The {@link crafting categories | runtime:LuaRecipeCategoryPrototype} this entity prototype supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    readonly crafting_categories?: Record<string, true>;
    /**
     * If this prototype will attempt to create a ghost of itself on death.
     *
     * If this is false then a ghost will never be made, if it's true a ghost may be made.
     */
    readonly create_ghost_on_death: boolean;
    /**
     * The trigger to run when this entity is created, if any.
     */
    readonly created_effect?: TriggerItem[];
    /**
     * The smoke trigger run when this entity is built, if any.
     */
    readonly created_smoke?: {
        smoke_name: string;
        offsets: Vector[];
        offset_deviation: BoundingBox;
        initial_height: float;
        max_radius?: float;
        speed: Vector;
        speed_multiplier: float;
        speed_multiplier_deviation: float;
        starting_frame: float;
        starting_frame_deviation: float;
        speed_from_center: float;
        speed_from_center_deviation: float;
    };
    readonly damage_hit_tint?: Color;
    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are off.
     */
    readonly darkness_for_all_lamps_off?: float;
    /**
     * Value between 0 and 1 darkness where all lamps of this lamp prototype are on.
     */
    readonly darkness_for_all_lamps_on?: float;
    /**
     * Whether this generator prototype destroys non-fuel fluids.
     */
    readonly destroy_non_fuel_fluid?: boolean;
    /**
     * The distraction cooldown of this unit prototype.
     */
    readonly distraction_cooldown?: uint;
    /**
     * The distribution effectivity for this beacon prototype.
     */
    readonly distribution_effectivity?: double;
    /**
     * The distribution effectivity bonus per quality level for this beacon prototype.
     */
    readonly distribution_effectivity_bonus_per_quality_level?: double;
    /**
     * The door opening speed for this rocket silo prototype.
     */
    readonly door_opening_speed?: double;
    /**
     * Whether this logistics or construction robot renders its cargo when flying.
     */
    readonly draw_cargo?: boolean;
    /**
     * Extra vertical space needed to see the whole entity in GUIs. This is used to calculate the correct zoom and positioning in the entity info gui, for example in the entity tooltip.
     */
    readonly drawing_box_vertical_extension: double;
    readonly drop_item_distance?: uint;
    /**
     * The dying time of this corpse prototype.
     */
    readonly dying_speed?: float;
    /**
     * Effect receiver prototype of this crafting machine, lab, or mining drill.
     */
    readonly effect_receiver?: EffectReceiver;
    /**
     * The effectivity of this car prototype, generator prototype.
     */
    readonly effectivity?: double;
    /**
     * The electric energy source prototype this entity uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype;
    /**
     * A table of pollution emissions per second the entity will create, grouped by the name of the pollution type.
     */
    readonly emissions_per_second: Record<string, double>;
    /**
     * The enemy map color used when charting this entity.
     */
    readonly enemy_map_color: Color;
    /**
     * The energy used per hit point taken for this vehicle during collisions.
     */
    readonly energy_per_hit_point?: double;
    /**
     * The energy consumed per tile moved for this flying robot.
     */
    readonly energy_per_move?: double;
    /**
     * The energy consumed per tick for this flying robot.
     */
    readonly energy_per_tick?: double;
    /**
     * The direct energy usage of this entity, if any.
     */
    readonly energy_usage?: double;
    /**
     * The engine starting speed for this rocket silo rocket prototype.
     */
    readonly engine_starting_speed?: double;
    readonly enter_vehicle_distance?: double;
    /**
     * Whether this explosion has a beam.
     */
    readonly explosion_beam?: double;
    /**
     * Whether this explosion rotates.
     */
    readonly explosion_rotate?: double;
    /**
     * The group of mutually fast-replaceable entities, if any.
     */
    readonly fast_replaceable_group?: string;
    /**
     * The filter count of this inserter, loader, mining drill or logistic chest. For logistic containers, `nil` means no limit.
     */
    readonly filter_count?: uint;
    /**
     * The final attack result for this projectile.
     */
    readonly final_attack_result?: TriggerItem[];
    /**
     * The fixed recipe name for this assembling machine prototype, if any.
     */
    readonly fixed_recipe?: string;
    /**
     * The flags for this entity prototype.
     */
    readonly flags: EntityPrototypeFlags;
    /**
     * The fluid capacity of this entity or 0 if this entity doesn't support fluids.
     *
     * Crafting machines will report 0 due to their fluid capacity being whatever a given recipe needs.
     */
    readonly fluid_capacity: double;
    /**
     * The fluid energy source prototype this entity uses, if any.
     */
    readonly fluid_energy_source_prototype?: LuaFluidEnergySourcePrototype;
    /**
     * The fluid usage of this generator prototype.
     */
    readonly fluid_usage_per_tick?: double;
    /**
     * The fluidbox prototypes for this entity.
     */
    readonly fluidbox_prototypes: LuaFluidBoxPrototype[];
    /**
     * The flying acceleration for this rocket silo rocket prototype.
     */
    readonly flying_acceleration?: double;
    /**
     * The flying speed for this rocket silo rocket prototype.
     */
    readonly flying_speed?: double;
    /**
     * The friction of this vehicle prototype.
     */
    readonly friction_force?: double;
    /**
     * The friendly map color used when charting this entity.
     */
    readonly friendly_map_color: Color;
    /**
     * The equipment grid prototype for this entity, if any.
     */
    readonly grid_prototype?: LuaEquipmentGridPrototype;
    readonly growth_grid_tile_size?: uint;
    readonly growth_ticks?: uint;
    /**
     * A mapping of the gun name to the gun prototype this prototype uses. `nil` if this entity prototype doesn't use guns.
     */
    readonly guns?: Record<string, LuaItemPrototype>;
    /**
     * A table of pollutants that this plant will release when it is harvested.
     */
    readonly harvest_emissions?: Record<string, double>;
    /**
     * Whether this unit, car, or character prototype has belt immunity.
     */
    readonly has_belt_immunity?: boolean;
    /**
     * Amount this entity can heal per tick, if any.
     */
    readonly healing_per_tick?: float;
    /**
     * The heat buffer prototype this entity uses, if any.
     */
    readonly heat_buffer_prototype?: LuaHeatBufferPrototype;
    /**
     * The heat energy source prototype this entity uses, if any.
     */
    readonly heat_energy_source_prototype?: LuaHeatEnergySourcePrototype;
    /**
     * The height of this spider vehicle prototype.
     */
    readonly height?: double;
    /**
     * A vector of the gun prototypes of this car, spider vehicle, artillery wagon, or turret.
     */
    readonly indexed_guns?: LuaItemPrototype[];
    /**
     * Every time this infinite resource 'ticks' down, it is reduced by this amount. Meaningless if this isn't an infinite resource.
     */
    readonly infinite_depletion_resource_amount?: uint;
    /**
     * Whether this resource is infinite.
     */
    readonly infinite_resource?: boolean;
    /**
     * The max number of ingredients this crafting machine prototype supports.
     */
    readonly ingredient_count?: uint;
    /**
     * True if this inserter chases items on belts for pickup.
     */
    readonly inserter_chases_belt_items?: boolean;
    /**
     * The drop position for this inserter.
     */
    readonly inserter_drop_position?: Vector;
    /**
     * The pickup position for this inserter.
     */
    readonly inserter_pickup_position?: Vector;
    /**
     * The built-in stack size bonus of this inserter prototype.
     */
    readonly inserter_stack_size_bonus?: uint;
    /**
     * The instruments for this programmable speaker.
     */
    readonly instruments?: ProgrammableSpeakerInstrument[];
    /**
     * The inventory type this container or linked container uses.
     */
    readonly inventory_type?: 'normal' | 'with_bar' | 'with_filters_and_bar';
    /**
     *
     * These are the objects that are considered buildings:
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
    readonly is_building: boolean;
    /**
     * True if this is entity-with-owner
     */
    readonly is_entity_with_owner: boolean;
    /**
     * True if this entity-with-owner is military target
     */
    readonly is_military_target?: boolean;
    readonly item_pickup_distance?: double;
    /**
     * Items that when placed will produce this entity, if any. Construction bots will choose the first item in the list to build this entity.
     */
    readonly items_to_place_this?: ItemStackDefinition[];
    readonly joint_distance?: double;
    /**
     * The item prototype names that are the inputs of this lab prototype.
     */
    readonly lab_inputs?: string[];
    /**
     * The lamp energy usage of this rocket silo prototype.
     */
    readonly lamp_energy_usage?: double;
    /**
     * The rocket launch delay for this rocket silo prototype.
     */
    readonly launch_wait_time?: uint8;
    /**
     * The light blinking speed for this rocket silo prototype.
     */
    readonly light_blinking_speed?: double;
    /**
     * The logistic mode of this logistic container.
     */
    readonly logistic_mode?: 'requester' | 'active-provider' | 'passive-provider' | 'buffer' | 'storage' | 'none';
    /**
     * The logistic parameters for this roboport.
     */
    readonly logistic_parameters?: {
        spawn_and_station_height: float;
        spawn_and_station_shadow_height_offset: float;
        stationing_render_layer_swap_height: float;
        charge_approach_distance: float;
        logistic_radius: float;
        construction_radius: float;
        charging_station_count: uint;
        charging_distance: float;
        charging_station_shift: Vector;
        charging_energy: double;
        charging_threshold_distance: float;
        robot_vertical_acceleration: float;
        stationing_offset: Vector;
        robot_limit: uint;
        logistics_connection_distance: float;
        robots_shrink_when_entering_and_exiting: boolean;
    };
    /**
     * The logistic radius for this roboport prototype.
     */
    readonly logistic_radius?: double;
    /**
     * Loot that will be dropped when this entity is killed, if any.
     */
    readonly loot?: Loot[];
    readonly loot_pickup_distance?: double;
    /**
     * The manual range modifier for this artillery turret or wagon prototype.
     */
    readonly manual_range_modifier?: double;
    /**
     * The map color used when charting this entity if a friendly or enemy color isn't defined, if any.
     */
    readonly map_color?: Color;
    /**
     * The bounding box used for map generator collision checking.
     */
    readonly map_generator_bounding_box: BoundingBox;
    /**
     * Count of enemies this spawner can sustain.
     */
    readonly max_count_of_owned_units?: double;
    /**
     * The maximum darkness at which this unit spawner can spawn entities.
     */
    readonly max_darkness_to_spawn?: float;
    /**
     * How many friendly units are required within the spawning_radius of this spawner for it to stop producing more units.
     */
    readonly max_friends_around_to_spawn?: double;
    /**
     * The max payload size of this logistics or construction robot.
     */
    readonly max_payload_size?: uint;
    /**
     * The maximum polyphony for this programmable speaker.
     */
    readonly max_polyphony?: uint;
    /**
     * The default maximum power output of this generator prototype.
     */
    readonly max_power_output?: double;
    /**
     * The maximum pursue distance of this unit prototype.
     */
    readonly max_pursue_distance?: double;
    /**
     * The max speed of this projectile or flying robot prototype.
     */
    readonly max_speed?: double;
    /**
     * The maximum energy for this flying robot above which it won't try to recharge when stationing.
     */
    readonly max_to_charge?: float;
    /**
     * The max underground distance for underground belts and underground pipes.
     */
    readonly max_underground_distance?: uint8;
    readonly maximum_corner_sliding_distance?: double;
    /**
     * The maximum fluid temperature of this generator prototype.
     */
    readonly maximum_temperature?: double;
    /**
     * The minimum darkness at which this unit spawner can spawn entities.
     */
    readonly min_darkness_to_spawn?: float;
    /**
     * The minimum pursue time of this unit prototype.
     */
    readonly min_pursue_time?: uint;
    /**
     * The minimum energy for this flying robot before it tries to recharge.
     */
    readonly min_to_charge?: float;
    /**
     * Whether this entity is minable and what can be obtained by mining it.
     */
    readonly mineable_properties: MineableProperties;
    /**
     * Minimum amount of this resource.
     */
    readonly minimum_resource_amount?: uint;
    /**
     * The mining radius of this mining drill prototype.
     */
    readonly mining_drill_radius?: double;
    /**
     * The mining speed of this mining drill/character prototype.
     */
    readonly mining_speed?: double;
    /**
     * The module inventory size. `nil` if this entity doesn't support modules.
     */
    readonly module_inventory_size?: uint;
    /**
     * Whether this unit prototype can move while shooting.
     */
    readonly move_while_shooting?: boolean;
    readonly neighbour_bonus?: double;
    /**
     * The next upgrade for this entity, if any.
     */
    readonly next_upgrade?: LuaEntityPrototype;
    /**
     * The normal amount for this resource.
     */
    readonly normal_resource_amount?: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly per_lane_filters?: boolean;
    /**
     * The beacon profile: extra multiplier applied to the effects received from beacon by the effect receiver based on amount of beacons that reach that effect receiver
     */
    readonly profile?: double[];
    /**
     * True if this entity prototype should be included during tile collision checks with {@link LuaTilePrototype::check_collision_with_entities | runtime:LuaTilePrototype::check_collision_with_entities} enabled.
     */
    readonly protected_from_tile_building: boolean;
    /**
     * The pumping speed of this offshore or normal pump.
     */
    readonly pumping_speed?: double;
    /**
     * The radar range of this unit prototype.
     */
    readonly radar_range?: uint;
    /**
     * The radius of this entity prototype.
     */
    readonly radius: double;
    readonly radius_visualisation_specification?: RadiusVisualisationSpecification;
    readonly reach_distance?: uint;
    readonly reach_resource_distance?: double;
    readonly related_underground_belt?: LuaEntityPrototype;
    /**
     * The remains left behind when this entity is mined.
     */
    readonly remains_when_mined: LuaEntityPrototype[];
    /**
     * Whether this entity should remove decoratives that collide with it when this entity is built.
     */
    readonly remove_decoratives: 'automatic' | 'true' | 'false';
    /**
     * Repair-speed modifier for this entity, if any. Actual repair speed will be `tool_repair_speed * entity_repair_speed_modifier`.
     */
    readonly repair_speed_modifier?: float;
    /**
     * List of resistances towards each damage type. It is a dictionary indexed by damage type names (see `data/base/prototypes/damage-type.lua`).
     */
    readonly resistances?: Record<string, Resistance>;
    /**
     * The {@link resource categories | runtime:LuaResourceCategoryPrototype} this character or mining drill supports.
     *
     * The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    readonly resource_categories?: Record<string, true>;
    /**
     * Name of the category of this resource.
     *
     * During data stage, this property is named "category".
     */
    readonly resource_category?: string;
    /**
     * The resource drain rate percent of this mining drill prototype.
     */
    readonly resource_drain_rate_percent?: uint8;
    readonly respawn_time?: uint;
    /**
     * The result units and spawn points with weight and evolution factor for a biter spawner entity.
     */
    readonly result_units?: UnitSpawnDefinition[];
    /**
     * The rising speed for this rocket silo rocket prototype.
     */
    readonly rising_speed?: double;
    /**
     * The rocket entity prototype associated with this rocket silo prototype.
     */
    readonly rocket_entity_prototype?: LuaEntityPrototype;
    /**
     * The rocket parts required for this rocket silo prototype.
     */
    readonly rocket_parts_required?: uint;
    /**
     * The rocket rising delay for this rocket silo prototype.
     */
    readonly rocket_rising_delay?: uint8;
    /**
     * The rotation speed of this car prototype.
     */
    readonly rotation_speed?: double;
    /**
     * The movement speed of this character prototype.
     */
    readonly running_speed?: double;
    /**
     * Whether this generator prototype scales fluid usage.
     */
    readonly scale_fluid_usage?: boolean;
    /**
     * The secondary bounding box used for collision checking, if any. This is only used in rails and rail remnants.
     */
    readonly secondary_collision_box?: BoundingBox;
    /**
     * Is this entity selectable?
     */
    readonly selectable_in_game: boolean;
    /**
     * The bounding box used for drawing selection.
     */
    readonly selection_box: BoundingBox;
    /**
     * The selection priority of this entity - a value between `0` and `255`.
     */
    readonly selection_priority: uint;
    /**
     * The cursor size used when shooting at this entity.
     */
    readonly shooting_cursor_size: float;
    /**
     * The spawning cooldown for this enemy spawner prototype.
     */
    readonly spawn_cooldown?: {
        min: double;
        max: double;
    };
    readonly spawn_decoration?: TriggerEffectItem[];
    readonly spawn_decorations_on_expansion?: boolean;
    /**
     * How far from the spawner can the units be spawned.
     */
    readonly spawning_radius?: double;
    /**
     * What spaces should be between the spawned units.
     */
    readonly spawning_spacing?: double;
    /**
     * The spawning time modifier of this unit prototype.
     */
    readonly spawning_time_modifier?: double;
    /**
     * The default speed of this flying robot, rolling stock or unit. For rolling stocks, this is their `max_speed`.
     */
    readonly speed?: double;
    /**
     * The speed multiplier when this flying robot is out of energy.
     */
    readonly speed_multiplier_when_out_of_energy?: float;
    /**
     * The bounding box used to attach sticker type entities.
     */
    readonly sticker_box: BoundingBox;
    /**
     * Whether this entity prototype could possibly ever be rotated.
     */
    readonly supports_direction: boolean;
    /**
     * The surface conditions required to build this entity.
     */
    readonly surface_conditions?: SurfaceCondition[];
    /**
     * If this car prototype uses tank controls to drive.
     */
    readonly tank_driving?: boolean;
    /**
     * The target temperature of this boiler prototype.
     */
    readonly target_temperature?: double;
    /**
     * The terrain friction modifier for this vehicle.
     */
    readonly terrain_friction_modifier?: float;
    readonly ticks_to_keep_aiming_direction?: uint;
    readonly ticks_to_keep_gun?: uint;
    readonly ticks_to_stay_in_combat?: uint;
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_height: uint;
    /**
     * Specifies the tiling size of the entity, is used to decide, if the center should be in the center of the tile (odd tile size dimension) or on the tile border (even tile size dimension)
     */
    readonly tile_width: uint;
    /**
     * The time to live for this prototype or `0` if prototype doesn't have time_to_live or time_before_removed.
     */
    readonly time_to_live: uint;
    /**
     * The time it takes this land mine to arm.
     */
    readonly timeout?: uint;
    /**
     * The torso bob speed of this spider vehicle prototype.
     */
    readonly torso_bob_speed?: double;
    /**
     * The torso rotation speed of this spider vehicle prototype.
     */
    readonly torso_rotation_speed?: double;
    /**
     * If it is a tree, return the number of colors it supports.
     */
    readonly tree_color_count?: uint8;
    /**
     * The collision mask entities must collide with to make this landmine blow up.
     */
    readonly trigger_collision_mask?: CollisionMask;
    /**
     * The trigger target mask for this entity prototype type.
     *
     * The values in the dictionary are meaningless and exists just to allow the dictionary type for easy lookup.
     */
    readonly trigger_target_mask: Record<string, boolean>;
    /**
     * The range of this turret.
     */
    readonly turret_range?: uint;
    /**
     * The turret rotation speed of this car prototype.
     */
    readonly turret_rotation_speed?: float;
    /**
     * Whether this logistic container prototype uses exact mode
     */
    readonly use_exact_mode?: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    readonly vector_to_place_result?: Vector;
    /**
     * Vertical selection shift used by rolling stocks. It affects selection box vertical position but is also used to shift rolling stock graphics along the rails to fine tune train's look.
     */
    readonly vertical_selection_shift?: double;
    /**
     * The vision distance of this unit prototype.
     */
    readonly vision_distance?: double;
    /**
     * The void energy source prototype this entity uses, if any.
     */
    readonly void_energy_source_prototype?: LuaVoidEnergySourcePrototype;
    /**
     * The weight of this vehicle prototype.
     */
    readonly weight?: double;
}
/**
 * An item in a {@link LuaEquipmentGrid | runtime:LuaEquipmentGrid}, for example a fusion reactor placed in one's power armor.
 *
 * An equipment reference becomes invalid once the equipment is removed or the equipment grid it resides in is destroyed.
 */
interface LuaEquipment {
    /**
     * The burner energy source for this equipment, if any.
     */
    readonly burner?: LuaBurner;
    /**
     * Current available energy.
     */
    energy: double;
    /**
     * Energy generated per tick.
     */
    readonly generator_power: double;
    /**
     * Name of the equipment contained in this ghost
     */
    readonly ghost_name: string;
    /**
     * The prototype of the equipment contained in this ghost.
     */
    readonly ghost_prototype: LuaEquipmentPrototype;
    /**
     * Type of the equipment contained in this ghost.
     */
    readonly ghost_type: string;
    /**
     * Inventory size bonus.
     */
    readonly inventory_bonus: uint;
    /**
     * Maximum amount of energy that can be stored in this equipment.
     */
    readonly max_energy: double;
    /**
     * Maximum shield value.
     */
    readonly max_shield: double;
    /**
     * Maximum solar power generated.
     */
    readonly max_solar_power: double;
    /**
     * Movement speed bonus.
     */
    readonly movement_bonus: double;
    /**
     * Name of this equipment.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Position of this equipment in the equipment grid.
     */
    readonly position: EquipmentPosition;
    readonly prototype: LuaEquipmentPrototype;
    /**
     * Quality of this equipment.
     */
    readonly quality: LuaQualityPrototype;
    /**
     * Shape of this equipment.
     */
    readonly shape: {
        width: uint;
        height: uint;
    };
    /**
     * Current shield value of the equipment.
     *
     * Can't be set higher than {@link LuaEquipment::max_shield | runtime:LuaEquipment::max_shield}.
     */
    shield: double;
    /**
     * If this equipment is marked to be removed.
     */
    readonly to_be_removed: boolean;
    /**
     * Type of this equipment.
     */
    readonly type: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of an equipment category.
 */
interface LuaEquipmentCategoryPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * An equipment grid is for example the inside of a power armor.
 */
interface LuaEquipmentGrid {
    /**
     * Check whether moving an equipment would succeed.
     * @param table.equipment The equipment to move
     * @param table.position Where to put it
     */
    can_move(this: void, table: {
        equipment: LuaEquipment;
        position: EquipmentPosition;
    }): boolean;
    /**
     * Cancels removal for the given equipment.
     * @returns If the equipment removal was successfully cancelled.
     */
    cancel_removal(this: void, equipment: LuaEquipment): boolean;
    /**
     * Clear all equipment from the grid, removing it without actually returning it.
     * @param by_player If provided, the action is done 'as' this player and {@link on_player_removed_equipment | runtime:on_player_removed_equipment} is triggered.
     */
    clear(this: void, by_player?: PlayerIdentification): void;
    /**
     * Get the number of all or some equipment in this grid.
     * @param equipment Prototype name of the equipment to count. If not specified, count all equipment.
     */
    count(this: void, equipment?: string): uint;
    /**
     * Find equipment by name.
     * @param equipment Prototype of the equipment to find.
     * @param search_ghosts If ghosts inner equipment should be searched. Defaults to `false`
     * @returns The first found equipment, or `nil` if equipment could not be found.
     */
    find(this: void, equipment: EquipmentWithQualityID, search_ghosts?: boolean): LuaEquipment | null;
    /**
     * Find equipment in the Equipment Grid based off a position.
     * @param position The position
     * @returns The found equipment, or `nil` if equipment could not be found at the given position.
     */
    get(this: void, position: EquipmentPosition): LuaEquipment | null;
    /**
     * Get counts of all equipment in this grid.
     * @returns The counts, indexed by equipment names.
     */
    get_contents(this: void): Record<string, uint>;
    /**
     * Total energy per tick generated by the equipment inside this grid.
     */
    get_generator_energy(this: void, quality?: QualityID): double;
    /**
     * Move an equipment within this grid.
     * @param table.equipment The equipment to move
     * @param table.position Where to put it
     * @returns `true` if the equipment was successfully moved.
     */
    move(this: void, table: {
        equipment: LuaEquipment;
        position: EquipmentPosition;
    }): boolean;
    /**
     * Marks the given equipment for removal. If the given equipment is a ghost it is removed.
     * @returns If the equipment was successfully marked for removal (or in the case of a ghost; removed.)
     */
    order_removal(this: void, equipment: LuaEquipment): boolean;
    /**
     * Insert an equipment into the grid.
     * @param table.name Equipment prototype name
     * @param table.quality The quality, `nil` for any or if not provided `normal` is used.
     * @param table.position Grid position to put the equipment in.
     * @param table.by_player If provided the action is done 'as' this player and {@link on_player_placed_equipment | runtime:on_player_placed_equipment} is triggered.
     * @param table.ghost If true, place the equipment as a ghost.
     * @returns The newly-added equipment, or `nil` if the equipment could not be added.
     */
    put(this: void, table: {
        name: EquipmentID;
        quality?: QualityID;
        position?: EquipmentPosition;
        by_player?: PlayerIdentification;
        ghost?: boolean;
    }): LuaEquipment | null;
    /**
     * Revives the given equipment ghost if possible.
     * @param equipment The equipment ghost to revive.
     */
    revive(this: void, equipment: LuaEquipment): LuaEquipment;
    /**
     * Remove an equipment from the grid.
     * @param table.position Take the equipment that contains this position in the grid.
     * @param table.equipment Take this exact equipment.
     * @param table.by_player If provided the action is done 'as' this player and {@link on_player_removed_equipment | runtime:on_player_removed_equipment} is triggered.
     * @returns The removed equipment, or `nil` if no equipment was removed.
     */
    take(this: void, table: {
        position?: EquipmentPosition;
        equipment?: LuaEquipment;
        by_player?: PlayerIdentification;
    }): SimpleItemStack | null;
    /**
     * Remove all equipment from the grid.
     * @param by_player If provided, the action is done 'as' this player and {@link on_player_removed_equipment | runtime:on_player_removed_equipment} is triggered.
     * @returns List of the equipment that has been removed.
     */
    take_all(this: void, by_player?: PlayerIdentification): ItemCountWithQuality[];
    /**
     * The total energy stored in all batteries in the equipment grid.
     */
    readonly available_in_batteries: double;
    /**
     * Total energy storage capacity of all batteries in the equipment grid.
     */
    readonly battery_capacity: double;
    /**
     * The entity that this equipment grid is owned by (in some inventory or item stack.)
     *
     * If the owning entity is a character owned by some player and the player is disconnected this will return `nil`.
     */
    readonly entity_owner?: LuaEntity;
    /**
     * All the equipment in this grid.
     */
    readonly equipment: LuaEquipment[];
    /**
     * Height of the equipment grid.
     */
    readonly height: uint;
    /**
     * Whether this grid's equipment movement bonus is active.
     */
    inhibit_movement_bonus: boolean;
    /**
     * The total amount of inventory bonus this equipment grid gives.
     */
    readonly inventory_bonus: uint;
    /**
     * The maximum amount of shields this equipment grid has.
     */
    readonly max_shield: float;
    /**
     * Maximum energy per tick that can be created by any solar panels in the equipment grid. Actual generated energy varies depending on the daylight levels.
     */
    readonly max_solar_energy: double;
    /**
     * The total amount of movement bonus this equipment grid gives.
     *
     * Returns `0` if {@link LuaEquipmentGrid::inhibit_movement_bonus | runtime:LuaEquipmentGrid::inhibit_movement_bonus} is `false`.
     */
    readonly movement_bonus: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The player that this equipment grid is owned by (in some inventory or item stack.)
     */
    readonly player_owner?: LuaPlayer;
    readonly prototype: LuaEquipmentGridPrototype;
    /**
     * The amount of shields this equipment grid has.
     */
    readonly shield: float;
    /**
     * Unique identifier of this equipment grid.
     */
    readonly unique_id: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Width of the equipment grid.
     */
    readonly width: uint;
}
/**
 * Prototype of an equipment grid.
 */
interface LuaEquipmentGridPrototype extends LuaPrototypeBase {
    /**
     * Equipment category names for the {@link categories | runtime:LuaEquipmentPrototype::equipment_categories} that may be inserted into this equipment grid. The grid will accept any equipment that has at least one category in this list.
     */
    readonly equipment_categories: string[];
    readonly height: uint;
    /**
     * If the player can move equipment into or out of this grid.
     */
    readonly locked: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    readonly width: uint;
}
/**
 * Prototype of a modular equipment.
 */
interface LuaEquipmentPrototype extends LuaPrototypeBase {
    get_energy_consumption(this: void, quality?: QualityID): double;
    get_inventory_bonus(this: void, quality?: QualityID): uint | null;
    get_movement_bonus(this: void, quality?: QualityID): float | null;
    /**
     * The shield value of this equipment. 0 for non-shield equipment.
     */
    get_shield(this: void, quality?: QualityID): float;
    /**
     * The equipment attack parameters.
     */
    readonly attack_parameters?: AttackParameters;
    /**
     * Whether this active defense equipment is automatic. Returns false if not active defense equipment.
     */
    readonly automatic: boolean;
    /**
     * The background color of this equipment prototype.
     */
    readonly background_color: Color;
    /**
     * The burner energy source prototype this equipment uses, if any.
     */
    readonly burner_prototype?: LuaBurnerPrototype;
    /**
     * The electric energy source prototype this equipment uses, if any.
     */
    readonly electric_energy_source_prototype?: LuaElectricEnergySourcePrototype;
    /**
     * The energy per shield point restored. 0 for non-shield equipment.
     */
    readonly energy_per_shield: double;
    /**
     * The max power generated by this equipment.
     */
    readonly energy_production: double;
    /**
     * The energy source prototype for the equipment.
     */
    readonly energy_source: LuaElectricEnergySourcePrototype;
    /**
     * Category names for this equipment. These {@link categories | runtime:LuaEquipmentGridPrototype::equipment_categories} will be used to determine whether this equipment is allowed in a particular equipment grid.
     */
    readonly equipment_categories: string[];
    /**
     * The logistic parameters for this roboport equipment.
     */
    readonly logistic_parameters?: {
        spawn_and_station_height: float;
        spawn_and_station_shadow_height_offset: float;
        stationing_render_layer_swap_height: float;
        charge_approach_distance: float;
        logistic_radius: float;
        construction_radius: float;
        charging_station_count: uint;
        charging_distance: float;
        charging_station_shift: Vector;
        charging_energy: double;
        charging_threshold_distance: float;
        robot_vertical_acceleration: float;
        stationing_offset: Vector;
        robot_limit: uint;
        logistics_connection_distance: float;
        robots_shrink_when_entering_and_exiting: boolean;
    };
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Shape of this equipment prototype.
     */
    readonly shape: {
        width: uint;
        height: uint;
        /**
         * Only set when the shape is "manual"
         */
        points?: EquipmentPoint[];
    };
    /**
     * The result item when taking this equipment out of an equipment grid, if any.
     */
    readonly take_result?: LuaItemPrototype;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Encapsulates statistic data for different parts of the game.
 *
 * In the context of flow statistics, `input`, `output` and `storage` describe in which position of the associated GUI the values are shown. Input values are shown on the far left side, output values to the immediate right, and storage values (if present) to the far right.
 *
 * - The item production GUI shows "consumption" on the right, thus `output` describes the item consumption numbers. The same goes for fluid consumption.
 *
 * - The kills GUI shows "losses" on the right, so `output` describes how many of the force's entities were killed by enemies.
 *
 * - The electric network GUI shows "power consumption" on the left side, so in this case `input` describes the power consumption numbers. In addition, electric networks are currently the only ones that utilize the `storage` part of their statistics, showing accumulator charges to the far right of the GUI.
 */
interface LuaFlowStatistics {
    /**
     * Reset all the statistics data to 0.
     */
    clear(this: void): void;
    /**
     * Gets the flow count value for the given time frame. If `sample_index` is not provided, then the value returned is the average across the provided precision time period. These are the values shown in the bottom section of the statistics GUIs.
     *
     * Use `sample_index` to access the data used to generate the statistics graphs. Each precision level contains 300 samples of data so at a precision of 1 minute, each sample contains data averaged across 60s / 300 = 0.2s = 12 ticks.
     *
     * All return values are normalized to be per-tick for electric networks and per-minute for all other types.
     * @param table.name The prototype name.
     * @param table.category The statistics category to read from. Valid choices are `"input"`, `"output"` and `"storage"`.
     * @param table.precision_index The precision to read.
     * @param table.sample_index The sample index to read from within the precision range. If not provided, the entire precision range is read. Must be between 1 and 300 where 1 is the most recent sample and 300 is the oldest.
     * @param table.count If true, the count of items/fluids/entities is returned instead of the per-time-frame value.
     */
    get_flow_count(this: void, table: {
        name: string;
        category: string;
        precision_index: defines.flow_precision_index;
        sample_index?: uint16;
        count?: boolean;
    }): double;
    /**
     * Gets the total input count for a given prototype.
     * @param name The prototype name.
     */
    get_input_count(this: void, name: string): uint64 | double;
    /**
     * Gets the total output count for a given prototype.
     * @param name The prototype name.
     */
    get_output_count(this: void, name: string): uint64 | double;
    /**
     * Gets the total storage count for a given prototype.
     * @param name The prototype name.
     */
    get_storage_count(this: void, name: string): uint64 | double;
    /**
     * Adds a value to this flow statistics.
     * @param name The prototype name.
     * @param count The count: positive or negative determines if the value goes in the input or output statistics.
     */
    on_flow(this: void, name: string, count: float): void;
    /**
     * Sets the total input count for a given prototype.
     * @param name The prototype name.
     * @param count The new count. The type depends on the instance of the statistics.
     */
    set_input_count(this: void, name: string, count: uint64 | double): void;
    /**
     * Sets the total output count for a given prototype.
     * @param name The prototype name.
     * @param count The new count. The type depends on the instance of the statistics.
     */
    set_output_count(this: void, name: string, count: uint64 | double): void;
    /**
     * Sets the total storage count for a given prototype.
     * @param name The prototype name.
     * @param count The new count. The type depends on the instance of the statistics.
     */
    set_storage_count(this: void, name: string, count: uint64 | double): void;
    /**
     * The force these statistics belong to. `nil` for pollution statistics.
     */
    readonly force?: LuaForce;
    /**
     * List of input counts indexed by prototype name. Represents the data that is shown on the left side of the GUI for the given statistics.
     */
    readonly input_counts: Record<string, uint64 | double>;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * List of output counts indexed by prototype name. Represents the data that is shown in the middle of the GUI for electric networks and on the right side for all other statistics types.
     */
    readonly output_counts: Record<string, uint64 | double>;
    /**
     * List of storage counts indexed by prototype name. Represents the data that is shown on the right side of the GUI for electric networks. For other statistics types these values are currently unused and hidden.
     */
    readonly storage_counts: Record<string, uint64 | double>;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * An array of fluid boxes of an entity. Entities may contain more than one fluid box, and some can change the number of fluid boxes -- for instance, an assembling machine will change its number of fluid boxes depending on its active recipe. See {@link Fluid | runtime:Fluid}.
 *
 * Do note that reading from a {@link LuaFluidBox | runtime:LuaFluidBox} creates a new table and writing will copy the given fields from the table into the engine's own fluid box structure. Therefore, the correct way to update a fluidbox of an entity is to read it first, modify the table, then write the modified table back. Directly accessing the returned table's attributes won't have the desired effect.
 * @example ```
-- Double the temperature of the fluid in entity's first fluid box.
fluid = entity.fluidbox[1]
fluid.temperature = fluid.temperature * 2
entity.fluidbox[1] = fluid
```
 */
interface LuaFluidBox {
    /**
     * Registers a linked connection between this entity and other entity. Because entity may have multiple fluidboxes, each with multiple connections that could be linked, a unique value for this and other linked_connection_id may need to be given.
     *
     * It may happen a linked connection is not established immediately due to crafting machines being possible to not have certain fluidboxes exposed at a given point in time, but once they appear (due to recipe changes that would use them) they will be linked. Linked connections are persisted as (this_entity, this_linked_connection_id, other_entity, other_linked_connection_id) so if a pipe connection definition's value of linked_connection_id changes existing connections may not restore correct connections.
     *
     * Every fluidbox connection that was defined in prototypes as connection_type=="linked" may be linked to at most 1 other fluidbox. When trying to connect already used connection, previous connection will be removed.
     *
     * Linked connections cannot go to the same entity even if they would be part of other fluidbox.
     */
    add_linked_connection(this: void, this_linked_connection_id: uint, other_entity: LuaEntity, other_linked_connection_id: uint): void;
    /**
     * Flushes all fluid from this fluidbox and its fluid system.
     * @param fluid If provided, only this fluid is flushed.
     * @returns The removed fluid.
     */
    flush(this: void, index: uint, fluid?: FluidID): Record<string, float>;
    /**
     * The capacity of the given fluidbox index.
     */
    get_capacity(this: void, index: uint): double;
    /**
     * The fluidboxes to which the fluidbox at the given index is connected.
     */
    get_connections(this: void, index: uint): LuaFluidBox[];
    /**
     * Get a fluid box filter
     * @param index The index of the filter to get.
     * @returns The filter at the requested index, or `nil` if there isn't one.
     */
    get_filter(this: void, index: uint): FluidBoxFilter | null;
    /**
     * Gets counts of all fluids in the fluid segment. May return `nil` for fluid wagon, fluid turret's internal buffer, or a fluidbox which does not belong to a fluid segment.
     * @returns The counts, indexed by fluid name.
     */
    get_fluid_segment_contents(this: void, index: uint): Record<string, uint> | null;
    /**
     * Gets the unique ID of the fluid segment this fluid box belongs to. May return `nil` for fluid wagon, fluid turret's internal buffer or a fluidbox which does not belong to a fluid segment.
     */
    get_fluid_segment_id(this: void, index: uint): uint | null;
    /**
     * Returns other end of a linked connection.
     * @returns [0] - Other entity to which a linked connection was made
     * @returns [1] - linked_connection_id on other entity
     */
    get_linked_connection(this: void, this_linked_connection_id: uint): LuaMultiReturn<[
        LuaEntity | null,
        uint | null
    ]>;
    /**
     * Returns list of all linked connections registered for this entity.
     */
    get_linked_connections(this: void): FluidBoxConnectionRecord[];
    /**
     * Returns the fluid the fluidbox is locked onto
     * @returns `nil` if the fluidbox is not locked to any fluid.
     */
    get_locked_fluid(this: void, index: uint): string | null;
    /**
     * Get the fluid box's connections and associated data.
     */
    get_pipe_connections(this: void, index: uint): PipeConnection[];
    /**
     * The prototype of this fluidbox index. If this is used on a fluidbox of a crafting machine which due to recipe was created by merging multiple prototypes, a table of prototypes that were merged will be returned instead
     */
    get_prototype(this: void, index: uint): LuaFluidBoxPrototype | LuaFluidBoxPrototype[];
    /**
     * Removes linked connection record. If connected, other end will be also removed.
     */
    remove_linked_connection(this: void, this_linked_connection_id: uint): void;
    /**
     * Set a fluid box filter.
     *
     * Some entities cannot have their fluidbox filter set, notably fluid wagons and crafting machines.
     * @param index The index of the filter to set.
     * @param filter The filter to set. Setting `nil` clears the filter.
     * @returns Whether the filter was set successfully.
     */
    set_filter(this: void, index: uint, filter: FluidBoxFilterSpec | nil): boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The entity that owns this fluidbox.
     */
    readonly owner: LuaEntity;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Access, set or clear a fluid box. The index must always be in bounds (see {@link LuaFluidBox::length_operator | runtime:LuaFluidBox::length_operator}). New fluidboxes may not be added or removed using this operator.
     *
     * Is `nil` if the given fluid box does not contain any fluid. Writing `nil` removes all fluid from the fluid box.
     */
    get: LuaTableGetMethod<any, Fluid>;
    /**
     * Access, set or clear a fluid box. The index must always be in bounds (see {@link LuaFluidBox::length_operator | runtime:LuaFluidBox::length_operator}). New fluidboxes may not be added or removed using this operator.
     *
     * Is `nil` if the given fluid box does not contain any fluid. Writing `nil` removes all fluid from the fluid box.
     */
    set: LuaTableSetMethod<any, Fluid>;
    /**
     * Number of fluid boxes.
     */
    length: LuaLengthMethod<uint>;
}
/**
 * A prototype of a fluidbox owned by some {@link LuaEntityPrototype | runtime:LuaEntityPrototype}.
 */
interface LuaFluidBoxPrototype {
    /**
     * The entity that this belongs to.
     */
    readonly entity: LuaEntityPrototype;
    /**
     * The filter, if any is set.
     */
    readonly filter?: LuaFluidPrototype;
    /**
     * The index of this fluidbox prototype in the owning entity.
     */
    readonly index: uint;
    /**
     * The maximum temperature, if any is set.
     */
    readonly maximum_temperature?: double;
    /**
     * The minimum temperature, if any is set.
     */
    readonly minimum_temperature?: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The pipe connection points.
     */
    readonly pipe_connections: PipeConnectionDefinition[];
    /**
     * The production type.
     */
    readonly production_type: 'input' | 'input-output' | 'output' | 'none';
    /**
     * The render layer.
     */
    readonly render_layer: string;
    /**
     * The secondary draw orders for the 4 possible connection directions.
     */
    readonly secondary_draw_orders: int[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    readonly volume: double;
}
/**
 * Prototype of a fluid energy source.
 */
interface LuaFluidEnergySourcePrototype {
    readonly burns_fluid: boolean;
    readonly destroy_non_fuel_fluid: boolean;
    readonly effectivity: double;
    /**
     * The table of emissions of this energy source in `pollution/Joule`, indexed by pollutant type. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions_per_joule: Record<string, double>;
    /**
     * The fluid box for this energy source.
     */
    readonly fluid_box: LuaFluidBoxPrototype;
    readonly fluid_usage_per_tick: double;
    readonly maximum_temperature: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly render_no_network_icon: boolean;
    readonly render_no_power_icon: boolean;
    readonly scale_fluid_usage: boolean;
    /**
     * The smoke sources for this prototype, if any.
     */
    readonly smoke: SmokeSource[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a fluid.
 */
interface LuaFluidPrototype extends LuaPrototypeBase {
    readonly base_color: Color;
    /**
     * Default temperature of this fluid.
     */
    readonly default_temperature: double;
    /**
     * A multiplier on the amount of emissions produced when this fluid is burnt in a generator. A value above `1.0` increases emissions and vice versa. The multiplier can't be negative.
     */
    readonly emissions_multiplier: double;
    readonly flow_color: Color;
    /**
     * The amount of energy in Joules one unit of this fluid will produce when burnt in a generator. A value of `0` means this fluid can't be used for energy generation. The value can't be negative.
     */
    readonly fuel_value: double;
    /**
     * The temperature above which this fluid will be shown as gaseous inside tanks and pipes.
     */
    readonly gas_temperature: double;
    /**
     * The amount of energy in Joules required to heat one unit of this fluid by 1°C.
     */
    readonly heat_capacity: double;
    /**
     * Maximum temperature this fluid can reach.
     */
    readonly max_temperature: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a font.
 */
interface LuaFontPrototype {
    readonly border: boolean;
    /**
     * The border color, if any.
     */
    readonly border_color?: Color;
    readonly filtered: boolean;
    readonly from: string;
    /**
     * Name of this prototype.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly size: int;
    readonly spacing: float;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * `LuaForce` encapsulates data local to each "force" or "faction" of the game. Default forces are player, enemy and neutral. Players and mods can create additional forces (up to 64 total).
 */
interface LuaForce {
    /**
     * Adds a custom chart tag to the given surface and returns the new tag or `nil` if the given position isn't valid for a chart tag.
     *
     * The chunk must be charted for a tag to be valid at that location.
     * @param surface Which surface to add the tag to.
     * @param tag The tag to add.
     */
    add_chart_tag(this: void, surface: SurfaceIdentification, tag: ChartTagSpec): LuaCustomChartTag | null;
    /**
     * Add this technology to the back of the research queue if the queue is enabled. Otherwise, set this technology to be researched now.
     * @returns Whether the technology was successfully added.
     */
    add_research(this: void, technology: TechnologyID): boolean;
    /**
     * Cancels pending chart requests for the given surface or all surfaces.
     */
    cancel_charting(this: void, surface?: SurfaceIdentification): void;
    /**
     * Stop the research currently in progress. This will remove any dependent technologies from the research queue.
     */
    cancel_current_research(this: void): void;
    /**
     * Chart a portion of the map. The chart for the given area is refreshed; it creates chart for any parts of the given area that haven't been charted yet.
     * @param area The area on the given surface to chart.
     * @example ```
    -- Charts a 2048x2048 rectangle centered around the origin.
    game.player.force.chart(game.player.surface, {{x = -1024, y = -1024}, {x = 1024, y = 1024}})
    ```
     */
    chart(this: void, surface: SurfaceIdentification, area: BoundingBox): void;
    /**
     * Chart all generated chunks.
     * @param surface Which surface to chart or all if not given.
     */
    chart_all(this: void, surface?: SurfaceIdentification): void;
    /**
     * Erases chart data for this force.
     * @param surface Which surface to erase chart data for or if not provided all surfaces charts are erased.
     */
    clear_chart(this: void, surface?: SurfaceIdentification): void;
    /**
     * Copies the given surface's chart from the given force to this force.
     * @param source_force The force to copy from
     * @param source_surface The surface to copy from.
     * @param destination_surface The surface to copy to.
     */
    copy_chart(this: void, source_force: ForceID, source_surface: SurfaceIdentification, destination_surface: SurfaceIdentification): void;
    /**
     * Copies all of the given changeable values (except charts) from the given force to this force.
     * @param force The force to copy from.
     */
    copy_from(this: void, force: ForceID): void;
    /**
     * Creates a new space platform on this force.
     * @param table.name The platform name. If not provided, a random name will be used.
     * @param table.planet The planet that the platform will orbit.
     * @param table.starter_pack The starter pack required to build the platform.
     */
    create_space_platform(this: void, table: {
        name?: string;
        planet: SpaceLocationID;
        starter_pack: ItemWithQualityID;
    }): LuaSpacePlatform | null;
    /**
     * Disable all recipes and technologies. Only recipes and technologies enabled explicitly will be useable from this point.
     */
    disable_all_prototypes(this: void): void;
    /**
     * Disable research for this force.
     */
    disable_research(this: void): void;
    /**
     * Enables all recipes and technologies. The opposite of {@link LuaForce::disable_all_prototypes | runtime:LuaForce::disable_all_prototypes}.
     */
    enable_all_prototypes(this: void): void;
    /**
     * Unlock all recipes.
     */
    enable_all_recipes(this: void): void;
    /**
     * Unlock all technologies.
     */
    enable_all_technologies(this: void): void;
    /**
     * Enable research for this force.
     */
    enable_research(this: void): void;
    /**
     * Finds all custom chart tags within the given bounding box on the given surface.
     */
    find_chart_tags(this: void, surface: SurfaceIdentification, area?: BoundingBox): LuaCustomChartTag[];
    /**
     * @param position Position to find a network for
     * @param surface Surface to search on
     * @returns The found network or `nil`.
     */
    find_logistic_network_by_position(this: void, position: MapPosition, surface: SurfaceIdentification): LuaLogisticNetwork | null;
    /**
     * @param ammo Ammo category
     */
    get_ammo_damage_modifier(this: void, ammo: string): double;
    /**
     * Is `other` force in this force's cease fire list?
     */
    get_cease_fire(this: void, other: ForceID): boolean;
    /**
     * The entity build statistics for this force (built and mined) for the given surface.
     */
    get_entity_build_count_statistics(this: void, surface: SurfaceIdentification): LuaFlowStatistics;
    /**
     * Count entities of given type.
     *
     * This function has O(1) time complexity as entity counts are kept and maintained in the game engine.
     * @param name Prototype name of the entity.
     * @returns Number of entities of given prototype belonging to this force.
     */
    get_entity_count(this: void, name: EntityID): uint;
    /**
     * Fetches the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    get_evolution_factor(this: void, surface?: SurfaceIdentification): double;
    /**
     * Fetches the spawner kill part of the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    get_evolution_factor_by_killing_spawners(this: void, surface?: SurfaceIdentification): double;
    /**
     * Fetches the pollution part of the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    get_evolution_factor_by_pollution(this: void, surface?: SurfaceIdentification): double;
    /**
     * Fetches the time part of the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    get_evolution_factor_by_time(this: void, surface?: SurfaceIdentification): double;
    /**
     * The fluid production statistics for this force for the given surface.
     */
    get_fluid_production_statistics(this: void, surface: SurfaceIdentification): LuaFlowStatistics;
    /**
     * Is `other` force in this force's friends list.
     */
    get_friend(this: void, other: ForceID): boolean;
    /**
     * @param ammo Ammo category
     */
    get_gun_speed_modifier(this: void, ammo: string): double;
    /**
     * Gets if the given recipe is explicitly disabled from being hand crafted.
     */
    get_hand_crafting_disabled_for_recipe(this: void, recipe: RecipeID): boolean;
    /**
     * Gets the count of a given item launched in rockets.
     * @param item The item to get
     * @returns The count of the item that has been launched.
     */
    get_item_launched(this: void, item: ItemID): uint;
    /**
     * The item production statistics for this force for the given surface.
     */
    get_item_production_statistics(this: void, surface: SurfaceIdentification): LuaFlowStatistics;
    /**
     * The kill counter statistics for this force for the given surface.
     */
    get_kill_count_statistics(this: void, surface: SurfaceIdentification): LuaFlowStatistics;
    /**
     * Gets the linked inventory for the given prototype and link ID if it exists or `nil`.
     */
    get_linked_inventory(this: void, prototype: EntityID, link_id: uint): LuaInventory | null;
    get_spawn_position(this: void, surface: SurfaceIdentification): MapPosition;
    get_surface_hidden(this: void, surface: SurfaceIdentification): boolean;
    /**
     * @param turret Turret prototype name
     */
    get_turret_attack_modifier(this: void, turret: EntityID): double;
    /**
     * Has a chunk been charted?
     * @param position Position of the chunk.
     */
    is_chunk_charted(this: void, surface: SurfaceIdentification, position: ChunkPosition): boolean;
    /**
     * Has a chunk been requested for charting?
     * @param position Position of the chunk.
     */
    is_chunk_requested_for_charting(this: void, surface: SurfaceIdentification, position: ChunkPosition): boolean;
    /**
     * Is the given chunk currently charted and visible (not covered by fog of war) on the map.
     */
    is_chunk_visible(this: void, surface: SurfaceIdentification, position: ChunkPosition): boolean;
    /**
     * Is this force an enemy? This differs from `get_cease_fire` in that it is always false for neutral force. This is equivalent to checking the `enemy` ForceCondition.
     */
    is_enemy(this: void, other: ForceID): boolean;
    /**
     * Is this force a friend? This differs from `get_friend` in that it is always true for neutral force. This is equivalent to checking the `friend` ForceCondition.
     */
    is_friend(this: void, other: ForceID): boolean;
    /**
     * Is pathfinder busy? When the pathfinder is busy, it won't accept any more pathfinding requests.
     */
    is_pathfinder_busy(this: void): boolean;
    /**
     * Is the specified quality unlocked for this force?
     * @param quality Name of the quality.
     */
    is_quality_unlocked(this: void, quality: QualityID): void;
    /**
     * Is the specified planet unlocked for this force?
     * @param name Name of the planet.
     */
    is_space_location_unlocked(this: void, name: SpaceLocationID): void;
    /**
     * Are the space platforms unlocked? This basically just controls the availability of the space platforms button.
     */
    is_space_platforms_unlocked(this: void): boolean;
    /**
     * Kill all units and flush the pathfinder.
     */
    kill_all_units(this: void): void;
    /**
     * Locks the quality to not be accessible to this force.
     * @param quality Name of the quality.
     */
    lock_quality(this: void, quality: QualityID): void;
    /**
     * Locks the planet to not be accessible to this force.
     * @param name Name of the planet.
     */
    lock_space_location(this: void, name: SpaceLocationID): void;
    /**
     * Locks the space platforms, which disables the space platforms button
     */
    lock_space_platforms(this: void): void;
    /**
     * Play a sound for every player in this force.
     *
     * The sound is not played if its location is not {@link charted | runtime:LuaForce::chart} for this force.
     * @param table.path The sound to play.
     * @param table.position Where the sound should be played. If not given, it's played at the current position of each player.
     * @param table.volume_modifier The volume of the sound to play. Must be between 0 and 1 inclusive.
     * @param table.override_sound_type The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     */
    play_sound(this: void, table: {
        path: SoundPath;
        position?: MapPosition;
        volume_modifier?: double;
        override_sound_type?: SoundType;
    }): void;
    /**
     * Print text to the chat console of all players on this force.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(this: void, message: LocalisedString, print_settings?: PrintSettings): void;
    /**
     * Force a rechart of the whole chart.
     * @param surface Which surface to rechart or all if not given.
     */
    rechart(this: void, surface?: SurfaceIdentification): void;
    /**
     * Research all technologies.
     * @param include_disabled_prototypes Whether technologies that are explicitly disabled in the prototype should also be researched. Defaults to `false`.
     */
    research_all_technologies(this: void, include_disabled_prototypes?: boolean): void;
    /**
     * Reset everything. All technologies are set to not researched, all modifiers are set to default values.
     */
    reset(this: void): void;
    /**
     * Resets evolution for this force to zero.
     */
    reset_evolution(this: void): void;
    /**
     * Load the original version of all recipes from the prototypes.
     */
    reset_recipes(this: void): void;
    /**
     * Load the original versions of technologies from prototypes. Preserves research state of technologies.
     */
    reset_technologies(this: void): void;
    /**
     * Reapplies all possible research effects, including unlocked recipes. Any custom changes are lost. Preserves research state of technologies.
     */
    reset_technology_effects(this: void): void;
    /**
     * @param ammo Ammo category
     */
    set_ammo_damage_modifier(this: void, ammo: string, modifier: double): void;
    /**
     * Add `other` force to this force's cease fire list. Forces on the cease fire list won't be targeted for attack.
     */
    set_cease_fire(this: void, other: ForceID, cease_fire: boolean): void;
    /**
     * Sets the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    set_evolution_factor(this: void, factor: double, surface?: SurfaceIdentification): void;
    /**
     * Sets the spawner kill part of the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    set_evolution_factor_by_killing_spawners(this: void, factor: double, surface?: SurfaceIdentification): void;
    /**
     * Sets the pollution part of the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    set_evolution_factor_by_pollution(this: void, factor: double, surface?: SurfaceIdentification): void;
    /**
     * Sets the time part of the evolution factor of this force on the given surface.
     * @param surface Defaults to "nauvis".
     */
    set_evolution_factor_by_time(this: void, factor: double, surface?: SurfaceIdentification): void;
    /**
     * Add `other` force to this force's friends list. Friends have unrestricted access to buildings and turrets won't fire at them.
     */
    set_friend(this: void, other: ForceID, friend: boolean): void;
    /**
     * @param ammo Ammo category
     */
    set_gun_speed_modifier(this: void, ammo: string, modifier: double): void;
    /**
     * Sets if the given recipe can be hand-crafted. This is used to explicitly disable hand crafting a recipe - it won't allow hand-crafting otherwise not hand-craftable recipes.
     */
    set_hand_crafting_disabled_for_recipe(this: void, recipe: RecipeID, hand_crafting_disabled: boolean): void;
    /**
     * Sets the count of a given item launched in rockets.
     * @param item The item to set
     * @param count The count to set
     */
    set_item_launched(this: void, item: ItemID, count: uint): void;
    /**
     * @param position The new position on the given surface.
     * @param surface Surface to set the spawn position for.
     */
    set_spawn_position(this: void, position: MapPosition, surface: SurfaceIdentification): void;
    /**
     * @param surface Surface to set hidden for.
     * @param hidden Whether to hide the surface or not.
     */
    set_surface_hidden(this: void, surface: SurfaceIdentification, hidden: boolean): void;
    /**
     * @param turret Turret prototype name
     */
    set_turret_attack_modifier(this: void, turret: EntityID, modifier: double): void;
    /**
     * @param position The chunk position to unchart.
     * @param surface Surface to unchart on.
     */
    unchart_chunk(this: void, position: ChunkPosition, surface: SurfaceIdentification): void;
    /**
     * Unlocks the quality to be accessible to this force.
     * @param quality Name of the quality.
     */
    unlock_quality(this: void, quality: QualityID): void;
    /**
     * Unlocks the planet to be accessible to this force.
     * @param name Name of the planet.
     */
    unlock_space_location(this: void, name: SpaceLocationID): void;
    /**
     * Unlocks the space platforms, which enables the space platforms button
     */
    unlock_space_platforms(this: void): void;
    /**
     * Enables some higher-level AI behaviour for this force. When set to `true`, biters belonging to this force will automatically expand into new territories, build new spawners, and form unit groups. By default, this value is `true` for the enemy force and `false` for all others.
     *
     * Setting this to `false` does not turn off biters' AI. They will still move around and attack players who come close.
     *
     * It is necessary for a force to be AI controllable in order to be able to create unit groups or build bases from scripts.
     */
    ai_controllable: boolean;
    artillery_range_modifier: double;
    beacon_distribution_modifier: double;
    /**
     * Belt stack size bonus.
     */
    belt_stack_size_bonus: uint;
    /**
     * Number of items that can be transferred by bulk inserters. When writing to this value, it must be >= 0 and <= 254.
     */
    bulk_inserter_capacity_bonus: uint;
    character_build_distance_bonus: uint;
    character_health_bonus: double;
    /**
     * The number of additional inventory slots the character main inventory has.
     */
    character_inventory_slots_bonus: uint;
    character_item_drop_distance_bonus: uint;
    character_item_pickup_distance_bonus: double;
    /**
     * `true` if character requester logistics is enabled.
     */
    character_logistic_requests: boolean;
    character_loot_pickup_distance_bonus: double;
    character_reach_distance_bonus: uint;
    character_resource_reach_distance_bonus: double;
    /**
     * Modifies the running speed of all characters in this force by the given value as a percentage. Setting the running modifier to `0.5` makes the character run 50% faster. The minimum value of `-1` reduces the movement speed by 100%, resulting in a speed of `0`.
     */
    character_running_speed_modifier: double;
    /**
     * Number of character trash slots.
     */
    character_trash_slot_count: double;
    /**
     * Effective color of this force.
     */
    readonly color: Color;
    /**
     * The connected players belonging to this force.
     *
     * This is primarily useful when you want to do some action against all online players of this force.
     *
     * This does *not* index using player index. See {@link LuaPlayer::index | runtime:LuaPlayer::index} on each player instance for the player index.
     */
    readonly connected_players: LuaPlayer[];
    /**
     * When an entity dies, a ghost will be placed for automatic reconstruction.
     */
    create_ghost_on_entity_death: boolean;
    /**
     * The currently ongoing technology research, if any.
     */
    readonly current_research?: LuaTechnology;
    /**
     * Custom color for this force. If specified, will take priority over other sources of the force color. Writing `nil` clears custom color. Will return `nil` if it was not specified or if was set to `{0,0,0,0}`.
     */
    custom_color?: Color;
    /**
     * The time, in ticks, before a deconstruction order is removed.
     */
    deconstruction_time_to_live: uint;
    /**
     * Additional lifetime for following robots.
     */
    following_robots_lifetime_modifier: double;
    /**
     * If friendly fire is enabled for this force.
     */
    friendly_fire: boolean;
    /**
     * This force's index in {@link LuaGameScript::forces | runtime:LuaGameScript::forces} (unique ID). It is assigned when a force is created, and remains so until it is {@link merged | runtime:on_forces_merged} (ie. deleted). Indexes of merged forces can be reused.
     */
    readonly index: uint;
    /**
     * The inserter stack size bonus for non stack inserters
     */
    inserter_stack_size_bonus: double;
    /**
     * All of the items that have been launched in rockets.
     */
    readonly items_launched: ItemCountWithQuality[];
    laboratory_productivity_bonus: double;
    laboratory_speed_modifier: double;
    /**
     * List of logistic networks, grouped by surface.
     */
    readonly logistic_networks: Record<string, LuaLogisticNetwork[]>;
    /**
     * Multiplier of the manual crafting speed. Default value is `0`. The actual crafting speed will be multiplied by `1 + manual_crafting_speed_modifier`.
     * @example ```
    -- Double the player's crafting speed
    game.player.force.manual_crafting_speed_modifier = 1
    ```
     */
    manual_crafting_speed_modifier: double;
    /**
     * Multiplier of the manual mining speed. Default value is `0`. The actual mining speed will be multiplied by `1 + manual_mining_speed_modifier`.
     * @example ```
    -- Double the player's mining speed
    game.player.force.manual_mining_speed_modifier = 1
    ```
     */
    manual_mining_speed_modifier: double;
    max_failed_attempts_per_tick_per_construction_queue: uint;
    max_successful_attempts_per_tick_per_construction_queue: uint;
    /**
     * Maximum number of follower robots.
     */
    maximum_following_robot_count: uint;
    mining_drill_productivity_bonus: double;
    /**
     * Name of the force.
     * @example ```
    game.player.print(game.player.force.name) -- => "player"
    ```
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The space platforms that belong to this force mapped by their index value.
     *
     * This will include platforms that are pending deletion.
     */
    readonly platforms: Record<uint, LuaSpacePlatform>;
    /**
     * Players belonging to this force.
     */
    readonly players: LuaPlayer[];
    /**
     * The previous research, if any.
     */
    previous_research?: LuaTechnology;
    /**
     * Recipes available to this force, indexed by `name`.
     * @example ```
    -- Prints the category of the given recipe
    game.player.print(game.player.force.recipes["transport-belt"].category)
    ```
     */
    readonly recipes: Record<string, LuaRecipe>;
    /**
     * Whether research is enabled for this force, see {@link LuaForce::enable_research | runtime:LuaForce::enable_research} and {@link LuaForce::disable_research | runtime:LuaForce::disable_research}.
     */
    readonly research_enabled: boolean;
    /**
     * Progress of current research, as a number in range `[0, 1]`.
     */
    research_progress: double;
    /**
     * The research queue of this force. The first technology in the array is the currently active one. Reading this attribute gives an array of {@link LuaTechnology | runtime:LuaTechnology}.
     *
     * To write to this, the entire table must be written. Providing an empty table or `nil` will empty the research queue and cancel the current research.  Writing to this when the research queue is disabled will simply set the last research in the table as the current research.
     *
     * This only allows mods to queue research that this force is able to research in the first place. As an example, an already researched technology or one whose prerequisites are not fulfilled will not be queued, but dropped silently instead.
     */
    research_queue: TechnologyID[];
    /**
     * The number of rockets launched.
     */
    rockets_launched: uint;
    /**
     * If sharing chart data is enabled for this force.
     */
    share_chart: boolean;
    /**
     * Technologies owned by this force, indexed by `name`.
     * @example ```
    -- Researches the technology for the player's force
    game.player.force.technologies["steel-processing"].researched = true
    ```
     */
    readonly technologies: Record<string, LuaTechnology>;
    train_braking_force_bonus: double;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    worker_robots_battery_modifier: double;
    worker_robots_speed_modifier: double;
    worker_robots_storage_bonus: double;
}
/**
 * Prototype of a fuel category.
 */
interface LuaFuelCategoryPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Main toplevel type, provides access to most of the API though its members. An instance of LuaGameScript is available as the global object named `game`.
 */
interface LuaGameScript {
    /**
     * Instruct the game to perform an auto-save.
     *
     * Only the server will save in multiplayer. In single player a standard auto-save is triggered.
     * @param name The autosave name if any. Saves will be named _autosave-*name* when provided.
     */
    auto_save(this: void, name?: string): void;
    /**
     * Bans the given player from this multiplayer game. Does nothing if this is a single player game of if the player running this isn't an admin.
     * @param player The player to ban.
     * @param reason The reason given if any.
     */
    ban_player(this: void, player: PlayerIdentification | string, reason?: string): void;
    /**
     * Run internal consistency checks. Allegedly prints any errors it finds.
     *
     * Exists mainly for debugging reasons.
     */
    check_consistency(this: void): void;
    /**
     * Create a new force.
     *
     * The game currently supports a maximum of 64 forces, including the three built-in forces. This means that a maximum of 61 new forces may be created. Force names must be unique.
     * @param force Name of the new force
     * @returns The force that was just created
     */
    create_force(this: void, force: string): LuaForce;
    /**
     * Creates an inventory that is not owned by any game object.
     *
     * It can be resized later with {@link LuaInventory::resize | runtime:LuaInventory::resize}.
     *
     * Make sure to destroy it when you are done with it using {@link LuaInventory::destroy | runtime:LuaInventory::destroy}.
     * @param size The number of slots the inventory initially has.
     * @param gui_title The title of the GUI that is shown when this inventory is opened.
     */
    create_inventory(this: void, size: uint16, gui_title?: LocalisedString): LuaInventory;
    /**
     * Creates a {@link LuaProfiler | runtime:LuaProfiler}, which is used for measuring script performance.
     *
     * LuaProfiler cannot be serialized.
     * @param stopped Create the timer stopped
     */
    create_profiler(this: void, stopped?: boolean): LuaProfiler;
    /**
     * Creates a deterministic standalone random generator with the given seed or if a seed is not provided the initial map seed is used.
     *
     * *Make sure* you actually want to use this over math.random(...) as this provides entirely different functionality over math.random(...).
     */
    create_random_generator(this: void, seed?: uint): LuaRandomGenerator;
    /**
     * Create a new surface.
     *
     * The game currently supports a maximum of 4 294 967 295 surfaces, including the default surface. Surface names must be unique.
     * @param name Name of the new surface.
     * @param settings Map generation settings.
     * @returns The surface that was just created.
     */
    create_surface(this: void, name: string, settings?: MapGenSettings): LuaSurface;
    /**
     * Deletes the given surface and all entities on it if possible.
     * @param surface The surface to be deleted. Currently the primary surface (1, 'nauvis') cannot be deleted.
     * @returns If the surface was queued to be deleted.
     */
    delete_surface(this: void, surface: SurfaceIdentification): boolean;
    /**
     * Disables replay saving for the current save file. Once done there's no way to re-enable replay saving for the save file without loading an old save.
     */
    disable_replay(this: void): void;
    /**
     * Force a CRC check. Tells all peers to calculate their current CRC, which are then compared to each other. If a mismatch is detected, the game desyncs and some peers are forced to reconnect.
     */
    force_crc(this: void): void;
    /**
     * Gets an entity by its {@link name tag | runtime:LuaEntity::name_tag}. Entity name tags can also be set in the entity "extra settings" GUI in the map editor.
     */
    get_entity_by_tag(this: void, tag: string): LuaEntity | null;
    /**
     * Returns entity with a specified unit number or nil if entity with such number was not found or prototype does not have {@link EntityPrototypeFlags::get-by-unit-number | prototype:EntityPrototypeFlags::get_by_unit_number} flag set.
     */
    get_entity_by_unit_number(this: void, unit_number: uint): LuaEntity | null;
    /**
     * Gets the map exchange string for the map generation settings that were used to create this map.
     */
    get_map_exchange_string(this: void): string;
    /**
     * Gets the given player or returns `nil` if no player is found.
     * @param player The player index or name.
     */
    get_player(this: void, player: uint | string): LuaPlayer | null;
    /**
     * The pollution statistics for this the given surface.
     */
    get_pollution_statistics(this: void, surface: SurfaceIdentification): LuaFlowStatistics;
    /**
     * Gets the inventories created through {@link LuaGameScript::create_inventory | runtime:LuaGameScript::create_inventory}.
     *
     * Inventories created through console commands will be owned by `"core"`.
     * @param mod The mod whose inventories to get. If not provided all inventories are returned.
     * @returns A mapping of mod name to array of inventories owned by that mod.
     */
    get_script_inventories(this: void, mod?: string): Record<string, LuaInventory[]>;
    /**
     * Gets the given surface or returns `nil` if no surface is found.
     *
     * This is a shortcut for {@link LuaGameScript::surfaces | runtime:LuaGameScript::surfaces}.
     * @param surface The surface index or name.
     */
    get_surface(this: void, surface: uint | string): LuaSurface | null;
    /**
     * Returns vehicles in game
     * @param table.surface )
     */
    get_vehicles(this: void, table: {
        unit_number?: uint;
        force?: ForceID;
        surface?: SurfaceIdentification;
        type?: EntityID | EntityID[];
        is_moving?: boolean;
        has_passenger?: boolean;
    }): LuaEntity[];
    /**
     * Is this the demo version of Factorio?
     */
    is_demo(this: void): boolean;
    /**
     * Whether the save is loaded as a multiplayer map.
     */
    is_multiplayer(this: void): boolean;
    /**
     * Kicks the given player from this multiplayer game. Does nothing if this is a single player game or if the player running this isn't an admin.
     * @param player The player to kick.
     * @param reason The reason given if any.
     */
    kick_player(this: void, player: PlayerIdentification, reason?: string): void;
    /**
     * Marks two forces to be merged together. All players and entities in the source force will be reassigned to the target force. The source force will then be destroyed. Importantly, this does not merge technologies or bonuses, which are instead retained from the target force.
     *
     * The three built-in forces (player, enemy and neutral) can't be destroyed, meaning they can't be used as the source argument to this function.
     *
     * The source force is not removed until the end of the current tick, or if called during the {@link on_forces_merging | runtime:on_forces_merging} or {@link on_forces_merged | runtime:on_forces_merged} event, the end of the next tick.
     * @param source The force to remove.
     * @param destination The force to reassign all entities to.
     */
    merge_forces(this: void, source: ForceID, destination: ForceID): void;
    /**
     * Mutes the given player. Does nothing if the player running this isn't an admin.
     * @param player The player to mute.
     */
    mute_player(this: void, player: PlayerIdentification): void;
    /**
     * Play a sound for every player in the game.
     *
     * The sound is not played if its location is not {@link charted | runtime:LuaForce::chart} for that player.
     * @param table.path The sound to play.
     * @param table.position Where the sound should be played. If not given, it's played at the current position of each player.
     * @param table.volume_modifier The volume of the sound to play. Must be between 0 and 1 inclusive.
     * @param table.override_sound_type The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     */
    play_sound(this: void, table: {
        path: SoundPath;
        position?: MapPosition;
        volume_modifier?: double;
        override_sound_type?: SoundType;
    }): void;
    /**
     * Print text to the chat console all players.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(this: void, message: LocalisedString, print_settings?: PrintSettings): void;
    /**
     * Purges the given players messages from the game. Does nothing if the player running this isn't an admin.
     * @param player The player to purge.
     */
    purge_player(this: void, player: PlayerIdentification): void;
    /**
     * Regenerate autoplacement of some entities on all surfaces. This can be used to autoplace newly-added entities.
     *
     * All specified entity prototypes must be autoplacable.
     * @param entities Prototype names of entity or entities to autoplace.
     */
    regenerate_entity(this: void, entities: string | string[]): void;
    /**
     * Forces a reload of all mods.
     *
     * This will act like saving and loading from the mod(s) perspective.
     *
     * This will do nothing if run in multiplayer.
     *
     * This disables the replay if replay is enabled.
     */
    reload_mods(this: void): void;
    /**
     * Forces a reload of the scenario script from the original scenario location.
     *
     * This disables the replay if replay is enabled.
     */
    reload_script(this: void): void;
    /**
     * Remove players who are currently not connected from the map.
     * @param players List of players to remove. If not specified, remove all offline players.
     */
    remove_offline_players(this: void, players?: PlayerIdentification[]): void;
    /**
     * Reset scenario state (game_finished, player_won, etc.).
     */
    reset_game_state(this: void): void;
    /**
     * Resets the amount of time played for this map.
     */
    reset_time_played(this: void): void;
    /**
     * Saves the current configuration of Atlas to a file. This will result in huge file containing all of the game graphics moved to as small space as possible.
     *
     * Exists mainly for debugging reasons.
     */
    save_atlas(this: void): void;
    /**
     * Instruct the server to save the map. Only actually saves when in multiplayer.
     * @param name Save file name. If not specified, the currently running save is overwritten. If there is no current save, no save is made.
     */
    server_save(this: void, name?: string): void;
    /**
     * Set scenario state. Any parameters not provided do not change the current state.
     */
    set_game_state(this: void, table: {
        game_finished?: boolean;
        player_won?: boolean;
        next_level?: string;
        can_continue?: boolean;
    }): void;
    /**
     * Set losing ending information for the current scenario.
     */
    set_lose_ending_info(this: void, table: {
        title: LocalisedString;
        message?: LocalisedString;
        bullet_points?: LocalisedString[];
        final_message?: LocalisedString;
        image_path?: string;
    }): void;
    /**
     * Forces the screenshot saving system to wait until all queued screenshots have been written to disk.
     */
    set_wait_for_screenshots_to_finish(this: void): void;
    /**
     * Set winning ending information for the current scenario.
     */
    set_win_ending_info(this: void, table: {
        title: LocalisedString;
        message?: LocalisedString;
        bullet_points?: LocalisedString[];
        final_message?: LocalisedString;
        image_path?: string;
    }): void;
    /**
     * Show an in-game message dialog.
     *
     * Can only be used when the map contains exactly one player.
     * @param table.text What the dialog should say
     * @param table.image Path to an image to show on the dialog
     * @param table.point_to If specified, dialog will show an arrow pointing to this place. When not specified, the arrow will point to the player's position. (Use `point_to={type="nowhere"}` to remove the arrow entirely.) The dialog itself will be placed near the arrow's target.
     * @param table.style The gui style to use for this speech bubble. Must be of type speech_bubble.
     * @param table.wrapper_frame_style Must be of type flow_style.
     */
    show_message_dialog(this: void, table: {
        text: LocalisedString;
        image?: string;
        point_to?: GuiArrowSpecification;
        style?: string;
        wrapper_frame_style?: string;
    }): void;
    /**
     * Take a screenshot of the game and save it to the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. The name of the image file can be specified via the `path` parameter.
     *
     * If Factorio is running headless, this function will do nothing.
     * @param table.player The player to focus on. Defaults to the local player.
     * @param table.by_player If defined, the screenshot will only be taken for this player.
     * @param table.surface If defined, the screenshot will be taken on this surface.
     * @param table.position If defined, the screenshot will be centered on this position. Otherwise, the screenshot will center on `player`.
     * @param table.resolution The maximum allowed resolution is 16384x16384 (8192x8192 when `anti_alias` is `true`), but the maximum recommended resolution is 4096x4096 (resp. 2048x2048). The `x` value of the position is used as the width, the `y` value as the height.
     * @param table.zoom The map zoom to take the screenshot at. Defaults to `1`.
     * @param table.path The name of the image file. It should include a file extension indicating the desired format. Supports `.png`, `.jpg` /`.jpeg`, `.tga` and `.bmp`. Providing a directory path (ex. `"save/here/screenshot.png"`) will create the necessary folder structure in `script-output`. Defaults to `"screenshot.png"`.
     * @param table.show_gui Whether to include GUIs in the screenshot or not. Defaults to `false`.
     * @param table.show_entity_info Whether to include entity info ("Alt mode") or not. Defaults to `false`.
     * @param table.show_cursor_building_preview When `true` and when `player` is specified, the building preview for the item in the player's cursor will also be rendered. Defaults to `false`.
     * @param table.anti_alias Whether to render in double resolution and downscale the result (including GUI). Defaults to `false`.
     * @param table.hide_clouds If `true` cloud shadows on ground won't be rendered. Defaults to `false`.
     * @param table.hide_fog If `true` fog effect and foreground space dust effect won't be rendered. Defaults to `false`.
     * @param table.quality The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more compressed image. Defaults to `80`.
     * @param table.allow_in_replay Whether to save the screenshot even during replay playback. Defaults to `false`.
     * @param table.daytime Overrides the current surface daytime for the duration of screenshot rendering.
     * @param table.water_tick Overrides the tick of water animation, if animated water is enabled.
     * @param table.force_render Screenshot requests are processed in between game update and render. The game may skip rendering (ie. drop frames) if the previous frame has not finished rendering or the game simulation starts to fall below 60 updates per second. If `force_render` is set to `true`, the game won't drop frames and process the screenshot request at the end of the update in which the request was created. This is not honored on multiplayer clients that are catching up to server. Defaults to `false`.
     */
    take_screenshot(this: void, table: {
        player?: PlayerIdentification;
        by_player?: PlayerIdentification;
        surface?: SurfaceIdentification;
        position?: MapPosition;
        resolution?: TilePosition;
        zoom?: double;
        path?: string;
        show_gui?: boolean;
        show_entity_info?: boolean;
        show_cursor_building_preview?: boolean;
        anti_alias?: boolean;
        hide_clouds?: boolean;
        hide_fog?: boolean;
        quality?: int;
        allow_in_replay?: boolean;
        daytime?: double;
        water_tick?: uint;
        force_render?: boolean;
    }): void;
    /**
     * Take a screenshot of the technology screen and save it to the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. The name of the image file can be specified via the `path` parameter.
     * @param table.path The name of the image file. It should include a file extension indicating the desired format. Supports `.png`, `.jpg` /`.jpeg`, `.tga` and `.bmp`. Providing a directory path (ex. `"save/here/screenshot.png"`) will create the necessary folder structure in `script-output`. Defaults to `"technology-screenshot.png"`.
     * @param table.player The screenshot will be taken for this player.
     * @param table.selected_technology The technology to highlight.
     * @param table.skip_disabled If `true`, disabled technologies will be skipped. Their successors will be attached to the disabled technology's parents. Defaults to `false`.
     * @param table.quality The `.jpg` render quality as a percentage (from 0% to 100% inclusive), if used. A lower value means a more compressed image. Defaults to `80`.
     */
    take_technology_screenshot(this: void, table: {
        path?: string;
        player: PlayerIdentification;
        selected_technology?: TechnologyID;
        skip_disabled?: boolean;
        quality?: int;
    }): void;
    /**
     * Unbans the given player from this multiplayer game. Does nothing if this is a single player game of if the player running this isn't an admin.
     * @param player The player to unban.
     */
    unban_player(this: void, player: PlayerIdentification | string): void;
    /**
     * Unmutes the given player. Does nothing if the player running this isn't an admin.
     * @param player The player to unmute.
     */
    unmute_player(this: void, player: PlayerIdentification): void;
    /**
     * If the tips are allowed to be activated in this scenario, it is false by default.
     *
     * Can't be modified in a simulation (menu screen, tips and tricks simulation, factoriopedia simulation etc.)
     */
    allow_tip_activation: boolean;
    /**
     * True by default. Can be used to disable autosaving. Make sure to turn it back on soon after.
     */
    autosave_enabled: boolean;
    /**
     * Array of the names of all the backers that supported the game development early on. These are used as names for labs, locomotives, radars, roboports, and train stops.
     */
    readonly backer_names: Record<uint, string>;
    /**
     * Records contained in the "game blueprints" tab of the blueprint library.
     */
    readonly blueprints: LuaRecord[];
    /**
     * The players that are currently online.
     *
     * This does *not* index using player index. See {@link LuaPlayer::index | runtime:LuaPlayer::index} on each player instance for the player index. This is primarily useful when you want to do some action against all online players.
     */
    readonly connected_players: LuaPlayer[];
    /**
     * Whether a console command has been used.
     */
    readonly console_command_used: boolean;
    /**
     * The default map gen settings for this save.
     */
    readonly default_map_gen_settings: MapGenSettings;
    /**
     * Current scenario difficulty.
     */
    readonly difficulty: defines.difficulty;
    /**
     * The currently active set of difficulty settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game.
     * @example ```
    -- This will set the technology price multiplier to 12.
    game.difficulty_settings.technology_price_multiplier = 12
    ```
     */
    readonly difficulty_settings: DifficultySettings;
    /**
     * True by default. Can be used to disable the highlighting of resource patches when they are hovered on the map.
     */
    draw_resource_selection: boolean;
    /**
     * Determines if enemy land mines are completely invisible or not.
     */
    enemy_has_vision_on_land_mines: boolean;
    /**
     * True while the victory screen is shown.
     */
    readonly finished: boolean;
    /**
     * True after players finished the game and clicked "continue".
     */
    readonly finished_but_continuing: boolean;
    /**
     * Get a table of all the forces that currently exist. This sparse table allows you to find forces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will provide the `name`s as the keys. Iterating with `ipairs()` will not work at all.
     */
    readonly forces: Record<uint | string, LuaForce>;
    /**
     * The currently active set of map settings. Even though this property is marked as read-only, the members of the dictionary that is returned can be modified mid-game.
     *
     * This does not contain difficulty settings, use {@link LuaGameScript::difficulty_settings | runtime:LuaGameScript::difficulty_settings} instead.
     */
    readonly map_settings: MapSettings;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly permissions: LuaPermissionGroups;
    readonly planets: Record<string, LuaPlanet>;
    /**
     * This property is only populated inside {@link custom command | runtime:LuaCommandProcessor} handlers and when writing {@link Lua console commands | https://wiki.factorio.com/Console#Scripting_and_cheat_commands}. Returns the player that is typing the command, `nil` in all other instances.
     *
     * See {@link LuaGameScript::players | runtime:LuaGameScript::players} for accessing all players.
     */
    readonly player?: LuaPlayer;
    /**
     * Get a table of all the players that currently exist. This sparse table allows you to find players by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will provide the `index`es as the keys. Iterating with `ipairs()` will not work at all.
     *
     * If only a single player is required, {@link LuaGameScript::get_player | runtime:LuaGameScript::get_player} should be used instead, as it avoids the unnecessary overhead of passing the whole table to Lua.
     */
    readonly players: Record<uint | string, LuaPlayer>;
    /**
     * Simulation-related functions, or `nil` if the current game is not a simulation.
     */
    readonly simulation: LuaSimulation;
    /**
     * Speed to update the map at. 1.0 is normal speed -- 60 UPS. Minimum value is 0.01.
     */
    speed: float;
    /**
     * Get a table of all the surfaces that currently exist. This sparse table allows you to find surfaces by indexing it with either their `name` or `index`. Iterating this table with `pairs()` will provide the `name`s as the keys. Iterating with `ipairs()` will not work at all.
     */
    readonly surfaces: Record<uint | string, LuaSurface>;
    /**
     * True by default. Can be used to prevent the game engine from printing certain messages.
     * Prevented messages:
     *
     * - "player-started-research"
     * - "player-queued-research"
     * - "player-cancelled-research"
     * - "technology-researched"
     */
    technology_notifications_enabled: boolean;
    /**
     * Current map tick.
     */
    readonly tick: uint;
    /**
     * If the tick has been paused. This means that entity update has been paused.
     */
    tick_paused: boolean;
    /**
     * The number of ticks since this game was created using either "new game" or "new game from scenario". Notably, this number progresses even when the game is {@link tick_paused | runtime:LuaGameScript::tick_paused}.
     *
     * This differs from {@link LuaGameScript::tick | runtime:LuaGameScript::tick} in that creating a game from a scenario always starts with this value at `0`, even if the scenario has its own level data where the `tick` has progressed past `0`.
     */
    readonly ticks_played: uint;
    /**
     * The number of ticks to be run while the tick is paused.
     *
     * When {@link LuaGameScript::tick_paused | runtime:LuaGameScript::tick_paused} is true, ticks_to_run behaves the following way: While this is > 0, the entity update is running normally and this value is decremented every tick. When this reaches 0, the game will pause again.
     */
    ticks_to_run: uint;
    readonly train_manager: LuaTrainManager;
}
/**
 * An abstract base class for behaviors that support switching the entity on or off based on some condition.
 */
interface LuaGenericOnOffControlBehavior extends LuaControlBehavior {
    /**
     * The circuit condition. Writing `nil` clears the circuit condition.
     * @example ```
    -- Tell an entity to be active (for example a lamp to be lit) when it receives a
    -- circuit signal of more than 4 chain signals.
    a_behavior.circuit_condition = {condition={
      comparator=">",
      first_signal={type="item", name="rail-chain-signal"},
      constant=4}
    }
    ```
     */
    circuit_condition: CircuitConditionDefinition;
    /**
     * `true` if this entity enable/disable state is controlled by circuit condition
     */
    circuit_enable_disable: boolean;
    /**
     * `true` if this should connect to the logistic network.
     */
    readonly connect_to_logistic_network: boolean;
    /**
     * If the entity is currently disabled because of the control behavior.
     */
    readonly disabled: boolean;
    /**
     * The logistic condition. Writing `nil` clears the logistic condition.
     * @example ```
    -- Tell an entity to be active (for example a lamp to be lit) when the logistics
    -- network it's connected to has more than four chain signals.
    a_behavior.logistic_condition = {condition={
      comparator=">",
      first_signal={type="item", name="rail-chain-signal"},
      constant=4}
    }
    ```
     */
    readonly logistic_condition: CircuitConditionDefinition;
}
/**
 * Item group or subgroup.
 */
interface LuaGroup {
    /**
     * The parent group.
     */
    readonly group: LuaGroup;
    /**
     * Localised name of the group.
     */
    readonly localised_name: LocalisedString;
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string;
    /**
     * The additional order value used in recipe ordering.
     */
    readonly order_in_recipe: string;
    /**
     * Subgroups of this group.
     */
    readonly subgroups: LuaGroup[];
    readonly type: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * The root of the GUI. This type houses the root elements, `top`, `left`, `center`,  `goal`, and `screen`, to which other elements can be added to be displayed on screen.
 *
 * Every player can have a different GUI state.
 */
interface LuaGui {
    /**
     * The center part of the GUI. It is a flow element.
     */
    readonly center: LuaGuiElement;
    /**
     * The children GUI elements mapped by name <> element.
     */
    readonly children: Record<string, LuaGuiElement>;
    /**
     * The flow used in the objectives window. It is a flow element. The objectives window is only visible when the flow is not empty or the objective text is set.
     */
    readonly goal: LuaGuiElement;
    /**
     * The left part of the GUI. It is a flow element inside a scroll pane element.
     */
    readonly left: LuaGuiElement;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The player who owns this gui.
     */
    readonly player: LuaPlayer;
    /**
     * For showing a GUI somewhere relative to one of the game GUIs. It is an empty-widget element.
     */
    readonly relative: LuaGuiElement;
    /**
     * For showing a GUI somewhere on the entire screen. It is an empty-widget element.
     */
    readonly screen: LuaGuiElement;
    /**
     * The top part of the GUI. It is a flow element inside a scroll pane element.
     */
    readonly top: LuaGuiElement;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * An element of a custom GUI. This type is used to represent {@link any kind | runtime:GuiElementType} of a GUI element - labels, buttons and frames are all instances of this type. Just like {@link LuaEntity | runtime:LuaEntity}, different kinds of elements support different attributes; attempting to access an attribute on an element that doesn't support it (for instance, trying to access the `column_count` of a `textfield`) will result in a runtime error.
 *
 * For information on all supported GUI elements, see {@link GuiElementType | runtime:GuiElementType}.
 *
 * Each GUI element allows access to its children by having them as attributes. Thus, one can use the `parent.child` syntax to refer to children. Lua also supports the `parent["child"]` syntax to refer to the same element. This can be used in cases where the child has a name that isn't a valid Lua identifier.
 * @example ```
-- This will add a label called "greeting" to the top flow.
-- Immediately after, it will change its text to illustrate accessing child elements.
game.player.gui.top.add{type="label", name="greeting", caption="Hi"}
game.player.gui.top.greeting.caption = "Hello there!"
game.player.gui.top["greeting"].caption = "Actually, never mind, I don't like your face"
```
 * @example ```
-- This will add a tabbed-pane and 2 tabs with contents.
local tabbed_pane = game.player.gui.top.add{type="tabbed-pane"}
local tab1 = tabbed_pane.add{type="tab", caption="Tab 1"}
local tab2 = tabbed_pane.add{type="tab", caption="Tab 2"}
local label1 = tabbed_pane.add{type="label", caption="Label 1"}
local label2 = tabbed_pane.add{type="label", caption="Label 2"}
tabbed_pane.add_tab(tab1, label1)
tabbed_pane.add_tab(tab2, label2)
```
 */
interface LuaGuiElement {
    /**
     * Add a new child element to this GuiElement.
     * @returns The GUI element that was added.
     */
    add(this: void, table: LuaGuiElementAddParams): LuaGuiElement;
    /**
     * Inserts a string at the end or at the given index of this dropdown or listbox.
     * @param string The text to insert.
     * @param index The index at which to insert the item.
     */
    add_item(this: void, string: LocalisedString, index?: uint): void;
    /**
     * Adds the given tab and content widgets to this tabbed pane as a new tab.
     * @param tab The tab to add, must be a GUI element of type "tab".
     * @param content The content to show when this tab is selected. Can be any type of GUI element.
     */
    add_tab(this: void, tab: LuaGuiElement, content: LuaGuiElement): void;
    /**
     * Moves this GUI element to the "front" so it will draw over other elements.
     *
     * Only works for elements in {@link LuaGui::screen | runtime:LuaGui::screen}.
     */
    bring_to_front(this: void): void;
    /**
     * Remove children of this element. Any {@link LuaGuiElement | runtime:LuaGuiElement} objects referring to the destroyed elements become invalid after this operation.
     * @example ```
    game.player.gui.top.clear()
    ```
     */
    clear(this: void): void;
    /**
     * Removes the items in this dropdown or listbox.
     */
    clear_items(this: void): void;
    /**
     * Closes the dropdown list if this is a dropdown and it is open.
     */
    close_dropdown(this: void): void;
    /**
     * Remove this element, along with its children. Any {@link LuaGuiElement | runtime:LuaGuiElement} objects referring to the destroyed elements become invalid after this operation.
     *
     * The top-level GUI elements - {@link LuaGui::top | runtime:LuaGui::top}, {@link LuaGui::left | runtime:LuaGui::left}, {@link LuaGui::center | runtime:LuaGui::center} and {@link LuaGui::screen | runtime:LuaGui::screen} - can't be destroyed.
     * @example ```
    game.player.gui.top.greeting.destroy()
    ```
     */
    destroy(this: void): void;
    /**
     * Focuses this GUI element if possible.
     */
    focus(this: void): void;
    /**
     * Forces this frame to re-auto-center. Only works on frames stored directly in {@link LuaGui::screen | runtime:LuaGui::screen}.
     */
    force_auto_center(this: void): void;
    /**
     * Gets the index that this element has in its parent element.
     *
     * This iterates through the children of the parent of this element, meaning this has a non-free cost to get, but is faster than doing the equivalent in Lua.
     */
    get_index_in_parent(this: void): uint;
    /**
     * Gets the item at the given index from this dropdown or listbox.
     * @param index The index to get
     */
    get_item(this: void, index: uint): LocalisedString;
    /**
     * The mod that owns this Gui element or `nil` if it's owned by the scenario script.
     *
     * This has a not-super-expensive, but non-free cost to get.
     */
    get_mod(this: void): string | null;
    /**
     * Returns whether this slider only allows discrete values.
     */
    get_slider_discrete_values(this: void): boolean;
    /**
     * Gets this sliders maximum value.
     */
    get_slider_maximum(this: void): double;
    /**
     * Gets this sliders minimum value.
     */
    get_slider_minimum(this: void): double;
    /**
     * Gets the minimum distance this slider can move.
     */
    get_slider_value_step(this: void): double;
    /**
     * Removes the item at the given index from this dropdown or listbox.
     * @param index The index
     */
    remove_item(this: void, index: uint): void;
    /**
     * Removes the given tab and its associated content from this tabbed pane.
     *
     * Removing a tab does not destroy the tab or the tab contents. It just removes them from the view. When removing tabs, {@link LuaGuiElement::selected_tab_index | runtime:LuaGuiElement::selected_tab_index} needs to be manually updated.
     * @param tab The tab to remove or `nil` to remove all tabs.
     */
    remove_tab(this: void, tab?: LuaGuiElement): void;
    /**
     * Scrolls this scroll bar to the bottom.
     */
    scroll_to_bottom(this: void): void;
    /**
     * Scrolls this scroll bar such that the specified GUI element is visible to the player.
     * @param element The element to scroll to.
     * @param scroll_mode Where the element should be positioned in the scroll-pane. Defaults to `"in-view"`.
     */
    scroll_to_element(this: void, element: LuaGuiElement, scroll_mode?: 'in-view' | 'top-third'): void;
    /**
     * Scrolls the scroll bar such that the specified listbox item is visible to the player.
     * @param index The item index to scroll to.
     * @param scroll_mode Where the item should be positioned in the list-box. Defaults to `"in-view"`.
     */
    scroll_to_item(this: void, index: int, scroll_mode?: 'in-view' | 'top-third'): void;
    /**
     * Scrolls this scroll bar to the left.
     */
    scroll_to_left(this: void): void;
    /**
     * Scrolls this scroll bar to the right.
     */
    scroll_to_right(this: void): void;
    /**
     * Scrolls this scroll bar to the top.
     */
    scroll_to_top(this: void): void;
    /**
     * Selects a range of text in this textbox.
     * @param start_index The index of the first character to select
     * @param end_index The index of the last character to select
     * @example ```
    -- Select the characters "amp" from "example":
    textbox.select(3, 5)
    ```
     * @example ```
    -- Move the cursor to the start of the text box:
    textbox.select(1, 0)
    ```
     */
    select(this: void, start_index: int, end_index: int): void;
    /**
     * Selects all the text in this textbox.
     */
    select_all(this: void): void;
    /**
     * Sets the given string at the given index in this dropdown or listbox.
     * @param index The index whose text to replace.
     * @param string The text to set at the given index.
     */
    set_item(this: void, index: uint, string: LocalisedString): void;
    /**
     * Sets whether this slider only allows discrete values.
     */
    set_slider_discrete_values(this: void, value: boolean): void;
    /**
     * Sets this sliders minimum and maximum values. The minimum can't be >= the maximum.
     */
    set_slider_minimum_maximum(this: void, minimum: double, maximum: double): void;
    /**
     * Sets the minimum distance this slider can move. The minimum distance can't be > (max - min).
     */
    set_slider_value_step(this: void, value: double): void;
    /**
     * Swaps the children at the given indices in this element.
     * @param index_1 The index of the first child.
     * @param index_2 The index of the second child.
     */
    swap_children(this: void, index_1: uint, index_2: uint): void;
    /**
     * Whether this textfield (when in numeric mode) allows decimal numbers.
     */
    allow_decimal: boolean;
    /**
     * Whether this textfield (when in numeric mode) allows negative numbers.
     */
    allow_negative: boolean;
    /**
     * Whether the `"none"` state is allowed for this switch.
     *
     * This can't be set to false if the current switch_state is 'none'.
     */
    allow_none_state: boolean;
    /**
     * The anchor for this relative widget, if any. Setting `nil` clears the anchor.
     */
    anchor?: GuiAnchor;
    /**
     * Whether this frame auto-centers on window resize when stored in {@link LuaGui::screen | runtime:LuaGui::screen}.
     */
    auto_center: boolean;
    /**
     * Whether this button will automatically toggle when clicked.
     */
    auto_toggle: boolean;
    /**
     * The text to display after the normal tab text (designed to work with numbers)
     */
    badge_text: LocalisedString;
    /**
     * The text displayed on this element. For frames, this is the "heading". For other elements, like buttons or labels, this is the content.
     *
     * Whilst this attribute may be used on all elements without producing an error, it doesn't make sense for tables and flows as they won't display it.
     */
    caption: LocalisedString;
    /**
     * The child-elements of this GUI element.
     */
    readonly children: LuaGuiElement[];
    /**
     * Names of all the children of this element. These are the identifiers that can be used to access the child as an attribute of this element.
     */
    readonly children_names: string[];
    /**
     * The sprite to display on this sprite-button when it is clicked.
     */
    clicked_sprite: SpritePath;
    /**
     * The number of columns in this table.
     */
    readonly column_count: uint;
    /**
     * Direction of this element's layout.
     */
    readonly direction: GuiDirection;
    /**
     * The `frame` that is being moved when dragging this GUI element, if any. This element needs to be a child of the `drag_target` at some level.
     *
     * Only top-level elements in {@link LuaGui::screen | runtime:LuaGui::screen} can be `drag_target`s.
     * @example ```
    -- This creates a frame that contains a dragging handle which can move the frame.
    local frame = player.gui.screen.add{type="frame", direction="vertical"}
    local dragger = frame.add{type="empty-widget", style="draggable_space"}
    dragger.style.size = {128, 24}
    dragger.drag_target = frame
    ```
     */
    drag_target?: LuaGuiElement;
    /**
     * Whether this table should draw a horizontal grid line below the first table row.
     */
    draw_horizontal_line_after_headers: boolean;
    /**
     * Whether this table should draw horizontal grid lines.
     */
    draw_horizontal_lines: boolean;
    /**
     * Whether this table should draw vertical grid lines.
     */
    draw_vertical_lines: boolean;
    /**
     * The elem filters of this choose-elem-button, if any. The compatible type of filter is determined by `elem_type`.
     *
     * Writing to this field does not change or clear the currently selected element.
     * @example ```
    -- This will configure a choose-elem-button of type "entity" to only show items of type "furnace".
    button.elem_filters = {{filter = "type", type = "furnace"}}
    ```
     * @example ```
    -- Then, there are some types of filters that work on a specific kind of attribute. The following will configure a
    --   choose-elem-button of type "entity" to only show entities that have their "hidden" flags set.
    button.elem_filters = {{filter = "hidden"}}
    ```
     * @example ```
    -- Lastly, these filters can be combined at will, taking care to specify how they should be combined (either "and" or "or").
    --   The following will filter for any entities that are "furnaces" and that are not "hidden".
    button.elem_filters = {{filter = "type", type = "furnace"}, {filter = "hidden", invert = true, mode = "and"}}
    ```
     */
    elem_filters?: PrototypeFilter;
    /**
     * The element tooltip to display when hovering over this element, or `nil`.
     */
    elem_tooltip?: ElemID;
    /**
     * The elem type of this choose-elem-button.
     */
    readonly elem_type: ElemType;
    /**
     * The elem value of this choose-elem-button, if any.
     *
     * The `"signal"` type operates with {@link SignalID | runtime:SignalID}.
     *
     * The `"with-quality"` types operate with `"name"` and optional `"quality"`
     *
     * The remaining types use strings.
     */
    elem_value?: string | SignalID | table;
    /**
     * Whether this GUI element is enabled. Disabled GUI elements don't trigger events when clicked.
     */
    enabled: boolean;
    /**
     * The entity associated with this entity-preview, camera, minimap, if any.
     */
    entity?: LuaEntity;
    /**
     * The force this minimap is using, if any.
     */
    force?: string;
    /**
     * How this element should interact with game controllers.
     */
    game_controller_interaction: defines.game_controller_interaction;
    /**
     * The GUI this element is a child of.
     */
    readonly gui: LuaGui;
    /**
     * Policy of the horizontal scroll bar.
     */
    horizontal_scroll_policy: ScrollPolicy;
    /**
     * The sprite to display on this sprite-button when it is hovered.
     */
    hovered_sprite: SpritePath;
    /**
     * Whether this GUI element is ignored by interaction. This makes clicks on this element 'go through' to the GUI element or even the game surface below it.
     */
    ignored_by_interaction: boolean;
    /**
     * The index of this GUI element (unique amongst the GUI elements of a LuaPlayer).
     */
    readonly index: uint;
    /**
     * Whether this textfield displays as a password field, which renders all characters as `*`.
     */
    is_password: boolean;
    /**
     * The items in this dropdown or listbox.
     */
    items: LocalisedString[];
    /**
     * The text shown for the left switch label.
     */
    left_label_caption: LocalisedString;
    /**
     * The tooltip shown on the left switch label.
     */
    left_label_tooltip: LocalisedString;
    /**
     * The location of this widget when stored in {@link LuaGui::screen | runtime:LuaGui::screen}. `nil` if not set or not in {@link LuaGui::screen | runtime:LuaGui::screen}.
     */
    location?: GuiLocation;
    /**
     * Whether this choose-elem-button can be changed by the player.
     */
    locked: boolean;
    /**
     * Whether this textfield loses focus after {@link defines.events.on_gui_confirmed | runtime:defines.events.on_gui_confirmed} is fired.
     */
    lose_focus_on_confirm: boolean;
    /**
     * The player index this minimap is using.
     */
    minimap_player_index: uint;
    /**
     * The mouse button filters for this button or sprite-button.
     */
    mouse_button_filter: MouseButtonFlags;
    /**
     * The name of this element. `""` if no name was set.
     * @example ```
    game.player.gui.top.greeting.name == "greeting"
    ```
     */
    name: string;
    /**
     * The number to be shown in the bottom right corner of this sprite-button, or `nil` to show nothing.
     */
    number?: double;
    /**
     * Whether this textfield is limited to only numeric characters.
     */
    numeric: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The direct parent of this element. `nil` if this is a top-level element.
     */
    readonly parent?: LuaGuiElement;
    /**
     * Index into {@link LuaGameScript::players | runtime:LuaGameScript::players} specifying the player who owns this element.
     */
    readonly player_index: uint;
    /**
     * The position this camera or minimap is focused on, if any.
     */
    position: MapPosition;
    /**
     * Whether this element will raise {@link on_gui_hover | runtime:on_gui_hover} and {@link on_gui_leave | runtime:on_gui_leave}.
     */
    raise_hover_events: boolean;
    /**
     * Whether this text-box is read-only. Defaults to `false`.
     */
    read_only: boolean;
    /**
     * Whether the sprite widget should resize according to the sprite in it. Defaults to `true`.
     */
    resize_to_sprite: boolean;
    /**
     * The text shown for the right switch label.
     */
    right_label_caption: LocalisedString;
    /**
     * The tooltip shown on the right switch label.
     */
    right_label_tooltip: LocalisedString;
    /**
     * Whether the contents of this text-box are selectable. Defaults to `true`.
     */
    selectable: boolean;
    /**
     * The selected index for this dropdown or listbox. Returns `0` if none is selected.
     */
    selected_index: uint;
    /**
     * The selected tab index for this tabbed pane, if any.
     */
    selected_tab_index?: uint;
    /**
     * Related to the number to be shown in the bottom right corner of this sprite-button. When set to `true`, numbers that are non-zero and smaller than one are shown as a percentage rather than the value. For example, `0.5` will be shown as `50%` instead.
     */
    show_percent_for_small_numbers: boolean;
    /**
     * The value of this slider element.
     */
    slider_value: double;
    /**
     * The sprite to display on this sprite-button or sprite in the default state.
     */
    sprite: SpritePath;
    /**
     * Is this checkbox or radiobutton checked?
     */
    state: boolean;
    /**
     * The style of this element. When read, this evaluates to a {@link LuaStyle | runtime:LuaStyle}. For writing, it only accepts a string that specifies the textual identifier (prototype name) of the desired style.
     */
    style: LuaStyle | string;
    /**
     * The surface index this camera or minimap is using.
     */
    surface_index: uint;
    /**
     * The switch state for this switch.
     *
     * If {@link LuaGuiElement::allow_none_state | runtime:LuaGuiElement::allow_none_state} is false this can't be set to `"none"`.
     */
    switch_state: SwitchState;
    /**
     * The tabs and contents being shown in this tabbed-pane.
     */
    readonly tabs: TabAndContent[];
    /**
     * The tags associated with this LuaGuiElement.
     */
    tags: Tags;
    /**
     * The text contained in this textfield or text-box.
     */
    text: string;
    /**
     * Whether this button is currently toggled. When a button is toggled, it will use the `selected_graphical_set` and `selected_font_color` defined in its style.
     */
    toggled: boolean;
    /**
     * The text to display when hovering over this element. Writing `""` or `nil` will disable the tooltip.
     */
    tooltip: LocalisedString;
    /**
     * The type of this GUI element.
     */
    readonly type: GuiElementType;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * How much this progress bar is filled. It is a value in the range `[0, 1]`.
     */
    value: double;
    /**
     * Whether the content of this table should be vertically centered. Overrides {@link LuaStyle::column_alignments | runtime:LuaStyle::column_alignments}. Defaults to `true`.
     */
    vertical_centering: boolean;
    /**
     * Policy of the vertical scroll bar.
     */
    vertical_scroll_policy: ScrollPolicy;
    /**
     * Sets whether this GUI element is visible or completely hidden, taking no space in the layout.
     */
    visible: boolean;
    /**
     * Whether this text-box will word-wrap automatically. Defaults to `false`.
     */
    word_wrap: boolean;
    /**
     * The zoom this camera or minimap is using. This value must be positive.
     */
    zoom: double;
    /**
     * The indexing operator. Gets children by name.
     */
    get: LuaTableGetMethod<any, LuaGuiElement>;
    /**
     * The indexing operator. Gets children by name.
     */
    set: LuaTableSetMethod<any, LuaGuiElement>;
}
type LuaGuiElementAddParams = BaseLuaGuiElementAddParams | LuaGuiElementAddParamsButton | LuaGuiElementAddParamsCamera | LuaGuiElementAddParamsCheckbox | LuaGuiElementAddParamsChooseElemButton | LuaGuiElementAddParamsDropDown | LuaGuiElementAddParamsFlow | LuaGuiElementAddParamsFrame | LuaGuiElementAddParamsLine | LuaGuiElementAddParamsListBox | LuaGuiElementAddParamsMinimap | LuaGuiElementAddParamsProgressbar | LuaGuiElementAddParamsRadiobutton | LuaGuiElementAddParamsScrollPane | LuaGuiElementAddParamsSlider | LuaGuiElementAddParamsSprite | LuaGuiElementAddParamsSpriteButton | LuaGuiElementAddParamsSwitch | LuaGuiElementAddParamsTab | LuaGuiElementAddParamsTable | LuaGuiElementAddParamsTextBox | LuaGuiElementAddParamsTextfield;
interface BaseLuaGuiElementAddParams {
    /**
     * Where to position the child element when in the `relative` element.
     */
    'anchor'?: GuiAnchor;
    /**
     * Text displayed on the child element. For frames, this is their title. For other elements, like buttons or labels, this is the content. Whilst this attribute may be used on all elements, it doesn't make sense for tables and flows as they won't display it.
     */
    'caption'?: LocalisedString;
    /**
     * Elem tooltip of the child element. Will be displayed above `tooltip`.
     */
    'elem_tooltip'?: ElemID;
    /**
     * Whether the child element is enabled. Defaults to `true`.
     */
    'enabled'?: boolean;
    /**
     * How the element should interact with game controllers. Defaults to {@link defines.game_controller_interaction.normal | runtime:defines.game_controller_interaction.normal}.
     */
    'game_controller_interaction'?: defines.game_controller_interaction;
    /**
     * Whether the child element is ignored by interaction. Defaults to `false`.
     */
    'ignored_by_interaction'?: boolean;
    /**
     * Location in its parent that the child element should slot into. By default, the child will be appended onto the end.
     */
    'index'?: uint;
    /**
     * Name of the child element. It must be unique within the parent element.
     */
    'name'?: string;
    /**
     * Whether this element will raise {@link on_gui_hover | runtime:on_gui_hover} and {@link on_gui_leave | runtime:on_gui_leave}. Defaults to `false`.
     */
    'raise_hover_events'?: boolean;
    /**
     * The name of the style prototype to apply to the new element.
     */
    'style'?: string;
    /**
     * {@link Tags | runtime:Tags} associated with the child element.
     */
    'tags'?: Tags;
    /**
     * Tooltip of the child element.
     */
    'tooltip'?: LocalisedString;
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'button' | 'camera' | 'checkbox' | 'choose-elem-button' | 'drop-down' | 'flow' | 'frame' | 'line' | 'list-box' | 'minimap' | 'progressbar' | 'radiobutton' | 'scroll-pane' | 'slider' | 'sprite' | 'sprite-button' | 'switch' | 'tab' | 'table' | 'text-box' | 'textfield';
    /**
     * Whether the child element is visible. Defaults to `true`.
     */
    'visible'?: boolean;
}
/**
 *
 * Applies to variant case `button`
 */
interface LuaGuiElementAddParamsButton extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'button';
    /**
     * Whether the button will automatically toggle when clicked. Defaults to `false`.
     */
    'auto_toggle'?: boolean;
    /**
     * Which mouse buttons the button responds to. Defaults to `"left-and-right"`.
     */
    'mouse_button_filter'?: MouseButtonFlags;
    /**
     * The initial toggled state of the button. Defaults to `false`.
     */
    'toggled'?: boolean;
}
/**
 *
 * Applies to variant case `camera`
 */
interface LuaGuiElementAddParamsCamera extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'camera';
    /**
     * The position the camera centers on.
     */
    'position': MapPosition;
    /**
     * The surface that the camera will render. Defaults to the player's current surface.
     */
    'surface_index'?: uint;
    /**
     * The initial camera zoom. Defaults to `0.75`.
     */
    'zoom'?: double;
}
/**
 *
 * Applies to variant case `checkbox`
 */
interface LuaGuiElementAddParamsCheckbox extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'checkbox';
    /**
     * The initial checked-state of the checkbox.
     */
    'state': boolean;
}
/**
 *
 * Applies to variant case `choose-elem-button`
 */
interface LuaGuiElementAddParamsChooseElemButton extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'choose-elem-button';
    /**
     * If type is `"achievement"` - the default value for the button.
     */
    'achievement'?: string;
    /**
     * If type is `"decorative"` - the default value for the button.
     */
    'decorative'?: string;
    /**
     * Filters describing what to show in the selection window. The applicable filter depends on the `elem_type`.
     */
    'elem_filters'?: PrototypeFilter;
    /**
     * The type of the button.
     */
    'elem_type': ElemType;
    /**
     * If type is `"entity"` - the default value for the button.
     */
    'entity'?: string;
    /**
     * If type is `"entity-with-quality"` - the default value for the button.
     */
    'entity-with-quality'?: string;
    /**
     * If type is `"equipment"` - the default value for the button.
     */
    'equipment'?: string;
    /**
     * If type is `"equipment-with-quality"` - the default value for the button.
     */
    'equipment-with-quality'?: string;
    /**
     * If type is `"fluid"` - the default value for the button.
     */
    'fluid'?: string;
    /**
     * If type is `"item"` - the default value for the button.
     */
    'item'?: string;
    /**
     * If type is `"item-group"` - the default value for the button.
     */
    'item-group'?: string;
    /**
     * If type is `"item-with-quality"` - the default value for the button.
     */
    'item-with-quality'?: string;
    /**
     * If type is `"recipe"` - the default value for the button.
     */
    'recipe'?: string;
    /**
     * If type is `"recipe-with-quality"` - the default value for the button.
     */
    'recipe-with-quality'?: string;
    /**
     * If type is `"signal"` - the default value for the button.
     */
    'signal'?: SignalID;
    /**
     * If type is `"technology"` - the default value for the button.
     */
    'technology'?: string;
    /**
     * If type is `"tile"` - the default value for the button.
     */
    'tile'?: string;
}
/**
 *
 * Applies to variant case `drop-down`
 */
interface LuaGuiElementAddParamsDropDown extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'drop-down';
    /**
     * The initial items in the dropdown.
     */
    'items'?: LocalisedString[];
    /**
     * The index of the initially selected item. Defaults to 0.
     */
    'selected_index'?: uint;
}
/**
 *
 * Applies to variant case `flow`
 */
interface LuaGuiElementAddParamsFlow extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'flow';
    /**
     * The initial direction of the flow's layout. Defaults to `"horizontal"`.
     */
    'direction'?: GuiDirection;
}
/**
 *
 * Applies to variant case `frame`
 */
interface LuaGuiElementAddParamsFrame extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'frame';
    /**
     * The initial direction of the frame's layout. Defaults to `"horizontal"`.
     */
    'direction'?: GuiDirection;
}
/**
 *
 * Applies to variant case `line`
 */
interface LuaGuiElementAddParamsLine extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'line';
    /**
     * The initial direction of the line. Defaults to `"horizontal"`.
     */
    'direction'?: GuiDirection;
}
/**
 *
 * Applies to variant case `list-box`
 */
interface LuaGuiElementAddParamsListBox extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'list-box';
    /**
     * The initial items in the listbox.
     */
    'items'?: LocalisedString[];
    /**
     * The index of the initially selected item. Defaults to 0.
     */
    'selected_index'?: uint;
}
/**
 *
 * Applies to variant case `minimap`
 */
interface LuaGuiElementAddParamsMinimap extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'minimap';
    /**
     * The player index the map should use. Defaults to the current player.
     */
    'chart_player_index'?: uint;
    /**
     * The force this minimap should use. Defaults to the player's current force.
     */
    'force'?: string;
    /**
     * The position the minimap centers on. Defaults to the player's current position.
     */
    'position'?: MapPosition;
    /**
     * The surface the camera will render. Defaults to the player's current surface.
     */
    'surface_index'?: uint;
    /**
     * The initial camera zoom. Defaults to `0.75`.
     */
    'zoom'?: double;
}
/**
 *
 * Applies to variant case `progressbar`
 */
interface LuaGuiElementAddParamsProgressbar extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'progressbar';
    /**
     * The initial value of the progressbar, in the range `[0, 1]`. Defaults to `0`.
     */
    'value'?: double;
}
/**
 *
 * Applies to variant case `radiobutton`
 */
interface LuaGuiElementAddParamsRadiobutton extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'radiobutton';
    /**
     * The initial checked-state of the radiobutton.
     */
    'state': boolean;
}
/**
 *
 * Applies to variant case `scroll-pane`
 */
interface LuaGuiElementAddParamsScrollPane extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'scroll-pane';
    /**
     * Policy of the horizontal scroll bar. Defaults to `"auto"`.
     */
    'horizontal_scroll_policy'?: ScrollPolicy;
    /**
     * Policy of the vertical scroll bar. Defaults to `"auto"`.
     */
    'vertical_scroll_policy'?: ScrollPolicy;
}
/**
 *
 * Applies to variant case `slider`
 */
interface LuaGuiElementAddParamsSlider extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'slider';
    /**
     * Defaults to `true`.
     */
    'discrete_values'?: boolean;
    /**
     * The maximum value for the slider. Defaults to `30`.
     */
    'maximum_value'?: double;
    /**
     * The minimum value for the slider. Defaults to `0`.
     */
    'minimum_value'?: double;
    /**
     * The initial value for the slider. Defaults to `minimum_value`.
     */
    'value'?: double;
    /**
     * The minimum value the slider can move. Defaults to `1`.
     */
    'value_step'?: double;
}
/**
 *
 * Applies to variant case `sprite`
 */
interface LuaGuiElementAddParamsSprite extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'sprite';
    /**
     * Whether the widget should resize according to the sprite in it. Defaults to `true`.
     */
    'resize_to_sprite'?: boolean;
    /**
     * Path to the image to display.
     */
    'sprite'?: SpritePath;
}
/**
 *
 * Applies to variant case `sprite-button`
 */
interface LuaGuiElementAddParamsSpriteButton extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'sprite-button';
    /**
     * Whether the button will automatically toggle when clicked. Defaults to `false`.
     */
    'auto_toggle'?: boolean;
    /**
     * Path to the image to display on the button when it is clicked.
     */
    'clicked_sprite'?: SpritePath;
    /**
     * Path to the image to display on the button when it is hovered.
     */
    'hovered_sprite'?: SpritePath;
    /**
     * The mouse buttons that the button responds to. Defaults to `"left-and-right"`.
     */
    'mouse_button_filter'?: MouseButtonFlags;
    /**
     * The number shown on the button.
     */
    'number'?: double;
    /**
     * Formats small numbers as percentages. Defaults to `false`.
     */
    'show_percent_for_small_numbers'?: boolean;
    /**
     * Path to the image to display on the button.
     */
    'sprite'?: SpritePath;
    /**
     * The initial toggled state of the button. Defaults to `false`.
     */
    'toggled'?: boolean;
}
/**
 *
 * Applies to variant case `switch`
 */
interface LuaGuiElementAddParamsSwitch extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'switch';
    /**
     * Whether the switch can be set to a middle state. Defaults to `false`.
     */
    'allow_none_state'?: boolean;
    'left_label_caption'?: LocalisedString;
    'left_label_tooltip'?: LocalisedString;
    'right_label_caption'?: LocalisedString;
    'right_label_tooltip'?: LocalisedString;
    /**
     * If set to "none", `allow_none_state` must be `true`. Defaults to `"left"`.
     */
    'switch_state'?: SwitchState;
}
/**
 *
 * Applies to variant case `tab`
 */
interface LuaGuiElementAddParamsTab extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'tab';
    /**
     * The text to display after the normal tab text (designed to work with numbers).
     */
    'badge_text'?: LocalisedString;
}
/**
 *
 * Applies to variant case `table`
 */
interface LuaGuiElementAddParamsTable extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'table';
    /**
     * Number of columns. This can't be changed after the table is created.
     */
    'column_count': uint;
    /**
     * Whether the table should draw a single horizontal grid line after the headers. Defaults to `false`.
     */
    'draw_horizontal_line_after_headers'?: boolean;
    /**
     * Whether the table should draw horizontal grid lines. Defaults to `false`.
     */
    'draw_horizontal_lines'?: boolean;
    /**
     * Whether the table should draw vertical grid lines. Defaults to `false`.
     */
    'draw_vertical_lines'?: boolean;
    /**
     * Whether the content of the table should be vertically centered. Defaults to `true`.
     */
    'vertical_centering'?: boolean;
}
/**
 *
 * Applies to variant case `text-box`
 */
interface LuaGuiElementAddParamsTextBox extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'text-box';
    /**
     * Whether to add the rich text icon selector to the text box. This attribute can't be changed after creating the widget. Defaults to `false`.
     */
    'icon_selector'?: boolean;
    /**
     * The initial text contained in the text-box.
     */
    'text'?: string;
}
/**
 *
 * Applies to variant case `textfield`
 */
interface LuaGuiElementAddParamsTextfield extends BaseLuaGuiElementAddParams {
    /**
     * The kind of element to add, which potentially has its own attributes as listed below.
     */
    'type': 'textfield';
    /**
     * Defaults to `false`.
     */
    'allow_decimal'?: boolean;
    /**
     * Defaults to `false`.
     */
    'allow_negative'?: boolean;
    /**
     * Whether to add the rich text icon selector to the text field. This attribute can't be changed after creating the widget. Defaults to `false`.
     */
    'icon_selector'?: boolean;
    /**
     * Defaults to `false`.
     */
    'is_password'?: boolean;
    /**
     * Defaults to `false`.
     */
    'lose_focus_on_confirm'?: boolean;
    /**
     * Defaults to `false`.
     */
    'numeric'?: boolean;
    /**
     * The initial text contained in the textfield.
     */
    'text'?: string;
}
/**
 * Prototype of a heat buffer.
 */
interface LuaHeatBufferPrototype {
    readonly connections: HeatConnection[];
    readonly default_temperature: double;
    readonly max_temperature: double;
    readonly max_transfer: double;
    readonly min_temperature_gradient: double;
    readonly min_working_temperature: double;
    readonly minimum_glow_temperature: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly specific_heat: double;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a heat energy source.
 */
interface LuaHeatEnergySourcePrototype {
    readonly connections: HeatConnection[];
    readonly default_temperature: double;
    /**
     * The table of emissions of this energy source in `pollution/Joule`, indexed by pollutant type. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions_per_joule: Record<string, double>;
    readonly heat_buffer_prototype: LuaHeatBufferPrototype;
    readonly max_temperature: double;
    readonly max_transfer: double;
    readonly min_temperature_gradient: double;
    readonly min_working_temperature: double;
    readonly minimum_glow_temperature: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly render_no_network_icon: boolean;
    readonly render_no_power_icon: boolean;
    readonly specific_heat: double;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Provides various helper and utility functions. It is accessible through the global object named `helpers`.
 */
interface LuaHelpers {
    /**
     * Goes over all items, entities, tiles, recipes, technologies among other things and logs if the locale is incorrect.
     *
     * Also prints true/false if called from the console.
     */
    check_prototype_translations(this: void): void;
    /**
     * Creates a {@link LuaProfiler | runtime:LuaProfiler}, which is used for measuring script performance.
     *
     * LuaProfiler cannot be serialized.
     * @param stopped Create the timer stopped
     */
    create_profiler(this: void, stopped?: boolean): LuaProfiler;
    /**
     * Base64 decodes and inflates the given string.
     * @param string The string to decode.
     * @returns The decoded string or `nil` if the decode failed.
     */
    decode_string(this: void, string: string): string | null;
    /**
     * Converts the given direction into the string version of the direction.
     */
    direction_to_string(this: void, direction: defines.direction): string;
    /**
     * Deflates and base64 encodes the given string.
     * @param string The string to encode.
     * @returns The encoded string or `nil` if the encode failed.
     */
    encode_string(this: void, string: string): string | null;
    /**
     * Evaluate an expression, substituting variables as provided.
     * @param expression The expression to evaluate.
     * @param variables Variables to be substituted.
     * @example ```
    -- Calculate the number of research units required to unlock mining productivity level 10
    local formula = game.forces["player"].technologies["mining-productivity-4"].research_unit_count_formula
    local units = helpers.evaluate_expression(formula, { L = 10, l = 10 })
    ```
     */
    evaluate_expression(this: void, expression: MathExpression, variables?: Record<string, double>): double;
    /**
     * Checks if the given SoundPath is valid.
     * @param sound_path Path to the sound.
     */
    is_valid_sound_path(this: void, sound_path: SoundPath): boolean;
    /**
     * Checks if the given SpritePath is valid and contains a loaded sprite. The existence of the image is not checked for paths of type `file`.
     * @param sprite_path Path to the image.
     */
    is_valid_sprite_path(this: void, sprite_path: SpritePath): boolean;
    /**
     * Convert a JSON string to a table.
     * @param json The string to convert.
     * @returns The returned object, or `nil` if the JSON string was invalid.
     */
    json_to_table(this: void, json: string): AnyBasic | null;
    /**
     * Convert a map exchange string to map gen settings and map settings.
     */
    parse_map_exchange_string(this: void, map_exchange_string: string): MapExchangeStringData;
    /**
     * Remove a file or directory in the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. Can be used to remove files created by {@link LuaHelpers::write_file | runtime:LuaHelpers::write_file}.
     * @param path The path to the file or directory to remove, relative to `script-output`.
     */
    remove_path(this: void, path: string): void;
    /**
     * Convert a table to a JSON string
     */
    table_to_json(this: void, data: table): string;
    /**
     * Write a file to the `script-output` folder, located in the game's {@link user data directory | https://wiki.factorio.com/User_data_directory}. The name and file extension of the file can be specified via the `filename` parameter.
     * @param filename The name of the file. Providing a directory path (ex. `"save/here/example.txt"`) will create the necessary folder structure in `script-output`.
     * @param data The content to write to the file.
     * @param append If `true`, `data` will be appended to the end of the file. Defaults to `false`, which will overwrite any pre-existing file with the new `data`.
     * @param for_player If given, the file will only be written for this `player_index`. Providing `0` will only write to the server's output if present.
     */
    write_file(this: void, filename: string, data: LocalisedString, append?: boolean, for_player?: uint): void;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
}
/**
 * Control behavior for inserters.
 */
interface LuaInserterControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The hand read mode for the inserter.
     */
    circuit_hand_read_mode: defines.control_behavior.inserter.hand_read_mode;
    /**
     * `true` if the contents of the inserter hand should be sent to the circuit network
     */
    circuit_read_hand_contents: boolean;
    /**
     * `true` if filters are set from circuit network
     */
    circuit_set_filters: boolean;
    /**
     * If the stack size of the inserter is set through the circuit network or not.
     */
    circuit_set_stack_size: boolean;
    /**
     * The signal used to set the stack size of the inserter.
     */
    circuit_stack_control_signal?: SignalID;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A storage of item stacks.
 */
interface LuaInventory {
    /**
     * Can at least some items be inserted?
     * @param items Items that would be inserted.
     * @returns `true` if at least a part of the given items could be inserted into this inventory.
     */
    can_insert(this: void, items: ItemStackIdentification): boolean;
    /**
     * If the given inventory slot filter can be set to the given filter.
     * @param index The item stack index
     * @param filter The item filter
     */
    can_set_filter(this: void, index: uint, filter: ItemFilter): boolean;
    /**
     * Make this inventory empty.
     */
    clear(this: void): void;
    /**
     * Counts the number of empty stacks.
     * @param include_filtered If true, filtered slots will be included. Defaults to false.
     * @param include_bar If true, slots blocked by the current bar will be included. Defaults to true.
     */
    count_empty_stacks(this: void, include_filtered?: boolean, include_bar?: boolean): uint;
    /**
     * Destroys this inventory.
     *
     * Only inventories created by {@link LuaGameScript::create_inventory | runtime:LuaGameScript::create_inventory} can be destroyed this way.
     */
    destroy(this: void): void;
    /**
     * Finds the first empty stack. Filtered slots are excluded unless a filter item is given.
     * @param item If given, empty stacks that are filtered for this item will be included.
     * @returns [0] - The first empty stack, or `nil` if there aren't any empty stacks.
     * @returns [1] - The stack index of the matching stack, if any is found.
     */
    find_empty_stack(this: void, item?: ItemWithQualityID): LuaMultiReturn<[
        LuaItemStack | null,
        uint | null
    ]>;
    /**
     * Finds the first LuaItemStack in the inventory that matches the given item name.
     * @param item The item to find
     * @returns [0] - The first matching stack, or `nil` if none match.
     * @returns [1] - The stack index of the matching stack, if any is found.
     */
    find_item_stack(this: void, item: ItemWithQualityID): LuaMultiReturn<[
        LuaItemStack | null,
        uint | null
    ]>;
    /**
     * Get the current bar. This is the index at which the red area starts.
     *
     * Only useable if this inventory supports having a bar.
     */
    get_bar(this: void): uint;
    /**
     * Get counts of all items in this inventory.
     * @returns List of all items in the inventory.
     */
    get_contents(this: void): ItemCountWithQuality[];
    /**
     * Gets the filter for the given item stack index.
     * @param index The item stack index
     * @returns The current filter or `nil` if none.
     */
    get_filter(this: void, index: uint): ItemFilter | null;
    /**
     * Gets the number of the given item that can be inserted into this inventory.
     *
     * This is a "best guess" number; things like assembling machine filtered slots, module slots, items with durability, and items with mixed health will cause the result to be inaccurate. The main use for this is in checking how many of a basic item can fit into a basic inventory.
     *
     * This accounts for the 'bar' on the inventory.
     * @param item The item to check.
     */
    get_insertable_count(this: void, item: ItemWithQualityID): uint;
    /**
     * Get the number of all or some items in this inventory.
     * @param item The item to count. If not specified, count all items.
     */
    get_item_count(this: void, item?: ItemWithQualityID): uint;
    /**
     * Insert items into this inventory.
     * @param items Items to insert.
     * @returns Number of items actually inserted.
     */
    insert(this: void, items: ItemStackIdentification): uint;
    /**
     * Does this inventory contain nothing?
     */
    is_empty(this: void): boolean;
    /**
     * If this inventory supports filters and has at least 1 filter set.
     */
    is_filtered(this: void): boolean;
    /**
     * Is every stack in this inventory full? Ignores stacks blocked by the current bar.
     */
    is_full(this: void): boolean;
    /**
     * Remove items from this inventory.
     * @param items Items to remove.
     * @returns Number of items actually removed.
     */
    remove(this: void, items: ItemStackIdentification): uint;
    /**
     * Resizes the inventory.
     *
     * Items in slots beyond the new capacity are deleted.
     *
     * Only inventories created by {@link LuaGameScript::create_inventory | runtime:LuaGameScript::create_inventory} can be resized.
     * @param size New size of a inventory
     */
    resize(this: void, size: uint16): void;
    /**
     * Set the current bar.
     *
     * Only useable if this inventory supports having a bar.
     * @param bar The new limit. Omitting this parameter will clear the limit.
     */
    set_bar(this: void, bar?: uint): void;
    /**
     * Sets the filter for the given item stack index.
     *
     * Some inventory slots don't allow some filters (gun ammo can't be filtered for non-ammo).
     * @param index The item stack index.
     * @param filter The new filter. `nil` erases any existing filter.
     * @returns If the filter was allowed to be set.
     */
    set_filter(this: void, index: uint, filter: ItemFilter | nil): boolean;
    /**
     * Sorts and merges the items in this inventory.
     */
    sort_and_merge(this: void): void;
    /**
     * Does this inventory support a bar? Bar is the draggable red thing, found for example on chests, that limits the portion of the inventory that may be manipulated by machines.
     *
     * "Supporting a bar" doesn't mean that the bar is set to some nontrivial value. Supporting a bar means the inventory supports having this limit at all. The character's inventory is an example of an inventory without a bar; the wooden chest's inventory is an example of one with a bar.
     */
    supports_bar(this: void): boolean;
    /**
     * If this inventory supports filters.
     */
    supports_filters(this: void): boolean;
    /**
     * The entity that owns this inventory, if any.
     */
    readonly entity_owner?: LuaEntity;
    /**
     * The equipment that owns this inventory, if any.
     */
    readonly equipment_owner?: LuaEquipment;
    /**
     * The inventory index this inventory uses, if any.
     */
    readonly index?: defines.inventory;
    /**
     * The mod that owns this inventory, if any.
     */
    readonly mod_owner?: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The player that owns this inventory, if any.
     */
    readonly player_owner?: LuaPlayer;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * The indexing operator.
     * @example ```
    -- Will get the first item in the player's inventory.
    game.player.get_main_inventory()[1]
    ```
     */
    get: LuaTableGetMethod<any, LuaItemStack>;
    /**
     * The indexing operator.
     * @example ```
    -- Will get the first item in the player's inventory.
    game.player.get_main_inventory()[1]
    ```
     */
    set: LuaTableSetMethod<any, LuaItemStack>;
    /**
     * Get the number of slots in this inventory.
     * @example ```
    -- Will print the number of slots in the player's main inventory.
    game.player.print(#game.player.get_main_inventory())
    ```
     */
    length: LuaLengthMethod<uint>;
}
/**
 * A reference to an item with data. In contrast to LuaItemStack, this is binding to a specific item data even if it would move between entities or inventories.
 */
interface LuaItem extends LuaItemCommon {
    /**
     * Object representing the item stack this item is located in right now. If its not possible to locate the item stack holding this item, a nil will be returned
     */
    readonly item_stack?: LuaItemStack;
    /**
     * Name of the item prototype
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Item prototype of this item
     */
    readonly prototype: LuaItemPrototype;
    /**
     * The quality of this item.
     */
    readonly quality: LuaQualityPrototype;
    /**
     * Type of the item prototype
     */
    readonly type: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Common methods related to usage of item with data. It is useful when LuaItemStack contains item with data or in general with LuaItem as it can only point at an item with data.
 */
interface LuaItemCommon {
    /**
     * Build this blueprint at the given location.
     *
     * Built entities can be come invalid between the building of the blueprint and the function returning if by_player or raise_built is used and one of those events invalidates the entity.
     * @param table.surface Surface to build on
     * @param table.force Force to use for the building
     * @param table.position The position to build at
     * @param table.direction The direction to use when building
     * @param table.build_mode If `normal`, blueprint will not be built if any one thing can't be built. If `forced`, anything that can be built is built and obstructing nature entities will be deconstructed. If `superforced`, all obstructions will be deconstructed and the blueprint will be built.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped.
     * @param table.by_player The player to use if any. If provided {@link defines.events.on_built_entity | runtime:defines.events.on_built_entity} will also be fired on successful entity creation.
     * @param table.raise_built If true; {@link defines.events.script_raised_built | runtime:defines.events.script_raised_built} will be fired on successful entity creation. Note: this is ignored if by_player is provided.
     * @returns Array of created ghosts
     */
    build_blueprint(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        position: MapPosition;
        direction?: defines.direction;
        build_mode?: defines.build_mode;
        skip_fog_of_war?: boolean;
        by_player?: PlayerIdentification;
        raise_built?: boolean;
    }): LuaEntity[];
    /**
     * Cancel deconstruct the given area with this deconstruction item.
     * @param table.surface Surface to cancel deconstruct on
     * @param table.force Force to use for canceling deconstruction
     * @param table.area The area to deconstruct
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped. Defaults to `false`.
     * @param table.by_player The player to use if any.
     * @param table.super_forced If the cancel deconstruction is super-forced. Defaults to `false`.
     */
    cancel_deconstruct_area(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        area: BoundingBox;
        skip_fog_of_war?: boolean;
        by_player?: PlayerIdentification;
        super_forced?: boolean;
    }): void;
    /**
     * Clears this blueprint item.
     */
    clear_blueprint(this: void): void;
    /**
     * Clears all settings/filters on this deconstruction item resetting it to default values.
     */
    clear_deconstruction_item(this: void): void;
    /**
     * Clears all settings/filters on this upgrade item resetting it to default values.
     */
    clear_upgrade_item(this: void): void;
    /**
     * Sets up this blueprint using the found blueprintable entities/tiles on the surface.
     * @param table.surface Surface to create from
     * @param table.force Force to use for the creation
     * @param table.area The bounding box
     * @param table.always_include_tiles When true, blueprintable tiles are always included in the blueprint. When false they're only included if no entities exist in the setup area. Defaults to false.
     * @param table.include_entities When true, entities are included in the blueprint. Defaults to true.
     * @param table.include_modules When true, modules are included in the blueprint. Defaults to true.
     * @param table.include_station_names When true, station names are included in the blueprint. Defaults to false.
     * @param table.include_trains When true, trains are included in the blueprint. Defaults to false.
     * @param table.include_fuel When true, train fuel is included in the blueprint, Defaults to true.
     * @returns The blueprint entity index to source entity mapping.
     */
    create_blueprint(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        area: BoundingBox;
        always_include_tiles?: boolean;
        include_entities?: boolean;
        include_modules?: boolean;
        include_station_names?: boolean;
        include_trains?: boolean;
        include_fuel?: boolean;
    }): Record<uint, LuaEntity>;
    /**
     * Deconstruct the given area with this deconstruction item.
     * @param table.surface Surface to deconstruct on
     * @param table.force Force to use for the deconstruction
     * @param table.area The area to deconstruct
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped. Defaults to `false`.
     * @param table.by_player The player to use if any.
     * @param table.super_forced If the deconstruction is super-forced. Defaults to `false`.
     */
    deconstruct_area(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        area: BoundingBox;
        skip_fog_of_war?: boolean;
        by_player?: PlayerIdentification;
        super_forced?: boolean;
    }): void;
    /**
     * The entities in this blueprint.
     */
    get_blueprint_entities(this: void): BlueprintEntity[] | null;
    /**
     * Gets the number of entities in this blueprint item.
     */
    get_blueprint_entity_count(this: void): uint;
    /**
     * Gets the given tag on the given blueprint entity index in this blueprint item.
     * @param index The entity index.
     * @param tag The tag to get.
     */
    get_blueprint_entity_tag(this: void, index: uint, tag: string): AnyBasic | null;
    /**
     * Gets the tags for the given blueprint entity index in this blueprint item.
     */
    get_blueprint_entity_tags(this: void, index: uint): Tags;
    /**
     * A list of the tiles in this blueprint.
     */
    get_blueprint_tiles(this: void): Tile[] | null;
    /**
     * Gets the entity filter at the given index for this deconstruction item.
     */
    get_entity_filter(this: void, index: uint): string | null;
    /**
     * Access the inner inventory of an item.
     * @param inventory Index of the inventory to access, which can only be {@link defines.inventory.item_main | runtime:defines.inventory.item_main}.
     * @returns `nil` if there is no inventory with the given index.
     */
    get_inventory(this: void, inventory: defines.inventory): LuaInventory | null;
    /**
     * Gets the filter at the given index for this upgrade item.
     *
     * In contrast to {@link LuaItemCommon::set_mapper | runtime:LuaItemCommon::set_mapper}, indices past the upgrade item's current size are considered to be out of bounds.
     * @param index The index of the mapper to read.
     */
    get_mapper(this: void, index: uint, type: 'from' | 'to'): UpgradeMapperSource | UpgradeMapperDestination;
    /**
     * Gets the tag with the given name or returns `nil` if it doesn't exist.
     */
    get_tag(this: void, tag_name: string): AnyBasic | null;
    /**
     * Gets the tile filter at the given index for this deconstruction item.
     */
    get_tile_filter(this: void, index: uint): string | null;
    /**
     * Is this blueprint item setup? I.e. is it a non-empty blueprint?
     */
    is_blueprint_setup(this: void): boolean;
    /**
     * Removes a tag with the given name.
     * @returns If the tag existed and was removed.
     */
    remove_tag(this: void, tag: string): boolean;
    /**
     * Set new entities to be a part of this blueprint.
     * @param entities The new blueprint entities.
     */
    set_blueprint_entities(this: void, entities: BlueprintEntity[]): void;
    /**
     * Sets the given tag on the given blueprint entity index in this blueprint item.
     * @param index The entity index.
     * @param tag The tag to set.
     * @param value The tag value to set or `nil` to clear the tag.
     */
    set_blueprint_entity_tag(this: void, index: uint, tag: string, value: AnyBasic): void;
    /**
     * Sets the tags on the given blueprint entity index in this blueprint item.
     * @param index The entity index
     */
    set_blueprint_entity_tags(this: void, index: uint, tags: Tags): void;
    /**
     * Set specific tiles in this blueprint.
     * @param tiles Tiles to be a part of the blueprint.
     */
    set_blueprint_tiles(this: void, tiles: Tile[]): void;
    /**
     * Sets the entity filter at the given index for this deconstruction item.
     * @param filter Writing `nil` removes the filter.
     * @returns Whether the new filter was successfully set (meaning it was valid).
     */
    set_entity_filter(this: void, index: uint, filter: string | LuaEntityPrototype | LuaEntity | nil): boolean;
    /**
     * Sets the module filter at the given index for this upgrade item.
     *
     * In contrast to {@link LuaItemCommon::get_mapper | runtime:LuaItemCommon::get_mapper}, indices past the upgrade item's current size are valid and expand the list of mappings accordingly, if within reasonable bounds.
     * @param index The index of the mapper to set.
     * @param mapper The mapper to set or `nil`
     */
    set_mapper(this: void, index: uint, type: 'from' | 'to', mapper: UpgradeMapperSource | UpgradeMapperDestination | nil): void;
    /**
     * Sets the tag with the given name and value.
     */
    set_tag(this: void, tag_name: string, tag: AnyBasic): void;
    /**
     * Sets the tile filter at the given index for this deconstruction item.
     * @param filter Writing `nil` removes the filter.
     * @returns Whether the new filter was successfully set (meaning it was valid).
     */
    set_tile_filter(this: void, index: uint, filter: string | LuaTilePrototype | LuaTile | nil): boolean;
    /**
     * The active blueprint index for this blueprint book. `nil` if this blueprint book is empty.
     */
    active_index?: uint;
    /**
     * Whether the label for this item can be manually changed. When false the label can only be changed through the API.
     */
    allow_manual_label_change: boolean;
    /**
     * Number of bullets left in the magazine.
     */
    ammo: uint;
    /**
     * If absolute snapping is enabled on this blueprint item.
     */
    blueprint_absolute_snapping: boolean;
    /**
     * The offset from the absolute grid. `nil` if absolute snapping is not enabled.
     */
    blueprint_position_relative_to_grid?: TilePosition;
    /**
     * The snapping grid size in this blueprint item. `nil` if snapping is not enabled.
     */
    blueprint_snap_to_grid?: TilePosition;
    /**
     * List of raw materials required to build this blueprint.
     */
    readonly cost_to_build: ItemCountWithQuality[];
    /**
     * The custom description this item-with-tags. This is shown over the normal item description if this is set to a non-empty value.
     */
    custom_description: LocalisedString;
    /**
     * The default icons for a blueprint item.
     */
    readonly default_icons: BlueprintSignalIcon[];
    /**
     * Durability of the contained item. Automatically capped at the item's maximum durability.
     */
    durability: double;
    /**
     * If this is an item with entity data, get the stored entity color.
     */
    entity_color?: Color;
    /**
     * The number of entity filters this deconstruction item supports.
     */
    readonly entity_filter_count: uint;
    /**
     * The blacklist/whitelist entity filter mode for this deconstruction item.
     */
    entity_filter_mode: defines.deconstruction_item.entity_filter_mode;
    /**
     * The entity filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be entity prototype names that don't have the `"not-deconstructable"` flag set and are either a `cliff` or marked as `minable`.
     */
    entity_filters: string[];
    /**
     * If this is an item with entity data, get the stored entity label.
     */
    entity_label?: string;
    /**
     * The equipment grid of this item, if any.
     */
    readonly grid?: LuaEquipmentGrid;
    /**
     * If this is an ammo item.
     */
    readonly is_ammo: boolean;
    /**
     * If this is an armor item.
     */
    readonly is_armor: boolean;
    /**
     * If this is a blueprint item.
     */
    readonly is_blueprint: boolean;
    /**
     * If this is a blueprint book item.
     */
    readonly is_blueprint_book: boolean;
    /**
     * If this is a deconstruction tool item.
     */
    readonly is_deconstruction_item: boolean;
    /**
     * If this is an item with entity data item.
     */
    readonly is_item_with_entity_data: boolean;
    /**
     * If this is an item with inventory item.
     */
    readonly is_item_with_inventory: boolean;
    /**
     * If this is an item with label item.
     */
    readonly is_item_with_label: boolean;
    /**
     * If this is an item with tags item.
     */
    readonly is_item_with_tags: boolean;
    /**
     * If this is a repair tool item.
     */
    readonly is_repair_tool: boolean;
    /**
     * If this is a selection tool item.
     */
    readonly is_selection_tool: boolean;
    /**
     * If this is a tool item.
     */
    readonly is_tool: boolean;
    /**
     * If this is a upgrade item.
     */
    readonly is_upgrade_item: boolean;
    /**
     * The unique identifier for this item, if any. Note that this ID stays the same no matter where the item is moved to.
     */
    readonly item_number?: uint;
    /**
     * The current label for this item, if any.
     */
    label?: string;
    /**
     * The current label color for this item, if any.
     */
    label_color?: Color;
    /**
     * The current count of mappers in the upgrade item.
     */
    readonly mapper_count: uint;
    /**
     * The location of this item if it can be found.
     */
    readonly owner_location: ItemLocationData;
    /**
     * Icons of this blueprint item, blueprint book, deconstruction item or upgrade planner. An item that doesn't have icons returns `nil` on read and throws error on write.
     */
    preview_icons?: BlueprintSignalIcon[];
    tags: Tags;
    /**
     * The number of tile filters this deconstruction item supports.
     */
    readonly tile_filter_count: uint;
    /**
     * The blacklist/whitelist tile filter mode for this deconstruction item.
     */
    tile_filter_mode: defines.deconstruction_item.tile_filter_mode;
    /**
     * The tile filters for this deconstruction item. The attribute is a sparse array with the keys representing the index of the filter. Reading filters always returns an array of strings which are the tile prototype names.
     */
    tile_filters: TileID[];
    /**
     * The tile selection mode for this deconstruction item.
     */
    tile_selection_mode: defines.deconstruction_item.tile_selection_mode;
    /**
     * If this deconstruction item is set to allow trees and rocks only.
     */
    trees_and_rocks_only: boolean;
}
/**
 * Prototype of an item. For example, an item prototype can be obtained from {@link LuaPrototypes::item | runtime:LuaPrototypes::item} by its name: `prototypes.item["iron-plate"]`.
 */
interface LuaItemPrototype extends LuaPrototypeBase {
    /**
     * The type of this ammo prototype.
     * @param ammo_source_type Defaults to `"default"`.
     */
    get_ammo_type(this: void, ammo_source_type?: 'default' | 'player' | 'turret' | 'vehicle'): AmmoType | null;
    get_cursor_box_type(this: void, selection_mode: defines.selection_mode): CursorBoxRenderType | null;
    /**
     * The durability of this tool item prototype.
     */
    get_durability(this: void, quality?: QualityID): double | null;
    /**
     * The entity filter mode used by this selection tool.
     */
    get_entity_filter_mode(this: void, selection_mode: defines.selection_mode): PrototypeFilterMode | null;
    /**
     * The entity filters used by this selection tool.
     */
    get_entity_filters(this: void, selection_mode: defines.selection_mode): LuaEntityPrototype[] | null;
    /**
     * The entity type filters used by this selection tool indexed by entity type.
     *
     * The boolean value is meaningless and is used to allow easy lookup if a type exists in the dictionary.
     */
    get_entity_type_filters(this: void, selection_mode: defines.selection_mode): Record<string, true> | null;
    /**
     * The inventory size bonus for this armor prototype.
     */
    get_inventory_size_bonus(this: void, quality?: QualityID): uint | null;
    /**
     * The color used when doing normal selection with this selection tool prototype.
     */
    get_selection_border_color(this: void, selection_mode: defines.selection_mode): Color | null;
    /**
     * Flags that affect which entities will be selected.
     */
    get_selection_mode_flags(this: void, selection_mode: defines.selection_mode): SelectionModeFlags | null;
    /**
     * The number of ticks before this item spoils, or `0` if it does not spoil.
     */
    get_spoil_ticks(this: void, quality?: QualityID): uint;
    /**
     * The tile filter mode used by this selection tool.
     */
    get_tile_filter_mode(this: void, selection_mode: defines.selection_mode): PrototypeFilterMode | null;
    /**
     * The tile filters used by this selection tool.
     */
    get_tile_filters(this: void, selection_mode: defines.selection_mode): LuaTilePrototype[] | null;
    /**
     * Test whether this item prototype has a certain flag set.
     * @param flag The flag to test.
     */
    has_flag(this: void, flag: ItemPrototypeFlag): boolean;
    /**
     * If tiles area always included when doing selection with this selection tool prototype.
     */
    readonly always_include_tiles?: boolean;
    readonly ammo_category?: LuaAmmoCategoryPrototype;
    /**
     * The gun attack parameters.
     */
    readonly attack_parameters?: AttackParameters;
    readonly beacon_tint?: Color[];
    /**
     * The result of burning this item as fuel, if any.
     */
    readonly burnt_result?: LuaItemPrototype;
    /**
     * If this item can be mod-opened.
     */
    readonly can_be_mod_opened: boolean;
    /**
     * The capsule action for this capsule item prototype.
     */
    readonly capsule_action?: CapsuleAction;
    /**
     * The name of a {@link LuaModuleCategoryPrototype | runtime:LuaModuleCategoryPrototype}. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
     */
    readonly category?: string;
    /**
     * The collision box used by character entities when wearing this armor.
     */
    readonly collision_box?: BoundingBox;
    readonly default_import_location: LuaSpaceLocationPrototype;
    /**
     * The default label color used for this item with label, if any.
     */
    readonly default_label_color?: Color;
    readonly destroyed_by_dropping_trigger?: TriggerItem[];
    /**
     * If true, and this item with label has a label it is drawn in place of the normal number when held in the cursor.
     */
    readonly draw_label_for_cursor_render?: boolean;
    /**
     * The drawing box used by character entities when wearing this armor.
     */
    readonly drawing_box?: BoundingBox;
    /**
     * The durability message key used when displaying the durability of this tool.
     */
    readonly durability_description_key?: string;
    /**
     * The durability message value used when displaying the durability of this tool.
     */
    readonly durability_description_value?: string;
    /**
     * The number of entity filters this deconstruction item has.
     */
    readonly entity_filter_slots?: uint;
    /**
     * The prototype of this armor's equipment grid, if any.
     */
    readonly equipment_grid?: LuaEquipmentGridPrototype;
    /**
     * The durability message key used when displaying the durability of this tool in Factoriopedia.
     */
    readonly factoriopedia_durability_description_key?: string;
    /**
     * The filter mode used by this item with inventory.
     */
    readonly filter_mode?: 'none' | 'whitelist' | 'blacklist';
    /**
     * The flags for this item prototype.
     */
    readonly flags: ItemPrototypeFlags;
    /**
     * The acceleration multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_acceleration_multiplier: double;
    /**
     * Additional fuel acceleration multiplier per quality level.
     */
    readonly fuel_acceleration_multiplier_quality_bonus: double;
    /**
     * The fuel category, if any.
     */
    readonly fuel_category?: string;
    /**
     * The emissions multiplier if this is used as fuel.
     */
    readonly fuel_emissions_multiplier: double;
    readonly fuel_glow_color?: Color;
    /**
     * The fuel top speed multiplier when this item is used as fuel in a vehicle.
     */
    readonly fuel_top_speed_multiplier: double;
    /**
     * Additional fuel top speed multiplier per quality level.
     */
    readonly fuel_top_speed_multiplier_quality_bonus: double;
    /**
     * Fuel value when burned.
     */
    readonly fuel_value: float;
    /**
     * If this tool item has infinite durability.
     */
    readonly infinite?: boolean;
    readonly ingredient_to_weight_coefficient: double;
    /**
     * The main inventory size for item-with-inventory-prototype.
     */
    readonly inventory_size?: uint;
    readonly item_filters?: LuaItemPrototype[];
    readonly item_group_filters?: LuaGroup[];
    readonly item_subgroup_filters?: LuaGroup[];
    /**
     * The localised string used when the player attempts to put items into this item with inventory that aren't allowed.
     */
    readonly localised_filter_message?: LocalisedString;
    /**
     * Size of full magazine.
     */
    readonly magazine_size?: float;
    readonly manual_length_limit?: double;
    /**
     * Effects of this module.
     */
    readonly module_effects?: ModuleEffects;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Prototype of the equipment that will be created by placing this item in an equipment grid, if any.
     */
    readonly place_as_equipment_result?: LuaEquipmentPrototype;
    /**
     * The place-as-tile result if one is defined, if any.
     */
    readonly place_as_tile_result?: PlaceAsTileResult;
    /**
     * Prototype of the entity that will be created by placing this item, if any.
     */
    readonly place_result?: LuaEntityPrototype;
    /**
     * The result entity when planting this item as a seed.
     */
    readonly plant_result?: LuaEntityPrototype;
    /**
     * If this armor provides flight to character entities when worm.
     */
    readonly provides_flight?: boolean;
    readonly radius_color?: Color;
    /**
     * Prototypes of all rails possible to be used by this rail planner prototype.
     */
    readonly rails?: LuaEntityPrototype[];
    /**
     * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine.
     */
    readonly reload_time?: float;
    readonly requires_beacon_alt_mode?: boolean;
    /**
     * Resistances of this armor item, if any, indexed by damage type name.
     */
    readonly resistances?: Record<string, Resistance>;
    /**
     * The results of launching this item in a rocket.
     */
    readonly rocket_launch_products: Product[];
    /**
     * If this selection tool skips things covered by fog of war.
     */
    readonly skip_fog_of_war?: boolean;
    /**
     * The repairing speed if this is a repairing tool.
     */
    readonly speed?: float;
    /**
     * The spoil result of this item, if any
     */
    readonly spoil_result?: LuaItemPrototype;
    readonly spoil_to_trigger_result?: SpoilToTriggerResult;
    /**
     * Maximum stack size of the item specified by this prototype.
     */
    readonly stack_size: uint;
    /**
     * Is this item allowed to stack at all?
     */
    readonly stackable: boolean;
    /**
     * The rail support used by this rail planner.
     */
    readonly support?: LuaEntityPrototype;
    /**
     * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category.
     */
    readonly tier?: uint;
    /**
     * The number of tile filters this deconstruction item has.
     */
    readonly tile_filter_slots?: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Weight of this item
     */
    readonly weight: double;
}
/**
 * A reference to an item and count owned by some external entity.
 *
 * In most instances this is a simple reference as in: it points at a specific slot in an inventory and not the item in the slot.
 *
 * In the instance this references an item on a {@link LuaTransportLine | runtime:LuaTransportLine} the reference is only guaranteed to stay valid (and refer to the same item) as long as nothing changes the transport line.
 */
interface LuaItemStack extends LuaItemCommon {
    /**
     * Add ammo to this ammo item.
     * @param amount Amount of ammo to add.
     */
    add_ammo(this: void, amount: float): void;
    /**
     * Add durability to this tool item.
     * @param amount Amount of durability to add.
     */
    add_durability(this: void, amount: double): void;
    /**
     * Would a call to {@link LuaItemStack::set_stack | runtime:LuaItemStack::set_stack} succeed?
     * @param stack Stack that would be set, possibly `nil`.
     */
    can_set_stack(this: void, stack?: ItemStackIdentification): boolean;
    /**
     * Clear this item stack.
     */
    clear(this: void): void;
    /**
     * Creates the equipment grid for this item if it doesn't exist and this is an item-with-entity-data that supports equipment grids.
     */
    create_grid(this: void): LuaEquipmentGrid;
    /**
     * Remove ammo from this ammo item.
     * @param amount Amount of ammo to remove.
     */
    drain_ammo(this: void, amount: float): void;
    /**
     * Remove durability from this tool item.
     * @param amount Amount of durability to remove.
     */
    drain_durability(this: void, amount: double): void;
    /**
     * Export a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) to a string.
     * @returns The exported string
     */
    export_stack(this: void): string;
    /**
     * Import a supported item (blueprint, blueprint-book, deconstruction-planner, upgrade-planner, item-with-tags) from a string.
     * @param data The string to import
     * @returns 0 if the import succeeded with no errors. -1 if the import succeeded with errors. 1 if the import failed.
     */
    import_stack(this: void, data: string): int;
    /**
     * Set this item stack to another item stack.
     * @param stack Item stack to set it to. Omitting this parameter or passing `nil` will clear this item stack, as if {@link LuaItemStack::clear | runtime:LuaItemStack::clear} was called.
     * @returns Whether the stack was set successfully. Returns `false` if this stack was not {@link valid for write | runtime:LuaItemStack::can_set_stack}.
     */
    set_stack(this: void, stack?: ItemStackIdentification): boolean;
    /**
     * Spoils this item if the item can spoil.
     */
    spoil(this: void): void;
    /**
     * Swaps this item stack with the given item stack if allowed.
     * @returns Whether the 2 stacks were swapped successfully.
     */
    swap_stack(this: void, stack: LuaItemStack): boolean;
    /**
     * Transfers the given item stack into this item stack.
     * @returns `true` if the full stack was transferred.
     */
    transfer_stack(this: void, stack: ItemStackIdentification): boolean;
    /**
     * Use the capsule item with the entity as the source, targeting the given position.
     * @param entity The entity to use the capsule item with.
     * @param target_position The position to use the capsule item with.
     * @returns Array of the entities that were created by the capsule action.
     */
    use_capsule(this: void, entity: LuaEntity, target_position: MapPosition): LuaEntity[];
    /**
     * Number of items in this stack.
     */
    count: uint;
    /**
     * How much health the item has, as a number in range `[0, 1]`.
     */
    health: float;
    /**
     * If this is a module
     */
    readonly is_module: boolean;
    /**
     * If the item has additional data, returns LuaItem pointing at the extra data, otherwise returns nil.
     */
    readonly item?: LuaItem;
    /**
     * Prototype name of the item held in this stack.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Prototype of the item held in this stack.
     */
    readonly prototype: LuaItemPrototype;
    /**
     * The quality of this item.
     */
    readonly quality: LuaQualityPrototype;
    /**
     * The percent spoiled this item is if it spoils. `0` in the case of the item not spoiling.
     */
    spoil_percent: double;
    /**
     * The tick this item spoils, or `0` if it does not spoil. When writing, setting to anything < the current game tick will spoil the item instantly.
     */
    spoil_tick: uint;
    /**
     * Type of the item prototype.
     */
    readonly type: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Is this valid for reading? Differs from the usual `valid` in that `valid` will be `true` even if the item stack is blank but the entity that holds it is still valid.
     */
    readonly valid_for_read: boolean;
}
/**
 * Control behavior for lamps.
 */
interface LuaLampControlBehavior extends LuaGenericOnOffControlBehavior {
    blue_signal?: SignalID;
    /**
     * The color the lamp is showing, if any.
     */
    readonly color?: Color;
    color_mode: defines.control_behavior.lamp.color_mode;
    green_signal?: SignalID;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    red_signal?: SignalID;
    rgb_signal?: SignalID;
    /**
     * `true` if the lamp should set the color from the circuit network signals.
     */
    use_colors: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A lazily loaded value. For performance reasons, we sometimes return a custom lazily-loaded value type instead of the native Lua value. This custom type lazily constructs the necessary value when {@link LuaLazyLoadedValue::get | runtime:LuaLazyLoadedValue::get} is called, therefore preventing its unnecessary construction in some cases.
 *
 * An instance of LuaLazyLoadedValue is only valid during the event it was created from and cannot be saved.
 */
interface LuaLazyLoadedValue<T> {
    /**
     * Gets the value of this lazy loaded value.
     */
    get(this: void): T;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for loaders.
 */
interface LuaLoaderControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * `true` if the transfers between loader's belt and container should be pulsed to the circuit network
     */
    circuit_read_transfers: boolean;
    /**
     * `true` if filters are set from circuit network
     */
    circuit_set_filters: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Logistic cell of a particular {@link LuaEntity | runtime:LuaEntity}. A "Logistic Cell" is the given name for settings and properties used by what would normally be seen as a "Roboport". A logistic cell however doesn't have to be attached to the roboport entity (the character has one for the personal roboport).
 */
interface LuaLogisticCell {
    /**
     * Is a given position within the construction range of this cell?
     */
    is_in_construction_range(this: void, position: MapPosition): boolean;
    /**
     * Is a given position within the logistic range of this cell?
     */
    is_in_logistic_range(this: void, position: MapPosition): boolean;
    /**
     * Are two cells neighbours?
     */
    is_neighbour_with(this: void, other: LuaLogisticCell): boolean;
    /**
     * Radius at which the robots hover when waiting to be charged.
     */
    readonly charge_approach_distance: float;
    /**
     * Number of robots currently charging.
     */
    readonly charging_robot_count: uint;
    /**
     * Robots currently being charged.
     */
    readonly charging_robots: LuaEntity[];
    /**
     * Construction radius of this cell.
     */
    readonly construction_radius: float;
    /**
     * The network that owns this cell, if any.
     */
    readonly logistic_network?: LuaLogisticNetwork;
    /**
     * Logistic radius of this cell.
     */
    readonly logistic_radius: float;
    /**
     * Logistic connection distance of this cell.
     */
    readonly logistics_connection_distance: float;
    /**
     * `true` if this is a mobile cell. In vanilla, only the logistic cell created by a character's personal roboport is mobile.
     */
    readonly mobile: boolean;
    /**
     * Neighbouring cells.
     */
    readonly neighbours: LuaLogisticCell[];
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * This cell's owner.
     */
    readonly owner: LuaEntity;
    /**
     * Number of stationed construction robots in this cell.
     */
    readonly stationed_construction_robot_count: uint;
    /**
     * Number of stationed logistic robots in this cell.
     */
    readonly stationed_logistic_robot_count: uint;
    /**
     * Number of robots waiting to charge.
     */
    readonly to_charge_robot_count: uint;
    /**
     * Robots waiting to charge.
     */
    readonly to_charge_robots: LuaEntity[];
    /**
     * `true` if this cell is active.
     */
    readonly transmitting: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for logistic chests.
 */
interface LuaLogisticContainerControlBehavior extends LuaControlBehavior {
    /**
     * The circuit condition for the logistic container.
     */
    circuit_condition: CircuitConditionDefinition;
    /**
     * Whether the circuit condition is in effect
     */
    circuit_condition_enabled: boolean;
    /**
     * The circuit mode of operations for the logistic container. Can only be set on containers whose {@link logistic_mode | runtime:LuaEntityPrototype::logistic_mode} is set to `"requester"` or `"buffer"`.
     */
    circuit_exclusive_mode_of_operation: defines.control_behavior.logistic_container.exclusive_mode;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A single logistic network of a given force on a given surface.
 */
interface LuaLogisticNetwork {
    /**
     * Can the network satisfy a request for a given item and count.
     * @param item Item name to check.
     * @param count Count to check. Defaults to 1.
     * @param include_buffers Should buffers be considered? Defaults to false.
     * @returns Whether the network can satisfy the request.
     */
    can_satisfy_request(this: void, item: ItemWithQualityID, count?: uint, include_buffers?: boolean): boolean;
    /**
     * Find logistic cell closest to a given position.
     * @returns `nil` if no cell was found.
     */
    find_cell_closest_to(this: void, position: MapPosition): LuaLogisticCell | null;
    /**
     * Get item counts for the entire network, similar to how {@link LuaInventory::get_contents | runtime:LuaInventory::get_contents} does.
     * @returns List of all items in the network.
     */
    get_contents(this: void): ItemCountWithQuality[];
    /**
     * Count given or all items in the network or given members.
     * @param item Item name to count. If not given, gives counts of all items in the network.
     * @param member Logistic members to check. If not given, gives count in the entire network.
     */
    get_item_count(this: void, item?: ItemWithQualityID, member?: 'storage' | 'providers'): int;
    /**
     * Get the amount of items of the given type indexed by the storage member.
     * @param item Item name to check.
     */
    get_supply_counts(this: void, item: ItemWithQualityID): LogisticsNetworkSupplyCounts;
    /**
     * Gets the logistic points with of the given type indexed by the storage member.
     * @param item Item name to check.
     */
    get_supply_points(this: void, item: ItemWithQualityID): LogisticsNetworkSupplyPoints;
    /**
     * Insert items into the logistic network. This will actually insert the items into some logistic chests.
     * @param item What to insert.
     * @param members Which logistic members to insert the items to. `"storage-empty"` inserts into storage chests that are completely empty, `"storage-empty-slot"` inserts into storage chests that have an empty slot. If not specified, inserts items into the logistic network in the usual order.
     * @returns Number of items actually inserted.
     */
    insert(this: void, item: ItemStackIdentification, members?: 'storage' | 'storage-empty' | 'storage-empty-slot' | 'requester'): uint;
    /**
     * Remove items from the logistic network. This will actually remove the items from some logistic chests.
     * @param item What to remove.
     * @param members Which logistic members to remove from. If not specified, removes from the network in the usual order.
     * @returns Number of items removed.
     */
    remove_item(this: void, item: ItemStackIdentification, members?: 'active-provider' | 'passive-provider' | 'buffer' | 'storage'): uint;
    /**
     * Find a logistic point to drop the specific item stack.
     * @param table.stack Name of the item to drop off.
     * @param table.members When given, it will find from only the specific type of member. If not specified, selects with normal priorities.
     * @returns `nil` if no point was found.
     */
    select_drop_point(this: void, table: {
        stack: ItemStackIdentification;
        members?: 'storage' | 'storage-empty' | 'storage-empty-slot' | 'requester';
    }): LuaLogisticPoint | null;
    /**
     * Find the 'best' logistic point with this item ID and from the given position or from given chest type.
     * @param table.name Name of the item to pick up.
     * @param table.position When given, it will find the storage 'best' storage point from this position.
     * @param table.include_buffers Whether to consider buffer chests or not. Defaults to false. Only considered if selecting with position.
     * @param table.members When given, it will find from only the specific type of member. If not specified, selects with normal priorities. Not considered if position is specified.
     * @returns `nil` if no point was found.
     */
    select_pickup_point(this: void, table: {
        name: ItemWithQualityID;
        position?: MapPosition;
        include_buffers?: boolean;
        members?: 'active-provider' | 'passive-provider' | 'buffer' | 'storage';
    }): LuaLogisticPoint | null;
    /**
     * All active provider points in this network.
     */
    readonly active_provider_points: LuaLogisticPoint[];
    /**
     * The total number of construction robots in the network (idle and active + in roboports).
     */
    readonly all_construction_robots: uint;
    /**
     * The total number of logistic robots in the network (idle and active + in roboports).
     */
    readonly all_logistic_robots: uint;
    /**
     * Number of construction robots available for a job.
     */
    readonly available_construction_robots: uint;
    /**
     * Number of logistic robots available for a job.
     */
    readonly available_logistic_robots: uint;
    /**
     * All cells in this network.
     */
    readonly cells: LuaLogisticCell[];
    /**
     * All construction robots in this logistic network.
     */
    readonly construction_robots: LuaEntity[];
    /**
     * All things that have empty provider points in this network.
     */
    readonly empty_provider_points: LuaLogisticPoint[];
    /**
     * All entities that have empty logistic provider points in this network.
     */
    readonly empty_providers: LuaEntity[];
    /**
     * The force this logistic network belongs to.
     */
    readonly force: LuaForce;
    /**
     * All other entities that have logistic points in this network (inserters mostly).
     */
    readonly logistic_members: LuaEntity[];
    /**
     * All logistic robots in this logistic network.
     */
    readonly logistic_robots: LuaEntity[];
    /**
     * The unique logistic network ID.
     */
    readonly network_id: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * All passive provider points in this network.
     */
    readonly passive_provider_points: LuaLogisticPoint[];
    /**
     * All things that have provider points in this network.
     */
    readonly provider_points: LuaLogisticPoint[];
    /**
     * All entities that have logistic provider points in this network.
     */
    readonly providers: LuaEntity[];
    /**
     * All things that have requester points in this network.
     */
    readonly requester_points: LuaLogisticPoint[];
    /**
     * All entities that have logistic requester points in this network.
     */
    readonly requesters: LuaEntity[];
    /**
     * Maximum number of robots the network can work with. Currently only used for the personal roboport.
     */
    readonly robot_limit: uint;
    /**
     * All robots in this logistic network.
     */
    readonly robots: LuaEntity[];
    /**
     * All things that have storage points in this network.
     */
    readonly storage_points: LuaLogisticPoint[];
    /**
     * All entities that have logistic storage points in this network.
     */
    readonly storages: LuaEntity[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Logistic point of a particular {@link LuaEntity | runtime:LuaEntity}. A "Logistic point" is the name given for settings and properties used by requester, provider, and storage points in a given logistic network. These "points" don't have to be a logistic container but often are. One other entity that can own several points is the "character" character type entity.
 */
interface LuaLogisticPoint {
    /**
     * Adds a new logistic section to this logistic point if possible.
     * @param group The group to assign this section to.
     * @returns The added logistic section.
     */
    add_section(this: void, group?: string): LuaLogisticSection | null;
    /**
     * Gets section on the selected index, if it exists
     * @param section_index Index of the section
     */
    get_section(this: void, section_index: uint): LuaLogisticSection;
    /**
     * Removes the given logistic section if possible. Removal may fail if the section index is out of range or the section is not {@link manual | runtime:LuaLogisticSection::is_manual}.
     * @param section_index Index of the section
     * @returns Whether section was removed.
     */
    remove_section(this: void, section_index: uint): boolean;
    /**
     * Whether this logistic point is active, related to disabling logistics on player/spidertron.
     *
     * When the logistic point is disabled it won't request and auto trash will do nothing.
     */
    enabled: boolean;
    /**
     * If this logistic point is using the exact mode. In exact mode robots never over-deliver requests.
     */
    readonly exact: boolean;
    /**
     * The logistic filters for this logistic point, if this uses any.
     *
     * The returned array will always have an entry for each filter and will be indexed in sequence when not `nil`.
     */
    readonly filters?: CompiledLogisticFilter[];
    /**
     * The force of this logistic point.
     *
     * This will always be the same as the {@link LuaLogisticPoint::owner | runtime:LuaLogisticPoint::owner} force.
     */
    readonly force: LuaForce;
    /**
     * The Logistic member index of this logistic point.
     */
    readonly logistic_member_index: uint;
    readonly logistic_network: LuaLogisticNetwork;
    /**
     * The logistic mode.
     */
    readonly mode: defines.logistic_mode;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The {@link LuaEntity | runtime:LuaEntity} owner of this LuaLogisticPoint.
     */
    readonly owner: LuaEntity;
    /**
     * All logistic sections of this logistic point.
     */
    readonly sections: LuaLogisticSection[];
    /**
     * Amount of logistic sections this logistic point has.
     */
    readonly sections_count: uint;
    /**
     * Items targeted to be dropped off into this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts.
     */
    readonly targeted_items_deliver: Record<string, uint>;
    /**
     * Items targeted to be picked up from this logistic point by robots. The attribute is a dictionary mapping the item prototype names to their item counts.
     */
    readonly targeted_items_pickup: Record<string, uint>;
    /**
     * Whether this logistic point is set to trash unrequested items.
     */
    trash_not_requested: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Logistic section of a particular {@link LuaLogisticPoint | runtime:LuaLogisticPoint} or {@link LuaConstantCombinatorControlBehavior | runtime:LuaConstantCombinatorControlBehavior}.
 */
interface LuaLogisticSection {
    /**
     * Clears the logistic request and auto-trash from the given slot.
     *
     * This can only be called when the section {@link is manual | runtime:LuaLogisticSection::is_manual}.
     * @param slot_index Index of a slot to clear.
     */
    clear_slot(this: void, slot_index: LogisticFilterIndex): void;
    /**
     * Gets current settings of logistic request and auto-trash from the given slot.
     * @param slot_index Index of a slot to read.
     */
    get_slot(this: void, slot_index: LogisticFilterIndex): LogisticFilter;
    /**
     * Sets logistic request and auto-trash slot to the given value.
     *
     * This will silently fail if personal logistics are not researched yet.
     *
     * This can only be called when the section {@link is manual | runtime:LuaLogisticSection::is_manual}.
     * @param slot_index Index of a slot to set.
     * @param filter The details of the filter to set.
     */
    set_slot(this: void, slot_index: LogisticFilterIndex, filter: LogisticFilter): void;
    /**
     * Whether this section is active. This can only be written to when the section {@link is manual | runtime:LuaLogisticSection::is_manual}.
     */
    active: boolean;
    /**
     * The logistic filters for this section.
     *
     * This can only be written to when the section {@link is manual | runtime:LuaLogisticSection::is_manual}.
     */
    filters: LogisticFilter[];
    /**
     * Amount of filters this section has
     */
    readonly filters_count: uint;
    /**
     * The group this section belongs to.
     *
     * An empty string when in no group.
     *
     * This can only be written to when the section {@link is manual | runtime:LuaLogisticSection::is_manual}.
     */
    group: string;
    /**
     * The section index of this section.
     */
    readonly index: uint;
    /**
     * Shortcut to check whether {@link LuaLogisticSection::type | runtime:LuaLogisticSection::type} is equal to {@link manual | runtime:defines.logistic_section_type.manual}.
     */
    readonly is_manual: boolean;
    /**
     * Multiplier applied to all filters before they are used by game. This can only be written to when the section {@link is manual | runtime:LuaLogisticSection::is_manual}.
     */
    multiplier: float;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The {@link LuaEntity | runtime:LuaEntity} owner of this LuaLogisticSection.
     */
    readonly owner: LuaEntity;
    /**
     * The type of this logistic section. Sections that are not manual are controlled by game itself and may not be allowed to be changed by script.
     */
    readonly type: defines.logistic_section_type;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Logistic sections of an entity.
 */
interface LuaLogisticSections {
    /**
     * Adds a new logistic section if possible.
     * @param group The group to assign this section to.
     * @returns Logistic section if added.
     */
    add_section(this: void, group?: string): LuaLogisticSection | null;
    /**
     * Gets section on the selected index, if it exists.
     * @param section_index Index of the section.
     */
    get_section(this: void, section_index: uint): LuaLogisticSection | null;
    /**
     * Removes the given logistic section if possible. Removal may fail if the section index is out of range or the section is not {@link manual | runtime:LuaLogisticSection::is_manual}.
     * @param section_index Index of the section.
     * @returns Whether section was removed.
     */
    remove_section(this: void, section_index: uint): boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * All logistic sections of this entity.
     */
    readonly sections: LuaLogisticSection[];
    /**
     * Amount of logistic sections this entity has.
     */
    readonly sections_count: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for mining drills.
 */
interface LuaMiningDrillControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * `true` if this drill should send the resources in the field to the circuit network.
     *
     * Which resources depends on {@link LuaMiningDrillControlBehavior::resource_read_mode | runtime:LuaMiningDrillControlBehavior::resource_read_mode}
     */
    circuit_read_resources: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * If the mining drill should send just the resources in its area or the entire field it's on to the circuit network.
     */
    resource_read_mode: defines.control_behavior.mining_drill.resource_read_mode;
    /**
     * The resource entities that the mining drill will send information about to the circuit network or an empty array.
     */
    readonly resource_read_targets: LuaEntity[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a mod setting.
 */
interface LuaModSettingPrototype extends LuaPrototypeBase {
    /**
     * Whether this string setting allows blank values. `nil` if not a string setting.
     */
    readonly allow_blank?: boolean;
    /**
     * The allowed values for this setting. `nil` if this setting doesn't use the a fixed set of values.
     */
    readonly allowed_values?: string[] | int[] | double[];
    /**
     * Whether this string setting auto-trims values. `nil` if not a string setting
     */
    readonly auto_trim?: boolean;
    /**
     * The default value of this setting.
     */
    readonly default_value: boolean | double | int | string | Color;
    /**
     * The maximum value for this setting. `nil` if this setting type doesn't support a maximum.
     */
    readonly maximum_value?: double | int;
    /**
     * The minimum value for this setting. `nil` if this setting type doesn't support a minimum.
     */
    readonly minimum_value?: double | int;
    /**
     * The mod that owns this setting.
     */
    readonly mod: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly setting_type: 'startup' | 'runtime-global' | 'runtime-per-user';
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a module category.
 */
interface LuaModuleCategoryPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a named noise expression.
 */
interface LuaNamedNoiseExpression extends LuaPrototypeBase {
    /**
     * The expression itself.
     */
    readonly expression: string;
    /**
     * Name of the property that this expression is intended to provide a value for, if any.
     */
    readonly intended_property: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a named noise function.
 */
interface LuaNamedNoiseFunction extends LuaPrototypeBase {
    readonly expression: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of an optimized particle.
 */
interface LuaParticlePrototype extends LuaPrototypeBase {
    readonly ended_in_water_trigger_effect: TriggerEffectItem;
    readonly ended_on_ground_trigger_effect: TriggerEffectItem;
    readonly fade_out_time: uint;
    readonly life_time: uint;
    readonly mining_particle_frame_speed: float;
    readonly movement_modifier: float;
    readonly movement_modifier_when_on_ground: float;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly regular_trigger_effect: TriggerEffectItem;
    readonly regular_trigger_effect_frequency: uint;
    readonly render_layer: RenderLayer;
    readonly render_layer_when_on_ground: RenderLayer;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    readonly vertical_acceleration: float;
}
/**
 * A permission group that defines what players in this group are allowed to do.
 */
interface LuaPermissionGroup {
    /**
     * Adds the given player to this group.
     * @returns Whether the player was added.
     */
    add_player(this: void, player: PlayerIdentification): boolean;
    /**
     * Whether this group allows the given action.
     * @param action The action in question.
     */
    allows_action(this: void, action: defines.input_action): boolean;
    /**
     * Destroys this group.
     * @returns Whether the group was successfully destroyed.
     */
    destroy(this: void): boolean;
    /**
     * Removes the given player from this group.
     * @returns Whether the player was removed.
     */
    remove_player(this: void, player: PlayerIdentification): boolean;
    /**
     * Sets whether this group allows the performance the given action.
     * @param action The action in question.
     * @param allow_action Whether to allow the specified action.
     * @returns Whether the value was successfully applied.
     */
    set_allows_action(this: void, action: defines.input_action, allow_action: boolean): boolean;
    /**
     * The group ID
     */
    readonly group_id: uint;
    /**
     * The name of this group. Setting the name to `nil` or an empty string sets the name to the default value.
     */
    name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The players in this group.
     */
    readonly players: LuaPlayer[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * All permission groups.
 */
interface LuaPermissionGroups {
    /**
     * Creates a new permission group.
     * @returns `nil` if the calling player doesn't have permission to make groups.
     */
    create_group(this: void, name?: string): LuaPermissionGroup | null;
    /**
     * Gets the permission group with the given name or group ID.
     * @returns `nil` if there is no matching group.
     */
    get_group(this: void, group: string | uint): LuaPermissionGroup | null;
    /**
     * All of the permission groups.
     */
    readonly groups: LuaPermissionGroup[];
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * The runtime values of a planet
 */
interface LuaPlanet {
    /**
     * Associates the given surface with this planet. Surface must not already be associated with a planet and the planet must not already have an associated surface.
     *
     * Planet must not be using {@link entities_require_heating | runtime:LuaSpaceLocationPrototype::entities_require_heating}.
     * @param surface The surface to be associated.
     */
    associate_surface(this: void, surface: SurfaceIdentification): void;
    /**
     * Creates the associated surface if one doesn't already exist.
     */
    create_surface(this: void): LuaSurface;
    /**
     * Resets the map gen settings on this planet to the default from-prototype state.
     */
    reset_map_gen_settings(this: void): void;
    /**
     * The planets name.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly prototype: LuaSpaceLocationPrototype;
    /**
     * The surface for this planet if one currently exists.
     *
     * Planets do not default generate their surface. {@link LuaPlanet::create_surface | runtime:LuaPlanet::create_surface} can be used to force the surface to exist.
     *
     * {@link LuaPlanet::associate_surface | runtime:LuaPlanet::associate_surface} can be used to create an association with an existing surface.
     */
    readonly surface: LuaSurface;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A player in the game. Pay attention that a player may or may not have a character, which is the {@link LuaEntity | runtime:LuaEntity} of the little guy running around the world doing things.
 */
interface LuaPlayer extends LuaControl {
    /**
     * Gets a copy of the currently selected blueprint in the clipboard queue into the player's cursor, as if the player activated Paste.
     */
    activate_paste(this: void): void;
    /**
     * Adds an alert to this player for the given entity of the given alert type.
     */
    add_alert(this: void, entity: LuaEntity, type: defines.alert_type): void;
    /**
     * Adds a custom alert to this player.
     * @param entity If the alert is clicked, the map will open at the position of this entity.
     */
    add_custom_alert(this: void, entity: LuaEntity, icon: SignalID, message: LocalisedString, show_on_map: boolean): void;
    /**
     * Adds the given recipe to the list of recipe notifications for this player.
     * @param recipe Recipe to add.
     */
    add_recipe_notification(this: void, recipe: RecipeID): void;
    /**
     * Adds the given blueprint to this player's clipboard queue.
     * @param blueprint The blueprint to add.
     */
    add_to_clipboard(this: void, blueprint: LuaItemStack): void;
    /**
     * Associates a character with this player.
     *
     * The character must not be connected to any controller.
     *
     * If this player is currently disconnected (see {@link LuaPlayer::connected | runtime:LuaPlayer::connected}) the character will be immediately "logged off".
     *
     * See {@link LuaPlayer::get_associated_characters | runtime:LuaPlayer::get_associated_characters} for more information.
     * @param character The character entity.
     */
    associate_character(this: void, character: LuaEntity): void;
    /**
     * Builds whatever is in the cursor on the surface the player is on. The cursor stack will automatically be reduced as if the player built normally.
     * @param table.position Where the entity would be placed
     * @param table.direction Direction the entity would be placed
     * @param table.mirror Whether to mirror the entity
     * @param table.build_mode Which build mode should be used instead of normal build. Defaults to normal.
     * @param table.terrain_building_size The size for building terrain if building terrain. Defaults to 2.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped.
     */
    build_from_cursor(this: void, table: {
        position: MapPosition;
        direction?: defines.direction;
        mirror?: boolean;
        build_mode?: defines.build_mode;
        terrain_building_size?: uint;
        skip_fog_of_war?: boolean;
    }): void;
    /**
     * Checks if this player can build what ever is in the cursor on the surface the player is on.
     * @param table.position Where the entity would be placed
     * @param table.direction Direction the entity would be placed
     * @param table.build_mode Which build mode should be used instead of normal build. Defaults to normal.
     * @param table.terrain_building_size The size for building terrain if building terrain. Defaults to 2.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped.
     */
    can_build_from_cursor(this: void, table: {
        position: MapPosition;
        direction?: defines.direction;
        build_mode?: defines.build_mode;
        terrain_building_size?: uint;
        skip_fog_of_war?: boolean;
    }): boolean;
    /**
     * Checks if this player can build the given entity at the given location on the surface the player is on.
     * @param table.name Name of the entity to check.
     * @param table.position Where the entity would be placed.
     * @param table.direction Direction the entity would be placed. Defaults to `north`.
     */
    can_place_entity(this: void, table: {
        name: EntityID;
        position: MapPosition;
        direction?: defines.direction;
    }): boolean;
    /**
     * Clear the chat console.
     */
    clear_console(this: void): void;
    /**
     * Invokes the "clear cursor" action on the player as if the user pressed it.
     * @returns Whether the cursor is now empty.
     */
    clear_cursor(this: void): boolean;
    /**
     * Clears the blinking of the inventory based on insertion of items
     */
    clear_inventory_highlights(this: void): void;
    /**
     * Clear any active flying texts for this player.
     */
    clear_local_flying_texts(this: void): void;
    /**
     * Clears all recipe notifications for this player.
     */
    clear_recipe_notifications(this: void): void;
    /**
     * Clears the players selection tool selection position.
     */
    clear_selection(this: void): void;
    /**
     * Asks the player if they would like to connect to the given server.
     *
     * This only does anything when used on a multiplayer peer. Single player and server hosts will ignore the prompt.
     * @param table.address The server (address:port) if port is not given the default Factorio port is used.
     * @param table.name The name of the server.
     * @param table.password The password if different from the one used to join this game. Note, if the current password is not empty but the one required to join the new server is an empty string should be given for this field.
     */
    connect_to_server(this: void, table: {
        address: string;
        name?: LocalisedString;
        description?: LocalisedString;
        password?: string;
    }): void;
    /**
     * Creates and attaches a character entity to this player.
     *
     * The player must not have a character already connected and must be online (see {@link LuaPlayer::connected | runtime:LuaPlayer::connected}).
     * @param character The character to create else the default is used.
     * @returns Whether the character was created.
     */
    create_character(this: void, character?: EntityWithQualityID): boolean;
    /**
     * Spawn flying text that is only visible to this player. Either `position` or `create_at_cursor` are required. When `create_at_cursor` is `true`, all parameters other than `text` are ignored.
     *
     * If no custom `speed` is set and the text is longer than 25 characters, its `time_to_live` and `speed` are dynamically adjusted to give players more time to read it.
     *
     * Local flying text is not saved, which means it will disappear after a save/load-cycle.
     * @param table.text The flying text to show.
     * @param table.position The location on the map at which to show the flying text.
     * @param table.create_at_cursor If `true`, the flying text is created at the player's cursor. Defaults to `false`.
     * @param table.color The color of the flying text. Defaults to white text.
     * @param table.time_to_live The amount of ticks that the flying text will be shown for. Defaults to `80`.
     * @param table.speed The speed at which the text rises upwards in tiles/second. Can't be a negative value.
     */
    create_local_flying_text(this: void, table: {
        text: LocalisedString;
        position?: MapPosition;
        create_at_cursor?: boolean;
        color?: Color;
        time_to_live?: uint;
        speed?: double;
    }): void;
    /**
     * Disables alerts for the given alert category.
     * @returns Whether the alert type was disabled (false if it was already disabled).
     */
    disable_alert(this: void, alert_type: defines.alert_type): boolean;
    /**
     * Disable recipe groups.
     */
    disable_recipe_groups(this: void): void;
    /**
     * Disable recipe subgroups.
     */
    disable_recipe_subgroups(this: void): void;
    /**
     * Disassociates a character from this player. This is functionally the same as setting {@link LuaEntity::associated_player | runtime:LuaEntity::associated_player} to `nil`.
     *
     * See {@link LuaPlayer::get_associated_characters | runtime:LuaPlayer::get_associated_characters} for more information.
     * @param character The character entity
     */
    disassociate_character(this: void, character: LuaEntity): void;
    /**
     * Start/end wire dragging at the specified location, wire type is based on the cursor contents
     * @param table.position Position at which cursor was clicked. Used only to decide which side of arithmetic combinator, decider combinator or power switch is to be connected. Entity itself to be connected is based on the player's selected entity.
     * @returns `true` if the action did something
     */
    drag_wire(this: void, table: {
        position: MapPosition;
    }): boolean;
    /**
     * Enables alerts for the given alert category.
     * @returns Whether the alert type was enabled (false if it was already enabled).
     */
    enable_alert(this: void, alert_type: defines.alert_type): boolean;
    /**
     * Enable recipe groups.
     */
    enable_recipe_groups(this: void): void;
    /**
     * Enable recipe subgroups.
     */
    enable_recipe_subgroups(this: void): void;
    /**
     * Enters the given space platform if possible.
     * @returns If the player entered the platform.
     */
    enter_space_platform(this: void, space_platform: SpacePlatformIdentification): boolean;
    /**
     * Exit the current cutscene. Errors if not in a cutscene.
     */
    exit_cutscene(this: void): void;
    /**
     * Gets which quick bar page is being used for the given screen page or `nil` if not known.
     * @param index The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number of bars on the screen to account for the interface config setting change.
     */
    get_active_quick_bar_page(this: void, index: uint): uint8 | null;
    /**
     * Get all alerts matching the given filters, or all alerts if no filters are given.
     * @returns A mapping of surface index to an array of arrays of {@link alerts | runtime:Alert} indexed by the {@link alert type | runtime:defines.alert_type}.
     */
    get_alerts(this: void, table: {
        entity?: LuaEntity;
        prototype?: LuaEntityPrototype;
        position?: MapPosition;
        type?: defines.alert_type;
        surface?: SurfaceIdentification;
    }): Record<uint, Record<defines.alert_type, Alert[]>>;
    /**
     * The characters associated with this player.
     *
     * The array will always be empty when the player is disconnected (see {@link LuaPlayer::connected | runtime:LuaPlayer::connected}) regardless of there being associated characters.
     *
     * Characters associated with this player will be logged off when this player disconnects but are not controlled by any player.
     */
    get_associated_characters(this: void): LuaEntity[];
    /**
     * Get the current goal description, as a localised string.
     */
    get_goal_description(this: void): LocalisedString;
    /**
     * Gets the filter for this map editor infinity filters at the given index or `nil` if the filter index doesn't exist or is empty.
     * @param index The index to get.
     */
    get_infinity_inventory_filter(this: void, index: uint): InfinityInventoryFilter | null;
    /**
     * Gets the quick bar filter for the given slot or `nil`.
     * @param index The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     */
    get_quick_bar_slot(this: void, index: uint): LuaItemPrototype | null;
    /**
     * If the given alert type is currently enabled.
     */
    is_alert_enabled(this: void, alert_type: defines.alert_type): boolean;
    /**
     * If the given alert type is currently muted.
     */
    is_alert_muted(this: void, alert_type: defines.alert_type): boolean;
    /**
     * Is a custom Lua shortcut currently available?
     * @param prototype_name Prototype name of the custom shortcut.
     */
    is_shortcut_available(this: void, prototype_name: string): boolean;
    /**
     * Is a custom Lua shortcut currently toggled?
     * @param prototype_name Prototype name of the custom shortcut.
     */
    is_shortcut_toggled(this: void, prototype_name: string): boolean;
    /**
     * Jump to the specified cutscene waypoint. Only works when the player is viewing a cutscene.
     */
    jump_to_cutscene_waypoint(this: void, waypoint_index: uint): void;
    /**
     * Ejects this player from the current space platform and lands on the current planet.
     * @returns If the player successfully landed on the planet.
     */
    land_on_planet(this: void): boolean;
    /**
     * Ejects this player from the current space platform if in a platform. The player is left on the platform at the position of the hub.
     */
    leave_space_platform(this: void): void;
    /**
     * Mutes alerts for the given alert category.
     * @returns Whether the alert type was muted (false if it was already muted).
     */
    mute_alert(this: void, alert_type: defines.alert_type): boolean;
    /**
     * Invokes the "smart pipette" action on the player as if the user pressed it.
     * @param allow_ghost Defaults to false.
     * @returns Whether the smart pipette found something to place.
     */
    pipette_entity(this: void, entity: EntityWithQualityID, allow_ghost?: boolean): boolean;
    /**
     * Play a sound for this player.
     *
     * The sound is not played if its location is not {@link charted | runtime:LuaForce::chart} for this player.
     * @param table.path The sound to play.
     * @param table.position Where the sound should be played. If not given, it's played at the current position of the player.
     * @param table.volume_modifier The volume of the sound to play. Must be between 0 and 1 inclusive.
     * @param table.override_sound_type The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     */
    play_sound(this: void, table: {
        path: SoundPath;
        position?: MapPosition;
        volume_modifier?: double;
        override_sound_type?: SoundType;
    }): void;
    /**
     * Print text to the chat console.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(this: void, message: LocalisedString, print_settings?: PrintSettings): void;
    /**
     * Print entity statistics to the player's console.
     * @param entities Entity prototypes to get statistics for. If not specified or empty, display statistics for all entities.
     */
    print_entity_statistics(this: void, entities?: EntityWithQualityID[]): void;
    /**
     * Print LuaObject counts per mod.
     */
    print_lua_object_statistics(this: void): void;
    /**
     * Print construction robot job counts to the players console.
     */
    print_robot_jobs(this: void): void;
    /**
     * Removes all alerts matching the given filters or if an empty filters table is given all alerts are removed.
     */
    remove_alert(this: void, table: {
        entity?: LuaEntity;
        prototype?: EntityID;
        position?: MapPosition;
        type?: defines.alert_type;
        surface?: SurfaceIdentification;
        icon?: SignalID;
        message?: LocalisedString;
    }): void;
    /**
     * Requests a translation for the given localised string. If the request is successful, the {@link on_string_translated | runtime:on_string_translated} event will be fired with the results.
     *
     * Does nothing if this player is not connected (see {@link LuaPlayer::connected | runtime:LuaPlayer::connected}).
     * @returns The unique ID for the requested translation.
     */
    request_translation(this: void, localised_string: LocalisedString): uint | null;
    /**
     * Requests translation for the given set of localised strings. If the request is successful, a {@link on_string_translated | runtime:on_string_translated} event will be fired for each string with the results.
     *
     * Does nothing if this player is not connected (see {@link LuaPlayer::connected | runtime:LuaPlayer::connected}).
     * @returns The unique IDs for the requested translations.
     */
    request_translations(this: void, localised_strings: LocalisedString[]): uint[] | null;
    /**
     * Sets which quick bar page is being used for the given screen page.
     * @param screen_index The screen page. Index 1 is the top row in the gui. Index can go beyond the visible number of bars on the screen to account for the interface config setting change.
     * @param page_index The new quick bar page.
     */
    set_active_quick_bar_page(this: void, screen_index: uint, page_index: uint): void;
    /**
     * Set the controller type of the player.
     *
     * Setting a player to {@link defines.controllers.editor | runtime:defines.controllers.editor} auto promotes the player to admin and enables cheat mode. Setting a player to {@link defines.controllers.editor | runtime:defines.controllers.editor} also requires the calling player be an admin.
     * @param table.type Which controller to use.
     * @param table.character Entity to control. Mandatory when `type` is {@link defines.controllers.character | runtime:defines.controllers.character}, ignored otherwise.
     * @param table.waypoints List of waypoints for the cutscene controller. This parameter is mandatory when `type` is {@link defines.controllers.cutscene | runtime:defines.controllers.cutscene}.
     * @param table.start_position If specified and `type` is {@link defines.controllers.cutscene | runtime:defines.controllers.cutscene}, the cutscene will start at this position. If not given the start position will be the player position.
     * @param table.start_zoom If specified and `type` is {@link defines.controllers.cutscene | runtime:defines.controllers.cutscene}, the cutscene will start at this zoom level. If not given the start zoom will be the players zoom.
     * @param table.final_transition_time If specified and `type` is {@link defines.controllers.cutscene | runtime:defines.controllers.cutscene}, it is the time in ticks it will take for the camera to pan from the final waypoint back to the starting position. If not given the camera will not pan back to the start position/zoom.
     * @param table.chart_mode_cutoff If specified and `type` is {@link defines.controllers.cutscene | runtime:defines.controllers.cutscene}, the game will switch to chart-mode (map zoomed out) rendering when the zoom level is less than this value.
     * @param table.position If specified and `type` is {@link defines.controllers.remote | runtime:defines.controllers.remote}, the position the remote controller will be centered on.
     * @param table.surface If specified and `type` is {@link defines.controllers.remote | runtime:defines.controllers.remote}, the surface the remote controller will be put on.
     */
    set_controller(this: void, table: {
        type: defines.controllers;
        character?: LuaEntity;
        waypoints?: CutsceneWaypoint;
        start_position?: MapPosition;
        start_zoom?: double;
        final_transition_time?: uint;
        chart_mode_cutoff?: double;
        position?: MapPosition;
        surface?: SurfaceIdentification;
    }): void;
    /**
     * Setup the screen to be shown when the game is finished.
     * @param message Message to be shown.
     * @param file Path to image to be shown.
     */
    set_ending_screen_data(this: void, message: LocalisedString, file?: string): void;
    /**
     * Set the text in the goal window (top left).
     * @param text The text to display. Lines can be delimited with `\n`. Passing an empty string or omitting this parameter entirely will make the goal window disappear.
     * @param only_update When `true`, won't play the "goal updated" sound.
     */
    set_goal_description(this: void, text?: LocalisedString, only_update?: boolean): void;
    /**
     * Sets the filter for this map editor infinity filters at the given index.
     * @param index The index to set.
     * @param filter The new filter or `nil` to clear the filter.
     */
    set_infinity_inventory_filter(this: void, index: uint, filter: InfinityInventoryFilter | nil): void;
    /**
     * Sets the quick bar filter for the given slot. If a {@link LuaItemStack | runtime:LuaItemStack} is provided, the slot will be set to that particular item instance if it has extra data, for example a specific blueprint or spidertron remote. Otherwise, it will be set to all items of that prototype, for example iron plates.
     * @param index The slot index. 1 for the first slot of page one, 2 for slot two of page one, 11 for the first slot of page 2, etc.
     * @param filter The filter or `nil` to clear it.
     */
    set_quick_bar_slot(this: void, index: uint, filter: LuaItemStack | ItemWithQualityID | nil): void;
    /**
     * Make a custom Lua shortcut available or unavailable.
     * @param prototype_name Prototype name of the custom shortcut.
     */
    set_shortcut_available(this: void, prototype_name: string, available: boolean): void;
    /**
     * Toggle or untoggle a custom Lua shortcut
     * @param prototype_name Prototype name of the custom shortcut.
     */
    set_shortcut_toggled(this: void, prototype_name: string, toggled: boolean): void;
    /**
     * Starts selection with selection tool from the specified position. Does nothing if the players cursor is not a selection tool.
     * @param position The position to start selection from.
     * @param selection_mode The type of selection to start.
     */
    start_selection(this: void, position: MapPosition, selection_mode: defines.selection_mode): void;
    /**
     * Toggles this player into or out of the map editor. Does nothing if this player isn't an admin or if the player doesn't have permission to use the map editor.
     */
    toggle_map_editor(this: void): void;
    /**
     * Unlock the achievements of the given player. This has any effect only when this is the local player, the achievement isn't unlocked so far and the achievement is of the type "achievement".
     * @param name name of the achievement to unlock
     */
    unlock_achievement(this: void, name: string): void;
    /**
     * Unmutes alerts for the given alert category.
     * @returns Whether the alert type was unmuted (false if it was wasn't muted).
     */
    unmute_alert(this: void, alert_type: defines.alert_type): boolean;
    /**
     * Uses the current item in the cursor if it's a capsule or does nothing if not.
     * @param position Where the item would be used.
     */
    use_from_cursor(this: void, position: MapPosition): void;
    /**
     * `true` if the player is an admin.
     *
     * Trying to change player admin status from the console when you aren't an admin does nothing.
     */
    admin: boolean;
    /**
     * How many ticks since the last action of this player.
     */
    readonly afk_time: uint;
    /**
     * If the main inventory will be auto sorted.
     */
    readonly auto_sort_main_inventory: boolean;
    /**
     * The item stack containing a blueprint to be setup.
     */
    readonly blueprint_to_setup: LuaItemStack;
    /**
     * Records contained in the player's blueprint library.
     */
    readonly blueprints: LuaRecord[];
    /**
     * The entity being centered on in remote view.
     *
     * When writing, the player will be switched to remote view (if not already in it) and centered on the given entity.
     */
    centered_on?: LuaEntity;
    /**
     * The character attached to this player, if any. Returns `nil` when the player is disconnected (see {@link LuaPlayer::connected | runtime:LuaPlayer::connected}).
     */
    character?: LuaEntity;
    /**
     * The color used when this player talks in game.
     */
    chat_color: Color;
    /**
     * The color associated with the player. This will be used to tint the player's character as well as their buildings and vehicles.
     */
    color: Color;
    /**
     * `true` if the player is currently connected to the game.
     */
    readonly connected: boolean;
    readonly controller_type: defines.controllers;
    /**
     * Returns true if the current item stack in cursor will be destroyed after clearing the cursor. Manually putting it into inventory still preserves the item. If the cursor stack is not one of the supported types (blueprint, blueprint-book, deconstruction-planner, upgrade-planner), write operation will be silently ignored.
     */
    cursor_stack_temporary: boolean;
    /**
     * When in a cutscene; the character this player would be using once the cutscene is over, if any. Returns `nil` when the player is disconnected (see {@link LuaPlayer::connected | runtime:LuaPlayer::connected}).
     */
    readonly cutscene_character?: LuaEntity;
    /**
     * The display density scale for this player. The display density scale is the factor of {@link LuaPlayer::display_scale | runtime:LuaPlayer::display_scale} that is determined by the physical DPI of the screen that Factorio is running on. In most cases, the default value is 1. If the player is playing on a high-density display, this value may be 2 or greater.
     *
     * During {@link on_player_created | runtime:on_player_created}, this attribute will always return a scale of `1`. To get the actual scale, listen to the {@link on_player_display_density_scale_changed | runtime:on_player_display_density_scale_changed} event raised shortly afterwards.
     */
    readonly display_density_scale: double;
    /**
     * The display resolution for this player.
     *
     * During {@link on_player_created | runtime:on_player_created}, this attribute will always return a resolution of `{width=1920, height=1080}`. To get the actual resolution, listen to the {@link on_player_display_resolution_changed | runtime:on_player_display_resolution_changed} event raised shortly afterwards.
     */
    readonly display_resolution: DisplayResolution;
    /**
     * The display scale for this player.
     *
     * During {@link on_player_created | runtime:on_player_created}, this attribute will always return a scale of `1`. To get the actual scale, listen to the {@link on_player_display_scale_changed | runtime:on_player_display_scale_changed} event raised shortly afterwards.
     */
    readonly display_scale: double;
    /**
     * The wire drag target for this player, if any.
     */
    readonly drag_target?: DragTarget;
    /**
     * The source entity used during entity settings copy-paste, if any.
     */
    readonly entity_copy_source?: LuaEntity;
    /**
     * The player's game view settings.
     */
    game_view_settings: GameViewSettings;
    readonly gui: LuaGui;
    /**
     * The original location of the item in the cursor, marked with a hand. `nil` if the cursor stack is empty. When writing, the specified inventory slot must be empty and the cursor stack must not be empty.
     */
    hand_location?: ItemStackLocation;
    /**
     * This player's index in {@link LuaGameScript::players | runtime:LuaGameScript::players} (unique ID). It is assigned when a player is created, and remains so (even when the player is not {@link connected | runtime:LuaPlayer::connected}) until the player is irreversibly {@link removed | runtime:on_player_removed}. Indexes of removed players can be reused.
     */
    readonly index: uint;
    /**
     * The filters for this map editor infinity inventory settings.
     */
    infinity_inventory_filters: InfinityInventoryFilter[];
    /**
     * The input method of the player, mouse and keyboard or game controller
     */
    readonly input_method: defines.input_method;
    /**
     * At what tick this player was last online.
     */
    readonly last_online: uint;
    /**
     * The active locale for this player.
     *
     * During {@link on_player_created | runtime:on_player_created}, this attribute will be `en`. To get the actual value, listen to the {@link on_player_locale_changed | runtime:on_player_locale_changed} event raised shortly afterwards.
     */
    readonly locale: string;
    /**
     * The player's map view settings. To write to this, use a table containing the fields that should be changed.
     */
    map_view_settings: MapViewSettings;
    /**
     * `true` if the minimap is visible.
     */
    minimap_enabled: boolean;
    /**
     * The current per-player settings for the this player, indexed by prototype name. Returns the same structure as {@link LuaSettings::get_player_settings | runtime:LuaSettings::get_player_settings}. This table becomes invalid if its associated player does.
     *
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting | runtime:ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     * @example ```
    -- Change the value of the "active_lifestyle" setting
    player.mod_settings["active_lifestyle"] = {value = true}
    ```
     */
    readonly mod_settings: Record<string, ModSetting>;
    /**
     * The player's username.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * How many ticks did this player spend playing this save (all sessions combined).
     */
    readonly online_time: uint;
    /**
     * `true` if the player opened itself. I.e. if they opened the character or god-controller GUI.
     */
    readonly opened_self: boolean;
    /**
     * The permission group this player is part of, if any.
     */
    permission_group?: LuaPermissionGroup;
    /**
     * The player's "physical" controller. When a player is in the remote controller, this specifies the controller they will return to. When the player is not in the remote controller, this is equivalent to {@link LuaPlayer::controller_type | runtime:LuaPlayer::controller_type}.
     */
    readonly physical_controller_type: defines.controllers;
    /**
     * The current position of this players physical controller.
     */
    readonly physical_position: MapPosition;
    /**
     * The surface this players physical controller is on.
     */
    readonly physical_surface: LuaSurface;
    /**
     * Unique ID associated with the surface this players physical controller is currently on.
     */
    readonly physical_surface_index: uint;
    /**
     * The current vehicle of this players physical controller.
     */
    readonly physical_vehicle: MapPosition;
    /**
     * If items not included in this map editor infinity inventory filters should be removed.
     */
    remove_unfiltered_items: boolean;
    /**
     * The render mode of the player, like map or zoom to world. The render mode can be set using {@link LuaPlayer::open_map | runtime:LuaPlayer::open_map}, {@link LuaPlayer::zoom_to_world | runtime:LuaPlayer::zoom_to_world} and {@link LuaPlayer::close_map | runtime:LuaPlayer::close_map}.
     */
    readonly render_mode: defines.render_mode;
    /**
     * If `true`, circle and name of given player is rendered on the map/chart.
     */
    show_on_map: boolean;
    /**
     * If `true`, zoom-to-world noise effect will be disabled and environmental sounds will be based on zoom-to-world view instead of position of player's character.
     */
    spectator: boolean;
    /**
     * All SpiderVehicles currently selected by the player, if they are holding a spidertron remote.
     */
    spidertron_remote_selection?: LuaEntity[];
    /**
     * The stashed controller type, if any. This is mainly useful when a player is in the map editor.
     */
    readonly stashed_controller_type?: defines.controllers;
    /**
     * The tag that is shown after the player in chat, on the map and above multiplayer selection rectangles.
     */
    tag: string;
    /**
     * The number of ticks until this player will respawn. `nil` if this player is not waiting to respawn.
     *
     * Set to `nil` to immediately respawn the player.
     *
     * Set to any positive value to trigger the respawn state for this player.
     */
    ticks_to_respawn?: uint;
    /**
     * The undo and redo stack for this player.
     */
    readonly undo_redo_stack: LuaUndoRedoStack;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * The player's zoom-level.
     */
    zoom: double;
}
/**
 * Prototype of a procession inheritance group which synchronizes offsets between procession steps.
 */
interface LuaProcessionLayerInheritanceGroupPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a procession.
 */
interface LuaProcessionPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * An object used to measure script performance.
 *
 * Since performance is non-deterministic, these objects don't allow reading the raw time values from Lua. They can be used anywhere a {@link LocalisedString | runtime:LocalisedString} is used, except for {@link LuaGuiElement::add | runtime:LuaGuiElement::add}'s LocalisedString arguments, {@link LuaSurface::create_entity | runtime:LuaSurface::create_entity}'s `text` argument, and {@link LuaEntity::add_market_item | runtime:LuaEntity::add_market_item}.
 */
interface LuaProfiler {
    /**
     * Add the duration of another timer to this timer. Useful to reduce start/stop overhead when accumulating time onto many timers at once.
     *
     * If other is running, the time to now will be added.
     * @param other The timer to add to this timer.
     */
    add(this: void, other: LuaProfiler): void;
    /**
     * Divides the current duration by a set value. Useful for calculating the average of many iterations.
     *
     * Does nothing if this isn't stopped.
     * @param number The number to divide by. Must be > 0.
     */
    divide(this: void, number: double): void;
    /**
     * Resets the clock, also restarting it.
     */
    reset(this: void): void;
    /**
     * Start the clock again, without resetting it.
     */
    restart(this: void): void;
    /**
     * Stops the clock.
     */
    stop(this: void): void;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for programmable speakers.
 */
interface LuaProgrammableSpeakerControlBehavior extends LuaControlBehavior {
    circuit_condition: CircuitConditionDefinition;
    circuit_parameters: ProgrammableSpeakerCircuitParameters;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Base for all prototype classes.
 */
interface LuaPrototypeBase {
    /**
     * Group of this prototype.
     */
    readonly group: LuaGroup;
    readonly hidden: boolean;
    readonly hidden_in_factoriopedia: boolean;
    readonly localised_description: LocalisedString;
    readonly localised_name: LocalisedString;
    /**
     * Name of this prototype.
     */
    readonly name: string;
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string;
    readonly parameter: boolean;
    /**
     * Subgroup of this prototype.
     */
    readonly subgroup: LuaGroup;
    /**
     * Type of this prototype.
     */
    readonly type: string;
}
/**
 * Provides read-only access to prototypes. It is accessible through the global object named `prototypes`.
 */
interface LuaPrototypes {
    /**
     * Returns a dictionary of all LuaAchievementPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every achievement prototype that is not allowed to be completed on the peaceful difficulty setting.
    local prototypes = prototypes.get_achievement_filtered{{filter="allowed-without-fight", invert=true}}
    ```
     */
    get_achievement_filtered(this: void, filters: AchievementPrototypeFilter[]): Record<string, LuaAchievementPrototype>;
    /**
     * Returns a dictionary of all LuaDecorativePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every decorative prototype that is auto-placed.
    local prototypes = prototypes.get_decorative_filtered{{filter="autoplace"}}
    ```
     */
    get_decorative_filtered(this: void, filters: DecorativePrototypeFilter[]): Record<string, LuaDecorativePrototype>;
    /**
     * Returns a dictionary of all LuaEntityPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every entity prototype that can craft recipes involving fluids in the way some assembling machines can
    local prototypes = prototypes.get_entity_filtered{{filter="crafting-category", crafting_category="crafting-with-fluid"}}
    ```
     */
    get_entity_filtered(this: void, filters: EntityPrototypeFilter[]): Record<string, LuaEntityPrototype>;
    /**
     * Returns a dictionary of all LuaEquipmentPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every equipment prototype that functions as a battery.
    local prototypes = prototypes.get_equipment_filtered{{filter="type", type="battery-equipment"}}
    ```
     */
    get_equipment_filtered(this: void, filters: EquipmentPrototypeFilter[]): Record<string, LuaEquipmentPrototype>;
    /**
     * Returns a dictionary of all LuaFluidPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every fluid prototype that has a heat capacity of exactly `100`.
    local prototypes = prototypes.get_fluid_filtered{{filter="heat-capacity", comparison="=", value=100}}
    ```
     */
    get_fluid_filtered(this: void, filters: FluidPrototypeFilter[]): Record<string, LuaFluidPrototype>;
    /**
     * Gets the prototype history for the given type and name.
     */
    get_history(this: void, type: string, name: string): PrototypeHistory;
    /**
     * Returns a dictionary of all LuaItemPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every item prototype that has a fuel top speed multiplier larger than 1.
    local prototypes = prototypes.get_item_filtered{{filter = "fuel-top-speed-multiplier", comparison = ">", value = 1}}
    ```
     */
    get_item_filtered(this: void, filters: ItemPrototypeFilter[]): Record<string, LuaItemPrototype>;
    /**
     * Returns a dictionary of all LuaModSettingPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every mod setting prototype that belongs to the specified mod.
    local prototypes = prototypes.get_mod_setting_filtered{{filter="mod", mod="space-exploration"}}
    ```
     */
    get_mod_setting_filtered(this: void, filters: ModSettingPrototypeFilter[]): Record<string, LuaModSettingPrototype>;
    /**
     * Returns a dictionary of all LuaRecipePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every recipe prototype that takes less than half a second to craft (at crafting speed `1`).
    local prototypes = prototypes.get_recipe_filtered{{filter="energy", comparison="<", value=0.5}}
    ```
     */
    get_recipe_filtered(this: void, filters: RecipePrototypeFilter[]): Record<string, LuaRecipePrototype>;
    /**
     * Returns a dictionary of all LuaTechnologyPrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every technology prototype that can be researched at the start of the game.
    local prototypes = prototypes.get_technology_filtered{{filter="has-prerequisites", invert=true}}
    ```
     */
    get_technology_filtered(this: void, filters: TechnologyPrototypeFilter[]): Record<string, LuaTechnologyPrototype>;
    /**
     * Returns a dictionary of all LuaTilePrototypes that fit the given filters. The prototypes are indexed by `name`.
     * @example ```
    -- Get every tile prototype that improves a player's walking speed by at least 50%.
    local prototypes = prototypes.get_tile_filtered{{filter="walking-speed-modifier", comparison="≥", value=1.5}}
    ```
     */
    get_tile_filtered(this: void, filters: TilePrototypeFilter[]): Record<string, LuaTilePrototype>;
    /**
     * A dictionary containing every LuaAchievementPrototype indexed by `name`.
     */
    readonly achievement: Record<string, LuaAchievementPrototype>;
    /**
     * A dictionary containing every LuaActiveTriggerPrototype indexed by `name`.
     */
    readonly active_trigger: Record<string, LuaActiveTriggerPrototype>;
    /**
     * A dictionary containing every LuaAirbornePollutantPrototype indexed by `name`.
     */
    readonly airborne_pollutant: Record<string, LuaAirbornePollutantPrototype>;
    /**
     * A dictionary containing every LuaAmmoCategoryPrototype indexed by `name`.
     */
    readonly ammo_category: Record<string, LuaAmmoCategoryPrototype>;
    /**
     * A dictionary containing every LuaAsteroidChunkPrototype indexed by `name`.
     */
    readonly asteroid_chunk: Record<string, LuaAsteroidChunkPrototype>;
    /**
     * A dictionary containing every LuaAutoplaceControlPrototype indexed by `name`.
     */
    readonly autoplace_control: Record<string, LuaAutoplaceControlPrototype>;
    /**
     * A dictionary containing every LuaBurnerUsagePrototype indexed by `name`.
     */
    readonly burner_usage: Record<string, LuaBurnerUsagePrototype>;
    /**
     * A dictionary containing every LuaCollisionLayerPrototype indexed by `name`.
     */
    readonly collision_layer: Record<string, LuaCollisionLayerPrototype>;
    /**
     * A dictionary containing every defined custom event, indexed by `name`.
     */
    readonly custom_event: Record<string, LuaCustomEventPrototype>;
    /**
     * A dictionary containing every LuaCustomInputPrototype indexed by `name`.
     */
    readonly custom_input: Record<string, LuaCustomInputPrototype>;
    /**
     * A dictionary containing every LuaDamagePrototype indexed by `name`.
     */
    readonly damage: Record<string, LuaDamagePrototype>;
    /**
     * A dictionary containing every LuaDecorativePrototype indexed by `name`.
     */
    readonly decorative: Record<string, LuaDecorativePrototype>;
    /**
     * A dictionary containing every LuaEntityPrototype indexed by `name`.
     */
    readonly entity: Record<string, LuaEntityPrototype>;
    /**
     * A dictionary containing every LuaEquipmentPrototype indexed by `name`.
     */
    readonly equipment: Record<string, LuaEquipmentPrototype>;
    /**
     * A dictionary containing every LuaEquipmentCategoryPrototype indexed by `name`.
     */
    readonly equipment_category: Record<string, LuaEquipmentCategoryPrototype>;
    /**
     * A dictionary containing every LuaEquipmentGridPrototype indexed by `name`.
     */
    readonly equipment_grid: Record<string, LuaEquipmentGridPrototype>;
    /**
     * A dictionary containing every LuaFluidPrototype indexed by `name`.
     */
    readonly fluid: Record<string, LuaFluidPrototype>;
    /**
     * A dictionary containing every LuaFontPrototype indexed by `name`.
     */
    readonly font: Record<string, LuaFontPrototype>;
    /**
     * A dictionary containing every LuaFuelCategoryPrototype indexed by `name`.
     */
    readonly fuel_category: Record<string, LuaFuelCategoryPrototype>;
    /**
     * A dictionary containing every LuaItemPrototype indexed by `name`.
     */
    readonly item: Record<string, LuaItemPrototype>;
    /**
     * A dictionary containing every ItemGroup indexed by `name`.
     */
    readonly item_group: Record<string, LuaGroup>;
    /**
     * A dictionary containing every ItemSubgroup indexed by `name`.
     */
    readonly item_subgroup: Record<string, LuaGroup>;
    /**
     * A dictionary containing every MapGenPreset indexed by `name`.
     *
     * A MapGenPreset is an exact copy of the prototype table provided from the data stage.
     */
    readonly map_gen_preset: Record<string, MapGenPreset>;
    readonly max_beacon_supply_area_distance: uint;
    readonly max_electric_pole_connection_distance: double;
    readonly max_electric_pole_supply_area_distance: float;
    readonly max_force_distraction_chunk_distance: uint;
    readonly max_force_distraction_distance: double;
    readonly max_gate_activation_distance: double;
    readonly max_inserter_reach_distance: double;
    readonly max_pipe_to_ground_distance: uint8;
    readonly max_underground_belt_distance: uint8;
    /**
     * A dictionary containing every LuaModSettingPrototype indexed by `name`.
     */
    readonly mod_setting: Record<string, LuaModSettingPrototype>;
    /**
     * A dictionary containing every LuaModuleCategoryPrototype indexed by `name`.
     */
    readonly module_category: Record<string, LuaModuleCategoryPrototype>;
    /**
     * A dictionary containing every LuaNamedNoiseExpression indexed by `name`.
     */
    readonly named_noise_expression: Record<string, LuaNamedNoiseExpression>;
    /**
     * A dictionary containing every LuaNamedNoiseFunction indexed by `name`.
     */
    readonly named_noise_function: Record<string, LuaNamedNoiseFunction>;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * A dictionary containing every LuaParticlePrototype indexed by `name`.
     */
    readonly particle: Record<string, LuaParticlePrototype>;
    /**
     * A dictionary containing every LuaProcessionPrototype indexed by `name`.
     */
    readonly procession: Record<string, LuaProcessionPrototype>;
    /**
     * A dictionary containing every LuaProcessionLayerInheritanceGroupPrototype indexed by `name`.
     */
    readonly procession_layer_inheritance_group: Record<string, LuaProcessionLayerInheritanceGroupPrototype>;
    readonly quality: Record<string, LuaQualityPrototype>;
    /**
     * A dictionary containing every LuaRecipePrototype indexed by `name`.
     */
    readonly recipe: Record<string, LuaRecipePrototype>;
    /**
     * A dictionary containing every LuaRecipeCategoryPrototype indexed by `name`.
     */
    readonly recipe_category: Record<string, LuaRecipeCategoryPrototype>;
    /**
     * A dictionary containing every LuaResourceCategoryPrototype indexed by `name`.
     */
    readonly resource_category: Record<string, LuaResourceCategoryPrototype>;
    /**
     * A dictionary containing every LuaShortcutPrototype indexed by `name`.
     */
    readonly shortcut: Record<string, LuaShortcutPrototype>;
    readonly space_connection: Record<string, LuaSpaceConnectionPrototype>;
    readonly space_location: Record<string, LuaSpaceLocationPrototype>;
    /**
     * A map of styles that {@link LuaGuiElement | runtime:LuaGuiElement} can use.
     *
     * Maps from the style's name to its type, as seen on {@link StyleSpecification | prototype:StyleSpecification}.
     */
    readonly style: Record<string, string>;
    /**
     * A dictionary containing every LuaSurfacePrototype indexed by `name`.
     */
    readonly surface: Record<string, LuaSurfacePrototype>;
    readonly surface_property: Record<string, LuaSurfacePropertyPrototype>;
    /**
     * A dictionary containing every {@link LuaTechnologyPrototype | runtime:LuaTechnologyPrototype} indexed by `name`.
     */
    readonly technology: Record<string, LuaTechnologyPrototype>;
    /**
     * A dictionary containing every LuaTilePrototype indexed by `name`.
     */
    readonly tile: Record<string, LuaTilePrototype>;
    /**
     * A dictionary containing every LuaTrivialSmokePrototype indexed by `name`.
     */
    readonly trivial_smoke: Record<string, LuaTrivialSmokePrototype>;
    /**
     * A dictionary containing every LuaVirtualSignalPrototype indexed by `name`.
     */
    readonly virtual_signal: Record<string, LuaVirtualSignalPrototype>;
}
/**
 * Control behavior for pumps.
 */
interface LuaPumpControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * `true` if the pump should set its fluid filter from the circuit network signals.
     */
    set_filter: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a quality.
 */
interface LuaQualityPrototype extends LuaPrototypeBase {
    readonly beacon_power_usage_multiplier: float;
    /**
     * The color of the prototype
     */
    readonly color: Color;
    readonly draw_sprite_by_default: boolean;
    /**
     * Level basically specifies the stat-increasing value of this quality level
     */
    readonly level: uint;
    readonly mining_drill_resource_drain_multiplier: float;
    /**
     * The next higher level of the quality
     */
    readonly next: LuaQualityPrototype;
    /**
     * The probability multiplier of getting the next level of quality
     */
    readonly next_probability: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * An interface to send messages to the calling RCON interface through the global object named `rcon`.
 */
interface LuaRCON {
    /**
     * Print text to the calling RCON interface if any.
     */
    print(this: void, message: LocalisedString): void;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
}
/**
 * Control behavior for radars
 */
interface LuaRadarControlBehavior extends LuaControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Utility object that binds to a rail entity and rail_direction to allow easier traversal over rails
 */
interface LuaRailEnd {
    /**
     * Moves to opposite end on the rail this object points to
     */
    flip_direction(this: void): void;
    /**
     * Returns all possible rail extensions from this position as defined by the planner item.
     * @param planner_item Rail planner that defines possible rail extensions
     */
    get_rail_extensions(this: void, planner_item: ItemID): RailExtensionData[];
    /**
     * Creates a copy of this LuaRailEnd object.
     */
    make_copy(this: void): LuaRailEnd;
    /**
     * Moves forward by 1 rail to the specified connection direction
     * @returns If the move was successful. False if there is no rail connected in given connection_direction
     */
    move_forward(this: void, connection_direction: defines.rail_connection_direction): boolean;
    /**
     * Moves forward by 1 rail in the natural direction. Natural direction is a move in the direction taken by the train over rail connection related to this rail end. If there are no trains, the natural direction is straight if straight connected rail exists, otherwise it is right if right connected rail exists, otherwise it is left if left connected rail exists. Natural direction is not defined if there are no rails connected to this end and this method will fail.
     * @returns If the move was successful. False only when there are no rails connected on this end
     */
    move_natural(this: void): boolean;
    /**
     * Moves forward until a rail segment boundary is reached. If this rail end is at the segment boundary, it will not move at all. When a rail segment is cyclical, it will reach the rail segment boundary at some arbitrary position unless the segment boundary is well defined by presence of rail signals, train stop or other rails connecting to the rails loop.
     */
    move_to_segment_end(this: void): void;
    /**
     * Location of the alternative incoming signal, which goes to the right relative to the rail end movement. Not all places have alternative incoming signal spot, so when it is not available, a nil will be given instead
     */
    readonly alternative_in_signal_location?: RailLocation;
    /**
     * Location of the alternative outgoing signal, which goes to the right relative to the rail end movement. Not all places have alternative outgoing signal spot, so when it is not available, a nil will be given instead
     */
    readonly alternative_out_signal_location?: RailLocation;
    /**
     * Which end of the rail this RailEnd is binding to.
     */
    readonly direction: defines.rail_direction;
    /**
     * Location of an incoming signal, which goes to the left relative to the rail end movement.
     */
    readonly in_signal_location: RailLocation;
    /**
     * Location of the rail end
     */
    readonly location: RailLocation;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Location of an outgoing signal, which goes to the right relative to the rail end movement.
     */
    readonly out_signal_location: RailLocation;
    /**
     * Rail to which this RailEnd is binding to.
     */
    readonly rail: LuaEntity;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A rail path.
 */
interface LuaRailPath {
    /**
     * The current rail index.
     */
    readonly current: uint;
    /**
     * If the path goes from the front of the train
     */
    readonly is_front: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Array of the rails that this path travels over.
     */
    readonly rails: Record<uint, LuaEntity>;
    /**
     * The total number of rails in this path.
     */
    readonly size: uint;
    /**
     * The total path distance.
     */
    readonly total_distance: double;
    /**
     * The total distance traveled.
     */
    readonly travelled_distance: double;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for rail signals and rail chain signals.
 */
interface LuaRailSignalBaseControlBehavior extends LuaControlBehavior {
    blue_signal?: SignalID;
    /**
     * The circuit condition when controlling the signal through the circuit network.
     */
    circuit_condition: CircuitConditionDefinition;
    /**
     * If this will close the rail signal based off the circuit condition.
     */
    close_signal: boolean;
    green_signal?: SignalID;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    orange_signal?: SignalID;
    /**
     * If this will read the rail signal state.
     */
    read_signal: boolean;
    red_signal?: SignalID;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A deterministic random generator independent from the core games random generator that can be seeded and re-seeded at will. This random generator can be saved and loaded and will maintain its state.
 *
 * Note this is entirely different from calling {@link math.random | libraries.html}() and you should be sure you actually want to use this over calling `math.random()`. If you aren't sure if you need to use this over calling `math.random()` then you probably don't need to use this.
 * @example ```
-- Create a generator and use it to print a random number.
storage.generator = game.create_random_generator()
game.player.print(storage.generator())
```
 */
interface LuaRandomGenerator {
    /**
     * Re-seeds the random generator with the given value.
     *
     * Seeds that are close together will produce similar results. Seeds from 0 to 341 will produce the same results.
     */
    re_seed(this: void, seed: uint): void;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Generates a random number. If no parameters are given a number in the `[0, 1)` range is returned. If a single parameter is given a floored number in the `[1, N]` range is returned. If 2 parameters are given a floored number in the `[N1, N2]` range is returned.
     * @param lower Inclusive lower bound on the result
     * @param upper Inclusive upper bound on the result
     */
    (this: void, lower?: int, upper?: int): double;
}
/**
 * Control behavior for Reactor
 */
interface LuaReactorControlBehavior extends LuaControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * If this will read fuel inventory and currently burning fuel
     */
    read_fuel: boolean;
    /**
     * If this will read temperature of the reactor
     */
    read_temperature: boolean;
    temperature_signal?: SignalID;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A crafting recipe. Recipes belong to forces (see {@link LuaForce | runtime:LuaForce}) because some recipes are unlocked by research, and researches are per-force.
 */
interface LuaRecipe {
    /**
     * Reload the recipe from the prototype.
     */
    reload(this: void): void;
    /**
     * Category of the recipe.
     */
    readonly category: string;
    /**
     * Can the recipe be used?
     */
    enabled: boolean;
    /**
     * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
     */
    readonly energy: double;
    /**
     * The force that owns this recipe.
     */
    readonly force: LuaForce;
    /**
     * Group of this recipe.
     */
    readonly group: LuaGroup;
    /**
     * Is the recipe hidden? Hidden recipes don't show up in the crafting menu.
     */
    readonly hidden: boolean;
    /**
     * Is the recipe hidden from flow statistics?
     */
    hidden_from_flow_stats: boolean;
    /**
     * The ingredients to this recipe.
     * @example ```
    -- The ingredients of "advanced-oil-processing" would look like this:
    {{type="fluid", name="crude-oil", amount=100}, {type="fluid", name="water", amount=50}}
    ```
     */
    readonly ingredients: Ingredient[];
    readonly localised_description: LocalisedString;
    /**
     * Localised name of the recipe.
     */
    readonly localised_name: LocalisedString;
    /**
     * Name of the recipe. This can be different than the name of the result items as there could be more recipes to make the same item.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string;
    /**
     * The productivity bonus for this recipe.
     */
    productivity_bonus: float;
    /**
     * The results/products of this recipe.
     * @example ```
    -- The products of "advanced-oil-processing" would look like this:
    {{type="fluid", name="heavy-oil", amount=25}, {type="fluid", name="light-oil", amount=45}, {type="fluid", name="petroleum-gas", amount=55}}
    ```
     */
    readonly products: Product[];
    /**
     * The prototype for this recipe.
     */
    readonly prototype: LuaRecipePrototype;
    /**
     * Subgroup of this recipe.
     */
    readonly subgroup: LuaGroup;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a recipe category.
 */
interface LuaRecipeCategoryPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A crafting recipe prototype.
 */
interface LuaRecipePrototype extends LuaPrototypeBase {
    /**
     * If this recipe is enabled for the purpose of intermediate hand-crafting.
     */
    readonly allow_as_intermediate: boolean;
    /**
     * Is this recipe allowed to be broken down for the recipe tooltip "Total raw" calculations?
     */
    readonly allow_decomposition: boolean;
    /**
     * If the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
     */
    readonly allow_inserter_overload: boolean;
    /**
     * If this recipe is allowed to use intermediate recipes when hand-crafting.
     */
    readonly allow_intermediates: boolean;
    /**
     * The allowed module effects for this recipe, if any.
     */
    readonly allowed_effects?: Record<string, boolean>;
    /**
     * The allowed module categories for this recipe, if any.
     */
    readonly allowed_module_categories?: Record<string, true>;
    /**
     * Alternative technologies that can unlocked this recipe.
     */
    readonly alternative_unlock_methods?: LuaTechnologyPrototype[];
    /**
     * Should this recipe always show "Made in" in the tooltip?
     */
    readonly always_show_made_in: boolean;
    /**
     * If the products are always shown in the recipe tooltip.
     */
    readonly always_show_products: boolean;
    /**
     * Category of the recipe.
     */
    readonly category: string;
    readonly crafting_machine_tints: Color[];
    readonly effect_limitation_messages?: LocalisedString[];
    /**
     * The emissions multiplier for this recipe.
     */
    readonly emissions_multiplier: double;
    /**
     * If this recipe prototype is enabled by default (enabled at the beginning of a game).
     */
    readonly enabled: boolean;
    /**
     * Energy required to execute this recipe. This directly affects the crafting time: Recipe's energy is exactly its crafting time in seconds, when crafted in an assembling machine with crafting speed exactly equal to one.
     */
    readonly energy: double;
    /**
     * Is the recipe hidden from flow statistics (item/fluid production statistics)?
     */
    readonly hidden_from_flow_stats: boolean;
    /**
     * Is the recipe hidden from player crafting? The recipe will still show up for selection in machines.
     */
    readonly hidden_from_player_crafting: boolean;
    readonly hide_from_flow_stats: boolean;
    readonly hide_from_player_crafting: boolean;
    /**
     * Is this recipe is marked to be hidden from the signal GUI.
     */
    readonly hide_from_signal_gui: boolean;
    /**
     * The ingredients to this recipe.
     * @example ```
    -- The ingredients of "advanced-oil-processing" would look like this
    {{type="fluid", name="crude-oil", amount=100}, {type="fluid", name="water", amount=50}}
    ```
     */
    readonly ingredients: Ingredient[];
    readonly is_parameter: boolean;
    /**
     * The main product of this recipe, if any.
     */
    readonly main_product?: Product;
    /**
     * The maximal productivity bonus that can be achieved with this recipe.
     */
    readonly maximum_productivity: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough".
     */
    readonly overload_multiplier: uint;
    readonly preserve_products_in_machine_output: boolean;
    /**
     * The results/products of this recipe.
     * @example ```
    -- The products of "advanced-oil-processing" would look like this:
    {{type="fluid", name="heavy-oil", amount=25}, {type="fluid", name="light-oil", amount=45}, {type="fluid", name="petroleum-gas", amount=55}}
    ```
     */
    readonly products: Product[];
    /**
     * The multiplier used when this recipe is copied from an assembling machine to a requester chest. For each item in the recipe the item count * this value is set in the requester chest.
     */
    readonly request_paste_multiplier: uint;
    /**
     * If the amount is shown in the recipe tooltip title when the recipe produces more than 1 product.
     */
    readonly show_amount_in_title: boolean;
    /**
     * The surface conditions required to craft this recipe.
     */
    readonly surface_conditions?: SurfaceCondition[];
    /**
     * The 'trash' items that this recipe might produce as a result of spoiling.
     */
    readonly trash?: LuaItemPrototype[];
    /**
     * Is this recipe unlocks the result item(s) so they're shown in filter-select GUIs.
     */
    readonly unlock_results: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A reference to a record in the blueprint library. Records in the "my blueprints" shelf are read-only, but records in the "game blueprints" shelf are read/write.
 */
interface LuaRecord {
    /**
     * Build this blueprint at the given location.
     *
     * Built entities can be come invalid between the building of the blueprint and the function returning if by_player or raise_built is used and one of those events invalidates the entity.
     * @param table.surface Surface to build on
     * @param table.force Force to use for the building
     * @param table.position The position to build at
     * @param table.direction The direction to use when building
     * @param table.build_mode If `normal`, blueprint will not be built if any one thing can't be built. If `forced`, anything that can be built is built and obstructing nature entities will be deconstructed. If `superforced`, all obstructions will be deconstructed and the blueprint will be built.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped.
     * @param table.by_player The player to use if any. If provided {@link defines.events.on_built_entity | runtime:defines.events.on_built_entity} will also be fired on successful entity creation.
     * @param table.raise_built If true; {@link defines.events.script_raised_built | runtime:defines.events.script_raised_built} will be fired on successful entity creation. Note: this is ignored if by_player is provided.
     * @returns Array of created ghosts
     */
    build_blueprint(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        position: MapPosition;
        direction?: defines.direction;
        build_mode?: defines.build_mode;
        skip_fog_of_war?: boolean;
        by_player?: PlayerIdentification;
        raise_built?: boolean;
    }): LuaEntity[];
    /**
     * Cancel deconstruct the given area with this deconstruction planner,.
     * @param table.surface Surface to cancel deconstruct on
     * @param table.force Force to use for canceling deconstruction
     * @param table.area The area to deconstruct
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped. Defaults to `false`.
     * @param table.by_player The player to use if any.
     * @param table.super_forced If the cancel deconstruction is super-forced. Defaults to `false`.
     */
    cancel_deconstruct_area(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        area: BoundingBox;
        skip_fog_of_war?: boolean;
        by_player?: PlayerIdentification;
        super_forced?: boolean;
    }): void;
    /**
     * Clears this blueprint.
     */
    clear_blueprint(this: void): void;
    /**
     * Clears all settings/filters on this deconstruction planner, resetting it to default values.
     */
    clear_deconstruction_data(this: void): void;
    /**
     * Clears all settings/filters on this upgrade planner, resetting it to default values.
     */
    clear_upgrade_data(this: void): void;
    /**
     * Sets up this blueprint using the found blueprintable entities/tiles on the surface.
     * @param table.surface Surface to create from
     * @param table.force Force to use for the creation
     * @param table.area The bounding box
     * @param table.always_include_tiles When true, blueprintable tiles are always included in the blueprint. When false they're only included if no entities exist in the setup area. Defaults to false.
     * @param table.include_entities When true, entities are included in the blueprint. Defaults to true.
     * @param table.include_modules When true, modules are included in the blueprint. Defaults to true.
     * @param table.include_station_names When true, station names are included in the blueprint. Defaults to false.
     * @param table.include_trains When true, trains are included in the blueprint. Defaults to false.
     * @param table.include_fuel When true, train fuel is included in the blueprint, Defaults to true.
     * @returns The blueprint entity index to source entity mapping.
     */
    create_blueprint(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        area: BoundingBox;
        always_include_tiles?: boolean;
        include_entities?: boolean;
        include_modules?: boolean;
        include_station_names?: boolean;
        include_trains?: boolean;
        include_fuel?: boolean;
    }): Record<uint, LuaEntity>;
    /**
     * Deconstruct the given area with this deconstruction planner,.
     * @param table.surface Surface to deconstruct on
     * @param table.force Force to use for the deconstruction
     * @param table.area The area to deconstruct
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped. Defaults to `false`.
     * @param table.by_player The player to use if any.
     * @param table.super_forced If the deconstruction is super-forced. Defaults to `false`.
     */
    deconstruct_area(this: void, table: {
        surface: SurfaceIdentification;
        force: ForceID;
        area: BoundingBox;
        skip_fog_of_war?: boolean;
        by_player?: PlayerIdentification;
        super_forced?: boolean;
    }): void;
    /**
     * The entities in this blueprint.
     */
    get_blueprint_entities(this: void): BlueprintEntity[] | null;
    /**
     * Gets the number of entities in this blueprint blueprint.
     */
    get_blueprint_entity_count(this: void): uint;
    /**
     * Gets the given tag on the given blueprint entity index in this blueprint blueprint.
     * @param index The entity index.
     * @param tag The tag to get.
     */
    get_blueprint_entity_tag(this: void, index: uint, tag: string): AnyBasic | null;
    /**
     * Gets the tags for the given blueprint entity index in this blueprint.
     */
    get_blueprint_entity_tags(this: void, index: uint): Tags;
    /**
     * A list of the tiles in this blueprint.
     */
    get_blueprint_tiles(this: void): Tile[] | null;
    /**
     * Gets the entity filter at the given index for this deconstruction planner,.
     */
    get_entity_filter(this: void, index: uint): string | null;
    /**
     * Gets the filter at the given index for this upgrade item.
     *
     * In contrast to {@link LuaRecord::set_mapper | runtime:LuaRecord::set_mapper}, indices past the upgrade item's current size are considered to be out of bounds.
     * @param index The index of the mapper to read.
     * @param type `"from"` or `"to"`.
     */
    get_mapper(this: void, index: uint, type: string): UpgradeMapperSource | UpgradeMapperDestination;
    /**
     * Gets the tile filter at the given index for this deconstruction planner,.
     */
    get_tile_filter(this: void, index: uint): string | null;
    /**
     * Is this blueprint setup? I.e. is it a non-empty blueprint?
     */
    is_blueprint_setup(this: void): boolean;
    /**
     * Set new entities to be a part of this blueprint.
     * @param entities The new blueprint entities.
     */
    set_blueprint_entities(this: void, entities: BlueprintEntity[]): void;
    /**
     * Sets the given tag on the given blueprint entity index in this blueprint blueprint.
     * @param index The entity index.
     * @param tag The tag to set.
     * @param value The tag value to set or `nil` to clear the tag.
     */
    set_blueprint_entity_tag(this: void, index: uint, tag: string, value: AnyBasic): void;
    /**
     * Sets the tags on the given blueprint entity index in this blueprint.
     * @param index The entity index
     */
    set_blueprint_entity_tags(this: void, index: uint, tags: Tags): void;
    /**
     * Set specific tiles in this blueprint.
     * @param tiles Tiles to be a part of the blueprint.
     */
    set_blueprint_tiles(this: void, tiles: Tile[]): void;
    /**
     * Sets the entity filter at the given index for this deconstruction planner,.
     * @param filter Writing `nil` removes the filter.
     * @returns Whether the new filter was successfully set (ie. was valid).
     */
    set_entity_filter(this: void, index: uint, filter: string | LuaEntityPrototype | LuaEntity | nil): boolean;
    /**
     * Sets the module filter at the given index for this upgrade item.
     *
     * In contrast to {@link LuaRecord::get_mapper | runtime:LuaRecord::get_mapper}, indices past the upgrade item's current size are valid and expand the list of mappings accordingly, if within reasonable bounds.
     * @param index The index of the mapper to set.
     * @param type `"from"` or `"to"`.
     * @param mapper The mapper to set or `nil`
     */
    set_mapper(this: void, index: uint, type: string, mapper: UpgradeMapperSource | UpgradeMapperDestination): void;
    /**
     * Sets the tile filter at the given index for this deconstruction planner,.
     * @param filter Setting to nil erases the filter.
     * @returns Whether the new filter was successfully set (ie. was valid).
     */
    set_tile_filter(this: void, index: uint, filter: string | LuaTilePrototype | LuaTile): boolean;
    /**
     * If absolute snapping is enabled on this blueprint.
     */
    blueprint_absolute_snapping: boolean;
    /**
     * The offset from the absolute grid. `nil` if absolute snapping is not enabled.
     */
    blueprint_position_relative_to_grid?: TilePosition;
    /**
     * The snapping grid size in this blueprint. `nil` if snapping is not enabled.
     */
    blueprint_snap_to_grid?: TilePosition;
    /**
     * The contents of this BlueprintBookRecord.
     */
    readonly contents: LuaRecord[];
    /**
     * List of raw materials required to build this blueprint.
     */
    readonly cost_to_build: ItemCountWithQuality[];
    /**
     * The default icons for a blueprint blueprint.
     */
    readonly default_icons: BlueprintSignalIcon[];
    /**
     * The number of entity filters this deconstruction planner supports.
     */
    readonly entity_filter_count: uint;
    /**
     * The blacklist/whitelist entity filter mode for this deconstruction planner,.
     */
    entity_filter_mode: defines.deconstruction_item.entity_filter_mode;
    /**
     * The entity filters for this deconstruction planner. The attribute is a sparse array with the keys representing the index of the filter. All strings in this array must be entity prototype names that don't have the `"not-deconstructable"` flag set and are either a `cliff` or marked as `minable`.
     */
    entity_filters: string[];
    /**
     * Is this blueprint record a preview? A preview record must be synced by the player before entity and tile data can be read.
     */
    readonly is_blueprint_preview: boolean;
    /**
     * The current count of mappers in the upgrade item.
     */
    readonly mapper_count: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The number of tile filters this deconstruction planner supports.
     */
    readonly tile_filter_count: uint;
    /**
     * The blacklist/whitelist tile filter mode for this deconstruction planner,.
     */
    tile_filter_mode: defines.deconstruction_item.tile_filter_mode;
    /**
     * The tile filters for this deconstruction planner,. The attribute is a sparse array with the keys representing the index of the filter. Reading filters always returns an array of strings which are the tile prototype names.
     */
    tile_filters: TileID[];
    /**
     * The tile selection mode for this deconstruction planner,.
     */
    tile_selection_mode: defines.deconstruction_item.tile_selection_mode;
    /**
     * If this deconstruction planner, is set to allow trees and rocks only.
     */
    trees_and_rocks_only: boolean;
    /**
     * The type of this blueprint record.
     */
    readonly type: 'blueprint' | 'blueprint-book' | 'deconstruction-planner' | 'upgrade-planner';
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Is this record valid for writing? A record is invalid for write if it is a BlueprintRecord preview or if it is in the "My blueprints" shelf.
     */
    readonly valid_for_write: boolean;
}
/**
 * Registry of interfaces between scripts. An interface is simply a dictionary mapping names to functions. A script or mod can then register an interface with {@link LuaRemote | runtime:LuaRemote}, after that any script can call the registered functions, provided it knows the interface name and the desired function name. An instance of LuaRemote is available through the global object named `remote`.
 * @example ```
-- Will register a remote interface containing two functions. Later, it will call these functions through `remote`.
remote.add_interface("human interactor",
  {
    hello = function() game.player.print("Hi!") end,
    bye = function(name) game.player.print("Bye " .. name) end
  })
-- Some time later, possibly in a different mod...
remote.call("human interactor", "hello")
remote.call("human interactor", "bye", "dear reader")
```
 */
interface LuaRemote {
    /**
     * Add a remote interface.
     * @param name Name of the interface. If the name matches any existing interface, an error is thrown.
     * @param functions List of functions that are members of the new interface.
     */
    add_interface(this: void, name: string, functions: Record<string, (this: void) => any>): void;
    /**
     * Call a function of an interface.
     *
     * Providing an unknown interface or function name will result in a script error.
     * @param interface Interface to look up `function` in.
     * @param _function Function name that belongs to the `interface`.
     * @param args Arguments to pass to the called function. Note that any arguments passed through the interface are a copy of the original, not a reference. Metatables are not retained, while references to LuaObjects stay intact.
     */
    call(this: void, interface: string, _function: string, ...args: Any[]): Any | null;
    /**
     * Removes an interface with the given name.
     * @param name Name of the interface.
     * @returns Whether the interface was removed. `false` if the interface didn't exist.
     */
    remove_interface(this: void, name: string): boolean;
    /**
     * List of all registered interfaces. For each interface name, `remote.interfaces[name]` is a dictionary mapping the interface's registered functions to `true`.
     * @example ```
    -- Assuming the "human interactor" interface is registered as above
    game.player.print(tostring(remote.interfaces["human interactor"]["hello"]))        -- prints true
    game.player.print(tostring(remote.interfaces["human interactor"]["nonexistent"]))  -- prints nil
    ```
     */
    readonly interfaces: Record<string, Record<string, true>>;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
}
/**
 * Reference to a single LuaRendering object.
 */
interface LuaRenderObject {
    /**
     * Reorder this object so that it is drawn in front of the already existing objects.
     */
    bring_to_front(this: void): void;
    /**
     * Destroys this object. Does not error when the object is invalid.
     */
    destroy(this: void): void;
    /**
     * Reorder this object so that it is drawn in the back of the already existing objects.
     */
    move_to_back(this: void): void;
    /**
     * Set the corners of the rectangle with this id.
     */
    set_corners(this: void, left_top: ScriptRenderTarget, right_bottom: ScriptRenderTarget): void;
    /**
     * Set the length of the dashes and the length of the gaps in this line.
     */
    set_dashes(this: void, dash_length: double, gap_length: double): void;
    /**
     * Alignment of this text.
     */
    alignment: TextAlign;
    /**
     * Angle of this arc. Angle in radian.
     */
    angle: float;
    /**
     * Animation prototype name of this animation.
     */
    animation: string;
    /**
     * Animation offset of this animation. Animation offset in frames.
     */
    animation_offset: double;
    /**
     * Animation speed of this animation. Animation speed in frames per tick.
     */
    animation_speed: double;
    /**
     * Color or tint of the object.
     */
    color: Color;
    /**
     * Dash length of this line.
     */
    dash_length: double;
    /**
     * If this object is being drawn on the ground, under most entities and sprites.
     */
    draw_on_ground: boolean;
    /**
     * If this circle or rectangle is filled.
     */
    filled: boolean;
    /**
     * Font of this text.
     */
    font: string;
    /**
     * Forces for which this object is rendered or `nil` if visible to all forces. Writing nil or empty array will make object to be visible to all forces.
     */
    forces?: LuaForce[] | ForceSet;
    /**
     * Where this line is drawn from.
     */
    from: ScriptRenderTarget;
    /**
     * Length of the gaps in this line.
     */
    gap_length: double;
    /**
     * Unique identifier of this render object.
     */
    readonly id: uint64;
    /**
     * Intensity of this light.
     */
    intensity: float;
    /**
     * Where top left corner of this rectangle is drawn.
     */
    left_top: ScriptRenderTarget;
    /**
     * Radius of the outer edge of this arc.
     */
    max_radius: double;
    /**
     * Radius of the inner edge of this arc.
     */
    min_radius: double;
    /**
     * Minimum darkness at which this light is rendered.
     */
    minimum_darkness: float;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * If this object is only rendered in alt-mode.
     */
    only_in_alt_mode: boolean;
    /**
     * Orientation of this object.
     *
     * Polygon vertices that are set to an entity will ignore this.
     */
    orientation: RealOrientation;
    /**
     * Target to which this object rotates so that it faces the target. Note that `orientation` is still applied to the object. Writing `nil` will clear the orientation_target. `nil` if no target.
     *
     * Polygon vertices that are set to an entity will ignore this.
     */
    orientation_target?: ScriptRenderTarget;
    /**
     * If this light is rendered with the same orientation as the target entity. Note that `orientation` is still applied to the sprite.
     */
    oriented: boolean;
    /**
     * Offsets the center of the sprite or animation if `orientation_target` is given. This offset will rotate together with the sprite or animation.
     */
    oriented_offset: Vector;
    /**
     * Players for which this object is visible or `nil` if visible to all players.
     */
    players?: LuaPlayer[] | PlayerIdentification[];
    /**
     * Radius of this circle.
     */
    radius: double;
    /**
     * Render layer of this sprite or animation.
     */
    render_layer: RenderLayer;
    /**
     * Where bottom right corner of this rectangle is drawn.
     */
    right_bottom: ScriptRenderTarget;
    /**
     * Scale of the text or light.
     */
    scale: double;
    /**
     * If this text scales with player zoom.
     */
    scale_with_zoom: boolean;
    /**
     * Sprite of the sprite or light.
     */
    sprite: SpritePath;
    /**
     * Where this arc starts. Angle in radian.
     */
    start_angle: float;
    /**
     * Surface this object is rendered on.
     */
    readonly surface: LuaSurface;
    /**
     * Where this object is drawn.
     *
     * Polygon vertices that are set to an entity will ignore this.
     */
    target: ScriptRenderTarget;
    /**
     * Text that is displayed by this text object.
     */
    text: LocalisedString;
    /**
     * Time to live of this object. This will be 0 if the object does not expire.
     */
    time_to_live: uint;
    /**
     * Where this line is drawn to.
     */
    to: ScriptRenderTarget;
    /**
     * Type of this object.
     */
    readonly type: 'text' | 'line' | 'circle' | 'rectangle' | 'arc' | 'polygon' | 'sprite' | 'light' | 'animation';
    /**
     * If this text parses rich text tags.
     */
    use_rich_text: boolean;
    /**
     * If this object uses the target orientation.
     */
    use_target_orientation: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Vertical alignment of this text.
     */
    vertical_alignment: VerticalTextAlign;
    /**
     * Vertices of this polygon.
     */
    vertices: ScriptRenderTarget[];
    /**
     * If this object is rendered to anyone at all.
     */
    visible: boolean;
    /**
     * Width of the object. Value is in pixels (32 per tile).
     */
    width: float;
    /**
     * Horizontal scale of this sprite or animation.
     */
    x_scale: double;
    /**
     * Vertical scale of this sprite or animation.
     */
    y_scale: double;
}
/**
 * Allows rendering of geometric shapes, text and sprites in the game world through the global object named `rendering`. Each render object is identified by an id that is universally unique for the lifetime of a whole game.
 *
 * If an entity target of an object is destroyed or changes surface, then the object is also destroyed.
 */
interface LuaRendering {
    /**
     * Destroys all render objects.
     * @param mod_name If provided, only the render objects created by this mod are destroyed. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
     */
    clear(this: void, mod_name?: string): void;
    /**
     * Create an animation.
     * @param table.animation Name of an {@link AnimationPrototype | prototype:AnimationPrototype}.
     * @param table.orientation The orientation of the animation. Default is 0.
     * @param table.x_scale Horizontal scale of the animation. Default is 1.
     * @param table.y_scale Vertical scale of the animation. Default is 1.
     * @param table.render_layer Render layer of the animation. Defaults to `"arrow"`.
     * @param table.animation_speed How many frames the animation goes forward per tick. Default is 1.
     * @param table.animation_offset Offset of the animation in frames. Default is 0.
     * @param table.orientation_target If given, the animation rotates so that it faces this target. Note that `orientation` is still applied to the animation.
     * @param table.use_target_orientation Only used if `orientation_target` is a LuaEntity.
     * @param table.oriented_offset Offsets the center of the animation if `orientation_target` is given. This offset will rotate together with the animation.
     * @param table.target Center of the animation.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     */
    draw_animation(this: void, table: {
        animation: string;
        orientation?: RealOrientation;
        x_scale?: double;
        y_scale?: double;
        tint?: Color;
        render_layer?: RenderLayer;
        animation_speed?: double;
        animation_offset?: double;
        orientation_target?: ScriptRenderTarget;
        use_target_orientation?: boolean;
        oriented_offset?: Vector;
        target: ScriptRenderTarget;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create an arc.
     * @param table.max_radius The radius of the outer edge of the arc, in tiles.
     * @param table.min_radius The radius of the inner edge of the arc, in tiles.
     * @param table.start_angle Where the arc starts, in radian.
     * @param table.angle The angle of the arc, in radian.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.draw_on_ground If this should be drawn below sprites and entities. Defaults to false.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     */
    draw_arc(this: void, table: {
        color: Color;
        max_radius: double;
        min_radius: double;
        start_angle: float;
        angle: float;
        target: ScriptRenderTarget;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        draw_on_ground?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create a circle.
     * @param table.radius In tiles.
     * @param table.width Width of the outline, used only if filled = false. Value is in pixels (32 per tile). Defaults to 1.
     * @param table.filled If the circle should be filled. Defaults to false.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.draw_on_ground If this should be drawn below sprites and entities. Defaults to false.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     */
    draw_circle(this: void, table: {
        color: Color;
        radius: double;
        width?: float;
        filled?: boolean;
        target: ScriptRenderTarget;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        draw_on_ground?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create a light.
     *
     * The base game uses the utility sprites `light_medium` and `light_small` for lights.
     * @param table.orientation The orientation of the light. Default is 0.
     * @param table.scale Default is 1.
     * @param table.intensity Default is 1.
     * @param table.minimum_darkness The minimum darkness at which this light is rendered. Default is 0.
     * @param table.oriented If this light has the same orientation as the entity target, default is false. Note that `orientation` is still applied to the sprite.
     * @param table.color Defaults to white (no tint).
     * @param table.target Center of the light.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     */
    draw_light(this: void, table: {
        sprite: SpritePath;
        orientation?: RealOrientation;
        scale?: float;
        intensity?: float;
        minimum_darkness?: float;
        oriented?: boolean;
        color?: Color;
        target: ScriptRenderTarget;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create a line.
     * @param table.width In pixels (32 per tile).
     * @param table.gap_length Length of the gaps that this line has, in tiles. Default is 0.
     * @param table.dash_length Length of the dashes that this line has. Used only if gap_length > 0. Default is 0.
     * @param table.dash_offset Starting offset to apply to dashes. Cannot be greater than dash_length + gap_length. Default is 0.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.draw_on_ground If this should be drawn below sprites and entities. Defaults to false.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     * @example ```
    -- Draw a white and 2 pixel wide line from {0, 0} to {2, 2}.
    rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {2, 2}, color = {1, 1, 1}, width = 2}
    ```
     * @example ```
    -- Draw a red and 3 pixel wide line from {0, 0} to {0, 5}. The line has 1 tile long dashes and gaps.
    rendering.draw_line{surface = game.player.surface, from = {0, 0}, to = {0, 5}, color = {r = 1}, width = 3, gap_length = 1, dash_length = 1}
    ```
     */
    draw_line(this: void, table: {
        color: Color;
        width: float;
        gap_length?: double;
        dash_length?: double;
        dash_offset?: double;
        from: ScriptRenderTarget;
        to: ScriptRenderTarget;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        draw_on_ground?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create a triangle mesh defined by a triangle strip.
     * @param table.target Acts like an offset applied to all vertices that are not set to an entity.
     * @param table.orientation The orientation applied to all vertices. Default is 0.
     * @param table.orientation_target If given, the vertices (that are not set to an entity) rotate so that it faces this target. Note that `orientation` is still applied.
     * @param table.use_target_orientation Only used if `orientation_target` is a LuaEntity.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.draw_on_ground If this should be drawn below sprites and entities. Defaults to false.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     */
    draw_polygon(this: void, table: {
        color: Color;
        vertices: ScriptRenderTarget[];
        target?: ScriptRenderTarget;
        orientation?: RealOrientation;
        orientation_target?: ScriptRenderTarget;
        use_target_orientation?: boolean;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        draw_on_ground?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create a rectangle.
     * @param table.width Width of the outline, used only if filled = false. Value is in pixels (32 per tile). Defaults to 1.
     * @param table.filled If the rectangle should be filled. Defaults to false.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.draw_on_ground If this should be drawn below sprites and entities. Defaults to false.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     * @example ```
    -- Draw a white and 1 pixel wide square outline with the corners {0, 0} and {2, 2}.
    rendering.draw_rectangle{surface = game.player.surface, left_top = {0, 0}, right_bottom = {2, 2}, color = {1, 1, 1}}
    ```
     */
    draw_rectangle(this: void, table: {
        color: Color;
        width?: float;
        filled?: boolean;
        left_top: ScriptRenderTarget;
        right_bottom: ScriptRenderTarget;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        draw_on_ground?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create a sprite.
     * @param table.orientation The orientation of the sprite. Default is 0.
     * @param table.x_scale Horizontal scale of the sprite. Default is 1.
     * @param table.y_scale Vertical scale of the sprite. Default is 1.
     * @param table.render_layer Render layer of the sprite. Defaults to `"arrow"`.
     * @param table.orientation_target If given, the sprite rotates so that it faces this target. Note that `orientation` is still applied to the sprite.
     * @param table.use_target_orientation Only used if `orientation_target` is a LuaEntity.
     * @param table.oriented_offset Offsets the center of the sprite if `orientation_target` is given. This offset will rotate together with the sprite.
     * @param table.target Center of the sprite.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     * @example ```
    -- This will draw an iron plate icon at the character's feet. The sprite will move together with the character.
    rendering.draw_sprite{sprite = "item.iron-plate", target = game.player.character, surface = game.player.surface}
    ```
     * @example ```
    -- This will draw an iron plate icon at the character's head. The sprite will move together with the character.
    rendering.draw_sprite{sprite = "item.iron-plate", target = {entity = game.player.character, offset = {0, -2}}, surface = game.player.surface}
    ```
     */
    draw_sprite(this: void, table: {
        sprite: SpritePath;
        orientation?: RealOrientation;
        x_scale?: double;
        y_scale?: double;
        tint?: Color;
        render_layer?: RenderLayer;
        orientation_target?: ScriptRenderTarget;
        use_target_orientation?: boolean;
        oriented_offset?: Vector;
        target: ScriptRenderTarget;
        surface: SurfaceIdentification;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        only_in_alt_mode?: boolean;
    }): LuaRenderObject;
    /**
     * Create a text.
     *
     * Not all fonts support scaling.
     * @param table.text The text to display.
     * @param table.font Name of font to use. Defaults to the same font as flying-text.
     * @param table.time_to_live In ticks. Defaults to living forever.
     * @param table.forces The forces that this object is rendered to. Passing `nil` or an empty table will render it to all forces.
     * @param table.players The players that this object is rendered to. Passing `nil` or an empty table will render it to all players.
     * @param table.visible If this is rendered to anyone at all. Defaults to true.
     * @param table.draw_on_ground If this should be drawn below sprites and entities. Rich text does not support this option. Defaults to false.
     * @param table.orientation The orientation of the text. Default is 0.
     * @param table.alignment Defaults to "left".
     * @param table.vertical_alignment Defaults to "top".
     * @param table.scale_with_zoom Defaults to false. If true, the text scales with player zoom, resulting in it always being the same size on screen, and the size compared to the game world changes.
     * @param table.only_in_alt_mode If this should only be rendered in alt mode. Defaults to false.
     * @param table.use_rich_text If rich text rendering is enabled. Defaults to false.
     */
    draw_text(this: void, table: {
        text: LocalisedString;
        surface: SurfaceIdentification;
        target: ScriptRenderTarget;
        color: Color;
        scale?: double;
        font?: string;
        time_to_live?: uint;
        forces?: ForceSet;
        players?: PlayerIdentification[];
        visible?: boolean;
        draw_on_ground?: boolean;
        orientation?: RealOrientation;
        alignment?: TextAlign;
        vertical_alignment?: VerticalTextAlign;
        scale_with_zoom?: boolean;
        only_in_alt_mode?: boolean;
        use_rich_text?: boolean;
    }): LuaRenderObject;
    /**
     * Gets an array of all valid objects.
     * @param mod_name If provided, get only the render objects created by this mod. An empty string (`""`) refers to all objects not belonging to a mod, such as those created using console commands.
     */
    get_all_objects(this: void, mod_name?: string): LuaRenderObject[];
    /**
     * Gives LuaRenderObject for given object ID. May return nil if object does not exist or is invalid.
     */
    get_object_by_id(this: void, object_id: uint64): LuaRenderObject | null;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
}
/**
 * Prototype of a resource category.
 */
interface LuaResourceCategoryPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for roboports.
 */
interface LuaRoboportControlBehavior extends LuaControlBehavior {
    available_construction_output_signal?: SignalID;
    available_logistic_output_signal?: SignalID;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Selects contents that are to be read from the roboport
     */
    read_items_mode: defines.control_behavior.roboport.read_items_mode;
    /**
     * Legacy field, please use LuaRoboportControlBehavior::read_items_mode instead. `true` if the roboport should report the logistics network content to the circuit network.
     */
    read_logistics: boolean;
    /**
     * `true` if the roboport should report the robot statistics to the circuit network.
     */
    read_robot_stats: boolean;
    roboport_count_output_signal?: SignalID;
    total_construction_output_signal?: SignalID;
    total_logistic_output_signal?: SignalID;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for rocket silos.
 */
interface LuaRocketSiloControlBehavior extends LuaControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The items read mode for the rocket silo.
     */
    read_mode: defines.control_behavior.rocket_silo.read_mode;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for selector combinators.
 */
interface LuaSelectorCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The selector combinator parameters. `parameters` may be `nil` in order to clear the parameters.
     */
    parameters: SelectorCombinatorParameters;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Object containing mod settings of three distinct types: `startup`, `global`, and `player`. An instance of LuaSettings is available through the global object named `settings`.
 */
interface LuaSettings {
    /**
     * Gets the current per-player settings for the given player, indexed by prototype name. Returns the same structure as {@link LuaPlayer::mod_settings | runtime:LuaPlayer::mod_settings}. This table becomes invalid if its associated player does.
     *
     * Even though this attribute is a getter, individual settings can be changed by overwriting their {@link ModSetting | runtime:ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     * @example ```
    -- Change the value of the "active_lifestyle" setting
    settings.get_player_settings(player_index)["active_lifestyle"] = {value = true}
    ```
     */
    get_player_settings(this: void, player: PlayerIdentification): Record<string, ModSetting>;
    /**
     * The current global mod settings, indexed by prototype name.
     *
     * Even though this attribute is marked as read-only, individual settings can be changed by overwriting their {@link ModSetting | runtime:ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     */
    readonly global: Record<string, ModSetting>;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The **default** player mod settings for this map, indexed by prototype name. Changing these settings only affects the default settings for future players joining the game.
     *
     * Individual settings can be changed by overwriting their {@link ModSetting | runtime:ModSetting} table. Mods can only change their own settings. Using the in-game console, all player settings can be changed.
     */
    readonly player_default: Record<string, ModSetting>;
    /**
     * The startup mod settings, indexed by prototype name.
     */
    readonly startup: Record<string, ModSetting>;
}
/**
 * Prototype of a shortcut.
 */
interface LuaShortcutPrototype extends LuaPrototypeBase {
    readonly action: string;
    /**
     * The control input that is associated with this shortcut, if any.
     */
    readonly associated_control_input?: string;
    /**
     * The item to create when this shortcut is used, if any.
     */
    readonly item_to_spawn?: LuaItemPrototype;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The technology that needs to be researched once (in any save) for this shortcut to be unlocked (in all saves).
     */
    readonly technology_to_unlock?: LuaTechnologyPrototype;
    readonly toggleable: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Functions for use during simulations. This object cannot be saved, and cannot be used outside of a simulation.
 *
 * The simulation object instance can be obtained from {@link LuaGameScript::simulation | runtime:LuaGameScript::simulation}.
 */
interface LuaSimulation {
    /**
     * Activate the rail planner at the given position.
     * @param table.ghost_mode Defaults to `false`.
     * @param table.build_mode Defaults to {@link normal | runtime:defines.build_mode.normal}.
     */
    activate_rail_planner(this: void, table: {
        position?: MapPosition;
        ghost_mode?: boolean;
        build_mode?: defines.build_mode;
    }): void;
    /**
     * Send a control press event at the current cursor position.
     * @param table.control The name of the control input to press.
     * @param table.notify Whether to show flying text of the activated control.
     */
    control_down(this: void, table: {
        control: string;
        notify: boolean;
    }): void;
    /**
     * Send a control down and up event at the current cursor position. This is equivalent to calling {@link LuaSimulation::control_down | runtime:LuaSimulation::control_down}, then {@link LuaSimulation::control_up | runtime:LuaSimulation::control_up}.
     * @param table.control The name of the control input to press and release.
     * @param table.notify Whether to show flying text of the activated control.
     */
    control_press(this: void, table: {
        control: string;
        notify: boolean;
    }): void;
    /**
     * Send a control release event at the current cursor position.
     * @param table.control The name of the control input to release.
     */
    control_up(this: void, table: {
        control: string;
    }): void;
    /**
     * @param table.name The name of the new player.
     * @returns The created player.
     */
    create_test_player(this: void, table: {
        name: string;
    }): LuaPlayer;
    /**
     * Deactivate the rail planner.
     */
    deactivate_rail_planner(this: void): void;
    /**
     * @param table.inventory Defaults to `"character"`.
     * @returns Position of the GUI slot on the screen, if successfully found.
     */
    get_slot_position(this: void, table: {
        inventory_index: InventoryIndex;
        slot_index: ItemStackIndex;
        inventory?: 'character' | 'entity';
    }): MapPosition | null;
    /**
     * @returns Center of the GUI widget on the screen, if successfully found.
     */
    get_widget_position(this: void, table: {
        type: SimulationWidgetType;
        data?: string;
        data2?: string;
    }): MapPosition | null;
    /**
     * Send a left mouse button click event at its current position. This is equivalent to calling {@link LuaSimulation::mouse_down | runtime:LuaSimulation::mouse_down}, then {@link LuaSimulation::mouse_up | runtime:LuaSimulation::mouse_up}.
     */
    mouse_click(this: void): void;
    /**
     * Send a left mouse button-down event at its current position.
     */
    mouse_down(this: void): void;
    /**
     * Send a left mouse button-up event at its current position.
     */
    mouse_up(this: void): void;
    /**
     * Move the cursor towards the given position at the given speed.
     * @param table.speed Defaults to `0.2`.
     * @returns Whether the cursor will reach the target position with this move.
     */
    move_cursor(this: void, table: {
        position: MapPosition;
        speed?: double;
    }): boolean;
    /**
     * Scroll the clipboard backwards by one entry.
     */
    scroll_clipboard_backwards(this: void): void;
    /**
     * Scroll the clipboard forwards by one entry.
     */
    scroll_clipboard_forwards(this: void): void;
    /**
     * Write text as if it was typed by a player. Overwrites existing text by selecting it first.
     * @param table.text The text to write. Does nothing if no text is provided.
     */
    write(this: void, table: {
        text?: string;
    }): void;
    active_quickbars: uint8;
    camera_alt_info: boolean;
    camera_player: PlayerIdentification;
    camera_player_cursor_direction: defines.direction;
    camera_player_cursor_position?: MapPosition;
    camera_position?: MapPosition;
    camera_surface_index?: uint;
    camera_zoom: double;
    gui_tooltip_interval: double;
    hide_cursor: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    smart_belt_building?: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a space connection.
 */
interface LuaSpaceConnectionPrototype extends LuaPrototypeBase {
    readonly asteroid_spawn_definitions?: SpaceConnectionAsteroidSpawnDefinition[];
    readonly from: LuaSpaceLocationPrototype;
    readonly length: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly to: LuaSpaceLocationPrototype;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a space location, such as a planet.
 */
interface LuaSpaceLocationPrototype extends LuaPrototypeBase {
    readonly asteroid_spawn_definitions?: SpaceLocationAsteroidSpawnDefinition[];
    readonly asteroid_spawn_influence: double;
    readonly entities_require_heating?: boolean;
    readonly map_gen_settings?: MapGenSettings;
    readonly map_seed_offset?: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly player_effects?: TriggerItem[];
    readonly pollutant_type?: LuaAirbornePollutantPrototype;
    readonly position: MapPosition;
    readonly solar_power_in_space: double;
    /**
     * A mapping of the surface property name to the value.
     */
    readonly surface_properties?: Record<string, double>;
    readonly ticks_between_player_effects?: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A space platform.
 */
interface LuaSpacePlatform {
    /**
     * Applies the starter pack for this platform if it hasn't already been applied.
     * @returns The platform hub.
     */
    apply_starter_pack(this: void): LuaEntity | null;
    /**
     * Cancels deletion of this space platform if it was scheduled for deletion.
     */
    cancel_deletion(this: void): void;
    /**
     * Creates the given asteroid chunks on this platform.
     */
    create_asteroid_chunks(this: void, asteroid_chunks: AsteroidChunk[]): void;
    /**
     * Damages the given tile if it exists, the chunk is generated, and it is a platform foundation tile.
     */
    damage_tile(this: void, table: {
        position: TilePosition;
        damage: float;
        cause?: LuaEntity;
    }): void;
    /**
     * Schedules this space platform for deletion.
     * @param ticks The number of ticks from now when this platform will be deleted.
     */
    destroy(this: void, ticks?: uint): void;
    /**
     * Destroys all asteroid chunks from the given area. If no area and no position are given, then the entire surface is searched.
     * @param table.invert If the filters should be inverted.
     */
    destroy_asteroid_chunks(this: void, table: {
        area?: BoundingBox;
        position?: MapPosition;
        name?: AsteroidChunkID | AsteroidChunkID[];
        limit?: uint;
        invert?: boolean;
    }): void;
    /**
     * Find asteroid chunks of a given name in a given area.
     *
     * If no filters are given, returns all asteroid chunks in the search area. If multiple filters are specified, returns only asteroid chunks matching every given filter. If no area and no position are given, the entire surface is searched.
     * @param table.invert If the filters should be inverted.
     * @example ```
    game.surfaces[1].find_asteroid_chunks_filtered{area = {{-10, -10}, {10, 10}}, name = "carbonic-asteroid"} -- gets all asteroids with the given name in the rectangle
    game.surfaces[1].find_asteroid_chunks_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 asteroid chunks in the rectangle
    ```
     */
    find_asteroid_chunks_filtered(this: void, table: {
        area?: BoundingBox;
        position?: MapPosition;
        name?: AsteroidChunkID | AsteroidChunkID[];
        limit?: uint;
        invert?: boolean;
    }): AsteroidChunk[];
    /**
     * Repairs the given tile if it's damaged.
     */
    repair_tile(this: void, position: TilePosition, amount?: float): void;
    /**
     * The damaged tiles on this platform.
     */
    readonly damaged_tiles: {
        position: TilePosition;
        damage: float;
    }[];
    /**
     * The force of this space platform.
     */
    readonly force: LuaForce;
    /**
     * The hub on this platform. `nil` if the platform has not had the starter pack applied or hub was destroyed but the platform not yet deleted.
     *
     * If the hub is destroyed the platform will be deleted at the end of the tick but is otherwise valid to use until that point.
     */
    readonly hub?: LuaEntity;
    /**
     * The unique index of this space platform.
     */
    readonly index: uint;
    /**
     * The name of this space platform.
     */
    name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * This platform's current schedule, if any. Set to `nil` to clear.
     *
     * The schedule can't be changed by modifying the returned table. Instead, changes must be made by assigning a new table to this attribute.
     */
    schedule?: PlatformSchedule;
    /**
     * If this platform is scheduled for deletion.
     *
     * Returns how many ticks are left before the platform will be deleted. 0 if not scheduled for deletion.
     */
    readonly scheduled_for_deletion: uint;
    /**
     * The space location this space platform is stopped at or `nil`.
     */
    readonly space_location?: LuaSpaceLocationPrototype;
    speed: double;
    /**
     * The starter pack used to create this space platform.
     */
    readonly starter_pack: ItemIDAndQualityIDPair;
    /**
     * The current state of this space platform.
     */
    readonly state: defines.space_platform_state;
    /**
     * The surface that belongs to this platform (if it has been created yet).
     */
    readonly surface: LuaSurface;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * The total weight of the platform.
     */
    readonly weight: uint;
}
/**
 * Control behavior for space platform hubs
 */
interface LuaSpacePlatformHubControlBehavior extends LuaControlBehavior {
    /**
     * Signal to be transmitted with platform's damage taken value.
     */
    damage_taken_signal?: SignalID;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * `true` if this hub is sending its content to a circuit network
     */
    read_contents: boolean;
    /**
     * Whether damage taken by the space platform is sent to circuit network.
     */
    read_damage_taken: boolean;
    /**
     * Whether current connection "from" end is sent to circuit network.
     */
    read_moving_from: boolean;
    /**
     * Whether current connection "to" end is sent to circuit network.
     */
    read_moving_to: boolean;
    /**
     * Whether current speed of space platform is sent to circuit network.
     */
    read_speed: boolean;
    /**
     * Whether the signals are used for circuit conditions in the platform's schedule
     */
    send_to_platform: boolean;
    /**
     * Signal to be transmitted with platform's current speed.
     */
    speed_signal?: SignalID;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for storage tanks.
 */
interface LuaStorageTankControlBehavior extends LuaControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * If the storage tank content is sent to circuit network
     */
    read_contents: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Style of a GUI element. All of the attributes listed here may be `nil` if not available for a particular GUI element.
 */
interface LuaStyle {
    badge_font: string;
    badge_horizontal_spacing: int;
    bar_width: uint;
    /**
     * Space between the table cell contents bottom and border.
     */
    bottom_cell_padding: int;
    bottom_margin: int;
    bottom_padding: int;
    /**
     * Space between the table cell contents and border. Sets top/right/bottom/left cell paddings to this value.
     */
    cell_padding: int;
    clicked_font_color: Color;
    clicked_vertical_offset: int;
    color: Color;
    /**
     * Array containing the alignment for every column of this table element. Even though this property is marked as read-only, the alignment can be changed by indexing the LuaCustomTable, like so:
     * @example ```
    table_element.style.column_alignments[1] = "center"
    ```
     */
    readonly column_alignments: Record<uint, Alignment>;
    default_badge_font_color: Color;
    disabled_badge_font_color: Color;
    disabled_font_color: Color;
    draw_grayscale_picture: boolean;
    extra_bottom_margin_when_activated: int;
    extra_bottom_padding_when_activated: int;
    extra_left_margin_when_activated: int;
    extra_left_padding_when_activated: int;
    /**
     * Sets `extra_top/right/bottom/left_margin_when_activated` to this value.
     *
     * An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    extra_margin_when_activated: int | int[];
    /**
     * Sets `extra_top/right/bottom/left_padding_when_activated` to this value.
     *
     * An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    extra_padding_when_activated: int | int[];
    extra_right_margin_when_activated: int;
    extra_right_padding_when_activated: int;
    extra_top_margin_when_activated: int;
    extra_top_padding_when_activated: int;
    font: string;
    font_color: Color;
    /**
     * Gui of the {@link LuaGuiElement | runtime:LuaGuiElement} of this style.
     */
    readonly gui: LuaGui;
    /**
     * Sets both minimal and maximal height to the given value.
     */
    height: int;
    /**
     * Horizontal align of the inner content of the widget, if any.
     */
    horizontal_align?: 'left' | 'center' | 'right';
    /**
     * Horizontal space between individual cells.
     */
    horizontal_spacing: int;
    /**
     * Whether the GUI element can be squashed (by maximal width of some parent element) horizontally. `nil` if this element does not support squashing.
     *
     * This is mainly meant to be used for scroll-pane. The default value is false.
     */
    horizontally_squashable?: boolean;
    /**
     * Whether the GUI element stretches its size horizontally to other elements. `nil` if this element does not support stretching.
     */
    horizontally_stretchable?: boolean;
    hovered_font_color: Color;
    /**
     * Space between the table cell contents left and border.
     */
    left_cell_padding: int;
    left_margin: int;
    left_padding: int;
    /**
     * Sets top/right/bottom/left margins to this value.
     *
     * An array with two values sets top/bottom margin to the first value and left/right margin to the second value. An array with four values sets top, right, bottom, left margin respectively.
     */
    margin: int | int[];
    /**
     * Maximal height ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_height: int;
    /**
     * Maximal width ensures, that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_width: int;
    /**
     * Minimal height ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_height: int;
    /**
     * Minimal width ensures, that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_width: int;
    /**
     * Name of this style.
     */
    readonly name: string;
    /**
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_height: int;
    /**
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a smaller or bigger size.
     */
    natural_width: int;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Sets top/right/bottom/left paddings to this value.
     *
     * An array with two values sets top/bottom padding to the first value and left/right padding to the second value. An array with four values sets top, right, bottom, left padding respectively.
     */
    padding: int | int[];
    pie_progress_color: Color;
    /**
     * How this GUI element handles rich text.
     */
    rich_text_setting: defines.rich_text_setting;
    /**
     * Space between the table cell contents right and border.
     */
    right_cell_padding: int;
    right_margin: int;
    right_padding: int;
    selected_badge_font_color: Color;
    selected_clicked_font_color: Color;
    selected_font_color: Color;
    selected_hovered_font_color: Color;
    single_line: boolean;
    /**
     * Sets both width and height to the given value. Also accepts an array with two values, setting width to the first and height to the second one.
     */
    size: int | int[];
    stretch_image_to_widget_size: boolean;
    strikethrough_color: Color;
    /**
     * Space between the table cell contents top and border.
     */
    top_cell_padding: int;
    top_margin: int;
    top_padding: int;
    use_header_filler: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Vertical align of the inner content of the widget, if any.
     */
    vertical_align?: 'top' | 'center' | 'bottom';
    /**
     * Vertical space between individual cells.
     */
    vertical_spacing: int;
    /**
     * Whether the GUI element can be squashed (by maximal height of some parent element) vertically. `nil` if this element does not support squashing.
     *
     * This is mainly meant to be used for scroll-pane. The default (parent) value for scroll pane is true, false otherwise.
     */
    vertically_squashable?: boolean;
    /**
     * Whether the GUI element stretches its size vertically to other elements. `nil` if this element does not support stretching.
     */
    vertically_stretchable?: boolean;
    /**
     * Sets both minimal and maximal width to the given value.
     */
    width: int;
}
/**
 * A "domain" of the world. Surfaces can only be created and deleted through the API. Surfaces are uniquely identified by their name. Every game contains at least the surface "nauvis".
 */
interface LuaSurface {
    /**
     * Adds the given script area.
     * @returns The id of the created area.
     */
    add_script_area(this: void, area: ScriptArea): uint;
    /**
     * Adds the given script position.
     * @returns The id of the created position.
     */
    add_script_position(this: void, position: ScriptPosition): uint;
    /**
     * Sets the given area to the checkerboard lab tiles.
     * @param area The tile area.
     */
    build_checkerboard(this: void, area: BoundingBox): void;
    /**
     * Send a group to build a new base.
     *
     * The specified force must be AI-controlled; i.e. `force.ai_controllable` must be `true`.
     * @param position Location of the new base.
     * @param unit_count Number of biters to send for the base-building task.
     * @param force Force the new base will belong to. Defaults to enemy.
     */
    build_enemy_base(this: void, position: MapPosition, unit_count: uint, force?: ForceID): void;
    /**
     * Calculate values for a list of tile properties at a list of positions. Requests for unrecognized properties will be ignored, so this can also be used to test whether those properties exist.
     * @param property_names Names of properties (`"elevation"`, etc) to calculate.
     * @param positions Positions for which to calculate property values.
     * @returns Table of property value lists, keyed by property name.
     */
    calculate_tile_properties(this: void, property_names: string[], positions: MapPosition[]): Record<string, double[]>;
    /**
     * If there exists an entity at the given location that can be fast-replaced with the given entity parameters.
     * @param table.name Name of the entity to check.
     * @param table.position Where the entity would be placed.
     * @param table.direction Direction the entity would be placed. Defaults to `north`.
     * @param table.force The force that would place the entity. Defaults to the `"neutral"` force.
     */
    can_fast_replace(this: void, table: {
        name: string;
        position: MapPosition;
        direction?: defines.direction;
        force?: ForceID;
    }): boolean;
    /**
     * Check for collisions with terrain or other entities.
     * @param table.name Name of the entity prototype to check.
     * @param table.position Where the entity would be placed.
     * @param table.direction Direction of the placed entity. Defaults to `north`.
     * @param table.force The force that would place the entity. Defaults to the `"neutral"` force.
     * @param table.build_check_type Which type of check should be carried out. Defaults to `ghost_revive`.
     * @param table.forced If `true`, entities that can be marked for deconstruction are ignored. Only used if `build_check_type` is either `manual_ghost`, `script_ghost` or `blueprint_ghost`. Defaults to `false`.
     * @param table.inner_name The prototype name of the entity contained in the ghost. Only used if `name` is `entity-ghost`.
     */
    can_place_entity(this: void, table: {
        name: string;
        position: MapPosition;
        direction?: defines.direction;
        force?: ForceID;
        build_check_type?: defines.build_check_type;
        forced?: boolean;
        inner_name?: string;
    }): boolean;
    /**
     * Cancel a deconstruction order.
     * @param table.area The area to cancel deconstruction orders in.
     * @param table.force The force whose deconstruction orders to cancel.
     * @param table.player The player to set the last_user to, if any.  Also the player whose undo queue this action should be added to.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped. Defaults to `false`.
     * @param table.item The deconstruction item to use if any.
     * @param table.item_index The index of the undo item to add this action to. An index of `0` creates a new undo item for it. Defaults to putting it into the appropriate undo item automatically if not specified.
     * @param table.super_forced If the cancel deconstruction is super-forced. Defaults to `false`.
     */
    cancel_deconstruct_area(this: void, table: {
        area: BoundingBox;
        force: ForceID;
        player?: PlayerIdentification;
        skip_fog_of_war?: boolean;
        item?: LuaItemStack;
        item_index?: uint;
        super_forced?: boolean;
    }): void;
    /**
     * Cancel a upgrade order.
     * @param table.area The area to cancel upgrade orders in.
     * @param table.force The force whose upgrade orders to cancel.
     * @param table.player The player to set the last_user to if any.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped.
     * @param table.item The upgrade item to use.
     */
    cancel_upgrade_area(this: void, table: {
        area: BoundingBox;
        force: ForceID;
        player?: PlayerIdentification;
        skip_fog_of_war?: boolean;
        item: LuaItemStack;
    }): void;
    /**
     * Clears this surface deleting all entities and chunks on it.
     * @param ignore_characters Whether characters on this surface that are connected to or associated with players should be ignored (not destroyed). Defaults to `false`.
     */
    clear(this: void, ignore_characters?: boolean): void;
    /**
     * Completely removes hidden and double hidden tiles data on this surface.
     */
    clear_hidden_tiles(this: void): void;
    /**
     * Clears all pollution on this surface.
     */
    clear_pollution(this: void): void;
    /**
     * Clones the given area.
     *
     * Entities are cloned in an order such that they can always be created, eg rails before trains.
     * @param table.clone_tiles If tiles should be cloned
     * @param table.clone_entities If entities should be cloned
     * @param table.clone_decoratives If decoratives should be cloned
     * @param table.clear_destination_entities If the destination entities should be cleared
     * @param table.clear_destination_decoratives If the destination decoratives should be cleared
     * @param table.expand_map If the destination surface should be expanded when destination_area is outside current bounds. Defaults to `false`.
     * @param table.create_build_effect_smoke If true, the building effect smoke will be shown around the new entities. Defaults to `false`.
     */
    clone_area(this: void, table: {
        source_area: BoundingBox;
        destination_area: BoundingBox;
        destination_surface?: SurfaceIdentification;
        destination_force?: ForceID;
        clone_tiles?: boolean;
        clone_entities?: boolean;
        clone_decoratives?: boolean;
        clear_destination_entities?: boolean;
        clear_destination_decoratives?: boolean;
        expand_map?: boolean;
        create_build_effect_smoke?: boolean;
    }): void;
    /**
     * Clones the given area.
     *
     * {@link defines.events.on_entity_cloned | runtime:defines.events.on_entity_cloned} is raised for each entity, and then {@link defines.events.on_area_cloned | runtime:defines.events.on_area_cloned} is raised.
     *
     * Entities are cloned in an order such that they can always be created, eg rails before trains.
     * @param table.clone_tiles If tiles should be cloned
     * @param table.clone_entities If entities should be cloned
     * @param table.clone_decoratives If decoratives should be cloned
     * @param table.clear_destination_entities If the destination entities should be cleared
     * @param table.clear_destination_decoratives If the destination decoratives should be cleared
     * @param table.expand_map If the destination surface should be expanded when destination_area is outside current bounds. Defaults to `false`.
     * @param table.manual_collision_mode If manual-style collision checks should be done.
     * @param table.create_build_effect_smoke If true, the building effect smoke will be shown around the new entities.
     */
    clone_brush(this: void, table: {
        source_offset: TilePosition;
        destination_offset: TilePosition;
        source_positions: TilePosition[];
        destination_surface?: SurfaceIdentification;
        destination_force?: LuaForce | string;
        clone_tiles?: boolean;
        clone_entities?: boolean;
        clone_decoratives?: boolean;
        clear_destination_entities?: boolean;
        clear_destination_decoratives?: boolean;
        expand_map?: boolean;
        manual_collision_mode?: boolean;
        create_build_effect_smoke?: boolean;
    }): void;
    /**
     * Clones the given entities.
     *
     * Entities are cloned in an order such that they can always be created, eg rails before trains.
     * @param table.create_build_effect_smoke If true, the building effect smoke will be shown around the new entities.
     */
    clone_entities(this: void, table: {
        entities: LuaEntity[];
        destination_offset: Vector;
        destination_surface?: SurfaceIdentification;
        destination_force?: ForceID;
        snap_to_grid?: boolean;
        create_build_effect_smoke?: boolean;
    }): void;
    /**
     * Count entities of given type or name in a given area. Works just like {@link LuaSurface::find_entities_filtered | runtime:LuaSurface::find_entities_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of entities.
     *
     * - If no `area` or `position` are given, the entire surface is searched.
     *
     * - If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box).
     *
     * - If `position` and `radius` are given, this returns entities in the radius of the position.
     *
     * - If `area` is specified, this returns entities colliding with that area.
     */
    count_entities_filtered(this: void, filter: EntitySearchFilters): uint;
    /**
     * Count tiles of a given name in a given area. Works just like {@link LuaSurface::find_tiles_filtered | runtime:LuaSurface::find_tiles_filtered}, except this only returns the count. As it doesn't construct all the wrapper objects, this is more efficient if one is only interested in the number of tiles.
     *
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     */
    count_tiles_filtered(this: void, filter: TileSearchFilters): uint;
    /**
     * Adds the given decoratives to the surface.
     *
     * This will merge decoratives of the same type that already exist effectively increasing the "amount" field.
     * @param table.check_collision If collision should be checked against entities/tiles.
     */
    create_decoratives(this: void, table: {
        check_collision?: boolean;
        decoratives: Decorative[];
    }): void;
    /**
     * Create an entity on this surface.
     * @example ```
    local asm = game.surfaces[1].create_entity{name = "assembling-machine-1", position = {15, 3}, force = game.forces.player, recipe = "iron-stick"}
    ```
     * @example ```
    -- Creates a filter inserter with circuit conditions and a filter
    game.surfaces[1].create_entity{
      name = "filter-inserter", position = {20, 15}, force = game.player.force,
      conditions =
      {
        red = {name = "wood", count = 3, operator = ">"},
        green = {name = "iron-ore", count = 1, operator = "<"},
        logistics = {name = "wood", count = 3, operator = "="}
      },
      filters = {{index = 1, name = "iron-ore"}}
    }
    ```
     * @example ```
    -- Creates a requester chest already set to request 128 iron plates.
    game.surfaces[1].create_entity{
      name = "requester-chest", position = {game.player.position.x+3, game.player.position.y},
      force = game.player.force, request_filters = {{index = 1, name = "iron-plate", count = 128}}
    }
    ```
     * @example ```
    game.surfaces[1].create_entity{name = "big-biter", position = {15, 3}, force = game.forces.player} -- Friendly biter
    game.surfaces[1].create_entity{name = "medium-biter", position = {15, 3}, force = game.forces.enemy} -- Enemy biter
    ```
     * @example ```
    -- Creates a basic inserter at the player's location facing north
    game.surfaces[1].create_entity{name = "inserter", position = game.player.position, direction = defines.direction.north}
    ```
     * @returns The created entity or `nil` if the creation failed.
     */
    create_entity(this: void, table: LuaSurfaceCreateEntityParams): LuaEntity | null;
    /**
     * Creates a global electric network for this surface, if one doesn't exist already.
     */
    create_global_electric_network(this: void): void;
    /**
     * Creates a particle at the given location
     * @param table.name The particle name.
     * @param table.position Where to create the particle.
     */
    create_particle(this: void, table: {
        name: ParticleID;
        position: MapPosition;
        movement: Vector;
        height: float;
        vertical_speed: float;
        frame_speed: float;
    }): void;
    /**
     * @param table.name The smoke prototype name to create.
     * @param table.position Where to create the smoke.
     */
    create_trivial_smoke(this: void, table: {
        name: TrivialSmokeID;
        position: MapPosition;
    }): void;
    /**
     * Create a new unit group at a given position.
     * @param table.position Initial position of the new unit group.
     * @param table.force Force of the new unit group. Defaults to `"enemy"`.
     */
    create_unit_group(this: void, table: {
        position: MapPosition;
        force?: ForceID;
    }): LuaCommandable;
    /**
     * Place a deconstruction request.
     * @param table.area The area to mark for deconstruction.
     * @param table.force The force whose bots should perform the deconstruction.
     * @param table.player The player to set the last_user to if any.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped. Defaults to `false`.
     * @param table.item The deconstruction item to use if any.
     * @param table.super_forced If the deconstruction is super-forced. Defaults to `false`.
     */
    deconstruct_area(this: void, table: {
        area: BoundingBox;
        force: ForceID;
        player?: PlayerIdentification;
        skip_fog_of_war?: boolean;
        item?: LuaItemStack;
        super_forced?: boolean;
    }): void;
    /**
     * Whether the given decorative prototype collides at the given position and direction.
     * @param prototype The decorative prototype to check.
     * @param position The position to check.
     */
    decorative_prototype_collides(this: void, prototype: DecorativeID, position: MapPosition): boolean;
    /**
     * @param position The chunk position to delete
     */
    delete_chunk(this: void, position: ChunkPosition): void;
    /**
     * Removes all decoratives from the given area. If no area and no position are given, then the entire surface is searched.
     * @param table.exclude_soft Soft decoratives can be drawn over rails.
     * @param table.invert If the filters should be inverted.
     */
    destroy_decoratives(this: void, table: {
        area?: BoundingBox;
        position?: TilePosition;
        name?: DecorativeID | DecorativeID[];
        collision_mask?: CollisionLayerID | CollisionLayerID[] | Record<CollisionLayerID, true>;
        from_layer?: string;
        to_layer?: string;
        exclude_soft?: boolean;
        limit?: uint;
        invert?: boolean;
    }): void;
    /**
     * Destroys the global electric network for this surface, if it exists.
     */
    destroy_global_electric_network(this: void): void;
    /**
     * Sets the given script area to the new values.
     * @param id The area to edit.
     */
    edit_script_area(this: void, id: uint, area: ScriptArea): void;
    /**
     * Sets the given script position to the new values.
     * @param id The position to edit.
     */
    edit_script_position(this: void, id: uint, position: ScriptPosition): void;
    /**
     * Whether the given entity prototype collides at the given position and direction.
     * @param prototype The entity prototype to check.
     * @param position The position to check.
     * @param use_map_generation_bounding_box If the map generation bounding box should be used instead of the collision bounding box.
     */
    entity_prototype_collides(this: void, prototype: EntityID, position: MapPosition, use_map_generation_bounding_box: boolean, direction?: defines.direction): boolean;
    /**
     * Creates lightning. If other entities which can be lightning targets are nearby, the final position will be adjusted.
     */
    execute_lightning(this: void, table: {
        name: EntityID;
        position: MapPosition;
    }): void;
    /**
     * Find the logistic network with a cell closest to a given position.
     * @param force Force the logistic network should belong to.
     * @returns The found network or `nil` if no such network was found.
     */
    find_closest_logistic_network_by_position(this: void, position: MapPosition, force: ForceID): LuaLogisticNetwork | null;
    /**
     * Find decoratives of a given name in a given area.
     *
     * If no filters are given, returns all decoratives in the search area. If multiple filters are specified, returns only decoratives matching every given filter. If no area and no position are given, the entire surface is searched.
     * @param table.exclude_soft Soft decoratives can be drawn over rails.
     * @param table.invert If the filters should be inverted.
     * @example ```
    game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, name = "sand-decal"} -- gets all sand-decals in the rectangle
    game.surfaces[1].find_decoratives_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 decoratives in the rectangle
    ```
     */
    find_decoratives_filtered(this: void, table: {
        area?: BoundingBox;
        position?: TilePosition;
        name?: DecorativeID | DecorativeID[];
        collision_mask?: CollisionLayerID | CollisionLayerID[] | Record<CollisionLayerID, true>;
        from_layer?: string;
        to_layer?: string;
        exclude_soft?: boolean;
        limit?: uint;
        invert?: boolean;
    }): DecorativeResult[];
    /**
     * Find enemy units (entities with type "unit") of a given force within an area.
     *
     * This is more efficient than {@link LuaSurface::find_entities | runtime:LuaSurface::find_entities}.
     * @param center Center of the search area
     * @param radius Radius of the circular search area
     * @param force Force to find enemies of. If not given, uses the player force.
     * @example ```
    -- Find all units who would be interested to attack the player, within 100-tile area.
    local enemies = game.player.surface.find_enemy_units(game.player.position, 100)
    ```
     */
    find_enemy_units(this: void, center: MapPosition, radius: double, force?: ForceID): LuaEntity[];
    /**
     * Find entities in a given area.
     *
     * If no area is given all entities on the surface are returned.
     * @example ```
    -- Will evaluate to a list of all entities within given area.
    game.surfaces["nauvis"].find_entities({{-10, -10}, {10, 10}})
    ```
     */
    find_entities(this: void, area?: BoundingBox): LuaEntity[];
    /**
     * Find all entities of the given type or name in the given area.
     *
     * If no filters (`name`, `type`, `force`, etc.) are given, this returns all entities in the search area. If multiple filters are specified, only entities matching all given filters are returned.
     *
     * - If no `area` or `position` are given, the entire surface is searched.
     *
     * - If `position` is given, this returns the entities colliding with that position (i.e the given position is within the entity's collision box).
     *
     * - If `position` and `radius` are given, this returns the entities within the radius of the position. Looks for the center of entities.
     *
     * - If `area` is specified, this returns the entities colliding with that area.
     * @example ```
    game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, type = "resource"} -- gets all resources in the rectangle
    game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = "iron-ore"} -- gets all iron ores in the rectangle
    game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, name = {"iron-ore", "copper-ore"}} -- gets all iron ore and copper ore in the rectangle
    game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, force = "player"}  -- gets player owned entities in the rectangle
    game.surfaces[1].find_entities_filtered{area = {{-10, -10}, {10, 10}}, limit = 5}  -- gets the first 5 entities in the rectangle
    game.surfaces[1].find_entities_filtered{position = {0, 0}, radius = 10}  -- gets all entities within 10 tiles of the position [0,0].
    ```
     */
    find_entities_filtered(this: void, filter: EntitySearchFilters): LuaEntity[];
    /**
     * Find an entity of the given name at the given position. This checks both the exact position and the bounding box of the entity.
     * @param entity Name of the entity to look for.
     * @param position Coordinates to look at.
     * @example ```
    game.player.selected.surface.find_entity('filter-inserter', {0,0})
    ```
     * @returns `nil` if no such entity is found.
     */
    find_entity(this: void, entity: EntityWithQualityID, position: MapPosition): LuaEntity | null;
    /**
     * Find the logistic network that covers a given position.
     * @param force Force the logistic network should belong to.
     * @returns The found network or `nil` if no such network was found.
     */
    find_logistic_network_by_position(this: void, position: MapPosition, force: ForceID): LuaLogisticNetwork | null;
    /**
     * Finds all of the logistics networks whose construction area intersects with the given position.
     * @param force Force the logistic networks should belong to.
     */
    find_logistic_networks_by_construction_area(this: void, position: MapPosition, force: ForceID): LuaLogisticNetwork[];
    /**
     * Find the enemy military target ({@link military entity | https://wiki.factorio.com/Military_units_and_structures}) closest to the given position.
     * @param table.position Center of the search area.
     * @param table.max_distance Radius of the circular search area.
     * @param table.force The force the result will be an enemy of. Uses the player force if not specified.
     * @returns The nearest enemy military target or `nil` if no enemy could be found within the given area.
     */
    find_nearest_enemy(this: void, table: {
        position: MapPosition;
        max_distance: double;
        force?: ForceID;
    }): LuaEntity | null;
    /**
     * Find the enemy entity-with-owner closest to the given position.
     * @param table.position Center of the search area.
     * @param table.max_distance Radius of the circular search area.
     * @param table.force The force the result will be an enemy of. Uses the player force if not specified.
     * @returns The nearest enemy entity-with-owner or `nil` if no enemy could be found within the given area.
     */
    find_nearest_enemy_entity_with_owner(this: void, table: {
        position: MapPosition;
        max_distance: double;
        force?: ForceID;
    }): LuaEntity;
    /**
     * Find a non-colliding position within a given radius.
     *
     * Special care needs to be taken when using a radius of `0`. The game will not stop searching until it finds a suitable position, so it is important to make sure such a position exists. One particular case where it would not be able to find a solution is running it before any chunks have been generated.
     * @param name Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param center Center of the search area.
     * @param radius Max distance from `center` to search in. A radius of `0` means an infinitely-large search area.
     * @param precision The step length from the given position as it searches, in tiles. Minimum value is `0.01`.
     * @param force_to_tile_center Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Defaults to `false`.
     * @returns The non-colliding position. May be `nil` if no suitable position was found.
     */
    find_non_colliding_position(this: void, name: EntityID, center: MapPosition, radius: double, precision: double, force_to_tile_center?: boolean): MapPosition | null;
    /**
     * Find a non-colliding position within a given rectangle.
     * @param name Prototype name of the entity to find a position for. (The bounding box for the collision checking is taken from this prototype.)
     * @param search_space The rectangle to search inside.
     * @param precision The step length from the given position as it searches, in tiles. Minimum value is 0.01.
     * @param force_to_tile_center Will only check tile centers. This can be useful when your intent is to place a building at the resulting position, as they must generally be placed at tile centers. Defaults to `false`.
     * @returns The non-colliding position. May be `nil` if no suitable position was found.
     */
    find_non_colliding_position_in_box(this: void, name: EntityID, search_space: BoundingBox, precision: double, force_to_tile_center?: boolean): MapPosition | null;
    /**
     * Find all tiles of the given name in the given area.
     *
     * If no filters are given, this returns all tiles in the search area.
     *
     * If no `area` or `position` and `radius` is given, the entire surface is searched. If `position` and `radius` are given, only tiles within the radius of the position are included.
     */
    find_tiles_filtered(this: void, filter: TileSearchFilters): LuaTile[];
    /**
     * Find units (entities with type "unit") of a given force and force condition within a given area.
     *
     * This is more efficient than {@link LuaSurface::find_entities | runtime:LuaSurface::find_entities}.
     * @param table.area Box to find units within.
     * @param table.force Force performing the search.
     * @param table.condition Only forces which meet the condition will be included in the search.
     * @example ```
    -- Find friendly units to "player" force
    local friendly_units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "friend")
    ```
     * @example ```
    -- Find units of "player" force
    local units = game.player.surface.find_units({area = {{-10, -10},{10, 10}}, force = "player", condition = "same"})
    ```
     */
    find_units(this: void, table: {
        area: BoundingBox;
        force: ForceID;
        condition: ForceCondition;
    }): LuaEntity[];
    /**
     * Blocks and generates all chunks that have been requested using all available threads.
     */
    force_generate_chunk_requests(this: void): void;
    /**
     * Get an iterator going over every chunk on this surface.
     */
    get_chunks(this: void): LuaChunkIterator;
    /**
     * Gets the closest entity in the list to this position.
     * @param entities The Entities to check.
     */
    get_closest(this: void, position: MapPosition, entities: LuaEntity[]): LuaEntity | null;
    /**
     * Gets all tiles of the given types that are connected horizontally or vertically to the given tile position including the given tile position.
     *
     * This won't find tiles in non-generated chunks.
     * @param position The tile position to start at.
     * @param tiles The tiles to search for.
     * @param include_diagonal Include tiles that are connected diagonally.
     * @param area The area to find connected tiles in. If provided the start position must be in this area.
     * @returns The resulting set of tiles.
     */
    get_connected_tiles(this: void, position: TilePosition, tiles: TileID[], include_diagonal?: boolean, area?: BoundingBox): TilePosition[];
    /**
     * The double hidden tile name or `nil` if there isn't one for the given position.
     * @param position The tile position.
     */
    get_double_hidden_tile(this: void, position: TilePosition): string;
    /**
     * Returns all the military targets (entities with force) on this chunk for the given force.
     * @param position The chunk's position.
     * @param force Entities of this force will be returned.
     */
    get_entities_with_force(this: void, position: ChunkPosition, force: ForceID): LuaEntity[];
    /**
     * The hidden tile name.
     * @param position The tile position.
     * @returns `nil` if there isn't one for the given position.
     */
    get_hidden_tile(this: void, position: TilePosition): string | null;
    /**
     * Gets the map exchange string for the current map generation settings of this surface.
     */
    get_map_exchange_string(this: void): string;
    /**
     * Get the pollution for a given position.
     *
     * Pollution is stored per chunk, so this will return the same value for all positions in one chunk.
     * @param position The position to poll the chunk's pollution
     * @example ```
    game.surfaces[1].get_pollution({1,2})
    ```
     */
    get_pollution(this: void, position: MapPosition): double;
    /**
     * Gets the value of surface property on this surface.
     * @param property Property to read.
     * @returns Value of the property.
     */
    get_property(this: void, property: SurfacePropertyID): double;
    /**
     * Gets a random generated chunk position or 0,0 if no chunks have been generated on this surface.
     */
    get_random_chunk(this: void): ChunkPosition;
    /**
     * Gets the resource amount of all resources on this surface
     */
    get_resource_counts(this: void): Record<string, uint>;
    /**
     * Gets the first script area by name or id.
     * @param key The name or id of the area to get.
     */
    get_script_area(this: void, key?: string | uint): ScriptArea | null;
    /**
     * Gets the script areas that match the given name or if no name is given all areas are returned.
     */
    get_script_areas(this: void, name?: string): ScriptArea[];
    /**
     * Gets the first script position by name or id.
     * @param key The name or id of the position to get.
     */
    get_script_position(this: void, key?: string | uint): ScriptPosition | null;
    /**
     * Gets the script positions that match the given name or if no name is given all positions are returned.
     */
    get_script_positions(this: void, name?: string): ScriptPosition[];
    /**
     * Gets the starting area radius of this surface.
     */
    get_starting_area_radius(this: void): double;
    /**
     * Get the tile at a given position. An alternative call signature for this method is passing it a single {@link TilePosition | runtime:TilePosition}.
     *
     * Non-integer values will result in them being rounded down.
     */
    get_tile(this: void, x: int, y: int): LuaTile;
    /**
     * Gets the total amount of pollution on the surface by iterating over all the chunks containing pollution.
     */
    get_total_pollution(this: void): double;
    /**
     * Is a given chunk generated?
     * @param position The chunk's position.
     */
    is_chunk_generated(this: void, position: ChunkPosition): boolean;
    /**
     * Play a sound for every player on this surface.
     *
     * The sound is not played if its location is not {@link charted | runtime:LuaForce::chart} for that player.
     * @param table.path The sound to play.
     * @param table.position Where the sound should be played. If not given, it's played at the current position of each player.
     * @param table.volume_modifier The volume of the sound to play. Must be between 0 and 1 inclusive.
     * @param table.override_sound_type The volume mixer to play the sound through. Defaults to the default mixer for the given sound type.
     */
    play_sound(this: void, table: {
        path: SoundPath;
        position?: MapPosition;
        volume_modifier?: double;
        override_sound_type?: SoundType;
    }): void;
    /**
     * Spawn pollution at the given position.
     * @param source Where to spawn the pollution.
     * @param amount How much pollution to add.
     * @param prototype The entity prototype to attribute the pollution change to in statistics. If not defined, the pollution change will not show up in statistics.
     */
    pollute(this: void, source: MapPosition, amount: double, prototype?: EntityID): void;
    /**
     * Print text to the chat console of all players on this surface.
     *
     * By default, messages that are identical to a message sent in the last 60 ticks are not printed again.
     */
    print(this: void, message: LocalisedString, print_settings?: PrintSettings): void;
    /**
     * Regenerate autoplacement of some decoratives on this surface. This can be used to autoplace newly-added decoratives.
     *
     * All specified decorative prototypes must be autoplacable. If nothing is given all decoratives are generated on all chunks.
     * @param decoratives Prototype names of decorative or decoratives to autoplace. When `nil` all decoratives with an autoplace are used.
     * @param chunks The chunk positions to regenerate the decoratives on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     */
    regenerate_decorative(this: void, decoratives?: string | string[], chunks?: ChunkPosition[]): void;
    /**
     * Regenerate autoplacement of some entities on this surface. This can be used to autoplace newly-added entities.
     *
     * All specified entity prototypes must be autoplacable. If nothing is given all entities are generated on all chunks.
     * @param entities Prototype names of entity or entities to autoplace. When `nil` all entities with an autoplace are used.
     * @param chunks The chunk positions to regenerate the entities on. If not given all chunks are regenerated. Note chunks with status < entities are ignored.
     */
    regenerate_entity(this: void, entities?: string | string[], chunks?: ChunkPosition[]): void;
    /**
     * Removes the given script area.
     * @returns If the area was actually removed. False when it didn't exist.
     */
    remove_script_area(this: void, id: uint): boolean;
    /**
     * Removes the given script position.
     * @returns If the position was actually removed. False when it didn't exist.
     */
    remove_script_position(this: void, id: uint): boolean;
    /**
     * Generates a path with the specified constraints (as an array of {@link PathfinderWaypoints | runtime:PathfinderWaypoint}) using the unit pathfinding algorithm. This path can be used to emulate pathing behavior by script for non-unit entities, such as vehicles. If you want to command actual units (such as biters or spitters) to move, use {@link LuaEntity::set_command | runtime:LuaEntity::set_command} instead.
     *
     * The resulting path is ultimately returned asynchronously via {@link on_script_path_request_finished | runtime:on_script_path_request_finished}.
     * @param table.bounding_box The dimensions of the object that's supposed to travel the path.
     * @param table.collision_mask The collision mask the `bounding_box` collides with.
     * @param table.start The position from which to start pathfinding.
     * @param table.goal The position to find a path to.
     * @param table.force The force for which to generate the path, determining which gates can be opened for example.
     * @param table.radius How close the pathfinder needs to get to its `goal` (in tiles). Defaults to `1`.
     * @param table.pathfind_flags Flags that affect pathfinder behavior.
     * @param table.can_open_gates Whether the path request can open gates. Defaults to `false`.
     * @param table.path_resolution_modifier Defines how coarse the pathfinder's grid is, where smaller values mean a coarser grid. Defaults to `0`, which equals a resolution of `1x1` tiles, centered on tile centers. Values range from `-8` to `8` inclusive, where each integer increment doubles/halves the resolution. So, a resolution of `-8` equals a grid of `256x256` tiles, and a resolution of `8` equals `1/256` of a tile.
     * @param table.max_gap_size Defines the maximum allowed distance between path waypoints. 0 means that paths must be contiguous (as they are for biters). Values greater than 0 will produce paths with "gaps" that are suitable for spiders. Allowed values are from `0` to `31`. Defaults to `0`.
     * @param table.max_attack_distance Defines the maximum allowed distance between the last traversable path waypoint and an obstacle entity to be destroyed. Only used when finding a discontiguous path, i.e. when `max_gap_size` > 0. This field filters out paths that are blocked by obstacles that are outside the entity's attack range. Allowed values are `0` or greater. Defaults to `max_gap_size`.
     * @param table.entity_to_ignore Makes the pathfinder ignore collisions with this entity if it is given.
     * @returns A unique handle to identify this call when {@link on_script_path_request_finished | runtime:on_script_path_request_finished} fires.
     */
    request_path(this: void, table: {
        bounding_box: BoundingBox;
        collision_mask: CollisionMask;
        start: MapPosition;
        goal: MapPosition;
        force: ForceID;
        radius?: double;
        pathfind_flags?: PathfinderFlags;
        can_open_gates?: boolean;
        path_resolution_modifier?: int;
        max_gap_size?: int;
        max_attack_distance?: double;
        entity_to_ignore?: LuaEntity;
    }): uint;
    /**
     * Request that the game's map generator generate chunks at the given position for the given radius on this surface. If the radius is `0`, then only the chunk at the given position is generated.
     * @param position Where to generate the new chunks.
     * @param radius The chunk radius from `position` to generate new chunks in. Defaults to `0`.
     */
    request_to_generate_chunks(this: void, position: MapPosition, radius?: uint): void;
    /**
     * Set generated status of a chunk. Useful when copying chunks.
     * @param position The chunk's position.
     * @param status The chunk's new status.
     */
    set_chunk_generated_status(this: void, position: ChunkPosition, status: defines.chunk_generated_status): void;
    /**
     * Set double hidden tile for the specified position. During normal gameplay, only {@link non-mineable | runtime:LuaTilePrototype::mineable_properties} tiles can become double hidden.
     *
     * Does nothing if hidden tile at specified position does not exist.
     * @param position The tile position.
     * @param tile The new double hidden tile or `nil` to clear the double hidden tile.
     */
    set_double_hidden_tile(this: void, position: TilePosition, tile?: TileID): void;
    /**
     * Set the hidden tile for the specified position. While during normal gameplay only {@link non-mineable | runtime:LuaTilePrototype::mineable_properties} or {@link foundation | runtime:LuaTilePrototype::is_foundation} tiles can become hidden, this method allows any kind of tile to be set as the hidden one.
     * @param position The tile position.
     * @param tile The new hidden tile or `nil` to clear the hidden tile.
     */
    set_hidden_tile(this: void, position: TilePosition, tile?: TileID): void;
    /**
     * Give a command to multiple units. This will automatically select suitable units for the task.
     * @param table.unit_count Number of units to give the command to.
     * @param table.force Force of the units this command is to be given to. If not specified, uses the enemy force.
     * @param table.unit_search_distance Radius to search for units. The search area is centered on the destination of the command. If not specified uses default value of 150.
     * @returns Number of units actually sent. May be less than `count` if not enough units were available.
     */
    set_multi_command(this: void, table: {
        command: Command;
        unit_count: uint;
        force?: ForceID;
        unit_search_distance?: uint;
    }): uint;
    /**
     * Sets the value of surface property on this surface.
     * @param property Property to change.
     * @param value The wanted value of the property.
     */
    set_property(this: void, property: SurfacePropertyID, value: double): void;
    /**
     * Set tiles at specified locations. Can automatically correct the edges around modified tiles.
     *
     * Placing a {@link mineable | runtime:LuaTilePrototype::mineable_properties} tile on top of a non-mineable or {@link foundation | runtime:LuaTilePrototype::is_foundation} one will turn the latter into the {@link LuaTile::hidden_tile | runtime:LuaTile::hidden_tile} for that tile. Placing a mineable non-foundation tile on a mineable non-foundation one or a mineable foundation tile on a mineable foundation one will not modify the hidden tile. This restriction can however be circumvented by using {@link LuaSurface::set_hidden_tile | runtime:LuaSurface::set_hidden_tile}. Placing a non-foundation tile on top of a foundation one when there already exists a hidden tile will push hidden tile to {@link double hidden | runtime:LuaTile::double_hidden_tile}, and foundation tile will turn into hidden. Placing a mineable foundation tile over a mineable non-foundation tile with hidden mineable foundation tile, the hidden tile will be replaced by previously double hidden tile and double hidden tile will be erased. Placing a non-mineable tile will erase hidden and double hidden tiles.
     *
     * It is recommended to call this method once for all the tiles you want to change rather than calling it individually for every tile. As the tile correction is used after every step, calling it one by one could cause the tile correction logic to redo some of the changes. Also, many small API calls are generally more performance intensive than one big one.
     * @param correct_tiles If `false`, the correction logic is not applied to the changed tiles. Defaults to `true`.
     * @param remove_colliding_entities Defaults to `true`.
     * @param remove_colliding_decoratives Defaults to `true`.
     * @param raise_event Defaults to `false`.
     * @param player The player whose undo queue to add these actions to.
     * @param undo_index The index of the undo item to add this action to. An index of `0` creates a new undo item for it. Defaults to putting it into the appropriate undo item automatically if not specified.
     */
    set_tiles(this: void, tiles: Tile[], correct_tiles?: boolean, remove_colliding_entities?: boolean | 'abort_on_collision', remove_colliding_decoratives?: boolean, raise_event?: boolean, player?: PlayerIdentification, undo_index?: uint): void;
    /**
     * Spill items on the ground centered at a given location.
     * @param table.position Center of the spillage
     * @param table.stack Stack of items to spill
     * @param table.enable_looted When true, each created item will be flagged with the {@link LuaEntity::to_be_looted | runtime:LuaEntity::to_be_looted} flag. Defaults to `false`.
     * @param table.force When provided (and not `nil`) the items will be marked for deconstruction by this force.
     * @param table.allow_belts Whether items can be spilled onto belts. Defaults to `true`.
     * @param table.max_radius Max radius from the specified `position` to spill items.
     * @param table.use_start_position_on_failure Allow spilling items at `position` if no non-colliding position is found. Note: Setting to false might cause some items not to be spilled. Defaults to `true`.
     * @returns The created item-on-ground entities.
     */
    spill_item_stack(this: void, table: {
        position: MapPosition;
        stack: ItemStackIdentification;
        enable_looted?: boolean;
        force?: ForceID;
        allow_belts?: boolean;
        max_radius?: double;
        use_start_position_on_failure?: boolean;
    }): LuaEntity[];
    /**
     * Place an upgrade request.
     * @param table.area The area to mark for upgrade.
     * @param table.force The force whose bots should perform the upgrade.
     * @param table.player The player to set the last_user to if any.
     * @param table.skip_fog_of_war If chunks covered by fog-of-war are skipped.
     * @param table.item The upgrade item to use.
     */
    upgrade_area(this: void, table: {
        area: BoundingBox;
        force: ForceID;
        player?: PlayerIdentification;
        skip_fog_of_war?: boolean;
        item: LuaItemStack;
    }): void;
    /**
     * When set to true, the sun will always shine.
     */
    always_day: boolean;
    /**
     * Defines how surface daytime brightness influences each color channel of the current color lookup table (LUT).
     *
     * The LUT is multiplied by `((1 - weight) + brightness * weight)` and result is clamped to range `[0, 1]`.
     *
     * Default is `{0, 0, 0}`, which means no influence.
     * @example ```
    -- Makes night on the surface pitch black, LuaSurface::min_brightness is set to default value 0.15.
    game.surfaces[1].brightness_visual_weights = { 1 / 0.85, 1 / 0.85, 1 / 0.85 }
    ```
     */
    brightness_visual_weights: ColorModifier;
    /**
     * Amount of darkness at the current time, as a number in range `[0, 1]`.
     */
    readonly darkness: float;
    /**
     * The daytime when dawn starts.
     */
    dawn: double;
    /**
     * Current time of day, as a number in range `[0, 1)`.
     */
    daytime: double;
    /**
     * If this surface can be deleted.
     */
    readonly deletable: boolean;
    /**
     * The daytime when dusk starts.
     */
    dusk: double;
    /**
     * The daytime when evening starts.
     */
    evening: double;
    /**
     * True if daytime is currently frozen.
     */
    freeze_daytime: boolean;
    /**
     * When set to true, new chunks will be generated with lab tiles, instead of using the surface's map generation settings.
     */
    generate_with_lab_tiles: boolean;
    /**
     * Surface-wide effects applied to entities with effect receivers. May be `nil` if surface is not using surface-wide effect source.
     */
    global_effect?: ModuleEffects;
    /**
     * Whether this surface currently has a global electric network.
     */
    readonly has_global_electric_network: boolean;
    /**
     * This surface's index in {@link LuaGameScript::surfaces | runtime:LuaGameScript::surfaces} (unique ID). It is assigned when a surface is created, and remains so until it is {@link deleted | runtime:on_surface_deleted}. Indexes of deleted surfaces can be reused.
     */
    readonly index: uint;
    /**
     * Localised name of this surface. When set, will replace the internal surface name in places where a player sees surface name.
     *
     * Value may be ignored if a surface has a SpacePlatform or Planet object attached to it, which take the precedence.
     */
    localised_name?: LocalisedString;
    /**
     * The generation settings for this surface. These can be modified after surface generation, but note that this will not retroactively update the surface. To manually regenerate it, {@link LuaSurface::regenerate_entity | runtime:LuaSurface::regenerate_entity}, {@link LuaSurface::regenerate_decorative | runtime:LuaSurface::regenerate_decorative}, and {@link LuaSurface::delete_chunk | runtime:LuaSurface::delete_chunk} can be used.
     */
    map_gen_settings: MapGenSettings;
    /**
     * The minimal brightness during the night. Defaults to `0.15`. This has an effect on both rendering and game mechanics such as biter spawns and solar power.
     */
    min_brightness: double;
    /**
     * The daytime when morning starts.
     */
    morning: double;
    /**
     * The name of this surface. Names are unique among surfaces.
     *
     * The default surface can't be renamed.
     */
    name: string;
    /**
     * Is no-enemies mode enabled on this surface?
     */
    no_enemies_mode: boolean;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is peaceful mode enabled on this surface?
     */
    peaceful_mode: boolean;
    /**
     * The planet associated with this surface, if there is one.
     *
     * Use {@link LuaPlanet::associate_surface | runtime:LuaPlanet::associate_surface} to create a new association with a planet.
     */
    readonly planet?: LuaPlanet;
    readonly platform?: LuaSpacePlatform;
    /**
     * The type of pollutant enabled on the surface, or `nil` if no pollutant is enabled.
     */
    readonly pollutant_type?: LuaAirbornePollutantPrototype;
    /**
     * If clouds are shown on this surface. If false, clouds are never shown. If true the player must also have clouds enabled in graphics settings for them to be shown.
     */
    show_clouds: boolean;
    /**
     * The multiplier of solar power on this surface. Cannot be less than 0.
     */
    solar_power_multiplier: double;
    /**
     * The number of ticks per day for this surface.
     */
    ticks_per_day: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Current wind direction.
     */
    wind_orientation: RealOrientation;
    /**
     * Change in wind orientation per tick.
     */
    wind_orientation_change: double;
    /**
     * Current wind speed in tiles per tick.
     */
    wind_speed: double;
}
type LuaSurfaceCreateEntityParams = BaseLuaSurfaceCreateEntityParams | LuaSurfaceCreateEntityParamsArtilleryFlare | LuaSurfaceCreateEntityParamsArtilleryProjectile | LuaSurfaceCreateEntityParamsAssemblingMachine | LuaSurfaceCreateEntityParamsBeam | LuaSurfaceCreateEntityParamsCharacterCorpse | LuaSurfaceCreateEntityParamsCliff | LuaSurfaceCreateEntityParamsContainer | LuaSurfaceCreateEntityParamsElectricPole | LuaSurfaceCreateEntityParamsEntityGhost | LuaSurfaceCreateEntityParamsFire | LuaSurfaceCreateEntityParamsHighlightBox | LuaSurfaceCreateEntityParamsInserter | LuaSurfaceCreateEntityParamsItemEntity | LuaSurfaceCreateEntityParamsItemRequestProxy | LuaSurfaceCreateEntityParamsLamp | LuaSurfaceCreateEntityParamsLoader | LuaSurfaceCreateEntityParamsLoader1x1 | LuaSurfaceCreateEntityParamsLocomotive | LuaSurfaceCreateEntityParamsLogisticContainer | LuaSurfaceCreateEntityParamsParticle | LuaSurfaceCreateEntityParamsPlant | LuaSurfaceCreateEntityParamsProgrammableSpeaker | LuaSurfaceCreateEntityParamsProjectile | LuaSurfaceCreateEntityParamsRailChainSignal | LuaSurfaceCreateEntityParamsRailSignal | LuaSurfaceCreateEntityParamsResource | LuaSurfaceCreateEntityParamsRollingStock | LuaSurfaceCreateEntityParamsSimpleEntityWithForce | LuaSurfaceCreateEntityParamsSimpleEntityWithOwner | LuaSurfaceCreateEntityParamsSpeechBubble | LuaSurfaceCreateEntityParamsStream | LuaSurfaceCreateEntityParamsTileGhost | LuaSurfaceCreateEntityParamsUndergroundBelt;
interface BaseLuaSurfaceCreateEntityParams {
    /**
     * Cause entity / force. The entity or force that triggered the chain of events that led to this entity being created. Used for beams, projectiles, stickers, etc. so that the damage receiver can know which entity or force to retaliate against.
     */
    'cause'?: LuaEntity | ForceID;
    /**
     * If fast_replace is true simulate fast replace using this character.
     */
    'character'?: LuaEntity;
    /**
     * If false, the building effect smoke will not be shown around the new entity. Defaults to `true`.
     */
    'create_build_effect_smoke'?: boolean;
    /**
     * Desired orientation of the entity after creation.
     */
    'direction'?: defines.direction;
    /**
     * If true, building will attempt to simulate fast-replace building. Defaults to `false`.
     */
    'fast_replace'?: boolean;
    /**
     * Force of the entity, default is enemy.
     */
    'force'?: ForceID;
    /**
     * If provided, the entity will attempt to pull stored values from this item (for example; creating a spidertron from a previously named and mined spidertron)
     */
    'item'?: LuaItemStack;
    /**
     * The index of the undo item to add this action to. An index of `0` creates a new undo item for it. Defaults to putting it into the appropriate undo item automatically if not specified.
     */
    'item_index'?: uint;
    /**
     * If true, any characters that are in the way of the entity are teleported out of the way.
     */
    'move_stuck_players'?: boolean;
    /**
     * The entity prototype name to create.
     */
    'name': EntityID;
    /**
     * If given set the last_user to this player. If fast_replace is true simulate fast replace using this player. Also the player whose undo queue this action should be added to.
     */
    'player'?: PlayerIdentification;
    /**
     * Where to create the entity.
     */
    'position': MapPosition;
    /**
     * If true, colliding ghosts and corpses will not be removed by the creation of some entity types. Defaults to `false`.
     */
    'preserve_ghosts_and_corpses'?: boolean;
    /**
     * Quality of the entity to be created. Defaults to `normal`.
     */
    'quality'?: QualityID;
    /**
     * If true; {@link defines.events.script_raised_built | runtime:defines.events.script_raised_built} will be fired on successful entity creation. Defaults to `false`.
     */
    'raise_built'?: boolean;
    /**
     * If false the exact position given is used to instead of snapping to the normal entity grid. This only applies if the entity normally snaps to the grid.
     */
    'snap_to_grid'?: boolean;
    /**
     * Source entity. Used for beams, projectiles, and highlight-boxes.
     */
    'source'?: LuaEntity | MapPosition;
    /**
     * If true, entity types that have {@link spawn_decoration | runtime:LuaEntityPrototype::spawn_decorations} property will apply triggers defined in the property. Defaults to `false`.
     */
    'spawn_decorations'?: boolean;
    /**
     * If false while fast_replace is true and player is nil any items from fast-replacing will be deleted instead of dropped on the ground. Defaults to `true`.
     */
    'spill'?: boolean;
    /**
     * Entity with health for the new entity to target.
     */
    'target'?: LuaEntity | MapPosition;
}
/**
 *
 * Applies to variant case `artillery-flare`
 */
interface LuaSurfaceCreateEntityParamsArtilleryFlare extends BaseLuaSurfaceCreateEntityParams {
    'frame_speed': float;
    'height': float;
    'movement': Vector;
    'vertical_speed': float;
}
/**
 *
 * Applies to variant case `artillery-projectile`
 */
interface LuaSurfaceCreateEntityParamsArtilleryProjectile extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Defaults to 1.
     */
    'speed'?: double;
}
/**
 *
 * Applies to variant case `assembling-machine`
 */
interface LuaSurfaceCreateEntityParamsAssemblingMachine extends BaseLuaSurfaceCreateEntityParams {
    'recipe'?: string;
}
/**
 *
 * Applies to variant case `beam`
 */
interface LuaSurfaceCreateEntityParamsBeam extends BaseLuaSurfaceCreateEntityParams {
    /**
     * If set, beam will be destroyed after this value of ticks.
     */
    'duration'?: uint;
    /**
     * If set, beam will be destroyed when distance between source and target is greater than this value.
     */
    'max_length'?: uint;
    /**
     * Source position will be offset by this value when rendering the beam.
     */
    'source_offset'?: Vector;
    /**
     * Absolute source position that can be used instead of source entity (entity has precedence if both entity and position are defined).
     */
    'source_position'?: MapPosition;
    /**
     * Absolute target position that can be used instead of target entity (entity has precedence if both entity and position are defined).
     */
    'target_position'?: MapPosition;
}
/**
 *
 * Applies to variant case `character-corpse`
 */
interface LuaSurfaceCreateEntityParamsCharacterCorpse extends BaseLuaSurfaceCreateEntityParams {
    'inventory_size'?: uint;
    'player_index'?: uint;
}
/**
 *
 * Applies to variant case `cliff`
 */
interface LuaSurfaceCreateEntityParamsCliff extends BaseLuaSurfaceCreateEntityParams {
    /**
     * If not specified, `direction` will be used instead.
     */
    'cliff_orientation'?: CliffOrientation;
}
/**
 *
 * Applies to variant case `container`
 */
interface LuaSurfaceCreateEntityParamsContainer extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Inventory index where the red limiting bar should be set.
     */
    'bar'?: uint;
}
/**
 *
 * Applies to variant case `electric-pole`
 */
interface LuaSurfaceCreateEntityParamsElectricPole extends BaseLuaSurfaceCreateEntityParams {
    /**
     * True by default. If set to false, created electric pole will not auto connect to neighbour electric poles.
     */
    'auto_connect'?: boolean;
}
/**
 *
 * Applies to variant case `entity-ghost`
 */
interface LuaSurfaceCreateEntityParamsEntityGhost extends BaseLuaSurfaceCreateEntityParams {
    /**
     * The prototype name of the entity contained in the ghost.
     */
    'inner_name': string;
    /**
     * The {@link LuaEntity::tags | runtime:LuaEntity::tags} associated with this entity ghost.
     */
    'tags'?: Tags;
}
/**
 *
 * Applies to variant case `fire`
 */
interface LuaSurfaceCreateEntityParamsFire extends BaseLuaSurfaceCreateEntityParams {
    /**
     * With how many small flames should the fire on ground be created. Defaults to the initial flame count of the prototype.
     */
    'initial_ground_flame_count'?: uint8;
}
/**
 *
 * Applies to variant case `highlight-box`
 */
interface LuaSurfaceCreateEntityParamsHighlightBox extends BaseLuaSurfaceCreateEntityParams {
    /**
     * The blink interval for this highlight box. Makes it be shown every `blink_interval` ticks. Defaults to `0` (constantly shown).
     */
    'blink_interval'?: uint;
    /**
     * The bounding box defining the highlight box using absolute map coordinates. If specified, the general `position` parameter still needs to be present, but will be ignored. If not specified, the game falls back to the `source` parameter first, then the `target` parameter second. One of these three parameters need to be specified.
     */
    'bounding_box'?: BoundingBox;
    /**
     * Specifies the graphical appearance (color) of the highlight box. Defaults to `"electricity"`.
     */
    'box_type'?: CursorBoxRenderType;
    /**
     * The player to render the highlight box for. If not provided, it will be rendered for all players.
     */
    'render_player_index'?: uint;
    /**
     * The amount of time in ticks that the highlight box will exist for. Defaults to existing forever.
     */
    'time_to_live'?: uint;
}
/**
 *
 * Applies to variant case `inserter`
 */
interface LuaSurfaceCreateEntityParamsInserter extends BaseLuaSurfaceCreateEntityParams {
    'conditions': InserterCircuitConditions;
    'filters': InventoryFilter[];
}
/**
 *
 * Applies to variant case `item-entity`
 */
interface LuaSurfaceCreateEntityParamsItemEntity extends BaseLuaSurfaceCreateEntityParams {
    /**
     * The stack of items to create.
     */
    'stack': SimpleItemStack;
}
/**
 *
 * Applies to variant case `item-request-proxy`
 */
interface LuaSurfaceCreateEntityParamsItemRequestProxy extends BaseLuaSurfaceCreateEntityParams {
    /**
     * The stacks of items to be delivered to target entity from logistic network.
     */
    'modules': BlueprintInsertPlan[];
    /**
     * Specification of items to be removed from the target entity by the logistic network.
     */
    'removal_plan'?: BlueprintInsertPlan[];
    /**
     * The target items are to be delivered to.
     */
    'target': LuaEntity;
}
/**
 *
 * Applies to variant case `lamp`
 */
interface LuaSurfaceCreateEntityParamsLamp extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Defaults to false.
     */
    'always_on'?: boolean;
    /**
     * Defaults to white.
     */
    'color'?: Color;
}
/**
 *
 * Applies to variant case `loader`
 */
interface LuaSurfaceCreateEntityParamsLoader extends BaseLuaSurfaceCreateEntityParams {
    'filters'?: InventoryFilter[];
    /**
     * Defaults to `"input"`.
     */
    'type'?: 'output' | 'input';
}
/**
 *
 * Applies to variant case `loader-1x1`
 */
interface LuaSurfaceCreateEntityParamsLoader1x1 extends BaseLuaSurfaceCreateEntityParams {
    'filters'?: InventoryFilter[];
    /**
     * Defaults to `"input"`.
     */
    'type'?: 'output' | 'input';
}
/**
 *
 * Applies to variant case `locomotive`
 */
interface LuaSurfaceCreateEntityParamsLocomotive extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Whether the locomotive should snap to an adjacent train stop. Defaults to true.
     */
    'snap_to_train_stop'?: boolean;
}
/**
 *
 * Applies to variant case `logistic-container`
 */
interface LuaSurfaceCreateEntityParamsLogisticContainer extends BaseLuaSurfaceCreateEntityParams {
    'request_filters'?: InventoryFilter[];
}
/**
 *
 * Applies to variant case `particle`
 */
interface LuaSurfaceCreateEntityParamsParticle extends BaseLuaSurfaceCreateEntityParams {
    'frame_speed': float;
    'height': float;
    'movement': Vector;
    'vertical_speed': float;
}
/**
 *
 * Applies to variant case `plant`
 */
interface LuaSurfaceCreateEntityParamsPlant extends BaseLuaSurfaceCreateEntityParams {
    /**
     * The tick the plant will be fully grown. If not specified, the plants normal growth time is used.
     */
    'tick_grown'?: uint;
}
/**
 *
 * Applies to variant case `programmable-speaker`
 */
interface LuaSurfaceCreateEntityParamsProgrammableSpeaker extends BaseLuaSurfaceCreateEntityParams {
    'alert_parameters'?: ProgrammableSpeakerAlertParameters;
    'parameters'?: ProgrammableSpeakerParameters;
}
/**
 *
 * Applies to variant case `projectile`
 */
interface LuaSurfaceCreateEntityParamsProjectile extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Defaults to 1000.
     */
    'max_range'?: double;
    /**
     * Defaults to 0.
     */
    'speed'?: double;
}
/**
 *
 * Applies to variant case `rail-chain-signal`
 */
interface LuaSurfaceCreateEntityParamsRailChainSignal extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Defaults to {@link defines.rail_layer.ground | runtime:defines.rail_layer.ground}.
     */
    'rail_layer'?: defines.rail_layer;
}
/**
 *
 * Applies to variant case `rail-signal`
 */
interface LuaSurfaceCreateEntityParamsRailSignal extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Defaults to {@link defines.rail_layer.ground | runtime:defines.rail_layer.ground}.
     */
    'rail_layer'?: defines.rail_layer;
}
/**
 *
 * Applies to variant case `resource`
 */
interface LuaSurfaceCreateEntityParamsResource extends BaseLuaSurfaceCreateEntityParams {
    'amount': uint;
    /**
     * If colliding cliffs are removed. Default is true.
     */
    'enable_cliff_removal'?: boolean;
    /**
     * If colliding trees are removed normally for this resource entity based off the prototype tree removal values. Default is true.
     */
    'enable_tree_removal'?: boolean;
    /**
     * If true, the resource entity will be placed to center of a tile as map generator would place it, otherwise standard non-resource grid alignment rules will apply. Default is true.
     */
    'snap_to_tile_center'?: boolean;
}
/**
 *
 * Applies to variant case `rolling-stock`
 */
interface LuaSurfaceCreateEntityParamsRollingStock extends BaseLuaSurfaceCreateEntityParams {
    /**
     * The color of this rolling stock, if it supports colors.
     */
    'color'?: Color;
    /**
     * The orientation of this rolling stock.
     */
    'orientation'?: RealOrientation;
}
/**
 *
 * Applies to variant case `simple-entity-with-force`
 */
interface LuaSurfaceCreateEntityParamsSimpleEntityWithForce extends BaseLuaSurfaceCreateEntityParams {
    'render_player_index'?: uint;
}
/**
 *
 * Applies to variant case `simple-entity-with-owner`
 */
interface LuaSurfaceCreateEntityParamsSimpleEntityWithOwner extends BaseLuaSurfaceCreateEntityParams {
    'render_player_index'?: uint;
}
/**
 *
 * Applies to variant case `speech-bubble`
 */
interface LuaSurfaceCreateEntityParamsSpeechBubble extends BaseLuaSurfaceCreateEntityParams {
    'lifetime'?: uint;
    'text': LocalisedString;
}
/**
 *
 * Applies to variant case `stream`
 */
interface LuaSurfaceCreateEntityParamsStream extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Absolute source position that can be used instead of source entity (entity has precedence if both entity and position are defined).
     */
    'source_position'?: MapPosition;
    /**
     * Absolute target position that can be used instead of target entity (entity has precedence if both entity and position are defined).
     */
    'target_position'?: MapPosition;
}
/**
 *
 * Applies to variant case `tile-ghost`
 */
interface LuaSurfaceCreateEntityParamsTileGhost extends BaseLuaSurfaceCreateEntityParams {
    /**
     * The prototype name of the tile contained in the ghost.
     */
    'inner_name': string;
}
/**
 *
 * Applies to variant case `underground-belt`
 */
interface LuaSurfaceCreateEntityParamsUndergroundBelt extends BaseLuaSurfaceCreateEntityParams {
    /**
     * Defaults to `"input"`.
     */
    'type'?: 'output' | 'input';
}
/**
 * Prototype of a surface property.
 */
interface LuaSurfacePropertyPrototype extends LuaPrototypeBase {
    readonly default_value: double;
    readonly is_time: boolean;
    readonly localised_unit_key: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a surface.
 */
interface LuaSurfacePrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly surface_properties: LuaTable<SurfacePropertyID, double>;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * One research item.
 */
interface LuaTechnology {
    /**
     * Reload this technology from its prototype.
     */
    reload(this: void): void;
    /**
     * Research this technology and all of its prerequisites recursively.
     */
    research_recursive(this: void): void;
    /**
     * Can this technology be researched?
     */
    enabled: boolean;
    /**
     * The force this technology belongs to.
     */
    readonly force: LuaForce;
    /**
     * The current level of this technology. For level-based technology writing to this is the same as researching the technology to the previous level. Writing the level will set {@link LuaTechnology::enabled | runtime:LuaTechnology::enabled} to `true`.
     */
    level: uint;
    readonly localised_description: LocalisedString;
    /**
     * Localised name of this technology.
     */
    readonly localised_name: LocalisedString;
    /**
     * Name of this technology.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The string used to alphabetically sort these prototypes. It is a simple string that has no additional semantic meaning.
     */
    readonly order: string;
    /**
     * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnology | runtime:LuaTechnology} object.
     */
    readonly prerequisites: Record<string, LuaTechnology>;
    /**
     * The prototype of this technology.
     */
    readonly prototype: LuaTechnologyPrototype;
    /**
     * The number of research units required for this technology.
     *
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype::ignore_tech_cost_multiplier | runtime:LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     */
    readonly research_unit_count: uint;
    /**
     * The count formula, if this research has any. See {@link TechnologyUnit::count_formula | prototype:TechnologyUnit::count_formula} for details.
     */
    readonly research_unit_count_formula?: MathExpression;
    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: double;
    /**
     * The types of ingredients that labs will require to research this technology.
     */
    readonly research_unit_ingredients: Ingredient[];
    /**
     * Has this technology been researched? Switching from `false` to `true` will trigger the technology advancement perks; switching from `true` to `false` will reverse them.
     */
    researched: boolean;
    /**
     * Saved technology progress fraction as a value in range `[0, 1)`. 0 means there is no saved progress.
     */
    saved_progress: double;
    /**
     * Successors of this technology, i.e. technologies which have this technology as a prerequisite.
     */
    readonly successors: Record<string, LuaTechnology>;
    /**
     * Is this an upgrade-type research?
     */
    readonly upgrade: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * If this technology will be visible in the research GUI even though it is disabled.
     */
    visible_when_disabled: boolean;
}
/**
 * A Technology prototype.
 */
interface LuaTechnologyPrototype extends LuaPrototypeBase {
    readonly allows_productivity: boolean;
    /**
     * Effects applied when this technology is researched.
     */
    readonly effects: TechnologyModifier[];
    /**
     * If this technology prototype is enabled by default (enabled at the beginning of a game).
     */
    readonly enabled: boolean;
    /**
     * If this technology prototype is essential, meaning it is shown in the condensed technology graph.
     */
    readonly essential: boolean;
    /**
     * If this technology ignores the technology cost multiplier setting.
     *
     * {@link LuaTechnologyPrototype::research_unit_count | runtime:LuaTechnologyPrototype::research_unit_count} will already take this setting into account.
     */
    readonly ignore_tech_cost_multiplier: boolean;
    /**
     * The level of this research.
     */
    readonly level: uint;
    /**
     * The max level of this research.
     */
    readonly max_level: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Prerequisites of this technology. The result maps technology name to the {@link LuaTechnologyPrototype | runtime:LuaTechnologyPrototype} object.
     */
    readonly prerequisites: Record<string, LuaTechnologyPrototype>;
    /**
     * The trigger that will research this technology if any.
     */
    readonly research_trigger?: ResearchTrigger;
    /**
     * The number of research units required for this technology.
     *
     * This is multiplied by the current research cost multiplier, unless {@link LuaTechnologyPrototype::ignore_tech_cost_multiplier | runtime:LuaTechnologyPrototype::ignore_tech_cost_multiplier} is `true`.
     */
    readonly research_unit_count: uint;
    /**
     * The count formula, if this research has any. See {@link TechnologyUnit::count_formula | prototype:TechnologyUnit::count_formula} for details.
     */
    readonly research_unit_count_formula?: MathExpression;
    /**
     * Amount of energy required to finish a unit of research.
     */
    readonly research_unit_energy: double;
    /**
     * The types of ingredients that labs will require to research this technology.
     */
    readonly research_unit_ingredients: ResearchIngredient[];
    /**
     * Successors of this technology, i.e. technologies which have this technology as a prerequisite.
     */
    readonly successors: Record<string, LuaTechnologyPrototype>;
    /**
     * If the is technology prototype is an upgrade to some other technology.
     */
    readonly upgrade: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * If this technology will be visible in the research GUI even though it is disabled.
     */
    readonly visible_when_disabled: boolean;
}
/**
 * A single "square" on the map.
 */
interface LuaTile {
    /**
     * Cancels deconstruction if it is scheduled, does nothing otherwise.
     * @param force The force who did the deconstruction order.
     * @param player The player to set the last_user to if any.
     */
    cancel_deconstruction(this: void, force: ForceID, player?: PlayerIdentification): void;
    /**
     * What type of things can collide with this tile?
     * @example ```
    -- Check if the character would collide with a tile
    game.player.print(tostring(game.player.surface.get_tile(1, 1).collides_with("player")))
    ```
     */
    collides_with(this: void, layer: CollisionLayerID): boolean;
    /**
     * Gets all tile ghosts on this tile.
     * @param force Get tile ghosts of this force.
     * @returns The tile ghosts.
     */
    get_tile_ghosts(this: void, force?: ForceID): LuaEntity[];
    /**
     * Does this tile have any tile ghosts on it.
     * @param force Check for tile ghosts of this force.
     */
    has_tile_ghost(this: void, force?: ForceID): boolean;
    /**
     * Orders deconstruction of this tile by the given force.
     * @param force The force whose robots are supposed to do the deconstruction.
     * @param player The player to set the last_user to if any.
     * @returns The deconstructible tile proxy created, if any.
     */
    order_deconstruction(this: void, force: ForceID, player?: PlayerIdentification): LuaEntity | null;
    /**
     * Is this tile marked for deconstruction?
     * @param force The force whose robots are supposed to do the deconstruction. If not given, checks if to be deconstructed by any force.
     */
    to_be_deconstructed(this: void, force?: ForceID): boolean;
    /**
     * The name of the {@link LuaTilePrototype | runtime:LuaTilePrototype} double hidden under this tile or `nil` if there is no double hidden tile.
     *
     * During normal gameplay, only {@link non-mineable | runtime:LuaTilePrototype::mineable_properties} tiles can become double hidden. This can however be circumvented with {@link LuaSurface::set_double_hidden_tile | runtime:LuaSurface::set_double_hidden_tile}.
     */
    readonly double_hidden_tile?: string;
    /**
     * The name of the {@link LuaTilePrototype | runtime:LuaTilePrototype} hidden under this tile, if any.
     *
     * During normal gameplay, only {@link non-mineable | runtime:LuaTilePrototype::mineable_properties} or {@link foundation | runtime:LuaTilePrototype::is_foundation} tiles can become hidden. This can however be circumvented with {@link LuaSurface::set_hidden_tile | runtime:LuaSurface::set_hidden_tile}.
     */
    readonly hidden_tile?: string;
    /**
     * Prototype name of this tile. E.g. `"sand-3"` or `"grass-2"`.
     */
    readonly name: string;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The position this tile references.
     */
    readonly position: TilePosition;
    readonly prototype: LuaTilePrototype;
    /**
     * The surface this tile is on.
     */
    readonly surface: LuaSurface;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a tile.
 */
interface LuaTilePrototype extends LuaPrototypeBase {
    /**
     * A table of pollution emissions per second this tile will absorb, indexed by the name of each absorbed pollution type.
     */
    readonly absorptions_per_second: Record<string, double>;
    readonly allowed_neighbors: Record<string, LuaTilePrototype>;
    /**
     * True if this tile can be {@link hidden | runtime:LuaTile::hidden_tile} or replaced by another tile through player actions.
     */
    readonly allows_being_covered: boolean;
    readonly ambient_sounds_group?: LuaTilePrototype;
    readonly automatic_neighbors: boolean;
    /**
     * Autoplace specification for this prototype, if any.
     */
    readonly autoplace_specification?: AutoplaceSpecification;
    readonly bound_decoratives?: LuaDecorativePrototype[];
    /**
     * False if this tile is not allowed in blueprints regardless of the ability to build it.
     */
    readonly can_be_part_of_blueprint: boolean;
    /**
     * True if building this tile should check for colliding entities above and prevent building if such are found. Also during mining tiles above this tile checks for entities colliding with this tile and prevents mining if such are found.
     */
    readonly check_collision_with_entities: boolean;
    /**
     * The collision mask this tile uses
     */
    readonly collision_mask: CollisionMask;
    /**
     * The probability that decorative entities will be removed from on top of this tile when this tile is generated.
     */
    readonly decorative_removal_probability: float;
    readonly default_cover_tile?: LuaTilePrototype;
    readonly default_destroyed_dropped_item_trigger?: TriggerItem[];
    readonly destroys_dropped_items?: boolean;
    /**
     * The fluid offshore pump produces on this tile, if any.
     */
    readonly fluid?: LuaFluidPrototype;
    readonly frozen_variant?: LuaTilePrototype;
    /**
     * True if this tile can be used as a foundation for other tiles, false otherwise. Foundation tiles can be {@link hidden | runtime:LuaTile::hidden_tile}.
     */
    readonly is_foundation: boolean;
    /**
     * Items that when placed will produce this tile, if any. Construction bots will choose the first item in the list to build this tile.
     */
    readonly items_to_place_this?: ItemStackDefinition[];
    readonly layer: uint;
    readonly map_color: Color;
    readonly max_health?: float;
    readonly mineable_properties: {
        /**
         * Is this tile mineable at all?
         */
        minable: boolean;
        /**
         * Energy required to mine a tile.
         */
        mining_time: double;
        /**
         * Prototype name of the particle produced when mining this tile. Will only be present if this tile produces any particle during mining.
         */
        mining_particle?: string;
        /**
         * Products obtained by mining this tile.
         */
        products: Product[];
    };
    /**
     * If this tile needs correction logic applied when it's generated in the world.
     */
    readonly needs_correction: boolean;
    /**
     * The next direction of this tile, if any. Used when a tile has multiple directions (such as hazard concrete)
     */
    readonly next_direction?: LuaTilePrototype;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly placeable_by?: SimpleItemStack[];
    readonly scorch_mark_color?: Color;
    readonly thawed_variant?: LuaTilePrototype;
    readonly trigger_effect?: TriggerEffectItem[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    readonly vehicle_friction_modifier: float;
    readonly walking_speed_modifier: float;
    readonly weight?: double;
}
/**
 * A train. Trains are a sequence of connected rolling stocks -- locomotives and wagons.
 */
interface LuaTrain {
    /**
     * Clears all fluids in this train.
     */
    clear_fluids_inside(this: void): void;
    /**
     * Clear all items in this train.
     */
    clear_items_inside(this: void): void;
    /**
     * Get a mapping of the train's inventory.
     * @returns List of all items in the train.
     */
    get_contents(this: void): ItemCountWithQuality[];
    /**
     * Gets a mapping of the train's fluid inventory.
     * @returns The counts, indexed by fluid names.
     */
    get_fluid_contents(this: void): Record<string, double>;
    /**
     * Get the amount of a particular fluid stored in the train.
     * @param fluid Fluid name to count. If not given, counts all fluids.
     */
    get_fluid_count(this: void, fluid?: string): double;
    /**
     * Get the amount of a particular item stored in the train.
     * @param item Item name to count. If not given, counts all items.
     */
    get_item_count(this: void, item?: ItemID): uint;
    /**
     * Gets a LuaRailEnd object pointing away from the train at specified end of the train
     */
    get_rail_end(this: void, direction: defines.rail_direction): LuaRailEnd;
    /**
     * Gets all rails under the train.
     */
    get_rails(this: void): LuaEntity[];
    /**
     * Go to the station specified by the index in the train's schedule.
     */
    go_to_station(this: void, index: uint): void;
    /**
     * Insert a stack into the train.
     */
    insert(this: void, stack: ItemStackIdentification): void;
    /**
     * Inserts the given fluid into the first available location in this train.
     * @returns The amount inserted.
     */
    insert_fluid(this: void, fluid: Fluid): double;
    /**
     * Checks if the path is invalid and tries to re-path if it isn't.
     * @param force Forces the train to re-path regardless of the current path being valid or not.
     * @returns If the train has a path after the repath attempt.
     */
    recalculate_path(this: void, force?: boolean): boolean;
    /**
     * Remove some fluid from the train.
     * @returns The amount of fluid actually removed.
     */
    remove_fluid(this: void, fluid: Fluid): double;
    /**
     * Remove some items from the train.
     * @param stack The amount and type of items to remove
     * @returns Number of items actually removed.
     */
    remove_item(this: void, stack: ItemStackIdentification): uint;
    /**
     * Back end of the train: Rail and direction on that rail where the train will go when moving backward
     */
    readonly back_end: LuaRailEnd;
    /**
     * The back stock of this train, if any. The back of the train is at the opposite end of the {@link front | runtime:LuaTrain::front_stock}.
     */
    readonly back_stock?: LuaEntity;
    /**
     * The cargo carriages the train contains.
     */
    readonly cargo_wagons: LuaEntity[];
    /**
     * The rolling stocks this train is composed of, with the numbering starting at the {@link front | runtime:LuaTrain::front_stock} of the train.
     */
    readonly carriages: LuaEntity[];
    /**
     * The fluid carriages the train contains.
     */
    readonly fluid_wagons: LuaEntity[];
    /**
     * Front end of the train: Rail and direction on that rail where the train will go when moving forward
     */
    readonly front_end: LuaRailEnd;
    /**
     * The front stock of this train, if any. The front of the train is in the direction that a majority of locomotives are pointing in. If it's a tie, the North and West directions take precedence.
     */
    readonly front_stock?: LuaEntity;
    /**
     * The group this train belongs to.
     *
     * Setting the group will apply the schedule of the group to this train.
     */
    group: string;
    /**
     * If this train has a path.
     */
    readonly has_path: boolean;
    /**
     * The unique train ID.
     */
    readonly id: uint;
    /**
     * The total number of kills by this train.
     */
    readonly kill_count: uint;
    /**
     * The players killed by this train.
     *
     * The keys are the player indices, the values are how often this train killed that player.
     */
    readonly killed_players: Record<uint, uint>;
    /**
     * Locomotives of the train.
     * @example ```
    -- called on a LuaTrain with 3 locomotives, it returns 3 LuaEntities:
    train.locomotives -- => {front_movers = {loco1, loco2}, back_movers = {loco3}}
    ```
     */
    readonly locomotives: {
        /**
         * Array of locomotives.
         */
        front_movers: LuaEntity[];
        /**
         * Array of locomotives.
         */
        back_movers: LuaEntity[];
    };
    /**
     * When `true`, the train is explicitly controlled by the player or script. When `false`, the train moves autonomously according to its schedule.
     */
    manual_mode: boolean;
    /**
     * Current max speed when moving backwards, depends on locomotive prototype and fuel.
     */
    readonly max_backward_speed: double;
    /**
     * Current max speed when moving forward, depends on locomotive prototype and fuel.
     */
    readonly max_forward_speed: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The player passengers on the train
     *
     * This does *not* index using player index. See {@link LuaPlayer::index | runtime:LuaPlayer::index} on each player instance for the player index.
     */
    readonly passengers: LuaPlayer[];
    /**
     * The path this train is using, if any.
     */
    readonly path?: LuaRailPath;
    /**
     * The destination rail this train is currently pathing to, if any.
     */
    readonly path_end_rail?: LuaEntity;
    /**
     * The destination train stop this train is currently pathing to, if any.
     */
    readonly path_end_stop?: LuaEntity;
    /**
     * The riding state of this train.
     */
    readonly riding_state: RidingState;
    /**
     * This train's current schedule, if any. Set to `nil` to clear.
     *
     * The schedule can't be changed by modifying the returned table. Instead, changes must be made by assigning a new table to this attribute.
     */
    schedule?: TrainSchedule;
    /**
     * The signal this train is arriving or waiting at, if any.
     */
    readonly signal?: LuaEntity;
    /**
     * Current speed.
     *
     * Changing the speed of the train is potentially an unsafe operation because train uses the speed for its internal calculations of break distances, etc.
     */
    speed: double;
    /**
     * This train's current state.
     */
    readonly state: defines.train_state;
    /**
     * The train stop this train is stopped at, if any.
     */
    readonly station?: LuaEntity;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * The weight of this train.
     */
    readonly weight: double;
}
/**
 * The train manager manages all the train in the game. LuaTrainManager allows to perform some direct queries to the train manager.
 *
 * There is always exactly one train manager instance in a game, it can be obtained from {@link LuaGameScript::train_manager | runtime:LuaGameScript::train_manager}. This object is always valid and is equal to any other instance of LuaTrainManager from this game.
 */
interface LuaTrainManager {
    /**
     * Searches for a train with given ID.
     * @param train_id Train ID to search
     * @returns Train if found
     */
    get_train_by_id(this: void, train_id: uint): LuaTrain | null;
    /**
     * Gets all train stops that pass given filter
     * @param filter Filters the train stop must pass in order to be returned here
     */
    get_train_stops(this: void, filter: TrainStopFilter): LuaEntity[];
    /**
     * Gets all trains that pass given filter
     * @param filter Filters the train must pass in order to be returned here
     */
    get_trains(this: void, filter: TrainFilter): LuaTrain[];
    /**
     * Direct access to train pathfinder. Allows to search rail paths or querying which stops are accessible
     * @param table.type Request type. Determines the return type of the method. Defaults to `"path"`.
     * @param table.train Mandatory if `starts` is not provided, optional otherwise. Selects a context for the pathfinder to decide which train to exclude from penalties and which signals are considered possible to reacquire. If `starts` is not provided, then it is also used to collect front and back ends for the search
     * @param table.return_path Only relevant if request type is `"path"`. Returning a full path is expensive due to multiple LuaEntity created. In order for path to be returned, true must be provided here. Defaults to false in which case a path will not be provided.
     * @param table.starts Manually provided starting positions.
     * @param table.search_direction Only relevant if `starts` was not provided in which case 2 starts (front and back) are deduced from the train. Selects which train ends should be considered as starts. Defaults to `"any-direction-with-locomotives"`.
     * @param table.in_chain_signal_section Defaults to `false`. If set to true, pathfinder will not return a path that cannot have its start immediately reserved. A path that cannot have its start immediately reserved could cause a train to stop inside of an intersection.
     * @param table.steps_limit Maximum amount of steps pathfinder is allowed to perform.
     * @param table.shortest_path Defaults to `false`. If set to true, only length of rails is added to penalties causing search to look for shortest path (not smallest penalty)
     * @returns The type of the returned value depends on `type`.
     */
    request_train_path(this: void, table: {
        type?: TrainPathRequestType;
        train?: LuaTrain;
        goals: TrainPathFinderGoal[];
        return_path?: boolean;
        starts?: RailEndStart[];
        search_direction?: 'respect-movement-direction' | 'any-direction-with-locomotives';
        in_chain_signal_section?: boolean;
        steps_limit?: uint;
        shortest_path?: boolean;
    }): TrainPathFinderOneGoalResult | TrainPathAllGoalsResult;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for train stops.
 */
interface LuaTrainStopControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The signal to be used by set-priority change priority of the train stop
     */
    priority_signal?: SignalID;
    /**
     * `true` if the train stop should send the train contents to the circuit network.
     */
    read_from_train: boolean;
    /**
     * `true` if the train stop should send the stopped train id to the circuit network.
     */
    read_stopped_train: boolean;
    /**
     * `true` if the train stop should send amount of incoming trains to the circuit network.
     */
    read_trains_count: boolean;
    /**
     * `true` if the train stop should send the circuit network contents to the train to use.
     */
    send_to_train: boolean;
    /**
     * `true` if the priority_signal is used to set a priority of the train stop.
     */
    set_priority: boolean;
    /**
     * `true` if the trains_limit_signal is used to set a limit of trains incoming for train stop.
     */
    set_trains_limit: boolean;
    /**
     * The signal that will be sent when using the send-train-id option.
     */
    stopped_train_signal?: SignalID;
    /**
     * The signal that will be sent when using the read-trains-count option.
     */
    trains_count_signal?: SignalID;
    /**
     * The signal to be used by set-trains-limit to limit amount of incoming trains
     */
    trains_limit_signal?: SignalID;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for transport belts.
 */
interface LuaTransportBeltControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * If the belt will read the contents and send them to the circuit network.
     */
    read_contents: boolean;
    /**
     * The read mode for the belt.
     */
    read_contents_mode: defines.control_behavior.transport_belt.content_read_mode;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * One line on a transport belt.
 */
interface LuaTransportLine {
    /**
     * Can an item be inserted at a given position?
     * @param position Where to insert an item.
     */
    can_insert_at(this: void, position: float): boolean;
    /**
     * Can an item be inserted at the back of this line?
     */
    can_insert_at_back(this: void): boolean;
    /**
     * Remove all items from this transport line.
     */
    clear(this: void): void;
    /**
     * Get counts of all items on this line, similar to how {@link LuaInventory::get_contents | runtime:LuaInventory::get_contents} does.
     * @returns List of all items on this line.
     */
    get_contents(this: void): ItemCountWithQuality[];
    /**
     * Get detailed information of items on this line, such as their position.
     */
    get_detailed_contents(this: void): DetailedItemOnLine[];
    /**
     * Count some or all items on this line, similar to how {@link LuaInventory::get_item_count | runtime:LuaInventory::get_item_count} does.
     * @param item Prototype name of the item to count. If not specified, count all items.
     */
    get_item_count(this: void, item?: ItemID): uint;
    /**
     * Get a map position related to a position on a transport line.
     * @param position Linear position along the transport line. Clamped to the transport line range.
     */
    get_line_item_position(this: void, position: float): MapPosition;
    /**
     * Insert items at a given position.
     * @param position Where on the line to insert the items.
     * @param items Items to insert.
     * @param belt_stack_size Maximum size of stack created on belt
     * @returns Were the items inserted successfully?
     */
    insert_at(this: void, position: float, items: ItemStackIdentification, belt_stack_size?: uint8): boolean;
    /**
     * Insert items at the back of this line.
     * @param belt_stack_size Maximum size of stack created on belt
     * @returns Were the items inserted successfully?
     */
    insert_at_back(this: void, items: ItemStackIdentification, belt_stack_size?: uint8): boolean;
    /**
     * Returns whether the associated internal transport line of this line is the same as the others associated internal transport line.
     *
     * This can return true even when the {@link LuaTransportLine::owner | runtime:LuaTransportLine::owner}s are different (so `this == other` is false), because the internal transport lines can span multiple tiles.
     */
    line_equals(this: void, other: LuaTransportLine): boolean;
    /**
     * Remove some items from this line.
     * @param items Items to remove.
     * @returns Number of items actually removed.
     */
    remove_item(this: void, items: ItemStackIdentification): uint;
    /**
     * The transport lines that this transport line is fed by or an empty table if none.
     */
    readonly input_lines: LuaTransportLine[];
    /**
     * Length of the transport line. Items can be inserted at line position from 0 up to returned value
     */
    readonly line_length: float;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The transport lines that this transport line outputs items to or an empty table if none.
     */
    readonly output_lines: LuaTransportLine[];
    /**
     * The entity this transport line belongs to.
     */
    readonly owner: LuaEntity;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * The indexing operator.
     */
    get: LuaTableGetMethod<any, LuaItemStack>;
    /**
     * The indexing operator.
     */
    set: LuaTableSetMethod<any, LuaItemStack>;
    /**
     * Get the number of items on this transport line.
     */
    length: LuaLengthMethod<uint>;
}
/**
 * Prototype of a trivial smoke.
 */
interface LuaTrivialSmokePrototype extends LuaPrototypeBase {
    readonly affected_by_wind: boolean;
    readonly color: Color;
    readonly cyclic: boolean;
    readonly duration: uint;
    readonly end_scale: double;
    readonly fade_away_duration: uint;
    readonly fade_in_duration: uint;
    readonly glow_animation: boolean;
    readonly glow_fade_away_duration: uint;
    readonly movement_slow_down_factor: double;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly render_layer: RenderLayer;
    readonly show_when_smoke_off: boolean;
    readonly spread_duration: uint;
    readonly start_scale: double;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for turrets.
 */
interface LuaTurretControlBehavior extends LuaGenericOnOffControlBehavior {
    /**
     * The condition under which the turret will ignore targets not on its priority list.
     */
    ignore_unlisted_targets_condition: CircuitConditionDefinition;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * `true` if the turret will send the ammunition or fluid it contains to the circuit network.
     */
    read_ammo: boolean;
    /**
     * `true` if the turret will ignore targets not on its priority list if a circuit condition is met.
     */
    set_ignore_unlisted_targets: boolean;
    /**
     * `true` if the turret's target priority list will be determined from the signals on the circuit network.
     */
    set_priority_list: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * The undo queue for a player. The term `item_index` refers to the index of an undo item in the queue, while `action_index` refers to the index of one of the individual actions that make up an undo item.
 */
interface LuaUndoRedoStack {
    /**
     * Gets an undo item from the redo stack.
     * @param index The index of the item to get, ordered from most recent to oldest.
     */
    get_redo_item(this: void, index: uint): UndoRedoAction[];
    /**
     * The number of undo items in the redo stack.
     */
    get_redo_item_count(this: void): uint;
    /**
     * Gets the tag with the given name from a specific redo item action, or `nil` if it doesn't exist.
     * @param item_index The index of the redo item, ordered from most recent to oldest.
     * @param action_index The index of the redo action.
     * @param tag_name The name of the tag to get.
     */
    get_redo_tag(this: void, item_index: uint, action_index: uint, tag_name: string): AnyBasic;
    /**
     * Gets all tags for the given redo action.
     * @param item_index The index of the redo item, ordered from most recent to oldest.
     * @param action_index The index of the redo action.
     */
    get_redo_tags(this: void, item_index: uint, action_index: uint): Tags;
    /**
     * Gets an undo item from the undo stack.
     * @param index The index of the undo item to get, ordered from most recent to oldest.
     */
    get_undo_item(this: void, index: uint): UndoRedoAction[];
    /**
     * The number undo items in the undo stack.
     */
    get_undo_item_count(this: void): uint;
    /**
     * Gets the tag with the given name from a specific undo item action, or `nil` if it doesn't exist.
     * @param item_index The index of the undo item, ordered from most recent to oldest.
     * @param action_index The index of the undo action.
     * @param tag_name The name of the tag to get.
     */
    get_undo_tag(this: void, item_index: uint, action_index: uint, tag_name: string): AnyBasic;
    /**
     * Gets all tags for the given undo action.
     * @param item_index The index of the undo item, ordered from most recent to oldest.
     * @param action_index The index of the undo action.
     */
    get_undo_tags(this: void, item_index: uint, action_index: uint): Tags;
    /**
     * Removes an undo action from the specified undo item on the redo stack.
     * @param item_index The index of the undo item to change, ordered from most recent to oldest.
     * @param action_index The index of the undo action to remove.
     */
    remove_redo_action(this: void, item_index: uint, action_index: uint): void;
    /**
     * Removes an undo item from the redo stack.
     * @param index The index of the undo item to remove, ordered from most recent to oldest.
     */
    remove_redo_item(this: void, index: uint): void;
    /**
     * Removes a tag with the given name from the specified redo item.
     * @param item_index The index of the redo item, ordered from most recent to oldest.
     * @param action_index The index of the redo action.
     * @param tag The name of the tag to remove.
     * @returns Whether the tag existed and was successfully removed.
     */
    remove_redo_tag(this: void, item_index: uint, action_index: uint, tag: string): boolean;
    /**
     * Removes an undo action from the specified undo item on the undo stack.
     * @param item_index The index of the undo item to change, ordered from most recent to oldest.
     * @param action_index The index of the undo action to remove.
     */
    remove_undo_action(this: void, item_index: uint, action_index: uint): void;
    /**
     * Removes an undo item from the undo stack.
     * @param index The index of the undo item to remove, ordered from most recent to oldest.
     */
    remove_undo_item(this: void, index: uint): void;
    /**
     * Removes a tag with the given name from the specified undo item.
     * @param item_index The index of the undo item, ordered from most recent to oldest.
     * @param action_index The index of the undo action.
     * @param tag The name of the tag to remove.
     * @returns Whether the tag existed and was successfully removed.
     */
    remove_undo_tag(this: void, item_index: uint, action_index: uint, tag: string): boolean;
    /**
     * Sets a new tag with the given name and value on the specified redo item action.
     * @param item_index The index of the redo item, ordered from most recent to oldest.
     * @param action_index The index of the redo action.
     * @param tag_name The name of the tag to set.
     * @param tag The contents of the new tag.
     */
    set_redo_tag(this: void, item_index: uint, action_index: uint, tag_name: string, tag: AnyBasic): void;
    /**
     * Sets a new tag with the given name and value on the specified undo item action.
     * @param item_index The index of the undo item, ordered from most recent to oldest.
     * @param action_index The index of the undo action.
     * @param tag_name The name of the tag to set.
     * @param tag The contents of the new tag.
     */
    set_undo_tag(this: void, item_index: uint, action_index: uint, tag_name: string, tag: AnyBasic): void;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The index of the player to whom this stack belongs to.
     */
    readonly player_index: uint;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a virtual signal.
 */
interface LuaVirtualSignalPrototype extends LuaPrototypeBase {
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * Whether this is a special signal. The `everything`, `anything`, `each`, and `unknown` signals are considered special.
     */
    readonly special: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Prototype of a void energy source.
 */
interface LuaVoidEnergySourcePrototype {
    /**
     * The table of emissions of this energy source in `pollution/Joule`, indexed by pollutant type. Multiplying it by energy consumption in `Watt` gives `pollution/second`.
     */
    readonly emissions_per_joule: Record<string, double>;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    readonly render_no_network_icon: boolean;
    readonly render_no_power_icon: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * Control behavior for walls.
 */
interface LuaWallControlBehavior extends LuaControlBehavior {
    /**
     * The circuit condition.
     */
    circuit_condition: CircuitConditionDefinition;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    open_gate: boolean;
    output_signal?: SignalID;
    read_sensor: boolean;
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
}
/**
 * A wire connector of a given entity. Allows to find wires, add or remove wires and do some basic operations specific to those connectors.
 */
interface LuaWireConnector {
    /**
     * Checks if a wire can reach from this connector to the other connector.
     * @param other_connector Target to which a wire reach is to be checked.
     */
    can_wire_reach(this: void, other_connector: LuaWireConnector | LuaEntity): boolean;
    /**
     * Connects this connector to other wire connector.
     * @param target Other connector to which a wire should be added.
     * @param reach_check True by default. For wires out of reach or on different surfaces, `false` must be provided.
     * @param origin Origin of the wire. Defaults to `defines.wire_origin.player`.
     * @returns Whether a connection was made.
     */
    connect_to(this: void, target: LuaWireConnector, reach_check?: boolean, origin?: defines.wire_origin): boolean;
    /**
     * Removes all wires going out of this wire connector.
     * @param origin Origin of the wires to remove. Defaults to `defines.wire_origin.player`.
     * @returns True if any wire was removed.
     */
    disconnect_all(this: void, origin?: defines.wire_origin): boolean;
    /**
     * Disconnects this connector from other wire connector.
     * @param target Other connector to which wire to be removed should be removed.
     * @param origin Origin of the wire. Defaults to `defines.wire_origin.player`.
     * @returns Whether a connection was removed.
     */
    disconnect_from(this: void, target: LuaWireConnector, origin?: defines.wire_origin): boolean;
    /**
     * Checks if this and other wire connector have a common neighbour.
     * @param other_connector Other connector to check for common neighbour.
     */
    have_common_neighbour(this: void, other_connector: LuaWireConnector, ignore_ghost_neighbours?: boolean): boolean;
    /**
     * Checks if this connector has any wire going to the other connector.
     * @param target Other connector to check for a connection to.
     * @param origin Origin of the wire. Defaults to `defines.wire_origin.player`.
     */
    is_connected_to(this: void, target: LuaWireConnector, origin?: defines.wire_origin): boolean;
    /**
     * Amount of wires going out of this connector. It includes all wires (ghost wires and real wires).
     */
    readonly connection_count: uint;
    /**
     * All wire connectors this connector is connected to.
     */
    readonly connections: WireConnection[];
    /**
     * If this connector is owned by an entity inside of a ghost. If any of 2 ends of a wire attaches to a ghost connector, then a wire is considered to be a ghost.
     */
    readonly is_ghost: boolean;
    /**
     * Index of a CircuitNetwork or ElectricSubNetwork which is going through this wire connector. Returns 0 if there is no network associated with this wire connector right now. CircuitNetwork indexes are independent of indexes of ElectricSubNetwork so they may collide with each other
     */
    readonly network_id: uint;
    /**
     * The class name of this object. Available even when `valid` is false. For LuaStruct objects it may also be suffixed with a dotted path to a member of the struct.
     */
    readonly object_name: string;
    /**
     * The entity this wire connector belongs to. May return entity ghost instead if this wire connector belongs to inner entity.
     */
    readonly owner: LuaEntity;
    /**
     * Amount of real wires going out of this connector. It only includes wires for which both wire connectors are real.
     */
    readonly real_connection_count: uint;
    /**
     * All wire connectors this connector is connected to with real wires.
     */
    readonly real_connections: WireConnection[];
    /**
     * Is this object valid? This Lua object holds a reference to an object within the game engine. It is possible that the game-engine object is removed whilst a mod still holds the corresponding Lua object. If that happens, the object becomes invalid, i.e. this attribute will be `false`. Mods are advised to check for object validity if any change to the game state might have occurred between the creation of the Lua object and its access.
     */
    readonly valid: boolean;
    /**
     * Identifier of this connector in the entity this connector belongs to.
     */
    readonly wire_connector_id: defines.wire_connector_id;
    /**
     * The type of wires that can be connected to this connector.
     */
    readonly wire_type: defines.wire_type;
}

}