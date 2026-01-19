// https://github.com/wube/factorio-data/blob/master/core/lualib/resource-autoplace.lua
declare module "resource-autoplace" {
    /**
     * Indicate that a patch set exists and optionally that it also needs a separate starting patch set.
     * Call this to initialize patch sets' indexes in a more deterministic order
     * (see resources.lua for an example) before calling resource_autoplace_settings.
     */
    export function initialize_patch_set(this: void, patch_set_name: string, has_starting_area_placement: boolean, autoplace_set_name: string): void

    /**
     * Creates and returns an AutoplaceSpecification that will generate spot-based ore patches.
     * @param params.name name for the type, used as the default autoplace control name and patch set name (each of which can be overridden separately)
     * @param params.base_density amount of stuff, on average, to be placed per tile
     * @param params.patch_set_name name of the patch set; patches sets of the same name and seed1 will overlap; default: name
     * @param params.autoplace_control_name name of the corresponding autoplace control; default: name
     * @param params.random_probability probability of placement at any given tile within a patch; default: 1
     * @param params.base_spots_per_km2 number of patches per square kilometer near the starting area
     * @param params.has_starting_area_placement true|false|nil - yes, no, and there is no special starting area, respectively
     * @param params.seed1 random seed to use when generating patch positions; default: 100
     */
    export function resource_autoplace_settings(this: void, params: {
        name: string,
        base_density: number,
        patch_set_name?: string,
        autoplace_control_name?: string,
        random_probability?: number,
        base_spots_per_km2?: number,
        has_starting_area_placement?: boolean | null,
        seed1?: number,
    }): {
        order: string,
        probability_expression: string,
        richness_expression: string,
    }
}