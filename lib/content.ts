import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  year: number;
  featured: boolean;
  repo?: string;
  demo?: string;
  body: string;
};

function readCollection(collection: "blog" | "projects") {
  const dir = path.join(contentDir, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.mdx$/, ""), data, body: content };
    });
}

export function getPosts(): Post[] {
  return readCollection("blog")
    .map(({ slug, data, body }) => ({
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      tags: (data.tags ?? []) as string[],
      body,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function getProjects(): Project[] {
  return readCollection("projects")
    .map(({ slug, data, body }) => ({
      slug,
      title: data.title as string,
      summary: data.summary as string,
      tech: (data.tech ?? []) as string[],
      year: data.year as number,
      featured: (data.featured ?? false) as boolean,
      repo: data.repo as string | undefined,
      demo: data.demo as string | undefined,
      body,
    }))
    .sort((a, b) => b.year - a.year);
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
