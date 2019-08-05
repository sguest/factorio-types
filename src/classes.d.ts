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

// ----

interface LuaEntity extends LuaControl {
}

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
