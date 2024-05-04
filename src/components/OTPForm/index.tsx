import { useState } from "react";
import { ClipboardEvent } from "react";

const otpPattern = /^\d{4}$/;

const OTPForm = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));

	const handleChange = (target: HTMLInputElement, index: number) => {
		if (isNaN(Number(target.value))) return;

		setOtp([...otp.map((d, idx) => (idx === index ? target.value : d))]);

		if (target.value.length !== 0) {
			//Focus next input
			if (target.nextSibling) (target.nextSibling as HTMLInputElement).focus();
		}
		// Focus Previous Input
		if (target.value.length === 0 && target.previousElementSibling) {
			(target.previousElementSibling as HTMLInputElement).focus();
		}
	};

	const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
		const copiedText = e.clipboardData.getData("Text");
		if (otpPattern.test(copiedText)) {
			setOtp([...copiedText]);
		}
	};

	return (
		<form className="mt-16">
			<div className="xs:gap-x-10 flex justify-center gap-x-4">
				{otp.map((num, index) => (
					<input
						key={`input-${index}`}
						className="size-14 rounded-lg border border-[#CBD5E0] pl-[26px] text-xl sm:size-16"
						type="text"
						maxLength={1}
						value={num}
						onChange={(e) => handleChange(e.target, index)}
						onPaste={handlePaste}
					/>
				))}
			</div>
			<div className="flex justify-center">
				<button
					type="submit"
					className="mt-6 w-full max-w-[385px] rounded-lg bg-black py-[10px] text-center text-lg font-semibold text-white"
				>
					Verify
				</button>
			</div>
		</form>
	);
};

export default OTPForm;
