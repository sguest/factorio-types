interface LuaGameScript {
    help(this:void): void
    set_game_state(this:void,
        state: {
            game_finished: boolean,
            player_won: boolean,
            next_level: string,
            can_continue: boolean,
            victorious_force: ForceSpecification,
        }): void
    get_entity_by_tag(this: void, tag: string): LuaEntity,
    show_message_dialog(this:void,
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
    take_screenshot(this: void,
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
    take_technology_screenshot(this:void,
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
    remove_offline_players(this: void, players?: (LuaPlayer | string)[]): void
    force_crc(this: void): void
    create_force(this: void, force: string): LuaForce
    merge_forces(this: void, source: ForceSpecification, destination: ForceSpecification): void
    create_surface(this: void, name: string, settings?: MapGenSettings): LuaSurface
    server_save(this: void, name?: string): void
    auto_save(this: void, name?: string): void
    delete_surface(this: void, surface: string | LuaSurface): void
    disable_replay(this: void) : void
    disable_tutorial_triggers(this: void): void
    direction_to_string(this: void, direction: defines.direction): void
    print(this: void, message: LocalisedString, color: Color): void
    create_random_generator(this: void, seed: number): LuaRandomGenerator
    check_prototype_translations(this: void): void
    play_sound(this: void,
        table: {
            path: SoundPath,
            position?: Position,
            volume_modifier?: number,
        }): boolean
    is_valid_sound_path(this: void, soundPath: SoundPath): boolean
    kick_player(this: void, playerSpecification: PlayerSpecification, reason?: string): void
    connected_players: LuaPlayer[]
}

interface LuaRandomGenerator {
    (this: void, lower?: number, upper?: number): number
    re_seed(this: void, seed: number): void
    valid: boolean
    help(): string
}

interface LuaBootstrap {
    on_event(this: void, event: defines.events | defines.events[] | string, callback: (this: void, event: event) => void): void
}

interface LuaEntity {
}

interface LuaControl {
    get_inventory(this: void, inventory: defines.inventory): LuaInventory | null
    surface: LuaSurface
    position: Position
}

interface LuaPlayer extends LuaControl {
    character?: LuaEntity
}

interface LuaSurface {
    create_entity(this:void,
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