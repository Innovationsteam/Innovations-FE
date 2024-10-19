import axios from "axios";

const token = sessionStorage.getItem("token");
export const axiosInstance = axios.create({
	baseURL: "https://christianwritesbe.onrender.com",
	// withCredentials: true
});
