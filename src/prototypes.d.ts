interface dataCollection {
    'accumulator': { [key: string]: PrototypeAccumulator }
    'achievement': { [key: string]: PrototypeAchievement }
    'active-defense-equipment': { [key: string]: PrototypeActiveDefenseEquipment }
    'ambient-sound': { [key: string]: PrototypeAmbientSound }
    'ammo-category': { [key: string]: PrototypeAmmoCategory }
    'ammo': { [key: string]: PrototypeAmmoItem }
    'ammo-turret': { [key: string]: PrototypeAmmoTurret }
    'animation': { [key: string]: PrototypeAnimation }
    'arithmetic-combinator': { [key: string]: PrototypeArithmeticCombinator }
    'armor': { [key: string]: PrototypeArmor }
    'arrow': { [key: string]: PrototypeArrow }
    'artillery-flare': { [key: string]: PrototypeArtilleryFlare }
    'artillery-projectile': { [key: string]: PrototypeArtilleryProjectile }
    'artillery-turret': { [key: string]: PrototypeArtilleryTurret }
    'artillery-wagon': { [key: string]: PrototypeArtilleryWagon }
    'assembling-machine': { [key: string]: PrototypeAssemblingMachine }
    'autoplace-control': { [key: string]: PrototypeAutoplaceControl }
    'beacon': { [key: string]: PrototypeBeacon }
    'beam': { [key: string]: PrototypeBeam }
    'blueprint-book': { [key: string]: PrototypeBlueprintBook }
    'boiler': { [key: string]: PrototypeBoiler }
    'build-entity-achievement': { [key: string]: PrototypeBuildEntityAchievement }
    'capsule': { [key: string]: PrototypeCapsule }
    'car': { [key: string]: PrototypeCar }
    'cargo-wagon': { [key: string]: PrototypeCargoWagon }
    'character': { [key: string]: PrototypeCharacter }
    'character-corpse': { [key: string]: PrototypeCharacterCorpse }
    'cliff': { [key: string]: PrototypeCliff }
    'combat-robot': { [key: string]: PrototypeCombatRobot }
    'combat-robot-count': { [key: string]: PrototypeCombatRobotCountAchievement }
    'constant-combinator': { [key: string]: PrototypeConstantCombinator }
    'construct-with-robots-achievement': { [key: string]: PrototypeConstructWithRobotsAchievement }
    'construction-robot': { [key: string]: PrototypeConstructionRobot }
    'container': { [key: string]: PrototypeContainer }
    'copy-paste-tool': { [key: string]: PrototypeCopyPasteTool }
    'corpse': { [key: string]: PrototypeCorpse }
    'curved-rail': { [key: string]: PrototypeCurvedRail }
    'custom-input': { [key: string]: PrototypeCustomInput }
    'damage-type': { [key: string]: PrototypeDamageType }
    'decider-combinator': { [key: string]: PrototypeDeciderCombinator }
    'deconstruct-with-robots-achievement': { [key: string]: PrototypeDeconstructWithRobotsAchievement }
    'deconstruction-item': { [key: string]: PrototypeDeconstructionItem }
    'optimized-decorative': { [key: string]: PrototypeDecorative }
    'deliver-by-robots-achievement': { [key: string]: PrototypeDeliverByRobotsAchievement }
    'dont-build-entity-achievement': { [key: string]: PrototypeDontBuildEntityAchievement }
    'dont-craft-manually-achievement': { [key: string]: PrototypeDontCraftManuallyAchievement }
    'dont-use-entity-in-energy-production-achievement':
        { [key: string]: PrototypeDontUseEntityInEnergyProductionAchievement }
    'editor-controller': { [key: string]: PrototypeEditorController }
    'electric-energy-interface': { [key: string]: PrototypeElectricEnergyInterface }
    'electric-pole': { [key: string]: PrototypeElectricPole }
    'electric-turret': { [key: string]: PrototypeElectricTurret }
    'unit-spawner': { [key: string]: PrototypeEnemySpawner }
    'energy-shield-equipment': { [key: string]: PrototypeEnergyShieldEquipment }
    'equipment-grid': { [key: string]: PrototypeEquipmentGrid }
    'explosion': { [key: string]: PrototypeExplosion }
    'finish-the-game-achievement': { [key: string]: PrototypeFinishTheGameAchievement }
    'fire': { [key: string]: PrototypeFireFlame }
    'fish': { [key: string]: PrototypeFish }
    'flame-thrower-explosion': { [key: string]: PrototypeFlameThrowerExplosion }
    'fluid': { [key: string]: PrototypeFluid }
    'stream': { [key: string]: PrototypeFluidStream }
    'fluid-turret': { [key: string]: PrototypeFluidTurret }
    'fluid-wagon': { [key: string]: PrototypeFluidWagon }
    'flying-text': { [key: string]: PrototypeFlyingText }
    'font': { [key: string]: PrototypeFont }
    'furnace': { [key: string]: PrototypeFurnace }
    'gate': { [key: string]: PrototypeGate }
    'generator': { [key: string]: PrototypeGenerator }
    'generator-equipment': { [key: string]: PrototypeGeneratorEquipment }
    'god-controller': { [key: string]: PrototypeGodController }
    'group-attack-achievement': { [key: string]: PrototypeGroupAttackAchievement }
    'gui-style': { [key: string]: PrototypeGuiStyle }
    'gun': { [key: string]: PrototypeGun }
    'heat-interface': { [key: string]: PrototypeHeatInterface }
    'heat-pipe': { [key: string]: PrototypeHeatPipe }
    'infinity-container': { [key: string]: PrototypeInfinityContainer }
    'infinity-pipe': { [key: string]: PrototypeInfinityPipe }
    'inserter': { [key: string]: PrototypeInserter }
    'item': { [key: string]: PrototypeItem }
    'item-group': { [key: string]: PrototypeItemGroup }
    'item-request-proxy': { [key: string]: PrototypeItemRequestProxy }
    'item-subgroup': { [key: string]: PrototypeItemSubGroup }
    'item-with-inventory': { [key: string]: PrototypeItemWithInventory }
    'item-with-label': { [key: string]: PrototypeItemWithLabel }
    'kill-achievement': { [key: string]: PrototypeKillAchievement }
    'lab': { [key: string]: PrototypeLab }
    'lamp': { [key: string]: PrototypeLamp }
    'land-mine': { [key: string]: PrototypeLandMine }
    'loader': { [key: string]: PrototypeLoader }
    'locomotive': { [key: string]: PrototypeLocomotive }
    'logistic-container': { [key: string]: PrototypeLogisticContainer }
    'logistic-robot': { [key: string]: PrototypeLogisticRobot }
    'map-gen-presets': { [key: string]: PrototypeMapGenPresets }
    'map-settings': { [key: string]: PrototypeMapSettings }
    'market': { [key: string]: PrototypeMarket }
    'mining-drill': { [key: string]: PrototypeMiningDrill }
    'module': { [key: string]: PrototypeModule }
    'mouse-cursor': { [key: string]: PrototypeMouseCursor }
    'movement-bonus-equipment': { [key: string]: PrototypeMovementBonusEquipment }
    'noise-expression': { [key: string]: PrototypeNamedNoiseExpression }
    'night-vision-equipment': { [key: string]: PrototypeNightVisionEquipment }
    'offshore-pump': { [key: string]: PrototypeOffshorePump }
    'particle': { [key: string]: PrototypeParticle }
    'particle-source': { [key: string]: PrototypeParticleSource }
    'pipe': { [key: string]: PrototypePipe }
    'pipe-to-ground': { [key: string]: PrototypePipeToGround }
    'player-damaged-achievement': { [key: string]: PrototypePlayerDamagedAchievement }
    'player-port': { [key: string]: PrototypePlayerPort }
    'power-switch': { [key: string]: PrototypePowerSwitch }
    'produce-achievement': { [key: string]: PrototypeProduceAchievement }
    'produce-per-hour-achievement': { [key: string]: PrototypeProducePerHourAchievement }
    'programmable-speaker': { [key: string]: PrototypeProgrammableSpeaker }
    'projectile': { [key: string]: PrototypeProjectile }
    'pump': { [key: string]: PrototypePump }
    'radar': { [key: string]: PrototypeRadar }
    'rail-chain-signal': { [key: string]: PrototypeRailChainSignal }
    'rail-planner': { [key: string]: PrototypeRailPlanner }
    'rail-remnants': { [key: string]: PrototypeRailRemnants }
    'reactor': { [key: string]: PrototypeReactor }
    'recipe': { [key: string]: PrototypeRecipe }
    'repair-tool': { [key: string]: PrototypeRepairTool }
    'research-achievement': { [key: string]: PrototypeResearchAchievement }
    'resource': { [key: string]: PrototypeResourceEntity }
    'roboport': { [key: string]: PrototypeRoboport }
    'roboport-equipment': { [key: string]: PrototypeRoboportEquipment }
    'rocket-silo': { [key: string]: PrototypeRocketSilo }
    'rocket-silo-rocket': { [key: string]: PrototypeRocketSiloRocket }
    'selection-tool': { [key: string]: PrototypeSelectionTool }
    'shortcut': { [key: string]: PrototypeShortcut }
    'simple-entity': { [key: string]: PrototypeSimpleEntity }
    'simple-entity-with-force': { [key: string]: PrototypeSimpleEntityWithForce }
    'simple-entity-with-owner': { [key: string]: PrototypeSimpleEntityWithOwner }
    'smoke-with-trigger': { [key: string]: PrototypeSmokeWithTrigger }
    'solar-panel': { [key: string]: PrototypeSolarPanel }
    'solar-panel-equipment': { [key: string]: PrototypeSolarPanelEquipment }
    'sound': { [key: string]: PrototypeSound }
    'spectator-controller': { [key: string]: PrototypeSpectatorController }
    'speech-bubble': { [key: string]: PrototypeSpeechBubble }
    'splitter': { [key: string]: PrototypeSplitter }
    'sprite': { [key: string]: PrototypeSprite }
    'sticker': { [key: string]: PrototypeSticker }
    'storage-tank': { [key: string]: PrototypeStorageTank }
    'straight-rail': { [key: string]: PrototypeStraightRail }
    'technology': { [key: string]: PrototypeTechnology }
    'tile': { [key: string]: PrototypeTile }
    'tool': { [key: string]: PrototypeTool }
    'train-path-achievement': { [key: string]: PrototypeTrainPathAchievement }
    'train-stop': { [key: string]: PrototypeTrainStop }
    'transport-belt': { [key: string]: PrototypeTransportBelt }
    'tree': { [key: string]: PrototypeTree }
    'trigger-target-type': { [key: string]: PrototypeTriggerTargetType }
    'trivial-smoke': { [key: string]: PrototypeTrivialSmoke }
    'turret': { [key: string]: PrototypeTurret }
    'tutorial': { [key: string]: PrototypeTutorial }
    'underground-belt': { [key: string]: PrototypeUndergroundBelt }
    'unit': { [key: string]: PrototypeUnit }
    'upgrade-item': { [key: string]: PrototypeUpgradeItem }
    'utility-constants': { [key: string]: PrototypeUtilityConstants }
    'utility-sounds': { [key: string]: PrototypeUtilitySounds }
    'utility-sprites': { [key: string]: PrototypeUtilitySprites }
    'virtual-signal': { [key: string]: PrototypeVirtualSignal }
    'wall': { [key: string]: PrototypeWall }
    'wind-sound': { [key: string]: PrototypeWindSound }
}

