interface LuaGameScript {
    help(this: void): void
    set_game_state(
        this: void,
        state: {
            game_finished: boolean,
            player_won: boolean,
            next_level: string,
            can_continue: boolean,
            victorious_force: ForceSpecification,
        }): void
    get_entity_by_tag(this: void, tag: string): LuaEntity,
    show_message_dialog(
        this: void,
        table: {
            text: LocalisedString,
            image?: string,
            point_to?: GuiArrowSpecification,
            style?: string,
        }): void
    disable_tips_and_tricks(this: void): void
    is_demo(this: void): boolean
    reload_script(this: void): void
    reload_mods(this: void): void
    save_atlas(this: void): void
    check_consistency(this: void): void
    regenerate_entities(this: void, entities: string | string[]): void
    take_screenshot(
        this: void,
        table: {
            player?: PlayerSpecification,
            by_player?: PlayerSpecification,
            surface?: SurfaceSpecification,
            position?: Position,
            resolution?: Position,
            zoom?: number,
            path?: string,
            show_gui?: boolean,
            show_entity_info?: boolean,
            anti_alias?: boolean,
            quality?: number,
        }): void
    set_wait_for_screenshots_to_finish(this: void): void
    take_technology_screenshot(
        this: void,
        table: {
            force?: ForceSpecification,
            path?: string,
            by_player?: PlayerSpecification,
            selected_technology?: TechnologySpecification,
            skip_disabled?: boolean,
            quality?: number,
        }): void
    table_to_json(this: void, data: object): string
    json_to_table(this: void, json: string): any
    write_file(this: void, filename: string, data: LocalisedString, append?: boolean, for_player?: number): void
    remove_path(this: void, path: string): void
    remove_offline_players(this: void, players?: Array<LuaPlayer | string>): void
    force_crc(this: void): void
    create_force(this: void, force: string): LuaForce
    merge_forces(this: void, source: ForceSpecification, destination: ForceSpecification): void
    create_surface(this: void, name: string, settings?: MapGenSettings): LuaSurface
    server_save(this: void, name?: string): void
    auto_save(this: void, name?: string): void
    delete_surface(this: void, surface: string | LuaSurface): void
    disable_replay(this: void): void
    disable_tutorial_triggers(this: void): void
    direction_to_string(this: void, direction: defines.direction): void
    print(this: void, message: LocalisedString, color: Color): void
    create_random_generator(this: void, seed: number): LuaRandomGenerator
    check_prototype_translations(this: void): void
    play_sound(
        this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
        }): boolean
    is_valid_sound_path(this: void, soundPath: SoundPath): boolean
    kick_player(this: void, playerSpecification: PlayerSpecification, reason?: LocalisedString): void
    ban_player(this: void, playerSpecification: PlayerSpecification, reason?: LocalisedString): void
    unban_player(this: void, playerSpecification: PlayerSpecification): void
    purge_player(this: void, playerSpecification: PlayerSpecification): void
    mute_player(this: void, playerSpecification: PlayerSpecification): void
    unmute_player(this: void, playerSpecification: PlayerSpecification): void
    count_pipe_groups(this: void): void
    is_multiplater(this: void): boolean
    get_active_entities_count(this: void, surface?: SurfaceSpecification): number
    get_map_exchange_string(this: void): string
    parse_map_exchange_string(this: void, map_exchange_string: string): MapExchangeStringData
    get_train_stops(
        this: void,
        opts?: {
            name?: string | string[],
            surface?: SurfaceSpecification,
            force?: ForceSpecification,
        }): LuaEntity[]
    get_player(this: void, player: number | string): LuaPlayer
    get_surface(this: void, surface: number | string): LuaSurface
    create_profiler(this: void): LuaProfiler
    evaluate_expression(this: void, expression: string, variables: {[key: string]: number}): number
    get_filtered_entity_prototypes(
        this: void,
        filters: LuaEntityPrototypeFilter[]): {[key: string]: LuaEntityPrototype }
    get_filtered_item_prototypes(
        this: void,
        filters: LuaItemPrototypeFilter[]): {[key: string]: LuaItemPrototype }
    get_filtered_equipment_prototypes(
        this: void,
        filters: LuaEquipmentPrototypeFilter[]): {[key: string]: LuaEquipmentPrototype }
    get_filtered_mod_setting_prototypes(
        this: void, filters:
        LuaModSettingPrototypeFilter[]): {[key: string]: LuaModSettingPrototype }
    get_filtered_achievement_prototypes(
        this: void,
        filters: LuaAchievementPrototypeFilter[]): {[key: string]: LuaAchievementPrototype }
    readonly player: LuaPlayer | null
    readonly players: {[key: string]: LuaPlayer }
    readonly map_settings: MapSettings
    readonly difficulty_settings: DifficultySettings
    readonly difficulty: defines.difficulty
    readonly forces: {[key: string]: LuaForce }
    readonly entity_prototypes: {[key: string]: LuaEntityPrototype }
    readonly item_prototypes: {[key: string]: LuaItemPrototype }
    readonly fluid_prototypes: {[key: string]: LuaFluidPrototype }
    readonly tile_prototypes: {[key: string]: LuaTilePrototype }
    readonly equipment_prototypes: {[key: string]: LuaEquipmentPrototype }
    readonly damage_prototypes: {[key: string]: LuaDamagePrototype }
    readonly virtual_signal_prototypes: {[key: string]: LuaVirtualSignalPrototype }
    readonly equipment_grid_prototypes: {[key: string]: LuaEquipmentGridPrototype }
    readonly recipe_prototypes: {[key: string]: LuaRecipePrototype }
    readonly technology_prototypes: {[key: string]: LuaTechnologyPrototype }
    readonly decorative_prototypes: {[key: string]: LuaDecorativePrototype }
    readonly autoplace_control_prototypes: {[key: string]: LuaAutoplaceControlPrototype }
    readonly noise_layer_prototypes: {[key: string]: LuaNoiseLayerPrototype }
    readonly mod_setting_prototypes: {[key: string]: LuaModSettingPrototype }
    readonly custom_input_prototypes: {[key: string]: LuaCustomInputPrototype }
    readonly ammo_category_prototypes: {[key: string]: LuaAmmoCategoryPrototype }
    readonly named_noise_prototypes: {[key: string]: LuaNamedNoiseExpression }
    readonly item_subgroup_prototypes: {[key: string]: LuaGroup }
    readonly item_group_prototypes: {[key: string]: LuaGroup }
    readonly fuel_category_prototypes: {[key: string]: LuaFuelCategoryPrototype }
    readonly resource_category_prototypes: {[key: string]: LuaResourceCategoryPrototype }
    readonly achievement_prototypes: {[key: string]: LuaAchievementPrototype }
    readonly module_category_prototypes: {[key: string]: LuaModuleCategoryPrototype }
    readonly equipment_category_prototypes: {[key: string]: LuaEquipmentCategoryPrototype }
    readonly trivial_smoke_prototypes: {[key: string]: LuaTrivialSmokePrototype }
    readonly shortcut_prototypes: {[key: string]: LuaShortcutPrototype }
    readonly recipe_category_prototypes: {[key: string]: LuaRecipeCategoryPrototype }
    readonly styles: {[key: string]: string }
    readonly tick: number
    readonly ticks_played: number
    tick_paused: boolean
    ticks_to_run: number
    readonly finished: boolean
    speed: number
    readonly surfaces: {[key: string]: LuaSurface }
    readonly active_mods: {[key: string]: string }
    readonly connected_players: LuaPlayer[]
    readonly permissions: LuaPermissionGroups
    readonly backer_names: {[key: number]: string}
    readonly default_map_gen_settings: MapGenSettings
    enemy_has_vision_on_land_mines: boolean
    autosave_enabled: boolean
    draw_resource_selection: boolean
    pollution_statistics: LuaFlowStatistics
}

interface LuaRandomGenerator {
    (this: void, lower?: number, upper?: number): number
    re_seed(this: void, seed: number): void
    readonly valid: boolean
    help(): string
}

interface LuaProfiler {
    reset(this: void): void
    stop(this: void): void
    restart(this: void): void
    divide(this: void, number: number): void
    readonly valid: boolean
    help(this: void): string
}

interface LuaPermissionGroups {
    create_group(this: void, name: string): LuaPermissionGroup
    get_group(this: void, name: string): LuaPermissionGroup
    readonly groups: LuaPermissionGroup[]
    readonly valid: boolean
    help(this: void): string
}

interface LuaPermissionGroup {
    add_player(this: void, player: PlayerSpecification): boolean
    remove_player(this: void, player: PlayerSpecification): boolean
    allows_action(this: void, action: defines.input_action): boolean
    set_allows_action(this: void, action: defines.input_action, allow: boolean): boolean
    destroy(this: void): boolean
    name: string
    readonly players: LuaPlayer[]
    readonly group_id: number
}

interface LuaFlowStatistics {
    get_input_count(this: void, name: string): number
    set_input_count(this: void, name: string, count: number): void
    get_output_count(this: void, name: string): number
    set_output_count(this: void, name: string, count: number): void
    get_flow_count(
        this: void,
        table: {
            name: string,
            input: number,
            precision_index: defines.flow_precision_index,
            count?: boolean,
        }): number
    on_flow(this: void, name: string, count: number): void
    clear(this: void): void
    readonly input_counts: {[key: string]: number[] }
    readonly output_counts: {[key: string]: number[] }
    readonly force: LuaForce
}

interface LuaBootstrap {
    on_init(this: void, f: (() => any | null)): void
    on_load(this: void, f: (() => any | null)): void
    on_configuration_changed(this: void, f: (() => any | null)): void
    on_event(
        this: void,
        event: defines.events | defines.events[] | string,
        callback: (this: void, event: event) => void): void
    on_nth_tick(this: void, tick: number | number[] | null, f: (event: NthTickEvent) => void): void
    generate_event_name(this: void): number
    get_event_handler(this: void, event: number): () => any
    raise_event(this: void, event: number, table: object): void
    get_event_order(this: void): string
    readonly mod_name: string
}

