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