interface PrototypeAccumulator extends PrototypeEntityWithHealth {
    charge_cooldown: number
    discharge_cooldown: number
    energy_source: EnergySource
    picture: Sprite
    charge_animation?: Animation
    charge_light?: LightDefinition
    circuit_connector_sprites?: CircuitConnectorSprites
    circuit_wire_connection_point?: WireConnectionPoint
    circuit_wire_max_distance?: number
    default_output_signal?: SignalIDConnector
    discharge_animation?: Animation
    discharge_light?: LightDefinition
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
}

interface PrototypeAchievement extends PrototypeBase {
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    allowed_without_fight?: boolean
    hidden?: boolean
    steam_stats_name?: string
}

interface PrototypeActiveDefenseEquipment extends PrototypeEquipment {
    attack_parameters: AttackParameters
    automatic: boolean
}

interface PrototypeAmbientSound {
    name: string
    sound: Sound
    track_type: string
    type: string
    weight?: number
}

interface PrototypeAmmoCategory extends PrototypeBase {
    bonus_gui_order?: Order
}

interface PrototypeAmmoItem extends PrototypeItem {
    ammo_type: AmmoType[] | AmmoType
    magazine_size?: number
    reload_time?: number
}

interface PrototypeAmmoTurret extends PrototypeTurret {
    automated_ammo_count: ItemCountType
    inventory_size: ItemStackIndex
    entity_info_icon_shift: Vector
}

interface PrototypeAnimation {
    frame_count: number
    name: string
    type: string
    animation_speed?: number
    apply_runtime_tint?: boolean
    blend_mode?: string
    draw_as_shadow?: boolean
    filename?: FileName
    flags?: SpriteFlags
    generate_sdf?: boolean
    height?: SpriteSizeType
    hr_version?: Animation
    layers?: Animation[]
    line_length?: number
    load_in_minimal_mode?: boolean
    max_advance?: number
    mipmap_count?: number
    position?: SpriteSizeType[]
    premul_alpha?: boolean
    priority?: string
    repeat_count?: number
    run_mode?: string
    scale?: number
    shift?: Vector
    size?: SpriteSizeType | SpriteSizeType[]
    stripes?: Stripe[]
    tint?: Color
    width?: SpriteSizeType
    x?: SpriteSizeType
    y?: SpriteSizeType
}

interface PrototypeArithmeticCombinator extends PrototypeCombinator {
    and_symbol_sprites: Sprite4Way
    divide_symbol_sprites: Sprite4Way
    left_shift_symbol_sprites: Sprite4Way
    minus_symbol_sprites: Sprite4Way
    modulo_symbol_sprites: Sprite4Way
    multiply_symbol_sprites: Sprite4Way
    or_symbol_sprites: Sprite4Way
    plus_symbol_sprites: Sprite4Way
    power_symbol_sprites: Sprite4Way
    right_shift_symbol_sprites: Sprite4Way
    xor_symbol_sprites: Sprite4Way
}

interface PrototypeArmor extends PrototypeTool {
    equipment_grid?: string
    inventory_size_bonus?: ItemStackIndex
    resistances?: Resistances
}

interface PrototypeArrow extends PrototypeEntity {
    arrow_picture: Sprite
    blinking?: boolean
    circle_picture?: Sprite
}

interface PrototypeArtilleryFlare extends PrototypeParticle {
    creation_shift?: Vector
    early_death_ticks?: number
    initial_frame_speed?: number
    initial_height?: number
    initial_speed?: Vector
    initial_vertical_speed?: number
    shot_category?: string
    shots_per_flare?: number
}

interface PrototypeArtilleryProjectile extends PrototypeEntity {
    reveal_map: boolean
    action?: Trigger
    chart_picture?: Sprite
    final_action?: Trigger
    height_from_ground?: number
    picture?: Sprite
    shadow?: Sprite
}

interface PrototypeArtilleryTurret extends PrototypeEntityWithHealth {
    ammo_stack_limit: ItemCountType
    automated_ammo_count: ItemCountType
    gun: string
    inventory_size: ItemStackIndex
    manual_range_modifier: number
    turret_rotation_speed: number
    alert_when_attacking?: boolean
    base_picture?: Animation4Way
    base_picture_render_layer?: RenderLayer
    base_picture_secondary_draw_order?: number
    base_shift?: Vector
    cannon_barrel_light_direction?: Vector3D
    cannon_barrel_pictures?: RotatedSprite
    cannon_barrel_recoil_shiftings?: Vector3D[]
    cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[]
    cannon_base_pictures?: RotatedSprite
    cannon_parking_frame_count?: number
    cannon_parking_speed?: number
    disable_automatic_firing?: boolean
    turn_after_shooting_cooldown?: number
}

interface PrototypeArtilleryWagon extends PrototypeRollingStock {
    ammo_stack_limit: ItemCountType
    gun: string
    inventory_size: ItemStackIndex
    manual_range_modifier: number
    turret_rotation_speed: number
    cannon_barrel_light_direction?: Vector3D
    cannon_barrel_pictures?: RotatedSprite
    cannon_barrel_recoil_shiftings?: Vector3D[]
    cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[]
    cannon_base_pictures?: RotatedSprite
    cannon_base_shiftings?: Vector[]
    cannon_parking_frame_count?: number
    cannon_parking_speed?: number
    disable_automatic_firing?: boolean
    turn_after_shooting_cooldown?: number
}

interface PrototypeAssemblingMachine extends PrototypeCraftingMachine {
    fixed_recipe?: string
    gui_title_key?: string
    ingredient_count?: number
}

interface PrototypeAutoplaceControl extends PrototypeBase {
    category: string
    richness?: boolean
}

interface PrototypeBeacon extends PrototypeEntityWithHealth {
    animation: Animation
    animation_shadow: Animation
    base_picture: Sprite
    distribution_effectivity: number
    energy_source: EnergySource
    energy_usage: Energy
    module_specification: ModuleSpecification
    supply_area_distance: number
    allowed_effects?: EffectTypeLimitation
    radius_visualisation_picture?: Sprite
}

interface PrototypeBeam extends PrototypeEntity {
    body: AnimationVariations
    damage_interval: number
    head: Animation
    tail: Animation
    width: number
    action?: Trigger
    action_triggered_automatically?: boolean
    body_light?: AnimationVariations
    ending?: Animation
    ending_light?: Animation
    ground_light_animations?: Table
    head_light?: Animation
    light_animations?: Table
    random_end_animation_rotation?: boolean
    random_target_offset?: boolean
    start?: Animation
    start_light?: Animation
    tail_light?: Animation
    target_offset?: Vector
    transparent_start_end_animations?: boolean
}

interface PrototypeBlueprintBook extends PrototypeItemWithInventory {
    show_in_library?: boolean
}

interface PrototypeBoiler extends PrototypeEntityWithHealth {
    burning_cooldown: number
    energy_consumption: Energy
    energy_source: EnergySource
    fluid_box: FluidBox
    output_fluid_box: FluidBox
    structure: Table
    target_temperature: number
    fire?: Table
    fire_flicker_enabled?: boolean
    fire_glow?: Table
    fire_glow_flicker_enabled?: boolean
    mode?: string
    patch?: Table
}

interface PrototypeBuildEntityAchievement extends PrototypeAchievement {
    to_build: string
    amount?: number
    limited_to_one_game?: boolean
    until_second?: number
}

interface PrototypeCapsule extends PrototypeItem {
    capsule_action: CapsuleAction
    robot_action?: Trigger
}

interface PrototypeCar extends PrototypeVehicle {
    animation: RotatedAnimation
    burner: EnergySource
    energy_source: EnergySource
    consumption: Energy
    effectivity: number
    inventory_size: ItemStackIndex
    rotation_speed: number
    guns?: string[]
    has_belt_immunity?: boolean
    immune_to_rock_impacts?: boolean
    immune_to_tree_impacts?: boolean
    light?: LightDefinition
    render_layer?: RenderLayer
    sound_no_fuel?: Sound
    tank_driving?: boolean
    turret_animation?: RotatedAnimation
    turret_return_timeout?: number
    turret_rotation_speed?: number
}

interface PrototypeCargoWagon extends PrototypeRollingStock {
    inventory_size: ItemStackIndex
}

interface PrototypeCharacter extends PrototypeEntityWithHealth {
    animations: CharacterArmorAnimation[]
    build_distance: number
    damage_hit_tint: Color
    distance_per_frame: number
    drop_item_distance: number
    eat: Sound
    heartbeat: Sound
    inventory_size: ItemStackIndex
    item_pickup_distance: number
    loot_pickup_distance: number
    maximum_corner_sliding_distance: number
    mining_speed: number
    mining_with_tool_particles_animation_positions: number[]
    reach_distance: number
    reach_resource_distance: number
    running_sound_animation_positions: number[]
    running_speed: number
    ticks_to_keep_aiming_direction: number
    ticks_to_keep_gun: number
    ticks_to_stay_in_combat: number
    character_corpse?: string
    crafting_categories?: string[]
    enter_vehicle_distance?: number
    footstep_particle_triggers?: CreateParticleTriggerEffectItem[]
    light?: LightDefinition
    mining_categories?: string[]
    respawn_time?: number
    tool_attack_distance?: number
    tool_attack_result?: Trigger
}

interface PrototypeCharacterCorpse extends PrototypeEntity {
    time_to_live: number
    armor_picture_mapping?: Table
    picture?: Animation
    pictures?: AnimationVariations
    render_layer?: RenderLayer
}

interface PrototypeCliff extends PrototypeEntity {
    grid_offset: Vector
    grid_size: Vector
    orientations: OrientedCliffPrototype[]
    cliff_explosive?: string
    cliff_height?: number
}

interface PrototypeCombatRobot extends PrototypeFlyingRobot {
    attack_parameters: AttackParameters
    idle: RotatedAnimation
    in_motion: RotatedAnimation
    shadow_idle: RotatedAnimation
    shadow_in_motion: RotatedAnimation
    time_to_live: number
    destroy_action?: Trigger
    follows_player?: boolean
    friction?: number
    light?: LightDefinition
    range_from_player?: number
}

interface PrototypeCombatRobotCountAchievement extends PrototypeAchievement {
    count?: number
}

interface PrototypeCombinator extends PrototypeEntityWithHealth {
    active_energy_usage: Energy
    activity_led_light_offsets: Vector[]
    activity_led_sprites: Sprite4Way
    energy_source: EnergySource
    input_connection_bounding_box: BoundingBox
    input_connection_points: WireConnectionPoint[]
    output_connection_bounding_box: BoundingBox
    output_connection_points: WireConnectionPoint[]
    screen_light_offsets: Vector[]
    sprites: Sprite4Way
    activity_led_hold_time?: number
    activity_led_light?: LightDefinition
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    screen_light?: LightDefinition
}

