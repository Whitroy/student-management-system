import axios from "axios";

const { LOGIN_TOKEN_KEY } = require('./Config.json');

axios.interceptors.request.use((config) => {

    const token = localStorage.getItem(LOGIN_TOKEN_KEY);
    if (!token) {
        return config;
    }

    console.log("interceptor is running");

    const d = { ...config, headers: { ...config.headers, Authorization: token } };
    console.log(d);
    return d;
});

axios.interceptors.response.use(undefined, (error) => {
    if (error.response.data.code === 9101) {
        localStorage.removeItem(LOGIN_TOKEN_KEY);
        window.location.href= '/login';
    }

    return Promise.reject(error);
});

export default {hello:"world"}