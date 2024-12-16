import { IPost } from "./post.types";
export 	type userData = {
    name: string;
    followersCount: number;
    followingCount: number;
    blogs?: IPost[]
}
