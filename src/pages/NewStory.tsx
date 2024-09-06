import PageContainer from "../components/PageContainer";
import UploadStory from "../components/UploadStory";

const NewStory = () => {
	return (
		<PageContainer className="flex h-screen items-center justify-center md:bg-[#F5F5F5]">
			<div className="w-full max-w-[693px] bg-white p-6 md:rounded-xl md:shadow-lg">
				<div className="mb-4 flex items-center">
					<div>
						<h1 className="font-roboto text-lg font-medium tracking-[-0.2px] text-[#0B0B0B]">Media Upload</h1>
						<p className="font-roboto text-sm text-[#6D6D6D]">Add your images here.</p>
					</div>
					<img
						className="ml-auto h-6 w-6 object-cover"
						src="/assets/icons/delete.svg"
						alt=""
					/>
				</div>
				<UploadStory />
			</div>
		</PageContainer>
	);
};

export default NewStory;
