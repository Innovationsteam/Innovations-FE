///////Worked On
import  client  from "@/lib/axios";

import { asDraft } from "@/types/post.types";
export const publishArticle = async (data: any, Hash: string) => {
	const formData = new FormData();
	formData.append("title", data?.article);
	formData.append("content", data?.articlebody.join(""));
	formData.append("category", Hash);
	formData.append("image", data?.url);
	formData.append("hashtags", Hash);
	formData.append("status", "published");
	console.log("Data meant", formData);
	try {
		const response = await client.post("/posts/", formData, {
			headers: {
				Accept: "/*",
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data.data.id;
	} catch (err) {
		console.error("Error:", err);
	}
};

export const saveAsDraft = async ({ title, content, img }: asDraft) => {
	const formData = new FormData();
	formData.append("title", title);
	formData.append("content", content.join(""));
	formData.append("category", "#");
	formData.append("image", img || "#");
	formData.append("hashtags", "");
	console.log("Data meant", formData);
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
