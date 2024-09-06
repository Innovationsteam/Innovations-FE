import { ReactNode } from "react";

const SectionContainer = ({ title, children }: { title: string; children: ReactNode }) => {
	return (
		<section className="mt-6">
			<h2 className="highlight relative z-[3] mb-5 font-roboto text-xl font-medium text-[#141414CC] md:text-2xl">{title}</h2>
			{children}
		</section>
	);
};

export default SectionContainer;
