const Tag = ({ text }: { text: string }) => {
	return (
		<button
			disabled
			className="rounded-[100px] bg-[#F2F2F2] px-4 py-2 text-sm font-medium text-black"
		>
			{text}
		</button>
	);
};

export default Tag;
