import { ModalType, useActiveModal, useModalActions, useModalData } from "@/store/modal";
import ModalContainer from "./ModalContainer";
import { CircleX } from "lucide-react";

const NotificationModal = () => {
	const isOpen = useActiveModal(ModalType.NOTIFICATION);
	const { title, description } = useModalData<ModalType.NOTIFICATION>();
	const { closeModal } = useModalActions();

	return (
		<ModalContainer
			isOpen={isOpen}
			closeOnClick
			className="flex items-center justify-center"
		>
			<div className="relative flex h-fit w-full max-w-[min(647px_,_80vw)] flex-col items-center justify-center rounded-lg bg-white p-7 text-center font-roboto">
				<CircleX
					onClick={() => closeModal()}
					className="absolute right-7 top-7 rotate-90 cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-90"
					size={24}
				/>
				<h1 className="mb-3 text-4xl font-bold">{title}</h1>
				<p className="text-lg text-subtitle">{description}</p>
			</div>
		</ModalContainer>
	);
};

export default NotificationModal;
