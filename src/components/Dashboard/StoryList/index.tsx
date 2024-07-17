import { PostStory } from "../../Buttons";

const Stories = () => {
	return (
		<div className="no-scrollbar w-full overflow-y-auto py-5">
			<div className="flex justify-start gap-x-8 lg:gap-x-10">
				<PostStory />
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						key={`story-${i}`}
						className="flex-shrink-0 text-center"
					>
						<div className="mx-auto size-16">
							<img
								className="max-w-full object-cover"
								src="/assets/images/story.png"
								alt=""
							/>
						</div>
						<p className="font-roboto text-xs text-[#2A2A2ACC] sm:text-sm md:text-base">Jolawrites</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Stories;
