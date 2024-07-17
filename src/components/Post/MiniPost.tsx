import { Link } from "react-router-dom";

interface MiniPostProps {
	image: string;
}

export const MiniPost = ({ image }: MiniPostProps) => {
	return (
		<Link to="/article">
			<li className="font-roboto">
				<div className="mb-1 flex items-center gap-x-2">
					<img
						src={image}
						alt=""
					/>
					<div className="flex gap-x-2">
						<span className="text-[#141414E5]">Jason</span>
						<span className="text-[#5B7083]">·</span>
						<span className="text-[#5B7083]">20 min</span>
					</div>
				</div>
				<div>
					<span className="font-semibold text-[#141414CC]">Mental Illness Has a Face</span>
					<p className="max-w-[273px] text-xs leading-5 text-[#14141499]">The large door labeled "Mental Health" stood at the end of the hallway. Maybe...</p>
				</div>
			</li>
		</Link>
	);
};
