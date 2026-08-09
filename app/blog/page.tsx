import type { Metadata } from "next";
import { getPosts } from "@/lib/content";
import { SectionLabel } from "@/components/section-label";
import { PostRow } from "@/components/post-row";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software, debugging, and tools.",
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionLabel route="/blog" link={false} />
      <h1 className="display mt-6 text-3xl font-bold sm:text-4xl">Blog</h1>
      <p className="mt-3 max-w-lg text-muted">
        Notes on software, debugging, and the tools in between.
      </p>
      <div className="mt-10">
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
