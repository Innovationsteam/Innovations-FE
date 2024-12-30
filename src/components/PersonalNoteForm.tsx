///////Worked On
import { cn } from "@/utils/helper";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useModalData } from "@/store/modal";
const CustomDocument = Document.extend({
	content: "heading block*",
});
import { formatSplit } from "@/utils/helper";
import { useNoteCreate, useNoteUpdate } from "@/hooks/posts/useNotes";

const PersonalNoteForm = () => {
	const { postID, notes } = useModalData() || {};
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

					return "Type your note here or click the plus icon for more options";
				},
			}),
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
	const publish = async () => {
		if (editor && postID) {
			const { title, content } = formatSplit(editor.getHTML());
			createNote({ title, content, postID });
		}
	};
	const update = async () => {
		if (editor && postID) {
			const { title, content } = formatSplit(editor.getHTML());
			editNote({ title, content, noteID: notes?.[0]?.publicId });
		}
	};
	return (
		<div className="mt-6">
			<EditorContent editor={editor} />
			<div className="flex">
				{notes?.[0] ? (
					<button
						type="button"
						className="ml-auto w-full max-w-[100px] rounded-lg bg-[#04BF87] py-2 font-raleway text-sm font-semibold text-white md:py-[10px] md:text-base"
						onClick={() => update()}
					>
						Update
					</button>
				) : (
					<button
						type="button"
						className="ml-auto w-full max-w-[100px] rounded-lg bg-[#04BF87] py-2 font-raleway text-sm font-semibold text-white md:py-[10px] md:text-base"
						onClick={() => publish()}
					>
						Save
					</button>
				)}
			</div>
		</div>
	);
};

export default PersonalNoteForm;
