// Factorio concept definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.89
// API version 4

declare namespace runtime {
/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type AchievementPrototypeFilter = AchievementPrototypeFilterType | DefaultAchievementPrototypeFilter

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
    tick: number
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
    consumption_modifier?: number,
    cooldown_modifier?: number,
    
    /**
     * Energy consumption of a single shot, if applicable. Defaults to `0`.
     */
    energy_consumption?: number,
    range_modifier?: number,
    
    /**
     * One of `"entity"` (fires at an entity), `"position"` (fires directly at a position), or `"direction"` (fires in a direction).
     */
    target_type: string
}

/**
 * Any basic type (string, number, boolean), table, or LuaObject.
 */
type Any = string | boolean | number | Table | object

/**
 * Any basic type (string, number, boolean) or table.
 */
type AnyBasic = string | boolean | number | Table

interface ArithmeticCombinatorParameters {
    
    /**
     * Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`.
     */
    first_constant?: number,
    
    /**
     * First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`.
     */
    first_signal?: SignalID,
    
    /**
     * Must be one of `"*"`, `"/"`, `"+"`, `"-"`, `"%"`, `"^"`, `"<<"`, `">>"`, `"AND"`, `"OR"`, `"XOR"`. When not specified, defaults to `"*"`.
     */
    operation?: string,
    
    /**
     * Specifies the signal to output.
     */
    output_signal?: SignalID,
    
    /**
     * Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`.
     */
    second_constant?: number,
    
    /**
     * Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`.
     */
    second_signal?: SignalID
}

interface AttackParameterFluid {
    
    /**
     * Multiplier applied to the damage of an attack.
     */
    damage_modifier: number,
    
    /**
     * Name of the {@link LuaFluidPrototype | runtime:LuaFluidPrototype}.
     */
    type: string
}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 */
type AttackParameters = AttackParametersProjectile | AttackParametersStream | DefaultAttackParameters

interface AutoplaceControl {
    
    /**
     * For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the {@link LuaAutoplaceControlPrototype | runtime:LuaAutoplaceControlPrototype} is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency.
     */
    frequency: MapGenSize,
    
    /**
     * Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the {@link LuaAutoplaceControlPrototype | runtime:LuaAutoplaceControlPrototype} by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness.
     */
    richness: MapGenSize,
    
    /**
     * For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
     */
    size: MapGenSize
}

interface AutoplaceSettings {
    settings: {[key: string]: AutoplaceControl},
    
    /**
     * Whether missing autoplace names for this type should be default enabled.
     */
    treat_missing_as_default: boolean
}

/**
 * Specifies how probability and richness are calculated when placing something on the map. Can be specified either using `probability_expression` and `richness_expression` or by using all the other fields.
 */
interface AutoplaceSpecification {
    
    /**
     * Control prototype name.
     */
    control?: string,
    coverage: number,
    default_enabled: boolean,
    force: string,
    max_probability: number,
    order: string,
    peaks?: AutoplaceSpecificationPeak[],
    placement_density: number,
    probability_expression: NoiseExpression,
    random_probability_penalty: number,
    richness_base: number,
    richness_expression: NoiseExpression,
    richness_multiplier: number,
    richness_multiplier_distance_bonus: number,
    sharpness: number,
    starting_area_size: number,
    tile_restriction?: AutoplaceSpecificationRestriction[]
}

interface AutoplaceSpecificationPeak {
    aux_max_range: number,
    aux_optimal: number,
    aux_range: number,
    aux_top_property_limit: number,
    distance_max_range: number,
    distance_optimal: number,
    distance_range: number,
    distance_top_property_limit: number,
    elevation_max_range: number,
    elevation_optimal: number,
    elevation_range: number,
    elevation_top_property_limit: number,
    influence: number,
    max_influence: number,
    min_influence: number,
    noisePersistence: number,
    
    /**
     * Prototype name of the noise layer.
     */
    noise_layer?: string,
    noise_octaves_difference: number,
    richness_influence: number,
    starting_area_weight_max_range: number,
    starting_area_weight_optimal: number,
    starting_area_weight_range: number,
    starting_area_weight_top_property_limit: number,
    temperature_max_range: number,
    temperature_optimal: number,
    temperature_range: number,
    temperature_top_property_limit: number,
    tier_from_start_max_range: number,
    tier_from_start_optimal: number,
    tier_from_start_range: number,
    tier_from_start_top_property_limit: number,
    water_max_range: number,
    water_optimal: number,
    water_range: number,
    water_top_property_limit: number
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
    entity_number: number,
    
    /**
     * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts.
     */
    items?: {[key: string]: number},
    
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
    index: number,
    
    /**
     * The icon to use. It can be any item icon as well as any virtual signal icon.
     */
    signal: SignalID
}

/**
 * Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with {@link MapPosition | runtime:MapPosition}, the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero.
 * @example
 * Explicit definition: 
 * ```
 * {left_top = {x = -2, y = -3}, right_bottom = {x = 5, y = 8}}
 * ```
 *
 * @example
 * Shorthand: 
 * ```
 * {{-2, -3}, {5, 8}}
 * ```
 *
 */
type BoundingBox = {
    left_top: MapPosition,
    orientation?: RealOrientation,
    right_bottom: MapPosition
}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 */
type CapsuleAction = CapsuleActionArtilleryRemote | CapsuleActionDestroyCliffs | CapsuleActionEquipmentRemote | CapsuleActionThrow | CapsuleActionUseOnSelf

/**
 * @remarks
 * Either `icon`, `text`, or both must be provided.
 *
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
    x: number,
    y: number
}

/**
 * A {@link ChunkPosition | runtime:ChunkPosition} with an added bounding box for the area of the chunk.
 */
interface ChunkPositionAndArea {
    area: BoundingBox,
    x: number,
    y: number
}

interface CircuitCondition {
    
    /**
     * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
     */
    comparator?: ComparatorString,
    
    /**
     * Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
     */
    constant?: number,
    
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
    creation_distance: number,
    creation_distance_orientation: number,
    direction: number,
    direction_deviation: number,
    height: number,
    height_deviation: number,
    
    /**
     * Name of the {@link LuaEntityPrototype | runtime:LuaEntityPrototype}
     */
    name: string,
    speed: number,
    speed_deviation: number,
    starting_frame_speed: number,
    starting_frame_speed_deviation: number,
    use_source_position: boolean,
    vertical_speed: number,
    vertical_speed_deviation: number
}

interface CircularProjectileCreationSpecification {
    _0: RealOrientation,
    _1: Vector
}

type CliffOrientation = 'west-to-east' | 'north-to-south' | 'east-to-west' | 'south-to-north' | 'west-to-north' | 'north-to-east' | 'east-to-south' | 'south-to-west' | 'west-to-south' | 'north-to-west' | 'east-to-north' | 'south-to-east' | 'west-to-none' | 'none-to-east' | 'east-to-none' | 'none-to-west' | 'north-to-none' | 'none-to-south' | 'south-to-none' | 'none-to-north'

interface CliffPlacementSettings {
    
    /**
     * Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI.
     */
    cliff_elevation_0: number,
    
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     */
    cliff_elevation_interval: number,
    
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
    a?: number,
    b?: number,
    g?: number,
    r?: number
}

/**
 * Same as {@link Color | runtime:Color}, but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255].
 */
type ColorModifier = {
    a?: number,
    b?: number,
    g?: number,
    r?: number
}

/**
 * Commands can be given to enemies and unit groups.
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 */
interface Command {
    
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    type: defines.command
}

/**
 * A string that specifies how the inputs should be compared
 * @remarks
 * While the API accepts both versions for `"less/greater than or equal to"` and `"not equal"`, it'll always return `"≥"`, `"≤"` or `"≠"` respectively when reading them back.
 *
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
    count: number,
    
    /**
     * Index of the constant combinator's slot to set this signal to.
     */
    index: number,
    
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
    count: number,
    
    /**
     * The index of the item in the crafting queue.
     */
    index: number,
    
    /**
     * The item is a prerequisite for another item in the queue.
     */
    prerequisite: boolean,
    
    /**
     * The recipe being crafted.
     */
    recipe: string
}

type CursorBoxRenderType = /* Yellow box. */ 'entity' | /* Red box. */ 'not-allowed' | /* Light blue box. */ 'electricity' | /* Light blue box. */ 'pair' | /* Green box. */ 'copy' | /* White box. */ 'train-visualization' | /* Light blue box. */ 'logistics' | /* Green box. */ 'blueprint-snap-rectangle'

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
    player_index?: number,
    
    /**
     * The tick the command was used in.
     */
    tick: number
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
    time_to_wait: number,
    
    /**
     * How many ticks it will take to reach this waypoint from the previous one.
     */
    transition_time: number,
    
    /**
     * Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used.
     */
    zoom?: number
}

interface DeciderCombinatorParameters {
    
    /**
     * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
     */
    comparator?: ComparatorString,
    
    /**
     * Constant to use as the second argument of operation. Defaults to `0`.
     */
    constant?: number,
    
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
    amount: number,
    
    /**
     * The name of the decorative prototype.
     */
    name: string,
    position: TilePosition
}

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type DecorativePrototypeFilter = DecorativePrototypeFilterCollisionMask | DefaultDecorativePrototypeFilter

interface DecorativeResult {
    amount: number,
    decorative: LuaDecorativePrototype,
    position: TilePosition
}

/**
 * Technology and recipe difficulty settings. Updating any of the attributes will immediately take effect in the game engine.
 */
interface DifficultySettings {
    recipe_difficulty: defines.difficulty_settings.recipe_difficulty

    /**
     * Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See {@link LuaForce | runtime:LuaForce} for that.
     */
    research_queue_setting: string

    technology_difficulty: defines.difficulty_settings.technology_difficulty

    /**
     * A value in range [0.001, 1000].
     */
    technology_price_multiplier: number

}

interface DisplayResolution {
    height: number,
    width: number
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

/**
 * These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%.
 */
interface EnemyEvolutionMapSettings {
    
    /**
     * The amount evolution progresses for every destroyed spawner. Defaults to `0.002`.
     */
    destroy_factor: number,
    
    /**
     * Whether enemy evolution is enabled at all.
     */
    enabled: boolean,
    
    /**
     * The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`.
     */
    pollution_factor: number,
    
    /**
     * The amount evolution naturally progresses by every second. Defaults to `0.000004`.
     */
    time_factor: number
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
 *           * building_coefficient
 *           * neighbouring_chunk_coefficient^distance(chunk, neighbour)
 * 
 * base = 0
 * for neighbour in all chunk within friendly_base_influence_radius from chunk:
 *   base += num of enemy bases on neighbour
 *           * other_base_coefficient
 *           * neighbouring_base_chunk_coefficient^distance(chunk, neighbour)
 * 
 * score(chunk) = 1 / (1 + player + base)
 * ```
 */
interface EnemyExpansionMapSettings {
    
    /**
     * Defaults to `0.1`.
     */
    building_coefficient: number,
    
    /**
     * Whether enemy expansion is enabled at all.
     */
    enabled: boolean,
    
    /**
     * Defaults to `2`.
     */
    enemy_building_influence_radius: number,
    
    /**
     * Defaults to `2`.
     */
    friendly_base_influence_radius: number,
    
    /**
     * A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%.
     */
    max_colliding_tiles_coefficient: number,
    
    /**
     * The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3'600=216'000` ticks.
     */
    max_expansion_cooldown: number,
    
