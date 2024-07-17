const Recommended = () => {
	return (
		<div className="mt-5">
			<h2 className="highlight z-20 w-fit font-roboto text-xl font-medium text-[#141414CC] ">Recommended</h2>
			<ul className="mb-10 mt-5 flex flex-col gap-y-5">
				{Array.from({ length: 1 }).map((_, i) => (
					<User key={i} />
				))}
			</ul>
		</div>
	);
};

export default Recommended;

const User = () => {
	return (
		<div className="mb-1 flex items-start gap-x-2">
			<img
				className="size-[30px] object-cover"
				src="/assets/images/profile1.png"
				alt=""
			/>
			<div className="max-w-[165px]">
				<p className="font-roboto text-[#141414E5]">Product Hunt </p>
				<p className="text-left text-sm text-[#14141499]">When Airbnb announces something new, like most software.</p>
			</div>
			<button className="self-center rounded-lg border border-[#22222299] px-4 py-1 text-sm font-medium text-[#22222299]">Follow</button>
		</div>
	);
};
