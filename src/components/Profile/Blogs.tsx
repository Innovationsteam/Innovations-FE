///////Worked On
import SectionContainer from "../../layouts/SectionContainer";
import { Post } from "../Post";
import { BlogsType } from "@/types/post.types";
import PostSkeleton from "../Dashboard/PostList/postskeleton";
import { useBlogs } from "@/hooks/useProfile";
const Blogs = ({ title }: { title: string }) => {
	const { data } = useBlogs();
	return (
		<SectionContainer title={title}>
			{data ? (
				<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
					{data.map((item: BlogsType) => (
						<Post {...item} />
					))}
				</ul>
			) : (
				<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
					{Array.from({ length: 10 }).map((_, i) => (
						<PostSkeleton key={i} />
					))}
				</ul>
			)}
		</SectionContainer>
	);
};

export default Blogs;
