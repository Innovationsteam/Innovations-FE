import { getAllPosts } from "@/queries/post.queries";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useAllPosts = () =>
	useInfiniteQuery({
		queryKey: ["posts"],
		queryFn: getAllPosts,
		initialPageParam: 1,
		getNextPageParam: (lastPage, _allPages, lastPageParam) => {
			if (lastPage.data.posts.length === 0) {
				return undefined;
			}

			return lastPageParam + 1;
		},
	});
