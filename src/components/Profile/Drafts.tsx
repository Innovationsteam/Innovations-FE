import client from "@/lib/axios";
import { PostItem, convertToOriginalFormat } from "@/utils/originalFormat";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import SectionContainer from "../../layouts/SectionContainer";
import DraftSkeleton from "./DraftsSkeleton";
import { useCookies } from "react-cookie";

type draftSet = {
	id: string;
	title: string;
	content: string;
	image: string;
};
const DraftsList = () => {
	const [cookies] = useCookies(["access_token"]);

	const getDrafts = async () => {
		const response = await client.get(`/posts/me/?status=draft`, {
			headers: {
				Authorization: `Bearer ${cookies?.access_token}`,
				"Content-Type": "application/json",
			},
		});
		const drafts = response.data.data.posts;
		return drafts;
	};
	const { data } = useQuery({
		queryFn: () => getDrafts(),
		queryKey: ["drafts"],
		staleTime: 100 * 60 * 5,
	});
	return (
		<SectionContainer title="Drafts">
			<ul className="mt-4 grid gap-y-7">
				{data
					? data.map((item: PostItem, i: number) => (
							<Draft
								key={i}
								id={item.id}
								title={item.title}
								content={item.content}
								image={item.image}
							/>
						))
					: Array.from({ length: 5 }).map((_, i) => <DraftSkeleton key={i} />)}
			</ul>
		</SectionContainer>
	);
};

export default DraftsList;

const Draft = (props: draftSet) => {
	const navigate = useNavigate();

	const toEdit = () => {
		navigate("/article/new", {
			state: {
				title: props.title,
				body: props.content,
				imageUrl: props.image,
			},
		});
	};
	return (
		<button className="group block w-full text-start">
			<div className="flex items-start gap-x-2 pb-2 font-roboto sm:gap-x-5">
				<div>
					<span className="text-base font-medium leading-5 text-[#141414E5]">{props.title}</span>
					<p
						className="mt-1 line-clamp-2 max-h-[125px] max-w-[273px] overflow-hidden overflow-ellipsis break-words text-sm leading-6 text-[#14141499]"
						dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(props.content) }}
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
