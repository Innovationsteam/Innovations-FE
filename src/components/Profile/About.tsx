///////Worked On
import SectionContainer from "../../layouts/SectionContainer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAbout } from "@/hooks/useProfile";
const About = () => {
	const { data } = useAbout();
	return (
		<SectionContainer title="About Me">
			{data ? (
				<p className="font-roboto text-sm text-[#14141499] md:text-lg md:leading-8">{data}</p>
			): (
				<p className="font-roboto text-sm text-[#14141499] md:text-lg md:leading-8">
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton
							key={i}
							style={{ width: "100%", height: "30px", marginBottom: "1%" }}
						/>
					))}
				</p>
			)}
		</SectionContainer>
	);
};

export default About;
