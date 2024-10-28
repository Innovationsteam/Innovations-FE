/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export enum ModalType {
	None,
	Comments,
	PersonalNote,
	TermsAndConditions,
	Preview,
}

interface ModalStoreType {
	activeModal: { modal: ModalType; data: any };
	actions: {
		openModal: (modal: ModalType, data?: any) => void;
		closeModal: () => void;
	};
}

const useModalStore = create<ModalStoreType>((set) => ({
	activeModal: { modal: ModalType.None, data: null },
	actions: {
		openModal: (modal, data) => set({ activeModal: { modal, data } }),
		closeModal: () => set({ activeModal: { modal: ModalType.None, data: null } }),
	},
}));

export const useModal = () => useModalStore((s) => s.activeModal);

export const useActiveModal = (modal: ModalType) => {
	const activeModal = useModalStore((s) => s.activeModal);
	return activeModal.modal === modal;
};

export const useModalActions = () => useModalStore((s) => s.actions);
