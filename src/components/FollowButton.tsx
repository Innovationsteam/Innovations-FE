import { useFollowUser } from "@/hooks/follow/useFollowUser";
import { cn } from "@/utils/helper";
import { useCallback } from "react";
import { Button } from "./ui/button";

const FollowButton = ({ className, username, isFollowing }: { className?: string; username: string; isFollowing: boolean }) => {
	const { mutate: followUser, isPending } = useFollowUser();

	const unfollowUser = useCallback(() => {
		console.log("User unfollowed:", username);
	}, [username]);

	const handleFollow = () => {
		if (isFollowing) unfollowUser();
		else followUser({ username });
	};

	return (
		<Button
			disabled={isPending}
			className={cn("md:text-base", className)}
			onClick={handleFollow}
		>
			{isPending ? "Loading..." : isFollowing ? "Following" : "Follow"}
		</Button>
	);
};

export default FollowButton;