interface PrototypeConstantCombinator extends PrototypeEntityWithHealth {
    activity_led_light_offsets: Vector[]
    activity_led_sprites: Sprite4Way
    circuit_wire_connection_points: WireConnectionPoint[]
    item_slot_count: number
    sprites: Sprite4Way
    activity_led_light?: LightDefinition
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
}

interface PrototypeConstructWithRobotsAchievement extends PrototypeAchievement {
    limited_to_one_game: boolean
    amount?: number
    more_than_manually?: boolean
}

interface PrototypeConstructionRobot extends PrototypeRobotWithLogisticInterface {
    construction_vector: Vector
    shadow_working: RotatedAnimation
    smoke: Animation
    working: RotatedAnimation
    sparks?: AnimationVariations
    working_light?: LightDefinition
}

interface PrototypeContainer extends PrototypeEntityWithHealth {
    inventory_size: number
    picture: Sprite
    circuit_connector_sprites?: CircuitConnectorSprites
    circuit_wire_connection_point?: WireConnectionPoint
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    enable_inventory_bar?: boolean
    scale_info_icons?: boolean
}

interface PrototypeCopyPasteTool extends PrototypeSelectionTool {
    cuts?: boolean
}

interface PrototypeCorpse extends PrototypeEntity {
    animation?: RotatedAnimationVariations
    animation_render_layer?: RenderLayer
    direction_shuffle?: number[][]
    dying_speed?: number
    final_render_layer?: RenderLayer
    ground_patch?: AnimationVariations
    ground_patch_fade_in_delay?: number
    ground_patch_fade_in_speed?: number
    ground_patch_fade_out_duration?: number
    ground_patch_fade_out_start?: number
    ground_patch_higher?: AnimationVariations
    ground_patch_render_layer?: RenderLayer
    shuffle_directions_at_frame?: number
    splash?: AnimationVariations
    splash_render_layer?: RenderLayer
    splash_speed?: number
    time_before_removed?: number
    time_before_shading_off?: number
}

interface PrototypeCraftingMachine extends PrototypeEntityWithHealth {
    animation: Animation4Way
    crafting_categories: string[]
    crafting_speed: number
    energy_source: EnergySource
    energy_usage: Energy
    idle_animation: Animation4Way
    allowed_effects?: EffectTypeLimitation
    always_draw_idle_animation?: boolean
    base_productivity?: number
    default_recipe_tint?: Color[]
    draw_entity_info_icon_background?: boolean
    entity_info_icon_shift?: Vector
    fluid_boxes?: FluidBox[]
    has_backer_name?: boolean
    module_specification?: ModuleSpecification
    return_ingredients_on_change?: boolean
    scale_entity_info_icon?: boolean
    show_recipe_icon?: boolean
    working_visualisations?: WorkingVisualisation[]
}

interface PrototypeCurvedRail extends PrototypeRail {
    bending_type?: string
}

interface PrototypeCustomInput extends PrototypeBase {
    key_sequence: string
    action?: string
    alternative_key_sequence?: string
    consuming?: ConsumingType
    enabled?: boolean
    enabled_while_in_cutscene?: boolean
    enabled_while_spectating?: boolean
    item_to_create?: string
    linked_game_control?: string
}

interface PrototypeDamageType extends PrototypeBase {
    hidden?: boolean
}

interface PrototypeDeciderCombinator extends PrototypeCombinator {
    equal_symbol_sprites: Sprite4Way
    greater_or_equal_symbol_sprites: Sprite4Way
    greater_symbol_sprites: Sprite4Way
    less_or_equal_symbol_sprites: Sprite4Way
    less_symbol_sprites: Sprite4Way
    not_equal_symbol_sprites: Sprite4Way
}

interface PrototypeDeconstructWithRobotsAchievement extends PrototypeAchievement {
    amount: number
}

interface PrototypeDeconstructionItem extends PrototypeSelectionTool {
    entity_filter_count?: ItemStackIndex
    show_in_library?: boolean
    tile_filter_count?: ItemStackIndex
}

interface PrototypeDecorative extends PrototypeBase {
    pictures: SpriteVariations
    autoplace?: AutoplaceSpecification
    collision_box?: BoundingBox
    collision_mask?: CollisionMask
    grows_through_rail_path?: boolean
    render_layer?: RenderLayer
    tile_layer?: number
}

interface PrototypeDeliverByRobotsAchievement extends PrototypeAchievement {
    amount: MaterialAmountType
}

interface PrototypeDontBuildEntityAchievement extends PrototypeAchievement {
    dont_build: string[] | string
    amount?: number
}

interface PrototypeDontCraftManuallyAchievement extends PrototypeAchievement {
    amount: MaterialAmountType
}

interface PrototypeDontUseEntityInEnergyProductionAchievement extends PrototypeAchievement {
    excluded: string | string[]
    included: string | string[]
    last_hour_only?: boolean
    minimum_energy_produced?: Energy
}

interface PrototypeEditorController {
    adjust_speed_based_off_zoom: boolean
    enable_flash_light: boolean
    generate_neighbor_chunks: boolean
    gun_inventory_size: ItemStackIndex
    instant_blueprint_building: boolean
    instant_deconstruction: boolean
    instant_upgrading: boolean
    inventory_size: ItemStackIndex
    item_pickup_distance: number
    loot_pickup_distance: number
    mining_speed: number
    movement_speed: number
    name: string
    render_as_day: boolean
    show_entity_tags: boolean
    show_hidden_entities: boolean
    show_status_icons: boolean
    type: string
}

interface PrototypeElectricEnergyInterface extends PrototypeEntityWithHealth {
    energy_source: EnergySource
    animation?: Animation
    animations?: Animation4Way
    continuous_animation?: boolean
    energy_production?: Energy
    energy_usage?: Energy
    gui_mode?: string
    light?: LightDefinition
    picture?: Sprite
    pictures?: Sprite4Way
    render_layer?: RenderLayer
}

interface PrototypeElectricPole extends PrototypeEntityWithHealth {
    pictures: RotatedSprite
    supply_area_distance: number
    active_picture?: Sprite
    connection_points?: WireConnectionPoint[]
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    light?: LightDefinition
    maximum_wire_distance?: number
    radius_visualisation_picture?: Sprite
    track_coverage_during_build_by_moving?: boolean
}

interface PrototypeElectricTurret extends PrototypeTurret {
    energy_source: EnergySource
}

interface PrototypeEnemySpawner extends PrototypeEntityWithHealth {
    animations: AnimationVariations
    call_for_help_radius: number
    dying_sound: Sound
    max_count_of_owned_units: number
    max_friends_around_to_spawn: number
    max_richness_for_spawn_shift: number
    max_spawn_shift: number
    pollution_absorption_absolute: number
    pollution_absorption_proportional: number
    result_units: UnitSpawnDefinition[]
    spawning_cooldown: number[]
    spawning_radius: number
    spawning_spacing: number
    integration?: SpriteVariations
    max_darkness_to_spawn?: number
    min_darkness_to_spawn?: number
    random_animation_offset?: boolean
}

interface PrototypeEnergyShieldEquipment extends PrototypeEquipment {
    energy_per_shield: Energy
    max_shield_value: number
}

interface PrototypeEntity extends PrototypeBase {
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    additional_pastable_entities?: string | string[]
    alert_icon_scale?: number
    alert_icon_shift?: Vector
    allow_copy_paste?: boolean
    autoplace?: AutoplaceSpecification
    build_base_evolution_requirement?: number
    build_sound?: Sound
    close_sound?: Sound
    collision_box?: BoundingBox
    collision_mask?: CollisionMask
    created_effect?: Trigger
    created_smoke?: CreateTrivialSmokeEffectItem
    drawing_box?: BoundingBox
    emissions_per_second?: number
    emissions_per_tick?: number
    enemy_map_color?: Color
    fast_replaceable_group?: string
    flags?: EntityPrototypeFlags
    friendly_map_color?: Color
    hit_visualization_box?: BoundingBox
    map_color?: Color
    map_generator_bounding_box?: BoundingBox
    minable?: MinableProperties
    mined_sound?: Sound
    next_upgrade?: string
    open_sound?: Sound
    placeable_by?: ItemToPlace | ItemToPlace[]
    remains_when_mined?: string | string[]
    selectable_in_game?: boolean
    selection_box?: BoundingBox
    selection_priority?: number
    shooting_cursor_size?: number
    sticker_box?: BoundingBox
    subgroup?: string
    tile_height?: number
    tile_width?: number
    vehicle_impact_sound?: Sound
    working_sound?: WorkingSound
}

interface PrototypeEntityWithHealth extends PrototypeEntity {
    alert_when_damaged?: boolean
    attack_reaction?: AttackReaction
    corpse?: string | string[]
    create_ghost_on_death?: boolean
    dying_explosion?: string
    dying_trigger_effect?: TriggerEffect
    healing_per_tick?: number
    hide_resistances?: boolean
    integration_patch?: Sprite4Way
    integration_patch_render_layer?: RenderLayer
    loot?: Loot
    max_health?: number
    repair_sound?: Sound
    repair_speed_modifier?: number
    resistances?: Resistances
}

interface PrototypeEquipment extends PrototypeBase {
    categories: string[]
    energy_source: EnergySource
    shape: EquipmentShape
    sprite: Sprite
    ability_icon?: Sprite
    background_color?: Color
    take_result?: string
}

interface PrototypeEquipmentGrid extends PrototypeBase {
    equipment_categories: string[]
    height: number
    width: number
    locked?: boolean
}

interface PrototypeExplosion extends PrototypeEntity {
    animations: AnimationVariations
    beam?: boolean
    correct_rotation?: boolean
    height?: number
    light?: LightDefinition
    rotate?: boolean
    smoke?: string
    smoke_count?: number
    smoke_slow_down_factor?: number
    sound?: Sound
}

interface PrototypeFinishTheGameAchievement extends PrototypeAchievement {
    until_second?: number
}

interface PrototypeFireFlame extends PrototypeEntity {
    damage_per_tick: DamagePrototype
    spread_delay: number
    spread_delay_deviation: number
    add_fuel_cooldown?: number
    burnt_patch_alpha_default?: number
    burnt_patch_alpha_variations?: Table
    burnt_patch_lifetime?: number
    burnt_patch_pictures?: SpriteVariations
    damage_multiplier_decrease_per_tick?: number
    damage_multiplier_increase_per_added_fuel?: number
    delay_between_initial_flames?: number
    fade_in_duration?: number
    fade_out_duration?: number
    flame_alpha?: number
    flame_alpha_deviation?: number
    initial_flame_count?: number
    initial_lifetime?: number
    initial_render_layer?: RenderLayer
    lifetime_increase_by?: number
    lifetime_increase_cooldown?: number
    light?: LightDefinition
    limit_overlapping_particles?: boolean
    maximum_damage_multiplier?: number
    maximum_lifetime?: number
    maximum_spread_count?: number
    on_fuel_added_action?: Trigger
    particle_alpha?: number
    particle_alpha_blend_duration?: number
    particle_alpha_deviation?: number
    pictures?: AnimationVariations
    render_layer?: RenderLayer
    secondary_picture_fade_out_duration?: number
    secondary_picture_fade_out_start?: number
    secondary_pictures?: AnimationVariations
    secondary_render_layer?: RenderLayer
    small_tree_fire_pictures?: AnimationVariations
    smoke?: SmokeSource[]
    smoke_fade_in_duration?: number
    smoke_fade_out_duration?: number
    smoke_source_pictures?: AnimationVariations
    spawn_entity?: string
    tree_dying_factor?: number
    uses_alternative_behavior?: boolean
}

