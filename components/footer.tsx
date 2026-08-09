import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 font-mono text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-5">
          {/* -my-2/py-2 widen the tap target without moving the layout */}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 py-2 transition-colors hover:text-amber"
          >
            github
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="-my-2 py-2 transition-colors hover:text-amber"
          >
            linkedin
          </a>
          <a
            href={`mailto:${site.email}`}
            className="-my-2 py-2 transition-colors hover:text-amber"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
