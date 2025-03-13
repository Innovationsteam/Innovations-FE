import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
			className="mt-6 grid gap-4"
		>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="name"
					className="text-base"
				>
					Name
				</Label>
				<Input
					{...register("name")}
					id="name"
					type="text"
					placeholder="Enter your name"
				/>

				{errors.name && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.name?.message}</p>}
			</div>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="email"
					className="text-base"
				>
					Email
				</Label>
				<Input
					{...register("email")}
					id="email"
					type="text"
					placeholder="Enter your email"
				/>
				{errors.email && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.email?.message}</p>}
			</div>
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
					className="text-base"
				>
					Confirm Password
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
				disabled={isPending}
				className="mt-6 flex h-[47px] w-full items-center justify-center rounded-lg bg-black py-1 text-center text-lg font-semibold text-white"
			>
				{isPending ? (
					<img
						className="h-full object-cover"
						src="/assets/icons/loader.svg"
					/>
				) : (
					"Sign Up"
				)}
			</button>
		</form>
	);
};

export default SignUpForm;
