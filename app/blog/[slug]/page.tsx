import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate, getPost, getPosts } from "@/lib/content";
import { Mdx } from "@/components/mdx";

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="font-mono text-sm text-amber">
        /blog/{post.slug}
      </p>
      <h1 className="display mt-4 text-3xl font-bold sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[13px] text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {post.tags.map((tag) => (
          <span key={tag} className="rounded border border-line px-1.5 py-0.5 text-xs">
            {tag}
          </span>
        ))}
      </div>
      <hr className="my-10 border-line" />
      <Mdx source={post.body} />
      <div className="mt-14 border-t border-line pt-6">
        <Link
          href="/blog"
          className="font-mono text-[13px] text-muted transition-colors hover:text-amber"
        >
          ← all posts
        </Link>
      </div>
    </article>
  );
}
