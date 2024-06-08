// Factorio concept definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.109
// API version 5

declare namespace runtime {
/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface AchievementPrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'allowed-without-fight' | 'type',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

interface AdvancedMapGenSettings {
    difficulty_settings: DifficultySettings,
    enemy_evolution: EnemyEvolutionMapSettings,
    enemy_expansion: EnemyExpansionMapSettings,
    pollution: PollutionMapSettings
}

interface Alert {
    
    /**
     * The SignalID used for a custom alert. Only present for custom alerts.
     */
    icon?: SignalID,
    
    /**
     * The message for a custom alert. Only present for custom alerts.
     */
    message?: LocalisedString,
    position?: MapPosition,
    prototype?: LuaEntityPrototype,
    target?: LuaEntity,
    
    /**
     * The tick this alert was created.
     */
    tick: uint
}

/**
 * A {@link string | runtime:string} that specifies where a GUI element should be.
 */
type Alignment = 'top-left' | 'middle-left' | /* The same as `"middle-left"` */ 'left' | 'bottom-left' | 'top-center' | 'middle-center' | /* The same as `"middle-center"` */ 'center' | 'bottom-center' | 'top-right' | /* The same as `"middle-right"` */ 'right' | 'bottom-right'

interface AmmoType {
    action?: TriggerItem[],
    
    /**
     * Ammo category of this ammo.
     */
    category: string,
    
    /**
     * When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`.
     */
    clamp_position?: boolean,
    consumption_modifier?: double,
    cooldown_modifier?: double,
    
    /**
     * Energy consumption of a single shot, if applicable. Defaults to `0`.
     */
    energy_consumption?: double,
    range_modifier?: double,
    target_type: TargetType
}

/**
 * Any basic type (string, number, boolean), table, or LuaObject.
 */
type Any = string | boolean | number | table | LuaObject

/**
 * Any basic type (string, number, boolean) or table.
 */
type AnyBasic = string | boolean | number | table

interface ArithmeticCombinatorParameters {
    
    /**
     * Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`.
     */
    first_constant?: int,
    
    /**
     * First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`.
     */
    first_signal?: SignalID,
    
    /**
     * When not specified, defaults to `"*"`.
     */
    operation?: '*' | '/' | '+' | '-' | '%' | '^' | '<<' | '>>' | 'AND' | 'OR' | 'XOR',
    
    /**
     * Specifies the signal to output.
     */
    output_signal?: SignalID,
    
    /**
     * Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`.
     */
    second_constant?: int,
    
    /**
     * Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`.
     */
    second_signal?: SignalID
}

interface AttackParameterFluid {
    
    /**
     * Multiplier applied to the damage of an attack.
     */
    damage_modifier: double,
    
    /**
     * Name of the {@link LuaFluidPrototype | runtime:LuaFluidPrototype}.
     */
    type: string
}

/**
 * 
 * Other attributes may be specified depending on `type`:
 */
interface AttackParameters {
    
    /**
     * List of the names of compatible {@link LuaAmmoCategoryPrototypes | runtime:LuaAmmoCategoryPrototype}.
     */
    ammo_categories?: string[],
    
    /**
     * Multiplier applied to the ammo consumption of an attack.
     */
    ammo_consumption_modifier: float,
    ammo_type?: AmmoType,
    
    /**
     * Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick.
     */
    cooldown: float,
    
    /**
     * Multiplier applied to the damage of an attack.
     */
    damage_modifier: float,
    
    /**
     * When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire.
     */
    fire_penalty: float,
    
    /**
     * When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite.
     */
    health_penalty: float,
    
    /**
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters.
     */
    min_attack_distance: float,
    
    /**
     * Minimum range of attack. Used with flamethrower turrets to prevent self-immolation.
     */
    min_range: float,
    movement_slow_down_cooldown: float,
    movement_slow_down_factor: double,
    
    /**
     * Maximum range of attack.
     */
    range: float,
    
    /**
     * Defines how the range is determined.
     */
    range_mode: 'center-to-center' | 'bounding-box-to-bounding-box',
    
    /**
     * When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face.
     */
    rotate_penalty: float,
    
    /**
     * The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees.
     */
    turn_range: float,
    
    /**
     * The type of AttackParameter.
     */
    type: 'projectile' | 'stream' | 'beam',
    
    /**
     * Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so.
     */
    warmup: uint
}

interface AutoplaceControl {
    
    /**
     * For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the {@link LuaAutoplaceControlPrototype | runtime:LuaAutoplaceControlPrototype} is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency.
     */
    frequency: MapGenSize,
    
    /**
     * Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health.  For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the {@link LuaAutoplaceControlPrototype | runtime:LuaAutoplaceControlPrototype} by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness.
     */
    richness: MapGenSize,
    
    /**
     * For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
     */
    size: MapGenSize
}

interface AutoplaceSettings {
    
    /**
     * Always defined when reading autoplace settings.
     */
    settings?: {[key: string]: AutoplaceControl},
    
    /**
     * Whether missing autoplace names for this type should be default enabled. Always defined when reading autoplace settings.
     */
    treat_missing_as_default?: boolean
}

/**
 * Specifies how probability and richness are calculated when placing something on the map. Can be specified either using `probability_expression` and `richness_expression` or by using all the other fields.
 */
interface AutoplaceSpecification {
    
    /**
     * Control prototype name.
     */
    control?: string,
    coverage: double,
    default_enabled: boolean,
    force: string,
    max_probability: double,
    order: string,
    peaks?: AutoplaceSpecificationPeak[],
    placement_density: uint,
    probability_expression: NoiseExpression,
    random_probability_penalty: double,
    richness_base: double,
    richness_expression: NoiseExpression,
    richness_multiplier: double,
    richness_multiplier_distance_bonus: double,
    sharpness: double,
    starting_area_size: uint,
    tile_restriction?: AutoplaceSpecificationRestriction[]
}

interface AutoplaceSpecificationPeak {
    aux_max_range: double,
    aux_optimal: double,
    aux_range: double,
    aux_top_property_limit: double,
    distance_max_range: double,
    distance_optimal: double,
    distance_range: double,
    distance_top_property_limit: double,
    elevation_max_range: double,
    elevation_optimal: double,
    elevation_range: double,
    elevation_top_property_limit: double,
    influence: double,
    max_influence: double,
    min_influence: double,
    noisePersistence: double,
    
    /**
     * Prototype name of the noise layer.
     */
    noise_layer?: string,
    noise_octaves_difference: double,
    richness_influence: double,
    starting_area_weight_max_range: double,
    starting_area_weight_optimal: double,
    starting_area_weight_range: double,
    starting_area_weight_top_property_limit: double,
    temperature_max_range: double,
    temperature_optimal: double,
    temperature_range: double,
    temperature_top_property_limit: double,
    tier_from_start_max_range: double,
    tier_from_start_optimal: double,
    tier_from_start_range: double,
    tier_from_start_top_property_limit: double,
    water_max_range: double,
    water_optimal: double,
    water_range: double,
    water_top_property_limit: double
}

interface AutoplaceSpecificationRestriction {
    
    /**
     * Tile prototype name
     */
    first?: string,
    
    /**
     * Second prototype name
     */
    second?: string
}

interface BeamTarget {
    
    /**
     * The target entity.
     */
    entity?: LuaEntity,
    
    /**
     * The target position.
     */
    position?: MapPosition
}

/**
 * The representation of an entity inside of a blueprint. It has at least these fields, but can contain additional ones depending on the kind of entity.
 */
interface BlueprintEntity {
    
    /**
     * The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit connections.
     */
    connections?: BlueprintCircuitConnection,
    
    /**
     * The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors.
     */
    control_behavior?: BlueprintControlBehavior,
    
    /**
     * The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north.
     */
    direction?: defines.direction,
    
    /**
     * The entity's unique identifier in the blueprint.
     */
    entity_number: uint,
    
    /**
     * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts.
     */
    items?: {[key: string]: uint},
    
    /**
     * The prototype name of the entity.
     */
    name: string,
    
    /**
     * The position of the entity.
     */
    position: MapPosition,
    
    /**
     * The schedule of the entity, if it has one. Only relevant for locomotives.
     */
    schedule?: TrainScheduleRecord[],
    
    /**
     * The entity tags of the entity, if there are any. Only relevant for entity ghosts.
     */
    tags?: Tags
}

interface BlueprintSignalIcon {
    
    /**
     * Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4].
     */
    index: uint,
    
    /**
     * The icon to use. It can be any item icon as well as any virtual signal icon.
     */
    signal: SignalID
}

/**
 * Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with {@link MapPosition | runtime:MapPosition}, the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero.
 * @example
 * ```
 * -- Explicit definition
 * {left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
 * ```
 *
 * @example
 * ```
 * -- Shorthand
 * {{-2, -3}, {5, 8}}
 * ```
 *
 */
type BoundingBox = {
    left_top: MapPosition,
    orientation?: RealOrientation,
    right_bottom: MapPosition
} | 
[    MapPosition,
    MapPosition
]

/**
 * 
 * Other attributes may be specified depending on `type`:
 */
interface CapsuleAction {
    type: 'throw' | 'equipment-remote' | 'use-on-self' | 'artillery-remote' | 'destroy-cliffs'
}

/**
 * Either `icon`, `text`, or both must be provided.
 */
interface ChartTagSpec {
    icon?: SignalID,
    last_user?: PlayerIdentification,
    position: MapPosition,
    text?: string
}

/**
 * Coordinates of a chunk in a {@link LuaSurface | runtime:LuaSurface} where each integer `x`/`y` represents a different chunk. This uses the same format as {@link MapPosition | runtime:MapPosition}, meaning it can be specified either with or without explicit keys. A {@link MapPosition | runtime:MapPosition} can be translated to a ChunkPosition by dividing the `x`/`y` values by 32.
 */
type ChunkPosition = {
    x: int,
    y: int
} | 
[    int,
    int
]

/**
 * A {@link ChunkPosition | runtime:ChunkPosition} with an added bounding box for the area of the chunk.
 */
interface ChunkPositionAndArea {
    area: BoundingBox,
    x: int,
    y: int
}

interface CircuitCondition {
    
    /**
     * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
     */
    comparator?: ComparatorString,
    
    /**
     * Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
     */
    constant?: int,
    
    /**
     * Defaults to blank
     */
    first_signal?: SignalID,
    
    /**
     * What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`.
     */
    second_signal?: SignalID
}

interface CircuitConditionDefinition {
    condition: CircuitCondition,
    
    /**
     * Whether the condition is currently fulfilled
     */
    fulfilled?: boolean
}

interface CircuitConnectionDefinition {
    source_circuit_id: defines.circuit_connector_id,
    target_circuit_id: defines.circuit_connector_id,
    target_entity: LuaEntity,
    
    /**
     * Wire color, either {@link defines.wire_type.red | runtime:defines.wire_type.red} or {@link defines.wire_type.green | runtime:defines.wire_type.green}.
     */
    wire: defines.wire_type
}

interface CircularParticleCreationSpecification {
    
    /**
     * This vector is a table with `x` and `y` keys instead of an array.
     */
    center: Vector,
    creation_distance: double,
    creation_distance_orientation: double,
    direction: float,
    direction_deviation: float,
    height: float,
    height_deviation: float,
    
    /**
     * Name of the {@link LuaEntityPrototype | runtime:LuaEntityPrototype}.
     */
    name: string,
    speed: float,
    speed_deviation: float,
    starting_frame_speed: float,
    starting_frame_speed_deviation: float,
    use_source_position: boolean,
    vertical_speed: float,
    vertical_speed_deviation: float
}

type CircularProjectileCreationSpecification = 
[    RealOrientation,
    Vector
]

type CliffOrientation = 'west-to-east' | 'north-to-south' | 'east-to-west' | 'south-to-north' | 'west-to-north' | 'north-to-east' | 'east-to-south' | 'south-to-west' | 'west-to-south' | 'north-to-west' | 'east-to-north' | 'south-to-east' | 'west-to-none' | 'none-to-east' | 'east-to-none' | 'none-to-west' | 'north-to-none' | 'none-to-south' | 'south-to-none' | 'none-to-north'

interface CliffPlacementSettings {
    
    /**
     * Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI.
     */
    cliff_elevation_0: float,
    
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     */
    cliff_elevation_interval: float,
    
    /**
     * Name of the cliff prototype.
     */
    name: string,
    
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     */
    richness: MapGenSize
}

/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 */
type CollisionMask = {[key: string]: true}

/**
 * A {@link string | runtime:string} specifying a collision mask layer.
 * 
 * In addition to the listed layers, there is `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones.
 */
type CollisionMaskLayer = 'ground-tile' | 'water-tile' | 'resource-layer' | 'doodad-layer' | 'floor-layer' | 'item-layer' | 'ghost-layer' | 'object-layer' | 'player-layer' | 'train-layer' | 'rail-layer' | 'transport-belt-layer' | 'not-setup' | 'layer-13' | 'layer-14' | 'layer-15' | 'layer-16' | 'layer-17' | 'layer-18' | 'layer-19' | 'layer-20' | 'layer-21' | 'layer-22' | 'layer-23' | 'layer-24' | 'layer-25' | 'layer-26' | 'layer-27' | 'layer-28' | 'layer-29' | 'layer-30' | 'layer-31' | 'layer-32' | 'layer-33' | 'layer-34' | 'layer-35' | 'layer-36' | 'layer-37' | 'layer-38' | 'layer-39' | 'layer-40' | 'layer-41' | 'layer-42' | 'layer-43' | 'layer-44' | 'layer-45' | 'layer-46' | 'layer-47' | 'layer-48' | 'layer-49' | 'layer-50' | 'layer-51' | 'layer-52' | 'layer-53' | 'layer-54' | 'layer-55'

/**
 * A {@link CollisionMask | runtime:CollisionMask} which also includes any flags this mask has.
 */
type CollisionMaskWithFlags = {[key: string]: true}

/**
 * Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.
 * 
 * Similar to {@link MapPosition | runtime:MapPosition}, Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
 * @example
 * ```
 * red1 = {r = 0.5, g = 0, b = 0, a = 0.5}  -- Half-opacity red
 * red2 = {r = 0.5, a = 0.5}                -- Same color as red1
 * black = {}                               -- All channels omitted: black
 * red1_short = {0.5, 0, 0, 0.5}            -- Same color as red1 in short-hand notation
 * ```
 *
 */
type Color = {
    a?: float,
    b?: float,
    g?: float,
    r?: float
} | 
[    float,
    float,
    float,
    float
]

/**
 * Same as {@link Color | runtime:Color}, but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255].
 */
type ColorModifier = {
    a?: float,
    b?: float,
    g?: float,
    r?: float
} | 
[    float,
    float,
    float,
    float
]

/**
 * Commands can be given to enemies and unit groups.
 * Other attributes may be specified depending on `type`:
 */
interface Command {
    
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    type: defines.command
}

/**
 * A string that specifies how the inputs should be compared
 * 
 * While the API accepts both versions for `"less/greater than or equal to"` and `"not equal"`, it'll always return `"≥"`, `"≤"` or `"≠"` respectively when reading them back.
 */
type ComparatorString = /* "equal to" */ '=' | /* "greater than" */ '>' | /* "lesser than" */ '<' | /* "greater than or equal to" */ '≥' | /* "greater than or equal to" */ '>=' | /* "lesser than or equal to" */ '≤' | /* "lesser than or equal to" */ '<=' | /* "not equal to" */ '≠' | /* "not equal to" */ '!='

interface ConfigurationChangedData {
    
