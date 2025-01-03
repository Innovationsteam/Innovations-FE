import { updateNote, createNote } from "@/actions/post.actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useNoteUpdate = () => {
	return useMutation({
		mutationFn: updateNote,
		onSuccess: () => toast.success("Note updated! 🎉"),
	});
};
export const useNoteCreate = () => {
	return useMutation({
		mutationFn: createNote,
		onSuccess: () => toast.success("Note created! 🎉"),
	});
};
