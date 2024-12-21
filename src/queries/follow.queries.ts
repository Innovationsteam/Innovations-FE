///////Worked On
import { client, token } from "@/libs/axios";
import { AxiosError } from "axios";

export const IsaFollower = async (username?: string) => {
	interface User {
		username: string;
		email: string;
		profileImg: string | null;
	}
	const usernameToCheck = sessionStorage.getItem("userData");
	try {
		const followers = await client.get(`/users/${username}/followers`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		const followersList: User[] = followers.data.data.followers;
		const isFollowing = followersList.some((user: User) => user.username === usernameToCheck);
		return isFollowing;
	} catch (error) {
		throw error as AxiosError;
	}
};
export const follow = async (username?: string) => {
	try {
		await client.post(
			`/users/follow`,
			{
				username: username,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		);
	} catch (error) {
		throw error as AxiosError;
	}
};
export const unfollow = async (username?: string) => {
	try {
		await client.post(
			`/users/unfollow`,
			{
				username: username,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
			}
		);
	} catch (error) {
		throw error as AxiosError;
	}
};
