import { client,token } from "@/libs/axios";
import { AxiosError } from "axios";
import { IComment, ICResponse } from "@/types/comment.type";
import { INotes } from "@/types/notes.types";
import { IResponse } from "@/types/auth.types";
export interface PostItem {
   author?: {
		name: string;
		profileImg: string;
		username: string;
	};
    id: string;
    publishedDate: string;
    image: string;
    title: string;
    hashtags?:string;
    content: string;
    likes: number;
    commentsCount?:number;
    views: number;
    category?: string;
    slug?:string;
    socialMediaShares: number;
}
export const likePost = async(id:string):Promise<boolean>=>{
    try{
        const like = await client.post(`/posts/like/${id}`,{}, {
            headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
        return like?.data?.data?.liked
    }
    catch(error){
        throw error as AxiosError
    }
}

export const addComment =async(comment:string, id:string):Promise<boolean>=>{
  try{
      const commentAdded = await client.post(`/comments/`,
        {
        content: comment,
        postId: id
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    return commentAdded?.data?.success || false
    } catch(error){
     throw error as AxiosError;
    }
}
export const getComment = async (id: string) => {
    try {
        const allComments = await client.get<IResponse<IComment[]>>(`/comments/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return allComments.data.data
    } catch (error) {
        throw error as AxiosError;
    }
};
export const deleteComment =async(id:string)=>{
  try{

      const commentDeleted = await client.delete(`/comments/${id}`,
     {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    } catch(error){
     throw error as AxiosError;
    }
}
export const createNote =async(title:string|null,content:string, id:string):Promise<boolean>=>{
  try{

      const noteCreated = await client.post(`/notes/`,{
        title: title,
        content: content,
        postId: id
    },
     {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });
    return noteCreated.data.success || false
    } catch(error){
     throw error as AxiosError;
    }
}
export const getNote =async(id:string)=>{
    try{
        console.log(id)
        const note = await client.get(`/notes/${id}`,
       {
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
      });
      } catch(error){
       throw error as AxiosError;
      }
  }
export const deleteNote =async(id:string)=>{
    try{
  
        const noteDeleted = await client.delete(`/notes/${id}`,
       {
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
      });
      } catch(error){
       throw error as AxiosError;
      }
  }
  export const getAllNote =async()=>{
    try{
        const allNotes = await client.get<IResponse<INotes[]>>(`/notes/`,
       {
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
      });
      return allNotes.data.data
      } catch(error){
       throw error as AxiosError;
      }
  }