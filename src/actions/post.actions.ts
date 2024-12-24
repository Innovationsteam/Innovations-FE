import client from "@/lib/axios";
import { AxiosError } from "axios";

export const likePost = async (postId: string): Promise<string> => {
	try {
		const res = await client.post(`/posts/like/${postId}`);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
