///////Worked On
import client from "@/lib/axios";
export const publishArticle = async (formData: FormData) => {
	try {
		const response = await client.post("/posts/", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data.data.slug;
	} catch (err) {
		console.error("Error:", err);
	}
};

export const saveAsDraft = async (formData: FormData) => {
	try {
		await client.post("/posts/", formData, {
			headers: {
				Accept: "/*",
				"Content-Type": "multipart/form-data",
			},
		});
	} catch (error) {
		console.log(error);
	}
};
