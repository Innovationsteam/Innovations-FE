import { useUserProfile } from "@/hooks/useUserProfile";
import { useUser } from "@/store/user";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Home, PencilLine, Search, Bell } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import Container from "../Container";
import UserProfileImage from "../UserProfileImage";
import { Button } from "../ui/button";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const navigate = useNavigate();
	const { data: user, isPending } = useUserProfile();
	const isLoggedIn = useUser();

	const [showSignUp, setShowSignUp] = useState(false);
	const guestDropDownRef = useRef(null);

	const hanldeClickOutside = () => setShowSignUp(false);

	useOnClickOutside(guestDropDownRef, hanldeClickOutside);
	const [size, setSize] = useState(26);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setSize(18);
			} else if (window.innerWidth < 768) {
				setSize(20);
			} else if (window.innerWidth < 1024) {
				setSize(24);
			} else {
				setSize(26);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
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
					className="font-roboto text-lg font-semibold uppercase leading-6 text-[#141414] md:text-xl lg:text-2xl"
				>
					<span className="text-[#04BF87]">Christian</span>Writes
				</Link>
				<div className="ml-auto flex items-center gap-x-3">
					<Link to={"/search"}>
						<Search
							size={size}
							color="#04bf87"
						/>
					</Link>
					<Link
						to="/feed"
						className="font-roboto text-xl font-semibold uppercase leading-6 text-[#141414] md:text-2xl lg:text-3xl"
					>
						<Home
							size={size}
							color="#04bf87"
						/>
					</Link>
					<button
						className=""
						onClick={() => navigate("/article/new")}
					>
						<PencilLine
							size={size}
							color="#04bf87"
						/>
					</button>
					<Bell
						size={size}
						color="#04bf87"
					/>

					{isLoggedIn ? (
						<Link to={`/cw/${user?.username}`}>
							<UserProfileImage
								fullName={user?.name}
								image={user?.profileImg}
								isLoading={isPending}
								className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8" // Responsive size for profile image
							/>
						</Link>
					) : (
						<div
							ref={guestDropDownRef}
							className="relative"
						>
							<button
								onClick={() => setShowSignUp(true)}
								className="size-8 shrink-0 rounded-full object-cover"
							>
								<img
									className="h-8 w-8 object-cover md:h-10 md:w-10 lg:h-12 lg:w-12"
									src="/assets/images/guest.png"
									alt="Guest user image"
								/>
							</button>
							<AnimatePresence mode="popLayout">
								{showSignUp ? (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="absolute right-0 top-12 z-20 w-[305px] space-y-3 rounded-lg bg-white p-5 drop-shadow-2xl"
									>
										<div className="flex items-center gap-x-3">
											<div className="size-10 shrink-0 rounded-full object-cover md:size-[55px]">
												<img
													className="h-8 w-8 object-cover md:h-10 md:w-10 lg:h-12 lg:w-12"
													src="/assets/images/guest.png"
													alt="Guest user image"
												/>
											</div>
											<span className="font-roboto text-lg font-medium text-black">Guest</span>
										</div>
										<Link
											className="inline-block w-full"
											to="/login"
										>
											<Button className="font-roboto text-lg font-normal">Login</Button>
										</Link>
									</motion.div>
								) : null}
							</AnimatePresence>
						</div>
					)}
				</div>
			</Container>
		</motion.nav>
	);
};

export default NavBar;
