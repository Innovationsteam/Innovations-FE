import { useUserStore } from "@/store/user";
import { useCookies } from "react-cookie";
import SectionContainer from "../../layouts/SectionContainer";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const Settings = () => {
	const { user, setUser } = useUserStore();
	const profileInfo = [
		{ property: "Email Address", value: user?.email },
		{ property: "User name", value: user?.username },
	];
	const [, , removeCookie] = useCookies(["access_token"]);

	const navigate = useNavigate();

	const handleLogout = () => {
		removeCookie("access_token");
		setUser(null);
		navigate("/feed");
	};

	return (
		<SectionContainer title="Settings">
			<div className="mb-10 flex flex-col gap-y-5 font-roboto">
				{profileInfo.map(({ property, value }) => (
					<div className="flex justify-between gap-y-5">
						<p className="text-[#141414CC] lg:text-lg">{property}</p>
						<span className="text-[#14141499]">{value}</span>
					</div>
				))}
				<Button
					className="w-fit p-0 text-[#FF0000CC] lg:text-lg"
					variant="link"
					onClick={handleLogout}
				>
					Logout
				</Button>
				<button
					type="button"
					className="text-start text-[#FF0000CC] lg:text-lg"
				>
					Delete account
				</button>
			</div>
		</SectionContainer>
	);
};

export default Settings;
