// https://github.com/wube/factorio-data/blob/master/core/lualib/util.lua
declare module "util" {
    export const table: {
        deepcopy<T>(this: void, value: T): T;
        compare(this: void, table1: object | [], table2: object | []): boolean;
    }

    export function copy<T>(this: void, value: T): T;

    export function distance(this: void, position1: runtime.MapPosition, position2: runtime.MapPosition): number;

    export function positiontostr(this: void, pos: runtime.MapPosition): string;

    export function formattime(this: void, ticks: number): string;

    /** supports 'rrggbb', 'rgb', 'rrggbbaa', 'rgba', 'ww', 'w' */
    export function color(this: void, hex: string): runtime.Color;

    export function premul_color(this: void, color: runtime.Color): runtime.Color;

    export function mix_color(this: void, c1: runtime.Color, c2: runtime.Color): runtime.Color;

    export function multiply_color(this: void, c1: runtime.Color, n?: number): runtime.Color;

    export function get_color_with_alpha(this: void, color: runtime.Color, alpha: number, normalized_alpha: number): runtime.Color;

    export const direction_vectors: Record<defines.direction, runtime.MapPosition>;

    export function moveposition(this: void, position: runtime.MapPosition, direction: defines.direction, distance: number): runtime.MapPosition;

    /** orientation of 1 = 360 degrees */
    export function rotate_position(this: void, position: runtime.MapPosition, orientation: number): runtime.MapPosition;

    export function oppositedirection(this: void, direction: defines.direction): defines.direction;

    export function multiplystripes<T>(this: void, count: number, stripes: T[]): T[];

    export function by_pixel(this: void, x: number, y: number): { x: number, y: number }

    export function by_pixel_hr(this: void, x: number, y: number): { x: number, y: number }

    export function foreach_sprite_definition<T>(this: void, table_: T, fun_: (table: T) => void): T

    export function add_shift<T>(this: void, a: [T, T], b: [T, T]): [T, T];

    export function add_shift_offset<T>(this: void, offset_: [T, T], table_: [T, T]): [T, T];

    export function mul_shift(this: void, shift: runtime.MapPosition, scale: number): runtime.MapPosition;

    export function format_number(this: void, amount: number, append_suffix: boolean): string;

    export function increment(this: void, t: number[], k: number, v: number): void;

    export function conditional_return<T>(this: void, value: bool, data: T): T | false;

    /**
     * Recursively merges and/or deep-copies tables.
     * Entries in later tables override entries in earlier ones, unless
     * both entries are themselves tables, in which case they are recursively merged.
     * Non-merged tables are deep-copies, so that the result is brand new.
     */
    export function merge(this: void, tables: object[]): object;

    export function insert_safe(this: void, entity: runtime.LuaEntity, item_dict: Record<string, number>): void;

    export function remove_safe(this: void, entity: runtime.LuaEntity, item_dict: Record<string, number>): void;

    export function split_whitespace(this: void, string: string): string[];

    export function split(this: void, inputstr: string, sep: string): string[];

    export function string_starts_with(this: void, str: string, start: string): boolean;

    export function string_replace(this: void, str: string, what: string, _with: string): string;

    export function clamp(this: void, x: number, lower: number, upper: number): number;

    export function get_walkable_tile(this: void): string;

    /**
     * This function takes 2 icons tables, and adds the second to the first, but applies scale, shift and tint to the entire second set.
     * This allows you to manulipate the entire second icons table in the same way as you would manipulate a single icon when adding to the icons table.
     */
    export function combine_icons(
        this: void,
        icons1: prototype.IconData[],
        icons2: prototype.IconData[],
        inputs: {
            scale?: number,
            shift?: number,
            tint?: runtime.Color,
        },
        default_icon_size?: prototype.SpriteSizeType): prototype.IconData[]

    export function technology_icon_constant_damage(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_speed(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_movement_speed(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_range(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_planet(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_equipment(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_followers(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_capacity(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_stack_size(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_productivity(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_recipe_productivity(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_braking_force(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function technology_icon_constant_mining(this: void, technology_icon: prototype.FileName): prototype.IconData[];

    export function parse_energy(this: void, energy: string): number;

    export function product_amount(this: void, product: prototype.ProductPrototype): number;

    export function empty_sprite(this: void): prototype.IconData;

    export function empty_animation(this: void, animation_length: number): prototype.RotatedAnimation;

    export function empty_icon(this: void): prototype.IconData;

    export function draw_as_glow<T extends prototype.AnimationPrototype | prototype.SpritePrototype>(this: void, layer: T): T;

    export function sprite_load(this: void, path: prototype.FileName, table: prototype.SpriteSheet): prototype.SpriteSheet;

    export function spritesheets_to_pictures(this: void, spritesheets: prototype.SpriteSheet[]): prototype.SpriteSheet[];

    /**
     * Does not handle:
     *  explicit tile filters in "selection-tool" items
     *  ItemPrototype::place_as_tile
     *  TilePrototype::next_direction
     *  TilePrototype::transition_merges_with_tile
     *  general tile transitions, only removes tile names from water_tile_type_names
     */
    export function remove_tile_references(this: void, data: DataType, array_of_tiles_to_remove: string[]): void;

    export function remove_from_list<T>(this: void, list: T[], value: T): boolean;

    export function list_to_map<T extends string | number | symbol>(this: void, list: T[]): Record<T, true>;

    export function normalize_recipe_product<T extends prototype.ProductPrototype>(this: void, raw_product: T): T;

    export function normalize_recipe_products(this: void, recipe: prototype.RecipePrototype): prototype.ProductPrototype[];

    /**
     * Returns the normalized main product or nil if the recipe definition is invalid or there is no main product
     */
    export function get_recipe_main_product(this: void, recipe: prototype.RecipePrototype, normalized_products: prototype.ProductPrototype[]): prototype.ProductPrototype;

    export function is_sprite_def(this: void, array: any): array is prototype.AnimationPrototype | prototype.SpriteParameters;

    /**
     * Recursively tint all sprite definitions in the given table.
     * If `tint` is `false`, all tinting will be removed
     */
    export function recursive_tint(this: void, array: Array<prototype.AnimationPrototype | prototype.SpriteParameters>, tint: prototype.Color | false): Array<prototype.AnimationPrototype | prototype.SpriteParameters>
}