import { getAllNotifications } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useNotifications = () => {
	return useQuery({
		queryKey: ["user", "notifications"],
		queryFn: getAllNotifications,
	});
};
