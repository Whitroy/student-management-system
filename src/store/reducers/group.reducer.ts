import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../actions/actions.constants";
import Group from "../../models/Group.model";
import { EntityState } from "../base/EntityState";
import { addMany, getIds } from "../base/base.reducer";

export interface GroupState extends EntityState<Group>{
    query: string;
    groupCollections: { [query: string]: number[] };
}

const intialState : GroupState = {
    query: "",
    groupCollections: {},
    byId:{}
};

export const groupReducer: Reducer<GroupState> = (state = intialState, action) => {
    switch (action.type) {
        case GROUP_QUERY:
            return { ...state, query: action.payload };
        case GROUP_QUERY_COMPLETED:

            const groups: Group[] = action.payload.groups as Group[];
            const groupIds = getIds(groups);
            const newState = addMany(state, groups) as GroupState;
            // const groups: Group[] = action.payload.groups as Group[];
            // const groupIds = groups.map((value) => value.id);
            
            // const normalizeGroup = groups.reduce((prev, group) => ({...prev, [group.id]:group}), { }) ;

            return {
                ...newState, groupCollections: { ...state.groupCollections, [action.payload.query]: groupIds }
            };
        default:
            return state;
    }
}