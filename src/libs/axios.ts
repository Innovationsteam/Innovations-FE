import axios from "axios";

const client = axios.create({
	baseURL: "https://christianwritesbe.onrender.com",
	// withCredentials:true,
});

export default client;
