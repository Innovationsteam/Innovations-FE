///////Worked On
import { publishArticle, saveAsDraft } from "@/actions/article.actions";
import { useModalActions } from "@/store/modal";
import { useUser } from "@/store/user";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const usePublishArticle = () => {
	const { closeModal } = useModalActions();
	const navigate = useNavigate();
	const user = useUser();

	return useMutation({
		mutationFn: (articleData: FormData) => publishArticle(articleData),
		onSuccess: (data) => {
			toast.success("Article published successfully! 🎉");
			closeModal();
			navigate(`/cw/${user?.username}/${data}`, {
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