interface PrototypeFish extends PrototypeEntityWithHealth {
    pictures: SpriteVariations
}

interface PrototypeFlameThrowerExplosion extends PrototypeExplosion {
    damage: DamagePrototype
    slow_down_factor: number
}

interface PrototypeFluid extends PrototypeBase {
    base_color: Color
    default_temperature: number
    flow_color: Color
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    max_temperature: number
    emissions_multiplier?: number
    fuel_value?: Energy
    gas_temperature?: number
    heat_capacity?: Energy
    hidden?: boolean
    subgroup?: string
}

interface PrototypeFluidStream extends PrototypeEntity {
    particle_horizontal_speed: number
    particle_horizontal_speed_deviation: number
    particle_spawn_interval: number
    particle_vertical_acceleration: number
    action?: Trigger
    ground_light?: LightDefinition
    initial_action?: Trigger
    oriented_particle?: boolean
    particle?: Animation
    particle_alpha_per_part?: number
    particle_buffer_size?: number
    particle_end_alpha?: number
    particle_fade_out_duration?: number
    particle_fade_out_threshold?: number
    particle_loop_exit_threshold?: number
    particle_loop_frame_count?: number
    particle_scale_per_part?: number
    particle_spawn_timeout?: number
    particle_start_alpha?: number
    particle_start_scale?: number
    progress_to_create_smoke?: number
    shadow?: Animation
    shadow_scale_enabled?: boolean
    smoke_sources?: SmokeSource[]
    special_neutral_target_damage?: DamagePrototype
    spine_animation?: Animation
    stream_light?: LightDefinition
    target_position_deviation?: number
    width?: number
}

interface PrototypeFluidTurret extends PrototypeTurret {
    activation_buffer_ratio: number
    fluid_box: FluidBox
    fluid_buffer_input_flow: number
    fluid_buffer_size: number
    attacking_muzzle_animation_shift?: AnimatedVector
    ending_attack_muzzle_animation_shift?: AnimatedVector
    enough_fuel_indicator_picture?: Sprite4Way
    folded_muzzle_animation_shift?: AnimatedVector
    folding_muzzle_animation_shift?: AnimatedVector
    indicator_light?: LightDefinition
    muzzle_animation?: Animation
    muzzle_light?: LightDefinition
    not_enough_fuel_indicator_picture?: Sprite4Way
    prepared_muzzle_animation_shift?: AnimatedVector
    preparing_muzzle_animation_shift?: AnimatedVector
    starting_attack_muzzle_animation_shift?: AnimatedVector
}

interface PrototypeFluidWagon extends PrototypeRollingStock {
    capacity: number
}

interface PrototypeFlyingRobot extends PrototypeEntityWithHealth {
    speed: number
    energy_per_move?: Energy
    energy_per_tick?: Energy
    max_energy?: Energy
    max_to_charge?: number
    min_to_charge?: number
    speed_multiplier_when_out_of_energy?: number
}

interface PrototypeFlyingText extends PrototypeEntity {
    speed: number
    time_to_live: number
    text_alignment?: string
}

interface PrototypeFont {
    from: string
    name: string
    size: number
    type: string
    border?: boolean
    border_color?: Color
    filtered?: boolean
    spacing?: number
}

interface PrototypeFurnace extends PrototypeCraftingMachine {
    result_inventory_size: ItemStackIndex
    source_inventory_size: ItemStackIndex
}

interface PrototypeGate extends PrototypeEntityWithHealth {
    activation_distance: number
    close_sound: Sound
    horizontal_animation: Animation
    horizontal_rail_animation_left: Animation
    horizontal_rail_animation_right: Animation
    horizontal_rail_base: Animation
    open_sound: Sound
    opening_speed: number
    timeout_to_close: number
    vertical_animation: Animation
    vertical_rail_animation_left: Animation
    vertical_rail_animation_right: Animation
    vertical_rail_base: Animation
    wall_patch: Animation
    fadeout_interval?: number
    opened_collision_mask?: CollisionMask
}

interface PrototypeGenerator extends PrototypeEntityWithHealth {
    effectivity: number
    energy_source: EnergySource
    horizontal_animation: Animation
    vertical_animation: Animation
    burner?: EnergySource
    burns_fluid?: boolean
    fluid_box?: FluidBox
    fluid_usage_per_tick?: number
    max_power_output?: Energy
    maximum_temperature?: number
    min_perceived_performance?: number
    performance_to_sound_speedup?: number
    scale_fluid_usage?: boolean
    smoke?: SmokeSource[]
}

interface PrototypeGeneratorEquipment extends PrototypeEquipment {
    power: Energy
    burner?: EnergySource
}

interface PrototypeGodController {
    inventory_size: ItemStackIndex
    item_pickup_distance: number
    loot_pickup_distance: number
    mining_speed: number
    movement_speed: number
    name: string
    type: string
    crafting_categories?: string[]
    mining_categories?: string[]
}

interface PrototypeGroupAttackAchievement extends PrototypeAchievement {
    amount?: number
}

interface PrototypeGuiStyle {
    default_sprite_priority: string
    default_sprite_scale: number
    default_tileset: FileName
    name: string
    type: string
}

interface PrototypeGun extends PrototypeItem {
    attack_parameters: AttackParameters
}

interface PrototypeHeatInterface extends PrototypeEntityWithHealth {
    heat_buffer: HeatBuffer
    gui_mode?: string
    picture?: Sprite
}

interface PrototypeHeatPipe extends PrototypeEntityWithHealth {
    connection_sprites: ConnectableEntityGraphics
    heat_buffer: HeatBuffer
    heat_glow_sprites: ConnectableEntityGraphics
    minimum_glow_temperature: number
    glow_alpha_modifier?: number
    heat_glow_light?: LightDefinition
}

interface PrototypeInfinityContainer extends PrototypeLogisticContainer {
    erase_contents_when_mined: boolean
    gui_mode?: string
}

interface PrototypeInfinityPipe extends PrototypePipe {
    gui_mode?: string
}

interface PrototypeInserter extends PrototypeEntityWithHealth {
    energy_source: EnergySource
    extension_speed: number
    hand_base_picture: Sprite
    hand_base_shadow: Sprite
    hand_closed_picture: Sprite
    hand_closed_shadow: Sprite
    hand_open_picture: Sprite
    hand_open_shadow: Sprite
    insert_position: Vector
    pickup_position: Vector
    platform_picture: Sprite4Way
    rotation_speed: number
    allow_custom_vectors?: boolean
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_points?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    default_stack_control_input_signal?: SignalIDConnector
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    draw_held_item?: boolean
    draw_inserter_arrow?: boolean
    energy_per_movement?: Energy
    energy_per_rotation?: Energy
    filter_count?: number
    hand_size?: number
    stack?: boolean
}

interface PrototypeItem extends PrototypeBase {
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    stack_size: ItemCountType
    burnt_result?: string
    can_be_mod_opened?: boolean
    dark_background_icons?: IconData
    dark_background_icon_size: SpriteSizeType
    dark_background_icon_mipmaps?: number
    dark_background_icon?: FileName
    default_request_amount?: ItemCountType
    flags?: ItemPrototypeFlags
    fuel_acceleration_multiplier?: number
    fuel_category?: string
    fuel_emissions_multiplier?: number
    fuel_glow_color?: Color
    fuel_top_speed_multiplier?: number
    fuel_value?: Energy
    pictures?: SpriteVariations
    place_as_tile?: PlaceAsTile
    place_result?: string
    placed_as_equipment_result?: string
    primary_place_result_item?: boolean
    rocket_launch_product?: ItemProductPrototype
    rocket_launch_products?: ItemProductPrototype[]
    stackable?: boolean
    subgroup?: string
    wire_count?: ItemCountType
}

interface PrototypeItemGroup extends PrototypeBase {
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    order_in_recipe?: Order
}

interface PrototypeItemRequestProxy extends PrototypeEntity {
    picture: Sprite
    use_target_entity_alert_icon_shift?: boolean
}

interface PrototypeItemSubGroup extends PrototypeBase {
    group: string
}

interface PrototypeItemWithInventory extends PrototypeItemWithLabel {
    inventory_size: ItemStackIndex
    extends_inventory_by_default?: boolean
    filter_message_key?: string
    filter_mode?: string
    insertion_priority_mode?: string
    item_filters?: string[]
    item_group_filters?: string[]
    item_subgroup_filters?: string[]
}

interface PrototypeItemWithLabel extends PrototypeItem {
    default_label_color?: Color
    draw_label_for_cursor_render?: boolean
}

interface PrototypeKillAchievement extends PrototypeAchievement {
    amount?: number
    damage_type?: string
    in_vehicle?: boolean
    personally?: boolean
    to_kill?: string
    type_to_kill?: string
}

interface PrototypeLab extends PrototypeEntityWithHealth {
    energy_source: EnergySource
    energy_usage: Energy
    inputs: string[]
    off_animation: Animation
    on_animation: Animation
    base_productivity?: number
    entity_info_icon_shift?: Vector
    light?: LightDefinition
    module_specification?: ModuleSpecification
    researching_speed?: number
}

interface PrototypeLamp extends PrototypeEntityWithHealth {
    energy_source: EnergySource
    energy_usage_per_tick: Energy
    picture_off: Sprite
    picture_on: Sprite
    always_on?: boolean
    circuit_connector_sprites?: CircuitConnectorSprites
    circuit_wire_connection_point?: WireConnectionPoint
    circuit_wire_max_distance?: number
    darkness_for_all_lamps_off?: number
    darkness_for_all_lamps_on?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    glow_color_intensity?: number
    glow_render_mode?: string
    glow_size?: number
    light?: LightDefinition
    light_when_colored?: LightDefinition
    signal_to_color_mapping?: SignalColorMapping[]
}

interface PrototypeLandMine extends PrototypeEntityWithHealth {
    picture_safe: Sprite
    picture_set: Sprite
    trigger_radius: number
    action?: Trigger
    ammo_category?: string
    force_die_on_attack?: boolean
    picture_set_enemy?: Sprite
    timeout?: number
    trigger_force?: ForceCondition
}