    /**
     * `true` when mod prototype migrations have been applied since the last time this save was loaded.
     */
    migration_applied: boolean,
    
    /**
     * Dictionary of mod changes. It is indexed by mod name.
     */
    mod_changes: {[key: string]: ModChangeData},
    
    /**
     * `true` when mod startup settings have changed since the last time this save was loaded.
     */
    mod_startup_settings_changed: boolean,
    
    /**
     * New version of the map. Present only when loading map version other than the current version.
     */
    new_version?: string,
    
    /**
     * Old version of the map. Present only when loading map version other than the current version.
     */
    old_version?: string
}

interface ConstantCombinatorParameters {
    
    /**
     * Value of the signal to emit.
     */
    count: int,
    
    /**
     * Index of the constant combinator's slot to set this signal to.
     */
    index: uint,
    
    /**
     * Signal to emit.
     */
    signal: SignalID
}

interface CopperConnectionDefinition {
    source_wire_connector: defines.wire_connection_id,
    target_entity: LuaEntity,
    target_wire_connector: defines.wire_connection_id
}

interface CraftingQueueItem {
    
    /**
     * The amount of items being crafted.
     */
    count: uint,
    
    /**
     * The index of the item in the crafting queue.
     */
    index: uint,
    
    /**
     * The item is a prerequisite for another item in the queue.
     */
    prerequisite: boolean,
    
    /**
     * The recipe being crafted.
     */
    recipe: string
}

/**
 * One of the following values:
 */
type CursorBoxRenderType = /* The normal entity selection box. Yellow by default. */ 'entity' | /* The selection box used to specify electric poles an entity is connected to. Light blue by default. */ 'electricity' | /* The selection box used when doing entity copy-paste. Green by default. */ 'copy' | /* The selection box used when specifying colliding entities. Red by default. */ 'not-allowed' | /* Light blue by default. */ 'pair' | /* Light blue by default. */ 'logistics' | /* White by default. */ 'train-visualization' | /* Green by default. */ 'blueprint-snap-rectangle'

interface CustomCommandData {
    
    /**
     * The name of the command.
     */
    name: string,
    
    /**
     * The parameter passed after the command, if there is one.
     */
    parameter?: string,
    
    /**
     * The player who issued the command, or `nil` if it was issued from the server console.
     */
    player_index?: uint,
    
    /**
     * The tick the command was used in.
     */
    tick: uint
}

interface CutsceneWaypoint {
    
    /**
     * Position to pan the camera to.
     */
    position?: MapPosition,
    
    /**
     * Entity or unit group to pan the camera to.
     */
    target?: LuaEntity | LuaUnitGroup,
    
    /**
     * Time in ticks to wait before moving to the next waypoint.
     */
    time_to_wait: uint,
    
    /**
     * How many ticks it will take to reach this waypoint from the previous one.
     */
    transition_time: uint,
    
    /**
     * Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used.
     */
    zoom?: double
}

interface DamageTypeFilters {
    
    /**
     * The damage types to filter for. The value in the dictionary is meaningless and exists just to allow for easy lookup.
     */
    types: {[key: string]: true},
    
    /**
     * Whether this is a whitelist or a blacklist of damage types. `true` means whitelist.
     */
    whitelist: boolean
}

interface DeciderCombinatorParameters {
    
    /**
     * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
     */
    comparator?: ComparatorString,
    
    /**
     * Constant to use as the second argument of operation. Defaults to `0`.
     */
    constant?: uint,
    
    /**
     * Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`.
     */
    copy_count_from_input?: boolean,
    
    /**
     * Defaults to blank.
     */
    first_signal?: SignalID,
    
    /**
     * Defaults to blank.
     */
    output_signal?: SignalID,
    
    /**
     * Second signal to use in an operation, if any. If this is not specified, the second argument to a decider combinator's operation is assumed to be the value of `constant`.
     */
    second_signal?: SignalID
}

interface Decorative {
    amount: uint8,
    
    /**
     * The name of the decorative prototype.
     */
    name: string,
    position: TilePosition
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface DecorativePrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'decal' | 'autoplace' | 'collision-mask',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

interface DecorativeResult {
    amount: uint,
    decorative: LuaDecorativePrototype,
    position: TilePosition
}

/**
 * Technology and recipe difficulty settings. Updating any of the attributes will immediately take effect in the game engine.
 */
interface DifficultySettings {
    recipe_difficulty: defines.difficulty_settings.recipe_difficulty

    /**
     * Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See {@link LuaForce::research_queue_enabled | runtime:LuaForce::research_queue_enabled} for that.
     */
    research_queue_setting: 'after-victory' | 'always' | 'never'

    technology_difficulty: defines.difficulty_settings.technology_difficulty

    /**
     * A value in range [0.001, 1000].
     */
    technology_price_multiplier: double

}

interface DisplayResolution {
    height: uint,
    width: uint
}

interface DragTarget {
    
    /**
     * If the wire being dragged is a circuit wire this is the connector id.
     */
    target_circuit_id?: defines.circuit_connector_id,
    target_entity: LuaEntity,
    
    /**
     * If the wire being dragged is copper wire this is the wire id.
     */
    target_wire_id?: defines.wire_connection_id
}

interface ElemID {
    
    /**
     * Name of a prototype as defined by `type`.
     */
    name: string,
    type: ElemType
}

/**
 * A {@link string | runtime:string} specifying a type for {@link choose elem buttons | runtime:LuaGuiElement::elem_type}. It's also used by {@link ElemID | runtime:ElemID} for {@link LuaGuiElement::elem_tooltip | runtime:LuaGuiElement::elem_tooltip}.
 */
type ElemType = 'achievement' | 'decorative' | 'entity' | 'equipment' | 'fluid' | 'item' | 'item-group' | 'recipe' | 'signal' | 'technology' | 'tile'

/**
 * These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%.
 */
interface EnemyEvolutionMapSettings {
    
    /**
     * The amount evolution progresses for every destroyed spawner. Defaults to `0.002`.
     */
    destroy_factor: double,
    
    /**
     * Whether enemy evolution is enabled at all.
     */
    enabled: boolean,
    
    /**
     * The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`.
     */
    pollution_factor: double,
    
    /**
     * The amount evolution naturally progresses by every second. Defaults to `0.000004`.
     */
    time_factor: double
}

/**
 * Candidate chunks are given scores to determine which one of them should be expanded into. This score takes into account various settings noted below. The iteration is over a square region centered around the chunk for which the calculation is done, and includes the central chunk as well. Distances are calculated as {@link Manhattan distance | https://en.wikipedia.org/wiki/Taxicab_geometry}.
 * 
 * The pseudocode algorithm to determine a chunk's score is as follows: 
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
     * Defaults to `0.1`.
     */
    building_coefficient: double,
    
    /**
     * Whether enemy expansion is enabled at all.
     */
    enabled: boolean,
    
    /**
     * Defaults to `2`.
     */
    enemy_building_influence_radius: uint,
    
    /**
     * Defaults to `2`.
     */
    friendly_base_influence_radius: uint,
    
    /**
     * A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%.
     */
    max_colliding_tiles_coefficient: double,
    
    /**
     * The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3 600=216 000` ticks.
     */
    max_expansion_cooldown: uint,
    
    /**
     * Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`.
     */
    max_expansion_distance: uint,
    
    /**
     * The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3 600=14 400` ticks.
     */
    min_expansion_cooldown: uint,
    
    /**
     * Defaults to `0.4`.
     */
    neighbouring_base_chunk_coefficient: double,
    
    /**
     * Defaults to `0.5`.
     */
    neighbouring_chunk_coefficient: double,
    
    /**
     * Defaults to `2.0`.
     */
    other_base_coefficient: double,
    
    /**
     * The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`.
     */
    settler_group_max_size: uint,
    
    /**
     * The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`.
     */
    settler_group_min_size: uint
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface EntityPrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'flying-robot' | 'robot-with-logistics-interface' | 'rail' | 'ghost' | 'explosion' | 'vehicle' | 'crafting-machine' | 'rolling-stock' | 'turret' | 'transport-belt-connectable' | 'wall-connectable' | 'buildable' | 'placable-in-editor' | 'clonable' | 'selectable' | 'hidden' | 'entity-with-health' | 'building' | 'fast-replaceable' | 'uses-direction' | 'minable' | 'circuit-connectable' | 'autoplace' | 'blueprintable' | 'item-to-place' | 'name' | 'type' | 'collision-mask' | 'flag' | 'build-base-evolution-requirement' | 'selection-priority' | 'emissions' | 'crafting-category',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * A {@link string | runtime:string} specifying an entity prototype flag.
 */
type EntityPrototypeFlag = /* Prevents the entity from being rotated before or after placement. */ 'not-rotatable' | /* Determines the default force when placing entities in the map editor and using the "AUTO" option for the force. */ 'placeable-neutral' | /* Determines the default force when placing entities in the map editor and using the "AUTO" option for the force. */ 'placeable-player' | /* Determines the default force when placing entities in the map editor and using the "AUTO" option for the force. */ 'placeable-enemy' | /* Determines whether the entity needs to be aligned with the invisible grid within the world. Most entities are confined in this way, with a few exceptions such as trees and land mines. */ 'placeable-off-grid' | /* Makes it possible to blueprint, deconstruct, and repair the entity (which can be turned off again using the specific flags). Makes it possible for the biter AI to target the entity as a distraction. Enables dust to automatically be created when building the entity. If the entity does not have a `map_color` set, this flag makes the entity appear on the map with the default color specified by the UtilityConstants. */ 'player-creation' | /* Uses 45 degree angle increments when selecting direction. */ 'building-direction-8-way' | /* Used to automatically detect the proper direction of the entity if possible. Used by the pump, train stop, and train signal by default. */ 'filter-directions' | /* Fast replace will not apply when building while moving. */ 'fast-replaceable-no-build-while-moving' | /* Used to specify that the entity breathes air, and is thus affected by poison. */ 'breaths-air' | /* Used to specify that the entity can not be 'healed' by repair packs. */ 'not-repairable' | /* Prevents the entity from being drawn on the map. */ 'not-on-map' | /* Prevents the entity from being deconstructed. */ 'not-deconstructable' | /* Prevents the entity from being part of a blueprint. */ 'not-blueprintable' | /* Hides the entity from the bonus GUI and from the "made in"-property of recipe tooltips. */ 'hidden' | /* Hides the alt-info of this entity when in alt-mode. */ 'hide-alt-info' | /* Does not fast replace this entity over other entity types when building while moving. */ 'fast-replaceable-no-cross-type-while-moving' | 'no-gap-fill-while-building' | /* Does not apply fire stickers to the entity. */ 'not-flammable' | /* Prevents inserters and loaders from taking items from this entity. */ 'no-automated-item-removal' | /* Prevents inserters and loaders from inserting items into this entity. */ 'no-automated-item-insertion' | /* Prevents the entity from being copy-pasted. */ 'no-copy-paste' | /* Disallows selection of the entity even when a selection box is specified for other reasons. For example, selection boxes are used to determine the size of outlines to be shown when highlighting entities inside electric pole ranges. */ 'not-selectable-in-game' | /* Prevents the entity from being selected by the upgrade planner. */ 'not-upgradable' | /* Prevents the entity from being shown in the kill statistics. */ 'not-in-kill-statistics' | /* Prevents the entity from being shown in the "made in" list in recipe tooltips. */ 'not-in-made-in'

/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all. By default, none of these flags are set.
 */
type EntityPrototypeFlags = {[key: string]: true}

/**
 * An entity prototype may be specified in one of three ways.
 */
type EntityPrototypeIdentification = /* The entity. */ LuaEntity | /* The entity prototype. */ LuaEntityPrototype | /* The prototype name. */ string

/**
 * A table used to define a manual shape for a piece of equipment.
 */
interface EquipmentPoint {
    x: uint,
    y: uint
}

/**
 * Position inside an equipment grid. This uses the same format as {@link MapPosition | runtime:MapPosition}, meaning it can be specified either with or without explicit keys.
 * @example
 * ```
 * -- Explicit definition
 * {x = 5, y = 2}
 * {y = 2, x = 5}
 * ```
 *
 * @example
 * ```
 * -- Shorthand
 * {1, 2}
 * ```
 *
 */
type EquipmentPosition = {
    x: int,
    y: int
} | 
[    int,
    int
]

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface EquipmentPrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'item-to-place' | 'type',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * Information about the event that has been raised. The table can also contain other fields depending on the type of event. See {@link the list of Factorio events | runtime:events} for more information on these.
 */
interface EventData {
    
    /**
     * The name of the mod that raised the event if it was raised using {@link LuaBootstrap::raise_event | runtime:LuaBootstrap::raise_event}.
     */
    mod_name?: string,
    
    /**
     * The identifier of the event this handler was registered to.
     */
    name: defines.events,
    
    /**
     * The tick during which the event happened.
     */
    tick: uint
}

/**
 * Used to filter out irrelevant event callbacks in a performant way.
 * 
 * Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
 */
type EventFilter = Array<LuaScriptRaisedReviveEventFilter | LuaEntityDiedEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaPlayerRepairedEntityEventFilter | LuaScriptRaisedTeleportedEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaPostEntityDiedEventFilter | LuaPreRobotMinedEntityEventFilter | LuaEntityClonedEventFilter | LuaScriptRaisedBuiltEventFilter | LuaRobotMinedEntityEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPreGhostUpgradedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerMinedEntityEventFilter | LuaEntityDamagedEventFilter | LuaSectorScannedEventFilter>

interface Fluid {
    
    /**
     * Amount of the fluid.
     */
    amount: double,
    
    /**
     * Fluid prototype name of the fluid.
     */
    name: string,
    
    /**
     * The temperature. When reading from {@link LuaFluidBox | runtime:LuaFluidBox}, this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype.
     */
    temperature?: double
}

/**
 * A definition of a fluidbox connection point.
 */
interface FluidBoxConnection {
    
