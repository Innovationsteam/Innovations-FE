import { addComment } from "@/actions/post.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddComment = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: addComment,
		onSuccess: () => toast.success("Comment Sent 🎉"),
		onSettled: () =>
			queryClient.invalidateQueries({
				queryKey: ["comments"],
			}),
	});
};
