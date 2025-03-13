import { useUser } from "@/store/user";
import NavBar from "@components/Navbar";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
	const [cookies] = useCookies(["access_token"]);
	const user = useUser();
	const location = useLocation();

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

	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default MainLayout;
