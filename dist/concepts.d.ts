// Factorio concept definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 2.0.15
// API version 6

declare namespace runtime {
interface BaseAchievementPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'allowed-without-fight' | 'type';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type AchievementPrototypeFilter = BaseAchievementPrototypeFilter | AchievementPrototypeFilterType;
/**
 *
 * Applies to variant case `type`
 */
interface AchievementPrototypeFilterType extends BaseAchievementPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type, or a list of acceptable types.
     */
    'type': string | string[];
}
interface AdvancedMapGenSettings {
    pollution: PollutionMapSettings;
    enemy_evolution: EnemyEvolutionMapSettings;
    enemy_expansion: EnemyExpansionMapSettings;
    difficulty_settings: DifficultySettings;
}
interface Alert {
    /**
     * The tick this alert was created.
     */
    tick: uint;
    target?: LuaEntity;
    prototype?: LuaEntityPrototype;
    position?: MapPosition;
    /**
     * The SignalID used for a custom alert. Only present for custom alerts.
     */
    icon?: SignalID;
    /**
     * The message for a custom alert. Only present for custom alerts.
     */
    message?: LocalisedString;
}
/**
 * A {@link string | runtime:string} that specifies where a GUI element should be.
 */
type Alignment = 'top-left' | 'middle-left' | /**
 * The same as `"middle-left"`
 */
'left' | 'bottom-left' | 'top-center' | 'middle-center' | /**
 * The same as `"middle-center"`
 */
'center' | 'bottom-center' | 'top-right' | /**
 * The same as `"middle-right"`
 */
'right' | 'bottom-right';
interface AmmoType {
    action?: TriggerItem[];
    target_type: TargetType;
    /**
     * When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`.
     */
    clamp_position?: boolean;
    /**
     * Energy consumption of a single shot, if applicable. Defaults to `0`.
     */
    energy_consumption?: double;
    range_modifier?: double;
    cooldown_modifier?: double;
    consumption_modifier?: float;
}
/**
 * Any basic type (string, number, boolean), table, or LuaObject.
 */
type Any = string | boolean | number | table | LuaObject;
/**
 * Any basic type (string, number, boolean) or table.
 */
type AnyBasic = string | boolean | number | table;
interface ArithmeticCombinatorParameters {
    /**
     * First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`.
     */
    first_signal?: SignalID;
    /**
     * Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`.
     */
    second_signal?: SignalID;
    /**
     * Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`.
     */
    first_constant?: int;
    /**
     * Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`.
     */
    second_constant?: int;
    /**
     * When not specified, defaults to `"*"`.
     */
    operation?: '*' | '/' | '+' | '-' | '%' | '^' | '<<' | '>>' | 'AND' | 'OR' | 'XOR';
    /**
     * Specifies the signal to output.
     */
    output_signal?: SignalID;
}
interface AsteroidChunk {
    /**
     * The name of the asteroid chunk prototype.
     */
    name: string;
    position: MapPosition;
    movement: Vector;
}
/**
 * An asteroid chunk prototype may be specified in one of two ways.
 */
type AsteroidChunkID = /**
 * The asteroid chunk prototype.
 */
LuaAsteroidChunkPrototype | /**
 * The prototype name.
 */
string;
interface AsteroidChunkPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'minable';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
interface AsteroidMapSettings {
    spawning_rate: double;
    max_ray_portals_expanded_per_tick: uint;
}
interface AttackParameterFluid {
    /**
     * Name of the {@link LuaFluidPrototype | runtime:LuaFluidPrototype}.
     */
    type: string;
    /**
     * Multiplier applied to the damage of an attack.
     */
    damage_modifier: double;
}
interface BaseAttackParameters {
    /**
     * The type of AttackParameter.
     */
    type: 'projectile' | 'stream' | 'beam';
    /**
     * Maximum range of attack.
     */
    range: float;
    /**
     * Minimum range of attack. Used with flamethrower turrets to prevent self-immolation.
     */
    min_range: float;
    /**
     * Defines how the range is determined.
     */
    range_mode: RangeMode;
    /**
     * When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire.
     */
    fire_penalty: float;
    /**
     * When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face.
     */
    rotate_penalty: float;
    /**
     * When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite.
     */
    health_penalty: float;
    /**
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters.
     */
    min_attack_distance: float;
    /**
     * The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees.
     */
    turn_range: float;
    /**
     * Multiplier applied to the damage of an attack.
     */
    damage_modifier: float;
    /**
     * Multiplier applied to the ammo consumption of an attack.
     */
    ammo_consumption_modifier: float;
    /**
     * Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick.
     */
    cooldown: float;
    /**
     * Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so.
     */
    warmup: uint;
    movement_slow_down_factor: double;
    movement_slow_down_cooldown: float;
    ammo_type?: AmmoType;
    /**
     * List of the names of compatible {@link LuaAmmoCategoryPrototypes | runtime:LuaAmmoCategoryPrototype}.
     */
    ammo_categories?: string[];
}
type AttackParameters = BaseAttackParameters | AttackParametersProjectile | AttackParametersStream;
/**
 *
 * Applies to variant case `projectile`
 */
interface AttackParametersProjectile extends BaseAttackParameters {
    /**
     * The type of AttackParameter.
     */
    'type': 'projectile';
    'projectile_center': Vector;
    'projectile_creation_distance': float;
    'projectile_creation_parameters'?: CircularProjectileCreationSpecification[];
    'projectile_orientation_offset': float;
    'shell_particle'?: CircularParticleCreationSpecification;
}
/**
 *
 * Applies to variant case `stream`
 */
interface AttackParametersStream extends BaseAttackParameters {
    /**
     * The type of AttackParameter.
     */
    'type': 'stream';
    'fluid_consumption': float;
    'fluids'?: AttackParameterFluid[];
    'gun_barrel_length': float;
    'gun_center_shift': GunShift4Way;
    'projectile_creation_parameters'?: CircularProjectileCreationSpecification[];
}
interface AutoplaceControl {
    /**
     * For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale'. When the {@link LuaAutoplaceControlPrototype | runtime:LuaAutoplaceControlPrototype} is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency.
     */
    frequency: MapGenSize;
    /**
     * For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
     */
    size: MapGenSize;
    /**
     * Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health.  For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the {@link LuaAutoplaceControlPrototype | runtime:LuaAutoplaceControlPrototype} by looking up `prototypes.autoplace_control[(control prototype name)]`, e.g. `prototypes.autoplace_control["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness.
     */
    richness: MapGenSize;
}
interface AutoplaceSettings {
    /**
     * Whether missing autoplace names for this type should be default enabled. Always defined when reading autoplace settings.
     */
    treat_missing_as_default?: boolean;
    /**
     * Always defined when reading autoplace settings.
     */
    settings?: Record<string, AutoplaceControl>;
}
/**
 * Specifies how probability and richness are calculated when placing something on the map.
 */
interface AutoplaceSpecification {
    /**
     * Control prototype name.
     */
    control?: string;
    default_enabled: boolean;
    force: string;
    order: string;
    placement_density: uint;
    tile_restriction?: AutoplaceSpecificationRestriction[];
    probability_expression: NoiseExpression;
    richness_expression?: NoiseExpression;
}
interface AutoplaceSpecificationRestriction {
    /**
     * Tile prototype name
     */
    first?: string;
    /**
     * Second prototype name
     */
    second?: string;
}
interface BeamTarget {
    /**
     * The target entity.
     */
    entity?: LuaEntity;
    /**
     * The target position.
     */
    position?: MapPosition;
}
/**
 * The representation of an entity inside of a blueprint. It has at least these fields, but can contain additional ones depending on the kind of entity.
 */
interface BlueprintEntity {
    /**
     * The entity's unique identifier in the blueprint.
     */
    entity_number: uint;
    /**
     * The prototype name of the entity.
     */
    name: string;
    /**
     * The position of the entity.
     */
    position: MapPosition;
    /**
     * The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north.
     */
    direction?: defines.direction;
    /**
     * Whether this entity is mirrored.
     */
    mirror?: boolean;
    /**
     * The prototype name of the entity's quality.
     */
    quality?: string;
    /**
     * The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors.
     */
    control_behavior?: BlueprintControlBehavior;
    /**
     * The items that the entity will request when revived, if any.
     */
    items?: BlueprintInsertPlan[];
    /**
     * The entity tags of the entity, if there are any.
     */
    tags?: Tags;
    /**
     * The schedule of the entity, if it has one. Only relevant for locomotives.
     */
    schedule?: BlueprintSchedule;
    /**
     * Wires connected to this entity in the blueprint.
     */
    wires?: BlueprintWire[];
}
/**
 * Defines an item type that a blueprint entity will request.
 */
interface BlueprintInsertPlan {
    /**
     * The prototype name and quality of the item to request.
     */
    id: ItemIDAndQualityIDPair;
    /**
     * Describes the inventories to insert these items into.
     */
    items: ItemInventoryPositions;
}
interface BlueprintLogisticFilter {
    index: LogisticFilterIndex;
    /**
     * The type of the logistic filter.
     */
    type?: SignalIDType;
    /**
     * Name of the logistic filter.
     */
    name?: string;
    /**
     * The prototype name of the quality. `nil` for any quality.
     */
    quality?: string;
    /**
     * The comparator for quality. `nil` if any quality.
     */
    comparator?: ComparatorString;
    count: int;
    max_count?: ItemCountType;
    /**
     * Defaults to 0.
     */
    minimum_delivery_count?: ItemCountType;
    import_from?: string;
}
interface BlueprintSchedule {
    records?: BlueprintScheduleRecord[];
    group?: string;
    interrupts?: BlueprintScheduleInterrupt[];
}
interface BlueprintScheduleInterrupt {
    name?: string;
    conditions?: WaitCondition[];
    targets?: BlueprintScheduleRecord[];
    inside_interrupt: boolean;
}
interface BlueprintScheduleRecord {
    /**
     * Name of the station.
     */
    station?: string;
    wait_conditions?: WaitCondition[];
    /**
     * Only present when the station is temporary, the value is then always `true`.
     */
    temporary?: boolean;
    created_by_interrupt?: boolean;
    allows_unloading?: boolean;
}
interface BlueprintSignalIcon {
    /**
     * The icon to use.
     */
    signal: SignalID;
    /**
     * Index of the icon in the blueprint icons slots. An integer in the range [1, 4].
     */
    index: uint;
}
/**
 * Describes a single wire in the blueprint. The members of the tuple are, in order:
 *
 * - `source_entity_number`
 *
 * - `source_wire_connector_id`
 *
 * - `target_entity_number`
 *
 * - `target_wire_connector_id`
 */
type BlueprintWire = [
    uint,
    defines.wire_connector_id,
    uint,
    defines.wire_connector_id
];
interface BlueprintWireEnd {
    entity: BlueprintEntity;
    connector: defines.wire_connector_id;
}
/**
 * Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with {@link MapPosition | runtime:MapPosition}, the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero.
 * @example ```
-- Explicit definition
{left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
```
 * @example ```
-- Shorthand
{{-2, -3}, {5, 8}}
```
 */
type BoundingBox = {
    left_top: MapPosition;
    right_bottom: MapPosition;
    orientation?: RealOrientation;
} | [
    MapPosition,
    MapPosition
];
/**
 * The name of a {@link LuaBurnerUsagePrototype | runtime:LuaBurnerUsagePrototype}.
 * @example ```
"fuel"
```
 */
type BurnerUsageID = string;
interface BaseCapsuleAction {
    type: 'throw' | 'equipment-remote' | 'use-on-self' | 'artillery-remote' | 'destroy-cliffs';
}
type CapsuleAction = BaseCapsuleAction | CapsuleActionArtilleryRemote | CapsuleActionDestroyCliffs | CapsuleActionEquipmentRemote | CapsuleActionThrow | CapsuleActionUseOnSelf;
/**
 *
 * Applies to variant case `artillery-remote`
 */
interface CapsuleActionArtilleryRemote extends BaseCapsuleAction {
    'type': 'artillery-remote';
    /**
     * Name of the {@link flare prototype | runtime:LuaEntityPrototype}.
     */
    'flare': string;
}
/**
 *
 * Applies to variant case `destroy-cliffs`
 */
interface CapsuleActionDestroyCliffs extends BaseCapsuleAction {
    'type': 'destroy-cliffs';
    'attack_parameters': AttackParameters;
    'radius': float;
    'timeout': uint;
}
/**
 *
 * Applies to variant case `equipment-remote`
 */
interface CapsuleActionEquipmentRemote extends BaseCapsuleAction {
    'type': 'equipment-remote';
    /**
     * Name of the {@link LuaEquipmentPrototype | runtime:LuaEquipmentPrototype}.
     */
    'equipment': string;
}
/**
 *
 * Applies to variant case `throw`
 */
interface CapsuleActionThrow extends BaseCapsuleAction {
    'type': 'throw';
    'attack_parameters': AttackParameters;
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    'uses_stack': boolean;
}
/**
 *
 * Applies to variant case `use-on-self`
 */
interface CapsuleActionUseOnSelf extends BaseCapsuleAction {
    'type': 'use-on-self';
    'attack_parameters': AttackParameters;
}
/**
 * Either `icon`, `text`, or both must be provided.
 */
interface ChartTagSpec {
    position: MapPosition;
    icon?: SignalID;
    text?: string;
    last_user?: PlayerIdentification;
}
/**
 * Coordinates of a chunk in a {@link LuaSurface | runtime:LuaSurface} where each integer `x`/`y` represents a different chunk. This uses the same format as {@link MapPosition | runtime:MapPosition}, meaning it can be specified either with or without explicit keys. A {@link MapPosition | runtime:MapPosition} can be translated to a ChunkPosition by dividing the `x`/`y` values by 32.
 */
type ChunkPosition = {
    x: int;
    y: int;
} | [
    int,
    int
];
/**
 * A {@link ChunkPosition | runtime:ChunkPosition} with an added bounding box for the area of the chunk.
 */
interface ChunkPositionAndArea {
    x: int;
    y: int;
    area: BoundingBox;
}
interface CircuitCondition {
    /**
     * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
     */
    comparator?: ComparatorString;
    /**
     * Defaults to blank
     */
    first_signal?: SignalID;
    /**
     * What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`.
     */
    second_signal?: SignalID;
    /**
     * Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
     */
    constant?: int;
}
interface CircuitConditionDefinition {
    /**
     * TODOC CircuitConditionDefinition now extends CircuitCondition, all fields of CircuitCondition should be pasted here directly
     */
    condition: CircuitCondition;
    /**
     * Whether the condition is currently fulfilled
     */
    fulfilled?: boolean;
}
type CircuitNetworkSelection = table;
interface CircularParticleCreationSpecification {
    /**
     * Name of the {@link LuaEntityPrototype | runtime:LuaEntityPrototype}.
     */
    name: string;
    direction: float;
    direction_deviation: float;
    speed: float;
    speed_deviation: float;
    starting_frame_speed: float;
    starting_frame_speed_deviation: float;
    height: float;
    height_deviation: float;
    vertical_speed: float;
    vertical_speed_deviation: float;
    center: Vector;
    creation_distance: double;
    creation_distance_orientation: double;
    use_source_position: boolean;
}
type CircularProjectileCreationSpecification = [
    RealOrientation,
    Vector
];
type CliffOrientation = 'west-to-east' | 'north-to-south' | 'east-to-west' | 'south-to-north' | 'west-to-north' | 'north-to-east' | 'east-to-south' | 'south-to-west' | 'west-to-south' | 'north-to-west' | 'east-to-north' | 'south-to-east' | 'west-to-none' | 'none-to-east' | 'east-to-none' | 'none-to-west' | 'north-to-none' | 'none-to-south' | 'south-to-none' | 'none-to-north';
interface CliffPlacementSettings {
    /**
     * Name of the cliff prototype.
     */
    name: string;
    /**
     * Name of the autoplace control prototype.
     */
    control: string;
    /**
     * Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI.
     */
    cliff_elevation_0: float;
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     */
    cliff_elevation_interval: float;
    /**
     * Smoothing makes cliffs straighter on rough elevation but makes placement inaccurate. 0 is no smoothing, 1 is full smoothing. Values outside of 0-1 are possible for specific effects but not recommended.
     */
    cliff_smoothing: float;
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     */
    richness: MapGenSize;
}
/**
 * The name of a {@link LuaCollisionLayerPrototype | runtime:LuaCollisionLayerPrototype}.
 * @example ```
"is_lower_object"
```
 */
type CollisionLayerID = string;
/**
 * @example ```
-- Most common collision mask of buildings:
collision_mask = {layers = {item = true, meltable = true, object = true, player = true, water_tile = true, is_object = true, is_lower_object = true}}
```
 */
interface CollisionMask {
    /**
     * Every key in the dictionary is the name of one {@link layer | runtime:LuaCollisionLayerPrototype} the object collides with. The value is meaningless and always `true`. An empty table means that no layers are set.
     */
    layers: Record<string, true>;
    /**
     * Any two entities that both have this option enabled on their prototype and have an identical collision mask layers list will not collide. Other collision mask options are not included in the identical layer list check. This does mean that two different prototypes with the same collision mask layers and this option enabled will not collide. Defaults to `false`.
     */
    not_colliding_with_itself?: boolean;
    /**
     * Uses the prototypes position rather than its collision box when doing collision checks with tile prototypes. Allows the prototype to overlap colliding tiles up until its center point. This is only respected for character movement and cars driven by players. Defaults to `false`.
     */
    consider_tile_transitions?: boolean;
    /**
     * Any prototype with this collision option will only be checked for collision with other prototype's collision masks if they are a tile. Defaults to `false`.
     */
    colliding_with_tiles_only?: boolean;
}
/**
 * Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.
 *
 * Similar to {@link MapPosition | runtime:MapPosition}, Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
 * @example ```
red1 = {r = 0.5, g = 0, b = 0, a = 0.5}  -- Half-opacity red
red2 = {r = 0.5, a = 0.5}                -- Same color as red1
black = {}                               -- All channels omitted: black
red1_short = {0.5, 0, 0, 0.5}            -- Same color as red1 in short-hand notation
```
 */
type Color = {
    r?: float;
    g?: float;
    b?: float;
    a?: float;
} | [
    float,
    float,
    float,
    float
];
/**
 * Same as {@link Color | runtime:Color}, but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255].
 */
type ColorModifier = {
    r?: float;
    g?: float;
    b?: float;
    a?: float;
} | [
    float,
    float,
    float,
    float
];
/**
 * Commands can be given to enemies and unit groups.
 */
interface BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    type: defines.command;
}
/**
 * Commands can be given to enemies and unit groups.
 */
type Command = BaseCommand | CommandAttack | CommandAttackArea | CommandBuildBase | CommandCompound | CommandFlee | CommandGoToLocation | CommandGroup | CommandStop | CommandWander;
/**
 *
 * Applies to variant case `defines.command.attack`
 */
interface CommandAttack extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.attack;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    'target': LuaEntity;
}
/**
 *
 * Applies to variant case `defines.command.attack_area`
 */
interface CommandAttackArea extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.attack_area;
    /**
     * Center of the attack area.
     */
    'destination': MapPosition;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    /**
     * Radius of the attack area.
     */
    'radius': double;
}
/**
 *
 * Applies to variant case `defines.command.build_base`
 */
interface CommandBuildBase extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.build_base;
    /**
     * Where to build the base.
     */
    'destination': MapPosition;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    /**
     * Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in a non-candidate chunk. Defaults to `false`.
     */
    'ignore_planner'?: boolean;
}
/**
 *
 * Applies to variant case `defines.command.compound`
 */
interface CommandCompound extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.compound;
    /**
     * The sub-commands.
     */
    'commands': Command[];
    /**
     * How the commands should be chained together.
     */
    'structure_type': defines.compound_command;
}
/**
 *
 * Applies to variant case `defines.command.flee`
 */
interface CommandFlee extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.flee;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    /**
     * The entity to flee from
     */
    'from': LuaEntity;
}
/**
 *
 * Applies to variant case `defines.command.go_to_location`
 */
interface CommandGoToLocation extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.go_to_location;
    /**
     * The position to path to. Either this or `destination_entity` need to be specified. If both are, `destination_entity` is used.
     */
    'destination'?: MapPosition;
    /**
     * The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used.
     */
    'destination_entity'?: LuaEntity;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    /**
     * Flags that affect pathfinder behavior.
     */
    'pathfind_flags'?: PathfinderFlags;
    /**
     * How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`.
     */
    'radius'?: double;
}
/**
 *
 * Applies to variant case `defines.command.group`
 */
interface CommandGroup extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.group;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    /**
     * The group whose command to follow.
     */
    'group': LuaCommandable;
    /**
     * Whether the unit will use the group distraction or the commands distraction. Defaults to true.
     */
    'use_group_distraction'?: boolean;
}
/**
 *
 * Applies to variant case `defines.command.stop`
 */
interface CommandStop extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.stop;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means stop forever.
     */
    'ticks_to_wait'?: uint;
}
/**
 *
 * Applies to variant case `defines.command.wander`
 */
