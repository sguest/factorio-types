// Factorio prototypes
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/prototype-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.95
// API version 4

declare namespace prototype {

interface dataCollection {
    'accumulator': { [key: string]: AccumulatorPrototype }
    'achievement': { [key: string]: AchievementPrototype }
    'active-defense-equipment': { [key: string]: ActiveDefenseEquipmentPrototype }
    'ambient-sound': { [key: string]: AmbientSound }
    'ammo-category': { [key: string]: AmmoCategory }
    'ammo': { [key: string]: AmmoItemPrototype }
    'ammo-turret': { [key: string]: AmmoTurretPrototype }
    'animation': { [key: string]: AnimationPrototype }
    'arithmetic-combinator': { [key: string]: ArithmeticCombinatorPrototype }
    'armor': { [key: string]: ArmorPrototype }
    'arrow': { [key: string]: ArrowPrototype }
    'artillery-flare': { [key: string]: ArtilleryFlarePrototype }
    'artillery-projectile': { [key: string]: ArtilleryProjectilePrototype }
    'artillery-turret': { [key: string]: ArtilleryTurretPrototype }
    'artillery-wagon': { [key: string]: ArtilleryWagonPrototype }
    'assembling-machine': { [key: string]: AssemblingMachinePrototype }
    'autoplace-control': { [key: string]: AutoplaceControl }
    'battery-equipment': { [key: string]: BatteryEquipmentPrototype }
    'beacon': { [key: string]: BeaconPrototype }
    'beam': { [key: string]: BeamPrototype }
    'belt-immunity-equipment': { [key: string]: BeltImmunityEquipmentPrototype }
    'blueprint-book': { [key: string]: BlueprintBookPrototype }
    'blueprint': { [key: string]: BlueprintItemPrototype }
    'boiler': { [key: string]: BoilerPrototype }
    'build-entity-achievement': { [key: string]: BuildEntityAchievementPrototype }
    'burner-generator': { [key: string]: BurnerGeneratorPrototype }
    'capsule': { [key: string]: CapsulePrototype }
    'car': { [key: string]: CarPrototype }
    'cargo-wagon': { [key: string]: CargoWagonPrototype }
    'character-corpse': { [key: string]: CharacterCorpsePrototype }
    'character': { [key: string]: CharacterPrototype }
    'cliff': { [key: string]: CliffPrototype }
    'combat-robot-count': { [key: string]: CombatRobotCountAchievementPrototype }
    'combat-robot': { [key: string]: CombatRobotPrototype }
    'constant-combinator': { [key: string]: ConstantCombinatorPrototype }
    'construct-with-robots-achievement': { [key: string]: ConstructWithRobotsAchievementPrototype }
    'construction-robot': { [key: string]: ConstructionRobotPrototype }
    'container': { [key: string]: ContainerPrototype }
    'copy-paste-tool': { [key: string]: CopyPasteToolPrototype }
    'corpse': { [key: string]: CorpsePrototype }
    'curved-rail': { [key: string]: CurvedRailPrototype }
    'custom-input': { [key: string]: CustomInputPrototype }
    'damage-type': { [key: string]: DamageType }
    'decider-combinator': { [key: string]: DeciderCombinatorPrototype }
    'deconstruct-with-robots-achievement': { [key: string]: DeconstructWithRobotsAchievementPrototype }
    'deconstructible-tile-proxy': { [key: string]: DeconstructibleTileProxyPrototype }
    'deconstruction-item': { [key: string]: DeconstructionItemPrototype }
    'optimized-decorative': { [key: string]: DecorativePrototype }
    'deliver-by-robots-achievement': { [key: string]: DeliverByRobotsAchievementPrototype }
    'dont-build-entity-achievement': { [key: string]: DontBuildEntityAchievementPrototype }
    'dont-craft-manually-achievement': { [key: string]: DontCraftManuallyAchievementPrototype }
    'dont-use-entity-in-energy-production-achievement': { [key: string]: DontUseEntityInEnergyProductionAchievementPrototype }
    'editor-controller': { [key: string]: EditorControllerPrototype }
    'electric-energy-interface': { [key: string]: ElectricEnergyInterfacePrototype }
    'electric-pole': { [key: string]: ElectricPolePrototype }
    'electric-turret': { [key: string]: ElectricTurretPrototype }
    'unit-spawner': { [key: string]: EnemySpawnerPrototype }
    'energy-shield-equipment': { [key: string]: EnergyShieldEquipmentPrototype }
    'entity-ghost': { [key: string]: EntityGhostPrototype }
    'particle': { [key: string]: EntityParticlePrototype }
    'equipment-category': { [key: string]: EquipmentCategory }
    'equipment-grid': { [key: string]: EquipmentGridPrototype }
    'explosion': { [key: string]: ExplosionPrototype }
    'finish-the-game-achievement': { [key: string]: FinishTheGameAchievementPrototype }
    'fire': { [key: string]: FireFlamePrototype }
    'fish': { [key: string]: FishPrototype }
    'flame-thrower-explosion': { [key: string]: FlameThrowerExplosionPrototype }
    'fluid': { [key: string]: FluidPrototype }
    'stream': { [key: string]: FluidStreamPrototype }
    'fluid-turret': { [key: string]: FluidTurretPrototype }
    'fluid-wagon': { [key: string]: FluidWagonPrototype }
    'flying-text': { [key: string]: FlyingTextPrototype }
    'font': { [key: string]: FontPrototype }
    'fuel-category': { [key: string]: FuelCategory }
    'furnace': { [key: string]: FurnacePrototype }
    'gate': { [key: string]: GatePrototype }
    'generator-equipment': { [key: string]: GeneratorEquipmentPrototype }
    'generator': { [key: string]: GeneratorPrototype }
    'god-controller': { [key: string]: GodControllerPrototype }
    'group-attack-achievement': { [key: string]: GroupAttackAchievementPrototype }
    'gui-style': { [key: string]: GuiStyle }
    'gun': { [key: string]: GunPrototype }
    'heat-interface': { [key: string]: HeatInterfacePrototype }
    'heat-pipe': { [key: string]: HeatPipePrototype }
    'highlight-box': { [key: string]: HighlightBoxEntityPrototype }
    'infinity-container': { [key: string]: InfinityContainerPrototype }
    'infinity-pipe': { [key: string]: InfinityPipePrototype }
    'inserter': { [key: string]: InserterPrototype }
    'item-entity': { [key: string]: ItemEntityPrototype }
    'item-group': { [key: string]: ItemGroup }
    'item': { [key: string]: ItemPrototype }
    'item-request-proxy': { [key: string]: ItemRequestProxyPrototype }
    'item-subgroup': { [key: string]: ItemSubGroup }
    'item-with-entity-data': { [key: string]: ItemWithEntityDataPrototype }
    'item-with-inventory': { [key: string]: ItemWithInventoryPrototype }
    'item-with-label': { [key: string]: ItemWithLabelPrototype }
    'item-with-tags': { [key: string]: ItemWithTagsPrototype }
    'kill-achievement': { [key: string]: KillAchievementPrototype }
    'lab': { [key: string]: LabPrototype }
    'lamp': { [key: string]: LampPrototype }
    'land-mine': { [key: string]: LandMinePrototype }
    'leaf-particle': { [key: string]: LeafParticlePrototype }
    'linked-belt': { [key: string]: LinkedBeltPrototype }
    'linked-container': { [key: string]: LinkedContainerPrototype }
    'loader-1x1': { [key: string]: Loader1x1Prototype }
    'loader': { [key: string]: Loader1x2Prototype }
    'locomotive': { [key: string]: LocomotivePrototype }
    'logistic-container': { [key: string]: LogisticContainerPrototype }
    'logistic-robot': { [key: string]: LogisticRobotPrototype }
    'map-gen-presets': { [key: string]: MapGenPresets }
    'map-settings': { [key: string]: MapSettings }
    'market': { [key: string]: MarketPrototype }
    'mining-drill': { [key: string]: MiningDrillPrototype }
    'mining-tool': { [key: string]: MiningToolPrototype }
    'module-category': { [key: string]: ModuleCategory }
    'module': { [key: string]: ModulePrototype }
    'mouse-cursor': { [key: string]: MouseCursor }
    'movement-bonus-equipment': { [key: string]: MovementBonusEquipmentPrototype }
    'noise-expression': { [key: string]: NamedNoiseExpression }
    'night-vision-equipment': { [key: string]: NightVisionEquipmentPrototype }
    'noise-layer': { [key: string]: NoiseLayer }
    'offshore-pump': { [key: string]: OffshorePumpPrototype }
    'optimized-particle': { [key: string]: ParticlePrototype }
    'particle-source': { [key: string]: ParticleSourcePrototype }
    'pipe': { [key: string]: PipePrototype }
    'pipe-to-ground': { [key: string]: PipeToGroundPrototype }
    'player-damaged-achievement': { [key: string]: PlayerDamagedAchievementPrototype }
    'player-port': { [key: string]: PlayerPortPrototype }
    'power-switch': { [key: string]: PowerSwitchPrototype }
    'produce-achievement': { [key: string]: ProduceAchievementPrototype }
    'produce-per-hour-achievement': { [key: string]: ProducePerHourAchievementPrototype }
    'programmable-speaker': { [key: string]: ProgrammableSpeakerPrototype }
    'projectile': { [key: string]: ProjectilePrototype }
    'pump': { [key: string]: PumpPrototype }
    'radar': { [key: string]: RadarPrototype }
    'rail-chain-signal': { [key: string]: RailChainSignalPrototype }
    'rail-planner': { [key: string]: RailPlannerPrototype }
    'rail-remnants': { [key: string]: RailRemnantsPrototype }
    'rail-signal': { [key: string]: RailSignalPrototype }
    'reactor': { [key: string]: ReactorPrototype }
    'recipe-category': { [key: string]: RecipeCategory }
    'recipe': { [key: string]: RecipePrototype }
    'repair-tool': { [key: string]: RepairToolPrototype }
    'research-achievement': { [key: string]: ResearchAchievementPrototype }
    'resource-category': { [key: string]: ResourceCategory }
    'resource': { [key: string]: ResourceEntityPrototype }
    'roboport-equipment': { [key: string]: RoboportEquipmentPrototype }
    'roboport': { [key: string]: RoboportPrototype }
    'rocket-silo': { [key: string]: RocketSiloPrototype }
    'rocket-silo-rocket': { [key: string]: RocketSiloRocketPrototype }
    'rocket-silo-rocket-shadow': { [key: string]: RocketSiloRocketShadowPrototype }
    'selection-tool': { [key: string]: SelectionToolPrototype }
    'shortcut': { [key: string]: ShortcutPrototype }
    'simple-entity': { [key: string]: SimpleEntityPrototype }
    'simple-entity-with-force': { [key: string]: SimpleEntityWithForcePrototype }
    'simple-entity-with-owner': { [key: string]: SimpleEntityWithOwnerPrototype }
    'smoke': { [key: string]: SimpleSmokePrototype }
    'smoke-with-trigger': { [key: string]: SmokeWithTriggerPrototype }
    'solar-panel-equipment': { [key: string]: SolarPanelEquipmentPrototype }
    'solar-panel': { [key: string]: SolarPanelPrototype }
    'sound': { [key: string]: SoundPrototype }
    'spectator-controller': { [key: string]: SpectatorControllerPrototype }
    'speech-bubble': { [key: string]: SpeechBubblePrototype }
    'spider-leg': { [key: string]: SpiderLegPrototype }
    'spider-vehicle': { [key: string]: SpiderVehiclePrototype }
    'spidertron-remote': { [key: string]: SpidertronRemotePrototype }
    'splitter': { [key: string]: SplitterPrototype }
    'sprite': { [key: string]: SpritePrototype }
    'sticker': { [key: string]: StickerPrototype }
    'storage-tank': { [key: string]: StorageTankPrototype }
    'straight-rail': { [key: string]: StraightRailPrototype }
    'technology': { [key: string]: TechnologyPrototype }
    'tile-effect': { [key: string]: TileEffectDefinition }
    'tile-ghost': { [key: string]: TileGhostPrototype }
    'tile': { [key: string]: TilePrototype }
    'tips-and-tricks-item': { [key: string]: TipsAndTricksItem }
    'tips-and-tricks-item-category': { [key: string]: TipsAndTricksItemCategory }
    'tool': { [key: string]: ToolPrototype }
    'train-path-achievement': { [key: string]: TrainPathAchievementPrototype }
    'train-stop': { [key: string]: TrainStopPrototype }
    'transport-belt': { [key: string]: TransportBeltPrototype }
    'tree': { [key: string]: TreePrototype }
    'trigger-target-type': { [key: string]: TriggerTargetType }
    'trivial-smoke': { [key: string]: TrivialSmokePrototype }
    'turret': { [key: string]: TurretPrototype }
    'tutorial': { [key: string]: TutorialDefinition }
    'underground-belt': { [key: string]: UndergroundBeltPrototype }
    'unit': { [key: string]: UnitPrototype }
    'upgrade-item': { [key: string]: UpgradeItemPrototype }
    'utility-constants': { [key: string]: UtilityConstants }
    'utility-sounds': { [key: string]: UtilitySounds }
    'utility-sprites': { [key: string]: UtilitySprites }
    'virtual-signal': { [key: string]: VirtualSignalPrototype }
    'wall': { [key: string]: WallPrototype }
    'wind-sound': { [key: string]: WindSound }

}/**
 * Entity with energy source with specialised animation for charging/discharging. Used for the {@link accumulator | https://wiki.factorio.com/Accumulator} entity.
 * @example
 * ```
 * {
 *   type = "accumulator",
 *   name = "accumulator",
 *   icon = "__base__/graphics/icons/accumulator.png",
 *   icon_size = 32,
 *   flags = {"placeable-neutral", "player-creation"},
 *   minable = {mining_time = 0.1, result = "accumulator"},
 *   max_health = 150,
 *   corpse = "accumulator-remnants",
 *   collision_box = {{-0.9, -0.9}, {0.9, 0.9}},
 *   selection_box = {{-1, -1}, {1, 1}},
 *   drawing_box = {{-1, -1.5}, {1, 1}},
 *   energy_source =
 *   {
 *     type = "electric",
 *     buffer_capacity = "5MJ",
 *     usage_priority = "tertiary",
 *     input_flow_limit = "300kW",
 *     output_flow_limit = "300kW"
 *   },
 *   picture = accumulator_picture(),
 *   charge_animation = accumulator_charge(),
 * 
 *   charge_cooldown = 30,
 *   charge_light = {intensity = 0.3, size = 7, color = {r = 1.0, g = 1.0, b = 1.0}},
 *   discharge_animation = accumulator_discharge(),
 *   discharge_cooldown = 60,
 *   discharge_light = {intensity = 0.7, size = 7, color = {r = 1.0, g = 1.0, b = 1.0}},
 *   vehicle_impact_sound =  { filename = "__base__/sound/car-metal-impact.ogg", volume = 0.65 },
 *   working_sound =
 *   {
 *     sound =
 *     {
 *       filename = "__base__/sound/accumulator-working.ogg",
 *       volume = 1
 *     },
 *     idle_sound =
 *     {
 *       filename = "__base__/sound/accumulator-idle.ogg",
 *       volume = 0.4
 *     },
 *     max_sounds_per_type = 5
 *   },
 * 
 *   circuit_wire_connection_point = circuit_connector_definitions["accumulator"].points,
 *   circuit_connector_sprites = circuit_connector_definitions["accumulator"].sprites,
 *   circuit_wire_max_distance = default_circuit_wire_max_distance,
 * 
 *   default_output_signal = {type = "virtual", name = "signal-A"}
 * }
 * ```
 *
 */
interface AccumulatorPrototype extends EntityWithOwnerPrototype{
    charge_animation?: Animation,
    
    /**
     * Count of ticks to preserve the animation even when the charging ends. Used to prevent rapid blinking of the accumulator with unstable need to use it.
     */
    charge_cooldown: number,
    
    /**
     * Only loaded if `charge_animation` is defined.
     */
    charge_light?: LightDefinition,
    
    /**
     * The pictures displayed for circuit connections to this accumulator.
     */
    circuit_connector_sprites?: CircuitConnectorSprites,
    
    /**
     * Defines how wires visually connect to this accumulator.
     */
    circuit_wire_connection_point?: WireConnectionPoint,
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    
    /**
     * The name of the signal that is the default for when an accumulator is connected to the circuit network.
     */
    default_output_signal?: SignalIDConnector,
    discharge_animation?: Animation,
    
    /**
     * How long (in ticks) the animation will last after discharge has been initialized.
     */
    discharge_cooldown: number,
    
    /**
     * Only loaded if `discharge_animation` is defined.
     */
    discharge_light?: LightDefinition,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * The capacity of the energy source buffer specifies the capacity of the accumulator.
     */
    energy_source: ElectricEnergySource,
    picture?: Sprite
}

/**
 * This prototype definition is used for the in-game achievements.
 * @example
 * ```
 * {
 *   type = "achievement",
 *   name = "so-long-and-thanks-for-all-the-fish",
 *   order = "g[secret]-a[so-long-and-thanks-for-all-the-fish]",
 *   icon = "__base__/graphics/achievement/so-long-and-thanks-for-all-the-fish.png",
 *   icon_size = 128
 * }
 * ```
 *
 */
interface AchievementPrototype extends PrototypeBase{
    
    /**
     * If this is set to `false`, it is not possible to complete the achievement on the peaceful difficulty setting or when the enemy base generation settings have been changed.
     */
    allowed_without_fight?: boolean,
    hidden?: boolean,
    
    /**
     * Path to the icon file.

Mandatory if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Can't be an empty array.
     */
    icons?: IconData[],
    
    /**
     * Unusable by mods, as this refers to unlocking the achievement through Steam.
     */
    steam_stats_name?: string
}

/**
 * Used by {@link discharge defense | https://wiki.factorio.com/Discharge_defense} and {@link personal laser defense | https://wiki.factorio.com/Personal_laser_defense}.
 */
interface ActiveDefenseEquipmentPrototype extends EquipmentPrototype{
    attack_parameters: AttackParameters,
    automatic: boolean
}

/**
 * This prototype is used to make sound while playing the game. This includes the game's {@link music | https://store.steampowered.com/app/436090/Factorio__Soundtrack/}, composed by Daniel James Taylor.
 * @example
 * ```
 * {
 *   type = "ambient-sound",
 *   name = "world-ambience-4",
 *   track_type = "interlude",
 *   sound =
 *   {
 *     filename = "__base__/sound/ambient/world-ambience-4.ogg",
 *     volume = 1.2
 *   }
 * }
 * ```
 *
 */
interface AmbientSound {
    
    /**
     * Unique textual identification of the prototype.
     */
    name: string,
    
    /**
     * The sound file and volume.
     */
    sound: Sound,
    
    /**
     * Lets the game know in what instances the audio file is played.
     */
    track_type: /* This track is only played in the main menu. */ 'menu-track' | /* This track is played interleaved (alternating) with `"interlude"` tracks. */ 'main-track' | /* This track is considered a main track, with no functional difference to `"main-track"`. */ 'early-game' | /* This track is considered a main track, with no functional difference to `"main-track"`. */ 'late-game' | /* This track is played in between the main tracks. */ 'interlude',
    
    /**
     * Specification of the type of the prototype.
     */
    type: 'ambient-sound',
    weight?: number
}

/**
 * An ammo category. Each weapon has an ammo category, and can use any ammo with the same ammo category. Ammo categories can also be upgraded by technologies.
 */
interface AmmoCategory extends PrototypeBase{
    bonus_gui_order?: Order
}

/**
 * Ammo used for a gun.
 */
interface AmmoItemPrototype extends ItemPrototype{
    
    /**
     * When using a plain {@link AmmoType | prototype:AmmoType} (no array), the ammo type applies to everything (`"default"`).

When using an array of AmmoTypes, they have the additional {@link AmmoType::source_type | prototype:AmmoType::source_type} property.
     */
    ammo_type: AmmoType | AmmoType[],
    
    /**
     * Number of shots before ammo item is consumed. Must be >= `1`.
     */
    magazine_size?: number,
    
    /**
     * Amount of extra time (in ticks) it takes to reload the weapon after depleting the magazine. Must be >= `0`.
     */
    reload_time?: number
}

/**
 * A turret that consumes ammo items.
 */
interface AmmoTurretPrototype extends TurretPrototype{
    automated_ammo_count: ItemCountType,
    
    /**
     * Shift of the "alt-mode icon" relative to the turret's position.
     */
    entity_info_icon_shift?: Vector,
    inventory_size: ItemStackIndex
}

/**
 * Specifies an animation that can be used with {@link LuaRendering::draw_animation | runtime:LuaRendering::draw_animation} at runtime.
 */
interface AnimationPrototype {
    
    /**
     * Only loaded if `layers` is not defined.

Modifier of the animation playing speed, the default of `1` means one animation frame per tick (60 fps). The speed of playing can often vary depending on the usage (output of steam engine for example). Has to be greater than `0`.

If `layers` are used, the `animation_speed` only has to be defined in one layer. All layers will run at the same speed.
     */
    animation_speed?: number,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_runtime_tint?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    blend_mode?: BlendMode,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    dice?: number,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    dice_x?: number,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    dice_y?: number,
    
    /**
     * Only loaded if `layers` is not defined.

Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.

Draws first as a normal sprite, then again as a light layer. See {@link https://forums.factorio.com/91682 | https://forums.factorio.com/91682}.
     */
    draw_as_glow?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.

Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     */
    draw_as_light?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.

Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     */
    draw_as_shadow?: boolean,
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `stripes` is not defined.

The path to the sprite file to use.
     */
    filename?: FileName,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    flags?: SpriteFlags,
    
    /**
     * Only loaded if `layers` is not defined.

Can't be `0`.
     */
    frame_count?: number,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    frame_sequence?: AnimationFrameSequence,
    
    /**
     * Only loaded if `layers` is not defined.

Unused.
     */
    generate_sdf?: boolean,
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.

Height of one frame in pixels, from 0-8192.
     */
    height?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

If this property exists and high resolution sprites are turned on, this is used to load the Animation.
     */
    hr_version?: Animation,
    
    /**
     * If this property is present, all Animation definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.

`animation_speed` and `max_advance` of the first layer are used for all layers. All layers will run at the same speed.

If this property is present, all other properties besides `name` and `type` are ignored.
     */
    layers?: Animation[],
    
    /**
     * Only loaded if `layers` is not defined.

Once the specified number of pictures is loaded, other pictures are loaded on other line. This is to allow having longer animations in matrix, to input files with too high width. The game engine limits the width of any input files to 8192px, so it is compatible with most graphics cards. `0` means that all the pictures are in one horizontal line.
     */
    line_length?: number,
    
    /**
     * Only loaded if `layers` is not defined.

Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error ({@link Example | https://cdn.discordapp.com/attachments/340530709712076801/532315796626472972/unknown.png}). Modders can ignore this property.
     */
    load_in_minimal_mode?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.

If `layers` are used, `max_advance` of the first layer is used for all layers.

Maximum amount of frames the animation can move forward in one update.
     */
    max_advance?: number,
    
    /**
     * Only loaded if `layers` is not defined.

Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.

Note that `mipmap_count` doesn't make sense in an animation, as it is not possible to layout mipmaps in a way that would load both the animation and the mipmaps correctly (besides animations with just one frame). See {@link here | https://forums.factorio.com/viewtopic.php?p=549058#p549058}.
     */
    mipmap_count?: number,
    
    /**
     * Name of the animation. Can be used with {@link LuaRendering::draw_animation | runtime:LuaRendering::draw_animation} at runtime.
     */
    name: string,
    
    /**
     * Only loaded if `layers` is not defined.

Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     */
    position?: 
[    SpriteSizeType,
    SpriteSizeType
],
    
    /**
     * Only loaded if `layers` is not defined.

Whether alpha should be pre-multiplied.
     */
    premul_alpha?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    priority?: SpritePriority,
    
    /**
     * Only loaded if `layers` is not defined.

How many times to repeat the animation to complete an animation cycle. E.g. if one layer is 10 frames, a second layer of 1 frame would need `repeat_count = 10` to match the complete cycle.
     */
    repeat_count?: number,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    run_mode?: 'forward' | 'backward' | 'forward-then-backward',
    
    /**
     * Only loaded if `layers` is not defined.

Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     */
    scale?: number,
    
    /**
     * Only loaded if `layers` is not defined.

The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector,
    
    /**
     * Only loaded if `layers` is not defined.

The width and height of one frame. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     */
    size?: SpriteSizeType | 
[    SpriteSizeType,
    SpriteSizeType
],
    
    /**
     * Only loaded if `layers` is not defined.
     */
    stripes?: Stripe[],
    
    /**
     * Only loaded if `layers` is not defined.
     */
    tint?: Color,
    type: 'animation',
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.

Width of one frame in pixels, from 0-8192.
     */
    width?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Horizontal position of the animation in the source file in pixels.
     */
    x?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Vertical position of the animation in the source file in pixels.
     */
    y?: SpriteSizeType
}

/**
 * An {@link arithmetic combinator | https://wiki.factorio.com/Arithmetic_combinator}.
 */
interface ArithmeticCombinatorPrototype extends CombinatorPrototype{
    and_symbol_sprites?: Sprite4Way,
    divide_symbol_sprites?: Sprite4Way,
    left_shift_symbol_sprites?: Sprite4Way,
    minus_symbol_sprites?: Sprite4Way,
    modulo_symbol_sprites?: Sprite4Way,
    multiply_symbol_sprites?: Sprite4Way,
    or_symbol_sprites?: Sprite4Way,
    plus_symbol_sprites?: Sprite4Way,
    power_symbol_sprites?: Sprite4Way,
    right_shift_symbol_sprites?: Sprite4Way,
    xor_symbol_sprites?: Sprite4Way
}

/**
 * Armor to wear on your in-game {@link character | prototype:CharacterPrototype} for defense and buffs.
 */
interface ArmorPrototype extends ToolPrototype{
    
    /**
     * Name of the {@link EquipmentGridPrototype | prototype:EquipmentGridPrototype} that this armor has.
     */
    equipment_grid?: EquipmentGridID,
    
    /**
     * By how many slots the inventory of the player is expanded when the armor is worn.
     */
    inventory_size_bonus?: ItemStackIndex,
    
    /**
     * What amount of damage the armor takes on what type of damage is incoming.
     */
    resistances?: Resistance[]
}

/**
 * The arrows used for example in the campaign, they are literally just arrows.
 * @example
 * ```
 * {
 *   type = "arrow",
 *   name = "orange-arrow-with-circle",
 *   flags = { "placeable-off-grid", "not-on-map" },
 *   blinking = true,
 *   arrow_picture =
 *   {
 *     filename = "__core__/graphics/arrows/gui-arrow-medium.png",
 *     priority = "low",
 *     width = 58,
 *     height = 62
 *   },
 *   circle_picture =
 *   {
 *     filename = "__core__/graphics/arrows/gui-arrow-circle.png",
 *     priority = "low",
 *     width = 50,
 *     height = 50
 *   }
 * }
 * ```
 *
 */
interface ArrowPrototype extends EntityPrototype{
    arrow_picture: Sprite,
    blinking?: boolean,
    circle_picture?: Sprite,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask
}

/**
 * The entity spawned by the {@link artillery targeting remote | https://wiki.factorio.com/Artillery_targeting_remote}.
 */
interface ArtilleryFlarePrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    creation_shift?: Vector,
    
    /**
     * How long this flare stays alive after `shots_per_flare` amount of shots have been shot at it.
     */
    early_death_ticks?: number,
    ended_in_water_trigger_effect?: TriggerEffect,
    initial_frame_speed?: number,
    initial_height?: number,
    initial_speed?: Vector,
    initial_vertical_speed?: number,
    life_time: number,
    map_color: Color,
    movement_modifier?: number,
    movement_modifier_when_on_ground?: number,
    
    /**
     * Picture variation count and individual frame count must be equal to shadow variation count.
     */
    pictures: AnimationVariations,
    regular_trigger_effect?: TriggerEffect,
    regular_trigger_effect_frequency?: number,
    render_layer?: RenderLayer,
    render_layer_when_on_ground?: RenderLayer,
    
    /**
     * The entity with the higher number is selectable before the entity with the lower number. When two entities have the same selection priority, the one with the highest {@link CollisionMask | prototype:CollisionMask} (as determined by the order on that page) is selected.
     */
    selection_priority?: number,
    
    /**
     * Shadow variation variation count and individual frame count must be equal to picture variation count.
     */
    shadows?: AnimationVariations,
    shot_category?: AmmoCategoryID,
    
    /**
     * How many artillery shots should be fired at the position of this flare.
     */
    shots_per_flare?: number
}

/**
 * The projectile shot by {@link artillery | https://wiki.factorio.com/Artillery}.
 */
interface ArtilleryProjectilePrototype extends EntityPrototype{
    action?: Trigger,
    chart_picture?: Sprite,
    
    /**
     * Must have a collision box size of zero.
     */
    collision_box?: BoundingBox,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    final_action?: Trigger,
    height_from_ground?: number,
    map_color: Color,
    picture?: Sprite,
    reveal_map: boolean,
    
    /**
     * Whether the picture of the projectile is rotated to match the direction of travel.
     */
    rotatable?: boolean,
    shadow?: Sprite
}

/**
 * An {@link artillery turret | https://wiki.factorio.com/Artillery_turret}.
 */
interface ArtilleryTurretPrototype extends EntityWithOwnerPrototype{
    alert_when_attacking?: boolean,
    
    /**
     * Must be > 0.
     */
    ammo_stack_limit: ItemCountType,
    automated_ammo_count: ItemCountType,
    base_picture?: Animation4Way,
    base_picture_render_layer?: RenderLayer,
    base_picture_secondary_draw_order?: number,
    base_shift?: Vector,
    
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_light_direction?: Vector3D,
    cannon_barrel_pictures?: RotatedSprite,
    cannon_barrel_recoil_shiftings?: Vector3D[],
    
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[],
    cannon_base_pictures?: RotatedSprite,
    cannon_parking_frame_count?: number,
    cannon_parking_speed?: number,
    disable_automatic_firing?: boolean,
    
    /**
     * Name of a {@link GunPrototype | prototype:GunPrototype}.
     */
    gun: ItemID,
    
    /**
     * Must be > 0.
     */
    inventory_size: ItemStackIndex,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean,
    
    /**
     * Must be positive.
     */
    manual_range_modifier: number,
    rotating_sound?: InterruptibleSound,
    rotating_stopped_sound?: Sound,
    turn_after_shooting_cooldown?: number,
    turret_rotation_speed: number
}

/**
 * An {@link artillery wagon | https://wiki.factorio.com/Artillery_wagon}.
 */
interface ArtilleryWagonPrototype extends RollingStockPrototype{
    
    /**
     * Must be > 0.
     */
    ammo_stack_limit: ItemCountType,
    
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_light_direction?: Vector3D,
    cannon_barrel_pictures?: RotatedSprite,
    cannon_barrel_recoil_shiftings?: Vector3D[],
    
    /**
     * Only loaded if `cannon_barrel_recoil_shiftings` is loaded.
     */
    cannon_barrel_recoil_shiftings_load_correction_matrix?: Vector3D[],
    cannon_base_pictures?: RotatedSprite,
    
    /**
     * Must match `cannon_base_pictures` frame count.
     */
    cannon_base_shiftings?: Vector[],
    cannon_parking_frame_count?: number,
    cannon_parking_speed?: number,
    disable_automatic_firing?: boolean,
    
    /**
     * Name of a {@link GunPrototype | prototype:GunPrototype}.
     */
    gun: ItemID,
    
    /**
     * Must be > 0.
     */
    inventory_size: ItemStackIndex,
    
    /**
     * Must be > 0.
     */
    manual_range_modifier: number,
    rotating_sound?: InterruptibleSound,
    rotating_stopped_sound?: Sound,
    turn_after_shooting_cooldown?: number,
    turret_rotation_speed: number
}

/**
 * An assembling machine - like the assembling machines 1/2/3 in the game, but you can use your own recipe categories.
 */
interface AssemblingMachinePrototype extends CraftingMachinePrototype{
    
    /**
     * Shift of the "alt-mode icon" relative to the machine's center.
     */
    entity_info_icon_shift?: Vector,
    
    /**
     * The preset recipe of this machine. This machine does not show a recipe selection if this is set. The base game uses this for the {@link rocket silo | https://wiki.factorio.com/Rocket_silo}.
     */
    fixed_recipe?: RecipeID,
    
    /**
     * The locale key of the title of the GUI that is shown when the player opens the assembling machine. May not be longer than 200 characters.
     */
    gui_title_key?: string,
    
    /**
     * Sets the maximum number of ingredients this machine can craft with. Any recipe with more ingredients than this will be unavailable in this machine.

This only counts item ingredients, not fluid ingredients! This means if ingredient count is 2, and the recipe has 2 item ingredients and 1 fluid ingredient, it can still be crafted in the machine.
     */
    ingredient_count?: number
}

/**
 * A setting in the map creation GUI. Used by the {@link autoplace system | prototype:AutoplaceSpecification::control}.
 */
interface AutoplaceControl extends PrototypeBase{
    
    /**
     * Whether there is an "enable" checkbox for the autoplace control in the map generator GUI. If this is false, the autoplace control cannot be disabled from the GUI.
     */
    can_be_disabled?: boolean,
    
    /**
     * Controls in what tab the autoplace is shown in the map generator GUI.
     */
    category: 'resource' | 'terrain' | 'enemy',
    
    /**
     * Sets whether this control's richness can be changed. The map generator GUI will only show the richness slider when the `category` is `"resource"`.

If the autoplace control is used to generate ores, you probably want this to be true.
     */
    richness?: boolean
}

/**
 * Used by {@link personal battery | https://wiki.factorio.com/Personal_battery}.
 */
interface BatteryEquipmentPrototype extends EquipmentPrototype{
    
}

/**
 * Entity with the ability to transfer module's effects to its neighboring entities.
 */
interface BeaconPrototype extends EntityWithOwnerPrototype{
    
    /**
     * The types of modules that a player can place inside of the beacon.
     */
    allowed_effects?: EffectTypeLimitation,
    
    /**
     * Only loaded if `graphics_set` is not defined.

The animation for the beacon, when in use.
     */
    animation?: Animation,
    
    /**
     * Only loaded if `graphics_set` is not defined.

The picture of the beacon when it is not on.
     */
    base_picture?: Animation,
    
    /**
     * The multiplier of the module's effects, when shared between neighbors.
     */
    distribution_effectivity: number,
    energy_source: ElectricEnergySource | VoidEnergySource,
    energy_usage: Energy,
    
    /**
     * The graphics for the beacon.
     */
    graphics_set?: BeaconGraphicsSet,
    
    /**
     * The number of module slots in this beacon and their icon positions.
     */
    module_specification: ModuleSpecification,
    radius_visualisation_picture?: Sprite,
    
    /**
     * The maximum distance that this beacon can supply its neighbors with its module's effects. Max distance is 64.
     */
    supply_area_distance: number
}

/**
 * Used as a laser beam.
 */
interface BeamPrototype extends EntityPrototype{
    action?: Trigger,
    
    /**
     * Whether this beams should trigger its action every `damage_interval`. If false, the action is instead triggered when its owner triggers shooting.
     */
    action_triggered_automatically?: boolean,
    
    /**
     * Body segment of the beam. Must have at least 1 variation.
     */
    body: AnimationVariations,
    body_light?: AnimationVariations,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Damage interval can't be 0. A value of 1 will cause the attack to be applied each tick.
     */
    damage_interval: number,
    
    /**
     * End point of the beam.
     */
    ending?: Animation,
    ending_light?: Animation,
    
    /**
     * Only loaded if `start_light`, `ending_light`, `head_light`, `tail_light` and `body_light` are not defined.
     */
    ground_light_animations?: BeamAnimationSet,
    
    /**
     * Head segment of the beam.
     */
    head: Animation,
    head_light?: Animation,
    
    /**
     * Only loaded if `start_light`, `ending_light`, `head_light`, `tail_light` and `body_light` are not defined.

Lights are additively accumulated onto a light-map, which is {@link multiplicatively rendered | https://forums.factorio.com/viewtopic.php?p=435042#p435042} on the game world.
     */
    light_animations?: BeamAnimationSet,
    random_end_animation_rotation?: boolean,
    random_target_offset?: boolean,
    
    /**
     * Start point of the beam.
     */
    start?: Animation,
    start_light?: Animation,
    
    /**
     * Tail segment of the beam.

All animations must have the same number of frames: Tail must have same number of frames as start, ending, head, body, start_light, ending_light, head_light, tail_light and body_light.
     */
    tail: Animation,
    tail_light?: Animation,
    target_offset?: Vector,
    transparent_start_end_animations?: boolean,
    width: number
}

/**
 * Used by {@link belt immunity equipment | https://wiki.factorio.com/Belt_immunity_equipment}.
 */
