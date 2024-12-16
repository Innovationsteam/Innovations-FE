import client from "@/libs/axios";
import { IResponse } from "@/types/auth.types";
import { User } from "@/types/user.types";
import { AxiosError } from "axios";

export const updateUserProfile = async (payload: FormData): Promise<IResponse<User>> => {
	try {
		const res = await client.put("/users", payload, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