    /**
     * The maximum tile distance this underground connection can connect at if this is an underground pipe.
     */
    max_underground_distance?: uint,
    
    /**
     * The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array.
     */
    positions: Vector[],
    type: 'input' | 'output' | 'input-output'
}

interface FluidBoxFilter {
    
    /**
     * The maximum temperature allowed into the fluidbox.
     */
    maximum_temperature: double,
    
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    minimum_temperature: double,
    
    /**
     * Fluid prototype name of the filtered fluid.
     */
    name: string
}

interface FluidBoxFilterSpec {
    
    /**
     * Force the filter to be set, regardless of current fluid content.
     */
    force?: boolean,
    
    /**
     * The maximum temperature allowed into the fluidbox.
     */
    maximum_temperature?: double,
    
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    minimum_temperature?: double,
    
    /**
     * Fluid prototype name of the filtered fluid.
     */
    name: string
}

/**
 * A fluid may be specified in one of three ways.
 */
type FluidIdentification = /* The fluid name. */ string | /* The fluid prototype. */ LuaFluidPrototype | /* The fluid. */ Fluid

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface FluidPrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'hidden' | 'name' | 'subgroup' | 'default-temperature' | 'max-temperature' | 'heat-capacity' | 'fuel-value' | 'emissions-multiplier' | 'gas-temperature',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

type ForceCondition = /* All forces pass. */ 'all' | /* Forces which will attack pass. */ 'enemy' | /* Forces which won't attack pass. */ 'ally' | /* Forces which are friends pass. */ 'friend' | /* Forces which are not friends pass. */ 'not-friend' | /* The same force pass. */ 'same' | /* The non-same forces pass. */ 'not-same'

/**
 * A force may be specified in one of three ways.
 */
type ForceIdentification = /* The force index. */ uint8 | /* The force name. */ string | /* A reference to {@link LuaForce | runtime:LuaForce} may be passed directly. */ LuaForce

/**
 * Parameters that affect the look and control of the game. Updating any of the member attributes here will immediately take effect in the game engine.
 */
interface GameViewSettings {
    /**
     * Show the flashing alert icons next to the player's toolbar.
     */
    show_alert_gui: boolean

    /**
     * Show the controller GUI elements. This includes the toolbar, the selected tool slot, the armour slot, and the gun and ammunition slots.
     */
    show_controller_gui: boolean

    /**
     * Shows or hides the crafting queue.
     */
    show_crafting_queue: boolean

    /**
     * Show overlay icons on entities. Also known as "alt-mode".
     */
    show_entity_info: boolean

    /**
     * Shows or hides the tooltip that is displayed when selecting an entity.
     */
    show_entity_tooltip: boolean

    /**
     * Shows or hides the mouse and keyboard/controller button hints in the bottom left corner if they are enabled in the interface settings.
     */
    show_hotkey_suggestions: boolean

    /**
     * Shows or hides the view options when map is opened.
     */
    show_map_view_options: boolean

    /**
     * Show the chart in the upper right-hand corner of the screen.
     */
    show_minimap: boolean

    /**
     * Shows or hides quickbar of shortcuts.
     */
    show_quickbar: boolean

    /**
     * When `true` (`false` is default), the rails will always show the rail block visualisation.
     */
    show_rail_block_visualisation: boolean

    /**
     * Show research progress and name in the upper right-hand corner of the screen.
     */
    show_research_info: boolean

    /**
     * Shows or hides the shortcut bar.
     */
    show_shortcut_bar: boolean

    /**
     * Shows or hides the buttons row.
     */
    show_side_menu: boolean

    /**
     * Shows or hides the tool window with the weapons and armor.
     */
    show_tool_bar: boolean

    /**
     * When `true` (the default), mousing over an entity will select it. Otherwise, moving the mouse won't update entity selection.
     */
    update_entity_selection: boolean

}

interface GuiAnchor {
    gui: defines.relative_gui_type,
    
    /**
     * If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`.
     */
    name?: string,
    
    /**
     * If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated.
     */
    names?: string[],
    position: defines.relative_gui_position,
    
    /**
     * If provided, only anchors the GUI element when the opened things type matches the type.
     */
    type?: string
}

/**
 * Used for specifying where a GUI arrow should point to.
 * Other attributes may be specified depending on `type`:
 */
interface GuiArrowSpecification {
    margin: uint,
    
    /**
     * This determines which of the following fields will be required.
     */
    type: GuiArrowType
}

/**
 * Used by {@link GuiArrowSpecification | runtime:GuiArrowSpecification}.
 */
type GuiArrowType = /* Will remove the arrow entirely. */ 'nowhere' | /* Will point to the current goal. */ 'goal' | 'entity_info' | 'active_window' | 'entity' | 'position' | 'crafting_queue' | /* Will point to a given item stack in an inventory. */ 'item_stack'

/**
 * Direction of a {@link LuaGuiElement's | runtime:LuaGuiElement::direction} layout.
 */
type GuiDirection = 'horizontal' | 'vertical'

type GuiElementType = /* A clickable element. Relevant event: {@link on_gui_click | runtime:on_gui_click} */ 'button' | /* A `button` that displays a sprite rather than text. Relevant event: {@link on_gui_click | runtime:on_gui_click} */ 'sprite-button' | /* A clickable element with a check mark that can be turned off or on. Relevant event: {@link on_gui_checked_state_changed | runtime:on_gui_checked_state_changed} */ 'checkbox' | /* An invisible container that lays out its children either horizontally or vertically. */ 'flow' | /* A non-transparent box that contains other elements. It can have a title (set via the `caption` attribute). Just like a `flow`, it lays out its children either horizontally or vertically. Relevant event: {@link on_gui_location_changed | runtime:on_gui_location_changed} */ 'frame' | /* A piece of text. */ 'label' | /* A horizontal or vertical separation line. */ 'line' | /* A partially filled bar that can be used to indicate progress. */ 'progressbar' | /* An invisible container that lays out its children in a specific number of columns. The width of each column is determined by the widest element it contains. */ 'table' | /* A single-line box the user can type into. Relevant events: {@link on_gui_text_changed | runtime:on_gui_text_changed}, {@link on_gui_confirmed | runtime:on_gui_confirmed} */ 'textfield' | /* An element that is similar to a `checkbox`, but with a circular appearance. Clicking a selected radio button will not unselect it. Radio buttons are not linked to each other in any way. Relevant event: {@link on_gui_checked_state_changed | runtime:on_gui_checked_state_changed} */ 'radiobutton' | /* An element that shows an image. */ 'sprite' | /* An invisible element that is similar to a `flow`, but has the ability to show and use scroll bars. */ 'scroll-pane' | /* A drop-down containing strings of text. Relevant event: {@link on_gui_selection_state_changed | runtime:on_gui_selection_state_changed} */ 'drop-down' | /* A list of strings, only one of which can be selected at a time. Shows a scroll bar if necessary. Relevant event: {@link on_gui_selection_state_changed | runtime:on_gui_selection_state_changed} */ 'list-box' | /* A camera that shows the game at the given position on the given surface. It can visually track an {@link entity | runtime:LuaGuiElement::entity} that is set after the element has been created. */ 'camera' | /* A button that lets the player pick from a certain kind of prototype, with optional filtering. Relevant event: {@link on_gui_elem_changed | runtime:on_gui_elem_changed} */ 'choose-elem-button' | /* A multi-line `textfield`. Relevant event: {@link on_gui_text_changed | runtime:on_gui_text_changed} */ 'text-box' | /* A horizontal number line which can be used to choose a number. Relevant event: {@link on_gui_value_changed | runtime:on_gui_value_changed} */ 'slider' | /* A minimap preview, similar to the normal player minimap. It can visually track an {@link entity | runtime:LuaGuiElement::entity} that is set after the element has been created. */ 'minimap' | /* A preview of an entity. The {@link entity | runtime:LuaGuiElement::entity} has to be set after the element has been created. */ 'entity-preview' | /* An empty element that just exists. The root GUI elements `screen` and `relative` are `empty-widget`s. */ 'empty-widget' | /* A collection of `tab`s and their contents. Relevant event: {@link on_gui_selected_tab_changed | runtime:on_gui_selected_tab_changed} */ 'tabbed-pane' | /* A tab for use in a `tabbed-pane`. */ 'tab' | /* A switch with three possible states. Can have labels attached to either side. Relevant event: {@link on_gui_switch_state_changed | runtime:on_gui_switch_state_changed} */ 'switch'

/**
 * Screen coordinates of a GUI element in a {@link LuaGui | runtime:LuaGui}. This uses the same format as {@link TilePosition | runtime:TilePosition}, meaning it can be specified either with or without explicit keys.
 */
type GuiLocation = {
    x: int,
    y: int
} | 
[    int,
    int
]

interface GunShift4Way {
    east: Vector,
    north: Vector,
    south: Vector,
    west: Vector
}

interface HeatConnection {
    direction: defines.direction,
    position: Vector
}

/**
 * The settings used by a heat-interface type entity.
 */
interface HeatSetting {
    
    /**
     * Defaults to `"at-least"`.
     */
    mode?: 'at-least' | 'at-most' | 'exactly' | 'add' | 'remove',
    
    /**
     * The target temperature. Defaults to the minimum temperature of the heat buffer.
     */
    temperature?: double
}

/**
 * A single filter used by an infinity-filters instance.
 */
interface InfinityInventoryFilter {
    
    /**
     * The count of the filter.
     */
    count?: uint,
    
    /**
     * The index of this filter in the filters list. Not required when writing a filter.
     */
    index: uint,
    
    /**
     * Defaults to `"at-least"`.
     */
    mode?: 'at-least' | 'at-most' | 'exactly',
    
    /**
     * Name of the item.
     */
    name: string
}

/**
 * A single filter used by an infinity-pipe type entity.
 */
interface InfinityPipeFilter {
    
    /**
     * Defaults to `"at-least"`.
     */
    mode?: 'at-least' | 'at-most' | 'exactly' | 'add' | 'remove',
    
    /**
     * Name of the fluid.
     */
    name: string,
    
    /**
     * The fill percentage the pipe (for example `0.5` for 50%). Can't be negative.
     */
    percentage?: double,
    
    /**
     * The temperature of the fluid. Defaults to the default/minimum temperature of the fluid.
     */
    temperature?: double
}

/**
 * 
 * Other attributes may be specified depending on `type`:
 */
interface Ingredient {
    
    /**
     * Amount of the item or fluid.
     */
    amount: double,
    
    /**
     * How much of this ingredient is a catalyst.
     */
    catalyst_amount?: uint | double,
    
    /**
     * Prototype name of the required item or fluid.
     */
    name: string,
    type: 'item' | 'fluid'
}

interface InserterCircuitConditions {
    circuit?: CircuitCondition,
    logistics?: CircuitCondition
}

interface InventoryFilter {
    
    /**
     * Position of the corresponding filter slot.
     */
    index: uint,
    
    /**
     * Item prototype name of the item to filter.
     */
    name: string
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface ItemPrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'tool' | 'mergeable' | 'item-with-inventory' | 'selection-tool' | 'item-with-label' | 'has-rocket-launch-products' | 'fuel' | 'place-result' | 'burnt-result' | 'place-as-tile' | 'placed-as-equipment-result' | 'name' | 'type' | 'flag' | 'subgroup' | 'fuel-category' | 'stack-size' | 'default-request-amount' | 'wire-count' | 'fuel-value' | 'fuel-acceleration-multiplier' | 'fuel-top-speed-multiplier' | 'fuel-emissions-multiplier',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * A {@link string | runtime:string} specifying an item prototype flag.
 */
type ItemPrototypeFlag = /* Determines whether the logistics areas of roboports should be drawn when holding this item. Used by the deconstruction planner by default. */ 'draw-logistic-overlay' | /* Hides the item in the logistic requests and filters GUIs (among others). */ 'hidden' | /* Always shows the item in the logistic requests and filters GUIs (among others) even when the recipe for that item is locked. */ 'always-show' | /* Hides the item from the bonus GUI. */ 'hide-from-bonus-gui' | /* Hides the item from the tooltip that's shown when hovering over a burner inventory. */ 'hide-from-fuel-tooltip' | /* Prevents the item from being stacked. It also prevents the item from stacking in assembling machine input slots, which can otherwise exceed the item stack size if required by the recipe. Additionally, the item does not show an item count when in the cursor. */ 'not-stackable' | /* Makes the item act as an extension to the inventory that it is placed in. Only has an effect for items with inventory. */ 'can-extend-inventory' | /* Makes construction bots prefer this item when building the entity specified by its `place_result`. */ 'primary-place-result' | /* Allows the item to be opened by the player, firing the `on_mod_item_opened` event. Only has an effect for selection tool items. */ 'mod-openable' | /* Makes it so the item is deleted when clearing the cursor, instead of being put into the player's inventory. The copy-paste tools use this by default, for example. */ 'only-in-cursor' | /* Allows the item to be spawned by a quickbar shortcut or custom input. */ 'spawnable'

/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all. By default, none of these flags are set.
 */
type ItemPrototypeFlags = {[key: string]: true}

/**
 * An item prototype may be specified in one of three ways.
 */
type ItemPrototypeIdentification = /* The item. */ LuaItemStack | /* The item prototype. */ LuaItemPrototype | /* The prototype name. */ string

interface ItemStackDefinition {
    
    /**
     * Amount of ammo in the ammo items in the stack.
     */
    ammo?: double,
    
    /**
     * Number of items the stack holds. If not specified, defaults to `1`.
     */
    count?: uint,
    
    /**
     * Durability of the tool items in the stack.
     */
    durability?: double,
    
    /**
     * Health of the items in the stack. Defaults to `1.0`.
     */
    health?: float,
    
    /**
     * Prototype name of the item the stack holds.
     */
    name: string,
    
    /**
     * Tags of the items with tags in the stack.
     */
    tags?: string[]
}

/**
 * An item may be specified in one of two ways.
 */
type ItemStackIdentification = SimpleItemStack | LuaItemStack

interface ItemStackLocation {
    inventory: defines.inventory,
    slot: uint
}

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
 * @example
 * ```
 * -- In the English translation, this will print "No ammo"; in the Czech translation, it will print "Bez munice":
 * game.player.print({"description.no-ammo"})
 * -- The 'description.no-ammo' template contains no placeholders, so no further parameters are necessary.
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
 * -- If 'entity-description.furnace' exists, it is concatenated with "\n" and returned. Otherwise, if 'item-description.furnace'
 * --  exists, it is returned as-is. Otherwise, "optional fallback" is returned. If this value wasn't specified, the
 * --  translation result would be "Unknown key: 'item-description.furnace'".
 * ```
 *
 */
type LocalisedString = string | number | boolean | LuaObject | nil | LocalisedString[]

interface LogisticFilter {
    
