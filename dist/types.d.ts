// Factorio type definitions for prototypes
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/prototype-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 2.0.13
// API version 6

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

interface LightningRuleBase extends LightningRuleBaseBase {
    type: 'impact-soundset' | 'prototype' | 'id' | 'countAsRockForFilteredDeconstruction'
}

interface SignalIDConnector extends SignalIDConnectorBase {
    type: 'virtual' | 'item' | 'fluid' | 'recipe' | 'entity' | 'space-location' | 'asteroid-chunk' | 'quality'
}

interface SliderStyleSpecification extends SliderStyleSpecificationBase {
    type: 'slider_style'
}

interface ActivateEquipmentCapsuleAction {
    /**
     * Activation is only implemented for {@link ActiveDefenseEquipmentPrototype | prototype:ActiveDefenseEquipmentPrototype}.
     */
    equipment: EquipmentID;
    type: 'equipment-remote';
}
interface ActivateImpactTriggerEffectItem extends TriggerEffectItem {
    /**
     * Name of a {@link DeliverCategory | prototype:DeliverCategory}.
     */
    deliver_category?: string;
    type: 'activate-impact';
}
interface ActivatePasteTipTrigger extends CountBasedTipTrigger {
    type: 'activate-paste';
}
/**
 * The name of an {@link ActiveTriggerPrototype | prototype:ActiveTriggerPrototype}.
 * @example ```
"chain-lightning-chain"
```
 * @example ```
"chain-lightning-turret-chain"
```
 */
type ActiveTriggerID = string;
interface ActivityBarStyleSpecification extends BaseStyleSpecification {
    bar?: ElementImageSet;
    bar_background?: ElementImageSet;
    bar_size_ratio?: float;
    bar_width?: uint32;
    color?: Color;
    speed?: float;
    type: 'activity_bar_style';
}
interface ActivityMatchingModifiers {
    inverted?: bool;
    maximum?: float;
    /**
     * Cannot be larger than `maximum`.
     */
    minimum?: float;
    multiplier?: float;
    offset?: float;
}
interface AdvancedMapGenSettings {
    asteroids?: MapGenPresetAsteroidSettings;
    difficulty_settings?: MapGenPresetDifficultySettings;
    enemy_evolution?: MapGenPresetEnemyEvolutionSettings;
    enemy_expansion?: MapGenPresetEnemyExpansionSettings;
    pollution?: MapGenPresetPollutionSettings;
}
interface AdvancedVolumeControl {
    attenuation?: Fade;
    /**
     * Has to be in the range (-1.0, 1.0).
     */
    darkness_threshold?: float;
    fades?: Fades;
}
interface AggregationSpecification {
    /**
     * If `true`, already playing sounds are taken into account when checking `max_count`.
     */
    count_already_playing?: bool;
    max_count: uint32;
    priority?: 'closest' | 'farthest' | 'newest' | 'oldest';
    /**
     * If `count_already_playing` is `true`, this will determine maximum progress when instance is counted toward playing sounds.
     */
    progress_threshold?: float;
    /**
     * If `false`, the volume of sound instances above `max_count` is calculated according to the formula `volume = (x + 1) ^ (-volume_reduction_rate)`, where `x` is the order number of an instance above the threshold.
     *
     * If `true`, sound instances above `max_count` are removed.
     */
    remove: bool;
    /**
     * Has to be greater than or equal to 0.0.
     */
    volume_reduction_rate?: float;
}
interface AgriculturalCraneProperties {
    min_arm_extent?: double;
    min_grappler_extent?: double;
    /**
     * In degrees.
     */
    operation_angle?: float;
    origin: Vector3D;
    parts: CranePart[];
    shadow_direction: Vector3D;
    speed: AgriculturalCraneSpeed;
    telescope_default_extention?: double;
}
interface AgriculturalCraneSpeed {
    arm: AgriculturalCraneSpeedArm;
    grappler: AgriculturalCraneSpeedGrappler;
}
interface AgriculturalCraneSpeedArm {
    /**
     * Must be positive.
     */
    extension_speed?: double;
    /**
     * May not be 0.
     */
    turn_rate?: double;
}
interface AgriculturalCraneSpeedGrappler {
    allow_transpolar_movement?: bool;
    /**
     * Must be positive.
     */
    extension_speed?: double;
    /**
     * May not be 0.
     */
    horizontal_turn_rate?: double;
    /**
     * May not be 0.
     */
    vertical_turn_rate?: double;
}
/**
 * The name of an {@link AirbornePollutantPrototype | prototype:AirbornePollutantPrototype}.
 * @example ```
"pollution"
```
 * @example ```
"pollen"
```
 */
type AirbornePollutantID = string;
interface AlternativeBuildTipTrigger extends CountBasedTipTrigger {
    type: 'alternative-build';
}
/**
 * Lets the game know in what instances the audio file is played.
 */
type AmbientSoundType = /**
 * This track is only played in the main menu.
 */
'menu-track' | /**
 * This track is played interleaved (alternating) with `"interlude"` tracks.
 */
'main-track' | /**
 * This track is played when a character steps on a new surface for the first time. Only one `"hero-track"` per planet or space platform is allowed.
 */
'hero-track' | /**
 * This track is played interleaved (alternating) with `"main-track"` tracks.
 */
'interlude';
/**
 * The name of an {@link AmmoCategory | prototype:AmmoCategory}.
 * @example ```
"bullet"
```
 * @example ```
"melee"
```
 */
type AmmoCategoryID = string;
interface AmmoDamageModifier extends BaseModifier {
    /**
     * Name of the {@link AmmoCategory | prototype:AmmoCategory} that is affected.
     */
    ammo_category: AmmoCategoryID;
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    /**
     * Modification value, which will be added to the current ammo damage modifier upon researching.
     */
    modifier: double;
    type: 'ammo-damage';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
/**
 * Used to allow specifying different ammo effects depending on which kind of entity the ammo is used in.
 *
 * If ammo is used in an entity that isn't covered by the defined source_types, e.g. only `"player"` and `"vehicle"` are defined and the ammo is used by a turret, the first defined AmmoType in the {@link AmmoItemPrototype::ammo_type | prototype:AmmoItemPrototype::ammo_type} array is used.
 */
type AmmoSourceType = 'default' | 'player' | 'turret' | 'vehicle';
/**
 * Definition of actual parameters used in attack.
 */
interface AmmoType {
    /**
     * Describes actions taken upon attack happening.
     */
    action?: Trigger;
    /**
     * When true, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` equals `"position"`. The gun will fire at the maximum range in the direction of the target position.
     */
    clamp_position?: bool;
    consumption_modifier?: float;
    cooldown_modifier?: double;
    /**
     * Energy consumption of a single shot, if applicable.
     */
    energy_consumption?: Energy;
    /**
     * Affects the `range` value of the shooting gun prototype's {@link BaseAttackParameters | prototype:BaseAttackParameters} to give a modified maximum range. The `min_range` value of the gun is unaffected.
     *
     * This has no effect on artillery turrets and wagons even though the bonus appears in the GUI. {@link Forum thread | https://forums.factorio.com/103658}.
     */
    range_modifier?: double;
    /**
     * Only exists (and is then mandatory) if the {@link AmmoItemPrototype::ammo_type | prototype:AmmoItemPrototype::ammo_type} this AmmoType is defined on has multiple ammo types.
     *
     * Defines for which kind of entity this ammo type applies. Each entity kind can only be used once per array.
     */
    source_type?: AmmoSourceType;
    /**
     * List of entities that can be targeted by this ammo type.
     */
    target_filter?: EntityID[];
    /**
     * `"entity"` fires at an entity, `"position"` fires directly at a position, `"direction"` fires in a direction.
     *
     * If this is `"entity"`, `clamp_position` is forced to be `false`.
     */
    target_type?: 'entity' | 'position' | 'direction';
}
interface AndTipTrigger {
    /**
     * If all of the triggers are fulfilled, this trigger is considered fulfilled.
     */
    triggers: TipTrigger[];
    type: 'and';
}
interface AnimatedVector {
    direction_shift?: DirectionShift;
    /**
     * Default render layer for the rotations.
     */
    render_layer?: RenderLayer;
    rotations: VectorRotation[];
}
/**
 * Specifies an animation that can be used in the game.
 *
 * Note that if any frame of the animation is specified from the same source as any other {@link Sprite | prototype:Sprite} or frame of other animation, it will be shared.
 * @example ```
-- simple animation
horizontal_animation =
{
  filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
  width = 352,
  height = 257,
  frame_count = 32,
  line_length = 8,
  shift = {0.03125, -0.1484375}
}
```
 * @example ```
-- animation with layers
horizontal_animation =
{
  layers =
  {
    {
      filename = "__base__/graphics/entity/steam-engine/steam-engine-H.png",
      width = 352,
      height = 257,
      frame_count = 32,
      line_length = 8,
      shift = {0.03125, -0.15625}
    },
    {
      filename = "__base__/graphics/entity/steam-engine/steam-engine-H-shadow.png",
      width = 508,
      height = 160,
      frame_count = 32,
      line_length = 8,
      draw_as_shadow = true,
      shift = {1.5, 0.75}
    }
  }
}
```
 */
interface Animation extends AnimationParameters {
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
     * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * `animation_speed` and `max_advance` of the first layer are used for all layers. All layers will run at the same speed.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     */
    layers?: Animation[];
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint32;
    /**
     * Only loaded if `layers` is not defined and if `filenames` is defined.
     */
    slice?: uint32;
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: Stripe[];
}
/**
 * If this is loaded as a single Animation, it applies to all directions. Any direction that is not defined defaults to the north animation.
 */
type Animation4Way = {
    east?: Animation;
    north: Animation;
    north_east?: Animation;
    north_west?: Animation;
    south?: Animation;
    south_east?: Animation;
    south_west?: Animation;
    west?: Animation;
} | Animation;
interface AnimationElement {
    always_draw?: bool;
    animation?: Animation;
    apply_tint?: bool;
    render_layer?: RenderLayer;
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8;
}
/**
 * This is a list of 1-based frame indices into the spritesheet. The actual length of the animation will then be the length of the frame_sequence (times `repeat_count`, plus the length minus two if `run_mode` is `"forward-then-backward"`). There is a limit for (actual) animation length of 255 frames.
 *
 * Indices can be used in any order, repeated or not used at all. Unused frames are not loaded into VRAM at all, frames referenced multiple times are loaded just once, see {@link here | https://forums.factorio.com/53202}.
 * @example ```
-- Trivial example - frame_sequence defines same sequence in which the animation would load by default,
-- so it is useless in this case:
frame_count = 4,
frame_sequence = { 1, 2, 3, 4 }
```
 * @example ```
-- Usage example - first five times repeat frame 2, then alternate between 4 and 3 two times. Frame 1 is not used:
frame_count = 4,
frame_sequence = { 2, 2, 2, 2, 2, 4, 3, 4, 3 }
```
 * @example ```
-- Complex example - animation contains different layers with different frame counts:
local custom_frame_sequence = { 2, 2, 2, 2, 2, 4, 3, 4, 3 }
layers = {
  {
    -- Animation with custom frame sequence
    frame_count = 4,
    frame_sequence = custom_frame_sequence,
  },
  {
    -- Single sprite that's repeated
    repeat_count = #custom_frame_sequence,
  },
  {
    -- Other animation with different frame count
    -- Assuming: #custom_frame_sequence < frame_count
    frame_count = #custom_frame_sequence,
  },
}
```
 */
type AnimationFrameSequence = uint16[];
interface AnimationParameters extends SpriteParameters {
    /**
     * Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.
     */
    animation_speed?: float;
    /**
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4×4 grid.
     */
    dice?: uint8;
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     */
    dice_x?: uint8;
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     */
    dice_y?: uint8;
    /**
     * Can't be `0`.
     */
    frame_count?: uint32;
    frame_sequence?: AnimationFrameSequence;
    /**
     * Unused.
     */
    generate_sdf?: bool;
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of one frame in pixels, from 0-4096.
     */
    height?: SpriteSizeType;
    /**
     * Specifies how many pictures are on each horizontal line in the image file. `0` means that all the pictures are in one horizontal line. Once the specified number of pictures are loaded from a line, the pictures from the next line are loaded. This is to allow having longer animations loaded in to Factorio's graphics matrix than the game engine's width limit of 8192px per input file. The restriction on input files is to be compatible with most graphics cards.
     */
    line_length?: uint32;
    /**
     * Maximum amount of frames the animation can move forward in one update. Useful to cap the animation speed on entities where it is variable, such as car animations.
     */
    max_advance?: float;
    /**
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     *
     * Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@link here | https://forums.factorio.com/viewtopic.php?p=549058#p549058}.
     */
    mipmap_count?: uint8;
    /**
     * How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
     */
    repeat_count?: uint8;
    run_mode?: AnimationRunMode;
    /**
     * The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-4096.
     */
    size?: SpriteSizeType | [
        SpriteSizeType,
        SpriteSizeType
    ];
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of one frame in pixels, from 0-4096.
     */
    width?: SpriteSizeType;
}
type AnimationRunMode = 'forward' | 'backward' | /**
 * Does not repeat the first and last frame when running backwards.
 */
'forward-then-backward';
interface AnimationSheet extends AnimationParameters {
    /**
     * Only loaded, and mandatory if `filenames` is not defined.
     *
     * The path to the animation file to use.
     */
    filename?: FileName;
    filenames?: FileName[];
    line_length?: uint32;
    /**
     * Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint32;
    variation_count: uint32;
}
/**
 * @example ```
-- array of animations
animations =
{
  {
    filename = "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
    draw_as_glow = true,
    priority = "extra-high",
    width = 34,
    height = 38,
    frame_count = 2,
    animation_speed = 1.5,
    shift = {0, 0}
  },
  {
    filename = "__base__/graphics/entity/explosion-gunshot/explosion-gunshot.png",
    draw_as_glow = true,
    priority = "extra-high",
    width = 34,
    height = 38,
    x = 34 * 2,
    frame_count = 2,
    animation_speed = 1.5,
    shift = {0, 0}
  },
  -- [...]
}
```
 * @example ```
-- animation sheet using "sheet"
pictures =
{
  sheet =
  {
    filename = "__base__/graphics/entity/character/footprints.png",
    line_length = 2,
    frame_count = 2,
    width = 30,
    height = 22,
    shift = util.by_pixel(0.25, 0.25),
    scale = 0.5,
    variation_count = 8
  }
}
```
 */
type AnimationVariations = {
    /**
     * The variations are arranged vertically in the file, one row for each variation.
     */
    sheet?: AnimationSheet;
    /**
     * Only loaded if `sheet` is not defined.
     */
    sheets?: AnimationSheet[];
} | Animation | Animation[];
/**
 * A union of all prototypes. A specific prototype is loaded based on the value of the `type` key.
 *
 * See the {@link Prototypes page | prototype:prototypes} for more information.
 */
type AnyPrototype = /**
 * `'accumulator'`
 */
AccumulatorPrototype | /**
 * `'achievement'`
 */
AchievementPrototype | /**
 * `'active-defense-equipment'`
 */
ActiveDefenseEquipmentPrototype | /**
 * `'agricultural-tower'`
 */
AgriculturalTowerPrototype | /**
 * `'airborne-pollutant'`
 */
AirbornePollutantPrototype | /**
 * `'ambient-sound'`
 */
AmbientSound | /**
 * `'ammo-category'`
 */
AmmoCategory | /**
 * `'ammo'`
 */
AmmoItemPrototype | /**
 * `'ammo-turret'`
 */
AmmoTurretPrototype | /**
 * `'animation'`
 */
AnimationPrototype | /**
 * `'arithmetic-combinator'`
 */
ArithmeticCombinatorPrototype | /**
 * `'armor'`
 */
ArmorPrototype | /**
 * `'arrow'`
 */
ArrowPrototype | /**
 * `'artillery-flare'`
 */
ArtilleryFlarePrototype | /**
 * `'artillery-projectile'`
 */
ArtilleryProjectilePrototype | /**
 * `'artillery-turret'`
 */
ArtilleryTurretPrototype | /**
 * `'artillery-wagon'`
 */
ArtilleryWagonPrototype | /**
 * `'assembling-machine'`
 */
AssemblingMachinePrototype | /**
 * `'asteroid-chunk'`
 */
AsteroidChunkPrototype | /**
 * `'asteroid-collector'`
 */
AsteroidCollectorPrototype | /**
 * `'asteroid'`
 */
AsteroidPrototype | /**
 * `'autoplace-control'`
 */
AutoplaceControl | /**
 * `'battery-equipment'`
 */
BatteryEquipmentPrototype | /**
 * `'beacon'`
 */
BeaconPrototype | /**
 * `'beam'`
 */
BeamPrototype | /**
 * `'belt-immunity-equipment'`
 */
BeltImmunityEquipmentPrototype | /**
 * `'blueprint-book'`
 */
BlueprintBookPrototype | /**
 * `'blueprint'`
 */
BlueprintItemPrototype | /**
 * `'boiler'`
 */
BoilerPrototype | /**
 * `'build-entity-achievement'`
 */
BuildEntityAchievementPrototype | /**
 * `'burner-generator'`
 */
BurnerGeneratorPrototype | /**
 * `'burner-usage'`
 */
BurnerUsagePrototype | /**
 * `'capsule'`
 */
CapsulePrototype | /**
 * `'capture-robot'`
 */
CaptureRobotPrototype | /**
 * `'car'`
 */
CarPrototype | /**
 * `'cargo-bay'`
 */
CargoBayPrototype | /**
 * `'cargo-landing-pad'`
 */
CargoLandingPadPrototype | /**
 * `'cargo-pod'`
 */
CargoPodPrototype | /**
 * `'cargo-wagon'`
 */
CargoWagonPrototype | /**
 * `'chain-active-trigger'`
 */
ChainActiveTriggerPrototype | /**
 * `'change-surface-achievement'`
 */
ChangedSurfaceAchievementPrototype | /**
 * `'character-corpse'`
 */
CharacterCorpsePrototype | /**
 * `'character'`
 */
CharacterPrototype | /**
 * `'cliff'`
 */
CliffPrototype | /**
 * `'collision-layer'`
 */
CollisionLayerPrototype | /**
 * `'combat-robot-count-achievement'`
 */
CombatRobotCountAchievementPrototype | /**
 * `'combat-robot'`
 */
CombatRobotPrototype | /**
 * `'complete-objective-achievement'`
 */
CompleteObjectiveAchievementPrototype | /**
 * `'constant-combinator'`
 */
ConstantCombinatorPrototype | /**
 * `'construct-with-robots-achievement'`
 */
ConstructWithRobotsAchievementPrototype | /**
 * `'construction-robot'`
 */
ConstructionRobotPrototype | /**
 * `'container'`
 */
ContainerPrototype | /**
 * `'copy-paste-tool'`
 */
CopyPasteToolPrototype | /**
 * `'corpse'`
 */
CorpsePrototype | /**
 * `'create-platform-achievement'`
 */
CreatePlatformAchievementPrototype | /**
 * `'curved-rail-a'`
 */
CurvedRailAPrototype | /**
 * `'curved-rail-b'`
 */
CurvedRailBPrototype | /**
 * `'custom-event'`
 */
CustomEventPrototype | /**
 * `'custom-input'`
 */
CustomInputPrototype | /**
 * `'damage-type'`
 */
DamageType | /**
 * `'decider-combinator'`
 */
DeciderCombinatorPrototype | /**
 * `'deconstruct-with-robots-achievement'`
 */
DeconstructWithRobotsAchievementPrototype | /**
 * `'deconstructible-tile-proxy'`
 */
DeconstructibleTileProxyPrototype | /**
 * `'deconstruction-item'`
 */
DeconstructionItemPrototype | /**
 * `'optimized-decorative'`
 */
DecorativePrototype | /**
 * `'delayed-active-trigger'`
 */
DelayedActiveTriggerPrototype | /**
 * `'deliver-by-robots-achievement'`
 */
DeliverByRobotsAchievementPrototype | /**
 * `'deliver-category'`
 */
DeliverCategory | /**
 * `'deliver-impact-combination'`
 */
DeliverImpactCombination | /**
 * `'deplete-resource-achievement'`
 */
DepleteResourceAchievementPrototype | /**
 * `'destroy-cliff-achievement'`
 */
DestroyCliffAchievementPrototype | /**
 * `'display-panel'`
 */
DisplayPanelPrototype | /**
 * `'dont-build-entity-achievement'`
 */
DontBuildEntityAchievementPrototype | /**
 * `'dont-craft-manually-achievement'`
 */
DontCraftManuallyAchievementPrototype | /**
 * `'dont-kill-manually-achievement'`
 */
DontKillManuallyAchievementPrototype | /**
 * `'dont-research-before-researching-achievement'`
 */
DontResearchBeforeResearchingAchievementPrototype | /**
 * `'dont-use-entity-in-energy-production-achievement'`
 */
DontUseEntityInEnergyProductionAchievementPrototype | /**
 * `'editor-controller'`
 */
EditorControllerPrototype | /**
 * `'electric-energy-interface'`
 */
ElectricEnergyInterfacePrototype | /**
 * `'electric-pole'`
 */
ElectricPolePrototype | /**
 * `'electric-turret'`
 */
ElectricTurretPrototype | /**
 * `'elevated-curved-rail-a'`
 */
ElevatedCurvedRailAPrototype | /**
 * `'elevated-curved-rail-b'`
 */
ElevatedCurvedRailBPrototype | /**
 * `'elevated-half-diagonal-rail'`
 */
ElevatedHalfDiagonalRailPrototype | /**
 * `'elevated-straight-rail'`
 */
ElevatedStraightRailPrototype | /**
 * `'unit-spawner'`
 */
EnemySpawnerPrototype | /**
 * `'energy-shield-equipment'`
 */
EnergyShieldEquipmentPrototype | /**
 * `'entity-ghost'`
 */
EntityGhostPrototype | /**
 * `'equip-armor-achievement'`
 */
EquipArmorAchievementPrototype | /**
 * `'equipment-category'`
 */
EquipmentCategory | /**
 * `'equipment-ghost'`
 */
EquipmentGhostPrototype | /**
 * `'equipment-grid'`
 */
EquipmentGridPrototype | /**
 * `'explosion'`
 */
ExplosionPrototype | /**
 * `'fire'`
 */
FireFlamePrototype | /**
 * `'fish'`
 */
FishPrototype | /**
 * `'fluid'`
 */
FluidPrototype | /**
 * `'stream'`
 */
FluidStreamPrototype | /**
 * `'fluid-turret'`
 */
FluidTurretPrototype | /**
 * `'fluid-wagon'`
 */
FluidWagonPrototype | /**
 * `'font'`
 */
FontPrototype | /**
 * `'fuel-category'`
 */
FuelCategory | /**
 * `'furnace'`
 */
FurnacePrototype | /**
 * `'fusion-generator'`
 */
FusionGeneratorPrototype | /**
 * `'fusion-reactor'`
 */
FusionReactorPrototype | /**
 * `'gate'`
 */
GatePrototype | /**
 * `'generator-equipment'`
 */
GeneratorEquipmentPrototype | /**
 * `'generator'`
 */
GeneratorPrototype | /**
 * `'god-controller'`
 */
GodControllerPrototype | /**
 * `'group-attack-achievement'`
 */
GroupAttackAchievementPrototype | /**
 * `'gui-style'`
 */
GuiStyle | /**
 * `'gun'`
 */
GunPrototype | /**
 * `'half-diagonal-rail'`
 */
HalfDiagonalRailPrototype | /**
 * `'heat-interface'`
 */
HeatInterfacePrototype | /**
 * `'heat-pipe'`
 */
HeatPipePrototype | /**
 * `'highlight-box'`
 */
HighlightBoxEntityPrototype | /**
 * `'impact-category'`
 */
ImpactCategory | /**
 * `'infinity-container'`
 */
InfinityContainerPrototype | /**
 * `'infinity-pipe'`
 */
InfinityPipePrototype | /**
 * `'inserter'`
 */
InserterPrototype | /**
 * `'inventory-bonus-equipment'`
 */
InventoryBonusEquipmentPrototype | /**
 * `'item-entity'`
 */
ItemEntityPrototype | /**
 * `'item-group'`
 */
ItemGroup | /**
 * `'item'`
 */
ItemPrototype | /**
 * `'item-request-proxy'`
 */
ItemRequestProxyPrototype | /**
 * `'item-subgroup'`
 */
ItemSubGroup | /**
 * `'item-with-entity-data'`
 */
ItemWithEntityDataPrototype | /**
 * `'item-with-inventory'`
 */
ItemWithInventoryPrototype | /**
 * `'item-with-label'`
 */
ItemWithLabelPrototype | /**
 * `'item-with-tags'`
 */
ItemWithTagsPrototype | /**
 * `'kill-achievement'`
 */
KillAchievementPrototype | /**
 * `'lab'`
 */
LabPrototype | /**
 * `'lamp'`
 */
LampPrototype | /**
 * `'land-mine'`
 */
LandMinePrototype | /**
 * `'lane-splitter'`
 */
LaneSplitterPrototype | /**
 * `'legacy-curved-rail'`
 */
LegacyCurvedRailPrototype | /**
 * `'legacy-straight-rail'`
 */
LegacyStraightRailPrototype | /**
 * `'lightning-attractor'`
 */
LightningAttractorPrototype | /**
 * `'lightning'`
 */
LightningPrototype | /**
 * `'linked-belt'`
 */
LinkedBeltPrototype | /**
 * `'linked-container'`
 */
LinkedContainerPrototype | /**
 * `'loader-1x1'`
 */
Loader1x1Prototype | /**
 * `'loader'`
 */
Loader1x2Prototype | /**
 * `'locomotive'`
 */
LocomotivePrototype | /**
 * `'logistic-container'`
 */
LogisticContainerPrototype | /**
 * `'logistic-robot'`
 */
LogisticRobotPrototype | /**
 * `'map-gen-presets'`
 */
MapGenPresets | /**
 * `'map-settings'`
 */
MapSettings | /**
 * `'market'`
 */
MarketPrototype | /**
 * `'mining-drill'`
 */
MiningDrillPrototype | /**
 * `'module-category'`
 */
ModuleCategory | /**
 * `'module'`
 */
ModulePrototype | /**
 * `'module-transfer-achievement'`
 */
ModuleTransferAchievementPrototype | /**
 * `'mouse-cursor'`
 */
MouseCursor | /**
 * `'movement-bonus-equipment'`
 */
MovementBonusEquipmentPrototype | /**
 * `'noise-expression'`
 */
NamedNoiseExpression | /**
 * `'noise-function'`
 */
NamedNoiseFunction | /**
 * `'night-vision-equipment'`
 */
NightVisionEquipmentPrototype | /**
 * `'offshore-pump'`
 */
OffshorePumpPrototype | /**
 * `'optimized-particle'`
 */
ParticlePrototype | /**
 * `'particle-source'`
 */
ParticleSourcePrototype | /**
 * `'pipe'`
 */
PipePrototype | /**
 * `'pipe-to-ground'`
 */
PipeToGroundPrototype | /**
 * `'place-equipment-achievement'`
 */
PlaceEquipmentAchievementPrototype | /**
 * `'planet'`
 */
PlanetPrototype | /**
 * `'plant'`
 */
PlantPrototype | /**
 * `'player-damaged-achievement'`
 */
PlayerDamagedAchievementPrototype | /**
 * `'player-port'`
 */
PlayerPortPrototype | /**
 * `'power-switch'`
 */
PowerSwitchPrototype | /**
 * `'procession-layer-inheritance-group'`
 */
ProcessionLayerInheritanceGroup | /**
 * `'procession'`
 */
ProcessionPrototype | /**
 * `'produce-achievement'`
 */
ProduceAchievementPrototype | /**
 * `'produce-per-hour-achievement'`
 */
ProducePerHourAchievementPrototype | /**
 * `'programmable-speaker'`
 */
ProgrammableSpeakerPrototype | /**
 * `'projectile'`
 */
ProjectilePrototype | /**
 * `'pump'`
 */
PumpPrototype | /**
 * `'quality'`
 */
QualityPrototype | /**
 * `'radar'`
 */
RadarPrototype | /**
 * `'rail-chain-signal'`
 */
RailChainSignalPrototype | /**
 * `'rail-planner'`
 */
RailPlannerPrototype | /**
 * `'rail-ramp'`
 */
RailRampPrototype | /**
 * `'rail-remnants'`
 */
RailRemnantsPrototype | /**
 * `'rail-signal'`
 */
RailSignalPrototype | /**
 * `'rail-support'`
 */
RailSupportPrototype | /**
 * `'reactor'`
 */
ReactorPrototype | /**
 * `'recipe-category'`
 */
RecipeCategory | /**
 * `'recipe'`
 */
RecipePrototype | /**
 * `'remote-controller'`
 */
RemoteControllerPrototype | /**
 * `'repair-tool'`
 */
RepairToolPrototype | /**
 * `'research-achievement'`
 */
ResearchAchievementPrototype | /**
 * `'research-with-science-pack-achievement'`
 */
ResearchWithSciencePackAchievementPrototype | /**
 * `'resource-category'`
 */
ResourceCategory | /**
 * `'resource'`
 */
ResourceEntityPrototype | /**
 * `'roboport-equipment'`
 */
RoboportEquipmentPrototype | /**
 * `'roboport'`
 */
RoboportPrototype | /**
 * `'rocket-silo'`
 */
RocketSiloPrototype | /**
 * `'rocket-silo-rocket'`
 */
RocketSiloRocketPrototype | /**
 * `'rocket-silo-rocket-shadow'`
 */
RocketSiloRocketShadowPrototype | /**
 * `'segment'`
 */
SegmentPrototype | /**
 * `'segmented-unit'`
 */
SegmentedUnitPrototype | /**
 * `'selection-tool'`
 */
SelectionToolPrototype | /**
 * `'selector-combinator'`
 */
SelectorCombinatorPrototype | /**
 * `'shoot-achievement'`
 */
ShootAchievementPrototype | /**
 * `'shortcut'`
 */
ShortcutPrototype | /**
 * `'simple-entity'`
 */
SimpleEntityPrototype | /**
 * `'simple-entity-with-force'`
 */
SimpleEntityWithForcePrototype | /**
 * `'simple-entity-with-owner'`
 */
SimpleEntityWithOwnerPrototype | /**
 * `'smoke-with-trigger'`
 */
SmokeWithTriggerPrototype | /**
 * `'solar-panel-equipment'`
 */
SolarPanelEquipmentPrototype | /**
 * `'solar-panel'`
 */
SolarPanelPrototype | /**
 * `'sound'`
 */
SoundPrototype | /**
 * `'space-connection-distance-traveled-achievement'`
 */
SpaceConnectionDistanceTraveledAchievementPrototype | /**
 * `'space-connection'`
 */
SpaceConnectionPrototype | /**
 * `'space-location'`
 */
SpaceLocationPrototype | /**
 * `'space-platform-hub'`
 */
SpacePlatformHubPrototype | /**
 * `'space-platform-starter-pack'`
 */
SpacePlatformStarterPackPrototype | /**
 * `'spectator-controller'`
 */
SpectatorControllerPrototype | /**
 * `'speech-bubble'`
 */
SpeechBubblePrototype | /**
 * `'spider-leg'`
 */
SpiderLegPrototype | /**
 * `'spider-unit'`
 */
SpiderUnitPrototype | /**
 * `'spider-vehicle'`
 */
SpiderVehiclePrototype | /**
 * `'spidertron-remote'`
 */
SpidertronRemotePrototype | /**
 * `'splitter'`
 */
SplitterPrototype | /**
 * `'sprite'`
 */
SpritePrototype | /**
 * `'sticker'`
 */
StickerPrototype | /**
 * `'storage-tank'`
 */
StorageTankPrototype | /**
 * `'straight-rail'`
 */
StraightRailPrototype | /**
 * `'surface-property'`
 */
SurfacePropertyPrototype | /**
 * `'surface'`
 */
SurfacePrototype | /**
 * `'technology'`
 */
TechnologyPrototype | /**
 * `'temporary-container'`
 */
TemporaryContainerPrototype | /**
 * `'thruster'`
 */
ThrusterPrototype | /**
 * `'tile-effect'`
 */
TileEffectDefinition | /**
 * `'tile-ghost'`
 */
TileGhostPrototype | /**
 * `'tile'`
 */
TilePrototype | /**
 * `'tips-and-tricks-item'`
 */
TipsAndTricksItem | /**
 * `'tips-and-tricks-item-category'`
 */
TipsAndTricksItemCategory | /**
 * `'tool'`
 */
ToolPrototype | /**
 * `'train-path-achievement'`
 */
TrainPathAchievementPrototype | /**
 * `'train-stop'`
 */
TrainStopPrototype | /**
 * `'transport-belt'`
 */
TransportBeltPrototype | /**
 * `'tree'`
 */
TreePrototype | /**
 * `'trigger-target-type'`
 */
TriggerTargetType | /**
 * `'trivial-smoke'`
 */
TrivialSmokePrototype | /**
 * `'turret'`
 */
TurretPrototype | /**
 * `'tutorial'`
 */
TutorialDefinition | /**
 * `'underground-belt'`
 */
UndergroundBeltPrototype | /**
 * `'unit'`
 */
UnitPrototype | /**
 * `'upgrade-item'`
 */
UpgradeItemPrototype | /**
 * `'use-entity-in-energy-production-achievement'`
 */
UseEntityInEnergyProductionAchievementPrototype | /**
 * `'use-item-achievement'`
 */
UseItemAchievementPrototype | /**
 * `'utility-constants'`
 */
UtilityConstants | /**
 * `'utility-sounds'`
 */
UtilitySounds | /**
 * `'utility-sprites'`
 */
UtilitySprites | /**
 * `'virtual-signal'`
 */
VirtualSignalPrototype | /**
 * `'wall'`
 */
WallPrototype;
interface ApplyStarterPackTipTrigger extends CountBasedTipTrigger {
    type: 'apply-starter-pack';
}
interface AreaTriggerItem extends TriggerItem {
    collision_mode?: 'distance-from-collision-box' | 'distance-from-center';
    radius: double;
    show_in_tooltip?: bool;
    target_entities?: bool;
    trigger_from_target?: bool;
    type: 'area';
}
interface ArtilleryRangeModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'artillery-range';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface ArtilleryRemoteCapsuleAction {
    /**
     * Name of an {@link ArtilleryFlarePrototype | prototype:ArtilleryFlarePrototype}.
     */
    flare: EntityID;
    play_sound_on_failure?: bool;
    type: 'artillery-remote';
}
interface ArtilleryTriggerDelivery extends TriggerDeliveryItem {
    /**
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     */
    direction_deviation?: float;
    /**
     * Name of a {@link ArtilleryProjectilePrototype | prototype:ArtilleryProjectilePrototype}.
     */
    projectile: EntityID;
    range_deviation?: float;
    starting_speed: float;
    starting_speed_deviation?: float;
    trigger_fired_artillery?: bool;
    type: 'artillery';
}
/**
 * The name of an {@link AsteroidChunkPrototype | prototype:AsteroidChunkPrototype}.
 * @example ```
"metallic-asteroid-chunk"
```
 * @example ```
"oxide-asteroid-chunk"
```
 */
type AsteroidChunkID = string;
interface AsteroidCollectorGraphicsSet {
    animation?: Animation4Way;
    arm_head_animation?: RotatedAnimation;
    arm_head_top_animation?: RotatedAnimation;
    arm_link?: RotatedSprite;
    below_arm_pictures?: RotatedSprite;
    below_ground_pictures?: RotatedSprite;
    status_lamp_picture_full?: RotatedSprite;
    status_lamp_picture_off?: RotatedSprite;
    status_lamp_picture_on?: RotatedSprite;
}
interface AsteroidGraphicsSet {
    ambient_light?: Color;
    brightness?: float;
    light_width?: float;
    lights?: LightProperties | LightProperties[];
    normal_strength?: float;
    rotation_speed?: float;
    specular_power?: float;
    specular_purity?: float;
    specular_strength?: float;
    sprite?: Sprite;
    sss_amount?: float;
    sss_contrast?: float;
    variations?: AsteroidVariation | AsteroidVariation[];
}
interface AsteroidSettings {
    max_ray_portals_expanded_per_tick: uint32;
    spawning_rate: double;
}
interface AsteroidSpawnPoint {
    /**
     * Facing the north. Must be in `[0, 1]` range.
     */
    angle_when_stopped?: double;
    /**
     * Must be >= 0.
     */
    probability: double;
    /**
     * Must be > 0.
     */
    speed: double;
}
interface AsteroidVariation {
    color_texture: Sprite;
    normal_map: Sprite;
    roughness_map: Sprite;
    shadow_shift?: Vector;
}
/**
 * Loaded as one of the {@link BaseAttackParameters | prototype:BaseAttackParameters} extensions, based on the value of the `type` key.
 */
type AttackParameters = /**
 * Loaded when the `type` is `"projectile"`.
 */
ProjectileAttackParameters | /**
 * Loaded when the `type` is `"beam"`.
 */
BeamAttackParameters | /**
 * Loaded when the `type` is `"stream"`.
 */
StreamAttackParameters;
interface AttackReactionItem {
    action?: Trigger;
    damage_type?: DamageTypeID;
    range: float;
    reaction_modifier?: float;
}
interface Attenuation {
    curve_type: AttenuationType;
    tuning_parameter?: float;
}
type AttenuationType = 'none' | 'linear' | 'logarithmic' | 'exponential' | 'cosine' | 'S-curve';
/**
 * The name of an {@link AutoplaceControl | prototype:AutoplaceControl}.
 * @example ```
"copper-ore"
```
 * @example ```
"trees"
```
 */
type AutoplaceControlID = string;
interface AutoplaceSettings {
    /**
     * Overrides the FrequencySizeRichness provided to the {@link AutoplaceSpecification | prototype:AutoplaceSpecification} of the entity/tile/decorative. Takes priority over the FrequencySizeRichness set in the {@link autoplace control | prototype:AutoplaceSpecification::control}.
     */
    settings?: Record<EntityID | TileID | DecorativeID, FrequencySizeRichness>;
    /**
     * Whether missing autoplace names for this type should be default enabled.
     */
    treat_missing_as_default?: bool;
}
/**
 * Autoplace specification is used to determine which entities are placed when generating map. Currently it is used for enemy bases, tiles, resources and other entities (trees, fishes, etc.).
 *
 * Autoplace specification describe conditions for placing tiles, entities, and decoratives during surface generation. Autoplace specification defines probability of placement on any given tile and richness, which has different meaning depending on the thing being placed.
 */
interface AutoplaceSpecification {
    /**
     * Name of the {@link AutoplaceControl | prototype:AutoplaceControl} (row in the map generator GUI) that applies to this entity.
     */
    control?: AutoplaceControlID;
    /**
     * Indicates whether the thing should be placed even if {@link MapGenSettings | runtime:MapGenSettings} do not provide frequency/size/richness for it. (either for the specific prototype or for the control named by AutoplaceSpecification.control).
     *
     * If true, normal frequency/size/richness (`value=1`) are used in that case. Otherwise it is treated as if 'none' were selected.
     */
    default_enabled?: bool;
    /**
     * Force of the placed entity. Can be a custom force name. Only relevant for {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype}.
     */
    force?: 'enemy' | 'player' | 'neutral' | string;
    /**
     * A map of expression name to expression. Used by `probability_expression` and `richness_expression`.
     *
     * Local expressions are meant to store data locally similar to local variables in Lua. Their purpose is to hold noise expressions used multiple times in the named noise expression, or just to tell the reader that the local expression has a specific purpose. Local expressions can access other local definitions and also function parameters, but recursive definitions aren't supported.
     */
    local_expressions?: Record<string, NoiseExpression>;
    /**
     * A map of function name to function. Used by `probability_expression` and `richness_expression`.
     *
     * Local functions serve the same purpose as local expressions - they aren't visible outside of the specific prototype and they have access to other local definitions.
     */
    local_functions?: Record<string, NoiseFunction>;
    /**
     * Order for placing the entity (has no effect when placing tiles). Entities whose order compares less are placed earlier (this influences placing multiple entities which collide with itself), from entities with equal order string only one with the highest probability is placed.
     */
    order?: Order;
    /**
     * For entities and decoratives, how many times to attempt to place on each tile. Probability and collisions are taken into account each attempt.
     */
    placement_density?: uint32;
    /**
     * Provides a noise expression that will be evaluated at every point on the map to determine probability.
     */
    probability_expression: NoiseExpression;
    /**
     * If specified, provides a noise expression that will be evaluated to determine richness. Otherwise, `probability_expression` will be used instead.
     */
    richness_expression?: NoiseExpression;
    /**
     * Restricts tiles or tile transitions the entity can appear on.
     */
    tile_restriction?: TileIDRestriction[];
}
/**
 * The abstract base of all {@link AttackParameters | prototype:AttackParameters}.
 */
interface BaseAttackParameters {
    /**
     * Used in tooltips to set the tooltip category. It is also used to get the locale keys for activation instructions and speed of the action for the tooltip.
     *
     * For example, an activation_type of "throw" will result in the tooltip category "thrown" and the tooltip locale keys "gui.instruction-to-throw" and "description.throwing-speed".
     */
    activation_type?: 'shoot' | 'throw' | 'consume' | 'activate';
    /**
     * Mandatory if `ammo_category` is not defined.
     */
    ammo_categories?: AmmoCategoryID[];
    /**
     * Mandatory if `ammo_categories` is not defined.
     */
    ammo_category?: AmmoCategoryID;
    /**
     * Must be greater than or equal to `0`.
     */
    ammo_consumption_modifier?: float;
    /**
     * Can be mandatory.
     */
    ammo_type?: AmmoType;
    animation?: RotatedAnimation;
    /**
     * Number of ticks in which it will be possible to shoot again. If < 1, multiple shots can be performed in one tick.
     */
    cooldown: float;
    /**
     * Must be between `0` and `1`.
     */
    cooldown_deviation?: float;
    /**
     * Played during the attack.
     */
    cyclic_sound?: CyclicSound;
    damage_modifier?: float;
    /**
     * Used when searching for the nearest enemy, when this is > 0, enemies that aren't burning are preferred over burning enemies. Definition of "burning" for this: Entity has sticker attached to it, and the sticker has a {@link spread_fire_entity | prototype:StickerPrototype::spread_fire_entity} set.
     */
    fire_penalty?: float;
    /**
     * A higher penalty will discourage turrets from targeting units with higher health. A negative penalty will encourage turrets to target units with higher health.
     */
    health_penalty?: float;
    /**
     * Setting this to anything but zero causes projectiles to aim for the predicted location based on enemy movement instead of the current enemy location. If set, this property adds a flat number of ticks atop `lead_target_for_projectile_speed` that the shooter must lead.
     */
    lead_target_for_projectile_delay?: uint32;
    /**
     * Setting this to anything but zero causes homing projectiles to aim for the predicted location based on enemy movement instead of the current enemy location. If set, this property specifies the distance travelled per tick of the fired projectile.
     * @example ```
    -- this is same as particle horizontal speed of flamethrower fire stream
    lead_target_for_projectile_speed = 0.2* 0.75 * 1.5
    ```
     */
    lead_target_for_projectile_speed?: float;
    /**
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance.
     */
    min_attack_distance?: float;
    /**
     * The minimum distance (in tiles) between an entity and target. If a unit's target is less than this, the unit will attempt to move away before attacking. A {@link flamethrower turret | https://wiki.factorio.com/Flamethrower_turret} does not move, but has a minimum range. Less than this, it is unable to target an enemy.
     */
    min_range?: float;
    movement_slow_down_cooldown?: float;
    movement_slow_down_factor?: double;
    /**
     * Before an entity can attack, the distance (in tiles) between the entity and target must be less than or equal to this.
     */
    range: float;
    range_mode?: RangeMode;
    /**
     * A higher penalty will discourage turrets from targeting units that would take longer to turn to face.
     */
    rotate_penalty?: float;
    /**
     * Played once at the start of the attack if these are {@link ProjectileAttackParameters | prototype:ProjectileAttackParameters}.
     */
    sound?: LayeredSound;
    /**
     * If this is <= 0, it is set to 1. Arc from 0 to 1, so for example 0.25 is 90°. Used by the {@link flamethrower turret | https://wiki.factorio.com/Flamethrower_turret} in the base game. Arcs greater than 0.5 but less than 1 will be clamped to 0.5 as targeting in arcs larger than half circle is {@link not implemented | https://forums.factorio.com/94654}.
     */
    turn_range?: float;
    use_shooter_direction?: bool;
    /**
     * Number of ticks it takes for the weapon to actually shoot after the order for shooting has been made. This also allows to "adjust" the shooting animation to the effect of shooting.
     *
     * {@link CapsuleActions | prototype:CapsuleAction} cannot have attack parameters with non-zero warmup.
     */
    warmup?: uint32;
}
/**
 * The abstract base of all {@link EnergySources | prototype:EnergySource}. Specifies the way an entity gets its energy.
 */
interface BaseEnergySource {
    /**
     * The pollution an entity emits per minute at full energy consumption. This is exactly the value that is shown in the entity tooltip.
     */
    emissions_per_minute?: Record<AirbornePollutantID, double>;
    /**
     * Whether to render the "no network" icon if the entity is not connected to an electric network.
     */
    render_no_network_icon?: bool;
    /**
     * Whether to render the "no power" icon if the entity is low on power. Also applies to the "no fuel" icon when using burner energy sources.
     */
    render_no_power_icon?: bool;
}
/**
 * The abstract base of all {@link Modifiers | prototype:Modifier}.
 */
interface BaseModifier {
    hidden?: bool;
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
 * The abstract base of all {@link StyleSpecifications | prototype:StyleSpecification}.
 * @example ```
-- Adding a custom frame_style-type style via GuiStyle
data.raw["gui-style"]["default"]["custom_style_for_a_frame"] =
{
  type = "frame_style",
  parent = "frame",
  use_header_filler = false,
  drag_by_title = false
}
```
 */
interface BaseStyleSpecification {
    bottom_margin?: int16;
    bottom_padding?: int16;
    /**
     * Name of a custom GUI effect, which are hard-coded in the game's engine. Only has one option currently.
     */
    effect?: 'compilatron-hologram';
    effect_opacity?: float;
    /**
     * Sets `minimal_height`, `maximal_height` and `natural_height` to the same value.
     */
    height?: uint32;
    horizontal_align?: HorizontalAlign;
    horizontally_squashable?: StretchRule;
    horizontally_stretchable?: StretchRule;
    ignored_by_search?: bool;
    left_margin?: int16;
    left_padding?: int16;
    /**
     * Sets `top_margin`, `right_margin`, `bottom_margin` and `left_margin` to the same value.
     */
    margin?: int16;
    /**
     * Maximal height ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_height?: uint32;
    /**
     * Maximal width ensures that the widget will never be bigger than than that size. It can't be stretched to be bigger.
     */
    maximal_width?: uint32;
    /**
     * Minimal height ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_height?: uint32;
    /**
     * Minimal width ensures that the widget will never be smaller than than that size. It can't be squashed to be smaller.
     */
    minimal_width?: uint32;
    /**
     * Natural height specifies the height of the element tries to have, but it can still be squashed/stretched to have a different size.
     */
    natural_height?: uint32;
    /**
     * If this is a tuple, the first member sets `natural_width` and the second sets `natural_height`. Otherwise, both `natural_width` and `natural_height` are set to the same value.
     */
    natural_size?: uint32 | [
        uint32,
        uint32
    ];
    /**
     * Natural width specifies the width of the element tries to have, but it can still be squashed/stretched to have a different size.
     */
    natural_width?: uint32;
    never_hide_by_search?: bool;
    /**
     * Sets `top_padding`, `right_padding`, `bottom_padding` and `left_padding` to the same value.
     */
    padding?: int16;
    /**
     * Name of a {@link StyleSpecification | prototype:StyleSpecification}. This style inherits all property values from its parent.
     *
     * Styles without a parent property default to the root style for their type. The exception to this are the root styles themselves, as they cannot have a parent set. Due to this, for root styles, some style properties are mandatory and behavior may be unexpected, such as an element not showing up because its size defaults to `0`.
     */
    parent?: string;
    right_margin?: int16;
    right_padding?: int16;
    /**
     * If this is a tuple, the first member sets `width`, and the second sets `height`. Otherwise, both `width` and `height` are set to the same value.
     */
    size?: uint32 | [
        uint32,
        uint32
    ];
    tooltip?: LocalisedString;
    top_margin?: int16;
    top_padding?: int16;
    vertical_align?: VerticalAlign;
    vertically_squashable?: StretchRule;
    vertically_stretchable?: StretchRule;
    /**
     * Sets `minimal_width`, `maximal_width` and `natural_width` to the same value.
     */
    width?: uint32;
}
interface BeaconDistributionModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'beacon-distribution';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface BeaconGraphicsSet {
    animation_layer?: RenderLayer;
    animation_list?: AnimationElement[];
    animation_progress?: float;
    /**
     * Which tint set in {@link ModulePrototype::beacon_tint | prototype:ModulePrototype::beacon_tint} should be applied to elements of the `animation_list`, if any.
     */
    apply_module_tint?: ModuleTint;
    base_layer?: RenderLayer;
    draw_animation_when_idle?: bool;
    draw_light_when_idle?: bool;
    frozen_patch?: Sprite;
    light?: LightDefinition;
    module_icons_suppressed?: bool;
    module_tint_mode?: 'single-module' | 'mix';
    /**
     * The visualisations available for displaying the modules in the beacon. The visualisation is chosen based on art style, see {@link BeaconModuleVisualizations::art_style | prototype:BeaconModuleVisualizations::art_style} and {@link ModulePrototype::art_style | prototype:ModulePrototype::art_style}.
     */
    module_visualisations?: BeaconModuleVisualizations[];
    no_modules_tint?: Color;
    random_animation_offset?: bool;
    reset_animation_when_frozen?: bool;
    top_layer?: RenderLayer;
}
interface BeaconModuleVisualization {
    /**
     * Which tint set in {@link ModulePrototype::beacon_tint | prototype:ModulePrototype::beacon_tint} should be applied to this, if any.
     */
    apply_module_tint?: ModuleTint;
    has_empty_slot?: bool;
    pictures?: SpriteVariations;
    render_layer?: RenderLayer;
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8;
}
interface BeaconModuleVisualizations {
    /**
     * The visualization is chosen based on the {@link ModulePrototype::art_style | prototype:ModulePrototype::art_style}, meaning if module art style equals beacon module visualization art style then this visualization is chosen. Vanilla uses `"vanilla"` here.
     */
    art_style: string;
    /**
     * The outer array contains the different slots, the inner array contains the different layers for those slots (with different tints etc). Example:
     * @example ```
    slots =
    {
      { --slot 1
        { --layer 1 of slot 1
          BeaconModuleVisualization data
        },
        { --layer 2 of slot 1
          BeaconModuleVisualization data
        }
      },
      { --slot 2
        { --layer 1 of slot 2
          BeaconModuleVisualization data
        },
        { --layer 2 of slot 2
          BeaconModuleVisualization data
        },
        { --layer 3 of slot 2
          BeaconModuleVisualization data
        }
      }
    }
    ```
     */
    slots?: BeaconModuleVisualization[][];
    tier_offset?: int32;
    use_for_empty_slots?: bool;
}
interface BeaconVisualizationTints {
    primary?: Color;
    quaternary?: Color;
    secondary?: Color;
    tertiary?: Color;
}
interface BeamAnimationSet {
    /**
     * Body segment of the beam.
     */
    body?: AnimationVariations;
    /**
     * End point of the beam.
     */
    ending?: Animation;
    /**
     * Head segment of the beam.
     */
    head?: Animation;
    render_layer?: RenderLayer;
    /**
     * Start point of the beam.
     */
    start?: Animation;
    /**
     * Tail segment of the beam.
     */
    tail?: Animation;
}
interface BeamAttackParameters extends BaseAttackParameters {
    source_direction_count?: uint32;
    source_offset?: Vector;
    type: 'beam';
}
interface BeamGraphicsSet {
    beam?: BeamAnimationSet;
    /**
     * Must be larger than 0.
     */
    desired_segment_length?: float;
    ground?: BeamAnimationSet;
    random_end_animation_rotation?: bool;
    randomize_animation_per_segment?: bool;
    transparent_start_end_animations?: bool;
}
interface BeamTriggerDelivery extends TriggerDeliveryItem {
    add_to_shooter?: bool;
    /**
     * Name of a {@link BeamPrototype | prototype:BeamPrototype}.
     */
    beam: EntityID;
    destroy_with_source_or_target?: bool;
    duration?: uint32;
    max_length?: uint32;
    source_offset?: Vector;
    type: 'beam';
}
interface BeltReaderLayer {
    render_layer?: RenderLayer;
    /**
     * Must have a `frame_count` of `4`, one for each direction.
     */
    sprites: RotatedAnimation;
}
interface BeltStackSizeBonusModifier extends SimpleModifier {
    type: 'belt-stack-size-bonus';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface BeltTraverseTipTrigger extends CountBasedTipTrigger {
    type: 'belt-traverse';
}
/**
 * Determines how sprites/animations should blend with the background. The possible values are listed below.
 *
 * Note that in most of Factorio it is assumed colors are in alpha pre-multiplied format, see {@link FFF #172 - Blending and Rendering | https://www.factorio.com/blog/post/fff-172}. Sprites get pre-multiplied when loaded, unless `premul_alpha` is set to `false` on the sprite/animation itself. Since generating mipmaps doesn't respect `premul_alpha`, lower mipmap levels will be in pre-multiplied format regardless.
 */
type BlendMode = /**
 * The result color is determined with the following formula: `Result = Active_RGB + Background_RGB * ( 1 - Active_Alpha )`. Note that this is alpha blending with an assumption that `Active_RGB` is already pre-multiplied with `Active_Alpha`.
 */
'normal' | /**
 * The result color is determined with the following formula: `Result = Active_RGB + Background_RGB`
 */
'additive' | /**
 * The result color is determined with the following formula: `Result = Active_RGB * ( 1 - Background_RGB ) + Background_RGB`
 */
'additive-soft' | /**
 * The result color is determined with the following formula: `Result = Active_RGB * Background_RGB`
 */
'multiplicative' | /**
 * The result color is determined with the following formula: `Result = Active_RGB * Background_RGB * Active_Alpha + Background_RGB * ( 1 - Active_Alpha )`
 */
'multiplicative-with-alpha' | /**
 * The result color is determined with the following formula: `Result = Active_RGBA or Background_RGBA`
 */
'overwrite';
interface BoilerPictureSet {
    east: BoilerPictures;
    north: BoilerPictures;
    south: BoilerPictures;
    west: BoilerPictures;
}
interface BoilerPictures {
    /**
     * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_flicker_enabled`.
     *
     * The secondary draw order of this is higher than the secondary draw order of `fire_glow`, so this is drawn above `fire_glow`.
     */
    fire?: Animation;
    /**
     * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_glow_flicker_enabled`.
     *
     * The secondary draw order of this is lower than the secondary draw order of `fire`, so this is drawn below `fire`.
     */
    fire_glow?: Animation;
    /**
     * Drawn above the `structure`, in the "higher-object-under" {@link RenderLayer | prototype:RenderLayer}. May be useful to correct problems with neighboring pipes overlapping the structure graphics.
     */
    patch?: Sprite;
    structure: Animation;
}
interface BonusGuiOrdering {
    artillery_range: Order;
    beacon_distribution: Order;
    bulk_inserter: Order;
    character: Order;
    follower_robots: Order;
    inserter: Order;
    mining_productivity: Order;
    research_speed: Order;
    stack_inserter: Order;
    train_braking_force: Order;
    turret_attack: Order;
    worker_robots: Order;
}
interface BoolModifier extends BaseModifier {
    /**
     * The value this modifier will have upon researching.
     */
    modifier: bool;
}
interface BorderImageSet {
    border_width?: int32;
    bottom_end?: Sprite;
    bottom_left_corner?: Sprite;
    bottom_right_corner?: Sprite;
    bottom_t?: Sprite;
    cross?: Sprite;
    horizontal_line?: Sprite;
    left_end?: Sprite;
    left_t?: Sprite;
    right_end?: Sprite;
    right_t?: Sprite;
    scale?: double;
    top_end?: Sprite;
    top_left_coner?: Sprite;
    top_right_corner?: Sprite;
    top_t?: Sprite;
    vertical_line?: Sprite;
}
/**
 * BoundingBoxes are typically centered around the position of an entity.
 *
 * BoundingBoxes are usually specified with the short-hand notation of passing an array of exactly 2 or 3 items.
 *
 * The first tuple item is left_top, the second tuple item is right_bottom. There is an unused third tuple item, a {@link float | prototype:float} that represents the orientation.
 *
 * Positive x goes towards east, positive y goes towards south. This means that the upper-left point is the least dimension in x and y, and lower-right is the greatest.
 * @example ```
{{-0.4, -0.4}, {0.4, 0.4}}
```
 * @example ```
-- long definition
{left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
```
 */
type BoundingBox = {
    left_top: MapPosition;
    /**
     * Unused.
     */
    orientation?: RealOrientation;
    right_bottom: MapPosition;
} | [
    MapPosition,
    MapPosition
];
/**
 * A cursor box, for use in {@link UtilitySprites | prototype:UtilitySprites}.
 */
interface BoxSpecification {
    /**
     * Whether this is a complete box or just the top left corner. If this is true, `side_length` and `side_height` must be present. Otherwise `max_side_length` must be present.
     */
    is_whole_box?: bool;
    /**
     * Only loaded, and mandatory if `is_whole_box` is `false`.
     */
    max_side_length?: double;
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     */
    side_height?: double;
    /**
     * Only loaded, and mandatory if `is_whole_box` is `true`.
     */
    side_length?: double;
    sprite: Sprite;
}
interface BuildEntityByRobotTipTrigger extends CountBasedTipTrigger {
    type: 'build-entity-by-robot';
}
interface BuildEntityTechnologyTrigger {
    entity: EntityIDFilter;
    type: 'build-entity';
}
interface BuildEntityTipTrigger extends CountBasedTipTrigger {
    build_by_dragging?: bool;
    build_in_line?: bool;
    /**
     * Building is considered consecutive when the built entity is the same as the last built entity.
     */
    consecutive?: bool;
    entity?: EntityID;
    linear_power_pole_line?: bool;
    match_type_only?: bool;
    quality?: QualityID;
    type: 'build-entity';
}
type BuildMode = 'normal' | 'forced' | 'superforced';
interface BulkInserterCapacityBonusModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'bulk-inserter-capacity-bonus';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface BurnerEnergySource extends BaseEnergySource {
    burner_usage?: BurnerUsageID;
    burnt_inventory_size?: ItemStackIndex;
    /**
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     */
    effectivity?: double;
    /**
     * The energy source can be used with fuel from these {@link fuel categories | prototype:FuelCategory}.
     */
    fuel_categories?: FuelCategoryID[];
    fuel_inventory_size: ItemStackIndex;
    light_flicker?: LightFlickeringDefinition;
    smoke?: SmokeSource[];
    type: 'burner';
}
/**
 * The name of a {@link BurnerUsagePrototype | prototype:BurnerUsagePrototype}.
 * @example ```
"fuel"
```
 * @example ```
"food"
```
 */
type BurnerUsageID = string;
interface ButtonStyleSpecificationBase extends StyleWithClickableGraphicalSetSpecification {
    clicked_font_color?: Color;
    clicked_vertical_offset?: uint32;
    default_font_color?: Color;
    disabled_font_color?: Color;
    draw_grayscale_picture?: bool;
    draw_shadow_under_picture?: bool;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    hovered_font_color?: Color;
    icon_horizontal_align?: HorizontalAlign;
    invert_colors_of_picture_when_disabled?: bool;
    invert_colors_of_picture_when_hovered_or_toggled?: bool;
    pie_progress_color?: Color;
    selected_clicked_font_color?: Color;
    selected_font_color?: Color;
    selected_hovered_font_color?: Color;
    strikethrough_color?: Color;
    type: string;
}
interface CameraEffectTriggerEffectItem extends TriggerEffectItem {
    delay?: uint8;
    duration: uint8;
    ease_in_duration?: uint8;
    ease_out_duration?: uint8;
    full_strength_max_distance?: uint16;
    max_distance?: uint16;
    strength?: float;
    type: 'camera-effect';
}
interface CameraStyleSpecification extends EmptyWidgetStyleSpecificationBase {
    type: 'camera_style';
}
/**
 * Loaded as one of the capsule actions, based on the value of the `type` key.
 */
type CapsuleAction = /**
 * Loaded when the `type` is `"throw"`.
 */
ThrowCapsuleAction | /**
 * Loaded when the `type` is `"equipment-remote"`.
 */
ActivateEquipmentCapsuleAction | /**
 * Loaded when the `type` is `"use-on-self"`.
 */
UseOnSelfCapsuleAction | /**
 * Loaded when the `type` is `"destroy-cliffs"`.
 */
DestroyCliffsCapsuleAction | /**
 * Loaded when the `type` is `"artillery-remote"`.
 */
ArtilleryRemoteCapsuleAction;
interface CaptureSpawnerTechnologyTrigger {
    entity?: EntityID;
    type: 'capture-spawner';
}
interface CargoBayConnectableGraphicsSet {
    animation?: Animation;
    animation_render_layer?: RenderLayer;
    connections?: CargoBayConnections;
    picture?: LayeredSprite;
}
/**
 * Walls should have an even number of variations because they are interleaved.
 */
interface CargoBayConnections {
    bottom_left_inner_corner?: LayeredSpriteVariations;
    bottom_left_outer_corner?: LayeredSpriteVariations;
    bottom_right_inner_corner?: LayeredSpriteVariations;
    bottom_right_outer_corner?: LayeredSpriteVariations;
    bottom_wall?: LayeredSpriteVariations;
    bridge_crossing?: LayeredSpriteVariations;
    bridge_horizontal_narrow?: LayeredSpriteVariations;
    bridge_horizontal_wide?: LayeredSpriteVariations;
    bridge_vertical_narrow?: LayeredSpriteVariations;
    bridge_vertical_wide?: LayeredSpriteVariations;
    left_wall?: LayeredSpriteVariations;
    right_wall?: LayeredSpriteVariations;
    top_left_inner_corner?: LayeredSpriteVariations;
    top_left_outer_corner?: LayeredSpriteVariations;
    top_right_inner_corner?: LayeredSpriteVariations;
    top_right_outer_corner?: LayeredSpriteVariations;
    top_wall?: LayeredSpriteVariations;
}
interface CargoHatchDefinition {
    busy_timeout_ticks?: uint32;
    cargo_unit_entity_to_spawn?: EntityID;
    /**
     * Cannot use `fade_ticks`.
     */
    closing_sound?: InterruptibleSound;
    /**
     * render layer for objects entering the hatch.
     */
    entering_render_layer?: RenderLayer;
    hatch_graphics?: Animation;
    hatch_opening_ticks?: uint32;
    /**
     * render layer for the hatch itself.
     */
    hatch_render_layer?: RenderLayer;
    /**
     * {@link ProcessionGraphic | prototype:ProcessionGraphic} index pointing to the {@link ProcessionGraphicCatalogue | prototype:ProcessionGraphicCatalogue} inside the current {@link SpaceLocationPrototype | prototype:SpaceLocationPrototype}.
     */
    illumination_graphic_index?: uint32;
    offset?: Vector;
    /**
     * Cannot use `fade_ticks`.
     */
    opening_sound?: InterruptibleSound;
    pod_shadow_offset?: Vector;
    receiving_cargo_units?: EntityID[];
    /**
     * y height relative to hatch position where the pod art gets clipped from sky to regular sorting layer.
     */
    sky_slice_height?: float;
    /**
     * y height relative to hatch position where the pod art gets cut off.
     */
    slice_height?: float;
    /**
     * y height relative to hatch position where the pod travels to during preparing and parking.
     */
    travel_height?: float;
}
interface CargoLandingPadLimitModifier extends SimpleModifier {
    type: 'cargo-landing-pad-count';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
/**
 * A cargo station is any entity that has the capacity to send cargo units. In Space Age those are {@link RocketSiloPrototype | prototype:RocketSiloPrototype}, {@link SpacePlatformHubPrototype | prototype:SpacePlatformHubPrototype} and {@link CargoLandingPadPrototype | prototype:CargoLandingPadPrototype}. {@link Cargo bays | prototype:CargoBayPrototype} may provide additional cargo hatches to cargo stations which are cargo bay connectable.
 */
interface CargoStationParameters {
    /**
     * Big additional hatch that goes over the actual hatches.
     */
    giga_hatch_definitions?: GigaCargoHatchDefinition[];
    hatch_definitions?: CargoHatchDefinition[];
    /**
     * Packed cargo units will wait for the full order to be completed. This is useful to save rockets in rocket silos when items trickle in slowly. The platform hub has immediate access to items so false is better to allow partial fulfillments.
     */
    prefer_packed_cargo_units?: bool;
}
interface ChainTriggerDelivery extends TriggerDeliveryItem {
    chain: ActiveTriggerID;
    type: 'chain';
}
interface ChangeRecipeProductivityModifier extends BaseModifier {
    change: EffectValue;
    recipe: RecipeID;
    type: 'change-recipe-productivity';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface ChangeSurfaceTipTrigger extends CountBasedTipTrigger {
    surface: string;
    type: 'change-surface';
}
/**
 * The data for one variation of {@link character animations | prototype:CharacterPrototype::animations}.
 */
interface CharacterArmorAnimation {
    /**
     * The names of the armors this animation data is used for. Don't define this if you want the animations to be used for the player without armor.
     */
    armors?: ItemID[];
    /**
     * Will be clamped to range [0, 1000]. When the character is flying, each {@link SmokeSource | prototype:SmokeSource} in `smoke_in_air` will generate `extra_smoke_cycles_per_tile` * {@link SmokeSource::frequency | prototype:SmokeSource::frequency} additional smokes per tile moved.
     */
    extra_smoke_cycles_per_tile?: float;
    /**
     * flipped_shadow_running_with_gun must be nil or contain exactly 18 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference. `flipped_shadow_running_with_gun` has to have same frame count as `running_with_gun`.
     */
    flipped_shadow_running_with_gun?: RotatedAnimation;
    flying?: RotatedAnimation;
    /**
     * Must contain exactly 18 or 40 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference.
     */
    flying_with_gun?: RotatedAnimation;
    idle?: RotatedAnimation;
    idle_in_air?: RotatedAnimation;
    idle_with_gun: RotatedAnimation;
    idle_with_gun_in_air?: RotatedAnimation;
    landing?: RotatedAnimation;
    mining_with_tool: RotatedAnimation;
    running?: RotatedAnimation;
    /**
     * Must contain exactly 18 or 40 directions, so all of the combination of gun direction and moving direction can be covered. Some of these variations are used in reverse to save space. You can use the character animation in the base game for reference.
     */
    running_with_gun: RotatedAnimation;
    /**
     * Will be clamped to range [0, 1000]. When the character is flying, each {@link SmokeSource | prototype:SmokeSource} in `smoke_in_air` will generate `smoke_cycles_per_tick` * {@link SmokeSource::frequency | prototype:SmokeSource::frequency} smokes per tick on average.
     */
    smoke_cycles_per_tick?: float;
    /**
     * Smoke generator for when in air.
     */
    smoke_in_air?: SmokeSource[];
    take_off?: RotatedAnimation;
}
interface CharacterBuildDistanceModifier extends SimpleModifier {
    type: 'character-build-distance';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterCraftingSpeedModifier extends SimpleModifier {
    type: 'character-crafting-speed';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterHealthBonusModifier extends SimpleModifier {
    type: 'character-health-bonus';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterInventorySlotsBonusModifier extends SimpleModifier {
    type: 'character-inventory-slots-bonus';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterItemDropDistanceModifier extends SimpleModifier {
    type: 'character-item-drop-distance';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterItemPickupDistanceModifier extends SimpleModifier {
    type: 'character-item-pickup-distance';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterLogisticRequestsModifier extends BoolModifier {
    type: 'character-logistic-requests';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterLogisticTrashSlotsModifier extends SimpleModifier {
    type: 'character-logistic-trash-slots';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterLootPickupDistanceModifier extends SimpleModifier {
    type: 'character-loot-pickup-distance';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterMiningSpeedModifier extends SimpleModifier {
    type: 'character-mining-speed';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterReachDistanceModifier extends SimpleModifier {
    type: 'character-reach-distance';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterResourceReachDistanceModifier extends SimpleModifier {
    type: 'character-resource-reach-distance';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CharacterRunningSpeedModifier extends SimpleModifier {
    type: 'character-running-speed';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface ChargableGraphics {
    charge_animation?: Animation;
    charge_animation_is_looped?: bool;
    charge_cooldown?: uint16;
    charge_light?: LightDefinition;
    discharge_animation?: Animation;
    discharge_cooldown?: uint16;
    discharge_light?: LightDefinition;
    picture?: Sprite;
}
interface ChartUtilityConstants {
    artillery_range_color: Color;
    blue_signal_color: Color;
    chart_construction_robot_color: Color;
    chart_deconstruct_tint: Color;
    chart_delivery_to_me_logistic_robot_color: Color;
    chart_logistic_robot_color: Color;
    chart_mobile_construction_robot_color: Color;
    chart_personal_construction_robot_color: Color;
    chart_player_circle_size: float;
    chart_train_stop_disabled_text_color: Color;
    chart_train_stop_full_text_color: Color;
    chart_train_stop_text_color: Color;
    circuit_network_member_color: Color;
    copper_wire_color: Color;
    custom_tag_max_scale?: float;
    custom_tag_scale?: float;
    custom_tag_selected_overlay_tint?: Color;
    /**
     * The strings are entity types.
     */
    default_color_by_type?: Record<string, Color>;
    default_enemy_color: Color;
    default_enemy_territory_color: Color;
    default_friendly_color: Color;
    /**
     * The strings are entity types.
     */
    default_friendly_color_by_type?: Record<string, Color>;
    disabled_switch_color: Color;
    electric_line_minimum_absolute_width: float;
    electric_line_width: float;
    electric_power_pole_color: Color;
    elevated_rail_color: Color;
    enabled_switch_color: Color;
    entity_ghost_color: Color;
    explosion_visualization_duration: uint32;
    green_signal_color: Color;
    green_wire_color: Color;
    rail_color: Color;
    rail_ramp_color: Color;
    red_signal_color: Color;
    red_wire_color: Color;
    resource_outline_selection_color: Color;
    tile_ghost_color: Color;
    train_current_path_outline_color: Color;
    train_path_color: Color;
    train_preview_path_outline_color: Color;
    turret_range_color: Color;
    vehicle_inner_color: Color;
    vehicle_outer_color: Color;
    vehicle_outer_color_selected: Color;
    vehicle_wagon_connection_color: Color;
    yellow_signal_color: Color;
    zoom_threshold_to_draw_spider_path: double;
}
interface CheckBoxStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    checkmark?: Sprite;
    disabled_checkmark?: Sprite;
    disabled_font_color?: Color;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    font_color?: Color;
    intermediate_mark?: Sprite;
    text_padding?: uint32;
    type: 'checkbox_style';
}
/**
 * Definition of a circuit connector.
 */
interface CircuitConnectorDefinition {
    /**
     * Defines how wires visually connect to this circuit connector.
     */
    points?: WireConnectionPoint;
    /**
     * The pictures displayed for circuit connector.
     */
    sprites?: CircuitConnectorSprites;
}
interface CircuitConnectorLayer {
    east?: RenderLayer;
    north?: RenderLayer;
    south?: RenderLayer;
    west?: RenderLayer;
}
interface CircuitConnectorSecondaryDrawOrder {
    east?: int8;
    north?: int8;
    south?: int8;
    west?: int8;
}
interface CircuitConnectorSprites {
    blue_led_light_offset?: Vector;
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     */
    connector_main?: Sprite;
    /**
     * Drawn when the entity is connected to a circuit network or a logistic network.
     */
    connector_shadow?: Sprite;
    led_blue: Sprite;
    led_blue_off?: Sprite;
    led_green: Sprite;
    led_light: LightDefinition;
    led_red: Sprite;
    red_green_led_light_offset?: Vector;
    /**
     * Drawn when the entity is connected to a circuit network.
     */
    wire_pins?: Sprite;
    /**
     * Drawn when the entity is connected to a circuit network.
     */
    wire_pins_shadow?: Sprite;
}
interface CircuitNetworkModifier extends BoolModifier {
    type: 'unlock-circuit-network';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CircularParticleCreationSpecification {
    center?: Vector;
    creation_distance?: double;
    creation_distance_orientation?: double;
    direction?: float;
    direction_deviation?: float;
    height?: float;
    height_deviation?: float;
    name: ParticleID;
    speed?: float;
    speed_deviation?: float;
    starting_frame_speed: float;
    starting_frame_speed_deviation?: float;
    use_source_position?: bool;
    vertical_speed?: float;
    vertical_speed_deviation?: float;
}
type CircularProjectileCreationSpecification = [
    RealOrientation,
    Vector
][];
interface ClearCursorTipTrigger extends CountBasedTipTrigger {
    type: 'clear-cursor';
}
interface CliffDeconstructionEnabledModifier extends BoolModifier {
    type: 'cliff-deconstruction-enabled';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CliffPlacementSettings {
    /**
     * Elevation at which the first row of cliffs is placed. Can not be set from the map generation GUI.
     */
    cliff_elevation_0?: float;
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     */
    cliff_elevation_interval?: float;
    /**
     * Smoothing makes cliffs straighter on rough elevation but makes placement inaccurate. 0 is no smoothing, 1 is full smoothing. Values outside of 0-1 are possible for specific effects but not recommended.
     */
    cliff_smoothing?: float;
    /**
     * Name of the {@link AutoplaceControl | prototype:AutoplaceControl}.
     */
    control?: AutoplaceControlID;
    /**
     * Name of the {@link CliffPrototype | prototype:CliffPrototype}.
     */
    name?: EntityID;
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     */
    richness?: float;
}
/**
 * Additional mask which dictates where in the world certain {@link ProcessionLayers | prototype:ProcessionLayer} are drawn. Origin determined by {@link EffectRelativeTo | prototype:EffectRelativeTo}.
 */
type CloudEffectStyle = /**
 * No mask.
 */
'none' | /**
 * Only show within a circular radius around origin.
 */
'euclidean' | /**
 * Only show within a square area around origin.
 */
'manhattan' | /**
 * Only show outside a circular radius around origin.
 */
'euclidean-outside' | /**
 * Only show outside a square area around origin.
 */
'manhattan-outside' | /**
 * Manhattan, but only along y axis. Useful when you want a layer to occlude screen regardless of width.
 */
'horizontal-stripe' | /**
 * Only show area covered by the 'effect_mask' texture.
 */
'texture' | /**
 * Show area covered by the 'effect_mask' texture and fill the rest of the screen.
 */
'texture-outside';
interface CloudsEffectProperties {
    additional_density_sample: CloudsTextureCoordinateTransformation;
    density?: float;
    density_at_night?: float;
    detail_exponent?: float;
    detail_factor?: float;
    detail_factor_at_night?: float;
    detail_noise_texture: EffectTexture;
    detail_sample_1: CloudsTextureCoordinateTransformation;
    detail_sample_2: CloudsTextureCoordinateTransformation;
    /**
     * When set to 0, detail textures are not being "morphed" to each other, but lerped with ratio 0.5 instead.
     */
    detail_sample_morph_duration?: uint32;
    movement_speed_multiplier?: float;
    opacity?: float;
    opacity_at_night?: float;
    scale?: float;
    shape_factor?: float;
    shape_noise_texture: EffectTexture;
    shape_warp_strength?: float;
    shape_warp_weight?: float;
    warp_sample_1: CloudsTextureCoordinateTransformation;
    warp_sample_2: CloudsTextureCoordinateTransformation;
    warped_shape_sample: CloudsTextureCoordinateTransformation;
}
interface CloudsTextureCoordinateTransformation {
    scale: float;
    wind_speed_factor?: float;
}
interface ClusterTriggerItem extends TriggerItem {
    /**
     * Must be at least `2`.
     */
    cluster_count: uint32;
    distance: float;
    distance_deviation?: float;
    type: 'cluster';
}
/**
 * The name of a {@link CollisionLayerPrototype | prototype:CollisionLayerPrototype}.
 * @example ```
"meltable"
```
 * @example ```
"floor"
```
 */
type CollisionLayerID = string;
/**
 * The base game provides common collision mask functions in a Lua file in the core {@link lualib | https://github.com/wube/factorio-data/blob/master/core/lualib/collision-mask-util.lua}.
 * @example ```
-- Most common collision mask of buildings:
collision_mask = {layers = {item = true, meltable = true, object = true, player = true, water_tile = true, is_object = true, is_lower_object = true}}
```
 */
interface CollisionMaskConnector {
    /**
     * Any prototype with this collision option will only be checked for collision with other prototype's collision masks if they are a tile.
     */
    colliding_with_tiles_only?: bool;
    /**
     * Uses the prototypes position rather than its collision box when doing collision checks with tile prototypes. Allows the prototype to overlap colliding tiles up until its center point. This is only respected for character movement and cars driven by players.
     */
    consider_tile_transitions?: bool;
    /**
     * Every key in the dictionary is the name of one {@link layer | prototype:CollisionLayerPrototype} the object collides with. The value is meaningless and always `true`. An empty table means that no layers are set.
     */
    layers: Record<CollisionLayerID, true>;
    /**
     * Any two entities that both have this option enabled on their prototype and have an identical collision mask layers list will not collide. Other collision mask options are not included in the identical layer list check. This does mean that two different prototypes with the same collision mask layers and this option enabled will not collide.
     */
    not_colliding_with_itself?: bool;
}
/**
 * Table of red, green, blue, and alpha float values between 0 and 1. Alternatively, values can be from 0-255, they are interpreted as such if at least one value is `> 1`.
 *
 * Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The array items are r, g, b and optionally a, in that order.
 *
 * The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
 * @example ```
color = {r=1, g=0, b=0, a=1} -- red, full opacity
color = {r=1} -- the same red, omitting default values
color = {1, 0, 0, 1} -- also the same red
color = {0, 0, 1} -- blue
color = {r=0, g=0.5, b=0, a=0.5} -- half transparency green
color = {} -- full opacity black
```
 */
type Color = {
    /**
     * alpha value (opacity)
     */
    a?: float;
    /**
     * blue value
     */
    b?: float;
    /**
     * green value
     */
    g?: float;
    /**
     * red value
     */
    r?: float;
} | [
    float,
    float,
    float
] | [
    float,
    float,
    float,
    float
];
interface ColorFilterData {
    localised_name: LocalisedString;
    /**
     * 4 arrays of 4-length float arrays, essentially a 4x4 matrix.
     */
    matrix: float[][];
    name: string;
}
interface ColorHintSpecification {
    text?: string;
    text_color?: Color;
}
/**
 * A lookup table (LUT) for the color which maps the original color to a position in the sprite where the replacement color is found. The file pointed to by the filename must be a sprite of size 256×16.
 * @example ```
"identity"
```
 * @example ```
"__core__/graphics/color_luts/frozen.png"
```
 */
type ColorLookupTable = FileName | 'identity';
interface ColumnAlignment {
    alignment: 'center' | 'left' | 'right' | 'top-left' | 'middle-left' | 'bottom-left' | 'top-center' | 'middle-center' | 'bottom-center' | 'top-right' | 'middle-right' | 'bottom-right';
    /**
     * Column index.
     */
    column: uint32;
}
interface ColumnWidth extends ColumnWidthItem {
    /**
     * Column index.
     */
    column: uint32;
}
interface ColumnWidthItem {
    maximal_width?: int32;
    minimal_width?: int32;
    /**
     * Sets `minimal_width` and `maximal_width` to the same value.
     */
    width?: int32;
}
/**
 * A string that specifies how the inputs should be compared.
 */
type ComparatorString = /**
 * "equal to"
 */
'=' | /**
 * "greater than"
 */
'>' | /**
 * "lesser than"
 */
'<' | /**
 * "greater than or equal to"
 */
'≥' | /**
 * "greater than or equal to"
 */
'>=' | /**
 * "lesser than or equal to"
 */
'≤' | /**
 * "lesser than or equal to"
 */
'<=' | /**
 * "not equal to"
 */
'≠' | /**
 * "not equal to"
 */
'!=';
/**
 * Graphics for the heat pipe.
 */
interface ConnectableEntityGraphics {
    corner_left_down: SpriteVariations;
    corner_left_up: SpriteVariations;
    corner_right_down: SpriteVariations;
    corner_right_up: SpriteVariations;
    cross: SpriteVariations;
    ending_down: SpriteVariations;
    ending_left: SpriteVariations;
    ending_right: SpriteVariations;
    ending_up: SpriteVariations;
    single: SpriteVariations;
    straight_horizontal: SpriteVariations;
    straight_vertical: SpriteVariations;
    t_down: SpriteVariations;
    t_left: SpriteVariations;
    t_right: SpriteVariations;
    t_up: SpriteVariations;
}
/**
 * Defines which other inputs a {@link CustomInputPrototype | prototype:CustomInputPrototype} consumes.
 * @example ```
consuming = "none"
```
 */
type ConsumingType = /**
 * The associated script event will fire when satisfied and pass through to normal game events.
 */
'none' | /**
 * The associated script event will fire when satisfied and block game events that conflict with the key sequence. Actions that are processed regardless of game paused state cannot be blocked.
 */
'game-only';
type ControlPoint = {
    control: float;
    /**
     * Has to be in range (0.0, 100.0).
     */
    volume_percentage: float;
} | [
    float,
    float
];
interface CountBasedTipTrigger {
    count?: uint32;
}
/**
 * Clips the CoverGraphicProcessionLayer.
 */
interface CoverGraphicEffectData {
    /**
     * How much the pod's distance traveled moves the effect
     */
    distance_traveled_strength?: Vector;
    /**
     * How much the pod's position moves the effect
     */
    pod_movement_strength?: Vector;
    /**
     * Where the effect mask is centered.
     */
    relative_to?: EffectRelativeTo;
    style?: CloudEffectStyle;
}
/**
 * Draws a layer of cloud texture covering the screen. It can fade in an out based on opacity and using the picture mask as gradient of areas which fade in soon or later.
 *
 * There are two important concepts to understand:
 *
 * - `mask` refers to something like a depth texture. It is applied across the whole screen and determines how the entire graphic fades in and out.
 *
 * - `effect` in this context refers to clipping out portion of the cover graphic. It can use an effect_graphic. `is_cloud_effect_advanced` makes the `effect` modify opacity threshold of the `mask` rather than multiplying alpha.
 *
 * Additionally an area can be masked out by range or effect mask.
 */
interface CoverGraphicProcessionLayer {
    /**
     * Clips the graphic.
     */
    alt_effect?: CoverGraphicEffectData;
    /**
     * How much the pod's distance traveled moves the cloud coordinates
     */
    distance_traveled_strength?: Vector;
    /**
     * Clips the graphic.
     */
    effect?: CoverGraphicEffectData;
    /**
     * Used by certain effects.
     */
    effect_graphic?: ProcessionGraphic;
    /**
     * Default values if unspecified:
     *
     * - opacity : 1.0
     *
     * - rotation : 0.0
     *
     * - effect_scale_min : 0.0
     *
     * - effect_scale_max : 1.0
     *
     * - effect_shift : {0, 0}
     *
     * - alt_effect_scale_min : 0.0
     *
     * - alt_effect_scale_max : 1.0
     *
     * - alt_effect_shift : {0, 0}
     *
     * - offset : {0, 0}
     */
    frames: CoverGraphicProcessionLayerBezierControlPoint[];
    /**
     * Main texture of the layer.
     */
    graphic?: ProcessionGraphic;
    /**
     * Adds the final position value from given layer to this one.
     */
    inherit_from?: ProcessionLayerInheritanceGroupID;
    /**
     * Advanced cloud effect mask modifies the regular mask thresholds instead of being a flat multiplication of the resulting opacity.
     */
    is_cloud_effect_advanced?: bool;
    /**
     * The texture and mask are interpreted as four smaller textures that are randomly tiled.
     */
    is_quad_texture?: bool;
    /**
     * Opacity gradient of the layer.
     */
    mask_graphic?: ProcessionGraphic;
    /**
     * How much the pod's position moves the cloud coordinates
     */
    pod_movement_strength?: Vector;
    /**
     * The group this layer belongs to, for inheritance.
     */
    reference_group?: ProcessionLayerInheritanceGroupID;
    render_layer?: RenderLayer;
    /**
     * Add rotation of the pod to the cloud rotation.
     */
    rotate_with_pod?: bool;
    secondary_draw_order?: int8;
    /**
     * Where the tiled texture is centered and rotated.
     */
    texture_relative_to?: EffectRelativeTo;
    type: 'cover-graphic';
    /**
     * Size the textures are scaled to in the world.
     */
    world_size?: Vector;
}
/**
 * One frame in time for a Bezier interpolation.
 */
interface CoverGraphicProcessionLayerBezierControlPoint {
    /**
     * `alt_effect_scale_max` and `alt_effect_scale_max_t` interpolate a double smoothly over time.
     */
    alt_effect_scale_max?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    alt_effect_scale_max_t?: double;
    /**
     * `alt_effect_scale_min` and `alt_effect_scale_min_t` interpolate a double smoothly over time.
     */
    alt_effect_scale_min?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    alt_effect_scale_min_t?: double;
    /**
     * `alt_effect_shift` and `alt_effect_shift_t` interpolate a vector smoothly over time using `alt_effect_shift_rate` and `alt_effect_shift_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     */
    alt_effect_shift?: Vector;
    /**
     * Rate 0-1 value.
     */
    alt_effect_shift_rate?: double;
    /**
     * Rate tangent.
     */
    alt_effect_shift_rate_t?: double;
    /**
     * Vector tangent.
     */
    alt_effect_shift_t?: Vector;
    /**
     * `effect_scale_max` and `effect_scale_max_t` interpolate a double smoothly over time.
     */
    effect_scale_max?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    effect_scale_max_t?: double;
    /**
     * `effect_scale_min` and `effect_scale_min_t` interpolate a double smoothly over time.
     */
    effect_scale_min?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    effect_scale_min_t?: double;
    /**
     * `effect_shift` and `effect_shift_t` interpolate a vector smoothly over time using `effect_shift_rate` and `effect_shift_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     */
    effect_shift?: Vector;
    /**
     * Rate 0-1 value.
     */
    effect_shift_rate?: double;
    /**
     * Rate tangent.
     */
    effect_shift_rate_t?: double;
    /**
     * Vector tangent.
     */
    effect_shift_t?: Vector;
    /**
     * `offset` and `offset_t` interpolate a vector smoothly over time using `offset_rate` and `offset_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     */
    offset?: Vector;
    /**
     * Rate 0-1 value.
     */
    offset_rate?: double;
    /**
     * Rate tangent.
     */
    offset_rate_t?: double;
    /**
     * Vector tangent.
     */
    offset_t?: Vector;
    /**
     * `opacity` and `opacity_t` interpolate a double smoothly over time.
     */
    opacity?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    opacity_t?: double;
    /**
     * `rotation` and `rotation_t` interpolate a double smoothly over time.
     */
    rotation?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    rotation_t?: double;
    /**
     * Mandatory if `opacity` or `rotation` or `effect_scale_min` or `effect_scale_max` is defined.
     */
    timestamp?: MapTick;
}
interface CraftFluidTechnologyTrigger {
    amount?: double;
    fluid: FluidID;
    type: 'craft-fluid';
}
interface CraftItemTechnologyTrigger {
    count?: ItemCountType;
    item: ItemID;
    item_quality?: QualityID;
    type: 'craft-item';
}
interface CraftItemTipTrigger extends CountBasedTipTrigger {
    /**
     * Can only be used when `event_type` is `"crafting-finished"`.
     */
    consecutive?: bool;
    event_type: 'crafting-of-single-item-ordered' | 'crafting-of-multiple-items-ordered' | 'crafting-finished';
    item?: ItemID;
    type: 'craft-item';
}
interface CraftingMachineGraphicsSet extends WorkingVisualisations {
    animation_progress?: float;
    /**
     * Render layer(s) for all directions of the circuit connectors.
     */
    circuit_connector_layer?: RenderLayer | CircuitConnectorLayer;
    /**
     * Secondary draw order(s) for all directions of the circuit connectors.
     */
    circuit_connector_secondary_draw_order?: int8 | CircuitConnectorSecondaryDrawOrder;
    frozen_patch?: Sprite4Way;
    reset_animation_when_frozen?: bool;
}
interface CranePart {
    allow_sprite_rotation?: bool;
    dying_effect?: CranePartDyingEffect;
    extendable_length?: Vector3D;
    extendable_length_grappler?: Vector3D;
    is_contractible_by_cropping?: bool;
    layer?: int8;
    name?: string;
    /**
     * Angle in radian, which is internally converted to a {@link RealOrientation | prototype:RealOrientation}.
     */
    orientation_shift?: float;
    relative_position?: Vector3D;
    relative_position_grappler?: Vector3D;
    /**
     * Only loaded if `sprite` is not defined.
     */
    rotated_sprite?: RotatedSprite;
    /**
     * Only loaded if `sprite_reflection` is not defined.
     */
    rotated_sprite_reflection?: RotatedSprite;
    /**
     * Only loaded if `sprite_shadow` is not defined.
     */
    rotated_sprite_shadow?: RotatedSprite;
    scale_to_fit_model?: bool;
    should_scale_for_perspective?: bool;
    snap_end?: float;
    snap_end_arm_extent_multiplier?: float;
    snap_start?: float;
    sprite?: Sprite;
    sprite_reflection?: Sprite;
    sprite_shadow?: Sprite;
    static_length?: Vector3D;
    static_length_grappler?: Vector3D;
}
interface CranePartDyingEffect {
    explosion?: ExplosionDefinition;
    explosion_linear_distance_step?: float;
    particle_effect_linear_distance_step?: float;
    particle_effects?: CreateParticleTriggerEffectItem[];
}
interface CraterPlacementDefinition {
    minimum_segments_to_place?: uint32;
    segment_probability?: float;
    segments: CraterSegment[];
}
interface CraterSegment {
    offset: Vector;
    orientation: float;
}
interface CreateAsteroidChunkEffectItem extends TriggerEffectItem {
    asteroid_name: AsteroidChunkID;
    offset_deviation?: BoundingBox;
    offsets?: Vector[];
    type: 'create-asteroid-chunk';
}
interface CreateDecorativesTriggerEffectItem extends TriggerEffectItem {
    apply_projection?: bool;
    decorative: DecorativeID;
    radius_curve?: float;
    spawn_max: uint16;
    /**
     * Must be less than 24.
     */
    spawn_max_radius: float;
    spawn_min?: uint16;
    spawn_min_radius: float;
    spread_evenly?: bool;
    type: 'create-decorative';
}
interface CreateEntityTriggerEffectItemBase extends TriggerEffectItem {
    /**
     * If true, creates the entity as a member of the enemy force. If the surface.no_enemies_mode is true, the entity will not be created.
     */
    as_enemy?: bool;
    check_buildability?: bool;
    /**
     * The name of the entity that should be created.
     */
    entity_name: EntityID;
    find_non_colliding_position?: bool;
    /**
     * If true and `as_enemy` is true, allows the entity to be created even if the current surface.no_enemies_mode is true.
     */
    ignore_no_enemies_mode?: bool;
    /**
     * Only loaded if `find_non_colliding_position` is defined.
     */
    non_colliding_fail_result?: Trigger;
    non_colliding_search_precision?: double;
    non_colliding_search_radius?: double;
    offset_deviation?: BoundingBox;
    /**
     * If multiple offsets are specified, multiple entities are created. The projectile of the {@link Distractor capsule | https://wiki.factorio.com/Distractor_capsule} uses this property to spawn three Distractors.
     */
    offsets?: Vector[];
    /**
     * The result entity will be protected from automated attacks of enemies.
     */
    protected?: bool;
    show_in_tooltip?: bool;
    /**
     * Entity creation will not occur if any tile matches the collision condition. Defaults to no collisions.
     */
    tile_collision_mask?: CollisionMaskConnector;
    /**
     * If `true`, the {@link on_trigger_created_entity | runtime:on_trigger_created_entity} event will be raised.
     */
    trigger_created_entity?: bool;
    type: string;
}
interface CreateExplosionTriggerEffectItem extends CreateEntityTriggerEffectItemBase {
    cycle_while_moving?: bool;
    inherit_movement_distance_from_projectile?: bool;
    max_movement_distance?: float;
    max_movement_distance_deviation?: float;
    type: 'create-explosion';
}
interface CreateFireTriggerEffectItem extends CreateEntityTriggerEffectItemBase {
    initial_ground_flame_count?: uint8;
    type: 'create-fire';
}
interface CreateGhostOnEntityDeathModifier extends BoolModifier {
    type: 'create-ghost-on-entity-death';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface CreateParticleTriggerEffectItemBase extends TriggerEffectItem {
    apply_tile_tint?: 'primary' | 'secondary';
    frame_speed?: float;
    frame_speed_deviation?: float;
    initial_height: float;
    initial_height_deviation?: float;
    initial_vertical_speed?: float;
    initial_vertical_speed_deviation?: float;
    movement_multiplier?: float;
    offset_deviation?: SimpleBoundingBox;
    offsets?: Vector[];
    /**
     * Create particles only when they are in 200 tiles range of any connected player.
     */
    only_when_visible?: bool;
    particle_name: ParticleID;
    rotate_offsets?: bool;
    show_in_tooltip?: bool;
    speed_from_center?: float;
    speed_from_center_deviation?: float;
    /**
     * Silently capped to a maximum of 100.
     */
    tail_length?: uint8;
    /**
     * Silently capped to a maximum of 100.
     */
    tail_length_deviation?: uint8;
    tail_width?: float;
    tile_collision_mask?: CollisionMaskConnector;
    /**
     * Only loaded if `apply_tile_tint` is not defined.
     */
    tint?: Color;
    type: string;
}
interface CreateSmokeTriggerEffectItem extends CreateEntityTriggerEffectItemBase {
    initial_height?: float;
    speed?: Vector;
    speed_from_center?: float;
    speed_from_center_deviation?: float;
    speed_multiplier?: float;
    speed_multiplier_deviation?: float;
    starting_frame?: float;
    starting_frame_deviation?: float;
    type: 'create-smoke';
}
interface CreateSpacePlatformTechnologyTrigger {
    type: 'create-space-platform';
}
interface CreateStickerTriggerEffectItem extends TriggerEffectItem {
    show_in_tooltip?: bool;
    /**
     * Name of a {@link StickerPrototype | prototype:StickerPrototype} that should be created.
     */
    sticker: EntityID;
    /**
     * If `true`, {@link on_trigger_created_entity | runtime:on_trigger_created_entity} will be triggered when the sticker is created.
     */
    trigger_created_entity?: bool;
    type: 'create-sticker';
}
interface CreateTrivialSmokeEffectItem extends TriggerEffectItem {
    initial_height?: float;
    max_radius?: float;
    offset_deviation?: BoundingBox;
    offsets?: Vector[];
    smoke_name: TrivialSmokeID;
    speed?: Vector;
    speed_from_center?: float;
    speed_from_center_deviation?: float;
    speed_multiplier?: float;
    speed_multiplier_deviation?: float;
    starting_frame?: float;
    starting_frame_deviation?: float;
    type: 'create-trivial-smoke';
}
interface CursorBoxSpecification {
    blueprint_snap_rectangle: BoxSpecification[];
    copy: BoxSpecification[];
    electricity: BoxSpecification[];
    logistics: BoxSpecification[];
    multiplayer_selection: BoxSpecification[];
    not_allowed: BoxSpecification[];
    pair: BoxSpecification[];
    regular: BoxSpecification[];
    rts_selected: BoxSpecification[];
    rts_to_be_selected: BoxSpecification[];
    train_visualization: BoxSpecification[];
}
/**
 * One of the following values:
 */
type CursorBoxType = /**
 * The normal entity selection box. Yellow by default.
 */
'entity' | /**
 * The multiplayer entity selection box which gets tinted using {@link LuaPlayer::chat_color | runtime:LuaPlayer::chat_color}. White by default.
 */
'multiplayer-entity' | /**
 * The selection box used to specify electric poles an entity is connected to. Light blue by default.
 */
'electricity' | /**
 * The selection box used when doing entity copy-paste. Green by default.
 */
'copy' | /**
 * The selection box used when specifying colliding entities. Red by default.
 */
'not-allowed' | /**
 * Light blue by default.
 */
'pair' | /**
 * Light blue by default.
 */
'logistics' | /**
 * White by default.
 */
'train-visualization' | /**
 * Green by default.
 */
'blueprint-snap-rectangle' | 'spidertron-remote-selected' | 'spidertron-remote-to-be-selected';
/**
 * Used by {@link BaseAttackParameters | prototype:BaseAttackParameters} to play a sound during the attack.
 */
interface CyclicSound {
    /**
     * Played once at the beginning of the overall cyclic sound.
     */
    begin_sound?: Sound;
    /**
     * Played once when the overall cyclic sound is requested to end.
     */
    end_sound?: Sound;
    /**
     * Played repeatedly after the begin_sound was played.
     */
    middle_sound?: Sound;
}
/**
 * Used to specify what type of damage and how much damage something deals.
 */
interface DamageParameters {
    amount: float;
    /**
     * The type of damage. See {@link here | https://wiki.factorio.com/Data.raw#damage-type} for a list of built-in types, and {@link DamageType | prototype:DamageType} for creating custom types.
     */
    type: DamageTypeID;
}
interface DamageTriggerEffectItem extends TriggerEffectItem {
    apply_damage_to_trees?: bool;
    damage: DamageParameters;
    lower_damage_modifier?: float;
    lower_distance_threshold?: uint16;
    type: 'damage';
    upper_damage_modifier?: float;
    upper_distance_threshold?: uint16;
    use_substitute?: bool;
    /**
     * If `true`, no corpse for killed entities will be created.
     */
    vaporize?: bool;
}
/**
 * @example ```
damage_type_filters = "fire"
```
 * @example ```
damage_type_filters = { "fire" } -- more damage types could be specified here
```
 * @example ```
damage_type_filters =
{
  whitelist = false, -- optional
  types = "fire"
}
```
 * @example ```
damage_type_filters =
{
  whitelist = false, -- optional
  types = { "fire" } -- more damage types could be specified here
}
```
 */
type DamageTypeFilters = {
    /**
     * The damage types to filter for.
     */
    types: DamageTypeID | DamageTypeID[];
    /**
     * Whether this is a whitelist or a blacklist of damage types. Defaults to being a blacklist.
     */
    whitelist?: bool;
} | DamageTypeID | DamageTypeID[];
/**
 * The name of a {@link DamageType | prototype:DamageType}.
 * @example ```
"impact"
```
 * @example ```
"poison"
```
 */
type DamageTypeID = string;
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
     * @example ```
    local not_coal =
    {
      type = "item",
      name = "a-thing",
      icon = "__base__/graphics/icons/coal.png",
      icon_size = 64,
      stack_size = 2
    }
    local proto2 =
    {
      type = "fuel-category",
      name = "best-fuel"
    }
    data:extend({not_coal, proto2})
    ```
     */
    extend: DataExtendMethod;
    /**
     * Set by the game based on whether the demo or retail version is running. Should not be used by mods.
     */
    is_demo: bool;
    /**
     * A dictionary of prototype types to values that themselves are dictionaries of prototype names to specific prototypes.
     *
     * This means that individual prototypes can be accessed with `local prototype = data.raw["prototype-type"]["internal-name"]`.
     * @example ```
    -- set the stack size of coal to be 1000
    data.raw["item"]["coal"].stack_size = 1000
    ```
     * @example ```
    -- get the max health of the wooden chest
    local health = data.raw["container"]["wooden-chest"].max_health
    ```
     */
    raw: Record<string, Record<string, AnyPrototype>>;
}
/**
 * The first member of the tuple states at which time of the day the LUT should be used. If the current game time is between two values defined in the color lookup that have different LUTs, the color is interpolated to create a smooth transition. (Sharp transition can be achieved by having the two values differing only by a small fraction.)
 *
 * If there is only one tuple, it means that the LUT will be used all the time, regardless of the value of the first member of the tuple.
 *
 * The second member of the tuple is a lookup table (LUT) for the color which maps the original color to a position in the sprite where the replacement color is found.
 * @example ```
color_lookup = {{1, "identity"}}
```
 * @example ```
color_lookup = {{0.5, "__core__/graphics/color_luts/nightvision.png"}}
```
 * @example ```
zoom_to_world_daytime_color_lookup =
{
  {0.25, "identity"},
  {0.45, "__core__/graphics/color_luts/night.png"},
  {0.55, "__core__/graphics/color_luts/night.png"},
  {0.75, "identity"},
}
```
 */
type DaytimeColorLookupTable = [
    double,
    ColorLookupTable
][];
interface DeconstructionTimeToLiveModifier extends SimpleModifier {
    type: 'deconstruction-time-to-live';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
/**
 * The name of a {@link DecorativePrototype | prototype:DecorativePrototype}.
 * @example ```
"dark-mud-decal"
```
 * @example ```
"red-pita"
```
 */
type DecorativeID = string;
interface DelayedTriggerDelivery extends TriggerDeliveryItem {
    delayed_trigger: ActiveTriggerID;
    type: 'delayed';
}
/**
 * This trigger is considered fulfilled when the {@link TipsAndTricksItem::dependencies | prototype:TipsAndTricksItem::dependencies} are fulfilled.
 */
interface DependenciesMetTipTrigger {
    type: 'dependencies-met';
}
interface DestroyCliffsCapsuleAction {
    attack_parameters: AttackParameters;
    play_sound_on_failure?: bool;
    radius: float;
    timeout?: uint32;
    type: 'destroy-cliffs';
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool;
}
interface DestroyCliffsTriggerEffectItem extends TriggerEffectItem {
    /**
     * Entity created at cliff location when a cliff is destroyed.
     */
    explosion_at_cliff?: EntityID;
    /**
     * Entity created at trigger location every time trigger executes.
     */
    explosion_at_trigger?: EntityID;
    radius: float;
    type: 'destroy-cliffs';
}
interface DestroyDecorativesTriggerEffectItem extends TriggerEffectItem {
    /**
     * If `true`, only decoratives with a {@link DecorativePrototype::trigger_effect | prototype:DecorativePrototype::trigger_effect} will be destroyed.
     */
    decoratives_with_trigger_only?: bool;
    from_render_layer?: RenderLayer;
    include_decals?: bool;
    /**
     * Soft decoratives are those where {@link DecorativePrototype::grows_through_rail_path | prototype:DecorativePrototype::grows_through_rail_path} is `true`.
     */
    include_soft_decoratives?: bool;
    invoke_decorative_trigger?: bool;
    radius: float;
    to_render_layer?: RenderLayer;
    type: 'destroy-decoratives';
}
interface DifficultySettings {
    /**
     * Must be >= 0.01 and <= 100.
     */
    spoil_time_modifier?: double;
    /**
     * Must be >= 0.001 and <= 1000.
     */
    technology_price_multiplier?: double;
}
interface DirectTriggerItem extends TriggerItem {
    filter_enabled?: bool;
    type: 'direct';
}
/**
 * Usually specified by using {@link defines.direction | runtime:defines.direction}.
 */
type Direction = /**
 * North
 */
0 | /**
 * NorthNorthEast
 */
1 | /**
 * NorthEast
 */
2 | /**
 * EastNorthEast
 */
3 | /**
 * East
 */
4 | /**
 * EastSouthEast
 */
5 | /**
 * SouthEast
 */
6 | /**
 * SouthSouthEast
 */
7 | /**
 * South
 */
8 | /**
 * SouthSouthWest
 */
9 | /**
 * SouthWest
 */
10 | /**
 * WestSouthWest
 */
11 | /**
 * West
 */
12 | /**
 * WestNorthWest
 */
13 | /**
 * NorthWest
 */
14 | /**
 * NorthNorthWest
 */
15;
interface DirectionShift {
    east?: Vector;
    north?: Vector;
    south?: Vector;
    west?: Vector;
}
/**
 * One of the 16 directions, specified with a string.
 */
type DirectionString = 'north' | 'north_north_east' | 'north_east' | 'east_north_east' | 'east' | 'east_south_east' | 'south_east' | 'south_south_east' | 'south' | 'south_south_west' | 'south_west' | 'west_south_west' | 'west' | 'west_north_west' | 'north_west' | 'north_north_west';
interface DoubleSliderStyleSpecification extends SliderStyleSpecificationBase {
    type: 'double_slider_style';
}
interface DropDownStyleSpecification extends BaseStyleSpecification {
    button_style?: ButtonStyleSpecification;
    icon?: Sprite;
    list_box_style?: ListBoxStyleSpecification;
    opened_sound?: Sound;
    selector_and_title_spacing?: int16;
    type: 'dropdown_style';
}
interface DropItemTipTrigger extends CountBasedTipTrigger {
    drop_into_entity?: bool;
    type: 'drop-item';
}
/**
 * When applied to {@link modules | prototype:ModulePrototype}, the resulting effect is a sum of all module effects, multiplied through calculations: `(1 + sum module effects)` or, for productivity `(0 + sum)`.
 * @example ```
effect =
{
  productivity = 0.04,
  consumption = 0.4,
  pollution = 0.05,
  speed = -0.05
}
```
 */
interface Effect {
    /**
     * Multiplier to energy used during operation (not idle/drain use). The minimum possible sum is -80%.
     */
    consumption?: EffectValue;
    /**
     * Multiplier to the pollution factor of an entity's pollution during use. The minimum possible sum is -80%.
     */
    pollution?: EffectValue;
    /**
     * Multiplied against work completed, adds to the bonus results of operating. E.g. an extra crafted recipe or immediate research bonus. The minimum possible sum is 0%.
     */
    productivity?: EffectValue;
    quality?: EffectValue;
    /**
     * Modifier to crafting speed, research speed, etc. The minimum possible sum is -80%.
     */
    speed?: EffectValue;
}
interface EffectReceiver {
    base_effect?: Effect;
    uses_beacon_effects?: bool;
    uses_module_effects?: bool;
    uses_surface_effects?: bool;
}
/**
 * Identifies what {@link CloudEffectStyle | prototype:CloudEffectStyle} refers to.
 */
type EffectRelativeTo = /**
 * Refers to the ground position the pod entity is relative to.
 */
'ground-origin' | /**
 * Refers to the current position of pod playing the transition.
 */
'pod' | /**
 * Refers to the position where this transition started on tick 0. Useful as a blank slate to apply inherited offsets via {@link ProcessionLayerInheritanceGroup | prototype:ProcessionLayerInheritanceGroup}.
 */
'spawn-origin';
interface EffectTexture extends SpriteSource {
}
/**
 * A list of {@link module | prototype:ModulePrototype} effects, or just a single effect. Modules with other effects cannot be used on the machine. This means that both effects from modules and from surrounding beacons are restricted to the listed effects. If `allowed_effects` is an empty array, the machine cannot be affected by modules or beacons.
 * @example ```
-- Allow all module types
allowed_effects = {"speed", "productivity", "consumption", "pollution", "quality"}
```
 * @example ```
-- Allow only modules that affect speed
allowed_effects = "speed"
```
 */
type EffectTypeLimitation = (/**
 * Modules that increase or decrease the machine's speed.
 */
'speed' | /**
 * Modules that make the machine produce bonus items.
 */
'productivity' | /**
 * Modules that increase or decrease the machine's energy consumption.
 */
'consumption' | /**
 * Modules that make the machine produce more or less pollution.
 */
'pollution' | 'quality') | (/**
 * Modules that increase or decrease the machine's speed.
 */
'speed' | /**
 * Modules that make the machine produce bonus items.
 */
'productivity' | /**
 * Modules that increase or decrease the machine's energy consumption.
 */
'consumption' | /**
 * Modules that make the machine produce more or less pollution.
 */
'pollution' | 'quality')[];
/**
 * Precision is ignored beyond two decimals - `0.567` results in `0.56` and means 56% etc. Values can range from `-327.68` to `327.67`. Numbers outside of this range will wrap around.
 * @example ```
0.07 -- 7% bonus
```
 */
type EffectValue = float;
type EffectVariation = /**
 * Valid only when {@link expansion_shaders | prototype:FeatureFlags::expansion_shaders} feature flag is enabled.
 */
'lava' | /**
 * Valid only when {@link expansion_shaders | prototype:FeatureFlags::expansion_shaders} feature flag is enabled.
 */
'wetland-water' | /**
 * Valid only when {@link expansion_shaders | prototype:FeatureFlags::expansion_shaders} feature flag is enabled.
 */
'oil' | 'water';
/**
 * @example ```
energy_source = -- energy source of oil pumpjack
{
  type = "electric",
  emissions_per_minute = { pollution = 10 },
  usage_priority = "secondary-input"
}
```
 * @example ```
energy_source = -- energy source of accumulator
{
  type = "electric",
  buffer_capacity = "5MJ",
  usage_priority = "tertiary",
  input_flow_limit = "300kW",
  output_flow_limit = "300kW"
}
```
 * @example ```
energy_source = -- energy source of steam engine
{
  type = "electric",
  usage_priority = "secondary-output"
}
```
 */
interface ElectricEnergySource extends BaseEnergySource {
    /**
     * How much energy this entity can hold.
     * @example ```
    buffer_capacity = "5MJ"
    ```
     */
    buffer_capacity?: Energy;
    /**
     * How much energy (per second) will be continuously removed from the energy buffer. In-game, this is shown in the tooltip as "Min. [Minimum] Consumption". Applied as a constant consumption-per-tick, even when the entity has the property {@link active | runtime:LuaEntity::active} set to `false`.
     * @example ```
    drain = "1kW"
    ```
     */
    drain?: Energy;
    /**
     * The rate at which energy can be taken, from the network, to refill the energy buffer. `0` means no transfer.
     * @example ```
    input_flow_limit = "300kW"
    ```
     */
    input_flow_limit?: Energy;
    /**
     * The rate at which energy can be provided, to the network, from the energy buffer. `0` means no transfer.
     * @example ```
    output_flow_limit = "300kW"
    ```
     */
    output_flow_limit?: Energy;
    type: 'electric';
    /**
     * @example ```
    usage_priority = "secondary-input"
    ```
     */
    usage_priority: ElectricUsagePriority;
}
/**
 * Used to specify priority of energy usage in the {@link electric system | https://wiki.factorio.com/Electric_system}.
 * @example ```
usage_priority = "primary-input"
```
 */
type ElectricUsagePriority = /**
 * Used for the most important machines, for example laser turrets.
 */
'primary-input' | 'primary-output' | /**
 * Used for all other machines.
 */
'secondary-input' | /**
 * Used in steam generators.
 */
'secondary-output' | /**
 * As input/output used for accumulators, to collect the overproduction or provide energy when neither primary/secondary output can't.
 */
'tertiary' | /**
 * Can only be used by {@link SolarPanelPrototype | prototype:SolarPanelPrototype}, will be ignored otherwise.
 */
'solar' | /**
 * Can only be used by {@link LampPrototype | prototype:LampPrototype}, will be ignored otherwise.
 */
'lamp';
/**
 * If this is loaded as a single ElementImageSetLayer, it gets used as `base`.
 */
type ElementImageSet = {
    base?: ElementImageSetLayer;
    glow?: ElementImageSetLayer;
    shadow?: ElementImageSetLayer;
} | ElementImageSetLayer;
/**
 * If this is loaded as a Sprite, it gets used as `center`.
 */
type ElementImageSetLayer = {
    background_blur?: bool;
    background_blur_sigma?: float;
    /**
     * Sets `top_border`, `right_border`, `bottom_border` and `left_border`.
     *
     * Only loaded if `corner_size` is not defined. Only loaded if `type` is `"composition"`.
     */
    border?: int32;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    bottom?: Sprite;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    bottom_border?: int32;
    bottom_outer_border_shift?: int32;
    bottom_tiling?: bool;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    bottom_width?: SpriteSizeType;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    center?: Sprite;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    center_height?: SpriteSizeType;
    center_tiling_horizontal?: bool;
    center_tiling_vertical?: bool;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    center_width?: SpriteSizeType;
    /**
     * If this is a tuple, the first member of the tuple is width and the second is height. Otherwise the size is both width and height.
     *
     * Only loaded if `type` is `"composition"`.
     * @example ```
    {
      -- How an ElementImageSet is loaded which has only one layer, which uses the corner_size shown in the diagram
      base = {position = {0, 17}, corner_size = 8}
    }
    ```
     */
    corner_size?: uint16 | [
        uint16,
        uint16
    ];
    custom_horizontal_tiling_sizes?: uint32[];
    /**
     * Defines whether the border should be drawn inside the widget, which affects the padding and content size of the widget, or outside of the widget which doesn't affect size. The outer draw type is most commonly used for shadows, glows and insets.
     */
    draw_type?: 'inner' | 'outer';
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    filename?: FileName;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left?: Sprite;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left_border?: int32;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left_bottom?: Sprite;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    left_height?: SpriteSizeType;
    left_outer_border_shift?: int32;
    /**
     * Tiling is used to make a side (not corner) texture repeat instead of being stretched.
     */
    left_tiling?: bool;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    left_top?: Sprite;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    load_in_minimal_mode?: bool;
    opacity?: double;
    overall_tiling_horizontal_padding?: uint16;
    /**
     * Overall tiling is used to make the overall texture repeat instead of being stretched.
     */
    overall_tiling_horizontal_size?: uint16;
    overall_tiling_horizontal_spacing?: uint16;
    overall_tiling_vertical_padding?: uint16;
    overall_tiling_vertical_size?: uint16;
    overall_tiling_vertical_spacing?: uint16;
    /**
     * Mandatory if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    position?: MapPosition;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right?: Sprite;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right_border?: int32;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right_bottom?: Sprite;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    right_height?: SpriteSizeType;
    right_outer_border_shift?: int32;
    right_tiling?: bool;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    right_top?: Sprite;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    scale?: double;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    stretch_monolith_image_to_size?: bool;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    tint?: Color;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    top?: Sprite;
    /**
     * Only loaded if `type` is `"composition"`.
     */
    top_border?: int32;
    top_outer_border_shift?: int32;
    top_tiling?: bool;
    /**
     * Only loaded if `corner_size` is defined. Only loaded if `type` is `"composition"`.
     */
    top_width?: SpriteSizeType;
    type?: 'none' | 'composition';
} | Sprite;
interface EmptyWidgetStyleSpecificationBase extends BaseStyleSpecification {
    graphical_set?: ElementImageSet;
    type: string;
}
interface EnemyEvolutionSettings {
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     */
    destroy_factor: double;
    enabled: bool;
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     */
    pollution_factor: double;
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     */
    time_factor: double;
}
interface EnemyExpansionSettings {
    building_coefficient: double;
    enabled: bool;
    enemy_building_influence_radius: uint32;
    friendly_base_influence_radius: uint32;
    /**
     * A chunk has to have at most this much percent unbuildable tiles for it to be considered a candidate. This is to avoid chunks full of water to be marked as candidates.
     */
    max_colliding_tiles_coefficient: double;
    max_expansion_cooldown: uint32;
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     */
    max_expansion_distance: uint32;
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     */
    min_expansion_cooldown: uint32;
    neighbouring_base_chunk_coefficient: double;
    neighbouring_chunk_coefficient: double;
    other_base_coefficient: double;
    settler_group_max_size: uint32;
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     */
    settler_group_min_size: uint32;
}
interface EnemySpawnerAbsorption {
    absolute: double;
    proportional: double;
}
interface EnemySpawnerGraphicsSet {
    animations?: AnimationVariations;
    integration?: SpriteVariations;
    random_animation_offset?: bool;
    underwater_animations?: AnimationVariations;
    underwater_layer_offset?: int8;
    water_effect_map_animations?: AnimationVariations;
}
/**
 * Specifies an amount of electric energy in joules, or electric energy per time in watts.
 *
 * Internally, the input in `Watt` or `Joule/second` is always converted into `Joule/tick`, where 1 second is equal to 60 ticks. This means it uses the following formula: `Power in Joule/tick = Power in Watt / 60`. See {@link Power | https://wiki.factorio.com/Units#Power}.
 *
 * Supported Multipliers:
 *
 * - `k`: 10^3, or 1 000
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
 *
 * - `R`: 10^27
 *
 * - `Q`: 10^30
 * @example ```
buffer_capacity = "5MJ"
input_flow_limit = "300W"
-- the following two lines result in the same power consumption:
energy_usage = "60W"
energy_usage = "1J" -- not recommended, Watt is convention for power
```
 */
type Energy = string;
/**
 * Loaded as one of the {@link BaseEnergySource | prototype:BaseEnergySource} extensions, based on the value of the `type` key.
 */
type EnergySource = /**
 * Loaded when the `type` is `"electric"`.
 */
ElectricEnergySource | /**
 * Loaded when the `type` is `"burner"`.
 */
BurnerEnergySource | /**
 * Loaded when the `type` is `"heat"`.
 */
HeatEnergySource | /**
 * Loaded when the `type` is `"fluid"`.
 */
FluidEnergySource | /**
 * Loaded when the `type` is `"void"`.
 */
VoidEnergySource;
interface EnterVehicleTipTrigger extends CountBasedTipTrigger {
    match_type_only?: bool;
    type: 'enter-vehicle';
    vehicle?: EntityID;
}
/**
 * A single tiles worth of animations used when building entities.
 */
interface EntityBuildAnimationPiece {
    /**
     * The animation must have a total of 32 frames.
     */
    body: Animation;
    /**
     * The animation must have a total of 32 frames.
     */
    top: Animation;
}
/**
 * A set of animations used when building entities on space platforms. All EntityBuildAnimationPieces must have the same animation speed.
 */
interface EntityBuildAnimations {
    back_left: EntityBuildAnimationPiece;
    back_right: EntityBuildAnimationPiece;
    front_left: EntityBuildAnimationPiece;
    front_right: EntityBuildAnimationPiece;
}
/**
 * The name of an {@link EntityPrototype | prototype:EntityPrototype}.
 * @example ```
"stone-furnace"
```
 * @example ```
"bulk-inserter"
```
 */
type EntityID = string;
type EntityIDFilter = {
    /**
     * Only loaded if `quality` is defined.
     */
    comparator?: ComparatorString;
    name: EntityID;
    quality?: QualityID;
} | EntityID;
/**
 * An array containing the following values.
 *
 * If an entity is a {@link building | runtime:LuaEntityPrototype::is_building} and has the `"player-creation"` flag set, it is considered for multiple enemy/unit behaviors:
 *
 * - Autonomous enemy attacks (usually triggered by pollution) can only attack within chunks that contain at least one entity that is both a building and a player-creation.
 *
 * - Enemy expansion considers entities that are both buildings and player-creations as "enemy" entities that may block expansion.
 * @example ```
flags = {"placeable-neutral", "player-creation"}
```
 */
type EntityPrototypeFlags = (/**
 * Can't be rotated before or after placing.
 */
'not-rotatable' | /**
 * Determines the default force when placing entities in the map editor and using the *AUTO* option for the force.
 */
'placeable-neutral' | /**
 * Determines the default force when placing entities in the map editor and using the *AUTO* option for the force.
 */
'placeable-player' | /**
 * Determines the default force when placing entities in the map editor and using the *AUTO* option for the force.
 */
'placeable-enemy' | /**
 * Refers to the fact that most entities are placed on an invisible 'grid' within the world, entities with this flag do not have to line up with this grid (like trees and land-mines).
 */
'placeable-off-grid' | /**
 * Makes it possible for the biter AI to target the entity as a distraction in distraction mode {@link by_anything | runtime:defines.distraction.by_anything}. Makes it possible to blueprint, deconstruct, and repair the entity (can be turned off again using the specific flags). Enables smoke to be created automatically when building the entity. If the entity does not have {@link EntityPrototype::map_color | prototype:EntityPrototype::map_color} set, this flag makes the entity appear on the map/minimap with the default color specified in the {@link UtilityConstants | prototype:UtilityConstants}.
 */
'player-creation' | /**
 * Uses 45 degree angle increments when selecting direction.
 */
'building-direction-8-way' | /**
 * Used to automatically detect the proper direction, if possible. Used by base with the pump, train stop, and train signal.
 */
'filter-directions' | /**
 * When set, entity will be possible to obtain by using {@link LuaGameScript::get_entity_by_unit_number | runtime:LuaGameScript::get_entity_by_unit_number}. It also changes input actions sent by a player to be selecting entity by unit number instead of a position which may help players in latency to select moving entities.
 */
'get-by-unit-number' | /**
 * This is used to specify that the entity breathes air, and so is affected by poison (currently {@link poison capsules | https://wiki.factorio.com/Poison_capsule} are the only source).
 */
'breaths-air' | /**
 * Used to specify that the entity can not be 'healed' by repair-packs (or construction robots with repair packs)
 */
'not-repairable' | /**
 * The entity does not get drawn on the map.
 */
'not-on-map' | /**
 * The entity can not be deconstructed.
 */
'not-deconstructable' | /**
 * The entity can not be used in blueprints.
 */
'not-blueprintable' | /**
 * Hides the alt-info of an entity in alt-mode, for example the recipe icon.
 */
'hide-alt-info' | 'no-gap-fill-while-building' | /**
 * Do not apply fire stickers to the entity.
 */
'not-flammable' | /**
 * Prevents inserters and loaders from taking items from this entity.
 */
'no-automated-item-removal' | /**
 * Prevents inserters and loaders from inserting items into this entity.
 */
'no-automated-item-insertion' | /**
 * This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype::allow_copy_paste | prototype:EntityPrototype::allow_copy_paste}. Thus, it must be set on the entity via that property.
 */
'no-copy-paste' | /**
 * Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges. This flag does nothing when set in the data stage because it gets overridden by {@link EntityPrototype::selectable_in_game | prototype:EntityPrototype::selectable_in_game}. Thus, it must be set on the entity via that property.
 */
'not-selectable-in-game' | /**
 * The entity can't be selected by the {@link upgrade planner | https://wiki.factorio.com/Upgrade_planner}.
 */
'not-upgradable' | /**
 * The entity is not shown in the kill statistics.
 */
'not-in-kill-statistics' | 'building-direction-16-way' | 'snap-to-rail-support-spot' | /**
 * The entity is not shown in the made in property of recipe tooltips.
 */
'not-in-made-in')[];
/**
 * How far (in tiles) entities should be rendered outside the visible area of the screen.
 */
interface EntityRendererSearchBoxLimits {
    /**
     * Min value 4, max value 15. Min value 4 to compensate for tall entities like electric poles.
     */
    bottom: uint8;
    /**
     * Min value 6, max value 15. Min value 6 to compensate for shadows.
     */
    left: uint8;
    /**
     * Min value 3, max value 15.
     */
    right: uint8;
    /**
     * Min value 3, max value 15.
     */
    top: uint8;
}
type EntityStatus = 'working' | 'normal' | 'ghost' | 'not-plugged-in-electric-network' | 'networks-connected' | 'networks-disconnected' | 'no-ammo' | 'waiting-for-target-to-be-built' | 'waiting-for-train' | 'no-power' | 'low-temperature' | 'charging' | 'discharging' | 'fully-charged' | 'no-fuel' | 'no-food' | 'out-of-logistic-network' | 'no-recipe' | 'no-ingredients' | 'no-input-fluid' | 'no-research-in-progress' | 'no-minable-resources' | 'low-input-fluid' | 'low-power' | 'not-connected-to-rail' | 'cant-divide-segments' | 'recharging-after-power-outage' | 'no-modules-to-transmit' | 'disabled-by-control-behavior' | 'opened-by-circuit-network' | 'closed-by-circuit-network' | 'disabled-by-script' | 'disabled' | 'turned-off-during-daytime' | 'fluid-ingredient-shortage' | 'item-ingredient-shortage' | 'full-output' | 'not-enough-space-in-output' | 'full-burnt-result-output' | 'marked-for-deconstruction' | 'missing-required-fluid' | 'missing-science-packs' | 'waiting-for-source-items' | 'waiting-for-space-in-destination' | 'preparing-rocket-for-launch' | 'waiting-to-launch-rocket' | 'waiting-for-space-in-platform-hub' | 'launching-rocket' | 'thrust-not-required' | 'not-enough-thrust' | 'on-the-way' | 'waiting-in-orbit' | 'waiting-for-rocket-to-arrive' | 'no-path' | 'broken' | 'none' | 'frozen' | 'paused' | 'not-connected-to-hub-or-pad' | 'computing-navigation' | 'no-filter' | 'waiting-at-stop' | 'destination-stop-full' | 'pipeline-overextended' | 'no-spot-seedable-by-inputs' | 'waiting-for-plants-to-grow' | 'recipe-not-researched';
interface EntityTransferTipTrigger extends CountBasedTipTrigger {
    transfer?: 'in' | 'out';
    type: 'entity-transfer';
}
/**
 * The name of an {@link EquipmentCategory | prototype:EquipmentCategory}.
 * @example ```
"armor"
```
 */
type EquipmentCategoryID = string;
/**
 * The name of an {@link EquipmentGridPrototype | prototype:EquipmentGridPrototype}.
 * @example ```
"small-equipment-grid"
```
 * @example ```
"spidertron-equipment-grid"
```
 */
type EquipmentGridID = string;
/**
 * The name of an {@link EquipmentPrototype | prototype:EquipmentPrototype}.
 * @example ```
"fusion-reactor-equipment"
```
 * @example ```
"exoskeleton-equipment"
```
 */
type EquipmentID = string;
/**
 * The shape and dimensions of an equipment module.
 */
interface EquipmentShape {
    height: uint32;
    /**
     * Only used when when `type` is `"manual"`. Each inner array is a "position" inside width×height of the equipment. Each positions that is defined is a filled squares of the equipment shape. `{0, 0}` is the upper left corner of the equipment.
     * @example ```
    -- A set of points which fall within the width/height - can't be empty
    points =
    {
      {0, 0}, {1, 0}, {2, 0}, {3, 0},
      {0, 1},                 {3, 1},
      {0, 2},                 {3, 2},
      {0, 3}, {1, 3}, {2, 3}, {3, 3}
    }
    ```
     */
    points?: uint32[][];
    /**
     * The shape. When using "manual", `points` must be defined.
     */
    type: 'full' | 'manual';
    width: uint32;
}
type ExplosionDefinition = EntityID | {
    name: EntityID;
    offset?: Vector;
};
type Fade = {
    from?: ControlPoint;
    to?: ControlPoint;
} | AttenuationType;
interface Fades {
    /**
     * At least one of `fade_in`and `fade_out` needs to be defined.
     */
    fade_in?: Fade;
    /**
     * At least one of `fade_in`and `fade_out` needs to be defined.
     */
    fade_out?: Fade;
}
interface FastBeltBendTipTrigger extends CountBasedTipTrigger {
    type: 'fast-belt-bend';
}
interface FastReplaceTipTrigger extends CountBasedTipTrigger {
    match_type_only?: bool;
    source?: EntityID;
    target?: EntityID;
    type: 'fast-replace';
}
/**
 * A dictionary of feature flags and their status. It can be used to adjust prototypes based on whether the feature flags are enabled.
 * @example ```
-- sets coal to spoil only when the spoiling feature flag is enabled
if feature_flags["spoiling"] then
  data.raw.item.coal.spoil_ticks = 600
end
```
 */
interface FeatureFlags {
    expansion_shaders: bool;
    freezing: bool;
    quality: bool;
    rail_bridges: bool;
    segmented_units: bool;
    space_travel: bool;
    spoiling: bool;
}
/**
 * A slash `"/"` is always used as the directory delimiter. A path always begins with the specification of a root, which can be one of three formats:
 *
 * - **core**: A path starting with `__core__` will access the resources in the data/core directory, these resources are always accessible regardless of mod specifications.
 *
 * - **base**: A path starting with `__base__` will access the resources in the base mod in data/base directory. These resources are usually available, as long as the base mod isn't removed/deactivated.
 *
 * - **mod path**: The format `__<mod-name>__` is placeholder for root of any other mod (mods/<mod-name>), and is accessible as long as the mod is active.
 * @example ```
filename = "__base__/graphics/entity/accumulator/accumulator.png"
```
 * @example ```
filename = "__a-mod__/animations/assembler.png"
```
 */
type FileName = string;
interface FlipEntityTipTrigger extends CountBasedTipTrigger {
    type: 'flip-entity';
}
interface FlowStyleSpecification extends BaseStyleSpecification {
    horizontal_spacing?: int32;
    max_on_row?: int32;
    type: 'flow_style';
    vertical_spacing?: int32;
}
/**
 * A fluid amount. The amount is stored as a fixed-size signed 64 bit integer, with 24 bits reserved for decimal precision, meaning the smallest value step is `1/2^24`.
 */
type FluidAmount = double;
/**
 * Used to set the fluid amount an entity can hold, as well as the connection points for pipes leading into and out of the entity.
 *
 * Entities can have multiple fluidboxes. These can be part of a {@link FluidEnergySource | prototype:FluidEnergySource}, or be specified directly in the entity prototype.
 *
 * A fluidbox can store only one type of fluid at a time. However, a fluid system (ie. multiple connected fluid boxes) can contain multiple different fluids, see {@link Fluid mixing | https://wiki.factorio.com/Fluid_system#Fluid_mixing}.
 * @example ```
fluid_box =
{
  volume = 200,
  pipe_covers = pipecoverspictures(),
  pipe_connections =
  {
    {flow_direction = "input-output", direction = defines.direction.west, position = {-1, 0.5}},
    {flow_direction = "input-output", direction = defines.direction.east, position = {1, 0.5}}
  },
  production_type = "input-output",
  filter = "water"
}
```
 */
interface FluidBox {
    /**
     * Defaults to true if `pipe_picture` is not defined, otherwise defaults to false.
     */
    always_draw_covers?: bool;
    draw_only_when_connected?: bool;
    /**
     * Array of the {@link WorkingVisualisation::name | prototype:WorkingVisualisation::name} of working visualisations to enable when this fluidbox is present.
     *
     * If `draw_only_when_connected` is `true`, then the working visualisation are only enabled when this is *connected*.
     */
    enable_working_visualisations?: string[];
    /**
     * Can be used to specify which fluid is allowed to enter this fluid box. See {@link here | https://forums.factorio.com/viewtopic.php?f=28&t=46302}.
     */
    filter?: FluidID;
    /**
     * Hides the blue input/output arrows and icons at each connection point.
     */
    hide_connection_info?: bool;
    /**
     * The max extent that a pipeline with this fluidbox can span. A given pipeline's extent is calculated as the min extent of all the fluidboxes that comprise it.
     */
    max_pipeline_extent?: uint32;
    /**
     * The maximum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example ```
    maximum_temperature = 1000.0
    ```
     */
    maximum_temperature?: float;
    /**
     * The minimum temperature allowed into the fluidbox. Only applied if a `filter` is specified.
     * @example ```
    minimum_temperature = 100.0
    ```
     */
    minimum_temperature?: float;
    /**
     * Connection points to connect to other fluidboxes. This is also marked as blue arrows in alt mode. Fluid may flow in or out depending on the `type` field of each connection.
     *
     * Connection points may depend on the direction the entity is facing. These connection points cannot share positions with one another or the connection points of another fluid box belonging to the same entity.
     *
     * Can't have more than 255 connections.
     */
    pipe_connections: PipeConnectionDefinition[];
    /**
     * The pictures to show when another fluid box connects to this one.
     */
    pipe_covers?: Sprite4Way;
    pipe_covers_frozen?: Sprite4Way;
    pipe_picture?: Sprite4Way;
    pipe_picture_frozen?: Sprite4Way;
    production_type?: ProductionType;
    render_layer?: RenderLayer;
    /**
     * Set the secondary draw order for all orientations. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8;
    /**
     * Set the secondary draw order for each orientation. Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     *
     * The individual directions default to the value of `secondary_draw_order`.
     */
    secondary_draw_orders?: FluidBoxSecondaryDrawOrders;
    /**
     * Must be greater than 0.
     */
    volume: FluidAmount;
}
type FluidBoxLinkedConnectionID = uint32;
interface FluidBoxSecondaryDrawOrders {
    east?: int8;
    north?: int8;
    south?: int8;
    west?: int8;
}
interface FluidEnergySource extends BaseEnergySource {
    /**
     * If set to `true`, the energy source will calculate power based on the fluid's `fuel_value`, else it will calculate based on fluid temperature.
     */
    burns_fluid?: bool;
    /**
     * Property is only used when `burns_fluid` is `true` and the fluid has a {@link fuel_value | prototype:FluidPrototype::fuel_value} of `0`, or when `burns_fluid` is `false` and the fluid is at its `default_temperature`.
     *
     * In those cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
     */
    destroy_non_fuel_fluid?: bool;
    /**
     * `1` means 100% effectivity. Must be greater than `0`. Multiplier of the energy output.
     */
    effectivity?: double;
    /**
     * All standard fluid box configurations are acceptable, but the type must be `"input"` or `"input-output"` to function correctly. `scale_fluid_usage = true`, `fluid_usage_per_tick`, or a filter on the fluidbox must be set to be able to calculate the fluid usage of the energy source.
     */
    fluid_box: FluidBox;
    /**
     * The number of fluid units the energy source uses per tick. If used with `scale_fluid_usage`, this specifies the maximum. If this value is not set, `scale_energy_usage` is `false` and a fluid box filter is set, the game will attempt to calculate this value from the fluid box filter's fluid's `fuel_value` or `heat_capacity` and the entity's `energy_usage`. If `burns_fluid` is `false`, `maximum_temperature` will also be used. If the attempt of the game to calculate this value fails (`scale_energy_usage` is `false` and a fluid box filter is set), then `scale_energy_usage` will be forced to `true`, to prevent the energy source from being an infinite fluid sink. More context {@link on the forums | https://forums.factorio.com/90613}.
     */
    fluid_usage_per_tick?: FluidAmount;
    light_flicker?: LightFlickeringDefinition;
    /**
     * `0` means unlimited maximum temperature. If this is non-zero while `scale_fluid_usage` is `false` and `fluid_usage_per_tick` is not specified, the game will use this value to calculate `fluid_usage_per_tick`. To do that, the filter on the `fluid_box` must be set.
     *
     * Only loaded if `burns_fluid` is `false`.
     */
    maximum_temperature?: float;
    /**
     * If set to `true`, the energy source will consume as much fluid as required to produce the desired power, otherwise it will consume as much as it is allowed to, wasting any excess.
     */
    scale_fluid_usage?: bool;
    smoke?: SmokeSource[];
    type: 'fluid';
}
/**
 * The name of a {@link FluidPrototype | prototype:FluidPrototype}.
 * @example ```
"water"
```
 * @example ```
"lubricant"
```
 */
type FluidID = string;
/**
 * A fluid ingredient definition.
 * @example ```
{type="fluid", name="water", amount=50}
```
 */
interface FluidIngredientPrototype {
    /**
     * Can not be `<= 0`.
     */
    amount: FluidAmount;
    /**
     * Used to specify which {@link CraftingMachinePrototype::fluid_boxes | prototype:CraftingMachinePrototype::fluid_boxes} this ingredient should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     */
    fluidbox_index?: uint32;
    /**
     * Used to set crafting machine fluidbox volumes. Must be at least 1.
     */
    fluidbox_multiplier?: uint8;
    /**
     * Amount that should not be included in the consumption statistics, typically with a matching product having the same amount set as {@link ignored_by_stats | prototype:FluidProductPrototype::ignored_by_stats}.
     */
    ignored_by_stats?: FluidAmount;
    /**
     * If `temperature` is not set, this sets the expected maximum temperature of the fluid ingredient.
     */
    maximum_temperature?: float;
    /**
     * If `temperature` is not set, this sets the expected minimum temperature of the fluid ingredient.
     */
    minimum_temperature?: float;
    /**
     * The name of a {@link FluidPrototype | prototype:FluidPrototype}.
     */
    name: FluidID;
    /**
     * Sets the expected temperature of the fluid ingredient.
     */
    temperature?: float;
    type: 'fluid';
}
/**
 * A fluid product definition.
 */
interface FluidProductPrototype {
    /**
     * Can not be `< 0`.
     */
    amount?: FluidAmount;
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     */
    amount_max?: FluidAmount;
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * Can not be `< 0`.
     */
    amount_min?: FluidAmount;
    /**
     * Used to specify which {@link CraftingMachinePrototype::fluid_boxes | prototype:CraftingMachinePrototype::fluid_boxes} this product should use. It will use this one fluidbox. The index is 1-based and separate for input and output fluidboxes.
     */
    fluidbox_index?: uint32;
    /**
     * Amount that should be deducted from any productivity induced bonus crafts.
     *
     * This value can safely be set larger than the maximum expected craft amount, any excess is ignored.
     *
     * This value is ignored when {@link allow_productivity | prototype:RecipePrototype::allow_productivity} is `false`.
     */
    ignored_by_productivity?: FluidAmount;
    /**
     * Amount that should not be included in the fluid production statistics, typically with a matching ingredient having the same amount set as {@link ignored_by_stats | prototype:FluidIngredientPrototype::ignored_by_stats}.
     *
     * If `ignored_by_stats` is larger than the amount crafted (for instance due to probability) it will instead show as consumed.
     *
     * Products with `ignored_by_stats` defined will not be set as recipe through the circuit network when using the product's fluid-signal.
     */
    ignored_by_stats?: FluidAmount;
    /**
     * The name of a {@link FluidPrototype | prototype:FluidPrototype}.
     */
    name: FluidID;
    /**
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
     *
     * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `ignored_by_productivity` on the product is not shown.
     *
     * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     */
    probability?: double;
    /**
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     */
    show_details_in_recipe_tooltip?: bool;
    /**
     * The temperature of the fluid product.
     */
    temperature?: float;
    type: 'fluid';
}
interface FluidWagonConnectorGraphics {
    load_animations: PumpConnectorGraphics;
    unload_animations: PumpConnectorGraphics;
}
interface FogEffectProperties {
    color1?: Color;
    color2?: Color;
    detail_noise_texture: EffectTexture;
    /**
     * `gleba` type is rendered per chunk and opacity of fog depends on count of tiles with {@link lowland_fog | prototype:TilePrototype::lowland_fog} set to `true` on the chunk.
     */
    fog_type?: 'vulcanus' | 'gleba';
    shape_noise_texture: EffectTexture;
}
interface FogMaskShapeDefinition {
    falloff?: float;
    rect: SimpleBoundingBox;
}
interface FollowerRobotLifetimeModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'follower-robot-lifetime';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface FootprintParticle {
    /**
     * The name of the particle that should be created when the character walks on the defined tiles.
     */
    particle_name?: ParticleID;
    /**
     * The tiles this footprint particle is shown on when the player walks over them.
     */
    tiles: TileID[];
    /**
     * Whether this footprint particle should be the default particle that is used for `tiles` that don't have an associated footprint particle.
     */
    use_as_default?: bool;
}
interface FootstepTriggerEffectItem extends CreateParticleTriggerEffectItemBase {
    /**
     * Can be used to specify multiple CreateParticleTriggerEffectItems. If this property is defined, all properties inherited from CreateParticleTriggerEffectItem are ignored.
     */
    actions?: CreateParticleTriggerEffectItem[];
    tiles: TileID[];
    /**
     * When `true`, the trigger(s) defined in `actions` are the default triggers for tiles that don't have an associated footstep particle trigger. (ie. don't show up in one of the "tiles" lists).
     */
    use_as_default?: bool;
}
/**
 * @example ```
footstep_particle_triggers =
{
  {
    tiles = { "water", "water-shallow" },
    type = "create-particle",
    particle_name = "water-particle",
    [...]
  },
  {
    tiles = { "grass-1", "grass-2" },
    type = "create-particle",
    particle_name = "grass-particle",
    [...]
  },
  [...]
}
```
 * @example ```
footstep_particle_triggers =
{
  {
    tiles = { "water", "water-shallow" },
    actions =
    {
      {
        type = "create-particle",
        particle_name = "water-particle-1",
        [...]
      },
      {
        type = "create-particle",
        particle_name = "water-particle-2",
        [...]
      },
      [...]
    }
  },
  {
    tiles = { "grass-1", "grass-2" },
    actions =
    {
      {
        type = "create-particle",
        particle_name = "grass-particle-1",
        [...]
      },
      {
        type = "create-particle",
        particle_name = "grass-particle-2",
        [...]
      },
      [...]
    }
  }
}
```
 */
type FootstepTriggerEffectList = FootstepTriggerEffectItem[];
/**
 * One of the following values:
 */
type ForceCondition = 'all' | 'enemy' | 'ally' | 'friend' | 'not-friend' | 'same' | 'not-same';
interface FrameStyleSpecification extends BaseStyleSpecification {
    background_graphical_set?: ElementImageSet;
    border?: BorderImageSet;
    drag_by_title?: bool;
    graphical_set?: ElementImageSet;
    header_background?: ElementImageSet;
    header_filler_style?: EmptyWidgetStyleSpecification;
    header_flow_style?: HorizontalFlowStyleSpecification;
    horizontal_flow_style?: HorizontalFlowStyleSpecification;
    title_style?: LabelStyleSpecification;
    type: 'frame_style';
    use_header_filler?: bool;
    vertical_flow_style?: VerticalFlowStyleSpecification;
}
interface FrequencySizeRichness {
    frequency?: MapGenSize;
    richness?: MapGenSize;
    size?: MapGenSize;
}
/**
 * The name of a {@link FuelCategory | prototype:FuelCategory}.
 * @example ```
"chemical"
```
 * @example ```
"nuclear"
```
 */
type FuelCategoryID = string;
interface FusionGeneratorDirectionGraphicsSet {
    animation?: Animation;
    fluid_input_graphics?: FusionGeneratorFluidInputGraphics[];
    fusion_effect_uv_map?: Sprite;
    working_light?: Animation;
}
interface FusionGeneratorFluidInputGraphics {
    fusion_effect_uv_map?: Sprite;
    sprite?: Sprite;
    working_light?: Sprite;
}
interface FusionGeneratorGraphicsSet {
    east_graphics_set: FusionGeneratorDirectionGraphicsSet;
    glow_color?: Color;
    light?: LightDefinition;
    north_graphics_set: FusionGeneratorDirectionGraphicsSet;
    render_layer?: RenderLayer;
    south_graphics_set: FusionGeneratorDirectionGraphicsSet;
    west_graphics_set: FusionGeneratorDirectionGraphicsSet;
}
interface FusionReactorConnectionGraphics {
    fusion_effect_uv_map?: Sprite;
    pictures?: Animation;
    working_light_pictures?: Animation;
}
interface FusionReactorGraphicsSet {
    connections_graphics?: FusionReactorConnectionGraphics[];
    default_fuel_glow_color?: Color;
    direction_to_connections_graphics?: Record<DirectionString, uint8[]>;
    fusion_effect_uv_map?: Sprite;
    light?: LightDefinition;
    /**
     * Cannot be an empty string.
     */
    plasma_category: NeighbourConnectableConnectionCategory;
    render_layer?: RenderLayer;
    structure?: Sprite4Way;
    use_fuel_glow_color?: bool;
    working_light_pictures?: Sprite4Way;
}
interface GameControllerVibrationData {
    /**
     * Duration in milliseconds.
     */
    duration?: uint32;
    /**
     * Vibration intensity must be between 0 and 1.
     */
    high_frequency_vibration_intensity?: float;
    /**
     * Vibration intensity must be between 0 and 1.
     */
    low_frequency_vibration_intensity?: float;
    play_for?: PlayFor;
}
interface GameViewSettings {
    /**
     * If this is defined then it sets the default value for all other properties.
     */
    default_show_value?: bool;
    show_alert_gui?: bool;
    show_controller_gui?: bool;
    show_crafting_queue?: bool;
    show_entity_info?: bool;
    show_entity_tooltip?: bool;
    show_hotkey_suggestions?: bool;
    show_map_view_options?: bool;
    show_minimap?: bool;
    show_quickbar?: bool;
    show_rail_block_visualisation?: bool;
    show_research_info?: bool;
    show_shortcut_bar?: bool;
    show_side_menu?: bool;
    show_tool_bar?: bool;
    update_entity_selection?: bool;
}
interface GateOverRailBuildTipTrigger extends CountBasedTipTrigger {
    type: 'gate-over-rail-build';
}
interface GeneratingPowerTipTrigger extends CountBasedTipTrigger {
    type: 'generating-power';
}
interface GhostShimmerConfig {
    blend_mode: int32;
    distortion: float;
    /**
     * The array must have at least 6 elements.
     */
    distortion_layers: GhostShimmerDistortionData[];
    /**
     * The array must have at least 6 elements.
     */
    overlay_layers: GhostShimmerOverlayData[];
    proportional_distortion: bool;
    tint: Color;
    visualize_borders: bool;
    world_uv_modulo: int32;
}
interface GhostShimmerDistortionData {
    intensity: float;
    shape: int32;
    x: float;
    y: float;
}
interface GhostShimmerOverlayData {
    blend_mode: int32;
    cutoff: float;
    shape: int32;
    tint: Color;
    x: float;
    y: float;
}
interface GigaCargoHatchDefinition {
    /**
     * Cannot use `fade_ticks`.
     */
    closing_sound?: InterruptibleSound;
    covered_hatches: uint32[];
    hatch_graphics_back?: Animation;
    hatch_graphics_front?: Animation;
    hatch_render_layer_back?: RenderLayer;
    hatch_render_layer_front?: RenderLayer;
    /**
     * Cannot use `fade_ticks`.
     */
    opening_sound?: InterruptibleSound;
}
interface GiveItemModifier extends BaseModifier {
    count?: ItemCountType;
    item: ItemID;
    quality?: QualityID;
    type: 'give-item';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface GlobalRecipeTints {
    primary?: Color;
    quaternary?: Color;
    secondary?: Color;
    tertiary?: Color;
}
interface GlobalTintEffectProperties {
    global_intensity: float;
    global_scale: float;
    intensity: Vector4f;
    noise_texture: EffectTexture;
    offset: Vector4f;
    scale_u: Vector4f;
    scale_v: Vector4f;
    zoom_factor: float;
    zoom_intensity: float;
}
interface GlowStyleSpecification extends BaseStyleSpecification {
    image_set?: ElementImageSet;
    type: 'glow_style';
}
interface GraphStyleSpecification extends BaseStyleSpecification {
    background_color?: Color;
    data_line_highlight_distance?: uint32;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    graph_right_margin?: uint32;
    graph_top_margin?: uint32;
    grid_lines_color?: Color;
    guide_lines_color?: Color;
    horizontal_label_style?: LabelStyleSpecification;
    horizontal_labels_margin?: uint32;
    line_colors?: Color[];
    minimal_horizontal_label_spacing?: uint32;
    minimal_vertical_label_spacing?: uint32;
    selection_dot_radius?: uint32;
    type: 'graph_style';
    vertical_label_style?: LabelStyleSpecification;
    vertical_labels_margin?: uint32;
}
interface GroupAttackTipTrigger extends CountBasedTipTrigger {
    type: 'group-attack';
}
interface GunShift4Way {
    east?: Vector;
    north: Vector;
    south?: Vector;
    west?: Vector;
}
interface GunSpeedModifier extends BaseModifier {
    /**
     * Name of the {@link AmmoCategory | prototype:AmmoCategory} that is affected.
     */
    ammo_category: AmmoCategoryID;
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    /**
     * Modification value, which will be added to the current gun speed modifier upon researching.
     */
    modifier: double;
    type: 'gun-speed';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
/**
 * Used to specify heat capacity properties without a {@link heat energy source | prototype:HeatEnergySource}.
 */
interface HeatBuffer {
    /**
     * May contain up to 32 connections.
     */
    connections?: HeatConnection[];
    default_temperature?: double;
    heat_glow?: Sprite4Way;
    heat_picture?: Sprite4Way;
    heat_pipe_covers?: Sprite4Way;
    /**
     * Must be >= `default_temperature`.
     */
    max_temperature: double;
    max_transfer: Energy;
    min_temperature_gradient?: double;
    /**
     * Must be >= `default_temperature` and <= `max_temperature`.
     */
    min_working_temperature?: double;
    minimum_glow_temperature?: float;
    pipe_covers?: Sprite4Way;
    specific_heat: Energy;
}
/**
 * Defines the connections for {@link HeatEnergySource | prototype:HeatEnergySource} and {@link HeatBuffer | prototype:HeatBuffer}.
 */
interface HeatConnection {
    /**
     * The "outward" direction of this heat connection. For a connection to succeed, the other heat connection must face the opposite direction (a south-facing connection needs a north-facing connection to succeed). A connection rotates with the entity.
     */
    direction: Direction;
    /**
     * The location of the heat pipe connection, relative to the center of the entity in the north-facing direction.
     */
    position: MapPosition;
}
interface HeatEnergySource extends BaseEnergySource {
    /**
     * May contain up to 32 connections.
     */
    connections?: HeatConnection[];
    default_temperature?: double;
    /**
     * Heat energy sources do not support producing pollution.
     */
    emissions_per_minute?: Record<AirbornePollutantID, double>;
    heat_glow?: Sprite4Way;
    heat_picture?: Sprite4Way;
    heat_pipe_covers?: Sprite4Way;
    /**
     * Must be >= `default_temperature`.
     */
    max_temperature: double;
    max_transfer: Energy;
    min_temperature_gradient?: double;
    /**
     * Must be >= `default_temperature` and <= `max_temperature`.
     */
    min_working_temperature?: double;
    minimum_glow_temperature?: float;
    pipe_covers?: Sprite4Way;
    specific_heat: Energy;
    type: 'heat';
}
type HorizontalAlign = 'left' | 'center' | 'right';
interface HorizontalFlowStyleSpecification extends BaseStyleSpecification {
    horizontal_spacing?: int32;
    type: 'horizontal_flow_style';
}
interface HorizontalScrollBarStyleSpecification extends ScrollBarStyleSpecification {
    type: 'horizontal_scrollbar_style';
}
/**
 * One layer of an icon. Icon layering follows the following rules:
 *
 * - The rendering order of the individual icon layers follows the array order: Later added icon layers (higher index) are drawn on top of previously added icon layers (lower index).
 *
 * - By default the first icon layer will draw an outline (or shadow in GUI), other layers will draw it only if they have `draw_background` explicitly set to `true`. There are caveats to this though. See {@link the doc | prototype:IconData::draw_background}.
 *
 * - When the final icon is displayed with transparency (e.g. a faded out alert), the icon layer overlap may look {@link undesirable | https://forums.factorio.com/viewtopic.php?p=575844#p575844}.
 *
 * - When the final icon is displayed with a shadow (e.g. an item on the ground or on a belt when item shadows are turned on), each icon layer will {@link cast a shadow | https://forums.factorio.com/84888} and the shadow is cast on the layer below it.
 *
 * - The final icon will always be resized and centered in GUI so that all its layers fit the target slot, but won't be resized when displayed on machines in alt-mode. For example: recipe first icon layer is size 128, scale 1, the icon group will be displayed at resolution /4 to fit the 32px GUI boxes, but will be displayed 4 times as large on buildings.
 *
 * - Shift values are based on {@link `expected_icon_size / 2` | prototype:IconData::scale}.
 *
 * The game automatically generates {@link icon mipmaps | https://factorio.com/blog/post/fff-291} for all icons. However, icons can have custom mipmaps defined. Custom mipmaps may help to achieve clearer icons at reduced size (e.g. when zooming out) than auto-generated mipmaps. If an icon file contains mipmaps then the game will automatically infer the icon's mipmap count. Icon files for custom mipmaps must contain half-size images with a geometric-ratio, for each mipmap level. Each next level is aligned to the upper-left corner, with no extra padding. Example sequence: `128x128@(0,0)`, `64x64@(128,0)`, `32x32@(192,0)` is three mipmaps.
 * @example ```
-- one icon layer
{
  icon = "__base__/graphics/icons/fluid/heavy-oil.png",
  icon_size = 64,
  scale = 0.5,
  shift = {4, -8}
}
```
 * @example ```
-- Layered icon, with size defined per layer
icons = {
  {
    icon = "__base__/graphics/icons/fluid/barreling/barrel-empty.png",
    icon_size = 32
  },
  {
    icon = "__base__/graphics/icons/fluid/barreling/barrel-empty-side-mask.png",
    icon_size = 32,
    tint = { a = 0.75, b = 0, g = 0, r = 0 }
  },
  {
    icon = "__base__/graphics/icons/fluid/barreling/barrel-empty-top-mask.png",
    icon_size = 32,
    tint = { a = 0.75, b = 0.5, g = 0.5, r = 0.5 }
  },
  {
    icon = "__base__/graphics/icons/fluid/crude-oil.png",
    icon_size = 32,
    scale = 0.5,
    shift = {7, 8}
  }
}
```
 */
interface IconData {
    /**
     * Outline is drawn using signed distance field generated on load.One icon image, will have only one SDF generated. But if the image is used in multiple icon with different scales, outline width won't match the desired width in all the scales but the largest one.
     */
    draw_background?: bool;
    /**
     * Path to the icon file.
     */
    icon: FileName;
    /**
     * The size of the square icon, in pixels. E.g. `32` for a 32px by 32px icon. Must be larger than `0`.
     */
    icon_size?: SpriteSizeType;
    /**
     * Defaults to `(expected_icon_size / 2) / icon_size`.
     *
     * Specifies the scale of the icon on the GUI scale. A scale of `2` means that the icon will be two times bigger on screen (and thus more pixelated).
     *
     * Expected icon sizes:
     *
     * - `512` for {@link SpaceLocationPrototype::starmap_icon | prototype:SpaceLocationPrototype::starmap_icon}.
     *
     * - `256` for {@link TechnologyPrototype | prototype:TechnologyPrototype}.
     *
     * - `128` for {@link AchievementPrototype | prototype:AchievementPrototype} and {@link ItemGroup | prototype:ItemGroup}.
     *
     * - `32` for {@link ShortcutPrototype::icons | prototype:ShortcutPrototype::icons} and `24` for {@link ShortcutPrototype::small_icons | prototype:ShortcutPrototype::small_icons}.
     *
     * - `64` for the rest of the prototypes that use icons.
     */
    scale?: double;
    /**
     * Used to offset the icon "layer" from the overall icon. The shift is applied from the center (so negative shifts are left and up, respectively). Shift values are "in pixels" where the overall icon is assumed to be `expected_icon_size / 2` pixels in width and height, meaning shift `{0, expected_icon_size/2}` will shift it by entire icon height down.
     */
    shift?: Vector;
    /**
     * The tint to apply to the icon.
     */
    tint?: Color;
}
/**
 * Specification of where and how should be the alt-mode icons of entities be drawn.
 */
interface IconDrawSpecification {
    /**
     * Render layer of the icon.
     */
    renderLayer?: 'entity-info-icon-below' | 'entity-info-icon-above' | 'air-entity-info-icon';
    scale?: float;
    /**
     * Scale of the icon when there are many items.
     */
    scale_for_many?: float;
    shift?: Vector;
}
/**
 * Specification of where and how should be the icons of individual inventories be drawn.
 */
interface IconSequencePositioning {
    inventory_index: defines.inventory;
    max_icon_rows?: uint8;
    max_icons_per_row?: uint8;
    multi_row_initial_height_modifier?: float;
    scale?: float;
    separation_multiplier?: float;
    shift?: Vector;
}
/**
 * @example ```
data.raw["gui-style"]["default"]["stretchy-sprite"] = {
  type = "image_style",
  vertically_stretchable = "on",
  horizontally_stretchable = "on",
  stretch_image_to_widget_size = true,
}
```
 */
interface ImageStyleSpecification extends BaseStyleSpecification {
    graphical_set?: ElementImageSet;
    invert_colors_of_picture_when_hovered_or_toggled?: bool;
    stretch_image_to_widget_size?: bool;
    type: 'image_style';
}
/**
 * Item or fluid ingredient.
 * @example ```
{type="item", name="steel-plate", amount=8} -- item ingredient
```
 * @example ```
{type="fluid", name="water", amount=50} -- fluid ingredient
```
 */
type IngredientPrototype = /**
 * Loaded when the `type` is `"item"`.
 */
ItemIngredientPrototype | /**
 * Loaded when the `type` is `"fluid"`.
 */
FluidIngredientPrototype;
interface InsertItemTriggerEffectItem extends TriggerEffectItem {
    count?: ItemCountType;
    /**
     * Name of the {@link ItemPrototype | prototype:ItemPrototype} that should be created.
     */
    item: ItemID;
    quality?: QualityID;
    type: 'insert-item';
}
interface InserterStackSizeBonusModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'inserter-stack-size-bonus';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface InstantTriggerDelivery extends TriggerDeliveryItem {
    type: 'instant';
}
interface InterruptibleSound {
    fade_ticks?: uint32;
    minimal_change_per_tick?: float;
    /**
     * Has to be greater or equal to `1`.
     */
    minimal_sound_duration_for_stopped_sound?: uint16;
    /**
     * At least one of sound and stopped_sound has to be defined.
     */
    sound?: Sound;
    /**
     * At least one of sound and stopped_sound has to be defined.
     */
    stopped_sound?: Sound;
}
interface InvokeTileEffectTriggerEffectItem extends TriggerEffectItem {
    tile_collision_mask?: CollisionMaskConnector;
    type: 'invoke-tile-trigger';
}
type ItemCountType = uint32;
/**
 * The name of an {@link ItemGroup | prototype:ItemGroup}.
 * @example ```
"logistics"
```
 * @example ```
"production"
```
 */
type ItemGroupID = string;
interface ItemHealthColorData {
    color: Color;
    /**
     * Cannot be negative.
     */
    threshold: float;
}
/**
 * The name of an {@link ItemPrototype | prototype:ItemPrototype}.
 * @example ```
"iron-plate"
```
 * @example ```
"blueprint-book"
```
 */
type ItemID = string;
type ItemIDFilter = {
    /**
     * Only loaded if `quality` is defined.
     */
    comparator?: ComparatorString;
    name: ItemID;
    quality?: QualityID;
} | ItemID;
/**
 * An item ingredient definition.
 * @example ```
{type="item", name="steel-plate", amount=8}
```
 * @example ```
{type="item", name="iron-plate", amount=12}
```
 */
interface ItemIngredientPrototype {
    /**
     * Cannot be `0`.
     */
    amount: uint16;
    /**
     * Amount that should not be included in the consumption statistics, typically with a matching product having the same amount set as {@link ignored_by_stats | prototype:ItemProductPrototype::ignored_by_stats}.
     */
    ignored_by_stats?: uint16;
    name: ItemID;
    type: 'item';
}
/**
 * An item product definition.
 */
interface ItemProductPrototype {
    amount?: uint16;
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     *
     * If set to a number that is less than `amount_min`, the game will use `amount_min` instead.
     */
    amount_max?: uint16;
    /**
     * Only loaded, and mandatory if `amount` is not defined.
     */
    amount_min?: uint16;
    /**
     * Probability that a craft will yield one additional product. Also applies to bonus crafts caused by productivity.
     */
    extra_count_fraction?: float;
    /**
     * Amount that should be deducted from any productivity induced bonus crafts.
     *
     * This value can safely be set larger than the maximum expected craft amount, any excess is ignored.
     *
     * This value is ignored when {@link allow_productivity | prototype:RecipePrototype::allow_productivity} is `false`.
     */
    ignored_by_productivity?: uint16;
    /**
     * Amount that should not be included in the item production statistics, typically with a matching ingredient having the same amount set as {@link ignored_by_stats | prototype:ItemIngredientPrototype::ignored_by_stats}.
     *
     * If `ignored_by_stats` is larger than the amount crafted (for instance due to probability) it will instead show as consumed.
     *
     * Products with `ignored_by_stats` defined will not be set as recipe through the circuit network when using the product's item-signal.
     */
    ignored_by_stats?: uint16;
    /**
     * The name of an {@link ItemPrototype | prototype:ItemPrototype}.
     */
    name: ItemID;
    /**
     * Must be >= `0` and < `1`.
     */
    percent_spoiled?: float;
    /**
     * Value between 0 and 1, `0` for 0% chance and `1` for 100% chance.
     *
     * The effect of probability is no product, or a linear distribution on [min, max]. For a recipe with probability `p`, amount_min `min`, and amount_max `max`, the Expected Value of this product can be expressed as `p * (0.5 * (max + min))`. This is what will be shown in a recipe tooltip. The effect of `ignored_by_productivity` on the product is not shown.
     *
     * When `amount_min` and `amount_max` are not provided, `amount` applies as min and max. The Expected Value simplifies to `p * amount`, providing `0` product, or `amount` product, on recipe completion.
     */
    probability?: double;
    /**
     * When hovering over a recipe in the crafting menu the recipe tooltip will be shown. An additional item tooltip will be shown for every product, as a separate tooltip, if the item tooltip has a description and/or properties to show and if `show_details_in_recipe_tooltip` is `true`.
     */
    show_details_in_recipe_tooltip?: bool;
    type: 'item';
}
/**
 * An array containing the following values.
 */
type ItemPrototypeFlags = (/**
 * Whether the logistics areas of roboports should be drawn when holding this item. Used for example by the {@link deconstruction planner | https://wiki.factorio.com/Deconstruction_planner}.
 */
'draw-logistic-overlay' | /**
 * Whether the trash-unrequested feature skips this item.
 */
'excluded-from-trash-unrequested' | /**
 * Always show the item in selection lists (item filter, logistic request etc.) even when locked recipe for that item is present.
 */
'always-show' | /**
 * Item will not appear in the bonus gui.
 */
'hide-from-bonus-gui' | /**
 * Item will not appear in the tooltips shown when hovering over a burner inventory with the fuel category the item is in.
 */
'hide-from-fuel-tooltip' | /**
 * The item can never be stacked. Additionally, the item does not show an item count when in the cursor. This also prevents the item from stacking in assembling machine input slots, which otherwise can exceed the item stack size if required by the recipe.
 */
'not-stackable' | /**
 * Item will be preferred by construction bots when building the entity specified by the item's {@link place_result | prototype:ItemPrototype::place_result}.
 */
'primary-place-result' | /**
 * Only works for {@link SelectionToolPrototype | prototype:SelectionToolPrototype} and derived classes. Corresponds to the runtime {@link on_mod_item_opened | runtime:on_mod_item_opened} event.
 */
'mod-openable' | /**
 * Item is deleted when removed from the cursor by pressing `Q` ("clear cursor"). Used for example by the copy/paste tools.
 */
'only-in-cursor' | /**
 * Item is able to be spawned by a {@link ShortcutPrototype | prototype:ShortcutPrototype} or {@link CustomInputPrototype | prototype:CustomInputPrototype}.
 */
'spawnable' | 'spoil-result' | /**
 * Controls whether the spoil time ignores the spoil time modifier in the {@link DifficultySettings | runtime:DifficultySettings}.
 */
'ignore-spoil-time-modifier')[];
type ItemStackIndex = uint16;
/**
 * The name of an {@link ItemSubGroup | prototype:ItemSubGroup}.
 * @example ```
"capsule"
```
 * @example ```
"military-equipment"
```
 */
type ItemSubGroupID = string;
/**
 * Item that when placed creates this entity/tile.
 * @example ```
{item = "iron-chest", count = 1}
```
 */
interface ItemToPlace {
    /**
     * How many items are used to place one of this entity/tile. Can't be larger than the stack size of the item.
     */
    count: ItemCountType;
    /**
     * The item used to place this entity/tile.
     */
    item: ItemID;
}
interface KillTipTrigger extends CountBasedTipTrigger {
    damage_type?: DamageTypeID;
    entity?: EntityID;
    match_type_only?: bool;
    type: 'kill';
}
interface LabelStyleSpecification extends BaseStyleSpecification {
    clicked_font_color?: Color;
    disabled_font_color?: Color;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    font_color?: Color;
    game_controller_hovered_font_color?: Color;
    hovered_font_color?: Color;
    parent_hovered_font_color?: Color;
    rich_text_highlight_error_color?: Color;
    rich_text_highlight_ok_color?: Color;
    rich_text_highlight_warning_color?: Color;
    rich_text_setting?: RichTextSetting;
    single_line?: bool;
    type: 'label_style';
    underlined?: bool;
}
interface LaboratoryProductivityModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'laboratory-productivity';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface LaboratorySpeedModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'laboratory-speed';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
type LayeredSound = {
    layers: Sound[];
} | Sound;
type LayeredSprite = {
    render_layer: RenderLayer;
} | LayeredSprite[];
type LayeredSpriteVariations = LayeredSprite[];
/**
 * Specifies a light source. This is loaded either as a single light source or as an array of light sources.
 * @example ```
-- The light of the orange state of the rail signal
orange_light = {intensity = 0.2, size = 4, color={r=1, g=0.5}}
```
 * @example ```
-- The front lights of the car
light =
{
  {
    type = "oriented",
    minimum_darkness = 0.3,
    picture =
    {
      filename = "__core__/graphics/light-cone.png",
      priority = "extra-high",
      flags = { "light" },
      scale = 2,
      width = 200,
      height = 200
    },
    shift = {-0.6, -14},
    size = 2,
    intensity = 0.6,
    color = {r = 0.92, g = 0.77, b = 0.3}
  },
  {
    type = "oriented",
    minimum_darkness = 0.3,
    picture =
    {
      filename = "__core__/graphics/light-cone.png",
      priority = "extra-high",
      flags = { "light" },
      scale = 2,
      width = 200,
      height = 200
    },
    shift = {0.6, -14},
    size = 2,
    intensity = 0.6,
    color = {r = 0.92, g = 0.77, b = 0.3}
  }
}
```
 */
type LightDefinition = {
    add_perspective?: bool;
    /**
     * Color of the light.
     */
    color?: Color;
    flicker_interval?: uint8;
    flicker_max_modifier?: float;
    flicker_min_modifier?: float;
    /**
     * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
     */
    intensity: float;
    minimum_darkness?: float;
    /**
     * Offsets tick used to calculate flicker by position hash. Useful to desynchronize flickering of multiple stationary lights.
     */
    offset_flicker?: bool;
    /**
     * Only loaded, and mandatory if `type` is `"oriented"`.
     */
    picture?: Sprite;
    /**
     * Only loaded if `type` is `"oriented"`.
     */
    rotation_shift?: RealOrientation;
    shift?: Vector;
    /**
     * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
     */
    size: float;
    source_orientation_offset?: RealOrientation;
    type?: 'basic' | 'oriented';
} | {
    add_perspective?: bool;
    /**
     * Color of the light.
     */
    color?: Color;
    flicker_interval?: uint8;
    flicker_max_modifier?: float;
    flicker_min_modifier?: float;
    /**
     * Brightness of the light in the range `[0, 1]`, where `0` is no light and `1` is the maximum light.
     */
    intensity: float;
    minimum_darkness?: float;
    /**
     * Offsets tick used to calculate flicker by position hash. Useful to desynchronize flickering of multiple stationary lights.
     */
    offset_flicker?: bool;
    /**
     * Only loaded, and mandatory if `type` is `"oriented"`.
     */
    picture?: Sprite;
    /**
     * Only loaded if `type` is `"oriented"`.
     */
    rotation_shift?: RealOrientation;
    shift?: Vector;
    /**
     * The radius of the light in tiles. Note that the light gets darker near the edges, so the effective size of the light will appear to be smaller.
     */
    size: float;
    source_orientation_offset?: RealOrientation;
    type?: 'basic' | 'oriented';
}[];
/**
 * Specifies the light flicker. Note that this defaults to "showing a white light" instead of the usually expected "showing nothing".
 */
interface LightFlickeringDefinition {
    border_fix_speed?: float;
    /**
     * Color of the light.
     */
    color?: Color;
    derivation_change_deviation?: float;
    derivation_change_frequency?: float;
    light_intensity_to_size_coefficient?: float;
    /**
     * Brightness of the light in the range `[0, 1]` where `0` is no light and `1` is the maximum light.
     */
    maximum_intensity?: float;
    /**
     * Brightness of the light in the range `[0, 1]` where `0` is no light and `1` is the maximum light.
     */
    minimum_intensity?: float;
    /**
     * The radius of the light in tiles. Note, that the light gets darker near the edges, so the effective size of the light seems to be smaller.
     */
    minimum_light_size?: float;
}
interface LightProperties {
    color?: Color;
    direction?: Vector3D;
}
interface LightningGraphicsSet {
    attractor_hit_animation?: Animation;
    bolt_detail_level?: uint8;
    bolt_half_width?: float;
    bolt_midpoint_variance?: float;
    cloud_background?: Animation;
    /**
     * Must be less than or equal to `bolt_detail_level`.
     */
    cloud_detail_level?: uint8;
    cloud_fork_orientation_variance?: float;
    /**
     * Cannot be 255.
     */
    cloud_forks?: uint8;
    explosion?: AnimationVariations;
    /**
     * Cannot be 1.
     */
    fork_intensity_multiplier?: float;
    fork_orientation_variance?: float;
    ground_streamer_variance?: float;
    ground_streamers?: Animation[];
    light?: LightDefinition;
    max_bolt_offset?: float;
    max_fork_probability?: float;
    max_ground_streamer_distance?: float;
    max_relative_fork_length?: float;
    min_ground_streamer_distance?: float;
    min_relative_fork_length?: float;
    relative_cloud_fork_length?: float;
    /**
     * If not empty, enables the lightning shader.
     */
    shader_configuration?: LightningShaderConfiguration[];
}
interface LightningPriorityRule extends LightningRuleBaseBase {
    priority_bonus: int32;
}
interface LightningProperties {
    exemption_rules: LightningRuleBase[];
    /**
     * Cannot be an empty array. Names of {@link lightning entities | prototype:LightningPrototype}.
     */
    lightning_types: EntityID[];
    lightnings_per_chunk_per_tick: double;
    priority_rules: LightningPriorityRule[];
    search_radius: double;
}
interface LightningRuleBaseBase {
    string: string;
    type: string;
}
interface LightningShaderConfiguration {
    color: Color;
    distortion: float;
    power: float;
    thickness: float;
}
interface LimitChestTipTrigger extends CountBasedTipTrigger {
    type: 'limit-chest';
}
interface LineStyleSpecification extends BaseStyleSpecification {
    border?: BorderImageSet;
    type: 'line_style';
}
/**
 * @example ```
action =
{
  type = "line",
  range = 25,
  width = 0.5,

  range_effects =
  {
    type = "create-explosion",
    entity_name = "railgun-beam"
  },

  action_delivery =
  {
    type = "instant",
    target_effects =
    {
      type = "damage",
      damage = { amount = 100, type = "physical"}
    }
  }
}
```
 */
interface LineTriggerItem extends TriggerItem {
    range: double;
    range_effects?: TriggerEffect;
    type: 'line';
    width: double;
}
interface LinkedBeltStructure {
    back_patch?: Sprite4Way;
    direction_in?: Sprite4Way;
    direction_in_side_loading?: Sprite4Way;
    direction_out?: Sprite4Way;
    direction_out_side_loading?: Sprite4Way;
    front_patch?: Sprite4Way;
}
/**
 * The internal name of a game control (key binding).
 */
type LinkedGameControl = 'move-up' | 'move-down' | 'move-left' | 'move-right' | 'open-character-gui' | 'open-gui' | 'confirm-gui' | 'toggle-free-cursor' | 'mine' | 'build' | 'build-ghost' | 'super-forced-build' | 'clear-cursor' | 'pipette' | 'rotate' | 'reverse-rotate' | 'flip-horizontal' | 'flip-vertical' | 'pick-items' | 'drop-cursor' | 'show-info' | 'shoot-enemy' | 'shoot-selected' | 'next-weapon' | 'toggle-driving' | 'zoom-in' | 'zoom-out' | 'use-item' | 'alternative-use-item' | 'toggle-console' | 'copy-entity-settings' | 'paste-entity-settings' | 'controller-gui-logistics-tab' | 'controller-gui-character-tab' | 'controller-gui-crafting-tab' | 'toggle-rail-layer' | 'select-for-blueprint' | 'select-for-cancel-deconstruct' | 'select-for-super-forced-deconstruct' | 'reverse-select' | 'alt-reverse-select' | 'deselect' | 'cycle-blueprint-forwards' | 'cycle-blueprint-backwards' | 'focus-search' | 'larger-terrain-building-area' | 'smaller-terrain-building-area' | 'remove-pole-cables' | 'build-with-obstacle-avoidance' | 'add-station' | 'add-temporary-station' | 'rename-all' | 'fast-wait-condition' | 'drag-map' | 'move-tag' | 'place-in-chat' | 'place-ping' | 'pin' | 'activate-tooltip' | 'next-surface' | 'previous-surface' | 'cycle-quality-up' | 'cycle-quality-down' | 'craft' | 'craft-5' | 'craft-all' | 'cancel-craft' | 'cancel-craft-5' | 'cancel-craft-all' | 'pick-item' | 'stack-transfer' | 'inventory-transfer' | 'fast-entity-transfer' | 'cursor-split' | 'stack-split' | 'inventory-split' | 'fast-entity-split' | 'toggle-filter' | 'open-item' | 'copy-inventory-filter' | 'paste-inventory-filter' | 'show-quick-panel' | 'next-quick-panel-page' | 'previous-quick-panel-page' | 'next-quick-panel-tab' | 'previous-quick-panel-tab' | 'rotate-active-quick-bars' | 'next-active-quick-bar' | 'previous-active-quick-bar' | 'quick-bar-button-1' | 'quick-bar-button-2' | 'quick-bar-button-3' | 'quick-bar-button-4' | 'quick-bar-button-5' | 'quick-bar-button-6' | 'quick-bar-button-7' | 'quick-bar-button-8' | 'quick-bar-button-9' | 'quick-bar-button-10' | 'quick-bar-button-1-secondary' | 'quick-bar-button-2-secondary' | 'quick-bar-button-3-secondary' | 'quick-bar-button-4-secondary' | 'quick-bar-button-5-secondary' | 'quick-bar-button-6-secondary' | 'quick-bar-button-7-secondary' | 'quick-bar-button-8-secondary' | 'quick-bar-button-9-secondary' | 'quick-bar-button-10-secondary' | 'action-bar-select-page-1' | 'action-bar-select-page-2' | 'action-bar-select-page-3' | 'action-bar-select-page-4' | 'action-bar-select-page-5' | 'action-bar-select-page-6' | 'action-bar-select-page-7' | 'action-bar-select-page-8' | 'action-bar-select-page-9' | 'action-bar-select-page-10' | 'copy' | 'cut' | 'paste' | 'cycle-clipboard-forwards' | 'cycle-clipboard-backwards' | 'undo' | 'redo' | 'toggle-menu' | 'toggle-map' | 'close-menu' | 'open-technology-gui' | 'production-statistics' | 'logistic-networks' | 'toggle-blueprint-library' | 'open-trains-gui' | 'open-factoriopedia' | 'back' | 'forward' | 'pause-game' | 'confirm-message' | 'previous-technology' | 'previous-mod' | 'connect-train' | 'disconnect-train' | 'submit-feedback' | 'editor-next-variation' | 'editor-previous-variation' | 'editor-clone-item' | 'editor-delete-item' | 'editor-toggle-pause' | 'editor-tick-once' | 'editor-speed-up' | 'editor-speed-down' | 'editor-reset-speed' | 'editor-set-clone-brush-source' | 'editor-set-clone-brush-destination' | 'editor-switch-to-surface' | 'editor-remove-scripting-object' | 'debug-toggle-atlas-gui' | 'debug-toggle-gui-visibility' | 'debug-toggle-debug-settings' | 'debug-toggle-basic' | 'debug-reset-zoom' | 'debug-reset-zoom-2x' | 'toggle-gui-debug' | 'toggle-gui-style-view' | 'toggle-gui-shadows' | 'toggle-gui-glows' | 'open-prototypes-gui' | 'open-prototype-explorer-gui' | 'increase-ui-scale' | 'decrease-ui-scale' | 'reset-ui-scale' | 'slash-editor' | 'toggle-entity' | 'next-player-in-replay' | 'move-blueprint-absolute-grid-up' | 'move-blueprint-absolute-grid-down' | 'move-blueprint-absolute-grid-left' | 'move-blueprint-absolute-grid-right' | 'move-blueprint-entities-up' | 'move-blueprint-entities-down' | 'move-blueprint-entities-left' | 'move-blueprint-entities-right' | 'play-next-track' | 'play-previous-track' | 'pause-resume-music';
interface ListBoxStyleSpecification extends BaseStyleSpecification {
    item_style?: ButtonStyleSpecification;
    scroll_pane_style?: ScrollPaneStyleSpecification;
    type: 'list_box_style';
}
interface LoaderStructure {
    back_patch?: Sprite4Way;
    direction_in?: Sprite4Way;
    direction_out?: Sprite4Way;
    front_patch?: Sprite4Way;
    frozen_patch_in?: Sprite4Way;
    frozen_patch_out?: Sprite4Way;
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
 * @example ```
-- In the English translation, this will result in "No ammo"; in the Czech translation, it will result in "Bez munice":
localised_description = {"description.no-ammo"}
-- The "description.no-ammo" template contains no placeholders, so no further parameters are necessary.
```
 * @example ```
-- In the English translation, this will result in "80 hitpoints"; in the Japanese one, it will result in "80 HP":
localised_description = {"description.hitpoints", tostring(80)}
```
 * @example ```
-- This will result in "hello" in all translations:
localised_description = {"", "hello"}
```
 * @example ```
-- This will result in "Iron plate: 60" in the English translation and "Eisenplatte: 60" in the German translation.
localised_description = {"", {"item-name.iron-plate"}, ": ", tostring(60)}
```
 * @example ```
-- As an example of a localised string with fallback, consider this:
{"?", {"", {"entity-description.furnace"}, "\n"}, {"item-description.furnace"}, "optional fallback"}
-- If "entity-description.furnace" exists, it is concatenated with "\n" and returned. Otherwise, if
-- "item-description.furnace" exists, it is returned as-is. Otherwise, "optional fallback" is returned. If this
-- value wasn't specified, the translation result would be "Unknown key: 'item-description.furnace'".
```
 */
type LocalisedString = string | LocalisedString[];
type LogisticFilterIndex = uint16;
/**
 * The items generated when an {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype} is killed.
 */
interface LootItem {
    /**
     * Must be `> 0`.
     */
    count_max?: double;
    count_min?: double;
    /**
     * The item to spawn.
     */
    item: ItemID;
    /**
     * `0` is 0% and `1` is 100%. Must be `> 0`.
     */
    probability?: double;
}
interface LowPowerTipTrigger extends CountBasedTipTrigger {
    type: 'low-power';
}
interface MainSound {
    activity_to_speed_modifiers?: ActivityMatchingModifiers;
    activity_to_volume_modifiers?: ActivityMatchingModifiers;
    /**
     * Modifies how far a sound can be heard. Can only be 1 or lower, has to be a positive number.
     */
    audible_distance_modifier?: double;
    /**
     * Can't be used when `match_progress_to_activity` is `true`.
     */
    fade_in_ticks?: uint32;
    /**
     * Can't be used when `match_progress_to_activity` is `true`.
     */
    fade_out_ticks?: uint32;
    match_progress_to_activity?: bool;
    match_speed_to_activity?: bool;
    match_volume_to_activity?: bool;
    play_for_working_visualisations?: string[];
    /**
     * Modifies how often the sound is played.
     * @example ```
    probability = 1 / (3 * 60) -- average pause between the sound is 3 seconds
    ```
     */
    probability?: double;
    sound?: Sound;
    /**
     * Only used if {@link WorkingSound::persistent | prototype:WorkingSound::persistent} is `true`.
     */
    volume_smoothing_window_size?: uint32;
}
interface ManualTransferTipTrigger extends CountBasedTipTrigger {
    type: 'manual-transfer';
}
interface ManualWireDragTipTrigger extends CountBasedTipTrigger {
    match_type_only?: bool;
    source?: EntityID;
    target?: EntityID;
    type: 'manual-wire-drag';
    wire_type?: 'red' | 'green' | 'copper';
}
interface MapEditorConstants {
    cliff_editor_remove_cliffs_color: Color;
    clone_editor_brush_cursor_preview_tint: Color;
    clone_editor_brush_destination_color: Color;
    clone_editor_brush_source_color: Color;
    clone_editor_brush_world_preview_tint: Color;
    clone_editor_copy_destination_allowed_color: Color;
    clone_editor_copy_destination_not_allowed_color: Color;
    clone_editor_copy_source_color: Color;
    decorative_editor_selection_preview_radius: uint8;
    decorative_editor_selection_preview_tint: Color;
    force_editor_select_area_color: Color;
    script_editor_drag_area_color: Color;
    script_editor_select_area_color: Color;
    tile_editor_area_selection_color: Color;
    tile_editor_selection_preview_radius: uint8;
    tile_editor_selection_preview_tint: Color;
}
interface MapGenPreset {
    /**
     * If any setting is not set, it will use the default values.
     */
    advanced_settings?: AdvancedMapGenSettings;
    /**
     * If any setting is not set, it will use the default values.
     */
    basic_settings?: MapGenSettings;
    /**
     * Whether this is the default preset. If `true`, this preset may not have any other properties besides this and order.
     *
     * If no MapGenPreset has `default = true`, the preset selector will have a blank preset label, with default settings. The "blank" preset goes away when another preset is selected.
     */
    default?: bool;
    /**
     * Specifies the ordering in the {@link map generator GUI | https://wiki.factorio.com/Map_generator}.
     */
    order: Order;
}
interface MapGenPresetAsteroidSettings {
    max_ray_portals_expanded_per_tick?: uint32;
    spawning_rate?: double;
}
interface MapGenPresetDifficultySettings {
    technology_price_multiplier?: double;
}
interface MapGenPresetEnemyEvolutionSettings {
    /**
     * Percentual increase in the evolution factor for every destroyed spawner
     */
    destroy_factor?: double;
    enabled?: bool;
    /**
     * Percentual increase in the evolution factor for 1 pollution unit
     */
    pollution_factor?: double;
    /**
     * Percentual increase in the evolution factor for every second (60 ticks)
     */
    time_factor?: double;
}
interface MapGenPresetEnemyExpansionSettings {
    enabled?: bool;
    /**
     * In ticks.
     */
    max_expansion_cooldown?: uint32;
    /**
     * Distance in chunks from the furthest base around. This prevents expansions from reaching too far into the player's territory.
     */
    max_expansion_distance?: uint32;
    /**
     * Ticks to expand to a single position for a base is used. Cooldown is calculated as follows: `cooldown = lerp(max_expansion_cooldown, min_expansion_cooldown, -e^2 + 2 * e)` where `lerp` is the linear interpolation function, and e is the current evolution factor.
     */
    min_expansion_cooldown?: uint32;
    settler_group_max_size?: uint32;
    /**
     * Size of the group that goes to build new base (the game interpolates between min size and max size based on evolution factor).
     */
    settler_group_min_size?: uint32;
}
/**
 * The pollution settings, the values are for 60 ticks (1 second).
 */
interface MapGenPresetPollutionSettings {
    /**
     * Must be >= 0.1. Also known as absorption modifier.
     */
    ageing?: double;
    /**
     * Must be <= 0.25. Amount that is diffused to neighboring chunks.
     */
    diffusion_ratio?: double;
    enabled?: bool;
    /**
     * Must be >= 0.1.
     */
    enemy_attack_pollution_consumption_modifier?: double;
    min_pollution_to_damage_trees?: double;
    pollution_restored_per_tree_damage?: double;
}
interface MapGenSettings {
    autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>;
    /**
     * Each setting in this table maps the string type to the settings for that type.
     */
    autoplace_settings?: Record<'entity' | 'tile' | 'decorative', AutoplaceSettings>;
    cliff_settings?: CliffPlacementSettings;
    /**
     * Whether undefined `autoplace_controls` should fall back to the default controls or not.
     */
    default_enable_all_autoplace_controls?: bool;
    /**
     * Height of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     */
    height?: uint32;
    /**
     * If true, enemy creatures will not naturally spawn from spawners, map gen, or trigger effects.
     */
    no_enemies_mode?: bool;
    /**
     * If true, enemy creatures will not attack unless the player first attacks them.
     */
    peaceful_mode?: bool;
    /**
     * Map of property name (`"elevation"`, etc) to name of noise expression that will provide it. Entries may be omitted. A notable usage is changing autoplace behavior of an entity based on the preset, which cannot be read from a noise expression.
     */
    property_expression_names?: Record<string, string | bool | double>;
    /**
     * Read by the game, but not used or set in the GUI.
     */
    seed?: uint32;
    /**
     * Size of the starting area. The starting area only effects enemy placement, and has no effect on resources.
     */
    starting_area?: MapGenSize;
    /**
     * Array of the positions of the starting areas.
     */
    starting_points?: MapPosition[];
    territory_settings?: TerritorySettings;
    /**
     * Width of the map in tiles. Silently limited to 2 000 000, ie. +/- 1 million tiles from the center in both directions.
     */
    width?: uint32;
}
/**
 * A floating point number specifying an amount.
 *
 * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number:
 *
 * Each of the values in a triplet (such as "low", "small", and "poor") are synonymous. In-game the values can be set from `0.166` to `6` via the GUI (respective to the percentages), while `0` is used to disable the autoplace control.
 */
type MapGenSize = /**
 * Specifying a map gen dimension.
 */
float | /**
 * equivalent to `0`.
 */
'none' | /**
 * equivalent to `1/2`.
 */
'very-low' | /**
 * equivalent to `1/2`.
 */
'very-small' | /**
 * equivalent to `1/2`.
 */
'very-poor' | /**
 * equivalent to `1/sqrt(2)`.
 */
'low' | /**
 * equivalent to `1/sqrt(2)`.
 */
'small' | /**
 * equivalent to `1/sqrt(2)`.
 */
'poor' | /**
 * equivalent to `1`.
 */
'normal' | /**
 * equivalent to `1`.
 */
'medium' | /**
 * equivalent to `1`.
 */
'regular' | /**
 * equivalent to `sqrt(2)`.
 */
'high' | /**
 * equivalent to `sqrt(2)`.
 */
'big' | /**
 * equivalent to `sqrt(2)`.
 */
'good' | /**
 * equivalent to `2`.
 */
'very-high' | /**
 * equivalent to `2`.
 */
'very-big' | /**
 * equivalent to `2`.
 */
'very-good';
interface MapLocation {
    /**
     * Direction this connection point will be facing to.
     */
    direction: MapPosition;
    /**
     * Position relative to entity's position where the connection point will be located at.
     */
    position: MapPosition;
}
/**
 * Coordinates of a tile in a map. Positive x goes towards east, positive y goes towards south, and x is the first dimension in the array format.
 *
 * The coordinates are stored as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles.
 * @example ```
-- Explicit definition
{x = 5.5, y = 2}
{y = 2.25, x = 5.125}
```
 * @example ```
-- Shorthand
{1.625, 2.375}
```
 */
type MapPosition = {
    x: double;
    y: double;
} | [
    double,
    double
];
/**
 * `math.huge` represents the maximum possible tick.
 */
type MapTick = uint64;
type MaterialAmountType = double;
/**
 * Used by {@link TilePrototype | prototype:TilePrototype}.
 */
interface MaterialTextureParameters {
    /**
     * Frame count.
     */
    count: uint32;
    /**
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint32;
    picture: FileName;
    scale?: float;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType;
}
/**
 * A string that represents a math expression. The expression parser recognizes four basic token types (with their regex):
 *
 * - Whitespace: `[ \n\r\t]*`
 *
 * - Number: `(0x[0-9a-f]+|([0-9]+\.?[0-9]*|\.[0-9]+)(e-?[0-9]+)?)` (e.g. `3.2`, `100`, `.6`, `4.2e-5`, `0x2a5f`). Supports hexadecimal input and scientific notation for decimal numbers.
 *
 * - Operator: `+`, `-`, `*`, `/`, `^`, and `()` for brackets, which may be nested.
 *
 * - Identifier: The functions listed below and any variables listed where the expression is used.
 *
 * Identifiers are used to name functions and variables, which result in or represent numbers. The following functions are always available:
 *
 * - `abs(value)`: Returns absolute value of the given argument; i.e. if the argument is negative, it is inverted.
 *
 * - `log2(value)`: Returns a binary logarithm of the given value.
 *
 * - `sign(value)`: Returns `-1` for negative numbers, `0` for zero (regardless of sign), `1` for positive numbers
 *
 * - `max(value1, value2, ...)`: Returns the greater of the given values. Supports between 2 and 255 arguments.
 *
 * - `min(value1, value2, ...)`: Returns the smaller of the given values. Supports between 2 and 255 arguments.
 *
 * The property where the expression is used may provide variables. For example in {@link TechnologyUnit::count_formula | prototype:TechnologyUnit::count_formula} `L` and `l` may be used for the technology level.
 *
 * The formula is executed following the {@link BODMAS | https://en.wikipedia.org/wiki/Order_of_operations#Conventional_order} order (also known as PEMDAS).
 * @example ```
"2500 * (L - 3)"
```
 * @example ```
"(4e5 * (abs(speed) + 10.5)) / weight"
```
 */
type MathExpression = string;
interface MaxFailedAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier {
    type: 'max-failed-attempts-per-tick-per-construction-queue';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier extends SimpleModifier {
    type: 'max-successful-attempts-per-tick-per-construction-queue';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface MaximumFollowingRobotsCountModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'maximum-following-robots-count';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
/**
 * The mining properties of objects. For formulas for the mining time, see {@link mining | https://wiki.factorio.com/Mining}.
 * @example ```
minable = { mining_time = 0.55, result = "wood", count = 4, mining_particle = "wooden-particle" }
```
 * @example ```
minable = {
  mining_time = 1,
  results =
  {
    {
      type = "fluid",
      name = "crude-oil",
      amount = 10
    }
  }
}
```
 */
interface MinableProperties {
    /**
     * Only loaded if `results` is not defined.
     *
     * How many of result are dropped.
     */
    count?: uint16;
    /**
     * The amount of fluid that is used up when this object is mined. If this is > 0, this object cannot be mined by hand.
     */
    fluid_amount?: FluidAmount;
    /**
     * Name of a {@link ParticlePrototype | prototype:ParticlePrototype}. Which set of particles to use.
     */
    mining_particle?: ParticleID;
    /**
     * How many seconds are required to mine this object at 1 mining speed.
     */
    mining_time: double;
    mining_trigger?: Trigger;
    /**
     * Name of a {@link FluidPrototype | prototype:FluidPrototype}. The fluid that is used up when this object is mined.
     */
    required_fluid?: FluidID;
    /**
     * Only loaded if `results` is not defined.
     *
     * Which item is dropped when this is mined. Cannot be empty. If you want the entity to not be minable, don't specify the minable properties, if you want it to be minable with no result item, don't specify the result at all.
     */
    result?: ItemID;
    /**
     * The items that are returned when this object is mined.
     */
    results?: ProductPrototype[];
}
interface MineEntityTechnologyTrigger {
    entity: EntityID;
    type: 'mine-entity';
}
interface MineItemByRobotTipTrigger extends CountBasedTipTrigger {
    type: 'mine-item-by-robot';
}
interface MinimapStyleSpecification extends EmptyWidgetStyleSpecificationBase {
    type: 'minimap_style';
}
/**
 * Used by {@link MiningDrillPrototype | prototype:MiningDrillPrototype}.
 */
interface MiningDrillGraphicsSet extends WorkingVisualisations {
    animation_progress?: float;
    /**
     * Render layer(s) for all directions of the circuit connectors.
     */
    circuit_connector_layer?: RenderLayer | CircuitConnectorLayer;
    /**
     * Secondary draw order(s) for all directions of the circuit connectors.
     */
    circuit_connector_secondary_draw_order?: int8 | CircuitConnectorSecondaryDrawOrder;
    drilling_vertical_movement_duration?: uint16;
    frozen_patch?: Sprite4Way;
    reset_animation_when_frozen?: bool;
}
interface MiningDrillProductivityBonusModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'mining-drill-productivity-bonus';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface MiningWithFluidModifier extends BoolModifier {
    type: 'mining-with-fluid';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
type Mirroring = 'horizontal' | 'vertical' | 'diagonal-pos' | 'diagonal-neg';
/**
 * The user-set value of a startup {@link mod setting | https://wiki.factorio.com/Tutorial:Mod_settings}.
 */
interface ModSetting {
    /**
     * The value of the mod setting. The type depends on the kind of setting.
     */
    value: int32 | double | bool | string | Color;
}
/**
 * The effect that is applied when a {@link TechnologyPrototype | prototype:TechnologyPrototype} is researched.
 *
 * Loaded as one of the {@link BaseModifier | prototype:BaseModifier} extensions, based on the value of the `type` key.
 */
type Modifier = /**
 * Loaded when the `type` is `"inserter-stack-size-bonus"`.
 */
InserterStackSizeBonusModifier | /**
 * Loaded when the `type` is `"bulk-inserter-capacity-bonus"`.
 */
BulkInserterCapacityBonusModifier | /**
 * Loaded when the `type` is `"laboratory-speed"`.
 */
LaboratorySpeedModifier | /**
 * Loaded when the `type` is `"character-logistic-trash-slots"`.
 */
CharacterLogisticTrashSlotsModifier | /**
 * Loaded when the `type` is `"maximum-following-robots-count"`.
 */
MaximumFollowingRobotsCountModifier | /**
 * Loaded when the `type` is `"worker-robot-speed"`.
 */
WorkerRobotSpeedModifier | /**
 * Loaded when the `type` is `"worker-robot-storage"`.
 */
WorkerRobotStorageModifier | /**
 * Loaded when the `type` is `"turret-attack"`.
 */
TurretAttackModifier | /**
 * Loaded when the `type` is `"ammo-damage"`.
 */
AmmoDamageModifier | /**
 * Loaded when the `type` is `"give-item"`.
 */
GiveItemModifier | /**
 * Loaded when the `type` is `"gun-speed"`.
 */
GunSpeedModifier | /**
 * Loaded when the `type` is `"unlock-recipe"`.
 */
UnlockRecipeModifier | /**
 * Loaded when the `type` is `"character-crafting-speed"`.
 */
CharacterCraftingSpeedModifier | /**
 * Loaded when the `type` is `"character-mining-speed"`.
 */
CharacterMiningSpeedModifier | /**
 * Loaded when the `type` is `"character-running-speed"`.
 */
CharacterRunningSpeedModifier | /**
 * Loaded when the `type` is `"character-build-distance"`.
 */
CharacterBuildDistanceModifier | /**
 * Loaded when the `type` is `"character-item-drop-distance"`.
 */
CharacterItemDropDistanceModifier | /**
 * Loaded when the `type` is `"character-reach-distance"`.
 */
CharacterReachDistanceModifier | /**
 * Loaded when the `type` is `"character-resource-reach-distance"`.
 */
CharacterResourceReachDistanceModifier | /**
 * Loaded when the `type` is `"character-item-pickup-distance"`.
 */
CharacterItemPickupDistanceModifier | /**
 * Loaded when the `type` is `"character-loot-pickup-distance"`.
 */
CharacterLootPickupDistanceModifier | /**
 * Loaded when the `type` is `"character-inventory-slots-bonus"`.
 */
CharacterInventorySlotsBonusModifier | /**
 * Loaded when the `type` is `"deconstruction-time-to-live"`.
 */
DeconstructionTimeToLiveModifier | /**
 * Loaded when the `type` is `"max-failed-attempts-per-tick-per-construction-queue"`.
 */
MaxFailedAttemptsPerTickPerConstructionQueueModifier | /**
 * Loaded when the `type` is `"max-successful-attempts-per-tick-per-construction-queue"`.
 */
MaxSuccessfulAttemptsPerTickPerConstructionQueueModifier | /**
 * Loaded when the `type` is `"character-health-bonus"`.
 */
CharacterHealthBonusModifier | /**
 * Loaded when the `type` is `"mining-drill-productivity-bonus"`.
 */
MiningDrillProductivityBonusModifier | /**
 * Loaded when the `type` is `"train-braking-force-bonus"`.
 */
TrainBrakingForceBonusModifier | /**
 * Loaded when the `type` is `"worker-robot-battery"`.
 */
WorkerRobotBatteryModifier | /**
 * Loaded when the `type` is `"laboratory-productivity"`.
 */
LaboratoryProductivityModifier | /**
 * Loaded when the `type` is `"follower-robot-lifetime"`.
 */
FollowerRobotLifetimeModifier | /**
 * Loaded when the `type` is `"artillery-range"`.
 */
ArtilleryRangeModifier | /**
 * Loaded when the `type` is `"nothing"`.
 */
NothingModifier | /**
 * Loaded when the `type` is `"character-logistic-requests"`.
 */
CharacterLogisticRequestsModifier | /**
 * Loaded when the `type` is `"vehicle-logistics"`.
 */
VehicleLogisticsModifier | /**
 * Loaded when the `type` is `"unlock-space-location"`.
 */
UnlockSpaceLocationModifier | /**
 * Loaded when the `type` is `"unlock-quality"`.
 */
UnlockQualityModifier | /**
 * Loaded when the `type` is `"unlock-space-platforms"`.
 */
SpacePlatformsModifier | /**
 * Loaded when the `type` is `"unlock-circuit-network"`.
 */
CircuitNetworkModifier | /**
 * Loaded when the `type` is `"cargo-landing-pad-count"`.
 */
CargoLandingPadLimitModifier | /**
 * Loaded when the `type` is `"change-recipe-productivity"`.
 */
ChangeRecipeProductivityModifier | /**
 * Loaded when the `type` is `"cliff-deconstruction-enabled"`.
 */
CliffDeconstructionEnabledModifier | /**
 * Loaded when the `type` is `"mining-with-fluid"`.
 */
MiningWithFluidModifier | /**
 * Loaded when the `type` is `"rail-support-on-deep-oil-ocean"`.
 */
RailSupportOnDeepOilOceanModifier | /**
 * Loaded when the `type` is `"rail-planner-allow-elevated-rails"`.
 */
RailPlannerAllowElevatedRailsModifier | /**
 * Loaded when the `type` is `"beacon-distribution"`.
 */
BeaconDistributionModifier | /**
 * Loaded when the `type` is `"create-ghost-on-entity-death"`.
 */
CreateGhostOnEntityDeathModifier | /**
 * Loaded when the `type` is `"belt-stack-size-bonus"`.
 */
BeltStackSizeBonusModifier;
/**
 * A dictionary of mod names to mod versions of all active mods. It can be used to adjust mod functionality based on the presence of other mods.
 * @example ```
-- executes pineapple only when the pizza mod is active
if mods["pizza"] then
  pineapple()
end
```
 * @example ```
-- when the only active mod is the space-age mod with version 1.2.0
-- then this logs
for name, version in pairs(mods) do
  log(name .. " version " .. version) -- => space-age version 1.2.0
end
```
 */
type Mods = Record<string, string>;
/**
 * The name of a {@link ModuleCategory | prototype:ModuleCategory}.
 * @example ```
"productivity"
```
 * @example ```
"efficiency"
```
 */
type ModuleCategoryID = string;
type ModuleTint = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'none';
interface ModuleTransferTipTrigger extends CountBasedTipTrigger {
    module: ItemID;
    type: 'module-transfer';
}
/**
 * The name of a {@link MouseCursor | prototype:MouseCursor}.
 * @example ```
"selection-tool-cursor"
```
 */
type MouseCursorID = string;
/**
 * Defines how this entity connects to its neighbours
 */
interface NeighbourConnectable {
    /**
     * If the connection positions and directions will be affected by entity's direction.
     */
    affected_by_direction?: bool;
    /**
     * Definitions of the connection points.
     */
    connections: NeighbourConnectableConnectionDefinition[];
    /**
     * Distance by which connection point is shifted along its direction to select a position where neighbor will be searched.
     */
    neighbour_search_distance?: float;
}
type NeighbourConnectableConnectionCategory = string;
/**
 * In order for 2 NeighbourConnectable to connect they need to share a connection point at the same position with opposite direction and both accept neighbor's category.
 */
interface NeighbourConnectableConnectionDefinition {
    /**
     * Name of a category this connection should belong to. Used when deciding which connections are allowed to connect to this.
     *
     * Cannot be an empty string.
     */
    category: NeighbourConnectableConnectionCategory;
    location: MapLocation;
    /**
     * Table of neighbor categories this connection will connect to.
     */
    neighbour_category?: NeighbourConnectableConnectionCategory[];
}
interface NestedTriggerEffectItem extends TriggerEffectItem {
    action: Trigger;
    type: 'nested-result';
}
/**
 * A boolean or double as simple values or a string that represents a math expression. The expression parser recognizes five basic token types (with their regex):
 *
 * - **Whitespace:** `[ \n\r\t]*`
 *
 * - **Identifier:** `[a-zA-Z_][a-zA-Z0-9_:]*` (e.g. cat_bar123)
 *
 * - **Number:** `(0x[0-9a-f]+|([0-9]+\.?[0-9]*|\.[0-9]+)(e-?[0-9]+)?)` (e.g. `3.2`, `100`, `.6`, `4.2e-5`, `0x2a5f`). Supports hexadecimal input and scientific notation for decimal numbers.
 *
 * - **String:** `("[^"]*"|'[^']*')` (e.g. `"cat bar 123"`, `'control-setting:copper-ore'`)
 *
 * - **Operator:** See the list below
 *
 * Identifiers are used to name functions and variables. The built-in functions and variables are documented in the {@link auxiliary docs | runtime:noise-expressions}. Mods can define their own noise expressions which can be used as variables and functions. The entry points for this are {@link NamedNoiseFunction | prototype:NamedNoiseFunction} and {@link NamedNoiseExpression | prototype:NamedNoiseExpression} as well as local functions and expressions.
 *
 * All functions accept both named and positional arguments. To differentiate between these function calls, positional arguments start/end with `(`/`)` and named arguments with `{`/`}`, e.g. `clamp(x, -1, 1)` and `clamp{min = -1, max = 1, value = x}` are the same function call. Because of this, positional arguments can't be mixed with named arguments. A function can't have more than 255 parameters.
 *
 * The following operators are available, ordered by precedence:
 *
 * - `x^y`: Exponentiation (fast, inaccurate), equivalent to the built-in `pow(x, y)` noise function
 *
 * - `+x`, `-x`, `~x`: Unary plus and minus and unary bitwise not
 *
 * - `x*y`, `x/y`, `x%y`, `x%%y`: Multiplication and division, modulo and remainder.
 *
 * - `x+y`, `x-y`: Addition and subtraction
 *
 * - `x<y`, `x<=y`, `x>y`, `x>=y`: Less than, less than or equal, greater than, greater than or equal
 *
 * - `x==y`, `x~=y`, `x!=y`: Equal to and not equal to (Lua and C++ syntax)
 *
 * - `x&y`: Bitwise and
 *
 * - `x~y`: Bitwise xor
 *
 * - `x|y`: Bitwise or
 *
 * Modulo is implemented as `x - floor(x / y) * y` and remainder uses C++ {@link `fmod(x, y)` | https://en.cppreference.com/w/cpp/numeric/math/fmod} function.
 *
 * The boolean operators (less than, less than or equal, equal, not equal, greater than, greater than or equal) take two numbers and return 0 for false or 1 for true.
 *
 * The bitwise operators convert single-precision floating-point numbers to signed 32-bit integers before computing the result.
 * @example ```
"distance_from_nearest_point{x = x, y = y, points = starting_positions}"
```
 * @example ```
"clamp(x, -1, 1)"
```
 */
type NoiseExpression = string | bool | double;
/**
 * The advantage of noise functions over {@link noise expressions | prototype:NoiseExpression} is that they have parameters.
 */
interface NoiseFunction {
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
interface NothingModifier extends BaseModifier {
    effect_description?: LocalisedString;
    type: 'nothing';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface OffshorePumpGraphicsSet {
    /**
     * Rendered in "object" layer, with secondary draw order 0.
     */
    animation?: Animation4Way;
    /**
     * Rendered in layer specified by `base_render_layer`, with secondary draw order 0.
     */
    base_pictures?: Sprite4Way;
    base_render_layer?: RenderLayer;
    /**
     * Rendered in "object" layer, with secondary draw order 20.
     */
    fluid_animation?: Animation4Way;
    /**
     * Rendered in "object" layer, with secondary draw order 40.
     */
    glass_pictures?: Sprite4Way;
    underwater_layer_offset?: int8;
    /**
     * Drawn by tile renderer when water animation is enabled.
     */
    underwater_pictures?: Sprite4Way;
}
interface OrTipTrigger {
    /**
     * If at least one of the triggers is fulfilled, this trigger is considered fulfilled.
     */
    triggers: TipTrigger[];
    type: 'or';
}
/**
 * The order property is a simple `string`. When the game needs to sort prototypes (of the same type), it looks at their order properties and sorts those alphabetically. A prototype with an order string of `"a"` will be listed before other prototypes with order string `"b"` or `"c"`. The `"-"` or `"[]"` structures that can be found in vanilla order strings do *not* have any special meaning.
 *
 * The alphabetical sorting uses {@link lexicographical comparison | https://en.wikipedia.org/wiki/Lexicographic_order} to determine if a given prototype is shown before or after another. If the order strings are equal then the game falls back to comparing the prototype names to determine order.
 * @example ```
{  -- This item will be shown after the below one
  type = "item",
  name = "item-1",
  order = "ad",
},
{  -- This item will be shown before the above one
  type = "item",
  name = "item-2",
  order = "ab",
}
```
 * @example ```
-- The order of special characters can be identified by looking at a UTF-8 character list.
-- This is the order some common characters are sorted in:
"-"
"0"
"9"
"A"
"Z"
"["
"]"
"a"
"z"
-- The following order strings would be ordered thusly then:
"a"
"ab"
"azaaa"  -- "b" is sorted before "z", so "ab" comes before "az", regardless of the letters following it
"b"
"b-zzz"
"b[aaa]" -- "[" is sorted after "-" in UTF-8
"bb"  -- "b" is sorted after "[" in UTF-8
]
```
 */
type Order = string;
interface OrientedCliffPrototype {
    collision_bounding_box: BoundingBox;
    pictures?: SpriteVariations;
    pictures_lower?: SpriteVariations;
    render_layer?: RenderLayer;
}
interface OrientedCliffPrototypeSet {
    east_to_none: OrientedCliffPrototype;
    east_to_north: OrientedCliffPrototype;
    east_to_south: OrientedCliffPrototype;
    east_to_west: OrientedCliffPrototype;
    none_to_east: OrientedCliffPrototype;
    none_to_north: OrientedCliffPrototype;
    none_to_south: OrientedCliffPrototype;
    none_to_west: OrientedCliffPrototype;
    north_to_east: OrientedCliffPrototype;
    north_to_none: OrientedCliffPrototype;
    north_to_south: OrientedCliffPrototype;
    north_to_west: OrientedCliffPrototype;
    south_to_east: OrientedCliffPrototype;
    south_to_none: OrientedCliffPrototype;
    south_to_north: OrientedCliffPrototype;
    south_to_west: OrientedCliffPrototype;
    west_to_east: OrientedCliffPrototype;
    west_to_none: OrientedCliffPrototype;
    west_to_north: OrientedCliffPrototype;
    west_to_south: OrientedCliffPrototype;
}
interface OtherColors {
    bar?: ElementImageSet;
    color?: Color;
    less_than: double;
}
/**
 * The name of a {@link ParticlePrototype | prototype:ParticlePrototype}.
 * @example ```
"beacon-metal-particle-small"
```
 * @example ```
"wooden-particle"
```
 */
type ParticleID = string;
interface PasteEntitySettingsTipTrigger extends CountBasedTipTrigger {
    match_type_only?: bool;
    source?: EntityID;
    target?: EntityID;
    type: 'paste-entity-settings';
}
interface PathFinderSettings {
    /**
     * When looking for path from cache make sure it doesn't end too far from requested end. This is typically higher than accept value for the start because the end target can be moving.
     */
    cache_accept_path_end_distance_ratio: double;
    /**
     * When looking for path from cache make sure it doesn't start too far from requested start in relative distance terms.
     */
    cache_accept_path_start_distance_ratio: double;
    /**
     * When searching for connection to path cache path, search at most for this number of steps times the initial estimate.
     */
    cache_max_connect_to_cache_steps_multiplier: uint32;
    /**
     * When assigning rating to the best path this * end distances is considered. This is typically higher than value for the start to achieve better path end quality.
     */
    cache_path_end_distance_rating_multiplier: double;
    /**
     * When assigning rating to the best path this * start distances is considered.
     */
    cache_path_start_distance_rating_multiplier: double;
    /**
     * This is the "threshold" to decide what is short and what is not.
     */
    direct_distance_to_consider_short_request: uint32;
    /**
     * Enemy is not moving/or is too close and has different destination.
     */
    enemy_with_different_destination_collision_penalty: double;
    /**
     * Collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box.
     */
    extended_collision_penalty: double;
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is 2, which means symmetric search.
     */
    fwd2bwd_ratio: uint32;
    /**
     * Simplification for now; collision with everything else is this.
     */
    general_entity_collision_penalty: double;
    /**
     * Collision penalty for successors of positions that require destroy to reach.
     */
    general_entity_subsequent_collision_penalty: double;
    /**
     * When comparing nodes in open which one to check next, heuristic value is multiplied by this ratio. The higher the number the more is the search directed directly towards the goal.
     */
    goal_pressure_ratio: double;
    /**
     * If there is a moving unit further than this we don't really care.
     */
    ignore_moving_enemy_collision_distance: double;
    /**
     * Minimal distance to goal for path to be searched in long path cache.
     */
    long_cache_min_cacheable_distance: double;
    long_cache_size: uint32;
    /**
     * Up until this amount any client will be served by the path finder (no estimate on the path length).
     */
    max_clients_to_accept_any_new_request: uint32;
    /**
     * From max_clients_to_accept_any_new_request till this one only those that have a short estimate will be served.
     */
    max_clients_to_accept_short_new_request: uint32;
    /**
     * When this is exhausted no more requests are allowed, at the moment the first path to exhaust this will be finished (even if it is hundreds of steps).
     */
    max_steps_worked_per_tick: double;
    max_work_done_per_tick: uint32;
    /**
     * Absolute minimum of steps that will be performed for every path find request no matter what.
     */
    min_steps_to_check_path_find_termination: uint32;
    /**
     * Same as cache_accept_path_end_distance_ratio, but used for negative cache queries.
     */
    negative_cache_accept_path_end_distance_ratio: double;
    /**
     * Same as cache_accept_path_start_distance_ratio, but used for negative cache queries.
     */
    negative_cache_accept_path_start_distance_ratio: double;
    negative_path_cache_delay_interval: uint32;
    overload_levels: uint32[];
    overload_multipliers: double[];
    /**
     * Minimal number of algorithm steps for path to be inserted into the short path cache.
     */
    short_cache_min_algo_steps_to_cache: uint32;
    /**
     * Minimal distance to goal for path to be searched in short path cache.
     */
    short_cache_min_cacheable_distance: double;
    /**
     * Number of elements in the cache.
     */
    short_cache_size: uint32;
    /**
     * If a short request takes more than this many steps, it will be rescheduled as a long request.
     */
    short_request_max_steps: uint32;
    /**
     * How many steps will be allocated to short requests each tick, as a ratio of all available steps per tick.
     */
    short_request_ratio: double;
    /**
     * Somewhere along the path is stuck enemy we need to avoid. This is mainly to handle situations when units have arrived and are attacking the target then units further in the back will use this and run around the target.
     */
    stale_enemy_with_same_destination_collision_penalty: double;
    /**
     * If the current actual cost from start is higher than this times estimate of start to goal then path finding is terminated.
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: double;
    use_path_cache: bool;
}
interface PerceivedPerformance {
    maximum?: double;
    /**
     * Must be less than or equal to `maximum`.
     */
    minimum?: double;
    performance_to_activity_rate?: double;
}
type PersistentWorldAmbientSoundDefinition = {
    sound: Sound;
} | Sound;
interface PersistentWorldAmbientSoundsDefinition {
    /**
     * Mandatory if `crossfade` is defined.
     */
    base_ambience?: PersistentWorldAmbientSoundDefinition | PersistentWorldAmbientSoundDefinition[];
    crossfade?: PersistentWorldAmbientSoundsDefinitionCrossfade;
    semi_persistent?: SemiPersistentWorldAmbientSoundDefinition | SemiPersistentWorldAmbientSoundDefinition[];
    /**
     * Mandatory if `crossfade` is defined.
     */
    wind?: PersistentWorldAmbientSoundDefinition | PersistentWorldAmbientSoundDefinition[];
}
type PersistentWorldAmbientSoundsDefinitionCrossfade = Fade & {
    order: [
        'wind' | 'base_ambience',
        'wind' | 'base_ambience'
    ];
};
interface PipeConnectionDefinition {
    /**
     * Connection category bitmask makes it possible to define different categories of pipe connections that are not able to connect with each other. For example if a mod should have a "steam pipes" and "cryogenic pipes" category and they should not connect with each other.
     *
     * In case of a normal connection, a bitmask may contain multiple bits set. This allows to create a mod where pipes of different categories would not connect to each other while still making it possible for crafting machines and other entities to connect to any of the specified pipes.
     *
     * By default, all pipe connections have the `"default"` category. So a pipe that should connect to a new category and standard pipes can have the `connection_category = {"my-new-pipe", "default"}`.
     *
     * May have at most one category when `connection_type` is `"underground"`.
     *
     * Only loaded if `connection_type` is `"normal"` or `"underground"`.
     */
    connection_category?: string | string[];
    /**
     * Selects set of rules to follow when looking for other FluidBox this connection should connect to.
     */
    connection_type?: PipeConnectionType;
    /**
     * Primary direction this connection points to when entity direction is north and the entity is not mirrored. When entity is rotated or mirrored, effective direction will be computed based on this value.
     *
     * Only loaded, and mandatory if `connection_type` is `"normal"` or `"underground"`.
     */
    direction?: Direction;
    /**
     * Array of the {@link WorkingVisualisation::name | prototype:WorkingVisualisation::name} of working visualisations to enable when this pipe connection is present.
     *
     * If the owning fluidbox has {@link draw_only_when_connected | prototype:FluidBox::draw_only_when_connected} set to `true`, then the working visualisation is only enabled if this pipe connection is *connected*.
     */
    enable_working_visualisations?: string[];
    /**
     * Allowed direction of fluid flow at this connection. Pipeline entities (`pipe`, `pipe-to-ground`, and `storage-tank`) do not support this property.
     */
    flow_direction?: 'input-output' | 'input' | 'output';
    /**
     * Expected to be unique inside of a single entity. Used to uniquely identify where a linked connection should connect to.
     *
     * Only loaded, and mandatory if `connection_type` is `"linked"`.
     */
    linked_connection_id?: FluidBoxLinkedConnectionID;
    /**
     * Only loaded if `connection_type` is `"underground"`.
     */
    max_distance_tint?: Color;
    /**
     * Only loaded if `connection_type` is `"underground"`.
     */
    max_underground_distance?: uint8;
    /**
     * Position relative to entity's center where pipes can connect to this fluidbox regardless the directions of entity.
     *
     * Only loaded if `connection_type` is `"normal"` or `"underground"`.
     */
    position?: MapPosition;
    /**
     * The 4 separate positions corresponding to the 4 main directions of entity. Positions must correspond to directions going one after another.
     *
     * This is used for example by "pumpjack" where connections are consistently near bottom-left corner (2 directions) or near top-right corner (2 directions).
     *
     * Only loaded, and mandatory if `position` is not defined and if `connection_type` is `"normal"` or `"underground"`.
     */
    positions?: [
        MapPosition,
        MapPosition,
        MapPosition,
        MapPosition
    ];
    /**
     * An underground connection may be defined as colliding with tiles in which case if any tile is placed between underground ends the connection will not be established.
     *
     * In order to connect, both ends must have the same collision mask specified.
     *
     * Only loaded if `connection_type` is `"underground"`.
     */
    underground_collision_mask?: CollisionMaskConnector;
}
type PipeConnectionType = /**
 * 2 connections are required to be adjacent tiles next to each other on their respective directions.
 */
'normal' | /**
 * Allows distant connection up to a certain limit. Those connections may be blocked by tiles.
 */
'underground' | /**
 * For mods, connections between entities have to be explicitly requested by script.
 */
'linked';
interface PipePictures {
    corner_down_left?: Sprite;
    corner_down_left_disabled_visualization?: Sprite;
    corner_down_left_frozen?: Sprite;
    corner_down_left_visualization?: Sprite;
    corner_down_right?: Sprite;
    corner_down_right_disabled_visualization?: Sprite;
    corner_down_right_frozen?: Sprite;
    corner_down_right_visualization?: Sprite;
    corner_up_left?: Sprite;
    corner_up_left_disabled_visualization?: Sprite;
    corner_up_left_frozen?: Sprite;
    corner_up_left_visualization?: Sprite;
    corner_up_right?: Sprite;
    corner_up_right_disabled_visualization?: Sprite;
    corner_up_right_frozen?: Sprite;
    corner_up_right_visualization?: Sprite;
    cross?: Sprite;
    cross_disabled_visualization?: Sprite;
    cross_frozen?: Sprite;
    cross_visualization?: Sprite;
    ending_down?: Sprite;
    ending_down_disabled_visualization?: Sprite;
    ending_down_frozen?: Sprite;
    ending_down_visualization?: Sprite;
    ending_left?: Sprite;
    ending_left_disabled_visualization?: Sprite;
    ending_left_frozen?: Sprite;
    ending_left_visualization?: Sprite;
    ending_right?: Sprite;
    ending_right_disabled_visualization?: Sprite;
    ending_right_frozen?: Sprite;
    ending_right_visualization?: Sprite;
    ending_up?: Sprite;
    ending_up_disabled_visualization?: Sprite;
    ending_up_frozen?: Sprite;
    ending_up_visualization?: Sprite;
    fluid_background?: Sprite;
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when the fluid's temperature is above {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    gas_flow?: Animation;
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `2/3` and the fluid's temperature is below {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    high_temperature_flow?: Sprite;
    horizontal_window_background?: Sprite;
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is less than or equal to `1/3` and the fluid's temperature is below {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    low_temperature_flow?: Sprite;
    /**
     * Visualizes the flow of the fluid in the pipe. Drawn when `(fluid_temp - fluid_min_temp) / (fluid_max_temp - fluid_min_temp)` is larger than `1/3` and less than or equal to `2/3` and the fluid's temperature is below {@link FluidPrototype::gas_temperature | prototype:FluidPrototype::gas_temperature}.
     */
    middle_temperature_flow?: Sprite;
    straight_horizontal?: Sprite;
    straight_horizontal_disabled_visualization?: Sprite;
    straight_horizontal_frozen?: Sprite;
    straight_horizontal_visualization?: Sprite;
    straight_horizontal_window?: Sprite;
    straight_horizontal_window_disabled_visualization?: Sprite;
    straight_horizontal_window_frozen?: Sprite;
    straight_horizontal_window_visualization?: Sprite;
    straight_vertical?: Sprite;
    straight_vertical_disabled_visualization?: Sprite;
    straight_vertical_frozen?: Sprite;
    straight_vertical_single?: Sprite;
    straight_vertical_single_disabled_visualization?: Sprite;
    straight_vertical_single_frozen?: Sprite;
    straight_vertical_single_visualization?: Sprite;
    straight_vertical_visualization?: Sprite;
    straight_vertical_window?: Sprite;
    straight_vertical_window_disabled_visualization?: Sprite;
    straight_vertical_window_frozen?: Sprite;
    straight_vertical_window_visualization?: Sprite;
    t_down?: Sprite;
    t_down_disabled_visualization?: Sprite;
    t_down_frozen?: Sprite;
    t_down_visualization?: Sprite;
    t_left?: Sprite;
    t_left_disabled_visualization?: Sprite;
    t_left_frozen?: Sprite;
    t_left_visualization?: Sprite;
    t_right?: Sprite;
    t_right_disabled_visualization?: Sprite;
    t_right_frozen?: Sprite;
    t_right_visualization?: Sprite;
    t_up?: Sprite;
    t_up_disabled_visualization?: Sprite;
    t_up_frozen?: Sprite;
    t_up_visualization?: Sprite;
    vertical_window_background?: Sprite;
}
interface PlaceAsTile {
    condition: CollisionMaskConnector;
    condition_size: uint32;
    invert?: bool;
    result: TileID;
    tile_condition?: TileID[];
}
interface PlaceEquipmentTipTrigger extends CountBasedTipTrigger {
    equipment?: EquipmentID;
    type: 'place-equipment';
}
interface PlanTrainPathTipTrigger {
    distance: double;
    type: 'plan-train-path';
}
interface PlanetPrototypeMapGenSettings {
    autoplace_controls?: Record<AutoplaceControlID, FrequencySizeRichness>;
    /**
     * Each setting in this table maps the string type to the settings for that type.
     */
    autoplace_settings?: Record<'entity' | 'tile' | 'decorative', AutoplaceSettings>;
    /**
     * Used for showing the planet icon in map generator GUI next to aux climate control.
     */
    aux_climate_control?: bool;
    cliff_settings?: CliffPlacementSettings;
    /**
     * Used for showing the planet icon in map generator GUI next to moisture climate control.
     */
    moisture_climate_control?: bool;
    /**
     * Map of property name (e.g. "elevation") to name of noise expression that will provide it. Entries may be omitted. A notable usage is changing autoplace behavior of an entity based on the preset, which cannot be read from a noise expression.
     */
    property_expression_names?: Record<string, string | bool | double>;
    territory_settings?: TerritorySettings;
}
/**
 * Defines when controller vibrations should be played.
 */
type PlayFor = /**
 * Play the vibration only if it was caused by the player. For example when shooting a gun, vibration will play when the character shoots but not when a turret shoots.
 */
'character_actions' | /**
 * Always play the vibration. Useful for example for explosions.
 */
'everything';
interface PlaySoundTriggerEffectItem extends TriggerEffectItem {
    /**
     * Negative values are silently clamped to 0.
     */
    audible_distance_modifier?: float;
    /**
     * Negative values are silently clamped to 0.
     */
    max_distance?: float;
    /**
     * Negative values are silently clamped to 0.
     */
    min_distance?: float;
    play_on_target_position?: bool;
    sound: Sound;
    type: 'play-sound';
    /**
     * Negative values are silently clamped to 0.
     */
    volume_modifier?: float;
}
interface PlayerColorData {
    chat_color: Color;
    name: string;
    player_color: Color;
}
type PlayerInputMethodFilter = 'all' | 'keyboard_and_mouse' | 'game_controller';
interface PlumeEffect extends StatelessVisualisation {
    age_discrimination?: int8;
}
interface PlumesSpecification {
    max_probability?: float;
    max_y_offset?: float;
    min_probability?: float;
    min_y_offset?: float;
    /**
     * Array may not be empty and may at most have 255 elements.
     *
     * Non-zero `period` needs to be provided. May not have `positions` or `particle_tick_offset`.
     */
    stateless_visualisations?: PlumeEffect | PlumeEffect[];
}
/**
 * One frame in time for a Bezier interpolation.
 */
interface PodAnimationProcessionBezierControlPoint {
    /**
     * the frame of the pod animation played.
     */
    frame: float;
    timestamp: MapTick;
}
interface PodAnimationProcessionLayer {
    frames: PodAnimationProcessionBezierControlPoint[];
    graphic?: ProcessionGraphic;
    type: 'pod-animation';
}
/**
 * One frame in time for a Bezier interpolation.
 */
interface PodDistanceTraveledProcessionBezierControlPoint {
    /**
     * `distance` and `distance_t` interpolate a double smoothly over time.
     */
    distance?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    distance_t?: double;
    /**
     * Mandatory if `distance` is defined.
     */
    timestamp?: MapTick;
}
interface PodDistanceTraveledProcessionLayer {
    contribute_to_distance_traveled?: bool;
    distance_traveled_contribution?: float;
    frames: PodDistanceTraveledProcessionBezierControlPoint[];
    /**
     * The group this layer belongs to, for inheritance.
     */
    reference_group?: ProcessionLayerInheritanceGroupID;
    type: 'pod-distance-traveled';
}
/**
 * One frame in time for a Bezier interpolation.
 */
interface PodMovementProcessionBezierControlPoint {
    /**
     * `offset` and `offset_t` interpolate a vector smoothly over time using `offset_rate` and `offset_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     */
    offset?: Vector;
    /**
     * Rate 0-1 value.
     */
    offset_rate?: double;
    /**
     * Rate tangent.
     */
    offset_rate_t?: double;
    /**
     * Vector tangent.
     */
    offset_t?: Vector;
    /**
     * `tilt` and `tilt_t` interpolate a double smoothly over time.
     */
    tilt?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    tilt_t?: double;
    /**
     * Mandatory if `tilt` is defined.
     */
    timestamp?: MapTick;
}
/**
 * @example ```
{
  type = "pod-movement",
  frames =
  {
    { timestamp = 700 , tilt = 0.0               , tilt_t = 0 },
    { timestamp = 700 , offset = {0, 0 - 500}    , offset_t = {0, -40} },
    { timestamp = 900 , offset = {15, -60 - 500} , offset_t = {-10, -10} },
    { timestamp = 900 , opacity = 1.0 },
    { timestamp = 960 , tilt = 0.05              , tilt_t = -0.03 },
    { timestamp = 1050, tilt = 0.25              , tilt_t = 0 },
    { timestamp = 1050, offset = {40, -70 - 500} , offset_t = {-1, 0} },
    { timestamp = 1050, opacity = 0.0 },
    { timestamp = 700 , offset_rate = 0 },
    { timestamp = 1050, offset_rate = 1.0 }
  }
}
```
 */
interface PodMovementProcessionLayer {
    contribute_to_distance_traveled?: bool;
    distance_traveled_contribution?: float;
    frames: PodMovementProcessionBezierControlPoint[];
    /**
     * Adds the final position value from given layer to this one.
     */
    inherit_from?: ProcessionLayerInheritanceGroupID;
    /**
     * The group this layer belongs to, for inheritance.
     */
    reference_group?: ProcessionLayerInheritanceGroupID;
    type: 'pod-movement';
}
/**
 * One frame in time for a Bezier interpolation.
 */
interface PodOpacityProcessionBezierControlPoint {
    /**
     * `cutscene_opacity` and `cutscene_opacity_t` interpolate a double smoothly over time.
     */
    cutscene_opacity?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    cutscene_opacity_t?: double;
    /**
     * `lut_blend` and `lut_blend_t` interpolate a double smoothly over time.
     *
     * LUT won't be overridden however, until the pod is drawn above the game via `draw_switch_tick`.
     */
    lut_blend?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    lut_blend_t?: double;
    /**
     * `outside_opacity` and `outside_opacity_t` interpolate a double smoothly over time.
     */
    outside_opacity?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    outside_opacity_t?: double;
    /**
     * Mandatory if `cutscene_opacity` or `outside_opacity` is defined.
     */
    timestamp?: MapTick;
}
interface PodOpacityProcessionLayer {
    /**
     * Default values if unspecified:
     *
     * - cutscene_opacity : 1.0
     *
     * - outside_opacity : 1.0
     *
     * - lut_blend : 0.0
     *
     * - environment_volume : 1.0
     *
     * - environment_muffle_intensity : 0.0
     */
    frames: PodOpacityProcessionBezierControlPoint[];
    lut: ColorLookupTable;
    type: 'pod-opacity';
}
/**
 * The pollution settings, the values are for 60 ticks (1 second).
 */
interface PollutionSettings {
    /**
     * Constant modifier a percentage of 1; the pollution eaten by a chunks tiles. Also known as absorption modifier.
     */
    ageing: double;
    /**
     * Amount that is diffused to neighboring chunks.
     */
    diffusion_ratio: double;
    enabled: bool;
    enemy_attack_pollution_consumption_modifier: double;
    /**
     * Anything bigger than this is visualized as this value.
     */
    expected_max_per_chunk: double;
    max_pollution_to_restore_trees: double;
    min_pollution_to_damage_trees: double;
    /**
     * This much pollution units must be on the chunk to start diffusing.
     */
    min_to_diffuse: double;
    /**
     * Anything lower than this (but > 0) is visualized as this value.
     */
    min_to_show_per_chunk: double;
    pollution_per_tree_damage: double;
    pollution_restored_per_tree_damage: double;
    pollution_with_max_forest_damage: double;
}
/**
 * Probabilities of all items must add up to 100.
 */
type ProbabilityTable = ProbabilityTableItem[];
/**
 * The first number is the value.
 *
 * The second number is the probability in percents. It must be in the `(0, 100]` interval.
 */
type ProbabilityTableItem = [
    uint8,
    uint8
];
interface ProcessionAudio {
    /**
     * Mandatory if `type` is `"pod_catalogue"` or `type` is `"location_catalogue"`.
     */
    catalogue_id?: uint32;
    /**
     * Mandatory if `type` is `"looped-sound"`.
     */
    looped_sound?: InterruptibleSound;
    /**
     * Mandatory if `type` is `"sound"`.
     */
    sound?: Sound;
    type: ProcessionAudioType;
}
/**
 * Allows a prototype to load variable amount of sounds which may be referenced by index.
 */
type ProcessionAudioCatalogue = ProcessionAudioCatalogueItem[];
interface ProcessionAudioCatalogueItem {
    index: uint32;
    /**
     * One or the other.
     */
    looped_sound?: InterruptibleSound;
    /**
     * One or the other.
     */
    sound?: Sound;
}
/**
 * Controls sounds during procession.
 */
interface ProcessionAudioEvent {
    /**
     * Has to be defined unless the type is "stop-looped-sound".
     */
    audio?: ProcessionAudio;
    /**
     * Has to be defined unless the type is "play-sound".
     */
    loop_id?: uint32;
    type: ProcessionAudioEventType;
    /**
     * Has to be defined unless the type is "stop-looped-sound".
     */
    usage?: ProcessionAudioUsage;
}
/**
 * Type of {@link ProcessionAudioEvent | prototype:ProcessionAudioEvent}.
 */
type ProcessionAudioEventType = /**
 * Plays a single sound once.
 */
'play-sound' | /**
 * Starts a looping sound under a specified index until "stop-looped-sound" is triggered or the procession ends. Starting a second looped sound will stop the first.
 */
'start-looped-sound' | /**
 * Ends a looping sound under a specified index.
 */
'stop-looped-sound';
/**
 * Types of {@link ProcessionAudio | prototype:ProcessionAudio}.
 */
type ProcessionAudioType = /**
 * Empty graphic.
 */
'none' | /**
 * {@link Sound | prototype:Sound}.
 */
'sound' | /**
 * {@link Sound | prototype:Sound}.
 */
'looped-sound' | /**
 * Defined inside {@link CargoPodPrototype | prototype:CargoPodPrototype}.
 */
'pod-catalogue' | /**
 * Defined inside {@link SpaceLocationPrototype | prototype:SpaceLocationPrototype}.
 */
'location-catalogue';
/**
 * Who will hear {@link ProcessionAudioEvent | prototype:ProcessionAudioEvent}.
 */
type ProcessionAudioUsage = /**
 * The player inside a pod and an outside viewer.
 */
'both' | /**
 * Only the player inside a pod.
 */
'passenger' | /**
 * Only an outside viewer.
 */
'outside';
interface ProcessionGraphic {
    /**
     * Mandatory if `type` is `"animation"`.
     */
    animation?: Animation;
    /**
     * Mandatory if `type` is `"pod-catalogue"` or `type` is `"location-catalogue"`.
     */
    catalogue_id?: uint32;
    /**
     * Mandatory if `type` is `"sprite"`.
     */
    sprite?: Sprite;
    type: ProcessionGraphicType;
}
/**
 * Allows a prototype to load variable amount of sprites which may be referenced by index.
 */
type ProcessionGraphicCatalogue = ProcessionGraphicCatalogueItem[];
/**
 * Either picture or animation must be provided.
 */
interface ProcessionGraphicCatalogueItem {
    animation?: Animation;
    index: uint32;
    picture?: Sprite;
}
/**
 * Types of {@link ProcessionGraphic | prototype:ProcessionGraphic}.
 */
type ProcessionGraphicType = /**
 * Empty graphic.
 */
'none' | /**
 * {@link Sprite | prototype:Sprite}.
 */
'sprite' | /**
 * {@link Animation | prototype:Animation}.
 */
'animation' | /**
 * Defined inside {@link CargoPodPrototype | prototype:CargoPodPrototype}.
 */
'pod-catalogue' | /**
 * Defined inside {@link SpaceLocationPrototype | prototype:SpaceLocationPrototype}.
 */
'location-catalogue' | /**
 * Uses index from {@link CargoHatchDefinition | prototype:CargoHatchDefinition} to address catalogue inside {@link SpaceLocationPrototype | prototype:SpaceLocationPrototype}. Only works for graphics drawn in-world such as 'single-graphic'.
 */
'hatch-location-catalogue-index';
/**
 * The name of a {@link ProcessionPrototype | prototype:ProcessionPrototype}.
 */
type ProcessionID = string;
/**
 * Describes one aspect of a procession. Animation and picture are interchangeable for types that require it.
 *
 * Loaded as one of the procession layers, based on the value of the `type` key.
 * @example ```
{
  type = "pod-movement",
  frames =
  {
    { timestamp = 700 , tilt = 0.0               , tilt_t = 0 },
    { timestamp = 700 , offset = {0, 0 - 500}    , offset_t = {0, -40} },
    { timestamp = 900 , offset = {15, -60 - 500} , offset_t = {-10, -10} },
    { timestamp = 900 , opacity = 1.0 },
    { timestamp = 960 , tilt = 0.05              , tilt_t = -0.03 },
    { timestamp = 1050, tilt = 0.25              , tilt_t = 0 },
    { timestamp = 1050, offset = {40, -70 - 500} , offset_t = {-1, 0} },
    { timestamp = 1050, opacity = 0.0 },
    { timestamp = 700 , offset_rate = 0 },
    { timestamp = 1050, offset_rate = 1.0 }
  }
}
```
 */
type ProcessionLayer = /**
 * Loaded when the `type` is `"pod-distance-traveled"`. Add to distance traveled by the pod. Used by other visual layers. single layer of this type is allowed per ProcessionPrototype.
 */
PodDistanceTraveledProcessionLayer | /**
 * Loaded when the `type` is `"pod-movement"`. Defines the timeline for the pod movement and rotation. A single layer of this type is allowed per ProcessionPrototype.
 */
PodMovementProcessionLayer | /**
 * Loaded when the `type` is `"pod-opacity"`. Defines the outside and cutscene opacity of the pod and strength of surface lighting. A single layer of this type is allowed per ProcessionPrototype.
 */
PodOpacityProcessionLayer | /**
 * Loaded when the `type` is `"single-graphic"`. Paints a sprite over the cargo pod.
 */
SingleGraphicProcessionLayer | /**
 * Loaded when the `type` is `"cover-graphic"`. Paints a tiling sprite over the entire screen. Optionally can mask nearby area or far area.
 */
CoverGraphicProcessionLayer | /**
 * Loaded when the `type` is `"tint"`. Tints the whole surface with a color.
 */
TintProcessionLayer | /**
 * Loaded when the `type` is `"pod-animation"`. Defines an override graphic for the pod within the given range.
 */
PodAnimationProcessionLayer;
/**
 * The name of an {@link ProcessionLayerInheritanceGroup | prototype:ProcessionLayerInheritanceGroup}.
 */
type ProcessionLayerInheritanceGroupID = string;
type ProcessionLayerWithTime = ProcessionLayer;
/**
 * Lists arrivals and departures available for travel to a given surface.
 */
interface ProcessionSet {
    arrival: ProcessionID[];
    departure: ProcessionID[];
}
/**
 * A wrapper for a collection of {@link ProcessionLayers | prototype:ProcessionLayer}.
 */
interface ProcessionTimeline {
    audio_events: ProcessionAudioEvent[];
    /**
     * During procession, the pod will at some point start being drawn above the rest of the game:
     *
     * - When ascending this tick will go from world to above.
     *
     * - When descending this tick will go from above to world.
     *
     * Notably, LUT override won't be applied until the pod is drawn above the game.
     */
    draw_switch_tick?: MapTick;
    /**
     * The time to play this cutscene regardless of individual layer durations.
     */
    duration: MapTick;
    /**
     * The real duration of the intermezzo playing will be below this value.
     */
    intermezzo_max_duration?: MapTick;
    /**
     * The real duration of the intermezzo playing will be above this value.
     */
    intermezzo_min_duration?: MapTick;
    layers: ProcessionLayer[];
    /**
     * Time to initiate usage specific actions:
     *
     * - Ascending animation will detach from rocket on this tick.
     *
     * - Descending animation will request hatch to be opened.
     */
    special_action_tick?: MapTick;
}
type ProductPrototype = /**
 * Loaded when the `type` is `"item"`.
 */
ItemProductPrototype | /**
 * Loaded when the `type` is `"fluid"`.
 */
FluidProductPrototype | /**
 * Loaded when the `type` is `"research-progress"`.
 */
ResearchProgressProductPrototype;
interface ProductionHealthEffect {
    not_producing?: float;
    producing?: float;
}
/**
 * Specifies how the entity will utilize this fluidbox. `input-output` should only be used for boilers in fluid heating mode.
 */
type ProductionType = 'none' | 'input' | 'input-output' | 'output';
interface ProgrammableSpeakerInstrument {
    name: string;
    /**
     * Cannot be an empty array.
     */
    notes: ProgrammableSpeakerNote[];
}
interface ProgrammableSpeakerNote {
    name: string;
    /**
     * Cannot contain aggregation.
     */
    sound: Sound;
}
interface ProgressBarStyleSpecification extends BaseStyleSpecification {
    bar?: ElementImageSet;
    bar_background?: ElementImageSet;
    bar_width?: uint32;
    color?: Color;
    embed_text_in_bar?: bool;
    filled_font_color?: Color;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    font_color?: Color;
    other_colors?: OtherColors[];
    side_text_padding?: int16;
    type: 'progressbar_style';
}
interface ProjectileAttackParameters extends BaseAttackParameters {
    apply_projection_to_projectile_creation_position?: bool;
    /**
     * When used with `projectile_creation_parameters`, this offsets what the turret's sprite looks at. Setting to `{0,1}` will cause the turret to aim one tile up from the target but the projectile will still aim for the entity. Can be used to give the illusion of height but can also confuse aim logic when set too high.
     *
     * When used without `projectile_creation_parameters`, this sets the turret's rotation axis.
     */
    projectile_center?: Vector;
    projectile_creation_distance?: float;
    /**
     * Used to shoot from multiple points. The turret will look at the enemy as normal but the bullet will spawn from a random offset position. Can be used to create multi-barreled weapons.
     */
    projectile_creation_offsets?: Vector[];
    /**
     * Used to shoot projectiles from arbitrary points. Used by worms. If not set then the launch positions are calculated using `projectile_center` and `projectile_creation_distance`.
     */
    projectile_creation_parameters?: CircularProjectileCreationSpecification;
    /**
     * Used to shoot from different sides of the turret. Setting to `0.25` shoots from the right side, `0.5` shoots from the back, and `0.75` shoots from the left. The turret will look at the enemy as normal but the bullet will spawn from the offset position. Can be used to create right-handed weapons.
     */
    projectile_orientation_offset?: RealOrientation;
    /**
     * Used to show bullet shells/casings being ejected from the gun, see {@link artillery shell casings | https://factorio.com/blog/post/fff-345}.
     */
    shell_particle?: CircularParticleCreationSpecification;
    type: 'projectile';
}
interface ProjectileTriggerDelivery extends TriggerDeliveryItem {
    /**
     * Maximum deviation of the projectile from source orientation, in +/- (`x radians / 2`). Example: `3.14 radians -> +/- (180° / 2)`, meaning up to 90° deviation in either direction of rotation.
     */
    direction_deviation?: float;
    max_range?: double;
    min_range?: double;
    /**
     * Name of a {@link ProjectilePrototype | prototype:ProjectilePrototype}.
     */
    projectile: EntityID;
    /**
     * The maximum deviation of the projectile maximum range from `max_range` is `max_range × range_deviation ÷ 2`. This means a deviation of `0.5` will appear as a maximum of `0.25` (25%) deviation of an initial range goal. Post-deviation range may exceed `max_range` or be less than `min_range`.
     */
    range_deviation?: float;
    /**
     * Starting speed in tiles per tick.
     */
    starting_speed: float;
    starting_speed_deviation?: float;
    type: 'projectile';
}
/**
 * Used by {@link UnitPrototype | prototype:UnitPrototype}.
 */
interface PrototypeStrafeSettings {
    /**
     * Must be between 0 and 1 inclusive.
     */
    clockwise_chance?: float;
    face_target?: bool;
    /**
     * Must be between 0 and max_distance inclusive.
     */
    ideal_distance?: double;
    /**
     * Must be between between 0 and 1 inclusive.
     */
    ideal_distance_importance?: float;
    /**
     * Must be between 0 and ideal_distance_importance inclusive.
     */
    ideal_distance_importance_variance?: float;
    /**
     * Must be >= `0`.
     */
    ideal_distance_tolerance?: double;
    /**
     * Must be >= `0`.
     */
    ideal_distance_variance?: double;
    /**
     * Must be >= `0`.
     */
    max_distance?: double;
}
interface PuddleTileEffectParameters {
    puddle_noise_texture: EffectTexture;
    /**
     * Only loaded, and mandatory if `water_effect_parameters` is not defined. Must be name of a {@link TileEffectDefinition | prototype:TileEffectDefinition} which has `shader` set to `"water"`.
     */
    water_effect?: TileEffectDefinitionID;
    water_effect_parameters?: WaterTileEffectParameters;
}
/**
 * A mapping of arrays of {@link PumpConnectorGraphicsAnimations | prototype:PumpConnectorGraphicsAnimation} to all 4 directions of the pump connection (to a fluid wagon).
 * @example ```
load_animations =
{
west = {
  [1] = {
    standup_base = {
      filename = "__base__/graphics/entity/pump/connector/V-R-135-load-standup-base.png",
      width = 110,
      height = 126,
      scale = 0.5,
      line_length = 1,
      frame_count = 20,
      shift = util.by_pixel(-23.5, -13.5)
    },
    standup_shadow = {
      filename = "__base__/graphics/entity/pump/connector/V-R-1-load-standup-base-shadow.png",
      width = 157,
      height = 136,
      scale = 0.5,
      line_length = 1,
      frame_count = 20,
      shift = util.by_pixel(-8.75, 8.5)
    },
  },
  [2] = {
    standup_base = { ... },
    standup_shadow = { ... },
    connector_shadow = { ... },
  },
  [3] = { ... },
  [4] = { ... },
  [5] = { ... },
  [6] = { ... },
},
north = { ... },
east = { ... },
south = { ... },
}
```
 */
interface PumpConnectorGraphics {
    /**
     * Size of the array must be 6 or more.
     */
    east: PumpConnectorGraphicsAnimation[];
    /**
     * Size of the array must be 6 or more.
     */
    north: PumpConnectorGraphicsAnimation[];
    /**
     * Size of the array must be 6 or more.
     */
    south: PumpConnectorGraphicsAnimation[];
    /**
     * Size of the array must be 6 or more.
     */
    west: PumpConnectorGraphicsAnimation[];
}
interface PumpConnectorGraphicsAnimation {
    connector?: Animation;
    connector_shadow?: Animation;
    standup_base?: Animation;
    standup_shadow?: Animation;
    standup_top?: Animation;
}
/**
 * The push back effect used by the {@link discharge defense | https://wiki.factorio.com/Discharge_defense}.
 *
 * Aims to push the target entity away from the source entity by the `distance` from the target entity's current position. Searches within double the `distance` from the pushed to position for the nearest non-colliding position for the target entity to be teleported too. If no valid non-colliding position is found or the target is not teleportable, then no push back occurs.
 */
interface PushBackTriggerEffectItem extends TriggerEffectItem {
    distance: float;
    type: 'push-back';
}
/**
 * The name of a {@link QualityPrototype | prototype:QualityPrototype}.
 * @example ```
"rare"
```
 * @example ```
"legendary"
```
 */
type QualityID = string;
interface RadioButtonStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    disabled_font_color?: Color;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    font_color?: Color;
    text_padding?: uint32;
    type: 'radiobutton_style';
}
/**
 * Sprite to be shown around the entity when it is selected/held in the cursor.
 */
interface RadiusVisualisationSpecification {
    /**
     * Must be greater than or equal to 0.
     */
    distance?: double;
    draw_in_cursor?: bool;
    draw_on_selection?: bool;
    offset?: Vector;
    sprite?: Sprite;
}
interface RailFenceDirectionSet {
    east?: SpriteVariations;
    north?: SpriteVariations;
    northeast?: SpriteVariations;
    northwest?: SpriteVariations;
    south?: SpriteVariations;
    southeast?: SpriteVariations;
    southwest?: SpriteVariations;
    west?: SpriteVariations;
}
/**
 * Used for graphics by {@link RailPrototype | prototype:RailPrototype}.
 */
interface RailFenceGraphicsSet {
    back_fence_render_layer?: RenderLayer;
    back_fence_render_layer_secondary?: RenderLayer;
    front_fence_render_layer?: RenderLayer;
    front_fence_render_layer_secondary?: RenderLayer;
    /**
     * Must be 2 or 4.
     */
    segment_count: uint8;
    side_A: RailFencePictureSet;
    side_B: RailFencePictureSet;
}
interface RailFencePictureSet {
    ends: [
        RailFenceDirectionSet,
        RailFenceDirectionSet,
        RailFenceDirectionSet,
        RailFenceDirectionSet
    ];
    ends_upper?: [
        RailFenceDirectionSet,
        RailFenceDirectionSet,
        RailFenceDirectionSet,
        RailFenceDirectionSet
    ];
    fence: RailFenceDirectionSet;
    fence_upper?: RailFenceDirectionSet;
}
interface RailPictureSet {
    back_rail_endings?: Sprite16Way;
    east: RailPieceLayers;
    fog_mask?: RailsFogMaskDefinitions;
    front_rail_endings?: Sprite16Way;
    north: RailPieceLayers;
    northeast: RailPieceLayers;
    northwest: RailPieceLayers;
    /**
     * Can be used to load rail endings instead of the front and back variants.
     *
     * Only loaded if `front_rail_endings` or `back_rail_endings` are not defined.
     */
    rail_endings: Sprite16Way;
    render_layers: RailRenderLayers;
    secondary_render_layers?: RailRenderLayers;
    /**
     * Must contain exactly 16 directions and 6 frames.
     */
    segment_visualisation_endings?: RotatedAnimation;
    slice_origin?: RailsSliceOffsets;
    south: RailPieceLayers;
    southeast: RailPieceLayers;
    southwest: RailPieceLayers;
    west: RailPieceLayers;
}
/**
 * Used for graphics by {@link RailPrototype | prototype:RailPrototype} and {@link RailRemnantsPrototype | prototype:RailRemnantsPrototype}.
 */
interface RailPieceLayers {
    /**
     * Must have same number of variations as `metals` or be empty.
     */
    backplates?: SpriteVariations;
    /**
     * May not have more than 16 variations.
     */
    metals?: SpriteVariations;
    segment_visualisation_middle?: Sprite;
    shadow_mask?: Sprite;
    shadow_subtract_mask?: Sprite;
    /**
     * May not have more than 16 variations.
     */
    stone_path?: SpriteVariations;
    /**
     * May not have more than 16 variations.
     */
    stone_path_background?: SpriteVariations;
    /**
     * May not have more than 16 variations.
     */
    ties?: SpriteVariations;
    underwater_structure?: Sprite;
    water_reflection?: Sprite;
}
interface RailPlannerAllowElevatedRailsModifier extends BoolModifier {
    type: 'rail-planner-allow-elevated-rails';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface RailRenderLayers {
    back_end?: RenderLayer;
    front_end?: RenderLayer;
    metal?: RenderLayer;
    screw?: RenderLayer;
    stone_path?: RenderLayer;
    stone_path_lower?: RenderLayer;
    tie?: RenderLayer;
    underwater_layer_offset?: int8;
}
interface RailSignalColorToFrameIndex {
    blue?: uint8;
    green?: uint8;
    none?: uint8;
    red?: uint8;
    yellow?: uint8;
}
interface RailSignalLightDefinition {
    light: LightDefinition;
    shift?: Vector;
}
interface RailSignalLights {
    blue?: RailSignalLightDefinition;
    green?: RailSignalLightDefinition;
    red?: RailSignalLightDefinition;
    yellow?: RailSignalLightDefinition;
}
interface RailSignalPictureSet {
    circuit_connector?: CircuitConnectorDefinition[];
    circuit_connector_render_layer?: RenderLayer;
    lights: RailSignalLights;
    rail_piece?: RailSignalStaticSpriteLayer;
    selection_box_shift?: Vector[];
    signal_color_to_structure_frame_index: RailSignalColorToFrameIndex;
    structure: RotatedAnimation;
    structure_align_to_animation_index?: uint8[];
    structure_render_layer?: RenderLayer;
    upper_rail_piece?: RailSignalStaticSpriteLayer;
}
interface RailSignalStaticSpriteLayer {
    align_to_frame_index?: uint8[];
    hide_if_not_connected_to_rails?: bool;
    hide_if_simulation?: bool;
    render_layer?: RenderLayer;
    /**
     * Must be an empty array or contain exactly 16 values.
     */
    shifts?: MapPosition[];
    sprites: Animation;
}
interface RailSupportGraphicsSet {
    render_layer?: RenderLayer;
    structure: RotatedSprite;
    underwater_layer_offset?: int8;
    underwater_structure?: RotatedSprite;
}
interface RailSupportOnDeepOilOceanModifier extends BoolModifier {
    type: 'rail-support-on-deep-oil-ocean';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface RailsFogMaskDefinitions {
    east?: FogMaskShapeDefinition;
    north?: FogMaskShapeDefinition;
    south?: FogMaskShapeDefinition;
    west?: FogMaskShapeDefinition;
}
interface RailsSliceOffsets {
    east?: Vector;
    north?: Vector;
    south?: Vector;
    west?: Vector;
}
/**
 * Define a numerical property in terms of minimum and maximum to be used as a randomly chosen value in that range (inclusively).
 *
 * The maximum cannot be less than the minimum.
 */
type RandomRange = /**
 * First number is the minimum, second is the maximum.
 */
[
    uint8,
    uint8
] | /**
 * The same minimum and maximum.
 */
uint8;
type RangeMode = 'center-to-center' | 'bounding-box-to-bounding-box' | 'center-to-bounding-box';
type RangedValue = [
    float,
    float
] | float;
/**
 * Specified by a {@link float | prototype:float} between 0 and 1, including 0 and excluding 1.
 */
type RealOrientation = float;
/**
 * The name of a {@link RecipeCategory | prototype:RecipeCategory}.
 * @example ```
"crafting"
```
 * @example ```
"smelting"
```
 */
type RecipeCategoryID = string;
/**
 * The name of a {@link RecipePrototype | prototype:RecipePrototype}.
 * @example ```
"electronic-circuit"
```
 * @example ```
"kovarex-enrichment-process"
```
 */
type RecipeID = string;
/**
 * If no tint is specified, the machine falls back to {@link WorkingVisualisations::default_recipe_tint | prototype:WorkingVisualisations::default_recipe_tint}.
 */
interface RecipeTints {
    primary?: Color;
    quaternary?: Color;
    secondary?: Color;
    tertiary?: Color;
}
/**
 * The render layer specifies the order of the sprite when rendering, most of the objects have it hardcoded in the source, but some are configurable. The union contains valid values from lowest to highest.
 *
 * Note: `decals` is used as special marker for {@link DecorativePrototype::render_layer | prototype:DecorativePrototype::render_layer}. When used elsewhere, the sprites will draw over the terrain.
 */
type RenderLayer = 'zero' | 'background-transitions' | 'under-tiles' | 'decals' | 'above-tiles' | 'ground-layer-1' | 'ground-layer-2' | 'ground-layer-3' | 'ground-layer-4' | 'ground-layer-5' | 'lower-radius-visualization' | 'radius-visualization' | 'transport-belt-integration' | 'resource' | 'building-smoke' | 'rail-stone-path-lower' | 'rail-stone-path' | 'rail-tie' | 'decorative' | 'ground-patch' | 'ground-patch-higher' | 'ground-patch-higher2' | 'rail-chain-signal-metal' | 'rail-screw' | 'rail-metal' | 'remnants' | 'floor' | 'transport-belt' | 'transport-belt-endings' | 'floor-mechanics-under-corpse' | 'corpse' | 'floor-mechanics' | 'item' | 'transport-belt-reader' | 'lower-object' | 'transport-belt-circuit-connector' | 'lower-object-above-shadow' | 'lower-object-overlay' | 'object-under' | 'object' | 'cargo-hatch' | 'higher-object-under' | 'higher-object-above' | 'train-stop-top' | 'item-in-inserter-hand' | 'above-inserter' | 'wires' | 'under-elevated' | 'elevated-rail-stone-path-lower' | 'elevated-rail-stone-path' | 'elevated-rail-tie' | 'elevated-rail-screw' | 'elevated-rail-metal' | 'elevated-lower-object' | 'elevated-object' | 'elevated-higher-object' | 'fluid-visualization' | 'wires-above' | 'entity-info-icon' | 'entity-info-icon-above' | 'explosion' | 'projectile' | 'smoke' | 'air-object' | 'air-entity-info-icon' | 'light-effect' | 'selection-box' | 'higher-selection-box' | 'collision-selection-box' | 'arrow' | 'cursor';
/**
 * Defines the amount of an item required to research one unit of a {@link technology | prototype:TechnologyPrototype}. The first member of the tuple is the name of a {@link ToolPrototype | prototype:ToolPrototype} and the second is the amount. Amount must not be 0.
 * @example ```
{"automation-science-pack", 1}
```
 */
type ResearchIngredient = [
    ItemID,
    uint16
];
/**
 * A research progress product definition.
 */
interface ResearchProgressProductPrototype {
    amount?: double;
    research_item: ItemID;
    type: 'research-progress';
}
interface ResearchTechnologyTipTrigger {
    technology: TechnologyID;
    type: 'research';
}
interface ResearchWithSciencePackTipTrigger {
    science_pack: ItemID;
    type: 'research-with-science-pack';
}
/**
 * Resistances to certain types of attacks from enemy, and physical damage. See {@link Damage | https://wiki.factorio.com/Damage}.
 * @example ```
resistances =
{
  {
    type = "physical",
    decrease = 6,
    percent = 30
  },
  {
    type = "explosion",
    decrease = 20,
    percent = 30
  },
  {
    type = "acid",
    decrease = 3,
    percent = 30
  },
  {
    type = "fire",
    decrease = 0,
    percent = 30
  }
}
```
 */
interface Resistance {
    /**
     * The {@link flat resistance | https://wiki.factorio.com/Damage#Decrease.2C_or_.22flat.22_resistance} to the given damage type. (Higher is better)
     */
    decrease?: float;
    /**
     * The {@link percentage resistance | https://wiki.factorio.com/Damage#Percentage_resistance} to the given damage type. (Higher is better)
     */
    percent?: float;
    type: DamageTypeID;
}
/**
 * The name of a {@link ResourceCategory | prototype:ResourceCategory}.
 * @example ```
"basic-solid"
```
 * @example ```
"basic-fluid"
```
 */
type ResourceCategoryID = string;
type RichTextSetting = 'enabled' | 'disabled' | 'highlight';
interface RollingStockRotatedSlopedGraphics {
    rotated: RotatedSprite;
    slope_angle_between_frames?: double;
    slope_back_equals_front?: bool;
    sloped?: RotatedSprite;
}
interface RotateEntityTipTrigger extends CountBasedTipTrigger {
    type: 'rotate-entity';
}
interface RotatedAnimation extends AnimationParameters {
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_projection?: bool;
    /**
     * Only loaded if `layers` is not defined.
     *
     * If `true`, `direction_count` must be greater than `1`.
     */
    axially_symmetrical?: bool;
    /**
     * Only loaded if `layers` is not defined.
     */
    counterclockwise?: bool;
    /**
     * Only loaded if `layers` is not defined.
     *
     * The sequential animation instance is loaded equal to the entities direction within the `direction_count` setting.
     *
     * Direction count to {@link Direction | prototype:Direction} (animation sequence number):
     *
     * - `1`: North (1)
     *
     * - `2`: North (1), South (2)
     *
     * - `4`: North (1), East (2), South (3), West (4)
     *
     * - `8`: North (1), Northeast (2), East (3), Southeast (4), South (5), Southwest (6), West (7), Northwest (8)
     */
    direction_count?: uint32;
    /**
     * Only loaded, and mandatory if `layers`, `stripes`, and `filenames` are not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName;
    /**
     * Only loaded if both `layers` and `stripes` are not defined.
     */
    filenames?: FileName[];
    /**
     * If this property is present, all RotatedAnimation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from AnimationParameters, are ignored.
     */
    layers?: RotatedAnimation[];
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint32;
    /**
     * Only loaded if `layers` is not defined.
     */
    middle_orientation?: RealOrientation;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Automatically clamped to be between `0` and `1`.
     */
    orientation_range?: float;
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    slice?: uint32;
    /**
     * Only loaded if `layers` is not defined.
     */
    still_frame?: uint32;
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: Stripe[];
}
/**
 * A map of rotated animations for all 8 directions of the entity. If this is loaded as a single RotatedAnimation, it applies to all directions.
 *
 * Any direction that is not defined defaults to the rotated animation of the opposite direction. If that is also not defined, it defaults to the north rotated animation.
 */
type RotatedAnimation8Way = {
    east?: RotatedAnimation;
    north: RotatedAnimation;
    north_east?: RotatedAnimation;
    north_west?: RotatedAnimation;
    south?: RotatedAnimation;
    south_east?: RotatedAnimation;
    south_west?: RotatedAnimation;
    west?: RotatedAnimation;
} | RotatedAnimation;
type RotatedAnimationVariations = RotatedAnimation | RotatedAnimation[];
/**
 * Specifies series of sprites used to visualize different rotations of the object.
 * @example ```
pictures =
{
  layers =
  {
    {
      filename = "__base__/graphics/entity/radar/radar.png",
      priority = "low",
      width = 196,
      height = 254,
      apply_projection = false,
      direction_count = 64,
      line_length = 8,
      shift = util.by_pixel(1, -16),
      scale = 0.5
    },
    {
      filename = "__base__/graphics/entity/radar/radar-shadow.png",
      priority = "low",
      width = 343,
      height = 186,
      apply_projection = false,
      direction_count = 64,
      line_length = 8,
      shift = util.by_pixel(39.25,3),
      draw_as_shadow = true,
      scale = 0.5
    }
  }
}
```
 */
interface RotatedSprite extends SpriteParameters {
    /**
     * Only loaded if `layers` is not defined.
     */
    allow_low_quality_rotation?: bool;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Used to fix the inconsistency of direction of the entity in 3d when rendered and direction on the screen (where the 45 degree angle for projection is used).
     */
    apply_projection?: bool;
    /**
     * Only loaded if `layers` is not defined.
     *
     * When `true`, the same picture is used for left/right direction, just flipped, which can save half of the space required, but is not usable once the picture contains shadows, etc.
     */
    axially_symmetrical?: bool;
    /**
     * Only loaded if `layers` is not defined.
     */
    back_equals_front?: bool;
    /**
     * Only loaded if `layers` is not defined.
     *
     * Set to `true` to indicate sprites in the spritesheet are in counterclockwise order.
     */
    counterclockwise?: bool;
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
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * Count of direction (frames) specified.
     */
    direction_count?: uint16;
    /**
     * Only loaded if `layers` is not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName;
    /**
     * Only loaded, and mandatory if both `layers` and `filename` are not defined.
     */
    filenames?: FileName[];
    /**
     * A list of overrides and customizations for each specific frame within the rotated sprite. This can be used to adjust each individual frame's width, height, and other properties. If this property is present, then it must contain at least as many `RotatedSpriteFrame` as there are sprites in this RotatedSprite.
     */
    frames?: RotatedSpriteFrame[];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Unused.
     */
    generate_sdf?: bool;
    /**
     * If this property is present, all RotatedSprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: RotatedSprite[];
    /**
     * Only loaded if `layers` is not defined.
     *
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having more sprites in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint32;
    /**
     * Only loaded if `layers` is not defined. Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint64;
}
/**
 * Specifies frame-specific properties of an individual sprite within a RotatedSprite set. Some properties are absolute values, and some are relative and inherited from the parent RotatedSprite prototype definition.
 */
interface RotatedSpriteFrame {
    /**
     * Height of the sprite in pixels, from 0-4096. If not defined, inherits the height of the parent RotatedSprite.
     */
    height?: SpriteSizeType;
    /**
     * The shift in tiles of this specific frame, relative to the shift of the parent RotatedSprite. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector;
    /**
     * Width of the sprite in pixels, from 0-4096. If not defined, inherits the width of the parent RotatedSprite.
     */
    width?: SpriteSizeType;
    /**
     * The horizontal offset of the sprite relative to its specific frame within the parent RotatedSprite.
     */
    x?: SpriteSizeType;
    /**
     * The vertical offset of the sprite relative to its specific frame within the parent RotatedSprite.
     */
    y?: SpriteSizeType;
}
interface ScriptTriggerEffectItem extends TriggerEffectItem {
    /**
     * The effect ID that will be provided in {@link on_script_trigger_effect | runtime:on_script_trigger_effect}.
     */
    effect_id: string;
    type: 'script';
}
interface ScrollBarStyleSpecification extends BaseStyleSpecification {
    background_graphical_set?: ElementImageSet;
    thumb_button_style?: ButtonStyleSpecification;
}
interface ScrollPaneStyleSpecification extends BaseStyleSpecification {
    always_draw_borders?: bool;
    background_graphical_set?: ElementImageSet;
    dont_force_clipping_rect_for_contents?: bool;
    extra_bottom_margin_when_activated?: int32;
    extra_bottom_padding_when_activated?: int32;
    extra_left_margin_when_activated?: int32;
    extra_left_padding_when_activated?: int32;
    /**
     * Sets `extra_top_margin_when_activated`, `extra_bottom_margin_when_activated`, `extra_left_margin_when_activated` and `extra_right_margin_when_activated`.
     */
    extra_margin_when_activated?: int32;
    /**
     * Sets `extra_top_padding_when_activated`, `extra_bottom_padding_when_activated`, `extra_left_padding_when_activated` and `extra_right_padding_when_activated`.
     */
    extra_padding_when_activated?: int32;
    extra_right_margin_when_activated?: int32;
    extra_right_padding_when_activated?: int32;
    extra_top_margin_when_activated?: int32;
    extra_top_padding_when_activated?: int32;
    graphical_set?: ElementImageSet;
    horizontal_scrollbar_style?: HorizontalScrollBarStyleSpecification;
    scrollbars_go_outside?: bool;
    type: 'scroll_pane_style';
    vertical_flow_style?: VerticalFlowStyleSpecification;
    vertical_scrollbar_style?: VerticalScrollBarStyleSpecification;
}
/**
 * Used by {@link SegmentedUnitPrototype | prototype:SegmentedUnitPrototype} to define and manage the segments that make up the body of the entity.
 */
interface SegmentEngineSpecification {
    /**
     * The segments that compose the entity's body. Must contain no more than 63 entries.
     */
    segments: SegmentSpecification[];
}
/**
 * A container for an individual instance of a {@link SegmentPrototype | prototype:SegmentPrototype} within a {@link SegmentEngineSpecification | prototype:SegmentEngineSpecification}. May contain context-specific customizations unique to the associated segment instance.
 */
interface SegmentSpecification {
    /**
     * Name of the {@link SegmentPrototype | prototype:SegmentPrototype} to use in this position.
     */
    segment: EntityID;
}
interface SelectionModeData {
    border_color: Color;
    chart_color?: Color;
    count_button_color?: Color;
    cursor_box_type: CursorBoxType;
    ended_sound?: Sound;
    entity_filter_mode?: 'whitelist' | 'blacklist';
    entity_filters?: EntityID[];
    entity_type_filters?: string[];
    mode: SelectionModeFlags;
    play_ended_sound_when_nothing_selected?: bool;
    started_sound?: Sound;
    tile_filter_mode?: 'whitelist' | 'blacklist';
    tile_filters?: TileID[];
}
/**
 * An array containing the following values.
 */
type SelectionModeFlags = (/**
 * Selects entities and tiles as if selecting them for a blueprint.
 */
'blueprint' | /**
 * Selects entities and tiles as if selecting them for deconstruction.
 */
'deconstruct' | /**
 * Selects entities and tiles as if selecting them for deconstruction cancellation.
 */
'cancel-deconstruct' | /**
 * Selects items on the ground.
 */
'items' | /**
 * Selects trees.
 */
'trees' | /**
 * Selects entities which are considered {@link a building | runtime:LuaEntityPrototype::is_building}, plus landmines.
 */
'buildable-type' | /**
 * Selects no entities or tiles, but is useful to select an area.
 */
'nothing' | /**
 * Selects entities and tiles that can be built by an item.
 */
'items-to-place' | /**
 * Selects all entities.
 */
'any-entity' | /**
 * Selects all tiles.
 */
'any-tile' | /**
 * Selects entities with the same force as the selecting player.
 */
'same-force' | /**
 * Selects entities with a different force as the selecting player.
 */
'not-same-force' | /**
 * Selects entities from a friendly force.
 */
'friend' | /**
 * Selects entities from an enemy force.
 */
'enemy' | /**
 * Selects entities as if selecting them for upgrading.
 */
'upgrade' | /**
 * Selects entities as if selecting them for upgrade cancellation.
 */
'cancel-upgrade' | /**
 * Selects entities as if selecting them for downgrading.
 */
'downgrade' | /**
 * Selects entities that are an {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype}.
 */
'entity-with-health' | /**
 * Selects entities which are {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target}.
 */
'is-military-target' | /**
 * Selects entities that are an {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype}.
 */
'entity-with-owner' | /**
 * Selects entities that are not a {@link RollingStockPrototype | prototype:RollingStockPrototype}.
 */
'avoid-rolling-stock' | 'avoid-vehicle' | 'controllable' | 'controllable-add' | 'controllable-remove' | /**
 * Selects entities that are an {@link EntityGhostPrototype | prototype:EntityGhostPrototype}.
 */
'entity-ghost' | /**
 * Selects entities that are a {@link TileGhostPrototype | prototype:TileGhostPrototype}.
 */
'tile-ghost') | (/**
 * Selects entities and tiles as if selecting them for a blueprint.
 */
'blueprint' | /**
 * Selects entities and tiles as if selecting them for deconstruction.
 */
'deconstruct' | /**
 * Selects entities and tiles as if selecting them for deconstruction cancellation.
 */
'cancel-deconstruct' | /**
 * Selects items on the ground.
 */
'items' | /**
 * Selects trees.
 */
'trees' | /**
 * Selects entities which are considered {@link a building | runtime:LuaEntityPrototype::is_building}, plus landmines.
 */
'buildable-type' | /**
 * Selects no entities or tiles, but is useful to select an area.
 */
'nothing' | /**
 * Selects entities and tiles that can be built by an item.
 */
'items-to-place' | /**
 * Selects all entities.
 */
'any-entity' | /**
 * Selects all tiles.
 */
'any-tile' | /**
 * Selects entities with the same force as the selecting player.
 */
'same-force' | /**
 * Selects entities with a different force as the selecting player.
 */
'not-same-force' | /**
 * Selects entities from a friendly force.
 */
'friend' | /**
 * Selects entities from an enemy force.
 */
'enemy' | /**
 * Selects entities as if selecting them for upgrading.
 */
'upgrade' | /**
 * Selects entities as if selecting them for upgrade cancellation.
 */
'cancel-upgrade' | /**
 * Selects entities as if selecting them for downgrading.
 */
'downgrade' | /**
 * Selects entities that are an {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype}.
 */
'entity-with-health' | /**
 * Selects entities which are {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target}.
 */
'is-military-target' | /**
 * Selects entities that are an {@link EntityWithOwnerPrototype | prototype:EntityWithOwnerPrototype}.
 */
'entity-with-owner' | /**
 * Selects entities that are not a {@link RollingStockPrototype | prototype:RollingStockPrototype}.
 */
'avoid-rolling-stock' | 'avoid-vehicle' | 'controllable' | 'controllable-add' | 'controllable-remove' | /**
 * Selects entities that are an {@link EntityGhostPrototype | prototype:EntityGhostPrototype}.
 */
'entity-ghost' | /**
 * Selects entities that are a {@link TileGhostPrototype | prototype:TileGhostPrototype}.
 */
'tile-ghost')[];
type SemiPersistentWorldAmbientSoundDefinition = {
    delay_mean_seconds?: float;
    delay_variance_seconds?: float;
    sound: Sound;
} | Sound;
interface SendItemToOrbitTechnologyTrigger {
    item: ItemIDFilter;
    type: 'send-item-to-orbit';
}
interface SendSpidertronTipTrigger extends CountBasedTipTrigger {
    append?: bool;
    type: 'send-spidertron';
}
type SendToOrbitMode = 'not-sendable' | 'manual' | 'automated';
interface SequenceTipTrigger {
    /**
     * List of triggers to fulfill.
     */
    triggers: TipTrigger[];
    type: 'sequence';
}
interface SetFilterTipTrigger extends CountBasedTipTrigger {
    consecutive?: bool;
    entity?: EntityID;
    match_type_only?: bool;
    type: 'set-filter';
}
interface SetLogisticRequestTipTrigger extends CountBasedTipTrigger {
    entity?: EntityID;
    logistic_chest_only?: bool;
    type: 'set-logistic-request';
}
interface SetRecipeTipTrigger extends CountBasedTipTrigger {
    any_quality?: bool;
    consecutive?: bool;
    machine?: EntityID;
    recipe?: RecipeID;
    type: 'set-recipe';
    uses_fluid?: bool;
}
interface SetTileTriggerEffectItem extends TriggerEffectItem {
    apply_on_space_platform?: bool;
    apply_projection?: bool;
    radius: float;
    tile_collision_mask?: CollisionMaskConnector;
    tile_name: TileID;
    type: 'set-tile';
}
/**
 * A struct that provides access to the user-set values of startup {@link mod settings | https://wiki.factorio.com/Tutorial:Mod_settings}.
 * @example ```
-- Accessing the value of a mod setting
local val = settings.startup["my-mod-setting-name"].value
```
 */
interface Settings {
    /**
     * All startup mod settings, indexed by the name of the setting.
     */
    startup: Record<string, ModSetting>;
}
interface ShiftAnimationWaypoints {
    east: Vector[];
    north: Vector[];
    south: Vector[];
    west: Vector[];
}
interface ShootTipTrigger extends CountBasedTipTrigger {
    target?: 'enemy' | 'entity';
    type: 'shoot';
}
interface ShowExplosionOnChartTriggerEffectItem extends TriggerEffectItem {
    scale: float;
    type: 'show-explosion-on-chart';
}
interface SignalColorMapping extends SignalIDConnectorBase {
    color: Color;
}
interface SignalIDConnectorBase {
    /**
     * Name of the signal.
     */
    name: VirtualSignalID | ItemID | FluidID | RecipeID | EntityID | SpaceLocationID | AsteroidChunkID | QualityID;
    type: string;
}
/**
 * An axis aligned bounding box.
 *
 * SimpleBoundingBoxes are usually specified with the short-hand notation of passing an array of exactly 2 numbers. The first position is left_top, the second position is right_bottom.
 *
 * Positive x goes towards east, positive y goes towards south. This means that the upper-left point is the least dimension in x and y, and lower-right is the greatest.
 * @example ```
{{-0.4, -0.4}, {0.4, 0.4}}
```
 * @example ```
-- long definition
{left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
```
 */
type SimpleBoundingBox = {
    left_top: MapPosition;
    right_bottom: MapPosition;
} | [
    MapPosition,
    MapPosition
];
interface SimpleModifier extends BaseModifier {
    /**
     * Modification value, which will be added to the variable it modifies.
     */
    modifier: double;
}
/**
 * Used by tips and tricks and main menu simulations. Simulations can be controlled at runtime via {@link LuaSimulation | runtime:LuaSimulation}.
 */
interface SimulationDefinition {
    /**
     * If this is true, the map of the simulation is set to be a lab-tile checkerboard in the area of `{{-20, -15},{20, 15}}` when the scenario is first initialized (before init/init_file run).
     */
    checkboard?: bool;
    game_view_settings?: GameViewSettings;
    /**
     * If `save` is not given and this is true, a map gets generated by the game for use in the simulation.
     */
    generate_map?: bool;
    hide_factoriopedia_gradient?: bool;
    hide_health_bars?: bool;
    /**
     * Only loaded if `init_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    init?: string;
    /**
     * This code is run as a (silent) console command inside the simulation when it is first initialized. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    init_file?: FileName;
    /**
     * Amount of ticks that this simulation should run for before the simulation is shown to the player. These updates happen after init/init_file has been run and at the highest possible rate (> 60 UPS).
     */
    init_update_count?: uint32;
    /**
     * How long this simulation takes. In the main menu simulations, another simulation will start after this simulation ends.
     */
    length?: uint32;
    /**
     * An array of mods that will be run in this simulation if they are present and enabled.
     */
    mods?: string[];
    mute_alert_sounds?: bool;
    mute_technology_finished_sound?: bool;
    /**
     * Overrides whether a simulation has its wind sounds muted.
     *
     * Tips and Tricks simulations and Factoriopedia simulations have their wind sounds muted by default, other simulations don't.
     */
    mute_wind_sounds?: bool;
    /**
     * If true, overrides the simulation volume set by the player in the sound settings, simply setting the volume modifier to `1`.
     */
    override_volume?: bool;
    planet?: SpaceLocationID;
    /**
     * The save file that is used for this simulation. If not given and `generate_map` is `true`, a map is generated by the game.
     */
    save?: FileName;
    /**
     * Only loaded if `update_file` is not defined.
     *
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    update?: string;
    /**
     * This code is run as a (silent) console command inside the simulation every time the simulation is updated. Since this is run as a console command, the restrictions of console commands apply, e.g. `require` is not available, see {@link here | runtime:libraries}.
     */
    update_file?: FileName;
    /**
     * Multiplier for the simulation volume set by the player in the sound settings.
     */
    volume_modifier?: float;
}
/**
 * One frame in time for a Bezier interpolation.
 */
interface SingleGraphicLayerProcessionBezierControlPoint {
    /**
     * the frame of the pod animation played. Used only when 'animation_driven_by_curve' is enabled.
     */
    frame: float;
    /**
     * `opacity` and `opacity_t` interpolate a double smoothly over time.
     */
    opacity?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    opacity_t?: double;
    /**
     * `rotation` and `rotation_t` interpolate a double smoothly over time.
     */
    rotation?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    rotation_t?: double;
    /**
     * `scale` and `scale_t` interpolate a double smoothly over time.
     */
    scale?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    scale_t?: double;
    /**
     * `shift` and `shift_t` interpolate a vector smoothly over time using `shift_rate` and `shift_rate_t` for a 0-1 rate curve.
     *
     * Vector value.
     */
    shift?: Vector;
    /**
     * Rate 0-1 value.
     */
    shift_rate?: double;
    /**
     * Rate tangent.
     */
    shift_rate_t?: double;
    /**
     * Vector tangent.
     */
    shift_t?: Vector;
    /**
     * Mandatory if `opacity` or `tint` is defined.
     */
    timestamp?: MapTick;
    /**
     * `tint` and `tint_t` interpolate a color smoothly over time.
     */
    tint?: Color;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    tint_t?: Color;
}
interface SingleGraphicProcessionLayer {
    animation_driven_by_curve?: bool;
    clip_with_hatches?: bool;
    /**
     * Swaps the order of sprite shift and rotation.
     */
    compensated_pivot?: bool;
    /**
     * Default values if unspecified:
     *
     * - opacity : 1.0
     *
     * - tint : {1.0, 1.0, 1.0, 1.0}
     *
     * - scale : 1.0
     *
     * - rotation : 0.0
     *
     * - shift : {0.0, 0.0}
     *
     * - frame : 0.0
     */
    frames: SingleGraphicLayerProcessionBezierControlPoint[];
    graphic: ProcessionGraphic;
    is_passenger_only?: bool;
    /**
     * Where the sprite is centered.
     */
    relative_to?: EffectRelativeTo;
    render_layer?: RenderLayer;
    rotates_with_pod?: bool;
    secondary_draw_order?: int8;
    /**
     * Only applied when the `relative_to` is `pod`.
     */
    shift_rotates_with_pod?: bool;
    type: 'single-graphic';
}
interface SliderStyleSpecificationBase extends BaseStyleSpecification {
    button?: ButtonStyleSpecification;
    draw_notches?: bool;
    empty_bar?: ElementImageSet;
    empty_bar_disabled?: ElementImageSet;
    full_bar?: ElementImageSet;
    full_bar_disabled?: ElementImageSet;
    high_button?: ButtonStyleSpecification;
    notch?: ElementImageSet;
    type: string;
}
/**
 * Definition of the smoke of an entity.
 */
interface SmokeSource {
    deviation?: Vector;
    east_position?: Vector;
    /**
     * Number of smokes generated per entity animation cycle (or per tick for some entities). Can't be negative or infinite.
     */
    frequency: float;
    has_8_directions?: bool;
    height?: float;
    height_deviation?: float;
    name: TrivialSmokeID;
    /**
     * Only loaded if `has_8_directions` is `true`.
     */
    north_east_position?: Vector;
    north_position?: Vector;
    /**
     * Only loaded if `has_8_directions` is `true`.
     */
    north_west_position?: Vector;
    /**
     * Offsets animation cycle, to move at which points of the cycle the smoke gets emitted.
     */
    offset?: float;
    /**
     * Positional offset of smoke source relative to owner entity position. The vector is rotated by orientation of the entity.
     *
     * If any of `north_position`, `north_east_position`, `east_position`, `south_east_position`, `south_position`, `south_west_position`, `west_position`, `north_west_position` is defined, `position` is used only as default value for directional positions. Orientation of the owner entity will be rounded to 4 or 8 directions and one of the directional positions will be used as the offset instead of `position`.
     */
    position?: Vector;
    /**
     * Only loaded if `has_8_directions` is `true`.
     */
    south_east_position?: Vector;
    south_position?: Vector;
    /**
     * Only loaded if `has_8_directions` is `true`.
     */
    south_west_position?: Vector;
    starting_frame?: uint16;
    starting_frame_deviation?: uint16;
    starting_vertical_speed?: float;
    starting_vertical_speed_deviation?: float;
    /**
     * A value between `0` and `1`.
     */
    vertical_speed_slowdown?: float;
    west_position?: Vector;
}
/**
 * @example ```
{
  filename = "__base__/sound/ambient/world-ambience-3.ogg",
  volume = 1.2
}
```
 */
type Sound = {
    advanced_volume_control?: AdvancedVolumeControl;
    aggregation?: AggregationSpecification;
    allow_random_repeat?: bool;
    /**
     * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
     */
    audible_distance_modifier?: double;
    category?: SoundType;
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
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
     * Only loaded if `variations` is not defined.
     */
    preload?: bool;
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
    variations?: SoundDefinition | SoundDefinition[];
    /**
     * Only loaded if `variations` is not defined.
     *
     * This sets both min and max volumes.
     *
     * Must be `>= 0`.
     */
    volume?: float;
} | SoundDefinition[];
interface SoundAccent {
    audible_distance_modifier?: float;
    frame?: uint16;
    play_for_working_visualisations?: string[];
    sound?: Sound;
}
type SoundDefinition = {
    /**
     * Supported sound file formats are `.ogg` (Vorbis) and `.wav`.
     */
    filename: FileName;
    /**
     * Only loaded, and mandatory, if `min_speed` is defined.
     *
     * Must be `>= min_speed`.
     */
    max_speed?: float;
    /**
     * Only loaded if `min_volume` is defined.
     *
     * Must be `>= min_volume`.
     */
    max_volume?: float;
    /**
     * Only loaded if `speed` is not defined.
     *
     * Must be `>= 1 / 64`.
     */
    min_speed?: float;
    /**
     * Only loaded if `volume` is not defined.
     *
     * Must be `>= 0`.
     */
    min_volume?: float;
    modifiers?: SoundModifier | SoundModifier[];
    preload?: bool;
    /**
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.
     */
    speed?: float;
    /**
     * This sets both min and max volumes.
     *
     * Must be `>= 0`.
     */
    volume?: float;
} | FileName;
interface SoundModifier {
    type: SoundModifierType;
    volume_multiplier: float;
}
type SoundModifierType = 'game' | 'main-menu' | 'tips-and-tricks' | 'driving' | 'elevation' | 'space-platform';
/**
 * This defines which slider in the sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
 */
type SoundType = 'game-effect' | 'gui-effect' | 'ambient' | 'environment' | 'walking' | 'alert' | 'wind' | 'world-ambient' | 'weapon' | 'explosion' | 'enemy';
type SpaceConnectionAsteroidSpawnDefinition = {
    /**
     * The type this is loaded as depends on `type`.
     */
    asteroid: EntityID | AsteroidChunkID;
    spawn_points: SpaceConnectionAsteroidSpawnPoint[];
    type?: 'entity' | 'asteroid-chunk';
} | [
    EntityID,
    SpaceConnectionAsteroidSpawnPoint[]
];
interface SpaceConnectionAsteroidSpawnPoint extends AsteroidSpawnPoint {
    distance: double;
}
/**
 * The name of a {@link SpaceConnectionPrototype | prototype:SpaceConnectionPrototype}.
 * @example ```
"nauvis-vulcanus"
```
 * @example ```
"fulgora-aquilo"
```
 */
type SpaceConnectionID = string;
interface SpaceDustEffectProperties {
    animation_speed?: float;
    asteroid_normal_texture: EffectTexture;
    asteroid_texture: EffectTexture;
    noise_texture: EffectTexture;
}
interface SpaceLocationAsteroidSpawnDefinition extends AsteroidSpawnPoint {
    /**
     * The type this is loaded as depends on `type`.
     */
    asteroid: EntityID | AsteroidChunkID;
    type?: 'entity' | 'asteroid-chunk';
}
/**
 * The name of a {@link SpaceLocationPrototype | prototype:SpaceLocationPrototype}.
 * @example ```
"shattered-planet"
```
 * @example ```
"solar-system-edge"
```
 */
type SpaceLocationID = string;
interface SpacePlatformTileDefinition {
    position: TilePosition;
    tile: TileID;
}
interface SpacePlatformsModifier extends BoolModifier {
    type: 'unlock-space-platforms';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
/**
 * Nebulae are rendered only behind tiles with the effect, but stars are rendered behind entire terrain. For that reason using two or more tile types with different space effect on one surface is not supported. The game will allow this to happen, but rendering will chose one star configuration for entire screen.
 *
 * Zoom is recalculated using formula `max(1/1024, pow(max(0, zoom * base_factor + base_offset), exponent) * factor + offset)`.
 */
interface SpaceTileEffectParameters {
    nebula_brightness?: float;
    nebula_saturation?: float;
    nebula_scale?: float;
    scroll_factor?: float;
    star_brightness?: float;
    star_density?: float;
    star_parallax?: float;
    star_saturations?: float;
    star_scale?: float;
    star_shape?: float;
    zoom_base_factor?: float;
    zoom_base_offset?: float;
    zoom_exponent?: float;
    zoom_factor?: float;
    zoom_offset?: float;
}
/**
 * The definition of a evolution and probability weights for a {@link spawnable unit | prototype:UnitSpawnDefinition} for a {@link EnemySpawnerPrototype | prototype:EnemySpawnerPrototype}.
 *
 * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the evolution factor and the second is the spawn weight.
 */
type SpawnPoint = {
    evolution_factor: double;
    /**
     * Must be `>= 0`.
     */
    spawn_weight: double;
} | [
    double,
    double
];
interface SpeechBubbleStyleSpecification extends BaseStyleSpecification {
    arrow_graphical_set?: ElementImageSet;
    arrow_indent?: double;
    close_color?: Color;
    frame_style?: FrameStyleSpecification;
    label_style?: LabelStyleSpecification;
    pass_through_mouse?: bool;
    type: 'speech_bubble_style';
}
/**
 * Used by {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpiderEngineSpecification {
    legs: SpiderLegSpecification | SpiderLegSpecification[];
    /**
     * The amount of overlap allowed between spider leg walking groups. Valid values are between 0.0 and 1.0. Default is 0.0 (no overlap); all legs in the current walking group must complete their step before the next walking group is allowed to move. 0.5 means the next walking group is allowed to start when the time remaining in the current walking group's step is about half of the time that the next group's step is predicted to take.
     */
    walking_group_overlap?: float;
}
interface SpiderLegGraphicsSet {
    foot?: RotatedSprite;
    foot_shadow?: RotatedSprite;
    joint?: RotatedSprite;
    joint_render_layer?: RenderLayer;
    joint_shadow?: RotatedSprite;
    joint_turn_offset?: float;
    lower_part?: SpiderLegPart;
    lower_part_shadow?: SpiderLegPart;
    lower_part_water_reflection?: SpiderLegPart;
    upper_part?: SpiderLegPart;
    upper_part_shadow?: SpiderLegPart;
    upper_part_water_reflection?: SpiderLegPart;
}
interface SpiderLegPart {
    bottom_end?: RotatedSprite;
    bottom_end_length?: float;
    /**
     * The number of tiles in screen space to shift the bottom end of the leg part AWAY from the bottom joint.
     */
    bottom_end_offset?: float;
    middle?: RotatedSprite;
    middle_offset_from_bottom?: float;
    middle_offset_from_top?: float;
    /**
     * The sprite layer in which to draw this leg part.
     */
    render_layer?: RenderLayer;
    top_end?: RotatedSprite;
    top_end_length?: float;
    /**
     * The number of tiles in screen space to shift the top end of the leg part AWAY from the top joint.
     */
    top_end_offset?: float;
}
/**
 * Used by {@link SpiderEngineSpecification | prototype:SpiderEngineSpecification} for {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpiderLegSpecification {
    ground_position: Vector;
    /**
     * Name of a {@link SpiderLegPrototype | prototype:SpiderLegPrototype}.
     */
    leg: EntityID;
    /**
     * Triggers to activate whenever the leg hits the ground, even if the owning spider is actively attacking an entity. For triggers, the source is the leg entity and the target is the leg's current position. Certain effects may not raise as desired, e.g. `"push-back"` does nothing.
     */
    leg_hit_the_ground_trigger?: TriggerEffect;
    /**
     * Triggers to activate whenever the leg hits the ground and the owning spider is actively attacking an entity. These effects will trigger after `leg_hit_the_ground_trigger` have triggered. For triggers, the source is the let entity and the target is the leg's current position. Certain effects may not raise as desired.
     */
    leg_hit_the_ground_when_attacking_trigger?: TriggerEffect;
    mount_position: Vector;
    /**
     * The walking group this leg belongs to. Legs in the same walking group move or stay still at the same time, according to the engine that drives them. Walking groups must start at 1 and increment upward without skipping any numbers. If all legs are part of the same walking_group, they will all move simultaneously.
     */
    walking_group: uint8;
}
interface SpiderLegTriggerEffect {
    effect: TriggerEffect;
    /**
     * A number between 0 and 1 (inclusive) representing the distance from the upper end of the leg (0) to the lower end of the leg (1) where the effects will be triggered. For the upper leg, position 0 represents the point that the leg connects to the entity's hip and position 1 represents the knee. For the lower leg, position 0 represents the knee and position 1 represents the foot.
     */
    position: float;
}
interface SpiderTorsoGraphicsSet {
    animation?: RotatedAnimation;
    base_animation?: RotatedAnimation;
    base_render_layer?: RenderLayer;
    render_layer?: RenderLayer;
    shadow_animation?: RotatedAnimation;
    shadow_base_animation?: RotatedAnimation;
}
/**
 * Used to specify the graphics for {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpiderVehicleGraphicsSet extends SpiderTorsoGraphicsSet {
    autopilot_destination_on_map_visualisation?: Animation;
    autopilot_destination_queue_on_map_visualisation?: Animation;
    autopilot_destination_queue_visualisation?: Animation;
    autopilot_destination_visualisation?: Animation;
    autopilot_destination_visualisation_render_layer?: RenderLayer;
    autopilot_path_visualisation_line_width?: float;
    autopilot_path_visualisation_on_map_line_width?: float;
    /**
     * Placed in multiple positions, as determined by `light_positions`.
     */
    eye_light?: LightDefinition;
    light?: LightDefinition;
    /**
     * Defines where each `eye_light` is placed. One array per eye and each of those arrays should contain one position per body direction.
     */
    light_positions?: Vector[][];
}
interface SpoilToTriggerResult {
    /**
     * Must be positive (larger than 0).
     */
    items_per_trigger: ItemCountType;
    trigger: Trigger;
}
/**
 * Specifies one picture that can be used in the game.
 *
 * When there is more than one sprite or {@link Animation | prototype:Animation} frame with the same source file and dimensions/position in the game, they all share the same memory.
 * @example ```
-- simple sprite
picture_set_enemy =
{
  filename = "__base__/graphics/entity/land-mine/land-mine-set-enemy.png",
  priority = "medium",
  width = 32,
  height = 32
}
```
 * @example ```
-- sprite with layers
picture =
{
  layers =
  {
    {
      filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
      priority = "extra-high",
      width = 62,
      height = 72,
      shift = util.by_pixel(0.5, -2),
      scale = 0.5
    },
    {
      filename = "__base__/graphics/entity/wooden-chest/wooden-chest-shadow.png",
      priority = "extra-high",
      width = 104,
      height = 40,
      shift = util.by_pixel(10, 6.5),
      draw_as_shadow = true,
      scale = 0.5
    }
  }
}
```
 */
interface Sprite extends SpriteParameters {
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
     * Only loaded, and mandatory if `layers` is not defined.
     *
     * The path to the sprite file to use.
     */
    filename?: FileName;
    /**
     * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: Sprite[];
}
/**
 * A map of sprites for all 16 directions of the entity.
 */
interface Sprite16Way {
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    east?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    east_north_east?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    east_south_east?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_east?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_north_east?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_north_west?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    north_west?: Sprite;
    /**
     * Only loaded if `sheets` is not defined.
     */
    sheet?: SpriteNWaySheet;
    sheets?: SpriteNWaySheet[];
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_east?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_south_east?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_south_west?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    south_west?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    west?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    west_north_west?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     */
    west_south_west?: Sprite;
}
/**
 * Sprites for the 4 major directions of the entity. If this is loaded as a single Sprite, it applies to all directions.
 *
 * This struct is either loaded as `sheets` or `sheet` or a map of one sprite per direction. For per direction sprites, the sprites are loaded via `north`, `east`, `south` and `west`.
 * @example ```
-- separate sprites per direction
{
  north =
  {
    filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-N.png",
    priority = "extra-high",
    width = 71,
    height = 38,
    shift = util.by_pixel(2.25, 13.5),
    scale = 0.5
  },
  east =
  {
    filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-E.png",
    priority = "extra-high",
    width = 42,
    height = 76,
    shift = util.by_pixel(-24.5, 1),
    scale = 0.5
  },
  south =
  {
    filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-S.png",
    priority = "extra-high",
    width = 88,
    height = 61,
    shift = util.by_pixel(0, -31.25),
    scale = 0.5
  },
  west =
  {
    filename = "__base__/graphics/entity/assembling-machine-3/assembling-machine-3-pipe-W.png",
    priority = "extra-high",
    width = 39,
    height = 73,
    shift = util.by_pixel(25.75, 1.25),
    scale = 0.5
  }
}
```
 */
type Sprite4Way = {
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     *
     * Only loaded if `north` is defined.
     */
    east?: Sprite;
    /**
     * Only loaded if both `sheets` and `sheet` are not defined.
     */
    north?: Sprite;
    /**
     * Only loaded if `sheets` is not defined.
     */
    sheet?: SpriteNWaySheet;
    sheets?: SpriteNWaySheet[];
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     *
     * Only loaded if `north` is defined.
     */
    south?: Sprite;
    /**
     * Only loaded, and mandatory if both `sheets` and `sheet` are not defined.
     *
     * Only loaded if `north` is defined.
     */
    west?: Sprite;
} | Sprite;
/**
 * An array containing the following values.
 * @example ```
flags = { "linear-minification", "linear-magnification" }
```
 */
type SpriteFlags = (/**
 * The sprite won't be automatically cropped.
 */
'no-crop' | 'not-compressed' | 'always-compressed' | 'mipmap' | 'linear-minification' | 'linear-magnification' | 'linear-mip-level' | 'alpha-mask' | 'no-scale' | /**
 * This flag will internally set these flags: `"group=none"`
 */
'mask' | /**
 * This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"linear-mip-level"`, `"not-compressed"`, `"group=icon"`
 */
'icon' | /**
 * This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"linear-mip-level"`, `"not-compressed"`, `"group=gui"`
 */
'gui' | /**
 * This flag will internally set these flags: `"no-crop"`, `"no-scale"`, `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"not-compressed"`, `"group=icon"`
 */
'gui-icon' | /**
 * This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"linear-magnification"`, `"group=none"`
 */
'light' | /**
 * This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"group=terrain"`
 */
'terrain' | /**
 * This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"no-crop"`, `"terrain-effect-map"` (internal group flag)
 */
'terrain-effect-map' | /**
 * This flag will internally set these flags: `"mipmap"`, `"linear-mip-level"`, `"linear-minification"`, `"terrain-effect-map"` (internal group flag)
 */
'reflection-effect-map' | 'shadow' | /**
 * This flag will internally set these flags: `"mipmap"`, `"linear-minification"`, `"linear-magnification"`, `"group=smoke"`
 */
'smoke' | /**
 * This flag will internally set these flags: `"group=decal"`
 */
'decal' | 'low-object' | 'corpse-decay' | 'trilinear-filtering' | 'group=none' | 'group=terrain' | 'group=shadow' | 'group=smoke' | 'group=decal' | 'group=low-object' | 'group=gui' | 'group=icon' | 'group=icon-background' | 'group=effect-texture')[];
/**
 * @example ```
sheet =
{
  filename = "__base__/graphics/entity/burner-inserter/burner-inserter-platform.png",
  priority = "extra-high",
  width = 105,
  height = 79,
  shift = util.by_pixel(1.5, 7.5-1),
  scale = 0.5
}
```
 */
interface SpriteNWaySheet extends SpriteParameters {
    /**
     * Specifies how many of the directions of the SpriteNWay are filled up with this sheet.
     */
    frames?: uint32;
    /**
     * Unused.
     */
    generate_sdf?: bool;
}
interface SpriteParameters extends SpriteSource {
    apply_runtime_tint?: bool;
    apply_special_effect?: bool;
    blend_mode?: BlendMode;
    /**
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.
     *
     * Draws first as a normal sprite, then again as a light layer. See {@link https://forums.factorio.com/91682 | https://forums.factorio.com/91682}.
     */
    draw_as_glow?: bool;
    /**
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     */
    draw_as_light?: bool;
    /**
     * Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     */
    draw_as_shadow?: bool;
    flags?: SpriteFlags;
    /**
     * This property is only used by sprites used in {@link UtilitySprites | prototype:UtilitySprites} that have the `"icon"` flag set.
     *
     * If this is set to `true`, the game will generate an icon shadow (using signed distance fields) for the sprite.
     */
    generate_sdf?: bool;
    invert_colors?: bool;
    /**
     * Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`. Will be clamped to range `[0, 5]`.
     */
    mipmap_count?: uint8;
    priority?: SpritePriority;
    /**
     * Whether to rotate the `shift` alongside the sprite's rotation. This only applies to sprites which are procedurally rotated by the game engine (like projectiles, wires, inserter hands, etc).
     */
    rotate_shift?: bool;
    /**
     * Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     */
    scale?: double;
    /**
     * The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector;
    /**
     * Provides hint to sprite atlas system, so it can try to put sprites that are intended to be used at the same locations to the same sprite atlas.
     */
    surface?: SpriteUsageSurfaceHint;
    tint?: Color;
    tint_as_overlay?: bool;
    /**
     * Provides hint to sprite atlas system, so it can pack sprites that are related to each other to the same sprite atlas.
     */
    usage?: SpriteUsageHint;
}
/**
 * This sets the "caching priority" of a sprite, so deciding priority of it being included in VRAM instead of streaming it and is therefore a purely technical value. See {@link here | https://forums.factorio.com/viewtopic.php?p=437380#p437380} and {@link here | https://www.factorio.com/blog/post/fff-264}. The possible values are listed below.
 */
type SpritePriority = 'extra-high-no-scale' | 'extra-high' | 'high' | 'medium' | 'low' | 'very-low' | 'no-atlas';
interface SpriteSheet extends SpriteParameters {
    /**
     * Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. Example: If this is 4, the sprite will be sliced into a 4x4 grid.
     */
    dice?: SpriteSizeType;
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the x axis.
     */
    dice_x?: SpriteSizeType;
    /**
     * Same as `dice` above, but this specifies only how many slices there are on the y axis.
     */
    dice_y?: SpriteSizeType;
    filenames?: FileName[];
    /**
     * If this property is present, all SpriteSheet definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.
     *
     * If this property is present, all other properties, including those inherited from SpriteParameters, are ignored.
     */
    layers?: SpriteSheet[];
    line_length?: uint32;
    /**
     * Mandatory if `filenames` is defined.
     */
    lines_per_file?: uint32;
    repeat_count?: uint32;
    variation_count?: uint32;
}
type SpriteSizeType = int16;
interface SpriteSource {
    /**
     * The path to the sprite file to use.
     * This property is required, but marked as optional due to typescript inheritance limitations
     */
    filename?: FileName;
    /**
     * Mandatory if `size` is not defined.
     *
     * Height of the picture in pixels, from 0-4096.
     */
    height?: SpriteSizeType;
    /**
     * Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error. Modders can ignore this property.
     */
    load_in_minimal_mode?: bool;
    /**
     * Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     */
    position?: [
        SpriteSizeType,
        SpriteSizeType
    ];
    /**
     * Whether alpha should be pre-multiplied.
     */
    premul_alpha?: bool;
    /**
     * The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-4096.
     */
    size?: SpriteSizeType | [
        SpriteSizeType,
        SpriteSizeType
    ];
    /**
     * Mandatory if `size` is not defined.
     *
     * Width of the picture in pixels, from 0-4096.
     */
    width?: SpriteSizeType;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType;
}
/**
 * Provides hint to sprite atlas system, so it can pack sprites that are related to each other to the same sprite atlas.
 */
type SpriteUsageHint = 'any' | 'mining' | 'tile-artifical' | 'corpse-decay' | 'enemy' | 'player' | 'train' | 'vehicle' | 'explosion' | 'rail' | 'elevated-rail' | 'air' | 'remnant' | 'decorative';
/**
 * Provides hint to sprite atlas system, so it can try to put sprites that are intended to be used at the same locations to the same sprite atlas.
 */
type SpriteUsageSurfaceHint = 'any' | 'nauvis' | 'vulcanus' | 'gleba' | 'fulgora' | 'aquilo' | 'space';
/**
 * @example ```
-- array of sprites
pictures =
{
  {size = 64, filename = "__base__/graphics/icons/coal.png", scale = 0.5, mipmap_count = 4},
  {size = 64, filename = "__base__/graphics/icons/coal-1.png", scale = 0.5, mipmap_count = 4},
  {size = 64, filename = "__base__/graphics/icons/coal-2.png", scale = 0.5, mipmap_count = 4},
  {size = 64, filename = "__base__/graphics/icons/coal-3.png", scale = 0.5, mipmap_count = 4}
}
```
 * @example ```
-- sprite sheet using "sheet"
connection_patches_connected =
{
  sheet =
  {
    filename = "__base__/graphics/entity/nuclear-reactor/reactor-connect-patches.png",
    width = 64,
    height = 64,
    variation_count = 12,
    scale = 0.5
  }
}
```
 */
type SpriteVariations = {
    sheet: SpriteSheet;
} | SpriteSheet | Sprite[];
interface StackTransferTipTrigger extends CountBasedTipTrigger {
    transfer?: 'stack' | 'inventory' | 'whole-inventory';
    type: 'stack-transfer';
}
interface StateSteeringSettings {
    /**
     * Used only for special "to look good" purposes (like in trailer).
     */
    force_unit_fuzzy_goto_behavior: bool;
    /**
     * Not including the radius of the unit.
     */
    radius: double;
    separation_factor: double;
    separation_force: double;
}
interface StatelessVisualisation {
    acceleration_x?: float;
    acceleration_y?: float;
    acceleration_z?: float;
    adjust_animation_speed_by_base_scale?: bool;
    affected_by_wind?: bool;
    /**
     * One of `nested_visualisations`, `animation` and `light` needs to be defined.
     */
    animation?: AnimationVariations;
    begin_scale?: float;
    can_lay_on_the_ground?: bool;
    count?: uint16;
    end_scale?: float;
    fade_in_progress_duration?: float;
    fade_out_progress_duration?: float;
    /**
     * One of `nested_visualisations`, `animation` and `light` needs to be defined.
     */
    light?: LightDefinition;
    /**
     * Only loaded if `count` is not defined.
     */
    max_count?: uint16;
    /**
     * Only loaded if `count` is not defined.
     */
    min_count?: uint16;
    /**
     * Silently clamped to be between 0 and 1.
     */
    movement_slowdown_factor_x?: float;
    /**
     * Silently clamped to be between 0 and 1.
     */
    movement_slowdown_factor_y?: float;
    /**
     * Silently clamped to be between 0 and 1.
     */
    movement_slowdown_factor_z?: float;
    /**
     * One of `nested_visualisations`, `animation` and `light` needs to be defined.
     */
    nested_visualisations?: StatelessVisualisation | StatelessVisualisation[];
    offset_x?: RangedValue;
    offset_y?: RangedValue;
    offset_z?: RangedValue;
    particle_tick_offset?: float;
    period?: uint16;
    /**
     * Array may be at most 32 elements.
     */
    positions?: Vector[];
    /**
     * Silently clamped to be between 0 and 1.
     */
    probability?: float;
    render_layer?: RenderLayer;
    scale?: RangedValue;
    /**
     * Shadow variation count must be equal to animation variation count.
     *
     * Only loaded if `animation` is defined.
     */
    shadow?: AnimationVariations;
    speed_x?: RangedValue;
    speed_y?: RangedValue;
    speed_z?: RangedValue;
    spread_progress_duration?: float;
}
type StatelessVisualisations = StatelessVisualisation | StatelessVisualisation[];
interface StatusColors {
    disabled?: Color;
    full_output?: Color;
    idle?: Color;
    insufficient_input?: Color;
    low_power?: Color;
    no_minable_resources?: Color;
    no_power?: Color;
    working?: Color;
}
interface SteeringSettings {
    default: StateSteeringSettings;
    moving: StateSteeringSettings;
}
interface StorageTankPictures {
    flow_sprite?: Sprite;
    fluid_background?: Sprite;
    frozen_patch?: Sprite4Way;
    gas_flow?: Animation;
    picture?: Sprite4Way;
    window_background?: Sprite;
}
interface StreamAttackParameters extends BaseAttackParameters {
    fluid_consumption?: FluidAmount;
    /**
     * Controls which fluids can fuel this stream attack and their potential damage bonuses.
     */
    fluids?: StreamFluidProperties[];
    gun_barrel_length?: float;
    gun_center_shift?: Vector | GunShift4Way;
    projectile_creation_parameters?: CircularProjectileCreationSpecification;
    type: 'stream';
}
interface StreamFluidProperties {
    damage_modifier?: double;
    type: FluidID;
}
interface StreamTriggerDelivery extends TriggerDeliveryItem {
    source_offset?: Vector;
    /**
     * Name of a {@link FluidStreamPrototype | prototype:FluidStreamPrototype}.
     */
    stream: EntityID;
    type: 'stream';
}
/**
 * Sets whether a GUI element can be stretched or squashed.
 */
type StretchRule = /**
 * Stretching/squashing is enabled.
 */
'on' | /**
 * Stretching/squashing is disabled even when the container contains stretchable/squashable elements.
 */
'off' | /**
 * Stretching/squashing depends on the contents of the layout, for example a flow with stretchable element gets stretchable.
 */
'auto' | /**
 * Used only for stretchable (not squashable) properties on scroll panes, labels, check boxes and radio buttons. The element this is set on expands its size to maximum and is stretched at the same time. This means the element takes up its maximum size even before its contents require it.
 */
'stretch_and_expand';
/**
 * Used as an alternative way to specify animations.
 */
interface Stripe {
    filename: FileName;
    /**
     * Mandatory when Stripe is used in {@link Animation | prototype:Animation}.
     *
     * Optional when it is used in {@link RotatedAnimation | prototype:RotatedAnimation}, where it defaults to {@link RotatedAnimation::direction_count | prototype:RotatedAnimation::direction_count}.
     */
    height_in_frames: uint32;
    width_in_frames: uint32;
    x?: uint32;
    y?: uint32;
}
/**
 * Loaded as one of the {@link BaseStyleSpecification | prototype:BaseStyleSpecification} extensions, based on the value of the `type` key.
 */
type StyleSpecification = /**
 * Loaded when the `type` is `"activity_bar_style"`.
 */
ActivityBarStyleSpecification | /**
 * Loaded when the `type` is `"button_style"`.
 */
ButtonStyleSpecification | /**
 * Loaded when the `type` is `"camera_style"`.
 */
CameraStyleSpecification | /**
 * Loaded when the `type` is `"checkbox_style"`.
 */
CheckBoxStyleSpecification | /**
 * Loaded when the `type` is `"dropdown_style"`.
 */
DropDownStyleSpecification | /**
 * Loaded when the `type` is `"flow_style"`.
 */
FlowStyleSpecification | /**
 * Loaded when the `type` is `"frame_style"`.
 */
FrameStyleSpecification | /**
 * Loaded when the `type` is `"graph_style"`.
 */
GraphStyleSpecification | /**
 * Loaded when the `type` is `"horizontal_flow_style"`.
 */
HorizontalFlowStyleSpecification | /**
 * Loaded when the `type` is `"line_style"`.
 */
LineStyleSpecification | /**
 * Loaded when the `type` is `"image_style"`.
 */
ImageStyleSpecification | /**
 * Loaded when the `type` is `"label_style"`.
 */
LabelStyleSpecification | /**
 * Loaded when the `type` is `"list_box_style"`.
 */
ListBoxStyleSpecification | /**
 * Loaded when the `type` is `"progressbar_style"`.
 */
ProgressBarStyleSpecification | /**
 * Loaded when the `type` is `"radiobutton_style"`.
 */
RadioButtonStyleSpecification | /**
 * Loaded when the `type` is `"horizontal_scrollbar_style"`.
 */
HorizontalScrollBarStyleSpecification | /**
 * Loaded when the `type` is `"vertical_scrollbar_style"`.
 */
VerticalScrollBarStyleSpecification | /**
 * Loaded when the `type` is `"scroll_pane_style"`.
 */
ScrollPaneStyleSpecification | /**
 * Loaded when the `type` is `"slider_style"`.
 */
SliderStyleSpecification | /**
 * Loaded when the `type` is `"switch_style"`.
 */
SwitchStyleSpecification | /**
 * Loaded when the `type` is `"table_style"`.
 */
TableStyleSpecification | /**
 * Loaded when the `type` is `"tab_style"`.
 */
TabStyleSpecification | /**
 * Loaded when the `type` is `"textbox_style"`.
 */
TextBoxStyleSpecification | /**
 * Loaded when the `type` is `"vertical_flow_style"`.
 */
VerticalFlowStyleSpecification | /**
 * Loaded when the `type` is `"tabbed_pane_style"`.
 */
TabbedPaneStyleSpecification | /**
 * Loaded when the `type` is `"empty_widget_style"`.
 */
EmptyWidgetStyleSpecification | /**
 * Loaded when the `type` is `"minimap_style"`.
 */
MinimapStyleSpecification | /**
 * Loaded when the `type` is `"technology_slot_style"`.
 */
TechnologySlotStyleSpecification | /**
 * Loaded when the `type` is `"glow_style"`.
 */
GlowStyleSpecification | /**
 * Loaded when the `type` is `"speech_bubble_style"`.
 */
SpeechBubbleStyleSpecification | /**
 * Loaded when the `type` is `"double_slider_style"`.
 */
DoubleSliderStyleSpecification;
interface StyleWithClickableGraphicalSetSpecification extends BaseStyleSpecification {
    clicked_graphical_set?: ElementImageSet;
    default_graphical_set?: ElementImageSet;
    disabled_graphical_set?: ElementImageSet;
    game_controller_selected_hovered_graphical_set?: ElementImageSet;
    hovered_graphical_set?: ElementImageSet;
    left_click_sound?: Sound;
    selected_clicked_graphical_set?: ElementImageSet;
    selected_graphical_set?: ElementImageSet;
    selected_hovered_graphical_set?: ElementImageSet;
}
/**
 * Requires Space Age to use.
 */
interface SurfaceCondition {
    max?: double;
    min?: double;
    property: SurfacePropertyID;
}
/**
 * The name of a {@link SurfacePrototype | prototype:SurfacePrototype}.
 * @example ```
"space-platform"
```
 */
type SurfaceID = string;
/**
 * The name of a {@link SurfacePropertyPrototype | prototype:SurfacePropertyPrototype}.
 * @example ```
"solar-power"
```
 * @example ```
"magnetic-field"
```
 */
type SurfacePropertyID = string;
interface SurfaceRenderParameters {
    clouds?: CloudsEffectProperties;
    day_night_cycle_color_lookup?: DaytimeColorLookupTable;
    /**
     * When set to `true` and `clouds` property is not set, the legacy sprite clouds will be rendered on the surface.
     */
    draw_sprite_clouds?: bool;
    fog?: FogEffectProperties;
    shadow_opacity?: float;
    space_dust_background?: SpaceDustEffectProperties;
    space_dust_foreground?: SpaceDustEffectProperties;
    terrain_tint_effect?: GlobalTintEffectProperties;
}
interface SwitchStyleSpecification extends BaseStyleSpecification {
    active_label?: LabelStyleSpecification;
    button?: ButtonStyleSpecification;
    default_background?: Sprite;
    disabled_background?: Sprite;
    hover_background?: Sprite;
    inactive_label?: LabelStyleSpecification;
    left_button_position?: uint32;
    middle_button_position?: uint32;
    right_button_position?: uint32;
    type: 'switch_style';
}
interface TabStyleSpecification extends StyleWithClickableGraphicalSetSpecification {
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    badge_font?: string;
    badge_horizontal_spacing?: int16;
    default_badge_font_color?: Color;
    default_badge_graphical_set?: ElementImageSet;
    default_font_color?: Color;
    disabled_badge_font_color?: Color;
    disabled_badge_graphical_set?: ElementImageSet;
    disabled_font_color?: Color;
    draw_grayscale_picture?: bool;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    hover_badge_graphical_set?: ElementImageSet;
    increase_height_when_selected?: bool;
    left_edge_selected_graphical_set?: ElementImageSet;
    override_graphics_on_edges?: bool;
    press_badge_graphical_set?: ElementImageSet;
    right_edge_selected_graphical_set?: ElementImageSet;
    selected_badge_font_color?: Color;
    selected_badge_graphical_set?: ElementImageSet;
    selected_font_color?: Color;
    type: 'tab_style';
}
interface TabbedPaneStyleSpecification extends BaseStyleSpecification {
    tab_container?: TableStyleSpecification;
    tab_content_frame?: FrameStyleSpecification;
    type: 'tabbed_pane_style';
    vertical_spacing?: uint32;
}
interface TableStyleSpecification extends BaseStyleSpecification {
    apply_row_graphical_set_per_column?: bool;
    background_graphical_set?: ElementImageSet;
    border?: BorderImageSet;
    bottom_cell_padding?: int16;
    /**
     * Sets `top_cell_padding`, `right_cell_padding`, `bottom_cell_padding` and `left_cell_padding` to the same value.
     */
    cell_padding?: int16;
    clicked_graphical_set?: ElementImageSet;
    column_alignments?: ColumnAlignment[];
    column_graphical_set?: ElementImageSet;
    column_ordering_ascending_button_style?: ButtonStyleSpecification;
    column_ordering_descending_button_style?: ButtonStyleSpecification;
    column_widths?: ColumnWidthItem | ColumnWidth[];
    default_row_graphical_set?: ElementImageSet;
    even_row_graphical_set?: ElementImageSet;
    horizontal_line_color?: Color;
    horizontal_spacing?: int32;
    hovered_graphical_set?: ElementImageSet;
    hovered_row_color?: Color;
    inactive_column_ordering_ascending_button_style?: ButtonStyleSpecification;
    inactive_column_ordering_descending_button_style?: ButtonStyleSpecification;
    left_cell_padding?: int16;
    odd_row_graphical_set?: ElementImageSet;
    right_cell_padding?: int16;
    selected_clicked_graphical_set?: ElementImageSet;
    selected_graphical_set?: ElementImageSet;
    selected_hovered_graphical_set?: ElementImageSet;
    selected_row_color?: Color;
    top_cell_padding?: int16;
    type: 'table_style';
    vertical_line_color?: Color;
    vertical_spacing?: int32;
    wide_as_column_count?: bool;
}
/**
 * The name of a {@link TechnologyPrototype | prototype:TechnologyPrototype}.
 * @example ```
"automated-rail-transportation"
```
 * @example ```
"steel-axe"
```
 */
type TechnologyID = string;
interface TechnologySlotStyleSpecification extends ButtonStyleSpecificationBase {
    clicked_ingredients_background?: ElementImageSet;
    clicked_overlay?: ElementImageSet;
    default_background_shadow?: ElementImageSet;
    default_ingredients_background?: ElementImageSet;
    disabled_ingredients_background?: ElementImageSet;
    highlighted_graphical_set?: ElementImageSet;
    highlighted_ingredients_background?: ElementImageSet;
    hovered_ingredients_background?: ElementImageSet;
    hovered_level_band?: ElementImageSet;
    hovered_level_font_color?: Color;
    hovered_level_range_band?: ElementImageSet;
    hovered_level_range_font_color?: Color;
    ingredient_icon_overlap?: uint32;
    ingredient_icon_size?: uint32;
    ingredients_height?: uint32;
    ingredients_padding?: uint32;
    level_band?: ElementImageSet;
    level_band_height?: uint32;
    level_band_width?: uint32;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    level_font?: string;
    level_font_color?: Color;
    level_offset_x?: int32;
    level_offset_y?: int32;
    level_range_band?: ElementImageSet;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    level_range_font?: string;
    level_range_font_color?: Color;
    level_range_offset_x?: int32;
    level_range_offset_y?: int32;
    progress_bar?: ElementImageSet;
    progress_bar_background?: ElementImageSet;
    progress_bar_color?: Color;
    progress_bar_height?: uint32;
    progress_bar_shadow?: ElementImageSet;
    type: 'technology_slot_style';
}
/**
 * Loaded as one of the technology triggers, based on the value of the `type` key.
 */
type TechnologyTrigger = /**
 * Loaded when the `type` is `"mine-entity"`.
 */
MineEntityTechnologyTrigger | /**
 * Loaded when the `type` is `"craft-item"`.
 */
CraftItemTechnologyTrigger | /**
 * Loaded when the `type` is `"craft-fluid"`.
 */
CraftFluidTechnologyTrigger | /**
 * Loaded when the `type` is `"send-item-to-orbit"`.
 */
SendItemToOrbitTechnologyTrigger | /**
 * Loaded when the `type` is `"capture-spawner"`.
 */
CaptureSpawnerTechnologyTrigger | /**
 * Loaded when the `type` is `"build-entity"`.
 */
BuildEntityTechnologyTrigger | /**
 * Loaded when the `type` is `"create-space-platform"`.
 */
CreateSpacePlatformTechnologyTrigger;
/**
 * Either `count` or `count_formula` must be defined, never both.
 * @example ```
unit =
{
  count_formula = "2^(L-6)*1000",
  ingredients =
  {
    {"automation-science-pack", 1},
    {"logistic-science-pack", 1},
    {"chemical-science-pack", 1},
    {"production-science-pack", 1},
    {"utility-science-pack", 1},
    {"space-science-pack", 1}
  },
  time = 60
}
```
 */
interface TechnologyUnit {
    /**
     * How many units are needed. Must be `> 0`.
     */
    count?: uint64;
    /**
     * Formula that specifies how many units are needed per level of the technology.
     *
     * If the last characters of the prototype name are `-<number>`, the level is taken to be the number, e.g. `physical-projectile-damage-2` implies a number of `2`. This defaults to `1`. There does not need to be lower-level technologies for a technology to be detected as having a level, meaning a technology or sequence of upgrade technologies can begin at any number.
     *
     * For an infinite technology, the level begins at the given suffix (or `1` by default) and gains 1 level upon being researched, or if the `max_level` is reached, marked as completed. The initial level of a technology can not be greater than its `max_level`.
     *
     * `l` and `L` are provided as variables in the expression, they represent the current level of the technology.
     *
     * This formula can also be used at {@link runtime | runtime:LuaHelpers::evaluate_expression}.
     * @example ```
    count_formula = "2500*(L - 3)"
    ```
     */
    count_formula?: MathExpression;
    /**
     * List of ingredients needed for one unit of research. The items must all be {@link ToolPrototypes | prototype:ToolPrototype}.
     */
    ingredients: ResearchIngredient[];
    /**
     * How much time one unit takes to research. In a lab with a crafting speed of `1`, it corresponds to the number of seconds.
     */
    time: double;
}
interface TerritorySettings {
    /**
     * Minimum number of chunks a territory must have. Below this, it will get deleted.
     */
    minimum_territory_size?: uint32;
    /**
     * Mandatory if `units` is not empty.
     */
    territory_index_expression?: string;
    /**
     * The result will be converted to integer, clamped and used as an index for `units` array. Negative values will result in empty spawn location.
     */
    territory_variation_expression?: string;
    /**
     * Names of the {@link SegmentedUnitPrototype | prototype:SegmentedUnitPrototype}.
     */
    units?: EntityID[];
}
interface TextBoxStyleSpecification extends BaseStyleSpecification {
    active_background?: ElementImageSet;
    default_background?: ElementImageSet;
    disabled_background?: ElementImageSet;
    disabled_font_color?: Color;
    /**
     * Name of a {@link FontPrototype | prototype:FontPrototype}.
     */
    font?: string;
    font_color?: Color;
    game_controller_hovered_background?: ElementImageSet;
    rich_text_highlight_error_color?: Color;
    rich_text_highlight_ok_color?: Color;
    rich_text_highlight_warning_color?: Color;
    rich_text_setting?: RichTextSetting;
    selected_rich_text_highlight_error_color?: Color;
    selected_rich_text_highlight_ok_color?: Color;
    selected_rich_text_highlight_warning_color?: Color;
    selection_background_color?: Color;
    type: 'textbox_style';
}
interface ThrowCapsuleAction {
    attack_parameters: AttackParameters;
    type: 'throw';
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool;
}
interface ThrusterGraphicsSet extends WorkingVisualisations {
    flame?: Sprite;
    flame_effect?: EffectTexture;
    flame_effect_height?: float;
    flame_effect_offset?: float;
    flame_effect_width?: float;
    flame_half_height?: float;
    flame_position?: Vector;
}
type ThrusterPerformancePoint = {
    effectivity: double;
    fluid_usage: FluidAmount;
    fluid_volume: double;
} | [
    double,
    double,
    double
];
interface TileAndAlpha {
    alpha: float;
    tile: TileID;
}
/**
 * Used for particles created with {@link apply_tile_tint | prototype:CreateParticleTriggerEffectItem::apply_tile_tint} defined.
 */
interface TileBasedParticleTints {
    primary?: Color;
    secondary?: Color;
}
interface TileBuildSound {
    animated?: Sound;
    large?: Sound;
    medium?: Sound;
    small?: Sound;
}
interface TileBuildabilityRule {
    area: SimpleBoundingBox;
    colliding_tiles?: CollisionMaskConnector;
    remove_on_collision?: bool;
    required_tiles?: CollisionMaskConnector;
}
/**
 * The name of an {@link TileEffectDefinition | prototype:TileEffectDefinition}.
 * @example ```
"water"
```
 */
type TileEffectDefinitionID = string;
/**
 * The name of a {@link TilePrototype | prototype:TilePrototype}.
 * @example ```
"grass-2"
```
 * @example ```
"landfill"
```
 */
type TileID = string;
/**
 * Name of an allowed tile, or a list of two tile names for entities allowed on transitions.
 */
type TileIDRestriction = TileID | [
    TileID,
    TileID
];
interface TileLightPictures extends TileSpriteLayout {
    /**
     * Only powers of 2 from 1 to 128 can be used. Square size of the tile arrangement this sprite is used for. Used to calculate the `width` and `height` of the sprite which cannot be set directly. (width or height) = size * 32 / scale.
     */
    size: uint32;
}
interface TileMainPictures extends TileSpriteLayout {
    /**
     * Probability of 1x1 (size = 1) version of tile must be 1.
     */
    probability?: double;
    /**
     * Only powers of 2 from 1 to 128 can be used. Square size of the tile arrangement this sprite is used for. Used to calculate the `width` and `height` of the sprite which cannot be set directly. (width or height) = size * 32 / scale.
     */
    size: uint32;
    weights?: double[];
}
/**
 * Coordinates of a tile on a map where each integer `x`/`y` represents a different tile. This uses the same format as {@link MapPosition | prototype:MapPosition}, except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
 */
type TilePosition = {
    x: int32;
    y: int32;
} | [
    int32,
    int32
];
type TileRenderLayer = /**
 * 64 layers. Used for tile sprites above background (e.g. transitions to out-of-map).
 */
'zero' | /**
 * 16 layers. Used for water related tile sprites. Water shaders are rendered above these layers.
 */
'water' | /**
 * 64 layers. Used for lowland tiles and tile transitions to water that are desired to be drawn under the ground sprites. Puddles are rendered above these layers.
 */
'water-overlay' | /**
 * 256 layers. Used for natural tile sprites above water. Global tile tint shaders are rendered above these layers.
 */
'ground-natural' | /**
 * 128 layers. Used for tile sprites which are intended to be above natural ground. Like tiles that player can build.
 */
'ground-artificial' | /**
 * 1 layer. The top most tile render layer.
 */
'top';
interface TileSpriteLayout {
    /**
     * Frame count.
     */
    count?: uint8;
    /**
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint8;
    picture: FileName;
    scale?: float;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType;
}
interface TileSpriteLayoutVariant {
    /**
     * Frame count.
     */
    count?: uint8;
    /**
     * Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. 0 means that all the pictures are in one horizontal line.
     */
    line_length?: uint8;
    scale?: float;
    spritesheet?: FileName;
    /**
     * Height of the transition sprite in tiles. May be 1 or 2. It is forced to 1 for mask layers and for o_transition. A tile is considered 32px with scale 1 (so 64px with scale 0.5). Shift of the sprite will be adjusted such that the top 1x1 tile is centered on a tile being drawn (so it will be
     * ```
     * {0, 0.5*(tile_height - 1)}
     * ```
     * ) It can be anything between 1 to 8 for `background` layer if `draw_background_layer_under_tiles` is set to true.
     */
    tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType;
}
/**
 * The properties from the parent TileSpriteLayoutVariant provide defaults for the TileTransitionVariantLayouts.
 *
 * The `{inner_corner | outer_corner | side | double_side | u_transition | o_transition}_*` properties provide defaults for the corresponding properties in the TileTransitionVariantLayouts. They are used when the TileTransitionVariantLayouts have the same layout. See the example below.
 * @example ```
-- all the layers use the same layout, at different offsets inside the spritesheet
layout =
{
  scale = 0.5,
  inner_corner_count = 8,
  outer_corner_count = 8,
  o_transition_count = 1,
  outer_corner_x = 576,
  u_transition_x = 1728,

  overlay = { y_offset = 0 },  -- 0 is default, but by defining overlay property, we enable the layer
  mask = { y_offset = 512 },
  background = { y_offset = 1024 }
}
```
 */
interface TileTransitionSpritesheetLayout extends TileSpriteLayoutVariant {
    /**
     * Only loaded if {@link TileTransitions::auxiliary_effect_mask_layout | prototype:TileTransitions::auxiliary_effect_mask_layout} is not defined in the TileTransitions that load this.
     */
    auxiliary_effect_mask?: TileTransitionVariantLayout;
    /**
     * Only loaded if {@link TileTransitions::background_layout | prototype:TileTransitions::background_layout} is not defined in the TileTransitions that load this.
     */
    background?: TileTransitionVariantLayout;
    /**
     * Only loaded if {@link TileTransitions::background_mask_layout | prototype:TileTransitions::background_mask_layout} is not defined in the TileTransitions that load this.
     */
    background_mask?: TileTransitionVariantLayout;
    double_side_count?: uint8;
    double_side_line_length?: uint8;
    double_side_scale?: float;
    double_side_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    double_side_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    double_side_y?: SpriteSizeType;
    /**
     * Only loaded if {@link TileTransitions::effect_map_layout | prototype:TileTransitions::effect_map_layout} is not defined in the TileTransitions that load this.
     */
    effect_map?: TileTransitionVariantLayout;
    inner_corner_count?: uint8;
    inner_corner_line_length?: uint8;
    inner_corner_scale?: float;
    inner_corner_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    inner_corner_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    inner_corner_y?: SpriteSizeType;
    /**
     * Only loaded if {@link TileTransitions::lightmap_layout | prototype:TileTransitions::lightmap_layout} is not defined in the TileTransitions that load this.
     */
    lightmap?: TileTransitionVariantLayout;
    /**
     * Only loaded if {@link TileTransitions::mask_layout | prototype:TileTransitions::mask_layout} is not defined in the TileTransitions that load this.
     */
    mask?: TileTransitionVariantLayout;
    o_transition_count?: uint8;
    o_transition_line_length?: uint8;
    o_transition_scale?: float;
    o_transition_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    o_transition_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    o_transition_y?: SpriteSizeType;
    outer_corner_count?: uint8;
    outer_corner_line_length?: uint8;
    outer_corner_scale?: float;
    outer_corner_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    outer_corner_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    outer_corner_y?: SpriteSizeType;
    /**
     * Only loaded if {@link TileTransitions::overlay_layout | prototype:TileTransitions::overlay_layout} is not defined in the TileTransitions that load this.
     */
    overlay?: TileTransitionVariantLayout;
    side_count?: uint8;
    side_line_length?: uint8;
    side_scale?: float;
    side_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    side_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    side_y?: SpriteSizeType;
    u_transition_count?: uint8;
    u_transition_line_length?: uint8;
    u_transition_scale?: float;
    u_transition_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    u_transition_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    u_transition_y?: SpriteSizeType;
}
/**
 * The properties from the parent TileSpriteLayoutVariant provide defaults for the properties defined here.
 *
 * The `{inner_corner | outer_corner | side | double_side | u_transition | o_transition}_*` properties provide defaults for the properties inside the specific variant. They are used to specify select values for the variant without creating the table for the variant.
 *
 * These various ways to define the variants are also shown in the examples below.
 * @example ```
-- longest version, using TileSpriteLayoutVariant tables for each variant
{
  inner_corner =
  {
    scale = 0.5,
    count = 8,
  },
  outer_corner =
  {
    scale = 0.5,
    count = 8,
    x = 576
  },
  u_transition  =
  {
    scale = 0.5,
    count = 1,
    x = 1728
  },
  [...]
}
```
 * @example ```
-- The above version is quite verbose, scale is duplicated in each variant layout.
-- So it is possible to define default value of each property of TileSpriteLayoutVariant directly in TileTransitionVariantLayout:
{
  scale = 0.5,
  inner_corner =
  {
    count = 8,
  },
  outer_corner =
  {
    count = 8,
    x = 576
  },
  u_transition  =
  {
    count = 1,
    x = 1728
  },
  [...]
}
```
 * @example ```
-- The above version is creating a table to just specify inner_corner has 8 count. It can be shorter by using variant prefix properties:
{
  scale = 0.5,
  inner_corner_count = 8,
  outer_corner_count = 8,
  u_transition_count = 1,
  outer_corner_x = 576,
  u_transition_x = 1728,
  [...]
}
```
 */
interface TileTransitionVariantLayout extends TileSpriteLayoutVariant {
    /**
     * Defaults to the values set in the `double_side_*` properties.
     */
    double_side?: TileSpriteLayoutVariant;
    double_side_count?: uint8;
    double_side_line_length?: uint8;
    double_side_scale?: float;
    double_side_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    double_side_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    double_side_y?: SpriteSizeType;
    /**
     * Defaults to the values set in the `inner_corner_*` properties.
     */
    inner_corner?: TileSpriteLayoutVariant;
    inner_corner_count?: uint8;
    inner_corner_line_length?: uint8;
    inner_corner_scale?: float;
    inner_corner_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    inner_corner_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    inner_corner_y?: SpriteSizeType;
    /**
     * Defaults to the values set in the `o_transition_*` properties.
     */
    o_transition?: TileSpriteLayoutVariant;
    o_transition_count?: uint8;
    o_transition_line_length?: uint8;
    o_transition_scale?: float;
    o_transition_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    o_transition_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    o_transition_y?: SpriteSizeType;
    /**
     * Defaults to the values set in the `outer_corner_*` properties.
     */
    outer_corner?: TileSpriteLayoutVariant;
    outer_corner_count?: uint8;
    outer_corner_line_length?: uint8;
    outer_corner_scale?: float;
    outer_corner_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    outer_corner_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    outer_corner_y?: SpriteSizeType;
    /**
     * Defaults to the values set in the `side_*` properties.
     */
    side?: TileSpriteLayoutVariant;
    side_count?: uint8;
    side_line_length?: uint8;
    side_scale?: float;
    side_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    side_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    side_y?: SpriteSizeType;
    /**
     * Defaults to the values set in the `u_transition_*` properties.
     */
    u_transition?: TileSpriteLayoutVariant;
    u_transition_count?: uint8;
    u_transition_line_length?: uint8;
    u_transition_scale?: float;
    u_transition_tile_height?: uint8;
    /**
     * Horizontal position of the sprite in the source file in pixels.
     */
    u_transition_x?: SpriteSizeType;
    /**
     * Vertical position of the sprite in the source file in pixels.
     */
    u_transition_y?: SpriteSizeType;
    x_offset?: SpriteSizeType;
    y_offset?: SpriteSizeType;
}
/**
 * Used for {@link TilePrototype | prototype:TilePrototype} graphics.
 *
 * Use `layout` with `spritesheet` to define all the tile layers inside the `layout` property. The `*_enabled`, `*_layout` and `*_spritesheet` properties can be used to override specific layers of a reused layout.
 */
interface TileTransitions {
    apply_effect_color_to_overlay?: bool;
    apply_waving_effect_on_background_mask?: bool;
    apply_waving_effect_on_masks?: bool;
    auxiliary_effect_mask_enabled?: bool;
    /**
     * Overrides the `auxiliary_effect_mask` definition inside `layout`.
     */
    auxiliary_effect_mask_layout?: TileTransitionVariantLayout;
    /**
     * Only loaded if `layout` or `auxiliary_effect_mask_layout` is defined.
     *
     * Default spritesheet for `auxiliary_effect_mask_layout` and `layout.auxiliary_effect_mask`.
     */
    auxiliary_effect_mask_spritesheet?: FileName;
    background_enabled?: bool;
    background_layer_group?: TileRenderLayer;
    background_layer_offset?: int8;
    /**
     * Overrides the `background` definition inside `layout`.
     */
    background_layout?: TileTransitionVariantLayout;
    background_mask_enabled?: bool;
    /**
     * Overrides the `background_mask` definition inside `layout`.
     */
    background_mask_layout?: TileTransitionVariantLayout;
    /**
     * Only loaded if `layout` or `background_mask_layout` is defined.
     *
     * Default spritesheet for `background_mask_layout` and `layout.background_mask`.
     */
    background_mask_spritesheet?: FileName;
    /**
     * Only loaded if `layout` or `background_layout` is defined.
     *
     * Default spritesheet for `background_layout` and `layout.background`.
     */
    background_spritesheet?: FileName;
    double_side_variations_in_group?: uint8;
    double_side_weights?: float[];
    draw_background_layer_under_tiles?: bool;
    draw_simple_outer_corner_over_diagonal?: bool;
    effect_map_enabled?: bool;
    /**
     * Overrides the `effect_map` definition inside `layout`.
     */
    effect_map_layout?: TileTransitionVariantLayout;
    /**
     * Only loaded if `layout` or `effect_map_layout` is defined.
     *
     * Default spritesheet for `effect_map_layout` and `layout.effect_map`.
     */
    effect_map_spritesheet?: FileName;
    inner_corner_weights?: float[];
    layout?: TileTransitionSpritesheetLayout;
    lightmap_enabled?: bool;
    /**
     * Overrides the `lightmap` definition inside `layout`.
     */
    lightmap_layout?: TileTransitionVariantLayout;
    /**
     * Only loaded if `layout` or `lightmap_layout` is defined.
     *
     * Default spritesheet for `lightmap_layout` and `layout.lightmap`.
     */
    lightmap_spritesheet?: FileName;
    mask_enabled?: bool;
    /**
     * Overrides the `mask` definition inside `layout`.
     */
    mask_layout?: TileTransitionVariantLayout;
    /**
     * Only loaded if `layout` or `mask_layout` is defined.
     *
     * Default spritesheet for `mask_layout` and `layout.mask`.
     */
    mask_spritesheet?: FileName;
    masked_background_layer_offset?: int8;
    masked_overlay_layer_offset?: int8;
    offset_background_layer_by_tile_layer?: bool;
    outer_corner_weights?: float[];
    overlay_enabled?: bool;
    overlay_layer_group?: TileRenderLayer;
    overlay_layer_offset?: int8;
    /**
     * Overrides the `overlay` definition inside `layout`.
     */
    overlay_layout?: TileTransitionVariantLayout;
    side_variations_in_group?: uint8;
    side_weights?: float[];
    /**
     * Default spritesheet for all TileSpriteLayouts.
     */
    spritesheet?: FileName;
    u_transition_weights?: float[];
    water_patch?: Sprite;
    waving_effect_time_scale?: float;
}
interface TileTransitionsBetweenTransitions extends TileTransitions {
    transition_group1: uint8;
    transition_group2: uint8;
}
interface TileTransitionsToTiles extends TileTransitions {
    to_tiles: TileID[];
    transition_group: uint8;
}
interface TileTransitionsVariants {
    empty_transitions?: bool;
    light?: TileLightPictures[];
    main: TileMainPictures[];
    material_background?: MaterialTextureParameters;
    /**
     * Must have the same `count` as material_background.
     */
    material_light?: MaterialTextureParameters;
    material_texture_height_in_tiles?: uint8;
    material_texture_width_in_tiles?: uint8;
    /**
     * Only loaded, and mandatory if `empty_transitions` is `false`.
     */
    transition?: TileTransitions;
}
interface TimeElapsedTipTrigger {
    ticks: uint32;
    type: 'time-elapsed';
}
interface TimeSinceLastTipActivationTipTrigger {
    ticks: MapTick;
    type: 'time-since-last-tip-activation';
}
/**
 * One frame in time for a Bezier interpolation.
 */
interface TintProcessionBezierControlPoint {
    /**
     * `opacity` and `opacity_t` interpolate a double smoothly over time.
     */
    opacity?: double;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    opacity_t?: double;
    /**
     * Mandatory if `opacity` or `tint_upper` or `tint_lower` is defined.
     */
    timestamp?: MapTick;
    /**
     * `tint_lower` and `tint_lower_t` interpolate a color smoothly over time.
     */
    tint_lower?: Color;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    tint_lower_t?: Color;
    /**
     * `tint_upper` and `tint_upper_t` interpolate a color smoothly over time.
     */
    tint_upper?: Color;
    /**
     * Bidirectional tangent at the given timestamp.
     */
    tint_upper_t?: Color;
}
/**
 * Fullscreen overlay which blends gradient from top to bottom edge of the screen using {@link premultiplied alpha blending | prototype:BlendMode::normal}.
 */
interface TintProcessionLayer {
    frames: TintProcessionBezierControlPoint[];
    render_layer?: RenderLayer;
    type: 'tint';
}
/**
 * This is used by {@link TipsAndTricksItem | prototype:TipsAndTricksItem} for the initial starting status. One of the following values:
 */
type TipStatus = /**
 * The tip is hidden.
 */
'locked' | /**
 * Same as `"locked"`.
 */
'optional' | /**
 * The {@link trigger | prototype:TipsAndTricksItem::trigger} for the tip was already met, but the tip is still hidden because of dependencies.
 */
'dependencies-not-met' | /**
 * Not suggested by trigger yet, but visible in the window. This is also the state that tips are left in when the /unlock-tips command is used in-game.
 */
'unlocked' | /**
 * The dependencies and triggers are met, the game suggests the tip, shows the notification icon in the GUI.
 */
'suggested' | 'not-to-be-suggested' | /**
 * The tip is considered completed.
 */
'completed-without-tutorial' | /**
 * The tip is considered completed.
 */
'completed';
/**
 * Loaded as one of the tip triggers, based on the value of the `type` key.
 */
type TipTrigger = /**
 * Loaded when the `type` is `"or"`.
 */
OrTipTrigger | /**
 * Loaded when the `type` is `"and"`.
 */
AndTipTrigger | /**
 * Loaded when the `type` is `"sequence"`.
 */
SequenceTipTrigger | /**
 * Loaded when the `type` is `"dependencies-met"`.
 */
DependenciesMetTipTrigger | /**
 * Loaded when the `type` is `"time-elapsed"`.
 */
TimeElapsedTipTrigger | /**
 * Loaded when the `type` is `"time-since-last-tip-activation"`.
 */
TimeSinceLastTipActivationTipTrigger | /**
 * Loaded when the `type` is `"research"`.
 */
ResearchTechnologyTipTrigger | /**
 * Loaded when the `type` is `"research-with-science-pack"`.
 */
ResearchWithSciencePackTipTrigger | /**
 * Loaded when the `type` is `"unlock-recipe"`.
 */
UnlockRecipeTipTrigger | /**
 * Loaded when the `type` is `"craft-item"`.
 */
CraftItemTipTrigger | /**
 * Loaded when the `type` is `"build-entity"`.
 */
BuildEntityTipTrigger | /**
 * Loaded when the `type` is `"manual-transfer"`.
 */
ManualTransferTipTrigger | /**
 * Loaded when the `type` is `"module-transfer"`.
 */
ModuleTransferTipTrigger | /**
 * Loaded when the `type` is `"stack-transfer"`.
 */
StackTransferTipTrigger | /**
 * Loaded when the `type` is `"entity-transfer"`.
 */
EntityTransferTipTrigger | /**
 * Loaded when the `type` is `"drop-item"`.
 */
DropItemTipTrigger | /**
 * Loaded when the `type` is `"set-recipe"`.
 */
SetRecipeTipTrigger | /**
 * Loaded when the `type` is `"set-filter"`.
 */
SetFilterTipTrigger | /**
 * Loaded when the `type` is `"limit-chest"`.
 */
LimitChestTipTrigger | /**
 * Loaded when the `type` is `"use-pipette"`.
 */
UsePipetteTipTrigger | /**
 * Loaded when the `type` is `"set-logistic-request"`.
 */
SetLogisticRequestTipTrigger | /**
 * Loaded when the `type` is `"use-confirm"`.
 */
UseConfirmTipTrigger | /**
 * Loaded when the `type` is `"toggle-show-entity-info"`.
 */
ToggleShowEntityInfoTipTrigger | /**
 * Loaded when the `type` is `"generating-power"`.
 */
GeneratingPowerTipTrigger | /**
 * Loaded when the `type` is `"low-power"`.
 */
LowPowerTipTrigger | /**
 * Loaded when the `type` is `"paste-entity-settings"`.
 */
PasteEntitySettingsTipTrigger | /**
 * Loaded when the `type` is `"fast-replace"`.
 */
FastReplaceTipTrigger | /**
 * Loaded when the `type` is `"group-attack"`.
 */
GroupAttackTipTrigger | /**
 * Loaded when the `type` is `"fast-belt-bend"`.
 */
FastBeltBendTipTrigger | /**
 * Loaded when the `type` is `"belt-traverse"`.
 */
BeltTraverseTipTrigger | /**
 * Loaded when the `type` is `"place-equipment"`.
 */
PlaceEquipmentTipTrigger | /**
 * Loaded when the `type` is `"clear-cursor"`.
 */
ClearCursorTipTrigger | /**
 * Loaded when the `type` is `"rotate-entity"`.
 */
RotateEntityTipTrigger | /**
 * Loaded when the `type` is `"flip-entity"`.
 */
FlipEntityTipTrigger | /**
 * Loaded when the `type` is `"alternative-build"`.
 */
AlternativeBuildTipTrigger | /**
 * Loaded when the `type` is `"gate-over-rail-build"`.
 */
GateOverRailBuildTipTrigger | /**
 * Loaded when the `type` is `"manual-wire-drag"`.
 */
ManualWireDragTipTrigger | /**
 * Loaded when the `type` is `"shoot"`.
 */
ShootTipTrigger | /**
 * Loaded when the `type` is `"change-surface"`.
 */
ChangeSurfaceTipTrigger | /**
 * Loaded when the `type` is `"apply-starter-pack"`.
 */
ApplyStarterPackTipTrigger | /**
 * Loaded when the `type` is `"mine-item-by-robot"`.
 */
MineItemByRobotTipTrigger | /**
 * Loaded when the `type` is `"build-entity-by-robot"`.
 */
BuildEntityByRobotTipTrigger | /**
 * Loaded when the `type` is `"plan-train-path"`.
 */
PlanTrainPathTipTrigger | /**
 * Loaded when the `type` is `"use-rail-planner"`.
 */
UseRailPlannerTipTrigger | /**
 * Loaded when the `type` is `"toggle-rail-layer"`.
 */
ToggleRailLayerTipTrigger | /**
 * Loaded when the `type` is `"enter-vehicle"`.
 */
EnterVehicleTipTrigger | /**
 * Loaded when the `type` is `"send-spidertron"`.
 */
SendSpidertronTipTrigger | /**
 * Loaded when the `type` is `"activate-paste"`.
 */
ActivatePasteTipTrigger | /**
 * Loaded when the `type` is `"kill"`.
 */
KillTipTrigger;
interface ToggleRailLayerTipTrigger extends CountBasedTipTrigger {
    type: 'toggle-rail-layer';
}
interface ToggleShowEntityInfoTipTrigger extends CountBasedTipTrigger {
    type: 'toggle-show-entity-info';
}
interface TrainBrakingForceBonusModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'train-braking-force-bonus';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface TrainPathFinderConstants {
    signal_reserved_by_circuit_network_penalty: uint32;
    stopped_manually_controlled_train_penalty: uint32;
    stopped_manually_controlled_train_without_passenger_penalty: uint32;
    train_arriving_to_signal_penalty: uint32;
    train_arriving_to_station_penalty: uint32;
    train_auto_without_schedule_penalty: uint32;
    train_in_station_penalty: uint32;
    train_in_station_with_no_other_valid_stops_in_schedule: uint32;
    train_stop_penalty: uint32;
    train_waiting_at_signal_penalty: uint32;
    /**
     * Must be >= 0.
     */
    train_waiting_at_signal_tick_multiplier_penalty: float;
    train_with_no_path_penalty: uint32;
}
interface TrainStopDrawingBoxes {
    east: BoundingBox;
    north: BoundingBox;
    south: BoundingBox;
    west: BoundingBox;
}
interface TrainStopLight {
    light: LightDefinition;
    picture: Sprite4Way;
    red_picture: Sprite4Way;
}
interface TrainVisualizationConstants {
    box_length: float;
    box_width: float;
    connection_distance: float;
    final_margin: float;
    joint_distance: float;
    last_box_color: Color;
    not_last_box_color: Color;
    stock_number_scale: float;
}
interface TransitionApplication {
    offset?: bool;
    pod_offset?: bool;
    rotation?: bool;
}
interface TransportBeltAnimationSet {
    alternate?: bool;
    animation_set: RotatedAnimation;
    belt_reader?: BeltReaderLayer[];
    east_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    east_index_frozen?: uint8;
    ending_east_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    ending_east_index_frozen?: uint8;
    ending_north_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    ending_north_index_frozen?: uint8;
    ending_south_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    ending_south_index_frozen?: uint8;
    ending_west_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    ending_west_index_frozen?: uint8;
    frozen_patch?: RotatedSprite;
    north_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    north_index_frozen?: uint8;
    south_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    south_index_frozen?: uint8;
    starting_east_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    starting_east_index_frozen?: uint8;
    starting_north_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    starting_north_index_frozen?: uint8;
    starting_south_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    starting_south_index_frozen?: uint8;
    starting_west_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    starting_west_index_frozen?: uint8;
    west_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    west_index_frozen?: uint8;
}
interface TransportBeltAnimationSetWithCorners extends TransportBeltAnimationSet {
    east_to_north_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    east_to_north_index_frozen?: uint8;
    east_to_south_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    east_to_south_index_frozen?: uint8;
    north_to_east_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    north_to_east_index_frozen?: uint8;
    north_to_west_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    north_to_west_index_frozen?: uint8;
    south_to_east_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    south_to_east_index_frozen?: uint8;
    south_to_west_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    south_to_west_index_frozen?: uint8;
    west_to_north_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    west_to_north_index_frozen?: uint8;
    west_to_south_index?: uint8;
    /**
     * Only loaded if `frozen_patch` is defined.
     */
    west_to_south_index_frozen?: uint8;
}
/**
 * Used to define the graphics for the (in vanilla) yellow frame that is used when a {@link TransportBeltPrototype | prototype:TransportBeltPrototype} is connected to the circuit network.
 */
interface TransportBeltConnectorFrame {
    frame_back_patch?: SpriteVariations;
    frame_front_patch?: SpriteVariations;
    frame_main: AnimationVariations;
    frame_main_scanner: Animation;
    frame_main_scanner_cross_horizontal_end_shift: Vector;
    frame_main_scanner_cross_horizontal_rotation: RealOrientation;
    frame_main_scanner_cross_horizontal_start_shift: Vector;
    frame_main_scanner_cross_horizontal_y_scale: float;
    frame_main_scanner_cross_vertical_end_shift: Vector;
    frame_main_scanner_cross_vertical_rotation: RealOrientation;
    frame_main_scanner_cross_vertical_start_shift: Vector;
    frame_main_scanner_cross_vertical_y_scale: float;
    frame_main_scanner_horizontal_end_shift: Vector;
    frame_main_scanner_horizontal_rotation: RealOrientation;
    frame_main_scanner_horizontal_start_shift: Vector;
    frame_main_scanner_horizontal_y_scale: float;
    frame_main_scanner_movement_speed: float;
    frame_main_scanner_nw_ne: Animation;
    frame_main_scanner_sw_se: Animation;
    frame_main_scanner_vertical_end_shift: Vector;
    frame_main_scanner_vertical_rotation: RealOrientation;
    frame_main_scanner_vertical_start_shift: Vector;
    frame_main_scanner_vertical_y_scale: float;
    frame_shadow: AnimationVariations;
}
/**
 * Tree has number of "dying" stages, which is deduced from frame count of `shadow` if shadow is defined, otherwise from frame count of `trunk`. Frame count of `leaves` has to be one less than deduced number stages, as last stage is always assumed to be leafless.
 */
interface TreeVariation {
    branch_generation: CreateParticleTriggerEffectItem;
    /**
     * Only loaded if `shadow` is present. Defaults to `shadow.frame_count - 1`.
     */
    disable_shadow_distortion_beginning_at_frame?: uint32;
    leaf_generation: CreateParticleTriggerEffectItem;
    leaves: Animation;
    /**
     * Normal must have the same frame_count as `leaves`.
     */
    normal?: Animation;
    /**
     * Overlay must have the same frame_count as `leaves`. Won't be tinted by the tree color unless `apply_runtime_tint` is set to `true` in the sprite definition. See {@link here | https://forums.factorio.com/viewtopic.php?p=547758#p547758}.
     */
    overlay?: Animation;
    /**
     * Shadow must have 1 more `frame_count` than `leaves`.
     */
    shadow?: Animation;
    /**
     * If `shadow` is not specified, this has to have one more frame than `leaves`.
     */
    trunk: Animation;
    underwater?: Animation;
    underwater_layer_offset?: int8;
    water_reflection?: WaterReflectionDefinition;
}
/**
 * Loaded as one of the {@link TriggerItem | prototype:TriggerItem} extensions, based on the value of the `type` key.
 */
type Trigger = (/**
 * Loaded when the `type` is `"direct"`.
 */
DirectTriggerItem | /**
 * Loaded when the `type` is `"area"`.
 */
AreaTriggerItem | /**
 * Loaded when the `type` is `"line"`.
 */
LineTriggerItem | /**
 * Loaded when the `type` is `"cluster"`.
 */
ClusterTriggerItem) | (/**
 * Loaded when the `type` is `"direct"`.
 */
DirectTriggerItem | /**
 * Loaded when the `type` is `"area"`.
 */
AreaTriggerItem | /**
 * Loaded when the `type` is `"line"`.
 */
LineTriggerItem | /**
 * Loaded when the `type` is `"cluster"`.
 */
ClusterTriggerItem)[];
/**
 * Loaded as one of the {@link TriggerDeliveryItem | prototype:TriggerDeliveryItem} extensions, based on the value of the `type` key.
 */
type TriggerDelivery = /**
 * Loaded when the `type` is `"instant"`.
 */
InstantTriggerDelivery | /**
 * Loaded when the `type` is `"projectile"`.
 */
ProjectileTriggerDelivery | /**
 * Loaded when the `type` is `"beam"`.
 */
BeamTriggerDelivery | /**
 * Loaded when the `type` is `"stream"`.
 */
StreamTriggerDelivery | /**
 * Loaded when the `type` is `"artillery"`.
 */
ArtilleryTriggerDelivery | /**
 * Loaded when the `type` is `"chain"`.
 */
ChainTriggerDelivery | /**
 * Loaded when the `type` is `"delayed"`.
 */
DelayedTriggerDelivery;
/**
 * The abstract base of all {@link TriggerDeliveries | prototype:TriggerDelivery}.
 */
interface TriggerDeliveryItem {
    /**
     * Provides the source of the TriggerDelivery as as both the source and target of the effect.
     */
    source_effects?: TriggerEffect;
    target_effects?: TriggerEffect;
}
/**
 * Loaded as one of the {@link TriggerEffectItem | prototype:TriggerEffectItem} extensions, based on the value of the `type` key.
 */
type TriggerEffect = (/**
 * Loaded when the `type` is `"damage"`.
 */
DamageTriggerEffectItem | /**
 * Loaded when the `type` is `"create-entity"`.
 */
CreateEntityTriggerEffectItem | /**
 * Loaded when the `type` is `"create-explosion"`.
 */
CreateExplosionTriggerEffectItem | /**
 * Loaded when the `type` is `"create-fire"`.
 */
CreateFireTriggerEffectItem | /**
 * Loaded when the `type` is `"create-smoke"`.
 */
CreateSmokeTriggerEffectItem | /**
 * Loaded when the `type` is `"create-trivial-smoke"`.
 */
CreateTrivialSmokeEffectItem | /**
 * Loaded when the `type` is `"create-asteroid-chunk"`.
 */
CreateAsteroidChunkEffectItem | /**
 * Loaded when the `type` is `"create-particle"`.
 */
CreateParticleTriggerEffectItem | /**
 * Loaded when the `type` is `"create-sticker"`.
 */
CreateStickerTriggerEffectItem | /**
 * Loaded when the `type` is `"create-decorative"`.
 */
CreateDecorativesTriggerEffectItem | /**
 * Loaded when the `type` is `"nested-result"`.
 */
NestedTriggerEffectItem | /**
 * Loaded when the `type` is `"play-sound"`.
 */
PlaySoundTriggerEffectItem | /**
 * Loaded when the `type` is `"push-back"`.
 */
PushBackTriggerEffectItem | /**
 * Loaded when the `type` is `"destroy-cliffs"`.
 */
DestroyCliffsTriggerEffectItem | /**
 * Loaded when the `type` is `"show-explosion-on-chart"`.
 */
ShowExplosionOnChartTriggerEffectItem | /**
 * Loaded when the `type` is `"insert-item"`.
 */
InsertItemTriggerEffectItem | /**
 * Loaded when the `type` is `"script"`.
 */
ScriptTriggerEffectItem | /**
 * Loaded when the `type` is `"set-tile"`.
 */
SetTileTriggerEffectItem | /**
 * Loaded when the `type` is `"invoke-tile-trigger"`.
 */
InvokeTileEffectTriggerEffectItem | /**
 * Loaded when the `type` is `"destroy-decoratives"`.
 */
DestroyDecorativesTriggerEffectItem | /**
 * Loaded when the `type` is `"camera-effect"`.
 */
CameraEffectTriggerEffectItem | /**
 * Loaded when the `type` is `"activate-impact"`.
 */
ActivateImpactTriggerEffectItem) | (/**
 * Loaded when the `type` is `"damage"`.
 */
DamageTriggerEffectItem | /**
 * Loaded when the `type` is `"create-entity"`.
 */
CreateEntityTriggerEffectItem | /**
 * Loaded when the `type` is `"create-explosion"`.
 */
CreateExplosionTriggerEffectItem | /**
 * Loaded when the `type` is `"create-fire"`.
 */
CreateFireTriggerEffectItem | /**
 * Loaded when the `type` is `"create-smoke"`.
 */
CreateSmokeTriggerEffectItem | /**
 * Loaded when the `type` is `"create-trivial-smoke"`.
 */
CreateTrivialSmokeEffectItem | /**
 * Loaded when the `type` is `"create-asteroid-chunk"`.
 */
CreateAsteroidChunkEffectItem | /**
 * Loaded when the `type` is `"create-particle"`.
 */
CreateParticleTriggerEffectItem | /**
 * Loaded when the `type` is `"create-sticker"`.
 */
CreateStickerTriggerEffectItem | /**
 * Loaded when the `type` is `"create-decorative"`.
 */
CreateDecorativesTriggerEffectItem | /**
 * Loaded when the `type` is `"nested-result"`.
 */
NestedTriggerEffectItem | /**
 * Loaded when the `type` is `"play-sound"`.
 */
PlaySoundTriggerEffectItem | /**
 * Loaded when the `type` is `"push-back"`.
 */
PushBackTriggerEffectItem | /**
 * Loaded when the `type` is `"destroy-cliffs"`.
 */
DestroyCliffsTriggerEffectItem | /**
 * Loaded when the `type` is `"show-explosion-on-chart"`.
 */
ShowExplosionOnChartTriggerEffectItem | /**
 * Loaded when the `type` is `"insert-item"`.
 */
InsertItemTriggerEffectItem | /**
 * Loaded when the `type` is `"script"`.
 */
ScriptTriggerEffectItem | /**
 * Loaded when the `type` is `"set-tile"`.
 */
SetTileTriggerEffectItem | /**
 * Loaded when the `type` is `"invoke-tile-trigger"`.
 */
InvokeTileEffectTriggerEffectItem | /**
 * Loaded when the `type` is `"destroy-decoratives"`.
 */
DestroyDecorativesTriggerEffectItem | /**
 * Loaded when the `type` is `"camera-effect"`.
 */
CameraEffectTriggerEffectItem | /**
 * Loaded when the `type` is `"activate-impact"`.
 */
ActivateImpactTriggerEffectItem)[];
/**
 * The abstract base of all {@link TriggerEffects | prototype:TriggerEffect}.
 */
interface TriggerEffectItem {
    affects_target?: bool;
    /**
     * Guaranteed to work with {@link EntityWithHealthPrototype::damaged_trigger_effect | prototype:EntityWithHealthPrototype::damaged_trigger_effect} and {@link EntityWithHealthPrototype::dying_trigger_effect | prototype:EntityWithHealthPrototype::dying_trigger_effect}. Unknown if it works with other properties that use {@link TriggerEffect | prototype:TriggerEffect}.
     */
    damage_type_filters?: DamageTypeFilters;
    /**
     * Must be greater than `0` and less than or equal to `1`.
     */
    probability?: float;
    repeat_count?: uint16;
    repeat_count_deviation?: uint16;
    show_in_tooltip?: bool;
}
/**
 * A {@link TriggerEffect | prototype:TriggerEffect} with cooldown conditions, used to limit the frequency of trigger effects that would otherwise fire every single tick. If multiple cooldown conditions are defined, then all cooldowns must be satisfied before the effect can be triggered.
 */
interface TriggerEffectWithCooldown {
    /**
     * The travel distance between triggers that the triggerer must travel between effects. Negative values will mean there is no cooldown.
     */
    distance_cooldown?: double;
    effect: TriggerEffect;
    /**
     * The initial state of the distance cooldown. In other words, the distance the triggerer must travel before the first effect can be triggered. Useful for staggering multiple effects.
     */
    initial_distance_cooldown?: double;
    /**
     * The initial amount of time to wait before triggering the effect for the first time.
     */
    initial_time_cooldown?: MapTick;
    /**
     * The number of ticks that elapse between triggers.
     */
    time_cooldown?: MapTick;
}
/**
 * The abstract base of all {@link Triggers | prototype:Trigger}.
 */
interface TriggerItem {
    action_delivery?: TriggerDelivery | TriggerDelivery[];
    /**
     * Only prototypes with these collision masks are affected by the trigger item.
     */
    collision_mask?: CollisionMaskConnector;
    /**
     * Only prototypes with these flags are affected by the trigger item.
     */
    entity_flags?: EntityPrototypeFlags;
    /**
     * Only entities meeting the force condition are affected by the trigger item.
     */
    force?: ForceCondition;
    ignore_collision_condition?: bool;
    /**
     * Must be greater than 0 and less than or equal to 1.
     */
    probability?: float;
    repeat_count?: uint32;
    /**
     * The trigger affects only prototypes with these masks.
     */
    trigger_target_mask?: TriggerTargetMask;
}
/**
 * An array of names of {@link TriggerTargetType | prototype:TriggerTargetType}. See {@link Design discussion: Trigger target type | https://forums.factorio.com/71657} and {@link Blacklist for prototypes turrets shouldn't attack | https://forums.factorio.com/86164}.
 */
type TriggerTargetMask = string[];
/**
 * The name of a {@link TrivialSmokePrototype | prototype:TrivialSmokePrototype}.
 * @example ```
"smoke-building"
```
 * @example ```
"nuclear-smoke"
```
 */
type TrivialSmokeID = string;
interface TurretAttackModifier extends BaseModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    /**
     * Modification value, which will be added to the current turret attack modifier upon researching.
     */
    modifier: double;
    /**
     * Name of the {@link EntityPrototype | prototype:EntityPrototype} that is affected. This also works for non-turrets such as tanks, however, the bonus does not appear in the entity's tooltips.
     */
    turret_id: EntityID;
    type: 'turret-attack';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface TurretBaseVisualisation {
    animation: Animation4Way;
    draw_when_frozen?: bool;
    draw_when_has_ammo?: bool;
    draw_when_has_energy?: bool;
    draw_when_no_ammo?: bool;
    draw_when_no_energy?: bool;
    draw_when_not_frozen?: bool;
    /**
     * If not defined, visualisation will be drawn in all states.
     */
    enabled_states?: TurretState[];
    render_layer?: RenderLayer;
    secondary_draw_order?: int8;
}
interface TurretGraphicsSet {
    base_visualisation?: TurretBaseVisualisation | TurretBaseVisualisation[];
}
interface TurretSpecialEffect {
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     */
    attacking_falloff?: float;
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     */
    attacking_max_radius?: float;
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     */
    attacking_min_radius?: float;
    center?: TurretSpecialEffectCenter;
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     */
    falloff?: float;
    /**
     * Only loaded, and mandatory if `type` is `"mask-by-circle"`.
     */
    max_radius?: float;
    /**
     * Only loaded if `type` is `"mask-by-circle"`.
     */
    min_radius?: float;
    type: 'mask-by-circle';
}
/**
 * If this is loaded as a single Vector, it is used for all directions.
 */
type TurretSpecialEffectCenter = {
    default?: Vector;
    east?: Vector;
    north?: Vector;
    north_east?: Vector;
    north_west?: Vector;
    south?: Vector;
    south_east?: Vector;
    south_west?: Vector;
    west?: Vector;
} | Vector;
type TurretState = 'folded' | 'preparing' | 'prepared' | 'starting-attack' | 'attacking' | 'ending-attack' | 'rotate-for-folding' | 'folding';
interface UndergroundBeltStructure {
    back_patch?: Sprite4Way;
    direction_in?: Sprite4Way;
    direction_in_side_loading?: Sprite4Way;
    direction_out?: Sprite4Way;
    direction_out_side_loading?: Sprite4Way;
    front_patch?: Sprite4Way;
    frozen_patch_in?: Sprite4Way;
    frozen_patch_out?: Sprite4Way;
}
/**
 * Used by {@link UnitPrototype | prototype:UnitPrototype} and {@link SpiderUnitPrototype | prototype:SpiderUnitPrototype}.
 */
interface UnitAISettings {
    /**
     * If enabled, units that have nothing else to do will attempt to return to a spawner.
     */
    allow_try_return_to_spawner?: bool;
    /**
     * If enabled, units that repeatedly fail to succeed at commands will be destroyed.
     */
    destroy_when_commands_fail?: bool;
    /**
     * If enabled, units will try to separate themselves from nearby friendly units.
     */
    do_separation?: bool;
    /**
     * Must be between -8 and 8.
     */
    path_resolution_modifier?: int8;
    strafe_settings?: PrototypeStrafeSettings;
}
interface UnitAlternativeFrameSequence {
    attacking_animation_speed: float;
    /**
     * Indices of frames from the attack parameter animation.
     */
    attacking_frame_sequence: uint16[];
    back_to_walk_animation_speed: float;
    /**
     * Indices of frames from the attack parameter animation.
     */
    back_to_walk_frame_sequence: uint16[];
    cooldown_animation_speed: float;
    /**
     * Indices of frames from the attack parameter animation.
     */
    cooldown_frame_sequence: uint16[];
    prepared_animation_speed: float;
    /**
     * Indices of frames from the attack parameter animation.
     */
    prepared_frame_sequence: uint16[];
    /**
     * Indices of frames from the attack parameter animation.
     */
    warmup2_frame_sequence: uint16[];
    warmup_animation_speed: float;
    /**
     * Indices of frames from the attack parameter animation.
     */
    warmup_frame_sequence: uint16[];
}
interface UnitGroupSettings {
    /**
     * Maximum number of automatically created unit groups gathering for attack at any time.
     */
    max_gathering_unit_groups: uint32;
    max_group_gathering_time: uint32;
    /**
     * If a member falls behind more than this times the group radius, the group will slow down to max_group_slowdown_factor.
     */
    max_group_member_fallback_factor: double;
    /**
     * Limits for group radius (calculated by number of numbers).
     */
    max_group_radius: double;
    /**
     * When members of a group are behind, the entire group will slow down to at most this factor of its max speed.
     */
    max_group_slowdown_factor: double;
    /**
     * When a member gets ahead of its group, it will slow down to at most this factor of its speed.
     */
    max_member_slowdown_when_ahead: double;
    /**
     * When a member falls behind the group he can speedup up till this much of his regular speed.
     */
    max_member_speedup_when_behind: double;
    /**
     * Maximum size of an attack unit group. This only affects automatically-created unit groups; manual groups created through the API are unaffected.
     */
    max_unit_group_size: uint32;
    /**
     * After the gathering is finished the group can still wait for late members, but it doesn't accept new ones anymore.
     */
    max_wait_time_for_late_members: uint32;
    /**
     * If a member falls behind more than this time the group radius, it will be removed from the group.
     */
    member_disown_distance: double;
    /**
     * Pollution triggered group waiting time is a random time between min and max gathering time
     */
    min_group_gathering_time: uint32;
    min_group_radius: double;
    tick_tolerance_when_member_arrives: uint32;
}
/**
 * It can be specified as a table with named or numbered keys, but not a mix of both. If this is specified as a table with numbered keys then the first value is the unit and the second is the spawn points.
 */
type UnitSpawnDefinition = {
    /**
     * Array of evolution and probability info, with the following conditions:
     *
     * - The `evolution_factor` must be ascending from entry to entry.
     *
     * - The last entry's weight will be used when the `evolution_factor` is larger than the last entry.
     *
     * - Weights are linearly interpolated between entries.
     *
     * - Individual weights are scaled linearly so that the cumulative weight is `1`.
     */
    spawn_points: SpawnPoint[];
    unit: EntityID;
} | [
    EntityID,
    SpawnPoint[]
];
interface UnlockQualityModifier extends BaseModifier {
    quality: QualityID;
    type: 'unlock-quality';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface UnlockRecipeModifier extends BaseModifier {
    /**
     * Prototype name of the {@link RecipePrototype | prototype:RecipePrototype} that is unlocked upon researching.
     */
    recipe: RecipeID;
    type: 'unlock-recipe';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface UnlockRecipeTipTrigger {
    recipe: RecipeID;
    type: 'unlock-recipe';
}
interface UnlockSpaceLocationModifier extends BaseModifier {
    space_location: SpaceLocationID;
    type: 'unlock-space-location';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface UseConfirmTipTrigger extends CountBasedTipTrigger {
    type: 'use-confirm';
}
interface UseOnSelfCapsuleAction {
    attack_parameters: AttackParameters;
    type: 'use-on-self';
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack?: bool;
}
interface UsePipetteTipTrigger extends CountBasedTipTrigger {
    type: 'use-pipette';
}
interface UseRailPlannerTipTrigger extends CountBasedTipTrigger {
    build_mode: BuildMode;
    type: 'use-rail-planner';
}
/**
 * Defines how are individual samples selected and played after each other.
 */
type VariableAmbientSoundCompositionMode = /**
 * Samples are selected randomly. The same sample cannot be repeated twice in a row.
 */
'randomized' | /**
 * Samples are selected in a repeating randomly selected sequence of a given length. The sequence is generated on each state transition. The same sample cannot be repeated twice in a row.
 */
'semi-randomized' | /**
 * Samples are selected in a repeating sequence in which each sample is played once.
 */
'shuffled' | /**
 * Samples are selected based on a sample currently playing in a different layer.
 */
'layer-controlled';
interface VariableAmbientSoundLayer {
    composition_mode: VariableAmbientSoundCompositionMode;
    /**
     * Name of a layer which controls this layer, a layer cannot control itself.
     *
     * Only loaded, and mandatory if `composition_mode` is `"layer-controlled"`.
     */
    control_layer?: string;
    /**
     * Defines a mapping between controlling layer's samples and this (controlled) layer's samples. The number of items in the mapping must be the same as the number of samples in the controlling layer. Item in the mapping with index N defines which samples of this layer can play when the sample N is playing in the controlling layer.
     *
     * Only loaded, and mandatory if `composition_mode` is `"layer-controlled"`.
     */
    control_layer_sample_mapping?: uint8[][];
    /**
     * If `true`, the last of {@link Sound::variations | prototype:Sound::variations} is played at the end of a sequence (if the sequence is long enough). The end sample counts towards the {@link VariableAmbientSoundLayerStateProperties::sequence_length | prototype:VariableAmbientSoundLayerStateProperties::sequence_length}.
     */
    has_end_sample?: bool;
    /**
     * If `true`, the first of {@link Sound::variations | prototype:Sound::variations} is played at the start of a sequence. The start sample counts towards the {@link VariableAmbientSoundLayerStateProperties::sequence_length | prototype:VariableAmbientSoundLayerStateProperties::sequence_length}
     */
    has_start_sample?: bool;
    /**
     * Name has to be unique across all layers.
     */
    name: string;
    /**
     * If greater than one, samples are composed in overlapping sub-layers, offset from each other.
     *
     * If greater than one, one of `sublayer_starting_offset` or `sublayer_offset` must be defined. Both cannot be defined together.
     *
     * Cannot be defined for layers with `"shuffled"` `composition_mode`.
     *
     * Cannot be zero.
     */
    number_of_sublayers?: uint8;
    /**
     * Explicitly defines sample lengths. The whole sample is played when this is not specified.
     *
     * Cannot be defined together with `sublayer_offset`.
     *
     * The minimum cannot be zero.
     */
    sample_length?: RandomRange;
    /**
     * Specifies offset between two sub-layers' samples.
     *
     * This implicitly dictates the sample lengths as two sub-layer offsets.
     *
     * Only loaded if `number_of_sublayers` is greater than one.
     *
     * Cannot be defined together with `sublayer_starting_offset`.
     *
     * The minimum of {@link RandomRange | prototype:RandomRange} variant cannot be zero.
     */
    sublayer_offset?: RandomRange | ProbabilityTable;
    /**
     * Specifies starting offset of the second sub-layer.
     *
     * Only loaded if `number_of_sublayers` is greater than one.
     *
     * Cannot be defined together with `sublayer_offset`.
     *
     * The minimum of {@link RandomRange | prototype:RandomRange} variant cannot be zero.
     */
    sublayer_starting_offset?: RandomRange | ProbabilityTable;
    /**
     * Cannot be empty.
     *
     * Samples within a layer are the {@link Sound::variations | prototype:Sound::variations}.
     *
     * Number of samples must be the same across all variants.
     *
     * Samples cannot have variable volume and all samples must have the same default volume.
     */
    variants: Sound[];
}
/**
 * First property is the name of a layer.
 *
 * Second property is the sample index.
 */
type VariableAmbientSoundLayerSample = [
    string,
    uint32
];
interface VariableAmbientSoundLayerStateProperties {
    enabled?: bool;
    /**
     * Pause before a layer finishes playing. The last repetition and consequently the layer being finished is not counted until the pause finishes.
     */
    end_pause?: RandomRange;
    /**
     * The number of times a layer repeats itself until it's considered finished. If it's not defined, the layer never finishes on its own. What counts as repetition depends on the {@link VariableAmbientSoundCompositionMode | prototype:VariableAmbientSoundCompositionMode}.
     *
     * Each sample played is counted as a repetition of `"randomized"` layer.
     *
     * Repetition of `"semi-randomized"` layer is counted when its sequence is finished.
     *
     * Repetition of `"shuffled"` layer is counted when all samples play once.
     *
     * Each sample played is counted as a repetition of `"layer-controlled"` layer.
     *
     * If `number_of_repetitions` of {@link VariableAmbientSoundLayer::control_layer | prototype:VariableAmbientSoundLayer::control_layer} of `"layer-controlled"` layer is smaller than `number_of_repetitions` of the controlled layer, `number_of_repetitions` of the control layer is used for the purposes of `pause_between_repetitions` and `end_pause`.
     *
     * Cannot be zero.
     */
    number_of_repetitions?: RandomRange | ProbabilityTable;
    /**
     * Pause between each repetition of a layer. The repetition is not counted until the pause finishes.
     */
    pause_between_repetitions?: RandomRange;
    /**
     * Pause between individual samples within a sequence.
     *
     * Cannot be defined for `"randomized"` layers without defining `sequence_length` as well. Alternatively, use `pause_between_repetitions` instead.
     *
     * Cannot be defined for layers with `sublayer_offset` defined.
     */
    pause_between_samples?: RandomRange;
    /**
     * Number of samples in a sequence.
     *
     * The minimum cannot be zero.
     *
     * Mandatory for layers with `"semi-randomized"` {@link VariableAmbientSoundCompositionMode | prototype:VariableAmbientSoundCompositionMode}.
     *
     * Applicable for layers with `"randomized"` {@link VariableAmbientSoundCompositionMode | prototype:VariableAmbientSoundCompositionMode}.
     *
     * Cannot be defined for layers with `"shuffled"` {@link VariableAmbientSoundCompositionMode | prototype:VariableAmbientSoundCompositionMode}.
     */
    sequence_length?: RandomRange;
    /**
     * A sample replaced by silence still counts as played for the purposes of sequence count, repetition count, pauses, etc.
     *
     * Must be in the `[0.0, 1.0]` interval.
     */
    silence_instead_of_sample_probability?: float;
    /**
     * Pause before a layer starts playing.
     */
    start_pause?: RandomRange;
    /**
     * Index of a layer's variant.
     *
     * Cannot be zero.
     */
    variant?: uint8;
}
interface VariableAmbientSoundNextStateConditions {
    /**
     * Specified sample must be playing in the specified layer.
     */
    layer_sample?: VariableAmbientSoundLayerSample;
    previous_state?: string;
    /**
     * Cannot be zero.
     */
    weight: uint32;
}
interface VariableAmbientSoundNextStateItem {
    /**
     * Transition to `state` is possible only if all conditions are met.
     */
    conditions: VariableAmbientSoundNextStateConditions;
    /**
     * Name of the state.
     */
    state: string;
}
/**
 * Defines how a transition to next state is triggered.
 */
type VariableAmbientSoundNextStateTrigger = /**
 * Next state is triggered when all specified layers finish playing.
 */
'layers-finished' | /**
 * Next state is triggered after a set time.
 */
'duration';
interface VariableAmbientSoundState {
    /**
     * Pause before a layer finishes playing. The layer being finished is not counted until the pause finishes.
     *
     * Optionally loaded for `intermezzo` states.
     */
    end_pause?: RandomRange;
    /**
     * Must contain as many items as there is layers in the variable track. The items themselves can be empty. The order of items corresponds to the order of layers as they appear in the prototype definition.
     *
     * Mandatory for `regular` and `final` states.
     *
     * Cannot be defined for `intermezzo` or `stop` states.
     */
    layers_properties?: VariableAmbientSoundLayerStateProperties[];
    /**
     * Name has to be unique across all states.
     */
    name: string;
    /**
     * Cannot be defined if `next_states` is defined.
     *
     * Doesn't need to be defined if there is only one state.
     */
    next_state?: string;
    /**
     * List of name of layers used to trigger state transition.
     *
     * Only loaded, and mandatory if `next_state_trigger` is `"layers-finished"`.
     */
    next_state_layers_finished_layers?: string[];
    /**
     * Mandatory if there is more than one state or if the only state transitions to itself.
     *
     * Can be defined for `regular` states only.
     */
    next_state_trigger?: VariableAmbientSoundNextStateTrigger;
    /**
     * Cannot be defined if `next_state` is defined.
     *
     * Cannot be defined if there is only one state.
     *
     * Cannot be empty.
     */
    next_states?: VariableAmbientSoundNextStateItem[];
    /**
     * Defines how many layers will be playing. Which layers will be playing is selected randomly.
     *
     * The minimum cannot be zero, the maximum cannot be greater than the number of layers.
     *
     * Cannot be defined if any of `layers_properties` define the `enabled` property.
     *
     * Cannot be defined for `intermezzo` or `stop` states.
     */
    number_of_enabled_layers?: RandomRange;
    /**
     * Pause before a layer starts playing.
     *
     * Optionally loaded for `intermezzo` states.
     */
    start_pause?: RandomRange;
    /**
     * Defines for how long this state will be active.
     *
     * Mandatory if `next_state_trigger` is `"duration"`.
     *
     * Optionally loaded for `intermezzo` states.
     */
    state_duration_seconds?: uint32;
    type?: VariableAmbientSoundStateType;
}
type VariableAmbientSoundStateType = 'regular' | /**
 * Only special intermezzo layer plays in this state, the rest is paused.
 */
'intermezzo' | /**
 * The track will stay in this state for the remainder of the track's duration.
 */
'final' | /**
 * Transitioning into this state stops the track.
 */
'stop';
interface VariableAmbientSoundVariableSound {
    /**
     * Number of audio signal samples (default sampling frequency is 44.1kHz) defining a time grid. Music samples are aligned with this grid when queued.
     */
    alignment_samples?: uint32;
    intermezzo?: Sound;
    /**
     * Cannot be empty.
     */
    layers: VariableAmbientSoundLayer[];
    /**
     * Cannot be zero.
     */
    length_seconds: uint32;
    /**
     * The first state is used as the starting state and cannot be an intermezzo state.
     *
     * Cannot be empty.
     */
    states: VariableAmbientSoundState[];
}
/**
 * A vector is a two-element array or dictionary containing the x and y components. Positive x goes east, positive y goes south.
 * @example ```
shift = {0, 12}
```
 * @example ```
right = {1.0, 0.5}
```
 * @example ```
vector = {x = 2.3, y = 3.4}
```
 */
type Vector = {
    x: double;
    y: double;
} | [
    double,
    double
];
/**
 * If this is specified as a three-element array then the array items are x, y and z, in that order.
 */
type Vector3D = {
    x: float;
    y: float;
    z: float;
} | [
    float,
    float,
    float
];
type Vector4f = {
    w: float;
    x: float;
    y: float;
    z: float;
} | [
    float,
    float,
    float,
    float
];
interface VectorRotation {
    /**
     * The size of all `frames` must be the same.
     */
    frames: Vector[];
    render_layer?: RenderLayer;
}
interface VehicleLogisticsModifier extends BoolModifier {
    type: 'vehicle-logistics';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
type VerticalAlign = 'top' | 'center' | 'bottom';
interface VerticalFlowStyleSpecification extends BaseStyleSpecification {
    type: 'vertical_flow_style';
    vertical_spacing?: int32;
}
interface VerticalScrollBarStyleSpecification extends ScrollBarStyleSpecification {
    type: 'vertical_scrollbar_style';
}
/**
 * The name of a {@link VirtualSignalPrototype | prototype:VirtualSignalPrototype}.
 * @example ```
"signal-red"
```
 * @example ```
"signal-each"
```
 */
type VirtualSignalID = string;
interface VisualState {
    color?: Color;
    duration: uint8;
    name: string;
    next_active: string;
    next_inactive: string;
}
/**
 * Void energy sources provide unlimited free energy.
 * @example ```
energy_source = {type = "void"}
```
 */
interface VoidEnergySource extends BaseEnergySource {
    type: 'void';
}
interface WallPictures {
    corner_left_down?: SpriteVariations;
    corner_right_down?: SpriteVariations;
    ending_left?: SpriteVariations;
    ending_right?: SpriteVariations;
    filling?: SpriteVariations;
    gate_connection_patch?: Sprite4Way;
    single?: SpriteVariations;
    straight_horizontal?: SpriteVariations;
    straight_vertical?: SpriteVariations;
    t_up?: SpriteVariations;
    water_connection_patch?: Sprite4Way;
}
/**
 * Entity water reflection. {@link Currently only renders | https://forums.factorio.com/100703} for {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype}.
 */
interface WaterReflectionDefinition {
    orientation_to_variation?: bool;
    pictures?: SpriteVariations;
    rotate?: bool;
}
interface WaterTileEffectParameters {
    animation_scale: float | [
        float,
        float
    ];
    animation_speed: float;
    dark_threshold: float | [
        float,
        float
    ];
    far_zoom?: float;
    foam_color: Color;
    foam_color_multiplier: float;
    near_zoom?: float;
    reflection_threshold: float | [
        float,
        float
    ];
    secondary_texture_variations_columns?: uint8;
    secondary_texture_variations_rows?: uint8;
    shader_variation?: EffectVariation;
    specular_lightness: Color;
    specular_threshold: float | [
        float,
        float
    ];
    texture_variations_columns?: uint8;
    texture_variations_rows?: uint8;
    /**
     * Texture size must be 512x512. Shader variant `"water"` must have 1 texture, `"lava"` and `"wetland-water"` must have 2 textures and `"oil"` must have 4 textures.
     */
    textures: EffectTexture[];
    tick_scale: float;
}
/**
 * Weight of an object. The weight is stored as a fixed-size 64 bit integer, with 16 bits reserved for decimal precision, meaning the smallest value step is `1/2^16`.
 */
type Weight = double;
/**
 * Definition of a point where circuit network wires can be connected to an entity.
 */
interface WireConnectionPoint {
    shadow: WirePosition;
    wire: WirePosition;
}
/**
 * Used by {@link WireConnectionPoint | prototype:WireConnectionPoint}.
 */
interface WirePosition {
    copper?: Vector;
    green?: Vector;
    red?: Vector;
}
interface WorkerRobotBatteryModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'worker-robot-battery';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface WorkerRobotSpeedModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'worker-robot-speed';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
interface WorkerRobotStorageModifier extends SimpleModifier {
    /**
     * If set to `false`, use the icon from {@link UtilitySprites | prototype:UtilitySprites} for this technology effect icon.
     */
    infer_icon?: bool;
    type: 'worker-robot-storage';
    /**
     * If `false`, do not draw the small "constant" icon over the technology effect icon.
     */
    use_icon_overlay_constant?: bool;
}
/**
 * This type is used to produce sound from in-game entities when they are working/idle.
 * @example ```
-- refinery
working_sound =
{
  sound = { filename = "__base__/sound/oil-refinery.ogg" },
  idle_sound = { filename = "__base__/sound/idle1.ogg", volume = 0.6 },
  apparent_volume = 2.5,
}
```
 * @example ```
-- roboport
working_sound =
{
  sound = { filename = "__base__/sound/roboport-working.ogg", volume = 0.6 },
  max_sounds_per_type = 3,
  audible_distance_modifier = 0.5,
  probability = 1 / (5 * 60) -- average pause between the sound is 5 seconds
}
```
 */
type WorkingSound = {
    /**
     * Might not work with all entities that use working_sound.
     */
    activate_sound?: Sound;
    apparent_volume?: float;
    /**
     * Modifies how far a sound can be heard. Can only be 1 or lower, has to be a positive number.
     */
    audible_distance_modifier?: double;
    /**
     * Might not work with all entities that use working_sound.
     */
    deactivate_sound?: Sound;
    extra_sounds_ignore_limit?: bool;
    /**
     * The sound to be played when the entity is idle. Might not work with all entities that use working_sound.
     */
    idle_sound?: Sound;
    /**
     * If this property is defined, all properties inherited from MainSound (and not overridden here) are ignored.
     */
    main_sounds?: MainSound | MainSound[];
    max_sounds_per_type?: uint8;
    persistent?: bool;
    sound_accents?: SoundAccent | SoundAccent[];
    use_doppler_shift?: bool;
} | Sound;
/**
 * Used by crafting machines to display different graphics when the machine is running.
 */
interface WorkingVisualisation {
    align_to_waypoint?: bool;
    always_draw?: bool;
    animated_shift?: bool;
    animation?: Animation;
    /**
     * Used by {@link CraftingMachinePrototype | prototype:CraftingMachinePrototype}. Has precedence over `apply_tint`.
     */
    apply_recipe_tint?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'none';
    /**
     * Used by {@link CraftingMachinePrototype | prototype:CraftingMachinePrototype} ("status" and "visual-state-color" only) and {@link MiningDrillPrototype | prototype:MiningDrillPrototype}.
     *
     * For "status" on CraftingMachine and MiningDrill, the colors are specified via {@link WorkingVisualisations::status_colors | prototype:WorkingVisualisations::status_colors}. For "resource-color", the colors are specified via {@link ResourceEntityPrototype::mining_visualisation_tint | prototype:ResourceEntityPrototype::mining_visualisation_tint}.
     */
    apply_tint?: 'resource-color' | 'input-fluid-base-color' | 'input-fluid-flow-color' | 'status' | 'none' | 'visual-state-color';
    /**
     * Whether the animations are always played at the same speed, not adjusted to the machine speed.
     */
    constant_speed?: bool;
    /**
     * Only loaded if {@link WorkingVisualisations::states | prototype:WorkingVisualisations::states} is defined in the WorkingVisualisations that loads this.
     */
    draw_in_states?: string[];
    /**
     * Only loaded if {@link WorkingVisualisations::states | prototype:WorkingVisualisations::states} is defined in the WorkingVisualisations that loads this.
     */
    draw_when_state_filter_matches?: bool;
    east_animation?: Animation;
    east_position?: Vector;
    east_secondary_draw_order?: int8;
    effect?: 'flicker' | 'uranium-glow' | 'none';
    enabled_by_name?: bool;
    enabled_in_animated_shift_during_transition?: bool;
    enabled_in_animated_shift_during_waypoint_stop?: bool;
    fadeout?: bool;
    frame_based_on_shift_animation_progress?: bool;
    light?: LightDefinition;
    mining_drill_scorch_mark?: bool;
    name?: string;
    north_animation?: Animation;
    north_position?: Vector;
    north_secondary_draw_order?: int8;
    render_layer?: RenderLayer;
    /**
     * Only loaded, and mandatory if `mining_drill_scorch_mark` is `true`.
     */
    scorch_mark_fade_in_frames?: uint8;
    /**
     * Only loaded, and mandatory if `mining_drill_scorch_mark` is `true`. Cannot be larger than `scorch_mark_lifetime`.
     */
    scorch_mark_fade_out_duration?: uint16;
    /**
     * Only loaded, and mandatory if `mining_drill_scorch_mark` is `true`.
     */
    scorch_mark_lifetime?: uint16;
    /**
     * Used to determine render order for sprites with the same `render_layer` in the same position. Sprites with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: int8;
    south_animation?: Animation;
    south_position?: Vector;
    south_secondary_draw_order?: int8;
    synced_fadeout?: bool;
    west_animation?: Animation;
    west_position?: Vector;
    west_secondary_draw_order?: int8;
}
interface WorkingVisualisations {
    /**
     * Only loaded if `idle_animation` is defined.
     */
    always_draw_idle_animation?: bool;
    animation?: Animation4Way;
    default_recipe_tint?: GlobalRecipeTints;
    /**
     * Idle animation must have the same frame count as animation.
     */
    idle_animation?: Animation4Way;
    recipe_not_set_tint?: GlobalRecipeTints;
    /**
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_transition_duration?: uint16;
    /**
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_waypoint_stop_duration?: uint16;
    /**
     * Only loaded if one of `shift_animation_waypoint_stop_duration` or `shift_animation_transition_duration` is not 0.
     */
    shift_animation_waypoints?: ShiftAnimationWaypoints;
    /**
     * At least 2 visual states must be defined or no states at all. At most 32 states may be defined.
     */
    states?: VisualState[];
    /**
     * Used by {@link WorkingVisualisation::apply_tint | prototype:WorkingVisualisation::apply_tint}.
     */
    status_colors?: StatusColors;
    /**
     * Used to display different animations when the machine is running, for example tinted based on the current recipe.
     */
    working_visualisations?: WorkingVisualisation[];
}
type WorldAmbientSoundDefinition = {
    average_pause_seconds?: double;
    entity_to_sound_ratio?: float;
    max_entity_count?: uint32;
    /**
     * Has to be less than or equal to `max_entity_count`.
     */
    min_entity_count?: uint32;
    radius?: double;
    sound?: Sound;
} | Sound;
/**
 * A variable type which can have one of two values: `true` or `false`. Wikipedia has a {@link comprehensive article | https://en.wikipedia.org/wiki/Boolean} on Booleans.
 */
type bool = boolean;
/**
 * Format uses a dot as its decimal delimiter. Doubles are stored in the {@link double precision | http://en.wikipedia.org/wiki/Double-precision_floating-point_format} floating point format.
 *
 * May not be {@link NaN | https://en.wikipedia.org/wiki/NaN}.
 * @example ```
7.5
6
```
 */
type double = number;
/**
 * Format uses a dot as its decimal delimiter. Floats are stored in the {@link single precision | https://en.wikipedia.org/wiki/Single-precision_floating-point_format} floating point format.
 *
 * May not be {@link NaN | https://en.wikipedia.org/wiki/NaN}.
 * @example ```
7.5
6
```
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
 * 64 bit signed integer.
 */
type int64 = number;
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