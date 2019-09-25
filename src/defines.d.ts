declare namespace defines {
    enum direction {
        north,
        northeast,
        east,
        southeast,
        south,
        southwest,
        west,
        northwest,
    }

    enum difficulty {
        easy,
        normal,
        hard,
    }

    namespace difficulty_settings {
        enum recipe_difficulty {
            normal,
            expensive,
        }

        enum technology_difficulty {
            normal,
            expensive,
        }
    }

    enum flow_precision_index {
        one_second,
        one_minute,
        ten_minutes,
        one_hour,
        ten_hours,
        fifty_hours,
        two_hundred_fifty_hours,
        one_thousand_hours,
    }

    enum gui_type {
        none,
        entity,
        research,
        controller,
        production,
        item,
        bonus,
        trains,
        achievement,
        blueprint_library,
        equipment,
        logistic,
        other_player,
        kills,
        permissions,
        tutorials,
        custom,
        server_management,
        player_management,
        tile,
    }

    namespace riding {
        enum acceleration {
            nothing,
            acceleration,
            braking,
            reversing,
        }

        enum direction {
            left,
            straight,
            right,
        }
    }

    enum shooting {
        not_shooting,
        shooting_enemies,
        shooting_selected,
    }

    enum command {
        attack = 0,
        go_to_location = 1,
        compound = 2,
        group = 3,
        attack_area = 4,
        wander = 5,
        flee = 6,
        stop = 7,
        build_base = 8,
    }

    enum compound_command {
        logical_and,
        logical_or,
        return_last,
    }

    enum distraction {
        none,
        by_enemy,
        by_anything,
        by_damage,
    }

    enum wire_type {
        red = 0,
        green = 1,
        copper = 2,
    }

    enum rail_direction {
        front,
        back,
    }

    enum rail_connection_direction {
        left,
        straight,
        right,
        none,
    }

    enum circuit_connector_id {
        accumulator,
        constant_combinator,
        container,
        programmable_speaker,
        rail_signal,
        rail_chain_signal,
        roboport,
        storage_tank,
        wall,
        electric_pole,
        inserter,
        lamp,
        combinator_input,
        combinator_output,
        offshore_pump,
        pump,
    }

    enum logistic_member_index {
        logistic_container,
        vehicle_storage,
        character_requester,
        character_storage,
        character_provider,
        generic_on_off_behavior,
    }

    enum logistic_mode {
        none,
        active_provider,
        storage,
        requester,
        passive_provider,
        buffer,
    }

    enum signal_state {
        open,
        closed,
        reserved,
        reserved_by_circuit_network,
    }

    enum chain_signal_state {
        none,
        all_open,
        partially_open,
        none_open,
    }

    enum entity_status {
        working,
        no_power,
        no_fuel,
        no_recipe,
        no_input_fluid,
        no_research_in_progress,
        no_minable_resources,
        low_input_fluid,
        low_power,
        disabled_by_control_behavior,
        disabled_by_script,
        fluid_ingredient_shortage,
        fluid_production_overload,
        marked_for_destruction,
        missing_required_fuild,
        missing_science_packs,
        waiting_for_source_items,
        waiting_for_space_in_destination,
        waiting_to_launch_rocket,
    }

    enum train_state {
        on_the_path,
        path_lost,
        no_schedule,
        no_path,
        arrive_signal,
        wait_signal,
        arrive_station,
        wait_station,
        manual_control_stop,
        manual_control,
    }

    enum controllers {
        ghost,
        character,
        god,
        editor,
        cutscene,
        spectator,
    }

    enum alert_type {
        entity_destroyed,
        entity_under_attack,
        not_enough_construction_robots,
        no_material_for_construction,
        not_enough_repair_packs,
        turret_fire,
        custom,
        no_storage,
        train_out_of_fuel,
        fluid_mixing,
    }

    enum render_mode {
        game,
        chart,
        chart_zoomed_in,
    }

    enum build_check_type {
        script,
        manual,
        ghost_place,
        ghost_revive,
    }

    enum chunk_generated_status {
        nothing,
        custom_tiles,
        basic_tiles,
        corrected_tiles,
        tiles,
        entities,
    }

    namespace deconstruction_item {
        enum entity_filter_mode {
            whitelist,
            blacklist,
        }

        enum tile_filter_mode {
            whitelist,
            blacklist,
        }

        enum tile_selection_mode {
            normal,
            always,
            never,
            only,
        }
    }

    enum group_state {
        gathering,
        moving,
        attacking_distraction,
        attacking_target,
        finished,
        pathfinding,
        wander_in_group,
    }

    enum behavior_result {
        in_progress,
        fail,
        success,
        deleted,
    }

    enum circuit_condition_index {
        inserter_circuit,
        inserter_logistic,
        lamp,
        arithmetic_combinator,
        decider_combinator,
        constant_combinator,
        offshore_pump,
        pump,
    }

    namespace control_behavior {
        namespace logistic_container {
            enum circuit_mode_of_operation {
                send_contents,
                request_contents,
            }
        }

        namespace roboport {
            enum circuit_mode_of_operation {
                read_logistics,
                read_robot_stats,
            }
        }

        namespace inserter {
            enum circuit_mode_of_operation {
                none,
                enable_disable,
                set_filters,
                read_hand_contents,
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

        namespace train_stop {
            enum circuit_mode_of_operation {
                enable_disable,
                send_to_train,
                read_from_train,
                read_stopped_train,
            }
        }

        namespace mining_drill {
            enum resource_read_mode {
                this_miner,
                entire_patch,
            }
        }

        namespace transport_belt {
            enum content_read_mode {
                pulse,
                hold,
            }
        }

        enum type {
            container,
            generic_on_off,
            inserter,
            lamp,
            logistic_container,
            roboport,
            storage_tank,
            train_stop,
            decider_combinator,
            arithmetic_combinator,
            constant_combinator,
            transport_belt,
            accumulator,
            rail_signal,
            rail_chain_signal,
            wall,
            mining_drill,
            programmable_speaker,
        }
    }

    enum events {
        on_tick,
        on_ai_command_completed,
        on_area_cloned,
        on_biter_base_built,
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
        on_cutscene_waypoint_reached,
        on_difficulty_settings_changed,
        on_entity_cloned,
        on_entity_damaged,
        on_entity_died,
        on_entity_renamed,
        on_entity_settings_pasted,
        on_entity_spawned,
        on_force_cease_fire_changed,
        on_force_created,
        on_force_friends_changed,
        on_forces_merged,
        on_forces_merging,
        on_game_created_from_scenario,
        on_gui_checked_state_changed,
        on_gui_click,
        on_gui_closed,
        on_gui_confirmed,
        on_gui_elem_changed,
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
        on_picked_up_item,
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
        on_player_configured_blueprint,
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
        on_player_gun_inventory_changed,
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
        on_player_rotated_entity,
        on_player_selected_area,
        on_player_setup_blueprint,
        on_player_toggled_alt_mode,
        on_player_toggled_map_editor,
        on_player_trash_inventory_changed,
        on_player_unbanned,
        on_player_unmuted,
        on_player_used_capsule,
        on_post_entity_died,
        on_pre_chunk_deleted,
        on_pre_entity_settings_pasted,
        on_pre_ghost_deconstructed,
        on_pre_player_crafted_item,
        on_pre_player_died,
        on_pre_player_left_game,
        on_pre_player_mined_item,
        on_pre_player_removed,
        on_pre_robot_exploded_cliff,
        on_pre_surface_cleared,
        on_pre_surface_deleted,
        on_put_item,
        on_research_finished,
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
        on_script_path_request_finished,
        on_sector_scanned,
        on_selected_entity_changed,
        on_string_translated,
        on_surface_cleared,
        on_surface_created,
        on_surface_deleted,
        on_surface_imported,
        on_surface_renamed,
        on_technology_effects_reset,
        on_train_changed_state,
        on_train_created,
        on_train_schedule_changed,
        on_trigger_created_entity,
        on_trigger_fired_artillery,
        on_unit_added_to_group,
        on_unit_group_created,
        on_unit_removed_from_group,
        script_raised_built,
        script_raised_destroy,
        script_raised_revive,
    }

// ----

    enum inventory {
        character_armor,
    }

    enum input_action {
    }
}
