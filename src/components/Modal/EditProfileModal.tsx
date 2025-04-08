import { useUpdateProfile } from "@/hooks/useUpdateProfile";
import { useUserProfile } from "@/hooks/useUserProfile";
import { ModalType, useActiveModal, useModalActions } from "@/store/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import ModalContainer from "./ModalContainer";

const schema = z.object({
	name: z.string().min(2, { message: "Must be at least 2 characters" }).max(50, { message: "Cannot exceed 50 characters" }).optional(),
	bio: z.string().min(4, { message: "Must be at least 4 characters" }).max(100, { message: "Cannot exceed 100 characters" }).optional(),
});

export type EditProfileData = z.infer<typeof schema>;

const EditProfileModal = () => {
	const fileInputRef = useRef<HTMLInputElement>(null!);
	const backdropInputRef = useRef<HTMLInputElement>(null!); 

	const isOpen = useActiveModal(ModalType.EDIT_PROFILE);
	const { closeModal } = useModalActions();

	const { data: user, isPending: isPendingProfile } = useUserProfile();

	const [profileImage, setProfileImage] = useState<File>(null!);
	const [backdropImage, setbackdropImage] = useState<string | null | File>(user?.backdropImg ?? null);

	const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfile();

	const getBackdropImageSrc = () => {
		if (backdropImage instanceof File) {
			return URL.createObjectURL(backdropImage);
		}
		return backdropImage ?? user?.backdropImg ?? "/assets/images/writerHeader.jpg";
	};

	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<EditProfileData>({
		resolver: zodResolver(schema),
		mode: "onChange",
		values: {
			name: user?.name ?? "",
			bio: user?.bio ?? "",
		},
	});

	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			const file = files[0];
			file.type.startsWith("image/") ? setProfileImage(file) : toast.error("Only image files are allowed.");
		} else {
			toast.error("Please select a profile image");
		}
	};

	const onBackdropChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			const file = files[0];
			file.type.startsWith("image/") ? setbackdropImage(file) : toast.error("Only image files are allowed.");
		} else {
			toast.error("Please select a backdrop image");
		}
	};

	const onSubmit = (data: EditProfileData) => {
		if (!profileImage) {
			toast.error("Profile picture is required!");
			return;
		}
		const formData = new FormData();
		formData.append("name", data.name || "");
		formData.append("bio", data.bio || "");
		formData.append("profile", profileImage);
		if (backdropImage) {
			formData.append("backdropImg", backdropImage);
		}

		updateProfile(formData);
	};

	return (
		<ModalContainer isOpen={isOpen}>
			<div className="flex h-full  items-center justify-center">
				<div className="h-fit min-h-[150px] w-full max-w-[647px] shrink-0 rounded-[20px] bg-white p-5">
					<div className="flex items-center">
						<header className="mb-5">
							<h2 className="font-roboto text-xl font-bold">Edit Profile</h2>
							<p className="font-roboto text-base">Kindly fill in your information </p>
						</header>
						<CircleX
							onClick={() => closeModal()}
							className="ml-auto rotate-90 cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-90"
							size={24}
						/>
					</div>
					<div className="relative">
						<div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gray-200">
							<img
								className="absolute inset-0 h-full w-full object-cover"
								src={getBackdropImageSrc()}
								alt="Backdrop"
							/>

							<label
								className="absolute inset-0 cursor-pointer"
								htmlFor="backdrop"
							>
								<div className="absolute inset-0 flex items-center justify-center bg-[#00000099]">
									<img
										src="/assets/icons/camera.svg"
										className="h-10 w-10"
										alt="Upload"
									/>
								</div>
							</label>
							<label
								className="absolute bottom-0 left-0 m-2 flex items-center justify-center overflow-hidden rounded-full border-2 border-white"
								htmlFor="profile"
							>
								<img
									className="h-[100px] w-[100px] object-cover"
									src={"/assets/images/profile0.png"}
									alt="Profile"
								/>
								<div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#00000099]">
									<img
										src="/assets/icons/camera.svg"
										className="h-10 w-10"
										alt="Upload"
									/>
								</div>
							</label>
						</div>
						<input
							ref={fileInputRef}
							id="profile"
							type="file"
							accept="image/*"
							onChange={onFileChange}
							style={{ display: "none" }}
						/>
						<input
							ref={backdropInputRef}
							id="backdrop"
							type="file"
							accept="image/*"
							onChange={onBackdropChange}
							style={{ display: "none" }}
						/>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-6 grid gap-3"
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
								disabled={isPendingProfile}
								placeholder="Enter your name"
							/>
							{errors.name && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.name?.message}</p>}
						</div>
						<div className="space-y-1 text-left">
							<Label
								htmlFor="bio"
								className="text-base"
							>
								Bio
							</Label>
							<Textarea
								{...register("bio")}
								id="bio"
								disabled={isPendingProfile}
								placeholder="Enter your bio"
							/>
							{errors.bio && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.bio?.message}</p>}
						</div>
						<Button
							type="submit"
							disabled={isPendingProfile || isUpdatingProfile || !isValid}
							className="mt-3"
						>
							{isUpdatingProfile ? (
								<img
									className="h-full object-cover"
									src="/assets/icons/loader.svg"
								/>
							) : (
								"Update Profile"
							)}
						</Button>
					</form>
				</div>
			</div>
		</ModalContainer>
	);
};

export default EditProfileModal;
