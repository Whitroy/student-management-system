import { createSelector } from 'reselect'
import { groupSelector } from './app.selectors'

export const groupQuerySelector = createSelector([groupSelector], (groupState) => {
    return groupState.query;
});

const groupCollectionSelector = createSelector([groupSelector], (groupState) => {
    return groupState.groupCollections;
});

const groupsByIdSelector = createSelector([groupSelector], (groupState) => groupState.byId);

export const groupsByQuerySelector = createSelector([groupQuerySelector,groupsByIdSelector,groupCollectionSelector],
    (query,groupCollection,queryCollection) => {
        const currentGroupIds = queryCollection[query] || [];
	    const currentGroup = currentGroupIds.map(
		    (groupId) => groupCollection[groupId]
        );
	    return currentGroup;
    });
