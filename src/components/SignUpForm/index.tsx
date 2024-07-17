import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignUpUser } from "../../hooks/useUser";

const schema = z.object({
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
			className="mt-6"
		>
			<div className="text-left">
				<label
					htmlFor="email"
					className="block tracking-[-0.15px] text-[#718096]"
				>
					Username
				</label>
				<input
					required
					{...register("username")}
					type="text"
					className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
					placeholder="Enter your Email"
				/>
				{errors.username && <p className="font-poppins mt-1 text-left text-sm text-red-500">{errors.username.message}</p>}
			</div>
			<div className="mt-5 text-left">
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
			{/* <div className="mt-5 text-left">
				<label
					htmlFor="confirm-password"
					className="block tracking-[-0.15px] text-[#718096]"
				>
					Re-Enter Password
				</label>
				<input
					required
					type="text"
					className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
					placeholder="Re-Enter your Password"
				/>
			</div> */}
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
					"SignUp"
				)}
			</button>
		</form>
	);
};

export default SignUpForm;
