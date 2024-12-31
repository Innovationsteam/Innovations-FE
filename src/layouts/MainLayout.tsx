import NavBar from "@components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default MainLayout;