interface CommandWander extends BaseCommand {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command.wander;
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction;
    /**
     * Defaults to 10. Does not apply when `wander_in_group` is `true`.
     */
    'radius'?: double;
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means wander forever.
     */
    'ticks_to_wait'?: uint;
    /**
     * When commanding a group, defines how the group will wander. When `true`, the units in the group will wander around inside the group's radius, just like gathering biters. When `false`, the units will wander as a group, ie they will all walk together in the same random direction. Default is true for groups. Passing true for a single unit is an error.
     */
    'wander_in_group'?: boolean;
}
/**
 * A string that specifies how the inputs should be compared.
 *
 * While the API accepts both versions for `"less/greater than or equal to"` and `"not equal"`, it'll always return `"≥"`, `"≤"` or `"≠"` respectively when reading them back.
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
interface CompiledLogisticFilter {
    index: LogisticFilterIndex;
    /**
     * The type of the logistic filter.
     */
    type?: SignalIDType;
    /**
     * Name of the logistic filter.
     */
    name?: string;
    /**
     * The prototype name of the quality. `nil` for any quality.
     */
    quality?: string;
    /**
     * The comparator for quality. `nil` if any quality.
     */
    comparator?: ComparatorString;
    count: int;
    max_count?: ItemCountType;
    /**
     * Defaults to 0.
     */
    minimum_delivery_count?: ItemCountType;
}
interface ConfigurationChangedData {
    /**
     * Old version of the map. Present only when loading map version other than the current version.
     */
    old_version?: string;
    /**
     * New version of the map. Present only when loading map version other than the current version.
     */
    new_version?: string;
    /**
     * Dictionary of mod changes. It is indexed by mod name.
     */
    mod_changes: Record<string, ModChangeData>;
    /**
     * `true` when mod startup settings have changed since the last time this save was loaded.
     */
    mod_startup_settings_changed: boolean;
    /**
     * `true` when mod prototype migrations have been applied since the last time this save was loaded.
     */
    migration_applied: boolean;
}
interface CraftingQueueItem {
    /**
     * The index of the item in the crafting queue.
     */
    index: uint;
    /**
     * The recipe being crafted.
     */
    recipe: string;
    /**
     * The amount of items being crafted.
     */
    count: uint;
    /**
     * The item is a prerequisite for another item in the queue.
     */
    prerequisite: boolean;
}
type CursorBoxRenderType = /**
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
interface CustomCommandData {
    /**
     * The name of the command.
     */
    name: string;
    /**
     * The tick the command was used in.
     */
    tick: uint;
    /**
     * The player who issued the command, or `nil` if it was issued from the server console.
     */
    player_index?: uint;
    /**
     * The parameter passed after the command, if there is one.
     */
    parameter?: string;
}
interface CustomEntityStatus {
    diode: defines.entity_status_diode;
    label: LocalisedString;
}
interface CutsceneWaypoint {
    /**
     * Position to pan the camera to.
     */
    position?: MapPosition;
    /**
     * Entity or unit group to pan the camera to.
     */
    target?: LuaEntity | LuaCommandable;
    /**
     * How many ticks it will take to reach this waypoint from the previous one.
     */
    transition_time: uint;
    /**
     * Time in ticks to wait before moving to the next waypoint.
     */
    time_to_wait: uint;
    /**
     * Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used.
     */
    zoom?: double;
}
interface DamageTypeFilters {
    /**
     * Whether this is a whitelist or a blacklist of damage types. `true` means whitelist.
     */
    whitelist: boolean;
    /**
     * The damage types to filter for. The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    types: Record<string, true>;
}
/**
 * A damage type prototype may be specified in one of two ways.
 */
type DamageTypeID = /**
 * The damage type prototype.
 */
LuaDamagePrototype | /**
 * The prototype name.
 */
string;
type DeciderCombinatorCondition = table;
type DeciderCombinatorOutput = table;
interface DeciderCombinatorParameters {
    /**
     * List of conditions.
     */
    conditions: DeciderCombinatorCondition[];
    /**
     * List of outputs.
     */
    outputs: DeciderCombinatorOutput[];
}
interface Decorative {
    /**
     * The name of the decorative prototype.
     */
    name: string;
    position: TilePosition;
    amount: uint8;
}
/**
 * A decorative prototype may be specified in one of two ways.
 */
type DecorativeID = /**
 * The decorative prototype.
 */
LuaDecorativePrototype | /**
 * The prototype name.
 */
string;
interface BaseDecorativePrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'decal' | 'autoplace' | 'collision-mask';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type DecorativePrototypeFilter = BaseDecorativePrototypeFilter | DecorativePrototypeFilterCollisionMask;
/**
 *
 * Applies to variant case `collision-mask`
 */
interface DecorativePrototypeFilterCollisionMask extends BaseDecorativePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'collision-mask';
    /**
     * Name of one {@link layer | runtime:LuaCollisionLayerPrototype} or a full collision mask.
     */
    'mask': CollisionLayerID | CollisionMask;
    /**
     * How to filter.
     */
    'mask_mode': 'collides' | 'layers-equals' | 'contains-any' | 'contains-all';
}
interface DecorativeResult {
    position: TilePosition;
    decorative: LuaDecorativePrototype;
    amount: uint;
}
interface DetailedItemOnLine {
    stack: LuaItemStack;
    /**
     * Linear position of this stack on this line.
     */
    position: float;
    /**
     * Unique identifier of this item while it is on transport lines.
     */
    unique_id: uint;
}
/**
 * Technology difficulty settings. Updating any of the attributes will immediately take effect in the game engine.
 */
interface DifficultySettings {
    /**
     * A value in range [0.01, 100].
     */
    spoil_time_modifier: double;
    /**
     * A value in range [0.001, 1000].
     */
    technology_price_multiplier: double;
}
interface DisplayPanelMessageDefinition {
    /**
     * The message to show.
     */
    text: string;
    /**
     * The icon to show alongside the message.
     */
    icon: SignalID;
    /**
     * The circuit condition under which to show the message.
     */
    condition: CircuitConditionDefinition;
}
interface DisplayResolution {
    width: uint;
    height: uint;
}
interface DragTarget {
    target_entity: LuaEntity;
    /**
     * Identifier of the wire connector from which the wire is being dragged.
     */
    wire_connector_id: defines.wire_connector_id;
}
interface EffectReceiver {
    base_effect: ModuleEffects;
    uses_module_effects: boolean;
    uses_beacon_effects: boolean;
    uses_surface_effects: boolean;
}
interface ElemID {
    type: ElemType;
    /**
     * Name of a prototype as defined by `type`.
     */
    name: string;
    /**
     * Name of a quality prototype if `type` use quality.
     */
    quality?: string;
}
/**
 * A {@link string | runtime:string} specifying a type for {@link choose elem buttons | runtime:LuaGuiElement::elem_type}. It's also used by {@link ElemID | runtime:ElemID} for {@link LuaGuiElement::elem_tooltip | runtime:LuaGuiElement::elem_tooltip}.
 */
type ElemType = 'achievement' | 'decorative' | 'entity' | 'equipment' | 'fluid' | 'item' | 'item-group' | 'recipe' | 'signal' | 'technology' | 'tile' | 'asteroid-chunk' | 'space-location' | 'item-with-quality' | 'entity-with-quality' | 'recipe-with-quality' | 'equipment-with-quality';
/**
 * These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%.
 */
interface EnemyEvolutionMapSettings {
    /**
     * Whether enemy evolution is enabled at all.
     */
    enabled: boolean;
    /**
     * The amount evolution naturally progresses by every second. Defaults to `0.000004`.
     */
    time_factor: double;
    /**
     * The amount evolution progresses for every destroyed spawner. Defaults to `0.002`.
     */
    destroy_factor: double;
    /**
     * The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`.
     */
    pollution_factor: double;
}
/**
 * Candidate chunks are given scores to determine which one of them should be expanded into. This score takes into account various settings noted below. The iteration is over a square region centered around the chunk for which the calculation is done, and includes the central chunk as well. Distances are calculated as {@link Manhattan distance | https://en.wikipedia.org/wiki/Taxicab_geometry}.
 *
 * The pseudocode algorithm to determine a chunk's score is as follows:
 *
 * ```
 * player = 0
 * for neighbour in all chunks within enemy_building_influence_radius from chunk:
 *   player += number of player buildings on neighbour
 *     * building_coefficient
 *     * neighbouring_chunk_coefficient^distance(chunk, neighbour)
 * base = 0
 * for neighbour in all chunk within friendly_base_influence_radius from chunk:
 *   base += num of enemy bases on neighbour
 *     * other_base_coefficient
 *     * neighbouring_base_chunk_coefficient^distance(chunk, neighbour)
 * score(chunk) = 1 / (1 + player + base)
 * ```
 */
interface EnemyExpansionMapSettings {
    /**
     * Whether enemy expansion is enabled at all.
     */
    enabled: boolean;
    /**
     * Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`.
     */
    max_expansion_distance: uint;
    /**
     * Defaults to `2`.
     */
    friendly_base_influence_radius: uint;
    /**
     * Defaults to `2`.
     */
    enemy_building_influence_radius: uint;
    /**
     * Defaults to `0.1`.
     */
    building_coefficient: double;
    /**
     * Defaults to `2.0`.
     */
    other_base_coefficient: double;
    /**
     * Defaults to `0.5`.
     */
    neighbouring_chunk_coefficient: double;
    /**
     * Defaults to `0.4`.
     */
    neighbouring_base_chunk_coefficient: double;
    /**
     * A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%.
     */
    max_colliding_tiles_coefficient: double;
    /**
     * The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`.
     */
    settler_group_min_size: uint;
    /**
     * The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`.
     */
    settler_group_max_size: uint;
    /**
     * The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3 600=14 400` ticks.
     */
    min_expansion_cooldown: uint;
    /**
     * The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3 600=216 000` ticks.
     */
    max_expansion_cooldown: uint;
}
/**
 * An entity prototype may be specified in one of three ways.
 */
type EntityID = /**
 * The entity prototype.
 */
LuaEntityPrototype | /**
 * The entity.
 */
LuaEntity | /**
 * The prototype name.
 */
string;
/**
 * An entity prototype with optional quality specification.
 */
interface EntityIDAndQualityIDPair {
    /**
     * Entity prototype.
     */
    name: EntityID;
    /**
     * Quality prototype. Normal quality will be used if not specified.
     */
    quality?: QualityID;
}
interface EntityIDFilter {
    /**
     * The entity name.
     */
    name: string;
    /**
     * The name of the quality.
     */
    quality?: string;
    /**
     * The quality comparison type.
     */
    comparator?: ComparatorString;
}
interface BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'flying-robot' | 'robot-with-logistics-interface' | 'rail' | 'ghost' | 'explosion' | 'vehicle' | 'crafting-machine' | 'rolling-stock' | 'turret' | 'transport-belt-connectable' | 'wall-connectable' | 'buildable' | 'placable-in-editor' | 'clonable' | 'selectable' | 'hidden' | 'entity-with-health' | 'building' | 'fast-replaceable' | 'uses-direction' | 'minable' | 'circuit-connectable' | 'autoplace' | 'blueprintable' | 'item-to-place' | 'name' | 'type' | 'collision-mask' | 'flag' | 'build-base-evolution-requirement' | 'selection-priority' | 'emissions-per-second' | 'crafting-category';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type EntityPrototypeFilter = BaseEntityPrototypeFilter | EntityPrototypeFilterBuildBaseEvolutionRequirement | EntityPrototypeFilterCollisionMask | EntityPrototypeFilterCraftingCategory | EntityPrototypeFilterEmissionsPerSecond | EntityPrototypeFilterFlag | EntityPrototypeFilterName | EntityPrototypeFilterSelectionPriority | EntityPrototypeFilterType;
/**
 *
 * Applies to variant case `build-base-evolution-requirement`
 */
interface EntityPrototypeFilterBuildBaseEvolutionRequirement extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'build-base-evolution-requirement';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 * Usage example:
 *
 * ```
 * prototypes.get_entity_filtered({{filter = "collision-mask", mask = "player", mask_mode = "collides"}})
 * ```
 * Applies to variant case `collision-mask`
 */
interface EntityPrototypeFilterCollisionMask extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'collision-mask';
    /**
     * Name of one {@link layer | runtime:LuaCollisionLayerPrototype} or a full collision mask.
     */
    'mask': CollisionLayerID | CollisionMask;
    'mask_mode': 'collides' | 'layers-equals' | 'contains-any' | 'contains-all';
}
/**
 *
 * Applies to variant case `crafting-category`
 */
interface EntityPrototypeFilterCraftingCategory extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'crafting-category';
    /**
     * Matches if the prototype is for a crafting machine with this {@link crafting category | runtime:LuaEntityPrototype::crafting_categories}.
     */
    'crafting_category': string;
}
/**
 *
 * Applies to variant case `emissions-per-second`
 */
interface EntityPrototypeFilterEmissionsPerSecond extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'emissions-per-second';
    'comparison': ComparatorString;
    /**
     * The name of a pollutant type to check.
     */
    'pollutant': string;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 * Usage example:
 *
 * ```
 * prototypes.get_entity_filtered({{filter = "flag", flag = "placeable-player"}, {filter = "flag", flag = "placeable-enemy", mode = "and"}})
 * ```
 * Applies to variant case `flag`
 */
interface EntityPrototypeFilterFlag extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'flag';
    'flag': EntityPrototypeFlag;
}
/**
 * For use within nested filters such as the `place-result` filter of array{@link [ItemPrototypeFilter | runtime:ItemPrototypeFilter}].
 *
 * To get a specific prototype by name, see {@link LuaPrototypes::entity | runtime:LuaPrototypes::entity}.
 * Applies to variant case `name`
 */
interface EntityPrototypeFilterName extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name, or list of acceptable names.
     */
    'name': string | string[];
}
/**
 *
 * Applies to variant case `selection-priority`
 */
interface EntityPrototypeFilterSelectionPriority extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'selection-priority';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': uint8;
}
/**
 * Usage example:
 * ```
 * prototypes.get_entity_filtered({{filter = "type", type = "unit"}})
 * ```
 * Applies to variant case `type`
 */
interface EntityPrototypeFilterType extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type, or a list of acceptable types.
     */
    'type': string | string[];
}
/**
 * A {@link string | runtime:string} specifying an entity prototype flag.
 */
type EntityPrototypeFlag = /**
 * Prevents the entity from being rotated before or after placement.
 */
'not-rotatable' | /**
 * Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
 */
'placeable-neutral' | /**
 * Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
 */
'placeable-player' | /**
 * Determines the default force when placing entities in the map editor and using the "AUTO" option for the force.
 */
'placeable-enemy' | /**
 * Determines whether the entity needs to be aligned with the invisible grid within the world. Most entities are confined in this way, with a few exceptions such as trees and land mines.
 */
'placeable-off-grid' | /**
 * Makes it possible to blueprint, deconstruct, and repair the entity (which can be turned off again using the specific flags). Makes it possible for the biter AI to target the entity as a distraction. Enables dust to automatically be created when building the entity. If the entity does not have a `map_color` set, this flag makes the entity appear on the map with the default color specified by the UtilityConstants.
 */
'player-creation' | /**
 * Uses 45 degree angle increments when selecting direction.
 */
'building-direction-8-way' | /**
 * Used to automatically detect the proper direction of the entity if possible. Used by the pump, train stop, and train signal by default.
 */
'filter-directions' | /**
 * When set, entity will be possible to obtain by using {@link LuaGameScript::get_entity_by_unit_number | runtime:LuaGameScript::get_entity_by_unit_number}. It also changes input actions sent by a player to be selecting entity by unit number instead of a position which may help players in latency to select moving entities.
 */
'get-by-unit-number' | /**
 * Used to specify that the entity breathes air, and is thus affected by poison.
 */
'breaths-air' | /**
 * Used to specify that the entity can not be 'healed' by repair packs.
 */
'not-repairable' | /**
 * Prevents the entity from being drawn on the map.
 */
'not-on-map' | /**
 * Prevents the entity from being deconstructed.
 */
'not-deconstructable' | /**
 * Prevents the entity from being part of a blueprint.
 */
'not-blueprintable' | /**
 * Hides the alt-info of this entity when in alt-mode.
 */
'hide-alt-info' | 'no-gap-fill-while-building' | /**
 * Does not apply fire stickers to the entity.
 */
'not-flammable' | /**
 * Prevents inserters and loaders from taking items from this entity.
 */
'no-automated-item-removal' | /**
 * Prevents inserters and loaders from inserting items into this entity.
 */
'no-automated-item-insertion' | /**
 * Prevents the entity from being copy-pasted.
 */
'no-copy-paste' | /**
 * Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges.
 */
'not-selectable-in-game' | /**
 * Prevents the entity from being selected by the upgrade planner.
 */
'not-upgradable' | /**
 * Prevents the entity from being shown in the kill statistics.
 */
'not-in-kill-statistics' | 'building-direction-16-way' | 'snap-to-rail-support-spot' | /**
 * Prevents the entity from being shown in the "made in" list in recipe tooltips.
 */
'not-in-made-in';
/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 *
 * By default, none of these flags are set.
 */
type EntityPrototypeFlags = Record<EntityPrototypeFlag, true>;
interface EntitySearchFilters {
    area?: BoundingBox;
    /**
     * Has precedence over area field.
     */
    position?: MapPosition;
    /**
     * If given with position, will return all entities within the radius of the position.
     */
    radius?: double;
    /**
     * An empty array means nothing matches the name filter.
     */
    name?: EntityID | EntityID[];
    /**
     * An empty array means nothing matches the type filter.
     */
    type?: string | string[];
    /**
     * An empty array means nothing matches the ghost_name filter.
     */
    ghost_name?: EntityID | EntityID[];
    /**
     * An empty array means nothing matches the ghost_type filter.
     */
    ghost_type?: string | string[];
    direction?: defines.direction | defines.direction[];
    collision_mask?: CollisionLayerID | CollisionLayerID[] | Record<CollisionLayerID, true>;
    force?: ForceSet;
    to_be_deconstructed?: boolean;
    to_be_upgraded?: boolean;
    limit?: uint;
    is_military_target?: boolean;
    has_item_inside?: ItemWithQualityID;
    quality?: QualityCondition;
    /**
     * Whether the filters should be inverted.
     */
    invert?: boolean;
}
/**
 * An entity prototype with optional quality specification. Can be specified in one of four ways.
 */
type EntityWithQualityID = /**
 * The entity. Both prototype and quality of the entity will be used.
 */
LuaEntity | /**
 * The entity prototype. Normal quality will be used.
 */
LuaEntityPrototype | /**
 * The prototype name. Normal quality will be used.
 */
string | /**
 * A table of entity prototype and quality.
 */
EntityIDAndQualityIDPair;
/**
 * An equipment prototype may be specified in one of three ways.
 */
type EquipmentID = /**
 * The equipment prototype.
 */
LuaEquipmentPrototype | /**
 * The equipment.
 */
LuaEquipment | /**
 * The prototype name.
 */
string;
/**
 * An equipment prototype with optional quality specification.
 */
interface EquipmentIDAndQualityIDPair {
    /**
     * Equipment prototype.
     */
    name: EquipmentID;
    /**
     * Quality prototype. Normal quality will be used if not specified.
     */
    quality?: QualityID;
}
/**
 * A table used to define a manual shape for a piece of equipment.
 */
interface EquipmentPoint {
    x: uint;
    y: uint;
}
/**
 * Position inside an equipment grid. This uses the same format as {@link MapPosition | runtime:MapPosition}, meaning it can be specified either with or without explicit keys.
 * @example ```
-- Explicit definition
{x = 5, y = 2}
{y = 2, x = 5}
```
 * @example ```
-- Shorthand
{1, 2}
```
 */
type EquipmentPosition = {
    x: int;
    y: int;
} | [
    int,
    int
];
interface BaseEquipmentPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'item-to-place' | 'type';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type EquipmentPrototypeFilter = BaseEquipmentPrototypeFilter | EquipmentPrototypeFilterType;
/**
 *
 * Applies to variant case `type`
 */
interface EquipmentPrototypeFilterType extends BaseEquipmentPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type, or a list of acceptable types.
     */
    'type': string | string[];
}
/**
 * An equipment prototype with optional quality specification.
 */
type EquipmentWithQualityID = /**
 * The equipment prototype. Normal quality will be used.
 */
LuaEquipmentPrototype | /**
 * The equipment. Both prototype and quality of the provided equipment will be used.
 */
LuaEquipment | /**
 * The prototype name. Normal quality will be used.
 */
string | /**
 * A table of equipment prototype and quality.
 */
EquipmentIDAndQualityIDPair;
/**
 * Information about the event that has been raised. The table can also contain other fields depending on the type of event. See {@link the list of Factorio events | runtime:events} for more information on these.
 */
interface EventData {
    /**
     * The identifier of the event this handler was registered to.
     */
    name: defines.events;
    /**
     * The tick during which the event happened.
     */
    tick: uint;
    /**
     * The name of the mod that raised the event if it was raised using {@link LuaBootstrap::raise_event | runtime:LuaBootstrap::raise_event}.
     */
    mod_name?: string;
}
/**
 * Used to filter out irrelevant event callbacks in a performant way.
 *
 * Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
 */
type EventFilter = (LuaPrePlatformMinedEntityEventFilter | LuaRobotMinedEntityEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaPreGhostUpgradedEventFilter | LuaPlatformMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlatformBuiltEntityEventFilter | LuaPreGhostDeconstructedEventFilter | LuaEntityClonedEventFilter | LuaScriptRaisedTeleportedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaRobotBuiltEntityEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaPlayerRepairedEntityEventFilter | LuaUpgradeCancelledEventFilter | LuaSectorScannedEventFilter | LuaPostEntityDiedEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPlayerMinedEntityEventFilter | LuaEntityDamagedEventFilter | LuaScriptRaisedReviveEventFilter | LuaEntityDiedEventFilter | LuaPreRobotMinedEntityEventFilter)[];
interface Fluid {
    /**
     * Fluid prototype name of the fluid.
     */
    name: string;
    /**
     * Amount of the fluid.
     */
    amount: double;
    /**
     * The temperature. When reading from {@link LuaFluidBox | runtime:LuaFluidBox}, this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype.
     */
    temperature?: float;
}
interface FluidBoxConnectionRecord {
    this_linked_connection_id: uint;
    other_entity: LuaEntity;
    other_linked_connection_id: uint;
}
interface FluidBoxFilter {
    /**
     * Fluid prototype name of the filtered fluid.
     */
    name: string;
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    minimum_temperature: float;
    /**
     * The maximum temperature allowed into the fluidbox.
     */
    maximum_temperature: float;
}
interface FluidBoxFilterSpec {
    /**
     * Fluid prototype name of the filtered fluid.
     */
    name: string;
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    minimum_temperature?: float;
    /**
     * The maximum temperature allowed into the fluidbox.
     */
    maximum_temperature?: float;
    /**
     * Force the filter to be set, regardless of current fluid content.
     */
    force?: boolean;
}
/**
 * A fluid may be specified in one of three ways.
 */
