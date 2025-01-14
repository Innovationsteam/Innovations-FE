import { verifyResetToken } from "@/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useVerifyResetToken = (email: string, token:string) => {
	const navigate = useNavigate();
	return useMutation({
		mutationFn: verifyResetToken,
		onSuccess: () => {
			navigate("/change-password", { state: { email, token } });
		},
	});
};