    /**
     * The count for this filter.
     */
    count: uint,
    
    /**
     * The index this filter applies to.
     */
    index: uint,
    
    /**
     * The item name for this filter.
     */
    name: string
}

interface LogisticParameters {
    
    /**
     * Defaults to max uint.
     */
    max?: uint,
    
    /**
     * Defaults to `0`.
     */
    min?: uint,
    
    /**
     * The item. `nil` clears the filter.
     */
    name?: string
}

interface LogisticsNetworkSupplyCounts {
    
    /**
     * Number of available items in the active provider members.
     */
    'active-provider': uint,
    
    /**
     * Number of available items in the buffer members.
     */
    buffer: uint,
    
    /**
     * Number of available items in the passive provider members.
     */
    'passive-provider': uint,
    
    /**
     * Number of available items in the storage members.
     */
    storage: uint
}

interface LogisticsNetworkSupplyPoints {
    'active-provider': LuaLogisticPoint[],
    buffer: LuaLogisticPoint[],
    'passive-provider': LuaLogisticPoint[],
    storage: LuaLogisticPoint[]
}

interface Loot {
    
    /**
     * Maximum amount of loot to drop.
     */
    count_max: double,
    
    /**
     * Minimum amount of loot to drop.
     */
    count_min: double,
    
    /**
     * Item prototype name of the result.
     */
    item: string,
    
    /**
     * Probability that any loot at all will drop, as a number in range [0, 1].
     */
    probability: double
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaEntityClonedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'original-damage-amount' | 'final-damage-amount' | 'damage-type' | 'final-health',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaEntityDiedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * Any LuaObject listed on the {@link Classes | runtime:classes} page.
 */
type LuaObject = object

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPlayerBuiltEntityEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'force',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPlayerRepairedEntityEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPostEntityDiedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPreGhostDeconstructedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPreGhostUpgradedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaPreRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaRobotBuiltEntityEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable' | 'force',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaScriptRaisedBuiltEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaScriptRaisedDestroyEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaScriptRaisedReviveEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaSectorScannedEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface LuaUpgradeCancelledEventFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'name' | 'ghost_type' | 'ghost_name' | 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * A standard table containing all {@link MapSettings | runtime:MapSettings} attributes plus an additional table that contains all {@link DifficultySettings | runtime:DifficultySettings} properties.
 */
interface MapAndDifficultySettings {
    difficulty_settings: MapDifficultySettings,
    enemy_evolution: EnemyEvolutionMapSettings,
    enemy_expansion: EnemyExpansionMapSettings,
    
    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
     */
    max_failed_behavior_count: uint,
    path_finder: PathFinderMapSettings,
    pollution: PollutionMapSettings,
    steering: SteeringMapSettings,
    unit_group: UnitGroupMapSettings
}

interface MapDifficultySettings {
    recipe_difficulty: defines.difficulty_settings.recipe_difficulty,
    
    /**
     * Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See {@link LuaForce::research_queue_enabled | runtime:LuaForce::research_queue_enabled} for that.
     */
    research_queue_setting: 'after-victory' | 'always' | 'never',
    technology_difficulty: defines.difficulty_settings.technology_difficulty,
    
    /**
     * A value in range [0.001, 1000].
     */
    technology_price_multiplier: double
}

/**
 * The data that can be extracted from a map exchange string, as a plain table.
 */
interface MapExchangeStringData {
    map_gen_settings: MapGenSettings,
    map_settings: MapAndDifficultySettings
}

interface MapGenPreset {
    advanced_settings?: AdvancedMapGenSettings,
    basic_settings?: MapGenSettings,
    
    /**
     * Whether this is the preset that is selected by default.
     */
    default?: boolean,
    
    /**
     * The string used to alphabetically sort the presets. It is a simple string that has no additional semantic meaning.
     */
    order: string
}

/**
 * The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator. The base game sets `property_expression_names.elevation` to `"0_16-elevation"` to reproduce terrain from 0.16 or to `"0_17-island"` for the island preset. If generators are available for other properties, the 'map type' dropdown in the GUI will be renamed to 'elevation' and shown along with selectors for the other selectable properties.
 * @example
 * ```
 * -- Assuming a NamedNoiseExpression with the name "my-alternate-grass1-probability" is defined...
 * local surface = game.player.surface
 * local mgs = surface.map_gen_settings
 * mgs.property_expression_names["tile:grass1:probability"] = "my-alternate-grass1-probability"
 * surface.map_gen_settings = mgs
 * -- ...would override the probability of grass1 being placed at any given point on the current surface.
 * ```
 *
 * @example
 * ```
 * -- To make there be no deep water on (newly generated chunks) a surface
 * local surface = game.player.surface
 * local mgs = surface.map_gen_settings
 * mgs.property_expression_names["tile:deepwater:probability"] = -1000
 * surface.map_gen_settings = mgs
 * -- This does not require a NamedNoiseExpression to be defined, since literal numbers (and strings naming literal
 * -- numbers, e.g. `"123"`) are understood to stand for constant value expressions.
 * ```
 *
 */
interface MapGenSettings {
    
    /**
     * Indexed by autoplace control prototype name.
     */
    autoplace_controls: {[key: string]: AutoplaceControl},
    
    /**
     * Each setting in this dictionary maps the string type to the settings for that type.
     */
    autoplace_settings: {[key: string]: AutoplaceSettings},
    
    /**
     * Map generation settings for entities of the type "cliff".
     */
    cliff_settings: CliffPlacementSettings,
    
    /**
     * Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`.
     */
    default_enable_all_autoplace_controls: boolean,
    
    /**
     * Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center.
     */
    height: uint,
    
    /**
     * Whether peaceful mode is enabled for this map.
     */
    peaceful_mode: boolean,
    
    /**
     * Overrides for tile property value generators.
     */
    property_expression_names: PropertyExpressionNames,
    
    /**
     * The random seed used to generated this map.
     */
    seed: uint,
    
    /**
     * Size of the starting area.
     */
    starting_area: MapGenSize,
    
    /**
     * Positions of the starting areas.
     */
    starting_points: MapPosition[],
    
    /**
     * The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
     */
    terrain_segmentation: MapGenSize,
    
    /**
     * The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero, `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes. This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
     */
    water: MapGenSize,
    
    /**
     * Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center.
     */
    width: uint
}

/**
 * A floating point number specifying an amount.
 * 
 * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned):
 * 
 * The map generation algorithm officially supports the range of values the in-game map generation screen shows (specifically `0` and values from `1/6` to `6`). Values outside this range are not guaranteed to work as expected.
 */
type MapGenSize = /* Specifying a map gen dimension. */ float | /* equivalent to `0`. */ 'none' | /* equivalent to `1/2`. */ 'very-low' | /* equivalent to `1/2`. */ 'very-small' | /* equivalent to `1/2`. */ 'very-poor' | /* equivalent to `1/sqrt(2)`. */ 'low' | /* equivalent to `1/sqrt(2)`. */ 'small' | /* equivalent to `1/sqrt(2)`. */ 'poor' | /* equivalent to `1`. */ 'normal' | /* equivalent to `1`. */ 'medium' | /* equivalent to `1`. */ 'regular' | /* equivalent to `sqrt(2)`. */ 'high' | /* equivalent to `sqrt(2)`. */ 'big' | /* equivalent to `sqrt(2)`. */ 'good' | /* equivalent to `2`. */ 'very-high' | /* equivalent to `2`. */ 'very-big' | /* equivalent to `2`. */ 'very-good'

/**
 * Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.
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

/**
 * Various game-related settings. Updating any of the attributes will immediately take effect in the game engine.
 * @example
 * ```
 * -- Increase the number of short paths the pathfinder can cache
 * game.map_settings.path_finder.short_cache_size = 15
 * ```
 *
 */
interface MapSettings {
    enemy_evolution: EnemyEvolutionMapSettings

    enemy_expansion: EnemyExpansionMapSettings

    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
     */
    max_failed_behavior_count: uint

    path_finder: PathFinderMapSettings

    pollution: PollutionMapSettings

    steering: SteeringMapSetting

    unit_group: UnitGroupMapSettings

}

/**
 * What is shown in the map view. If a field is not given, that setting will not be changed.
 */
interface MapViewSettings {
    'show-electric-network'?: boolean,
    'show-logistic-network'?: boolean,
    'show-networkless-logistic-members'?: boolean,
    'show-non-standard-map-info'?: boolean,
    'show-player-names'?: boolean,
    'show-pollution'?: boolean,
    'show-rail-signal-states'?: boolean,
    'show-recipe-icons'?: boolean,
    'show-tags'?: boolean,
    'show-train-station-names'?: boolean,
    'show-turret-range'?: boolean,
    'show-worker-robots'?: boolean
}

interface ModChangeData {
    
    /**
     * New version of the mod. May be `nil` if the mod is no longer present (i.e. it was just removed).
     */
    new_version: string,
    
    /**
     * Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added).
     */
    old_version: string
}

interface ModSetting {
    
    /**
     * The value of the mod setting. The type depends on the kind of setting.
     */
    value: int | double | boolean | string | Color
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface ModSettingPrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'type' | 'mod' | 'setting-type',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * Used by {@link TechnologyModifier | runtime:TechnologyModifier}.
 */
type ModifierType = 'inserter-stack-size-bonus' | 'stack-inserter-capacity-bonus' | 'laboratory-speed' | 'character-logistic-trash-slots' | 'maximum-following-robots-count' | 'worker-robot-speed' | 'worker-robot-storage' | 'ghost-time-to-live' | 'turret-attack' | 'ammo-damage' | 'give-item' | 'gun-speed' | 'unlock-recipe' | 'character-crafting-speed' | 'character-mining-speed' | 'character-running-speed' | 'character-build-distance' | 'character-item-drop-distance' | 'character-reach-distance' | 'character-resource-reach-distance' | 'character-item-pickup-distance' | 'character-loot-pickup-distance' | 'character-inventory-slots-bonus' | 'deconstruction-time-to-live' | 'max-failed-attempts-per-tick-per-construction-queue' | 'max-successful-attempts-per-tick-per-construction-queue' | 'character-health-bonus' | 'mining-drill-productivity-bonus' | 'train-braking-force-bonus' | 'zoom-to-world-enabled' | 'zoom-to-world-ghost-building-enabled' | 'zoom-to-world-blueprint-enabled' | 'zoom-to-world-deconstruction-planner-enabled' | 'zoom-to-world-upgrade-planner-enabled' | 'zoom-to-world-selection-tool-enabled' | 'worker-robot-battery' | 'laboratory-productivity' | 'follower-robot-lifetime' | 'artillery-range' | 'nothing' | 'character-logistic-requests'

interface ModuleEffectValue {
    
    /**
     * The percentual increase of the attribute. A value of `0.6` means a 60% increase.
     */
    bonus: float
}

/**
 * @example
 * ```
 * -- These are the effects of the vanilla Productivity Module 3 (up to floating point imprecisions)
 * {consumption={bonus=0.6},
 *   speed={bonus=-0.15},
 *   productivity={bonus=0.06},
 *   pollution={bonus=0.075}}
 * ```
 *
 */
interface ModuleEffects {
    consumption?: ModuleEffectValue,
    pollution?: ModuleEffectValue,
    productivity?: ModuleEffectValue,
    speed?: ModuleEffectValue
}

/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 * 
 * To write to this, use an array{@link [string | runtime:string}] of the mouse buttons that should be possible to use with on button. The flag `"left-and-right"` can also be set, which will set `"left"` and `"right"` to `true`.
 */
type MouseButtonFlags = {[key: string]: true}

/**
 * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation. These can only be meaningfully written/modified during the data load phase. More detailed information is found on the {@link prototype docs | prototype:NamedNoiseExpression}.
 */
interface NoiseExpression {
    
    /**
     * Names the type of the expression and determines what other fields are required.
     */
    type: string
}

interface NthTickEventData {
    
    /**
     * The nth tick this handler was registered to.
     */
    nth_tick: uint,
    
    /**
     * The tick during which the event happened.
     */
    tick: uint
}

/**
 * A single offer on a market entity.
 */
interface Offer {
    
    /**
     * The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier.
     */
    offer: TechnologyModifier,
    
    /**
     * List of prices.
     */
    price: Ingredient[]
}

interface OldTileAndPosition {
    old_tile: LuaTilePrototype,
    position: TilePosition
}

interface PathFinderMapSettings {
    
    /**
     * When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms. This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`.
     */
    cache_accept_path_end_distance_ratio: double,
    
    /**
     * When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`.
     */
    cache_accept_path_start_distance_ratio: double,
    
    /**
     * When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`.
     */
    cache_max_connect_to_cache_steps_multiplier: uint,
    
    /**
     * When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`.
     */
    cache_path_end_distance_rating_multiplier: double,
    
    /**
     * When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`.
     */
    cache_path_start_distance_rating_multiplier: double,
    
    /**
     * The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`.
     */
    direct_distance_to_consider_short_request: uint,
    
    /**
     * A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`.
     */
    enemy_with_different_destination_collision_penalty: double,
    
    /**
     * The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`.
     */
    extended_collision_penalty: double,
    
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`.
     */
    fwd2bwd_ratio: uint,
    
    /**
     * The general collision penalty with other units. Defaults to `10`.
     */
    general_entity_collision_penalty: double,
    
    /**
     * The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`.
     */
    general_entity_subsequent_collision_penalty: double,
    
    /**
     * When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`.
     */
    goal_pressure_ratio: double,
    
    /**
     * The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`.
     */
    ignore_moving_enemy_collision_distance: double,
    
    /**
     * The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`.
     */
    long_cache_min_cacheable_distance: double,
    
    /**
     * Number of elements in the long cache. Defaults to `25`.
     */
    long_cache_size: uint,
    
    /**
     * The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`.
     */
    max_clients_to_accept_any_new_request: uint,
    
    /**
     * When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`.
     */
    max_clients_to_accept_short_new_request: uint,
    
    /**
     * The maximum number of nodes that are expanded per tick. Defaults to `1 000`.
     */
    max_steps_worked_per_tick: double,
    
    /**
     * The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8 000`.
     */
    max_work_done_per_tick: uint,
    
    /**
     * The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`.
     */
    min_steps_to_check_path_find_termination: uint,
    
    /**
     * Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    negative_cache_accept_path_end_distance_ratio: double,
    
    /**
     * Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    negative_cache_accept_path_start_distance_ratio: double,
    
    /**
     * The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`.
     */
    negative_path_cache_delay_interval: uint,
    
    /**
     * The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`.
     */
    overload_levels: uint[],
    
    /**
     * The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`.
     */
    overload_multipliers: double[],
    
    /**
     * The minimal number of nodes required to be searched in the short path cache. Defaults to `50`.
     */
    short_cache_min_algo_steps_to_cache: uint,
    
