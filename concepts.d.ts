type Position = { x: number, y: number} | number[]

type ForceSpecification = string | LuaForce

type PlayerSpecification = number | string | LuaPlayer

type SurfaceSpecification = number | string | LuaSurface

type TechnologySpecification = string | LuaTechnology | LuaTechnologyPrototype

type LocalisedString = string[] | string

type MapGenSize = number | 'none' |
    'very-low' | 'very-small' | 'very-poor' |
    'low' | 'small' | 'poor' |
    'normal' | 'medium' | 'regular' |
    'high' | 'big' | 'good' | 
    'very-high' | 'very-big' | 'very-good'

type  SoundPath = string

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
    default_enable_all_autoplace_controls:boolean,
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