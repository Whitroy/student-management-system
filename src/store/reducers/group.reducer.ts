import { Reducer } from "redux";
import {
	CURRENT_SELECTED_GROUP_ID_COMPLETED,
	CURRENT_SELECTED_GROUP_ID,
	GROUP_QUERY,
	GROUP_QUERY_COMPLETED,
	CURRENT_SELECTED_GROUP_ERROR,
} from "../actions/actions.constants";
import Group from "../../models/Group.model";
import { EntityState } from "../base/EntityState";
import { addMany, addOne, getIds, setError } from "../base/base.reducer";

export interface GroupState extends EntityState<Group> {
	query: string;

	nextGroupId?: number;
	prevGroupId?: number;

	groupCollections: { [query: string]: number[] };
}

const intialState: GroupState = {
	query: "",
	groupCollections: {},
	byId: {},
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
				loadingList: true,
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
				loadingList: false,
			};
		case CURRENT_SELECTED_GROUP_ID:
			const id = action.payload as number;
			if (state.currentId === id) return state;

			const currentQueryGroups = state.groupCollections[state.query];

			let nextId = id;
			let prevId = id;
			//check invalid url id
			try {
				const currentIndex = currentQueryGroups.indexOf(id);

				if (currentIndex !== -1 && currentIndex !== 0) {
					prevId = currentQueryGroups[currentIndex - 1];
				}

				if (
					currentIndex !== -1 &&
					currentIndex !== currentQueryGroups.length - 1
				) {
					nextId = currentQueryGroups[currentIndex + 1];
				}
			} catch (e) {
				console.log(e.message);
			} finally {
				return {
					...state,
					currentId: id,
					nextGroupId: nextId,
					prevGroupId: prevId,
					loadingOne: true,
				};
			}
		case CURRENT_SELECTED_GROUP_ID_COMPLETED:
			const group: Group = action.payload as Group;
			return addOne(state, group) as GroupState;
		case CURRENT_SELECTED_GROUP_ERROR:
			return setError(state, action.payload) as GroupState;
		default:
			return state;
	}
};
