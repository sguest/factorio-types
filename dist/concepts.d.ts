// Factorio concept definitions
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/runtime-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.51
// API version 1

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"allowed-without-fight"`, `"type"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type AchievementPrototypeFilter = AchievementPrototypeFilterType | DefaultAchievementPrototypeFilter

/**
 * @param icon - The SignalID used for a custom alert. Only present for custom alerts.
 * @param message - The message for a custom alert. Only present for custom alerts.
 * @param tick - The tick this alert was created.
 */
interface Alert {
    /**
     * The SignalID used for a custom alert. Only present for custom alerts.
     */
    'icon'?: SignalID
    /**
     * The message for a custom alert. Only present for custom alerts.
     */
    'message'?: LocalisedString
    'position'?: Position
    'prototype'?: LuaEntityPrototype
    'target'?: LuaEntity
    /**
     * The tick this alert was created.
     */
    'tick': number
}

/**
 * A {@link string | string} that specifies where a gui element should be.
 */
declare enum Alignment {
    'bottom-center',
    'bottom-left',
    'bottom-right',
    /**
     * The same as `"middle-center"`
     */
    'center',
    /**
     * The same as `"middle-left"`
     */
    'left',
    'middle-center',
    'middle-left',
    /**
     * The same as `"middle-right"`
     */
    'right',
    'top-center',
    'top-left',
    'top-right',
}

/**
 * @param category - Ammo category of this ammo.
 * @param clamp_position - When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`.
 * @param energy_consumption - Energy consumption of a single shot, if applicable. Defaults to `0`.
 * @param target_type - One of `"entity"` (fires at an entity), `"position"` (fires directly at a position), or `"direction"` (fires in a direction).
 */
interface AmmoType {
    'action'?: TriggerItem[]
    /**
     * Ammo category of this ammo.
     */
    'category': string
    /**
     * When `true`, the gun will be able to shoot even when the target is out of range. Only applies when `target_type` is `position`. The gun will fire at the maximum range in the direction of the target position. Defaults to `false`.
     */
    'clamp_position'?: boolean
    /**
     * Energy consumption of a single shot, if applicable. Defaults to `0`.
     */
    'energy_consumption'?: number
    /**
     * One of `"entity"` (fires at an entity), `"position"` (fires directly at a position), or `"direction"` (fires in a direction).
     */
    'target_type': string
}

/**
 * Any basic type (string, number, boolean), table, or LuaObject.
 */
type Any = any;

/**
 * Any basic type (string, number, boolean) or table.
 */
type AnyBasic = string | number | boolean | object

/**
 * @param first_constant - Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`.
 * @param first_signal - First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`.
 * @param operation - Must be one of `"*"`, `"/"`, `"+"`, `"-"`, `"%"`, `"^"`, `"<<"`, `">>"`, `"AND"`, `"OR"`, `"XOR"`. When not specified, defaults to `"*"`.
 * @param output_signal - Specifies the signal to output.
 * @param second_constant - Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`.
 * @param second_signal - Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`.
 */
interface ArithmeticCombinatorParameters {
    /**
     * Constant to use as the first argument of the operation. Has no effect when `first_signal` is set. Defaults to `0`.
     */
    'first_constant'?: number
    /**
     * First signal to use in an operation. If not specified, the second argument will be the value of `first_constant`.
     */
    'first_signal'?: SignalID
    /**
     * Must be one of `"*"`, `"/"`, `"+"`, `"-"`, `"%"`, `"^"`, `"<<"`, `">>"`, `"AND"`, `"OR"`, `"XOR"`. When not specified, defaults to `"*"`.
     */
    'operation'?: string
    /**
     * Specifies the signal to output.
     */
    'output_signal'?: SignalID
    /**
     * Constant to use as the second argument of the operation. Has no effect when `second_signal` is set. Defaults to `0`.
     */
    'second_constant'?: number
    /**
     * Second signal to use in an operation. If not specified, the second argument will be the value of `second_constant`.
     */
    'second_signal'?: SignalID
}

/**
 * @param damage_modifier - Multiplier applied to the damage of an attack.
 * @param type - Name of the [LuaFluidPrototype](LuaFluidPrototype).
 */
interface AttackParameterFluid {
    /**
     * Multiplier applied to the damage of an attack.
     */
    'damage_modifier': number
    /**
     * Name of the {@link LuaFluidPrototype | LuaFluidPrototype}.
     */
    'type': string
}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 * @param ammo_categories - List of the names of compatible [LuaAmmoCategoryPrototypes](LuaAmmoCategoryPrototype).
 * @param ammo_consumption_modifier - Multiplier applied to the ammo consumption of an attack.
 * @param cooldown - Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick.
 * @param damage_modifier - Multiplier applied to the damage of an attack.
 * @param fire_penalty - When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire.
 * @param health_penalty - When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite.
 * @param min_attack_distance - If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters.
 * @param min_range - Minimum range of attack. Used with flamethrower turrets to prevent self-immolation.
 * @param range - Maximum range of attack.
 * @param range_mode - Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`.
 * @param rotate_penalty - When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face.
 * @param turn_range - The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees.
 * @param type - The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
 * @param warmup - Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so.
 */
type AttackParameters = AttackParametersProjectile | AttackParametersStream | DefaultAttackParameters

/**
 * @param frequency - For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the [LuaAutoplaceControlPrototype](LuaAutoplaceControlPrototype) is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency.
 * @param richness - Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the [LuaAutoplaceControlPrototype](LuaAutoplaceControlPrototype) by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness.
 * @param size - For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
 */
interface AutoplaceControl {
    /**
     * For things that are placed as spots such as ores and enemy bases, frequency is generally proportional to number of spots placed per unit area. For continuous features such as forests, frequency is how compressed the probability function is over distance, i.e. the inverse of 'scale' (similar to terrain_segmentation). When the {@link LuaAutoplaceControlPrototype | LuaAutoplaceControlPrototype} is of the category `"terrain"`, then scale is shown in the map generator GUI instead of frequency.
     */
    'frequency': MapGenSize
    /**
     * Has different effects for different things, but generally affects the 'health' or density of a thing that is placed without affecting where it is placed. For trees, richness affects tree health. For ores, richness multiplies the amount of ore at any given tile in a patch. Metadata about autoplace controls (such as whether or not 'richness' does anything for them) can be found in the {@link LuaAutoplaceControlPrototype | LuaAutoplaceControlPrototype} by looking up `game.autoplace_control_prototypes[(control prototype name)]`, e.g. `game.autoplace_control_prototypes["enemy-base"].richness` is false, because enemy base autoplacement doesn't use richness.
     */
    'richness': MapGenSize
    /**
     * For things that are placed as spots, size is proportional to the area of each spot. For continuous features, size affects how much of the map is covered with the thing, and is called 'coverage' in the GUI.
     */
    'size': MapGenSize
}

interface AutoplaceSetting {
    'frequency': MapGenSize
    'richness': MapGenSize
    'size': MapGenSize
}

/**
 * @param treat_missing_as_default - Whether missing autoplace names for this type should be default enabled.
 */
interface AutoplaceSettings {
    'settings': {[key: string]: AutoplaceSetting}
    /**
     * Whether missing autoplace names for this type should be default enabled.
     */
    'treat_missing_as_default': boolean
}

/**
 * Specifies how probability and richness are calculated when placing something on the map. Can be specified either using `probability_expression` and `richness_expression` or by using all the other fields.
 * @param control - Control prototype name.
 */
interface AutoplaceSpecification {
    /**
     * Control prototype name.
     */
    'control'?: string
    'coverage': number
    'default_enabled': boolean
    'force': string
    'max_probability': number
    'order': string
    'peaks'?: AutoplaceSpecificationPeak[]
    'placement_density': number
    'probability_expression': NoiseExpression
    'random_probability_penalty': number
    'richness_base': number
    'richness_expression': NoiseExpression
    'richness_multiplier': number
    'richness_multiplier_distance_bonus': number
    'sharpness': number
    'starting_area_size': number
    'tile_restriction'?: AutoplaceSpecificationRestriction[]
}

/**
 * @param noise_layer - Prototype name of the noise layer.
 */
interface AutoplaceSpecificationPeak {
    'aux_max_range': number
    'aux_optimal': number
    'aux_range': number
    'aux_top_property_limit': number
    'distance_max_range': number
    'distance_optimal': number
    'distance_range': number
    'distance_top_property_limit': number
    'elevation_max_range': number
    'elevation_optimal': number
    'elevation_range': number
    'elevation_top_property_limit': number
    'influence': number
    'max_influence': number
    'min_influence': number
    'noisePersistence': number
    /**
     * Prototype name of the noise layer.
     */
    'noise_layer'?: string
    'noise_octaves_difference': number
    'richness_influence': number
    'starting_area_weight_max_range': number
    'starting_area_weight_optimal': number
    'starting_area_weight_range': number
    'starting_area_weight_top_property_limit': number
    'temperature_max_range': number
    'temperature_optimal': number
    'temperature_range': number
    'temperature_top_property_limit': number
    'tier_from_start_max_range': number
    'tier_from_start_optimal': number
    'tier_from_start_range': number
    'tier_from_start_top_property_limit': number
    'water_max_range': number
    'water_optimal': number
    'water_range': number
    'water_top_property_limit': number
}

/**
 * @param first - Tile prototype name
 * @param second - Second prototype name
 */
interface AutoplaceSpecificationRestriction {
    /**
     * Tile prototype name
     */
    'first'?: string
    /**
     * Second prototype name
     */
    'second'?: string
}

/**
 * @param entity - The target entity.
 * @param position - The target position.
 */
interface BeamTarget {
    /**
     * The target entity.
     */
    'entity'?: LuaEntity
    /**
     * The target position.
     */
    'position'?: Position
}

/**
 * The representation of an entity inside of a blueprint. It has at least these fields, but can contain additional ones depending on the kind of entity.
 * @param connections - The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit connections.
 * @param control_behavior - The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors.
 * @param direction - The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north.
 * @param entity_number - The entity's unique identifier in the blueprint.
 * @param items - The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts.
 * @param name - The prototype name of the entity.
 * @param position - The position of the entity.
 * @param schedule - The schedule of the entity, if it has one. Only relevant for locomotives.
 * @param tags - The entity tags of the entity, if there are any. Only relevant for entity ghosts.
 */
interface BlueprintEntity {
    /**
     * The circuit network connections of the entity, if there are any. Only relevant for entities that support circuit connections.
     */
    'connections'?: BlueprintCircuitConnection
    /**
     * The control behavior of the entity, if it has one. The format of the control behavior depends on the entity's type. Only relevant for entities that support control behaviors.
     */
    'control_behavior'?: BlueprintControlBehavior
    /**
     * The direction the entity is facing. Only present for entities that can face in different directions and when the entity is not facing north.
     */
    'direction'?: defines.direction
    /**
     * The entity's unique identifier in the blueprint.
     */
    'entity_number': number
    /**
     * The items that the entity will request when revived, if there are any. It's a mapping of prototype names to amounts. Only relevant for entity ghosts.
     */
    'items'?: {[key: string]: number}
    /**
     * The prototype name of the entity.
     */
    'name': string
    /**
     * The position of the entity.
     */
    'position': Position
    /**
     * The schedule of the entity, if it has one. Only relevant for locomotives.
     */
    'schedule'?: TrainScheduleRecord[]
    /**
     * The entity tags of the entity, if there are any. Only relevant for entity ghosts.
     */
    'tags'?: Tags
}

/**
 * @param index - Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4].
 * @param name - Name of the item prototype whose icon should be used.
 */
interface BlueprintItemIcon {
    /**
     * Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4].
     */
    'index': number
    /**
     * Name of the item prototype whose icon should be used.
     */
    'name': string
}

/**
 * @param index - Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4].
 * @param signal - The icon to use. It can be any item icon as well as any virtual signal icon.
 */
interface BlueprintSignalIcon {
    /**
     * Index of the icon in the blueprint icons slots. Has to be an integer in the range [1, 4].
     */
    'index': number
    /**
     * The icon to use. It can be any item icon as well as any virtual signal icon.
     */
    'signal': SignalID
}

/**
 * Two positions, specifying the top-left and bottom-right corner of the box respectively. Like with {@link Position | Position}, the names of the members may be omitted. When read from the game, the third member `orientation` is present if it is non-zero, however it is ignored when provided to the game.
 * @example
 * Explicit definition: 
 * ```
 * {left_top = {-2, -3}, right_bottom = {5, 8}}
 * ```
 *
 * @example
 * Shorthand: 
 * ```
 * {{-2, -3}, {5, 8}}
 * ```
 *
 */
interface BoundingBox {
    'left_top': Position
    'orientation'?: RealOrientation
    'right_bottom': Position
}

/**
 * @param attack_parameters - Only present when `type` is `"throw"` or `"use-on-self"`.
 * @param equipment - Only present when `type` is `"equipment-remote"`. It is the equipment prototype name.
 * @param type - One of `"throw"`, `"equipment-remote"`, `"use-on-self"`.
 */
interface CapsuleAction {
    /**
     * Only present when `type` is `"throw"` or `"use-on-self"`.
     */
    'attack_parameters'?: AttackParameters
    /**
     * Only present when `type` is `"equipment-remote"`. It is the equipment prototype name.
     */
    'equipment'?: string
    /**
     * One of `"throw"`, `"equipment-remote"`, `"use-on-self"`.
     */
    'type': string
}

/**
 * @remarks
 * Either `icon`, `text`, or both must be provided.
 *
 */
interface ChartTagSpec {
    'icon'?: SignalID
    'last_user'?: PlayerIdentification
    'position': Position
    'text'?: string
}

/**
 * Coordinates of a chunk in a {@link LuaSurface | LuaSurface} where each integer `x`/`y` represents a different chunk. This uses the same format as {@link Position | Position}, meaning it can be specified either with or without explicit keys. A {@link Position | Position} can be translated to a ChunkPosition by dividing the `x`/`y` values by 32.
 */
interface ChunkPosition {
    'x': number
    'y': number
}

/**
 * A {@link ChunkPosition | ChunkPosition} with an added bounding box for the area of the chunk.
 */
interface ChunkPositionAndArea {
    'area': BoundingBox
    'x': number
    'y': number
}

/**
 * @param comparator - Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
 * @param constant - Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
 * @param first_signal - Defaults to blank
 * @param second_signal - What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`.
 */
interface CircuitCondition {
    /**
     * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
     */
    'comparator'?: ComparatorString
    /**
     * Constant to compare `first_signal` to. Has no effect when `second_signal` is set. When neither `second_signal` nor `constant` are specified, the effect is as though `constant` were specified with the value `0`.
     */
    'constant'?: number
    /**
     * Defaults to blank
     */
    'first_signal'?: SignalID
    /**
     * What to compare `first_signal` to. If not specified, `first_signal` will be compared to `constant`.
     */
    'second_signal'?: SignalID
}

/**
 * @param fulfilled - Whether the condition is currently fulfilled
 */
interface CircuitConditionDefinition {
    'condition': CircuitCondition
    /**
     * Whether the condition is currently fulfilled
     */
    'fulfilled'?: boolean
}

/**
 * @param wire - Wire color, either [defines.wire_type.red](defines.wire_type.red) or [defines.wire_type.green](defines.wire_type.green).
 */
interface CircuitConnectionDefinition {
    'source_circuit_id': defines.circuit_connector_id
    'target_circuit_id': defines.circuit_connector_id
    'target_entity': LuaEntity
    /**
     * Wire color, either {@link defines.wire_type.red | defines.wire_type.red} or {@link defines.wire_type.green | defines.wire_type.green}.
     */
    'wire': defines.wire_type
}

/**
 * @param center - This vector is a table with `x` and `y` keys instead of an array.
 * @param name - Name of the [LuaEntityPrototype](LuaEntityPrototype)
 */
interface CircularParticleCreationSpecification {
    /**
     * This vector is a table with `x` and `y` keys instead of an array.
     */
    'center': Vector
    'creation_distance': number
    'creation_distance_orientation': number
    'direction': number
    'direction_deviation': number
    'height': number
    'height_deviation': number
    /**
     * Name of the {@link LuaEntityPrototype | LuaEntityPrototype}
     */
    'name': string
    'speed': number
    'speed_deviation': number
    'starting_frame_speed': number
    'starting_frame_speed_deviation': number
    'use_source_position': boolean
    'vertical_speed': number
    'vertical_speed_deviation': number
}

/**
 * An array with the following members:
 * - A {@link RealOrientation | RealOrientation}
 * - A {@link Vector | Vector}
 */
type CircularProjectileCreationSpecification = [RealOrientation, Vector]

declare enum CliffOrientation {
    'east-to-none',
    'east-to-north',
    'east-to-south',
    'east-to-west',
    'none-to-east',
    'none-to-north',
    'none-to-south',
    'none-to-west',
    'north-to-east',
    'north-to-none',
    'north-to-south',
    'north-to-west',
    'south-to-east',
    'south-to-none',
    'south-to-north',
    'south-to-west',
    'west-to-east',
    'west-to-none',
    'west-to-north',
    'west-to-south',
}

/**
 * @param cliff_elevation_0 - Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI.
 * @param cliff_elevation_interval - Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
 * @param name - Name of the cliff prototype.
 * @param richness - Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
 */
interface CliffPlacementSettings {
    /**
     * Elevation at which the first row of cliffs is placed. The default is `10`, and this cannot be set from the map generation GUI.
     */
    'cliff_elevation_0': number
    /**
     * Elevation difference between successive rows of cliffs. This is inversely proportional to 'frequency' in the map generation GUI. Specifically, when set from the GUI the value is `40 / frequency`.
     */
    'cliff_elevation_interval': number
    /**
     * Name of the cliff prototype.
     */
    'name': string
    /**
     * Corresponds to 'continuity' in the GUI. This value is not used directly, but is used by the 'cliffiness' noise expression, which in combination with elevation and the two cliff elevation properties drives cliff placement (cliffs are placed when elevation crosses the elevation contours defined by `cliff_elevation_0` and `cliff_elevation_interval` when 'cliffiness' is greater than `0.5`). The default 'cliffiness' expression interprets this value such that larger values result in longer unbroken walls of cliffs, and smaller values (between `0` and `1`) result in larger gaps in cliff walls.
     */
    'richness': MapGenSize
}

/**
 * This is a set of masks given as a dictionary{@link [CollisionMaskLayer | CollisionMaskLayer} &rarr; {@link boolean | boolean}]. Only set masks are present in the dictionary and they have the value `true`. Unset flags aren't present at all.
 */
type CollisionMask = {[key in CollisionMaskLayer]: boolean}

/**
 * A {@link string | string} specifying a collision mask layer.
 * 
 * Possible values for the string are:
 * - `"ground-tile"`
 * - `"water-tile"`
 * - `"resource-layer"`
 * - `"doodad-layer"`
 * - `"floor-layer"`
 * - `"item-layer"`
 * - `"ghost-layer"`
 * - `"object-layer"`
 * - `"player-layer"`
 * - `"train-layer"`
 * - `"rail-layer"`
 * - `"transport-belt-layer"`
 * - `"not-setup"`
 * 
 * Additionally the values `"layer-13"` through `"layer-55"`. These layers are currently unused by the game but may change. If a mod is going to use one of the unused layers it's recommended to start at the higher layers because the base game will take from the lower ones.
 */
