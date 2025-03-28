import SectionContainer from "../../layouts/SectionContainer";
import { useAllNotes } from "@/hooks/posts/useAllNotes";
import { INotes, NoteProps } from "@/types/notes.types";
import { convertComment } from "@/lib/utils";
import DraftSkeleton from "./DraftsSkeleton";
import { Link } from "react-router-dom";
const NotesList = () => {
	const { data: notes, isLoading } = useAllNotes();
	return (
		<SectionContainer title="Notes">
			<ul className="mt-4 grid gap-y-7">
				{notes?.map(({ title, content, post }: INotes) => (
					<Note
						title={title}
						content={content}
						post={post}
					/>
				))}
				{isLoading ? Array.from({ length: 3 }).map((_, i) => <DraftSkeleton key={i} />) : <></>}
			</ul>
		</SectionContainer>
	);
};

export default NotesList;

const Note = ({ title, content, post }: NoteProps) => {
	return (
		<button className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<div>
					<span
						className="text-base font-medium leading-5 text-[#141414E5]"
						dangerouslySetInnerHTML={{ __html: convertComment(title) }}
					/>
					<p
						className="mt-1 line-clamp-3 max-w-[273px] text-xs text-[#14141499]"
						dangerouslySetInnerHTML={{ __html: convertComment(content) }}
					/>
				</div>
				<button
					type="button"
					className="rounded-lg border border-[#22222299] px-3 py-1 font-roboto text-sm text-[#22222299] md:ml-auto md:text-base"
				>
					Delete Note
				</button>
				<Link
					to={`/cw/${post?.author?.username}/${post?.slug}`}
					type="button"
					className="rounded-lg border border-[#22222299] bg-[#1C4532] px-3 py-1 font-roboto text-sm text-white  md:text-base"
				>
					Edit Note
				</Link>
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black "></div>
			</div>
		</button>
	);
};
