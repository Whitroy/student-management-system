import { AnyAction } from "redux";
import { takeEvery, put, call } from "redux-saga/effects";
import { fetchGroupsAPI } from "../api/Group.api";
import { GROUP_QUERY } from "../store/actions/actions.constants";
import { queryCompleted } from "../store/actions/group.action";
function* fetchGroups(action: AnyAction): Generator<any> {
	console.log("Query Changed!");
	const groups: any = yield call(fetchGroupsAPI, {
		query: action.payload,
		status: "all-groups",
	});
	yield put(queryCompleted(action.payload, groups));
}

export function* fetchGroupSaga() {
	console.log("Middle-wale saga called");
	yield takeEvery(GROUP_QUERY, fetchGroups);
}
