import AddToReadingListModal from "@/components/Modal/AddToReadingListModal";
import CommentsModal from "@/components/Modal/CommentsModal";
import CreateReadingListModal from "@/components/Modal/CreateReadingListModal";
import EditProfileModal from "@/components/Modal/EditProfileModal";
import EmailSentModal from "@/components/Modal/EmailSentModal";
import PersonalNotesModal from "@/components/Modal/PersonalNotesModal";
import PreviewArticleModal from "@/components/Modal/PreviewArticleModal";
import TermsAndConditionsModal from "@/components/Modal/TermsAndConditionsModal";
import PageContainer from "@/components/PageContainer";
import { ModalType, useActiveModal } from "@/store/modal";
import { cn } from "@/utils/helper";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	const isOpen = useActiveModal(ModalType.None);
	return (
		<PageContainer
			className={cn("relative", {
				"h-screen overflow-hidden": !isOpen,
			})}
		>
			<Outlet />
			<CommentsModal />
			<PersonalNotesModal />
			<TermsAndConditionsModal />
			<PreviewArticleModal />
			<EditProfileModal />
			<CreateReadingListModal />
			<AddToReadingListModal />
			<EmailSentModal />
		</PageContainer>
	);
};

export default AppLayout;
