import Link from "next/link";

// Section eyebrows are the actual route — navigation vocabulary === site structure.
export function SectionLabel({
  route,
  link = true,
  heading = false,
}: {
  route: string;
  link?: boolean;
  heading?: boolean;
}) {
  const label = <span className="font-mono text-sm text-amber">{route}</span>;
  const inner = link ? (
    <Link
      href={route}
      className="-my-2 inline-block py-2 transition-opacity hover:opacity-75"
    >
      {label}
    </Link>
  ) : (
    label
  );
  return (
    <div className="flex items-center gap-4">
      {heading ? <h2>{inner}</h2> : inner}
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
