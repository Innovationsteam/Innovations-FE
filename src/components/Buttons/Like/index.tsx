import { useState } from "react";
import { motion } from "framer-motion";

export const Like = ({ likes }: { likes: number }) => {
	const [liked, setLiked] = useState(false);
	return (
		<button
			className="flex items-center gap-x-1"
			onClick={() => setLiked(!liked)}
		>
			{liked ? (
				<motion.svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					aria-label="clap"
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ scale: 1, opacity: 1 }}
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.85 }}
				>
					<path
						fill-rule="evenodd"
						d="M11.37.828 12 3.282l.63-2.454zM15.421 1.84l-1.185-.388-.338 2.5zM9.757 1.452l-1.184.389 1.523 2.112zM20.253 11.84 17.75 7.438c-.238-.353-.57-.584-.93-.643a.96.96 0 0 0-.753.183 1.13 1.13 0 0 0-.443.695c.014.019.03.033.044.053l2.352 4.138c1.614 2.95 1.1 5.771-1.525 8.395a7 7 0 0 1-.454.415c.997-.13 1.927-.61 2.773-1.457 2.705-2.704 2.517-5.585 1.438-7.377M12.066 9.01c-.129-.687.08-1.299.573-1.773l-2.062-2.063a1.123 1.123 0 0 0-1.555 0 1.1 1.1 0 0 0-.273.521z"
						clip-rule="evenodd"
					></path>
					<path
						fill-rule="evenodd"
						d="M14.741 8.309c-.18-.267-.446-.455-.728-.502a.67.67 0 0 0-.533.127c-.146.113-.59.458-.199 1.296l1.184 2.503a.448.448 0 0 1-.236.755.445.445 0 0 1-.483-.248L7.614 6.106A.816.816 0 1 0 6.459 7.26l3.643 3.644a.446.446 0 1 1-.631.63L5.83 7.896l-1.03-1.03a.82.82 0 0 0-1.395.577.81.81 0 0 0 .24.576l1.027 1.028 3.643 3.643a.444.444 0 0 1-.144.728.44.44 0 0 1-.486-.098l-3.64-3.64a.82.82 0 0 0-1.335.263.81.81 0 0 0 .178.89l1.535 1.534 2.287 2.288a.445.445 0 0 1-.63.63l-2.287-2.288a.813.813 0 0 0-1.393.578c0 .216.086.424.238.577l4.403 4.403c2.79 2.79 5.495 4.119 8.681.931 2.269-2.271 2.708-4.588 1.342-7.086z"
						clip-rule="evenodd"
					></path>
				</motion.svg>
			) : (
				<motion.svg
					initial={{ opacity: 0, scale: 0.85 }}
					animate={{ scale: 1, opacity: 1 }}
					whileHover={{ scale: 1.15 }}
					whileTap={{ scale: 0.85 }}
					width="24"
					height="24"
					viewBox="0 0 24 24"
					aria-label="clap"
				>
					<path
						fill="#5B7083"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
					></path>
				</motion.svg>
			)}
			<span className="text-xs sm:text-sm">{likes}</span>
		</button>
	);
};
