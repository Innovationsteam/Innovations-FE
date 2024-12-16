export interface ReadingList {
	id: string;
	name: string;
	createdAt: string;
	readingLists: {
		postId: string;
		createdAt: string;
	}[];
}
