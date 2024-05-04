import { Route, Routes } from "react-router-dom";
import Loader from "./pages/Loader";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Loader />}
			/>
			<Route
				path="/home"
				element={<Home />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/signUp"
				element={<SignUp />}
			/>
			<Route
				path="/verify"
				element={<VerifyOTP />}
			/>
			<Route
				path="/reset-password"
				element={<ResetPassword />}
			/>
			<Route
				path="/change-password"
				element={<ChangePassword />}
			/>
		</Routes>
	);
}

export default App;
