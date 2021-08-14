import { createSelector } from "reselect";
import { userSelector } from "./app.selectors";
import { meIdSelector } from "./auth.selectors";

const userCollectionSelector = createSelector(
	[userSelector],
	(userState) => userState.byId
);

export const meSelector = createSelector(
	[meIdSelector, userCollectionSelector],
	(id, byId) => {
		return id === undefined ? undefined : byId[id];
	}
);

export const currentUserIDSelector = createSelector(
	[userSelector],
	(userState) => userState.currentId
);

export const currentUserSelector = createSelector(
	[currentUserIDSelector, userCollectionSelector],
	(id, byId) => {
		return id !== undefined ? byId[id] : undefined;
	}
);

export const currentUserErrorSelector = createSelector(
	[userSelector],
	(userState) => userState.error
);

export const userLoadingOneSelector = createSelector(
	[userSelector],
	(userState) => userState.loadingOne
);

export const userLoadingAllSelector = createSelector(
	[userSelector],
	(userState) => userState.loadingList
);

export const userAllSelector = createSelector(
	[userCollectionSelector, meIdSelector],
	(byId, meId) => {
		const ids = Object.keys(byId);
		const withoutMeIds: number[] = [];

		for (let index = 0; index < ids.length; index++) {
			const id = +ids[index];
			if (id === meId) continue;
			withoutMeIds.push(id);
		}
		return withoutMeIds.map((id) => byId[id]);
	}
);
