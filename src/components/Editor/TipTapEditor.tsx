// import Document from "@tiptap/extension-document";
// import Placeholder from "@tiptap/extension-placeholder";
// import Underline from "@tiptap/extension-underline";
// import { EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import CustomMenu from "./CustomMenu";
// import { cn } from "@/utils/helper";

// const CustomDocument = Document.extend({
// 	content: "heading block*",
// });

// interface Props {
// 	titlePlaceholder: string;
// 	textPlaceholder: string;
// 	className?: string;
// 	setContent: (content: string) => void;
// }

// const TipTapEditor = ({ titlePlaceholder, textPlaceholder, className, setContent }: Props) => {
// 	const editor = useEditor({
// 		extensions: [
// 			CustomDocument,
// 			StarterKit.configure({
// 				document: false,
// 			}),
// 			Underline,
// 			Placeholder.configure({
// 				showOnlyWhenEditable: true,
// 				showOnlyCurrent: true,
// 				placeholder: ({ node }) => {
// 					if (node.type.name === "heading") {
// 						return titlePlaceholder;
// 					}

// 					return textPlaceholder;
// 				},
// 			}),
// 		],
// 		content: ``,
// 		onUpdate: ({ editor }) => setContent(editor.getHTML()),
// 		editorProps: {
// 			attributes: {
// 				class: cn("font-roboto placeholder:text-[#14141466] text-black focus:outline-none prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc prose-h1:text-[30px] prose-p:text-xl", className),
// 				spellcheck: "true",
// 			},
// 		},
// 	});
// 	return (
// 		<>
// 			<CustomMenu editor={editor} />
// 			<EditorContent editor={editor} />
// 		</>
// 	);
// };

// export default TipTapEditor;
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CustomMenu from "./CustomMenu";
import { cn } from "@/utils/helper";

const CustomDocument = Document.extend({
	content: "heading block*",
});

interface Props {
	titlePlaceholder: string;
	textPlaceholder: string;
	className?: string;
	setContent: (content: string) => void;
	initialContent?: string;
}

const TipTapEditor = ({ titlePlaceholder, textPlaceholder, className, setContent, initialContent = "" }: Props) => {
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
						return titlePlaceholder;
					}

					return textPlaceholder;
				},
			}),
		],
		content: initialContent,
		onUpdate: ({ editor }) => setContent(editor.getHTML()),
		editorProps: {
			attributes: {
				class: cn("font-roboto placeholder:text-[#14141466] text-black focus:outline-none prose max-w-none [&_ol]:list-decimal [&_ul]:list-disc prose-h1:text-[30px] prose-p:text-xl", className),
				spellcheck: "true",
			},
		},
	});
	return (
		<>
			<CustomMenu editor={editor} />
			<EditorContent editor={editor} />
		</>
	);
};

export default TipTapEditor;
