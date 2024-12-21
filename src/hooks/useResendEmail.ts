import { resendVerifyEmail } from "@/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";

export const useResendEmail = () =>
	useMutation({
		mutationFn: resendVerifyEmail,
	});
