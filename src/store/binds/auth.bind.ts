import { bindActionCreators } from "redux";
import {
	meFetchAction,
	meFetchedAction,
	meLoginAction,
	meLoginCompleted,
	meUpdateAction,
} from "../actions/auth.actions";
import { store } from "../store";

export const authActions = bindActionCreators(
	{
		login: meLoginAction,
		loginCompleted: meLoginCompleted,
		fetch: meFetchAction,
		fetched: meFetchedAction,
		update: meUpdateAction,
	},
	store.dispatch
);