interface LuaControl {
    get_inventory(this: void, inventory: defines.inventory): LuaInventory | null
    get_main_inventory(this: void): LuaInventory | null
    can_insert_items(this: void, items: ItemStackSpecification): boolean
    insert(this: void, items: ItemStackSpecification): number
    set_gui_arrow(this: void, table: GuiArrowSpecification): void
    clear_gui_arrow(this: void): void
    has_items_inside(this: void): boolean
    can_reach_entity(this: void, entity: LuaEntity): boolean
    clear_items_inside(this: void): void
    remove_item(this: void, items: ItemStackSpecification): number
    teleport(this: void, position: Position | number, surface?: SurfaceSpecification | number): boolean
    update_selected_entity_position(this: void, position: Position): void
    clear_selected_entity(this: void): void
    disable_flashlight(this: void): void
    enable_flashlight(this: void): void
    get_craftable_count(this: void, recipe: string | LuaRecipe): number
    begin_crafting(
        this: void,
        table: {
            count: number,
            recipe: string | LuaRecipe,
            silent?: boolean,
        },
    ): number
    cancel_crafting(
        this: void,
        options: {
            index: number,
            count: number,
        },
    ): void
    mine_entity(this: void, entity: LuaEntity, force?: boolean): boolean
    mine_tile(this: void, tile: LuaTile): boolean
    is_player(this: void): boolean
    open_technology_gui(this: void, technology?: TechnologySpecification): void
    readonly surface: LuaSurface
    readonly position: Position
    readonly vehicle: LuaEntity
    force: ForceSpecification
    selected: LuaEntity | null
    opened: LuaEntity |
        LuaItemStack |
        LuaEquipment |
        LuaEquipmentGrid |
        LuaPlayer |
        LuaGuiElement |
        defines.gui_type |
        null
    readonly crafting_queue_size: number
    walking_state: { walking: boolean, direction: defines.direction }
    riding_state: RidingState
    mining_state: { mining: boolean, position?: Position }
    shooting_state: { state: defines.shooting, position: Position }
    picking_state: boolean
    repair_state: { repairing: boolean, position: Position }
    readonly cursor_stack: LuaItemStack
    cursor_ghost: ItemPrototypeSpecification
    driving: boolean
    readonly crafting_queue: Array<{ index: number, recipe: string, count: number }>
    readonly following_robots: LuaEntity[]
    cheat_mode: boolean
    character_crafting_speed_modifier: number
    character_mining_speed_modifier: number
    character_additional_mining_categories: string[]
    character_running_speed_modifier: number
    character_build_distance_bonus: number
    character_item_drop_distance_bonus: number
    character_reach_distance_bonus: number
    character_resource_reach_distance_bonus: number
    character_item_pickup_distance_bonus: number
    character_loot_pickup_distance_bonus: number
    character_inventory_slots_bonus: number
    character_logistic_slot_count_bonus: number
    characer_trash_slot_count_bonus: number
    character_maximum_following_robot_count_bonus: number
    character_health_bonus: number
    auto_trash_filters: {[key: string]: number }
    opened_gui_type: defines.gui_type
    readonly build_distance: number
    readonly drop_item_distance: number
    readonly reach_distance: number
    readonly item_pickup_distance: number
    readonly loot_pickup_distance: number
    readonly resource_reach_distance: number
    readonly in_combat: boolean
    readonly character_running_speed: number
    readonly character_mining_progress: number
}

interface LuaTile {
    collides_with(this: void, layer: CollisionMaskLayer): boolean
    order_deconstruction(this: void, force: ForceSpecification, player: PlayerSpecification): LuaEntity | null
    cancel_deconstruction(this: void, force: ForceSpecification, player: PlayerSpecification): void
    readonly name: string
    readonly prototype: LuaTilePrototype
    readonly position: Position
    readonly hidden_tile: string
    readonly valid: boolean
    help(this: void): string
}

interface LuaTransportLine {
    clear(this: void): void
    get_item_count(this: void, item?: string): number
    remove_item(this: void, items: ItemStackSpecification): number
    can_insert_at(this: void, position: number): boolean
    insert_at(this: void, position: number, items: ItemStackSpecification): boolean
    insert_at_back(this: void, items: ItemStackSpecification): boolean
    get_contents(this: void): {[key: string]: number }
    line_equals(this: void, other: LuaTransportLine): boolean
    // operator # missing
    readonly owner: LuaEntity
    readonly output_lines: LuaTransportLine[] | null
    readonly input_lines: LuaTransportLine[] | null
    [key: number]: LuaItemStack
    readonly valid: boolean
    help(this: void): string
}

interface LuaControlBehavior {
    get_circuit_network(
        this: void,
        wire: defines.wire_type,
        circuit_connector: defines.circuit_connector_id): LuaCircuitNetwork | null
    readonly type: defines.control_behavior.type
    readonly entity: LuaEntity
}

interface LuaAccumulatorControlBehavior extends LuaControlBehavior {
    output_signal: SignalID
    readonly valid: boolean
    help(this: void): string
}

interface LuaCombinatorControlBehavior extends LuaControlBehavior {
    get_signal_last_tick(this: void, signal: SignalID): number | null
    readonly signals_last_tick: Signal[]
}

interface LuaConstantCombinatorControlBehavior extends LuaControlBehavior {
    set_signal(this: void, index: number, signal: Signal): void
    get_signal(this: void, index: number): Signal
    parameters: ConstantCombinatorParameters | null
    enabled: boolean
    readonly signals_count: number
    readonly valid: boolean
    help(this: void): string
}

interface LuaContainerControlBehavior extends LuaControlBehavior {
    readonly valid: boolean
    help(this: void): string
}

