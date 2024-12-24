import { likePost } from "@/actions/post.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLikePost = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: likePost,
		onSettled: () => {
			queryClient.invalidateQueries({
				queryKey: ["posts"],
			});
		},
	});
};
