import { AxiosError } from "axios";
import { axiosInstance } from "../service/apiClient";
import { LoginFormData } from "../components/LoginForm";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { SignUpFormData } from "../components/SignUpForm";
import { ResetPasswordData } from "../pages/ResetPassword";

interface ResponseData<T> {
	data: T;
	success: boolean;
	message: string;
}

type SignUpResponse = ResponseData<{
	username: string;
	email: string;
	name: string;
}>;

type LoginResponse = ResponseData<{
	access_token: string;
	username: string;
}>;

const loginUser = async (payload: LoginFormData): Promise<LoginResponse> => {
	try {
		const res = await axiosInstance.post("/auth/login", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const useLoginUser = (nextPage: string) => {
	const setUser = useAuthStore((s) => s.setUser);
	const [, setCookie] = useCookies();
	const navigate = useNavigate();
	return useMutation({
		mutationFn: loginUser,
		onSuccess: ({ data }: LoginResponse) => {
			toast.success("Login Successful");
			setUser(data!.username);
			setCookie("token", data?.access_token, {
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
			});
			navigate(nextPage);
		},
	});
};

const signUpUser = async (payload: SignUpFormData): Promise<SignUpResponse> => {
	try {
		const res = await axiosInstance.post("/auth/register", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const useSignUpUser = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: signUpUser,
		onSuccess: () => {
			toast.success("SignUp Successful");
			navigate("/login");
		},
	});
};

const sendToken = async (payload: ResetPasswordData) => {
	try {
		const res = await axiosInstance.post("/auth/send-reset-token", payload);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
};

export const useSendToken = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: sendToken,
		onSuccess: (data) => {
			toast.success(data.message);
			navigate("/verify");
		},
	});
};
