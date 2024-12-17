import SectionContainer from "../../layouts/SectionContainer";
import PostSkeleton from "../Dashboard/PostList/postskeleton";
import { useState, useEffect } from "react";
import { PostItem } from "@/utils/originalFormat";
import client from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";

const Blogs = ({ title }: { title: string }) => {
	const [blogs, setBlogs] = useState<PostItem[]>([]);

	console.log(blogs);

	const [cookies] = useCookies(["access_token"]);

	const getBlogs = async () => {
		const response = await client.get(`/posts/me/`, {
			headers: {
				Authorization: `Bearer ${cookies?.access_token}`,
				"Content-Type": "application/json",
			},
		});
		const blogs = response.data.data.posts || [];
		return blogs;
	};
	const { data } = useQuery({
		queryFn: () => getBlogs(),
		queryKey: ["blogs"],
		staleTime: 100 * 60 * 3,
	});
	useEffect(() => {
		if (data) {
			const sortedPosts = data.sort((a: PostItem, b: PostItem) => {
				return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
			});
			setBlogs((prevPosts) => [...prevPosts, ...sortedPosts]);
		}
	}, [data]);
	return (
		<SectionContainer title={title}>
			<ol className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
				{Array.from({ length: 10 }).map((_, i) => (
					<PostSkeleton key={i} />
				))}
			</ol>
		</SectionContainer>
	);
};

export default Blogs;
