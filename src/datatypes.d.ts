type Energy = string;
type ItemStackIndex = number;
type FileName = string;
type SpriteSizeType = number;
type Order = string;
type ItemCountType = number;
type Vector3D = number[];
type MaterialAmountType = number;

// Copy of all prototype data
type MapGenPreset = any;

type damageType = 'physical' | 'impact' | 'poison' | 'explosion' | 'fire' | 'laser' | 'acid' | 'electric';

type ElectricUsagePriority = 'primary-input' | 'primary-output' |
    'secondary-input' | 'secondary-output' | 'tertiary' | 'solar' | 'lamp';

type SpriteFlags = Array<'no-crop' | 'not-compressed' | 'always-compressed' | 'mipmap' |
    'linear-minification' | 'linear-magnification' | 'linear-mip-level' | 'alpha-mask' |
    'no-scale' | 'mask' | 'icon' | 'gui' | 'light' | 'terrain' | 'shadow' | 'smoke' | 'decal' |
    'low-object' | 'trilinear-filtering' | 'compressed'>;

type EffectTypeLimitation = Array<'speed' | 'productivity' | 'consumption' | 'pollution'>;

type AnimationPriority = 'extra-high-no-scale' | 'extra-high' | 'high' | 'medium' | 'low' | 'very-low';

type AnimationBlendMode = 'normal' | 'additive' | 'additive-soft' | 'multiplicative' | 'overwrite';

type ConsumingType = 'none' | 'game-only';

type RotatedAnimationVariations = AnimationVariations | AnimationVariations[];

type TriggerEffect = TriggerEffectItem | TriggerEffectItem[];

declare enum Direction {
    North = 0,
    Northeast = 1,
    East = 2,
    Southeast = 3,
    South = 4,
    Southwest = 5,
    West = 6,
    Northwest = 7,
}

interface EnergySource {
    type: string
    emissions_per_minute?: number
    emissions_per_second_per_watt?: number
    emissions?: number
    render_no_power_icon?: boolean
    render_no_network_icon?: boolean
}

interface ElectricEnergySource extends EnergySource {
    buffer_capacity?: Energy
    usage_priority: ElectricUsagePriority
    input_flow_limit?: Energy
    output_flow_limit?: Energy
    drain?: Energy
}

interface BurnerEnergySource extends EnergySource {
    fuel_inventory_size: ItemStackIndex
    burnt_inventory_size?: ItemStackIndex
    smoke?: SmokeSource
    light_flicker?: LightFlickeringDefinition
    effectivity?: number
    fuel_category?: string
    fuel_categories?: string[]
}

interface HeatEnergySource extends EnergySource {
    max_temperature: number
    default_temperature?: number
    specific_heat: Energy
    max_transfer: Energy
    min_temperature_gradient?: number
    min_working_temperature?: number
    connections?: HeatConnection[]
    pipe_covers?: Sprite4Way
}

interface VoidEnergySource extends EnergySource {
}

interface FluidEnergySource extends EnergySource {
    fluid_box: FluidBox
    smoke?: SmokeSource[]
    light_flicker?: LightFlickeringDefinition
    effectivity?: number
    burns_fluid?: boolean
    scale_fluid_usage?: boolean
    fluid_usage_per_tick?: number
    maximum_temperature?: number
}

interface SmokeSource {
    name: string
    frequency: number
    offset: number
    position?: Vector
    north_position?: Vector
    east_position?: Vector
    south_position?: Vector
    west_position?: Vector
    deviation?: Position
    starting_frame_speed: number
    starting_frame_speed_deviation: number
    starting_frame: number
    starting_frame_deviation: number
    slow_down_factor: number
    height: number
    height_deviation: number
    starting_vertical_speed: number
    starting_vertical_speed_deviation: number
    vertical_speed_slowdown: number
}

interface LightFlickeringDefinition {
    minimum_intensity?: number
    maximum_intensity?: number
    derivation_change_frequency?: number
    derivation_change_deviation?: number
    border_fix_speed?: number
    minimum_light_size?: number
    light_intensity_to_size_coefficient?: number
    color?: Color
}

