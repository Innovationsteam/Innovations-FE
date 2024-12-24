///////Worked On
import { getAllNote } from "@/queries/article.queries";
import { useQuery } from "@tanstack/react-query";
import { INotes } from "@/types/notes.types";

export const useAllNotes = () => {
	return useQuery<INotes[], Error>({
		queryKey: ["allNotes"],
		queryFn: getAllNote,
	});
};
