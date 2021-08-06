import { TypedUseSelectorHook, useSelector } from "react-redux";
import {combineReducers,createStore } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/group.reducer";
import { uiReducer } from "./reducers/ui.reducer";
import { userReducer } from "./reducers/user.reducer";

const reducer = combineReducers(
    {
        auth: authReducer,
        ui: uiReducer,
        groups: groupReducer,
        user: userReducer
});

export type AppData = ReturnType<typeof reducer>;

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const useAppSelector: TypedUseSelectorHook<AppData> = useSelector;