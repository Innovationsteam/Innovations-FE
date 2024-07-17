import classNames from "classnames";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import { useCommentModal } from "../store/modal";
import CommentsModal from "../components/Modal/CommentsModal";
import { useEffect } from "react";

const MainLayout = () => {
	const { isOpen } = useCommentModal();

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return (
		<PageContainer
			className={classNames("relative", {
				"h-screen overflow-hidden": isOpen,
			})}
		>
			<NavBar />
			<Outlet />
			<CommentsModal />
		</PageContainer>
	);
};

export default MainLayout;
