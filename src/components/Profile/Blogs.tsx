import { useUserPosts } from "@/hooks/posts/useUserPosts";
import { useParams } from "react-router-dom";
import SectionContainer from "../../layouts/SectionContainer";
import PostSkeleton from "../Dashboard/PostList/postskeleton";
import { Post } from "../Post";

const Blogs = ({ title }: { title: string }) => {
	const { username } = useParams();
	const { data: userPosts, isPending } = useUserPosts(username!);
	return (
		<SectionContainer title={title}>
			{isPending ? (
				<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
					{Array.from({ length: 10 }).map((_, i) => (
						<PostSkeleton key={i} />
					))}
				</ul>
			) : (
				<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
					{userPosts?.map((item) => (
						<Post
							key={item.id}
							{...item}
						/>
					))}
				</ul>
			)}
		</SectionContainer>
	);
};

export default Blogs;
