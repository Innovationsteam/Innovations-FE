import UserProfileImage from "@/components/UserProfileImage";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useUser } from "@/store/user";
import { Link } from "react-router-dom";

const Profile = () => {
	const isLoggedIn = useUser();
	const { data: user, isPending } = useUserProfile("me", !!isLoggedIn);
	return (
		<div>
			{isLoggedIn ? (
				<Link to={`/cw/${user?.username}`}>
					<div className="mb-3 flex items-center gap-x-3 p-3">
						{isPending ? (
							<>
								<Skeleton className="size-8 shrink-0 rounded-full object-cover md:size-[55px]" />
								<div className="space-y-3 font-roboto">
									<Skeleton className="h-5 w-[150px]" />
									<Skeleton className="h-5 w-[150px]" />
								</div>
							</>
						) : (
							<>
								<UserProfileImage
									fullName={user?.name}
									image={user?.profileImg}
									className="md:size-[55px]"
								/>
								<div className="font-roboto">
									<span className="text-lg font-semibold text-black">{user?.username}</span>
									<p className="text-sm text-[#14141499]">{user?.name}</p>
								</div>
							</>
						)}
					</div>
				</Link>
			) : (
				<div className="flex items-center gap-x-3">
					<div className="size-10 shrink-0 rounded-full object-cover">
						<img
							className="w-full object-cover"
							src="/assets/images/guest.png"
							alt="Guest user image"
						/>
					</div>
					<span className="font-roboto text-lg font-medium text-black">Guest</span>
				</div>
			)}
		</div>
	);
};

export default Profile;
