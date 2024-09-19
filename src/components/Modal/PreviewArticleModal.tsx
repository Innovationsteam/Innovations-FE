import { ModalType, useModal, useModalActions } from "@/store/modal";
import Container from "../Container";
import ModalContainer from "./ModalContainer";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const PreviewArticleModal = () => {
	const { closeModal } = useModalActions();

	const { modal, data } = useModal();

	const isOpen = useMemo(() => modal === ModalType.Preview, [modal]);

	const navigate = useNavigate();

	const goTo = () => {
		closeModal();
		navigate("/article");
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
							<h3 className="mb-2 font-bold text-[#141414]">Add Hastags</h3>
							<textarea
								id="hashtags"
								placeholder="Include hashtags in your article to help readers understand its topic at a glance."
								className="mb-4 h-[90px] w-full rounded-lg border border-[#CBD5E0] bg-[#CBD5E01C] px-2 py-3 text-xs text-black placeholder:text-[#2A2A2AB2] sm:text-sm"
							></textarea>
							<button
								type="button"
								onClick={goTo}
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
