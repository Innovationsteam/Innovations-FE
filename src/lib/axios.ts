import axios from "axios";

const client = axios.create({
	baseURL: import.meta.env.VITE_API_KEY,
	headers: {
		"Content-Type": "application/json",
		Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsInVzZXJuYW1lIjoiam9obnNvbiB0aGUgd3JpdGVyIiwic2NvcGUiOiJnbG9iYWwiLCJpYXQiOjE3MzQzNjYwOTksImV4cCI6MTczNDUzODg5OX0.oQc9IA1ljscLPKS6Q6pzRHAAythwBoVIZ1cZ8cYbQp0",
	},
	// withCredentials: true,
});

export default client;
