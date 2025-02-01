import client from "@/lib/axios";
import { IResponse } from "@/types/auth.types";
import { IPost } from "@/types/post.types";
const { createSitemap } = require("sitemap");
const fs = require("fs");
import { PostsResponse } from "./queries/post.queries";
const generateSitemap = async () => {
	const dynamicRoutes = await fetchDynamicRoutes();

	const staticRoutes = [
		{ url: "/", changefreq: "daily", priority: 1.0 },
		{ url: "/about", changefreq: "monthly", priority: 0.7 },
		{ url: "/blogs", changefreq: "monthly", priority: 0.7 },
		{ url: "/followers", changefreq: "monthly", priority: 0.7 },
		{ url: "/following", changefreq: "monthly", priority: 0.7 },
		{ url: "/feed", changefreq: "daily", priority: 0.8 },
		{ url: "/stories", changefreq: "weekly", priority: 0.6 },
		{ url: "/stories/new", changefreq: "monthly", priority: 0.5 },
		{ url: "/login", changefreq: "monthly", priority: 0.5 },
		{ url: "/signup", changefreq: "monthly", priority: 0.5 },
		{ url: "/verify", changefreq: "monthly", priority: 0.5 },
		{ url: "/reset-password", changefreq: "monthly", priority: 0.5 },
		{ url: "/forgot-password", changefreq: "monthly", priority: 0.5 },
		{ url: "/change-password", changefreq: "monthly", priority: 0.5 },
	];

	const routes = [...staticRoutes, ...dynamicRoutes];

	const sitemap = createSitemap({
		hostname: "https://www.christianwrites.com",
		cacheTime: 600000,
		urls: routes,
	});

	fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
	console.log("Sitemap generated successfully!");
};

const fetchDynamicRoutes = async () => {
	try {
		const response = await client.get<IResponse<PostsResponse>>(`/posts/?page=${1}`);
		return response.data.data.posts.map((article: IPost) => ({
			url: `/article/${article.id}`,
			changefreq: "weekly",
			priority: 0.8,
		}));
	} catch (error) {
		console.error("Error fetching dynamic routes:", error);
		return [];
	}
};

generateSitemap();
