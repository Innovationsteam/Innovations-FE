import { Link } from "react-router-dom";
import UserProfileImage from "./UserProfileImage";
import FollowButton from "./FollowButton";
import { UserConnection } from "@/types/user.types";

const Follower = ({ profileImg, username }: UserConnection) => {
	return (
		<div className="group block w-full text-start">
			<div className="flex items-center gap-x-3 pb-2 font-roboto">
				<Link
					to={`/cw/${username}`}
					className="flex w-full items-center gap-x-2 sm:gap-x-5"
				>
					<UserProfileImage image={profileImg!} />
					<span className="text-lg font-medium leading-5 text-[#141414E5]">{username}</span>
				</Link>
				<FollowButton
					username={username}
					isFollowing={false}
					className="w-fit md:ml-auto"
				/>
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black transition-transform duration-300 ease-linear group-hover:scale-x-100"></div>
			</div>
		</div>
	);
};

export default Follower;
