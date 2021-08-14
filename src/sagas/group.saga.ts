import { AnyAction } from "redux";
import {
	put,
	call,
	delay,
	takeLatest,
	all,
	takeEvery,
} from "redux-saga/effects";
import { loginAPI } from "../api/Auth.api";
import { fetchGroupAPI, fetchGroupsAPI } from "../api/Group.api";
import { fetchUserAPI, fetchUsersAPI, meAPI } from "../api/User.api";
import Group from "../models/Group.model";
import User from "../models/User.model";
import {
	CURRENT_SELECTED_GROUP_ID,
	CURRENT_SELECTED_USER_ID,
	GROUP_QUERY,
	ME_FETCH,
	ME_LOGIN,
	USERS_ALL,
} from "../store/actions/actions.constants";
import {
	meFetchedAction,
	meLoginErrorAction,
} from "../store/actions/auth.actions";
import {
	currentSelectedGroupCompletedAction,
	currentSelectedGroupErrorAction,
	queryCompleted,
} from "../store/actions/group.action";
import {
	allUserListCompletedAction,
	currentSelectedUserErrorAction,
	currentSelectedUserIDCompletedAction,
} from "../store/actions/user.actions";

function* fetchUser(action: AnyAction): Generator<any> {
	const id = action.payload as number;

	try {
		const user = yield call(fetchUserAPI, id);
		yield put(currentSelectedUserIDCompletedAction(user as User));
	} catch (error) {
		const errorMessage =
			error.response?.data?.message || "Something went wrong!";
		yield put(currentSelectedUserErrorAction(errorMessage));
	}
}

function* fetchUsers(action: AnyAction): Generator<any> {
	const users = yield call(fetchUsersAPI);
	yield put(allUserListCompletedAction(users as User[]));
}

function* login(action: AnyAction): Generator<any> {
	const { email, password } = action.payload as {
		email: string;
		password: string;
	};

	try {
		const user = yield call(loginAPI, { email, password });
		yield put(meFetchedAction(user as User));
	} catch (error) {
		const errorMessage =
			error.response?.data?.message || "Something went wrong!";
		yield put(meLoginErrorAction(errorMessage));
	}
}

function* fetchME(action: AnyAction): Generator<any> {
	const user = yield call(meAPI);

	yield put(meFetchedAction(user as User));
}

function* fetchGroups(action: AnyAction): Generator<any> {
	yield delay(300);
	console.log("Query Changed!");

	const groupResponse: any = yield call(fetchGroupsAPI, {
		query: action.payload,
		status: "all-groups",
	});
	yield put(queryCompleted(action.payload, groupResponse.data.data));
}

function* fetchGroup(action: AnyAction): Generator<any> {
	try {
		const group: any = yield call(fetchGroupAPI, { id: action.payload });
		yield put(currentSelectedGroupCompletedAction(group as Group));
	} catch (error) {
		const errorMessage =
			error.response?.data?.message || "Something went wrong!";
		yield put(currentSelectedGroupErrorAction(errorMessage));
	}
}

export function* fetchGroupSaga() {
	console.log("Middle-wale saga called");
	yield all([
		takeLatest(GROUP_QUERY, fetchGroups),
		takeEvery(ME_LOGIN, login),
		takeEvery(ME_FETCH, fetchME),
		takeEvery(CURRENT_SELECTED_GROUP_ID, fetchGroup),
		takeEvery(CURRENT_SELECTED_USER_ID, fetchUser),
		takeEvery(USERS_ALL, fetchUsers),
	]);
}
