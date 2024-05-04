import { Link } from "react-router-dom";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";

const ResetPassword = () => {
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
					<h1 className="xs:text-4xl mt-2 text-[27px] font-bold leading-[43.71px]">Reset your Password</h1>
					<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Kindly enter the email that you used to register</p>
				</header>
				<form className="mt-9">
					<label
						htmlFor="email"
						className="block font-medium tracking-[-0.15px] text-[#718096]"
					>
						E-mail
					</label>
					<input
						required
						type="text"
						className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black"
						placeholder="Enter your Email"
					/>
					<button
						type="submit"
						// onClick={() => navigate("/login")}
						className="mt-6 w-full rounded-lg bg-black py-[10px] text-center text-lg font-semibold text-white"
					>
						Next
					</button>
				</form>
			</Container>
		</PageContainer>
	);
};

export default ResetPassword;