type FluidID = /**
 * The fluid name.
 */
string | /**
 * The fluid prototype.
 */
LuaFluidPrototype | /**
 * The fluid.
 */
Fluid;
/**
 * @example ```
-- Products of the "advanced-oil-processing" recipe
{{type="fluid", name="heavy-oil", amount=1},
  {type="fluid", name="light-oil", amount=4.5},
  {type="fluid", name="petroleum-gas", amount=5.5}}
```
 */
interface FluidProduct {
    type: 'fluid';
    /**
     * Prototype name of the result.
     */
    name: string;
    /**
     * Amount of the fluid to give. If not returned, `amount_min` and `amount_max` will be present instead.
     */
    amount?: double;
    /**
     * Minimal amount of the fluid to give. Not returned if `amount` is returned.
     */
    amount_min?: double;
    /**
     * Maximum amount of the fluid to give. Not returned if `amount` is returned.
     */
    amount_max?: double;
    /**
     * A value in range `[0, 1]`. Fluid is only given with this probability; otherwise no product is produced.
     */
    probability: double;
    /**
     * How much of this product is ignored by statistics.
     */
    ignored_by_stats?: double;
    /**
     * How much of this product is ignored by productivity.
     */
    ignored_by_productivity?: double;
    /**
     * The fluid temperature of this product.
     */
    temperature?: float;
    fluidbox_index?: uint;
}
interface BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'hidden' | 'name' | 'subgroup' | 'default-temperature' | 'max-temperature' | 'heat-capacity' | 'fuel-value' | 'emissions-multiplier' | 'gas-temperature';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type FluidPrototypeFilter = BaseFluidPrototypeFilter | FluidPrototypeFilterDefaultTemperature | FluidPrototypeFilterEmissionsMultiplier | FluidPrototypeFilterFuelValue | FluidPrototypeFilterGasTemperature | FluidPrototypeFilterHeatCapacity | FluidPrototypeFilterMaxTemperature | FluidPrototypeFilterName | FluidPrototypeFilterSubgroup;
/**
 *
 * Applies to variant case `default-temperature`
 */
interface FluidPrototypeFilterDefaultTemperature extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'default-temperature';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `emissions-multiplier`
 */
interface FluidPrototypeFilterEmissionsMultiplier extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'emissions-multiplier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `fuel-value`
 */
interface FluidPrototypeFilterFuelValue extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'fuel-value';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `gas-temperature`
 */
interface FluidPrototypeFilterGasTemperature extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'gas-temperature';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `heat-capacity`
 */
interface FluidPrototypeFilterHeatCapacity extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'heat-capacity';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `max-temperature`
 */
interface FluidPrototypeFilterMaxTemperature extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'max-temperature';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 * For use within nested filters such as the `has-product-fluid` filter of array{@link [RecipePrototypeFilter | runtime:RecipePrototypeFilter}].
 *
 * To get a specific prototype by name, see {@link LuaPrototypes::fluid | runtime:LuaPrototypes::fluid}.
 * Applies to variant case `name`
 */
interface FluidPrototypeFilterName extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name, or list of acceptable names.
     */
    'name': string | string[];
}
/**
 *
 * Applies to variant case `subgroup`
 */
interface FluidPrototypeFilterSubgroup extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'subgroup';
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    'subgroup': string;
}
type ForceCondition = /**
 * All forces pass.
 */
'all' | /**
 * Forces which will attack pass.
 */
'enemy' | /**
 * Forces which won't attack pass.
 */
'ally' | /**
 * Forces which are friends pass.
 */
'friend' | /**
 * Forces which are not friends pass.
 */
'not-friend' | /**
 * The same force pass.
 */
'same' | /**
 * The non-same forces pass.
 */
'not-same';
/**
 * A force may be specified in one of three ways.
 */
type ForceID = /**
 * Name of the force, same as {@link LuaForce::name | runtime:LuaForce::name}.
 */
string | /**
 * Index of the force, same as {@link LuaForce::index | runtime:LuaForce::index}.
 */
uint8 | /**
 * A reference to {@link LuaForce | runtime:LuaForce} may be passed directly.
 */
LuaForce;
/**
 * Set of forces. Can be specified in one of two ways.
 */
type ForceSet = /**
 * Array of many forces.
 */
ForceID[] | /**
 * A single force.
 */
ForceID;
/**
 * Parameters that affect the look and control of the game. Updating any of the member attributes here will immediately take effect in the game engine.
 */
interface GameViewSettings {
    /**
     * Show the flashing alert icons next to the player's toolbar.
     */
    show_alert_gui: boolean;
    /**
     * Show the controller GUI elements. This includes the toolbar, the selected tool slot, the armour slot, and the gun and ammunition slots.
     */
    show_controller_gui: boolean;
    /**
     * Shows or hides the crafting queue.
     */
    show_crafting_queue: boolean;
    /**
     * Show overlay icons on entities. Also known as "alt-mode".
     */
    show_entity_info: boolean;
    /**
     * Shows or hides the tooltip that is displayed when selecting an entity.
     */
    show_entity_tooltip: boolean;
    /**
     * hows or hides the mouse and keyboard/controller button hints in the bottom left corner if they are enabled in the interface settings.
     */
    show_hotkey_suggestions: boolean;
    /**
     * Shows or hides the view options when map is opened.
     */
    show_map_view_options: boolean;
    /**
     * Show the chart in the upper right-hand corner of the screen.
     */
    show_minimap: boolean;
    /**
     * Shows or hides quickbar of shortcuts.
     */
    show_quickbar: boolean;
    /**
     * When `true` (`false` is default), the rails will always show the rail block visualisation.
     */
    show_rail_block_visualisation: boolean;
    /**
     * Show research progress and name in the upper right-hand corner of the screen.
     */
    show_research_info: boolean;
    /**
     * Shows or hides the shortcut bar.
     */
    show_shortcut_bar: boolean;
    /**
     * Shows or hides the buttons row.
     */
    show_side_menu: boolean;
    /**
     * Shows or hides the tool window with the weapons and armor.
     */
    show_tool_bar: boolean;
    /**
     * When `true` (the default), mousing over an entity will select it. Otherwise, moving the mouse won't update entity selection.
     */
    update_entity_selection: boolean;
}
interface GuiAnchor {
    gui: defines.relative_gui_type;
    position: defines.relative_gui_position;
    /**
     * If provided, only anchors the GUI element when the opened things type matches the type.
     */
    type?: string;
    /**
     * If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`.
     */
    name?: string;
    /**
     * If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated.
     */
    names?: string[];
}
/**
 * Used for specifying where a GUI arrow should point to.
 */
interface BaseGuiArrowSpecification {
    margin: uint;
    /**
     * This determines which of the following fields will be required.
     */
    type: GuiArrowType;
}
/**
 * Used for specifying where a GUI arrow should point to.
 */
type GuiArrowSpecification = BaseGuiArrowSpecification | GuiArrowSpecificationCraftingQueue | GuiArrowSpecificationEntity | GuiArrowSpecificationItemStack | GuiArrowSpecificationPosition;
/**
 *
 * Applies to variant case `crafting_queue`
 */
interface GuiArrowSpecificationCraftingQueue extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required.
     */
    'type': 'crafting_queue';
    /**
     * Index in the crafting queue to point to.
     */
    'crafting_queueindex': uint;
}
/**
 *
 * Applies to variant case `entity`
 */
interface GuiArrowSpecificationEntity extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required.
     */
    'type': 'entity';
    'entity': LuaEntity;
}
/**
 *
 * Applies to variant case `item_stack`
 */
interface GuiArrowSpecificationItemStack extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required.
     */
    'type': 'item_stack';
    /**
     * Which inventory the stack is in.
     */
    'inventory_index': defines.inventory;
    /**
     * Which stack to point to.
     */
    'item_stack_index': uint;
    'source': 'player' | 'target' | 'player-quickbar';
}
/**
 *
 * Applies to variant case `position`
 */
interface GuiArrowSpecificationPosition extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required.
     */
    'type': 'position';
    'position': MapPosition;
}
/**
 * Used by {@link GuiArrowSpecification | runtime:GuiArrowSpecification}.
 */
type GuiArrowType = /**
 * Will remove the arrow entirely.
 */
'nowhere' | /**
 * Will point to the current goal.
 */
'goal' | 'entity_info' | 'active_window' | 'entity' | 'position' | 'crafting_queue' | /**
 * Will point to a given item stack in an inventory.
 */
'item_stack';
/**
 * Direction of a {@link LuaGuiElement's | runtime:LuaGuiElement::direction} layout.
 */
type GuiDirection = 'horizontal' | 'vertical';
type GuiElementType = /**
 * A clickable element. Relevant event: {@link on_gui_click | runtime:on_gui_click}
 */
'button' | /**
 * A `button` that displays a sprite rather than text. Relevant event: {@link on_gui_click | runtime:on_gui_click}
 */
'sprite-button' | /**
 * A clickable element with a check mark that can be turned off or on. Relevant event: {@link on_gui_checked_state_changed | runtime:on_gui_checked_state_changed}
 */
'checkbox' | /**
 * An invisible container that lays out its children either horizontally or vertically.
 */
'flow' | /**
 * A non-transparent box that contains other elements. It can have a title (set via the `caption` attribute). Just like a `flow`, it lays out its children either horizontally or vertically. Relevant event: {@link on_gui_location_changed | runtime:on_gui_location_changed}
 */
'frame' | /**
 * A piece of text.
 */
'label' | /**
 * A horizontal or vertical separation line.
 */
'line' | /**
 * A partially filled bar that can be used to indicate progress.
 */
'progressbar' | /**
 * An invisible container that lays out its children in a specific number of columns. The width of each column is determined by the widest element it contains.
 */
'table' | /**
 * A single-line box the user can type into. Relevant events: {@link on_gui_text_changed | runtime:on_gui_text_changed}, {@link on_gui_confirmed | runtime:on_gui_confirmed}
 */
'textfield' | /**
 * An element that is similar to a `checkbox`, but with a circular appearance. Clicking a selected radio button will not unselect it. Radio buttons are not linked to each other in any way. Relevant event: {@link on_gui_checked_state_changed | runtime:on_gui_checked_state_changed}
 */
'radiobutton' | /**
 * An element that shows an image.
 */
'sprite' | /**
 * An invisible element that is similar to a `flow`, but has the ability to show and use scroll bars.
 */
'scroll-pane' | /**
 * A drop-down containing strings of text. Relevant event: {@link on_gui_selection_state_changed | runtime:on_gui_selection_state_changed}
 */
'drop-down' | /**
 * A list of strings, only one of which can be selected at a time. Shows a scroll bar if necessary. Relevant event: {@link on_gui_selection_state_changed | runtime:on_gui_selection_state_changed}
 */
'list-box' | /**
 * A camera that shows the game at the given position on the given surface. It can visually track an {@link entity | runtime:LuaGuiElement::entity} that is set after the element has been created.
 */
'camera' | /**
 * A button that lets the player pick from a certain kind of prototype, with optional filtering. Relevant event: {@link on_gui_elem_changed | runtime:on_gui_elem_changed}
 */
'choose-elem-button' | /**
 * A multi-line `textfield`. Relevant event: {@link on_gui_text_changed | runtime:on_gui_text_changed}
 */
'text-box' | /**
 * A horizontal number line which can be used to choose a number. Relevant event: {@link on_gui_value_changed | runtime:on_gui_value_changed}
 */
'slider' | /**
 * A minimap preview, similar to the normal player minimap. It can visually track an {@link entity | runtime:LuaGuiElement::entity} that is set after the element has been created.
 */
'minimap' | /**
 * A preview of an entity. The {@link entity | runtime:LuaGuiElement::entity} has to be set after the element has been created.
 */
'entity-preview' | /**
 * An empty element that just exists. The root GUI elements `screen` and `relative` are `empty-widget`s.
 */
'empty-widget' | /**
 * A collection of `tab`s and their contents. Relevant event: {@link on_gui_selected_tab_changed | runtime:on_gui_selected_tab_changed}
 */
'tabbed-pane' | /**
 * A tab for use in a `tabbed-pane`.
 */
'tab' | /**
 * A switch with three possible states. Can have labels attached to either side. Relevant event: {@link on_gui_switch_state_changed | runtime:on_gui_switch_state_changed}
 */
'switch';
/**
 * Screen coordinates of a GUI element in a {@link LuaGui | runtime:LuaGui}. This uses the same format as {@link TilePosition | runtime:TilePosition}, meaning it can be specified either with or without explicit keys.
 */
type GuiLocation = {
    x: int;
    y: int;
} | [
    int,
    int
];
interface GunShift4Way {
    north: Vector;
    east: Vector;
    south: Vector;
    west: Vector;
}
interface HeatConnection {
    position: Vector;
    direction: defines.direction;
}
/**
 * The settings used by a heat-interface type entity.
 */
interface HeatSetting {
    /**
     * The target temperature. Defaults to the minimum temperature of the heat buffer.
     */
    temperature?: double;
    /**
     * Defaults to `"at-least"`.
     */
    mode?: 'at-least' | 'at-most' | 'exactly' | 'add' | 'remove';
}
/**
 * A single filter used by an infinity-filters instance.
 */
interface InfinityInventoryFilter {
    /**
     * Name of the item.
     */
    name: string;
    /**
     * The count of the filter.
     */
    count?: uint;
    /**
     * Defaults to `"at-least"`.
     */
    mode?: 'at-least' | 'at-most' | 'exactly';
    /**
     * The index of this filter in the filters list. Not required when writing a filter.
     */
    index: uint;
}
/**
 * A single filter used by an infinity-pipe type entity.
 */
interface InfinityPipeFilter {
    /**
     * Name of the fluid.
     */
    name: string;
    /**
     * The fill percentage the pipe (for example `0.5` for 50%). Can't be negative.
     */
    percentage?: double;
    /**
     * The temperature of the fluid. Defaults to the default/minimum temperature of the fluid.
     */
    temperature?: double;
    /**
     * Defaults to `"at-least"`.
     */
    mode?: 'at-least' | 'at-most' | 'exactly' | 'add' | 'remove';
}
interface BaseIngredient {
    type: 'item' | 'fluid';
    /**
     * Prototype name of the required item or fluid.
     */
    name: string;
    /**
     * Amount of the item or fluid.
     */
    amount: double;
    /**
     * How much of this ingredient is ignored by statistics.
     */
    ignored_by_stats?: uint | double;
}
type Ingredient = BaseIngredient | IngredientFluid;
/**
 *
 * Applies to variant case `fluid`
 */
interface IngredientFluid extends BaseIngredient {
    'type': 'fluid';
    /**
     * The maximum fluid temperature allowed.
     */
    'maximum_temperature'?: float;
    /**
     * The minimum fluid temperature required.
     */
    'minimum_temperature'?: float;
}
interface InserterCircuitConditions {
    circuit?: CircuitCondition;
    logistics?: CircuitCondition;
}
interface InventoryFilter {
    /**
     * Position of the corresponding filter slot.
     */
    index: uint;
    /**
     * Item prototype name of the item to filter.
     */
    name: string;
}
type InventoryIndex = uint8;
interface InventoryPosition {
    /**
     * The ID of the inventory to insert into.
     */
    inventory: defines.inventory;
    /**
     * The stack index of the inventory to insert into.
     */
    stack: ItemStackIndex;
    /**
     * How many items to insert. Defaults to `1`.
     */
    count?: ItemCountType;
}
type ItemCountType = uint;
interface ItemCountWithQuality {
    /**
     * The name of the item prototype.
     */
    name: string;
    /**
     * The number of items.
     */
    count: uint;
    /**
     * The quality level of the items.
     */
    quality: QualityID;
}
/**
 * An item filter may be specified in two ways, either as a string which is an item prototype name or as a table.
 */
type ItemFilter = {
    /**
     * The item.
     */
    name?: ItemID;
    /**
     * The quality.
     */
    quality?: QualityID;
    /**
     * The quality comparison type.
     */
    comparator?: ComparatorString;
} | string;
/**
 * An item prototype may be specified in one of four ways.
 */
type ItemID = /**
 * Item prototype.
 */
LuaItemPrototype | /**
 * Non empty item stack.
 */
LuaItemStack | /**
 * The item.
 */
LuaItem | /**
 * The prototype name.
 */
string;
/**
 * An item prototype with optional quality specification.
 */
interface ItemIDAndQualityIDPair {
    /**
     * Item prototype. Returns `LuaItemPrototype` when read.
     */
    name: ItemID;
    /**
     * Quality prototype. Normal quality will be used if not specified. Returns `LuaQualityPrototype` when read.
     */
    quality?: QualityID;
}
interface ItemIDFilter {
    /**
     * The item name.
     */
    name: string;
    /**
     * The name of the quality.
     */
    quality?: string;
    /**
     * The quality comparison type.
     */
    comparator?: ComparatorString;
}
interface ItemInventoryPositions {
    /**
     * A list of stacks into which items should be inserted.
     */
    in_inventory?: InventoryPosition[];
    /**
     * Defaults to `0`. Number of items to request for the equipment grid. When the items arrive they will be used to revive the first matching ghost equipment.
     */
    grid_count?: ItemCountType;
}
interface ItemLocationData {
    surface: LuaSurface;
    entity?: LuaEntity;
    player?: LuaPlayer;
    position: MapPosition;
    force: LuaForce;
}
/**
 * @example ```
-- Products of the "steel-chest" recipe (an array of Product)
{{type="item", name="steel-chest", amount=1}}
```
 * @example ```
-- What a custom recipe would look like that had a probability of 0.5 to return a
-- minimum amount of 1 and a maximum amount of 5
{{type="item", name="custom-item", probability=0.5, amount_min=1, amount_max=5}}
```
 */
interface ItemProduct {
    type: 'item';
    /**
     * Prototype name of the result.
     */
    name: string;
    /**
     * Amount of the item to give. If not returned, `amount_min` and `amount_max` will be present instead.
     */
    amount?: uint16;
    /**
     * Minimal amount of the item to give. Not returned if `amount` is returned.
     */
    amount_min?: uint16;
    /**
     * Maximum amount of the item to give. Not returned if `amount` is returned.
     */
    amount_max?: uint16;
    /**
     * A value in range `[0, 1]`. Item is only given with this probability; otherwise no product is produced.
     */
    probability: double;
    /**
     * How much of this product is ignored by statistics.
     */
    ignored_by_stats?: uint16;
    /**
     * How much of this product is ignored by productivity.
     */
    ignored_by_productivity?: uint16;
    /**
     * Probability that a craft will yield one additional product. Also applies to bonus crafts caused by productivity.
     */
    extra_count_fraction?: float;
    percent_spoiled?: float;
}
interface BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'tool' | 'mergeable' | 'hidden' | 'hidden-in-factoriopedia' | 'is-parameter' | 'item-with-inventory' | 'selection-tool' | 'item-with-label' | 'has-rocket-launch-products' | 'fuel' | 'place-result' | 'burnt-result' | 'place-as-tile' | 'placed-as-equipment-result' | 'name' | 'type' | 'flag' | 'subgroup' | 'fuel-category' | 'stack-size' | 'fuel-value' | 'fuel-acceleration-multiplier' | 'fuel-top-speed-multiplier' | 'fuel-emissions-multiplier';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type ItemPrototypeFilter = BaseItemPrototypeFilter | ItemPrototypeFilterBurntResult | ItemPrototypeFilterFlag | ItemPrototypeFilterFuelAccelerationMultiplier | ItemPrototypeFilterFuelCategory | ItemPrototypeFilterFuelEmissionsMultiplier | ItemPrototypeFilterFuelTopSpeedMultiplier | ItemPrototypeFilterFuelValue | ItemPrototypeFilterName | ItemPrototypeFilterPlaceAsTile | ItemPrototypeFilterPlaceResult | ItemPrototypeFilterPlacedAsEquipmentResult | ItemPrototypeFilterStackSize | ItemPrototypeFilterSubgroup | ItemPrototypeFilterType;
/**
 *
 * Applies to variant case `burnt-result`
 */
interface ItemPrototypeFilterBurntResult extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'burnt-result';
    /**
     * Filters for the burnt result.
     */
    'elem_filters'?: ItemPrototypeFilter[];
}
/**
 *
 * Applies to variant case `flag`
 */
interface ItemPrototypeFilterFlag extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'flag';
    'flag': ItemPrototypeFlag;
}
/**
 *
 * Applies to variant case `fuel-acceleration-multiplier`
 */
interface ItemPrototypeFilterFuelAccelerationMultiplier extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'fuel-acceleration-multiplier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `fuel-category`
 */
interface ItemPrototypeFilterFuelCategory extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'fuel-category';
    /**
     * A {@link LuaFuelCategoryPrototype | runtime:LuaFuelCategoryPrototype} name
     */
    'fuel-category': string;
}
/**
 *
 * Applies to variant case `fuel-emissions-multiplier`
 */
interface ItemPrototypeFilterFuelEmissionsMultiplier extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'fuel-emissions-multiplier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `fuel-top-speed-multiplier`
 */