interface BeltImmunityEquipmentPrototype extends EquipmentPrototype{
    
    /**
     * The continuous power consumption of the belt immunity equipment.
     */
    energy_consumption: Energy
}

/**
 * A {@link blueprint book | https://wiki.factorio.com/Blueprint_book}.
 */
interface BlueprintBookPrototype extends ItemWithInventoryPrototype{
    
    /**
     * If the item will draw its label when held in the cursor in place of the item count.
     */
    draw_label_for_cursor_render?: boolean,
    
    /**
     * The inventory size of the item.
     */
    inventory_size: ItemStackIndex | 'dynamic',
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: 1
}

/**
 * A {@link blueprint | https://wiki.factorio.com/Blueprint}.
 */
interface BlueprintItemPrototype extends SelectionToolPrototype{
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_type_filters?: string[],
    
    /**
     * This property is hardcoded to `"blueprint"`.
     */
    alt_selection_mode?: SelectionModeFlags,
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filters?: TileID[],
    
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean,
    
    /**
     * Whether the item will draw its label when held in the cursor in place of the item count.
     */
    draw_label_for_cursor_render?: boolean,
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_type_filters?: string[],
    
    /**
     * This property is hardcoded to `"blueprint"`.
     */
    selection_mode?: SelectionModeFlags,
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: 1,
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filters?: TileID[]
}

/**
 * A {@link boiler | https://wiki.factorio.com/Boiler}. It heats fluid and optionally outputs it as a different fluid.
 */
interface BoilerPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Controls for how many ticks the boiler will show the fire and fire_glow after the energy source runs out of energy.

Note that `fire` and `fire_glow` alpha is set to the light intensity of the energy source, so 0 light intensity means the fire is invisible. For burner energy sources, the light intensity will reach zero rather quickly after the boiler runs out of fuel, effectively capping the time that `fire` and `fire_glow` will be shown after the boiler runs out of fuel.
     */
    burning_cooldown: number,
    energy_consumption: Energy,
    energy_source: EnergySource,
    
    /**
     * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_flicker_enabled`.

The secondary draw order of this is higher than the secondary draw order of `fire_glow`, so this is drawn above `fire_glow`.
     */
    fire: BoilerFire,
    
    /**
     * If this is set to false, `fire` alpha is always 1 instead of being controlled by the light intensity of the energy source.
     */
    fire_flicker_enabled?: boolean,
    
    /**
     * Animation that is drawn on top of the `structure` when `burning_cooldown` is larger than 1. The animation alpha can be controlled by the energy source light intensity, depending on `fire_glow_flicker_enabled`.

The secondary draw order of this is lower than the secondary draw order of `fire`, so this is drawn below `fire`.
     */
    fire_glow: BoilerFireGlow,
    
    /**
     * If this is set to false, `fire_glow` alpha is always 1 instead of being controlled by the light intensity of the energy source.
     */
    fire_glow_flicker_enabled?: boolean,
    
    /**
     * The input fluid box.

If `mode` is `"heat-water-inside"`, the fluid is heated up directly in this fluidbox.
     */
    fluid_box: FluidBox,
    
    /**
     * In the `"heat-water-inside"` mode, fluid in the `fluid_box` is continuously heated from the input temperature up to its {@link FluidPrototype::max_temperature | prototype:FluidPrototype::max_temperature}.

In the `"output-to-separate-pipe"` mode, fluid is transferred from the `fluid_box` to the `output_fluid_box` when enough energy is available to {@link heat | prototype:FluidPrototype::heat_capacity} the input fluid to the `target_temperature`. Setting a filter on the `output_fluid_box` means that instead of the heated input fluid getting moved to the output, it is converted to the filtered fluid in a 1:1 ratio.
     */
    mode?: 'heat-water-inside' | 'output-to-separate-pipe',
    
    /**
     * The output fluid box.

If `mode` is `"output-to-separate-pipe"` and this has a {@link filter | prototype:FluidBox::filter}, the heated input fluid is converted to the output fluid that is set in the filter (in a 1:1 ratio).

If `mode` is `"heat-water-inside"`, this fluidbox is unused.
     */
    output_fluid_box: FluidBox,
    
    /**
     * Drawn above the `structure`, in the "higher-object-under" {@link RenderLayer | prototype:RenderLayer}. May be useful to correct problems with neighboring pipes overlapping the structure graphics.
     */
    patch?: BoilerPatch,
    structure: BoilerStructure,
    
    /**
     * When `mode` is `"output-to-separate-pipe"`, this is the temperature that the input fluid must reach to be moved to the output fluid box.

When `mode` is `"heat-water-inside"` this is unused. Instead, the fluid {@link max_temperature | prototype:FluidPrototype::max_temperature} is the target temperature for heating the fluid.
     */
    target_temperature: number
}

/**
 * This prototype is used for receiving an achievement when the player builds an entity.
 */
interface BuildEntityAchievementPrototype extends AchievementPrototype{
    
    /**
     * How many entities need to be built.
     */
    amount?: number,
    
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game?: boolean,
    
    /**
     * This will trigger the achievement, if this entity is placed.
     */
    to_build: EntityID,
    
    /**
     * This lets the game know how long into a game, before you can no longer complete the achievement. 0 means infinite time.
     */
    until_second?: number
}

/**
 * An entity that produces power from a burner energy source.
 */
interface BurnerGeneratorPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Whether the `idle_animation` should also play when the generator is active.
     */
    always_draw_idle_animation?: boolean,
    
    /**
     * Plays when the generator is active. `idle_animation` must have the same frame count as animation.
     */
    animation?: Animation4Way,
    
    /**
     * The input energy source of the generator.
     */
    burner: BurnerEnergySource,
    
    /**
     * The output energy source of the generator. Any emissions specified on this energy source are ignored, they must be specified on `burner`.
     */
    energy_source: ElectricEnergySource,
    
    /**
     * Plays when the generator is inactive. Idle animation must have the same frame count as `animation`.
     */
    idle_animation?: Animation4Way,
    
    /**
     * How much energy this generator can produce.
     */
    max_power_output: Energy,
    
    /**
     * Animation runs at least this fast.
     */
    min_perceived_performance?: number,
    performance_to_sound_speedup?: number
}

/**
 * A capsule, for example a {@link combat robot capsule | https://wiki.factorio.com/Combat_robot_capsules} or the {@link raw fish | https://wiki.factorio.com/Raw_fish}.
 */
interface CapsulePrototype extends ItemPrototype{
    capsule_action: CapsuleAction,
    
    /**
     * Color of the range radius that is shown around the player when they hold the capsule.
     */
    radius_color?: Color
}

/**
 * Entity with specialized properties for acceleration, braking, and turning.
 */
interface CarPrototype extends VehiclePrototype{
    
    /**
     * Animation speed 1 means 1 frame per tile.
     */
    animation: RotatedAnimation,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    consumption: Energy,
    darkness_to_render_light_animation?: number,
    
    /**
     * Modifies the efficiency of energy transfer from burner output to wheels.
     */
    effectivity: number,
    
    /**
     * Must be a burner energy source when using `"burner"`, otherwise it can also be a void energy source.
     */
    energy_source: BurnerEnergySource | VoidEnergySource,
    
    /**
     * The names of the  {@link GunPrototype | prototype:GunPrototype}s this car prototype uses.
     */
    guns?: ItemID[],
    
    /**
     * If this car is immune to movement by belts.
     */
    has_belt_immunity?: boolean,
    
    /**
     * If this car gets damaged by driving against {@link cliffs | prototype:CliffPrototype}.
     */
    immune_to_cliff_impacts?: boolean,
    
    /**
     * If this car gets damaged by driving over/against {@link rocks | prototype:SimpleEntityPrototype::count_as_rock_for_filtered_deconstruction}.
     */
    immune_to_rock_impacts?: boolean,
    
    /**
     * If this car gets damaged by driving over/against {@link trees | prototype:TreePrototype}.
     */
    immune_to_tree_impacts?: boolean,
    
    /**
     * Size of the car inventory.
     */
    inventory_size: ItemStackIndex,
    light?: LightDefinition,
    
    /**
     * Must have the same frame count as `animation`.
     */
    light_animation?: RotatedAnimation,
    render_layer?: RenderLayer,
    rotation_speed: number,
    sound_no_fuel?: Sound,
    
    /**
     * If this car prototype uses tank controls to drive.
     */
    tank_driving?: boolean,
    track_particle_triggers?: FootstepTriggerEffectList,
    
    /**
     * Animation speed 1 means 1 frame per tile.
     */
    turret_animation?: RotatedAnimation,
    
    /**
     * Timeout in ticks specifying how long the turret must be inactive to return to the default position.
     */
    turret_return_timeout?: number,
    turret_rotation_speed?: number
}

/**
 * A {@link cargo wagon | https://wiki.factorio.com/Cargo_wagon}.
 */
interface CargoWagonPrototype extends RollingStockPrototype{
    
    /**
     * Size of the inventory of the wagon. The inventory can be limited using the red bar and filtered. This functionality cannot be turned off.
     */
    inventory_size: ItemStackIndex
}

/**
 * The corpse of a {@link CharacterPrototype | prototype:CharacterPrototype}.
 */
interface CharacterCorpsePrototype extends EntityPrototype{
    
    /**
     * Table of key value pairs, the keys are armor names and the values are numbers. The number is the Animation that is associated with the armor, e.g. using `1` will associate the armor with the first Animation in the pictures table.
     */
    armor_picture_mapping?: {[key: string]: number},
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Mandatory if `pictures` is not defined.
     */
    picture?: Animation,
    
    /**
     * Mandatory if `picture` is not defined.
     */
    pictures?: AnimationVariations,
    render_layer?: RenderLayer,
    time_to_live: number
}

/**
 * Entity that you move around on the screen during the campaign and freeplay.
 */
interface CharacterPrototype extends EntityWithOwnerPrototype{
    animations: CharacterArmorAnimation[],
    build_distance: number,
    
    /**
     * Name of the character corpse that is spawned when this character dies.
     */
    character_corpse?: EntityID,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Names of the crafting categories the character can craft recipes from. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#recipe-category}. See also {@link RecipeCategory | prototype:RecipeCategory}.
     */
    crafting_categories?: RecipeCategoryID[],
    damage_hit_tint: Color,
    distance_per_frame: number,
    drop_item_distance: number,
    
    /**
     * The sound played when the character eats (fish for example).
     */
    eat: Sound,
    
    /**
     * Must be >= 0.
     */
    enter_vehicle_distance?: number,
    
    /**
     * Triggered when the running animation (`animations`) rolls over the frames defined in `right_footprint_frames` and `left_footprint_frames`.
     */
    footprint_particles?: FootprintParticle[],
    
    /**
     * Triggered every tick of the running animation.
     */
    footstep_particle_triggers?: FootstepTriggerEffectList,
    
    /**
     * Whether this character is moved by belts when standing on them.
     */
    has_belt_immunity?: boolean,
    
    /**
     * The sound played when the character's health is low.
     */
    heartbeat: Sound,
    
    /**
     * Number of slots in the main inventory. May be 0.
     */
    inventory_size: ItemStackIndex,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean,
    item_pickup_distance: number,
    
    /**
     * The frames in the running animation (`animations`) where the left foot touches the ground.
     */
    left_footprint_frames?: number[],
    
    /**
     * Offset from the center of the entity for the left footprint. Used by `footprint_particles`.
     */
    left_footprint_offset?: Vector,
    light?: LightDefinition,
    loot_pickup_distance: number,
    maximum_corner_sliding_distance: number,
    
    /**
     * Names of the resource categories the character can mine resources from.
     */
    mining_categories?: ResourceCategoryID[],
    mining_speed: number,
    
    /**
     * List of positions in the mining with tool animation when the mining sound and mining particles are created.
     */
    mining_with_tool_particles_animation_positions: number[],
    reach_distance: number,
    reach_resource_distance: number,
    
    /**
     * Time in seconds. Must be positive
     */
    respawn_time?: number,
    
    /**
     * The frames in the running animation (`animations`) where the right foot touches the ground.
     */
    right_footprint_frames?: number[],
    
    /**
     * Offset from the center of the entity for the right footprint. Used by `footprint_particles`.
     */
    right_footprint_offset?: Vector,
    
    /**
     * List of positions in the running animation when the walking sound is played.
     */
    running_sound_animation_positions: number[],
    running_speed: number,
    
    /**
     * Triggered when the running animation (`animations`) rolls over the frames defined in `right_footprint_frames` and `left_footprint_frames`.
     */
    synced_footstep_particle_triggers?: FootstepTriggerEffectList,
    ticks_to_keep_aiming_direction: number,
    ticks_to_keep_gun: number,
    ticks_to_stay_in_combat: number,
    tool_attack_distance?: number,
    tool_attack_result?: Trigger
}

/**
 * A {@link cliff | https://wiki.factorio.com/Cliff}.
 */
interface CliffPrototype extends EntityPrototype{
    
    /**
     * Name of a capsule that has a robot_action to explode cliffs.
     */
    cliff_explosive?: ItemID,
    cliff_height?: number,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    grid_offset: Vector,
    grid_size: Vector,
    orientations: OrientedCliffPrototypeSet
}

/**
 * This prototype is used for receiving an achievement when the player has a certain robot follower count.
 */
interface CombatRobotCountAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will trigger the achievement, if player's current robot count is over this amount.
     */
    count?: number
}

/**
 * A combat robot. Can attack enemies.
 */
interface CombatRobotPrototype extends FlyingRobotPrototype{
    attack_parameters: AttackParameters,
    
    /**
     * Applied when the combat robot expires (runs out of `time_to_live`).
     */
    destroy_action?: Trigger,
    follows_player?: boolean,
    friction?: number,
    idle: RotatedAnimation,
    in_motion: RotatedAnimation,
    light?: LightDefinition,
    range_from_player?: number,
    shadow_idle: RotatedAnimation,
    shadow_in_motion: RotatedAnimation,
    time_to_live: number
}

/**
 * Abstract base type for decider and arithmetic combinators.
 */
interface CombinatorPrototype extends EntityWithOwnerPrototype{
    active_energy_usage: Energy,
    activity_led_hold_time?: number,
    activity_led_light?: LightDefinition,
    activity_led_light_offsets: 
[    Vector,
    Vector,
    Vector,
    Vector
],
    activity_led_sprites?: Sprite4Way,
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    energy_source: ElectricEnergySource | VoidEnergySource,
    input_connection_bounding_box: BoundingBox,
    input_connection_points: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    output_connection_bounding_box: BoundingBox,
    output_connection_points: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    screen_light?: LightDefinition,
    screen_light_offsets: 
[    Vector,
    Vector,
    Vector,
    Vector
],
    sprites?: Sprite4Way
}

/**
 * A {@link constant combinator | https://wiki.factorio.com/Constant_combinator}.
 */
interface ConstantCombinatorPrototype extends EntityWithOwnerPrototype{
    activity_led_light?: LightDefinition,
    activity_led_light_offsets: 
[    Vector,
    Vector,
    Vector,
    Vector
],
    activity_led_sprites?: Sprite4Way,
    circuit_wire_connection_points: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    item_slot_count: number,
    sprites?: Sprite4Way
}

/**
 * This prototype is used for receiving an achievement when the player constructs enough entities with construction robots.
 */
interface ConstructWithRobotsAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will trigger the achievement, if enough entities were placed using construction robots.
     */
    amount?: number,
    
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game: boolean,
    more_than_manually?: boolean
}

/**
 * A {@link construction robot | https://wiki.factorio.com/Construction_robot}.
 */
interface ConstructionRobotPrototype extends RobotWithLogisticInterfacePrototype{
    
    /**
     * Must have a collision box size of zero.
     */
    collision_box?: BoundingBox,
    construction_vector: Vector,
    repairing_sound?: Sound,
    shadow_working?: RotatedAnimation,
    smoke?: Animation,
    sparks?: AnimationVariations,
    working?: RotatedAnimation,
    working_light?: LightDefinition
}

/**
 * A generic container, such as a chest. Cannot be rotated.
 */
interface ContainerPrototype extends EntityWithOwnerPrototype{
    
    /**
     * The pictures displayed for circuit connections to this container.
     */
    circuit_connector_sprites?: CircuitConnectorSprites,
    
    /**
     * Defines how wires visually connect to this container.
     */
    circuit_wire_connection_point?: WireConnectionPoint,
    
    /**
     * The maximum circuit wire distance for this container.
     */
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * If the inventory limiter (red X) is visible in the chest's GUI. This does not change the inventory itself ({@link LuaInventory::supports_bar | runtime:LuaInventory::supports_bar} will not change and the bar can still be modified by script).
     */
    enable_inventory_bar?: boolean,
    
    /**
     * The number of slots in this container.
     */
    inventory_size: ItemStackIndex,
    
    /**
     * Whether the inventory of this container can be filtered (like cargo wagons) or not.
     */
    inventory_type?: 'with_bar' | 'with_filters_and_bar',
    
    /**
     * The picture displayed for this entity.
     */
    picture?: Sprite,
    
    /**
     * If the icons of items shown in alt-mode should be scaled to the containers size.
     */
    scale_info_icons?: boolean
}

/**
 * A copy-paste or cut-paste tool.
 */
interface CopyPasteToolPrototype extends SelectionToolPrototype{
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_type_filters?: string[],
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filters?: TileID[],
    
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean,
    cuts?: boolean,
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_type_filters?: string[],
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: 1,
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filters?: TileID[]
}

/**
 * Used for corpses, for example the remnants when destroying buildings.
 */
interface CorpsePrototype extends EntityPrototype{
    
    /**
     * The dying animation.
     */
    animation?: RotatedAnimationVariations,
    
    /**
     * Variation count must be the same as `animation` variation count. Direction count must be the same as `animation` direction count. Frame count must be the same as `animation` frame count.
     */
    animation_overlay?: RotatedAnimationVariations,
    animation_overlay_final_render_layer?: RenderLayer,
    animation_overlay_render_layer?: RenderLayer,
    animation_render_layer?: RenderLayer,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * An array of arrays of integers. The inner arrays are called "groups" and must all have the same size.
     */
    direction_shuffle?: Array<number[]>,
    
    /**
     * Multiplier for `time_before_shading_off` and `time_before_removed`. Must be positive.

Controls the speed of the animation: `1 ÷ dying_speed = duration of the animation`
     */
    dying_speed?: number,
    final_render_layer?: RenderLayer,
    ground_patch?: AnimationVariations,
    ground_patch_fade_in_delay?: number,
    ground_patch_fade_in_speed?: number,
    ground_patch_fade_out_duration?: number,
    ground_patch_fade_out_start?: number,
    ground_patch_higher?: AnimationVariations,
    ground_patch_render_layer?: RenderLayer,
    remove_on_entity_placement?: boolean,
    remove_on_tile_placement?: boolean,
    shuffle_directions_at_frame?: number,
    splash?: AnimationVariations,
    splash_render_layer?: RenderLayer,
    
    /**
     * Controls the speed of the splash animation: `1 ÷ splash_speed = duration of the splash animation`
     */
    splash_speed?: number,
    
    /**
     * Time in ticks this corpse lasts. May not be 0.
     */
    time_before_removed?: number,
    
    /**
     * Controls how long the corpse takes to fade, as in how long it takes to get from no transparency to full transparency/removed. This time is ''not'' added to `time_before_removed`, it is instead subtracted from it. So by default, the corpse starts fading about 15 seconds before it gets removed.
     */
    time_before_shading_off?: number,
    use_tile_color_for_ground_patch_tint?: boolean
}

/**
 * The abstract basis of the assembling machines and furnaces. Contains the properties that both of them have.
 * 
 * Note that a crafting machine cannot be rotated unless it has at least one of the following: a fluid box, a heat energy source, a fluid energy source, or a non-square collision box. Crafting machines with non-square collision boxes can only be rotated before placement, not after.
 */
interface CraftingMachinePrototype extends EntityWithOwnerPrototype{
    
    /**
     * Sets the module effects that are allowed to be used on this machine.

Note: If the time to complete a recipe is shorter than one tick, only one craft can be completed per tick, but productivity bonus is applied to the non-limited ''completable'' work. For a simple example, if a recipe were to take half a tick, only one recipe would be completed, but twice the productivity bonus would occur. The surplus production from productivity is **not** limited to one craft per tick.
     */
    allowed_effects?: EffectTypeLimitation,
    
    /**
     * Only loaded if `idle_animation` is defined.
     */
    always_draw_idle_animation?: boolean,
    
    /**
     * The animation played when crafting. When the crafting machine is idle, the animation will be paused.

When a crafting machine cannot be rotated, only the north rotation of the animation will be used.

The `animation_speed` of the animation is divided by 2 by the game. For example, the default animation speed of 1 means one animation frame per 2 ticks (30 fps) instead of the usual 60 fps.
     */
    animation?: Animation4Way,
    
    /**
     * Productivity bonus that this machine always has.
     */
    base_productivity?: number,
    
    /**
     * A list of {@link recipe categories | prototype:RecipeCategory} this crafting machine can use.
     */
    crafting_categories: RecipeCategoryID[],
    
    /**
     * How fast this crafting machine can craft. 1 means that for example a 1 second long recipe take 1 second to craft. 0.5 means it takes 2 seconds, and 2 means it takes 0.5 seconds.

Crafting speed has to be positive.
     */
    crafting_speed: number,
    default_recipe_tint?: DefaultRecipeTint,
    
    /**
     * Whether the "alt-mode icon" should have a black background.
     */
    draw_entity_info_icon_background?: boolean,
    
    /**
     * Defines how the crafting machine is powered.

When using an electric energy source and `drain` is not specified, it will be set to `energy_usage ÷ 30` automatically.
     */
    energy_source: EnergySource,
    
    /**
     * Sets how much energy this machine uses while crafting. Energy usage has to be positive.
     */
    energy_usage: Energy,
    
    /**
     * Shift of the "alt-mode icon" relative to the machine's center.
     */
    entity_info_icon_shift?: Vector,
    
    /**
     * Can have `off_when_no_fluid_recipe` key that has a {@link bool | prototype:bool} value. `off_when_no_fluid_recipe` defaults to false. `off_when_no_fluid_recipe` is ignored by {@link FurnacePrototype | prototype:FurnacePrototype} and considered to always be false.

If a crafting machine has fluid boxes *and* `off_when_no_fluid_recipe` is true, the crafting machine can only be rotated when a recipe consuming or producing fluid is set, or it has one of the other properties listed at the top of the page.
     */
    fluid_boxes?: FluidBox[],
    
    /**
     * Idle animation must have the same frame count as `animation`. It is used for drawing the machine in the idle state. The animation is frozen on a single frame when the machine is idle.

This is an animation and not just sprite to make it possible for idle state and working state to match their visuals when the machine switches from one state to another.

When a crafting machine cannot be rotated, only the north rotation of the idle animation will be used.

The `animation_speed` of the animation is divided by 2 by the game. For example, the default animation speed of 1 means one animation frame per 2 ticks (30 fps) instead of the usual 60 fps.
     */
    idle_animation?: Animation4Way,
    
    /**
     * Whether the speed of the animation and working visualization should be based on the machine's speed (boosted or slowed by modules).
     */
    match_animation_speed_to_activity?: boolean,
    
    /**
     * The number of module slots in this machine, and their icon positions.
     */
    module_specification?: ModuleSpecification,
    
    /**
     * Controls whether the ingredients of an in-progress recipe are destroyed when mining the machine/changing the recipe. If set to true, the ingredients do not get destroyed. This affects only the ingredients of the recipe that is currently in progress, so those that visually have already been consumed while their resulting product has not yet been produced.
     */
    return_ingredients_on_change?: boolean,
    
    /**
     * Whether the "alt-mode icon" should be scaled to the size of the machine.
     */
    scale_entity_info_icon?: boolean,
    
    /**
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_transition_duration?: number,
    
    /**
     * Only loaded if `shift_animation_waypoints` is defined.
     */
    shift_animation_waypoint_stop_duration?: number,
    
    /**
     * Only loaded if one of `shift_animation_waypoint_stop_duration` or `shift_animation_transition_duration` is not 0.
     */
    shift_animation_waypoints?: ShiftAnimationWaypoints,
    
    /**
     * Whether the "alt-mode icon" should be drawn at all.
     */
    show_recipe_icon?: boolean,
    
    /**
     * Whether the recipe icon should be shown on the map.
     */
    show_recipe_icon_on_map?: boolean,
    
    /**
     * Used by {@link WorkingVisualisation::apply_tint | prototype:WorkingVisualisation::apply_tint}.
     */
    status_colors?: StatusColors,
    
    /**
     * Used to display different animations when the machine is running, for example tinted based on the current recipe.

The `animation_speed` of the animation is divided by 2 by the game. For example, the default animation speed of 1 means one animation frame per 2 ticks (30 fps) instead of the usual 60 fps.
     */
    working_visualisations?: WorkingVisualisation[]
}

/**
 * A curved rail.
 */
interface CurvedRailPrototype extends RailPrototype{
    bending_type?: 'turn'
}

/**
 * Used for custom keyboard shortcuts/key bindings in mods. The key associated with the custom input can be changed in the options. This means that `key_sequence` is simply the default key binding.
 */
interface CustomInputPrototype extends PrototypeBase{
    
    /**
     * A {@link Lua event | runtime:CustomInputEvent} is only raised if the action is "lua".
     */
    action?: 'lua' | 'spawn-item' | 'toggle-personal-roboport' | 'toggle-personal-logistic-requests' | 'toggle-equipment-movement-bonus',
    
    /**
     * The alternative key binding for this control. See `key_sequence` for the format.
     */
    alternative_key_sequence?: string,
    
    /**
     * Sets whether internal game events associated with the same key sequence should be fired or blocked. If they are fired ("none"), then the custom input event will happen before the internal game event.
     */
    consuming?: ConsumingType,
    
    /**
     * The alternative controller (game pad) keybinding for this control. See `controller_key_sequence` for the format.
     */
    controller_alternative_key_sequence?: string,
    
    /**
     * The controller (game pad) keybinding for this control. Use "" (empty string) for unassigned.

" + " is used to separate modifier buttons from normal buttons: <code>"controller-righttrigger + controller-a"</code>.

For modifier buttons, the following names are used: "controller-righttrigger", "controller-lefttrigger".

A key binding can contain an unlimited amount of modifier buttons (listed above) but only one normal button (listed below).
     */
    controller_key_sequence?: string,
    
    /**
     * If this custom input is enabled. Disabled custom inputs exist but are not used by the game. If disabled, no event is raised when the input is used.
     */
    enabled?: boolean,
    enabled_while_in_cutscene?: boolean,
    enabled_while_spectating?: boolean,
    
    /**
     * If true, the type and name of the currently selected prototype will be provided as "selected_prototype" in the raised {@link Lua event | runtime:CustomInputEvent}. {@link This also works in GUIs | https://forums.factorio.com/96125}, not just the game world.

This will also return an item in the cursor such as copper-wire or rail-planner, if nothing is beneath the cursor.
     */
    include_selected_prototype?: boolean,
    
    /**
     * The item will be created when this input is pressed and action is set to "spawn-item". The item must have the {@link spawnable | prototype:ItemPrototypeFlags::spawnable} flag set.
     */
    item_to_spawn?: ItemID,
    
    /**
     * The default key sequence for this custom input. Use "" (empty string) for unassigned.

Use "mouse-button-2" etc for mouse buttons, mouse-button-3 for middle mouse button. Use "mouse-wheel-up", "mouse-wheel-down", "mouse-wheel-left", "mouse-wheel-right" for mouse wheel.

" + " is used to separate modifier keys from normal keys: <code>"ALT + G"</code>.

For modifier keys, the following names are used: "CONTROL", "SHIFT", "ALT", "COMMAND".

A key binding can contain an unlimited amount of modifier keys (listed above) but only one normal key (listed below).
     */
    key_sequence: string,
    
    /**
     * When a custom-input is linked to a game control it won't show up in the control-settings GUI and will fire when the linked control is pressed.
     */
    linked_game_control?: LinkedGameControl,
    
    /**
     * Unique textual identification of the prototype. May not contain a dot, nor exceed a length of 200 characters.

For a list of all names used in vanilla, see {@link data.raw | https://wiki.factorio.com/Data.raw}.

It is also the name for the event that is raised when they key (combination) is pressed and action is `"lua"`, see {@link Tutorial:Script interfaces | https://wiki.factorio.com/Tutorial:Script_interfaces#Custom_input}.
     */
    name: string
}

/**
 * A damage type. This is used in the {@link damage system | https://wiki.factorio.com/Damage}. {@link A list of built-in damage types can be found here | https://wiki.factorio.com/Damage#Damage_types}.
 */
interface DamageType extends PrototypeBase{
    hidden?: boolean
}

/**
 * A {@link decider combinator | https://wiki.factorio.com/Decider_combinator}.
 */
interface DeciderCombinatorPrototype extends CombinatorPrototype{
    equal_symbol_sprites?: Sprite4Way,
    greater_or_equal_symbol_sprites?: Sprite4Way,
    greater_symbol_sprites?: Sprite4Way,
    less_or_equal_symbol_sprites?: Sprite4Way,
    less_symbol_sprites?: Sprite4Way,
    not_equal_symbol_sprites?: Sprite4Way
}

/**
 * This prototype is used for receiving an achievement when the player deconstructs enough entities with construction robots.
 */
interface DeconstructWithRobotsAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will trigger the achievement, if enough entities were deconstructed using construction robots.
     */
    amount: number
}

/**
 * Entity used to signify that the tile below it should be deconstructed.
 */
interface DeconstructibleTileProxyPrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask
}

/**
 * A {@link deconstruction planner | https://wiki.factorio.com/Deconstruction_planner}.
 */
interface DeconstructionItemPrototype extends SelectionToolPrototype{
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_type_filters?: string[],
    
    /**
     * This property is hardcoded to `"cancel-deconstruct"`.
     */
    alt_selection_mode?: SelectionModeFlags,
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filters?: TileID[],
    
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean,
    
    /**
     * Can't be > 255.
     */
    entity_filter_count?: ItemStackIndex,
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_type_filters?: string[],
    
    /**
     * This property is hardcoded to `"deconstruct"`.
     */
    selection_mode?: SelectionModeFlags,
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: 1,
    
    /**
     * Can't be > 255.
     */
    tile_filter_count?: ItemStackIndex,
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filters?: TileID[]
}

/**
 * Simple decorative purpose objects on the map, they have no health and some of them are removed when the player builds over. Usually used for grass patches, roots, small plants etc.
 */
interface DecorativePrototype extends PrototypeBase{
    autoplace?: AutoplaceSpecification,
    
    /**
     * Must contain the [0,0] point. Max radius of the collision box is 8.
     */
    collision_box?: BoundingBox,
    collision_mask?: CollisionMask,
    
    /**
     * Loaded only if `render_layer` = "decals".
     */
    decal_overdraw_priority?: number,
    grows_through_rail_path?: boolean,
    
    /**
     * Must contain at least 1 picture.
     */
    pictures: SpriteVariations,
    render_layer?: RenderLayer,
    
    /**
     * Mandatory if `render_layer` = "decals". This int16 is converted to a {@link RenderLayer | prototype:RenderLayer} internally.
     */
    tile_layer?: number,
    
    /**
     * Called by {@link DestroyDecorativesTriggerEffectItem | prototype:DestroyDecorativesTriggerEffectItem}.
     */
    trigger_effect?: TriggerEffect,
    walking_sound?: Sound
}

/**
 * This prototype is used for receiving an achievement, when the player requests and receives enough items using logistic robots.
 */
interface DeliverByRobotsAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will trigger the achievement, when the player receives enough items through logistic robots.
     */
    amount: MaterialAmountType
}

/**
 * This prototype is used for receiving an achievement when the player finishes the game without building a specific entity.
 */
interface DontBuildEntityAchievementPrototype extends AchievementPrototype{
    amount?: number,
    
    /**
     * This will disable the achievement, if this entity is placed. If you finish the game without building this entity, you receive the achievement.
     */
    dont_build: EntityID | EntityID[]
}

/**
 * This prototype is used for receiving an achievement when the player finishes the game without crafting more than a set amount.
 */
interface DontCraftManuallyAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will disable the achievement, if the player crafts more than this.
     */
    amount: MaterialAmountType
}

/**
 * This prototype is used for receiving an achievement when the player finishes the game without receiving energy from a specific energy source.
 */
interface DontUseEntityInEnergyProductionAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will **not** disable the achievement, if this entity is placed, and you have received any amount of power from it.
     */
    excluded: EntityID | EntityID[],
    
    /**
     * This will disable the achievement, if this entity is placed, and you have received any amount of power from it. If you finish the game without receiving power from this entity, you receive the achievement.
     */
    included: EntityID | EntityID[],
    last_hour_only?: boolean,
    minimum_energy_produced?: Energy
}

/**
 * Properties of the editor controller.
 */
interface EditorControllerPrototype {
    adjust_speed_based_off_zoom: boolean,
    enable_flash_light: boolean,
    fill_built_entity_energy_buffers: boolean,
    generate_neighbor_chunks: boolean,
    gun_inventory_size: ItemStackIndex,
    instant_blueprint_building: boolean,
    instant_deconstruction: boolean,
    instant_rail_planner: boolean,
    instant_upgrading: boolean,
    inventory_size: ItemStackIndex,
    item_pickup_distance: number,
    loot_pickup_distance: number,
    mining_speed: number,
    
    /**
     * Must be >= 0.34375.
     */
    movement_speed: number,
    
    /**
     * Name of the editor controller. Base game uses "default".
     */
    name: string,
    placed_corpses_never_expire: boolean,
    render_as_day: boolean,
    show_additional_entity_info_gui: boolean,
    show_character_tab_in_controller_gui: boolean,
    show_entity_health_bars: boolean,
    show_entity_tags: boolean,
    show_hidden_entities: boolean,
    show_infinity_filters_in_controller_gui: boolean,
    show_status_icons: boolean,
    type: 'editor-controller'
}

/**
 * Entity with electric energy source with that can have some of its values changed runtime. Useful for modding in energy consumers/producers.
 */
interface ElectricEnergyInterfacePrototype extends EntityWithOwnerPrototype{
    allow_copy_paste?: boolean,
    
    /**
     * Only loaded if both `picture` and `pictures` are not defined.
     */
    animation?: Animation,
    
    /**
     * Only loaded if `picture`, `pictures`, and `animation` are not defined.
     */
    animations?: Animation4Way,
    
    /**
     * Whether the electric energy interface animation always runs instead of being scaled to activity.
     */
    continuous_animation?: boolean,
    energy_production?: Energy,
    energy_source: ElectricEnergySource,
    energy_usage?: Energy,
    gui_mode?: 'all' | 'none' | 'admins',
    
    /**
     * The light that this electric energy interface emits.
     */
    light?: LightDefinition,
    picture?: Sprite,
    
    /**
     * Only loaded if `picture` is not defined.
     */
    pictures?: Sprite4Way,
    render_layer?: RenderLayer
}

/**
 * An electric pole - part of the {@link electric system | https://wiki.factorio.com/Electric_system}.
 */
interface ElectricPolePrototype extends EntityWithOwnerPrototype{
    
    /**
     * Drawn above the `pictures` when the electric pole is connected to an electric network.
     */
    active_picture?: Sprite,
    connection_points: WireConnectionPoint[],
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * Drawn when the electric pole is connected to an electric network.
     */
    light?: LightDefinition,
    
    /**
     * The maximum distance between this pole and any other connected pole - if two poles are farther apart than this, they cannot be connected together directly. Corresponds to "wire reach" in the item tooltip.

Max value is 64.
     */
    maximum_wire_distance?: number,
    pictures: RotatedSprite,
    radius_visualisation_picture?: Sprite,
    
    /**
     * The "radius" of this pole's supply area. Corresponds to *half* of the "supply area" in the item tooltip. If this is 3.5, the pole will have a 7x7 supply area.

Max value is 64.
     */
    supply_area_distance: number,
    track_coverage_during_build_by_moving?: boolean
}

/**
 * A turret that consumes electricity as ammo.
 */
interface ElectricTurretPrototype extends TurretPrototype{
    energy_source: ElectricEnergySource | VoidEnergySource
}

/**
 * Can spawn entities. Used for biter/spitter nests.
 */
interface EnemySpawnerPrototype extends EntityWithOwnerPrototype{
    
    /**
     * If this is true, this entities `is_military_target property` can be changed runtime (on the entity, not on the prototype itself).
     */
    allow_run_time_change_of_is_military_target?: false,
    animations: AnimationVariations,
    call_for_help_radius: number,
    dying_sound?: Sound,
    integration?: SpriteVariations,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: true,
    
    /**
     * Count of enemies this spawner can sustain.
     */
    max_count_of_owned_units: number,
    max_darkness_to_spawn?: number,
    
    /**
     * How many friendly units are required within the {@link EnemySpawnerPrototype::spawning_radius | prototype:EnemySpawnerPrototype::spawning_radius} of this spawner for it to stop producing more units.
     */
    max_friends_around_to_spawn: number,
    
