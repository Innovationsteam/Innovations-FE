import { CreateReadingListData } from "@/components/forms/CreateReadingListForm";
import client from "@/lib/axios";
import { IResponse } from "@/types/auth.types";
import { ReadingList } from "@/types/readng-list.types";
import { AxiosError } from "axios";

export const createReadingList = async (payload: CreateReadingListData): Promise<IResponse<ReadingList>> => {
	try {
		const res = await client.post("/reading-list/collections", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const addToReadingList = async (payload: { postId: string; collectionId: string }): Promise<IResponse<ReadingList>> => {
	try {
		const res = await client.post("/reading-list", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
