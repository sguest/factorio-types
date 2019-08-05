type Position = { x: number, y: number} | number[];

type ForceSpecification = string | LuaForce;

type PlayerSpecification = number | string | LuaPlayer;

type SurfaceSpecification = number | string | LuaSurface;

type TechnologySpecification = string | LuaTechnology | LuaTechnologyPrototype;

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
