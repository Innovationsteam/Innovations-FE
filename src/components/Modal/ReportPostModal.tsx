import useSize from "@/hooks/useSize";
import { ModalType, useActiveModal, useModalActions } from "@store/modal";
import { motion } from "framer-motion";
import Container from "../Container";
import ModalContainer from "./ModalContainer";
import { REPORT_POST_DEFAULTS } from "@/lib/constants";
const ReportPostModal = () => {
	const isOpen = useActiveModal(ModalType.REPORT_POST);
	const { closeModal } = useModalActions();
	const [width] = useSize();

	return (
		<ModalContainer isOpen={isOpen}>
			<motion.div
				initial={width >= 768 ? { scale: 0 } : { y: "100%" }}
				animate={width >= 768 ? { scale: 1 } : { y: "0%" }}
				transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
				onClick={(e) => e.stopPropagation()}
				className="bottom-0 flex h-full items-end justify-center md:items-center md:justify-center"
			>
				<Container className={`absolute h-1/2 w-full overflow-y-auto rounded-t-3xl bg-white scrollbar-hide md:h-1/2 md:max-w-[480px] md:rounded-3xl`}>
					<div className="sticky top-0 flex items-center justify-between bg-white pt-4 ">
						<span className=" text-xl font-bold">Report Post</span>
						<button
							className="ml-4 rotate-90 transition-transform duration-200 ease-in-out hover:rotate-90"
							onClick={() => closeModal()}
						>
							<img
								className="size-8 object-cover"
								src="/assets/icons/close.svg"
								alt="Close"
							/>
						</button>
					</div>
					<div className="pt-2">
						<p className="font-bold">Why are you reporting this post?</p>{" "}
						<ul>
							{REPORT_POST_DEFAULTS.map((item: string) => {
								return (
									<>
										<p className="mb-1 py-3">{item}</p>
									</>
								);
							})}
						</ul>
					</div>
				</Container>
			</motion.div>
		</ModalContainer>
	);
};

export default ReportPostModal;
