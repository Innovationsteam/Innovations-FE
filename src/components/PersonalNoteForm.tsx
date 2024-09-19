import { cn } from "@/utils/helper";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const CustomDocument = Document.extend({
	content: "heading block*",
});

const PersonalNoteForm = () => {
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
		content: ``,
		editorProps: {
			attributes: {
				class: cn("font-roboto h-[73vh] block placeholder:text-[#14141466] text-black focus:outline-none prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc prose-h1:text-[30px] prose-p:text-xl"),
				spellcheck: "true",
			},
		},
	});
	return (
		<div className="mt-6">
			<EditorContent editor={editor} />
			<div className="flex">
				<button
					type="button"
					className="ml-auto w-full max-w-[100px] rounded-lg bg-[#04BF87] py-2 font-raleway text-sm font-semibold text-white md:py-[10px] md:text-base"
				>
					Publish
				</button>
			</div>
		</div>
	);
};

export default PersonalNoteForm;