type CollisionMaskLayer = 'ground-tile' | 'water-tile' | 'resource-layer' | 'doodad-layer' | 'floor-layer' | 'item-layer' | 'ghost-layer' | 'object-layer' | 'player-layer' | 'train-layer' | 'rail-layer' | 'transport-belt-layer' | 'not-setup' | 'layer-13' | 'layer-14' | 'layer-15' | 'layer-16' | 'layer-17' | 'layer-18' | 'layer-19' | 'layer-20' | 'layer-21' | 'layer-22' | 'layer-23' | 'layer-24' | 'layer-25' | 'layer-26' | 'layer-27' | 'layer-28' | 'layer-29' | 'layer-30' | 'layer-31' | 'layer-32' | 'layer-33' | 'layer-34' | 'layer-35' | 'layer-36' | 'layer-37' | 'layer-38' | 'layer-39' | 'layer-40' | 'layer-41' | 'layer-42' | 'layer-43' | 'layer-44' | 'layer-45' | 'layer-46' | 'layer-47' | 'layer-48' | 'layer-49' | 'layer-50' | 'layer-51' | 'layer-52' | 'layer-53' | 'layer-54' | 'layer-55'

/**
 * A {@link CollisionMask | CollisionMask} but also includes any flags this mask has.
 * 
 * Flags such as:
 * - `"not-colliding-with-itself"`
 * - `"consider-tile-transitions"`
 * - `"colliding-with-tiles-only"`
 */
type CollisionMaskWithFlags = CollisionMask & {[key:string]: true}

/**
 * Red, green, blue and alpha values, all in range [0, 1] or all in range [0, 255] if any value is > 1. All values here are optional. Color channels default to `0`, the alpha channel defaults to `1`.
 * 
 * Similar to {@link Position | Position}, Color allows the short-hand notation of passing an array of exactly 3 or 4 numbers. The game usually expects colors to be in pre-multiplied form (color channels are pre-multiplied by alpha).
 * @example
 * ```
 * red1 = {r = 0.5, g = 0, b = 0, a = 0.5}  -- Half-opacity red
 * red2 = {r = 0.5, a = 0.5}                -- Same color as red1
 * black = {}                               -- All channels omitted: black
 * red1_short = {0.5, 0, 0, 0.5}            -- Same color as red1 in short-hand notation
 * ```
 *
 */
interface Color {
    'a'?: number
    'b'?: number
    'g'?: number
    'r'?: number
}

/**
 * Same as {@link Color | Color}, but red, green, blue and alpha values can be any floating point number, without any special handling of the range [1, 255].
 */
interface ColorModifier {
    'a'?: number
    'b'?: number
    'g'?: number
    'r'?: number
}

/**
 * Commands can be given to enemies and unit groups.
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 * @param type - Type of command. The remaining fields depend on the value of this field.
 */
interface Command {
    /**
     * Type of command. The remaining fields depend on the value of this field.
     */
    'type': defines.command
}

/**
 * A {@link string | string} that specifies how the inputs should be compared.
 * @remarks
 * While the API accepts both versions for `"less/greater than or equal to"` and `"not equal"`, it'll always return `"≥"`, `"≤"` or `"≠"` respectively when reading them back.
 *
 */
declare enum ComparatorString {
    /**
     * "not equal to"
     */
    '!=',
    /**
     * "lesser than"
     */
    '<',
    /**
     * "lesser than or equal to"
     */
    '<=',
    /**
     * "equal to"
     */
    '=',
    /**
     * "greater than"
     */
    '>',
    /**
     * "greater than or equal to"
     */
    '>=',
    /**
     * "not equal to"
     */
    '≠',
    /**
     * "lesser than or equal to"
     */
    '≤',
    /**
     * "greater than or equal to"
     */
    '≥',
}

/**
 * @param migration_applied - `true` when mod prototype migrations have been applied since the last time this save was loaded.
 * @param mod_changes - Dictionary of mod changes. It is indexed by mod name.
 * @param mod_startup_settings_changed - `true` when mod startup settings have changed since the last time this save was loaded.
 * @param new_version - New version of the map. Present only when loading map version other than the current version.
 * @param old_version - Old version of the map. Present only when loading map version other than the current version.
 */
interface ConfigurationChangedData {
    /**
     * `true` when mod prototype migrations have been applied since the last time this save was loaded.
     */
    'migration_applied': boolean
    /**
     * Dictionary of mod changes. It is indexed by mod name.
     */
    'mod_changes': {[key: string]: ModChangeData}
    /**
     * `true` when mod startup settings have changed since the last time this save was loaded.
     */
    'mod_startup_settings_changed': boolean
    /**
     * New version of the map. Present only when loading map version other than the current version.
     */
    'new_version'?: string
    /**
     * Old version of the map. Present only when loading map version other than the current version.
     */
    'old_version'?: string
}

/**
 * @param count - Value of the signal to emit.
 * @param index - Index of the constant combinator's slot to set this signal to.
 * @param signal - Signal to emit.
 */
interface ConstantCombinatorParameters {
    /**
     * Value of the signal to emit.
     */
    'count': number
    /**
     * Index of the constant combinator's slot to set this signal to.
     */
    'index': number
    /**
     * Signal to emit.
     */
    'signal': SignalID
}

/**
 * @param count - The amount of items being crafted.
 * @param index - The index of the item in the crafting queue.
 * @param recipe - The recipe being crafted.
 */
interface CraftingQueueItem {
    /**
     * The amount of items being crafted.
     */
    'count': number
    /**
     * The index of the item in the crafting queue.
     */
    'index': number
    /**
     * The recipe being crafted.
     */
    'recipe': string
}

/**
 * It is specified by {@link string | string}.
 */
declare enum CursorBoxRenderType {
    /**
     * Green box.
     */
    'blueprint-snap-rectangle',
    /**
     * Green box.
     */
    'copy',
    /**
     * Light blue box.
     */
    'electricity',
    /**
     * Yellow box.
     */
    'entity',
    /**
     * Light blue box.
     */
    'logistics',
    /**
     * Red box.
     */
    'not-allowed',
    /**
     * Light blue box.
     */
    'pair',
    /**
     * White box.
     */
    'train-visualization',
}

/**
 * @param name - The name of the command.
 * @param parameter - The parameter passed after the command, if there is one.
 * @param player_index - The player who issued the command, or `nil` if it was issued from the server console.
 * @param tick - The tick the command was used in.
 */
interface CustomCommandData {
    /**
     * The name of the command.
     */
    'name': string
    /**
     * The parameter passed after the command, if there is one.
     */
    'parameter'?: string
    /**
     * The player who issued the command, or `nil` if it was issued from the server console.
     */
    'player_index'?: number
    /**
     * The tick the command was used in.
     */
    'tick': number
}

/**
 * @param position - Position to pan the camera to.
 * @param target - Entity or unit group to pan the camera to.
 * @param time_to_wait - Time in ticks to wait before moving to the next waypoint.
 * @param transition_time - How many ticks it will take to reach this waypoint from the previous one.
 * @param zoom - Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used.
 */
interface CutsceneWaypoint {
    /**
     * Position to pan the camera to.
     */
    'position'?: Position
    /**
     * Entity or unit group to pan the camera to.
     */
    'target'?: LuaEntity | LuaUnitGroup
    /**
     * Time in ticks to wait before moving to the next waypoint.
     */
    'time_to_wait': number
    /**
     * How many ticks it will take to reach this waypoint from the previous one.
     */
    'transition_time': number
    /**
     * Zoom level to be set when the waypoint is reached. When not specified, the previous waypoint's zoom is used.
     */
    'zoom'?: number
}

/**
 * @param comparator - Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
 * @param constant - Constant to use as the second argument of operation. Defaults to `0`.
 * @param copy_count_from_input - Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`.
 * @param first_signal - Defaults to blank.
 * @param output_signal - Defaults to blank.
 * @param second_signal - Second signal to use in an operation, if any. If this is not specified, the second argument to a decider combinator's operation is assumed to be the value of `constant`.
 */
interface DeciderCombinatorParameters {
    /**
     * Specifies how the inputs should be compared. If not specified, defaults to `"<"`.
     */
    'comparator'?: ComparatorString
    /**
     * Constant to use as the second argument of operation. Defaults to `0`.
     */
    'constant'?: number
    /**
     * Defaults to `true`. When `false`, will output a value of `1` for the given `output_signal`.
     */
    'copy_count_from_input'?: boolean
    /**
     * Defaults to blank.
     */
    'first_signal'?: SignalID
    /**
     * Defaults to blank.
     */
    'output_signal'?: SignalID
    /**
     * Second signal to use in an operation, if any. If this is not specified, the second argument to a decider combinator's operation is assumed to be the value of `constant`.
     */
    'second_signal'?: SignalID
}

/**
 * @param name - The name of the decorative prototype.
 */
interface Decorative {
    'amount': number
    /**
     * The name of the decorative prototype.
     */
    'name': string
    'position': Position
}

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type DecorativePrototypeFilter = DecorativePrototypeFilterCollisionMask | DefaultDecorativePrototypeFilter

interface DecorativeResult {
    'amount': number
    'decorative': LuaDecorativePrototype
    'position': TilePosition
}

/**
 * Technology and recipe difficulty settings. Updating any of the attributes will immediately take effect in the game engine.
 * @param research_queue_setting - Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See [LuaForce](LuaForce) for that.
 * @param technology_price_multiplier - A value in range [0.001, 1000].
 */
interface DifficultySettings {
    'recipe_difficulty': defines.difficulty_settings.recipe_difficulty
    /**
     * Either `"after-victory"`, `"always"` or `"never"`. Changing this to `"always"` or `"after-victory"` does not automatically unlock the research queue. See {@link LuaForce | LuaForce} for that.
     */
    'research_queue_setting': string
    'technology_difficulty': defines.difficulty_settings.technology_difficulty
    /**
     * A value in range [0.001, 1000].
     */
    'technology_price_multiplier': number
}

interface DisplayResolution {
    'height': number
    'width': number
}

/**
 * These values represent a percentual increase in evolution. This means a value of `0.1` would increase evolution by 10%.
 * @param destroy_factor - The amount evolution progresses for every destroyed spawner. Defaults to `0.002`.
 * @param enabled - Whether enemy evolution is enabled at all.
 * @param pollution_factor - The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`.
 * @param time_factor - The amount evolution naturally progresses by every second. Defaults to `0.000004`.
 */