interface ItemPrototypeFilterFuelTopSpeedMultiplier extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'fuel-top-speed-multiplier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `fuel-value`
 */
interface ItemPrototypeFilterFuelValue extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'fuel-value';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 * For use within nested filters such as the `has-product-item` filter of array{@link [RecipePrototypeFilter | runtime:RecipePrototypeFilter}].
 *
 * To get a specific prototype by name, see {@link LuaPrototypes::item | runtime:LuaPrototypes::item}.
 * Applies to variant case `name`
 */
interface ItemPrototypeFilterName extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name, or list of acceptable names.
     */
    'name': string | string[];
}
/**
 *
 * Applies to variant case `place-as-tile`
 */
interface ItemPrototypeFilterPlaceAsTile extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'place-as-tile';
    /**
     * Filters for the placed tile.
     */
    'elem_filters'?: TilePrototypeFilter[];
}
/**
 *
 * Applies to variant case `place-result`
 */
interface ItemPrototypeFilterPlaceResult extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'place-result';
    /**
     * Filters for the place result.
     */
    'elem_filters'?: EntityPrototypeFilter[];
}
/**
 *
 * Applies to variant case `placed-as-equipment-result`
 */
interface ItemPrototypeFilterPlacedAsEquipmentResult extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'placed-as-equipment-result';
    /**
     * Filters for the placed equipment.
     */
    'elem_filters'?: EquipmentPrototypeFilter[];
}
/**
 * Usage example:
 *
 * ```
 * prototypes.get_item_filtered({{filter = "stack-size", comparison = ">", value = 20}, {filter = "stack-size", comparison = "<", value = 100, mode = "and"}})
 * ```
 * Applies to variant case `stack-size`
 */
interface ItemPrototypeFilterStackSize extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'stack-size';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': uint;
}
/**
 *
 * Applies to variant case `subgroup`
 */
interface ItemPrototypeFilterSubgroup extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'subgroup';
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    'subgroup': string;
}
/**
 * Usage example:
 * ```
 * prototypes.get_item_filtered({{filter = "type", type = "armor"}})
 * ```
 * Applies to variant case `type`
 */
interface ItemPrototypeFilterType extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type, or a list of acceptable types.
     */
    'type': string | string[];
}
/**
 * A {@link string | runtime:string} specifying an item prototype flag.
 */
type ItemPrototypeFlag = /**
 * Determines whether the logistics areas of roboports should be drawn when holding this item. Used by the deconstruction planner by default.
 */
'draw-logistic-overlay' | /**
 * If this item is skipped by the trash-unrequested logic.
 */
'excluded-from-trash-unrequested' | /**
 * Always shows the item in the logistic requests and filters GUIs (among others) even when the recipe for that item is locked.
 */
'always-show' | /**
 * Hides the item from the bonus GUI.
 */
'hide-from-bonus-gui' | /**
 * Hides the item from the tooltip that's shown when hovering over a burner inventory.
 */
'hide-from-fuel-tooltip' | /**
 * Prevents the item from being stacked. It also prevents the item from stacking in assembling machine input slots, which can otherwise exceed the item stack size if required by the recipe. Additionally, the item does not show an item count when in the cursor.
 */
'not-stackable' | /**
 * Makes construction bots prefer this item when building the entity specified by its `place_result`.
 */
'primary-place-result' | /**
 * Allows the item to be opened by the player, firing the `on_mod_item_opened` event. Only has an effect for selection tool items.
 */
'mod-openable' | /**
 * Makes it so the item is deleted when clearing the cursor, instead of being put into the player's inventory. The copy-paste tools use this by default, for example.
 */
'only-in-cursor' | /**
 * Allows the item to be spawned by a quickbar shortcut or custom input.
 */
'spawnable' | 'spoil-result' | /**
 * Controls whether the spoil time ignores the spoil time modifier in the {@link DifficultySettings | runtime:DifficultySettings}.
 */
'ignore-spoil-time-modifier';
/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 *
 * By default, none of these flags are set.
 */
type ItemPrototypeFlags = Record<ItemPrototypeFlag, true>;
interface ItemStackDefinition {
    /**
     * Prototype name of the item the stack holds.
     */
    name: string;
    /**
     * Number of items the stack holds. Defaults to `1`.
     */
    count?: ItemCountType;
    /**
     * Quality of the item the stack holds. Defaults to `"normal"`.
     */
    quality?: string;
    /**
     * Health of the items in the stack. Defaults to `1.0`.
     */
    health?: float;
    /**
     * Durability of the tool items in the stack.
     */
    durability?: double;
    /**
     * Amount of ammo in the ammo items in the stack.
     */
    ammo?: float;
    /**
     * Tags of the items with tags in the stack.
     */
    tags?: string[];
    /**
     * Description of the items with tags in the stack.
     */
    custom_description?: LocalisedString;
    /**
     * The spoil percent for this item if the item can spoil. Defaults to `0`.
     */
    spoil_percent?: double;
}
/**
 * An item may be specified in one of two ways.
 */
type ItemStackIdentification = SimpleItemStack | LuaItemStack;
type ItemStackIndex = uint16;
interface ItemStackLocation {
    inventory: defines.inventory;
    slot: uint;
}
/**
 * An item prototype with optional quality specification. Can be specified in one of four ways.
 */
type ItemWithQualityID = /**
 * The item stack. Both prototype and quality of the item stack will be used.
 */
LuaItemStack | /**
 * The item prototype. Normal quality will be used.
 */
LuaItemPrototype | /**
 * The prototype name. Normal quality will be used.
 */
string | /**
 * A table of entity prototype and quality.
 */
ItemIDAndQualityIDPair;
/**
 * The internal name of a game control (key binding).
 */
type LinkedGameControl = 'move-up' | 'move-down' | 'move-left' | 'move-right' | 'open-character-gui' | 'open-gui' | 'confirm-gui' | 'toggle-free-cursor' | 'mine' | 'build' | 'build-ghost' | 'super-forced-build' | 'clear-cursor' | 'pipette' | 'rotate' | 'reverse-rotate' | 'flip-horizontal' | 'flip-vertical' | 'pick-items' | 'drop-cursor' | 'show-info' | 'shoot-enemy' | 'shoot-selected' | 'next-weapon' | 'toggle-driving' | 'zoom-in' | 'zoom-out' | 'use-item' | 'alternative-use-item' | 'toggle-console' | 'copy-entity-settings' | 'paste-entity-settings' | 'controller-gui-logistics-tab' | 'controller-gui-character-tab' | 'controller-gui-crafting-tab' | 'toggle-rail-layer' | 'select-for-blueprint' | 'select-for-cancel-deconstruct' | 'select-for-super-forced-deconstruct' | 'reverse-select' | 'alt-reverse-select' | 'deselect' | 'cycle-blueprint-forwards' | 'cycle-blueprint-backwards' | 'focus-search' | 'larger-terrain-building-area' | 'smaller-terrain-building-area' | 'remove-pole-cables' | 'build-with-obstacle-avoidance' | 'add-station' | 'add-temporary-station' | 'rename-all' | 'fast-wait-condition' | 'drag-map' | 'move-tag' | 'place-in-chat' | 'place-ping' | 'pin' | 'activate-tooltip' | 'next-surface' | 'previous-surface' | 'cycle-quality-up' | 'cycle-quality-down' | 'craft' | 'craft-5' | 'craft-all' | 'cancel-craft' | 'cancel-craft-5' | 'cancel-craft-all' | 'pick-item' | 'stack-transfer' | 'inventory-transfer' | 'fast-entity-transfer' | 'cursor-split' | 'stack-split' | 'inventory-split' | 'fast-entity-split' | 'toggle-filter' | 'open-item' | 'copy-inventory-filter' | 'paste-inventory-filter' | 'show-quick-panel' | 'next-quick-panel-page' | 'previous-quick-panel-page' | 'next-quick-panel-tab' | 'previous-quick-panel-tab' | 'rotate-active-quick-bars' | 'next-active-quick-bar' | 'previous-active-quick-bar' | 'quick-bar-button-1' | 'quick-bar-button-2' | 'quick-bar-button-3' | 'quick-bar-button-4' | 'quick-bar-button-5' | 'quick-bar-button-6' | 'quick-bar-button-7' | 'quick-bar-button-8' | 'quick-bar-button-9' | 'quick-bar-button-10' | 'quick-bar-button-1-secondary' | 'quick-bar-button-2-secondary' | 'quick-bar-button-3-secondary' | 'quick-bar-button-4-secondary' | 'quick-bar-button-5-secondary' | 'quick-bar-button-6-secondary' | 'quick-bar-button-7-secondary' | 'quick-bar-button-8-secondary' | 'quick-bar-button-9-secondary' | 'quick-bar-button-10-secondary' | 'action-bar-select-page-1' | 'action-bar-select-page-2' | 'action-bar-select-page-3' | 'action-bar-select-page-4' | 'action-bar-select-page-5' | 'action-bar-select-page-6' | 'action-bar-select-page-7' | 'action-bar-select-page-8' | 'action-bar-select-page-9' | 'action-bar-select-page-10' | 'copy' | 'cut' | 'paste' | 'cycle-clipboard-forwards' | 'cycle-clipboard-backwards' | 'undo' | 'redo' | 'toggle-menu' | 'toggle-map' | 'close-menu' | 'open-technology-gui' | 'production-statistics' | 'logistic-networks' | 'toggle-blueprint-library' | 'open-trains-gui' | 'open-factoriopedia' | 'back' | 'forward' | 'pause-game' | 'confirm-message' | 'previous-technology' | 'previous-mod' | 'connect-train' | 'disconnect-train' | 'submit-feedback' | 'editor-next-variation' | 'editor-previous-variation' | 'editor-clone-item' | 'editor-delete-item' | 'editor-toggle-pause' | 'editor-tick-once' | 'editor-speed-up' | 'editor-speed-down' | 'editor-reset-speed' | 'editor-set-clone-brush-source' | 'editor-set-clone-brush-destination' | 'editor-switch-to-surface' | 'editor-remove-scripting-object' | 'debug-toggle-atlas-gui' | 'debug-toggle-gui-visibility' | 'debug-toggle-debug-settings' | 'debug-toggle-basic' | 'debug-reset-zoom' | 'debug-reset-zoom-2x' | 'toggle-gui-debug' | 'toggle-gui-style-view' | 'toggle-gui-shadows' | 'toggle-gui-glows' | 'open-prototypes-gui' | 'open-prototype-explorer-gui' | 'increase-ui-scale' | 'decrease-ui-scale' | 'reset-ui-scale' | 'slash-editor' | 'toggle-entity' | 'next-player-in-replay' | 'move-blueprint-absolute-grid-up' | 'move-blueprint-absolute-grid-down' | 'move-blueprint-absolute-grid-left' | 'move-blueprint-absolute-grid-right' | 'move-blueprint-entities-up' | 'move-blueprint-entities-down' | 'move-blueprint-entities-left' | 'move-blueprint-entities-right' | 'play-next-track' | 'play-previous-track' | 'pause-resume-music';
/**
 * Localised strings are a way to support translation of in-game text. It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
 *
 * The key identifies the string template. For example, `"gui-alert-tooltip.attack"` (for the template `"__1__ objects are being damaged"`; see the file `data/core/locale/en.cfg`).
 *
 * The template can contain placeholders such as `__1__` or `__2__`. These will be replaced by the respective parameter in the LocalisedString. The parameters themselves can be other localised strings, which will be processed recursively in the same fashion. Localised strings can not be recursed deeper than 20 levels and can not have more than 20 parameters.
 *
 * There are two special flags for the localised string, indicated by the key being a particular string. First, if the key is the empty string (`""`), then all parameters will be concatenated (after processing, if any are localised strings themselves). Second, if the key is a question mark (`"?"`), then the first valid parameter will be used. A parameter can be invalid if its name doesn't match any string template. If no parameters are valid, the last one is returned. This is useful to implement a fallback for missing locale templates.
 *
 * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table) which will not be translated, as well as a number, boolean or `nil`, which will be converted to their textual representation.
 * @example ```
-- In the English translation, this will print "No ammo"; in the Czech translation, it will print "Bez munice":
game.player.print({"description.no-ammo"})
-- The 'description.no-ammo' template contains no placeholders, so no further parameters are necessary.
```
 * @example ```
-- In the English translation, this will print "Durability: 5/9"; in the Japanese one, it will print "耐久度: 5/9":
game.player.print({"description.durability", 5, 9})
```
 * @example ```
-- This will print "hello" in all translations:
game.player.print({"", "hello"})
```
 * @example ```
-- This will print "Iron plate: 60" in the English translation and "Eisenplatte: 60" in the German translation.
game.print({"", {"item-name.iron-plate"}, ": ", 60})
```
 * @example ```
-- As an example of a localised string with fallback, consider this:
{"?", {"", {"entity-description.furnace"}, "\n"}, {"item-description.furnace"}, "optional fallback"}
-- If 'entity-description.furnace' exists, it is concatenated with "\n" and returned. Otherwise, if 'item-description.furnace'
--  exists, it is returned as-is. Otherwise, "optional fallback" is returned. If this value wasn't specified, the
--  translation result would be "Unknown key: 'item-description.furnace'".
```
 */
type LocalisedString = string | number | boolean | LuaObject | nil | LocalisedString[];
interface LogisticFilter {
    /**
     * The item filter to put into the slot.
     */
    value?: SignalFilter;
    /**
     * The minimum amount to satisfy.
     */
    min?: int;
    /**
     * The maximum amount to keep in inventory. `nil` for infinite.
     */
    max?: ItemCountType;
    /**
     * The minimum count that will be delivered to a space platform. `nil` if unchanged from the default.
     */
    minimum_delivery_count?: ItemCountType;
    /**
     * The space location to import from.
     */
    import_from?: SpaceLocationID;
}
type LogisticFilterIndex = uint16;
interface LogisticSection {
    index: uint8;
    filters?: BlueprintLogisticFilter[];
    group?: string;
    /**
     * Defaults to 1.
     */
    multiplier?: float;
    /**
     * Defaults to true.
     */
    active?: float;
}
interface LogisticSections {
    sections?: LogisticSection[];
    /**
     * Defaults to false.
     */
    trash_not_requested?: boolean;
}
interface LogisticsNetworkSupplyCounts {
    /**
     * Number of available items in the storage members.
     */
    storage: uint;
    /**
     * Number of available items in the passive provider members.
     */
    'passive-provider': uint;
    /**
     * Number of available items in the buffer members.
     */
    buffer: uint;
    /**
     * Number of available items in the active provider members.
     */
    'active-provider': uint;
}
interface LogisticsNetworkSupplyPoints {
    storage: LuaLogisticPoint[];
    'passive-provider': LuaLogisticPoint[];
    buffer: LuaLogisticPoint[];
    'active-provider': LuaLogisticPoint[];
}
interface Loot {
    /**
     * Item prototype name of the result.
     */
    item: string;
    /**
     * Probability that any loot at all will drop, as a number in range [0, 1].
     */
    probability: double;
    /**
     * Minimum amount of loot to drop.
     */
    count_min: double;
    /**
     * Maximum amount of loot to drop.
     */
    count_max: double;
}
interface BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaEntityClonedEventFilter = BaseLuaEntityClonedEventFilter | LuaEntityClonedEventFilterGhostName | LuaEntityClonedEventFilterGhostType | LuaEntityClonedEventFilterName | LuaEntityClonedEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaEntityClonedEventFilterGhostName extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaEntityClonedEventFilterGhostType extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaEntityClonedEventFilterName extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaEntityClonedEventFilterType extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'original-damage-amount' | 'final-damage-amount' | 'damage-type' | 'final-health';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaEntityDamagedEventFilter = BaseLuaEntityDamagedEventFilter | LuaEntityDamagedEventFilterDamageType | LuaEntityDamagedEventFilterFinalDamageAmount | LuaEntityDamagedEventFilterFinalHealth | LuaEntityDamagedEventFilterGhostName | LuaEntityDamagedEventFilterGhostType | LuaEntityDamagedEventFilterName | LuaEntityDamagedEventFilterOriginalDamageAmount | LuaEntityDamagedEventFilterType;
/**
 *
 * Applies to variant case `damage-type`
 */
interface LuaEntityDamagedEventFilterDamageType extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'damage-type';
    /**
     * A {@link LuaDamagePrototype | runtime:LuaDamagePrototype} name.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `final-damage-amount`
 */
interface LuaEntityDamagedEventFilterFinalDamageAmount extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'final-damage-amount';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': float;
}
/**
 *
 * Applies to variant case `final-health`
 */
interface LuaEntityDamagedEventFilterFinalHealth extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'final-health';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': float;
}
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaEntityDamagedEventFilterGhostName extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaEntityDamagedEventFilterGhostType extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaEntityDamagedEventFilterName extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `original-damage-amount`
 */
interface LuaEntityDamagedEventFilterOriginalDamageAmount extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'original-damage-amount';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': float;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaEntityDamagedEventFilterType extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaEntityDeconstructionCancelledEventFilter = BaseLuaEntityDeconstructionCancelledEventFilter | LuaEntityDeconstructionCancelledEventFilterGhostName | LuaEntityDeconstructionCancelledEventFilterGhostType | LuaEntityDeconstructionCancelledEventFilterName | LuaEntityDeconstructionCancelledEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaEntityDeconstructionCancelledEventFilterGhostName extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaEntityDeconstructionCancelledEventFilterGhostType extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaEntityDeconstructionCancelledEventFilterName extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaEntityDeconstructionCancelledEventFilterType extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaEntityDiedEventFilter = BaseLuaEntityDiedEventFilter | LuaEntityDiedEventFilterGhostName | LuaEntityDiedEventFilterGhostType | LuaEntityDiedEventFilterName | LuaEntityDiedEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaEntityDiedEventFilterGhostName extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaEntityDiedEventFilterGhostType extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaEntityDiedEventFilterName extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaEntityDiedEventFilterType extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaEntityMarkedForDeconstructionEventFilter = BaseLuaEntityMarkedForDeconstructionEventFilter | LuaEntityMarkedForDeconstructionEventFilterGhostName | LuaEntityMarkedForDeconstructionEventFilterGhostType | LuaEntityMarkedForDeconstructionEventFilterName | LuaEntityMarkedForDeconstructionEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaEntityMarkedForDeconstructionEventFilterGhostName extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaEntityMarkedForDeconstructionEventFilterGhostType extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaEntityMarkedForDeconstructionEventFilterName extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaEntityMarkedForDeconstructionEventFilterType extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaEntityMarkedForUpgradeEventFilter = BaseLuaEntityMarkedForUpgradeEventFilter | LuaEntityMarkedForUpgradeEventFilterGhostName | LuaEntityMarkedForUpgradeEventFilterGhostType | LuaEntityMarkedForUpgradeEventFilterName | LuaEntityMarkedForUpgradeEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaEntityMarkedForUpgradeEventFilterGhostName extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaEntityMarkedForUpgradeEventFilterGhostType extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaEntityMarkedForUpgradeEventFilterName extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaEntityMarkedForUpgradeEventFilterType extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
/**
 * Any LuaObject listed on the {@link Classes | runtime:classes} page.
 */
type LuaObject = object;
interface BaseLuaPlatformBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'force';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPlatformBuiltEntityEventFilter = BaseLuaPlatformBuiltEntityEventFilter | LuaPlatformBuiltEntityEventFilterForce | LuaPlatformBuiltEntityEventFilterGhostName | LuaPlatformBuiltEntityEventFilterGhostType | LuaPlatformBuiltEntityEventFilterName | LuaPlatformBuiltEntityEventFilterType;
/**
 *
 * Applies to variant case `force`
 */
interface LuaPlatformBuiltEntityEventFilterForce extends BaseLuaPlatformBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'force';
    /**
     * The entity force
     */
    'force': string;
}
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPlatformBuiltEntityEventFilterGhostName extends BaseLuaPlatformBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPlatformBuiltEntityEventFilterGhostType extends BaseLuaPlatformBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPlatformBuiltEntityEventFilterName extends BaseLuaPlatformBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPlatformBuiltEntityEventFilterType extends BaseLuaPlatformBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPlatformMinedEntityEventFilter = BaseLuaPlatformMinedEntityEventFilter | LuaPlatformMinedEntityEventFilterGhostName | LuaPlatformMinedEntityEventFilterGhostType | LuaPlatformMinedEntityEventFilterName | LuaPlatformMinedEntityEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPlatformMinedEntityEventFilterGhostName extends BaseLuaPlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPlatformMinedEntityEventFilterGhostType extends BaseLuaPlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPlatformMinedEntityEventFilterName extends BaseLuaPlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPlatformMinedEntityEventFilterType extends BaseLuaPlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'force';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPlayerBuiltEntityEventFilter = BaseLuaPlayerBuiltEntityEventFilter | LuaPlayerBuiltEntityEventFilterForce | LuaPlayerBuiltEntityEventFilterGhostName | LuaPlayerBuiltEntityEventFilterGhostType | LuaPlayerBuiltEntityEventFilterName | LuaPlayerBuiltEntityEventFilterType;
/**
 *
 * Applies to variant case `force`
 */
