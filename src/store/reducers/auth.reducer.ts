import { Reducer } from "redux";
import {
	ME_FETCHED,
	ME_LOGIN,
	ME_LOGIN_COMPLETED,
	ME_LOGIN_ERROR,
} from "../actions/actions.constants";

import User from "../../models/User.model";

export interface AuthState {
	userID?: number;
	loading?: boolean;
	error?: string;
}

const intialState: AuthState = {};

export const authReducer: Reducer<AuthState> = (
	state = intialState,
	action
) => {
	switch (action.type) {
		case ME_LOGIN:
			return { ...state, loading: true };
		case ME_LOGIN_COMPLETED:
		case ME_FETCHED:
			const user = action.payload as User;
			return { ...state, userID: user.id, loading: false, error: undefined };
		case ME_LOGIN_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
