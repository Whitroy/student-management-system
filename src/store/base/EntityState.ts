import { Entity } from "../../models/entity";

export interface EntityState<T extends Entity = Entity> {
	byId: { [id: number]: T };
	loadingList?: boolean;
	loadingOne?: boolean;
	error?: string;
	currentId?: number;
}
