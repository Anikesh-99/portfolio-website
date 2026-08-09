import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { education, experience, skills } from "@/lib/resume";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Experience, education, and skills of ${site.name}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <SectionLabel route="/resume" link={false} />
      <h1 className="display mt-6 text-3xl font-bold sm:text-4xl">Resume</h1>
      <p className="mt-3 text-muted">
        {site.role} ·{" "}
        <a href={`mailto:${site.email}`} className="text-amber hover:underline">
          {site.email}
        </a>
      </p>

      <section className="mt-12">
        <h2 className="font-mono text-sm text-amber">experience</h2>
        <div className="mt-4 space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}-${job.role}`}
              className="grid gap-2 border-b border-line pb-8 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <div className="font-mono text-[13px] text-muted">
                {job.period}
              </div>
              <div>
                <h3 className="font-medium">
                  {job.role}{" "}
                  <span className="text-muted">· {job.company}</span>
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-amber-dim">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-sm text-amber">education</h2>
        <div className="mt-4 space-y-6">
          {education.map((entry) => (
            <div
              key={entry.school}
              className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <div className="font-mono text-[13px] text-muted">
                {entry.period}
              </div>
              <div>
                <h3 className="font-medium">{entry.school}</h3>
                <p className="mt-1 text-sm text-muted">{entry.degree}</p>
                {entry.points?.map((point) => (
                  <p key={point} className="mt-1 text-sm text-muted">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-sm text-amber">skills</h2>
        <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-[10rem_1fr]">
          {skills.map((row) => (
            <div key={row.label} className="contents">
              <div className="font-mono text-[13px] text-muted">
                {row.label}
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line px-2 py-1 text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