    /**
     * The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`.
     */
    short_cache_min_cacheable_distance: double,
    
    /**
     * Number of elements in the short cache. Defaults to `5`.
     */
    short_cache_size: uint,
    
    /**
     * The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`.
     */
    short_request_max_steps: uint,
    
    /**
     * The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%.
     */
    short_request_ratio: double,
    
    /**
     * A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`.
     */
    stale_enemy_with_same_destination_collision_penalty: double,
    
    /**
     * If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`.
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: double,
    
    /**
     * Whether to cache paths at all. Defaults to `true`.
     */
    use_path_cache: boolean
}

interface PathfinderFlags {
    
    /**
     * Allows pathing through friendly entities. Defaults to `false`.
     */
    allow_destroy_friendly_entities?: boolean,
    
    /**
     * Allows the pathfinder to path through entities of the same force. Defaults to `false`.
     */
    allow_paths_through_own_entities?: boolean,
    
    /**
     * Enables path caching. This can be more efficient, but might fail to respond to changes in the environment. Defaults to `true`.
     */
    cache?: boolean,
    
    /**
     * Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding up others. Defaults to `false`.
     */
    low_priority?: boolean,
    
    /**
     * Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed. Defaults to `false`.
     */
    no_break?: boolean,
    
    /**
     * Makes the pathfinder try to path in straight lines. Defaults to `false`.
     */
    prefer_straight_paths?: boolean
}

interface PathfinderWaypoint {
    
    /**
     * `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed.
     */
    needs_destroy_to_reach: boolean,
    
    /**
     * The position of the waypoint on its surface.
     */
    position: MapPosition
}

/**
 * A single pipe connection for a given fluidbox.
 */
interface PipeConnection {
    connection_type: 'normal' | 'underground',
    flow_direction: 'input' | 'output' | 'input-output',
    
    /**
     * The absolute position of this connection within the entity.
     */
    position: MapPosition,
    
    /**
     * The connected fluidbox, if any.
     */
    target?: LuaFluidBox,
    
    /**
     * The index of the target fluidbox, if any.
     */
    target_fluidbox_index?: uint,
    
    /**
     * The index of the target fluidbox pipe connection, if any.
     */
    target_pipe_connection_index?: uint,
    
    /**
     * The absolute position of the connection's intended target.
     */
    target_position: MapPosition
}

interface PlaceAsTileResult {
    condition: CollisionMask,
    condition_size: uint,
    
    /**
     * The tile prototype.
     */
    result: LuaTilePrototype
}

/**
 * A player may be specified in one of three ways.
 */
type PlayerIdentification = /* The player index. */ uint | /* The player name. */ string | /* A reference to {@link LuaPlayer | runtime:LuaPlayer} may be passed directly. */ LuaPlayer

/**
 * These values are for the time frame of one second (60 ticks).
 */
interface PollutionMapSettings {
    
    /**
     * The amount of pollution eaten by a chunk's tiles as a percentage of 1. Also known as absorption modifier. Defaults to `1`.
     */
    ageing: double,
    
    /**
     * The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`.
     */
    diffusion_ratio: double,
    
    /**
     * Whether pollution is enabled at all.
     */
    enabled: boolean,
    
    /**
     * Defaults to `1`.
     */
    enemy_attack_pollution_consumption_modifier: double,
    
    /**
     * Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`.
     */
    expected_max_per_chunk: double,
    
    /**
     * Defaults to `20`.
     */
    max_pollution_to_restore_trees: double,
    
    /**
     * Defaults to `60`.
     */
    min_pollution_to_damage_trees: double,
    
    /**
     * The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`.
     */
    min_to_diffuse: double,
    
    /**
     * Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`.
     */
    min_to_show_per_chunk: double,
    
    /**
     * Defaults to `50`.
     */
    pollution_per_tree_damage: double,
    
    /**
     * Defaults to `10`.
     */
    pollution_restored_per_tree_damage: double,
    
    /**
     * Defaults to `150`.
     */
    pollution_with_max_forest_damage: double
}

interface PrintSettings {
    
    /**
     * Color of the message to print. Defaults to white.
     */
    color?: Color,
    
    /**
     * If set to false, message will not be part of game state and will disappear from output console after save-load. Defaults to `true`.
     */
    game_state?: boolean,
    
    /**
     * Condition when to skip adding message. Defaults to `defines.print_skip.if_redundant`.
     */
    skip?: defines.print_skip,
    
    /**
     * If a sound should be emitted for this message. Defaults to `defines.print_sound.use_player_settings`.
     */
    sound?: defines.print_sound,
    
    /**
     * The sound to play. If not given, {@link UtilitySounds::console_message | prototype:UtilitySounds::console_message} will be used instead.
     */
    sound_path?: SoundPath,
    
    /**
     * The volume of the sound to play. Must be between 0 and 1 inclusive. Defaults to 1.
     */
    volume_modifier?: double
}

/**
 * 
 * Other attributes may be specified depending on `type`:
 * @example
 * ```
 * -- Products of the "steel-chest" recipe (an array of Product)
 * {{type="item", name="steel-chest", amount=1}}
 * ```
 *
 * @example
 * ```
 * -- Products of the "advanced-oil-processing" recipe
 * {{type="fluid", name="heavy-oil", amount=1},
 *   {type="fluid", name="light-oil", amount=4.5},
 *   {type="fluid", name="petroleum-gas", amount=5.5}}
 * ```
 *
 * @example
 * ```
 * -- What a custom recipe would look like that had a probability of 0.5 to return a
 * -- minimum amount of 1 and amaximum amount of 5
 * {{type="item", name="custom-item", probability=0.5, amount_min=1, amount_max=5}}
 * ```
 *
 */
interface Product {
    
    /**
     * Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified.
     */
    amount?: double,
    
    /**
     * Maximum amount of the item or fluid to give. Has no effect when `amount` is specified.
     */
    amount_max?: uint | double,
    
    /**
     * Minimal amount of the item or fluid to give. Has no effect when `amount` is specified.
     */
    amount_min?: uint | double,
    
    /**
     * How much of this product is a catalyst.
     */
    catalyst_amount?: uint | double,
    
    /**
     * Prototype name of the result.
     */
    name: string,
    
    /**
     * A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced.
     */
    probability?: double,
    type: 'item' | 'fluid'
}

interface ProgrammableSpeakerAlertParameters {
    alert_message: string,
    icon_signal_id: SignalID,
    show_alert: boolean,
    show_on_map: boolean
}

interface ProgrammableSpeakerCircuitParameters {
    instrument_id: uint,
    note_id: uint,
    signal_value_is_pitch: boolean
}

interface ProgrammableSpeakerInstrument {
    name: string,
    notes: string[]
}

interface ProgrammableSpeakerParameters {
    allow_polyphony: boolean,
    playback_globally: boolean,
    playback_volume: double
}

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
 * - `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise.  Default is 1.
 * - `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
 * - `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise.  Default is 1.
 * - `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0.
 */
type PropertyExpressionNames = {[key: string]: string}

/**
 * Types `"signal"` and `"item-group"` do not support filters.
 * 
 * Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
 */
type PrototypeFilter = Array<ItemPrototypeFilter | ModSettingPrototypeFilter | TechnologyPrototypeFilter | DecorativePrototypeFilter | AchievementPrototypeFilter | FluidPrototypeFilter | EquipmentPrototypeFilter | TilePrototypeFilter | RecipePrototypeFilter | EntityPrototypeFilter>

/**
 * One of the following values:
 */
type PrototypeFilterMode = 'none' | 'whitelist' | 'blacklist'

interface PrototypeHistory {
    
    /**
     * The mods that changed this prototype in the order they changed it.
     */
    changed: string[],
    
    /**
     * The mod that created this prototype.
     */
    created: string
}

interface RadiusVisualisationSpecification {
    distance: double,
    draw_in_cursor: boolean,
    draw_on_selection: boolean,
    offset: Vector
}

interface RailEnd {
    direction: defines.rail_direction,
    rail: LuaEntity
}

/**
 * The smooth orientation. It is a {@link float | runtime:float} in the range `[0, 1)` that covers a full circle, starting at the top and going clockwise. This means a value of `0` indicates "north", a value of `0.5` indicates "south".
 * 
 * For example then, a value of `0.625` would indicate "south-west", and a value of `0.875` would indicate "north-west".
 */
type RealOrientation = float

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface RecipePrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'enabled' | 'hidden' | 'hidden-from-flow-stats' | 'hidden-from-player-crafting' | 'allow-as-intermediate' | 'allow-intermediates' | 'allow-decomposition' | 'always-show-made-in' | 'always-show-products' | 'show-amount-in-title' | 'has-ingredients' | 'has-products' | 'has-ingredient-item' | 'has-ingredient-fluid' | 'has-product-item' | 'has-product-fluid' | 'subgroup' | 'category' | 'energy' | 'emissions-multiplier' | 'request-paste-multiplier' | 'overload-multiplier',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values.
 */
type RenderLayer = /* A string of a number */ string | /* 15 */ 'water-tile' | /* 25 */ 'ground-tile' | /* 26 */ 'tile-transition' | /* 27 */ 'decals' | /* 29 */ 'lower-radius-visualization' | /* 30 */ 'radius-visualization' | /* 65 */ 'transport-belt-integration' | /* 66 */ 'resource' | /* 67 */ 'building-smoke' | /* 92 */ 'decorative' | /* 93 */ 'ground-patch' | /* 94 */ 'ground-patch-higher' | /* 95 */ 'ground-patch-higher2' | /* 112 */ 'remnants' | /* 113 */ 'floor' | /* 114 */ 'transport-belt' | /* 115 */ 'transport-belt-endings' | /* 120 */ 'floor-mechanics-under-corpse' | /* 121 */ 'corpse' | /* 122 */ 'floor-mechanics' | /* 123 */ 'item' | /* 124 */ 'lower-object' | /* 126 */ 'transport-belt-circuit-connector' | /* 127 */ 'lower-object-above-shadow' | /* 129 */ 'object' | /* 131 */ 'higher-object-under' | /* 132 */ 'higher-object-above' | /* 134 */ 'item-in-inserter-hand' | /* 135 */ 'wires' | /* 136 */ 'wires-above' | /* 138 */ 'entity-info-icon' | /* 139 */ 'entity-info-icon-above' | /* 142 */ 'explosion' | /* 143 */ 'projectile' | /* 144 */ 'smoke' | /* 145 */ 'air-object' | /* 147 */ 'air-entity-info-icon' | /* 148 */ 'light-effect' | /* 187 */ 'selection-box' | /* 188 */ 'higher-selection-box' | /* 189 */ 'collision-selection-box' | /* 190 */ 'arrow' | /* 210 */ 'cursor'

interface Resistance {
    
    /**
     * Absolute damage decrease
     */
    decrease: float,
    
    /**
     * Percentual damage decrease
     */
    percent: float
}

interface RidingState {
    acceleration: defines.riding.acceleration,
    direction: defines.riding.direction
}

interface RollingStockDrawData {
    orientaton: RealOrientation,
    position: MapPosition
}

/**
 * An area defined using the map editor.
 */
interface ScriptArea {
    area: BoundingBox,
    color: Color,
    id: uint,
    name: string
}

/**
 * A position defined using the map editor.
 */
interface ScriptPosition {
    color: Color,
    id: uint,
    name: string,
    position: MapPosition
}

interface ScriptRenderTarget {
    entity?: LuaEntity,
    entity_offset?: Vector,
    position?: MapPosition
}

/**
 * One vertex of a ScriptRenderPolygon.
 */
interface ScriptRenderVertexTarget {
    target: MapPosition | LuaEntity,
    
    /**
     * Only used if `target` is a LuaEntity.
     */
    target_offset?: Vector
}

/**
 * Scroll policy of a {@link scroll pane | runtime:LuaGuiElement}.
 */
type ScrollPolicy = 'never' | 'dont-show-but-allow-scrolling' | 'always' | 'auto' | 'auto-and-reserve-space'

interface SelectedPrototypeData {
    
    /**
     * E.g. `"entity"`.
     */
    base_type: string,
    
    /**
     * The `type` of the prototype. E.g. `"tree"`.
     */
    derived_type: string,
    
    /**
     * The `name` of the prototype. E.g. `"tree-05"`.
     */
    name: string
}

/**
 * A set of flags on a selection tool that define how entities and tiles are selected. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 */
type SelectionModeFlags = {[key: string]: true}

/**
 * An actual signal transmitted by the network.
 */
interface Signal {
    
    /**
     * Value of the signal.
     */
    count: int,
    
    /**
     * ID of the signal.
     */
    signal: SignalID
}

interface SignalID {
    
