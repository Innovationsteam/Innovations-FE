///////Worked On
import client from "@/lib/axios";
import { AxiosError } from "axios";
import { IComment } from "@/types/comment.type";
import { INotes } from "@/types/notes.types";
import { IResponse } from "@/types/auth.types";


export const getComment = async (id: string) => {
	try {
		const allComments = await client.get<IResponse<IComment[]>>(`/comments/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return allComments.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};



export const getAllNote = async () => {
	try {
		const allNotes = await client.get<IResponse<INotes[]>>(`/notes/`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return allNotes.data.data;
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


