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
}>;
