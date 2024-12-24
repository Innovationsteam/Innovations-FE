import { getPostById, getPostBySlug } from "@/queries/post.queries";
import { useQuery } from "@tanstack/react-query";

export const usePost = (postId?: string) =>
	useQuery({
		queryKey: ["posts", postId],
		queryFn: () => getPostById(postId!),
		enabled: !!postId,
	});

export const usePostBySlug = (username?: string, slug?: string) =>
	useQuery({
		queryKey: ["posts", username, slug],
		queryFn: () => getPostBySlug(username!, slug!),
		enabled: !!(username && slug),
	});
