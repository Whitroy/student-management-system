import { bindActionCreators } from "redux";
import Group from "../../models/Group.model";
import { store } from "../store";
import {
	CURRENT_SELECTED_GROUP,
	CURRENT_SELECTED_GROUP_ID,
	GROUP_QUERY,
	GROUP_QUERY_COMPLETED,
} from "./actions.constants";

const queryAction = (query: string) => ({
	type: GROUP_QUERY,
	payload: query,
});
const queryCompleted = (query: string, groups: Group[]) => ({
	type: GROUP_QUERY_COMPLETED,
	payload: { query, groups },
});

const currentSelectedGroupAction = (id: number) => ({
	type: CURRENT_SELECTED_GROUP_ID,
	payload: id,
});

const addCurrentSelectedGroupAction = (group: Group) => ({
	type: CURRENT_SELECTED_GROUP,
	payload: group,
});

export const groupActions = bindActionCreators(
	{
		query: queryAction,
		queryCompleted: queryCompleted,
		selectedGroupId: currentSelectedGroupAction,
		selectedGroup: addCurrentSelectedGroupAction,
	},
	store.dispatch
);
