import Container from "@/components/Container";
import useSize from "@/hooks/useSize";
import { ModalType, useActiveModal, useModalActions, useModalData } from "@store/modal";
import { motion } from "framer-motion";
import AddCommentForm from "../../AddCommentForm";
import Comment from "../../Comment";
import ModalContainer from "../ModalContainer";
import { IComment } from "@/types/comment.type";
import { useAllComments } from "@/hooks/useAllcomments";
import CommentSkeleton from "./commentSkeleton";
const CommentsModal = () => {
	const { closeModal } = useModalActions();
	const isOpen = useActiveModal(ModalType.Comments);
	const [width] = useSize();
	const modalData = useModalData() || {};
	const postID = modalData.postID?.id;
	const { data: commentsResponse, isLoading } = useAllComments(postID);
	//@ts-ignore
	const comments  = commentsResponse?.comments 
	if (!isOpen || !postID) {
		return null;
	}

	return (
		<ModalContainer isOpen={isOpen}>
			<motion.div
				initial={width >= 1024 ? { x: "100%" } : { y: "100%" }}
				animate={width >= 1024 ? { x: "0%" } : { y: "0%" }}
				transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
				onClick={(e) => e.stopPropagation()}
				className="absolute bottom-0 h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-white lg:right-0 lg:h-screen lg:max-w-[480px] lg:rounded-none lg:rounded-tl-3xl"
			>
				<Container className="pb-5 pt-8">
					<header className="flex items-center">
						<h1 className="font-roboto text-xl font-medium">Response ({comments? comments.length: " "})</h1>
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
					</header>
					{isLoading ? <CommentSkeleton /> : null}
					<div className="my-5">
						{comments?.map(({ content, createdAt, publicId, user: { username, profileImg } }: IComment) => (
							<Comment
								key={publicId}
								content={content}
								createdAt={createdAt}
								username={username}
								profile={profileImg}
							/>
						))}
						{!isLoading && comments && comments?.length < 1 ? <p>No comments yet</p> : null}
					</div>
					<AddCommentForm />
				</Container>
			</motion.div>
		</ModalContainer>
	);
};

export default CommentsModal;