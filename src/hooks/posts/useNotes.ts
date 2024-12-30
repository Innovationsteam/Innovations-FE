///////Worked On
import { editNote, createNote } from "@/queries/article.queries";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const useNoteUpdate = () => {
	return useMutation({
		mutationFn: ( {title, content, noteID}: {title:string | null , content:string, noteID:string} ) => editNote( title, content, noteID ),
		onSuccess: () => {
			toast.success("Note updated! 🎉");
		},
		onError: (error) => {
			toast.error("Failed to update 🚫");
			console.log(error);
		},
	});
};
export const useNoteCreate = () => {
	return useMutation({
		mutationFn: ({ title, content, postID }: { title: string | null; content: string; postID: string }) => createNote(title, content, postID),
		onSuccess: () => {
			toast.success("Note created! 🎉");
		},
		onError: (error) => {
			toast.error("Failed to create 🚫");
			console.log(error);
		},
	});
};
