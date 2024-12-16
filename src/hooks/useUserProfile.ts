import { getUserProfile } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useUserProfile = () =>
	useQuery({
		queryKey: ["user"],
		queryFn: getUserProfile,
		staleTime: 10 * 60 * 60,
	});
