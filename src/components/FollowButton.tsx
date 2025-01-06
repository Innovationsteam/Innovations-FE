import { useFollowUser } from "@/hooks/follow/useFollowUser";
import { useUnfollowUser } from "@/hooks/follow/useUnfollowUser";
import { cn } from "@/utils/helper";
import { Button } from "./ui/button";

interface Props {
	className?: string;
	username: string;
	isFollowing: boolean;
}

const FollowButton = ({ className, username, isFollowing }: Props) => {
	const { mutate: followUser, isPending: isFollowingPending } = useFollowUser();
	const { mutate: unfollowUser, isPending } = useUnfollowUser();

	const handleFollow = () => {
		if (isFollowing) unfollowUser(username);
		else followUser(username);
	};

	return (
		<Button
			disabled={isPending}
			className={cn("md:text-base", className)}
			onClick={handleFollow}
		>
			{isPending || isFollowingPending ? "Loading..." : isFollowing ? "Following" : "Follow"}
		</Button>
	);
};

export default FollowButton;
