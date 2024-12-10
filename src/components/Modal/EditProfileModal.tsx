import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import ModalContainer from "./ModalContainer";
import { ChangeEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

const schema = z.object({
	name: z.string().min(4, { message: "Minimum of 4 characters" }).max(20, { message: "Maximum of 20 characters" }),
	phoneNo: z.string().min(4, { message: "Minimum of 4 characters" }),
	email: z.string().min(4, { message: "Minimum of 4 characters" }),
	about: z.string().min(4, { message: "Minimum of 4 characters" }),
});

export type EditProfileForm = z.infer<typeof schema>;

const EditProfileModal = () => {
	const isOpen = useActiveModal(ModalType.EDIT_PROFILE);
	const { closeModal } = useModalActions();
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const uploadContainerRef = useRef(null);
	const fileInputRef = useRef<HTMLInputElement>(null!);

	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files![0];
		if (file) {
			const isValid = file.type.startsWith("image/");
			if (isValid) {
				setSelectedFile(file);
				const reader = new FileReader();
				// reader.onload = () => {
				// 	setImage(reader.result as string);
				// };
				reader.readAsDataURL(file);
			} else {
				toast.error("Only images are allowed");
			}
		} else {
			toast.error("Select an Image");
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EditProfileForm>({
		resolver: zodResolver(schema),
	});
	const isPending = false;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onUploadContainerClick = (e: any) => {
		console.log(e.target.files);
		e.stopPropagation();
		fileInputRef.current.click();
	};

	const onSubmit = (data: FieldValues) => {
		console.log(data);
	};
	return (
		<ModalContainer isOpen={isOpen}>
			<div className="flex min-h-full items-center justify-center">
				<div className="h-fit w-full max-w-[647px] shrink-0 rounded-[20px] bg-white p-5">
					<div className="flex items-center">
						<header className="mb-5">
							<h2 className="font-roboto text-xl font-bold">Edit Profile</h2>
							<p className="font-roboto text-base">Kindly fill in your information </p>
						</header>
						<button
							className="ml-auto rotate-90 transition-transform duration-200 ease-in-out hover:rotate-90"
							onClick={closeModal}
						>
							<img
								className="size-8 object-cover"
								src="/assets/icons/close.svg"
								alt=""
							/>
						</button>
					</div>
					<div
						ref={uploadContainerRef}
						onClick={onUploadContainerClick}
						className="relative mx-auto flex size-[100px] items-center justify-center overflow-hidden rounded-full"
					>
						<img
							className="absolute inset-0 h-full w-full object-cover"
							src={selectedFile ? URL.createObjectURL(selectedFile) : "/assets/images/writer.png"}
							alt=""
						/>
						<div className="z-30 flex h-full w-full cursor-pointer	items-center justify-center bg-[#00000099] ">
							<img
								src="/assets/icons/camera.svg"
								className="size-10"
							/>
						</div>
						<input
							ref={fileInputRef}
							type="file"
							accept="image/*"
							onChange={onFileChange}
							style={{ display: "none" }}
						/>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-6"
					>
						<div className="text-left">
							<label
								htmlFor="email"
								className="block tracking-[-0.15px] text-[#718096]"
							>
								Name
							</label>
							<input
								{...register("name")}
								required
								type="text"
								className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
								placeholder="Enter your Email"
							/>
							{errors.name && <p className="font-poppins mt-1 text-left text-sm text-red-500">{errors.name?.message}</p>}
						</div>
						<div className="mt-5 text-left">
							<label
								htmlFor="password"
								className="block tracking-[-0.15px] text-[#718096]"
							>
								Phone Number
							</label>
							<input
								{...register("phoneNo")}
								required
								type="text"
								className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
								placeholder="Enter your Password"
							/>
							{errors.phoneNo && <p className="font-poppins mt-1 text-left text-sm text-red-500">{errors.phoneNo?.message}</p>}
						</div>
						<div className="mt-5 text-left">
							<label
								htmlFor="password"
								className="block tracking-[-0.15px] text-[#718096]"
							>
								Email
							</label>
							<input
								{...register("email")}
								required
								type="email"
								className="mt-2 h-10 w-full rounded-lg border border-[#CBD5E0] px-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
								placeholder="Enter your Password"
							/>
							{errors.email && <p className="font-poppins mt-1 text-left text-sm text-red-500">{errors.email?.message}</p>}
						</div>
						<div className="mt-5 text-left">
							<label
								htmlFor="password"
								className="block tracking-[-0.15px] text-[#718096]"
							>
								About
							</label>
							<textarea
								{...register("about")}
								required
								className="mt-2 h-[100px] w-full rounded-lg border border-[#CBD5E0] p-3 text-sm text-black transition-colors duration-200 ease-in focus:border-black"
								placeholder="Type Here..."
							/>
							{errors.about && <p className="font-poppins mt-1 text-left text-sm text-red-500">{errors.about?.message}</p>}
						</div>
						<button
							type="submit"
							disabled={isPending}
							className="mt-6 flex h-[47px] w-full items-center justify-center rounded-lg bg-[#04BF87] py-1 text-center font-semibold text-white lg:text-lg"
						>
							{isPending ? (
								<img
									className="h-full object-cover"
									src="/assets/icons/loader.svg"
								/>
							) : (
								"Update Profile"
							)}
						</button>
					</form>
				</div>
			</div>
		</ModalContainer>
	);
};

export default EditProfileModal;
