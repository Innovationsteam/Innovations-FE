import { Post } from "@/components/Post";
import { useAllPosts } from "@/hooks/useAllPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import PostSkeleton from "./postskeleton";

const PostList = () => {
	const { data: posts, fetchNextPage, hasNextPage } = useAllPosts();

	return (
		<section className="mt-10">
			{posts ? (
				<InfiniteScroll
					dataLength={posts.pages.flatMap((page) => page.data.posts).length}
					next={fetchNextPage}
					hasMore={hasNextPage}
					loader={<PostSkeleton />}
					endMessage={<p>No more posts to load.</p>}
				>
					<ul className="grid h-full gap-y-4">
						{posts?.pages.map(({ data }) => (
							<>
								{data.posts.map((item:any) => (
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