interface PrototypeLoader extends PrototypeTransportBeltConnectable {
    filter_count: number
    structure: Table
    belt_distance?: number
    belt_length?: number
    container_distance?: number
    structure_render_layer?: RenderLayer
}

interface PrototypeLocomotive extends PrototypeRollingStock {
    burner: EnergySource
    energy_source: EnergySource
    max_power: Energy
    reversing_power_modifier: number
    front_light?: LightDefinition
}

interface PrototypeLogisticContainer extends PrototypeContainer {
    logistic_mode: string
    animation?: Animation
    landing_location_offset?: Vector
    logistic_slots_count?: number
    opened_duration?: number
    render_not_in_network_icon?: boolean
}

interface PrototypeLogisticRobot extends PrototypeRobotWithLogisticInterface {
    idle_with_cargo: RotatedAnimation
    in_motion_with_cargo: RotatedAnimation
    shadow_idle_with_cargo: RotatedAnimation
    shadow_in_motion_with_cargo: RotatedAnimation
}

interface PrototypeMapGenPresets {
    name: string
    type: string
}

interface PrototypeMapSettings {
    difficulty_settings: Table
    enemy_evolution: Table
    enemy_expansion: Table
    max_failed_behavior_count: number
    name: string
    path_finder: Table
    pollution: Table
    steering: Table
    type: string
    unit_group: Table
}

interface PrototypeMarket extends PrototypeEntityWithHealth {
    picture: Sprite
    allow_access_to_all_forces?: boolean
}

interface PrototypeMiningDrill extends PrototypeEntityWithHealth {
    animations: Animation4Way
    energy_source: EnergySource
    energy_usage: Energy
    mining_speed: number
    resource_categories: string
    resource_searching_radius: number
    vector_to_place_result: Vector
    allowed_effects?: EffectTypeLimitation
    base_picture?: Sprite4Way
    base_productivity?: number
    base_render_layer?: RenderLayer
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_points?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    input_fluid_box?: FluidBox
    input_fluid_patch_shadow_animations?: Animation4Way
    input_fluid_patch_shadow_sprites?: Sprite4Way
    input_fluid_patch_sprites?: Sprite4Way
    input_fluid_patch_window_base_sprites?: Sprite4Way[]
    input_fluid_patch_window_flow_sprites?: Sprite4Way[]
    input_fluid_patch_window_sprites?: Sprite4Way
    module_specification?: ModuleSpecification
    monitor_visualization_tint?: Color
    output_fluid_box?: FluidBox
    radius_visualization_picture?: Sprite
    shadow_animations?: Animation4Way
    storage_slots?: ItemStackIndex
}

interface PrototypeModule extends PrototypeItem {
    category: string
    effect: Effect
    tier: number
    limitation?: string[]
    limitation_message_key?: string
}

interface PrototypeMouseCursor {
    name: string
    type: string
    filename?: FileName
    hot_pixel_x?: number
    hot_pixel_y?: number
    system_cursor?: string
}

interface PrototypeMovementBonusEquipment extends PrototypeEquipment {
    energy_consumption: Energy
    movement_bonus: number
}

interface PrototypeNamedNoiseExpression extends PrototypeBase {
    expression: NoiseExpression
    intended_property?: string
}

interface PrototypeNightVisionEquipment extends PrototypeEquipment {
    desaturation_params: EffectParams
    energy_input: Energy
    light_params: EffectParams
    tint: Color
    darkness_to_turn_on?: number
}

interface PrototypeOffshorePump extends PrototypeEntityWithHealth {
    fluid: string
    fluid_box: FluidBox
    picture: Sprite4Way
    pumping_speed: number
    adjacent_tile_collision_test?: CollisionMask
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_points?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    fluid_box_tile_collision_test?: CollisionMask
    placeable_position_visualization?: Sprite
    remove_on_tile_collision?: boolean
}

interface PrototypeParticle extends PrototypeEntity {
    life_time: number
    pictures: AnimationVariations
    ended_in_water_trigger_effect?: TriggerEffect
    mining_particle_frame_speed?: number
    movement_modifier?: number
    movement_modifier_when_on_ground?: number
    regular_trigger_effect?: TriggerEffect
    regular_trigger_effect_frequency?: number
    shadows?: AnimationVariations
}

interface PrototypeParticleSource extends PrototypeEntity {
    height: number
    horizontal_speed: number
    particle: string
    time_before_start: number
    time_to_live: number
    vertical_speed: number
    height_deviation?: number
    horizontal_speed_deviation?: number
    time_before_start_deviation?: number
    time_to_live_deviation?: number
    vertical_speed_deviation?: number
}

interface PrototypePipe extends PrototypeEntityWithHealth {
    fluid_box: FluidBox
    horizontal_window_bounding_box: BoundingBox
    pictures: Table
    vertical_window_bounding_box: BoundingBox
}

interface PrototypePipeToGround extends PrototypeEntityWithHealth {
    fluid_box: FluidBox
    pictures: Sprite[]
}

interface PrototypePlayerDamagedAchievement extends PrototypeAchievement {
    minimum_damage: number
    should_survive: boolean
    type_of_dealer?: string
}

interface PrototypePlayerPort extends PrototypeEntityWithHealth {
    animation: Animation
}

interface PrototypePowerSwitch extends PrototypeEntityWithHealth {
    circuit_wire_connection_point: WireConnectionPoint
    led_off: Sprite
    led_on: Sprite
    left_wire_connection_point: WireConnectionPoint
    overlay_loop: Animation
    overlay_start: Animation
    overlay_start_delay: number
    power_on_animation: Animation
    right_wire_connection_point: WireConnectionPoint
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    wire_max_distance?: number
}

interface PrototypeProduceAchievement extends PrototypeAchievement {
    amount: MaterialAmountType
    limited_to_one_game: boolean
    fluid_product?: string
    item_product?: string
}

interface PrototypeProducePerHourAchievement extends PrototypeAchievement {
    amount: MaterialAmountType
    fluid_product?: string
    item_product?: string
}

interface PrototypeProgrammableSpeaker extends PrototypeEntityWithHealth {
    energy_source: EnergySource
    energy_usage_per_tick: Energy
    instruments: Table
    maximum_polyphony: number
    sprite: Sprite
    audible_distance_modifier?: number
    circuit_connector_sprites?: CircuitConnectorSprites
    circuit_wire_connection_point?: WireConnectionPoint
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
}

interface PrototypeProjectile extends PrototypeEntity {
    acceleration: number
    animation: Animation
    action?: Trigger
    direction_only?: boolean
    enable_drawing_with_mask?: boolean
    final_action?: Trigger
    force_condition?: ForceCondition
    height?: number
    hit_at_collision_position?: boolean
    hit_collision_mask?: CollisionMask
    light?: LightDefinition
    max_speed?: number
    piercing_damage?: number
    rotatable?: boolean
    shadow?: Animation
    smoke?: SmokeSource[]
}

interface PrototypePump extends PrototypeEntityWithHealth {
    animations: Animation4Way
    energy_source: EnergySource
    energy_usage: Energy
    fluid_box: FluidBox
    pumping_speed: number
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_points?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    fluid_animation?: Animation4Way
    fluid_wagon_connector_alignment_tolerance?: number
    fluid_wagon_connector_frame_count?: number
    fluid_wagon_connector_graphics?: ConnectorGraphics[]
    fluid_wagon_connector_speed?: number
    glass_pictures?: Sprite4Way
}

interface PrototypeRadar extends PrototypeEntityWithHealth {
    energy_per_nearby_scan: Energy
    energy_per_sector: Energy
    energy_source: EnergySource
    energy_usage: Energy
    max_distance_of_nearby_sector_revealed: number
    max_distance_of_sector_revealed: number
    pictures: RotatedSprite
    radius_minimap_visualisation_color?: Color
    rotation_speed?: number
}

interface PrototypeRail extends PrototypeEntityWithHealth {
    pictures: Table
}

interface PrototypeRailChainSignal extends PrototypeRailSignalBase {
    selection_box_offsets: Vector[]
    blue_light?: LightDefinition
    default_blue_output_signal?: SignalIDConnector
}

interface PrototypeRailPlanner extends PrototypeItem {
    curved_rail: string
    straight_rail: string
}

interface PrototypeRailRemnants extends PrototypeCorpse {
    bending_type: string
    pictures: Table
}

interface PrototypeRailSignalBase extends PrototypeEntityWithHealth {
    animation: RotatedAnimation
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_points?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    default_green_output_signal?: SignalIDConnector
    default_orange_output_signal?: SignalIDConnector
    default_red_output_signal?: SignalIDConnector
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    green_light?: LightDefinition
    orange_light?: LightDefinition
    rail_piece?: Animation
    red_light?: LightDefinition
}

interface PrototypeReactor extends PrototypeEntityWithHealth {
    connection_patches_connected: SpriteVariations
    connection_patches_disconnected: SpriteVariations
    consumption: Energy
    energy_source: EnergySource
    heat_buffer: HeatBuffer
    working_light_picture: Sprite
    default_fuel_glow_color?: Color
    light?: LightDefinition
    lower_layer_picture?: Sprite
    meltdown_action?: Trigger
    neighbour_bonus?: number
    neighbour_collision_increase?: number
    picture?: Sprite
    scale_energy_usage?: boolean
    use_fuel_glow_color?: boolean
}

interface PrototypeRecipe extends PrototypeBase {
    ingredients: IngredientPrototype[]
    allow_as_intermediate?: boolean
    allow_decomposition?: boolean
    allow_intermediates?: boolean
    always_show_made_in?: boolean
    always_show_products?: boolean
    category?: string
    crafting_machine_tint?: Color[]
    emissions_multiplier?: number
    enabled?: boolean
    energy_required?: number
    hidden?: boolean
    hide_from_player_crafting?: boolean
    hide_from_stats?: boolean
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    main_product?: string
    overload_multiplier?: number
    requester_paste_multiplier?: number
    result?: string
    result_count?: number
    results?: ProductPrototype[]
    show_amount_in_title?: boolean
    subgroup?: string
}

interface PrototypeRepairTool extends PrototypeTool {
    speed: number
    repair_result?: Trigger
}

interface PrototypeResearchAchievement extends PrototypeAchievement {
    research_all?: boolean
    technology?: string
}

interface PrototypeResourceEntity extends PrototypeEntity {
    stage_counts: number[]
    stages: AnimationVariations
    category?: string
    effect_animation_period?: number
    effect_animation_period_deviation?: number
    effect_darkness_multiplier?: number
    highlight?: boolean
    infinite?: boolean
    infinite_depletion_amount?: number
    map_grid?: boolean
    max_effect_alpha?: number
    min_effect_alpha?: number
    minimum?: number
    normal?: number
    randomize_visual_position?: boolean
    resource_patch_search_radius?: number
    stages_effect?: AnimationVariations
    tree_removal_max_distance?: number
    tree_removal_probability?: number
}

