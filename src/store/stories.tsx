import { create } from "zustand";

export interface IStory {
	id: number;
	image: string;
	active: boolean;
}

interface StoriesStoreType {
	stories: IStory[];
	currentStory: number;
	nextStory: (id: number) => void;
}

const intialStories = [
	{ id: 1, image: "/assets/images/story-bg.jpg", active: true },
	{ id: 2, image: "/assets/images/story.png", active: false },
	{ id: 3, image: "/assets/images/story-bg.jpg", active: false },
	{ id: 4, image: "/assets/images/story-bg.jpg", active: false },
];

export const useStoriesStore = create<StoriesStoreType>((set) => ({
	stories: intialStories,
	currentStory: 1,
	nextStory: (id) =>
		set((state) => {
			console.log(`done with ${id}`);
			const index = state.stories.findIndex((story) => story.id === id);

			if (index === -1 || id >= state.stories.length) {
				return { stories: state.stories };
			}

			const nextStoryId = state.stories[index + 1].id;
			const updatedStories = state.stories.map((story, i) => ({
				...story,
				active: i === index ? false : i === index + 1 ? true : false,
			}));

			return { stories: updatedStories, currentStory: nextStoryId };
		}),
}));
