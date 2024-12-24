///////Worked On
import { useMutation } from "@tanstack/react-query";
import { publishArticle, saveAsDraft } from "@/queries/publish.queries";
import toast from "react-hot-toast";
import { useModalActions } from "@/store/modal";
import { useNavigate } from "react-router-dom";
import { asDraft } from "@/types/post.types";
export const setArticle = () => {
	const { closeModal } = useModalActions();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: ({ data, Hash }: { data: any; Hash: string }) => publishArticle(data, Hash),
		onSuccess: (data) => {
			toast.success("Article published successfully! 🎉");
			closeModal();
			navigate(`/article/${data}`, {
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
		mutationFn: ({ title, content, img }: asDraft) => saveAsDraft({ title, content, img }),
		onSuccess: () => {
			toast.success("draft saved! 🎉");
			navigate("/home");
		},
		onError: (error) => {
			toast.error("Failed to upload 🚫");
			console.log(error);
		},
	});
};
