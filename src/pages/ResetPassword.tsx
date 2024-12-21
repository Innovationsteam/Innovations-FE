import { Link } from "react-router-dom";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useVerifyEmail } from "@/hooks/useVerifyEmail";

const schema = z.object({
	email: z.string().email(),
});

export type ResetPasswordData = z.infer<typeof schema>;

const ResetPassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ResetPasswordData>({
		resolver: zodResolver(schema),
	});

	const { mutate: sendToken, isPending } = useVerifyEmail();

	const onSubmit = () => sendToken({ token: "ssss" });

	return (
		<PageContainer className="flex h-screen items-center justify-center md:bg-[#F5F5F5]">
			<Container className="max-w-[600px] bg-white p-8 font-roboto md:rounded-xl md:shadow-lg">
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
					<h1 className="text-3xl font-bold sm:text-4xl">Reset your Password</h1>
					<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Kindly enter the email that you used to register</p>
				</header>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mt-9"
				>
					<label
						htmlFor="email"
						className="block font-medium tracking-[-0.15px] text-[#718096]"
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
							"Next"
						)}
					</button>
				</form>
			</Container>
		</PageContainer>
	);
};

export default ResetPassword;
