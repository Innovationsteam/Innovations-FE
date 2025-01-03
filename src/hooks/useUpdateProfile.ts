import { updateUserProfile } from "@/actions/user.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateProfile = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateUserProfile,
		onSuccess: () => toast.success("Update Successful"),
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});
};
