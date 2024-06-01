// Factorio type definitions for prototypes
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/prototype-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.108
// API version 5

declare namespace prototype {

interface ButtonStyleSpecification extends ButtonStyleSpecificationBase {
    type: 'button_style'
}

interface CreateEntityTriggerEffectItem extends CreateEntityTriggerEffectItemBase {
    type: 'create-entity'
}

interface CreateParticleTriggerEffectItem extends CreateParticleTriggerEffectItemBase {
    type: 'create-particle'
}

interface EmptyWidgetStyleSpecification extends EmptyWidgetStyleSpecificationBase {
    type: 'empty_widget_style'
}

interface SliderStyleSpecification extends SliderStyleSpecificationBase {
    type: 'slider_style'
}

interface ActivateEquipmentCapsuleAction {
    
    /**
     * Activation is only implemented for {@link ActiveDefenseEquipmentPrototype | prototype:ActiveDefenseEquipmentPrototype}.
     */
    equipment: EquipmentID,
    type: 'equipment-remote'
}

interface ActivityBarStyleSpecification extends BaseStyleSpecification{
    bar?: Sprite,
    bar_background?: Sprite,
    bar_size_ratio?: float,
    bar_width?: uint32,
    color?: Color,
    speed?: float,
    type: 'activity_bar_style'
}

interface AdvancedMapGenSettings {
    difficulty_settings?: MapGenPresetDifficultySettings,
    enemy_evolution?: MapGenPresetEnemyEvolutionSettings,
    enemy_expansion?: MapGenPresetEnemyExpansionSettings,
    pollution?: MapGenPresetPollutionSettings
}

interface AggregationSpecification {
    
    /**
     * If `true`, already playing sounds are taken into account when checking `max_count`.
     */
    count_already_playing?: bool,
    max_count: uint32,
    
    /**
     * If `count_already_playing` is `true`, this will determine maximum progress when instance is counted toward playing sounds.
     */
    progress_threshold?: float,
    remove: bool
}

/**
 * The name of an {@link AmmoCategory | prototype:AmmoCategory}.
 * @example
 * ```
 * "bullet"
 * ```
 *
 * @example
 * ```
 * "melee"
 * ```
 *
 */
type AmmoCategoryID = string

interface AmmoDamageModifier extends BaseModifier{
    
    /**
     * Name of the {@link AmmoCategory | prototype:AmmoCategory} that is affected.
     */
    ammo_category: AmmoCategoryID,
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    
    /**
     * Modification value, which will be added to the current ammo damage modifier upon researching.
     */
    modifier: double,
    type: 'ammo-damage',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

/**
 * Used to allow specifying different ammo effects depending on which kind of entity the ammo is used in.
 * 
 * If ammo is used in an entity that isn't covered by the defined source_types, e.g. only `"player"` and `"vehicle"` are defined and the ammo is used by a turret, the first defined AmmoType in the {@link AmmoItemPrototype::ammo_type | prototype:AmmoItemPrototype::ammo_type} array is used.
 */
type AmmoSourceType = 'default' | 'player' | 'turret' | 'vehicle'

/**
 * Definition of actual parameters used in attack.
 */
interface AmmoType {
    
    /**
     * Describes actions taken upon attack happening.
     */
    action?: Trigger,
    
    /**
     * Name of a {@link AmmoCategory | prototype:AmmoCategory}. Defines whether the attack will be affected by upgrades.
     */
    category: AmmoCategoryID,
    
    /**
     * When true, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` equals `"position"`. The gun will fire at the maximum range in the direction of the target position.
     */
    clamp_position?: bool,
    consumption_modifier?: float,
    cooldown_modifier?: double,
    
    /**
     * Energy consumption of a single shot, if applicable.
     */
    energy_consumption?: Energy,
    
    /**
     * Affects the `range` value of the shooting gun prototype's {@link BaseAttackParameters | prototype:BaseAttackParameters} to give a modified maximum range. The `min_range` value of the gun is unaffected.

This has no effect on artillery turrets and wagons even though the bonus appears in the GUI. {@link Forum thread | https://forums.factorio.com/103658}.
     */
    range_modifier?: double,
    
    /**
     * Only exists (and is then mandatory) if the {@link AmmoItemPrototype::ammo_type | prototype:AmmoItemPrototype::ammo_type} this AmmoType is defined on has multiple ammo types.

Defines for which kind of entity this ammo type applies. Each entity kind can only be used once per array.
     */
    source_type?: AmmoSourceType,
    
    /**
     * `"entity"` fires at an entity, `"position"` fires directly at a position, `"direction"` fires in a direction.

If this is `"entity"`, `clamp_position` is forced to be `false`.
     */
    target_type?: 'entity' | 'position' | 'direction'
}

interface AndTipTrigger {
    
    /**
     * If all of the triggers are fulfilled, this trigger is considered fulfilled.
     */
    triggers: TipTrigger[],
    type: 'and'
}

interface AnimatedVector {
    direction_shift?: DirectionShift,
    
    /**
     * Default render layer for the rotations.
     */
    render_layer?: RenderLayer,
    rotations: VectorRotation[]
}

/**
 * Specifies an animation that can be used in the game.
 * 
 * Note that if any frame of the animation is specified from the same source as any other {@link Sprite | prototype:Sprite} or frame of other animation, it will be shared.
 * @example
 * ```
 * -- simple animation
 * horizontal_animation =
 * {
 *   filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
 *   width = 176,
 *   height = 128,
 *   frame_count = 32,
 *   line_length = 8,
 *   shift = {0.03125, -0.15625}
 * }
 * ```
 *
 * @example
 * ```
 * -- animation with hr version
 * horizontal_animation =
 * {
 *   filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
 *   width = 176,
 *   height = 128,
 *   frame_count = 32,
 *   line_length = 8,
 *   shift = {0.03125, -0.15625},
 *   hr_version =
 *   {
 *     filename = "__base__/graphics/entity/steam-engine/hr-steam-engine-H.png",
 *     width = 352,
 *     height = 257,
 *     frame_count = 32,
 *     line_length = 8,
 *     shift = {0.03125, -0.1484375},
 *     scale = 0.5
 *   }
 * }
 * ```
 *
 * @example
 * ```
 * -- animation with layers
 * horizontal_animation =
 * {
 *   layers =
 *   {
 *     {
 *       filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
 *       width = 176,
 *       height = 128,
 *       frame_count = 32,
 *       line_length = 8,
 *       shift = {0.03125, -0.15625}
 *     },
 *     {
 *       filename = "__base__/graphics/entity/steam-engine/steam-engine-H-shadow.png",
 *       width = 254,
 *       height = 80,
 *       frame_count = 32,
 *       line_length = 8,
 *       draw_as_shadow = true,
 *       shift = {1.5, 0.75}
 *     }
 *   }
 * }
 * ```
 *
 */
interface Animation extends AnimationParameters{
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `stripes` is not defined.

The path to the sprite file to use.
     */
    filename?: FileName,
    
    /**
     * Only loaded if `layers` is not defined.

If this property exists and high resolution sprites are turned on, this is used to load the Animation.
     */
    hr_version?: Animation,
    
    /**
     * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.

`animation_speed` and `max_advance` of the first layer are used for all layers. All layers will run at the same speed.

If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     */
    layers?: Animation[],
    
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: Stripe[]
}

/**
 * If this is loaded as a single Animation, it applies to all directions.
 */
type Animation4Way = {
    
    /**
     * Defaults to the north animation.
     */
    east?: Animation,
    north: Animation,
    
    /**
     * Defaults to the north animation.
     */
    south?: Animation,
    
    /**
     * Defaults to the east animation.
     */
    west?: Animation
} | Animation

interface AnimationElement {
    always_draw?: bool,
    animation?: Animation,
    apply_tint?: bool,
    draw_as_light?: bool,
    draw_as_sprite?: bool,
    render_layer?: RenderLayer,
    
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8
}

/**
 * This is a list of 1-based frame indices into the spritesheet. The actual length of the animation will then be the length of the frame_sequence (times `repeat_count`, times two if `run_mode` is `"forward-then-backward"`). There is a limit for (actual) animation length of 255 frames.
 * 
 * Indices can be used in any order, repeated or not used at all. Unused frames are not loaded into VRAM at all, frames referenced multiple times are loaded just once, see {@link here | https://forums.factorio.com/53202}.
 * @example
 * ```
 * -- Trivial example - frame_sequence defines same sequence in which the animation would load by default,
 * -- so it is useless in this case:
 * frame_count = 4,
 * frame_sequence = { 1, 2, 3, 4 }
 * ```
 *
 * @example
 * ```
 * -- Usage example - first five times repeat frame 2, then alternate between 4 and 3 two times. Frame 1 is not used:
 * frame_count = 4,
 * frame_sequence = { 2, 2, 2, 2, 2, 4, 3, 4, 3 }
 * ```
 *
 * @example
 * ```
 * -- Complex example - animation contains different layers with different frame counts:
 * local custom_frame_sequence = { 2, 2, 2, 2, 2, 4, 3, 4, 3 }
 * layers = {
 *   {
 *     -- Animation with custom frame sequence
 *     frame_count = 4,
 *     frame_sequence = custom_frame_sequence,
 *   },
 *   {
 *     -- Single sprite that's repeated
 *     repeat_count = #custom_frame_sequence,
 *   },
 *   {
 *     -- Other animation with different frame count
 *     -- Assuming: #custom_frame_sequence < frame_count
 *     frame_count = #custom_frame_sequence,
 *   },
 * }
 * ```
 *
 */
type AnimationFrameSequence = uint16[]

interface AnimationParameters extends SpriteParameters{
    
    /**
     * Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.
     */
    animation_speed?: float,
    
    /**
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4×4 grid.
     */
    dice?: uint8,
    
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     */
    dice_x?: uint8,
    
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     */
    dice_y?: uint8,
    
    /**
     * Can't be `0`.
     */
    frame_count?: uint32,
    frame_sequence?: AnimationFrameSequence,
    
    /**
     * Unused.
     */
    generate_sdf?: bool,
    
    /**
     * Mandatory if `size` is not defined.

Height of one frame in pixels, from 0-8192.
     */
    height?: SpriteSizeType,
    
    /**
     * Specifies how many pictures are on each horizontal line in the image file. `0` means that all the pictures are in one horizontal line. Once the specified number of pictures are loaded from a line, the pictures from the next line are loaded. This is to allow having longer animations loaded in to Factorio's graphics matrix than the game engine's width limit of 8192px per input file. The restriction on input files is to be compatible with most graphics cards.
     */
    line_length?: uint32,
    
    /**
     * Maximum amount of frames the animation can move forward in one update. Useful to cap the animation speed on entities where it is variable, such as car animations.
     */
    max_advance?: float,
    
    /**
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.

Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@link here | https://forums.factorio.com/viewtopic.php?p=549058#p549058}.
     */
    mipmap_count?: uint8,
    
    /**
     * How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
     */
    repeat_count?: uint8,
    run_mode?: 'forward' | 'backward' | 'forward-then-backward',
    
    /**
     * The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     */
    size?: SpriteSizeType | 
[    SpriteSizeType,
    SpriteSizeType
],
    
    /**
     * Mandatory if `size` is not defined.

Width of one frame in pixels, from 0-8192.
     */
    width?: SpriteSizeType
}

interface AnimationSheet extends AnimationParameters{
    frame_count?: uint32,
    
    /**
     * If this property exists and high resolution sprites are turned on, this is used to load the AnimationSheet.
     */
    hr_version?: AnimationSheet,
    line_length?: uint32,
    variation_count: uint32
}

/**
 * @example
 * ```
 * -- array of animations
 * animations =
 * {
 *   {
 *     filename = "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
 *     draw_as_glow = true,
 *     priority = "extra-high",
 *     width = 34,
 *     height = 38,
 *     frame_count = 2,
 *     animation_speed = 1.5,
 *     shift = {0, 0}
 *   },
 *   {
 *     filename = "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
 *     draw_as_glow = true,
 *     priority = "extra-high",
 *     width = 34,
 *     height = 38,
 *     x = 34 * 2,
 *     frame_count = 2,
 *     animation_speed = 1.5,
 *     shift = {0, 0}
 *   },
 *   -- [...]
 * }
 * ```
 *
 * @example
 * ```
 * -- animation sheet using "sheet"
 * pictures =
 * {
 *   sheet =
 *   {
 *     filename = "__base__/graphics/entity/character/footprints.png",
 *     line_length = 2,
 *     frame_count = 2,
 *     width = 15,
 *     height = 11,
 *     shift = util.by_pixel(0.5, 0.5),
 *     variation_count = 8,
 *     hr_version =
 *     {
 *       filename = "__base__/graphics/entity/character/hr-footprints.png",
 *       line_length = 2,
 *       frame_count = 2,
 *       width = 30,
 *       height = 22,
 *       shift = util.by_pixel(0.25, 0.25),
 *       scale = 0.5,
 *       variation_count = 8
 *     }
 *   }
 * }
 * ```
 *
 */
type AnimationVariations = {
    
    /**
     * The variations are arranged vertically in the file, one row for each variation.
     */
    sheet?: AnimationSheet,
    
    /**
     * Only loaded if `sheet` is not defined.
     */
    sheets?: AnimationSheet[]
} | Animation | Animation[]

/**
 * A union of all prototypes. A specific prototype is loaded based on the value of the `type` key.
 * 
 * See the {@link Prototypes page | prototype:prototypes} for more information.
 */
type AnyPrototype = PrototypeBase | AmbientSound | AnimationPrototype | EditorControllerPrototype | FontPrototype | GodControllerPrototype | MapGenPresets | MapSettings | MouseCursor | SoundPrototype | SpectatorControllerPrototype | SpritePrototype | TileEffectDefinition | TipsAndTricksItemCategory | TriggerTargetType | WindSound

interface AreaTriggerItem extends TriggerItem{
    collision_mode?: 'distance-from-collision-box' | 'distance-from-center',
    radius: double,
    show_in_tooltip?: bool,
    target_entities?: bool,
    trigger_from_target?: bool,
    type: 'area'
}

interface ArtilleryRangeModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'artillery-range',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface ArtilleryRemoteCapsuleAction {
    
    /**
     * Name of an {@link ArtilleryFlarePrototype | prototype:ArtilleryFlarePrototype}.
     */
    flare: EntityID,
    play_sound_on_failure?: bool,
    type: 'artillery-remote'
}

interface ArtilleryTriggerDelivery extends TriggerDeliveryItem{
    
    /**
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     */
    direction_deviation?: float,
    
    /**
     * Name of a {@link ArtilleryProjectilePrototype | prototype:ArtilleryProjectilePrototype}.
     */
    projectile: EntityID,
    range_deviation?: float,
    starting_speed: float,
    starting_speed_deviation?: float,
    trigger_fired_artillery?: bool,
    type: 'artillery'
}

/**
 * Loaded as one of the {@link BaseAttackParameters | prototype:BaseAttackParameters} extensions, based on the value of the `type` key.
 */
type AttackParameters = /* Loaded when the `type` is `"projectile"`. */ ProjectileAttackParameters | /* Loaded when the `type` is `"beam"`. */ BeamAttackParameters | /* Loaded when the `type` is `"stream"`. */ StreamAttackParameters

interface AttackReactionItem {
    action?: Trigger,
    damage_type?: DamageTypeID,
    range: float,
    reaction_modifier?: float
}

/**
 * The name of an {@link AutoplaceControl | prototype:AutoplaceControl}.
 * @example
 * ```
 * "copper-ore"
 * ```
 *
 * @example
 * ```
 * "trees"
 * ```
 *
 */
type AutoplaceControlID = string

interface AutoplacePeak {
    
    /**
     * Distance from the optimal parameters that get influence of -1.

Only loaded if `aux_optimal` is defined.
     */
    aux_max_range?: double,
    
    /**
     * Optimal value of aux. If aux is close to this value, peak influence is 1.

aux corresponds to the `aux` {@link noise expression | prototype:BaseNamedNoiseExpressions}.
     */
    aux_optimal?: double,
    
    /**
     * Distance from the optimal parameters that is still considered optimal.

Only loaded if `aux_optimal` is defined.
     */
    aux_range?: double,
    
    /**
     * Limit distance from the optimum on a single (positive) side. This is pure magic.

Only loaded if `aux_optimal` is defined.
     */
    aux_top_property_limit?: double,
    
    /**
     * Distance from the optimal parameters that get influence of -1.

Only loaded if `distance_optimal` is defined.
     */
    distance_max_range?: double,
    
    /**
     * Optimal value of distance. If distance is close to this value, peak influence is 1.

distance corresponds to the `distance` {@link noise expression | prototype:BaseNamedNoiseExpressions}.
     */
    distance_optimal?: double,
    
    /**
     * Distance from the optimal parameters that is still considered optimal.

Only loaded if `distance_optimal` is defined.
     */
    distance_range?: double,
    
    /**
     * Limit distance from the optimum on a single (positive) side. This is pure magic.

Only loaded if `distance_optimal` is defined.
     */
    distance_top_property_limit?: double,
    
    /**
     * Distance from the optimal parameters that get influence of -1.

Only loaded if `elevation_optimal` is defined.
     */
    elevation_max_range?: double,
    
    /**
     * Optimal value of elevation. If elevation is close to this value, peak influence is 1.

elevation corresponds to the `elevation` {@link noise expression | prototype:BaseNamedNoiseExpressions}.
     */
    elevation_optimal?: double,
    
    /**
     * Distance from the optimal parameters that is still considered optimal.

Only loaded if `elevation_optimal` is defined.
     */
    elevation_range?: double,
    
    /**
     * Limit distance from the optimum on a single (positive) side. This is pure magic.

Only loaded if `elevation_optimal` is defined.
     */
    elevation_top_property_limit?: double,
    
    /**
     * Influence multiplier.

Influence is calculated as a sum of influences of peaks. Influence of a peak is obtained by calculating a distance from each of its dimensions and sum of these individual distances is used as a distance from optimal conditions. Based on this distance a peak gets influence between -1 and 1. This is then multiplied by the noise function, if it is specified, and by the `influence` constant (or by `influence` + `richness_influence` if calculating richness). Finally this value is clamped to a range between `min_influence` and `max_influence`.

When {@link AutoplaceSpecification::starting_area_amount | prototype:AutoplaceSpecification::starting_area_amount} is non-zero a position in starting area is selected and a blob is placed centered on this position. Influence is then a maximum of the default calculated value and a value obtained from this blob.
     */
    influence?: double,
    
    /**
     * Maximal influence (after all calculations) of current peak. See `influence`.
     */
    max_influence?: double,
    
    /**
     * Minimal influence (after all calculations) of current peak. See `influence`.
     */
    min_influence?: double,
    
    /**
     * Name of {@link NoiseLayer | prototype:NoiseLayer} to use for this peak. If empty, then no noise is added to this peak.

A peak may have a noise multiplied with its influence. Intended use is to have noise layers separate for different types of objects that might appear (trees-12 vs enemy-base).
     */
    noise_layer?: NoiseLayerID,
    
    /**
     * Difference between number of octaves of the world and of the noise.
     */
    noise_octaves_difference?: double,
    
    /**
     * Must be between 0 and 1. Persistence of the noise.
     */
    noise_persistence?: double,
    noise_scale?: double,
    
    /**
     * Bonus for influence multiplier when calculating richness. See `influence`.
     */
    richness_influence?: double,
    
    /**
     * Distance from the optimal parameters that get influence of -1.

Only loaded if `starting_area_weight_optimal` is defined.
     */
    starting_area_weight_max_range?: double,
    
    /**
     * Optimal value of starting_area_weight. If starting_area_weight is close to this value, peak influence is 1.

starting_area_weight corresponds to the `starting_area_weight` {@link noise expression | prototype:BaseNamedNoiseExpressions}.
     */
    starting_area_weight_optimal?: double,
    
    /**
     * Distance from the optimal parameters that is still considered optimal.

Only loaded if `starting_area_weight_optimal` is defined.
     */
    starting_area_weight_range?: double,
    
    /**
     * Limit distance from the optimum on a single (positive) side. This is pure magic.

Only loaded if `starting_area_weight_optimal` is defined.
     */
    starting_area_weight_top_property_limit?: double,
    
    /**
     * Distance from the optimal parameters that get influence of -1.

Only loaded if `temperature_optimal` is defined.
     */
    temperature_max_range?: double,
    
    /**
     * Optimal value of temperature. If temperature is close to this value, peak influence is 1.

temperature corresponds to the `temperature` {@link noise expression | prototype:BaseNamedNoiseExpressions}.
     */
    temperature_optimal?: double,
    
    /**
     * Distance from the optimal parameters that is still considered optimal.

Only loaded if `temperature_optimal` is defined.
     */
    temperature_range?: double,
    
    /**
     * Limit distance from the optimum on a single (positive) side. This is pure magic.

Only loaded if `temperature_optimal` is defined.
     */
    temperature_top_property_limit?: double,
    
    /**
     * Distance from the optimal parameters that get influence of -1.

Only loaded if `tier_from_start_optimal` is defined.
     */
    tier_from_start_max_range?: double,
    
    /**
     * Optimal value of tier_from_start. If tier_from_start is close to this value, peak influence is 1.

tier_from_start corresponds to the `tier_from_start` {@link noise expression | prototype:BaseNamedNoiseExpressions}.
     */
    tier_from_start_optimal?: double,
    
    /**
     * Distance from the optimal parameters that is still considered optimal.

Only loaded if `tier_from_start_optimal` is defined.
     */
    tier_from_start_range?: double,
    
    /**
     * Limit distance from the optimum on a single (positive) side. This is pure magic.

Only loaded if `tier_from_start_optimal` is defined.
     */
    tier_from_start_top_property_limit?: double,
    
    /**
     * Distance from the optimal parameters that get influence of -1.

Only loaded if `water_optimal` is defined.
     */
    water_max_range?: double,
    
    /**
     * Optimal value of water. If water is close to this value, peak influence is 1.

water corresponds to the `moisture` {@link noise expression | prototype:BaseNamedNoiseExpressions}.
     */
    water_optimal?: double,
    
    /**
     * Distance from the optimal parameters that is still considered optimal.

Only loaded if `water_optimal` is defined.
     */
    water_range?: double,
    
    /**
     * Limit distance from the optimum on a single (positive) side. This is pure magic.

Only loaded if `water_optimal` is defined.
     */
    water_top_property_limit?: double
}

interface AutoplaceSettings {
    
    /**
     * Overrides the FrequencySizeRichness provided to the {@link AutoplaceSpecification | prototype:AutoplaceSpecification} of the entity/tile/decorative. Takes priority over the FrequencySizeRichness set in the {@link autoplace control | prototype:AutoplaceSpecification::control}.
     */
    settings?: {[key: string]: FrequencySizeRichness},
    
    /**
     * Whether missing autoplace names for this type should be default enabled.
     */
    treat_missing_as_default?: bool
}

/**
 * Autoplace specification is used to determine which entities are placed when generating map. Currently it is used for enemy bases, tiles, resources and other entities (trees, fishes, etc.).
 * 
 * Autoplace specification describe conditions for placing tiles, entities, and decoratives during surface generation. Autoplace specification defines probability of placement on any given tile and richness, which has different meaning depending on the thing being placed.
 * 
 * There are two entirely separate ways to specify the probability and richness:
 * 
 * - The newer noise expression-based system using `probability_expression` and `richness_expression`.
 * 
 * - The older peaks-based system using `peaks` and the properties listed below it.
 */
type AutoplaceSpecification = {
    
    /**
     * Name of the {@link AutoplaceControl | prototype:AutoplaceControl} (row in the map generator GUI) that applies to this entity.
     */
    control?: AutoplaceControlID,
    
    /**
     * Sets a fraction of surface that should be covered by this item.
     */
    coverage?: double,
    
    /**
     * Indicates whether the thing should be placed even if {@link MapGenSettings | runtime:MapGenSettings} do not provide frequency/size/richness for it. (either for the specific prototype or for the control named by AutoplaceSpecification.control).

If true, normal frequency/size/richness (`value=1`) are used in that case. Otherwise it is treated as if 'none' were selected.
     */
    default_enabled?: bool,
    
    /**
     * Force of the placed entity. Can be a custom force name. Only relevant for {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype}.
     */
    force?: 'enemy' | 'player' | 'neutral' | string,
    
    /**
     * Multiplier for output of the sharpness filter.

Probability is calculated as `max_probability * sharpness_filter(sum of influences and size modifier from GUI) - random(0, random_probability_penalty)`.
     */
    max_probability?: double,
    
    /**
     * Order for placing the entity (has no effect when placing tiles). Entities whose order compares less are placed earlier (this influences placing multiple entities which collide with itself), from entities with equal order string only one with the highest probability is placed.
     */
    order?: Order,
    peaks?: AutoplacePeak[],
    
    /**
     * For entities and decoratives, how many times to attempt to place on each tile. Probability and collisions are taken into account each attempt.
     */
    placement_density?: uint32,
    
    /**
     * If specified, provides a noise expression that will be evaluated at every point on the map to determine probability.

If left blank, probability is determined by the `peaks` system based on the properties listed below.
     */
    probability_expression?: NoiseExpression,
    
    /**
     * A random value between `0` and this number is subtracted from a probability after sharpness filter. Only works for entities.
     */
    random_probability_penalty?: double,
    
    /**
     * Base Richness. It is calculated as `sum of influences * (richness_multiplier + distance * richness_multiplier_distance_bonus) + richness_base`.

Note, that when calculating richness, influences of individual peaks use {@link AutoplacePeak::richness_influence | prototype:AutoplacePeak::richness_influence} bonus.
     */
    richness_base?: double,
    
    /**
     * If specified, provides a noise expression that will be evaluated to determine richness.

If probability_expression is specified and `richness_expression` is not, then `probability_expression` will be used as the richness expression.

If neither are specified, then probability and richness are both determined by the `peaks` system based on the properties listed below.
     */
    richness_expression?: NoiseExpression,
    
    /**
     * See `richness_base`.
     */
    richness_multiplier?: double,
    
    /**
     * Bonus to richness multiplier per tile of distance from starting point. See `richness_base`.
     */
    richness_multiplier_distance_bonus?: double,
    
    /**
     * Parameter of the sharpness filter for post-processing probability of entity placement. Value of `0` disables the filter, with value `1`, the filter is a step function centered around `0.5`.
     */
    sharpness?: double,
    
    /**
     * If this value is non zero, influence of this entity will be calculated differently in starting area: For each entity with this parameter a position in starting area is selected and a blob is placed centered on this position. The central tile of this blob will have approximately amount of resources selected by this value.

See {@link AutoplacePeak::influence | prototype:AutoplacePeak::influence} for the general influence calculation.
     */
    starting_area_amount?: uint32,
    
    /**
     * See `starting_area_amount`. Controls approximate radius of the blob in tiles.
     */
    starting_area_size?: uint32,
    
    /**
     * Restricts tiles or tile transitions the entity can appear on.
     */
    tile_restriction?: TileIDRestriction[]
} | AutoplacePeak

/**
 * The abstract base of all {@link AttackParameters | prototype:AttackParameters}.
 */
interface BaseAttackParameters {
    
    /**
     * Used in tooltips to set the tooltip category. It is also used to get the locale keys for activation instructions and speed of the action for the tooltip.

For example, an activation_type of "throw" will result in the tooltip category "thrown" and the tooltip locale keys "gui.instruction-to-throw" and "description.throwing-speed".
     */
    activation_type?: 'shoot' | 'throw' | 'consume' | 'activate',
    ammo_categories?: AmmoCategoryID[],
    
    /**
     * Mandatory if both `ammo_type` and `ammo_categories` are not defined.
     */
    ammo_category?: AmmoCategoryID,
    
    /**
     * Must be greater than or equal to `0`.
     */
    ammo_consumption_modifier?: float,
    
    /**
     * Can be mandatory.
     */
    ammo_type?: AmmoType,
    animation?: RotatedAnimation,
    
    /**
     * Number of ticks in which it will be possible to shoot again. If < 1, multiple shots can be performed in one tick.
     */
    cooldown: float,
    
    /**
     * Must be between `0` and `1`.
     */
    cooldown_deviation?: float,
    
    /**
     * Played during the attack.
     */
    cyclic_sound?: CyclicSound,
    damage_modifier?: float,
    
    /**
     * Used when searching for the nearest enemy, when this is > 0, enemies that aren't burning are preferred over burning enemies. Definition of "burning" for this: Entity has sticker attached to it, and the sticker has a {@link spread_fire_entity | prototype:StickerPrototype::spread_fire_entity} set.
     */
    fire_penalty?: float,
    
    /**
     * A higher penalty will discourage turrets from targeting units with higher health. A negative penalty will encourage turrets to target units with higher health.
     */
    health_penalty?: float,
    
    /**
     * Setting this to anything but zero causes homing projectiles to aim for the predicted location based on enemy movement instead of the current enemy location.
     */
    lead_target_for_projectile_speed?: float,
    
    /**
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance.
     */
    min_attack_distance?: float,
    
    /**
     * The minimum distance (in tiles) between an entity and target. If a unit's target is less than this, the unit will attempt to move away before attacking. A {@link flamethrower turret | https://wiki.factorio.com/Flamethrower_turret} does not move, but has a minimum range. Less than this, it is unable to target an enemy.
     */
    min_range?: float,
    movement_slow_down_cooldown?: float,
    movement_slow_down_factor?: double,
    
    /**
     * Before an entity can attack, the distance (in tiles) between the entity and target must be less than or equal to this.
     */
    range: float,
    range_mode?: 'center-to-center' | 'bounding-box-to-bounding-box',
    
    /**
     * A higher penalty will discourage turrets from targeting units that would take longer to turn to face.
     */
    rotate_penalty?: float,
    
    /**
     * Played once at the start of the attack if these are {@link ProjectileAttackParameters | prototype:ProjectileAttackParameters}.
     */
    sound?: LayeredSound,
    
    /**
     * If this is <= 0, it is set to 1. Arc from 0 to 1, so for example 0.25 is 90°. Used by the {@link flamethrower turret | https://wiki.factorio.com/Flamethrower_turret} in the base game. Arcs greater than 0.5 but less than 1 will be clamped to 0.5 as targeting in arcs larger than half circle is {@link not implemented | https://forums.factorio.com/94654}.
     */
    turn_range?: float,
    use_shooter_direction?: bool,
    
    /**
     * Number of ticks it takes for the weapon to actually shoot after the order for shooting has been made. This also allows to "adjust" the shooting animation to the effect of shooting.

{@link CapsuleActions | prototype:CapsuleAction} cannot have attack parameters with non-zero warmup.
     */
    warmup?: uint32
}

/**
 * The abstract base of all {@link EnergySources | prototype:EnergySource}. Specifies the way an entity gets its energy.
 */
interface BaseEnergySource {
    
    /**
     * The pollution an entity emits per minute at full energy consumption. This is exactly the value that is shown in the entity tooltip.
     */
    emissions_per_minute?: double,
    
    /**
     * Whether to render the "no network" icon if the entity is not connected to an electric network.
     */
    render_no_network_icon?: bool,
    
    /**
     * Whether to render the "no power" icon if the entity is low on power. Also applies to the "no fuel" icon when using burner energy sources.
     */
    render_no_power_icon?: bool
}

/**
 * The abstract base of all {@link Modifiers | prototype:Modifier}.
 */
interface BaseModifier {
    
    /**
     * Path to the icon file.

Only loaded if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon.

Only loaded if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Can't be an empty array.
     */
    icons?: IconData[]
}

/**
 * A list of notable {@link NamedNoiseExpressions | prototype:NamedNoiseExpression} defined in the base game. A list of all named noise expression defined in the base game can be found {@link here | https://wiki.factorio.com/Data.raw#noise-expression}.
 * 
 * Note that the named noise expressions are all defined in Lua, so mods may remove or change the notable expressions listed here, or change how they are used in the map generation.
 */
type BaseNamedNoiseExpressions = /* `noise.distance_from(noise.var("x"), noise.var("y"), noise.var("starting_positions"))`, so the distance from the closest starting position. distance is never `< 0`. */ 'distance' | /* `noise.max(0.0, noise.var("distance") - noise.var("starting_area_radius")) / noise.var("starting_area_radius")` */ 'tier_from_start' | /* `noise.var("tier_from_start")`, so same as `tier_from_start`. */ 'tier' | /* `1 - noise.min(1.0, noise.var("tier_from_start") / 2.0)` */ 'starting_area_weight' | /* A value between `0` and `1` that determines whether a tile becomes sandy (low moisture) or grassy (high moisture). */ 'moisture' | /* A value between `0` and `1` that determines whether low-moisture tiles become sand or red desert. */ 'aux' | /* Provides a value (vaguely representing degrees Celsius, varying between `-20` and `50`) that is used (together with moisture and aux) as part of tree and decorative placement. */ 'temperature' | /* Tiles values less than zero become water. Cliffs are placed along certain contours according to {@link CliffPlacementSettings | prototype:CliffPlacementSettings}. */ 'elevation' | /* Determines whether (when `>0.5`) or not (when `<0.5`) a cliff will be placed at an otherwise suitable (according to {@link CliffPlacementSettings | prototype:CliffPlacementSettings}) location. */ 'cliffiness' | /* Is referenced by both `enemy-base-frequency` and `enemy-base-radius`. If this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about `7`. */ 'enemy-base-intensity' | /* Represents average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`. */ 'enemy-base-frequency' | /* Represents the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. */ 'enemy-base-radius'

/**
 * The abstract base of all {@link StyleSpecifications | prototype:StyleSpecification}.
 * @example
 * ```
 * -- Adding a custom frame_style-type style via GuiStyle
 * data.raw["gui-style"]["default"]["custom_style_for_a_frame"] =
 * {
 *   type = "frame_style",
 *   parent = "frame",
 *   use_header_filler = false,
 *   drag_by_title = false
 * }
 * ```
 *
 */
interface BaseStyleSpecification {
    bottom_margin?: int16,
    bottom_padding?: int16,
    
    /**
     * Name of a custom GUI effect, which are hard-coded in the game's engine. Only has one option currently.
     */
    effect?: 'compilatron-hologram',
    effect_opacity?: float,
    
    /**
     * Sets `minimal_height`, `maximal_height` and `natural_height` to the same value.
     */
    height?: uint32,
    horizontal_align?: HorizontalAlign,
    horizontally_squashable?: StretchRule,
    horizontally_stretchable?: StretchRule,
    ignored_by_search?: bool,
    left_margin?: int16,
    left_padding?: int16,
    
    /**
     * Sets `top_margin`, `right_margin`, `bottom_margin` and `left_margin` to the same value.
     */
    margin?: int16,
    
    /**
     * Maximal height ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_height?: uint32,
    
    /**
     * Maximal width ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_width?: uint32,
    
    /**
     * Minimal height ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_height?: uint32,
    
    /**
     * Minimal width ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_width?: uint32,
    
    /**
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a different size.
     */
    natural_height?: uint32,
    
    /**
     * If this is a tuple, the first member sets `natural_width` and the second sets `natural_height`. Otherwise, both `natural_width` and `natural_height` are set to the same value.
     */
    natural_size?: uint32 | 
[    uint32,
    uint32
],
    
    /**
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a different size.
     */
    natural_width?: uint32,
    never_hide_by_search?: bool,
    
    /**
     * Sets `top_padding`, `right_padding`, `bottom_padding` and `left_padding` to the same value.
     */
    padding?: int16,
    
    /**
     * Name of a {@link StyleSpecification | prototype:StyleSpecification}. This style inherits all property values from its parent.

Styles without a parent property default to the root style for their type. The exception to this are the root styles themselves, as they cannot have a parent set. Due to this, for root styles, some style properties are mandatory and behavior may be unexpected, such as an element not showing up because its size defaults to `0`.
     */
    parent?: string,
    right_margin?: int16,
    right_padding?: int16,
    
    /**
     * If this is a tuple, the first member sets `width`, and the second sets `height`. Otherwise, both `width` and `height` are set to the same value.
     */
    size?: uint32 | 
[    uint32,
    uint32
],
    tooltip?: LocalisedString,
    top_margin?: int16,
    top_padding?: int16,
    vertical_align?: VerticalAlign,
    vertically_squashable?: StretchRule,
    vertically_stretchable?: StretchRule,
    
    /**
     * Sets `minimal_width`, `maximal_width` and `natural_width` to the same value.
     */
    width?: uint32
}

interface BeaconGraphicsSet {
    animation_layer?: RenderLayer,
    animation_list?: AnimationElement[],
    animation_progress?: float,
    
    /**
     * Which tint set in {@link ModulePrototype::beacon_tint | prototype:ModulePrototype::beacon_tint} should be applied to this, if any.
     */
    apply_module_tint?: ModuleTint,
    
    /**
     * Which tint set in {@link ModulePrototype::beacon_tint | prototype:ModulePrototype::beacon_tint} should be applied to the light, if any.
     */
    apply_module_tint_to_light?: ModuleTint,
    base_layer?: RenderLayer,
    draw_animation_when_idle?: bool,
    draw_light_when_idle?: bool,
    light?: LightDefinition,
    max_animation_progress?: float,
    min_animation_progress?: float,
    module_icons_suppressed?: bool,
    module_tint_mode?: 'single-module' | 'mix',
    