    /**
     * Max richness to determine spawn shift. Spawn shift is linear interpolation between 0 and max_spawn_shift.
     */
    max_richness_for_spawn_shift: number,
    
    /**
     * Caps how much richness can be added on top of evolution when spawning units. {@link See also | https://www.reddit.com/r/factorio/comments/8pjscm/friday_facts_246_the_gui_update_part_3/e0bttnp/}
     */
    max_spawn_shift: number,
    min_darkness_to_spawn?: number,
    pollution_absorption_absolute: number,
    pollution_absorption_proportional: number,
    random_animation_offset?: boolean,
    
    /**
     * Array of the {@link entities | prototype:EntityPrototype} that this spawner can spawn and their spawn probabilities. The sum of probabilities is expected to be 1.0. The array must not be empty.
     */
    result_units: UnitSpawnDefinition[],
    
    /**
     * Decoratives to be created when the spawner is created by the {@link map generator | https://wiki.factorio.com/Map_generator}. Placed when enemies expand if `spawn_decorations_on_expansion` is set to true.
     */
    spawn_decoration?: CreateDecorativesTriggerEffectItem | CreateDecorativesTriggerEffectItem[],
    
    /**
     * Whether `spawn_decoration` should be spawned when enemies {@link expand | https://wiki.factorio.com/Enemies#Expansions}.
     */
    spawn_decorations_on_expansion?: boolean,
    
    /**
     * Ticks for cooldown after unit is spawned
     */
    spawning_cooldown: 
[    number,
    number
],
    
    /**
     * How far from the spawner can the units be spawned.
     */
    spawning_radius: number,
    
    /**
     * What spaces should be between the spawned units.
     */
    spawning_spacing: number
}

/**
 * Used by {@link energy shield | https://wiki.factorio.com/Energy_shield}.
 */
interface EnergyShieldEquipmentPrototype extends EquipmentPrototype{
    energy_per_shield: Energy,
    max_shield_value: number
}

/**
 * The entity used for ghosts of entities. In-game, the inner entity (the entity this is a ghost of) is rendered with a {@link UtilityConstants::ghost_tint | prototype:UtilityConstants::ghost_tint}.
 * @example
 * ```
 * {
 *   type = "entity-ghost",
 *   name = "entity-ghost",
 *   icon = "__core__/graphics/icons/mip/ghost-entity.png",
 *   icon_size = 64,
 *   icon_mipmaps = 3,
 *   build_sound = { { filename = "__core__/sound/build-ghost-small.ogg",  volume = 0.6 } },
 *   medium_build_sound = { { filename = "__core__/sound/build-ghost-medium.ogg",  volume = 0.7 } },
 *   large_build_sound = { { filename = "__core__/sound/build-ghost-large.ogg",  volume = 0.7 } },
 *   minable = { mining_time = 0, results = {} },
 *   mined_sound = { { filename = "__core__/sound/deconstruct-ghost.ogg",  volume = 0.4 } }
 * }
 * ```
 *
 */
interface EntityGhostPrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    large_build_sound?: Sound,
    medium_build_sound?: Sound
}

/**
 * Deprecated in 0.18. The type "particle" has been obsoleted and cannot be created. See {@link ParticlePrototype | prototype:ParticlePrototype} for particles.
 */
interface EntityParticlePrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask
}

/**
 * Abstract base of all entities in the game. Entity is nearly everything that can be on the map(except tiles).
 * 
 * For in game script access to entity, take a look at {@link LuaEntity | runtime:LuaEntity}.
 * @example
 * ```
 * {
 *   type = "container",
 *   name = "wooden-chest",
 *   icon = "__base__/graphics/icons/wooden-chest.png",
 *   flags = { "placeable-neutral", "player-creation" },
 *   minable = { mining_time = 1, result = "wooden-chest" },
 *   max_health = 100,
 *   corpse = "small-remnants",
 *   collision_box = { {-0.35, -0.35}, {0.35, 0.35} },
 *   fast_replaceable_group = "container",
 *   selection_box = { {-0.5, -0.5}, {0.5, 0.5} },
 *   inventory_size = 16,
 *   open_sound = { filename = "__base__/sound/wooden-chest-open.ogg" },
 *   close_sound = { filename = "__base__/sound/wooden-chest-close.ogg" },
 *   vehicle_impact_sound = { filename = "__base__/sound/car-wood-impact.ogg", volume = 1.0 },
 *   picture =
 *   {
 *     filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
 *     priority = "extra-high",
 *     width = 46,
 *     height = 33,
 *     shift = {0.25, 0.015625}
 *   }
 * }
 * ```
 *
 */
interface EntityPrototype extends PrototypeBase{
    
    /**
     * Names of the entity prototypes this entity prototype can be pasted on to in addition to the standard supported types.

This is used to allow copying between types that aren't compatible on the C++ code side, by allowing mods to receive the {@link on_entity_settings_pasted | runtime:on_entity_settings_pasted} event for the given entity and do the setting pasting via script.
     */
    additional_pastable_entities?: EntityID[],
    alert_icon_scale?: number,
    alert_icon_shift?: Vector,
    allow_copy_paste?: boolean,
    
    /**
     * Used to specify the rules for placing this entity during map generation.
     */
    autoplace?: AutoplaceSpecification,
    build_base_evolution_requirement?: number,
    
    /**
     * Supported values are 1 (for 1x1 grid) and 2 (for 2x2 grid, like rails).

Internally forced to be `2` for {@link RailPrototype | prototype:RailPrototype}, {@link RailRemnantsPrototype | prototype:RailRemnantsPrototype} and {@link TrainStopPrototype | prototype:TrainStopPrototype}.
     */
    build_grid_size?: number,
    build_sound?: Sound,
    close_sound?: Sound,
    
    /**
     * Specification of the entity collision boundaries. Empty collision box means no collision and is used for smoke, projectiles, particles, explosions etc.

The `{0,0}` coordinate in the collision box will match the entity position. It should be near the center of the collision box, to keep correct entity drawing order. The bounding box must include the `{0,0}` coordinate.

Note, that for buildings, it is customary to leave 0.1 wide border between the edge of the tile and the edge of the building, this lets the player move between the building and electric poles/inserters etc.
     */
    collision_box?: BoundingBox,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * The effect/trigger that happens when the entity is placed.
     */
    created_effect?: Trigger,
    
    /**
     * The smoke that is shown when the entity is placed.
     */
    created_smoke?: CreateTrivialSmokeEffectItem,
    
    /**
     * Specification of space needed to see the whole entity in GUIs. This is used to calculate the correct zoom and positioning in the entity info gui, for example in the entity tooltip.
     */
    drawing_box?: BoundingBox,
    
    /**
     * Amount of emissions created (positive number) or cleaned (negative number) every second by the entity. This is passive, and it is independent concept of the emissions of machines, these are created actively depending on the power consumption. Currently used just for trees.
     */
    emissions_per_second?: number,
    enemy_map_color?: Color,
    
    /**
     * This allows you to replace an entity that's already placed, with a different one in your inventory. For example, replacing a burner inserter with a fast inserter. The replacement entity can be a different rotation to the replaced entity and you can replace an entity with the same type.

This is simply a string, so any string can be used here. The entity that should be replaced simply has to use the same string here.
     */
    fast_replaceable_group?: string,
    flags?: EntityPrototypeFlags,
    friendly_map_color?: Color,
    
    /**
     * Where beams should hit the entity. Useful if the bounding box only covers part of the entity (e.g. feet of the character) and beams only hitting there would look weird.
     */
    hit_visualization_box?: BoundingBox,
    
    /**
     * Path to the icon file.

Either this or `icons` is mandatory for entities that have at least one of these flags active: `"placeable-neutral"`, `"placeable-player`", `"placeable-enemy"`.

Only loaded if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Only loaded if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * This will be used in the electric network statistics, editor building selection, and the bonus gui. Can't be an empty array.

Either this or `icon` is mandatory for entities that have at least one of these flags active: `"placeable-neutral"`, `"placeable-player`", `"placeable-enemy"`.
     */
    icons?: IconData[],
    map_color?: Color,
    
    /**
     * Used instead of the collision box during map generation. Allows space entities differently during map generation, for example if the box is bigger, the entities will be placed farther apart.
     */
    map_generator_bounding_box?: BoundingBox,
    
    /**
     * The item given to the player when they mine the entity and other properties relevant to mining this entity.
     */
    minable?: MinableProperties,
    mined_sound?: Sound,
    mining_sound?: Sound,
    
    /**
     * Name of the entity that will be automatically selected as the upgrade of this entity when using the {@link upgrade planner | https://wiki.factorio.com/Upgrade_planner} without configuration.

This entity may not have "not-upgradable" flag set and must be minable. This entity mining result must not contain item product with "hidden" flag set. Mining results with no item products are allowed. The entity may not be a {@link RollingStockPrototype | prototype:RollingStockPrototype}.

The upgrade target entity needs to have the same bounding box, collision mask, and fast replaceable group as this entity. The upgrade target entity must have least 1 item that builds it that isn't hidden.
     */
    next_upgrade?: EntityID,
    open_sound?: Sound,
    
    /**
     * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.

The order string is taken from the items in `placeable_by` if they exist, or from an item that has its {@link place_result | prototype:ItemPrototype::place_result} set to this entity.
     */
    order?: Order,
    
    /**
     * Item that when placed creates this entity. Determines which item is picked when "Q" (smart pipette) is used on the entity, determines which item is needed in a blueprint of this entity.

The item count specified here can't be larger than the stack size of that item.
     */
    placeable_by?: ItemToPlace | ItemToPlace[],
    
    /**
     * When this is true, this entity prototype should be included during tile collision checks with tiles that have {@link TilePrototype::check_collision_with_entities | prototype:TilePrototype::check_collision_with_entities} set to true.
     */
    protected_from_tile_building?: boolean,
    radius_visualisation_specification?: RadiusVisualisationSpecification,
    
    /**
     * The entity that remains when this one is mined, deconstructed or fast-replaced. The entity wont actually be spawned if it would collide with the entity that is in the process of being mined.
     */
    remains_when_mined?: EntityID | EntityID[],
    
    /**
     * Whether this entity should remove decoratives that collide with it when this entity is built. When set to "automatic", if the entity type is considered {@link a building | runtime:LuaEntityPrototype::is_building} (e.g. an assembling machine or a wall) it will remove decoratives.
     */
    remove_decoratives?: 'automatic' | 'true' | 'false',
    rotated_sound?: Sound,
    selectable_in_game?: boolean,
    
    /**
     * Specification of the entity selection area. When empty the entity will have no selection area (and thus is not selectable).

The selection box is usually a little bit bigger than the collision box, for tileable entities (like buildings) it should match the tile size of the building.
     */
    selection_box?: BoundingBox,
    
    /**
     * The entity with the higher number is selectable before the entity with the lower number. When two entities have the same selection priority, the one with the highest {@link collision mask | prototype:CollisionMask} (as determined by the order on that page) is selected.
     */
    selection_priority?: number,
    
    /**
     * The cursor size used when shooting at this entity.
     */
    shooting_cursor_size?: number,
    
    /**
     * Used to set the area of the entity that can have stickers on it, currently only used for units to specify the area where the green slow down stickers can appear.
     */
    sticker_box?: BoundingBox,
    
    /**
     * The name of the {@link subgroup | prototype:ItemSubGroup} this entity should be sorted into in the map editor building selection.
     */
    subgroup?: ItemSubGroupID,
    tile_height?: number,
    
    /**
     * Used to determine how the center of the entity should be positioned when building (unless the off-grid {@link flag | prototype:EntityPrototypeFlags} is specified).

When the tile width is odd, the center will be in the center of the tile, when it is even, the center is on the tile transition.
     */
    tile_width?: number,
    
    /**
     * Defaults to the mask from {@link UtilityConstants::default_trigger_target_mask_by_type | prototype:UtilityConstants::default_trigger_target_mask_by_type}.
     */
    trigger_target_mask?: TriggerTargetMask,
    
    /**
     * When playing this sound, the volume is scaled by the speed of the vehicle when colliding with this entity.
     */
    vehicle_impact_sound?: Sound,
    
    /**
     * May also be defined inside `graphics_set` instead of directly in the entity prototype. This is useful for entities that use a `graphics_set` property to define their graphics, because then all graphics can be defined in one place.

{@link Currently only renders | https://forums.factorio.com/100703} for {@link EntityWithHealthPrototype | prototype:EntityWithHealthPrototype}.
     */
    water_reflection?: WaterReflectionDefinition,
    
    /**
     * Will also work on entities that don't actually do work.
     */
    working_sound?: WorkingSound
}

/**
 * Abstract base of all entities with health in the game.
 * @example
 * ```
 * {
 *   type = "container",
 *   name = "wooden-chest",
 *   icon = "__base__/graphics/icons/wooden-chest.png",
 *   flags = { "placeable-neutral", "player-creation" },
 *   minable = { mining_time = 1, result = "wooden-chest" },
 *   max_health = 100,
 *   corpse = "small-remnants",
 *   collision_box = { {-0.35, -0.35}, {0.35, 0.35} },
 *   fast_replaceable_group = "container",
 *   selection_box = { {-0.5, -0.5}, {0.5, 0.5} },
 *   inventory_size = 16,
 *   open_sound = { filename = "__base__/sound/wooden-chest-open.ogg" },
 *   close_sound = { filename = "__base__/sound/wooden-chest-close.ogg" },
 *   vehicle_impact_sound = { filename = "__base__/sound/car-wood-impact.ogg", volume = 1.0 },
 *   picture =
 *   {
 *     filename = "__base__/graphics/entity/wooden-chest/wooden-chest.png",
 *     priority = "extra-high",
 *     width = 46,
 *     height = 33,
 *     shift = {0.25, 0.015625}
 *   }
 * }
 * ```
 *
 */
interface EntityWithHealthPrototype extends EntityPrototype{
    alert_when_damaged?: boolean,
    attack_reaction?: AttackReactionItem | AttackReactionItem[],
    
    /**
     * Specifies the names of the {@link CorpsePrototype | prototype:CorpsePrototype} to be used when this entity dies.
     */
    corpse?: EntityID | EntityID[],
    create_ghost_on_death?: boolean,
    damaged_trigger_effect?: TriggerEffect,
    
    /**
     * The entities that are spawned in place of this one when it dies.
     */
    dying_explosion?: ExplosionDefinition | ExplosionDefinition[],
    dying_trigger_effect?: TriggerEffect,
    
    /**
     * The amount of health automatically regenerated per tick. The entity must be active for this to work.
     */
    healing_per_tick?: number,
    
    /**
     * Whether the resistances of this entity should be hidden in the entity tooltip.
     */
    hide_resistances?: boolean,
    
    /**
     * Sprite drawn on ground under the entity to make it feel more integrated into the ground.
     */
    integration_patch?: Sprite4Way,
    integration_patch_render_layer?: RenderLayer,
    
    /**
     * The loot is dropped on the ground when the entity is killed.
     */
    loot?: LootItem[],
    
    /**
     * The unit health can never go over the maximum. Default health of units on creation is set to max. Must be greater than 0.
     */
    max_health?: number,
    random_corpse_variation?: boolean,
    repair_sound?: Sound,
    repair_speed_modifier?: number,
    
    /**
     * See {@link damage | https://wiki.factorio.com/Damage}.
     */
    resistances?: Resistance[]
}

/**
 * Abstract base of all entities with a force in the game. These entities have a {@link LuaEntity::unit_number | runtime:LuaEntity::unit_number} during runtime. Can be high priority {@link military targets | https://wiki.factorio.com/Military_units_and_structures}.
 */
interface EntityWithOwnerPrototype extends EntityWithHealthPrototype{
    
    /**
     * If this is true, this entity's `is_military_target` property can be changed during runtime (on the entity, not on the prototype itself).
     */
    allow_run_time_change_of_is_military_target?: boolean,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean
}

/**
 * Defines a category to be available to {@link equipment | prototype:EquipmentPrototype} and {@link equipment grids | prototype:EquipmentGridPrototype}.
 */
interface EquipmentCategory extends PrototypeBase{
    
}

/**
 * The prototype of an equipment grid, for example the one used in a {@link power armor | https://wiki.factorio.com/Power_armor}.
 */
interface EquipmentGridPrototype extends PrototypeBase{
    
    /**
     * Only {@link equipment | prototype:EquipmentPrototype} with at least one of these {@link categories | prototype:EquipmentCategory} can be inserted into the grid.
     */
    equipment_categories: EquipmentCategoryID[],
    height: number,
    
    /**
     * Whether this locked from user interaction which means that the user cannot put equipment into or take equipment from this equipment grid.
     */
    locked?: boolean,
    width: number
}

/**
 * Abstract base of all equipment modules. Equipment modules can be inserted into {@link equipment grids | prototype:EquipmentGridPrototype}.
 */
interface EquipmentPrototype extends PrototypeBase{
    
    /**
     * The color that the border of the background of this equipment should have when shown inside an equipment grid.
     */
    background_border_color?: Color,
    
    /**
     * The color that the background of this equipment should have when shown inside an equipment grid.
     */
    background_color?: Color,
    
    /**
     * Sets the categories of the equipment. It can only be inserted into {@link grids | prototype:EquipmentGridPrototype::equipment_categories} with at least one matching category.
     */
    categories: EquipmentCategoryID[],
    energy_source: ElectricEnergySource,
    
    /**
     * The color that the background of this equipment should have when held in the players hand and hovering over an equipment grid.
     */
    grabbed_background_color?: Color,
    
    /**
     * How big this equipment should be in the grid and whether it should be one solid rectangle or of a custom shape.
     */
    shape: EquipmentShape,
    
    /**
     * The graphics to use when this equipment is shown inside an equipment grid.
     */
    sprite: Sprite,
    
    /**
     * Name of the item prototype that should be returned to the player when they remove this equipment from an equipment grid.
     */
    take_result?: ItemID
}

/**
 * Used to play an animation and a sound.
 */
interface ExplosionPrototype extends EntityPrototype{
    animations: AnimationVariations,
    beam?: boolean,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    correct_rotation?: boolean,
    fade_in_duration?: number,
    fade_out_duration?: number,
    height?: number,
    light?: LightDefinition,
    
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_intensity_factor_final?: number,
    
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_intensity_factor_initial?: number,
    light_intensity_peak_end_progress?: number,
    light_intensity_peak_start_progress?: number,
    
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_size_factor_final?: number,
    
    /**
     * Silently clamped to be between 0 and 1.
     */
    light_size_factor_initial?: number,
    light_size_peak_end_progress?: number,
    light_size_peak_start_progress?: number,
    render_layer?: RenderLayer,
    rotate?: boolean,
    scale?: number,
    scale_animation_speed?: boolean,
    scale_deviation?: number,
    scale_end?: number,
    scale_in_duration?: number,
    scale_increment_per_tick?: number,
    scale_initial?: number,
    scale_initial_deviation?: number,
    scale_out_duration?: number,
    
    /**
     * Mandatory if `smoke_count` > 0.
     */
    smoke?: TrivialSmokeID,
    smoke_count?: number,
    smoke_slow_down_factor?: number,
    sound?: Sound
}

/**
 * This prototype is used for receiving an achievement when the player finishes the game.
 */
interface FinishTheGameAchievementPrototype extends AchievementPrototype{
    
    /**
     * This lets the game know how long into a game, before you can no longer complete the achievement. 0 means infinite time.
     */
    until_second?: number
}

/**
 * A fire.
 */
interface FireFlamePrototype extends EntityPrototype{
    add_fuel_cooldown?: number,
    burnt_patch_alpha_default?: number,
    burnt_patch_alpha_variations?: TileAndAlpha[],
    burnt_patch_lifetime?: number,
    burnt_patch_pictures?: SpriteVariations,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    damage_multiplier_decrease_per_tick?: number,
    damage_multiplier_increase_per_added_fuel?: number,
    damage_per_tick: DamagePrototype,
    delay_between_initial_flames?: number,
    fade_in_duration?: number,
    fade_out_duration?: number,
    
    /**
     * Only loaded if `uses_alternative_behavior` is false.
     */
    flame_alpha?: number,
    
    /**
     * Only loaded if `uses_alternative_behavior` is false.
     */
    flame_alpha_deviation?: number,
    
    /**
     * Spawns this many `secondary_pictures` around the entity when it first spawns. It waits `delay_between_initial_flames` between each spawned `secondary_pictures`. This can be used to make fires look less repetitive.

For example, spitters use this to make several smaller splashes around the main one.
     */
    initial_flame_count?: number,
    initial_lifetime?: number,
    initial_render_layer?: RenderLayer,
    lifetime_increase_by?: number,
    lifetime_increase_cooldown?: number,
    light?: LightDefinition,
    limit_overlapping_particles?: boolean,
    maximum_damage_multiplier?: number,
    maximum_lifetime?: number,
    maximum_spread_count?: number,
    on_damage_tick_effect?: Trigger,
    on_fuel_added_action?: Trigger,
    
    /**
     * Only loaded if `uses_alternative_behavior` is true.
     */
    particle_alpha?: number,
    particle_alpha_blend_duration?: number,
    
    /**
     * Only loaded if `uses_alternative_behavior` is true.
     */
    particle_alpha_deviation?: number,
    pictures?: AnimationVariations,
    render_layer?: RenderLayer,
    secondary_picture_fade_out_duration?: number,
    secondary_picture_fade_out_start?: number,
    secondary_pictures?: AnimationVariations,
    secondary_render_layer?: RenderLayer,
    small_tree_fire_pictures?: AnimationVariations,
    smoke?: SmokeSource[],
    smoke_fade_in_duration?: number,
    smoke_fade_out_duration?: number,
    smoke_source_pictures?: AnimationVariations,
    spawn_entity?: EntityID,
    spread_delay: number,
    spread_delay_deviation: number,
    tree_dying_factor?: number,
    
    /**
     * If `false`, then all animations loop. If `true`, they run once and stay on the final frame. Also changes the behavior of several other fire properties as mentioned in their descriptions.

For example, spitters use alternate behavior, flamethrower flames don't.
     */
    uses_alternative_behavior?: boolean
}

/**
 * Entity that spawns in water tiles, which can be mined. Moves around unless deactivated with {@link LuaEntity::active | runtime:LuaEntity::active} = false.
 * @example
 * ```
 * {
 *   type = "fish",
 *   name = "fish",
 *   icon = "__base__/graphics/icons/fish.png",
 *   icon_size = 64, icon_mipmaps = 4,
 *   flags = { "placeable-neutral", "not-on-map" },
 *   minable = { mining_time = 1, result = "raw-fish", count = 5 },
 *   max_health = 20,
 *   subgroup = "creatures",
 *   order = "b-a",
 *   collision_box = { {-0.75, -0.75}, {0.75, 0.75} },
 *   selection_box = { {-0.5, -0.3}, {0.5, 0.3} },
 *   pictures =
 *   {
 *     {
 *       filename = "__base__/graphics/entity/fish/fish-1.png",
 *       priority = "extra-high",
 *       width = 22,
 *       height = 36
 *     },
 *     {
 *       filename = "__base__/graphics/entity/fish/fish-2.png",
 *       priority = "extra-high",
 *       width = 32,
 *       height = 32
 *     }
 *   },
 *   autoplace = { influence = 0.01 },
 *   protected_from_tile_building = false
 * }
 * ```
 *
 */
interface FishPrototype extends EntityWithHealthPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    pictures: SpriteVariations
}

/**
 * Explosion that can deal damage.
 */
interface FlameThrowerExplosionPrototype extends ExplosionPrototype{
    damage: DamagePrototype,
    height?: number,
    slow_down_factor: number
}

/**
 * A fluid.
 * @example
 * ```
 * {
 *   type = "fluid",
 *   name = "water",
 *   default_temperature = 15,
 *   max_temperature = 100,
 *   heat_capacity = "0.2KJ",
 *   base_color = { r = 0, g = 0.34, b = 0.6 },
 *   flow_color = { r = 0.7, g = 0.7, b = 0.7 },
 *   icon = "__base__/graphics/icons/fluid/water.png",
 *   icon_size = 64,
 *   icon_mipmaps = 4,
 *   order = "a[fluid]-a[water]"
 * }
 * ```
 *
 */
interface FluidPrototype extends PrototypeBase{
    
    /**
     * Whether the fluid should be included in the barrel recipes automatically generated by the base mod.

This property is not read by the game engine itself, but the base mod's data-updates.lua file. This means it is discarded by the game engine after loading finishes.
     */
    auto_barrel?: boolean,
    
    /**
     * Used by bars that show the fluid color, like the flamethrower turret fill bar in the tooltip, or the fill bar for the fluid wagon tooltip; and for the pipe windows and storage tank fill gauges.
     */
    base_color: Color,
    
    /**
     * Also the minimum temperature of the fluid. Has to be lower than `max_temperature`.
     */
    default_temperature: number,
    
    /**
     * Scales pollution generated when the fluid is consumed.
     */
    emissions_multiplier?: number,
    
    /**
     * Used only for pipe windows or storage tank fill gauges.
     */
    flow_color: Color,
    fuel_value?: Energy,
    
    /**
     * Above this temperature the `gas_flow` animation is used to display the fluid inside storage tanks and pipes.
     */
    gas_temperature?: number,
    
    /**
     * Joule needed to heat 1 Unit by 1 °C.
     */
    heat_capacity?: Energy,
    
    /**
     * Hides the fluid from the signal selection screen.
     */
    hidden?: boolean,
    
    /**
     * Path to the icon file.

Mandatory if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Can't be an empty array.
     */
    icons?: IconData[],
    max_temperature?: number,
    
    /**
     * The value of this property may not be an empty string. It either has to be nil, or a non-empty string.
     */
    subgroup?: ItemSubGroupID
}

/**
 * Used for example for the handheld flamethrower.
 */
interface FluidStreamPrototype extends EntityPrototype{
    
    /**
     * Action that is triggered every time a particle lands. Not triggered for the first particle if `initial_action` is non-empty.
     */
    action?: Trigger,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    ground_light?: LightDefinition,
    
    /**
     * Action that is triggered when the first particle lands.
     */
    initial_action?: Trigger,
    oriented_particle?: boolean,
    particle?: Animation,
    particle_alpha_per_part?: number,
    
    /**
     * Number of spawned child particles of the stream. Must be greater than 0 and less than 256.
     */
    particle_buffer_size?: number,
    particle_end_alpha?: number,
    
    /**
     * Will be set to 1 by the game if less than 1.
     */
    particle_fade_out_duration?: number,
    
    /**
     * Value between 0 and 1.
     */
    particle_fade_out_threshold?: number,
    
    /**
     * Must be larger than 0. `particle_horizontal_speed` has to be greater than `particle_horizontal_speed_deviation`.
     */
    particle_horizontal_speed: number,
    particle_horizontal_speed_deviation: number,
    
    /**
     * Value between 0 and 1.
     */
    particle_loop_exit_threshold?: number,
    
    /**
     * Will be set to 1 by the game if less than 1.
     */
    particle_loop_frame_count?: number,
    particle_scale_per_part?: number,
    
    /**
     * The stream will spawn one particle every `particle_spawn_interval` ticks until the `particle_spawn_timeout` is reached. The first particle will trigger an `initial_action` upon landing. Each particle triggers an `action` upon landing. Particles spawned within a single `particle_spawn_timeout` interval will be connected by a stretched `spine_animation`.
     */
    particle_spawn_interval: number,
    particle_spawn_timeout?: number,
    particle_start_alpha?: number,
    particle_start_scale?: number,
    particle_vertical_acceleration: number,
    
    /**
     * The point in the particles projectile arc to start spawning smoke. 0.5 (the default) starts spawning smoke at the halfway point between the source and target.
     */
    progress_to_create_smoke?: number,
    shadow?: Animation,
    shadow_scale_enabled?: boolean,
    
    /**
     * Smoke spawning is controlled by `progress_to_create_smoke`.
     */
    smoke_sources?: SmokeSource[],
    special_neutral_target_damage?: DamagePrototype,
    spine_animation?: Animation,
    stream_light?: LightDefinition,
    target_position_deviation?: number,
    width?: number
}

/**
 * A turret that consumes fluid as ammo.
 */
interface FluidTurretPrototype extends TurretPrototype{
    
    /**
     * Before an turret that was out of ammo is able to fire again, the `fluid_buffer_size` must fill to this proportion.
     */
    activation_buffer_ratio: number,
    
    /**
     * Requires ammo_type in attack_parameters.
     */
    attack_parameters: StreamAttackParameters,
    attacking_muzzle_animation_shift?: AnimatedVector,
    ending_attack_muzzle_animation_shift?: AnimatedVector,
    enough_fuel_indicator_light?: LightDefinition,
    enough_fuel_indicator_picture?: Sprite4Way,
    fluid_box: FluidBox,
    fluid_buffer_input_flow: number,
    fluid_buffer_size: number,
    folded_muzzle_animation_shift?: AnimatedVector,
    folding_muzzle_animation_shift?: AnimatedVector,
    muzzle_animation?: Animation,
    muzzle_light?: LightDefinition,
    not_enough_fuel_indicator_light?: LightDefinition,
    not_enough_fuel_indicator_picture?: Sprite4Way,
    out_of_ammo_alert_icon?: Sprite,
    prepared_muzzle_animation_shift?: AnimatedVector,
    preparing_muzzle_animation_shift?: AnimatedVector,
    starting_attack_muzzle_animation_shift?: AnimatedVector,
    turret_base_has_direction: true
}

/**
 * A {@link fluid wagon | https://wiki.factorio.com/Fluid_wagon}.
 */
interface FluidWagonPrototype extends RollingStockPrototype{
    capacity: number,
    
    /**
     * Must be 1, 2 or 3.
     */
    tank_count?: number
}

/**
 * Abstract base for construction/logistics and combat robots.
 */
interface FlyingRobotPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * How much does it cost to move 1 tile.
     */
    energy_per_move?: Energy,
    energy_per_tick?: Energy,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean,
    
    /**
     * How much energy can be stored in the batteries.
     */
    max_energy?: Energy,
    
    /**
     * The maximum speed of the robot. Useful to limit the impact of {@link worker robot speed (research) | https://wiki.factorio.com/Worker_robot_speed_(research}).
     */
    max_speed?: number,
    
    /**
     * If the robot has more energy than this, it does not need to charge before stationing.
     */
    max_to_charge?: number,
    
    /**
     * The robot will go to charge when it has less energy than this.
     */
    min_to_charge?: number,
    speed: number,
    
    /**
     * Some robots simply crash, some slowdown but keep going. 0 means crash.
     */
    speed_multiplier_when_out_of_energy?: number
}

/**
 * An upwards flying text that disappears after a certain time (setting {@link LuaEntity::active | runtime:LuaEntity::active} = false stops the flying and the disappearing.)
 */
interface FlyingTextPrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * How fast the text flies up. Seems to be tiles/tick.
     */
    speed: number,
    text_alignment?: 'left' | 'center' | 'right',
    
    /**
     * Time in ticks this flying-text lasts.
     */
    time_to_live: number
}

/**
 * Fonts are used in all GUIs in the game.
 * @example
 * ```
 * {
 *   type = "font",
 *   name = "default-button",
 *   from = "default-bold",
 *   size = 18
 * }
 * ```
 *
 */
interface FontPrototype {
    
    /**
     * Whether the font has a border.
     */
    border?: boolean,
    
    /**
     * The color of the border, if enabled.
     */
    border_color?: Color,
    filtered?: boolean,
    
    /**
     * The name of the fonts .ttf descriptor. This descriptor must be defined in the locale info.json. Refer to `data/core/locale/_language_/info.json` for examples.
     */
    from: string,
    
    /**
     * Name of the font.
     */
    name: string,
    
    /**
     * Size of the font.
     */
    size: number,
    spacing?: number,
    type: 'font'
}

/**
 * Each item which has a fuel_value must have a fuel category. The fuel categories are used to allow only certain fuels to be used in {@link EnergySource | prototype:EnergySource}.
 */
interface FuelCategory extends PrototypeBase{
    
}

/**
 * A furnace. Normal furnaces only process "smelting" category recipes, but you can make furnaces that process other {@link recipe categories | prototype:RecipeCategory}. The difference to assembling machines is that furnaces automatically choose their recipe based on input.
 */
interface FurnacePrototype extends CraftingMachinePrototype{
    
    /**
     * The locale key of the message shown when the player attempts to insert an item into the furnace that cannot be processed by that furnace. In-game, the locale is provided the `__1__` parameter, which is the localised name of the item.
     */
    cant_insert_at_source_message_key?: string,
    
    /**
     * Shift of the "alt-mode icon" relative to the machine's center.
     */
    entity_info_icon_shift?: Vector,
    
    /**
     * The number of output slots.
     */
    result_inventory_size: ItemStackIndex,
    
    /**
     * The number of input slots, but not more than 1.
     */
    source_inventory_size: ItemStackIndex
}

/**
 * A {@link gate | https://wiki.factorio.com/Gate}.
 */
interface GatePrototype extends EntityWithOwnerPrototype{
    activation_distance: number,
    
    /**
     * Played when the gate closes.
     */
    close_sound: Sound,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    fadeout_interval?: number,
    horizontal_animation: Animation,
    horizontal_rail_animation_left: Animation,
    horizontal_rail_animation_right: Animation,
    horizontal_rail_base: Animation,
    
    /**
     * Played when the gate opens.
     */
    open_sound: Sound,
    
    /**
     * This collision mask is used when the gate is open.
     */
    opened_collision_mask?: CollisionMask,
    opening_speed: number,
    timeout_to_close: number,
    vertical_animation: Animation,
    vertical_rail_animation_left: Animation,
    vertical_rail_animation_right: Animation,
    vertical_rail_base: Animation,
    wall_patch: Animation
}

/**
 * Used by {@link portable fusion reactor | https://wiki.factorio.com/Portable_fusion_reactor}. Provides power in equipment grids. Can produce power for free or use a burner energy source.
 */
interface GeneratorEquipmentPrototype extends EquipmentPrototype{
    
    /**
     * If not defined, this equipment produces power for free.
     */
    burner?: BurnerEnergySource,
    
    /**
     * The power output of this equipment.
     */
    power: Energy
}

/**
 * An entity that produces power from fluids, for example a {@link steam engine | https://wiki.factorio.com/Steam_engine}.
 */
interface GeneratorPrototype extends EntityWithOwnerPrototype{
    
    /**
     * If set to true, the available power output is based on the {@link FluidPrototype::fuel_value | prototype:FluidPrototype::fuel_value}. Otherwise, the available power output will be based on the fluid temperature.
     */
    burns_fluid?: boolean,
    
    /**
     * This property is used when `burns_fluid` is true and the fluid has a {@link fuel_value | prototype:FluidPrototype::fuel_value} of 0.

This property is also used when `burns_fluid` is false and the fluid is at default temperature.

In these cases, this property determines whether the fluid should be destroyed, meaning that the fluid is consumed at the rate of `fluid_usage_per_tick`, without producing any power.
     */
    destroy_non_fuel_fluid?: boolean,
    
    /**
     * How much energy the generator produces compared to how much energy it consumes. For example, an effectivity of 0.5 means that half of the consumed energy is output as power.
     */
    effectivity?: number,
    energy_source: ElectricEnergySource,
    
    /**
     * This must have a filter if `max_power_output` is not defined.
     */
    fluid_box: FluidBox,
    
    /**
     * The number of fluid units the generator uses per tick.
     */
    fluid_usage_per_tick: number,
    horizontal_animation?: Animation,
    
    /**
     * The power production of the generator is capped to this value. This is also the value that is shown as the maximum power output in the tooltip of the generator.

`fluid_box` must have a filter if this is not defined.
     */
    max_power_output?: Energy,
    
    /**
     * The maximum temperature to which the efficiency can increase. At this temperature the generator will run at 100% efficiency. Note: Higher temperature fluid can still be consumed.

Used to calculate the `max_power_output` if it is not defined and `burns_fluid` is false. Then, the max power output is `(min(fluid_max_temp, maximum_temperature) - fluid_default_temp) × fluid_usage_per_tick × fluid_heat_capacity × effectivity`, the fluid is the filter specified on the `fluid_box`.
     */
    maximum_temperature: number,
    
    /**
     * Animation runs at least this fast. This corresponds to the sound.
     */
    min_perceived_performance?: number,
    performance_to_sound_speedup?: number,
    
    /**
     * Scales the generator's fluid usage to its maximum power output.

Setting this to true prevents the generator from overconsuming fluid, for example when higher than`maximum_temperature` fluid is fed to the generator.

If scale_fluid_usage is false, the generator consumes the full `fluid_usage_per_tick` and any of the extra energy in the fluid (in the form of higher temperature) is wasted. The {@link steam engine | https://wiki.factorio.com/Steam_engine} exhibits this behavior when fed steam from {@link heat exchangers | https://wiki.factorio.com/Heat_exchanger}.
     */
    scale_fluid_usage?: boolean,
    smoke?: SmokeSource[],
    vertical_animation?: Animation
}

