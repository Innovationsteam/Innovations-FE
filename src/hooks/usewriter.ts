import { Writer } from "@/actions/get.writer.action"; 
import { useQuery } from "@tanstack/react-query";

export const useWriter = (username?:string)=>{   
       return useQuery({
            queryKey: ["writer", username],
            queryFn: () => Writer(username!),
            enabled: !!username,
        });
    }
