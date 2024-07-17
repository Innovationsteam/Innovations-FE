import PageContainer from "../components/PageContainer";
import UploadStory from "../components/UploadStory";

const NewStory = () => {
	return (
		<PageContainer className="flex h-screen items-center justify-center md:bg-[#F5F5F5]">
			<UploadStory />
		</PageContainer>
	);
};

export default NewStory;