/**
 * Properties of the god controller.
 */
interface GodControllerPrototype {
    
    /**
     * Names of the crafting categories the player can craft recipes from.
     */
    crafting_categories?: RecipeCategoryID[],
    inventory_size: ItemStackIndex,
    item_pickup_distance: number,
    loot_pickup_distance: number,
    
    /**
     * Names of the resource categories the player can mine resources from.
     */
    mining_categories?: ResourceCategoryID[],
    mining_speed: number,
    
    /**
     * Must be >= 0.34375.
     */
    movement_speed: number,
    
    /**
     * Name of the god-controller. Base game uses "default".
     */
    name: string,
    type: 'god-controller'
}

/**
 * This prototype is used for receiving an achievement when the player gets attacked due to pollution.
 */
interface GroupAttackAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will trigger the achievement, if the player receives this amount of attacks. **Note**: The default achievement "it stinks and they don't like it" uses the amount of 1. (As in getting attacked once.)
     */
    amount?: number
}

/**
 * The available GUI styles.
 */
interface GuiStyle extends PrototypeBase{
    default_sprite_priority?: SpritePriority,
    default_sprite_scale?: number,
    default_tileset?: FileName
}

/**
 * A gun. A weapon to deal damage to entities.
 */
interface GunPrototype extends ItemPrototype{
    
    /**
     * The information the item needs to know in order to know what ammo it requires, the sounds, and range.
     */
    attack_parameters: AttackParameters
}

/**
 * This entity produces or consumes heat. Its heat settings can be changed runtime.
 */
interface HeatInterfacePrototype extends EntityWithOwnerPrototype{
    gui_mode?: 'all' | 'none' | 'admins',
    heat_buffer: HeatBuffer,
    picture?: Sprite
}

/**
 * A {@link heat pipe | https://wiki.factorio.com/Heat_pipe}.
 */
interface HeatPipePrototype extends EntityWithOwnerPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    connection_sprites: ConnectableEntityGraphics,
    heat_buffer: HeatBuffer,
    heat_glow_sprites: ConnectableEntityGraphics
}

/**
 * Used to attach graphics for {@link cursor boxes | prototype:CursorBoxType} to entities during runtime. HighlightBoxEntity can also be independent from entities so it is simply drawn somewhere in the world. See {@link LuaSurface::create_entity | runtime:LuaSurface::create_entity} for the available options for type "highlight-box".
 * 
 * The {@link collision_box | prototype:EntityPrototype::collision_box} of the highlight box prototype is ignored during runtime, instead the "bounding_box" given in create_entity() or the selection box of the target entity is used.
 */
interface HighlightBoxEntityPrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask
}

/**
 * A generic container, such as a chest, that can spawn or void items and interact with the logistics network.
 */
interface InfinityContainerPrototype extends LogisticContainerPrototype{
    erase_contents_when_mined: boolean,
    
    /**
     * Controls which players can control what the chest spawns.
     */
    gui_mode?: 'all' | 'none' | 'admins',
    
    /**
     * The number of slots in this container. May not be zero.
     */
    inventory_size: ItemStackIndex,
    
    /**
     * The way this chest interacts with the logistic network.
     */
    logistic_mode?: 'active-provider' | 'passive-provider' | 'requester' | 'storage' | 'buffer',
    
    /**
     * Whether the "no network" icon should be rendered on this entity if the entity is not within a logistics network.
     */
    render_not_in_network_icon?: boolean
}

/**
 * This entity produces or consumes fluids. Its fluid settings can be changed runtime.
 */
interface InfinityPipePrototype extends PipePrototype{
    gui_mode?: 'all' | 'none' | 'admins'
}

/**
 * An {@link inserter | https://wiki.factorio.com/Inserter}.
 */
interface InserterPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Whether this burner inserter can fuel itself from the fuel inventory of the entity it is picking up items from.
     */
    allow_burner_leech?: boolean,
    
    /**
     * Whether pickup and insert position can be set run-time.
     */
    allow_custom_vectors?: boolean,
    
    /**
     * Whether the inserter hand should move to the items it picks up from belts, leading to item chasing behaviour. If this is off, the inserter hand will stay in the center of the belt and any items picked up from the edges of the belt "teleport" to the inserter hand.
     */
    chases_belt_items?: boolean,
    circuit_connector_sprites?: 
[    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites
],
    circuit_wire_connection_points?: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    default_stack_control_input_signal?: SignalIDConnector,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * Whether the item that the inserter is holding should be drawn.
     */
    draw_held_item?: boolean,
    
    /**
     * Whether the yellow arrow that indicates the drop point of the inserter and the line that indicates the pickup position should be drawn.
     */
    draw_inserter_arrow?: boolean,
    energy_per_movement?: Energy,
    energy_per_rotation?: Energy,
    
    /**
     * Defines how this inserter gets energy. The emissions set on the energy source are ignored so inserters cannot produce pollution.
     */
    energy_source: EnergySource,
    extension_speed: number,
    
    /**
     * How many filters this inserter has. Maximum count of filtered items in inserter is 5.
     */
    filter_count?: number,
    hand_base_picture: Sprite,
    hand_base_shadow: Sprite,
    hand_closed_picture: Sprite,
    hand_closed_shadow: Sprite,
    hand_open_picture: Sprite,
    hand_open_shadow: Sprite,
    
    /**
     * Used to determine how long the arm of the inserter is when drawing it. Does not affect gameplay. The lower the value, the straighter the arm. Increasing the value will give the inserter a bigger bend due to its longer parts.
     */
    hand_size?: number,
    insert_position: Vector,
    pickup_position: Vector,
    platform_picture: Sprite4Way,
    rotation_speed: number,
    
    /**
     * Whether this inserter is considered a stack inserter. Relevant for determining how {@link inserter capacity bonus (research) | https://wiki.factorio.com/Inserter_capacity_bonus_(research}) applies to the inserter.
     */
    stack?: boolean,
    
    /**
     * Stack size bonus that is inherent to the prototype without having to be researched.
     */
    stack_size_bonus?: number,
    
    /**
     * Whether the inserter should be able to fish {@link fish | https://wiki.factorio.com/Raw_fish}.
     */
    use_easter_egg?: boolean
}

/**
 * The entity used for items on the ground.
 * @example
 * ```
 * {
 *   type = "item-entity",
 *   name = "item-on-ground",
 *   flags = { "placeable-off-grid", "not-on-map" },
 *   collision_box = { {-0.14, -0.14}, {0.14, 0.14} },
 *   selection_box = { {-0.17, -0.17}, {0.17, 0.17} },
 *   minable = { mining_time = 0.025 }
 * }
 * ```
 *
 */
interface ItemEntityPrototype extends EntityPrototype{
    
    /**
     * Item entity collision box has to have same width as height.

Specification of the entity collision boundaries. Empty collision box means no collision and is used for smoke, projectiles, particles, explosions etc.

The `{0,0}` coordinate in the collision box will match the entity position. It should be near the center of the collision box, to keep correct entity drawing order. The bounding box must include the `{0,0}` coordinate.

Note, that for buildings, it is customary to leave 0.1 wide border between the edge of the tile and the edge of the building, this lets the player move between the building and electric poles/inserters etc.
     */
    collision_box?: BoundingBox,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask
}

/**
 * An item group. Item groups are shown above the list of craftable items in the player's inventory. The built-in groups are "logistics", "production", "intermediate-products" and "combat" but mods can define their own.
 * 
 * Items are sorted into item groups by sorting them into a {@link subgroup | prototype:ItemPrototype::subgroup} which then belongs to a {@link item group | prototype:ItemSubGroup::group}.
 */
interface ItemGroup extends PrototypeBase{
    
    /**
     * Path to the icon that is shown to represent this item group.

Mandatory if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * The icon that is shown to represent this item group. Can't be an empty array.
     */
    icons?: IconData[],
    
    /**
     * Item ingredients in recipes are ordered by item group. The `order_in_recipe` property can be used to specify the ordering in recipes without affecting the inventory order.
     */
    order_in_recipe?: Order
}

/**
 * Possible configuration for all items.
 */
interface ItemPrototype extends PrototypeBase{
    
    /**
     * The item that is the result when this item gets burned as fuel.
     */
    burnt_result?: ItemID,
    close_sound?: Sound,
    
    /**
     * Path to the icon file.

Only loaded if `dark_background_icons` is not defined.

Uses the basic `icon_size` and `icon_mipmaps` properties.
     */
    dark_background_icon?: FileName,
    
    /**
     * Inside IconData, the property for the file path is `dark_background_icon` instead of `icon`. Can't be an empty array.

Uses the basic `icon_size` and `icon_mipmaps` properties.
     */
    dark_background_icons?: IconData[],
    default_request_amount?: ItemCountType,
    
    /**
     * Specifies some properties of the item.
     */
    flags?: ItemPrototypeFlags,
    fuel_acceleration_multiplier?: number,
    
    /**
     * Must exist when a nonzero fuel_value is defined.
     */
    fuel_category?: FuelCategoryID,
    fuel_emissions_multiplier?: number,
    
    /**
     * Colors the glow of the burner energy source when this fuel is burned. Can also be used to color the glow of reactors burning the fuel, see {@link ReactorPrototype::use_fuel_glow_color | prototype:ReactorPrototype::use_fuel_glow_color}.
     */
    fuel_glow_color?: Color,
    fuel_top_speed_multiplier?: number,
    
    /**
     * Mandatory when `fuel_acceleration_multiplier`, `fuel_top_speed_multiplier` or `fuel_emissions_multiplier` or `fuel_glow_color` are used. Amount of energy it gives when used as fuel.
     */
    fuel_value?: Energy,
    
    /**
     * Path to the icon file.

Mandatory if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.

This definition applies to all icon-type properties, both on here and on any children.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

This definition applies to all icon-type properties, both on here and on any children.

Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Can't be an empty array.
     */
    icons?: IconData[],
    open_sound?: Sound,
    
    /**
     * Used to give the item multiple different icons so that they look less uniform on belts etc. For inventory icons and similar, `icon/icons` will be used. Maximum number of variations is 16.
     */
    pictures?: SpriteVariations,
    place_as_tile?: PlaceAsTile,
    
    /**
     * Name of the {@link EntityPrototype | prototype:EntityPrototype} that can be built using this item. If this item should be the one that construction bots use to build the specified `place_result`, set the `"primary-place-result"` {@link item flag | prototype:ItemPrototypeFlags}.

The localised name of the entity will be used as the in-game item name. This behavior can be overwritten by specifying `localised_name` on this item, it will be used instead.
     */
    place_result?: EntityID,
    placed_as_equipment_result?: EquipmentID,
    
    /**
     * Only loaded if `rocket_launch_products` is not defined.
     */
    rocket_launch_product?: ItemProductPrototype,
    rocket_launch_products?: ItemProductPrototype[],
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: ItemCountType,
    
    /**
     * Empty text of subgroup is not allowed. (You can omit the definition to get the default "other").
     */
    subgroup?: ItemSubGroupID,
    
    /**
     * The number of items needed to connect 2 entities with this as wire. In the base game, {@link green wire | https://wiki.factorio.com/Green_wire}, {@link red wire | https://wiki.factorio.com/Red_wire} and {@link copper cable | https://wiki.factorio.com/Copper_cable} have this set to 1.
     */
    wire_count?: ItemCountType
}

/**
 * Entity used to signify that an entity is requesting items, for example modules for an assembling machine after it was blueprinted with modules inside.
 */
interface ItemRequestProxyPrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    picture: Sprite,
    use_target_entity_alert_icon_shift?: boolean
}

/**
 * An item subgroup. The built-in subgroups can be found {@link here | https://wiki.factorio.com/Data.raw#item-subgroup}. See {@link ItemPrototype::subgroup | prototype:ItemPrototype::subgroup}.
 */
interface ItemSubGroup extends PrototypeBase{
    
    /**
     * The item group this subgroup is located in.
     */
    group: ItemGroupID
}

/**
 * ItemWithEntityData saves data associated with the entity that it represents, for example the content of the equipment grid of a car.
 */
interface ItemWithEntityDataPrototype extends ItemPrototype{
    
    /**
     * Path to the icon file.

Only loaded if `icon_tintables` is not defined.

Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype | prototype:ItemPrototype} parent.
     */
    icon_tintable?: FileName,
    
    /**
     * Path to the icon file.

Only loaded if `icon_tintable_masks` is not defined and `icon_tintable` is defined.

Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype | prototype:ItemPrototype} parent.
     */
    icon_tintable_mask?: FileName,
    
    /**
     * Inside IconData, the property for the file path is `icon_tintable_mask` instead of `icon`. Can't be an empty array.

Only loaded if `icon_tintable` is defined.

Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype | prototype:ItemPrototype} parent.
     */
    icon_tintable_masks?: IconData[],
    
    /**
     * Inside IconData, the property for the file path is `icon_tintable` instead of `icon`. Can't be an empty array.

Only loaded if `icon_tintable` is defined (`icon_tintables` takes precedence over `icon_tintable`).

Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype | prototype:ItemPrototype} parent.
     */
    icon_tintables?: IconData[]
}

/**
 * The inventory allows setting player defined filters similar to cargo wagon inventories.
 */
interface ItemWithInventoryPrototype extends ItemWithLabelPrototype{
    
    /**
     * When true, this item-with-inventory will extend the inventory it sits in by default. This is a runtime property on the result item that can be changed through the Lua interface and only determines the initial value.
     */
    extends_inventory_by_default?: boolean,
    
    /**
     * The locale key used when the player attempts to put an item that doesn't match the filter rules into the item-with-inventory.
     */
    filter_message_key?: string,
    
    /**
     * This determines how filters are applied. If no filters are defined this is automatically set to "none".
     */
    filter_mode?: 'blacklist' | 'whitelist',
    
    /**
     * The insertion priority mode for this item. This determines if items are first attempted to be put into this items inventory if the item extends the inventory it sits in when items are put into the parent inventory.
     */
    insertion_priority_mode?: /* Items are inserted into this item-with-inventory only if they match the whitelist defined in the prototype for the item and whitelist is used. */ 'default' | /* Items are never inserted into this item-with-inventory except explicitly by the player or script. */ 'never' | /* All items first try to be inserted into this item-with-inventory. */ 'always' | /* When the inventory contains filters that match the item-to-be-inserted then try to put it into this item before the inventory this item resides in. */ 'when-manually-filtered',
    
    /**
     * The inventory size of the item. - This will only accept an ItemStackIndex (aka number). The union with 'dynamic' is only to satisfy BlueprintBookPrototype within Typescript's inheritance rules
     */
    inventory_size: ItemStackIndex | 'dynamic',
    
    /**
     * A list of explicit item names to be used as filters.
     */
    item_filters?: ItemID[],
    
    /**
     * A list of explicit item group names to be used as filters.
     */
    item_group_filters?: ItemGroupID[],
    
    /**
     * A list of explicit item subgroup names to be used as filters.
     */
    item_subgroup_filters?: ItemSubGroupID[],
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: 1
}

/**
 * Like a normal item but with the ability to have a colored label.
 */
interface ItemWithLabelPrototype extends ItemPrototype{
    
    /**
     * The default label color the item will use.
     */
    default_label_color?: Color,
    
    /**
     * If the item will draw its label when held in the cursor in place of the item count.
     */
    draw_label_for_cursor_render?: boolean
}

/**
 * Item type that can store any basic arbitrary Lua data, see {@link LuaItemStack::tags | runtime:LuaItemStack::tags}.
 */
interface ItemWithTagsPrototype extends ItemWithLabelPrototype{
    
}

/**
 * This prototype is used for receiving an achievement when the player destroys a certain amount of an entity, with a specific damage type.
 */
interface KillAchievementPrototype extends AchievementPrototype{
    
    /**
     * This is the amount of entity of the specified type the player needs to destroy to receive the achievement.
     */
    amount?: number,
    
    /**
     * This defines how the player needs to destroy the specific entity.
     */
    damage_type?: DamageTypeID,
    
    /**
     * This defines if the player needs to be in a vehicle.
     */
    in_vehicle?: boolean,
    
    /**
     * This defines to make sure you are the one driving, for instance, in a tank rather than an automated train.
     */
    personally?: boolean,
    
    /**
     * This defines which entity needs to be destroyed in order to receive the achievement.
     */
    to_kill?: EntityID,
    
    /**
     * This defines what entity type needs to be destroyed in order to receive the achievement.
     */
    type_to_kill?: string
}

/**
 * A {@link lab | https://wiki.factorio.com/Lab}.
 */
interface LabPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Sets the module effects that are allowed to be used on this lab.
     */
    allowed_effects?: EffectTypeLimitation,
    
    /**
     * Productivity bonus that this machine always has.
     */
    base_productivity?: number,
    
    /**
     * Defines how this lab gets energy.
     */
    energy_source: EnergySource,
    
    /**
     * The amount of energy this lab uses.
     */
    energy_usage: Energy,
    
    /**
     * Shift of the "alt-mode icon" relative to the lab's center.
     */
    entity_info_icon_shift?: Vector,
    
    /**
     * A list of the names of science packs that can be used in this lab.

If a technology requires other types of science packs, it cannot be researched in this lab.
     */
    inputs: ItemID[],
    light?: LightDefinition,
    
    /**
     * The number of module slots.
     */
    module_specification?: ModuleSpecification,
    
    /**
     * The animation that plays when the lab is idle.
     */
    off_animation: Animation,
    
    /**
     * The animation that plays when the lab is active.
     */
    on_animation: Animation,
    researching_speed?: number
}

/**
 * A {@link lamp | https://wiki.factorio.com/Lamp} to provide light, using energy.
 * @example
 * ```
 * {
 *   type = "lamp",
 *   name = "small-lamp",
 *   icon = "__base__/graphics/icons/small-lamp.png",
 *   icon_size = 64, icon_mipmaps = 4,
 *   flags = {"placeable-neutral", "player-creation"},
 *   minable = {mining_time = 0.1, result = "small-lamp"},
 *   max_health = 100,
 *   corpse = "lamp-remnants",
 *   dying_explosion = "lamp-explosion",
 *   collision_box = {{-0.15, -0.15}, {0.15, 0.15}},
 *   selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
 *   energy_source =
 *   {
 *     type = "electric",
 *     usage_priority = "lamp"
 *   },
 *   energy_usage_per_tick = "5KW",
 *   darkness_for_all_lamps_on = 0.5,
 *   darkness_for_all_lamps_off = 0.3,
 *   light = {intensity = 0.9, size = 40, color = {r=1.0, g=1.0, b=0.75}},
 *   light_when_colored = {intensity = 0, size = 6, color = {r=1.0, g=1.0, b=0.75}},
 *   glow_size = 6,
 *   glow_color_intensity = 1,
 *   glow_render_mode = "multiplicative",
 *   picture_off =
 *   {
 *     layers =
 *     {
 *       {
 *         filename = "__base__/graphics/entity/small-lamp/lamp.png",
 *         priority = "high",
 *         width = 42,
 *         height = 36,
 *         frame_count = 1,
 *         axially_symmetrical = false,
 *         direction_count = 1,
 *         shift = util.by_pixel(0,3)
 *       },
 *       {
 *         filename = "__base__/graphics/entity/small-lamp/lamp-shadow.png",
 *         priority = "high",
 *         width = 38,
 *         height = 24,
 *         frame_count = 1,
 *         axially_symmetrical = false,
 *         direction_count = 1,
 *         shift = util.by_pixel(4,5),
 *         draw_as_shadow = true
 *       }
 *     }
 *   },
 *   picture_on =
 *   {
 *     filename = "__base__/graphics/entity/small-lamp/lamp-light.png",
 *     priority = "high",
 *     width = 46,
 *     height = 40,
 *     frame_count = 1,
 *     axially_symmetrical = false,
 *     direction_count = 1,
 *     shift = util.by_pixel(0, -7)
 *   },
 *   signal_to_color_mapping =
 *   {
 *     {type = "virtual", name = "signal-red",    color = {r = 1, g = 0, b = 0}},
 *     {type = "virtual", name = "signal-green",  color = {r = 0, g = 1, b = 0}},
 *     {type = "virtual", name = "signal-blue",   color = {r = 0, g = 0, b = 1}},
 *     {type = "virtual", name = "signal-yellow", color = {r = 1, g = 1, b = 0}},
 *     {type = "virtual", name = "signal-pink",   color = {r = 1, g = 0, b = 1}},
 *     {type = "virtual", name = "signal-cyan",   color = {r = 0, g = 1, b = 1}},
 *     {type = "virtual", name = "signal-white",  color = {r = 1, g = 1, b = 1}}
 *   },
 * 
 *   circuit_wire_connection_point = circuit_connector_definitions["lamp"].points,
 *   circuit_connector_sprites = circuit_connector_definitions["lamp"].sprites,
 *   circuit_wire_max_distance = default_circuit_wire_max_distance
 * }
 * ```
 *
 */
interface LampPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Whether the lamp should always be on.
     */
    always_on?: boolean,
    
    /**
     * The pictures displayed for circuit connections to this lamp.
     */
    circuit_connector_sprites?: CircuitConnectorSprites,
    
    /**
     * Defines how wires visually connect to this lamp.
     */
    circuit_wire_connection_point?: WireConnectionPoint,
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    
    /**
     * darkness_for_all_lamps_on must be > darkness_for_all_lamps_off. Values must be between 0 and 1.
     */
    darkness_for_all_lamps_off?: number,
    
    /**
     * darkness_for_all_lamps_on must be > darkness_for_all_lamps_off. Values must be between 0 and 1.
     */
    darkness_for_all_lamps_on?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * The emissions set on the energy source are ignored so lamps cannot produce pollution.
     */
    energy_source: ElectricEnergySource | VoidEnergySource,
    
    /**
     * The amount of energy the lamp uses. Must be greater than > 0.
     */
    energy_usage_per_tick: Energy,
    glow_color_intensity?: number,
    glow_render_mode?: 'additive' | 'multiplicative',
    glow_size?: number,
    
    /**
     * What color the lamp will be when it is on, and receiving power.
     */
    light?: LightDefinition,
    
    /**
     * This refers to when the light is in a circuit network, and is lit a certain color based on a signal value.
     */
    light_when_colored?: LightDefinition,
    
    /**
     * The lamps graphics when it's off.
     */
    picture_off: Sprite,
    
    /**
     * The lamps graphics when it's on.
     */
    picture_on: Sprite,
    signal_to_color_mapping?: SignalColorMapping[]
}

/**
 * A {@link land mine | https://wiki.factorio.com/Land_mine}.
 */
interface LandMinePrototype extends EntityWithOwnerPrototype{
    action?: Trigger,
    ammo_category?: AmmoCategoryID,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Force the landmine to kill itself when exploding.
     */
    force_die_on_attack?: boolean,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean,
    
    /**
     * The sprite of the landmine before it is armed (just after placing).
     */
    picture_safe: Sprite,
    
    /**
     * The sprite of the landmine of a friendly force when it is armed.
     */
    picture_set: Sprite,
    
    /**
     * The sprite of the landmine of an enemy force when it is armed.
     */
    picture_set_enemy?: Sprite,
    
    /**
     * Time between placing and the landmine being armed, in ticks.
     */
    timeout?: number,
    
    /**
     * Collision mask that another entity must collide with to make this landmine blow up.
     */
    trigger_collision_mask?: CollisionMask,
    trigger_force?: ForceCondition,
    trigger_radius: number
}

/**
 * Deprecated in 0.18. Particles that are exclusively meant for leaves of trees. The type "leaf-particle" has been obsoleted and cannot be created. See {@link ParticlePrototype | prototype:ParticlePrototype} for particles.
 */
interface LeafParticlePrototype extends EntityParticlePrototype{
    
}

/**
 * A belt that can be connected to a belt anywhere else, including on a different surface. The linked belts have to be {@link connected with console commands | https://wiki.factorio.com/Console#Connect_linked_belts} or runtime scripting in mods or scenarios. {@link LuaEntity::connect_linked_belts | runtime:LuaEntity::connect_linked_belts} and other runtime functions.
 */
interface LinkedBeltPrototype extends TransportBeltConnectablePrototype{
    allow_blueprint_connection?: boolean,
    allow_clone_connection?: boolean,
    allow_side_loading?: boolean,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    structure: LinkedBeltStructure,
    structure_render_layer?: RenderLayer
}

/**
 * A container that shares its inventory with containers with the same {@link link_id | runtime:LuaEntity::link_id}, which can be set via the GUI. The link IDs are per prototype and force, so only containers with the **same ID**, **same prototype name** and **same force** will share inventories.
 */
interface LinkedContainerPrototype extends EntityWithOwnerPrototype{
    
    /**
     * The pictures displayed for circuit connections to this linked container.
     */
    circuit_connector_sprites?: CircuitConnectorSprites,
    
    /**
     * Defines how wires visually connect to this linked container.
     */
    circuit_wire_connection_point?: WireConnectionPoint,
    
    /**
     * The maximum circuit wire distance for this linked container.
     */
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * Players that can access the GUI to change the link ID.
     */
    gui_mode?: 'all' | 'none' | 'admins',
    
    /**
     * Must be > 0.
     */
    inventory_size: ItemStackIndex,
    
    /**
     * Whether the inventory of this container can be filtered (like cargo wagons) or not.
     */
    inventory_type?: 'with_bar' | 'with_filters_and_bar',
    picture?: Sprite,
    scale_info_icons?: boolean
}

/**
 * Continuously loads and unloads machines, as an alternative to inserters.
 * 
 * This loader type is identical to {@link Loader1x2Prototype | prototype:Loader1x2Prototype} with the exception of its hardcoded belt_distance. The belt_distance of the loader determines the distance between the position of this loader and the tile of the loader's belt target.
 * 
 * This loader type always has a belt_distance of 0, meaning by default it is 1 tile long in total. For a loader type with a belt_distance of 0.5, see {@link Loader1x2Prototype | prototype:Loader1x2Prototype}.
 */
interface Loader1x1Prototype extends LoaderPrototype{
    
}

/**
 * Continuously loads and unloads machines, as an alternative to inserters.
 * 
 * This loader type is identical to {@link Loader1x1Prototype | prototype:Loader1x1Prototype} with the exception of its hardcoded belt_distance. The belt_distance of the loader determines the distance between the position of this loader and the tile of the loader's belt target.
 * 
 * This loader type always has a belt_distance of 0.5, meaning by default it is 2 tiles long in total. For a loader type with a belt_distance of 0, see {@link Loader1x1Prototype | prototype:Loader1x1Prototype}.
 */
interface Loader1x2Prototype extends LoaderPrototype{
    
}

/**
 * Continuously loads and unloads machines, as an alternative to inserters.
 */
interface LoaderPrototype extends TransportBeltConnectablePrototype{
    
    /**
     * Whether this loader can load and unload stationary inventories such as containers and crafting machines.
     */
    allow_container_interaction?: boolean,
    
    /**
     * Whether this loader can load and unload {@link RollingStockPrototype | prototype:RollingStockPrototype}.
     */
    allow_rail_interaction?: boolean,
    
    /**
     * How long this loader's belt is. Should be the same as belt_distance, which is hardcoded to `0.5` for {@link Loader1x2Prototype | prototype:Loader1x2Prototype} and to 0 for {@link Loader1x1Prototype | prototype:Loader1x1Prototype}. See the linked prototypes for an explanation of belt_distance.
     */
    belt_length?: number,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * The distance between the position of this loader and the tile of the loader's container target.
     */
    container_distance?: number,
    
    /**
     * Energy in Joules. Can't be negative.
     */
    energy_per_item?: Energy,
    energy_source?: ElectricEnergySource | HeatEnergySource | FluidEnergySource | VoidEnergySource,
    
    /**
     * How many item filters this loader has. Maximum count of filtered items in loader is 5.
     */
    filter_count: number,
    structure: LoaderStructure,
    structure_render_layer?: RenderLayer
}

/**
 * A {@link locomotive | https://wiki.factorio.com/Locomotive}.
 */
interface LocomotivePrototype extends RollingStockPrototype{
    darkness_to_render_light_animation?: number,
    
    /**
     * Must be a burner energy source when using "burner", otherwise it can also be a void energy source.
     */
    energy_source: BurnerEnergySource | VoidEnergySource,
    front_light?: LightDefinition,
    front_light_pictures?: RotatedSprite,
    max_power: Energy,
    
    /**
     * In tiles. A locomotive will snap to a nearby train stop when the player places it within this distance to the stop.
     */
    max_snap_to_train_stop_distance?: number,
    reversing_power_modifier: number
}

/**
 * A generic container, such as a chest, that interacts with the logistics network.
 */
interface LogisticContainerPrototype extends ContainerPrototype{
    
    /**
     * Drawn when a robot brings/takes items from this container.
     */
    animation?: Animation,
    
    /**
     * Played when a robot brings/takes items from this container. Ignored if `animation` is not defined.
     */
    animation_sound?: Sound,
    
    /**
     * The offset from the center of this container where a robot visually brings/takes items.
     */
    landing_location_offset?: Vector,
    
    /**
     * The way this chest interacts with the logistic network.
     */
    logistic_mode?: 'active-provider' | 'passive-provider' | 'requester' | 'storage' | 'buffer',
    
    /**
     * The number of request slots this logistics container has. Requester-type containers must have > 0 slots and can have a maximum of 1000 slots. Storage-type containers must have <= 1 slot.
     */
    max_logistic_slots?: number,
    opened_duration?: number,
    
    /**
     * The picture displayed for this entity.
     */
    picture?: Sprite,
    
    /**
     * Whether the "no network" icon should be rendered on this entity if the entity is not within a logistics network.
     */
    render_not_in_network_icon?: boolean,
    
    /**
     * Whether logistic robots have to deliver the exact amount of items requested to this logistic container instead of over-delivering (within their cargo size).
     */
    use_exact_mode?: boolean
}

/**
 * A {@link logistic robot | https://wiki.factorio.com/Logistic_robot}.
 */
interface LogisticRobotPrototype extends RobotWithLogisticInterfacePrototype{
    
    /**
     * Must have a collision box size of zero.
     */
    collision_box?: BoundingBox,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    idle_with_cargo?: RotatedAnimation,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    in_motion_with_cargo?: RotatedAnimation,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    shadow_idle_with_cargo?: RotatedAnimation,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    shadow_in_motion_with_cargo?: RotatedAnimation
}

/**
 * The available map gen presets.
 * @example
 * ```
 * {
 *   type = "map-gen-presets",
 *   name = "default",
 *   ["marathon"] =
 *   {
 *     order = "c",
 *     basic_settings =
 *     {
 *       property_expression_names = {},
 *     },
 *     advanced_settings =
 *     {
 *       difficulty_settings =
 *       {
 *         recipe_difficulty = defines.difficulty_settings.recipe_difficulty.expensive,
 *         technology_difficulty = defines.difficulty_settings.technology_difficulty.expensive,
 *         technology_price_multiplier = 4
 *       }
 *     }
 *   },
 *   ["island"] =
 *   {
 *     order = "g",
 *     basic_settings =
 *     {
 *       property_expression_names =
 *       {
 *         elevation = "0_17-island",
 *       },
 *       autoplace_controls = {},
 *       terrain_segmentation = 1,
 *     }
 *   }
 * }
 * ```
 *
 */
interface MapGenPresets {
    
    /**
     * Name of the map gen presets. Base game uses "default".
     */
    name: string,
    type: 'map-gen-presets'
}

/**
 * The default map settings.
 */
interface MapSettings {
    difficulty_settings: DifficultySettings,
    enemy_evolution: EnemyEvolutionSettings,
    enemy_expansion: EnemyExpansionSettings,
    
    /**
     * If a behavior fails this many times, the enemy (or enemy group) is destroyed. This solves biters stuck within their own base.
     */
    max_failed_behavior_count: number,
    
    /**
     * Name of the map-settings. Base game uses "map-settings".
     */
    name: string,
    path_finder: PathFinderSettings,
    pollution: PollutionSettings,
    steering: SteeringSettings,
    type: 'map-settings',
    unit_group: UnitGroupSettings
}

/**
 * Offers can be added to a market and they are shown when opening the entity. Offers allow to spend items to get research bonuses or items.
 */
interface MarketPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Whether all forces are allowed to open this market.
     */
    allow_access_to_all_forces?: boolean,
    picture: Sprite
}

/**
 * A mining drill for automatically extracting resources from {@link resource entities | prototype:ResourceEntityPrototype}. This prototype type is used by {@link burner mining drill | https://wiki.factorio.com/Burner_mining_drill}, {@link electric mining drill | https://wiki.factorio.com/Electric_mining_drill} and {@link pumpjack | https://wiki.factorio.com/Pumpjack} in vanilla.
 */
interface MiningDrillPrototype extends EntityWithOwnerPrototype{
    allowed_effects?: EffectTypeLimitation,
    
    /**
     * Only loaded if `graphics_set` is not defined.
     */
    animations?: Animation4Way,
    
    /**
     * Used by the {@link pumpjack | https://wiki.factorio.com/Pumpjack} to have a static 4 way sprite.
     */
    base_picture?: Sprite4Way,
    
    /**
     * Productivity bonus that this machine always has. Values below `0` are allowed, however the sum of the resulting effect together with modules and research is limited to be at least 0%, see {@link Effect | prototype:Effect}.
     */
    base_productivity?: number,
    base_render_layer?: RenderLayer,
    
    /**
     * Mandatory if circuit_wire_max_distance  > 0.
     */
    circuit_connector_sprites?: 
[    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites
],
    
    /**
     * Mandatory if circuit_wire_max_distance  > 0.
     */
    circuit_wire_connection_points?: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * The energy source of this mining drill.
     */
    energy_source: EnergySource,
    
    /**
     * The amount of energy used by the drill while mining. Can't be less than or equal to 0.
     */
    energy_usage: Energy,
    graphics_set?: MiningDrillGraphicsSet,
    input_fluid_box?: FluidBox,
    
    /**
     * The speed of this drill.
     */
    mining_speed: number,
    module_specification?: ModuleSpecification,
    
    /**
     * When this mining drill is connected to the circuit network, the resource that it is reading (either the entire resource patch, or the resource in the mining area of the drill, depending on circuit network setting), is tinted in this color when mousing over the mining drill.
     */
    monitor_visualization_tint?: Color,
    output_fluid_box?: FluidBox,
    
    /**
     * The sprite used to show the range of the mining drill.
     */
    radius_visualisation_picture?: Sprite,
    
    /**
     * The names of the {@link ResourceCategory | prototype:ResourceCategory} that can be mined by this drill. For a list of built-in categories, see {@link here | https://wiki.factorio.com/Data.raw#resource-category}.

Note: Categories containing resources which produce items, fluids, or items+fluids may be combined on the same entity, but may not work as expected. Examples: Miner does not rotate fluid-resulting resources until depletion. Fluid isn't output (fluid resource change and fluidbox matches previous fluid). Miner with no `vector_to_place_result` can't output an item result and halts.
     */
    resource_categories: ResourceCategoryID[],
    
    /**
     * The distance from the centre of the mining drill to search for resources in.

This is 2.49 for electric mining drills (a 5x5 area) and 0.99 for burner mining drills (a 2x2 area). The drill searches resource outside its natural boundary box, which is 0.01 (the middle of the entity); making it 2.5 and 1.0 gives it another block radius.
     */
    resource_searching_radius: number,
    
    /**
     * The position where any item results are placed, when the mining drill is facing north (default direction). If the drill does not produce any solid items but uses a fluidbox output instead (e.g. pumpjacks), a vector of `{0,0}` disables the yellow arrow alt-mode indicator for the placed item location.
     */
    vector_to_place_result: Vector,
    wet_mining_graphics_set?: MiningDrillGraphicsSet
}

/**
 * Exists only for migration, cannot be used by mods.
 */
interface MiningToolPrototype extends ToolPrototype{
    
}

/**
 * A module category. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#module-category}. See {@link ModulePrototype::category | prototype:ModulePrototype::category}.
 */
interface ModuleCategory extends PrototypeBase{
    
}

/**
 * A {@link module | https://wiki.factorio.com/Module}.
 */
interface ModulePrototype extends ItemPrototype{
    
    /**
     * Chooses with what art style the module is shown inside beacons. See {@link BeaconModuleVisualizations::art_style | prototype:BeaconModuleVisualizations::art_style}. Vanilla uses "vanilla" here.
     */
    art_style?: string,
    beacon_tint?: BeaconVisualizationTints,
    
    /**
     * Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules of the same category with higher tier modules.
     */
    category: ModuleCategoryID,
    effect: Effect,
    
    /**
     * Array of recipe names this module can be used on. If empty, the module can be used on all recipes.
     */
    limitation?: RecipeID[],
    
    /**
     * Array of recipe names this module can **not** be used on, implicitly allowing its use on all other recipes. This property has no effect if set to an empty table.

Note that the game converts this into a normal list of limitations internally, so reading {@link LuaItemPrototype::limitations | runtime:LuaItemPrototype::limitations} at runtime will be the product of both ways of defining limitations.
     */
    limitation_blacklist?: RecipeID[],
    
