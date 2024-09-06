import { Link } from "react-router-dom";

const Stories = () => {
	return (
		<div className="no-scrollbar w-full overflow-y-auto">
			<div className="flex justify-start gap-x-8 lg:gap-x-10">
				<Link
					to="/stories/new"
					className="flex-shrink-0 text-center"
				>
					<div className="flex size-16 items-center justify-center rounded-full bg-[#141414CC]">
						<img
							className="size-10 object-cover"
							src="/assets/icons/plus-circle.svg"
							alt=""
						/>
					</div>
					<span className="font-roboto text-xs text-[#2A2A2ACC] sm:text-sm md:text-base">Post Story</span>
				</Link>
				{Array.from({ length: 5 }).map((_, i) => (
					<Link
						to="/stories"
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
					</Link>
				))}
			</div>
		</div>
	);
};

export default Stories;
