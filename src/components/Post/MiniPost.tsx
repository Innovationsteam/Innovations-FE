import { convertToOriginalFormat } from "@/lib/utils";
import { Link } from "react-router-dom";
interface MiniPostProps {
	image: string;
	content: string;
	author: {
		name: string;
		profileImg: string;
		username: string;
	};
	slug: string;
	id: string;
	title: string;
}

export const MiniPost = ({ content, title, author, slug }: MiniPostProps) => {
	return (
		<Link
			to={`/cw/${author?.username}/${slug}`}
			className="font-roboto"
		>
			{/* <div className="mb-1 flex items-center gap-x-2">
					<img
						src={image}
						alt=""
					/>
					<div className="flex gap-x-2">
						<span className="text-[#141414E5]">Jason</span> 
						<span className="text-[#5B7083]">·</span>
						<span className="text-[#5B7083]">20 min</span>
					</div>
				</div> */}
			<div>
				<span
					className="font-semibold text-[#141414CC]"
					dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(title) }}
				/>

				<p
					className="line-clamp-4 max-w-[273px] text-xs leading-5 text-[#14141499]"
					dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(content) }}
				/>
			</div>
		</Link>
	);
};
