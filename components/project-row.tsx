import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-line py-5 transition-colors hover:bg-raised/60 sm:grid-cols-[auto_1fr_auto]"
    >
      <span className="hidden font-mono text-[13px] text-muted sm:block sm:w-14">
        {project.year}
      </span>
      <span>
        <span className="font-medium text-fg transition-colors group-hover:text-amber">
          {project.title}
        </span>
        <span className="mt-1 block max-w-lg text-sm leading-relaxed text-muted">
          {project.summary}
        </span>
      </span>
      {/* Measured results outrank tech badges — a metric replaces them */}
      {project.metric ? (
        <span className="hidden shrink-0 font-mono text-[13px] text-amber sm:block">
          {project.metric}
        </span>
      ) : (
        <span className="hidden gap-2 font-mono text-xs text-muted sm:flex">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="rounded border border-line px-1.5 py-0.5">
              {t}
            </span>
          ))}
        </span>
      )}
    </Link>
  );
}
