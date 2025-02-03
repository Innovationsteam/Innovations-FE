/* eslint-disable no-mixed-spaces-and-tabs */
export interface IResponse<T = null> {
	data: T;
	success: boolean;
	message: string;
}

export type SignUpResponse = IResponse<{
	username: string;
	email: string;
	name: string;
}>;

export type LoginResponse = IResponse<{
	access_token: string;
	username: string;
	isActive: boolean;
	img: string;
	name: string;
	bio: string;
	email: string;
	backdropImg?: string;
	profileImg?: string;
}>;

export interface IError {
	statusCode: number;
	success: false;
	timestamp: string;
	message: string;
	error:
		| {
				message: string;
				error: string;
				statusCode: number;
		  }
		| {
				path: string;
				message: string;
		  }[];
}

export type ResetPassword = {
	email: string;
	token: string;
	password: string;
};
export type SignUpFormData = {
	name: string;
	username: string;
	email: string;
	password: string;
};
