import type { Metadata } from "next";
import { getProjects } from "@/lib/content";
import { SectionLabel } from "@/components/section-label";
import { ProjectRow } from "@/components/project-row";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built: agents, evals, backtests, and research tools.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionLabel route="/projects" link={false} />
      <h1 className="display mt-6 text-3xl font-bold sm:text-4xl">Projects</h1>
      <p className="mt-3 max-w-lg text-muted">
        Things I&apos;ve built and shipped. Each one links to a short case
        study.
      </p>
      <div className="mt-10">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
