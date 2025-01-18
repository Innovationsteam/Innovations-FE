import { getUserProfile } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useUserProfile = (username: string = "me", enabled: boolean = true) => {
	return useQuery({
		queryKey: ["users", username],
		queryFn: () => getUserProfile(username),
		enabled,
	});
};
