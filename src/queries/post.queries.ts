import { PAGE_LIMIT } from "@/constants";
import {client} from "@/libs/axios";
import { IResponse } from "@/types/auth.types";
import { IPost } from "@/types/post.types";
import { AxiosError } from "axios";

interface PostsResponse {
	currentPage: number;
	posts: IPost[];
	totalItems: number;
	totalPages: number;
}

export const getAllPosts = async ({ pageParam = 1 }: { pageParam: number }) => {
	try {
		const res = await client.get<IResponse<PostsResponse>>(`/posts/?page=${pageParam}&limit=${PAGE_LIMIT}`);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const getPostById = async (postId: string) => {
	try {
		const res = await client.get<IResponse<IPost>>(`/posts/${postId}`);
		return res.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const getTrendingPosts = async () => {
	try {
		const res = await client.get<IResponse<IPost[]>>(`/posts/categories/trending`);
		return res.data.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
