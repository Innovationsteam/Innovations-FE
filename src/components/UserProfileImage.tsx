import { useUserAvatar } from "@/hooks/useUserAvatar";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

interface Props {
	fullName?: string;
	image?: string;
	className?: string;
	isLoading?: boolean;
}

const UserProfileImage = ({ fullName, image, className, isLoading = false }: Props) => {
	const { data, isPending } = useUserAvatar(image, fullName ?? "Default User");

	return (
		<div className={cn("flex size-8 items-center justify-center overflow-hidden rounded-full", className)}>
			{isPending && isLoading ? (
				<Skeleton className="h-full w-full object-cover" />
			) : (
				<img
					className="h-full w-full object-cover"
					src={image ?? data}
					alt="Profile"
				/>
			)}
		</div>
	);
};

export default UserProfileImage;
