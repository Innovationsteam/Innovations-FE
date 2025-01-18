import { Skeleton } from "../ui/skeleton";

const TrendingSkeleton = () => {
	return (
		<div className="grid gap-y-3">
			<div>
				<div className="flex items-center gap-x-2">
					<Skeleton className="size-10" />
					<div className="flex gap-x-4">
						<Skeleton className="h-5 w-[100px]" />
						<Skeleton className="h-5 w-[50px]" />
					</div>
				</div>
				<div className="mt-4">
					<Skeleton className="mb-2 h-6 w-[200px]" />
					<Skeleton className="h-4 w-[100px]" />
				</div>
			</div>
			<div>
				<div className="flex items-center gap-x-2">
					<Skeleton className="size-10" />
					<div className="flex gap-x-4">
						<Skeleton className="h-5 w-[100px]" />
						<Skeleton className="h-5 w-[50px]" />
					</div>
				</div>
				<div className="mt-4">
					<Skeleton className="mb-2 h-6 w-[200px]" />
					<Skeleton className="h-4 w-[100px]" />
				</div>
			</div>
		</div>
	);
};

export default TrendingSkeleton;
