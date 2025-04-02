import { pageTransition } from "@/lib/framer-default-animations";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageContainerProps {
	className?: string;
	children: JSX.Element | JSX.Element[];
}
const PageContainer = ({ className, children }: PageContainerProps) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

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
