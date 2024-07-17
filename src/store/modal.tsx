import { create } from "zustand";

interface ModalStoreType {
	isCommentOpen: boolean;
	toggleComment: (isOpen: boolean) => void;
}

const useModalStore = create<ModalStoreType>((set) => ({
	isCommentOpen: false,
	toggleComment: (isOpen) => set(() => ({ isCommentOpen: isOpen })),
}));

export const useCommentModal = () => {
	const isOpen = useModalStore((s) => s.isCommentOpen);
	const toggleModal = useModalStore((s) => s.toggleComment);
	return { isOpen, toggleModal };
};
