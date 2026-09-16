import Link from "next/link";

const studies = [
  {
    href: "/industrial-screening",
    number: "01",
    title: "Compressed-air system: Compressor A + Compressor B",
    perspective: "Coupled-system perspective",
    observed: "Approximate demand correlation of -0.767 suggests the compressors should be read as one system.",
    decision: "Prevents a weak conclusion where one machine appears to reduce demand while duty may simply move to another.",
    limitation: "No pressure, airflow, state, control, production, or service data in the public release.",
  },
  {
    href: "/extraction-screening",
    number: "02",
    title: "Industrial extraction asset A",
    perspective: "Schedule perspective",
    observed: "Daytime mean demand is 5.411 kW versus 0.219 kW overnight under the current screen.",
    decision: "Focuses engineer review on operating schedule, controls, and whether service demand matches runtime.",
    limitation: "The exact extraction service, equipment boundary, and control arrangement are not confirmed.",
  },
  {
    href: "/material-handling-screening",
    number: "03",
    title: "Material-handling asset A",
    perspective: "Context perspective",
    observed: "Longer fact span with 35,104 expected quarter-hour intervals and 98.351% recorded-span coverage.",
    decision: "Shows how longer history can support prioritisation without pretending it explains the machine function.",
    limitation: "The public category is broad; useful output and process relationship need site validation.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Case studies</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
          Public evidence studies for industrial efficiency review.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          These studies are not sales claims. They demonstrate how Opcient turns equipment interval
          data into reviewable business questions: what was observed, what it could mean, what it does
          not prove, and what an engineer would need next.
        </p>
      </section>

      <section className="mt-12 overflow-hidden border border-neutral-200">
        <div className="grid bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted md:grid-cols-[0.7fr_1.4fr_1.5fr_1.4fr]">
          <p>Study</p>
          <p>Observed signal</p>
          <p>Business decision supported</p>
          <p>Validation boundary</p>
        </div>
        {studies.map((study) => (
          <Link
            key={study.href}
            href={study.href}
            className="grid gap-4 border-t border-neutral-200 px-5 py-6 transition hover:bg-blue-50/50 md:grid-cols-[0.7fr_1.4fr_1.5fr_1.4fr]"
          >
            <div>
              <p className="font-mono text-sm text-blue-700">{study.number}</p>
              <h2 className="mt-2 font-semibold leading-6 text-brand-primary">{study.title}</h2>
              <p className="mt-2 text-xs font-semibold text-brand-muted">{study.perspective}</p>
            </div>
            <p className="text-sm leading-6 text-brand-muted">{study.observed}</p>
            <p className="text-sm leading-6 text-brand-muted">{study.decision}</p>
            <p className="text-sm leading-6 text-brand-muted">{study.limitation}</p>
          </Link>
        ))}
      </section>

      <section className="mt-14 grid gap-8 border-t border-neutral-200 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What these studies prove</h2>
          <p className="mt-4 text-sm leading-6 text-brand-muted">
            They prove the method can screen public industrial data, preserve quality context, and
            produce specific review questions. They do not prove site savings or validated faults.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Screen", "Find candidate operating patterns."],
            ["Explain", "Show numbers, source, denominator, and limits."],
            ["Validate", "Let qualified professionals decide action."],
          ].map(([title, text]) => (
            <div key={title} className="border-l-4 border-blue-700 pl-4">
              <h3 className="font-semibold text-brand-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