interface PrototypeRoboport extends PrototypeEntityWithHealth {
    base: Sprite
    base_animation: Animation
    base_patch: Sprite
    charge_approach_distance: number
    charging_energy: Energy
    construction_radius: number
    door_animation_down: Animation
    door_animation_up: Animation
    energy_source: EnergySource
    energy_usage: Energy
    logistics_radius: number
    material_slots_count: ItemStackIndex
    recharge_minimum: Energy
    recharging_animation: Animation
    request_to_open_door_timeout: number
    robot_slots_count: ItemStackIndex
    spawn_and_station_height: number
    charging_distance?: number
    charging_offsets?: Vector[]
    charging_station_count?: number
    charging_station_shift?: Vector
    charging_threshold_distance?: number
    circuit_connector_sprites?: CircuitConnectorSprites
    circuit_wire_connection_point?: WireConnectionPoint
    circuit_wire_max_distance?: number
    close_door_trigger_effect?: TriggerEffect
    default_available_construction_output_signal?: SignalIDConnector
    default_available_logistic_output_signal?: SignalIDConnector
    default_total_construction_output_signal?: SignalIDConnector
    default_total_logistic_output_signal?: SignalIDConnector
    draw_circuit_wires?: boolean
    draw_construction_radius_visualization?: boolean
    draw_copper_wires?: boolean
    draw_logistic_radius_visualization?: boolean
    logistics_connection_distance?: number
    open_door_trigger_effect?: TriggerEffect
    recharging_light?: LightDefinition
    robot_limit?: ItemCountType
    robot_vertical_acceleration?: number
    robots_shrink_when_entering_and_exiting?: boolean
    spawn_and_station_shadow_height_offset?: number
    stationing_offset?: Vector
}

interface PrototypeRoboportEquipment extends PrototypeEquipment {
    charge_approach_distance: number
    charging_energy: Energy
    construction_radius: number
    recharging_animation: Animation
    spawn_and_station_height: number
    charging_distance?: number
    charging_offsets?: Vector[]
    charging_station_count?: number
    charging_station_shift?: Vector
    charging_threshold_distance?: number
    draw_construction_radius_visualization?: boolean
    draw_logistic_radius_visualization?: boolean
    recharging_light?: LightDefinition
    robot_limit?: ItemCountType
    robot_vertical_acceleration?: number
    robots_shrink_when_entering_and_exiting?: boolean
    spawn_and_station_shadow_height_offset?: number
    stationing_offset?: Vector
}

interface PrototypeRobotWithLogisticInterface extends PrototypeFlyingRobot {
    cargo_centered: Vector
    idle: RotatedAnimation
    in_motion: RotatedAnimation
    max_payload_size: ItemCountType
    shadow_idle: RotatedAnimation
    shadow_in_motion: RotatedAnimation
    draw_cargo?: boolean
}

interface PrototypeRocketSilo extends PrototypeAssemblingMachine {
    active_energy_usage: Energy
    arm_01_back_animation: Animation
    arm_02_right_animation: Animation
    arm_03_front_animation: Animation
    base_day_sprite: Sprite
    base_front_sprite: Sprite
    door_back_open_offset: Vector
    door_back_sprite: Sprite
    door_front_open_offset: Vector
    door_front_sprite: Sprite
    door_opening_speed: number
    energy_usage: Energy
    hole_clipping_box: BoundingBox
    hole_light_sprite: Sprite
    hole_sprite: Sprite
    idle_energy_usage: Energy
    lamp_energy_usage: Energy
    light_blinking_speed: number
    red_lights_back_sprites: Sprite
    red_lights_front_sprites: Sprite
    rocket_entity: string
    rocket_glow_overlay_sprite: Sprite
    rocket_parts_required: number
    rocket_shadow_overlay_sprite: Sprite
    satellite_animation: Animation
    satellite_shadow_animation: Animation
    shadow_sprite: Sprite
    silo_fade_out_end_distance: number
    silo_fade_out_start_distance: number
    times_to_blink: number
    alarm_trigger?: TriggerEffect
    base_engine_light?: LightDefinition
    base_light?: LightDefinition
    base_night_sprite?: Sprite
    clamps_off_trigger?: TriggerEffect
    clamps_on_trigger?: TriggerEffect
    doors_trigger?: TriggerEffect
    raise_rocket_trigger?: TriggerEffect
    rocket_result_inventory_size?: ItemStackIndex
}

interface PrototypeRocketSiloRocket extends PrototypeEntity {
    effects_fade_in_end_distance: number
    effects_fade_in_start_distance: number
    engine_starting_speed: number
    flying_acceleration: number
    flying_speed: number
    full_render_layer_switch_distance: number
    inventory_size: ItemStackIndex
    rising_speed: number
    rocket_flame_animation: Animation
    rocket_flame_left_animation: Animation
    rocket_flame_left_rotation: number
    rocket_flame_right_animation: Animation
    rocket_flame_right_rotation: number
    rocket_launch_offset: Vector
    rocket_render_layer_switch_distance: number
    rocket_rise_offset: Vector
    rocket_shadow_sprite: Sprite
    rocket_smoke_bottom1_animation: Animation
    rocket_smoke_bottom2_animation: Animation
    rocket_smoke_top1_animation: Animation
    rocket_smoke_top2_animation: Animation
    rocket_smoke_top3_animation: Animation
    rocket_sprite: Sprite
    rocket_visible_distance_from_center: number
    shadow_fade_out_end_ratio: number
    shadow_fade_out_start_ratio: number
    shadow_slave_entity: string
    dying_explosion?: string
    flying_trigger?: TriggerEffect
    glow_light?: LightDefinition
    result_items?: Table[]
    rocket_initial_offset?: Vector
}

interface PrototypeRollingStock extends PrototypeVehicle {
    air_resistance: number
    connection_distance: number
    joint_distance: number
    max_speed: number
    pictures: RotatedSprite
    vertical_selection_shift: number
    wheels: RotatedSprite
    allow_manual_color?: boolean
    allow_robot_dispatch_in_automatic_mode?: boolean
    back_light?: LightDefinition
    color?: Color
    drive_over_tie_trigger?: TriggerEffect
    horizontal_doors?: Animation
    stand_by_light?: LightDefinition
    tie_distance?: number
    vertical_doors?: Animation
}

interface PrototypeSelectionTool extends PrototypeItemWithLabel {
    alt_selection_color: Color
    alt_selection_cursor_box_type: string
    alt_selection_mode: string[]
    selection_color: Color
    selection_cursor_box_type: string
    selection_mode: string[]
    alt_entity_filter_mode?: string
    alt_entity_filters?: string[]
    alt_entity_type_filters?: string[]
    alt_tile_filter_mode?: string
    alt_tile_filters?: string[]
    always_include_tiles?: boolean
    entity_filter_mode?: string
    entity_filters?: string[]
    entity_type_filters?: string[]
    mouse_cursor?: string
    show_in_library?: boolean
    tile_filter_mode?: string
    tile_filters?: string[]
}

interface PrototypeShortcut extends PrototypeBase {
    action: string
    icon: Sprite
    associated_control_input?: string
    disabled_icon?: Sprite
    disabled_small_icon?: Sprite
    item_to_create?: string
    small_icon?: Sprite
    style?: string
    technology_to_unlock?: string
    toggleable?: boolean
}

interface PrototypeSimpleEntity extends PrototypeEntityWithHealth {
    animations?: AnimationVariations
    count_as_rock_for_filtered_deconstruction?: boolean
    picture?: Sprite
    pictures?: SpriteVariations
    random_animation_offset?: boolean
    render_layer?: RenderLayer
}

interface PrototypeSimpleEntityWithForce extends PrototypeEntityWithHealth {
    animations?: AnimationVariations
    force_visibility?: ForceCondition
    picture?: Sprite
    pictures?: SpriteVariations
    random_animation_offset?: boolean
    render_layer?: RenderLayer
}

interface PrototypeSimpleEntityWithOwner extends PrototypeEntityWithHealth {
    animations?: AnimationVariations
    picture?: Sprite
    pictures?: SpriteVariations
    random_animation_offset?: boolean
    render_layer?: RenderLayer
}

interface PrototypeSmoke extends PrototypeEntity {
    animation: Animation
    affected_by_wind?: boolean
    color?: Color
    cyclic?: boolean
    duration?: number
    end_scale?: number
    fade_away_duration?: number
    fade_in_duration?: number
    glow_animation?: Animation
    glow_fade_away_duration?: number
    movement_slow_down_factor?: number
    render_layer?: RenderLayer
    show_when_smoke_off?: boolean
    spread_duration?: number
    start_scale?: number
}

interface PrototypeSmokeWithTrigger extends PrototypeSmoke {
    action?: Trigger
    action_cooldown?: number
}

interface PrototypeSolarPanel extends PrototypeEntityWithHealth {
    energy_source: EnergySource
    picture: SpriteVariations
    production: Energy
    overlay?: SpriteVariations
}

interface PrototypeSolarPanelEquipment extends PrototypeEquipment {
    power: Energy
}

interface PrototypeSound {
    name: string
    type: string
    aggregation?: Table
    audible_distance_modifier?: number
    category?: string
    filename?: FileName
    preload?: boolean
    variations?: Table[]
    volume?: number
}

interface PrototypeSpectatorController {
    movement_speed: number
    name: string
    type: string
}

interface PrototypeSpeechBubble extends PrototypeEntity {
    style: string
    y_offset?: number
}

interface PrototypeSplitter extends PrototypeTransportBeltConnectable {
    structure: Table
    structure_animation_movement_cooldown?: number
    structure_animation_speed_coefficient?: number
}

interface PrototypeSprite {
    filename: FileName
    name: string
    type: string
    apply_runtime_tint?: boolean
    blend_mode?: string
    draw_as_shadow?: boolean
    flags?: SpriteFlags
    generate_sdf?: boolean
    height?: SpriteSizeType
    hr_version?: Sprite
    layers?: Sprite[]
    load_in_minimal_mode?: boolean
    mipmap_count?: number
    position?: SpriteSizeType[]
    premul_alpha?: boolean
    priority?: string
    scale?: number
    shift?: Vector
    size?: SpriteSizeType | SpriteSizeType[]
    slice?: SpriteSizeType
    slice_x?: SpriteSizeType
    slice_y?: SpriteSizeType
    tint?: Color
    width?: SpriteSizeType
    x?: SpriteSizeType
    y?: SpriteSizeType
}

interface PrototypeSticker extends PrototypeEntity {
    duration_in_ticks: number
    animation?: Animation
    damage_per_tick?: DamagePrototype
    fire_spread_cooldown?: number
    fire_spread_radius?: number
    force_visibility?: ForceCondition
    selection_box_type?: string
    single_particle?: boolean
    spread_fire_entity?: string
    stickers_per_square_meter?: number
    target_movement_modifier?: number
    target_movement_modifier_from?: number
    target_movement_modifier_to?: number
    vehicle_friction_modifier?: number
    vehicle_friction_modifier_from?: number
    vehicle_friction_modifier_to?: number
    vehicle_speed_modifier?: number
    vehicle_speed_modifier_from?: number
    vehicle_speed_modifier_to?: number
}

