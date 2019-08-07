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

// ----

    namespace control_behavior {
        enum type {

        }
    }

    enum events {
        on_tick,
    }

    enum inventory {
        character_armor,
    }

    enum input_action {
    }
}
