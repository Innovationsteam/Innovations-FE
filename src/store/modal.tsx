/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

export enum ModalType {
  None,
  Comments,
  PersonalNote,
  TermsAndConditions,
  Preview,
  EDIT_PROFILE,
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
    openModal: (modal, data = null) => set({ activeModal: { modal, data } }),
    closeModal: () => set({ activeModal: { modal: ModalType.None, data: {} } }),
  },
}));

export const useModal = () => useModalStore((s) => s.activeModal);
export const useModalData = () => useModalStore((s) => s.activeModal).data;

export const useActiveModal = (modal: ModalType) => {
  const activeModal = useModalStore((s) => s.activeModal);
  return activeModal.modal === modal;
};

export const useModalActions = () => useModalStore((s) => s.actions);