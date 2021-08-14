import { bindActionCreators } from "redux";
import {
	allUserListAction,
	allUserListCompletedAction,
	currentSelectedUserErrorAction,
	currentSelectedUserIDAction,
	currentSelectedUserIDCompletedAction,
} from "../actions/user.actions";
import { store } from "../store";

export const userActions = bindActionCreators(
	{
		fetchAll: allUserListAction,
		fetchOne: currentSelectedUserIDAction,
		fetchAllCompleted: allUserListCompletedAction,
		fetchOneCompleted: currentSelectedUserIDCompletedAction,
		fetchOneError: currentSelectedUserErrorAction,
	},
	store.dispatch
);
