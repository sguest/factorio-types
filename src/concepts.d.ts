type Position = { x: number, y: number} | number[];

type ForceSpecification = string | LuaForce;

type PlayerSpecification = number | string | LuaPlayer;

type SurfaceSpecification = number | string | LuaSurface;

type TechnologySpecification = string | LuaTechnology | LuaTechnologyPrototype;

type ItemStackSpecification = SimpleItemStack | LuaItemStack;

type ItemPrototypeSpecification = LuaItemStack | LuaItemPrototype | string;

type FluidSpecification = Fluid | LuaFluidPrototype | string;

type EntityPrototypeSpecification = LuaEntity | LuaEntityPrototype | string;

type Vector = number[];

type SpritePath = string;

type MapSettings = PrototypeMapSettings;

type ChunkPosition = Position;

type TilePosition = Position;

type GuiLocation = Position;

type SimpleItemStack = string | {
    name: string,
    count?: number,
    health?: number,
    durability?: number,
    ammo?: number,
    tags?: string[],
};

type LocalisedString = string[] | string;

type MapGenSize = number | 'none' |
    'very-low' | 'very-small' | 'very-poor' |
    'low' | 'small' | 'poor' |
    'normal' | 'medium' | 'regular' |
    'high' | 'big' | 'good' |
    'very-high' | 'very-big' | 'very-good';

type  SoundPath = string;

type CollisionMaskLayer = 'ground-tile' | 'water-tile' | 'resource-layer' | 'doodad-layer' |
    'floor-layer' | 'item-layer' | 'ghost-layer' | 'object-layer' | 'player-layer' | 'train-layer' |
    'layer-11' | 'layer-12' | 'layer-13' | 'layer-14' | 'layer-15' | 'not-setup';

type CollisionMask = {
    [key in CollisionMaskLayer]: boolean
};

type CollisionMaskWithFlags = CollisionMask & {
    'not-colliding-with-itself': boolean,
    'consider-tile-transitions': boolean,
    'colliding-with-tiles-only': boolean,
};

type EntityPrototypeFlagValue = 'not-rotatable' | 'placeable-neutral' | 'placeable-player' | 'placeable-enemy' |
    'placeable-off-grid' | 'player-creation' | 'building-direction-8-way' | 'filtered-directions' |
    'fast-replaceable-no-build-while-moving' | 'breaths-air' | 'not-repaiable' | 'not-on-map' |
    'not-deconstructable' | 'not-blueprintable' | 'hide-from-bonus-gui' | 'hide-alt-info' |
    'fast-replaceable-no-cross-type-while-moving' | 'no-gap-fill-while-building' | 'not-flammable' |
    'no-automated-item-removal' | 'no-automated-item-insertion' | 'no-copy-paste' | 'not-selectable-in-game' |
    'not-upgradable';

type EntityPrototypeFlags = {
    [key in EntityPrototypeFlagValue]: true
};

type ItemPrototypeFlagValue = 'hidden' | 'hide-from-bonus-gui' | 'hide-from-fuel-tooltip' | 'not-stackable' |
    'can-extend-inventory' | 'primary-place-result' | 'mod-openable' | 'only-in-cursor' | 'always-show';

type ItemPrototypeFlags = {
    [key in ItemPrototypeFlagValue]: true
};

type CursorBoxRenderType = 'electricity' | 'copy' | 'not-allowed' | 'pair' | 'logistics' | 'train-visualisation';

type ComparatorString = '<' | '>' | '=' | '≥' | '≤' | '≠';

type Resistances = {
    [type in damageType]: {
        decrease: number,
        percent: number,
    }
};

interface Icon {
    icon: string
    tint: Color
}

interface Color {
    r?: number
    g?: number
    b?: number
    a?: number
}

type ColorModifier = Color;

interface Ingredient {
    type?: 'item' | 'fluid'
    name: string
    amount: number
    minimum_temperature?: number
    maximum_temperature?: number
    catalyst_amount?: number
}

interface GuiArrowSpecification {
    type: 'nowhere' | 'goal' | 'entity_info' | 'active_window' | 'entity' | 'position' | 'crafting_queue' | 'item_stack'
}

interface EntityGuiArrowSpecification extends GuiArrowSpecification {
    type: 'entity'
    entity: LuaEntity
}

interface PositionGuiArrowSpecification extends GuiArrowSpecification {
    type: 'position'
    position: Position
}

