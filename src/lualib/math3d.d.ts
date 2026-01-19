// https://github.com/wube/factorio-data/blob/master/core/lualib/math3d.lua

// The Vector4 type doesn't exist at runtime so the vector4 references it from prototype instead of runtime like the rest of the file
// However, this is all just math and the Vector/Vector3D types are all equivalent between prototype and runtime stages
// Therefore this is a case where mixing and matching prototype and runtime stage members is OK
declare module "math3d" {
    export const projection_constant = 0.7071067811865;

    export function project_vec3(this: void, vec3: runtime.Vector3D): runtime.Vector;

    export const vector4: {
        zero: [0, 0, 0, 0];
        dot_product(this: void, u: prototype.Vector4f, v: prototype.Vector4f): number;
        add(this: void, u: prototype.Vector4f, v: prototype.Vector4f): prototype.Vector4f;
        sub(this: void, u: prototype.Vector4f, v: prototype.Vector4f): prototype.Vector4f;
        from_vec3(this: void, u: prototype.Vector3D): prototype.Vector4f;
    }

    export const vector3: {
        zero: [0, 0, 0];
        dot_product(this: void, u: runtime.Vector3D, v: runtime.Vector3D): number;
        add(this: void, u: runtime.Vector3D, v: runtime.Vector3D): runtime.Vector3D;
        sub(this: void, u: runtime.Vector3D, v: runtime.Vector3D): runtime.Vector3D;
        mul(this: void, u: runtime.Vector3D, v: runtime.Vector3D): runtime.Vector3D;
        cross_product(this: void, u: runtime.Vector3D, v: runtime.Vector3D): runtime.Vector3D;
        angle(this: void, u: runtime.Vector3D, v: runtime.Vector3D): number;
    }

    export const vector2: {
        zero: [0, 0];
        dot_product(this: void, u: runtime.Vector, v: runtime.Vector): number;
        add(this: void, u: runtime.Vector, v: runtime.Vector): runtime.Vector;
        sub(this: void, u: runtime.Vector, v: runtime.Vector): runtime.Vector;
        mul(this: void, u: runtime.Vector, k: runtime.Vector): runtime.Vector;
        rotate(this: void, v: runtime.Vector, phi: number): runtime.Vector;
    }

    export type Matrix4x4 = [
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
        [number, number, number, number],
    ];

    export const matrix4x4: {
        identity: [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
        ];
        rotation_x(this: void, phi: number): Matrix4x4;
        rotation_y(this: void, phi: number): Matrix4x4;
        rotation_z(this: void, phi: number): Matrix4x4;
        translation(this: void, x: number, y: number, z: number): Matrix4x4;
        translation_vec3(this: void, vec3: runtime.Vector3D): Matrix4x4;
        scale(this: void, x: number, y: number, z: number): Matrix4x4;
        column(this: void, mat: Matrix4x4, index: number): [number, number, number, number];
        transpose(this: void, mat: Matrix4x4): Matrix4x4;
        mul_mat(this: void, m1: Matrix4x4, m2: Matrix4x4): Matrix4x4;
        mul_vec3(this: void, mat: Matrix4x4, vec: runtime.Vector3D): runtime.Vector3D;
        compose(this: void, list: Matrix4x4[]): Matrix4x4;
    }
}