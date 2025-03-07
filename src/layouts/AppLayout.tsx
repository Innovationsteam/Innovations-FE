import AddToReadingListModal from "@/components/Modal/AddToReadingListModal";
import CommentsModal from "@/components/Modal/CommentsModal";
import CreateReadingListModal from "@/components/Modal/CreateReadingListModal";
import EditProfileModal from "@/components/Modal/EditProfileModal";
import EmailSentModal from "@/components/Modal/EmailSentModal";
import PersonalNotesModal from "@/components/Modal/PersonalNotesModal";
import PreviewArticleModal from "@/components/Modal/PreviewArticleModal";
import TermsAndConditionsModal from "@/components/Modal/TermsAndConditionsModal";
import WarningLoginModal from "@/components/Modal/WarningLoginModal";
import PageContainer from "@/components/PageContainer";
import { ModalType, useActiveModal } from "@/store/modal";
import { cn } from "@/utils/helper";
import { Outlet } from "react-router-dom";
import ResetTokenSentModal from "@/components/Modal/ResetTokenSentModal";
import NotificationModal from "@/components/Modal/NotificationModal";
const AppLayout = () => {
	const isOpen = useActiveModal(ModalType.NONE);
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
			<WarningLoginModal />
			<ResetTokenSentModal />
			<NotificationModal />
		</PageContainer>
	);
};

export default AppLayout;
