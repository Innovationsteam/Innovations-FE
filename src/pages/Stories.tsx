import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PageContainer from "../components/PageContainer";
import StoriesNav from "../components/Stories/Nav";
import { useNavigate } from "react-router-dom";

const data = ["/assets/images/story-bg.jpg", "/assets/images/story3.jpg", "/assets/images/story-bg.jpg", "/assets/images/story3.jpg"];

const Stories = () => {
	const [currentStory, setCurrentStory] = useState(0);
	const [direction, setDirection] = useState("right");
	const navigate = useNavigate();

	const handleStory = (storyId: number) => {
		if (storyId >= data.length) {
			navigate("/feed");
		} else {
			let newDirection = "right";
			if (storyId < currentStory) {
				newDirection = "left";
			}
			setCurrentStory(storyId);
			setDirection(newDirection);
		}
	};

	return (
		<PageContainer>
			<div className="grid h-[100dvh] grid-rows-[auto_1fr] overflow-hidden bg-black px-5 pb-5 pt-3 lg:px-7 lg:pt-5">
				<StoriesNav
					totalStories={data.length}
					currentStory={currentStory}
					handleStory={handleStory}
				/>
				<AnimatePresence
					mode="wait"
					initial={false}
				>
					<motion.div
						key={currentStory}
						initial={{ x: direction === "right" ? "100%" : "-100%" }}
						animate={{ x: "0%" }}
						exit={{ x: direction === "right" ? "-100%" : "100%" }}
						transition={{ duration: 0.3, ease: "linear" }}
						className="mx-auto mt-6 flex max-w-full justify-center overflow-hidden rounded-lg lg:w-[90%]"
					>
						<img
							className="max-h-full w-full object-cover object-center"
							src={data[currentStory]}
							alt=""
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</PageContainer>
	);
};

export default Stories;
