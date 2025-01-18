import axios from "axios";

const client = axios.create({
	baseURL: import.meta.env.VITE_API_KEY,
	headers: {
		"Content-Type": "application/json",
	},
	// withCredentials: true,
});

// Helper function to get a cookie by name
const getCookie = (name: string): string | undefined => {
	const cookieString = document.cookie;
	const cookies = cookieString.split("; ");
	for (const cookie of cookies) {
		const [key, value] = cookie.split("=");
		if (key === name) {
			return decodeURIComponent(value);
		}
	}
	return undefined;
};

client.interceptors.request.use(
	(config) => {
		// Retrieve the token from the cookie
		const token = getCookie("access_token"); // Replace with your cookie name
		// If the token exists, add it to the Authorization header
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
