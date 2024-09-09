import { AnimationPlaybackControls, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../Container";

interface Props {
	totalStories: number;
	currentStory: number;
	handleStory: (storyId: number) => void;
}

const StoriesNav = ({ totalStories, currentStory, handleStory }: Props) => {
	const [isPlaying, setIsPlaying] = useState(true);
	const controlsRef = useRef<AnimationPlaybackControls>(null!);

	const togglePlayPause = () => {
		if (isPlaying) controlsRef.current.pause();
		else controlsRef.current.play();
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		// Stop any ongoing animations before starting a new one
		if (controlsRef.current) {
			controlsRef.current.stop();
		}

		// Animate the selected story navigation item
		const controls = animate(
			`#story-nav-${currentStory}`,
			{
				width: ["0%", "100%"],
			},
			{
				ease: "linear",
				duration: 3,
			}
		);

		controls.then(() => {
			handleStory(currentStory + 1);
		});

		// Store the animation controls for later use
		controlsRef.current = controls;

		// Set the width of all other story navigation items immediately
		for (let i = 0; i < totalStories; i++) {
			if (i !== currentStory) {
				const navItem = document.getElementById(`story-nav-${i}`);
				if (navItem) {
					navItem.style.width = i < currentStory ? "100%" : "0%";
				}
			}
		}

		return () => controlsRef.current.stop();
	}, [currentStory, handleStory, totalStories]);

	const handleClick = (i: number) => {
		console.log(i);
		handleStory(i);
		if (!isPlaying) setIsPlaying(true);
	};

	return (
		<Container>
			<div className="mb-3 flex w-full justify-between gap-x-3 sm:mb-4 lg:mb-6">
				{Array.from({ length: totalStories }, (_, i) => i).map((_, i) => (
					<button
						key={i}
						onClick={() => handleClick(i)}
						className="w-full py-3"
					>
						<div className="h-1 w-full cursor-pointer overflow-hidden rounded-[50px] bg-[#ffffff80]">
							<div
								id={`story-nav-${i}`}
								className="story-nav-item h-full rounded-[50px] bg-white"
							></div>
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
