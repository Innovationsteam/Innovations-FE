import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";

const ArticleSkeleton = () => {
    const navigate = useNavigate();

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
                            <Skeleton width={100} />
                            <span>·</span>
                            <Skeleton width={50} />
                            <span>·</span>
                        </p>
                        <h1 className="my-1 font-roboto text-3xl text-[32px] font-bold capitalize text-[#141414] md:text-[42px] md:leading-[52px]">
                            <Skeleton width={300} />
                        </h1>
                        <h2 className="font-roboto text-sm md:text-base lg:text-lg">
                            <Skeleton width={250} />
                        </h2>
                    </header>
                    <div className="relative my-10 h-[238px] md:h-[400px]">
                        <Skeleton className="h-full w-full" />
                    </div>
                    <p className="font-roboto text-base leading-7 text-[#141414B2] md:text-lg md:leading-8">
                        <Skeleton count={5} />
                    </p>
                    <div className="my-4 flex flex-wrap justify-center gap-2">
                        <Skeleton width={80} height={30} />
                        <Skeleton width={80} height={30} />
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-x-5">
                            <Skeleton width={50} height={30} />
                            <Skeleton width={50} height={30} />
                        </div>
                        <div className="relative flex items-center gap-x-3">
                            <Skeleton width={30} height={30} />
                            <Skeleton width={30} height={30} />
                            <Skeleton width={150} height={20} />
                        </div>
                    </div>
                </Container>
            </section>
            <section className="bg-[#F1F1F1]">
                <Container className="max-w-[992px] py-6">
                    <div className="mb-10 flex flex-col">
                        <div className="mb-6 flex items-end">
                            <Skeleton circle={true} height={80} width={80} />
                            <Skeleton width={100} height={30} className="ml-auto" />
                        </div>
                        <span className="mb-2 font-roboto text-2xl font-medium text-[#141414CC]">
                            <Skeleton width={200} />
                        </span>
                        <div className="mb-2 flex gap-x-4">
                            <Skeleton width={100} />
                            <Skeleton width={100} />
                        </div>
                        <p className="font-roboto text-[#141414CC]">
                            <Skeleton count={2} />
                        </p>
                    </div>
                    <ul className="grid gap-6 md:grid-cols-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <li key={i}>
                                <Skeleton height={200} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </div>
    );
};

export default ArticleSkeleton;