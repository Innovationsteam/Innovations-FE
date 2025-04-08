import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLoginUser } from "../../hooks/useUser";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const schema = z.object({
	username: z.string().min(4, { message: "Minimum of 4 characters" }).max(100, { message: "Maximum of 100 characters" }),
	password: z.string().min(4, { message: "Minimum of 4 characters" }),
});
export type LoginFormData = z.infer<typeof schema>;
import { Link } from "react-router-dom";
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<Label
					htmlFor="username"
					className="mb-2 block font-roboto text-base text-sm "
				>
					Email or Username
				</Label>
				<Input
					{...register("username")}
					id="username"
					type="text"
					className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
					placeholder="Enter your username"
				/>
				{errors.username && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.username?.message}</p>}
			</div>

			<div className="mb-4">
				<Label
					htmlFor="password"
					className="mb-2 block font-roboto text-base text-sm"
				>
					Password
				</Label>

				<div className="relative">
					<Input
						{...register("password")}
						id="password"
						type={showPassword ? "text" : "password"}
						placeholder="Enter your password"
						className="w-full rounded border p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<div className="absolute inset-y-0 right-0 flex items-center pr-3">
						{showPassword ? (
							<Eye
								className="cursor-pointer"
								onClick={togglePasswordVisibility}
							/>
						) : (
							<EyeOff
								className="cursor-pointer"
								onClick={togglePasswordVisibility}
							/>
						)}
					</div>
				</div>
				{errors.password && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.password?.message}</p>}
			</div>

			<div className="mb-6 flex items-center justify-between">
				<div />
				<Link
					to="/forgot-password"
					className="group text-sm font-medium"
				>
					<p className="text-[#242424B2] group-hover:text-black">Forgot Password?</p>
					<div className="h-[1.5px] w-0 bg-[#242424B2] transition-all duration-200 ease-in-out group-hover:w-full"></div>
				</Link>
			</div>

			<motion.button
				type="submit"
				className="bg-customGreen flex h-12 w-full rounded-5 cursor-pointer items-center justify-center rounded text-white transition hover:bg-green-600"
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				disabled={isPending || !isValid}
				autoFocus
			>
				{isPending ? (
					<img
						className="h-6 w-6"
						src="/assets/icons/loader.svg"
						alt="Loading..."
					/>
				) : (
					"Log in"
				)}
			</motion.button>
		</form>
	);
};

export default LoginForm;
