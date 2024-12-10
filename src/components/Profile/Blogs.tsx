import SectionContainer from "../../layouts/SectionContainer";
import { Post } from "../Post";

const Blogs = ({ title }: { title: string }) => {
	return (
		<SectionContainer title={title}>
			<ol className="grid h-full gap-x-5 gap-y-9 lg:grid-cols-2">
				{Array.from({ length: 10 }).map((_, i) => (
					<Post key={i} />
				))}
			</ol>
		</SectionContainer>
	);
};

export default Blogs;
