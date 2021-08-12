import axios from "axios";

export const BASE_URL = "https://api-dev.domecompass.com";
export const LOGIN_TOKEN_KEY = "login_token";

axios.interceptors.request.use((config) => {
	const token = localStorage.getItem(LOGIN_TOKEN_KEY);
	if (!token) {
		return config;
	}

	console.log("interceptor is running");

	return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
	if (error.response.data.code === 9101) {
		localStorage.removeItem(LOGIN_TOKEN_KEY);
		window.location.href = "/login";
	}

	return Promise.reject(error);
});