    /**
     * The locale key of the message that is shown when the player attempts to use the module on a recipe it can't be used on. The locale key will be prefixed with `item-limitation.` (the "category" of the locale) by the game.
     */
    limitation_message_key?: string,
    requires_beacon_alt_mode?: boolean,
    
    /**
     * Tier of the module inside its category. Used when upgrading modules: Ctrl + click modules into an entity and it will replace lower tier modules with higher tier modules if they have the same category.
     */
    tier: number
}

/**
 * Used by {@link SelectionToolPrototype::mouse_cursor | prototype:SelectionToolPrototype::mouse_cursor}.
 * @example
 * ```
 * {
 *   type = "mouse-cursor",
 *   name = "selection-tool-cursor",
 *   filename = "__core__/graphics/cross-select-x32.png",
 *   hot_pixel_x = 16,
 *   hot_pixel_y = 16
 * }
 * ```
 *
 * @example
 * ```
 * {
 *   type = "mouse-cursor",
 *   name = "system-crosshair",
 *   system_cursor = "crosshair"
 * }
 * ```
 *
 */
interface MouseCursor {
    
    /**
     * Mandatory if `system_cursor` is not defined.
     */
    filename?: FileName,
    
    /**
     * Mandatory if `system_cursor` is not defined.
     */
    hot_pixel_x?: number,
    
    /**
     * Mandatory if `system_cursor` is not defined.
     */
    hot_pixel_y?: number,
    
    /**
     * Name of the prototype.
     */
    name: string,
    
    /**
     * Either this or the other three properties have to be present.
     */
    system_cursor?: 'arrow' | 'i-beam' | 'crosshair' | 'wait-arrow' | 'size-all' | 'no' | 'hand',
    type: 'mouse-cursor'
}

/**
 * Used by {@link exoskeleton | https://wiki.factorio.com/Exoskeleton}. Increases max speed of characters or acceleration of vehicles if they have this equipment in their grid.
 */
interface MovementBonusEquipmentPrototype extends EquipmentPrototype{
    energy_consumption: Energy,
    
    /**
     * Multiplier of the character speed/vehicle acceleration.
     */
    movement_bonus: number
}

/**
 * A {@link NoiseExpression | prototype:NoiseExpression} with a name. The base game uses named noise expressions to specify functions for many map properties to be used in map generation; e.g. the "elevation" expression is used to calculate elevation for every point on a map. For a list of the built-in named noise expressions, see {@link data.raw | https://wiki.factorio.com/Data.raw#noise-expression}.
 * 
 * Named noise expressions can be used by {@link MapGenSettings | prototype:MapGenSettings} and {@link MapGenPreset | prototype:MapGenPreset} to override which named expression is used to calculate a given property by having an entry in `property_expression_names`, e.g. `elevation = "0.16-elevation"`.
 * 
 * Alternate expressions can be made available in the map generator GUI by setting their `intended_property` to the name of the property they should override.
 * 
 * Named noise expressions can also be used by {@link noise variables | prototype:NoiseExpression::variable}, e.g. `noise.var("my-named-expression")`.
 */
interface NamedNoiseExpression extends PrototypeBase{
    
    /**
     * The noise expression itself. This is where most of the noise magic happens.
     */
    expression: NoiseExpression,
    
    /**
     * Names the property that this expression is intended to provide a value for, if any. This will make the expression show up as an option in the map generator GUI, unless it is the only expression with that intended property, in which case it will be hidden and selected by default.

Note that the "Map type" dropdown in the map generation GUI is actually a selector for "elevation" generators. If generators are available for other properties, the "Map type" dropdown in the GUI will be renamed to "elevation" and shown along with selectors for the other selectable properties.

For example if a noise expression is intended to be used as an alternative temperature generator, `intended_property` should be "temperature". The base game uses the intended_properties elevation, temperature, moisture and aux. For how the named noise expression with those intended_properties are used in the base game see the notable named noise expression list on {@link NoiseExpression::variable | prototype:NoiseExpression::variable}. Mods may add any other intended_property or modify the existing noise expressions to change/remove their intended properties. Furthermore, mods may remove the use of those named noise expressions from the map generation code or change what they affect.

**intended_property in the base game:** The base game defines two named noise expressions that have the `intended_property` "elevation" so that are selectable via the "Map type" dropdown (which actually selects elevation generators)

```
local noise = require("noise")
data:extend{
  {
    type = "noise-expression",
    name = "elevation",
    intended_property = "elevation",
    expression = noise.var("0_17-lakes-elevation") -- "0_17-lakes-elevation" is another named noise expression. Noise variables may reference named noise expressions.
  },
  {
    type = "noise-expression",
    name = "0_17-island",
    intended_property = "elevation",
    -- A large island surrounded by an endless ocean
    -- expression =  [...]
  }
}
```

**Mods can define any intended_property with any name**. This examples aims to show what this is useful for.

A {@link NoiseExpression::variable | prototype:NoiseExpression::variable} can reference a named noise expression, so by defining the "test" named noise expression, `noise.var("test")` may be used in other {@link noise expressions | prototype:NoiseExpression}. Intended_property allows to override what the variable references: With the example, if "more-test" is selected in the dropdown in the map generator GUI, its `expression` (`noise.ridge(noise.var("y"), -10, 6`) will provide the value for the noise variable "test" instead.

For easy demonstration, that value is assigned to the "elevation" named noise expression, so changing the "test" generator changes the `noise.var("test")` which in turn is used by the "elevation" named noise expression. The "elevation" noise variable is used by water generation, so changing the test generators is immediately visible in the map generation preview.

Note that the player can select the "Island" elevation generator in the Elevation dropdown (previously named Map type), which means the 0_17-island named noise expression is selected and `noise.var("test")` isn't used anymore so changing the test generator no longer has an effect.

```
local noise = require("noise")
data:extend{
  {
    type = "noise-expression",
    name = "test",
    intended_property = "test",
    expression = noise.ridge(noise.var("x"), -80, 8),
  },
  {
    type = "noise-expression",
    name = "more-test",
    intended_property = "test", -- override the "test" noise variable when selected by the player
    expression = noise.ridge(noise.var("y"), -10, 6),
  }
}
data.raw["noise-expression"]["elevation"].expression = noise.var("test") -- the noise variable "test"
```
     */
    intended_property?: string,
    
    /**
     * Used to order alternative expressions in the map generator GUI. For a given property (e.g. 'temperature'), the NamedNoiseExpression with that property's name as its `intended_property` with the lowest order will be chosen as the default in the GUI.

If no order is specified, it defaults to "2000" if the property name matches the expression name (making it the 'technical default' generator for the property if none is specified in MapGenSettings), or "3000" otherwise. A generator defined with an order less than "2000" but with a unique name can thereby override the default generator used when creating a new map through the GUI without automatically overriding the 'technical default' generator, which is probably used by existing maps.
     */
    order?: Order
}

/**
 * Used by {@link nightvision | https://wiki.factorio.com/Nightvision}.
 */
interface NightVisionEquipmentPrototype extends EquipmentPrototype{
    activate_sound?: Sound,
    color_lookup: DaytimeColorLookupTable,
    
    /**
     * Must be >= 0 and <= 1.
     */
    darkness_to_turn_on?: number,
    deactivate_sound?: Sound,
    energy_input: Energy
}

/**
 * A noise layer used by the {@link autoplace system | prototype:AutoplacePeak::noise_layer}. For a list of built-in layers, see {@link here | https://wiki.factorio.com/Data.raw#noise-layer}.
 */
interface NoiseLayer extends PrototypeBase{
    
}

/**
 * An {@link offshore pump | https://wiki.factorio.com/Offshore_pump}.
 */
interface OffshorePumpPrototype extends EntityWithOwnerPrototype{
    adjacent_tile_collision_box?: BoundingBox,
    
    /**
     * Tiles colliding with `adjacent_tile_collision_box` must NOT collide with this collision mask.
     */
    adjacent_tile_collision_mask?: CollisionMask,
    
    /**
     * Tiles colliding with `adjacent_tile_collision_box` must collide with this collision mask (unless it's empty).
     */
    adjacent_tile_collision_test?: CollisionMask,
    
    /**
     * If false, the offshore pump will not show fluid present (visually) before there is an output connected. The pump will also animate yet not show fluid when the fluid is 100% extracted (e.g. such as with a pump).
     */
    always_draw_fluid?: boolean,
    
    /**
     * Tile at placement position must NOT collide with this collision mask.
     */
    center_collision_mask?: CollisionMask,
    
    /**
     * If not set (=default), the offshore pump does not collide with tiles if it has none of these collision masks: "water-tile", "ground-tile", "resource-layer", "player-layer", "item-layer", "doodad-layer". If it has at least one of the six collision masks, it does collide with tiles.

If set, this specifies whether collision with tiles should (true) or should not (false) be performed on an offshore pump.
     */
    check_bounding_box_collides_with_tiles?: boolean,
    
    /**
     * Mandatory if circuit_wire_max_distance > 0.
     */
    circuit_connector_sprites?: 
[    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites
],
    
    /**
     * Mandatory if circuit_wire_max_distance > 0.
     */
    circuit_wire_connection_points?: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * The name of the fluid that is produced by the pump.
     */
    fluid: FluidID,
    fluid_box: FluidBox,
    fluid_box_tile_collision_test?: CollisionMask,
    graphics_set?: OffshorePumpGraphicsSet,
    
    /**
     * Animation runs at least this fast.
     */
    min_perceived_performance?: number,
    
    /**
     * Mandatory if `graphics_set` is not defined.

Deprecated, use `graphics_set` instead.
     */
    picture?: Animation4Way,
    placeable_position_visualization?: Sprite,
    
    /**
     * How many units of fluid are produced per tick. Must be > 0.
     */
    pumping_speed: number,
    remove_on_tile_collision?: boolean
}

/**
 * An entity with a limited lifetime that can use trigger effects.
 */
interface ParticlePrototype extends PrototypeBase{
    draw_shadow_when_on_ground?: boolean,
    ended_in_water_trigger_effect?: TriggerEffect,
    ended_on_ground_trigger_effect?: TriggerEffect,
    
    /**
     * Defaults to `life_time` / 5, but at most 60. If this is 0, it is silently changed to 1.
     */
    fade_away_duration?: number,
    
    /**
     * Can't be 1.
     */
    life_time: number,
    mining_particle_frame_speed?: number,
    movement_modifier?: number,
    movement_modifier_when_on_ground?: number,
    
    /**
     * Picture variation count and individual frame count must be equal to shadow variation count.
     */
    pictures: AnimationVariations,
    regular_trigger_effect?: TriggerEffect,
    
    /**
     * Can't be 1.
     */
    regular_trigger_effect_frequency?: number,
    render_layer?: RenderLayer,
    render_layer_when_on_ground?: RenderLayer,
    
    /**
     * Shadow variation variation count and individual frame count must be equal to picture variation count.
     */
    shadows?: AnimationVariations,
    
    /**
     * Has to be >= -0.01 and <= 0.01.
     */
    vertical_acceleration?: number
}

/**
 * Creates particles.
 */
interface ParticleSourcePrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    height: number,
    height_deviation?: number,
    horizontal_speed: number,
    horizontal_speed_deviation?: number,
    
    /**
     * Mandatory if `smoke` is not defined.
     */
    particle?: ParticleID,
    
    /**
     * Mandatory if `particle` is not defined.
     */
    smoke?: SmokeSource[],
    time_before_start: number,
    time_before_start_deviation?: number,
    time_to_live: number,
    time_to_live_deviation?: number,
    vertical_speed: number,
    vertical_speed_deviation?: number
}

/**
 * An entity to transport fluids over a distance and between machines.
 */
interface PipePrototype extends EntityWithOwnerPrototype{
    
    /**
     * The area of the entity where fluid/gas inputs, and outputs.
     */
    fluid_box: FluidBox,
    horizontal_window_bounding_box: BoundingBox,
    pictures: PipePictures,
    vertical_window_bounding_box: BoundingBox
}

/**
 * A {@link pipe to ground | https://wiki.factorio.com/Pipe_to_ground}.
 */
interface PipeToGroundPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Causes fluid icon to always be drawn, ignoring the usual pair requirement.
     */
    draw_fluid_icon_override?: boolean,
    fluid_box: FluidBox,
    pictures: PipeToGroundPictures
}

/**
 * This prototype is used for receiving an achievement when the player receives damage.
 */
interface PlayerDamagedAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will trigger the achievement, if the amount of damage taken by the dealer, is more than this.
     */
    minimum_damage: number,
    
    /**
     * This sets the achievement to only trigger, if you survive the minimum amount of damage. If you don't need to survive, false.
     */
    should_survive: boolean,
    
    /**
     * This will trigger the achievement, if the player takes damage from this specific entity type.
     */
    type_of_dealer?: string
}

/**
 * When a character dies, this entity will immediately respawn the character at the entities location, so there is no respawn time. If there are multiple player ports in the world, the character will respawn at the nearest player port to their death location.
 */
interface PlayerPortPrototype extends EntityWithOwnerPrototype{
    animation: Animation,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean
}

/**
 * A {@link power switch | https://wiki.factorio.com/Power_switch}.
 */
interface PowerSwitchPrototype extends EntityWithOwnerPrototype{
    circuit_wire_connection_point: WireConnectionPoint,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    led_off: Sprite,
    led_on: Sprite,
    left_wire_connection_point: WireConnectionPoint,
    overlay_loop: Animation,
    overlay_start: Animation,
    overlay_start_delay: number,
    power_on_animation: Animation,
    right_wire_connection_point: WireConnectionPoint,
    wire_max_distance?: number
}

/**
 * This prototype is used for receiving an achievement when the player produces more than the specified amount of items.
 */
interface ProduceAchievementPrototype extends AchievementPrototype{
    
    /**
     * This will set the amount of items or fluids needed to craft, for the player to complete the achievement.
     */
    amount: MaterialAmountType,
    
    /**
     * Mandatory if `item_product` is not defined.

This will tell the achievement what fluid the player needs to craft, to get the achievement.
     */
    fluid_product?: FluidID,
    
    /**
     * Mandatory if `fluid_product` is not defined.

This will tell the achievement what item the player needs to craft, to get the achievement.
     */
    item_product?: ItemID,
    
    /**
     * If this is false, the player carries over their statistics from this achievement through all their saves.
     */
    limited_to_one_game: boolean
}

/**
 * This prototype is used for receiving an achievement when the player crafts a specified item a certain amount, in an hour.
 */
interface ProducePerHourAchievementPrototype extends AchievementPrototype{
    
    /**
     * This is how much the player has to craft in an hour, to receive the achievement.
     */
    amount: MaterialAmountType,
    
    /**
     * Mandatory if `item_product` is not defined.

This will tell the achievement what fluid the player needs to craft, to get the achievement.
     */
    fluid_product?: FluidID,
    
    /**
     * Mandatory if `fluid_product` is not defined.

This will tell the achievement what item the player needs to craft, to get the achievement.
     */
    item_product?: ItemID
}

/**
 * A {@link programmable speaker | https://wiki.factorio.com/Programmable_speaker}.
 */
interface ProgrammableSpeakerPrototype extends EntityWithOwnerPrototype{
    audible_distance_modifier?: number,
    circuit_connector_sprites?: CircuitConnectorSprites,
    circuit_wire_connection_point?: WireConnectionPoint,
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    energy_source: ElectricEnergySource | VoidEnergySource,
    energy_usage_per_tick: Energy,
    instruments: ProgrammableSpeakerInstrument[],
    maximum_polyphony: number,
    sprite: Sprite
}

/**
 * Entity with limited lifetime that can hit other entities and has triggers when this happens.
 */
interface ProjectilePrototype extends EntityPrototype{
    
    /**
     * Must be != 0 if `turning_speed_increases_exponentially_with_projectile_speed` is true.
     */
    acceleration: number,
    
    /**
     * Executed when the projectile hits something.
     */
    action?: Trigger,
    animation?: AnimationVariations,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Setting this to true can be used to disable projectile homing behaviour.
     */
    direction_only?: boolean,
    enable_drawing_with_mask?: boolean,
    
    /**
     * Executed when the projectile hits something, after `action` and only if the entity that was hit was destroyed. The projectile is destroyed right after the final_action.
     */
    final_action?: Trigger,
    force_condition?: ForceCondition,
    height?: number,
    
    /**
     * When true the entity is hit at the position on its collision box the projectile first collides with. When false the entity is hit at its own position.
     */
    hit_at_collision_position?: boolean,
    hit_collision_mask?: CollisionMask,
    light?: LightDefinition,
    
    /**
     * Must be greater than or equal to 0.
     */
    max_speed?: number,
    
    /**
     * Whenever an entity is hit by the projectile, this number gets reduced by the health of the entity. If the number is then below 0, the `final_action` is applied and the projectile destroyed. Otherwise, the projectile simply continues to its destination.
     */
    piercing_damage?: number,
    
    /**
     * Whether the animation of the projectile is rotated to match the direction of travel.
     */
    rotatable?: boolean,
    shadow?: AnimationVariations,
    smoke?: SmokeSource[],
    speed_modifier?: Vector,
    
    /**
     * Must be greater than or equal to 0.
     */
    turn_speed?: number,
    turning_speed_increases_exponentially_with_projectile_speed?: boolean
}

/**
 * The abstract base for prototypes. PrototypeBase defines the common features of prototypes, such as localization and order.
 */
interface PrototypeBase {
    
    /**
     * Overwrites the description set in the {@link locale file | https://wiki.factorio.com/Tutorial:Localisation}. The description is usually shown in the tooltip of the prototype.
     */
    localised_description?: LocalisedString,
    
    /**
     * Overwrites the name set in the {@link locale file | https://wiki.factorio.com/Tutorial:Localisation}. Can be used to easily set a procedurally-generated name because the LocalisedString format allows to insert parameters into the name directly from the Lua script.
     */
    localised_name?: LocalisedString,
    
    /**
     * Unique textual identification of the prototype. May not contain a dot, nor exceed a length of 200 characters.

For a list of all names used in vanilla, see {@link data.raw | https://wiki.factorio.com/Data.raw}.
     */
    name: string,
    
    /**
     * Used to order prototypes in inventory, recipes and GUIs. May not exceed a length of 200 characters.
     */
    order?: Order,
    
    /**
     * Specifies the kind of prototype this is.

For a list of all types used in vanilla, see {@link data.raw | https://wiki.factorio.com/Data.raw}.
     */
    type: string
}

/**
 * The pump is used to transfer fluids between tanks, fluid wagons and pipes.
 */
interface PumpPrototype extends EntityWithOwnerPrototype{
    
    /**
     * The animation for the pump.
     */
    animations: Animation4Way,
    
    /**
     * Mandatory if circuit_wire_max_distance  > 0.
     */
    circuit_connector_sprites?: 
[    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites
],
    
    /**
     * Mandatory if circuit_wire_max_distance  > 0.
     */
    circuit_wire_connection_points?: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * The type of energy the pump uses.
     */
    energy_source: EnergySource,
    
    /**
     * The amount of energy the pump uses.
     */
    energy_usage: Energy,
    fluid_animation?: Animation4Way,
    
    /**
     * The area of the entity where fluid inputs and outputs.
     */
    fluid_box: FluidBox,
    fluid_wagon_connector_alignment_tolerance?: number,
    fluid_wagon_connector_frame_count?: number,
    fluid_wagon_connector_graphics?: FluidWagonConnectorGraphics,
    fluid_wagon_connector_speed?: number,
    glass_pictures?: Sprite4Way,
    
    /**
     * The amount of fluid this pump transfers per tick.
     */
    pumping_speed: number
}

/**
 * A {@link radar | https://wiki.factorio.com/Radar}.
 */
interface RadarPrototype extends EntityWithOwnerPrototype{
    
    /**
     * The amount of energy the radar has to consume for nearby scan to be performed. This value doesn't have any effect on sector scanning.

Performance warning: nearby scan causes re-charting of many chunks, which is expensive operation. If you want to make a radar that updates map more in real time, you should keep its range low. If you are making radar with high range, you should set this value such that nearby scan is performed once a second or so. For example if you set `energy_usage` to 100kW, setting` energy_per_nearby_scan` to 100kJ will cause nearby scan happen once per second.
     */
    energy_per_nearby_scan: Energy,
    
    /**
     * The amount of energy it takes to scan a sector. This value doesn't have any effect on nearby scanning.
     */
    energy_per_sector: Energy,
    
    /**
     * The energy source for this radar.
     */
    energy_source: EnergySource,
    
    /**
     * The amount of energy this radar uses.
     */
    energy_usage: Energy,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean,
    
    /**
     * The radius of the area constantly revealed by this radar, in chunks.
     */
    max_distance_of_nearby_sector_revealed: number,
    
    /**
     * The radius of the area this radar can chart, in chunks.
     */
    max_distance_of_sector_revealed: number,
    pictures: RotatedSprite,
    radius_minimap_visualisation_color?: Color,
    rotation_speed?: number
}

/**
 * A {@link rail chain signal | https://wiki.factorio.com/Rail_chain_signal}.
 */
interface RailChainSignalPrototype extends RailSignalBasePrototype{
    blue_light?: LightDefinition,
    default_blue_output_signal?: SignalIDConnector,
    
    /**
     * Array of 8 vectors.
     */
    selection_box_offsets: Vector[]
}

/**
 * A {@link rail planner | https://wiki.factorio.com/Rail_planner}.
 */
interface RailPlannerPrototype extends ItemPrototype{
    
    /**
     * The name of an entity of the type "curved-rail". The first item to place of the rail must be this rail planner.
     */
    curved_rail: EntityID,
    
    /**
     * The name of an entity of the type "straight-rail". The first item to place of the rail must be this rail planner.
     */
    straight_rail: EntityID
}

/**
 * The abstract base of both rail prototypes.
 */
interface RailPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2,
    
    /**
     * All rail {@link collision_boxes | prototype:EntityPrototype::collision_box} are hardcoded and cannot be modified.
     */
    collision_box?: BoundingBox,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    pictures: RailPictureSet,
    
    /**
     * Furthermore, the rail {@link selection_boxes | prototype:EntityPrototype::selection_box} are automatically calculated from the bounding boxes, so effectively also hardcoded.
     */
    selection_box?: BoundingBox,
    
    /**
     * Sound played when a character walks over this rail.
     */
    walking_sound?: Sound
}

/**
 * Used for rail corpses.
 */
interface RailRemnantsPrototype extends CorpsePrototype{
    bending_type: 'straight' | 'turn',
    
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2,
    
    /**
     * All rail remnant {@link collision_boxes | prototype:EntityPrototype::collision_box} are hardcoded and cannot be modified.
     */
    collision_box?: BoundingBox,
    pictures: RailPictureSet,
    
    /**
     * Furthermore, the rail remnant {@link selection_boxes | prototype:EntityPrototype::selection_box} are automatically calculated from the bounding boxes, so effectively also hardcoded.
     */
    selection_box?: BoundingBox
}

/**
 * The abstract base entity for both rail signals.
 */
interface RailSignalBasePrototype extends EntityWithOwnerPrototype{
    animation: RotatedAnimation,
    
    /**
     * Mandatory if circuit_wire_max_distance > 0.
     */
    circuit_connector_sprites?: CircuitConnectorSprites[],
    
    /**
     * Mandatory if circuit_wire_max_distance > 0.
     */
    circuit_wire_connection_points?: WireConnectionPoint[],
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    
    /**
     * The {@link collision_box | prototype:EntityPrototype::collision_box} of rail signals is hardcoded to `{{-0.2, -0.2}, {0.2, 0.2}}`.
     */
    collision_box?: BoundingBox,
    
    /**
     * Rail signals must collide with each other, this can be achieved by having the "rail-layer" collision mask layer on all rail signals.

Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    default_green_output_signal?: SignalIDConnector,
    default_orange_output_signal?: SignalIDConnector,
    default_red_output_signal?: SignalIDConnector,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * The "placeable-off-grid" flag will be ignored for rail signals.
     */
    flags?: EntityPrototypeFlags,
    green_light?: LightDefinition,
    orange_light?: LightDefinition,
    rail_piece?: Animation,
    red_light?: LightDefinition
}

/**
 * A {@link rail signal | https://wiki.factorio.com/Rail_signal}.
 */
interface RailSignalPrototype extends RailSignalBasePrototype{
    
}

/**
 * A {@link reactor | https://wiki.factorio.com/Reactor}.
 */
interface ReactorPrototype extends EntityWithOwnerPrototype{
    
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. Each variation represents connected heat buffer connection of corresponding index.
     */
    connection_patches_connected?: SpriteVariations,
    
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. Each variation represents unconnected heat buffer connection of corresponding index.
     */
    connection_patches_disconnected?: SpriteVariations,
    
    /**
     * How much energy this reactor can consume (from the input energy source) and then output as heat.
     */
    consumption: Energy,
    
    /**
     * When `use_fuel_glow_color` is true, this is the color used as `working_light_picture` tint for fuels that don't have glow color defined.
     */
    default_fuel_glow_color?: Color,
    
    /**
     * May not be a heat energy source.

The input energy source, in vanilla it is a burner energy source.
     */
    energy_source: EnergySource,
    
    /**
     * The energy output as heat.
     */
    heat_buffer: HeatBuffer,
    
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. When reactor is heated, corresponding variations are drawn over `connection_patches_connected`.
     */
    heat_connection_patches_connected?: SpriteVariations,
    
    /**
     * If defined, number of variations must be at least equal to count of {@link connections | prototype:HeatBuffer::connections} defined in `heat_buffer`. When reactor is heated, corresponding variations are drawn over `connection_patches_disconnected`.
     */
    heat_connection_patches_disconnected?: SpriteVariations,
    heat_lower_layer_picture?: Sprite,
    light?: LightDefinition,
    lower_layer_picture?: Sprite,
    
    /**
     * The action is triggered when the reactor dies (is destroyed) at over 90% of max temperature.
     */
    meltdown_action?: Trigger,
    neighbour_bonus?: number,
    picture?: Sprite,
    
    /**
     * When this is true, the reactor will stop consuming fuel/energy when the temperature has reached the maximum.
     */
    scale_energy_usage?: boolean,
    
    /**
     * Whether the reactor should use {@link fuel_glow_color | prototype:ItemPrototype::fuel_glow_color} from the fuel item prototype as light color and tint for `working_light_picture`. {@link Forum post. | https://forums.factorio.com/71121}
     */
    use_fuel_glow_color?: boolean,
    working_light_picture: Sprite
}

/**
 * A recipe category. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#recipe-category}. See {@link RecipePrototype::category | prototype:RecipePrototype::category}. Recipe categories can be used to specify which {@link machine | prototype:CraftingMachinePrototype::crafting_categories} can craft which {@link recipes | prototype:RecipePrototype}.
 * 
 * The recipe category with the name "crafting" cannot contain recipes with fluid ingredients or products.
 */
interface RecipeCategory extends PrototypeBase{
    
}

/**
 * A recipe. It can be a crafting recipe, a smelting recipe, or a custom type of recipe, see {@link RecipeCategory | prototype:RecipeCategory}.
 * 
 * This prototype has two different formats that can be specified. If both `normal` and `expensive` are not defined, the standard properties define this recipe. Otherwise, they are ignored, and the `normal` and `expensive` properties are used exclusively to define this recipe.
 * @example
 * ```
 * {
 *   type = "recipe",
 *   name = "iron-plate",
 *   category = "smelting",
 *   energy_required = 3.5,
 *   ingredients = {{"iron-ore", 1}},
 *   result = "iron-plate"
 * }
 * ```
 *
 * @example
 * ```
 * {
 *   type = "recipe",
 *   name = "coal-liquefaction",
 *   category = "oil-processing",
 *   subgroup = "fluid-recipes",
 *   order = "a[oil-processing]-c[coal-liquefaction]",
 *   enabled = false,
 *   energy_required = 5,
 *   icon = "__base__/graphics/icons/fluid/coal-liquefaction.png",
 *   icon_size = 32,
 *   ingredients =
 *   {
 *     {type="item", name="coal", amount=10},
 *     {type="fluid", name="heavy-oil", amount=25},
 *     {type="fluid", name="steam", amount=50}
 *   },
 *   results=
 *   {
 *     {type="fluid", name="heavy-oil", amount=35},
 *     {type="fluid", name="light-oil", amount=15},
 *     {type="fluid", name="petroleum-gas", amount=20}
 *   },
 *   allow_decomposition = false
 * }
 * ```
 *
 * @example
 * ```
 * {  -- Recipe with difficulty
 *   type = "recipe",
 *   name = "iron-gear-wheel",
 *   normal =
 *   {
 *     ingredients = {{"iron-plate", 2}},
 *     result = "iron-gear-wheel"
 *   },
 *   expensive =
 *   {
 *     ingredients = {{"iron-plate", 4}},
 *     result = "iron-gear-wheel"
 *   }
 * }
 * ```
 *
 * @example
 * ```
 * {  -- Uncraftable in normal mode (unless unlocked via command/research)
 *   type = "recipe",
 *   name = "iron-gear-wheel",
 *   normal = false,
 *   expensive =
 *   {
 *     ingredients = {{"iron-plate", 4}},
 *     result = "iron-gear-wheel"
 *   }
 * }
 * ```
 *
 * @example
 * ```
 * {  -- Expensive recipe always used, even when in normal mode
 *   type = "recipe",
 *   name = "iron-gear-wheel",
 *   normal = nil, -- can be omitted
 *   expensive =
 *   {
 *     ingredients = {{"iron-plate", 4}},
 *     result = "iron-gear-wheel"
 *   }
 * }
 * ```
 *
 */
interface RecipePrototype extends PrototypeBase{
    
    /**
     * Whether the recipe can be used as an intermediate recipe in hand-crafting.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    allow_as_intermediate?: boolean,
    
    /**
     * Whether this recipe is allowed to be broken down for the recipe tooltip "Total raw" calculations.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    allow_decomposition?: boolean,
    
    /**
     * Whether the recipe is allowed to have the extra inserter overload bonus applied (4 * stack inserter stack size).

Only loaded if neither `normal` nor `expensive` are defined.
     */
    allow_inserter_overload?: boolean,
    
    /**
     * Whether the recipe is allowed to use intermediate recipes when hand-crafting.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    allow_intermediates?: boolean,
    
    /**
     * Whether the "Made in: <Machine>" part of the tool-tip should always be present, and not only when the recipe can't be hand-crafted.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    always_show_made_in?: boolean,
    
    /**
     * Whether the products are always shown in the recipe tooltip.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    always_show_products?: boolean,
    
    /**
     * Controls which category of machines can craft this recipe.

The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#recipe-category}. The base `"crafting"` category can not contain recipes with fluid ingredients or products.
     */
    category?: RecipeCategoryID,
    
    /**
     * Used by {@link CraftingMachinePrototype::working_visualisations | prototype:CraftingMachinePrototype::working_visualisations} to tint certain layers with the recipe color. {@link WorkingVisualisation::apply_recipe_tint | prototype:WorkingVisualisation::apply_recipe_tint} determines which of the four colors is used for that layer, if any.
     */
    crafting_machine_tint?: CraftingMachineTint,
    
    /**
     * Only loaded if neither `normal` nor `expensive` are defined.
     */
    emissions_multiplier?: number,
    
    /**
     * This can be `false` to disable the recipe at the start of the game, or `true` to leave it enabled.

If a recipe is unlocked via technology, this should be set to `false`.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    enabled?: boolean,
    
    /**
     * The amount of time it takes to make this recipe. Must be `> 0.001`. Equals the number of seconds it takes to craft at crafting speed `1`.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    energy_required?: number,
    
    /**
     * Can be set to `false` if the `normal` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later enabled (by research, etc.), it will use the data from `normal`.

If this property is not defined while `normal` is, it will mirror its data.
     */
    expensive?: RecipeData | false,
    
    /**
     * Hides the recipe from crafting menus.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    hidden?: boolean,
    
    /**
     * Hides the recipe from the player's crafting screen. The recipe will still show up for selection in machines.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    hide_from_player_crafting?: boolean,
    
    /**
     * Hides the recipe from item/fluid production statistics.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    hide_from_stats?: boolean,
    
    /**
     * If given, this determines the recipe's icon. Otherwise, the icon of `main_product` or the singular product is used.

Mandatory if `icons` is not defined for a recipe with more than one product and no `main_product`, or no product.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Can't be an empty array.
     */
    icons?: IconData[],
    
    /**
     * A table containing ingredient names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the IngredientPrototype (see {@link here | https://factorio.com/blog/post/fff-256}).

The maximum ingredient amount is 65 535. Can be set to an empty table to create a recipe that needs no ingredients.

Duplicate ingredients, e.g. two entries with the same name, are *not* allowed. In-game, the item ingredients are ordered by {@link ItemGroup::order_in_recipe | prototype:ItemGroup::order_in_recipe}.

Mandatory if neither `normal` nor `expensive` are defined.
     */
    ingredients?: IngredientPrototype[],
    
    /**
     * For recipes with one or more products: Subgroup, localised_name and icon default to the values of the singular/main product, but can be overwritten by the recipe. Setting the main_product to an empty string (`""`) forces the title in the recipe tooltip to use the recipe's name (not that of the product) and shows the products in the tooltip.

If 1) there are multiple products and this property is nil, 2) this property is set to an empty string (`""`), or 3) there are no products, the recipe will use the localised_name, icon, and subgroup of the recipe. icon and subgroup become non-optional.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    main_product?: string,
    
    /**
     * Can be set to `false` if the `expensive` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later enabled (by research, etc.), it will use the data from `expensive`.

If this property is not defined while `expensive` is, it will mirror its data.
     */
    normal?: RecipeData | false,
    
    /**
     * Used to determine how many extra items are put into an assembling machine before it's considered "full enough". See {@link insertion limits | https://wiki.factorio.com/Inserters#Insertion_limits}.

If set to `0`, it instead uses the following formula: `1.166 / (energy_required / the assembler's crafting_speed)`, rounded up, and clamped to be between`2` and `100`. The numbers used in this formula can be changed by the {@link UtilityConstants | prototype:UtilityConstants} properties `dynamic_recipe_overload_factor`, `minimum_recipe_overload_multiplier`, and `maximum_recipe_overload_multiplier`.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    overload_multiplier?: number,
    
    /**
     * Only loaded if neither `normal` nor `expensive` are defined.
     */
    requester_paste_multiplier?: number,
    
    /**
     * The item created by this recipe. Must be the name of an {@link item | prototype:ItemPrototype}, such as `"iron-gear-wheel"`.

Only loaded if neither `results`, `normal` nor `expensive` are defined.
     */
    result?: ItemID,
    
    /**
     * The number of items created by this recipe.

Only loaded if neither `results`, `normal` nor `expensive` are defined.
     */
    result_count?: number,
    
    /**
     * A table containing result names and counts. Can also contain information about fluid temperature and catalyst amounts. The catalyst amounts are automatically calculated from the recipe, or can be set manually in the ProductPrototype (see {@link here | https://factorio.com/blog/post/fff-256}).

Can be set to an empty table to create a recipe that produces nothing. Duplicate results, e.g. two entries with the same name, are allowed.

Mandatory if neither `normal` nor `expensive` are defined.
     */
    results?: ProductPrototype[],
    
    /**
     * Whether the recipe name should have the product amount in front of it, e.g. "2x Transport belt".

Only loaded if neither `normal` nor `expensive` are defined.
     */
    show_amount_in_title?: boolean,
    
    /**
     * The subgroup of this recipe. If not specified, it defaults to the subgroup of the product if there is only one, or of the `main_product` if multiple products exist.

Mandatory if multiple products exist and no `main_product` is specified, or if there is no product.
     */
    subgroup?: ItemSubGroupID,
    
    /**
     * Whether enabling this recipe unlocks its item products to show in selection lists (item filters, logistic requests, etc.).

Only loaded if neither `normal` nor `expensive` are defined.
     */
    unlock_results?: boolean
}

/**
 * A {@link repair pack | https://wiki.factorio.com/Repair_pack}.
 */
interface RepairToolPrototype extends ToolPrototype{
    
    /**
     * This does nothing, it is never triggered.
     */
    repair_result?: Trigger,
    speed: number
}

/**
 * This prototype is used for receiving an achievement when the player completes a specific research.
 */
interface ResearchAchievementPrototype extends AchievementPrototype{
    
    /**
     * Mandatory if `technology` is not defined.

This will only trigger if the player has learned every research in the game.
     */
    research_all?: boolean,
    
    /**
     * Mandatory if `research_all` is not defined.

Researching this technology will trigger the achievement.
     */
    technology?: TechnologyID
}

/**
 * A resource category. The built-in categories can be found {@link here | https://wiki.factorio.com/Data.raw#resource-category}. See {@link ResourceEntityPrototype::category | prototype:ResourceEntityPrototype::category}.
 */
