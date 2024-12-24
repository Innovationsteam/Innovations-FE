import { Post } from "@/components/Post";
import { useAllPosts } from "@/hooks/posts/useAllPosts";
import { IPost } from "@/types/post.types";
import InfiniteScroll from "react-infinite-scroll-component";
import PostSkeleton from "./postskeleton";

const PostList = () => {
	const { data: posts, fetchNextPage, hasNextPage } = useAllPosts();

	return (
		<section className="mt-10">
			{posts && posts.pages.length > 0 ? (
				<InfiniteScroll
					dataLength={posts.pages.flatMap((page) => page.data.posts).length}
					next={fetchNextPage}
					hasMore={hasNextPage}
					loader={<PostSkeleton />}
					endMessage={<p className="text-center text-lg font-semibold">All Caught Up</p>}
				>
					<ul className="grid h-full gap-y-4">
						{posts?.pages.map(({ data }) => (
							<>
								{data.posts.map((item: IPost) => (
									<Post
										{...item}
										className="last:mb-10"
									/>
								))}
							</>
						))}
					</ul>
				</InfiniteScroll>
			) : (
				<ul className="grid h-full gap-y-4">
					{Array.from({ length: 3 }).map((_, i) => (
						<PostSkeleton key={i} />
					))}
				</ul>
			)}
		</section>
	);
};

export default PostList;