interface LuaPlayerBuiltEntityEventFilterForce extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'force';
    /**
     * The entity force
     */
    'force': string;
}
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPlayerBuiltEntityEventFilterGhostName extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPlayerBuiltEntityEventFilterGhostType extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPlayerBuiltEntityEventFilterName extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPlayerBuiltEntityEventFilterType extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPlayerMinedEntityEventFilter = BaseLuaPlayerMinedEntityEventFilter | LuaPlayerMinedEntityEventFilterGhostName | LuaPlayerMinedEntityEventFilterGhostType | LuaPlayerMinedEntityEventFilterName | LuaPlayerMinedEntityEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPlayerMinedEntityEventFilterGhostName extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPlayerMinedEntityEventFilterGhostType extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPlayerMinedEntityEventFilterName extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPlayerMinedEntityEventFilterType extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPlayerRepairedEntityEventFilter = BaseLuaPlayerRepairedEntityEventFilter | LuaPlayerRepairedEntityEventFilterGhostName | LuaPlayerRepairedEntityEventFilterGhostType | LuaPlayerRepairedEntityEventFilterName | LuaPlayerRepairedEntityEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPlayerRepairedEntityEventFilterGhostName extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPlayerRepairedEntityEventFilterGhostType extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPlayerRepairedEntityEventFilterName extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPlayerRepairedEntityEventFilterType extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface LuaPostEntityDiedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
interface BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPreGhostDeconstructedEventFilter = BaseLuaPreGhostDeconstructedEventFilter | LuaPreGhostDeconstructedEventFilterGhostName | LuaPreGhostDeconstructedEventFilterGhostType | LuaPreGhostDeconstructedEventFilterName | LuaPreGhostDeconstructedEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPreGhostDeconstructedEventFilterGhostName extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPreGhostDeconstructedEventFilterGhostType extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPreGhostDeconstructedEventFilterName extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPreGhostDeconstructedEventFilterType extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPreGhostUpgradedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPreGhostUpgradedEventFilter = BaseLuaPreGhostUpgradedEventFilter | LuaPreGhostUpgradedEventFilterGhostName | LuaPreGhostUpgradedEventFilterGhostType | LuaPreGhostUpgradedEventFilterName | LuaPreGhostUpgradedEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPreGhostUpgradedEventFilterGhostName extends BaseLuaPreGhostUpgradedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPreGhostUpgradedEventFilterGhostType extends BaseLuaPreGhostUpgradedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPreGhostUpgradedEventFilterName extends BaseLuaPreGhostUpgradedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPreGhostUpgradedEventFilterType extends BaseLuaPreGhostUpgradedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPrePlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPrePlatformMinedEntityEventFilter = BaseLuaPrePlatformMinedEntityEventFilter | LuaPrePlatformMinedEntityEventFilterGhostName | LuaPrePlatformMinedEntityEventFilterGhostType | LuaPrePlatformMinedEntityEventFilterName | LuaPrePlatformMinedEntityEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPrePlatformMinedEntityEventFilterGhostName extends BaseLuaPrePlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPrePlatformMinedEntityEventFilterGhostType extends BaseLuaPrePlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPrePlatformMinedEntityEventFilterName extends BaseLuaPrePlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPrePlatformMinedEntityEventFilterType extends BaseLuaPrePlatformMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPrePlayerMinedEntityEventFilter = BaseLuaPrePlayerMinedEntityEventFilter | LuaPrePlayerMinedEntityEventFilterGhostName | LuaPrePlayerMinedEntityEventFilterGhostType | LuaPrePlayerMinedEntityEventFilterName | LuaPrePlayerMinedEntityEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPrePlayerMinedEntityEventFilterGhostName extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPrePlayerMinedEntityEventFilterGhostType extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPrePlayerMinedEntityEventFilterName extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPrePlayerMinedEntityEventFilterType extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaPreRobotMinedEntityEventFilter = BaseLuaPreRobotMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilterGhostName | LuaPreRobotMinedEntityEventFilterGhostType | LuaPreRobotMinedEntityEventFilterName | LuaPreRobotMinedEntityEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaPreRobotMinedEntityEventFilterGhostName extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaPreRobotMinedEntityEventFilterGhostType extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaPreRobotMinedEntityEventFilterName extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaPreRobotMinedEntityEventFilterType extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'force';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaRobotBuiltEntityEventFilter = BaseLuaRobotBuiltEntityEventFilter | LuaRobotBuiltEntityEventFilterForce | LuaRobotBuiltEntityEventFilterGhostName | LuaRobotBuiltEntityEventFilterGhostType | LuaRobotBuiltEntityEventFilterName | LuaRobotBuiltEntityEventFilterType;
/**
 *
 * Applies to variant case `force`
 */
interface LuaRobotBuiltEntityEventFilterForce extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'force';
    /**
     * The entity force
     */
    'force': string;
}
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaRobotBuiltEntityEventFilterGhostName extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaRobotBuiltEntityEventFilterGhostType extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaRobotBuiltEntityEventFilterName extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaRobotBuiltEntityEventFilterType extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaRobotMinedEntityEventFilter = BaseLuaRobotMinedEntityEventFilter | LuaRobotMinedEntityEventFilterGhostName | LuaRobotMinedEntityEventFilterGhostType | LuaRobotMinedEntityEventFilterName | LuaRobotMinedEntityEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaRobotMinedEntityEventFilterGhostName extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaRobotMinedEntityEventFilterGhostType extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaRobotMinedEntityEventFilterName extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaRobotMinedEntityEventFilterType extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaScriptRaisedBuiltEventFilter = BaseLuaScriptRaisedBuiltEventFilter | LuaScriptRaisedBuiltEventFilterGhostName | LuaScriptRaisedBuiltEventFilterGhostType | LuaScriptRaisedBuiltEventFilterName | LuaScriptRaisedBuiltEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaScriptRaisedBuiltEventFilterGhostName extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaScriptRaisedBuiltEventFilterGhostType extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaScriptRaisedBuiltEventFilterName extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaScriptRaisedBuiltEventFilterType extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaScriptRaisedDestroyEventFilter = BaseLuaScriptRaisedDestroyEventFilter | LuaScriptRaisedDestroyEventFilterGhostName | LuaScriptRaisedDestroyEventFilterGhostType | LuaScriptRaisedDestroyEventFilterName | LuaScriptRaisedDestroyEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaScriptRaisedDestroyEventFilterGhostName extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaScriptRaisedDestroyEventFilterGhostType extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaScriptRaisedDestroyEventFilterName extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaScriptRaisedDestroyEventFilterType extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaScriptRaisedReviveEventFilter = BaseLuaScriptRaisedReviveEventFilter | LuaScriptRaisedReviveEventFilterGhostName | LuaScriptRaisedReviveEventFilterGhostType | LuaScriptRaisedReviveEventFilterName | LuaScriptRaisedReviveEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaScriptRaisedReviveEventFilterGhostName extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaScriptRaisedReviveEventFilterGhostType extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaScriptRaisedReviveEventFilterName extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaScriptRaisedReviveEventFilterType extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaScriptRaisedTeleportedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaScriptRaisedTeleportedEventFilter = BaseLuaScriptRaisedTeleportedEventFilter | LuaScriptRaisedTeleportedEventFilterGhostName | LuaScriptRaisedTeleportedEventFilterGhostType | LuaScriptRaisedTeleportedEventFilterName | LuaScriptRaisedTeleportedEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaScriptRaisedTeleportedEventFilterGhostName extends BaseLuaScriptRaisedTeleportedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaScriptRaisedTeleportedEventFilterGhostType extends BaseLuaScriptRaisedTeleportedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaScriptRaisedTeleportedEventFilterName extends BaseLuaScriptRaisedTeleportedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaScriptRaisedTeleportedEventFilterType extends BaseLuaScriptRaisedTeleportedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaSectorScannedEventFilter = BaseLuaSectorScannedEventFilter | LuaSectorScannedEventFilterGhostName | LuaSectorScannedEventFilterGhostType | LuaSectorScannedEventFilterName | LuaSectorScannedEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaSectorScannedEventFilterGhostName extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaSectorScannedEventFilterGhostType extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaSectorScannedEventFilterName extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaSectorScannedEventFilterType extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
interface BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'type' | 'name' | 'ghost_type' | 'ghost_name';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type LuaUpgradeCancelledEventFilter = BaseLuaUpgradeCancelledEventFilter | LuaUpgradeCancelledEventFilterGhostName | LuaUpgradeCancelledEventFilterGhostType | LuaUpgradeCancelledEventFilterName | LuaUpgradeCancelledEventFilterType;
/**
 *
 * Applies to variant case `ghost_name`
 */
interface LuaUpgradeCancelledEventFilterGhostName extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_name';
    /**
     * The ghost prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `ghost_type`
 */
interface LuaUpgradeCancelledEventFilterGhostType extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'ghost_type';
    /**
     * The ghost prototype type.
     */
    'type': string;
}
/**
 *
 * Applies to variant case `name`
 */
interface LuaUpgradeCancelledEventFilterName extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'name';
    /**
     * The prototype name.
     */
    'name': string;
}
/**
 *
 * Applies to variant case `type`
 */
interface LuaUpgradeCancelledEventFilterType extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type.
     */
    'type': string;
}
/**
 * A standard table containing all {@link MapSettings | runtime:MapSettings} attributes plus an additional table that contains all {@link DifficultySettings | runtime:DifficultySettings} properties.
 */
interface MapAndDifficultySettings {
    pollution: PollutionMapSettings;
    enemy_evolution: EnemyEvolutionMapSettings;
    enemy_expansion: EnemyExpansionMapSettings;
    unit_group: UnitGroupMapSettings;
    steering: SteeringMapSettings;
    path_finder: PathFinderMapSettings;
    asteroids: AsteroidMapSettings;
    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
     */
    max_failed_behavior_count: uint;
    difficulty_settings: MapDifficultySettings;
}
interface MapDifficultySettings {
    /**
     * A value in range [0.001, 1000].
     */
    technology_price_multiplier: double;
    /**
     * A value in range [0.01, 100].
     */
    spoil_time_modifier: double;
}
/**
 * The data that can be extracted from a map exchange string, as a plain table.
 */
interface MapExchangeStringData {
    map_settings: MapAndDifficultySettings;
    map_gen_settings: MapGenSettings;
}
interface MapGenPreset {
    /**
     * The string used to alphabetically sort the presets. It is a simple string that has no additional semantic meaning.
     */
    order: string;
    /**
     * Whether this is the preset that is selected by default.
     */
    default?: boolean;
    basic_settings?: MapGenSettings;
    advanced_settings?: AdvancedMapGenSettings;
}
/**
 * @example ```
-- Assuming a NamedNoiseExpression with the name "my-alternate-grass1-probability" is defined...
local surface = game.player.surface
local mgs = surface.map_gen_settings
mgs.property_expression_names["tile:grass1:probability"] = "my-alternate-grass1-probability"
surface.map_gen_settings = mgs
-- ...would override the probability of grass1 being placed at any given point on the current surface.
```
 * @example ```
-- To make there be no deep water on (newly generated chunks) a surface
local surface = game.player.surface
local mgs = surface.map_gen_settings
mgs.property_expression_names["tile:deepwater:probability"] = -1000
surface.map_gen_settings = mgs
-- This does not require a NamedNoiseExpression to be defined, since literal numbers (and strings naming literal
-- numbers, e.g. `"123"`) are understood to stand for constant value expressions.
```
 */
interface MapGenSettings {
    /**
     * Indexed by autoplace control prototype name.
     */
    autoplace_controls: Record<string, AutoplaceControl>;
    /**
     * Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`.
     */
    default_enable_all_autoplace_controls: boolean;
    /**
     * Each setting in this dictionary maps the string type to the settings for that type.
     */
    autoplace_settings: Record<'entity' | 'tile' | 'decorative', AutoplaceSettings>;
    /**
     * The random seed used to generated this map.
     */
    seed: uint;
    /**
     * Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center.
     */
    width: uint;
    /**
     * Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center.
     */
    height: uint;
    /**
     * Size of the starting area.
     */
    starting_area: MapGenSize;
    /**
     * Positions of the starting areas.
     */
    starting_points: MapPosition[];
    /**
     * Whether enemy creatures will not attack unless the player first attacks them.
     */
    peaceful_mode: boolean;
    /**
     * Whether enemy creatures will not naturally spawn from spawners, map gen, or trigger effects.
     */
    no_enemies_mode: boolean;
    /**
     * Overrides for tile property value generators.
     */
    property_expression_names: PropertyExpressionNames;
    /**
     * Map generation settings for entities of the type "cliff".
     */
    cliff_settings: CliffPlacementSettings;
    territory_settings: TerritorySettings;
}
/**
 * A floating point number specifying an amount.
 *
 * For backwards compatibility, MapGenSizes can also be specified as a string, which will be converted to a number (when queried, a number will always be returned).
 *
 * The map generation algorithm officially supports the range of values the in-game map generation screen shows (specifically `0` and values from `1/6` to `6`). Values outside this range are not guaranteed to work as expected.
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
/**
 * Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.
 *
 * The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles.
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
 * Various game-related settings. Updating any of the attributes will immediately take effect in the game engine.
 * @example ```
-- Increase the number of short paths the pathfinder can cache.
game.map_settings.path_finder.short_cache_size = 15
```
 */
interface MapSettings {
    asteroids: AsteroidMapSettings;
    enemy_evolution: EnemyEvolutionMapSettings;
    enemy_expansion: EnemyExpansionMapSettings;
    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
     */
    max_failed_behavior_count: uint;
    path_finder: PathFinderMapSettings;
    pollution: PollutionMapSettings;
    steering: SteeringMapSetting;
    unit_group: UnitGroupMapSettings;
}
/**
 * `math.huge` represents the maximum possible tick.
 */
type MapTick = uint64;
/**
 * What is shown in the map view. If a field is not given, that setting will not be changed.
 */
interface MapViewSettings {
    'show-logistic-network'?: boolean;
    'show-electric-network'?: boolean;
    'show-turret-range'?: boolean;
    'show-pollution'?: boolean;
    'show-networkless-logistic-members'?: boolean;
    'show-train-station-names'?: boolean;
    'show-player-names'?: boolean;
    'show-tags'?: boolean;
    'show-worker-robots'?: boolean;
    'show-rail-signal-states'?: boolean;
    'show-recipe-icons'?: boolean;
    'show-pipelines'?: boolean;
    'show-non-standard-map-info'?: boolean;
}
interface MarketIngredient {
    /**
     * Prototype name of the required item.
     */
    name: string;
    /**
     * Normal quality will be used if not specified.
     */
    quality?: string;
    /**
     * Count of the item. Cannot be 0.
     */
    count: ItemCountType;
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
interface MineableProperties {
    /**
     * Is this entity mineable at all?
     */
    minable: boolean;
    /**
     * Energy required to mine an entity.
     */
    mining_time: double;
    /**
     * Prototype name of the particle produced when mining this entity. Will only be present if this entity produces any particle during mining.
     */
    mining_particle?: string;
    /**
     * Products obtained by mining this entity.
     */
    products?: Product[];
    /**
     * The required fluid amount if any.
     */
    fluid_amount?: double;
    /**
     * The prototype name of the required fluid if any.
     */
    required_fluid?: string;
    /**
     * The mining trigger if any.
     */
    mining_trigger?: TriggerItem[];
}
interface ModChangeData {
    /**
     * Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added).
     */
    old_version: string;
    /**
     * New version of the mod. May be `nil` if the mod is no longer present (i.e. it was just removed).
     */
    new_version: string;
}
interface ModSetting {
    /**
     * The value of the mod setting. The type depends on the kind of setting.
     */
    value: int | double | boolean | string | Color;
}
interface BaseModSettingPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'mod' | 'setting-type';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type ModSettingPrototypeFilter = BaseModSettingPrototypeFilter | ModSettingPrototypeFilterMod | ModSettingPrototypeFilterSettingType | ModSettingPrototypeFilterType;
/**
 *
 * Applies to variant case `mod`
 */
interface ModSettingPrototypeFilterMod extends BaseModSettingPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'mod';
    /**
     * The mod name
     */
    'mod': string;
}
/**
 *
 * Applies to variant case `setting-type`
 */
interface ModSettingPrototypeFilterSettingType extends BaseModSettingPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'setting-type';
    /**
     * The setting scope type.
     */
    'type': 'startup' | 'runtime-global' | 'runtime-per-user';
}
/**
 *
 * Applies to variant case `type`
 */
interface ModSettingPrototypeFilterType extends BaseModSettingPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type, or a list of acceptable types.
     */
    'type': string | string[];
}
/**
 * Used by {@link TechnologyModifier | runtime:TechnologyModifier}.
 */
type ModifierType = 'inserter-stack-size-bonus' | 'bulk-inserter-capacity-bonus' | 'laboratory-speed' | 'character-logistic-trash-slots' | 'maximum-following-robots-count' | 'worker-robot-speed' | 'worker-robot-storage' | 'turret-attack' | 'ammo-damage' | 'give-item' | 'gun-speed' | 'unlock-recipe' | 'character-crafting-speed' | 'character-mining-speed' | 'character-running-speed' | 'character-build-distance' | 'character-item-drop-distance' | 'character-reach-distance' | 'character-resource-reach-distance' | 'character-item-pickup-distance' | 'character-loot-pickup-distance' | 'character-inventory-slots-bonus' | 'deconstruction-time-to-live' | 'max-failed-attempts-per-tick-per-construction-queue' | 'max-successful-attempts-per-tick-per-construction-queue' | 'character-health-bonus' | 'mining-drill-productivity-bonus' | 'train-braking-force-bonus' | 'worker-robot-battery' | 'laboratory-productivity' | 'follower-robot-lifetime' | 'artillery-range' | 'nothing' | 'character-logistic-requests' | 'unlock-space-location' | 'unlock-quality' | 'unlock-space-platforms' | 'unlock-circuit-network' | 'cargo-landing-pad-count' | 'change-recipe-productivity' | 'cliff-deconstruction-enabled' | 'mining-with-fluid' | 'rail-support-on-deep-oil-ocean' | 'rail-planner-allow-elevated-rails' | 'beacon-distribution' | 'create-ghost-on-entity-death' | 'belt-stack-size-bonus' | 'vehicle-logistics';
/**
 * The percentual increase of the attribute. A value of `0.6` means a 60% increase.
 */
type ModuleEffectValue = float;
/**
 * @example ```
-- These are the effects of the vanilla Productivity Module 3 (up to floating point imprecisions)
{consumption=0.6,
  speed=-0.15,
  productivity=0.06,
  pollution=0.075}
```
 */
interface ModuleEffects {
    consumption?: ModuleEffectValue;
    speed?: ModuleEffectValue;
    productivity?: ModuleEffectValue;
    pollution?: ModuleEffectValue;
    quality?: ModuleEffectValue;
}
/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 *
 * To write to this, use an array{@link [string | runtime:string}] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`.
 */
type MouseButtonFlags = Record<'left' | 'right' | 'middle' | 'button-4' | 'button-5' | 'button-6' | 'button-7' | 'button-8' | 'button-9', true>;
/**
 * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation. These can only be meaningfully written/modified during the data load phase. More detailed information is found on the {@link prototype docs | prototype:NamedNoiseExpression}.
 */
interface NoiseExpression {
    /**
     * Names the type of the expression and determines what other fields are required.
     */
    type: string;
}
interface NthTickEventData {
    /**
     * The tick during which the event happened.
     */
    tick: uint;
    /**
     * The nth tick this handler was registered to.
     */
    nth_tick: uint;
}
/**
 * A single offer on a market entity.
 */
interface Offer {
    /**
     * List of prices.
     */
    price?: MarketIngredient[];
    /**
     * The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier.
     */
    offer: TechnologyModifier;
}
interface OldTileAndPosition {
    old_tile: LuaTilePrototype;
    position: TilePosition;
}
/**
 * A particle prototype may be specified in one of two ways.
 */
type ParticleID = /**
 * The particle prototype.
 */
LuaParticlePrototype | /**
 * The prototype name.
 */
string;
interface PathFinderMapSettings {
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`.
     */
    fwd2bwd_ratio: uint;
    /**
     * When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`.
     */
    goal_pressure_ratio: double;
    /**
     * Whether to cache paths at all. Defaults to `true`.
     */
    use_path_cache: boolean;
    /**
     * The maximum number of nodes that are expanded per tick. Defaults to `1 000`.
     */
    max_steps_worked_per_tick: double;
    /**
     * The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8 000`.
     */
    max_work_done_per_tick: uint;
    /**
     * Number of elements in the short cache. Defaults to `5`.
     */
    short_cache_size: uint;
    /**
     * Number of elements in the long cache. Defaults to `25`.
     */
    long_cache_size: uint;
    /**
     * The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`.
     */
    short_cache_min_cacheable_distance: double;
    /**
     * The minimal number of nodes required to be searched in the short path cache. Defaults to `50`.
     */
    short_cache_min_algo_steps_to_cache: uint;
    /**
     * The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`.
     */
    long_cache_min_cacheable_distance: double;
    /**
     * When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`.
     */
    cache_max_connect_to_cache_steps_multiplier: uint;
    /**
     * When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`.
     */
    cache_accept_path_start_distance_ratio: double;
    /**
     * When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms. This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`.
     */
    cache_accept_path_end_distance_ratio: double;
    /**
     * Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    negative_cache_accept_path_start_distance_ratio: double;
    /**
     * Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    negative_cache_accept_path_end_distance_ratio: double;
    /**
     * When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`.
     */
    cache_path_start_distance_rating_multiplier: double;
    /**
     * When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`.
     */
    cache_path_end_distance_rating_multiplier: double;
    /**
     * A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`.
     */
    stale_enemy_with_same_destination_collision_penalty: double;
    /**
     * The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`.
     */
    ignore_moving_enemy_collision_distance: double;
    /**
     * A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`.
     */
    enemy_with_different_destination_collision_penalty: double;
    /**
     * The general collision penalty with other units. Defaults to `10`.
     */
    general_entity_collision_penalty: double;
    /**
     * The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`.
     */
    general_entity_subsequent_collision_penalty: double;
    /**
     * The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`.
     */
    extended_collision_penalty: double;
    /**
     * The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`.
     */
    max_clients_to_accept_any_new_request: uint;
    /**
     * When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`.
     */
    max_clients_to_accept_short_new_request: uint;
    /**
     * The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`.
     */
    direct_distance_to_consider_short_request: uint;
    /**
     * The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`.
     */
    short_request_max_steps: uint;
    /**
     * The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%.
     */
    short_request_ratio: double;
    /**
     * The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`.
     */
    min_steps_to_check_path_find_termination: uint;
    /**
     * If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`.
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: double;
    /**
     * The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`.
     */
    overload_levels: uint[];
    /**
     * The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`.
     */
    overload_multipliers: double[];
    /**
     * The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`.
     */
    negative_path_cache_delay_interval: uint;
}
interface PathfinderFlags {
    /**
     * Allows pathing through friendly entities. Defaults to `false`.
     */
    allow_destroy_friendly_entities?: boolean;
    /**
     * Allows the pathfinder to path through entities of the same force. Defaults to `false`.
     */
    allow_paths_through_own_entities?: boolean;
    /**
     * Enables path caching. This can be more efficient, but might fail to respond to changes in the environment. Defaults to `true`.
     */
    cache?: boolean;
    /**
     * Makes the pathfinder try to path in straight lines. Defaults to `false`.
     */
    prefer_straight_paths?: boolean;
    /**
     * Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding up others. Defaults to `false`.
     */
    low_priority?: boolean;
    /**
     * Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed. Defaults to `false`.
     */
    no_break?: boolean;
}
interface PathfinderWaypoint {
    /**
     * The position of the waypoint on its surface.
     */
    position: MapPosition;
    /**
     * `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed.
     */
    needs_destroy_to_reach: boolean;
}
/**
 * A single pipe connection for a given fluidbox.
 */
