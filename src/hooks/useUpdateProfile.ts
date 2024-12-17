import { updateUserProfile } from "@/actions/user.actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateProfile = () => {
	return useMutation({
		mutationFn: updateUserProfile,
		onSuccess: () => toast.success("SignUp Successful"),
	});
};