interface PrototypeStorageTank extends PrototypeEntityWithHealth {
    flow_length_in_ticks: number
    fluid_box: FluidBox
    pictures: Table
    window_bounding_box: BoundingBox
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_points?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    scale_info_icons?: boolean
    two_direction_only?: boolean
}

interface PrototypeStraightRail extends PrototypeRail {
    bending_type?: string
}

interface PrototypeTechnology extends PrototypeBase {
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    unit: Table
    effects?: Modifier[]
    enabled?: boolean
    hidden?: boolean
    max_level?: number | string
    prerequisites?: string[]
    upgrade?: boolean
    visible_when_disabled?: boolean
}

interface PrototypeTile extends PrototypeBase {
    collision_mask: CollisionMask
    layer: number
    map_color: Color
    variants: Transitions
    ageing?: number
    allowed_neighbors?: string[]
    autoplace?: AutoplaceSpecification
    build_sound?: Sound
    can_be_part_of_blueprint?: boolean
    decorative_removal_probability?: number
    draw_in_water_layer?: boolean
    layer_group?: string
    minable?: MinableProperties
    mined_sound?: Sound
    needs_correction?: boolean
    next_direction?: string
    pollution_absorption_per_second?: number
    tint?: Color
    transition_merges_with_tile?: string
    transition_overlay_layer_offset?: number
    transitions?: Transitions[]
    transitions_between_transitions?: Transitions[]
    vehicle_friction_modifier?: number
    walking_sound?: Sound
    walking_speed_modifier?: number
}

interface PrototypeTool extends PrototypeItem {
    durability?: number
    durability_description_key?: string
    durability_description_value?: string
    infinite?: boolean
}

interface PrototypeTrainPathAchievement extends PrototypeAchievement {
    minimum_distance: number
}

interface PrototypeTrainStop extends PrototypeEntityWithHealth {
    animation_ticks_per_frame: number
    animations?: Animation4Way
    chart_name?: boolean
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_points?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    color?: Color
    default_train_stopped_signal?: SignalIDConnector
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    drawing_boxes?: Table
    light1?: Table
    light2?: Table
    rail_overlay_animations?: Animation4Way
    top_animations?: Animation4Way
}

interface PrototypeTransportBelt extends PrototypeTransportBeltConnectable {
    connector_frame_sprites: TransportBeltConnectorFrame
    animations?: RotatedAnimation
    belt_animation_set?: Table
    circuit_connector_sprites?: CircuitConnectorSprites[]
    circuit_wire_connection_point?: WireConnectionPoint[]
    circuit_wire_max_distance?: number
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
}

interface PrototypeTransportBeltConnectable extends PrototypeEntityWithHealth {
    speed: number
    animation_speed_coefficient?: number
    belt_animation_set?: Table
    belt_horizontal?: Animation
    belt_vertical?: Animation
    ending_bottom?: Animation
    ending_patch?: Sprite4Way
    ending_side?: Animation
    ending_top?: Animation
    ends_with_stopper?: boolean
    starting_bottom?: Animation
    starting_side?: Animation
    starting_top?: Animation
}

interface PrototypeTree extends PrototypeEntityWithHealth {
    colors?: Color[]
    darkness_of_burnt_tree?: number
    pictures?: SpriteVariations
    variation_weights?: number[]
    variations?: TreePrototypeVariation[]
}

interface PrototypeTriggerTargetType {
    name: string
    type: string
}

interface PrototypeTrivialSmoke extends PrototypeBase {
    animation: Animation
    affected_by_wind?: boolean
    color?: Color
    cyclic?: boolean
    duration?: number
    end_scale?: number
    fade_away_duration?: number
    fade_in_duration?: number
    glow_animation?: Animation
    glow_fade_away_duration?: number
    movement_slow_down_factor?: number
    render_layer?: RenderLayer
    show_when_smoke_off?: boolean
    spread_duration?: number
    start_scale?: number
}

interface PrototypeTurret extends PrototypeEntityWithHealth {
    attack_parameters: AttackParameters
    call_for_help_radius: number
    alert_when_attacking?: boolean
    allow_turning_when_starting_attack?: boolean
    attack_from_start_frame?: boolean
    attacking_animation?: RotatedAnimation4Way
    attacking_speed?: number
    base_picture?: Animation4Way
    base_picture_render_layer?: RenderLayer
    base_picture_secondary_draw_order?: number
    corpse?: string
    dying_sound?: Sound
    ending_attack_animation?: RotatedAnimation4Way
    ending_attack_speed?: number
    energy_glow_animation?: RotatedAnimation4Way
    folded_animation?: RotatedAnimation4Way
    folded_speed?: number
    folded_speed_secondary?: number
    folding_animation?: RotatedAnimation4Way
    folding_sound?: Sound
    folding_speed?: number
    glow_light_intensity?: number
    gun_animation_render_layer?: RenderLayer
    gun_animation_secondary_draw_order?: number
    integration?: Sprite
    prepare_range?: number
    prepared_alternative_animation?: RotatedAnimation4Way
    prepared_alternative_chance?: number
    prepared_alternative_sound?: Sound
    prepared_alternative_speed?: number
    prepared_alternative_speed_secondary?: number
    prepared_animation?: RotatedAnimation4Way
    prepared_sound?: Sound
    prepared_speed?: number
    prepared_speed_secondary?: number
    preparing_animation?: RotatedAnimation4Way
    preparing_sound?: Sound
    preparing_speed?: number
    random_animation_offset?: boolean
    rotation_speed?: number
    secondary_animation?: boolean
    shoot_in_prepare_state?: boolean
    starting_attack_animation?: RotatedAnimation4Way
    starting_attack_sound?: Sound
    starting_attack_speed?: number
    turret_base_has_direction?: boolean
}

interface PrototypeTutorial extends PrototypeBase {
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    scenario: string
    trigger: Table
    dependencies?: string[]
    related_items?: string[]
}

interface PrototypeUndergroundBelt extends PrototypeTransportBeltConnectable {
    max_distance: number
    structure: Table
    underground_remove_belts_sprite: Sprite
    underground_sprite: Sprite
}

interface PrototypeUnit extends PrototypeEntityWithHealth {
    ai_settings: UnitAISettings
    attack_parameters: AttackParameters
    distance_per_frame: number
    distraction_cooldown: number
    movement_speed: number
    pollution_to_join_attack: number
    run_animation: RotatedAnimation
    vision_distance: number
    affected_by_tiles?: boolean
    alternative_attacking_frame_sequence?: Table
    can_open_gates?: boolean
    dying_sound?: Sound
    has_belt_immunity?: boolean
    max_pursue_distance?: number
    min_pursue_time?: number
    move_while_shooting?: boolean
    radar_range?: number
    render_layer?: RenderLayer
    rotation_speed?: number
    spawning_time_modifier?: number
}

interface PrototypeUpgradeItem extends PrototypeSelectionTool {
    mapper_count?: ItemStackIndex
    show_in_library?: boolean
}

interface PrototypeUtilityConstants {
    bonus_gui_ordering: Table
    building_buildable_tint: Color
    building_buildable_too_far_tint: Color
    building_ignorable_tint: Color
    building_no_tint: Color
    building_not_buildable_tint: Color
    capsule_range_visualization_color: Color
    chart: Table
    clipboard_history_size: number
    deconstruct_mark_tint: Color
    default_alert_icon_scale: number
    default_enemy_force_color: Color
    default_other_force_color: Color
    default_player_force_color: Color
    disabled_recipe_slot_tint: Color
    enabled_recipe_slot_tint: Color
    entity_button_background_color: Color
    entity_renderer_search_box_limits: Table
    filter_outline_color: Color
    forced_enabled_recipe_slot_tint: Color
    ghost_tint: Color
    icon_shadow_color: Color
    icon_shadow_inset: number
    icon_shadow_radius: number
    icon_shadow_sharpness: number
    item_outline_color: Color
    item_outline_inset: number
    item_outline_radius: number
    item_outline_sharpness: number
    manual_rail_building_reach_modifier: number
    map_editor: Table
    max_terrain_building_size: number
    name: string
    player_colors: Table[]
    rail_segment_colors: Color[]
    recipe_step_limit: number
    script_command_console_chat_color: Color
    server_command_console_chat_color: Color
    train_inactivity_wait_condition_default: number
    train_path_finding: Table
    train_temporary_stop_wait_time: number
    train_time_wait_condition_default: number
    turret_range_visualization_color: Color
    type: string
    zoom_to_world_can_use_nightvision: boolean
    zoom_to_world_darkness_multiplier: number
    zoom_to_world_effect_strength: number
    default_alert_icon_scale_by_type?: Array<{[key: string]: number }>
    default_alert_icon_shift_by_type?: Array<{[key: string]: Vector }>
    default_trigger_target_mask_by_type?: Array<{[key: string]: TriggerTargetMask }>
}

interface PrototypeUtilitySounds {
    achievement_unlocked: Sound
    alert_destroyed: Sound
    armor_insert: Sound
    armor_remove: Sound
    axe_fighting: Sound
    axe_mining_ore: Sound
    build_big: Sound
    build_medium: Sound
    build_small: Sound
    cannot_build: Sound
    console_message: Sound
    crafting_finished: Sound
    deconstruct_big: Sound
    deconstruct_medium: Sound
    deconstruct_small: Sound
    default_manual_repair: Sound
    game_lost: Sound
    game_won: Sound
    gui_click: Sound
    inventory_move: Sound
    list_box_click: Sound
    metal_walking_sound: Sound
    mining_wood: Sound
    name: string
    new_objective: Sound
    research_completed: Sound
    scenario_message: Sound
    tutorial_notice: Sound
    type: string
    wire_connect_pole: Sound
    wire_disconnect: Sound
    wire_pickup: Sound
}

