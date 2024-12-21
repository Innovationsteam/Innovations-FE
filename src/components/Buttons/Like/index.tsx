///////Worked On
import { useState } from "react";
import { motion } from "framer-motion";
import { likePost } from "@/queries/article.queries";
export const Like = ({ likes, id, hasLiked }: { likes: number; id: string; hasLiked: boolean }) => {
	const [liked, setLiked] = useState(hasLiked);
	const [addlike, setAddedlike] = useState(likes);
	return (
		<button
			className="flex items-center gap-x-1"
			onClick={async () => {
				const like = await likePost(id);
				setLiked(like);
				if (like) {
					setAddedlike(addlike + 1);
				} else {
					setAddedlike(addlike - 1);
				}
			}}
		>
			{liked ? (
				<motion.svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					aria-label="liked"
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ scale: 1, opacity: 1 }}
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.85 }}
				>
					<path
						d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						fill="red"
					/>
				</motion.svg>
			) : (
				<motion.svg
					aria-label="like"
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ scale: 1, opacity: 1 }}
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.85 }}
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					/>
				</motion.svg>
			)}
			<span className="text-xs sm:text-sm">{addlike}</span>
		</button>
	);
};
