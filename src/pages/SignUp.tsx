import { Link } from "react-router-dom";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
	return (
		<PageContainer className="flex h-screen items-center justify-center md:bg-[#F5F5F5]">
			<Container className="!h-fit max-w-[600px] bg-white p-8 font-roboto md:rounded-xl md:shadow-lg">
				<h1 className="text-3xl font-bold sm:text-4xl">Create an Account</h1>
				<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Empower. Create. Discover. Connect. Thrive</p>
				<SignUpForm />
				<p className="mt-5 text-center">
					Already have an account?{" "}
					<Link
						to="/login"
						className="font-medium text-[#242424B2]"
					>
						Log In
					</Link>
				</p>
				{/* <div className="mb-10 mt-[100px] flex flex-col gap-y-4">
					<SignUpWithGoogle />
					<SignUpWithFaceBook />
				</div> */}
			</Container>
		</PageContainer>
	);
};

export default SignUp;
