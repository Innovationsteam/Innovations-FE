import { SignUpWithGoogle, SignUpWithFaceBook } from "../components/CTA";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import PageContainer from "../components/PageContainer";

const Login = () => {
	return (
		<PageContainer>
			<Container className="mt-14 text-center">
				<h1 className="text-4xl font-bold">Welcome Back</h1>
				<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Sign in and see what we have install for you</p>
				<LoginForm />
				<div className="mb-10 mt-[100px] flex flex-col gap-y-4">
					<SignUpWithGoogle />
					<SignUpWithFaceBook />
					<p className="text-center font-medium">
						Don’t have an account? <span className="text-[#242424B2]">Sign Up</span>
					</p>
				</div>
			</Container>
		</PageContainer>
	);
};

export default Login;
