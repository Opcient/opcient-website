import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Opcient" },
  { href: "/work-with-us", label: "Work With Us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      {/* Top footer content */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-10 text-sm md:grid-cols-2">
          {/* Company */}
          <div>
            <h3 className="mb-4 font-medium text-brand-primary">Company</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-muted hover:text-brand-primary">
                    {item.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link href="/how-it-works" className="text-brand-muted hover:text-brand-primary">
                  How Our Process Works
                </Link>
              </li>

              <li>
                <Link href="/work-with-us" className="text-brand-muted hover:text-brand-primary">
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-medium text-brand-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-brand-muted hover:text-brand-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-brand-muted hover:text-brand-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-brand-muted hover:text-brand-primary">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-brand-muted md:px-6">
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} Opcient</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
