import { getUserReadingList } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useAllReadingLists = () =>
	useQuery({
		queryKey: ["users", "reading-lists"],
		queryFn: getUserReadingList,
		staleTime: 10 * 60 * 60,
	});
