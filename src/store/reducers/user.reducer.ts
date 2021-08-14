import { Reducer } from "redux";
import {
	CURRENT_SELECTED_USER_ERROR,
	CURRENT_SELECTED_USER_ID,
	CURRENT_SELECTED_USER_ID_COMPLETED,
	ME_FETCHED,
	ME_LOGIN_COMPLETED,
	ME_UPDATE,
	USERS_ALL,
	USERS_ALL_COMPLETED,
} from "../actions/actions.constants";

import User from "../../models/User.model";
import { EntityState } from "../base/EntityState";
import { addMany, addOne } from "../base/base.reducer";

export interface UserState extends EntityState<User> {}

const intialState: UserState = {
	byId: {},
};

export const userReducer: Reducer<UserState> = (
	state = intialState,
	action
) => {
	switch (action.type) {
		case ME_LOGIN_COMPLETED:
		case ME_FETCHED:
		case ME_UPDATE:
			const user = action.payload as User;
			return addOne(state, user) as UserState;
		case USERS_ALL:
			return { ...state, loadingList: true };
		case USERS_ALL_COMPLETED:
			const users = action.payload as User[];
			const newStates = addMany(state, users) as UserState;
			return { ...newStates, loadingList: false };
		case CURRENT_SELECTED_USER_ID:
			const id = action.payload as number;
			return { ...state, currentId: id, loadingOne: true };
		case CURRENT_SELECTED_USER_ID_COMPLETED:
			const curUser = action.payload as User;
			const newState = addOne(state, curUser) as UserState;
			return { ...newState, loadingOne: false };
		case CURRENT_SELECTED_USER_ERROR:
			return { ...state, loadingOne: false, error: action.payload };
		default:
			return state;
	}
};
