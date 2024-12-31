import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import { CircleX } from "lucide-react";
import CreateReadingListForm from "../forms/CreateReadingListForm";
import ModalContainer from "./ModalContainer";

const CreateReadingListModal = () => {
	const isOpen = useActiveModal(ModalType.CREATE_READING_LIST);
	const { closeModal } = useModalActions();

	return (
		<ModalContainer isOpen={isOpen}>
			<div className="flex min-h-full items-center justify-center">
				<div className="h-fit w-full max-w-[500px] shrink-0 rounded-[20px] bg-white px-5 py-9">
					<header className="mb-8 flex items-center">
						<span className="font-roboto text-2xl font-semibold">Create New List</span>
						<CircleX
							onClick={() => closeModal()}
							className="ml-auto cursor-pointer"
							size={24}
						/>
					</header>
					<CreateReadingListForm />
				</div>
			</div>
		</ModalContainer>
	);
};

export default CreateReadingListModal;
