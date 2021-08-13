import { LoginData } from "../../api/Auth.api";
import User from "../../models/User.model";
import {
	ME_FETCH,
	ME_FETCHED,
	ME_LOGIN,
	ME_LOGIN_COMPLETED,
	ME_LOGIN_ERROR,
	ME_UPDATE,
} from "./actions.constants";

export const meFetchAction = () => {
	return { type: ME_FETCH };
};

export const meFetchedAction = (user: User) => {
	return { type: ME_FETCHED, payload: user };
};

export const meLoginAction = (loginData: LoginData) => {
	return { type: ME_LOGIN, payload: loginData };
};

export const meLoginCompleted = (user: User) => {
	return { type: ME_LOGIN_COMPLETED, payload: user };
};

export const meLoginErrorAction = (message: string) => {
	return { type: ME_LOGIN_ERROR, payload: message };
};

export const meUpdateAction = (user: User) => {
	return { type: ME_UPDATE, payload: user };
};
