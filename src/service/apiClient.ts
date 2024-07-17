import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://writers-platform.onrender.com/api",
});
