import axios from "axios";

export const client = axios.create({
	baseURL: "https://christianwritesbe.onrender.com",
	// withCredentials:true,
});

export const token = sessionStorage.getItem("myToken");