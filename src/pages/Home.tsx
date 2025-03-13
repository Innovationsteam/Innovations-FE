import { useUser } from "@/store/user";
import { CreateArticle } from "../components/Buttons";
import Container from "../components/Container";
// import ExploreTopics from "../components/Dashboard/ExploreTopics";
import PostList from "../components/Dashboard/PostList";
import Profile from "../components/Dashboard/Profile";
import TrendingArticles from "../components/Dashboard/TrendingArticles";
import SearchBar from "@/components/Dashboard/SearchBar";
import { useLocation } from "react-router-dom";
const Home = () => {
	const isLoggedIn = useUser();
	const location = useLocation();
	return (
		<Container className="relative grid-cols-[auto_300px] gap-x-10 lg:grid">
			{/* <div className="mx-auto max-w-[700px] pb-10"> */}
			{/* <StoryList /> */}
			{location.pathname == "/search" ? <SearchBar /> : <PostList />}
			{/* </div> */}
			<section className="hidden px-5 pt-4 lg:block">
				<Profile />
				{isLoggedIn ? <CreateArticle /> : null}
				<div className="sticky top-0 pt-8">
					{/* <ExploreTopics /> */}
					<TrendingArticles />
				</div>
			</section>
		</Container>
	);
};

export default Home;
