import Link from "next/link";

const studies = [
  {
    href: "/industrial-screening",
    number: "01",
    title: "Compressed-air system: Compressor A + Compressor B",
    perspective: "Control-intent hypothesis",
    observed: "A-only and B-only states dominate the record, while both-above periods are only 1.97%.",
    decision: "Treat the alternation as possible lead-lag control or resilience before proposing energy changes.",
    limitation: "Validate pressure, airflow, compressor state, controls, production, and maintenance context.",
  },
  {
    href: "/extraction-screening",
    number: "02",
    title: "Industrial extraction asset A",
    perspective: "Schedule-alignment hypothesis",
    observed: "About 69.65% of strict intervals are off-or-idle and 29.24% are full-service.",
    decision: "Ask whether runtime matches production, safety, air-quality, or extraction service needs.",
    limitation: "Validate the exact extraction service, control mode, permitted shutdown windows, and meter boundary.",
  },
  {
    href: "/material-handling-screening",
    number: "03",
    title: "Material-handling asset A",
    perspective: "Standby-readiness hypothesis",
    observed: "About 75.61% of strict intervals are standby-base, while high activity is only 13.83%.",
    decision: "Determine whether persistent readiness load is operationally necessary outside work windows.",
    limitation: "Validate what the base load powers, restart penalty, safety constraints, and process dependency.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Case studies</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
          Public-data studies that turn meter patterns into business hypotheses.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          Each study keeps the same discipline: identify the pattern, infer plausible operational
          intent, expose the risk of misreading it, and define what a qualified team must validate
          before action.
        </p>
      </section>

      <section className="mt-12 overflow-hidden border border-neutral-200">
        <div className="grid bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted md:grid-cols-[0.7fr_1.4fr_1.5fr_1.4fr]">
          <p>Study</p>
          <p>Pattern</p>
          <p>Business hypothesis</p>
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
            They prove the method can convert public industrial data into operational hypotheses and
            validation questions. They do not prove site savings, faults, or approved interventions.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Pattern", "What changed in the equipment data?"],
            ["Intent", "What might the pattern be protecting?"],
            ["Decision", "What must be validated before action?"],
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
