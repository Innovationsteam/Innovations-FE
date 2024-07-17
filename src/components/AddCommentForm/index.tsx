import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import classNames from "classnames";

const content = `<h1>Aghedo <strong>Jason</strong></h1>`;

const AddCommentForm = () => {
	const editor = useEditor({
		extensions: [StarterKit, Bold, Italic],
		content,
		editorProps: {
			attributes: {
				class: "focus:outline-none mb-5 w-full border-b border-[#0000001A] pb-5 font-roboto placeholder:text-[#14141466]",
				spellcheck: "true",
			},
		},
	});
	return (
		<div className="rounded-lg md:p-5 md:shadow-[0px_4px_8px_0px_#0a3a6426]">
			<div className="mb-5 flex items-center gap-x-2 md:gap-x-3">
				<img
					className="size-[35px] object-cover"
					src="/assets/images/profile3.png"
					alt="user profile picture"
				/>
				<span className="font-roboto text-[15px] font-medium text-[#222222CC] md:text-base">Jackson Wing</span>
			</div>
			<EditorContent editor={editor} />
			<div className="flex items-center">
				<div className="flex gap-x-2">
					<button
						onClick={() => editor?.chain().focus().toggleBold().run()}
						className={classNames("font-playwrite size-[35px] rounded-lg text-sm font-bold text-[#6B6B6B] hover:bg-[#f2f2f2]", {
							"bg-[#e8f3e8] text-[#1a8917] hover:bg-[#e8f3e8]": editor?.isActive("bold"),
						})}
					>
						B
					</button>
					<button
						onClick={() => editor?.chain().focus().toggleItalic().run()}
						className={classNames("font-playwrite size-[35px] rounded-lg text-sm font-bold text-[#6B6B6B] hover:bg-[#f2f2f2]", {
							"bg-[#e8f3e8] text-[#1a8917] hover:bg-[#e8f3e8]": editor?.isActive("italic"),
						})}
					>
						I
					</button>
				</div>
				<button
					type="button"
					className="ml-auto h-10 rounded-lg bg-[#0089FF] px-4 text-sm font-semibold leading-7 text-white"
				>
					Comment
				</button>
			</div>
		</div>
	);
};

export default AddCommentForm;