    /**
     * Name of the item, fluid or virtual signal.
     */
    name?: string,
    type: 'item' | 'fluid' | 'virtual'
}

/**
 * An item stack may be specified in one of two ways.
 * @example
 * ```
 * -- Both of these lines specify an item stack of one iron plate
 * {name="iron-plate"}
 * {name="iron-plate", count=1}
 * ```
 *
 * @example
 * ```
 * -- This is a stack of 47 copper plates
 * {name="copper-plate", count=47}
 * ```
 *
 * @example
 * ```
 * These are both full stacks of iron plates (for iron-plate, a full stack is 100 plates)
 * "iron-plate"
 * {name="iron-plate", count=100}
 * ```
 *
 */
type SimpleItemStack = /* The name of the item, which represents a full stack of that item. */ string | /* The detailed definition of an item stack. */ ItemStackDefinition

/**
 * The vectors for all 5 position attributes are a table with `x` and `y` keys instead of an array.
 */
interface SmokeSource {
    deviation?: MapPosition,
    east_position?: Vector,
    frequency: double,
    height: float,
    height_deviation: float,
    name: string,
    north_position?: Vector,
    offset: double,
    position?: Vector,
    slow_down_factor: uint8,
    south_position?: Vector,
    starting_frame: uint16,
    starting_frame_deviation: double,
    starting_frame_speed: uint16,
    starting_frame_speed_deviation: double,
    starting_vertical_speed: float,
    starting_vertical_speed_deviation: float,
    vertical_speed_slowdown: float,
    west_position?: Vector
}

/**
 * It can be either the name of a {@link SoundPrototype | prototype:SoundPrototype} defined in the data stage, or a path in the form `"type/name"`. The latter option can be sorted into three categories.
 * 
 * The validity of a SoundPath can be verified at runtime using {@link LuaGameScript::is_valid_sound_path | runtime:LuaGameScript::is_valid_sound_path}.
 * The utility and ambient types each contain general use sound prototypes defined by the game itself:
 * 
 * - `"utility"` - Uses {@link UtilitySounds | prototype:UtilitySounds}. Example: `"utility/wire_connect_pole"`
 * - `"ambient"` - Uses {@link AmbientSound | prototype:AmbientSound}. Example: `"ambient/resource-deficiency"`
 * The following types can be combined with any tile name as long as its prototype defines the corresponding sound:
 * 
 * - `"tile-walking"` - Uses {@link TilePrototype::walking_sound | prototype:TilePrototype::walking_sound}. Example: `"tile-walking/concrete"`
 * - `"tile-mined"` - Uses {@link TilePrototype::mined_sound | prototype:TilePrototype::mined_sound}
 * - `"tile-build-small"` - Uses {@link TilePrototype::build_sound | prototype:TilePrototype::build_sound}. Example: `"tile-build-small/concrete"`
 * - `"tile-build-medium"` - Uses {@link TilePrototype::build_sound | prototype:TilePrototype::build_sound}
 * - `"tile-build-large"` - Uses {@link TilePrototype::build_sound | prototype:TilePrototype::build_sound}
 * The following types can be combined with any entity name as long as its prototype defines the corresponding sound:
 * 
 * - `"entity-build"` - Uses {@link Entity::build_sound | prototype:EntityPrototype::build_sound}. Example: `"entity-build/wooden-chest"`
 * - `"entity-mined"` - Uses {@link Entity::mined_sound | prototype:EntityPrototype::mined_sound}
 * - `"entity-mining"` - Uses {@link Entity::mining_sound | prototype:EntityPrototype::mining_sound}
 * - `"entity-vehicle_impact"` - Uses {@link EntityPrototype::vehicle_impact_sound | prototype:EntityPrototype::vehicle_impact_sound}
 * - `"entity-rotated"` - Uses {@link EntityPrototype::rotated_sound | prototype:EntityPrototype::rotated_sound}
 * - `"entity-open"` - Uses {@link Entity::open_sound | prototype:EntityPrototype::open_sound}
 * - `"entity-close"` - Uses {@link Entity::close_sound | prototype:EntityPrototype::close_sound}
 */
type SoundPath = string

/**
 * Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
 */
type SoundType = 'game-effect' | 'gui-effect' | 'ambient' | 'environment' | 'walking' | 'alert' | 'wind'

interface SpawnPointDefinition {
    
    /**
     * Evolution factor for which this weight applies.
     */
    evolution_factor: double,
    
    /**
     * Probability of spawning this unit at this evolution factor.
     */
    weight: double
}

/**
 * It can be either the name of a {@link SpritePrototype | prototype:SpritePrototype} defined in the data stage, or a path in form "type/name" or "type.name".
 * 
 * The validity of a SpritePath can be verified at runtime using {@link LuaGameScript::is_valid_sprite_path | runtime:LuaGameScript::is_valid_sprite_path}.
 * The supported types are:
 * 
 * - `"item"` - for example "item/iron-plate" is the icon sprite of iron plate
 * - `"entity"` - for example "entity/small-biter" is the icon sprite of the small biter
 * - `"technology"`
 * - `"recipe"`
 * - `"item-group"`
 * - `"fluid"`
 * - `"tile"`
 * - `"virtual-signal"`
 * - `"achievement"`
 * - `"equipment"`
 * - `"file"` - path to an image file located inside the current scenario. This file is not preloaded so it will be slower; for frequently used sprites, it is better to define sprite prototype and use it instead.
 * - `"utility"` - sprite defined in the utility-sprites object, these are the pictures used by the game internally for the UI.
 */
type SpritePath = string

interface SteeringMapSetting {
    
    /**
     * Used to make steering look better for aesthetic purposes.
     */
    force_unit_fuzzy_goto_behavior: boolean,
    
    /**
     * Does not include the radius of the unit.
     */
    radius: double,
    separation_factor: double,
    separation_force: double
}

interface SteeringMapSettings {
    default: SteeringMapSetting,
    moving: SteeringMapSetting
}

/**
 * A surface may be specified in one of three ways.
 */
type SurfaceIdentification = /* It will be the index of the surface. `nauvis` has index `1`, the first surface-created surface will have index `2` and so on. */ uint | /* It will be the surface name. E.g. `"nauvis"`. */ string | /* A reference to {@link LuaSurface | runtime:LuaSurface} may be passed directly. */ LuaSurface

/**
 * State of a GUI {@link switch | runtime:LuaGuiElement::switch_state}.
 */
type SwitchState = 'left' | 'right' | 'none'

interface TabAndContent {
    content: LuaGuiElement,
    tab: LuaGuiElement
}

/**
 * A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`.
 * 
 * Note that the API returns tags as a simple table, meaning any modifications to it will not propagate back to the game. Thus, to modify a set of tags, the whole table needs to be written back to the respective property.
 * @example
 * ```
 * {a = 1, b = true, c = "three", d = {e = "f"}}
 * ```
 *
 */
type Tags = {[key: string]: AnyBasic}

/**
 * Target type of an {@link AmmoType | runtime:AmmoType}.
 */
type TargetType = /* Fires at an entity. */ 'entity' | /* Fires directly at a position. */ 'position' | /* Fires in a direction. */ 'direction'

/**
 * A technology may be specified in one of three ways.
 */
type TechnologyIdentification = /* The technology name. */ string | /* A reference to {@link LuaTechnology | runtime:LuaTechnology} may be passed directly. */ LuaTechnology | /* A reference to {@link LuaTechnologyPrototype | runtime:LuaTechnologyPrototype} may be passed directly. */ LuaTechnologyPrototype

/**
 * The effect that is applied when a technology is researched. It is a table that contains at least the field `type`.
 * Other attributes may be specified depending on `type`:
 */
interface TechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available.
     */
    type: ModifierType
}

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface TechnologyPrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'enabled' | 'hidden' | 'upgrade' | 'visible-when-disabled' | 'has-effects' | 'has-prerequisites' | 'research-unit-ingredient' | 'unlocks-recipe' | 'level' | 'max-level' | 'time',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

/**
 * The text is aligned so that the target position is at the given side of the text.
 * 
 * For example, `"right"` aligned text means the right side of the text is at the target position. Or in other words, the target is on the right of the text.
 */
type TextAlign = 'left' | 'right' | 'center'

interface Tile {
    
    /**
     * The prototype name of the tile.
     */
    name: string,
    
    /**
     * The position of the tile.
     */
    position: TilePosition
}

/**
 * Coordinates of a tile on a {@link LuaSurface | runtime:LuaSurface} where each integer `x`/`y` represents a different tile. This uses the same format as {@link MapPosition | runtime:MapPosition}, except it rounds any non-integer `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
 */
type TilePosition = {
    x: int,
    y: int
} | 
[    int,
    int
]

/**
 * 
 * Other attributes may be specified depending on `filter`:
 */
interface TilePrototypeFilter {
    
    /**
     * The condition to filter on.
     */
    filter: 'minable' | 'autoplace' | 'blueprintable' | 'item-to-place' | 'collision-mask' | 'walking-speed-modifier' | 'vehicle-friction-modifier' | 'decorative-removal-probability' | 'emissions',
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: 'or' | 'and'
}

interface TrainPathAllGoalsResult {
    
    /**
     * Array of the same length as requested goals: each field will tell if related goal is accessible for the train.
     */
    accessible: boolean[],
    
    /**
     * Amount of goals that are accessible.
     */
    amount_accessible: uint,
    
    /**
     * Array of the same length as requested goals. Only present if request type was `"all-goals-penalties"`.
     */
    penalties?: double[],
    
    /**
     * Amount of steps pathfinder performed. This is a measure of how expensive this search was.
     */
    steps_count: uint
}

interface TrainPathAnyGoalResult {
    
    /**
     * True if any goal was accessible.
     */
    found_path: boolean,
    
    /**
     * If any goal was accessible, this gives index of the particular goal that was found.
     */
    goal_index?: uint,
    
    /**
     * Penalty of the path to goal if a goal was accessible.
     */
    penalty?: double,
    
    /**
     * Amount of steps pathfinder performed. This is a measure of how expensive this search was.
     */
    steps_count: uint
}

interface TrainPathFinderPathResult {
    
    /**
     * True if found path.
     */
    found_path: boolean,
    
    /**
     * If path was found, provides index of the specific goal to which the path goes to.
     */
    goal_index?: uint,
    
    /**
     * If path was found, tells if the path was reached from the `from_front` or train's front end.
     */
    is_front?: boolean,
    
    /**
     * Only returned if `return_path` was set to true and path was found. Contains all rails in order that are part of the found path.
     */
    path?: LuaEntity[],
    
    /**
     * Penalty of the path to goal if path was found.
     */
    penalty?: double,
    
    /**
     * Amount of steps pathfinder performed. This is a measure of how expensive this search was.
     */
    steps_count: uint,
    
    /**
     * If path was found, provides total length of all rails of the path.
     */
    total_length?: double
}

/**
 * A {@link string | runtime:string} specifying the type of request for {@link LuaGameScript::request_train_path | runtime:LuaGameScript::request_train_path}.
 */
type TrainPathRequestType = /* The method will return {@link TrainPathFinderPathResult | runtime:TrainPathFinderPathResult}. */ 'path' | /* The method will return {@link TrainPathAnyGoalResult | runtime:TrainPathAnyGoalResult}. */ 'any-goal-accessible' | /* The method will return {@link TrainPathAllGoalsResult | runtime:TrainPathAllGoalsResult}. */ 'all-goals-accessible' | /* The method will return {@link TrainPathAllGoalsResult | runtime:TrainPathAllGoalsResult} with `penalties`. */ 'all-goals-penalties'

interface TrainSchedule {
    
    /**
     * Index of the currently active record
     */
    current: uint,
    records: TrainScheduleRecord[]
}

interface TrainScheduleRecord {
    
    /**
     * Rail to path to. Ignored if `station` is present.
     */
    rail?: LuaEntity,
    
    /**
     * When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to {@link LuaEntity::connected_rail_direction | runtime:LuaEntity::connected_rail_direction} of a TrainStop.
     */
    rail_direction?: defines.rail_direction,
    
    /**
     * Name of the station.
     */
    station?: string,
    
    /**
     * Only present when the station is temporary, the value is then always `true`.
     */
    temporary?: boolean,
    wait_conditions?: WaitCondition[]
}

interface TrainStopGoal {
    
    /**
     * Train stop target. Must be connected to rail ({@link LuaEntity::connected_rail | runtime:LuaEntity::connected_rail} returns valid LuaEntity).
     */
    train_stop: LuaEntity
}

interface TriggerDelivery {
    source_effects: TriggerEffectItem[],
    target_effects: TriggerEffectItem[],
    type: 'instant' | 'projectile' | 'flame-thrower' | 'beam' | 'stream' | 'artillery'
}

interface TriggerEffectItem {
    affects_target: boolean,
    damage_type_filters?: DamageTypeFilters,
    probability: float,
    repeat_count: uint16,
    repeat_count_deviation: uint16,
    show_in_tooltip: boolean,
    type: TriggerEffectItemType
}

/**
 * Used by {@link TriggerEffectItem | runtime:TriggerEffectItem}.
 */
type TriggerEffectItemType = 'damage' | 'create-entity' | 'create-explosion' | 'create-fire' | 'create-smoke' | 'create-trivial-smoke' | 'create-particle' | 'create-sticker' | 'create-decorative' | 'nested-result' | 'play-sound' | 'push-back' | 'destroy-cliffs' | 'show-explosion-on-chart' | 'insert-item' | 'script' | 'set-tile' | 'invoke-tile-trigger' | 'destroy-decoratives' | 'camera-effect'

interface TriggerItem {
    action_delivery?: TriggerDelivery[],
    
    /**
     * The trigger will only affect entities that would collide with given collision mask.
     */
    collision_mask: CollisionMask,
    
    /**
     * The trigger will only affect entities that contain any of these flags.
     */
    entity_flags?: EntityPrototypeFlags,
    
    /**
     * If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which there is no cease-fire set. `"ally"` is the opposite of `"enemy"`.
     */
    force: ForceCondition,
    ignore_collision_condition: boolean,
    probability: float,
    repeat_count: uint,
    trigger_target_mask: TriggerTargetMask,
    type: 'direct' | 'area' | 'line' | 'cluster'
}

/**
 * A set of trigger target masks.
 */
type TriggerTargetMask = {[key: string]: boolean}

interface UnitGroupMapSettings {
    
    /**
     * The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`.
     */
    max_gathering_unit_groups: uint,
    
    /**
     * The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3 600=36 000` ticks.
     */
    max_group_gathering_time: uint,
    
    /**
     * When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`.
     */
    max_group_member_fallback_factor: double,
    
    /**
     * The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`.
     */
    max_group_radius: double,
    
    /**
     * The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%.
     */
    max_group_slowdown_factor: double,
    
    /**
     * The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%.
     */
    max_member_slowdown_when_ahead: double,
    
    /**
     * The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%.
     */
    max_member_speedup_when_behind: double,
    
    /**
     * The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`.
     */
    max_unit_group_size: uint,
    
    /**
     * After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3 600=7 200` ticks.
     */
    max_wait_time_for_late_members: uint,
    
    /**
     * When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`.
     */
    member_disown_distance: double,
    
    /**
     * The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3 600` ticks.
     */
    min_group_gathering_time: uint,
    
    /**
     * The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`.
     */
    min_group_radius: double,
    tick_tolerance_when_member_arrives: uint
}

interface UnitSpawnDefinition {
    
    /**
     * The points at which to spawn the unit.
     */
    spawn_points: SpawnPointDefinition[],
    
    /**
     * Prototype name of the unit that would be spawned.
     */
    unit: string
}

interface UpgradeFilter {
    
    /**
     * Name of the item, or entity.
     */
    name?: string,
    type: 'item' | 'entity'
}

/**
 * A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out.
 * @example
 * ```
 * right = {1.0, 0.0}
 * ```
 *
 */
type Vector = {
    x: float,
    y: float
} | 
[    float,
    float
]

interface VehicleAutomaticTargetingParameters {
    auto_target_with_gunner: boolean,
    auto_target_without_gunner: boolean
}

/**
 * The text is aligned so that the target position is at the given side of the text.
 * 
 * For example, `"top"` aligned text means the top of the text is at the target position. Or in other words, the target is at the top of the text.
 */
type VerticalTextAlign = 'top' | 'middle' | 'baseline' | 'bottom'

interface WaitCondition {
    
    /**
     * Specifies how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array.
     */
    compare_type: 'and' | 'or',
    
    /**
     * Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`, and a circuit condition is configured.
     */
    condition?: CircuitCondition,
    
