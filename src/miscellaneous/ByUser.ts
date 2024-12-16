import { client, token } from "@/libs/axios";
import { AxiosError } from "axios";
import { userData } from "@/types/user.types";
export const Writer = async (username?:string)=>{
    try{
      const bio = await client.get(`/users/${username}`,{
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
      const blogs = await client.get(`/posts/author/${username}`,{
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
      const followers = await client.get(`/users/${username}/followers/count`,{
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
      const following = await client.get(`/users/${username}/following/count`,{
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    const writerDetails:userData ={
        name : bio.data.data.name,
        blogs : blogs.data.data.posts,
        followersCount : followers.data.data.count,
        followingCount : following.data.data.count,
    }
    return writerDetails
    }catch(error){
      throw error as AxiosError;
     }
  }