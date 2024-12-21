///////Worked On
import { LikedItem } from "./user.types";

export interface IPost {
	id: string;
	title: string;
	content: string;
	authorId: number;
	category: string;
	publishedDate: string;
	hashtags: string;
	lastUpdated: string;
	status: "published" | "draft" | "archived";
	views: number;
	likes: number;
	image: string;
	postLikes: LikedItem[];
	socialMediaShares: number;
	rating: number;
	slug: string;
	author: {
		name: string;
		profileImg: string;
		username: string;
	};
}

export interface IAuthor {
	name: string;
	profileImg: string;
	username: string;
}

export interface BlogsType {
	id: string;
	publishedDate: string;
	image: string;
	title: string;
	content: string;
	likes: number;
	views: number;
	socialMediaShares: number;
}

export interface PostItem {
	author?: {
		name: string;
		profileImg: string;
		username: string;
	};
	id: string;
	publishedDate: string;
	image: string;
	title: string;
	hashtags?: string;
	content: string;
	likes: number;
	commentsCount?: number;
	views: number;
	category?: string;
	slug?: string;
	socialMediaShares: number;
}

export type draftSet = {
	title: string;
	content: string;
	image: string;
};

export type asDraft = {
	title: string;
	content: string[];
	img?: string | File;
};
