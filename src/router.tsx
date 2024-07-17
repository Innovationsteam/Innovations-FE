import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Article from "./pages/Article";
import ChangePassword from "./pages/ChangePassword";
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
				path: "article",
				element: <Article />,
			},
			{
				path: "profile",
				element: <Profile />,
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
