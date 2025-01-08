import { useUserProfile } from "@/hooks/useUserProfile";
import { useUserStore } from "@/store/user";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useLocation } from "react-router-dom";

const Redirecting = () => {
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

	if (user) {
		return (
			<Navigate
				to={location.state?.from?.pathname || "/"}
				replace
			/>
		);
	}

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background">
			<Loader2 className="h-16 w-16 animate-spin text-primary" />
			<h1 className="mt-4 text-2xl font-bold text-foreground">Refreshing your session...</h1>
			<p className="mt-2 text-muted-foreground">Please wait while we securely log you in.</p>
		</div>
	);
};

export default Redirecting;
