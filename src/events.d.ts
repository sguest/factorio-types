interface event {
    name: defines.events
    tick: number
}

interface on_tick extends event {
}

interface on_ai_command_completed extends event {
    unit_number: number
    result: defines.behavior_result
}

interface on_area_cloned extends event {
    source_surface: LuaSurface
    source_area: BoundingBox
    destination_surface: LuaSurface
    destination_area: BoundingBox
    destination_force?: LuaForce
    clone_tiles: boolean
    clone_entities: boolean
    clone_decoratives: boolean
    clear_destination: boolean
}

interface on_biter_base_built extends event {
    entity: LuaEntity
}

interface on_build_base_arrived extends event {
    unit: LuaEntity | null
    group: LuaUnitGroup | null
}

interface on_built_entity extends event {
    created_entity: LuaEntity
    player_index: number
    stack: LuaItemStack
    item?: LuaItemPrototype
    tags?: Tags
}

interface on_cancelled_deconstruction extends event {
    entity: LuaEntity
    player_index?: number
}

interface on_cancelled_upgrade extends event {
    entity: LuaEntity
    player_index?: number
}

interface on_character_corpse_expired extends event {
    corpse: LuaEntity
}

interface on_chart_tag_added extends event {
    tag: LuaCustomChartTag
    force: LuaForce
    player_index?: number
}

interface on_chart_tag_modified extends event {
    tag: LuaCustomChartTag
    player_index?: number
    force: LuaForce
    old_text: string
    old_icon: SignalID
    old_player_index?: number
}

interface on_chart_tag_removed extends event {
    tag: LuaCustomChartTag
    force: LuaForce
    player_index?: number
}

interface on_chunk_charted extends event {
    surface_index: number
    position: ChunkPosition
    area: BoundingBox
    force: LuaForce
}

interface on_chunk_deleted extends event {
    surface_index: number
    positions: ChunkPosition[]
}

interface on_chunk_generated extends event {
    area: BoundingBox
    position: ChunkPosition
    surface: LuaSurface
}

interface on_combat_robot_expired extends event {
    robot: LuaEntity
    owner?: LuaEntity
}

interface on_console_chat extends event {
    player_index?: number
    message: string
}

interface on_console_command extends event {
    player_index?: number
    command: string
    parameters: string
}

interface on_cutscene_waypoint_reached extends event {
    player_index: number
    waypoint_index: number
}

interface on_difficulty_settings_changed extends event {
    old_recipe_difficulty: number
    old_technology_difficulty: number
}

interface on_entity_cloned extends event {
    source: LuaEntity
    destination: LuaEntity
}

interface on_entity_damaged extends event {
    entity: LuaEntity
    damage_type: LuaDamagePrototype
    original_damage_amount: number
    final_damage_amount: number
    cause?: LuaEntity
    force?: LuaForce
}

interface on_entity_died extends event {
    entity: LuaEntity
    cause?: LuaEntity
    loot: LuaInventory
    force?: LuaForce
}

interface on_entity_renamed extends event {
    player_index?: number
    by_script: boolean
    entity: LuaEntity
    old_name: string
}

interface on_entity_settings_pasted extends event {
    player_index: number
    source: LuaEntity
    destination: LuaEntity
}

interface on_entity_spawned extends event {
    spawner: LuaEntity
    entity: LuaEntity
}

interface on_force_cease_fire_changed extends event {
    force: LuaForce
    other_force: LuaForce
    added: boolean
}

interface on_force_created extends event {
    force: LuaForce
}

interface on_force_friends_changed extends event {
    force: LuaForce
    other_force: LuaForce
    added: boolean
}

interface on_forces_merged extends event {
    source_name: string
    source_index: number
    destination: LuaForce
}

interface on_forces_merging extends event {
    source: LuaForce
    destination: LuaForce
}

interface on_game_created_from_scenario extends event {
}

interface on_gui_checked_state_change extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_gui_click extends event {
    element: LuaGuiElement
    player_index: number
    button: defines.mouse_button_type
    alt: boolean
    control: boolean
    shift: boolean
}