interface EnemyEvolutionMapSettings {
    /**
     * The amount evolution progresses for every destroyed spawner. Defaults to `0.002`.
     */
    'destroy_factor': number
    /**
     * Whether enemy evolution is enabled at all.
     */
    'enabled': boolean
    /**
     * The amount evolution progresses for every unit of pollution. Defaults to `0.0000009`.
     */
    'pollution_factor': number
    /**
     * The amount evolution naturally progresses by every second. Defaults to `0.000004`.
     */
    'time_factor': number
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
 * @param building_coefficient - Defaults to `0.1`.
 * @param enabled - Whether enemy expansion is enabled at all.
 * @param enemy_building_influence_radius - Defaults to `2`.
 * @param friendly_base_influence_radius - Defaults to `2`.
 * @param max_colliding_tiles_coefficient - A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%.
 * @param max_expansion_cooldown - The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3,600=216,000` ticks.
 * @param max_expansion_distance - Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`.
 * @param min_expansion_cooldown - The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3,600=14,400` ticks.
 * @param neighbouring_base_chunk_coefficient - Defaults to `0.4`.
 * @param neighbouring_chunk_coefficient - Defaults to `0.5`.
 * @param other_base_coefficient - Defaults to `2.0`.
 * @param settler_group_max_size - The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`.
 * @param settler_group_min_size - The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`.
 */
interface EnemyExpansionMapSettings {
    /**
     * Defaults to `0.1`.
     */
    'building_coefficient': number
    /**
     * Whether enemy expansion is enabled at all.
     */
    'enabled': boolean
    /**
     * Defaults to `2`.
     */
    'enemy_building_influence_radius': number
    /**
     * Defaults to `2`.
     */
    'friendly_base_influence_radius': number
    /**
     * A chunk has to have at most this high of a percentage of unbuildable tiles for it to be considered a candidate to avoid chunks full of water as candidates. Defaults to `0.9`, or 90%.
     */
    'max_colliding_tiles_coefficient': number
    /**
     * The maximum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `60*3,600=216,000` ticks.
     */
    'max_expansion_cooldown': number
    /**
     * Distance in chunks from the furthest base around to prevent expansions from reaching too far into the player's territory. Defaults to `7`.
     */
    'max_expansion_distance': number
    /**
     * The minimum time between expansions in ticks. The actual cooldown is adjusted to the current evolution levels. Defaults to `4*3,600=14,400` ticks.
     */
    'min_expansion_cooldown': number
    /**
     * Defaults to `0.4`.
     */
    'neighbouring_base_chunk_coefficient': number
    /**
     * Defaults to `0.5`.
     */
    'neighbouring_chunk_coefficient': number
    /**
     * Defaults to `2.0`.
     */
    'other_base_coefficient': number
    /**
     * The maximum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `20`.
     */
    'settler_group_max_size': number
    /**
     * The minimum size of a biter group that goes to build a new base. This is multiplied by the evolution factor. Defaults to `5`.
     */
    'settler_group_min_size': number
}

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type EntityPrototypeFilter = EntityPrototypeFilterBuildBaseEvolutionRequirement | EntityPrototypeFilterCollisionMask | EntityPrototypeFilterCraftingCategory | EntityPrototypeFilterEmissions | EntityPrototypeFilterFlag | EntityPrototypeFilterName | EntityPrototypeFilterSelectionPriority | EntityPrototypeFilterType | DefaultEntityPrototypeFilter

/**
 * This is a set of flags given as a dictionary{@link [string | string} &rarr; {@link boolean | boolean}]. When a flag is set, it is present in the dictionary with the value `true`. Unset flags aren't present in the dictionary at all. So, the boolean value is meaningless and exists just for easy table lookup if a flag is set.
 */
type EntityPrototypeFlags = {
    [key in EntityPrototypeFlagsKey]: true
}

type EntityPrototypeFlagsKey = 'breaths-air' | 'building-direction-8-way' | 'fast-replaceable-no-build-while-moving' | 'fast-replaceable-no-cross-type-while-moving' | 'filter-directions' | 'hidden' | 'hide-alt-info' | 'no-automated-item-insertion' | 'no-automated-item-removal' | 'no-copy-paste' | 'no-gap-fill-while-building' | 'not-blueprintable' | 'not-deconstructable' | 'not-flammable' | 'not-in-kill-statistics' | 'not-on-map' | 'not-repairable' | 'not-rotatable' | 'not-selectable-in-game' | 'not-upgradable' | 'placeable-enemy' | 'placeable-neutral' | 'placeable-off-grid' | 'placeable-player' | 'player-creation'

/**
 * @remarks
 * For type LuaEntity - The entity.
 * For type LuaEntityPrototype - The entity prototype.
 * For type string - The prototype name.
 *
 */
type EntityPrototypeIdentification = LuaEntity | LuaEntityPrototype | string

/**
 * A table used to define a manual shape for a piece of equipment.
 */
interface EquipmentPoint {
    'x': number
    'y': number
}

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"item-to-place"`, `"type"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type EquipmentPrototypeFilter = EquipmentPrototypeFilterType | DefaultEquipmentPrototypeFilter

/**
 * Information about the event that has been raised. The table can also contain other fields depending on the type of event. See {@link the list of Factorio events | events.html} for more information on these.
 * @param mod_name - The name of the mod that raised the event if it was raised using [LuaBootstrap::raise_event](LuaBootstrap::raise_event).
 * @param name - The identifier of the event this handler was registered to.
 * @param tick - The tick during which the event happened.
 */
interface EventData {
    /**
     * The name of the mod that raised the event if it was raised using {@link LuaBootstrap::raise_event | LuaBootstrap::raise_event}.
     */
    'mod_name'?: string
    /**
     * The identifier of the event this handler was registered to.
     */
    'name': defines.events
    /**
     * The tick during which the event happened.
     */
    'tick': number
}

/**
 * Used to filter out irrelevant event callbacks in a performant way.
 * 
 * Available filters:
 * - {@link LuaEntityClonedEventFilter | LuaEntityClonedEventFilter}
 * - {@link LuaEntityDamagedEventFilter | LuaEntityDamagedEventFilter}
 * - {@link LuaPlayerMinedEntityEventFilter | LuaPlayerMinedEntityEventFilter}
 * - {@link LuaPreRobotMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter}
 * - {@link LuaRobotBuiltEntityEventFilter | LuaRobotBuiltEntityEventFilter}
 * - {@link LuaPostEntityDiedEventFilter | LuaPostEntityDiedEventFilter}
 * - {@link LuaEntityDiedEventFilter | LuaEntityDiedEventFilter}
 * - {@link LuaScriptRaisedReviveEventFilter | LuaScriptRaisedReviveEventFilter}
 * - {@link LuaPrePlayerMinedEntityEventFilter | LuaPrePlayerMinedEntityEventFilter}
 * - {@link LuaEntityMarkedForDeconstructionEventFilter | LuaEntityMarkedForDeconstructionEventFilter}
 * - {@link LuaPreGhostDeconstructedEventFilter | LuaPreGhostDeconstructedEventFilter}
 * - {@link LuaEntityDeconstructionCancelledEventFilter | LuaEntityDeconstructionCancelledEventFilter}
 * - {@link LuaEntityMarkedForUpgradeEventFilter | LuaEntityMarkedForUpgradeEventFilter}
 * - {@link LuaSectorScannedEventFilter | LuaSectorScannedEventFilter}
 * - {@link LuaRobotMinedEntityEventFilter | LuaRobotMinedEntityEventFilter}
 * - {@link LuaScriptRaisedDestroyEventFilter | LuaScriptRaisedDestroyEventFilter}
 * - {@link LuaUpgradeCancelledEventFilter | LuaUpgradeCancelledEventFilter}
 * - {@link LuaScriptRaisedBuiltEventFilter | LuaScriptRaisedBuiltEventFilter}
 * - {@link LuaPlayerBuiltEntityEventFilter | LuaPlayerBuiltEntityEventFilter}
 * - {@link LuaPlayerRepairedEntityEventFilter | LuaPlayerRepairedEntityEventFilter}
 * @remarks
 * Filters are always used as an array of filters of a specific type. Every filter can only be used with its corresponding event, and different types of event filters can not be mixed.
 *
 */
type EventFilter = LuaEntityClonedEventFilter | LuaEntityDamagedEventFilter | LuaPlayerMinedEntityEventFilter | LuaPreRobotMinedEntityEventFilter | LuaRobotBuiltEntityEventFilter | LuaPostEntityDiedEventFilter | LuaEntityDiedEventFilter | LuaScriptRaisedReviveEventFilter | LuaPrePlayerMinedEntityEventFilter | LuaEntityMarkedForDeconstructionEventFilter | LuaPreGhostDeconstructedEventFilter | LuaEntityDeconstructionCancelledEventFilter | LuaEntityMarkedForUpgradeEventFilter | LuaSectorScannedEventFilter | LuaRobotMinedEntityEventFilter | LuaScriptRaisedDestroyEventFilter | LuaUpgradeCancelledEventFilter | LuaScriptRaisedBuiltEventFilter | LuaPlayerBuiltEntityEventFilter | LuaPlayerRepairedEntityEventFilter

/**
 * @param amount - Amount of the fluid.
 * @param name - Fluid prototype name of the fluid.
 * @param temperature - The temperature. When reading from [LuaFluidBox](LuaFluidBox), this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype.
 */
interface Fluid {
    /**
     * Amount of the fluid.
     */
    'amount': number
    /**
     * Fluid prototype name of the fluid.
     */
    'name': string
    /**
     * The temperature. When reading from {@link LuaFluidBox | LuaFluidBox}, this field will always be present. It is not necessary to specify it when writing, however. When not specified, the fluid will be set to the fluid's default temperature as specified in the fluid's prototype.
     */
    'temperature'?: number
}

/**
 * A definition of a fluidbox connection point.
 * @param max_underground_distance - The maximum tile distance this underground connection can connect at if this is an underground pipe.
 * @param positions - The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array.
 * @param type - The connection type: "input", "output", or "input-output".
 */
interface FluidBoxConnection {
    /**
     * The maximum tile distance this underground connection can connect at if this is an underground pipe.
     */
    'max_underground_distance'?: number
    /**
     * The 4 cardinal direction connection points for this pipe. This vector is a table with `x` and `y` keys instead of an array.
     */
    'positions': Vector[]
    /**
     * The connection type: "input", "output", or "input-output".
     */
    'type': string
}

/**
 * @param maximum_temperature - The maximum temperature allowed into the fluidbox.
 * @param minimum_temperature - The minimum temperature allowed into the fluidbox.
 * @param name - Fluid prototype name of the filtered fluid.
 */
interface FluidBoxFilter {
    /**
     * The maximum temperature allowed into the fluidbox.
     */
    'maximum_temperature': number
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    'minimum_temperature': number
    /**
     * Fluid prototype name of the filtered fluid.
     */
    'name': string
}

/**
 * @param force - Force the filter to be set, regardless of current fluid content.
 * @param maximum_temperature - The maximum temperature allowed into the fluidbox.
 * @param minimum_temperature - The minimum temperature allowed into the fluidbox.
 * @param name - Fluid prototype name of the filtered fluid.
 */
interface FluidBoxFilterSpec {
    /**
     * Force the filter to be set, regardless of current fluid content.
     */
    'force'?: boolean
    /**
     * The maximum temperature allowed into the fluidbox.
     */
    'maximum_temperature'?: number
    /**
     * The minimum temperature allowed into the fluidbox.
     */
    'minimum_temperature'?: number
    /**
     * Fluid prototype name of the filtered fluid.
     */
    'name': string
}

/**
 * @remarks
 * For type string - The fluid name.
 * For type LuaFluidPrototype - The fluid prototype.
 * For type Fluid - The fluid.
 *
 */
type FluidIdentification = string | LuaFluidPrototype | Fluid

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type FluidPrototypeFilter = FluidPrototypeFilterDefaultTemperature | FluidPrototypeFilterEmissionsMultiplier | FluidPrototypeFilterFuelValue | FluidPrototypeFilterGasTemperature | FluidPrototypeFilterHeatCapacity | FluidPrototypeFilterMaxTemperature | FluidPrototypeFilterName | FluidPrototypeFilterSubgroup | DefaultFluidPrototypeFilter

/**
 * It is specified by {@link string | string}.
 */
declare enum ForceCondition {
    /**
     * All forces pass.
     */
    'all',
    /**
     * Forces which won't attack pass.
     */
    'ally',
    /**
     * Forces which will attack pass.
     */
    'enemy',
    /**
     * Forces which are friends pass.
     */
    'friend',
    /**
     * Forces which are not friends pass.
     */
    'not-friend',
    /**
     * The non-same forces pass.
     */
    'not-same',
    /**
     * The same force pass.
     */
    'same',
}

/**
 * @remarks
 * For type string - The force name.
 * For type LuaForce - A reference to {@link LuaForce | LuaForce} may be passed directly.
 *
 */
type ForceIdentification = string | LuaForce

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
     * Show overlay icons on entities. Also known as "alt-mode".
     */
    show_entity_info: boolean

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
     * When `true` (the default), mousing over an entity will select it. Otherwise, moving the mouse won't update entity selection.
     */
    update_entity_selection: boolean

}

/**
 * @param name - If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`.
 * @param names - If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated.
 * @param type - If provided, only anchors the GUI element when the opened things type matches the type.
 */
interface GuiAnchor {
    'gui': defines.relative_gui_type
    /**
     * If provided, only anchors the GUI element when the opened thing matches the name. `name` takes precedence over `names`.
     */
    'name'?: string
    /**
     * If provided, only anchors the GUI element when the opened thing matches one of the names. When reading an anchor, `names` is always populated.
     */
    'names'?: string[]
    'position': defines.relative_gui_position
    /**
     * If provided, only anchors the GUI element when the opened things type matches the type.
     */
    'type'?: string
}

/**
 * Used for specifying where a GUI arrow should point to.
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 * @param type - This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
 */
type GuiArrowSpecification = GuiArrowSpecificationCraftingQueue | GuiArrowSpecificationEntity | GuiArrowSpecificationItemStack | GuiArrowSpecificationPosition | DefaultGuiArrowSpecification

/**
 * Screen coordinates of a GUI element in a {@link LuaGui | LuaGui}. This uses the same format as {@link Position | Position} except it rounds any `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
 */
interface GuiLocation {
    'x': number
    'y': number
}

interface HeatConnection {
    'direction': defines.direction
    'position': Vector
}

/**
 * The settings used by a heat-interface type entity.
 * @param mode - `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
 * @param temperature - The target temperature. Defaults to the minimum temperature of the heat buffer.
 */
interface HeatSetting {
    /**
     * `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
     */
    'mode'?: string
    /**
     * The target temperature. Defaults to the minimum temperature of the heat buffer.
     */
    'temperature'?: number
}

/**
 * A single filter used by an infinity-filters instance.
 * @param count - The count of the filter.
 * @param index - The index of this filter in the filters list.
 * @param mode - `"at-least"`, `"at-most"`, or `"exactly"`. Defaults to `"at-least"`.
 * @param name - Name of the item.
 */
interface InfinityInventoryFilter {
    /**
     * The count of the filter.
     */
    'count'?: number
    /**
     * The index of this filter in the filters list.
     */
    'index': number
    /**
     * `"at-least"`, `"at-most"`, or `"exactly"`. Defaults to `"at-least"`.
     */
    'mode'?: string
    /**
     * Name of the item.
     */
    'name': string
}

/**
 * A single filter used by an infinity-pipe type entity.
 * @param mode - `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
 * @param name - Name of the fluid.
 * @param percentage - The fill percentage the pipe (e.g. 0.5 for 50%). Can't be negative.
 * @param temperature - The temperature of the fluid. Defaults to the default/minimum temperature of the fluid.
 */
interface InfinityPipeFilter {
    /**
     * `"at-least"`, `"at-most"`, `"exactly"`, `"add"`, or `"remove"`. Defaults to `"at-least"`.
     */
    'mode'?: string
    /**
     * Name of the fluid.
     */
    'name': string
    /**
     * The fill percentage the pipe (e.g. 0.5 for 50%). Can't be negative.
     */
    'percentage'?: number
    /**
     * The temperature of the fluid. Defaults to the default/minimum temperature of the fluid.
     */
    'temperature'?: number
}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 * @param amount - Amount of the item or fluid.
 * @param catalyst_amount - How much of this ingredient is a catalyst.
 * @param name - Prototype name of the required item or fluid.
 * @param type - `"item"` or `"fluid"`.
 */
type Ingredient = IngredientFluid | DefaultIngredient

interface InserterCircuitConditions {
    'circuit'?: CircuitCondition
    'logistics'?: CircuitCondition
}

/**
 * @param index - Position of the corresponding filter slot.
 * @param name - Item prototype name of the item to filter.
 */
interface InventoryFilter {
    /**
     * Position of the corresponding filter slot.
     */
    'index': number
    /**
     * Item prototype name of the item to filter.
     */
    'name': string
}

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type ItemPrototypeFilter = ItemPrototypeFilterBurntResult | ItemPrototypeFilterDefaultRequestAmount | ItemPrototypeFilterFlag | ItemPrototypeFilterFuelAccelerationMultiplier | ItemPrototypeFilterFuelCategory | ItemPrototypeFilterFuelEmissionsMultiplier | ItemPrototypeFilterFuelTopSpeedMultiplier | ItemPrototypeFilterFuelValue | ItemPrototypeFilterName | ItemPrototypeFilterPlaceAsTile | ItemPrototypeFilterPlaceResult | ItemPrototypeFilterPlacedAsEquipmentResult | ItemPrototypeFilterStackSize | ItemPrototypeFilterSubgroup | ItemPrototypeFilterType | ItemPrototypeFilterWireCount | DefaultItemPrototypeFilter

/**
 * This is a set of flags given as dictionary{@link [string | string} &rarr; {@link boolean | boolean}]. When a flag is set, it is present in the dictionary with the value `true`. Unset flags aren't present in the dictionary at all. So, the boolean value is meaningless and exists just for easy table lookup if a flag is set.
 */
type ItemPrototypeFlags = {
    [key in ItemPrototypeFlagsKey]: true
}

type ItemPrototypeFlagsKey = 'always-show' | 'can-extend-inventory' | 'draw-logistic-overlay' | 'hidden' | 'hide-from-bonus-gui' | 'hide-from-fuel-tooltip' | 'mod-openable' | 'not-stackable' | 'only-in-cursor' | 'primary-place-result' | 'spawnable'

/**
 * @remarks
 * For type LuaItemStack - The item.
 * For type LuaItemPrototype - The item prototype.
 * For type string - The prototype name.
 *
 */
type ItemPrototypeIdentification = LuaItemStack | LuaItemPrototype | string

/**
 * @param ammo - Amount of ammo in the ammo items in the stack.
 * @param count - Number of items the stack holds. If not specified, defaults to `1`.
 * @param durability - Durability of the tool items in the stack.
 * @param health - Health of the items in the stack. Defaults to `1.0`.
 * @param name - Prototype name of the item the stack holds.
 * @param tags - Tags of the items with tags in the stack.
 */
interface ItemStackDefinition {
    /**
     * Amount of ammo in the ammo items in the stack.
     */
    'ammo'?: number
    /**
     * Number of items the stack holds. If not specified, defaults to `1`.
     */
    'count'?: number
    /**
     * Durability of the tool items in the stack.
     */
    'durability'?: number
    /**
     * Health of the items in the stack. Defaults to `1.0`.
     */
    'health'?: number
    /**
     * Prototype name of the item the stack holds.
     */
    'name': string
    /**
     * Tags of the items with tags in the stack.
     */
    'tags'?: string[]
}

/**
 * @remarks
 *
 */
type ItemStackIdentification = SimpleItemStack | LuaItemStack

interface ItemStackLocation {
    'inventory': defines.inventory
    'slot': number
}

/**
 * Localised strings are a way to support translation of in-game text. It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
 * 
 * The key identifies the string template. For example, `"gui-alert-tooltip.attack"` (for the template `"__1__
 *     objects are being damaged"`; see the file `data/core/locale/en.cfg`).
 * 
 * The template can contain placeholders such as `__1__` or `__2__`. These will be replaced by the respective parameter in the LocalisedString. The parameters themselves can be other localised strings, which will be processed recursively in the same fashion. Localised strings can not be recursed deeper than 20 levels and can not have more than 20 parameters.
 * 
 * As a special case, when the key is just the empty string, all the parameters will be concatenated (after processing, if any are localised strings). If there is only one parameter, it will be used as is.
 * 
 * Furthermore, when an API function expects a localised string, it will also accept a regular string (i.e. not a table) which will not be translated, as well as a number or boolean, which will be converted to their textual representation.
 * @example
 * In the English translation, this will print `"No ammo"`; in the Czech translation, it will print `"Bez munice"`: 
 * ```
 * game.player.print({"description.no-ammo"})
 * ``` The `description.no-ammo` template contains no placeholders, so no further parameters are necessary.
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
 */
type LocalisedString = string[] | string | number

/**
 * @param count - The count for this filter.
 * @param index - The index this filter applies to.
 * @param name - The item name for this filter.
 */
interface LogisticFilter {
    /**
     * The count for this filter.
     */
    'count': number
    /**
     * The index this filter applies to.
     */
    'index': number
    /**
     * The item name for this filter.
     */
    'name': string
}

/**
 * @param name - The item. `nil` clears the filter.
 */
interface LogisticParameters {
    'max'?: number
    'min'?: number
    /**
     * The item. `nil` clears the filter.
     */
    'name'?: string
}

/**
 * @param count_max - Maximum amount of loot to drop.
 * @param count_min - Minimum amount of loot to drop.
 * @param item - Item prototype name of the result.
 * @param probability - Probability that any loot at all will drop, as a number in range [0, 1].
 */
interface Loot {
    /**
     * Maximum amount of loot to drop.
     */
    'count_max': number
    /**
     * Minimum amount of loot to drop.
     */
    'count_min': number
    /**
     * Item prototype name of the result.
     */
    'item': string
    /**
     * Probability that any loot at all will drop, as a number in range [0, 1].
     */
    'probability': number
}

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaEntityClonedEventFilter = LuaEntityClonedEventFilterGhostName | LuaEntityClonedEventFilterGhostType | LuaEntityClonedEventFilterName | LuaEntityClonedEventFilterType | DefaultLuaEntityClonedEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaEntityDamagedEventFilter = LuaEntityDamagedEventFilterDamageType | LuaEntityDamagedEventFilterFinalDamageAmount | LuaEntityDamagedEventFilterFinalHealth | LuaEntityDamagedEventFilterGhostName | LuaEntityDamagedEventFilterGhostType | LuaEntityDamagedEventFilterName | LuaEntityDamagedEventFilterOriginalDamageAmount | LuaEntityDamagedEventFilterType | DefaultLuaEntityDamagedEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaEntityDeconstructionCancelledEventFilter = LuaEntityDeconstructionCancelledEventFilterGhostName | LuaEntityDeconstructionCancelledEventFilterGhostType | LuaEntityDeconstructionCancelledEventFilterName | LuaEntityDeconstructionCancelledEventFilterType | DefaultLuaEntityDeconstructionCancelledEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaEntityDiedEventFilter = LuaEntityDiedEventFilterGhostName | LuaEntityDiedEventFilterGhostType | LuaEntityDiedEventFilterName | LuaEntityDiedEventFilterType | DefaultLuaEntityDiedEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaEntityMarkedForDeconstructionEventFilter = LuaEntityMarkedForDeconstructionEventFilterGhostName | LuaEntityMarkedForDeconstructionEventFilterGhostType | LuaEntityMarkedForDeconstructionEventFilterName | LuaEntityMarkedForDeconstructionEventFilterType | DefaultLuaEntityMarkedForDeconstructionEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaEntityMarkedForUpgradeEventFilter = LuaEntityMarkedForUpgradeEventFilterGhostName | LuaEntityMarkedForUpgradeEventFilterGhostType | LuaEntityMarkedForUpgradeEventFilterName | LuaEntityMarkedForUpgradeEventFilterType | DefaultLuaEntityMarkedForUpgradeEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaPlayerBuiltEntityEventFilter = LuaPlayerBuiltEntityEventFilterForce | LuaPlayerBuiltEntityEventFilterGhostName | LuaPlayerBuiltEntityEventFilterGhostType | LuaPlayerBuiltEntityEventFilterName | LuaPlayerBuiltEntityEventFilterType | DefaultLuaPlayerBuiltEntityEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaPlayerMinedEntityEventFilter = LuaPlayerMinedEntityEventFilterGhostName | LuaPlayerMinedEntityEventFilterGhostType | LuaPlayerMinedEntityEventFilterName | LuaPlayerMinedEntityEventFilterType | DefaultLuaPlayerMinedEntityEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaPlayerRepairedEntityEventFilter = LuaPlayerRepairedEntityEventFilterGhostName | LuaPlayerRepairedEntityEventFilterGhostType | LuaPlayerRepairedEntityEventFilterName | LuaPlayerRepairedEntityEventFilterType | DefaultLuaPlayerRepairedEntityEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"type"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaPostEntityDiedEventFilter = LuaPostEntityDiedEventFilterType

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaPreGhostDeconstructedEventFilter = LuaPreGhostDeconstructedEventFilterGhostName | LuaPreGhostDeconstructedEventFilterGhostType | LuaPreGhostDeconstructedEventFilterName | LuaPreGhostDeconstructedEventFilterType | DefaultLuaPreGhostDeconstructedEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaPrePlayerMinedEntityEventFilter = LuaPrePlayerMinedEntityEventFilterGhostName | LuaPrePlayerMinedEntityEventFilterGhostType | LuaPrePlayerMinedEntityEventFilterName | LuaPrePlayerMinedEntityEventFilterType | DefaultLuaPrePlayerMinedEntityEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaPreRobotMinedEntityEventFilter = LuaPreRobotMinedEntityEventFilterGhostName | LuaPreRobotMinedEntityEventFilterGhostType | LuaPreRobotMinedEntityEventFilterName | LuaPreRobotMinedEntityEventFilterType | DefaultLuaPreRobotMinedEntityEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaRobotBuiltEntityEventFilter = LuaRobotBuiltEntityEventFilterForce | LuaRobotBuiltEntityEventFilterGhostName | LuaRobotBuiltEntityEventFilterGhostType | LuaRobotBuiltEntityEventFilterName | LuaRobotBuiltEntityEventFilterType | DefaultLuaRobotBuiltEntityEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaRobotMinedEntityEventFilter = LuaRobotMinedEntityEventFilterGhostName | LuaRobotMinedEntityEventFilterGhostType | LuaRobotMinedEntityEventFilterName | LuaRobotMinedEntityEventFilterType | DefaultLuaRobotMinedEntityEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaScriptRaisedBuiltEventFilter = LuaScriptRaisedBuiltEventFilterGhostName | LuaScriptRaisedBuiltEventFilterGhostType | LuaScriptRaisedBuiltEventFilterName | LuaScriptRaisedBuiltEventFilterType | DefaultLuaScriptRaisedBuiltEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaScriptRaisedDestroyEventFilter = LuaScriptRaisedDestroyEventFilterGhostName | LuaScriptRaisedDestroyEventFilterGhostType | LuaScriptRaisedDestroyEventFilterName | LuaScriptRaisedDestroyEventFilterType | DefaultLuaScriptRaisedDestroyEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaScriptRaisedReviveEventFilter = LuaScriptRaisedReviveEventFilterGhostName | LuaScriptRaisedReviveEventFilterGhostType | LuaScriptRaisedReviveEventFilterName | LuaScriptRaisedReviveEventFilterType | DefaultLuaScriptRaisedReviveEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaSectorScannedEventFilter = LuaSectorScannedEventFilterGhostName | LuaSectorScannedEventFilterGhostType | LuaSectorScannedEventFilterName | LuaSectorScannedEventFilterType | DefaultLuaSectorScannedEventFilter

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type LuaUpgradeCancelledEventFilter = LuaUpgradeCancelledEventFilterGhostName | LuaUpgradeCancelledEventFilterGhostType | LuaUpgradeCancelledEventFilterName | LuaUpgradeCancelledEventFilterType | DefaultLuaUpgradeCancelledEventFilter

/**
 * All regular {@link MapSettings | MapSettings} plus an additional table that contains the {@link DifficultySettings | DifficultySettings}.
 * @param max_failed_behavior_count - If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
 */
interface MapAndDifficultySettings {
    'difficulty_settings': DifficultySettings
    'enemy_evolution': EnemyEvolutionMapSettings
    'enemy_expansion': EnemyExpansionMapSettings
    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
     */
    'max_failed_behavior_count': number
    'path_finder': PathFinderMapSettings
    'pollution': PollutionMapSettings
    'steering': SteeringMapSettings
    'unit_group': UnitGroupMapSettings
}

/**
 * The data that can be extracted from a map exchange string, as a plain table.
 */
interface MapExchangeStringData {
    'map_gen_settings': MapGenSettings
    'map_settings': MapAndDifficultySettings
}

/**
 * The 'map type' dropdown in the map generation GUI is actually a selector for elevation generator. The base game sets `property_expression_names.elevation` to `"0_16-elevation"` to reproduce terrain from 0.16 or to `"0_17-island"` for the island preset. If generators are available for other properties, the 'map type' dropdown in the GUI will be renamed to 'elevation' and shown along with selectors for the other selectable properties.
 * @param autoplace_controls - Indexed by autoplace control prototype name.
 * @param autoplace_settings - Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`.
 * @param cliff_settings - Map generation settings for entities of the type "cliff".
 * @param default_enable_all_autoplace_controls - Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`.
 * @param height - Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center.
 * @param peaceful_mode - Whether peaceful mode is enabled for this map.
 * @param property_expression_names - Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names. Notable properties: 
- `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
- `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
- `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
- `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to [CliffPlacementSettings](CliffPlacementSettings).
- `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to [CliffPlacementSettings](CliffPlacementSettings)) location.
- `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
- `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
- `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names: 
- `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
- `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
- `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
- `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`.
 * @param seed - The random seed used to generated this map.
 * @param starting_area - Size of the starting area.
 * @param starting_points - Positions of the starting areas.
 * @param terrain_segmentation - The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
 * @param water - The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero, `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes. This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
 * @param width - Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center.
 * @example
 * Assuming a NamedNoiseExpression with the name "my-alternate-grass1-probability" is defined 
 * ```
 * local surface = game.player.surface
 * local mgs = surface.map_gen_settings
 * mgs.property_expression_names["tile:grass1:probability"] = "my-alternate-grass1-probability"
 * surface.map_gen_settings = mgs
 * ``` would override the probability of grass1 being placed at any given point on the current surface.
 *
 * @example
 * To make there be no deep water on (newly generated chunks) a surface: 
 * ```
 * local surface = game.player.surface
 * local mgs = surface.map_gen_settings
 * mgs.property_expression_names["tile:deepwater:probability"] = -1000
 * surface.map_gen_settings = mgs
 * ``` This does not require a NamedNoiseExpression to be defined, since literal numbers (and strings naming literal numbers, e.g. `"123"`) are understood to stand for constant value expressions.
 *
 */
interface MapGenSettings {
    /**
     * Indexed by autoplace control prototype name.
     */
    'autoplace_controls': {[key: string]: AutoplaceControl}
    /**
     * Each setting in this dictionary maps the string type to the settings for that type. Valid types are `"entity"`, `"tile"` and `"decorative"`.
     */
    'autoplace_settings': {[key: string]: AutoplaceSettings}
    /**
     * Map generation settings for entities of the type "cliff".
     */
    'cliff_settings': CliffPlacementSettings
    /**
     * Whether undefined `autoplace_controls` should fall back to the default controls or not. Defaults to `true`.
     */
    'default_enable_all_autoplace_controls': boolean
    /**
     * Height in tiles. If `0`, the map has 'infinite' height, with the actual limitation being one million tiles in each direction from the center.
     */
    'height': number
    /**
     * Whether peaceful mode is enabled for this map.
     */
    'peaceful_mode': boolean
    /**
     * Overrides for tile property value generators. Values either name a NamedNoiseExpression or can be literal numbers, stored as strings (e.g. `"5"`). All other controls can be overridden by a property expression names. Notable properties: 
     * - `moisture` - a value between 0 and 1 that determines whether a tile becomes sandy (low moisture) or grassy (high moisture).
     * - `aux` - a value between 0 and 1 that determines whether low-moisture tiles become sand or red desert.
     * - `temperature` - provides a value (vaguely representing degrees Celsius, varying between -20 and 50) that is used (together with moisture and aux) as part of tree and decorative placement.
     * - `elevation` - tiles values less than zero become water. Cliffs are placed along certain contours according to {@link CliffPlacementSettings | CliffPlacementSettings}.
     * - `cliffiness` - determines whether (when >0.5) or not (when <0.5) a cliff will be placed at an otherwise suitable (according to {@link CliffPlacementSettings | CliffPlacementSettings}) location.
     * - `enemy-base-intensity` - a number that is referenced by both `enemy-base-frequency` and `enemy-base-radius`. i.e. if this is overridden, enemy base frequency and size will both be affected and do something reasonable. By default, this expression returns a value proportional to distance from any starting point, clamped at about 7.
     * - `enemy-base-frequency` - a number representing average number of enemy bases per tile for a region, by default in terms of `enemy-base-intensity`.
     * - `enemy-base-radius` - a number representing the radius of an enemy base, if one were to be placed on the given tile, by default proportional to a constant plus `enemy-base-intensity`. Climate controls ('Moisture' and 'Terrain type' at the bottom of the Terrain tab in the map generator GUI) don't have their own dedicated structures in MapGenSettings. Instead, their values are stored as property expression overrides with long names: 
     * - `control-setting:moisture:frequency:multiplier` - frequency (inverse of scale) multiplier for moisture noise. Default is 1.
     * - `control-setting:moisture:bias` - global bias for moisture (which normally varies between 0 and 1). Default is 0.
     * - `control-setting:aux:frequency:multiplier` - frequency (inverse of scale) multiplier for aux (called 'terrain type' in the GUI) noise. Default is 1.
     * - `control-setting:aux:bias` - global bias for aux/terrain type (which normally varies between 0 and 1). Default is 0. All other MapGenSettings feed into named noise expressions, and therefore placement can be overridden by including the name of a property in this dictionary. The probability and richness functions for placing specific tiles, entities, and decoratives can be overridden by including an entry named `{tile|entity|decorative}:(prototype name):{probability|richness}`.
     */
    'property_expression_names': {[key: string]: string}
    /**
     * The random seed used to generated this map.
     */
    'seed': number
    /**
     * Size of the starting area.
     */
    'starting_area': MapGenSize
    /**
     * Positions of the starting areas.
     */
    'starting_points': Position[]
    /**
     * The inverse of 'water scale' in the map generator GUI. Lower `terrain_segmentation` increases the scale of elevation features (lakes, continents, etc). This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
     */
    'terrain_segmentation': MapGenSize
    /**
     * The equivalent to 'water coverage' in the map generator GUI. Specifically, when this value is non-zero, `water_level = 10 * log2` (the value of this field), and the elevation generator subtracts water level from elevation before adding starting lakes. If water is set to 'none', elevation is clamped to a small positive value before adding starting lakes. This behavior can be overridden with alternate elevation generators (see `property_expression_names`, below).
     */
    'water': MapGenSize
    /**
     * Width in tiles. If `0`, the map has 'infinite' width, with the actual limitation being one million tiles in each direction from the center.
     */
    'width': number
}

/**
 * A floating point number specifying an amount.
 * 
 * For backwards compatibility, MapGenSizes can also be specified as one of the following strings, which will be converted to a number (when queried, a number will always be returned):
 * 
 * - `"none"` - equivalent to `0`
 * - `"very-low"`, `"very-small"`, `"very-poor"` - equivalent to `1/2`
 * - `"low"`, `"small"`, `"poor"` - equivalent to `1/sqrt(2)`
 * - `"normal"`, `"medium"`, `"regular"` - equivalent to `1`
 * - `"high"`, `"big"`, `"good"` - equivalent to `sqrt(2)`
 * - `"very-high"`, `"very-big"`, `"very-good"` - equivalent to `2`
 * @remarks
 * The map generation algorithm officially supports the range of values the in-game map generation screen shows (specifically `0` and values from `1/6` to `6`). Values outside this range are not guaranteed to work as expected.
 *
 */
type MapGenSize = number | 'none' | 'very-low' | 'very-small' | 'very-poor' | 'low' | 'small' | 'poor' | 'normal' | 'medium' | 'regular' | 'high' | 'big' | 'good' | 'very-high' | 'very-big' | 'very-good'

/**
 * Coordinates of an entity on a map. This uses the same format as {@link Position | Position}, meaning it can be specified either with or without explicit keys.
 */
interface MapPosition {
    'x': number
    'y': number
}

/**
 * Various game-related settings. Updating any of the attributes will immediately take effect in the game engine.
 * @param max_failed_behavior_count - If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
 * @example
 * Increase the number of short paths the pathfinder can cache. 
 * ```
 * game.map_settings.path_finder.short_cache_size = 15
 * ```
 *
 */
interface MapSettings {
    'enemy_evolution': EnemyEvolutionMapSettings
    'enemy_expansion': EnemyExpansionMapSettings
    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters getting stuck within their own base.
     */
    'max_failed_behavior_count': number
    'path_finder': PathFinderMapSettings
    'pollution': PollutionMapSettings
    'steering': SteeringMapSettings
    'unit_group': UnitGroupMapSettings
}

/**
 * What is shown in the map view. If a field is not given, that setting will not be changed.
 */
interface MapViewSettings {
    'show-electric-network'?: boolean
    'show-logistic-network'?: boolean
    'show-networkless-logistic-members'?: boolean
    'show-non-standard-map-info'?: boolean
    'show-player-names'?: boolean
    'show-pollution'?: boolean
    'show-train-station-names'?: boolean
    'show-turret-range'?: boolean
}

/**
 * @param new_version - New version of the mod. May be `nil` if the mod is no longer present (i.e. it was just removed).
 * @param old_version - Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added).
 */
interface ModChangeData {
    /**
     * New version of the mod. May be `nil` if the mod is no longer present (i.e. it was just removed).
     */
    'new_version': string
    /**
     * Old version of the mod. May be `nil` if the mod wasn't previously present (i.e. it was just added).
     */
    'old_version': string
}

/**
 * @remarks
 * Runtime settings can be changed through console commands and by the mod that owns the settings by writing a new table to the ModSetting.
 *
 * @param value - The value of the mod setting. The type depends on the setting.
 */
interface ModSetting {
    /**
     * The value of the mod setting. The type depends on the setting.
     */
    'value': number | boolean | string
}

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type ModSettingPrototypeFilter = ModSettingPrototypeFilterMod | ModSettingPrototypeFilterSettingType | ModSettingPrototypeFilterType

/**
 * @param bonus - The percentual increase of the attribute. A value of `0.6` means a 60% increase.
 */
interface ModuleEffectValue {
    /**
     * The percentual increase of the attribute. A value of `0.6` means a 60% increase.
     */
    'bonus': number
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
    'consumption'?: ModuleEffectValue
    'pollution'?: ModuleEffectValue
    'productivity'?: ModuleEffectValue
    'speed'?: ModuleEffectValue
}

/**
 * This is a set of flags given as a dictionary{@link [string | string} &rarr; {@link boolean | boolean}]. When a flag is set, it is present in the dictionary with the value `true`. Unset flags aren't present in the dictionary at all.
 * 
 * To write to this, use an array{@link [string | string}] of the mouse buttons that should be possible to use with on button.
 * 
 * When setting flags, the flag `"left-and-right"` can also be set which will set `"left"` and `"right"` true.
 * 
 * Possible flags when reading are:
 * - `"left"`
 * - `"right"`
 * - `"middle"`
 * - `"button-4"`
 * - `"button-5"`
 * - `"button-6"`
 * - `"button-7"`
 * - `"button-8"`
 * - `"button-9"`
 */
type MouseButtonFlags = MouseButtonFlagKey[] | {[key in MouseButtonFlagKey]: true}

type MouseButtonFlagKey = 'left' | 'right' | 'left-and-right' | 'middle' | 'button-4' | 'button-5' | 'button-6' | 'button-7' | 'button-8' | 'button-9'

/**
 * A fragment of a functional program used to generate coherent noise, probably for purposes related to terrain generation. These can only be meaningfully written/modified during the data load phase. More detailed information is found on the {@link wiki | https://wiki.factorio.com/Types/NoiseExpression}.
 * @param type - Names the type of the expression and determines what other fields are required.
 */
interface NoiseExpression {
    /**
     * Names the type of the expression and determines what other fields are required.
     */
    'type': string
}

/**
 * @param nth_tick - The nth tick this handler was registered to.
 * @param tick - The tick during which the event happened.
 */
interface NthTickEventData {
    /**
     * The nth tick this handler was registered to.
     */
    'nth_tick': number
    /**
     * The tick during which the event happened.
     */
    'tick': number
}

/**
 * A single offer on a market entity.
 * @param offer - The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier.
 * @param price - List of prices.
 */
interface Offer {
    /**
     * The action that will take place when a player accepts the offer. Usually a `"give-item"` modifier.
     */
    'offer': TechnologyModifier
    /**
     * List of prices.
     */
    'price': Ingredient[]
}

interface OldTileAndPosition {
    'old_tile': LuaTilePrototype
    'position': TilePosition
}

/**
 * @param cache_accept_path_end_distance_ratio - When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms. This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`.
 * @param cache_accept_path_start_distance_ratio - When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`.
 * @param cache_max_connect_to_cache_steps_multiplier - When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`.
 * @param cache_path_end_distance_rating_multiplier - When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`.
 * @param cache_path_start_distance_rating_multiplier - When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`.
 * @param direct_distance_to_consider_short_request - The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`.
 * @param enemy_with_different_destination_collision_penalty - A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`.
 * @param extended_collision_penalty - The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`.
 * @param fwd2bwd_ratio - The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`.
 * @param general_entity_collision_penalty - The general collision penalty with other units. Defaults to `10`.
 * @param general_entity_subsequent_collision_penalty - The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`.
 * @param goal_pressure_ratio - When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`.
 * @param ignore_moving_enemy_collision_distance - The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`.
 * @param long_cache_min_cacheable_distance - The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`.
 * @param long_cache_size - Number of elements in the long cache. Defaults to `25`.
 * @param max_clients_to_accept_any_new_request - The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`.
 * @param max_clients_to_accept_short_new_request - When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`.
 * @param max_steps_worked_per_tick - The maximum number of nodes that are expanded per tick. Defaults to `1,000`.
 * @param max_work_done_per_tick - The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8,000`.
 * @param min_steps_to_check_path_find_termination - The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`.
 * @param negative_cache_accept_path_end_distance_ratio - Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
 * @param negative_cache_accept_path_start_distance_ratio - Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
 * @param negative_path_cache_delay_interval - The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`.
 * @param overload_levels - The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`.
 * @param overload_multipliers - The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`.
 * @param short_cache_min_algo_steps_to_cache - The minimal number of nodes required to be searched in the short path cache. Defaults to `50`.
 * @param short_cache_min_cacheable_distance - The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`.
 * @param short_cache_size - Number of elements in the short cache. Defaults to `5`.
 * @param short_request_max_steps - The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`.
 * @param short_request_ratio - The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%.
 * @param stale_enemy_with_same_destination_collision_penalty - A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`.
 * @param start_to_goal_cost_multiplier_to_terminate_path_find - If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`.
 * @param use_path_cache - Whether to cache paths at all. Defaults to `true`.
 */
interface PathFinderMapSettings {
    /**
     * When looking for a path from cache, make sure it doesn't end too far from the requested end in relative terms. This is typically more lenient than the start ratio since the end target could be moving. Defaults to `0.15`.
     */
    'cache_accept_path_end_distance_ratio': number
    /**
     * When looking for a path from cache, make sure it doesn't start too far from the requested start in relative terms. Defaults to `0.2`.
     */
    'cache_accept_path_start_distance_ratio': number
    /**
     * When looking for a connection to a cached path, search at most for this number of steps times the original estimate. Defaults to `100`.
     */
    'cache_max_connect_to_cache_steps_multiplier': number
    /**
     * When assigning a rating to the best path, this multiplier times end distances is considered. This value is typically higher than the start multiplier as this results in better end path quality. Defaults to `20`.
     */
    'cache_path_end_distance_rating_multiplier': number
    /**
     * When assigning a rating to the best path, this multiplier times start distances is considered. Defaults to `10`.
     */
    'cache_path_start_distance_rating_multiplier': number
    /**
     * The maximum direct distance in tiles before a request is no longer considered short. Defaults to `100`.
     */
    'direct_distance_to_consider_short_request': number
    /**
     * A penalty that is applied for another unit that is too close and either not moving or has a different goal. Defaults to `30`.
     */
    'enemy_with_different_destination_collision_penalty': number
    /**
     * The collision penalty for collisions in the extended bounding box but outside the entity's actual bounding box. Defaults to `3`.
     */
    'extended_collision_penalty': number
    /**
     * The pathfinder performs a step of the backward search every `fwd2bwd_ratio`'th step. The minimum allowed value is `2`, which means symmetric search. The default value is `5`.
     */
    'fwd2bwd_ratio': number
    /**
     * The general collision penalty with other units. Defaults to `10`.
     */
    'general_entity_collision_penalty': number
    /**
     * The collision penalty for positions that require the destruction of an entity to get to. Defaults to `3`.
     */
    'general_entity_subsequent_collision_penalty': number
    /**
     * When looking at which node to check next, their heuristic value is multiplied by this ratio. The higher it is, the more the search is directed straight at the goal. Defaults to `2`.
     */
    'goal_pressure_ratio': number
    /**
     * The distance in tiles after which other moving units are not considered for pathfinding. Defaults to `5`.
     */
    'ignore_moving_enemy_collision_distance': number
    /**
     * The minimal distance to the goal in tiles required to be searched in the long path cache. Defaults to `30`.
     */
    'long_cache_min_cacheable_distance': number
    /**
     * Number of elements in the long cache. Defaults to `25`.
     */
    'long_cache_size': number
    /**
     * The amount of path finder requests accepted per tick regardless of the requested path's length. Defaults to `10`.
     */
    'max_clients_to_accept_any_new_request': number
    /**
     * When the `max_clients_to_accept_any_new_request` amount is exhausted, only path finder requests with a short estimate will be accepted until this amount (per tick) is reached. Defaults to `100`.
     */
    'max_clients_to_accept_short_new_request': number
    /**
     * The maximum number of nodes that are expanded per tick. Defaults to `1,000`.
     */
    'max_steps_worked_per_tick': number
    /**
     * The maximum amount of work each pathfinding job is allowed to do per tick. Defaults to `8,000`.
     */
    'max_work_done_per_tick': number
    /**
     * The minimum amount of steps that are guaranteed to be performed for every request. Defaults to `2000`.
     */
    'min_steps_to_check_path_find_termination': number
    /**
     * Same principle as `cache_accept_path_end_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    'negative_cache_accept_path_end_distance_ratio': number
    /**
     * Same principle as `cache_accept_path_start_distance_ratio`, but used for negative cache queries. Defaults to `0.3`.
     */
    'negative_cache_accept_path_start_distance_ratio': number
    /**
     * The delay in ticks between decrementing the score of all paths in the negative cache by one. Defaults to `20`.
     */
    'negative_path_cache_delay_interval': number
    /**
     * The thresholds of waiting clients after each of which the per-tick work limit will be increased by the corresponding value in `overload_multipliers`. This is to avoid clients having to wait too long. Must have the same number of elements as `overload_multipliers`. Defaults to `{0, 100, 500}`.
     */
    'overload_levels': number[]
    /**
     * The multipliers to the amount of per-tick work applied after the corresponding thresholds in `overload_levels` have been reached. Must have the same number of elements as `overload_multipliers`. Defaults to `{2, 3, 4}`.
     */
    'overload_multipliers': number[]
    /**
     * The minimal number of nodes required to be searched in the short path cache. Defaults to `50`.
     */
    'short_cache_min_algo_steps_to_cache': number
    /**
     * The minimal distance to the goal in tiles required to be searched in the short path cache. Defaults to `10`.
     */
    'short_cache_min_cacheable_distance': number
    /**
     * Number of elements in the short cache. Defaults to `5`.
     */
    'short_cache_size': number
    /**
     * The maximum amount of nodes a short request will traverse before being rescheduled as a long request. Defaults to `1000`.
     */
    'short_request_max_steps': number
    /**
     * The amount of steps that are allocated to short requests each tick, as a percentage of all available steps. Defaults to `0.5`, or 50%.
     */
    'short_request_ratio': number
    /**
     * A penalty that is applied for another unit that is on the way to the goal. This is mainly relevant for situations where a group of units has arrived at the target they are supposed to attack, making units further back circle around to reach the target. Defaults to `30`.
     */
    'stale_enemy_with_same_destination_collision_penalty': number
    /**
     * If the actual amount of steps is higher than the initial estimate by this factor, pathfinding is terminated. Defaults to `2000.0`.
     */
    'start_to_goal_cost_multiplier_to_terminate_path_find': number
    /**
     * Whether to cache paths at all. Defaults to `true`.
     */
    'use_path_cache': boolean
}

/**
 * @param allow_destroy_friendly_entities - Allows pathing through friendly entities. Defaults to `false`.
 * @param allow_paths_through_own_entities - Allows the pathfinder to path through entities of the same force. Defaults to `false`.
 * @param cache - Enables path caching. This can be more efficient, but might fail to respond to changes in the environment. Defaults to `true`.
 * @param low_priority - Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding up others. Defaults to `false`.
 * @param no_break - Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed. Defaults to `false`.
 * @param prefer_straight_paths - Makes the pathfinder try to path in straight lines. Defaults to `false`.
 */
interface PathfinderFlags {
    /**
     * Allows pathing through friendly entities. Defaults to `false`.
     */
    'allow_destroy_friendly_entities'?: boolean
    /**
     * Allows the pathfinder to path through entities of the same force. Defaults to `false`.
     */
    'allow_paths_through_own_entities'?: boolean
    /**
     * Enables path caching. This can be more efficient, but might fail to respond to changes in the environment. Defaults to `true`.
     */
    'cache'?: boolean
    /**
     * Sets lower priority on the path request, meaning it might take longer to find a path at the expense of speeding up others. Defaults to `false`.
     */
    'low_priority'?: boolean
    /**
     * Makes the pathfinder not break in the middle of processing this pathfind, no matter how much work is needed. Defaults to `false`.
     */
    'no_break'?: boolean
    /**
     * Makes the pathfinder try to path in straight lines. Defaults to `false`.
     */
    'prefer_straight_paths'?: boolean
}

/**
 * @param needs_destroy_to_reach - `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed.
 * @param position - The position of the waypoint on its surface.
 */
interface PathfinderWaypoint {
    /**
     * `true` if the path from the previous waypoint to this one goes through an entity that must be destroyed.
     */
    'needs_destroy_to_reach': boolean
    /**
     * The position of the waypoint on its surface.
     */
    'position': Position
}

/**
 * @param result - The tile prototype.
 */
interface PlaceAsTileResult {
    'condition': CollisionMask
    'condition_size': number
    /**
     * The tile prototype.
     */
    'result': LuaTilePrototype
}

/**
 * @remarks
 * For type number - The player index.
 * For type string - The player name.
 * For type LuaPlayer - A reference to {@link LuaPlayer | LuaPlayer} may be passed directly.
 *
 */
type PlayerIdentification = number | string | LuaPlayer

/**
 * These values are for the time frame of one second (60 ticks).
 * @param aeging - The amount of pollution eaten by a chunk's tiles as a percentage of 1. Defaults to `1`.
 * @param diffusion_ratio - The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`.
 * @param enabled - Whether pollution is enabled at all.
 * @param enemy_attack_pollution_consumption_modifier - Defaults to `1`.
 * @param expected_max_per_chunk - Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`.
 * @param max_pollution_to_restore_trees - Defaults to `20`.
 * @param min_pollution_to_damage_trees - Defaults to `60`.
 * @param min_to_diffuse - The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`.
 * @param min_to_show_per_chunk - Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`.
 * @param pollution_per_tree_damage - Defaults to `50`.
 * @param pollution_restored_per_tree_damage - Defaults to `10`.
 * @param pollution_with_max_forest_damage - Defaults to `150`.
 */
interface PollutionMapSettings {
    /**
     * The amount of pollution eaten by a chunk's tiles as a percentage of 1. Defaults to `1`.
     */
    'aeging': number
    /**
     * The amount that is diffused to a neighboring chunk (possibly repeated for other directions as well). Defaults to `0.02`.
     */
    'diffusion_ratio': number
    /**
     * Whether pollution is enabled at all.
     */
    'enabled': boolean
    /**
     * Defaults to `1`.
     */
    'enemy_attack_pollution_consumption_modifier': number
    /**
     * Any amount of pollution larger than this value is visualized as this value instead. Defaults to `150`.
     */
    'expected_max_per_chunk': number
    /**
     * Defaults to `20`.
     */
    'max_pollution_to_restore_trees': number
    /**
     * Defaults to `60`.
     */
    'min_pollution_to_damage_trees': number
    /**
     * The amount of PUs that need to be in a chunk for it to start diffusing. Defaults to `15`.
     */
    'min_to_diffuse': number
    /**
     * Any amount of pollution smaller than this value (but bigger than zero) is visualized as this value instead. Defaults to `50`.
     */
    'min_to_show_per_chunk': number
    /**
     * Defaults to `50`.
     */
    'pollution_per_tree_damage': number
    /**
     * Defaults to `10`.
     */
    'pollution_restored_per_tree_damage': number
    /**
     * Defaults to `150`.
     */
    'pollution_with_max_forest_damage': number
}

/**
 * Coordinates of a tile in a map. Positions may be specified either as a dictionary with `x`, `y` as keys, or simply as an array with two elements.
 * @example
 * Explicit definition: 
 * ```
 * {x = 50, y = 20}
 * {y = 20, x = 50}
 * ```
 *
 * @example
 * Shorthand: 
 * ```
 * {10, 20}
 * ```
 *
 */
interface Position {
    'x': number
    'y': number
}

/**
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 * @param amount - Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified.
 * @param amount_max - Maximum amount of the item or fluid to give. Has no effect when `amount` is specified.
 * @param amount_min - Minimal amount of the item or fluid to give. Has no effect when `amount` is specified.
 * @param catalyst_amount - How much of this product is a catalyst.
 * @param name - Prototype name of the result.
 * @param probability - A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced.
 * @param type - `"item"` or `"fluid"`.
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
 * {{type=0, name="custom-item", probability=0.5, amount_min=1, amount_max=5}}
 * ```
 *
 * @see {@link LuaRecipe::products}
 */
type Product = ProductFluid | DefaultProduct

interface ProgrammableSpeakerAlertParameters {
    'alert_message': string
    'icon_signal_id': SignalID
    'show_alert': boolean
    'show_on_map': boolean
}

interface ProgrammableSpeakerCircuitParameters {
    'instrument_id': number
    'note_id': number
    'signal_value_is_pitch': boolean
}

interface ProgrammableSpeakerInstrument {
    'name': string
    'notes': string[]
}

interface ProgrammableSpeakerParameters {
    'allow_polyphony': boolean
    'playback_globally': boolean
    'playback_volume': number
}

/**
 * The smooth orientation. It is a {@link float | float} in the range `[0, 1)` that covers a full circle, starting at the top and going clockwise. This means a value of `0` indicates "north", a value of `0.5` indicates "south".
 * 
 * For example then, a value of `0.625` would indicate "south-west", and a value of `0.875` would indicate "north-west".
 */
type RealOrientation = number

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type RecipePrototypeFilter = RecipePrototypeFilterCategory | RecipePrototypeFilterEmissionsMultiplier | RecipePrototypeFilterEnergy | RecipePrototypeFilterHasIngredientFluid | RecipePrototypeFilterHasIngredientItem | RecipePrototypeFilterHasProductFluid | RecipePrototypeFilterHasProductItem | RecipePrototypeFilterOverloadMultiplier | RecipePrototypeFilterRequestPasteMultiplier | RecipePrototypeFilterSubgroup | DefaultRecipePrototypeFilter

/**
 * A value between 0 and 255 inclusive represented by one of the following named {@link string | string} or string version of the value (for example `"27"` and `"decals"` are both valid). Higher values are rendered on top of lower values.
 * 
 * - `"water-tile"`: 15
 * - `"ground-tile"`: 25
 * - `"tile-transition"`: 26
 * - `"decals"`: 27
 * - `"lower-radius-visualization"`: 29
 * - `"radius-visualization"`: 30
 * - `"transport-belt-integration"`: 65
 * - `"resource"`:66
 * - `"building-smoke"`:67
 * - `"decorative"`: 92
 * - `"ground-patch"`: 93
 * - `"ground-patch-higher"`: 94
 * - `"ground-patch-higher2"`: 95
 * - `"remnants"`: 112
 * - `"floor"`: 113
 * - `"transport-belt"`: 114
 * - `"transport-belt-endings"`: 115
 * - `"floor-mechanics-under-corpse"`: 120
 * - `"corpse"`: 121
 * - `"floor-mechanics"`: 122
 * - `"item"`: 123
 * - `"lower-object"`: 124
 * - `"transport-belt-circuit-connector"`: 126
 * - `"lower-object-above-shadow"`: 127
 * - `"object"`: 129
 * - `"higher-object-under"`: 131
 * - `"higher-object-above"`: 132
 * - `"item-in-inserter-hand"`: 134
 * - `"wires"`: 135
 * - `"wires-above"`: 136
 * - `"entity-info-icon"`: 138
 * - `"entity-info-icon-above"`: 139
 * - `"explosion"`: 142
 * - `"projectile"`: 143
 * - `"smoke"`: 144
 * - `"air-object"`: 145
 * - `"air-entity-info-icon"`: 147
 * - `"light-effect"`: 148
 * - `"selection-box"`: 187
 * - `"higher-selection-box"`: 188
 * - `"collision-selection-box"`: 189
 * - `"arrow"`: 190
 * - `"cursor"`: 210
 */
type RenderLayer = 'water-tile' |  '15' | 'ground-tile' | '25' | 'tile-transition' | '26' | 'decals' | '27' | 'lower-radius-visualization' | '29' | 'radius-visualization' | '30' | 'transport-belt-integration' | '65' | 'resource' | '6' | 'building-smoke' | '7' | 'decorative' | '92' | 'ground-patch' | '93' | 'ground-patch-higher' | '94' | 'ground-patch-higher2' | '95' | 'remnants' | '112' | 'floor' | '113' | 'transport-belt' | '114' | 'transport-belt-endings' | '115' | 'floor-mechanics-under-corpse' | '120' | 'corpse' | '121' | 'floor-mechanics' | '122' | 'item' | '123' | 'lower-object' | '124' | 'transport-belt-circuit-connector' | '126' | 'lower-object-above-shadow' | '127' | 'object' | '129' | 'higher-object-under' | '131' | 'higher-object-above' | '132' | 'item-in-inserter-hand' | '134' | 'wires' | '135' | 'wires-above' | '136' | 'entity-info-icon' | '138' | 'entity-info-icon-above' | '139' | 'explosion' | '142' | 'projectile' | '143' | 'smoke' | '144' | 'air-object' | '145' | 'air-entity-info-icon' | '147' | 'light-effect' | '148' | 'selection-box' | '187' | 'higher-selection-box' | '188' | 'collision-selection-box' | '189' | 'arrow' | '190' | 'cursor' | '210'

/**
 * @param decrease - Absolute damage decrease
 * @param percent - Percentual damage decrease
 */
interface Resistance {
    /**
     * Absolute damage decrease
     */
    'decrease': number
    /**
     * Percentual damage decrease
     */
    'percent': number
}

interface RidingState {
    'acceleration': defines.riding.acceleration
    'direction': defines.riding.direction
}

/**
 * An area defined using the map editor.
 */
interface ScriptArea {
    'area': BoundingBox
    'color': Color
    'id': number
    'name': string
}

/**
 * A position defined using the map editor.
 */
interface ScriptPosition {
    'color': Color
    'id': number
    'name': string
    'position': Position
}

interface ScriptRenderTarget {
    'entity'?: LuaEntity
    'entity_offset'?: Vector
    'position'?: Position
}

/**
 * One vertex of a ScriptRenderPolygon.
 * @param target_offset - Only used if `target` is a LuaEntity.
 */
interface ScriptRenderVertexTarget {
    'target': Position | LuaEntity
    /**
     * Only used if `target` is a LuaEntity.
     */
    'target_offset'?: Vector
}

/**
 * @param base_type - E.g. `"entity"`.
 * @param derived_type - E.g. `"tree"`.
 * @param name - E.g. `"tree-05"`.
 */
interface SelectedPrototypeData {
    /**
     * E.g. `"entity"`.
     */
    'base_type': string
    /**
     * E.g. `"tree"`.
     */
    'derived_type': string
    /**
     * E.g. `"tree-05"`.
     */
    'name': string
}

/**
 * This is a set of flags given as a dictionary{@link [string | string} &rarr; {@link boolean | boolean}]. Set flags are present in the dictionary with the value `true`; unset flags aren't present at all.
 */
type SelectionModeFlags = {
    [key in SelectionModeFlagsKey]: true
}

type SelectionModeFlagsKey = 'any-entity' | 'any-tile' | 'blueprint' | 'buildable-type' | 'cancel-deconstruct' | 'cancel-upgrade' | 'deconstruct' | 'enemy' | 'entity-with-force' | 'entity-with-health' | 'entity-with-owner' | 'friend' | 'items' | 'items-to-place' | 'not-same-force' | 'nothing' | 'same-force' | 'trees' | 'upgrade'

/**
 * An actual signal transmitted by the network.
 * @param count - Value of the signal.
 * @param signal - ID of the signal.
 */
interface Signal {
    /**
     * Value of the signal.
     */
    'count': number
    /**
     * ID of the signal.
     */
    'signal': SignalID
}

/**
 * @param name - Name of the item, fluid or virtual signal.
 * @param type - `"item"`, `"fluid"`, or `"virtual"`.
 */
interface SignalID {
    /**
     * Name of the item, fluid or virtual signal.
     */
    'name'?: string
    /**
     * `"item"`, `"fluid"`, or `"virtual"`.
     */
    'type': string
}

/**
 * @remarks
 * For type string - The name of the item, which represents a full stack of that item.
 * For type ItemStackDefinition - The detailed definition of an item stack.
 *
 * @example
 * Both of these lines specify an item stack of one iron plate: 
 * ```
 * {name="iron-plate"}
 * ``` 
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
 * ```
 * {name="iron-plate", count=100}
 * ```
 *
 */
type SimpleItemStack = string | ItemStackDefinition

/**
 * @remarks
 * The vectors for all 5 position attributes are a table with `x` and `y` keys instead of an array.
 *
 */
interface SmokeSource {
    'deviation'?: Position
    'east_position'?: Vector
    'frequency': number
    'height': number
    'height_deviation': number
    'name': string
    'north_position'?: Vector
    'offset': number
    'position'?: Vector
    'slow_down_factor': number
    'south_position'?: Vector
    'starting_frame': number
    'starting_frame_deviation': number
    'starting_frame_speed': number
    'starting_frame_speed_deviation': number
    'starting_vertical_speed': number
    'starting_vertical_speed_deviation': number
    'vertical_speed_slowdown': number
    'west_position'?: Vector
}

/**
 * A sound defined by a {@link string | string}. It can be either the name of a {@link sound prototype | https://wiki.factorio.com/Prototype/Sound} defined in the data stage or a path in the form `"type/name"`. The latter option can be sorted into three categories.
 * 
 * The utility and ambient types each contain general use sound prototypes defined by the game itself.
 * - `"utility"` - Uses the {@link UtilitySounds | https://wiki.factorio.com/Prototype/UtilitySounds} prototype. Example: `"utility/wire_connect_pole"`
 * - `"ambient"` - Uses {@link AmbientSound | https://wiki.factorio.com/Prototype/AmbientSound} prototypes. Example: `"ambient/resource-deficiency"`
 * 
 * The following types can be combined with any tile name as long as its prototype defines the
 *     corresponding sound.
 * - `"tile-walking"` - Uses {@link Tile::walking_sound | https://wiki.factorio.com/Prototype/Tile#walking_sound}. Example: `"tile-walking/concrete"`
 * - `"tile-mined"` - Uses {@link Tile::mined_sound | https://wiki.factorio.com/Prototype/Tile#mined_sound}
 * - `"tile-build-small"` - Uses {@link Tile::build_sound | https://wiki.factorio.com/Prototype/Tile#build_sound}. Example: `"tile-build-small/concrete"`
 * - `"tile-build-medium"` - Uses {@link Tile::build_sound | https://wiki.factorio.com/Prototype/Tile#build_sound}
 * - `"tile-build-large"` - Uses {@link Tile::build_sound | https://wiki.factorio.com/Prototype/Tile#build_sound}
 * 
 * The following types can be combined with any entity name as long as its prototype defines the
 *     corresponding sound.
 * - `"entity-build"` - Uses {@link Entity::build_sound | https://wiki.factorio.com/Prototype/Entity#build_sound}. Example: `"entity-build/wooden-chest"`
 * - `"entity-mined"` - Uses {@link Entity::mined_sound | https://wiki.factorio.com/Prototype/Entity#mined_sound}
 * - `"entity-mining"` - Uses {@link Entity::mining_sound | https://wiki.factorio.com/Prototype/Entity#mining_sound}
 * - `"entity-vehicle_impact"` - Uses {@link Entity::vehicle_impact_sound | https://wiki.factorio.com/Prototype/Entity#vehicle_impact_sound}
 * - `"entity-rotated"` - Uses {@link Entity::rotated_sound | https://wiki.factorio.com/Prototype/Entity#rotated_sound}
 * - `"entity-open"` - Uses {@link Entity::open_sound | https://wiki.factorio.com/Prototype/Entity#open_sound}
 * - `"entity-close"` - Uses {@link Entity::close_sound | https://wiki.factorio.com/Prototype/Entity#close_sound}
 */
type SoundPath = string

/**
 * Defines which slider in the game's sound settings affects the volume of this sound. Furthermore, some sound types are mixed differently than others, e.g. zoom level effects are applied.
 */
declare enum SoundType {
    'alert',
    'ambient',
    'environment',
    'game-effect',
    'gui-effect',
    'walking',
    'wind',
}

/**
 * @param evolution_factor - Evolution factor for which this weight applies.
 * @param weight - Probability of spawning this unit at this evolution factor.
 */
interface SpawnPointDefinition {
    /**
     * Evolution factor for which this weight applies.
     */
    'evolution_factor': number
    /**
     * Probability of spawning this unit at this evolution factor.
     */
    'weight': number
}

/**
 * It is specified by {@link string | string}. It can be either the name of a {@link sprite prototype | https://wiki.factorio.com/Prototype/Sprite} defined in the data stage or a path in form "type/name".
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

/**
 * @param force_unit_fuzzy_goto_behavior - Used to make steering look better for aesthetic purposes.
 * @param radius - Does not include the radius of the unit.
 */
interface SteeringMapSetting {
    /**
     * Used to make steering look better for aesthetic purposes.
     */
    'force_unit_fuzzy_goto_behavior': boolean
    /**
     * Does not include the radius of the unit.
     */
    'radius': number
    'separation_factor': number
    'separation_force': number
}

interface SteeringMapSettings {
    'default': SteeringMapSetting
    'moving': SteeringMapSetting
}

/**
 * @remarks
 * For type number - It will be the index of the surface. `nauvis` has index `1`, the first surface-created surface will have index `2` and so on.
 * For type string - It will be the surface name. E.g. `"nauvis"`.
 * For type LuaSurface - A reference to {@link LuaSurface | LuaSurface} may be passed directly.
 *
 */
type SurfaceIdentification = number | string | LuaSurface

interface TabAndContent {
    'content': LuaGuiElement
    'tab': LuaGuiElement
}

/**
 * A dictionary of string to the four basic Lua types: `string`, `boolean`, `number`, `table`.
 * @example
 * ```
 * {a = 1, b = true, c = "three", d = {e = "f"}}
 * ```
 *
 */
type Tags = {[key: string]: string | boolean | number | object}

/**
 * @remarks
 * For type string - The technology name.
 * For type LuaTechnology - A reference to {@link LuaTechnology | LuaTechnology} may be passed directly.
 * For type LuaTechnologyPrototype - A reference to {@link LuaTechnologyPrototype | LuaTechnologyPrototype} may be passed directly.
 *
 */
type TechnologyIdentification = string | LuaTechnology | LuaTechnologyPrototype

/**
 * The effect that is applied when a technology is researched. It is a table that contains at least the field `type`.
 * @remarks
 * Other attributes may be specified depending on `type`:
 *
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 */
type TechnologyModifier = TechnologyModifierOtherTypes | TechnologyModifierAmmoDamage | TechnologyModifierGiveItem | TechnologyModifierGunSpeed | TechnologyModifierNothing | TechnologyModifierTurretAttack | TechnologyModifierUnlockRecipe | DefaultTechnologyModifier

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type TechnologyPrototypeFilter = TechnologyPrototypeFilterLevel | TechnologyPrototypeFilterMaxLevel | TechnologyPrototypeFilterResearchUnitIngredient | TechnologyPrototypeFilterTime | DefaultTechnologyPrototypeFilter

/**
 * @param name - The prototype name of the tile.
 * @param position - The position of the tile.
 */
interface Tile {
    /**
     * The prototype name of the tile.
     */
    'name': string
    /**
     * The position of the tile.
     */
    'position': Position
}

/**
 * Coordinates of a tile in a chunk on a {@link LuaSurface | LuaSurface} where each integer `x`/`y` represents a different tile. This uses the same format as {@link Position | Position} except it rounds any `x`/`y` down to whole numbers. It can be specified either with or without explicit keys.
 */
interface TilePosition {
    'x': number
    'y': number
}

/**
 * @remarks
 * Other attributes may be specified depending on `filter`:
 *
 * @param filter - The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
type TilePrototypeFilter = TilePrototypeFilterCollisionMask | TilePrototypeFilterDecorativeRemovalProbability | TilePrototypeFilterEmissions | TilePrototypeFilterVehicleFrictionModifier | TilePrototypeFilterWalkingSpeedModifier | DefaultTilePrototypeFilter

/**
 * @param current - Index of the currently active record
 */
interface TrainSchedule {
    /**
     * Index of the currently active record
     */
    'current': number
    'records': TrainScheduleRecord[]
}

/**
 * @param rail - Rail to path to. Ignored if `station` is present.
 * @param rail_direction - When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to [LuaEntity::connected_rail_direction](LuaEntity::connected_rail_direction) of a TrainStop.
 * @param station - Name of the station.
 * @param temporary - Only present when the station is temporary, the value is then always `true`.
 */
interface TrainScheduleRecord {
    /**
     * Rail to path to. Ignored if `station` is present.
     */
    'rail'?: LuaEntity
    /**
     * When a train is allowed to reach rail target from any direction it will be `nil`. If rail has to be reached from specific direction, this value allows to choose the direction. This value corresponds to {@link LuaEntity::connected_rail_direction | LuaEntity::connected_rail_direction} of a TrainStop.
     */
    'rail_direction'?: defines.rail_direction
    /**
     * Name of the station.
     */
    'station'?: string
    /**
     * Only present when the station is temporary, the value is then always `true`.
     */
    'temporary'?: boolean
    'wait_conditions'?: WaitCondition[]
}

/**
 * @param type - One of `"instant"`, `"projectile"`, `"flame-thrower"`, `"beam"`, `"stream"`, `"artillery"`.
 */
interface TriggerDelivery {
    'source_effects': TriggerEffectItem[]
    'target_effects': TriggerEffectItem[]
    /**
     * One of `"instant"`, `"projectile"`, `"flame-thrower"`, `"beam"`, `"stream"`, `"artillery"`.
     */
    'type': string
}

/**
 * @param type - One of`"damage"`, `"create-entity"`, `"create-explosion"`, `"create-fire"`, `"create-smoke"`, `"create-trivial-smoke"`, `"create-particle"`, `"create-sticker"`, `"nested-result"`, `"play-sound"`, `"push-back"`, `"destroy-cliffs"`, `"show-explosion-on-chart"`, `"insert-item"`, `"script"`.
 */
interface TriggerEffectItem {
    'affects_target': boolean
    'repeat_count': number
    'show_in_tooltip': boolean
    /**
     * One of`"damage"`, `"create-entity"`, `"create-explosion"`, `"create-fire"`, `"create-smoke"`, `"create-trivial-smoke"`, `"create-particle"`, `"create-sticker"`, `"nested-result"`, `"play-sound"`, `"push-back"`, `"destroy-cliffs"`, `"show-explosion-on-chart"`, `"insert-item"`, `"script"`.
     */
    'type': string
}

/**
 * @param collision_mask - The trigger will only affect entities that would collide with given collision mask.
 * @param entity_flags - The trigger will only affect entities that contain any of these flags.
 * @param force - If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which there is no cease-fire set. `"ally"` is the opposite of `"enemy"`.
 * @param type - One of `"direct"`, `"area"`, `"line"`, `"cluster"`.
 */
interface TriggerItem {
    'action_delivery'?: TriggerDelivery[]
    /**
     * The trigger will only affect entities that would collide with given collision mask.
     */
    'collision_mask': CollisionMask
    /**
     * The trigger will only affect entities that contain any of these flags.
     */
    'entity_flags'?: EntityPrototypeFlags
    /**
     * If `"enemy"`, the trigger will only affect entities whose force is different from the attacker's and for which there is no cease-fire set. `"ally"` is the opposite of `"enemy"`.
     */
    'force': ForceCondition
    'ignore_collision_condition': boolean
    'repeat_count': number
    'trigger_target_mask': TriggerTargetMask
    /**
     * One of `"direct"`, `"area"`, `"line"`, `"cluster"`.
     */
    'type': string
}

/**
 * This is a set of trigger target masks given as a dictionary{@link [string | string} &rarr; {@link boolean | boolean}].
 */
type TriggerTargetMask = {[key: string]: boolean}

/**
 * @param max_gathering_unit_groups - The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`.
 * @param max_group_gathering_time - The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3,600=36,000` ticks.
 * @param max_group_member_fallback_factor - When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`.
 * @param max_group_radius - The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`.
 * @param max_group_slowdown_factor - The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%.
 * @param max_member_slowdown_when_ahead - The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%.
 * @param max_member_speedup_when_behind - The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%.
 * @param max_unit_group_size - The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`.
 * @param max_wait_time_for_late_members - After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3,600=7,200` ticks.
 * @param member_disown_distance - When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`.
 * @param min_group_gathering_time - The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3,600` ticks.
 * @param min_group_radius - The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`.
 */
interface UnitGroupMapSettings {
    /**
     * The maximum number of automatically created unit groups gathering for attack at any time. Defaults to `30`.
     */
    'max_gathering_unit_groups': number
    /**
     * The maximum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `10*3,600=36,000` ticks.
     */
    'max_group_gathering_time': number
    /**
     * When a member of a group falls back more than this factor times the group radius, the group will slow down to its `max_group_slowdown_factor` speed to let them catch up. Defaults to `3`.
     */
    'max_group_member_fallback_factor': number
    /**
     * The maximum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `30.0`.
     */
    'max_group_radius': number
    /**
     * The minimum speed as a percentage of its maximum speed that a group will slow down to so members that fell behind can catch up. Defaults to `0.3`, or 30%.
     */
    'max_group_slowdown_factor': number
    /**
     * The minimum speed a percentage of its regular speed that a group member can slow down to when ahead of the group. Defaults to `0.6`, or 60%.
     */
    'max_member_slowdown_when_ahead': number
    /**
     * The maximum speed a percentage of its regular speed that a group member can speed up to when catching up with the group. Defaults to `1.4`, or 140%.
     */
    'max_member_speedup_when_behind': number
    /**
     * The maximum number of members for an attack unit group. This only affects automatically created unit groups, manual groups created through the API are unaffected. Defaults to `200`.
     */
    'max_unit_group_size': number
    /**
     * After gathering has finished, the group is allowed to wait this long in ticks for delayed members. New members are not accepted anymore however. Defaults to `2*3,600=7,200` ticks.
     */
    'max_wait_time_for_late_members': number
    /**
     * When a member of a group falls back more than this factor times the group radius, it will be dropped from the group. Defaults to `10`.
     */
    'member_disown_distance': number
    /**
     * The minimum amount of time in ticks a group will spend gathering before setting off. The actual time is a random time between the minimum and maximum times. Defaults to `3,600` ticks.
     */
    'min_group_gathering_time': number
    /**
     * The minimum group radius in tiles. The actual radius is adjusted based on the number of members. Defaults to `5.0`.
     */
    'min_group_radius': number
    'tick_tolerance_when_member_arrives': number
}

/**
 * @param spawn_points - The points at which to spawn the unit.
 * @param unit - Prototype name of the unit that would be spawned.
 */
interface UnitSpawnDefinition {
    /**
     * The points at which to spawn the unit.
     */
    'spawn_points': SpawnPointDefinition[]
    /**
     * Prototype name of the unit that would be spawned.
     */
    'unit': string
}

/**
 * @param name - Name of the item, or entity.
 * @param type - `"item"`, or `"entity"`.
 */
interface UpgradeFilter {
    /**
     * Name of the item, or entity.
     */
    'name'?: string
    /**
     * `"item"`, or `"entity"`.
     */
    'type': string
}

/**
 * A vector is a two-element array containing the `x` and `y` components. In some specific cases, the vector is a table with `x` and `y` keys instead, which the documentation will point out.
 * @example
 * ```
 * right = {1.0, 0.0}
 * ```
 *
 */
type Vector = [number, number] | {x: number, y: number}

interface VehicleAutomaticTargetingParameters {
    'auto_target_with_gunner': boolean
    'auto_target_without_gunner': boolean
}

/**
 * @param compare_type - Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array.
 * @param condition - Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`.
 * @param ticks - Number of ticks to wait or of inactivity. Only present when `type` is `"time"` or `"inactivity"`.
 * @param type - One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`, `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`.
 */
interface WaitCondition {
    /**
     * Either `"and"`, or `"or"`. Tells how this condition is to be compared with the preceding conditions in the corresponding `wait_conditions` array.
     */
    'compare_type': string
    /**
     * Only present when `type` is `"item_count"`, `"circuit"` or `"fluid_count"`.
     */
    'condition'?: CircuitCondition
    /**
     * Number of ticks to wait or of inactivity. Only present when `type` is `"time"` or `"inactivity"`.
     */
    'ticks'?: number
    /**
     * One of `"time"`, `"inactivity"`, `"full"`, `"empty"`, `"item_count"`, `"circuit"`, `"robots_inactive"`, `"fluid_count"`, `"passenger_present"`, `"passenger_not_present"`.
     */
    'type': string
}

/**
 * @param source_circuit_id - Mandatory if the source entity has more than one circuit connection using circuit wire.
 * @param source_wire_id - Mandatory if the source entity has more than one wire connection using copper wire.
 * @param target_circuit_id - Mandatory if the target entity has more than one circuit connection using circuit wire.
 * @param target_entity - The entity to (dis)connect the source entity with.
 * @param target_wire_id - Mandatory if the target entity has more than one wire connection using copper wire.
 * @param wire - Wire color, either [defines.wire_type.red](defines.wire_type.red) or [defines.wire_type.green](defines.wire_type.green).
 */
interface WireConnectionDefinition {
    /**
     * Mandatory if the source entity has more than one circuit connection using circuit wire.
     */
    'source_circuit_id'?: defines.circuit_connector_id
    /**
     * Mandatory if the source entity has more than one wire connection using copper wire.
     */
    'source_wire_id'?: defines.circuit_connector_id
    /**
     * Mandatory if the target entity has more than one circuit connection using circuit wire.
     */
    'target_circuit_id'?: defines.circuit_connector_id
    /**
     * The entity to (dis)connect the source entity with.
     */
    'target_entity': LuaEntity
    /**
     * Mandatory if the target entity has more than one wire connection using copper wire.
     */
    'target_wire_id'?: defines.circuit_connector_id
    /**
     * Wire color, either {@link defines.wire_type.red | defines.wire_type.red} or {@link defines.wire_type.green | defines.wire_type.green}.
     */
    'wire': defines.wire_type
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseAchievementPrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"allowed-without-fight"`, `"type"`
 * @param type - The prototype type
 */
interface AchievementPrototypeFilterType extends BaseAchievementPrototypeFilter {
    /**
     * The condition to filter on. One of `"allowed-without-fight"`, `"type"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"allowed-without-fight"`, `"type"`
 */
interface DefaultAchievementPrototypeFilter extends BaseAchievementPrototypeFilter {
    /**
     * The condition to filter on. One of `"allowed-without-fight"`, `"type"`
     */
    'filter': 'allowed-without-fight'
}

/**
 * @param ammo_categories - List of the names of compatible [LuaAmmoCategoryPrototypes](LuaAmmoCategoryPrototype).
 * @param ammo_consumption_modifier - Multiplier applied to the ammo consumption of an attack.
 * @param cooldown - Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick.
 * @param damage_modifier - Multiplier applied to the damage of an attack.
 * @param fire_penalty - When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire.
 * @param health_penalty - When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite.
 * @param min_attack_distance - If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters.
 * @param min_range - Minimum range of attack. Used with flamethrower turrets to prevent self-immolation.
 * @param range - Maximum range of attack.
 * @param range_mode - Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`.
 * @param rotate_penalty - When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face.
 * @param turn_range - The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees.
 * @param warmup - Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so.
 */
interface BaseAttackParameters {
    /**
     * List of the names of compatible {@link LuaAmmoCategoryPrototypes | LuaAmmoCategoryPrototype}.
     */
    'ammo_categories'?: string[]
    /**
     * Multiplier applied to the ammo consumption of an attack.
     */
    'ammo_consumption_modifier': number
    'ammo_type'?: AmmoType
    /**
     * Minimum amount of ticks between shots. If this is less than `1`, multiple shots can be performed per tick.
     */
    'cooldown': number
    /**
     * Multiplier applied to the damage of an attack.
     */
    'damage_modifier': number
    /**
     * When searching for the nearest enemy to attack, `fire_penalty` is added to the enemy's distance if they are on fire.
     */
    'fire_penalty': number
    /**
     * When searching for an enemy to attack, a higher `health_penalty` will discourage targeting enemies with high health. A negative penalty will do the opposite.
     */
    'health_penalty': number
    /**
     * If less than `range`, the entity will choose a random distance between `range` and `min_attack_distance` and attack from that distance. Used for spitters.
     */
    'min_attack_distance': number
    /**
     * Minimum range of attack. Used with flamethrower turrets to prevent self-immolation.
     */
    'min_range': number
    'movement_slow_down_cooldown': number
    'movement_slow_down_factor': number
    /**
     * Maximum range of attack.
     */
    'range': number
    /**
     * Defines how the range is determined. Either `'center-to-center'` or `'bounding-box-to-bounding-box'`.
     */
    'range_mode': string
    /**
     * When searching for an enemy to attack, a higher `rotate_penalty` will discourage targeting enemies that would take longer to turn to face.
     */
    'rotate_penalty': number
    /**
     * The arc that the entity can attack in as a fraction of a circle. A value of `1` means the full 360 degrees.
     */
    'turn_range': number
    /**
     * Number of ticks it takes for the weapon to actually shoot after it has been ordered to do so.
     */
    'warmup': number
}

/**
 * @param type - The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
 */
interface AttackParametersProjectile extends BaseAttackParameters {
    /**
     * The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
     */
    'type': 'projectile'
    'projectile_center': Vector
    'projectile_creation_distance': number
    'projectile_creation_parameters'?: CircularProjectileCreationSpecification[]
    'projectile_orientation_offset': number
    'shell_particle'?: CircularParticleCreationSpecification
}

/**
 * @param type - The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
 */
interface AttackParametersStream extends BaseAttackParameters {
    /**
     * The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
     */
    'type': 'stream'
    'fluid_consumption': number
    'fluids'?: AttackParameterFluid[]
    'gun_barrel_length': number
    'gun_center_shift': {[key: string]: Vector}
    'projectile_creation_parameters'?: CircularProjectileCreationSpecification[]
}

/**
 * @param type - The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
 */
interface DefaultAttackParameters extends BaseAttackParameters {
    /**
     * The type of AttackParameter. One of `'projectile'`, `'stream'` or `'beam'`.
     */
    'type': 'beam'
}

/**
 * @remarks
 * Applies to `defines.command.attack` variant case
 *
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 */
interface CommandAttack extends Command {
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    'target': LuaEntity
}

/**
 * @remarks
 * Applies to `defines.command.attack_area` variant case
 *
 * @param destination - Center of the attack area.
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 * @param radius - Radius of the attack area.
 */
interface CommandAttackArea extends Command {
    /**
     * Center of the attack area.
     */
    'destination': Position
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    /**
     * Radius of the attack area.
     */
    'radius': number
}

/**
 * @remarks
 * Applies to `defines.command.build_base` variant case
 *
 * @param destination - Where to build the base.
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 * @param ignore_planner - Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in a non-candidate chunk. Defaults to `false`.
 */
interface CommandBuildBase extends Command {
    /**
     * Where to build the base.
     */
    'destination': Position
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    /**
     * Whether the units should ignore expansion candidate chunks. When `false`, they will obey and not build a base in a non-candidate chunk. Defaults to `false`.
     */
    'ignore_planner'?: boolean
}

/**
 * @remarks
 * Applies to `defines.command.compound` variant case
 *
 * @param commands - The sub-commands.
 * @param structure_type - How the commands should be chained together.
 */
interface CommandCompound extends Command {
    /**
     * The sub-commands.
     */
    'commands': Command[]
    /**
     * How the commands should be chained together.
     */
    'structure_type': defines.compound_command
}

/**
 * @remarks
 * Applies to `defines.command.flee` variant case
 *
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 * @param from - The entity to flee from
 */
interface CommandFlee extends Command {
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    /**
     * The entity to flee from
     */
    'from': LuaEntity
}

/**
 * @remarks
 * Applies to `defines.command.go_to_location` variant case
 *
 * @param destination - The position to path to. Either this or `destination_entity` need to be specified. If both are, `destination_entity` is used.
 * @param destination_entity - The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used.
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 * @param pathfind_flags - Flags that affect pathfinder behavior.
 * @param radius - How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`.
 */
interface CommandGoToLocation extends Command {
    /**
     * The position to path to. Either this or `destination_entity` need to be specified. If both are, `destination_entity` is used.
     */
    'destination'?: Position
    /**
     * The entity to path to. Either this or `destination` need to be specified. If both are, `destination_entity` is used.
     */
    'destination_entity'?: LuaEntity
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    /**
     * Flags that affect pathfinder behavior.
     */
    'pathfind_flags'?: PathfinderFlags
    /**
     * How close the pathfinder needs to get to its destination (in tiles). Defaults to `3`.
     */
    'radius'?: number
}

/**
 * @remarks
 * Applies to `defines.command.group` variant case
 *
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 * @param group - The group whose command to follow.
 * @param use_group_distraction - Whether the unit will use the group distraction or the commands distraction. Defaults to true.
 */
interface CommandGroup extends Command {
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    /**
     * The group whose command to follow.
     */
    'group': LuaUnitGroup
    /**
     * Whether the unit will use the group distraction or the commands distraction. Defaults to true.
     */
    'use_group_distraction'?: boolean
}

/**
 * @remarks
 * Applies to `defines.command.stop` variant case
 *
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 * @param ticks_to_wait - Ticks to wander before successfully completing the command. Default is max uint, which means stop forever.
 */
interface CommandStop extends Command {
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means stop forever.
     */
    'ticks_to_wait'?: number
}

/**
 * @remarks
 * Applies to `defines.command.wander` variant case
 *
 * @param distraction - Defaults to `defines.distraction.by_enemy`.
 * @param radius - Defaults to 10. Does not apply when `wander_in_group` is `true`.
 * @param ticks_to_wait - Ticks to wander before successfully completing the command. Default is max uint, which means wander forever.
 * @param wander_in_group - When commanding a group, defines how the group will wander. When `true`, the units in the group will wander around inside the group's radius, just like gathering biters. When `false`, the units will wander as a group, ie they will all walk together in the same random direction. Default is true for groups. Passing true for a single unit is an error.
 */
interface CommandWander extends Command {
    /**
     * Defaults to `defines.distraction.by_enemy`.
     */
    'distraction'?: defines.distraction
    /**
     * Defaults to 10. Does not apply when `wander_in_group` is `true`.
     */
    'radius'?: number
    /**
     * Ticks to wander before successfully completing the command. Default is max uint, which means wander forever.
     */
    'ticks_to_wait'?: number
    /**
     * When commanding a group, defines how the group will wander. When `true`, the units in the group will wander around inside the group's radius, just like gathering biters. When `false`, the units will wander as a group, ie they will all walk together in the same random direction. Default is true for groups. Passing true for a single unit is an error.
     */
    'wander_in_group'?: boolean
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseDecorativePrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`
 * @param mask_mode - How to filter: `"collides"` or `"layers-equals"`
 */
interface DecorativePrototypeFilterCollisionMask extends BaseDecorativePrototypeFilter {
    /**
     * The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`
     */
    'filter': 'collision-mask'
    'mask': CollisionMask | CollisionMaskWithFlags
    /**
     * How to filter: `"collides"` or `"layers-equals"`
     */
    'mask_mode': string
}

/**
 * @param filter - The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`
 */
interface DefaultDecorativePrototypeFilter extends BaseDecorativePrototypeFilter {
    /**
     * The condition to filter on. One of `"decal"`, `"autoplace"`, `"collision-mask"`
     */
    'filter': 'decal' | 'autoplace'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseEntityPrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param value - The value to compare against.
 */
interface EntityPrototypeFilterBuildBaseEvolutionRequirement extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'build-base-evolution-requirement'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param mask_mode - How to filter: `"collides"` or `"layers-equals"`
 */
interface EntityPrototypeFilterCollisionMask extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'collision-mask'
    'mask': CollisionMask | CollisionMaskWithFlags
    /**
     * How to filter: `"collides"` or `"layers-equals"`
     */
    'mask_mode': string
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param crafting_category - Matches if the prototype is for a crafting machine with this crafting category.
 */
interface EntityPrototypeFilterCraftingCategory extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'crafting-category'
    /**
     * Matches if the prototype is for a crafting machine with this crafting category.
     */
    'crafting_category': string
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param value - The value to compare against.
 */
interface EntityPrototypeFilterEmissions extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'emissions'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param flag - One of the values in [EntityPrototypeFlags](EntityPrototypeFlags).
 */
interface EntityPrototypeFilterFlag extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'flag'
    /**
     * One of the values in {@link EntityPrototypeFlags | EntityPrototypeFlags}.
     */
    'flag': string
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param name - The prototype name, or list of acceptable names.
 */
interface EntityPrototypeFilterName extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'name'
    /**
     * The prototype name, or list of acceptable names.
     */
    'name': string | string[]
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param value - The value to compare against.
 */
interface EntityPrototypeFilterSelectionPriority extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'selection-priority'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 * @param type - The prototype type
 */
interface EntityPrototypeFilterType extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
 */
interface DefaultEntityPrototypeFilter extends BaseEntityPrototypeFilter {
    /**
     * The condition to filter on. One of `"flying-robot"`, `"robot-with-logistics-interface"`, `"rail"`, `"ghost"`, `"explosion"`, `"vehicle"`, `"crafting-machine"`, `"rolling-stock"`, `"turret"`, `"transport-belt-connectable"`, `"wall-connectable"`, `"buildable"`, `"placable-in-editor"`, `"clonable"`, `"selectable"`, `"hidden"`, `"entity-with-health"`, `"building"`, `"fast-replaceable"`, `"uses-direction"`, `"minable"`, `"circuit-connectable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"name"`, `"type"`, `"collision-mask"`, `"flag"`, `"build-base-evolution-requirement"`, `"selection-priority"`, `"emissions"`, `"crafting-category"`
     */
    'filter': 'flying-robot' | 'robot-with-logistics-interface' | 'rail' | 'ghost' | 'explosion' | 'vehicle' | 'crafting-machine' | 'rolling-stock' | 'turret' | 'transport-belt-connectable' | 'wall-connectable' | 'buildable' | 'placable-in-editor' | 'clonable' | 'selectable' | 'hidden' | 'entity-with-health' | 'building' | 'fast-replaceable' | 'uses-direction' | 'minable' | 'circuit-connectable' | 'autoplace' | 'blueprintable' | 'item-to-place'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseEquipmentPrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"item-to-place"`, `"type"`
 * @param type - The prototype type
 */
interface EquipmentPrototypeFilterType extends BaseEquipmentPrototypeFilter {
    /**
     * The condition to filter on. One of `"item-to-place"`, `"type"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"item-to-place"`, `"type"`
 */
interface DefaultEquipmentPrototypeFilter extends BaseEquipmentPrototypeFilter {
    /**
     * The condition to filter on. One of `"item-to-place"`, `"type"`
     */
    'filter': 'item-to-place'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseFluidPrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param value - The value to compare against.
 */
interface FluidPrototypeFilterDefaultTemperature extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'default-temperature'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param value - The value to compare against.
 */
interface FluidPrototypeFilterEmissionsMultiplier extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'emissions-multiplier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param value - The value to compare against.
 */
interface FluidPrototypeFilterFuelValue extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'fuel-value'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param value - The value to compare against.
 */
interface FluidPrototypeFilterGasTemperature extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'gas-temperature'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param value - The value to compare against.
 */
interface FluidPrototypeFilterHeatCapacity extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'heat-capacity'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param value - The value to compare against.
 */
interface FluidPrototypeFilterMaxTemperature extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'max-temperature'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param name - The prototype name, or list of acceptable names.
 */
interface FluidPrototypeFilterName extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'name'
    /**
     * The prototype name, or list of acceptable names.
     */
    'name': string | string[]
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 * @param subgroup - A [LuaGroup](LuaGroup) (subgroup) name
 */
interface FluidPrototypeFilterSubgroup extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'subgroup'
    /**
     * A {@link LuaGroup | LuaGroup} (subgroup) name
     */
    'subgroup': string
}

/**
 * @param filter - The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
 */
interface DefaultFluidPrototypeFilter extends BaseFluidPrototypeFilter {
    /**
     * The condition to filter on. One of `"hidden"`, `"name"`, `"subgroup"`, `"default-temperature"`, `"max-temperature"`, `"heat-capacity"`, `"fuel-value"`, `"emissions-multiplier"`, `"gas-temperature"`
     */
    'filter': 'hidden'
}

interface BaseGuiArrowSpecification {
}

/**
 * @param type - This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
 * @param crafting_queueindex - Index in the crafting queue to point to.
 */
interface GuiArrowSpecificationCraftingQueue extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    'type': 'crafting_queue'
    /**
     * Index in the crafting queue to point to.
     */
    'crafting_queueindex': number
}

/**
 * @param type - This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
 */
interface GuiArrowSpecificationEntity extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    'type': 'entity'
    'entity': LuaEntity
}

/**
 * @param type - This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
 * @param inventory_index - Which inventory the stack is in.
 * @param item_stack_index - Which stack to point to.
 * @param source - Must be either `"player"`, `"target"`, `"player-quickbar"` or `"player-equipment-bar"`.
 */
interface GuiArrowSpecificationItemStack extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    'type': 'item_stack'
    /**
     * Which inventory the stack is in.
     */
    'inventory_index': defines.inventory
    /**
     * Which stack to point to.
     */
    'item_stack_index': number
    /**
     * Must be either `"player"`, `"target"`, `"player-quickbar"` or `"player-equipment-bar"`.
     */
    'source': string
}

/**
 * @param type - This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
 */
interface GuiArrowSpecificationPosition extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    'type': 'position'
    'position': Position
}

/**
 * @param type - This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
 */
interface DefaultGuiArrowSpecification extends BaseGuiArrowSpecification {
    /**
     * This determines which of the following fields will be required. Must be one of `"nowhere"` (will remove the arrow entirely), `"goal"` (will point to the current goal), `"entity_info"`, `"active_window"`, `"entity"`, `"position"`, `"crafting_queue"` or `"item_stack"` (will point to a given item stack in an inventory). Depending on this value, other fields may have to be specified.
     */
    'type': 'nowhere' | 'goal' | 'entity_info' | 'active_window'
}

/**
 * @param amount - Amount of the item or fluid.
 * @param catalyst_amount - How much of this ingredient is a catalyst.
 * @param name - Prototype name of the required item or fluid.
 */
interface BaseIngredient {
    /**
     * Amount of the item or fluid.
     */
    'amount': number
    /**
     * How much of this ingredient is a catalyst.
     */
    'catalyst_amount'?: number
    /**
     * Prototype name of the required item or fluid.
     */
    'name': string
}

/**
 * @param type - `"item"` or `"fluid"`.
 * @param maximum_temperature - The maximum fluid temperature allowed.
 * @param minimum_temperature - The minimum fluid temperature required.
 */
interface IngredientFluid extends BaseIngredient {
    /**
     * `"item"` or `"fluid"`.
     */
    'type': 'fluid'
    /**
     * The maximum fluid temperature allowed.
     */
    'maximum_temperature'?: number
    /**
     * The minimum fluid temperature required.
     */
    'minimum_temperature'?: number
}

/**
 * @param type - `"item"` or `"fluid"`.
 */
interface DefaultIngredient extends BaseIngredient {
    /**
     * `"item"` or `"fluid"`.
     */
    'type': 'item'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseItemPrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param elem_filters - Filters for the burnt result.
 */
interface ItemPrototypeFilterBurntResult extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'burnt-result'
    /**
     * Filters for the burnt result.
     */
    'elem_filters'?: ItemPrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param value - The value to compare against.
 */
interface ItemPrototypeFilterDefaultRequestAmount extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'default-request-amount'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param flag - One of the values in [ItemPrototypeFlags](ItemPrototypeFlags).
 */
interface ItemPrototypeFilterFlag extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'flag'
    /**
     * One of the values in {@link ItemPrototypeFlags | ItemPrototypeFlags}.
     */
    'flag': string
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param value - The value to compare against.
 */
interface ItemPrototypeFilterFuelAccelerationMultiplier extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'fuel-acceleration-multiplier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param fuel-category - A [LuaFuelCategoryPrototype](LuaFuelCategoryPrototype) name
 */
interface ItemPrototypeFilterFuelCategory extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'fuel-category'
    /**
     * A {@link LuaFuelCategoryPrototype | LuaFuelCategoryPrototype} name
     */
    'fuel-category': string
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param value - The value to compare against.
 */
interface ItemPrototypeFilterFuelEmissionsMultiplier extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'fuel-emissions-multiplier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param value - The value to compare against.
 */
interface ItemPrototypeFilterFuelTopSpeedMultiplier extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'fuel-top-speed-multiplier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param value - The value to compare against.
 */
interface ItemPrototypeFilterFuelValue extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'fuel-value'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param name - The prototype name, or list of acceptable names.
 */
interface ItemPrototypeFilterName extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'name'
    /**
     * The prototype name, or list of acceptable names.
     */
    'name': string | string[]
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param elem_filters - Filters for the placed tile.
 */
interface ItemPrototypeFilterPlaceAsTile extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'place-as-tile'
    /**
     * Filters for the placed tile.
     */
    'elem_filters'?: TilePrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param elem_filters - Filters for the place result.
 */
interface ItemPrototypeFilterPlaceResult extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'place-result'
    /**
     * Filters for the place result.
     */
    'elem_filters'?: EntityPrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param elem_filters - Filters for the placed equipment.
 */
interface ItemPrototypeFilterPlacedAsEquipmentResult extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'placed-as-equipment-result'
    /**
     * Filters for the placed equipment.
     */
    'elem_filters'?: EquipmentPrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param value - The value to compare against.
 */
interface ItemPrototypeFilterStackSize extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'stack-size'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param subgroup - A [LuaGroup](LuaGroup) (subgroup) name
 */
interface ItemPrototypeFilterSubgroup extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'subgroup'
    /**
     * A {@link LuaGroup | LuaGroup} (subgroup) name
     */
    'subgroup': string
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param type - The prototype type
 */
interface ItemPrototypeFilterType extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 * @param value - The value to compare against.
 */
interface ItemPrototypeFilterWireCount extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'wire-count'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
 */
interface DefaultItemPrototypeFilter extends BaseItemPrototypeFilter {
    /**
     * The condition to filter on. One of `"tool"`, `"mergeable"`, `"item-with-inventory"`, `"selection-tool"`, `"item-with-label"`, `"has-rocket-launch-products"`, `"fuel"`, `"place-result"`, `"burnt-result"`, `"place-as-tile"`, `"placed-as-equipment-result"`, `"name"`, `"type"`, `"flag"`, `"subgroup"`, `"fuel-category"`, `"stack-size"`, `"default-request-amount"`, `"wire-count"`, `"fuel-value"`, `"fuel-acceleration-multiplier"`, `"fuel-top-speed-multiplier"`, `"fuel-emissions-multiplier"`
     */
    'filter': 'tool' | 'mergeable' | 'item-with-inventory' | 'selection-tool' | 'item-with-label' | 'has-rocket-launch-products' | 'fuel'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaEntityClonedEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaEntityClonedEventFilterGhostName extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaEntityClonedEventFilterGhostType extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaEntityClonedEventFilterName extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaEntityClonedEventFilterType extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaEntityClonedEventFilter extends BaseLuaEntityClonedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaEntityDamagedEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param type - A [LuaDamagePrototype](LuaDamagePrototype) name
 */
interface LuaEntityDamagedEventFilterDamageType extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'damage-type'
    /**
     * A {@link LuaDamagePrototype | LuaDamagePrototype} name
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param value - The value to compare against.
 */
interface LuaEntityDamagedEventFilterFinalDamageAmount extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'final-damage-amount'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param value - The value to compare against.
 */
interface LuaEntityDamagedEventFilterFinalHealth extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'final-health'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param name - The ghost prototype name
 */
interface LuaEntityDamagedEventFilterGhostName extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param type - The ghost prototype type
 */
interface LuaEntityDamagedEventFilterGhostType extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param name - The prototype name
 */
interface LuaEntityDamagedEventFilterName extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param value - The value to compare against.
 */
interface LuaEntityDamagedEventFilterOriginalDamageAmount extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'original-damage-amount'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 * @param type - The prototype type
 */
interface LuaEntityDamagedEventFilterType extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
 */
interface DefaultLuaEntityDamagedEventFilter extends BaseLuaEntityDamagedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"original-damage-amount"`, `"final-damage-amount"`, `"damage-type"`, `"final-health"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaEntityDeconstructionCancelledEventFilterGhostName extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaEntityDeconstructionCancelledEventFilterGhostType extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaEntityDeconstructionCancelledEventFilterName extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaEntityDeconstructionCancelledEventFilterType extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaEntityDeconstructionCancelledEventFilter extends BaseLuaEntityDeconstructionCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaEntityDiedEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaEntityDiedEventFilterGhostName extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaEntityDiedEventFilterGhostType extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaEntityDiedEventFilterName extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaEntityDiedEventFilterType extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaEntityDiedEventFilter extends BaseLuaEntityDiedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaEntityMarkedForDeconstructionEventFilterGhostName extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaEntityMarkedForDeconstructionEventFilterGhostType extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaEntityMarkedForDeconstructionEventFilterName extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaEntityMarkedForDeconstructionEventFilterType extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaEntityMarkedForDeconstructionEventFilter extends BaseLuaEntityMarkedForDeconstructionEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaEntityMarkedForUpgradeEventFilterGhostName extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaEntityMarkedForUpgradeEventFilterGhostType extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaEntityMarkedForUpgradeEventFilterName extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaEntityMarkedForUpgradeEventFilterType extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaEntityMarkedForUpgradeEventFilter extends BaseLuaEntityMarkedForUpgradeEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param force - The entity force
 */
interface LuaPlayerBuiltEntityEventFilterForce extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'force'
    /**
     * The entity force
     */
    'force': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param name - The ghost prototype name
 */
interface LuaPlayerBuiltEntityEventFilterGhostName extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param type - The ghost prototype type
 */
interface LuaPlayerBuiltEntityEventFilterGhostType extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param name - The prototype name
 */
interface LuaPlayerBuiltEntityEventFilterName extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param type - The prototype type
 */
interface LuaPlayerBuiltEntityEventFilterType extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 */
interface DefaultLuaPlayerBuiltEntityEventFilter extends BaseLuaPlayerBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaPlayerMinedEntityEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaPlayerMinedEntityEventFilterGhostName extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaPlayerMinedEntityEventFilterGhostType extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaPlayerMinedEntityEventFilterName extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaPlayerMinedEntityEventFilterType extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaPlayerMinedEntityEventFilter extends BaseLuaPlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaPlayerRepairedEntityEventFilterGhostName extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaPlayerRepairedEntityEventFilterGhostType extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaPlayerRepairedEntityEventFilterName extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaPlayerRepairedEntityEventFilterType extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaPlayerRepairedEntityEventFilter extends BaseLuaPlayerRepairedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaPostEntityDiedEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"type"`
 * @param type - The prototype type
 */
interface LuaPostEntityDiedEventFilterType extends BaseLuaPostEntityDiedEventFilter {
    /**
     * The condition to filter on. One of `"type"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaPreGhostDeconstructedEventFilterGhostName extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaPreGhostDeconstructedEventFilterGhostType extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaPreGhostDeconstructedEventFilterName extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaPreGhostDeconstructedEventFilterType extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaPreGhostDeconstructedEventFilter extends BaseLuaPreGhostDeconstructedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaPrePlayerMinedEntityEventFilterGhostName extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaPrePlayerMinedEntityEventFilterGhostType extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaPrePlayerMinedEntityEventFilterName extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaPrePlayerMinedEntityEventFilterType extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaPrePlayerMinedEntityEventFilter extends BaseLuaPrePlayerMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaPreRobotMinedEntityEventFilterGhostName extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaPreRobotMinedEntityEventFilterGhostType extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaPreRobotMinedEntityEventFilterName extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaPreRobotMinedEntityEventFilterType extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaPreRobotMinedEntityEventFilter extends BaseLuaPreRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaRobotBuiltEntityEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param force - The entity force
 */
interface LuaRobotBuiltEntityEventFilterForce extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'force'
    /**
     * The entity force
     */
    'force': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param name - The ghost prototype name
 */
interface LuaRobotBuiltEntityEventFilterGhostName extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param type - The ghost prototype type
 */
interface LuaRobotBuiltEntityEventFilterGhostType extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param name - The prototype name
 */
interface LuaRobotBuiltEntityEventFilterName extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 * @param type - The prototype type
 */
interface LuaRobotBuiltEntityEventFilterType extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
 */
interface DefaultLuaRobotBuiltEntityEventFilter extends BaseLuaRobotBuiltEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`, `"force"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaRobotMinedEntityEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaRobotMinedEntityEventFilterGhostName extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaRobotMinedEntityEventFilterGhostType extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaRobotMinedEntityEventFilterName extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaRobotMinedEntityEventFilterType extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaRobotMinedEntityEventFilter extends BaseLuaRobotMinedEntityEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaScriptRaisedBuiltEventFilterGhostName extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaScriptRaisedBuiltEventFilterGhostType extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaScriptRaisedBuiltEventFilterName extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaScriptRaisedBuiltEventFilterType extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaScriptRaisedBuiltEventFilter extends BaseLuaScriptRaisedBuiltEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaScriptRaisedDestroyEventFilterGhostName extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaScriptRaisedDestroyEventFilterGhostType extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaScriptRaisedDestroyEventFilterName extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaScriptRaisedDestroyEventFilterType extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaScriptRaisedDestroyEventFilter extends BaseLuaScriptRaisedDestroyEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaScriptRaisedReviveEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaScriptRaisedReviveEventFilterGhostName extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaScriptRaisedReviveEventFilterGhostType extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaScriptRaisedReviveEventFilterName extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaScriptRaisedReviveEventFilterType extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaScriptRaisedReviveEventFilter extends BaseLuaScriptRaisedReviveEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaSectorScannedEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaSectorScannedEventFilterGhostName extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaSectorScannedEventFilterGhostType extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaSectorScannedEventFilterName extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaSectorScannedEventFilterType extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaSectorScannedEventFilter extends BaseLuaSectorScannedEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseLuaUpgradeCancelledEventFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The ghost prototype name
 */
interface LuaUpgradeCancelledEventFilterGhostName extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_name'
    /**
     * The ghost prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The ghost prototype type
 */
interface LuaUpgradeCancelledEventFilterGhostType extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost_type'
    /**
     * The ghost prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param name - The prototype name
 */
interface LuaUpgradeCancelledEventFilterName extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'name'
    /**
     * The prototype name
     */
    'name': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 * @param type - The prototype type
 */
interface LuaUpgradeCancelledEventFilterType extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
 */
interface DefaultLuaUpgradeCancelledEventFilter extends BaseLuaUpgradeCancelledEventFilter {
    /**
     * The condition to filter on. One of `"ghost"`, `"rail"`, `"rail-signal"`, `"rolling-stock"`, `"robot-with-logistics-interface"`, `"vehicle"`, `"turret"`, `"crafting-machine"`, `"wall-connectable"`, `"transport-belt-connectable"`, `"circuit-network-connectable"`, `"type"`, `"name"`, `"ghost_type"`, `"ghost_name"`
     */
    'filter': 'ghost' | 'rail' | 'rail-signal' | 'rolling-stock' | 'robot-with-logistics-interface' | 'vehicle' | 'turret' | 'crafting-machine' | 'wall-connectable' | 'transport-belt-connectable' | 'circuit-network-connectable'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseModSettingPrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`
 * @param mod - The mod name
 */
interface ModSettingPrototypeFilterMod extends BaseModSettingPrototypeFilter {
    /**
     * The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`
     */
    'filter': 'mod'
    /**
     * The mod name
     */
    'mod': string
}

/**
 * @param filter - The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`
 * @param type - The setting scope type (startup, runtime-global, or runtime-per-user)
 */
interface ModSettingPrototypeFilterSettingType extends BaseModSettingPrototypeFilter {
    /**
     * The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`
     */
    'filter': 'setting-type'
    /**
     * The setting scope type (startup, runtime-global, or runtime-per-user)
     */
    'type': string
}

/**
 * @param filter - The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`
 * @param type - The prototype type
 */
interface ModSettingPrototypeFilterType extends BaseModSettingPrototypeFilter {
    /**
     * The condition to filter on. One of `"type"`, `"mod"`, `"setting-type"`
     */
    'filter': 'type'
    /**
     * The prototype type
     */
    'type': string
}

/**
 * @param amount - Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified.
 * @param amount_max - Maximum amount of the item or fluid to give. Has no effect when `amount` is specified.
 * @param amount_min - Minimal amount of the item or fluid to give. Has no effect when `amount` is specified.
 * @param catalyst_amount - How much of this product is a catalyst.
 * @param name - Prototype name of the result.
 * @param probability - A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced.
 */
interface BaseProduct {
    /**
     * Amount of the item or fluid to give. If not specified, `amount_min`, `amount_max` and `probability` must all be specified.
     */
    'amount'?: number
    /**
     * Maximum amount of the item or fluid to give. Has no effect when `amount` is specified.
     */
    'amount_max'?: number
    /**
     * Minimal amount of the item or fluid to give. Has no effect when `amount` is specified.
     */
    'amount_min'?: number
    /**
     * How much of this product is a catalyst.
     */
    'catalyst_amount'?: number
    /**
     * Prototype name of the result.
     */
    'name': string
    /**
     * A value in range [0, 1]. Item or fluid is only given with this probability; otherwise no product is produced.
     */
    'probability'?: number
}

/**
 * @param type - `"item"` or `"fluid"`.
 * @param temperature - The fluid temperature of this product.
 */
interface ProductFluid extends BaseProduct {
    /**
     * `"item"` or `"fluid"`.
     */
    'type': 'fluid'
    /**
     * The fluid temperature of this product.
     */
    'temperature'?: number
}

/**
 * @param type - `"item"` or `"fluid"`.
 */
interface DefaultProduct extends BaseProduct {
    /**
     * `"item"` or `"fluid"`.
     */
    'type': 'item'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseRecipePrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param category - A [LuaRecipeCategoryPrototype](LuaRecipeCategoryPrototype) name
 */
interface RecipePrototypeFilterCategory extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'category'
    /**
     * A {@link LuaRecipeCategoryPrototype | LuaRecipeCategoryPrototype} name
     */
    'category': string
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param value - The value to compare against.
 */
interface RecipePrototypeFilterEmissionsMultiplier extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'emissions-multiplier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param value - The value to compare against.
 */
interface RecipePrototypeFilterEnergy extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'energy'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param elem_filters - Matches if at least 1 ingredient is a fluid that matches these filters.
 */
interface RecipePrototypeFilterHasIngredientFluid extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'has-ingredient-fluid'
    /**
     * Matches if at least 1 ingredient is a fluid that matches these filters.
     */
    'elem_filters'?: FluidPrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param elem_filters - Matches if at least 1 ingredient is an item that matches these filters.
 */
interface RecipePrototypeFilterHasIngredientItem extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'has-ingredient-item'
    /**
     * Matches if at least 1 ingredient is an item that matches these filters.
     */
    'elem_filters'?: ItemPrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param elem_filters - Matches if at least 1 product is a fluid that matches these filters.
 */
interface RecipePrototypeFilterHasProductFluid extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'has-product-fluid'
    /**
     * Matches if at least 1 product is a fluid that matches these filters.
     */
    'elem_filters'?: FluidPrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param elem_filters - Matches if at least 1 product is an item that matches these filters.
 */
interface RecipePrototypeFilterHasProductItem extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'has-product-item'
    /**
     * Matches if at least 1 product is an item that matches these filters.
     */
    'elem_filters'?: ItemPrototypeFilter[]
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param value - The value to compare against.
 */
interface RecipePrototypeFilterOverloadMultiplier extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'overload-multiplier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param value - The value to compare against.
 */
interface RecipePrototypeFilterRequestPasteMultiplier extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'request-paste-multiplier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 * @param subgroup - A [LuaGroup](LuaGroup) (subgroup) name
 */
interface RecipePrototypeFilterSubgroup extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'subgroup'
    /**
     * A {@link LuaGroup | LuaGroup} (subgroup) name
     */
    'subgroup': string
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
 */
interface DefaultRecipePrototypeFilter extends BaseRecipePrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"hidden-from-flow-stats"`, `"hidden-from-player-crafting"`, `"allow-as-intermediate"`, `"allow-intermediates"`, `"allow-decomposition"`, `"always-show-made-in"`, `"always-show-products"`, `"show-amount-in-title"`, `"has-ingredients"`, `"has-products"`, `"has-ingredient-item"`, `"has-ingredient-fluid"`, `"has-product-item"`, `"has-product-fluid"`, `"subgroup"`, `"category"`, `"energy"`, `"emissions-multiplier"`, `"request-paste-multiplier"`, `"overload-multiplier"`
     */
    'filter': 'enabled' | 'hidden' | 'hidden-from-flow-stats' | 'hidden-from-player-crafting' | 'allow-as-intermediate' | 'allow-intermediates' | 'allow-decomposition' | 'always-show-made-in' | 'always-show-products' | 'show-amount-in-title' | 'has-ingredients' | 'has-products'
}

interface BaseTechnologyModifier {
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 * @param modifier - Modification value. This value will be added to the variable it modifies.
 */
interface TechnologyModifierOtherTypes extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'Other types'
    /**
     * Modification value. This value will be added to the variable it modifies.
     */
    'modifier': number
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 * @param ammo_category - Prototype name of the ammunition category that is affected
 * @param modifier - Modification value. This will be added to the current ammo damage modifier upon researching.
 */
interface TechnologyModifierAmmoDamage extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'ammo-damage'
    /**
     * Prototype name of the ammunition category that is affected
     */
    'ammo_category': string
    /**
     * Modification value. This will be added to the current ammo damage modifier upon researching.
     */
    'modifier': number
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 * @param count - Number of items to give. Defaults to `1`.
 * @param item - Item prototype name to give.
 */
interface TechnologyModifierGiveItem extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'give-item'
    /**
     * Number of items to give. Defaults to `1`.
     */
    'count'?: number
    /**
     * Item prototype name to give.
     */
    'item': string
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 * @param ammo_category - Prototype name of the ammunition category that is affected
 * @param modifier - Modification value. This will be added to the current gun speed modifier upon researching.
 */
interface TechnologyModifierGunSpeed extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'gun-speed'
    /**
     * Prototype name of the ammunition category that is affected
     */
    'ammo_category': string
    /**
     * Modification value. This will be added to the current gun speed modifier upon researching.
     */
    'modifier': number
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 * @param effect_description - Description of this nothing modifier.
 */
interface TechnologyModifierNothing extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'nothing'
    /**
     * Description of this nothing modifier.
     */
    'effect_description': LocalisedString
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 * @param modifier - Modification value. This will be added to the current turret damage modifier upon researching.
 * @param turret_id - Turret prototype name this modifier will affect.
 */
interface TechnologyModifierTurretAttack extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'turret-attack'
    /**
     * Modification value. This will be added to the current turret damage modifier upon researching.
     */
    'modifier': number
    /**
     * Turret prototype name this modifier will affect.
     */
    'turret_id': string
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 * @param recipe - Recipe prototype name to unlock.
 */
interface TechnologyModifierUnlockRecipe extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'unlock-recipe'
    /**
     * Recipe prototype name to unlock.
     */
    'recipe': string
}

/**
 * @param type - Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
 */
interface DefaultTechnologyModifier extends BaseTechnologyModifier {
    /**
     * Modifier type. Specifies which of the other fields will be available. Possible values are: `"inserter-stack-size-bonus"`, `"stack-inserter-capacity-bonus"`, `"laboratory-speed"`, `"character-logistic-trash-slots"`, `"maximum-following-robots-count"`, `"worker-robot-speed"`, `"worker-robot-storage"`, `"ghost-time-to-live"`, `"turret-attack"`, `"ammo-damage"`, `"give-item"`, `"gun-speed"`, `"unlock-recipe"`, `"character-crafting-speed"`, `"character-mining-speed"`, `"character-running-speed"`, `"character-build-distance"`, `"character-item-drop-distance"`, `"character-reach-distance"`, `"character-resource-reach-distance"`, `"character-item-pickup-distance"`, `"character-loot-pickup-distance"`, `"character-inventory-slots-bonus"`, `"deconstruction-time-to-live"`, `"max-failed-attempts-per-tick-per-construction-queue"`, `"max-successful-attempts-per-tick-per-construction-queue"`, `"character-health-bonus"`, `"mining-drill-productivity-bonus"`, `"train-braking-force-bonus"`, `"zoom-to-world-enabled"`, `"zoom-to-world-ghost-building-enabled"`, `"zoom-to-world-blueprint-enabled"`, `"zoom-to-world-deconstruction-planner-enabled"`, `"zoom-to-world-upgrade-planner-enabled"`, `"zoom-to-world-selection-tool-enabled"`, `"worker-robot-battery"`, `"laboratory-productivity"`, `"follower-robot-lifetime"`, `"artillery-range"`, `"nothing"`, `"character-additional-mining-categories"`, `"character-logistic-requests"`.
     */
    'type': 'inserter-stack-size-bonus' | 'stack-inserter-capacity-bonus' | 'laboratory-speed' | 'character-logistic-trash-slots' | 'maximum-following-robots-count' | 'worker-robot-speed' | 'worker-robot-storage' | 'ghost-time-to-live' | 'character-crafting-speed' | 'character-mining-speed' | 'character-running-speed' | 'character-build-distance' | 'character-item-drop-distance' | 'character-reach-distance' | 'character-resource-reach-distance' | 'character-item-pickup-distance' | 'character-loot-pickup-distance' | 'character-inventory-slots-bonus' | 'deconstruction-time-to-live' | 'max-failed-attempts-per-tick-per-construction-queue' | 'max-successful-attempts-per-tick-per-construction-queue' | 'character-health-bonus' | 'mining-drill-productivity-bonus' | 'train-braking-force-bonus' | 'zoom-to-world-enabled' | 'zoom-to-world-ghost-building-enabled' | 'zoom-to-world-blueprint-enabled' | 'zoom-to-world-deconstruction-planner-enabled' | 'zoom-to-world-upgrade-planner-enabled' | 'zoom-to-world-selection-tool-enabled' | 'worker-robot-battery' | 'laboratory-productivity' | 'follower-robot-lifetime' | 'artillery-range' | 'character-additional-mining-categories'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseTechnologyPrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
 * @param value - The value to compare against.
 */
interface TechnologyPrototypeFilterLevel extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
     */
    'filter': 'level'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
 * @param value - The value to compare against.
 */
interface TechnologyPrototypeFilterMaxLevel extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
     */
    'filter': 'max-level'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
 * @param ingredient - The research ingredient to check.
 */
interface TechnologyPrototypeFilterResearchUnitIngredient extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
     */
    'filter': 'research-unit-ingredient'
    /**
     * The research ingredient to check.
     */
    'ingredient': string
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
 * @param value - The value to compare against.
 */
interface TechnologyPrototypeFilterTime extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
     */
    'filter': 'time'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
 */
interface DefaultTechnologyPrototypeFilter extends BaseTechnologyPrototypeFilter {
    /**
     * The condition to filter on. One of `"enabled"`, `"hidden"`, `"upgrade"`, `"visible-when-disabled"`, `"has-effects"`, `"has-prerequisites"`, `"research-unit-ingredient"`, `"level"`, `"max-level"`, `"time"`
     */
    'filter': 'enabled' | 'hidden' | 'upgrade' | 'visible-when-disabled' | 'has-effects' | 'has-prerequisites'
}

/**
 * @param invert - Inverts the condition. Default is `false`.
 * @param mode - How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
 */
interface BaseTilePrototypeFilter {
    /**
     * Inverts the condition. Default is `false`.
     */
    'invert'?: boolean
    /**
     * How to combine this with the previous filter. Must be `"or"` or `"and"`. Defaults to `"or"`. When evaluating the filters, `"and"` has higher precedence than `"or"`.
     */
    'mode'?: string
}

/**
 * @param filter - The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
 * @param mask_mode - How to filter: `"collides"` or `"layers-equals"`
 */
interface TilePrototypeFilterCollisionMask extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
     */
    'filter': 'collision-mask'
    'mask': CollisionMask | CollisionMaskWithFlags
    /**
     * How to filter: `"collides"` or `"layers-equals"`
     */
    'mask_mode': string
}

/**
 * @param filter - The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
 * @param value - The value to compare against.
 */
interface TilePrototypeFilterDecorativeRemovalProbability extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
     */
    'filter': 'decorative-removal-probability'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
 * @param value - The value to compare against.
 */
interface TilePrototypeFilterEmissions extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
     */
    'filter': 'emissions'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
 * @param value - The value to compare against.
 */
interface TilePrototypeFilterVehicleFrictionModifier extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
     */
    'filter': 'vehicle-friction-modifier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
 * @param value - The value to compare against.
 */
interface TilePrototypeFilterWalkingSpeedModifier extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
     */
    'filter': 'walking-speed-modifier'
    'comparison': ComparatorString
    /**
     * The value to compare against.
     */
    'value': number
}

/**
 * @param filter - The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
 */
interface DefaultTilePrototypeFilter extends BaseTilePrototypeFilter {
    /**
     * The condition to filter on. One of `"minable"`, `"autoplace"`, `"blueprintable"`, `"item-to-place"`, `"collision-mask"`, `"walking-speed-modifier"`, `"vehicle-friction-modifier"`, `"decorative-removal-probability"`, `"emissions"`
     */
    'filter': 'minable' | 'autoplace' | 'blueprintable' | 'item-to-place'
}

