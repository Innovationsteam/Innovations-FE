import SectionContainer from "../../layouts/SectionContainer";

const profileInfo = [
	{ property: "Email Address", value: "somtochi@gmail.com" },
	{ property: "User name", value: "Ikeokwu somtochi" },
];

const Settings = () => {
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
