import { ModalType, useModalActions } from "@/store/modal";
import { extractH1Content, extractPContent } from "@/utils/helper";
import { ChangeEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import client from "@/lib/axios";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "../components/Container";
import TipTapEditor from "../components/Editor/TipTapEditor";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const CreateArticle = () => {
	const { openModal } = useModalActions();
	const [article, setArticle] = useState(``);
	const [articlebody, setArticlebody] = useState([]);
	const [file, setFile] = useState("");
	const navigate = useNavigate();
	const [image, setImage] = useState<string | null>(null);
	const uploadContainerRef = useRef(null);
	const fileInputRef = useRef<HTMLInputElement>(null!);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const [cookies] = useCookies(["access_token"]);

	//////////////////////
	const location = useLocation();
	const { title, body, imageUrl } = location.state || {};
	useEffect(() => {
		if (location.state) {
			if (title) {
				setArticle(title);
			}
			if (body) {
				setArticlebody(extractPContent(body));
			}
			if (imageUrl) {
				setFile(imageUrl);
			}
		}
	}, [body, imageUrl, location.state, title]);

	const saveAsDraft = async (title: string, content: string[], img: string | File | null) => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("content", content.join(""));
		formData.append("category", "#");
		formData.append("image", img || "#");
		formData.append("hashtags", "");
		console.log("Data meant", formData);
		try {
			const response = await client.post("/posts", formData, {
				headers: {
					Accept: "/*",
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${cookies?.access_token}`,
				},
			});
			console.log("Response--------", response);
			toast.success("Draft Saved 🎉");
			navigate("/home");
		} catch (err) {
			toast.error("Failed to upload");
			console.log("Error---------------", err);
		}
	};
	//////////////////////
	const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files![0];
		if (file) {
			const isValid = file.type.startsWith("image/");
			if (isValid) {
				setSelectedFile(file);
				const reader = new FileReader();
				reader.onload = () => {
					setImage(reader.result as string);
				};
				reader.readAsDataURL(file);
			} else {
				toast.error("Only images are allowed");
			}
		} else {
			toast.error("Select an Image");
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onUploadContainerClick = (e: any) => {
		console.log(e.target.files);
		e.stopPropagation();
		if (e.target == uploadContainerRef.current) fileInputRef.current.click();
	};

	const previewArticle = () => {
		console.log("article-----------", article, articlebody);
		if (article) {
			if (selectedFile) {
				openModal(ModalType.Preview, { article, url: selectedFile, backdrop: image, articlebody });
			} else toast.error("Please Select an Image");
		} else toast.error("Article can't be empty");
	};

	return (
		<Container className="!max-w-6xl">
			<header className="mt-6 flex flex-col items-center gap-y-5 sm:flex-row lg:mt-10">
				<button
					type="button"
					onClick={() => navigate("/home")}
					className="mr-auto flex items-center gap-x-2"
				>
					<img
						className="size-4 object-cover"
						src="/assets/icons/chevron-left.svg"
						alt=""
					/>
					<span className="text-nowrap font-roboto text-sm text-[#525252] sm:text-base">Back to Dashboard</span>
				</button>
				<div className="flex w-full items-center justify-start gap-x-3 sm:justify-end">
					<button
						type="button"
						className="rounded-lg px-3 py-2 font-roboto text-sm text-[#14141499] transition-colors duration-100 hover:bg-[#D9D9D952] hover:text-black sm:text-base"
						onClick={() => {
							saveAsDraft(article, articlebody, selectedFile ? selectedFile : file);
						}}
					>
						Save as Draft
					</button>
					<button
						type="button"
						onClick={previewArticle}
						className="rounded-lg bg-[#D9D9D952] px-3 py-2 font-roboto text-sm text-black sm:text-base"
					>
						Publish
					</button>
				</div>
			</header>
			<div
				ref={uploadContainerRef}
				onClick={onUploadContainerClick}
				className="relative my-6 flex h-[min(35vw,350px)] min-h-[140px] items-center justify-center overflow-hidden rounded"
			>
				<img
					className="relative z-30 object-cover md:size-[40px]"
					src="/assets/icons/camera.svg"
					alt=""
				/>
				{imageUrl ? (
					<img
						className="absolute inset-0 object-cover"
						src={selectedFile ? URL.createObjectURL(selectedFile) : imageUrl}
						alt=""
					/>
				) : (
					<img
						className="absolute inset-0 object-cover"
						src={selectedFile ? URL.createObjectURL(selectedFile) : "/assets/images/post-placeholder.png"}
						alt=""
					/>
				)}
				{/* <img
					className="absolute inset-0 object-cover"
					src={selectedFile ? URL.createObjectURL(selectedFile) : "/assets/images/post-placeholder.png"}
					alt=""
				/> */}
				<input
					ref={fileInputRef}
					type="file"
					accept="image/*"
					multiple
					onChange={onFileChange}
					style={{ display: "none" }}
				/>
			</div>
			<section className="min-h-[100vh]">
				<TipTapEditor
					titlePlaceholder={"What’s the title?"}
					textPlaceholder={"Type your article here or click the plus icon for more options"}
					setContent={(content) => {
						setArticle(extractH1Content(content));
						setArticlebody(extractPContent(content));
					}}
					initialContent={`${body ? body : ""}`}
				/>
			</section>
		</Container>
	);
};

export default CreateArticle;
