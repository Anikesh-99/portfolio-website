"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm text-fg transition-colors hover:text-amber"
        >
          <span className="text-amber">~</span>/{site.firstName.toLowerCase()}
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          {navLinks.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`font-mono text-[13px] transition-colors ${
                  active ? "text-amber" : "text-muted hover:text-fg"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
