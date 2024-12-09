import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
import { Link } from "react-router-dom";

const TrendingSkeleton = () => {
	return (
		<Link to="/article" className="block">
			<li className="font-roboto">
				<div className="mb-1 flex items-center gap-x-2">
					<Skeleton circle={true} height={48} width={48} /> 
					<div className="flex gap-x-2">
						<Skeleton width={100} height={20} /> 
						<span className="text-[#5B7083]">·</span>
						<Skeleton width={50} height={20} /> 
					</div>
				</div>
				<div>
					<Skeleton width={200} height={24} className="mb-2" /> 
					<Skeleton count={3} height={16} /> 
				</div>
			</li>
		</Link>
	);
};

export default TrendingSkeleton;