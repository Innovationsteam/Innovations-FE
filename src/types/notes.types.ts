export interface INotes {
	id: number;
	title: string;
	content: string;
	postId: string;
	publicId: string;
	userId: number;
	createdAt: string;
	updatedAt: string;
	post: {
		slug: string;
		title: string;
		author: {
			username: string;
			profileImg: string | null;
		};
	};
}
export interface NoteProps {
	title: string;
	content: string;
	post: {
		slug: string;
		title: string;
		author: {
			username: string;
			profileImg: string | null;
		};
	};
}