interface HeatConnection {
    position: Position
    direction: Direction
}

interface Sprite4Way {
    north?: Sprite
    east: Sprite
    south: Sprite
    west: Sprite
    sheets?: SpriteNWaySheet[]
    sheet?: SpriteNWaySheet
}

interface Sprite {
    filename?: FileName
    layers?: Sprite[]
    hr_version?: Sprite
    dice?: SpriteSizeType
    dice_x?: SpriteSizeType
    dice_y?: SpriteSizeType
    priority?: AnimationPriority
    flags?: SpriteFlags
    size?: SpriteSizeType | SpriteSizeType[]
    width?: SpriteSizeType
    height?: SpriteSizeType
    x?: SpriteSizeType
    y?: SpriteSizeType
    position?: SpriteSizeType[]
    shift?: Vector
    scale?: number
    draw_as_shadow?: boolean
    mipmap_count?: number
    apply_runtime_tint?: boolean
    tint?: Color
    blend_mode?: AnimationBlendMode
    load_in_minimal_mode?: boolean
    premul_alpha?: boolean
    generate_sdf?: boolean
}

interface RotatedSprite extends Sprite {
    filenames?: FileName[]
    direction_count: number
    axially_symmetrical?: boolean
    back_equals_front?: boolean
    apply_projection?: boolean
    line_length?: number
    allow_low_quality_rotation?: boolean
    lines_per_file?: number
    counterclockwise?: boolean
}

interface SpriteNWaySheet {
    type?: FileName
    width: SpriteSizeType
    height: SpriteSizeType
    frames?: number
    hr_version?: SpriteNWaySheet
    priority?: AnimationPriority
    flags?: SpriteFlags
    size?: SpriteSizeType | SpriteSizeType[]
    x?: SpriteSizeType
    y?: SpriteSizeType
    position?: SpriteSizeType[]
    shift?: Vector
    scale?: number
    draw_as_shadow?: boolean
    mipmap_count?: number
    apply_runtime_tint?: boolean
    tint?: Color
    blend_mode?: AnimationBlendMode
    load_in_minimal_mode?: boolean
    premul_alpha?: boolean
    generate_sdf?: boolean
}

interface FluidBox {
    pipe_connections: PipeConnectionDefinition[]
    base_area?: number
    base_level?: number
    height?: number
    filter?: string
    render_layer?: RenderLayer
    pipe_covers?: Sprite4Way
    pipe_picture?: Sprite4Way
    minimum_temperature?: number
    maximum_temperature?: number
    production_type?: 'None' | 'input' | 'input-output' | 'output'
    secondary_draw_order?: number
    secondary_draw_orders?: number[]
}

interface PipeConnectionDefinition {
    position?: Vector
    positions?: Vector[]
    max_underground_distance?: number
    type?: 'input' | 'input-output' | 'output'
}

interface Animation {
    frame_count: number
    layers?: Animation[]
    hr_version?: Animation
    filename?: FileName
    priority?: AnimationPriority
    flags?: SpriteFlags
    size?: SpriteSizeType | SpriteSizeType[]
    x?: SpriteSizeType
    y?: SpriteSizeType
    position?: SpriteSizeType[]
    shift?: Vector
    scale?: number
    draw_as_shadow?: boolean
    mipmap_count?: number
    apply_runtime_tint?: boolean
    tint?: Color
    blend_mode?: AnimationBlendMode
    load_in_minimal_mode?: boolean
    premul_alpha?: boolean
    generate_sdf?: boolean
    run_mode?: 'forward' | 'backward' | 'forward-then-backward'
    line_length?: number
    animation_speed?: number
    max_advance?: number
    repeat_count?: number
    stripes?: Stripe[]
}

interface Stripe {
    type: number
    filename: FileName
    x?: number
    y?: number
}

interface LightDefinition {
    type: 'basic' | 'oriented'
    intensity: number
    size: number
    picture?: Sprite
    rotation_shift?: number
    color?: Color
    add_perspective?: boolean
    shift?: Vector
    minimum_darkness?: number
}

