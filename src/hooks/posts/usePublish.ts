///////Worked On
import { useMutation } from "@tanstack/react-query";
import { publishArticle, saveAsDraft } from "@/queries/publish.queries";
import toast from "react-hot-toast";
import { useModalActions } from "@/store/modal";
import { useNavigate } from "react-router-dom";
import { asDraft } from "@/types/post.types";
import { user } from "@/lib/userData";
export const setArticle = () => {
	const { closeModal } = useModalActions();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: ({ data, Hash, category }: { data: any; Hash: string; category:string }) => publishArticle(data, Hash, category),
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
		mutationFn: ({ title, content, img }: asDraft) => saveAsDraft({ title, content, img }),
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
