interface LuaGameScript {
    connected_players: LuaPlayer[]
}

interface LuaBootstrap {
    on_event(this: void, event: defines.events | defines.events[] | string, callback: (this: void, event: event) => void): void
}

interface LuaEntity {

}

interface LuaControl {
    get_inventory(this: void, inventory: defines.inventory): LuaInventory | null
    surface: LuaSurface
    position: Position
}

interface LuaPlayer extends LuaControl {
    character?: LuaEntity
}

interface LuaSurface {
    create_entity(this:void,
    values: {
        name: string,
        position: Position,
        force: ForceSpecification,
    }): LuaEntity
}

interface LuaInventory {
    get_item_count(this: void, name?: string): number
}

interface LuaForce {

}

interface LuaItemPrototype {
    name: string
    icons: Icon[]
    icon: string
    resistances: Resistance[]
}

interface LuaRecipePrototype {
    enabled: boolean
    name: string
    result: string
    ingredients: Ingredient[]
}