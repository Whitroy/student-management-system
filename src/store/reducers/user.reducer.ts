import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";

import User from "../../models/User.model";

export interface UserState{
    userCollection : {[id:number] : User}
}

const intialState: UserState = {
    userCollection: {},
}

export const userReducer: Reducer<UserState> = (state = intialState, action) => {
    switch (action.type) {
        case ME_LOGIN:
        case ME_FETCH:
            const user = action.payload as User;
            return { ...state, userCollection: { ...state.userCollection, [user.id]: user } };
        default:
            return state;
    }
}