///////Worked On
import { Link } from "react-router-dom";
import guest from "/assets/images/guest.png";

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
export const SignUpAsGuest = () => {
	return (
		<button className="flex w-full items-center justify-center rounded border p-2">
			<img
				src={guest}
				alt="Facebook icon"
				className="mr-2 h-5 w-5"
			/>
			Sign up as a guest
		</button>
	);
};

export const CreateArticle = () => {
	return (
		<Link
			to="/cw/new"
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
