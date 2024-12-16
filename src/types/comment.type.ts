export interface ICommentsResponse {
    data: {
        comments: IComment[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
    };
    success: boolean;
    message: string;
}
export interface IComment {
    content: string;
    publicId: string;
    likes: number;
    postId: string;
    createdAt: string;
    updatedAt: string;
    user: {
        profileImg: string | null;
        username: string;
    };
}

export interface ICResponse {
    data: {
        comments: IComment[];
    };
}