import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Industrial software and data workflows
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-primary md:text-6xl">
          Make operations more efficient without losing the output that matters.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
          Opcient helps industrial engineering teams screen equipment data for unusual operating
          behaviour, investigate candidate efficiency opportunities, and monitor what changes after
          an intervention.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/how-it-works" className="rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            See how it works
          </Link>
          <Link href="/work-with-us" className="rounded-md border border-neutral-300 px-6 py-3 text-sm font-semibold text-brand-primary hover:border-blue-700 hover:text-blue-700">
            Work with Opcient
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          ["Screen", "Find unusual equipment and energy patterns worth an engineer’s attention."],
          ["Explain", "Show the time, signals, comparisons, and data-quality context behind each finding."],
          ["Validate", "Keep qualified engineers in the decision loop before calling something a fault, waste, or saving."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-lg border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold text-brand-primary">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-lg bg-slate-50 p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">First case study</p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-primary">Screening a coupled compressed-air system</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-muted">
          A public-data exploration of compressor A and compressor B, focused on operating patterns,
          duty transfer, data quality, and what would need to be validated on site before estimating
          savings.
        </p>
        <Link href="/industrial-screening" className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900">
          Read the exploratory case study →
        </Link>
      </section>
    </main>
  );
}
