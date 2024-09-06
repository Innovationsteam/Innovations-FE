import { Link } from "react-router-dom";

export const Post = () => {
	return (
		<li className="mx-auto h-fit w-full rounded-xl border border-[#E6E6E6] p-4">
			<div className="flex items-center gap-x-3">
				<img
					className="size-10 object-cover lg:size-[35px]"
					src="/assets/images/profile3.png"
					alt="user profile picture"
				/>
				<div className="flex flex-col items-start gap-x-5 font-roboto text-[#5B7083] xl:flex-row xl:items-center">
					<span className="text-base text-[#2A2A2A] lg:mr-2">Jessica Blue</span>
					<p className="flex items-center gap-x-[6px] text-sm">
						<span>Jan 19, 2023</span>
						<span>·</span>
						<span>8 min</span>
					</p>
				</div>
				<img
					className="ml-auto"
					src="/assets/icons/ellipsis.svg"
					alt=""
				/>
			</div>
			<Link to="/article">
				<div className="my-5 max-h-[202px] overflow-hidden rounded-lg">
					<img
						className="h-full w-full max-w-full object-cover"
						src="/assets/images/post-img.png"
						alt=""
					/>
				</div>
				<div className="mb-6 font-roboto">
					<h3 className="mb-1 text-lg font-medium leading-8">How to grow in faith as a Christian</h3>
					<p className="overfow-ellipsis max-h-[125px] overflow-hidden break-words text-sm leading-6 text-[#14141499]">I’ve been studying UX design at The Hague University for 3 years now. You might think that I have it all figured out I’ve been studying UX design at The Hague University for 3 years now. You might think that I have it all figured out,...</p>
				</div>
				<div className="flex justify-between">
					<button>
						<img
							className="mr-2 inline-block size-5 lg:size-5"
							src="/assets/icons/comment.svg"
							alt=""
						/>
						<span className="text-xs sm:text-sm">3</span>
					</button>
					<button>
						<img
							className="inline-block size-5 lg:size-5"
							src="/assets/icons/share.svg"
							alt=""
						/>
					</button>
					<button>
						<img
							className="mr-2 inline-block size-5 lg:size-5"
							src="/assets/icons/heart.svg"
							alt=""
						/>
						<span className="text-xs sm:text-sm">16</span>
					</button>
					<button>
						<img
							className="inline-block size-5 lg:size-5"
							src="/assets/icons/bookmark.svg"
							alt=""
						/>
					</button>
				</div>
			</Link>
		</li>
	);
};
