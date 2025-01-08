///////Worked On
import { getPostComments } from "@/queries/article.queries";
import { useQuery } from "@tanstack/react-query";

export const useAllComments = (postId: string) => {
	return useQuery({
		queryKey: ["comments", postId],
		queryFn: () => getPostComments(postId),
		enabled: !!postId,
	});
};
