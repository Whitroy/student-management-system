import axios from "axios"
import User from "../models/User.model";

const { BASE_URL } = require("./Config.json");

interface MeRespone{
    data: User;
}
export const me = async () => {
    const url = BASE_URL + "/me";
    const response = await axios.get<MeRespone>(url,{
        headers: { Authorization: localStorage.getItem("login_token") }});
    return response.data.data;
}