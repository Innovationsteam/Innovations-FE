///////Worked On
import { IPost } from "./post.types";
export type userData = {
	name: Promise<string>;
	blogs?: Promise<IPost[]>;
	followers: Promise<number>;
	following: Promise<number>;
};

export interface User {
	name: string;
	profileImg: string | null;
	username: string;
}

export interface LikedItem {
	likedAt: string;
	user: User;
}