    /**
     * Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`.
     */
    max_expansion_distance: number,
    
    /**
     * The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3'600=14'400` ticks.
     */
    min_expansion_cooldown: number,
    
    /**
     * Defaults to `0.4`.
     */
    neighbouring_base_chunk_coefficient: number,
    
    /**
     * Defaults to `0.5`.
     */
    neighbouring_chunk_coefficient: number,
    
    /**
     * Defaults to `2.0`.
     */
    other_base_coefficient: number,
    
    /**
     * The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`.
     */
    settler_group_max_size: number,
    
    /**
     * The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`.
     */
    settler_group_min_size: number
}

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type EntityPrototypeFilter = EntityPrototypeFilterBuildBaseEvolutionRequirement | EntityPrototypeFilterCollisionMask | EntityPrototypeFilterCraftingCategory | EntityPrototypeFilterEmissions | EntityPrototypeFilterFlag | EntityPrototypeFilterName | EntityPrototypeFilterSelectionPriority | EntityPrototypeFilterType | DefaultEntityPrototypeFilter

/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 * 
 * By default, none of these flags are set.
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
    x: number,
    y: number
}

/**
 * Position inside an equipment grid. This uses the same format as {@link MapPosition | runtime:MapPosition}, meaning it can be specified either with or without explicit keys.
 * @example
 * Explicit definition: 
 * ```
 * {x = 5, y = 2}
 * {y = 2, x = 5}
 * ```
 *
 * @example
 * Shorthand: 
 * ```
 * {1, 2}
 * ```
 *
 */
type EquipmentPosition = {
    x: number,
    y: number
}

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type EquipmentPrototypeFilter = EquipmentPrototypeFilterType | DefaultEquipmentPrototypeFilter

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
    tick: number
}

/**
 * Used to filter out irrelevant event callbacks in a performant way.
 * @remarks
 * Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
 *
 */
type EventFilter = Array<LuaEntityClonedEventFilter | LuaEntityDamagedEventFilter | LuaPlayerMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPostEntityDiedEventFilter | LuaEntityDiedEventFilter | LuaScriptRaisedReviveEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaPreGhostUpgradedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaSectorScannedEventFilter | LuaRobotMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerRepairedEntityEventFilter>

interface Fluid {
    
    /**
     * Amount of the fluid.
     */
    amount: number,
    
    /**
     * Fluid prototype name of the fluid.
     */
    name: string,
    
    /**
     * The temperature. When reading from {@link LuaFluidBox | runtime:LuaFluidBox}, this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype.
     */
    temperature?: number
}

/**
 * A definition of a fluidbox connection point.
 */
interface FluidBoxConnection {
    
    /**
     * The maximum tile distance this underground connection can connect at if this is an underground pipe.
     */
    max_underground_distance?: number,
    
    /**
     * The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array.
     */
    positions: Vector[],
    
    /**
     * One of "input", "output", or "input-output".
     */
    type: string
}

interface FluidBoxFilter {
    
    /**
     * The maximum temperature allowed into the fluidbox.
     */
    maximum_temperature: number,
    
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    minimum_temperature: number,
    
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
    maximum_temperature?: number,
    
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    minimum_temperature?: number,
    
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
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type FluidPrototypeFilter = FluidPrototypeFilterDefaultTemperature | FluidPrototypeFilterEmissionsMultiplier | FluidPrototypeFilterFuelValue | FluidPrototypeFilterGasTemperature | FluidPrototypeFilterHeatCapacity | FluidPrototypeFilterMaxTemperature | FluidPrototypeFilterName | FluidPrototypeFilterSubgroup | DefaultFluidPrototypeFilter

type ForceCondition = /* All forces pass. */ 'all' | /* Forces which will attack pass. */ 'enemy' | /* Forces which won't attack pass. */ 'ally' | /* Forces which are friends pass. */ 'friend' | /* Forces which are not friends pass. */ 'not-friend' | /* The same force pass. */ 'same' | /* The non-same forces pass. */ 'not-same'

/**
 * A force may be specified in one of three ways.
 */
type ForceIdentification = /* The force index. */ number | /* The force name. */ string | /* A reference to {@link LuaForce | runtime:LuaForce} may be passed directly. */ LuaForce

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
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 */
type GuiArrowSpecification = GuiArrowSpecificationCraftingQueue | GuiArrowSpecificationEntity | GuiArrowSpecificationItemStack | GuiArrowSpecificationPosition | DefaultGuiArrowSpecification

type GuiArrowType = 'nowhere' | 'goal' | 'entity_info' | 'active_window' | 'entity' | 'position' | 'crafting_queue' | 'item_stack'

type GuiElementType = /* A clickable element. Relevant event: {@link on_gui_click | runtime:on_gui_click} */ 'button' | /* A `button` that displays a sprite rather than text. Relevant event: {@link on_gui_click | runtime:on_gui_click} */ 'sprite-button' | /* A clickable element with a check mark that can be turned off or on. Relevant event: {@link on_gui_checked_state_changed | runtime:on_gui_checked_state_changed} */ 'checkbox' | /* An invisible container that lays out its children either horizontally or vertically. */ 'flow' | /* A non-transparent box that contains other elements. It can have a title (set via the `caption` attribute). Just like a `flow`, it lays out its children either horizontally or vertically. Relevant event: {@link on_gui_location_changed | runtime:on_gui_location_changed} */ 'frame' | /* A piece of text. */ 'label' | /* A horizontal or vertical separation line. */ 'line' | /* A partially filled bar that can be used to indicate progress. */ 'progressbar' | /* An invisible container that lays out its children in a specific number of columns. The width of each column is determined by the widest element it contains. */ 'table' | /* A single-line box the user can type into. Relevant events: {@link on_gui_text_changed | runtime:on_gui_text_changed}, {@link on_gui_confirmed | runtime:on_gui_confirmed} */ 'textfield' | /* An element that is similar to a `checkbox`, but with a circular appearance. Clicking a selected radio button will not unselect it. Radio buttons are not linked to each other in any way. Relevant event: {@link on_gui_checked_state_changed | runtime:on_gui_checked_state_changed} */ 'radiobutton' | /* An element that shows an image. */ 'sprite' | /* An invisible element that is similar to a `flow`, but has the ability to show and use scroll bars. */ 'scroll-pane' | /* A drop-down containing strings of text. Relevant event: {@link on_gui_selection_state_changed | runtime:on_gui_selection_state_changed} */ 'drop-down' | /* A list of strings, only one of which can be selected at a time. Shows a scroll bar if necessary. Relevant event: {@link on_gui_selection_state_changed | runtime:on_gui_selection_state_changed} */ 'list-box' | /* A camera that shows the game at the given position on the given surface. It can visually track an {@link entity | runtime:LuaGuiElement::entity} that is set after the element has been created. */ 'camera' | /* A button that lets the player pick from a certain kind of prototype, with optional filtering. Relevant event: {@link on_gui_elem_changed | runtime:on_gui_elem_changed} */ 'choose-elem-button' | /* A multi-line `textfield`. Relevant event: {@link on_gui_text_changed | runtime:on_gui_text_changed} */ 'text-box' | /* A horizontal number line which can be used to choose a number. Relevant event: {@link on_gui_value_changed | runtime:on_gui_value_changed} */ 'slider' | /* A minimap preview, similar to the normal player minimap. It can visually track an {@link entity | runtime:LuaGuiElement::entity} that is set after the element has been created. */ 'minimap' | /* A preview of an entity. The {@link entity | runtime:LuaGuiElement::entity} has to be set after the element has been created. */ 'entity-preview' | /* An empty element that just exists. The root GUI elements `screen` and `relative` are `empty-widget`s. */ 'empty-widget' | /* A collection of `tab`s and their contents. Relevant event: {@link on_gui_selected_tab_changed | runtime:on_gui_selected_tab_changed} */ 'tabbed-pane' | /* A tab for use in a `tabbed-pane`. */ 'tab' | /* A switch with three possible states. Can have labels attached to either side. Relevant event: {@link on_gui_switch_state_changed | runtime:on_gui_switch_state_changed} */ 'switch'

/**
 * Screen coordinates of a GUI element in a {@link LuaGui | runtime:LuaGui}. This uses the same format as {@link TilePosition | runtime:TilePosition}, meaning it can be specified either with or without explicit keys.
 */
type GuiLocation = {
    x: number,
    y: number
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
     * `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
     */
    mode?: string,
    
    /**
     * The target temperature. Defaults to the minimum temperature of the heat buffer.
     */
    temperature?: number
}

/**
 * A single filter used by an infinity-filters instance.
 */
interface InfinityInventoryFilter {
    
    /**
     * The count of the filter.
     */
    count?: number,
    
    /**
     * The index of this filter in the filters list. Not required when writing a filter.
     */
    index: number,
    
    /**
     * `"at-least"`, `"at-most"`, or `"exactly"`. Defaults to `"at-least"`.
     */
    mode?: string,
    
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
     * `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
     */
    mode?: string,
    
    /**
     * Name of the fluid.
     */
    name: string,
    
    /**
     * The fill percentage the pipe (e.g. 0.5 for 50%). Can't be negative.
     */
    percentage?: number,
    
    /**
     * The temperature of the fluid. Defaults to the default/minimum temperature of the fluid.
     */
    temperature?: number
}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 */
type Ingredient = IngredientFluid | DefaultIngredient

interface InserterCircuitConditions {
    circuit?: CircuitCondition,
    logistics?: CircuitCondition
}

interface InventoryFilter {
    
    /**
     * Position of the corresponding filter slot.
     */
    index: number,
    
    /**
     * Item prototype name of the item to filter.
     */
    name: string
}

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type ItemPrototypeFilter = ItemPrototypeFilterBurntResult | ItemPrototypeFilterDefaultRequestAmount | ItemPrototypeFilterFlag | ItemPrototypeFilterFuelAccelerationMultiplier | ItemPrototypeFilterFuelCategory | ItemPrototypeFilterFuelEmissionsMultiplier | ItemPrototypeFilterFuelTopSpeedMultiplier | ItemPrototypeFilterFuelValue | ItemPrototypeFilterName | ItemPrototypeFilterPlaceAsTile | ItemPrototypeFilterPlaceResult | ItemPrototypeFilterPlacedAsEquipmentResult | ItemPrototypeFilterStackSize | ItemPrototypeFilterSubgroup | ItemPrototypeFilterType | ItemPrototypeFilterWireCount | DefaultItemPrototypeFilter

/**
 * A set of flags. Active flags are in the dictionary as `true`, while inactive flags aren't present at all.
 * 
 * By default, none of these flags are set.
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
    ammo?: number,
    
    /**
     * Number of items the stack holds. If not specified, defaults to `1`.
     */
    count?: number,
    
    /**
     * Durability of the tool items in the stack.
     */
    durability?: number,
    
    /**
     * Health of the items in the stack. Defaults to `1.0`.
     */
    health?: number,
    
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
    slot: number
}

