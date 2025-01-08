import { updateUserProfile } from "@/actions/user.actions";
import { useModalActions } from "@/store/modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateProfile = () => {
	const queryClient = useQueryClient();
	const { closeModal } = useModalActions();
	return useMutation({
		mutationFn: updateUserProfile,
		onSuccess: () => toast.success("Update Successful"),
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
			closeModal();
		},
	});
};
