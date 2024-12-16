interface User {
    name: string;         
    profileImg: string | null; 
    username: string;     
}

interface LikedItem {
    likedAt: string;    
    user: User;         
}

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