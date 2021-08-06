import { bindActionCreators } from "redux";
import Group from "../../models/Group.model";
import { store } from "../store";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "./actions.constants";

const queryAction = (query: string) => ({ type: GROUP_QUERY, payload: query }) ;
const queryCompleted = (query: string, groups: Group[]) => ({ type: GROUP_QUERY_COMPLETED, payload: { query, groups } });

export const groupActions = bindActionCreators(
    {
        groupQuery: queryAction,
        groupQueryCompleted: queryCompleted
    },
    store.dispatch
);
