import User from "../../models/User.model";
import {
	CURRENT_SELECTED_USER_ERROR,
	CURRENT_SELECTED_USER_ID,
	CURRENT_SELECTED_USER_ID_COMPLETED,
	USERS_ALL,
	USERS_ALL_COMPLETED,
} from "./actions.constants";

export const currentSelectedUserIDAction = (id: number) => ({
	type: CURRENT_SELECTED_USER_ID,
	payload: id,
});

export const currentSelectedUserIDCompletedAction = (user: User) => ({
	type: CURRENT_SELECTED_USER_ID_COMPLETED,
	payload: user,
});

export const currentSelectedUserErrorAction = (error: string) => ({
	type: CURRENT_SELECTED_USER_ERROR,
	payload: error,
});

export const allUserListAction = () => ({ type: USERS_ALL });

export const allUserListCompletedAction = (users: User[]) => ({
	type: USERS_ALL_COMPLETED,
	payload: users,
});
