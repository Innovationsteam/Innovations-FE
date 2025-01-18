import SectionContainer from "../../layouts/SectionContainer";
import { useUserConnections } from "@/hooks/follow/useUserConnections";
import { useParams, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useUserAvatar } from "@/hooks/useUserAvatar";

export const FollowersList = () => {
	const { username } = useParams();
	const { data: connectionsData, isPending: isConnectionsPending } = useUserConnections(username!);
	return (
		<SectionContainer title="Followers">
			<ul className="mt-4 grid gap-y-7">
				{connectionsData ? connectionsData.followers?.map((items) => <Follower {...items} />) : <>No followers</>}
				{isConnectionsPending && Array.from({ length: 3 }).map((_, i) => <FollowSkeleton key={i} />)}
			</ul>
		</SectionContainer>
	);
};
export const FollowingList = () => {
	const { username } = useParams();
	const { data: connectionsData, isPending: isConnectionsPending } = useUserConnections(username!);
	return (
		<SectionContainer title="Following">
			<ul className="mt-4 grid gap-y-7">
				{connectionsData ? connectionsData.following?.map((items) => <Following {...items} />) : <>No followers</>}
				{isConnectionsPending && Array.from({ length: 3 }).map((_, i) => <FollowSkeleton key={i} />)}
			</ul>
		</SectionContainer>
	);
};

const Follower = ({ profileImg, username }: { profileImg: string | null; username: string }) => {
	const { data: userAvatar } = useUserAvatar(username ?? "default User");

	return (
		<Link to={`/cw/${username}`} className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<img
					className="size-9 rounded-full object-cover"
					src={profileImg ?? userAvatar}
					alt=""
				/>
				<div>
					<span className="text-base font-medium leading-5 text-[#141414E5]">{username}</span>
					{/* <p className="mt-1 max-w-[273px] text-xs text-[#14141499]">When Airbnb announces something new, like most software.</p> */}
				</div>
				<button
					type="button"
					className="rounded-lg border border-[#22222299] px-3 py-1 font-roboto text-sm text-[#22222299] md:ml-auto md:text-base"
				>
					Follow
				</button>
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black transition-transform duration-300 ease-linear group-hover:scale-x-100"></div>
			</div>
		</Link>
	);
};
const Following = ({ profileImg, username }: { profileImg: string | null; username: string }) => {
	const { data: userAvatar } = useUserAvatar(username ?? "default User");

	return (
		<Link to={`/cw/${username}`}className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<img
					className="size-9 rounded-full object-cover"
					src={profileImg ?? userAvatar}
					alt=""
				/>
				<div>
					<span className="text-base font-medium leading-5 text-[#141414E5]">{username}</span>
					{/* <p className="mt-1 max-w-[273px] text-xs text-[#14141499]">When Airbnb announces something new, like most software.</p> */}
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
		</Link>
	);
};

const FollowSkeleton = () => {
	return (
		<div className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<Skeleton
					circle={true}
					height={36}
					width={36}
				/>

				<div className="flex-1">
					<Skeleton
						height={20}
						width={`75%`}
					/>
					<Skeleton
						height={16}
						width={`50%`}
						className="mt-1"
					/>
				</div>

				<Skeleton
					height={32}
					width={96}
					className="rounded-lg"
				/>
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black transition-transform duration-300 ease-linear group-hover:scale-x-100"></div>
			</div>
		</div>
	);
};