    /**
     * Number of ticks to wait when `type` is `"time"`, or number of ticks of inactivity when `type` is `"inactivity"`.
     */
    ticks?: uint,
    type: WaitConditionType
}

/**
 * Type of a {@link WaitCondition | runtime:WaitCondition}.
 */
type WaitConditionType = 'time' | 'full' | 'empty' | 'item_count' | 'circuit' | 'inactivity' | 'robots_inactive' | 'fluid_count' | 'passenger_present' | 'passenger_not_present'

interface WireConnectionDefinition {
    
    /**
     * Mandatory if the source entity has more than one circuit connection using circuit wire.
     */
    source_circuit_id?: defines.circuit_connector_id,
    
    /**
     * Mandatory if the source entity has more than one wire connection using copper wire.
     */
    source_wire_id?: defines.wire_connection_id,
    
    /**
     * Mandatory if the target entity has more than one circuit connection using circuit wire.
     */
    target_circuit_id?: defines.circuit_connector_id,
    
    /**
     * The entity to (dis)connect the source entity with.
     */
    target_entity: LuaEntity,
    
    /**
     * Mandatory if the target entity has more than one wire connection using copper wire.
     */
    target_wire_id?: defines.wire_connection_id,
    
    /**
     * The type of wire used.
     */
    wire: defines.wire_type
}

/**
 * A double-precision floating-point number. This is the same data type as all Lua numbers use.
 */
type double = number

/**
 * A floating-point number. This is a single-precision floating point number. Whilst Lua only uses double-precision numbers, when a function takes a float, the game engine will immediately convert the double-precision number to single-precision.
 */
type float = number

/**
 * 32-bit signed integer. Possible values are `-2 147 483 648` to `2 147 483 647`.
 * 
 * Since Lua 5.2 only uses doubles, any API that asks for `int` will floor the given double.
 */
type int = number

/**
 * 8-bit signed integer. Possible values are `-128` to `127`.
 * 
 * Since Lua 5.2 only uses doubles, any API that asks for `int8` will floor the given double.
 */
type int8 = number

/**
 * Nil is the type of the value `nil`, whose main property is to be different from any other value. It usually represents the absence of a useful value.
 */
type nil = null

/**
 * Tables are enclosed in curly brackets, like this `{}`.
 * 
 * Throughout the API docs, the terms "array" and "dictionary" are used. These are fundamentally just {@link Lua tables | http://www.lua.org/pil/2.5.html}, but have a limitation on which kind of table keys can be used. An array is a table that uses continuous integer keys starting at `1`, while a dictionary can use numeric or string keys in any order or combination.
 */
type table = Table

/**
 * 32-bit unsigned integer. Possible values are `0` to `4 294 967 295`.
 * 
 * Since Lua 5.2 only uses doubles, any API that asks for `uint` will floor the given double.
 */
type uint = number

/**
 * 16-bit unsigned integer. Possible values are `0` to `65 535`.
 * 
 * Since Lua 5.2 only uses doubles, any API that asks for `uint16` will floor the given double.
 */
type uint16 = number

/**
 * 64-bit unsigned integer. Possible values are `0` to `18 446 744 073 709 551 615`.
 * 
 * Since Lua 5.2 only uses doubles, any API that asks for `uint64` will floor the given double.
 */
type uint64 = number

/**
 * 8-bit unsigned integer. Possible values are `0` to `255`.
 * 
 * Since Lua 5.2 only uses doubles, any API that asks for `uint8` will floor the given double.
 */
type uint8 = number

/**
 * Applies to `type` variant case
 */
interface AchievementPrototypeFilterType extends AchievementPrototypeFilter {
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

/**
 * Applies to `projectile` variant case
 */
interface AttackParametersProjectile extends AttackParameters {
    projectile_center: Vector,
    projectile_creation_distance: float,
    projectile_creation_parameters?: CircularProjectileCreationSpecification[],
    projectile_orientation_offset: float,
    shell_particle?: CircularParticleCreationSpecification
}

/**
 * Applies to `stream` variant case
 */
interface AttackParametersStream extends AttackParameters {
    fluid_consumption: float,
    fluids?: AttackParameterFluid[],
    gun_barrel_length: float,
    gun_center_shift: GunShift4Way,
    projectile_creation_parameters?: CircularProjectileCreationSpecification[]
}

/**
 * Applies to `artillery-remote` variant case
 */
interface CapsuleActionArtilleryRemote extends CapsuleAction {
    
    /**
     * Name of the {@link flare prototype | runtime:LuaEntityPrototype}.
     */
    flare: string
}

/**
 * Applies to `destroy-cliffs` variant case
 */
interface CapsuleActionDestroyCliffs extends CapsuleAction {
    attack_parameters: AttackParameters,
    radius: float,
    timeout: uint
}

/**
 * Applies to `equipment-remote` variant case
 */
interface CapsuleActionEquipmentRemote extends CapsuleAction {
    
    /**
     * Name of the {@link LuaEquipmentPrototype | runtime:LuaEquipmentPrototype}.
     */
    equipment: string
}

/**
 * Applies to `throw` variant case
 */
interface CapsuleActionThrow extends CapsuleAction {
    attack_parameters: AttackParameters,
    
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack: boolean
}

/**
 * Applies to `use-on-self` variant case
 */
interface CapsuleActionUseOnSelf extends CapsuleAction {
    attack_parameters: AttackParameters
}

/**
 * Applies to `defines.command.attack` variant case
 */
interface CommandAttack extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    target: LuaEntity
}

/**
 * Applies to `defines.command.attack_area` variant case
 */
interface CommandAttackArea extends Command {
    
    /**
     * Center of the attack area.
     */
    destination: MapPosition,
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * Radius of the attack area.
     */
    radius: double
}

/**
 * Applies to `defines.command.build_base` variant case
 */
interface CommandBuildBase extends Command {
    
    /**
     * Where to build the base.
     */
    destination: MapPosition,
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in a non-candidate chunk. Defaults to `false`.
     */
    ignore_planner?: boolean
}

/**
 * Applies to `defines.command.compound` variant case
 */
interface CommandCompound extends Command {
    
    /**
     * The sub-commands.
     */
    commands: Command[],
    
    /**
     * How the commands should be chained together.
     */
    structure_type: defines.compound_command
}

/**
 * Applies to `defines.command.flee` variant case
 */
interface CommandFlee extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * The entity to flee from
     */
    from: LuaEntity
}

/**
 * Applies to `defines.command.go_to_location` variant case
 */
interface CommandGoToLocation extends Command {
    
    /**
     * The position to path to. Either this or `destination_entity` need to be specified. If both are, `destination_entity` is used.
     */
    destination?: MapPosition,
    
    /**
     * The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used.
     */
    destination_entity?: LuaEntity,
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * Flags that affect pathfinder behavior.
     */
    pathfind_flags?: PathfinderFlags,
    
    /**
     * How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`.
     */
    radius?: double
}

/**
 * Applies to `defines.command.group` variant case
 */
interface CommandGroup extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * The group whose command to follow.
     */
    group: LuaUnitGroup,
    
    /**
     * Whether the unit will use the group distraction or the commands distraction. Defaults to true.
     */
    use_group_distraction?: boolean
}

/**
 * Applies to `defines.command.stop` variant case
 */
interface CommandStop extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means stop forever.
     */
    ticks_to_wait?: uint
}

/**
 * Applies to `defines.command.wander` variant case
 */
interface CommandWander extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * Defaults to 10. Does not apply when `wander_in_group` is `true`.
     */
    radius?: double,
    
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means wander forever.
     */
    ticks_to_wait?: uint,
    
    /**
     * When commanding a group, defines how the group will wander. When `true`, the units in the group will wander around inside the group's radius, just like gathering biters. When `false`, the units will wander as a group, ie they will all walk together in the same random direction. Default is true for groups. Passing true for a single unit is an error.
     */
    wander_in_group?: boolean
}

/**
 * Applies to `collision-mask` variant case
 */
interface DecorativePrototypeFilterCollisionMask extends DecorativePrototypeFilter {
    mask: CollisionMask | CollisionMaskWithFlags,
    
    /**
     * How to filter.
     */
    mask_mode: 'collides' | 'layers-equals' | 'contains-any' | 'contains-all'
}

/**
 * Applies to `build-base-evolution-requirement` variant case
 */
interface EntityPrototypeFilterBuildBaseEvolutionRequirement extends EntityPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `collision-mask` variant case
 */
interface EntityPrototypeFilterCollisionMask extends EntityPrototypeFilter {
    mask: CollisionMask | CollisionMaskWithFlags,
    mask_mode: 'collides' | 'layers-equals' | 'contains-any' | 'contains-all'
}

/**
 * Applies to `crafting-category` variant case
 */
interface EntityPrototypeFilterCraftingCategory extends EntityPrototypeFilter {
    
    /**
     * Matches if the prototype is for a crafting machine with this {@link crafting category | runtime:LuaEntityPrototype::crafting_categories}.
     */
    crafting_category: string
}

/**
 * Applies to `emissions` variant case
 */
interface EntityPrototypeFilterEmissions extends EntityPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `flag` variant case
 */
interface EntityPrototypeFilterFlag extends EntityPrototypeFilter {
    flag: EntityPrototypeFlag
}

/**
 * Applies to `name` variant case
 */
interface EntityPrototypeFilterName extends EntityPrototypeFilter {
    
    /**
     * The prototype name, or list of acceptable names.
     */
    name: string | string[]
}

/**
 * Applies to `selection-priority` variant case
 */
interface EntityPrototypeFilterSelectionPriority extends EntityPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint8
}

/**
 * Applies to `type` variant case
 */
interface EntityPrototypeFilterType extends EntityPrototypeFilter {
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

/**
 * Applies to `type` variant case
 */
interface EquipmentPrototypeFilterType extends EquipmentPrototypeFilter {
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

/**
 * Applies to `default-temperature` variant case
 */
interface FluidPrototypeFilterDefaultTemperature extends FluidPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `emissions-multiplier` variant case
 */
interface FluidPrototypeFilterEmissionsMultiplier extends FluidPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `fuel-value` variant case
 */
interface FluidPrototypeFilterFuelValue extends FluidPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `gas-temperature` variant case
 */
interface FluidPrototypeFilterGasTemperature extends FluidPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `heat-capacity` variant case
 */
interface FluidPrototypeFilterHeatCapacity extends FluidPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `max-temperature` variant case
 */
interface FluidPrototypeFilterMaxTemperature extends FluidPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `name` variant case
 */
interface FluidPrototypeFilterName extends FluidPrototypeFilter {
    
    /**
     * The prototype name, or list of acceptable names.
     */
    name: string | string[]
}

/**
 * Applies to `subgroup` variant case
 */
interface FluidPrototypeFilterSubgroup extends FluidPrototypeFilter {
    
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    subgroup: string
}

/**
 * Applies to `crafting_queue` variant case
 */
interface GuiArrowSpecificationCraftingQueue extends GuiArrowSpecification {
    
    /**
     * Index in the crafting queue to point to.
     */
    crafting_queueindex: uint
}

/**
 * Applies to `entity` variant case
 */
interface GuiArrowSpecificationEntity extends GuiArrowSpecification {
    entity: LuaEntity
}

/**
 * Applies to `item_stack` variant case
 */
interface GuiArrowSpecificationItemStack extends GuiArrowSpecification {
    
    /**
     * Which inventory the stack is in.
     */
    inventory_index: defines.inventory,
    
    /**
     * Which stack to point to.
     */
    item_stack_index: uint,
    source: 'player' | 'target' | 'player-quickbar' | 'player-equipment-bar'
}

/**
 * Applies to `position` variant case
 */
interface GuiArrowSpecificationPosition extends GuiArrowSpecification {
    position: MapPosition
}

/**
 * Applies to `fluid` variant case
 */
interface IngredientFluid extends Ingredient {
    
    /**
     * The maximum fluid temperature allowed.
     */
    maximum_temperature?: double,
    
    /**
     * The minimum fluid temperature required.
     */
    minimum_temperature?: double
}

/**
 * Applies to `burnt-result` variant case
 */
interface ItemPrototypeFilterBurntResult extends ItemPrototypeFilter {
    
    /**
     * Filters for the burnt result.
     */
    elem_filters?: ItemPrototypeFilter[]
}

/**
 * Applies to `default-request-amount` variant case
 */
interface ItemPrototypeFilterDefaultRequestAmount extends ItemPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `flag` variant case
 */
interface ItemPrototypeFilterFlag extends ItemPrototypeFilter {
    flag: ItemPrototypeFlag
}

/**
 * Applies to `fuel-acceleration-multiplier` variant case
 */
interface ItemPrototypeFilterFuelAccelerationMultiplier extends ItemPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `fuel-category` variant case
 */
interface ItemPrototypeFilterFuelCategory extends ItemPrototypeFilter {
    
    /**
     * A {@link LuaFuelCategoryPrototype | runtime:LuaFuelCategoryPrototype} name
     */
    'fuel-category': string
}

/**
 * Applies to `fuel-emissions-multiplier` variant case
 */
interface ItemPrototypeFilterFuelEmissionsMultiplier extends ItemPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `fuel-top-speed-multiplier` variant case
 */
interface ItemPrototypeFilterFuelTopSpeedMultiplier extends ItemPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `fuel-value` variant case
 */
interface ItemPrototypeFilterFuelValue extends ItemPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `name` variant case
 */
interface ItemPrototypeFilterName extends ItemPrototypeFilter {
    
    /**
     * The prototype name, or list of acceptable names.
     */
    name: string | string[]
}

/**
 * Applies to `place-as-tile` variant case
 */
interface ItemPrototypeFilterPlaceAsTile extends ItemPrototypeFilter {
    
    /**
     * Filters for the placed tile.
     */
    elem_filters?: TilePrototypeFilter[]
}

/**
 * Applies to `place-result` variant case
 */
interface ItemPrototypeFilterPlaceResult extends ItemPrototypeFilter {
    
    /**
     * Filters for the place result.
     */
    elem_filters?: EntityPrototypeFilter[]
}

/**
 * Applies to `placed-as-equipment-result` variant case
 */
interface ItemPrototypeFilterPlacedAsEquipmentResult extends ItemPrototypeFilter {
    
    /**
     * Filters for the placed equipment.
     */
    elem_filters?: EquipmentPrototypeFilter[]
}

/**
 * Applies to `stack-size` variant case
 */
interface ItemPrototypeFilterStackSize extends ItemPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `subgroup` variant case
 */
interface ItemPrototypeFilterSubgroup extends ItemPrototypeFilter {
    
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    subgroup: string
}

/**
 * Applies to `type` variant case
 */
interface ItemPrototypeFilterType extends ItemPrototypeFilter {
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

/**
 * Applies to `wire-count` variant case
 */
interface ItemPrototypeFilterWireCount extends ItemPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaEntityClonedEventFilterGhostName extends LuaEntityClonedEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaEntityClonedEventFilterGhostType extends LuaEntityClonedEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaEntityClonedEventFilterName extends LuaEntityClonedEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaEntityClonedEventFilterType extends LuaEntityClonedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `damage-type` variant case
 */
interface LuaEntityDamagedEventFilterDamageType extends LuaEntityDamagedEventFilter {
    
