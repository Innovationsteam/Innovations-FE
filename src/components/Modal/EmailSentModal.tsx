import { useActiveModal, ModalType } from "@/store/modal";
import ModalContainer from "./ModalContainer";
import { useNavigate } from "react-router-dom";

const EmailSentModal = () => {
	const isOpen = useActiveModal(ModalType.EMAIL_SENT);
	const navigate = useNavigate();

	return (
		<ModalContainer
			isOpen={isOpen}
			onClose={() => navigate("/login")}
			closeOnClick
			className="flex items-center justify-center"
		>
			<div className="flex h-[232px] w-full max-w-[min(647px_,_80vw)] flex-col items-center justify-center rounded-lg bg-white p-7 text-center font-roboto">
				<h1 className="mb-3 text-4xl font-bold">Email Sent</h1>
				<p className="text-lg text-subtitle">Kindly check your email to verify your account and begin your journey with ChristianWrites!</p>
			</div>
		</ModalContainer>
	);
};

export default EmailSentModal;
