import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useLoginUser } from "../../hooks/useUser";

const schema = z.object({
	email: z.string().email({ message: "Field must be a valid email" }),
	password: z.string().min(4, { message: "Minimum of 4 characters" }),
});

export type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(schema),
		defaultValues: localStorage.getItem("loginCredentials") && JSON.parse(localStorage.getItem("loginCredentials")!),
	});

	const [saveLogin, setSaveLogin] = useState(false);

	const { isPending, mutate: loginUser } = useLoginUser("/home");

	const onSubmit = (formData: LoginFormData) => {
		loginUser(formData);
		if (saveLogin) localStorage.setItem("loginCredentials", JSON.stringify(formData));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mt-6"
		>
			<div className="text-left">
				<label
					htmlFor="email"
					className="block tracking-[-0.15px] text-[#718096]"
				>
					E-mail
				</label>
				<input
					{...register("email")}
					required
					type="text"
					className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
					placeholder="Enter your Email"
				/>
				{errors.email && <p className="font-poppins mt-1 text-left text-sm text-red-500">{errors.email?.message}</p>}
			</div>
			<div className="mt-5 text-left">
				<label
					htmlFor="password"
					className="block tracking-[-0.15px] text-[#718096]"
				>
					Password
				</label>
				<input
					{...register("password")}
					required
					type="text"
					className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
					placeholder="Enter your Password"
				/>
				{errors.password && <p className="font-poppins mt-1 text-left text-sm text-red-500">{errors.password?.message}</p>}
			</div>
			<div className="mt-6 flex justify-between">
				<div className="flex items-center">
					<input
						id="remember"
						type="checkbox"
						onChange={(e) => setSaveLogin(e.target.checked)}
						className="size-[14px] rounded border border-[#CBD5E0]"
					/>
					<label
						htmlFor="remember"
						className="ml-2 text-sm text-black"
					>
						Remember me
					</label>
				</div>
				<Link
					to="/forgot-password"
					className="group text-sm font-medium"
				>
					<p className="text-[#242424B2] group-hover:text-black">Forgot Password?</p>
					<div className="h-[1.5px] w-0 bg-[#242424B2] transition-all duration-200 ease-in-out group-hover:w-full"></div>
				</Link>
			</div>
			<button
				type="submit"
				disabled={isPending}
				className="mt-6 flex h-[47px] w-full items-center justify-center rounded-lg bg-black py-1 text-center text-lg font-semibold text-white"
			>
				{isPending ? (
					<img
						className="h-full object-cover"
						src="/assets/icons/loader.svg"
					/>
				) : (
					"Log in"
				)}
			</button>
		</form>
	);
};

export default LoginForm;
