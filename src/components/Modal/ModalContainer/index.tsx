import { cn } from "@/lib/utils";
import { useModalActions } from "@/store/modal";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { createPortal } from "react-dom";

interface ModalContainerProps {
	isOpen: boolean;
	children: React.ReactNode;
	closeOnClick?: boolean;
	className?: string;
	onClose?: () => void;
}

const ModalContainer: FC<ModalContainerProps> = ({ children, className, isOpen, closeOnClick, onClose }) => {
	const { closeModal } = useModalActions();

	function close() {
		if (closeOnClick) closeModal(onClose);
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
							className={cn("pointer-events-auto fixed inset-0 z-50 h-full min-h-screen w-full overflow-auto bg-[#14141580] backdrop-blur-[2px]", className)}
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
