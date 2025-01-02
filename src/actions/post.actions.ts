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

export const createNote = async (title: string | null, content: string, id: string): Promise<boolean> => {
	try {
		const noteCreated = await client.post(
			`/notes/`,
			{
				title: title,
				content: content,
				postId: id,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return noteCreated.data.success || false;
	} catch (error) {
		throw error as AxiosError;
	}
};
export const editNote = async (title: string | null, content: string, id: string): Promise<boolean> => {
	try {
		const noteEdited = await client.patch(
			`/notes/${id}`,
			{
				content: content,
				title: title,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		return noteEdited.data.success || false;
	} catch (error) {
		throw error as AxiosError;
	}
};
export const addComment = async (comment: string, id: string): Promise<boolean> => {
	try {
		const commentAdded = await client.post(
			`/comments/`,
			{
				content: comment,
				postId: id,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return commentAdded?.data?.success || false;
	} catch (error) {
		throw error as AxiosError;
	}
};