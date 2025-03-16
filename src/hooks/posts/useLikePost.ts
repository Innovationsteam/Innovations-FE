import { likePost } from "@/actions/post.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLikePost = ({ username, slug }: { username?: string; slug?: string }) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: likePost,
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["posts", username, slug] });
		},
		// onMutate: async () => {
		// 	await queryClient.cancelQueries({ queryKey: ["posts", username, slug] });

		// 	const oldPost = queryClient.getQueryData<IPost>(["posts", username, slug]);

		// 	queryClient.setQueryData<IPost>(["posts", username, slug], (prevData) => {
		// 		if (!prevData) return oldPost;

		// 		// Create the new like object
		// 		const newLike = {
		// 			likedAt: new Date().toISOString(),
		// 			user: { name: user?.name, profileImg: user?.profileImg, username: user?.username },
		// 		};

		// 		// Create a new post object with updated postLikes (immutably)
		// 		return {
		// 			...prevData,
		// 			postLikes: [...prevData.postLikes, newLike],
		// 		};
		// 	});

		// 	return { oldPost };
		// },

		// onError: (_error, _variables, context) => {
		// 	queryClient.setQueryData(["posts", username, slug], context?.oldPost);
		// },
	});
};
