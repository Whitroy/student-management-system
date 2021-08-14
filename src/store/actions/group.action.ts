import Group from "../../models/Group.model";
import {
	CURRENT_SELECTED_GROUP_ID_COMPLETED,
	CURRENT_SELECTED_GROUP_ID,
	GROUP_QUERY,
	GROUP_QUERY_COMPLETED,
	CURRENT_SELECTED_GROUP_ERROR,
} from "./actions.constants";

export const queryAction = (query: string) => ({
	type: GROUP_QUERY,
	payload: query,
});
export const queryCompleted = (query: string, groups: Group[]) => ({
	type: GROUP_QUERY_COMPLETED,
	payload: { query, groups },
});

export const currentSelectedGroupAction = (id: number) => ({
	type: CURRENT_SELECTED_GROUP_ID,
	payload: id,
});

export const currentSelectedGroupCompletedAction = (group: Group) => ({
	type: CURRENT_SELECTED_GROUP_ID_COMPLETED,
	payload: group,
});

export const currentSelectedGroupErrorAction = (error: string) => ({
	type: CURRENT_SELECTED_GROUP_ERROR,
	payload: error,
});
