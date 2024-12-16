import { getAllNote } from "@/utils/article.helper";
import { useQuery } from "@tanstack/react-query";
import { INotes } from "@/types/notes.types";

export const useAllNotes = () => {   
    return useQuery<INotes[], Error>({
        queryKey: ["allNotes"],
        queryFn: getAllNote, 
    });
};
