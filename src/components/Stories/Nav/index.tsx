import { AnimationPlaybackControls, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Container";

interface Props {
	totalStories: number;
	currentStory: number;
	handleStory: (storyId: number) => void;
	// handleAnimationComplete: (storyId: number) => void;
}

const StoriesNav = ({ totalStories, currentStory, handleStory }: Props) => {
	const [isPlaying, setIsPlaying] = useState(true);
	const controlsRef = useRef<AnimationPlaybackControls>(null!);
	const progress = useMotionValue(0);
	const width = useTransform(progress, [0, 100], ["0%", "100%"]);

	const togglePlayPause = () => {
		if (isPlaying) controlsRef.current.pause();
		else controlsRef.current.play();
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		const controls = animate(progress, [0, 100], {
			ease: "linear",
			duration: 3,
		});

		controlsRef.current = controls;

		return () => controlsRef.current.stop();
	}, [currentStory, progress]);

	return (
		<Container>
			<div className="mb-3 flex w-full justify-between gap-x-3 sm:mb-4 lg:mb-6">
				{Array.from({ length: totalStories }, (_, i) => i).map((_, i) => (
					<button
						key={i}
						onClick={() => handleStory(i)}
						className="w-full py-3"
					>
						<div className="h-1 w-full cursor-pointer overflow-hidden rounded-[50px] bg-[#ffffff80]">
							<motion.div
								// initial={{ width: "0%" }}
								style={{ width: width }}
								// animate={{
								// 	width: currentStory >= i ? "100%" : "0%",
								// }}
								// transition={{
								// 	duration: 3,
								// 	ease: "linear",
								// 	delay: currentStory === i ? 0.5 : 0,
								// }}
								// onAnimationComplete={() => handleAnimationComplete(i)}
								className="h-full rounded-[50px] bg-white"
							></motion.div>
						</div>
					</button>
				))}
			</div>
			<div className="flex items-center">
				<div className="flex items-center gap-x-3">
					<img
						className="size-[30px] object-cover lg:size-[38px]"
						src="/assets/images/avatar.svg"
						alt=""
					/>
					<span className="font-roboto text-white sm:text-lg lg:text-xl">Jace.ao</span>
					<span className="font-roboto text-white lg:text-lg">3h</span>
				</div>
				<div className="ml-auto flex items-center gap-x-3">
					<button onClick={togglePlayPause}>
						<img
							className="size-6 lg:size-8"
							src={`/assets/icons/${isPlaying ? "pause" : "play"}.svg`}
							alt=""
						/>
					</button>
					<Link to="/home">
						<img
							className="size-6 lg:size-8"
							src="/assets/icons/delete-white.svg"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</Container>
	);
};

export default StoriesNav;
