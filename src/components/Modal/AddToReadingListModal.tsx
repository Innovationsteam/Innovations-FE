import { useAllReadingLists } from "@/hooks/readingList/useAllReadingLists";
import { ModalType, useActiveModal, useModalActions, useModalData } from "@/store/modal";
import { CircleX } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import ModalContainer from "./ModalContainer";
import { useAddToReadingList } from "@/hooks/readingList/useAddToReadingList";

const AddToReadingListModal = () => {
	const isOpen = useActiveModal(ModalType.ADD_TO_READING_LIST);
	const { openModal, closeModal } = useModalActions();
	const { data: readingLists } = useAllReadingLists();
	const postId = useModalData() as string;

	const { mutate: addToReadingList } = useAddToReadingList();

	const handleChange = (collectionId: string) => {
		addToReadingList({
			postId,
			collectionId,
		});
	};

	return (
		<ModalContainer isOpen={isOpen}>
			<div className="flex min-h-full items-center justify-center">
				<div className="h-fit w-full max-w-[450px] shrink-0 rounded-[20px] bg-white px-5 py-9">
					<header className="flex items-center">
						<span className="font-roboto text-2xl font-semibold">Add To Reading List</span>
						<CircleX
							onClick={closeModal}
							className="ml-auto cursor-pointer"
							size={24}
						/>
					</header>
					<ul className="my-8 grid gap-y-3">
						{readingLists && readingLists.length > 0 ? (
							readingLists.map((item) => (
								<li
									key={item.id}
									className="flex items-center"
								>
									<Checkbox
										id={item.id}
										className="mr-2"
										checked={item.readingLists.some((post) => post.postId === postId)}
										onCheckedChange={() => handleChange(item.id)}
									/>
									<Label
										htmlFor={item.id}
										className="w-full cursor-pointer py-2 text-base"
									>
										{item.name}
									</Label>
									<img
										className="ml-auto size-4"
										src="/assets/icons/globe.svg"
										alt=""
									/>
								</li>
							))
						) : (
							<p className="text-center text-xl font-semibold">No Reading Lists</p>
						)}
					</ul>
					<Button
						type="button"
						onClick={() => openModal(ModalType.CREATE_READING_LIST)}
					>
						Create a New List
					</Button>
				</div>
			</div>
		</ModalContainer>
	);
};

export default AddToReadingListModal;
