import Container from "../components/Container";
import TipTapEditor from "../components/Editor/TipTapEditor";

const CreateArticle = () => {
	return (
		<Container className="!max-w-6xl">
			<header className="mt-10 flex justify-end gap-x-2">
				<button
					type="button"
					className="rounded-lg px-4 py-2 font-roboto text-lg text-[#14141499] focus:bg-[#D9D9D952] focus:text-black"
				>
					Save as Draft
				</button>
				<button
					type="button"
					className="rounded-lg px-4 py-2 font-roboto text-lg text-[#14141499] focus:bg-[#D9D9D952] focus:text-black"
				>
					Preview
				</button>
				<button
					type="button"
					className="rounded-lg px-4 py-2 font-roboto text-lg text-[#14141499] focus:bg-[#D9D9D952] focus:text-black"
				>
					Publish
				</button>
			</header>
			<div className="relative my-6 h-[238px] md:h-[400px]">
				<img
					className="h-full w-full object-cover"
					src="/assets/images/post-img.png"
					alt=""
				/>
			</div>
			<section className="min-h-[100vh] py-10">
				<TipTapEditor
					titlePlaceholder={"What’s the title?"}
					textPlaceholder={"Type your article here or click the plus icon for more options"}
				/>
			</section>
		</Container>
	);
};

export default CreateArticle;