interface CraftingQueueGuiArrowSpecification extends GuiArrowSpecification {
    type: 'crafting_queue'
    crafting_queueindex: number
}

interface ItemStackGuiArrowSpecification extends GuiArrowSpecification {
    type: 'item_stack'
    inventory_index: defines.inventory
    item_stack_index: number
    source: 'player' | 'target'
}

interface MapGenSettings {
    terrain_segmentation: MapGenSize,
    water: MapGenSize,
    autoplace_controls: { [key: string]: {
        frequency: MapGenSize,
        size: MapGenSize,
        richness: MapGenSize,
    }},
    default_enable_all_autoplace_controls: boolean,
    autoplace_settings: { [key: string]: AutoplaceSettings },
    cliff_settings: CliffPlacementSettings,
    seed: number,
    width: number,
    height: number,
    starting_area: MapGenSize,
    starting_points: Position[],
    peaceful_mode: boolean,
    property_expression_names: { [key: string]: string }
}

interface AutoplaceSettings {
    treat_missing_as_default: boolean,
    settings: { [key: string]: {
        frequency: MapGenSize,
        size: MapGenSize,
        richness: MapGenSize,
    }}
}

interface CliffPlacementSettings {
    name: string,
    cliff_elevation_0: number,
    cliff_elevation_interval: number,
    richness: MapGenSize,
}

interface MapExchangeStringData {
    map_settings: MapSettings
    map_gen_settings: MapGenSettings
}

