import SectionContainer from "../../layouts/SectionContainer";
import client from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const About = () => {
	const [cookies] = useCookies(["access_token"]);

	const getAbout = async () => {
		const response = await client.get(`/users/me`, {
			headers: {
				Authorization: `Bearer ${cookies?.access_token}`,
				"Content-Type": "application/json",
			},
		});
		const bio = response.data.data.bio;
		return bio;
	};
	const { data } = useQuery({
		queryFn: () => getAbout(),
		queryKey: ["about"],
		staleTime: 100 * 60 * 3,
	});
	return (
		<SectionContainer title="About Me">
			{data ? (
				<p className="font-roboto text-sm text-[#14141499] md:text-lg md:leading-8">{data}</p>
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
