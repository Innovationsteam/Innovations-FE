import { ModalType, useActiveModal, useModalActions } from "@store/modal";
import AddCommentForm from "../../AddCommentForm";
import Comment from "../../Comment";
import ModalContainer from "../ModalContainer";

const CommentsModal = () => {
	const { closeModal } = useModalActions();
	const isOpen = useActiveModal([ModalType.Comments]);

	return (
		<ModalContainer
			isOpen={isOpen}
			className="pt-8"
		>
			<header className="flex items-center">
				<h1 className="font-roboto text-xl font-medium">Response (21)</h1>
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
			<div className="my-5">
				{Array.from({ length: 10 }).map(() => (
					<Comment />
				))}
			</div>
			<AddCommentForm />
		</ModalContainer>
	);
};

export default CommentsModal;
