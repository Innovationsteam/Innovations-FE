import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DraftSkeleton = () => {
	return (
		<button className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<div>
					<Skeleton width={500} height={20} className="text-base font-medium leading-5 text-[#141414E5] mb-2" />
					<Skeleton width={550} height={60} className="mt-1 max-w-[273px] text-sm text-[#14141499] overflow-ellipsis line-clamp-2 max-h-[125px] overflow-hidden break-words leading-6" />
				</div>
				<Skeleton width={100} height={30} className="rounded-lg border border-[#22222299] px-3 py-1 font-roboto text-sm text-[#22222299] md:ml-auto md:text-base" />
				<Skeleton width={100} height={30} className="rounded-lg border border-[#22222299] bg-[#1C4532] px-3 py-1 font-roboto text-sm text-white  md:text-base" />
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black "></div>
			</div>
		</button>
	);

};

export default DraftSkeleton;