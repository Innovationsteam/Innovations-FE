///////Worked On
import { LikedItem } from "@/types/user.types";
export const IsLiked = (likes: LikedItem[]): boolean => {
	const userName = sessionStorage.getItem("userData");
	if (!userName) {
		return false;
	}
	for (const like of likes) {
		if (like.user.username === userName) {
			return true;
		}
	}

	return false;
};
