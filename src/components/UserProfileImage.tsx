import { cn } from "@/lib/utils";

interface Props {
	fullName?: string;
	image?: string;
	className?: string;
}

const UserProfileImage = ({ fullName = "", image, className }: Props) => {
	const initials = fullName
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase())
		.join("");
	return (
		<div
			className={cn("flex size-8 items-center justify-center rounded-full bg-gray-400", className, {
				image: "bg-none",
			})}
		>
			{image ? (
				<img
					className="h-full w-full rounded-full object-cover"
					src={image}
					alt="Profile"
				/>
			) : (
				<span className="text-center text-3xl font-semibold tracking-wide text-white">{initials}</span>
			)}
		</div>
	);
};

export default UserProfileImage;
