import { reportPost } from "@/actions/post.actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
type OnSuccessCallback = () => void;

export const useReportPost = (onSuccessCallback?: OnSuccessCallback) => {
	return useMutation({
		mutationFn: (data: { postId: string; payload: { reason: string } }) => reportPost(data.postId, data.payload),
		onError: () => {
			toast.error("Failed to report");
			toast.error("Try again later");
		},
		onSuccess: () => {
			if (onSuccessCallback) {
				onSuccessCallback();
			}
		},
	});
};
