import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import Container from "../Container";
import ModalContainer from "./ModalContainer";
import { useEffect } from "react";

const TermsAndConditionsModal = () => {
	const isOpen = useActiveModal(ModalType.TermsAndConditions);
	const { closeModal } = useModalActions();

	const handleAgree = () => {
		localStorage.setItem("terms-and-conditions", JSON.stringify(true));
		closeModal();
	};

	useEffect(() => {
		localStorage.setItem("terms-and-conditions", JSON.stringify(false));
	}, []);

	return (
		<ModalContainer isOpen={isOpen}>
			<Container className="relative flex items-center justify-center">
				<div className="h-full max-w-[760px] overflow-hidden rounded-lg bg-white p-7">
					<h1 className="font-roboto text-xl font-bold text-[#04BF87] sm:text-2xl">Terms & Conditions</h1>
					<div className="custom-scrollbar mt-6 h-[55vh] overflow-y-auto pb-4 pr-6 font-manrope text-sm font-medium leading-[150%] text-[#6B6B6B] sm:text-base">
						<span className="font-semibold">Christian Writes App Terms and Conditions</span>
						<p>Last Updated: [2nd September 2024]</p>
						<div className="mt-4">
							<span className="text-wrap">1. Introduction</span>
							<p className="text-wrap">Welcome to the Christian Writes app. By downloading, accessing, or using our app, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, please do not use the app.</p>
						</div>
						<div className="mt-4">
							<span className="text-wrap">2. Use of the App </span>
							<p className="text-wrap">
								a. Eligibility: You must be at least 13 years old to use the Christian Writes app. By using the app, you confirm that you meet this age requirement. <br /> b. Account Registration: To access certain features of the app, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your
								account. <br /> c. Prohibited Activities: You agree not to engage in any activities that are harmful, illegal, or infringe on the rights of others, including but not limited to:
							</p>
						</div>
						<div className="mt-4">
							<span className="text-wrap">2. Use of the App </span>
							<p className="text-wrap">
								a. Eligibility: You must be at least 13 years old to use the Christian Writes app. By using the app, you confirm that you meet this age requirement. <br /> b. Account Registration: To access certain features of the app, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your
								account. <br /> c. Prohibited Activities: You agree not to engage in any activities that are harmful, illegal, or infringe on the rights of others, including but not limited to:
							</p>
						</div>
					</div>
					<div className="mt-6 flex items-center justify-end gap-x-[42px]">
						<button
							type="button"
							onClick={() => closeModal()}
							className="w-full max-w-[167px] rounded-lg py-[10px] font-raleway font-semibold transition-colors duration-150 hover:bg-[#04BF87] hover:text-white"
						>
							Cancel
						</button>
						<button
							type="button"
							onClick={handleAgree}
							className="w-full max-w-[167px] rounded-lg bg-[#04BF87] py-[10px] font-raleway font-semibold text-white"
						>
							Agree
						</button>
					</div>
				</div>
			</Container>
		</ModalContainer>
	);
};

export default TermsAndConditionsModal;
