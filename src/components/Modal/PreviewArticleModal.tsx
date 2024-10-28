import { ModalType, useModal, useModalActions } from "@/store/modal";
import Container from "../Container";
import ModalContainer from "./ModalContainer";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import client from "@/libs/axios";

const PreviewArticleModal = () => {
	const { closeModal } = useModalActions();
	const token = sessionStorage.getItem("myToken");

	const { modal, data } = useModal();

	const isOpen = useMemo(() => modal === ModalType.Preview, [modal]);

	const navigate = useNavigate();
	const [Hash, setHash] = useState("");
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const addHashtag = (event: any) => {
		const hashtags = event.target.value
			.split(" ")
			.map((item: string) => (item.startsWith("#") ? item : `#${item}`))
			.filter(Boolean);
		setHash(hashtags.join(","));
	};

	const handlePublish = async () => {
		try {
			const response = await client.post(
				"api/posts/",
				{
					title: data?.article,
					content: data?.articlebody.join(""),
					category: Hash,
					image: data?.url,
					hashtags: Hash,
					status: "published",
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				}
			);
			toast.success("Post Sent 🎉");
			console.log("response-------", response);
			closeModal();
			navigate("/article");
		} catch (err) {
			toast.error("Failed to upload");
			console.error("Error:", err);
		}
	};

	if (!data) return null;

	return (
		<ModalContainer isOpen={isOpen}>
			<Container className="relative flex items-center justify-center">
				<div className="h-full w-full max-w-[760px] overflow-hidden rounded-lg bg-white px-7 py-5">
					<button
						type="button"
						onClick={closeModal}
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
								src={data?.url}
								alt=""
							/>
						</div>
						<h1 className="font-roboto text-2xl font-semibold text-black">{data.article}</h1>
						<div className="mt-6 flex flex-col">
							<h3 className="mb-2 font-bold text-[#141414]">Add Hashtags</h3>
							<textarea
								id="hashtags"
								placeholder="Include hashtags in your article to help readers understand its topic at a glance."
								className="mb-4 h-[90px] w-full rounded-lg border border-[#CBD5E0] bg-[#CBD5E01C] px-2 py-3 text-xs text-black placeholder:text-[#2A2A2AB2] sm:text-sm"
								onChange={addHashtag}
							></textarea>
							<button
								type="button"
								onClick={handlePublish}
								className="ml-auto w-full max-w-[100px] rounded-lg bg-[#04BF87] py-2 font-raleway text-sm font-semibold text-white md:py-[10px] md:text-base"
							>
								Publish
							</button>
						</div>
					</section>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default PreviewArticleModal;
