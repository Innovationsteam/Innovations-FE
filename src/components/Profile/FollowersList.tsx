import SectionContainer from "../../layouts/SectionContainer";

const FollowersList = () => {
	return (
		<SectionContainer title="Followers">
			<ul className="mt-4 grid gap-y-7">
				{Array.from({ length: 10 }).map((_, i) => (
					<Follower key={i} />
				))}
			</ul>
		</SectionContainer>
	);
};

export default FollowersList;

const Follower = () => {
	return (
		<button className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<img
					className="size-10 rounded-full object-cover"
					src="/assets/images/profile3.png"
					alt=""
				/>
				<div>
					<span className="text-base font-medium leading-5 text-[#141414E5]">Product Hunt</span>
					<p className="mt-1 max-w-[273px] text-xs text-[#14141499]">When Airbnb announces something new, like most software.</p>
				</div>
				<button
					type="button"
					className="rounded-lg border border-[#22222299] px-3 py-1 font-roboto text-sm text-[#22222299] md:ml-auto md:text-base"
				>
					Unfollow
				</button>
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black transition-transform duration-300 ease-linear group-hover:scale-x-100"></div>
			</div>
		</button>
	);
};
