import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import { CircleX } from "lucide-react";
import { Button } from "../ui/button";
import ModalContainer from "./ModalContainer";
import { useNavigate } from "react-router-dom";

const WarningLoginModal = () => {
	const isOpen = useActiveModal(ModalType.WARNING_LOGIN);
	const { closeModal } = useModalActions();
	const navigate = useNavigate();

	const onCloseModal = () => {
		closeModal();
		navigate("/login");
	};
	return (
		<ModalContainer isOpen={isOpen}>
			<div className="flex min-h-full items-center justify-center">
				<div className="h-fit w-full max-w-[647px] shrink-0 rounded-[20px] bg-white px-5 py-10">
					<div className="flex items-start">
						<header className="mb-5 w-full">
							<h2 className="text-center font-roboto text-2xl font-bold">Please Login</h2>
							<p className="text-center font-roboto text-lg">You need to login to acees these features</p>
						</header>
						<CircleX
							onClick={() => closeModal()}
							className="ml-auto rotate-90 cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-90"
							size={24}
						/>
					</div>

					<Button
						onClick={onCloseModal}
						className="mx-auto block w-[70%] font-roboto text-lg font-normal"
					>
						Login
					</Button>
				</div>
			</div>
		</ModalContainer>
	);
};

export default WarningLoginModal;
