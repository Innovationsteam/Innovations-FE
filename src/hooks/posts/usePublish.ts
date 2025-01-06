///////Worked On
import { useMutation } from "@tanstack/react-query";
import { publishArticle, saveAsDraft } from "@/actions/article.actions";
import toast from "react-hot-toast";
import { useModalActions } from "@/store/modal";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/user";

export const usePublishArticle = () => {
	const { closeModal } = useModalActions();
	const navigate = useNavigate();
	const user = useUserStore((s) => s.user);

	return useMutation({
		mutationFn: (articleData: FormData) => publishArticle(articleData),
		onSuccess: (data) => {
			toast.success("Article published successfully! 🎉");
			closeModal();
			navigate(`/article/${user?.username}/${data}`, {
				state: data,
			});
		},
	});
};

export const useDraftArticle = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: (draftForm: FormData) => saveAsDraft(draftForm),
		onSuccess: () => {
			toast.success("draft saved! 🎉");
			navigate("/feed");
		},
	});
};
