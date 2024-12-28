import { Link } from "react-router-dom";
import { getCookie } from "@/lib/axios";
const Profile = () => {
	const username = getCookie("username")
	return (
		<Link to={`/cw/${username}`}>
			<div className="mb-3 flex items-center gap-x-3 p-3">
				<img
					className="size-10 rounded-full"
					src="/assets/images/profile.png"
					alt=""
				/>
				<div className="font-roboto">
					<span className="text-lg font-semibold text-[#141414]">{username}</span>
					<p className="text-sm text-[#14141499]">Ikeokwu Somtochi Purity</p>
				</div>
			</div>
		</Link>
	);
};

export default Profile;
