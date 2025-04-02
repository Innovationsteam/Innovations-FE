import { getAvatar } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useUserAvatar = (image?: string, fullName?: string) =>
	useQuery({
		queryKey: ["avatar", fullName],
		queryFn: () => getAvatar(fullName!),
		enabled: !image && !!fullName, // Only run when image is not available and fullName is provided
	});
