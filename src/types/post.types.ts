///////Worked On
import { IComment } from "./comment.type";
import { INotes } from "./notes.types";
export interface IPost {
	id: string;
	title: string;
	content: string;
	authorId: number;
	category: string;
	publishedDate: string;
	comments: IComment[];
	hashtags: string;
	lastUpdated: string;
	notes: INotes[];
	status: "published" | "draft" | "archived";
	views: number;
	likes: number;
	image: string;
	postLikes: Like[];
	socialMediaShares: number;
	rating: number;
	slug: string;
	author: IAuthor;
}

export interface IAuthor {
	name: string;
	profileImg: string;
	username: string;
}

export interface Like {
	likedAt: string;
	user: { name: string; profileImg: string; username: string };
}
export interface PostItem {
	author: {
		name: string;
		profileImg: string;
		username: string;
	};
	id: string;
	publishedDate: string;
	image: string;
	title: string;
	hashtags: string;
	content: string;
	likes: number;
	commentsCount?: number;
	views: number;
	category: string;
	slug: string;
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
export type articleForm = {
	title: string;
	content: string;
	category: string;
	image: string | null;
	hashtags: string;
	status: "published";
};
