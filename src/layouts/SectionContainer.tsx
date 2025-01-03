import { ModalType, useModalActions } from "@/store/modal";
import { Plus } from "lucide-react";
import { ReactNode } from "react";

interface Props {
	title: string;
	showIcon?: boolean;
	modal?: ModalType;
	children: ReactNode;
}

const SectionContainer = ({ title, showIcon = false, modal = ModalType.None, children }: Props) => {
	const { openModal } = useModalActions();

	return (
		<section className="mt-6">
			<div className="mb-5 flex items-center">
				<h2 className="highlight relative z-[3] font-roboto text-xl font-medium text-black md:text-2xl">{title}</h2>
				{showIcon && (
					<Plus
						onClick={() => openModal(modal)}
						className="ml-auto cursor-pointer stroke-basic"
						size={24}
						strokeWidth={2.5}
					/>
				)}
			</div>
			{children}
		</section>
	);
};

export default SectionContainer;
