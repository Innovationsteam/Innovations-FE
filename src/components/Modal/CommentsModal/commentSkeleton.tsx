import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
const CommentSkeleton = () => {
    return (
        <div className="border-b py-4 last:border-none">
            <div className="mb-2 flex items-center gap-x-3">
                <Skeleton circle={true} height={32} width={32} />
                <div className="flex gap-x-2 font-roboto">
                    <Skeleton height={20} width={100} /> 
                    <Skeleton height={20} width={80} />  
                </div>
                <Skeleton height={20} width={20} /> 
            </div>
            <Skeleton count={3} height={16} /> 
        </div>
    );
};

export default CommentSkeleton;