interface on_gui_closed extends event {
    player_index: number
    gui_type: defines.gui_type
    entity?: LuaEntity
    item?: LuaItemStack
    equipment?: LuaEquipment
    other_player?: LuaPlayer
    element?: LuaGuiElement
    technology?: LuaTechnology
    tile_position?: TilePosition
}

interface on_gui_confirmed extends event {
    element: LuaGuiElement
    player_index: number
    alt: boolean
    control: boolean
    shift: boolean
}

interface on_gui_elem_changed extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_gui_location_changed extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_gui_opened extends event {
    player_index: number
    gui_type: defines.gui_type
    entity?: LuaEntity
    item?: LuaItemStack
    equipment?: LuaEquipment
    other_player?: LuaPlayer
    element?: LuaGuiElement
}

interface on_gui_selected_tab_changed extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_gui_selection_state_changed extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_gui_switch_state_changed extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_gui_text_changed extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_gui_value_changed extends event {
    element: LuaGuiElement
    player_index: number
}

interface on_land_mine_armed extends event {
    mine: LuaEntity
}

interface on_lua_shortcut extends event {
    player_index: number
    prototype_name: string
}

interface on_marked_for_deconstruction extends event {
    entity: LuaEntity
    player_index?: number
}

interface on_marked_for_upgrade extends event {
    entity: LuaEntity
    target: LuaEntityPrototype
    player_index?: number
}

interface on_market_item_purchased extends event {
    player_index: number
    market: LuaEntity
    offer_index: number
    count: number
}

interface on_mod_item_opened extends event {
    player_index: number
    item: LuaItemPrototype
}

interface on_picked_up_item extends event {
    item_stack: SimpleItemStack
    player_index: number
}

interface on_player_alt_selected_area extends event {
    player_index: number
    area: BoundingBox
    item: string
    entities: LuaEntity[]
    tiles: LuaTile[]
}

interface on_player_ammo_inventory_changed extends event {
    player_index: number
}

interface on_player_armor_inventory_changed extends event {
    player_index: number
}

interface on_player_banned extends event {
    player_index?: number
    player_name: string
    by_player?: number
    reason?: string
}

interface on_player_built_tile extends event {
    player_index: number
    surface_index: number
    tiles: OldTileAndPosition[]
    tile: LuaTilePrototype
    item?: LuaItemPrototype
    stack?: LuaItemStack
}

interface on_player_cancelled_crafting extends event {
    player_index: number
    items: LuaInventory
    recipe: LuaRecipe
    cancel_count: number
}

interface on_player_changed_force extends event {
    player_index: number
    force: LuaForce
}

interface on_player_changed_surface extends event {
    player_index: number
    surface_index: number
}

interface on_player_cheat_mode_disabled extends event {
    player_index: number
}

interface on_player_cheat_mode_enabled extends event {
    player_index: number
}

interface on_player_configured_blueprint extends event {
    player_index: number
}

interface on_player_crafted_item extends event {
    item_stack: LuaItemStack
    player_index: number
    recipe: LuaRecipe
}

interface on_player_created extends event {
    player_index: number
}

interface on_player_cursor_stack_changed extends event {
    player_index: number
}

interface on_player_deconstructed_area extends event {
    player_index: number
    area: BoundingBox
    item: string
    alt: boolean
}

interface on_player_demoted extends event {
    player_index: number
}

interface on_player_died extends event {
    player_index: number
    cause?: LuaEntity
}

interface on_player_display_resolution_changed extends event {
    player_index: number
    old_resolution: DisplayResolution
}

interface on_player_display_scale_changed extends event {
    player_index: number
    old_scale: number
}

interface on_player_driving_state_changed extends event {
    player_index: number
    entity?: LuaEntity
}

interface on_player_dropped_item extends event {
    player_index: number
    entity: LuaEntity
}

interface on_player_fast_transferred extends event {
    player_index: number
    entity: LuaEntity
    from_player: boolean
}

interface on_player_gun_inventory_changed extends event {
    player_index: number
}

interface on_player_joined_game extends event {
    player_index: number
}

interface on_player_kicked extends event {
    player_index: number
    by_player?: number
    reason?: string
}

