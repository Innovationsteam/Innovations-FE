import { Link } from "react-router-dom";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useResetPassword } from "@/hooks/useResetPassword";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const schema = z
	.object({
		email: z.string().email({ message: "Field must be a valid email" }),
		password: z.string().min(4, { message: "Minimum of 4 characters" }),
		confirmPassword: z.string().min(4, { message: "Minimum of 4 characters" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"],
	});

export type ResetPassword = z.infer<typeof schema>;

const ChangePassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ResetPassword>({
		resolver: zodResolver(schema),
	});
	const [showPassword, setShowPassword] = useState(false);
	const location = useLocation();
	const { email, token } = location.state || {};
	const { mutate: resetPassword } = useResetPassword();
	const onSubmit = (formData: ResetPassword) => {
		const { password } = formData;
		resetPassword({ email, password, token });
	};
	
	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};
	return (
		<PageContainer className="flex h-screen items-center justify-center md:bg-[#F5F5F5]">
			<Container className="!h-fit max-w-[600px] bg-white p-8 font-roboto md:rounded-xl md:shadow-lg">
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
				<header className="mt-6">
					<h1 className="text-3xl font-bold sm:text-4xl">Set new Password</h1>
					<p className="mt-1 text-sm text-[#242424B2] sm:text-base">We are almost there, kindly enter your new password</p>
				</header>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mt-6 grid gap-4"
				>
					<div className="space-y-1 text-left">
						<Label
							htmlFor="email"
							className="text-base"
						>
							Email
						</Label>
						<Input
							id="email"
							type="text"
							value={email}
							{...register("email")}
							readOnly
							className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
							placeholder="Your email"
						/>
					</div>
					<div className="space-y-1 text-left">
						<Label
							htmlFor="password"
							className="text-base"
						>
							Password
						</Label>
						<div className="relative">
							<Input
								{...register("password")}
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								className="pr-10"
							/>
							<div className="absolute inset-y-0 right-0 flex items-center pr-3">
								{showPassword ? (
									<EyeOff
										className="cursor-pointer"
										onClick={togglePasswordVisibility}
									/>
								) : (
									<Eye
										className="cursor-pointer"
										onClick={togglePasswordVisibility}
									/>
								)}
							</div>
						</div>
						{errors.password && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.password?.message}</p>}
					</div>
					<div className="space-y-1 text-left">
						<Label
							htmlFor="confirm-password"
							className="text-base"
						>
							Re-Enter Password
						</Label>
						<div className="relative">
							<Input
								{...register("confirmPassword")}
								id="confirm-password"
								type={showPassword ? "text" : "password"}
								placeholder="Enter your password"
								className="pr-10"
							/>
							<div className="absolute inset-y-0 right-0 flex items-center pr-3">
								{showPassword ? (
									<EyeOff
										className="cursor-pointer"
										onClick={togglePasswordVisibility}
									/>
								) : (
									<Eye
										className="cursor-pointer"
										onClick={togglePasswordVisibility}
									/>
								)}
							</div>
						</div>
						{errors.confirmPassword && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500 ">{errors.confirmPassword?.message}</p>}
					</div>
					<button
						type="submit"
						className="mt-6 flex h-[47px] w-full items-center justify-center rounded-lg bg-black py-1 text-center text-lg font-semibold text-white"
					>
						Reset Password
					</button>
				</form>
			</Container>
		</PageContainer>
	);
};

export default ChangePassword;
