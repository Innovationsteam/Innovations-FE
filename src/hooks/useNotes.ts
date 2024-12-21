///////Worked On
import { getNote } from "@/queries/article.queries";
import { useQuery } from "@tanstack/react-query";

export const useNotes = (postId: string) => {
	return useQuery({
		queryKey: ["notes", postId],
		queryFn: () => getNote(postId!),
		enabled: !!postId,
	});
};
