import {createSelector} from "reselect"
import { authSelector, userSelector } from "./app.selectors";

const userCollectionSelector = createSelector([userSelector], (userState) => userState.userCollection);

const meIdSelector = createSelector([authSelector], (authState) => authState.userID);

export const meSelector = createSelector([meIdSelector,userCollectionSelector], (id,byId) => {
    return id === undefined ? undefined : byId[id];
});