import { addToReadingList } from "@/actions/reading-list.actions";
import { useModalActions } from "@/store/modal";
import { ReadingList } from "@/types/readng-list.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddToReadingList = () => {
	const queryClient = useQueryClient();
	const { closeModal } = useModalActions();

	return useMutation({
		mutationFn: addToReadingList,
		onMutate: async ({ postId, collectionId }) => {
			await queryClient.cancelQueries({ queryKey: ["user", "reading-lists"] });

			const previousData = queryClient.getQueryData<ReadingList[]>(["user", "reading-lists"]);

			queryClient.setQueryData<ReadingList[]>(["user", "reading-lists"], (oldData) => {
				if (!oldData) return []; 

				return oldData.map((list) => {
					if (list.id === collectionId) {
						return {
							...list,
							readingLists: [
								...list.readingLists,
								{ postId, createdAt: new Date().toISOString() }, // Add the new post
							],
						};
					}
					return list; 
				});
			});

			return { previousData };
		},
		onSuccess: ({ data }) => {
			queryClient.invalidateQueries({ queryKey: ["user", "reading-lists"] });
			closeModal();
			toast.success(`Added to ${data.name}`);
		},
		onError: (_error, _, context) => {
			if (context?.previousData) {
				queryClient.setQueryData(["user", "reading-lists"], context.previousData);
			}
			toast.error("Failed to add to the reading list. Please try again.");
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["user", "reading-lists"] });
		},
	});
};
