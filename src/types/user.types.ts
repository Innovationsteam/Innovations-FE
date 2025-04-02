///////Worked On
import { IResponse } from "./auth.types";
export interface IUser {
	name: string;
	isActive?: boolean;
	username: string;
	profileImg?: string;
	bio: string;
	email: string;
	backdropImg?: string;
	access_token?: string;
}
// export interface IUser1 {
// 	access_token: string;
// 	username: string;
// 	isActive: boolean;
// 	img: string;
// 	name: string;
// 	bio: string;
// 	email: string;
// 	backdropImg?:string;
// 	profileImg?: string;
// }
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
