import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Compliance",
  description:
    "Fully insured commercial movers services in Sydney. Public liability and goods in transit insurance available.",
};

export default function InsurancePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-semibold text-brand-primary md:text-3xl">
        Insurance & Compliance
      </h1>

      <p className="mt-3 text-sm text-brand-muted md:text-base">
        Our operations are supported by appropriate insurance and compliance arrangements in
        accordance with industry and NSW requirements. Coverage is subject to policy terms,
        conditions, and the specific scope of each job.
      </p>

      <div className="mt-10 space-y-6">
        <div className="rounded border border-neutral-200 p-4">
          <h2 className="text-base font-medium text-brand-primary">Public Liability Insurance</h2>
          <p className="mt-2 text-sm text-brand-muted">Coverage up to $5 million per occurrence.</p>
        </div>

        <div className="rounded border border-neutral-200 p-4">
          <h2 className="text-base font-medium text-brand-primary">Goods in Transit Insurance</h2>
          <p className="mt-2 text-sm text-brand-muted">Coverage up to $100,000 per load.</p>
        </div>

        <div className="rounded border border-neutral-200 p-4">
          <h2 className="text-base font-medium text-brand-primary">Workers Compensation</h2>
          <p className="mt-2 text-sm text-brand-muted">Compliant with NSW requirements.</p>
        </div>
      </div>

      <p className="mt-8 text-xs text-neutral-500">
        Coverage is subject to policy terms, conditions, and exclusions.
      </p>
    </main>
  );
}
