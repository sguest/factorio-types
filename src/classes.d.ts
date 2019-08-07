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
    readonly named_noise_prototypes: {[key: string]: LuaNamedNoisePrototype }
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

// ----

interface LuaEntityPrototype {
}

interface LuaPlayer extends LuaControl {
    character?: LuaEntity
}

interface LuaSurface {
    create_entity(
        this: void,
        values: {
            name: string,
            position: Position,
            force: ForceSpecification,
        }): LuaEntity
}

interface LuaInventory {
    get_item_count(this: void, name?: string): number
}

interface LuaForce {
}

interface LuaItemPrototype {
    name: string
    icons: Icon[]
    icon: string
    resistances: Resistance[]
}

interface LuaRecipe {
}

interface LuaRecipePrototype {
    enabled: boolean
    name: string
    result: string
    ingredients: Ingredient[]
}

interface LuaTechnology {
}

interface LuaTechnologyPrototype {
}

interface LuaEquipment {
}

interface LuaEquipmentPrototype {
}

interface LuaModSettingPrototype {
}

interface LuaAchievementPrototype {
}

interface LuaFluidPrototype {
}

interface LuaTilePrototype {
}

interface LuaDamagePrototype {
}

interface LuaVirtualSignalPrototype {
}

interface LuaEquipmentGrid {
}

interface LuaEquipmentGridPrototype {
}

interface LuaDecorativePrototype {
}

interface LuaAutoplaceControlPrototype {
}

interface LuaNoiseLayerPrototype {
}

interface LuaCustomInputPrototype {
}

interface LuaAmmoCategoryPrototype {
}

interface LuaNamedNoisePrototype {
}

interface LuaGroup {
}

interface LuaFuelCategoryPrototype {
}

interface LuaResourceCategoryPrototype {
}

interface LuaModuleCategoryPrototype {
}

interface LuaEquipmentCategoryPrototype {
}

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
