import { createSelector } from 'reselect'
import { groupSelector } from './app.selectors'

export const groupQuerySelector = createSelector([groupSelector], (groupState) => {
    return groupState.query;
});

const groupCollectionSelector = createSelector([groupSelector], (groupState) => {
    return groupState.groupCollections;
});

const groupsSelector = createSelector([groupSelector], (groupState) => groupState.groups);

export const groupsByQuerySelector = createSelector([groupQuerySelector,groupsSelector,groupCollectionSelector],
    (query,groupCollection,queryCollection) => {
        const currentGroupIds = queryCollection[query] || [];
	    const currentGroup = currentGroupIds.map(
		    (groupId) => groupCollection[groupId]
        );
	    return currentGroup;
    });
