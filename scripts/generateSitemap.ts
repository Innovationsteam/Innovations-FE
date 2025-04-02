import "dotenv/config";
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import client from "@/lib/axios";
// import { IPost } from "@/types/post.types";

const escapeXml = (unsafe:string) =>
  unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });

const generateSitemap = async () => {
  const dynamicRoutes = await fetchDynamicRoutes();

  const staticRoutes = [
    { url: "/", changefreq: "daily", priority: 1 },
    { url: "/feed", changefreq: "daily", priority: 0.8 },
    { url: "/stories", changefreq: "weekly", priority: 0.6 },
    { url: "/stories/new", changefreq: "monthly", priority: 0.5 },
    // Removed login, signup, and password-related pages
  ];

  const routes = [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: escapeXml(route.url),
    changefreq: route.changefreq,
    priority: route.priority,
  }));

  const sitemapStream = new SitemapStream({
    hostname: "https://www.christianwrites.com",
  });

  routes.forEach((route) => sitemapStream.write(route));

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then((data) =>
    data.toString().replace(/<script.*?>.*?<\/script>/gi, "")
  );

  fs.writeFileSync("./public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated successfully!");
};

const fetchDynamicRoutes = async () => {
  let posts = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await client.get(`/posts/?page=${page}&limit=1000`);
      const newPosts = response.data.data.posts;
      posts.push(...newPosts);
      hasMore = newPosts.length === 1000; // Stop fetching if less than 1000
      page++;
    } catch (error) {
      console.error("❌ Error fetching dynamic routes:", error);
      hasMore = false;
    }
  }

  return posts.map((article) => ({
    url: `/cw/${article?.author.username}/${article?.slug}`,
    changefreq: "weekly",
    priority: 0.9,
  }));
};

generateSitemap();
