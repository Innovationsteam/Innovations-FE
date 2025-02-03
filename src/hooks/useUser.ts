import { loginUser, signUpUser } from "@/actions/auth.actions";
import { ModalType, useModalActions } from "@/store/modal";
import { useUserStore } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const useLoginUser = () => {
	const [, setCookie] = useCookies();
	const { setUser } = useUserStore();
	const navigate = useNavigate();
	const { openModal } = useModalActions();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: ({ data }) => {
			if (!data.isActive) openModal(ModalType.NOTIFICATION, { title: "Email Verification", description: "Kindly check your email to verify your account" });
			setUser(data);
			toast.success("Login Successful");
			setCookie("access_token", data.access_token, {
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