// Should have 'place-result', 'burnt-result', 'place-as-tile', 'placed-as-equipment-result'
// added in 0.18.25 but documentation is unclear on these
interface LuaEntityPrototypeFilter {
    filter: 'flying-robot' | 'robot-with-logistics-interface' | 'rail' | 'particle' | 'ghost' |
        'explosion' | 'vehicle' | 'crafting-machine' | 'rolling-stock' | 'turret' |
        'transport-belt-connectable' | 'wall-connectable' | 'buildable' | 'placeable-in-editor' |
        'clonable' | 'selectable' | 'hidden' | 'entity-with-health' | 'building' | 'fast-replaceable' |
        'uses-direction' | 'minable' | 'circuit-connectable' | 'autoplace' | 'blueprintable' |
        'type' | 'collision-mask' | 'flag' | 'crafting-category' | 'name'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaEntityPrototypeFilterType extends LuaEntityPrototypeFilter {
    filter: 'type'
    type: string
}

interface LuaEntityPrototypeFilterCollisionMask extends LuaEntityPrototypeFilter {
    filter: 'type'
    mask: CollisionMask
}

interface LuaEntityPrototypeFilterFlag extends LuaEntityPrototypeFilter {
    filter: 'type'
    flag: EntityPrototypeFlagValue
}

interface LuaEntityPrototypeFilterCrafyingCategory extends LuaEntityPrototypeFilter {
    filter: 'crafting-category'
    crafting_category: string
}

interface LuaEntityPrototypeFilterName extends LuaEntityPrototypeFilter {
    filter: 'name'
    name: string | string[]
}

interface LuaItemPrototypeFilter {
    filter: 'tool' | 'mergeable' | 'item-with-inventory' | 'selection-tool' | 'item-with-label' |
        'fuel' | 'place-as-tile' | 'place-result' | 'placed-as-equipment-result' | 'burnt-result' |
        'type' | 'flag' | 'subgroup' | 'fuel-category' | 'name' | 'has-rocket-launch-products'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaItemPrototypeFilterType {
    filter: 'type'
    type: string
}

interface LuaItemPrototypeFilterFlag {
    filter: 'flag'
    flag: ItemPrototypeFlagValue
}

interface LuaItemPrototypeFilterSubgroup {
    filter: 'subgroup'
    subgroup: string
}

interface LuaItemPrototypeFilterFuelCategory {
    filter: 'fuel-category'
    'fuel-category': string
}

interface LuaItemPrototypeFilterName extends LuaItemPrototypeFilter {
    filter: 'name'
    name: string | string[]
}

interface LuaTilePrototypeFilter {
    filter: 'minable' | 'autoplace' | 'blueprintable' | 'item-to-place' | 'collision-mask' |
        'walking-speed-modifier' | 'vehicle-friction-modifier' | 'decorative-removal-probability' |
        'emisssions'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaTilePrototypeFilterCollisionMask extends LuaTilePrototypeFilter {
    filter: 'collision-mask'
    mask: CollisionMask | CollisionMaskWithFlags
    mask_mode: 'collides' | 'layers-equals'
}

interface LuaTilePrototypeFilterWithValue extends LuaTilePrototypeFilter {
    filter: 'walking-speed-modifier' | 'vehicle-friction-modifier' | 'decorative-removal-probability' |
        'emisssions'
    comparison: ComparatorString
    value: number
}

interface LuaDecorativePrototypeFilter {
    filter: 'decal' | 'autoplace' | 'collision-mask'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaDecorativePrototypeFilterCollisionMask extends LuaDecorativePrototypeFilter {
    filter: 'collision-mask'
    mask: CollisionMask | CollisionMaskWithFlags
    mask_mode: 'collides' | 'layers-equals'
}

interface LuaFluidPrototypeFilter {
    filter: 'hidden' | 'subgroup' | 'default-temperature' | 'max-temperature' | 'heat-capacity' |
        'fuel-value' | 'emissions-multiplier' | 'gas-temperature' | 'name'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaFluidPrototypeFilterSubgroup extends LuaFluidPrototypeFilter {
    filter: 'subgroup'
    subgroup: string
}

interface LuaFluidPrototypeFilterWithValue extends LuaFluidPrototypeFilter {
    filter: 'default-temperature' | 'max-temperature' | 'heat-capacity' |
        'fuel-value' | 'emissions-multiplier' | 'gas-temperature'
    comparison: ComparatorString
    value: number
}

interface LuaFluidPrototypeFilterName extends LuaFluidPrototypeFilter {
    filter: 'name'
    name: string | string[]
}

interface LuaRecipePrototypeFilter {
    filter: 'enabled' | 'hidden' | 'hidden-from-flow-stats' | 'hidden-from-player-crafting' |
        'allow-as-intermediate' | 'allow-intermediates' | 'allow-decomposition' | 'always-show-made-in' |
        'always-show-products' | 'show-amount-in-title' | 'has-ingredients' | 'has-products' | 'subgroup' |
        'category' | 'energy' | 'emissions-multiplier' | 'request-paste-multiplier' | 'overload-multiplier' |
        'has-ingredient-item' | 'has-ingredient-fluid' | 'has-product-item' | 'has-product-fluid'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaRecipePrototypeFilterSubgroup extends LuaRecipePrototypeFilter {
    filter: 'subgroup'
    subgroup: string
}

interface LuaRecipePrototypeFilterCategory extends LuaRecipePrototypeFilter {
    filter: 'category'
    category: string
}

interface LuaRecipePrototypeFilterValue extends LuaRecipePrototypeFilter {
    filter: 'energy' | 'emissions-multiplier' | 'request-paste-multiplier' | 'overload-multiplier'
    comparison: ComparatorString
    value: number
}

interface LuaRecipePrototypeFilterItemSubFilter extends LuaRecipePrototypeFilter {
    filter: 'has-ingredient-item' | 'has-product-item'
    elem_filters?: LuaItemPrototypeFilter
}

interface LuaRecipePrototypeFilterFluidSubFilter extends LuaRecipePrototypeFilter {
    filter: 'has-ingredient-fluid' | 'has-product-fluid'
    elem_filters?: LuaFluidPrototypeFilter
}
interface LuaTechnologyPrototypeFilter {
    filter: 'enabled' | 'hidden' | 'upgrade' | 'visible-when-disabled' | 'has-effects' | 'has-prerequisites' |
        'research-unit-ingredient' | 'level' | 'max-level' | 'time'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaTechnologyPrototypeFilterResearchUnitIngredient extends LuaTechnologyPrototypeFilter {
    filter: 'research-unit-ingredient'
    ingredient: string
}

interface LuaTechnologyPrototypeFilterValue extends LuaTechnologyPrototypeFilter {
    filter: 'level' | 'max-level' | 'time'
    comparison: ComparatorString
    value: number
}

interface LuaEquipmentPrototypeFilter {
    filter: 'type'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaEquipmentPrototypeFilterType {
    filter: 'type'
    type: string
}

interface LuaModSettingPrototypeFilter {
    filter: 'type' | 'mod' | 'setting-type'
    mode?: 'or' | 'and'
    invert?: boolean
}

interface LuaModSettingPrototypeFilterType {
    filter: 'type'
    type: string
}

interface LuaModSettingPrototypeFilterMod {
    filter: 'mod'
    mod: string
}

interface LuaModSettingPrototypeFilterSettingType {
    filter: 'setting-type'
    type: 'startup' | 'runtime-global' | 'runtime-per-user'
}

interface LuaAchievementPrototypeFilter {
    filter: 'allowed-without-fight' | 'type'
    type?: 'or' | 'and'
    invert?: boolean
}

interface LuaAchievementPrototypeFilterType {
    filter: 'type'
    type: string
}

interface DifficultySettings {
    recipe_difficulty: defines.difficulty_settings.recipe_difficulty
    technology_difficulty: defines.difficulty_settings.technology_difficulty
    technology_price_multiplier: number
    research_queue_setting: 'after-victory' | 'always' | 'never'
}

interface NthTickEvent {
    tick: number
    nth_tick: number
}

interface RidingState {
    acceleration: defines.riding.acceleration
    direction: defines.riding.direction
}

interface Command {
    type: defines.command
}

interface AttackCommand extends Command {
    type: defines.command.attack
    target: LuaEntity
    distraction?: defines.distraction
}

interface GoToLocationCommand extends Command {
    type: defines.command.go_to_location
    destination?: Position
    destination_entity?: LuaEntity
    distraction?: defines.distraction
    pathfind_flags?: PathFindFlags
    radius?: number
}

interface CompoundCommand extends Command {
    type: defines.command.compound
    structure_type: defines.compound_command
    commands: Command[]
}

interface GroupCommand extends Command {
    type: defines.command.group
    group: LuaUnitGroup
    distraction?: defines.distraction
    use_group_distraction?: boolean
}

interface AttackAreaCommand extends Command {
    type: defines.command.attack_area
    destination: Position
    radius: number
    distraction?: defines.distraction
}

interface WanderCommand extends Command {
    type: defines.command.wander
    distraction?: defines.distraction
    radius?: number
    wander_in_group?: boolean
    ticks_to_wait?: number
}

interface StopCommand extends Command {
    type: defines.command.stop
    distraction?: defines.distraction
    ticks_to_wait?: number
}

interface FleeCommand extends Command {
    type: defines.command.flee
    from: LuaEntity
    distraction?: defines.distraction
}

interface BuildBaseCommand extends Command {
    type: defines.command.build_base
    destination: Position
    distraction?: defines.distraction
    ignore_planner?: boolean
}

interface PathFindFlags {
    allow_destroy_friendly_entities?: boolean
    allow_paths_through_own_entitites?: boolean
    cache?: boolean
    prefer_straight_paths?: boolean
    low_priority?: boolean
    no_break?: boolean
}

interface Offer {
    price: Ingredient[]
    offer: Modifier
}

interface Modifier {
    type: 'inserter-stack-size-bonus' | 'stack-inserter-capacity-bonus' | 'laboratory-speed' |
        'character-logistic-slots' | 'character-logistic-trash-slots' | 'maximum-following-robots-count' |
        'worker-robot-speed' | 'worker-robot-storage' | 'ghost-time-to-live' | 'turret-attack' |
        'ammo-damage' | 'give-item' | 'gun-speed' | 'unlock-recipe' | 'character-crafting-speed' |
        'character-mining-speed' | 'character-running-speed' | 'character-build-distance' |
        'character-item-drop-distance' | 'character-reach-distance' | 'character-resource-reach-distance' |
        'character-item-pickup-distance' | 'character-loot-pickup-distance' | 'character-inventory-slots-bonus' |
        'deconstruction-time-to-live' | 'character-health-bonus' | 'auto-character-logistic-trash-slots' |
        'mining-drill-productivity-bonus' | 'train-braking-force-bonus' | 'zoom-to-world-enabled' |
        'zoom-to-world-ghost-building-enabled' | 'zoom-to-world-blueprint-enabled' |
        'zoom-to-world-deconstruction-planner-enabled' | 'zoom-to-world-selection-tool-enabled' |
        'worker-robot-battery' | 'laboratory-productivity' | 'follower-robot-lifetime' | 'artillery-range' | 'nothing'
}

interface GunSpeedModifier extends Modifier {
    type: 'gun-speed'
    ammo_category: string
    modifier: number
}

interface GiveItemModifier extends Modifier {
    type: 'give-item'
    item: string
    count?: number
}

interface TurretAttackModifier extends Modifier {
    type: 'turret-attack'
    turret_id: string
    modifier: number
}

interface UnlockRecipeModifier extends Modifier {
    type: 'unlock-recipe'
    recipe: string
}

interface NothingModifier extends Modifier {
    type: 'nothing'
    effect_description: LocalisedString
}

interface OtherModifier extends Modifier {
    type: 'inserter-stack-size-bonus' | 'stack-inserter-capacity-bonus' | 'laboratory-speed' |
        'character-logistic-slots' | 'character-logistic-trash-slots' | 'maximum-following-robots-count' |
        'worker-robot-speed' | 'worker-robot-storage' | 'ghost-time-to-live' |
        'ammo-damage' | 'character-crafting-speed' |
        'character-mining-speed' | 'character-running-speed' | 'character-build-distance' |
        'character-item-drop-distance' | 'character-reach-distance' | 'character-resource-reach-distance' |
        'character-item-pickup-distance' | 'character-loot-pickup-distance' | 'character-inventory-slots-bonus' |
        'deconstruction-time-to-live' | 'character-health-bonus' | 'auto-character-logistic-trash-slots' |
        'mining-drill-productivity-bonus' | 'train-braking-force-bonus' | 'zoom-to-world-enabled' |
        'zoom-to-world-ghost-building-enabled' | 'zoom-to-world-blueprint-enabled' |
        'zoom-to-world-deconstruction-planner-enabled' | 'zoom-to-world-selection-tool-enabled' |
        'worker-robot-battery' | 'laboratory-productivity' | 'follower-robot-lifetime' | 'artillery-range'
    modifier: number
}

interface InfinityContainerFilter {
    name: string
    count?: number
    mode?: 'at-least' | 'at-most' | 'exactly'
    index: number
}

interface InfinityInventoryFilter {
    name: string
    count?: number
    mode?: 'at-least' | 'at-most' | 'exactly'
    index: number
}

interface InfinityPipeFilter {
    name: string
    percentage?: number
    temperature?: number
    mode?: 'at-least' | 'at-most' | 'exactly'
}

interface HeatSetting {
    temperature?: number
    mode?: 'at-least' | 'at-most' | 'exactly'
}

interface Signal {
    signal: SignalID
    count: number
}

interface SignalID {
    type: 'item' | 'fluid' | 'virtual'
    name?: string
}

interface LogisticFilter {
    index: number
    name: string
    count: number
}

interface Fluid {
    name: string
    amount: number
    temperature?: number
}

interface BeamTarget {
    entity?: LuaEntity
    position?: Position
}

interface BoundingBox {
    left_top: Position
    right_bottom: Position
    orientation: number
}

interface ProgrammableSpeakerParameters {
    playback_volume: number
    playback_globally: boolean
    allow_polyphony: boolean
}

interface ProgrammableSpeakerAlertParameters {
    show_alert: boolean
    show_on_map: boolean
    icon_signal_id: SignalID
    alert_message: string
}

interface Effects {
    [key: string]: EffectValue
}

interface EffectValue {
    bonus: number
}

interface TrainSchedule {
    current: number
    records: TrainScheduleRecord[]
}

interface TrainScheduleRecord {
    station?: string
    rail?: LuaEntity
    wait_conditions: WaitCondition[]
    temporary?: true
}

interface WaitCondition {
    type: 'time' | 'inactivity' | 'full' | 'empty' | 'item_count' | 'circuit' |
        'robots_inactive' | 'fluid_count' | 'passenger_present' | 'passenger_not_present'
    compare_type: 'and' | 'or'
    ticks?: number
    condition?: CircuitCondition
}

interface CircuitCondition {
    comparator?: ComparatorString
    first_signal?: SignalID
    second_signal?: SignalID
    constant?: number
}

interface ConstantCombinatorParameters {
    signal: SignalID,
    count: number,
    index: number,
}

interface CircuitConditionSpecification {
    condition: CircuitCondition
    fulfilled?: boolean
}

interface ProgrammableSpeakerCircuitParameters {
    signal_value_is_pitch: boolean
    instrument_id: number
    node_id: number
}

interface ArithmeticCombinatorParameters {
    first_signal?: SignalID
    second_signal?: SignalID
    first_constant?: number
    second_constant?: number
    operation?: '*' | '/' | '+' | '-' | '%' | '^' | '<<' | '>>' | 'AND' | 'OR' | 'XOR'
    output_signal?: SignalID
}

interface DeciderCombinatorParameters {
    first_signal?: SignalID
    second_signal?: SignalID
    constant?: number
    comparator?: ComparatorString
    output_signal?: SignalID
    copy_count_from_input?: boolean
}

interface Product {
    type: 'item' | 'fluid'
    name: string
    amount?: number
    temperature?: number
    amount_min?: number
    amount_max?: number
    probability?: number
    catalyst_amount?: number
}

interface Trigger {
    [key: number]: TriggerItem
}

interface TriggerItem {
    type: 'direct' | 'area' | 'line' | 'cluster'
    action_delivery?: TriggerDelivery[]
    source_effects: TriggerEffectItem[]
    entity_flags?: EntityPrototypeFlags
    collision_mask: CollisionMask
    force: 'all' | 'enemy' | 'ally'
    repeat_count: number
}

interface TriggerDelivery {
    type: 'instant' | 'projectile' | 'flame-thrower' | 'beam' | 'stream'
    source_effect: TriggerEffectItem[]
    target_effect: TriggerEffectItem[]
}

interface TriggerEffectItem {
    type?: 'damage' | 'create-entity' | 'create-explosion' | 'create-fire' |
        'create-smoke' | 'create-particle' | 'create-sticker' | 'nested-result' | 'play-sound'
    repeat_count?: number
    affects_target?: boolean
}

interface LootItem {
    item: string
    probability: number
    count_min: number
    count_max: number
}

interface AutoplaceSpecification {
    probability_expression: NoiseExpression
    richness_expression: NoiseExpression
    sharpness: number
    max_probability: number
    placement_density: number
    richness_base: number
    richness_multiplier: number
    order: string
    peaks?: Array<{
        influence: number,
        max_influence: number,
        min_influence: number,
        richness_influence: number,
        noisePersistence: number,
        noise_layer?: string,
        noise_octaves_difference: number,
        d_optimal: number,
        d_range: number,
        d_top_property_limit: number,
        d_max_range: number,
    }>
    control?: string
    tile_restriction?: Array<{
        first?: string,
        second?: string,
    }>
    size_control_multiplier: number
    force: string
    random_probability_penalty: number
}

interface NoiseExpression {
    type: string
}

interface ProgrammableSpeakerInstrument {
    name: string
    notes: string[]
}

interface FluidBoxConnection {
    max_underground_distance?: number
    type: 'input' | 'output' | 'input-output'
    positions: Vector[]
}

// Not sure what this is, referenced in documentation for LuaHeatEnergySourcePrototype
interface Connection {
}

interface GameViewSettings {
    show_controller_gui: boolean
    snow_minimap: boolean
    show_research_info: boolean
    show_entity_info: boolean
    show_alert_gui: boolean
    update_entity_selection: boolean
    show_rail_block_visualisation: boolean
    show_side_menu: boolean
    show_map_view_options: boolean
    show_quickbar: boolean
    show_shortcut_bar: boolean
}

interface DisplayResolution {
    width: number
    height: number
}

interface MapViewSettings {
    'show-logistic-network'?: boolean
    'show-electric-network'?: boolean
    'show-turret-range'?: boolean
    'show-pollution'?: boolean
    'show-train-station-names'?: boolean
    'show-player-names'?: boolean
    'show-networkless-logistic-members'?: boolean
    'show-non-standard-map-info'?: boolean
}

interface Filter {
    index: number
    name: string
}

interface CreateEntityParams {
    name: string
    position: Position
    direction?: defines.direction
    force?: ForceSpecification
    target?: LuaEntity
    source?: LuaEntity
    fast_replace?: boolean
    player?: PlayerSpecification
    spill?: boolean
    raise_built?: boolean
    create_build_effect_smoke?: boolean
}

interface CreateAssemblingMachineEntityParams extends CreateEntityParams {
    recipe?: string
}

interface CreateBeamEntityParams extends CreateEntityParams {
    target_position?: Position
    source_position?: Position
    max_length?: number
    duration?: number
    source_offset?: Vector
}

interface CreateContainerEntityParams extends CreateEntityParams {
    bar?: number
}

interface CreateFlyingTextEntityParams extends CreateEntityParams {
    text: LocalisedString
    color?: Color
    render_player_index?: number
}

interface CreateGhostEntityParams extends CreateEntityParams {
    inner_name?: string
    expires?: boolean
}

interface CreateFireEntityParams extends CreateEntityParams {
    initial_ground_flame_count: number
}

interface CreateInserterEntityParams extends CreateEntityParams {
    conditions: {
        circuit?: CircuitCondition,
        logistics?: CircuitCondition,
    },
    filters: Filter[]
}

interface CreateItemEntityParams extends CreateEntityParams {
    stack: SimpleItemStack
}

interface CreateItemRequestProxyEntityParams extends CreateEntityParams {
    target: LuaEntity
    modules: {[key: string]: number }
}

interface CreateLocomotiveEntityParams extends CreateEntityParams {
    snap_to_train_stop?: boolean
}

interface CreateLogisticContainerEntityParams extends CreateEntityParams {
    request_filters?: Filter[]
}

interface CreateParticleEntityParams extends CreateEntityParams {
    movement: Vector
    height: number
    vertical_speed: number
    frame_speed: number
}

interface CreateProjectileEntityParams extends CreateEntityParams {
    speed: number
    max_range: number
}

interface CreateResourceEntityParams extends CreateEntityParams {
    amount: number
    enable_tree_removal?: boolean
    enable_cliff_removal?: boolean
    snap_to_tile_center?: boolean
}

interface CreateUndergroundBeltEntityParams extends CreateEntityParams {
    type?: 'output' | 'input'
}

interface CreateProgrammableSpeakerEntityParams extends CreateEntityParams {
    parameters?: ProgrammableSpeakerParameters
    alert_parameters?: ProgrammableSpeakerAlertParameters
}

interface CreateCharacterCorpseEntityParams extends CreateEntityParams {
    inventory_size?: number
    player_index?: number
}

interface CreateHighlightBoxEntityParams extends CreateEntityParams {
    bounding_box?: BoundingBox
    box_type?: CursorBoxRenderType
    render_player_index?: number
    blink_interval?: number
    time_to_live?: number
}

interface CreateSimpleEntityWithOwnerParams extends CreateEntityParams {
    render_player_index?: number
}

interface ScriptArea {
    area: BoundingBox
    name: string
    color: Color
    id: number
}

interface ScriptPosition {
    position: Position
    name: string
    color: Color
    id: number
}

interface PlaceAsTileResult {
    result: LuaTilePrototype
    condition_size: number
    condition: object // table structure not specified in docs
}

type selectionModeFlagType = 'blueprint' | 'deconstruct' | 'cancel-deconstruct' | 'items' | 'trees' |
    'buildable-type' | 'nothing' | 'items-to-place' | 'any-entity' | 'any-tile' | 'same-force' | 'not-same-force' |
    'friend' | 'enemy' | 'upgrade' | 'cancel-upgrade' | 'entity-with-health' | 'entity-with-force' |
    'entity-with-owner';
type SelectionModeFlags = {[key in selectionModeFlagType]: true };

interface UpgradeFilter {
    type: 'item' | 'entity'
    name?: string
}

type MouseButtonFlagKey = 'left' | 'right' | 'left-and-right' | 'middle' | 'button-4' | 'button-5' |
    'button-6' | 'button-7' | 'button-8' | 'button-9';

type MouseButtonFlags = MouseButtonFlagKey[] | {
    [key in MouseButtonFlagKey]: true
};

type Alignment = 'top-left' | 'middle-left' | 'left' | 'bottom-left' | 'top-center' | 'middle-center' |
    'center' | 'bottom-center' | 'top-right' | 'middle-right' | 'right' | 'bottom-right';

interface ModSetting {
    value: number | string | boolean
}

interface ScriptRenderTarget {
    entity?: LuaEntity
    entity_offset?: Vector
    position?: Position
}

interface Tags {
    [key: string]: string | boolean | number | object
}

interface OldTileAndPosition {
    old_tile: LuaTilePrototype
    position: TilePosition
}

interface GuiAnchor {
    gui: defines.relative_gui_type
    position: defines.relative_gui_position
    type?: string
    name?: string
    names?: string[]
}

interface ItemStackLocation {
    inventory: defines.inventory
    slot: number
}

interface VehicleAutomaticTargetingParameters {
    auto_target_without_gunner: boolean
    auto_target_with_gunner: boolean
}
