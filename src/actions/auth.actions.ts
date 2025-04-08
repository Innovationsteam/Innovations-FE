import { LoginFormData } from "@/components/LoginForm";
import { SignUpFormData } from "@/types/auth.types";
import client from "@/lib/axios";
import { OTPFormData } from "@/pages/VerifyOTP";
import { LoginResponse, SignUpResponse, ResetPassword } from "@/types/auth.types";
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
export const verifyResetToken = async (payload: OTPFormData) => {
	try {
		const res = await client.post("/auth/verify-reset-token", payload);
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

export const sendResetToken = async (payload: { email: string }) => {
	try {
		const res = await client.post("/auth/send-reset-token", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const resetPassword = async (payload: ResetPassword) => {
	try {
		const res = await client.post("/auth/reset-password", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export async function connectToPushService(subscription: PushSubscription) {
	try {
		const res = await client.post("/push-notification/subscribe", subscription);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
}
