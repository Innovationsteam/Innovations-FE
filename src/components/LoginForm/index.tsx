import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
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
			<div className="mt-6 flex justify-between">
				<div className="flex items-center">
					<input
						id="terms"
						type="checkbox"
						className="size-[14px] rounded border border-[#CBD5E0]"
						required
					/>
					<span className="ml-2 text-sm">Remember me</span>
				</div>
				<Link
					to="/forgot-password"
					className="text-sm font-medium text-[#242424B2]"
				>
					Forgot Password?
				</Link>
			</div>
			<button
				type="submit"
				onClick={() => navigate("/verify")}
				className="mt-6 w-full rounded-lg bg-black py-[10px] text-center text-lg font-semibold text-white"
			>
				Log In
			</button>
		</form>
	);
};

export default LoginForm;
