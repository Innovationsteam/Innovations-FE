import { resetPassword } from "@/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useResetPassword = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: resetPassword,
		onSuccess: (data) => {
			console.log(data)
			navigate("/login")},
	});
};
