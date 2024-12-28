import { getCookie } from "@/lib/axios";
import { userInfo } from "@/types/user.types";
export const getUserData = () => {
    const user = getCookie("userData");   
      if (user) {

        return JSON.parse(user); 
    }
    return null; 
};


export const user:userInfo = getUserData();