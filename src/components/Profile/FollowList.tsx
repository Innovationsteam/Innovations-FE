import { useUserConnections } from "@/hooks/follow/useUserConnections";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import SectionContainer from "../../layouts/SectionContainer";
import Follower from "../Follower";
import FollowerSkeleton from "../Skeletons/FollowerSkeleton";

interface Props {
	type: "followers" | "following";
}

export const FollowList = ({ type = "followers" }: Props) => {
	const { username } = useParams();
	const { data: connectionsData, isPending } = useUserConnections(username!);

	const connections = connectionsData?.[type] ?? [];
	return (
		<SectionContainer title={type}>
			<ul className="mt-4 grid gap-y-7">
				{isPending ? (
					<>
						<FollowerSkeleton />
						<FollowerSkeleton />
					</>
				) : connections && connections.length > 0 ? (
					connections?.map((items) => <Follower {...items} />)
				) : (
					<p>No followers</p>
				)}
			</ul>
		</SectionContainer>
	);
};
