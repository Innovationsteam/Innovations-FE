import { convertComment, formatDate } from "@/utils/helper";
interface CommentProps {
	content: string;
	createdAt: string;
	username: string;
	profile: string | null;
}
const Comment = ({ content, createdAt, username, profile }: CommentProps) => {
	return (
		<div className="border-b py-4 last:border-none">
			<div className="mb-2 flex items-center gap-x-3">
				<img
					src={profile ?? "/assets/images/profile3.png"}
					alt={`${username}'s profile`}
					className="size-9 rounded-full object-cover"
				/>

				<div className="flex gap-x-2 font-roboto">
					<p className="text-sm font-medium text-[#2A2A2A]">{username}</p>
					<p className="text-sm text-[#5B7083]">{formatDate(createdAt)}</p>
				</div>
				<img
					className="ml-auto"
					src="/assets/icons/ellipsis.svg"
					alt=""
				/>
			</div>
			<p
				className="text-sm leading-6 text-[#14141499]"
				dangerouslySetInnerHTML={{ __html: convertComment(content) }}
			/>
		</div>
	);
};

export default Comment;
