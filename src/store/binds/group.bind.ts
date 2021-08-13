import { bindActionCreators } from "redux";
import { store } from "../store";
import {
	addCurrentSelectedGroupAction,
	currentSelectedGroupAction,
	queryAction,
	queryCompleted,
} from "../actions/group.action";

export const groupActions = bindActionCreators(
	{
		query: queryAction,
		queryCompleted: queryCompleted,
		selectedGroupId: currentSelectedGroupAction,
		selectedGroup: addCurrentSelectedGroupAction,
	},
	store.dispatch
);
