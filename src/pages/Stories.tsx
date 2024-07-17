import { AnimatePresence } from "framer-motion";
import PageContainer from "../components/PageContainer";
import Story from "../components/Story";
import { useStoriesStore } from "../store/stories";

const Stories = () => {
	const stories = useStoriesStore((s) => s.stories);
	const currentId = useStoriesStore((s) => s.currentStory);
	const currentStory = stories[currentId];

	return (
		<PageContainer className="h-screen">
			<AnimatePresence mode="wait">
				<Story
					id={currentStory.id}
					image={currentStory.image}
					active={currentStory.active}
				/>
			</AnimatePresence>
		</PageContainer>
	);
};

export default Stories;
