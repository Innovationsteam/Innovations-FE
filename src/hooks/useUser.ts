import { loginUser, signUpUser } from "@/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
	const [, setCookie] = useCookies();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: ({ data }) => {
			toast.success("Login Successful");
			setCookie("access_token", data?.access_token, {
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
			});
			navigate("/home");
		},
	});
};

export const useSignUpUser = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: signUpUser,
		onSuccess: ({ data }) => {
			toast.success("SignUp Successful");
			navigate("/verify", { state: { email: data.email } });
		},
	});
};