interface CircuitConnectorSprites {
    led_red: Sprite
    led_green: Sprite
    led_blue: Sprite
    led_light: Sprite
    connector_main?: Sprite
    connector_shadow?: Sprite
    wire_pins?: Sprite
    wire_pins_shadow?: Sprite
    led_blue_off?: Sprite
    blue_led_light_offset?: Vector
    red_green_led_light_offset?: Vector
}

interface WireConnectionPoint {
    wire: WirePosition
    shadow: WirePosition
}

interface WirePosition {
    copper?: Vector
    red?: Vector
    green?: Vector
}

interface SignalIDConnector {
    type: 'virtual' | 'item' | 'fluid'
    name: string
}

interface IconData {
    icon: FileName
    icon_size?: SpriteSizeType
    tint?: Color
    shift?: Vector
    scale?: number
    icon_mipmaps?: number
}

interface BaseAttackParameters {
    range: number
    cooldown: number
    min_range?: number
    turn_range?: number
    fire_penalty?: number
    min_attack_distance?: number
    damage_modifier?: number
    ammo_consumption_modifier?: number
    cooldown_deviation?: number
    warmup?: number
    lead_target_for_projectile_speed?: number
    movement_slow_down_factor?: number
    ammo_type?: AmmoType
    ammo_category?: string
    sound?: Sound
    animation?: RotatedAnimation
    cyclic_sound?: {
        begin_sound: Sound,
        middle_sound: Sound,
        end_sound: Sound,
    }
    use_shooter_direction: boolean
}

interface AttackParameters extends BaseAttackParameters {
    type: 'projectile' | 'beam' | 'stream'
}

interface ProjectileAttackParameters extends AttackParameters {
    type: 'projectile'
    projectile_center?: Vector
    projectile_creation_distance?: number
    shell_particle?: CircularParticleCreationSpecification
    projectile_creation_parameters?: Array<Array<RealOrientation | Vector>>
}

interface BeamAttackParameters extends AttackParameters {
    type: 'beam'
    source_direction_count?: number
    source_offset?: Vector
}

interface StreamAttackParameters extends AttackParameters {
    type: 'stream'
    fluid_consumtion?: number
    gun_barrel_length?: number
    projectile_creation_parameters?: Array<Array<RealOrientation | Vector>>
    gun_center_shift?: Vector | {
        north: Vector,
        east: Vector,
        south: Vector,
        west: Vector,
    }
    fluids?: Array<{
        type: string,
        damage_modifier?: number,
    }>
}

type Sound = SoundSingleton | SoundVariation[];

interface SoundSingleton {
    aggregation?: {
        max_count: number,
        progress_threshold?: number,
        remove: boolean,
        count_already_playing?: boolean,
    },
    audible_distance_modifer?: number
    varations?: SoundVariation[]
    filename?: FileName
    volume?: number
    preload?: boolean
}

interface SoundVariation {
    filename: FileName
    volume?: number
    preload?: boolean
}

interface RotatedAnimation extends Animation {
    direction_count: number
    width?: SpriteSizeType
    height?: SpriteSizeType
    still_frame?: number
    axially_symmetrical?: boolean
    counterclockwise?: boolean
    middle_orientation?: RealOrientation
    orientation_range?: number
    apply_projection?: boolean
}

interface Animation4Way {
    north?: Animation
    east: Animation
    south: Animation
    west: Animation
}

interface ModuleSpecification {
    module_slots?: number
    module_info_max_icons_per_row?: number
    module_info_max_icon_rows?: number
    module_info_icon_shift?: Vector
    module_info_icon_scale?: number
    module_info_separation_multiplier?: number
    module_info_multi_row_initial_height_modifier?: number
}

interface AnimationVariation extends Animation {
    variation_count: number
    line_length?: number
}

type AnimationVariations = Animation[] | {
    sheet: AnimationVariation,
};

interface CapsuleAction {
    type: 'throw' | 'equipment-remote' | 'use-on-self' | 'artillery-remote' | 'destroy-cliffs'
}

