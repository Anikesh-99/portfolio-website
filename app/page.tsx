import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getPosts, getProjects, getTravelPhotos } from "@/lib/content";
import { experience } from "@/lib/resume";
import { SectionLabel } from "@/components/section-label";
import { ProjectRow } from "@/components/project-row";
import { PostRow } from "@/components/post-row";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  const featured = getProjects().filter((p) => p.featured);
  const posts = getPosts().slice(0, 3);
  const travel = getTravelPhotos();

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="pt-24 pb-24 sm:pt-36 sm:pb-32">
        {/* 11.25 ≈ width in em of the surname + cursor at wdth 125; keeps the
            nameplate filling the container without overflow at any viewport */}
        <h1
          className="display reveal text-[clamp(1.5rem,calc((100vw-3rem)/11.25),5.4rem)] leading-[0.95] font-bold"
          style={{ ["--reveal-order" as string]: 0 }}
        >
          {site.firstName}{" "}
          <br />
          <span className="cursor-block whitespace-nowrap">
            {site.name.replace(`${site.firstName} `, "")}
          </span>
        </h1>
        <p
          className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted"
          style={{ ["--reveal-order" as string]: 1 }}
        >
          {site.tagline}
        </p>
        <div
          className="reveal mt-12 flex items-center gap-4"
          style={{ ["--reveal-order" as string]: 2 }}
        >
          <p className="font-mono text-sm text-amber">{site.status}</p>
          <div className="hidden h-px flex-1 bg-line sm:block" />
        </div>
      </section>

      <ScrollReveal>
        <section className="pb-20">
          <SectionLabel route="/projects" heading />
          <div className="mt-2">
            {featured.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
          <Link
            href="/projects"
            className="-mb-2 mt-3 inline-block py-2 font-mono text-[13px] text-muted transition-colors hover:text-amber"
          >
            all projects →
          </Link>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pb-20">
          <SectionLabel route="/blog" heading />
          <div className="mt-2">
            {posts.map((post) => (
              <PostRow key={post.slug} post={post} />
            ))}
          </div>
          <Link
            href="/blog"
            className="-mb-2 mt-3 inline-block py-2 font-mono text-[13px] text-muted transition-colors hover:text-amber"
          >
            all posts →
          </Link>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pb-20">
          <SectionLabel route="/resume" heading />
          <div className="mt-2">
            {experience.slice(0, 3).map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="shrink-0 font-mono text-[13px] text-muted sm:w-40">
                  {job.period}
                </span>
                <span>
                  <span className="font-medium text-fg">{job.role}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {job.company}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/resume"
            className="-mb-2 mt-3 inline-block py-2 font-mono text-[13px] text-muted transition-colors hover:text-amber"
          >
            full resume →
          </Link>
        </section>
      </ScrollReveal>

      {travel.length > 0 && (
        <ScrollReveal>
          <section className="pb-24">
            <SectionLabel route="# travel" link={false} heading />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
              {travel.map((photo) => (
                <figure key={photo.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 font-mono text-[13px] text-muted">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}
    </div>
  );
}
