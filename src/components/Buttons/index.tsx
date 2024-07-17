export const SignUpWithGoogle = () => {
	return (
		<button
			type="button"
			className="flex justify-center gap-x-2 rounded-lg border border-[#CBD5E0] py-[10px]"
		>
			<img
				className="size-5 object-cover"
				src="/assets/icons/google.svg"
				alt="google icon"
			/>
			<span className="text-sm font-medium text-[#718096]">Continue with Google</span>
		</button>
	);
};

export const SignUpWithFaceBook = () => {
	return (
		<button
			type="button"
			className="flex justify-center gap-x-2 rounded-lg border border-[#CBD5E0] py-[10px]"
		>
			<img
				className="size-5 object-cover"
				src="/assets/icons/facebook.svg"
				alt="google icon"
			/>
			<span className="text-sm font-medium text-[#718096]">Continue with Google</span>
		</button>
	);
};

export const CreateArticle = () => {
	return (
		<button className="flex w-full max-w-[239px] justify-center gap-x-[10px] rounded-lg bg-[#01543B] py-5 font-roboto">
			<img
				className="size-6 object-cover"
				src="/assets/icons/pencil.svg"
				alt=""
			/>
			<span className="font-medium text-white">Write Article</span>
		</button>
	);
};

export const PostStory = () => {
	return (
		<div className="flex-shrink-0 text-center">
			<div className="flex size-16 items-center justify-center rounded-full bg-[#141414CC]">
				<img
					className="size-10 object-cover"
					src="/assets/icons/plus-circle.svg"
					alt=""
				/>
			</div>
			<span className="font-roboto text-xs text-[#2A2A2ACC] sm:text-sm md:text-base">Post Story</span>
		</div>
	);
};

export const FollowUser = ({ className }: { className?: string }) => {
	return (
		<button
			type="button"
			className={`rounded-lg bg-[#1C4532] px-4 py-2 font-roboto text-sm font-medium text-white md:px-6 md:text-base ${className}`}
		>
			Follow
		</button>
	);
};
