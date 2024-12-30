import { CreateArticle } from "../components/Buttons";
import Container from "../components/Container";
import ExploreTopics from "../components/Dashboard/ExploreTopics";
import PostList from "../components/Dashboard/PostList";
import Profile from "../components/Dashboard/Profile";
import TrendingArticles from "../components/Dashboard/TrendingArticles";

const Home = () => {
	return (
		<Container className="relative grid-cols-[auto_300px] gap-x-10 lg:grid">
			{/* <div className="mx-auto max-w-[700px] pb-10"> */}
			{/* <StoryList /> */}
			<PostList />
			{/* </div> */}
			<section className="hidden px-5 lg:block">
				<Profile />
				<CreateArticle />
				<div className="sticky top-0 pt-5">
					{/* <ExploreTopics /> */}
					<TrendingArticles />
				</div>
			</section>
		</Container>
	);
};

export default Home;
