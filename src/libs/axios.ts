import axios from "axios";

const client = axios.create({
	baseURL: "https://writers-platform.onrender.com/api",
});

export default client;
