import Link from "next/link";
import type { Post } from "@/lib/content";
import { formatDate } from "@/lib/content";

export function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-1 border-b border-line py-5 transition-colors hover:bg-raised/60 sm:flex-row sm:items-baseline sm:gap-6"
    >
      <span className="shrink-0 font-mono text-[13px] text-muted sm:w-28">
        {formatDate(post.date)}
      </span>
      <span>
        <span className="font-medium text-fg transition-colors group-hover:text-amber">
          {post.title}
        </span>
        <span className="mt-1 block max-w-lg text-sm leading-relaxed text-muted">
          {post.summary}
        </span>
      </span>
    </Link>
  );
}
