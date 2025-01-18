/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { useUserStore } from "./user";

export enum ModalType {
	NONE,
	Comments,
	PersonalNote,
	TermsAndConditions,
	Preview,
	EDIT_PROFILE,
	CREATE_READING_LIST,
	ADD_TO_READING_LIST,
	EMAIL_SENT,
	WARNING_LOGIN,
	RESET_TOKEN_SENT,
}

// Typed Version of ModalStore
interface ModalDataMap {
	[ModalType.NONE]: null;
	[ModalType.Comments]: { postId: string };
	[ModalType.ADD_TO_READING_LIST]: { postId: string };
	[ModalType.Preview]: { article: string; articleImg: File; backdrop: string | null; articlebody: string[] };
	[ModalType.PersonalNote]: any;
	[ModalType.TermsAndConditions]: any;
	[ModalType.EDIT_PROFILE]: any;
	[ModalType.CREATE_READING_LIST]: any;
	[ModalType.EMAIL_SENT]: any;
	[ModalType.WARNING_LOGIN]: any;
	[ModalType.RESET_TOKEN_SENT]: any;
}

interface ModalStoreProps {
	activeModal: ModalType;
	modalData: ModalDataMap[keyof ModalDataMap] | null;
	actions: {
		openModal: <T extends ModalType>(modal: T, payload?: ModalDataMap[T] | null) => void;
		closeModal: (onClose?: () => void) => void;
	};
}

const useModalStore = create<ModalStoreProps>((set) => ({
	activeModal: ModalType.NONE,
	modalData: null,
	actions: {
		openModal: (modal, payload = null) => {
			set({ activeModal: modal, modalData: payload });
		},
		closeModal: (onClose) => {
			if (onClose) onClose();
			set({ activeModal: ModalType.NONE, modalData: null });
		},
	},
}));

export const useActiveModal = (modal: ModalType) => {
	const activeModal = useModalStore((s) => s.activeModal);
	return modal === activeModal;
};

export const useModalActions = () => {
	const actions = useModalStore((s) => s.actions);
	const isLoggedIn = useUserStore((s) => s.user);

	return {
		openModal: <T extends ModalType>(modal: T, payload?: ModalDataMap[T] | null) => {
			if (isLoggedIn) actions.openModal(modal, payload);
			else actions.openModal(ModalType.WARNING_LOGIN, null);
		},
		closeModal: actions.closeModal,
	};
};

// Generic modal data hook with type inference
export function useModalData<T extends ModalType>() {
	const modalData = useModalStore((s) => s.modalData);
	return (modalData ?? {}) as ModalDataMap[T];
}
