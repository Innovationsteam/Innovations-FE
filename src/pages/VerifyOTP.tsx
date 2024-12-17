import { Button } from "@/components/ui/button";
import { useVerifyEmail } from "@/hooks/useVerifyEmail";
import { InputOTP, InputOTPSlot } from "@components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { z } from "zod";
import Container from "../components/Container";
import PageContainer from "../components/PageContainer";
import { useResendEmail } from "@/hooks/useResendEmail";
import { useDebounceCallback } from "usehooks-ts";
import { LoaderCircle } from "lucide-react";

const schema = z.object({
	token: z.string().length(6, { message: "Must be Exactly 6 digits" }),
});

export type OTPFormData = z.infer<typeof schema>;

const VerifyOTP = () => {
	const [searchParams] = useSearchParams();
	const location = useLocation();

	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm<OTPFormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			token: searchParams.get("token") ?? "",
		},
	});

	const { mutate: verifyEmail, isPending: isVerifyingEmail } = useVerifyEmail();
	const { mutate: resendEmail, isPending: isResendingEmail } = useResendEmail();

	const debouncedResendEmail = useDebounceCallback(() => resendEmail({ email: location.state?.email ?? "" }), 800);

	const onSubmit = (data: OTPFormData) => verifyEmail(data);

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
				<header className="mt-6 text-center">
					<h1 className="mt-2 text-3xl font-bold sm:text-4xl">OTP Verification</h1>
					<p className="mt-1 text-sm text-[#242424B2] sm:text-base">Kindly enter the verification code sent to your email</p>
				</header>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="token"
						control={control}
						render={({ field }) => (
							<div className="my-5">
								<InputOTP
									{...field}
									maxLength={6}
								>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTP>
							</div>
						)}
					/>
					<Button
						type="submit"
						disabled={isVerifyingEmail || !isValid}
						className="mt-3 text-lg"
					>
						{isVerifyingEmail ? (
							<img
								className="h-full object-cover"
								src="/assets/icons/loader.svg"
							/>
						) : (
							"Submit"
						)}
					</Button>
				</form>
				<div className="mt-5 flex items-center justify-center text-center">
					<span className="inline-block">Didn’t get a code? </span>
					<Button
						type="button"
						variant="link"
						disabled={isResendingEmail}
						className="text-alternate !m-0 !h-fit !w-fit cursor-pointer !p-0 !px-1 text-center !text-sm font-semibold text-[#242424B2]"
						onClick={debouncedResendEmail}
					>
						{isResendingEmail ? <LoaderCircle className="animate-spin" /> : "Resend Code"}
					</Button>
				</div>
			</Container>
		</PageContainer>
	);
};

export default VerifyOTP;
