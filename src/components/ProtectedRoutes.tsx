import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoutes = () => {
	const [cookies] = useCookies(["access_token"]);
	const location = useLocation();
	return cookies?.access_token ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			state={{ from: location }}
			replace
		/>
	);
};

export default ProtectedRoutes;
