import "dotenv/config";
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import client from "@/lib/axios";
import { IPost } from "@/types/post.types";

const generateSitemap = async () => {
	const dynamicRoutes = await fetchDynamicRoutes();

	const staticRoutes = [
		{ url: "/", changefreq: "daily", priority: 1 },
		{ url: "/feed", changefreq: "daily", priority: 0.8 },
		{ url: "/stories", changefreq: "weekly", priority: 0.6 },
		{ url: "/stories/new", changefreq: "monthly", priority: 0.5 },
		{ url: "/login", changefreq: "monthly", priority: 0.5 },
		{ url: "/signup", changefreq: "monthly", priority: 0.5 },
		{ url: "/verify", changefreq: "monthly", priority: 0.5 },
		{ url: "/reset-password", changefreq: "monthly", priority: 0.5 },
		{ url: "/forgot-password", changefreq: "monthly", priority: 0.5 },
		{ url: "/change-password", changefreq: "monthly", priority: 0.5 },
		// { url: "/about", changefreq: "monthly", priority: 0.7 },
		// { url: "/blogs", changefreq: "monthly", priority: 0.7 },
		// { url: "/followers", changefreq: "monthly", priority: 0.7 },
		// { url: "/following", changefreq: "monthly", priority: 0.7 },
	];

	const routes = [...staticRoutes, ...dynamicRoutes];

	const sitemapStream = new SitemapStream({
		hostname: "https://www.christianwrites.com",
	});

	routes.forEach((route) => {
		sitemapStream.write(route);
	});

	sitemapStream.end();

	const sitemap = await streamToPromise(sitemapStream);

	fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
	console.log("✅ Sitemap generated successfully!");
};

const fetchDynamicRoutes = async () => {
	try {
		const response = await client.get(`/posts/?page=1&limit=99999999999`);
		return response.data.data.posts.map((article: IPost) => ({
			url: `/article/${article?.author.username}/${article?.slug}`,
			changefreq: "weekly",
			priority: 0.9,
		}));
	} catch (error) {
		console.error("❌ Error fetching dynamic routes:", error);
		return [];
	}
};

generateSitemap();
