import client from "@/lib/axios";
import { IResponse } from "@/types/auth.types";
import { FollowResponse, IUser } from "@/types/user.types";
import { AxiosError } from "axios";

export const followUser = async (payload: { username: string }): Promise<FollowResponse> => {
	try {
		const res = await client.post("/users/follow", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const updateUserProfile = async (payload: FormData): Promise<IResponse<IUser>> => {
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
export const follow = async (username?: string) => {
	try {
		await client.post(`/users/follow`, {
			username: username,
		});
	} catch (error) {
		throw error as AxiosError;
	}
};
export const unfollow = async (username?: string) => {
	try {
		await client.post(`/users/unfollow`, {
			username: username,
		});
	} catch (error) {
		throw error as AxiosError;
	}
};
