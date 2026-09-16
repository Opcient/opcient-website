import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Work with Sydney Movers. Contractor and employment opportunities for commercial relocation projects.",
};

export default function WorkWithUsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-semibold text-brand-primary md:text-3xl">Work With Us</h1>

      <p className="mt-4 text-sm text-brand-muted">
        We work with experienced contractors and professionals for commercial relocation projects
        across Sydney.
      </p>

      <p className="mt-2 text-sm text-brand-muted">
        A dedicated application form will be available shortly.
      </p>
    </main>
  );
}
