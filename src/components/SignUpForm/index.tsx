import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignUpUser } from "../../hooks/useUser";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const schema = z.object({
	name: z.string().min(4, { message: "Minimum of 4 characters" }).max(20, { message: "Maximum of 20 characters" }),
	username: z.string().min(4, { message: "Minimum of 4 characters" }).max(20, { message: "Maximum of 20 characters" }),
	email: z.string().email({ message: "Field must be a valid email" }),
	password: z.string().min(4, { message: "Minimum of 4 characters" }),
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

	const onSubmit = (formData: SignUpFormData) => registerUser(formData);

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
				<Input
					{...register("password")}
					id="password"
					type="password"
					placeholder="Enter your password"
				/>
				{errors.password && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.password?.message}</p>}
			</div>
			<button
				type="submit"
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
