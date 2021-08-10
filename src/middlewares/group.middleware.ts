import { fetchGroupsAPI, GroupRequest } from "../api/Group.api";
import { groupActions } from "../store/actions/group.action";
import { groupCollectionSelector } from "../store/selectors/group.selectors";
import { store } from "../store/store";

export const fetchGroups = (data: GroupRequest) => {
	const queryCollection = groupCollectionSelector(store.getState());
	const query = data.query!;
	groupActions.query(query, queryCollection[query] ? false : true);
	if (queryCollection[query]) return;

	console.log("middle ware called");

	fetchGroupsAPI(data)
		.then((groups) => {
			console.log("Group fetched!");
			groupActions.queryCompleted(data.query!, groups);
		})
		.catch((error) => console.log(error.message));
};
