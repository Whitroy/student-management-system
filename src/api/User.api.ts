import axios from "axios";
import User from "../models/User.model";
import { BASE_URL } from "./base.api";

interface MeRespone {
	data: User;
}
export const meAPI = async () => {
	const url = BASE_URL + "/me";
	const response = await axios.get<MeRespone>(url);
	return response.data.data;
};

export const meUpdateAPI = async (data: any) => {
	const url = BASE_URL + "/me";
	const response = await axios.put(url, data);
	return response.data.data;
};

export const fetchUserAPI = async (id: number) => {
	const url = BASE_URL + "/people/" + id;
	const response = await axios.get(url);
	return response.data.data;
};

export const fetchUsersAPI = async () => {
	const url = BASE_URL + "/people";
	const response = await axios.get(url);
	return response.data.data;
};
