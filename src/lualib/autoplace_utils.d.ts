// https://github.com/wube/factorio-data/blob/master/core/lualib/autoplace_utils.lua
declare module "autoplace_utils" {
    export interface AutoplacePeakValue {
        influence: number;
        richness_influence: number;
        min_influence: number;
        temperature_optimal: number;
        temperature_range: number;
        temperature_max_range: number;
        water_optimal: number;
        water_range: number;
        water_max_range: number;
    }

    export type RectangleSpecification = [[number, number], [number, number], number?];

    /**
     * Add a list of autoplace peaks based on rectangles to the table ret.
     * Rectangles is a table of rectangle specifications:
     *  {{max_temp, max_water}, {min_temp, min_water}, influence}
     * temperatures range from 35 to -25 (°C), water from 0 to 1.
     * the peak resulting from each rectangle has a preset influence
     * within the rectangle and goes to zero after 5°C or 0.1 water level outside
     * of the rectangle.
     * Influence is optional and has default value of default_influence or 1.
     */
    export function peaks(
        this: void,
        rectangles: RectangleSpecification[],
        ret: AutoplacePeakValue[],
        default_influence?: number): AutoplacePeakValue[];
}