///////Worked On
import { getComment } from "@/queries/article.queries";
import { useQuery } from "@tanstack/react-query";
import { IComment } from "@/types/comment.type";

export const useAllComments = (postId: string) => {
	return useQuery<IComment[], Error>({
		queryKey: ["allComments", postId],
		queryFn: () => getComment(postId),
		enabled: typeof postId === "string" && postId.length > 0,
	});
};
