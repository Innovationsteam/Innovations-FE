///////Worked On
import { IPost } from "./post.types";
export interface User {
	email: string;
	name: string;
	bio: string;
	username: string;
	profileImg: string;
	backdropImg: string;
}
export type userData = {
	name: Promise<string>;
	blogs?: Promise<IPost[]>;
	followers: Promise<number>;
	following: Promise<number>;
};

export interface User1 {
	name: string;
	profileImg: string | null;
	username: string;
}

export interface LikedItem {
	likedAt: string;
	user: User1;
}