/**
 * Localised strings are a way to support translation of in-game text. It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
 * 
 * The key identifies the string template. For example, `"gui-alert-tooltip.attack"` (for the template `"__1__
 *     objects are being damaged"`; see the file `data/core/locale/en.cfg`).
 * 
 * The template can contain placeholders such as `__1__` or `__2__`. These will be replaced by the respective parameter in the LocalisedString. The parameters themselves can be other localised strings, which will be processed recursively in the same fashion. Localised strings can not be recursed deeper than 20 levels and can not have more than 20 parameters.
 * 
 * There are two special flags for the localised string, indicated by the key being a particular string. First, if the key is the empty string (`""`), then all parameters will be concatenated (after processing, if any are localised strings themselves). Second, if the key is a question mark (`"?"`), then the first valid parameter will be used. A parameter can be invalid if its name doesn't match any string template. If no parameters are valid, the last one is returned. This is useful to implement a fallback for missing locale templates.
 * 
 * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table) which will not be translated, as well as a number, boolean or `nil`, which will be converted to their textual representation.
 * @example
 * In the English translation, this will print `"No ammo"`; in the Czech translation, it will print `"Bez munice"`: 
 * ```
 * game.player.print({"description.no-ammo"})
 * ```
 *  The `description.no-ammo` template contains no placeholders, so no further parameters are necessary.
 *
 * @example
 * In the English translation, this will print `"Durability: 5/9"`; in the Japanese one, it will print `"耐久度: 5/9"`: 
 * ```
 * game.player.print({"description.durability", 5, 9})
 * ```
 *
 * @example
 * This will print `"hello"` in all translations: 
 * ```
 * game.player.print({"", "hello"})
 * ```
 *
 * @example
 * This will print `"Iron plate: 60"` in the English translation and `"Eisenplatte: 60"` in the German translation. 
 * ```
 * game.print({"", {"item-name.iron-plate"}, ": ", 60})
 * ```
 *
 * @example
 * As an example of a localised string with fallback, consider this: 
 * ```
 * {"?", {"", {"entity-description.furnace"}, "\n"}, {"item-description.furnace"}, "optional fallback"}
 * ```
 *  If `entity-description.furnace` exists, it is concatenated with `"\n"` and returned. Otherwise, if `item-description.furnace` exists, it is returned as-is. Otherwise, `"optional fallback"` is returned. If this value wasn't specified, the translation result would be `"Unknown key: 'item-description.furnace'"`.
 *
 */
type LocalisedString = string | number | boolean | object | null | LocalisedString[]

interface LogisticFilter {
    
    /**
     * The count for this filter.
     */
    count: number,
    
    /**
     * The index this filter applies to.
     */
    index: number,
    
    /**
     * The item name for this filter.
     */
    name: string
}

interface LogisticParameters {
    max?: number,
    min?: number,
    
    /**
     * The item. `nil` clears the filter.
     */
    name?: string
}

interface Loot {
    
    /**
     * Maximum amount of loot to drop.
     */
    count_max: number,
    
    /**
     * Minimum amount of loot to drop.
     */
    count_min: number,
    
    /**
     * Item prototype name of the result.
     */
    item: string,
    
    /**
     * Probability that any loot at all will drop, as a number in range [0, 1].
     */
    probability: number
}

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaEntityClonedEventFilter = LuaEntityClonedEventFilterGhostName | LuaEntityClonedEventFilterGhostType | LuaEntityClonedEventFilterName | LuaEntityClonedEventFilterType | DefaultLuaEntityClonedEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaEntityDamagedEventFilter = LuaEntityDamagedEventFilterDamageType | LuaEntityDamagedEventFilterFinalDamageAmount | LuaEntityDamagedEventFilterFinalHealth | LuaEntityDamagedEventFilterGhostName | LuaEntityDamagedEventFilterGhostType | LuaEntityDamagedEventFilterName | LuaEntityDamagedEventFilterOriginalDamageAmount | LuaEntityDamagedEventFilterType | DefaultLuaEntityDamagedEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaEntityDeconstructionCancelledEventFilter = LuaEntityDeconstructionCancelledEventFilterGhostName | LuaEntityDeconstructionCancelledEventFilterGhostType | LuaEntityDeconstructionCancelledEventFilterName | LuaEntityDeconstructionCancelledEventFilterType | DefaultLuaEntityDeconstructionCancelledEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaEntityDiedEventFilter = LuaEntityDiedEventFilterGhostName | LuaEntityDiedEventFilterGhostType | LuaEntityDiedEventFilterName | LuaEntityDiedEventFilterType | DefaultLuaEntityDiedEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaEntityMarkedForDeconstructionEventFilter = LuaEntityMarkedForDeconstructionEventFilterGhostName | LuaEntityMarkedForDeconstructionEventFilterGhostType | LuaEntityMarkedForDeconstructionEventFilterName | LuaEntityMarkedForDeconstructionEventFilterType | DefaultLuaEntityMarkedForDeconstructionEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaEntityMarkedForUpgradeEventFilter = LuaEntityMarkedForUpgradeEventFilterGhostName | LuaEntityMarkedForUpgradeEventFilterGhostType | LuaEntityMarkedForUpgradeEventFilterName | LuaEntityMarkedForUpgradeEventFilterType | DefaultLuaEntityMarkedForUpgradeEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPlayerBuiltEntityEventFilter = LuaPlayerBuiltEntityEventFilterForce | LuaPlayerBuiltEntityEventFilterGhostName | LuaPlayerBuiltEntityEventFilterGhostType | LuaPlayerBuiltEntityEventFilterName | LuaPlayerBuiltEntityEventFilterType | DefaultLuaPlayerBuiltEntityEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPlayerMinedEntityEventFilter = LuaPlayerMinedEntityEventFilterGhostName | LuaPlayerMinedEntityEventFilterGhostType | LuaPlayerMinedEntityEventFilterName | LuaPlayerMinedEntityEventFilterType | DefaultLuaPlayerMinedEntityEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPlayerRepairedEntityEventFilter = LuaPlayerRepairedEntityEventFilterGhostName | LuaPlayerRepairedEntityEventFilterGhostType | LuaPlayerRepairedEntityEventFilterName | LuaPlayerRepairedEntityEventFilterType | DefaultLuaPlayerRepairedEntityEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPostEntityDiedEventFilter = LuaPostEntityDiedEventFilterType

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPreGhostDeconstructedEventFilter = LuaPreGhostDeconstructedEventFilterGhostName | LuaPreGhostDeconstructedEventFilterGhostType | LuaPreGhostDeconstructedEventFilterName | LuaPreGhostDeconstructedEventFilterType | DefaultLuaPreGhostDeconstructedEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPreGhostUpgradedEventFilter = LuaPreGhostUpgradedEventFilterGhostName | LuaPreGhostUpgradedEventFilterGhostType | LuaPreGhostUpgradedEventFilterName | LuaPreGhostUpgradedEventFilterType | DefaultLuaPreGhostUpgradedEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPrePlayerMinedEntityEventFilter = LuaPrePlayerMinedEntityEventFilterGhostName | LuaPrePlayerMinedEntityEventFilterGhostType | LuaPrePlayerMinedEntityEventFilterName | LuaPrePlayerMinedEntityEventFilterType | DefaultLuaPrePlayerMinedEntityEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaPreRobotMinedEntityEventFilter = LuaPreRobotMinedEntityEventFilterGhostName | LuaPreRobotMinedEntityEventFilterGhostType | LuaPreRobotMinedEntityEventFilterName | LuaPreRobotMinedEntityEventFilterType | DefaultLuaPreRobotMinedEntityEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaRobotBuiltEntityEventFilter = LuaRobotBuiltEntityEventFilterForce | LuaRobotBuiltEntityEventFilterGhostName | LuaRobotBuiltEntityEventFilterGhostType | LuaRobotBuiltEntityEventFilterName | LuaRobotBuiltEntityEventFilterType | DefaultLuaRobotBuiltEntityEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaRobotMinedEntityEventFilter = LuaRobotMinedEntityEventFilterGhostName | LuaRobotMinedEntityEventFilterGhostType | LuaRobotMinedEntityEventFilterName | LuaRobotMinedEntityEventFilterType | DefaultLuaRobotMinedEntityEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaScriptRaisedBuiltEventFilter = LuaScriptRaisedBuiltEventFilterGhostName | LuaScriptRaisedBuiltEventFilterGhostType | LuaScriptRaisedBuiltEventFilterName | LuaScriptRaisedBuiltEventFilterType | DefaultLuaScriptRaisedBuiltEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaScriptRaisedDestroyEventFilter = LuaScriptRaisedDestroyEventFilterGhostName | LuaScriptRaisedDestroyEventFilterGhostType | LuaScriptRaisedDestroyEventFilterName | LuaScriptRaisedDestroyEventFilterType | DefaultLuaScriptRaisedDestroyEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaScriptRaisedReviveEventFilter = LuaScriptRaisedReviveEventFilterGhostName | LuaScriptRaisedReviveEventFilterGhostType | LuaScriptRaisedReviveEventFilterName | LuaScriptRaisedReviveEventFilterType | DefaultLuaScriptRaisedReviveEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaScriptRaisedTeleportedEventFilter = LuaScriptRaisedTeleportedEventFilterGhostName | LuaScriptRaisedTeleportedEventFilterGhostType | LuaScriptRaisedTeleportedEventFilterName | LuaScriptRaisedTeleportedEventFilterType | DefaultLuaScriptRaisedTeleportedEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaSectorScannedEventFilter = LuaSectorScannedEventFilterGhostName | LuaSectorScannedEventFilterGhostType | LuaSectorScannedEventFilterName | LuaSectorScannedEventFilterType | DefaultLuaSectorScannedEventFilter

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type LuaUpgradeCancelledEventFilter = LuaUpgradeCancelledEventFilterGhostName | LuaUpgradeCancelledEventFilterGhostType | LuaUpgradeCancelledEventFilterName | LuaUpgradeCancelledEventFilterType | DefaultLuaUpgradeCancelledEventFilter

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
    max_failed_behavior_count: number,
    path_finder: PathFinderMapSettings,
    pollution: PollutionMapSettings,
    steering: SteeringMapSettings,
    unit_group: UnitGroupMapSettings
}

interface MapDifficultySettings {
    recipe_difficulty: defines.difficulty_settings.recipe_difficulty,
    
    /**
     * Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See {@link LuaForce | runtime:LuaForce} for that.
     */
    research_queue_setting: string,
    technology_difficulty: defines.difficulty_settings.technology_difficulty,
    
    /**
     * A value in range [0.001, 1000].
     */
    technology_price_multiplier: number
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
 * Assuming a NamedNoiseExpression with the name "my-alternate-grass1-probability" is defined 
 * ```
 * local surface = game.player.surface
 * local mgs = surface.map_gen_settings
 * mgs.property_expression_names["tile:grass1:probability"] = "my-alternate-grass1-probability"
 * surface.map_gen_settings = mgs
 * ```
 *  would override the probability of grass1 being placed at any given point on the current surface.
 *
 * @example
 * To make there be no deep water on (newly generated chunks) a surface: 
 * ```
 * local surface = game.player.surface
 * local mgs = surface.map_gen_settings
 * mgs.property_expression_names["tile:deepwater:probability"] = -1000
 * surface.map_gen_settings = mgs
 * ```
 *  This does not require a NamedNoiseExpression to be defined, since literal numbers (and strings naming literal numbers, e.g. `"123"`) are understood to stand for constant value expressions.
 *
 */
interface MapGenSettings {
    
