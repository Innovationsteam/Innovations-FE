import axios from "axios";

export const client = axios.create({
	baseURL: "https://christianwritesbe.onrender.com/api",
	// withCredentials:true,
});

export const token = sessionStorage.getItem("myToken");