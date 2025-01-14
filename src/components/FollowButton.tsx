import { useFollowUser } from "@/hooks/follow/useFollowUser";
import { useUnfollowUser } from "@/hooks/follow/useUnfollowUser";
import { cn } from "@/utils/helper";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
interface Props {
	className?: string;
	username: string;
	isFollowing: boolean;
}

const FollowButton = ({ className, username, isFollowing }: Props) => {
	const { mutate: followUser, isPending: isFollowingPending } = useFollowUser();
	const { mutate: unfollowUser, isPending } = useUnfollowUser();
	const [isFollowingState, setIsFollowingState] = useState(isFollowing);
	useEffect(() => {
		setIsFollowingState(isFollowing);
	}, [isFollowing]);
	const handleFollow = () => {
		if (isFollowingState) {
			unfollowUser(username, {
				onSuccess: () => {
					setIsFollowingState(false);
				},
			});
		} else {
			followUser(username, {
				onSuccess: () => {
					setIsFollowingState(true);
				},
			});
		}
	};

	return (
		<Button
			disabled={isPending || isFollowingPending}
			className={cn("md:text-base", className, isFollowingState ? "bg-gray-700 text-white" : "bg-green-600 text-white")}
			onClick={handleFollow}
		>
			{isPending || isFollowingPending ? "Loading..." : isFollowingState ? "Following" : "Follow"}
		</Button>
	);
};

export default FollowButton;
