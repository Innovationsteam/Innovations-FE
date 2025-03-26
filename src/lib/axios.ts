import axios from "axios";
import axiosThrottle from "axios-request-throttle";
const isBrowser = typeof window !== "undefined";

const API_URL = isBrowser ? import.meta.env.VITE_API_URL : process.env.VITE_API_URL;

const getAuthToken = () => {
	if (isBrowser) {
		return document.cookie
			.split("; ")
			.find((row) => row.startsWith("access_token="))
			?.split("=")[1];
	} else {
		return process.env.ACCESS_TOKEN;
	}
};
// Create axios instance
const client = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 30000,
});

// Apply axios throttle to limit requests
axiosThrottle.use(client, {
	requestsPerSecond: 5,
});
// Add request interceptor for authentication
client.interceptors.request.use(
	(config) => {
		const token = getAuthToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default client;
