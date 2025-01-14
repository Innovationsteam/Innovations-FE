///////Worked On
import client from "@/lib/axios";
import { AxiosError } from "axios";
import { IPost } from "@/types/post.types";
import { IResponse } from "@/types/auth.types";
import { ReadingList } from "@/types/readng-list.types";
import { UserConnection, IUser } from "@/types/user.types";
import axios from "axios";
export const getPostsbyUser = async (username: string): Promise<IPost[]> => {
	try {
		const blogs = await client.get(`/posts/author/${username}`);
		return blogs.data.data.posts;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const getUserFollowers = async (username: string) => {
	try {
		const followers = await client.get<IResponse<{ followers: UserConnection[] }>>(`/users/${username}/followers`);
		return followers.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const getUserFollowing = async (username: string) => {
	try {
		const followers = await client.get<IResponse<{ following: UserConnection[] }>>(`/users/${username}/following`);
		return followers.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const getUserProfile = async (username: string) => {
	try {
		const res = await client.get<IResponse<IUser>>(`/users/${username}`);
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

export const getDrafts = async () => {
	try {
		const res = await client.get(`/posts/me/?status=draft`);
		return res.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
export const getAvatar = async (username: string): Promise<string | undefined> => {
	try {
		const url = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&bold=true`;
        await axios.get(url);
        return url;
	} catch (error) {
		throw error as AxiosError;
	}
};
