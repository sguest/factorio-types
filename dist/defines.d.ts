// Factorio defines
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.86
// API version 3

declare namespace defines {
    enum alert_type {
        custom,
        entity_destroyed,
        entity_under_attack,
        no_material_for_construction,
        no_storage,
        not_enough_construction_robots,
        not_enough_repair_packs,
        train_out_of_fuel,
        turret_fire,
    }
    /**
     * AI command exit status. See {@link LuaEntity::set_command | LuaEntity::set_command}
     */
    enum behavior_result {
        deleted,
        fail,
        in_progress,
        success,
    }
    enum build_check_type {
        blueprint_ghost,
        ghost_revive,
        manual,
        manual_ghost,
        script,
        script_ghost,
    }
    /**
     * State of a chain signal.
     */
    enum chain_signal_state {
        all_open,
        none,
        none_open,
        partially_open,
    }
    enum chunk_generated_status {
        basic_tiles,
        corrected_tiles,
        custom_tiles,
        entities,
        nothing,
        tiles,
    }
    enum circuit_condition_index {
        arithmetic_combinator,
        constant_combinator,
        decider_combinator,
        inserter_circuit,
        inserter_logistic,
        lamp,
        offshore_pump,
        pump,
    }
    enum circuit_connector_id {
        accumulator,
        combinator_input,
        combinator_output,
        constant_combinator,
        container,
        electric_pole,
        inserter,
        lamp,
        linked_container,
        offshore_pump,
        programmable_speaker,
        pump,
        rail_chain_signal,
        rail_signal,
        roboport,
        storage_tank,
        wall,
    }
    /**
     * Command given to units describing what they should do.
     */
    enum command {
        /**
         * Attack another entity.
         */
        attack,
        /**
         * Go to a place and attack what you see.
         */
        attack_area,
        /**
         * Go to a position and build a base there.
         */
        build_base,
        /**
         * Chain commands together, see {@link defines.compound_command | defines.compound_command}.
         */
        compound,
        /**
         * Flee from another entity.
         */
        flee,
        /**
         * Go to a specific position.
         */
        go_to_location,
        /**
         * Do what your group wants you to do.
         */
        group,
        /**
         * Stop moving and stay where you are.
         */
        stop,
        /**
         * Chill.
         */
        wander,
    }
    /**
     * How commands are joined together in a compound command (see {@link defines.command.compound | defines.command.compound}).
     */
    enum compound_command {
        /**
         * Fail on first failure. Only succeeds if all commands (executed one after another) succeed.
         */
        logical_and,
        /**
         * Succeed on first success. Only fails if all commands (executed one after another) fail.
         */
        logical_or,
        /**
         * Execute all commands in sequence and fail or succeed depending on the return status of the last command.
         */
        return_last,
    }
    namespace control_behavior {
        namespace inserter {
            enum circuit_mode_of_operation {
                enable_disable,
                none,
                read_hand_contents,
                set_filters,
                set_stack_size,
            }
            enum hand_read_mode {
                hold,
                pulse,
            }
        }
        namespace lamp {
            enum circuit_mode_of_operation {
                use_colors,
            }
        }
        namespace logistic_container {
            enum circuit_mode_of_operation {
                send_contents,
                set_requests,
            }
        }
        namespace mining_drill {
            enum resource_read_mode {
                entire_patch,
                this_miner,
            }
        }
        namespace transport_belt {
            enum content_read_mode {
                hold,
                pulse,
            }
        }
        enum type {
            /**
             * {@link LuaAccumulatorControlBehavior | LuaAccumulatorControlBehavior}
             */
            accumulator,
            /**
             * {@link LuaArithmeticCombinatorControlBehavior | LuaArithmeticCombinatorControlBehavior}
             */
            arithmetic_combinator,
            /**
             * {@link LuaConstantCombinatorControlBehavior | LuaConstantCombinatorControlBehavior}
             */
            constant_combinator,
            /**
             * {@link LuaContainerControlBehavior | LuaContainerControlBehavior}
             */
            container,
            /**
             * {@link LuaDeciderCombinatorControlBehavior | LuaDeciderCombinatorControlBehavior}
             */
            decider_combinator,
            /**
             * {@link LuaGenericOnOffControlBehavior | LuaGenericOnOffControlBehavior}
             */
            generic_on_off,
            /**
             * {@link LuaInserterControlBehavior | LuaInserterControlBehavior}
             */
            inserter,
            /**
             * {@link LuaLampControlBehavior | LuaLampControlBehavior}
             */
            lamp,
            /**
             * {@link LuaLogisticContainerControlBehavior | LuaLogisticContainerControlBehavior}
             */
            logistic_container,
            /**
             * {@link LuaMiningDrillControlBehavior | LuaMiningDrillControlBehavior}
             */
            mining_drill,
            /**
             * {@link LuaProgrammableSpeakerControlBehavior | LuaProgrammableSpeakerControlBehavior}
             */
            programmable_speaker,
            /**
             * {@link LuaRailChainSignalControlBehavior | LuaRailChainSignalControlBehavior}
             */
            rail_chain_signal,
            /**
             * {@link LuaRailSignalControlBehavior | LuaRailSignalControlBehavior}
             */
            rail_signal,
            /**
             * {@link LuaRoboportControlBehavior | LuaRoboportControlBehavior}
             */
            roboport,
            /**
             * {@link LuaStorageTankControlBehavior | LuaStorageTankControlBehavior}
             */
            storage_tank,
            /**
             * {@link LuaTrainStopControlBehavior | LuaTrainStopControlBehavior}
             */
            train_stop,
            /**
             * {@link LuaTransportBeltControlBehavior | LuaTransportBeltControlBehavior}
             */
            transport_belt,
            /**
             * {@link LuaWallControlBehavior | LuaWallControlBehavior}
             */
            wall,
        }
    }
    enum controllers {
        /**
         * The controller controls a character. This is the default controller in freeplay.
         */
        character,
        /**
         * The player can't interact with the world, and the camera pans around in a predefined manner.
         */
        cutscene,
        /**
         * The Editor Controller near ultimate power to do almost anything in the game.
         */
        editor,
        /**
         * Can't interact with the world, can only observe. Used in the multiplayer waiting-to-respawn screen.
         */
        ghost,
        /**
         * The controller isn't tied to a character. This is the default controller in sandbox.
         */
        god,
        /**
         * Can't change anything in the world but can view anything.
         */
        spectator,
    }
    namespace deconstruction_item {
        enum entity_filter_mode {
            blacklist,
            whitelist,
        }
        enum tile_filter_mode {
            blacklist,
            whitelist,
        }
        enum tile_selection_mode {
            always,
            never,
            normal,
            only,
        }
    }
    enum difficulty {
        easy,
        hard,
        normal,
    }
    namespace difficulty_settings {
        enum recipe_difficulty {
            expensive,
            normal,
        }
        enum technology_difficulty {
            expensive,
            normal,
        }
    }
    enum direction {
        east,
        north,
        northeast,
        northwest,
        south,
        southeast,
        southwest,
        west,
    }
    enum disconnect_reason {
        afk,
        banned,
        cannot_keep_up,
        desync_limit_reached,
        dropped,
        kicked,
        kicked_and_deleted,
        quit,
        reconnect,
        switching_servers,
        wrong_input,
    }
    enum distraction {
        /**
         * Attack closer enemy entities, including entities "built" by player (belts, inserters, chests).
         */
        by_anything,
        /**
         * Attack when attacked.
         */
        by_damage,
        /**
         * Attack closer enemy entities with force.
         */
        by_enemy,
        /**
         * Perform command even if someone attacks the unit.
         */
        none,
    }
    enum entity_status {
        /**
         * Used by rail signals.
         */
        cant_divide_segments,
        /**
         * Used by accumulators.
         */
        charging,
        closed_by_circuit_network,
        /**
         * Used by constant combinators: Combinator is turned off via switch in GUI.
         */
        disabled,
        disabled_by_control_behavior,
        disabled_by_script,
        /**
         * Used by accumulators.
         */
        discharging,
        /**
         * Used by crafting machines.
         */
        fluid_ingredient_shortage,
        /**
         * Used by crafting machines, boilers, burner energy sources and reactors: Reactor/burner has full burnt result inventory, boiler has full output fluidbox.
         */
        full_output,
        /**
         * Used by accumulators.
         */
        fully_charged,
        /**
         * Used by crafting machines.
         */
        item_ingredient_shortage,
        /**
         * Used by the rocket silo.
         */
        launching_rocket,
        /**
         * Used by boilers and fluid turrets: Boiler still has some fluid but is about to run out.
         */
        low_input_fluid,
        low_power,
        /**
         * Used by heat energy sources.
         */
        low_temperature,
        marked_for_deconstruction,
        /**
         * Used by mining drills when the mining fluid is missing.
         */
        missing_required_fluid,
        /**
         * Used by labs.
         */
        missing_science_packs,
        /**
         * Used by power switches.
         */
        networks_connected,
        /**
         * Used by power switches.
         */
        networks_disconnected,
        /**
         * Used by ammo turrets.
         */
        no_ammo,
        no_fuel,
        /**
         * Used by furnaces.
         */
        no_ingredients,
        /**
         * Used by boilers, fluid turrets and fluid energy sources: Boiler has no fluid to work with.
         */
        no_input_fluid,
        /**
         * Used by mining drills.
         */
        no_minable_resources,
        /**
         * Used by beacons.
         */
        no_modules_to_transmit,
        no_power,
        /**
         * Used by assembling machines.
         */
        no_recipe,
        /**
         * Used by labs.
         */
        no_research_in_progress,
        normal,
        /**
         * Used by rail signals.
         */
        not_connected_to_rail,
        /**
         * Used by generators and solar panels.
         */
        not_plugged_in_electric_network,
        opened_by_circuit_network,
        /**
         * Used by logistic containers.
         */
        out_of_logistic_network,
        /**
         * Used by the rocket silo.
         */
        preparing_rocket_for_launch,
        /**
         * Used by roboports.
         */
        recharging_after_power_outage,
        /**
         * Used by lamps.
         */
        turned_off_during_daytime,
        /**
         * Used by inserters.
         */
        waiting_for_source_items,
        /**
         * Used by inserters and mining drills.
         */
        waiting_for_space_in_destination,
        /**
         * Used by inserters targeting entity ghosts.
         */
        waiting_for_target_to_be_built,
        /**
         * Used by inserters targeting rails.
         */
        waiting_for_train,
        /**
         * Used by the rocket silo.
         */
        waiting_to_launch_rocket,
        working,
    }
    /**
     * See the {@link events page | events.html} for more info on what events contain and when they get raised.
     */
    enum events {
        on_ai_command_completed,
        on_area_cloned,
        on_biter_base_built,
        on_brush_cloned,
        on_build_base_arrived,
        on_built_entity,
        on_cancelled_deconstruction,
        on_cancelled_upgrade,
        on_character_corpse_expired,
        on_chart_tag_added,
        on_chart_tag_modified,
        on_chart_tag_removed,
        on_chunk_charted,
        on_chunk_deleted,
        on_chunk_generated,
        on_combat_robot_expired,
        on_console_chat,
        on_console_command,
        on_cutscene_cancelled,
        on_cutscene_finished,
        on_cutscene_started,
        on_cutscene_waypoint_reached,
        on_difficulty_settings_changed,
        on_entity_cloned,
        on_entity_color_changed,
        on_entity_damaged,
        on_entity_destroyed,
        on_entity_died,
        on_entity_logistic_slot_changed,
        on_entity_renamed,
        on_entity_settings_pasted,
        on_entity_spawned,
        on_equipment_inserted,
        on_equipment_removed,
        on_force_cease_fire_changed,
        on_force_created,
        on_force_friends_changed,
        on_force_reset,
        on_forces_merged,
        on_forces_merging,
        on_game_created_from_scenario,
        on_gui_checked_state_changed,
        on_gui_click,
        on_gui_closed,
        on_gui_confirmed,
        on_gui_elem_changed,
        on_gui_hover,
        on_gui_leave,
        on_gui_location_changed,
        on_gui_opened,
        on_gui_selected_tab_changed,
        on_gui_selection_state_changed,
        on_gui_switch_state_changed,
        on_gui_text_changed,
        on_gui_value_changed,
        on_land_mine_armed,
        on_lua_shortcut,
        on_marked_for_deconstruction,
        on_marked_for_upgrade,
        on_market_item_purchased,
        on_mod_item_opened,
        on_permission_group_added,
        on_permission_group_deleted,
        on_permission_group_edited,
        on_permission_string_imported,
        on_picked_up_item,
        on_player_alt_reverse_selected_area,
        on_player_alt_selected_area,
        on_player_ammo_inventory_changed,
        on_player_armor_inventory_changed,
        on_player_banned,
        on_player_built_tile,
        on_player_cancelled_crafting,
        on_player_changed_force,
        on_player_changed_position,
        on_player_changed_surface,
        on_player_cheat_mode_disabled,
        on_player_cheat_mode_enabled,
        on_player_clicked_gps_tag,
        on_player_configured_blueprint,
        on_player_configured_spider_remote,
        on_player_crafted_item,
        on_player_created,
        on_player_cursor_stack_changed,
        on_player_deconstructed_area,
        on_player_demoted,
        on_player_died,
        on_player_display_resolution_changed,
        on_player_display_scale_changed,
        on_player_driving_changed_state,
        on_player_dropped_item,
        on_player_fast_transferred,
        on_player_flushed_fluid,
        on_player_gun_inventory_changed,
        on_player_input_method_changed,
        on_player_joined_game,
        on_player_kicked,
        on_player_left_game,
        on_player_main_inventory_changed,
        on_player_mined_entity,
        on_player_mined_item,
        on_player_mined_tile,
        on_player_muted,
        on_player_pipette,
        on_player_placed_equipment,
        on_player_promoted,
        on_player_removed,
        on_player_removed_equipment,
        on_player_repaired_entity,
        on_player_respawned,
        on_player_reverse_selected_area,
        on_player_rotated_entity,
        on_player_selected_area,
        on_player_set_quick_bar_slot,
        on_player_setup_blueprint,
        on_player_toggled_alt_mode,
        on_player_toggled_map_editor,
        on_player_trash_inventory_changed,
        on_player_unbanned,
        on_player_unmuted,
        on_player_used_capsule,
        on_player_used_spider_remote,
        on_post_entity_died,
        on_pre_build,
        on_pre_chunk_deleted,
        on_pre_entity_settings_pasted,
        on_pre_ghost_deconstructed,
        on_pre_ghost_upgraded,
        on_pre_permission_group_deleted,
        on_pre_permission_string_imported,
        on_pre_player_crafted_item,
        on_pre_player_died,
        on_pre_player_left_game,
        on_pre_player_mined_item,
        on_pre_player_removed,
        on_pre_player_toggled_map_editor,
        on_pre_robot_exploded_cliff,
        on_pre_script_inventory_resized,
        on_pre_surface_cleared,
        on_pre_surface_deleted,
        on_research_cancelled,
        on_research_finished,
        on_research_reversed,
        on_research_started,
        on_resource_depleted,
        on_robot_built_entity,
        on_robot_built_tile,
        on_robot_exploded_cliff,
        on_robot_mined,
        on_robot_mined_entity,
        on_robot_mined_tile,
        on_robot_pre_mined,
        on_rocket_launch_ordered,
        on_rocket_launched,
        on_runtime_mod_setting_changed,
        on_script_inventory_resized,
        on_script_path_request_finished,
        on_script_trigger_effect,
        on_sector_scanned,
        on_selected_entity_changed,
        on_spider_command_completed,
        on_string_translated,
        on_surface_cleared,
        on_surface_created,
        on_surface_deleted,
        on_surface_imported,
        on_surface_renamed,
        on_technology_effects_reset,
        on_tick,
        on_train_changed_state,
        on_train_created,
        on_train_schedule_changed,
        on_trigger_created_entity,
        on_trigger_fired_artillery,
        on_unit_added_to_group,
        on_unit_group_created,
        on_unit_group_finished_gathering,
        on_unit_removed_from_group,
        on_worker_robot_expired,
        script_raised_built,
        script_raised_destroy,
        script_raised_revive,
        script_raised_set_tiles,
        script_raised_teleported,
    }
    enum flow_precision_index {
        fifty_hours,
        five_seconds,
        one_hour,
        one_minute,
        one_thousand_hours,
        ten_hours,
        ten_minutes,
        two_hundred_fifty_hours,
    }
    enum game_controller_interaction {
        /**
         * Game controller will always hover this element regardless of type or state.
         */
        always,
        /**
         * Hover according to the element type and implementation.
         */
        never,
        /**
         * Never hover this element with a game controller.
         */
        normal,
    }
    enum group_state {
        attacking_distraction,
        attacking_target,
        finished,
        gathering,
        moving,
        pathfinding,
        wander_in_group,
    }
    enum gui_type {
        achievement,
        blueprint_library,
        bonus,
        controller,
        custom,
        entity,
        equipment,
        item,
        logistic,
        none,
        other_player,
        permissions,
        player_management,
        production,
        research,
        script_inventory,
        server_management,
        tile,
        trains,
        tutorials,
    }
    enum input_action {
        activate_copy,
        activate_cut,
        activate_paste,
        add_permission_group,
        add_train_station,
        admin_action,
        alt_reverse_select_area,
        alt_select_area,
        alt_select_blueprint_entities,
        alternative_copy,
        begin_mining,
        begin_mining_terrain,
        build,
        build_rail,
        build_terrain,
        cancel_craft,
        cancel_deconstruct,
        cancel_new_blueprint,
        cancel_research,
        cancel_upgrade,
        change_active_character_tab,
        change_active_item_group_for_crafting,
        change_active_item_group_for_filters,
        change_active_quick_bar,
        change_arithmetic_combinator_parameters,
        change_decider_combinator_parameters,
        change_entity_label,
        change_item_description,
        change_item_label,
        change_multiplayer_config,
        change_picking_state,
        change_programmable_speaker_alert_parameters,
        change_programmable_speaker_circuit_parameters,
        change_programmable_speaker_parameters,
        change_riding_state,
        change_shooting_state,
        change_train_stop_station,
        change_train_wait_condition,
        change_train_wait_condition_data,
        clear_cursor,
        connect_rolling_stock,
        copy,
        copy_entity_settings,
        copy_opened_blueprint,
        copy_opened_item,
        craft,
        cursor_split,
        cursor_transfer,
        custom_input,
        cycle_blueprint_book_backwards,
        cycle_blueprint_book_forwards,
        deconstruct,
        delete_blueprint_library,
        delete_blueprint_record,
        delete_custom_tag,
        delete_permission_group,
        destroy_item,
        destroy_opened_item,
        disconnect_rolling_stock,
        drag_train_schedule,
        drag_train_wait_condition,
        drop_blueprint_record,
        drop_item,
        edit_blueprint_tool_preview,
        edit_custom_tag,
        edit_permission_group,
        export_blueprint,
        fast_entity_split,
        fast_entity_transfer,
        flush_opened_entity_fluid,
        flush_opened_entity_specific_fluid,
        go_to_train_station,
        grab_blueprint_record,
        gui_checked_state_changed,
        gui_click,
        gui_confirmed,
        gui_elem_changed,
        gui_hover,
        gui_leave,
        gui_location_changed,
        gui_selected_tab_changed,
        gui_selection_state_changed,
        gui_switch_state_changed,
        gui_text_changed,
        gui_value_changed,
        import_blueprint,
        import_blueprint_string,
        import_blueprints_filtered,
        import_permissions_string,
        inventory_split,
        inventory_transfer,
        launch_rocket,
        lua_shortcut,
        map_editor_action,
        market_offer,
        mod_settings_changed,
        open_achievements_gui,
        open_blueprint_library_gui,
        open_blueprint_record,
        open_bonus_gui,
        open_character_gui,
        open_current_vehicle_gui,
        open_equipment,
        open_gui,
        open_item,
        open_logistic_gui,
        open_mod_item,
        open_parent_of_opened_item,
        open_production_gui,
        open_technology_gui,
        open_tips_and_tricks_gui,
        open_train_gui,
        open_train_station_gui,
        open_trains_gui,
        paste_entity_settings,
        place_equipment,
        quick_bar_pick_slot,
        quick_bar_set_selected_page,
        quick_bar_set_slot,
        reassign_blueprint,
        remove_cables,
        remove_train_station,
        reset_assembling_machine,
        reset_item,
        reverse_select_area,
        rotate_entity,
        select_area,
        select_blueprint_entities,
        select_entity_slot,
        select_item,
        select_mapper_slot,
        select_next_valid_gun,
        select_tile_slot,
        send_spidertron,
        set_auto_launch_rocket,
        set_autosort_inventory,
        set_behavior_mode,
        set_car_weapons_control,
        set_circuit_condition,
        set_circuit_mode_of_operation,
        set_controller_logistic_trash_filter_item,
        set_deconstruction_item_tile_selection_mode,
        set_deconstruction_item_trees_and_rocks_only,
        set_entity_color,
        set_entity_energy_property,
        set_entity_logistic_trash_filter_item,
        set_filter,
        set_flat_controller_gui,
        set_heat_interface_mode,
        set_heat_interface_temperature,
        set_infinity_container_filter_item,
        set_infinity_container_remove_unfiltered_items,
        set_infinity_pipe_filter,
        set_inserter_max_stack_size,
        set_inventory_bar,
        set_linked_container_link_i_d,
        set_logistic_filter_item,
        set_logistic_filter_signal,
        set_player_color,
        set_recipe_notifications,
        set_request_from_buffers,
        set_research_finished_stops_game,
        set_signal,
        set_splitter_priority,
        set_train_stopped,
        set_trains_limit,
        set_vehicle_automatic_targeting_parameters,
        setup_assembling_machine,
        setup_blueprint,
        setup_single_blueprint_record,
        smart_pipette,
        spawn_item,
        stack_split,
        stack_transfer,
        start_repair,
        start_research,
        start_walking,
        stop_building_by_moving,
        switch_connect_to_logistic_network,
        switch_constant_combinator_state,
        switch_inserter_filter_mode_state,
        switch_power_switch_state,
        switch_to_rename_stop_gui,
        take_equipment,
        toggle_deconstruction_item_entity_filter_mode,
        toggle_deconstruction_item_tile_filter_mode,
        toggle_driving,
        toggle_enable_vehicle_logistics_while_moving,
        toggle_entity_logistic_requests,
        toggle_equipment_movement_bonus,
        toggle_map_editor,
        toggle_personal_logistic_requests,
        toggle_personal_roboport,
        toggle_show_entity_info,
        translate_string,
        undo,
        upgrade,
        upgrade_opened_blueprint_by_item,
        upgrade_opened_blueprint_by_record,
        use_artillery_remote,
        use_item,
        wire_dragging,
        write_to_console,
    }
    enum input_method {
        game_controller,
        keyboard_and_mouse,
    }
    enum inventory {
        artillery_turret_ammo,
        artillery_wagon_ammo,
        assembling_machine_input,
        assembling_machine_modules,
        assembling_machine_output,
        beacon_modules,
        burnt_result,
        car_ammo,
        car_trunk,
        cargo_wagon,
        character_ammo,
        character_armor,
        character_corpse,
        character_guns,
        character_main,
        character_trash,
        character_vehicle,
        chest,
        editor_ammo,
        editor_armor,
        editor_guns,
        editor_main,
        fuel,
        furnace_modules,
        furnace_result,
        furnace_source,
        god_main,
        item_main,
        lab_input,
        lab_modules,
        mining_drill_modules,
        roboport_material,
        roboport_robot,
        robot_cargo,
        robot_repair,
        rocket,
        rocket_silo_input,
        rocket_silo_modules,
        rocket_silo_output,
        rocket_silo_result,
        rocket_silo_rocket,
        spider_ammo,
        spider_trash,
        spider_trunk,
        turret_ammo,
    }
    enum logistic_member_index {
        character_provider,
        character_requester,
        character_storage,
        generic_on_off_behavior,
        logistic_container,
        vehicle_storage,
    }
    enum logistic_mode {
        active_provider,
        buffer,
        none,
        passive_provider,
        requester,
        storage,
    }
    enum mouse_button_type {
        left,
        middle,
        none,
        right,
    }
    /**
     * A dictionary mapping all top-level prototypes by name to a list of their associated subtypes. This list is organized as a lookup table, meaning it maps the sub-prototype names to `0`. As an example, `defines.prototypes['entity']` looks like this: `{furnace=0, inserter=0, container=0, ...}`.
     */
    enum prototypes {
    }
    enum rail_connection_direction {
        left,
        none,
        right,
        straight,
    }
    enum rail_direction {
        back,
        front,
    }
    enum relative_gui_position {
        bottom,
        left,
        right,
        top,
    }
    enum relative_gui_type {
        accumulator_gui,
        achievement_gui,
        additional_entity_info_gui,
        admin_gui,
        arithmetic_combinator_gui,
        armor_gui,
        assembling_machine_gui,
        assembling_machine_select_recipe_gui,
        beacon_gui,
        blueprint_book_gui,
        blueprint_library_gui,
        blueprint_setup_gui,
        bonus_gui,
        burner_equipment_gui,
        car_gui,
        constant_combinator_gui,
        container_gui,
        controller_gui,
        decider_combinator_gui,
        deconstruction_item_gui,
        electric_energy_interface_gui,
        electric_network_gui,
        entity_variations_gui,
        entity_with_energy_source_gui,
        equipment_grid_gui,
        furnace_gui,
        generic_on_off_entity_gui,
        heat_interface_gui,
        infinity_pipe_gui,
        inserter_gui,
        item_with_inventory_gui,
        lab_gui,
        lamp_gui,
        linked_container_gui,
        loader_gui,
        logistic_gui,
        market_gui,
        mining_drill_gui,
        other_player_gui,
        permissions_gui,
        pipe_gui,
        power_switch_gui,
        production_gui,
        programmable_speaker_gui,
        rail_chain_signal_gui,
        rail_signal_gui,
        reactor_gui,
        rename_stop_gui,
        resource_entity_gui,
        roboport_gui,
        rocket_silo_gui,
        script_inventory_gui,
        server_config_gui,
        spider_vehicle_gui,
        splitter_gui,
        standalone_character_gui,
        storage_tank_gui,
        tile_variations_gui,
        train_gui,
        train_stop_gui,
        trains_gui,
        transport_belt_gui,
        upgrade_item_gui,
        wall_gui,
    }
    enum render_mode {
        chart,
        chart_zoomed_in,
        game,
    }
    enum rich_text_setting {
        disabled,
        enabled,
        highlight,
    }
    namespace riding {
        enum acceleration {
            accelerating,
            braking,
            nothing,
            reversing,
        }
        enum direction {
            left,
            right,
            straight,
        }
    }
    enum rocket_silo_status {
        arms_advance,
        arms_retract,
        building_rocket,
        create_rocket,
        doors_closing,
        doors_opened,
        doors_opening,
        engine_starting,
        launch_started,
        launch_starting,
        lights_blinking_close,
        lights_blinking_open,
        rocket_flying,
        rocket_ready,
        rocket_rising,
    }
    enum shooting {
        not_shooting,
        shooting_enemies,
        shooting_selected,
    }
    /**
     * State of an ordinary rail signal.
     */
    enum signal_state {
        /**
         * Red.
         */
        closed,
        /**
         * Green.
         */
        open,
        /**
         * Orange.
         */
        reserved,
        /**
         * Red - From circuit network.
         */
        reserved_by_circuit_network,
    }
    enum train_state {
        /**
         * Braking before a rail signal.
         */
        arrive_signal,
        /**
         * Braking before a station.
         */
        arrive_station,
        /**
         * Same as no_path but all candidate train stops are full
         */
        destination_full,
        /**
         * Can move if user explicitly sits in and rides the train.
         */
        manual_control,
        /**
         * Switched to manual control and has to stop.
         */
        manual_control_stop,
        /**
         * Has no path and is stopped.
         */
        no_path,
        /**
         * Doesn't have anywhere to go.
         */
        no_schedule,
        /**
         * Normal state -- following the path.
         */
        on_the_path,
        /**
         * Had path and lost it -- must stop.
         */
        path_lost,
        /**
         * Waiting at a signal.
         */
        wait_signal,
        /**
         * Waiting at a station.
         */
        wait_station,
    }
    enum transport_line {
        left_line,
        left_split_line,
        left_underground_line,
        right_line,
        right_split_line,
        right_underground_line,
        secondary_left_line,
        secondary_left_split_line,
        secondary_right_line,
        secondary_right_split_line,
    }
    enum wire_connection_id {
        electric_pole,
        power_switch_left,
        power_switch_right,
    }
    enum wire_type {
        copper,
        green,
        red,
    }
}