import { useUserProfile } from "@/hooks/useUserProfile";
import { useUser } from "@/store/user";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import Container from "../Container";
import UserProfileImage from "../UserProfileImage";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);
	const navigate = useNavigate();
	const { data: user, isPending } = useUserProfile();
	const isLoggedIn = useUser();

	const [showSignUp, setShowSignUp] = useState(false);
	const guestDropDownRef = useRef(null);

	const hanldeClickOutside = () => setShowSignUp(false);

	useOnClickOutside(guestDropDownRef, hanldeClickOutside);

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
						/>
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

					{isLoggedIn ? (
						<Link to={`/cw/${user?.username}`}>
							{isPending ? (
								<Skeleton className="size-8 rounded-full object-cover" />
							) : (
								<UserProfileImage
									fullName={user?.name}
									image={user?.profileImg}
								/>
							)}
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
									className="w-full object-cover"
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
													className="w-full object-cover"
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
