import { Link } from "react-router-dom";
import Container from "../components/Container";
import OTPForm from "../components/OTPForm";
import PageContainer from "../components/PageContainer";

const VerifyOTP = () => {
	return (
		<PageContainer className="flex h-screen items-center justify-center md:bg-[#F5F5F5]">
			<Container className="max-w-[600px] bg-white p-8 font-roboto md:rounded-xl md:shadow-lg">
				<Link
					to="/login"
					className="flex size-7 items-center justify-center rounded-lg bg-[#3B3B3B1A]"
				>
					<img
						className="size-4 object-cover"
						src="/assets/icons/chevron-left.svg"
						alt=""
					/>
				</Link>
				<header className="mt-6 text-center">
					<h1 className="mt-2 text-3xl font-bold sm:text-4xl">OTP Verification</h1>
					<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Kindly enter the verification code sent to your email</p>
				</header>
				<OTPForm />
				<p className="mt-5 text-center">
					Didn’t get a code?{" "}
					<Link
						to="/signup"
						className="font-medium text-[#242424B2]"
					>
						Resend Code
					</Link>
				</p>
			</Container>
		</PageContainer>
	);
};

export default VerifyOTP;
