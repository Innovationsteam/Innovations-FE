///////Worked On
import { useUserProfile } from "@/hooks/useUserProfile";
import SectionContainer from "../../layouts/SectionContainer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";

const About = () => {
	const { username } = useParams();
	const { data: userData } = useUserProfile(username);

	return (
		<SectionContainer title="About Me">
			{userData ? (
				<p className="font-roboto text-sm text-[#14141499] md:text-lg md:leading-8">{userData.bio}</p>
			) : (
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
