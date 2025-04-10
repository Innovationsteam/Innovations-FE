import FourOFour from "/assets/images/404.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="relative flex h-screen w-full flex-col">
			<div
				className="h-1/2 w-full bg-green-500"
				style={{ backgroundColor: "#16c58f" }}
			/>

			<div
				className="h-1/2 w-full bg-green-400"
				style={{ backgroundColor: "#50fcc7" }}
			/>

			<motion.div
				className="pointer-events-none absolute inset-0 flex pt-3 items-center justify-center"
				style={{ transform: "translateY(-15%)" }}
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: "-15%" }}
				transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
			>
				<motion.img
					src={FourOFour}
					alt="404 Error"
					className="w-2/3 max-w-3xl"
					animate={{
						y: [0, -15, 0],
						rotate: [0, -2, 0, 2, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				/>
			</motion.div>

			<motion.div
				className="absolute inset-x-0 bottom-32 flex flex-col items-center justify-center text-center"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.8 }}
			>
				<motion.h2
					className="mb-2 text-5xl font-bold text-black"
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.8, type: "spring" }}
				>
					OOPS!
				</motion.h2>
				<motion.p
					className="mb-8 text-xl text-black"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
				>
					PAGE NOT FOUND
				</motion.p>

				<motion.div
					className="flex items-center space-x-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
				>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							to="/feed"
							className="rounded border border-black px-8 py-2 text-black transition-all hover:bg-black hover:bg-opacity-20"
						>
							GO HOME
						</Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<button
							onClick={() => navigate(-1)}
							className="rounded border border-black px-8 py-2 text-black transition-all hover:bg-black hover:bg-opacity-20"
						>
							GO BACK
						</button>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default NotFound;