interface ThrowCapsuleAction extends CapsuleAction {
    type: 'throw'
    attack_parameters: AttackParameters
    uses_stack?: boolean
}

interface ActivateEquipmentCapsuleAction extends CapsuleAction {
    type: 'equipment-remote'
    equipment: string
}

interface UseOnSelfCapsuleAction extends CapsuleAction {
    type: 'use-on-self'
    attack_parameters: AttackParameters
    uses_stack?: boolean
}

interface ArtilleryRemoteCapsuleAction extends CapsuleAction {
    type: 'artillery-remote'
    flare: string
    play_sound_on_failure?: boolean
}

interface DestroyCliffsCapsuleAction extends CapsuleAction {
    type: 'destroy-cliffs'
    attack_parameters: AttackParameters
    radius: number
    play_sound_on_failure?: boolean
    uses_stack?: boolean
}

interface CharacterArmorAnimation {
    idle: RotatedAnimation
    idle_with_gun: RotatedAnimation
    running: RotatedAnimation
    running_with_gun: RotatedAnimation
    mining_with_tool: RotatedAnimation
    armors?: string[]
}

interface DamageTriggerEffectItem extends TriggerEffectItem {
    damage: DamagePrototype
    apply_damage_to_trees?: boolean
}

interface CreateEntityTriggerEffectItem extends TriggerEffectItem {
    entity_name: string
    offset_deviation?: BoundingBox
    trigger_created_entity?: boolean
    check_buildability?: boolean
    show_in_tooltip?: boolean
    tile_collision_mask?: CollisionMask
    offsets?: Vector[]
}

interface CreateExplosionTriggerEffectItem extends CreateEntityTriggerEffectItem {
}

interface CreateFireTriggerEffectItem extends CreateEntityTriggerEffectItem {
    initial_ground_flame_count?: number
}

interface CreateSmokeTriggerEffectItem extends CreateEntityTriggerEffectItem {
    initial_height?: number
    speed?: Vector
    speed_multiplier?: number
    speed_multiplier_deviation?: number
    starting_frame?: number
    starting_frame_deviation?: number
    starting_frame_speed?: number
    starting_frame_speed_deviation?: number
    speed_from_center?: number
    speed_from_center_deviation?: number
}

interface CreateParticleTriggerEffectItem extends CreateEntityTriggerEffectItem {
    initial_height?: number
    initial_height_deviation?: number
    initial_vertical_speed?: number
    initial_vertical_speed_deviation?: number
    speed_from_center?: number
    speed_from_center_deviation?: number
    frame_speed?: number
    frame_speed_deviation?: number
}

interface CreateTrivialSmokeEffectItem extends TriggerEffectItem {
    smoke_name: string
    offset_deviation?: number
    offsets?: Vector[]
    initial_height?: number
    max_radius?: number
    speed?: Vector
    speed_multiplier?: number
    speed_multiplier_deviation?: number
    starting_frame?: number
    starting_frame_deviation?: number
    starting_frame_speed?: number
    starting_frame_speed_deviation?: number
    speed_from_center?: number
    speed_from_center_deviation?: number
}

interface CreateStickerTriggerEffectItem extends TriggerEffectItem {
    sticker: string
    trigger_created_entity?: boolean
}

interface NestedTriggerEffectItem extends TriggerEffectItem {
    action: Trigger
}

interface PlaySoundTriggerEffectItem extends TriggerEffectItem {
    sound: Sound
}

interface PushBackTriggerEffectItem extends TriggerEffectItem {
    distance: number
}

interface DestroyCliffsTriggerEffectItem extends TriggerEffectItem {
    radius: number
    explosion?: string
}

interface ShowExplosionOnChartTriggerEffectItem extends TriggerEffectItem {
    scale: number
}

interface InsertItemTriggerItem extends TriggerEffectItem {
    item: string
    count?: number
}

interface DamagePrototype {
    amount: number
    type: string
}

interface OrientedCliffPrototype {
    type: BoundingBox
    pictures: SpriteVariations
    fill_volume: number
}

