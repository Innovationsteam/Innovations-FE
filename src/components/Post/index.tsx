// import { IPost } from "@/types/post.types";
import { PostItem } from "@/utils/article.helper";
import { cn, convertToOriginalFormat, formatDate } from "@/utils/helper";
import { useState } from "react";
import { BsShare } from "react-icons/bs";
import { FaRegComment, FaRegHeart, FaRegEye } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
interface PostProps extends PostItem {
	className?: string;
}

export const Post = ({ id, author, publishedDate, content, image, likes, socialMediaShares, commentsCount, title, views, className, slug }: PostProps) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	return (
		<li className={cn("mx-auto h-fit w-full !list-none rounded-xl border border-[#E6E6E6] p-4", className)}>
			<Link
				to="/profile"
				className="flex items-center gap-x-3"
			>
				<img
					className="size-10 object-cover lg:size-[35px]"
					src="/assets/images/profile3.png"
					alt="user profile picture"
				/>
				<div className="flex flex-col items-start gap-x-5 font-roboto text-[#5B7083] xl:flex-row xl:items-center">
					<span className="text-base text-[#2A2A2A] lg:mr-2">{author?.username}</span>
					<p className="flex items-center gap-x-[2px] text-sm">
						<span>{formatDate(publishedDate)}</span>
						<span>·</span>
					</p>
				</div>
				<img
					className="ml-auto"
					src={"/assets/icons/ellipsis.svg"}
					alt=""
				/>
			</Link>
			<Link to={`/article/${author?.username}/${slug}`} state={{ postId: id }}>
				<div className="my-5 max-h-[202px] overflow-hidden rounded-lg">
					<div className="relative">
						{!isImageLoaded && (
							<Skeleton
								height={202}
								width={`100%`}
							/>
						)}
						<img
							className={`h-full w-full max-w-full object-cover ${isImageLoaded ? "block" : "hidden"}`}
							src={image}
							alt=""
							onLoad={() => setIsImageLoaded(true)}
						/>
					</div>
				</div>
				<div className="mb-6 font-roboto text-black">
					<h3 className="mb-1 text-lg font-medium leading-8 line-clamp-1">{title}</h3>
					<p
						className={`overflow-ellipsis line-clamp-3 max-h-[125px] overflow-hidden break-words text-sm leading-6 text-[#14141499]`}
						dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(content) }}
					/>
				</div>
				
				<div className="flex justify-between">
					<button>
						<span className="text-xs sm:text-sm flex items-center">
							<FaRegHeart className="mr-2" style={{ fontSize: '1.1rem' }} />{likes}</span>

					</button>
					<button>
						<span className="text-xs sm:text-sm flex items-center">
							<FaRegComment className="mr-2" style={{ fontSize: '1.1rem' }} />{commentsCount}</span>
					</button>
					<button>
						<span className="text-xs sm:text-sm flex items-center">
							<FaRegEye className="mr-2" style={{ fontSize: '1.1rem' }} />{views}</span>

					</button>
					<button>
						<span className="text-xs sm:text-sm flex items-center">
							<BsShare className="mr-2" style={{ fontSize: '1.1rem' }} />{socialMediaShares}</span>

					</button>
				</div>
			</Link>
		</li>
	);
};
