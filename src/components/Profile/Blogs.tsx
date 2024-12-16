import SectionContainer from "../../layouts/SectionContainer";
import { Post } from "../Post";
import { client, token } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BlogsType } from "@/types/post.types";
import { PostItem } from "@/utils/article.helper";
import PostSkeleton from "../Dashboard/PostList/postskeleton";
const Blogs = ({ title }: { title: string }) => {
	const [blogs, setBlogs] = useState<PostItem[]>([]);

	const getBlogs = async () => {
		const response = await client.get(`/posts/me/`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		const blogs = response.data.data.posts || []
		return blogs
	}
	const { data } = useQuery({
		queryFn: () => getBlogs(),
		queryKey: ["blogs", token],
		staleTime: 100 * 60 * 3
	})
	useEffect(() => {
		if (data) {
			const sortedPosts = data.sort((a: PostItem, b: PostItem) => {
				return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
			});
			setBlogs(prevPosts => [...prevPosts, ...sortedPosts]);
		}
	}, [data]);

	return (
		<SectionContainer title={title}>
			{
				data ?
					<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
						{blogs.map((item:BlogsType) => (
							<Post
								{...item}
							/>

						))
						}
					</ul> :
					<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
						{Array.from({ length: 10 }).map((_, i) => (
							<PostSkeleton key={i} />
						))}
					</ul>
			}
		</SectionContainer>
	);
};

export default Blogs;
