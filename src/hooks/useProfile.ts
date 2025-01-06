///////Worked On
import { getDrafts } from "@/queries/user.queries";
import { useQuery } from "@tanstack/react-query";

export const useDrafts = () => {
	return useQuery({
		queryFn: () => getDrafts(),
		queryKey: ["posts", "drafts"],
		staleTime: 100 * 60 * 3,
	});
};
