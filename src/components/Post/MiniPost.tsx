import {  useNavigate } from "react-router-dom";
import {convertToOriginalFormat} from "@/hooks/originalFormat";

interface MiniPostProps {
	image: string;
	content: string; 
	// author: string; 
	id:string
	title:string
}

export const MiniPost = ({  content, title,id }: MiniPostProps) => {
	const navigate = useNavigate()
	const toArticle=()=>{
		navigate("/article",{
			state:id
		})
	}
	return (
		<div onClick={toArticle}>
			<li className="font-roboto">
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
					<span className="font-semibold text-[#141414CC]">{title}</span>
					<p className="max-w-[273px] text-xs leading-5 text-[#14141499]"
						dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(content) }}
					/>
				</div>
			</li>
		</div>
	);
};