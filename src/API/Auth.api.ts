import axios from "axios";

const { BASE_URL, LOGIN_TOKEN_KEY } = require("./Config.json");

axios.interceptors.request.use((config) => {

    const token = localStorage.getItem(LOGIN_TOKEN_KEY);
    
    if (!token) {
        return config;
    }

    return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
    if (error.response.data.code === 9101) {
        localStorage.removeItem(LOGIN_TOKEN_KEY);
        window.location.href= '/login';
    }

    return Promise.reject(error);
});

interface LoginData{
    email: string;
    password: string;
}

interface LoginResponse{
    data: {
        is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
}

interface User{
    first_name: string;
    middle_name: string;
    last_name: string;
    role: "staff" | "admin";
    hometown: "Ghaziabad";
    phone_number: string;
}

export const login = async (data: LoginData) => {

    const url = BASE_URL + "/login";

    const request = await axios.post<LoginResponse>(url, data);

    localStorage.setItem(LOGIN_TOKEN_KEY, request.data.token);

    return request.data;
}


export const logOut = () => {
    
    localStorage.removeItem(LOGIN_TOKEN_KEY);

}