///////Worked On
import { getName, getFollowCount, getFollowersCount } from "@/queries/profile.queries";

export const User = async ()=>{
    const [name, followers,following] = await Promise.all([
        getName(),
        getFollowCount(),
        getFollowersCount()
    ]) 
    return {
        name, followers, following
    }
}