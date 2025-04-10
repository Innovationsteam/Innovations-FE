import { motion } from "framer-motion";
import login_image from "/assets/images/login_image.png";
import login_CW from "/assets/images/login_CW.png";
import SignUpForm from "@/components/SignUpForm";
import { Link } from "react-router-dom";
// import { SignUpWithFaceBook, SignUpWithGoogle, SignUpAsGuest } from "@/components/Buttons";
const SignUp = () => {
	return (
		<div className="flex min-h-screen flex-col md:flex-row">
			<motion.div
				className="mr-8 flex min-h-[600px] w-full items-center justify-center p-8 md:w-3/4"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex h-full w-full max-w-md flex-col justify-center">
					<div className="mb-8">
						<img
							src={login_CW}
							alt="CW Logo"
							className="h-20"
						/>
					</div>
					<h1 className="mb-4 font-roboto text-3xl font-bold">Create an Account</h1>
					<p className="mb-6 font-roboto text-gray-600">Join a community of Christian creatives today</p>
					<div className="mt-[30px] flex flex-col gap-y-4">
						<SignUpForm />
						{/* <SignUpWithGoogle />
						<SignUpWithFaceBook />
						<SignUpAsGuest /> */}
					</div>
					<div className="mt-6 text-center">
						<p className="mt-5 text-center text-gray-600">
							Already have an account?{" "}
							<Link
								to="/login"
								className="font-medium text-[#04bf87] "
							>
								Log In
							</Link>
						</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				className="relative grid hidden h-screen w-1/2 place-items-center overflow-hidden md:block"
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				<img
					src={login_image}
					alt="login_image"
					className="h-full w-full object-cover"
				/>
			</motion.div>
		</div>
	);
};

export default SignUp;
