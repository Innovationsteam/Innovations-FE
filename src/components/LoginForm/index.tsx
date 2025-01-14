import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useLoginUser } from "../../hooks/useUser";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const schema = z.object({
	username: z.string().min(4, { message: "Minimum of 4 characters" }).max(100, { message: "Maximum of 100 characters" }),
	password: z.string().min(4, { message: "Minimum of 4 characters" }),
});
export type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<LoginFormData>({
		mode: "onChange",
		resolver: zodResolver(schema),
	});

	const { isPending, mutate: loginUser } = useLoginUser();

	const onSubmit = (formData: LoginFormData) => loginUser(formData);
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mt-6 grid gap-3"
		>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="username"
					className="text-base"
				>
					Username
				</Label>
				<Input
					{...register("username")}
					id="username"
					type="text"
					placeholder="Enter your username"
				/>
				{errors.username && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.username?.message}</p>}
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

			<div className="mt-4 flex justify-between">
				{/* <div className="flex items-center">
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
				</div> */}
				<Link
					to="/forgot-password"
					className="group text-sm font-medium"
				>
					<p className="text-[#242424B2] group-hover:text-black">Forgot Password?</p>
					<div className="h-[1.5px] w-0 bg-[#242424B2] transition-all duration-200 ease-in-out group-hover:w-full"></div>
				</Link>
			</div>
			<Button
				type="submit"
				disabled={isPending || !isValid}
				className="bg-primary"
			>
				{isPending ? (
					<img
						className="h-full object-cover"
						src="/assets/icons/loader.svg"
					/>
				) : (
					"Log in"
				)}
			</Button>
		</form>
	);
};

export default LoginForm;
