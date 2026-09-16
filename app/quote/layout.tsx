import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Commercial Mover Quote",
  description:
    "Request a commercial mover quote for your business or office relocation in Sydney. Quotes reviewed and issued with formal contracts.",
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
