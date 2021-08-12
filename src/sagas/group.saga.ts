import { AnyAction } from "redux";
import { put, call, delay, takeLatest } from "redux-saga/effects";
import { fetchGroupsAPI } from "../api/Group.api";
import { GROUP_QUERY } from "../store/actions/actions.constants";
import { queryCompleted } from "../store/actions/group.action";

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
	yield takeLatest(GROUP_QUERY, fetchGroups);
}
