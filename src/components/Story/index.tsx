import { motion } from "framer-motion";
import { IStory, useStoriesStore } from "../../store/stories";
import { FC } from "react";

const Story: FC<IStory> = ({ id, image }) => {
	const nextStory = useStoriesStore((s) => s.nextStory);

	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="relative h-screen overflow-hidden"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "linear" }}
				className="absolute top-0 w-full bg-white px-5 py-3"
			>
				<div className="mb-4 h-1 overflow-hidden rounded-[50px] bg-[#C7C7C7] lg:bg-[#FFFFFF4D]">
					<motion.div
						initial={{ width: "0%" }}
						animate={{ width: "100%" }}
						transition={{ duration: 3, ease: "linear" }}
						onAnimationComplete={() => nextStory(id)}
						className="h-full rounded-[50px] bg-[#7f7f7fbf] lg:bg-white"
					></motion.div>
				</div>
				<div className="flex items-center">
					<div className="flex items-center">
						<img
							className="mr-3 size-10 object-cover"
							src="/assets/images/avatar.svg"
							alt=""
						/>
						<span className="mr-4 font-roboto text-lg font-medium text-[#141414CC] lg:text-white">Jace.ao</span>
						<span className="font-roboto text-base text-[#141414CC] text-opacity-50 lg:text-white">3h</span>
					</div>
					<img
						className="ml-auto size-6 lg:hidden"
						src="/assets/icons/delete.svg"
						alt=""
					/>
					<img
						className="ml-auto hidden size-6 lg:block"
						src="/assets/icons/delete-white.svg"
						alt=""
					/>
				</div>
			</motion.div>
			<img
				className="h-full w-full object-cover"
				src={image}
				alt=""
			/>
		</motion.div>
	);
};

export default Story;
