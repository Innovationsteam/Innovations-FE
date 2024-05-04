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
