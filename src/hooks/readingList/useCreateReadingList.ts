import { createReadingList } from "@/actions/reading-list.actions";
import { useModalActions } from "@/store/modal";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateReadingList = () => {
	const { closeModal } = useModalActions();
	return useMutation({
		mutationFn: createReadingList,
		onSuccess: () => {
			closeModal();
			toast.success("Reading List Created");
		},
	});
};
