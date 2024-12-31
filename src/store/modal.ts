/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export enum ModalType {
	None,
	Comments,
	PersonalNote,
	TermsAndConditions,
	Preview,
	EDIT_PROFILE,
	CREATE_READING_LIST,
	ADD_TO_READING_LIST,
	EMAIL_SENT,
}

interface ModalStoreType {
	activeModal: { modal: ModalType; data: any };
	actions: {
		openModal: (modal: ModalType, data?: any) => void;
		closeModal: (onClose?: () => void) => void;
	};
}

const useModalStore = create<ModalStoreType>((set) => ({
	activeModal: { modal: ModalType.None, data: null },
	actions: {
		openModal: (modal, data = null) => set({ activeModal: { modal, data } }),
		closeModal: (onClose) => {
			if (onClose) onClose();
			return set({ activeModal: { modal: ModalType.None, data: null } });
		},
	},
}));

export const useModal = () => useModalStore((s) => s.activeModal);
export const useModalData = () => useModalStore((s) => s.activeModal).data;

export const useActiveModal = (modal: ModalType) => {
	const activeModal = useModalStore((s) => s.activeModal);
	return activeModal.modal === modal;
};

export const useModalActions = () => useModalStore((s) => s.actions);

// Typed Version of ModalStore

// interface ModalDataMap {
//   [ModalType.None]: null;
//   [ModalType.GiftCard]: Service;
//   [ModalType.Cart]: {
//     items: Array<{ id: string; quantity: number }>;
//     total: number;
//   };
//   [ModalType.Success]: {
//     message: string;
//     redirectUrl?: string;
//   };
//   [ModalType.Failed]: {
//     error: string;
//     code?: number;
//   };
// }

// interface ModalStoreProps {
//   activeModal: ModalType;
//   modalData: ModalDataMap[keyof ModalDataMap] | null;
//   actions: {
//     openModal: <T extends ModalType>(
//       modal: T,
//       payload?: ModalDataMap[T]
//     ) => void;
//     closeModal: () => void;
//   };
// }

// const useModalStore = create<ModalStoreProps>((set) => ({
//   activeModal: ModalType.None,
//   modalData: null,
//   actions: {
//     openModal: (modal, payload) =>
//       set({ activeModal: modal, modalData: payload ?? null }),
//     closeModal: () => {
//       set({ activeModal: ModalType.None, modalData: null });
//     },
//   },
// }));

// export const useActiveModal = (modal: ModalType) => {
//   const activeModal = useModalStore((s) => s.activeModal);
//   return modal === activeModal;
// };

// export const useModalActions = () => useModalStore((s) => s.actions);

// // Generic modal data hook with type inference
// export function useModalData<T extends ModalType>() {
//   const modalData = useModalStore((s) => s.modalData);
//   return modalData as ModalDataMap[T];
// }
