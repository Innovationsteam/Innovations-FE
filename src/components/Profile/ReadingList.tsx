import { ModalType } from "@/store/modal";
import SectionContainer from "../../layouts/SectionContainer";
import ReadingListItem from "../Post/ReadingList";

const ReadingList = () => {
	return (
		<SectionContainer
			title="Reading List"
			showIcon
			modal={ModalType.CREATE_READING_LIST}
		>
			<ul className="mt-4 grid h-full gap-x-6 gap-y-10 lg:grid-cols-2">
				{Array.from({ length: 2 }).map((_, i) => (
					<ReadingListItem key={i} />
				))}
			</ul>
		</SectionContainer>
	);
};

export default ReadingList;
