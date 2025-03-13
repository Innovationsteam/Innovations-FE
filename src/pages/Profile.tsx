import FollowButton from "@/components/FollowButton";
import UserProfileSkeleton from "@/components/Skeletons/UserProfileSkeleton";
import UserProfileImage from "@/components/UserProfileImage";
import { Button } from "@/components/ui/button";
import { useUserConnections } from "@/hooks/follow/useUserConnections";
import { useUserProfile } from "@/hooks/useUserProfile";
import { ModalType, useModalActions } from "@/store/modal";
import { useUser } from "@/store/user";
import { MY_PROFILE_PAGE, PUBLIC_PROFILE_PAGE } from "@/utils/constants";
import { Outlet, useParams } from "react-router-dom";
import Container from "../components/Container";
import { MiniNav, MiniNavMobile } from "../components/MiniNav";
import Skeleton from "react-loading-skeleton";
import NumberFlow from "@number-flow/react";
import FadeIn from "@/utils/fadeIn";

const Profile = () => {
	const { username } = useParams();
	const { openModal } = useModalActions();
	const loggedInUser = useUser();

	const { data: userData, isPending: isUserPending } = useUserProfile(loggedInUser?.username === username ? "me" : username);

	const { data: connectionsData, isPending: isConnectionsPending } = useUserConnections(username!);

	const isFollowing = connectionsData?.followers?.some((follower) => follower.username === loggedInUser?.username) || false;
	const tabs = loggedInUser?.username === username ? MY_PROFILE_PAGE : PUBLIC_PROFILE_PAGE;

	return (
		<Container>
			<header className="mt-3 h-[183px] overflow-hidden rounded-xl md:mt-9 md:h-[400px]">
				{isUserPending ? (
					<Skeleton
						height="100%"
						width="100%"
					/>
				) : (
					<FadeIn duration={150}>
						<img
							className="h-full w-full object-cover object-bottom"
							src={loggedInUser?.username === username ? loggedInUser?.backdropImg ?? "/assets/images/writerHeader.jpg" : userData?.backdropImg ?? "/assets/images/writerHeader.jpg"}
							alt="Header"
						/>
					</FadeIn>
				)}
			</header>
			<div className="relative mt-6 h-full grid-cols-[140px_auto] items-start md:mt-12 md:px-8 lg:grid">
				<div className="sticky top-0 hidden lg:block">
					<MiniNav tabs={tabs} />
				</div>
				<div className="mb-10 h-full w-full border-y-0 md:px-5 lg:border-l-[1.5px]">
					{isUserPending || isConnectionsPending ? (
						<UserProfileSkeleton />
					) : (
						<>
							<UserProfileImage
								fullName={userData?.name}
								image={userData?.profileImg}
								className="md:size-[80px]"
							/>
							<div className="mt-6 flex items-center text-black">
								<div>
									<h1 className="font-roboto text-[16px] text-xl font-semibold md:text-3xl">{userData?.name}</h1>
									{connectionsData?.followers && connectionsData?.following ? (
										<div className="mt-1 flex items-center gap-x-2">
											<p className="text-xs text-[#14141499] md:text-base">
												{" "}
												<NumberFlow value={connectionsData?.followers?.length || 0} /> followers{" "}
											</p>
											<p className="text-xs text-[#14141499] md:text-base">
												{" "}
												<NumberFlow value={connectionsData?.following?.length || 0} /> following{" "}
											</p>
										</div>
									) : null}
								</div>
								<div className="ml-auto flex items-center gap-x-2">
									{loggedInUser?.username === username ? (
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
						</>
					)}
					<MiniNavMobile tabs={tabs} />
					<Outlet />
				</div>
			</div>
		</Container>
	);
};

export default Profile;
