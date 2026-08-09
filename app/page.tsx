import Link from "next/link";
import { site } from "@/lib/site";
import { getPosts, getProjects } from "@/lib/content";
import { SectionLabel } from "@/components/section-label";
import { ProjectRow } from "@/components/project-row";
import { PostRow } from "@/components/post-row";

export default function Home() {
  const featured = getProjects().filter((p) => p.featured);
  const posts = getPosts().slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="pt-24 pb-20 sm:pt-36 sm:pb-28">
        <p
          className="reveal font-mono text-sm text-amber"
          style={{ ["--reveal-order" as string]: 0 }}
        >
          {site.role.toLowerCase()} · open to interesting problems
        </p>
        <h1
          className="display reveal mt-5 text-5xl font-bold sm:text-7xl"
          style={{ ["--reveal-order" as string]: 1 }}
        >
          <span className="cursor-block">{site.name}</span>
        </h1>
        <p
          className="reveal mt-7 max-w-xl text-lg leading-relaxed text-muted"
          style={{ ["--reveal-order" as string]: 2 }}
        >
          {site.tagline}
        </p>
      </section>

      <section className="pb-20">
        <SectionLabel route="/projects" />
        <div className="mt-2">
          {featured.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-5 inline-block font-mono text-[13px] text-muted transition-colors hover:text-amber"
        >
          all projects →
        </Link>
      </section>

      <section className="pb-24">
        <SectionLabel route="/blog" />
        <div className="mt-2">
          {posts.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-5 inline-block font-mono text-[13px] text-muted transition-colors hover:text-amber"
        >
          all posts →
        </Link>
      </section>
    </div>
  );
}
