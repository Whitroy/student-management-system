import { bindActionCreators } from "redux";
import User from "../../models/User.model";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN, ME_UPDATE } from "./actions.constants";

const meFetchAction = (user: User) => {
	return { type: ME_FETCH, payload: user };
};
const meLoginAction = (user: User) => {
	return { type: ME_LOGIN, payload: user };
};
const meUpdateAction = (user: User) => {
	return { type: ME_UPDATE, payload: user };
};

export const authActions = bindActionCreators(
	{
		login: meLoginAction,
		fetch: meFetchAction,
		update: meUpdateAction,
	},
	store.dispatch
);
