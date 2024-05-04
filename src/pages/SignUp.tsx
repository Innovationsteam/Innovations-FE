import { SignUpWithFaceBook, SignUpWithGoogle } from "../components/CTA";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
	return (
		<PageContainer>
			<Container className="mt-14 text-center">
				<h1 className="text-3xl font-bold sm:text-4xl">Create an Account</h1>
				<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Empower. Create. Discover. Connect. Thrive</p>
				<SignUpForm />
				<div className="mb-10 mt-[100px] flex flex-col gap-y-4">
					<SignUpWithGoogle />
					<SignUpWithFaceBook />
					<p className="text-center font-medium">
						Already have an account? <span className="text-[#242424B2]"> Log in</span>
					</p>
				</div>
			</Container>
		</PageContainer>
	);
};

export default SignUp;
