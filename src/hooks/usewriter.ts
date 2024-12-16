import { Writer } from "@/miscellaneous/ByUser"; 
import { useQuery } from "@tanstack/react-query";

export const useWriter = (username?:string)=>{   
       return useQuery({
            queryKey: ["notes", username],
            queryFn: () => Writer(username),
        });
    }
