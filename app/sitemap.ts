import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/blog", "/resume"].map((route) => ({
    url: `${site.url}${route}`,
  }));

  const projectRoutes = getProjects().map(({ slug }) => ({
    url: `${site.url}/projects/${slug}`,
  }));

  const postRoutes = getPosts().map(({ slug, date }) => ({
    url: `${site.url}/blog/${slug}`,
    lastModified: date,
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
