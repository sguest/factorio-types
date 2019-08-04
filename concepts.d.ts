type Position = { x: number, y: number} | number[]

type ForceSpecification = string | LuaForce

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