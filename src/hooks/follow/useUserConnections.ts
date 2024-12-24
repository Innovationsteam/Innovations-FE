import { getUserFollowers, getUserFollowing } from "@/queries/user.queries";
import { useQueries } from "@tanstack/react-query";

export const useUserConnections = (username: string) =>
	useQueries({
		queries: [
			{ queryKey: ["userFollowers", username], queryFn: () => getUserFollowers(username!), enabled: !!username },
			{ queryKey: ["userFollowing", username], queryFn: () => getUserFollowing(username!), enabled: !!username },
		],
		combine: (results) => {
			return {
				data: { followers: results[0].data?.followers, following: results[1].data?.following },
				isPending: results.some((result) => result.isPending),
			};
		},
	});
