import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";
import { Tab } from "../../pages/Profile";

interface Props {
	tabs: Tab[];
	activeTab: Tab;
	setActiveTab: Dispatch<SetStateAction<Tab>>;
}

export const MiniNav: FC<Props> = ({ tabs, setActiveTab, activeTab }) => {
	return (
		<div className="hidden h-full flex-col items-start justify-start gap-y-8 border-y-0 border-r-[1.5px] pt-10 md:flex">
			{tabs?.map((tab) => (
				<button
					className={classNames("font-roboto leading-[22px] text-[#14141499] lg:text-lg", {
						"font-bold text-black": activeTab === tab,
					})}
					onClick={() => setActiveTab(tab)}
				>
					{tab}
				</button>
			))}
		</div>
	);
};

export const MiniNavMobile: FC<Props> = ({ tabs, setActiveTab, activeTab }) => {
	return (
		<div className="relative my-6 block w-full overflow-hidden  md:hidden">
			<div className="flex items-center justify-between overflow-x-auto py-2">
				{tabs?.map((tab) => (
					<button
						className={classNames("flex-shrink-0 px-5 font-roboto text-sm leading-[22px] text-[activeTab] md:text-lg", {
							"font-bold": activeTab === tab,
						})}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>
		</div>
	);
};