type SpriteVariations = SpriteVariation | SpriteVariation[];

interface SpriteVariation extends Sprite {
    variation_count?: number
    repeat_count?: number
    line_length?: number
}

interface WorkingVisualisation {
    light?: LightDefinition
    effect?: 'flicker' | 'uranium-glow' | 'none'
    apply_recipe_tint?: 'primary' | 'secondary' | 'tertiary' | 'none'
    north_animation?: Animation
    west_animation?: Animation
    south_animation?: Animation
    east_animation?: Animation
    animation?: Animation
    north_position?: Vector
    west_position?: Vector
    south_position?: Vector
    east_position?: Vector
}

type SpawnPoint = number[] | {
    evolution_factor: number
    spawn_weight: number,
};

interface MinableProperties {
    mining_time: number
    fluid_amount?: number
    mining_particle?: string
    required_fluid?: string
    results?: ProductPrototype[]
    result?: string
    count?: number
    mining_trigger?: Trigger
}

interface ProductPrototype {
    type?: 'item' | 'fluid'
}

type ItemProductPrototype = Array<string | number> | ItemProductPrototypeTable;

interface ItemProductPrototypeTable extends ProductPrototype {
    type?: 'item'
    name: string
    amount?: number
    probability?: number
    amount_min?: number
    amount_max?: number
    catalyst_amount?: number
}

interface FluidProductPrototype extends ProductPrototype {
    type: 'fluid'
    name: string
    probability?: number
    amount?: number
    amount_min?: number
    amount_max?: number
    temperature?: number
    catalyst_amount?: number
    fluidbox_index?: number
}

interface ItemToPlace {
    item: string
    count: number
}

interface WorkingSound {
    sound: Sound
    apparent_volume?: number
    max_sounds_per_type?: number
    match_progress_to_activity?: boolean
    match_volume_to_activity?: boolean
    match_speed_to_activity?: boolean
    audible_distance_modifier?: number
    probability?: number
    persistent?: boolean
    idle_sound?: Sound
    activate_sound?: Sound
    deactivate_sound?: Sound
}

type AttackReaction = AttackReactionItem[];

interface AttackReactionItem {
    range: number
    action?: Trigger
    reaction_modifier?: number
    damage_type?: damageType
}

interface EquipmentShape {
    width: number
    height: number
    type: 'full' | 'manual'
    points?: number[][]
}

interface AnimatedVector {
    rotations: Array<{
        frames: Vector[],
        render_layer?: RenderLayer,
    }>
    render_layer?: RenderLayer
    direction_shift?: {
        north: Vector,
        east: Vector,
        south: Vector,
        west: Vector,
    }
}

interface HeatBuffer {
    max_temperature: number
    specific_heat: Energy
    max_transfer: Energy
    default_temperature?: number
    min_temperature_gradient?: number
    min_working_temperature?: number
    pipe_covers?: Sprite4Way
    connections?: HeatConnection[]
}

interface ConnectableEntityGraphics {
    single: SpriteVariations
    straight_vertical: SpriteVariations
    straight_horizontal: SpriteVariations
    corner_right_down: SpriteVariations
    corner_left_down: SpriteVariations
    corner_right_up: SpriteVariations
    corner_left_up: SpriteVariations
    t_up: SpriteVariations
    t_right: SpriteVariations
    t_down: SpriteVariations
    t_left: SpriteVariations
    ending_up: SpriteVariations
    ending_right: SpriteVariations
    ending_down: SpriteVariations
    ending_left: SpriteVariations
    cross: SpriteVariations
}

interface PlaceAsTile {
    result: string
    condition: CollisionMask
    condition_size: number
}

interface SignalColorMapping {
    type: string
    name: string
    color: Color
}

interface Effect {
    consumption: { bonus?: number }
    speed: { bonus?: number }
    productivity: { bonus?: number }
    pollution: { bonus?: number }
}

interface EffectParams {
    smoothstep_min: number
    smoothstep_max: number
    minimum: number
    maximum: number
}

