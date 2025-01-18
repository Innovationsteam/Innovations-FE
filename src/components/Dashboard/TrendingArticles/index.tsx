import { useTrendingPosts } from "@/hooks/posts/useTrendingPosts.ts";
import { MiniPost } from "../../Post/MiniPost";
import { IPost } from "@/types/post.types.ts";
import TrendingSkeleton from "@/components/Skeletons/TrendingSkeleton";

const TrendingArticles = () => {
	const { data: trendingPosts, isPending } = useTrendingPosts();

	if (isPending) return <TrendingSkeleton />;

	if (!trendingPosts) return <p className="text-center text-lg font-semibold">No Trending Posts found</p>;

	return (
		<div>
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
