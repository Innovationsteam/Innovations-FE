import PersonalNotesModal from "@/components/Modal/PersonalNotesModal";
import { ModalType, useActiveModal } from "@/store/modal";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import CommentsModal from "@components/Modal/CommentsModal";
import NavBar from "@components/Navbar";
import PageContainer from "@components/PageContainer";

const MainLayout = () => {
	const isOpen = useActiveModal([ModalType.Comments, ModalType.PersonalNote]);

	return (
		<PageContainer
			className={classNames("relative", {
				"h-screen overflow-hidden": isOpen,
			})}
		>
			<NavBar />
			<Outlet />
			<CommentsModal />
			<PersonalNotesModal />
		</PageContainer>
	);
};

export default MainLayout;
