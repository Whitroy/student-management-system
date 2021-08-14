import { Entity } from "../../models/entity";
import { EntityState } from "./EntityState";

export const setLoadingOne = (state: EntityState, loading: boolean) => {
	return { ...state, loadingOne: loading };
};

export const setLoadingList = (state: EntityState, loading: boolean) => {
	return { ...state, loadingList: loading };
};

export const setError = (state: EntityState, error: string) => {
	return { ...state, error, loadingOne: false };
};

export const getIds = (entities: Entity[]) => {
	return entities.map((e) => e.id);
};

export const addOne = (state: EntityState, entity: Entity) => {
	return {
		...state,
		byId: { ...state.byId, [entity.id]: entity },
		loadingOne: false,
	};
};

export const addMany = (state: EntityState, entities: Entity[]) => {
	if (entities.length === 0) return state;

	const entityMap = entities.reduce((prev, entity) => {
		return { ...prev, [entity.id]: entity };
	}, {});

	return {
		...state,
		byId: { ...state.byId, ...entityMap },
	};
};
