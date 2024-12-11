import { createBrowserRouter } from "react-router-dom";
import About from "./components/Profile/About";
import Blogs from "./components/Profile/Blogs";
import FollowersList from "./components/Profile/FollowersList";
import ReadingList from "./components/Profile/ReadingList";
import MainLayout from "./layouts/MainLayout";
import Article from "./pages/Article";
import ChangePassword from "./pages/ChangePassword";
import ProfileHome from "./components/Profile/Home";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
import Login from "./pages/Login";
import NewStory from "./pages/NewStory";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import Stories from "./pages/Stories";
import VerifyOTP from "./pages/VerifyOTP";
import Settings from "./components/Profile/Settings";
import CreateArticle from "./pages/CreateArticle";
import Analytics from "./components/Profile/Analytics";
import Notes from "./components/Profile/Notes";
import Drafts from "./components/Profile/Drafts";
// import Analytics from "./components/Profile/Analytics";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Loader />,
	},
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "article/:postId",
				element: <Article />,
			},
			{
				path: "article/new",
				element: <CreateArticle />,
			},
			{
				path: "profile",
				element: <Profile />,
				children: [
					{ path: "", element: <ProfileHome /> },
					{ path: "about", element: <About /> },
					{ path: "blogs", element: <Blogs title="Blogs" /> },
					{ path: "reading-list", element: <ReadingList /> },
					{ path: "followers", element: <FollowersList /> },
					{ path: "following", element: <FollowersList /> },
				],
			},
			{
				path: "user/profile",
				element: <Profile allowEdit />,
				children: [
					{ path: "", element: <ProfileHome /> },
					{ path: "about", element: <About /> },
					{ path: "blogs", element: <Blogs title="Blogs" /> },
					{ path: "saved", element: <Blogs title="Saved" /> },
					{ path: "reading-list", element: <ReadingList /> },
					{ path: "followers", element: <FollowersList /> },
					{ path: "following", element: <FollowersList /> },
					{ path: "analytics", element: <Analytics /> },
					{ path: "settings", element: <Settings /> },
					{ path: "notes", element: <Notes /> },
					{ path: "drafts", element: <Drafts /> },
				],
			},
		],
	},
	{
		path: "stories",
		element: <Stories />,
	},
	{
		path: "stories/new",
		element: <NewStory />,
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "signup",
		element: <SignUp />,
	},
	{
		path: "verify",
		element: <VerifyOTP />,
	},
	{
		path: "/forgot-password",
		element: <ResetPassword />,
	},
	{
		path: "/change-password",
		element: <ChangePassword />,
	},
]);
