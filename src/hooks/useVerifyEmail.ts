import { verifyEmail } from "@/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useVerifyEmail = () => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: verifyEmail,
		onSuccess: () => {
			navigate("/login");
		},
	});
};
