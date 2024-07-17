const SearchBar = () => {
	return (
		<div className="max-w-[244px] gap-x-2 overflow-hidden rounded-xl font-roboto lg:flex lg:bg-[#97979714] lg:px-4 lg:py-2">
			<input
				type="text"
				className="hidden w-full bg-transparent text-[#14141499] placeholder:text-[#14141499] lg:block"
				placeholder="Search"
			/>
			<img
				className="ml-auto size-6"
				src="/assets/icons/search.svg"
				alt="search icon"
			/>
		</div>
	);
};

export default SearchBar;
