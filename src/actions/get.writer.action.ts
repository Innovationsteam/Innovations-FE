///////Worked On
import { userBio, userBlogs, userFollowers, userFollowing } from "@/queries/user.queries";
export const Writer = async (username?: string) => {
	if (!username) {
		throw new Error("Username is required!");
	}
	const [name, blogs, followersCount, followingCount] = await Promise.all([userBio(username), userBlogs(username), userFollowers(username), userFollowing(username)]);
	return {
		name,
		blogs,
		followersCount,
		followingCount,
	};
};
