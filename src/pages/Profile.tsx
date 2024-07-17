import { useEffect, useState } from "react";
import Container from "../components/Container";
import { MiniNav, MiniNavMobile } from "../components/MiniNav";
import { FollowUser } from "../components/Buttons";
import DropDown from "../components/Buttons/DropDown";
import { Post } from "../components/Post";
import ReadingListItem from "../components/Post/ReadingList";

const tabs = ["Home", "About", "Blogs", "Reading List", "Followers", "Following"] as const;

export type Tab = (typeof tabs)[number];

const mutableTabs: Tab[] = [...tabs] as Tab[];

const Profile = () => {
	const [activeTab, setActiveTab] = useState<Tab>("Home");
	const [openTabs, setOpenTabs] = useState<Tab[]>([]);

	useEffect(() => {
		activeTab !== "Home" ? setOpenTabs([activeTab]) : setOpenTabs(["About", "Blogs"]);
	}, [activeTab]);

	return (
		<Container className="relative">
			<header className="mt-3 h-[183px] overflow-hidden rounded-md md:mt-9 md:h-[300px]">
				<img
					className="h-full w-full object-cover object-bottom"
					src="/assets/images/writerHeader.jpg"
					alt=""
				/>
			</header>
			<div className="sticky top-0 mt-6 h-screen items-start md:mt-12 md:grid md:grid-cols-[160px_auto] md:px-8">
				<MiniNav
					tabs={mutableTabs}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<div className="h-full md:px-5 md:pt-10">
					<img
						className="size-12 object-cover md:size-[80px]"
						src="/assets/images/writer.png"
						alt=""
					/>
					<div className="mt-6 flex items-center">
						<div>
							<h1 className="font-roboto text-[16px] text-xl font-semibold md:text-3xl">Joshua Hill</h1>
							<h2 className="font-roboto text-sm md:text-xl">Content Creator</h2>
							<div className="mt-1 flex items-center gap-x-2">
								<p className="text-xs text-[#14141499] md:text-base">136 followers</p>
								<p className="text-xs text-[#14141499] md:text-base">136 followers</p>
							</div>
						</div>
						<div className="ml-auto flex items-center gap-x-3">
							<DropDown position="top">
								<button className="b-2 block font-roboto text-sm text-[#141414]">Profile</button>
								<button className="b-2 block py-2 font-roboto text-sm text-[#141414]">Settings</button>
								<button className="b-2 block font-roboto text-sm text-[#141414]">Logout</button>
							</DropDown>
							<FollowUser />
						</div>
					</div>
					<MiniNavMobile
						tabs={mutableTabs}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
					{openTabs.includes("About") && (
						<section className="mt-6">
							<h2 className="highlight relative z-[3] mb-2 font-roboto text-xl font-medium text-[#141414CC]">About Me</h2>
							<p className="font-roboto text-sm text-[#14141499] md:text-lg md:leading-8">
								I’ve been studying UX design at The Hague University for 3 years now. You might think that I have it all figured out, right? I mean, UX design is supposed to be one of the hottest and most rewarding careers out there. It’s all about creating awesome products and services that make people’s lives better. Sounds pretty cool, huh?
							</p>
						</section>
					)}
					{openTabs.includes("Blogs") && (
						<section className="mt-6 pb-10">
							<h2 className="highlight relative z-[3] mb-2 font-roboto text-xl font-medium text-[#141414CC]">Blogs</h2>
							<ul className="grid h-full gap-6 lg:grid-cols-2">
								{Array.from({ length: 10 }).map((_, i) => (
									<Post key={i} />
								))}
							</ul>
						</section>
					)}
					{openTabs.includes("Reading List") && (
						<section className="mt-6 pb-10">
							<h2 className="highlight relative z-[3] mb-2 font-roboto text-xl font-medium text-[#141414CC]">Reading List</h2>
							<ul className="mt-4 grid h-full gap-x-6 gap-y-10 lg:grid-cols-2">
								{Array.from({ length: 10 }).map((_, i) => (
									<ReadingListItem key={i} />
								))}
							</ul>
						</section>
					)}
					{openTabs.includes("Followers") && (
						<section className="mt-6 pb-10">
							<h2 className="highlight relative z-[3] mb-2 font-roboto text-xl font-medium text-[#141414CC]">Followers</h2>
							<ul className="mt-4">
								{Array.from({ length: 10 }).map((_, i) => (
									<button
										key={i}
										className="group mb-4 block w-full text-start"
									>
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
								))}
							</ul>
						</section>
					)}
					{openTabs.includes("Following") && (
						<section className="mt-6 pb-10">
							<h2 className="highlight relative z-[3] mb-2 font-roboto text-xl font-medium text-[#141414CC]">Followers</h2>
							<ul className="mt-4 grid gap-y-7">
								{Array.from({ length: 10 }).map((_, i) => (
									<button
										key={i}
										className="group block w-full text-start"
									>
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
								))}
							</ul>
						</section>
					)}
				</div>
			</div>
		</Container>
	);
};

export default Profile;
