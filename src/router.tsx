import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Profile/About";
import Blogs from "./components/Profile/Blogs";
import DraftsList from "./components/Profile/Drafts";
import { FollowList } from "./components/Profile/FollowList";
import ProfileHome from "./components/Profile/Home";
import NotesList from "./components/Profile/Notes";
import Settings from "./components/Profile/Settings";
import ProtectedRoutes from "./components/ProtectedRoutes";
import useServiceWorker from "./hooks/useServiceWorker";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Article from "./pages/Article";
import ChangePassword from "./pages/ChangePassword";
import CreateArticle from "./pages/CreateArticle";
import Home from "./pages/Home";
import Loader from "./pages/Loader";
// import Login from "./pages/Login_old";
import Login2 from "./pages/Login";
// import LoginForm2 from "@/components/LoginForm";
import NewStory from "./pages/NewStory";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import Stories from "./pages/Stories";
import VerifyOTP from "./pages/VerifyOTP";
import VerifyResetOTP from "./pages/VerifyResetOTP";
import { useUser } from "./store/user";

const PRIVATE_ROUTES = [
	{ path: "drafts", element: <DraftsList /> },
	{ path: "notes", element: <NotesList /> },
	{ path: "settings", element: <Settings /> },
];

const PUBLIC_ROUTES = [
	{ path: "", element: <ProfileHome /> },
	{ path: "about", element: <About /> },
	{ path: "blogs", element: <Blogs title="Blogs" /> },
	{ path: "followers", element: <FollowList type="followers" /> },
	{ path: "following", element: <FollowList type="following" /> },
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
							path: "search",
							element: <Home />,
						},
						{
							path: "cw/:postId",
							element: <Article />,
						},
						{
							path: "cw/:username/:slug",
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
									path: "cw/new",
									element: <CreateArticle />,
								},
							],
						},
					],
				},
				{
					path: "login",
					// element: <Login />,
					element: <Login2 />,
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
					path: "/reset-password",
					element: <VerifyResetOTP />,
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
	const user = useUser();
	const router = createRouter(!!user);
	useServiceWorker(!!user);
	return <RouterProvider router={router} />;
};

export default AppRouter;