    /**
     * A {@link LuaDamagePrototype | runtime:LuaDamagePrototype} name.
     */
    type: string
}

/**
 * Applies to `final-damage-amount` variant case
 */
interface LuaEntityDamagedEventFilterFinalDamageAmount extends LuaEntityDamagedEventFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: float
}

/**
 * Applies to `final-health` variant case
 */
interface LuaEntityDamagedEventFilterFinalHealth extends LuaEntityDamagedEventFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: float
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaEntityDamagedEventFilterGhostName extends LuaEntityDamagedEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaEntityDamagedEventFilterGhostType extends LuaEntityDamagedEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaEntityDamagedEventFilterName extends LuaEntityDamagedEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `original-damage-amount` variant case
 */
interface LuaEntityDamagedEventFilterOriginalDamageAmount extends LuaEntityDamagedEventFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: float
}

/**
 * Applies to `type` variant case
 */
interface LuaEntityDamagedEventFilterType extends LuaEntityDamagedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaEntityDeconstructionCancelledEventFilterGhostName extends LuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaEntityDeconstructionCancelledEventFilterGhostType extends LuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaEntityDeconstructionCancelledEventFilterName extends LuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaEntityDeconstructionCancelledEventFilterType extends LuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaEntityDiedEventFilterGhostName extends LuaEntityDiedEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaEntityDiedEventFilterGhostType extends LuaEntityDiedEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaEntityDiedEventFilterName extends LuaEntityDiedEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaEntityDiedEventFilterType extends LuaEntityDiedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaEntityMarkedForDeconstructionEventFilterGhostName extends LuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaEntityMarkedForDeconstructionEventFilterGhostType extends LuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaEntityMarkedForDeconstructionEventFilterName extends LuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaEntityMarkedForDeconstructionEventFilterType extends LuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaEntityMarkedForUpgradeEventFilterGhostName extends LuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaEntityMarkedForUpgradeEventFilterGhostType extends LuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaEntityMarkedForUpgradeEventFilterName extends LuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaEntityMarkedForUpgradeEventFilterType extends LuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `force` variant case
 */
interface LuaPlayerBuiltEntityEventFilterForce extends LuaPlayerBuiltEntityEventFilter {
    
    /**
     * The entity force
     */
    force: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaPlayerBuiltEntityEventFilterGhostName extends LuaPlayerBuiltEntityEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaPlayerBuiltEntityEventFilterGhostType extends LuaPlayerBuiltEntityEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaPlayerBuiltEntityEventFilterName extends LuaPlayerBuiltEntityEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPlayerBuiltEntityEventFilterType extends LuaPlayerBuiltEntityEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaPlayerMinedEntityEventFilterGhostName extends LuaPlayerMinedEntityEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaPlayerMinedEntityEventFilterGhostType extends LuaPlayerMinedEntityEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaPlayerMinedEntityEventFilterName extends LuaPlayerMinedEntityEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPlayerMinedEntityEventFilterType extends LuaPlayerMinedEntityEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaPlayerRepairedEntityEventFilterGhostName extends LuaPlayerRepairedEntityEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaPlayerRepairedEntityEventFilterGhostType extends LuaPlayerRepairedEntityEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaPlayerRepairedEntityEventFilterName extends LuaPlayerRepairedEntityEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPlayerRepairedEntityEventFilterType extends LuaPlayerRepairedEntityEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPostEntityDiedEventFilterType extends LuaPostEntityDiedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaPreGhostDeconstructedEventFilterGhostName extends LuaPreGhostDeconstructedEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaPreGhostDeconstructedEventFilterGhostType extends LuaPreGhostDeconstructedEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaPreGhostDeconstructedEventFilterName extends LuaPreGhostDeconstructedEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPreGhostDeconstructedEventFilterType extends LuaPreGhostDeconstructedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaPreGhostUpgradedEventFilterGhostName extends LuaPreGhostUpgradedEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaPreGhostUpgradedEventFilterGhostType extends LuaPreGhostUpgradedEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaPreGhostUpgradedEventFilterName extends LuaPreGhostUpgradedEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPreGhostUpgradedEventFilterType extends LuaPreGhostUpgradedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaPrePlayerMinedEntityEventFilterGhostName extends LuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaPrePlayerMinedEntityEventFilterGhostType extends LuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaPrePlayerMinedEntityEventFilterName extends LuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPrePlayerMinedEntityEventFilterType extends LuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaPreRobotMinedEntityEventFilterGhostName extends LuaPreRobotMinedEntityEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaPreRobotMinedEntityEventFilterGhostType extends LuaPreRobotMinedEntityEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaPreRobotMinedEntityEventFilterName extends LuaPreRobotMinedEntityEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaPreRobotMinedEntityEventFilterType extends LuaPreRobotMinedEntityEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `force` variant case
 */
interface LuaRobotBuiltEntityEventFilterForce extends LuaRobotBuiltEntityEventFilter {
    
    /**
     * The entity force
     */
    force: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaRobotBuiltEntityEventFilterGhostName extends LuaRobotBuiltEntityEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaRobotBuiltEntityEventFilterGhostType extends LuaRobotBuiltEntityEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaRobotBuiltEntityEventFilterName extends LuaRobotBuiltEntityEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaRobotBuiltEntityEventFilterType extends LuaRobotBuiltEntityEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaRobotMinedEntityEventFilterGhostName extends LuaRobotMinedEntityEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaRobotMinedEntityEventFilterGhostType extends LuaRobotMinedEntityEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaRobotMinedEntityEventFilterName extends LuaRobotMinedEntityEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaRobotMinedEntityEventFilterType extends LuaRobotMinedEntityEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaScriptRaisedBuiltEventFilterGhostName extends LuaScriptRaisedBuiltEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaScriptRaisedBuiltEventFilterGhostType extends LuaScriptRaisedBuiltEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaScriptRaisedBuiltEventFilterName extends LuaScriptRaisedBuiltEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaScriptRaisedBuiltEventFilterType extends LuaScriptRaisedBuiltEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaScriptRaisedDestroyEventFilterGhostName extends LuaScriptRaisedDestroyEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaScriptRaisedDestroyEventFilterGhostType extends LuaScriptRaisedDestroyEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaScriptRaisedDestroyEventFilterName extends LuaScriptRaisedDestroyEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaScriptRaisedDestroyEventFilterType extends LuaScriptRaisedDestroyEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaScriptRaisedReviveEventFilterGhostName extends LuaScriptRaisedReviveEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaScriptRaisedReviveEventFilterGhostType extends LuaScriptRaisedReviveEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaScriptRaisedReviveEventFilterName extends LuaScriptRaisedReviveEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaScriptRaisedReviveEventFilterType extends LuaScriptRaisedReviveEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaScriptRaisedTeleportedEventFilterGhostName extends LuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaScriptRaisedTeleportedEventFilterGhostType extends LuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaScriptRaisedTeleportedEventFilterName extends LuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaScriptRaisedTeleportedEventFilterType extends LuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaSectorScannedEventFilterGhostName extends LuaSectorScannedEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaSectorScannedEventFilterGhostType extends LuaSectorScannedEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaSectorScannedEventFilterName extends LuaSectorScannedEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaSectorScannedEventFilterType extends LuaSectorScannedEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `ghost_name` variant case
 */
interface LuaUpgradeCancelledEventFilterGhostName extends LuaUpgradeCancelledEventFilter {
    
    /**
     * The ghost prototype name.
     */
    name: string
}

/**
 * Applies to `ghost_type` variant case
 */
interface LuaUpgradeCancelledEventFilterGhostType extends LuaUpgradeCancelledEventFilter {
    
    /**
     * The ghost prototype type.
     */
    type: string
}

/**
 * Applies to `name` variant case
 */
interface LuaUpgradeCancelledEventFilterName extends LuaUpgradeCancelledEventFilter {
    
    /**
     * The prototype name.
     */
    name: string
}

/**
 * Applies to `type` variant case
 */
interface LuaUpgradeCancelledEventFilterType extends LuaUpgradeCancelledEventFilter {
    
    /**
     * The prototype type.
     */
    type: string
}

/**
 * Applies to `mod` variant case
 */
interface ModSettingPrototypeFilterMod extends ModSettingPrototypeFilter {
    
    /**
     * The mod name
     */
    mod: string
}

/**
 * Applies to `setting-type` variant case
 */
interface ModSettingPrototypeFilterSettingType extends ModSettingPrototypeFilter {
    
    /**
     * The setting scope type.
     */
    type: 'startup' | 'runtime-global' | 'runtime-per-user'
}

/**
 * Applies to `type` variant case
 */
interface ModSettingPrototypeFilterType extends ModSettingPrototypeFilter {
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

/**
 * Applies to `fluid` variant case
 */
interface ProductFluid extends Product {
    
    /**
     * The fluid temperature of this product.
     */
    temperature?: double
}

/**
 * Applies to `category` variant case
 */
interface RecipePrototypeFilterCategory extends RecipePrototypeFilter {
    
    /**
     * A {@link LuaRecipeCategoryPrototype | runtime:LuaRecipeCategoryPrototype} name
     */
    category: string
}

/**
 * Applies to `emissions-multiplier` variant case
 */
interface RecipePrototypeFilterEmissionsMultiplier extends RecipePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `energy` variant case
 */
interface RecipePrototypeFilterEnergy extends RecipePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `has-ingredient-fluid` variant case
 */
interface RecipePrototypeFilterHasIngredientFluid extends RecipePrototypeFilter {
    
    /**
     * Matches if at least 1 ingredient is a fluid that matches these filters.
     */
    elem_filters?: FluidPrototypeFilter[]
}

/**
 * Applies to `has-ingredient-item` variant case
 */
interface RecipePrototypeFilterHasIngredientItem extends RecipePrototypeFilter {
    
    /**
     * Matches if at least 1 ingredient is an item that matches these filters.
     */
    elem_filters?: ItemPrototypeFilter[]
}

/**
 * Applies to `has-product-fluid` variant case
 */
interface RecipePrototypeFilterHasProductFluid extends RecipePrototypeFilter {
    
    /**
     * Matches if at least 1 product is a fluid that matches these filters.
     */
    elem_filters?: FluidPrototypeFilter[]
}

/**
 * Applies to `has-product-item` variant case
 */
interface RecipePrototypeFilterHasProductItem extends RecipePrototypeFilter {
    
    /**
     * Matches if at least 1 product is an item that matches these filters.
     */
    elem_filters?: ItemPrototypeFilter[]
}

/**
 * Applies to `overload-multiplier` variant case
 */
interface RecipePrototypeFilterOverloadMultiplier extends RecipePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `request-paste-multiplier` variant case
 */
interface RecipePrototypeFilterRequestPasteMultiplier extends RecipePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `subgroup` variant case
 */
interface RecipePrototypeFilterSubgroup extends RecipePrototypeFilter {
    
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    subgroup: string
}

/**
 * Applies to `OtherTypes` variant case
 */
interface TechnologyModifierOtherTypes extends TechnologyModifier {
    
    /**
     * Modification value. This value will be added to the variable it modifies.
     */
    modifier: double
}

/**
 * Applies to `ammo-damage` variant case
 */
interface TechnologyModifierAmmoDamage extends TechnologyModifier {
    
    /**
     * Prototype name of the ammunition category that is affected
     */
    ammo_category: string,
    
    /**
     * Modification value. This will be added to the current ammo damage modifier upon researching.
     */
    modifier: double
}

/**
 * Applies to `give-item` variant case
 */
interface TechnologyModifierGiveItem extends TechnologyModifier {
    
    /**
     * Number of items to give. Defaults to `1`.
     */
    count?: uint,
    
    /**
     * Item prototype name to give.
     */
    item: string
}

/**
 * Applies to `gun-speed` variant case
 */
interface TechnologyModifierGunSpeed extends TechnologyModifier {
    
    /**
     * Prototype name of the ammunition category that is affected
     */
    ammo_category: string,
    
    /**
     * Modification value. This will be added to the current gun speed modifier upon researching.
     */
    modifier: double
}

/**
 * Applies to `nothing` variant case
 */
interface TechnologyModifierNothing extends TechnologyModifier {
    
    /**
     * Description of this nothing modifier.
     */
    effect_description: LocalisedString
}

/**
 * Applies to `turret-attack` variant case
 */
interface TechnologyModifierTurretAttack extends TechnologyModifier {
    
    /**
     * Modification value. This will be added to the current turret damage modifier upon researching.
     */
    modifier: double,
    
    /**
     * Turret prototype name this modifier will affect.
     */
    turret_id: string
}

/**
 * Applies to `unlock-recipe` variant case
 */
interface TechnologyModifierUnlockRecipe extends TechnologyModifier {
    
    /**
     * Recipe prototype name to unlock.
     */
    recipe: string
}

/**
 * Applies to `level` variant case
 */
interface TechnologyPrototypeFilterLevel extends TechnologyPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `max-level` variant case
 */
interface TechnologyPrototypeFilterMaxLevel extends TechnologyPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `research-unit-ingredient` variant case
 */
interface TechnologyPrototypeFilterResearchUnitIngredient extends TechnologyPrototypeFilter {
    
    /**
     * The research ingredient to check.
     */
    ingredient: string
}

/**
 * Applies to `time` variant case
 */
interface TechnologyPrototypeFilterTime extends TechnologyPrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: uint
}

/**
 * Applies to `unlocks-recipe` variant case
 */
interface TechnologyPrototypeFilterUnlocksRecipe extends TechnologyPrototypeFilter {
    
    /**
     * The recipe to check.
     */
    recipe: string
}

/**
 * Applies to `collision-mask` variant case
 */
interface TilePrototypeFilterCollisionMask extends TilePrototypeFilter {
    mask: CollisionMask | CollisionMaskWithFlags,
    
    /**
     * How to filter.
     */
    mask_mode: 'collides' | 'layers-equals' | 'contains-any' | 'contains-all'
}

/**
 * Applies to `decorative-removal-probability` variant case
 */
interface TilePrototypeFilterDecorativeRemovalProbability extends TilePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: float
}

/**
 * Applies to `emissions` variant case
 */
interface TilePrototypeFilterEmissions extends TilePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `vehicle-friction-modifier` variant case
 */
interface TilePrototypeFilterVehicleFrictionModifier extends TilePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}

/**
 * Applies to `walking-speed-modifier` variant case
 */
interface TilePrototypeFilterWalkingSpeedModifier extends TilePrototypeFilter {
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: double
}


}