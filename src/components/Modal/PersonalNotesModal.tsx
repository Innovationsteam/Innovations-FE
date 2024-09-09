import { ModalType, useActiveModal, useModalActions } from "@store/modal";
import TipTapEditor from "../Editor/TipTapEditor";
import ModalContainer from "./ModalContainer";

const PersonalNotesModal = () => {
	const isOpen = useActiveModal([ModalType.PersonalNote]);
	const { closeModal } = useModalActions();

	return (
		<ModalContainer
			className="relative px-10 pt-10"
			isOpen={isOpen}
		>
			<div className="flex items-center">
				<span className="text-xl font-semibold">Personal Note</span>
				<button
					className="ml-auto rotate-90 transition-transform duration-200 ease-in-out hover:rotate-90"
					onClick={closeModal}
				>
					<img
						className="size-8 object-cover"
						src="/assets/icons/close.svg"
						alt=""
					/>
				</button>
			</div>
			<TipTapEditor
				className="mt-6 min-h-[66svh]"
				titlePlaceholder={"Title"}
				textPlaceholder={"Type your note here or click the plus icon for more options"}
			/>
			<button
				type="button"
				className="relative bottom-0 mx-auto mt-5 w-full max-w-[200px] rounded-lg bg-[#1C4532] py-3 font-roboto text-base font-medium text-white disabled:bg-[#979797] md:px-6"
			>
				Save
			</button>
		</ModalContainer>
	);
};

export default PersonalNotesModal;
