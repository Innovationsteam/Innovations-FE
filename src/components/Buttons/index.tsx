///////Worked On
import { ModalType, useModalActions } from "@/store/modal";
import { Link } from "react-router-dom";
import { follow, unfollow } from "@/queries/follow.queries";
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
		<Link
			to="/article/new"
			className="flex w-full max-w-[239px] justify-center gap-x-[10px] rounded-lg bg-[#01543B] py-5 font-roboto"
		>
			<img
				className="size-6 object-cover"
				src="/assets/icons/pencil.svg"
				alt=""
			/>
			<span className="font-medium text-white">Write Article</span>
		</Link>
	);
};

export const FollowUser = ({ className, username }: { className?: string; username?: string }) => {
	return (
		<button
			type="button"
			onClick={() => {
				follow(username);
			}}
			className={`rounded-lg  bg-[#1C4532] px-4 py-2 font-roboto text-sm font-medium text-white md:px-6 md:text-base ${className}`}
		>
			Follow
		</button>
	);
};
export const UnFollowUser = ({ className, username }: { className?: string; username?: string }) => {
	return (
		<button
			type="button"
			onClick={() => {
				unfollow(username);
			}}
			className={`rounded-lg bg-[#1f1f1f] px-4 py-2 font-roboto text-sm font-medium text-white md:px-6 md:text-base ${className}`}
		>
			Following
		</button>
	);
};

export const EditProfile = ({ className }: { className?: string }) => {
	const { openModal } = useModalActions();
	return (
		<button
			type="button"
			className={`rounded-lg bg-[#1C4532] px-3 py-2 font-roboto text-sm font-medium text-white md:px-6 md:text-base ${className}`}
			onClick={() => openModal(ModalType.EDIT_PROFILE)}
		>
			Edit Profile
		</button>
	);
};