interface on_player_left_game extends event {
    player_index: number
}

interface on_player_main_inventory_changed extends event {
    player_index: number
}

interface on_player_mined_entity extends event {
    player_index: number
    entity: LuaEntity
    buffer: LuaInventory
}

interface on_player_mined_item extends event {
    item_stack: SimpleItemStack
    player_index: number
}

interface on_player_mined_tile extends event {
    player_index: number
    surface_index: number
    tiles: OldTileAndPosition[]
}

interface on_player_muted extends event {
    player_index: number
}

interface on_player_pipette extends event {
    player_index: number
    item: LuaItemPrototype
    used_cheat_mode: boolean
}

interface on_player_placed_equipment extends event {
    player_index: number
    equipment: LuaEquipment
    grid: LuaEquipmentGrid
}

interface on_player_promoted extends event {
    player_index: number
}

interface on_player_removed extends event {
    player_index: number
}

interface on_player_removed_equipment extends event {
    player_index: number
    grid: LuaEquipmentGrid
    equipment: string
    count: number
}

interface on_player_repaired_entity extends event {
    player_index: number
    entity: LuaEntity
}

interface on_player_respawned extends event {
    player_index: number
    player_port?: LuaEntity
}

interface on_player_rotated_entity extends event {
    entity: LuaEntity
    previous_direction: defines.direction
    player_index: number
}

interface on_player_selected_area extends event {
    player_index: number
    area: BoundingBox
    item: string
    entities: LuaEntity[]
    tiles: LuaTile[]
}

interface on_player_setup_blueprint extends event {
    player_index: number
    area: BoundingBox
    item: string
    alt: boolean
    mapping: LuaLazyLoadedValue<{[key: number]: LuaEntity}>
}

interface on_player_toggled_alt_mode extends event {
    player_index: number
}

interface on_player_toggled_map_editor extends event {
    player_index: number
}

interface on_player_trash_inventory_changed extends event {
    player_index: number
}

interface on_player_unbanned extends event {
    player_index?: number
    player_name: string
    by_player?: number
    reason?: string
}

interface on_player_unmuted extends event {
    player_index: number
}

interface on_player_used_capsule extends event {
    player_index: number
    item: LuaItemPrototype
    position: Position
}

interface on_post_entity_died extends event {
    ghost?: LuaEntity
    force?: LuaForce
    position: Position
    prototype: LuaEntityPrototype
    corpses: LuaEntity[]
    surface_index: number
    unit_number?: number
}

interface on_pre_chunk_deleted extends event {
    surface_index: number
    positions: ChunkPosition[]
}

interface on_pre_entity_settings_pasted extends event {
    player_index: number
    source: LuaEntity
    destination: LuaEntity
}

interface on_pre_ghost_deconstructed extends event {
    player_index?: number
    ghost: LuaEntity
}

interface on_pre_player_crafted_item extends event {
    player_index: number
    recipe: LuaRecipe
    items: LuaInventory
}

interface on_pre_player_died extends event {
    player_index: number
    cause?: LuaEntity
}

interface on_pre_player_left_game extends event {
    player_index: number
}

interface on_pre_player_mined_item extends event {
    entity: LuaEntity
    player_index: number
}

interface on_pre_player_removed extends event {
    player_index: number
}

interface on_pre_robot_exploded_cliff extends event {
    robot: LuaEntity
    cliff: LuaEntity
    item: LuaItemPrototype
}

interface on_pre_surface_cleared extends event {
    surface_index: number
}

interface on_pre_surface_deleted extends event {
    surface_index: number
}

interface on_put_item extends event {
    position: Position
    player_index: number
    shift_building: boolean
    built_by_moving: boolean
    direction: defines.direction
}

interface on_research_finished extends event {
    research: LuaTechnology
    by_script: boolean
}

interface on_research_started extends event {
    research: LuaTechnology
    last_research?: LuaTechnology
}

interface on_resource_depleted extends event {
    entity: LuaEntity
}

interface on_robot_built_entity extends event {
    robot: LuaEntity
    created_entity: LuaEntity
    stack: LuaItemStack
    tags?: Tags
}

