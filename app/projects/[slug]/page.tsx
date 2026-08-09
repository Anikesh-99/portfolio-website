import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getProjects } from "@/lib/content";
import { Mdx } from "@/components/mdx";

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="font-mono text-sm text-amber">
        /projects/{project.slug} · {project.year}
      </p>
      <h1 className="display mt-4 text-3xl font-bold sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        {project.summary}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-line px-2 py-1 text-muted"
          >
            {t}
          </span>
        ))}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-amber hover:underline"
          >
            source ↗
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:underline"
          >
            demo ↗
          </a>
        )}
      </div>
      <hr className="my-10 border-line" />
      <Mdx source={project.body} />
      <div className="mt-14 border-t border-line pt-6">
        <Link
          href="/projects"
          className="font-mono text-[13px] text-muted transition-colors hover:text-amber"
        >
          ← all projects
        </Link>
      </div>
    </article>
  );
}
