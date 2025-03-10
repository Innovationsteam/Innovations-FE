export interface INewComment {
	owner: {
		username: string;
	};
	commenter: {
		username: string;
	};
	post: {
		url: string;
		title: string;
		img?: string;
	};
	content: string;
	date: Date;
}
