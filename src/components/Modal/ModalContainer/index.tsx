import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { createPortal } from "react-dom";
import useSize from "../../../hooks/useSize";
import Container from "../../Container";
import { cn } from "@/utils/helper";

interface ModalContainerProps {
	isOpen: boolean;
	children: React.ReactNode;
	className?: string;
}

const ModalContainer: FC<ModalContainerProps> = ({ children, isOpen, className }) => {
	const [width] = useSize();
	return (
		<>
			{createPortal(
				<AnimatePresence mode="popLayout">
					{isOpen ? (
						<motion.section
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="pointer-events-auto fixed inset-0 z-50 h-screen w-full overflow-hidden bg-[#EBEBEB] lg:bg-[#00000014]"
							// onClick={() => toggleModal(false)}
						>
							<motion.div
								initial={width >= 1024 ? { x: "100%" } : { y: "100%" }}
								animate={width >= 1024 ? { x: "0%" } : { y: "0%" }}
								transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
								onClick={(e) => e.stopPropagation()}
								className="absolute bottom-0 h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white lg:right-0 lg:h-screen lg:max-w-[480px] lg:rounded-none lg:rounded-tl-3xl"
							>
								<Container className={cn("pb-5", className)}>{children}</Container>
							</motion.div>
						</motion.section>
					) : null}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
};

export default ModalContainer;
