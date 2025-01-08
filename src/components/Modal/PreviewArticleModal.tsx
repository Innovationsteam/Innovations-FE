///////Worked On
import { usePublishArticle } from "@/hooks/posts/usePublish";
import { ModalType, useActiveModal, useModalActions, useModalData } from "@/store/modal";
import { articleForm } from "@/types/post.types";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Container from "../Container";
import ModalContainer from "./ModalContainer";

const PreviewArticleModal = () => {
	const { closeModal } = useModalActions();
	const modalData = useModalData<ModalType.Preview>();
	const isOpen = useActiveModal(ModalType.Preview);

	const [Hash, setHash] = useState("");
	const [category, setCategory] = useState("");

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const addHashtag = (event: any) => {
		const hashtags = event.target.value
			.split(" ")
			.map((item: string) => (item.startsWith("#") ? item : `#${item}`))
			.filter(Boolean);
		setHash(hashtags.join(","));
	};

	const { mutate, isPending } = usePublishArticle();

	// if (!data) return null;

	function onSubmit() {
		const articleData: articleForm = {
			title: modalData?.article || "",
			content: modalData?.articlebody.join("") || "",
			category: category,
			image: modalData?.url || null,
			hashtags: Hash,
			status: "published",
		};
		const formData = new FormData();
		formData.append("title", articleData.title);
		formData.append("content", articleData.content);
		formData.append("category", articleData.category);
		if (articleData.image) {
			formData.append("image", articleData.image);
		}
		formData.append("hashtags", articleData.hashtags);
		formData.append("status", articleData.status);
		mutate(formData);
	}

	return (
		<ModalContainer isOpen={isOpen}>
			<Container className="relative flex items-center justify-center">
				<div className="h-full w-full max-w-[760px] overflow-hidden rounded-lg bg-white px-7 py-5">
					<button
						type="button"
						onClick={() => closeModal()}
						className="mb-4 ml-auto flex size-6 items-center gap-x-2"
					>
						<img
							className="h-full w-full object-cover"
							src="/assets/icons/close.svg"
							alt=""
						/>
					</button>
					<section>
						<div className="relative my-6 flex h-[min(20vw,200px)] min-h-[140px] items-center justify-center overflow-hidden rounded">
							<img
								className="h-full w-full object-cover"
								src={modalData?.backdrop ?? "htm/assets/images/article1.png"}
								alt=""
							/>
						</div>
						<h1 className="font-roboto text-2xl font-semibold text-black">{modalData?.article}</h1>
						<div className="mt-6 flex flex-col">
							<h3 className="mb-2 font-bold text-[#141414]">Add Hashtags</h3>
							<textarea
								id="hashtags"
								placeholder="Include hashtags in your article to help readers understand its topic at a glance."
								className="mb-4 h-[90px] w-full rounded-lg border border-[#CBD5E0] bg-[#CBD5E01C] px-2 py-3 text-xs text-black placeholder:text-[#2A2A2AB2] sm:text-sm"
								onChange={addHashtag}
							></textarea>
							<div className="flex items-center space-x-4">
								<label className="flex items-center">
									<input
										type="radio"
										name="contentType"
										value="article"
										className="mr-2"
										onClick={(e) => setCategory(e.currentTarget.value)} // Use e.currentTarget.value
									/>
									Article
								</label>

								<label className="flex items-center">
									<input
										type="radio"
										name="contentType"
										value="story"
										className="mr-2"
										onClick={(e) => setCategory(e.currentTarget.value)} // Use e.currentTarget.value
									/>
									Story
								</label>

								<label className="flex items-center">
									<input
										type="radio"
										name="contentType"
										value="poem"
										className="mr-2"
										onClick={(e) => setCategory(e.currentTarget.value)} // Use e.currentTarget.value
									/>
									Poem
								</label>
							</div>
							<button
								type="button"
								onClick={() => onSubmit()}
								className="ml-auto w-full max-w-[100px] rounded-lg bg-[#04BF87] py-2 font-raleway text-sm font-semibold text-white md:py-[10px] md:text-base"
							>
								{isPending ? (
									<ClipLoader
										loading={isPending}
										size={25}
										color="#fff"
									/>
								) : (
									"Publish"
								)}
							</button>
						</div>
					</section>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default PreviewArticleModal;
