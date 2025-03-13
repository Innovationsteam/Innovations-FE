import { useState } from "react";
import { IPost } from "@/types/post.types";
import { Post } from "@/components/Post";
import PostSkeleton from "../PostList/postskeleton";
import { usePostByHashtag } from "@/hooks/posts/usePost";

const hashtags = [
	{ key: 0, value: "Growth", text: "#Growth" },
	{ key: 1, value: "productivity", text: "#productivity" },
	{ key: 2, value: "spirituality", text: "#spirituality" },
	{ key: 3, value: "Meditation", text: "#Meditation" },
	{ key: 4, value: "Sports", text: "#Sports" },
];
interface SearchInputProps {
	hashtag: string;
	setHashtag: (value: string) => void;
	onSearch: () => void;
}
interface TrendingHashtagsProps {
	hashtags: { key: number; value: string; text: string }[];
	onSelect: (value: string) => void;
}
const SearchInput = ({ hashtag, setHashtag, onSearch }: SearchInputProps) => (
	<div className="my-4 flex gap-x-2 overflow-hidden rounded-xl bg-[#97979714] px-4 py-2 font-roboto lg:w-full">
		<input
			type="text"
			className="w-full bg-transparent text-[#14141499] placeholder:text-[#14141499]"
			value={hashtag}
			onChange={(e) => setHashtag(e.target.value)}
			placeholder="Search"
			autoFocus
		/>
		<button onClick={onSearch}>
			<img
				className="ml-auto size-6 cursor-pointer"
				src="/assets/icons/search.svg"
				alt="search icon"
			/>
		</button>
	</div>
);

const TrendingHashtags = ({ hashtags, onSelect }: TrendingHashtagsProps) => (
	<div className="py-lg-4">
		<h2 className="highlight z-20 w-fit font-roboto text-xl font-medium text-[#141414CC]">Trending Hashtags</h2>
		<ul className="mt-5 flex list-none flex-col gap-y-1 text-[#727272]">
			{hashtags.map((tag) => (
				<p
					className="cursor-pointer text-lg font-medium"
					key={tag.key}
					onClick={() => onSelect(tag.value)}
				>
					{tag.text}
				</p>
			))}
		</ul>
	</div>
);

const SearchBar = () => {
	const [hashtag, setHashtag] = useState("");
	const [fetchPosts, setFetchPosts] = useState(false);
	const { data: postsData, isLoading } = usePostByHashtag(fetchPosts ? hashtag : undefined);

	const handleFetchPosts = () => {
		if (hashtag) {
			setFetchPosts(true);
		}
	};

	const handleSelectHashtag = (value: string) => {
		setHashtag(value);
		setFetchPosts(true);
	};

	return (
		<div className="align-center h-screen w-full flex-row items-start">
			<SearchInput
				hashtag={hashtag}
				setHashtag={setHashtag}
				onSearch={handleFetchPosts}
			/>
			<div className="py-lg-4 py-2">
				{isLoading ? (
					<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
						{Array.from({ length: 4 }).map((_, i) => (
							<PostSkeleton key={i} />
						))}
					</ul>
				) : postsData ? (
					<ul className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
						{postsData.posts.map((item: IPost) => (
							<Post
								key={item.id}
								{...item}
							/>
						))}
					</ul>
				) : (
					<TrendingHashtags
						hashtags={hashtags}
						onSelect={handleSelectHashtag}
					/>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
