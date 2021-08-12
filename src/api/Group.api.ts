import axios, { CancelToken } from "axios";
import Group from "../models/Group.model";
import { BASE_URL } from "./base.api";

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

export const fetchGroupsAPI = async (
	data?: GroupRequest,
	token?: CancelToken
) => {
	const url = BASE_URL + "/groups";
	const response = await axios.get<GroupResponse>(url, {
		params: data ? data : { status: "all-groups" },
		cancelToken: token,
	});
	return response.data.data;
};

export const fetchGroup = async (data: IndiGroupRequest) => {
	const url = BASE_URL + "/groups/" + data.id;
	const response = await axios.get<IndiGroupResponse>(url, {
		params: data,
	});
	return response.data.data;
};
