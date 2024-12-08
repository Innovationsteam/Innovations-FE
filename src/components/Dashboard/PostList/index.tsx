import { Post } from "../../Post";
import { useEffect, useState, useCallback } from "react";
import client from "@/libs/axios";
import PostSkeleton from './postskeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from "@tanstack/react-query";

const PostList = () => {
    const token = sessionStorage.getItem("myToken");
    const [posts, setPosts] = useState<PostItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    interface PostItem {
        author: {
            name: string;
        };
        id: string;
        publishedDate: string;
        image: string;
        title: string;
        content: string;
        likes: number;
        views: number;
        category: string;
        socialMediaShares: number;
    }

    const getPost = useCallback(async (page: number) => {
        const response = await client.get(`/api/posts/?page=${page}&limit=${5}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        const newPosts = response?.data?.data?.posts || [];
        return newPosts;
    }, [token]);

    const { data, isLoading, isError } = useQuery({
        queryFn: () => getPost(page),
        queryKey: ["post", page],
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        if (data) {
            const sortedPosts = data.sort((a: PostItem, b: PostItem) => {
                return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
            });
            setPosts(prevPosts => [...prevPosts, ...sortedPosts]);
            setHasMore(data.length > 0);
        }
    }, [data]);

    const loadMorePosts = () => {
        if (hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

    function formatDate(timestamp: string): string {
        const date = new Date(timestamp);
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return date.toLocaleDateString("en-US", options);
    }

    if (isLoading) {

    }

    if (isError) {
        return <p className="text-center text-lg text-gray-600 mt-5">Error loading posts.</p>;
    }

    return (
        <InfiniteScroll
            dataLength={posts.length}
            next={loadMorePosts}
            hasMore={hasMore}
            loader={<PostSkeleton />}
            endMessage={<p className="text-center text-lg text-gray-600 mt-5">
                You're all caught up!!       </p>}
        >
            <ul className="mt-10 grid h-full gap-y-4">
                {posts.length > 0 ? (
                    posts.map((item: PostItem, i) => (
                        <Post
                            key={i}
                            id={item.id}
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
            {
                isLoading ?
                    <div>
                        {
                            Array.from({ length: 3 }).map((_, i) => (
                                <PostSkeleton key={i} />
                            ))
                        }
                    </div> : <></>}
        </InfiniteScroll >
    );
};

export default PostList;