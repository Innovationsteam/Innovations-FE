import SectionContainer from "../../layouts/SectionContainer";
import { useUserStore } from "@/store/user";

const Settings = () => {
	const user = useUserStore((s) => s.user);
	const profileInfo = [
		{ property: "Email Address", value: user?.email },
		{ property: "User name", value: user?.username },
	];
	return (
		<SectionContainer title="Settings">
			<div className="mb-10 flex flex-col gap-y-5 font-roboto">
				{profileInfo.map(({ property, value }) => (
					<div className="flex justify-between gap-y-5">
						<p className="text-[#141414CC] lg:text-lg">{property}</p>
						<span className="text-[#14141499]">{value}</span>
					</div>
				))}
				<button
					type="button"
					className="text-start text-[#FF0000CC] lg:text-lg"
				>
					Delete account
				</button>
				<button
					type="button"
					className="text-start text-[#FF0000CC] lg:text-lg"
				>
					Logout
				</button>
			</div>
		</SectionContainer>
	);
};

export default Settings;
