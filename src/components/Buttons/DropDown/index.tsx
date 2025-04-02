import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { Tooltip } from "react-tooltip";

const Positions = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"] as const;

type position = (typeof Positions)[number];

const DropDown = ({ children, position = "bottom" }: { children: ReactNode[]; position?: position }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className="group flex gap-x-1"
				onClick={() => setIsOpen(true)}
				onFocus={() => setIsOpen(true)}
				onBlur={() => setIsOpen(false)}
			>
				<motion.svg
					data-tooltip-id="dropDown"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					className="relative z-[2] cursor-pointer"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						className={cn("group-hover:fill-black", {
							"fill-[#5B7083]": !isOpen,
							"fill-black": isOpen,
						})}
						d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
					></path>
				</motion.svg>
			</button>
			<Tooltip
				clickable
				// anchorSelect="#dropDown"
				id="dropDown"
				className="!z-50 !rounded-lg !bg-white !bg-opacity-100 !px-3 text-start font-roboto shadow-[0px_1px_20px_#9797976e]"
				place={position}
				isOpen={isOpen}
			>
				{children}
			</Tooltip>
		</>
	);
};

export default DropDown;
