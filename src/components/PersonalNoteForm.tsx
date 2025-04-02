import { useState } from "react"; // Import useState
import { WordCountExtension, cn } from "@/lib/utils";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useModalData } from "@/store/modal";
import { formatSplit } from "@/lib/utils";
import { useNoteCreate, useNoteUpdate } from "@/hooks/posts/useNotes";

const CustomDocument = Document.extend({
	content: "heading block*",
});

const PersonalNoteForm = () => {
	const { postId, notes } = useModalData() || {};
	const [isWordCountExceeded, setIsWordCountExceeded] = useState(false); // State to track word count

	const editor = useEditor({
		extensions: [
			CustomDocument,
			StarterKit.configure({
				document: false,
			}),
			Underline,
			Placeholder.configure({
				showOnlyWhenEditable: true,
				showOnlyCurrent: true,
				placeholder: ({ node }) => {
					if (node.type.name === "heading") {
						return "Title";
					}
					return "Type your note here";
				},
			}),
			WordCountExtension(setIsWordCountExceeded),
		],
		content: notes?.[0] ? `${notes?.[0]?.title} <p>${notes?.[0]?.content}</p>` : ``,
		editorProps: {
			attributes: {
				class: cn("font-roboto h-[73vh] block placeholder:text-[#14141466] text-black focus:outline-none prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc prose-h1:text-[30px] prose-p:text-xl"),
				spellcheck: "true",
			},
		},
	});

	const { mutate: createNote } = useNoteCreate();
	const { mutate: editNote } = useNoteUpdate();

	const publish = () => {
		const { title, content } = formatSplit((editor as Editor).getHTML());
		createNote({ title, content, postId });
	};

	const update = () => {
		const { title, content } = formatSplit((editor as Editor).getHTML());
		editNote({ title, content, noteId: notes?.[0]?.publicId });
	};

	if (!editor) return null;

	return (
		<div className="mt-6 flex h-full flex-col">
			<div className="flex-1 overflow-y-auto scrollbar-hide">
				<EditorContent editor={editor} />
			</div>
			<div className="flex">
				{notes?.[0] ? (
					<button
						type="button"
						className={`ml-auto w-full max-w-[100px] rounded-lg  ${isWordCountExceeded ? "bg-gray-700" : "bg-[#04BF87]"} py-2 font-raleway text-sm font-semibold text-white text-white md:py-[10px] md:text-base`}
						onClick={update}
						disabled={isWordCountExceeded}
					>
						Update
					</button>
				) : (
					<button
						type="button"
						className={`ml-auto w-full max-w-[100px] rounded-lg  ${isWordCountExceeded ? "bg-gray-700" : "bg-[#04BF87]"} py-2 font-raleway text-sm font-semibold text-white text-white md:py-[10px] md:text-base`}
						onClick={publish}
						disabled={isWordCountExceeded}
					>
						Save
					</button>
				)}
			</div>
		</div>
	);
};

export default PersonalNoteForm;
