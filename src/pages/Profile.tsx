import { Button } from "@/components/ui/button";
import { useUserConnections } from "@/hooks/follow/useUserConnections";
import { useUserProfile } from "@/hooks/useUserProfile";
import { ModalType, useModalActions } from "@/store/modal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Outlet, useParams } from "react-router-dom";
import Container from "../components/Container";
import { MiniNav, MiniNavMobile } from "../components/MiniNav";
import FollowButton from "@/components/FollowButton";
import { useEffect } from "react";
import { useUserStore } from "@/store/user";

const Profile = () => {
	const { username } = useParams();
	const { data: userData, isPending: isUserPending } = useUserProfile(username);
	const { data: connectionsData, isPending: isConnectionsPending } = useUserConnections(username!);
	const { openModal } = useModalActions();
	const setUser = useUserStore((s) => s.setUser);

	const isFollowing = connectionsData?.following?.some((follower) => follower.username === username) || false;

	const tabs = isFollowing ? ["home", "about", "blogs", "reading-list", "followers", "following", "saved", "analytics", "drafts", "notes", "settings"] : ["home", "about", "blogs", "reading-list", "followers", "following"];

	useEffect(() => {
		setUser(userData);
	}, [setUser, userData]);

	return (
		<Container>
			<header className="mt-3 h-[183px] overflow-hidden rounded-md md:mt-9 md:h-[400px]">
				<img
					className="h-full w-full object-cover object-bottom"
					src="/assets/images/writerHeader.jpg"
					alt="Header"
				/>
			</header>
			<div className="relative mt-6 h-full grid-cols-[140px_auto] items-start md:mt-12 md:px-8 lg:grid">
				<div className="sticky top-0 hidden lg:block">
					<MiniNav tabs={tabs} />
				</div>
				<div className="mb-10 h-full w-full border-y-0 md:px-5 lg:border-l-[1.5px]">
					<img
						className="size-8 rounded-full object-cover md:size-[80px]"
						src={`${userData?.profileImg}`}
						alt="Profile"
					/>
					<div className="mt-6 flex items-center text-black">
						<div>
							{isUserPending ? (
								<h1 className="font-roboto text-[16px] text-xl font-semibold md:text-3xl">
									<Skeleton width={120} />
								</h1>
							) : (
								<h1 className="font-roboto text-[16px] text-xl font-semibold md:text-3xl">{userData?.name}</h1>
							)}
							{/* <h2 className="font-roboto text-sm md:text-xl">Content Creator</h2> */}

							<div className="mt-1 flex items-center gap-x-2">
								{isConnectionsPending ? (
									<>
										<Skeleton width={90} />
										<Skeleton width={90} />
									</>
								) : (
									<>
										<p className="text-xs text-[#14141499] md:text-base">{connectionsData?.followers?.length || 0} followers</p>
										<p className="text-xs text-[#14141499] md:text-base">{connectionsData?.following?.length || 0} following</p>
									</>
								)}
							</div>
						</div>
						<div className="ml-auto flex items-center gap-x-2">
							{isFollowing ? (
								<Button
									onClick={() => openModal(ModalType.EDIT_PROFILE)}
									className="md:text-base"
								>
									Edit Profile
								</Button>
							) : (
								<FollowButton
									username={username!}
									isFollowing={isFollowing}
								/>
							)}
						</div>
					</div>
					<MiniNavMobile tabs={tabs} />
					<Outlet />
				</div>
			</div>
		</Container>
	);
};

export default Profile;
