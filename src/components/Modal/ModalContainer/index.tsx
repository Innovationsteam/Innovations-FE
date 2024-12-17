import { useModalActions } from "@/store/modal";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { createPortal } from "react-dom";

interface ModalContainerProps {
	isOpen: boolean;
	children: React.ReactNode;
	closeOnClick?: boolean;
}

const ModalContainer: FC<ModalContainerProps> = ({ children, isOpen, closeOnClick }) => {
	const { closeModal } = useModalActions();

	function close() {
		if (closeOnClick) closeModal();
	}
	return (
		<>
			{createPortal(
				<AnimatePresence mode="sync">
					{isOpen ? (
						<motion.section
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="pointer-events-auto fixed inset-0 z-50 h-full min-h-screen w-full overflow-auto bg-[#14141580] backdrop-blur-[2px]"
							onClick={close}
						>
							{children}
						</motion.section>
					) : null}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
};

export default ModalContainer;
