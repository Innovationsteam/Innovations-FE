import { LoginFormData } from "@/components/LoginForm";
import { SignUpFormData } from "@/components/SignUpForm";
import client from "@/lib/axios";
import { OTPFormData } from "@/pages/VerifyOTP";
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

export const verifyEmail = async (payload: OTPFormData) => {
	try {
		const res = await client.post("/auth/verify-email", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const resendVerifyEmail = async (payload: { email: string }) => {
	try {
		const res = await client.post("/auth/resend-confirmation", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};
