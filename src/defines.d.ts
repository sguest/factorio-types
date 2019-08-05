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

// ----

    enum events {
        on_tick,
    }

    enum inventory {
        character_armor,
    }

    enum input_action {
    }
}
