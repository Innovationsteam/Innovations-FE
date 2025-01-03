import useSize from "@/hooks/useSize";
import { ModalType, useActiveModal, useModalActions } from "@store/modal";
import { motion } from "framer-motion";
import Container from "../Container";
import PersonalNoteForm from "../PersonalNoteForm";
import ModalContainer from "./ModalContainer";

const PersonalNotesModal = () => {
	const isOpen = useActiveModal(ModalType.PersonalNote);
	const { closeModal } = useModalActions();
	const [width] = useSize();

	return (
		<ModalContainer isOpen={isOpen}>
			<motion.div
				initial={width >= 1024 ? { x: "100%" } : { y: "100%" }}
				animate={width >= 1024 ? { x: "0%" } : { y: "0%" }}
				transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
				onClick={(e) => e.stopPropagation()}
				className="absolute bottom-0 h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white lg:right-0 lg:h-screen lg:max-w-[480px] lg:rounded-none lg:rounded-tl-3xl"
			>
				<Container className="relative h-full px-10 pb-5 pt-10">
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
					<PersonalNoteForm />
				</Container>
			</motion.div>
		</ModalContainer>
	);
};

export default PersonalNotesModal;