    /**
     * Indexed by autoplace control prototype name.
     */
    autoplace_controls: {[key: string]: AutoplaceControl},
    
    /**
     * Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`.
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
    height: number,
    
    /**
     * Whether peaceful mode is enabled for this map.
     */
    peaceful_mode: boolean,
    
    /**
     * Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names. Notable properties: 
- `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
- `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
- `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
- `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to {@link CliffPlacementSettings | runtime:CliffPlacementSettings}.
- `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to {@link CliffPlacementSettings | runtime:CliffPlacementSettings}) location.
- `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
- `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
- `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names: 
- `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
- `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
- `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
- `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`.
     */
    property_expression_names: {[key: string]: string},
    
    /**
     * The random seed used to generated this map.
     */
    seed: number,
    
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
    width: number
}

/**
 * A floating point number specifying an amount.
 * 
 * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned):
 * @remarks
 * The map generation algorithm officially supports the range of values the in-game map generation screen shows (specifically `0` and values from `1/6` to `6`). Values outside this range are not guaranteed to work as expected.
 *
 */
type MapGenSize = /* Specifying a map gen dimension. */ number | /* equivalent to `0`. */ 'none' | /* equivalent to `1/2`. */ 'very-low' | /* equivalent to `1/2`. */ 'very-small' | /* equivalent to `1/2`. */ 'very-poor' | /* equivalent to `1/sqrt(2)`. */ 'low' | /* equivalent to `1/sqrt(2)`. */ 'small' | /* equivalent to `1/sqrt(2)`. */ 'poor' | /* equivalent to `1`. */ 'normal' | /* equivalent to `1`. */ 'medium' | /* equivalent to `1`. */ 'regular' | /* equivalent to `sqrt(2)`. */ 'high' | /* equivalent to `sqrt(2)`. */ 'big' | /* equivalent to `sqrt(2)`. */ 'good' | /* equivalent to `2`. */ 'very-high' | /* equivalent to `2`. */ 'very-big' | /* equivalent to `2`. */ 'very-good'

/**
 * Coordinates on a surface, for example of an entity. MapPositions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.
 * 
 * The coordinates are saved as a fixed-size 32 bit integer, with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625` tiles.
 * @example
 * Explicit definition: 
 * ```
 * {x = 5.5, y = 2}
 * {y = 2.25, x = 5.125}
 * ```
 *
 * @example
 * Shorthand: 
 * ```
 * {1.625, 2.375}
 * ```
 *
 */
type MapPosition = {
    x: number,
    y: number
}

/**
 * Various game-related settings. Updating any of the attributes will immediately take effect in the game engine.
 * @example
 * Increase the number of short paths the pathfinder can cache. 
 * ```
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
    max_failed_behavior_count: number

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
    'show-train-station-names'?: boolean,
    'show-turret-range'?: boolean
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
    value: number | boolean | string | Color
}

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type ModSettingPrototypeFilter = ModSettingPrototypeFilterMod | ModSettingPrototypeFilterSettingType | ModSettingPrototypeFilterType

interface ModuleEffectValue {
    
    /**
     * The percentual increase of the attribute. A value of `0.6` means a 60% increase.
     */
    bonus: number
}

/**
 * @example
 * These are the effects of the vanilla Productivity Module 3 (up to floating point imprecisions): 
 * ```
 * {consumption={bonus=0.6},
 *  speed={bonus=-0.15},
 *  productivity={bonus=0.06},
 *  pollution={bonus=0.075}}
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
    nth_tick: number,
    
    /**
     * The tick during which the event happened.
     */
    tick: number
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
    cache_accept_path_end_distance_ratio: number,
    
    /**
     * When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`.
     */
    cache_accept_path_start_distance_ratio: number,
    
    /**
     * When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`.
     */
    cache_max_connect_to_cache_steps_multiplier: number,
    
    /**
     * When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`.
     */
    cache_path_end_distance_rating_multiplier: number,
    
    /**
     * When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`.
     */
    cache_path_start_distance_rating_multiplier: number,
    
    /**
     * The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`.
     */
    direct_distance_to_consider_short_request: number,
    
    /**
     * A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`.
     */
    enemy_with_different_destination_collision_penalty: number,
    
    /**
     * The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`.
     */
    extended_collision_penalty: number,
    
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`.
     */
    fwd2bwd_ratio: number,
    
    /**
     * The general collision penalty with other units. Defaults to `10`.
     */
    general_entity_collision_penalty: number,
    
    /**
     * The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`.
     */
    general_entity_subsequent_collision_penalty: number,
    
    /**
     * When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`.
     */
    goal_pressure_ratio: number,
    
    /**
     * The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`.
     */
    ignore_moving_enemy_collision_distance: number,
    
    /**
     * The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`.
     */
    long_cache_min_cacheable_distance: number,
    
    /**
     * Number of elements in the long cache. Defaults to `25`.
     */
    long_cache_size: number,
    
    /**
     * The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`.
     */
    max_clients_to_accept_any_new_request: number,
    
    /**
     * When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`.
     */
    max_clients_to_accept_short_new_request: number,
    
    /**
     * The maximum number of nodes that are expanded per tick. Defaults to `1'000`.
     */
    max_steps_worked_per_tick: number,
    
    /**
     * The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8'000`.
     */
    max_work_done_per_tick: number,
    
    /**
     * The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`.
     */
    min_steps_to_check_path_find_termination: number,
    
    /**
     * Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    negative_cache_accept_path_end_distance_ratio: number,
    
    /**
     * Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    negative_cache_accept_path_start_distance_ratio: number,
    
    /**
     * The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`.
     */
    negative_path_cache_delay_interval: number,
    
    /**
     * The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`.
     */
    overload_levels: number[],
    
    /**
     * The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`.
     */
    overload_multipliers: number[],
    
    /**
     * The minimal number of nodes required to be searched in the short path cache. Defaults to `50`.
     */
    short_cache_min_algo_steps_to_cache: number,
    
    /**
     * The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`.
     */
    short_cache_min_cacheable_distance: number,
    
    /**
     * Number of elements in the short cache. Defaults to `5`.
     */
    short_cache_size: number,
    
    /**
     * The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`.
     */
    short_request_max_steps: number,
    
    /**
     * The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%.
     */
    short_request_ratio: number,
    
    /**
     * A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`.
     */
    stale_enemy_with_same_destination_collision_penalty: number,
    
    /**
     * If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`.
     */
    start_to_goal_cost_multiplier_to_terminate_path_find: number,
    
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
    
    /**
     * One of "normal" or "underground".
     */
    connection_type: string,
    
    /**
     * One of "input", "output", or "input-output".
     */
    flow_direction: string,
    
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
    target_fluidbox_index?: number,
    
    /**
     * The index of the target fluidbox pipe connection, if any.
     */
    target_pipe_connection_index?: number,
    
    /**
     * The absolute position of the connection's intended target.
     */
    target_position: MapPosition
}

interface PlaceAsTileResult {
    condition: CollisionMask,
    condition_size: number,
    
    /**
     * The tile prototype.
     */
    result: LuaTilePrototype
}

/**
 * A player may be specified in one of three ways.
 */
type PlayerIdentification = /* The player index. */ number | /* The player name. */ string | /* A reference to {@link LuaPlayer | runtime:LuaPlayer} may be passed directly. */ LuaPlayer

/**
 * These values are for the time frame of one second (60 ticks).
 */
interface PollutionMapSettings {
    
    /**
     * The amount of pollution eaten by a chunk's tiles as a percentage of 1. Defaults to `1`.
     */
    ageing: number,
    
    /**
     * The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`.
     */
    diffusion_ratio: number,
    
    /**
     * Whether pollution is enabled at all.
     */
    enabled: boolean,
    
    /**
     * Defaults to `1`.
     */
    enemy_attack_pollution_consumption_modifier: number,
    
    /**
     * Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`.
     */
    expected_max_per_chunk: number,
    
    /**
     * Defaults to `20`.
     */
    max_pollution_to_restore_trees: number,
    
    /**
     * Defaults to `60`.
     */
    min_pollution_to_damage_trees: number,
    
    /**
     * The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`.
     */
    min_to_diffuse: number,
    
    /**
     * Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`.
     */
    min_to_show_per_chunk: number,
    
    /**
     * Defaults to `50`.
     */
    pollution_per_tree_damage: number,
    
    /**
     * Defaults to `10`.
     */
    pollution_restored_per_tree_damage: number,
    
    /**
     * Defaults to `150`.
     */
    pollution_with_max_forest_damage: number
}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 * @example
 * Products of the "steel-chest" recipe (an array of Product): 
 * ```
 * {{type="item", name="steel-chest", amount=1}}
 * ```
 *
 * @example
 * Products of the "advanced-oil-processing" recipe: 
 * ```
 * {{type="fluid", name="heavy-oil", amount=1},
 *  {type="fluid", name="light-oil", amount=4.5},
 *  {type="fluid", name="petroleum-gas", amount=5.5}}
 * ```
 *
 * @example
 * What a custom recipe would look like that had a probability of 0.5 to return a minimum amount of 1 and a maximum amount of 5: 
 * ```
 * {{type="item", name="custom-item", probability=0.5, amount_min=1, amount_max=5}}
 * ```
 *
 */
type Product = ProductFluid | DefaultProduct

interface ProgrammableSpeakerAlertParameters {
    alert_message: string,
    icon_signal_id: SignalID,
    show_alert: boolean,
    show_on_map: boolean
}

interface ProgrammableSpeakerCircuitParameters {
    instrument_id: number,
    note_id: number,
    signal_value_is_pitch: boolean
}

interface ProgrammableSpeakerInstrument {
    name: string,
    notes: string[]
}

interface ProgrammableSpeakerParameters {
    allow_polyphony: boolean,
    playback_globally: boolean,
    playback_volume: number
}

/**
 * Types `"signal"` and `"item-group"` do not support filters.
 * @remarks
 * Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
 *
 */
type PrototypeFilter = Array</* for type `"item"` */ ItemPrototypeFilter | /* for type `"tile"` */ TilePrototypeFilter | /* for type `"entity"` */ EntityPrototypeFilter | /* for type `"fluid"` */ FluidPrototypeFilter | /* for type `"recipe"` */ RecipePrototypeFilter | /* for type `"decorative"` */ DecorativePrototypeFilter | /* for type `"achievement"` */ AchievementPrototypeFilter | /* for type `"equipment"` */ EquipmentPrototypeFilter | /* for type `"technology"` */ TechnologyPrototypeFilter>

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

/**
 * The smooth orientation. It is a {@link float | runtime:float} in the range `[0, 1)` that covers a full circle, starting at the top and going clockwise. This means a value of `0` indicates "north", a value of `0.5` indicates "south".
 * 
 * For example then, a value of `0.625` would indicate "south-west", and a value of `0.875` would indicate "north-west".
 */
