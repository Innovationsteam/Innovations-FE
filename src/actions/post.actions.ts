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

export const createNote = async (payload: { title: string; content: string; postId: string }) => {
	try {
		const res = await client.post(`/notes/`, payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const updateNote = async (payload: { title: string; content: string; noteId: string }) => {
	try {
		const noteEdited = await client.patch(`/notes/${payload.noteId}`, payload);
		return noteEdited.data.success || false;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const addComment = async (payload: { content: string; postId: string }) => {
	try {
		const res = await client.post(`/comments/`, payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