interface LuaGenericOnOffControlBehavior extends LuaControlBehavior {
    readonly disabled: boolean
    circuit_condition: CircuitConditionSpecification | null
    logistic_condition: CircuitConditionSpecification | null
    connect_to_logistic_network: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaLogisticContainerControlBehavior extends LuaControlBehavior {
    circuit_mode_of_operation: defines.control_behavior.logistic_container.circuit_mode_of_operation
    readonly valid: boolean
    help(this: void): string
}

interface LuaProgrammableSpeakerControlBehavior extends LuaControlBehavior {
    circuit_parameters: ProgrammableSpeakerCircuitParameters
    circuit_condition: CircuitConditionSpecification
    readonly valid: boolean
    help(this: void): string
}

interface LuaRailChainSignalControlBehavior extends LuaControlBehavior {
    red_signal: SignalID
    orange_signal: SignalID
    green_signal: SignalID
    blue_signal: SignalID
    readonly valid: boolean
    help(this: void): string
}

interface LuaRailSignalControlBehavior extends LuaControlBehavior {
    red_signal: SignalID
    orange_signal: SignalID
    green_signal: SignalID
    close_signal: boolean
    read_signal: boolean
    circuit_condition: CircuitConditionSpecification
    readonly valid: boolean
    help(this: void): string
}

interface LuaRoboportControlBehavior extends LuaControlBehavior {
    mode_of_operation: defines.control_behavior.roboport.circuit_mode_of_operation
    available_logistic_output_signal: SignalID
    total_logistic_output_signal: SignalID
    available_construction_output_signal: SignalID
    total_construction_output_signal: SignalID
    readonly valid: boolean
    help(this: void): string
}

interface LuaStorageTankControlBehavior extends LuaControlBehavior {
    readonly valid: boolean
    help(this: void): string
}

interface LuaWallControlBehavior extends LuaControlBehavior {
    circuit_condition: CircuitConditionSpecification
    open_gate: boolean
    read_sensor: boolean
    output_signal: SignalID
    readonly valid: boolean
    help(this: void): string
}

interface LuaArithmeticCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    parameters: ArithmeticCombinatorParameters | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaDeciderCombinatorControlBehavior extends LuaCombinatorControlBehavior {
    parameters: DeciderCombinatorParameters | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaInserterControlBehavior extends LuaGenericOnOffControlBehavior {
    circuit_read_hand_contents: boolean
    circuit_mode_of_operation: defines.control_behavior.inserter.circuit_mode_of_operation
    circuit_hand_read_mode: defines.control_behavior.inserter.hand_read_mode
    circuit_set_stack_size: boolean
    circuit_stack_control_signal: SignalID
    readonly valid: boolean
    help(this: void): string
}

interface LuaLampControlBehavior extends LuaGenericOnOffControlBehavior {
    use_colors: boolean
    color: Color | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaMiningDrillControlBehavior extends LuaGenericOnOffControlBehavior {
    circuit_enable_disable: boolean
    circuit_read_resources: boolean
    resource_read_mode: defines.control_behavior.mining_drill.resource_read_mode
    readonly resource_read_targets: LuaEntity[]
    readonly valid: boolean
    help(this: void): string
}

interface LuaTrainStopControlBehavior extends LuaGenericOnOffControlBehavior {
    send_to_train: boolean
    read_from_train: boolean
    read_stopped_train: boolean
    enable_disable: boolean
    stopped_train_signal: SignalID
    readonly valid: boolean
    help(this: void): string
}

interface LuaTransportBeltControlBehavior extends LuaGenericOnOffControlBehavior {
    enable_disable: boolean
    read_contents: boolean
    read_contents_mode: defines.control_behavior.transport_belt.content_read_mode
    readonly valid: boolean
    help(this: void): string
}

interface LuaCircuitNetwork {
    get_signal(this: void, signal: SignalID): number
    readonly entity: LuaEntity
    readonly wire_type: defines.wire_type
    readonly circuit_connector_id: defines.circuit_connector_id
    readonly signals: Signal[]
    readonly network_id: number
    readonly connected_circuit_count: number
    readonly valid: boolean
    help(this: void): string
}

interface LuaLogisticPoint {
    readonly owner: LuaEntity
    readonly logistic_network: LuaLogisticNetwork
    readonly logistic_member_index: number
    readonly filters: LogisticFilter[]
    readonly mode: defines.logistic_mode
    readonly force: LuaForce
    readonly targeted_items_pickup: {[key: string]: number }
    readonly targeted_items_deliver: {[key: string]: number }
    readonly exact: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaFluidBox {
    get_prototype(this: void, index: number): LuaFluidPrototype
    get_capacity(this: void, index: number): number
    get_connections(this: void, index: number): LuaFluidBox[]
    get_filter(this: void, index: number): {
        name: string,
        minimum_temperature: number,
        maximum_temperature: number | null,
    }
    set_filter(
        this: void,
        index: number,
        table: {
            name: string,
            minimum_temperature?: number,
            maximum_temperature?: number,
            force?: boolean,
        }): boolean
    get_flow(this: void, index: number): number
    get_locked_fluid(this: void, index: number): string | null
    // missing operator #
    readonly owner: LuaEntity
    readonly [key: number]: Fluid | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaBurner {
    readonly owner: LuaEntity | LuaEquipment
    readonly inventory: LuaInventory
    readonly burnt_result_inventory: LuaInventory
    heat: number
    readonly heat_capacity: number
    remaining_burning_fuel: number
    currently_burning: LuaItemPrototype
    readonly fuel_categories: {[key: string]: boolean }
    readonly valid: boolean
    help(this: void): string
}

interface LuaAiSettings {
    allow_destroy_when_commands_fail: boolean
    allow_try_return_to_spawner: boolean
    do_separation: boolean
    path_resolution_modifier: number
    readonly valid: boolean
    help(this: void): string
}

interface LuaEntity extends LuaControl {
    get_output_inventory(this: void): LuaInventory
    get_module_inventory(this: void): LuaInventory | null
    get_fuel_inventory(this: void): LuaInventory | null
    get_burnt_result_inventory(this: void): LuaInventory | null
    damage(this: void, damage: number, force: ForceSpecification, type?: string): number
    can_be_destroyed(this: void): boolean
    destory(this: void, opts: { do_cliff_correction?: boolean, raise_destory?: boolean}): boolean
    set_command(this: void, command: Command): void
    has_command(this: void): boolean
    die(this: void, force: ForceSpecification | null, cause?: LuaEntity): boolean
    has_flag(this: void, flag: string): boolean
    ghost_has_flag(this: void, flag: string): boolean
    add_market_item(this: void, offer: Offer): void
    remove_market_offer(this: void, offer: number): boolean
    get_market_items(this: void): Offer[]
    clear_market_items(this: void): void
    connect_neighbour(
        this: void,
        target: LuaEntity | {
            wire: defines.wire_type,
            target_entity: LuaEntity,
            source_circuit_id?: number,
            target_circuit_id?: number,
        }): boolean
    disconnect_neighbour(
        this: void,
        target?: defines.wire_type | LuaEntity | {
            write: defines.wire_type,
            target_entity: LuaEntity,
            source_circuit_id?: number,
            target_circuit_id?: number,
        },
    ): void
    order_deconstruction(this: void, force: ForceSpecification, player: PlayerSpecification): boolean
    cancel_deconstruction(this: void, force: ForceSpecification, player: PlayerSpecification): boolean
    to_be_deconstructed(this: void, force: ForceSpecification): boolean
    order_upgrade(
        this: void,
        table: {
            force: ForceSpecification,
            target: EntityPrototypeSpecification,
            player?: PlayerSpecification,
        }): boolean
    cancel_upgrade(this: void, force: ForceSpecification, player: PlayerSpecification): boolean
    to_be_upgraded(this: void): boolean
    get_request_slot(this: void, slot: number): SimpleItemStack | null
    set_request_slot(this: void, request: ItemStackSpecification, slot: number): void
    clear_request_slot(this: void, slot: number): void
    is_crafting(this: void): boolean
    is_opened(this: void): boolean
    is_opening(this: void): boolean
    is_closed(this: void): boolean
    request_to_open(this: void, force: ForceSpecification, extra_time?: number): void
    request_to_close(this: void, force: ForceSpecification): void
    get_transport_line(this: void, index: number): LuaTransportLine
    get_max_transport_line(this: void): number
    launch_rocket(this: void): boolean
    revive(
        this: void,
        opts: { return_item_request_proxy?: boolean, raise_revive?: boolean}): {[key: string]: number} | null
    silent_revive(
        this: void,
        opts: { return_item_request_proxy?: boolean, raise_revive?: boolean}): {[key: string]: number} | null
    get_connected_rail(
        this: void,
        table: {
            rail_direction: defines.rail_direction,
            rail_connection_direction: defines.rail_connection_direction,
        },
    ): LuaEntity
    get_connected_rails(this: void): LuaEntity[]
    get_rail_segment_entity(this: void, direction: defines.rail_direction, in_else_out: boolean): LuaEntity
    get_rail_segment_end(this: void, direction: defines.rail_direction): LuaEntity
    get_rail_segment_length(this: void): number
    get_rail_segment_overlaps(this: void): LuaEntity[]
    get_filter(this: void, uint: number): string | null
    set_filter(this: void, index: number, filter: string): void
    get_infinity_container_filter(this: void, index: number): InfinityContainerFilter
    set_infinity_container_filter(this: void, index: number, filter: InfinityContainerFilter | null): void
    get_infinity_pipe_filter(this: void): InfinityPipeFilter
    set_infinity_pipe_filter(this: void, filter: InfinityPipeFilter | null): void
    get_heat_setting(this: void): HeatSetting
    set_heat_setting(this: void, filter: HeatSetting): void
    get_control_behavior(this: void): LuaControlBehavior | null
    get_or_create_control_behavior(this: void): LuaControlBehavior | null
    get_circuit_network(
        this: void,
        wire: defines.wire_type,
        circuit_connector?: defines.circuit_connector_id): LuaCircuitNetwork | null
    get_merged_signals(this: void, circuit_connector?: defines.circuit_connector_id): Signal[] | null
    supports_backer_name(this: void): boolean
    copy_settings(this: void, entity: LuaEntity): {[key: string]: number }
    get_logistic_point(this: void, index?: defines.logistic_member_index): LuaLogisticPoint | LuaLogisticPoint[]
    play_note(this: void, instrument: number, note: number): boolean
    connect_rolling_stock(this: void, direction: defines.rail_direction): boolean
    disconnect_rolling_stock(this: void, direction: defines.rail_direction): boolean
    update_connections(this: void): void
    get_recipe(this: void): LuaRecipe | null
    set_recipe(this: void, recipe: string | LuaRecipe | null): {[key: string]: number }
    rotate(
        this: void,
        options: {
            reverse?: boolean,
            by_player?: LuaPlayer,
            spill_items?: boolean,
            enable_looted?: boolean,
            force?: LuaForce | string,
        }): boolean
    get_driver(this: void): LuaEntity | LuaPlayer | null
    set_driver(this: void, driver: LuaEntity | LuaPlayer | null): void
    get_passenger(this: void): LuaEntity | LuaPlayer | null
    set_passenger(this: void, passenger: LuaEntity | LuaPlayer): void
    is_connected_to_electric_network(this: void): boolean
    get_train_stop_trains(this: void): LuaTrain[]
    get_stopped_train(this: void): LuaTrain
    clone(
        this: void,
        table: {
            position: Position,
            surface?: LuaSurface,
            force?: ForceSpecification,
        },
    ): LuaEntity
    get_fluid_count(this: void, fluid?: string): number
    get_fluid_contents(this: void): {[key: string]: number }
    remove_fluid(
        this: void,
        table: {
            name: string,
            amount: number,
            minimum_temperature?: number,
            maximum_temperature?: number,
            temperature?: number,
        },
    ): number
    insert_fluid(this: void, fluid: Fluid): number
    clear_fluid_inside(this: void): void
    get_beam_source(this: void): BeamTarget
    set_beam_target(this: void, target: LuaEntity | Position): void
    get_radius(this: void): number
    get_health_ratio(this: void): number
    create_build_effect_smoke(this: void): void
    release_from_spawner(this: void): void
    toggle_equipment_movement_bonus(this: void): void
    can_shoot(this: void, target: LuaEntity, position: Position): boolean
    start_fading_out(this: void): void
    get_upgrade_target(this: void): LuaEntityPrototype
    readonly name: string
    readonly ghost_name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly ghost_localised_name: LocalisedString
    readonly ghost_localised_description: LocalisedString
    readonly type: string
    readonly ghost_type: string
    active: boolean
    destructible: boolean
    minable: boolean
    rotatable: boolean
    operable: boolean
    health: number
    direction: defines.direction
    readonly supports_direction: boolean
    orientation: number
    readonly cliff_orientation: string
    amount: number
    initial_amount: number | null
    effectivity_modifier: number
    consumption_modifier: number
    friction_modifier: number
    speed: number
    stack: LuaItemStack
    prototype: LuaEntityPrototype
    ghost_prototype: LuaEntityPrototype | LuaTilePrototype
    drop_position: Position
    pickup_position: Position
    drop_target: LuaEntity | null
    pickup_target: LuaEntity
    selected_gun_index: number | null
    energy: number
    temperature: number | null
    readonly previous_recipe: LuaRecipe | null
    readonly held_stack: LuaItemStack
    readonly held_stack_position: Position
    readonly train: LuaTrain
    readonly neighbours: {[key: string]: LuaEntity[] | LuaEntity[][] | LuaEntity }
    readonly belt_neighbours: {[key: string]: LuaEntity[] }
    fluidbox: LuaFluidBox
    backer_name: string | null
    time_to_live: number
    color: Color
    text: LocalisedString
    readonly signal_state: defines.signal_state
    readonly chain_signal_state: defines.chain_signal_state
    to_be_looted: boolean
    readonly crafting_speed: number
    crafting_progress: number
    bonus_progress: number
    readonly belt_to_ground_type: 'input' | 'output'
    loader_type: 'input' | 'output'
    rocket_parts: number
    readonly logistic_network: LuaLogisticNetwork
    readonly logistic_cell: LuaLogisticCell
    item_requests: {[key: string]: number }
    readonly player: LuaPlayer | null
    readonly unit_group: LuaUnitGroup
    damage_dealt: number
    kills: number
    last_user: LuaPlayer
    electric_buffer_size: number | null
    readonly electric_input_flow_limit: number | null
    readonly electric_output_flow_limit: number | null
    readonly electric_drain: number | null
    readonly electric_emissions: number | null
    readonly unit_number: number | null
    readonly ghost_unit_number: number | null
    mining_progress: number | null
    bonus_mining_progress: number | null
    power_production: number
    power_usage: number
    readonly bounding_box: BoundingBox
    readonly secondary_bounding_box: BoundingBox | null
    readonly selection_box: BoundingBox
    readonly secondary_selection_box: BoundingBox | null
    readonly mining_target: LuaEntity | null
    readonly circuit_connected_entities: { red: LuaEntity[], green: LuaEntity[] }
    readonly circuit_connection_definitions: Array<{
        wire: defines.wire_type.green | defines.wire_type.red,
        target_entity: LuaEntity,
        source_circuit_id: number,
        target_circuit_id: number,
    }>
    readonly request_slot_count: number
    readonly filter_slot_count: number
    readonly loader_container: LuaEntity
    readonly grid: LuaEquipmentGrid | null
    graphics_variation: number | null
    tree_color_index: number
    readonly tree_color_index_max: number
    tree_stage_index: number
    readonly tree_stage_index_max: number
    readonly burner: LuaBurner | null
    shooting_target: LuaEntity | null
    readonly proxy_target: LuaEntity | null
    readonly stickers: LuaEntity[]
    readonly sticked_to: LuaEntity
    parameters: ProgrammableSpeakerParameters
    alert_parameters: ProgrammableSpeakerAlertParameters
    readonly electric_network_statistics: LuaFlowStatistics
    inserter_stack_size_override: number
    products_finished: number
    readonly spawner: LuaEntity | null
    readonly units: LuaEntity[]
    power_switch_state: boolean
    relative_turret_orientation: number | null
    readonly effects: Effects | null
    infinity_container_filters: InfinityContainerFilter[]
    remove_unfiltered_items: boolean
    character_corpse_player_index: number
    character_corpse_tick_of_death: number
    character_corpse_cause_of_death: LocalisedString
    associated_player: LuaPlayer | null
    readonly tick_of_last_attack: number
    readonly tick_of_last_damage: number
    splitter_filter: LuaItemPrototype | null
    inserter_filter_mode: 'blacklist' | 'whitelist' | null
    splitter_input_priority: 'left' | 'none' | 'right'
    splitter_output_priority: 'left' | 'none' | 'right'
    readonly armed: boolean
    recipe_locked: boolean
    readonly connected_rail: LuaEntity | null
    readonly trains_in_block: number
    timeout: number
    readonly neighbour_bonus: number
    readonly ai_settings: LuaAiSettings
    highlight_box_type: string
    highlight_box_blink_interval: number
    readonly status: defines.entity_status | null
    enable_logistics_while_moving: boolean
    render_player: LuaPlayer | null
    render_to_forces: ForceSpecification[] | null
    readonly pump_rail_target: LuaEntity | null
    readonly moving: boolean
    readonly electric_network_id: number | null
    allow_dispatching_robots: boolean
    auto_launch: boolean
    readonly energy_generated_last_tick: number
    storage_filter: LuaItemPrototype
    request_from_buffers: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaTrain {
    get_item_count(this: void, item?: string): number
    get_contents(this: void): {[key: string]: number }
    remove_item(this: void, stack: ItemStackSpecification): number
    insert(this: void, stack: ItemStackSpecification): void
    clear_items_inside(this: void): void
    recalculate_path(this: void, force?: boolean): boolean
    get_fluid_count(this: void, fluid?: string): number
    get_fluid_contents(this: void): {[key: string]: number }
    remove_fluid(this: void, fluid: Fluid): number
    insert_fluid(this: void, fluid: Fluid): number
    clear_fluids_inside(this: void): void
    go_to_station(index: number): void
    get_rails(): LuaEntity[]
    manual_mode: boolean
    speed: number
    readonly max_forward_speed: number
    readonly max_backward_speed: number
    readonly weight: number
    readonly carriages: LuaEntity[]
    readonly locomotives: {[key in 'front_movers' | 'back_movers']: LuaEntity[] }
    readonly cargo_wagons: LuaEntity[]
    readonly fluid_wagons: LuaEntity[]
    schedule: TrainSchedule | null
    readonly state: defines.train_state
    readonly front_rail: LuaEntity | null
    readonly back_rail: LuaEntity | null
    readonly rail_direction_from_front_rail: defines.rail_direction
    readonly rail_direction_from_back_rail: defines.rail_direction
    readonly front_stock: LuaEntity | null
    readonly back_stock: LuaEntity | null
    readonly station: LuaEntity | null
    readonly has_path: boolean
    readonly path_end_rail: LuaEntity | null
    readonly path_end_stop: LuaEntity | null
    readonly id: number
    readonly passengers: LuaPlayer[]
    readonly riding_state: RidingState
    readonly killed_players: {[key: number]: number}
    readonly kill_count: number
    readonly path: LuaRailPath | null
    readonly signal: LuaEntity | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaRailPath {
    readonly size: number
    readonly current: number
    readonly total_distance: number
    readonly travelled_distance: number
    readonly rails: {[key: number]: LuaEntity }
    readonly valid: boolean
    help(this: void): string
}

interface LuaBurnerPrototype {
    readonly emissions: number
    readonly render_no_network_icon: boolean
    readonly render_no_power_icon: boolean
    readonly effectivity: number
    readonly fuel_inventory_size: number
    readonly burnt_inventory_size: number
    readonly smoke: SmokeSource[]
    readonly light_flicker: {
        minimum_intensity: number,
        maximum_intensity: number,
        derivation_change_frequency: number,
        derivation_change_deviation: number,
        border_fix_speed: number,
        minimum_light_size: number,
        light_intensity_to_size_coefficient: number,
        color: Color,
    }
    readonly fuel_categories: {[key: string]: boolean}
    readonly valid: boolean
    help(this: void): string
}

interface LuaElectricEnergySourcePrototype {
    readonly buffer_capacity: number
    readonly usage_priority: string
    readonly input_flow_limit: number
    readonly output_flow_limit: number
    readonly drain: number
    readonly emissions: number
    readonly render_no_network_icon: boolean
    readonly render_no_power_icon: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaFluidBoxPrototype {
    readonly entity: LuaEntityPrototype
    readonly index: number
    readonly pipe_connections: FluidBoxConnection[]
    readonly production_type: 'input' | 'output' | 'input-output' | 'none'
    readonly base_area: number
    readonly base_level: number
    readonly height: number
    readonly volume: number
    readonly filter: LuaFluidPrototype | null
    readonly minimum_temperature: number | null
    readonly maximum_temperature: number | null
    readonly secondary_draw_orders: number[]
    readonly render_layer: string
    readonly valid: boolean
    help(this: void): string
}

interface LuaEntityPrototype {
    has_flag(this: void, flag: EntityPrototypeFlagValue): boolean
    get_inventory_size(this: void, index: defines.inventory): number
    readonly type: string
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly max_health: number
    readonly infinite_resource: boolean | null
    readonly minimum_resource_amount: number | null
    readonly normal_resource_amount: number | null
    readonly infinite_resource_depletion_amount: number | null
    readonly resource_category: 'basic_solid' | 'basic_fluid' | null
    readonly category: 'basic_solid' | 'basic_fluid' | null // prototype stage
    readonly mineable_properties: {
        mineable: boolean,
        mining_time: number,
        mining_particle?: string,
        products?: Product[]
        fluid_amount?: number
        required_fluid?: string
        mining_trigger?: Trigger,
    }
    readonly items_to_place_this: SimpleItemStack[] | null
    readonly collision_box: BoundingBox
    readonly secondary_collision_box: BoundingBox | null
    readonly map_generator_bounding_box: BoundingBox
    readonly selection_box: BoundingBox
    readonly drawing_box: BoundingBox
    readonly sticker_box: BoundingBox
    readonly collision_mask: CollisionMask
    readonly order: string
    readonly group: LuaGroup
    readonly healing_per_tick: number
    readonly emissions_per_second: number
    readonly corpses: {[key: string]: LuaEntityPrototype }
    readonly selectable_in_game: boolean
    readonly selection_priority: number
    readonly weight: number | null
    readonly resistances: Resistances
    readonly fast_replaceable_group: string | null
    readonly next_upgrade: LuaEntityPrototype | null
    readonly loot: LootItem[] | null
    readonly repair_speed_modifier: number
    readonly turret_range: number
    readonly autoplace_specification: AutoplaceSpecification
    readonly belt_speed: number | null
    readonly result_units: Array<{
        unit: string,
        spawn_points: Array<{
            evolution_factor: number,
            weight: number,
        }>,
    }>
    readonly attack_result: Trigger | null
    readonly final_attack_result: Trigger | null
    readonly attack_parameters: {
        range: number,
        min_range: number,
        turn_range: number,
        fire_penalty: number,
        min_attack_distance: number,
        damage_modifier: number,
        ammo_consumption_modifier: number,
        cooldown: number,
        warmup: number,
        movement_slow_down_factor: number,
        movement_slow_down_cooldown: number,
    } | null
    readonly spawn_cooldown: {
        min: number,
        max: number,
    } | null
    readonly mining_drill_radius: number | null
    readonly mining_speed: number | null
    readonly logistic_mode: string | null
    readonly max_underground_distance: number | null
    readonly flags: EntityPrototypeFlags
    readonly remains_when_mined: LuaEntityPrototype[]
    readonly allow_copy_paste: boolean
    readonly shooting_cursor_size: number
    // documentation doesn't specify what the table should contain
    readonly created_smoke: {} | null
    readonly created_effect: Trigger | null
    readonly map_color: Color | null
    readonly friendly_map_color: Color
    readonly enemy_map_color: Color
    readonly build_base_evolution_requirement: number
    readonly instruments: ProgrammableSpeakerInstrument | null
    readonly max_polyphony: number | null
    readonly module_inventory_size: number | null
    readonly ingredient_count: number | null
    readonly crafting_speed: number | null
    readonly crafting_categories: {[key: string]: boolean }
    readonly resource_categories: {[key: string]: boolean } | null
    readonly supply_area_distance: number | null
    readonly max_wire_distance: number
    readonly max_circuit_wire_distance: number
    readonly energy_usage: number | null
    readonly max_energy_usage: number
    readonly effectivity: number | null
    readonly consumption: number | null
    readonly friction_force: number | null
    readonly braking_force: number | null
    readonly tank_driving: boolean | null
    readonly rotation_speed: number | null
    readonly turret_rotation_speed: number | null
    readonly guns: {[key: string]: LuaItemPrototype } | null
    readonly speed: number | null
    readonly speed_multiplier_when_out_of_energy: number | null
    readonly max_payload_size: number | null
    readonly draw_cargo: boolean | null
    readonly energy_per_move: number | null
    readonly energy_per_tick: number | null
    readonly max_energy: number | null
    readonly min_to_charge: number | null
    readonly max_to_charge: number | null
    readonly burner_prototype: LuaBurnerPrototype | null
    readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype | null
    readonly building_grid_bit_shift: number
    readonly fluid_usage_per_tick: number | null
    readonly maximum_temperature: number | null
    readonly target_temperature: number | null
    readonly fluid: LuaFluidPrototype | null
    readonly fluid_capacity: number
    readonly pumping_speed: number | null
    readonly stack: boolean
    readonly allow_custom_vectors: boolean
    readonly inserter_extension_speed: number | null
    readonly inserter_rotation_speed: number | null
    readonly count_as_rock_for_filtered_deconstruction: boolean
    readonly filter_count: number | null
    readonly production: number | null
    readonly time_to_live: number
    readonly distribution_effectivity: number | null
    readonly explosion_beam: number | null
    readonly explosion_rotate: number | null
    readonly tree_color_count: number | null
    readonly alert_when_damaged: boolean | null
    readonly alert_when_attacking: boolean | null
    readonly color: Color | null
    readonly collision_mask_collides_with_itself: boolean
    readonly collision_mask_collides_with_tiles_only: boolean
    readonly collision_mask_considers_tile_transitions: boolean
    readonly allowed_effects: {[key: string]: boolean} | null
    readonly rocket_parts_required: number | null
    readonly fixed_recipe: string | null
    readonly construction_radius: number | null
    readonly logistic_radius: number | null
    readonly energy_per_hit_point: number | null
    readonly create_ghost_on_death: boolean
    readonly timeout: number
    readonly fluidbox_prototypes: LuaFluidBoxPrototype[]
    readonly neighbour_bonus: number
    readonly neighbour_collision_increase: number
    readonly container_distance: number
    readonly belt_distance: number
    readonly belt_length: number
    readonly is_building: boolean
    readonly automated_ammo_count: number | null
    readonly max_speed: number | null
    readonly darkness_for_all_lamps_on: number | null
    readonly darkness_for_all_lamps_off: number | null
    readonly always_on: boolean | null
    readonly min_darkness_to_spawn: number
    readonly max_darkness_to_spawn: number
    readonly radius: number
    readonly cliff_explosive_prototype: string | null
    readonly has_belt_immunity: boolean | null
    readonly vision_distance: number | null
    readonly pollution_to_join_attack: number | null
    readonly min_pursue_time: number | null
    readonly max_pursue_distance: number | null
    readonly radar_range: number | null
    readonly move_while_shooting: boolean | null
    readonly can_open_gates: boolean | null
    readonly affected_by_tiles: boolean | null
    readonly distraction_cooldown: number | null
    readonly spawning_time_modifier: number | null
    readonly alert_icon_shift: Vector
    readonly lab_inputs: string[] | null
    readonly researching_speed: number | null
    readonly item_slot_count: number | null
    readonly base_productivity: number | null
    readonly allow_access_to_all_forces: boolean
    readonly supports_direction: boolean
    readonly terrain_friction_modifier: number
    readonly running_speed: number
    readonly maximum_corner_sliding_distance: number
    readonly build_distance: number
    readonly drop_item_distance: number
    readonly reach_distance: number
    readonly reach_resource_distance: number
    readonly item_pickup_distance: number
    readonly loot_pickup_distance: number
    readonly enter_vehicle_distance: number
    readonly ticks_to_keep_gun: number
    readonly ticks_to_keep_aiming_direction: number
    readonly ticks_to_stay_in_combat: number
    readonly respawn_time: number
    readonly damage_hit_tint: Color
    readonly character_corpse: LuaEntityPrototype
    readonly valid: boolean
    help(this: void): string
}

interface LuaGui {
    is_valid_sprite_path(this: void, sprite_path: SpritePath): boolean
    readonly player: LuaPlayer
    readonly children: {[key: string]: LuaGuiElement }
    readonly top: LuaGuiElement
    readonly left: LuaGuiElement
    readonly center: LuaGuiElement
    readonly goal: LuaGuiElement
    readonly screen: LuaGuiElement
    readonly valid: boolean
    help(this: void): string
}

interface LuaPlayer extends LuaControl {
    set_ending_screen_data(this: void, message: LocalisedString, file?: string): void
    print(this: void, message: LocalisedString, color?: Color): void
    clear_console(this: void): void
    get_goal_description(this: void): LocalisedString
    set_goal_description(this: void, text?: LocalisedString, only_update?: boolean): void
    set_controller(
        this: void,
        table: {
            type: defines.controllers,
            character?: LuaEntity,
            waypoints?: Array<{
                position?: Position,
                target?: LuaEntity | LuaUnitGroup,
                transition_time: number,
                time_to_wait: number,
                zoom?: number,
                chart_mode_cutoff?: number,
            }>,
            final_transition_time?: number,
        },
    ): void
    disable_recipe_groups(this: void): void
    enable_recipe_groups(this: void): void
    disable_recipe_subgroups(this: void): void
    enable_recipe_subgroups(this: void): void
    print_entity_statistics(this: void, entities?: string[]): void
    print_robot_jobs(this: void): void
    print_lua_object_statistics(this: void): void
    unlock_achievement(this: void, name: string): void
    clean_cursor(this: void): boolean
    create_character(this: void, character?: string): boolean
    add_alert(this: void, entity: LuaEntity, type: defines.alert_type): void
    add_custom_alert(
        this: void,
        entity: LuaEntity,
        icon: SignalID,
        message: LocalisedString,
        show_on_map: boolean): void
    remove_alert(
        this: void,
        table: {
            entity?: LuaEntity,
            prototype?: LuaEntityPrototype,
            position?: Position,
            type?: defines.alert_type,
            surface?: SurfaceSpecification,
            icon?: SignalID,
            message?: LocalisedString,
    }): void
    get_alerts(
        this: void,
        table: {
            entity?: LuaEntity,
            prototype?: LuaEntityPrototype,
            position?: Position,
            type?: defines.alert_type,
            surface?: SurfaceSpecification,
        },
    ): {
        [key: number]: {
            [key in defines.alert_type]: Array<{
                target?: LuaEntity,
                prototype?: LuaEntityPrototype,
                position?: Position,
                tick: number,
                icon?: SignalID,
                message?: LocalisedString,
            }>
        },
    }
    mute_alert(this: void, alert_type: defines.alert_type): boolean
    unmute_alert(this: void, alert_type: defines.alert_type): boolean
    is_alert_muted(this: void, alert_type: defines.alert_type): boolean
    enable_alert(this: void, alert_type: defines.alert_type): boolean
    disable_alert(this: void, alert_type: defines.alert_type): boolean
    is_alert_enabled(this: void, alert_type: defines.alert_type): boolean
    pipette_entity(this: void, entity: string | LuaEntity | LuaEntityPrototype): boolean
    can_place_entity(
        this: void,
        table: {
            name: string,
            position: Position,
            direction?: defines.direction,
        }): boolean
    can_build_from_cursor(
        this: void,
        table: {
            position: Position,
            direction: defines.direction,
            alt?: boolean,
            terrain_building_size?: number,
            skip_fog_of_war?: boolean,
        }): boolean
    build_from_cursor(
        this: void,
        table: {
            position: Position,
            direction: defines.direction,
            alt?: boolean,
            terrain_building_size?: number,
            skip_fog_of_war?: boolean,
        }): boolean
    use_from_cursor(this: void, position: Position): void
    play_sound(
        this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
        }): boolean
    get_associated_characters(this: void): LuaEntity[]
    associate_character(this: void, character: LuaEntity): void
    disassociate_character(this: void, character: LuaEntity): void
    create_local_flying_text(
        this: void,
        table: {
            text: LocalisedString,
            position: Position,
            color?: Color,
            time_to_live?: number,
            speed?: number,
        }): void
    get_quick_bar_slot(this: void, index: number): LuaItemPrototype
    set_quick_bar_slot(this: void, index: number, filter: string | LuaItemPrototype | LuaItemStack | null): void
    get_active_quick_bar_page(this: void, index: number): number
    set_active_quick_bar_page(this: void, screen_index: number, page_index: number): void
    jump_to_cutscene_waypoint(this: void, waypoint_index: number): void
    exit_cutscene(this: void): void
    open_map(this: void, position: Position, scale?: number): void
    zoom_to_world(this: void, position: Position, scale?: number): void
    close_map(this: void): void
    is_shortcut_toggled(this: void, prototype_name: string): boolean
    is_shortcut_available(this: void, prototype_name: string): boolean
    set_shortcut_toggled(this: void, prototype_name: string, toggled: boolean): void
    set_shortcut_available(this: void, prototype_name: string, available: boolean): void
    connect_to_server(
        this: void,
        table: {
            address: string,
            name?: LocalisedString,
            description?: LocalisedString,
            password?: string,
        },
    ): void
    character: LuaEntity | null
    readonly index: number
    readonly gui: LuaGui
    readonly opened_self: boolean
    readonly controller_type: defines.controllers
    game_view_settings: GameViewSettings
    minimap_enabled: boolean
    color: Color
    chat_color: Color
    name: string
    tag: string
    readonly connected: boolean
    admin: boolean
    readonly entity_copy_source: LuaEntity | null
    readonly afk_time: number
    readonly online_time: number
    readonly last_online: number
    permission_group: LuaPermissionGroup
    // Documentation doesn't say what the type of this property is
    readonly mod_settings: {}
    ticks_to_respawn: number | null
    readonly display_resolution: DisplayResolution
    readonly display_scale: number
    readonly blueprint_to_setup: LuaItemStack
    readonly render_mode: defines.render_mode
    readonly spectator: boolean
    zoom: number
    map_view_settings: MapViewSettings
    readonly valid: boolean
    help(this: void): string
}

interface LuaChunkIterator {
    [key: number]: ChunkPosition
    readonly valid: boolean
    help(this: void): string
}

interface LuaSurface {
    get_pollution(this: void, position: Position): number
    can_place_entity(
        this: void,
        table: {
            name: string,
            position: Position,
            direction: defines.direction,
            force?: ForceSpecification,
            build_check_type?: defines.build_check_type,
            forced?: boolean,
        },
    ): boolean
    can_fast_replace(
        this: void,
        table: {
            name: string,
            position: Position,
            direction?: defines.direction,
            force?: ForceSpecification,
        },
    ): boolean
    find_entity(this: void, entity: string, position: Position): LuaEntity | null
    find_entities(this: void, area: BoundingBox): LuaEntity[]
    find_entities_filtered(
        this: void,
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
            force?: ForceSpecification | ForceSpecification[],
            limit?: number,
            invert?: boolean,
        }): LuaEntity[]
    find_tiles_filtered(
        this: void,
        table: {
            area?: BoundingBox,
            position?: Position,
            radius?: number,
            name?: string | string[],
            limit?: number,
            has_hidden_tile?: boolean,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
        }): LuaTile[]
    count_entities_filtered(
        this: void,
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
            force?: ForceSpecification | ForceSpecification[],
            limit?: number,
            invert?: boolean,
        }): number
    count_tiles_filtered(
        this: void,
        table: {
            area?: BoundingBox,
            position?: Position,
            radius?: number,
            name?: string | string[],
            limit?: number,
            has_hidden_tile?: boolean,
            collision_mask?: CollisionMaskLayer | CollisionMaskLayer[],
        }): number
    find_non_colliding_position(
        this: void,
        table: {
            name: string,
            center: Position,
            precision: number,
            force_to_tile_center?: boolean,
        },
    ): Position
    find_non_colliding_position_in_box(
        this: void,
        table: {
            name: string,
            search_space: BoundingBox,
            precision: number,
            force_to_tile_center?: boolean,
        },
    ): Position
    spill_item_stack(
        this: void,
        table: {
            position: Position,
            items: ItemStackSpecification,
            enable_looted?: boolean,
            force?: LuaForce | string,
            allow_belts?: boolean,
        },
    ): void
    find_enemy_units(this: void, center: Position, radius: number, force?: LuaForce | string): LuaEntity[]
    find_units(
        this: void,
        table: {
            area: BoundingBox,
            force: LuaForce | string,
            condition: ForceCondition,
        },
    ): LuaEntity[]
    find_nearest_enemy(
        this: void,
        table: {
            position: Position,
            max_distance: number,
            force?: ForceSpecification,
        },
    ): LuaEntity
    set_multi_command(
        this: void,
        table: {
            command: Command,
            unit_count: number,
            force?: ForceSpecification,
            unit_search_distance?: number,
        },
    ): number
    create_entity(this: void, values: CreateEntityParams): LuaEntity | null
    create_trivial_smoke(this: void, table: {name: string, position: Position}): void
    create_unit_group(this: void, table: {position: Position, force?: ForceSpecification}): LuaUnitGroup
    build_enemy_base(this: void, position: Position, unit_count: number, force?: ForceSpecification): void
    get_tile(this: void, x: number, y: number): LuaTile
    set_tiles(this: void, tiles: Array<{name: string, position: Position}>, correct_tiles?: boolean): void
    pollute(this: void, source: Position, amount: number): void
    get_chunks(this: void): LuaChunkIterator
    is_chunk_generated(this: void, position: ChunkPosition): boolean
    request_to_generate_chunks(this: void, position: Position, radius: number): void
    force_generate_chunk_requests(this: void): void
    set_chunk_generated_status(this: void, position: ChunkPosition, status: defines.chunk_generated_status): void
    find_logistic_network_by_position(
        this: void,
        position: Position,
        force: ForceSpecification,
    ): LuaLogisticNetwork | null
    find_logistic_networks_by_construction_area(
        this: void,
        position: Position,
        force: ForceSpecification,
    ): LuaLogisticNetwork[]
    deconstruct_area(
        this: void,
        table: {
            area: BoundingBox,
            force: ForceSpecification,
            player?: PlayerSpecification,
            skip_fog_of_war?: boolean,
            item?: LuaItemStack,
        },
    ): void
    cancel_deconstruct_area(
        this: void,
        table: {
            area: BoundingBox,
            force: ForceSpecification,
            player?: PlayerSpecification,
            skip_fog_of_war?: boolean,
            item?: LuaItemStack,
        },
    ): void
    upgrade_area(
        this: void,
        table: {
            area: BoundingBox,
            force: ForceSpecification,
            player?: PlayerSpecification,
            skip_fog_of_war?: boolean,
            item?: LuaItemStack,
        },
    ): void
    cancel_upgrade_area(
        this: void,
        table: {
            area: BoundingBox,
            force: ForceSpecification,
            player?: PlayerSpecification,
            skip_fog_of_war?: boolean,
            item?: LuaItemStack,
        },
    ): void
    get_hidden_tile(this: void, position: TilePosition): string
    set_hidden_tile(this: void, position: Position, tile: string | LuaTilePrototype): void
    get_connected_tiles(this: void, position: Position, tiles: string[]): Position[]
    delete_chunk(this: void, position: ChunkPosition): void
    regenerate_entity(this: void, entities?: string | string[], chunks?: ChunkPosition[]): void
    regenerate_decorative(this: void, decoratives?: string | string[], chunks?: ChunkPosition[]): void
    print(this: void, message: LocalisedString, color?: Color): void
    destroy_decoratives(
        this: void,
        table: {
            area?: BoundingBox,
            position?: TilePosition,
            name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[],
            limit?: number,
            invert?: boolean,
        },
    ): void
    create_decoratives(
        this: void,
        table: {
            check_collision?: boolean,
            decoratives: Array<{
                name: string,
                position: Position,
                amount: number,
            }>,
        },
    ): void
    find_decoratives_filtered(
        this: void,
        table: {
            area?: BoundingBox,
            position?: TilePosition,
            name?: string | string[] | LuaDecorativePrototype | LuaDecorativePrototype[],
            limit?: number,
            invert?: boolean,
        },
    ): Array<{position: TilePosition, decorative: LuaDecorativePrototype, amount: number}>
    get_trains(this: void, force?: ForceSpecification): LuaTrain[]
    clear_pollution(this: void): void
    play_sound(this: void, table: {path: SoundPath, position?: Position, volume_modifier?: number}): boolean
    get_resource_counts(this: void): {[key: string]: number }
    get_random_chunk(this: void): ChunkPosition
    clone_area(
        this: void,
        table: {
            source_area: BoundingBox,
            destination_area: BoundingBox,
            destination_surface?: SurfaceSpecification,
            destination_force?: LuaForce | string,
            clone_tiles?: boolean,
            clone_entities?: boolean,
            clone_decoratives?: boolean,
            clear_destination?: boolean,
            expand_map?: boolean,
        },
    ): void
    clone_entities(
        this: void,
        table: {
            entities: LuaEntity[],
            destination_offset: Vector,
            destination_surface?: SurfaceSpecification,
            destination_force?: ForceSpecification,
            snap_to_grid?: boolean,
        },
    ): void
    clear(this: void, ignore_characters?: boolean): void
    request_path(
        this: void,
        table: {
            bounding_box: BoundingBox,
            collision_mask: CollisionMask | string[],
            start: Position,
            goal: Position,
            force: LuaForce | string,
            radius?: number,
            pathfind_flags?: PathFindFlags,
            can_open_gates?: boolean,
            path_resolution_modifier?: number,
            entity_to_ignore?: LuaEntity,
        },
    ): number
    get_script_areas(this: void, name?: string): ScriptArea[]
    get_script_positions(this: void, name?: string): ScriptPosition[]
    get_map_exchange_string(this: void): string
    get_starting_area_radius(this: void): number
    get_closest(this: void, position: Position, entities: LuaEntity[]): LuaEntity
    get_train_stops(this: void, opts: {name?: string | string[], force?: ForceSpecification}): LuaEntity[]
    get_total_pollution(this: void): number
    entity_prototype_collides(
        this: void,
        prototype: EntityPrototypeSpecification,
        position: Position,
        use_map_generation_bounding_box: boolean,
        direction?: defines.direction): void
    decorative_prototype_collides(this: void, prototype: string, position: Position): void
    calculate_tile_properties(this: void, property_names: string[], positions: Position[]): {[key: string]: number}
    name: string
    readonly index: number
    map_gen_settings: MapGenSettings
    always_day: boolean
    daytime: number
    readonly darkness: number
    wind_speed: number
    wind_orientation: number
    wind_orientation_change: number
    peaceful_mode: boolean
    freeze_daytime: boolean
    ticks_per_day: number
    dusk: number
    dawn: number
    evening: number
    morning: number
    solar_power_multiplier: number
    min_brightness: number
    readonly valid: boolean
    help(this: void): string
}

interface LuaInventory {
    clear(this: void): void
    can_insert(this: void, items: ItemStackSpecification): boolean
    insert(this: void, items: ItemStackSpecification): number
    remove(this: void, items: ItemStackSpecification): number
    get_item_count(this: void, name?: string): number
    is_empty(this: void): boolean
    get_contents(this: void): {[key: string]: number }
    hasbar(this: void): boolean
    getbar(this: void): number
    setbar(this: void, bar?: number): void
    supports_filters(this: void): boolean
    is_filtered(this: void): boolean
    can_set_filter(this: void, index: number, filter: string): boolean
    get_filter(this: void, index: number): string
    set_filter(this: void, index: number, filter: string): boolean
    find_item_stack(this: void, item: string): LuaItemStack | null
    sort_and_merge(this: void): void
    // operator # missing
    readonly index: number
    readonly entity_owner: LuaEntity | null
    readonly player_owner: LuaPlayer | null
    readonly equipment_owner: LuaEntity | null
    readonly [key: number]: LuaItemStack
    readonly valid: boolean
    help(this: void): string
}

interface LuaCustomChartTag {
    destroy(this: void): void
    icon: SignalID
    last_user: LuaPlayer
    readonly position: Position
    text: string
    readonly tag_number: number
    readonly force: LuaForce
    readonly surface: LuaSurface
    readonly valid: boolean
    help(this: void): string
}

interface LuaForce {
    get_entity_count(this: void, name: string): number
    disable_research(this: void): void
    disable_all_prototypes(this: void): void
    enable_all_prototypes(this: void): void
    reset_recipes(this: void): void
    enable_all_recipes(this: void): void
    enable_all_technologies(this: void): void
    research_all_technologies(this: void, include_disabled_prototypes: boolean): void
    reset_technologies(this: void): void
    reset(this: void): void
    reset_technology_effects(this: void): void
    chart(this: void, surface: SurfaceSpecification, area: BoundingBox): void
    clear_chart(this: void, surface: SurfaceSpecification): void
    rechart(this: void): void
    chart_all(this: void, surface?: SurfaceSpecification): void
    is_chunk_charted(this: void, surface: SurfaceSpecification, position: ChunkPosition): boolean
    is_chunk_visible(this: void, surface: SurfaceSpecification, position: ChunkPosition): boolean
    cancel_charting(this: void, surface?: SurfaceSpecification): void
    get_ammo_damage_modifier(this: void, ammo: string): number
    set_ammo_damage_modifier(this: void, ammo: string, modifier: number): void
    get_gun_speed_modifier(this: void, ammo: string): number
    set_gun_speed_modifier(this: void, ammo: string, modifier: number): void
    get_turret_attack_modifier(this: void, turret: string): number
    set_turret_attack_modifier(this: void, turret: string, modifier: number): void
    set_cease_fire(this: void, other: ForceSpecification, cease_fire: boolean): void
    get_cease_fire(this: void, other: ForceSpecification): boolean
    set_friend(this: void, other: ForceSpecification, cease_fire: boolean): void
    get_friend(this: void, other: ForceSpecification): boolean
    is_pathfinder_busy(this: void): boolean
    kill_all_units(this: void): void
    find_logistic_network_by_position(
        this: void,
        position: Position,
        surface: SurfaceSpecification,
    ): LuaLogisticNetwork | null
    set_spawn_position(this: void, position: Position, surface: SurfaceSpecification): void
    get_spawn_position(this: void, surface: SurfaceSpecification): Position
    unchart_chunk(this: void, position: ChunkPosition, surface: SurfaceSpecification): void
    get_item_launched(this: void, item: string): number
    set_item_launched(this: void, item: string, count: number): void
    print(this: void, message: LocalisedString, color?: Color): void
    get_trains(this: void, surface?: SurfaceSpecification): LuaTrain[]
    add_chart_tag(
        this: void,
        surface: SurfaceSpecification,
        tag: {
            icon?: SignalID,
            position: Position,
            text?: string,
            last_user?: PlayerSpecification,
        },
    ): LuaCustomChartTag
    find_chart_tags(this: void, surface: SurfaceSpecification, area?: BoundingBox): LuaCustomChartTag[]
    get_saved_technology_progress(this: void, technology: TechnologySpecification): number
    set_saved_technology_progress(this: void, technology: TechnologySpecification, progress: number | null): void
    reset_evolution(this: void): void
    play_sound(
        this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
        },
    ): boolean
    get_train_stops(this: void, opts?: {name?: string | string[], surface?: SurfaceSpecification}): LuaEntity[]
    get_hand_crafting_disabled_for_recipe(recipe: string | LuaRecipe): boolean
    set_hand_crafting_disabled_for_recipe(recipe: string | LuaRecipe, hand_crafting_disabled: boolean): void
    add_research(this: void, technology: TechnologySpecification): boolean
    cancel_current_research(this: void): void
    readonly name: string
    readonly technologies: {[key: string]: LuaTechnology }
    readonly recipes: {[key: string]: LuaRecipe }
    manual_mining_speed_modifier: number
    manual_crafting_speed_modifier: number
    laboratory_speed_modifier: number
    laboratory_productivity_bonus: number
    worker_robots_speed_modifier: number
    worker_robots_batter_modifier: number
    worker_robots_storage_bonus: number
    readonly current_research: LuaTechnology
    research_progress: number
    previous_research: number
    inserter_stack_size_bonus: number
    stack_inserter_capacity_bonus: number
    character_logistic_slot_count: number
    character_trash_slot_count: number
    maximum_following_robot_count: number
    following_robots_lifetime_modifier: number
    ghost_time_to_live: number
    readonly players: LuaPlayer[]
    ai_controllable: boolean
    readonly logistics_networks: {[key: string]: LuaLogisticNetwork[]}
    readonly item_production_statistics: LuaFlowStatistics
    readonly fluid_production_statistics: LuaFlowStatistics
    readonly kill_count_statistics: LuaFlowStatistics
    readonly entity_build_count_statistics: LuaFlowStatistics
    character_running_speed_modifier: number
    artillery_range_modifier: number
    character_build_distance_bonus: number
    character_item_drop_distance_bonus: number
    character_reach_distance_bonus: number
    character_resource_reach_distance_bonus: number
    character_item_pickup_distance_bonus: number
    character_loot_pickup_distance_bonus: number
    character_inventory_slots_bonus: number
    deconstruction_time_to_live: number
    character_health_bonus: number
    max_successful_attempts_per_tick_per_construction_queue: number
    max_failed_attempts_per_tick_per_construction_queue: number
    auto_character_trash_slots: number
    zoom_to_world_enabled: boolean
    zoom_to_world_ghost_building_enabled: boolean
    zoom_to_world_blueprint_enabled: boolean
    zoom_to_world_deconstruction_planner_enabled: boolean
    zoom_to_world_selection_tool_enabled: boolean
    rockets_launched: number
    readonly items_launched: {[key: string]: number }
    readonly connected_players: LuaPlayer[]
    mining_drill_productivity_bonus: number
    train_braking_force_bonus: number
    evolution_factor: number
    evolution_factor_by_pollution: number
    evolution_factor_by_time: number
    evolution_factor_by_killing_spawners: number
    friendly_fire: boolean
    share_chart: boolean
    research_queue_enabled: boolean
    readonly index: number
    research_queue: TechnologySpecification[]
    readonly valid: boolean
    help(this: void): string
}

interface LuaItemPrototype {
    has_flag(this: void, flag: 'hidden' | 'hide-from-bonus-gui' | 'hide-from-fuel-tooltip'): boolean
    get_ammo_type(this: void, ammo_source_type?: 'default' | 'turret' | 'player' | 'vehicle'): AmmoType
    readonly type: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly order: string
    readonly place_result: LuaEntityPrototype
    readonly place_as_equipment_result: LuaEquipmentPrototype
    readonly place_as_tile_result: PlaceAsTileResult
    readonly stackable: boolean
    readonly default_request_amount: number
    readonly stack_size: number
    readonly wire_count: number
    readonly fuel_category: string
    readonly burnt_result: LuaItemPrototype
    readonly fuel_value: number
    readonly fuel_acceleration_multiplier: number
    readonly fuel_top_speed_modifier: number
    readonly fuel_emissions_multiplier: number
    readonly subgroup: LuaGroup
    readonly group: LuaGroup
    readonly flags: {[key in 'hidden']: true}
    readonly rocket_launch_products: Product[]
    readonly can_be_mod_opened: boolean
    readonly magazine_size: number
    readonly reload_time: number
    readonly equipment_grid: LuaEquipmentGridPrototype
    readonly resistances: Resistances
    readonly inventory_size_bonus: number
    readonly capsule_action: CapsuleAction
    readonly robot_action: Trigger
    readonly attack_paramters: AttackParameters
    readonly inventory_size: number
    readonly item_filters: {[key: string]: LuaItemPrototype }
    readonly item_group_filters: {[key: string]: LuaGroup }
    readonly item_subgroup_filters: {[key: string]: LuaGroup }
    readonly filter_mode: string
    readonly insertion_priority_mode: string
    readonly localised_filter_message: LocalisedString
    readonly extend_inventory_by_default: boolean
    readonly default_label_color: Color | null
    readonly draw_label_for_cursor_render: boolean
    readonly speed: number | null
    readonly module_effects: Effects | null
    readonly category: string
    readonly tier: number
    readonly limitations: string[]
    readonly limitation_message_key: string
    readonly straight_rail: LuaEntityPrototype
    readonly curved_rail: LuaEntityPrototype
    readonly repair_result: Trigger | null
    readonly selection_border_color: Color
    readonly alt_selection_border_color: Color
    readonly selection_mode_flags: SelectionModeFlags
    readonly alt_selection_mode_flags: SelectionModeFlags
    readonly selection_cursor_box_type: string
    readonly alt_selection_cursor_box_type: string
    readonly always_include_tiles: boolean
    readonly show_in_library: boolean | null
    readonly entity_filter_mode: string | null
    readonly alt_entity_filter_mode: string | null
    readonly tile_filter_mode: string
    readonly alt_tile_filter_mode: string
    readonly entity_filters: {[key: string]: LuaEntityPrototype }
    readonly alt_entity_filters: {[key: string]: LuaEntityPrototype }
    readonly entity_type_filters: {[key: string]: boolean}
    readonly alt_entity_type_filters: {[key: string]: boolean}
    readonly tile_filters: {[key: string]: LuaTilePrototype}
    readonly alt_tile_filters: {[key: string]: LuaTilePrototype}
    readonly entity_filter_slots: number
    readonly tile_filter_slots: number
    readonly durability_description_key: string
    readonly durability: number | null
    readonly infinite: boolean | null
    readonly mapper_count: number | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaRecipe {
    reload(this: void): void
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly prototype: LuaRecipePrototype
    readonly enabled: boolean
    readonly category: string
    readonly ingredients: Ingredient[]
    readonly products: Product[]
    readonly hidden: boolean
    readonly hidden_from_flow_stats: boolean
    readonly energy: number
    readonly order: string
    readonly group: LuaGroup
    readonly subgroup: LuaGroup
    readonly force: LuaForce
    readonly valid: boolean
    help(this: void): string
}

interface LuaRecipePrototype {
    readonly enabled: boolean
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly category: string
    readonly ingredients: Ingredient[]
    readonly products: Product[]
    readonly main_product: Product | null
    readonly hidden: boolean
    readonly hidden_from_flow_stats: boolean
    readonly always_show_made_in: boolean
    readonly energy: number
    readonly order: string
    readonly group: LuaGroup
    readonly subgroup: LuaGroup
    readonly request_paste_multiplier: number
    readonly overload_multiplier: number
    readonly allow_as_intermediate: boolean
    readonly allow_intermediates: boolean
    readonly show_amount_in_title: boolean
    readonly always_show_products: boolean
    readonly emissions_multiplier: number
    readonly allow_decomposition: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaTechnology {
    reload(this: void): void
    readonly force: LuaForce
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly prototype: LuaTechnologyPrototype
    readonly enabled: boolean
    readonly visible_when_disabled: boolean
    readonly upgrade: boolean
    researched: boolean
    readonly prerequisites: {[key: string]: LuaTechnology }
    readonly research_unit_ingredients: Ingredient[]
    readonly effects: Modifier[]
    readonly research_unit_count: number
    readonly research_unit_energy: number
    readonly order: string
    level: number
    readonly research_unit_count_formula: string | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaTechnologyPrototype {
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly enabled: boolean
    readonly hidden: boolean
    readonly visible_when_disabled: boolean
    readonly upgrade: boolean
    readonly prerequisites: {[key: string]: LuaTechnologyPrototype }
    readonly research_unit_ingredients: Ingredient[]
    readonly effects: Modifier[]
    readonly research_unit_count: number
    readonly research_unit_energy: number
    readonly order: string
    readonly level: number
    readonly max_level: number
    readonly research_unit_count_formula: string | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaEquipment {
    readonly name: string
    readonly type: string
    readonly position: Position
    readonly shape: {
        width: number,
        height: number,
    }
    shield: number
    readonly max_shield: number
    readonly max_solar_power: number
    readonly movement_bonus: number
    readonly generator_power: number
    energy: number
    readonly max_energy: number
    readonly prototype: LuaEquipmentPrototype
    readonly burner: LuaBurner | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaEquipmentPrototype {
    readonly name: string
    readonly type: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly shape: {
        width: number,
        height: number,
        points?: Array<{x: number, y: number}>,
    }
    readonly take_result: LuaItemPrototype | null
    readonly energy_production: number
    readonly shield: number
    readonly energy_per_shield: number
    readonly logistic_parameters: {
        spawn_and_station_height: number,
        charge_approach_distance: number,
        logistic_radius: number,
        construction_radius: number,
        charging_station_count: number,
        charging_distance: number,
        charging_station_shift: Vector,
        charging_energy: number,
        charging_threshold_distance: number,
        robot_vertical_acceleration: number,
        stationing_offset: Vector,
        robot_limit: number,
        logistics_connection_distance: number,
    }
    readonly energy_consumption: number
    readonly movement_bonus: number
    readonly night_vision_tint: Color
    readonly energy_source: LuaElectricEnergySourcePrototype
    readonly equipment_categories: string[]
    readonly burner_prototype: LuaBurnerPrototype
    readonly electric_energy_source_prototype: LuaElectricEnergySourcePrototype
    readonly background_color: Color
    readonly valid: boolean
    help(this: void): string
}

interface LuaModSettingPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly mod: string
    readonly setting_type: string
    readonly default_value: boolean | number | string
    readonly minimum_value: number | null
    readonly maximum_value: number | null
    readonly allowed_values: string[] | number[] | null
    readonly allow_blank: boolean | null
    readonly auto_trim: boolean | null
    readonly valid: boolean
    help(this: void): string
}

interface LuaAchievementPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly allowed_without_fight: boolean
    readonly hidden: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaFluidPrototype {
    readonly name: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly default_temperature: number
    readonly max_temperature: number
    readonly head_capacity: number
    readonly order: string
    readonly group: LuaGroup
    readonly subgroup: LuaGroup
    readonly base_color: Color
    readonly flow_color: Color
    readonly gas_temperature: number
    readonly emissions_multiplier: number
    readonly fuel_value: number
    readonly hidden: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaTilePrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly collision_mask: {[key: string]: true }
    readonly layer: number
    readonly autoplace_specification: AutoplaceSpecification
    readonly walking_speed_modifier: number
    readonly vehicle_friction_modifier: number
    readonly map_color: Color
    readonly decorative_removal_probability: number
    readonly automatic_neighbors: boolean
    readonly allow_neighbors: {[key: string]: LuaTilePrototype }
    readonly needs_correction: boolean
    readonly mineable_properties: {
        minable: boolean,
        miningtime: number,
        miningparticle?: string,
        products: Product[],
    }
    readonly next_direction: LuaTilePrototype | null
    readonly items_to_place_this: SimpleItemStack[]
    readonly can_be_part_of_blueprint: boolean
    readonly emissions_per_second: number
    readonly valid: boolean
    help(this: void): string
}

interface LuaDamagePrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly hidden: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaVirtualSignalPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly special: boolean
    readonly subgroup: LuaGroup
    readonly valid: boolean
    help(this: void): string
}

interface LuaEquipmentGrid {
    take(
        this: void,
        table: {position?: Position, equipment?: LuaEquipment}): SimpleItemStack | null
    take_all(this: void): {[key: string]: number }
    clear(this: void): void
    put(this: void, table: {name: string, position?: Position}): LuaEquipment | null
    can_move(this: void, table: {equipment: LuaEquipment, position: Position}): boolean
    move(this: void, table: {equipment: LuaEquipment, position: Position}): boolean
    get(this: void, position: Position): LuaEquipment | null
    get_contents(this: void): {[key: string]: number }
    readonly prototype: LuaEquipmentGridPrototype
    readonly width: number
    readonly height: number
    readonly equipment: LuaEquipment[]
    readonly generator_energy: number
    readonly max_solar_energy: number
    readonly available_in_batteries: number
    readonly battery_capacity: number
    readonly shield: number
    readonly max_shield: number
    readonly inhibit_movement_bonus: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaEquipmentGridPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly equipment_categories: string[]
    readonly width: number
    readonly height: number
    readonly locked: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaDecorativePrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly collision_box: BoundingBox
    readonly autoplace_specification: AutoplaceSpecification
    readonly valid: boolean
    help(this: void): string
}

interface LuaAutoplaceControlPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly richness: boolean
    readonly control_order: string
    readonly category: string
    readonly valid: boolean
    help(this: void): string
}

interface LuaNoiseLayerPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly valid: boolean
    help(this: void): string
}

interface LuaCustomInputPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly key_sequence: string
    readonly alternative_key_sequence: string
    readonly linked_game_control: string
    readonly consuming: 'none' | 'game-only'
    readonly enabled: boolean
    readonly valid: boolean
    help(this: void): string
}

interface LuaAmmoCategoryPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly bonus_gui_order: string
    readonly valid: boolean
    help(this: void): string
}

interface LuaNamedNoiseExpression {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly intended_property: string
    readonly expression: NoiseExpression
    readonly valid: boolean
    help(this: void): string
}

interface LuaGroup {
    readonly name: string
    readonly localised_name: LocalisedString
    readonly type: string
    readonly group: LuaGroup | null
    readonly subgroups: LuaGroup[]
    readonly order_in_recipe: string
    readonly order: string
    readonly valid: boolean
    help(this: void): string
}

interface LuaFuelCategoryPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly valid: boolean
    help(this: void): string
}

interface LuaResourceCategoryPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly valid: boolean
    help(this: void): string
}

interface LuaModuleCategoryPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly valid: boolean
    help(this: void): string
}

interface LuaEquipmentCategoryPrototype {
    readonly name: string
    readonly order: string
    readonly localised_name: LocalisedString
    readonly localised_description: LocalisedString
    readonly valid: boolean
    help(this: void): string
}

// ----

interface LuaTrivialSmokePrototype {
}

interface LuaShortcutPrototype {
}

interface LuaRecipeCategoryPrototype {
}

interface LuaItemStack {
}

interface LuaGuiElement {
}

interface LuaUnitGroup {
}

interface LuaLogisticNetwork {
}

interface LuaLogisticCell {
}

interface LuaRemote {
}

interface LuaCommandProcessor {
}

interface LuaRCON {
}

interface LuaRendering {
}
