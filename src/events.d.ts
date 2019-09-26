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
