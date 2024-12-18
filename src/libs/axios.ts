import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL

export const client = axios.create({
	baseURL: baseURL,
	// withCredentials:true,
});

// export const token = sessionStorage.getItem("myToken");
function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
    }

    return null;
}

export const token = getCookie("token");
