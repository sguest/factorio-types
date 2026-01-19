// https://github.com/wube/factorio-data/blob/master/core/lualib/crash-site.lua
declare module "crash-site" {
    export interface ShipPart {
        name: string;
        angle_deviation: number;
        variations?: number;
        max_distance?: number;
        min_separation?: number;
        fire_count?: number;
        explosion_count?: number;
        repeat_count?: number;
        scale_lifetime?: boolean;
    }

    export function create_crash_site(
        this: void,
        surface: runtime.LuaSurface,
        position: runtime.MapPosition,
        ship_items: runtime.ItemStackIdentification[],
        part_items: runtime.ItemStackIdentification[],
        ship_parts: ShipPart[]): void;

    export function create_cutscene(
        this: void,
        player: runtime.LuaPlayer,
        goal_position: runtime.MapPosition): void
    
    export function is_crash_site_cutscene(this: void, event: runtime.on_cutscene_waypoint_reached): boolean;

    export function on_player_display_refresh(
        this: void,
        event: runtime.on_player_display_resolution_changed | runtime.on_player_display_scale_changed): void;

    export function default_ship_parts(): ShipPart[];
}