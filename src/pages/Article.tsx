import { ModalType, useModalActions } from "src/store/modal";
import { FollowUser  } from "../components/Buttons";
import AddComment from "../components/Buttons/AddComment";
import DropDown from "../components/Buttons/DropDown";
import { Like } from "../components/Buttons/Like";
import Tag from "../components/Buttons/Tag";
import Container from "../components/Container";
import { Post } from "../components/Post";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import client from "@/libs/axios";
import ArticleSkeleton from "./ArticleSkeleton";
const Article = () => {
    const token = sessionStorage.getItem("myToken");
    const { openModal } = useModalActions();
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state || ""; 
    interface PostItem {
        author: {
            name: string;
        };
        id: string;
        publishedDate: string;
        image: string;
        title: string;
        content: string;
        likes: number;
        views: number;
        category: string;
        socialMediaShares: number;
    }

    const [post, setPost] = useState<PostItem | null>(null); 
	 
    const getPost = useCallback(async () => {
        try {
            const response = await client.get(`/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
			const single = response.data.data
            const postData = {
                author: { name: single.author.name || '' },
                id: single.id,
                publishedDate: single.publishedDate,
                image: single.image,
                title: single.title,
                content: single.content,
                likes: single.likes || 0,
                views: single.views || 0,
                category: single.category,
                socialMediaShares: single.socialMediaShares || 0,
            };

            setPost(postData);
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    }, [id, token]);

    useEffect(() => {
        getPost();
    }, [getPost]);

    if (!post) {
        return <ArticleSkeleton/>; 
    }

    const labels = post.category.split(/[\s,#]+/).map((tag: string) => tag.replace('#', ''));

    return (
        <div>
            <section className="py-10">
                <Container className="max-w-[992px]">
                    <button
                        type="button"
                        onClick={() => navigate("/home")}
                        className="mr-auto flex items-center gap-x-2"
                    >
                        <img
                            className="size-4 object-cover"
                            src="/assets/icons/chevron-left.svg"
                            alt=""
                        />
                        <span className="text-nowrap font-roboto text-sm text-[#525252] sm:text-base">Back to Dashboard</span>
                    </button>
                    <header className="mt-4 text-center text-[#141414CC]">
                        <p className="mx-auto flex items-center justify-center gap-x-[6px] font-roboto text-sm md:text-base lg:text-lg">
                            <span>{post.author.name}</span>
                            <span>·</span>
                            <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                            <span>·</span>
                        </p>
                        <h1 className="my-1 font-roboto text-3xl text-[32px] font-bold capitalize text-[#141414] md:text-[42px] md:leading-[52px]">{post.title}</h1>
                        <h2 className ="font-roboto text-sm md:text-base lg:text-lg">101 ways on how to build your faith</h2>
                    </header>
                    <div className="relative my-10 h-[238px] md:h-[400px]">
                        <img
                            className="h-full w-full object-cover"
                            src={post.image}
                            alt=""
                        />
                    </div>
                    <p className="font-roboto text-base leading-7 text-[#141414B2] md:text-lg md:leading-8" dangerouslySetInnerHTML={{ __html: post.content }} />
                    <div className="my-4 flex flex-wrap justify-center gap-2">
                        {labels.map((text: string) => (
                            <Tag key={text} text={text} />
                        ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-x-5">
                            <Like likes={post.likes} />
                            <AddComment />
                        </div>
                        <div className="relative flex items-center gap-x-3">
                            <button>
                                <img
                                    className="inline-block size-6"
                                    src="/assets/icons/share.svg"
                                    alt=""
                                />
                            </button>
                            <button>
                                <img
                                    className="inline-block size-6"
                                    src="/assets/icons/bookmark.svg"
                                    alt=""
                                />
                            </button>
                            <DropDown>
                                <button
                                    onClick={() => openModal(ModalType.PersonalNote)}
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
                            <FollowUser  className="ml-auto" />
                        </div>
                        <span className="mb-2 font-roboto text-2xl font-medium text-[#141414CC]">Written by {post.author.name}</span>
                        <div className="mb-2 flex gap-x-4">
                            <p className="font-roboto text-sm text-[#141414CC]">136 followers</p>
                            <p className="font-roboto text-sm text-[#141414CC]">136 following</p>
                        </div>
                        <p className="font-roboto text-[#141414CC]">Gen Z Design Student - Exploring the connections between UX and multiculturalism.</p>
                    </div>
                    <ul className="grid gap-6 md:grid-cols-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Post key={i} />
                        ))}
                    </ul>
                </Container>
            </section>
        </div>
    );
};

export default Article;