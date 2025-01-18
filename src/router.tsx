import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Profile/About";
import Blogs from "./components/Profile/Blogs";
import { FollowersList, FollowingList } from "./components/Profile/FollowersList";
import ProfileHome from "./components/Profile/Home";
// import ReadingList from "./components/Profile/ReadingList";
import DraftsList from "./components/Profile/Drafts";
import NotesList from "./components/Profile/Notes";
import Settings from "./components/Profile/Settings";
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
import { useUserStore } from "./store/user";

const PRIVATE_ROUTES = [
	{ path: "drafts", element: <DraftsList /> },
	{ path: "notes", element: <NotesList /> },
	{ path: "settings", element: <Settings /> },
];

const PUBLIC_ROUTES = [
	{ path: "", element: <ProfileHome /> },
	{ path: "about", element: <About /> },
	{ path: "blogs", element: <Blogs title="Blogs" /> },
	// { path: "reading-list", element: <ReadingList /> },
	{ path: "followers", element: <FollowersList /> },
	{ path: "following", element: <FollowingList /> },
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
							path: "cw/:username",
							element: <Profile />,
							children: isLoggedIn ? [...PUBLIC_ROUTES, ...PRIVATE_ROUTES] : PUBLIC_ROUTES,
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
							element: <ProtectedRoutes />,
							children: [
								{
									path: "article/new",
									element: <CreateArticle />,
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

const AppRouter = () => {
	const user = useUserStore((s) => s.user);
	const router = createRouter(!!user);
	return <RouterProvider router={router} />;
};

export default AppRouter;
