import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
	children: React.ReactNode;
	duration?: number;
	className?: string;
}

export default function FadeIn({ children, duration = 0, className }: FadeInProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, {
		once: true,
		amount: 0.1,
	});

	const variants = {
		hidden: { opacity: 0, y: 32 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: "easeOut",
				delay: duration / 1000,
			},
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={variants}
			className={className}
		>
			{children}
		</motion.div>
	);
}
