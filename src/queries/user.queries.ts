///////Worked On
import { client, token } from "@/libs/axios";
import { AxiosError } from "axios";
import { IPost } from "@/types/post.types";
export const userBio = async (username?: string): Promise<string> => {
	try {
		const bio = await client.get(`/users/${username}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		return bio.data.data.name;
	} catch (error) {
		throw error as AxiosError;
	}
};
export const userBlogs = async (username?: string): Promise<IPost[]> => {
	try {
		const blogs = await client.get(`/posts/author/${username}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		return blogs.data.data.posts;
	} catch (error) {
		throw error as AxiosError;
	}
};
export const userFollowers = async (username?: string): Promise<number> => {
	try {
		const followers = await client.get(`/users/${username}/followers/count`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		return followers.data.data.count;
	} catch (error) {
		throw error as AxiosError;
	}
};
export const userFollowing = async (username?: string): Promise<number> => {
	try {
		const following = await client.get(`/users/${username}/following/count`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		return following.data.data.count;
	} catch (error) {
		throw error as AxiosError;
	}
};
