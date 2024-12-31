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
	is_active: boolean;
	img: string | null;
	name: string;
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
