import { getAvatar } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useUserAvatar = (username: string) =>
	useQuery({
		queryKey: ["userAvatar", username],
		queryFn: () => getAvatar(username),
	});