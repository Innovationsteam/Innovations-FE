///////Worked On
import SectionContainer from "../../layouts/SectionContainer";
import { PostItem } from "@/types/post.types";
import { convertToOriginalFormat } from "@/utils/helper";
import DraftSkeleton from "./DraftsSkeleton";
import { useNavigate } from "react-router-dom";
import { useDrafts } from "@/hooks/useProfile";
import { draftSet } from "@/types/post.types";
const DraftsList = () => {
	const { data, isLoading } = useDrafts();

	return (
		<SectionContainer title="Drafts">
			<ul className="mt-4 grid gap-y-7">
				{isLoading ? Array.from({ length: 5 }).map((_, i) => <DraftSkeleton key={i} />) : <></>}
				{data ? data.posts.map((item: PostItem) => <Draft {...item} />) : <></>}
				{data?.posts?.length < 1 ? <p>No Drafts yet</p> : <></>}
			</ul>
		</SectionContainer>
	);
};

export default DraftsList;

const Draft = ({ title, content, image }: draftSet) => {
	const navigate = useNavigate();

	const toEdit = () => {
		navigate("/article/new", {
			state: {
				title: title,
				body: content,
				imageUrl: image,
			},
		});
	};
	return (
		<button className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<div>
					<span className="text-base font-medium leading-5 text-[#141414E5]">{title}</span>
					<p
						className="mt-1 line-clamp-2 max-h-[125px] max-w-[273px] overflow-hidden overflow-ellipsis break-words text-sm leading-6 text-[#14141499]"
						dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(content) }}
					/>
				</div>
				<button
					type="button"
					className="rounded-lg border border-[#22222299] px-3 py-1 font-roboto text-sm text-[#22222299] md:ml-auto md:text-base"
				>
					Delete Draft
				</button>
				<button
					type="button"
					onClick={toEdit}
					className="rounded-lg border border-[#22222299] bg-[#1C4532] px-3 py-1 font-roboto text-sm text-white  md:text-base"
				>
					Edit Draft
				</button>
			</div>
			<div className="relative">
				<div className="absolute top-0 w-full border-b border-[#EBEEF0BF] "></div>
				<div className="absolute top-0 w-full origin-left scale-x-0 border-b border-black bg-black "></div>
			</div>
		</button>
	);
};
