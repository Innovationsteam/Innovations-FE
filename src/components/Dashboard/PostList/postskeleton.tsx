import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

const PostSkeleton = () => {
  return (
    <li className="mx-auto h-fit w-full rounded-xl border border-[#E6E6E6] p-4 mb-4">
      <Link to="/profile" className="flex items-center gap-x-3">
        <Skeleton circle={true} height={35} width={35} />
        <div className="flex flex-col items-start gap-x-5 font-roboto text-[#5B7083] xl:flex-row xl:items-center">
          <Skeleton height={20} width={100} />
          <p className="flex items-center gap-x-[2px] text-sm">
            <Skeleton height={15} width={50} />
            <span>·</span>
          </p>
        </div>
        <Skeleton height={20} width={20} />
      </Link>
      <Link to="/article">
        <div className="my-5 max-h-[202px] overflow-hidden rounded-lg">
          <Skeleton height={202} width={`100%`} />
        </div>
        <div className="mb-6 font-roboto text-black">
          <h3 className="mb-1 text-lg font-medium leading-8">
            <Skeleton height={20} width={`80%`} />
          </h3>
          <p className="overflow-ellipsis max-h-[125px] overflow-hidden break-words text-sm leading-6 text-[#14141499]">
            <Skeleton count={3} height={15} />
          </p>
        </div>
        <div className="flex justify-between">
          <button>
            <Skeleton circle={true} height={20} width={20} />
            <Skeleton height={15} width={30} />
          </button>
          <button>
            <Skeleton circle={true} height={20} width={20} />
          </button>
          <button>
            <Skeleton circle={true} height={20} width={20} />
            <Skeleton height={15} width={30} />
          </button>
          <button>
            <Skeleton circle={true} height={20} width={20} />
            <Skeleton height={15} width={30} />
          </button>
        </div>
      </Link>
    </li>
  );
};

export default PostSkeleton;