    /**
     * The visualisations available for displaying the modules in the beacon. The visualisation is chosen based on art style, see {@link BeaconModuleVisualizations::art_style | prototype:BeaconModuleVisualizations::art_style} and {@link ModulePrototype::art_style | prototype:ModulePrototype::art_style}.
     */
    module_visualisations?: BeaconModuleVisualizations[],
    no_modules_tint?: Color,
    random_animation_offset?: bool,
    top_layer?: RenderLayer
}

interface BeaconModuleVisualization {
    
    /**
     * Which tint set in {@link ModulePrototype::beacon_tint | prototype:ModulePrototype::beacon_tint} should be applied to this, if any.
     */
    apply_module_tint?: ModuleTint,
    draw_as_light?: bool,
    draw_as_sprite?: bool,
    has_empty_slot?: bool,
    pictures?: SpriteVariations,
    render_layer?: RenderLayer,
    
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8
}

interface BeaconModuleVisualizations {
    
    /**
     * The visualization is chosen based on the {@link ModulePrototype::art_style | prototype:ModulePrototype::art_style}, meaning if module art style equals beacon module visualization art style then this visualization is chosen. Vanilla uses `"vanilla"` here.
     */
    art_style: string,
    
    /**
     * The outer array contains the different slots, the inner array contains the different layers for those slots (with different tints etc). Example:
     */
    slots?: Array<BeaconModuleVisualization[]>,
    tier_offset?: int32,
    use_for_empty_slots?: bool
}

interface BeaconVisualizationTints {
    primary?: Color,
    quaternary?: Color,
    secondary?: Color,
    tertiary?: Color
}

interface BeamAnimationSet {
    body?: AnimationVariations,
    ending?: Animation,
    head?: Animation,
    start?: Animation,
    tail?: Animation
}

interface BeamAttackParameters extends BaseAttackParameters{
    source_direction_count?: uint32,
    source_offset?: Vector,
    type: 'beam'
}

interface BeamTriggerDelivery extends TriggerDeliveryItem{
    add_to_shooter?: bool,
    
    /**
     * Name of a {@link BeamPrototype | prototype:BeamPrototype}.
     */
    beam: EntityID,
    duration?: uint32,
    max_length?: uint32,
    source_offset?: Vector,
    type: 'beam'
}

interface BeltTraverseTipTrigger {
    count?: uint32,
    type: 'belt-traverse'
}

/**
 * Determines how sprites/animations should blend with the background. The possible values are listed below.
 * 
 * Note that in most of Factorio it is assumed colors are in alpha pre-multiplied format, see {@link FFF #172 - Blending and Rendering | https://www.factorio.com/blog/post/fff-172}. Sprites get pre-multiplied when loaded, unless `premul_alpha` is set to `false` on the sprite/animation itself. Since generating mipmaps doesn't respect `premul_alpha`, lower mipmap levels will be in pre-multiplied format regardless.
 */
type BlendMode = /* The result color is determined with the following formula: `Result = Active_RGB + Background_RGB * ( 1 - Active_Alpha )`. Note that this is alpha blending with an assumption that `Active_RGB` is already pre-multiplied with `Active_Alpha`. */ 'normal' | /* The result color is determined with the following formula: `Result = Active_RGB + Background_RGB` */ 'additive' | /* The result color is determined with the following formula: `Result = Active_RGB * ( 1 - Background_RGB ) + Background_RGB` */ 'additive-soft' | /* The result color is determined with the following formula: `Result = Active_RGB * Background_RGB` */ 'multiplicative' | /* The result color is determined with the following formula: `Result = Active_RGB * Background_RGB * Active_Alpha + Background_RGB * ( 1 - Active_Alpha )` */ 'multiplicative-with-alpha' | /* The result color is determined with the following formula: `Result = Active_RGBA or Background_RGBA` */ 'overwrite'

/**
 * The table itself is required, but it can be empty.
 */
interface BoilerFire {
    east?: Animation,
    north?: Animation,
    south?: Animation,
    west?: Animation
}

/**
 * The table itself is required, but it can be empty.
 */
interface BoilerFireGlow {
    east?: Animation,
    north?: Animation,
    south?: Animation,
    west?: Animation
}

interface BoilerPatch {
    east?: Sprite,
    north?: Sprite,
    south?: Sprite,
    west?: Sprite
}

interface BoilerStructure {
    east: Animation,
    north: Animation,
    south: Animation,
    west: Animation
}

interface BonusGuiOrdering {
    artillery_range: Order,
    character: Order,
    follower_robots: Order,
    inserter: Order,
    mining_productivity: Order,
    research_speed: Order,
    stack_inserter: Order,
    train_braking_force: Order,
    turret_attack: Order,
    worker_robots: Order
}

interface BoolModifier extends BaseModifier{
    
    /**
     * The value this modifier will have upon researching.
     */
    modifier: bool
}

interface BorderImageSet {
    border_width?: uint32,
    bottom_end?: Sprite,
    bottom_left_corner?: Sprite,
    bottom_right_corner?: Sprite,
    bottom_t?: Sprite,
    cross?: Sprite,
    horizontal_line?: Sprite,
    left_end?: Sprite,
    left_t?: Sprite,
    right_end?: Sprite,
    right_t?: Sprite,
    scale?: double,
    top_end?: Sprite,
    top_left_coner?: Sprite,
    top_right_corner?: Sprite,
    top_t?: Sprite,
    vertical_line?: Sprite
}

/**
 * BoundingBoxes are typically centered around the position of an entity.
 * 
 * The first position is leftTop, the second position is rightBottom. There is an unused third member, a {@link float | prototype:float} that represents the orientation.
 * 
 * Positive x goes towards east, positive y goes towards south. This means that the upper-left point is the least dimension in x and y, and lower-right is the greatest.
 * @example
 * ```
 * {{-0.4, -0.4}, {0.4, 0.4}}
 * ```
 *
 */
type BoundingBox = 
[    MapPosition,
    MapPosition
]

/**
 * A cursor box, for use in {@link UtilitySprites | prototype:UtilitySprites}.
 */
interface BoxSpecification {
    
    /**
     * Whether this is a complete box or just the top left corner. If this is true, `side_length` and `side_height` must be present. Otherwise `max_side_length` must be present.
     */
    is_whole_box?: bool,
    
    /**
     * Only loaded, and mandatory if `is_whole_box` is `false`.
     */
    max_side_length?: double,
    
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     */
    side_height?: double,
    
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     */
    side_length?: double,
    sprite: Sprite
}

interface BuildEntityTipTrigger {
    build_by_dragging?: bool,
    build_in_line?: bool,
    
    /**
     * Building is considered consecutive when the built entity is the same as the last built entity.
     */
    consecutive?: bool,
    count?: uint32,
    entity?: EntityID,
    linear_power_pole_line?: bool,
    match_type_only?: bool,
    type: 'build-entity'
}

interface BurnerEnergySource extends BaseEnergySource{
    burnt_inventory_size?: ItemStackIndex,
    
    /**
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     */
    effectivity?: double,
    
    /**
     * The energy source can be used with fuel from these {@link fuel categories | prototype:FuelCategory}.
     */
    fuel_categories?: FuelCategoryID[],
    
    /**
     * The energy source can be used with fuel from this {@link fuel category | prototype:FuelCategory}. For a list of built-in categories, see {@link here | https://wiki.factorio.com/Data.raw#fuel-category}.

Only loaded if `fuel_categories` is not defined.
     */
    fuel_category?: FuelCategoryID,
    fuel_inventory_size: ItemStackIndex,
    light_flicker?: LightFlickeringDefinition,
    smoke?: SmokeSource[],
    
    /**
     * This is only loaded, and mandatory if the energy source can be loaded as multiple energy source types.
     */
    type?: 'burner'
}

interface ButtonStyleSpecificationBase extends StyleWithClickableGraphicalSetSpecification{
    clicked_font_color?: Color,
    clicked_vertical_offset?: uint32,
    default_font_color?: Color,
    disabled_font_color?: Color,
    draw_grayscale_picture?: bool,
    draw_shadow_under_picture?: bool,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string,
    hovered_font_color?: Color,
    icon_horizontal_align?: HorizontalAlign,
    pie_progress_color?: Color,
    selected_clicked_font_color?: Color,
    selected_font_color?: Color,
    selected_hovered_font_color?: Color,
    strikethrough_color?: Color,
    type: string
}

interface CameraEffectTriggerEffectItem extends TriggerEffectItem{
    delay?: uint8,
    duration: uint8,
    ease_in_duration?: uint8,
    ease_out_duration?: uint8,
    
    /**
     * Required, read by the game and then immediately discarded. In short: Does nothing.
     */
    effect: string,
    full_strength_max_distance?: uint16,
    max_distance?: uint16,
    strength?: float,
    type: 'camera-effect'
}

interface CameraStyleSpecification extends EmptyWidgetStyleSpecificationBase{
    type: 'camera_style'
}

/**
 * Loaded as one of the capsule actions, based on the value of the `type` key.
 */
type CapsuleAction = /* Loaded when the `type` is `"throw"`. */ ThrowCapsuleAction | /* Loaded when the `type` is `"equipment-remote"`. */ ActivateEquipmentCapsuleAction | /* Loaded when the `type` is `"use-on-self"`. */ UseOnSelfCapsuleAction | /* Loaded when the `type` is `"destroy-cliffs"`. */ DestroyCliffsCapsuleAction | /* Loaded when the `type` is `"artillery-remote"`. */ ArtilleryRemoteCapsuleAction

/**
 * The data for one variation of {@link character animations | prototype:CharacterPrototype::animations}.
 */
interface CharacterArmorAnimation {
    
    /**
     * The names of the armors this animation data is used for. Don't define this if you want the animations to be used for the player without armor.
     */
    armors?: ItemID[],
    
    /**
     * flipped_shadow_running_with_gun must be nil or contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference. `flipped_shadow_running_with_gun` has to have same frame count as `running_with_gun`.
     */
    flipped_shadow_running_with_gun?: RotatedAnimation,
    idle: RotatedAnimation,
    idle_with_gun: RotatedAnimation,
    mining_with_tool: RotatedAnimation,
    running: RotatedAnimation,
    
