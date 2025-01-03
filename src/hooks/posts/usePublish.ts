///////Worked On
import { useMutation } from "@tanstack/react-query";
import { publishArticle, saveAsDraft } from "@/actions/article.actions";
import toast from "react-hot-toast";
import { useModalActions } from "@/store/modal";
import { useNavigate } from "react-router-dom";
import { user } from "@/lib/userData";
export const setArticle = () => {
	const { closeModal } = useModalActions();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: (articleData: FormData) => publishArticle(articleData),
		onSuccess: (data) => {
			toast.success("Article published successfully! 🎉");
			closeModal();
			navigate(`/article/${user?.username}/${data}`, {
				state: data,
			});
		},
		onError: (error) => {
			toast.error("An Error occurred 🚫");
			console.log(error);
		},
	});
};
export const setDrafts = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: (draftForm: FormData) => saveAsDraft(draftForm),
		onSuccess: () => {
			toast.success("draft saved! 🎉");
			navigate("/feed");
		},
		onError: (error) => {
			toast.error("Failed to upload 🚫");
			console.log(error);
		},
	});
};
