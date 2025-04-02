import { useUser } from "@/store/user";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
	const user = useUser();
	const location = useLocation();

	// If there's an access token, allow access to protected routes
	if (user) {
		return <Outlet />;
	}

	// If there's no refresh token cookie or refresh attempt has failed, redirect to login
	return (
		<Navigate
			to="/login"
			state={{ from: location }}
			replace
		/>
	);
};

export default ProtectedRoutes;