    /**
     * Must contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference.
     */
    running_with_gun: RotatedAnimation
}

interface CharacterBuildDistanceModifier extends SimpleModifier{
    type: 'character-build-distance',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterCraftingSpeedModifier extends SimpleModifier{
    type: 'character-crafting-speed',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterHealthBonusModifier extends SimpleModifier{
    type: 'character-health-bonus',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterInventorySlotsBonusModifier extends SimpleModifier{
    type: 'character-inventory-slots-bonus',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterItemDropDistanceModifier extends SimpleModifier{
    type: 'character-item-drop-distance',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterItemPickupDistanceModifier extends SimpleModifier{
    type: 'character-item-pickup-distance',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterLogisticRequestsModifier extends BoolModifier{
    type: 'character-logistic-requests',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterLogisticTrashSlotsModifier extends SimpleModifier{
    type: 'character-logistic-trash-slots',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterLootPickupDistanceModifier extends SimpleModifier{
    type: 'character-loot-pickup-distance',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterMiningSpeedModifier extends SimpleModifier{
    type: 'character-mining-speed',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterReachDistanceModifier extends SimpleModifier{
    type: 'character-reach-distance',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterResourceReachDistanceModifier extends SimpleModifier{
    type: 'character-resource-reach-distance',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface CharacterRunningSpeedModifier extends SimpleModifier{
    type: 'character-running-speed',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface ChartUtilityConstants {
    artillery_range_color: Color,
    blue_signal_color: Color,
    chart_construction_robot_color: Color,
    chart_deconstruct_tint: Color,
    chart_logistic_robot_color: Color,
    chart_mobile_construction_robot_color: Color,
    chart_personal_construction_robot_color: Color,
    chart_train_stop_disabled_text_color: Color,
    chart_train_stop_full_text_color: Color,
    chart_train_stop_text_color: Color,
    custom_tag_scale?: float,
    custom_tag_selected_overlay_tint: Color,
    
    /**
     * The strings are entity types.
     */
    default_color_by_type?: {[key: string]: Color},
    default_enemy_color: Color,
    default_friendly_color: Color,
    
    /**
     * The strings are entity types.
     */
    default_friendly_color_by_type?: {[key: string]: Color},
    electric_line_minimum_absolute_width: float,
    electric_line_width: float,
    electric_lines_color: Color,
    electric_lines_color_switch_disabled: Color,
    electric_lines_color_switch_enabled: Color,
    electric_power_pole_color: Color,
    entity_ghost_color: Color,
    explosion_visualization_duration: uint32,
    green_signal_color: Color,
    pollution_color: Color,
    rail_color: Color,
    red_signal_color: Color,
    resource_outline_selection_color: Color,
    switch_color: Color,
    train_current_path_outline_color: Color,
    train_path_color: Color,
    train_preview_path_outline_color: Color,
    turret_range_color: Color,
    vehicle_inner_color: Color,
    vehicle_outer_color: Color,
    vehicle_outer_color_selected: Color,
    vehicle_wagon_connection_color: Color,
    yellow_signal_color: Color,
    zoom_threshold_to_draw_spider_path?: double
}

interface CheckBoxStyleSpecification extends StyleWithClickableGraphicalSetSpecification{
    checkmark?: Sprite,
    disabled_checkmark?: Sprite,
    disabled_font_color?: Color,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string,
    font_color?: Color,
    intermediate_mark?: Sprite,
    text_padding?: uint32,
    type: 'checkbox_style'
}

interface CircuitConnectorLayer {
    east?: RenderLayer,
    north?: RenderLayer,
    south?: RenderLayer,
    west?: RenderLayer
}

interface CircuitConnectorSecondaryDrawOrder {
    east?: int8,
    north?: int8,
    south?: int8,
    west?: int8
}

interface CircuitConnectorSprites {
    blue_led_light_offset?: Vector,
    
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     */
    connector_main?: Sprite,
    
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     */
    connector_shadow?: Sprite,
    led_blue: Sprite,
    led_blue_off?: Sprite,
    led_green: Sprite,
    led_light: LightDefinition,
    led_red: Sprite,
    red_green_led_light_offset?: Vector,
    
    /**
     * Drawn when the entity is connected to a circuit network.
     */
    wire_pins?: Sprite,
    
    /**
     * Drawn when the entity is connected to a circuit network.
     */
    wire_pins_shadow?: Sprite
}

interface CircularParticleCreationSpecification {
    center?: Vector,
    creation_distance?: double,
    creation_distance_orientation?: double,
    direction?: float,
    direction_deviation?: float,
    height?: float,
    height_deviation?: float,
    name: ParticleID,
    speed?: float,
    speed_deviation?: float,
    starting_frame_speed: float,
    starting_frame_speed_deviation?: float,
    use_source_position?: bool,
    vertical_speed?: float,
    vertical_speed_deviation?: float
}

type CircularProjectileCreationSpecification = Array<
[    RealOrientation,
    Vector
]>

interface ClearCursorTipTrigger {
    count?: uint32,
    type: 'clear-cursor'
}

interface CliffPlacementSettings {
    
    /**
     * Elevation at which the first row of cliffs is placed. Can not be set from the map generation GUI.
     */
    cliff_elevation_0?: float,
    
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     */
    cliff_elevation_interval?: float,
    
    /**
     * Name of the {@link CliffPrototype | prototype:CliffPrototype}.
     */
    name?: EntityID,
    
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     */
    richness?: MapGenSize
}

interface ClusterTriggerItem extends TriggerItem{
    
    /**
     * Must be at least `2`.
     */
    cluster_count: uint32,
    distance: float,
    distance_deviation?: float,
    type: 'cluster'
}

/**
 * Every entry in the array is a specification of one layer the object collides with or a special collision option. Supplying an empty table means that no layers and no collision options are set.
 * 
 * The default collision masks of all entity types can be found {@link here | prototype:EntityPrototype::collision_mask}. The base game provides common collision mask functions in a Lua file in the core {@link lualib | https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua}.
 * 
 * Supplying an empty array means that no layers and no collision options are set.
 * 
 * The three options in addition to the standard layers are not collision masks, instead they control other aspects of collision.
 * @example
 * ```
 * -- Most common collision mask of buildings:
 * collision_mask = { "item-layer", "object-layer", "player-layer", "water-tile"}
 * ```
 *
 */
type CollisionMask = Array</* A standard collision mask layer. */ CollisionMaskLayer | /* Any two entities that both have this option enabled on their prototype and have an identical collision mask layers list will not collide. Other collision mask options are not included in the identical layer list check. This does mean that two different prototypes with the same collision mask layers and this option enabled will not collide. */ 'not-colliding-with-itself' | /* Uses the prototypes position rather than its collision box when doing collision checks with tile prototypes. Allows the prototype to overlap colliding tiles up until its center point. This is only respected for character movement and cars driven by players. */ 'consider-tile-transitions' | /* Any prototype with this collision option will only be checked for collision with other prototype's collision masks if they are a tile. */ 'colliding-with-tiles-only'>

/**
 * A string specifying a collision mask layer.
 * 
 * In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to use the `collision_mask_util.get_first_unused_layer()` method from the vanilla {@link library | https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua}. When not using the library, mods should start at the higher layers because the base game will take from the lower ones.
 */
type CollisionMaskLayer = 'ground-tile' | 'water-tile' | 'resource-layer' | 'doodad-layer' | 'floor-layer' | 'item-layer' | 'ghost-layer' | 'object-layer' | 'player-layer' | 'train-layer' | 'rail-layer' | 'transport-belt-layer'

/**
 * Table of red, green, blue, and alpha float values between 0 and 1. Alternatively, values can be from 0-255, they are interpreted as such if at least one value is `> 1`.
 * 
 * Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The array items are r, g, b and optionally a, in that order.
 * 
 * The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
 * @example
 * ```
 * color = {r=1, g=0, b=0, a=1} -- red, full opacity
 * color = {r=1} -- the same red, omitting default values
 * color = {1, 0, 0, 1} -- also the same red
 * color = {0, 0, 1} -- blue
 * color = {r=0, g=0.5, b=0, a=0.5} -- half transparency green
 * color = {} -- full opacity black
 * ```
 *
 */
type Color = {
    
    /**
     * alpha value (opacity)
     */
    a?: float,
    
    /**
     * blue value
     */
    b?: float,
    
    /**
     * green value
     */
    g?: float,
    
    /**
     * red value
     */
    r?: float
} | 
[    float,
    float,
    float
] | 
[    float,
    float,
    float,
    float
]

interface ColorFilterData {
    localised_name: LocalisedString,
    
    /**
     * 4 arrays of 4-length float arrays, essentially a 4x4 matrix.
     */
    matrix: Array<float[]>,
    name: string
}

interface ColumnAlignment {
    alignment: 'center' | 'left' | 'right' | 'top-left' | 'middle-left' | 'bottom-left' | 'top-center' | 'middle-center' | 'bottom-center' | 'top-right' | 'middle-right' | 'bottom-right',
    
    /**
     * Column index.
     */
    column: uint32
}

interface ColumnWidth {
    
    /**
     * Column index.
     */
    column: uint32,
    maximal_width?: int32,
    minimal_width?: int32,
    
    /**
     * Sets `minimal_width` and `maximal_width` to the same value.
     */
    width?: int32
}

/**
 * Graphics for the heat pipe.
 */
interface ConnectableEntityGraphics {
    corner_left_down: SpriteVariations,
    corner_left_up: SpriteVariations,
    corner_right_down: SpriteVariations,
    corner_right_up: SpriteVariations,
    cross: SpriteVariations,
    ending_down: SpriteVariations,
    ending_left: SpriteVariations,
    ending_right: SpriteVariations,
    ending_up: SpriteVariations,
    single: SpriteVariations,
    straight_horizontal: SpriteVariations,
    straight_vertical: SpriteVariations,
    t_down: SpriteVariations,
    t_left: SpriteVariations,
    t_right: SpriteVariations,
    t_up: SpriteVariations
}

/**
 * A constant boolean noise expression, such as a literal boolean. When using a constant number, it evaluates to true for numbers bigger than zero, anything else evaluates to false.
 */
type ConstantNoiseBoolean = NoiseLiteralBoolean | ConstantNoiseNumber

/**
 * A constant numeric noise expression, such as a literal number, the result of addition of constants or multioctave noise that uses only constant arguments.
 */
type ConstantNoiseNumber = NoiseNumber

/**
 * Defines which other inputs a {@link CustomInputPrototype | prototype:CustomInputPrototype} consumes.
 * @example
 * ```
 * consuming = "none"
 * ```
 *
 */
type ConsumingType = /* The associated script event will fire when satisfied and pass through to normal game events. */ 'none' | /* The associated script event will fire when satisfied and block game events that conflict with the key sequence. Actions that are processed regardless of game paused state cannot be blocked. */ 'game-only'

interface CraftItemTipTrigger {
    
    /**
     * Can only be used when `event_type` is `"crafting-finished"`.
     */
    consecutive?: bool,
    count?: uint32,
    event_type: 'crafting-of-single-item-ordered' | 'crafting-of-multiple-items-ordered' | 'crafting-finished',
    item?: ItemID,
    type: 'craft-item'
}

/**
 * If no tint is specified, the crafting machine falls back to {@link CraftingMachinePrototype::default_recipe_tint | prototype:CraftingMachinePrototype::default_recipe_tint}.
 */
interface CraftingMachineTint {
    primary?: Color,
    quaternary?: Color,
    secondary?: Color,
    tertiary?: Color
}

interface CreateDecorativesTriggerEffectItem extends TriggerEffectItem{
    apply_projection?: bool,
    decorative: DecorativeID,
    radius_curve?: float,
    spawn_max: uint16,
    
    /**
     * Must be less than 24.
     */
    spawn_max_radius: float,
    spawn_min?: uint16,
    spawn_min_radius: float,
    spread_evenly?: bool,
    type: 'create-decorative'
}

interface CreateEntityTriggerEffectItemBase extends TriggerEffectItem{
    check_buildability?: bool,
    
    /**
     * The name of the entity that should be created.
     */
    entity_name: EntityID,
    offset_deviation?: BoundingBox,
    
    /**
     * If multiple offsets are specified, multiple entities are created. The projectile of the {@link Distractor capsule | https://wiki.factorio.com/Distractor_capsule} uses this property to spawn three Distractors.
     */
    offsets?: Vector | Vector[],
    show_in_tooltip?: bool,
    
    /**
     * Entity creation will not occur if any tile matches the collision condition. Defaults to no collisions.
     */
    tile_collision_mask?: CollisionMask,
    
    /**
     * If `true`, the {@link on_trigger_created_entity | runtime:on_trigger_created_entity} event will be raised.
     */
    trigger_created_entity?: bool,
    type: string
}

interface CreateExplosionTriggerEffectItem extends CreateEntityTriggerEffectItemBase{
    cycle_while_moving?: bool,
    inherit_movement_distance_from_projectile?: bool,
    max_movement_distance?: float,
    max_movement_distance_deviation?: float,
    type: 'create-explosion'
}

interface CreateFireTriggerEffectItem extends CreateEntityTriggerEffectItemBase{
    initial_ground_flame_count?: uint8,
    type: 'create-fire'
}

interface CreateParticleTriggerEffectItemBase extends TriggerEffectItem{
    frame_speed?: float,
    frame_speed_deviation?: float,
    initial_height: float,
    initial_height_deviation?: float,
    initial_vertical_speed?: float,
    initial_vertical_speed_deviation?: float,
    offset_deviation?: BoundingBox,
    offsets?: Vector | Vector[],
    particle_name: ParticleID,
    rotate_offsets?: bool,
    show_in_tooltip?: bool,
    speed_from_center?: float,
    speed_from_center_deviation?: float,
    
    /**
     * Silently capped to a maximum of 100.
     */
    tail_length?: uint8,
    
    /**
     * Silently capped to a maximum of 100.
     */
    tail_length_deviation?: uint8,
    tail_width?: float,
    tile_collision_mask?: CollisionMask,
    type: string
}

interface CreateSmokeTriggerEffectItem extends CreateEntityTriggerEffectItemBase{
    initial_height?: float,
    speed?: Vector,
    speed_from_center?: float,
    speed_from_center_deviation?: float,
    speed_multiplier?: float,
    speed_multiplier_deviation?: float,
    starting_frame?: float,
    starting_frame_deviation?: float,
    starting_frame_speed?: float,
    starting_frame_speed_deviation?: float,
    type: 'create-smoke'
}

interface CreateStickerTriggerEffectItem extends TriggerEffectItem{
    show_in_tooltip?: bool,
    
    /**
     * Name of a {@link StickerPrototype | prototype:StickerPrototype} that should be created.
     */
    sticker: EntityID,
    
    /**
     * If `true`, {@link on_trigger_created_entity | runtime:on_trigger_created_entity} will be triggered when the sticker is created.
     */
    trigger_created_entity?: bool,
    type: 'create-sticker'
}

interface CreateTrivialSmokeEffectItem extends TriggerEffectItem{
    initial_height?: float,
    max_radius?: float,
    offset_deviation?: BoundingBox,
    offsets?: Vector | Vector[],
    smoke_name: TrivialSmokeID,
    speed?: Vector,
    speed_from_center?: float,
    speed_from_center_deviation?: float,
    speed_multiplier?: float,
    speed_multiplier_deviation?: float,
    starting_frame?: float,
    starting_frame_deviation?: float,
    starting_frame_speed?: float,
    starting_frame_speed_deviation?: float,
    type: 'create-trivial-smoke'
}

interface CursorBoxSpecification {
    blueprint_snap_rectangle: BoxSpecification[],
    copy: BoxSpecification[],
    electricity: BoxSpecification[],
    logistics: BoxSpecification[],
    not_allowed: BoxSpecification[],
    pair: BoxSpecification[],
    regular: BoxSpecification[],
    train_visualization: BoxSpecification[]
}

/**
 * One of the following values:
 */
type CursorBoxType = /* The normal entity selection box. Yellow by default. */ 'entity' | /* The selection box used to specify electric poles an entity is connected to. Light blue by default. */ 'electricity' | /* The selection box used when doing entity copy-paste. Green by default. */ 'copy' | /* The selection box used when specifying colliding entities. Red by default. */ 'not-allowed' | /* Light blue by default. */ 'pair' | /* Light blue by default. */ 'logistics' | /* White by default. */ 'train-visualization' | /* Green by default. */ 'blueprint-snap-rectangle'

/**
 * Used by {@link BaseAttackParameters | prototype:BaseAttackParameters} to play a sound during the attack.
 */
interface CyclicSound {
    
    /**
     * Played once at the beginning of the overall cyclic sound.
     */
    begin_sound?: Sound,
    
    /**
     * Played once when the overall cyclic sound is requested to end.
     */
    end_sound?: Sound,
    
    /**
     * Played repeatedly after the begin_sound was played.
     */
    middle_sound?: Sound
}

/**
 * A property type, NOT a prototype. Used to specify what type of damage and how much damage something deals.
 */
interface DamagePrototype {
    amount: float,
    
    /**
     * The type of damage. See {@link here | https://wiki.factorio.com/Data.raw#damage-type} for a list of built-in types, and {@link DamageType | prototype:DamageType} for creating custom types.
     */
    type: DamageTypeID
}

interface DamageTriggerEffectItem extends TriggerEffectItem{
    apply_damage_to_trees?: bool,
    damage: DamagePrototype,
    lower_damage_modifier?: float,
    lower_distance_threshold?: uint16,
    type: 'damage',
    upper_damage_modifier?: float,
    upper_distance_threshold?: uint16,
    
    /**
     * If `true`, no corpse for killed entities will be created.
     */
    vaporize?: bool
}

/**
 * @example
 * ```
 * damage_type_filters = "fire"
 * ```
 *
 * @example
 * ```
 * damage_type_filters = { "fire" } -- more damage types could be specified here
 * ```
 *
 * @example
 * ```
 * damage_type_filters =
 * {
 *   whitelist = false, -- optional
 *   types = "fire"
 * }
 * ```
 *
 * @example
 * ```
 * damage_type_filters =
 * {
 *   whitelist = false, -- optional
 *   types = { "fire" } -- more damage types could be specified here
 * }
 * ```
 *
 */
type DamageTypeFilters = {
    
    /**
     * The damage types to filter for.
     */
    types: DamageTypeID | DamageTypeID[],
    
    /**
     * Whether this is a whitelist or a blacklist of damage types. Defaults to being a blacklist.
     */
    whitelist?: bool
} | DamageTypeID | DamageTypeID[]

/**
 * The name of a {@link DamageType | prototype:DamageType}.
 * @example
 * ```
 * "impact"
 * ```
 *
 * @example
 * ```
 * "poison"
 * ```
 *
 */
type DamageTypeID = string

/**
 * The data table is read by the game to load all prototypes.
 * 
 * At the end of the prototype stage, the data table is loaded by the game engine and the format of the prototypes is validated. Any extra properties are ignored. See {@link Data Lifecycle | runtime:data-lifecycle} for more information.
 * 
 * The data table and its properties are defined in Lua, so their source code can be viewed in {@link dataloader.lua | https://github.com/wube/factorio-data/blob/master/core/lualib/dataloader.lua}.
 */
interface Data {
    
    /**
     * The primary way to add prototypes to the data table.
     */
    extend: DataExtendMethod,
    
    /**
     * Set by the game based on whether the demo or retail version is running. Should not be used by mods.
     */
    is_demo: bool,
    
    /**
     * A dictionary of prototype types to values that themselves are dictionaries of prototype names to specific prototypes.

This means that individual prototypes can be accessed with `local prototype = data.raw["prototype-type"]["internal-name"]`.
     */
    raw: {[key: string]: {[key: string]: AnyPrototype}}
}

/**
 * The first member of the tuple states at which time of the day the LUT should be used. If the current game time is between two values defined in the color lookup that have different LUTs, the color is interpolated to create a smooth transition. (Sharp transition can be achieved by having the two values differing only by a small fraction.)
 * 
 * If there is only one tuple, it means that the LUT will be used all the time, regardless of the value of the first member of the tuple.
 * 
 * The second member of the tuple is a lookup table (LUT) for the color which maps the original color to a position in the sprite where is the replacement color is found. The file pointed to by the filename must be a sprite of size 256×16.
 * @example
 * ```
 * color_lookup = {{1, "identity"}}
 * ```
 *
 * @example
 * ```
 * color_lookup = {{0.5, "__core__/graphics/color_luts/nightvision.png"}}
 * ```
 *
 * @example
 * ```
 * zoom_to_world_daytime_color_lookup =
 * {
 *   {0.25, "identity"},
 *   {0.45, "__core__/graphics/color_luts/night.png"},
 *   {0.55, "__core__/graphics/color_luts/night.png"},
 *   {0.75, "identity"},
 * }
 * ```
 *
 */
type DaytimeColorLookupTable = Array<
[    double,
    FileName | 'identity'
]>

interface DeconstructionTimeToLiveModifier extends SimpleModifier{
    type: 'deconstruction-time-to-live',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

/**
 * The name of a {@link DecorativePrototype | prototype:DecorativePrototype}.
 * @example
 * ```
 * "dark-mud-decal"
 * ```
 *
 * @example
 * ```
 * "red-pita"
 * ```
 *
 */
type DecorativeID = string

interface DefaultRecipeTint {
    primary?: Color,
    quaternary?: Color,
    secondary?: Color,
    tertiary?: Color
}

/**
 * This trigger is considered fulfilled when the {@link TipsAndTricksItem::dependencies | prototype:TipsAndTricksItem::dependencies} are fulfilled.
 */
interface DependenciesMetTipTrigger {
    type: 'dependencies-met'
}

interface DestroyCliffsCapsuleAction {
    attack_parameters: AttackParameters,
    play_sound_on_failure?: bool,
    radius: float,
    timeout?: uint32,
    type: 'destroy-cliffs',
    
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool
}

interface DestroyCliffsTriggerEffectItem extends TriggerEffectItem{
    explosion?: EntityID,
    radius: float,
    type: 'destroy-cliffs'
}

interface DestroyDecorativesTriggerEffectItem extends TriggerEffectItem{
    
    /**
     * If `true`, only decoratives with a {@link DecorativePrototype::trigger_effect | prototype:DecorativePrototype::trigger_effect} will be destroyed.
     */
    decoratives_with_trigger_only?: bool,
    from_render_layer?: RenderLayer,
    include_decals?: bool,
    
    /**
     * Soft decoratives are those where {@link DecorativePrototype::grows_through_rail_path | prototype:DecorativePrototype::grows_through_rail_path} is `true`.
     */
    include_soft_decoratives?: bool,
    invoke_decorative_trigger?: bool,
    radius: float,
    to_render_layer?: RenderLayer,
    type: 'destroy-decoratives'
}

interface DifficultySettings {
    
    /**
     * A {@link defines.difficulty_settings.recipe_difficulty | runtime:defines.difficulty_settings.recipe_difficulty}.
     */
    recipe_difficulty: uint8,
    research_queue_setting?: 'always' | 'after-victory' | 'never',
    
    /**
     * A {@link defines.difficulty_settings.technology_difficulty | runtime:defines.difficulty_settings.technology_difficulty}.
     */
    technology_difficulty: uint8,
    
    /**
     * Must be >= 0.001 and <= 1000.
     */
    technology_price_multiplier?: double
}

interface DirectTriggerItem extends TriggerItem{
    filter_enabled?: bool,
    type: 'direct'
}

/**
 * Usually specified by using {@link defines.direction | runtime:defines.direction}.
 */
type Direction = /* North */ 0 | /* Northeast */ 1 | /* East */ 2 | /* Southeast */ 3 | /* South */ 4 | /* Southwest */ 5 | /* West */ 6 | /* Northwest */ 7

interface DirectionShift {
    east?: Vector,
    north?: Vector,
    south?: Vector,
    west?: Vector
}

interface DistanceFromNearestPointArguments {
    maximum_distance?: ConstantNoiseNumber,
    points: NoiseArray,
    x: NoiseNumber,
    y: NoiseNumber
}

interface DoubleSliderStyleSpecification extends SliderStyleSpecificationBase{
    type: 'double_slider_style'
}

interface DropDownStyleSpecification extends BaseStyleSpecification{
    button_style?: ButtonStyleSpecification,
    icon?: Sprite,
    list_box_style?: ListBoxStyleSpecification,
    opened_sound?: Sound,
    selector_and_title_spacing?: int16,
    type: 'dropdown_style'
}

/**
 * When applied to {@link modules | prototype:ModulePrototype}, the resulting effect is a sum of all module effects, multiplied through calculations: `(1 + sum module effects)` or, for productivity `(0 + sum)`.
 * @example
 * ```
 * effect =
 * {
 *   productivity = {bonus = 0.04},
 *   consumption = {bonus = 0.4},
 *   pollution = {bonus = 0.05},
 *   speed = {bonus = -0.05}
 * }
 * ```
 *
 */
interface Effect {
    
    /**
     * Multiplier to energy used during operation (not idle/drain use). The minimum possible sum is -80%.
     */
    consumption?: EffectValue,
    
    /**
     * Multiplier to the pollution factor of an entity's pollution during use. The minimum possible sum is -80%.
     */
    pollution?: EffectValue,
    
    /**
     * Multiplied against work completed, adds to the bonus results of operating. E.g. an extra crafted recipe or immediate research bonus. The minimum possible sum is 0%.
     */
    productivity?: EffectValue,
    
    /**
     * Modifier to crafting speed, research speed, etc. The minimum possible sum is -80%.
     */
    speed?: EffectValue
}

/**
 * A list of {@link module | prototype:ModulePrototype} effects, or just a single effect. Modules with other effects cannot be used on the machine. This means that both effects from modules and from surrounding beacons are restricted to the listed effects. If `allowed_effects` is an empty array, the machine cannot be affected by modules or beacons.
 * @example
 * ```
 * -- Allow all module types
 * allowed_effects = {"speed", "productivity", "consumption", "pollution"}
 * ```
 *
 * @example
 * ```
 * -- Allow only modules that affect speed
 * allowed_effects = "speed"
 * ```
 *
 */
type EffectTypeLimitation = /* Modules that increase or decrease the machine's speed. */ 'speed' | /* Modules that make the machine produce bonus items. */ 'productivity' | /* Modules that increase or decrease the machine's energy consumption. */ 'consumption' | /* Modules that make the machine produce more or less pollution. */ 'pollution' | Array</* Modules that increase or decrease the machine's speed. */ 'speed' | /* Modules that make the machine produce bonus items. */ 'productivity' | /* Modules that increase or decrease the machine's energy consumption. */ 'consumption' | /* Modules that make the machine produce more or less pollution. */ 'pollution'>

interface EffectValue {
    
    /**
     * Precision is ignored beyond two decimals - `0.567` results in `0.56` and means 56% etc. Values can range from `-327.68` to `327.67`. Numbers outside of this range will wrap around.
     */
    bonus?: double
}

/**
 * @example
 * ```
 * energy_source = -- energy source of oil pumpjack
 * {
 *   type = "electric",
 *   emissions_per_minute = 10,
 *   usage_priority = "secondary-input"
 * }
 * ```
 *
 * @example
 * ```
 * energy_source = -- energy source of accumulator
 * {
 *   type = "electric",
 *   buffer_capacity = "5MJ",
 *   usage_priority = "tertiary",
 *   input_flow_limit = "300kW",
 *   output_flow_limit = "300kW"
 * }
 * ```
 *
 * @example
 * ```
 * energy_source = -- energy source of steam engine
 * {
 *   type = "electric",
 *   usage_priority = "secondary-output"
 * }
 * ```
 *
 */
interface ElectricEnergySource extends BaseEnergySource{
    
    /**
     * How much energy this entity can hold.
     */
    buffer_capacity?: Energy,
    
    /**
     * How much energy (per second) will be continuously removed from the energy buffer. In-game, this is shown in the tooltip as "Min. [Minimum] Consumption". Applied as a constant consumption-per-tick, even when the entity has the property {@link active | runtime:LuaEntity::active} set to `false`.
     */
    drain?: Energy,
    
    /**
     * The rate at which energy can be taken, from the network, to refill the energy buffer. `0` means no transfer.
     */
    input_flow_limit?: Energy,
    
    /**
     * The rate at which energy can be provided, to the network, from the energy buffer. `0` means no transfer.
     */
    output_flow_limit?: Energy,
    
    /**
     * This is only loaded, and mandatory if the energy source can be loaded as multiple energy source types.
     */
    type?: 'electric',
    usage_priority: ElectricUsagePriority
}

/**
 * Used to specify priority of energy usage in the {@link electric system | https://wiki.factorio.com/Electric_system}.
 * @example
 * ```
 * usage_priority = "primary-input"
 * ```
 *
 */
type ElectricUsagePriority = /* Used for the most important machines, for example laser turrets. */ 'primary-input' | 'primary-output' | /* Used for all other machines. */ 'secondary-input' | /* Used in steam generators. */ 'secondary-output' | /* As input/output used for accumulators, to collect the overproduction or provide energy when neither primary/secondary output can't. */ 'tertiary' | /* Can only be used by {@link SolarPanelPrototype | prototype:SolarPanelPrototype}, will be ignored otherwise. */ 'solar' | /* Can only be used by {@link LampPrototype | prototype:LampPrototype}, will be ignored otherwise. */ 'lamp'

/**
 * If this is loaded as a single ElementImageSetLayer, it gets used as `base`.
 */
type ElementImageSet = {
    base?: ElementImageSetLayer,
    glow?: ElementImageSetLayer,
    shadow?: ElementImageSetLayer
} | ElementImageSetLayer

/**
 * If this is loaded as a Sprite, it gets used as `center`.
 */
type ElementImageSetLayer = {
    background_blur?: bool,
    background_blur_sigma?: float,
    
    /**
     * Sets `top_border`, `right_border`, `bottom_border` and `left_border`.

Only loaded if `corner_size` is not defined. Only loaded if `type` is `"composition"`.
     */
    border?: int32,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    bottom?: Sprite,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    bottom_border?: int32,
    bottom_outer_border_shift?: int32,
    bottom_tiling?: bool,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    bottom_width?: SpriteSizeType,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    center?: Sprite,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    center_height?: SpriteSizeType,
    center_tiling_horizontal?: bool,
    center_tiling_vertical?: bool,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    center_width?: SpriteSizeType,
    
    /**
     * If this is a tuple, the first member of the tuple is width and the second is height. Otherwise the size is both width and height.

Only loaded if `type` is `"composition"`.
     */
    corner_size?: uint16 | 
[    uint16,
    uint16
],
    custom_horizontal_tiling_sizes?: uint32[],
    
    /**
     * Defines whether the border should be drawn inside the widget, which affects the padding and content size of the widget, or outside of the widget which doesn't affect size. The outer draw type is most commonly used for shadows, glows and insets.
     */
    draw_type?: 'inner' | 'outer',
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    filename?: FileName,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left?: Sprite,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left_border?: int32,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left_bottom?: Sprite,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    left_height?: SpriteSizeType,
    left_outer_border_shift?: int32,
    
    /**
     * Tiling is used to make a side (not corner) texture repeat instead of being stretched.
     */
    left_tiling?: bool,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left_top?: Sprite,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    load_in_minimal_mode?: bool,
    opacity?: double,
    overall_tiling_horizontal_padding?: uint16,
    
    /**
     * Overall tiling is used to make the overall texture repeat instead of being stretched.
     */
    overall_tiling_horizontal_size?: uint16,
    overall_tiling_horizontal_spacing?: uint16,
    overall_tiling_vertical_padding?: uint16,
    overall_tiling_vertical_size?: uint16,
    overall_tiling_vertical_spacing?: uint16,
    
    /**
     * Mandatory if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    position?: MapPosition,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right?: Sprite,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right_border?: int32,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right_bottom?: Sprite,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    right_height?: SpriteSizeType,
    right_outer_border_shift?: int32,
    right_tiling?: bool,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right_top?: Sprite,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    scale?: double,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    stretch_monolith_image_to_size?: bool,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    tint?: Color,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    top?: Sprite,
    
    /**
     * Only loaded if `type` is `"composition"`.
     */
    top_border?: int32,
    top_outer_border_shift?: int32,
    top_tiling?: bool,
    
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    top_width?: SpriteSizeType,
    type?: 'none' | 'composition'
} | Sprite

interface EmptyWidgetStyleSpecificationBase extends BaseStyleSpecification{
    graphical_set?: ElementImageSet,
    type: string
}

interface EnemyEvolutionSettings {
    
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     */
    destroy_factor: double,
    enabled: bool,
    
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     */
    pollution_factor: double,
    
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     */
    time_factor: double
}

interface EnemyExpansionSettings {
    building_coefficient: double,
    enabled: bool,
    enemy_building_influence_radius: uint32,
    friendly_base_influence_radius: uint32,
    
    /**
     * A chunk has to have at most this much percent unbuildable tiles for it to be considered a candidate. This is to avoid chunks full of water to be marked as candidates.
     */
    max_colliding_tiles_coefficient: double,
    max_expansion_cooldown: uint32,
    
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     */
    max_expansion_distance: uint32,
    
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     */
    min_expansion_cooldown: uint32,
    neighbouring_base_chunk_coefficient: double,
    neighbouring_chunk_coefficient: double,
    other_base_coefficient: double,
    settler_group_max_size: uint32,
    
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     */
    settler_group_min_size: uint32
}

/**
 * Specifies an amount of electric energy in joules, or electric energy per time in watts.
 * 
 * Internally, the input in `Watt` or `Joule/second` is always converted into `Joule/tick`, where 1 second is equal to 60 ticks. This means it uses the following formula: `Power in Joule/tick = Power in Watt / 60`. See {@link Power | https://wiki.factorio.com/Units#Power}.
 * 
 * Supported Multipliers:
 * 
 * - `k/K`: 10^3, or 1 000
 * 
 * - `M`: 10^6
 * 
 * - `G`: 10^9
 * 
 * - `T`: 10^12
 * 
 * - `P`: 10^15
 * 
 * - `E`: 10^18
 * 
 * - `Z`: 10^21
 * 
 * - `Y`: 10^24
 * @example
 * ```
 * buffer_capacity = "5MJ"
 * input_flow_limit = "300W"
 * -- the following two lines result in the same power consumption:
 * energy_usage = "60W"
 * energy_usage = "1J" -- not recommended, Watt is convention for power
 * ```
 *
 */
type Energy = string

/**
 * Loaded as one of the {@link BaseEnergySource | prototype:BaseEnergySource} extensions, based on the value of the `type` key.
 */
type EnergySource = /* Loaded when the `type` is `"electric"`. */ ElectricEnergySource | /* Loaded when the `type` is `"burner"`. */ BurnerEnergySource | /* Loaded when the `type` is `"heat"`. */ HeatEnergySource | /* Loaded when the `type` is `"fluid"`. */ FluidEnergySource | /* Loaded when the `type` is `"void"`. */ VoidEnergySource

/**
 * The name of an {@link EntityPrototype | prototype:EntityPrototype}.
 * @example
 * ```
 * "stone-furnace"
 * ```
 *
 * @example
 * ```
 * "stack-inserter"
 * ```
 *
 */
type EntityID = string

/**
 * An array containing the following values.
 * 
 * If an entity is a {@link building | runtime:LuaEntityPrototype::is_building} and has the `"player-creation"` flag set, it is considered for multiple enemy/unit behaviors:
 * 
 * - Autonomous enemy attacks (usually triggered by pollution) can only attack within chunks that contain at least one entity that is both a building and a player-creation.
 * 
 * - Enemy expansion considers entities that are both buildings and player-creations as "enemy" entities that may block expansion.
 * @example
 * ```
 * flags = {"placeable-neutral", "player-creation"}
 * ```
 *
 */
type EntityPrototypeFlags = Array</* Can't be rotated before or after placing. */ 'not-rotatable' | /* Determines the default force when placing entities in the map editor and using the *AUTO* option for the force. */ 'placeable-neutral' | /* Determines the default force when placing entities in the map editor and using the *AUTO* option for the force. */ 'placeable-player' | /* Determines the default force when placing entities in the map editor and using the *AUTO* option for the force. */ 'placeable-enemy' | /* Refers to the fact that most entities are placed on an invisible 'grid' within the world, entities with this flag do not have to line up with this grid (like trees and land-mines). */ 'placeable-off-grid' | /* Makes it possible for the biter AI to target the entity as a distraction in distraction mode {@link by_anything | runtime:defines.distraction.by_anything}. Makes it possible to blueprint, deconstruct, and repair the entity (can be turned off again using the specific flags). Enables smoke to be created automatically when building the entity. If the entity does not have {@link EntityPrototype::map_color | prototype:EntityPrototype::map_color} set, this flag makes the entity appear on the map/minimap with the default color specified in the {@link UtilityConstants | prototype:UtilityConstants}. */ 'player-creation' | /* Uses 45 degree angle increments when selecting direction. */ 'building-direction-8-way' | /* Used to automatically detect the proper direction, if possible. Used by base with the pump, train stop, and train signal. */ 'filter-directions' | /* Fast replace will not apply when building while moving. */ 'fast-replaceable-no-build-while-moving' | /* This is used to specify that the entity breathes air, and so is affected by poison (currently {@link poison capsules | https://wiki.factorio.com/Poison_capsule} are the only source). */ 'breaths-air' | /* Used to specify that the entity can not be 'healed' by repair-packs (or construction robots with repair packs) */ 'not-repairable' | /* The entity does not get drawn on the map. */ 'not-on-map' | /* The entity can not be deconstructed. */ 'not-deconstructable' | /* The entity can not be used in blueprints. */ 'not-blueprintable' | /* Hides the entity from the bonus GUI (button above the map) and from the made in property of recipe tooltips. */ 'hidden' | /* Hides the alt-info of an entity in alt-mode, for example the recipe icon. */ 'hide-alt-info' | /* Do not fast replace over other entity types when building while moving. */ 'fast-replaceable-no-cross-type-while-moving' | 'no-gap-fill-while-building' | /* Do not apply fire stickers to the entity. */ 'not-flammable' | /* Prevents inserters and loaders from taking items from this entity. */ 'no-automated-item-removal' | /* Prevents inserters and loaders from inserting items into this entity. */ 'no-automated-item-insertion' | /* This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype::allow_copy_paste | prototype:EntityPrototype::allow_copy_paste}. Thus, it must be set on the entity via that property. */ 'no-copy-paste' | /* Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges. This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype::selectable_in_game | prototype:EntityPrototype::selectable_in_game}. Thus, it must be set on the entity via that property. */ 'not-selectable-in-game' | /* The entity can't be selected by the {@link upgrade planner | https://wiki.factorio.com/Upgrade_planner}. */ 'not-upgradable' | /* The entity is not shown in the kill statistics. */ 'not-in-kill-statistics' | /* The entity is not shown in the made in property of recipe tooltips. */ 'not-in-made-in'>

/**
 * How far (in tiles) entities should be rendered outside the visible area of the screen.
 */
interface EntityRendererSearchBoxLimits {
    
    /**
     * Min value 4, max value 15. Min value 4 to compensate for tall entities like electric poles.
     */
    bottom: uint8,
    
    /**
     * Min value 6, max value 15. Min value 6 to compensate for shadows.
     */
    left: uint8,
    
    /**
     * Min value 3, max value 15.
     */
    right: uint8,
    
    /**
     * Min value 3, max value 15.
     */
    top: uint8
}

interface EntityTransferTipTrigger {
    count?: uint32,
    transfer?: 'in' | 'out',
    type: 'entity-transfer'
}

/**
 * The name of an {@link EquipmentCategory | prototype:EquipmentCategory}.
 * @example
 * ```
 * "armor"
 * ```
 *
 */
type EquipmentCategoryID = string

/**
 * The name of an {@link EquipmentGridPrototype | prototype:EquipmentGridPrototype}.
 * @example
 * ```
 * "small-equipment-grid"
 * ```
 *
 * @example
 * ```
 * "spidertron-equipment-grid"
 * ```
 *
 */
type EquipmentGridID = string

/**
 * The name of an {@link EquipmentPrototype | prototype:EquipmentPrototype}.
 * @example
 * ```
 * "fusion-reactor-equipment"
 * ```
 *
 * @example
 * ```
 * "exoskeleton-equipment"
 * ```
 *
 */
type EquipmentID = string

/**
 * The shape and dimensions of an equipment module.
 */
interface EquipmentShape {
    height: uint32,
    
    /**
     * Only used when when `type` is `"manual"`. Each inner array is a "position" inside width×height of the equipment. Each positions that is defined is a filled squares of the equipment shape. `{0, 0}` is the upper left corner of the equipment.
     */
    points?: Array<uint32[]>,
    
    /**
     * The shape. When using "manual", `points` must be defined.
     */
    type: 'full' | 'manual',
    width: uint32
}

type ExplosionDefinition = EntityID | {
    name: EntityID,
    offset?: Vector
}

interface FactorioBasisNoiseArguments {
    
    /**
     * `x` and `y` will be multiplied by this value before sampling.
     */
    input_scale?: ConstantNoiseNumber,
    
    /**
     * The output will be multiplied by this value before returning.
     */
    output_scale?: ConstantNoiseNumber,
    
    /**
     * Integer between 0 and 4 294 967 295 (inclusive) used to populate the backing random noise.
     */
    seed0: ConstantNoiseNumber,
    
    /**
     * Integer between 0 and 255 (inclusive) used to provide extra randomness when sampling.
     */
    seed1: ConstantNoiseNumber,
    x: NoiseNumber,
    y: NoiseNumber
}

interface FactorioMultioctaveNoiseArguments {
    
    /**
     * `x` and `y` will be multiplied by this value before sampling.
     */
    input_scale?: ConstantNoiseNumber,
    
    /**
     * How many layers of noise at different scales to sum.
     */
    octaves: ConstantNoiseNumber,
    
    /**
     * The output will be multiplied by this value before returning.
     */
    output_scale?: ConstantNoiseNumber,
    
    /**
     * How strong is each layer compared to the next larger one.
     */
    persistence: ConstantNoiseNumber,
    
    /**
     * Integer between 0 and 4 294 967 295 (inclusive) used to populate the backing random noise.
     */
    seed0: ConstantNoiseNumber,
    
    /**
     * Integer between 0 and 255 (inclusive) used to provide extra randomness when sampling.
     */
    seed1: ConstantNoiseNumber,
    x: NoiseNumber,
    y: NoiseNumber
}

interface FactorioQuickMultioctaveNoiseArguments {
    input_scale?: ConstantNoiseNumber,
    octave_input_scale_multiplier?: ConstantNoiseNumber,
    octave_output_scale_multiplier?: ConstantNoiseNumber,
    octave_seed0_shift?: ConstantNoiseNumber,
    octaves: ConstantNoiseNumber,
    output_scale?: ConstantNoiseNumber,
    seed0: ConstantNoiseNumber,
    seed1: ConstantNoiseNumber,
    x: NoiseNumber,
    y: NoiseNumber
}

interface FastBeltBendTipTrigger {
    count?: uint32,
    type: 'fast-belt-bend'
}

interface FastReplaceTipTrigger {
    count?: uint32,
    match_type_only?: bool,
    source?: EntityID,
    target?: EntityID,
    type: 'fast-replace'
}

/**
 * A slash `"/"` is always used as the directory delimiter. A path always begins with the specification of a root, which can be one of three formats:
 * 
 * - **core**: A path starting with `__core__` will access the resources in the data/core directory, these resources are always accessible regardless of mod specifications.
 * 
 * - **base**: A path starting with `__base__` will access the resources in the base mod in data/base directory. These resources are usually available, as long as the base mod isn't removed/deactivated.
 * 
 * - **mod path**: The format `__<mod-name>__` is placeholder for root of any other mod (mods/<mod-name>), and is accessible as long as the mod is active.
 * @example
 * ```
 * filename = "__base__/graphics/entity/accumulator/accumulator.png"
 * ```
 *
 * @example
 * ```
 * filename = "__a-mod__/animations/assembler.png"
 * ```
 *
 */
type FileName = string

interface FlameThrowerExplosionTriggerDelivery extends TriggerDeliveryItem{
    direction_deviation?: double,
    
    /**
     * Name of a {@link FlameThrowerExplosionPrototype | prototype:FlameThrowerExplosionPrototype}.
     */
    explosion: EntityID,
    projectile_starting_speed?: double,
    speed_deviation?: double,
    starting_distance: double,
    starting_frame_fraciton_deviation?: double,
    type: 'flame-thrower'
}

interface FlowStyleSpecification extends BaseStyleSpecification{
    horizontal_spacing?: int32,
    max_on_row?: int32,
    type: 'flow_style',
    vertical_spacing?: int32
}

/**
 * Used to set the fluid amount an entity can hold, as well as the connection points for pipes leading into and out of the entity.
 * 
 * Entities can have multiple fluidboxes. These can be part of a {@link FluidEnergySource | prototype:FluidEnergySource}, or be specified directly in the entity prototype.
 * 
 * A fluidbox can store only one type of fluid at a time. However, a fluid system (ie. multiple connected fluid boxes) can contain multiple different fluids, see {@link Fluid mixing | https://wiki.factorio.com/Fluid_system#Fluid_mixing}.
 * @example
 * ```
 * fluid_box =
 * {
 *   base_area = 1,
 *   height = 2,
 *   base_level = -1,
 *   pipe_covers = pipecoverspictures(),
 *   pipe_connections =
 *   {
 *     {type = "input-output", position = {-2, 0.5}},
 *     {type = "input-output", position = {2, 0.5}}
 *   },
 *   production_type = "input-output"
 * }
 * ```
 *
 */
interface FluidBox {
    
    /**
     * Must be greater than `0`. The total fluid capacity of the fluid box is `base_area × height × 100`.
     */
    base_area?: double,
    
    /**
     * Base level is the elevation of the invisible fluid box. `0` is ground level.

For example, if the base level is `-1` and the height is `1`, it puts the top of the fluid box at the bottom of a pipe connection with base_level `0` and height `1`. This means fluid "falls" in to the fluid box, and can't get out.

For example, if the base level is `1`, it puts the bottom of the fluid box at the top of a pipe connection with base_level `0` and height `1`. This means fluid "falls" out of the fluid box, but fluids already outside can't get into it.
     */
    base_level?: float,
    
    /**
     * Can be used to specify which fluid is allowed to enter this fluid box. See {@link here | https://forums.factorio.com/viewtopic.php?f=28&t=46302}.
     */
    filter?: FluidID,
    
    /**
     * Must be greater than `0`. The total fluid capacity of the fluid box is `base_area × height × 100`.
     */
    height?: double,
    
    /**
     * Hides the blue input/output arrows and icons at each connection point.
     */
    hide_connection_info?: bool,
    
    /**
     * The maximum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     */
    maximum_temperature?: double,
    
    /**
     * The minimum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     */
    minimum_temperature?: double,
    
    /**
     * Connection points to connect to other fluidboxes. This is also marked as blue arrows in alt mode. Fluid may flow in or out depending on the `type` field of each connection.

Connection points may depend on the direction the entity is facing. These connection points cannot share positions with one another or the connection points of another fluid box belonging to the same entity.

Can't have more than 255 connections.
     */
    pipe_connections: PipeConnectionDefinition[],
    
    /**
     * The pictures to show when another fluid box connects to this one.
     */
    pipe_covers?: Sprite4Way,
    pipe_picture?: Sprite4Way,
    production_type?: ProductionType,
    render_layer?: RenderLayer,
    
    /**
     * Set the secondary draw order for all orientations. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8,
    
    /**
     * Set the secondary draw order for each orientation. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_orders?: FluidBoxSecondaryDrawOrders
}

interface FluidBoxSecondaryDrawOrders {
    east?: int8,
    north?: int8,
    south?: int8,
    west?: int8
}

interface FluidEnergySource extends BaseEnergySource{
    
    /**
     * If set to `true`, the energy source will calculate power based on the fluid's `fuel_value`, else it will calculate based on fluid temperature.
     */
    burns_fluid?: bool,
    
    /**
     * Property is only used when `burns_fluid` is `true` and the fluid has a {@link fuel_value | prototype:FluidPrototype::fuel_value} of `0`, or when `burns_fluid` is `false` and the fluid is at its `default_temperature`.

In those cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
     */
    destroy_non_fuel_fluid?: bool,
    
    /**
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     */
    effectivity?: double,
    
    /**
     * All standard fluid box configurations are acceptable, but the type must be `"input"` or `"input-output"` to function correctly. `scale_fluid_usage = true`, `fluid_usage_per_tick`, or a filter on the fluidbox must be set to be able to calculate the fluid usage of the energy source.
     */
    fluid_box: FluidBox,
    
    /**
     * The number of fluid units the energy source uses per tick. If used with `scale_fluid_usage`, this specifies the maximum. If this value is not set, `scale_energy_usage` is `false` and a fluid box filter is set, the game will attempt to calculate this value from the fluid box filter's fluid's `fuel_value` or `heat_capacity` and the entity's `energy_usage`. If `burns_fluid` is `false`, `maximum_temperature` will also be used. If the attempt of the game to calculate this value fails (`scale_energy_usage` is `false` and a fluid box filter is set), then `scale_energy_usage` will be forced to `true`, to prevent the energy source from being an infinite fluid sink. More context {@link on the forums | https://forums.factorio.com/90613}.
     */
    fluid_usage_per_tick?: double,
    light_flicker?: LightFlickeringDefinition,
    
    /**
     * `0` means unlimited maximum temperature. If this is non-zero while `scale_fluid_usage` is `false` and `fluid_usage_per_tick` is not specified, the game will use this value to calculate `fluid_usage_per_tick`. To do that, the filter on the `fluid_box` must be set.

Only loaded if `burns_fluid` is `false`.
     */
    maximum_temperature?: double,
    
    /**
     * If set to `true`, the energy source will consume as much fluid as required to produce the desired power, otherwise it will consume as much as it is allowed to, wasting any excess.
     */
    scale_fluid_usage?: bool,
    smoke?: SmokeSource[],
    type: 'fluid'
}

/**
 * The name of a {@link FluidPrototype | prototype:FluidPrototype}.
 * @example
 * ```
 * "water"
 * ```
 *
 * @example
 * ```
 * "lubricant"
 * ```
 *
 */
type FluidID = string

/**
 * A fluid ingredient definition.
 * @example
 * ```
 * {type="fluid", name="water", amount=50}
 * ```
 *
 */
interface FluidIngredientPrototype {
    
    /**
     * Can not be `<= 0`.
     */
    amount: double,
    
    /**
     * Amount of this ingredient that should not be included in the fluid consumption statistics. Usually used together with an equal catalyst amount on the "product" of the catalyst in the recipe.

If this FluidIngredientPrototype is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype::ingredients | prototype:RecipePrototype::ingredients} and {@link RecipePrototype::results | prototype:RecipePrototype::results}. See {@link here | https://factorio.com/blog/post/fff-256}.
     */
    catalyst_amount?: double,
    
    /**
     * Used to specify which {@link CraftingMachinePrototype::fluid_boxes | prototype:CraftingMachinePrototype::fluid_boxes} this ingredient should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     */
    fluidbox_index?: uint32,
    
    /**
     * If `temperature` is not set, this sets the expected maximum temperature of the fluid ingredient.
     */
    maximum_temperature?: double,
    
    /**
     * If `temperature` is not set, this sets the expected minimum temperature of the fluid ingredient.
     */
    minimum_temperature?: double,
    
    /**
     * The name of a {@link FluidPrototype | prototype:FluidPrototype}.
     */
    name: FluidID,
    
    /**
     * Sets the expected temperature of the fluid ingredient.
     */
    temperature?: double,
    type: 'fluid'
}

/**
 * A fluid product definition.
 */
interface FluidProductPrototype {
    
    /**
     * Can not be `< 0`.
     */
    amount?: double,
    
    /**
     * Only loaded, and mandatory if `amount` is not defined.

If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     */
    amount_max?: MaterialAmountType,
    
    /**
     * Only loaded, and mandatory if `amount` is not defined.

Can not be `< 0`.
     */
    amount_min?: MaterialAmountType,
    
    /**
     * Amount that should not be affected by productivity modules (not yielded from bonus production) and should not be included in the fluid production statistics.

If this FluidProductPrototype is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype::ingredients | prototype:RecipePrototype::ingredients} and {@link RecipePrototype::results | prototype:RecipePrototype::results}. See {@link here | https://factorio.com/blog/post/fff-256}.
     */
    catalyst_amount?: double,
    
    /**
     * Used to specify which {@link CraftingMachinePrototype::fluid_boxes | prototype:CraftingMachinePrototype::fluid_boxes} this product should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     */
    fluidbox_index?: uint32,
    
    /**
     * The name of a {@link FluidPrototype | prototype:FluidPrototype}.
     */
    name: FluidID,
    
    /**
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.

The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `catalyst_amount` on the product is not shown.

When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     */
    probability?: double,
    
    /**
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     */
    show_details_in_recipe_tooltip?: bool,
    
    /**
     * The temperature of the fluid product.
     */
    temperature?: double,
    type: 'fluid'
}

interface FluidWagonConnectorGraphics {
    load_animations: PumpConnectorGraphics,
    unload_animations: PumpConnectorGraphics
}

interface FollowerRobotLifetimeModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'follower-robot-lifetime',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface FootprintParticle {
    
    /**
     * The name of the particle that should be created when the character walks on the defined tiles.
     */
    particle_name?: ParticleID,
    
    /**
     * The tiles this footprint particle is shown on when the player walks over them.
     */
    tiles: TileID[],
    
    /**
     * Whether this footprint particle should be the default particle that is used for `tiles` that don't have an associated footprint particle.
     */
    use_as_default?: bool
}

interface FootstepTriggerEffectItem extends CreateParticleTriggerEffectItemBase{
    
    /**
     * Can be used to specify multiple CreateParticleTriggerEffectItems. If this property is defined, all properties inherited from CreateParticleTriggerEffectItem are ignored.
     */
    actions?: CreateParticleTriggerEffectItem[],
    tiles: TileID[],
    
    /**
     * When `true`, the trigger(s) defined in `actions` are the default triggers for tiles that don't have an associated footstep particle trigger. (ie. don't show up in one of the "tiles" lists).
     */
    use_as_default?: bool
}

/**
 * @example
 * ```
 * footstep_particle_triggers =
 * {
 *   {
 *     tiles = { "water", "water-shallow" },
 *     type = "create-particle",
 *     particle_name = "water-particle",
 *     [...]
 *   },
 *   {
 *     tiles = { "grass-1", "grass-2" },
 *     type = "create-particle",
 *     particle_name = "grass-particle",
 *     [...]
 *   },
 *   [...]
 * }
 * ```
 *
 * @example
 * ```
 * footstep_particle_triggers =
 * {
 *   {
 *     tiles = { "water", "water-shallow" },
 *     actions =
 *     {
 *       {
 *         type = "create-particle",
 *         particle_name = "water-particle-1",
 *         [...]
 *       },
 *       {
 *         type = "create-particle",
 *         particle_name = "water-particle-2",
 *         [...]
 *       },
 *       [...]
 *     }
 *   },
 *   {
 *     tiles = { "grass-1", "grass-2" },
 *     actions =
 *     {
 *       {
 *         type = "create-particle",
 *         particle_name = "grass-particle-1",
 *         [...]
 *       },
 *       {
 *         type = "create-particle",
 *         particle_name = "grass-particle-2",
 *         [...]
 *       },
 *       [...]
 *     }
 *   }
 * }
 * ```
 *
 */
type FootstepTriggerEffectList = FootstepTriggerEffectItem[]

/**
 * One of the following values:
 */
type ForceCondition = 'all' | 'enemy' | 'ally' | 'friend' | 'not-friend' | 'same' | 'not-same'

interface FrameStyleSpecification extends BaseStyleSpecification{
    background_graphical_set?: ElementImageSet,
    border?: BorderImageSet,
    drag_by_title?: bool,
    graphical_set?: ElementImageSet,
    header_background?: ElementImageSet,
    header_filler_style?: EmptyWidgetStyleSpecification,
    header_flow_style?: HorizontalFlowStyleSpecification,
    horizontal_flow_style?: HorizontalFlowStyleSpecification,
    title_style?: LabelStyleSpecification,
    type: 'frame_style',
    use_header_filler?: bool,
    vertical_flow_style?: VerticalFlowStyleSpecification
}

interface FrequencySizeRichness {
    frequency?: MapGenSize,
    richness?: MapGenSize,
    size?: MapGenSize
}

/**
 * The name of a {@link FuelCategory | prototype:FuelCategory}.
 * @example
 * ```
 * "chemical"
 * ```
 *
 * @example
 * ```
 * "nuclear"
 * ```
 *
 */
type FuelCategoryID = string

interface GameControllerVibrationData {
    
    /**
     * Duration in milliseconds.
     */
    duration?: uint32,
    
    /**
     * Vibration intensity must be between 0 and 1.
     */
    high_frequency_vibration_intensity?: float,
    
    /**
     * Vibration intensity must be between 0 and 1.
     */
    low_frequency_vibration_intensity?: float,
    play_for?: PlayFor
}

interface GateOverRailBuildTipTrigger {
    count?: uint32,
    type: 'gate-over-rail-build'
}

interface GhostTimeToLiveModifier extends SimpleModifier{
    type: 'ghost-time-to-live',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface GiveItemModifier extends BaseModifier{
    
    /**
     * Must be `> 0`.
     */
    count?: ItemCountType,
    item: ItemID,
    type: 'give-item',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface GlowStyleSpecification extends BaseStyleSpecification{
    image_set?: ElementImageSet,
    type: 'glow_style'
}

interface GraphStyleSpecification extends BaseStyleSpecification{
    background_color?: Color,
    data_line_highlight_distance?: uint32,
    graph_right_margin?: uint32,
    graph_top_margin?: uint32,
    grid_lines_color?: Color,
    guide_lines_color?: Color,
    horizontal_label_style?: LabelStyleSpecification,
    horizontal_labels_margin?: uint32,
    line_colors?: Color[],
    minimal_horizontal_label_spacing?: uint32,
    minimal_vertical_label_spacing?: uint32,
    selection_dot_radius?: uint32,
    type: 'graph_style',
    vertical_label_style?: LabelStyleSpecification,
    vertical_labels_margin?: uint32
}

interface GroupAttackTipTrigger {
    count?: uint32,
    type: 'group-attack'
}

interface GunShift4Way {
    east?: Vector,
    north: Vector,
    south?: Vector,
    west?: Vector
}

interface GunSpeedModifier extends BaseModifier{
    
    /**
     * Name of the {@link AmmoCategory | prototype:AmmoCategory} that is affected.
     */
    ammo_category: AmmoCategoryID,
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    
    /**
     * Modification value, which will be added to the current gun speed modifier upon researching.
     */
    modifier: double,
    type: 'gun-speed',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

/**
 * Used to specify heat capacity properties without a {@link heat energy source | prototype:HeatEnergySource}.
 */
interface HeatBuffer {
    
    /**
     * May contain up to 32 connections.
     */
    connections?: HeatConnection[],
    default_temperature?: double,
    heat_glow?: Sprite4Way,
    heat_picture?: Sprite4Way,
    heat_pipe_covers?: Sprite4Way,
    
    /**
     * Must be >= `default_temperature`.
     */
    max_temperature: double,
    max_transfer: Energy,
    min_temperature_gradient?: double,
    
    /**
     * Must be >= `default_temperature` and <= `max_temperature`.
     */
    min_working_temperature?: double,
    minimum_glow_temperature?: float,
    pipe_covers?: Sprite4Way,
    specific_heat: Energy
}

/**
 * Defines the connections for {@link HeatEnergySource | prototype:HeatEnergySource} and {@link HeatBuffer | prototype:HeatBuffer}.
 */
interface HeatConnection {
    
    /**
     * The "outward" direction of this heat connection. For a connection to succeed, the other heat connection must face the opposite direction (a south-facing connection needs a north-facing connection to succeed). A connection rotates with the entity.
     */
    direction: Direction,
    
    /**
     * The location of the heat pipe connection, relative to the center of the entity in the north-facing direction.
     */
    position: MapPosition
}

interface HeatEnergySource extends BaseEnergySource{
    
    /**
     * May contain up to 32 connections.
     */
    connections?: HeatConnection[],
    default_temperature?: double,
    
    /**
     * Heat energy sources do not support producing pollution.
     */
    emissions_per_minute?: double,
    heat_glow?: Sprite4Way,
    heat_picture?: Sprite4Way,
    heat_pipe_covers?: Sprite4Way,
    
    /**
     * Must be >= `default_temperature`.
     */
    max_temperature: double,
    max_transfer: Energy,
    min_temperature_gradient?: double,
    
    /**
     * Must be >= `default_temperature` and <= `max_temperature`.
     */
    min_working_temperature?: double,
    minimum_glow_temperature?: float,
    pipe_covers?: Sprite4Way,
    specific_heat: Energy,
    type: 'heat'
}

type HorizontalAlign = 'left' | 'center' | 'right'

interface HorizontalFlowStyleSpecification extends BaseStyleSpecification{
    horizontal_spacing?: int32,
    type: 'horizontal_flow_style'
}

interface HorizontalScrollBarStyleSpecification extends ScrollBarStyleSpecification{
    type: 'horizontal_scrollbar_style'
}

/**
 * Icon layering follows the following rules:
 * 
 * - The rendering order of the individual icons follows the array order: Later added icons (higher index) are drawn on top of previously added icons (lower index).
 * 
 * - Only the first icon layer will display a shadow.
 * 
 * - When the final icon is displayed with transparency (e.g. a faded out alert), the icon layer overlap may look {@link undesirable | https://forums.factorio.com/viewtopic.php?p=575844#p575844}.
 * 
 * - The final combination of icons will always be resized in GUI based on the first icon layer's size, but won't be resized when displayed on machines in alt-mode. For example: recipe first icon layer is size 128, scale 1, the icon group will be displayed at resolution /4 to fit the 32px GUI boxes, but will be displayed 4 times as large on buildings.
 * 
 * - Shift values are based on final size (`icon_size * scale`) of the first icon layer.
 * @example
 * ```
 * -- one icon layer
 * {
 *   icon = "__base__/graphics/icons/fluid/heavy-oil.png",
 *   icon_size = 64,
 *   scale = 0.5,
 *   shift = {4, -8}
 * }
 * ```
 *
 * @example
 * ```
 * -- Layered icon, with size defined outside of layers
 * icon_size = 32,
 * icons = {
 *   {
 *     icon = "__base__/graphics/icons/fluid/barreling/empty-barrel.png"
 *   },
 *   {
 *     icon = "__base__/graphics/icons/fluid/barreling/barrel-side-mask.png",
 *     tint = { a = 0.75,  b = 0, g = 0, r = 0 }
 *   },
 *   {
 *     icon = "__base__/graphics/icons/fluid/barreling/barrel-hoop-top-mask.png",
 *     tint = { a = 0.75, b = 0.5, g = 0.5, r = 0.5 }
 *   }
 * }
 * ```
 *
 * @example
 * ```
 * -- Layered icon, with size defined per layer
 * icons = {
 *   {
 *     icon = "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
 *     icon_size = 32
 *   },
 *   {
 *     icon = "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
 *     icon_size = 32,
 *     tint = { a = 0.75, b = 0, g = 0, r = 0 }
 *   },
 *   {
 *     icon = "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
 *     icon_size = 32,
 *     tint = { a = 0.75, b = 0.5, g = 0.5, r = 0.5 }
 *   },
 *   {
 *     icon = "__base__/graphics/icons/fluid/crude-oil.png",
 *     icon_size = 32,
 *     scale = 0.5,
 *     shift = {7, 8 }
 *   }
 * }
 * ```
 *
 */
interface IconData {
    
    /**
     * Path to the icon file.
     */
    icon: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon.

Mandatory if `icon_size` is not specified outside of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Defaults to `32/icon_size` for items and recipes, and `256/icon_size` for technologies.

Specifies the scale of the icon on the GUI scale. A scale of `2` means that the icon will be two times bigger on screen (and thus more pixelated).
     */
    scale?: double,
    
    /**
     * Used to offset the icon "layer" from the overall icon. The shift is applied from the center (so negative shifts are left and up, respectively). Shift values are based on final size (`icon_size * scale`) of the first icon.
     */
    shift?: Vector,
    
    /**
     * The tint to apply to the icon.
     */
    tint?: Color
}

/**
 * Icons of reduced size will be used at decreased scale. 0 or 1 mipmaps is a single image. The file must contain half-size images with a geometric-ratio, for each mipmap level. Each next level is aligned to the upper-left corner, with no extra padding. Example sequence: `128x128@(0,0)`, `64x64@(128,0)`, `32x32@(192,0)` is three mipmaps.
 * 
 * See {@link here | https://factorio.com/blog/post/fff-291} for more about the visual effects of icon mipmaps.
 */
type IconMipMapType = uint8

/**
 * @example
 * ```
 * data.raw["gui-style"]["default"]["stretchy-sprite"] = {
 *   type = "image_style",
 *   vertically_stretchable = "on",
 *   horizontally_stretchable = "on",
 *   stretch_image_to_widget_size = true,
 * }
 * ```
 *
 */
interface ImageStyleSpecification extends BaseStyleSpecification{
    graphical_set?: ElementImageSet,
    stretch_image_to_widget_size?: bool,
    type: 'image_style'
}

/**
 * Defaults to loading ingredients as items. This allows {@link ItemIngredientPrototype | prototype:ItemIngredientPrototype} to load in a shorthand array format.
 * @example
 * ```
 * {"electronic-circuit", 5} -- short format used for item ingredients
 * ```
 *
 * @example
 * ```
 * {type="item", name="steel-plate", amount=8} -- long format used for item ingredients
 * ```
 *
 * @example
 * ```
 * {type="fluid", name="water", amount=50} -- fluid ingredients must use the long format
 * ```
 *
 */
type IngredientPrototype = /* Loaded when the `type` is `"item"`. */ ItemIngredientPrototype | /* Loaded when the `type` is `"fluid"`. */ FluidIngredientPrototype

interface InsertItemTriggerEffectItem extends TriggerEffectItem{
    count?: uint32,
    
    /**
     * Name of the {@link ItemPrototype | prototype:ItemPrototype} that should be created.
     */
    item: ItemID,
    type: 'insert-item'
}

interface InserterStackSizeBonusModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'inserter-stack-size-bonus',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface InstantTriggerDelivery extends TriggerDeliveryItem{
    type: 'instant'
}

interface InterruptibleSound {
    fade_ticks?: uint32,
    sound: Sound
}

interface InvokeTileEffectTriggerEffectItem extends TriggerEffectItem{
    tile_collision_mask?: CollisionMask,
    type: 'invoke-tile-trigger'
}

type ItemCountType = uint32

/**
 * The name of an {@link ItemGroup | prototype:ItemGroup}.
 * @example
 * ```
 * "logistics"
 * ```
 *
 * @example
 * ```
 * "production"
 * ```
 *
 */
type ItemGroupID = string

/**
 * The name of an {@link ItemPrototype | prototype:ItemPrototype}.
 * @example
 * ```
 * "iron-plate"
 * ```
 *
 * @example
 * ```
 * "blueprint-book"
 * ```
 *
 */
type ItemID = string

/**
 * An item ingredient definition. It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the item name and the second is the amount.
 * @example
 * ```
 * {type="item", name="steel-plate", amount=8}
 * ```
 *
 * @example
 * ```
 * {"iron-plate", 12}
 * ```
 *
 */
type ItemIngredientPrototype = {
    amount: uint16,
    
    /**
     * Amount of this ingredient that should not be included in the item consumption statistics. Usually used together with an equal catalyst amount on the "product" of the catalyst in the recipe.

If this fluid is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype::ingredients | prototype:RecipePrototype::ingredients} and {@link RecipePrototype::results | prototype:RecipePrototype::results}. See {@link here | https://factorio.com/blog/post/fff-256}.
     */
    catalyst_amount?: uint16,
    name: ItemID,
    type?: 'item'
} | 
[    ItemID,
    uint16
]

/**
 * An item product definition. It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the item name and the second is the amount.
 */
type ItemProductPrototype = {
    amount?: uint16,
    
    /**
     * Only loaded, and mandatory if `amount` is not defined.

If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     */
    amount_max?: uint16,
    
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     */
    amount_min?: uint16,
    
    /**
     * Amount that should not be affected by productivity modules (not yielded from bonus production) and should not be included in the item production statistics.

If this item is used in a recipe, the `catalyst_amount` is calculated automatically based on the {@link RecipePrototype::ingredients | prototype:RecipePrototype::ingredients} and {@link RecipePrototype::results | prototype:RecipePrototype::results}. See {@link here | https://factorio.com/blog/post/fff-256}.
     */
    catalyst_amount?: uint16,
    
    /**
     * The name of an {@link ItemPrototype | prototype:ItemPrototype}.
     */
    name: ItemID,
    
    /**
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.

The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `catalyst_amount` on the product is not shown.

When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     */
    probability?: double,
    
    /**
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     */
    show_details_in_recipe_tooltip?: bool,
    type?: 'item'
} | 
[    ItemID,
    uint16
]

/**
 * An array containing the following values.
 */
type ItemPrototypeFlags = Array</* Whether the logistics areas of roboports should be drawn when holding this item. Used for example by the {@link deconstruction planner | https://wiki.factorio.com/Deconstruction_planner}. */ 'draw-logistic-overlay' | /* Item will not appear in lists of all items such as those for logistics requests, filters, etc. */ 'hidden' | /* Always show the item in selection lists (item filter, logistic request etc.) even when locked recipe for that item is present. */ 'always-show' | /* Item will not appear in the bonus gui. */ 'hide-from-bonus-gui' | /* Item will not appear in the tooltips shown when hovering over a burner inventory with the fuel category the item is in. */ 'hide-from-fuel-tooltip' | /* The item can never be stacked. Additionally, the item does not show an item count when in the cursor. This also prevents the item from stacking in assembling machine input slots, which otherwise can exceed the item stack size if required by the recipe. */ 'not-stackable' | /* Must be set on {@link ItemWithInventoryPrototype | prototype:ItemWithInventoryPrototype} when the item should act as an extension to the inventory that it is placed in. Does nothing for other item types. */ 'can-extend-inventory' | /* Item will be preferred by construction bots when building the entity specified by the item's {@link place_result | prototype:ItemPrototype::place_result}. */ 'primary-place-result' | /* Only works for {@link SelectionToolPrototype | prototype:SelectionToolPrototype} and derived classes. Corresponds to the runtime {@link on_mod_item_opened | runtime:on_mod_item_opened} event. */ 'mod-openable' | /* Item is deleted when removed from the cursor by pressing `Q` ("clear cursor"). Used for example by the copy/paste tools. */ 'only-in-cursor' | /* Item is able to be spawned by a {@link ShortcutPrototype | prototype:ShortcutPrototype} or {@link CustomInputPrototype | prototype:CustomInputPrototype}. */ 'spawnable'>

type ItemStackIndex = uint16

/**
 * The name of an {@link ItemSubGroup | prototype:ItemSubGroup}.
 * @example
 * ```
 * "capsule"
 * ```
 *
 * @example
 * ```
 * "military-equipment"
 * ```
 *
 */
type ItemSubGroupID = string

/**
 * Item that when placed creates this entity/tile.
 * @example
 * ```
 * {item = "iron-chest", count = 1}
 * ```
 *
 */
interface ItemToPlace {
    
    /**
     * How many items are used to place one of this entity/tile. Can't be larger than the stack size of the item.
     */
    count: uint32,
    
    /**
     * The item used to place this entity/tile.
     */
    item: ItemID
}

interface LabelStyleSpecification extends BaseStyleSpecification{
    clicked_font_color?: Color,
    disabled_font_color?: Color,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string,
    font_color?: Color,
    game_controller_hovered_font_color?: Color,
    hovered_font_color?: Color,
    rich_text_highlight_error_color?: Color,
    rich_text_highlight_ok_color?: Color,
    rich_text_highlight_warning_color?: Color,
    rich_text_setting?: RichTextSetting,
    single_line?: bool,
    type: 'label_style',
    underlined?: bool
}

interface LaboratoryProductivityModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'laboratory-productivity',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface LaboratorySpeedModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'laboratory-speed',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

type LayeredSound = {
    layers: Sound[]
} | Sound

/**
 * Specifies a light source. This is loaded either as a single light source or as an array of light sources.
 * @example
 * ```
 * -- The light of the orange state of the rail signal
 * orange_light = {intensity = 0.2, size = 4, color={r=1, g=0.5}}
 * ```
 *
 * @example
 * ```
 * -- The front lights of the car
 * light =
 * {
 *   {
 *     type = "oriented",
 *     minimum_darkness = 0.3,
 *     picture =
 *     {
 *       filename = "__core__/graphics/light-cone.png",
 *       priority = "extra-high",
 *       flags = { "light" },
 *       scale = 2,
 *       width = 200,
 *       height = 200
 *     },
 *     shift = {-0.6, -14},
 *     size = 2,
 *     intensity = 0.6,
 *     color = {r = 0.92, g = 0.77, b = 0.3}
 *   },
 *   {
 *     type = "oriented",
 *     minimum_darkness = 0.3,
 *     picture =
 *     {
 *       filename = "__core__/graphics/light-cone.png",
 *       priority = "extra-high",
 *       flags = { "light" },
 *       scale = 2,
 *       width = 200,
 *       height = 200
 *     },
 *     shift = {0.6, -14},
 *     size = 2,
 *     intensity = 0.6,
 *     color = {r = 0.92, g = 0.77, b = 0.3}
 *   }
 * }
 * ```
 *
 */
type LightDefinition = {
    add_perspective?: bool,
    
    /**
     * Color of the light.
     */
    color?: Color,
    
    /**
     * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
     */
    intensity: float,
    minimum_darkness?: float,
    
    /**
     * Only loaded, and mandatory if `type` is `"oriented"`.
     */
    picture?: Sprite,
    
    /**
     * Only loaded if `type` is `"oriented"`.
     */
    rotation_shift?: RealOrientation,
    shift?: Vector,
    
    /**
     * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
     */
    size: float,
    source_orientation_offset?: RealOrientation,
    type?: 'basic' | 'oriented'
} | Array<{
    add_perspective?: bool,
    
    /**
     * Color of the light.
     */
    color?: Color,
    
    /**
     * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
     */
    intensity: float,
    minimum_darkness?: float,
    
    /**
     * Only loaded, and mandatory if `type` is `"oriented"`.
     */
    picture?: Sprite,
    
    /**
     * Only loaded if `type` is `"oriented"`.
     */
    rotation_shift?: RealOrientation,
    shift?: Vector,
    
    /**
     * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
     */
    size: float,
    source_orientation_offset?: RealOrientation,
    type?: 'basic' | 'oriented'
}>

/**
 * Specifies the light flicker. Note that this defaults to "showing a white light" instead of the usually expected "showing nothing".
 */
interface LightFlickeringDefinition {
    border_fix_speed?: float,
    
    /**
     * Color of the light.
     */
    color?: Color,
    derivation_change_deviation?: float,
    derivation_change_frequency?: float,
    light_intensity_to_size_coefficient?: float,
    
    /**
     * Brightness of the light in the range [0, 1] where 0 is no light and 1 is the maximum light.
     */
    maximum_intensity?: float,
    
    /**
     * Brightness of the light in the range [0, 1] where 0 is no light and 1 is the maximum light.
     */
    minimum_intensity?: float,
    
    /**
     * The radius of the light in tiles. Note, that the light gets darker near the edges, so the effective size of the light seems to be smaller.
     */
    minimum_light_size?: float
}

interface LimitChestTipTrigger {
    count?: uint32,
    type: 'limit-chest'
}

interface LineStyleSpecification extends BaseStyleSpecification{
    border?: BorderImageSet,
    type: 'line_style'
}

/**
 * @example
 * ```
 * action =
 * {
 *   type = "line",
 *   range = 25,
 *   width = 0.5,
 * 
 *   range_effects =
 *   {
 *     type = "create-explosion",
 *     entity_name = "railgun-beam"
 *   },
 * 
 *   action_delivery =
 *   {
 *     type = "instant",
 *     target_effects =
 *     {
 *       type = "damage",
 *       damage = { amount = 100, type = "physical"}
 *     }
 *   }
 * }
 * ```
 *
 */
interface LineTriggerItem extends TriggerItem{
    range: double,
    range_effects?: TriggerEffect,
    type: 'line',
    width: double
}

interface LinkedBeltStructure {
    back_patch?: Sprite4Way,
    direction_in: Sprite4Way,
    direction_in_side_loading?: Sprite4Way,
    direction_out: Sprite4Way,
    direction_out_side_loading?: Sprite4Way,
    front_patch?: Sprite4Way
}

/**
 * The internal name of a game control (key binding).
 */
type LinkedGameControl = 'action-bar-select-page-1' | 'action-bar-select-page-10' | 'action-bar-select-page-2' | 'action-bar-select-page-3' | 'action-bar-select-page-4' | 'action-bar-select-page-5' | 'action-bar-select-page-6' | 'action-bar-select-page-7' | 'action-bar-select-page-8' | 'action-bar-select-page-9' | 'activate-tooltip' | 'add-station' | 'add-temporary-station' | 'alt-zoom-in' | 'alt-zoom-out' | 'build' | 'build-ghost' | 'build-with-obstacle-avoidance' | 'cancel-craft' | 'cancel-craft-5' | 'cancel-craft-all' | 'clear-cursor' | 'confirm-gui' | 'confirm-message' | 'connect-train' | 'controller-gui-crafting-tab' | 'controller-gui-logistics-tab' | 'copy' | 'copy-entity-settings' | 'craft' | 'craft-5' | 'craft-all' | 'cursor-split' | 'cut' | 'cycle-blueprint-backwards' | 'cycle-blueprint-forwards' | 'cycle-clipboard-backwards' | 'cycle-clipboard-forwards' | 'debug-reset-zoom' | 'debug-reset-zoom-2x' | 'debug-toggle-atlas-gui' | 'debug-toggle-basic' | 'debug-toggle-debug-settings' | 'decrease-ui-scale' | 'disconnect-train' | 'drag-map' | 'drop-cursor' | 'editor-clone-item' | 'editor-delete-item' | 'editor-next-variation' | 'editor-previous-variation' | 'editor-remove-scripting-object' | 'editor-reset-speed' | 'editor-set-clone-brush-destination' | 'editor-set-clone-brush-source' | 'editor-speed-down' | 'editor-speed-up' | 'editor-switch-to-surface' | 'editor-tick-once' | 'editor-toggle-pause' | 'fast-entity-split' | 'fast-entity-transfer' | 'flip-blueprint-horizontal' | 'flip-blueprint-vertical' | 'focus-search' | 'increase-ui-scale' | 'inventory-split' | 'inventory-transfer' | 'larger-terrain-building-area' | 'logistic-networks' | 'mine' | 'move-down' | 'move-left' | 'move-right' | 'move-up' | 'next-active-quick-bar' | 'next-player-in-replay' | 'next-weapon' | 'open-character-gui' | 'open-gui' | 'open-item' | 'open-prototype-explorer-gui' | 'open-prototypes-gui' | 'open-technology-gui' | 'open-trains-gui' | 'order-to-follow' | 'paste' | 'paste-entity-settings' | 'pause-game' | 'pick-item' | 'pick-items' | 'place-in-chat' | 'place-ping' | 'previous-active-quick-bar' | 'previous-mod' | 'previous-technology' | 'production-statistics' | 'quick-bar-button-1' | 'quick-bar-button-1-secondary' | 'quick-bar-button-10' | 'quick-bar-button-10-secondary' | 'quick-bar-button-2' | 'quick-bar-button-2-secondary' | 'quick-bar-button-3' | 'quick-bar-button-3-secondary' | 'quick-bar-button-4' | 'quick-bar-button-4-secondary' | 'quick-bar-button-5' | 'quick-bar-button-5-secondary' | 'quick-bar-button-6' | 'quick-bar-button-6-secondary' | 'quick-bar-button-7' | 'quick-bar-button-7-secondary' | 'quick-bar-button-8' | 'quick-bar-button-8-secondary' | 'quick-bar-button-9' | 'quick-bar-button-9-secondary' | 'remove-pole-cables' | 'reset-ui-scale' | 'reverse-rotate' | 'reverse-select' | 'alt-reverse-select' | 'rotate' | 'rotate-active-quick-bars' | 'select-for-blueprint' | 'select-for-cancel-deconstruct' | 'shoot-enemy' | 'shoot-selected' | 'show-info' | 'smaller-terrain-building-area' | 'smart-pipette' | 'stack-split' | 'stack-transfer' | 'toggle-blueprint-library' | 'toggle-console' | 'toggle-driving' | 'toggle-filter' | 'toggle-gui-debug' | 'toggle-gui-glows' | 'toggle-gui-shadows' | 'toggle-gui-style-view' | 'toggle-map' | 'toggle-menu' | 'undo' | 'zoom-in' | 'zoom-out'

interface ListBoxStyleSpecification extends BaseStyleSpecification{
    item_style?: ButtonStyleSpecification,
    scroll_pane_style?: ScrollPaneStyleSpecification,
    type: 'list_box_style'
}

interface LoaderStructure {
    back_patch?: Sprite4Way,
    direction_in: Sprite4Way,
    direction_out: Sprite4Way,
    front_patch?: Sprite4Way
}

/**
 * Localised strings are a way to support translation of in-game text. They offer a language-independent code representation of the text that should be shown to players.
 * 
 * It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
 * 
 * The key identifies the string template. For example, `"gui-alert-tooltip.attack"` (for the template `"__1__ objects are being damaged"`; see the file `data/core/locale/en.cfg`). In the settings and prototype stages, this key cannot be longer than 200 characters.
 * 
 * The template can contain placeholders such as `__1__` or `__2__`. These will be replaced by the respective parameter in the LocalisedString. The parameters themselves can be other localised strings, which will be processed recursively in the same fashion. Localised strings can not be recursed deeper than 20 levels and can not have more than 20 parameters.
 * 
 * There are two special flags for the localised string, indicated by the key being a particular string. First, if the key is the empty string (`""`), then all parameters will be concatenated (after processing, if any are localised strings themselves). Second, if the key is a question mark (`"?"`), then the first valid parameter will be used. A parameter can be invalid if its name doesn't match any string template. If no parameters are valid, the last one is returned. This is useful to implement a fallback for missing locale templates.
 * 
 * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table) which will not be translated, as well as a number or boolean, which will be converted to their textual representation.
 * 
 * See {@link Tutorial:Localisation | https://wiki.factorio.com/Tutorial:Localisation} for more information.
 * @example
 * ```
 * -- In the English translation, this will print "No ammo"; in the Czech translation, it will print "Bez munice":
 * game.player.print({"description.no-ammo"})
 * -- The "description.no-ammo" template contains no placeholders, so no further parameters are necessary.
 * ```
 *
 * @example
 * ```
 * -- In the English translation, this will print "Durability: 5/9"; in the Japanese one, it will print "耐久度: 5/9":
 * game.player.print({"description.durability", 5, 9})
 * ```
 *
 * @example
 * ```
 * -- This will print "hello" in all translations:
 * game.player.print({"", "hello"})
 * ```
 *
 * @example
 * ```
 * -- This will print "Iron plate: 60" in the English translation and "Eisenplatte: 60" in the German translation.
 * game.print({"", {"item-name.iron-plate"}, ": ", 60})
 * ```
 *
 * @example
 * ```
 * -- As an example of a localised string with fallback, consider this:
 * {"?", {"", {"entity-description.furnace"}, "\n"}, {"item-description.furnace"}, "optional fallback"}
 * -- If "entity-description.furnace" exists, it is concatenated with "\n" and returned. Otherwise, if
 * -- "item-description.furnace" exists, it is returned as-is. Otherwise, "optional fallback" is returned. If this
 * -- value wasn't specified, the translation result would be "Unknown key: 'item-description.furnace'".
 * ```
 *
 */
type LocalisedString = string | double | bool | LocalisedString[]

/**
 * The items generated when an {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype} is killed.
 */
interface LootItem {
    
    /**
     * Must be `> 0`.
     */
    count_max?: double,
    count_min?: double,
    
    /**
     * The item to spawn.
     */
    item: ItemID,
    
    /**
     * `0` is 0% and `1` is 100%. Must be `> 0`.
     */
    probability?: double
}

interface LowPowerTipTrigger {
    count?: uint32,
    type: 'low-power'
}

interface ManualTransferTipTrigger {
    count?: uint32,
    type: 'manual-transfer'
}

interface ManualWireDragTipTrigger {
    count?: uint32,
    type: 'manual-wire-drag'
}

interface MapEditorConstants {
    cliff_editor_remove_cliffs_color: Color,
    clone_editor_brush_cursor_preview_tint: Color,
    clone_editor_brush_destination_color: Color,
    clone_editor_brush_source_color: Color,
    clone_editor_brush_world_preview_tint: Color,
    clone_editor_copy_destination_allowed_color: Color,
    clone_editor_copy_destination_not_allowed_color: Color,
    clone_editor_copy_source_color: Color,
    decorative_editor_selection_preview_radius: uint8,
    decorative_editor_selection_preview_tint: Color,
    force_editor_select_area_color: Color,
    script_editor_drag_area_color: Color,
    script_editor_select_area_color: Color,
    tile_editor_area_selection_color: Color,
    tile_editor_selection_preview_radius: uint8,
    tile_editor_selection_preview_tint: Color
}

interface MapGenPreset {
    
    /**
     * If any setting is not set, it will use the default values.
     */
    advanced_settings?: AdvancedMapGenSettings,
    
    /**
     * If any setting is not set, it will use the default values.
     */
    basic_settings?: MapGenSettings,
    
    /**
     * Whether this is the default preset. If `true`, this preset may not have any other properties besides this and order.

If no MapGenPreset has `default = true`, the preset selector will have a blank preset label, with default settings. The "blank" preset goes away when another preset is selected.
     */
    default?: bool,
    
    /**
     * Specifies the ordering in the {@link map generator GUI | https://wiki.factorio.com/Map_generator}.
     */
    order: Order
}

interface MapGenPresetDifficultySettings {
    
    /**
     * A {@link defines.difficulty_settings.recipe_difficulty | runtime:defines.difficulty_settings.recipe_difficulty}.
     */
    recipe_difficulty?: uint8,
    research_queue_setting?: 'always' | 'after-victory' | 'never',
    
    /**
     * A {@link defines.difficulty_settings.technology_difficulty | runtime:defines.difficulty_settings.technology_difficulty}.
     */
    technology_difficulty?: uint8,
    technology_price_multiplier?: double
}

interface MapGenPresetEnemyEvolutionSettings {
    
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     */
    destroy_factor?: double,
    enabled?: bool,
    
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     */
    pollution_factor?: double,
    
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     */
    time_factor?: double
}

interface MapGenPresetEnemyExpansionSettings {
    enabled?: bool,
    
    /**
     * In ticks.
     */
    max_expansion_cooldown?: uint32,
    
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     */
    max_expansion_distance?: uint32,
    
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     */
    min_expansion_cooldown?: uint32,
    settler_group_max_size?: uint32,
    
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     */
    settler_group_min_size?: uint32
}

/**
 * The pollution settings, the values are for 60 ticks (1 second).
 */
interface MapGenPresetPollutionSettings {
    
    /**
     * Must be >= 0.1. Also known as absorption modifier and previously dissipation rate.
     */
    ageing?: double,
    
    /**
     * Must be <= 0.25. Amount that is diffused to neighboring chunks.
     */
    diffusion_ratio?: double,
    enabled?: bool,
    
    /**
     * Must be >= 0.1.
     */
    enemy_attack_pollution_consumption_modifier?: double,
    min_pollution_to_damage_trees?: double,
    pollution_restored_per_tree_damage?: double
}

interface MapGenSettings {
    autoplace_controls?: {[key: string]: FrequencySizeRichness},
    
    /**
     * Each setting in this table maps the string type to the settings for that type.
     */
    autoplace_settings?: {[key: string]: AutoplaceSettings},
    cliff_settings?: CliffPlacementSettings,
    
    /**
     * Whether undefined `autoplace_controls` should fall back to the default controls or not.
     */
    default_enable_all_autoplace_controls?: bool,
    
    /**
     * Height of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     */
    height?: uint32,
    peaceful_mode?: bool,
    
    /**
     * Map of property name (`"elevation"`, etc) to name of noise expression that will provide it. Entries may be omitted. A notable usage is changing autoplace behavior of an entity based on the preset, which cannot be read from a noise expression.
     */
    property_expression_names?: {[key: string]: string | bool | double},
    
    /**
     * Read by the game, but not used or set in the GUI.
     */
    seed?: uint32,
    
    /**
     * Size of the starting area. The starting area only effects enemy placement, and has no effect on resources.
     */
    starting_area?: MapGenSize,
    
    /**
     * Array of the positions of the starting areas.
     */
    starting_points?: MapPosition[],
    
    /**
     * This is the inverse of "water scale" in the map generator GUI. So a water scale that shows as 50% in the GUI is a value of `1/0.5 = 2` for `terrain_segmentation`.
     */
    terrain_segmentation?: MapGenSize,
    
    /**
     * Shown as water coverage in the map generator GUI.
     */
    water?: MapGenSize,
    
    /**
     * Width of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     */
    width?: uint32
}

/**
 * A floating point number specifying an amount.
 * 
 * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number:
 * 
 * Each of the values in a triplet (such as "low", "small", and "poor") are synonymous. In-game the values can be set from `0.166` to `6` via the GUI (respective to the percentages), while `0` is used to disable the autoplace control.
 */
type MapGenSize = /* Specifying a map gen dimension. */ float | /* equivalent to `0`. */ 'none' | /* equivalent to `1/2`. */ 'very-low' | /* equivalent to `1/2`. */ 'very-small' | /* equivalent to `1/2`. */ 'very-poor' | /* equivalent to `1/sqrt(2)`. */ 'low' | /* equivalent to `1/sqrt(2)`. */ 'small' | /* equivalent to `1/sqrt(2)`. */ 'poor' | /* equivalent to `1`. */ 'normal' | /* equivalent to `1`. */ 'medium' | /* equivalent to `1`. */ 'regular' | /* equivalent to `sqrt(2)`. */ 'high' | /* equivalent to `sqrt(2)`. */ 'big' | /* equivalent to `sqrt(2)`. */ 'good' | /* equivalent to `2`. */ 'very-high' | /* equivalent to `2`. */ 'very-big' | /* equivalent to `2`. */ 'very-good'

/**
 * Coordinates of a tile in a map. Positive x goes towards east, positive y goes towards south, and x is the first dimension in the array format.
 * 
 * The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles.
 * @example
 * ```
 * -- Explicit definition
 * {x = 5.5, y = 2}
 * {y = 2.25, x = 5.125}
 * ```
 *
 * @example
 * ```
 * -- Shorthand
 * {1.625, 2.375}
 * ```
 *
 */
type MapPosition = {
    x: double,
    y: double
} | 
[    double,
    double
]

type MaterialAmountType = double

interface MaxFailedAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier{
    type: 'max-failed-attempts-per-tick-per-construction-queue',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier{
    type: 'max-successful-attempts-per-tick-per-construction-queue',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface MaximumFollowingRobotsCountModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'maximum-following-robots-count',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

/**
 * The mining properties of objects. For formulas for the mining time, see {@link mining | https://wiki.factorio.com/Mining}.
 * @example
 * ```
 * minable = { mining_time = 0.55, result = "wood", count = 4, mining_particle = "wooden-particle" }
 * ```
 *
 * @example
 * ```
 * minable = {
 *   mining_time = 1,
 *   results =
 *   {
 *     {
 *       type = "fluid",
 *       name = "crude-oil",
 *       amount = 10
 *     }
 *   }
 * }
 * ```
 *
 */
interface MinableProperties {
    
    /**
     * Only loaded if `results` is not defined.

How many of result are dropped.
     */
    count?: uint16,
    
    /**
     * The amount of fluid that is used up when this object is mined. If this is > 0, this object cannot be mined by hand.
     */
    fluid_amount?: double,
    
    /**
     * Name of a {@link ParticlePrototype | prototype:ParticlePrototype}. Which set of particles to use.
     */
    mining_particle?: ParticleID,
    
    /**
     * How many seconds are required to mine this object at 1 mining speed.
     */
    mining_time: double,
    mining_trigger?: Trigger,
    
    /**
     * Name of a {@link FluidPrototype | prototype:FluidPrototype}. The fluid that is used up when this object is mined.
     */
    required_fluid?: FluidID,
    
    /**
     * Only loaded if `results` is not defined.

Which item is dropped when this is mined. Cannot be empty. If you want the entity to not be minable, don't specify the minable properties, if you want it to be minable with no result item, don't specify the result at all.
     */
    result?: ItemID,
    
    /**
     * The items that are returned when this object is mined.
     */
    results?: ProductPrototype[]
}

interface MinimapStyleSpecification extends EmptyWidgetStyleSpecificationBase{
    type: 'minimap_style'
}

/**
 * Used by {@link MiningDrillPrototype | prototype:MiningDrillPrototype}.
 */
interface MiningDrillGraphicsSet {
    
    /**
     * Only loaded if `idle_animation` is defined.
     */
    always_draw_idle_animation?: bool,
    animation?: Animation4Way,
    animation_progress?: float,
    
    /**
     * Render layer(s) for all directions of the circuit connectors.
     */
    circuit_connector_layer?: RenderLayer | CircuitConnectorLayer,
    
    /**
     * Secondary draw order(s) for all directions of the circuit connectors.
     */
    circuit_connector_secondary_draw_order?: int8 | CircuitConnectorSecondaryDrawOrder,
    default_recipe_tint?: DefaultRecipeTint,
    drilling_vertical_movement_duration?: uint16,
    
    /**
     * Idle animation must have the same frame count as animation.
     */
    idle_animation?: Animation4Way,
    max_animation_progress?: float,
    min_animation_progress?: float,
    
    /**
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_transition_duration?: uint16,
    
    /**
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_waypoint_stop_duration?: uint16,
    
    /**
     * Only loaded if one of `shift_animation_waypoint_stop_duration` or `shift_animation_transition_duration` is not `0`.
     */
    shift_animation_waypoints?: ShiftAnimationWaypoints,
    
    /**
     * Used by {@link WorkingVisualisation::apply_tint | prototype:WorkingVisualisation::apply_tint}.
     */
    status_colors?: StatusColors,
    working_visualisations?: WorkingVisualisation[]
}

interface MiningDrillProductivityBonusModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'mining-drill-productivity-bonus',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

/**
 * The user-set value of a startup {@link mod setting | https://wiki.factorio.com/Tutorial:Mod_settings}.
 */
interface ModSetting {
    
    /**
     * The value of the mod setting. The type depends on the kind of setting.
     */
    value: int32 | double | bool | string | Color
}

/**
 * The effect that is applied when a {@link TechnologyPrototype | prototype:TechnologyPrototype} is researched.
 * 
 * Loaded as one of the {@link BaseModifier | prototype:BaseModifier} extensions, based on the value of the `type` key.
 */
type Modifier = /* Loaded when the `type` is `"inserter-stack-size-bonus"`. */ InserterStackSizeBonusModifier | /* Loaded when the `type` is `"stack-inserter-capacity-bonus"`. */ StackInserterCapacityBonusModifier | /* Loaded when the `type` is `"laboratory-speed"`. */ LaboratorySpeedModifier | /* Loaded when the `type` is `"laboratory-productivity"`. */ LaboratoryProductivityModifier | /* Loaded when the `type` is `"maximum-following-robots-count"`. */ MaximumFollowingRobotsCountModifier | /* Loaded when the `type` is `"worker-robot-speed"`. */ WorkerRobotSpeedModifier | /* Loaded when the `type` is `"worker-robot-storage"`. */ WorkerRobotStorageModifier | /* Loaded when the `type` is `"worker-robot-battery"`. */ WorkerRobotBatteryModifier | /* Loaded when the `type` is `"follower-robot-lifetime"`. */ FollowerRobotLifetimeModifier | /* Loaded when the `type` is `"ghost-time-to-live"`. */ GhostTimeToLiveModifier | /* Loaded when the `type` is `"deconstruction-time-to-live"`. */ DeconstructionTimeToLiveModifier | /* Loaded when the `type` is `"turret-attack"`. */ TurretAttackModifier | /* Loaded when the `type` is `"ammo-damage"`. */ AmmoDamageModifier | /* Loaded when the `type` is `"artillery-range"`. */ ArtilleryRangeModifier | /* Loaded when the `type` is `"give-item"`. */ GiveItemModifier | /* Loaded when the `type` is `"gun-speed"`. */ GunSpeedModifier | /* Loaded when the `type` is `"unlock-recipe"`. */ UnlockRecipeModifier | /* Loaded when the `type` is `"character-crafting-speed"`. */ CharacterCraftingSpeedModifier | /* Loaded when the `type` is `"character-mining-speed"`. */ CharacterMiningSpeedModifier | /* Loaded when the `type` is `"character-running-speed"`. */ CharacterRunningSpeedModifier | /* Loaded when the `type` is `"character-build-distance"`. */ CharacterBuildDistanceModifier | /* Loaded when the `type` is `"character-item-drop-distance"`. */ CharacterItemDropDistanceModifier | /* Loaded when the `type` is `"character-reach-distance"`. */ CharacterReachDistanceModifier | /* Loaded when the `type` is `"character-resource-reach-distance"`. */ CharacterResourceReachDistanceModifier | /* Loaded when the `type` is `"character-item-pickup-distance"`. */ CharacterItemPickupDistanceModifier | /* Loaded when the `type` is `"character-loot-pickup-distance"`. */ CharacterLootPickupDistanceModifier | /* Loaded when the `type` is `"character-inventory-slots-bonus"`. */ CharacterInventorySlotsBonusModifier | /* Loaded when the `type` is `"character-health-bonus"`. */ CharacterHealthBonusModifier | /* Loaded when the `type` is `"character-logistic-requests"`. */ CharacterLogisticRequestsModifier | /* Loaded when the `type` is `"character-logistic-trash-slots"`. */ CharacterLogisticTrashSlotsModifier | /* Loaded when the `type` is `"max-failed-attempts-per-tick-per-construction-queue"`. */ MaxFailedAttemptsPerTickPerConstructionQueueModifier | /* Loaded when the `type` is `"max-successful-attempts-per-tick-per-construction-queue"`. */ MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier | /* Loaded when the `type` is `"mining-drill-productivity-bonus"`. */ MiningDrillProductivityBonusModifier | /* Loaded when the `type` is `"train-braking-force-bonus"`. */ TrainBrakingForceBonusModifier | /* Loaded when the `type` is `"zoom-to-world-enabled"`. */ ZoomToWorldEnabledModifier | /* Loaded when the `type` is `"zoom-to-world-ghost-building-enabled"`. */ ZoomToWorldGhostBuildingEnabledModifier | /* Loaded when the `type` is `"zoom-to-world-blueprint-enabled"`. */ ZoomToWorldBlueprintEnabledModifier | /* Loaded when the `type` is `"zoom-to-world-deconstruction-planner-enabled"`. */ ZoomToWorldDeconstructionPlannerEnabledModifier | /* Loaded when the `type` is `"zoom-to-world-upgrade-planner-enabled"`. */ ZoomToWorldUpgradePlannerEnabledModifier | /* Loaded when the `type` is `"zoom-to-world-selection-tool-enabled"`. */ ZoomToWorldSelectionToolEnabledModifier | /* Loaded when the `type` is `"nothing"`. */ NothingModifier

/**
 * A dictionary of mod names to mod versions of all active mods. It can be used to adjust mod functionality based on the presence of other mods.
 * @example
 * ```
 * -- executes pineapple only when the pizza mod is active
 * if mods["pizza"] then
 *   pineapple()
 * end
 * ```
 *
 * @example
 * ```
 * -- when the only active mod is the space-age mod with version 1.2.0
 * -- then this logs
 * for name, version in pairs(mods) do
 *   log(name .. " version " .. version) -- => space-age version 1.2.0
 * end
 * ```
 *
 */
type Mods = {[key: string]: string}

/**
 * The name of a {@link ModuleCategory | prototype:ModuleCategory}.
 * @example
 * ```
 * "productivity"
 * ```
 *
 * @example
 * ```
 * "effectivity"
 * ```
 *
 */
type ModuleCategoryID = string

/**
 * The number of module slots in this entity, and their icon positions.
 * @example
 * ```
 * module_specification =
 * {
 *   module_slots = 2,
 *   module_info_icon_shift = {0, 0.5},
 *   module_info_multi_row_initial_height_modifier = -0.3
 * }
 * ```
 *
 */
interface ModuleSpecification {
    module_info_icon_scale?: float,
    module_info_icon_shift?: Vector,
    module_info_max_icon_rows?: uint8,
    module_info_max_icons_per_row?: uint8,
    module_info_multi_row_initial_height_modifier?: float,
    module_info_separation_multiplier?: float,
    
    /**
     * The number of module slots in this entity.
     */
    module_slots?: ItemStackIndex
}

type ModuleTint = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'none'

/**
 * The name of a {@link MouseCursor | prototype:MouseCursor}.
 * @example
 * ```
 * "selection-tool-cursor"
 * ```
 *
 */
type MouseCursorID = string

interface NestedTriggerEffectItem extends TriggerEffectItem{
    action: Trigger,
    type: 'nested-result'
}

/**
 * An array-like noise expression, for example constructed with {@link NoiseArrayConstruction | prototype:NoiseArrayConstruction} or a variable such as `noise.var("starting_positions")`.
 */
type NoiseArray = NoiseVariable | NoiseArrayConstruction | NoiseFunctionOffsetPoints

/**
 * `value_expressions` property should be a list of numeric expressions, each of which will be evaluated to come up with the corresponding numeric value in the resulting array.
 * 
 * Used to construct map positions (`{x, y}`) and map position lists (`{{x0,y0}, {y1,y1}, [...]}`) for {@link offset-points | prototype:NoiseFunctionOffsetPoints} and {@link distance-from-nearest-point | prototype:NoiseFunctionDistanceFromNearestPoint} functions.
 * @example
 * ```
 * -- Examples of constructing a map position and map position list
 * local noise = require("noise")
 * local tne = noise.to_noise_expression
 * 
 * local map_pos_1 = -- the map position {x = 100, y = -200} specified directly
 * {
 *   type = "array-construction",
 *   value_expressions = {tne(100), tne(-200)}
 * }
 * -- or with make_array from the noise lib required above
 * local map_pos_2 = noise.make_array({100, 200})
 * 
 * local map_pos_list = -- a map position list: {{x = 100, y = -200}, {x = 100, y = 200}}
 * {
 *   type = "array-construction",
 *   value_expressions = {map_pos_1, map_pos_2}
 * }
 * -- or with the noise lib
 * local also_map_post_list = noise.make_point_list({{100, -200}, {100, 200}})
 * ```
 *
 */
interface NoiseArrayConstruction {
    type: 'array-construction',
    value_expressions: NoiseExpression[]
}

/**
 * Loaded as one of the noise expressions listed in this union, based on the value of the `type` key.
 * 
 * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation.
 * 
 * Noise expressions can be provided as table literals or built using functions in the built-in {@link noise library | https://github.com/wube/factorio-data/blob/master/core/lualib/noise.lua}. The built-in noise library allows writing much more concise code, so its usage will be shown in most examples for noise expressions.
 * 
 * {@link noise.define_noise_function | https://github.com/wube/factorio-data/blob/master/core/lualib/noise.lua#L272} allows noise expressions to be defined using a shorthand that's a subset of Lua (see the example for details).
 * 
 * See {@link here | https://togos.github.io/togos-example-noise-programs/} for a tutorial on authoring noise expressions.
 * 
 * The most frequently used noise functions are loaded via {@link NoiseFunctionApplication | prototype:NoiseFunctionApplication}.
 * @example
 * ```
 * -- "noise" library required beforehand
 * expression = noise.define_noise_function(function(x, y, tile, map)
 *   return (x + y) / 1000
 * end)
 * ```
 *
 * @example
 * ```
 * expression = {
 *   type = "function-application",
 *   function_name = "divide",
 *   arguments = {
 *     {
 *       type = "function-application",
 *       function_name = "add",
 *       arguments = {
 *         {
 *           type = "variable",
 *           variable_name = "x"
 *         },
 *         {
 *           type = "variable",
 *           variable_name = "y"
 *         }
 *       }
 *     },
 *     {
 *       type = "literal-number",
 *       literal_value = 1000
 *     }
 *   }
 * }
 * ```
 *
 */
type NoiseExpression = /* Loaded when the `type` is `"variable"`. */ NoiseVariable | /* Loaded when the `type` is `"function-application"`. */ NoiseFunctionApplication | /* Loaded when the `type` is `"literal-boolean"`. */ NoiseLiteralBoolean | /* Loaded when the `type` is `"literal-number"`. */ NoiseLiteralNumber | /* Loaded when the `type` is `"literal-string"`. */ NoiseLiteralString | /* Loaded when the `type` is `"literal-object"`. */ NoiseLiteralObject | /* Loaded when the `type` is `"literal-expression"`. */ NoiseLiteralExpression | /* Loaded when the `type` is `"array-construction"`. */ NoiseArrayConstruction | /* Loaded when the `type` is `"procedure-delimiter"`. */ NoiseProcedureDelimiter | /* Loaded when the `type` is `"if-else-chain"`. */ NoiseIfElseChain

/**
 * Takes a single argument and returns its absolute value. Ie. if the argument is negative, it is inverted.
 */
interface NoiseFunctionAbsoluteValue {
    arguments: 
[    NoiseNumber
],
    function_name: 'absolute-value',
    type: 'function-application'
}

/**
 * Takes between 0 and 32 numbers and adds them up.
 */
interface NoiseFunctionAdd {
    arguments: NoiseNumber[],
    function_name: 'add',
    type: 'function-application'
}

/**
 * Loaded as one of the NoiseFunctions listed in this union, based on the value of the `function_name` key.
 * 
 * Apply a function to a list or associative array of arguments. Some functions expect arguments to be named and some expect them not to be.
 * 
 * Function calls are their own class of expression (as opposed to every function just being its own expression type) because function calls all have similar properties -- arguments are themselves expressions, a function call with all-constant arguments can be constant-folded (due to {@link referential transparency | http://en.wikipedia.org/wiki/Referential_transparency}), etc.
 */
type NoiseFunctionApplication = /* Loaded when the `function_name` is `"add"`. */ NoiseFunctionAdd | /* Loaded when the `function_name` is `"subtract"`. */ NoiseFunctionSubtract | /* Loaded when the `function_name` is `"multiply"`. */ NoiseFunctionMultiply | /* Loaded when the `function_name` is `"divide"`. */ NoiseFunctionDivide | /* Loaded when the `function_name` is `"exponentiate"`. */ NoiseFunctionExponentiate | /* Loaded when the `function_name` is `"absolute-value"`. */ NoiseFunctionAbsoluteValue | /* Loaded when the `function_name` is `"clamp"`. */ NoiseFunctionClamp | /* Loaded when the `function_name` is `"compile-time-log"`. */ NoiseFunctionCompileTimeLog | /* Loaded when the `function_name` is `"distance-from-nearest-point"`. */ NoiseFunctionDistanceFromNearestPoint | /* Loaded when the `function_name` is `"ridge"`. */ NoiseFunctionRidge | /* Loaded when the `function_name` is `"terrace"`. */ NoiseFunctionTerrace | /* Loaded when the `function_name` is `"modulo"`. */ NoiseFunctionModulo | /* Loaded when the `function_name` is `"floor"`. */ NoiseFunctionFloor | /* Loaded when the `function_name` is `"ceil"`. */ NoiseFunctionCeil | /* Loaded when the `function_name` is `"bitwise-and"`. */ NoiseFunctionBitwiseAnd | /* Loaded when the `function_name` is `"bitwise-or"`. */ NoiseFunctionBitwiseOr | /* Loaded when the `function_name` is `"bitwise-xor"`. */ NoiseFunctionBitwiseXor | /* Loaded when the `function_name` is `"bitwise-not"`. */ NoiseFunctionBitwiseNot | /* Loaded when the `function_name` is `"sin"`. */ NoiseFunctionSin | /* Loaded when the `function_name` is `"cos"`. */ NoiseFunctionCos | /* Loaded when the `function_name` is `"atan2"`. */ NoiseFunctionAtan2 | /* Loaded when the `function_name` is `"less-than"`. */ NoiseFunctionLessThan | /* Loaded when the `function_name` is `"less-or-equal"`. */ NoiseFunctionLessOrEqual | /* Loaded when the `function_name` is `"equals"`. */ NoiseFunctionEquals | /* Loaded when the `function_name` is `"factorio-basis-noise"`. */ NoiseFunctionFactorioBasisNoise | /* Loaded when the `function_name` is `"factorio-quick-multioctave-noise"`. */ NoiseFunctionFactorioQuickMultioctaveNoise | /* Loaded when the `function_name` is `"random-penalty"`. */ NoiseFunctionRandomPenalty | /* Loaded when the `function_name` is `"log2"`. */ NoiseFunctionLog2 | /* Loaded when the `function_name` is `"noise-layer-name-to-id"`. */ NoiseFunctionNoiseLayerNameToID | /* Loaded when the `function_name` is `"autoplace-probability"`. */ NoiseFunctionAutoplaceProbability | /* Loaded when the `function_name` is `"autoplace-richness"`. */ NoiseFunctionAutoplaceRichness | /* Loaded when the `function_name` is `"offset-points"`. */ NoiseFunctionOffsetPoints | /* Loaded when the `function_name` is `"factorio-multioctave-noise"`. */ NoiseFunctionFactorioMultioctaveNoise | /* Loaded when the `function_name` is `"spot-noise"`. */ NoiseFunctionSpotNoise

/**
 * Returns the arc tangent of y/x using the signs of arguments to determine the correct quadrant.
 */
interface NoiseFunctionAtan2 {
    
    /**
     * The first argument is y and the second is x.
     */
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'atan2',
    type: 'function-application'
}

interface NoiseFunctionAutoplaceProbability {
    arguments: 
[    NoiseLiteralObject
],
    function_name: 'autoplace-probability',
    type: 'function-application'
}

interface NoiseFunctionAutoplaceRichness {
    arguments: 
[    NoiseLiteralObject
],
    function_name: 'autoplace-richness',
    type: 'function-application'
}

/**
 * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise AND on them.
 */
interface NoiseFunctionBitwiseAnd {
    arguments: NoiseNumber[],
    function_name: 'bitwise-and',
    type: 'function-application'
}

/**
 * Casts the single argument to a 32-bit integer and performs bitwise negates it.
 */
interface NoiseFunctionBitwiseNot {
    arguments: 
[    NoiseNumber
],
    function_name: 'bitwise-not',
    type: 'function-application'
}

/**
 * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise OR on them.
 */
interface NoiseFunctionBitwiseOr {
    arguments: NoiseNumber[],
    function_name: 'bitwise-or',
    type: 'function-application'
}

/**
 * Casts between 0 and 32 numbers to 32-bit integers and performs a bitwise EXCLUSIVE OR on them.
 */
interface NoiseFunctionBitwiseXor {
    arguments: NoiseNumber[],
    function_name: 'bitwise-xor',
    type: 'function-application'
}

/**
 * Takes a single argument and returns its ceil.
 */
interface NoiseFunctionCeil {
    arguments: 
[    NoiseNumber
],
    function_name: 'ceil',
    type: 'function-application'
}

/**
 * The first argument is clamped to be between the second and third. The second is treated as a lower limit and the third the upper limit.
 */
interface NoiseFunctionClamp {
    arguments: 
[    NoiseNumber,
    NoiseNumber,
    NoiseNumber
],
    function_name: 'clamp',
    type: 'function-application'
}

/**
 * Prints between 0 and 32 arguments to the {@link log file | https://wiki.factorio.com/Log_file} when the expression is compiled. For that it needs to part of another expression that is compiled. The last argument of the `compile-time-log` is returned as the "result" of the `compile-time-log`.
 * @example
 * ```
 * -- Example usage inside a NamedNoiseExpression
 * local noise = require("noise")
 * local tne = noise.to_noise_expression
 * 
 * data:extend{{
 *   type = "noise-expression",
 *   name = "compile-log-test",
 *   intended_property = "elevation",
 *   expression = noise.compile_time_log(2000, noise.var("y"), tne(100) - noise.var("distance"))
 * }}
 * 
 * -- When "compile-log-test" is selected as the map type and a map preview or map is generated, this logs:
 * --  Info data-updates.lua:24: 2000.000000 reference to variable 'y' subtract
 * -- Furthermore, the elevation noise expression is set to 'tne(100) - noise.var("distance")', producing a circular island with a 100 tile radius
 * ```
 *
 */
interface NoiseFunctionCompileTimeLog {
    arguments: NoiseExpression[],
    function_name: 'compile-time-log',
    type: 'function-application'
}

/**
 * Takes a single argument and returns its cosine.
 */
interface NoiseFunctionCos {
    arguments: 
[    NoiseNumber
],
    function_name: 'cos',
    type: 'function-application'
}

/**
 * Computes the {@link euclidean distance | https://en.wikipedia.org/wiki/Euclidean_distance} of the position `{x, y}` to all position listed in points and returns the shortest distance. The returned distance can be `maximum_distance` at most.
 * @example
 * ```
 * -- Shortest distance at the current {x, y} from the two given points, but at most 1000
 * local noise = require("noise")
 * local tne = noise.to_noise_expression
 * local positions = noise.make_point_list({{-100, -40}, {-50, -200}})
 * 
 * local shortest_distance =
 * {
 *   type = "function-application",
 *   function_name = "distance-from-nearest-point",
 *   arguments = {x = noise.var("x"), y = noise.var("y"), points = positions, maximum_distance = tne(1000)}
 * }
 * -- or with the noise lib
 * local also_shortest_distance = noise.function_application("distance-from-nearest-point", {x = noise.var("x"), y = noise.var("y"), points = positions, maximum_distance = 1000})
 * ```
 *
 */
interface NoiseFunctionDistanceFromNearestPoint {
    arguments: DistanceFromNearestPointArguments,
    function_name: 'distance-from-nearest-point',
    type: 'function-application'
}

/**
 * Takes two arguments and divides the first by the second.
 */
interface NoiseFunctionDivide {
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'divide',
    type: 'function-application'
}

/**
 * Returns the result of first argument == second argument as a literal number that is `0` for false and `1` for true.
 */
interface NoiseFunctionEquals {
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'equals',
    type: 'function-application'
}

/**
 * Takes two arguments and raises the first to the second power.
 * @example
 * ```
 * local one_thousand = -- 10^3
 * {
 *   type = "function-application",
 *   function_name = "exponentiate",
 *   arguments = {
 *     {
 *       type = "literal-number",
 *       literal_value = 10
 *     },
 *     {
 *       type = "literal-number",
 *       literal_value = 3
 *     }
 * }
 * 
 * -- or with the noise lib
 * local noise = require("noise")
 * local tne = noise.to_noise_expression
 * 
 * local twentyfive = tne(5)^tne(2) -- 5^2
 * ```
 *
 */
interface NoiseFunctionExponentiate {
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'exponentiate',
    type: 'function-application'
}

/**
 * Scaling input and output can be accomplished other ways, but are done so commonly as to be built into this function for performance reasons.
 */
interface NoiseFunctionFactorioBasisNoise {
    arguments: FactorioBasisNoiseArguments,
    function_name: 'factorio-basis-noise',
    type: 'function-application'
}

interface NoiseFunctionFactorioMultioctaveNoise {
    arguments: FactorioMultioctaveNoiseArguments,
    function_name: 'factorio-multioctave-noise',
    type: 'function-application'
}

interface NoiseFunctionFactorioQuickMultioctaveNoise {
    arguments: FactorioQuickMultioctaveNoiseArguments,
    function_name: 'factorio-quick-multioctave-noise',
    type: 'function-application'
}

/**
 * Takes a single argument and returns its floor.
 */
interface NoiseFunctionFloor {
    arguments: 
[    NoiseNumber
],
    function_name: 'floor',
    type: 'function-application'
}

/**
 * Returns the result of first argument <= second argument as a literal number that is `0` for false and `1` for true.
 */
interface NoiseFunctionLessOrEqual {
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'less-or-equal',
    type: 'function-application'
}

/**
 * Returns the result of first argument < second argument as a literal number that is `0` for false and `1` for true.
 */
interface NoiseFunctionLessThan {
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'less-than',
    type: 'function-application'
}

interface NoiseFunctionLog2 {
    arguments: 
[    NoiseNumber
],
    function_name: 'log2',
    type: 'function-application'
}

/**
 * Takes two arguments and divides the first by the second and returns the remainder. This is implemented using {@link fmod(double, double) | https://en.cppreference.com/w/cpp/numeric/math/fmod}.
 */
interface NoiseFunctionModulo {
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'modulo',
    type: 'function-application'
}

/**
 * Takes between 0 and 32 numbers and multiplies them.
 */
interface NoiseFunctionMultiply {
    arguments: NoiseNumber[],
    function_name: 'multiply',
    type: 'function-application'
}

interface NoiseFunctionNoiseLayerNameToID {
    arguments: 
[    NoiseLiteralString
],
    function_name: 'noise-layer-name-to-id',
    type: 'function-application'
}

/**
 * The first argument represents a vector of how the positions should be shifted, and the second argument lists the positions that should be shifted.
 * @example
 * ```
 * -- Shifts "positions" by {100, 90}
 * local noise = require("noise")
 * local positions = noise.make_point_list({{-10, -40}, {-50, -20}})
 * local offset = noise.make_array({100, 90})
 * local offset_positions =
 * {
 *   type = "function-application",
 *   function_name = "offset-points",
 *   arguments = {offset, positions}
 * }
 * -- or with the noise lib
 * local also_offset_positions = noise.function_application("offset-points", {offset, positions})
 * ```
 *
 */
interface NoiseFunctionOffsetPoints {
    arguments: 
[    NoiseArray,
    NoiseArray
],
    function_name: 'offset-points',
    type: 'function-application'
}

/**
 * Subtracts a random value in the `[0, amplitude)` range from `source` if `source` is larger than `0`.
 */
interface NoiseFunctionRandomPenalty {
    arguments: RandomPenaltyArguments,
    function_name: 'random-penalty',
    type: 'function-application'
}

/**
 * Similar to {@link clamp | prototype:NoiseFunctionClamp}, where the first argument is folded back across the third and second limits until it lies between them.
 * @example
 * ```
 * local noise = require("noise")
 * local ridge_1 = noise.ridge(6, 1, 5) -- this returns 4
 * local ridge_2 = noise.ridge(-1, 1, 5) -- this returns 3
 * ```
 *
 */
interface NoiseFunctionRidge {
    
    /**
     * The first argument is the number to be ridged, the second is the lower limit and the third is the upper limit.
     */
    arguments: 
[    NoiseNumber,
    NoiseNumber,
    NoiseNumber
],
    function_name: 'ridge',
    type: 'function-application'
}

/**
 * Takes a single argument and returns its sine.
 */
interface NoiseFunctionSin {
    arguments: 
[    NoiseNumber
],
    function_name: 'sin',
    type: 'function-application'
}

/**
 * Generates random conical spots. The map is divided into square regions, and within each region, candidate points are chosen at random and target density, spot quantity, and radius are calculated for each point (or one of every `skip_span` candidate points) by configured expressions. Each spot contributes a quantity to a regional target total (which is the average of sampled target densities times the area of the region) until the total has been reached or a maximum spot count is hit. The output value of the function is the maximum height of any spot at a given point.
 * 
 * The parameters that provide expressions to be evaluated for each point (all named something_expression) need to actually return expression objects.
 * 
 * The quantity of the spot is assumed to be the same as its volume. Since the volume of a cone is `pi * radius^2 * height / 3`, the height ('peak value') of any given spot is calculated as `3 * quantity / (pi * radius^2)`
 * 
 * The infinite series of candidate points (of which `candidate_point_count` are actually considered) generated by `spot-noise` expressions with the same `seed0`, `seed1`, `region_size`, and `suggested_minimum_candidate_point_spacing` will be identical. This allows multiple spot-noise expressions (e.g. for different ore patches) to avoid overlap by using different points from the same list, determined by `skip_span` and `skip_offset`.
 */
interface NoiseFunctionSpotNoise {
    arguments: SpotNoiseArguments,
    function_name: 'spot-noise',
    type: 'function-application'
}

/**
 * Takes two arguments and subtracts the second from the first.
 */
interface NoiseFunctionSubtract {
    arguments: 
[    NoiseNumber,
    NoiseNumber
],
    function_name: 'subtract',
    type: 'function-application'
}

/**
 * The first argument is the value to be terraced. The second argument is the offset, the third the width, and the fourth the strength.
 */
interface NoiseFunctionTerrace {
    arguments: 
[    NoiseNumber,
    ConstantNoiseNumber,
    ConstantNoiseNumber,
    NoiseNumber
],
    function_name: 'terrace',
    type: 'function-application'
}

/**
 * Has an `arguments` property that is a list of condition-result expression pairs followed by a default result expression, like so:
 * 
 * ```
 * {
 *   type = "if-else-chain",
 *   arguments = {
 *     condition1, result1,
 *     condition2, result2,
 *     ...
 *     defaultResult
 *   }
 * }
 * ```
 * 
 * The result of the if-else-chain is the value of the first result expression whose condition expression evaluated to true, or the value of the default result ('else') expression.
 */
interface NoiseIfElseChain {
    arguments: NoiseExpression[],
    type: 'if-else-chain'
}

/**
 * The name of a {@link NoiseLayer | prototype:NoiseLayer}.
 * @example
 * ```
 * "aux"
 * ```
 *
 * @example
 * ```
 * "trees-3"
 * ```
 *
 */
type NoiseLayerID = string

/**
 * Evaluates to the same boolean value (true or false) every time, given by the `literal_value` property. May be used as a number value, evaluates to `1` for true and `0` for false.
 */
interface NoiseLiteralBoolean {
    literal_value: bool,
    type: 'literal-boolean'
}

/**
 * Returns the expression represented by its `literal_value` property. Useful mostly for passing expressions (to be evaluated later) to the {@link spot-noise | prototype:NoiseFunctionSpotNoise} function.
 */
interface NoiseLiteralExpression {
    literal_value: NoiseExpression,
    type: 'literal-expression'
}

/**
 * Evaluates to the same number every time, given by the `literal_value` property. All numbers are treated as {@link float | prototype:float} internally unless otherwise specified. May be used as a boolean value, evaluates to true for numbers bigger than zero, anything else evaluates to false.
 * @example
 * ```
 * local ten =
 * {
 *   type = "literal-number",
 *   literal_value = 10
 * }
 * 
 * -- or with the noise lib
 * local noise = require("noise")
 * local twenty_point_five = noise.to_noise_expression(20.5)
 * ```
 *
 */
interface NoiseLiteralNumber {
    literal_value: float,
    type: 'literal-number'
}

/**
 * Evaluates to the same object every time, given by the `literal_value` property. Since the noise generation runtime has no notion of objects or use for them, this is useful only in constant contexts, such as the argument of the `autoplace-probability` function (where the 'literal object' is an {@link AutoplaceSpecification | prototype:AutoplaceSpecification}).
 * @example
 * ```
 * {
 *   type = "literal-object",
 *   literal_value = {
 *     name = "Bob Hope",
 *     birth_date = {
 *       year = 1903,
 *       month = 5,
 *       day_of_month = 29
 *     }
 *   }
 * }
 * ```
 *
 */
interface NoiseLiteralObject {
    literal_value: AutoplaceSpecification,
    type: 'literal-object'
}

/**
 * Evaluates to the same string every time, given by the `literal_value` property. Since the noise generation runtime has no notion of strings or use for them, this is useful only in constant contexts.
 */
interface NoiseLiteralString {
    literal_value: string,
    type: 'literal-string'
}

/**
 * A numeric noise expression, such as a literal number, the result of addition, or multioctave noise.
 * 
 * This encompasses all {@link NoiseExpressions | prototype:NoiseExpression}, except for {@link NoiseLiteralBoolean | prototype:NoiseLiteralBoolean}, {@link NoiseLiteralString | prototype:NoiseLiteralString}, {@link NoiseLiteralObject | prototype:NoiseLiteralObject}, {@link NoiseLiteralExpression | prototype:NoiseLiteralExpression}, {@link NoiseArrayConstruction | prototype:NoiseArrayConstruction}, and {@link NoiseFunctionOffsetPoints | prototype:NoiseFunctionOffsetPoints}.
 */
type NoiseNumber = NoiseVariable | NoiseFunctionApplication | NoiseLiteralNumber | NoiseProcedureDelimiter | NoiseIfElseChain | NoiseFunctionAdd | NoiseFunctionSubtract | NoiseFunctionMultiply | NoiseFunctionDivide | NoiseFunctionExponentiate | NoiseFunctionFactorioQuickMultioctaveNoise | NoiseFunctionFactorioMultioctaveNoise | NoiseFunctionDistanceFromNearestPoint | NoiseFunctionFactorioBasisNoise | NoiseFunctionAbsoluteValue | NoiseFunctionClamp | NoiseFunctionRidge | NoiseFunctionTerrace | NoiseFunctionSpotNoise | NoiseFunctionRandomPenalty | NoiseFunctionLog2 | NoiseFunctionModulo | NoiseFunctionFloor | NoiseFunctionCeil | NoiseFunctionBitwiseAnd | NoiseFunctionBitwiseOr | NoiseFunctionBitwiseXor | NoiseFunctionBitwiseNot | NoiseFunctionSin | NoiseFunctionAtan2 | NoiseFunctionCos | NoiseFunctionLessThan | NoiseFunctionLessOrEqual | NoiseFunctionEquals | NoiseFunctionCompileTimeLog | NoiseFunctionNoiseLayerNameToID | NoiseFunctionAutoplaceProbability | NoiseFunctionAutoplaceRichness

/**
 * Evaluates and returns the value of its expression property, which is itself an expression.
 * 
 * This hints to the compiler that it should break the subexpression into its own procedure so that the result can be re-used in multiple places. For instance if you want to re-use the same multioctave noise for determining probability of multiple tiles/entities, wrap the multioctave noise expression in a procedure-delimiter. Alternatively, make the noise its own {@link NamedNoiseExpression | prototype:NamedNoiseExpression} and reference it by name, using a {@link NoiseVariable | prototype:NoiseVariable}.
 */
interface NoiseProcedureDelimiter {
    expression: NoiseExpression,
    type: 'procedure-delimiter'
}

/**
 * Variables referencing named noise expressions may have their reference overridden by other named noise expression if their `intended_property` is the variable name and it is selected by the user in the map generator GUI. See the second example on {@link NamedNoiseExpression::intended_property | prototype:NamedNoiseExpression::intended_property}.
 * @example
 * ```
 * local noise = require("noise")
 * 
 * local y =
 * {
 *   type = "variable",
 *   variable_name = "y" -- predefined variable
 * }
 * local x = noise.var("x") -- predefined variable, with the noise lib
 * 
 * local width =
 * {
 *   type = "variable",
 *   variable_name = "map_width" -- predefined constant
 * }
 * local height = noise.var("map_height") -- predefined constant, with the noise lib
 * 
 * local aux =
 * {
 *   type = "variable",
 *   variable_name = "aux" -- named noise expression
 * }
 * local cliffiness = noise.var("cliffiness") -- named noise expression, with the noise lib
 * ```
 *
 */
interface NoiseVariable {
    type: 'variable',
    
    /**
     * A string referring to a pre-defined variable, constant, or {@link NamedNoiseExpression | prototype:NamedNoiseExpression}.

The `"x"` or `"y"` variables refer to the current coordinates of the map position being evaluated.

The constants refer to a set of values mostly defined by {@link MapGenSettings | prototype:MapGenSettings}.

The named noise expressions refer to one of the notable {@link BaseNamedNoiseExpressions | prototype:BaseNamedNoiseExpressions}, or any other existing one by name.
     */
    variable_name: 'x' | 'y' | NoiseVariableConstants | BaseNamedNoiseExpressions | string
}

/**
 * A set of constants largely determined by {@link MapGenSettings | prototype:MapGenSettings}.
 */
type NoiseVariableConstants = /* Additional constants are generated for all {@link tile | prototype:TilePrototype}, {@link entity | prototype:EntityPrototype}, {@link decorative | prototype:DecorativePrototype}, and {@link autoplace-control | prototype:AutoplaceControl} prototypes. These follow these three patterns: `control-setting:<name>:frequency`, `control-setting:<name>:size`, and `control-setting:<name>:richness`. */ string | /* {@link MapGenSettings::seed | prototype:MapGenSettings::seed} */ 'map_seed' | /* {@link MapGenSettings::width | prototype:MapGenSettings::width} */ 'map_width' | /* {@link MapGenSettings::height | prototype:MapGenSettings::height} */ 'map_height' | /* Should not be used, `wlc_elevation_minimum` should be used instead. */ 'water_level' | /* Should not be used, `wlc_elevation_offset` should be used instead. */ 'finite_water_level' | /* When the result of `10 * log2("water")` ({@link MapGenSettings::water | prototype:MapGenSettings::water}) is infinite, `wlc_elevation_minimum = -∞`, else `wlc_elevation_minimum = 4`. */ 'wlc_elevation_minimum' | /* When the result of `10 * log2("water")` ({@link MapGenSettings::water | prototype:MapGenSettings::water}) is finite, `wlc_elevation_offset = -(10 * log2(water))`, else `wlc_elevation_offset = 0`. */ 'wlc_elevation_offset' | /* Based on {@link CliffPlacementSettings::cliff_elevation_0 | prototype:CliffPlacementSettings::cliff_elevation_0} */ 'cliff_elevation_offset' | /* {@link CliffPlacementSettings::cliff_elevation_interval | prototype:CliffPlacementSettings::cliff_elevation_interval} */ 'cliff_elevation_interval' | /* {@link CliffPlacementSettings::richness | prototype:CliffPlacementSettings::richness} */ 'control-setting:cliffs:richness:multiplier' | /* Calculated from the cliff and water settings. */ 'terrace_elevation_offset' | /* Same as `cliff_elevation_interval`. */ 'terrace_elevation_interval' | /* Based on {@link MapGenSettings::starting_area | prototype:MapGenSettings::starting_area}. */ 'starting_area_radius' | /* {@link MapGenSettings::starting_points | prototype:MapGenSettings::starting_points} */ 'starting_positions' | /* Calculated from starting positions and map seed. */ 'starting_lake_positions' | /* {@link MapGenSettings::peaceful_mode | prototype:MapGenSettings::peaceful_mode} */ 'peaceful_mode'

interface NothingModifier extends BaseModifier{
    effect_description?: LocalisedString,
    type: 'nothing',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface OffshorePumpGraphicsSet {
    
    /**
     * Rendered in "object" layer, with secondary draw order 0.
     */
    animation: Animation4Way,
    
    /**
     * Rendered in layer specified by `base_render_layer`, with secondary draw order 0.
     */
    base_pictures?: Sprite4Way,
    base_render_layer?: RenderLayer,
    
    /**
     * Rendered in "object" layer, with secondary draw order 20.
     */
    fluid_animation?: Animation4Way,
    
    /**
     * Rendered in "object" layer, with secondary draw order 40.
     */
    glass_pictures?: Sprite4Way,
    underwater_layer_offset?: int8,
    
    /**
     * Drawn by tile renderer when water animation is enabled.
     */
    underwater_pictures?: Sprite4Way
}

interface OrTipTrigger {
    
    /**
     * If at least one of the triggers is fulfilled, this trigger is considered fulfilled.
     */
    triggers: TipTrigger[],
    type: 'or'
}

/**
 * The order property is a simple `string`. When the game needs to sort prototypes (of the same type), it looks at their order properties and sorts those alphabetically. A prototype with an order string of `"a"` will be listed before other prototypes with order string `"b"` or `"c"`. The `"-"` or `"[]"` structures that can be found in vanilla order strings do *not* have any special meaning.
 * 
 * The alphabetical sorting uses {@link lexicographical comparison | https://en.wikipedia.org/wiki/Lexicographic_order} to determine if a given prototype is shown before or after another. If the order strings are equal then the game falls back to comparing the prototype names to determine order.
 * @example
 * ```
 * {  -- This item will be shown after the below one
 *   type = "item",
 *   name = "item-1",
 *   order = "ad",
 * },
 * {  -- This item will be shown before the above one
 *   type = "item",
 *   name = "item-2",
 *   order = "ab",
 * }
 * ```
 *
 * @example
 * ```
 * -- The order of special characters can be identified by looking at a UTF-8 character list.
 * -- This is the order some common characters are sorted in:
 * "-"
 * "0"
 * "9"
 * "A"
 * "Z"
 * "["
 * "]"
 * "a"
 * "z"
 * -- The following order strings would be ordered thusly then:
 * "a"
 * "ab"
 * "azaaa"  -- "b" is sorted before "z", so "ab" comes before "az", regardless of the letters following it
 * "b"
 * "b-zzz"
 * "b[aaa]" -- "[" is sorted after "-" in UTF-8
 * "bb"  -- "b" is sorted after "[" in UTF-8
 * ]
 * ```
 *
 */
type Order = string

interface OrientedCliffPrototype {
    collision_bounding_box: BoundingBox,
    
    /**
     * Unused.
     */
    fill_volume: uint32,
    pictures: SpriteVariations
}

interface OrientedCliffPrototypeSet {
    east_to_none: OrientedCliffPrototype,
    east_to_north: OrientedCliffPrototype,
    east_to_south: OrientedCliffPrototype,
    east_to_west: OrientedCliffPrototype,
    none_to_east: OrientedCliffPrototype,
    none_to_north: OrientedCliffPrototype,
    none_to_south: OrientedCliffPrototype,
    none_to_west: OrientedCliffPrototype,
    north_to_east: OrientedCliffPrototype,
    north_to_none: OrientedCliffPrototype,
    north_to_south: OrientedCliffPrototype,
    north_to_west: OrientedCliffPrototype,
    south_to_east: OrientedCliffPrototype,
    south_to_none: OrientedCliffPrototype,
    south_to_north: OrientedCliffPrototype,
    south_to_west: OrientedCliffPrototype,
    west_to_east: OrientedCliffPrototype,
    west_to_none: OrientedCliffPrototype,
    west_to_north: OrientedCliffPrototype,
    west_to_south: OrientedCliffPrototype
}

interface OtherColors {
    bar?: ElementImageSet,
    color?: Color,
    less_than: double
}

/**
 * The name of a {@link ParticlePrototype | prototype:ParticlePrototype}.
 * @example
 * ```
 * "beacon-metal-particle-small"
 * ```
 *
 * @example
 * ```
 * "wooden-particle"
 * ```
 *
 */
type ParticleID = string

interface PasteEntitySettingsTipTrigger {
    count?: uint32,
    match_type_only?: bool,
    source?: EntityID,
    target?: EntityID,
    type: 'paste-entity-settings'
}

interface PathFinderSettings {
    
    /**
     * When looking for path from cache make sure it doesn't end too far from requested end. This is typically higher than accept value for the start because the end target can be moving.
     */
    cache_accept_path_end_distance_ratio: double,
    
    /**
     * When looking for path from cache make sure it doesn't start too far from requested start in relative distance terms.
     */
    cache_accept_path_start_distance_ratio: double,
    
    /**
     * When searching for connection to path cache path, search at most for this number of steps times the initial estimate.
     */
    cache_max_connect_to_cache_steps_multiplier: uint32,
    
    /**
     * When assigning rating to the best path this * end distances is considered. This is typically higher than value for the start to achieve better path end quality.
     */
    cache_path_end_distance_rating_multiplier: double,
    
    /**
     * When assigning rating to the best path this * start distances is considered.
     */
    cache_path_start_distance_rating_multiplier: double,
    
    /**
     * This is the "threshold" to decide what is short and what is not.
     */
    direct_distance_to_consider_short_request: uint32,
    
    /**
     * Enemy is not moving/or is too close and has different destination.
     */
    enemy_with_different_destination_collision_penalty: double,
    
    /**
     * Collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box.
     */
    extended_collision_penalty: double,
    
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is 2, which means symmetric search.
     */
    fwd2bwd_ratio: uint32,
    
    /**
     * Simplification for now; collision with everything else is this.
     */
    general_entity_collision_penalty: double,
    
    /**
     * Collision penalty for successors of positions that require destroy to reach.
     */
    general_entity_subsequent_collision_penalty: double,
    
    /**
     * When comparing nodes in open which one to check next, heuristic value is multiplied by this ratio. The higher the number the more is the search directed directly towards the goal.
     */
    goal_pressure_ratio: double,
    
    /**
     * If there is a moving unit further than this we don't really care.
     */
    ignore_moving_enemy_collision_distance: double,
    
    /**
     * Minimal distance to goal for path to be searched in long path cache.
     */
    long_cache_min_cacheable_distance: double,
    long_cache_size: uint32,
    
    /**
     * Up until this amount any client will be served by the path finder (no estimate on the path length).
     */
    max_clients_to_accept_any_new_request: uint32,
    
    /**
     * From max_clients_to_accept_any_new_request till this one only those that have a short estimate will be served.
     */
    max_clients_to_accept_short_new_request: uint32,
    
    /**
     * When this is exhausted no more requests are allowed, at the moment the first path to exhaust this will be finished (even if it is hundreds of steps).
     */
    max_steps_worked_per_tick: double,
    max_work_done_per_tick: uint32,
    
    /**
     * Absolute minimum of steps that will be performed for every path find request no matter what.
     */
    min_steps_to_check_path_find_termination: uint32,
    
    /**
     * Same as cache_accept_path_end_distance_ratio, but used for negative cache queries.
     */
    negative_cache_accept_path_end_distance_ratio: double,
    
    /**
     * Same as cache_accept_path_start_distance_ratio, but used for negative cache queries.
     */
    negative_cache_accept_path_start_distance_ratio: double,
    overload_levels: uint32[],
    overload_multipliers: double[],
    
    /**
     * Minimal number of algorithm steps for path to be inserted into the short path cache.
     */
    short_cache_min_algo_steps_to_cache: uint32,
    
    /**
     * Minimal distance to goal for path to be searched in short path cache.
     */
    short_cache_min_cacheable_distance: double,
    
    /**
     * Number of elements in the cache.
     */
    short_cache_size: uint32,
    
    /**
     * If a short request takes more than this many steps, it will be rescheduled as a long request.
     */
    short_request_max_steps: uint32,
    
    /**
     * How many steps will be allocated to short requests each tick, as a ratio of all available steps per tick.
     */
    short_request_ratio: double,
    
    /**
     * Somewhere along the path is stuck enemy we need to avoid. This is mainly to handle situations when units have arrived and are attacking the target then units further in the back will use this and run around the target.
     */
    stale_enemy_with_same_destination_collision_penalty: double,
    
    /**
     * If the current actual cost from start is higher than this times estimate of start to goal then path finding is terminated.
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: double,
    use_path_cache: bool
}

interface PipeConnectionDefinition {
    
    /**
     * `0` means not underground.
     */
    max_underground_distance?: uint32,
    
    /**
     * Where pipes can connect to this fluidbox regardless the directions of entity.
     */
    position?: Vector,
    
    /**
     * Only loaded, and mandatory if `position` is not defined.

Where pipes can connect to this fluidbox, depending on the entity direction.

Table must have 4 members, which are 4 explicit positions corresponding to the 4 directions of entity. Positions must correspond to directions going one after another.
     */
    positions?: Vector[],
    type?: 'input' | 'input-output' | 'output'
}

interface PipePictures {
    corner_down_left: Sprite,
    corner_down_right: Sprite,
    corner_up_left: Sprite,
    corner_up_right: Sprite,
    cross: Sprite,
    ending_down: Sprite,
    ending_left: Sprite,
    ending_right: Sprite,
    ending_up: Sprite,
    fluid_background: Sprite,
    
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when the fluid's temperature is above {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    gas_flow: Animation,
    
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `2/3` and the fluid's temperature is below {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    high_temperature_flow: Sprite,
    horizontal_window_background: Sprite,
    
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is less than or equal to `1/3` and the fluid's temperature is below {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    low_temperature_flow: Sprite,
    
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `1/3` and less than or equal to `2/3` and the fluid's temperature is below {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    middle_temperature_flow: Sprite,
    straight_horizontal: Sprite,
    straight_horizontal_window: Sprite,
    straight_vertical: Sprite,
    straight_vertical_single: Sprite,
    straight_vertical_window: Sprite,
    t_down: Sprite,
    t_left: Sprite,
    t_right: Sprite,
    t_up: Sprite,
    vertical_window_background: Sprite
}

interface PipeToGroundPictures {
    down: Sprite,
    left: Sprite,
    right: Sprite,
    up: Sprite
}

interface PlaceAsTile {
    condition: CollisionMask,
    condition_size: int32,
    result: TileID
}

interface PlaceEquipmentTipTrigger {
    count?: uint32,
    equipment?: EquipmentID,
    type: 'place-equipment'
}

/**
 * Defines when controller vibrations should be played.
 */
type PlayFor = /* Play the vibration only if it was caused by the player. For example when shooting a gun, vibration will play when the character shoots but not when a turret shoots. */ 'character_actions' | /* Always play the vibration. Useful for example for explosions. */ 'everything'

interface PlaySoundTriggerEffectItem extends TriggerEffectItem{
    
    /**
     * Negative values are silently clamped to 0.
     */
    audible_distance_modifier?: float,
    
    /**
     * Negative values are silently clamped to 0.
     */
    max_distance?: float,
    
    /**
     * Negative values are silently clamped to 0.
     */
    min_distance?: float,
    play_on_target_position?: bool,
    sound: Sound,
    type: 'play-sound',
    
    /**
     * Negative values are silently clamped to 0.
     */
    volume_modifier?: float
}

interface PlayerColorData {
    chat_color: Color,
    name: string,
    player_color: Color
}

type PlayerInputMethodFilter = 'all' | 'keyboard_and_mouse' | 'game_controller'

/**
 * The pollution settings, the values are for 60 ticks (1 second).
 */
interface PollutionSettings {
    
    /**
     * Constant modifier a percentage of 1; the pollution eaten by a chunks tiles. Also known as absorption modifier.
     */
    ageing: double,
    
    /**
     * Amount that is diffused to neighboring chunks.
     */
    diffusion_ratio: double,
    enabled: bool,
    enemy_attack_pollution_consumption_modifier: double,
    
    /**
     * Anything bigger than this is visualized as this value.
     */
    expected_max_per_chunk: double,
    max_pollution_to_restore_trees: double,
    min_pollution_to_damage_trees: double,
    
    /**
     * This much pollution units must be on the chunk to start diffusing.
     */
    min_to_diffuse: double,
    
    /**
     * Anything lower than this (but > 0) is visualized as this value.
     */
    min_to_show_per_chunk: double,
    pollution_per_tree_damage: double,
    pollution_restored_per_tree_damage: double,
    pollution_with_max_forest_damage: double
}

/**
 * Defaults to loading products as items.
 */
type ProductPrototype = /* Loaded when the `type` is `"item"`. */ ItemProductPrototype | /* Loaded when the `type` is `"fluid"`. */ FluidProductPrototype

type ProductionType = 'None' | 'none' | 'input' | 'input-output' | 'output'

interface ProgrammableSpeakerInstrument {
    name: string,
    notes: ProgrammableSpeakerNote[]
}

interface ProgrammableSpeakerNote {
    name: string,
    sound: Sound
}

interface ProgressBarStyleSpecification extends BaseStyleSpecification{
    bar?: ElementImageSet,
    bar_background?: ElementImageSet,
    bar_width?: uint32,
    color?: Color,
    embed_text_in_bar?: bool,
    filled_font_color?: Color,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string,
    font_color?: Color,
    other_colors?: OtherColors[],
    side_text_padding?: int16,
    type: 'progressbar_style'
}

interface ProjectileAttackParameters extends BaseAttackParameters{
    
    /**
     * When used with `projectile_creation_parameters`, this offsets what the turret's sprite looks at. Setting to `{0,1}` will cause the turret to aim one tile up from the target but the projectile will still aim for the entity. Can be used to give the illusion of height but can also confuse aim logic when set too high.

When used without `projectile_creation_parameters`, this sets the turret's rotation axis.
     */
    projectile_center?: Vector,
    projectile_creation_distance?: float,
    
    /**
     * Used to shoot projectiles from arbitrary points. Used by worms and multi-barreled weapons. Use multiple points with the same angle to cause the turret to shoot from multiple barrels. If not set then the launch positions are calculated using `projectile_center` and `projectile_creation_distance`.
     */
    projectile_creation_parameters?: CircularProjectileCreationSpecification,
    
    /**
     * Used to shoot from different sides of the turret. Setting to `0.25` shoots from the right side, `0.5` shoots from the back, and `0.75` shoots from the left. The turret will look at the enemy as normal but the bullet will spawn from the offset position. Can be used to create right-handed weapons.
     */
    projectile_orientation_offset?: float,
    
    /**
     * Used to show bullet shells/casings being ejected from the gun, see {@link artillery shell casings | https://factorio.com/blog/post/fff-345}.
     */
    shell_particle?: CircularParticleCreationSpecification,
    type: 'projectile'
}

interface ProjectileTriggerDelivery extends TriggerDeliveryItem{
    
    /**
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     */
    direction_deviation?: float,
    max_range?: double,
    min_range?: double,
    
    /**
     * Name of a {@link ProjectilePrototype | prototype:ProjectilePrototype}.
     */
    projectile: EntityID,
    
    /**
     * The maximum deviation of the projectile maximum range from `max_range` is `max_range × range_deviation ÷ 2`. This means a deviation of `0.5` will appear as a maximum of `0.25` (25%) deviation of an initial range goal. Post-deviation range may exceed `max_range` or be less than `min_range`.
     */
    range_deviation?: float,
    
    /**
     * Starting speed in tiles per tick.
     */
    starting_speed: float,
    starting_speed_deviation?: float,
    type: 'projectile'
}

/**
 * A mapping of arrays of {@link PumpConnectorGraphicsAnimations | prototype:PumpConnectorGraphicsAnimation} to all 4 directions of the pump connection (to a fluid wagon).
 * @example
 * ```
 * load_animations =
 * {
 * west = {
 *   [1] = {
 *     standup_base = {
 *       filename = "__base__/graphics/entity/pump/connector/V-R-135-load-standup-base.png",
 *       width = 55,
 *       height = 63,
 *       line_length =1,
 *       frame_count =20,
 *       shift = util.by_pixel(-23.5, -13.5),
 *       hr_version = {
 *         filename = "__base__/graphics/entity/pump/connector/hr-V-R-135-load-standup-base.png",
 *         width = 110,
 *         height = 126,
 *         scale = 0.5,
 *         line_length = 1,
 *         frame_count = 20,
 *         shift = util.by_pixel(-23.5, -13.5)
 *       },
 *     },
 *     standup_shadow = {
 *       filename = "__base__/graphics/entity/pump/connector/V-R-1-load-standup-base-shadow.png",
 *       width = 79,
 *       height = 69,
 *       line_length =1,
 *       frame_count =20,
 *       shift = util.by_pixel(-8.5, 8.5),
 *       hr_version = {
 *         filename = "__base__/graphics/entity/pump/connector/hr-V-R-1-load-standup-base-shadow.png",
 *         width = 157,
 *         height = 136,
 *         scale = 0.5,
 *         line_length = 1,
 *         frame_count = 20,
 *         shift = util.by_pixel(-8.75, 8.5)
 *       },
 *     },
 *   },
 *   [2] = {
 *     standup_base = { ... },
 *     standup_shadow = { ... },
 *     connector_shadow = { ... },
 *   },
 *   [3] = { ... },
 *   [4] = { ... },
 *   [5] = { ... },
 *   [6] = { ... },
 * },
 * north = { ... },
 * east = { ... },
 * south = { ... },
 * }
 * ```
 *
 */
interface PumpConnectorGraphics {
    
    /**
     * Size of the array must be 6 or more.
     */
    east: PumpConnectorGraphicsAnimation[],
    
    /**
     * Size of the array must be 6 or more.
     */
    north: PumpConnectorGraphicsAnimation[],
    
    /**
     * Size of the array must be 6 or more.
     */
    south: PumpConnectorGraphicsAnimation[],
    
    /**
     * Size of the array must be 6 or more.
     */
    west: PumpConnectorGraphicsAnimation[]
}

interface PumpConnectorGraphicsAnimation {
    connector?: Animation,
    connector_shadow?: Animation,
    standup_base?: Animation,
    standup_shadow?: Animation,
    standup_top?: Animation
}

/**
 * The push back effect used by the {@link discharge defense | https://wiki.factorio.com/Discharge_defense}.
 * 
 * Aims to push the target entity away from the source entity by the `distance` from the target entity's current position. Searches within double the `distance` from the pushed to position for the nearest non-colliding position for the target entity to be teleported too. If no valid non-colliding position is found or the target is not teleportable, then no push back occurs.
 */
interface PushBackTriggerEffectItem extends TriggerEffectItem{
    distance: float,
    type: 'push-back'
}

interface RadioButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification{
    disabled_font_color?: Color,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string,
    font_color?: Color,
    text_padding?: uint32,
    type: 'radiobutton_style'
}

/**
 * Sprite to be shown around the entity when it is selected/held in the cursor.
 */
interface RadiusVisualisationSpecification {
    
    /**
     * Must be greater than or equal to 0.
     */
    distance?: double,
    draw_in_cursor?: bool,
    draw_on_selection?: bool,
    offset?: Vector,
    sprite?: Sprite
}

interface RailPictureSet {
    curved_rail_horizontal_left_bottom: RailPieceLayers,
    curved_rail_horizontal_left_top: RailPieceLayers,
    curved_rail_horizontal_right_bottom: RailPieceLayers,
    curved_rail_horizontal_right_top: RailPieceLayers,
    curved_rail_vertical_left_bottom: RailPieceLayers,
    curved_rail_vertical_left_top: RailPieceLayers,
    curved_rail_vertical_right_bottom: RailPieceLayers,
    curved_rail_vertical_right_top: RailPieceLayers,
    rail_endings: Sprite8Way,
    straight_rail_diagonal_left_bottom: RailPieceLayers,
    straight_rail_diagonal_left_top: RailPieceLayers,
    straight_rail_diagonal_right_bottom: RailPieceLayers,
    straight_rail_diagonal_right_top: RailPieceLayers,
    straight_rail_horizontal: RailPieceLayers,
    straight_rail_vertical: RailPieceLayers
}

/**
 * Used for graphics by {@link RailPrototype | prototype:RailPrototype} and {@link RailRemnantsPrototype | prototype:RailRemnantsPrototype}.
 */
interface RailPieceLayers {
    
    /**
     * Must have same number of variations as `metals`.
     */
    backplates: SpriteVariations,
    
    /**
     * Must have between 1 and 4 variations.
     */
    metals: SpriteVariations,
    segment_visualisation_continuing_back?: Sprite,
    segment_visualisation_continuing_front?: Sprite,
    segment_visualisation_ending_back?: Sprite,
    segment_visualisation_ending_front?: Sprite,
    segment_visualisation_middle?: Sprite,
    
    /**
     * Must have between 1 and 4 variations.
     */
    stone_path: SpriteVariations,
    
    /**
     * Must have less or equal than 4 variations.
     */
    stone_path_background?: SpriteVariations,
    
    /**
     * Must have between 1 and 4 variations.
     */
    ties: SpriteVariations
}

interface RandomPenaltyArguments {
    amplitude?: ConstantNoiseNumber,
    
    /**
     * Integer used to seed the random generator.
     */
    seed?: ConstantNoiseNumber,
    
    /**
     * Number that the penalty is applied to.
     */
    source: NoiseNumber,
    
    /**
     * Number used to seed the random generator.
     */
    x: NoiseNumber,
    
    /**
     * Number used to seed the random generator.
     */
    y: NoiseNumber
}

/**
 * Specified by a {@link float | prototype:float} between 0 and 1, including 0 and excluding 1.
 */
type RealOrientation = float

/**
 * The name of a {@link RecipeCategory | prototype:RecipeCategory}.
 * @example
 * ```
 * "crafting"
 * ```
 *
 * @example
 * ```
 * "smelting"
 * ```
 *
 */
type RecipeCategoryID = string

/**
 * Used when defining a {@link RecipePrototype | prototype:RecipePrototype} that uses difficulty. For a recipe without difficulty, these same properties are defined on the prototype itself.
 */
interface RecipeData {
    
    /**
     * Whether the recipe can be used as an intermediate recipe in hand-crafting.
     */
    allow_as_intermediate?: bool,
    
    /**
     * Whether this recipe is allowed to be broken down for the recipe tooltip "Total raw" calculations.
     */
    allow_decomposition?: bool,
    
    /**
     * Whether the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).
     */
    allow_inserter_overload?: bool,
    
    /**
     * Whether the recipe is allowed to use intermediate recipes when hand-crafting.
     */
    allow_intermediates?: bool,
    
    /**
     * Whether the "Made in: <Machine>" part of the tool-tip should always be present, and not only when the recipe can't be hand-crafted.
     */
    always_show_made_in?: bool,
    
    /**
     * Whether the products are always shown in the recipe tooltip.
     */
    always_show_products?: bool,
    emissions_multiplier?: double,
    
    /**
     * This can be `false` to disable the recipe at the start of the game, or `true` to leave it enabled.

If a recipe is unlocked via technology, this should be set to `false`.
     */
    enabled?: bool,
    
    /**
     * The amount of time it takes to make this recipe. Must be `> 0.001`. Equals the number of seconds it takes to craft at crafting speed `1`.
     */
    energy_required?: double,
    
    /**
     * Hides the recipe from crafting menus.
     */
    hidden?: bool,
    
    /**
     * Hides the recipe from the player's crafting screen. The recipe will still show up for selection in machines.
     */
    hide_from_player_crafting?: bool,
    
    /**
     * Hides the recipe from item/fluid production statistics.
     */
    hide_from_stats?: bool,
    
    /**
     * A table containing ingredient names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the IngredientPrototype (see {@link here | https://factorio.com/blog/post/fff-256}).

The maximum ingredient amount is 65 535. Can be set to an empty table to create a recipe that needs no ingredients.

Duplicate ingredients, e.g. two entries with the same name, are *not* allowed. In-game, the item ingredients are ordered by {@link ItemGroup::order_in_recipe | prototype:ItemGroup::order_in_recipe}.
     */
    ingredients: IngredientPrototype[],
    
    /**
     * For recipes with one or more products: Subgroup, localised_name and icon default to the values of the singular/main product, but can be overwritten by the recipe. Setting the main_product to an empty string (`""`) forces the title in the recipe tooltip to use the recipe's name (not that of the product) and shows the products in the tooltip.

If 1) there are multiple products and this property is nil, 2) this property is set to an empty string (`""`), or 3) there are no products, the recipe will use the localised_name, icon, and subgroup of the recipe. icon and subgroup become non-optional.
     */
    main_product?: string,
    
    /**
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough". See {@link insertion limits | https://wiki.factorio.com/Inserters#Insertion_limits}.

If set to `0`, it instead uses the following formula: `1.166 / (energy_required / the assembler's crafting_speed)`, rounded up, and clamped to be between`2` and `100`. The numbers used in this formula can be changed by the {@link UtilityConstants | prototype:UtilityConstants} properties `dynamic_recipe_overload_factor`, `minimum_recipe_overload_multiplier`, and `maximum_recipe_overload_multiplier`.
     */
    overload_multiplier?: uint32,
    requester_paste_multiplier?: uint32,
    
    /**
     * The item created by this recipe. Must be the name of an {@link item | prototype:ItemPrototype}, such as `"iron-gear-wheel"`.

Only loaded, and mandatory if `results` is not defined.
     */
    result?: ItemID,
    
    /**
     * The number of items created by this recipe.

Only loaded if `results` is not defined.
     */
    result_count?: uint16,
    
    /**
     * A table containing result names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the ProductPrototype (see {@link here | https://factorio.com/blog/post/fff-256}).

Can be set to an empty table to create a recipe that produces nothing. Duplicate results, e.g. two entries with the same name, are allowed.
     */
    results?: ProductPrototype[],
    
    /**
     * Whether the recipe name should have the product amount in front of it. E.g. "2x Transport belt"
     */
    show_amount_in_title?: bool,
    
    /**
     * Whether enabling this recipe unlocks its item products to show in selection lists (item filters, logistic requests, etc.).
     */
    unlock_results?: bool
}

/**
 * The name of a {@link RecipePrototype | prototype:RecipePrototype}.
 * @example
 * ```
 * "electronic-circuit"
 * ```
 *
 * @example
 * ```
 * "kovarex-enrichment-process"
 * ```
 *
 */
type RecipeID = string

/**
 * The render layer specifies the order of the sprite when rendering, most of the objects have it hardcoded in the source, but some are configurable. The union contains valid values from lowest to highest.
 */
type RenderLayer = 'water-tile' | 'ground-tile' | 'tile-transition' | 'decals' | 'lower-radius-visualization' | 'radius-visualization' | 'transport-belt-integration' | 'resource' | 'building-smoke' | 'decorative' | 'ground-patch' | 'ground-patch-higher' | 'ground-patch-higher2' | 'remnants' | 'floor' | 'transport-belt' | 'transport-belt-endings' | 'transport-belt-circuit-connector' | 'floor-mechanics-under-corpse' | 'corpse' | 'floor-mechanics' | 'item' | 'lower-object' | 'lower-object-above-shadow' | 'object' | 'higher-object-under' | 'higher-object-above' | 'item-in-inserter-hand' | 'wires' | 'wires-above' | 'entity-info-icon' | 'entity-info-icon-above' | 'explosion' | 'projectile' | 'smoke' | 'air-object' | 'air-entity-info-icon' | 'light-effect' | 'selection-box' | 'higher-selection-box' | 'collision-selection-box' | 'arrow' | 'cursor'

interface ResearchTechnologyTipTrigger {
    technology: TechnologyID,
    type: 'research'
}

/**
 * Resistances to certain types of attacks from enemy, and physical damage. See {@link Damage | https://wiki.factorio.com/Damage}.
 * @example
 * ```
 * resistances =
 * {
 *   {
 *     type = "physical",
 *     decrease = 6,
 *     percent = 30
 *   },
 *   {
 *     type = "explosion",
 *     decrease = 20,
 *     percent = 30
 *   },
 *   {
 *     type = "acid",
 *     decrease = 3,
 *     percent = 30
 *   },
 *   {
 *     type = "fire",
 *     decrease = 0,
 *     percent = 30
 *   }
 * }
 * ```
 *
 */
interface Resistance {
    
    /**
     * The {@link flat resistance | https://wiki.factorio.com/Damage#Decrease.2C_or_.22flat.22_resistance} to the given damage type. (Higher is better)
     */
    decrease?: float,
    
    /**
     * The {@link percentage resistance | https://wiki.factorio.com/Damage#Percentage_resistance} to the given damage type. (Higher is better)
     */
    percent?: float,
    type: DamageTypeID
}

/**
 * The name of a {@link ResourceCategory | prototype:ResourceCategory}.
 * @example
 * ```
 * "basic-solid"
 * ```
 *
 * @example
 * ```
 * "basic-fluid"
 * ```
 *
 */
type ResourceCategoryID = string

type RichTextSetting = 'enabled' | 'disabled' | 'highlight'

interface RotatedAnimation extends AnimationParameters{
    
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_projection?: bool,
    
    /**
     * Only loaded if `layers` is not defined.

If `true`, `direction_count` must be greater than `1`.
     */
    axially_symmetrical?: bool,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    counterclockwise?: bool,
    
    /**
     * Only loaded, and mandatory if `layers` is not defined.

The sequential animation instance is loaded equal to the entities direction within the `direction_count` setting.

Direction count to {@link Direction | prototype:Direction} (animation sequence number):

- `1`: North (1)

- `2`: North (1), South (2)

- `4`: North (1), East (2), South (3), West (4)

- `8`: North (1), Northeast (2), East (3), Southeast (4), South (5), Southwest (6), West (7), Northwest (8)
     */
    direction_count?: uint32,
    
    /**
     * Only loaded, and mandatory if `layers`, `stripes`, and `filenames` are not defined.

The path to the sprite file to use.
     */
    filename?: FileName,
    
    /**
     * Only loaded if both `layers` and `stripes` are not defined.
     */
    filenames?: FileName[],
    
    /**
     * Only loaded if `layers` is not defined.

If this property exists and high resolution sprites are turned on, this is used to load the animation.
     */
    hr_version?: RotatedAnimation,
    
    /**
     * If this property is present, all RotatedAnimation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.

If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     */
    layers?: RotatedAnimation[],
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint32,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    middle_orientation?: RealOrientation,
    
    /**
     * Only loaded if `layers` is not defined.

Automatically clamped to be between `0` and `1`.
     */
    orientation_range?: float,
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    slice?: uint32,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    still_frame?: uint32,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: Stripe[]
}

/**
 * A map of rotated animations for all 4 directions of the entity. If this is loaded as a single RotatedAnimation, it applies to all directions.
 */
type RotatedAnimation4Way = {
    
    /**
     * Defaults to the north animation.
     */
    east?: RotatedAnimation,
    north: RotatedAnimation,
    
    /**
     * Defaults to the north animation.
     */
    south?: RotatedAnimation,
    
    /**
     * Defaults to the east animation.
     */
    west?: RotatedAnimation
} | RotatedAnimation

type RotatedAnimationVariations = RotatedAnimation | RotatedAnimation[]

/**
 * Specifies series of sprites used to visualize different rotations of the object.
 * @example
 * ```
 * pictures =
 * {
 *   layers =
 *   {
 *     {
 *       filename = "__base__/graphics/entity/radar/radar.png",
 *       priority = "low",
 *       width = 98,
 *       height = 128,
 *       apply_projection = false,
 *       direction_count = 64,
 *       line_length = 8,
 *       shift = util.by_pixel(1, -16),
 *       hr_version =
 *       {
 *         filename = "__base__/graphics/entity/radar/hr-radar.png",
 *         priority = "low",
 *         width = 196,
 *         height = 254,
 *         apply_projection = false,
 *         direction_count = 64,
 *         line_length = 8,
 *         shift = util.by_pixel(1, -16),
 *         scale = 0.5
 *       }
 *     },
 *     {
 *       filename = "__base__/graphics/entity/radar/radar-shadow.png",
 *       priority = "low",
 *       width = 172,
 *       height = 94,
 *       apply_projection = false,
 *       direction_count = 64,
 *       line_length = 8,
 *       shift = util.by_pixel(39,3),
 *       draw_as_shadow = true,
 *       hr_version =
 *       {
 *         filename = "__base__/graphics/entity/radar/hr-radar-shadow.png",
 *         priority = "low",
 *         width = 343,
 *         height = 186,
 *         apply_projection = false,
 *         direction_count = 64,
 *         line_length = 8,
 *         shift = util.by_pixel(39.25,3),
 *         draw_as_shadow = true,
 *         scale = 0.5
 *       }
 *     }
 *   }
 * }
 * ```
 *
 */
interface RotatedSprite extends SpriteParameters{
    
    /**
     * Only loaded if `layers` is not defined.
     */
    allow_low_quality_rotation?: bool,
    
    /**
     * Only loaded if `layers` is not defined.

Used to fix the inconsistency of direction of the entity in 3d when rendered and direction on the screen (where the 45 degree angle for projection is used).
     */
    apply_projection?: bool,
    
    /**
     * Only loaded if `layers` is not defined.

When `true`, the same picture is used for left/right direction, just flipped, which can save half of the space required, but is not usable once the picture contains shadows, etc.
     */
    axially_symmetrical?: bool,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    back_equals_front?: bool,
    
    /**
     * Only loaded if `layers` is not defined.

Set to `true` to indicate sprites in the spritesheet are in counterclockwise order.
     */
    counterclockwise?: bool,
    
    /**
     * Only loaded, and mandatory if `layers` is not defined.

Count of direction (frames) specified.
     */
    direction_count?: uint16,
    
    /**
     * Only loaded if `layers` is not defined.

The path to the sprite file to use.
     */
    filename?: FileName,
    
    /**
     * Only loaded, and mandatory if both `layers` and `filename` are not defined.
     */
    filenames?: FileName[],
    
    /**
     * Only loaded if `layers` is not defined.

Unused.
     */
    generate_sdf?: bool,
    
    /**
     * Only loaded if `layers` is not defined.

If this property exists and high resolution sprites are turned on, this is used to load the sprite.
     */
    hr_version?: RotatedSprite,
    
    /**
     * If this property is present, all RotatedSprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.

If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: RotatedSprite[],
    
    /**
     * Only loaded if `layers` is not defined.

Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having more sprites in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint32,
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint64,
    
    /**
     * Only loaded if `layers` is not defined.

Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
     */
    slice?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Same as `slice`, but this specifies only how many slices there are on the x-axis.
     */
    slice_x?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Same as `slice`, but this specifies only how many slices there are on the y-axis.
     */
    slice_y?: SpriteSizeType
}

interface ScriptTriggerEffectItem extends TriggerEffectItem{
    
    /**
     * The effect ID that will be provided in {@link on_script_trigger_effect | runtime:on_script_trigger_effect}.
     */
    effect_id: string,
    type: 'script'
}

interface ScrollBarStyleSpecification extends BaseStyleSpecification{
    background_graphical_set?: ElementImageSet,
    thumb_button_style?: ButtonStyleSpecification
}

interface ScrollPaneStyleSpecification extends BaseStyleSpecification{
    background_graphical_set?: ElementImageSet,
    dont_force_clipping_rect_for_contents?: bool,
    extra_bottom_margin_when_activated?: int32,
    extra_bottom_padding_when_activated?: int32,
    extra_left_margin_when_activated?: int32,
    extra_left_padding_when_activated?: int32,
    
    /**
     * Sets `extra_top_margin_when_activated`, `extra_bottom_margin_when_activated`, `extra_left_margin_when_activated` and `extra_right_margin_when_activated`.
     */
    extra_margin_when_activated?: int32,
    
    /**
     * Sets `extra_top_padding_when_activated`, `extra_bottom_padding_when_activated`, `extra_left_padding_when_activated` and `extra_right_padding_when_activated`.
     */
    extra_padding_when_activated?: int32,
    extra_right_margin_when_activated?: int32,
    extra_right_padding_when_activated?: int32,
    extra_top_margin_when_activated?: int32,
    extra_top_padding_when_activated?: int32,
    graphical_set?: ElementImageSet,
    horizontal_scrollbar_style?: HorizontalScrollBarStyleSpecification,
    type: 'scroll_pane_style',
    vertical_flow_style?: VerticalFlowStyleSpecification,
    vertical_scrollbar_style?: VerticalScrollBarStyleSpecification
}

/**
 * An array containing the following values.
 */
type SelectionModeFlags = /* Selects entities and tiles as if selecting them for a blueprint. */ 'blueprint' | /* Selects entities and tiles as if selecting them for deconstruction. */ 'deconstruct' | /* Selects entities and tiles as if selecting them for deconstruction cancellation. */ 'cancel-deconstruct' | /* Selects items on the ground. */ 'items' | /* Selects trees. */ 'trees' | /* Selects entities which are considered {@link a building | runtime:LuaEntityPrototype::is_building}, plus landmines. */ 'buildable-type' | /* Selects no entities or tiles, but is useful to select an area. */ 'nothing' | /* Selects entities and tiles that can be built by an item. */ 'items-to-place' | /* Selects all entities. */ 'any-entity' | /* Selects all tiles. */ 'any-tile' | /* Selects entities with the same force as the selecting player. */ 'same-force' | /* Selects entities with a different force as the selecting player. */ 'not-same-force' | /* Selects entities from a friendly force. */ 'friend' | /* Selects entities from an enemy force. */ 'enemy' | /* Selects entities as if selecting them for upgrading. */ 'upgrade' | /* Selects entities as if selecting them for upgrade cancellation. */ 'cancel-upgrade' | /* Selects entities as if selecting them for downgrading. */ 'downgrade' | /* Selects entities that are an {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype}. */ 'entity-with-health' | /* Deprecated. Replaced by "is-military-target". */ 'entity-with-force' | /* Selects entities which are {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target}. */ 'is-military-target' | /* Selects entities that are an {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype}. */ 'entity-with-owner' | /* Selects entities that are not a {@link RollingStockPrototype | prototype:RollingStockPrototype}. */ 'avoid-rolling-stock' | /* Selects entities that are an {@link EntityGhostPrototype | prototype:EntityGhostPrototype}. */ 'entity-ghost' | /* Selects entities that are a {@link TileGhostPrototype | prototype:TileGhostPrototype}. */ 'tile-ghost' | Array</* Selects entities and tiles as if selecting them for a blueprint. */ 'blueprint' | /* Selects entities and tiles as if selecting them for deconstruction. */ 'deconstruct' | /* Selects entities and tiles as if selecting them for deconstruction cancellation. */ 'cancel-deconstruct' | /* Selects items on the ground. */ 'items' | /* Selects trees. */ 'trees' | /* Selects entities which are considered {@link a building | runtime:LuaEntityPrototype::is_building}, plus landmines. */ 'buildable-type' | /* Selects no entities or tiles, but is useful to select an area. */ 'nothing' | /* Selects entities and tiles that can be built by an item. */ 'items-to-place' | /* Selects all entities. */ 'any-entity' | /* Selects all tiles. */ 'any-tile' | /* Selects entities with the same force as the selecting player. */ 'same-force' | /* Selects entities with a different force as the selecting player. */ 'not-same-force' | /* Selects entities from a friendly force. */ 'friend' | /* Selects entities from an enemy force. */ 'enemy' | /* Selects entities as if selecting them for upgrading. */ 'upgrade' | /* Selects entities as if selecting them for upgrade cancellation. */ 'cancel-upgrade' | /* Selects entities as if selecting them for downgrading. */ 'downgrade' | /* Selects entities that are an {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype}. */ 'entity-with-health' | /* Deprecated. Replaced by "is-military-target". */ 'entity-with-force' | /* Selects entities which are {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target}. */ 'is-military-target' | /* Selects entities that are an {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype}. */ 'entity-with-owner' | /* Selects entities that are not a {@link RollingStockPrototype | prototype:RollingStockPrototype}. */ 'avoid-rolling-stock' | /* Selects entities that are an {@link EntityGhostPrototype | prototype:EntityGhostPrototype}. */ 'entity-ghost' | /* Selects entities that are a {@link TileGhostPrototype | prototype:TileGhostPrototype}. */ 'tile-ghost'>

interface SequenceTipTrigger {
    
    /**
     * List of triggers to fulfill.
     */
    triggers: TipTrigger[],
    type: 'sequence'
}

interface SetFilterTipTrigger {
    consecutive?: bool,
    count?: uint32,
    entity?: EntityID,
    match_type_only?: bool,
    type: 'set-filter'
}

interface SetLogisticRequestTipTrigger {
    count?: uint32,
    logistic_chest_only?: bool,
    type: 'set-logistic-request'
}

interface SetRecipeTipTrigger {
    consecutive?: bool,
    machine?: EntityID,
    recipe?: RecipeID,
    type: 'set-recipe',
    uses_fluid?: bool
}

interface SetTileTriggerEffectItem extends TriggerEffectItem{
    apply_projection?: bool,
    radius: float,
    tile_collision_mask?: CollisionMask,
    tile_name: TileID,
    type: 'set-tile'
}

/**
 * A struct that provides access to the user-set values of startup {@link mod settings | https://wiki.factorio.com/Tutorial:Mod_settings}.
 * @example
 * ```
 * -- Accessing the value of a mod setting
 * local val = settings.startup["my-mod-setting-name"].value
 * ```
 *
 */
interface Settings {
    
    /**
     * All startup mod settings, indexed by the name of the setting.
     */
    startup: {[key: string]: ModSetting}
}

interface ShiftAnimationWaypoints {
    east: Vector[],
    north: Vector[],
    south: Vector[],
    west: Vector[]
}

interface ShiftBuildTipTrigger {
    count?: uint32,
    type: 'shift-build'
}

interface ShowExplosionOnChartTriggerEffectItem extends TriggerEffectItem{
    scale: float,
    type: 'show-explosion-on-chart'
}

interface SignalColorMapping {
    color: Color,
    
    /**
     * Name of the signal that shows this color.
     */
    name: VirtualSignalID | ItemID | FluidID,
    type: 'virtual' | 'item' | 'fluid'
}

interface SignalIDConnector {
    
    /**
     * Name of the signal that shows this color.
     */
    name: VirtualSignalID | ItemID | FluidID,
    type: 'virtual' | 'item' | 'fluid'
}

interface SimpleModifier extends BaseModifier{
    
    /**
     * Modification value, which will be added to the variable it modifies.
     */
    modifier: double
}

/**
 * Used by tips and tricks and main menu simulations.
 * 
 * There are a few simulation-only APIs:
 * 
 * ```
 * game.create_test_player{name=string}
 * game.activate_rail_planner{position=position,ghost_mode=bool}
 * game.deactivate_rail_planner()
 * game.move_cursor{position=position,speed=number}  -- should be called every tick; returns true when target is reached
 * game.activate_selection()
 * game.finish_selection()
 * game.deactivate_selection()
 * game.scroll_clipboard_forwards()
 * game.scroll_clipboard_backwards()
 * game.camera_player_cursor_position [RW]
 * game.camera_position [RW]
 * game.camera_zoom [W]
 * game.camera_player [W]
 * game.camera_player_cursor_direction [W]
 * game.camera_alt_info [W]
 * game.smart_belt_building [W]
 * player.drag_start_position [W]
 * player.raw_build_from_cursor{ghost_mode=bool,created_by_moving=bool,position=position}
 * surface.create_entities_from_blueprint_string{string=string,position=position,force=force,direction=defines.direction,flip_horizontal=bool,flip_vertical=bool,by_player=player}
 * ```
 */
interface SimulationDefinition {
    
    /**
     * If this is true, the map of the simulation is set to be a lab-tile checkerboard in the area of `{{-20, -15},{20, 15}}` when the scenario is first initialized (before init/init_file run).
     */
    checkboard?: bool,
    
    /**
     * If `save` is not given and this is true, a map gets generated by the game for use in the simulation.
     */
    generate_map?: bool,
    
    /**
     * Only loaded if `init_file` is not defined.

This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    init?: string,
    
    /**
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    init_file?: FileName,
    
    /**
     * Amount of ticks that this simulation should run for before the simulation is shown to the player. These updates happen after init/init_file has been run and at the highest possible rate (> 60 UPS).
     */
    init_update_count?: uint32,
    
    /**
     * How long this simulation takes. In the main menu simulations, another simulation will start after this simulation ends.
     */
    length?: uint32,
    
    /**
     * An array of mods that will be run in this simulation if they are present and enabled.
     */
    mods?: string[],
    
    /**
     * If true, overrides the simulation volume set by the player in the sound settings, simply setting the volume modifier to `1`.
     */
    override_volume?: bool,
    
    /**
     * The save file that is used for this simulation. If not given and `generate_map` is `true`, a map is generated by the game.
     */
    save?: FileName,
    
    /**
     * Only loaded if `update_file` is not defined.

This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    update?: string,
    
    /**
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    update_file?: FileName,
    
    /**
     * Multiplier for the simulation volume set by the player in the sound settings.
     */
    volume_modifier?: float
}

interface SliderStyleSpecificationBase extends BaseStyleSpecification{
    button?: ButtonStyleSpecification,
    draw_notches?: bool,
    empty_bar?: ElementImageSet,
    empty_bar_disabled?: ElementImageSet,
    full_bar?: ElementImageSet,
    full_bar_disabled?: ElementImageSet,
    high_button?: ButtonStyleSpecification,
    notch?: ElementImageSet,
    type: string
}

/**
 * Definition of the smoke of an entity.
 */
interface SmokeSource {
    deviation?: MapPosition,
    east_position?: Vector,
    
    /**
     * Can't be negative, NaN or infinite.
     */
    frequency: double,
    height?: float,
    height_deviation?: float,
    name: TrivialSmokeID,
    north_position?: Vector,
    offset?: double,
    position?: Vector,
    slow_down_factor?: uint8,
    south_position?: Vector,
    starting_frame?: uint16,
    starting_frame_deviation?: double,
    starting_frame_speed?: uint16,
    starting_frame_speed_deviation?: double,
    starting_vertical_speed?: float,
    starting_vertical_speed_deviation?: float,
    
    /**
     * A value between `0` and `1`.
     */
    vertical_speed_slowdown?: float,
    west_position?: Vector
}

/**
 * @example
 * ```
 * {
 *   filename = "__base__/sound/ambient/world-ambience-3.ogg",
 *   volume = 1.2
 * }
 * ```
 *
 */
type Sound = {
    aggregation?: AggregationSpecification,
    allow_random_repeat?: bool,
    
    /**
     * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
     */
    audible_distance_modifier?: double,
    
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.

Only loaded, and mandatory if `variations` is not defined.
     */
    filename?: FileName,
    game_controller_vibration_data?: GameControllerVibrationData,
    
    /**
     * Must be `>= min_speed`.

Only loaded if `variations` is not defined. Only loaded, and mandatory if `min_speed` is defined.
     */
    max_speed?: float,
    
    /**
     * Must be `>= 1 / 64`.

Only loaded if both `variations` and `speed` are not defined.
     */
    min_speed?: float,
    
    /**
     * Only loaded if `variations` is not defined.
     */
    preload?: bool,
    
    /**
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.

Only loaded if `variations` is not defined.
     */
    speed?: float,
    variations?: SoundDefinition[],
    
    /**
     * Only loaded if `variations` is not defined.
     */
    volume?: float
} | SoundDefinition[]

interface SoundDefinition {
    
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
     */
    filename: FileName,
    
    /**
     * Only loaded, and mandatory, if `min_speed` is defined.

Must be `>= min_speed`.
     */
    max_speed?: float,
    
    /**
     * Only loaded if `speed` is not defined.

Must be `>= 1 / 64`.
     */
    min_speed?: float,
    preload?: bool,
    
    /**
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.
     */
    speed?: float,
    volume?: float
}

/**
 * This defines which slider in the sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
 */
type SoundType = 'game-effect' | 'gui-effect' | 'ambient' | 'environment' | 'walking' | 'alert' | 'wind'

/**
 * The definition of a evolution and probability weights for a {@link spawnable unit | prototype:UnitSpawnDefinition} for a {@link EnemySpawnerPrototype | prototype:EnemySpawnerPrototype}.
 * 
 * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the evolution factor and the second is the spawn weight.
 */
type SpawnPoint = {
    evolution_factor: double,
    
    /**
     * Must be `>= 0`.
     */
    spawn_weight: double
} | 
[    double,
    double
]

interface SpeechBubbleStyleSpecification extends BaseStyleSpecification{
    arrow_graphical_set?: ElementImageSet,
    arrow_indent?: double,
    close_color?: Color,
    frame_style?: FrameStyleSpecification,
    label_style?: LabelStyleSpecification,
    pass_through_mouse?: bool,
    type: 'speech_bubble_style'
}

/**
 * Used by {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpiderEnginePrototype {
    legs: SpiderLegSpecification | SpiderLegSpecification[],
    
    /**
     * The string content is irrelevant, if it is present at all then the {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype} is considered to have {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target} set to true. This gets enemies interested in attacking the spider vehicle even when nobody is in it.
     */
    military_target?: string
}

interface SpiderLegGraphicsSet {
    joint?: Sprite,
    joint_shadow?: Sprite,
    joint_turn_offset?: float,
    lower_part?: SpiderLegPart,
    lower_part_shadow?: SpiderLegPart,
    lower_part_water_reflection?: SpiderLegPart,
    upper_part?: SpiderLegPart,
    upper_part_shadow?: SpiderLegPart,
    upper_part_water_reflection?: SpiderLegPart
}

interface SpiderLegPart {
    bottom_end?: Sprite,
    bottom_end_length?: float,
    middle?: Sprite,
    middle_offset_from_bottom?: float,
    middle_offset_from_top?: float,
    top_end?: Sprite,
    top_end_length?: float
}

/**
 * Used by {@link SpiderEnginePrototype | prototype:SpiderEnginePrototype} for {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpiderLegSpecification {
    
    /**
     * The 1-based indices of the legs that should block this leg's movement.
     */
    blocking_legs: uint32[],
    ground_position: Vector,
    
    /**
     * Name of a {@link SpiderLegPrototype | prototype:SpiderLegPrototype}.
     */
    leg: EntityID,
    
    /**
     * For triggers, the source and target is the leg entity. Certain effects may not raise as desired, e.g. `"push-back"` does nothing, and `"script"` has `leg` as the source and target of the event.
     */
    leg_hit_the_ground_trigger?: TriggerEffect,
    mount_position: Vector
}

/**
 * Used to specify the graphics for {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpiderVehicleGraphicsSet {
    animation?: RotatedAnimation,
    autopilot_destination_on_map_visualisation?: Animation,
    autopilot_destination_queue_on_map_visualisation?: Animation,
    autopilot_destination_queue_visualisation?: Animation,
    autopilot_destination_visualisation?: Animation,
    autopilot_destination_visualisation_render_layer?: RenderLayer,
    autopilot_path_visualisation_line_width?: float,
    autopilot_path_visualisation_on_map_line_width?: float,
    base_animation?: RotatedAnimation,
    base_render_layer?: RenderLayer,
    
    /**
     * Placed in multiple positions, as determined by `light_positions`.
     */
    eye_light?: LightDefinition,
    light?: LightDefinition,
    
    /**
     * Defines where each `eye_light` is placed. One array per eye and each of those arrays should contain one position per body direction.
     */
    light_positions?: Array<Vector[]>,
    render_layer?: RenderLayer,
    shadow_animation?: RotatedAnimation,
    shadow_base_animation?: RotatedAnimation
}

interface SpotNoiseArguments {
    basement_value: ConstantNoiseNumber,
    
    /**
     * Integer. How many candidate points to generate.
     */
    candidate_point_count?: ConstantNoiseNumber,
    
    /**
     * Integer. An alternative to `candidate_point_count`: number of spots to generate: `candidate_spot_count = X` is equivalent to `candidate_point_count / skip_span = X`
     */
    candidate_spot_count?: ConstantNoiseNumber,
    comment?: NoiseLiteralString,
    
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate density at that point.
     */
    density_expression: NoiseLiteralExpression,
    
    /**
     * Whether to place a hard limit on the total quantity in each region by reducing the size of any spot (which will be the last spot chosen) that would put it over the limit.
     */
    hard_region_target_quantity?: ConstantNoiseBoolean,
    maximum_spot_basement_radius: ConstantNoiseNumber,
    
    /**
     * Integer. The width and height of each region.
     */
    region_size?: ConstantNoiseNumber,
    
    /**
     * Integer. First random seed, usually the map seed is used.
     */
    seed0: ConstantNoiseNumber,
    
    /**
     * Integer. Second random seed, usually chosen to identify the noise layer.
     */
    seed1: ConstantNoiseNumber,
    
    /**
     * Integer. Offset of the first candidate point to use.
     */
    skip_offset?: ConstantNoiseNumber,
    
    /**
     * Integer. Number of candidate points to skip over after each one used as a spot, including the used one.
     */
    skip_span?: ConstantNoiseNumber,
    
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's favorability. Spots with higher favorability will be considered first when building the final list of spots for a region.
     */
    spot_favorability_expression: NoiseLiteralExpression,
    
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's quantity.
     */
    spot_quantity_expression: NoiseLiteralExpression,
    
    /**
     * A numeric expression that will be evaluated for each candidate spot to calculate the spot's radius. This, together with quantity, will determine the spots peak value.
     */
    spot_radius_expression: NoiseLiteralExpression,
    
    /**
     * The minimum spacing to *try* to achieve while randomly picking points. Spot noise may end up placing spots closer than this in crowded regions.
     */
    suggested_minimum_candidate_point_spacing?: ConstantNoiseNumber,
    x: NoiseNumber,
    y: NoiseNumber
}

/**
 * Specifies one picture that can be used in the game.
 * 
 * When there is more than one sprite or {@link Animation | prototype:Animation} frame with the same source file and dimensions/position in the game, they all share the same memory.
 * @example
 * ```
 * -- simple sprite
 * picture_set_enemy =
 * {
 *   filename = "__base__/graphics/entity/land-mine/land-mine-set-enemy.png",
 *   priority = "medium",
 *   width = 32,
 *   height = 32
 * }
 * ```
 *
 * @example
 * ```
 * -- sprite with hr version
 * picture =
 * {
 *   filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
 *   priority = "extra-high",
 *   width = 32,
 *   height = 36,
 *   shift = util.by_pixel(0.5, -2),
 *   hr_version =
 *   {
 *     filename = "__base__/graphics/entity/wooden-chest/hr-wooden-chest.png",
 *     priority = "extra-high",
 *     width = 62,
 *     height = 72,
 *     shift = util.by_pixel(0.5, -2),
 *     scale = 0.5
 *   }
 * }
 * ```
 *
 * @example
 * ```
 * -- sprite with layers
 * picture =
 * {
 *   layers =
 *   {
 *     {
 *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
 *       priority = "extra-high",
 *       width = 32,
 *       height = 36,
 *       shift = util.by_pixel(0.5, -2)
 *     },
 *     {
 *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest-shadow.png",
 *       priority = "extra-high",
 *       width = 52,
 *       height = 20,
 *       shift = util.by_pixel(10, 6.5),
 *       draw_as_shadow = true
 *     }
 *   }
 * }
 * ```
 *
 * @example
 * ```
 * -- sprite with layers and hr version
 * picture =
 * {
 *   layers =
 *   {
 *     {
 *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
 *       priority = "extra-high",
 *       width = 32,
 *       height = 36,
 *       shift = util.by_pixel(0.5, -2),
 *       hr_version =
 *       {
 *         filename = "__base__/graphics/entity/wooden-chest/hr-wooden-chest.png",
 *         priority = "extra-high",
 *         width = 62,
 *         height = 72,
 *         shift = util.by_pixel(0.5, -2),
 *         scale = 0.5
 *       }
 *     },
 *     {
 *       filename = "__base__/graphics/entity/wooden-chest/wooden-chest-shadow.png",
 *       priority = "extra-high",
 *       width = 52,
 *       height = 20,
 *       shift = util.by_pixel(10, 6.5),
 *       draw_as_shadow = true,
 *       hr_version =
 *       {
 *         filename = "__base__/graphics/entity/wooden-chest/hr-wooden-chest-shadow.png",
 *         priority = "extra-high",
 *         width = 104,
 *         height = 40,
 *         shift = util.by_pixel(10, 6.5),
 *         draw_as_shadow = true,
 *         scale = 0.5
 *       }
 *     }
 *   }
 * }
 * ```
 *
 */
interface Sprite extends SpriteParameters{
    
    /**
     * Only loaded, and mandatory if `layers` is not defined.

The path to the sprite file to use.
     */
    filename?: FileName,
    
    /**
     * Only loaded if `layers` is not defined.

If this property exists and high resolution sprites are turned on, this is used to load the Sprite.
     */
    hr_version?: Sprite,
    
    /**
     * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.

If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: Sprite[],
    
    /**
     * Only loaded if `layers` is not defined.

Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
     */
    slice?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Same as `slice`, but this specifies only how many slices there are on the x-axis.
     */
    slice_x?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Same as `slice`, but this specifies only how many slices there are on the y-axis.
     */
    slice_y?: SpriteSizeType
}

/**
 * A map of sprites for all 4 directions of the entity. If this is loaded as a single Sprite, it applies to all directions.
 * @example
 * ```
 * -- separate sprites per direction
 * {
 *   north =
 *   {
 *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-N.png",
 *     priority = "extra-high",
 *     width = 35,
 *     height = 18,
 *     shift = util.by_pixel(2.5, 14)
 *   },
 *   east =
 *   {
 *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-E.png",
 *     priority = "extra-high",
 *     width = 20,
 *     height = 38,
 *     shift = util.by_pixel(-25, 1)
 *   },
 *   south =
 *   {
 *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-S.png",
 *     priority = "extra-high",
 *     width = 44,
 *     height = 31,
 *     shift = util.by_pixel(0, -31.5)
 *   },
 *   west =
 *   {
 *     filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-W.png",
 *     priority = "extra-high",
 *     width = 19,
 *     height = 37,
 *     shift = util.by_pixel(25.5, 1.5)
 *   }
 * }
 * ```
 *
 */
type Sprite4Way = {
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    east?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north?: Sprite,
    
    /**
     * Only loaded if `sheets` is not defined.
     */
    sheet?: SpriteNWaySheet,
    sheets?: SpriteNWaySheet[],
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    west?: Sprite
} | Sprite

/**
 * A map of sprites for all 8 directions of the entity.
 */
interface Sprite8Way {
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    east?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_east?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_west?: Sprite,
    
    /**
     * Only loaded if `sheets` is not defined.
     */
    sheet?: SpriteNWaySheet,
    sheets?: SpriteNWaySheet[],
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_east?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_west?: Sprite,
    
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    west?: Sprite
}

/**
 * An array containing the following values.
 * @example
 * ```
 * flags = { "linear-minification", "linear-magnification" }
 * ```
 *
 */
type SpriteFlags = Array</* The sprite won't be automatically cropped. */ 'no-crop' | 'not-compressed' | 'always-compressed' | 'mipmap' | 'linear-minification' | 'linear-magnification' | 'linear-mip-level' | 'alpha-mask' | 'no-scale' | /* This flag will internally set these flags: `"group=none"` */ 'mask' | /* This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"linear-mip-level"`, `"not-compressed"`, `"group=icon"` */ 'icon' | /* This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"linear-mip-level"`, `"not-compressed"`, `"group=gui"` */ 'gui' | /* This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"not-compressed"`, `"group=icon"` */ 'gui-icon' | /* This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"linear-magnification"`, `"group=none"` */ 'light' | /* This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"group=terrain"` */ 'terrain' | /* This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"terrain-effect-map"` (internal group flag) */ 'terrain-effect-map' | 'shadow' | /* This flag will internally set these flags: `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"group=smoke"` */ 'smoke' | /* This flag will internally set these flags: `"group=decal"` */ 'decal' | 'low-object' | 'trilinear-filtering' | 'group=none' | 'group=terrain' | 'group=shadow' | 'group=smoke' | 'group=decal' | 'group=low-object' | 'group=gui' | 'group=icon' | 'group=icon-background' | /* Deprecated flag that does nothing but is kept to prevent "unknown sprite flag" errors. */ 'compressed'>

/**
 * @example
 * ```
 * sheet =
 * {
 *   filename = "__base__/graphics/entity/burner-inserter/burner-inserter-platform.png",
 *   priority = "extra-high",
 *   width = 46,
 *   height = 46,
 *   shift = {0.09375, 0},
 *   hr_version =
 *   {
 *     filename = "__base__/graphics/entity/burner-inserter/hr-burner-inserter-platform.png",
 *     priority = "extra-high",
 *     width = 105,
 *     height = 79,
 *     shift = util.by_pixel(1.5, 7.5-1),
 *     scale = 0.5
 *   }
 * }
 * ```
 *
 */
interface SpriteNWaySheet extends SpriteParameters{
    
    /**
     * Specifies how many of the directions of the SpriteNWay are filled up with this sheet.
     */
    frames?: uint32,
    
    /**
     * Unused.
     */
    generate_sdf?: bool,
    
    /**
     * If this property exists and high resolution sprites are turned on, this is used to load the Sheet.
     */
    hr_version?: SpriteNWaySheet
}

interface SpriteParameters {
    apply_runtime_tint?: bool,
    blend_mode?: BlendMode,
    
    /**
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.

Draws first as a normal sprite, then again as a light layer. See {@link https://forums.factorio.com/91682 | https://forums.factorio.com/91682}.
     */
    draw_as_glow?: bool,
    
    /**
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     */
    draw_as_light?: bool,
    
    /**
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     */
    draw_as_shadow?: bool,
    
    /**
     * The path to the sprite file to use.
     */
    filename?: FileName,
    flags?: SpriteFlags,
    
    /**
     * This property is only used by sprites used in {@link UtilitySprites | prototype:UtilitySprites} that have the `"icon"` flag set.

If this is set to `true`, the game will generate an icon shadow (using signed distance fields) for the sprite.
     */
    generate_sdf?: bool,
    
    /**
     * Mandatory if `size` is not defined.

Height of the picture in pixels, from 0-8192.
     */
    height?: SpriteSizeType,
    
    /**
     * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error ({@link Example | https://cdn.discordapp.com/attachments/340530709712076801/532315796626472972/unknown.png}). Modders can ignore this property.
     */
    load_in_minimal_mode?: bool,
    
    /**
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     */
    mipmap_count?: uint8,
    
    /**
     * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     */
    position?: 
[    SpriteSizeType,
    SpriteSizeType
],
    
    /**
     * Whether alpha should be pre-multiplied.
     */
    premul_alpha?: bool,
    priority?: SpritePriority,
    
    /**
     * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     */
    scale?: double,
    
    /**
     * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector,
    
    /**
     * The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     */
    size?: SpriteSizeType | 
[    SpriteSizeType,
    SpriteSizeType
],
    tint?: Color,
    
    /**
     * Mandatory if `size` is not defined.

Width of the picture in pixels, from 0-8192.
     */
    width?: SpriteSizeType,
    
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType,
    
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType
}

/**
 * This sets the "caching priority" of a sprite, so deciding priority of it being included in VRAM instead of streaming it and is therefore a purely technical value. See {@link here | https://forums.factorio.com/viewtopic.php?p=437380#p437380} and {@link here | https://www.factorio.com/blog/post/fff-264}. The possible values are listed below.
 */
type SpritePriority = 'extra-high-no-scale' | 'extra-high' | 'high' | 'medium' | 'low' | 'very-low' | 'no-atlas'

interface SpriteSheet extends SpriteParameters{
    
    /**
     * Only loaded if `layers` is not defined.

If this property exists and high resolution sprites are turned on, this is used to load the SpriteSheet.
     */
    hr_version?: SpriteSheet,
    
    /**
     * If this property is present, all SpriteSheet definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.

If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: SpriteSheet[],
    line_length?: uint32,
    repeat_count?: uint32,
    variation_count?: uint32
}

type SpriteSizeType = int16

/**
 * @example
 * ```
 * -- array of sprites
 * pictures =
 * {
 *   { size = 64, filename = "__base__/graphics/icons/coal.png",   scale = 0.25, mipmap_count = 4 },
 *   { size = 64, filename = "__base__/graphics/icons/coal-1.png", scale = 0.25, mipmap_count = 4 },
 *   { size = 64, filename = "__base__/graphics/icons/coal-2.png", scale = 0.25, mipmap_count = 4 },
 *   { size = 64, filename = "__base__/graphics/icons/coal-3.png", scale = 0.25, mipmap_count = 4 }
 * }
 * ```
 *
 * @example
 * ```
 * -- sprite sheet using "sheet"
 * connection_patches_connected =
 * {
 *   sheet =
 *   {
 *     filename = "__base__/graphics/entity/nuclear-reactor/reactor-connect-patches.png",
 *     width = 32,
 *     height = 32,
 *     variation_count = 12,
 *     hr_version =
 *     {
 *       filename = "__base__/graphics/entity/nuclear-reactor/hr-reactor-connect-patches.png",
 *       width = 64,
 *       height = 64,
 *       variation_count = 12,
 *       scale = 0.5
 *     }
 *   }
 * }
 * ```
 *
 */
type SpriteVariations = {
    sheet: SpriteSheet
} | SpriteSheet | Sprite[]

interface StackInserterCapacityBonusModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'stack-inserter-capacity-bonus',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface StackTransferTipTrigger {
    count?: uint32,
    transfer?: 'stack' | 'inventory' | 'whole-inventory',
    type: 'stack-transfer'
}

interface StateSteeringSettings {
    
    /**
     * Used only for special "to look good" purposes (like in trailer).
     */
    force_unit_fuzzy_goto_behavior: bool,
    
    /**
     * Not including the radius of the unit.
     */
    radius: double,
    separation_factor: double,
    separation_force: double
}

interface StatusColors {
    disabled?: Color,
    full_output?: Color,
    idle?: Color,
    insufficient_input?: Color,
    low_power?: Color,
    no_minable_resources?: Color,
    no_power?: Color,
    working?: Color
}

interface SteeringSettings {
    default: StateSteeringSettings,
    moving: StateSteeringSettings
}

interface StorageTankPictures {
    flow_sprite: Sprite,
    fluid_background: Sprite,
    gas_flow: Animation,
    picture: Sprite4Way,
    window_background: Sprite
}

interface StreamAttackParameters extends BaseAttackParameters{
    fluid_consumption?: float,
    
    /**
     * Controls which fluids can fuel this stream attack and their potential damage bonuses.
     */
    fluids?: StreamFluidProperties[],
    gun_barrel_length?: float,
    gun_center_shift?: Vector | GunShift4Way,
    projectile_creation_parameters?: CircularProjectileCreationSpecification,
    type: 'stream'
}

interface StreamFluidProperties {
    damage_modifier?: double,
    type: FluidID
}

interface StreamTriggerDelivery extends TriggerDeliveryItem{
    source_offset?: Vector,
    
    /**
     * Name of a {@link FluidStreamPrototype | prototype:FluidStreamPrototype}.
     */
    stream: EntityID,
    type: 'stream'
}

/**
 * Sets whether a GUI element can be stretched or squashed.
 */
type StretchRule = /* Stretching/squashing is enabled. */ 'on' | /* Stretching/squashing is disabled even when the container contains stretchable/squashable elements. */ 'off' | /* Stretching/squashing depends on the contents of the layout, for example a flow with stretchable element gets stretchable. */ 'auto' | /* Used only for stretchable (not squashable) properties on scroll panes, labels, check boxes and radio buttons. The element this is set on expands its size to maximum and is stretched at the same time. This means the element takes up its maximum size even before its contents require it. */ 'stretch_and_expand'

/**
 * Used as an alternative way to specify animations.
 */
interface Stripe {
    filename: FileName,
    
    /**
     * Mandatory when Stripe is used in {@link Animation | prototype:Animation}.

Optional when it is used in {@link RotatedAnimation | prototype:RotatedAnimation}, where it defaults to {@link RotatedAnimation::direction_count | prototype:RotatedAnimation::direction_count}.
     */
    height_in_frames: uint32,
    width_in_frames: uint32,
    x?: uint32,
    y?: uint32
}

/**
 * Loaded as one of the {@link BaseStyleSpecification | prototype:BaseStyleSpecification} extensions, based on the value of the `type` key.
 */
type StyleSpecification = /* Loaded when the `type` is `"activity_bar_style"`. */ ActivityBarStyleSpecification | /* Loaded when the `type` is `"button_style"`. */ ButtonStyleSpecification | /* Loaded when the `type` is `"camera_style"`. */ CameraStyleSpecification | /* Loaded when the `type` is `"checkbox_style"`. */ CheckBoxStyleSpecification | /* Loaded when the `type` is `"dropdown_style"`. */ DropDownStyleSpecification | /* Loaded when the `type` is `"flow_style"`. */ FlowStyleSpecification | /* Loaded when the `type` is `"frame_style"`. */ FrameStyleSpecification | /* Loaded when the `type` is `"graph_style"`. */ GraphStyleSpecification | /* Loaded when the `type` is `"horizontal_flow_style"`. */ HorizontalFlowStyleSpecification | /* Loaded when the `type` is `"line_style"`. */ LineStyleSpecification | /* Loaded when the `type` is `"image_style"`. */ ImageStyleSpecification | /* Loaded when the `type` is `"label_style"`. */ LabelStyleSpecification | /* Loaded when the `type` is `"list_box_style"`. */ ListBoxStyleSpecification | /* Loaded when the `type` is `"progressbar_style"`. */ ProgressBarStyleSpecification | /* Loaded when the `type` is `"radiobutton_style"`. */ RadioButtonStyleSpecification | /* Loaded when the `type` is `"horizontal_scrollbar_style"`. */ HorizontalScrollBarStyleSpecification | /* Loaded when the `type` is `"vertical_scrollbar_style"`. */ VerticalScrollBarStyleSpecification | /* Loaded when the `type` is `"scroll_pane_style"`. */ ScrollPaneStyleSpecification | /* Loaded when the `type` is `"slider_style"`. */ SliderStyleSpecification | /* Loaded when the `type` is `"switch_style"`. */ SwitchStyleSpecification | /* Loaded when the `type` is `"table_style"`. */ TableStyleSpecification | /* Loaded when the `type` is `"tab_style"`. */ TabStyleSpecification | /* Loaded when the `type` is `"textbox_style"`. */ TextBoxStyleSpecification | /* Loaded when the `type` is `"vertical_flow_style"`. */ VerticalFlowStyleSpecification | /* Loaded when the `type` is `"tabbed_pane_style"`. */ TabbedPaneStyleSpecification | /* Loaded when the `type` is `"empty_widget_style"`. */ EmptyWidgetStyleSpecification | /* Loaded when the `type` is `"minimap_style"`. */ MinimapStyleSpecification | /* Loaded when the `type` is `"technology_slot_style"`. */ TechnologySlotStyleSpecification | /* Loaded when the `type` is `"glow_style"`. */ GlowStyleSpecification | /* Loaded when the `type` is `"speech_bubble_style"`. */ SpeechBubbleStyleSpecification | /* Loaded when the `type` is `"double_slider_style"`. */ DoubleSliderStyleSpecification

interface StyleWithClickableGraphicalSetSpecification extends BaseStyleSpecification{
    clicked_graphical_set?: ElementImageSet,
    default_graphical_set?: ElementImageSet,
    disabled_graphical_set?: ElementImageSet,
    hovered_graphical_set?: ElementImageSet,
    left_click_sound?: Sound,
    selected_clicked_graphical_set?: ElementImageSet,
    selected_graphical_set?: ElementImageSet,
    selected_hovered_graphical_set?: ElementImageSet
}

interface SwitchStyleSpecification extends BaseStyleSpecification{
    active_label?: LabelStyleSpecification,
    button?: ButtonStyleSpecification,
    default_background?: Sprite,
    disabled_background?: Sprite,
    hover_background?: Sprite,
    inactive_label?: LabelStyleSpecification,
    left_button_position?: uint32,
    middle_button_position?: uint32,
    right_button_position?: uint32,
    type: 'switch_style'
}

interface TabStyleSpecification extends BaseStyleSpecification{
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    badge_font?: string,
    badge_horizontal_spacing?: int16,
    default_badge_font_color?: Color,
    default_badge_graphical_set?: ElementImageSet,
    default_font_color?: Color,
    default_graphical_set?: ElementImageSet,
    disabled_badge_font_color?: Color,
    disabled_badge_graphical_set?: ElementImageSet,
    disabled_font_color?: Color,
    disabled_graphical_set?: ElementImageSet,
    draw_grayscale_picture?: bool,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string,
    game_controller_selected_hover_graphical_set?: ElementImageSet,
    hover_badge_graphical_set?: ElementImageSet,
    hover_graphical_set?: ElementImageSet,
    left_click_sound?: Sound,
    left_edge_selected_graphical_set?: ElementImageSet,
    override_graphics_on_edges?: bool,
    press_badge_graphical_set?: ElementImageSet,
    press_graphical_set?: ElementImageSet,
    right_edge_selected_graphical_set?: ElementImageSet,
    selected_badge_font_color?: Color,
    selected_badge_graphical_set?: ElementImageSet,
    selected_font_color?: Color,
    selected_graphical_set?: ElementImageSet,
    type: 'tab_style'
}

interface TabbedPaneStyleSpecification extends BaseStyleSpecification{
    tab_container?: HorizontalFlowStyleSpecification,
    tab_content_frame?: FrameStyleSpecification,
    type: 'tabbed_pane_style',
    vertical_spacing?: uint32
}

interface TableStyleSpecification extends BaseStyleSpecification{
    apply_row_graphical_set_per_column?: bool,
    background_graphical_set?: ElementImageSet,
    border?: BorderImageSet,
    bottom_cell_padding?: int16,
    
    /**
     * Sets `top_cell_padding`, `right_cell_padding`, `bottom_cell_padding` and `left_cell_padding` to the same value.
     */
    cell_padding?: int16,
    clicked_graphical_set?: ElementImageSet,
    column_alignments?: ColumnAlignment[],
    column_graphical_set?: ElementImageSet,
    column_ordering_ascending_button_style?: ButtonStyleSpecification,
    column_ordering_descending_button_style?: ButtonStyleSpecification,
    column_widths?: ColumnWidth[],
    default_row_graphical_set?: ElementImageSet,
    even_row_graphical_set?: ElementImageSet,
    horizontal_line_color?: Color,
    horizontal_spacing?: int32,
    hovered_graphical_set?: ElementImageSet,
    hovered_row_color?: Color,
    inactive_column_ordering_ascending_button_style?: ButtonStyleSpecification,
    inactive_column_ordering_descending_button_style?: ButtonStyleSpecification,
    left_cell_padding?: int16,
    odd_row_graphical_set?: ElementImageSet,
    right_cell_padding?: int16,
    selected_clicked_graphical_set?: ElementImageSet,
    selected_graphical_set?: ElementImageSet,
    selected_hovered_graphical_set?: ElementImageSet,
    selected_row_color?: Color,
    top_cell_padding?: int16,
    type: 'table_style',
    vertical_line_color?: Color,
    vertical_spacing?: int32
}

/**
 * Used when defining a {@link TechnologyPrototype | prototype:TechnologyPrototype} that uses difficulty. For a technology without difficulty, these same properties are defined on the prototype itself.
 */
interface TechnologyData {
    
    /**
     * List of effects of the technology (applied when the technology is researched).
     */
    effects?: Modifier[],
    enabled?: bool,
    
    /**
     * Hides the technology from the tech screen.
     */
    hidden?: bool,
    
    /**
     * Controls whether the technology cost ignores the tech cost multiplier set in the {@link DifficultySettings | runtime:DifficultySettings}. E.g. `4` for the default expensive difficulty.
     */
    ignore_tech_cost_multiplier?: bool,
    
    /**
     * `"infinite"` for infinite technologies, otherwise `uint32`.

Defaults to the same level as the technology, which is `0` for non-upgrades, and the level of the upgrade for upgrades.
     */
    max_level?: uint32 | 'infinite',
    
    /**
     * List of technologies needed to be researched before this one can be researched.
     */
    prerequisites?: TechnologyID[],
    
    /**
     * Determines the cost in items and time of the technology.
     */
    unit: TechnologyUnit,
    
    /**
     * When set to true, and the technology contains several levels, only the relevant one is displayed in the technology screen.
     */
    upgrade?: bool,
    
    /**
     * Controls whether the technology is shown in the tech GUI when it is not `enabled`.
     */
    visible_when_disabled?: bool
}

/**
 * The name of a {@link TechnologyPrototype | prototype:TechnologyPrototype}.
 * @example
 * ```
 * "automated-rail-transportation"
 * ```
 *
 * @example
 * ```
 * "steel-axe"
 * ```
 *
 */
type TechnologyID = string

interface TechnologySlotStyleSpecification extends ButtonStyleSpecificationBase{
    clicked_ingredients_background?: ElementImageSet,
    clicked_overlay?: ElementImageSet,
    default_background_shadow?: ElementImageSet,
    default_ingredients_background?: ElementImageSet,
    disabled_ingredients_background?: ElementImageSet,
    highlighted_graphical_set?: ElementImageSet,
    highlighted_ingredients_background?: ElementImageSet,
    hovered_ingredients_background?: ElementImageSet,
    hovered_level_band?: ElementImageSet,
    hovered_level_font_color?: Color,
    hovered_level_range_band?: ElementImageSet,
    hovered_level_range_font_color?: Color,
    ingredient_icon_overlap?: uint32,
    ingredient_icon_size?: uint32,
    ingredients_height?: uint32,
    ingredients_padding?: uint32,
    level_band?: ElementImageSet,
    level_band_height?: uint32,
    level_band_width?: uint32,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    level_font?: string,
    level_font_color?: Color,
    level_offset_x?: int32,
    level_offset_y?: int32,
    level_range_band?: ElementImageSet,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    level_range_font?: string,
    level_range_font_color?: Color,
    level_range_offset_x?: int32,
    level_range_offset_y?: int32,
    progress_bar?: ElementImageSet,
    progress_bar_background?: ElementImageSet,
    progress_bar_color?: Color,
    progress_bar_height?: uint32,
    progress_bar_shadow?: ElementImageSet,
    type: 'technology_slot_style'
}

/**
 * Either `count` or `count_formula` must be defined, never both.
 * @example
 * ```
 * unit =
 * {
 *   count_formula = "2^(L-6)*1000",
 *   ingredients =
 *   {
 *     {"automation-science-pack", 1},
 *     {"logistic-science-pack", 1},
 *     {"chemical-science-pack", 1},
 *     {"production-science-pack", 1},
 *     {"utility-science-pack", 1},
 *     {"space-science-pack", 1}
 *   },
 *   time = 60
 * }
 * ```
 *
 */
interface TechnologyUnit {
    
    /**
     * How many units are needed. Must be `> 0`.
     */
    count?: uint64,
    
    /**
     * Formula that specifies how many units are needed per level of the technology.

If the last characters of the prototype name are `-<number>`, the level is taken to be the number, e.g. `physical-projectile-damage-2` implies a number of `2`. This defaults to `1`. There does not need to be lower-level technologies for a technology to be detected as having a level, meaning a technology or sequence of upgrade technologies can begin at any number.

For an infinite technology, the level begins at the given suffix (or `1` by default) and gains 1 level upon being researched, or if the `max_level` is reached, marked as completed. The initial level of a technology can not be greater than its `max_level`.

The formula is executed following the BODMAS order (also known as PEMDAS). It supports these operators and characters:

- `+`: Addition

- `-`: Subtraction

- `*`: Multiplication

- `^`: Exponentiation

- `()`: Brackets for order of operations; supports nested brackets

- `l` or `L`: The current level of the technology

- Digits: Treated as numbers

- `.`: Decimal point in numbers

- `SPACE`: Spaces are ignored

Note that this formula can also be used at {@link runtime | runtime:LuaGameScript::evaluate_expression}.
     */
    count_formula?: string,
    
    /**
     * List of ingredients needed for one unit of research. The items must all be {@link ToolPrototypes | prototype:ToolPrototype}.
     */
    ingredients: IngredientPrototype[],
    
    /**
     * How much time one unit takes to research. In a lab with a crafting speed of `1`, it corresponds to the number of seconds.
     */
    time: double
}

interface TextBoxStyleSpecification extends BaseStyleSpecification{
    active_background?: ElementImageSet,
    default_background?: ElementImageSet,
    disabled_background?: ElementImageSet,
    disabled_font_color?: Color,
    
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string,
    font_color?: Color,
    game_controller_hovered_background?: ElementImageSet,
    rich_text_highlight_error_color?: Color,
    rich_text_highlight_ok_color?: Color,
    rich_text_highlight_warning_color?: Color,
    rich_text_setting?: RichTextSetting,
    selected_rich_text_highlight_error_color?: Color,
    selected_rich_text_highlight_ok_color?: Color,
    selected_rich_text_highlight_warning_color?: Color,
    selection_background_color?: Color,
    type: 'textbox_style'
}

interface ThrowCapsuleAction {
    attack_parameters: AttackParameters,
    type: 'throw',
    
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool
}

interface TileAndAlpha {
    alpha: float,
    tile: TileID
}

interface TileBuildSound {
    large?: Sound,
    medium?: Sound,
    small?: Sound
}

/**
 * The name of a {@link TilePrototype | prototype:TilePrototype}.
 * @example
 * ```
 * "grass-2"
 * ```
 *
 * @example
 * ```
 * "landfill"
 * ```
 *
 */
type TileID = string

/**
 * Name of an allowed tile, or a list of two tile names for entities allowed on transitions.
 */
type TileIDRestriction = TileID | 
[    TileID,
    TileID
]

type TileRenderLayer = 'zero' | 'water' | 'water-overlay' | 'ground' | 'top'

/**
 * Used by {@link TilePrototype | prototype:TilePrototype}.
 */
interface TileSprite {
    
    /**
     * Frame count.

Optional if it is loaded inside of a `hr_version`, see that property for more information.
     */
    count: uint32,
    
    /**
     * If this property exists and high resolution sprites are turned on, its contents are used to load the tile sprite.

`count` in `hr_version` has to be either unspecified or the same as for normal resolution definition.
     */
    hr_version?: TileSprite,
    
    /**
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint32,
    picture: FileName,
    scale?: float,
    
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType,
    
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType
}

interface TileSpriteWithProbability extends TileSprite{
    
    /**
     * Probability of 1x1 (size = 1) version of tile must be 1.
     */
    probability?: double,
    
    /**
     * Only powers of 2 from 1 to 128 can be used. Square size of the tile arrangement this sprite is used for. Used to calculate the `width` and `height` of the sprite which cannot be set directly. (width or height) = size * 32 / scale.
     */
    size: uint32,
    weights?: double[]
}

interface TileTransitionSprite {
    
    /**
     * Frame count.
     */
    count: uint32,
    
    /**
     * If this property exists and high resolution sprites are turned on, its contents are used to load the tile transition sprite.
     */
    hr_version?: TileTransitionSprite,
    picture: FileName,
    scale?: float,
    
    /**
     * If this is true, the shift of the tile transition sprite is set to `{0, 0.5}`.
     */
    tall?: bool,
    
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType,
    
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType
}

/**
 * Used for {@link TilePrototype | prototype:TilePrototype} graphics.
 */
interface TileTransitions {
    apply_effect_color_to_overlay?: bool,
    background_layer_group?: TileRenderLayer,
    background_layer_offset?: int8,
    effect_mask?: Animation,
    empty_transitions?: bool,
    
    /**
     * This or `inner_corner_mask` needs to be specified if `empty_transitions` is not true.
     */
    inner_corner?: TileTransitionSprite,
    inner_corner_background?: TileTransitionSprite,
    inner_corner_background_mask?: TileTransitionSprite,
    inner_corner_effect_map?: TileTransitionSprite,
    
    /**
     * This or `inner_corner` needs to be specified if `empty_transitions` is not true.
     */
    inner_corner_mask?: TileTransitionSprite,
    inner_corner_weights?: float[],
    layer?: uint8,
    masked_background_layer_offset?: int8,
    masked_overlay_layer_offset?: int8,
    o_transition?: TileSprite,
    o_transition_background?: TileSprite,
    o_transition_background_mask?: TileSprite,
    o_transition_effect_map?: TileSprite,
    o_transition_mask?: TileSprite,
    offset_background_layer_by_tile_layer?: bool,
    
    /**
     * This or `outer_corner_mask` needs to be specified if `empty_transitions` is not true.
     */
    outer_corner?: TileTransitionSprite,
    outer_corner_background?: TileTransitionSprite,
    outer_corner_background_mask?: TileTransitionSprite,
    outer_corner_effect_map?: TileTransitionSprite,
    
    /**
     * This or `outer_corner` needs to be specified if `empty_transitions` is not true.
     */
    outer_corner_mask?: TileTransitionSprite,
    outer_corner_weights?: float[],
    overlay_layer_group?: TileRenderLayer,
    overlay_layer_offset?: int8,
    
    /**
     * This or `side_mask` needs to be specified if `empty_transitions` is not true.
     */
    side?: TileTransitionSprite,
    side_background?: TileTransitionSprite,
    side_background_mask?: TileTransitionSprite,
    side_effect_map?: TileTransitionSprite,
    
    /**
     * This or `side` needs to be specified if `empty_transitions` is not true.
     */
    side_mask?: TileTransitionSprite,
    side_weights?: float[],
    u_transition?: TileTransitionSprite,
    u_transition_background?: TileTransitionSprite,
    u_transition_background_mask?: TileTransitionSprite,
    u_transition_effect_map?: TileTransitionSprite,
    u_transition_mask?: TileTransitionSprite,
    u_transition_weights?: float[],
    water_patch?: Sprite
}

interface TileTransitionsBetweenTransitions extends TileTransitions{
    transition_group1: uint8,
    transition_group2: uint8
}

interface TileTransitionsToTiles extends TileTransitions{
    to_tiles: TileID[],
    transition_group: uint8
}

interface TileTransitionsVariants extends TileTransitions{
    main: TileSpriteWithProbability[],
    
    /**
     * Width and height are given by the game, setting them will not have an effect. Width and height are calculated from the expected size (32) and the scale. So, for HR tiles at a size of 64x64, the scale needs to be 0.5.
     */
    material_background?: TileSprite
}

interface TimeElapsedTipTrigger {
    ticks: uint32,
    type: 'time-elapsed'
}

/**
 * This is used by {@link TipsAndTricksItem | prototype:TipsAndTricksItem} for the initial starting status. One of the following values:
 */
type TipStatus = /* The tip is hidden. */ 'locked' | /* Same as `"locked"`. */ 'optional' | /* The {@link trigger | prototype:TipsAndTricksItem::trigger} for the tip was already met, but the tip is still hidden because of dependencies. */ 'dependencies-not-met' | /* Not suggested by trigger yet, but visible in the window. This is also the state that tips are left in when the /unlock-tips command is used in-game. */ 'unlocked' | /* The dependencies and triggers are met, the game suggests the tip. */ 'suggested' | 'not-to-be-suggested' | /* The tip is considered completed, shows the check mark in the GUI. */ 'completed-without-tutorial' | /* The tip is considered completed, shows the check mark in the GUI. */ 'completed'

/**
 * Loaded as one of the tip triggers, based on the value of the `type` key.
 */
type TipTrigger = /* Loaded when the `type` is `"or"`. */ OrTipTrigger | /* Loaded when the `type` is `"and"`. */ AndTipTrigger | /* Loaded when the `type` is `"sequence"`. */ SequenceTipTrigger | /* Loaded when the `type` is `"dependencies-met"`. */ DependenciesMetTipTrigger | /* Loaded when the `type` is `"time-elapsed"`. */ TimeElapsedTipTrigger | /* Loaded when the `type` is `"research"`. */ ResearchTechnologyTipTrigger | /* Loaded when the `type` is `"unlock-recipe"`. */ UnlockRecipeTipTrigger | /* Loaded when the `type` is `"craft-item"`. */ CraftItemTipTrigger | /* Loaded when the `type` is `"build-entity"`. */ BuildEntityTipTrigger | /* Loaded when the `type` is `"manual-transfer"`. */ ManualTransferTipTrigger | /* Loaded when the `type` is `"stack-transfer"`. */ StackTransferTipTrigger | /* Loaded when the `type` is `"entity-transfer"`. */ EntityTransferTipTrigger | /* Loaded when the `type` is `"set-recipe"`. */ SetRecipeTipTrigger | /* Loaded when the `type` is `"set-filter"`. */ SetFilterTipTrigger | /* Loaded when the `type` is `"limit-chest"`. */ LimitChestTipTrigger | /* Loaded when the `type` is `"use-pipette"`. */ UsePipetteTipTrigger | /* Loaded when the `type` is `"set-logistic-request"`. */ SetLogisticRequestTipTrigger | /* Loaded when the `type` is `"use-confirm"`. */ UseConfirmTipTrigger | /* Loaded when the `type` is `"low-power"`. */ LowPowerTipTrigger | /* Loaded when the `type` is `"paste-entity-settings"`. */ PasteEntitySettingsTipTrigger | /* Loaded when the `type` is `"fast-replace"`. */ FastReplaceTipTrigger | /* Loaded when the `type` is `"group-attack"`. */ GroupAttackTipTrigger | /* Loaded when the `type` is `"fast-belt-bend"`. */ FastBeltBendTipTrigger | /* Loaded when the `type` is `"belt-traverse"`. */ BeltTraverseTipTrigger | /* Loaded when the `type` is `"place-equipment"`. */ PlaceEquipmentTipTrigger | /* Loaded when the `type` is `"clear-cursor"`. */ ClearCursorTipTrigger | /* Loaded when the `type` is `"shift-build"`. */ ShiftBuildTipTrigger | /* Loaded when the `type` is `"gate-over-rail-build"`. */ GateOverRailBuildTipTrigger | /* Loaded when the `type` is `"manual-wire-drag"`. */ ManualWireDragTipTrigger

interface TrainBrakingForceBonusModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'train-braking-force-bonus',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface TrainPathFinderConstants {
    signal_reserved_by_circuit_network_penalty: uint32,
    stopped_manually_controlled_train_penalty: uint32,
    stopped_manually_controlled_train_without_passenger_penalty: uint32,
    train_arriving_to_signal_penalty: uint32,
    train_arriving_to_station_penalty: uint32,
    train_auto_without_schedule_penalty: uint32,
    train_in_station_penalty: uint32,
    train_in_station_with_no_other_valid_stops_in_schedule: uint32,
    train_stop_penalty: uint32,
    train_waiting_at_signal_penalty: uint32,
    
    /**
     * Must be >= 0.
     */
    train_waiting_at_signal_tick_multiplier_penalty: float,
    train_with_no_path_penalty: uint32
}

interface TrainStopDrawingBoxes {
    east: BoundingBox,
    north: BoundingBox,
    south: BoundingBox,
    west: BoundingBox
}

interface TrainStopLight {
    light: LightDefinition,
    picture: Sprite4Way,
    red_picture: Sprite4Way
}

interface TransportBeltAnimationSet {
    animation_set: RotatedAnimation,
    east_index?: uint8,
    ending_east_index?: uint8,
    ending_north_index?: uint8,
    ending_patch?: Sprite4Way,
    ending_south_index?: uint8,
    ending_west_index?: uint8,
    ends_with_stopper?: bool,
    north_index?: uint8,
    south_index?: uint8,
    starting_east_index?: uint8,
    starting_north_index?: uint8,
    starting_south_index?: uint8,
    starting_west_index?: uint8,
    west_index?: uint8
}

interface TransportBeltAnimationSetWithCorners extends TransportBeltAnimationSet{
    east_to_north_index?: uint8,
    east_to_south_index?: uint8,
    north_to_east_index?: uint8,
    north_to_west_index?: uint8,
    south_to_east_index?: uint8,
    south_to_west_index?: uint8,
    west_to_north_index?: uint8,
    west_to_south_index?: uint8
}

/**
 * Used to define the graphics for the (in vanilla) yellow frame that is used when a {@link TransportBeltPrototype | prototype:TransportBeltPrototype} is connected to the circuit network.
 */
interface TransportBeltConnectorFrame {
    frame_back_patch?: SpriteVariations,
    frame_front_patch?: SpriteVariations,
    frame_main: AnimationVariations,
    frame_main_scanner: Animation,
    frame_main_scanner_cross_horizontal_end_shift: Vector,
    frame_main_scanner_cross_horizontal_rotation: RealOrientation,
    frame_main_scanner_cross_horizontal_start_shift: Vector,
    frame_main_scanner_cross_horizontal_y_scale: float,
    frame_main_scanner_cross_vertical_end_shift: Vector,
    frame_main_scanner_cross_vertical_rotation: RealOrientation,
    frame_main_scanner_cross_vertical_start_shift: Vector,
    frame_main_scanner_cross_vertical_y_scale: float,
    frame_main_scanner_horizontal_end_shift: Vector,
    frame_main_scanner_horizontal_rotation: RealOrientation,
    frame_main_scanner_horizontal_start_shift: Vector,
    frame_main_scanner_horizontal_y_scale: float,
    frame_main_scanner_movement_speed: float,
    frame_main_scanner_nw_ne: Animation,
    frame_main_scanner_sw_se: Animation,
    frame_main_scanner_vertical_end_shift: Vector,
    frame_main_scanner_vertical_rotation: RealOrientation,
    frame_main_scanner_vertical_start_shift: Vector,
    frame_main_scanner_vertical_y_scale: float,
    frame_shadow: AnimationVariations
}

interface TreeVariation {
    branch_generation: CreateParticleTriggerEffectItem,
    
    /**
     * Only loaded if `shadow` is present. Defaults to `shadow.frame_count - 1`.
     */
    disable_shadow_distortion_beginning_at_frame?: uint32,
    leaf_generation: CreateParticleTriggerEffectItem,
    leaves: Animation,
    
    /**
     * Normal must have the same frame_count as `leaves`.
     */
    normal?: Animation,
    
    /**
     * Overlay must have the same frame_count as `leaves`. Won't be tinted by the tree color unless `apply_runtime_tint` is set to `true` in the sprite definition. See {@link here | https://forums.factorio.com/viewtopic.php?p=547758#p547758}.
     */
    overlay?: Animation,
    
    /**
     * Shadow must have 1 less `frame_count` than `leaves`.
     */
    shadow?: Animation,
    
    /**
     * If `shadow` is not specified, this has to have one more frame than `leaves`.
     */
    trunk: Animation,
    water_reflection?: WaterReflectionDefinition
}

/**
 * Loaded as one of the {@link TriggerItem | prototype:TriggerItem} extensions, based on the value of the `type` key.
 */
type Trigger = /* Loaded when the `type` is `"direct"`. */ DirectTriggerItem | /* Loaded when the `type` is `"area"`. */ AreaTriggerItem | /* Loaded when the `type` is `"line"`. */ LineTriggerItem | /* Loaded when the `type` is `"cluster"`. */ ClusterTriggerItem | Array</* Loaded when the `type` is `"direct"`. */ DirectTriggerItem | /* Loaded when the `type` is `"area"`. */ AreaTriggerItem | /* Loaded when the `type` is `"line"`. */ LineTriggerItem | /* Loaded when the `type` is `"cluster"`. */ ClusterTriggerItem>

/**
 * Loaded as one of the {@link TriggerDeliveryItem | prototype:TriggerDeliveryItem} extensions, based on the value of the `type` key.
 */
type TriggerDelivery = /* Loaded when the `type` is `"instant"`. */ InstantTriggerDelivery | /* Loaded when the `type` is `"projectile"`. */ ProjectileTriggerDelivery | /* Loaded when the `type` is `"flame-thrower"`. */ FlameThrowerExplosionTriggerDelivery | /* Loaded when the `type` is `"beam"`. */ BeamTriggerDelivery | /* Loaded when the `type` is `"stream"`. */ StreamTriggerDelivery | /* Loaded when the `type` is `"artillery"`. */ ArtilleryTriggerDelivery

/**
 * The abstract base of all {@link TriggerDeliveries | prototype:TriggerDelivery}.
 */
interface TriggerDeliveryItem {
    
    /**
     * Provides the source of the TriggerDelivery as as both the source and target of the effect.
     */
    source_effects?: TriggerEffect,
    target_effects?: TriggerEffect
}

/**
 * Loaded as one of the {@link TriggerEffectItem | prototype:TriggerEffectItem} extensions, based on the value of the `type` key.
 */
type TriggerEffect = /* Loaded when the `type` is `"damage"`. */ DamageTriggerEffectItem | /* Loaded when the `type` is `"create-entity"`. */ CreateEntityTriggerEffectItem | /* Loaded when the `type` is `"create-explosion"`. */ CreateExplosionTriggerEffectItem | /* Loaded when the `type` is `"create-fire"`. */ CreateFireTriggerEffectItem | /* Loaded when the `type` is `"create-smoke"`. */ CreateSmokeTriggerEffectItem | /* Loaded when the `type` is `"create-trivial-smoke"`. */ CreateTrivialSmokeEffectItem | /* Loaded when the `type` is `"create-particle"`. */ CreateParticleTriggerEffectItem | /* Loaded when the `type` is `"create-sticker"`. */ CreateStickerTriggerEffectItem | /* Loaded when the `type` is `"create-decorative"`. */ CreateDecorativesTriggerEffectItem | /* Loaded when the `type` is `"nested-result"`. */ NestedTriggerEffectItem | /* Loaded when the `type` is `"play-sound"`. */ PlaySoundTriggerEffectItem | /* Loaded when the `type` is `"push-back"`. */ PushBackTriggerEffectItem | /* Loaded when the `type` is `"destroy-cliffs"`. */ DestroyCliffsTriggerEffectItem | /* Loaded when the `type` is `"show-explosion-on-chart"`. */ ShowExplosionOnChartTriggerEffectItem | /* Loaded when the `type` is `"insert-item"`. */ InsertItemTriggerEffectItem | /* Loaded when the `type` is `"script"`. */ ScriptTriggerEffectItem | /* Loaded when the `type` is `"set-tile"`. */ SetTileTriggerEffectItem | /* Loaded when the `type` is `"invoke-tile-trigger"`. */ InvokeTileEffectTriggerEffectItem | /* Loaded when the `type` is `"destroy-decoratives"`. */ DestroyDecorativesTriggerEffectItem | /* Loaded when the `type` is `"camera-effect"`. */ CameraEffectTriggerEffectItem | Array</* Loaded when the `type` is `"damage"`. */ DamageTriggerEffectItem | /* Loaded when the `type` is `"create-entity"`. */ CreateEntityTriggerEffectItem | /* Loaded when the `type` is `"create-explosion"`. */ CreateExplosionTriggerEffectItem | /* Loaded when the `type` is `"create-fire"`. */ CreateFireTriggerEffectItem | /* Loaded when the `type` is `"create-smoke"`. */ CreateSmokeTriggerEffectItem | /* Loaded when the `type` is `"create-trivial-smoke"`. */ CreateTrivialSmokeEffectItem | /* Loaded when the `type` is `"create-particle"`. */ CreateParticleTriggerEffectItem | /* Loaded when the `type` is `"create-sticker"`. */ CreateStickerTriggerEffectItem | /* Loaded when the `type` is `"create-decorative"`. */ CreateDecorativesTriggerEffectItem | /* Loaded when the `type` is `"nested-result"`. */ NestedTriggerEffectItem | /* Loaded when the `type` is `"play-sound"`. */ PlaySoundTriggerEffectItem | /* Loaded when the `type` is `"push-back"`. */ PushBackTriggerEffectItem | /* Loaded when the `type` is `"destroy-cliffs"`. */ DestroyCliffsTriggerEffectItem | /* Loaded when the `type` is `"show-explosion-on-chart"`. */ ShowExplosionOnChartTriggerEffectItem | /* Loaded when the `type` is `"insert-item"`. */ InsertItemTriggerEffectItem | /* Loaded when the `type` is `"script"`. */ ScriptTriggerEffectItem | /* Loaded when the `type` is `"set-tile"`. */ SetTileTriggerEffectItem | /* Loaded when the `type` is `"invoke-tile-trigger"`. */ InvokeTileEffectTriggerEffectItem | /* Loaded when the `type` is `"destroy-decoratives"`. */ DestroyDecorativesTriggerEffectItem | /* Loaded when the `type` is `"camera-effect"`. */ CameraEffectTriggerEffectItem>

/**
 * The abstract base of all {@link TriggerEffects | prototype:TriggerEffect}.
 */
interface TriggerEffectItem {
    affects_target?: bool,
    
    /**
     * Guaranteed to work with {@link EntityWithHealthPrototype::damaged_trigger_effect | prototype:EntityWithHealthPrototype::damaged_trigger_effect} and {@link EntityWithHealthPrototype::dying_trigger_effect | prototype:EntityWithHealthPrototype::dying_trigger_effect}. Unknown if it works with other properties that use {@link TriggerEffect | prototype:TriggerEffect}.
     */
    damage_type_filters?: DamageTypeFilters,
    
    /**
     * Must be greater than `0` and less than or equal to `1`.
     */
    probability?: float,
    repeat_count?: uint16,
    repeat_count_deviation?: uint16,
    show_in_tooltip?: bool
}

/**
 * The abstract base of all {@link Triggers | prototype:Trigger}.
 */
interface TriggerItem {
    action_delivery?: TriggerDelivery | TriggerDelivery[],
    
    /**
     * Only prototypes with these collision masks are affected by the trigger item.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Only prototypes with these flags are affected by the trigger item.
     */
    entity_flags?: EntityPrototypeFlags,
    
    /**
     * Only entities meeting the force condition are affected by the trigger item.
     */
    force?: ForceCondition,
    ignore_collision_condition?: bool,
    
    /**
     * Must be greater than 0 and less than or equal to 1.
     */
    probability?: float,
    repeat_count?: uint32,
    
    /**
     * The trigger affects only prototypes with these masks.
     */
    trigger_target_mask?: TriggerTargetMask
}

/**
 * An array of names of {@link TriggerTargetType | prototype:TriggerTargetType}. See {@link Design discussion: Trigger target type | https://forums.factorio.com/71657} and {@link Blacklist for prototypes turrets shouldn't attack | https://forums.factorio.com/86164}.
 */
type TriggerTargetMask = string[]

/**
 * The name of a {@link TrivialSmokePrototype | prototype:TrivialSmokePrototype}.
 * @example
 * ```
 * "smoke-building"
 * ```
 *
 * @example
 * ```
 * "nuclear-smoke"
 * ```
 *
 */
type TrivialSmokeID = string

interface TurretAttackModifier extends BaseModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    
    /**
     * Modification value, which will be added to the current turret attack modifier upon researching.
     */
    modifier: double,
    
    /**
     * Name of the {@link EntityPrototype | prototype:EntityPrototype} that is affected. This also works for non-turrets such as tanks, however, the bonus does not appear in the entity's tooltips.
     */
    turret_id: EntityID,
    type: 'turret-attack',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface UndergroundBeltStructure {
    back_patch?: Sprite4Way,
    direction_in: Sprite4Way,
    direction_in_side_loading?: Sprite4Way,
    direction_out: Sprite4Way,
    direction_out_side_loading?: Sprite4Way,
    front_patch?: Sprite4Way
}

/**
 * Used by {@link UnitPrototype | prototype:UnitPrototype}.
 */
interface UnitAISettings {
    
    /**
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     */
    allow_try_return_to_spawner?: bool,
    
    /**
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     */
    destroy_when_commands_fail?: bool,
    
    /**
     * If enabled, units will try to separate themselves from nearby friendly units.
     */
    do_separation?: bool,
    
    /**
     * Must be between -8 and 8.
     */
    path_resolution_modifier?: int8
}

interface UnitAlternativeFrameSequence {
    attacking_animation_speed: float,
    
    /**
     * Indices of frames from the attack parameter animation.
     */
    attacking_frame_sequence: uint16[],
    back_to_walk_animation_speed: float,
    
    /**
     * Indices of frames from the attack parameter animation.
     */
    back_to_walk_frame_sequence: uint16[],
    cooldown_animation_speed: float,
    
    /**
     * Indices of frames from the attack parameter animation.
     */
    cooldown_frame_sequence: uint16[],
    prepared_animation_speed: float,
    
    /**
     * Indices of frames from the attack parameter animation.
     */
    prepared_frame_sequence: uint16[],
    
    /**
     * Indices of frames from the attack parameter animation.
     */
    warmup2_frame_sequence: uint16[],
    warmup_animation_speed: float,
    
    /**
     * Indices of frames from the attack parameter animation.
     */
    warmup_frame_sequence: uint16[]
}

interface UnitGroupSettings {
    
    /**
     * Maximum number of automatically created unit groups gathering for attack at any time.
     */
    max_gathering_unit_groups: uint32,
    max_group_gathering_time: uint32,
    
    /**
     * If a member falls behind more than this times the group radius, the group will slow down to max_group_slowdown_factor.
     */
    max_group_member_fallback_factor: double,
    
    /**
     * Limits for group radius (calculated by number of numbers).
     */
    max_group_radius: double,
    
    /**
     * When members of a group are behind, the entire group will slow down to at most this factor of its max speed.
     */
    max_group_slowdown_factor: double,
    
    /**
     * When a member gets ahead of its group, it will slow down to at most this factor of its speed.
     */
    max_member_slowdown_when_ahead: double,
    
    /**
     * When a member falls behind the group he can speedup up till this much of his regular speed.
     */
    max_member_speedup_when_behind: double,
    
    /**
     * Maximum size of an attack unit group. This only affects automatically-created unit groups; manual groups created through the API are unaffected.
     */
    max_unit_group_size: uint32,
    
    /**
     * After the gathering is finished the group can still wait for late members, but it doesn't accept new ones anymore.
     */
    max_wait_time_for_late_members: uint32,
    
    /**
     * If a member falls behind more than this time the group radius, it will be removed from the group.
     */
    member_disown_distance: double,
    
    /**
     * Pollution triggered group waiting time is a random time between min and max gathering time
     */
    min_group_gathering_time: uint32,
    min_group_radius: double,
    tick_tolerance_when_member_arrives: uint32
}

/**
 * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the unit and the second is the spawn points.
 */
type UnitSpawnDefinition = {
    
    /**
     * Array of evolution and probability info, with the following conditions:

- The `evolution_factor` must be ascending from entry to entry.

- The last entry's weight will be used when the `evolution_factor` is larger than the last entry.

- Weights are linearly interpolated between entries.

- Individual weights are scaled linearly so that the cumulative weight is `1`.
     */
    spawn_points: SpawnPoint[],
    unit: EntityID
} | 
[    EntityID,
    SpawnPoint[]
]

interface UnlockRecipeModifier extends BaseModifier{
    
    /**
     * Prototype name of the {@link RecipePrototype | prototype:RecipePrototype} that is unlocked upon researching.
     */
    recipe: RecipeID,
    type: 'unlock-recipe',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface UnlockRecipeTipTrigger {
    recipe: RecipeID,
    type: 'unlock-recipe'
}

interface UseConfirmTipTrigger {
    count?: uint32,
    type: 'use-confirm'
}

interface UseOnSelfCapsuleAction {
    attack_parameters: AttackParameters,
    type: 'use-on-self',
    
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool
}

interface UsePipetteTipTrigger {
    count?: uint32,
    type: 'use-pipette'
}

/**
 * A vector is a two-element array or dictionary containing the x and y components. Positive x goes east, positive y goes south.
 * @example
 * ```
 * shift = {0, 12}
 * ```
 *
 * @example
 * ```
 * right = {1.0, 0.5}
 * ```
 *
 * @example
 * ```
 * vector = {x = 2.3, y = 3.4}
 * ```
 *
 */
type Vector = {
    x: double,
    y: double
} | 
[    double,
    double
]

/**
 * If this is specified as a three-element array then the array items are x, y and z, in that order.
 */
type Vector3D = {
    x: float,
    y: float,
    z: float
} | 
[    float,
    float,
    float
]

interface VectorRotation {
    
    /**
     * The size of all `frames` must be the same.
     */
    frames: Vector[],
    render_layer?: RenderLayer
}

type VerticalAlign = 'top' | 'center' | 'bottom'

interface VerticalFlowStyleSpecification extends BaseStyleSpecification{
    type: 'vertical_flow_style',
    vertical_spacing?: int32
}

interface VerticalScrollBarStyleSpecification extends ScrollBarStyleSpecification{
    type: 'vertical_scrollbar_style'
}

/**
 * The name of a {@link VirtualSignalPrototype | prototype:VirtualSignalPrototype}.
 * @example
 * ```
 * "signal-red"
 * ```
 *
 * @example
 * ```
 * "signal-each"
 * ```
 *
 */
type VirtualSignalID = string

/**
 * Void energy sources provide unlimited free energy.
 * @example
 * ```
 * energy_source = {type = "void"}
 * ```
 *
 */
interface VoidEnergySource extends BaseEnergySource{
    type: 'void'
}

interface WallPictures {
    corner_left_down: SpriteVariations,
    corner_right_down: SpriteVariations,
    ending_left: SpriteVariations,
    ending_right: SpriteVariations,
    filling?: SpriteVariations,
    gate_connection_patch?: Sprite4Way,
    single: SpriteVariations,
    straight_horizontal: SpriteVariations,
    straight_vertical: SpriteVariations,
    t_up: SpriteVariations,
    water_connection_patch?: Sprite4Way
}

/**
 * Entity water reflection. {@link Currently only renders | https://forums.factorio.com/100703} for {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype}.
 */
interface WaterReflectionDefinition {
    orientation_to_variation?: bool,
    pictures?: SpriteVariations,
    rotate?: bool
}

/**
 * Definition of a point where circuit network wires can be connected to an entity.
 */
interface WireConnectionPoint {
    shadow: WirePosition,
    wire: WirePosition
}

/**
 * Used by {@link WireConnectionPoint | prototype:WireConnectionPoint}.
 */
interface WirePosition {
    copper?: Vector,
    green?: Vector,
    red?: Vector
}

interface WorkerRobotBatteryModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'worker-robot-battery',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface WorkerRobotSpeedModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'worker-robot-speed',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface WorkerRobotStorageModifier extends SimpleModifier{
    
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool,
    type: 'worker-robot-storage',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

/**
 * This type is used to produce sound from in-game entities when they are working/idle.
 * @example
 * ```
 * -- refinery
 * working_sound =
 * {
 *   sound = { filename = "__base__/sound/oil-refinery.ogg" },
 *   idle_sound = { filename = "__base__/sound/idle1.ogg", volume = 0.6 },
 *   apparent_volume = 2.5,
 * }
 * ```
 *
 * @example
 * ```
 * -- roboport
 * working_sound =
 * {
 *   sound = { filename = "__base__/sound/roboport-working.ogg", volume = 0.6 },
 *   max_sounds_per_type = 3,
 *   audible_distance_modifier = 0.5,
 *   probability = 1 / (5 * 60) -- average pause between the sound is 5 seconds
 * }
 * ```
 *
 */
type WorkingSound = {
    
    /**
     * Might not work with all entities that use working_sound.
     */
    activate_sound?: Sound,
    apparent_volume?: float,
    
    /**
     * Modifies how far a sound can be heard. Can only be 1 or lower, has to be a positive number.
     */
    audible_distance_modifier?: double,
    
    /**
     * Might not work with all entities that use working_sound.
     */
    deactivate_sound?: Sound,
    
    /**
     * Can't be used when `match_progress_to_activity` is true.
     */
    fade_in_ticks?: uint32,
    
    /**
     * Can't be used when `match_progress_to_activity` is true.
     */
    fade_out_ticks?: uint32,
    
    /**
     * The sound to be played when the entity is idle. Might not work with all entities that use working_sound.
     */
    idle_sound?: Sound,
    match_progress_to_activity?: bool,
    match_speed_to_activity?: bool,
    match_volume_to_activity?: bool,
    max_sounds_per_type?: uint8,
    persistent?: bool,
    
    /**
     * Modifies how often the sound is played.
     */
    probability?: double,
    
    /**
     * The sound to be played when the entity is working.
     */
    sound: Sound,
    use_doppler_shift?: bool
} | Sound

/**
 * Used by crafting machines to display different graphics when the machine is running.
 */
interface WorkingVisualisation {
    align_to_waypoint?: bool,
    always_draw?: bool,
    animated_shift?: bool,
    animation?: Animation,
    
    /**
     * Used by {@link CraftingMachinePrototype | prototype:CraftingMachinePrototype}.
     */
    apply_recipe_tint?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'none',
    
    /**
     * Used by {@link CraftingMachinePrototype | prototype:CraftingMachinePrototype} ("status" only) and {@link MiningDrillPrototype | prototype:MiningDrillPrototype}.

For "status" on CraftingMachine, the colors are specified via {@link CraftingMachinePrototype::status_colors | prototype:CraftingMachinePrototype::status_colors}. For "status" on MiningDrill, the colors are specified via {@link MiningDrillGraphicsSet::status_colors | prototype:MiningDrillGraphicsSet::status_colors}. For "resource-color", the colors are specified via {@link ResourceEntityPrototype::mining_visualisation_tint | prototype:ResourceEntityPrototype::mining_visualisation_tint}.
     */
    apply_tint?: 'resource-color' | 'input-fluid-base-color' | 'input-fluid-flow-color' | 'status' | 'none',
    
    /**
     * Whether the animations are always played at the same speed, not adjusted to the machine speed.
     */
    constant_speed?: bool,
    draw_as_light?: bool,
    draw_as_sprite?: bool,
    
    /**
     * Only loaded if `animation` is not defined.
     */
    east_animation?: Animation,
    east_position?: Vector,
    effect?: 'flicker' | 'uranium-glow' | 'none',
    fadeout?: bool,
    light?: LightDefinition,
    
    /**
     * Only loaded if `animation` is not defined.
     */
    north_animation?: Animation,
    north_position?: Vector,
    render_layer?: RenderLayer,
    
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8,
    
    /**
     * Only loaded if `animation` is not defined.
     */
    south_animation?: Animation,
    south_position?: Vector,
    synced_fadeout?: bool,
    
    /**
     * Only loaded if `animation` is not defined.
     */
    west_animation?: Animation,
    west_position?: Vector
}

interface ZoomToWorldBlueprintEnabledModifier extends BoolModifier{
    type: 'zoom-to-world-blueprint-enabled',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface ZoomToWorldDeconstructionPlannerEnabledModifier extends BoolModifier{
    type: 'zoom-to-world-deconstruction-planner-enabled',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface ZoomToWorldEnabledModifier extends BoolModifier{
    type: 'zoom-to-world-enabled',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface ZoomToWorldGhostBuildingEnabledModifier extends BoolModifier{
    type: 'zoom-to-world-ghost-building-enabled',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface ZoomToWorldSelectionToolEnabledModifier extends BoolModifier{
    type: 'zoom-to-world-selection-tool-enabled',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

interface ZoomToWorldUpgradePlannerEnabledModifier extends BoolModifier{
    type: 'zoom-to-world-upgrade-planner-enabled',
    
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool
}

/**
 * A variable type which can have one of two values: `true` or `false`. Wikipedia has a {@link comprehensive article | https://en.wikipedia.org/wiki/Boolean} on Booleans.
 * 
 * Booleans used in prototypes can also be be defined by other variable types which are then coerced to boolean values by the game. This type coercion differs from the {@link standard Lua truthy/falsy | https://www.lua.org/manual/5.2/manual.html#2.1} coercion.
 * 
 * It is recommended to only use `true` and `false`.
 */
type bool = boolean;

/**
 * Format uses a dot as its decimal delimiter. Doubles are stored in the {@link double precision | http://en.wikipedia.org/wiki/Double-precision_floating-point_format} floating point format.
 * 
 * May not be {@link NaN | https://en.wikipedia.org/wiki/NaN}.
 * @example
 * ```
 * 7.5
 * 6
 * ```
 *
 */
type double = number;

/**
 * Format uses a dot as its decimal delimiter. Floats are stored in the {@link single precision | https://en.wikipedia.org/wiki/Single-precision_floating-point_format} floating point format.
 * 
 * May not be {@link NaN | https://en.wikipedia.org/wiki/NaN}.
 * @example
 * ```
 * 7.5
 * 6
 * ```
 *
 */
type float = number;

/**
 * 16 bit signed integer. Ranges from `-32 768` to `32 767`, or `[-2^15, 2^15-1]`.
 */
type int16 = number;

/**
 * 32 bit signed integer. Ranges from `-2 147 483 648` to `2 147 483 647`, or `[-2^31, 2^31-1]`.
 */
type int32 = number;

/**
 * 8 bit signed integer. Ranges from `-128` to `127`, or `[-2^7, 2^7-1]`.
 */
type int8 = number;

/**
 * 16 bit unsigned integer. Ranges from `0` to `65 535`, or `[0, 2^16-1]`.
 */
type uint16 = number;

/**
 * 32 bit unsigned integer. Ranges from `0` to `4 294 967 295`, or `[0, 2^32-1]`.
 */
type uint32 = number;

/**
 * 64 bit unsigned integer.
 */
type uint64 = number;

/**
 * 8 bit unsigned integer. Ranges from `0` to `255`, or `[0, 2^8-1]`.
 */
type uint8 = number;


}