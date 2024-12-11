import axios from "axios";

export const client = axios.create({
	baseURL: "https://christianwritesbe.onrender.com",
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
