import { Outlet } from "react-router-dom";
import { EditProfile, FollowUser } from "../components/Buttons";
// import DropDown from "../components/Buttons/DropDown";
import Container from "../components/Container";
import { MiniNav, MiniNavMobile } from "../components/MiniNav";
import { client, token } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const tabs = ["home", "about", "blogs", "reading-list", "followers", "following"];

const adminTabs = [...tabs, "saved", "analytics", "drafts", "notes", "settings"];

const Profile = ({ allowEdit }: { allowEdit?: boolean }) => {

	type userData = {
		name: string;
		followersCount: number;
		followingCount: number;
	}
	const getData = async (): Promise<userData> => {
		const User1: userData = { name: "", followersCount: 0, followingCount: 0 }
		const name = await client.get(`/api/users/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		User1.name = name.data.data.name || ""
		const followers = await client.get(`/api/users/followers/count`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		User1.followersCount = followers.data.data.count || 0
		const following = await client.get(`/api/users/following/count`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		User1.followingCount = following.data.data.count || 0
		return User1
	}
	const { data } = useQuery({
		queryFn: () => getData(),
		queryKey: ["data", token],
		staleTime: 100 * 60 * 3
	})
	return (
		<Container>
			<header className="mt-3 h-[183px] overflow-hidden rounded-md md:mt-9 md:h-[400px]">
				<img
					className="h-full w-full object-cover object-bottom"
					src="/assets/images/writerHeader.jpg"
					alt=""
				/>
			</header>
			<div className="relative mt-6 h-full grid-cols-[140px_auto] items-start md:mt-12 md:px-8 lg:grid">
				<div className="sticky top-0 hidden lg:block">
					<MiniNav tabs={allowEdit ? adminTabs : tabs} />
				</div>
				<div className="mb-10 h-full w-full border-y-0 md:px-5 md:pt-10 lg:border-l-[1.5px]">
					<img
						className="size-12 object-cover md:size-[80px]"
						src="/assets/images/writer.png"
						alt=""
					/>
					<div className="mt-6 flex items-center text-black">
						<div>
							{data ?
								<>	<h1 className="font-roboto text-[16px] text-xl font-semibold md:text-3xl">{data?.name}</h1>
									<h2 className="font-roboto text-sm md:text-xl">Content Creator</h2>
									<div className="mt-1 flex items-center gap-x-2">
										<p className="text-xs text-[#14141499] md:text-base">{data?.followersCount} followers</p>
										<p className="text-xs text-[#14141499] md:text-base">{data?.followingCount} followers</p>
									</div></> :
								<>

									<h1 className="font-roboto text-[16px] text-xl font-semibold md:text-3xl"><Skeleton width={120} /></h1>
									<h2 className="font-roboto text-sm md:text-xl"><Skeleton width={140} /></h2>
									<div className="mt-1 flex items-center gap-x-2">
										<p className="text-xs text-[#14141499] md:text-base"><Skeleton width={90}/></p>
										<p className="text-xs text-[#14141499] md:text-base"><Skeleton width={90}/></p>
									</div>
								</>
							}

						</div>
						<div className="ml-auto flex items-center gap-x-2">
							{/* <DropDown position="top">
								<button className="b-2 block font-roboto text-sm text-[#141414]">Profile</button>
								<button className="b-2 block py-2 font-roboto text-sm text-[#141414]">Settings</button>
								<button className="b-2 block font-roboto text-sm text-[#141414]">Logout</button>
							</DropDown> */}
							{allowEdit ? <EditProfile /> : <FollowUser />}
						</div>
					</div>
					<MiniNavMobile tabs={allowEdit ? adminTabs : tabs} />
					<Outlet />
				</div>
			</div>
		</Container>
	);
};

export default Profile;
