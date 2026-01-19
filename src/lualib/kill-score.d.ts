// https://github.com/wube/factorio-data/blob/master/core/lualib/kill-score.lua
declare module "kill-score" {
    export function generate_entity_prices(this: void, param?: { prices?: Record<string,number>, item_prices?: Record<string, number> }): Record<string, number>

    export function get_kill_scores(this: void, price_list?: Record<string, number>): Record<string, number>;

    export function get_default_prices(this: void): Record<string, number>;
}