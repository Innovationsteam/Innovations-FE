import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { loginUser, signUpUser, sendToken } from "@/actions/auth.actions";

export const useLoginUser = (nextPage: string) => {
	const setUser = useAuthStore((s) => s.setUser);
	const [, setCookie] = useCookies();
	const navigate = useNavigate();
	return useMutation({
		mutationFn: loginUser,
		onSuccess: ({ data }) => {
			toast.success("Login Successful");
			setUser(data!.username);
			sessionStorage.setItem("myToken",data?.access_token)
			setCookie("token", data?.access_token, {
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
			});
			navigate(nextPage);
		},
	});
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
