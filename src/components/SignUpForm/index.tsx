import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
	const navigate = useNavigate();
	return (
		<form className="mt-9">
			<div className="text-left">
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
			</div>
			<div className="mt-5 text-left">
				<label
					htmlFor="password"
					className="block font-medium tracking-[-0.15px] text-[#718096]"
				>
					Password
				</label>
				<input
					required
					type="text"
					className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black"
					placeholder="Enter your Password"
				/>
			</div>
			<div className="mt-5 text-left">
				<label
					htmlFor="confirm-password"
					className="block font-medium tracking-[-0.15px] text-[#718096]"
				>
					Re-Enter Password
				</label>
				<input
					required
					type="text"
					className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black"
					placeholder="Re-Enter your Password"
				/>
			</div>
			<button
				type="submit"
				onClick={() => navigate("/login")}
				className="mt-6 w-full rounded-lg bg-black py-[10px] text-center text-lg font-semibold text-white"
			>
				Sign Up
			</button>
		</form>
	);
};

export default SignUpForm;
