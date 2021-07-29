import axios from "axios";
import Group from "../models/Group.model";

const { BASE_URL } = require('./Config.json');

interface GroupRequest{
    limit?: number;
    offset?: number;
    query?: string;
    status:"all-groups"
}

interface GroupResponse{
    data: Group[];
}


export const fetchGroup = async (data?: GroupRequest) => {
    
    const url = BASE_URL + "/groups";
    const response = await axios.get<GroupResponse>(url, {
        params: data ? data : { status: "all-groups" },
        // headers: { Authorization: localStorage.getItem("login_token") }
    });
    return response.data.data;
}