import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import { useUserStore } from "@/store/user";
import { Home } from "lucide-react";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const navigate = useNavigate();
	const user = useUserStore((s) => s.user);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 40) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<motion.nav
			animate={{ opacity: scrolled ? 0 : 1 }}
			transition={{ duration: 0.2, ease: "linear" }}
			className={classNames("z-20 w-full bg-white", {
				"shadow-none": scrolled,
				"shadow-sm shadow-[#E4E4EF]": !scrolled,
			})}
		>
			<Container className="flex items-center py-5">
				<Link
					to="/feed"
					className="font-roboto text-xl font-semibold uppercase leading-6 text-[#141414]"
				>
					<span className="text-[#04BF87]">Christian</span>Writes
				</Link>
				<div className="ml-auto flex items-center gap-x-3">
					<Link
						to="/feed"
						className="font-roboto text-xl font-semibold uppercase leading-6 text-[#141414]"
					>
						<Home
							size={28}
							color="#04bf87"
						/>{" "}
					</Link>
					<button
						className=""
						onClick={() => navigate("/article/new")}
					>
						<img
							className="ml-auto size-6"
							src="/assets/icons/pencil-icon.svg"
							alt="Write icon"
						/>
					</button>

					{/* <img
						className="ml-auto size-6 object-cover"
						src="/assets/icons/search.svg"
						alt="search icon"
					/> */}
					<img
						className="size-6 object-cover"
						src="/assets/icons/bell.svg"
						alt="notification"
					/>

					<Link to={`/cw/${user?.username}`}>
						<img
							className="size-8 rounded-full object-cover"
							src={user?.profileImg ?? "/assets/images/profile.png"}
							alt=""
						/>
					</Link>
				</div>
			</Container>
		</motion.nav>
	);
};

export default NavBar;