type RealOrientation = number

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type RecipePrototypeFilter = RecipePrototypeFilterCategory | RecipePrototypeFilterEmissionsMultiplier | RecipePrototypeFilterEnergy | RecipePrototypeFilterHasIngredientFluid | RecipePrototypeFilterHasIngredientItem | RecipePrototypeFilterHasProductFluid | RecipePrototypeFilterHasProductItem | RecipePrototypeFilterOverloadMultiplier | RecipePrototypeFilterRequestPasteMultiplier | RecipePrototypeFilterSubgroup | DefaultRecipePrototypeFilter

/**
 * A number between 0 and 255 inclusive, represented by one of the following named strings or the string version of the number. For example `"27"` and `"decals"` are both valid. Higher values are rendered above lower values.
 */
type RenderLayer = /* A string of a number */ string | /* 15 */ 'water-tile' | /* 25 */ 'ground-tile' | /* 26 */ 'tile-transition' | /* 27 */ 'decals' | /* 29 */ 'lower-radius-visualization' | /* 30 */ 'radius-visualization' | /* 65 */ 'transport-belt-integration' | /* 66 */ 'resource' | /* 67 */ 'building-smoke' | /* 92 */ 'decorative' | /* 93 */ 'ground-patch' | /* 94 */ 'ground-patch-higher' | /* 95 */ 'ground-patch-higher2' | /* 112 */ 'remnants' | /* 113 */ 'floor' | /* 114 */ 'transport-belt' | /* 115 */ 'transport-belt-endings' | /* 120 */ 'floor-mechanics-under-corpse' | /* 121 */ 'corpse' | /* 122 */ 'floor-mechanics' | /* 123 */ 'item' | /* 124 */ 'lower-object' | /* 126 */ 'transport-belt-circuit-connector' | /* 127 */ 'lower-object-above-shadow' | /* 129 */ 'object' | /* 131 */ 'higher-object-under' | /* 132 */ 'higher-object-above' | /* 134 */ 'item-in-inserter-hand' | /* 135 */ 'wires' | /* 136 */ 'wires-above' | /* 138 */ 'entity-info-icon' | /* 139 */ 'entity-info-icon-above' | /* 142 */ 'explosion' | /* 143 */ 'projectile' | /* 144 */ 'smoke' | /* 145 */ 'air-object' | /* 147 */ 'air-entity-info-icon' | /* 148 */ 'light-effect' | /* 187 */ 'selection-box' | /* 188 */ 'higher-selection-box' | /* 189 */ 'collision-selection-box' | /* 190 */ 'arrow' | /* 210 */ 'cursor'

interface Resistance {
    
    /**
     * Absolute damage decrease
     */
    decrease: number,
    
    /**
     * Percentual damage decrease
     */
    percent: number
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
    id: number,
    name: string
}

/**
 * A position defined using the map editor.
 */
interface ScriptPosition {
    color: Color,
    id: number,
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

interface SelectedPrototypeData {
    
    /**
     * E.g. `"entity"`.
     */
    base_type: string,
    
    /**
     * E.g. `"tree"`.
     */
    derived_type: string,
    
    /**
     * E.g. `"tree-05"`.
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
    count: number,
    
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
    
    /**
     * `"item"`, `"fluid"`, or `"virtual"`.
     */
    type: string
}

/**
 * An item stack may be specified in one of two ways.
 * @example
 * Both of these lines specify an item stack of one iron plate: 
 * ```
 * {name="iron-plate"}
 * ```
 *  
 * ```
 * {name="iron-plate", count=1}
 * ```
 *
 * @example
 * This is a stack of 47 copper plates: 
 * ```
 * {name="copper-plate", count=47}
 * ```
 *
 * @example
 * These are both full stacks of iron plates (for iron-plate, a full stack is 100 plates): 
 * ```
 * "iron-plate"
 * ```
 *  
 * ```
 * {name="iron-plate", count=100}
 * ```
 *
 */
type SimpleItemStack = /* The name of the item, which represents a full stack of that item. */ string | /* The detailed definition of an item stack. */ ItemStackDefinition

/**
 * @remarks
 * The vectors for all 5 position attributes are a table with `x` and `y` keys instead of an array.
 *
 */
interface SmokeSource {
    deviation?: MapPosition,
    east_position?: Vector,
    frequency: number,
    height: number,
    height_deviation: number,
    name: string,
    north_position?: Vector,
    offset: number,
    position?: Vector,
    slow_down_factor: number,
    south_position?: Vector,
    starting_frame: number,
    starting_frame_deviation: number,
    starting_frame_speed: number,
    starting_frame_speed_deviation: number,
    starting_vertical_speed: number,
    starting_vertical_speed_deviation: number,
    vertical_speed_slowdown: number,
    west_position?: Vector
}

/**
 * It can be either the name of a {@link SoundPrototype | prototype:SoundPrototype} defined in the data stage, or a path in the form `"type/name"`. The latter option can be sorted into three categories.
 * 
 * The validity of a SoundPath can be verified at runtime using {@link LuaGameScript::is_valid_sound_path | runtime:LuaGameScript::is_valid_sound_path}.
 * 
 * The utility and ambient types each contain general use sound prototypes defined by the game itself.
 * - `"utility"` - Uses {@link UtilitySounds | prototype:UtilitySounds}. Example: `"utility/wire_connect_pole"`
 * - `"ambient"` - Uses {@link AmbientSound | prototype:AmbientSound}. Example: `"ambient/resource-deficiency"`
 * 
 * The following types can be combined with any tile name as long as its prototype defines the
 *     corresponding sound.
 * - `"tile-walking"` - Uses {@link TilePrototype::walking_sound | prototype:TilePrototype::walking_sound}. Example: `"tile-walking/concrete"`
 * - `"tile-mined"` - Uses {@link TilePrototype::mined_sound | prototype:TilePrototype::mined_sound}
 * - `"tile-build-small"` - Uses {@link TilePrototype::build_sound | prototype:TilePrototype::build_sound}. Example: `"tile-build-small/concrete"`
 * - `"tile-build-medium"` - Uses {@link TilePrototype::build_sound | prototype:TilePrototype::build_sound}
 * - `"tile-build-large"` - Uses {@link TilePrototype::build_sound | prototype:TilePrototype::build_sound}
 * 
 * The following types can be combined with any entity name as long as its prototype defines the
 *     corresponding sound.
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
    evolution_factor: number,
    
    /**
     * Probability of spawning this unit at this evolution factor.
     */
    weight: number
}

/**
 * It can be either the name of a {@link SpritePrototype | prototype:SpritePrototype} defined in the data stage, or a path in form "type/name".
 * 
 * The validity of a SpritePath can be verified at runtime using {@link LuaGameScript::is_valid_sprite_path | runtime:LuaGameScript::is_valid_sprite_path}.
 * 
 * The supported types are:
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
    radius: number,
    separation_factor: number,
    separation_force: number
}

interface SteeringMapSettings {
    default: SteeringMapSetting,
    moving: SteeringMapSetting
}

/**
 * A surface may be specified in one of three ways.
 */
type SurfaceIdentification = /* It will be the index of the surface. `nauvis` has index `1`, the first surface-created surface will have index `2` and so on. */ number | /* It will be the surface name. E.g. `"nauvis"`. */ string | /* A reference to {@link LuaSurface | runtime:LuaSurface} may be passed directly. */ LuaSurface

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
 * A technology may be specified in one of three ways.
 */
type TechnologyIdentification = /* The technology name. */ string | /* A reference to {@link LuaTechnology | runtime:LuaTechnology} may be passed directly. */ LuaTechnology | /* A reference to {@link LuaTechnologyPrototype | runtime:LuaTechnologyPrototype} may be passed directly. */ LuaTechnologyPrototype

/**
 * The effect that is applied when a technology is researched. It is a table that contains at least the field `type`.
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 */
type TechnologyModifier = TechnologyModifierOtherTypes | TechnologyModifierAmmoDamage | TechnologyModifierGiveItem | TechnologyModifierGunSpeed | TechnologyModifierNothing | TechnologyModifierTurretAttack | TechnologyModifierUnlockRecipe | DefaultTechnologyModifier

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type TechnologyPrototypeFilter = TechnologyPrototypeFilterLevel | TechnologyPrototypeFilterMaxLevel | TechnologyPrototypeFilterResearchUnitIngredient | TechnologyPrototypeFilterTime | TechnologyPrototypeFilterUnlocksRecipe | DefaultTechnologyPrototypeFilter

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
    x: number,
    y: number
}

/**
 * Depending on the value of `filter`, the table may take additional fields. `filter` may be one of the following:
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 */
type TilePrototypeFilter = TilePrototypeFilterCollisionMask | TilePrototypeFilterDecorativeRemovalProbability | TilePrototypeFilterEmissions | TilePrototypeFilterVehicleFrictionModifier | TilePrototypeFilterWalkingSpeedModifier | DefaultTilePrototypeFilter

interface TrainSchedule {
    
    /**
     * Index of the currently active record
     */
    current: number,
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

interface TriggerDelivery {
    source_effects: TriggerEffectItem[],
    target_effects: TriggerEffectItem[],
    
    /**
     * One of `"instant"`, `"projectile"`, `"flame-thrower"`, `"beam"`, `"stream"`, `"artillery"`.
     */
    type: string
}

interface TriggerEffectItem {
    affects_target: boolean,
    repeat_count: number,
    show_in_tooltip: boolean,
    
    /**
     * One of`"damage"`, `"create-entity"`, `"create-explosion"`, `"create-fire"`, `"create-smoke"`, `"create-trivial-smoke"`, `"create-particle"`, `"create-sticker"`, `"nested-result"`, `"play-sound"`, `"push-back"`, `"destroy-cliffs"`, `"show-explosion-on-chart"`, `"insert-item"`, `"script"`.
     */
    type: string
}

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
    repeat_count: number,
    trigger_target_mask: TriggerTargetMask,
    
    /**
     * One of `"direct"`, `"area"`, `"line"`, `"cluster"`.
     */
    type: string
}

/**
 * A set of trigger target masks.
 */
type TriggerTargetMask = {[key: string]: boolean}

interface UnitGroupMapSettings {
    
    /**
     * The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`.
     */
    max_gathering_unit_groups: number,
    
    /**
     * The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3'600=36'000` ticks.
     */
    max_group_gathering_time: number,
    
    /**
     * When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`.
     */
    max_group_member_fallback_factor: number,
    
    /**
     * The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`.
     */
    max_group_radius: number,
    
    /**
     * The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%.
     */
    max_group_slowdown_factor: number,
    
    /**
     * The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%.
     */
    max_member_slowdown_when_ahead: number,
    
    /**
     * The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%.
     */
    max_member_speedup_when_behind: number,
    
    /**
     * The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`.
     */
    max_unit_group_size: number,
    
    /**
     * After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3'600=7'200` ticks.
     */
    max_wait_time_for_late_members: number,
    
    /**
     * When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`.
     */
    member_disown_distance: number,
    
    /**
     * The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3'600` ticks.
     */
    min_group_gathering_time: number,
    
    /**
     * The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`.
     */
    min_group_radius: number,
    tick_tolerance_when_member_arrives: number
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
    
    /**
     * `"item"`, or `"entity"`.
     */
    type: string
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
    x: number,
    y: number
}

