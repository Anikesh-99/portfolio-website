import Link from "next/link";

// Section eyebrows are the actual route — navigation vocabulary === site structure.
export function SectionLabel({
  route,
  link = true,
}: {
  route: string;
  link?: boolean;
}) {
  const label = <span className="font-mono text-sm text-amber">{route}</span>;
  return (
    <div className="flex items-center gap-4">
      {link ? (
        <Link href={route} className="transition-opacity hover:opacity-75">
          {label}
        </Link>
      ) : (
        label
      )}
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
