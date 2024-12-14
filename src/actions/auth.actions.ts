import { LoginFormData } from "@/components/LoginForm";
import { SignUpFormData } from "@/components/SignUpForm";
import { ResetPasswordData } from "@/pages/ResetPassword";
import {client} from "@/libs/axios";
import { LoginResponse, SignUpResponse } from "@/types/auth.types";
import { AxiosError } from "axios";

export const loginUser = async (payload: LoginFormData): Promise<LoginResponse> => {
	try {
		const res = await client.post("/auth/login", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const signUpUser = async (payload: SignUpFormData): Promise<SignUpResponse> => {
	try {
		const res = await client.post("/auth/register", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const sendToken = async (payload: ResetPasswordData) => {
	try {
		const res = await client.post("/auth/send-reset-token", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
