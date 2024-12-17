import client from "@/lib/axios";
import { IResponse } from "@/types/auth.types";
import { ReadingList } from "@/types/readng-list.types";
import { User } from "@/types/user.types";
import { AxiosError } from "axios";

export const getUserProfile = async () => {
	try {
		const res = await client.get<IResponse<User>>(`/users/me`);
		return res.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const getUserReadingList = async () => {
	try {
		const res = await client.get<IResponse<ReadingList[]>>(`/reading-list`);
		return res.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
