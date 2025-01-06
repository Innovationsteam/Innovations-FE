import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useUserStore } from "@/store/user";

const ProtectedRoutes = () => {
	const [cookies] = useCookies(["access_token"]);
	const user = useUserStore((s) => s.user);
	const location = useLocation();

	// If there's an access token, allow access to protected routes
	if (user) {
		return <Outlet />;
	}

	// If there's a refresh token cookie and we're attempting to refresh, show loading screen
	if (!user && cookies?.access_token) {
		return (
			<Navigate
				to="/redirecting"
				state={{ from: location }}
				replace
			/>
		);
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
