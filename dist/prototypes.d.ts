// Factorio prototypes
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/prototype-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 2.0.49
// API version 6

declare namespace prototype {
/**
 * Entity with energy source with specialised animation for charging/discharging. Used for the {@link accumulator | https://wiki.factorio.com/Accumulator} entity.
 * @example ```
{
  type = "accumulator",
  name = "accumulator",
  icon = "__base__/graphics/icons/accumulator.png",
  flags = {"placeable-neutral", "player-creation"},
  minable = {mining_time = 0.1, result = "accumulator"},
  fast_replaceable_group = "accumulator",
  max_health = 150,
  corpse = "accumulator-remnants",
  collision_box = {{-0.9, -0.9}, {0.9, 0.9}},
  selection_box = {{-1, -1}, {1, 1}},
  energy_source =
  {
    type = "electric",
    buffer_capacity = "5MJ",
    usage_priority = "tertiary",
    input_flow_limit = "300kW",
    output_flow_limit = "300kW"
  },
  chargable_graphics =
  {
    picture = accumulator_picture(),
    charge_animation = accumulator_charge(),
    charge_cooldown = 30,
    discharge_animation = accumulator_discharge(),
    discharge_cooldown = 60
  },
  water_reflection = accumulator_reflection(),
  working_sound =
  {
    main_sounds =
    {
      {
        sound = {filename = "__base__/sound/accumulator-working.ogg", volume = 0.4, modifiers = volume_multiplier("main-menu", 1.44)},
        match_volume_to_activity = true,
        activity_to_volume_modifiers = {offset = 2, inverted = true},
        fade_in_ticks = 4,
        fade_out_ticks = 20
      },
      {
        sound = {filename = "__base__/sound/accumulator-discharging.ogg", volume = 0.4, modifiers = volume_multiplier("main-menu", 1.44)},
        match_volume_to_activity = true,
        activity_to_volume_modifiers = {offset = 1},
        fade_in_ticks = 4,
        fade_out_ticks = 20
      }
    },
    idle_sound = {filename = "__base__/sound/accumulator-idle.ogg", volume = 0.35},
    max_sounds_per_prototype = 3,
    audible_distance_modifier = 0.5
  },

  circuit_connector = circuit_connector_definitions["accumulator"],
  circuit_wire_max_distance = default_circuit_wire_max_distance,

  default_output_signal = {type = "virtual", name = "signal-A"}
}
```
 */
interface AccumulatorPrototype extends EntityWithOwnerPrototype {
    chargable_graphics?: ChargableGraphics;
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    /**
     * The name of the signal that is the default for when an accumulator is connected to the circuit network.
     */
    default_output_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * The capacity of the energy source buffer specifies the capacity of the accumulator.
     */
    energy_source: ElectricEnergySource;
}
/**
 * This prototype definition is used for the in-game achievements.
 * @example ```
{
  type = "achievement",
  name = "so-long-and-thanks-for-all-the-fish",
  order = "g[secret]-a[so-long-and-thanks-for-all-the-fish]",
  icon = "__base__/graphics/achievement/so-long-and-thanks-for-all-the-fish.png",
  icon_size = 128
}
```
 */
interface AchievementPrototype extends Prototype {
    /**
     * If this is set to `false`, it is not possible to complete the achievement on the peaceful difficulty setting or when the enemy base generation settings have been changed.
     */
    allowed_without_fight?: boolean;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * The base game uses 128px icons for achievements.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * Unusable by mods, as this refers to unlocking the achievement through Steam.
     */
    steam_stats_name?: string;
}
interface AchievementPrototypeWithCondition extends AchievementPrototype {
    /**
     * The condition that needs to be met to receive the achievement. Required for `"complete-objective-achievement"`, `"dont-build-entity-achievement"`, and `"dont-craft-manually-achievement"`. Not allowed for `"dont-kill-manually-achievement"` and `"dont-research-before-researching-achievement"`. Only allowed for `"dont-use-entity-in-energy-production-achievement"` if `"last_hour_only"` is `false`.
     */
    objective_condition?: 'game-finished' | 'rocket-launched' | 'late-research';
}
/**
 * Used by {@link discharge defense | https://wiki.factorio.com/Discharge_defense} and {@link personal laser defense | https://wiki.factorio.com/Personal_laser_defense}.
 */
interface ActiveDefenseEquipmentPrototype extends EquipmentPrototype {
    attack_parameters: AttackParameters;
    automatic: boolean;
}
/**
 * The abstract base of all active trigger prototypes. Active triggers are a special type of trigger delivery mechanism that function of a period of time and do not result in the creation or deletion of entities to function. They are intended to be short-lived objects associated with a surface and cannot be cancelled until they self-destruct. Active triggers support migrations and prototype changes, but require their own named prototype to function.
 */
interface ActiveTriggerPrototype extends Prototype {
}
interface AgriculturalTowerPrototype extends EntityWithOwnerPrototype {
    /**
     * When missing, all items with {@link plant result | prototype:ItemPrototype::plant_result} will be accepted. When provided, only items on this list that have plant result will be accepted.
     */
    accepted_seeds?: ItemID[];
    arm_extending_sound?: InterruptibleSound;
    arm_extending_sound_source?: string;
    central_orienting_sound?: InterruptibleSound;
    central_orienting_sound_source?: string;
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    crane: AgriculturalCraneProperties;
    /**
     * The amount of energy this agricultural tower uses while the crane is moving.
     */
    crane_energy_usage: Energy;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    energy_source: EnergySource;
    /**
     * The amount of energy this agricultural tower uses for each planted or harvested {@link plant | prototype:PlantPrototype}.
     */
    energy_usage: Energy;
    graphics_set?: CraftingMachineGraphicsSet;
    grappler_extending_sound?: InterruptibleSound;
    grappler_extending_sound_source?: string;
    grappler_orienting_sound?: InterruptibleSound;
    grappler_orienting_sound_source?: string;
    /**
     * The minimum radius of empty space a {@link plant | prototype:PlantPrototype} requires around it to be planted.
     *
     * Must be >= 0 and <= growth_grid_tile_size / 2
     */
    growth_area_radius?: double;
    /**
     * The size of one grid tile a {@link plant | prototype:PlantPrototype} is planted into.
     *
     * Must be positive.
     */
    growth_grid_tile_size?: uint32;
    harvesting_procedure_points?: Vector3D[];
    harvesting_sound?: Sound;
    input_inventory_size: ItemStackIndex;
    output_inventory_size?: ItemStackIndex;
    planting_procedure_points?: Vector3D[];
    planting_sound?: Sound;
    /**
     * The radius represents {@link grid tiles | prototype:AgriculturalTowerPrototype::growth_grid_tile_size} which are created around the agricultural tower from its {@link collision box | prototype:EntityPrototype::collision_box}.
     *
     * Must be positive.
     */
    radius: double;
    radius_visualisation_picture?: Sprite;
    /**
     * The maximum offset from the grid tile center which will be applied to the planting spot selected by this agricultural tower.
     *
     * Must be >= 0 and < 1.
     */
    random_growth_offset?: double;
    /**
     * Whether the agricultural tower will start from a random grid tile when given a planting task.
     */
    randomize_planting_tile?: boolean;
}
/**
 * A type of pollution that can spread throughout the chunks of a map.
 */
interface AirbornePollutantPrototype extends Prototype {
    affects_evolution: boolean;
    /**
     * If true, large amounts of this pollution will cause water tiles to turn a sickly green.
     */
    affects_water_tint: boolean;
    chart_color: Color;
    /**
     * If true, trees will occasionally take damage from this pollutant type. When they do, some amount of pollution is removed from the chunk equal to the map's `pollution_restored_per_tree_damage` setting.
     */
    damages_trees?: boolean;
    icon: Sprite;
    /**
     * The translated plural string key to use when displaying this pollution's name with an amount. See {@link Tutorial:Localisation | https://wiki.factorio.com/Tutorial:Localisation}.
     */
    localised_name_with_amount?: string;
}
/**
 * This prototype is used to make sound while playing the game. This includes the game's {@link music | https://store.steampowered.com/app/436090/Factorio__Soundtrack/}, composed by Daniel James Taylor.
 * @example ```
{
  type = "ambient-sound",
  name = "world-ambience-4",
  track_type = "interlude",
  sound =
  {
    filename = "__base__/sound/ambient/world-ambience-4.ogg",
    volume = 1.2
  }
}
```
 */
interface AmbientSound {
    /**
     * Unique textual identification of the prototype.
     */
    name: string;
    /**
     * Track without a planet is bound to space platforms.
     */
    planet?: SpaceLocationID;
    /**
     * Static music track.
     *
     * One of `sound` or `variable_sound` must be defined. Both cannot be defined together.
     */
    sound?: Sound;
    track_type: AmbientSoundType;
    /**
     * Specification of the type of the prototype.
     */
    type: 'ambient-sound';
    /**
     * Variable music track.
     *
     * One of `sound` or `variable_sound` must be defined. Both cannot be defined together.
     */
    variable_sound?: VariableAmbientSoundVariableSound;
    /**
     * Cannot be less than zero.
     *
     * Cannot be defined if `track_type` is `"hero-track"`.
     */
    weight?: double;
}
/**
 * An ammo category. Each weapon has an ammo category, and can use any ammo with the same ammo category. Ammo categories can also be upgraded by technologies.
 */
interface AmmoCategory extends Prototype {
    bonus_gui_order?: Order;
    /**
     * Path to the icon file.
     *
     * Only loaded if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
}
/**
 * Ammo used for a gun.
 */
interface AmmoItemPrototype extends ItemPrototype {
    ammo_category: AmmoCategoryID;
    /**
     * When using a plain {@link AmmoType | prototype:AmmoType} (no array), the ammo type applies to everything (`"default"`).
     *
     * When using an array of AmmoTypes, they have the additional {@link AmmoType::source_type | prototype:AmmoType::source_type} property.
     */
    ammo_type: AmmoType | AmmoType[];
    /**
     * Number of shots before ammo item is consumed. Must be >= `1`.
     */
    magazine_size?: float;
    /**
     * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine. Must be >= `0`.
     */
    reload_time?: float;
    shoot_protected?: boolean;
}
/**
 * A turret that consumes {@link ammo items | prototype:AmmoItemPrototype}.
 */
interface AmmoTurretPrototype extends TurretPrototype {
    /**
     * Shift of the "alt-mode icon" relative to the turret's position.
     */
    automated_ammo_count: ItemCountType;
    energy_per_shot?: Energy;
    energy_source?: ElectricEnergySource;
    inventory_size: ItemStackIndex;
    prepare_with_no_ammo?: boolean;
}
/**
 * Specifies an animation that can be used with {@link LuaRendering::draw_animation | runtime:LuaRendering::draw_animation} at runtime.
 */
interface AnimationPrototype {
    /**
     * Only loaded if `layers` is not defined.
     *
     * If `true`, the sprite may be downsampled to half its size on load even when 'Sprite quality' graphics setting is set to 'High'. Whether downsampling happens depends on detected hardware and other graphics settings.
     */
    allow_forced_downscale?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.
     *
     * If `layers` are used, the `animation_speed` only has to be defined in one layer. All layers will run at the same speed.
     */
    animation_speed?: float;
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_runtime_tint?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_special_effect?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    blend_mode?: BlendMode;
    /**
     * Only loaded if `layers` is not defined.
     */
    dice?: uint8;
    /**
     * Only loaded if `layers` is not defined.
     */
    dice_x?: uint8;
    /**
     * Only loaded if `layers` is not defined.
     */
    dice_y?: uint8;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
     *
     * Draws first as a normal sprite, then again as a light layer. See {@link https://forums.factorio.com/91682 | https://forums.factorio.com/91682}.
     */
    draw_as_glow?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     */
    draw_as_light?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     */
    draw_as_shadow?: boolean;
    /**
     * Only loaded if `layers` is not defined. Mandatory if neither `stripes` nor `filenames` are defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName;
    /**
     * Only loaded if neither `layers` nor `stripes` are defined.
     */
    filenames?: FileName[];
    /**
     * Only loaded if `layers` is not defined.
     */
    flags?: SpriteFlags;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Can't be `0`.
     */
    frame_count?: uint32;
    /**
     * Only loaded if `layers` is not defined.
     */
    frame_sequence?: AnimationFrameSequence;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Unused.
     */
    generate_sdf?: boolean;
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
     *
     * Height of one frame in pixels, from 0-4096.
     */
    height?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     */
    invert_colors?: boolean;
    /**
     * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * `animation_speed` and `max_advance` of the first layer are used for all layers. All layers will run at the same speed.
     *
     * If this property is present, all other properties besides `name` and `type` are ignored.
     */
    layers?: Animation[];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. `0` means that all the pictures are in one horizontal line.
     */
    line_length?: uint32;
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint32;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error. Modders can ignore this property.
     */
    load_in_minimal_mode?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * If `layers` are used, `max_advance` of the first layer is used for all layers.
     *
     * Maximum amount of frames the animation can move forward in one update.
     */
    max_advance?: float;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     *
     * Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@link here | https://forums.factorio.com/viewtopic.php?p=549058#p549058}.
     */
    mipmap_count?: uint8;
    /**
     * Name of the animation. Can be used with {@link LuaRendering::draw_animation | runtime:LuaRendering::draw_animation} at runtime.
     */
    name: string;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     */
    position?: [
        SpriteSizeType,
        SpriteSizeType
    ];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Whether alpha should be pre-multiplied.
     */
    premul_alpha?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    priority?: SpritePriority;
    /**
     * Only loaded if `layers` is not defined.
     *
     * How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
     */
    repeat_count?: uint8;
    /**
     * Only loaded if `layers` is not defined.
     */
    rotate_shift?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    run_mode?: AnimationRunMode;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     */
    scale?: double;
    /**
     * Only loaded if `layers` is not defined.
     *
     * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector;
    /**
     * Only loaded if `layers` is not defined.
     *
     * The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-4096.
     */
    size?: SpriteSizeType | [
        SpriteSizeType,
        SpriteSizeType
    ];
    /**
     * Only loaded if `layers` is not defined and if `filenames` is defined.
     */
    slice?: uint32;
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: Stripe[];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Provides hint to sprite atlas system, so it can try to put sprites that are intended to be used at the same locations to the same sprite atlas.
     */
    surface?: SpriteUsageSurfaceHint;
    /**
     * Only loaded if `layers` is not defined.
     */
    tint?: Color;
    /**
     * Only loaded if `layers` is not defined.
     */
    tint_as_overlay?: boolean;
    type: 'animation';
    /**
     * Only loaded if `layers` is not defined.
     *
     * Provides hint to sprite atlas system, so it can pack sprites that are related to each other to the same sprite atlas.
     */
    usage?: SpriteUsageHint;
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
     *
     * Width of one frame in pixels, from 0-4096.
     */
    width?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Horizontal position of the animation in the source file in pixels.
     */
    x?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Vertical position of the animation in the source file in pixels.
     */
    y?: SpriteSizeType;
}
/**
 * An {@link arithmetic combinator | https://wiki.factorio.com/Arithmetic_combinator}.
 */
interface ArithmeticCombinatorPrototype extends CombinatorPrototype {
    and_symbol_sprites?: Sprite4Way;
    divide_symbol_sprites?: Sprite4Way;
    left_shift_symbol_sprites?: Sprite4Way;
    minus_symbol_sprites?: Sprite4Way;
    modulo_symbol_sprites?: Sprite4Way;
    multiply_symbol_sprites?: Sprite4Way;
    or_symbol_sprites?: Sprite4Way;
    plus_symbol_sprites?: Sprite4Way;
    power_symbol_sprites?: Sprite4Way;
    right_shift_symbol_sprites?: Sprite4Way;
    xor_symbol_sprites?: Sprite4Way;
}
/**
 * Armor to wear on your in-game {@link character | prototype:CharacterPrototype} for defense and buffs.
 */
interface ArmorPrototype extends ToolPrototype {
    collision_box?: BoundingBox;
    drawing_box?: BoundingBox;
    /**
     * Name of the {@link EquipmentGridPrototype | prototype:EquipmentGridPrototype} that this armor has.
     */
    equipment_grid?: EquipmentGridID;
    /**
     * Only loaded if `provides_flight` is `true`.
     */
    flight_sound?: InterruptibleSound;
    /**
     * By how many slots the inventory of the player is expanded when the armor is worn.
     */
    inventory_size_bonus?: ItemStackIndex;
    /**
     * Only loaded if `provides_flight` is `true`.
     */
    landing_sound?: Sound;
    moving_sound?: Sound;
    provides_flight?: boolean;
    /**
     * What amount of damage the armor takes on what type of damage is incoming.
     */
    resistances?: Resistance[];
    steps_sound?: Sound;
    /**
     * Only loaded if `provides_flight` is `true`.
     */
    takeoff_sound?: Sound;
}
/**
 * The arrows used for example in the campaign, they are literally just arrows.
 * @example ```
{
  type = "arrow",
  name = "orange-arrow-with-circle",
  flags = { "placeable-off-grid", "not-on-map" },
  blinking = true,
  arrow_picture =
  {
    filename = "__core__/graphics/arrows/gui-arrow-medium.png",
    priority = "low",
    width = 58,
    height = 62
  },
  circle_picture =
  {
    filename = "__core__/graphics/arrows/gui-arrow-circle.png",
    priority = "low",
    width = 50,
    height = 50
  }
}
```
 */
interface ArrowPrototype extends EntityPrototype {
    arrow_picture: Sprite;
    blinking?: boolean;
    circle_picture?: Sprite;
}
/**
 * The entity spawned by the {@link artillery targeting remote | https://wiki.factorio.com/Artillery_targeting_remote}.
 */
interface ArtilleryFlarePrototype extends EntityPrototype {
    creation_shift?: Vector;
    /**
     * How long this flare stays alive after `shots_per_flare` amount of shots have been shot at it.
     */
    early_death_ticks?: uint32;
    ended_in_water_trigger_effect?: TriggerEffect;
    initial_frame_speed?: float;
    initial_height?: float;
    initial_speed?: Vector;
    initial_vertical_speed?: float;
    life_time: uint16;
    map_color: Color;
    movement_modifier?: double;
    movement_modifier_when_on_ground?: double;
    /**
     * Picture variation count and individual frame count must be equal to shadow variation count.
     */
    pictures?: AnimationVariations;
    regular_trigger_effect?: TriggerEffect;
    regular_trigger_effect_frequency?: uint32;
    render_layer?: RenderLayer;
    render_layer_when_on_ground?: RenderLayer;
    /**
     * The entity with the higher number is selectable before the entity with the lower number.
     */
    selection_priority?: uint8;
    /**
     * Shadow variation variation count and individual frame count must be equal to picture variation count.
     */
    shadows?: AnimationVariations;
    shot_category?: AmmoCategoryID;
    /**
     * How many artillery shots should be fired at the position of this flare.
     */
    shots_per_flare?: uint32;
}
/**
 * The projectile shot by {@link artillery | https://wiki.factorio.com/Artillery}.
 */
interface ArtilleryProjectilePrototype extends EntityPrototype {
    action?: Trigger;
    chart_picture?: Sprite;
    /**
     * Must have a collision box size of zero.
     * @example ```
    collision_box = {{0, 0}, {0, 0}}
    ```
     */
    collision_box?: BoundingBox;
    final_action?: Trigger;
    height_from_ground?: float;
    map_color: Color;
    picture?: Sprite;
    reveal_map: boolean;
    /**
     * Whether the picture of the projectile is rotated to match the direction of travel.
     */
    rotatable?: boolean;
    shadow?: Sprite;
}
/**
 * An {@link artillery turret | https://wiki.factorio.com/Artillery_turret}.
 */
interface ArtilleryTurretPrototype extends EntityWithOwnerPrototype {
    alert_when_attacking?: boolean;
    /**
     * Must be > 0.
     */
    ammo_stack_limit: ItemCountType;
    /**
     * Must be > 0.
     */
    automated_ammo_count?: ItemCountType;
    base_picture?: Animation4Way;
    base_picture_render_layer?: RenderLayer;
    base_picture_secondary_draw_order?: uint8;
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_light_direction?: Vector3D;
    cannon_barrel_pictures?: RotatedSprite;
    cannon_barrel_recoil_shiftings?: Vector3D[];
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[];
    cannon_base_pictures?: RotatedSprite;
    cannon_base_shift: Vector3D;
    cannon_parking_frame_count?: uint16;
    /**
     * Must be positive.
     */
    cannon_parking_speed?: float;
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    disable_automatic_firing?: boolean;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Name of a {@link GunPrototype | prototype:GunPrototype}.
     */
    gun: ItemID;
    /**
     * Must be > 0.
     */
    inventory_size: ItemStackIndex;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
    /**
     * Must be positive.
     */
    manual_range_modifier: double;
    rotating_sound?: InterruptibleSound;
    turn_after_shooting_cooldown?: uint16;
    turret_rotation_speed: double;
}
/**
 * An {@link artillery wagon | https://wiki.factorio.com/Artillery_wagon}.
 */
interface ArtilleryWagonPrototype extends RollingStockPrototype {
    /**
     * Must be > 0.
     */
    ammo_stack_limit: ItemCountType;
    /**
     * Must be > 0.
     */
    automated_ammo_count?: ItemCountType;
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_light_direction?: Vector3D;
    cannon_barrel_pictures?: RollingStockRotatedSlopedGraphics;
    cannon_barrel_recoil_shiftings?: Vector3D[];
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[];
    cannon_base_height?: double;
    cannon_base_pictures?: RollingStockRotatedSlopedGraphics;
    cannon_base_shift_when_horizontal?: double;
    cannon_base_shift_when_vertical?: double;
    cannon_parking_frame_count?: uint16;
    /**
     * Must be positive.
     */
    cannon_parking_speed?: float;
    disable_automatic_firing?: boolean;
    /**
     * Name of a {@link GunPrototype | prototype:GunPrototype}.
     */
    gun: ItemID;
    /**
     * Must be > 0.
     */
    inventory_size: ItemStackIndex;
    /**
     * Must be > 0.
     */
    manual_range_modifier: double;
    rotating_sound?: InterruptibleSound;
    turn_after_shooting_cooldown?: uint16;
    turret_rotation_speed: double;
}
/**
 * An assembling machine - like the assembling machines 1/2/3 in the game, but you can use your own recipe categories.
 */
interface AssemblingMachinePrototype extends CraftingMachinePrototype {
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    circuit_connector_flipped?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    default_recipe_finished_signal?: SignalIDConnector;
    default_working_signal?: SignalIDConnector;
    /**
     * Defaults to true if fixed_recipe is not given.
     */
    disabled_when_recipe_not_researched?: boolean;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    enable_logistic_control_behavior?: boolean;
    /**
     * Only loaded when fixed_recipe is provided.
     */
    fixed_quality?: QualityID;
    /**
     * The preset recipe of this machine. This machine does not show a recipe selection if this is set. The base game uses this for the {@link rocket silo | https://wiki.factorio.com/Rocket_silo}.
     */
    fixed_recipe?: RecipeID;
    fluid_boxes_off_when_no_fluid_recipe?: boolean;
    /**
     * The locale key of the title of the GUI that is shown when the player opens the assembling machine. May not be longer than 200 characters.
     */
    gui_title_key?: string;
    /**
     * Sets the maximum number of ingredients this machine can craft with. Any recipe with more ingredients than this will be unavailable in this machine.
     *
     * This only counts item ingredients, not fluid ingredients! This means if ingredient count is 2, and the recipe has 2 item ingredients and 1 fluid ingredient, it can still be crafted in the machine.
     */
    ingredient_count?: uint16;
    max_item_product_count?: uint16;
}
interface AsteroidChunkPrototype extends Prototype {
    dying_trigger_effect?: TriggerEffect;
    graphics_set?: AsteroidGraphicsSet;
    hide_from_signal_gui?: boolean;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    minable?: MinableProperties;
}
interface AsteroidCollectorPrototype extends EntityWithOwnerPrototype {
    arm_angular_speed_cap_base?: float;
    arm_angular_speed_cap_quality_scaling?: float;
    arm_color_gradient?: Color[];
    arm_count_base?: uint32;
    arm_count_quality_scaling?: uint32;
    arm_energy_usage: Energy;
    arm_extend_sound?: Sound;
    arm_inventory_size?: ItemStackIndex;
    arm_inventory_size_quality_increase?: ItemStackIndex;
    arm_retract_sound?: Sound;
    /**
     * If `arm_energy_usage` is not met, attempts to move slower at the cost of `arm_slow_energy_usage`.
     */
    arm_slow_energy_usage: Energy;
    arm_speed_base?: float;
    arm_speed_quality_scaling?: float;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    collection_box_offset?: float;
    /**
     * Must be positive.
     */
    collection_radius: double;
    deposit_radius?: float;
    deposit_sound?: Sound;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    energy_source: ElectricEnergySource | VoidEnergySource;
    energy_usage_quality_scaling?: float;
    graphics_set: AsteroidCollectorGraphicsSet;
    head_collection_radius?: float;
    held_items_display_count?: uint8;
    held_items_offset?: float;
    held_items_spread?: float;
    inventory_size?: ItemStackIndex;
    inventory_size_quality_increase?: ItemStackIndex;
    minimal_arm_swing_segment_retraction?: uint32;
    munch_sound?: Sound;
    passive_energy_usage: Energy;
    radius_visualisation_picture?: Sprite;
    tether_size?: float;
    unpowered_arm_speed_scale?: float;
}
interface AsteroidPrototype extends EntityWithOwnerPrototype {
    /**
     * Emissions cannot be larger than zero, asteroids cannot produce pollution.
     */
    emissions_per_second?: Record<AirbornePollutantID, double>;
    graphics_set?: AsteroidGraphicsSet;
    mass?: double;
}
/**
 * A setting in the map creation GUI. Used by the {@link autoplace system | prototype:AutoplaceSpecification::control}.
 */
interface AutoplaceControl extends Prototype {
    /**
     * Whether there is an "enable" checkbox for the autoplace control in the map generator GUI. If this is false, the autoplace control cannot be disabled from the GUI.
     */
    can_be_disabled?: boolean;
    /**
     * Controls in what tab the autoplace is shown in the map generator GUI.
     */
    category: 'resource' | 'terrain' | 'cliff' | 'enemy';
    /**
     * Whether this settings being lower than default disables fight related achievements
     */
    related_to_fight_achievements?: boolean;
    /**
     * Sets whether this control's richness can be changed. The map generator GUI will only show the richness slider when the `category` is `"resource"`.
     *
     * If the autoplace control is used to generate ores, you probably want this to be true.
     */
    richness?: boolean;
}
/**
 * Used by {@link personal battery | https://wiki.factorio.com/Personal_battery}.
 */
interface BatteryEquipmentPrototype extends EquipmentPrototype {
}
/**
 * Entity with the ability to transfer {@link module | prototype:ModulePrototype} effects to its neighboring entities.
 */
interface BeaconPrototype extends EntityWithOwnerPrototype {
    /**
     * The types of {@link modules | prototype:ModulePrototype} that a player can place inside of the beacon.
     */
    allowed_effects?: EffectTypeLimitation;
    /**
     * Sets the {@link module categories | prototype:ModuleCategory} that are allowed to be inserted into this machine.
     */
    allowed_module_categories?: ModuleCategoryID[];
    /**
     * Only loaded if `graphics_set` is not defined.
     *
     * The animation for the beacon, when in use.
     */
    animation?: Animation;
    /**
     * Only loaded if `graphics_set` is not defined.
     *
     * The picture of the beacon when it is not on.
     */
    base_picture?: Animation;
    /**
     * The beacon counter used by effect receiver when deciding which sample to take from `profile`.
     */
    beacon_counter?: 'total' | 'same_type';
    /**
     * The multiplier of the module's effects, when shared between neighbors.
     */
    distribution_effectivity: double;
    /**
     * Must be 0 or positive.
     */
    distribution_effectivity_bonus_per_quality_level?: double;
    energy_source: ElectricEnergySource | VoidEnergySource;
    /**
     * The constant power usage of this beacon.
     * @example ```
    energy_usage = "480kW"
    ```
     */
    energy_usage: Energy;
    /**
     * The graphics for the beacon.
     */
    graphics_set?: BeaconGraphicsSet;
    /**
     * The number of module slots in this beacon.
     */
    module_slots: ItemStackIndex;
    /**
     * Affects animation speed.
     */
    perceived_performance?: PerceivedPerformance;
    /**
     * Extra multiplier applied to the effects received from beacon by the effect receiver based on amount of beacons that are in range of that effect receiver.
     *
     * If there are more beacons that reach the effect receiver than there are entries in this array, then the last entry in the array is used for the multiplier.
     *
     * If this is not defined, then an implicit profile of `{1}` will be used.
     * @example ```
    profile = {1, 0} -- entities do not receive any effects when they are in range of more than one beacon
    ```
     */
    profile?: double[];
    radius_visualisation_picture?: Sprite;
    /**
     * The maximum distance that this beacon can supply its neighbors with its module's effects. Max distance is 64.
     */
    supply_area_distance: uint32;
}
/**
 * Used as a laser beam.
 */
interface BeamPrototype extends EntityPrototype {
    action?: Trigger;
    /**
     * Whether this beams should trigger its action every `damage_interval`. If false, the action is instead triggered when its owner triggers shooting.
     */
    action_triggered_automatically?: boolean;
    /**
     * Damage interval can't be 0. A value of 1 will cause the attack to be applied each tick.
     */
    damage_interval: uint32;
    graphics_set: BeamGraphicsSet;
    random_target_offset?: boolean;
    target_offset?: Vector;
    width: float;
}
/**
 * Used by {@link belt immunity equipment | https://wiki.factorio.com/Belt_immunity_equipment}.
 */
interface BeltImmunityEquipmentPrototype extends EquipmentPrototype {
    /**
     * The continuous power consumption of the belt immunity equipment.
     */
    energy_consumption: Energy;
}
/**
 * A {@link blueprint book | https://wiki.factorio.com/Blueprint_book}.
 */
interface BlueprintBookPrototype extends ItemWithInventoryPrototype {
    /**
     * If the item will draw its label when held in the cursor in place of the item count.
     */
    draw_label_for_cursor_render?: boolean;
    /**
     * The inventory size of the item.
     */
    inventory_size: ItemStackIndex | 'dynamic';
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 1
    ```
     */
    stack_size: 1;
}
/**
 * A {@link blueprint | https://wiki.factorio.com/Blueprint}.
 */
interface BlueprintItemPrototype extends SelectionToolPrototype {
    /**
     * The {@link SelectionModeData::mode | prototype:SelectionModeData::mode} is hardcoded to `"blueprint"`.
     *
     * The filters are parsed, but then ignored and forced to be empty.
     */
    alt_select: SelectionModeData;
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean;
    /**
     * Whether the item will draw its label when held in the cursor in place of the item count.
     */
    draw_label_for_cursor_render?: boolean;
    /**
     * The {@link SelectionModeData::mode | prototype:SelectionModeData::mode} is hardcoded to `"blueprint"`.
     *
     * The filters are parsed, but then ignored and forced to be empty.
     */
    select: SelectionModeData;
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 1
    ```
     */
    stack_size: 1;
}
/**
 * A {@link boiler | https://wiki.factorio.com/Boiler}. It heats fluid and optionally outputs it as a different fluid.
 */
interface BoilerPrototype extends EntityWithOwnerPrototype {
    /**
     * Controls for how many ticks the boiler will show the fire and fire_glow after the energy source runs out of energy.
     *
     * Note that `fire` and `fire_glow` alpha is set to the light intensity of the energy source, so 0 light intensity means the fire is invisible. For burner energy sources, the light intensity will reach zero rather quickly after the boiler runs out of fuel, effectively capping the time that `fire` and `fire_glow` will be shown after the boiler runs out of fuel.
     */
    burning_cooldown: uint16;
    energy_consumption: Energy;
    energy_source: EnergySource;
    /**
     * If this is set to false, `fire` alpha is always 1 instead of being controlled by the light intensity of the energy source.
     */
    fire_flicker_enabled?: boolean;
    /**
     * If this is set to false, `fire_glow` alpha is always 1 instead of being controlled by the light intensity of the energy source.
     */
    fire_glow_flicker_enabled?: boolean;
    /**
     * The input fluid box.
     *
     * If `mode` is `"heat-fluid-inside"`, the fluid is heated up directly in this fluidbox.
     */
    fluid_box: FluidBox;
    /**
     * In the `"heat-fluid-inside"` mode, fluid in the `fluid_box` is continuously heated from the input temperature up to its {@link FluidPrototype::max_temperature | prototype:FluidPrototype::max_temperature}.
     *
     * In the `"output-to-separate-pipe"` mode, fluid is transferred from the `fluid_box` to the `output_fluid_box` when enough energy is available to {@link heat | prototype:FluidPrototype::heat_capacity} the input fluid to the `target_temperature`. Setting a filter on the `output_fluid_box` means that instead of the heated input fluid getting moved to the output, it is converted to the filtered fluid in a 1:1 ratio.
     */
    mode?: 'heat-fluid-inside' | 'output-to-separate-pipe';
    /**
     * The output fluid box.
     *
     * If `mode` is `"output-to-separate-pipe"` and this has a {@link filter | prototype:FluidBox::filter}, the heated input fluid is converted to the output fluid that is set in the filter (in a 1:1 ratio).
     *
     * If `mode` is `"heat-fluid-inside"`, this fluidbox is unused.
     */
    output_fluid_box: FluidBox;
    pictures?: BoilerPictureSet;
    /**
     * Only loaded, and mandatory if `mode` is `"output-to-separate-pipe"`. This is the temperature that the input fluid must reach to be moved to the output fluid box.
     */
    target_temperature?: float;
}
/**
 * This prototype is used for receiving an achievement when the player builds an entity.
 */
interface BuildEntityAchievementPrototype extends AchievementPrototype {
    /**
     * How many entities need to be built.
     */
    amount?: uint32;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean;
    /**
     * This will trigger the achievement, if this entity is placed.
     * @example ```
    to_build = "locomotive"
    ```
     */
    to_build: EntityID;
    /**
     * The achievement must be completed within this time limit.
     * @example ```
    within = 60 * 60 * 60 * 8 -- 8 hours
    ```
     */
    within?: MapTick;
}
/**
 * An entity that produces power from a burner energy source.
 */
interface BurnerGeneratorPrototype extends EntityWithOwnerPrototype {
    /**
     * Whether the `idle_animation` should also play when the generator is active.
     */
    always_draw_idle_animation?: boolean;
    /**
     * Plays when the generator is active. `idle_animation` must have the same frame count as animation.
     */
    animation?: Animation4Way;
    /**
     * The input energy source of the generator.
     */
    burner: BurnerEnergySource;
    /**
     * The output energy source of the generator. Any emissions specified on this energy source are ignored, they must be specified on `burner`.
     */
    energy_source: ElectricEnergySource;
    /**
     * Plays when the generator is inactive. Idle animation must have the same frame count as `animation`.
     */
    idle_animation?: Animation4Way;
    /**
     * How much energy this generator can produce.
     */
    max_power_output: Energy;
    /**
     * Affects animation speed and working sound.
     */
    perceived_performance?: PerceivedPerformance;
}
/**
 * Set of data affecting tooltips, looks of gui slots etc when {@link burner | prototype:BurnerEnergySource} is not supposed to be burning items but eating them.
 */
interface BurnerUsagePrototype extends Prototype {
    accepted_fuel_key: string;
    burned_in_key: string;
    empty_slot_caption: LocalisedString;
    empty_slot_description?: LocalisedString;
    empty_slot_sprite: Sprite;
    icon: Sprite;
    no_fuel_status?: LocalisedString;
}
/**
 * A capsule, for example a {@link combat robot capsule | https://wiki.factorio.com/Combat_robot_capsules} or the {@link raw fish | https://wiki.factorio.com/Raw_fish}.
 */
interface CapsulePrototype extends ItemPrototype {
    capsule_action: CapsuleAction;
    /**
     * Color of the range radius that is shown around the player when they hold the capsule.
     */
    radius_color?: Color;
}
interface CaptureRobotPrototype extends FlyingRobotPrototype {
    capture_animation?: Animation;
    /**
     * Must be >= 0.001.
     */
    capture_speed?: double;
    destroy_action?: Trigger;
    /**
     * Must be >= 0.0.
     */
    search_radius?: double;
}
/**
 * Entity with specialized properties for acceleration, braking, and turning.
 */
interface CarPrototype extends VehiclePrototype {
    /**
     * Animation speed 1 means 1 frame per tile.
     */
    animation?: RotatedAnimation;
    /**
     * If this car prototype keeps the trunk inventory sorted.
     */
    auto_sort_inventory?: boolean;
    consumption: Energy;
    darkness_to_render_light_animation?: float;
    /**
     * Modifies the efficiency of energy transfer from burner output to wheels.
     */
    effectivity: double;
    energy_source: BurnerEnergySource | VoidEnergySource;
    /**
     * The names of the  {@link GunPrototype | prototype:GunPrototype}s this car prototype uses.
     */
    guns?: ItemID[];
    /**
     * If this car is immune to movement by belts.
     */
    has_belt_immunity?: boolean;
    /**
     * If this car gets damaged by driving against {@link cliffs | prototype:CliffPrototype}.
     */
    immune_to_cliff_impacts?: boolean;
    /**
     * If this car gets damaged by driving over/against {@link rocks | prototype:SimpleEntityPrototype::count_as_rock_for_filtered_deconstruction}.
     */
    immune_to_rock_impacts?: boolean;
    /**
     * If this car gets damaged by driving over/against {@link trees | prototype:TreePrototype}.
     */
    immune_to_tree_impacts?: boolean;
    /**
     * Size of the car inventory.
     */
    inventory_size: ItemStackIndex;
    light?: LightDefinition;
    /**
     * Must have the same frame count as `animation`.
     */
    light_animation?: RotatedAnimation;
    render_layer?: RenderLayer;
    /**
     * Vehicle will snap the vertical, horizontal or diagonal axis if it's within this angle
     */
    rotation_snap_angle: double;
    rotation_speed: double;
    sound_no_fuel?: Sound;
    /**
     * If this car prototype uses tank controls to drive.
     */
    tank_driving?: boolean;
    track_particle_triggers?: FootstepTriggerEffectList;
    /**
     * If set to 0 then the car will not have a Logistics tab.
     */
    trash_inventory_size?: ItemStackIndex;
    /**
     * Animation speed 1 means 1 frame per tile.
     */
    turret_animation?: RotatedAnimation;
    /**
     * Timeout in ticks specifying how long the turret must be inactive to return to the default position.
     */
    turret_return_timeout?: uint32;
    turret_rotation_speed?: float;
}
interface CargoBayPrototype extends EntityWithOwnerPrototype {
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2;
    graphics_set?: CargoBayConnectableGraphicsSet;
    hatch_definitions?: CargoHatchDefinition[];
    /**
     * Cannot be 0.
     */
    inventory_size_bonus: ItemStackIndex;
    /**
     * A special variant which renders on space platforms. If not specified, the game will fall back to the regular graphics set.
     */
    platform_graphics_set?: CargoBayConnectableGraphicsSet;
}
interface CargoLandingPadPrototype extends EntityWithOwnerPrototype {
    cargo_station_parameters: CargoStationParameters;
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    graphics_set?: CargoBayConnectableGraphicsSet;
    inventory_size: ItemStackIndex;
    radar_range?: uint32;
    radar_visualisation_color?: Color;
    /**
     * Drawn when a robot brings/takes items from this landing pad.
     */
    robot_animation?: Animation;
    /**
     * Played when a robot brings/takes items from this landing pad. Ignored if `robot_animation` is not defined.
     */
    robot_animation_sound?: Sound;
    /**
     * The offset from the center of this landing pad where a robot visually brings/takes items.
     */
    robot_landing_location_offset?: Vector;
    robot_opened_duration?: uint8;
    trash_inventory_size?: ItemStackIndex;
}
interface CargoPodPrototype extends EntityWithOwnerPrototype {
    /**
     * Has to be of type 'pod-catalogue'.
     */
    default_graphic?: ProcessionGraphic;
    /**
     * Has to be of type 'pod-catalogue'.
     */
    default_shadow_graphic?: ProcessionGraphic;
    inventory_size: ItemStackIndex;
    procession_audio_catalogue?: ProcessionAudioCatalogue;
    procession_graphic_catalogue?: ProcessionGraphicCatalogue;
    shadow_slave_entity?: EntityID;
    spawned_container: EntityID;
}
/**
 * A {@link cargo wagon | https://wiki.factorio.com/Cargo_wagon}.
 */
interface CargoWagonPrototype extends RollingStockPrototype {
    /**
     * Size of the inventory of the wagon. The inventory can be limited using the red bar and filtered. This functionality cannot be turned off.
     */
    inventory_size: ItemStackIndex;
    quality_affects_inventory_size?: boolean;
}
/**
 * Jumps between targets and applies a {@link Trigger | prototype:Trigger} to them.
 */
interface ChainActiveTriggerPrototype extends ActiveTriggerPrototype {
    /**
     * The trigger to apply when jumping to a new target.
     */
    action?: Trigger;
    /**
     * Chance that a new fork will spawn after each jump. `0` for 0% chance and `1` for 100% chance.
     *
     * Must be between 0 and 1.
     */
    fork_chance?: double;
    fork_chance_increase_per_quality_level?: double;
    /**
     * Tick delay between each jump. `0` means that all jumps are instantaneous.
     */
    jump_delay_ticks?: MapTick;
    /**
     * Maximum number of forks allowed to spawn for the entire chain.
     */
    max_forks?: uint32;
    /**
     * Maximum number of forks that can spawn from a single jump.
     */
    max_forks_per_jump?: uint32;
    /**
     * Max number of jumps per trigger.
     */
    max_jumps?: uint32;
    /**
     * Max distance jumps are allowed to travel away from the original target.
     */
    max_range?: double;
    /**
     * Max length of jumps.
     */
    max_range_per_jump?: double;
}
/**
 * This prototype is used for receiving an achievement when the player changes to a surface.
 */
interface ChangedSurfaceAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, if the player changes to this surface.
     * @example ```
    surface = "fulgora"
    ```
     */
    surface?: string;
}
/**
 * The corpse of a {@link CharacterPrototype | prototype:CharacterPrototype}.
 */
interface CharacterCorpsePrototype extends EntityPrototype {
    /**
     * Table of key value pairs, the keys are armor names and the values are numbers. The number is the Animation that is associated with the armor, e.g. using `1` will associate the armor with the first Animation in the pictures table.
     */
    armor_picture_mapping?: Record<ItemID, int32>;
    /**
     * Mandatory if `pictures` is not defined.
     */
    picture?: Animation;
    /**
     * Mandatory if `picture` is not defined.
     */
    pictures?: AnimationVariations;
    render_layer?: RenderLayer;
    /**
     * 0 for infinite.
     */
    time_to_live: uint32;
}
/**
 * Entity that you move around on the screen during the campaign and freeplay.
 */
interface CharacterPrototype extends EntityWithOwnerPrototype {
    animations: CharacterArmorAnimation[];
    build_distance: uint32;
    /**
     * Name of the character corpse that is spawned when this character dies.
     */
    character_corpse?: EntityID;
    /**
     * Names of the crafting categories the character can craft recipes from. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#recipe-category}. See also {@link RecipeCategory | prototype:RecipeCategory}.
     */
    crafting_categories?: RecipeCategoryID[];
    damage_hit_tint: Color;
    distance_per_frame: double;
    drop_item_distance: uint32;
    /**
     * The sound played when the character eats (fish for example).
     */
    eat: Sound;
    /**
     * Must be >= 0.
     */
    enter_vehicle_distance?: double;
    flying_bob_speed?: float;
    /**
     * This collision mask is used when the character is flying.
     *
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by `"character/flying"`.
     */
    flying_collision_mask?: CollisionMaskConnector;
    /**
     * Triggered when the running animation (`animations`) rolls over the frames defined in `right_footprint_frames` and `left_footprint_frames`.
     */
    footprint_particles?: FootprintParticle[];
    /**
     * Triggered every tick of the running animation.
     */
    footstep_particle_triggers?: FootstepTriggerEffectList;
    /**
     * The search radius for a non-colliding position to move the player to if they are grounded mid-flight. Must be >= 0.
     */
    grounded_landing_search_radius?: double;
    /**
     * Must be between 1 and 15.
     */
    guns_inventory_size?: ItemStackIndex;
    /**
     * Whether this character is moved by belts when standing on them.
     */
    has_belt_immunity?: boolean;
    /**
     * The sound played when the character's health is low.
     */
    heartbeat: Sound;
    /**
     * Number of slots in the main inventory. May be 0.
     */
    inventory_size: ItemStackIndex;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
    item_pickup_distance: double;
    /**
     * The frames in the running animation (`animations`) where the left foot touches the ground.
     */
    left_footprint_frames?: float[];
    /**
     * Offset from the center of the entity for the left footprint. Used by `footprint_particles`.
     */
    left_footprint_offset?: Vector;
    light?: LightDefinition;
    loot_pickup_distance: double;
    maximum_corner_sliding_distance: double;
    /**
     * Names of the resource categories the character can mine resources from.
     */
    mining_categories?: ResourceCategoryID[];
    mining_speed: double;
    /**
     * List of positions in the mining with tool animation when the mining sound and mining particles are created.
     * @example ```
    mining_with_tool_particles_animation_positions = {28}
    ```
     */
    mining_with_tool_particles_animation_positions: float[];
    moving_sound_animation_positions: float[];
    reach_distance: uint32;
    reach_resource_distance: double;
    /**
     * Time in seconds. Must be positive
     */
    respawn_time?: uint32;
    /**
     * The frames in the running animation (`animations`) where the right foot touches the ground.
     */
    right_footprint_frames?: float[];
    /**
     * Offset from the center of the entity for the right footprint. Used by `footprint_particles`.
     */
    right_footprint_offset?: Vector;
    /**
     * List of positions in the running animation when the walking sound is played.
     * @example ```
    running_sound_animation_positions = {14, 29}
    ```
     */
    running_sound_animation_positions: float[];
    running_speed: double;
    /**
     * Triggered when the running animation (`animations`) rolls over the frames defined in `right_footprint_frames` and `left_footprint_frames`.
     */
    synced_footstep_particle_triggers?: FootstepTriggerEffectList;
    ticks_to_keep_aiming_direction: uint32;
    ticks_to_keep_gun: uint32;
    ticks_to_stay_in_combat: uint32;
    tool_attack_distance?: double;
    tool_attack_result?: Trigger;
}
/**
 * A {@link cliff | https://wiki.factorio.com/Cliff}.
 */
interface CliffPrototype extends EntityPrototype {
    /**
     * Name of a capsule that has a robot_action to explode cliffs.
     */
    cliff_explosive?: ItemID;
    grid_offset: Vector;
    grid_size: Vector;
    orientations: OrientedCliffPrototypeSet;
    place_as_crater?: CraterPlacementDefinition;
}
/**
 * A collision layer. Used for {@link collision masks | prototype:CollisionMaskConnector}.
 *
 * It's recommend to use underscores instead of dashes in `name` so that the name can easily be used as a table key when defining collision masks.
 * @example ```
{
  type = "collision-layer",
  name = "is_lower_object"
}
```
 */
interface CollisionLayerPrototype extends Prototype {
}
/**
 * This prototype is used for receiving an achievement when the player has a certain robot follower count.
 */
interface CombatRobotCountAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, if player's current robot count is over this amount.
     * @example ```
    count = 100
    ```
     */
    count?: uint32;
}
/**
 * A combat robot. Can attack enemies.
 */
interface CombatRobotPrototype extends FlyingRobotPrototype {
    attack_parameters: AttackParameters;
    /**
     * Applied when the combat robot expires (runs out of `time_to_live`).
     */
    destroy_action?: Trigger;
    follows_player?: boolean;
    friction?: double;
    idle?: RotatedAnimation;
    in_motion?: RotatedAnimation;
    light?: LightDefinition;
    range_from_player?: double;
    shadow_idle?: RotatedAnimation;
    shadow_in_motion?: RotatedAnimation;
    time_to_live: uint32;
}
/**
 * Abstract base type for decider and arithmetic combinators.
 */
interface CombinatorPrototype extends EntityWithOwnerPrototype {
    /**
     * @example ```
    active_energy_usage = "1kW"
    ```
     */
    active_energy_usage: Energy;
    activity_led_hold_time?: uint8;
    activity_led_light?: LightDefinition;
    activity_led_light_offsets: [
        Vector,
        Vector,
        Vector,
        Vector
    ];
    activity_led_sprites?: Sprite4Way;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Emissions cannot be larger than zero, combinators cannot produce pollution.
     */
    emissions_per_second?: Record<AirbornePollutantID, double>;
    /**
     * Defines how this combinator gets energy. The emissions set on the energy source are ignored so combinators cannot produce pollution.
     */
    energy_source: ElectricEnergySource | VoidEnergySource;
    frozen_patch?: Sprite4Way;
    input_connection_bounding_box: BoundingBox;
    input_connection_points: [
        WireConnectionPoint,
        WireConnectionPoint,
        WireConnectionPoint,
        WireConnectionPoint
    ];
    output_connection_bounding_box: BoundingBox;
    output_connection_points: [
        WireConnectionPoint,
        WireConnectionPoint,
        WireConnectionPoint,
        WireConnectionPoint
    ];
    screen_light?: LightDefinition;
    screen_light_offsets: [
        Vector,
        Vector,
        Vector,
        Vector
    ];
    sprites?: Sprite4Way;
}
interface CompleteObjectiveAchievementPrototype extends AchievementPrototypeWithCondition {
    /**
     * The achievement must be completed within this time limit.
     * @example ```
    within = 60 * 60 * 60 * 8 -- 8 hours
    ```
     */
    within?: MapTick;
}
/**
 * A {@link constant combinator | https://wiki.factorio.com/Constant_combinator}.
 */
interface ConstantCombinatorPrototype extends EntityWithOwnerPrototype {
    activity_led_light?: LightDefinition;
    activity_led_light_offsets: [
        Vector,
        Vector,
        Vector,
        Vector
    ];
    activity_led_sprites?: Sprite4Way;
    circuit_wire_connection_points: [
        WireConnectionPoint,
        WireConnectionPoint,
        WireConnectionPoint,
        WireConnectionPoint
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * When not zero, toggle entity will enable constant combinator for that amount of ticks and then turn it off.
     */
    pulse_duration?: uint32;
    sprites?: Sprite4Way;
}
/**
 * This prototype is used for receiving an achievement when the player constructs enough entities with construction robots.
 */
interface ConstructWithRobotsAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, if enough entities were placed using construction robots.
     * @example ```
    amount = 100
    ```
     */
    amount?: uint32;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game: boolean;
    more_than_manually?: boolean;
}
/**
 * A {@link construction robot | https://wiki.factorio.com/Construction_robot}.
 */
interface ConstructionRobotPrototype extends RobotWithLogisticInterfacePrototype {
    /**
     * Must have a collision box size of zero.
     * @example ```
    collision_box = {{0, 0}, {0, 0}}
    ```
     */
    collision_box?: BoundingBox;
    construction_vector: Vector;
    mined_sound_volume_modifier?: float;
    repairing_sound?: Sound;
    shadow_working?: RotatedAnimation;
    smoke?: Animation;
    sparks?: AnimationVariations;
    working?: RotatedAnimation;
    working_light?: LightDefinition;
}
/**
 * A generic container, such as a chest. Cannot be rotated.
 */
interface ContainerPrototype extends EntityWithOwnerPrototype {
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this container.
     */
    circuit_wire_max_distance?: double;
    default_status?: EntityStatus;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * The number of slots in this container.
     */
    inventory_size: ItemStackIndex;
    /**
     * Whether the inventory of this container can be filtered (like cargo wagons) or not.
     */
    inventory_type?: 'normal' | 'with_bar' | 'with_filters_and_bar';
    /**
     * The picture displayed for this entity.
     */
    picture?: Sprite;
    quality_affects_inventory_size?: boolean;
}
/**
 * A copy-paste or cut-paste tool.
 */
interface CopyPasteToolPrototype extends SelectionToolPrototype {
    /**
     * The filters are parsed, but then ignored and forced to be empty.
     */
    alt_select: SelectionModeData;
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean;
    cuts?: boolean;
    /**
     * The filters are parsed, but then ignored and forced to be empty.
     */
    select: SelectionModeData;
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 1
    ```
     */
    stack_size: 1;
}
/**
 * Used for corpses, for example the remnants when destroying buildings.
 */
interface CorpsePrototype extends EntityPrototype {
    /**
     * The dying animation.
     */
    animation?: RotatedAnimationVariations;
    /**
     * Variation count must be the same as `animation` variation count. Direction count must be the same as `animation` direction count. Frame count must be the same as `animation` frame count.
     */
    animation_overlay?: RotatedAnimationVariations;
    animation_overlay_final_render_layer?: RenderLayer;
    animation_overlay_render_layer?: RenderLayer;
    animation_render_layer?: RenderLayer;
    /**
     * If true, and the collision box is unset, this will take the collision box of the first entity that uses this corpse.
     */
    auto_setup_collision_box?: boolean;
    decay_animation?: RotatedAnimationVariations;
    decay_frame_transition_duration?: float;
    /**
     * An array of arrays of integers. The inner arrays are called "groups" and must all have the same size.
     */
    direction_shuffle?: uint16[][];
    /**
     * Multiplier for `time_before_shading_off` and `time_before_removed`. Must be positive.
     *
     * Controls the speed of the animation: `1 ÷ dying_speed = duration of the animation`
     */
    dying_speed?: float;
    expires?: boolean;
    final_render_layer?: RenderLayer;
    ground_patch?: AnimationVariations;
    ground_patch_decay?: AnimationVariations;
    ground_patch_fade_in_delay?: float;
    ground_patch_fade_in_speed?: float;
    ground_patch_fade_out_duration?: float;
    ground_patch_fade_out_start?: float;
    ground_patch_higher?: AnimationVariations;
    ground_patch_render_layer?: RenderLayer;
    remove_on_entity_placement?: boolean;
    remove_on_tile_placement?: boolean;
    shuffle_directions_at_frame?: uint8;
    splash?: AnimationVariations;
    splash_render_layer?: RenderLayer;
    /**
     * Controls the speed of the splash animation: `1 ÷ splash_speed = duration of the splash animation`
     */
    splash_speed?: float;
    /**
     * Time in ticks this corpse lasts. May not be 0.
     */
    time_before_removed?: uint32;
    /**
     * Controls how long the corpse takes to fade, as in how long it takes to get from no transparency to full transparency/removed. This time is *not* added to `time_before_removed`, it is instead subtracted from it. So by default, the corpse starts fading about 15 seconds before it gets removed.
     */
    time_before_shading_off?: uint32;
    underwater_layer_offset?: int8;
    underwater_patch?: RotatedSprite;
    use_decay_layer?: boolean;
    use_tile_color_for_ground_patch_tint?: boolean;
}
/**
 * The abstract basis of the assembling machines and furnaces. Contains the properties that both of them have.
 *
 * Note that a crafting machine cannot be rotated unless it has at least one of the following: a fluid box, a heat energy source, a fluid energy source, or a non-square collision box. Crafting machines with non-square collision boxes can only be rotated before placement, not after.
 */
interface CraftingMachinePrototype extends EntityWithOwnerPrototype {
    /**
     * Sets the {@link modules | prototype:ModulePrototype} and {@link beacon | prototype:BeaconPrototype} effects that are allowed to be used on this machine.
     */
    allowed_effects?: EffectTypeLimitation;
    /**
     * Sets the {@link module categories | prototype:ModuleCategory} that are allowed to be inserted into this machine.
     */
    allowed_module_categories?: ModuleCategoryID[];
    /**
     * A list of {@link recipe categories | prototype:RecipeCategory} this crafting machine can use.
     * @example ```
    crafting_categories = {"crafting", "smelting"}
    ```
     */
    crafting_categories: RecipeCategoryID[];
    /**
     * How fast this crafting machine can craft. 1 means that for example a 1 second long recipe take 1 second to craft. 0.5 means it takes 2 seconds, and 2 means it takes 0.5 seconds.
     *
     * Crafting speed has to be positive.
     */
    crafting_speed: double;
    /**
     * Whether the "alt-mode icon" should have a black background.
     */
    draw_entity_info_icon_background?: boolean;
    effect_receiver?: EffectReceiver;
    /**
     * Defines how the crafting machine is powered.
     *
     * When using an electric energy source and `drain` is not specified, it will be set to `energy_usage ÷ 30` automatically.
     */
    energy_source: EnergySource;
    /**
     * Sets how much energy this machine uses while crafting. Energy usage has to be positive.
     * @example ```
    energy_usage = "90kW"
    ```
     */
    energy_usage: Energy;
    fast_transfer_modules_into_module_slots_only?: boolean;
    /**
     * The crafting machine's fluid boxes. If an assembling machine has fluid boxes *and* {@link AssemblingMachinePrototype::fluid_boxes_off_when_no_fluid_recipe | prototype:AssemblingMachinePrototype::fluid_boxes_off_when_no_fluid_recipe} is true, the assembling machine can only be rotated when a recipe consuming or producing fluid is set, or if it has one of the other properties listed at the top of this page.
     * @example ```
    fluid_boxes =
    {
      {
        production_type = "input",
        pipe_picture = assembler2pipepictures(),
        pipe_covers = pipecoverspictures(),
        volume = 1000,
        pipe_connections = {{ flow_direction="input", direction = defines.direction.north, position = {0, -1} }},
        secondary_draw_orders = { north = -1 }
      },
      {
        production_type = "output",
        pipe_picture = assembler2pipepictures(),
        pipe_covers = pipecoverspictures(),
        volume = 1000,
        pipe_connections = {{ flow_direction="output", direction = defines.direction.south, position = {0, 1} }},
        secondary_draw_orders = { north = -1 }
      },
    }
    ```
     */
    fluid_boxes?: FluidBox[];
    forced_symmetry?: Mirroring;
    graphics_set?: CraftingMachineGraphicsSet;
    graphics_set_flipped?: CraftingMachineGraphicsSet;
    ignore_output_full?: boolean;
    /**
     * Whether the speed of the animation and working visualization should be based on the machine's speed (boosted or slowed by modules).
     */
    match_animation_speed_to_activity?: boolean;
    /**
     * The number of module slots in this machine.
     */
    module_slots?: ItemStackIndex;
    /**
     * Affects animation speed.
     */
    perceived_performance?: PerceivedPerformance;
    production_health_effect?: ProductionHealthEffect;
    /**
     * Controls whether the ingredients of an in-progress recipe are destroyed when mining the machine/changing the recipe. If set to true, the ingredients do not get destroyed. This affects only the ingredients of the recipe that is currently in progress, so those that visually have already been consumed while their resulting product has not yet been produced.
     */
    return_ingredients_on_change?: boolean;
    /**
     * Whether the "alt-mode icon" should be drawn at all.
     */
    show_recipe_icon?: boolean;
    /**
     * Whether the recipe icon should be shown on the map.
     */
    show_recipe_icon_on_map?: boolean;
    trash_inventory_size?: ItemStackIndex;
    vector_to_place_result?: Vector;
}
/**
 * This prototype is used for receiving an achievement when the player creates a space platform.
 */
interface CreatePlatformAchievementPrototype extends AchievementPrototype {
    /**
     * How many space platforms need to be created.
     */
    amount?: uint32;
}
/**
 * A curved-A rail.
 */
interface CurvedRailAPrototype extends RailPrototype {
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of straight rail is hardcoded to `{{-0.7, -2.516}, {0.7, 2.516}}`.
     */
    collision_box?: BoundingBox;
}
/**
 * A curved-B rail.
 */
interface CurvedRailBPrototype extends RailPrototype {
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of straight rail is hardcoded to `{{-0.7, -2.441}, {0.7, 2.441}}`.
     */
    collision_box?: BoundingBox;
}
/**
 * Custom events share the same namespace as custom inputs and built-in events for subscribing to and raising them.
 * @example ```
{
  type = "custom-event",
  name = "potato-custom-event"
}
```
 */
interface CustomEventPrototype extends Prototype {
}
/**
 * Used for custom keyboard shortcuts/key bindings in mods. The key associated with the custom input can be changed in the options. This means that `key_sequence` is simply the default key binding.
 */
interface CustomInputPrototype extends Prototype {
    /**
     * A {@link Lua event | runtime:CustomInputEvent} is only raised if the action is "lua".
     */
    action?: 'lua' | 'spawn-item' | 'toggle-personal-roboport' | 'toggle-personal-logistic-requests' | 'toggle-equipment-movement-bonus';
    /**
     * The alternative key binding for this control. See `key_sequence` for the format.
     */
    alternative_key_sequence?: string;
    /**
     * If `true`, when the shortcut is activated, the modifiers used for this shortcut can't be re-used to press something else until unpressed. The example where this is useful is ALT+A to activate spidertron remote, where ALT is consumed, so pressing right mouse button before the ALT is unpressed will not trigger pin creation (ALT + right mouse button), but send the selected unit instead.
     */
    block_modifiers?: boolean;
    /**
     * Sets whether internal game events associated with the same key sequence should be fired or blocked. If they are fired ("none"), then the custom input event will happen before the internal game event.
     */
    consuming?: ConsumingType;
    /**
     * The alternative controller (game pad) keybinding for this control. See `controller_key_sequence` for the format.
     */
    controller_alternative_key_sequence?: string;
    /**
     * The controller (game pad) keybinding for this control. Use "" (empty string) for unassigned.
     *
     * " + " is used to separate modifier buttons from normal buttons: <code>"controller-righttrigger + controller-a"</code>.
     *
     * For modifier buttons, the following names are used: "controller-righttrigger", "controller-lefttrigger".
     *
     * A key binding can contain an unlimited amount of modifier buttons (listed above) but only one normal button (listed below).
     * These names are available for the normal controller buttons
     *
     * - controller-a
     * - controller-b
     * - controller-x
     * - controller-y
     * - controller-back
     * - controller-guide
     * - controller-start
     * - controller-leftstick (pressing left joy stick)
     * - controller-left-stick (moving left joy stick)
     * - controller-rightstick (pressing right joy stick)
     * - controller-right-stick (moving right joy stick)
     * - controller-leftshoulder
     * - controller-rightshoulder
     * - controller-dpup
     * - controller-dpdown
     * - controller-dpleft
     * - controller-dpright
     * - controller-misc1
     * - controller-paddle1
     * - controller-paddle2
     * - controller-paddle3
     * - controller-paddle4
     * - controller-touchpad
     */
    controller_key_sequence?: string;
    /**
     * If this custom input is enabled. Disabled custom inputs exist but are not used by the game. If disabled, no event is raised when the input is used.
     */
    enabled?: boolean;
    enabled_while_in_cutscene?: boolean;
    enabled_while_spectating?: boolean;
    /**
     * If true, the type and name of the currently selected prototype will be provided as "selected_prototype" in the raised {@link Lua event | runtime:CustomInputEvent}. {@link This also works in GUIs | https://forums.factorio.com/96125}, not just the game world.
     *
     * This will also return an item in the cursor such as copper-wire or rail-planner, if nothing is beneath the cursor.
     */
    include_selected_prototype?: boolean;
    /**
     * The item will be created when this input is pressed and action is set to "spawn-item". The item must have the {@link spawnable | prototype:ItemPrototypeFlags::spawnable} flag set.
     */
    item_to_spawn?: ItemID;
    /**
     * The default key sequence for this custom input. Use "" (empty string) for unassigned.
     *
     * Use "mouse-button-2" etc for mouse buttons, mouse-button-3 for middle mouse button. Use "mouse-wheel-up", "mouse-wheel-down", "mouse-wheel-left", "mouse-wheel-right" for mouse wheel.
     *
     * " + " is used to separate modifier keys from normal keys: <code>"ALT + G"</code>.
     *
     * For modifier keys, the following names are used: "CONTROL", "SHIFT", "ALT", "COMMAND".
     *
     * A key binding can contain an unlimited amount of modifier keys (listed above) but only one normal key (listed below).
     * These names are available for the normal keyboard keys
     *
     * - A
     * - B
     * - C
     * - D
     * - E
     * - F
     * - G
     * - H
     * - I
     * - J
     * - K
     * - L
     * - M
     * - N
     * - O
     * - P
     * - Q
     * - R
     * - S
     * - T
     * - U
     * - V
     * - W
     * - X
     * - Y
     * - Z
     * - 1
     * - 2
     * - 3
     * - 4
     * - 5
     * - 6
     * - 7
     * - 8
     * - 9
     * - 0
     * - RETURN
     * - ESCAPE
     * - BACKSPACE
     * - TAB
     * - SPACE
     * - MINUS
     * - EQUALS
     * - LEFTBRACKET
     * - RIGHTBRACKET
     * - BACKSLASH
     * - NONUSHASH
     * - SEMICOLON
     * - APOSTROPHE
     * - GRAVE
     * - COMMA
     * - PERIOD
     * - SLASH
     * - CAPSLOCK
     * - F1
     * - F2
     * - F3
     * - F4
     * - F5
     * - F6
     * - F7
     * - F8
     * - F9
     * - F10
     * - F11
     * - F12
     * - PRINTSCREEN
     * - SCROLLLOCK
     * - PAUSE
     * - INSERT
     * - HOME
     * - PAGEUP
     * - DELETE
     * - END
     * - PAGEDOWN
     * - RIGHT
     * - LEFT
     * - DOWN
     * - UP
     * - NUMLOCKCLEAR
     * - KP_DIVIDE
     * - KP_MULTIPLY
     * - KP_MINUS
     * - KP_PLUS
     * - KP_ENTER
     * - KP_1
     * - KP_2
     * - KP_3
     * - KP_4
     * - KP_5
     * - KP_6
     * - KP_7
     * - KP_8
     * - KP_9
     * - KP_0
     * - KP_PERIOD
     * - NONUSBACKSLASH
     * - APPLICATION
     * - POWER
     * - KP_EQUALS
     * - F13
     * - F14
     * - F15
     * - F16
     * - F17
     * - F18
     * - F19
     * - F20
     * - F21
     * - F22
     * - F23
     * - F24
     * - EXECUTE
     * - HELP
     * - MENU
     * - SELECT
     * - STOP
     * - AGAIN
     * - UNDO
     * - CUT
     * - COPY
     * - PASTE
     * - FIND
     * - MUTE
     * - VOLUMEUP
     * - VOLUMEDOWN
     * - KP_COMMA
     * - KP_EQUALSAS400
     * - INTERNATIONAL1
     * - INTERNATIONAL2
     * - INTERNATIONAL3
     * - INTERNATIONAL4
     * - INTERNATIONAL5
     * - INTERNATIONAL6
     * - INTERNATIONAL7
     * - INTERNATIONAL8
     * - INTERNATIONAL9
     * - LANG1
     * - LANG2
     * - LANG3
     * - LANG4
     * - LANG5
     * - LANG6
     * - LANG7
     * - LANG8
     * - LANG9
     * - ALTERASE
     * - SYSREQ
     * - CANCEL
     * - CLEAR
     * - PRIOR
     * - RETURN2
     * - SEPARATOR
     * - OUT
     * - OPER
     * - CLEARAGAIN
     * - CRSEL
     * - EXSEL
     * - KP_00
     * - KP_000
     * - THOUSANDSSEPARATOR
     * - DECIMALSEPARATOR
     * - CURRENCYUNIT
     * - CURRENCYSUBUNIT
     * - KP_LEFTPAREN
     * - KP_RIGHTPAREN
     * - KP_LEFTBRACE
     * - KP_RIGHTBRACE
     * - KP_TAB
     * - KP_BACKSPACE
     * - KP_A
     * - KP_B
     * - KP_C
     * - KP_D
     * - KP_E
     * - KP_F
     * - KP_XOR
     * - KP_POWER
     * - KP_PERCENT
     * - KP_LESS
     * - KP_GREATER
     * - KP_AMPERSAND
     * - KP_DBLAMPERSAND
     * - KP_VERTICALBAR
     * - KP_DBLVERTICALBAR
     * - KP_COLON
     * - KP_HASH
     * - KP_SPACE
     * - KP_AT
     * - KP_EXCLAM
     * - KP_MEMSTORE
     * - KP_MEMRECALL
     * - KP_MEMCLEAR
     * - KP_MEMADD
     * - KP_MEMSUBTRACT
     * - KP_MEMMULTIPLY
     * - KP_MEMDIVIDE
     * - KP_PLUSMINUS
     * - KP_CLEAR
     * - KP_CLEARENTRY
     * - KP_BINARY
     * - KP_OCTAL
     * - KP_DECIMAL
     * - KP_HEXADECIMAL
     * - LCTRL
     * - LSHIFT
     * - LALT
     * - LGUI
     * - RCTRL
     * - RSHIFT
     * - RALT
     * - RGUI
     * - MODE
     * - AUDIONEXT
     * - AUDIOPREV
     * - AUDIOSTOP
     * - AUDIOPLAY
     * - AUDIOMUTE
     * - MEDIASELECT
     * - WWW
     * - MAIL
     * - CALCULATOR
     * - COMPUTER
     * - AC_SEARCH
     * - AC_HOME
     * - AC_BACK
     * - AC_FORWARD
     * - AC_STOP
     * - AC_REFRESH
     * - AC_BOOKMARKS
     * - BRIGHTNESSDOWN
     * - BRIGHTNESSUP
     * - DISPLAYSWITCH
     * - KBDILLUMTOGGLE
     * - KBDILLUMDOWN
     * - KBDILLUMUP
     * - EJECT
     * - SLEEP
     * - APP1
     * - APP2
     * - AUDIOREWIND
     * - AUDIOFASTFORWARD
     */
    key_sequence: string;
    /**
     * When a custom-input is linked to a game control it won't show up in the control-settings GUI and will fire when the linked control is pressed.
     * @example ```
    key_sequence = "",
    linked_game_control = "clear-cursor"
    ```
     */
    linked_game_control?: LinkedGameControl;
    /**
     * Unique textual identification of the prototype. May only contain alphanumeric characters, dashes and underscores. May not exceed a length of 200 characters.
     *
     * For a list of all names used in vanilla, see {@link data.raw | https://wiki.factorio.com/Data.raw}.
     *
     * It is also the name for the event that is raised when they key (combination) is pressed and action is `"lua"`, see {@link Tutorial:Script interfaces | https://wiki.factorio.com/Tutorial:Script_interfaces#Custom_input}.
     */
    name: string;
}
/**
 * A damage type. This is used in the {@link damage system | https://wiki.factorio.com/Damage}. {@link A list of built-in damage types can be found here | https://wiki.factorio.com/Damage#Damage_types}.
 */
interface DamageType extends Prototype {
}
/**
 * A {@link decider combinator | https://wiki.factorio.com/Decider_combinator}.
 */
interface DeciderCombinatorPrototype extends CombinatorPrototype {
    equal_symbol_sprites?: Sprite4Way;
    greater_or_equal_symbol_sprites?: Sprite4Way;
    greater_symbol_sprites?: Sprite4Way;
    less_or_equal_symbol_sprites?: Sprite4Way;
    less_symbol_sprites?: Sprite4Way;
    not_equal_symbol_sprites?: Sprite4Way;
}
/**
 * This prototype is used for receiving an achievement when the player deconstructs enough entities with construction robots.
 */
interface DeconstructWithRobotsAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, if enough entities were deconstructed using construction robots.
     * @example ```
    amount = 100
    ```
     */
    amount: uint32;
}
/**
 * Entity used to signify that the tile below it should be deconstructed.
 */
interface DeconstructibleTileProxyPrototype extends EntityPrototype {
}
/**
 * A {@link deconstruction planner | https://wiki.factorio.com/Deconstruction_planner}.
 */
interface DeconstructionItemPrototype extends SelectionToolPrototype {
    /**
     * The {@link SelectionModeData::mode | prototype:SelectionModeData::mode} is hardcoded to `"cancel-deconstruct"`.
     *
     * The filters are parsed, but then ignored and forced to be empty.
     */
    alt_select: SelectionModeData;
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean;
    /**
     * Can't be > 255.
     */
    entity_filter_count?: ItemStackIndex;
    /**
     * The {@link SelectionModeData::mode | prototype:SelectionModeData::mode} is hardcoded to `"deconstruct"`.
     *
     * The filters are parsed, but then ignored and forced to be empty.
     */
    select: SelectionModeData;
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 1
    ```
     */
    stack_size: 1;
    /**
     * Can't be > 255.
     */
    tile_filter_count?: ItemStackIndex;
}
/**
 * Simple decorative purpose objects on the map, they have no health and some of them are removed when the player builds over. Usually used for grass patches, roots, small plants etc.
 */
interface DecorativePrototype extends Prototype {
    autoplace?: AutoplaceSpecification;
    /**
     * Must contain the [0,0] point. Max radius of the collision box is 8.
     */
    collision_box?: BoundingBox;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by `"decorative"`.
     */
    collision_mask?: CollisionMaskConnector;
    /**
     * Loaded only if `render_layer` = "decals". When decoratives are being spawned by {@link EnemySpawnerPrototype::spawn_decoration | prototype:EnemySpawnerPrototype::spawn_decoration} or {@link TurretPrototype::spawn_decoration | prototype:TurretPrototype::spawn_decoration}, decals with `decal_overdraw_priority` greater than 0 will be filtered such that they don't overlap too much. If two or more decals would overlap, only the one with the largest value of `decal_overdraw_priority` is placed.
     */
    decal_overdraw_priority?: uint16;
    grows_through_rail_path?: boolean;
    minimal_separation?: double;
    /**
     * Loaded only if `render_layer` = "decals". Value lower than 1 enables masking by water for decals with `tile_layer` greater or equal to {@link UtilityConstants::capture_water_mask_at_layer | prototype:UtilityConstants::capture_water_mask_at_layer}. Water tiles must use water `tile-effect` with {@link WaterTileEffectParameters::lightmap_alpha | prototype:WaterTileEffectParameters::lightmap_alpha} set to 0 or value less than 1. Graphics option `Occlude light sprites` must be enabled, as water mask is captured into terrain lightmap alpha channel. Tiles rendered in layer between {@link UtilityConstants::capture_water_mask_at_layer | prototype:UtilityConstants::capture_water_mask_at_layer} and decal's `tile_layer` will likely also mask decals in some way, as water mask will likely be 0 at their position, but this is considered undefined behavior.
     */
    opacity_over_water?: float;
    /**
     * Must contain at least 1 picture.
     */
    pictures: SpriteVariations;
    placed_effect?: TriggerEffect;
    /**
     * When "decals" render layer is used, the decorative is treated as decal. That means it will be rendered within tile layers instead of normal sprite layers.
     */
    render_layer?: RenderLayer;
    /**
     * Can be defined only when decorative is not "decal" (see `render_layer`).
     */
    stateless_visualisation?: StatelessVisualisations;
    /**
     * Only loaded if `stateless_visualisation` is not defined. Can be defined only when decorative is not "decal" (see `render_layer`).
     */
    stateless_visualisation_variations?: StatelessVisualisations[];
    target_count?: uint16;
    /**
     * Mandatory if `render_layer` = "decals". This int16 is converted to a {@link TileRenderLayer | prototype:TileRenderLayer} internally. It is offset from `ground-natural`.
     */
    tile_layer?: int16;
    /**
     * Called by {@link DestroyDecorativesTriggerEffectItem | prototype:DestroyDecorativesTriggerEffectItem}.
     */
    trigger_effect?: TriggerEffect;
    walking_sound?: Sound;
}
/**
 * Delays the delivery of triggered effect by some number of ticks.
 */
interface DelayedActiveTriggerPrototype extends ActiveTriggerPrototype {
    /**
     * The trigger to apply after `delay` has elapsed.
     */
    action: Trigger;
    /**
     * If true, the delayed trigger is cancelled if the source entity is destroyed.
     */
    cancel_when_source_is_destroyed?: boolean;
    /**
     * The number of ticks to delay the delivery of the triggered effect. Must be greater than 0.
     */
    delay: uint32;
    /**
     * The number of times to repeat the delayed trigger.
     */
    repeat_count?: uint32;
    /**
     * The number of ticks between repeat deliveries of the triggered effect. Must be greater than 0.
     */
    repeat_delay?: uint32;
}
/**
 * This prototype is used for receiving an achievement, when the player requests and receives enough items using logistic robots.
 */
interface DeliverByRobotsAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, when the player receives enough items through logistic robots.
     * @example ```
    amount = 10000
    ```
     */
    amount: uint32;
}
/**
 * @example ```
{
  type = "deliver-category",
  name = "bullet"
}
```
 */
interface DeliverCategory {
    /**
     * Name of the deliver category.
     */
    name: string;
    type: 'deliver-category';
}
/**
 * @example ```
{
  type = "deliver-impact-combination",
  name = "bullet-organic",
  deliver_category = "bullet",
  impact_category = "organic",
  trigger_effect_item =
  {
    type = "play-sound",
    sound =
    {
      category = "weapon",
      variations = sound_variations("__base__/sound/bullets/bullet-impact-organic", 5, 0.3),
      aggregation = {max_count = 4, remove = true, count_already_playing = true}
    }
  }
}
```
 */
interface DeliverImpactCombination {
    deliver_category: string;
    impact_category: string;
    /**
     * Name of the deliver impact combination.
     */
    name: string;
    trigger_effect_item: TriggerEffectItem;
    type: 'deliver-impact-combination';
}
/**
 * This prototype is used for receiving an achievement when a resource entity is depleted.
 */
interface DepleteResourceAchievementPrototype extends AchievementPrototype {
    /**
     * How many resource entities need to be depleted.
     */
    amount?: uint32;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean;
}
interface DestroyCliffAchievementPrototype extends AchievementPrototype {
    amount?: uint32;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean;
}
/**
 * A display panel prototype to provide a prototype for display panels.
 */
interface DisplayPanelPrototype extends EntityWithOwnerPrototype {
    /**
     * The background color of the display panel text.
     */
    background_color?: Color;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * The maximum width of the text on the display panel.
     */
    max_text_width?: uint32;
    /**
     * The display panel's graphics.
     */
    sprites?: Sprite4Way;
    /**
     * The color of the text on the display panel.
     */
    text_color?: Color;
    /**
     * The shift of the text on the display panel.
     */
    text_shift?: Vector;
}
/**
 * This prototype is used for receiving an achievement when the player finishes the game without building a specific entity.
 */
interface DontBuildEntityAchievementPrototype extends AchievementPrototypeWithCondition {
    amount?: uint32;
    /**
     * This will disable the achievement, if this entity is placed. If you finish the game without building this entity, you receive the achievement.
     * @example ```
    dont_build = {"bulk-inserter", "fluid-wagon"}
    ```
     */
    dont_build: EntityID | EntityID[];
    /**
     * If you research technology using one of specified items before building entity, you receive the achievement.
     */
    research_with?: ItemID | ItemID[];
}
/**
 * This prototype is used for receiving an achievement when the player finishes the game without crafting more than a set amount.
 */
interface DontCraftManuallyAchievementPrototype extends AchievementPrototypeWithCondition {
    /**
     * This will disable the achievement, if the player crafts more than this.
     * @example ```
    amount = 111
    ```
     */
    amount: uint32;
}
/**
 * This prototype is used for receiving an achievement when the player kill first entity using artillery.
 */
interface DontKillManuallyAchievementPrototype extends AchievementPrototypeWithCondition {
    /**
     * This will disable the achievement, if this entity is killed manually. If you kill this entity with artillery first, you receive the achievement.
     */
    to_kill?: EntityID;
    /**
     * This will disable the achievement, if this entity type is killed manually. If you kill this entity type with artillery first, you receive the achievement.
     * @example ```
    type_not_to_kill = "unit-spawner"
    ```
     */
    type_not_to_kill?: string;
}
/**
 * This prototype is used for receiving an achievement when the player researches with a specific science pack before unlocking another.
 */
interface DontResearchBeforeResearchingAchievementPrototype extends AchievementPrototypeWithCondition {
    /**
     * This will disable the achievement, if technology unlocking this item is researched before meeting requirements.
     * @example ```
    dont_research = {"production-science-pack", "utility-science-pack"}
    ```
     */
    dont_research: ItemID | ItemID[];
    /**
     * If you research technology using one of specified items, you receive the achievement.
     * @example ```
    research_with = {"metallurgic-science-pack", "electromagnetic-science-pack", "agricultural-science-pack"}
    ```
     */
    research_with: ItemID | ItemID[];
}
/**
 * This prototype is used for receiving an achievement when the player finishes the game without receiving energy from a specific energy source.
 */
interface DontUseEntityInEnergyProductionAchievementPrototype extends AchievementPrototypeWithCondition {
    /**
     * This will **not** disable the achievement, if this entity is placed, and you have received any amount of power from it.
     * @example ```
    excluded = {"steam-engine", "steam-turbine"}
    ```
     */
    excluded: EntityID | EntityID[];
    /**
     * This will disable the achievement, if this entity is placed, and you have received any amount of power from it. If you finish the game without receiving power from this entity, you receive the achievement.
     * @example ```
    included = "solar-panel"
    ```
     */
    included?: EntityID | EntityID[];
    /**
     * If `true`, the achievements will only be checked for the last hour of the game, independently of finishing the game.
     */
    last_hour_only?: boolean;
    /**
     * The minimum amount of energy that needs to be produced by the allowed entities to trigger the achievement.
     */
    minimum_energy_produced?: Energy;
}
/**
 * Properties of the editor controller.
 */
interface EditorControllerPrototype {
    adjust_speed_based_off_zoom: boolean;
    enable_flash_light: boolean;
    fill_built_entity_energy_buffers: boolean;
    generate_neighbor_chunks: boolean;
    gun_inventory_size: ItemStackIndex;
    ignore_tile_conditions: boolean;
    instant_blueprint_building: boolean;
    instant_deconstruction: boolean;
    instant_rail_planner: boolean;
    instant_upgrading: boolean;
    inventory_size: ItemStackIndex;
    item_pickup_distance: double;
    loot_pickup_distance: double;
    mining_speed: double;
    /**
     * Must be >= 0.34375.
     */
    movement_speed: double;
    /**
     * Name of the editor controller. Base game uses "default".
     */
    name: string;
    placed_corpses_never_expire: boolean;
    render_as_day: boolean;
    show_additional_entity_info_gui: boolean;
    show_character_tab_in_controller_gui: boolean;
    show_entity_health_bars: boolean;
    show_entity_tags: boolean;
    show_hidden_entities: boolean;
    show_infinity_filters_in_controller_gui: boolean;
    show_status_icons: boolean;
    type: 'editor-controller';
}
/**
 * Entity with electric energy source with that can have some of its values changed runtime. Useful for modding in energy consumers/producers.
 */
interface ElectricEnergyInterfacePrototype extends EntityWithOwnerPrototype {
    allow_copy_paste?: boolean;
    /**
     * Only loaded if both `picture` and `pictures` are not defined.
     */
    animation?: Animation;
    /**
     * Only loaded if `picture`, `pictures`, and `animation` are not defined.
     */
    animations?: Animation4Way;
    /**
     * Whether the electric energy interface animation always runs instead of being scaled to activity.
     */
    continuous_animation?: boolean;
    /**
     * @example ```
    energy_production = "500GW"
    ```
     */
    energy_production?: Energy;
    energy_source: ElectricEnergySource;
    /**
     * @example ```
    energy_usage = "10kW"
    ```
     */
    energy_usage?: Energy;
    gui_mode?: 'all' | 'none' | 'admins';
    /**
     * The light that this electric energy interface emits.
     */
    light?: LightDefinition;
    picture?: Sprite;
    /**
     * Only loaded if `picture` is not defined.
     */
    pictures?: Sprite4Way;
    render_layer?: RenderLayer;
}
/**
 * An electric pole - part of the {@link electric system | https://wiki.factorio.com/Electric_system}.
 */
interface ElectricPolePrototype extends EntityWithOwnerPrototype {
    /**
     * Drawn above the `pictures` when the electric pole is connected to an electric network.
     */
    active_picture?: Sprite;
    /**
     * `0` means disable auto-connect.
     */
    auto_connect_up_to_n_wires?: uint8;
    connection_points: WireConnectionPoint[];
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Drawn when the electric pole is connected to an electric network.
     */
    light?: LightDefinition;
    /**
     * The maximum distance between this pole and any other connected pole - if two poles are farther apart than this, they cannot be connected together directly. Corresponds to "wire reach" in the item tooltip.
     *
     * Max value is 64.
     */
    maximum_wire_distance?: double;
    pictures?: RotatedSprite;
    radius_visualisation_picture?: Sprite;
    rewire_neighbours_when_destroying?: boolean;
    /**
     * The "radius" of this pole's supply area. Corresponds to *half* of the "supply area" in the item tooltip. If this is 3.5, the pole will have a 7x7 supply area.
     *
     * Max value is 64.
     */
    supply_area_distance: double;
    track_coverage_during_build_by_moving?: boolean;
}
/**
 * A turret that uses electricity as ammunition.
 */
interface ElectricTurretPrototype extends TurretPrototype {
    energy_source: ElectricEnergySource | VoidEnergySource;
}
/**
 * An elevated curved-A rail.
 */
interface ElevatedCurvedRailAPrototype extends CurvedRailAPrototype {
}
/**
 * An elevated curved-B rail.
 */
interface ElevatedCurvedRailBPrototype extends CurvedRailBPrototype {
}
/**
 * An elevated half diagonal rail.
 */
interface ElevatedHalfDiagonalRailPrototype extends HalfDiagonalRailPrototype {
}
/**
 * An elevated straight rail.
 */
interface ElevatedStraightRailPrototype extends StraightRailPrototype {
}
/**
 * Can spawn entities. Used for biter/spitter nests.
 */
interface EnemySpawnerPrototype extends EntityWithOwnerPrototype {
    absorptions_per_second?: Record<AirbornePollutantID, EnemySpawnerAbsorption>;
    /**
     * If this is true, this entities `is_military_target property` can be changed runtime (on the entity, not on the prototype itself).
     */
    allow_run_time_change_of_is_military_target?: false;
    call_for_help_radius: double;
    captured_spawner_entity?: EntityID;
    dying_sound?: Sound;
    graphics_set: EnemySpawnerGraphicsSet;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: true;
    /**
     * Count of defensive enemies this spawner can sustain. Defensive units are units with {@link UnitAISettings::join_attacks | prototype:UnitAISettings::join_attacks} set to false. If set below {@link EnemySpawnerPrototype::max_count_of_owned_units | prototype:EnemySpawnerPrototype::max_count_of_owned_units}, the difference will be the space reserved for non-defensive units.
     */
    max_count_of_owned_defensive_units?: uint32;
    /**
     * Count of enemies this spawner can sustain.
     */
    max_count_of_owned_units: uint32;
    max_darkness_to_spawn?: float;
    /**
     * How many friendly defensive units are required within the {@link EnemySpawnerPrototype::spawning_radius | prototype:EnemySpawnerPrototype::spawning_radius} of this spawner for it to stop producing more units. Defensive units are units with {@link UnitAISettings::join_attacks | prototype:UnitAISettings::join_attacks} set to false. If set below {@link EnemySpawnerPrototype::max_friends_around_to_spawn | prototype:EnemySpawnerPrototype::max_friends_around_to_spawn}, the difference will be the space reserved for non-defensive units.
     */
    max_defensive_friends_around_to_spawn?: uint32;
    /**
     * How many friendly units are required within the {@link EnemySpawnerPrototype::spawning_radius | prototype:EnemySpawnerPrototype::spawning_radius} of this spawner for it to stop producing more units.
     */
    max_friends_around_to_spawn: uint32;
    /**
     * Max richness to determine spawn shift. Spawn shift is linear interpolation between 0 and max_spawn_shift.
     */
    max_richness_for_spawn_shift: double;
    /**
     * Caps how much richness can be added on top of evolution when spawning units. {@link See also | https://www.reddit.com/r/factorio/comments/8pjscm/friday_facts_246_the_gui_update_part_3/e0bttnp/}
     */
    max_spawn_shift: double;
    min_darkness_to_spawn?: float;
    /**
     * Array of the {@link entities | prototype:EntityPrototype} that this spawner can spawn and their spawn probabilities. The sum of probabilities is expected to be 1.0. The array must not be empty.
     */
    result_units: UnitSpawnDefinition[];
    /**
     * Decoratives to be created when the spawner is created by the {@link map generator | https://wiki.factorio.com/Map_generator}. Placed when enemies expand if `spawn_decorations_on_expansion` is set to true.
     */
    spawn_decoration?: CreateDecorativesTriggerEffectItem[];
    /**
     * Whether `spawn_decoration` should be spawned when enemies {@link expand | https://wiki.factorio.com/Enemies#Expansions}.
     */
    spawn_decorations_on_expansion?: boolean;
    /**
     * Ticks for cooldown after unit is spawned. The first member of the tuple is min, the second member of the tuple is max.
     */
    spawning_cooldown: [
        double,
        double
    ];
    /**
     * How far from the spawner can the units be spawned.
     */
    spawning_radius: double;
    /**
     * What spaces should be between the spawned units.
     */
    spawning_spacing: double;
    time_to_capture?: uint32;
}
/**
 * Used by {@link energy shield | https://wiki.factorio.com/Energy_shield}.
 */
interface EnergyShieldEquipmentPrototype extends EquipmentPrototype {
    energy_per_shield: Energy;
    max_shield_value: float;
}
/**
 * The entity used for ghosts of entities. In-game, the inner entity (the entity this is a ghost of) is rendered with a {@link UtilityConstants::ghost_tint | prototype:UtilityConstants::ghost_tint}.
 * @example ```
{
  type = "entity-ghost",
  name = "entity-ghost",
  icon = "__core__/graphics/icons/mip/ghost-entity.png",
  icon_size = 64,
  build_sound = { { filename = "__core__/sound/build-ghost-small.ogg",  volume = 0.6 } },
  medium_build_sound = { { filename = "__core__/sound/build-ghost-medium.ogg",  volume = 0.7 } },
  large_build_sound = { { filename = "__core__/sound/build-ghost-large.ogg",  volume = 0.7 } },
  minable = { mining_time = 0, results = {} },
  mined_sound = { { filename = "__core__/sound/deconstruct-ghost.ogg",  volume = 0.4 } }
}
```
 */
interface EntityGhostPrototype extends EntityPrototype {
    huge_build_animated_sound?: Sound;
    huge_build_sound?: Sound;
    large_build_animated_sound?: Sound;
    large_build_sound?: Sound;
    medium_build_animated_sound?: Sound;
    medium_build_sound?: Sound;
    small_build_animated_sound?: Sound;
}
/**
 * Abstract base of all entities in the game. Entity is nearly everything that can be on the map (except tiles).
 *
 * For in game script access to entity, take a look at {@link LuaEntity | runtime:LuaEntity}.
 * @example ```
{
  type = "container",
  name = "wooden-chest",
  icon = "__base__/graphics/icons/wooden-chest.png",
  flags = { "placeable-neutral", "player-creation" },
  minable = { mining_time = 1, result = "wooden-chest" },
  max_health = 100,
  corpse = "small-remnants",
  collision_box = { {-0.35, -0.35}, {0.35, 0.35} },
  fast_replaceable_group = "container",
  selection_box = { {-0.5, -0.5}, {0.5, 0.5} },
  inventory_size = 16,
  open_sound = { filename = "__base__/sound/wooden-chest-open.ogg" },
  close_sound = { filename = "__base__/sound/wooden-chest-close.ogg" },
  picture =
  {
    filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
    priority = "extra-high",
    width = 46,
    height = 33,
    shift = {0.25, 0.015625}
  }
}
```
 */
interface EntityPrototype extends Prototype {
    /**
     * Names of the entity prototypes this entity prototype can be pasted on to in addition to the standard supported types.
     *
     * This is used to allow copying between types that aren't compatible on the C++ code side, by allowing mods to receive the {@link on_entity_settings_pasted | runtime:on_entity_settings_pasted} event for the given entity and do the setting pasting via script.
     * @example ```
    additional_pastable_entities = {"steel-chest", "iron-chest"}
    ```
     */
    additional_pastable_entities?: EntityID[];
    alert_icon_scale?: float;
    alert_icon_shift?: Vector;
    allow_copy_paste?: boolean;
    ambient_sounds?: WorldAmbientSoundDefinition | WorldAmbientSoundDefinition[];
    ambient_sounds_group?: EntityID;
    /**
     * Used to specify the rules for placing this entity during map generation.
     */
    autoplace?: AutoplaceSpecification;
    build_base_evolution_requirement?: double;
    /**
     * Supported values are 1 (for 1x1 grid) and 2 (for 2x2 grid, like rails).
     *
     * Internally forced to be `2` for {@link RailPrototype | prototype:RailPrototype}, {@link RailRemnantsPrototype | prototype:RailRemnantsPrototype} and {@link TrainStopPrototype | prototype:TrainStopPrototype}.
     */
    build_grid_size?: uint8;
    build_sound?: Sound;
    close_sound?: Sound;
    /**
     * Specification of the entity collision boundaries. Empty collision box means no collision and is used for smoke, projectiles, particles, explosions etc.
     *
     * The `{0,0}` coordinate in the collision box will match the entity position. It should be near the center of the collision box, to keep correct entity drawing order. The bounding box must include the `{0,0}` coordinate.
     *
     * Note, that for buildings, it is customary to leave 0.1 wide border between the edge of the tile and the edge of the building, this lets the player move between the building and electric poles/inserters etc.
     * @example ```
    collision_box = {{-0.4, -0.4}, {0.4, 0.4}}
    ```
     */
    collision_box?: BoundingBox;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by the entity type.
     */
    collision_mask?: CollisionMaskConnector;
    /**
     * The effect/trigger that happens when the entity is placed.
     */
    created_effect?: Trigger;
    /**
     * The smoke that is shown when the entity is placed.
     */
    created_smoke?: CreateTrivialSmokeEffectItem;
    /**
     * Used to merge multiple entities into one entry in the deconstruction planner.
     */
    deconstruction_alternative?: EntityID;
    diagonal_tile_grid_size?: TilePosition;
    /**
     * Specification of extra vertical space needed to see the whole entity in GUIs. This is used to calculate the correct zoom and positioning in the entity info gui, for example in the entity tooltip.
     * @example ```
    drawing_box_vertical_extension = 0.5
    ```
     */
    drawing_box_vertical_extension?: double;
    /**
     * Amount of emissions created (positive number) or cleaned (negative number) every second by the entity. This is passive and currently used just for trees and fires. This is independent of the {@link emissions of energy sources | prototype:BaseEnergySource::emissions_per_minute} used by machines, which are created actively depending on the power consumption.
     */
    emissions_per_second?: Record<AirbornePollutantID, double>;
    enemy_map_color?: Color;
    /**
     * This allows you to replace an entity that's already placed, with a different one in your inventory. For example, replacing a burner inserter with a fast inserter. The replacement entity can be a different rotation to the replaced entity and you can replace an entity with the same type.
     *
     * This is simply a string, so any string can be used here. The entity that should be replaced simply has to use the same string here.
     */
    fast_replaceable_group?: string;
    flags?: EntityPrototypeFlags;
    friendly_map_color?: Color;
    heating_energy?: Energy;
    /**
     * Where beams should hit the entity. Useful if the bounding box only covers part of the entity (e.g. feet of the character) and beams only hitting there would look weird.
     */
    hit_visualization_box?: BoundingBox;
    /**
     * Path to the icon file.
     *
     * Either this or `icons` is mandatory for entities that have at least one of these flags active: `"placeable-neutral"`, `"placeable-player`", `"placeable-enemy"`.
     *
     * Only loaded if `icons` is not defined.
     * @example ```
    icon = "__base__/graphics/icons/wooden-chest.png"
    ```
     */
    icon?: FileName;
    /**
     * Used to specify where and how should be the alt-mode icons of entities should be drawn.
     * @example ```
    icon_draw_specification = {shift = {0, 0.5}, scale = 0.75, scale_for_many = 0.5, render_layer = "entity-info-icon"}
    ```
     */
    icon_draw_specification?: IconDrawSpecification;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * This will be used in the electric network statistics, editor building selection, and the bonus gui. Can't be an empty array.
     *
     * Either this or `icon` is mandatory for entities that have at least one of these flags active: `"placeable-neutral"`, `"placeable-player`", `"placeable-enemy"`.
     */
    icons?: IconData[];
    /**
     * @example ```
    icons_positioning =
    {
      {inventory_index = defines.inventory.lab_modules, shift = {0, 0.9}},
      {inventory_index = defines.inventory.lab_input, shift = {0, 0.0}, max_icons_per_row = 6, separation_multiplier = 0.9}
    }
    ```
     */
    icons_positioning?: IconSequencePositioning[];
    /**
     * Name of a {@link ImpactCategory | prototype:ImpactCategory}.
     */
    impact_category?: string;
    map_color?: Color;
    /**
     * Used instead of the collision box during map generation. Allows space entities differently during map generation, for example if the box is bigger, the entities will be placed farther apart.
     */
    map_generator_bounding_box?: BoundingBox;
    /**
     * The item given to the player when they mine the entity and other properties relevant to mining this entity.
     * @example ```
    minable = {mining_time = 0.2, result = "boiler"}
    ```
     */
    minable?: MinableProperties;
    mined_sound?: Sound;
    mining_sound?: Sound;
    /**
     * Name of the entity that will be automatically selected as the upgrade of this entity when using the {@link upgrade planner | https://wiki.factorio.com/Upgrade_planner} without configuration.
     *
     * This entity may not have "not-upgradable" flag set and must be minable. This entity mining result must not contain item product with "hidden" flag set. Mining results with no item products are allowed. This entity may not be a {@link RollingStockPrototype | prototype:RollingStockPrototype}.
     *
     * The upgrade target entity needs to have the same bounding box, collision mask, and fast replaceable group as this entity. The upgrade target entity must have least 1 item that builds it that isn't hidden.
     * @example ```
    next_upgrade = "fast-inserter"
    ```
     */
    next_upgrade?: EntityID;
    open_sound?: Sound;
    /**
     * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.
     *
     * The order string is taken from the items in `placeable_by` if they exist, or from an item that has its {@link place_result | prototype:ItemPrototype::place_result} set to this entity.
     */
    order?: Order;
    /**
     * Item that when placed creates this entity. Determines which item is picked when "Q" (smart pipette) is used on this entity. Determines which item and item amount is needed in a blueprint of this entity and to revive a ghost of this entity.
     *
     * The item count specified here can't be larger than the stack size of that item.
     * @example ```
    placeable_by = {item = "rail", count = 4}
    ```
     */
    placeable_by?: ItemToPlace | ItemToPlace[];
    placeable_position_visualization?: Sprite;
    /**
     * When this is true, this entity prototype should be included during tile collision checks with tiles that have {@link TilePrototype::check_collision_with_entities | prototype:TilePrototype::check_collision_with_entities} set to true.
     */
    protected_from_tile_building?: boolean;
    radius_visualisation_specification?: RadiusVisualisationSpecification;
    /**
     * The entity that remains when this one is mined, deconstructed or fast-replaced. The entity wont actually be spawned if it would collide with the entity that is in the process of being mined.
     */
    remains_when_mined?: EntityID | EntityID[];
    /**
     * Whether this entity should remove decoratives that collide with it when this entity is built. When set to "automatic", if the entity type is considered {@link a building | runtime:LuaEntityPrototype::is_building} (e.g. an assembling machine or a wall) it will remove decoratives.
     */
    remove_decoratives?: 'automatic' | 'true' | 'false';
    rotated_sound?: Sound;
    selectable_in_game?: boolean;
    /**
     * Specification of the entity selection area. When empty the entity will have no selection area (and thus is not selectable).
     *
     * The selection box is usually a little bit bigger than the collision box. For tileable entities (like buildings) it should match the tile size of the building.
     * @example ```
    selection_box = {{-0.5, -0.5}, {0.5, 0.5}}
    ```
     */
    selection_box?: BoundingBox;
    /**
     * The entity with the higher number is selectable before the entity with the lower number.
     */
    selection_priority?: uint8;
    /**
     * The cursor size used when shooting at this entity.
     */
    shooting_cursor_size?: double;
    stateless_visualisation?: StatelessVisualisations;
    /**
     * Used to set the area of the entity that can have stickers on it, currently only used for units to specify the area where the green slow down stickers can appear.
     * @example ```
    sticker_box = {{-0.5, -0.5}, {0.5, 0.5}}
    ```
     */
    sticker_box?: BoundingBox;
    surface_conditions?: SurfaceCondition[];
    tile_buildability_rules?: TileBuildabilityRule[];
    tile_height?: int32;
    /**
     * Used to determine how the center of the entity should be positioned when building (unless the off-grid {@link flag | prototype:EntityPrototypeFlags} is specified).
     *
     * When the tile width is odd, the center will be in the center of the tile, when it is even, the center is on the tile transition.
     */
    tile_width?: int32;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_trigger_target_mask_by_type | prototype:UtilityConstants::default_trigger_target_mask_by_type}.
     */
    trigger_target_mask?: TriggerTargetMask;
    /**
     * May also be defined inside `graphics_set` instead of directly in the entity prototype. This is useful for entities that use a `graphics_set` property to define their graphics, because then all graphics can be defined in one place.
     *
     * {@link Currently only renders | https://forums.factorio.com/100703} for {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype} and {@link CorpsePrototype | prototype:CorpsePrototype}.
     */
    water_reflection?: WaterReflectionDefinition;
    /**
     * Will also work on entities that don't actually do work.
     */
    working_sound?: WorkingSound;
}
/**
 * Abstract base of all entities with health in the game.
 * @example ```
{
  type = "container",
  name = "wooden-chest",
  icon = "__base__/graphics/icons/wooden-chest.png",
  flags = { "placeable-neutral", "player-creation" },
  minable = { mining_time = 1, result = "wooden-chest" },
  max_health = 100,
  corpse = "small-remnants",
  collision_box = { {-0.35, -0.35}, {0.35, 0.35} },
  fast_replaceable_group = "container",
  selection_box = { {-0.5, -0.5}, {0.5, 0.5} },
  inventory_size = 16,
  open_sound = { filename = "__base__/sound/wooden-chest-open.ogg" },
  close_sound = { filename = "__base__/sound/wooden-chest-close.ogg" },
  picture =
  {
    filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
    priority = "extra-high",
    width = 46,
    height = 33,
    shift = {0.25, 0.015625}
  }
}
```
 */
interface EntityWithHealthPrototype extends EntityPrototype {
    alert_when_damaged?: boolean;
    attack_reaction?: AttackReactionItem | AttackReactionItem[];
    /**
     * Specifies the names of the {@link CorpsePrototype | prototype:CorpsePrototype} to be used when this entity dies.
     */
    corpse?: EntityID | EntityID[];
    create_ghost_on_death?: boolean;
    damaged_trigger_effect?: TriggerEffect;
    /**
     * The entities that are spawned in place of this one when it dies.
     */
    dying_explosion?: ExplosionDefinition | ExplosionDefinition[];
    dying_trigger_effect?: TriggerEffect;
    /**
     * The amount of health automatically regenerated per tick. The entity must be active for this to work.
     * @example ```
    healing_per_tick = 0.01
    ```
     */
    healing_per_tick?: float;
    /**
     * Whether the resistances of this entity should be hidden in the entity tooltip.
     */
    hide_resistances?: boolean;
    /**
     * May also be defined inside `graphics_set` instead of directly in the entity prototype. This is useful for entities that use a `graphics_set` property to define their graphics, because then all graphics can be defined in one place.
     *
     * Sprite drawn on ground under the entity to make it feel more integrated into the ground.
     */
    integration_patch?: Sprite4Way;
    /**
     * May also be defined inside `graphics_set` instead of directly in the entity prototype. This is useful for entities that use a `graphics_set` property to define their graphics, because then all graphics can be defined in one place.
     */
    integration_patch_render_layer?: RenderLayer;
    /**
     * The loot is dropped on the ground when the entity is killed.
     * @example ```
    loot =
    {
      {
        count_max = 10,
        count_min = 2,
        item = "stone",
        probability = 1
      }
    }
    ```
     */
    loot?: LootItem[];
    /**
     * The unit health can never go over the maximum. Default health of units on creation is set to max. Must be greater than 0.
     * @example ```
    max_health = 50
    ```
     */
    max_health?: float;
    /**
     * Fraction of health by which predicted damage must be exceeded before entity is considered as "predicted to die" causing turrets (and others) to stop shooting more projectiles. If entity is healing it is better to keep larger margin to avoid cases where not enough projectiles goes towards a target and it heals causing it to survive all the incoming projectiles. If entity does not heal, margin may be reduced. Must be >= 0.
     */
    overkill_fraction?: float;
    random_corpse_variation?: boolean;
    /**
     * Played when this entity is repaired with a {@link RepairToolPrototype | prototype:RepairToolPrototype}.
     */
    repair_sound?: Sound;
    /**
     * Multiplier of {@link RepairToolPrototype::speed | prototype:RepairToolPrototype::speed} for this entity prototype.
     */
    repair_speed_modifier?: float;
    /**
     * See {@link damage | https://wiki.factorio.com/Damage}.
     * @example ```
    resistances =
    {
      {
        type = "fire",
        percent = 80
      },
      {
        type = "explosion",
        percent = 30
      }
    }
    ```
     */
    resistances?: Resistance[];
}
/**
 * Abstract base of all entities with a force in the game. These entities have a {@link LuaEntity::unit_number | runtime:LuaEntity::unit_number} during runtime. Can be high priority {@link military targets | https://wiki.factorio.com/Military_units_and_structures}.
 */
interface EntityWithOwnerPrototype extends EntityWithHealthPrototype {
    /**
     * If this is true, this entity's `is_military_target` property can be changed during runtime (on the entity, not on the prototype itself).
     */
    allow_run_time_change_of_is_military_target?: boolean;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
    /**
     * The default scale is based on the tile distance of the shorter dimension. Where size 3 results into scale 1. The default minimum is 0.5 and maximum 1.0.
     */
    quality_indicator_scale?: double;
    /**
     * The shift from the bottom left corner of the selection box.
     */
    quality_indicator_shift?: Vector;
}
/**
 * This prototype is used for receiving an achievement when the player equips armor.
 */
interface EquipArmorAchievementPrototype extends AchievementPrototype {
    /**
     * The achievement will trigger if this armor or the other armor is equipped.
     * @example ```
    alternative_armor = "mech-armor"
    ```
     */
    alternative_armor: ItemID;
    /**
     * How many armors need to be equipped.
     */
    amount?: uint32;
    /**
     * The achievement will trigger if this armor or the alternative armor is equipped.
     * @example ```
    armor = "power-armor-mk2"
    ```
     */
    armor: ItemID;
    limit_quality: QualityID;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean;
}
/**
 * Defines a category to be available to {@link equipment | prototype:EquipmentPrototype} and {@link equipment grids | prototype:EquipmentGridPrototype}.
 */
interface EquipmentCategory extends Prototype {
}
/**
 * The equipment used for ghosts of equipment.
 */
interface EquipmentGhostPrototype extends EquipmentPrototype {
    /**
     * Not loaded for equipment ghosts.
     */
    categories?: EquipmentCategoryID[];
    /**
     * Not loaded for equipment ghosts.
     */
    energy_source?: ElectricEnergySource;
    /**
     * Not loaded for equipment ghosts.
     */
    shape?: EquipmentShape;
    /**
     * Not loaded for equipment ghosts.
     */
    take_result?: ItemID;
}
/**
 * The prototype of an equipment grid, for example the one used in a {@link power armor | https://wiki.factorio.com/Power_armor}.
 */
interface EquipmentGridPrototype extends Prototype {
    /**
     * Only {@link equipment | prototype:EquipmentPrototype} with at least one of these {@link categories | prototype:EquipmentCategory} can be inserted into the grid.
     */
    equipment_categories: EquipmentCategoryID[];
    height: uint32;
    /**
     * Whether this locked from user interaction which means that the user cannot put equipment into or take equipment from this equipment grid.
     */
    locked?: boolean;
    width: uint32;
}
/**
 * Abstract base of all equipment modules. Equipment modules can be inserted into {@link equipment grids | prototype:EquipmentGridPrototype}.
 */
interface EquipmentPrototype extends Prototype {
    /**
     * The color that the border of the background of this equipment should have when shown inside an equipment grid.
     */
    background_border_color?: Color;
    /**
     * The color that the background of this equipment should have when shown inside an equipment grid.
     */
    background_color?: Color;
    /**
     * Sets the categories of the equipment. It can only be inserted into {@link grids | prototype:EquipmentGridPrototype::equipment_categories} with at least one matching category.
     * This property is required, but marked as optional due to typescript inheritance limitations
     */
    categories?: EquipmentCategoryID[];
    /**
     *
     * This property is required, but marked as optional due to typescript inheritance limitations
     */
    energy_source?: ElectricEnergySource;
    /**
     * The color that the background of this equipment should have when held in the players hand and hovering over an equipment grid.
     */
    grabbed_background_color?: Color;
    /**
     * How big this equipment should be in the grid and whether it should be one solid rectangle or of a custom shape.
     * This property is required, but marked as optional due to typescript inheritance limitations
     */
    shape?: EquipmentShape;
    /**
     * The graphics to use when this equipment is shown inside an equipment grid.
     */
    sprite: Sprite;
    /**
     * Name of the item prototype that should be returned to the player when they remove this equipment from an equipment grid.
     */
    take_result?: ItemID;
}
/**
 * Used to play an animation and a sound.
 */
interface ExplosionPrototype extends EntityPrototype {
    animations: AnimationVariations;
    beam?: boolean;
    correct_rotation?: boolean;
    /**
     * Number of ticks to delay the explosion effects by.
     */
    delay?: MapTick;
    /**
     * The maximum number of ticks to randomly delay the explosion effects by. In addition to the number of ticks defined by `delay`, the explosion will be delayed by a random number of ticks between 0 and `delay_deviation` (inclusive).
     */
    delay_deviation?: MapTick;
    /**
     * The effect/trigger that happens when the explosion effect triggers after the initial delay as defined by `delay` and `delay_deviation`.
     */
    explosion_effect?: Trigger;
    fade_in_duration?: uint8;
    fade_out_duration?: uint8;
    height?: float;
    light?: LightDefinition;
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_intensity_factor_final?: float;
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_intensity_factor_initial?: float;
    light_intensity_peak_end_progress?: float;
    light_intensity_peak_start_progress?: float;
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_size_factor_final?: float;
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_size_factor_initial?: float;
    light_size_peak_end_progress?: float;
    light_size_peak_start_progress?: float;
    render_layer?: RenderLayer;
    rotate?: boolean;
    scale?: float;
    scale_animation_speed?: boolean;
    scale_deviation?: float;
    scale_end?: float;
    scale_in_duration?: uint8;
    scale_increment_per_tick?: float;
    scale_initial?: float;
    scale_initial_deviation?: float;
    scale_out_duration?: uint8;
    /**
     * Mandatory if `smoke_count` > 0.
     */
    smoke?: TrivialSmokeID;
    smoke_count?: uint16;
    smoke_slow_down_factor?: float;
    sound?: Sound;
}
/**
 * A fire.
 */
interface FireFlamePrototype extends EntityPrototype {
    add_fuel_cooldown?: uint32;
    burnt_patch_alpha_default?: float;
    burnt_patch_alpha_variations?: TileAndAlpha[];
    burnt_patch_lifetime?: uint32;
    burnt_patch_pictures?: SpriteVariations;
    damage_multiplier_decrease_per_tick?: float;
    damage_multiplier_increase_per_added_fuel?: float;
    damage_per_tick: DamageParameters;
    delay_between_initial_flames?: uint32;
    fade_in_duration?: uint32;
    fade_out_duration?: uint32;
    /**
     * Only loaded if `uses_alternative_behavior` is false.
     */
    flame_alpha?: float;
    /**
     * Only loaded if `uses_alternative_behavior` is false.
     */
    flame_alpha_deviation?: float;
    /**
     * Spawns this many `secondary_pictures` around the entity when it first spawns. It waits `delay_between_initial_flames` between each spawned `secondary_pictures`. This can be used to make fires look less repetitive.
     *
     * For example, spitters use this to make several smaller splashes around the main one.
     */
    initial_flame_count?: uint8;
    initial_lifetime?: uint32;
    initial_render_layer?: RenderLayer;
    lifetime_increase_by?: uint32;
    lifetime_increase_cooldown?: uint32;
    light?: LightDefinition;
    light_size_modifier_maximum?: float;
    light_size_modifier_per_flame?: float;
    limit_overlapping_particles?: boolean;
    maximum_damage_multiplier?: float;
    maximum_lifetime?: uint32;
    maximum_spread_count?: uint16;
    on_damage_tick_effect?: Trigger;
    on_fuel_added_action?: Trigger;
    /**
     * Only loaded if `uses_alternative_behavior` is true.
     */
    particle_alpha?: float;
    particle_alpha_blend_duration?: uint16;
    /**
     * Only loaded if `uses_alternative_behavior` is true.
     */
    particle_alpha_deviation?: float;
    pictures?: AnimationVariations;
    render_layer?: RenderLayer;
    secondary_picture_fade_out_duration?: uint32;
    secondary_picture_fade_out_start?: uint32;
    secondary_pictures?: AnimationVariations;
    secondary_render_layer?: RenderLayer;
    small_tree_fire_pictures?: AnimationVariations;
    smoke?: SmokeSource[];
    smoke_fade_in_duration?: uint32;
    smoke_fade_out_duration?: uint32;
    smoke_source_pictures?: AnimationVariations;
    spawn_entity?: EntityID;
    spread_delay: uint32;
    spread_delay_deviation: uint32;
    tree_dying_factor?: float;
    /**
     * If `false`, then all animations loop. If `true`, they run once and stay on the final frame. Also changes the behavior of several other fire properties as mentioned in their descriptions.
     *
     * For example, spitters use alternate behavior, flamethrower flames don't.
     */
    uses_alternative_behavior?: boolean;
}
/**
 * Entity that spawns in water tiles, which can be mined. Moves around unless deactivated with {@link LuaEntity::active | runtime:LuaEntity::active} = false.
 * @example ```
{
  type = "fish",
  name = "fish",
  icon = "__base__/graphics/icons/fish.png",
  icon_size = 64,
  flags = { "placeable-neutral", "not-on-map" },
  minable = { mining_time = 1, result = "raw-fish", count = 5 },
  max_health = 20,
  subgroup = "creatures",
  order = "b-a",
  collision_box = { {-0.75, -0.75}, {0.75, 0.75} },
  selection_box = { {-0.5, -0.3}, {0.5, 0.3} },
  pictures =
  {
    {
      filename = "__base__/graphics/entity/fish/fish-1.png",
      priority = "extra-high",
      width = 22,
      height = 36
    },
    {
      filename = "__base__/graphics/entity/fish/fish-2.png",
      priority = "extra-high",
      width = 32,
      height = 32
    }
  },
  autoplace = { influence = 0.01 },
  protected_from_tile_building = false
}
```
 */
interface FishPrototype extends EntityWithHealthPrototype {
    pictures?: SpriteVariations;
}
/**
 * A fluid.
 * @example ```
{
  type = "fluid",
  name = "water",
  default_temperature = 15,
  max_temperature = 100,
  heat_capacity = "0.2kJ",
  base_color = { r = 0, g = 0.34, b = 0.6 },
  flow_color = { r = 0.7, g = 0.7, b = 0.7 },
  icon = "__base__/graphics/icons/fluid/water.png",
  icon_size = 64,
  order = "a[fluid]-a[water]"
}
```
 */
interface FluidPrototype extends Prototype {
    /**
     * Whether the fluid should be included in the barrel recipes automatically generated by the base mod.
     *
     * This property is not read by the game engine itself, but the base mod's data-updates.lua file. This means it is discarded by the game engine after loading finishes.
     */
    auto_barrel?: boolean;
    /**
     * Used by bars that show the fluid color, like the flamethrower turret fill bar in the tooltip, or the fill bar for the fluid wagon tooltip; and for the pipe windows and storage tank fill gauges.
     */
    base_color: Color;
    /**
     * Also the minimum temperature of the fluid. Has to be lower than `max_temperature`.
     */
    default_temperature: float;
    /**
     * Scales pollution generated when the fluid is consumed.
     */
    emissions_multiplier?: double;
    /**
     * Used only for pipe windows or storage tank fill gauges.
     */
    flow_color: Color;
    /**
     * @example ```
    fuel_value = "3MJ"
    ```
     */
    fuel_value?: Energy;
    /**
     * Above this temperature the `gas_flow` animation is used to display the fluid inside storage tanks and pipes.
     */
    gas_temperature?: float;
    /**
     * Joule needed to heat 1 Unit by 1 °C.
     * @example ```
    heat_capacity = "0.2kJ"
    ```
     */
    heat_capacity?: Energy;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    max_temperature?: float;
    /**
     * Color to use for visualization. This color should be vibrant and easily distinguished.
     *
     * If not specified, this will be auto-generated from `base_color` by converting to HSV, decreasing saturation by 10% and setting value to 80%.
     */
    visualization_color?: Color;
}
/**
 * Used for example for the handheld flamethrower.
 */
interface FluidStreamPrototype extends EntityPrototype {
    /**
     * Action that is triggered every time a particle lands. Not triggered for the first particle if `initial_action` is non-empty.
     */
    action?: Trigger;
    ground_light?: LightDefinition;
    /**
     * Action that is triggered when the first particle lands.
     */
    initial_action?: Trigger;
    oriented_particle?: boolean;
    particle?: Animation;
    particle_alpha_per_part?: float;
    /**
     * Number of spawned child particles of the stream. Must be greater than 0 and less than 256.
     */
    particle_buffer_size?: uint32;
    particle_end_alpha?: float;
    /**
     * Will be set to 1 by the game if less than 1.
     */
    particle_fade_out_duration?: uint16;
    /**
     * Value between 0 and 1.
     */
    particle_fade_out_threshold?: float;
    /**
     * Must be larger than 0. `particle_horizontal_speed` has to be greater than `particle_horizontal_speed_deviation`.
     */
    particle_horizontal_speed: float;
    particle_horizontal_speed_deviation: float;
    /**
     * Value between 0 and 1.
     */
    particle_loop_exit_threshold?: float;
    /**
     * Will be set to 1 by the game if less than 1.
     */
    particle_loop_frame_count?: uint16;
    particle_scale_per_part?: float;
    /**
     * The stream will spawn one particle every `particle_spawn_interval` ticks until the `particle_spawn_timeout` is reached. The first particle will trigger an `initial_action` upon landing. Each particle triggers an `action` upon landing. Particles spawned within a single `particle_spawn_timeout` interval will be connected by a stretched `spine_animation`.
     */
    particle_spawn_interval: uint16;
    particle_spawn_timeout?: uint16;
    particle_start_alpha?: float;
    particle_start_scale?: float;
    particle_vertical_acceleration: float;
    /**
     * The point in the particles projectile arc to start spawning smoke. 0.5 (the default) starts spawning smoke at the halfway point between the source and target.
     */
    progress_to_create_smoke?: float;
    shadow?: Animation;
    shadow_scale_enabled?: boolean;
    /**
     * Smoke spawning is controlled by `progress_to_create_smoke`.
     */
    smoke_sources?: SmokeSource[];
    special_neutral_target_damage?: DamageParameters;
    spine_animation?: Animation;
    stream_light?: LightDefinition;
    target_initial_position_only?: boolean;
    target_position_deviation?: double;
    width?: float;
}
/**
 * A turret that uses {@link fluid | prototype:FluidPrototype} as ammunition.
 */
interface FluidTurretPrototype extends TurretPrototype {
    /**
     * Before an turret that was out of fluid ammunition is able to fire again, the `fluid_buffer_size` must fill to this proportion.
     */
    activation_buffer_ratio: FluidAmount;
    /**
     * Requires ammo_type in attack_parameters.
     */
    attack_parameters: StreamAttackParameters;
    attacking_muzzle_animation_shift?: AnimatedVector;
    ending_attack_muzzle_animation_shift?: AnimatedVector;
    enough_fuel_indicator_light?: LightDefinition;
    enough_fuel_indicator_picture?: Sprite4Way;
    fluid_box: FluidBox;
    fluid_buffer_input_flow: FluidAmount;
    fluid_buffer_size: FluidAmount;
    folded_muzzle_animation_shift?: AnimatedVector;
    folding_muzzle_animation_shift?: AnimatedVector;
    muzzle_animation?: Animation;
    muzzle_light?: LightDefinition;
    not_enough_fuel_indicator_light?: LightDefinition;
    not_enough_fuel_indicator_picture?: Sprite4Way;
    /**
     * The sprite will be drawn on top of fluid turrets that are out of fluid ammunition. If the `out_of_ammo_alert_icon` is not set, {@link UtilitySprites::fluid_icon | prototype:UtilitySprites::fluid_icon} will be used instead.
     */
    out_of_ammo_alert_icon?: Sprite;
    prepared_muzzle_animation_shift?: AnimatedVector;
    preparing_muzzle_animation_shift?: AnimatedVector;
    starting_attack_muzzle_animation_shift?: AnimatedVector;
    /**
     * Always `true`, forcing the turret's collision box to be affected by its rotation.
     */
    turret_base_has_direction: true;
}
/**
 * A {@link fluid wagon | https://wiki.factorio.com/Fluid_wagon}.
 */
interface FluidWagonPrototype extends RollingStockPrototype {
    capacity: FluidAmount;
    quality_affects_capacity?: boolean;
    /**
     * Must be 1, 2 or 3.
     */
    tank_count?: uint8;
}
/**
 * Abstract base for construction/logistics and combat robots.
 */
interface FlyingRobotPrototype extends EntityWithOwnerPrototype {
    /**
     * How much energy does it cost to move 1 tile.
     *
     * Used only by {@link robots with logistic interface | prototype:RobotWithLogisticInterfacePrototype}.
     * @example ```
    energy_per_move = "5kJ"
    ```
     */
    energy_per_move?: Energy;
    /**
     * How much energy does it cost to fly for 1 tick.
     *
     * Used only by {@link robots with logistic interface | prototype:RobotWithLogisticInterfacePrototype}.
     * @example ```
    energy_per_tick = "0.05kJ"
    ```
     */
    energy_per_tick?: Energy;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
    /**
     * How much energy can be stored in the batteries.
     *
     * Used only by {@link robots with logistic interface | prototype:RobotWithLogisticInterfacePrototype}.
     * @example ```
    max_energy = "1.5MJ"
    ```
     */
    max_energy?: Energy;
    /**
     * The maximum flying speed of the robot, including bonuses, in tiles/tick. Useful to limit the impact of {@link worker robot speed research | prototype:WorkerRobotSpeedModifier}.
     */
    max_speed?: double;
    /**
     * If the robot's battery fill ratio is more than this, it does not need to charge before stationing.
     *
     * Used only by {@link robots with logistic interface | prototype:RobotWithLogisticInterfacePrototype}.
     */
    max_to_charge?: float;
    /**
     * The robot will go to charge when its battery fill ratio is less than this.
     *
     * Used only by {@link robots with logistic interface | prototype:RobotWithLogisticInterfacePrototype}.
     */
    min_to_charge?: float;
    /**
     * The flying speed of the robot, in tiles/tick.
     */
    speed: double;
    /**
     * Some robots simply crash, some slowdown but keep going. 0 means crash.
     *
     * Used only by {@link robots with logistic interface | prototype:RobotWithLogisticInterfacePrototype}.
     * @example ```
    speed_multiplier_when_out_of_energy = 0.2
    ```
     */
    speed_multiplier_when_out_of_energy?: float;
}
/**
 * Fonts are used in all GUIs in the game.
 * @example ```
{
  type = "font",
  name = "default-button",
  from = "default-bold",
  size = 18
}
```
 */
interface FontPrototype {
    /**
     * Whether the font has a border.
     */
    border?: boolean;
    /**
     * The color of the border, if enabled.
     */
    border_color?: Color;
    filtered?: boolean;
    /**
     * The name of the fonts .ttf descriptor. This descriptor must be defined in the locale info.json. Refer to `data/core/locale/_language_/info.json` for examples.
     */
    from: string;
    /**
     * Name of the font.
     */
    name: string;
    /**
     * Size of the font.
     */
    size: int32;
    spacing?: float;
    type: 'font';
}
/**
 * Each item which has a fuel_value must have a fuel category. The fuel categories are used to allow only certain fuels to be used in {@link EnergySource | prototype:EnergySource}.
 * @example ```
{
  type = "fuel-category",
  name = "best-fuel"
}
```
 */
interface FuelCategory extends Prototype {
    fuel_value_type?: LocalisedString;
}
/**
 * A furnace. Normal furnaces only process "smelting" category recipes, but you can make furnaces that process other {@link recipe categories | prototype:RecipeCategory}. The difference to assembling machines is that furnaces automatically choose their recipe based on input.
 */
interface FurnacePrototype extends CraftingMachinePrototype {
    /**
     * The locale key of the message shown when the player attempts to insert an item into the furnace that cannot be processed by that furnace. In-game, the locale is provided the `__1__` parameter, which is the localised name of the item.
     *
     * The locale key is also used with an `_until` suffix for items that cannot be processed until they recipe is unlocked by a technology.
     */
    cant_insert_at_source_message_key?: string;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    circuit_connector_flipped?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    /**
     * The locale key of the tooltip to be shown in the input slot instead of the automatically generated list of items that fit there
     */
    custom_input_slot_tooltip_key?: string;
    default_recipe_finished_signal?: SignalIDConnector;
    default_working_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * The number of output slots.
     */
    result_inventory_size: ItemStackIndex;
    /**
     * The number of input slots, but not more than 1.
     */
    source_inventory_size: ItemStackIndex;
}
interface FusionGeneratorPrototype extends EntityWithOwnerPrototype {
    /**
     * `output_flow_limit` is mandatory and must be positive.
     */
    energy_source: ElectricEnergySource;
    graphics_set?: FusionGeneratorGraphicsSet;
    /**
     * {@link filter | prototype:FluidBox::filter} is mandatory.
     */
    input_fluid_box: FluidBox;
    /**
     * Must be positive.
     */
    max_fluid_usage: FluidAmount;
    /**
     * {@link filter | prototype:FluidBox::filter} is mandatory.
     */
    output_fluid_box: FluidBox;
    /**
     * Affects animation speed and working sound.
     */
    perceived_performance?: PerceivedPerformance;
}
/**
 * Fusion reactor. Consumes fluid, fuel and additional energy to produce other fluid. Kind of advanced boiler. Can also have neighbour bonus.
 */
interface FusionReactorPrototype extends EntityWithOwnerPrototype {
    /**
     * Second energy source for the process: provides fuel
     */
    burner: BurnerEnergySource;
    /**
     * First energy source for the process: provides energy
     */
    energy_source: ElectricEnergySource;
    graphics_set: FusionReactorGraphicsSet;
    /**
     * The input fluid box.
     *
     * {@link filter | prototype:FluidBox::filter} is mandatory.
     */
    input_fluid_box: FluidBox;
    /**
     * Maximum amount of fluid converted from `input_fluid_box` to `output_fluid_box` within a single tick.
     *
     * Must be positive.
     */
    max_fluid_usage: FluidAmount;
    neighbour_bonus?: float;
    /**
     * Defines connection points to neighbours used to compute neighbour bonus.
     */
    neighbour_connectable?: NeighbourConnectable;
    /**
     * The output fluid box.
     *
     * {@link filter | prototype:FluidBox::filter} is mandatory.
     */
    output_fluid_box: FluidBox;
    /**
     * Affects working sound.
     */
    perceived_performance?: PerceivedPerformance;
    /**
     * Power input consumed from first energy source at full performance.
     *
     * Cannot be negative.
     */
    power_input: Energy;
    /**
     * The temperature of the fluid to output. If not defined, the default temperature of the output fluid will be used.
     */
    target_temperature?: float;
    /**
     * If set to true, only North and East direction will be buildable.
     */
    two_direction_only?: boolean;
}
/**
 * A {@link gate | https://wiki.factorio.com/Gate}.
 */
interface GatePrototype extends EntityWithOwnerPrototype {
    activation_distance: double;
    /**
     * Played when the gate closes.
     */
    closing_sound?: Sound;
    fadeout_interval?: uint32;
    horizontal_animation?: Animation;
    horizontal_rail_animation_left?: Animation;
    horizontal_rail_animation_right?: Animation;
    horizontal_rail_base?: Animation;
    /**
     * This collision mask is used when the gate is open.
     *
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by `"gate/opened"`.
     */
    opened_collision_mask?: CollisionMaskConnector;
    /**
     * Played when the gate opens.
     */
    opening_sound?: Sound;
    opening_speed: float;
    timeout_to_close: uint32;
    vertical_animation?: Animation;
    vertical_rail_animation_left?: Animation;
    vertical_rail_animation_right?: Animation;
    vertical_rail_base?: Animation;
    wall_patch?: Animation;
}
/**
 * Used by {@link portable fusion reactor | https://wiki.factorio.com/Portable_fusion_reactor}. Provides power in equipment grids. Can produce power for free or use a burner energy source.
 */
interface GeneratorEquipmentPrototype extends EquipmentPrototype {
    /**
     * If not defined, this equipment produces power for free.
     */
    burner?: BurnerEnergySource;
    /**
     * The power output of this equipment.
     * @example ```
    power = "750kW"
    ```
     */
    power: Energy;
}
/**
 * An entity that produces power from fluids, for example a {@link steam engine | https://wiki.factorio.com/Steam_engine}.
 */
interface GeneratorPrototype extends EntityWithOwnerPrototype {
    /**
     * If set to true, the available power output is based on the {@link FluidPrototype::fuel_value | prototype:FluidPrototype::fuel_value}. Otherwise, the available power output will be based on the fluid temperature.
     */
    burns_fluid?: boolean;
    /**
     * This property is used when `burns_fluid` is true and the fluid has a {@link fuel_value | prototype:FluidPrototype::fuel_value} of 0.
     *
     * This property is also used when `burns_fluid` is false and the fluid is at default temperature.
     *
     * In these cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
     */
    destroy_non_fuel_fluid?: boolean;
    /**
     * How much energy the generator produces compared to how much energy it consumes. For example, an effectivity of 0.5 means that half of the consumed energy is output as power.
     */
    effectivity?: double;
    energy_source: ElectricEnergySource;
    /**
     * This must have a filter if `max_power_output` is not defined.
     */
    fluid_box: FluidBox;
    /**
     * The number of fluid units the generator uses per tick.
     */
    fluid_usage_per_tick: FluidAmount;
    horizontal_animation?: Animation;
    horizontal_frozen_patch?: Sprite;
    /**
     * The power production of the generator is capped to this value. This is also the value that is shown as the maximum power output in the tooltip of the generator.
     *
     * `fluid_box` must have a filter if this is not defined.
     */
    max_power_output?: Energy;
    /**
     * The maximum temperature to which the efficiency can increase. At this temperature the generator will run at 100% efficiency. Note: Higher temperature fluid can still be consumed.
     *
     * Used to calculate the `max_power_output` if it is not defined and `burns_fluid` is false. Then, the max power output is `(min(fluid_max_temp, maximum_temperature) - fluid_default_temp) × fluid_usage_per_tick × fluid_heat_capacity × effectivity`, the fluid is the filter specified on the `fluid_box`.
     */
    maximum_temperature: float;
    /**
     * Affects animation speed and working sound.
     */
    perceived_performance?: PerceivedPerformance;
    /**
     * Scales the generator's fluid usage to its maximum power output.
     *
     * Setting this to true prevents the generator from overconsuming fluid, for example when higher than`maximum_temperature` fluid is fed to the generator.
     *
     * If scale_fluid_usage is false, the generator consumes the full `fluid_usage_per_tick` and any of the extra energy in the fluid (in the form of higher temperature) is wasted. The {@link steam engine | https://wiki.factorio.com/Steam_engine} exhibits this behavior when fed steam from {@link heat exchangers | https://wiki.factorio.com/Heat_exchanger}.
     */
    scale_fluid_usage?: boolean;
    smoke?: SmokeSource[];
    vertical_animation?: Animation;
    vertical_frozen_patch?: Sprite;
}
/**
 * Properties of the god controller.
 */
interface GodControllerPrototype {
    /**
     * Names of the crafting categories the player can craft recipes from.
     */
    crafting_categories?: RecipeCategoryID[];
    inventory_size: ItemStackIndex;
    item_pickup_distance: double;
    loot_pickup_distance: double;
    /**
     * Names of the resource categories the player can mine resources from.
     */
    mining_categories?: ResourceCategoryID[];
    mining_speed: double;
    /**
     * Must be >= 0.34375.
     */
    movement_speed: double;
    /**
     * Name of the god-controller. Base game uses "default".
     */
    name: string;
    type: 'god-controller';
}
/**
 * This prototype is used for receiving an achievement when the player gets attacked due to pollution.
 */
interface GroupAttackAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, if the player receives this amount of attacks. **Note**: The default achievement "it stinks and they don't like it" uses the amount of 1. (As in getting attacked once.)
     * @example ```
    amount = 10
    ```
     */
    amount?: uint32;
    /**
     * The type of attack that triggers this achievement. "autonomous" attacks are triggered in response to pollution or a territory disturbance. "distraction" attacks are in response to taking damage or seeing a nearby enemy. "scripted" attacks are triggered from mods.
     */
    attack_type?: 'autonomous' | 'distraction' | 'scripted';
    /**
     * The achievement is only triggered if the attacking group of enemies contains at least one of the entities listed here.
     */
    entities?: EntityID[];
}
/**
 * The available GUI styles.
 */
interface GuiStyle extends PrototypeBase {
    default_sprite_priority?: SpritePriority;
    default_sprite_scale?: double;
    default_tileset?: FileName;
}
/**
 * A gun. A weapon to deal damage to entities.
 */
interface GunPrototype extends ItemPrototype {
    /**
     * The information the item needs to know in order to know what ammo it requires, the sounds, and range.
     */
    attack_parameters: AttackParameters;
}
/**
 * A half diagonal rail.
 */
interface HalfDiagonalRailPrototype extends RailPrototype {
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of straight rail is hardcoded to `{{-0.75, -1.9}, {0.75, 1.9}}`.
     */
    collision_box?: BoundingBox;
}
/**
 * This entity produces or consumes heat. Its heat settings can be changed runtime.
 */
interface HeatInterfacePrototype extends EntityWithOwnerPrototype {
    gui_mode?: 'all' | 'none' | 'admins';
    heat_buffer: HeatBuffer;
    picture?: Sprite;
}
/**
 * A {@link heat pipe | https://wiki.factorio.com/Heat_pipe}.
 */
interface HeatPipePrototype extends EntityWithOwnerPrototype {
    connection_sprites?: ConnectableEntityGraphics;
    heat_buffer: HeatBuffer;
    heat_glow_sprites?: ConnectableEntityGraphics;
    /**
     * Must be >= 0.
     */
    heating_radius?: float;
}
/**
 * Used to attach graphics for {@link cursor boxes | prototype:CursorBoxType} to entities during runtime. HighlightBoxEntity can also be independent from entities so it is simply drawn somewhere in the world. See {@link LuaSurface::create_entity | runtime:LuaSurface::create_entity} for the available options for type "highlight-box".
 *
 * The {@link collision_box | prototype:EntityPrototype::collision_box} of the highlight box prototype is ignored during runtime, instead the "bounding_box" given in create_entity() or the selection box of the target entity is used.
 */
interface HighlightBoxEntityPrototype extends EntityPrototype {
}
/**
 * @example ```
{
  type = "impact-category",
  name = "metal"
}
```
 */
interface ImpactCategory {
    /**
     * Name of the impact category.
     */
    name: string;
    type: 'impact-category';
}
/**
 * A cargo wagon that can spawn or void items at will.
 */
interface InfinityCargoWagonPrototype extends CargoWagonPrototype {
    erase_contents_when_mined?: boolean;
    /**
     * Controls which players can control what the chest spawns.
     */
    gui_mode?: 'all' | 'none' | 'admins';
    /**
     * When true, items created inside the infinity cargo wagon will not start to spoil until they have been removed from the wagon.
     */
    preserve_contents_when_created?: boolean;
}
/**
 * A generic container, such as a chest, that can spawn or void items and interact with the logistics network.
 */
interface InfinityContainerPrototype extends LogisticContainerPrototype {
    erase_contents_when_mined: boolean;
    /**
     * Controls which players can control what the chest spawns.
     */
    gui_mode?: 'all' | 'none' | 'admins';
    /**
     * The number of slots in this container. May not be zero.
     */
    inventory_size: ItemStackIndex;
    /**
     * The way this chest interacts with the logistic network.
     */
    logistic_mode?: 'active-provider' | 'passive-provider' | 'requester' | 'storage' | 'buffer';
    /**
     * When true, items created inside the infinity chest will not start to spoil until they have been removed from the chest.
     */
    preserve_contents_when_created?: boolean;
    /**
     * Whether the "no network" icon should be rendered on this entity if the entity is not within a logistics network.
     */
    render_not_in_network_icon?: boolean;
}
/**
 * This entity produces or consumes fluids. Its fluid settings can be changed runtime.
 */
interface InfinityPipePrototype extends PipePrototype {
    gui_mode?: 'all' | 'none' | 'admins';
}
/**
 * An {@link inserter | https://wiki.factorio.com/Inserter}.
 */
interface InserterPrototype extends EntityWithOwnerPrototype {
    /**
     * Whether this burner inserter can fuel itself from the fuel inventory of the entity it is picking up items from.
     */
    allow_burner_leech?: boolean;
    /**
     * Whether pickup and insert position can be set run-time.
     */
    allow_custom_vectors?: boolean;
    /**
     * Whether this inserter is considered a bulk inserter. Relevant for determining how {@link inserter capacity bonus (research) | https://wiki.factorio.com/Inserter_capacity_bonus_(research}) applies to the inserter.
     */
    bulk?: boolean;
    /**
     * Whether the inserter hand should move to the items it picks up from belts, leading to item chasing behaviour. If this is off, the inserter hand will stay in the center of the belt and any items picked up from the edges of the belt "teleport" to the inserter hand.
     */
    chases_belt_items?: boolean;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    default_stack_control_input_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Whether the item that the inserter is holding should be drawn.
     */
    draw_held_item?: boolean;
    /**
     * Whether the yellow arrow that indicates the drop point of the inserter and the line that indicates the pickup position should be drawn.
     */
    draw_inserter_arrow?: boolean;
    energy_per_movement?: Energy;
    energy_per_rotation?: Energy;
    /**
     * Defines how this inserter gets energy. The emissions set on the energy source are ignored so inserters cannot produce pollution.
     */
    energy_source: EnergySource;
    /**
     * If inserter waits for full hand it could become stuck when item in hand changed because of spoiling. If this flag is set then inserter will start dropping held stack even if it was waiting for full hand.
     */
    enter_drop_mode_if_held_stack_spoiled?: boolean;
    extension_speed: double;
    /**
     * How many filters this inserter has. Maximum count of filtered items in inserter is 5.
     */
    filter_count?: uint8;
    /**
     * If drop target is belt, inserter may grab less so that it does not drop partial stacks unless it is forced to drop partial.
     */
    grab_less_to_match_belt_stack?: boolean;
    hand_base_frozen?: Sprite;
    hand_base_picture?: Sprite;
    hand_base_shadow?: Sprite;
    hand_closed_frozen?: Sprite;
    hand_closed_picture?: Sprite;
    hand_closed_shadow?: Sprite;
    hand_open_frozen?: Sprite;
    hand_open_picture?: Sprite;
    hand_open_shadow?: Sprite;
    /**
     * Used to determine how long the arm of the inserter is when drawing it. Does not affect gameplay. The lower the value, the straighter the arm. Increasing the value will give the inserter a bigger bend due to its longer parts.
     */
    hand_size?: double;
    insert_position: Vector;
    /**
     * This inserter will not create stacks on belt with more than this amount of items. Must be >= 1.
     */
    max_belt_stack_size?: uint8;
    pickup_position: Vector;
    platform_frozen?: Sprite4Way;
    platform_picture?: Sprite4Way;
    rotation_speed: double;
    /**
     * Stack size bonus that is inherent to the prototype without having to be researched.
     */
    stack_size_bonus?: uint8;
    starting_distance?: double;
    /**
     * Whether the inserter should be able to fish {@link fish | https://wiki.factorio.com/Raw_fish}.
     */
    use_easter_egg?: boolean;
    /**
     * Inserter will wait until its hand is full.
     */
    wait_for_full_hand?: boolean;
}
interface InventoryBonusEquipmentPrototype extends EquipmentPrototype {
    energy_source?: ElectricEnergySource;
    inventory_size_bonus: ItemStackIndex;
}
/**
 * The entity used for items on the ground.
 * @example ```
{
  type = "item-entity",
  name = "item-on-ground",
  flags = { "placeable-off-grid", "not-on-map" },
  collision_box = { {-0.14, -0.14}, {0.14, 0.14} },
  selection_box = { {-0.17, -0.17}, {0.17, 0.17} },
  minable = { mining_time = 0.025 }
}
```
 */
interface ItemEntityPrototype extends EntityPrototype {
    /**
     * Item entity collision box has to have same width as height.
     *
     * Specification of the entity collision boundaries. Empty collision box means no collision and is used for smoke, projectiles, particles, explosions etc.
     *
     * The `{0,0}` coordinate in the collision box will match the entity position. It should be near the center of the collision box, to keep correct entity drawing order. The bounding box must include the `{0,0}` coordinate.
     *
     * Note, that for buildings, it is customary to leave 0.1 wide border between the edge of the tile and the edge of the building, this lets the player move between the building and electric poles/inserters etc.
     * @example ```
    collision_box = {{-0.4, -0.4}, {0.4, 0.4}}
    ```
     */
    collision_box?: BoundingBox;
}
/**
 * An item group. Item groups are the tabs shown above the list of craftable items in the player's inventory GUI. The built-in groups are "logistics", "production", "intermediate-products" and "combat" but mods can define their own.
 *
 * Items are sorted into item groups by sorting them into a {@link subgroup | prototype:ItemPrototype::subgroup} which then belongs to an {@link item group | prototype:ItemSubGroup::group}.
 * @example ```
{
  type = "item-group",
  name = "logistics",
  order = "a",
  icon = "__base__/graphics/item-group/logistics.png",
  icon_size = 128,
}
```
 */
interface ItemGroup extends Prototype {
    /**
     * Path to the icon that is shown to represent this item group.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * The base game uses 128px icons for item groups.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * The icon that is shown to represent this item group. Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * Item ingredients in recipes are ordered by item group. The `order_in_recipe` property can be used to specify the ordering in recipes without affecting the inventory order.
     */
    order_in_recipe?: Order;
}
/**
 * Possible configuration for all items.
 */
interface ItemPrototype extends Prototype {
    /**
     * Whether the item should be included in the self-recycling recipes automatically generated by the quality mod.
     *
     * This property is not read by the game engine itself, but the quality mod's data-updates.lua file. This means it is discarded by the game engine after loading finishes.
     */
    auto_recycle?: boolean;
    /**
     * The item that is the result when this item gets burned as fuel.
     */
    burnt_result?: ItemID;
    close_sound?: Sound;
    /**
     * Only used by hidden setting, support may be limited.
     */
    color_hint?: ColorHintSpecification;
    /**
     * If this is set, it is used to show items in alt-mode instead of the normal item icon. This can be useful to increase the contrast of the icon with the dark alt-mode {@link icon outline | prototype:UtilityConstants::item_outline_color}.
     *
     * Path to the icon file.
     *
     * Only loaded if `dark_background_icons` is not defined.
     */
    dark_background_icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `dark_background_icons` is not defined.
     */
    dark_background_icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    dark_background_icons?: IconData[];
    default_import_location?: SpaceLocationID;
    /**
     * The effect/trigger that happens when an item is destroyed by being dropped on a {@link TilePrototype | prototype:TilePrototype} marked as destroying dropped items.
     *
     * This overrides the {@link TilePrototype::default_destroyed_dropped_item_trigger | prototype:TilePrototype::default_destroyed_dropped_item_trigger} from the tile.
     */
    destroyed_by_dropping_trigger?: Trigger;
    drop_sound?: Sound;
    /**
     * Specifies some properties of the item.
     * @example ```
    flags = { "hide-from-bonus-gui" }
    ```
     */
    flags?: ItemPrototypeFlags;
    /**
     * Must be 0 or positive.
     */
    fuel_acceleration_multiplier?: double;
    /**
     * Additional fuel acceleration multiplier per quality level. Defaults to 30% of `fuel_acceleration_multiplier - 1` if `fuel_acceleration_multiplier` is larger than 1. Otherwise defaults to 0.
     *
     * Must be 0 or positive.
     */
    fuel_acceleration_multiplier_quality_bonus?: double;
    /**
     * Must exist when a nonzero fuel_value is defined.
     */
    fuel_category?: FuelCategoryID;
    fuel_emissions_multiplier?: double;
    /**
     * Colors the glow of the burner energy source when this fuel is burned. Can also be used to color the glow of reactors burning the fuel, see {@link ReactorPrototype::use_fuel_glow_color | prototype:ReactorPrototype::use_fuel_glow_color}.
     */
    fuel_glow_color?: Color;
    /**
     * Must be 0 or positive.
     */
    fuel_top_speed_multiplier?: double;
    /**
     * Additional fuel top speed multiplier per quality level. Defaults to 30% of `fuel_top_speed_multiplier - 1` if `fuel_top_speed_multiplier` is larger than 1. Otherwise defaults to 0.
     *
     * Must be 0 or positive.
     */
    fuel_top_speed_multiplier_quality_bonus?: double;
    /**
     * Amount of energy the item gives when used as fuel.
     *
     * Mandatory if `fuel_acceleration_multiplier`, `fuel_top_speed_multiplier` or `fuel_emissions_multiplier` or `fuel_glow_color` are used.
     * @example ```
    fuel_value = "12MJ"
    ```
     */
    fuel_value?: Energy;
    has_random_tint?: boolean;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    ingredient_to_weight_coefficient?: double;
    inventory_move_sound?: Sound;
    open_sound?: Sound;
    pick_sound?: Sound;
    /**
     * Used to give the item multiple different icons so that they look less uniform on belts. For inventory icons and similar, `icon/icons` will be used. Maximum number of variations is 16.
     *
     * When using sprites of size `64` (same as base game icons), the `scale` should be set to 0.5.
     */
    pictures?: SpriteVariations;
    place_as_equipment_result?: EquipmentID;
    place_as_tile?: PlaceAsTile;
    /**
     * Name of the {@link EntityPrototype | prototype:EntityPrototype} that can be built using this item. If this item should be the one that construction bots use to build the specified `place_result`, set the `"primary-place-result"` {@link item flag | prototype:ItemPrototypeFlags}.
     *
     * The localised name of the entity will be used as the in-game item name. This behavior can be overwritten by specifying `localised_name` on this item, it will be used instead.
     * @example ```
    place_result = "wooden-chest"
    ```
     */
    place_result?: EntityID;
    plant_result?: EntityID;
    /**
     * Randomly tints item instances on belts and in the world. 0 no tinting. 1 full tint.
     */
    random_tint_color?: Color;
    rocket_launch_products?: ItemProductPrototype[];
    /**
     * The way this item works when we try to send it to the orbit on its own.
     *
     * When "manual" is set, it can only be launched by pressing the launch button in the rocket silo.
     *
     * When "automated" is set, it will force the existence of "launch to orbit automatically" checkBox in the rocket silo which will then force the silo to automatically send the item to orbit when present.
     */
    send_to_orbit_mode?: SendToOrbitMode;
    /**
     * Used by Inserters with spoil priority. Item with higher spoil level is considered more spoiled than item with lower spoil level regardless of progress of spoiling.
     */
    spoil_level?: uint8;
    spoil_result?: ItemID;
    spoil_ticks?: uint32;
    spoil_to_trigger_result?: SpoilToTriggerResult;
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 64
    ```
     */
    stack_size: ItemCountType;
    /**
     * The default weight is calculated automatically from recipes and falls back to {@link UtilityConstants::default_item_weight | prototype:UtilityConstants::default_item_weight}.
     *
     * More information on how item weight is determined can be found on its {@link auxiliary page | runtime:item-weight}.
     */
    weight?: Weight;
}
/**
 * Entity used to signify that an entity is requesting items, for example modules for an assembling machine after it was blueprinted with modules inside.
 */
interface ItemRequestProxyPrototype extends EntityPrototype {
    use_target_entity_alert_icon_shift?: boolean;
}
/**
 * An item subgroup. Item subgroups are the rows in the recipe list in the player's inventory GUI. The subgroup of a prototype also determines its item {@link group | prototype:ItemGroup::group} (tab in the recipe list).
 *
 * The built-in subgroups can be found {@link here | https://wiki.factorio.com/Data.raw#item-subgroup}. See {@link ItemPrototype::subgroup | prototype:ItemPrototype::subgroup} for setting the subgroup of an item.
 * @example ```
{
  type = "item-subgroup",
  name = "train-transport",
  group = "logistics",
  order = "e"
}
```
 */
interface ItemSubGroup extends Prototype {
    /**
     * The item group this subgroup is located in.
     */
    group: ItemGroupID;
}
/**
 * ItemWithEntityData saves data associated with the entity that it represents, for example the content of the equipment grid of a car.
 */
interface ItemWithEntityDataPrototype extends ItemPrototype {
    /**
     * Path to the icon file.
     *
     * Only loaded if `icon_tintables` is not defined.
     */
    icon_tintable?: FileName;
    /**
     * Path to the icon file.
     *
     * Only loaded if `icon_tintable_masks` is not defined and `icon_tintable` is defined.
     */
    icon_tintable_mask?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icon_tintable_masks` is not defined and `icon_tintable` is defined.
     */
    icon_tintable_mask_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     *
     * Only loaded if `icon_tintable` is defined.
     */
    icon_tintable_masks?: IconData[];
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icon_tintables` is not defined and `icon_tintable` is defined.
     */
    icon_tintable_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     *
     * Only loaded if `icon_tintable` is defined (`icon_tintables` takes precedence over `icon_tintable`).
     */
    icon_tintables?: IconData[];
}
/**
 * The inventory allows setting player defined filters similar to cargo wagon inventories.
 */
interface ItemWithInventoryPrototype extends ItemWithLabelPrototype {
    /**
     * The locale key used when the player attempts to put an item that doesn't match the filter rules into the item-with-inventory.
     */
    filter_message_key?: string;
    /**
     * This determines how filters are applied. If no filters are defined this is automatically set to "none".
     * @example ```
    filter_mode = "blacklist"
    ```
     */
    filter_mode?: 'blacklist' | 'whitelist';
    /**
     * The inventory size of the item. - This will only accept an ItemStackIndex. The union with 'dynamic' is only to satisfy BlueprintBookPrototype within Typescript's inheritance rules
     */
    inventory_size: ItemStackIndex | 'dynamic';
    /**
     * A list of explicit item names to be used as filters.
     * @example ```
    item_filters = {"iron-ore", "copper-ore", "coal", "stone"}
    ```
     */
    item_filters?: ItemID[];
    /**
     * A list of explicit item group names to be used as filters.
     * @example ```
    item_group_filters = {"logistics", "fluids"}
    ```
     */
    item_group_filters?: ItemGroupID[];
    /**
     * A list of explicit {@link item subgroup | prototype:ItemSubGroup} names to be used as filters.
     * @example ```
    item_subgroup_filters = {"military-equipment", "tool"}
    ```
     */
    item_subgroup_filters?: ItemSubGroupID[];
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 1
    ```
     */
    stack_size: 1;
}
/**
 * Like a normal item but with the ability to have a colored label.
 */
interface ItemWithLabelPrototype extends ItemPrototype {
    /**
     * The default label color the item will use.
     */
    default_label_color?: Color;
    /**
     * If the item will draw its label when held in the cursor in place of the item count.
     */
    draw_label_for_cursor_render?: boolean;
}
/**
 * Item type that can store any basic arbitrary Lua data, see {@link LuaItemStack::tags | runtime:LuaItemStack::tags}.
 */
interface ItemWithTagsPrototype extends ItemWithLabelPrototype {
}
/**
 * This prototype is used for receiving an achievement when the player destroys a certain amount of an entity, with a specific damage type.
 */
interface KillAchievementPrototype extends AchievementPrototype {
    /**
     * This is the amount of entity of the specified type the player needs to destroy to receive the achievement.
     * @example ```
    amount = 100
    ```
     */
    amount?: uint32;
    /**
     * The killer of the entity must be one of these entities.
     * @example ```
    damage_dealer = "artillery-turret"
    ```
     * @example ```
    damage_dealer = {"artillery-turret", "artillery-wagon"}
    ```
     */
    damage_dealer?: EntityID | EntityID[];
    /**
     * This defines how the player needs to destroy the specific entity.
     * @example ```
    damage_type = "impact"
    ```
     */
    damage_type?: DamageTypeID;
    /**
     * This defines if the player needs to be in a vehicle.
     * @example ```
    in_vehicle = true
    ```
     */
    in_vehicle?: boolean;
    /**
     * This defines to make sure you are the one driving, for instance, in a tank rather than an automated train.
     * @example ```
    personally = true
    ```
     */
    personally?: boolean;
    /**
     * This defines which entity needs to be destroyed in order to receive the achievement.
     */
    to_kill?: EntityID | EntityID[];
    /**
     * This defines what entity type needs to be destroyed in order to receive the achievement.
     * @example ```
    type_to_kill = "inserter"
    ```
     */
    type_to_kill?: string;
}
/**
 * A {@link lab | https://wiki.factorio.com/Lab}. It consumes {@link science packs | prototype:ToolPrototype} to research {@link technologies | prototype:TechnologyPrototype}.
 */
interface LabPrototype extends EntityWithOwnerPrototype {
    /**
     * Sets the {@link modules | prototype:ModulePrototype} and {@link beacon | prototype:BeaconPrototype} effects that are allowed to be used on this lab.
     */
    allowed_effects?: EffectTypeLimitation;
    /**
     * Sets the {@link module categories | prototype:ModuleCategory} that are allowed to be inserted into this machine.
     */
    allowed_module_categories?: ModuleCategoryID[];
    effect_receiver?: EffectReceiver;
    /**
     * Defines how this lab gets energy.
     */
    energy_source: EnergySource;
    /**
     * The amount of energy this lab uses.
     */
    energy_usage: Energy;
    frozen_patch?: Sprite;
    /**
     * A list of the names of science packs that can be used in this lab.
     *
     * If a technology requires other types of science packs, it cannot be researched in this lab.
     * @example ```
    inputs = {"automation-science-pack", "logistic-science-pack", "chemical-science-pack", "military-science-pack", "production-science-pack", "utility-science-pack", "space-science-pack"}
    ```
     */
    inputs: ItemID[];
    light?: LightDefinition;
    /**
     * The number of module slots in this lab.
     */
    module_slots?: ItemStackIndex;
    /**
     * The animation that plays when the lab is idle.
     */
    off_animation?: Animation;
    /**
     * The animation that plays when the lab is active.
     */
    on_animation?: Animation;
    researching_speed?: double;
    /**
     * May not be 0. May not be larger than 100.
     */
    science_pack_drain_rate_percent?: uint8;
    trash_inventory_size?: ItemStackIndex;
    /**
     * Whether the {@link QualityPrototype::science_pack_drain_multiplier | prototype:QualityPrototype::science_pack_drain_multiplier} of the quality of the science pack should be considered by the lab.
     */
    uses_quality_drain_modifier?: boolean;
}
/**
 * A {@link lamp | https://wiki.factorio.com/Lamp} to provide light, using energy.
 * @example ```
{
  type = "lamp",
  name = "small-lamp",
  icon = "__base__/graphics/icons/small-lamp.png",
  icon_size = 64,
  flags = {"placeable-neutral", "player-creation"},
  minable = {mining_time = 0.1, result = "small-lamp"},
  max_health = 100,
  corpse = "lamp-remnants",
  dying_explosion = "lamp-explosion",
  collision_box = {{-0.15, -0.15}, {0.15, 0.15}},
  selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
  energy_source =
  {
    type = "electric",
    usage_priority = "lamp"
  },
  energy_usage_per_tick = "5kW",
  darkness_for_all_lamps_on = 0.5,
  darkness_for_all_lamps_off = 0.3,
  light = {intensity = 0.9, size = 40, color = {r=1.0, g=1.0, b=0.75}},
  light_when_colored = {intensity = 0, size = 6, color = {r=1.0, g=1.0, b=0.75}},
  glow_size = 6,
  glow_color_intensity = 1,
  glow_render_mode = "multiplicative",
  picture_off =
  {
    layers =
    {
      {
        filename = "__base__/graphics/entity/small-lamp/lamp.png",
        priority = "high",
        width = 42,
        height = 36,
        frame_count = 1,
        axially_symmetrical = false,
        direction_count = 1,
        shift = util.by_pixel(0,3)
      },
      {
        filename = "__base__/graphics/entity/small-lamp/lamp-shadow.png",
        priority = "high",
        width = 38,
        height = 24,
        frame_count = 1,
        axially_symmetrical = false,
        direction_count = 1,
        shift = util.by_pixel(4,5),
        draw_as_shadow = true
      }
    }
  },
  picture_on =
  {
    filename = "__base__/graphics/entity/small-lamp/lamp-light.png",
    priority = "high",
    width = 46,
    height = 40,
    frame_count = 1,
    axially_symmetrical = false,
    direction_count = 1,
    shift = util.by_pixel(0, -7)
  },
  signal_to_color_mapping =
  {
    {type = "virtual", name = "signal-red",    color = {r = 1, g = 0, b = 0}},
    {type = "virtual", name = "signal-green",  color = {r = 0, g = 1, b = 0}},
    {type = "virtual", name = "signal-blue",   color = {r = 0, g = 0, b = 1}},
    {type = "virtual", name = "signal-yellow", color = {r = 1, g = 1, b = 0}},
    {type = "virtual", name = "signal-pink",   color = {r = 1, g = 0, b = 1}},
    {type = "virtual", name = "signal-cyan",   color = {r = 0, g = 1, b = 1}},
    {type = "virtual", name = "signal-white",  color = {r = 1, g = 1, b = 1}}
  },

  circuit_connector = circuit_connector_definitions["lamp"],
  circuit_wire_max_distance = default_circuit_wire_max_distance
}
```
 */
interface LampPrototype extends EntityWithOwnerPrototype {
    /**
     * Whether the lamp should always be on.
     */
    always_on?: boolean;
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    /**
     * darkness_for_all_lamps_on must be > darkness_for_all_lamps_off. Values must be between 0 and 1.
     */
    darkness_for_all_lamps_off?: float;
    /**
     * darkness_for_all_lamps_on must be > darkness_for_all_lamps_off. Values must be between 0 and 1.
     */
    darkness_for_all_lamps_on?: float;
    default_blue_signal?: SignalIDConnector;
    default_green_signal?: SignalIDConnector;
    default_red_signal?: SignalIDConnector;
    default_rgb_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * The emissions set on the energy source are ignored so lamps cannot produce pollution.
     */
    energy_source: ElectricEnergySource | VoidEnergySource;
    /**
     * The amount of energy the lamp uses. Must be greater than > 0.
     */
    energy_usage_per_tick: Energy;
    glow_color_intensity?: float;
    glow_render_mode?: 'additive' | 'multiplicative';
    glow_size?: float;
    /**
     * What color the lamp will be when it is on, and receiving power.
     */
    light?: LightDefinition;
    /**
     * This refers to when the light is in a circuit network, and is lit a certain color based on a signal value.
     */
    light_when_colored?: LightDefinition;
    /**
     * The lamps graphics when it's off.
     */
    picture_off?: Sprite;
    /**
     * The lamps graphics when it's on.
     */
    picture_on?: Sprite;
    signal_to_color_mapping?: SignalColorMapping[];
}
/**
 * A {@link land mine | https://wiki.factorio.com/Land_mine}.
 */
interface LandMinePrototype extends EntityWithOwnerPrototype {
    action?: Trigger;
    ammo_category?: AmmoCategoryID;
    /**
     * Force the landmine to kill itself when exploding.
     */
    force_die_on_attack?: boolean;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
    /**
     * The sprite of the landmine before it is armed (just after placing).
     */
    picture_safe?: Sprite;
    /**
     * The sprite of the landmine of a friendly force when it is armed.
     */
    picture_set?: Sprite;
    /**
     * The sprite of the landmine of an enemy force when it is armed.
     */
    picture_set_enemy?: Sprite;
    /**
     * Time between placing and the landmine being armed, in ticks.
     */
    timeout?: uint32;
    /**
     * Collision mask that another entity must collide with to make this landmine blow up.
     */
    trigger_collision_mask?: CollisionMaskConnector;
    trigger_force?: ForceCondition;
    trigger_radius: double;
}
interface LaneSplitterPrototype extends TransportBeltConnectablePrototype {
    structure: Animation4Way;
    structure_animation_movement_cooldown?: uint32;
    structure_animation_speed_coefficient?: double;
    structure_patch?: Animation4Way;
}
/**
 * A legacy curved rail.
 */
interface LegacyCurvedRailPrototype extends RailPrototype {
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of legacy curved rail is hardcoded to `{{-0.75, -0.55}, {0.75, 1.6}}`.
     *
     * The secondary collision box of legacy curved rail is hardcoded to `{{-0.68, -2.7}, {0.68, 2.7}}`.
     */
    collision_box?: BoundingBox;
}
/**
 * A legacy straight rail.
 */
interface LegacyStraightRailPrototype extends RailPrototype {
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of legacy straight rail is hardcoded to `{{-0.7, -0.99}, {0.7, 0.99}}`.
     */
    collision_box?: BoundingBox;
}
interface LightningAttractorPrototype extends EntityWithOwnerPrototype {
    chargable_graphics?: ChargableGraphics;
    /**
     * Cannot be less than 0.
     */
    efficiency?: double;
    /**
     * Mandatory if `efficiency` is larger than 0. May not be defined if `efficiency` is 0.
     */
    energy_source?: ElectricEnergySource;
    lightning_strike_offset?: MapPosition;
    range_elongation?: double;
}
interface LightningPrototype extends EntityPrototype {
    attracted_volume_modifier?: float;
    damage?: double;
    effect_duration: uint16;
    energy?: Energy;
    graphics_set?: LightningGraphicsSet;
    sound?: Sound;
    source_offset?: Vector;
    source_variance?: Vector;
    strike_effect?: Trigger;
    /**
     * Must be less than or equal to `effect_duration`.
     */
    time_to_damage?: uint16;
}
/**
 * A belt that can be connected to a belt anywhere else, including on a different surface. The linked belts have to be {@link connected with console commands | https://wiki.factorio.com/Console#Connect_linked_belts} or runtime scripting in mods or scenarios. {@link LuaEntity::connect_linked_belts | runtime:LuaEntity::connect_linked_belts} and other runtime functions.
 */
interface LinkedBeltPrototype extends TransportBeltConnectablePrototype {
    allow_blueprint_connection?: boolean;
    allow_clone_connection?: boolean;
    allow_side_loading?: boolean;
    structure?: LinkedBeltStructure;
    structure_render_layer?: RenderLayer;
}
/**
 * A container that shares its inventory with containers with the same {@link link_id | runtime:LuaEntity::link_id}, which can be set via the GUI. The link IDs are per prototype and force, so only containers with the **same ID**, **same prototype name** and **same force** will share inventories.
 */
interface LinkedContainerPrototype extends EntityWithOwnerPrototype {
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this linked container.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Players that can access the GUI to change the link ID.
     */
    gui_mode?: 'all' | 'none' | 'admins';
    /**
     * Must be > 0.
     */
    inventory_size: ItemStackIndex;
    /**
     * Whether the inventory of this container can be filtered (like cargo wagons) or not.
     */
    inventory_type?: 'normal' | 'with_bar' | 'with_filters_and_bar';
    picture?: Sprite;
}
/**
 * Continuously loads and unloads machines, as an alternative to inserters.
 *
 * This loader type is identical to {@link Loader1x2Prototype | prototype:Loader1x2Prototype} with the exception of its hardcoded belt_distance. The belt_distance of the loader determines the distance between the position of this loader and the tile of the loader's belt target.
 *
 * This loader type always has a belt_distance of 0, meaning by default it is 1 tile long in total. For a loader type with a belt_distance of 0.5, see {@link Loader1x2Prototype | prototype:Loader1x2Prototype}.
 */
interface Loader1x1Prototype extends LoaderPrototype {
}
/**
 * Continuously loads and unloads machines, as an alternative to inserters.
 *
 * This loader type is identical to {@link Loader1x1Prototype | prototype:Loader1x1Prototype} with the exception of its hardcoded belt_distance. The belt_distance of the loader determines the distance between the position of this loader and the tile of the loader's belt target.
 *
 * This loader type always has a belt_distance of 0.5, meaning by default it is 2 tiles long in total. For a loader type with a belt_distance of 0, see {@link Loader1x1Prototype | prototype:Loader1x1Prototype}.
 */
interface Loader1x2Prototype extends LoaderPrototype {
}
/**
 * Continuously loads and unloads machines, as an alternative to inserters.
 */
interface LoaderPrototype extends TransportBeltConnectablePrototype {
    /**
     * Loader belt stack size can be adjusted at runtime. Requires {@link LoaderPrototype::max_belt_stack_size | prototype:LoaderPrototype::max_belt_stack_size} to be > 1.
     */
    adjustable_belt_stack_size?: boolean;
    /**
     * Whether this loader can load and unload stationary inventories such as containers and crafting machines.
     */
    allow_container_interaction?: boolean;
    /**
     * Whether this loader can load and unload {@link RollingStockPrototype | prototype:RollingStockPrototype}.
     */
    allow_rail_interaction?: boolean;
    /**
     * How long this loader's belt is. Should be the same as belt_distance, which is hardcoded to `0.5` for {@link Loader1x2Prototype | prototype:Loader1x2Prototype} and to 0 for {@link Loader1x1Prototype | prototype:Loader1x1Prototype}. See the linked prototypes for an explanation of belt_distance.
     */
    belt_length?: double;
    /**
     * First the four cardinal directions for `direction_out`, followed by the four directions for `direction_in`.
     */
    circuit_connector?: CircuitConnectorDefinition[];
    /**
     * Render layer for all directions of the circuit connectors.
     */
    circuit_connector_layer?: RenderLayer;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    /**
     * The distance between the position of this loader and the tile of the loader's container target.
     */
    container_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Energy in Joules. Can't be negative.
     */
    energy_per_item?: Energy;
    energy_source?: ElectricEnergySource | HeatEnergySource | FluidEnergySource | VoidEnergySource;
    /**
     * How many item filters this loader has. Maximum count of filtered items in loader is 5.
     */
    filter_count: uint8;
    /**
     * Loader will not create stacks on belt that are larger than this value. Must be >= 1.
     */
    max_belt_stack_size?: uint8;
    /**
     * If filters are per lane. Can only be set to true if filter_count is equal to 2.
     */
    per_lane_filters?: boolean;
    structure?: LoaderStructure;
    structure_render_layer?: RenderLayer;
}
/**
 * A {@link locomotive | https://wiki.factorio.com/Locomotive}.
 */
interface LocomotivePrototype extends RollingStockPrototype {
    darkness_to_render_light_animation?: float;
    energy_source: BurnerEnergySource | VoidEnergySource;
    front_light?: LightDefinition;
    front_light_pictures?: RollingStockRotatedSlopedGraphics;
    max_power: Energy;
    /**
     * In tiles. A locomotive will snap to a nearby train stop when the player places it within this distance to the stop.
     */
    max_snap_to_train_stop_distance?: float;
    reversing_power_modifier: double;
}
/**
 * A generic container, such as a chest, that interacts with the logistics network.
 */
interface LogisticContainerPrototype extends ContainerPrototype {
    /**
     * Drawn when a robot brings/takes items from this container.
     */
    animation?: Animation;
    /**
     * Played when a robot brings/takes items from this container. Ignored if `animation` is not defined.
     */
    animation_sound?: Sound;
    /**
     * The offset from the center of this container where a robot visually brings/takes items.
     */
    landing_location_offset?: Vector;
    /**
     * The way this chest interacts with the logistic network.
     * This property is required, but marked as optional due to typescript inheritance limitations
     */
    logistic_mode?: 'active-provider' | 'passive-provider' | 'requester' | 'storage' | 'buffer';
    /**
     * The number of request slots this logistics container has. Requester-type containers must have > 0 slots and can have a maximum of {@link UtilityConstants::max_logistic_filter_count | prototype:UtilityConstants::max_logistic_filter_count} slots. Storage-type containers must have <= 1 slot.
     */
    max_logistic_slots?: uint16;
    opened_duration?: uint8;
    /**
     * Whether the "no network" icon should be rendered on this entity if the entity is not within a logistics network.
     */
    render_not_in_network_icon?: boolean;
    trash_inventory_size?: ItemStackIndex;
    /**
     * Whether logistic robots have to deliver the exact amount of items requested to this logistic container instead of over-delivering (within their cargo size).
     */
    use_exact_mode?: boolean;
}
/**
 * A {@link logistic robot | https://wiki.factorio.com/Logistic_robot}.
 */
interface LogisticRobotPrototype extends RobotWithLogisticInterfacePrototype {
    /**
     * Must have a collision box size of zero.
     * @example ```
    collision_box = {{0, 0}, {0, 0}}
    ```
     */
    collision_box?: BoundingBox;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    idle_with_cargo?: RotatedAnimation;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    in_motion_with_cargo?: RotatedAnimation;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    shadow_idle_with_cargo?: RotatedAnimation;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    shadow_in_motion_with_cargo?: RotatedAnimation;
}
/**
 * The available map gen presets.
 * @example ```
{
  type = "map-gen-presets",
  name = "default",
  ["marathon"] =
  {
    order = "c",
    basic_settings =
    {
      property_expression_names = {},
    },
    advanced_settings =
    {
      difficulty_settings =
      {
        technology_price_multiplier = 4
      }
    }
  },
  ["island"] =
  {
    order = "h",
    basic_settings =
    {
      property_expression_names =
      {
        elevation = "elevation_island",
        moisture = "moisture_basic",
        aux = "aux_basic",
        cliffiness = "cliffiness_basic",
        cliff_elevation = "cliff_elevation_from_elevation",
        trees_forest_path_cutout = 1
      },
      cliff_settings =
      {
        cliff_smoothing = 1
      },
      autoplace_controls =
      {
        ["trees"] =
        {
          frequency = 1,
          size = 0.5
        }
      }
    }
  }
}
```
 */
interface MapGenPresets {
    /**
     * Name of the map gen presets. Base game uses "default".
     */
    name: string;
    type: 'map-gen-presets';
}
/**
 * The default map settings.
 */
interface MapSettings {
    asteroids: AsteroidSettings;
    difficulty_settings: DifficultySettings;
    enemy_evolution: EnemyEvolutionSettings;
    enemy_expansion: EnemyExpansionSettings;
    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters stuck within their own base.
     */
    max_failed_behavior_count: uint32;
    /**
     * Name of the map-settings. Base game uses "map-settings".
     */
    name: string;
    path_finder: PathFinderSettings;
    pollution: PollutionSettings;
    steering: SteeringSettings;
    type: 'map-settings';
    unit_group: UnitGroupSettings;
}
/**
 * Offers can be added to a market and they are shown when opening the entity. Offers allow to spend items to get research bonuses or items.
 */
interface MarketPrototype extends EntityWithOwnerPrototype {
    /**
     * Whether all forces are allowed to open this market.
     */
    allow_access_to_all_forces?: boolean;
    picture?: Sprite;
}
/**
 * A mining drill for automatically extracting resources from {@link resource entities | prototype:ResourceEntityPrototype}. This prototype type is used by {@link burner mining drill | https://wiki.factorio.com/Burner_mining_drill}, {@link electric mining drill | https://wiki.factorio.com/Electric_mining_drill} and {@link pumpjack | https://wiki.factorio.com/Pumpjack} in vanilla.
 */
interface MiningDrillPrototype extends EntityWithOwnerPrototype {
    /**
     * Sets the {@link modules | prototype:ModulePrototype} and {@link beacon | prototype:BeaconPrototype} effects that are allowed to be used on this mining drill.
     */
    allowed_effects?: EffectTypeLimitation;
    /**
     * Sets the {@link module categories | prototype:ModuleCategory} that are allowed to be inserted into this machine.
     */
    allowed_module_categories?: ModuleCategoryID[];
    /**
     * Used by the {@link pumpjack | https://wiki.factorio.com/Pumpjack} to have a static 4 way sprite.
     */
    base_picture?: Sprite4Way;
    base_render_layer?: RenderLayer;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    drilling_sound?: InterruptibleSound;
    drilling_sound_animation_end_frame?: uint16;
    drilling_sound_animation_start_frame?: uint16;
    drops_full_belt_stacks?: boolean;
    effect_receiver?: EffectReceiver;
    /**
     * The energy source of this mining drill.
     */
    energy_source: EnergySource;
    /**
     * The amount of energy used by the drill while mining. Can't be less than or equal to 0.
     * @example ```
    energy_usage = "150kW"
    ```
     */
    energy_usage: Energy;
    /**
     * How many filters this mining drill has. Maximum count of filtered resources in a mining drill is 5.
     */
    filter_count?: uint8;
    graphics_set?: MiningDrillGraphicsSet;
    input_fluid_box?: FluidBox;
    /**
     * The speed of this drill.
     */
    mining_speed: double;
    /**
     * The number of module slots in this machine.
     */
    module_slots?: ItemStackIndex;
    /**
     * When this mining drill is connected to the circuit network, the resource that it is reading (either the entire resource patch, or the resource in the mining area of the drill, depending on circuit network setting), is tinted in this color when mousing over the mining drill.
     */
    monitor_visualization_tint?: Color;
    moving_sound?: InterruptibleSound;
    output_fluid_box?: FluidBox;
    /**
     * Affects animation speed.
     */
    perceived_performance?: PerceivedPerformance;
    /**
     * The sprite used to show the range of the mining drill.
     */
    radius_visualisation_picture?: Sprite;
    /**
     * The names of the {@link ResourceCategory | prototype:ResourceCategory} that can be mined by this drill. For a list of built-in categories, see {@link here | https://wiki.factorio.com/Data.raw#resource-category}.
     *
     * Note: Categories containing resources which produce items, fluids, or items+fluids may be combined on the same entity, but may not work as expected. Examples: Miner does not rotate fluid-resulting resources until depletion. Fluid isn't output (fluid resource change and fluidbox matches previous fluid). Miner with no `vector_to_place_result` can't output an item result and halts.
     */
    resource_categories: ResourceCategoryID[];
    resource_drain_rate_percent?: uint8;
    /**
     * The distance from the centre of the mining drill to search for resources in.
     *
     * This is 2.49 for electric mining drills (a 5x5 area) and 0.99 for burner mining drills (a 2x2 area). The drill searches resource outside its natural boundary box, which is 0.01 (the middle of the entity); making it 2.5 and 1.0 gives it another block radius.
     */
    resource_searching_radius: double;
    shuffle_resources_to_mine?: boolean;
    uses_force_mining_productivity_bonus?: boolean;
    /**
     * The position where any item results are placed, when the mining drill is facing north (default direction). If the drill does not produce any solid items but uses a fluidbox output instead (e.g. pumpjacks), a vector of `{0,0}` disables the yellow arrow alt-mode indicator for the placed item location.
     */
    vector_to_place_result: Vector;
    wet_mining_graphics_set?: MiningDrillGraphicsSet;
}
/**
 * A module category. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#module-category}. See {@link ModulePrototype::category | prototype:ModulePrototype::category}.
 */
interface ModuleCategory extends Prototype {
}
/**
 * A {@link module | https://wiki.factorio.com/Module}. They are used to affect the capabilities of existing machines, for example by increasing the crafting speed of a {@link crafting machine | prototype:CraftingMachinePrototype}.
 */
interface ModulePrototype extends ItemPrototype {
    /**
     * Chooses with what art style the module is shown inside {@link beacons | prototype:BeaconPrototype}. See {@link BeaconModuleVisualizations::art_style | prototype:BeaconModuleVisualizations::art_style}. Vanilla uses `"vanilla"` here.
     */
    art_style?: string;
    beacon_tint?: BeaconVisualizationTints;
    /**
     * Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
     */
    category: ModuleCategoryID;
    /**
     * The effect of the module on the machine it's inserted in, such as increased pollution.
     */
    effect: Effect;
    requires_beacon_alt_mode?: boolean;
    /**
     * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category.
     */
    tier: uint32;
}
/**
 * This prototype is used for receiving an achievement when the player moves a module with the cursor.
 */
interface ModuleTransferAchievementPrototype extends AchievementPrototype {
    /**
     * How many modules need to be transferred.
     */
    amount?: uint32;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean;
    /**
     * This will trigger the achievement, if this module is transferred.
     * @example ```
    module = "quality-module"
    ```
     */
    module: ItemID | ItemID[];
}
/**
 * Used by {@link SelectionToolPrototype::mouse_cursor | prototype:SelectionToolPrototype::mouse_cursor}.
 * @example ```
{
  type = "mouse-cursor",
  name = "selection-tool-cursor",
  filename = "__core__/graphics/cross-select-x32.png",
  hot_pixel_x = 16,
  hot_pixel_y = 16
}
```
 * @example ```
{
  type = "mouse-cursor",
  name = "system-crosshair",
  system_cursor = "crosshair"
}
```
 */
interface MouseCursor {
    /**
     * Mandatory if `system_cursor` is not defined.
     */
    filename?: FileName;
    /**
     * Mandatory if `system_cursor` is not defined.
     */
    hot_pixel_x?: int16;
    /**
     * Mandatory if `system_cursor` is not defined.
     */
    hot_pixel_y?: int16;
    /**
     * Name of the prototype.
     */
    name: string;
    /**
     * Either this or the other three properties have to be present.
     */
    system_cursor?: 'arrow' | 'i-beam' | 'crosshair' | 'wait-arrow' | 'size-all' | 'no' | 'hand';
    type: 'mouse-cursor';
}
/**
 * Used by {@link exoskeleton | https://wiki.factorio.com/Exoskeleton}. Increases max speed of characters or acceleration of vehicles if they have this equipment in their grid.
 */
interface MovementBonusEquipmentPrototype extends EquipmentPrototype {
    energy_consumption: Energy;
    /**
     * Multiplier of the character speed/vehicle acceleration.
     */
    movement_bonus: double;
}
/**
 * A {@link NoiseExpression | prototype:NoiseExpression} with a name. The base game uses named noise expressions to specify functions for many map properties to be used in map generation; e.g. the "elevation" expression is used to calculate elevation for every point on a map. For a list of the built-in named noise expressions, see {@link data.raw | https://wiki.factorio.com/Data.raw#noise-expression}.
 *
 * Named noise expressions can be used by {@link MapGenSettings | prototype:MapGenSettings} and {@link MapGenPreset | prototype:MapGenPreset} to override which named expression is used to calculate a given property by having an entry in `property_expression_names`, e.g. `elevation = "elevation_island"`.
 *
 * Alternate expressions can be made available in the map generator GUI by setting their `intended_property` to the name of the property they should override.
 *
 * Named noise expressions can also be used as {@link noise variables | runtime:noise-expressions} e.g. `var("my-noise-expression")`.
 * @example ```
{
  type = "noise-expression",
  name = "distance",
  expression = "distance_from_nearest_point{x = x, y = y, points = starting_positions}"
}
```
 */
interface NamedNoiseExpression extends Prototype {
    /**
     * The noise expression itself. This is where most of the noise magic happens.
     */
    expression: NoiseExpression;
    /**
     * Names the property that this expression is intended to provide a value for, if any. This will make the expression show up as an option in the map generator GUI, unless it is the only expression with that intended property, in which case it will be hidden and selected by default.
     *
     * For example if a noise expression is intended to be used as an alternative temperature generator, `intended_property` should be "temperature".
     */
    intended_property?: string;
    /**
     * A map of expression name to expression.
     *
     * Local expressions are meant to store data locally similar to local variables in Lua. Their purpose is to hold noise expressions used multiple times in the named noise expression, or just to tell the reader that the local expression has a specific purpose. Local expressions can access other local definitions, but recursive definitions aren't supported.
     */
    local_expressions?: Record<string, NoiseExpression>;
    /**
     * A map of function name to function.
     *
     * Local functions serve the same purpose as local expressions - they aren't visible outside of the specific prototype and they have access to other local definitions.
     */
    local_functions?: Record<string, NoiseFunction>;
    /**
     * Used to order alternative expressions in the map generator GUI. For a given property (e.g. 'temperature'), the NamedNoiseExpression with that property's name as its `intended_property` with the lowest order will be chosen as the default in the GUI.
     *
     * If no order is specified, it defaults to "2000" if the property name matches the expression name (making it the 'technical default' generator for the property if none is specified in MapGenSettings), or "3000" otherwise. A generator defined with an order less than "2000" but with a unique name can thereby override the default generator used when creating a new map through the GUI without automatically overriding the 'technical default' generator, which is probably used by existing maps.
     */
    order?: Order;
}
/**
 * Named noise functions are defined in the same way as {@link NamedNoiseExpression | prototype:NamedNoiseExpression} except that they also have parameters.
 *
 * Named noise functions are available to be used in {@link NoiseExpressions | prototype:NoiseExpression}.
 * @example ```
{
  type = "noise-function",
  name = "random_between",
  parameters = {"from", "to"},
  expression = "random_penalty{x = x, y = y, source = to, amplitude = to - from}"
}
```
 * @example ```
{
  type = "noise-function",
  name = "finish_elevation",
  parameters = {"elevation", "segmentation_multiplier"},
  expression = "min((elevation - water_level) / segmentation_multiplier, <more stuff>, starting_lake_distance / 16 + starting_lake_noise / 2)",
  local_expressions =
  {
    starting_lake_distance = "distance_from_nearest_point{x = x, y = y, points = starting_lake_positions, maximum_distance = 1024}",
    starting_lake_noise = "quick_multioctave_noise_persistence{<more stuff>}"
  }
}
```
 */
interface NamedNoiseFunction extends Prototype {
    expression: NoiseExpression;
    /**
     * A map of expression name to expression.
     *
     * Local expressions are meant to store data locally similar to local variables in Lua. Their purpose is to hold noise expressions used multiple times in the named noise expression, or just to tell the reader that the local expression has a specific purpose. Local expressions can access other local definitions and also function parameters, but recursive definitions aren't supported.
     */
    local_expressions?: Record<string, NoiseExpression>;
    /**
     * A map of function name to function.
     *
     * Local functions serve the same purpose as local expressions - they aren't visible outside of the specific prototype and they have access to other local definitions.
     */
    local_functions?: Record<string, NoiseFunction>;
    /**
     * The order of the parameters matters because functions can also be called with positional arguments.
     *
     * A function can't have more than 255 parameters.
     */
    parameters: string[];
}
/**
 * Used by {@link nightvision | https://wiki.factorio.com/Nightvision}.
 */
interface NightVisionEquipmentPrototype extends EquipmentPrototype {
    activate_sound?: Sound;
    color_lookup: DaytimeColorLookupTable;
    /**
     * Must be >= 0 and <= 1.
     */
    darkness_to_turn_on?: float;
    deactivate_sound?: Sound;
    energy_input: Energy;
}
/**
 * An {@link offshore pump | https://wiki.factorio.com/Offshore_pump}.
 */
interface OffshorePumpPrototype extends EntityWithOwnerPrototype {
    /**
     * If false, the offshore pump will not show fluid present (visually) before there is an output connected. The pump will also animate yet not show fluid when the fluid is 100% extracted (e.g. such as with a pump).
     */
    always_draw_fluid?: boolean;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Defines how the offshore pump is powered.
     *
     * When using an electric energy source and `drain` is not specified, it will be set to `energy_usage ÷ 30` automatically.
     */
    energy_source: EnergySource;
    /**
     * Sets how much energy this offshore pump consumes. Energy usage has to be positive.
     * @example ```
    energy_usage = "60kW"
    ```
     */
    energy_usage: Energy;
    fluid_box: FluidBox;
    fluid_source_offset: Vector;
    graphics_set?: OffshorePumpGraphicsSet;
    /**
     * Affects animation speed.
     */
    perceived_performance?: PerceivedPerformance;
    /**
     * How many units of fluid are produced per tick. Must be > 0.
     */
    pumping_speed: FluidAmount;
    remove_on_tile_collision?: boolean;
}
/**
 * An entity with a limited lifetime that can use trigger effects.
 */
interface ParticlePrototype extends Prototype {
    draw_shadow_when_on_ground?: boolean;
    ended_in_water_trigger_effect?: TriggerEffect;
    ended_on_ground_trigger_effect?: TriggerEffect;
    /**
     * Defaults to `life_time` / 5, but at most 60. If this is 0, it is silently changed to 1.
     */
    fade_away_duration?: uint16;
    /**
     * Can't be 1.
     */
    life_time: uint16;
    mining_particle_frame_speed?: float;
    movement_modifier?: float;
    movement_modifier_when_on_ground?: float;
    /**
     * Picture variation count and individual frame count must be equal to shadow variation count.
     */
    pictures?: AnimationVariations;
    regular_trigger_effect?: TriggerEffect;
    /**
     * Can't be 1.
     */
    regular_trigger_effect_frequency?: uint32;
    render_layer?: RenderLayer;
    render_layer_when_on_ground?: RenderLayer;
    /**
     * Shadow variation variation count and individual frame count must be equal to picture variation count.
     */
    shadows?: AnimationVariations;
    /**
     * Has to be >= -0.01 and <= 0.01.
     */
    vertical_acceleration?: float;
}
/**
 * Creates particles.
 */
interface ParticleSourcePrototype extends EntityPrototype {
    height: float;
    height_deviation?: float;
    horizontal_speed: float;
    horizontal_speed_deviation?: float;
    /**
     * Mandatory if `smoke` is not defined.
     */
    particle?: ParticleID;
    /**
     * Mandatory if `particle` is not defined.
     */
    smoke?: SmokeSource[];
    time_before_start: float;
    time_before_start_deviation?: float;
    time_to_live: float;
    time_to_live_deviation?: float;
    vertical_speed: float;
    vertical_speed_deviation?: float;
}
/**
 * An entity to transport fluids over a distance and between machines.
 */
interface PipePrototype extends EntityWithOwnerPrototype {
    /**
     * The area of the entity where fluid/gas inputs, and outputs.
     */
    fluid_box: FluidBox;
    horizontal_window_bounding_box: BoundingBox;
    /**
     * All graphics for this pipe.
     */
    pictures?: PipePictures;
    vertical_window_bounding_box: BoundingBox;
}
/**
 * A {@link pipe to ground | https://wiki.factorio.com/Pipe_to_ground}.
 */
interface PipeToGroundPrototype extends EntityWithOwnerPrototype {
    disabled_visualization?: Sprite4Way;
    /**
     * Causes fluid icon to always be drawn, ignoring the usual pair requirement.
     */
    draw_fluid_icon_override?: boolean;
    fluid_box: FluidBox;
    frozen_patch?: Sprite4Way;
    pictures?: Sprite4Way;
    visualization?: Sprite4Way;
}
interface PlaceEquipmentAchievementPrototype extends AchievementPrototype {
    amount?: uint32;
    armor: ItemID;
    limit_equip_quality: QualityID;
    limit_quality: QualityID;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean;
}
interface PlanetPrototype extends SpaceLocationPrototype {
    entities_require_heating?: boolean;
    lightning_properties?: LightningProperties;
    map_gen_settings?: PlanetPrototypeMapGenSettings;
    map_seed_offset?: uint32;
    persistent_ambient_sounds?: PersistentWorldAmbientSoundsDefinition;
    player_effects?: Trigger;
    pollutant_type?: AirbornePollutantID;
    surface_properties?: LuaTable<SurfacePropertyID, double>;
    surface_render_parameters?: SurfaceRenderParameters;
    ticks_between_player_effects?: MapTick;
}
interface PlantPrototype extends TreePrototype {
    agricultural_tower_tint?: RecipeTints;
    /**
     * Must be positive.
     */
    growth_ticks: MapTick;
    /**
     * The burst of pollution to emit when the plant is harvested.
     */
    harvest_emissions?: Record<AirbornePollutantID, double>;
}
/**
 * This prototype is used for receiving an achievement when the player receives damage.
 */
interface PlayerDamagedAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, if the amount of damage taken by the dealer, is more than this.
     * @example ```
    minimum_damage = 500
    ```
     */
    minimum_damage: float;
    /**
     * This sets the achievement to only trigger, if you survive the minimum amount of damage. If you don't need to survive, false.
     * @example ```
    should_survive = true
    ```
     */
    should_survive: boolean;
    /**
     * This will trigger the achievement, if the player takes damage from this specific entity type.
     * @example ```
    type_of_dealer = "locomotive"
    ```
     */
    type_of_dealer?: string;
}
/**
 * Deprecated in 2.0.
 */
interface PlayerPortPrototype extends EntityWithOwnerPrototype {
}
/**
 * A {@link power switch | https://wiki.factorio.com/Power_switch}.
 */
interface PowerSwitchPrototype extends EntityWithOwnerPrototype {
    circuit_wire_connection_point: WireConnectionPoint;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    frozen_patch?: Sprite;
    led_off?: Sprite;
    led_on?: Sprite;
    left_wire_connection_point: WireConnectionPoint;
    overlay_loop?: Animation;
    overlay_start?: Animation;
    overlay_start_delay: uint8;
    power_on_animation?: Animation;
    right_wire_connection_point: WireConnectionPoint;
    wire_max_distance?: double;
}
/**
 * Helps {@link ProcessionLayers | prototype:ProcessionLayer} pass properties between subsequent transitions if they belong to the same group.
 */
interface ProcessionLayerInheritanceGroup extends Prototype {
    arrival_application?: TransitionApplication;
    intermezzo_application?: TransitionApplication;
}
/**
 * Describes the duration and visuals of a departure, arrival or an intermezzo while traveling between surfaces. Usually provided inside of a {@link ProcessionSet | prototype:ProcessionSet}.
 */
interface ProcessionPrototype extends Prototype {
    /**
     * Used alternatively when landing to ground.
     */
    ground_timeline?: ProcessionTimeline;
    /**
     * Indexes used to match transitions from different surfaces together. Only a single intermezzo of a given procession_style may exist.
     * @example ```
    Going from Surface A -> Surface B
    Surface A has departures: [1, 3, 4]
    Surface B has arrivals:   [2, 3, 5]
    This trip will select:
    Departure 3 -> (Intermezzo 3) -> Arrival 3
    ```
     */
    procession_style: uint32 | uint32[];
    /**
     * Used when leaving or arriving to a station.
     */
    timeline: ProcessionTimeline;
    /**
     * Arrival and Departure are to be referenced by name. All intermezzos are collected during loading and filled in by `procession_style`.
     */
    usage: 'departure' | 'arrival' | 'intermezzo';
}
/**
 * This prototype is used for receiving an achievement when the player produces more than the specified amount of items.
 */
interface ProduceAchievementPrototype extends AchievementPrototype {
    /**
     * This will set the amount of items or fluids needed to craft, for the player to complete the achievement.
     * @example ```
    amount = 100
    ```
     */
    amount: MaterialAmountType;
    /**
     * Mandatory if `item_product` is not defined.
     *
     * This will tell the achievement what fluid the player needs to craft, to get the achievement.
     * @example ```
    fluid_product = "heavy-oil"
    ```
     */
    fluid_product?: FluidID;
    /**
     * Mandatory if `fluid_product` is not defined.
     *
     * This will tell the achievement what item the player needs to craft, to get the achievement.
     * @example ```
    item_product = "pistol"
    ```
     */
    item_product?: ItemIDFilter;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game: boolean;
}
/**
 * This prototype is used for receiving an achievement when the player crafts a specified item a certain amount, in an hour.
 */
interface ProducePerHourAchievementPrototype extends AchievementPrototype {
    /**
     * This is how much the player has to craft in an hour, to receive the achievement.
     * @example ```
    amount = 1000
    ```
     */
    amount: MaterialAmountType;
    /**
     * Mandatory if `item_product` is not defined.
     *
     * This will tell the achievement what fluid the player needs to craft, to get the achievement.
     * @example ```
    fluid_product = "light-oil"
    ```
     */
    fluid_product?: FluidID;
    /**
     * Mandatory if `fluid_product` is not defined.
     *
     * This will tell the achievement what item the player needs to craft, to get the achievement.
     * @example ```
    item_product = "landfill"
    ```
     */
    item_product?: ItemIDFilter;
}
/**
 * A {@link programmable speaker | https://wiki.factorio.com/Programmable_speaker}.
 */
interface ProgrammableSpeakerPrototype extends EntityWithOwnerPrototype {
    audible_distance_modifier?: float;
    circuit_connector?: CircuitConnectorDefinition;
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    energy_source: ElectricEnergySource | VoidEnergySource;
    energy_usage_per_tick: Energy;
    instruments: ProgrammableSpeakerInstrument[];
    maximum_polyphony: uint32;
    sprite?: Sprite;
}
/**
 * Entity with limited lifetime that can hit other entities and has triggers when this happens.
 */
interface ProjectilePrototype extends EntityPrototype {
    /**
     * Must be != 0 if `turning_speed_increases_exponentially_with_projectile_speed` is true.
     */
    acceleration: double;
    /**
     * Executed when the projectile hits something.
     */
    action?: Trigger;
    animation?: RotatedAnimationVariations;
    /**
     * Setting this to true can be used to disable projectile homing behaviour.
     */
    direction_only?: boolean;
    enable_drawing_with_mask?: boolean;
    /**
     * Executed when the projectile hits something, after `action` and only if the entity that was hit was destroyed. The projectile is destroyed right after the final_action.
     */
    final_action?: Trigger;
    force_condition?: ForceCondition;
    height?: double;
    /**
     * When true the entity is hit at the position on its collision box the projectile first collides with. When false the entity is hit at its own position.
     */
    hit_at_collision_position?: boolean;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by `"projectile/hit"`.
     */
    hit_collision_mask?: CollisionMaskConnector;
    light?: LightDefinition;
    /**
     * Must be greater than or equal to 0.
     */
    max_speed?: double;
    /**
     * Whenever an entity is hit by the projectile, this number gets reduced by the health of the entity. If the number is then below 0, the `final_action` is applied and the projectile destroyed. Otherwise, the projectile simply continues to its destination.
     */
    piercing_damage?: float;
    /**
     * Whether the animation of the projectile is rotated to match the direction of travel.
     */
    rotatable?: boolean;
    shadow?: RotatedAnimationVariations;
    smoke?: SmokeSource[];
    speed_modifier?: Vector;
    /**
     * Must be greater than or equal to 0.
     */
    turn_speed?: float;
    turning_speed_increases_exponentially_with_projectile_speed?: boolean;
}
interface Prototype extends PrototypeBase {
    /**
     * The ID type corresponding to the prototype that inherits from this.
     *
     * For example, if this is an {@link EntityPrototype | prototype:EntityPrototype}, this property's type is {@link EntityID | prototype:EntityID}.
     */
    factoriopedia_alternative?: string;
}
/**
 * The abstract base for prototypes. PrototypeBase defines the common features of prototypes, such as localization and order.
 */
interface PrototypeBase {
    /**
     * Provides additional description used in factoriopedia.
     */
    factoriopedia_description?: LocalisedString;
    /**
     * The simulation shown when looking at this prototype in the Factoriopedia GUI.
     */
    factoriopedia_simulation?: SimulationDefinition;
    hidden?: boolean;
    hidden_in_factoriopedia?: boolean;
    /**
     * Overwrites the description set in the {@link locale file | https://wiki.factorio.com/Tutorial:Localisation}. The description is usually shown in the tooltip of the prototype.
     */
    localised_description?: LocalisedString;
    /**
     * Overwrites the name set in the {@link locale file | https://wiki.factorio.com/Tutorial:Localisation}. Can be used to easily set a procedurally-generated name because the LocalisedString format allows to insert parameters into the name directly from the Lua script.
     */
    localised_name?: LocalisedString;
    /**
     * Unique textual identification of the prototype. May only contain alphanumeric characters, dashes and underscores. May not exceed a length of 200 characters.
     *
     * For a list of all names used in vanilla, see {@link data.raw | https://wiki.factorio.com/Data.raw}.
     */
    name: string;
    /**
     * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.
     */
    order?: Order;
    /**
     * Whether the prototype is a special type which can be used to parametrize blueprints and doesn't have other function.
     */
    parameter?: boolean;
    /**
     * The name of an {@link ItemSubGroup | prototype:ItemSubGroup}.
     */
    subgroup?: ItemSubGroupID;
    /**
     * Specifies the kind of prototype this is.
     *
     * For a list of all possible types, see the {@link prototype overview | prototype:prototypes}.
     */
    type: string;
}
/**
 * A container that must be set to point at other entity and inventory index so it can forward all inventory interactions to the other entity.
 */
interface ProxyContainerPrototype extends EntityWithOwnerPrototype {
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * If the content of the inventory should be rendered in alt mode.
     */
    draw_inventory_content?: boolean;
    picture?: Sprite;
}
/**
 * The pump is used to transfer fluids between tanks, fluid wagons and pipes.
 */
interface PumpPrototype extends EntityWithOwnerPrototype {
    /**
     * The animation for the pump.
     */
    animations?: Animation4Way;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * The type of energy the pump uses.
     */
    energy_source: EnergySource;
    /**
     * The amount of energy the pump uses.
     */
    energy_usage: Energy;
    /**
     * When true, pump will reduce pumping speed based on fullness of the input fluid segment.
     */
    flow_scaling?: boolean;
    fluid_animation?: Animation4Way;
    /**
     * The area of the entity where fluid travels.
     */
    fluid_box: FluidBox;
    fluid_wagon_connector_alignment_tolerance?: double;
    fluid_wagon_connector_frame_count?: uint8;
    fluid_wagon_connector_graphics?: FluidWagonConnectorGraphics;
    fluid_wagon_connector_speed?: double;
    frozen_patch?: Sprite4Way;
    glass_pictures?: Sprite4Way;
    /**
     * The amount of fluid this pump transfers per tick.
     */
    pumping_speed: FluidAmount;
}
interface QualityPrototype extends Prototype {
    /**
     * Must be >= 0.
     */
    beacon_power_usage_multiplier?: float;
    color: Color;
    draw_sprite_by_default?: boolean;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * Requires Space Age to use level greater than `0`.
     */
    level: uint32;
    /**
     * Must be in range `[0, 1]`.
     */
    mining_drill_resource_drain_multiplier?: float;
    /**
     * Unique textual identification of the prototype. May only contain alphanumeric characters, dashes and underscores. May not exceed a length of 200 characters.
     *
     * Requires Space Age to create prototypes with name other than `normal` or `quality-unknown`.
     */
    name: string;
    next?: QualityID;
    /**
     * Must be in range [0, 1.0].
     */
    next_probability?: double;
    /**
     * Must be in range `[0, 1]`.
     */
    science_pack_drain_multiplier?: float;
}
/**
 * A {@link radar | https://wiki.factorio.com/Radar}.
 */
interface RadarPrototype extends EntityWithOwnerPrototype {
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    /**
     * If set to true, radars on the same surface will connect to other radars on the same surface using hidden wires with {@link radar | runtime:defines.wire_origin.radars} origin.
     */
    connects_to_other_radars?: boolean;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Must be between 0 and 1. Must be larger than or equal to `energy_fraction_to_disconnect`.
     */
    energy_fraction_to_connect?: float;
    /**
     * Must be between 0 and 1. Must be less than or equal to `energy_fraction_to_connect`.
     */
    energy_fraction_to_disconnect?: float;
    /**
     * The amount of energy the radar has to consume for nearby scan to be performed. This value doesn't have any effect on sector scanning.
     *
     * Performance warning: nearby scan causes re-charting of many chunks, which is expensive operation. If you want to make a radar that updates map more in real time, you should keep its range low. If you are making radar with high range, you should set this value such that nearby scan is performed once a second or so. For example if you set `energy_usage` to 100kW, setting `energy_per_nearby_scan` to 100kJ will cause nearby scan to happen once per second.
     * @example ```
    energy_per_nearby_scan = "250kJ"
    ```
     */
    energy_per_nearby_scan: Energy;
    /**
     * The amount of energy it takes to scan a sector. This value doesn't have any effect on nearby scanning.
     * @example ```
    energy_per_sector = "10MJ"
    ```
     */
    energy_per_sector: Energy;
    /**
     * The energy source for this radar.
     */
    energy_source: EnergySource;
    /**
     * The amount of energy this radar uses.
     * @example ```
    energy_usage = "300kW"
    ```
     */
    energy_usage: Energy;
    frozen_patch?: Sprite;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
    /**
     * The radius of the area constantly revealed by this radar, in chunks.
     */
    max_distance_of_nearby_sector_revealed: uint32;
    /**
     * The radius of the area this radar can chart, in chunks.
     */
    max_distance_of_sector_revealed: uint32;
    pictures?: RotatedSprite;
    radius_minimap_visualisation_color?: Color;
    reset_orientation_when_frozen?: boolean;
    rotation_speed?: double;
}
/**
 * A {@link rail chain signal | https://wiki.factorio.com/Rail_chain_signal}.
 */
interface RailChainSignalPrototype extends RailSignalBasePrototype {
}
/**
 * A {@link rail planner | https://wiki.factorio.com/Rail_planner}.
 */
interface RailPlannerPrototype extends ItemPrototype {
    manual_length_limit?: double;
    /**
     * May not be an empty array. Entities must be rails and their first item-to-place must be this item.
     */
    rails: EntityID[];
    /**
     * Name of a rail support.
     */
    support?: EntityID;
}
/**
 * The abstract base of all rail prototypes.
 */
interface RailPrototype extends EntityWithOwnerPrototype {
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2;
    deconstruction_marker_positions?: Vector[];
    ending_shifts?: Vector[];
    extra_planner_goal_penalty?: double;
    extra_planner_penalty?: double;
    fence_pictures?: RailFenceGraphicsSet;
    /**
     * Must be 0, 2 or 4. Can't be non-zero if `fence_pictures` is defined.
     */
    forced_fence_segment_count?: uint8;
    pictures: RailPictureSet;
    removes_soft_decoratives?: boolean;
    /**
     * The rail {@link selection_boxes | prototype:EntityPrototype::selection_box} are automatically calculated from the collision boxes, which are hardcoded. So effectively the selection boxes also hardcoded.
     */
    selection_box?: BoundingBox;
    /**
     * Sound played when a character walks over this rail.
     */
    walking_sound?: Sound;
}
/**
 * A rail ramp.
 */
interface RailRampPrototype extends RailPrototype {
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of straight rail is hardcoded to `{{-1.6, -7.6}, {1.6, 7.6}}`.
     */
    collision_box?: BoundingBox;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by `"allow_on_deep_oil_ocean"`.
     */
    collision_mask_allow_on_deep_oil_ocean?: CollisionMaskConnector;
    /**
     * Must be lower than 500 and at least 1.
     */
    support_range?: float;
}
/**
 * Used for rail corpses.
 */
interface RailRemnantsPrototype extends CorpsePrototype {
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2;
    /**
     * "Rail remnant entities must have a non-zero {@link collision_box | prototype:EntityPrototype::collision_box} defined.
     */
    collision_box?: BoundingBox;
    pictures: RailPictureSet;
    related_rail: EntityID;
    secondary_collision_box?: BoundingBox;
}
/**
 * The abstract base entity for both rail signals.
 */
interface RailSignalBasePrototype extends EntityWithOwnerPrototype {
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of rail signals is hardcoded to `{{-0.2, -0.2}, {0.2, 0.2}}`.
     */
    collision_box?: BoundingBox;
    default_blue_output_signal?: SignalIDConnector;
    default_green_output_signal?: SignalIDConnector;
    default_orange_output_signal?: SignalIDConnector;
    default_red_output_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by  `type .. "/elevated"`.
     */
    elevated_collision_mask?: CollisionMaskConnector;
    elevated_picture_set: RailSignalPictureSet;
    elevated_selection_priority?: uint8;
    /**
     * The "placeable-off-grid" flag will be ignored for rail signals.
     */
    flags?: EntityPrototypeFlags;
    ground_picture_set: RailSignalPictureSet;
}
/**
 * A {@link rail signal | https://wiki.factorio.com/Rail_signal}.
 */
interface RailSignalPrototype extends RailSignalBasePrototype {
}
interface RailSupportPrototype extends EntityWithOwnerPrototype {
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by `"allow_on_deep_oil_ocean"`.
     */
    collision_mask_allow_on_deep_oil_ocean?: CollisionMaskConnector;
    /**
     * Array must contain 8 items.
     */
    elevated_selection_boxes?: BoundingBox[];
    graphics_set: RailSupportGraphicsSet;
    not_buildable_if_no_rails?: boolean;
    snap_to_spots_distance?: float;
    /**
     * Must be lower than 500 and at least 1.
     */
    support_range?: float;
}
/**
 * A {@link reactor | https://wiki.factorio.com/Reactor}.
 */
interface ReactorPrototype extends EntityWithOwnerPrototype {
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. Each variation represents connected heat buffer connection of corresponding index.
     */
    connection_patches_connected?: SpriteVariations;
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. Each variation represents unconnected heat buffer connection of corresponding index.
     */
    connection_patches_disconnected?: SpriteVariations;
    /**
     * How much energy this reactor can consume (from the input energy source) and then output as heat.
     */
    consumption: Energy;
    /**
     * When `use_fuel_glow_color` is true, this is the color used as `working_light_picture` tint for fuels that don't have glow color defined.
     */
    default_fuel_glow_color?: Color;
    default_temperature_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * May not be a heat energy source.
     *
     * The input energy source, in vanilla it is a burner energy source.
     */
    energy_source: EnergySource;
    /**
     * The energy output as heat.
     */
    heat_buffer: HeatBuffer;
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. When reactor is heated, corresponding variations are drawn over `connection_patches_connected`.
     */
    heat_connection_patches_connected?: SpriteVariations;
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. When reactor is heated, corresponding variations are drawn over `connection_patches_disconnected`.
     */
    heat_connection_patches_disconnected?: SpriteVariations;
    heat_lower_layer_picture?: Sprite;
    /**
     * Must be >= 0.
     */
    heating_radius?: double;
    light?: LightDefinition;
    lower_layer_picture?: Sprite;
    /**
     * The action is triggered when the reactor dies (is destroyed) at over 90% of max temperature.
     */
    meltdown_action?: Trigger;
    neighbour_bonus?: double;
    picture?: Sprite;
    /**
     * When this is true, the reactor will stop consuming fuel/energy when the temperature has reached the maximum.
     */
    scale_energy_usage?: boolean;
    /**
     * Whether the reactor should use {@link fuel_glow_color | prototype:ItemPrototype::fuel_glow_color} from the fuel item prototype as light color and tint for `working_light_picture`. {@link Forum post. | https://forums.factorio.com/71121}
     */
    use_fuel_glow_color?: boolean;
    working_light_picture?: Animation;
}
/**
 * A recipe category. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#recipe-category}. See {@link RecipePrototype::category | prototype:RecipePrototype::category}. Recipe categories can be used to specify which {@link machine | prototype:CraftingMachinePrototype::crafting_categories} can craft which {@link recipes | prototype:RecipePrototype}.
 *
 * The recipe category with the name "crafting" cannot contain recipes with fluid ingredients or products.
 * @example ```
{
  type = "recipe-category",
  name = "my-category"
}
```
 */
interface RecipeCategory extends Prototype {
}
/**
 * A recipe. It can be a crafting recipe, a smelting recipe, or a custom type of recipe, see {@link RecipeCategory | prototype:RecipeCategory}.
 * @example ```
{
  type = "recipe",
  name = "iron-plate",
  category = "smelting",
  energy_required = 3.5,
  ingredients = {{type = "item", name = "iron-ore", amount = 1}},
  results = {{type="item", name="iron-plate", amount=1}}
}
```
 * @example ```
{
  type = "recipe",
  name = "coal-liquefaction",
  category = "oil-processing",
  subgroup = "fluid-recipes",
  order = "a[oil-processing]-c[coal-liquefaction]",
  enabled = false,
  energy_required = 5,
  icon = "__base__/graphics/icons/fluid/coal-liquefaction.png",
  icon_size = 32,
  ingredients =
  {
    {type="item", name="coal", amount=10},
    {type="fluid", name="heavy-oil", amount=25},
    {type="fluid", name="steam", amount=50}
  },
  results=
  {
    {type="fluid", name="heavy-oil", amount=35},
    {type="fluid", name="light-oil", amount=15},
    {type="fluid", name="petroleum-gas", amount=20}
  },
  allow_decomposition = false
}
```
 */
interface RecipePrototype extends Prototype {
    additional_categories?: RecipeCategoryID[];
    /**
     * Whether the recipe can be used as an intermediate recipe in hand-crafting.
     */
    allow_as_intermediate?: boolean;
    allow_consumption?: boolean;
    allow_consumption_message?: LocalisedString;
    /**
     * Whether this recipe is allowed to be broken down for the recipe tooltip "Total raw" calculations.
     */
    allow_decomposition?: boolean;
    /**
     * Whether the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
     */
    allow_inserter_overload?: boolean;
    /**
     * Whether the recipe is allowed to use intermediate recipes when hand-crafting.
     */
    allow_intermediates?: boolean;
    allow_pollution?: boolean;
    allow_pollution_message?: LocalisedString;
    allow_productivity?: boolean;
    allow_productivity_message?: LocalisedString;
    allow_quality?: boolean;
    allow_quality_message?: LocalisedString;
    allow_speed?: boolean;
    allow_speed_message?: LocalisedString;
    /**
     * Sets the {@link module categories | prototype:ModuleCategory} that are allowed to be used with this recipe.
     */
    allowed_module_categories?: ModuleCategoryID[];
    /**
     * Additional technologies to list under "Unlocked by" on a recipe's Factoriopedia page.
     */
    alternative_unlock_methods?: TechnologyID[];
    /**
     * Whether the "Made in: <Machine>" part of the tool-tip should always be present, and not only when the recipe can't be hand-crafted.
     */
    always_show_made_in?: boolean;
    /**
     * Whether the products are always shown in the recipe tooltip.
     */
    always_show_products?: boolean;
    /**
     * Whether the recipe should be included in the recycling recipes automatically generated by the quality mod.
     *
     * This property is not read by the game engine itself, but the quality mod's recycling.lua file. This means it is discarded by the game engine after loading finishes.
     */
    auto_recycle?: boolean;
    /**
     * The {@link category | prototype:RecipeCategory} of this recipe. Controls which machines can craft this recipe.
     *
     * The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#recipe-category}. The base `"crafting"` category can not contain recipes with fluid ingredients or products.
     * @example ```
    category = "smelting"
    ```
     */
    category?: RecipeCategoryID;
    /**
     * Used by {@link WorkingVisualisations::working_visualisations | prototype:WorkingVisualisations::working_visualisations} to tint certain layers with the recipe color. {@link WorkingVisualisation::apply_recipe_tint | prototype:WorkingVisualisation::apply_recipe_tint} determines which of the four colors is used for that layer, if any.
     */
    crafting_machine_tint?: RecipeTints;
    emissions_multiplier?: double;
    /**
     * This can be `false` to disable the recipe at the start of the game, or `true` to leave it enabled.
     *
     * If a recipe is unlocked via technology, this should be set to `false`.
     */
    enabled?: boolean;
    /**
     * The amount of time it takes to make this recipe. Must be `> 0.001`. Equals the number of seconds it takes to craft at crafting speed `1`.
     */
    energy_required?: double;
    /**
     * Hides the recipe from the player's crafting screen. The recipe will still show up for selection in machines.
     */
    hide_from_player_crafting?: boolean;
    /**
     * If left unset, this property will be determined automatically: If the recipe is not `hidden`, and no item, fluid, or virtual signal has the same icon as this recipe, this property will be set to `false`. It'll be `true` otherwise.
     */
    hide_from_signal_gui?: boolean;
    /**
     * Hides the recipe from item/fluid production statistics.
     */
    hide_from_stats?: boolean;
    /**
     * If given, this determines the recipe's icon. Otherwise, the icon of `main_product` or the singular product is used.
     *
     * Mandatory if `icons` is not defined for a recipe with more than one product and no `main_product`, or no product.
     * @example ```
    icon = "__base__/graphics/icons/fluid/heavy-oil.png"
    ```
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * A table containing ingredient names and amounts. Can also contain information about fluid temperature and whether some of the amount is ignored by production statistics.
     *
     * The maximum ingredient amount is 65 535. Can be set to an empty table to create a recipe that needs no ingredients.
     *
     * Duplicate ingredients, e.g. two entries with the same name, are *not* allowed. In-game, the item ingredients are ordered by {@link ItemGroup::order_in_recipe | prototype:ItemGroup::order_in_recipe}.
     * @example ```
    -- Recipe with items
    ingredients =
    {
      {type = "item", name = "iron-stick", amount = 2},
      {type = "item", name = "iron-plate", amount = 3}
    }
    ```
     * @example ```
    -- Recipe with fluids
    ingredients =
    {
      {type="fluid", name="water", amount=50},
      {type="fluid", name="crude-oil", amount=100}
    }
    ```
     */
    ingredients?: IngredientPrototype[];
    /**
     * For recipes with one or more products: Subgroup, localised_name and icon default to the values of the singular/main product, but can be overwritten by the recipe. Setting the main_product to an empty string (`""`) forces the title in the recipe tooltip to use the recipe's name (not that of the product) and shows the products in the tooltip.
     *
     * If 1) there are multiple products and this property is nil, 2) this property is set to an empty string (`""`), or 3) there are no products, the recipe will use the localised_name, icon, and subgroup of the recipe. icon and subgroup become non-optional.
     */
    main_product?: string;
    /**
     * Must be >= 0.
     */
    maximum_productivity?: double;
    /**
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough". See {@link insertion limits | https://wiki.factorio.com/Inserters#Insertion_limits}.
     *
     * If set to `0`, it instead uses the following formula: `1.166 / (energy_required / the assembler's crafting_speed)`, rounded up, and clamped to be between`2` and `100`. The numbers used in this formula can be changed by the {@link UtilityConstants | prototype:UtilityConstants} properties `dynamic_recipe_overload_factor`, `minimum_recipe_overload_multiplier`, and `maximum_recipe_overload_multiplier`.
     */
    overload_multiplier?: uint32;
    preserve_products_in_machine_output?: boolean;
    requester_paste_multiplier?: uint32;
    /**
     * When set to true, the recipe will always produce fresh (non-spoiled) item even when the ingredients are spoiled.
     */
    result_is_always_fresh?: boolean;
    /**
     * A table containing result names and amounts. Products also contain information such as fluid temperature, probability of results and whether some of the amount is ignored by productivity.
     *
     * Can be set to an empty table to create a recipe that produces nothing. Duplicate results, e.g. two entries with the same name, are allowed.
     * @example ```
    results =
    {
      {type="fluid", name="heavy-oil", amount=3},
      {type="fluid", name="light-oil", amount=3},
      {type="fluid", name="petroleum-gas", amount=4}
    }
    ```
     * @example ```
    results =
    {
      {type = "item", name = "iron-nuggets", amount = 9},
      {type = "item", name = "gold-nuggets", amount = 1}
    }
    ```
     * @example ```
    results = {{type = "fluid", name = "steam", amount = 1, temperature = 165}}
    ```
     */
    results?: ProductPrototype[];
    /**
     * Whether the recipe name should have the product amount in front of it. E.g. "2x Transport belt".
     */
    show_amount_in_title?: boolean;
    surface_conditions?: SurfaceCondition[];
    /**
     * Whether enabling this recipe unlocks its item products to show in selection lists (item filters, logistic requests, etc.).
     */
    unlock_results?: boolean;
}
/**
 * Properties of the remote controller.
 */
interface RemoteControllerPrototype {
    /**
     * Must be >= 0.34375.
     */
    movement_speed: double;
    /**
     * Name of the remote controller. Base game uses "default".
     */
    name: string;
    type: 'remote-controller';
}
/**
 * A {@link repair pack | https://wiki.factorio.com/Repair_pack}. Using the tool decreases durability to restore entity health.
 */
interface RepairToolPrototype extends ToolPrototype {
    /**
     * Entity health repaired per used {@link ToolPrototype::durability | prototype:ToolPrototype::durability}. E.g. a repair tool with 5 durability and a repair speed of 2 will restore 10 health.
     *
     * This is then multiplied by the {@link EntityWithHealthPrototype::repair_speed_modifier | prototype:EntityWithHealthPrototype::repair_speed_modifier} of the entity.
     */
    speed: float;
}
/**
 * This prototype is used for receiving an achievement when the player completes a specific research.
 */
interface ResearchAchievementPrototype extends AchievementPrototype {
    /**
     * Mandatory if `technology` is not defined.
     *
     * This will only trigger if the player has learned every research in the game.
     * @example ```
    research_all = true
    ```
     */
    research_all?: boolean;
    /**
     * Mandatory if `research_all` is not defined.
     *
     * Researching this technology will trigger the achievement.
     * @example ```
    technology = "oil-processing"
    ```
     */
    technology?: TechnologyID;
}
interface ResearchWithSciencePackAchievementPrototype extends AchievementPrototype {
    amount?: uint32;
    science_pack: ItemID;
}
/**
 * A resource category. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#resource-category}. See {@link ResourceEntityPrototype::category | prototype:ResourceEntityPrototype::category}.
 */
interface ResourceCategory extends Prototype {
}
/**
 * A mineable/gatherable entity.
 * @example ```
{
  type = "resource",
  name = "crude-oil",
  icon = "__base__/graphics/icons/crude-oil.png",
  icon_size = 32,
  flags = {"placeable-neutral"},
  category = "basic-fluid",
  order="a-b-a",
  infinite = true,
  highlight = true,
  minimum = 60000,
  normal = 300000,
  infinite_depletion_amount = 10,
  resource_patch_search_radius = 12,
  tree_removal_probability = 0.7,
  tree_removal_max_distance = 32 * 32,
  minable =
  {
    mining_time = 1,
    results =
    {
      {
        type = "fluid",
        name = "crude-oil",
        amount_min = 10,
        amount_max = 10,
        probability = 1
      }
    }
  },
  collision_box = {{ -1.4, -1.4}, {1.4, 1.4}},
  selection_box = {{ -0.5, -0.5}, {0.5, 0.5}},
  autoplace = resource_autoplace.resource_autoplace_settings{
    name = "crude-oil",
    order = "c", -- Other resources are "b"; oil won't get placed if something else is already there.
    base_density = 8.2,
    base_spots_per_km2 = 1.8,
    random_probability = 1/48,
    random_spot_size_minimum = 1,
    random_spot_size_maximum = 1, -- don't randomize spot size
    additional_richness = 220000, -- this increases the total everywhere, so base_density needs to be decreased to compensate
    has_starting_area_placement = false,
    resource_index = resource_autoplace.resource_indexes["crude-oil"],
    regular_rq_factor_multiplier = 1
  },
  stage_counts = {0},
  stages =
  {
    sheet =
    {
      filename = "__base__/graphics/entity/crude-oil/crude-oil.png",
      priority = "extra-high",
      width = 75,
      height = 61,
      frame_count = 4,
      variation_count = 1
    }
  },
  map_color = {r=0.78, g=0.2, b=0.77},
  map_grid = false
}
```
 */
interface ResourceEntityPrototype extends EntityPrototype {
    /**
     * The category for the resource. Available categories in vanilla can be found {@link here | https://wiki.factorio.com/Data.raw#resource-category}.
     */
    category?: ResourceCategoryID;
    /**
     * Must be greater than or equal to `0`.
     */
    cliff_removal_probability?: double;
    draw_stateless_visualisation_under_building?: boolean;
    /**
     * Sound played when a {@link CarPrototype | prototype:CarPrototype} drives over this resource.
     */
    driving_sound?: InterruptibleSound;
    /**
     * How long it takes `stages_effect` to go from `min_effect_alpha` to `max_effect_alpha`.
     */
    effect_animation_period?: float;
    /**
     * How much `effect_animation_period` can deviate from its original value. Used to make the stages effect alpha change look less uniform.
     */
    effect_animation_period_deviation?: float;
    /**
     * How much the surface darkness should affect the alpha of `stages_effect`.
     */
    effect_darkness_multiplier?: float;
    /**
     * If the resource should be highlighted when holding a mining drill that can mine it (holding a pumpjack highlights crude-oil in the base game).
     */
    highlight?: boolean;
    /**
     * If the ore is infinitely minable, or if it will eventually run out of resource.
     */
    infinite?: boolean;
    /**
     * Every time an infinite-type resource "ticks" lower it's lowered by that amount. -- {@link Rseding91 | https://forums.factorio.com/viewtopic.php?p=271115#p271115}
     */
    infinite_depletion_amount?: uint32;
    /**
     * Whether the resource should have a grid pattern on the map instead of a solid map color.
     */
    map_grid?: boolean;
    /**
     * Maximal alpha value of `stages_effect`.
     */
    max_effect_alpha?: float;
    /**
     * Minimal alpha value of `stages_effect`.
     */
    min_effect_alpha?: float;
    /**
     * Must be not 0 when `infinite = true`.
     */
    minimum?: uint32;
    /**
     * Defaults to the resources map color if left unset and map color is set, otherwise defaults to white if left unset.
     */
    mining_visualisation_tint?: Color;
    /**
     * Must be not 0 when `infinite = true`.
     */
    normal?: uint32;
    /**
     * Whether there should be a slight offset to graphics of the resource. Used to make patches a little less uniform in appearance.
     */
    randomize_visual_position?: boolean;
    /**
     * When hovering over this resource in the map view: How far to search for other resource patches of this type to display as one (summing amount, white outline).
     */
    resource_patch_search_radius?: uint32;
    /**
     * Number of stages the animation has.
     */
    stage_counts: uint32[];
    /**
     * Entity's graphics, using a graphic sheet, with variation and depletion. At least one stage must be defined.
     *
     * When using {@link AnimationVariations::sheet | prototype:AnimationVariations::sheet}, `frame_count` is the amount of frames per row in the spritesheet. `variation_count` is the amount of rows in the spritesheet. Each row in the spritesheet is one stage of the animation.
     */
    stages?: AnimationVariations;
    /**
     * An effect that can be overlaid above the normal ore graphics. Used in the base game to make {@link uranium ore | https://wiki.factorio.com/Uranium_ore} glow.
     */
    stages_effect?: AnimationVariations;
    /**
     * Must be positive when `tree_removal_probability` is set.
     */
    tree_removal_max_distance?: double;
    /**
     * Must be greater than or equal to `0`.
     */
    tree_removal_probability?: double;
    /**
     * Sound played when the player walks over this resource.
     */
    walking_sound?: Sound;
}
/**
 * Used by {@link personal roboport | https://wiki.factorio.com/Personal_roboport}.
 */
interface RoboportEquipmentPrototype extends EquipmentPrototype {
    /**
     * Add this is if the roboport should be fueled directly instead of using power from the equipment grid.
     */
    burner?: BurnerEnergySource;
    /**
     * Presumably, the distance from the roboport at which robots will wait to charge.
     */
    charge_approach_distance: float;
    charging_distance?: float;
    /**
     * @example ```
    charging_energy = "1000kW"
    ```
     */
    charging_energy: Energy;
    /**
     * The offsets from the center of the roboport at which robots will charge. Only used if `charging_station_count` is equal to 0.
     */
    charging_offsets?: Vector[];
    /**
     * How many charging points this roboport has. If this is 0, the length of the charging_offsets table is used to calculate the charging station count.
     */
    charging_station_count?: uint32;
    charging_station_count_affected_by_quality?: boolean;
    charging_station_shift?: Vector;
    /**
     * Distance in tiles. This defines how far away a robot can be from the charging spot and still be charged, however the bot is still required to reach a charging spot in the first place.
     */
    charging_threshold_distance?: float;
    /**
     * Can't be negative.
     */
    construction_radius: float;
    draw_construction_radius_visualization?: boolean;
    /**
     * Unused, as roboport equipment does not have a logistic radius that could be drawn.
     */
    draw_logistic_radius_visualization?: boolean;
    /**
     * Mandatory if `burner` is defined.
     *
     * The size of the buffer of the burner energy source, so effectively the amount of power that the energy source can produce per tick.
     */
    power?: Energy;
    /**
     * The animation played at each charging point when a robot is charging there.
     */
    recharging_animation?: Animation;
    /**
     * The light emitted when charging a robot.
     */
    recharging_light?: LightDefinition;
    /**
     * How many robots can exist in the network (cumulative).
     */
    robot_limit?: ItemCountType;
    robot_vertical_acceleration?: float;
    robots_shrink_when_entering_and_exiting?: boolean;
    /**
     * Presumably states the height of the charging stations and thus an additive offset for the charging_offsets.
     */
    spawn_and_station_height: float;
    spawn_and_station_shadow_height_offset?: float;
    /**
     * Minimum amount of energy that needs to available inside the roboport's buffer so that robots can be spawned.
     */
    spawn_minimum?: Energy;
    /**
     * The offset from the center of the roboport at which robots will enter and exit.
     */
    stationing_offset?: Vector;
    /**
     * When robot ascends or descends to this roboport, at which height is should switch between `"air-object"` and `"object"` {@link render layer | prototype:RenderLayer}.
     */
    stationing_render_layer_swap_height?: float;
}
/**
 * A {@link roboport | https://wiki.factorio.com/Roboport}.
 */
interface RoboportPrototype extends EntityWithOwnerPrototype {
    base?: Sprite;
    /**
     * The animation played when the roboport is idle.
     */
    base_animation?: Animation;
    base_patch?: Sprite;
    /**
     * The distance (in tiles) from the roboport at which robots will wait to charge. Notably, if the robot is already in range, then it will simply wait at its current position.
     */
    charge_approach_distance: float;
    charging_distance?: float;
    /**
     * The maximum power provided to each charging station.
     * @example ```
    charging_energy = "1000kW"
    ```
     */
    charging_energy: Energy;
    /**
     * The offsets from the center of the roboport at which robots will charge. Only used if `charging_station_count` is equal to 0.
     */
    charging_offsets?: Vector[];
    /**
     * How many charging points this roboport has. If this is 0, the length of the charging_offsets table is used to calculate the charging station count.
     */
    charging_station_count?: uint32;
    charging_station_count_affected_by_quality?: boolean;
    charging_station_shift?: Vector;
    /**
     * Unused.
     */
    charging_threshold_distance?: float;
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    close_door_trigger_effect?: TriggerEffect;
    /**
     * Can't be negative.
     */
    construction_radius: float;
    default_available_construction_output_signal?: SignalIDConnector;
    default_available_logistic_output_signal?: SignalIDConnector;
    default_roboport_count_output_signal?: SignalIDConnector;
    default_total_construction_output_signal?: SignalIDConnector;
    default_total_logistic_output_signal?: SignalIDConnector;
    door_animation_down?: Animation;
    door_animation_up?: Animation;
    draw_circuit_wires?: boolean;
    draw_construction_radius_visualization?: boolean;
    draw_copper_wires?: boolean;
    draw_logistic_radius_visualization?: boolean;
    /**
     * The roboport's energy source.
     */
    energy_source: ElectricEnergySource | VoidEnergySource;
    /**
     * The amount of energy the roboport uses when idle.
     * @example ```
    energy_usage = "50kW"
    ```
     */
    energy_usage: Energy;
    frozen_patch?: Sprite;
    /**
     * Must be >= `logistics_radius`.
     */
    logistics_connection_distance?: float;
    /**
     * Can't be negative.
     */
    logistics_radius: float;
    /**
     * The number of repair pack slots in the roboport.
     */
    material_slots_count: ItemStackIndex;
    max_logistic_slots?: LogisticFilterIndex;
    open_door_trigger_effect?: TriggerEffect;
    /**
     * Defaults to the max of logistic range or construction range rounded up to chunks.
     */
    radar_range?: uint32;
    radar_visualisation_color?: Color;
    /**
     * Minimum charge that the roboport has to have after a blackout (0 charge/buffered energy) to begin working again. Additionally, freshly placed roboports will have their energy buffer filled with `0.25 × recharge_minimum` energy.
     *
     * Must be larger than or equal to `energy_usage` otherwise during low power the roboport will toggle on and off every tick.
     * @example ```
    recharge_minimum = "40MJ"
    ```
     */
    recharge_minimum: Energy;
    /**
     * The animation played at each charging point when a robot is charging there.
     */
    recharging_animation?: Animation;
    /**
     * The light emitted when charging a robot.
     */
    recharging_light?: LightDefinition;
    request_to_open_door_timeout: uint32;
    /**
     * Unused.
     */
    robot_limit?: ItemCountType;
    /**
     * The number of robot slots in the roboport.
     */
    robot_slots_count: ItemStackIndex;
    robot_vertical_acceleration?: float;
    robots_shrink_when_entering_and_exiting?: boolean;
    /**
     * Presumably states the height of the charging stations and thus an additive offset for the charging_offsets.
     */
    spawn_and_station_height: float;
    spawn_and_station_shadow_height_offset?: float;
    /**
     * The offset from the center of the roboport at which robots will enter and exit.
     */
    stationing_offset?: Vector;
    /**
     * When robot ascends or descends to this roboport, at which height is should switch between `"air-object"` and `"object"` {@link render layer | prototype:RenderLayer}.
     */
    stationing_render_layer_swap_height?: float;
}
/**
 * The common properties of logistic and construction robots represented by an abstract prototype.
 */
interface RobotWithLogisticInterfacePrototype extends FlyingRobotPrototype {
    charging_sound?: InterruptibleSound;
    /**
     * Applied when the robot expires (runs out of energy and {@link FlyingRobotPrototype::speed_multiplier_when_out_of_energy | prototype:FlyingRobotPrototype::speed_multiplier_when_out_of_energy} is 0).
     */
    destroy_action?: Trigger;
    draw_cargo?: boolean;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    idle?: RotatedAnimation;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    in_motion?: RotatedAnimation;
    /**
     * The robot's cargo carrying capacity. Can be increased by {@link worker robot cargo size research | prototype:WorkerRobotStorageModifier}.
     */
    max_payload_size: ItemCountType;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    shadow_idle?: RotatedAnimation;
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    shadow_in_motion?: RotatedAnimation;
}
/**
 * A {@link rocket silo | https://wiki.factorio.com/Rocket_silo}.
 */
interface RocketSiloPrototype extends AssemblingMachinePrototype {
    /**
     * Additional energy used during the following parts of the {@link launch sequence | runtime:defines.rocket_silo_status}: doors_opening, rocket_rising, arms_advance, engine_starting, arms_retract, doors_closing.
     */
    active_energy_usage: Energy;
    /**
     * Played when switching into the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state.
     */
    alarm_sound?: Sound;
    /**
     * Applied when switching into the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state.
     */
    alarm_trigger?: TriggerEffect;
    arm_01_back_animation?: Animation;
    arm_02_right_animation?: Animation;
    arm_03_front_animation?: Animation;
    base_day_sprite?: Sprite;
    base_engine_light?: LightDefinition;
    base_front_frozen?: Sprite;
    base_front_sprite?: Sprite;
    base_frozen?: Sprite;
    base_light?: LightDefinition;
    /**
     * Drawn instead of `base_day_sprite` during the night, that is when {@link LuaSurface::darkness | runtime:LuaSurface::darkness} is larger than 0.3.
     */
    base_night_sprite?: Sprite;
    can_launch_without_landing_pads?: boolean;
    /**
     * Must have exactly one entry in {@link CargoStationParameters::hatch_definitions | prototype:CargoStationParameters::hatch_definitions}.
     */
    cargo_station_parameters: CargoStationParameters;
    /**
     * Played when switching into the {@link arms_retract | runtime:defines.rocket_silo_status.arms_retract} state.
     */
    clamps_off_sound?: Sound;
    /**
     * Applied when switching into the {@link arms_retract | runtime:defines.rocket_silo_status.arms_retract} state.
     */
    clamps_off_trigger?: TriggerEffect;
    /**
     * Played when switching into the {@link arms_advance | runtime:defines.rocket_silo_status.arms_advance} state.
     */
    clamps_on_sound?: Sound;
    /**
     * Applied when switching into the {@link arms_advance | runtime:defines.rocket_silo_status.arms_advance} state.
     */
    clamps_on_trigger?: TriggerEffect;
    door_back_frozen?: Sprite;
    door_back_open_offset: Vector;
    door_back_sprite?: Sprite;
    door_front_frozen?: Sprite;
    door_front_open_offset: Vector;
    door_front_sprite?: Sprite;
    /**
     * The inverse of the duration in ticks of {@link doors_opening | runtime:defines.rocket_silo_status.doors_opening} and {@link closing | runtime:defines.rocket_silo_status.doors_closing}.
     * @example ```
    door_opening_speed = 1 / (4 * 60) -- doors opening and closing takes 4 seconds
    ```
     */
    door_opening_speed: double;
    /**
     * Played when switching into the {@link doors_opening | runtime:defines.rocket_silo_status.doors_opening} and {@link doors_closing | runtime:defines.rocket_silo_status.doors_closing} states.
     */
    doors_sound?: Sound;
    /**
     * Applied when switching into the {@link doors_opening | runtime:defines.rocket_silo_status.doors_opening} and {@link doors_closing | runtime:defines.rocket_silo_status.doors_closing} states.
     */
    doors_trigger?: TriggerEffect;
    hole_clipping_box: BoundingBox;
    hole_frozen?: Sprite;
    hole_light_sprite?: Sprite;
    hole_sprite?: Sprite;
    /**
     * May be 0.
     *
     * Additional energy used during the night, that is when {@link LuaSurface::darkness | runtime:LuaSurface::darkness} is larger than 0.3.
     */
    lamp_energy_usage: Energy;
    /**
     * Enables 'Space Age' functionality for this rocket silo, allowing it to supply space platforms.
     */
    launch_to_space_platforms?: boolean;
    /**
     * The time to wait in the {@link launch_started | runtime:defines.rocket_silo_status.launch_started} state before switching to {@link engine_starting | runtime:defines.rocket_silo_status.engine_starting}.
     */
    launch_wait_time?: uint8;
    /**
     * The inverse of the duration in ticks of {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} and {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close}.
     * @example ```
    light_blinking_speed = 1 / (2 * 60) -- lights blinking takes 120 ticks
    ```
     */
    light_blinking_speed: double;
    logistic_trash_inventory_size?: ItemStackIndex;
    /**
     * Played when switching from {@link rocket_flying | runtime:defines.rocket_silo_status.rocket_flying} into the {@link doors_opened | runtime:defines.rocket_silo_status.doors_opened} state when a quick follow-up rocket is ready.
     */
    quick_alarm_sound?: Sound;
    /**
     * Played when switching into the {@link rocket_rising | runtime:defines.rocket_silo_status.rocket_rising} state.
     */
    raise_rocket_sound?: Sound;
    /**
     * Applied when switching into the {@link rocket_rising | runtime:defines.rocket_silo_status.rocket_rising} state.
     */
    raise_rocket_trigger?: TriggerEffect;
    /**
     * Drawn from the start of the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state until the end of the {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close} state.
     */
    red_lights_back_sprites?: Sprite;
    /**
     * Drawn from the start of the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state until the end of the {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close} state.
     */
    red_lights_front_sprites?: Sprite;
    /**
     * Whether the "no network" icon should be rendered on this entity if the entity is not within a logistics network.
     */
    render_not_in_network_icon?: boolean;
    /**
     * Name of a {@link RocketSiloRocketPrototype | prototype:RocketSiloRocketPrototype}.
     */
    rocket_entity: EntityID;
    rocket_glow_overlay_sprite?: Sprite;
    /**
     * The number of crafts that must complete to produce a rocket. This includes bonus crafts from productivity. Recipe products are ignored.
     */
    rocket_parts_required: uint32;
    /**
     * Must be at least `rocket_parts_required`.
     */
    rocket_parts_storage_cap?: uint32;
    rocket_quick_relaunch_start_offset: double;
    /**
     * The time to wait in the {@link doors_opened | runtime:defines.rocket_silo_status.doors_opened} state before switching to {@link rocket_rising | runtime:defines.rocket_silo_status.rocket_rising}.
     */
    rocket_rising_delay?: uint8;
    rocket_shadow_overlay_sprite?: Sprite;
    satellite_animation?: Animation;
    satellite_shadow_animation?: Animation;
    shadow_sprite?: Sprite;
    silo_fade_out_end_distance: double;
    silo_fade_out_start_distance: double;
    /**
     * How many times the `red_lights_back_sprites` and `red_lights_front_sprites` should blink during {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} and {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close}.
     *
     * Does not affect the duration of the launch sequence.
     */
    times_to_blink: uint8;
    to_be_inserted_to_rocket_inventory_size?: ItemStackIndex;
}
/**
 * The rocket inside the rocket silo.
 */
interface RocketSiloRocketPrototype extends EntityPrototype {
    cargo_attachment_offset?: Vector;
    /**
     * Name of a {@link CargoPodPrototype | prototype:CargoPodPrototype}.
     */
    cargo_pod_entity: EntityID;
    dying_explosion?: EntityID;
    effects_fade_in_end_distance: double;
    effects_fade_in_start_distance: double;
    engine_starting_speed: double;
    flying_acceleration: double;
    flying_sound?: Sound;
    flying_speed: double;
    flying_trigger?: TriggerEffect;
    full_render_layer_switch_distance: double;
    glow_light?: LightDefinition;
    inventory_size: ItemStackIndex;
    rising_speed: double;
    rocket_above_wires_slice_offset_from_center?: float;
    rocket_air_object_slice_offset_from_center?: float;
    rocket_flame_animation?: Animation;
    rocket_flame_left_animation?: Animation;
    rocket_flame_left_rotation: float;
    rocket_flame_right_animation?: Animation;
    rocket_flame_right_rotation: float;
    rocket_fog_mask?: FogMaskShapeDefinition;
    rocket_glare_overlay_sprite?: Sprite;
    rocket_initial_offset?: Vector;
    rocket_launch_offset: Vector;
    rocket_render_layer_switch_distance: double;
    rocket_rise_offset: Vector;
    rocket_shadow_sprite?: Sprite;
    rocket_smoke_bottom1_animation?: Animation;
    rocket_smoke_bottom2_animation?: Animation;
    rocket_smoke_top1_animation?: Animation;
    rocket_smoke_top2_animation?: Animation;
    rocket_smoke_top3_animation?: Animation;
    rocket_sprite?: Sprite;
    rocket_visible_distance_from_center: float;
    shadow_fade_out_end_ratio: double;
    shadow_fade_out_start_ratio: double;
    shadow_slave_entity?: EntityID;
}
/**
 * The shadow of the rocket inside the rocket silo.
 * @example ```
{
  type = "rocket-silo-rocket-shadow",
  name = "rocket-silo-rocket-shadow",
  flags = {"not-on-map"},
  hidden = true,
  collision_mask = {layers={}, not_colliding_with_itself=true},
  collision_box = {{0, 0}, {10, 3.5}},
  selection_box = {{0, 0}, {0, 0}}
}
```
 */
interface RocketSiloRocketShadowPrototype extends EntityPrototype {
}
/**
 * The abstract base of all rolling stock.
 */
interface RollingStockPrototype extends VehiclePrototype {
    air_resistance: double;
    allow_manual_color?: boolean;
    allow_robot_dispatch_in_automatic_mode?: boolean;
    back_light?: LightDefinition;
    color?: Color;
    /**
     * The distance between the joint of this rolling stock and its connected rolling stocks joint.
     *
     * Maximum connection distance is 15.
     */
    connection_distance: double;
    default_copy_color_from_train_stop?: boolean;
    /**
     * Cannot use `fade_ticks`.
     */
    door_closing_sound?: InterruptibleSound;
    /**
     * Cannot use `fade_ticks`.
     */
    door_opening_sound?: InterruptibleSound;
    drive_over_elevated_tie_trigger?: TriggerEffect;
    /**
     * Usually a sound to play when the rolling stock drives over a tie. The rolling stock is considered to be driving over a tie every `tie_distance` tiles.
     */
    drive_over_tie_trigger?: TriggerEffect;
    drive_over_tie_trigger_minimal_speed?: double;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by  `type .. "/elevated"`.
     */
    elevated_collision_mask?: CollisionMaskConnector;
    elevated_rail_sound?: MainSound;
    elevated_selection_priority?: uint8;
    horizontal_doors?: Animation;
    /**
     * The length between this rolling stocks front and rear joints. Joints are the point where connection_distance is measured from when rolling stock are connected to one another. Wheels sprite are placed based on the joint position.
     *
     * Maximum joint distance is 15.
     *
     * Note: There needs to be border at least 0.2 between the {@link bounding box | prototype:EntityPrototype::collision_box} edge and joint. This means that the collision_box must be at least `{{-0,-0.2},{0,0.2}}`.
     */
    joint_distance: double;
    /**
     * Maximum speed of the rolling stock in tiles/tick.
     *
     * In-game, the max speed of a train is `min(all_rolling_stock_max_speeds) × average(all_fuel_modifiers_in_all_locomotives)`. This calculated train speed is then silently capped to 7386.3km/h.
     */
    max_speed: double;
    pictures?: RollingStockRotatedSlopedGraphics;
    stand_by_light?: LightDefinition;
    /**
     * In tiles. Used to determine how often `drive_over_tie_trigger` is triggered.
     */
    tie_distance?: double;
    /**
     * Defaults to the mask from {@link UtilityConstants::default_collision_masks | prototype:UtilityConstants::default_collision_masks} when indexed by  `type .. "/transition"`.
     */
    transition_collision_mask?: CollisionMaskConnector;
    vertical_doors?: Animation;
    vertical_selection_shift: double;
    wheels?: RollingStockRotatedSlopedGraphics;
}
/**
 * Entity representing an individual segment in a {@link SegmentedUnitPrototype | prototype:SegmentedUnitPrototype}
 */
interface SegmentPrototype extends EntityWithOwnerPrototype {
    /**
     * The animation to use of the entity.
     */
    animation: RotatedAnimation;
    /**
     * The number of segments behind this one that should always be rendered atop this one, giving the illusion that at all orientations, those following segments overlap this current segment.
     *
     * Must be 0 or greater, and the sum of `forward_overlap` and `backward_overlap` must be less than or equal to 4.
     */
    backward_overlap?: uint8;
    /**
     * The number of tiles of spacing to add behind this segment. Can be negative. Scales with the segment scale when used in a {@link SegmentEngineSpecification | prototype:SegmentEngineSpecification}.
     */
    backward_padding?: double;
    /**
     * The sound to play when the entity dies.
     *
     * If not specified, {@link UtilitySounds::segment_dying_sound | prototype:UtilitySounds::segment_dying_sound} is used.
     */
    dying_sound?: Sound;
    dying_sound_volume_modifier?: float;
    /**
     * The number of segments ahead of this one that should always be rendered atop this one, giving the illusion that at all orientations, those preceding segments overlap this current segment.
     *
     * Must be 0 or greater, and the sum of `forward_overlap` and `backward_overlap` must be less than or equal to 4.
     */
    forward_overlap?: uint8;
    /**
     * The number of tiles of spacing to add in front of this segment. Can be negative. Scales with the segment scale when used in a {@link SegmentEngineSpecification | prototype:SegmentEngineSpecification}.
     */
    forward_padding?: double;
    /**
     * The layer to render the entity in.
     */
    render_layer?: RenderLayer;
    /**
     * The effects to trigger every tick.
     */
    update_effects?: TriggerEffectWithCooldown[];
    /**
     * The effects to trigger every tick while enraged, in addition to `update_effects`.
     */
    update_effects_while_enraged?: TriggerEffectWithCooldown[];
}
/**
 * Entity composed of multiple segment entities that trail behind the head.
 */
interface SegmentedUnitPrototype extends SegmentPrototype {
    /**
     * The acceleration rate when moving from one state to another. Cannot be negative.
     */
    acceleration_rate: double;
    /**
     * Attack parameters for when a segmented unit is attacking something.
     */
    attack_parameters?: AttackParameters;
    /**
     * The movement speed while attacking, in tiles per tick. Cannot be negative.
     */
    attacking_speed: double;
    /**
     * The number of ticks to remain enraged after last taking damage.
     */
    enraged_duration: uint32;
    /**
     * The movement speed while enraged, in tiles per tick. Cannot be negative.
     */
    enraged_speed: double;
    /**
     * Sound which plays when health ratio drops below any of `hurt_thresholds`.
     */
    hurt_roar?: Sound;
    /**
     * Only loaded, and mandatory if `hurt_roar` is defined.
     */
    hurt_thresholds?: float[];
    /**
     * The movement speed while investigating, in tiles per tick. Cannot be negative.
     */
    investigating_speed: double;
    /**
     * The movement speed while patrolling, in tiles per tick. Cannot be negative.
     */
    patrolling_speed: double;
    /**
     * Cannot be negative.
     */
    patrolling_turn_radius?: double;
    /**
     * Attack parameters for when a segmented unit is attacking something in retaliation because the target first attacked it.
     */
    revenge_attack_parameters?: AttackParameters;
    roar?: Sound;
    /**
     * The default is 1.0f / (6.0f * 60.0f), average pause between roars is 6 seconds.
     */
    roar_probability?: float;
    /**
     * Specification of the segment engine, which should contain a list of the segments that compose the entity's body.
     */
    segment_engine: SegmentEngineSpecification;
    /**
     * The territory radius in chunks. The chunk in which the entity spawned is included.
     */
    territory_radius: uint32;
    /**
     * The number of ticks between territory scans. Greater values means longer time between scans, which means a slower reaction time. Cannot be `0`.
     */
    ticks_per_scan?: uint32;
    /**
     * Turn radius, in tiles. Cannot be negative.
     */
    turn_radius: double;
    /**
     * Attempts to smooth out tight turns by limiting how quickly the unit can change turning directions. 0 means no turn smoothing, 1 means no turning whatsoever. Must be between 0 and 1.
     */
    turn_smoothing?: double;
    /**
     * Vision distance, affects scanning radius for enemies to attack. Must be non-negative. Max 100.
     */
    vision_distance: double;
}
/**
 * Used in the base game as a base for the blueprint item and the deconstruction item.
 */
interface SelectionToolPrototype extends ItemWithLabelPrototype {
    /**
     * Settings for how the selection tool alt-reverse-selects things in-game (using SHIFT + Right mouse button).
     */
    alt_reverse_select?: SelectionModeData;
    alt_select: SelectionModeData;
    /**
     * If tiles should be included in the selection regardless of entities also being in the selection. This is a visual only setting.
     */
    always_include_tiles?: boolean;
    mouse_cursor?: MouseCursorID;
    reverse_select?: SelectionModeData;
    select: SelectionModeData;
    skip_fog_of_war?: boolean;
    super_forced_select?: SelectionModeData;
}
interface SelectorCombinatorPrototype extends CombinatorPrototype {
    count_symbol_sprites?: Sprite4Way;
    max_symbol_sprites?: Sprite4Way;
    min_symbol_sprites?: Sprite4Way;
    quality_symbol_sprites?: Sprite4Way;
    random_symbol_sprites?: Sprite4Way;
    rocket_capacity_sprites?: Sprite4Way;
    stack_size_sprites?: Sprite4Way;
}
/**
 * This prototype is used for receiving an achievement when the player shoots certain ammo.
 */
interface ShootAchievementPrototype extends AchievementPrototype {
    /**
     * This will trigger the achievement, if this ammo is shot.
     * @example ```
    ammo_type = "atomic-bomb"
    ```
     */
    ammo_type?: ItemID;
    /**
     * How much of the ammo needs to be shot.
     */
    amount?: uint32;
}
/**
 * Definition for a shortcut button in the {@link shortcut bar | https://wiki.factorio.com/Shortcut_bar}.
 *
 * This is **not** a custom keybinding (keyboard shortcut), for that see {@link CustomInputPrototype | prototype:CustomInputPrototype}.
 * @example ```
{
  type = "shortcut",
  name = "give-deconstruction-planner",
  order = "b[blueprints]-i[deconstruction-planner]",
  action = "spawn-item",
  localised_name = {"shortcut.make-deconstruction-planner"},
  associated_control_input = "give-deconstruction-planner",
  technology_to_unlock = "construction-robotics",
  item_to_spawn = "deconstruction-planner",
  style = "red",
  icon = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x56.png",
  icon_size = 56,
  small_icon = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x24.png",
  small_icon_size = 24
}
```
 */
interface ShortcutPrototype extends Prototype {
    /**
     * If this is `"lua"`, {@link on_lua_shortcut | runtime:on_lua_shortcut} is raised when the shortcut is clicked.
     */
    action: 'toggle-alt-mode' | 'undo' | 'redo' | 'paste' | 'import-string' | 'toggle-personal-roboport' | 'toggle-personal-logistic-requests' | 'toggle-equipment-movement-bonus' | 'spawn-item' | 'lua';
    /**
     * Name of a custom input or vanilla control. This is **only** used to show the keybind in the tooltip of the shortcut.
     */
    associated_control_input?: string;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * The base game uses 32px icons for shortcuts.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * The item to create when clicking on a shortcut with the action set to `"spawn-item"`. The item must have the {@link spawnable | prototype:ItemPrototypeFlags::spawnable} flag set.
     */
    item_to_spawn?: ItemID;
    /**
     * Used to order the shortcuts in the {@link quick panel | https://wiki.factorio.com/Quick_panel}, which replaces the shortcut bar when using a controller (game pad). It {@link is recommended | https://forums.factorio.com/106661} to order modded shortcuts after the vanilla shortcuts.
     */
    order?: Order;
    /**
     * Path to the icon file. Used in the shortcut selection popup.
     *
     * Mandatory if `small_icons` is not defined.
     */
    small_icon?: FileName;
    /**
     * The size of the small icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * The base game uses 24px small icons for shortcuts.
     *
     * Only loaded if `small_icons` is not defined.
     */
    small_icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    small_icons?: IconData[];
    style?: 'default' | 'blue' | 'red' | 'green';
    /**
     * The technology that must be researched before this shortcut can be used. Once a shortcut is unlocked in one save file, it is unlocked for all future save files.
     */
    technology_to_unlock?: TechnologyID;
    /**
     * Must be enabled for the Factorio API to be able to set the toggled state on the shortcut button, see {@link LuaPlayer::set_shortcut_toggled | runtime:LuaPlayer::set_shortcut_toggled}.
     */
    toggleable?: boolean;
    /**
     * If `true`, the shortcut will not be available until its `technology_to_unlock` is researched, even if it was already researched in a different game.
     */
    unavailable_until_unlocked?: boolean;
}
/**
 * An extremely basic entity with no special functionality. Used for minable rocks. Cannot be rotated.
 */
interface SimpleEntityPrototype extends EntityWithHealthPrototype {
    animations?: AnimationVariations;
    /**
     * Whether this entity should be treated as a rock for the purpose of deconstruction and for {@link CarPrototype::immune_to_rock_impacts | prototype:CarPrototype::immune_to_rock_impacts}.
     */
    count_as_rock_for_filtered_deconstruction?: boolean;
    lower_pictures?: SpriteVariations;
    lower_render_layer?: RenderLayer;
    /**
     * Takes priority over `animations`. Only the `north` sprite is used because this entity cannot be rotated.
     */
    picture?: Sprite4Way;
    /**
     * Takes priority over `picture` and `animations`.
     */
    pictures?: SpriteVariations;
    random_animation_offset?: boolean;
    /**
     * Whether a random graphics variation is chosen when placing the entity/creating it via script/creating it via map generation. If this is `false`, the entity will use the first variation instead of a random one.
     */
    random_variation_on_create?: boolean;
    render_layer?: RenderLayer;
    /**
     * Used to determine render order for entities with the same `render_layer` in the same position. Entities with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8;
    /**
     * Loaded and drawn with all `pictures`, `picture` and `animations`. If graphics variation is larger than number of `lower_pictures` variations this layer is not drawn.
     */
    stateless_visualisation_variations?: StatelessVisualisations[];
}
/**
 * By default, this entity will be a priority target for units/turrets, who will choose to attack it even if it does not block their path. Setting {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target} to `false` will turn this off, which then makes this type equivalent to {@link SimpleEntityWithOwnerPrototype | prototype:SimpleEntityWithOwnerPrototype}.
 */
interface SimpleEntityWithForcePrototype extends SimpleEntityWithOwnerPrototype {
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
}
/**
 * Has a force, but unlike {@link SimpleEntityWithForcePrototype | prototype:SimpleEntityWithForcePrototype} it is only attacked if the biters get stuck on it (or if {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target} set to true to make the two entity types equivalent).
 *
 * Can be rotated in 4 directions. `picture` can be used to specify different graphics per direction.
 */
interface SimpleEntityWithOwnerPrototype extends EntityWithOwnerPrototype {
    animations?: AnimationVariations;
    /**
     * If the entity is not visible to a player, the player cannot select it.
     */
    force_visibility?: ForceCondition;
    /**
     * Loaded and drawn with all `pictures`, `picture` and `animations`. If graphics variation is larger than number of `lower_pictures` variations this layer is not drawn.
     */
    lower_pictures?: SpriteVariations;
    lower_render_layer?: RenderLayer;
    /**
     * Takes priority over `animations`.
     */
    picture?: Sprite4Way;
    /**
     * Takes priority over `picture` and `animations`.
     */
    pictures?: SpriteVariations;
    random_animation_offset?: boolean;
    /**
     * Whether a random graphics variation is chosen when placing the entity/creating it via script/creating it via map generation. If this is false, the entity will use the first variation instead of a random one.
     */
    random_variation_on_create?: boolean;
    render_layer?: RenderLayer;
    /**
     * Used to determine render order for entities with the same `render_layer` in the same position. Entities with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8;
    stateless_visualisation_variations?: StatelessVisualisations[];
}
/**
 * Abstract entity that has an animation.
 */
interface SmokePrototype extends EntityPrototype {
    /**
     * Smoke always moves randomly unless `movement_slow_down_factor` is 0. If `affected_by_wind` is true, the smoke will also be moved by wind.
     */
    affected_by_wind?: boolean;
    animation?: Animation;
    /**
     * Must have a collision box size of zero.
     * @example ```
    collision_box = {{0, 0}, {0, 0}}
    ```
     */
    collision_box?: BoundingBox;
    color?: Color;
    /**
     * If this is false then the smoke expires when the animation has played once.
     */
    cyclic?: boolean;
    /**
     * May not be 0 if `cyclic` is true. If `cyclic` is false then the smoke will be expire when the animation has played once, even if there would still be duration left.
     */
    duration?: uint32;
    end_scale?: double;
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_away_duration?: uint32;
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_in_duration?: uint32;
    glow_animation?: Animation;
    glow_fade_away_duration?: uint32;
    /**
     * Value between 0 and 1, with 0 being no movement.
     */
    movement_slow_down_factor?: double;
    render_layer?: RenderLayer;
    show_when_smoke_off?: boolean;
    spread_duration?: uint32;
    start_scale?: double;
}
/**
 * An entity with animation and a trigger.
 */
interface SmokeWithTriggerPrototype extends SmokePrototype {
    action?: Trigger;
    /**
     * 0 means never apply.
     */
    action_cooldown?: uint32;
    /**
     * If true, causes the smoke to move with the target entity if one is specified.
     */
    attach_to_target?: boolean;
    /**
     * If true, the smoke will immediately start fading away when the entity it is attached to is destroyed. If it was never attached to an entity in the first place, then the smoke will fade away immediately after being created.
     */
    fade_when_attachment_is_destroyed?: boolean;
    particle_count?: uint8;
    particle_distance_scale_factor?: float;
    particle_duration_variation?: uint32;
    particle_scale_factor?: Vector;
    particle_spread?: Vector;
    spread_duration_variation?: uint32;
    wave_distance?: Vector;
    wave_speed?: Vector;
}
/**
 * A {@link portable solar panel | https://wiki.factorio.com/Portable_solar_panel}.
 */
interface SolarPanelEquipmentPrototype extends EquipmentPrototype {
    /**
     * How much power should be provided.
     */
    power: Energy;
}
/**
 * A {@link solar panel | https://wiki.factorio.com/Solar_panel}.
 */
interface SolarPanelPrototype extends EntityWithOwnerPrototype {
    /**
     * Sets how this solar panel connects to the energy network. The most relevant property seems to be the output_priority.
     */
    energy_source: ElectricEnergySource;
    /**
     * Overlay has to be empty or have same number of variations as `picture`.
     */
    overlay?: SpriteVariations;
    performance_at_day?: double;
    performance_at_night?: double;
    /**
     * The picture displayed for this solar panel.
     */
    picture?: SpriteVariations;
    /**
     * The maximum amount of power this solar panel can produce.
     */
    production: Energy;
    /**
     * Surface property must have a positive {@link default value | prototype:SurfacePropertyPrototype::default_value}. When {@link SolarPanelPrototype::solar_coefficient_property | prototype:SolarPanelPrototype::solar_coefficient_property} is set to point at a different surface property than "solar-power", then {@link LuaSurface::solar_power_multiplier | runtime:LuaSurface::solar_power_multiplier} and {@link SpaceLocationPrototype::solar_power_in_space | prototype:SpaceLocationPrototype::solar_power_in_space} will be ignored as the solar panel power output will be only affected by value of this surface property set on the surface using {@link PlanetPrototype::surface_properties | prototype:PlanetPrototype::surface_properties} or {@link LuaSurface::set_property | runtime:LuaSurface::set_property}.
     */
    solar_coefficient_property?: SurfacePropertyID;
}
/**
 * Specifies a sound that can be used with {@link SoundPath | runtime:SoundPath} at runtime.
 */
interface SoundPrototype {
    advanced_volume_control?: AdvancedVolumeControl;
    aggregation?: AggregationSpecification;
    allow_random_repeat?: boolean;
    /**
     * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
     */
    audible_distance_modifier?: double;
    category?: SoundType;
    /**
     * Supported sound file formats are `.ogg` (Vorbis and Opus) and `.wav`.
     *
     * Only loaded, and mandatory if `variations` is not defined.
     */
    filename?: FileName;
    game_controller_vibration_data?: GameControllerVibrationData;
    /**
     * Must be `>= min_speed`.
     *
     * Only loaded if `variations` is not defined. Only loaded, and mandatory if `min_speed` is defined.
     */
    max_speed?: float;
    /**
     * Only loaded if `variations` is not defined.
     *
     * Only loaded if `min_volume` is defined.
     *
     * Must be `>= min_volume`.
     */
    max_volume?: float;
    /**
     * Must be `>= 1 / 64`.
     *
     * Only loaded if both `variations` and `speed` are not defined.
     */
    min_speed?: float;
    /**
     * Only loaded if `variations` and `volume` are not defined.
     *
     * Must be `>= 0`.
     */
    min_volume?: float;
    /**
     * Only loaded if `variations` is not defined.
     */
    modifiers?: SoundModifier | SoundModifier[];
    /**
     * Name of the sound. Can be used as a {@link SoundPath | runtime:SoundPath} at runtime.
     */
    name: string;
    /**
     * Only loaded if `variations` is not defined.
     */
    preload?: boolean;
    /**
     * Sounds with higher priority will replace a sound with lower priority if the maximum sounds limit is reached.
     *
     * 0 is the highest priority, 255 is the lowest priority.
     */
    priority?: uint8;
    /**
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.
     *
     * Only loaded if `variations` is not defined.
     */
    speed?: float;
    speed_smoothing_window_size?: uint32;
    type: 'sound';
    variations?: SoundDefinition | SoundDefinition[];
    /**
     * Only loaded if `variations` is not defined.
     *
     * This sets both min and max volumes.
     *
     * Must be `>= 0`.
     */
    volume?: float;
}
interface SpaceConnectionDistanceTraveledAchievementPrototype extends AchievementPrototype {
    /**
     * How far a platform must travel to gain this achievement. Repeated trips over a shorter distance do not count.
     */
    distance: uint32;
    /**
     * The achievement is unidirectional, this property controls the direction (using space connection definition).
     *
     * When false, a platform must go through {@link from | prototype:SpaceConnectionPrototype::from} location and travel in {@link to | prototype:SpaceConnectionPrototype::to} direction. When true, a platform must go through `to` location and travel in `from` direction.
     */
    reversed: boolean;
    tracked_connection: SpaceConnectionID;
}
interface SpaceConnectionPrototype extends Prototype {
    asteroid_spawn_definitions?: SpaceConnectionAsteroidSpawnDefinition[];
    from: SpaceLocationID;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * Cannot be 0.
     */
    length?: uint32;
    to: SpaceLocationID;
}
/**
 * A space location, such as a planet.
 */
interface SpaceLocationPrototype extends Prototype {
    asteroid_spawn_definitions?: SpaceLocationAsteroidSpawnDefinition[];
    /**
     * If greater than 0, `asteroid_spawn_definitions` will be used on space connections of this location, interpolated based on distance. The number specifies the percentage of the route where the location stops spawning its asteroids.
     */
    asteroid_spawn_influence?: double;
    auto_save_on_first_trip?: boolean;
    /**
     * Distance from the location's parent body in map coordinates.
     */
    distance: double;
    /**
     * If `false`, an orbital ring will not be drawn for this location.
     */
    draw_orbit?: boolean;
    /**
     * When set to true, it means that this connection offers fly condition rather than wait condition at the destination
     */
    fly_condition?: boolean;
    /**
     * A value which modifies platform speed; is subtracted when traveling from this location and added when traveling to this location.
     */
    gravity_pull?: double;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * The orientation where the location's name will be drawn.
     */
    label_orientation?: RealOrientation;
    /**
     * The apparent size of the space location in map coordinates.
     */
    magnitude?: double;
    /**
     * Angle in relation to the parent body.
     */
    orientation: RealOrientation;
    /**
     * The orientation where parked space platforms will be drawn.
     */
    parked_platforms_orientation?: RealOrientation;
    /**
     * These transitions are used for anything traveling from the surface associated with this location.
     */
    planet_procession_set?: ProcessionSet;
    /**
     * These transitions are used for any platform stopped at this location.
     */
    platform_procession_set?: ProcessionSet;
    procession_audio_catalogue?: ProcessionAudioCatalogue;
    procession_graphic_catalogue?: ProcessionGraphicCatalogue;
    solar_power_in_space?: double;
    /**
     * Path to the icon file.
     *
     * Only loaded if `starmap_icons` is not defined.
     */
    starmap_icon?: FileName;
    /**
     * The size of the starmap icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `starmap_icons` is not defined.
     */
    starmap_icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    starmap_icons?: IconData[];
}
interface SpacePlatformHubPrototype extends EntityWithOwnerPrototype {
    /**
     * Has to be 256 to make blueprints snap to (0, 0) most of the time.
     */
    build_grid_size?: 256;
    cargo_station_parameters: CargoStationParameters;
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    default_damage_taken_signal?: SignalIDConnector;
    default_speed_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Name of a {@link ContainerPrototype | prototype:ContainerPrototype}.
     */
    dump_container: EntityID;
    graphics_set?: CargoBayConnectableGraphicsSet;
    inventory_size: ItemStackIndex;
    persistent_ambient_sounds?: PersistentWorldAmbientSoundsDefinition;
    platform_repair_speed_modifier?: float;
    surface_render_parameters?: SurfaceRenderParameters;
    weight?: Weight;
}
interface SpacePlatformStarterPackPrototype extends ItemPrototype {
    create_electric_network?: boolean;
    /**
     * The quality of the items will match the quality of the starter pack.
     */
    initial_items?: ItemProductPrototype[];
    surface?: SurfaceID;
    tiles?: SpacePlatformTileDefinition[];
    trigger?: Trigger;
}
/**
 * Properties of the spectator controller.
 */
interface SpectatorControllerPrototype {
    /**
     * Must be >= 0.34375.
     */
    movement_speed: double;
    /**
     * Name of the spectator controller. Base game uses "default".
     */
    name: string;
    type: 'spectator-controller';
}
/**
 * A speech bubble. It floats in the world and can display text.
 */
interface SpeechBubblePrototype extends EntityPrototype {
    fade_in_out_ticks?: uint32;
    /**
     * Needs a style of the type "speech_bubble_style", defined inside the gui styles.
     */
    style: string;
    /**
     * Needs a style of the type "flow_style", defined inside the gui styles.
     */
    wrapper_flow_style?: string;
    y_offset?: double;
}
/**
 * Used by {@link SpiderLegSpecification | prototype:SpiderLegSpecification} for {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}, also known as {@link spidertron | https://wiki.factorio.com/Spidertron}.
 */
interface SpiderLegPrototype extends EntityWithOwnerPrototype {
    /**
     * The height of the foot from the ground when at rest.
     */
    ankle_height?: double;
    base_position_selection_distance: double;
    graphics_set?: SpiderLegGraphicsSet;
    /**
     * The flexibility of hip. Must be between 0 and 1 inclusive. 0 means the hip doesn't flex at all, and 1 means the hip can bend the entire range, from straight up to straight down. Values less than one will dampen the hip flexibility and cause the upper and lower leg parts to stretch and squish more to compensate. Does not affect movement, only graphics.
     */
    hip_flexibility?: double;
    initial_movement_speed: double;
    /**
     * The placement of the knee relative to the torso of the spider and the end of the foot when at rest. Used to calculate the shape of the leg and the length of the individual parts. Values between 0 and 1 place the knee between the torso and the leg. Values closer to 0 will place the knee closer to the torso.
     */
    knee_distance_factor: double;
    /**
     * The resting height of the knee from the ground. Used to derive leg part length and size. If set too low, this could cause the knee to invert, bending inwards underneath the spider.
     */
    knee_height: double;
    lower_leg_dying_trigger_effects?: SpiderLegTriggerEffect[];
    minimal_step_size: double;
    movement_acceleration: double;
    movement_based_position_selection_distance: double;
    /**
     * A scalar that controls the amount of influence this leg has over the position of the torso. Must be greater than 0.
     */
    stretch_force_scalar?: double;
    target_position_randomisation_distance: double;
    upper_leg_dying_trigger_effects?: SpiderLegTriggerEffect[];
    walking_sound_speed_modifier?: float;
    walking_sound_volume_modifier?: float;
}
interface SpiderUnitPrototype extends EntityWithOwnerPrototype {
    absorptions_to_join_attack?: Record<AirbornePollutantID, float>;
    ai_settings?: UnitAISettings;
    attack_parameters: AttackParameters;
    distraction_cooldown: uint32;
    dying_sound?: Sound;
    graphics_set?: SpiderTorsoGraphicsSet;
    /**
     * The height of the spider affects the shooting height and the drawing of the graphics and lights.
     */
    height: float;
    max_pursue_distance?: double;
    min_pursue_time?: uint32;
    radar_range?: uint32;
    spawning_time_modifier?: double;
    spider_engine: SpiderEngineSpecification;
    /**
     * Cannot be negative.
     */
    torso_bob_speed?: float;
    /**
     * The orientation of the torso of the spider affects the shooting direction and the drawing of the graphics and lights.
     */
    torso_rotation_speed?: float;
    /**
     * Must be less than or equal to 100.
     */
    vision_distance: double;
    /**
     * A sound the spider unit makes when it sets out to attack.
     */
    warcry?: Sound;
}
/**
 * A {@link spidertron | https://wiki.factorio.com/Spidertron}.
 */
interface SpiderVehiclePrototype extends VehiclePrototype {
    automatic_weapon_cycling: boolean;
    /**
     * This is applied whenever the spider shoots (manual and automatic targeting), `automatic_weapon_cycling` is true and the next gun in line (which is then selected) has ammo. When all of the above is the case, the chain_shooting_cooldown_modifier is a multiplier on the remaining shooting cooldown: `cooldown = (remaining_cooldown × chain_shooting_cooldown_modifier)`.
     *
     * chain_shooting_cooldown_modifier is intended to be in the range of 0 to 1. This means that setting chain_shooting_cooldown_modifier to 0 reduces the remaining shooting cooldown to 0 while a chain_shooting_cooldown_modifier of 1 does not affect the remaining shooting cooldown at all.
     */
    chain_shooting_cooldown_modifier: float;
    energy_source: BurnerEnergySource | VoidEnergySource;
    graphics_set?: SpiderVehicleGraphicsSet;
    /**
     * The guns this spider vehicle uses.
     */
    guns?: ItemID[];
    /**
     * The height of the spider affects the shooting height and the drawing of the graphics and lights.
     */
    height: float;
    inventory_size: ItemStackIndex;
    movement_energy_consumption: Energy;
    spider_engine: SpiderEngineSpecification;
    /**
     * Cannot be negative.
     */
    torso_bob_speed?: float;
    /**
     * The orientation of the torso of the spider affects the shooting direction and the drawing of the graphics and lights.
     */
    torso_rotation_speed?: float;
    /**
     * If set to 0 then the spider will not have a Logistics tab.
     */
    trash_inventory_size?: ItemStackIndex;
}
/**
 * The {@link spidertron remote | https://wiki.factorio.com/Spidertron_remote}. This remote can only be used for entities of type {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpidertronRemotePrototype extends SelectionToolPrototype {
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 1
    ```
     */
    stack_size: 1;
}
/**
 * A {@link splitter | https://wiki.factorio.com/Splitter}.
 */
interface SplitterPrototype extends TransportBeltConnectablePrototype {
    frozen_patch?: Sprite4Way;
    /**
     * The name of the {@link TransportBeltPrototype | prototype:TransportBeltPrototype} which is used for the sound of the underlying belt.
     */
    related_transport_belt?: EntityID;
    structure?: Animation4Way;
    structure_animation_movement_cooldown?: uint32;
    structure_animation_speed_coefficient?: double;
    /**
     * Drawn 1 tile north of `structure` when the splitter is facing east or west.
     */
    structure_patch?: Animation4Way;
}
/**
 * Specifies an image that can be used with {@link SpritePath | runtime:SpritePath} at runtime.
 * @example ```
{
  type = "sprite"
  name = "accumulator-sprite",
  filename = "__base__/graphics/entity/basic-accumulator/basic-accumulator.png",
  priority = "extra-high",
  width = 124,
  height = 103,
  shift = {0.7, -0.2}
}
```
 */
interface SpritePrototype {
    /**
     * Only loaded if `layers` is not defined.
     *
     * If `true`, the sprite may be downsampled to half its size on load even when 'Sprite quality' graphics setting is set to 'High'. Whether downsampling happens depends on detected hardware and other graphics settings.
     */
    allow_forced_downscale?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_runtime_tint?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_special_effect?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    blend_mode?: BlendMode;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4x4 grid.
     */
    dice?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     */
    dice_x?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     */
    dice_y?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
     *
     * Draws first as a normal sprite, then again as a light layer. See {@link https://forums.factorio.com/91682 | https://forums.factorio.com/91682}.
     */
    draw_as_glow?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     */
    draw_as_light?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     */
    draw_as_shadow?: boolean;
    /**
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName;
    /**
     * Only loaded if `layers` is not defined.
     */
    flags?: SpriteFlags;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Unused.
     */
    generate_sdf?: boolean;
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
     *
     * Height of the picture in pixels, from 0-4096.
     */
    height?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     */
    invert_colors?: boolean;
    /**
     * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties besides `name` and `type` are ignored.
     */
    layers?: Sprite[];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error. Modders can ignore this property.
     */
    load_in_minimal_mode?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     */
    mipmap_count?: uint8;
    /**
     * Name of the sprite. Can be used as a {@link SpritePath | runtime:SpritePath} at runtime.
     */
    name: string;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     */
    position?: [
        SpriteSizeType,
        SpriteSizeType
    ];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Whether alpha should be pre-multiplied.
     */
    premul_alpha?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     */
    priority?: SpritePriority;
    /**
     * Only loaded if `layers` is not defined.
     */
    rotate_shift?: boolean;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     */
    scale?: double;
    /**
     * Only loaded if `layers` is not defined.
     *
     * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector;
    /**
     * Only loaded if `layers` is not defined.
     *
     * The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-4096.
     */
    size?: SpriteSizeType | [
        SpriteSizeType,
        SpriteSizeType
    ];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Provides hint to sprite atlas system, so it can try to put sprites that are intended to be used at the same locations to the same sprite atlas.
     */
    surface?: SpriteUsageSurfaceHint;
    /**
     * Only loaded if `layers` is not defined.
     */
    tint?: Color;
    /**
     * Only loaded if `layers` is not defined.
     */
    tint_as_overlay?: boolean;
    type: 'sprite';
    /**
     * Only loaded if `layers` is not defined.
     *
     * Provides hint to sprite atlas system, so it can pack sprites that are related to each other to the same sprite atlas.
     */
    usage?: SpriteUsageHint;
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.
     *
     * Width of the picture in pixels, from 0-4096.
     */
    width?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType;
}
/**
 * Entity that sticks to another entity, and damages/slows it. Stickers can only be attached to {@link UnitPrototype | prototype:UnitPrototype}, {@link CharacterPrototype | prototype:CharacterPrototype}, {@link CarPrototype | prototype:CarPrototype} and {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface StickerPrototype extends EntityPrototype {
    animation?: Animation;
    /**
     * Interval between application of `damage_per_tick`, in ticks.
     */
    damage_interval?: uint32;
    /**
     * Applied every `damage_interval` ticks, so may not necessarily be "per tick".
     */
    damage_per_tick?: DamageParameters;
    /**
     * Must be > 0.
     */
    duration_in_ticks: uint32;
    fire_spread_cooldown?: uint8;
    fire_spread_radius?: float;
    force_visibility?: ForceCondition;
    /**
     * If true, causes the target entity to become "grounded", disabling flight. This only applies to Character entities wearing mech armor.
     */
    ground_target?: boolean;
    /**
     * The `hidden` property of stickers is hardcoded to `true`.
     */
    hidden?: boolean;
    /**
     * The `hidden_in_factoriopedia` property of stickers is hardcoded to `true`.
     */
    hidden_in_factoriopedia?: boolean;
    render_layer?: RenderLayer;
    /**
     * Using this property marks the sticker as a "selection sticker", meaning that the selection box will be rendered around the entity when the sticker is on it.
     */
    selection_box_type?: CursorBoxType;
    single_particle?: boolean;
    /**
     * If this is given, this sticker is considered a "fire sticker" for some functions, such as {@link BaseAttackParameters::fire_penalty | prototype:BaseAttackParameters::fire_penalty} and {@link EntityPrototypeFlags::not-flammable | prototype:EntityPrototypeFlags::not_flammable}.
     */
    spread_fire_entity?: EntityID;
    stickers_per_square_meter?: float;
    /**
     * The maximum movement speed for the target.
     *
     * Negative values are ignored.
     */
    target_movement_max?: float;
    /**
     * The maximum movement speed for the target when the sticker is attached. It linearly changes over time to reach `target_movement_max_to`.
     *
     * Negative values are ignored.
     */
    target_movement_max_from?: float;
    /**
     * The maximum movement speed for the target when the sticker expires. It linearly changes over time starting from `target_movement_max_from`.
     *
     * Negative values are ignored.
     */
    target_movement_max_to?: float;
    /**
     * Less than 1 to reduce movement speed, more than 1 to increase it.
     */
    target_movement_modifier?: float;
    /**
     * The modifier value when the sticker is attached. It linearly changes over time to reach `target_movement_modifier_to`.
     */
    target_movement_modifier_from?: float;
    /**
     * The modifier value when the sticker expires. It linearly changes over time starting from `target_movement_modifier_from`.
     */
    target_movement_modifier_to?: float;
    /**
     * Effects (with cooldowns) to trigger every tick.
     */
    update_effects?: TriggerEffectWithCooldown[];
    use_damage_substitute?: boolean;
    vehicle_friction_modifier?: float;
    /**
     * Works similarly to `target_movement_modifier_from`.
     */
    vehicle_friction_modifier_from?: float;
    /**
     * Works similarly to `target_movement_modifier_to`.
     */
    vehicle_friction_modifier_to?: float;
    /**
     * The maximum movement speed for vehicles.
     *
     * Negative values are ignored.
     */
    vehicle_speed_max?: float;
    /**
     * The maximum movement speed for vehicles when the sticker is attached. It linearly changes over time to reach `vehicle_speed_max_to`.
     *
     * Negative values are ignored.
     */
    vehicle_speed_max_from?: float;
    /**
     * The maximum movement speed for vehicles when the sticker expires. It linearly changes over time starting from `vehicle_speed_max_from`.
     *
     * Negative values are ignored.
     */
    vehicle_speed_max_to?: float;
    /**
     * Less than 1 to reduce vehicle speed, more than 1 to increase it.
     */
    vehicle_speed_modifier?: float;
    /**
     * Works similarly to `target_movement_modifier_from`.
     */
    vehicle_speed_modifier_from?: float;
    /**
     * Works similarly to `target_movement_modifier_to`.
     */
    vehicle_speed_modifier_to?: float;
}
/**
 * A {@link storage tank | https://wiki.factorio.com/Storage_tank}.
 */
interface StorageTankPrototype extends EntityWithOwnerPrototype {
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    circuit_wire_max_distance?: double;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * Must be positive.
     *
     * Used for determining the x position inside the `flow_sprite` when drawing the storage tank. Does not affect gameplay.
     *
     * The x position of the sprite will be `((game.tick % flow_length_in_ticks) ÷ flow_length_in_ticks) × (flow_sprite.width - 32)`. This means, that over `flow_length_in_ticks` ticks, the part of the `flow_sprite` that is drawn in-game is incrementally moved from most-left to most-right inside the actual sprite, that part always has a width of 32px. After `flow_length_in_ticks`, the part of the `flow_sprite` that is drawn will start from the left again.
     */
    flow_length_in_ticks: uint32;
    fluid_box: FluidBox;
    pictures?: StorageTankPictures;
    /**
     * Whether the "alt-mode icon" should be drawn at all.
     */
    show_fluid_icon?: boolean;
    two_direction_only?: boolean;
    /**
     * The location of the window showing the contents. Note that for `window_background` the width and height are determined by the sprite and window_bounding_box only determines the drawing location. For `fluid_background` the width is determined by the sprite and the height and drawing location are determined by window_bounding_box.
     */
    window_bounding_box: BoundingBox;
}
/**
 * A straight rail.
 */
interface StraightRailPrototype extends RailPrototype {
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of straight rail is hardcoded to `{{-0.7, -0.99}, {0.7, 0.99}}`.
     */
    collision_box?: BoundingBox;
}
interface SurfacePropertyPrototype extends Prototype {
    default_value: double;
    is_time?: boolean;
    /**
     * The locale key of the unit of the property. In-game, the locale is provided the `__1__` parameter, which is the value of the property.
     */
    localised_unit_key?: string;
}
interface SurfacePrototype extends Prototype {
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    surface_properties?: LuaTable<SurfacePropertyID, double>;
}
/**
 * A {@link technology | https://wiki.factorio.com/Technologies}.
 * @example ```
{
  type = "technology",
  name = "steel-processing",
  icon_size = 256,
  icon = "__base__/graphics/technology/steel-processing.png",
  effects =
  {
    {
      type = "unlock-recipe",
      recipe = "steel-plate"
    },
    {
      type = "unlock-recipe",
      recipe = "steel-chest"
    }
  },
  unit =
  {
    count = 50,
    ingredients = {{"automation-science-pack", 1}},
    time = 5
  },
  order = "c-a"
}
```
 */
interface TechnologyPrototype extends Prototype {
    allows_productivity?: boolean;
    /**
     * List of effects of the technology (applied when the technology is researched).
     * @example ```
    {
      {
        type  = "unlock-recipe",
        recipe = "land-mine"
      }
    }
    ```
     */
    effects?: Modifier[];
    enabled?: boolean;
    /**
     * Whether the technology should be shown in the technology tree GUI when "Show only essential technologies" is enabled.
     */
    essential?: boolean;
    /**
     * Path to the icon file.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * The base game uses 256px icons for technologies.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    /**
     * Controls whether the technology cost ignores the tech cost multiplier set in the {@link DifficultySettings | runtime:DifficultySettings}. E.g. `4` for the default expensive difficulty.
     */
    ignore_tech_cost_multiplier?: boolean;
    /**
     * `"infinite"` for infinite technologies, otherwise `uint32`.
     *
     * Defaults to the same level as the technology, which is `0` for non-upgrades, and the level of the upgrade for upgrades.
     */
    max_level?: uint32 | 'infinite';
    /**
     * If this name ends with `-<number>`, that number is ignored for localization purposes. E.g. if the name is `technology-3`, the game looks for the `technology-name.technology` localization. The technology tree will also show the number on the technology icon.
     */
    name: string;
    /**
     * List of technologies needed to be researched before this one can be researched.
     * @example ```
    prerequisites = {"explosives", "military-2"}
    ```
     */
    prerequisites?: TechnologyID[];
    /**
     * Mandatory if `unit` is not defined.
     */
    research_trigger?: TechnologyTrigger;
    /**
     * Can be used to enable or disable showing levels info in technology slot.
     */
    show_levels_info?: boolean;
    /**
     * Determines the cost in items and time of the technology.
     *
     * Mandatory if `research_trigger` is not defined.
     */
    unit?: TechnologyUnit;
    /**
     * When set to true, and the technology contains several levels, only the relevant one is displayed in the technology screen.
     * @example ```
    {
      type = "technology",
      name = "physical-projectile-damage-2",
      [...]
      upgrade = true
    }
    ```
     */
    upgrade?: boolean;
    /**
     * Controls whether the technology is shown in the tech GUI when it is not `enabled`.
     */
    visible_when_disabled?: boolean;
}
interface TemporaryContainerPrototype extends ContainerPrototype {
    alert_after_time?: uint32;
    destroy_on_empty?: boolean;
    time_to_live?: uint32;
}
interface ThrusterPrototype extends EntityWithOwnerPrototype {
    fuel_fluid_box: FluidBox;
    graphics_set?: ThrusterGraphicsSet;
    /**
     * `max_performance.fluid_volume` must not be smaller than `min_performance.fluid_volume`.
     */
    max_performance: ThrusterPerformancePoint;
    min_performance: ThrusterPerformancePoint;
    oxidizer_fluid_box: FluidBox;
    plumes?: PlumesSpecification;
}
/**
 * Used to define the parameters for tile shaders.
 */
interface TileEffectDefinition {
    /**
     * Name of the tile-effect.
     */
    name: string;
    /**
     * Only loaded, and mandatory if `shader` is `"puddle"`.
     */
    puddle?: PuddleTileEffectParameters;
    shader: 'water' | 'space' | 'puddle';
    /**
     * Only loaded, and mandatory if `shader` is `"space"`.
     */
    space?: SpaceTileEffectParameters;
    type: 'tile-effect';
    /**
     * Only loaded, and mandatory if `shader` is `"water"`.
     */
    water?: WaterTileEffectParameters;
}
/**
 * The entity used for tile ghosts.
 * @example ```
{
  type = "tile-ghost",
  name = "tile-ghost",
  flags = {"not-on-map"},
  minable = { mining_time = 0, results={}},
  collision_box = {{-0.5, -0.5}, {0.5, 0.5}},
  selection_priority = 45
}
```
 */
interface TileGhostPrototype extends EntityPrototype {
}
/**
 * A {@link tile | https://wiki.factorio.com/Tile}.
 */
interface TilePrototype extends Prototype {
    absorptions_per_second?: Record<AirbornePollutantID, double>;
    /**
     * Array of tile names that are allowed next to this one.
     */
    allowed_neighbors?: TileID[];
    allows_being_covered?: boolean;
    ambient_sounds?: WorldAmbientSoundDefinition | WorldAmbientSoundDefinition[];
    ambient_sounds_group?: TileID;
    autoplace?: AutoplaceSpecification;
    bound_decoratives?: DecorativeID | DecorativeID[];
    /**
     * The build animation used when this tile is built on a space platform.
     */
    build_animations?: Animation4Way;
    build_animations_background?: Animation4Way;
    /**
     * If this is loaded as one Sound, it is loaded as the "small" build sound.
     */
    build_sound?: Sound | TileBuildSound;
    /**
     * When the build_animations frame reaches this point the tile is built.
     *
     * Mandatory if `build_animations` is defined.
     */
    built_animation_frame?: uint32;
    can_be_part_of_blueprint?: boolean;
    /**
     * If set to true, the game will check for collisions with entities before building or mining the tile. If entities are in the way it is not possible to mine/build the tile.
     */
    check_collision_with_entities?: boolean;
    collision_mask: CollisionMaskConnector;
    decorative_removal_probability?: float;
    default_cover_tile?: TileID;
    /**
     * The effect/trigger that runs when an item is destroyed by being dropped on this tile.
     *
     * If the item defines {@link its own trigger | prototype:ItemPrototype::destroyed_by_dropping_trigger} it will override this.
     *
     * If this is defined, `destroys_dropped_items` must be `true`.
     */
    default_destroyed_dropped_item_trigger?: Trigger;
    /**
     * If items dropped on this tile are destroyed.
     */
    destroys_dropped_items?: boolean;
    driving_sound?: Sound;
    /**
     * Triggers when a foundation tile is destroyed by an asteroid.
     */
    dying_explosion?: ExplosionDefinition | ExplosionDefinition[];
    effect?: TileEffectDefinitionID;
    effect_color?: Color;
    /**
     * Used by the {@link pollution | https://wiki.factorio.com/Pollution} shader.
     */
    effect_color_secondary?: Color;
    effect_is_opaque?: boolean;
    fluid?: FluidID;
    frozen_variant?: TileID;
    /**
     * Path to the icon file. If this and `icons` is not set, the `material_background` in `variants` is used as the icon.
     *
     * Only loaded if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array. If this and `icon` is not set, the `material_background` in `variants` is used as the icon.
     */
    icons?: IconData[];
    is_foundation?: boolean;
    landing_steps_sound?: Sound;
    /**
     * Specifies transition drawing priority.
     */
    layer: uint8;
    layer_group?: TileRenderLayer;
    /**
     * For surfaces that use {@link fog effect | prototype:SurfaceRenderParameters::fog} of type `gleba`, this property determines whether given tile should contribute to fog intensity on a chunk or not.
     */
    lowland_fog?: boolean;
    map_color: Color;
    /**
     * Must be equal to or greater than 0.
     */
    max_health?: float;
    /**
     * If you want the tile to not be mineable, don't specify the minable property. Only non-mineable tiles become hidden tiles when placing mineable tiles on top of them.
     */
    minable?: MinableProperties;
    mined_sound?: Sound;
    /**
     * Whether the tile needs tile correction logic applied when it's generated in the world, to prevent graphical artifacts. The tile correction logic disallows 1-wide stripes of the tile, see {@link Friday Facts #346 | https://factorio.com/blog/post/fff-346}.
     */
    needs_correction?: boolean;
    next_direction?: TileID;
    particle_tints?: TileBasedParticleTints;
    placeable_by?: ItemToPlace | ItemToPlace[];
    scorch_mark_color?: Color;
    searchable?: boolean;
    sprite_usage_surface?: SpriteUsageSurfaceHint;
    thawed_variant?: TileID;
    tint?: Color;
    transition_merges_with_tile?: TileID;
    transition_overlay_layer_offset?: int8;
    /**
     * Extra transitions.
     */
    transitions?: TileTransitionsToTiles[];
    transitions_between_transitions?: TileTransitionsBetweenTransitions[];
    /**
     * Called by {@link InvokeTileEffectTriggerEffectItem | prototype:InvokeTileEffectTriggerEffectItem}.
     */
    trigger_effect?: TriggerEffect;
    /**
     * Graphics for this tile.
     */
    variants: TileTransitionsVariants;
    vehicle_friction_modifier?: double;
    walking_sound?: Sound;
    walking_speed_modifier?: double;
    weight?: Weight;
}
/**
 * A tips and tricks entry.
 */
interface TipsAndTricksItem extends PrototypeBase {
    /**
     * Name of a {@link TipsAndTricksItemCategory | prototype:TipsAndTricksItemCategory}, used for the sorting of this tips and tricks entry. Tips and trick entries are sorted first by category and then by their `order` within that category.
     */
    category?: string;
    /**
     * An array of names of other tips and tricks items. This tips and tricks entry is only shown to the player once they have marked all dependencies as read.
     */
    dependencies?: string[];
    /**
     * Path to the icon file.
     *
     * Only loaded if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * Can't be an empty array.
     */
    icons?: IconData[];
    image?: FileName;
    /**
     * The tips and tricks entry is indented by `indent`×6 spaces.
     */
    indent?: uint8;
    /**
     * Whether the tip title on the left in the tips and tricks GUI should use the "title_tip_item" style (semi bold font).
     */
    is_title?: boolean;
    /**
     * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.
     */
    order?: Order;
    player_input_method_filter?: PlayerInputMethodFilter;
    simulation?: SimulationDefinition;
    /**
     * Condition for never showing the tip notification to the player.
     */
    skip_trigger?: TipTrigger;
    starting_status?: TipStatus;
    /**
     * String to add in front of the tips and trick entries name. Can be anything, the base game tends to use {@link rich text | https://wiki.factorio.com/Rich_text} tags for items, e.g. `[item=wooden-chest]` here.
     */
    tag?: string;
    /**
     * Condition for when the tip notification should be shown to the player.
     */
    trigger?: TipTrigger;
    /**
     * Name of a {@link TutorialDefinition | prototype:TutorialDefinition}.
     */
    tutorial?: string;
}
/**
 * A {@link TipsAndTricksItem | prototype:TipsAndTricksItem} category, used for sorting of tips and tricks entries: Tips and trick entries are sorted first by category and then by their order within that category.
 */
interface TipsAndTricksItemCategory {
    name: string;
    /**
     * Tips and trick categories are sorted by `order`, and then the tips and tips entries are sorted by their own order within those categories.
     */
    order: Order;
    type: 'tips-and-tricks-item-category';
}
/**
 * Items with a "durability". Used for {@link science packs | https://wiki.factorio.com/Science_pack}.
 */
interface ToolPrototype extends ItemPrototype {
    /**
     * The durability of this tool. Must be positive. Mandatory if `infinite` is false. Ignored if <code>infinite</code> is true.
     */
    durability?: double;
    /**
     * May not be longer than 200 characters.
     */
    durability_description_key?: string;
    /**
     * May not be longer than 200 characters.
     *
     * In-game, the game provides the locale with three {@link parameters | https://wiki.factorio.com/Tutorial:Localisation#Localising_with_parameters}:
     *
     * `__1__`: remaining durability
     *
     * `__2__`: total durability
     *
     * `__3__`: durability as a percentage
     *
     * So when a locale key that has the following translation
     *
     * `Remaining durability is __1__ out of __2__ which is __3__ %`
     *
     * is applied to a tool with 2 remaining durability out of 8 it will be displayed as
     *
     * `Remaining durability is 2 out of 8 which is 25 %`
     */
    durability_description_value?: string;
    /**
     * Whether this tool has infinite durability. If this is false, `durability` must be specified.
     */
    infinite?: boolean;
}
/**
 * This prototype is used for receiving an achievement when the player has a specified train path length.
 */
interface TrainPathAchievementPrototype extends AchievementPrototype {
    /**
     * The achievement will trigger if a train path is longer than this.
     * @example ```
    amount = 1000
    ```
     */
    minimum_distance: double;
}
/**
 * A {@link train stop | https://wiki.factorio.com/Train_stop}.
 */
interface TrainStopPrototype extends EntityWithOwnerPrototype {
    animation_ticks_per_frame: uint32;
    animations?: Animation4Way;
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2;
    chart_name?: boolean;
    circuit_connector?: [
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition,
        CircuitConnectorDefinition
    ];
    circuit_wire_max_distance?: double;
    color?: Color;
    default_priority_signal?: SignalIDConnector;
    default_train_stopped_signal?: SignalIDConnector;
    default_trains_count_signal?: SignalIDConnector;
    default_trains_limit_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    drawing_boxes?: TrainStopDrawingBoxes;
    light1?: TrainStopLight;
    light2?: TrainStopLight;
    rail_overlay_animations?: Animation4Way;
    top_animations?: Animation4Way;
}
/**
 * Abstract class that anything that is a belt or can connect to belts uses.
 */
interface TransportBeltConnectablePrototype extends EntityWithOwnerPrototype {
    animation_speed_coefficient?: double;
    belt_animation_set?: TransportBeltAnimationSet;
    /**
     * Transport belt connectable entities must have {@link collision_box | prototype:EntityPrototype::collision_box} of an appropriate minimal size, they should occupy more than half of every tile the entity covers.
     * @example ```
    collision_box = {{-0.4, -0.4}, {0.4, 0.4}}
    ```
     */
    collision_box?: BoundingBox;
    /**
     * Transport belt connectable entities cannot have the `"building-direction-8-way"` flag.
     */
    flags?: EntityPrototypeFlags;
    /**
     * The speed of the belt: `speed × 480 = x Items/second`.
     *
     * The raw value is expressed as the number of tiles traveled by each item on the belt per tick, relative to the belt's maximum density - e.g. `x items/second ÷ (4 items/lane × 2 lanes/belt × 60 ticks/second) = <speed> belts/tick` where a "belt" is the size of one tile. See {@link Transport_belts/Physics | https://wiki.factorio.com/Transport_belts/Physics} for more details.
     *
     * Must be a positive non-infinite number. The number is a fixed point number with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625`. In the simple case of a non-curved belt, the rate is multiples of `1.875` items/s, even though the entity tooltip may show a different rate.
     */
    speed: double;
}
/**
 * A {@link transport belt | https://wiki.factorio.com/Transport_belt}.
 */
interface TransportBeltPrototype extends TransportBeltConnectablePrototype {
    belt_animation_set?: TransportBeltAnimationSetWithCorners;
    /**
     * Set of 7 {@link circuit connector definitions | prototype:CircuitConnectorDefinition} in order: X, H, V, SE, SW, NE and NW.
     */
    circuit_connector?: CircuitConnectorDefinition[];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    connector_frame_sprites?: TransportBeltConnectorFrame;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    /**
     * The name of the {@link UndergroundBeltPrototype | prototype:UndergroundBeltPrototype} which is used in quick-replace fashion when the smart belt dragging behavior is triggered.
     */
    related_underground_belt?: EntityID;
}
/**
 * A {@link tree | https://wiki.factorio.com/Tree}.
 */
interface TreePrototype extends EntityWithHealthPrototype {
    /**
     * Mandatory if `variations` is defined.
     */
    colors?: Color[];
    darkness_of_burnt_tree?: float;
    /**
     * The amount of health automatically regenerated. Trees will regenerate every 60 ticks with `healing_per_tick × 60`.
     * @example ```
    healing_per_tick = 0.01
    ```
     */
    healing_per_tick?: float;
    /**
     * Mandatory if `variations` is not defined.
     */
    pictures?: SpriteVariations;
    stateless_visualisation_variations?: StatelessVisualisations[];
    variation_weights?: float[];
    /**
     * If defined, it can't be empty.
     */
    variations?: TreeVariation[];
}
/**
 * The base game always internally defines a "common" trigger target type. See {@link Design discussion: Trigger target type | https://forums.factorio.com/71657}.
 */
interface TriggerTargetType {
    name: string;
    type: 'trigger-target-type';
}
/**
 * Smoke, but it's not an entity for optimization purposes.
 */
interface TrivialSmokePrototype extends Prototype {
    /**
     * Smoke always moves randomly unless `movement_slow_down_factor` is 0. If `affected_by_wind` is true, the smoke will also be moved by wind.
     */
    affected_by_wind?: boolean;
    animation: Animation;
    color?: Color;
    cyclic?: boolean;
    /**
     * Can't be 0 - the smoke will never render.
     */
    duration: uint32;
    end_scale?: float;
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_away_duration?: uint32;
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_in_duration?: uint32;
    glow_animation?: Animation;
    glow_fade_away_duration?: uint32;
    /**
     * Value between 0 and 1, with 1 being no slowdown and 0 being no movement.
     */
    movement_slow_down_factor?: double;
    render_layer?: RenderLayer;
    show_when_smoke_off?: boolean;
    spread_duration?: uint32;
    start_scale?: float;
}
/**
 * A turret that needs no extra ammunition. See the children for turrets that need some kind of ammunition.
 */
interface TurretPrototype extends EntityWithOwnerPrototype {
    alert_when_attacking?: boolean;
    allow_turning_when_starting_attack?: boolean;
    attack_from_start_frame?: boolean;
    /**
     * Requires ammo_type in attack_parameters unless this is a {@link AmmoTurretPrototype | prototype:AmmoTurretPrototype}.
     */
    attack_parameters: AttackParameters;
    attack_target_mask?: TriggerTargetMask;
    attacking_animation?: RotatedAnimation8Way;
    /**
     * Controls the speed of the attacking_animation: `1 ÷ attacking_speed = duration of the attacking_animation`
     */
    attacking_speed?: float;
    call_for_help_radius: double;
    can_retarget_while_starting_attack?: boolean;
    /**
     * Set of {@link circuit connector definitions | prototype:CircuitConnectorDefinition} for all directions used by this turret. Required amount of elements is based on other prototype values: 8 elements if building-direction-8-way flag is set, or 16 elements if building-direction-16-way flag is set, or 4 elements if turret_base_has_direction is set to true, or 1 element.
     */
    circuit_connector?: CircuitConnectorDefinition[];
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    default_speed?: float;
    default_speed_secondary?: float;
    default_speed_when_killed?: float;
    default_starting_progress_when_killed?: float;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    dying_sound?: Sound;
    ending_attack_animation?: RotatedAnimation8Way;
    /**
     * Controls the speed of the ending_attack_animation: `1 ÷ ending_attack_speed = duration of the ending_attack_animation`
     */
    ending_attack_speed?: float;
    ending_attack_speed_secondary?: float;
    ending_attack_speed_when_killed?: float;
    ending_attack_starting_progress_when_killed?: float;
    energy_glow_animation?: RotatedAnimation8Way;
    /**
     * The range of the flickering of the alpha of `energy_glow_animation`. Default is range 0.2, so animation alpha can be anywhere between 0.8 and 1.0.
     */
    energy_glow_animation_flicker_strength?: float;
    folded_animation: RotatedAnimation8Way;
    folded_animation_is_stateless?: boolean;
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
     *
     * Controls the speed of the folded_animation: `1 ÷ folded_speed = duration of the folded_animation`
     */
    folded_speed?: float;
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
     *
     * Controls the speed of the folded_animation: `1 ÷ folded_speed_secondary = duration of the folded_animation`
     */
    folded_speed_secondary?: float;
    folded_speed_when_killed?: float;
    folded_starting_progress_when_killed?: float;
    folded_state_corpse?: EntityID | EntityID[];
    folding_animation?: RotatedAnimation8Way;
    folding_sound?: Sound;
    /**
     * Controls the speed of the folding_animation: `1 ÷ folding_speed = duration of the folding_animation`
     */
    folding_speed?: float;
    folding_speed_secondary?: float;
    folding_speed_when_killed?: float;
    folding_starting_progress_when_killed?: float;
    /**
     * The intensity of light in the form of `energy_glow_animation` drawn on top of `energy_glow_animation`.
     */
    glow_light_intensity?: float;
    graphics_set: TurretGraphicsSet;
    gun_animation_render_layer?: RenderLayer;
    gun_animation_secondary_draw_order?: uint8;
    ignore_target_mask?: TriggerTargetMask;
    integration?: Sprite;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean;
    prepare_range?: double;
    prepared_alternative_animation?: RotatedAnimation8Way;
    /**
     * The chance for `prepared_alternative_animation` to be used.
     */
    prepared_alternative_chance?: float;
    prepared_alternative_sound?: Sound;
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
     *
     * Controls the speed of the prepared_alternative_animation: `1 ÷ prepared_alternative_speed = duration of the prepared_alternative_animation`
     */
    prepared_alternative_speed?: float;
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
     *
     * Controls the speed of the prepared_alternative_animation: `1 ÷ prepared_alternative_speed_secondary = duration of the prepared_alternative_animation`
     */
    prepared_alternative_speed_secondary?: float;
    prepared_alternative_speed_when_killed?: float;
    prepared_alternative_starting_progress_when_killed?: float;
    prepared_animation?: RotatedAnimation8Way;
    prepared_sound?: Sound;
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
     *
     * Controls the speed of the prepared_animation: `1 ÷ prepared_speed = duration of the prepared_animation`
     */
    prepared_speed?: float;
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.
     *
     * Controls the speed of the prepared_animation: `1 ÷ prepared_speed_secondary = duration of the prepared_animation`
     */
    prepared_speed_secondary?: float;
    prepared_speed_when_killed?: float;
    prepared_starting_progress_when_killed?: float;
    preparing_animation?: RotatedAnimation8Way;
    preparing_sound?: Sound;
    /**
     * Controls the speed of the preparing_animation: `1 ÷ preparing_speed = duration of the preparing_animation`
     */
    preparing_speed?: float;
    preparing_speed_secondary?: float;
    preparing_speed_when_killed?: float;
    preparing_starting_progress_when_killed?: float;
    random_animation_offset?: boolean;
    resource_indicator_animation?: RotatedAnimation8Way;
    rotating_sound?: InterruptibleSound;
    rotation_speed?: float;
    rotation_speed_secondary?: float;
    rotation_speed_when_killed?: float;
    rotation_starting_progress_when_killed?: float;
    shoot_in_prepare_state?: boolean;
    /**
     * Decoratives to be created when the spawner is created by the {@link map generator | https://wiki.factorio.com/Map_generator}. Placed when enemies expand if `spawn_decorations_on_expansion` is set to true.
     */
    spawn_decoration?: CreateDecorativesTriggerEffectItem[];
    /**
     * Whether `spawn_decoration` should be spawned when this turret is created through {@link enemy expansion | https://wiki.factorio.com/Enemies#Expansions}.
     */
    spawn_decorations_on_expansion?: boolean;
    special_effect?: TurretSpecialEffect;
    /**
     * When `false` the turret will enter `starting_attack` state without checking its ammo or energy levels. {@link FluidTurretPrototype | prototype:FluidTurretPrototype} forces this to `true`.
     */
    start_attacking_only_when_can_shoot?: boolean;
    starting_attack_animation?: RotatedAnimation8Way;
    starting_attack_sound?: Sound;
    /**
     * Controls the speed of the starting_attack_animation: `1 ÷ starting_attack_speed = duration of the starting_attack_animation`
     */
    starting_attack_speed?: float;
    starting_attack_speed_secondary?: float;
    starting_attack_speed_when_killed?: float;
    starting_attack_starting_progress_when_killed?: float;
    /**
     * When `true` the turret's collision box will affected by its rotation.
     */
    turret_base_has_direction?: boolean;
    unfolds_before_dying?: boolean;
}
/**
 * The definition of the tutorial to be used in the tips and tricks, see {@link TipsAndTricksItem | prototype:TipsAndTricksItem}. The actual tutorial scripting code is defined in the tutorial scenario. The scenario must be placed in the `tutorials` folder in the mod.
 */
interface TutorialDefinition extends PrototypeBase {
    /**
     * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.
     */
    order?: Order;
    /**
     * Name of the folder for this tutorial scenario in the {@link `tutorials` folder | https://wiki.factorio.com/Tutorial:Mod_structure#Subfolders}.
     */
    scenario: string;
}
/**
 * An {@link underground belt | https://wiki.factorio.com/Underground_belt}.
 */
interface UndergroundBeltPrototype extends TransportBeltConnectablePrototype {
    max_distance: uint8;
    max_distance_tint?: Color;
    max_distance_underground_remove_belts_sprite?: Sprite;
    structure?: UndergroundBeltStructure;
    underground_collision_mask?: CollisionMaskConnector;
    underground_remove_belts_sprite?: Sprite;
    underground_sprite?: Sprite;
}
/**
 * Entity that moves around and attacks players, for example {@link biters and spitters | https://wiki.factorio.com/Enemies#Creatures}.
 */
interface UnitPrototype extends EntityWithOwnerPrototype {
    absorptions_to_join_attack?: Record<AirbornePollutantID, float>;
    affected_by_tiles?: boolean;
    ai_settings?: UnitAISettings;
    /**
     * If this is true, this entities `is_military_target property` can be changed runtime (on the entity, not on the prototype itself).
     */
    allow_run_time_change_of_is_military_target?: false;
    alternative_attacking_frame_sequence?: UnitAlternativeFrameSequence;
    /**
     * Requires animation in attack_parameters. Requires ammo_type in attack_parameters.
     */
    attack_parameters: AttackParameters;
    can_open_gates?: boolean;
    /**
     * How fast the `run_animation` frames are advanced. The animations are advanced animation_speed frames per `distance_per_frame` that the unit moves.
     *
     * `frames_advanced = (distance_moved ÷ distance_per_frame) * animation_speed`
     */
    distance_per_frame: float;
    distraction_cooldown: uint32;
    /**
     * The sound file to play when entity dies.
     */
    dying_sound?: Sound;
    /**
     * If the unit is immune to movement by belts.
     */
    has_belt_immunity?: boolean;
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: true;
    light?: LightDefinition;
    max_pursue_distance?: double;
    /**
     * In ticks.
     */
    min_pursue_time?: uint32;
    move_while_shooting?: boolean;
    /**
     * Movement speed of the unit in the world, in tiles per tick. Must be equal to or greater than 0.
     */
    movement_speed: float;
    radar_range?: uint32;
    render_layer?: RenderLayer;
    rotation_speed?: float;
    run_animation: RotatedAnimation;
    /**
     * Only loaded if `walking_sound` is defined.
     */
    running_sound_animation_positions?: float[];
    spawning_time_modifier?: double;
    /**
     * Max is 100.
     *
     * Note: Setting to 50 or above can lead to undocumented behavior of individual units creating groups on their own when attacking or being attacked.
     */
    vision_distance: double;
    walking_sound?: Sound;
    /**
     * A sound the unit makes when it sets out to attack.
     */
    warcry?: Sound;
}
/**
 * An {@link upgrade planner | https://wiki.factorio.com/Upgrade_planner}.
 */
interface UpgradeItemPrototype extends SelectionToolPrototype {
    /**
     * The {@link SelectionModeData::mode | prototype:SelectionModeData::mode} is hardcoded to `"cancel-upgrade"`.
     *
     * The filters are parsed, but then ignored and forced to be empty.
     */
    alt_select: SelectionModeData;
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean;
    /**
     * If the item will draw its label when held in the cursor in place of the item count.
     */
    draw_label_for_cursor_render?: boolean;
    /**
     * The {@link SelectionModeData::mode | prototype:SelectionModeData::mode} is hardcoded to `"upgrade"`.
     *
     * The filters are parsed, but then ignored and forced to be empty.
     */
    select: SelectionModeData;
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     * @example ```
    stack_size = 1
    ```
     */
    stack_size: 1;
}
/**
 * This prototype is used for receiving an achievement when the player produces energy by entity.
 */
interface UseEntityInEnergyProductionAchievementPrototype extends AchievementPrototype {
    /**
     * This item need to be consumed before gaining the achievement.
     * @example ```
    consumed_condition = "uranium-fuel-cell"
    ```
     */
    consumed_condition?: ItemIDFilter;
    /**
     * This entity is needed to produce energy, for the player to complete the achievement.
     * @example ```
    entity = "steam-engine"
    ```
     */
    entity: EntityID;
    /**
     * This item needs to be produced before gaining the achievement.
     */
    produced_condition?: ItemIDFilter;
    /**
     * This item need to be built before gaining the achievement.
     * @example ```
    required_to_build = "nuclear-reactor"
    ```
     */
    required_to_build?: EntityID;
}
/**
 * This prototype is used for receiving an achievement when the player uses a capsule.
 */
interface UseItemAchievementPrototype extends AchievementPrototype {
    /**
     * How many capsules need to be used.
     */
    amount?: uint32;
    limit_quality: QualityID;
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean;
    /**
     * This will trigger the achievement, if this capsule is used.
     * @example ```
    to_use = "raw-fish"
    ```
     */
    to_use: ItemID;
}
/**
 * Constants used by the game that are not specific to certain prototypes. See {@link utility-constants.lua | https://github.com/wube/factorio-data/blob/master/core/prototypes/utility-constants.lua} for the values used by the base game.
 */
interface UtilityConstants extends PrototypeBase {
    agricultural_range_visualization_color: Color;
    artillery_range_visualization_color: Color;
    asteroid_collector_blockage_update_tile_distance: uint32;
    asteroid_collector_max_nurbs_control_point_separation: double;
    asteroid_collector_navmesh_refresh_tick_interval: uint32;
    asteroid_collector_static_head_swing_segment_count: uint32;
    asteroid_collector_static_head_swing_strength_scale: double;
    asteroid_fading_range: float;
    asteroid_position_offset_to_speed_coefficient: double;
    asteroid_spawning_offset: SimpleBoundingBox;
    asteroid_spawning_with_random_orientation_max_speed: double;
    /**
     * The base game uses more entries here that are applied via the ammo-category.lua file.
     */
    bonus_gui_ordering: BonusGuiOrdering;
    building_buildable_tint: Color;
    building_buildable_too_far_tint: Color;
    building_collision_mask: CollisionMaskConnector;
    building_ignorable_tint: Color;
    building_no_tint: Color;
    building_not_buildable_tint: Color;
    capsule_range_visualization_color: Color;
    /**
     * Layer within `ground-natural` {@link tile render layer | prototype:TileRenderLayer} group, before which terrain lightmap alpha channel is copiend into water mask. Decals, which need to be masked by water should have their {@link DecorativePrototype::tile_layer | prototype:DecorativePrototype::tile_layer} set to only slightly larger value than `capture_water_mask_at_layer`, to avoid risk of undefined behavior caused by rendering tiles into layers between `capture_water_mask_at_layer` and decal's `tile_layer`.
     */
    capture_water_mask_at_layer: uint8;
    /**
     * Chart means map and minimap.
     */
    chart: ChartUtilityConstants;
    chart_search_highlight: Color;
    checkerboard_black: Color;
    checkerboard_white: Color;
    clear_cursor_volume_modifier: float;
    clipboard_history_size: uint32;
    color_filters?: ColorFilterData[];
    count_button_size: int32;
    daytime_color_lookup: DaytimeColorLookupTable;
    deconstruct_mark_tint: Color;
    default_alert_icon_scale: float;
    default_alert_icon_scale_by_type?: Record<string, float>;
    default_alert_icon_shift_by_type?: Record<string, Vector>;
    /**
     * The strings can be entity types or custom strings.
     */
    default_collision_masks: Record<string, CollisionMaskConnector>;
    default_enemy_force_color: Color;
    default_item_weight: Weight;
    default_other_force_color: Color;
    /**
     * The default value of {@link FluidBox::max_pipeline_extent | prototype:FluidBox::max_pipeline_extent}.
     */
    default_pipeline_extent: double;
    /**
     * Must contain arrival and departure with {@link procession_style | prototype:ProcessionPrototype::procession_style} containing 0.
     */
    default_planet_procession_set: ProcessionSet;
    /**
     * Must contain arrival and departure with {@link procession_style | prototype:ProcessionPrototype::procession_style} containing 0.
     */
    default_platform_procession_set: ProcessionSet;
    default_player_force_color: Color;
    default_scorch_mark_color: Color;
    /**
     * The strings are entity types.
     */
    default_trigger_target_mask_by_type?: Record<string, TriggerTargetMask>;
    disabled_recipe_slot_background_tint: Color;
    disabled_recipe_slot_tint: Color;
    drop_item_radius: float;
    dynamic_recipe_overload_factor: double;
    /**
     * Silently clamped to be between 0 and 0.99.
     */
    ejected_item_direction_variation: double;
    /**
     * Silently clamped to be between 0 and 1.
     */
    ejected_item_friction: double;
    /**
     * Silently clamped to be between 1 tick and 5 minutes (`5 * 60 * 60` ticks).
     */
    ejected_item_lifetime: MapTick;
    /**
     * Silently clamped to be between 0 and 1/60.
     */
    ejected_item_speed: double;
    enabled_recipe_slot_tint: Color;
    enemies_in_simulation_volume_modifier: float;
    entity_button_background_color: Color;
    entity_renderer_search_box_limits: EntityRendererSearchBoxLimits;
    environment_sounds_transition_fade_in_ticks: uint32;
    equipment_default_background_border_color: Color;
    equipment_default_background_color: Color;
    equipment_default_grabbed_background_color: Color;
    explosions_in_simulation_volume_modifier: float;
    factoriopedia_recycling_recipe_categories: RecipeCategoryID[];
    feedback_screenshot_file_name: string;
    feedback_screenshot_subfolder_name: string;
    filter_outline_color: Color;
    /**
     * Must be >= 1.
     */
    flying_text_ttl: uint32;
    forced_enabled_recipe_slot_background_tint: Color;
    freezing_temperature: double;
    frozen_color_lookup: ColorLookupTable;
    ghost_layer: CollisionLayerID;
    ghost_shader_tint: GhostTintSet;
    ghost_shaderless_tint: GhostTintSet;
    ghost_shimmer_settings: GhostShimmerConfig;
    gui_remark_color: Color;
    gui_search_match_background_color: Color;
    gui_search_match_foreground_color: Color;
    huge_platform_animation_sound_area: float;
    icon_shadow_color: Color;
    icon_shadow_inset: float;
    icon_shadow_radius: float;
    icon_shadow_sharpness: float;
    /**
     * Must be >= 1.
     */
    inserter_hand_stack_items_per_sprite: ItemCountType;
    /**
     * Must be >= 1.
     */
    inserter_hand_stack_max_sprites: ItemCountType;
    /**
     * Must be in range [1, 100].
     */
    inventory_width: uint32;
    item_ammo_magazine_left_bar_color: Color;
    item_default_random_tint_strength: Color;
    /**
     * There must be one array item with a threshold of `0`.
     */
    item_health_bar_colors: ItemHealthColorData[];
    item_outline_color: Color;
    item_outline_inset: float;
    item_outline_radius: float;
    item_outline_sharpness: float;
    item_tool_durability_bar_color: Color;
    /**
     * Radius of area where cargo pods won't land.
     */
    landing_area_clear_zone_radius: float;
    /**
     * Max radius where cargo pods will land.
     */
    landing_area_max_radius: float;
    large_area_size: float;
    large_blueprint_area_size: float;
    /**
     * Can be set to anything from range 0 to 255, but larger values will be clamped to 160. Setting it to larger values can have performance impact (growing geometrically).
     */
    light_renderer_search_distance_limit: uint8;
    lightning_attractor_collection_range_color: Color;
    lightning_attractor_protection_range_color: Color;
    logistic_gui_selected_network_highlight_tint: Color;
    logistic_gui_unselected_network_highlight_tint: Color;
    low_energy_robot_estimate_multiplier: double;
    main_menu_background_image_location: FileName;
    main_menu_background_vignette_intensity: float;
    main_menu_background_vignette_sharpness: float;
    /**
     * The strings represent the names of the simulations.
     */
    main_menu_simulations?: Record<string, SimulationDefinition>;
    manual_rail_building_reach_modifier: double;
    map_editor: MapEditorConstants;
    /**
     * Must be >= 1.
     */
    max_belt_stack_size: uint8;
    max_fluid_flow: FluidAmount;
    max_logistic_filter_count: LogisticFilterIndex;
    max_terrain_building_size: uint8;
    maximum_recipe_overload_multiplier: uint32;
    medium_area_size: float;
    medium_blueprint_area_size: float;
    minimap_slot_clicked_tint: Color;
    minimap_slot_hovered_tint: Color;
    minimum_recipe_overload_multiplier: uint32;
    missing_preview_sprite_location: FileName;
    /**
     * Must be in range [1, 100].
     */
    module_inventory_width: uint32;
    /**
     * Silently clamped to be between 0 and 1.
     */
    moving_sound_count_reduction_rate: float;
    /**
     * The table with `name = "default"` must exist and be the first member of the array.
     */
    player_colors: PlayerColorData[];
    probability_product_count_tint: Color;
    rail_planner_count_button_color: Color;
    rail_segment_colors: Color[];
    recipe_step_limit: uint32;
    remote_view_LPF_max_cutoff_frequency: float;
    remote_view_LPF_min_cutoff_frequency: float;
    rocket_lift_weight: Weight;
    script_command_console_chat_color: Color;
    /**
     * Must be in range [1, 100].
     */
    select_group_row_count: uint8;
    /**
     * Must be in range [1, 100].
     */
    select_slot_row_count: uint8;
    selected_chart_search_highlight: Color;
    server_command_console_chat_color: Color;
    show_chunk_components_collision_mask: CollisionMaskConnector;
    small_area_size: float;
    small_blueprint_area_size: float;
    space_LPF_max_cutoff_frequency: float;
    space_LPF_min_cutoff_frequency: float;
    /**
     * Variables: speed, thrust, weight, width, height
     */
    space_platform_acceleration_expression: MathExpression;
    /**
     * Determines how fast space platforms will send items in drop slots to the surface. Each item type has its own cooldown.
     */
    space_platform_dump_cooldown: uint32;
    /**
     * Delay after manual transfer until space platform sends items in drop slots to the surface. Overrides remaining space_platform_dump_cooldown in this instance.
     */
    space_platform_manual_dump_cooldown: uint32;
    space_platform_max_size: SimpleBoundingBox;
    space_platform_relative_speed_factor: double;
    space_platform_starfield_movement_vector: Vector;
    spawner_evolution_factor_health_modifier: float;
    starmap_orbit_clicked_color: Color;
    starmap_orbit_default_color: Color;
    starmap_orbit_disabled_color: Color;
    starmap_orbit_hovered_color: Color;
    /**
     * The number of ticks to show a segmented unit's health bar after fully regenerating.
     */
    time_to_show_full_health_bar: MapTick;
    /**
     * Must be >= 1.
     */
    tooltip_monitor_edge_border: int32;
    train_inactivity_wait_condition_default: uint32;
    train_on_elevated_rail_shadow_shift_multiplier: Vector;
    train_path_finding: TrainPathFinderConstants;
    train_pushed_by_player_ignores_friction: boolean;
    train_pushed_by_player_max_acceleration: double;
    train_pushed_by_player_max_speed: double;
    train_temporary_stop_wait_time: uint32;
    train_time_wait_condition_default: uint32;
    train_visualization: TrainVisualizationConstants;
    tree_leaf_distortion_distortion_far: Vector;
    tree_leaf_distortion_distortion_near: Vector;
    tree_leaf_distortion_speed_far: Vector;
    tree_leaf_distortion_speed_near: Vector;
    tree_leaf_distortion_strength_far: Vector;
    tree_leaf_distortion_strength_near: Vector;
    tree_shadow_roughness: float;
    tree_shadow_speed: float;
    turret_range_visualization_color: Color;
    underground_belt_max_distance_tint: Color;
    underground_pipe_max_distance_tint: Color;
    unit_group_max_pursue_distance: double;
    unit_group_pathfind_resolution: int8;
    /**
     * Silently clamped to be between 0 and 1.
     */
    walking_sound_count_reduction_rate: float;
    water_collision_mask: CollisionMaskConnector;
    weapons_in_simulation_volume_modifier: float;
    zero_count_value_tint: Color;
    zoom_to_world_can_use_nightvision: boolean;
    zoom_to_world_daytime_color_lookup: DaytimeColorLookupTable;
    zoom_to_world_effect_strength: float;
}
/**
 * Sounds used by the game that are not specific to certain prototypes.
 */
interface UtilitySounds extends PrototypeBase {
    achievement_unlocked: Sound;
    alert_destroyed: Sound;
    armor_insert: Sound;
    armor_remove: Sound;
    axe_fighting: Sound;
    axe_mining_ore: Sound;
    axe_mining_stone: Sound;
    build_animated_huge: Sound;
    build_animated_large: Sound;
    build_animated_medium: Sound;
    build_animated_small: Sound;
    build_blueprint_huge: Sound;
    build_blueprint_large: Sound;
    build_blueprint_medium: Sound;
    build_blueprint_small: Sound;
    build_ghost_upgrade: Sound;
    build_ghost_upgrade_cancel: Sound;
    build_huge: Sound;
    build_large: Sound;
    build_medium: Sound;
    build_small: Sound;
    cannot_build: Sound;
    clear_cursor: Sound;
    confirm: Sound;
    console_message: Sound;
    crafting_finished: Sound;
    deconstruct_huge: Sound;
    deconstruct_large: Sound;
    deconstruct_medium: Sound;
    deconstruct_robot: Sound;
    deconstruct_small: Sound;
    default_driving_sound: InterruptibleSound;
    default_landing_steps: Sound;
    default_manual_repair: Sound;
    drop_item: Sound;
    entity_settings_copied: Sound;
    entity_settings_pasted: Sound;
    game_lost: Sound;
    game_won: Sound;
    gui_click: Sound;
    inventory_click: Sound;
    inventory_move: Sound;
    item_deleted: Sound;
    item_spawned: Sound;
    list_box_click: Sound;
    metal_walking_sound: Sound;
    mining_wood: Sound;
    new_objective: Sound;
    paste_activated: Sound;
    picked_up_item: Sound;
    rail_plan_start: Sound;
    research_completed: Sound;
    rotated_huge: Sound;
    rotated_large: Sound;
    rotated_medium: Sound;
    rotated_small: Sound;
    scenario_message: Sound;
    /**
     * Only present when the Space Age mod is loaded.
     */
    segment_dying_sound?: Sound;
    smart_pipette: Sound;
    switch_gun: Sound;
    tutorial_notice: Sound;
    undo: Sound;
    wire_connect_pole: Sound;
    wire_disconnect: Sound;
    wire_pickup: Sound;
}
/**
 * Sprites used by the game that are not specific to certain prototypes.
 */
interface UtilitySprites extends PrototypeBase {
    achievement_label: Sprite;
    achievement_label_completed: Sprite;
    achievement_label_failed: Sprite;
    achievement_warning: Sprite;
    add: Sprite;
    add_white: Sprite;
    alert_arrow: Sprite;
    ammo_damage_modifier_constant?: Sprite;
    ammo_damage_modifier_icon: Sprite;
    ammo_icon: Sprite;
    and_or: Sprite;
    any_quality: Sprite;
    area_icon: Sprite;
    arrow_button: Animation;
    artillery_range_modifier_constant?: Sprite;
    artillery_range_modifier_icon: Sprite;
    asteroid_chunk_editor_icon: Sprite;
    asteroid_collector_path_blocked_icon: Sprite;
    backward_arrow: Sprite;
    backward_arrow_black: Sprite;
    bar_gray_pip: Sprite;
    battery: Sprite;
    beacon_distribution_modifier_constant?: Sprite;
    beacon_distribution_modifier_icon: Sprite;
    belt_stack_size_bonus_modifier_constant?: Sprite;
    belt_stack_size_bonus_modifier_icon: Sprite;
    bookmark: Sprite;
    brush_circle_shape: Sprite;
    brush_icon: Sprite;
    brush_square_shape: Sprite;
    buildability_collision: Sprite;
    buildability_collision_elevated: Sprite;
    buildability_elevated_collision_bottom: Sprite;
    buildability_elevated_collision_line: Sprite;
    buildability_elevated_collision_top: Sprite;
    bulk_inserter_capacity_bonus_modifier_constant?: Sprite;
    bulk_inserter_capacity_bonus_modifier_icon: Sprite;
    cable_editor_icon: Sprite;
    cargo_bay_not_connected_icon: Sprite;
    cargo_landing_pad_count_modifier_constant?: Sprite;
    cargo_landing_pad_count_modifier_icon: Sprite;
    center: Sprite;
    change_recipe: Sprite;
    change_recipe_productivity_modifier_constant?: Sprite;
    change_recipe_productivity_modifier_icon: Sprite;
    character_additional_mining_categories_modifier_constant?: Sprite;
    character_additional_mining_categories_modifier_icon: Sprite;
    character_build_distance_modifier_constant?: Sprite;
    character_build_distance_modifier_icon: Sprite;
    character_crafting_speed_modifier_constant?: Sprite;
    character_crafting_speed_modifier_icon: Sprite;
    character_health_bonus_modifier_constant?: Sprite;
    character_health_bonus_modifier_icon: Sprite;
    character_inventory_slots_bonus_modifier_constant?: Sprite;
    character_inventory_slots_bonus_modifier_icon: Sprite;
    character_item_drop_distance_modifier_constant?: Sprite;
    character_item_drop_distance_modifier_icon: Sprite;
    character_item_pickup_distance_modifier_constant?: Sprite;
    character_item_pickup_distance_modifier_icon: Sprite;
    character_logistic_requests_modifier_constant?: Sprite;
    character_logistic_requests_modifier_icon: Sprite;
    character_logistic_trash_slots_modifier_constant?: Sprite;
    character_logistic_trash_slots_modifier_icon: Sprite;
    character_loot_pickup_distance_modifier_constant?: Sprite;
    character_loot_pickup_distance_modifier_icon: Sprite;
    character_mining_speed_modifier_constant?: Sprite;
    character_mining_speed_modifier_icon: Sprite;
    character_reach_distance_modifier_constant?: Sprite;
    character_reach_distance_modifier_icon: Sprite;
    character_resource_reach_distance_modifier_constant?: Sprite;
    character_resource_reach_distance_modifier_icon: Sprite;
    character_running_speed_modifier_constant?: Sprite;
    character_running_speed_modifier_icon: Sprite;
    check_mark: Sprite;
    check_mark_dark_green: Sprite;
    check_mark_green: Sprite;
    check_mark_white: Sprite;
    circuit_network_panel: Sprite;
    cliff_deconstruction_enabled_modifier_constant?: Sprite;
    cliff_deconstruction_enabled_modifier_icon: Sprite;
    cliff_editor_icon: Sprite;
    clock: Sprite;
    clone: Sprite;
    clone_editor_icon: Sprite;
    close: Sprite;
    close_black: Sprite;
    close_fat: Sprite;
    close_map_preview: Sprite;
    clouds: Animation;
    collapse: Sprite;
    color_effect: Sprite;
    color_picker: Sprite;
    confirm_slot: Sprite;
    construction_radius_visualization: Sprite;
    controller_joycon_a: Sprite;
    controller_joycon_b: Sprite;
    controller_joycon_back: Sprite;
    controller_joycon_black_a: Sprite;
    controller_joycon_black_b: Sprite;
    controller_joycon_black_back: Sprite;
    controller_joycon_black_dpdown: Sprite;
    controller_joycon_black_dpleft: Sprite;
    controller_joycon_black_dpright: Sprite;
    controller_joycon_black_dpup: Sprite;
    controller_joycon_black_left_stick: Sprite;
    controller_joycon_black_leftshoulder: Sprite;
    controller_joycon_black_leftstick: Sprite;
    controller_joycon_black_lefttrigger: Sprite;
    controller_joycon_black_paddle1: Sprite;
    controller_joycon_black_paddle2: Sprite;
    controller_joycon_black_paddle3: Sprite;
    controller_joycon_black_paddle4: Sprite;
    controller_joycon_black_right_stick: Sprite;
    controller_joycon_black_rightshoulder: Sprite;
    controller_joycon_black_rightstick: Sprite;
    controller_joycon_black_righttrigger: Sprite;
    controller_joycon_black_start: Sprite;
    controller_joycon_black_x: Sprite;
    controller_joycon_black_y: Sprite;
    controller_joycon_dpdown: Sprite;
    controller_joycon_dpleft: Sprite;
    controller_joycon_dpright: Sprite;
    controller_joycon_dpup: Sprite;
    controller_joycon_left_stick: Sprite;
    controller_joycon_leftshoulder: Sprite;
    controller_joycon_leftstick: Sprite;
    controller_joycon_lefttrigger: Sprite;
    controller_joycon_paddle1: Sprite;
    controller_joycon_paddle2: Sprite;
    controller_joycon_paddle3: Sprite;
    controller_joycon_paddle4: Sprite;
    controller_joycon_right_stick: Sprite;
    controller_joycon_rightshoulder: Sprite;
    controller_joycon_rightstick: Sprite;
    controller_joycon_righttrigger: Sprite;
    controller_joycon_start: Sprite;
    controller_joycon_x: Sprite;
    controller_joycon_y: Sprite;
    controller_ps_a: Sprite;
    controller_ps_b: Sprite;
    controller_ps_back: Sprite;
    controller_ps_black_a: Sprite;
    controller_ps_black_b: Sprite;
    controller_ps_black_back: Sprite;
    controller_ps_black_dpdown: Sprite;
    controller_ps_black_dpleft: Sprite;
    controller_ps_black_dpright: Sprite;
    controller_ps_black_dpup: Sprite;
    controller_ps_black_left_stick: Sprite;
    controller_ps_black_leftshoulder: Sprite;
    controller_ps_black_leftstick: Sprite;
    controller_ps_black_lefttrigger: Sprite;
    controller_ps_black_right_stick: Sprite;
    controller_ps_black_rightshoulder: Sprite;
    controller_ps_black_rightstick: Sprite;
    controller_ps_black_righttrigger: Sprite;
    controller_ps_black_start: Sprite;
    controller_ps_black_x: Sprite;
    controller_ps_black_y: Sprite;
    controller_ps_dpdown: Sprite;
    controller_ps_dpleft: Sprite;
    controller_ps_dpright: Sprite;
    controller_ps_dpup: Sprite;
    controller_ps_left_stick: Sprite;
    controller_ps_leftshoulder: Sprite;
    controller_ps_leftstick: Sprite;
    controller_ps_lefttrigger: Sprite;
    controller_ps_right_stick: Sprite;
    controller_ps_rightshoulder: Sprite;
    controller_ps_rightstick: Sprite;
    controller_ps_righttrigger: Sprite;
    controller_ps_start: Sprite;
    controller_ps_x: Sprite;
    controller_ps_y: Sprite;
    controller_steamdeck_a: Sprite;
    controller_steamdeck_b: Sprite;
    controller_steamdeck_back: Sprite;
    controller_steamdeck_black_a: Sprite;
    controller_steamdeck_black_b: Sprite;
    controller_steamdeck_black_back: Sprite;
    controller_steamdeck_black_dpdown: Sprite;
    controller_steamdeck_black_dpleft: Sprite;
    controller_steamdeck_black_dpright: Sprite;
    controller_steamdeck_black_dpup: Sprite;
    controller_steamdeck_black_left_stick: Sprite;
    controller_steamdeck_black_leftshoulder: Sprite;
    controller_steamdeck_black_leftstick: Sprite;
    controller_steamdeck_black_lefttrigger: Sprite;
    controller_steamdeck_black_paddle1: Sprite;
    controller_steamdeck_black_paddle2: Sprite;
    controller_steamdeck_black_paddle3: Sprite;
    controller_steamdeck_black_paddle4: Sprite;
    controller_steamdeck_black_right_stick: Sprite;
    controller_steamdeck_black_rightshoulder: Sprite;
    controller_steamdeck_black_rightstick: Sprite;
    controller_steamdeck_black_righttrigger: Sprite;
    controller_steamdeck_black_start: Sprite;
    controller_steamdeck_black_x: Sprite;
    controller_steamdeck_black_y: Sprite;
    controller_steamdeck_dpdown: Sprite;
    controller_steamdeck_dpleft: Sprite;
    controller_steamdeck_dpright: Sprite;
    controller_steamdeck_dpup: Sprite;
    controller_steamdeck_left_stick: Sprite;
    controller_steamdeck_leftshoulder: Sprite;
    controller_steamdeck_leftstick: Sprite;
    controller_steamdeck_lefttrigger: Sprite;
    controller_steamdeck_paddle1: Sprite;
    controller_steamdeck_paddle2: Sprite;
    controller_steamdeck_paddle3: Sprite;
    controller_steamdeck_paddle4: Sprite;
    controller_steamdeck_right_stick: Sprite;
    controller_steamdeck_rightshoulder: Sprite;
    controller_steamdeck_rightstick: Sprite;
    controller_steamdeck_righttrigger: Sprite;
    controller_steamdeck_start: Sprite;
    controller_steamdeck_x: Sprite;
    controller_steamdeck_y: Sprite;
    controller_xbox_a: Sprite;
    controller_xbox_b: Sprite;
    controller_xbox_back: Sprite;
    controller_xbox_black_a: Sprite;
    controller_xbox_black_b: Sprite;
    controller_xbox_black_back: Sprite;
    controller_xbox_black_dpdown: Sprite;
    controller_xbox_black_dpleft: Sprite;
    controller_xbox_black_dpright: Sprite;
    controller_xbox_black_dpup: Sprite;
    controller_xbox_black_left_stick: Sprite;
    controller_xbox_black_leftshoulder: Sprite;
    controller_xbox_black_leftstick: Sprite;
    controller_xbox_black_lefttrigger: Sprite;
    controller_xbox_black_right_stick: Sprite;
    controller_xbox_black_rightshoulder: Sprite;
    controller_xbox_black_rightstick: Sprite;
    controller_xbox_black_righttrigger: Sprite;
    controller_xbox_black_start: Sprite;
    controller_xbox_black_x: Sprite;
    controller_xbox_black_y: Sprite;
    controller_xbox_dpdown: Sprite;
    controller_xbox_dpleft: Sprite;
    controller_xbox_dpright: Sprite;
    controller_xbox_dpup: Sprite;
    controller_xbox_left_stick: Sprite;
    controller_xbox_leftshoulder: Sprite;
    controller_xbox_leftstick: Sprite;
    controller_xbox_lefttrigger: Sprite;
    controller_xbox_right_stick: Sprite;
    controller_xbox_rightshoulder: Sprite;
    controller_xbox_rightstick: Sprite;
    controller_xbox_righttrigger: Sprite;
    controller_xbox_start: Sprite;
    controller_xbox_x: Sprite;
    controller_xbox_y: Sprite;
    copper_wire: Sprite;
    copper_wire_highlight: Sprite;
    copy: Sprite;
    covered_chunk: Sprite;
    crafting_machine_recipe_not_unlocked: Sprite;
    create_ghost_on_entity_death_modifier_constant?: Sprite;
    create_ghost_on_entity_death_modifier_icon: Sprite;
    cross_select: Sprite;
    crosshair: Sprite;
    cursor_box: CursorBoxSpecification;
    cursor_icon: Sprite;
    custom_tag_icon: Sprite;
    custom_tag_in_map_view: Sprite;
    danger_icon: Sprite;
    deconstruction_mark: Sprite;
    deconstruction_time_to_live_modifier_constant?: Sprite;
    deconstruction_time_to_live_modifier_icon: Sprite;
    decorative_editor_icon: Sprite;
    default_ammo_damage_modifier_icon: Sprite;
    default_gun_speed_modifier_icon: Sprite;
    default_turret_attack_modifier_icon: Sprite;
    destination_full_icon: Sprite;
    destroyed_icon: Sprite;
    down_arrow: Sprite;
    downloaded: Sprite;
    downloading: Sprite;
    dropdown: Sprite;
    editor_pause: Sprite;
    editor_play: Sprite;
    editor_selection: Sprite;
    editor_speed_down: Sprite;
    editor_speed_up: Sprite;
    electricity_icon: Sprite;
    electricity_icon_unplugged: Sprite;
    empty_ammo_slot: Sprite;
    empty_armor_slot: Sprite;
    empty_drop_cargo_slot: Sprite;
    empty_gun_slot: Sprite;
    empty_inserter_hand_slot: Sprite;
    empty_module_slot: Sprite;
    empty_robot_material_slot: Sprite;
    empty_robot_slot: Sprite;
    empty_trash_slot: Sprite;
    enemy_force_icon: Sprite;
    enter: Sprite;
    entity_editor_icon: Sprite;
    entity_info_dark_background: Sprite;
    equipment_collision: Sprite;
    equipment_grid: Sprite;
    equipment_grid_small: Sprite;
    equipment_slot: Sprite;
    expand: Sprite;
    expand_dots: Sprite;
    explosion_chart_visualization: Animation;
    export: Sprite;
    export_slot: Sprite;
    feedback: Sprite;
    filter_blacklist: Sprite;
    /**
     * The sprite will be drawn on top of {@link fluid turrets | prototype:FluidTurretPrototype} that are out of fluid ammunition and don't have {@link FluidTurretPrototype::out_of_ammo_alert_icon | prototype:FluidTurretPrototype::out_of_ammo_alert_icon} set.
     */
    fluid_icon: Sprite;
    fluid_indication_arrow: Sprite;
    fluid_indication_arrow_both_ways: Sprite;
    fluid_visualization_connection: Sprite;
    fluid_visualization_connection_both_ways: Sprite;
    fluid_visualization_connection_underground: Sprite;
    fluid_visualization_extent_arrow: Sprite;
    follower_robot_lifetime_modifier_constant?: Sprite;
    follower_robot_lifetime_modifier_icon: Sprite;
    force_editor_icon: Sprite;
    force_ghost_cursor: Sprite;
    force_tile_ghost_cursor: Sprite;
    forward_arrow: Sprite;
    forward_arrow_black: Sprite;
    frozen_icon: Sprite;
    fuel_icon: Sprite;
    game_stopped_visualization: Sprite;
    ghost_bar_pip: Sprite;
    ghost_cursor: Sprite;
    give_item_modifier_constant?: Sprite;
    give_item_modifier_icon: Sprite;
    go_to_arrow: Sprite;
    gps_map_icon: Sprite;
    gradient: Sprite;
    green_circle: Sprite;
    green_dot: Sprite;
    green_wire: Sprite;
    green_wire_highlight: Sprite;
    grey_placement_indicator_leg: Sprite;
    grey_rail_signal_placement_indicator: Sprite;
    grid_view: Sprite;
    gun_speed_modifier_constant?: Sprite;
    gun_speed_modifier_icon: Sprite;
    hand: Sprite;
    hand_black: Sprite;
    health_bar_green_pip: Sprite;
    health_bar_red_pip: Sprite;
    health_bar_yellow_pip: Sprite;
    heat_exchange_indication: Sprite;
    hint_arrow_down: Sprite;
    hint_arrow_left: Sprite;
    hint_arrow_right: Sprite;
    hint_arrow_up: Sprite;
    import: Sprite;
    import_slot: Sprite;
    indication_arrow: Sprite;
    indication_line: Sprite;
    inserter_stack_size_bonus_modifier_constant?: Sprite;
    inserter_stack_size_bonus_modifier_icon: Sprite;
    item_editor_icon: Sprite;
    item_to_be_delivered_symbol: Sprite;
    laboratory_productivity_modifier_constant?: Sprite;
    laboratory_productivity_modifier_icon: Sprite;
    laboratory_speed_modifier_constant?: Sprite;
    laboratory_speed_modifier_icon: Sprite;
    left_arrow: Sprite;
    light_cone: Sprite;
    light_medium: Sprite;
    light_small: Sprite;
    lightning_warning_icon: Sprite;
    line_icon: Sprite;
    list_view: Sprite;
    logistic_network_panel_black: Sprite;
    logistic_network_panel_white: Sprite;
    logistic_radius_visualization: Sprite;
    lua_snippet_tool_icon: Sprite;
    map: Sprite;
    map_exchange_string: Sprite;
    max_distance_underground_remove_belts: Sprite;
    max_failed_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
    max_failed_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
    max_successful_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite;
    max_successful_attempts_per_tick_per_construction_queue_modifier_icon: Sprite;
    maximum_following_robots_count_modifier_constant?: Sprite;
    maximum_following_robots_count_modifier_icon: Sprite;
    medium_gui_arrow: Sprite;
    mining_drill_productivity_bonus_modifier_constant?: Sprite;
    mining_drill_productivity_bonus_modifier_icon: Sprite;
    mining_with_fluid_modifier_constant?: Sprite;
    mining_with_fluid_modifier_icon: Sprite;
    missing_icon: Sprite;
    missing_mod_icon: Sprite;
    mod_category: Sprite;
    mod_dependency_arrow: Sprite;
    mod_downloads_count: Sprite;
    mod_last_updated: Sprite;
    mouse_cursor: Sprite;
    mouse_cursor_macos: Sprite;
    move_tag: Sprite;
    multiplayer_waiting_icon: Sprite;
    nature_icon: Sprite;
    navmesh_pending_icon: Animation;
    neutral_force_icon: Sprite;
    no_building_material_icon: Sprite;
    no_nature_icon: Sprite;
    no_path_icon: Sprite;
    no_platform_storage_space_icon: Sprite;
    no_roboport_storage_space_icon: Sprite;
    no_storage_space_icon: Sprite;
    none_editor_icon: Sprite;
    not_available: Sprite;
    not_available_black: Sprite;
    not_enough_construction_robots_icon: Sprite;
    not_enough_repair_packs_icon: Sprite;
    not_played_yet_dark_green: Sprite;
    not_played_yet_green: Sprite;
    nothing_modifier_constant?: Sprite;
    nothing_modifier_icon: Sprite;
    notification: Sprite;
    output_console_gradient: Sprite;
    paint_bucket_icon: Sprite;
    parametrise: Sprite;
    pause: Sprite;
    pin_arrow: Sprite;
    pin_center: Sprite;
    pipeline_disabled_icon: Sprite;
    placement_indicator_leg: Sprite;
    /**
     * Only present when the Space Age mod is loaded.
     */
    platform_entity_build_animations?: EntityBuildAnimations;
    play: Sprite;
    played_dark_green: Sprite;
    played_green: Sprite;
    player_force_icon: Sprite;
    preset: Sprite;
    pump_cannot_connect_icon: Sprite;
    questionmark: Sprite;
    rail_path_not_possible: Sprite;
    rail_planner_allow_elevated_rails_modifier_constant?: Sprite;
    rail_planner_allow_elevated_rails_modifier_icon: Sprite;
    rail_planner_indication_arrow: Sprite;
    rail_planner_indication_arrow_anchored: Sprite;
    rail_planner_indication_arrow_too_far: Sprite;
    rail_signal_placement_indicator: Sprite;
    rail_support_on_deep_oil_ocean_modifier_constant?: Sprite;
    rail_support_on_deep_oil_ocean_modifier_icon: Sprite;
    rail_support_placement_indicator: Sprite;
    reassign: Sprite;
    rebuild_mark: Sprite;
    recharge_icon: Sprite;
    recipe_arrow: Sprite;
    red_wire: Sprite;
    red_wire_highlight: Sprite;
    reference_point: Sprite;
    refresh: Sprite;
    refresh_white: Animation;
    rename_icon: Sprite;
    reset: Sprite;
    reset_white: Sprite;
    resource_editor_icon: Sprite;
    resources_depleted_icon: Sprite;
    right_arrow: Sprite;
    robot_slot: Sprite;
    scripting_editor_icon: Sprite;
    search: Sprite;
    search_icon: Sprite;
    select_icon_black: Sprite;
    select_icon_white: Sprite;
    set_bar_slot: Sprite;
    shield_bar_pip: Sprite;
    shoot_cursor_green: Sprite;
    shoot_cursor_red: Sprite;
    short_indication_line: Sprite;
    short_indication_line_green: Sprite;
    show_electric_network_in_map_view: Sprite;
    show_logistics_network_in_map_view: Sprite;
    show_pipelines_in_map_view: Sprite;
    show_player_names_in_map_view: Sprite;
    show_rail_signal_states_in_map_view: Sprite;
    show_recipe_icons_in_map_view: Sprite;
    show_tags_in_map_view: Sprite;
    show_train_station_names_in_map_view: Sprite;
    show_turret_range_in_map_view: Sprite;
    show_worker_robots_in_map_view: Sprite;
    shuffle: Sprite;
    side_menu_achievements_icon: Sprite;
    side_menu_blueprint_library_icon: Sprite;
    side_menu_bonus_icon: Sprite;
    side_menu_factoriopedia_icon: Sprite;
    side_menu_logistic_networks_icon: Sprite;
    side_menu_map_icon: Sprite;
    side_menu_menu_icon: Sprite;
    side_menu_players_icon: Sprite;
    side_menu_production_icon: Sprite;
    side_menu_space_platforms_icon: Sprite;
    side_menu_technology_icon: Sprite;
    side_menu_train_icon: Sprite;
    side_menu_tutorials_icon: Sprite;
    slot: Sprite;
    slots_view: Sprite;
    small_gui_arrow: Sprite;
    sort_by_name: Sprite;
    sort_by_time: Sprite;
    space_age_icon: Sprite;
    spawn_flag: Sprite;
    speed_down: Sprite;
    speed_up: Sprite;
    spray_icon: Sprite;
    starmap_platform_moving: Sprite;
    starmap_platform_moving_clicked: Sprite;
    starmap_platform_moving_hovered: Sprite;
    starmap_platform_stacked: Sprite;
    starmap_platform_stacked_clicked: Sprite;
    starmap_platform_stacked_hovered: Sprite;
    starmap_platform_stopped: Sprite;
    starmap_platform_stopped_clicked: Sprite;
    starmap_platform_stopped_hovered: Sprite;
    starmap_star: Sprite;
    station_name: Sprite;
    status_blue: Sprite;
    status_inactive: Sprite;
    status_not_working: Sprite;
    status_working: Sprite;
    status_yellow: Sprite;
    stop: Sprite;
    surface_editor_icon: Sprite;
    sync_mods: Sprite;
    technology_white: Sprite;
    tick_custom: Sprite;
    tick_once: Sprite;
    tick_sixty: Sprite;
    tile_editor_icon: Sprite;
    tile_ghost_cursor: Sprite;
    time_editor_icon: Sprite;
    tip_icon: Sprite;
    too_far: Sprite;
    too_far_from_roboport_icon: Sprite;
    tooltip_category_spoilable: Sprite;
    track_button: Sprite;
    track_button_white: Sprite;
    train_braking_force_bonus_modifier_constant?: Sprite;
    train_braking_force_bonus_modifier_icon: Sprite;
    train_stop_disabled_in_map_view: Sprite;
    train_stop_full_in_map_view: Sprite;
    train_stop_in_map_view: Sprite;
    train_stop_placement_indicator: Sprite;
    trash: Sprite;
    trash_white: Sprite;
    turret_attack_modifier_constant?: Sprite;
    turret_attack_modifier_icon: Sprite;
    unclaimed_cargo_icon: Sprite;
    underground_pipe_connection: Sprite;
    underground_remove_belts: Sprite;
    underground_remove_pipes: Sprite;
    unlock_circuit_network_modifier_constant?: Sprite;
    unlock_circuit_network_modifier_icon: Sprite;
    unlock_quality_modifier_constant?: Sprite;
    unlock_quality_modifier_icon: Sprite;
    unlock_recipe_modifier_constant?: Sprite;
    unlock_recipe_modifier_icon: Sprite;
    unlock_space_location_modifier_constant?: Sprite;
    unlock_space_location_modifier_icon: Sprite;
    unlock_space_platforms_modifier_constant?: Sprite;
    unlock_space_platforms_modifier_icon: Sprite;
    upgrade_blueprint: Sprite;
    upgrade_mark: Sprite;
    variations_tool_icon: Sprite;
    vehicle_logistics_modifier_constant?: Sprite;
    vehicle_logistics_modifier_icon: Sprite;
    warning: Sprite;
    warning_icon: Sprite;
    warning_white: Sprite;
    white_mask: Sprite;
    white_square: Sprite;
    white_square_icon: Sprite;
    wire_shadow: Sprite;
    worker_robot_battery_modifier_constant?: Sprite;
    worker_robot_battery_modifier_icon: Sprite;
    worker_robot_speed_modifier_constant?: Sprite;
    worker_robot_speed_modifier_icon: Sprite;
    worker_robot_storage_modifier_constant?: Sprite;
    worker_robot_storage_modifier_icon: Sprite;
}
/**
 * A passive device that provides limited control of fluid flow between pipelines.
 */
interface ValvePrototype extends EntityWithOwnerPrototype {
    animations?: Animation4Way;
    /**
     * The max flow rate through the valve per tick.
     */
    flow_rate: FluidAmount;
    /**
     * Must have at least one `"output"` {@link FluidFlowDirection | prototype:FluidFlowDirection} and at least one `input-output` {@link FluidFlowDirection | prototype:FluidFlowDirection}.
     */
    fluid_box: FluidBox;
    frozen_patch?: Sprite4Way;
    mode: ValveMode;
    /**
     * Ignored if {@link ValvePrototype::mode | prototype:ValvePrototype::mode} is `"one-way"`. Must be between `0` and `1` inclusive.
     */
    threshold?: float;
}
/**
 * Abstract base of all vehicles.
 */
interface VehiclePrototype extends EntityWithOwnerPrototype {
    /**
     * Determines whether this vehicle accepts passengers. This includes both drivers and gunners, if applicable.
     */
    allow_passengers?: boolean;
    allow_remote_driving?: boolean;
    /**
     * Must be positive. There is no functional difference between the two ways to set braking power/force.
     */
    braking_power: Energy | double;
    chunk_exploration_radius?: uint32;
    crash_trigger?: TriggerEffect;
    /**
     * Name of a {@link DeliverCategory | prototype:DeliverCategory}.
     */
    deliver_category?: string;
    /**
     * The (movement) energy used per hit point (1 hit point = 1 health damage) taken and dealt for this vehicle during collisions. The smaller the number, the more damage this vehicle and the rammed entity take during collisions: `damage = energy / energy_per_hit_point`.
     */
    energy_per_hit_point: double;
    /**
     * The name of the {@link EquipmentGridPrototype | prototype:EquipmentGridPrototype} this vehicle has.
     */
    equipment_grid?: EquipmentGridID;
    /**
     * Must be positive. There is no functional difference between the two ways to set friction force.
     */
    friction: double;
    impact_speed_to_volume_ratio?: double;
    /**
     * The sprite that represents this vehicle on the map/minimap.
     */
    minimap_representation?: Sprite;
    /**
     * The sprite that represents this vehicle on the map/minimap when it is selected.
     */
    selected_minimap_representation?: Sprite;
    stop_trigger?: TriggerEffect;
    stop_trigger_speed?: double;
    /**
     * Must be in the [0, 1] interval.
     */
    terrain_friction_modifier?: float;
    /**
     * Must be positive. Weight of the entity used for physics calculation when car hits something.
     */
    weight: double;
}
/**
 * A {@link virtual signal | https://wiki.factorio.com/Circuit_network#Virtual_signals}.
 */
interface VirtualSignalPrototype extends Prototype {
    /**
     * Path to the icon file that is used to represent this virtual signal.
     *
     * Mandatory if `icons` is not defined.
     */
    icon?: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     *
     * Only loaded if `icons` is not defined.
     */
    icon_size?: SpriteSizeType;
    /**
     * The icon that is used to represent this virtual signal. Can't be an empty array.
     */
    icons?: IconData[];
}
/**
 * A {@link wall | https://wiki.factorio.com/Wall}.
 */
interface WallPrototype extends EntityWithOwnerPrototype {
    circuit_connector?: CircuitConnectorDefinition;
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: double;
    connected_gate_visualization?: Sprite;
    default_output_signal?: SignalIDConnector;
    draw_circuit_wires?: boolean;
    draw_copper_wires?: boolean;
    pictures?: WallPictures;
    /**
     * Different walls will visually connect to each other if their merge group is the same.
     */
    visual_merge_group?: uint32;
    wall_diode_green?: Sprite4Way;
    wall_diode_green_light_bottom?: LightDefinition;
    wall_diode_green_light_left?: LightDefinition;
    wall_diode_green_light_right?: LightDefinition;
    wall_diode_green_light_top?: LightDefinition;
    wall_diode_red?: Sprite4Way;
    wall_diode_red_light_bottom?: LightDefinition;
    wall_diode_red_light_left?: LightDefinition;
    wall_diode_red_light_right?: LightDefinition;
    wall_diode_red_light_top?: LightDefinition;
}
type dataExtendType = ({
    type: 'accumulator';
} & AccumulatorPrototype) | ({
    type: 'achievement';
} & AchievementPrototype) | ({
    type: 'active-defense-equipment';
} & ActiveDefenseEquipmentPrototype) | ({
    type: 'agricultural-tower';
} & AgriculturalTowerPrototype) | ({
    type: 'airborne-pollutant';
} & AirbornePollutantPrototype) | ({
    type: 'ambient-sound';
} & AmbientSound) | ({
    type: 'ammo-category';
} & AmmoCategory) | ({
    type: 'ammo';
} & AmmoItemPrototype) | ({
    type: 'ammo-turret';
} & AmmoTurretPrototype) | ({
    type: 'animation';
} & AnimationPrototype) | ({
    type: 'arithmetic-combinator';
} & ArithmeticCombinatorPrototype) | ({
    type: 'armor';
} & ArmorPrototype) | ({
    type: 'arrow';
} & ArrowPrototype) | ({
    type: 'artillery-flare';
} & ArtilleryFlarePrototype) | ({
    type: 'artillery-projectile';
} & ArtilleryProjectilePrototype) | ({
    type: 'artillery-turret';
} & ArtilleryTurretPrototype) | ({
    type: 'artillery-wagon';
} & ArtilleryWagonPrototype) | ({
    type: 'assembling-machine';
} & AssemblingMachinePrototype) | ({
    type: 'asteroid-chunk';
} & AsteroidChunkPrototype) | ({
    type: 'asteroid-collector';
} & AsteroidCollectorPrototype) | ({
    type: 'asteroid';
} & AsteroidPrototype) | ({
    type: 'autoplace-control';
} & AutoplaceControl) | ({
    type: 'battery-equipment';
} & BatteryEquipmentPrototype) | ({
    type: 'beacon';
} & BeaconPrototype) | ({
    type: 'beam';
} & BeamPrototype) | ({
    type: 'belt-immunity-equipment';
} & BeltImmunityEquipmentPrototype) | ({
    type: 'blueprint-book';
} & BlueprintBookPrototype) | ({
    type: 'blueprint';
} & BlueprintItemPrototype) | ({
    type: 'boiler';
} & BoilerPrototype) | ({
    type: 'build-entity-achievement';
} & BuildEntityAchievementPrototype) | ({
    type: 'burner-generator';
} & BurnerGeneratorPrototype) | ({
    type: 'burner-usage';
} & BurnerUsagePrototype) | ({
    type: 'capsule';
} & CapsulePrototype) | ({
    type: 'capture-robot';
} & CaptureRobotPrototype) | ({
    type: 'car';
} & CarPrototype) | ({
    type: 'cargo-bay';
} & CargoBayPrototype) | ({
    type: 'cargo-landing-pad';
} & CargoLandingPadPrototype) | ({
    type: 'cargo-pod';
} & CargoPodPrototype) | ({
    type: 'cargo-wagon';
} & CargoWagonPrototype) | ({
    type: 'chain-active-trigger';
} & ChainActiveTriggerPrototype) | ({
    type: 'change-surface-achievement';
} & ChangedSurfaceAchievementPrototype) | ({
    type: 'character-corpse';
} & CharacterCorpsePrototype) | ({
    type: 'character';
} & CharacterPrototype) | ({
    type: 'cliff';
} & CliffPrototype) | ({
    type: 'collision-layer';
} & CollisionLayerPrototype) | ({
    type: 'combat-robot-count-achievement';
} & CombatRobotCountAchievementPrototype) | ({
    type: 'combat-robot';
} & CombatRobotPrototype) | ({
    type: 'complete-objective-achievement';
} & CompleteObjectiveAchievementPrototype) | ({
    type: 'constant-combinator';
} & ConstantCombinatorPrototype) | ({
    type: 'construct-with-robots-achievement';
} & ConstructWithRobotsAchievementPrototype) | ({
    type: 'construction-robot';
} & ConstructionRobotPrototype) | ({
    type: 'container';
} & ContainerPrototype) | ({
    type: 'copy-paste-tool';
} & CopyPasteToolPrototype) | ({
    type: 'corpse';
} & CorpsePrototype) | ({
    type: 'create-platform-achievement';
} & CreatePlatformAchievementPrototype) | ({
    type: 'curved-rail-a';
} & CurvedRailAPrototype) | ({
    type: 'curved-rail-b';
} & CurvedRailBPrototype) | ({
    type: 'custom-event';
} & CustomEventPrototype) | ({
    type: 'custom-input';
} & CustomInputPrototype) | ({
    type: 'damage-type';
} & DamageType) | ({
    type: 'decider-combinator';
} & DeciderCombinatorPrototype) | ({
    type: 'deconstruct-with-robots-achievement';
} & DeconstructWithRobotsAchievementPrototype) | ({
    type: 'deconstructible-tile-proxy';
} & DeconstructibleTileProxyPrototype) | ({
    type: 'deconstruction-item';
} & DeconstructionItemPrototype) | ({
    type: 'optimized-decorative';
} & DecorativePrototype) | ({
    type: 'delayed-active-trigger';
} & DelayedActiveTriggerPrototype) | ({
    type: 'deliver-by-robots-achievement';
} & DeliverByRobotsAchievementPrototype) | ({
    type: 'deliver-category';
} & DeliverCategory) | ({
    type: 'deliver-impact-combination';
} & DeliverImpactCombination) | ({
    type: 'deplete-resource-achievement';
} & DepleteResourceAchievementPrototype) | ({
    type: 'destroy-cliff-achievement';
} & DestroyCliffAchievementPrototype) | ({
    type: 'display-panel';
} & DisplayPanelPrototype) | ({
    type: 'dont-build-entity-achievement';
} & DontBuildEntityAchievementPrototype) | ({
    type: 'dont-craft-manually-achievement';
} & DontCraftManuallyAchievementPrototype) | ({
    type: 'dont-kill-manually-achievement';
} & DontKillManuallyAchievementPrototype) | ({
    type: 'dont-research-before-researching-achievement';
} & DontResearchBeforeResearchingAchievementPrototype) | ({
    type: 'dont-use-entity-in-energy-production-achievement';
} & DontUseEntityInEnergyProductionAchievementPrototype) | ({
    type: 'editor-controller';
} & EditorControllerPrototype) | ({
    type: 'electric-energy-interface';
} & ElectricEnergyInterfacePrototype) | ({
    type: 'electric-pole';
} & ElectricPolePrototype) | ({
    type: 'electric-turret';
} & ElectricTurretPrototype) | ({
    type: 'elevated-curved-rail-a';
} & ElevatedCurvedRailAPrototype) | ({
    type: 'elevated-curved-rail-b';
} & ElevatedCurvedRailBPrototype) | ({
    type: 'elevated-half-diagonal-rail';
} & ElevatedHalfDiagonalRailPrototype) | ({
    type: 'elevated-straight-rail';
} & ElevatedStraightRailPrototype) | ({
    type: 'unit-spawner';
} & EnemySpawnerPrototype) | ({
    type: 'energy-shield-equipment';
} & EnergyShieldEquipmentPrototype) | ({
    type: 'entity-ghost';
} & EntityGhostPrototype) | ({
    type: 'equip-armor-achievement';
} & EquipArmorAchievementPrototype) | ({
    type: 'equipment-category';
} & EquipmentCategory) | ({
    type: 'equipment-ghost';
} & EquipmentGhostPrototype) | ({
    type: 'equipment-grid';
} & EquipmentGridPrototype) | ({
    type: 'explosion';
} & ExplosionPrototype) | ({
    type: 'fire';
} & FireFlamePrototype) | ({
    type: 'fish';
} & FishPrototype) | ({
    type: 'fluid';
} & FluidPrototype) | ({
    type: 'stream';
} & FluidStreamPrototype) | ({
    type: 'fluid-turret';
} & FluidTurretPrototype) | ({
    type: 'fluid-wagon';
} & FluidWagonPrototype) | ({
    type: 'font';
} & FontPrototype) | ({
    type: 'fuel-category';
} & FuelCategory) | ({
    type: 'furnace';
} & FurnacePrototype) | ({
    type: 'fusion-generator';
} & FusionGeneratorPrototype) | ({
    type: 'fusion-reactor';
} & FusionReactorPrototype) | ({
    type: 'gate';
} & GatePrototype) | ({
    type: 'generator-equipment';
} & GeneratorEquipmentPrototype) | ({
    type: 'generator';
} & GeneratorPrototype) | ({
    type: 'god-controller';
} & GodControllerPrototype) | ({
    type: 'group-attack-achievement';
} & GroupAttackAchievementPrototype) | ({
    type: 'gui-style';
} & GuiStyle) | ({
    type: 'gun';
} & GunPrototype) | ({
    type: 'half-diagonal-rail';
} & HalfDiagonalRailPrototype) | ({
    type: 'heat-interface';
} & HeatInterfacePrototype) | ({
    type: 'heat-pipe';
} & HeatPipePrototype) | ({
    type: 'highlight-box';
} & HighlightBoxEntityPrototype) | ({
    type: 'impact-category';
} & ImpactCategory) | ({
    type: 'infinity-cargo-wagon';
} & InfinityCargoWagonPrototype) | ({
    type: 'infinity-container';
} & InfinityContainerPrototype) | ({
    type: 'infinity-pipe';
} & InfinityPipePrototype) | ({
    type: 'inserter';
} & InserterPrototype) | ({
    type: 'inventory-bonus-equipment';
} & InventoryBonusEquipmentPrototype) | ({
    type: 'item-entity';
} & ItemEntityPrototype) | ({
    type: 'item-group';
} & ItemGroup) | ({
    type: 'item';
} & ItemPrototype) | ({
    type: 'item-request-proxy';
} & ItemRequestProxyPrototype) | ({
    type: 'item-subgroup';
} & ItemSubGroup) | ({
    type: 'item-with-entity-data';
} & ItemWithEntityDataPrototype) | ({
    type: 'item-with-inventory';
} & ItemWithInventoryPrototype) | ({
    type: 'item-with-label';
} & ItemWithLabelPrototype) | ({
    type: 'item-with-tags';
} & ItemWithTagsPrototype) | ({
    type: 'kill-achievement';
} & KillAchievementPrototype) | ({
    type: 'lab';
} & LabPrototype) | ({
    type: 'lamp';
} & LampPrototype) | ({
    type: 'land-mine';
} & LandMinePrototype) | ({
    type: 'lane-splitter';
} & LaneSplitterPrototype) | ({
    type: 'legacy-curved-rail';
} & LegacyCurvedRailPrototype) | ({
    type: 'legacy-straight-rail';
} & LegacyStraightRailPrototype) | ({
    type: 'lightning-attractor';
} & LightningAttractorPrototype) | ({
    type: 'lightning';
} & LightningPrototype) | ({
    type: 'linked-belt';
} & LinkedBeltPrototype) | ({
    type: 'linked-container';
} & LinkedContainerPrototype) | ({
    type: 'loader-1x1';
} & Loader1x1Prototype) | ({
    type: 'loader';
} & Loader1x2Prototype) | ({
    type: 'locomotive';
} & LocomotivePrototype) | ({
    type: 'logistic-container';
} & LogisticContainerPrototype) | ({
    type: 'logistic-robot';
} & LogisticRobotPrototype) | ({
    type: 'map-gen-presets';
} & MapGenPresets) | ({
    type: 'map-settings';
} & MapSettings) | ({
    type: 'market';
} & MarketPrototype) | ({
    type: 'mining-drill';
} & MiningDrillPrototype) | ({
    type: 'module-category';
} & ModuleCategory) | ({
    type: 'module';
} & ModulePrototype) | ({
    type: 'module-transfer-achievement';
} & ModuleTransferAchievementPrototype) | ({
    type: 'mouse-cursor';
} & MouseCursor) | ({
    type: 'movement-bonus-equipment';
} & MovementBonusEquipmentPrototype) | ({
    type: 'noise-expression';
} & NamedNoiseExpression) | ({
    type: 'noise-function';
} & NamedNoiseFunction) | ({
    type: 'night-vision-equipment';
} & NightVisionEquipmentPrototype) | ({
    type: 'offshore-pump';
} & OffshorePumpPrototype) | ({
    type: 'optimized-particle';
} & ParticlePrototype) | ({
    type: 'particle-source';
} & ParticleSourcePrototype) | ({
    type: 'pipe';
} & PipePrototype) | ({
    type: 'pipe-to-ground';
} & PipeToGroundPrototype) | ({
    type: 'place-equipment-achievement';
} & PlaceEquipmentAchievementPrototype) | ({
    type: 'planet';
} & PlanetPrototype) | ({
    type: 'plant';
} & PlantPrototype) | ({
    type: 'player-damaged-achievement';
} & PlayerDamagedAchievementPrototype) | ({
    type: 'player-port';
} & PlayerPortPrototype) | ({
    type: 'power-switch';
} & PowerSwitchPrototype) | ({
    type: 'procession-layer-inheritance-group';
} & ProcessionLayerInheritanceGroup) | ({
    type: 'procession';
} & ProcessionPrototype) | ({
    type: 'produce-achievement';
} & ProduceAchievementPrototype) | ({
    type: 'produce-per-hour-achievement';
} & ProducePerHourAchievementPrototype) | ({
    type: 'programmable-speaker';
} & ProgrammableSpeakerPrototype) | ({
    type: 'projectile';
} & ProjectilePrototype) | ({
    type: 'proxy-container';
} & ProxyContainerPrototype) | ({
    type: 'pump';
} & PumpPrototype) | ({
    type: 'quality';
} & QualityPrototype) | ({
    type: 'radar';
} & RadarPrototype) | ({
    type: 'rail-chain-signal';
} & RailChainSignalPrototype) | ({
    type: 'rail-planner';
} & RailPlannerPrototype) | ({
    type: 'rail-ramp';
} & RailRampPrototype) | ({
    type: 'rail-remnants';
} & RailRemnantsPrototype) | ({
    type: 'rail-signal';
} & RailSignalPrototype) | ({
    type: 'rail-support';
} & RailSupportPrototype) | ({
    type: 'reactor';
} & ReactorPrototype) | ({
    type: 'recipe-category';
} & RecipeCategory) | ({
    type: 'recipe';
} & RecipePrototype) | ({
    type: 'remote-controller';
} & RemoteControllerPrototype) | ({
    type: 'repair-tool';
} & RepairToolPrototype) | ({
    type: 'research-achievement';
} & ResearchAchievementPrototype) | ({
    type: 'research-with-science-pack-achievement';
} & ResearchWithSciencePackAchievementPrototype) | ({
    type: 'resource-category';
} & ResourceCategory) | ({
    type: 'resource';
} & ResourceEntityPrototype) | ({
    type: 'roboport-equipment';
} & RoboportEquipmentPrototype) | ({
    type: 'roboport';
} & RoboportPrototype) | ({
    type: 'rocket-silo';
} & RocketSiloPrototype) | ({
    type: 'rocket-silo-rocket';
} & RocketSiloRocketPrototype) | ({
    type: 'rocket-silo-rocket-shadow';
} & RocketSiloRocketShadowPrototype) | ({
    type: 'segment';
} & SegmentPrototype) | ({
    type: 'segmented-unit';
} & SegmentedUnitPrototype) | ({
    type: 'selection-tool';
} & SelectionToolPrototype) | ({
    type: 'selector-combinator';
} & SelectorCombinatorPrototype) | ({
    type: 'shoot-achievement';
} & ShootAchievementPrototype) | ({
    type: 'shortcut';
} & ShortcutPrototype) | ({
    type: 'simple-entity';
} & SimpleEntityPrototype) | ({
    type: 'simple-entity-with-force';
} & SimpleEntityWithForcePrototype) | ({
    type: 'simple-entity-with-owner';
} & SimpleEntityWithOwnerPrototype) | ({
    type: 'smoke-with-trigger';
} & SmokeWithTriggerPrototype) | ({
    type: 'solar-panel-equipment';
} & SolarPanelEquipmentPrototype) | ({
    type: 'solar-panel';
} & SolarPanelPrototype) | ({
    type: 'sound';
} & SoundPrototype) | ({
    type: 'space-connection-distance-traveled-achievement';
} & SpaceConnectionDistanceTraveledAchievementPrototype) | ({
    type: 'space-connection';
} & SpaceConnectionPrototype) | ({
    type: 'space-location';
} & SpaceLocationPrototype) | ({
    type: 'space-platform-hub';
} & SpacePlatformHubPrototype) | ({
    type: 'space-platform-starter-pack';
} & SpacePlatformStarterPackPrototype) | ({
    type: 'spectator-controller';
} & SpectatorControllerPrototype) | ({
    type: 'speech-bubble';
} & SpeechBubblePrototype) | ({
    type: 'spider-leg';
} & SpiderLegPrototype) | ({
    type: 'spider-unit';
} & SpiderUnitPrototype) | ({
    type: 'spider-vehicle';
} & SpiderVehiclePrototype) | ({
    type: 'spidertron-remote';
} & SpidertronRemotePrototype) | ({
    type: 'splitter';
} & SplitterPrototype) | ({
    type: 'sprite';
} & SpritePrototype) | ({
    type: 'sticker';
} & StickerPrototype) | ({
    type: 'storage-tank';
} & StorageTankPrototype) | ({
    type: 'straight-rail';
} & StraightRailPrototype) | ({
    type: 'surface-property';
} & SurfacePropertyPrototype) | ({
    type: 'surface';
} & SurfacePrototype) | ({
    type: 'technology';
} & TechnologyPrototype) | ({
    type: 'temporary-container';
} & TemporaryContainerPrototype) | ({
    type: 'thruster';
} & ThrusterPrototype) | ({
    type: 'tile-effect';
} & TileEffectDefinition) | ({
    type: 'tile-ghost';
} & TileGhostPrototype) | ({
    type: 'tile';
} & TilePrototype) | ({
    type: 'tips-and-tricks-item';
} & TipsAndTricksItem) | ({
    type: 'tips-and-tricks-item-category';
} & TipsAndTricksItemCategory) | ({
    type: 'tool';
} & ToolPrototype) | ({
    type: 'train-path-achievement';
} & TrainPathAchievementPrototype) | ({
    type: 'train-stop';
} & TrainStopPrototype) | ({
    type: 'transport-belt';
} & TransportBeltPrototype) | ({
    type: 'tree';
} & TreePrototype) | ({
    type: 'trigger-target-type';
} & TriggerTargetType) | ({
    type: 'trivial-smoke';
} & TrivialSmokePrototype) | ({
    type: 'turret';
} & TurretPrototype) | ({
    type: 'tutorial';
} & TutorialDefinition) | ({
    type: 'underground-belt';
} & UndergroundBeltPrototype) | ({
    type: 'unit';
} & UnitPrototype) | ({
    type: 'upgrade-item';
} & UpgradeItemPrototype) | ({
    type: 'use-entity-in-energy-production-achievement';
} & UseEntityInEnergyProductionAchievementPrototype) | ({
    type: 'use-item-achievement';
} & UseItemAchievementPrototype) | ({
    type: 'utility-constants';
} & UtilityConstants) | ({
    type: 'utility-sounds';
} & UtilitySounds) | ({
    type: 'utility-sprites';
} & UtilitySprites) | ({
    type: 'valve';
} & ValvePrototype) | ({
    type: 'virtual-signal';
} & VirtualSignalPrototype) | ({
    type: 'wall';
} & WallPrototype) | settings.dataExtendType | PrototypeBase;
}