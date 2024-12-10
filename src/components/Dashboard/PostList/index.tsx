import { Post } from "../../Post";
import { useEffect, useState, useCallback } from "react";
import client from "@/libs/axios";
import PostSkeleton from "./postskeleton";
import InfiniteScroll from "react-infinite-scroll-component";

const PostList = () => {
	const token = sessionStorage.getItem("myToken");
	const [posts, setPosts] = useState<PostItem[]>([]);
	const [, setLoading] = useState(true);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [, setError] = useState<any | null>(null);
	const [hasMore, setHasMore] = useState(true); // To track if there are more posts
	const [page, setPage] = useState(1); // Current page

	interface PostItem {
		author: {
			name: string;
		};
		publishedDate: string;
		image: string;
		title: string;
		content: string;
		likes: number;
		views: number;
		category: string;
		socialMediaShares: number;
	}

	function formatDate(timestamp: string): string {
		const date = new Date(timestamp);
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		return date.toLocaleDateString("en-US", options);
	}

	const getPost = useCallback(
		async (page: number, limit: number) => {
			try {
				setLoading(true);
				const response = await client.get(`/api/posts/?page=${page}&limit=${limit}`, {
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				});
				console.log("Response----------", response);
				const newPosts = response?.data?.data?.posts || [];
				const sortedPosts = newPosts.sort((a: PostItem, b: PostItem) => {
					return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
				});

				setPosts((prevPosts) => [...prevPosts, ...sortedPosts]);
				setHasMore(newPosts.length > 0);
			} catch (err) {
				console.log("Error:", err);
				setError(err);
			} finally {
				setLoading(false);
			}
		},
		[token]
	);

	useEffect(() => {
		getPost(page, 5);
	}, [getPost, page]);

	return (
		<section className="w-full">
			<InfiniteScroll
				dataLength={posts.length}
				next={() => setPage((prevPage) => prevPage + 1)}
				hasMore={hasMore}
				loader={Array.from({ length: 3 }).map((_, i) => (
					<PostSkeleton key={i} />
				))}
				endMessage={<p>No more posts to load.</p>}
			>
				<ul className="mt-10 grid h-full gap-y-4">
					{posts.length > 0 ? (
						posts.map((item: PostItem, i) => (
							<Post
								key={i}
								author={item.author.name}
								date={formatDate(item.publishedDate)}
								img={item.image}
								title={item.title}
								content={item.content}
								likes={item.likes}
								views={item.views}
								hashtags={item.category}
								socialMediaShares={item.socialMediaShares}
							/>
						))
					) : (
						<></>
					)}
				</ul>
			</InfiniteScroll>
		</section>
	);
};

export default PostList;
