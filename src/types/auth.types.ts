export interface ResponseData<T> {
	data: T;
	success: boolean;
	message: string;
}

export type SignUpResponse = ResponseData<{
	username: string;
	email: string;
	name: string;
}>;

export type LoginResponse = ResponseData<{
	access_token: string;
	username: string;
}>;
