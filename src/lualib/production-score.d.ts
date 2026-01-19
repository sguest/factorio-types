declare module "production-score" {
    export function generate_price_list(this: void, param?: {
        seed_prices?: Record<string, number>,
        ingedient_exponent?: number,
        raw_resource_price?: number,
        resource_ignore?: Record<string, string>,
        round?: (this: void, num: number) => number,
        energy_addition?: (this: void, recipe: runtime.LuaRecipe, cost: number) => number,
        normalise?: (this: void, num: number) => number,
    }): Record<string, number>;

    export function get_production_scores(this: void, price_list?: Record<string,number>): Record<string, number>;
}