interface ResourceCategory extends PrototypeBase{
    
}

/**
 * A mineable/gatherable entity. Its {@link collision_mask | prototype:EntityPrototype::collision_mask} must contain "resource-layer" if it should be minable with a {@link MiningDrillPrototype | prototype:MiningDrillPrototype}.
 * @example
 * ```
 * {
 *   type = "resource",
 *   name = "crude-oil",
 *   icon = "__base__/graphics/icons/crude-oil.png",
 *   icon_size = 32,
 *   flags = {"placeable-neutral"},
 *   category = "basic-fluid",
 *   order="a-b-a",
 *   infinite = true,
 *   highlight = true,
 *   minimum = 60000,
 *   normal = 300000,
 *   infinite_depletion_amount = 10,
 *   resource_patch_search_radius = 12,
 *   tree_removal_probability = 0.7,
 *   tree_removal_max_distance = 32 * 32,
 *   minable =
 *   {
 *     mining_time = 1,
 *     results =
 *     {
 *       {
 *         type = "fluid",
 *         name = "crude-oil",
 *         amount_min = 10,
 *         amount_max = 10,
 *         probability = 1
 *       }
 *     }
 *   },
 *   collision_box = {{ -1.4, -1.4}, {1.4, 1.4}},
 *   selection_box = {{ -0.5, -0.5}, {0.5, 0.5}},
 *   autoplace = resource_autoplace.resource_autoplace_settings{
 *     name = "crude-oil",
 *     order = "c", -- Other resources are "b"; oil won't get placed if something else is already there.
 *     base_density = 8.2,
 *     base_spots_per_km2 = 1.8,
 *     random_probability = 1/48,
 *     random_spot_size_minimum = 1,
 *     random_spot_size_maximum = 1, -- don't randomize spot size
 *     additional_richness = 220000, -- this increases the total everywhere, so base_density needs to be decreased to compensate
 *     has_starting_area_placement = false,
 *     resource_index = resource_autoplace.resource_indexes["crude-oil"],
 *     regular_rq_factor_multiplier = 1
 *   },
 *   stage_counts = {0},
 *   stages =
 *   {
 *     sheet =
 *     {
 *       filename = "__base__/graphics/entity/crude-oil/crude-oil.png",
 *       priority = "extra-high",
 *       width = 75,
 *       height = 61,
 *       frame_count = 4,
 *       variation_count = 1
 *     }
 *   },
 *   map_color = {r=0.78, g=0.2, b=0.77},
 *   map_grid = false
 * }
 * ```
 *
 */
interface ResourceEntityPrototype extends EntityPrototype{
    
    /**
     * The category for the resource. Available categories in vanilla can be found {@link here | https://wiki.factorio.com/Data.raw#resource-category}.
     */
    category?: ResourceCategoryID,
    
    /**
     * Must be positive.
     */
    cliff_removal_probability?: number,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * How long it takes `stages_effect` to go from `min_effect_alpha` to `max_effect_alpha`.
     */
    effect_animation_period?: number,
    
    /**
     * How much `effect_animation_period` can deviate from its original value. Used to make the stages effect alpha change look less uniform.
     */
    effect_animation_period_deviation?: number,
    
    /**
     * How much the surface darkness should affect the alpha of `stages_effect`.
     */
    effect_darkness_multiplier?: number,
    
    /**
     * If the resource should be highlighted when holding a mining drill that can mine it (holding a pumpjack highlights crude-oil in the base game).
     */
    highlight?: boolean,
    
    /**
     * If the ore is infinitely minable, or if it will eventually run out of resource.
     */
    infinite?: boolean,
    
    /**
     * Every time an infinite-type resource "ticks" lower it's lowered by that amount. -- {@link Rseding91 | https://forums.factorio.com/viewtopic.php?p=271115#p271115}
     */
    infinite_depletion_amount?: number,
    
    /**
     * Whether the resource should have a grid pattern on the map instead of a solid map color.
     */
    map_grid?: boolean,
    
    /**
     * Maximal alpha value of `stages_effect`.
     */
    max_effect_alpha?: number,
    
    /**
     * Minimal alpha value of `stages_effect`.
     */
    min_effect_alpha?: number,
    
    /**
     * Must be not 0 when `infinite = true`.
     */
    minimum?: number,
    
    /**
     * Defaults to the resources map color if left unset and map color is set, otherwise defaults to white if left unset.
     */
    mining_visualisation_tint?: Color,
    
    /**
     * Must be not 0 when `infinite = true`.
     */
    normal?: number,
    
    /**
     * Whether there should be a slight offset to graphics of the resource. Used to make patches a little less uniform in appearance.
     */
    randomize_visual_position?: boolean,
    
    /**
     * When hovering over this resource in the map view: How far to search for other resource patches of this type to display as one (summing amount, white outline).
     */
    resource_patch_search_radius?: number,
    
    /**
     * Number of stages the animation has.
     */
    stage_counts: number[],
    
    /**
     * Entity's graphics, using a graphic sheet, with variation and depletion. At least one stage must be defined.

When using {@link AnimationVariations::sheet | prototype:AnimationVariations::sheet}, `frame_count` is the amount of frames per row in the spritesheet. `variation_count` is the amount of rows in the spritesheet. Each row in the spritesheet is one stage of the animation.
     */
    stages: AnimationVariations,
    
    /**
     * An effect that can be overlaid above the normal ore graphics. Used in the base game to make {@link uranium ore | https://wiki.factorio.com/Uranium_ore} glow.
     */
    stages_effect?: AnimationVariations,
    
    /**
     * Must be positive when `tree_removal_probability` is set.
     */
    tree_removal_max_distance?: number,
    
    /**
     * Must be positive.
     */
    tree_removal_probability?: number,
    
    /**
     * Sound played when the player walks over this resource.
     */
    walking_sound?: Sound
}

/**
 * Used by {@link personal roboport | https://wiki.factorio.com/Personal_roboport}.
 */
interface RoboportEquipmentPrototype extends EquipmentPrototype{
    
    /**
     * Add this is if the roboport should be fueled directly instead of using power from the equipment grid.
     */
    burner?: BurnerEnergySource,
    
    /**
     * Presumably, the distance from the roboport at which robots will wait to charge.
     */
    charge_approach_distance: number,
    charging_distance?: number,
    charging_energy: Energy,
    
    /**
     * The offsets from the center of the roboport at which robots will charge. Only used if `charging_station_count` is equal to 0.
     */
    charging_offsets?: Vector[],
    
    /**
     * How many charging points this roboport has. If this is 0, the length of the charging_offsets table is used to calculate the charging station count.
     */
    charging_station_count?: number,
    charging_station_shift?: Vector,
    
    /**
     * Distance in tiles. This defines how far away a robot can be from the charging spot and still be charged, however the bot is still required to reach a charging spot in the first place.
     */
    charging_threshold_distance?: number,
    
    /**
     * Can't be negative.
     */
    construction_radius: number,
    draw_construction_radius_visualization?: boolean,
    
    /**
     * Unused, as roboport equipment does not have a logistic radius that could be drawn.
     */
    draw_logistic_radius_visualization?: boolean,
    
    /**
     * Mandatory if `burner` is defined.

The size of the buffer of the burner energy source, so effectively the amount of power that the energy source can produce per tick.
     */
    power?: Energy,
    
    /**
     * The animation played at each charging point when a robot is charging there.
     */
    recharging_animation: Animation,
    
    /**
     * The light emitted when charging a robot.
     */
    recharging_light?: LightDefinition,
    
    /**
     * How many robots can exist in the network (cumulative).
     */
    robot_limit?: ItemCountType,
    robot_vertical_acceleration?: number,
    robots_shrink_when_entering_and_exiting?: boolean,
    
    /**
     * Presumably states the height of the charging stations and thus an additive offset for the charging_offsets.
     */
    spawn_and_station_height: number,
    spawn_and_station_shadow_height_offset?: number,
    
    /**
     * Minimum amount of energy that needs to available inside the roboport's buffer so that robots can be spawned.
     */
    spawn_minimum?: Energy,
    
    /**
     * The offset from the center of the roboport at which robots will enter and exit.
     */
    stationing_offset?: Vector
}

/**
 * A {@link roboport | https://wiki.factorio.com/Roboport}.
 */
interface RoboportPrototype extends EntityWithOwnerPrototype{
    base: Sprite,
    
    /**
     * The animation played when the roboport is idle.
     */
    base_animation: Animation,
    base_patch: Sprite,
    
    /**
     * The distance (in tiles) from the roboport at which robots will wait to charge. Notably, if the robot is already in range, then it will simply wait at its current position.
     */
    charge_approach_distance: number,
    charging_distance?: number,
    
    /**
     * The maximum power provided to each charging station.
     */
    charging_energy: Energy,
    
    /**
     * The offsets from the center of the roboport at which robots will charge. Only used if `charging_station_count` is equal to 0.
     */
    charging_offsets?: Vector[],
    
    /**
     * How many charging points this roboport has. If this is 0, the length of the charging_offsets table is used to calculate the charging station count.
     */
    charging_station_count?: number,
    charging_station_shift?: Vector,
    
    /**
     * Unused.
     */
    charging_threshold_distance?: number,
    circuit_connector_sprites?: CircuitConnectorSprites,
    circuit_wire_connection_point?: WireConnectionPoint,
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    close_door_trigger_effect?: TriggerEffect,
    
    /**
     * Can't be negative.
     */
    construction_radius: number,
    default_available_construction_output_signal?: SignalIDConnector,
    default_available_logistic_output_signal?: SignalIDConnector,
    default_total_construction_output_signal?: SignalIDConnector,
    default_total_logistic_output_signal?: SignalIDConnector,
    door_animation_down: Animation,
    door_animation_up: Animation,
    draw_circuit_wires?: boolean,
    draw_construction_radius_visualization?: boolean,
    draw_copper_wires?: boolean,
    draw_logistic_radius_visualization?: boolean,
    
    /**
     * The roboport's energy source.
     */
    energy_source: ElectricEnergySource | VoidEnergySource,
    
    /**
     * The amount of energy the roboport uses when idle.
     */
    energy_usage: Energy,
    
    /**
     * Must be >= `logistics_radius`.
     */
    logistics_connection_distance?: number,
    
    /**
     * Can't be negative.
     */
    logistics_radius: number,
    
    /**
     * The number of repair pack slots in the roboport.
     */
    material_slots_count: ItemStackIndex,
    open_door_trigger_effect?: TriggerEffect,
    
    /**
     * Minimum charge that the roboport has to have after a blackout (0 charge/buffered energy) to begin working again. Additionally, freshly placed roboports will have their energy buffer filled with `0.25 × recharge_minimum` energy.

Must be larger than or equal to `energy_usage` otherwise during low power the roboport will toggle on and off every tick.
     */
    recharge_minimum: Energy,
    
    /**
     * The animation played at each charging point when a robot is charging there.
     */
    recharging_animation: Animation,
    
    /**
     * The light emitted when charging a robot.
     */
    recharging_light?: LightDefinition,
    request_to_open_door_timeout: number,
    
    /**
     * Unused.
     */
    robot_limit?: ItemCountType,
    
    /**
     * The number of robot slots in the roboport.
     */
    robot_slots_count: ItemStackIndex,
    robot_vertical_acceleration?: number,
    robots_shrink_when_entering_and_exiting?: boolean,
    
    /**
     * Presumably states the height of the charging stations and thus an additive offset for the charging_offsets.
     */
    spawn_and_station_height: number,
    spawn_and_station_shadow_height_offset?: number,
    
    /**
     * The offset from the center of the roboport at which robots will enter and exit.
     */
    stationing_offset?: Vector
}

/**
 * The common properties of logistic and construction robots represented by an abstract prototype.
 */
interface RobotWithLogisticInterfacePrototype extends FlyingRobotPrototype{
    cargo_centered: Vector,
    
    /**
     * Applied when the robot expires (runs out of energy and {@link FlyingRobotPrototype::speed_multiplier_when_out_of_energy | prototype:FlyingRobotPrototype::speed_multiplier_when_out_of_energy} is 0).
     */
    destroy_action?: Trigger,
    draw_cargo?: boolean,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    idle?: RotatedAnimation,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    in_motion?: RotatedAnimation,
    max_payload_size: ItemCountType,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the idle state cannot be animated.
     */
    shadow_idle?: RotatedAnimation,
    
    /**
     * Only the first frame of the animation is drawn. This means that the graphics for the in_motion state cannot be animated.
     */
    shadow_in_motion?: RotatedAnimation
}

/**
 * A {@link rocket silo | https://wiki.factorio.com/Rocket_silo}.
 */
interface RocketSiloPrototype extends AssemblingMachinePrototype{
    
    /**
     * Additional energy used during the following parts of the {@link launch sequence | runtime:defines.rocket_silo_status}: doors_opening, rocket_rising, arms_advance, engine_starting, arms_retract, doors_closing.
     */
    active_energy_usage: Energy,
    
    /**
     * Played when switching into the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state.
     */
    alarm_sound?: Sound,
    
    /**
     * Applied when switching into the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state.
     */
    alarm_trigger?: TriggerEffect,
    arm_01_back_animation: Animation,
    arm_02_right_animation: Animation,
    arm_03_front_animation: Animation,
    base_day_sprite: Sprite,
    base_engine_light?: LightDefinition,
    base_front_sprite: Sprite,
    base_light?: LightDefinition,
    
    /**
     * Drawn instead of `base_day_sprite` during the night, that is when {@link LuaSurface::darkness | runtime:LuaSurface::darkness} is larger than 0.3.
     */
    base_night_sprite?: Sprite,
    
    /**
     * Played when switching into the {@link arms_retract | runtime:defines.rocket_silo_status.arms_retract} state.
     */
    clamps_off_sound?: Sound,
    
    /**
     * Applied when switching into the {@link arms_retract | runtime:defines.rocket_silo_status.arms_retract} state.
     */
    clamps_off_trigger?: TriggerEffect,
    
    /**
     * Played when switching into the {@link arms_advance | runtime:defines.rocket_silo_status.arms_advance} state.
     */
    clamps_on_sound?: Sound,
    
    /**
     * Applied when switching into the {@link arms_advance | runtime:defines.rocket_silo_status.arms_advance} state.
     */
    clamps_on_trigger?: TriggerEffect,
    door_back_open_offset: Vector,
    door_back_sprite: Sprite,
    door_front_open_offset: Vector,
    door_front_sprite: Sprite,
    
    /**
     * The inverse of the duration in ticks of {@link doors_opening | runtime:defines.rocket_silo_status.doors_opening} and {@link closing | runtime:defines.rocket_silo_status.doors_closing}.
     */
    door_opening_speed: number,
    
    /**
     * Played when switching into the {@link doors_opening | runtime:defines.rocket_silo_status.doors_opening} and {@link doors_closing | runtime:defines.rocket_silo_status.doors_closing} states.
     */
    doors_sound?: Sound,
    
    /**
     * Applied when switching into the {@link doors_opening | runtime:defines.rocket_silo_status.doors_opening} and {@link doors_closing | runtime:defines.rocket_silo_status.doors_closing} states.
     */
    doors_trigger?: TriggerEffect,
    
    /**
     * Played when switching into the {@link engine_starting | runtime:defines.rocket_silo_status.engine_starting} state.
     */
    flying_sound?: Sound,
    hole_clipping_box: BoundingBox,
    hole_light_sprite: Sprite,
    hole_sprite: Sprite,
    
    /**
     * May be 0.

Additional energy used during the night, that is when {@link LuaSurface::darkness | runtime:LuaSurface::darkness} is larger than 0.3.
     */
    lamp_energy_usage: Energy,
    
    /**
     * The time to wait in the {@link launch_started | runtime:defines.rocket_silo_status.launch_started} state before switching to {@link engine_starting | runtime:defines.rocket_silo_status.engine_starting}.
     */
    launch_wait_time?: number,
    
    /**
     * The inverse of the duration in ticks of {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} and {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close}.
     */
    light_blinking_speed: number,
    
    /**
     * Played when switching into the {@link rocket_rising | runtime:defines.rocket_silo_status.rocket_rising} state.
     */
    raise_rocket_sound?: Sound,
    
    /**
     * Applied when switching into the {@link rocket_rising | runtime:defines.rocket_silo_status.rocket_rising} state.
     */
    raise_rocket_trigger?: TriggerEffect,
    
    /**
     * Drawn from the start of the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state until the end of the {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close} state.
     */
    red_lights_back_sprites: Sprite,
    
    /**
     * Drawn from the start of the {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} state until the end of the {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close} state.
     */
    red_lights_front_sprites: Sprite,
    
    /**
     * Name of a {@link RocketSiloRocketPrototype | prototype:RocketSiloRocketPrototype}.
     */
    rocket_entity: EntityID,
    rocket_glow_overlay_sprite: Sprite,
    
    /**
     * The number of crafts that must complete to produce a rocket. This includes bonus crafts from productivity. Recipe products are ignored.
     */
    rocket_parts_required: number,
    rocket_result_inventory_size?: ItemStackIndex,
    
    /**
     * The time to wait in the {@link doors_opened | runtime:defines.rocket_silo_status.doors_opened} state before switching to {@link rocket_rising | runtime:defines.rocket_silo_status.rocket_rising}.
     */
    rocket_rising_delay?: number,
    rocket_shadow_overlay_sprite: Sprite,
    satellite_animation?: Animation,
    satellite_shadow_animation?: Animation,
    shadow_sprite: Sprite,
    silo_fade_out_end_distance: number,
    silo_fade_out_start_distance: number,
    
    /**
     * How many times the `red_lights_back_sprites` and `red_lights_front_sprites` should blink during {@link lights_blinking_open | runtime:defines.rocket_silo_status.lights_blinking_open} and {@link lights_blinking_close | runtime:defines.rocket_silo_status.lights_blinking_close}.

Does not affect the duration of the launch sequence.
     */
    times_to_blink: number
}

/**
 * The rocket inside the rocket silo.
 */
interface RocketSiloRocketPrototype extends EntityPrototype{
    dying_explosion?: EntityID,
    effects_fade_in_end_distance: number,
    effects_fade_in_start_distance: number,
    engine_starting_speed: number,
    flying_acceleration: number,
    flying_speed: number,
    flying_trigger?: TriggerEffect,
    full_render_layer_switch_distance: number,
    glow_light?: LightDefinition,
    inventory_size: ItemStackIndex,
    rising_speed: number,
    rocket_above_wires_slice_offset_from_center?: number,
    rocket_air_object_slice_offset_from_center?: number,
    rocket_flame_animation: Animation,
    rocket_flame_left_animation: Animation,
    rocket_flame_left_rotation: number,
    rocket_flame_right_animation: Animation,
    rocket_flame_right_rotation: number,
    rocket_glare_overlay_sprite: Sprite,
    rocket_initial_offset?: Vector,
    rocket_launch_offset: Vector,
    rocket_render_layer_switch_distance: number,
    rocket_rise_offset: Vector,
    rocket_shadow_sprite: Sprite,
    rocket_smoke_bottom1_animation: Animation,
    rocket_smoke_bottom2_animation: Animation,
    rocket_smoke_top1_animation: Animation,
    rocket_smoke_top2_animation: Animation,
    rocket_smoke_top3_animation: Animation,
    rocket_sprite: Sprite,
    rocket_visible_distance_from_center: number,
    shadow_fade_out_end_ratio: number,
    shadow_fade_out_start_ratio: number,
    shadow_slave_entity?: EntityID
}

/**
 * The shadow of the rocket inside the rocket silo.
 * @example
 * ```
 * {
 *   type = "rocket-silo-rocket-shadow",
 *   name = "rocket-silo-rocket-shadow",
 *   flags = {"not-on-map"},
 *   collision_mask = {"not-colliding-with-itself"},
 *   collision_box = {{0, 0}, {10, 3.5}},
 *   selection_box = {{0, 0}, {0, 0}}
 * }
 * ```
 *
 */
interface RocketSiloRocketShadowPrototype extends EntityPrototype{
    
}

/**
 * The abstract base of all rolling stock.
 */
interface RollingStockPrototype extends VehiclePrototype{
    air_resistance: number,
    allow_manual_color?: boolean,
    allow_robot_dispatch_in_automatic_mode?: boolean,
    back_light?: LightDefinition,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    color?: Color,
    
    /**
     * The distance between the joint of this rolling stock and its connected rolling stocks joint.
     */
    connection_distance: number,
    
    /**
     * Usually a sound to play when the rolling stock drives over a tie. The rolling stock is considered to be driving over a tie every `tie_distance` tiles.
     */
    drive_over_tie_trigger?: TriggerEffect,
    horizontal_doors?: Animation,
    
    /**
     * The length between this rolling stocks front and rear joints. Joints are the point where connection_distance is measured from when rolling stock are connected to one another. Wheels sprite are placed based on the joint position.

Maximum joint distance is 15.

Note: There needs to be border at least 0.2 between the {@link bounding box | prototype:EntityPrototype::collision_box} edge and joint. This means that the collision_box must be at least `{{-0,-0.2},{0,0.2}}`.
     */
    joint_distance: number,
    
    /**
     * Maximum speed of the rolling stock in tiles/tick.

In-game, the max speed of a train is `min(all_rolling_stock_max_speeds) × average(all_fuel_modifiers_in_all_locomotives)`. This calculated train speed is then silently capped to 7386.3km/h.
     */
    max_speed: number,
    pictures: RotatedSprite,
    stand_by_light?: LightDefinition,
    
    /**
     * In tiles. Used to determine how often `drive_over_tie_trigger` is triggered.
     */
    tie_distance?: number,
    vertical_doors?: Animation,
    vertical_selection_shift: number,
    wheels?: RotatedSprite
}

/**
 * Used in the base game as a base for the blueprint item and the deconstruction item.
 */
interface SelectionToolPrototype extends ItemWithLabelPrototype{
    alt_entity_filter_mode?: 'whitelist' | 'blacklist',
    alt_entity_filters?: EntityID[],
    alt_entity_type_filters?: string[],
    alt_reverse_entity_filter_mode?: 'whitelist' | 'blacklist',
    alt_reverse_entity_filters?: EntityID[],
    alt_reverse_entity_type_filters?: string[],
    alt_reverse_selection_color?: Color,
    alt_reverse_selection_count_button_color?: Color,
    
    /**
     * The type of cursor box used to render selection of entities/tiles when alt-reverse-selecting (using SHIFT + Right mouse button
     */
    alt_reverse_selection_cursor_box_type?: CursorBoxType,
    
    /**
     * A list of selection mode flags that define how the selection tool alt-reverse-selects things in-game (using SHIFT + Right mouse button).
     */
    alt_reverse_selection_mode?: SelectionModeFlags,
    alt_reverse_tile_filter_mode?: 'whitelist' | 'blacklist',
    alt_reverse_tile_filters?: TileID[],
    
    /**
     * The color of the rectangle used when alt-selection is done in-game.
     */
    alt_selection_color: Color,
    alt_selection_count_button_color?: Color,
    
    /**
     * The type of cursor box used to render selection of entities/tiles when alt selecting.
     */
    alt_selection_cursor_box_type: CursorBoxType,
    
    /**
     * A list of selection mode flags that define how the selection tool alt-selects things in-game.
     */
    alt_selection_mode?: SelectionModeFlags,
    alt_tile_filter_mode?: 'whitelist' | 'blacklist',
    alt_tile_filters?: TileID[],
    
    /**
     * If tiles should be included in the selection regardless of entities also being in the selection. This is a visual only setting.
     */
    always_include_tiles?: boolean,
    chart_alt_reverse_selection_color?: Color,
    chart_alt_selection_color?: Color,
    chart_reverse_selection_color?: Color,
    chart_selection_color?: Color,
    entity_filter_mode?: 'whitelist' | 'blacklist',
    entity_filters?: EntityID[],
    entity_type_filters?: string[],
    mouse_cursor?: MouseCursorID,
    reverse_entity_filter_mode?: 'whitelist' | 'blacklist',
    reverse_entity_filters?: EntityID[],
    reverse_entity_type_filters?: string[],
    reverse_selection_color?: Color,
    reverse_selection_count_button_color?: Color,
    
    /**
     * The type of cursor box used to render selection of entities/tiles when reverse-selecting.
     */
    reverse_selection_cursor_box_type?: CursorBoxType,
    
    /**
     * A list of selection mode flags that define how the selection tool reverse-selects things in-game.
     */
    reverse_selection_mode?: SelectionModeFlags,
    reverse_tile_filter_mode?: 'whitelist' | 'blacklist',
    reverse_tile_filters?: TileID[],
    
    /**
     * The color of the rectangle used when standard selection is done in-game.
     */
    selection_color: Color,
    selection_count_button_color?: Color,
    
    /**
     * The type of cursor box used to render selection of entities/tiles when standard selecting.
     */
    selection_cursor_box_type: CursorBoxType,
    
    /**
     * A list of selection mode flags that define how the selection tool selects things in-game.
     */
    selection_mode?: SelectionModeFlags,
    tile_filter_mode?: 'whitelist' | 'blacklist',
    tile_filters?: TileID[]
}

/**
 * Definition for a shortcut button in the {@link shortcut bar | https://wiki.factorio.com/Shortcut_bar}.
 * 
 * This is **not** a custom keybinding (keyboard shortcut), for that see {@link CustomInputPrototype | prototype:CustomInputPrototype}.
 * @example
 * ```
 * {
 *   type = "shortcut",
 *   name = "give-deconstruction-planner",
 *   order = "b[blueprints]-g[deconstruction-planner]",
 *   action = "spawn-item",
 *   localised_name = {"shortcut.make-deconstruction-planner"},
 *   associated_control_input = "give-deconstruction-planner",
 *   technology_to_unlock = "construction-robotics",
 *   item_to_spawn = "deconstruction-planner",
 *   style = "red",
 *   icon =
 *   {
 *     filename = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x32-white.png",
 *     priority = "extra-high-no-scale",
 *     size = 32,
 *     mipmap_count = 2,
 *     flags = {"gui-icon"}
 *   },
 *   small_icon =
 *   {
 *     filename = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x24-white.png",
 *     priority = "extra-high-no-scale",
 *     size = 24,
 *     mipmap_count = 2,
 *     flags = {"gui-icon"}
 *   },
 *   disabled_small_icon =
 *   {
 *     filename = "__base__/graphics/icons/shortcut-toolbar/mip/new-deconstruction-planner-x24-white.png",
 *     priority = "extra-high-no-scale",
 *     size = 24,
 *     mipmap_count = 2,
 *     flags = {"gui-icon"}
 *   }
 * }
 * ```
 *
 */
interface ShortcutPrototype extends PrototypeBase{
    
    /**
     * If this is `"lua"`, {@link on_lua_shortcut | runtime:on_lua_shortcut} is raised when the shortcut is clicked.
     */
    action: 'toggle-alt-mode' | 'undo' | 'copy' | 'cut' | 'paste' | 'import-string' | 'toggle-personal-roboport' | 'toggle-equipment-movement-bonus' | 'spawn-item' | 'lua',
    
    /**
     * Name of a custom input or vanilla control. This is **only** used to show the keybind in the tooltip of the shortcut.
     */
    associated_control_input?: string,
    
    /**
     * The icon used when the shortcut is shown in the quickbar, and is not usable.

Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
     */
    disabled_icon?: Sprite,
    
    /**
     * The icon used in the panel for visible shortcuts, when the shortcut is not usable.

Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
     */
    disabled_small_icon?: Sprite,
    
    /**
     * Scales to fit a 16x16-pixel square.

Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
     */
    icon: Sprite,
    
    /**
     * The item to create when clicking on a shortcut with the action set to `"spawn-item"`. The item must have the {@link spawnable | prototype:ItemPrototypeFlags::spawnable} flag set.
     */
    item_to_spawn?: ItemID,
    
    /**
     * Used to order the shortcuts in the {@link quick panel | https://wiki.factorio.com/Quick_panel}, which replaces the shortcut bar when using a controller (game pad). It {@link is recommended | https://forums.factorio.com/106661} to order modded shortcuts after the vanilla shortcuts.
     */
    order?: Order,
    
    /**
     * The icon used in the panel for visible shortcuts, when the shortcut is usable.

Note: The scale that can be defined in the sprite may not behave as expected because the game always scales the sprite to fill the GUI slot.
     */
    small_icon?: Sprite,
    style?: 'default' | 'blue' | 'red' | 'green',
    
    /**
     * The technology that must be researched before this shortcut can be used. Once a shortcut is unlocked in one save file, it is unlocked for all future save files.
     */
    technology_to_unlock?: TechnologyID,
    
    /**
     * Must be enabled for the Factorio API to be able to set the toggled state on the shortcut button, see {@link LuaPlayer::set_shortcut_toggled | runtime:LuaPlayer::set_shortcut_toggled}.
     */
    toggleable?: boolean
}

/**
 * An extremely basic entity with no special functionality. Used for minable rocks. Cannot be rotated.
 */
interface SimpleEntityPrototype extends EntityWithHealthPrototype{
    animations?: AnimationVariations,
    
    /**
     * Whether this entity should be treated as a rock for the purpose of deconstruction and for {@link CarPrototype::immune_to_rock_impacts | prototype:CarPrototype::immune_to_rock_impacts}.
     */
    count_as_rock_for_filtered_deconstruction?: boolean,
    
    /**
     * Takes priority over `animations`. Only the `north` sprite is used because this entity cannot be rotated.
     */
    picture?: Sprite4Way,
    
    /**
     * Takes priority over `picture` and `animations`.
     */
    pictures?: SpriteVariations,
    random_animation_offset?: boolean,
    
    /**
     * Whether a random graphics variation is chosen when placing the entity/creating it via script/creating it via map generation. If this is `false`, the entity will use the first variation instead of a random one.
     */
    random_variation_on_create?: boolean,
    render_layer?: RenderLayer,
    
    /**
     * Used to determine render order for entities with the same `render_layer` in the same position. Entities with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: number
}

/**
 * By default, this entity will be a priority target for units/turrets, who will choose to attack it even if it does not block their path. Setting {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target} to `false` will turn this off, which then makes this type equivalent to {@link SimpleEntityWithOwnerPrototype | prototype:SimpleEntityWithOwnerPrototype}.
 */
interface SimpleEntityWithForcePrototype extends SimpleEntityWithOwnerPrototype{
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean
}

/**
 * Has a force, but unlike {@link SimpleEntityWithForcePrototype | prototype:SimpleEntityWithForcePrototype} it is only attacked if the biters get stuck on it (or if {@link EntityWithOwnerPrototype::is_military_target | prototype:EntityWithOwnerPrototype::is_military_target} set to true to make the two entity types equivalent).
 * 
 * Can be rotated in 4 directions. `picture` can be used to specify different graphics per direction.
 */
interface SimpleEntityWithOwnerPrototype extends EntityWithOwnerPrototype{
    animations?: AnimationVariations,
    
    /**
     * If the entity is not visible to a player, the player cannot select it.
     */
    force_visibility?: ForceCondition,
    
    /**
     * Takes priority over `animations`.
     */
    picture?: Sprite4Way,
    
    /**
     * Takes priority over `picture` and `animations`.
     */
    pictures?: SpriteVariations,
    random_animation_offset?: boolean,
    
    /**
     * Whether a random graphics variation is chosen when placing the entity/creating it via script/creating it via map generation. If this is false, the entity will use the first variation instead of a random one.
     */
    random_variation_on_create?: boolean,
    render_layer?: RenderLayer,
    
    /**
     * Used to determine render order for entities with the same `render_layer` in the same position. Entities with a higher `secondary_draw_order` are drawn on top.
     */
    secondary_draw_order?: number
}

/**
 * Deprecated in 0.16. The type "simple-smoke" has been obsoleted and cannot be created. Use {@link TrivialSmokePrototype | prototype:TrivialSmokePrototype} or {@link SmokeWithTriggerPrototype | prototype:SmokeWithTriggerPrototype} instead.
 */
interface SimpleSmokePrototype extends SmokePrototype{
    
}

/**
 * Abstract entity that has an animation.
 */
interface SmokePrototype extends EntityPrototype{
    
    /**
     * Smoke always moves randomly unless `movement_slow_down_factor` is 0. If `affected_by_wind` is true, the smoke will also be moved by wind.
     */
    affected_by_wind?: boolean,
    animation: Animation,
    
    /**
     * Must have a collision box size of zero.
     */
    collision_box?: BoundingBox,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    color?: Color,
    cyclic?: boolean,
    
    /**
     * May not be 0 if cyclic is true.
     */
    duration?: number,
    end_scale?: number,
    
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_away_duration?: number,
    
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_in_duration?: number,
    glow_animation?: Animation,
    glow_fade_away_duration?: number,
    
    /**
     * Value between 0 and 1, with 0 being no movement.
     */
    movement_slow_down_factor?: number,
    render_layer?: RenderLayer,
    show_when_smoke_off?: boolean,
    spread_duration?: number,
    start_scale?: number
}

/**
 * An entity with animation and a trigger.
 */
interface SmokeWithTriggerPrototype extends SmokePrototype{
    action?: Trigger,
    
    /**
     * 0 means never apply.
     */
    action_cooldown?: number,
    particle_count?: number,
    particle_distance_scale_factor?: number,
    particle_duration_variation?: number,
    particle_scale_factor?: Vector,
    particle_spread?: Vector,
    spread_duration_variation?: number,
    wave_distance?: Vector,
    wave_speed?: Vector
}

/**
 * A {@link portable solar panel | https://wiki.factorio.com/Portable_solar_panel}.
 */
interface SolarPanelEquipmentPrototype extends EquipmentPrototype{
    
    /**
     * How much power should be provided.
     */
    power: Energy
}

/**
 * A {@link solar panel | https://wiki.factorio.com/Solar_panel}.
 */
interface SolarPanelPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Sets how this solar panel connects to the energy network. The most relevant property seems to be the output_priority.
     */
    energy_source: ElectricEnergySource,
    
    /**
     * Overlay has to be empty or have same number of variations as `picture`.
     */
    overlay?: SpriteVariations,
    
    /**
     * The picture displayed for this solar panel.
     */
    picture: SpriteVariations,
    
    /**
     * The maximum amount of power this solar panel can produce.
     */
    production: Energy
}

/**
 * Specifies a sound that can be used with {@link SoundPath | runtime:SoundPath} at runtime.
 */
interface SoundPrototype {
    aggregation?: AggregationSpecification,
    allow_random_repeat?: boolean,
    
    /**
     * Modifies how far a sound can be heard. Must be between `0` and `1` inclusive.
     */
    audible_distance_modifier?: number,
    category?: SoundType,
    
    /**
     * Supported sound file formats are `.ogg (Vorbis)` and `.wav`.

Only loaded, and mandatory if `variations` is not defined.
     */
    filename?: FileName,
    game_controller_vibration_data?: GameControllerVibrationData,
    
    /**
     * Must be `>= min_speed`.

Only loaded if `variations` is not defined. Only loaded, and mandatory if `min_speed` is defined.
     */
    max_speed?: number,
    
    /**
     * Must be `>= 1 / 64`.

Only loaded if both `variations` and `speed` are not defined.
     */
    min_speed?: number,
    
    /**
     * Name of the sound. Can be used as a {@link SoundPath | runtime:SoundPath} at runtime.
     */
    name: string,
    
    /**
     * Only loaded if `variations` is not defined.
     */
    preload?: boolean,
    
    /**
     * Speed must be `>= 1 / 64`. This sets both min and max speeds.

Only loaded if `variations` is not defined.
     */
    speed?: number,
    type: 'sound',
    variations?: SoundDefinition[],
    
    /**
     * Only loaded if `variations` is not defined.
     */
    volume?: number
}

/**
 * Properties of the spectator controller.
 */
interface SpectatorControllerPrototype {
    
    /**
     * Must be >= 0.34375.
     */
    movement_speed: number,
    
    /**
     * Name of the spectator controller. Base game uses "default".
     */
    name: string,
    type: 'spectator-controller'
}

/**
 * A speech bubble. It floats in the world and can display text.
 */
interface SpeechBubblePrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    fade_in_out_ticks?: number,
    
    /**
     * Needs a style of the type "speech_bubble_style", defined inside the gui styles.
     */
    style: string,
    
    /**
     * Needs a style of the type "flow_style", defined inside the gui styles.
     */
    wrapper_flow_style?: string,
    y_offset?: number
}

/**
 * Used by {@link SpiderLegSpecification | prototype:SpiderLegSpecification} for {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}, also known as {@link spidertron | https://wiki.factorio.com/Spidertron}.
 */
interface SpiderLegPrototype extends EntityWithHealthPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    graphics_set: SpiderLegGraphicsSet,
    initial_movement_speed: number,
    minimal_step_size: number,
    movement_acceleration: number,
    movement_based_position_selection_distance: number,
    
    /**
     * Must be larger than 0.
     */
    part_length: number,
    target_position_randomisation_distance: number,
    walking_sound_volume_modifier?: number
}

/**
 * A {@link spidertron | https://wiki.factorio.com/Spidertron}.
 */
