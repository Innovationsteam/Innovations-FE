import { getPostById, getPostBySlug, getPostByHashtag } from "@/queries/post.queries";
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
export const usePostByHashtag = (hashtag?: string) =>{
	return useQuery({
		queryKey: ["hashtags", hashtag],
		queryFn: () => getPostByHashtag(hashtag!),
		enabled: !!hashtag,
	});
}