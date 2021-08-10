import { Reducer } from "redux";
import {
	CURRENT_SELECTED_GROUP,
	CURRENT_SELECTED_GROUP_ID,
	GROUP_QUERY,
	GROUP_QUERY_COMPLETED,
} from "../actions/actions.constants";
import Group from "../../models/Group.model";
import { EntityState } from "../base/EntityState";
import { addMany, addOne, getIds } from "../base/base.reducer";

export interface GroupState extends EntityState<Group> {
	query: string;
	currentSelectedGroupId?: number;
	nextGroupId?: number;
	prevGroupId?: number;
	groupCollections: { [query: string]: number[] };
	loading: boolean;
}

const intialState: GroupState = {
	query: "",
	groupCollections: {},
	byId: {},
	loading: false,
};

export const groupReducer: Reducer<GroupState> = (
	state = intialState,
	action
) => {
	switch (action.type) {
		case GROUP_QUERY:
			return {
				...state,
				query: action.payload,
				loading: true,
			};
		case GROUP_QUERY_COMPLETED:
			const groups: Group[] = action.payload.groups as Group[];
			const groupIds = getIds(groups);
			const newState = addMany(state, groups) as GroupState;
			return {
				...newState,
				groupCollections: {
					...state.groupCollections,
					[action.payload.query]: groupIds,
				},
				loading: false,
			};
		case CURRENT_SELECTED_GROUP_ID:
			const id = action.payload as number;
			if (state.currentSelectedGroupId === id) return state;

			const currentQuerryGroups = state.groupCollections[state.query];
			let nextId = id;
			let prevId = id;
			//check invalid url id
			try {
				const currentIndex = currentQuerryGroups.indexOf(id);
				if (currentIndex !== 0) {
					prevId = currentQuerryGroups[currentIndex - 1];
				}

				if (currentIndex !== currentQuerryGroups.length - 1) {
					nextId = currentQuerryGroups[currentIndex + 1];
				}
			} catch (e) {
				console.log(e.message);
			} finally {
				return {
					...state,
					currentSelectedGroupId: id,
					nextGroupId: nextId,
					prevGroupId: prevId,
				};
			}
		case CURRENT_SELECTED_GROUP:
			const group: Group = action.payload as Group;
			return addOne(state, group) as GroupState;
		default:
			return state;
	}
};