interface SpiderVehiclePrototype extends VehiclePrototype{
    automatic_weapon_cycling: boolean,
    
    /**
     * This is applied whenever the spider shoots (manual and automatic targeting), `automatic_weapon_cycling` is true and the next gun in line (which is then selected) has ammo. When all of the above is the case, the chain_shooting_cooldown_modifier is a multiplier on the remaining shooting cooldown: `cooldown = (remaining_cooldown × chain_shooting_cooldown_modifier)`.

chain_shooting_cooldown_modifier is intended to be in the range of 0 to 1. This means that setting chain_shooting_cooldown_modifier to 0 reduces the remaining shooting cooldown to 0 while a chain_shooting_cooldown_modifier of 1 does not affect the remaining shooting cooldown at all.
     */
    chain_shooting_cooldown_modifier: number,
    chunk_exploration_radius: number,
    
    /**
     * Must be a burner energy source when using "burner", otherwise it can also be a void energy source.
     */
    energy_source: BurnerEnergySource | VoidEnergySource,
    graphics_set: SpiderVehicleGraphicsSet,
    
    /**
     * The guns this spider vehicle uses.
     */
    guns?: ItemID[],
    
    /**
     * The height of the spider affects the shooting height and the drawing of the graphics and lights.
     */
    height: number,
    inventory_size: ItemStackIndex,
    movement_energy_consumption: Energy,
    spider_engine: SpiderEnginePrototype,
    
    /**
     * Cannot be negative.
     */
    torso_bob_speed?: number,
    
    /**
     * The orientation of the torso of the spider affects the shooting direction and the drawing of the graphics and lights.
     */
    torso_rotation_speed?: number,
    
    /**
     * If set to 0 then the spider will not have a Logistics tab.
     */
    trash_inventory_size?: ItemStackIndex
}

/**
 * The {@link spidertron remote | https://wiki.factorio.com/Spidertron_remote}. This remote can only be connected to entities of type {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface SpidertronRemotePrototype extends ItemPrototype{
    
    /**
     * Path to the icon file.

Mandatory if `icon_color_indicator_masks` is not defined.

Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype | prototype:ItemPrototype} parent.
     */
    icon_color_indicator_mask?: FileName,
    
    /**
     * Inside IconData, the property for the file path is `icon_color_indicator_mask` instead of `icon`. Can't be an empty array.

Uses `icon_size` and `icon_mipmaps` from its {@link ItemPrototype | prototype:ItemPrototype} parent.
     */
    icon_color_indicator_masks?: IconData[],
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: 1
}

/**
 * A {@link splitter | https://wiki.factorio.com/Splitter}.
 */
interface SplitterPrototype extends TransportBeltConnectablePrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    structure: Animation4Way,
    structure_animation_movement_cooldown?: number,
    structure_animation_speed_coefficient?: number,
    
    /**
     * Drawn 1 tile north of `structure` when the splitter is facing east or west.
     */
    structure_patch?: Animation4Way
}

/**
 * Specifies an image that can be used with {@link SpritePath | runtime:SpritePath} at runtime.
 * @example
 * ```
 * {
 *   type = "sprite"
 *   name = "accumulator-sprite",
 *   filename = "__base__/graphics/entity/basic-accumulator/basic-accumulator.png",
 *   priority = "extra-high",
 *   width = 124,
 *   height = 103,
 *   shift = {0.7, -0.2}
 * }
 * ```
 *
 */
interface SpritePrototype {
    
    /**
     * Only loaded if `layers` is not defined.
     */
    apply_runtime_tint?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    blend_mode?: BlendMode,
    
    /**
     * Only loaded if `layers` is not defined.

Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_light`.

Draws first as a normal sprite, then again as a light layer. See {@link https://forums.factorio.com/91682 | https://forums.factorio.com/91682}.
     */
    draw_as_glow?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.

Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true.
     */
    draw_as_light?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.

Only one of `draw_as_shadow`, `draw_as_glow` and `draw_as_light` can be true. This takes precedence over `draw_as_glow` and `draw_as_light`.
     */
    draw_as_shadow?: boolean,
    
    /**
     * Only loaded, and mandatory if `layers` is not defined.

The path to the sprite file to use.
     */
    filename?: FileName,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    flags?: SpriteFlags,
    
    /**
     * Only loaded if `layers` is not defined.

Unused.
     */
    generate_sdf?: boolean,
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.

Height of the picture in pixels, from 0-8192.
     */
    height?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

If this property exists and high resolution sprites are turned on, this is used to load the Sprite.
     */
    hr_version?: Sprite,
    
    /**
     * If this property is present, all Sprite definitions have to be placed as entries in the array, and they will all be loaded from there. `layers` may not be an empty table. Each definition in the array may also have the `layers` property.

If this property is present, all other properties besides `name` and `type` are ignored.
     */
    layers?: Sprite[],
    
    /**
     * Only loaded if `layers` is not defined.

Minimal mode is entered when mod loading fails. You are in it when you see the gray box after (part of) the loading screen that tells you a mod error ({@link Example | https://cdn.discordapp.com/attachments/340530709712076801/532315796626472972/unknown.png}). Modders can ignore this property.
     */
    load_in_minimal_mode?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.

Only loaded if this is an icon, that is it has the flag `"group=icon"` or `"group=gui"`.
     */
    mipmap_count?: number,
    
    /**
     * Name of the sprite. Can be used as a {@link SpritePath | runtime:SpritePath} at runtime.
     */
    name: string,
    
    /**
     * Only loaded if `layers` is not defined.

Loaded only when `x` and `y` are both `0`. The first member of the tuple is `x` and the second is `y`.
     */
    position?: 
[    SpriteSizeType,
    SpriteSizeType
],
    
    /**
     * Only loaded if `layers` is not defined.

Whether alpha should be pre-multiplied.
     */
    premul_alpha?: boolean,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    priority?: SpritePriority,
    
    /**
     * Only loaded if `layers` is not defined.

Values other than `1` specify the scale of the sprite on default zoom. A scale of `2` means that the picture will be two times bigger on screen (and thus more pixelated).
     */
    scale?: number,
    
    /**
     * Only loaded if `layers` is not defined.

The shift in tiles. `util.by_pixel()` can be used to divide the shift by 32 which is the usual pixel height/width of 1 tile in normal resolution. Note that 32 pixel tile height/width is not enforced anywhere - any other tile height or width is also possible.
     */
    shift?: Vector,
    
    /**
     * Only loaded if `layers` is not defined.

The width and height of the sprite. If this is a tuple, the first member of the tuple is the width and the second is the height. Otherwise the size is both width and height. Width and height may only be in the range of 0-8192.
     */
    size?: SpriteSizeType | 
[    SpriteSizeType,
    SpriteSizeType
],
    
    /**
     * Only loaded if `layers` is not defined.

Number of slices this is sliced into when using the "optimized atlas packing" option. If you are a modder, you can just ignore this property. As an example, if this is `4`, the sprite will be sliced into a `4x4` grid.
     */
    slice?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Same as `slice`, but this specifies only how many slices there are on the x-axis.
     */
    slice_x?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Same as `slice`, but this specifies only how many slices there are on the y-axis.
     */
    slice_y?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.
     */
    tint?: Color,
    type: 'sprite',
    
    /**
     * Only loaded if `layers` is not defined. Mandatory if `size` is not defined.

Width of the picture in pixels, from 0-8192.
     */
    width?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Horizontal position of the sprite in the source file in pixels.
     */
    x?: SpriteSizeType,
    
    /**
     * Only loaded if `layers` is not defined.

Vertical position of the sprite in the source file in pixels.
     */
    y?: SpriteSizeType
}

/**
 * Entity that sticks to another entity, and damages/slows it. Stickers can only be attached to {@link UnitPrototype | prototype:UnitPrototype}, {@link CharacterPrototype | prototype:CharacterPrototype}, {@link CarPrototype | prototype:CarPrototype} and {@link SpiderVehiclePrototype | prototype:SpiderVehiclePrototype}.
 */
interface StickerPrototype extends EntityPrototype{
    animation?: Animation,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * Interval between application of `damage_per_tick`, in ticks.
     */
    damage_interval?: number,
    
    /**
     * Applied every `damage_interval` ticks, so may not necessarily be "per tick".
     */
    damage_per_tick?: DamagePrototype,
    
    /**
     * Must be > 0.
     */
    duration_in_ticks: number,
    fire_spread_cooldown?: number,
    fire_spread_radius?: number,
    force_visibility?: ForceCondition,
    
    /**
     * Using this property marks the sticker as a "selection sticker", meaning that the selection box will be rendered around the entity when the sticker is on it.
     */
    selection_box_type?: CursorBoxType,
    single_particle?: boolean,
    
    /**
     * If this is given, this sticker is considered a "fire sticker" for some functions, such as {@link BaseAttackParameters::fire_penalty | prototype:BaseAttackParameters::fire_penalty} and {@link EntityPrototypeFlags::not-flammable | prototype:EntityPrototypeFlags::not_flammable}.
     */
    spread_fire_entity?: EntityID,
    stickers_per_square_meter?: number,
    
    /**
     * Less than 1 to reduce movement speed, more than 1 to increase it.
     */
    target_movement_modifier?: number,
    
    /**
     * The modifier value when the sticker is attached. It linearly changes over time to reach `target_movement_modifier_to`.
     */
    target_movement_modifier_from?: number,
    
    /**
     * The modifier value when the sticker expires. It linearly changes over time starting from `target_movement_modifier_from`.
     */
    target_movement_modifier_to?: number,
    vehicle_friction_modifier?: number,
    
    /**
     * Works similarly to `target_movement_modifier_from`.
     */
    vehicle_friction_modifier_from?: number,
    
    /**
     * Works similarly to `target_movement_modifier_to`.
     */
    vehicle_friction_modifier_to?: number,
    
    /**
     * Less than 1 to reduce vehicle speed, more than 1 to increase it.
     */
    vehicle_speed_modifier?: number,
    
    /**
     * Works similarly to `target_movement_modifier_from`.
     */
    vehicle_speed_modifier_from?: number,
    
    /**
     * Works similarly to `target_movement_modifier_to`.
     */
    vehicle_speed_modifier_to?: number
}

/**
 * A {@link storage tank | https://wiki.factorio.com/Storage_tank}.
 */
interface StorageTankPrototype extends EntityWithOwnerPrototype{
    
    /**
     * Mandatory if circuit_wire_max_distance  > 0.
     */
    circuit_connector_sprites?: 
[    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites
],
    
    /**
     * Mandatory if circuit_wire_max_distance  > 0.
     */
    circuit_wire_connection_points?: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    circuit_wire_max_distance?: number,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * Must be positive.

Used for determining the x position inside the `flow_sprite` when drawing the storage tank. Does not affect gameplay.

The x position of the sprite will be `((game.tick % flow_length_in_ticks) ÷ flow_length_in_ticks) × (flow_sprite.width - 32)`. This means, that over `flow_length_in_ticks` ticks, the part of the `flow_sprite` that is drawn in-game is incrementally moved from most-left to most-right inside the actual sprite, that part always has a width of 32px. After `flow_length_in_ticks`, the part of the `flow_sprite` that is drawn will start from the left again.
     */
    flow_length_in_ticks: number,
    fluid_box: FluidBox,
    pictures: StorageTankPictures,
    
    /**
     * If the icons of fluids shown in alt-mode should be scaled to the storage tank's size.
     */
    scale_info_icons?: boolean,
    two_direction_only?: boolean,
    
    /**
     * The location of the window showing the contents. Note that for `window_background` the width and height are determined by the sprite and window_bounding_box only determines the drawing location. For `fluid_background` the width is determined by the sprite and the height and drawing location are determined by window_bounding_box.
     */
    window_bounding_box: BoundingBox
}

/**
 * A straight rail.
 */
interface StraightRailPrototype extends RailPrototype{
    bending_type?: 'straight'
}

/**
 * A {@link technology | https://wiki.factorio.com/Technologies}.
 * 
 * This prototype has two different formats that can be specified. If both `normal` and `expensive` are not defined, the standard properties define this technology. Otherwise, they are ignored, and the `normal` and `expensive` properties are used exclusively to define this technology.
 * @example
 * ```
 * {
 *   type = "technology",
 *   name = "steel-processing",
 *   icon_size = 256,
 *   icon_mipmaps = 4,
 *   icon = "__base__/graphics/technology/steel-processing.png",
 *   effects =
 *   {
 *     {
 *       type = "unlock-recipe",
 *       recipe = "steel-plate"
 *     },
 *     {
 *       type = "unlock-recipe",
 *       recipe = "steel-chest"
 *     }
 *   },
 *   unit =
 *   {
 *     count = 50,
 *     ingredients = {{"automation-science-pack", 1}},
 *     time = 5
 *   },
 *   order = "c-a"
 * }
 * ```
 *
 */
interface TechnologyPrototype extends PrototypeBase{
    
    /**
     * List of effects of the technology (applied when the technology is researched).

Only loaded if neither `normal` nor `expensive` are defined.
     */
    effects?: Modifier[],
    
    /**
     * Only loaded if neither `normal` nor `expensive` are defined.
     */
    enabled?: boolean,
    
    /**
     * Can be set to `false` if the `normal` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later manually enabled by script, it will use the data from `normal`.

If this property is not defined while `normal` is, it will mirror its data.
     */
    expensive?: TechnologyData | false,
    
    /**
     * Hides the technology from the tech screen.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    hidden?: boolean,
    
    /**
     * Path to the icon file.

Mandatory if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Can't be an empty array.
     */
    icons?: IconData[],
    
    /**
     * Controls whether the technology cost ignores the tech cost multiplier set in the {@link DifficultySettings | runtime:DifficultySettings}, e.g. `4` for the default expensive difficulty.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    ignore_tech_cost_multiplier?: boolean,
    
    /**
     * `"infinite"` for infinite technologies, otherwise `uint32`.

Defaults to the same level as the technology, which is `0` for non-upgrades, and the level of the upgrade for upgrades.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    max_level?: number | 'infinite',
    
    /**
     * If this name ends with `-<number>`, that number is ignored for localization purposes. E.g. if the name is `technology-3`, the game looks for the `technology-name.technology` localization. The technology tree will also show the number on the technology icon.
     */
    name: string,
    
    /**
     * Can be set to `false` if the `expensive` property is defined. This will disable this difficulty, same as setting `enabled` to `false` would. If it's later manually enabled by script, it will use the data from `expensive`.

If this property is not defined while `expensive` is, it will mirror its data.
     */
    normal?: TechnologyData | false,
    
    /**
     * List of technologies needed to be researched before this one can be researched.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    prerequisites?: TechnologyID[],
    
    /**
     * Determines the cost in items and time of the technology.

Mandatory if neither `normal` nor `expensive` are defined.
     */
    unit?: TechnologyUnit,
    
    /**
     * When set to true, and the technology contains several levels, only the relevant one is displayed in the technology screen.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    upgrade?: boolean,
    
    /**
     * Controls whether the technology is shown in the tech GUI when it is not `enabled`.

Only loaded if neither `normal` nor `expensive` are defined.
     */
    visible_when_disabled?: boolean
}

/**
 * Used to define the parameters for the water shader.
 */
interface TileEffectDefinition {
    animation_scale: number | 
[    number,
    number
],
    animation_speed: number,
    dark_threshold: number | 
[    number,
    number
],
    far_zoom?: number,
    foam_color: Color,
    foam_color_multiplier: number,
    
    /**
     * Name of the tile-effect. Base game uses "water".
     */
    name: string,
    near_zoom?: number,
    reflection_threshold: number | 
[    number,
    number
],
    specular_lightness: Color,
    specular_threshold: number | 
[    number,
    number
],
    
    /**
     * Sprite size must be 512x512.
     */
    texture: Sprite,
    tick_scale: number,
    type: 'tile-effect'
}

/**
 * The entity used for tile ghosts.
 * @example
 * ```
 * {
 *   type = "tile-ghost",
 *   name = "tile-ghost",
 *   flags = {"not-on-map"},
 *   minable = { mining_time = 0, results={}},
 *   collision_box = {{-0.5, -0.5}, {0.5, 0.5}},
 *   selection_priority = 45
 * }
 * ```
 *
 */
interface TileGhostPrototype extends EntityPrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask
}

/**
 * A {@link tile | https://wiki.factorio.com/Tile}.
 */
interface TilePrototype extends PrototypeBase{
    
    /**
     * Array of tile names that are allowed next to this one.
     */
    allowed_neighbors?: TileID[],
    autoplace?: AutoplaceSpecification,
    
    /**
     * If this is loaded as one Sound, it is loaded as the "small" build sound.
     */
    build_sound?: Sound | TileBuildSound,
    can_be_part_of_blueprint?: boolean,
    
    /**
     * If set to true, the game will check for collisions with entities before building or mining the tile. If entities are in the way it is not possible to mine/build the tile.
     */
    check_collision_with_entities?: boolean,
    collision_mask: CollisionMask,
    decorative_removal_probability?: number,
    
    /**
     * Used only for the `layer_group` default, see above.
     */
    draw_in_water_layer?: boolean,
    
    /**
     * Name of a {@link TileEffectDefinition | prototype:TileEffectDefinition}.
     */
    effect?: string,
    effect_color?: Color,
    
    /**
     * Used by the {@link pollution | https://wiki.factorio.com/Pollution} shader.
     */
    effect_color_secondary?: Color,
    effect_is_opaque?: boolean,
    
    /**
     * Path to the icon file. If this and `icon` is not set, the `material_background` in `variants` is used as the icon.

Only loaded if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Only loaded if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * Can't be an empty array. If this and `icon` is not set, the `material_background` in `variants` is used as the icon.
     */
    icons?: IconData[],
    
    /**
     * Specifies transition drawing priority.
     */
    layer: number,
    layer_group?: TileRenderLayer,
    map_color: Color,
    
    /**
     * If you want the tile to not be mineable, don't specify the minable property. Only non-mineable tiles become hidden tiles when placing mineable tiles on top of them.
     */
    minable?: MinableProperties,
    mined_sound?: Sound,
    
    /**
     * Whether the tile needs tile correction logic applied when it's generated in the world, to prevent graphical artifacts. The tile correction logic disallows 1-wide stripes of the tile, see {@link Friday Facts #346 | https://factorio.com/blog/post/fff-346}.
     */
    needs_correction?: boolean,
    next_direction?: TileID,
    placeable_by?: ItemToPlace | ItemToPlace[],
    
    /**
     * Emissions absorbed per second by this tile. Use a negative value if pollution is created instead of removed.
     */
    pollution_absorption_per_second: number,
    scorch_mark_color?: Color,
    tint?: Color,
    transition_merges_with_tile?: TileID,
    transition_overlay_layer_offset?: number,
    
    /**
     * Extra transitions.
     */
    transitions?: TileTransitionsToTiles[],
    transitions_between_transitions?: TileTransitionsBetweenTransitions[],
    
    /**
     * Called by {@link InvokeTileEffectTriggerEffectItem | prototype:InvokeTileEffectTriggerEffectItem}.
     */
    trigger_effect?: TriggerEffect,
    
    /**
     * Graphics for this tile.
     */
    variants: TileTransitionsVariants,
    vehicle_friction_modifier?: number,
    walking_sound?: Sound,
    walking_speed_modifier?: number
}

/**
 * A tips and tricks entry.
 */
interface TipsAndTricksItem extends PrototypeBase{
    
    /**
     * Name of a {@link TipsAndTricksItemCategory | prototype:TipsAndTricksItemCategory}, used for the sorting of this tips and tricks entry. Tips and trick entries are sorted first by category and then by their `order` within that category.
     */
    category?: string,
    
    /**
     * An array of names of other tips and tricks items. This tips and tricks entry is only shown to the player once they have marked all dependencies as read.
     */
    dependencies?: string[],
    image?: FileName,
    
    /**
     * The tips and tricks entry is indented by `indent`×6 spaces.
     */
    indent?: number,
    
    /**
     * Whether the tip title on the left in the tips and tricks GUI should use the "title_tip_item" style (semi bold font).
     */
    is_title?: boolean,
    player_input_method_filter?: PlayerInputMethodFilter,
    simulation?: SimulationDefinition,
    
    /**
     * Condition for never showing the tip notification to the player.
     */
    skip_trigger?: TipTrigger,
    starting_status?: TipStatus,
    
    /**
     * String to add in front of the tips and trick entries name. Can be anything, the base game tends to use {@link rich text | https://wiki.factorio.com/Rich_text} tags for items, e.g. `[item=wooden-chest]` here.
     */
    tag?: string,
    
    /**
     * Condition for when the tip notification should be shown to the player.
     */
    trigger?: TipTrigger,
    
    /**
     * Name of a {@link TutorialDefinition | prototype:TutorialDefinition}.
     */
    tutorial?: string
}

/**
 * A {@link TipsAndTricksItem | prototype:TipsAndTricksItem} category, used for sorting of tips and tricks entries: Tips and trick entries are sorted first by category and then by their order within that category.
 */
interface TipsAndTricksItemCategory {
    name: string,
    
    /**
     * Tips and trick categories are sorted by `order`, and then the tips and tips entries are sorted by their own order within those categories.
     */
    order: Order,
    type: 'tips-and-tricks-item-category'
}

/**
 * Items with a "durability". Used for {@link science packs | https://wiki.factorio.com/Science_pack}.
 */
interface ToolPrototype extends ItemPrototype{
    
    /**
     * The durability of this tool. Must be positive. Mandatory if `infinite` is false. Ignored if <code>infinite</code> is true.
     */
    durability?: number,
    
    /**
     * May not be longer than 200 characters.
     */
    durability_description_key?: string,
    
    /**
     * May not be longer than 200 characters.

In-game, the game provides the locale with three {@link parameters | https://wiki.factorio.com/Tutorial:Localisation#Localising_with_parameters}:

`__1__`: remaining durability

`__2__`: total durability

`__3__`: durability as a percentage

So when a locale key that has the following translation

`Remaining durability is __1__ out of __2__ which is __3__ %`

is applied to a tool with 2 remaining durability out of 8 it will be displayed as

`Remaining durability is 2 out of 8 which is 25 %`
     */
    durability_description_value?: string,
    
    /**
     * Whether this tool has infinite durability. If this is false, `durability` must be specified.
     */
    infinite?: boolean
}

/**
 * This prototype is used for receiving an achievement when the player has a specified train path length.
 */
interface TrainPathAchievementPrototype extends AchievementPrototype{
    
    /**
     * The achievement will trigger if a train path is longer than this.
     */
    minimum_distance: number
}

/**
 * A {@link train stop | https://wiki.factorio.com/Train_stop}.
 */
interface TrainStopPrototype extends EntityWithOwnerPrototype{
    animation_ticks_per_frame: number,
    animations?: Animation4Way,
    
    /**
     * Has to be 2 for 2x2 grid.
     */
    build_grid_size?: 2,
    chart_name?: boolean,
    
    /**
     * Mandatory if circuit_wire_max_distance > 0.
     */
    circuit_connector_sprites?: 
[    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites,
    CircuitConnectorSprites
],
    
    /**
     * Mandatory if circuit_wire_max_distance > 0.
     */
    circuit_wire_connection_points?: 
[    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint,
    WireConnectionPoint
],
    circuit_wire_max_distance?: number,
    color?: Color,
    default_train_stopped_signal?: SignalIDConnector,
    default_trains_count_signal?: SignalIDConnector,
    default_trains_limit_signal?: SignalIDConnector,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    drawing_boxes?: TrainStopDrawingBoxes,
    light1?: TrainStopLight,
    light2?: TrainStopLight,
    rail_overlay_animations?: Animation4Way,
    top_animations?: Animation4Way
}

/**
 * Abstract class that anything that is a belt or can connect to belts uses.
 */
interface TransportBeltConnectablePrototype extends EntityWithOwnerPrototype{
    animation_speed_coefficient?: number,
    
    /**
     * This is the preferred way to specify transport belt animations.
     */
    belt_animation_set?: TransportBeltAnimationSet,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    belt_horizontal?: Animation,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    belt_vertical?: Animation,
    
    /**
     * Transport belt connectable entities must have {@link collision_box | prototype:EntityPrototype::collision_box} of an appropriate minimal size, they should occupy more than half of every tile the entity covers.
     */
    collision_box?: BoundingBox,
    
    /**
     * Transport belt connectable entities must collide with "transport-belt-layer". Transport belt connectable entities must have collision_mask that collides with itself. Transport belt connectable entities cannot have collision mask that collides only with tiles (must collide with entities in some way).
     */
    collision_mask?: CollisionMask,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    ending_bottom?: Animation,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    ending_patch?: Sprite4Way,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    ending_side?: Animation,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    ending_top?: Animation,
    ends_with_stopper?: boolean,
    
    /**
     * Transport belt connectable entities cannot have the "placeable-off-grid" flag specified.
     */
    flags?: EntityPrototypeFlags,
    
    /**
     * The speed of the belt: `speed × 480 = x Items/second`.

The raw value is expressed as the number of tiles traveled by each item on the belt per tick, relative to the belt's maximum density - e.g. `x items/second ÷ (4 items/lane × 2 lanes/belt × 60 ticks/second) = <speed> belts/tick` where a "belt" is the size of one tile. See {@link Transport_belts/Physics | https://wiki.factorio.com/Transport_belts/Physics} for more details.

Must be a positive non-infinite number. The number is a fixed point number with 8 bits reserved for decimal precision, meaning the smallest value step is `1/2^8 = 0.00390625`. In the simple case of a non-curved belt, the rate is multiples of `1.875` items/s, even though the entity tooltip may show a different rate.
     */
    speed: number,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    starting_bottom?: Animation,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    starting_side?: Animation,
    
    /**
     * Mandatory if `belt_animation_set` is not defined.
     */
    starting_top?: Animation
}

/**
 * A {@link transport belt | https://wiki.factorio.com/Transport_belt}.
 */
interface TransportBeltPrototype extends TransportBeltConnectablePrototype{
    
    /**
     * Mandatory if `belt_animation_set` is not defined.

Transport belts must have 12 animations.
     */
    animations?: RotatedAnimation,
    
    /**
     * This is the preferred way to specify transport belt animations.
     */
    belt_animation_set?: TransportBeltAnimationSetWithCorners,
    
    /**
     * The pictures displayed for circuit connections to this transport belt.
     */
    circuit_connector_sprites?: CircuitConnectorSprites[],
    
    /**
     * Defines how wires visually connect to this transport belt.
     */
    circuit_wire_connection_points?: WireConnectionPoint[],
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    connector_frame_sprites: TransportBeltConnectorFrame,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    
    /**
     * The name of the {@link UndergroundBeltPrototype | prototype:UndergroundBeltPrototype} which is used in quick-replace fashion when the smart belt dragging behavior is triggered.
     */
    related_underground_belt?: EntityID
}

/**
 * A {@link tree | https://wiki.factorio.com/Tree}.
 */
interface TreePrototype extends EntityWithHealthPrototype{
    
    /**
     * Mandatory if `variations` is defined.
     */
    colors?: Color[],
    darkness_of_burnt_tree?: number,
    
    /**
     * The amount of health automatically regenerated. Trees will regenerate every 60 ticks with `healing_per_tick × 60`.
     */
    healing_per_tick?: number,
    
    /**
     * Mandatory if `variations` is not defined.
     */
    pictures?: SpriteVariations,
    variation_weights?: number[],
    
    /**
     * Can't be empty.
     */
    variations?: TreeVariation[]
}

/**
 * The base game always internally defines a "common" trigger target type. See {@link Design discussion: Trigger target type | https://forums.factorio.com/71657}.
 */
interface TriggerTargetType {
    name: string,
    type: 'trigger-target-type'
}

/**
 * Smoke, but it's not an entity for optimization purposes.
 */
interface TrivialSmokePrototype extends PrototypeBase{
    
    /**
     * Smoke always moves randomly unless `movement_slow_down_factor` is 0. If `affected_by_wind` is true, the smoke will also be moved by wind.
     */
    affected_by_wind?: boolean,
    animation: Animation,
    color?: Color,
    cyclic?: boolean,
    
    /**
     * Can't be 0 - the smoke will never render.
     */
    duration: number,
    end_scale?: number,
    
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_away_duration?: number,
    
    /**
     * `fade_in_duration` + `fade_away_duration` must be <= `duration`.
     */
    fade_in_duration?: number,
    glow_animation?: Animation,
    glow_fade_away_duration?: number,
    
    /**
     * Value between 0 and 1, with 1 being no slowdown and 0 being no movement.
     */
    movement_slow_down_factor?: number,
    render_layer?: RenderLayer,
    show_when_smoke_off?: boolean,
    spread_duration?: number,
    start_scale?: number
}

/**
 * A turret that needs no extra ammunition. See the children for turrets that need some kind of ammunition.
 */
interface TurretPrototype extends EntityWithOwnerPrototype{
    alert_when_attacking?: boolean,
    allow_turning_when_starting_attack?: boolean,
    attack_from_start_frame?: boolean,
    
    /**
     * Requires ammo_type in attack_parameters unless this is a {@link AmmoTurretPrototype | prototype:AmmoTurretPrototype}.
     */
    attack_parameters: AttackParameters,
    attack_target_mask?: TriggerTargetMask,
    attacking_animation?: RotatedAnimation4Way,
    
    /**
     * Controls the speed of the attacking_animation: `1 ÷ attacking_speed = duration of the attacking_animation`
     */
    attacking_speed?: number,
    base_picture?: Animation4Way,
    base_picture_render_layer?: RenderLayer,
    base_picture_secondary_draw_order?: number,
    call_for_help_radius: number,
    
    /**
     * Specifies the name of the {@link CorpsePrototype | prototype:CorpsePrototype} to be used when this entity dies.
     */
    corpse?: EntityID,
    dying_sound?: Sound,
    ending_attack_animation?: RotatedAnimation4Way,
    
    /**
     * Controls the speed of the ending_attack_animation: `1 ÷ ending_attack_speed = duration of the ending_attack_animation`
     */
    ending_attack_speed?: number,
    energy_glow_animation?: RotatedAnimation4Way,
    
    /**
     * The range of the flickering of the alpha of `energy_glow_animation`. Default is range 0.2, so animation alpha can be anywhere between 0.8 and 1.0.
     */
    energy_glow_animation_flicker_strength?: number,
    folded_animation: RotatedAnimation4Way,
    
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.

Controls the speed of the folded_animation: `1 ÷ folded_speed = duration of the folded_animation`
     */
    folded_speed?: number,
    
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.

Controls the speed of the folded_animation: `1 ÷ folded_speed_secondary = duration of the folded_animation`
     */
    folded_speed_secondary?: number,
    folding_animation?: RotatedAnimation4Way,
    folding_sound?: Sound,
    
    /**
     * Controls the speed of the folding_animation: `1 ÷ folding_speed = duration of the folding_animation`
     */
    folding_speed?: number,
    
    /**
     * The intensity of light in the form of `energy_glow_animation` drawn on top of `energy_glow_animation`.
     */
    glow_light_intensity?: number,
    gun_animation_render_layer?: RenderLayer,
    gun_animation_secondary_draw_order?: number,
    ignore_target_mask?: TriggerTargetMask,
    integration?: Sprite,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: boolean,
    prepare_range?: number,
    prepared_alternative_animation?: RotatedAnimation4Way,
    
    /**
     * The chance for `prepared_alternative_animation` to be used.
     */
    prepared_alternative_chance?: number,
    prepared_alternative_sound?: Sound,
    
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.

Controls the speed of the prepared_alternative_animation: `1 ÷ prepared_alternative_speed = duration of the prepared_alternative_animation`
     */
    prepared_alternative_speed?: number,
    
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.

Controls the speed of the prepared_alternative_animation: `1 ÷ prepared_alternative_speed_secondary = duration of the prepared_alternative_animation`
     */
    prepared_alternative_speed_secondary?: number,
    prepared_animation?: RotatedAnimation4Way,
    prepared_sound?: Sound,
    
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.

Controls the speed of the prepared_animation: `1 ÷ prepared_speed = duration of the prepared_animation`
     */
    prepared_speed?: number,
    
    /**
     * It's randomized whether a particular turret uses the primary or the secondary speed for its animations.

Controls the speed of the prepared_animation: `1 ÷ prepared_speed_secondary = duration of the prepared_animation`
     */
    prepared_speed_secondary?: number,
    preparing_animation?: RotatedAnimation4Way,
    preparing_sound?: Sound,
    
    /**
     * Controls the speed of the preparing_animation: `1 ÷ preparing_speed = duration of the preparing_animation`
     */
    preparing_speed?: number,
    random_animation_offset?: boolean,
    rotation_speed?: number,
    
    /**
     * Whether the secondary (animation) speeds should always be used.
     */
    secondary_animation?: boolean,
    shoot_in_prepare_state?: boolean,
    
    /**
     * Decoratives to be created when the spawner is created by the {@link map generator | https://wiki.factorio.com/Map_generator}. Placed when enemies expand if `spawn_decorations_on_expansion` is set to true.
     */
    spawn_decoration?: CreateDecorativesTriggerEffectItem | CreateDecorativesTriggerEffectItem[],
    
    /**
     * Whether `spawn_decoration` should be spawned when this turret is created through {@link enemy expansion | https://wiki.factorio.com/Enemies#Expansions}.
     */
    spawn_decorations_on_expansion?: boolean,
    starting_attack_animation?: RotatedAnimation4Way,
    starting_attack_sound?: Sound,
    
    /**
     * Controls the speed of the starting_attack_animation: `1 ÷ starting_attack_speed = duration of the starting_attack_animation`
     */
    starting_attack_speed?: number,
    turret_base_has_direction?: boolean
}

/**
 * The definition of the tutorial to be used in the tips and tricks, see {@link TipsAndTricksItem | prototype:TipsAndTricksItem}. The actual tutorial code is defined in the tutorials folder, in the folder that has the name of the scenario property.
 */
interface TutorialDefinition extends PrototypeBase{
    
    /**
     * Name of the folder for this tutorial in the tutorials folder.
     */
    scenario: string
}

/**
 * An {@link underground belt | https://wiki.factorio.com/Underground_belt}.
 */
interface UndergroundBeltPrototype extends TransportBeltConnectablePrototype{
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    max_distance: number,
    structure: UndergroundBeltStructure,
    underground_remove_belts_sprite?: Sprite,
    underground_sprite: Sprite
}

/**
 * Entity that moves around and attacks players, for example {@link biters and spitters | https://wiki.factorio.com/Enemies#Creatures}.
 */
interface UnitPrototype extends EntityWithOwnerPrototype{
    affected_by_tiles?: boolean,
    ai_settings?: UnitAISettings,
    
    /**
     * If this is true, this entities `is_military_target property` can be changed runtime (on the entity, not on the prototype itself).
     */
    allow_run_time_change_of_is_military_target?: false,
    alternative_attacking_frame_sequence?: UnitAlternativeFrameSequence,
    
    /**
     * Requires animation in attack_parameters. Requires ammo_type in attack_parameters.
     */
    attack_parameters: AttackParameters,
    can_open_gates?: boolean,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    
    /**
     * How fast the `run_animation` frames are advanced. The animations are advanced animation_speed frames per `distance_per_frame` that the unit moves.

`frames_advanced = (distance_moved ÷ distance_per_frame) * animation_speed`
     */
    distance_per_frame: number,
    distraction_cooldown: number,
    
    /**
     * The sound file to play when entity dies.
     */
    dying_sound?: Sound,
    
    /**
     * If the unit is immune to movement by belts.
     */
    has_belt_immunity?: boolean,
    
    /**
     * Whether this prototype should be a high priority target for enemy forces. See {@link Military units and structures | https://wiki.factorio.com/Military_units_and_structures}.
     */
    is_military_target?: true,
    light?: LightDefinition,
    max_pursue_distance?: number,
    
    /**
     * In ticks.
     */
    min_pursue_time?: number,
    move_while_shooting?: boolean,
    
    /**
     * Movement speed of the unit in the world, in tiles per tick. Must be equal to or greater than 0.
     */
    movement_speed: number,
    
    /**
     * The amount of pollution that has to be absorbed by the unit's spawner before the unit will leave the spawner and attack the source of the pollution.
     */
    pollution_to_join_attack: number,
    radar_range?: number,
    render_layer?: RenderLayer,
    rotation_speed?: number,
    run_animation: RotatedAnimation,
    
    /**
     * Only loaded if `walking_sound` is defined.
     */
    running_sound_animation_positions?: number[],
    spawning_time_modifier?: number,
    
    /**
     * Max is 100.

Note: Setting to 50 or above can lead to undocumented behavior of individual units creating groups on their own when attacking or being attacked.
     */
    vision_distance: number,
    walking_sound?: Sound
}

/**
 * An {@link upgrade planner | https://wiki.factorio.com/Upgrade_planner}.
 */
interface UpgradeItemPrototype extends SelectionToolPrototype{
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_entity_type_filters?: string[],
    
