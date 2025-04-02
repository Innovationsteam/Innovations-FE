import { AnimationSequence, cubicBezier, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const easing = cubicBezier(0.43, 0.23, 0.23, 0.96);

const Loader = () => {
	const [scope, animate] = useAnimate();
	const navigate = useNavigate();

	useEffect(() => {
		const sequence = [
			["#overflow", { translateX: ["-110%", "0"] }, { duration: 1.5, ease: easing, delay: 1 }],
			["h1", { opacity: 1 }, { duration: 0.5 }],
			["#overflow", { translateX: "100vh" }, { duration: 1, ease: "linear" }],
			[
				"#background",
				{
					height: 0,
				},
				{ duration: 2, ease: easing },
			],
		];

		const controls = animate(sequence as AnimationSequence);

		controls.then(() => navigate("/login"));

		return () => controls.stop();
	}, [animate, navigate]);

	return (
		<motion.section
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			ref={scope}
			className="flex h-screen w-screen items-center justify-center overflow-hidden"
		>
			<div
				id="background"
				className="absolute top-0 h-full w-full bg-black"
			></div>
			<div className="relative h-fit overflow-hidden rounded-lg sm:h-[55px] sm:w-[500px]">
				<motion.div
					id="overflow"
					className="absolute h-full w-full rounded-lg bg-white"
				></motion.div>
				<h1 className="text-wrap text-center font-manrope text-5xl font-bold text-white opacity-0 sm:text-nowrap">Christian Writes</h1>
			</div>
		</motion.section>
	);
};

export default Loader;
