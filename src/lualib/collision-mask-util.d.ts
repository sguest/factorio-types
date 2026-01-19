declare module "collision-mask-util" {
    export function get_default_mask(this: void, type: string): prototype.CollisionMaskConnector;

    export function get_mask(
        this: void,
        entity_prototpe: { collision_mask: prototype.CollisionMaskConnector, type: string }): prototype.CollisionMaskConnector;

    export function masks_collide(this: void, mask1: prototype.CollisionMaskConnector, mask2: prototype.CollisionMaskConnector): boolean;

    export function masks_are_same(this: void, mask1: prototype.CollisionMaskConnector, mask2: prototype.CollisionMaskConnector): boolean;

    export function collect_prototypes_with_mask(this: void, mask: prototype.CollisionMaskConnector): prototype.AnyPrototype[];

    export function collect_prototypes_with_layer(this: void, layer: prototype.CollisionLayerID): prototype.AnyPrototype[];

    export function collect_prototypes_colliding_with_mask(this: void, mask: prototype.CollisionMaskConnector): prototype.AnyPrototype[];

    export function replace_layer_in_all_prototypes(this: void, old_name: prototype.CollisionLayerID, new_name: prototype.CollisionLayerID): void;

    export function new_mask(this: void): prototype.CollisionMaskConnector;

    export function migrate_from_before_1_2_0(this: void, old_mask: Record<prototype.CollisionLayerID, true>): prototype.CollisionMaskConnector; 
}