    /**
     * This property is hardcoded to `"cancel-upgrade"`.
     */
    alt_selection_mode?: SelectionModeFlags,
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    alt_tile_filters?: TileID[],
    
    /**
     * This property is hardcoded to `false`.
     */
    always_include_tiles?: boolean,
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_filters?: EntityID[],
    
    /**
     * This property is parsed, but then ignored.
     */
    entity_type_filters?: string[],
    
    /**
     * Can't be > 255.
     */
    mapper_count?: ItemStackIndex,
    
    /**
     * This property is hardcoded to `"upgrade"`.
     */
    selection_mode?: SelectionModeFlags,
    
    /**
     * Count of items of the same name that can be stored in one inventory slot. Must be 1 when the `"not-stackable"` flag is set.
     */
    stack_size: 1,
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filter_mode?: 'whitelist' | 'blacklist',
    
    /**
     * This property is parsed, but then ignored.
     */
    tile_filters?: TileID[]
}

/**
 * Constants used by the game that are not specific to certain prototypes. See {@link utility-constants.lua | https://github.com/wube/factorio-data/blob/master/core/prototypes/utility-constants.lua} for the values used by the base game.
 */
interface UtilityConstants extends PrototypeBase{
    artillery_range_visualization_color: Color,
    
    /**
     * The base game uses more entries here that are applied via the {@link ammo categories | https://github.com/wube/factorio-data/blob/master/base/prototypes/categories/ammo-category.lua#L72-L76}.
     */
    bonus_gui_ordering: BonusGuiOrdering,
    building_buildable_tint: Color,
    building_buildable_too_far_tint: Color,
    building_ignorable_tint: Color,
    building_no_tint: Color,
    building_not_buildable_tint: Color,
    capsule_range_visualization_color: Color,
    
    /**
     * Chart = map + minimap.
     */
    chart: ChartUtilityConstants,
    checkerboard_black: Color,
    checkerboard_white: Color,
    clipboard_history_size: number,
    color_filters: ColorFilterData[],
    count_button_size: number,
    daytime_color_lookup: DaytimeColorLookupTable,
    deconstruct_mark_tint: Color,
    default_alert_icon_scale: number,
    default_alert_icon_scale_by_type?: {[key: string]: number},
    default_alert_icon_shift_by_type?: {[key: string]: Vector},
    default_enemy_force_color: Color,
    default_other_force_color: Color,
    default_player_force_color: Color,
    default_scorch_mark_color: Color,
    
    /**
     * The strings are entity types.
     */
    default_trigger_target_mask_by_type?: {[key: string]: TriggerTargetMask},
    disabled_recipe_slot_background_tint: Color,
    disabled_recipe_slot_tint: Color,
    dynamic_recipe_overload_factor: number,
    enabled_recipe_slot_tint: Color,
    entity_button_background_color: Color,
    entity_renderer_search_box_limits: EntityRendererSearchBoxLimits,
    equipment_default_background_border_color: Color,
    equipment_default_background_color: Color,
    equipment_default_grabbed_background_color: Color,
    filter_outline_color: Color,
    
    /**
     * Must be >= 1
     */
    flying_text_ttl: number,
    forced_enabled_recipe_slot_background_tint: Color,
    ghost_tint: Color,
    gui_remark_color: Color,
    icon_shadow_color: Color,
    icon_shadow_inset: number,
    icon_shadow_radius: number,
    icon_shadow_sharpness: number,
    
    /**
     * Must be in range [1, 100].
     */
    inventory_width: number,
    item_outline_color: Color,
    item_outline_inset: number,
    item_outline_radius: number,
    item_outline_sharpness: number,
    
    /**
     * Can be set to anything from range 0 to 255, but larger values will be clamped to 160. Setting it to larger values can have performance impact (growing geometrically).
     */
    light_renderer_search_distance_limit: number,
    main_menu_background_image_location: FileName,
    main_menu_background_vignette_intensity: number,
    main_menu_background_vignette_sharpness: number,
    
    /**
     * The strings represent the names of the simulations.
     */
    main_menu_simulations: {[key: string]: SimulationDefinition},
    manual_rail_building_reach_modifier: number,
    map_editor: MapEditorConstants,
    max_terrain_building_size: number,
    maximum_recipe_overload_multiplier: number,
    medium_area_size: number,
    medium_blueprint_area_size: number,
    minimum_recipe_overload_multiplier: number,
    missing_preview_sprite_location: FileName,
    
    /**
     * Must be in range [1, 100].
     */
    module_inventory_width: number,
    
    /**
     * Must be >= 1.
     */
    normalised_achievement_icon_size: number,
    
    /**
     * The table with `name = "default"` must exist and be the first member of the array.
     */
    player_colors: PlayerColorData[],
    rail_planner_count_button_color: Color,
    rail_segment_colors: Color[],
    recipe_step_limit: number,
    script_command_console_chat_color: Color,
    
    /**
     * Must be in range [1, 100].
     */
    select_group_row_count: number,
    
    /**
     * Must be in range [1, 100].
     */
    select_slot_row_count: number,
    server_command_console_chat_color: Color,
    small_area_size: number,
    small_blueprint_area_size: number,
    tile_ghost_tint: Color,
    
    /**
     * Must be >= 1.
     */
    tooltip_monitor_edge_border: number,
    train_button_hovered_tint: Color,
    train_destination_full_color: Color,
    train_inactivity_wait_condition_default: number,
    train_no_path_color: Color,
    train_path_finding: TrainPathFinderConstants,
    train_temporary_stop_wait_time: number,
    train_time_wait_condition_default: number,
    tree_leaf_distortion_distortion_far: Vector,
    tree_leaf_distortion_distortion_near: Vector,
    tree_leaf_distortion_speed_far: Vector,
    tree_leaf_distortion_speed_near: Vector,
    tree_leaf_distortion_strength_far: Vector,
    tree_leaf_distortion_strength_near: Vector,
    tree_shadow_roughness: number,
    tree_shadow_speed: number,
    turret_range_visualization_color: Color,
    
    /**
     * Must be >= 1.
     */
    tutorial_notice_icon_size: number,
    unit_group_max_pursue_distance: number,
    unit_group_pathfind_resolution: number,
    zoom_to_world_can_use_nightvision: boolean,
    zoom_to_world_daytime_color_lookup: DaytimeColorLookupTable,
    zoom_to_world_effect_strength: number
}

/**
 * Sounds used by the game that are not specific to certain prototypes.
 */
interface UtilitySounds extends PrototypeBase{
    achievement_unlocked: Sound,
    alert_destroyed: Sound,
    armor_insert: Sound,
    armor_remove: Sound,
    axe_fighting: Sound,
    axe_mining_ore: Sound,
    blueprint_selection_ended: Sound,
    blueprint_selection_started: Sound,
    build_blueprint_large: Sound,
    build_blueprint_medium: Sound,
    build_blueprint_small: Sound,
    build_large: Sound,
    build_medium: Sound,
    build_small: Sound,
    cancel_deconstruction_selection_ended: Sound,
    cancel_deconstruction_selection_started: Sound,
    cannot_build: Sound,
    clear_cursor: Sound,
    confirm: Sound,
    console_message: Sound,
    copy_activated: Sound,
    crafting_finished: Sound,
    cut_activated: Sound,
    deconstruct_big: Sound,
    deconstruct_medium: Sound,
    deconstruct_robot: Sound,
    deconstruct_small: Sound,
    deconstruction_selection_ended: Sound,
    deconstruction_selection_started: Sound,
    default_manual_repair: Sound,
    drop_item: Sound,
    entity_settings_copied: Sound,
    entity_settings_pasted: Sound,
    game_lost: Sound,
    game_won: Sound,
    gui_click: Sound,
    inventory_click: Sound,
    inventory_move: Sound,
    item_deleted: Sound,
    item_spawned: Sound,
    list_box_click: Sound,
    metal_walking_sound: Sound,
    mining_wood: Sound,
    new_objective: Sound,
    paste_activated: Sound,
    picked_up_item: Sound,
    rail_plan_start: Sound,
    research_completed: Sound,
    rotated_big: Sound,
    rotated_medium: Sound,
    rotated_small: Sound,
    scenario_message: Sound,
    smart_pipette: Sound,
    switch_gun: Sound,
    tutorial_notice: Sound,
    undo: Sound,
    upgrade_selection_ended: Sound,
    upgrade_selection_started: Sound,
    wire_connect_pole: Sound,
    wire_disconnect: Sound,
    wire_pickup: Sound
}

/**
 * Sprites used by the game that are not specific to certain prototypes.
 */
interface UtilitySprites extends PrototypeBase{
    achievement_label_failed: Sprite,
    achievement_label_locked: Sprite,
    achievement_label_unlocked: Sprite,
    achievement_label_unlocked_off: Sprite,
    add: Sprite,
    alert_arrow: Sprite,
    ammo_damage_modifier_constant?: Sprite,
    ammo_damage_modifier_icon: Sprite,
    ammo_icon: Sprite,
    and_or: Sprite,
    area_icon: Sprite,
    arrow_button: Animation,
    artillery_range_modifier_constant?: Sprite,
    artillery_range_modifier_icon: Sprite,
    bar_gray_pip: Sprite,
    battery: Sprite,
    bookmark: Sprite,
    brush_circle_shape: Sprite,
    brush_icon: Sprite,
    brush_square_shape: Sprite,
    cable_editor_icon: Sprite,
    center: Sprite,
    change_recipe: Sprite,
    character_additional_mining_categories_modifier_constant?: Sprite,
    character_additional_mining_categories_modifier_icon: Sprite,
    character_build_distance_modifier_constant?: Sprite,
    character_build_distance_modifier_icon: Sprite,
    character_crafting_speed_modifier_constant?: Sprite,
    character_crafting_speed_modifier_icon: Sprite,
    character_health_bonus_modifier_constant?: Sprite,
    character_health_bonus_modifier_icon: Sprite,
    character_inventory_slots_bonus_modifier_constant?: Sprite,
    character_inventory_slots_bonus_modifier_icon: Sprite,
    character_item_drop_distance_modifier_constant?: Sprite,
    character_item_drop_distance_modifier_icon: Sprite,
    character_item_pickup_distance_modifier_constant?: Sprite,
    character_item_pickup_distance_modifier_icon: Sprite,
    character_logistic_requests_modifier_constant?: Sprite,
    character_logistic_requests_modifier_icon: Sprite,
    character_logistic_slots_modifier_constant?: Sprite,
    character_logistic_slots_modifier_icon: Sprite,
    character_logistic_trash_slots_modifier_constant?: Sprite,
    character_logistic_trash_slots_modifier_icon: Sprite,
    character_loot_pickup_distance_modifier_constant?: Sprite,
    character_loot_pickup_distance_modifier_icon: Sprite,
    character_mining_speed_modifier_constant?: Sprite,
    character_mining_speed_modifier_icon: Sprite,
    character_reach_distance_modifier_constant?: Sprite,
    character_reach_distance_modifier_icon: Sprite,
    character_resource_reach_distance_modifier_constant?: Sprite,
    character_resource_reach_distance_modifier_icon: Sprite,
    character_running_speed_modifier_constant?: Sprite,
    character_running_speed_modifier_icon: Sprite,
    check_mark: Sprite,
    check_mark_dark_green: Sprite,
    check_mark_green: Sprite,
    check_mark_white: Sprite,
    circuit_network_panel_black: Sprite,
    circuit_network_panel_white: Sprite,
    cliff_editor_icon: Sprite,
    clock: Sprite,
    clone: Sprite,
    clone_editor_icon: Sprite,
    close_black: Sprite,
    close_fat: Sprite,
    close_map_preview: Sprite,
    close_white: Sprite,
    clouds: Animation,
    collapse: Sprite,
    collapse_dark: Sprite,
    color_effect: Sprite,
    color_picker: Sprite,
    confirm_slot: Sprite,
    construction_radius_visualization: Sprite,
    controller_joycon_a: Sprite,
    controller_joycon_b: Sprite,
    controller_joycon_back: Sprite,
    controller_joycon_black_a: Sprite,
    controller_joycon_black_b: Sprite,
    controller_joycon_black_back: Sprite,
    controller_joycon_black_dpdown: Sprite,
    controller_joycon_black_dpleft: Sprite,
    controller_joycon_black_dpright: Sprite,
    controller_joycon_black_dpup: Sprite,
    controller_joycon_black_left_stick: Sprite,
    controller_joycon_black_leftshoulder: Sprite,
    controller_joycon_black_leftstick: Sprite,
    controller_joycon_black_lefttrigger: Sprite,
    controller_joycon_black_paddle1: Sprite,
    controller_joycon_black_paddle2: Sprite,
    controller_joycon_black_paddle3: Sprite,
    controller_joycon_black_paddle4: Sprite,
    controller_joycon_black_right_stick: Sprite,
    controller_joycon_black_rightshoulder: Sprite,
    controller_joycon_black_rightstick: Sprite,
    controller_joycon_black_righttrigger: Sprite,
    controller_joycon_black_start: Sprite,
    controller_joycon_black_x: Sprite,
    controller_joycon_black_y: Sprite,
    controller_joycon_dpdown: Sprite,
    controller_joycon_dpleft: Sprite,
    controller_joycon_dpright: Sprite,
    controller_joycon_dpup: Sprite,
    controller_joycon_left_stick: Sprite,
    controller_joycon_leftshoulder: Sprite,
    controller_joycon_leftstick: Sprite,
    controller_joycon_lefttrigger: Sprite,
    controller_joycon_paddle1: Sprite,
    controller_joycon_paddle2: Sprite,
    controller_joycon_paddle3: Sprite,
    controller_joycon_paddle4: Sprite,
    controller_joycon_right_stick: Sprite,
    controller_joycon_rightshoulder: Sprite,
    controller_joycon_rightstick: Sprite,
    controller_joycon_righttrigger: Sprite,
    controller_joycon_start: Sprite,
    controller_joycon_x: Sprite,
    controller_joycon_y: Sprite,
    controller_ps_a: Sprite,
    controller_ps_b: Sprite,
    controller_ps_back: Sprite,
    controller_ps_black_a: Sprite,
    controller_ps_black_b: Sprite,
    controller_ps_black_back: Sprite,
    controller_ps_black_dpdown: Sprite,
    controller_ps_black_dpleft: Sprite,
    controller_ps_black_dpright: Sprite,
    controller_ps_black_dpup: Sprite,
    controller_ps_black_left_stick: Sprite,
    controller_ps_black_leftshoulder: Sprite,
    controller_ps_black_leftstick: Sprite,
    controller_ps_black_lefttrigger: Sprite,
    controller_ps_black_right_stick: Sprite,
    controller_ps_black_rightshoulder: Sprite,
    controller_ps_black_rightstick: Sprite,
    controller_ps_black_righttrigger: Sprite,
    controller_ps_black_start: Sprite,
    controller_ps_black_x: Sprite,
    controller_ps_black_y: Sprite,
    controller_ps_dpdown: Sprite,
    controller_ps_dpleft: Sprite,
    controller_ps_dpright: Sprite,
    controller_ps_dpup: Sprite,
    controller_ps_left_stick: Sprite,
    controller_ps_leftshoulder: Sprite,
    controller_ps_leftstick: Sprite,
    controller_ps_lefttrigger: Sprite,
    controller_ps_right_stick: Sprite,
    controller_ps_rightshoulder: Sprite,
    controller_ps_rightstick: Sprite,
    controller_ps_righttrigger: Sprite,
    controller_ps_start: Sprite,
    controller_ps_x: Sprite,
    controller_ps_y: Sprite,
    controller_steamdeck_a: Sprite,
    controller_steamdeck_b: Sprite,
    controller_steamdeck_back: Sprite,
    controller_steamdeck_black_a: Sprite,
    controller_steamdeck_black_b: Sprite,
    controller_steamdeck_black_back: Sprite,
    controller_steamdeck_black_dpdown: Sprite,
    controller_steamdeck_black_dpleft: Sprite,
    controller_steamdeck_black_dpright: Sprite,
    controller_steamdeck_black_dpup: Sprite,
    controller_steamdeck_black_left_stick: Sprite,
    controller_steamdeck_black_leftshoulder: Sprite,
    controller_steamdeck_black_leftstick: Sprite,
    controller_steamdeck_black_lefttrigger: Sprite,
    controller_steamdeck_black_paddle1: Sprite,
    controller_steamdeck_black_paddle2: Sprite,
    controller_steamdeck_black_paddle3: Sprite,
    controller_steamdeck_black_paddle4: Sprite,
    controller_steamdeck_black_right_stick: Sprite,
    controller_steamdeck_black_rightshoulder: Sprite,
    controller_steamdeck_black_rightstick: Sprite,
    controller_steamdeck_black_righttrigger: Sprite,
    controller_steamdeck_black_start: Sprite,
    controller_steamdeck_black_x: Sprite,
    controller_steamdeck_black_y: Sprite,
    controller_steamdeck_dpdown: Sprite,
    controller_steamdeck_dpleft: Sprite,
    controller_steamdeck_dpright: Sprite,
    controller_steamdeck_dpup: Sprite,
    controller_steamdeck_left_stick: Sprite,
    controller_steamdeck_leftshoulder: Sprite,
    controller_steamdeck_leftstick: Sprite,
    controller_steamdeck_lefttrigger: Sprite,
    controller_steamdeck_paddle1: Sprite,
    controller_steamdeck_paddle2: Sprite,
    controller_steamdeck_paddle3: Sprite,
    controller_steamdeck_paddle4: Sprite,
    controller_steamdeck_right_stick: Sprite,
    controller_steamdeck_rightshoulder: Sprite,
    controller_steamdeck_rightstick: Sprite,
    controller_steamdeck_righttrigger: Sprite,
    controller_steamdeck_start: Sprite,
    controller_steamdeck_x: Sprite,
    controller_steamdeck_y: Sprite,
    controller_xbox_a: Sprite,
    controller_xbox_b: Sprite,
    controller_xbox_back: Sprite,
    controller_xbox_black_a: Sprite,
    controller_xbox_black_b: Sprite,
    controller_xbox_black_back: Sprite,
    controller_xbox_black_dpdown: Sprite,
    controller_xbox_black_dpleft: Sprite,
    controller_xbox_black_dpright: Sprite,
    controller_xbox_black_dpup: Sprite,
    controller_xbox_black_left_stick: Sprite,
    controller_xbox_black_leftshoulder: Sprite,
    controller_xbox_black_leftstick: Sprite,
    controller_xbox_black_lefttrigger: Sprite,
    controller_xbox_black_right_stick: Sprite,
    controller_xbox_black_rightshoulder: Sprite,
    controller_xbox_black_rightstick: Sprite,
    controller_xbox_black_righttrigger: Sprite,
    controller_xbox_black_start: Sprite,
    controller_xbox_black_x: Sprite,
    controller_xbox_black_y: Sprite,
    controller_xbox_dpdown: Sprite,
    controller_xbox_dpleft: Sprite,
    controller_xbox_dpright: Sprite,
    controller_xbox_dpup: Sprite,
    controller_xbox_left_stick: Sprite,
    controller_xbox_leftshoulder: Sprite,
    controller_xbox_leftstick: Sprite,
    controller_xbox_lefttrigger: Sprite,
    controller_xbox_right_stick: Sprite,
    controller_xbox_rightshoulder: Sprite,
    controller_xbox_rightstick: Sprite,
    controller_xbox_righttrigger: Sprite,
    controller_xbox_start: Sprite,
    controller_xbox_x: Sprite,
    controller_xbox_y: Sprite,
    copper_wire: Sprite,
    copy: Sprite,
    covered_chunk: Sprite,
    crafting_machine_recipe_not_unlocked: Sprite,
    cross_select: Sprite,
    cursor_box: CursorBoxSpecification,
    cursor_icon: Sprite,
    custom_tag_icon: Sprite,
    custom_tag_in_map_view: Sprite,
    danger_icon: Sprite,
    deconstruction_mark: Sprite,
    deconstruction_time_to_live_modifier_constant?: Sprite,
    deconstruction_time_to_live_modifier_icon: Sprite,
    decorative_editor_icon: Sprite,
    default_ammo_damage_modifier_icon: Sprite,
    default_gun_speed_modifier_icon: Sprite,
    default_turret_attack_modifier_icon: Sprite,
    destroyed_icon: Sprite,
    down_arrow: Sprite,
    downloaded: Sprite,
    downloaded_white: Sprite,
    downloading: Sprite,
    downloading_white: Sprite,
    dropdown: Sprite,
    editor_pause: Sprite,
    editor_play: Sprite,
    editor_selection: Sprite,
    editor_speed_down: Sprite,
    editor_speed_up: Sprite,
    electricity_icon: Sprite,
    electricity_icon_unplugged: Sprite,
    enemy_force_icon: Sprite,
    enter: Sprite,
    entity_editor_icon: Sprite,
    entity_info_dark_background: Sprite,
    equipment_collision: Sprite,
    equipment_grid: Sprite,
    equipment_slot: Sprite,
    expand: Sprite,
    expand_dark: Sprite,
    expand_dots: Sprite,
    expand_dots_white: Sprite,
    explosion_chart_visualization: Animation,
    export: Sprite,
    export_slot: Sprite,
    favourite_server_icon: Sprite,
    fluid_icon: Sprite,
    fluid_indication_arrow: Sprite,
    fluid_indication_arrow_both_ways: Sprite,
    follower_robot_lifetime_modifier_constant?: Sprite,
    follower_robot_lifetime_modifier_icon: Sprite,
    force_editor_icon: Sprite,
    fuel_icon: Sprite,
    game_stopped_visualization: Sprite,
    ghost_bar_pip: Sprite,
    ghost_cursor: Sprite,
    ghost_time_to_live_modifier_constant?: Sprite,
    ghost_time_to_live_modifier_icon: Sprite,
    give_item_modifier_constant?: Sprite,
    give_item_modifier_icon: Sprite,
    go_to_arrow: Sprite,
    gps_map_icon: Sprite,
    gradient: Sprite,
    green_circle: Sprite,
    green_dot: Sprite,
    green_wire: Sprite,
    green_wire_hightlight: Sprite,
    grey_placement_indicator_leg: Sprite,
    grey_rail_signal_placement_indicator: Sprite,
    grid_view: Sprite,
    gun_speed_modifier_constant?: Sprite,
    gun_speed_modifier_icon: Sprite,
    hand: Sprite,
    hand_black: Sprite,
    health_bar_green_pip: Sprite,
    health_bar_red_pip: Sprite,
    health_bar_yellow_pip: Sprite,
    heat_exchange_indication: Sprite,
    hint_arrow_down: Sprite,
    hint_arrow_left: Sprite,
    hint_arrow_right: Sprite,
    hint_arrow_up: Sprite,
    import: Sprite,
    import_slot: Sprite,
    indication_arrow: Sprite,
    indication_line: Sprite,
    inserter_stack_size_bonus_modifier_constant?: Sprite,
    inserter_stack_size_bonus_modifier_icon: Sprite,
    item_editor_icon: Sprite,
    laboratory_productivity_modifier_constant?: Sprite,
    laboratory_productivity_modifier_icon: Sprite,
    laboratory_speed_modifier_constant?: Sprite,
    laboratory_speed_modifier_icon: Sprite,
    left_arrow: Sprite,
    light_cone: Sprite,
    light_medium: Sprite,
    light_small: Sprite,
    line_icon: Sprite,
    list_view: Sprite,
    logistic_network_panel_black: Sprite,
    logistic_network_panel_white: Sprite,
    logistic_radius_visualization: Sprite,
    lua_snippet_tool_icon: Sprite,
    map: Sprite,
    map_exchange_string: Sprite,
    max_failed_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite,
    max_failed_attempts_per_tick_per_construction_queue_modifier_icon: Sprite,
    max_successful_attempts_per_tick_per_construction_queue_modifier_constant?: Sprite,
    max_successful_attempts_per_tick_per_construction_queue_modifier_icon: Sprite,
    maximum_following_robots_count_modifier_constant?: Sprite,
    maximum_following_robots_count_modifier_icon: Sprite,
    medium_gui_arrow: Sprite,
    mining_drill_productivity_bonus_modifier_constant?: Sprite,
    mining_drill_productivity_bonus_modifier_icon: Sprite,
    missing_icon: Sprite,
    missing_mod_icon: Sprite,
    mod_dependency_arrow: Sprite,
    mouse_cursor: Sprite,
    multiplayer_waiting_icon: Sprite,
    nature_icon: Sprite,
    neutral_force_icon: Sprite,
    no_building_material_icon: Sprite,
    no_nature_icon: Sprite,
    no_storage_space_icon: Sprite,
    none_editor_icon: Sprite,
    not_available: Sprite,
    not_enough_construction_robots_icon: Sprite,
    not_enough_repair_packs_icon: Sprite,
    not_played_yet_dark_green: Sprite,
    not_played_yet_green: Sprite,
    nothing_modifier_constant?: Sprite,
    nothing_modifier_icon: Sprite,
    notification: Sprite,
    output_console_gradient: Sprite,
    paint_bucket_icon: Sprite,
    pause: Sprite,
    placement_indicator_leg: Sprite,
    play: Sprite,
    played_dark_green: Sprite,
    played_green: Sprite,
    player_force_icon: Sprite,
    preset: Sprite,
    pump_cannot_connect_icon: Sprite,
    questionmark: Sprite,
    rail_path_not_possible: Sprite,
    rail_planner_indication_arrow: Sprite,
    rail_planner_indication_arrow_too_far: Sprite,
    rail_signal_placement_indicator: Sprite,
    reassign: Sprite,
    recharge_icon: Sprite,
    red_wire: Sprite,
    red_wire_hightlight: Sprite,
    reference_point: Sprite,
    refresh: Sprite,
    refresh_white: Animation,
    rename_icon_normal: Sprite,
    rename_icon_small_black: Sprite,
    rename_icon_small_white: Sprite,
    reset: Sprite,
    reset_white: Sprite,
    resource_editor_icon: Sprite,
    right_arrow: Sprite,
    robot_slot: Sprite,
    scripting_editor_icon: Sprite,
    search_black: Sprite,
    search_icon: Sprite,
    search_white: Sprite,
    select_icon_black: Sprite,
    select_icon_white: Sprite,
    set_bar_slot: Sprite,
    shield_bar_pip: Sprite,
    shoot_cursor_green: Sprite,
    shoot_cursor_red: Sprite,
    short_indication_line: Sprite,
    short_indication_line_green: Sprite,
    show_electric_network_in_map_view: Sprite,
    show_electric_network_in_map_view_black: Sprite,
    show_logistics_network_in_map_view: Sprite,
    show_logistics_network_in_map_view_black: Sprite,
    show_player_names_in_map_view: Sprite,
    show_player_names_in_map_view_black: Sprite,
    show_pollution_in_map_view: Sprite,
    show_pollution_in_map_view_black: Sprite,
    show_rail_signal_states_in_map_view: Sprite,
    show_rail_signal_states_in_map_view_black: Sprite,
    show_recipe_icons_in_map_view: Sprite,
    show_recipe_icons_in_map_view_black: Sprite,
    show_tags_in_map_view: Sprite,
    show_tags_in_map_view_black: Sprite,
    show_train_station_names_in_map_view: Sprite,
    show_train_station_names_in_map_view_black: Sprite,
    show_turret_range_in_map_view: Sprite,
    show_turret_range_in_map_view_black: Sprite,
    show_worker_robots_in_map_view: Sprite,
    show_worker_robots_in_map_view_black: Sprite,
    shuffle: Sprite,
    side_menu_achievements_hover_icon: Sprite,
    side_menu_achievements_icon: Sprite,
    side_menu_blueprint_library_hover_icon: Sprite,
    side_menu_blueprint_library_icon: Sprite,
    side_menu_bonus_hover_icon: Sprite,
    side_menu_bonus_icon: Sprite,
    side_menu_logistic_network_hover_icon: Sprite,
    side_menu_map_hover_icon: Sprite,
    side_menu_map_icon: Sprite,
    side_menu_menu_hover_icon: Sprite,
    side_menu_menu_icon: Sprite,
    side_menu_production_hover_icon: Sprite,
    side_menu_production_icon: Sprite,
    side_menu_technology_hover_icon: Sprite,
    side_menu_train_hover_icon: Sprite,
    side_menu_train_icon: Sprite,
    side_menu_tutorials_hover_icon: Sprite,
    side_menu_tutorials_icon: Sprite,
    slot: Sprite,
    slot_icon_ammo: Sprite,
    slot_icon_ammo_black: Sprite,
    slot_icon_armor: Sprite,
    slot_icon_armor_black: Sprite,
    slot_icon_fuel: Sprite,
    slot_icon_fuel_black: Sprite,
    slot_icon_gun: Sprite,
    slot_icon_gun_black: Sprite,
    slot_icon_inserter_hand: Sprite,
    slot_icon_inserter_hand_black: Sprite,
    slot_icon_module: Sprite,
    slot_icon_module_black: Sprite,
    slot_icon_resource: Sprite,
    slot_icon_resource_black: Sprite,
    slot_icon_result: Sprite,
    slot_icon_result_black: Sprite,
    slot_icon_robot: Sprite,
    slot_icon_robot_black: Sprite,
    slot_icon_robot_material: Sprite,
    slot_icon_robot_material_black: Sprite,
    small_gui_arrow: Sprite,
    spawn_flag: Sprite,
    speed_down: Sprite,
    speed_up: Sprite,
    spray_icon: Sprite,
    stack_inserter_capacity_bonus_modifier_constant?: Sprite,
    stack_inserter_capacity_bonus_modifier_icon: Sprite,
    station_name: Sprite,
    status_not_working: Sprite,
    status_working: Sprite,
    status_yellow: Sprite,
    stop: Sprite,
    surface_editor_icon: Sprite,
    sync_mods: Sprite,
    technology_black: Sprite,
    technology_white: Sprite,
    tick_custom: Sprite,
    tick_once: Sprite,
    tick_sixty: Sprite,
    tile_editor_icon: Sprite,
    tile_ghost_cursor: Sprite,
    time_editor_icon: Sprite,
    too_far: Sprite,
    too_far_from_roboport_icon: Sprite,
    track_button: Sprite,
    train_braking_force_bonus_modifier_constant?: Sprite,
    train_braking_force_bonus_modifier_icon: Sprite,
    train_stop_disabled_in_map_view: Sprite,
    train_stop_full_in_map_view: Sprite,
    train_stop_in_map_view: Sprite,
    train_stop_placement_indicator: Sprite,
    trash: Sprite,
    trash_white: Sprite,
    turret_attack_modifier_constant?: Sprite,
    turret_attack_modifier_icon: Sprite,
    underground_pipe_connection: Sprite,
    underground_remove_belts: Sprite,
    underground_remove_pipes: Sprite,
    unlock_recipe_modifier_constant?: Sprite,
    unlock_recipe_modifier_icon: Sprite,
    upgrade_blueprint: Sprite,
    upgrade_mark: Sprite,
    variations_tool_icon: Sprite,
    warning: Sprite,
    warning_icon: Sprite,
    warning_white: Sprite,
    white_mask: Sprite,
    white_square: Sprite,
    wire_shadow: Sprite,
    worker_robot_battery_modifier_constant?: Sprite,
    worker_robot_battery_modifier_icon: Sprite,
    worker_robot_speed_modifier_constant?: Sprite,
    worker_robot_speed_modifier_icon: Sprite,
    worker_robot_storage_modifier_constant?: Sprite,
    worker_robot_storage_modifier_icon: Sprite,
    zoom_to_world_blueprint_enabled_modifier_constant?: Sprite,
    zoom_to_world_blueprint_enabled_modifier_icon: Sprite,
    zoom_to_world_deconstruction_planner_enabled_modifier_constant?: Sprite,
    zoom_to_world_deconstruction_planner_enabled_modifier_icon: Sprite,
    zoom_to_world_enabled_modifier_constant?: Sprite,
    zoom_to_world_enabled_modifier_icon: Sprite,
    zoom_to_world_ghost_building_enabled_modifier_constant?: Sprite,
    zoom_to_world_ghost_building_enabled_modifier_icon: Sprite,
    zoom_to_world_selection_tool_enabled_modifier_constant?: Sprite,
    zoom_to_world_selection_tool_enabled_modifier_icon: Sprite,
    zoom_to_world_upgrade_planner_enabled_modifier_constant?: Sprite,
    zoom_to_world_upgrade_planner_enabled_modifier_icon: Sprite
}

/**
 * Abstract base of all vehicles.
 */
interface VehiclePrototype extends EntityWithOwnerPrototype{
    
    /**
     * Determines whether this vehicle accepts passengers. This includes both drivers and gunners, if applicable.
     */
    allow_passengers?: boolean,
    
    /**
     * Must be positive. There is no functional difference between the two ways to set braking power/force.
     */
    braking_power: Energy | number,
    
    /**
     * Two entities can collide only if they share a layer from the collision mask.
     */
    collision_mask?: CollisionMask,
    crash_trigger?: TriggerEffect,
    
    /**
     * The (movement) energy used per hit point (1 hit point = 1 health damage) taken and dealt for this vehicle during collisions. The smaller the number, the more damage this vehicle and the rammed entity take during collisions: `damage = energy / energy_per_hit_point`.
     */
    energy_per_hit_point: number,
    
    /**
     * The name of the {@link EquipmentGridPrototype | prototype:EquipmentGridPrototype} this vehicle has.
     */
    equipment_grid?: EquipmentGridID,
    
    /**
     * Must be positive. There is no functional difference between the two ways to set friction force.
     */
    friction: number,
    
    /**
     * The sprite that represents this vehicle on the map/minimap.
     */
    minimap_representation?: Sprite,
    
    /**
     * The sprite that represents this vehicle on the map/minimap when it is selected.
     */
    selected_minimap_representation?: Sprite,
    
    /**
     * Must be positive. Sound is scaled by speed.
     */
    sound_minimum_speed?: number,
    
    /**
     * Must be positive. Sound is scaled by speed.
     */
    sound_scaling_ratio?: number,
    stop_trigger?: TriggerEffect,
    stop_trigger_speed?: number,
    
    /**
     * Must be in the [0, 1] interval.
     */
    terrain_friction_modifier?: number,
    
    /**
     * Must be positive. Weight of the entity used for physics calculation when car hits something.
     */
    weight: number
}

/**
 * A {@link virtual signal | https://wiki.factorio.com/Circuit_network#Virtual_signals}.
 */
interface VirtualSignalPrototype extends PrototypeBase{
    
    /**
     * Path to the icon file that is used to represent this virtual signal.

Mandatory if `icons` is not defined.
     */
    icon?: FileName,
    
    /**
     * Icons of reduced size will be used at decreased scale.
     */
    icon_mipmaps?: IconMipMapType,
    
    /**
     * The size of the square icon, in pixels, e.g. `32` for a 32px by 32px icon.

Mandatory if `icons` is not defined, or if `icon_size` is not specified for all instances of `icons`.
     */
    icon_size?: SpriteSizeType,
    
    /**
     * The icon that is used to represent this virtual signal. Can't be an empty array.
     */
    icons?: IconData[],
    
    /**
     * The name of a {@link ItemSubGroup | prototype:ItemSubGroup}.
     */
    subgroup?: ItemSubGroupID
}

/**
 * A {@link wall | https://wiki.factorio.com/Wall}.
 */
interface WallPrototype extends EntityWithOwnerPrototype{
    circuit_connector_sprites?: CircuitConnectorSprites,
    circuit_wire_connection_point?: WireConnectionPoint,
    
    /**
     * The maximum circuit wire distance for this entity.
     */
    circuit_wire_max_distance?: number,
    connected_gate_visualization?: Sprite,
    default_output_signal?: SignalIDConnector,
    draw_circuit_wires?: boolean,
    draw_copper_wires?: boolean,
    pictures: WallPictures,
    
    /**
     * Different walls will visually connect to each other if their merge group is the same.
     */
    visual_merge_group?: number,
    wall_diode_green?: Sprite4Way,
    wall_diode_green_light_bottom?: LightDefinition,
    wall_diode_green_light_left?: LightDefinition,
    wall_diode_green_light_right?: LightDefinition,
    wall_diode_green_light_top?: LightDefinition,
    wall_diode_red?: Sprite4Way,
    wall_diode_red_light_bottom?: LightDefinition,
    wall_diode_red_light_left?: LightDefinition,
    wall_diode_red_light_right?: LightDefinition,
    wall_diode_red_light_top?: LightDefinition
}

/**
 * A wind sound.
 * @example
 * ```
 * {
 *   type = "wind-sound",
 *   name = "wind-1",
 *   sound =
 *   {
 *     filename = "__base__/sound/wind/wind.ogg",
 *     volume = 1.0
 *   }
 * }
 * ```
 *
 */
interface WindSound {
    
    /**
     * Unique textual identification of the prototype.
     */
    name: string,
    
    /**
     * The sound file and volume.
     */
    sound: Sound,
    
    /**
     * Specification of the type of the prototype.
     */
    type: 'wind-sound'
}


}