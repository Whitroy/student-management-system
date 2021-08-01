import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction,createStore,Reducer } from "redux";
import Group from "../models/Group.model";
import User from "../models/User.model";

interface AppData{
    me?: User;
    groups: Group[];
    isSideBarOpen: boolean;
}

const intialState : AppData = {
    me: undefined,
    groups: [],
    isSideBarOpen:true,
};

const reducer:Reducer<AppData> = (currentState = intialState,dispatchedAction:AnyAction) => {
    switch (dispatchedAction.type) {
        case "me":
        case "me/login":
            return { ...currentState, me: dispatchedAction.payload };
        case "sidebar":
            return { ...currentState, isSideBarOpen: !currentState.isSideBarOpen };
        case "group/set":
            return { ...currentState, groups: dispatchedAction.payload };
        default:
            return currentState;
    }
}

export const store = createStore(reducer);

export const useAppSelector: TypedUseSelectorHook<AppData> = useSelector;