interface on_robot_built_tile extends event {
    robot: LuaEntity
    tiles: OldTileAndPosition[]
    tile: LuaTilePrototype
    item: LuaItemPrototype
    stack: LuaItemStack
    surface_index: number
}

interface on_robot_exploded_cliff extends event {
    robot: LuaEntity
    item: LuaItemPrototype
}

interface on_robot_mined extends event {
    robot: LuaEntity
    item_stack: SimpleItemStack
}

interface on_robot_mined_entity extends event {
    robot: LuaEntity
    entity: LuaEntity
    buffer: LuaInventory
}

interface on_robot_mined_tile extends event {
    robot: LuaEntity
    tiles: OldTileAndPosition[]
    surface_index: number
}

interface on_robot_pre_mined extends event {
    robot: LuaEntity
    entity: LuaEntity
}

interface on_rocket_launch_ordered extends event {
    rocket: LuaEntity
    rocket_silo: LuaEntity
    player_index?: number
}

interface on_rocket_launched extends event {
    rocket: LuaEntity
    rocket_silo: LuaEntity
    player_index?: number
}

interface on_runtime_mod_setting_changed extends event {
    player_index: number
    setting: string
    setting_type: 'runtime-per-user' | 'runtime-global'
}

interface on_script_path_request_finished extends event {
    path: Array<{position: Position, needs_destroy_to_reach: boolean}> | null
    id: number
    try_again_later: boolean
}

interface on_script_trigger_effect extends event {
    effect_id: string
    surface_index: number
    source_position?: Position
    source_entity?: LuaEntity
    target_position?: Position
    target_entity?: LuaEntity
}

interface on_sector_scanned extends event {
    radar: LuaEntity
    chunk_position: ChunkPosition
    area: BoundingBox
}

interface on_selected_entity_changed extends event {
    player_index: number
    last_entity?: LuaEntity
}

interface on_string_translated extends event {
    player_index: number
    localised_string: LocalisedString
    result: string
    translated: boolean
}

interface on_surface_cleared extends event {
    surface_index: number
}

interface on_surface_created extends event {
    surface_index: number
}

interface on_surface_deleted extends event {
    surface_index: number
}

interface on_surface_imported extends event {
    surface_index: number
    original_name: string
}

interface on_surface_renamed extends event {
    surface_index: number
    old_name: string
    new_name: string
}

interface on_technology_effect_reset extends event {
    force: LuaForce
}

interface on_train_state_changed extends event {
    train: LuaTrain
    old_state: defines.train_state
}

interface on_train_created extends event {
    train: LuaTrain
    old_train_id_1?: number
    old_train_id_2?: number
}

interface on_train_schedule_changed extends event {
    train: LuaTrain
    player_index?: number
}

interface on_trigger_created_entity extends event {
    entity: LuaEntity
    source?: LuaEntity
}

interface on_trigger_fired_artillery extends event {
    entity: LuaEntity
    source?: LuaEntity
}

interface on_unit_added_to_group extends event {
    unit: LuaEntity
    group: LuaUnitGroup
}

interface on_unit_group_created extends event {
    group: LuaUnitGroup
}

interface on_unit_group_finished_gathering extends event {
    group: LuaUnitGroup
}

interface on_unit_removed_from_group extends event {
    unit: LuaEntity
    group: LuaUnitGroup
}

interface script_raised_built extends event {
    entity: LuaEntity
}

interface script_raised_destroy extends event {
    entity: LuaEntity
}

interface script_raised_revive extends event {
    entity: LuaEntity
    tags?: Tags
}

type EventFilters = EventFilter[];

interface EventFilter {
    filter: string
    mode?: 'or' | 'and'
    invert?: boolean
}

interface StandardEntityEventFilter extends EventFilter {
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' |
        'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' |
        'circuit-network-connectable'
}

interface StandardEntityEventFilterTyped extends EventFilter {
    filter: 'type' | 'ghost_type'
    type: string
}

interface StandardEntityEventFilterNamed extends EventFilter {
    filter: 'name' | 'ghost_name'
    name: string
}

interface StandardEntityEventFilterForce extends EventFilter {
    filter: 'force'
    force: string
}
