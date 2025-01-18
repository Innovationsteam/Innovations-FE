import { Skeleton } from "../ui/skeleton";

const UserProfileSkeleton = () => {
	return (
		<div>
			<Skeleton className="size-8 rounded-full object-cover md:size-[80px]" />
			<div className="mt-6 flex items-center text-black">
				<div>
					<Skeleton className="w-[120px]" />
					<div className="mt-1 flex items-center gap-x-2">
						<Skeleton className="h-8 w-[90px]" />
						<Skeleton className="h-8 w-[90px]" />
					</div>
				</div>
				<div className="ml-auto flex items-center gap-x-2">
					<Skeleton className="h-8 w-[107px]" />
				</div>
			</div>
		</div>
	);
};

export default UserProfileSkeleton;
