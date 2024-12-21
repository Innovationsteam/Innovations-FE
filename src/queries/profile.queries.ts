///////Worked On
import  client  from "@/lib/axios";
export const getBlogs = async () => {
	const response = await client.get(`/posts/me/`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	const blogs = response.data.data.posts || [];
	return blogs;
};

export const getAbout = async () => {
	const response = await client.get(`/users/me`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	const bio = response.data.data.bio;
	return bio;
};

export const getDrafts = async () => {
	const response = await client.get(`/posts/me/?status=draft`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	const drafts = response.data.data.posts;
	return drafts;
};
export const getName = async () => {
	const name = await client.get(`/users/me`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return name.data.data.name || "";
};

export const getFollowersCount = async () => {
	const followers = await client.get(`/users/followers/count`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return followers.data.data.count || 0;
};
export const getFollowCount = async () => {
	const following = await client.get(`/users/following/count`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return following.data.data.count || 0;
};
