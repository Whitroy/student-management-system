import { bindActionCreators } from "redux";
import { store } from "../store";
import {
	currentSelectedGroupCompletedAction,
	currentSelectedGroupAction,
	queryAction,
	queryCompleted,
	currentSelectedGroupErrorAction,
} from "../actions/group.action";

export const groupActions = bindActionCreators(
	{
		query: queryAction,
		queryCompleted: queryCompleted,
		selectedGroupId: currentSelectedGroupAction,
		selectedGroup: currentSelectedGroupCompletedAction,
		selectedGroupError: currentSelectedGroupErrorAction,
	},
	store.dispatch
);
