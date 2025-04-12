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

export interface NotificationResponse {
	notifications: INewComment[];
	totalPages: 0;
	currentPage: 1;
	totalItems: 0;
}
