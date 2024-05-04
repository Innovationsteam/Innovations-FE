import { motion } from "framer-motion";
import { pageTransition } from "../../utils/framer-default-animations";

interface PageContainerProps {
	className?: string;
	children: JSX.Element | JSX.Element[];
}
const PageContainer = ({ className, children }: PageContainerProps) => {
	return (
		<motion.main
			data-scroll-containe
			className={className}
			{...pageTransition}
		>
			{children}
		</motion.main>
	);
};

export default PageContainer;
