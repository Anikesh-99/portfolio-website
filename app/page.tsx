import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getPosts, getProjects, getTravelPhotos } from "@/lib/content";
import { experience } from "@/lib/resume";
import { measured } from "@/lib/measured";
import { SectionLabel } from "@/components/section-label";
import { ProjectRow } from "@/components/project-row";
import { PostRow } from "@/components/post-row";
import { ScrollReveal } from "@/components/scroll-reveal";

const order = (n: number) => ({ ["--reveal-order" as string]: n });

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
          style={order(0)}
        >
          {site.firstName}{" "}
          <br />
          <span className="cursor-block whitespace-nowrap">
            {site.name.replace(`${site.firstName} `, "")}
          </span>
        </h1>
        <p
          className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted"
          style={order(1)}
        >
          {site.tagline}
        </p>
        <div className="reveal mt-12" style={order(2)}>
          <div className="flex items-center gap-4">
            <p className="font-mono text-sm text-amber">{site.status}</p>
            <div className="hidden h-px flex-1 bg-line sm:block" />
          </div>
          <p className="mt-3 font-mono text-sm text-muted">{site.seeking}</p>
        </div>
      </section>

      <ScrollReveal>
        <section className="pb-20">
          <div className="sr" style={order(0)}>
            <SectionLabel route="# measured" link={false} heading />
          </div>
          <div className="sr mt-6 rounded-lg border border-line bg-raised/60 px-5 py-2 font-mono text-sm sm:px-6" style={order(1)}>
            {measured.map((m) => (
              <Link
                key={m.label}
                href={m.href}
                className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="flex gap-4 sm:w-52 sm:shrink-0">
                  <span className="text-amber">ok</span>
                  <span className="text-fg transition-colors group-hover:text-amber">
                    {m.label}
                  </span>
                </span>
                <span className="pl-9 text-amber sm:pl-0">{m.value}</span>
                <span className="pl-9 text-[13px] text-muted sm:ml-auto sm:pl-0 sm:text-right">
                  {m.note}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pb-20">
          <div className="sr" style={order(0)}>
            <SectionLabel route="/projects" heading />
          </div>
          <div className="mt-2">
            {featured.map((project, i) => (
              <div key={project.slug} className="sr" style={order(i + 1)}>
                <ProjectRow project={project} />
              </div>
            ))}
          </div>
          <Link
            href="/projects"
            className="sr -mb-2 mt-3 inline-block py-2 font-mono text-[13px] text-muted transition-colors hover:text-amber"
            style={order(featured.length + 1)}
          >
            all projects →
          </Link>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pb-20">
          <div className="sr" style={order(0)}>
            <SectionLabel route="/blog" heading />
          </div>
          <div className="mt-2">
            {posts.map((post, i) => (
              <div key={post.slug} className="sr" style={order(i + 1)}>
                <PostRow post={post} />
              </div>
            ))}
          </div>
          <Link
            href="/blog"
            className="sr -mb-2 mt-3 inline-block py-2 font-mono text-[13px] text-muted transition-colors hover:text-amber"
            style={order(posts.length + 1)}
          >
            all posts →
          </Link>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="pb-20">
          <div className="sr" style={order(0)}>
            <SectionLabel route="/resume" heading />
          </div>
          <div className="mt-2">
            {experience.slice(0, 3).map((job, i) => (
              <div
                key={`${job.company}-${job.role}`}
                className="sr flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-6"
                style={order(i + 1)}
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
            className="sr -mb-2 mt-3 inline-block py-2 font-mono text-[13px] text-muted transition-colors hover:text-amber"
            style={order(4)}
          >
            full resume →
          </Link>
        </section>
      </ScrollReveal>

      {travel.length > 0 && (
        <ScrollReveal>
          <section className="pb-24">
            <div className="sr" style={order(0)}>
              <SectionLabel route="# travel" link={false} heading />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
              {travel.map((photo, i) => (
                <figure key={photo.src} className="sr" style={order(i + 1)}>
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
