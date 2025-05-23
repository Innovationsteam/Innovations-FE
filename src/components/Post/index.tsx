///////Worked On
import { useUserAvatar } from "@/hooks/useUserAvatar";
import { useUser } from "@/store/user";
import { PostItem } from "@/types/post.types";
import { cn, convertToOriginalFormat, formatDate } from "@/lib/utils";
import { useState } from "react";
import { BsShare } from "react-icons/bs";
import { FaRegComment, FaRegEye, FaRegHeart } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import FadeIn from "../FadeIn";

interface PostProps extends PostItem {
	className?: string;
}

export const Post = ({ id, author, publishedDate, content, image, likes, socialMediaShares, commentsCount, title, views, className, slug }: PostProps) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const { data: userAvatar } = useUserAvatar(author?.profileImg, author.username);
	const user = useUser();

	return (
		<FadeIn duration={150}>
			<li className={cn("mx-auto h-fit w-full !list-none rounded-xl border border-[#E6E6E6] p-4", className)}>
				<Link
					to={`/cw/${author?.username ? author.username : user?.username}`}
					className="flex items-center gap-x-3"
				>
					<img
						className="size-8 rounded-full object-cover lg:size-[35px]"
						src={author?.profileImg ?? userAvatar}
						alt="user profile picture"
					/>

					<div className="flex flex-col items-start gap-x-5 font-roboto text-[#5B7083] xl:flex-row xl:items-center">
						<span className="text-base text-[#2A2A2A] lg:mr-2">{author?.username ? author.username : user?.username}</span>
						<p className="flex items-center gap-x-[2px] text-sm">
							<span>{formatDate(publishedDate)}</span>
							<span>·</span>
						</p>
					</div>
					{/* <img
						className="ml-auto"
						src={"/assets/icons/ellipsis.svg"}
						alt=""
					/> */}
				</Link>
				<Link
					to={`/cw/${author?.username ? author.username : user?.username}/${slug}`}
					state={{ postId: id }}
				>
					<div className="my-5 max-h-[202px] overflow-hidden rounded-lg">
						<div className="relative flex h-60 items-center justify-center">
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
						<h3
							className="mb-1 line-clamp-1 text-lg font-medium leading-8"
							dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(title) }}
						/>

						<p
							className={`line-clamp-3 max-h-[125px] overflow-hidden overflow-ellipsis break-words text-sm leading-6 text-[#14141499]`}
							dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(content) }}
						/>
					</div>

					<div className="flex justify-between">
						<button>
							<span className="flex items-center text-xs sm:text-sm">
								<FaRegHeart
									className="mr-2"
									style={{ fontSize: "1.1rem" }}
								/>
								{likes}
							</span>
						</button>
						<button>
							<span className="flex items-center text-xs sm:text-sm">
								<FaRegComment
									className="mr-2"
									style={{ fontSize: "1.1rem" }}
								/>
								{commentsCount}
							</span>
						</button>
						<button>
							<span className="flex items-center text-xs sm:text-sm">
								<FaRegEye
									className="mr-2"
									style={{ fontSize: "1.1rem" }}
								/>
								{views}
							</span>
						</button>
						<button>
							<span className="flex items-center text-xs sm:text-sm">
								<BsShare
									className="mr-2"
									style={{ fontSize: "1.1rem" }}
								/>
								{socialMediaShares}
							</span>
						</button>
					</div>
				</Link>
			</li>
		</FadeIn>
	);
};
