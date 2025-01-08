import { Link } from "react-router-dom";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import PageContainer from "../components/PageContainer";

const Login = () => {
	return (
		<PageContainer className="flex h-screen items-center justify-center md:bg-[#F5F5F5]">
			<Container className="!h-fit max-w-[600px] bg-white p-8 font-roboto md:rounded-xl md:shadow-lg">
				<h1 className="text-4xl font-bold">Welcome Back</h1>
				<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Connect, create,inspire in our Christian creative community</p>
				<LoginForm />
				<p className="mt-5 text-center">
					Don’t have an account?{" "}
					<Link
						to="/signup"
						className="font-medium text-[#242424B2]"
					>
						Sign Up
					</Link>
				</p>
				{/* <div className="mb-10 mt-[90px] flex flex-col gap-y-4">
					<SignUpWithGoogle />
					<SignUpWithFaceBook />
				</div> */}
			</Container>
		</PageContainer>
	);
};

export default Login;
