import DropDown from "../Buttons/DropDown";

const ReadingListItem = () => {
	return (
		<div className="mx-2 w-full max-w-[400px] shrink-0">
			<div className="relative flex h-[190px] w-full justify-start gap-x-2 overflow-hidden rounded-lg">
				<div className="overflow-hidden rounded-lg">
					<img
						className="h-full w-full object-cover"
						src="/assets/images/reading1.png"
						alt=""
					/>
				</div>
				<div className="flex flex-shrink flex-col gap-y-3">
					<img
						className="h-1/2 rounded-lg object-cover"
						src="/assets/images/reading2.png"
						alt=""
					/>
					<img
						className="h-1/2 rounded-lg object-cover"
						src="/assets/images/reading3.png"
						alt=""
					/>
				</div>
				<div className="overflow-hidden rounded-lg">
					<img
						className="h-full w-full object-cover"
						src="/assets/images/reading4.png"
						alt=""
					/>
				</div>
			</div>
			<h3 className="py-2 font-roboto text-base font-medium leading-6 sm:text-lg">How to grow in faith as a Christian</h3>
			<div className="flex items-center gap-x-3">
				<p className="font-roboto text-base text-[#222222CC]">6 Stories</p>
				<div className="ml-auto flex items-center gap-x-3">
					<img
						className="inline-block size-5 lg:size-5"
						src="/assets/icons/bookmark.svg"
						alt=""
					/>
					<DropDown children={[]}></DropDown>
				</div>
			</div>
		</div>
	);
};

export default ReadingListItem;
