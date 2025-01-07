import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import DraftsList from "./components/Profile/Drafts";
import NotesList from "./components/Profile/Notes";
import Settings from "./components/Profile/Settings";
import { useUserStore } from "./store/user";

const ProfileRoutes = ({ isLoggedIn }: any) => [
	{ path: "", element: <ProfileHome /> },
	{ path: "about", element: <About /> },
	{ path: "blogs", element: <Blogs title="Blogs" /> },
	{ path: "reading-list", element: <ReadingList /> },
	{ path: "followers", element: <FollowersList /> },
	{ path: "following", element: <FollowingList /> },
	...(isLoggedIn
		? [
				{ path: "drafts", element: <DraftsList /> },
				{ path: "notes", element: <NotesList /> },
				{ path: "settings", element: <Settings /> },
			]
		: []),
];

const createRouter = (isLoggedIn: boolean) =>
	createBrowserRouter([
		{
			path: "/",
			element: <Loader />,
		},
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: "/",
					element: <MainLayout />,
					children: [
						{
							element: <ProtectedRoutes />,
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
									children: ProfileRoutes({ isLoggedIn }),
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

// Use in a component
const RouterPro = () => {
	const loggedInUser = useUserStore((s) => s.user);
	const isLoggedIn = !!loggedInUser;
	const router = createRouter(isLoggedIn);
	return <RouterProvider router={router} />;
};

export default RouterPro;
