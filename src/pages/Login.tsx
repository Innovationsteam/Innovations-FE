import { motion } from "framer-motion";
import login_image from "/assets/images/login_image.png";
import login_CW from "/assets/images/login_CW.png";
import LoginForm from "@/components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="grid min-h-screen items-center md:grid-cols-[1fr_1.2fr]">
			<div className="px-6 md:px-10 lg:px-14">
				<img
					className="mb-8 h-20 object-cover"
					src={login_CW}
					alt="CW Logo"
				/>
				<h1 className="mb-2 font-roboto text-3xl font-bold">Welcome Back</h1>
				<p className="mb-6 font-roboto text-gray-600">Share your Christian write ups with the world</p>
				<div className="mt-[30px] flex flex-col gap-y-4">
					<LoginForm />
					{/* <SignUpWithGoogle />
						<SignUpWithFaceBook />
						<SignUpAsGuest /> */}
				</div>
				<div className="mt-6 text-center">
					<p className="mt-5 text-center text-gray-600">
						Don't have an account?
						<Link
							to="/signup"
							className="ml-2 font-medium text-[#04bf87]"
						>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
			<motion.div
				className="hidden h-screen md:block"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<img
					src={login_image}
					alt="login_image"
					className="size-full object-cover object-center"
				/>
			</motion.div>
		</div>
	);
};

export default Login;
