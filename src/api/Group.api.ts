import axios, { CancelToken } from "axios";
import Group from "../models/Group.model";
import { BASE_URL, get } from "./base.api";

export interface GroupRequest {
	limit?: number;
	offset?: number;
	query?: string;
	status: "all-groups";
}

interface IndiGroupRequest {
	id: number;
}

interface GroupResponse {
	data: Group[];
}

interface IndiGroupResponse {
	data: Group;
}

export const fetchGroupsAPI = (data?: GroupRequest, token?: CancelToken) => {
	console.log("Fetch api");
	const url = BASE_URL + "/groups";
	return get<GroupResponse>(url, {
		params: data ? data : { status: "all-groups" },
		cancelToken: token,
	});
};

export const fetchGroupAPI = async (data: IndiGroupRequest) => {
	const url = BASE_URL + "/groups/" + data.id;
	const response = await axios.get<IndiGroupResponse>(url, {
		params: data,
	});
	return response.data.data;
};
