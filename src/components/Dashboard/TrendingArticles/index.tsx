import { useTrendingPosts } from "@/hooks/posts/useTrendingPosts.ts";
import { MiniPost } from "../../Post/MiniPost";
import TrendingSkeleton from "./trendingSkeleton.tsx";
import { IPost } from "@/types/post.types.ts";

const TrendingArticles = () => {
	const { data: trendingPosts, isPending } = useTrendingPosts();

	if (isPending) return Array.from({ length: 2 }).map((_, i) => <TrendingSkeleton key={i} />);

	if (!trendingPosts) return <p className="text-center text-lg font-semibold">No Trending Posts found</p>;

	return (
		<div className="mt-8">
			<h2 className="highlight z-20 w-fit font-roboto text-xl font-medium text-[#141414CC]">Trending Articles</h2>
			<ul className="mt-5 flex list-none flex-col gap-y-5">
				{trendingPosts.map((post: IPost) => (
					<MiniPost
						key={post.id}
						{...post}
					/>
				))}
			</ul>
		</div>
	);
};

export default TrendingArticles;
