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
