import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../Container";
import SearchBar from "../Dashboard/SearchBar";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

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
			<Container className="flex items-center py-7 lg:py-5">
				<span className="font-roboto text-2xl font-semibold leading-6 text-[#141414]">INNOVATION</span>
				<div className="ml-auto flex items-center gap-x-3">
					<SearchBar />
					<img
						className="size-6 object-cover"
						src="/assets/icons/bell.svg"
						alt=""
					/>
					<img
						className="size-8 rounded-full object-cover"
						src="/assets/images/profile.png"
						alt=""
					/>
				</div>
			</Container>
		</motion.nav>
	);
};

export default NavBar;
