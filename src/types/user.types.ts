///////Worked On
import { IResponse } from "./auth.types";
export interface IUser {
	name: string;
	is_active: boolean;
	username: string;
	profileImg?: string;
	bio: string;
	email: string;
	backdropImg: string;
}
export interface UserConnection {
	username: string;
	email: string;
	profileImg: string | null;
}

export type FollowResponse = IResponse<{
	followerId: number;
	followingId: number;
	createdAt: string;
	updatedAt: string;
}>;
