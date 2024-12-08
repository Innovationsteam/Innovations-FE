import { MiniPost } from "../../Post/MiniPost";
import client from "@/libs/axios";
import { useEffect, useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import TrendingSkeleton from "./trendingSkeleton.tsx";
// const posts = ["/assets/images/profile1.png", "/assets/images/profile2.png"];

const TrendingArticles = () => {
	const token = sessionStorage.getItem("myToken");
	interface PostItem {
        author: {
            name: string;
        };
        id:string;
        publishedDate: string;
        image: string;
        title: string;
        content: string;
        likes: number;
        views: number;
        category: string;
        socialMediaShares: number;
    }
	const [trending, setTrending] = useState<PostItem[]>([]);
	const getTrending = useCallback(async () => {
		const response = await client.get(`/api/posts/categories/trending`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		})
		const trendingPost = response.data.data || []
		return trendingPost
	}, [token])
	const { data } = useQuery({
		queryFn: () => getTrending(),
		queryKey: ["trending", token],
		staleTime: 100 * 60 * 5
	})
	useEffect(()=>{
		if(data){
			const sortedPosts = data.sort((a: PostItem, b: PostItem) => {
                return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
            });
			setTrending(sortedPosts)
		}
	})
	return (
		<div className="mt-8">
			<h2 className="highlight z-20 w-fit font-roboto text-xl font-medium text-[#141414CC] ">Trending Articles</h2>
			<ul className="mt-5 flex flex-col gap-y-5">
				{trending.length>0?
				trending.map((post) => (
					<MiniPost
						key={post.id}
						image={post.image}
						content={post.content}
						// author={post.author.name}
						id={post.id}
						title={post.title}
					/>
				))
			:
		
			<div>
                        {
                            Array.from({ length: 2 }).map((_, i) => (
								<TrendingSkeleton key={i} />
                            ))
                        }
                    </div>
			}
			</ul>
		</div>
	);
};

export default TrendingArticles;
