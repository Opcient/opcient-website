"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "Framework" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/work-with-us", label: "Partnerships" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Opcient home">
          <span className="text-xl font-semibold tracking-tight text-brand-primary">Opcient</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm pb-1 border-b-2 transition-colors",
                  active
                    ? "text-brand-primary border-brand-primary"
                    : "text-brand-muted border-transparent hover:text-brand-accent hover:border-brand-accent",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded p-2"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6 text-brand-primary"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-neutral-200 bg-white px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "block text-sm py-1 border-l-2 pl-3",
                      active
                        ? "text-brand-primary border-brand-primary"
                        : "text-brand-muted border-transparent hover:text-brand-accent hover:border-brand-accent",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
