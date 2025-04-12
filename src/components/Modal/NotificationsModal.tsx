import { useNotifications } from "@/hooks/useNotifications";
import useSize from "@/hooks/useSize";
import { formatDate, truncateText } from "@/lib/utils";
import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import UserProfileImage from "../UserProfileImage";
import ModalContainer from "./ModalContainer";

const NotificationsModal = () => {
	const { closeModal } = useModalActions();
	const isOpen = useActiveModal(ModalType.NOTIFICATIONS);
	const [width] = useSize();

	const { data } = useNotifications();

	return (
		<ModalContainer isOpen={isOpen}>
			<motion.div
				initial={width >= 1024 ? { x: "100%" } : { y: "100%" }}
				animate={width >= 1024 ? { x: "0%" } : { y: "0%" }}
				exit={width >= 1024 ? { x: "100%" } : { y: "100%" }}
				transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
				onClick={(e) => e.stopPropagation()}
				className="absolute bottom-0 h-[90vh] w-full overflow-hidden rounded-t-3xl bg-white lg:right-0 lg:h-screen lg:max-w-[480px] lg:rounded-none lg:rounded-tl-3xl"
			>
				<div className="px-5 pt-8 md:px-[40px]">
					<header className="mb-5 flex items-center">
						<h1 className="font-roboto text-xl font-medium">Notifications ({data?.totalItems ?? "0"})</h1>
						<button
							className="ml-auto rotate-90 transition-transform duration-200 ease-in-out hover:rotate-90"
							onClick={() => closeModal()}
						>
							<img
								className="size-8 object-cover"
								src="/assets/icons/close.svg"
								alt=""
							/>
						</button>
					</header>
				</div>
				{data && data.notifications.length >= 1 ? (
					<ul className="h-full space-y-5 overflow-y-auto px-5 pb-24 sm:space-y-4 md:px-[40px]">
						{data.notifications.map((notification) => (
							<Link
								onClick={() => closeModal()}
								to={notification.post.url}
								key={notification.content}
								className="flex items-center gap-2 rounded-lg border p-2 text-card-foreground shadow-sm transition-colors hover:bg-muted/50 sm:gap-4 sm:p-3"
							>
								<UserProfileImage fullName={notification.commenter.username} />
								<div className="min-w-0 flex-1">
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
										<p className="truncate text-sm font-medium">{notification.post.title}</p>
										<span className="whitespace-nowrap text-xs text-muted-foreground sm:ml-2">{formatDate(notification.date.toISOString())}</span>
									</div>
									<p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">{truncateText(notification.content, 70)}</p>
								</div>
							</Link>
						))}
					</ul>
				) : (
					<p className="text-center font-roboto text-base">No Notifications yet</p>
				)}
			</motion.div>
		</ModalContainer>
	);
};

export default NotificationsModal;
