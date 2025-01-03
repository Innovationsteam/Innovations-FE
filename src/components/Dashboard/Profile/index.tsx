import { Link } from "react-router-dom";
import { user } from "@/lib/userData";
const Profile = () => {
	return (
		<Link to={`/cw/${user?.username}`}>
			<div className="mb-3 flex items-center gap-x-3 p-3">
				<img
					className="size-10 rounded-full rounded-full"
					src={user?.img || ""}
					alt=""
				/>
				<div className="font-roboto">
					<span className="text-lg font-semibold text-[#141414]">{user?.username}</span>
					<p className="text-sm text-[#14141499]">{user?.name}</p>
				</div>
			</div>
		</Link>
	);
};

export default Profile;
