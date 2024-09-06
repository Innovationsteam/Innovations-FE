import classNames from "classnames";
import { Outlet } from "react-router-dom";
import CommentsModal from "../components/Modal/CommentsModal";
import NavBar from "../components/Navbar";
import PageContainer from "../components/PageContainer";
import { useCommentModal } from "../store/modal";

const MainLayout = () => {
	const { isOpen } = useCommentModal();

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
