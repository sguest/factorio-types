// https://github.com/wube/factorio-data/blob/master/core/lualib/math2d.lua
declare module "math2d" {
    export const projection_constant = 0.7071067811865;

    export const vector: {
        from_orientation(this: void, orientation: number, length: number): runtime.Vector;
        to_orientation(this: void, vec: runtime.Vector): number;
        length(this: void, vec: runtime.Vector): number;
        projected(this: void, vec: runtime.Vector): runtime.Vector;
    }

    export const position: {
        /**
         * Takes a position that might be either a two element array, or a table
         * with x and y keys, and returns a position with x and y keys.
         */
        ensure_xy(this: void, pos: runtime.MapPosition): { x: number, y: number };
        distance_squared(this: void, p1: runtime.MapPosition, p2: runtime.MapPosition): number;
        distance(this: void, p1: runtime.MapPosition, p2: runtime.MapPosition): number;
        rotate_vector(this: void, vector: runtime.Vector, angle_in_deg: number): runtime.Vector;
        subtract(this: void, p1: runtime.MapPosition, p2: runtime.MapPosition): runtime.MapPosition;
        add(this: void, p1: runtime.MapPosition, p2: runtime.MapPosition): runtime.MapPosition;
        multiply_scalar(this: void, vec: runtime.Vector, scalar: number): runtime.Vector;
        divide_scalar(this: void, vec: runtime.Vector, scalar: number): runtime.Vector;
        vector_length(this: void, vec: runtime.Vector): number;
        get_normalized(this: void, vec: runtime.Vector): runtime.Vector;
    }

    export const bounding_box: {
        /**
         * Takes a bounding box with positions that might be either two element arrays, or tables
         * with x and y keys, and returns a bounding box with positions with x and y keys
         */
        ensure_xy(this: void, bounding_box: runtime.BoundingBox): {left_top: {x : number, y: number}, right_bottom: {x: number, y: number}};
        get_centre(this: void, box: runtime.BoundingBox): runtime.MapPosition;
        contains_point(this: void, box: runtime.BoundingBox, point: runtime.MapPosition): boolean;
        contains_box(this: void, box: runtime.BoundingBox, other: runtime.BoundingBox): boolean;
        collides_with(this: void, box1: runtime.BoundingBox, box2: runtime.BoundingBox): boolean;
        create_from_centre(this: void, centre: runtime.MapPosition, width: number, height: number): runtime.BoundingBox;
    }
}