interface VehicleAutomaticTargetingParameters {
    auto_target_with_gunner: boolean,
    auto_target_without_gunner: boolean
}

interface WaitCondition {
    
    /**
     * Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array.
     */
    compare_type: string,
    
    /**
     * Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`, and a circuit condition is configured.
     */
    condition?: CircuitCondition,
    
    /**
     * Number of ticks to wait when `type` is `"time"`, or number of ticks of inactivity when `type` is `"inactivity"`.
     */
    ticks?: number,
    
    /**
     * One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`, `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`.
     */
    type: string
}

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

interface BaseAchievementPrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface AchievementPrototypeFilterType extends BaseAchievementPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"allowed-without-fight"`, `"type"`.
     */
    filter: 'type',
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

interface DefaultAchievementPrototypeFilter extends BaseAchievementPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"allowed-without-fight"`, `"type"`.
     */
    filter: 'allowed-without-fight'
}

interface BaseAttackParameters {
    
    /**
     * List of the names of compatible {@link LuaAmmoCategoryPrototypes | runtime:LuaAmmoCategoryPrototype}.
     */
    ammo_categories?: string[],
    
    /**
     * Multiplier applied to the ammo consumption of an attack.
     */
    ammo_consumption_modifier: number,
    ammo_type?: AmmoType,
    
    /**
     * Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick.
     */
    cooldown: number,
    
    /**
     * Multiplier applied to the damage of an attack.
     */
    damage_modifier: number,
    
    /**
     * When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire.
     */
    fire_penalty: number,
    
    /**
     * When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite.
     */
    health_penalty: number,
    
    /**
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters.
     */
    min_attack_distance: number,
    
    /**
     * Minimum range of attack. Used with flamethrower turrets to prevent self-immolation.
     */
    min_range: number,
    movement_slow_down_cooldown: number,
    movement_slow_down_factor: number,
    
    /**
     * Maximum range of attack.
     */
    range: number,
    
    /**
     * Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`.
     */
    range_mode: string,
    
    /**
     * When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face.
     */
    rotate_penalty: number,
    
    /**
     * The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees.
     */
    turn_range: number,
    
    /**
     * Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so.
     */
    warmup: number
}

interface AttackParametersProjectile extends BaseAttackParameters {
    
    /**
     * The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
     */
    type: 'projectile',
    projectile_center: Vector,
    projectile_creation_distance: number,
    projectile_creation_parameters?: CircularProjectileCreationSpecification[],
    projectile_orientation_offset: number,
    shell_particle?: CircularParticleCreationSpecification
}

interface AttackParametersStream extends BaseAttackParameters {
    
    /**
     * The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
     */
    type: 'stream',
    fluid_consumption: number,
    fluids?: AttackParameterFluid[],
    gun_barrel_length: number,
    gun_center_shift: {[key: string]: Vector},
    projectile_creation_parameters?: CircularProjectileCreationSpecification[]
}

interface DefaultAttackParameters extends BaseAttackParameters {
    
    /**
     * The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
     */
    type: 'beam'
}

interface BaseCapsuleAction {
    
}

interface CapsuleActionArtilleryRemote extends BaseCapsuleAction {
    
    /**
     * One of `"throw"`, `"equipment-remote"`, `"use-on-self"`, `"artillery-remote"`, `"destroy-cliffs"`.
     */
    type: 'artillery-remote',
    
    /**
     * Name of the {@link flare prototype | runtime:LuaEntityPrototype}.
     */
    flare: string
}

interface CapsuleActionDestroyCliffs extends BaseCapsuleAction {
    
    /**
     * One of `"throw"`, `"equipment-remote"`, `"use-on-self"`, `"artillery-remote"`, `"destroy-cliffs"`.
     */
    type: 'destroy-cliffs',
    attack_parameters: AttackParameters,
    radius: number,
    timeout: number
}

interface CapsuleActionEquipmentRemote extends BaseCapsuleAction {
    
    /**
     * One of `"throw"`, `"equipment-remote"`, `"use-on-self"`, `"artillery-remote"`, `"destroy-cliffs"`.
     */
    type: 'equipment-remote',
    
    /**
     * Name of the {@link LuaEquipmentPrototype | runtime:LuaEquipmentPrototype}.
     */
    equipment: string
}

interface CapsuleActionThrow extends BaseCapsuleAction {
    
    /**
     * One of `"throw"`, `"equipment-remote"`, `"use-on-self"`, `"artillery-remote"`, `"destroy-cliffs"`.
     */
    type: 'throw',
    attack_parameters: AttackParameters,
    
    /**
     * Whether using the capsule consumes an item from the stack.
     */
    uses_stack: boolean
}

interface CapsuleActionUseOnSelf extends BaseCapsuleAction {
    
    /**
     * One of `"throw"`, `"equipment-remote"`, `"use-on-self"`, `"artillery-remote"`, `"destroy-cliffs"`.
     */
    type: 'use-on-self',
    attack_parameters: AttackParameters
}

/**
 * @remarks
 * Applies to `defines.command.attack` variant case
 *
 */
interface CommandAttack extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    target: LuaEntity
}

/**
 * @remarks
 * Applies to `defines.command.attack_area` variant case
 *
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
    radius: number
}

/**
 * @remarks
 * Applies to `defines.command.build_base` variant case
 *
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
 * @remarks
 * Applies to `defines.command.compound` variant case
 *
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
 * @remarks
 * Applies to `defines.command.flee` variant case
 *
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
 * @remarks
 * Applies to `defines.command.go_to_location` variant case
 *
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
    radius?: number
}

/**
 * @remarks
 * Applies to `defines.command.group` variant case
 *
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
 * @remarks
 * Applies to `defines.command.stop` variant case
 *
 */
interface CommandStop extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means stop forever.
     */
    ticks_to_wait?: number
}

/**
 * @remarks
 * Applies to `defines.command.wander` variant case
 *
 */
interface CommandWander extends Command {
    
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    distraction?: defines.distraction,
    
    /**
     * Defaults to 10. Does not apply when `wander_in_group` is `true`.
     */
    radius?: number,
    
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means wander forever.
     */
    ticks_to_wait?: number,
    
    /**
     * When commanding a group, defines how the group will wander. When `true`, the units in the group will wander around inside the group's radius, just like gathering biters. When `false`, the units will wander as a group, ie they will all walk together in the same random direction. Default is true for groups. Passing true for a single unit is an error.
     */
    wander_in_group?: boolean
}

interface BaseDecorativePrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface DecorativePrototypeFilterCollisionMask extends BaseDecorativePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`.
     */
    filter: 'collision-mask',
    mask: CollisionMask | CollisionMaskWithFlags,
    
    /**
     * How to filter: `"collides"`, `"layers-equals"`, `"contains-any"` or `"contains-all"`
     */
    mask_mode: string
}

interface DefaultDecorativePrototypeFilter extends BaseDecorativePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`.
     */
    filter: 'decal' | 'autoplace'
}

interface BaseEntityPrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface EntityPrototypeFilterBuildBaseEvolutionRequirement extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'build-base-evolution-requirement',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface EntityPrototypeFilterCollisionMask extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'collision-mask',
    mask: CollisionMask | CollisionMaskWithFlags,
    
    /**
     * How to filter: `"collides"`, `"layers-equals"`, `"contains-any"` or `"contains-all"`
     */
    mask_mode: string
}

interface EntityPrototypeFilterCraftingCategory extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'crafting-category',
    
    /**
     * Matches if the prototype is for a crafting machine with this crafting category.
     */
    crafting_category: string
}

interface EntityPrototypeFilterEmissions extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'emissions',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface EntityPrototypeFilterFlag extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'flag',
    
    /**
     * One of the values in {@link EntityPrototypeFlags | runtime:EntityPrototypeFlags}.
     */
    flag: string
}

interface EntityPrototypeFilterName extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'name',
    
    /**
     * The prototype name, or list of acceptable names.
     */
    name: string | string[]
}

interface EntityPrototypeFilterSelectionPriority extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'selection-priority',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface EntityPrototypeFilterType extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'type',
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

interface DefaultEntityPrototypeFilter extends BaseEntityPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`.
     */
    filter: 'flying-robot' | 'robot-with-logistics-interface' | 'rail' | 'ghost' | 'explosion' | 'vehicle' | 'crafting-machine' | 'rolling-stock' | 'turret' | 'transport-belt-connectable' | 'wall-connectable' | 'buildable' | 'placable-in-editor' | 'clonable' | 'selectable' | 'hidden' | 'entity-with-health' | 'building' | 'fast-replaceable' | 'uses-direction' | 'minable' | 'circuit-connectable' | 'autoplace' | 'blueprintable' | 'item-to-place'
}

interface BaseEquipmentPrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface EquipmentPrototypeFilterType extends BaseEquipmentPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"item-to-place"`, `"type"`.
     */
    filter: 'type',
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

interface DefaultEquipmentPrototypeFilter extends BaseEquipmentPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"item-to-place"`, `"type"`.
     */
    filter: 'item-to-place'
}

interface BaseFluidPrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface FluidPrototypeFilterDefaultTemperature extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'default-temperature',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface FluidPrototypeFilterEmissionsMultiplier extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'emissions-multiplier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface FluidPrototypeFilterFuelValue extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'fuel-value',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface FluidPrototypeFilterGasTemperature extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'gas-temperature',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface FluidPrototypeFilterHeatCapacity extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'heat-capacity',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface FluidPrototypeFilterMaxTemperature extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'max-temperature',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface FluidPrototypeFilterName extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'name',
    
    /**
     * The prototype name, or list of acceptable names.
     */
    name: string | string[]
}

interface FluidPrototypeFilterSubgroup extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'subgroup',
    
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    subgroup: string
}

interface DefaultFluidPrototypeFilter extends BaseFluidPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`.
     */
    filter: 'hidden'
}

interface BaseGuiArrowSpecification {
    
}

interface GuiArrowSpecificationCraftingQueue extends BaseGuiArrowSpecification {
    
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    type: 'crafting_queue',
    
    /**
     * Index in the crafting queue to point to.
     */
    crafting_queueindex: number
}

interface GuiArrowSpecificationEntity extends BaseGuiArrowSpecification {
    
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    type: 'entity',
    entity: LuaEntity
}

interface GuiArrowSpecificationItemStack extends BaseGuiArrowSpecification {
    
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    type: 'item_stack',
    
    /**
     * Which inventory the stack is in.
     */
    inventory_index: defines.inventory,
    
    /**
     * Which stack to point to.
     */
    item_stack_index: number,
    
    /**
     * Must be either `"player"`, `"target"`, `"player-quickbar"` or `"player-equipment-bar"`.
     */
    source: string
}

interface GuiArrowSpecificationPosition extends BaseGuiArrowSpecification {
    
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    type: 'position',
    position: MapPosition
}

interface DefaultGuiArrowSpecification extends BaseGuiArrowSpecification {
    
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    type: 'nowhere' | 'goal' | 'entity_info' | 'active_window'
}

interface BaseIngredient {
    
    /**
     * Amount of the item or fluid.
     */
    amount: number,
    
    /**
     * How much of this ingredient is a catalyst.
     */
    catalyst_amount?: number,
    
    /**
     * Prototype name of the required item or fluid.
     */
    name: string
}

