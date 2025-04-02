import client from "@/lib/axios";
import { IResponse } from "@/types/auth.types";
import { FollowResponse, IUser } from "@/types/user.types";
import { AxiosError } from "axios";

export const followUser = async (username: string): Promise<FollowResponse> => {
	try {
		const res = await client.post("/users/follow", { username });
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const unfollowUser = async (username: string) => {
	try {
		const res = await client.post("/users/unfollow", { username });
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

// export async function connectToPushService(subscription: PushSubscription) {
// 	try {
// 		const res = await client.post("/reminders/subscribe", subscription);
// 		return res.data;
// 	} catch (error) {
// 		console.log((error as AxiosError).message);
// 	}
// }
