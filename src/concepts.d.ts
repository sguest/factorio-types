type Position = { x: number, y: number} | number[];

type ForceSpecification = string | LuaForce;

type PlayerSpecification = number | string | LuaPlayer;

type SurfaceSpecification = number | string | LuaSurface;

type TechnologySpecification = string | LuaTechnology | LuaTechnologyPrototype;

type ItemStackSpecification = SimpleItemStack | LuaItemStack;

type ItemPrototypeSpecification = LuaItemStack | LuaItemPrototype | string;

type EntityPrototypeSpecification = LuaEntity | LuaEntityPrototype | string;

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
    'can-extend-inventory' | 'primary-place-result' | 'mod-openable' | 'only-in-cursor';

type ItemPrototypeFlags = {
    [key in ItemPrototypeFlagValue]: true
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

interface Resistance {
    type: damageType
    decrease: number
    percent: number
}

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

interface LuaEntityPrototypeFilter {
    filter: 'flying-robot' | 'robot-with-logistics-interface' | 'rail' | 'particle' | 'ghost' |
        'explosion' | 'vehicle' | 'crafting-machine' | 'rolling-stock' | 'turret' |
        'transport-belt-connectable' | 'wall-connectable' | 'buildable' | 'placeable-in-editor' |
        'clonable' | 'selectable' | 'hidden' | 'entity-with-health' | 'building' | 'fast-replaceable' |
        'uses-direction' | 'minable' | 'circuit-connectable' | 'autoplace' | 'blueprintable' |
        'type' | 'collision-mask' | 'flag'
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

interface LuaItemPrototypeFilter {
    filter: 'tool' | 'mergeable' | 'item-with-inventory' | 'selection-tool' | 'item-with-label' |
        'fuel' | 'place-as-tile' | 'place-result' | 'placed-as-equipment-result' | 'burnt-result' |
        'type' | 'flag' | 'subgroup' | 'fuel-category'
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
    cache?: boolean
    prefer_straight_paths?: boolean
    low_priority?: boolean
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
    comparator?: '<' | '>' | '=' | '≥' | '≤' | '≠'
    first_signal?: SignalID
    second_signal?: SignalID
    constant?: number
}
