///////Worked On
import { User } from "@/actions/get.user.action";
import { useQuery } from "@tanstack/react-query";

export const useUserDetails = () => {
	return useQuery({
		queryKey: ["user"],
		queryFn: () => User(),
		staleTime: 100 * 60 * 3,
	});
};