interface IngredientFluid extends BaseIngredient {
    
    /**
     * `"item"` or `"fluid"`.
     */
    type: 'fluid',
    
    /**
     * The maximum fluid temperature allowed.
     */
    maximum_temperature?: number,
    
    /**
     * The minimum fluid temperature required.
     */
    minimum_temperature?: number
}

interface DefaultIngredient extends BaseIngredient {
    
    /**
     * `"item"` or `"fluid"`.
     */
    type: 'item'
}

interface BaseItemPrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface ItemPrototypeFilterBurntResult extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'burnt-result',
    
    /**
     * Filters for the burnt result.
     */
    elem_filters?: ItemPrototypeFilter[]
}

interface ItemPrototypeFilterDefaultRequestAmount extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'default-request-amount',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface ItemPrototypeFilterFlag extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'flag',
    
    /**
     * One of the values in {@link ItemPrototypeFlags | runtime:ItemPrototypeFlags}.
     */
    flag: string
}

interface ItemPrototypeFilterFuelAccelerationMultiplier extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'fuel-acceleration-multiplier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface ItemPrototypeFilterFuelCategory extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'fuel-category',
    
    /**
     * A {@link LuaFuelCategoryPrototype | runtime:LuaFuelCategoryPrototype} name
     */
    'fuel-category': string
}

interface ItemPrototypeFilterFuelEmissionsMultiplier extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'fuel-emissions-multiplier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface ItemPrototypeFilterFuelTopSpeedMultiplier extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'fuel-top-speed-multiplier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface ItemPrototypeFilterFuelValue extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'fuel-value',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface ItemPrototypeFilterName extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'name',
    
    /**
     * The prototype name, or list of acceptable names.
     */
    name: string | string[]
}

interface ItemPrototypeFilterPlaceAsTile extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'place-as-tile',
    
    /**
     * Filters for the placed tile.
     */
    elem_filters?: TilePrototypeFilter[]
}

interface ItemPrototypeFilterPlaceResult extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'place-result',
    
    /**
     * Filters for the place result.
     */
    elem_filters?: EntityPrototypeFilter[]
}

interface ItemPrototypeFilterPlacedAsEquipmentResult extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'placed-as-equipment-result',
    
    /**
     * Filters for the placed equipment.
     */
    elem_filters?: EquipmentPrototypeFilter[]
}

interface ItemPrototypeFilterStackSize extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'stack-size',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface ItemPrototypeFilterSubgroup extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'subgroup',
    
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    subgroup: string
}

interface ItemPrototypeFilterType extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'type',
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

interface ItemPrototypeFilterWireCount extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'wire-count',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface DefaultItemPrototypeFilter extends BaseItemPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`.
     */
    filter: 'tool' | 'mergeable' | 'item-with-inventory' | 'selection-tool' | 'item-with-label' | 'has-rocket-launch-products' | 'fuel'
}

interface BaseLuaEntityClonedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaEntityClonedEventFilterGhostName extends BaseLuaEntityClonedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaEntityClonedEventFilterGhostType extends BaseLuaEntityClonedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaEntityClonedEventFilterName extends BaseLuaEntityClonedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaEntityClonedEventFilterType extends BaseLuaEntityClonedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaEntityClonedEventFilter extends BaseLuaEntityClonedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaEntityDamagedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaEntityDamagedEventFilterDamageType extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'damage-type',
    
    /**
     * A {@link LuaDamagePrototype | runtime:LuaDamagePrototype} name
     */
    type: string
}

interface LuaEntityDamagedEventFilterFinalDamageAmount extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'final-damage-amount',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface LuaEntityDamagedEventFilterFinalHealth extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'final-health',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface LuaEntityDamagedEventFilterGhostName extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaEntityDamagedEventFilterGhostType extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaEntityDamagedEventFilterName extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaEntityDamagedEventFilterOriginalDamageAmount extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'original-damage-amount',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface LuaEntityDamagedEventFilterType extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaEntityDamagedEventFilter extends BaseLuaEntityDamagedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaEntityDeconstructionCancelledEventFilterGhostName extends BaseLuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaEntityDeconstructionCancelledEventFilterGhostType extends BaseLuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaEntityDeconstructionCancelledEventFilterName extends BaseLuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaEntityDeconstructionCancelledEventFilterType extends BaseLuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaEntityDeconstructionCancelledEventFilter extends BaseLuaEntityDeconstructionCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaEntityDiedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaEntityDiedEventFilterGhostName extends BaseLuaEntityDiedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaEntityDiedEventFilterGhostType extends BaseLuaEntityDiedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaEntityDiedEventFilterName extends BaseLuaEntityDiedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaEntityDiedEventFilterType extends BaseLuaEntityDiedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaEntityDiedEventFilter extends BaseLuaEntityDiedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaEntityMarkedForDeconstructionEventFilterGhostName extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaEntityMarkedForDeconstructionEventFilterGhostType extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaEntityMarkedForDeconstructionEventFilterName extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaEntityMarkedForDeconstructionEventFilterType extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaEntityMarkedForDeconstructionEventFilter extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaEntityMarkedForUpgradeEventFilterGhostName extends BaseLuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaEntityMarkedForUpgradeEventFilterGhostType extends BaseLuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaEntityMarkedForUpgradeEventFilterName extends BaseLuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaEntityMarkedForUpgradeEventFilterType extends BaseLuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaEntityMarkedForUpgradeEventFilter extends BaseLuaEntityMarkedForUpgradeEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaPlayerBuiltEntityEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPlayerBuiltEntityEventFilterForce extends BaseLuaPlayerBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'force',
    
    /**
     * The entity force
     */
    force: string
}

interface LuaPlayerBuiltEntityEventFilterGhostName extends BaseLuaPlayerBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaPlayerBuiltEntityEventFilterGhostType extends BaseLuaPlayerBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaPlayerBuiltEntityEventFilterName extends BaseLuaPlayerBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaPlayerBuiltEntityEventFilterType extends BaseLuaPlayerBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaPlayerBuiltEntityEventFilter extends BaseLuaPlayerBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaPlayerMinedEntityEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPlayerMinedEntityEventFilterGhostName extends BaseLuaPlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaPlayerMinedEntityEventFilterGhostType extends BaseLuaPlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaPlayerMinedEntityEventFilterName extends BaseLuaPlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaPlayerMinedEntityEventFilterType extends BaseLuaPlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaPlayerMinedEntityEventFilter extends BaseLuaPlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaPlayerRepairedEntityEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPlayerRepairedEntityEventFilterGhostName extends BaseLuaPlayerRepairedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaPlayerRepairedEntityEventFilterGhostType extends BaseLuaPlayerRepairedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaPlayerRepairedEntityEventFilterName extends BaseLuaPlayerRepairedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaPlayerRepairedEntityEventFilterType extends BaseLuaPlayerRepairedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaPlayerRepairedEntityEventFilter extends BaseLuaPlayerRepairedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaPostEntityDiedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPostEntityDiedEventFilterType extends BaseLuaPostEntityDiedEventFilter {
    
    /**
     * The condition to filter on. Can only be `"type"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface BaseLuaPreGhostDeconstructedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPreGhostDeconstructedEventFilterGhostName extends BaseLuaPreGhostDeconstructedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaPreGhostDeconstructedEventFilterGhostType extends BaseLuaPreGhostDeconstructedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaPreGhostDeconstructedEventFilterName extends BaseLuaPreGhostDeconstructedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaPreGhostDeconstructedEventFilterType extends BaseLuaPreGhostDeconstructedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaPreGhostDeconstructedEventFilter extends BaseLuaPreGhostDeconstructedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaPreGhostUpgradedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPreGhostUpgradedEventFilterGhostName extends BaseLuaPreGhostUpgradedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaPreGhostUpgradedEventFilterGhostType extends BaseLuaPreGhostUpgradedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaPreGhostUpgradedEventFilterName extends BaseLuaPreGhostUpgradedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaPreGhostUpgradedEventFilterType extends BaseLuaPreGhostUpgradedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaPreGhostUpgradedEventFilter extends BaseLuaPreGhostUpgradedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaPrePlayerMinedEntityEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPrePlayerMinedEntityEventFilterGhostName extends BaseLuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaPrePlayerMinedEntityEventFilterGhostType extends BaseLuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaPrePlayerMinedEntityEventFilterName extends BaseLuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaPrePlayerMinedEntityEventFilterType extends BaseLuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaPrePlayerMinedEntityEventFilter extends BaseLuaPrePlayerMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaPreRobotMinedEntityEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaPreRobotMinedEntityEventFilterGhostName extends BaseLuaPreRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaPreRobotMinedEntityEventFilterGhostType extends BaseLuaPreRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaPreRobotMinedEntityEventFilterName extends BaseLuaPreRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaPreRobotMinedEntityEventFilterType extends BaseLuaPreRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaPreRobotMinedEntityEventFilter extends BaseLuaPreRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaRobotBuiltEntityEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaRobotBuiltEntityEventFilterForce extends BaseLuaRobotBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'force',
    
    /**
     * The entity force
     */
    force: string
}

interface LuaRobotBuiltEntityEventFilterGhostName extends BaseLuaRobotBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaRobotBuiltEntityEventFilterGhostType extends BaseLuaRobotBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaRobotBuiltEntityEventFilterName extends BaseLuaRobotBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaRobotBuiltEntityEventFilterType extends BaseLuaRobotBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaRobotBuiltEntityEventFilter extends BaseLuaRobotBuiltEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaRobotMinedEntityEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaRobotMinedEntityEventFilterGhostName extends BaseLuaRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaRobotMinedEntityEventFilterGhostType extends BaseLuaRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaRobotMinedEntityEventFilterName extends BaseLuaRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaRobotMinedEntityEventFilterType extends BaseLuaRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaRobotMinedEntityEventFilter extends BaseLuaRobotMinedEntityEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaScriptRaisedBuiltEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaScriptRaisedBuiltEventFilterGhostName extends BaseLuaScriptRaisedBuiltEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaScriptRaisedBuiltEventFilterGhostType extends BaseLuaScriptRaisedBuiltEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaScriptRaisedBuiltEventFilterName extends BaseLuaScriptRaisedBuiltEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaScriptRaisedBuiltEventFilterType extends BaseLuaScriptRaisedBuiltEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaScriptRaisedBuiltEventFilter extends BaseLuaScriptRaisedBuiltEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaScriptRaisedDestroyEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaScriptRaisedDestroyEventFilterGhostName extends BaseLuaScriptRaisedDestroyEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaScriptRaisedDestroyEventFilterGhostType extends BaseLuaScriptRaisedDestroyEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaScriptRaisedDestroyEventFilterName extends BaseLuaScriptRaisedDestroyEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaScriptRaisedDestroyEventFilterType extends BaseLuaScriptRaisedDestroyEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaScriptRaisedDestroyEventFilter extends BaseLuaScriptRaisedDestroyEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaScriptRaisedReviveEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaScriptRaisedReviveEventFilterGhostName extends BaseLuaScriptRaisedReviveEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaScriptRaisedReviveEventFilterGhostType extends BaseLuaScriptRaisedReviveEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaScriptRaisedReviveEventFilterName extends BaseLuaScriptRaisedReviveEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaScriptRaisedReviveEventFilterType extends BaseLuaScriptRaisedReviveEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaScriptRaisedReviveEventFilter extends BaseLuaScriptRaisedReviveEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaScriptRaisedTeleportedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaScriptRaisedTeleportedEventFilterGhostName extends BaseLuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaScriptRaisedTeleportedEventFilterGhostType extends BaseLuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaScriptRaisedTeleportedEventFilterName extends BaseLuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaScriptRaisedTeleportedEventFilterType extends BaseLuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaScriptRaisedTeleportedEventFilter extends BaseLuaScriptRaisedTeleportedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaSectorScannedEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaSectorScannedEventFilterGhostName extends BaseLuaSectorScannedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaSectorScannedEventFilterGhostType extends BaseLuaSectorScannedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaSectorScannedEventFilterName extends BaseLuaSectorScannedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaSectorScannedEventFilterType extends BaseLuaSectorScannedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaSectorScannedEventFilter extends BaseLuaSectorScannedEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseLuaUpgradeCancelledEventFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface LuaUpgradeCancelledEventFilterGhostName extends BaseLuaUpgradeCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_name',
    
    /**
     * The ghost prototype name
     */
    name: string
}

