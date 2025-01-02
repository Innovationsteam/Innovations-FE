import { loginUser, signUpUser } from "@/actions/auth.actions";
import { ModalType, useModalActions } from "@/store/modal";
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
			navigate("/feed");
		},
	});
};

export const useSignUpUser = () => {
	const { openModal } = useModalActions();
	return useMutation({
		mutationFn: signUpUser,
		onSuccess: () => openModal(ModalType.EMAIL_SENT),
	});
};
