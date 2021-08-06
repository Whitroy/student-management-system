import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";

import User from "../../models/User.model";

export interface AuthState{
    userID?: number;
}

const intialState: AuthState = {};

export const authReducer: Reducer<AuthState> = (state = intialState,action) => {
    switch (action.type) {
        case ME_LOGIN:
        case ME_FETCH:
            const user = action.payload as User;
            return { ...state, userID: user.id };
        default:
            return state;
    }
}