type ConnectorGraphicsType = 'standup_base' | 'standup_top' | 'standup_shadow' | 'connector' | 'connector_shadow';

interface ConnectorGraphics {
    north: {[key in ConnectorGraphicsType]: Animation }
    east: {[key in ConnectorGraphicsType]: Animation }
    south: {[key in ConnectorGraphicsType]: Animation }
    west: {[key in ConnectorGraphicsType]: Animation }
}

type IngredientPrototype = IngredientPrototypeTable | Array<string | number>;

interface IngredientPrototypeTable {
    type?: 'item' | 'fluid'
}

interface ItemIngredientPrototypeTable extends IngredientPrototypeTable {
    type?: 'item'
    name: string
    amount: number
    catalyst_amount?: number
}

interface FluidIngredientPrototype extends IngredientPrototypeTable {
    type: 'fluid'
    name: string
    amount: number
    temperature?: number
    minimum_temperature?: number
    maximum_temperature?: number
    catalyst_amount?: number
    fluidbox_index?: number
}

interface Transitions {
    side: RotatedAnimation
    side_mask: RotatedAnimation
    inner_corner: RotatedAnimation
    inner_corner_mask: RotatedAnimation
    outer_corner: RotatedAnimation
    outer_corner_mask: RotatedAnimation
    empty_transitions?: boolean
    side_background?: RotatedAnimation
    side_weights?: number[]
    inner_corner_background?: RotatedAnimation
    inner_corner_weights?: number[]
    outer_corner_background?: RotatedAnimation
    outer_corner_weights?: number[]
    u_transition?: RotatedAnimation
    u_transition_mask?: RotatedAnimation
    u_transition_background?: RotatedAnimation
    u_transition_weights?: number[]
    o_transition?: Animation
    o_transition_mask?: Animation
    o_transition_background?: Animation
    watch_patch?: Sprite
    layer?: number
    background_layer_group?: 'zero' | 'water' | 'water-overlay' | 'ground' | 'top'
    background_layer_offset?: number
    offset_background_layer_by_tile_layer?: boolean
}

interface TransportBeltConnectorFrame {
    frame_main: AnimationVariations
    frame_shadow: AnimationVariations
    frame_back_patch: SpriteVariations
    frame_front_patch: SpriteVariations
    frame_main_scanner: Animation
    frame_main_scanner_movement_speed: number
    frame_main_scanner_horizontal_start_shift: Vector
    frame_main_scanner_horizontal_end_shift: Vector
    frame_main_scanner_horizontal_y_scale: number
    frame_main_scanner_horizontal_rotation: RealOrientation
    frame_main_scanner_vertical_start_shift: Vector
    frame_main_scanner_vertical_end_shift: Vector
    frame_main_scanner_vertical_y_scale: number
    frame_main_scanner_vertical_rotation: RealOrientation
    frame_main_scanner_cross_horizontal_start_shift: Vector
    frame_main_scanner_cross_horizontal_end_shift: Vector
    frame_main_scanner_cross_horizontal_y_scale: number
    frame_main_scanner_cross_horizontal_rotation: RealOrientation
    frame_main_scanner_cross_vertical_start_shift: Vector
    frame_main_scanner_cross_vertical_end_shift: Vector
    frame_main_scanner_cross_vertical_y_scale: number
    frame_main_scanner_cross_vertical_rotation: RealOrientation
    frame_main_scanner_nw_ne: Animation
    frame_main_scanner_sw_se: Animation
}

interface TreePrototypeVariation {
    trunk: Animation
    shadow: Animation
    leaves: Animation
    leaf_generation: CreateParticleTriggerEffectItem
    branch_generation: CreateParticleTriggerEffectItem
}

interface RotatedAnimation4Way {
    north?: RotatedAnimation
    east: RotatedAnimation
    south: RotatedAnimation
    west?: RotatedAnimation
    sheet?: SpriteNWaySheet
}

interface UnitAISettings {
    destroy_when_commands_fail?: boolean
    allow_try_to_return_to_spawner?: boolean
    do_separation?: boolean
    path_resolution_modifier?: number
}