interface PipeConnection {
    flow_direction: 'input' | 'output' | 'input-output';
    connection_type: 'normal' | 'underground' | 'linked';
    /**
     * The absolute position of this connection within the entity.
     */
    position: MapPosition;
    /**
     * The absolute position of the connection's intended target.
     */
    target_position: MapPosition;
    /**
     * The connected fluidbox, if any.
     */
    target?: LuaFluidBox;
    /**
     * The index of the target fluidbox, if any.
     */
    target_fluidbox_index?: uint;
    /**
     * The index of the target fluidbox pipe connection, if any.
     */
    target_pipe_connection_index?: uint;
}
interface PipeConnectionDefinition {
    connection_type: 'normal' | 'underground' | 'linked';
    /**
     * The 4 cardinal direction connection points for this pipe.
     */
    positions: MapPosition[];
    /**
     * The maximum tile distance this underground connection can connect.
     */
    max_underground_distance?: uint;
    flow_direction: 'input-output' | 'input' | 'output';
    direction: defines.direction;
    /**
     * Only supplied if `connection_type` is `"linked"`.
     */
    linked_connection_id?: uint32;
}
interface PlaceAsTileResult {
    /**
     * The tile prototype.
     */
    result: LuaTilePrototype;
    condition_size: uint;
    condition: CollisionMask;
}
interface PlatformSchedule {
    /**
     * Index of the currently active record
     */
    current: uint;
    records: ScheduleRecord[];
}
/**
 * A player may be specified in one of three ways.
 */
type PlayerIdentification = /**
 * The player index.
 */
uint | /**
 * The player name.
 */
string | /**
 * A reference to {@link LuaPlayer | runtime:LuaPlayer} may be passed directly.
 */
LuaPlayer;
/**
 * These values are for the time frame of one second (60 ticks).
 */
interface PollutionMapSettings {
    /**
     * Whether pollution is enabled at all.
     */
    enabled: boolean;
    /**
     * The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`.
     */
    diffusion_ratio: double;
    /**
     * The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`.
     */
    min_to_diffuse: double;
    /**
     * The amount of pollution eaten by a chunk's tiles as a percentage of 1. Also known as absorption modifier. Defaults to `1`.
     */
    ageing: double;
    /**
     * Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`.
     */
    expected_max_per_chunk: double;
    /**
     * Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`.
     */
    min_to_show_per_chunk: double;
    /**
     * Defaults to `60`.
     */
    min_pollution_to_damage_trees: double;
    /**
     * Defaults to `150`.
     */
    pollution_with_max_forest_damage: double;
    /**
     * Defaults to `50`.
     */
    pollution_per_tree_damage: double;
    /**
     * Defaults to `10`.
     */
    pollution_restored_per_tree_damage: double;
    /**
     * Defaults to `20`.
     */
    max_pollution_to_restore_trees: double;
    /**
     * Defaults to `1`.
     */
    enemy_attack_pollution_consumption_modifier: double;
}
interface PrintSettings {
    /**
     * Color of the message to print. Defaults to white.
     */
    color?: Color;
    /**
     * If a sound should be emitted for this message. Defaults to `defines.print_sound.use_player_settings`.
     */
    sound?: defines.print_sound;
    /**
     * Condition when to skip adding message. Defaults to `defines.print_skip.if_redundant`.
     */
    skip?: defines.print_skip;
    /**
     * The sound to play. If not given, {@link UtilitySounds::console_message | prototype:UtilitySounds::console_message} will be used instead.
     */
    sound_path?: SoundPath;
    /**
     * The volume of the sound to play. Must be between 0 and 1 inclusive. Defaults to 1.
     */
    volume_modifier?: float;
    /**
     * If set to false, message will not be part of game state and will disappear from output console after save-load. Defaults to `true`.
     */
    game_state?: boolean;
}
/**
 * Returns one of the subtypes, depending on the value of `type`.
 * @example ```
-- Products of the "steel-chest" recipe (an array of Product)
{{type="item", name="steel-chest", amount=1}}
```
 * @example ```
-- Products of the "advanced-oil-processing" recipe
{{type="fluid", name="heavy-oil", amount=1},
  {type="fluid", name="light-oil", amount=4.5},
  {type="fluid", name="petroleum-gas", amount=5.5}}
```
 * @example ```
-- What a custom recipe would look like that had a probability of 0.5 to return a
-- minimum amount of 1 and a maximum amount of 5
{{type="item", name="custom-item", probability=0.5, amount_min=1, amount_max=5}}
```
 */
type Product = /**
 * Returned when the `type` is `"item"`.
 */
ItemProduct | /**
 * Returned when the `type` is `"fluid"`.
 */
FluidProduct | /**
 * Returned when the `type` is `"research-progress"`.
 */
ResearchProgressProduct;
interface ProgrammableSpeakerAlertParameters {
    show_alert: boolean;
    show_on_map: boolean;
    icon_signal_id: SignalID;
    alert_message: string;
}
interface ProgrammableSpeakerCircuitParameters {
    signal_value_is_pitch: boolean;
    instrument_id: uint;
    note_id: uint;
}
interface ProgrammableSpeakerInstrument {
    name: string;
    notes: string[];
}
interface ProgrammableSpeakerParameters {
    playback_volume: float;
    playback_mode: ProgrammableSpeakerPlaybackMode;
    allow_polyphony: boolean;
}
/**
 * Specifies from where the programmable speaker's sound will be heard.
 */
type ProgrammableSpeakerPlaybackMode = /**
 * The sound can be heard within the audible range around the speaker.
 */
'local' | /**
 * The sound can be heard anywhere on the speaker's surface.
 */
'surface' | /**
 * The sound can be heard everywhere.
 */
'global';
/**
 * All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`.
 * Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `5`). All other controls can be overridden by a property expression names. Notable properties:
 *
 * - `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
 * - `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
 * - `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
 * - `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to {@link CliffPlacementSettings | runtime:CliffPlacementSettings}.
 * - `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to {@link CliffPlacementSettings | runtime:CliffPlacementSettings}) location.
 * - `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
 * - `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
 * - `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`.
 * Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names:
 *
 * - `control:moisture:frequency` - frequency (inverse of scale) multiplier for moisture noise.  Default is 1.
 * - `control:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
 * - `control:aux:frequency` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise.  Default is 1.
 * - `control:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0.
 */
type PropertyExpressionNames = Record<string, string>;
/**
 * Types `"signal"` and `"item-group"` do not support filters.
 *
 * Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
 */
type PrototypeFilter = (ModSettingPrototypeFilter | TilePrototypeFilter | DecorativePrototypeFilter | RecipePrototypeFilter | AchievementPrototypeFilter | TechnologyPrototypeFilter | AsteroidChunkPrototypeFilter | ItemPrototypeFilter | EquipmentPrototypeFilter | EntityPrototypeFilter | SpaceLocationPrototypeFilter | FluidPrototypeFilter)[];
type PrototypeFilterMode = 'none' | 'whitelist' | 'blacklist';
interface PrototypeHistory {
    /**
     * The mod that created this prototype.
     */
    created: string;
    /**
     * The mods that changed this prototype in the order they changed it.
     */
    changed: string[];
}
/**
 * An item filter may be specified in two ways, either as a string which is a quality prototype name or as a table.
 */
type QualityCondition = {
    /**
     * The prototype name of the quality.
     */
    quality?: string;
    /**
     * The comparator for quality.
     */
    comparator?: ComparatorString;
} | string;
/**
 * A quality prototype may be specified in one of two ways.
 */
type QualityID = /**
 * The quality prototype.
 */
LuaQualityPrototype | /**
 * The prototype name.
 */
string;
interface RadiusVisualisationSpecification {
    distance: double;
    offset: Vector;
    draw_in_cursor: boolean;
    draw_on_selection: boolean;
}
interface RailEndGoal {
    /**
     * Rail target.
     */
    rail: LuaEntity;
    direction: defines.rail_direction;
    /**
     * Goal priority. If not provided, defaults to 50.
     */
    priority?: uint8;
}
interface RailEndStart {
    rail: LuaEntity;
    direction: defines.rail_direction;
    /**
     * Defaults to `true`. Providing false will cause the pathfinder to reject a path that starts here and ends in the same segment as the path would be too short to provide correct alignment with a goal.
     */
    allow_path_within_segment?: boolean;
    /**
     * Defaults to `false`.
     */
    is_front?: boolean;
    /**
     * Start priority. Defaults to `50`.
     */
    priority?: uint8;
}
interface RailExtensionData {
    /**
     * Name of the entity prototype to be built
     */
    name: string;
    /**
     * Position of the entity to be built
     */
    position: MapPosition;
    /**
     * Direction of the entity to be built
     */
    direction: defines.direction;
    /**
     * Goal where this rail extension will go to
     */
    goal: RailLocation;
}
interface RailLocation {
    position: MapPosition;
    direction: defines.direction;
    rail_layer: defines.rail_layer;
}
/**
 * A table containing the parameters required to raise a given game event. See the event being raised for what parameters are required.
 */
type RaiseEventParameters = table;
type RangeMode = 'center-to-center' | 'bounding-box-to-bounding-box' | 'center-to-bounding-box';
/**
 * The smooth orientation. It is a {@link float | runtime:float} in the range `[0, 1)` that covers a full circle, starting at the top and going clockwise. This means a value of `0` indicates "north", a value of `0.5` indicates "south".
 *
 * For example then, a value of `0.625` would indicate "south-west", and a value of `0.875` would indicate "north-west".
 */
type RealOrientation = float;
/**
 * A recipe may be specified in one of three ways.
 */
type RecipeID = /**
 * By recipe prototype.
 */
LuaRecipePrototype | /**
 * By instance of recipe.
 */
LuaRecipe | /**
 * By name of the recipe prototype.
 */
string;
/**
 * A recipe prototype with optional quality specification.
 */
interface RecipeIDAndQualityIDPair {
    /**
     * Recipe prototype.
     */
    name: RecipeID;
    /**
     * Quality prototype.
     */
    quality: QualityID;
}
interface BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'enabled' | 'hidden' | 'hidden-from-flow-stats' | 'hidden-from-player-crafting' | 'allow-as-intermediate' | 'allow-intermediates' | 'allow-decomposition' | 'always-show-made-in' | 'always-show-products' | 'show-amount-in-title' | 'has-ingredients' | 'has-products' | 'has-ingredient-item' | 'has-ingredient-fluid' | 'has-product-item' | 'has-product-fluid' | 'subgroup' | 'category' | 'energy' | 'emissions-multiplier' | 'request-paste-multiplier' | 'overload-multiplier';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type RecipePrototypeFilter = BaseRecipePrototypeFilter | RecipePrototypeFilterCategory | RecipePrototypeFilterEmissionsMultiplier | RecipePrototypeFilterEnergy | RecipePrototypeFilterHasIngredientFluid | RecipePrototypeFilterHasIngredientItem | RecipePrototypeFilterHasProductFluid | RecipePrototypeFilterHasProductItem | RecipePrototypeFilterOverloadMultiplier | RecipePrototypeFilterRequestPasteMultiplier | RecipePrototypeFilterSubgroup;
/**
 *
 * Applies to variant case `category`
 */
interface RecipePrototypeFilterCategory extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'category';
    /**
     * A {@link LuaRecipeCategoryPrototype | runtime:LuaRecipeCategoryPrototype} name
     */
    'category': string;
}
/**
 *
 * Applies to variant case `emissions-multiplier`
 */
interface RecipePrototypeFilterEmissionsMultiplier extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'emissions-multiplier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `energy`
 */
interface RecipePrototypeFilterEnergy extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'energy';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 * ```
 * -- selects recipes that consume sulfuric acid
 * {{filter = "has-ingredient-fluid", elem_filters = {{filter = "name", name = "sulfuric-acid"}}}}
 * ```
 * Applies to variant case `has-ingredient-fluid`
 */
interface RecipePrototypeFilterHasIngredientFluid extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'has-ingredient-fluid';
    /**
     * Matches if at least 1 ingredient is a fluid that matches these filters.
     */
    'elem_filters'?: FluidPrototypeFilter[];
}
/**
 *
 * Applies to variant case `has-ingredient-item`
 */
interface RecipePrototypeFilterHasIngredientItem extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'has-ingredient-item';
    /**
     * Matches if at least 1 ingredient is an item that matches these filters.
     */
    'elem_filters'?: ItemPrototypeFilter[];
}
/**
 *
 * Applies to variant case `has-product-fluid`
 */
interface RecipePrototypeFilterHasProductFluid extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'has-product-fluid';
    /**
     * Matches if at least 1 product is a fluid that matches
     */
    'elem_filters'?: FluidPrototypeFilter[];
}
/**
 * Usage example:
 * ```
 * -- selects recipes that produce an item
 * {{filter = "has-product-item"}}
 * -- selects recipes that produce iron plates
 * {{filter = "has-product-item", elem_filters = {{filter = "name", name = "iron-plate"}}}}
 * -- selects recipes that produce items that place furnaces
 * {{filter = "has-product-item", elem_filters = {{filter = "place-result", elem_filters = {{filter = "type", type = "furnace"}}}}}}
 * ```
 * Applies to variant case `has-product-item`
 */
interface RecipePrototypeFilterHasProductItem extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'has-product-item';
    /**
     * Matches if at least 1 product is an item that matches these filters.
     */
    'elem_filters'?: ItemPrototypeFilter[];
}
/**
 *
 * Applies to variant case `overload-multiplier`
 */
interface RecipePrototypeFilterOverloadMultiplier extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'overload-multiplier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': uint;
}
/**
 *
 * Applies to variant case `request-paste-multiplier`
 */
interface RecipePrototypeFilterRequestPasteMultiplier extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'request-paste-multiplier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': uint;
}
/**
 *
 * Applies to variant case `subgroup`
 */
interface RecipePrototypeFilterSubgroup extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'subgroup';
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    'subgroup': string;
}
/**
 * Represents an object that can be {@link registered | runtime:LuaBootstrap::register_on_object_destroyed} for the {@link on_object_destroyed | runtime:on_object_destroyed} event. Each target has an associated {@link defines.target_type | runtime:defines.target_type} and some have a unique identifier.
 */
type RegistrationTarget = /**
 * Target type {@link entity | runtime:defines.target_type.entity}; `useful_id` {@link LuaEntity::unit_number | runtime:LuaEntity::unit_number}
 */
LuaEntity | /**
 * Target type {@link equipment | runtime:defines.target_type.equipment}
 */
LuaEquipment | /**
 * Target type {@link equipment_grid | runtime:defines.target_type.equipment_grid}; `useful_id` {@link LuaEquipmentGrid::unique_id | runtime:LuaEquipmentGrid::unique_id}
 */
LuaEquipmentGrid | /**
 * Target type {@link item | runtime:defines.target_type.item}; `useful_id` {@link LuaItemCommon::item_number | runtime:LuaItemCommon::item_number}
 */
LuaItem | /**
 * Target type {@link logistic_cell | runtime:defines.target_type.logistic_cell}
 */
LuaLogisticCell | /**
 * Target type {@link logistic_network | runtime:defines.target_type.logistic_network}; `useful_id` {@link LuaLogisticNetwork::network_id | runtime:LuaLogisticNetwork::network_id}
 */
LuaLogisticNetwork | /**
 * Target type {@link logistic_section | runtime:defines.target_type.logistic_section};
 */
LuaLogisticSection | /**
 * Target type {@link permission_group | runtime:defines.target_type.permission_group}; `useful_id` {@link LuaPermissionGroup::group_id | runtime:LuaPermissionGroup::group_id}
 */
LuaPermissionGroup | /**
 * Target type {@link planet | runtime:defines.target_type.planet}
 */
LuaPlanet | /**
 * Target type {@link player | runtime:defines.target_type.player}; `useful_id` {@link LuaPlayer::index | runtime:LuaPlayer::index}
 */
LuaPlayer | /**
 * Target type {@link rail_path | runtime:defines.target_type.rail_path};
 */
LuaRailPath | /**
 * Target type {@link render_object | runtime:defines.target_type.render_object}; `useful_id` {@link LuaRenderObject::id | runtime:LuaRenderObject::id}
 */
LuaRenderObject | /**
 * Target type {@link space_platform | runtime:defines.target_type.space_platform}; `useful_id` {@link LuaSpacePlatform::index | runtime:LuaSpacePlatform::index}
 */
LuaSpacePlatform | /**
 * Target type {@link surface | runtime:defines.target_type.surface}; `useful_id` {@link LuaSurface::index | runtime:LuaSurface::index}
 */
LuaSurface | /**
 * Target type {@link train | runtime:defines.target_type.train}; `useful_id` {@link LuaTrain::id | runtime:LuaTrain::id}
 */
LuaTrain | /**
 * Target type {@link commandable | runtime:defines.target_type.commandable}; `useful_id` {@link LuaCommandable::unique_id | runtime:LuaCommandable::unique_id}
 */
LuaCommandable | /**
 * Target type {@link custom_chart_tag | runtime:defines.target_type.custom_chart_tag}; `useful_id` {@link LuaCustomChartTag::tag_number | runtime:LuaCustomChartTag::tag_number}
 */
LuaCustomChartTag | /**
 * Target type {@link gui_element | runtime:defines.target_type.gui_element}; `useful_id` {@link LuaGuiElement::index | runtime:LuaGuiElement::index}
 */
LuaGuiElement;
/**
 * A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"10"` and `"decals"` are both valid. Higher values are rendered above lower values.
 */
type RenderLayer = /**
 * A string of a number
 */
string | /**
 * 0
 */
'zero' | /**
 * 1
 */
'background-transitions' | /**
 * 2
 */
'under-tiles' | /**
 * 10
 */
'decals' | /**
 * 11
 */
'above-tiles' | /**
 * 12
 */
'ground-layer-1' | /**
 * 13
 */
'ground-layer-2' | /**
 * 14
 */
'ground-layer-3' | /**
 * 15
 */
'ground-layer-4' | /**
 * 16
 */
'ground-layer-5' | /**
 * 29
 */
'lower-radius-visualization' | /**
 * 30
 */
'radius-visualization' | /**
 * 65
 */
'transport-belt-integration' | /**
 * 66
 */
'resource' | /**
 * 67
 */
'building-smoke' | /**
 * 68
 */
'rail-stone-path-lower' | /**
 * 76
 */
'rail-stone-path' | /**
 * 84
 */
'rail-tie' | /**
 * 92
 */
'decorative' | /**
 * 93
 */
'ground-patch' | /**
 * 94
 */
'ground-patch-higher' | /**
 * 95
 */
'ground-patch-higher2' | /**
 * 96
 */
'rail-chain-signal-metal' | /**
 * 97
 */
'rail-screw' | /**
 * 100
 */
'rail-metal' | /**
 * 102
 */
'remnants' | /**
 * 103
 */
'floor' | /**
 * 104
 */
'transport-belt' | /**
 * 105
 */
'transport-belt-endings' | /**
 * 106
 */
'floor-mechanics-under-corpse' | /**
 * 107
 */
'corpse' | /**
 * 108
 */
'floor-mechanics' | /**
 * 109
 */
'item' | /**
 * 117
 */
'transport-belt-reader' | /**
 * 118
 */
'lower-object' | /**
 * 120
 */
'transport-belt-circuit-connector' | /**
 * 121
 */
'lower-object-above-shadow' | /**
 * 122
 */
'lower-object-overlay' | /**
 * 123
 */
'object-under' | /**
 * 124
 */
'object' | /**
 * 125
 */
'cargo-hatch' | /**
 * 126
 */
'higher-object-under' | /**
 * 127
 */
'higher-object-above' | /**
 * 128
 */
'train-stop-top' | /**
 * 129
 */
'item-in-inserter-hand' | /**
 * 130
 */
'above-inserter' | /**
 * 131
 */
'wires' | /**
 * 132
 */
'under-elevated' | /**
 * 133
 */
'elevated-rail-stone-path-lower' | /**
 * 134
 */
