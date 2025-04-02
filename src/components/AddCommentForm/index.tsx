///////Worked On
import { useAddComment } from "@/hooks/posts/useAddComment";
import { useUserAvatar } from "@/hooks/useUserAvatar";
import { useUser } from "@/store/user";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const content = ``;

interface Props {
	postId: string;
}

const AddCommentForm = ({ postId }: Props) => {
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

	const user = useUser();
	const { mutate: addComment, isPending } = useAddComment();
	const { data: userAvatar } = useUserAvatar(user?.username ?? "default User");

	const handleSubmit = () => {
		const content = (editor as Editor).getHTML();
		addComment({ content, postId }, { onSettled: () => (editor as Editor).commands.clearContent() });
	};

	return (
		<div className="rounded-lg md:p-5 md:shadow-[0px_4px_8px_0px_#0a3a6426]">
			<div className="mb-5 flex items-center gap-x-2 md:gap-x-3">
				<img
					className="size-8 rounded-full object-cover"
					src={user?.profileImg ?? userAvatar}
					alt="user profile picture"
				/>
				<span className="font-roboto text-[15px] font-medium text-[#222222CC] md:text-base">{user?.username}</span>
			</div>
			<EditorContent editor={editor} />
			<div className="flex items-center">
				<div className="flex gap-x-2">
					<button
						onClick={() => editor?.chain().focus().toggleBold().run()}
						className={cn("size-[35px] rounded-lg font-playwrite text-sm font-bold text-[#6B6B6B] hover:bg-[#f2f2f2]", {
							"bg-[#e8f3e8] text-[#1a8917] hover:bg-[#e8f3e8]": editor?.isActive("bold"),
						})}
					>
						B
					</button>
					<button
						onClick={() => editor?.chain().focus().toggleItalic().run()}
						className={cn("size-[35px] rounded-lg font-playwrite text-sm font-bold text-[#6B6B6B] hover:bg-[#f2f2f2]", {
							"bg-[#e8f3e8] text-[#1a8917] hover:bg-[#e8f3e8]": editor?.isActive("italic"),
						})}
					>
						I
					</button>
				</div>
				<Button
					onClick={handleSubmit}
					disabled={isPending}
					className="ml-auto w-fit"
				>
					Comment
				</Button>
			</div>
		</div>
	);
};

export default AddCommentForm;
