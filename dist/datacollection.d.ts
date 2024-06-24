// Factorio prototype data collection
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/prototype-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 1.1.109
// API version 5

declare namespace prototype {
interface dataCollection {
    'accumulator': {
        [key: string]: AccumulatorPrototype;
    };
    'achievement': {
        [key: string]: AchievementPrototype;
    };
    'active-defense-equipment': {
        [key: string]: ActiveDefenseEquipmentPrototype;
    };
    'ambient-sound': {
        [key: string]: AmbientSound;
    };
    'ammo-category': {
        [key: string]: AmmoCategory;
    };
    'ammo': {
        [key: string]: AmmoItemPrototype;
    };
    'ammo-turret': {
        [key: string]: AmmoTurretPrototype;
    };
    'animation': {
        [key: string]: AnimationPrototype;
    };
    'arithmetic-combinator': {
        [key: string]: ArithmeticCombinatorPrototype;
    };
    'armor': {
        [key: string]: ArmorPrototype;
    };
    'arrow': {
        [key: string]: ArrowPrototype;
    };
    'artillery-flare': {
        [key: string]: ArtilleryFlarePrototype;
    };
    'artillery-projectile': {
        [key: string]: ArtilleryProjectilePrototype;
    };
    'artillery-turret': {
        [key: string]: ArtilleryTurretPrototype;
    };
    'artillery-wagon': {
        [key: string]: ArtilleryWagonPrototype;
    };
    'assembling-machine': {
        [key: string]: AssemblingMachinePrototype;
    };
    'autoplace-control': {
        [key: string]: AutoplaceControl;
    };
    'battery-equipment': {
        [key: string]: BatteryEquipmentPrototype;
    };
    'beacon': {
        [key: string]: BeaconPrototype;
    };
    'beam': {
        [key: string]: BeamPrototype;
    };
    'belt-immunity-equipment': {
        [key: string]: BeltImmunityEquipmentPrototype;
    };
    'blueprint-book': {
        [key: string]: BlueprintBookPrototype;
    };
    'blueprint': {
        [key: string]: BlueprintItemPrototype;
    };
    'boiler': {
        [key: string]: BoilerPrototype;
    };
    'build-entity-achievement': {
        [key: string]: BuildEntityAchievementPrototype;
    };
    'burner-generator': {
        [key: string]: BurnerGeneratorPrototype;
    };
    'capsule': {
        [key: string]: CapsulePrototype;
    };
    'car': {
        [key: string]: CarPrototype;
    };
    'cargo-wagon': {
        [key: string]: CargoWagonPrototype;
    };
    'character-corpse': {
        [key: string]: CharacterCorpsePrototype;
    };
    'character': {
        [key: string]: CharacterPrototype;
    };
    'cliff': {
        [key: string]: CliffPrototype;
    };
    'combat-robot-count': {
        [key: string]: CombatRobotCountAchievementPrototype;
    };
    'combat-robot': {
        [key: string]: CombatRobotPrototype;
    };
    'constant-combinator': {
        [key: string]: ConstantCombinatorPrototype;
    };
    'construct-with-robots-achievement': {
        [key: string]: ConstructWithRobotsAchievementPrototype;
    };
    'construction-robot': {
        [key: string]: ConstructionRobotPrototype;
    };
    'container': {
        [key: string]: ContainerPrototype;
    };
    'copy-paste-tool': {
        [key: string]: CopyPasteToolPrototype;
    };
    'corpse': {
        [key: string]: CorpsePrototype;
    };
    'curved-rail': {
        [key: string]: CurvedRailPrototype;
    };
    'custom-input': {
        [key: string]: CustomInputPrototype;
    };
    'damage-type': {
        [key: string]: DamageType;
    };
    'decider-combinator': {
        [key: string]: DeciderCombinatorPrototype;
    };
    'deconstruct-with-robots-achievement': {
        [key: string]: DeconstructWithRobotsAchievementPrototype;
    };
    'deconstructible-tile-proxy': {
        [key: string]: DeconstructibleTileProxyPrototype;
    };
    'deconstruction-item': {
        [key: string]: DeconstructionItemPrototype;
    };
    'optimized-decorative': {
        [key: string]: DecorativePrototype;
    };
    'deliver-by-robots-achievement': {
        [key: string]: DeliverByRobotsAchievementPrototype;
    };
    'dont-build-entity-achievement': {
        [key: string]: DontBuildEntityAchievementPrototype;
    };
    'dont-craft-manually-achievement': {
        [key: string]: DontCraftManuallyAchievementPrototype;
    };
    'dont-use-entity-in-energy-production-achievement': {
        [key: string]: DontUseEntityInEnergyProductionAchievementPrototype;
    };
    'editor-controller': {
        [key: string]: EditorControllerPrototype;
    };
    'electric-energy-interface': {
        [key: string]: ElectricEnergyInterfacePrototype;
    };
    'electric-pole': {
        [key: string]: ElectricPolePrototype;
    };
    'electric-turret': {
        [key: string]: ElectricTurretPrototype;
    };
    'unit-spawner': {
        [key: string]: EnemySpawnerPrototype;
    };
    'energy-shield-equipment': {
        [key: string]: EnergyShieldEquipmentPrototype;
    };
    'entity-ghost': {
        [key: string]: EntityGhostPrototype;
    };
    'particle': {
        [key: string]: EntityParticlePrototype;
    };
    'equipment-category': {
        [key: string]: EquipmentCategory;
    };
    'equipment-grid': {
        [key: string]: EquipmentGridPrototype;
    };
    'explosion': {
        [key: string]: ExplosionPrototype;
    };
    'finish-the-game-achievement': {
        [key: string]: FinishTheGameAchievementPrototype;
    };
    'fire': {
        [key: string]: FireFlamePrototype;
    };
    'fish': {
        [key: string]: FishPrototype;
    };
    'flame-thrower-explosion': {
        [key: string]: FlameThrowerExplosionPrototype;
    };
    'fluid': {
        [key: string]: FluidPrototype;
    };
    'stream': {
        [key: string]: FluidStreamPrototype;
    };
    'fluid-turret': {
        [key: string]: FluidTurretPrototype;
    };
    'fluid-wagon': {
        [key: string]: FluidWagonPrototype;
    };
    'flying-text': {
        [key: string]: FlyingTextPrototype;
    };
    'font': {
        [key: string]: FontPrototype;
    };
    'fuel-category': {
        [key: string]: FuelCategory;
    };
    'furnace': {
        [key: string]: FurnacePrototype;
    };
    'gate': {
        [key: string]: GatePrototype;
    };
    'generator-equipment': {
        [key: string]: GeneratorEquipmentPrototype;
    };
    'generator': {
        [key: string]: GeneratorPrototype;
    };
    'god-controller': {
        [key: string]: GodControllerPrototype;
    };
    'group-attack-achievement': {
        [key: string]: GroupAttackAchievementPrototype;
    };
    'gui-style': {
        [key: string]: GuiStyle;
    };
    'gun': {
        [key: string]: GunPrototype;
    };
    'heat-interface': {
        [key: string]: HeatInterfacePrototype;
    };
    'heat-pipe': {
        [key: string]: HeatPipePrototype;
    };
    'highlight-box': {
        [key: string]: HighlightBoxEntityPrototype;
    };
    'infinity-container': {
        [key: string]: InfinityContainerPrototype;
    };
    'infinity-pipe': {
        [key: string]: InfinityPipePrototype;
    };
    'inserter': {
        [key: string]: InserterPrototype;
    };
    'item-entity': {
        [key: string]: ItemEntityPrototype;
    };
    'item-group': {
        [key: string]: ItemGroup;
    };
    'item': {
        [key: string]: ItemPrototype;
    };
    'item-request-proxy': {
        [key: string]: ItemRequestProxyPrototype;
    };
    'item-subgroup': {
        [key: string]: ItemSubGroup;
    };
    'item-with-entity-data': {
        [key: string]: ItemWithEntityDataPrototype;
    };
    'item-with-inventory': {
        [key: string]: ItemWithInventoryPrototype;
    };
    'item-with-label': {
        [key: string]: ItemWithLabelPrototype;
    };
    'item-with-tags': {
        [key: string]: ItemWithTagsPrototype;
    };
    'kill-achievement': {
        [key: string]: KillAchievementPrototype;
    };
    'lab': {
        [key: string]: LabPrototype;
    };
    'lamp': {
        [key: string]: LampPrototype;
    };
    'land-mine': {
        [key: string]: LandMinePrototype;
    };
    'leaf-particle': {
        [key: string]: LeafParticlePrototype;
    };
    'linked-belt': {
        [key: string]: LinkedBeltPrototype;
    };
    'linked-container': {
        [key: string]: LinkedContainerPrototype;
    };
    'loader-1x1': {
        [key: string]: Loader1x1Prototype;
    };
    'loader': {
        [key: string]: Loader1x2Prototype;
    };
    'locomotive': {
        [key: string]: LocomotivePrototype;
    };
    'logistic-container': {
        [key: string]: LogisticContainerPrototype;
    };
    'logistic-robot': {
        [key: string]: LogisticRobotPrototype;
    };
    'map-gen-presets': {
        [key: string]: MapGenPresets;
    };
    'map-settings': {
        [key: string]: MapSettings;
    };
    'market': {
        [key: string]: MarketPrototype;
    };
    'mining-drill': {
        [key: string]: MiningDrillPrototype;
    };
    'mining-tool': {
        [key: string]: MiningToolPrototype;
    };
    'module-category': {
        [key: string]: ModuleCategory;
    };
    'module': {
        [key: string]: ModulePrototype;
    };
    'mouse-cursor': {
        [key: string]: MouseCursor;
    };
    'movement-bonus-equipment': {
        [key: string]: MovementBonusEquipmentPrototype;
    };
    'noise-expression': {
        [key: string]: NamedNoiseExpression;
    };
    'night-vision-equipment': {
        [key: string]: NightVisionEquipmentPrototype;
    };
    'noise-layer': {
        [key: string]: NoiseLayer;
    };
    'offshore-pump': {
        [key: string]: OffshorePumpPrototype;
    };
    'optimized-particle': {
        [key: string]: ParticlePrototype;
    };
    'particle-source': {
        [key: string]: ParticleSourcePrototype;
    };
    'pipe': {
        [key: string]: PipePrototype;
    };
    'pipe-to-ground': {
        [key: string]: PipeToGroundPrototype;
    };
    'player-damaged-achievement': {
        [key: string]: PlayerDamagedAchievementPrototype;
    };
    'player-port': {
        [key: string]: PlayerPortPrototype;
    };
    'power-switch': {
        [key: string]: PowerSwitchPrototype;
    };
    'produce-achievement': {
        [key: string]: ProduceAchievementPrototype;
    };
    'produce-per-hour-achievement': {
        [key: string]: ProducePerHourAchievementPrototype;
    };
    'programmable-speaker': {
        [key: string]: ProgrammableSpeakerPrototype;
    };
    'projectile': {
        [key: string]: ProjectilePrototype;
    };
    'pump': {
        [key: string]: PumpPrototype;
    };
    'radar': {
        [key: string]: RadarPrototype;
    };
    'rail-chain-signal': {
        [key: string]: RailChainSignalPrototype;
    };
    'rail-planner': {
        [key: string]: RailPlannerPrototype;
    };
    'rail-remnants': {
        [key: string]: RailRemnantsPrototype;
    };
    'rail-signal': {
        [key: string]: RailSignalPrototype;
    };
    'reactor': {
        [key: string]: ReactorPrototype;
    };
    'recipe-category': {
        [key: string]: RecipeCategory;
    };
    'recipe': {
        [key: string]: RecipePrototype;
    };
    'repair-tool': {
        [key: string]: RepairToolPrototype;
    };
    'research-achievement': {
        [key: string]: ResearchAchievementPrototype;
    };
    'resource-category': {
        [key: string]: ResourceCategory;
    };
    'resource': {
        [key: string]: ResourceEntityPrototype;
    };
    'roboport-equipment': {
        [key: string]: RoboportEquipmentPrototype;
    };
    'roboport': {
        [key: string]: RoboportPrototype;
    };
    'rocket-silo': {
        [key: string]: RocketSiloPrototype;
    };
    'rocket-silo-rocket': {
        [key: string]: RocketSiloRocketPrototype;
    };
    'rocket-silo-rocket-shadow': {
        [key: string]: RocketSiloRocketShadowPrototype;
    };
    'selection-tool': {
        [key: string]: SelectionToolPrototype;
    };
    'shortcut': {
        [key: string]: ShortcutPrototype;
    };
    'simple-entity': {
        [key: string]: SimpleEntityPrototype;
    };
    'simple-entity-with-force': {
        [key: string]: SimpleEntityWithForcePrototype;
    };
    'simple-entity-with-owner': {
        [key: string]: SimpleEntityWithOwnerPrototype;
    };
    'smoke': {
        [key: string]: SimpleSmokePrototype;
    };
    'smoke-with-trigger': {
        [key: string]: SmokeWithTriggerPrototype;
    };
    'solar-panel-equipment': {
        [key: string]: SolarPanelEquipmentPrototype;
    };
    'solar-panel': {
        [key: string]: SolarPanelPrototype;
    };
    'sound': {
        [key: string]: SoundPrototype;
    };
    'spectator-controller': {
        [key: string]: SpectatorControllerPrototype;
    };
    'speech-bubble': {
        [key: string]: SpeechBubblePrototype;
    };
    'spider-leg': {
        [key: string]: SpiderLegPrototype;
    };
    'spider-vehicle': {
        [key: string]: SpiderVehiclePrototype;
    };
    'spidertron-remote': {
        [key: string]: SpidertronRemotePrototype;
    };
    'splitter': {
        [key: string]: SplitterPrototype;
    };
    'sprite': {
        [key: string]: SpritePrototype;
    };
    'sticker': {
        [key: string]: StickerPrototype;
    };
    'storage-tank': {
        [key: string]: StorageTankPrototype;
    };
    'straight-rail': {
        [key: string]: StraightRailPrototype;
    };
    'technology': {
        [key: string]: TechnologyPrototype;
    };
    'tile-effect': {
        [key: string]: TileEffectDefinition;
    };
    'tile-ghost': {
        [key: string]: TileGhostPrototype;
    };
    'tile': {
        [key: string]: TilePrototype;
    };
    'tips-and-tricks-item': {
        [key: string]: TipsAndTricksItem;
    };
    'tips-and-tricks-item-category': {
        [key: string]: TipsAndTricksItemCategory;
    };
    'tool': {
        [key: string]: ToolPrototype;
    };
    'train-path-achievement': {
        [key: string]: TrainPathAchievementPrototype;
    };
    'train-stop': {
        [key: string]: TrainStopPrototype;
    };
    'transport-belt': {
        [key: string]: TransportBeltPrototype;
    };
    'tree': {
        [key: string]: TreePrototype;
    };
    'trigger-target-type': {
        [key: string]: TriggerTargetType;
    };
    'trivial-smoke': {
        [key: string]: TrivialSmokePrototype;
    };
    'turret': {
        [key: string]: TurretPrototype;
    };
    'tutorial': {
        [key: string]: TutorialDefinition;
    };
    'underground-belt': {
        [key: string]: UndergroundBeltPrototype;
    };
    'unit': {
        [key: string]: UnitPrototype;
    };
    'upgrade-item': {
        [key: string]: UpgradeItemPrototype;
    };
    'utility-constants': {
        [key: string]: UtilityConstants;
    };
    'utility-sounds': {
        [key: string]: UtilitySounds;
    };
    'utility-sprites': {
        [key: string]: UtilitySprites;
    };
    'virtual-signal': {
        [key: string]: VirtualSignalPrototype;
    };
    'wall': {
        [key: string]: WallPrototype;
    };
    'wind-sound': {
        [key: string]: WindSound;
    };
}
}