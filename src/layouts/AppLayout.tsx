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
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";
import ResetTokenSentModal from "@/components/Modal/ResetTokenSentModal";
import AlertMessageModal from "@/components/Modal/AlertMessageModal";
import NotificationsModal from "@/components/Modal/NotificationsModal";
import ReportPostModal from "@/components/Modal/ReportPostModal";

const AppLayout = () => {
	const isOpen = useActiveModal(ModalType.NONE);
	return (
		<PageContainer
			className={cn("relative", {
				"h-screen w-[calc(100%_-_15px)] overflow-hidden": !isOpen,
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
			<ReportPostModal />
			<WarningLoginModal />
			<ResetTokenSentModal />
			<AlertMessageModal />
			<NotificationsModal />
		</PageContainer>
	);
};

export default AppLayout;
