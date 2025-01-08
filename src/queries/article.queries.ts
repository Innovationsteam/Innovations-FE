///////Worked On
import client from "@/lib/axios";
import { IResponse } from "@/types/auth.types";
import { ICommentsResponse } from "@/types/comment.types";
import { INotes } from "@/types/notes.types";
import { AxiosError } from "axios";

export const getPostComments = async (postId: string) => {
	try {
		const res = await client.get<IResponse<ICommentsResponse>>(`/comments/${postId}`);
		return res.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const getAllNotes = async () => {
	try {
		const res = await client.get<IResponse<INotes[]>>(`/notes/`);
		return res.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

// export const deleteComment = async (id: string) => {
// 	try {
// 		const commentDeleted = await client.delete(`/comments/${id}`, {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});
// 	} catch (error) {
// 		throw error as AxiosError;
// 	}
// };

// export const getNote = async (id: string) => {
// 	try {
// 		const note = await client.get(`/notes/${id}`, {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 		});
// 	} catch (error) {
// 		throw error as AxiosError;
// 	}
// };
