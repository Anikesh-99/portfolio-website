import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

// Vesper: amber-on-dark syntax theme, matches the site accent
const prettyCodeOptions = {
  theme: "vesper",
  keepBackground: false,
};

export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose text-fg/90">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          },
        }}
      />
    </div>
  );
}
