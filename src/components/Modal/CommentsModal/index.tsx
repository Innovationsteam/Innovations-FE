import Container from "@/components/Container";
import { useAllComments } from "@/hooks/posts/useAllcomments";
import useSize from "@/hooks/useSize";
import { IComment } from "@/types/comment.types";
import { ModalType, useActiveModal, useModalActions, useModalData } from "@store/modal";
import { motion } from "framer-motion";
import AddCommentForm from "../../AddCommentForm";
import Comment from "../../Comment";
import ModalContainer from "../ModalContainer";
import CommentSkeleton from "./commentSkeleton";

const CommentsModal = () => {
	const { closeModal } = useModalActions();
	const isOpen = useActiveModal(ModalType.Comments);
	const [width] = useSize();
	const { postId } = useModalData<ModalType.Comments>();
	const { data: commentsResponse, isPending } = useAllComments(postId);

	return (
		<ModalContainer isOpen={isOpen}>
			<motion.div
				initial={width >= 1024 ? { x: "100%" } : { y: "100%" }}
				animate={width >= 1024 ? { x: "0%" } : { y: "0%" }}
				transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
				onClick={(e) => e.stopPropagation()}
				className="absolute bottom-0 h-[90vh] w-full overflow-hidden overflow-y-auto rounded-t-3xl bg-white lg:right-0 lg:h-screen lg:max-w-[480px] lg:rounded-none lg:rounded-tl-3xl"
			>
				<Container className="pb-5 pt-8">
					<header className="flex items-center">
						<h1 className="font-roboto text-xl font-medium">Response ({commentsResponse?.totalItems ?? 0})</h1>
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
					{isPending ? (
						<CommentSkeleton />
					) : (
						<div className="my-5">
							{commentsResponse?.comments?.map(({ content, createdAt, publicId, user: { username, profileImg } }: IComment) => (
								<Comment
									key={publicId}
									content={content}
									createdAt={createdAt}
									username={username}
									profile={profileImg}
									close={closeModal}
								/>
							))}
							{/* {commentsResponse?.totalItems < 1 ? <p>No comments yet</p> : null} */}
						</div>
					)}
					<AddCommentForm postId={postId} />
				</Container>
			</motion.div>
		</ModalContainer>
	);
};

export default CommentsModal;
