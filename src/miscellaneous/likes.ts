interface User {
    name: string;         
    profileImg: string | null; 
    username: string;     
}

interface LikedItem {
    likedAt: string;    
    user: User;         
}

export const IsLiked = (likes: LikedItem[]): boolean => {
    const userName = sessionStorage.getItem("userData");

    if (!userName) {
        console.log("no username")
        return false; 
    }

    for (const like of likes) {
        if (like.user.username === userName) {
            return true; 
        }
    }

    return false; 
}