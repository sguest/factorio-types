// Factorio prototype data collection
// Factorio API reference https://lua-api.factorio.com/latest/index.html
// Generated from JSON source https://lua-api.factorio.com/latest/prototype-api.json
// Definition source https://github.com/sguest/factorio-types
// Factorio version 2.0.50
// API version 6

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
    'agricultural-tower': {
        [key: string]: AgriculturalTowerPrototype;
    };
    'airborne-pollutant': {
        [key: string]: AirbornePollutantPrototype;
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
    'asteroid-chunk': {
        [key: string]: AsteroidChunkPrototype;
    };
    'asteroid-collector': {
        [key: string]: AsteroidCollectorPrototype;
    };
    'asteroid': {
        [key: string]: AsteroidPrototype;
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
    'burner-usage': {
        [key: string]: BurnerUsagePrototype;
    };
    'capsule': {
        [key: string]: CapsulePrototype;
    };
    'capture-robot': {
        [key: string]: CaptureRobotPrototype;
    };
    'car': {
        [key: string]: CarPrototype;
    };
    'cargo-bay': {
        [key: string]: CargoBayPrototype;
    };
    'cargo-landing-pad': {
        [key: string]: CargoLandingPadPrototype;
    };
    'cargo-pod': {
        [key: string]: CargoPodPrototype;
    };
    'cargo-wagon': {
        [key: string]: CargoWagonPrototype;
    };
    'chain-active-trigger': {
        [key: string]: ChainActiveTriggerPrototype;
    };
    'change-surface-achievement': {
        [key: string]: ChangedSurfaceAchievementPrototype;
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
    'collision-layer': {
        [key: string]: CollisionLayerPrototype;
    };
    'combat-robot-count-achievement': {
        [key: string]: CombatRobotCountAchievementPrototype;
    };
    'combat-robot': {
        [key: string]: CombatRobotPrototype;
    };
    'complete-objective-achievement': {
        [key: string]: CompleteObjectiveAchievementPrototype;
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
    'create-platform-achievement': {
        [key: string]: CreatePlatformAchievementPrototype;
    };
    'curved-rail-a': {
        [key: string]: CurvedRailAPrototype;
    };
    'curved-rail-b': {
        [key: string]: CurvedRailBPrototype;
    };
    'custom-event': {
        [key: string]: CustomEventPrototype;
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
    'delayed-active-trigger': {
        [key: string]: DelayedActiveTriggerPrototype;
    };
    'deliver-by-robots-achievement': {
        [key: string]: DeliverByRobotsAchievementPrototype;
    };
    'deliver-category': {
        [key: string]: DeliverCategory;
    };
    'deliver-impact-combination': {
        [key: string]: DeliverImpactCombination;
    };
    'deplete-resource-achievement': {
        [key: string]: DepleteResourceAchievementPrototype;
    };
    'destroy-cliff-achievement': {
        [key: string]: DestroyCliffAchievementPrototype;
    };
    'display-panel': {
        [key: string]: DisplayPanelPrototype;
    };
    'dont-build-entity-achievement': {
        [key: string]: DontBuildEntityAchievementPrototype;
    };
    'dont-craft-manually-achievement': {
        [key: string]: DontCraftManuallyAchievementPrototype;
    };
    'dont-kill-manually-achievement': {
        [key: string]: DontKillManuallyAchievementPrototype;
    };
    'dont-research-before-researching-achievement': {
        [key: string]: DontResearchBeforeResearchingAchievementPrototype;
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
    'elevated-curved-rail-a': {
        [key: string]: ElevatedCurvedRailAPrototype;
    };
    'elevated-curved-rail-b': {
        [key: string]: ElevatedCurvedRailBPrototype;
    };
    'elevated-half-diagonal-rail': {
        [key: string]: ElevatedHalfDiagonalRailPrototype;
    };
    'elevated-straight-rail': {
        [key: string]: ElevatedStraightRailPrototype;
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
    'equip-armor-achievement': {
        [key: string]: EquipArmorAchievementPrototype;
    };
    'equipment-category': {
        [key: string]: EquipmentCategory;
    };
    'equipment-ghost': {
        [key: string]: EquipmentGhostPrototype;
    };
    'equipment-grid': {
        [key: string]: EquipmentGridPrototype;
    };
    'explosion': {
        [key: string]: ExplosionPrototype;
    };
    'fire': {
        [key: string]: FireFlamePrototype;
    };
    'fish': {
        [key: string]: FishPrototype;
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
    'font': {
        [key: string]: FontPrototype;
    };
    'fuel-category': {
        [key: string]: FuelCategory;
    };
    'furnace': {
        [key: string]: FurnacePrototype;
    };
    'fusion-generator': {
        [key: string]: FusionGeneratorPrototype;
    };
    'fusion-reactor': {
        [key: string]: FusionReactorPrototype;
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
    'half-diagonal-rail': {
        [key: string]: HalfDiagonalRailPrototype;
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
    'impact-category': {
        [key: string]: ImpactCategory;
    };
    'infinity-cargo-wagon': {
        [key: string]: InfinityCargoWagonPrototype;
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
    'inventory-bonus-equipment': {
        [key: string]: InventoryBonusEquipmentPrototype;
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
    'lane-splitter': {
        [key: string]: LaneSplitterPrototype;
    };
    'legacy-curved-rail': {
        [key: string]: LegacyCurvedRailPrototype;
    };
    'legacy-straight-rail': {
        [key: string]: LegacyStraightRailPrototype;
    };
    'lightning-attractor': {
        [key: string]: LightningAttractorPrototype;
    };
    'lightning': {
        [key: string]: LightningPrototype;
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
    'module-category': {
        [key: string]: ModuleCategory;
    };
    'module': {
        [key: string]: ModulePrototype;
    };
    'module-transfer-achievement': {
        [key: string]: ModuleTransferAchievementPrototype;
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
    'noise-function': {
        [key: string]: NamedNoiseFunction;
    };
    'night-vision-equipment': {
        [key: string]: NightVisionEquipmentPrototype;
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
    'place-equipment-achievement': {
        [key: string]: PlaceEquipmentAchievementPrototype;
    };
    'planet': {
        [key: string]: PlanetPrototype;
    };
    'plant': {
        [key: string]: PlantPrototype;
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
    'procession-layer-inheritance-group': {
        [key: string]: ProcessionLayerInheritanceGroup;
    };
    'procession': {
        [key: string]: ProcessionPrototype;
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
    'proxy-container': {
        [key: string]: ProxyContainerPrototype;
    };
    'pump': {
        [key: string]: PumpPrototype;
    };
    'quality': {
        [key: string]: QualityPrototype;
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
    'rail-ramp': {
        [key: string]: RailRampPrototype;
    };
    'rail-remnants': {
        [key: string]: RailRemnantsPrototype;
    };
    'rail-signal': {
        [key: string]: RailSignalPrototype;
    };
    'rail-support': {
        [key: string]: RailSupportPrototype;
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
    'remote-controller': {
        [key: string]: RemoteControllerPrototype;
    };
    'repair-tool': {
        [key: string]: RepairToolPrototype;
    };
    'research-achievement': {
        [key: string]: ResearchAchievementPrototype;
    };
    'research-with-science-pack-achievement': {
        [key: string]: ResearchWithSciencePackAchievementPrototype;
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
    'segment': {
        [key: string]: SegmentPrototype;
    };
    'segmented-unit': {
        [key: string]: SegmentedUnitPrototype;
    };
    'selection-tool': {
        [key: string]: SelectionToolPrototype;
    };
    'selector-combinator': {
        [key: string]: SelectorCombinatorPrototype;
    };
    'shoot-achievement': {
        [key: string]: ShootAchievementPrototype;
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
    'space-connection-distance-traveled-achievement': {
        [key: string]: SpaceConnectionDistanceTraveledAchievementPrototype;
    };
    'space-connection': {
        [key: string]: SpaceConnectionPrototype;
    };
    'space-location': {
        [key: string]: SpaceLocationPrototype;
    };
    'space-platform-hub': {
        [key: string]: SpacePlatformHubPrototype;
    };
    'space-platform-starter-pack': {
        [key: string]: SpacePlatformStarterPackPrototype;
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
    'spider-unit': {
        [key: string]: SpiderUnitPrototype;
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
    'surface-property': {
        [key: string]: SurfacePropertyPrototype;
    };
    'surface': {
        [key: string]: SurfacePrototype;
    };
    'technology': {
        [key: string]: TechnologyPrototype;
    };
    'temporary-container': {
        [key: string]: TemporaryContainerPrototype;
    };
    'thruster': {
        [key: string]: ThrusterPrototype;
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
    'use-entity-in-energy-production-achievement': {
        [key: string]: UseEntityInEnergyProductionAchievementPrototype;
    };
    'use-item-achievement': {
        [key: string]: UseItemAchievementPrototype;
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
    'valve': {
        [key: string]: ValvePrototype;
    };
    'virtual-signal': {
        [key: string]: VirtualSignalPrototype;
    };
    'wall': {
        [key: string]: WallPrototype;
    };
}
}