import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction,createStore,Reducer } from "redux";
import Group from "../models/Group.model";
import User from "../models/User.model";

interface AppData{
    me?: User;
    isSideBarOpen: boolean;

    queryString: string;
    groupCollections: { [query: string]: number[] };
    allGroups: { [groupId: number]: Group };
}

const intialState : AppData = {
    me: undefined,
    isSideBarOpen: true,

    queryString: "",
    groupCollections: {},
    allGroups:{},
};

const reducer:Reducer<AppData> = (currentState = intialState,dispatchedAction:AnyAction) => {
    switch (dispatchedAction.type) {
        case "me":
        case "me/login":
            return { ...currentState, me: dispatchedAction.payload };
        case "sidebar":
            return { ...currentState, isSideBarOpen: !currentState.isSideBarOpen };
        case "group/search":
            return { ...currentState, queryString: dispatchedAction.payload };
        case "group/search/complete":
            const groups: Group[] = dispatchedAction.payload.group as Group[];
            const groupIds = groups.map((value) => value.id);
            
            const normalizeGroup = groups.reduce((prev, group) => ({...prev, [group.id]:group}), { });

            return {
                ...currentState, groupCollections: { ...currentState.groupCollections, [dispatchedAction.payload.query]: groupIds },
                allGroups :{...currentState.allGroups,...normalizeGroup}
            };
        default:
            return currentState;
    }
}

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const useAppSelector: TypedUseSelectorHook<AppData> = useSelector;