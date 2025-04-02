import { useFollowUser } from "@/hooks/follow/useFollowUser";
import { useUnfollowUser } from "@/hooks/follow/useUnfollowUser";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useUser } from "@/store/user";
import { ModalType, useModalActions } from "@/store/modal";

interface Props {
	className?: string;
	username: string;
	isFollowing: boolean;
}

const FollowButton = ({ className, username, isFollowing }: Props) => {
	const { mutate: followUser, isPending: isFollowingPending } = useFollowUser();
	const { mutate: unfollowUser, isPending } = useUnfollowUser();
	const { openModal } = useModalActions();

	const user = useUser();

	const handleFollow = () => {
		if (!user) {
			openModal(ModalType.WARNING_LOGIN);
			return;
		}

		if (isFollowing) unfollowUser(username);
		else followUser(username);
	};

	return (
		<Button
			disabled={isPending || isFollowingPending}
			className={cn("md:text-base", className, isFollowing ? "bg-gray-700 text-white" : "bg-green-600 text-white")}
			onClick={handleFollow}
		>
			{isPending || isFollowingPending ? "Loading..." : isFollowing ? "Following" : "Follow"}
		</Button>
	);
};

export default FollowButton;