interface PrototypeUtilitySprites extends PrototypeBase {
    achievement_label_failed: Sprite
    achievement_label_locked: Sprite
    achievement_label_unlocked: Sprite
    achievement_label_unlocked_off: Sprite
    add: Sprite
    ammo_damage_modifier_icon: Sprite
    ammo_icon: Sprite
    and_or: Sprite
    area_icon: Sprite
    arrow_button: Animation
    artillery_range_modifier_icon: Sprite
    auto_character_logistic_trash_slots_modifier_icon: Sprite
    bar_gray_pip: Sprite
    battery_indicator: Sprite
    brush_circle_shape: Sprite
    brush_icon: Sprite
    brush_square_shape: Sprite
    cable_editor_icon: Sprite
    center: Sprite
    character_additional_mining_categories_modifier_icon: Sprite
    character_build_distance_modifier_icon: Sprite
    character_crafting_speed_modifier_icon: Sprite
    character_health_bonus_modifier_icon: Sprite
    character_inventory_slots_bonus_modifier_icon: Sprite
    character_item_drop_distance_modifier_icon: Sprite
    character_item_pickup_distance_modifier_icon: Sprite
    character_logistic_slots_modifier_icon: Sprite
    character_logistic_trash_slots_modifier_icon: Sprite
    character_loot_pickup_distance_modifier_icon: Sprite
    character_mining_speed_modifier_icon: Sprite
    character_reach_distance_modifier_icon: Sprite
    character_resource_reach_distance_modifier_icon: Sprite
    character_running_speed_modifier_icon: Sprite
    check_mark_white: Sprite
    circuit_network_panel: Sprite
    clear: Sprite
    cliff_editor_icon: Sprite
    clock: Sprite
    clone: Sprite
    clone_editor_icon: Sprite
    close_black: Sprite
    close_fat: Sprite
    close_white: Sprite
    clouds: Animation
    collapse: Sprite
    collapse_dark: Sprite
    color_effect: Sprite
    color_picker: Sprite
    confirm_slot: Sprite
    construction_radius_visualization: Sprite
    copper_wire: Sprite
    covered_chunk: Sprite
    crafting_machine_recipe_not_unlocked: Sprite
    cursor_box: Table
    cursor_icon: Sprite
    custom_tag_in_map_view: Sprite
    danger_icon: Sprite
    deconstruction_mark: Sprite
    deconstruction_time_to_live_modifier_icon: Sprite
    decorative_editor_icon: Sprite
    default_ammo_damage_modifier_icon: Sprite
    default_gun_speed_modifier_icon: Sprite
    default_turret_attack_modifier_icon: Sprite
    destroyed_icon: Sprite
    down_arrow: Sprite
    downloaded: Sprite
    downloaded_white: Sprite
    downloading: Sprite
    downloading_white: Sprite
    dropdown: Sprite
    editor_pause: Sprite
    editor_play: Sprite
    editor_selection: Sprite
    editor_speed_down: Sprite
    editor_speed_up: Sprite
    electric_network_info: Sprite
    electricity_icon: Sprite
    electricity_icon_unplugged: Sprite
    enemy_force_icon: Sprite
    enter: Sprite
    entity_editor_icon: Sprite
    entity_info_dark_background: Sprite
    equipment_collision: Sprite
    equipment_slot: Sprite
    expand: Sprite
    expand_dark: Sprite
    expand_dots: Sprite
    expand_dots_white: Sprite
    explosion_chart_visualization: Animation
    export: Sprite
    export_slot: Sprite
    favourite_server_icon: Sprite
    fluid_icon: Sprite
    fluid_indication_arrow: Sprite
    fluid_indication_arrow_both_ways: Sprite
    follower_robot_lifetime_modifier_icon: Sprite
    force_editor_icon: Sprite
    fuel_icon: Sprite
    game_stopped_visualization: Sprite
    ghost_bar_pip: Sprite
    ghost_cursor: Sprite
    ghost_time_to_live_modifier_icon: Sprite
    give_item_modifier_icon: Sprite
    go_to_arrow: Sprite
    gps_map_icon: Sprite
    green_circle: Sprite
    green_dot: Sprite
    green_wire: Sprite
    green_wire_hightlight: Sprite
    grey_placement_indicator_leg: Sprite
    grey_rail_signal_placement_indicator: Sprite
    gun_speed_modifier_icon: Sprite
    hand: Sprite
    health_bar_green_pip: Sprite
    health_bar_red_pip: Sprite
    health_bar_yellow_pip: Sprite
    heat_exchange_indication: Sprite
    hint_arrow_down: Sprite
    hint_arrow_left: Sprite
    hint_arrow_right: Sprite
    hint_arrow_up: Sprite
    import: Sprite
    import_slot: Sprite
    indication_arrow: Sprite
    indication_line: Sprite
    inserter_stack_size_bonus_modifier_icon: Sprite
    item_editor_icon: Sprite
    laboratory_productivity_modifier_icon: Sprite
    laboratory_speed_modifier_icon: Sprite
    left_arrow: Sprite
    light_cone: Sprite
    light_medium: Sprite
    light_small: Sprite
    line_icon: Sprite
    logistic_network_panel: Sprite
    logistic_radius_visualization: Sprite
    map: Sprite
    map_exchange_string: Sprite
    max_failed_attempts_per_tick_per_construction_queue_modifier_icon: Sprite
    max_successful_attempts_per_tick_per_construction_queue_modifier_icon: Sprite
    maximum_following_robots_count_modifier_icon: Sprite
    medium_gui_arrow: Sprite
    mining_drill_productivity_bonus_modifier_icon: Sprite
    missing_icon: Sprite
    missing_mod_icon: Sprite
    mod_dependency_arrow: Sprite
    multiplayer_waiting_icon: Sprite
    nature_icon: Sprite
    neutral_force_icon: Sprite
    no_building_material_icon: Sprite
    no_nature_icon: Sprite
    no_storage_space_icon: Sprite
    none_editor_icon: Sprite
    not_available: Sprite
    not_enough_construction_robots_icon: Sprite
    not_enough_repair_packs_icon: Sprite
    nothing_modifier_icon: Sprite
    paint_bucket_icon: Sprite
    pause: Sprite
    placement_indicator_leg: Sprite
    play: Sprite
    player_force_icon: Sprite
    pollution_visualization: Sprite
    preset: Sprite
    pump_cannot_connect_icon: Sprite
    questionmark: Sprite
    quick_bar_count_modifier_icon: Sprite
    rail_path_not_possible: Sprite
    rail_planner_indication_arrow: Sprite
    rail_planner_indication_arrow_too_far: Sprite
    rail_signal_placement_indicator: Sprite
    recharge_icon: Sprite
    red_wire: Sprite
    red_wire_hightlight: Sprite
    refresh: Sprite
    refresh_white: Animation
    remove: Sprite
    rename_icon_normal: Sprite
    rename_icon_small: Sprite
    reset: Sprite
    reset_white: Sprite
    resource_editor_icon: Sprite
    right_arrow: Sprite
    robot_slot: Sprite
    scripting_editor_icon: Sprite
    search_icon: Sprite
    set_bar_slot: Sprite
    shield_bar_pip: Sprite
    shoot_cursor_green: Sprite
    shoot_cursor_red: Sprite
    short_indication_line: Sprite
    show_electric_network_in_map_view: Sprite
    show_logistics_network_in_map_view: Sprite
    show_player_names_in_map_view: Sprite
    show_pollution_in_map_view: Sprite
    show_train_station_names_in_map_view: Sprite
    show_turret_range_in_map_view: Sprite
    shuffle: Sprite
    side_menu_achievements_hover_icon: Sprite
    side_menu_achievements_icon: Sprite
    side_menu_bonus_hover_icon: Sprite
    side_menu_bonus_icon: Sprite
    side_menu_map_hover_icon: Sprite
    side_menu_map_icon: Sprite
    side_menu_menu_hover_icon: Sprite
    side_menu_menu_icon: Sprite
    side_menu_production_hover_icon: Sprite
    side_menu_production_icon: Sprite
    side_menu_train_hover_icon: Sprite
    side_menu_train_icon: Sprite
    side_menu_tutorials_icon: Sprite
    slot: Sprite
    slot_icon_ammo: Sprite
    slot_icon_armor: Sprite
    slot_icon_blueprint: Sprite
    slot_icon_fuel: Sprite
    slot_icon_gun: Sprite
    slot_icon_module: Sprite
    slot_icon_resource: Sprite
    slot_icon_result: Sprite
    slot_icon_robot: Sprite
    slot_icon_robot_material: Sprite
    slot_icon_upgrade: Sprite
    small_gui_arrow: Sprite
    spawn_flag: Sprite
    speed_down: Sprite
    speed_up: Sprite
    spray_icon: Sprite
    stack_inserter_capacity_bonus_modifier_icon: Sprite
    station_name: Sprite
    stop: Sprite
    surface_editor_icon: Sprite
    sync_mods: Sprite
    tick_custom: Sprite
    tick_once: Sprite
    tick_sixty: Sprite
    tile_editor_icon: Sprite
    time_editor_icon: Sprite
    too_far: Sprite
    too_far_from_roboport_icon: Sprite
    track_button: Sprite
    train_braking_force_bonus_modifier_icon: Sprite
    train_stop_in_map_view: Sprite
    train_stop_placement_indicator: Sprite
    trash: Sprite
    trash_bin: Sprite
    trash_white: Sprite
    turret_attack_modifier_icon: Sprite
    underground_pipe_connection: Sprite
    underground_remove_belts: Sprite
    underground_remove_pipes: Sprite
    unlock_recipe_modifier_icon: Sprite
    upgrade_mark: Sprite
    warning: Sprite
    warning_icon: Sprite
    warning_white: Sprite
    white_mask: Sprite
    white_square: Sprite
    wire_shadow: Sprite
    worker_robot_battery_modifier_icon: Sprite
    worker_robot_speed_modifier_icon: Sprite
    worker_robot_storage_modifier_icon: Sprite
    zoom_to_world_blueprint_enabled_modifier_icon: Sprite
    zoom_to_world_deconstruction_planner_enabled_modifier_icon: Sprite
    zoom_to_world_enabled_modifier_icon: Sprite
    zoom_to_world_ghost_building_enabled_modifier_icon: Sprite
    zoom_to_world_selection_tool_enabled_modifier_icon: Sprite
    zoom_to_world_upgrade_planner_enabled_modifier_icon: Sprite
}

interface PrototypeVehicle extends PrototypeEntityWithHealth {
    braking_power: Energy | number
    braking_force: Energy | number
    energy_per_hit_point: number
    friction: number
    friction_force: number
    weight: number
    crash_trigger?: TriggerEffect
    equipment_grid?: string
    minimap_representation?: Sprite
    selected_minimap_representation?: Sprite
    sound_minimum_speed?: number
    stop_trigger?: TriggerEffect
    stop_trigger_speed?: number
    terrain_friction_modifier?: number
}

interface PrototypeVirtualSignal extends PrototypeBase {
    icons?: IconData
    icon_size: SpriteSizeType
    icon_mipmaps?: number
    icon?: FileName
    special_signal?: boolean
    subgroup?: string
}

interface PrototypeWall extends PrototypeEntityWithHealth {
    pictures: Table
    circuit_connector_sprites?: CircuitConnectorSprites
    circuit_wire_connection_point?: WireConnectionPoint
    circuit_wire_max_distance?: number
    connected_gate_visualization?: Sprite
    default_output_signal?: SignalIDConnector
    draw_circuit_wires?: boolean
    draw_copper_wires?: boolean
    wall_diode_green?: Sprite4Way
    wall_diode_green_light_bottom?: LightDefinition
    wall_diode_green_light_left?: LightDefinition
    wall_diode_green_light_right?: LightDefinition
    wall_diode_green_light_top?: LightDefinition
    wall_diode_red?: Sprite4Way
    wall_diode_red_light_bottom?: LightDefinition
    wall_diode_red_light_left?: LightDefinition
    wall_diode_red_light_right?: LightDefinition
    wall_diode_red_light_top?: LightDefinition
}

interface PrototypeWindSound {
    name: string
    sound: Sound
    type: string
}

interface PrototypeBase {
    name: string
    type: string
    localised_description?: LocalisedString
    localised_name?: LocalisedString
    order?: Order
}