interface LuaUpgradeCancelledEventFilterGhostType extends BaseLuaUpgradeCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost_type',
    
    /**
     * The ghost prototype type
     */
    type: string
}

interface LuaUpgradeCancelledEventFilterName extends BaseLuaUpgradeCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'name',
    
    /**
     * The prototype name
     */
    name: string
}

interface LuaUpgradeCancelledEventFilterType extends BaseLuaUpgradeCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'type',
    
    /**
     * The prototype type
     */
    type: string
}

interface DefaultLuaUpgradeCancelledEventFilter extends BaseLuaUpgradeCancelledEventFilter {
    
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`.
     */
    filter: 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

interface BaseModSettingPrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface ModSettingPrototypeFilterMod extends BaseModSettingPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`.
     */
    filter: 'mod',
    
    /**
     * The mod name
     */
    mod: string
}

interface ModSettingPrototypeFilterSettingType extends BaseModSettingPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`.
     */
    filter: 'setting-type',
    
    /**
     * The setting scope type (`"startup"`, `"runtime-global"`, or `"runtime-per-user"`)
     */
    type: string
}

interface ModSettingPrototypeFilterType extends BaseModSettingPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`.
     */
    filter: 'type',
    
    /**
     * The prototype type, or a list of acceptable types.
     */
    type: string | string[]
}

interface BaseProduct {
    
    /**
     * Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified.
     */
    amount?: number,
    
    /**
     * Maximum amount of the item or fluid to give. Has no effect when `amount` is specified.
     */
    amount_max?: number,
    
    /**
     * Minimal amount of the item or fluid to give. Has no effect when `amount` is specified.
     */
    amount_min?: number,
    
    /**
     * How much of this product is a catalyst.
     */
    catalyst_amount?: number,
    
    /**
     * Prototype name of the result.
     */
    name: string,
    
    /**
     * A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced.
     */
    probability?: number
}

interface ProductFluid extends BaseProduct {
    
    /**
     * `"item"` or `"fluid"`.
     */
    type: 'fluid',
    
    /**
     * The fluid temperature of this product.
     */
    temperature?: number
}

interface DefaultProduct extends BaseProduct {
    
    /**
     * `"item"` or `"fluid"`.
     */
    type: 'item'
}

interface BaseRecipePrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface RecipePrototypeFilterCategory extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'category',
    
    /**
     * A {@link LuaRecipeCategoryPrototype | runtime:LuaRecipeCategoryPrototype} name
     */
    category: string
}

interface RecipePrototypeFilterEmissionsMultiplier extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'emissions-multiplier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface RecipePrototypeFilterEnergy extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'energy',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface RecipePrototypeFilterHasIngredientFluid extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'has-ingredient-fluid',
    
    /**
     * Matches if at least 1 ingredient is a fluid that matches these filters.
     */
    elem_filters?: FluidPrototypeFilter[]
}

interface RecipePrototypeFilterHasIngredientItem extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'has-ingredient-item',
    
    /**
     * Matches if at least 1 ingredient is an item that matches these filters.
     */
    elem_filters?: ItemPrototypeFilter[]
}

interface RecipePrototypeFilterHasProductFluid extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'has-product-fluid',
    
    /**
     * Matches if at least 1 product is a fluid that matches these filters.
     */
    elem_filters?: FluidPrototypeFilter[]
}

interface RecipePrototypeFilterHasProductItem extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'has-product-item',
    
    /**
     * Matches if at least 1 product is an item that matches these filters.
     */
    elem_filters?: ItemPrototypeFilter[]
}

interface RecipePrototypeFilterOverloadMultiplier extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'overload-multiplier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface RecipePrototypeFilterRequestPasteMultiplier extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'request-paste-multiplier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface RecipePrototypeFilterSubgroup extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'subgroup',
    
    /**
     * A {@link LuaGroup | runtime:LuaGroup} (subgroup) name
     */
    subgroup: string
}

interface DefaultRecipePrototypeFilter extends BaseRecipePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`.
     */
    filter: 'enabled' | 'hidden' | 'hidden-from-flow-stats' | 'hidden-from-player-crafting' | 'allow-as-intermediate' | 'allow-intermediates' | 'allow-decomposition' | 'always-show-made-in' | 'always-show-products' | 'show-amount-in-title' | 'has-ingredients' | 'has-products'
}

interface BaseTechnologyModifier {
    
}

interface TechnologyModifierOtherTypes extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'Other types',
    
    /**
     * Modification value. This value will be added to the variable it modifies.
     */
    modifier: number
}

interface TechnologyModifierAmmoDamage extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'ammo-damage',
    
    /**
     * Prototype name of the ammunition category that is affected
     */
    ammo_category: string,
    
    /**
     * Modification value. This will be added to the current ammo damage modifier upon researching.
     */
    modifier: number
}

interface TechnologyModifierGiveItem extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'give-item',
    
    /**
     * Number of items to give. Defaults to `1`.
     */
    count?: number,
    
    /**
     * Item prototype name to give.
     */
    item: string
}

interface TechnologyModifierGunSpeed extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'gun-speed',
    
    /**
     * Prototype name of the ammunition category that is affected
     */
    ammo_category: string,
    
    /**
     * Modification value. This will be added to the current gun speed modifier upon researching.
     */
    modifier: number
}

interface TechnologyModifierNothing extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'nothing',
    
    /**
     * Description of this nothing modifier.
     */
    effect_description: LocalisedString
}

interface TechnologyModifierTurretAttack extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'turret-attack',
    
    /**
     * Modification value. This will be added to the current turret damage modifier upon researching.
     */
    modifier: number,
    
    /**
     * Turret prototype name this modifier will affect.
     */
    turret_id: string
}

interface TechnologyModifierUnlockRecipe extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'unlock-recipe',
    
    /**
     * Recipe prototype name to unlock.
     */
    recipe: string
}

interface DefaultTechnologyModifier extends BaseTechnologyModifier {
    
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    type: 'inserter-stack-size-bonus' | 'stack-inserter-capacity-bonus' | 'laboratory-speed' | 'character-logistic-trash-slots' | 'maximum-following-robots-count' | 'worker-robot-speed' | 'worker-robot-storage' | 'ghost-time-to-live' | 'character-crafting-speed' | 'character-mining-speed' | 'character-running-speed' | 'character-build-distance' | 'character-item-drop-distance' | 'character-reach-distance' | 'character-resource-reach-distance' | 'character-item-pickup-distance' | 'character-loot-pickup-distance' | 'character-inventory-slots-bonus' | 'deconstruction-time-to-live' | 'max-failed-attempts-per-tick-per-construction-queue' | 'max-successful-attempts-per-tick-per-construction-queue' | 'character-health-bonus' | 'mining-drill-productivity-bonus' | 'train-braking-force-bonus' | 'zoom-to-world-enabled' | 'zoom-to-world-ghost-building-enabled' | 'zoom-to-world-blueprint-enabled' | 'zoom-to-world-deconstruction-planner-enabled' | 'zoom-to-world-upgrade-planner-enabled' | 'zoom-to-world-selection-tool-enabled' | 'worker-robot-battery' | 'laboratory-productivity' | 'follower-robot-lifetime' | 'artillery-range' | 'character-additional-mining-categories'
}

interface BaseTechnologyPrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface TechnologyPrototypeFilterLevel extends BaseTechnologyPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"unlocks-recipe"`, `"level"`, `"max-level"`, `"time"`.
     */
    filter: 'level',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface TechnologyPrototypeFilterMaxLevel extends BaseTechnologyPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"unlocks-recipe"`, `"level"`, `"max-level"`, `"time"`.
     */
    filter: 'max-level',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface TechnologyPrototypeFilterResearchUnitIngredient extends BaseTechnologyPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"unlocks-recipe"`, `"level"`, `"max-level"`, `"time"`.
     */
    filter: 'research-unit-ingredient',
    
    /**
     * The research ingredient to check.
     */
    ingredient: string
}

interface TechnologyPrototypeFilterTime extends BaseTechnologyPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"unlocks-recipe"`, `"level"`, `"max-level"`, `"time"`.
     */
    filter: 'time',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface TechnologyPrototypeFilterUnlocksRecipe extends BaseTechnologyPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"unlocks-recipe"`, `"level"`, `"max-level"`, `"time"`.
     */
    filter: 'unlocks-recipe',
    
    /**
     * The recipe to check.
     */
    recipe: string
}

interface DefaultTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
    
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"unlocks-recipe"`, `"level"`, `"max-level"`, `"time"`.
     */
    filter: 'enabled' | 'hidden' | 'upgrade' | 'visible-when-disabled' | 'has-effects' | 'has-prerequisites'
}

interface BaseTilePrototypeFilter {
    
    /**
     * Inverts the condition. Default is `false`.
     */
    invert?: boolean,
    
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    mode?: string
}

interface TilePrototypeFilterCollisionMask extends BaseTilePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`.
     */
    filter: 'collision-mask',
    mask: CollisionMask | CollisionMaskWithFlags,
    
    /**
     * How to filter: `"collides"`, `"layers-equals"`, `"contains-any"` or `"contains-all"`
     */
    mask_mode: string
}

interface TilePrototypeFilterDecorativeRemovalProbability extends BaseTilePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`.
     */
    filter: 'decorative-removal-probability',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface TilePrototypeFilterEmissions extends BaseTilePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`.
     */
    filter: 'emissions',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface TilePrototypeFilterVehicleFrictionModifier extends BaseTilePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`.
     */
    filter: 'vehicle-friction-modifier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface TilePrototypeFilterWalkingSpeedModifier extends BaseTilePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`.
     */
    filter: 'walking-speed-modifier',
    comparison: ComparatorString,
    
    /**
     * The value to compare against.
     */
    value: number
}

interface DefaultTilePrototypeFilter extends BaseTilePrototypeFilter {
    
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`.
     */
    filter: 'minable' | 'autoplace' | 'blueprintable' | 'item-to-place'
}


}