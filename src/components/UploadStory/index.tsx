import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, MouseEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { convertBytes } from "../../utils/helper";

const UploadStory = () => {
	const uploadContainerRef = useRef(null);
	const fileInputRef = useRef<HTMLInputElement>(null!);
	const buttonRef = useRef(null);
	const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
	const navigate = useNavigate();

	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.currentTarget.files!;
		if (files?.length > 0) {
			const isValid = Array.from(files).every((file) => file.type.startsWith("image/"));
			isValid ? setSelectedFiles((prev) => [...prev, ...files]) : toast.error("Only images are allowed");
		} else toast.error("Select an Image");
	};

	const onUploadContainerClick = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		if (e.target == uploadContainerRef.current || e.target == buttonRef.current) fileInputRef.current.click();
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (selectedFiles.length > 0) {
			navigate("/stories");
		} else toast.error("Select an Image");
	};

	const removeSelectedFile = (fileName: string) => setSelectedFiles((prev) => [...prev.filter((file) => file.name !== fileName)]);

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-full max-w-[693px] flex-col gap-y-4 bg-white p-6 md:rounded-xl md:shadow-lg"
		>
			<div className="flex items-center">
				<div>
					<h1 className="font-roboto text-lg font-medium tracking-[-0.2px] text-[#0B0B0B]">Media Upload</h1>
					<p className="font-roboto text-sm text-[#6D6D6D]">Add your images here.</p>
				</div>
				<img
					className="ml-auto h-6 w-6 object-cover"
					src="/assets/icons/delete.svg"
					alt=""
				/>
			</div>
			<div
				ref={uploadContainerRef}
				onClick={onUploadContainerClick}
				className="custom-border w-full cursor-pointer rounded-lg p-6 text-center"
			>
				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					multiple
					onChange={onFileChange}
					style={{ display: "none" }}
				/>
				<img
					className="pointer-events-none mx-auto"
					src="/assets/icons/folder.svg"
					alt=""
				/>
				<h2 className="pointer-events-none mt-3 font-roboto text-sm text-[#0B0B0B]">Drag your image(s) to start uploading</h2>
				<div className="pointer-events-none mx-auto my-2 flex items-center justify-center gap-x-3">
					<hr className="w-[80px] bg-[#E7E7E7]" />
					<p className="font-roboto text-xs text-[#6D6D6D]">OR</p>
					<hr className="w-[80px] bg-[#E7E7E7]" />
				</div>
				<button
					type="button"
					ref={buttonRef}
					className="rounded-lg border-[1.5px] border-[#398461] px-3 py-[6px] text-sm font-semibold text-[#217E53] transition-colors duration-300 ease-linear hover:bg-[#217E53] hover:text-white md:py-2 lg:text-base"
				>
					Browse images
				</button>
			</div>
			<p className="font-roboto text-sm text-[#6D6D6D]">Only support .jpg and .png </p>
			<div className="flex max-h-[540px] flex-col gap-y-4 overflow-y-auto md:max-h-[166.67px]">
				<AnimatePresence mode="popLayout">
					{selectedFiles.map((file) => (
						<File
							key={file.name}
							name={file.name}
							image={URL.createObjectURL(file)}
							size={convertBytes(file.size)}
							removeFile={() => removeSelectedFile(file.name)}
						/>
					))}
				</AnimatePresence>
			</div>
			<div className="flex justify-end gap-x-4">
				<button
					type="button"
					className="rounded-lg border border-[#CECECE] bg-white px-4 py-2 font-medium text-[#6D6D6D]"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-lg bg-[#01543B] px-4 py-2 font-semibold text-white"
				>
					Next
				</button>
			</div>
		</form>
	);
};

export default UploadStory;

interface IFile {
	name: string;
	image: string;
	size: string;
	removeFile: () => void;
}

export const File = ({ name, image, size, removeFile }: IFile) => {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "linear" }}
			className="flex items-center gap-x-2 rounded-xl border border-[#E7E7E7] p-4"
		>
			<img
				className="size-[36px] object-cover"
				src={image}
				alt=""
			/>
			<div className="w-full">
				<span className="mb-[2px] block font-roboto font-medium text-black">{name}</span>
				<p className="font-roboto text-xs text-[#6D6D6D]">{size}</p>
			</div>
			<button
				type="button"
				onClick={() => removeFile()}
			>
				<img
					className="ml-auto cursor-pointer"
					src="/assets/icons/close.svg"
				/>
			</button>
		</motion.div>
	);
};
