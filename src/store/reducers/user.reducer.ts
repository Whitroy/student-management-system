import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN, ME_UPDATE } from "../actions/actions.constants";

import User from "../../models/User.model";
import { EntityState } from "../base/EntityState";
import { addOne } from "../base/base.reducer";

export interface UserState extends EntityState<User> {}

const intialState: UserState = {
	byId: {},
};

export const userReducer: Reducer<UserState> = (
	state = intialState,
	action
) => {
	switch (action.type) {
		case ME_LOGIN:
		case ME_FETCH:
		case ME_UPDATE:
			const user = action.payload as User;
			return addOne(state, user) as UserState;
		default:
			return state;
	}
};
