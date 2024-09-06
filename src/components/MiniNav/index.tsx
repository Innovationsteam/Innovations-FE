import { NavLink } from "react-router-dom";

export const MiniNav = ({ tabs }: { tabs: string[] }) => {
	return (
		<div className="flex h-full flex-col items-start justify-start gap-y-8 pt-10">
			{tabs?.map((tab) => (
				<NavLink
					key={tab}
					className={({ isActive }) => `font-roboto text-base capitalize leading-[22px] text-[#14141499] lg:text-lg ${isActive && "font-bold text-black"}`}
					to={`${tab === "home" ? "" : tab}`}
					end={tab === "home"}
				>
					{tab.split("-").join(" ")}
				</NavLink>
			))}
		</div>
	);
};

export const MiniNavMobile = ({ tabs }: { tabs: string[] }) => {
	return (
		<div className="relative my-6 block w-full overflow-hidden lg:hidden">
			<div className="flex items-center justify-between overflow-x-auto py-2">
				{tabs?.map((tab) => (
					<NavLink
						key={tab}
						className={({ isActive }) => `flex-shrink-0 px-5 font-roboto text-sm capitalize leading-[22px] text-[activeTab] md:text-base ${isActive && "font-bold"}`}
						to={`${tab === "home" ? "" : tab}`}
						end={tab === "home"}
					>
						{tab.split("-").join(" ")}
					</NavLink>
				))}
			</div>
		</div>
	);
};
