import { Post } from "../../Post";

const list = Array.from({ length: 5 });

const PostList = () => {
	return (
		<section>
			<ul className="mt-10 grid h-full gap-y-4">
				{list.map((_, i) => (
					<Post key={i} />
				))}
			</ul>
		</section>
	);
};

export default PostList;
