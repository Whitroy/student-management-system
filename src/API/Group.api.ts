import axios from "axios";
import Group from "../models/Group.model";

const { BASE_URL } = require("./Config.json");

interface GroupRequest {
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

export const fetchGroups = async (data?: GroupRequest) => {
	const url = BASE_URL + "/groups";
	const response = await axios.get<GroupResponse>(url, {
		params: data ? data : { status: "all-groups" },
		headers: { Authorization: localStorage.getItem("login_token") },
	});
	return response.data.data;
};

export const fetchGroup = async (data: IndiGroupRequest) => {
	const url = BASE_URL + "/groups/" + data.id;
	const response = await axios.get<IndiGroupResponse>(url, {
		params: data,
		headers: { Authorization: localStorage.getItem("login_token") },
	});
	return response.data.data;
};
