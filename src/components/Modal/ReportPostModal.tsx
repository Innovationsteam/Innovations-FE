import { useState } from "react";
import useSize from "@/hooks/useSize";
import { ModalType, useActiveModal, useModalActions, useModalData } from "@store/modal";
import { motion } from "framer-motion";
import Container from "../Container";
import ModalContainer from "./ModalContainer";
import { REPORT_POST_DEFAULTS } from "@/lib/constants";
import { useReportPost } from "@/hooks/posts/useReportPost";
import { Typewriter } from "react-simple-typewriter";

const ReportPostModal = () => {
	const isOpen = useActiveModal(ModalType.REPORT_POST);
	const { closeModal } = useModalActions();
	const [width] = useSize();
	const [complete, setComplete] = useState(false);
	const { postId } = useModalData() || {};
	const { mutate: reportPost } = useReportPost(() => setComplete(true));

	const sendReport = (reason: string) => {
		reportPost({ postId: postId, payload: { reason } });
	};
	const close = () => {
		setComplete(false);
		closeModal();
	};
	return (
		<ModalContainer isOpen={isOpen}>
			<motion.div
				initial={width >= 768 ? { scale: 0 } : { y: "100%" }}
				animate={isOpen ? (width >= 768 ? { scale: 1 } : { y: "0%" }) : width >= 768 ? { scale: 0 } : { y: "100%" }}
				transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
				onClick={(e) => e.stopPropagation()}
				className="flex h-full items-end justify-center md:items-center md:justify-center"
			>
				<Container className={`position-relative absolute flex h-1/2 w-full flex-col overflow-y-auto rounded-t-3xl bg-white scrollbar-hide md:h-1/2 md:max-w-[480px] md:rounded-3xl`}>
					<div className="sticky top-0 flex items-center justify-between bg-white pt-4 ">
						<span className="text-xl font-bold">Report Post</span>
						<button
							className="ml-4 rotate-90 transition-transform duration-200 ease-in-out hover:rotate-90"
							onClick={() => close()}
						>
							<img
								className="size-8 object-cover"
								src="/assets/icons/close.svg"
								alt="Close"
							/>
						</button>
					</div>
					<div className="flex-grow pt-2">
						{complete ? (
							<div className="mt-5 flex h-full w-full flex-col items-center justify-center">
								<div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-100">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="50"
										height="50"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#4caf50"
										strokeWidth="3"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								</div>
								<div className="mt-4">
									<p className="mb-4 text-center text-xl font-bold">
										<Typewriter
											words={["Thank you for sharing your thoughts."]}
											loop={1}
											cursor={true}
											cursorStyle="|"
											typeSpeed={70}
											deleteSpeed={50}
											delaySpeed={1000}
										/>
									</p>
									<p className="font-semi-bold text-md text-center">
										<Typewriter
											words={["We utilize this feedback to reduce the amount of similar content you see in the future."]}
											loop={1}
											cursor={true}
											cursorStyle="|"
											typeSpeed={70}
											deleteSpeed={50}
											delaySpeed={1000}
										/>
									</p>
								</div>
							</div>
						) : (
							<>
								<p className="font-bold">Why are you reporting this post?</p>
								<ul>
									{REPORT_POST_DEFAULTS.map((item: string) => (
										<div
											key={item}
											className="mb-1 cursor-pointer py-3 hover:rounded hover:bg-gray-200"
											onClick={() => sendReport(item)}
										>
											{item}
										</div>
									))}
								</ul>
							</>
						)}
					</div>
					{complete && (
						<motion.button
							className="mb-4 mt-auto h-12 w-full rounded-3xl bg-[#16a34a] text-white transition duration-300 ease-in-out hover:bg-[#148c3a]"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							onClick={() => close()}
						>
							Done
						</motion.button>
					)}
				</Container>
			</motion.div>
		</ModalContainer>
	);
};

export default ReportPostModal;
