import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { BsShare } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Post = (props: any) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	function convertToOriginalFormat(htmlString: string) {
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = htmlString;
		const h1 = tempDiv.querySelector('h1');
		if (h1) {
			h1.remove();
		}
		let textContent = tempDiv.innerText || tempDiv.textContent;

		const sentences = textContent?.split('. ');
		const formattedSentences = sentences?.map(sentence => {
			return sentence.charAt(0).toUpperCase() + sentence.slice(1);
		});

		const formattedText = formattedSentences?.join('. ');

		return formattedText;
	}

	return (
		<li className="mx-auto h-fit w-full rounded-xl border border-[#E6E6E6] p-4">

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
					<span className="text-base text-[#2A2A2A] lg:mr-2">{props?.author}</span>
					<p className="flex items-center gap-x-[2px] text-sm">
						<span>{props?.date}</span>
						<span>·</span>

					</p>
				</div>
				<img
					className="ml-auto"
					src={"/assets/icons/ellipsis.svg"}
					alt=""
				/>
			</Link>
			<Link to="/article">
				<div className="my-5 max-h-[202px] overflow-hidden rounded-lg">
					<div className="relative">
						{!isImageLoaded && (
							<Skeleton height={202} width={`100%`} />
						)}
						<img
							className={`h-full w-full max-w-full object-cover ${isImageLoaded ? 'block' : 'hidden'}`}
							src={props.img}
							alt=""
							onLoad={() => setIsImageLoaded(true)}
						/>
					</div>
				</div>
				<div className="mb-6 font-roboto text-black">
					<h3 className="mb-1 text-lg font-medium leading-8">{props?.title}</h3>
					<p id="convert" className="overflow-ellipsis max-h-[125px] overflow-hidden break-words text-sm leading-6 text-[#14141499]">{convertToOriginalFormat(props?.content)}</p>
				</div>
				<div className="flex justify-between">
					<button>
						<FaRegHeart />
						<span className="text-xs sm:text-sm">{props?.views}</span>
					</button>
					<button>
						<FaRegComment />

					</button>
					<button>
						<BsShare />

						<span className="text-xs sm:text-sm">{props?.socialMediaShares}</span>
					</button>
					<button>
						<img
							className="inline-block size-5 lg:size-5"
							src="/assets/icons/bookmark.svg"
							alt=""
						/>
						<span className="text-xs sm:text-sm">{props?.likes}</span>

					</button>
				</div>
			</Link>
		</li>
	);
};
