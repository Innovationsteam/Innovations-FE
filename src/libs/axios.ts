import axios from "axios";

const client = axios.create({
	baseURL: import.meta.env.VITE_API_KEY,
	headers: {
		"Content-Type": "application/json",
		withCredentials: true,
	},
});

export default client;
