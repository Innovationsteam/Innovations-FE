///////Worked On
import PostList from "@/components/Dashboard/PostList";
import FollowButton from "@/components/FollowButton";
import { useUserConnections } from "@/hooks/follow/useUserConnections";
import { usePostBySlug } from "@/hooks/posts/usePost";
import { convertToOriginalFormat } from "@/utils/helper";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { ModalType, useModalActions } from "src/store/modal";
import AddComment from "../components/Buttons/AddComment";
import DropDown from "../components/Buttons/DropDown";
import { Like } from "../components/Buttons/Like";
import Tag from "../components/Buttons/Tag";
import Container from "../components/Container";
import ArticleSkeleton from "./ArticleSkeleton";

const Article = () => {
	const { openModal } = useModalActions();
	// const { data: posts, isPending: isPostsPending } = useUserPosts(username);

	const { username, slug } = useParams<{ username: string; slug: string }>();

	const { data: post, isPending } = usePostBySlug(username, slug);

	const { data: connectionsData, isPending: isConnectionsPending } = useUserConnections(username!);

	const isFollowing = connectionsData?.following?.some((follower) => follower.username === username) || false;
	const isLiked = post?.postLikes.some((likes) => likes.user.username === username) || false;

	const labels = post?.category.split(/[\s,#]+/).map((tag: string) => tag.replace("#", ""));
	labels?.splice(0, 1);

	if (isPending) return <ArticleSkeleton />;
	if (!post) return <p className="text-center text-lg font-semibold">Post not found</p>;

	return (
		<div>
			<section className="py-10">
				<Container className="max-w-[992px]">
					<Link
						to="/home"
						className="mr-auto flex items-center gap-x-2"
					>
						<img
							className="size-4 object-cover"
							src="/assets/icons/chevron-left.svg"
							alt=""
						/>
						<span className="text-nowrap font-roboto text-sm text-[#525252] sm:text-base">Back to Dashboard</span>
					</Link>
					<header className="mt-4 text-center text-[#141414CC]">
						<p className="mx-auto flex items-center justify-center gap-x-[6px] font-roboto text-sm md:text-base lg:text-lg">
							<span>{post.author.name}</span>
							<span>·</span>
							<span>{new Date(post.publishedDate).toLocaleDateString()}</span>
							<span>·</span>
						</p>
						<h1 className="my-1 font-roboto text-3xl text-[32px] font-bold capitalize text-[#141414] md:text-[42px] md:leading-[52px]">{post.title}</h1>
						{/* <h2 className="font-roboto text-sm md:text-base lg:text-lg">101 ways on how to build your faith</h2> */}
					</header>
					<div className="relative my-10 h-[238px] md:h-[400px]">
						<img
							className="h-full w-full object-cover"
							src={post.image}
							alt=""
						/>
					</div>
					<p
						className="font-roboto text-base leading-7 text-[#141414B2] md:text-lg md:leading-8"
						dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(post.content) }}
					/>
					<div className="my-4 flex flex-wrap justify-center gap-2">
						{labels?.map((text: string) => (
							<Tag
								key={text}
								text={text}
							/>
						))}
					</div>
					<div className="mt-5 flex items-center justify-between">
						<div className="flex items-center gap-x-5">
							<Like
								likes={post.postLikes.length}
								postId={post.id}
								isLiked={isLiked}
							/>
							<AddComment id={post.id} />
						</div>
						<div className="relative flex items-center gap-x-3">
							<button>
								<img
									className="inline-block size-6"
									src="/assets/icons/share.svg"
									alt=""
								/>
							</button>
							<button onClick={() => openModal(ModalType.ADD_TO_READING_LIST, post.id)}>
								<img
									className="inline-block size-6"
									src="/assets/icons/bookmark.svg"
									alt=""
								/>
							</button>
							<DropDown>
								<button
									onClick={() => openModal(ModalType.PersonalNote, { postID: post.id })}
									className="pb-2 font-roboto text-sm text-[#141414CC] transition-colors hover:text-black"
								>
									Add a personal note
								</button>
								<p className="font-roboto text-sm text-[#BF2828]">Report Article</p>
							</DropDown>
						</div>
					</div>
				</Container>
			</section>
			<section className="bg-[#F1F1F1]">
				<Container className="max-w-[992px] py-6">
					<div className="mb-10 flex flex-col">
						<div className="mb-6 flex items-end">
							<img
								className="size-16 object-cover lg:size-20"
								src="/assets/images/avatar.svg"
								alt=""
							/>

							<FollowButton
								className="ml-auto w-fit"
								username={username!}
								isFollowing={isFollowing}
							/>
						</div>
						<span className="mb-2 font-roboto text-2xl font-medium text-[#141414CC]">
							Written by Aghedo Jason
							{/* Written by {writer?.name}{" "} */}
							{/* {isFetching ? (
								<Skeleton
									height={40}
									width={80}
								/>
							) : (
								<></>
							)} */}
						</span>
						<div className="mb-2 flex gap-x-4">
							{isConnectionsPending ? (
								<>
									<Skeleton
										height={20}
										width={70}
									/>
									<Skeleton
										height={20}
										width={70}
									/>
								</>
							) : (
								<>
									<p className="font-roboto text-sm text-[#141414CC]">{connectionsData.followers?.length} followers</p>
									<p className="font-roboto text-sm text-[#141414CC]">{connectionsData.following?.length} following</p>
								</>
							)}
						</div>
						{/* <p className="font-roboto text-[#141414CC]">Gen Z Design Student - Exploring the connections between UX and multiculturalism.</p> */}
					</div>
					<PostList />
				</Container>
			</section>
		</div>
	);
};

export default Article;
