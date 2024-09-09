import { create } from "zustand";

export enum ModalType {
	None,
	Comments,
	PersonalNote,
}

interface ModalStoreType {
	activeModal: ModalType;
	actions: {
		openModal: (modal: ModalType) => void;
		closeModal: () => void;
	};
}

const useModalStore = create<ModalStoreType>((set) => ({
	activeModal: ModalType.None,
	actions: {
		openModal: (modal) => set({ activeModal: modal }),
		closeModal: () => set({ activeModal: ModalType.None }),
	},
}));

export const useActiveModal = (modals: ModalType[]) => {
	const activeModal = useModalStore((s) => s.activeModal);
	return modals.includes(activeModal);
};

export const useModalActions = () => useModalStore((s) => s.actions);