'elevated-rail-stone-path' | /**
 * 135
 */
'elevated-rail-tie' | /**
 * 136
 */
'elevated-rail-screw' | /**
 * 137
 */
'elevated-rail-metal' | /**
 * 141
 */
'elevated-lower-object' | /**
 * 142
 */
'elevated-object' | /**
 * 143
 */
'elevated-higher-object' | /**
 * 149
 */
'fluid-visualization' | /**
 * 150
 */
'wires-above' | /**
 * 153
 */
'entity-info-icon' | /**
 * 154
 */
'entity-info-icon-above' | /**
 * 157
 */
'explosion' | /**
 * 158
 */
'projectile' | /**
 * 159
 */
'smoke' | /**
 * 160
 */
'air-object' | /**
 * 161
 */
'air-entity-info-icon' | /**
 * 162
 */
'light-effect' | /**
 * 187
 */
'selection-box' | /**
 * 188
 */
'higher-selection-box' | /**
 * 189
 */
'collision-selection-box' | /**
 * 190
 */
'arrow' | /**
 * 226
 */
'cursor';
interface ResearchIngredient {
    /**
     * Prototype name of the required item.
     */
    name: string;
    /**
     * Amount of items required to research one unit of technology.
     */
    amount: uint16;
}
interface ResearchProgressProduct {
    type: 'research-progress';
    /**
     * Prototype name of the research item.
     */
    research_item: string;
    amount: double;
}
interface BaseResearchTrigger {
    type: 'craft-item' | 'mine-entity' | 'craft-fluid' | 'send-item-to-orbit' | 'capture-spawner' | 'build-entity' | 'create-space-platform';
}
type ResearchTrigger = BaseResearchTrigger | ResearchTriggerBuildEntity | ResearchTriggerCaptureSpawner | ResearchTriggerCraftFluid | ResearchTriggerCraftItem | ResearchTriggerMineEntity | ResearchTriggerSendItemToOrbit;
/**
 *
 * Applies to variant case `build-entity`
 */
interface ResearchTriggerBuildEntity extends BaseResearchTrigger {
    'type': 'build-entity';
    'entity': EntityIDFilter;
}
/**
 *
 * Applies to variant case `capture-spawner`
 */
interface ResearchTriggerCaptureSpawner extends BaseResearchTrigger {
    'type': 'capture-spawner';
    'entity'?: string;
}
/**
 *
 * Applies to variant case `craft-fluid`
 */
interface ResearchTriggerCraftFluid extends BaseResearchTrigger {
    'type': 'craft-fluid';
    'amount': double;
    'fluid': string;
}
/**
 *
 * Applies to variant case `craft-item`
 */
interface ResearchTriggerCraftItem extends BaseResearchTrigger {
    'type': 'craft-item';
    'item': string;
    'item_quality'?: string;
}
/**
 *
 * Applies to variant case `mine-entity`
 */
interface ResearchTriggerMineEntity extends BaseResearchTrigger {
    'type': 'mine-entity';
    'entity': string;
}
/**
 *
 * Applies to variant case `send-item-to-orbit`
 */
interface ResearchTriggerSendItemToOrbit extends BaseResearchTrigger {
    'type': 'send-item-to-orbit';
    'item': ItemIDFilter;
}
interface Resistance {
    /**
     * Absolute damage decrease
     */
    decrease: float;
    /**
     * Percentual damage decrease
     */
    percent: float;
}
interface RidingState {
    acceleration: defines.riding.acceleration;
    direction: defines.riding.direction;
}
interface RollingStockDrawData {
    position: MapPosition;
    orientation: RealOrientation;
    slope: float;
    height: float;
}
interface ScheduleRecord {
    /**
     * Name of the station.
     */
    station?: string;
    /**
     * Rail to path to. Ignored if `station` is present.
     */
    rail?: LuaEntity;
    /**
     * When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to {@link LuaEntity::connected_rail_direction | runtime:LuaEntity::connected_rail_direction} of a TrainStop.
     */
    rail_direction?: defines.rail_direction;
    wait_conditions?: WaitCondition[];
    /**
     * Only present when the station is temporary, the value is then always `true`.
     */
    temporary?: boolean;
}
/**
 * An area defined using the map editor.
 */
interface ScriptArea {
    area: BoundingBox;
    name: string;
    color: Color;
    id: uint;
}
/**
 * A position defined using the map editor.
 */
interface ScriptPosition {
    position: MapPosition;
    name: string;
    color: Color;
    id: uint;
}
/**
 * When writing it is possible to give LuaEntity or MapPosition directly. However, reading always returns the full ScriptRenderTargetTable.
 */
type ScriptRenderTarget = LuaEntity | MapPosition | ScriptRenderTargetTable;
interface ScriptRenderTargetTable {
    entity?: LuaEntity;
    /**
     * Only used if `entity` was given.
     */
    offset?: Vector;
    /**
     * Only used, and mandatory if `entity` is not given.
     */
    position?: MapPosition;
}
/**
 * Scroll policy of a {@link scroll pane | runtime:LuaGuiElement}.
 */
type ScrollPolicy = 'never' | 'dont-show-but-allow-scrolling' | 'always' | 'auto' | 'auto-and-reserve-space';
interface SelectedPrototypeData {
    /**
     * E.g. `"entity"`.
     */
    base_type: string;
    /**
     * The `type` of the prototype. E.g. `"tree"`.
     */
    derived_type: string;
    /**
     * The `name` of the prototype. E.g. `"tree-05"`.
     */
    name: string;
}
/**
 * A set of flags on a selection tool that define how entities and tiles are selected. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 */
type SelectionModeFlags = Record</**
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
 * Selects entities which are considered a {@link building | runtime:LuaEntityPrototype::is_building}, plus landmines.
 */
'buildable-type' | /**
 * Selects no entities or tiles, but is useful to select an area.
 */
'nothing' | /**
 * Selects entities and tiles that can be {@link built by an item | runtime:LuaItemPrototype::place_result}.
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
 * Selects entities from a {@link friendly | runtime:LuaForce::is_friend} force.
 */
'friend' | /**
 * Selects entities from an {@link enemy | runtime:LuaForce::is_enemy} force.
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
 * Selects entities that are {@link entities with health | runtime:LuaEntity::is_entity_with_health}.
 */
'entity-with-health' | /**
 * Selects entities that are {@link military targets | runtime:LuaEntity::is_military_target}.
 */
'is-military-target' | /**
 * Selects entities that are {@link entities with owner | runtime:LuaEntity::is_entity_with_owner}.
 */
'entity-with-owner' | /**
 * Selects entities that are not `rolling-stock`s.
 */
'avoid-rolling-stock' | 'avoid-vehicle' | 'controllable' | 'controllable-add' | 'controllable-remove' | /**
 * Selects entities that are `entity-ghost`s.
 */
'entity-ghost' | /**
 * Selects entities that are `tile-ghost`s.
 */
'tile-ghost', true>;
interface SelectorCombinatorParameters {
    /**
     * The signal to use.
     */
    index_signal: SignalID;
    /**
     * The signal index to use if not using a specific signal.
     */
    index_constant: uint;
    /**
     * The signal to emit.
     */
    count_signal: SignalID;
    /**
     * Must be one of `"select"`, `"count"`, `"random"`. When not specified, defaults to `"select"`.
     */
    operation?: string;
    /**
     * If the maximum value is used.
     */
    select_max: boolean;
}
/**
 * An actual signal transmitted by the network.
 */
interface Signal {
    /**
     * ID of the signal.
     */
    signal: SignalID;
    /**
     * Value of the signal.
     */
    count: int;
}
/**
 * A signal filter may be specified in two ways, either as a string which is a virtual signal name or item prototype name or as a table.
 */
type SignalFilter = {
    /**
     * The type of the signal filter.
     */
    type?: SignalIDType;
    /**
     * Name of the signal.
     */
    name: string;
    /**
     * The prototype name of the signal's quality. `nil` for any quality.
     */
    quality?: QualityID;
    /**
     * The comparator for quality. `nil` if any quality.
     */
    comparator?: ComparatorString;
} | string;
interface SignalID {
    /**
     * The type of the signal. If the type is `"item"`, this will be `nil` when reading.
     */
    type?: SignalIDType;
    /**
     * Name of the prototype.
     */
    name?: string;
}
type SignalIDType = 'item' | 'fluid' | 'virtual' | 'entity' | 'recipe' | 'space-location' | 'asteroid-chunk' | 'quality';
/**
 * An item stack may be specified in one of two ways.
 * @example ```
-- Both of these lines specify an item stack of one iron plate
{name="iron-plate"}
{name="iron-plate", count=1}
```
 * @example ```
-- This is a stack of 47 copper plates
{name="copper-plate", count=47}
```
 * @example ```
These are both full stacks of iron plates (for iron-plate, a full stack is 100 plates)
"iron-plate"
{name="iron-plate", count=100}
```
 */
type SimpleItemStack = /**
 * The name of the item, which represents a full stack of that item.
 */
string | /**
 * The detailed definition of an item stack.
 */
ItemStackDefinition;
type SimulationWidgetType = 'signal-id' | 'signal-id-base' | 'signal-or-number' | 'simple-slot' | 'simple-item-slot' | 'recipe-slot' | 'quickbar-slot' | 'logistics-button' | 'logistics-button-space' | 'text-button-localised-substring' | 'text-button' | 'text-button-substring' | 'inventory-limit-slot-button' | 'train-schedule-action-button' | 'choose-button' | 'textfield' | 'item-group-tab' | 'drop-down' | 'check-box' | 'switch' | 'label';
interface SmokeSource {
    name: string;
    frequency: float;
    offset: float;
    position?: Vector;
    north_position?: Vector;
    north_east_position?: Vector;
    east_position?: Vector;
    south_east_position?: Vector;
    south_position?: Vector;
    south_west_position?: Vector;
    west_position?: Vector;
    north_west_position?: Vector;
    deviation?: MapPosition;
    starting_frame: uint16;
    starting_frame_deviation: uint16;
    height: float;
    height_deviation: float;
    starting_vertical_speed: float;
    starting_vertical_speed_deviation: float;
    vertical_speed_slowdown: float;
}
/**
 * It can be either the name of a {@link SoundPrototype | prototype:SoundPrototype} defined in the data stage, or a path in the form `"type/name"`. The latter option can be sorted into three categories.
 *
 * The validity of a SoundPath can be verified at runtime using {@link LuaHelpers::is_valid_sound_path | runtime:LuaHelpers::is_valid_sound_path}.
 * The utility and ambient types each contain general use sound prototypes defined by the game itself.
 *
 * - `"utility"` - Uses {@link UtilitySounds | prototype:UtilitySounds}. Example: `"utility/wire_connect_pole"`
 * - `"ambient"` - Uses {@link AmbientSound | prototype:AmbientSound}. Example: `"ambient/resource-deficiency"`
 */
type SoundPath = string;
/**
 * Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
 */
type SoundType = 'game-effect' | 'gui-effect' | 'ambient' | 'environment' | 'walking' | 'alert' | 'wind' | 'world-ambient' | 'weapon' | 'explosion' | 'enemy';
interface SpaceConnectionAsteroidSpawnDefinition {
    /**
     * `asteroid-chunk` or `entity`
     */
    type: string;
    /**
     * The asteroid chunk or entity name.
     */
    asteroid: string;
    spawn_points: SpaceConnectionAsteroidSpawnPoint[];
}
interface SpaceConnectionAsteroidSpawnPoint {
    probability: double;
    speed: double;
    distance: double;
}
interface SpaceLocationAsteroidSpawnDefinition {
    /**
     * `asteroid-chunk` or `entity`
     */
    type: string;
    /**
     * The asteroid chunk or entity name.
     */
    asteroid: string;
    probability: double;
    speed: double;
}
/**
 * A space location prototype may be specified in one of two ways.
 */
type SpaceLocationID = /**
 * The space location prototype.
 */
LuaSpaceLocationPrototype | /**
 * The prototype name.
 */
string;
interface BaseSpaceLocationPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'fly-condition' | 'type' | 'solar-power-in-space';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type SpaceLocationPrototypeFilter = BaseSpaceLocationPrototypeFilter | SpaceLocationPrototypeFilterSolarPowerInSpace | SpaceLocationPrototypeFilterType;
/**
 *
 * Applies to variant case `solar-power-in-space`
 */
interface SpaceLocationPrototypeFilterSolarPowerInSpace extends BaseSpaceLocationPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'solar-power-in-space';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `type`
 */
interface SpaceLocationPrototypeFilterType extends BaseSpaceLocationPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'type';
    /**
     * The prototype type, or a list of acceptable types.
     */
    'type': string | string[];
}
/**
 * Space platform may be specified in one of one ways.
 */
type SpacePlatformIdentification = LuaSpacePlatform;
interface SpawnPointDefinition {
    /**
     * Evolution factor for which this weight applies.
     */
    evolution_factor: double;
    /**
     * Probability of spawning this unit at this evolution factor.
     */
    weight: double;
}
interface SpoilToTriggerResult {
    /**
     * The trigger runs (count-in-stack / items_per_trigger) times; rounded up.
     */
    items_per_trigger: uint;
    /**
     * The trigger items that are run.
     */
    trigger: TriggerItem[];
}
/**
 * It can be either the name of a {@link SpritePrototype | prototype:SpritePrototype} defined in the data stage, or a path in form "type/name" or "type.name".
 *
 * The validity of a SpritePath can be verified at runtime using {@link LuaHelpers::is_valid_sprite_path | runtime:LuaHelpers::is_valid_sprite_path}.
 * The supported types are:
 *
 * - `"item"` - for example "item/iron-plate" is the icon sprite of iron plate
 * - `"entity"` - for example "entity/small-biter" is the icon sprite of the small biter
 * - `"technology"`
 * - `"recipe"`
 * - `"fluid"`
 * - `"tile"`
 * - `"item-group"`
 * - `"virtual-signal"`
 * - `"shortcut"`
 * - `"achievement"`
 * - `"equipment"`
 * - `"ammo-category"`
 * - `"decorative"`
 * - `"space-connection"`
 * - `"space-location"`
 * - `"surface"`
 * - `"airborne-pollutant"`
 * - `"asteroid-chunk"`
 * - `"quality"`
 * - `"file"` - path to an image file located inside the current scenario. This file is not preloaded so it will be slower; for frequently used sprites, it is better to define sprite prototype and use it instead.
 * - `"utility"` - sprite defined in the utility-sprites object, these are the pictures used by the game internally for the UI.
 */
type SpritePath = string;
interface SteeringMapSetting {
    /**
     * Does not include the radius of the unit.
     */
    radius: double;
    separation_factor: double;
    separation_force: double;
    /**
     * Used to make steering look better for aesthetic purposes.
     */
    force_unit_fuzzy_goto_behavior: boolean;
}
interface SteeringMapSettings {
    default: SteeringMapSetting;
    moving: SteeringMapSetting;
}
interface SurfaceCondition {
    property: string;
    min: double;
    max: double;
}
/**
 * A surface may be specified in one of three ways.
 */
type SurfaceIdentification = /**
 * It will be the index of the surface. `nauvis` has index `1`, the first surface-created surface will have index `2` and so on.
 */
uint | /**
 * It will be the surface name. E.g. `"nauvis"`.
 */
string | /**
 * A reference to {@link LuaSurface | runtime:LuaSurface} may be passed directly.
 */
LuaSurface;
/**
 * Surface property prototype may be specified in one of two ways.
 */
type SurfacePropertyID = /**
 * The surface property prototype.
 */
LuaSurfacePropertyPrototype | /**
 * The prototype name.
 */
string;
/**
 * State of a GUI {@link switch | runtime:LuaGuiElement::switch_state}.
 */
type SwitchState = 'left' | 'right' | 'none';
interface TabAndContent {
    tab: LuaGuiElement;
    content: LuaGuiElement;
}
/**
 * A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`.
 *
 * Note that the API returns tags as a simple table, meaning any modifications to it will not propagate back to the game. Thus, to modify a set of tags, the whole table needs to be written back to the respective property.
 * @example ```
{a = 1, b = true, c = "three", d = {e = "f"}}
```
 */
type Tags = Record<string, AnyBasic>;
/**
 * Target type of an {@link AmmoType | runtime:AmmoType}.
 */
type TargetType = /**
 * Fires at an entity.
 */
'entity' | /**
 * Fires directly at a position.
 */
'position' | /**
 * Fires in a direction.
 */
'direction';
/**
 * An technology prototype may be specified in one of three ways.
 */
type TechnologyID = /**
 * The technology prototype.
 */
LuaTechnologyPrototype | /**
 * Instance of the technology.
 */
LuaTechnology | /**
 * The prototype name.
 */
string;
/**
 * The effect that is applied when a technology is researched. It is a table that contains at least the field `type`.
 */
interface BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    type: ModifierType;
}
/**
 * The effect that is applied when a technology is researched. It is a table that contains at least the field `type`.
 */
type TechnologyModifier = BaseTechnologyModifier | TechnologyModifierOtherTypes | TechnologyModifierAmmoDamage | TechnologyModifierGiveItem | TechnologyModifierGunSpeed | TechnologyModifierNothing | TechnologyModifierTurretAttack | TechnologyModifierUnlockRecipe;
/**
 *
 * Applies to variant case `OtherTypes`
 */
interface TechnologyModifierOtherTypes extends BaseTechnologyModifier {
    /**
     * Modification value. This value will be added to the variable it modifies.
     */
    'modifier': double;
}
/**
 *
 * Applies to variant case `ammo-damage`
 */
interface TechnologyModifierAmmoDamage extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    'type': 'ammo-damage';
    /**
     * Prototype name of the ammunition category that is affected
     */
    'ammo_category': string;
    /**
     * Modification value. This will be added to the current ammo damage modifier upon researching.
     */
    'modifier': double;
}
/**
 *
 * Applies to variant case `give-item`
 */
interface TechnologyModifierGiveItem extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    'type': 'give-item';
    /**
     * Number of items to give. Defaults to `1`.
     */
    'count'?: uint;
    /**
     * Item prototype name to give.
     */
    'item': string;
}
/**
 *
 * Applies to variant case `gun-speed`
 */
interface TechnologyModifierGunSpeed extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    'type': 'gun-speed';
    /**
     * Prototype name of the ammunition category that is affected
     */
    'ammo_category': string;
    /**
     * Modification value. This will be added to the current gun speed modifier upon researching.
     */
    'modifier': double;
}
/**
 *
 * Applies to variant case `nothing`
 */
interface TechnologyModifierNothing extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    'type': 'nothing';
    /**
     * Description of this nothing modifier.
     */
    'effect_description': LocalisedString;
}
/**
 *
 * Applies to variant case `turret-attack`
 */
interface TechnologyModifierTurretAttack extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    'type': 'turret-attack';
    /**
     * Modification value. This will be added to the current turret damage modifier upon researching.
     */
    'modifier': double;
    /**
     * Turret prototype name this modifier will affect.
     */
    'turret_id': string;
}
/**
 *
 * Applies to variant case `unlock-recipe`
 */
interface TechnologyModifierUnlockRecipe extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    'type': 'unlock-recipe';
    /**
     * Recipe prototype name to unlock.
     */
    'recipe': string;
}
interface BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'enabled' | 'hidden' | 'upgrade' | 'visible-when-disabled' | 'has-effects' | 'has-prerequisites' | 'research-unit-ingredient' | 'unlocks-recipe' | 'level' | 'max-level' | 'time';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type TechnologyPrototypeFilter = BaseTechnologyPrototypeFilter | TechnologyPrototypeFilterLevel | TechnologyPrototypeFilterMaxLevel | TechnologyPrototypeFilterResearchUnitIngredient | TechnologyPrototypeFilterTime | TechnologyPrototypeFilterUnlocksRecipe;
/**
 *
 * Applies to variant case `level`
 */
interface TechnologyPrototypeFilterLevel extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'level';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': uint;
}
/**
 *
 * Applies to variant case `max-level`
 */
interface TechnologyPrototypeFilterMaxLevel extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'max-level';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': uint;
}
/**
 *
 * Applies to variant case `research-unit-ingredient`
 */
interface TechnologyPrototypeFilterResearchUnitIngredient extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'research-unit-ingredient';
    /**
     * The research ingredient to check.
     */
    'ingredient': string;
}
/**
 *
 * Applies to variant case `time`
 */
interface TechnologyPrototypeFilterTime extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'time';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': uint;
}
/**
 *
 * Applies to variant case `unlocks-recipe`
 */
interface TechnologyPrototypeFilterUnlocksRecipe extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'unlocks-recipe';
    /**
     * The recipe to check.
     */
    'recipe': string;
}
interface TerritorySettings {
    units: string[];
    territory_index_expression: string;
    territory_variation_expression: string;
    minimum_territory_size: uint;
}
/**
 * The text is aligned so that the target position is at the given side of the text.
 *
 * For example, `"right"` aligned text means the right side of the text is at the target position. Or in other words, the target is on the right of the text.
 */
type TextAlign = 'left' | 'right' | 'center';
interface Tile {
    /**
     * The position of the tile.
     */
    position: TilePosition;
    /**
     * The prototype name of the tile.
     */
    name: string;
}
/**
 * A tile may be specified in one of three ways.
 */
type TileID = /**
 * By tile prototype.
 */
LuaTilePrototype | /**
 * By instance of tile.
 */
LuaTile | /**
 * By name of the tile prototype.
 */
string;
/**
 * Coordinates of a tile on a {@link LuaSurface | runtime:LuaSurface} where each integer `x`/`y` represents a different tile. This uses the same format as {@link MapPosition | runtime:MapPosition}, except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
 */
