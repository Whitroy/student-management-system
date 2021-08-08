import { Entity } from "../../models/entity";

export interface EntityState<T extends Entity = Entity>{
    byId: { [id: number]: T }
}