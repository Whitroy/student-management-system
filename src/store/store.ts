import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleWare } from "../sagas";
import { fetchGroupSaga } from "../sagas/group.saga";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/group.reducer";
import { uiReducer } from "./reducers/ui.reducer";
import { userReducer } from "./reducers/user.reducer";

const reducer = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	groups: groupReducer,
	user: userReducer,
});

export type AppData = ReturnType<typeof reducer>;

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(fetchGroupSaga);

export const useAppSelector: TypedUseSelectorHook<AppData> = useSelector;
