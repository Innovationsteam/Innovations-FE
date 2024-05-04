import { Link } from "react-router-dom";
import Container from "../components/Container";
import OTPForm from "../components/OTPForm";
import PageContainer from "../components/PageContainer";

const VerifyOTP = () => {
	return (
		<PageContainer>
			<Container className="mt-14">
				<header className="text-center">
					<div className="flex size-7 items-center justify-center rounded-lg bg-[#3B3B3B1A]">
						<Link to="/login">
							<img
								className="size-4"
								src="/assets/icons/chevron-left.svg"
								alt=""
							/>
						</Link>
					</div>
					<h1 className="mt-2 text-3xl font-bold sm:text-4xl">OTP Verification</h1>
					<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Kindly enter the verification code sent to your email</p>
				</header>
				<OTPForm />
				<p className="mt-2 text-center font-medium">
					Didn’t get a code? <span className="text-[#242424B2]"> Resend Code</span>
				</p>
			</Container>
		</PageContainer>
	);
};

export default VerifyOTP;
