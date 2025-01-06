import { createBrowserRouter } from "react-router-dom";
import About from "./components/Profile/About";
import Blogs from "./components/Profile/Blogs";
import { FollowersList, FollowingList } from "./components/Profile/FollowersList";
import ProfileHome from "./components/Profile/Home";
import ReadingList from "./components/Profile/ReadingList";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Redirecting from "./components/Redirecting";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Article from "./pages/Article";
import ChangePassword from "./pages/ChangePassword";
import CreateArticle from "./pages/CreateArticle";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
import Login from "./pages/Login";
import NewStory from "./pages/NewStory";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import Stories from "./pages/Stories";
import VerifyOTP from "./pages/VerifyOTP";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Loader />, // Only the loader component at this level
	},
	{
		path: "/",
		element: <AppLayout />, // Encompassing layout for the entire app
		children: [
			{
				path: "/",
				element: <MainLayout />,
				children: [
					{
						element: <ProtectedRoutes />, // Protect all children below
						children: [
							{
								path: "feed",
								element: <Home />,
							},
							{
								path: "article/:postId",
								element: <Article />,
							},
							{
								path: "article/:username/:slug",
								element: <Article />,
							},
							{
								path: "article/new",
								element: <CreateArticle />,
							},
							{
								path: "cw/:username",
								element: <Profile />,
								children: [
									{ path: "", element: <ProfileHome /> },
									{ path: "about", element: <About /> },
									{ path: "blogs", element: <Blogs title="Blogs" /> },
									{ path: "reading-list", element: <ReadingList /> },
									{ path: "followers", element: <FollowersList /> },
									{ path: "following", element: <FollowingList /> },
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
						],
					},
				],
			},
			{
				path: "redirecting",
				element: <Redirecting />,
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
		],
	},
]);
