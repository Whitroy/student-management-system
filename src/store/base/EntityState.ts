import { Entity } from "./entity";

export interface EntityState<T extends Entity>{
    byId: { [id: number]: T }
}