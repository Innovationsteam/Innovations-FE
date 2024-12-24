import { followUser } from "@/actions/user.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useFollowUser = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: followUser,
		onSuccess: () => toast.success(`Following User`),
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["userfollowers"],
			});
		},
	});
};
