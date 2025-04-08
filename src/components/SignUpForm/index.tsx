import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { useSignUpUser } from "../../hooks/useUser";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const schema = z
	.object({
		name: z.string().min(4, { message: "Minimum of 4 characters" }).max(20, { message: "Maximum of 20 characters" }),
		username: z.string().min(4, { message: "Minimum of 4 characters" }).max(20, { message: "Maximum of 20 characters" }),
		email: z.string().email({ message: "Field must be a valid email" }),
		password: z.string().min(4, { message: "Minimum of 4 characters" }),
		confirmPassword: z.string().min(4, { message: "Minimum of 4 characters" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"],
	});


export type SignUpFormData = z.infer<typeof schema>;

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormData>({
		resolver: zodResolver(schema),
	});

	const { mutate: registerUser, isPending } = useSignUpUser();

	const onSubmit = (formData: SignUpFormData) => {
	const {name, username, email, password} = formData
		registerUser({ name, username, email, password });
	}
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid gap-4"
		>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="name"
					className="mb-2 block font-roboto text-base text-sm"
				>
					Name
				</Label>
				<Input
					{...register("name")}
					id="name"
					type="text"
					className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
					placeholder="Enter your name"
				/>

				{errors.name && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.name?.message}</p>}
			</div>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="email"
					className="mb-2 block font-roboto text-base text-sm"
				>
					Email
				</Label>
				<Input
					{...register("email")}
					id="email"
					type="text"
					className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
					placeholder="Enter your email"
				/>
				{errors.email && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.email?.message}</p>}
			</div>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="username"
					className="mb-2 block font-roboto text-base text-sm"
				>
					Username
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
			<div className="space-y-1 text-left">
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
						className="w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
						type={showPassword ? "text" : "password"}
						placeholder="Enter your password"
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
			</div>{" "}
			<div className="space-y-1 text-left">
				<Label
					htmlFor="confirm-password"
					className="mb-2 block font-roboto text-base text-sm"
				>
					Confirm Password
				</Label>
				<div className="relative">
					<Input
						{...register("confirmPassword")}
						id="confirm-password"
						type={showPassword ? "text" : "password"}
						placeholder="Enter your password"
						className="w-full rounded border p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
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
	
			<motion.button
				type="submit"
				className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-customGreen text-white transition hover:bg-green-600"
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				disabled={isPending}
				autoFocus
			>
				{isPending ? (
					<img
						className="h-6 w-6"
						src="/assets/icons/loader.svg"
						alt="Loading..."
					/>
				) : (
					"Sign Up"
				)}
			</motion.button>
		</form>
	);
};

export default SignUpForm;
