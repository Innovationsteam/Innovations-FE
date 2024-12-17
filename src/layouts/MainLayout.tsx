import PersonalNotesModal from "@/components/Modal/PersonalNotesModal";
import { ModalType, useActiveModal } from "@/store/modal";
import classNames from "classnames";
import { Outlet } from "react-router-dom";
import CommentsModal from "@components/Modal/CommentsModal";
import NavBar from "@components/Navbar";
import PageContainer from "@components/PageContainer";
import TermsAndConditionsModal from "@/components/Modal/TermsAndConditionsModal";
import PreviewArticleModal from "@/components/Modal/PreviewArticleModal";
import EditProfileModal from "@/components/Modal/EditProfileModal";
import CreateReadingListModal from "@/components/Modal/CreateReadingListModal";
import AddToReadingListModal from "@/components/Modal/AddToReadingListModal";

const MainLayout = () => {
	const isOpen = useActiveModal(ModalType.None);

	return (
		<PageContainer
			className={classNames("relative", {
				"h-screen overflow-hidden": !isOpen,
			})}
		>
			<NavBar />
			<Outlet />
			<CommentsModal />
			<PersonalNotesModal />
			<TermsAndConditionsModal />
			<PreviewArticleModal />
			<EditProfileModal />
			<CreateReadingListModal />
			<AddToReadingListModal />
		</PageContainer>
	);
};

export default MainLayout;
