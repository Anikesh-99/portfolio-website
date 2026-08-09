import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-6 py-32">
      <p className="font-mono text-sm text-amber">404</p>
      <h1 className="display mt-4 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">
        Nothing lives at this route. Head back to the index to find what
        you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="mt-8 font-mono text-[13px] text-amber hover:underline"
      >
        ← back to ~/
      </Link>
    </div>
  );
}
