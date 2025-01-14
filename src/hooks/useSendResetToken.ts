import { sendResetToken } from "@/actions/auth.actions";
import { useMutation } from "@tanstack/react-query";
import { ModalType, useModalActions } from "@/store/modal";

export const useSendResetToken = () => {
	const { openModal } = useModalActions();
	return useMutation({
		mutationFn: sendResetToken,
		onSuccess: () => openModal(ModalType.RESET_TOKEN_SENT),
	});
};
