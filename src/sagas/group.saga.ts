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
import { fetchGroupsAPI } from "../api/Group.api";
import { meAPI } from "../api/User.api";
import User from "../models/User.model";
import {
	GROUP_QUERY,
	ME_FETCH,
	ME_LOGIN,
} from "../store/actions/actions.constants";
import {
	meFetchedAction,
	meLoginErrorAction,
} from "../store/actions/auth.actions";
import { queryCompleted } from "../store/actions/group.action";

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

export function* fetchGroupSaga() {
	console.log("Middle-wale saga called");
	yield all([
		takeLatest(GROUP_QUERY, fetchGroups),
		takeEvery(ME_LOGIN, login),
		takeEvery(ME_FETCH, fetchME),
	]);
}
