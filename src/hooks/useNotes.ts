import { getNote } from "@/utils/article.helper";
import { useQuery } from "@tanstack/react-query";

export const useNotes = (postId:string)=>{   
       return useQuery({
            queryKey: ["notes", postId],
            queryFn: () => getNote(postId!),
            enabled: !!postId,
        });
    }
