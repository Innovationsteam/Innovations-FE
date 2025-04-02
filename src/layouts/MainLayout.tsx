import { useUserProfile } from "@/hooks/useUserProfile";
import { useUserStore } from "@/store/user";
import NavBar from "@components/Navbar";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
	const [cookies] = useCookies(["access_token"]);
	const location = useLocation();

	const { data: userData } = useUserProfile();
	const { user, setUser } = useUserStore();

	useEffect(() => {
		if (userData && !user) {
			setUser(userData); // Update the user data in the store only if it hasn't been set
		}
	}, [userData, user, setUser]);

	if (!user && !cookies?.access_token) {
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}

	if (!user && cookies?.access_token) {
		return (
			<div className="flex h-screen items-center justify-center bg-background">
				<div className="aspect-auto w-[200px] animate-pulse">
					<img
						className="h-full w-full object-cover object-center"
						src="/assets/images/logo.ico"
						alt="Christain Writes Logo"
					/>
				</div>
			</div>
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
