import Skeleton from "react-loading-skeleton";

const FollowerSkeleton = () => {
	return (
		<div className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<Skeleton
					circle={true}
					height={36}
					width={36}
				/>

				<div className="flex-1">
					<Skeleton
						height={20}
						width={`75%`}
					/>
					<Skeleton
						height={16}
						width={`50%`}
						className="mt-1"
					/>
				</div>

				<Skeleton
					height={32}
					width={96}
					className="rounded-lg"
				/>
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black transition-transform duration-300 ease-linear group-hover:scale-x-100"></div>
			</div>
		</div>
	);
};

export default FollowerSkeleton;
