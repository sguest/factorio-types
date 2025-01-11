// Factorio defines
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 2.0.30
// API version 6

declare namespace defines {
enum alert_type {
    collector_path_blocked = 0,
    custom = 1,
    entity_destroyed = 2,
    entity_under_attack = 3,
    no_material_for_construction = 4,
    no_platform_storage = 5,
    no_roboport_storage = 6,
    no_storage = 7,
    not_enough_construction_robots = 8,
    not_enough_repair_packs = 9,
    pipeline_overextended = 10,
    platform_tile_building_blocked = 11,
    train_no_path = 12,
    train_out_of_fuel = 13,
    turret_fire = 14,
    turret_out_of_ammo = 15,
    unclaimed_cargo = 16
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
enum build_mode {
    forced = 1,
    normal = 0,
    superforced = 2
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
    namespace cargo_landing_pad {
        enum exclusive_mode {
            none = 0,
            send_contents = 1,
            set_requests = 2
        }
    }
    namespace inserter {
        enum hand_read_mode {
            hold = 0,
            pulse = 1
        }
    }
    namespace lamp {
        enum color_mode {
            color_mapping = 0,
            components = 1,
            packed_rgb = 2
        }
    }
    namespace logistic_container {
        enum exclusive_mode {
            none = 2,
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
    namespace roboport {
        enum read_items_mode {
            logistics = 1,
            missing_requests = 2,
            none = 0
        }
    }
    namespace rocket_silo {
        enum read_mode {
            logistic_inventory = 1,
            none = 0,
            orbital_requests = 2
        }
    }
    namespace transport_belt {
        enum content_read_mode {
            entire_belt_hold = 2,
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
         * {@link LuaAgriculturalTowerControlBehavior | runtime:LuaAgriculturalTowerControlBehavior}
         */
        agricultural_tower = 31,
        /**
         * {@link LuaArithmeticCombinatorControlBehavior | runtime:LuaArithmeticCombinatorControlBehavior}
         */
        arithmetic_combinator = 9,
        /**
         * {@link LuaArtilleryTurretControlBehavior | runtime:LuaArtilleryTurretControlBehavior}
         */
        artillery_turret = 25,
        /**
         * {@link LuaAssemblingMachineControlBehavior | runtime:LuaAssemblingMachineControlBehavior}
         */
        assembling_machine = 18,
        /**
         * {@link LuaAsteroidCollectorControlBehavior | runtime:LuaAsteroidCollectorControlBehavior}
         */
        asteroid_collector = 26,
        /**
         * {@link LuaCargoLandingPadControlBehavior | runtime:LuaCargoLandingPadControlBehavior}
         */
        cargo_landing_pad = 30,
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
         * {@link LuaDisplayPanelControlBehavior | runtime:LuaDisplayPanelControlBehavior}
         */
        display_panel = 28,
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
         * {@link LuaLoaderControlBehavior | runtime:LuaLoaderControlBehavior}
         */
        loader = 29,
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
         * {@link LuaPumpControlBehavior | runtime:LuaPumpControlBehavior}
         */
        pump = 19,
        /**
         * {@link LuaRadarControlBehavior | runtime:LuaRadarControlBehavior}
         */
        radar = 27,
        /**
         * {@link LuaRailSignalBaseControlBehavior | runtime:LuaRailSignalBaseControlBehavior}
         */
        rail_chain_signal = 14,
        /**
         * {@link LuaRailSignalBaseControlBehavior | runtime:LuaRailSignalBaseControlBehavior}
         */
        rail_signal = 13,
        /**
         * {@link LuaReactorControlBehavior | runtime:LuaReactorControlBehavior}
         */
        reactor = 23,
        /**
         * {@link LuaRoboportControlBehavior | runtime:LuaRoboportControlBehavior}
         */
        roboport = 5,
        /**
         * {@link LuaRocketSiloControlBehavior | runtime:LuaRocketSiloControlBehavior}
         */
        rocket_silo = 21,
        /**
         * {@link LuaSelectorCombinatorControlBehavior | runtime:LuaSelectorCombinatorControlBehavior}
         */
        selector_combinator = 20,
        /**
         * {@link LuaSpacePlatformHubControlBehavior | runtime:LuaSpacePlatformHubControlBehavior}
         */
        space_platform_hub = 24,
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
         * {@link LuaTurretControlBehavior | runtime:LuaTurretControlBehavior}
         */
        turret = 22,
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
     * Can't move/change items but can build ghosts/change settings.
     */
    remote = 6,
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
enum default_icon_size {
}
enum difficulty {
    easy = 0,
    hard = 2,
    normal = 1
}
enum direction {
    east = 4,
    eastnortheast = 3,
    eastsoutheast = 5,
    north = 0,
    northeast = 2,
    northnortheast = 1,
    northnorthwest = 15,
    northwest = 14,
    south = 8,
    southeast = 6,
    southsoutheast = 7,
    southsouthwest = 9,
    southwest = 10,
    west = 12,
    westnorthwest = 13,
    westsouthwest = 11
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
     * Only used if set through {@link LuaEntity::status | runtime:LuaEntity::status} or {@link ContainerPrototype::default_status | prototype:ContainerPrototype::default_status}.
     */
    broken = 3,
    /**
     * Used by rail signals.
     */
    cant_divide_segments = 59,
    /**
     * Used by accumulators.
     */
    charging = 17,
    closed_by_circuit_network = 10,
    /**
     * Used by asteroid collectors.
     */
    computing_navigation = 63,
    /**
     * Used by trains.
     */
    destination_stop_full = 48,
    /**
     * Used by constant combinators: Combinator is turned off via switch in GUI.
     */
    disabled = 56,
    disabled_by_control_behavior = 8,
    disabled_by_script = 11,
    /**
     * Used by accumulators.
     */
    discharging = 18,
    /**
     * Used by crafting machines.
     */
    fluid_ingredient_shortage = 28,
    frozen = 7,
    /**
     * Used by burner energy sources.
     */
    full_burnt_result_output = 31,
    /**
     * Used by crafting machines, boilers, burner energy sources and reactors: Reactor/burner has full burnt result inventory, boiler has full output fluidbox.
     */
    full_output = 29,
    /**
     * Used by accumulators.
     */
    fully_charged = 19,
    /**
     * Used by ghosts.
     */
    ghost = 2,
    /**
     * Used by crafting machines.
     */
    item_ingredient_shortage = 32,
    /**
     * Used by the rocket silo.
     */
    launching_rocket = 41,
    /**
     * Used by boilers and fluid turrets: Boiler still has some fluid but is about to run out.
     */
    low_input_fluid = 27,
    low_power = 5,
    /**
     * Used by heat energy sources.
     */
    low_temperature = 55,
    marked_for_deconstruction = 12,
    /**
     * Used by mining drills when the mining fluid is missing.
     */
    missing_required_fluid = 33,
    /**
     * Used by labs.
     */
    missing_science_packs = 34,
    /**
     * Used by power switches.
     */
    networks_connected = 15,
    /**
     * Used by power switches.
     */
    networks_disconnected = 16,
    /**
     * Used by ammo turrets.
     */
    no_ammo = 54,
    /**
     * Used by filter inserters.
     */
    no_filter = 60,
    no_fuel = 6,
    /**
     * Used by furnaces.
     */
    no_ingredients = 22,
    /**
     * Used by boilers, fluid turrets and fluid energy sources: Boiler has no fluid to work with.
     */
    no_input_fluid = 23,
    /**
     * Used by mining drills.
     */
    no_minable_resources = 25,
    /**
     * Used by beacons.
     */
    no_modules_to_transmit = 50,
    /**
     * Used by trains and space platform hubs.
     */
    no_path = 49,
    no_power = 4,
    /**
     * Used by assembling machines.
     */
    no_recipe = 21,
    /**
     * Used by labs.
     */
    no_research_in_progress = 24,
    /**
     * Used by agricultural towers.
     */
    no_spot_seedable_by_inputs = 61,
    normal = 1,
    /**
     * Used by cargo bays.
     */
    not_connected_to_hub_or_pad = 26,
    /**
     * Used by rail signals.
     */
    not_connected_to_rail = 58,
    /**
     * Used by agricultural towers.
     */
    not_enough_space_in_output = 30,
    /**
     * Used by space platform hubs.
     */
    not_enough_thrust = 47,
    /**
     * Used by generators and solar panels.
     */
    not_plugged_in_electric_network = 14,
    /**
     * Used by space platform hubs.
     */
    on_the_way = 43,
    opened_by_circuit_network = 9,
    /**
     * Used by logistic containers.
     */
    out_of_logistic_network = 20,
    /**
     * Used by space platform hubs.
     */
    paused = 13,
    /**
     * Used by pipes, pipes to ground and storage tanks.
     */
    pipeline_overextended = 64,
    /**
     * Used by the rocket silo.
     */
    preparing_rocket_for_launch = 38,
    /**
     * Used by roboports.
     */
    recharging_after_power_outage = 51,
    /**
     * Used by assembling machines.
     */
    recipe_not_researched = 65,
    /**
     * Used by thrusters.
     */
    thrust_not_required = 42,
    /**
     * Used by lamps.
     */
    turned_off_during_daytime = 57,
    /**
     * Used by trains.
     */
    waiting_at_stop = 45,
    /**
     * Used by inserters when wait_for_full_hand is set.
     */
    waiting_for_more_items = 36,
    /**
     * Used by agricultural towers.
     */
    waiting_for_plants_to_grow = 62,
    /**
     * Used by space platform hubs.
     */
    waiting_for_rockets_to_arrive = 46,
    /**
     * Used by inserters.
     */
    waiting_for_source_items = 35,
    /**
     * Used by inserters and mining drills.
     */
    waiting_for_space_in_destination = 37,
    /**
     * Used by the rocket silo.
     */
    waiting_for_space_in_platform_hub = 40,
    /**
     * Used by inserters targeting entity ghosts.
     */
    waiting_for_target_to_be_built = 52,
    /**
     * Used by inserters targeting rails.
     */
    waiting_for_train = 53,
    /**
     * Used by space platform hubs.
     */
    waiting_in_orbit = 44,
    /**
     * Used by the rocket silo.
     */
    waiting_to_launch_rocket = 39,
    working = 0
}
enum entity_status_diode {
    green = 0,
    red = 1,
    yellow = 2
}
/**
 * See the {@link events page | runtime:events} for more info on what events contain and when they get raised.
 */
enum events {
    on_achievement_gained = 0,
    on_ai_command_completed = 1,
    on_area_cloned = 2,
    on_biter_base_built = 3,
    on_brush_cloned = 4,
    on_build_base_arrived = 5,
    on_built_entity = 6,
    on_cancelled_deconstruction = 7,
    on_cancelled_upgrade = 8,
    on_cargo_pod_finished_ascending = 9,
    on_character_corpse_expired = 10,
    on_chart_tag_added = 11,
    on_chart_tag_modified = 12,
    on_chart_tag_removed = 13,
    on_chunk_charted = 14,
    on_chunk_deleted = 15,
    on_chunk_generated = 16,
    on_combat_robot_expired = 17,
    on_console_chat = 18,
    on_console_command = 19,
    on_cutscene_cancelled = 20,
    on_cutscene_finished = 21,
    on_cutscene_started = 22,
    on_cutscene_waypoint_reached = 23,
    on_entity_cloned = 24,
    on_entity_color_changed = 25,
    on_entity_damaged = 26,
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
    on_object_destroyed = 61,
    on_permission_group_added = 62,
    on_permission_group_deleted = 63,
    on_permission_group_edited = 64,
    on_permission_string_imported = 65,
    on_picked_up_item = 66,
    on_player_alt_reverse_selected_area = 67,
    on_player_alt_selected_area = 68,
    on_player_ammo_inventory_changed = 69,
    on_player_armor_inventory_changed = 70,
    on_player_banned = 71,
    on_player_built_tile = 72,
    on_player_cancelled_crafting = 73,
    on_player_changed_force = 74,
    on_player_changed_position = 75,
    on_player_changed_surface = 76,
    on_player_cheat_mode_disabled = 77,
    on_player_cheat_mode_enabled = 78,
    on_player_clicked_gps_tag = 79,
    on_player_configured_blueprint = 80,
    on_player_controller_changed = 81,
    on_player_crafted_item = 82,
    on_player_created = 83,
    on_player_cursor_stack_changed = 84,
    on_player_deconstructed_area = 85,
    on_player_demoted = 86,
    on_player_died = 87,
    on_player_display_density_scale_changed = 88,
    on_player_display_resolution_changed = 89,
    on_player_display_scale_changed = 90,
    on_player_driving_changed_state = 91,
    on_player_dropped_item = 92,
    on_player_fast_transferred = 93,
    on_player_flipped_entity = 94,
    on_player_flushed_fluid = 95,
    on_player_gun_inventory_changed = 96,
    on_player_input_method_changed = 97,
    on_player_joined_game = 98,
    on_player_kicked = 99,
    on_player_left_game = 100,
    on_player_locale_changed = 101,
    on_player_main_inventory_changed = 102,
    on_player_mined_entity = 103,
    on_player_mined_item = 104,
    on_player_mined_tile = 105,
    on_player_muted = 106,
    on_player_pipette = 107,
    on_player_placed_equipment = 108,
    on_player_promoted = 109,
    on_player_removed = 110,
    on_player_removed_equipment = 111,
    on_player_repaired_entity = 112,
    on_player_respawned = 113,
    on_player_reverse_selected_area = 114,
    on_player_rotated_entity = 115,
    on_player_selected_area = 116,
    on_player_set_quick_bar_slot = 117,
    on_player_setup_blueprint = 118,
    on_player_toggled_alt_mode = 119,
    on_player_toggled_map_editor = 120,
    on_player_trash_inventory_changed = 121,
    on_player_unbanned = 122,
    on_player_unmuted = 123,
    on_player_used_capsule = 124,
    on_player_used_spidertron_remote = 125,
    on_post_entity_died = 126,
    on_pre_build = 127,
    on_pre_chunk_deleted = 128,
    on_pre_entity_settings_pasted = 129,
    on_pre_ghost_deconstructed = 130,
    on_pre_ghost_upgraded = 131,
    on_pre_permission_group_deleted = 132,
    on_pre_permission_string_imported = 133,
    on_pre_player_crafted_item = 134,
    on_pre_player_died = 135,
    on_pre_player_left_game = 136,
    on_pre_player_mined_item = 137,
    on_pre_player_removed = 138,
    on_pre_player_toggled_map_editor = 139,
    on_pre_robot_exploded_cliff = 140,
    on_pre_scenario_finished = 141,
    on_pre_script_inventory_resized = 142,
    on_pre_surface_cleared = 143,
    on_pre_surface_deleted = 144,
    on_redo_applied = 145,
    on_research_cancelled = 146,
    on_research_finished = 147,
    on_research_moved = 148,
    on_research_reversed = 149,
    on_research_started = 150,
    on_resource_depleted = 151,
    on_robot_built_entity = 152,
    on_robot_built_tile = 153,
    on_robot_exploded_cliff = 154,
    on_robot_mined = 155,
    on_robot_mined_entity = 156,
    on_robot_mined_tile = 157,
    on_robot_pre_mined = 158,
    on_rocket_launch_ordered = 159,
    on_rocket_launched = 160,
    on_runtime_mod_setting_changed = 161,
    on_script_inventory_resized = 162,
    on_script_path_request_finished = 163,
    on_script_trigger_effect = 164,
    on_sector_scanned = 165,
    on_segment_entity_created = 166,
    on_selected_entity_changed = 167,
    on_space_platform_built_entity = 168,
    on_space_platform_built_tile = 169,
    on_space_platform_changed_state = 170,
    on_space_platform_mined_entity = 171,
    on_space_platform_mined_item = 172,
    on_space_platform_mined_tile = 173,
    on_space_platform_pre_mined = 174,
    on_spider_command_completed = 175,
    on_string_translated = 176,
    on_surface_cleared = 177,
    on_surface_created = 178,
    on_surface_deleted = 179,
    on_surface_imported = 180,
    on_surface_renamed = 181,
    on_technology_effects_reset = 182,
    on_tick = 183,
    on_train_changed_state = 184,
    on_train_created = 185,
    on_train_schedule_changed = 186,
    on_trigger_created_entity = 187,
    on_trigger_fired_artillery = 188,
    on_undo_applied = 189,
    on_unit_added_to_group = 190,
    on_unit_group_created = 191,
    on_unit_group_finished_gathering = 192,
    on_unit_removed_from_group = 193,
    on_worker_robot_expired = 194,
    script_raised_built = 195,
    script_raised_destroy = 196,
    script_raised_revive = 197,
    script_raised_set_tiles = 198,
    script_raised_teleported = 199
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
    global_electric_network = 7,
    item = 8,
    logistic = 9,
    none = 10,
    opened_entity_grid = 11,
    other_player = 12,
    permissions = 13,
    player_management = 14,
    production = 15,
    script_inventory = 16,
    server_management = 17,
    tile = 18,
    trains = 19
}
enum input_action {
    activate_interrupt = 0,
    activate_paste = 1,
    add_decider_combinator_condition = 2,
    add_decider_combinator_output = 3,
    add_logistic_section = 4,
    add_permission_group = 5,
    add_pin = 6,
    add_train_interrupt = 7,
    add_train_station = 8,
    adjust_blueprint_snapping = 9,
    admin_action = 10,
    alt_reverse_select_area = 11,
    alt_select_area = 12,
    alt_select_blueprint_entities = 13,
    alternative_copy = 14,
    begin_mining = 15,
    begin_mining_terrain = 16,
    build = 17,
    build_rail = 18,
    build_terrain = 19,
    cancel_craft = 20,
    cancel_deconstruct = 21,
    cancel_delete_space_platform = 22,
    cancel_new_blueprint = 23,
    cancel_research = 24,
    cancel_upgrade = 25,
    change_active_character_tab = 26,
    change_active_item_group_for_crafting = 27,
    change_active_item_group_for_filters = 28,
    change_active_quick_bar = 29,
    change_arithmetic_combinator_parameters = 30,
    change_entity_label = 31,
    change_item_label = 32,
    change_logistic_point_group = 33,
    change_multiplayer_config = 34,
    change_picking_state = 35,
    change_programmable_speaker_alert_parameters = 36,
    change_programmable_speaker_circuit_parameters = 37,
    change_programmable_speaker_parameters = 38,
    change_riding_state = 39,
    change_selector_combinator_parameters = 40,
    change_shooting_state = 41,
    change_train_name = 42,
    change_train_stop_station = 43,
    change_train_wait_condition = 44,
    change_train_wait_condition_data = 45,
    clear_cursor = 46,
    connect_rolling_stock = 47,
    copy = 48,
    copy_entity_settings = 49,
    copy_large_opened_blueprint = 50,
    copy_large_opened_item = 51,
    copy_opened_blueprint = 52,
    copy_opened_item = 53,
    craft = 54,
    create_space_platform = 55,
    cursor_split = 56,
    cursor_transfer = 57,
    custom_input = 58,
    cycle_blueprint_book_backwards = 59,
    cycle_blueprint_book_forwards = 60,
    cycle_quality_down = 61,
    cycle_quality_up = 62,
    deconstruct = 63,
    delete_blueprint_library = 64,
    delete_blueprint_record = 65,
    delete_custom_tag = 66,
    delete_logistic_group = 67,
    delete_permission_group = 68,
    delete_space_platform = 69,
    destroy_item = 70,
    destroy_opened_item = 71,
    disconnect_rolling_stock = 72,
    drag_decider_combinator_condition = 73,
    drag_decider_combinator_output = 74,
    drag_train_schedule = 75,
    drag_train_schedule_interrupt = 76,
    drag_train_wait_condition = 77,
    drop_blueprint_record = 78,
    drop_item = 79,
    edit_blueprint_tool_preview = 80,
    edit_custom_tag = 81,
    edit_display_panel = 82,
    edit_display_panel_always_show = 83,
    edit_display_panel_icon = 84,
    edit_display_panel_parameters = 85,
    edit_display_panel_show_in_chart = 86,
    edit_interrupt = 87,
    edit_permission_group = 88,
    edit_pin = 89,
    enable_transitional_requests = 90,
    export_blueprint = 91,
    fast_entity_split = 92,
    fast_entity_transfer = 93,
    flip_entity = 94,
    flush_opened_entity_fluid = 95,
    flush_opened_entity_specific_fluid = 96,
    go_to_train_station = 97,
    grab_blueprint_record = 98,
    gui_checked_state_changed = 99,
    gui_click = 100,
    gui_confirmed = 101,
    gui_elem_changed = 102,
    gui_hover = 103,
    gui_leave = 104,
    gui_location_changed = 105,
    gui_selected_tab_changed = 106,
    gui_selection_state_changed = 107,
    gui_switch_state_changed = 108,
    gui_text_changed = 109,
    gui_value_changed = 110,
    import_blueprint = 111,
    import_blueprint_string = 112,
    import_blueprints_filtered = 113,
    import_permissions_string = 114,
    instantly_create_space_platform = 115,
    inventory_split = 116,
    inventory_transfer = 117,
    land_at_planet = 118,
    launch_rocket = 119,
    lua_shortcut = 120,
    map_editor_action = 121,
    market_offer = 122,
    mod_settings_changed = 123,
    modify_decider_combinator_condition = 124,
    modify_decider_combinator_output = 125,
    move_research = 126,
    open_achievements_gui = 127,
    open_blueprint_library_gui = 128,
    open_blueprint_record = 129,
    open_bonus_gui = 130,
    open_character_gui = 131,
    open_current_vehicle_gui = 132,
    open_equipment = 133,
    open_global_electric_network_gui = 134,
    open_gui = 135,
    open_item = 136,
    open_logistics_gui = 137,
    open_mod_item = 138,
    open_new_platform_button_from_rocket_silo = 139,
    open_opened_entity_grid = 140,
    open_parent_of_opened_item = 141,
    open_production_gui = 142,
    open_train_gui = 143,
    open_train_station_gui = 144,
    open_trains_gui = 145,
    parametrise_blueprint = 146,
    paste_entity_settings = 147,
    pin_alert_group = 148,
    pin_custom_alert = 149,
    pin_search_result = 150,
    pipette = 151,
    place_equipment = 152,
    quick_bar_pick_slot = 153,
    quick_bar_set_selected_page = 154,
    quick_bar_set_slot = 155,
    reassign_blueprint = 156,
    redo = 157,
    remote_view_entity = 158,
    remote_view_surface = 159,
    remove_cables = 160,
    remove_decider_combinator_condition = 161,
    remove_decider_combinator_output = 162,
    remove_logistic_section = 163,
    remove_pin = 164,
    remove_train_interrupt = 165,
    remove_train_station = 166,
    rename_interrupt = 167,
    rename_space_platform = 168,
    reorder_logistic_section = 169,
    request_missing_construction_materials = 170,
    reset_assembling_machine = 171,
    reverse_select_area = 172,
    rotate_entity = 173,
    select_area = 174,
    select_asteroid_chunk_slot = 175,
    select_blueprint_entities = 176,
    select_entity_filter_slot = 177,
    select_entity_slot = 178,
    select_item_filter = 179,
    select_mapper_slot_from = 180,
    select_mapper_slot_to = 181,
    select_next_valid_gun = 182,
    select_tile_slot = 183,
    send_spidertron = 184,
    send_stack_to_trash = 185,
    send_stacks_to_trash = 186,
    send_train_to_pin_target = 187,
    set_behavior_mode = 188,
    set_car_weapons_control = 189,
    set_cheat_mode_quality = 190,
    set_circuit_condition = 191,
    set_circuit_mode_of_operation = 192,
    set_combinator_description = 193,
    set_copy_color_from_train_stop = 194,
    set_deconstruction_item_tile_selection_mode = 195,
    set_deconstruction_item_trees_and_rocks_only = 196,
    set_entity_color = 197,
    set_entity_energy_property = 198,
    set_filter = 199,
    set_ghost_cursor = 200,
    set_heat_interface_mode = 201,
    set_heat_interface_temperature = 202,
    set_infinity_container_filter_item = 203,
    set_infinity_container_remove_unfiltered_items = 204,
    set_infinity_pipe_filter = 205,
    set_inserter_max_stack_size = 206,
    set_inventory_bar = 207,
    set_lamp_always_on = 208,
    set_linked_container_link_i_d = 209,
    set_logistic_filter_item = 210,
    set_logistic_network_name = 211,
    set_logistic_section_active = 212,
    set_player_color = 213,
    set_pump_fluid_filter = 214,
    set_request_from_buffers = 215,
    set_research_finished_stops_game = 216,
    set_rocket_silo_send_to_orbit_automated_mode = 217,
    set_schedule_record_allow_unloading = 218,
    set_signal = 219,
    set_splitter_priority = 220,
    set_spoil_priority = 221,
    set_train_stop_priority = 222,
    set_train_stopped = 223,
    set_trains_limit = 224,
    set_turret_ignore_unlisted = 225,
    set_use_inserter_filters = 226,
    set_vehicle_automatic_targeting_parameters = 227,
    setup_assembling_machine = 228,
    setup_blueprint = 229,
    setup_single_blueprint_record = 230,
    spawn_item = 231,
    spectator_change_surface = 232,
    stack_split = 233,
    stack_transfer = 234,
    start_repair = 235,
    start_research = 236,
    start_walking = 237,
    stop_drag_build = 238,
    swap_logistic_filter_items = 239,
    switch_connect_to_logistic_network = 240,
    switch_constant_combinator_state = 241,
    switch_inserter_filter_mode_state = 242,
    switch_loader_filter_mode = 243,
    switch_mining_drill_filter_mode_state = 244,
    switch_power_switch_state = 245,
    take_equipment = 246,
    toggle_artillery_auto_targeting = 247,
    toggle_deconstruction_item_entity_filter_mode = 248,
    toggle_deconstruction_item_tile_filter_mode = 249,
    toggle_driving = 250,
    toggle_enable_vehicle_logistics_while_moving = 251,
    toggle_entity_logistic_requests = 252,
    toggle_equipment_movement_bonus = 253,
    toggle_map_editor = 254,
    toggle_personal_logistic_requests = 255,
    toggle_personal_roboport = 256,
    toggle_selected_entity = 257,
    toggle_show_entity_info = 258,
    translate_string = 259,
    trash_not_requested_items = 260,
    undo = 261,
    upgrade = 262,
    upgrade_opened_blueprint_by_item = 263,
    upgrade_opened_blueprint_by_record = 264,
    use_item = 265,
    wire_dragging = 266,
    write_to_console = 267
}
enum input_method {
    game_controller = 1,
    keyboard_and_mouse = 0
}
enum inventory {
    artillery_turret_ammo = 43,
    artillery_wagon_ammo = 44,
    assembling_machine_dump = 25,
    assembling_machine_input = 22,
    assembling_machine_modules = 24,
    assembling_machine_output = 23,
    beacon_modules = 41,
    burnt_result = 1,
    car_ammo = 37,
    car_trash = 38,
    car_trunk = 36,
    cargo_landing_pad_main = 50,
    cargo_landing_pad_trash = 51,
    cargo_unit = 35,
    cargo_wagon = 39,
    character_ammo = 9,
    character_armor = 10,
    character_corpse = 42,
    character_guns = 8,
    character_main = 7,
    character_trash = 12,
    character_vehicle = 11,
    chest = 2,
    editor_ammo = 16,
    editor_armor = 17,
    editor_guns = 15,
    editor_main = 14,
    fuel = 0,
    furnace_modules = 6,
    furnace_result = 5,
    furnace_source = 4,
    god_main = 13,
    hub_main = 48,
    hub_trash = 49,
    item_main = 29,
    lab_input = 26,
    lab_modules = 27,
    logistic_container_trash = 3,
    mining_drill_modules = 28,
    roboport_material = 19,
    roboport_robot = 18,
    robot_cargo = 20,
    robot_repair = 21,
    rocket_silo_input = 32,
    rocket_silo_modules = 34,
    rocket_silo_output = 33,
    rocket_silo_rocket = 30,
    rocket_silo_trash = 31,
    spider_ammo = 46,
    spider_trash = 47,
    spider_trunk = 45,
    turret_ammo = 40
}
enum logistic_member_index {
    character_provider = 4,
    character_requester = 2,
    character_storage = 3,
    generic_on_off_behavior = 5,
    logistic_container = 0,
    spidertron_requester = 6,
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
enum logistic_section_type {
    circuit_controlled = 1,
    manual = 0,
    /**
     * Used by space platform hubs.
     */
    request_missing_materials_controlled = 3,
    /**
     * Used by rocket silos.
     */
    transitional_request_controlled = 2
}
enum mouse_button_type {
    left = 1,
    middle = 3,
    none = 0,
    right = 2
}
enum moving_state {
    adaptive = 2,
    moving = 1,
    stale = 0,
    stuck = 3
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
 * This define describes all top-level prototypes and their associated subtypes. It is organized as a lookup table, meaning the values of all the defines is `0`. As an example, `defines.prototypes['entity']` looks like `{furnace=0, inserter=0, container=0, ...}`.
 */
namespace prototypes {
    enum achievement {
        achievement = 0,
        'build-entity-achievement' = 1,
        'change-surface-achievement' = 2,
        'combat-robot-count-achievement' = 3,
        'complete-objective-achievement' = 4,
        'construct-with-robots-achievement' = 5,
        'create-platform-achievement' = 6,
        'deconstruct-with-robots-achievement' = 7,
        'deliver-by-robots-achievement' = 8,
        'deplete-resource-achievement' = 9,
        'destroy-cliff-achievement' = 10,
        'dont-build-entity-achievement' = 11,
        'dont-craft-manually-achievement' = 12,
        'dont-kill-manually-achievement' = 13,
        'dont-research-before-researching-achievement' = 14,
        'dont-use-entity-in-energy-production-achievement' = 15,
        'equip-armor-achievement' = 16,
        'group-attack-achievement' = 17,
        'kill-achievement' = 18,
        'module-transfer-achievement' = 19,
        'place-equipment-achievement' = 20,
        'player-damaged-achievement' = 21,
        'produce-achievement' = 22,
        'produce-per-hour-achievement' = 23,
        'research-achievement' = 24,
        'research-with-science-pack-achievement' = 25,
        'shoot-achievement' = 26,
        'space-connection-distance-traveled-achievement' = 27,
        'train-path-achievement' = 28,
        'use-entity-in-energy-production-achievement' = 29,
        'use-item-achievement' = 30
    }
    /**
     * @customName active-trigger
     */
    enum active_trigger {
        'chain-active-trigger' = 0,
        'delayed-active-trigger' = 1
    }
    /**
     * @customName airborne-pollutant
     */
    enum airborne_pollutant {
        'airborne-pollutant' = 0
    }
    /**
     * @customName ambient-sound
     */
    enum ambient_sound {
        'ambient-sound' = 0
    }
    /**
     * @customName ammo-category
     */
    enum ammo_category {
        'ammo-category' = 0
    }
    enum animation {
        animation = 0
    }
    /**
     * @customName asteroid-chunk
     */
    enum asteroid_chunk {
        'asteroid-chunk' = 0
    }
    /**
     * @customName autoplace-control
     */
    enum autoplace_control {
        'autoplace-control' = 0
    }
    /**
     * @customName burner-usage
     */
    enum burner_usage {
        'burner-usage' = 0
    }
    /**
     * @customName collision-layer
     */
    enum collision_layer {
        'collision-layer' = 0
    }
    /**
     * @customName custom-event
     */
    enum custom_event {
        'custom-event' = 0
    }
    /**
     * @customName custom-input
     */
    enum custom_input {
        'custom-input' = 0
    }
    /**
     * @customName damage-type
     */
    enum damage_type {
        'damage-type' = 0
    }
    enum decorative {
        'optimized-decorative' = 0
    }
    /**
     * @customName deliver-category
     */
    enum deliver_category {
        'deliver-category' = 0
    }
    /**
     * @customName deliver-impact-combination
     */
    enum deliver_impact_combination {
        'deliver-impact-combination' = 0
    }
    /**
     * @customName editor-controller
     */
    enum editor_controller {
        'editor-controller' = 0
    }
    enum entity {
        accumulator = 0,
        'agricultural-tower' = 1,
        'ammo-turret' = 2,
        'arithmetic-combinator' = 3,
        arrow = 4,
        'artillery-flare' = 5,
        'artillery-projectile' = 6,
        'artillery-turret' = 7,
        'artillery-wagon' = 8,
        'assembling-machine' = 9,
        asteroid = 10,
        'asteroid-collector' = 11,
        beacon = 12,
        beam = 13,
        boiler = 14,
        'burner-generator' = 15,
        'capture-robot' = 16,
        car = 17,
        'cargo-bay' = 18,
        'cargo-landing-pad' = 19,
        'cargo-pod' = 20,
        'cargo-wagon' = 21,
        character = 22,
        'character-corpse' = 23,
        cliff = 24,
        'combat-robot' = 25,
        'constant-combinator' = 26,
        'construction-robot' = 27,
        container = 28,
        corpse = 29,
        'curved-rail-a' = 30,
        'curved-rail-b' = 31,
        'decider-combinator' = 32,
        'deconstructible-tile-proxy' = 33,
        'display-panel' = 34,
        'electric-energy-interface' = 35,
        'electric-pole' = 36,
        'electric-turret' = 37,
        'elevated-curved-rail-a' = 38,
        'elevated-curved-rail-b' = 39,
        'elevated-half-diagonal-rail' = 40,
        'elevated-straight-rail' = 41,
        'entity-ghost' = 42,
        explosion = 43,
        fire = 44,
        fish = 45,
        'fluid-turret' = 46,
        'fluid-wagon' = 47,
        furnace = 48,
        'fusion-generator' = 49,
        'fusion-reactor' = 50,
        gate = 51,
        generator = 52,
        'half-diagonal-rail' = 53,
        'heat-interface' = 54,
        'heat-pipe' = 55,
        'highlight-box' = 56,
        'infinity-container' = 57,
        'infinity-pipe' = 58,
        inserter = 59,
        'item-entity' = 60,
        'item-request-proxy' = 61,
        lab = 62,
        lamp = 63,
        'land-mine' = 64,
        'lane-splitter' = 65,
        'legacy-curved-rail' = 66,
        'legacy-straight-rail' = 67,
        lightning = 68,
        'lightning-attractor' = 69,
        'linked-belt' = 70,
        'linked-container' = 71,
        loader = 72,
        'loader-1x1' = 73,
        locomotive = 74,
        'logistic-container' = 75,
        'logistic-robot' = 76,
        market = 77,
        'mining-drill' = 78,
        'offshore-pump' = 79,
        'particle-source' = 80,
        pipe = 81,
        'pipe-to-ground' = 82,
        plant = 83,
        'player-port' = 84,
        'power-switch' = 85,
        'programmable-speaker' = 86,
        projectile = 87,
        pump = 88,
        radar = 89,
        'rail-chain-signal' = 90,
        'rail-ramp' = 91,
        'rail-remnants' = 92,
        'rail-signal' = 93,
        'rail-support' = 94,
        reactor = 95,
        resource = 96,
        roboport = 97,
        'rocket-silo' = 98,
        'rocket-silo-rocket' = 99,
        'rocket-silo-rocket-shadow' = 100,
        segment = 101,
        'segmented-unit' = 102,
        'selector-combinator' = 103,
        'simple-entity' = 104,
        'simple-entity-with-force' = 105,
        'simple-entity-with-owner' = 106,
        'smoke-with-trigger' = 107,
        'solar-panel' = 108,
        'space-platform-hub' = 109,
        'speech-bubble' = 110,
        'spider-leg' = 111,
        'spider-unit' = 112,
        'spider-vehicle' = 113,
        splitter = 114,
        sticker = 115,
        'storage-tank' = 116,
        'straight-rail' = 117,
        stream = 118,
        'temporary-container' = 119,
        thruster = 120,
        'tile-ghost' = 121,
        'train-stop' = 122,
        'transport-belt' = 123,
        tree = 124,
        turret = 125,
        'underground-belt' = 126,
        unit = 127,
        'unit-spawner' = 128,
        wall = 129
    }
    enum equipment {
        'active-defense-equipment' = 0,
        'battery-equipment' = 1,
        'belt-immunity-equipment' = 2,
        'energy-shield-equipment' = 3,
        'equipment-ghost' = 4,
        'generator-equipment' = 5,
        'inventory-bonus-equipment' = 6,
        'movement-bonus-equipment' = 7,
        'night-vision-equipment' = 8,
        'roboport-equipment' = 9,
        'solar-panel-equipment' = 10
    }
    /**
     * @customName equipment-category
     */
    enum equipment_category {
        'equipment-category' = 0
    }
    /**
     * @customName equipment-grid
     */
    enum equipment_grid {
        'equipment-grid' = 0
    }
    enum fluid {
        fluid = 0
    }
    enum font {
        font = 0
    }
    /**
     * @customName fuel-category
     */
    enum fuel_category {
        'fuel-category' = 0
    }
    /**
     * @customName god-controller
     */
    enum god_controller {
        'god-controller' = 0
    }
    /**
     * @customName gui-style
     */
    enum gui_style {
        'gui-style' = 0
    }
    /**
     * @customName impact-category
     */
    enum impact_category {
        'impact-category' = 0
    }
    enum item {
        ammo = 0,
        armor = 1,
        blueprint = 2,
        'blueprint-book' = 3,
        capsule = 4,
        'copy-paste-tool' = 5,
        'deconstruction-item' = 6,
        gun = 7,
        item = 8,
        'item-with-entity-data' = 9,
        'item-with-inventory' = 10,
        'item-with-label' = 11,
        'item-with-tags' = 12,
        module = 13,
        'rail-planner' = 14,
        'repair-tool' = 15,
        'selection-tool' = 16,
        'space-platform-starter-pack' = 17,
        'spidertron-remote' = 18,
        tool = 19,
        'upgrade-item' = 20
    }
    /**
     * @customName item-group
     */
    enum item_group {
        'item-group' = 0
    }
    /**
     * @customName item-subgroup
     */
    enum item_subgroup {
        'item-subgroup' = 0
    }
    /**
     * @customName map-gen-presets
     */
    enum map_gen_presets {
        'map-gen-presets' = 0
    }
    /**
     * @customName map-settings
     */
    enum map_settings {
        'map-settings' = 0
    }
    /**
     * @customName module-category
     */
    enum module_category {
        'module-category' = 0
    }
    /**
     * @customName mouse-cursor
     */
    enum mouse_cursor {
        'mouse-cursor' = 0
    }
    /**
     * @customName noise-expression
     */
    enum noise_expression {
        'noise-expression' = 0
    }
    /**
     * @customName noise-function
     */
    enum noise_function {
        'noise-function' = 0
    }
    enum particle {
        'optimized-particle' = 0
    }
    enum procession {
        procession = 0
    }
    /**
     * @customName procession-layer-inheritance-group
     */
    enum procession_layer_inheritance_group {
        'procession-layer-inheritance-group' = 0
    }
    enum quality {
        quality = 0
    }
    enum recipe {
        recipe = 0
    }
    /**
     * @customName recipe-category
     */
    enum recipe_category {
        'recipe-category' = 0
    }
    /**
     * @customName remote-controller
     */
    enum remote_controller {
        'remote-controller' = 0
    }
    /**
     * @customName resource-category
     */
    enum resource_category {
        'resource-category' = 0
    }
    enum shortcut {
        shortcut = 0
    }
    enum sound {
        sound = 0
    }
    /**
     * @customName space-connection
     */
    enum space_connection {
        'space-connection' = 0
    }
    /**
     * @customName space-location
     */
    enum space_location {
        planet = 0,
        'space-location' = 1
    }
    /**
     * @customName spectator-controller
     */
    enum spectator_controller {
        'spectator-controller' = 0
    }
    enum sprite {
        sprite = 0
    }
    enum surface {
        surface = 0
    }
    /**
     * @customName surface-property
     */
    enum surface_property {
        'surface-property' = 0
    }
    enum technology {
        technology = 0
    }
    enum tile {
        tile = 0
    }
    /**
     * @customName tile-effect
     */
    enum tile_effect {
        'tile-effect' = 0
    }
    /**
     * @customName tips-and-tricks-item
     */
    enum tips_and_tricks_item {
        'tips-and-tricks-item' = 0
    }
    /**
     * @customName tips-and-tricks-item-category
     */
    enum tips_and_tricks_item_category {
        'tips-and-tricks-item-category' = 0
    }
    /**
     * @customName trigger-target-type
     */
    enum trigger_target_type {
        'trigger-target-type' = 0
    }
    /**
     * @customName trivial-smoke
     */
    enum trivial_smoke {
        'trivial-smoke' = 0
    }
    enum tutorial {
        tutorial = 0
    }
    /**
     * @customName utility-constants
     */
    enum utility_constants {
        'utility-constants' = 0
    }
    /**
     * @customName utility-sounds
     */
    enum utility_sounds {
        'utility-sounds' = 0
    }
    /**
     * @customName utility-sprites
     */
    enum utility_sprites {
        'utility-sprites' = 0
    }
    /**
     * @customName virtual-signal
     */
    enum virtual_signal {
        'virtual-signal' = 0
    }
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
enum rail_layer {
    elevated = 1,
    ground = 0
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
    agriculture_tower_gui = 4,
    arithmetic_combinator_gui = 5,
    armor_gui = 6,
    assembling_machine_gui = 7,
    assembling_machine_select_recipe_gui = 8,
    asteroid_collector_gui = 9,
    beacon_gui = 10,
    blueprint_book_gui = 11,
    blueprint_library_gui = 12,
    blueprint_setup_gui = 13,
    bonus_gui = 14,
    burner_equipment_gui = 15,
    car_gui = 16,
    cargo_landing_pad_gui = 17,
    constant_combinator_gui = 18,
    container_gui = 19,
    controller_gui = 20,
    decider_combinator_gui = 21,
    deconstruction_item_gui = 22,
    display_panel_gui = 23,
    electric_energy_interface_gui = 24,
    electric_network_gui = 25,
    entity_variations_gui = 26,
    entity_with_energy_source_gui = 27,
    equipment_grid_gui = 28,
    furnace_gui = 29,
    generic_on_off_entity_gui = 30,
    ghost_picker_gui = 31,
    global_electric_network_gui = 32,
    heat_interface_gui = 33,
    infinity_pipe_gui = 34,
    inserter_gui = 35,
    item_with_inventory_gui = 36,
    lab_gui = 37,
    lamp_gui = 38,
    linked_container_gui = 39,
    loader_gui = 40,
    logistic_gui = 41,
    market_gui = 42,
    mining_drill_gui = 43,
    other_player_gui = 44,
    permissions_gui = 45,
    pick_stop_gui = 46,
    pipe_gui = 47,
    power_switch_gui = 48,
    production_gui = 49,
    programmable_speaker_gui = 50,
    pump_gui = 51,
    rail_signal_base_gui = 52,
    reactor_gui = 53,
    resource_entity_gui = 54,
    roboport_gui = 55,
    rocket_silo_gui = 56,
    script_inventory_gui = 57,
    selector_combinator_gui = 58,
    server_config_gui = 59,
    space_platform_hub_gui = 60,
    spider_vehicle_gui = 61,
    splitter_gui = 62,
    standalone_character_gui = 63,
    storage_tank_gui = 64,
    tile_variations_gui = 65,
    tips_and_tricks_gui = 66,
    train_gui = 67,
    train_stop_gui = 68,
    trains_gui = 69,
    transport_belt_gui = 70,
    turret_gui = 71,
    upgrade_item_gui = 72,
    wall_gui = 73
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
enum robot_order_type {
    /**
     * Construct a ghost.
     */
    construct = 0,
    /**
     * Deconstruct an entity.
     */
    deconstruct = 4,
    /**
     * Deliver an item.
     */
    deliver = 2,
    /**
     * Deliver specific items to an entity (item request proxy).
     */
    deliver_items = 5,
    /**
     * Explode a cliff.
     */
    explode_cliff = 7,
    /**
     * Pickup an item.
     */
    pickup = 1,
    /**
     * Pickup items from an entity (item request proxy).
     */
    pickup_items = 8,
    /**
     * Repair an entity.
     */
    repair = 3,
    /**
     * Upgrade an entity.
     */
    upgrade = 6
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
enum selection_mode {
    alt_reverse_select = 3,
    alt_select = 1,
    reverse_select = 2,
    select = 0
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
enum space_platform_state {
    /**
     * Doesn't have anywhere to go.
     */
    no_path = 6,
    /**
     * Doesn't have any stations in schedule.
     */
    no_schedule = 5,
    /**
     * Following the path.
     */
    on_the_path = 3,
    /**
     * Paused.
     */
    paused = 8,
    /**
     * Starter pack is on the way.
     */
    starter_pack_on_the_way = 2,
    /**
     * Starter pack was requested from the logistics system.
     */
    starter_pack_requested = 1,
    /**
     * Waiting at a station.
     */
    waiting_at_station = 7,
    /**
     * Platform is ready to leave this planet and does not accept deliveries.
     */
    waiting_for_departure = 4,
    /**
     * Waiting for a starter pack.
     */
    waiting_for_starter_pack = 0
}
enum target_type {
    commandable = 15,
    custom_chart_tag = 16,
    entity = 0,
    equipment = 1,
    equipment_grid = 2,
    gui_element = 17,
    item = 3,
    logistic_cell = 4,
    logistic_network = 5,
    logistic_section = 6,
    permission_group = 7,
    planet = 8,
    player = 9,
    rail_path = 10,
    render_object = 11,
    space_platform = 12,
    surface = 13,
    train = 14
}
enum train_state {
    /**
     * Braking before a rail signal.
     */
    arrive_signal = 3,
    /**
     * Braking before a station.
     */
    arrive_station = 5,
    /**
     * Same as no_path but all candidate train stops are full
     */
    destination_full = 9,
    /**
     * Can move if user explicitly sits in and rides the train.
     */
    manual_control = 7,
    /**
     * Switched to manual control and has to stop.
     */
    manual_control_stop = 6,
    /**
     * Has no path and is stopped.
     */
    no_path = 2,
    /**
     * Doesn't have anywhere to go.
     */
    no_schedule = 1,
    /**
     * Normal state -- following the path.
     */
    on_the_path = 0,
    /**
     * Waiting at a signal.
     */
    wait_signal = 4,
    /**
     * Waiting at a station.
     */
    wait_station = 8
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
enum wire_connector_id {
    circuit_green = 1,
    circuit_red = 0,
    combinator_input_green = 3,
    combinator_input_red = 2,
    combinator_output_green = 5,
    combinator_output_red = 4,
    pole_copper = 6,
    power_switch_left_copper = 7,
    power_switch_right_copper = 8
}
enum wire_origin {
    player = 0,
    radars = 2,
    script = 1
}
enum wire_type {
    copper = 2,
    green = 1,
    red = 0
}

}