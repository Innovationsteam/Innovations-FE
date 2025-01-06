///////Worked On
import { IResponse } from "./auth.types";
export interface IUser {
	email: string;
	name: string;
	bio: string;
	username: string;
	profileImg: string;
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

// export interface User1 {
// 	name: string;
// 	profileImg: string | null;
// 	username: string;
// }
// export type userInfo = {
// 	access_token: string;
// 	username: string;
// 	isActive: boolean;
// 	img: string | null;
// 	name: string;
// };
