///////Worked On
import { getPostsbyUser } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useUserPosts = (username?: string) => {
	return useQuery({
		queryKey: ["posts", username],
		queryFn: () => getPostsbyUser(username!),
		enabled: !!username,
	});
};