type TilePosition = {
    x: int;
    y: int;
} | [
    int,
    int
];
interface BaseTilePrototypeFilter {
    /**
     * The condition to filter on.
     */
    filter: 'minable' | 'autoplace' | 'blueprintable' | 'item-to-place' | 'collision-mask' | 'walking-speed-modifier' | 'vehicle-friction-modifier' | 'decorative-removal-probability' | 'absorptions-per-second';
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and';
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean;
}
type TilePrototypeFilter = BaseTilePrototypeFilter | TilePrototypeFilterAbsorptionsPerSecond | TilePrototypeFilterCollisionMask | TilePrototypeFilterDecorativeRemovalProbability | TilePrototypeFilterVehicleFrictionModifier | TilePrototypeFilterWalkingSpeedModifier;
/**
 *
 * Applies to variant case `absorptions-per-second`
 */
interface TilePrototypeFilterAbsorptionsPerSecond extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'absorptions-per-second';
    'comparison': ComparatorString;
    /**
     * The name of a pollutant type to check.
     */
    'pollutant': string;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `collision-mask`
 */
interface TilePrototypeFilterCollisionMask extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'collision-mask';
    /**
     * Name of one {@link layer | runtime:LuaCollisionLayerPrototype} or a full collision mask.
     */
    'mask': CollisionLayerID | CollisionMask;
    /**
     * How to filter.
     */
    'mask_mode': 'collides' | 'layers-equals' | 'contains-any' | 'contains-all';
}
/**
 *
 * Applies to variant case `decorative-removal-probability`
 */
interface TilePrototypeFilterDecorativeRemovalProbability extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'decorative-removal-probability';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': float;
}
/**
 *
 * Applies to variant case `vehicle-friction-modifier`
 */
interface TilePrototypeFilterVehicleFrictionModifier extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'vehicle-friction-modifier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
/**
 *
 * Applies to variant case `walking-speed-modifier`
 */
interface TilePrototypeFilterWalkingSpeedModifier extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on.
     */
    'filter': 'walking-speed-modifier';
    'comparison': ComparatorString;
    /**
     * The value to compare against.
     */
    'value': double;
}
interface TileSearchFilters {
    area?: BoundingBox;
    /**
     * Ignored if not given with radius.
     */
    position?: MapPosition;
    /**
     * If given with position, will return all tiles within the radius of the position.
     */
    radius?: double;
    /**
     * An empty array means nothing matches the name filter.
     */
    name?: TileID | TileID[];
    limit?: uint;
    has_hidden_tile?: boolean;
    /**
     * Can be further filtered by supplying a `force` filter.
     */
    has_double_hidden_tile?: boolean;
    /**
     * Can be further filtered by supplying a `force` filter.
     */
    has_tile_ghost?: boolean;
    /**
     * Can be further filtered by supplying a `force` filter.
     */
    to_be_deconstructed?: boolean;
    collision_mask?: CollisionLayerID | CollisionLayerID[] | Record<CollisionLayerID, true>;
    force?: ForceSet;
    /**
     * If the filters should be inverted.
     */
    invert?: boolean;
}
interface TrainFilter {
    /**
     * Train ID filter
     */
    train_id?: uint;
    /**
     * Surface the train must be on in order to pass
     */
    surface?: SurfaceIdentification;
    /**
     * Train must contain at least one rolling stock of this force to pass
     */
    force?: ForceID;
    /**
     * Train must contain a rolling stock of any of provided prototype to pass
     */
    stock?: EntityID | EntityID[];
    /**
     * Train must have at least that many stocks to pass
     */
    min_stocks?: uint;
    /**
     * Train must have at most that many stocks to pass
     */
    max_stocks?: uint;
    /**
     * Checks if train is moving (has speed != 0) or not moving.
     */
    is_moving?: boolean;
    /**
     * Checks if train has a passenger.
     */
    has_passenger?: boolean;
    /**
     * Checks if train is in manual controller.
     */
    is_manual?: boolean;
}
interface TrainPathAllGoalsResult {
    /**
     * Amount of goals that are accessible.
     */
    amount_accessible: uint;
    /**
     * Array of the same length as requested goals: each field will tell if related goal is accessible for the train.
     */
    accessible: boolean[];
    /**
     * Array of the same length as requested goals. Only present if request type was `"all-goals-penalties"`.
     */
    penalties?: double[];
    /**
     * Amount of steps pathfinder performed. This is a measure of how expensive this search was.
     */
    steps_count: uint;
}
type TrainPathFinderGoal = TrainStopGoal | RailEndGoal | LuaRailEnd | /**
 * Only if it points at train-stop that is connected to a rail.
 */
LuaEntity;
interface TrainPathFinderOneGoalResult {
    /**
     * True if found path.
     */
    found_path: boolean;
    /**
     * If path was found, provides index of the specific goal to which the path goes to.
     */
    goal_index?: uint;
    /**
     * If path was found, provides index of the specific start from which the path to target goes from
     */
    start_index?: uint;
    /**
     * Penalty of the path to goal if path was found.
     */
    penalty?: double;
    /**
     * If path was found, tells if the path was reached from the train's front end or from {@link RailEndStart | runtime:RailEndStart} with {@link RailEndStart::is_front | runtime:RailEndStart::is_front} set.
     */
    is_front?: boolean;
    /**
     * If path was found and search was of type `"path"`, provides total length of all rails of the path.
     */
    total_length?: double;
    /**
     * Only if search was of type `"path"`, `return_path` was set to true and path was found. Contains all rails in order that are part of the found path.
     */
    path?: LuaEntity[];
    /**
     * Amount of steps pathfinder performed. This is a measure of how expensive this search was.
     */
    steps_count: uint;
}
/**
 * A {@link string | runtime:string} specifying the type of request for {@link LuaTrainManager::request_train_path | runtime:LuaTrainManager::request_train_path}.
 */
type TrainPathRequestType = /**
 * The method will return {@link TrainPathFinderOneGoalResult | runtime:TrainPathFinderOneGoalResult}.
 */
'path' | /**
 * The method will return {@link TrainPathFinderOneGoalResult | runtime:TrainPathFinderOneGoalResult}.
 */
'any-goal-accessible' | /**
 * The method will return {@link TrainPathAllGoalsResult | runtime:TrainPathAllGoalsResult}.
 */
'all-goals-accessible' | /**
 * The method will return {@link TrainPathAllGoalsResult | runtime:TrainPathAllGoalsResult} with `penalties`.
 */
'all-goals-penalties';
interface TrainSchedule {
    /**
     * Index of the currently active record
     */
    current: uint;
    records: ScheduleRecord[];
}
interface TrainStopFilter {
    /**
     * Surface the train stop must be on in order to pass
     */
    surface?: SurfaceIdentification;
    /**
     * ForceID the train stop must have to pass
     */
    force?: ForceID;
    /**
     * Checks if train stop is full (trains count >= trains limit or disabled) or not full.
     */
    is_full?: boolean;
    /**
     * Checks if train stop has a rail next to it.
     */
    is_connected_to_rail?: boolean;
    /**
     * If given, only train stops of this type will pass
     */
    type?: EntityID | EntityID[];
    /**
     * Train stop must belong to given station name to pass
     */
    station_name?: string | string[];
    /**
     * If train stop has limit set by control behavior
     */
    limit_set_by_control_behavior?: boolean;
    /**
     * If train stop is disabled by a control behavior
     */
    is_disabled?: boolean;
}
interface TrainStopGoal {
    /**
     * Train stop target. Must be connected to rail ({@link LuaEntity::connected_rail | runtime:LuaEntity::connected_rail} returns valid LuaEntity).
     */
    train_stop: LuaEntity;
    /**
     * Goal priority. If not provided, defaults to {@link LuaEntity::train_stop_priority | runtime:LuaEntity::train_stop_priority} of provided train_stop.
     */
    priority?: uint8;
}
interface TriggerDelivery {
    type: 'instant' | 'projectile' | 'beam' | 'stream' | 'artillery' | 'chain' | 'delayed';
    source_effects: TriggerEffectItem[];
    target_effects: TriggerEffectItem[];
}
interface TriggerEffectItem {
    type: TriggerEffectItemType;
    repeat_count: uint16;
    repeat_count_deviation: uint16;
    probability: float;
    affects_target: boolean;
    show_in_tooltip: boolean;
    damage_type_filters?: DamageTypeFilters;
}
/**
 * Used by {@link TriggerEffectItem | runtime:TriggerEffectItem}.
 */
type TriggerEffectItemType = 'damage' | 'create-entity' | 'create-explosion' | 'create-fire' | 'create-smoke' | 'create-trivial-smoke' | 'create-asteroid-chunk' | 'create-particle' | 'create-sticker' | 'create-decorative' | 'nested-result' | 'play-sound' | 'push-back' | 'destroy-cliffs' | 'show-explosion-on-chart' | 'insert-item' | 'script' | 'set-tile' | 'invoke-tile-trigger' | 'destroy-decoratives' | 'camera-effect' | 'activate-impact';
interface TriggerItem {
    type: 'direct' | 'area' | 'line' | 'cluster';
    action_delivery?: TriggerDelivery[];
    /**
     * The trigger will only affect entities that contain any of these flags.
     */
    entity_flags?: EntityPrototypeFlags;
    ignore_collision_condition: boolean;
    /**
     * The trigger will only affect entities that would collide with given collision mask.
     */
    collision_mask: CollisionMask;
    trigger_target_mask: TriggerTargetMask;
    /**
     * If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which there is no cease-fire set. `"ally"` is the opposite of `"enemy"`.
     */
    force: ForceCondition;
    repeat_count: uint;
    probability: float;
}
/**
 * A set of trigger target masks.
 */
type TriggerTargetMask = Record<string, true>;
/**
 * A trivial smoke prototype may be specified in one of two ways.
 */
type TrivialSmokeID = /**
 * The trivial smoke prototype.
 */
LuaTrivialSmokePrototype | /**
 * The prototype name.
 */
string;
interface BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    type: string;
    /**
     * The tags attached to the undo action, if any.
     */
    tags?: Tags;
}
type UndoRedoAction = BaseUndoRedoAction | UndoRedoActionBuiltEntity | UndoRedoActionBuiltTile | UndoRedoActionCopyEntitySettings | UndoRedoActionRemovedEntity | UndoRedoActionRemovedTile | UndoRedoActionRotatedEntity | UndoRedoActionUpgradedEntity | UndoRedoActionUpgradedModules | UndoRedoActionWireAdded | UndoRedoActionWireRemoved;
/**
 *
 * Applies to variant case `built-entity`
 */
interface UndoRedoActionBuiltEntity extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'built-entity';
    /**
     * The specification of the built entity.
     */
    'target': BlueprintEntity;
}
/**
 *
 * Applies to variant case `built-tile`
 */
interface UndoRedoActionBuiltTile extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'built-tile';
    /**
     * The prototype name of the newly built tile.
     */
    'new_tile': string;
    /**
     * The position of the newly built tile.
     */
    'position': TilePosition;
    /**
     * The prototype name of the replaced tile, if any was replaced.
     */
    'previous_tile'?: string;
    /**
     * The surface on which the tile was built.
     */
    'surface_index': uint;
}
/**
 *
 * Applies to variant case `copy-entity-settings`
 */
interface UndoRedoActionCopyEntitySettings extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'copy-entity-settings';
    'entity_with_previous_settings'?: BlueprintEntity;
    'target'?: BlueprintEntity;
}
/**
 *
 * Applies to variant case `removed-entity`
 */
interface UndoRedoActionRemovedEntity extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'removed-entity';
    /**
     * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Not present for entities the game can't restore, like trees or rocks.
     */
    'insert_plan'?: BlueprintInsertPlan[];
    /**
     * The schedule of the entity, if it has one. Only relevant for locomotives. Not present for entities the game can't restore, like trees or rocks.
     */
    'schedule'?: BlueprintSchedule;
    /**
     * The surface from which the entity was removed. Not present for entities the game can't restore, like trees or rocks.
     */
    'surface_index'?: uint;
    /**
     * The specification of the removed entity.
     */
    'target': BlueprintEntity;
}
/**
 *
 * Applies to variant case `removed-tile`
 */
interface UndoRedoActionRemovedTile extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'removed-tile';
    /**
     * The position of the removed tile.
     */
    'position': TilePosition;
    /**
     * The prototype name of the removed tile.
     */
    'previous_tile': string;
    /**
     * The surface from which the tile was removed.
     */
    'surface_index': uint;
}
/**
 *
 * Applies to variant case `rotated-entity`
 */
interface UndoRedoActionRotatedEntity extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'rotated-entity';
    /**
     * The direction of the entity before upgrading.
     */
    'original_direction': defines.direction;
    'original_mirroring': boolean;
    /**
     * The specification of the rotated entity.
     */
    'target': BlueprintEntity;
}
/**
 *
 * Applies to variant case `upgraded-entity`
 */
interface UndoRedoActionUpgradedEntity extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'upgraded-entity';
    /**
     * The prototype name of the upgraded entity.
     */
    'original_name': string;
    /**
     * The quality prototype name of the entity before upgrading.
     */
    'original_quality_name': string;
    /**
     * The specification of the upgraded entity.
     */
    'target': BlueprintEntity;
}
/**
 *
 * Applies to variant case `upgraded-modules`
 */
interface UndoRedoActionUpgradedModules extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'upgraded-modules';
    /**
     * The modules present in the target before the upgrade.
     */
    'modules_before': BlueprintInsertPlan;
    /**
     * The specification of the upgraded entity.
     */
    'target': BlueprintEntity;
}
/**
 *
 * Applies to variant case `wire-added`
 */
interface UndoRedoActionWireAdded extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'wire-added';
    'a': BlueprintWireEnd;
    'b': BlueprintWireEnd;
}
/**
 *
 * Applies to variant case `wire-removed`
 */
interface UndoRedoActionWireRemoved extends BaseUndoRedoAction {
    /**
     * The type of action that was undone or redone.
     */
    'type': 'wire-removed';
    'a': BlueprintWireEnd;
    'b': BlueprintWireEnd;
}
interface UnitGroupMapSettings {
    /**
     * The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3 600` ticks.
     */
    min_group_gathering_time: uint;
    /**
     * The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3 600=36 000` ticks.
     */
    max_group_gathering_time: uint;
    /**
     * After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3 600=7 200` ticks.
     */
    max_wait_time_for_late_members: uint;
    /**
     * The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`.
     */
    min_group_radius: double;
    /**
     * The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`.
     */
    max_group_radius: double;
    /**
     * The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%.
     */
    max_member_speedup_when_behind: double;
    /**
     * The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%.
     */
    max_member_slowdown_when_ahead: double;
    /**
     * The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%.
     */
    max_group_slowdown_factor: double;
    /**
     * When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`.
     */
    max_group_member_fallback_factor: double;
    /**
     * When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`.
     */
    member_disown_distance: double;
    tick_tolerance_when_member_arrives: uint;
    /**
     * The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`.
     */
    max_gathering_unit_groups: uint;
    /**
     * The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`.
     */
    max_unit_group_size: uint;
}
interface UnitSpawnDefinition {
    /**
     * Prototype name of the unit that would be spawned.
     */
    unit: string;
    /**
     * The points at which to spawn the unit.
     */
    spawn_points: SpawnPointDefinition[];
}
interface UpgradeMapperDestination {
    /**
     * `"item"`, or `"entity"`.
     */
    type: string;
    /**
     * Name of the item, or entity.
     */
    name?: string;
    /**
     * Name of the quality.
     */
    quality?: string;
    /**
     * when type is `"item"` and the mapper is configured to install modules the limit per machine. If `0` then no limit.
     */
    count?: uint;
}
interface UpgradeMapperSource {
    type: 'item' | 'entity';
    /**
     * Name of the item, or entity.
     */
    name?: string;
    /**
     * Name of the quality prototype.
     */
    quality?: string;
    /**
     * The quality comparison type.
     */
    comparator?: ComparatorString;
}
/**
 * A vector is a two-element array or dictionary containing the `x` and `y` components. The game will always provide the array format. Positive x goes east, positive y goes south.
 * @example ```
right = {1.0, 0.0}
```
 */
type Vector = {
    x: float;
    y: float;
} | [
    float,
    float
];
/**
 * Reading this always returns the table with the named keys.
 *
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
interface VehicleAutomaticTargetingParameters {
    auto_target_without_gunner: boolean;
    auto_target_with_gunner: boolean;
}
/**
 * The text is aligned so that the target position is at the given side of the text.
 *
 * For example, `"top"` aligned text means the top of the text is at the target position. Or in other words, the target is at the top of the text.
 */
type VerticalTextAlign = 'top' | 'middle' | 'baseline' | 'bottom';
/**
 * A virtual signal prototype may be specified in one of two ways.
 */
type VirtualSignalID = /**
 * The virtual signal prototype.
 */
LuaVirtualSignalPrototype | /**
 * The prototype name.
 */
string;
interface WaitCondition {
    type: WaitConditionType;
    /**
     * Specifies how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array. Always present when reading, defaults to `"and"` when writing.
     */
    compare_type?: 'and' | 'or';
    /**
     * Number of ticks to wait when `type` is `"time"`, or number of ticks of inactivity when `type` is `"inactivity"`.
     */
    ticks?: uint;
    /**
     * This is a CircuitCondition and only present when `type` is `"item_count"`, `"circuit"`, `"fluid_count"`, `"fuel_item_count_all"`, or `"fuel_item_count_any"`, and a circuit condition is configured. This is a ItemIDAndQualityIDPair and only present when `type` is `"request_satisfied"` or `"request_not_satisfied"`
     */
    condition?: CircuitCondition | ItemIDAndQualityIDPair;
    /**
     * Name of the space location. Only present when `type` is "`any_planet_import_zero`" and a planet is configured.
     */
    planet?: string;
    /**
     * Name of the station. Only present when `type` is "`specific_destination_full`", "`specific_destination_not_full`", "`at_station`", or "`not_at_station`", and a station is configured.
     */
    station?: string;
    /**
     * Amount of damage to take when `type` is `"damage_taken"`.
     */
    damage?: uint;
}
/**
 * Type of a {@link WaitCondition | runtime:WaitCondition}.
 */
type WaitConditionType = 'time' | 'full' | 'empty' | 'not_empty' | 'item_count' | 'circuit' | 'inactivity' | 'robots_inactive' | 'fluid_count' | 'passenger_present' | 'passenger_not_present' | 'fuel_item_count_all' | 'fuel_item_count_any' | 'fuel_full' | 'destination_full_or_no_path' | 'request_satisfied' | 'request_not_satisfied' | 'all_requests_satisfied' | 'any_request_not_satisfied' | 'any_request_zero' | 'any_planet_import_zero' | 'specific_destination_full' | 'specific_destination_not_full' | 'at_station' | 'not_at_station' | 'damage_taken';
interface WireConnection {
    target: LuaWireConnector;
    /**
     * Defaults to defines.wire_origin.player
     */
    origin?: defines.wire_origin;
}
interface WorkerRobotOrder {
    /**
     * The type of the order.
     */
    type: defines.robot_order_type;
    /**
     * The target of the order.
     */
    target?: LuaEntity;
    /**
     * The item to place if relevant.
     */
    item_to_place?: SimpleItemStack;
    /**
     * The secondary target of the upgrade order.
     */
    secondary_target?: LuaEntity;
    /**
     * The cliff explosive for the cliff explode job.
     */
    cliff_explosive_id?: LuaItemPrototype;
    /**
     * The target item of the pickup or deliver order.
     */
    target_item?: ItemIDAndQualityIDPair;
    /**
     * The target count of the pickup or deliver order.
     */
    target_count?: ItemCountType;
}
/**
 * A double-precision floating-point number. This is the same data type as all Lua numbers use.
 */
type double = number;
/**
 * A floating-point number. This is a single-precision floating point number. Whilst Lua only uses double-precision numbers, when a function takes a float, the game engine will immediately convert the double-precision number to single-precision.
 */
type float = number;
/**
 * 32-bit signed integer. Possible values are `-2 147 483 648` to `2 147 483 647`.
 *
 * Since Lua 5.2 only uses doubles, any API that asks for `int` will floor the given double.
 */
type int = number;
/**
 * 8-bit signed integer. Possible values are `-128` to `127`.
 *
 * Since Lua 5.2 only uses doubles, any API that asks for `int8` will floor the given double.
 */
type int8 = number;
/**
 * Nil is the type of the value `nil`, whose main property is to be different from any other value. It usually represents the absence of a useful value.
 */
type nil = null;
/**
 * Tables are enclosed in curly brackets, like this `{}`.
 *
 * Throughout the API docs, the terms "array" and "dictionary" are used. These are fundamentally just {@link Lua tables | http://www.lua.org/pil/2.5.html}, but have a limitation on which kind of table keys can be used. An array is a table that uses continuous integer keys starting at `1`, while a dictionary can use numeric or string keys in any order or combination.
 */
type table = Table;
/**
 * 32-bit unsigned integer. Possible values are `0` to `4 294 967 295`.
 *
 * Since Lua 5.2 only uses doubles, any API that asks for `uint` will floor the given double.
 */
type uint = number;
/**
 * 16-bit unsigned integer. Possible values are `0` to `65 535`.
 *
 * Since Lua 5.2 only uses doubles, any API that asks for `uint16` will floor the given double.
 */
type uint16 = number;
/**
 * 64-bit unsigned integer. Possible values are `0` to `18 446 744 073 709 551 615`.
 *
 * Since Lua 5.2 only uses doubles, any API that asks for `uint64` will floor the given double.
 */
type uint64 = number;
/**
 * 8-bit unsigned integer. Possible values are `0` to `255`.
 *
 * Since Lua 5.2 only uses doubles, any API that asks for `uint8` will floor the given double.
 */
type uint8 = number;

}