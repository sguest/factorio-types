interface event {
    name: defines.events
    tick: number
}

interface on_tick extends event {
}

interface on_ai_command_completed extends event {
    unit_number: number
    result: defines.behavior_result
}

interface on_area_cloned extends event {
    source_surface: LuaSurface
    source_area: BoundingBox
    destination_surface: LuaSurface
    destination_area: BoundingBox
    destination_force?: LuaForce
    clone_tiles: boolean
    clone_entities: boolean
    clone_decoratives: boolean
    clear_destination: boolean
}

interface on_biter_base_built extends event {
    entity: LuaEntity
}

interface on_built_entity extends event {
    created_entity: LuaEntity
    player_index: number
    stack: LuaItemStack
    item?: LuaItemPrototype
    tags?: Tags
}

interface on_cancelled_deconstruction extends event {
    entity: LuaEntity
    player_index?: number
}
