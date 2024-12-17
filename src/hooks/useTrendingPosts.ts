import { getTrendingPosts } from "@/queries/post.queries";
import { IPost } from "@/types/post.types";
import { useQuery } from "@tanstack/react-query";

export const useTrendingPosts = () =>
	useQuery({
		queryKey: ["posts", "trending"],
		queryFn: getTrendingPosts,
		staleTime: 100 * 60 * 5,
		select: (data) => {
			return data.sort((a: IPost, b: IPost) => {
				return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
			});
		},
	});
