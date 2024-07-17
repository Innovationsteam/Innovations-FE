const Comment = () => {
	return (
		<div className="border-b py-4 last:border-none">
			<div className="mb-2 flex items-center gap-x-3">
				<img
					className="size-[32px] object-cover"
					src="/assets/images/profile3.png"
					alt="user profile picture"
				/>
				<div className="flex gap-x-2 font-roboto">
					<p className="text-sm font-medium text-[#2A2A2A]">Jessica Blue</p>
					<p className="text-sm text-[#5B7083]">Jan 19, 2023</p>
				</div>
				<img
					className="ml-auto"
					src="/assets/icons/ellipsis.svg"
					alt=""
				/>
			</div>
			<p className="text-sm leading-6 text-[#14141499]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni! Nisi voluptatibus distinctio aut dolorum repudiandae eaque veritatis error porro!</p>
		</div>
	);
};

export default Comment;
