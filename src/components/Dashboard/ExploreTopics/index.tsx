const topics = ["growth", "productivity", "spirituality", "Meditation"];

const ExploreTopics = () => {
	return (
		<div>
			<h2 className="highlight w-fit font-roboto text-xl font-medium text-[#141414CC]">Explore Topics</h2>
			<ul className="mt-3">
				{topics.map((topic) => (
					<li
						key={topic}
						className="mb-[10px] font-roboto capitalize text-[#14141499]"
					>
						{topic}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExploreTopics;
