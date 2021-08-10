import axios, { Canceler } from "axios";
import { fetchGroupsAPI, GroupRequest } from "../api/Group.api";
import { groupActions } from "../store/actions/group.bind";

let canceler: Canceler | undefined;

export const fetchGroups = (data: GroupRequest) => {
	const query = data.query!;

	canceler && canceler();

	console.log("middle ware called");

	groupActions.query(query);

	const { cancel, token } = axios.CancelToken.source();
	canceler = cancel;
	fetchGroupsAPI(data, token)
		.then((groups) => {
			console.log("Group fetched!");
			groups && groupActions.queryCompleted(data.query!, groups);
			canceler = undefined;
		})
		.catch((error) => console.log(error.message));
};
