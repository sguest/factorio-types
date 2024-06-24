// Factorio defines
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.109
// API version 5

declare namespace defines {
enum alert_type {
    custom = 0,
    entity_destroyed = 1,
    entity_under_attack = 2,
    no_material_for_construction = 3,
    no_storage = 4,
    not_enough_construction_robots = 5,
    not_enough_repair_packs = 6,
    train_out_of_fuel = 7,
    turret_fire = 8
}
/**
 * AI command exit status. See {@link LuaEntity::set_command | runtime:LuaEntity::set_command}
 */
enum behavior_result {
    deleted = 3,
    fail = 1,
    in_progress = 0,
    success = 2
}
enum build_check_type {
    blueprint_ghost = 4,
    ghost_revive = 5,
    manual = 1,
    manual_ghost = 2,
    script = 0,
    script_ghost = 3
}
/**
 * State of a chain signal.
 */
enum chain_signal_state {
    all_open = 1,
    none = 0,
    none_open = 3,
    partially_open = 2
}
enum chunk_generated_status {
    basic_tiles = 2,
    corrected_tiles = 3,
    custom_tiles = 1,
    entities = 5,
    nothing = 0,
    tiles = 4
}
enum circuit_condition_index {
    arithmetic_combinator = 3,
    constant_combinator = 5,
    decider_combinator = 4,
    inserter_circuit = 0,
    inserter_logistic = 1,
    lamp = 2,
    offshore_pump = 6,
    pump = 7
}
enum circuit_connector_id {
    accumulator = 0,
    combinator_input = 13,
    combinator_output = 14,
    constant_combinator = 1,
    container = 2,
    electric_pole = 10,
    inserter = 11,
    lamp = 12,
    linked_container = 3,
    offshore_pump = 15,
    programmable_speaker = 4,
    pump = 16,
    rail_chain_signal = 6,
    rail_signal = 5,
    roboport = 7,
    storage_tank = 8,
    wall = 9
}
/**
 * Command given to units describing what they should do.
 */
enum command {
    /**
     * Attack another entity.
     */
    attack = 0,
    /**
     * Go to a place and attack what you see.
     */
    attack_area = 4,
    /**
     * Go to a position and build a base there.
     */
    build_base = 8,
    /**
     * Chain commands together, see {@link defines.compound_command | runtime:defines.compound_command}.
     */
    compound = 2,
    /**
     * Flee from another entity.
     */
    flee = 6,
    /**
     * Go to a specific position.
     */
    go_to_location = 1,
    /**
     * Do what your group wants you to do.
     */
    group = 3,
    /**
     * Stop moving and stay where you are.
     */
    stop = 7,
    /**
     * Chill.
     */
    wander = 5
}
/**
 * How commands are joined together in a compound command (see {@link defines.command.compound | runtime:defines.command.compound}).
 */
enum compound_command {
    /**
     * Fail on first failure. Only succeeds if all commands (executed one after another) succeed.
     */
    logical_and = 0,
    /**
     * Succeed on first success. Only fails if all commands (executed one after another) fail.
     */
    logical_or = 1,
    /**
     * Execute all commands in sequence and fail or succeed depending on the return status of the last command.
     */
    return_last = 2
}
namespace control_behavior {
    namespace inserter {
        enum circuit_mode_of_operation {
            enable_disable = 1,
            none = 0,
            read_hand_contents = 3,
            set_filters = 2,
            set_stack_size = 4
        }
        enum hand_read_mode {
            hold = 0,
            pulse = 1
        }
    }
    namespace lamp {
        enum circuit_mode_of_operation {
            use_colors = 0
        }
    }
    namespace logistic_container {
        enum circuit_mode_of_operation {
            send_contents = 0,
            set_requests = 1
        }
    }
    namespace mining_drill {
        enum resource_read_mode {
            entire_patch = 1,
            this_miner = 0
        }
    }
    namespace transport_belt {
        enum content_read_mode {
            hold = 1,
            pulse = 0
        }
    }
    enum type {
        /**
         * {@link LuaAccumulatorControlBehavior | runtime:LuaAccumulatorControlBehavior}
         */
        accumulator = 12,
        /**
         * {@link LuaArithmeticCombinatorControlBehavior | runtime:LuaArithmeticCombinatorControlBehavior}
         */
        arithmetic_combinator = 9,
        /**
         * {@link LuaConstantCombinatorControlBehavior | runtime:LuaConstantCombinatorControlBehavior}
         */
        constant_combinator = 10,
        /**
         * {@link LuaContainerControlBehavior | runtime:LuaContainerControlBehavior}
         */
        container = 0,
        /**
         * {@link LuaDeciderCombinatorControlBehavior | runtime:LuaDeciderCombinatorControlBehavior}
         */
        decider_combinator = 8,
        /**
         * {@link LuaGenericOnOffControlBehavior | runtime:LuaGenericOnOffControlBehavior}
         */
        generic_on_off = 1,
        /**
         * {@link LuaInserterControlBehavior | runtime:LuaInserterControlBehavior}
         */
        inserter = 2,
        /**
         * {@link LuaLampControlBehavior | runtime:LuaLampControlBehavior}
         */
        lamp = 3,
        /**
         * {@link LuaLogisticContainerControlBehavior | runtime:LuaLogisticContainerControlBehavior}
         */
        logistic_container = 4,
        /**
         * {@link LuaMiningDrillControlBehavior | runtime:LuaMiningDrillControlBehavior}
         */
        mining_drill = 16,
        /**
         * {@link LuaProgrammableSpeakerControlBehavior | runtime:LuaProgrammableSpeakerControlBehavior}
         */
        programmable_speaker = 17,
        /**
         * {@link LuaRailChainSignalControlBehavior | runtime:LuaRailChainSignalControlBehavior}
         */
        rail_chain_signal = 14,
        /**
         * {@link LuaRailSignalControlBehavior | runtime:LuaRailSignalControlBehavior}
         */
        rail_signal = 13,
        /**
         * {@link LuaRoboportControlBehavior | runtime:LuaRoboportControlBehavior}
         */
        roboport = 5,
        /**
         * {@link LuaStorageTankControlBehavior | runtime:LuaStorageTankControlBehavior}
         */
        storage_tank = 6,
        /**
         * {@link LuaTrainStopControlBehavior | runtime:LuaTrainStopControlBehavior}
         */
        train_stop = 7,
        /**
         * {@link LuaTransportBeltControlBehavior | runtime:LuaTransportBeltControlBehavior}
         */
        transport_belt = 11,
        /**
         * {@link LuaWallControlBehavior | runtime:LuaWallControlBehavior}
         */
        wall = 15
    }
}
enum controllers {
    /**
     * The controller controls a character. This is the default controller in freeplay.
     */
    character = 1,
    /**
     * The player can't interact with the world, and the camera pans around in a predefined manner.
     */
    cutscene = 4,
    /**
     * The Editor Controller near ultimate power to do almost anything in the game.
     */
    editor = 3,
    /**
     * Can't interact with the world, can only observe. Used in the multiplayer waiting-to-respawn screen.
     */
    ghost = 0,
    /**
     * The controller isn't tied to a character. This is the default controller in sandbox.
     */
    god = 2,
    /**
     * Can't change anything in the world but can view anything.
     */
    spectator = 5
}
namespace deconstruction_item {
    enum entity_filter_mode {
        blacklist = 1,
        whitelist = 0
    }
    enum tile_filter_mode {
        blacklist = 1,
        whitelist = 0
    }
    enum tile_selection_mode {
        always = 1,
        never = 2,
        normal = 0,
        only = 3
    }
}
enum difficulty {
    easy = 0,
    hard = 2,
    normal = 1
}
namespace difficulty_settings {
    enum recipe_difficulty {
        expensive = 1,
        normal = 0
    }
    enum technology_difficulty {
        expensive = 1,
        normal = 0
    }
}
enum direction {
    east = 2,
    north = 0,
    northeast = 1,
    northwest = 7,
    south = 4,
    southeast = 3,
    southwest = 5,
    west = 6
}
enum disconnect_reason {
    afk = 6,
    banned = 9,
    cannot_keep_up = 5,
    desync_limit_reached = 4,
    dropped = 1,
    kicked = 7,
    kicked_and_deleted = 8,
    quit = 0,
    reconnect = 2,
    switching_servers = 10,
    wrong_input = 3
}
enum distraction {
    /**
     * Attack closer enemy entities, including entities "built" by player (belts, inserters, chests).
     */
    by_anything = 2,
    /**
     * Attack when attacked.
     */
    by_damage = 3,
    /**
     * Attack closer enemy entities with force.
     */
    by_enemy = 1,
    /**
     * Perform command even if someone attacks the unit.
     */
    none = 0
}
enum entity_status {
    /**
     * Used by rail signals.
     */
    cant_divide_segments = 43,
    /**
     * Used by accumulators.
     */
    charging = 13,
    closed_by_circuit_network = 7,
    /**
     * Used by constant combinators: Combinator is turned off via switch in GUI.
     */
    disabled = 40,
    disabled_by_control_behavior = 5,
    disabled_by_script = 8,
    /**
     * Used by accumulators.
     */
    discharging = 14,
    /**
     * Used by crafting machines.
     */
    fluid_ingredient_shortage = 23,
    /**
     * Used by burner energy sources.
     */
    full_burnt_result_output = 25,
    /**
     * Used by crafting machines, boilers, burner energy sources and reactors: Reactor/burner has full burnt result inventory, boiler has full output fluidbox.
     */
    full_output = 24,
    /**
     * Used by accumulators.
     */
    fully_charged = 15,
    /**
     * Used by crafting machines.
     */
    item_ingredient_shortage = 26,
    /**
     * Used by the rocket silo.
     */
    launching_rocket = 33,
    /**
     * Used by boilers and fluid turrets: Boiler still has some fluid but is about to run out.
     */
    low_input_fluid = 22,
    low_power = 3,
    /**
     * Used by heat energy sources.
     */
    low_temperature = 39,
    marked_for_deconstruction = 9,
    /**
     * Used by mining drills when the mining fluid is missing.
     */
    missing_required_fluid = 27,
    /**
     * Used by labs.
     */
    missing_science_packs = 28,
    /**
     * Used by power switches.
     */
    networks_connected = 11,
    /**
     * Used by power switches.
     */
    networks_disconnected = 12,
    /**
     * Used by ammo turrets.
     */
    no_ammo = 38,
    no_fuel = 4,
    /**
     * Used by furnaces.
     */
    no_ingredients = 18,
    /**
     * Used by boilers, fluid turrets and fluid energy sources: Boiler has no fluid to work with.
     */
    no_input_fluid = 19,
    /**
     * Used by mining drills.
     */
    no_minable_resources = 21,
    /**
     * Used by beacons.
     */
    no_modules_to_transmit = 34,
    no_power = 2,
    /**
     * Used by assembling machines.
     */
    no_recipe = 17,
    /**
     * Used by labs.
     */
    no_research_in_progress = 20,
    normal = 1,
    /**
     * Used by rail signals.
     */
    not_connected_to_rail = 42,
    /**
     * Used by generators and solar panels.
     */
    not_plugged_in_electric_network = 10,
    opened_by_circuit_network = 6,
    /**
     * Used by logistic containers.
     */
    out_of_logistic_network = 16,
    /**
     * Used by the rocket silo.
     */
    preparing_rocket_for_launch = 31,
    /**
     * Used by roboports.
     */
    recharging_after_power_outage = 35,
    /**
     * Used by lamps.
     */
    turned_off_during_daytime = 41,
    /**
     * Used by inserters.
     */
    waiting_for_source_items = 29,
    /**
     * Used by inserters and mining drills.
     */
    waiting_for_space_in_destination = 30,
    /**
     * Used by inserters targeting entity ghosts.
     */
    waiting_for_target_to_be_built = 36,
    /**
     * Used by inserters targeting rails.
     */
    waiting_for_train = 37,
    /**
     * Used by the rocket silo.
     */
    waiting_to_launch_rocket = 32,
    working = 0
}
/**
 * See the {@link events page | runtime:events} for more info on what events contain and when they get raised.
 */
enum events {
    on_ai_command_completed = 0,
    on_area_cloned = 1,
    on_biter_base_built = 2,
    on_brush_cloned = 3,
    on_build_base_arrived = 4,
    on_built_entity = 5,
    on_cancelled_deconstruction = 6,
    on_cancelled_upgrade = 7,
    on_character_corpse_expired = 8,
    on_chart_tag_added = 9,
    on_chart_tag_modified = 10,
    on_chart_tag_removed = 11,
    on_chunk_charted = 12,
    on_chunk_deleted = 13,
    on_chunk_generated = 14,
    on_combat_robot_expired = 15,
    on_console_chat = 16,
    on_console_command = 17,
    on_cutscene_cancelled = 18,
    on_cutscene_finished = 19,
    on_cutscene_started = 20,
    on_cutscene_waypoint_reached = 21,
    on_difficulty_settings_changed = 22,
    on_entity_cloned = 23,
    on_entity_color_changed = 24,
    on_entity_damaged = 25,
    on_entity_destroyed = 26,
    on_entity_died = 27,
    on_entity_logistic_slot_changed = 28,
    on_entity_renamed = 29,
    on_entity_settings_pasted = 30,
    on_entity_spawned = 31,
    on_equipment_inserted = 32,
    on_equipment_removed = 33,
    on_force_cease_fire_changed = 34,
    on_force_created = 35,
    on_force_friends_changed = 36,
    on_force_reset = 37,
    on_forces_merged = 38,
    on_forces_merging = 39,
    on_game_created_from_scenario = 40,
    on_gui_checked_state_changed = 41,
    on_gui_click = 42,
    on_gui_closed = 43,
    on_gui_confirmed = 44,
    on_gui_elem_changed = 45,
    on_gui_hover = 46,
    on_gui_leave = 47,
    on_gui_location_changed = 48,
    on_gui_opened = 49,
    on_gui_selected_tab_changed = 50,
    on_gui_selection_state_changed = 51,
    on_gui_switch_state_changed = 52,
    on_gui_text_changed = 53,
    on_gui_value_changed = 54,
    on_land_mine_armed = 55,
    on_lua_shortcut = 56,
    on_marked_for_deconstruction = 57,
    on_marked_for_upgrade = 58,
    on_market_item_purchased = 59,
    on_mod_item_opened = 60,
    on_permission_group_added = 61,
    on_permission_group_deleted = 62,
    on_permission_group_edited = 63,
    on_permission_string_imported = 64,
    on_picked_up_item = 65,
    on_player_alt_reverse_selected_area = 66,
    on_player_alt_selected_area = 67,
    on_player_ammo_inventory_changed = 68,
    on_player_armor_inventory_changed = 69,
    on_player_banned = 70,
    on_player_built_tile = 71,
    on_player_cancelled_crafting = 72,
    on_player_changed_force = 73,
    on_player_changed_position = 74,
    on_player_changed_surface = 75,
    on_player_cheat_mode_disabled = 76,
    on_player_cheat_mode_enabled = 77,
    on_player_clicked_gps_tag = 78,
    on_player_configured_blueprint = 79,
    on_player_configured_spider_remote = 80,
    on_player_crafted_item = 81,
    on_player_created = 82,
    on_player_cursor_stack_changed = 83,
    on_player_deconstructed_area = 84,
    on_player_demoted = 85,
    on_player_died = 86,
    on_player_display_resolution_changed = 87,
    on_player_display_scale_changed = 88,
    on_player_driving_changed_state = 89,
    on_player_dropped_item = 90,
    on_player_fast_transferred = 91,
    on_player_flushed_fluid = 92,
    on_player_gun_inventory_changed = 93,
    on_player_input_method_changed = 94,
    on_player_joined_game = 95,
    on_player_kicked = 96,
    on_player_left_game = 97,
    on_player_main_inventory_changed = 98,
    on_player_mined_entity = 99,
    on_player_mined_item = 100,
    on_player_mined_tile = 101,
    on_player_muted = 102,
    on_player_pipette = 103,
    on_player_placed_equipment = 104,
    on_player_promoted = 105,
    on_player_removed = 106,
    on_player_removed_equipment = 107,
    on_player_repaired_entity = 108,
    on_player_respawned = 109,
    on_player_reverse_selected_area = 110,
    on_player_rotated_entity = 111,
    on_player_selected_area = 112,
    on_player_set_quick_bar_slot = 113,
    on_player_setup_blueprint = 114,
    on_player_toggled_alt_mode = 115,
    on_player_toggled_map_editor = 116,
    on_player_trash_inventory_changed = 117,
    on_player_unbanned = 118,
    on_player_unmuted = 119,
    on_player_used_capsule = 120,
    on_player_used_spider_remote = 121,
    on_post_entity_died = 122,
    on_pre_build = 123,
    on_pre_chunk_deleted = 124,
    on_pre_entity_settings_pasted = 125,
    on_pre_ghost_deconstructed = 126,
    on_pre_ghost_upgraded = 127,
    on_pre_permission_group_deleted = 128,
    on_pre_permission_string_imported = 129,
    on_pre_player_crafted_item = 130,
    on_pre_player_died = 131,
    on_pre_player_left_game = 132,
    on_pre_player_mined_item = 133,
    on_pre_player_removed = 134,
    on_pre_player_toggled_map_editor = 135,
    on_pre_robot_exploded_cliff = 136,
    on_pre_script_inventory_resized = 137,
    on_pre_surface_cleared = 138,
    on_pre_surface_deleted = 139,
    on_research_cancelled = 140,
    on_research_finished = 141,
    on_research_reversed = 142,
    on_research_started = 143,
    on_resource_depleted = 144,
    on_robot_built_entity = 145,
    on_robot_built_tile = 146,
    on_robot_exploded_cliff = 147,
    on_robot_mined = 148,
    on_robot_mined_entity = 149,
    on_robot_mined_tile = 150,
    on_robot_pre_mined = 151,
    on_rocket_launch_ordered = 152,
    on_rocket_launched = 153,
    on_runtime_mod_setting_changed = 154,
    on_script_inventory_resized = 155,
    on_script_path_request_finished = 156,
    on_script_trigger_effect = 157,
    on_sector_scanned = 158,
    on_selected_entity_changed = 159,
    on_spider_command_completed = 160,
    on_string_translated = 161,
    on_surface_cleared = 162,
    on_surface_created = 163,
    on_surface_deleted = 164,
    on_surface_imported = 165,
    on_surface_renamed = 166,
    on_technology_effects_reset = 167,
    on_tick = 168,
    on_train_changed_state = 169,
    on_train_created = 170,
    on_train_schedule_changed = 171,
    on_trigger_created_entity = 172,
    on_trigger_fired_artillery = 173,
    on_unit_added_to_group = 174,
    on_unit_group_created = 175,
    on_unit_group_finished_gathering = 176,
    on_unit_removed_from_group = 177,
    on_worker_robot_expired = 178,
    script_raised_built = 179,
    script_raised_destroy = 180,
    script_raised_revive = 181,
    script_raised_set_tiles = 182,
    script_raised_teleported = 183
}
enum flow_precision_index {
    fifty_hours = 5,
    five_seconds = 0,
    one_hour = 3,
    one_minute = 1,
    one_thousand_hours = 7,
    ten_hours = 4,
    ten_minutes = 2,
    two_hundred_fifty_hours = 6
}
enum game_controller_interaction {
    /**
     * Game controller will always hover this element regardless of type or state.
     */
    always = 0,
    /**
     * Never hover this element with a game controller.
     */
    never = 1,
    /**
     * Hover according to the element type and implementation.
     */
    normal = 2
}
enum group_state {
    attacking_distraction = 2,
    attacking_target = 3,
    finished = 4,
    gathering = 0,
    moving = 1,
    pathfinding = 5,
    wander_in_group = 6
}
enum gui_type {
    achievement = 0,
    blueprint_library = 1,
    bonus = 2,
    controller = 3,
    custom = 4,
    entity = 5,
    equipment = 6,
    item = 7,
    logistic = 8,
    none = 9,
    other_player = 10,
    permissions = 11,
    player_management = 12,
    production = 13,
    research = 14,
    script_inventory = 15,
    server_management = 16,
    tile = 17,
    trains = 18,
    tutorials = 19
}
enum input_action {
    activate_copy = 0,
    activate_cut = 1,
    activate_paste = 2,
    add_permission_group = 3,
    add_train_station = 4,
    admin_action = 5,
    alt_reverse_select_area = 6,
    alt_select_area = 7,
    alt_select_blueprint_entities = 8,
    alternative_copy = 9,
    begin_mining = 10,
    begin_mining_terrain = 11,
    build = 12,
    build_rail = 13,
    build_terrain = 14,
    cancel_craft = 15,
    cancel_deconstruct = 16,
    cancel_new_blueprint = 17,
    cancel_research = 18,
    cancel_upgrade = 19,
    change_active_character_tab = 20,
    change_active_item_group_for_crafting = 21,
    change_active_item_group_for_filters = 22,
    change_active_quick_bar = 23,
    change_arithmetic_combinator_parameters = 24,
    change_decider_combinator_parameters = 25,
    change_entity_label = 26,
    change_item_description = 27,
    change_item_label = 28,
    change_multiplayer_config = 29,
    change_picking_state = 30,
    change_programmable_speaker_alert_parameters = 31,
    change_programmable_speaker_circuit_parameters = 32,
    change_programmable_speaker_parameters = 33,
    change_riding_state = 34,
    change_shooting_state = 35,
    change_train_stop_station = 36,
    change_train_wait_condition = 37,
    change_train_wait_condition_data = 38,
    clear_cursor = 39,
    connect_rolling_stock = 40,
    copy = 41,
    copy_entity_settings = 42,
    copy_opened_blueprint = 43,
    copy_opened_item = 44,
    craft = 45,
    cursor_split = 46,
    cursor_transfer = 47,
    custom_input = 48,
    cycle_blueprint_book_backwards = 49,
    cycle_blueprint_book_forwards = 50,
    deconstruct = 51,
    delete_blueprint_library = 52,
    delete_blueprint_record = 53,
    delete_custom_tag = 54,
    delete_permission_group = 55,
    destroy_item = 56,
    destroy_opened_item = 57,
    disconnect_rolling_stock = 58,
    drag_train_schedule = 59,
    drag_train_wait_condition = 60,
    drop_blueprint_record = 61,
    drop_item = 62,
    edit_blueprint_tool_preview = 63,
    edit_custom_tag = 64,
    edit_permission_group = 65,
    export_blueprint = 66,
    fast_entity_split = 67,
    fast_entity_transfer = 68,
    flush_opened_entity_fluid = 69,
    flush_opened_entity_specific_fluid = 70,
    go_to_train_station = 71,
    grab_blueprint_record = 72,
    gui_checked_state_changed = 73,
    gui_click = 74,
    gui_confirmed = 75,
    gui_elem_changed = 76,
    gui_hover = 77,
    gui_leave = 78,
    gui_location_changed = 79,
    gui_selected_tab_changed = 80,
    gui_selection_state_changed = 81,
    gui_switch_state_changed = 82,
    gui_text_changed = 83,
    gui_value_changed = 84,
    import_blueprint = 85,
    import_blueprint_string = 86,
    import_blueprints_filtered = 87,
    import_permissions_string = 88,
    inventory_split = 89,
    inventory_transfer = 90,
    launch_rocket = 91,
    lua_shortcut = 92,
    map_editor_action = 93,
    market_offer = 94,
    mod_settings_changed = 95,
    open_achievements_gui = 96,
    open_blueprint_library_gui = 97,
    open_blueprint_record = 98,
    open_bonus_gui = 99,
    open_character_gui = 100,
    open_current_vehicle_gui = 101,
    open_equipment = 102,
    open_gui = 103,
    open_item = 104,
    open_logistic_gui = 105,
    open_mod_item = 106,
    open_parent_of_opened_item = 107,
    open_production_gui = 108,
    open_technology_gui = 109,
    open_tips_and_tricks_gui = 110,
    open_train_gui = 111,
    open_train_station_gui = 112,
    open_trains_gui = 113,
    paste_entity_settings = 114,
    place_equipment = 115,
    quick_bar_pick_slot = 116,
    quick_bar_set_selected_page = 117,
    quick_bar_set_slot = 118,
    reassign_blueprint = 119,
    remove_cables = 120,
    remove_train_station = 121,
    reset_assembling_machine = 122,
    reset_item = 123,
    reverse_select_area = 124,
    rotate_entity = 125,
    select_area = 126,
    select_blueprint_entities = 127,
    select_entity_slot = 128,
    select_item = 129,
    select_mapper_slot = 130,
    select_next_valid_gun = 131,
    select_tile_slot = 132,
    send_spidertron = 133,
    set_auto_launch_rocket = 134,
    set_autosort_inventory = 135,
    set_behavior_mode = 136,
    set_car_weapons_control = 137,
    set_circuit_condition = 138,
    set_circuit_mode_of_operation = 139,
    set_controller_logistic_trash_filter_item = 140,
    set_deconstruction_item_tile_selection_mode = 141,
    set_deconstruction_item_trees_and_rocks_only = 142,
    set_entity_color = 143,
    set_entity_energy_property = 144,
    set_entity_logistic_trash_filter_item = 145,
    set_filter = 146,
    set_flat_controller_gui = 147,
    set_heat_interface_mode = 148,
    set_heat_interface_temperature = 149,
    set_infinity_container_filter_item = 150,
    set_infinity_container_remove_unfiltered_items = 151,
    set_infinity_pipe_filter = 152,
    set_inserter_max_stack_size = 153,
    set_inventory_bar = 154,
    set_linked_container_link_i_d = 155,
    set_logistic_filter_item = 156,
    set_logistic_filter_signal = 157,
    set_player_color = 158,
    set_recipe_notifications = 159,
    set_request_from_buffers = 160,
    set_research_finished_stops_game = 161,
    set_signal = 162,
    set_splitter_priority = 163,
    set_train_stopped = 164,
    set_trains_limit = 165,
    set_vehicle_automatic_targeting_parameters = 166,
    setup_assembling_machine = 167,
    setup_blueprint = 168,
    setup_single_blueprint_record = 169,
    smart_pipette = 170,
    spawn_item = 171,
    stack_split = 172,
    stack_transfer = 173,
    start_repair = 174,
    start_research = 175,
    start_walking = 176,
    stop_building_by_moving = 177,
    switch_connect_to_logistic_network = 178,
    switch_constant_combinator_state = 179,
    switch_inserter_filter_mode_state = 180,
    switch_power_switch_state = 181,
    switch_to_rename_stop_gui = 182,
    take_equipment = 183,
    toggle_deconstruction_item_entity_filter_mode = 184,
    toggle_deconstruction_item_tile_filter_mode = 185,
    toggle_driving = 186,
    toggle_enable_vehicle_logistics_while_moving = 187,
    toggle_entity_logistic_requests = 188,
    toggle_equipment_movement_bonus = 189,
    toggle_map_editor = 190,
    toggle_personal_logistic_requests = 191,
    toggle_personal_roboport = 192,
    toggle_show_entity_info = 193,
    translate_string = 194,
    undo = 195,
    upgrade = 196,
    upgrade_opened_blueprint_by_item = 197,
    upgrade_opened_blueprint_by_record = 198,
    use_artillery_remote = 199,
    use_item = 200,
    wire_dragging = 201,
    write_to_console = 202
}
enum input_method {
    game_controller = 1,
    keyboard_and_mouse = 0
}
enum inventory {
    artillery_turret_ammo = 40,
    artillery_wagon_ammo = 41,
    assembling_machine_input = 21,
    assembling_machine_modules = 23,
    assembling_machine_output = 22,
    beacon_modules = 38,
    burnt_result = 1,
    car_ammo = 35,
    car_trunk = 34,
    cargo_wagon = 36,
    character_ammo = 8,
    character_armor = 9,
    character_corpse = 39,
    character_guns = 7,
    character_main = 6,
    character_trash = 11,
    character_vehicle = 10,
    chest = 2,
    editor_ammo = 15,
    editor_armor = 16,
    editor_guns = 14,
    editor_main = 13,
    fuel = 0,
    furnace_modules = 5,
    furnace_result = 4,
    furnace_source = 3,
    god_main = 12,
    item_main = 27,
    lab_input = 24,
    lab_modules = 25,
    mining_drill_modules = 26,
    roboport_material = 18,
    roboport_robot = 17,
    robot_cargo = 19,
    robot_repair = 20,
    rocket = 33,
    rocket_silo_input = 30,
    rocket_silo_modules = 32,
    rocket_silo_output = 31,
    rocket_silo_result = 29,
    rocket_silo_rocket = 28,
    spider_ammo = 43,
    spider_trash = 44,
    spider_trunk = 42,
    turret_ammo = 37
}
enum logistic_member_index {
    character_provider = 4,
    character_requester = 2,
    character_storage = 3,
    generic_on_off_behavior = 5,
    logistic_container = 0,
    vehicle_storage = 1
}
enum logistic_mode {
    active_provider = 1,
    buffer = 5,
    none = 0,
    passive_provider = 4,
    requester = 3,
    storage = 2
}
enum mouse_button_type {
    left = 1,
    middle = 3,
    none = 0,
    right = 2
}
enum print_skip {
    /**
     * Print will be skipped if same text was recently printed (within last 60 ticks). Used by most game messages.
     */
    if_redundant = 1,
    /**
     * Print will be skipped if same text is still visible (printed within last 1152 ticks). Used by some notifications.
     */
    if_visible = 2,
    /**
     * Print will not be skipped.
     */
    never = 0
}
enum print_sound {
    always = 0,
    never = 1,
    use_player_settings = 2
}
/**
 * A dictionary mapping all top-level prototypes by name to a list of their associated subtypes. This list is organized as a lookup table, meaning it maps the sub-prototype names to `0`. As an example, `defines.prototypes['entity']` looks like this: `{furnace=0, inserter=0, container=0, ...}`.
 */
enum prototypes {
}
enum rail_connection_direction {
    left = 0,
    none = 3,
    right = 2,
    straight = 1
}
enum rail_direction {
    back = 1,
    front = 0
}
enum relative_gui_position {
    bottom = 1,
    left = 2,
    right = 3,
    top = 0
}
enum relative_gui_type {
    accumulator_gui = 0,
    achievement_gui = 1,
    additional_entity_info_gui = 2,
    admin_gui = 3,
    arithmetic_combinator_gui = 4,
    armor_gui = 5,
    assembling_machine_gui = 6,
    assembling_machine_select_recipe_gui = 7,
    beacon_gui = 8,
    blueprint_book_gui = 9,
    blueprint_library_gui = 10,
    blueprint_setup_gui = 11,
    bonus_gui = 12,
    burner_equipment_gui = 13,
    car_gui = 14,
    constant_combinator_gui = 15,
    container_gui = 16,
    controller_gui = 17,
    decider_combinator_gui = 18,
    deconstruction_item_gui = 19,
    electric_energy_interface_gui = 20,
    electric_network_gui = 21,
    entity_variations_gui = 22,
    entity_with_energy_source_gui = 23,
    equipment_grid_gui = 24,
    furnace_gui = 25,
    generic_on_off_entity_gui = 26,
    heat_interface_gui = 27,
    infinity_pipe_gui = 28,
    inserter_gui = 29,
    item_with_inventory_gui = 30,
    lab_gui = 31,
    lamp_gui = 32,
    linked_container_gui = 33,
    loader_gui = 34,
    logistic_gui = 35,
    market_gui = 36,
    mining_drill_gui = 37,
    other_player_gui = 38,
    permissions_gui = 39,
    pipe_gui = 40,
    power_switch_gui = 41,
    production_gui = 42,
    programmable_speaker_gui = 43,
    rail_chain_signal_gui = 44,
    rail_signal_gui = 45,
    reactor_gui = 46,
    rename_stop_gui = 47,
    resource_entity_gui = 48,
    roboport_gui = 49,
    rocket_silo_gui = 50,
    script_inventory_gui = 51,
    server_config_gui = 52,
    spider_vehicle_gui = 53,
    splitter_gui = 54,
    standalone_character_gui = 55,
    storage_tank_gui = 56,
    tile_variations_gui = 57,
    train_gui = 58,
    train_stop_gui = 59,
    trains_gui = 60,
    transport_belt_gui = 61,
    upgrade_item_gui = 62,
    wall_gui = 63
}
enum render_mode {
    chart = 1,
    chart_zoomed_in = 2,
    game = 0
}
enum rich_text_setting {
    disabled = 1,
    enabled = 0,
    highlight = 2
}
namespace riding {
    enum acceleration {
        accelerating = 1,
        braking = 2,
        nothing = 0,
        reversing = 3
    }
    enum direction {
        left = 0,
        right = 2,
        straight = 1
    }
}
/**
 * The various parts of the launch sequence of the rocket silo.
 */
enum rocket_silo_status {
    /**
     * The next state is `rocket_ready` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting prepared for launch.
     */
    arms_advance = 6,
    /**
     * The next state is `rocket_flying` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting launched.
     */
    arms_retract = 10,
    /**
     * The rocket silo is crafting rocket parts. When there are enough rocket parts, the silo will switch into the `create_rocket` state.
     */
    building_rocket = 0,
    /**
     * The next state is `lights_blinking_open`. The rocket silo rocket entity gets created.
     */
    create_rocket = 1,
    /**
     * The next state is `building_rocket`.
     */
    doors_closing = 13,
    /**
     * The next state is `rocket_rising` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting prepared for launch.
     */
    doors_opened = 4,
    /**
     * The next state is `doors_opened`. The rocket is getting prepared for launch.
     */
    doors_opening = 3,
    /**
     * The next state is `arms_retract` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting launched.
     */
    engine_starting = 9,
    /**
     * The next state is `engine_starting` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting launched.
     */
    launch_started = 14,
    /**
     * The next state is `launch_started`.
     */
    launch_starting = 8,
    /**
     * The next state is `doors_closing`.
     */
    lights_blinking_close = 12,
    /**
     * The next state is `doors_opening`. The rocket is getting prepared for launch.
     */
    lights_blinking_open = 2,
    /**
     * The next state is `lights_blinking_close`. The rocket is getting launched.
     */
    rocket_flying = 11,
    /**
     * The rocket launch can be started by the player. When the launch is started, the silo switches into the `launch_starting` state.
     */
    rocket_ready = 7,
    /**
     * The next state is `arms_advance` or if the rocket is destroyed in this state then the next state will be `lights_blinking_close`. The rocket is getting prepared for launch.
     */
    rocket_rising = 5
}
enum shooting {
    not_shooting = 0,
    shooting_enemies = 1,
    shooting_selected = 2
}
/**
 * State of an ordinary rail signal.
 */
enum signal_state {
    /**
     * Red.
     */
    closed = 1,
    /**
     * Green.
     */
    open = 0,
    /**
     * Orange.
     */
    reserved = 2,
    /**
     * Red - From circuit network.
     */
    reserved_by_circuit_network = 3
}
enum train_state {
    /**
     * Braking before a rail signal.
     */
    arrive_signal = 4,
    /**
     * Braking before a station.
     */
    arrive_station = 6,
    /**
     * Same as no_path but all candidate train stops are full
     */
    destination_full = 10,
    /**
     * Can move if user explicitly sits in and rides the train.
     */
    manual_control = 9,
    /**
     * Switched to manual control and has to stop.
     */
    manual_control_stop = 8,
    /**
     * Has no path and is stopped.
     */
    no_path = 3,
    /**
     * Doesn't have anywhere to go.
     */
    no_schedule = 2,
    /**
     * Normal state -- following the path.
     */
    on_the_path = 0,
    /**
     * Had path and lost it -- must stop.
     */
    path_lost = 1,
    /**
     * Waiting at a signal.
     */
    wait_signal = 5,
    /**
     * Waiting at a station.
     */
    wait_station = 7
}
enum transport_line {
    left_line = 0,
    left_split_line = 6,
    left_underground_line = 2,
    right_line = 1,
    right_split_line = 7,
    right_underground_line = 3,
    secondary_left_line = 4,
    secondary_left_split_line = 8,
    secondary_right_line = 5,
    secondary_right_split_line = 9
}
enum wire_connection_id {
    electric_pole = 0,
    power_switch_left = 1,
    power_switch_right = 2
}
enum wire_type {
    copper = 2,
    green = 1,
    red = 0
}

}