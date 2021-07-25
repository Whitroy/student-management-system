import axios from "axios";

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

export interface Group {
	id: number;
	name: string;
	description: string;
	group_image_url: string;
}

export const fetchGroup = async (data?: GroupRequest) => {
    
    const url = BASE_URL + "/groups";
    const request = await axios.get<GroupResponse>(url, { params: data?data : {status:"all-groups"} });
    return request.data;
}