import { unfollowUser } from "@/actions/user.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUnfollowUser = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: unfollowUser,
		onSuccess: () => toast.success(`Unfollowed User`),
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["userFollowing"],
			});
			queryClient.invalidateQueries({
				queryKey: ["userFollowers"],
			});
		},
	});
};
