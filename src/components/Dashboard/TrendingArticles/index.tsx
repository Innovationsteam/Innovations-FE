import { MiniPost } from "../../Post/MiniPost";

const posts = ["/assets/images/profile1.png", "/assets/images/profile2.png"];

const TrendingArticles = () => {
	return (
		<div className="mt-8">
			<h2 className="highlight z-20 w-fit font-roboto text-xl font-medium text-[#141414CC] ">Trending Articles</h2>
			<ul className="mt-5 flex flex-col gap-y-5">
				{posts.map((post) => (
					<MiniPost
						key={post}
						image={post}
					/>
				))}
			</ul>
		</div>
	);
};

export default TrendingArticles;
