import Link from "next/link";

const caseStudies = [
  {
    href: "/industrial-screening",
    label: "Study 01",
    type: "Coupled system",
    title: "Compressed-air system: Compressor A + Compressor B",
    insight: "A single compressor dropping near zero does not prove a system saving.",
    metric: "-0.767",
    metricLabel: "approx. demand correlation",
    businessQuestion: "Is duty transferring between machines before anyone claims an efficiency win?",
    validation: "Pressure, airflow, states, controls, service constraints",
  },
  {
    href: "/extraction-screening",
    label: "Study 02",
    type: "Schedule shape",
    title: "Industrial extraction asset A",
    insight: "The strongest signal is when the asset runs, not a standalone claim of waste.",
    metric: "5.411 kW",
    metricLabel: "daytime mean vs 0.219 kW overnight",
    businessQuestion: "Is the operating schedule aligned with the service the asset provides?",
    validation: "Extraction requirement, controls, meter boundary, operating schedule",
  },
  {
    href: "/material-handling-screening",
    label: "Study 03",
    type: "Context test",
    title: "Material-handling asset A",
    insight: "More history improves the screen, but it does not replace machine knowledge.",
    metric: "35,104",
    metricLabel: "expected quarter-hour intervals",
    businessQuestion: "Does a longer history change the priority for engineer review?",
    validation: "Machine role, production relationship, controls, maintenance context",
  },
];

const operatingBoundaries = [
  ["System relationship", "Compressor A + B", "Asset interaction changes the reading"],
  ["Operating schedule", "Extraction asset A", "Time pattern focuses the review"],
  ["Equipment context", "Material-handling asset A", "History still needs site knowledge"],
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Industrial software for efficiency work
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Opcient
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              We build software workflows that screen industrial operating data, explain the evidence,
              and hand candidate efficiency opportunities to qualified engineers for validation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/case-studies" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-blue-100">
                View the evidence
              </Link>
              <Link href="/work-with-us" className="rounded-md border border-neutral-500 px-6 py-3 text-sm font-semibold text-white hover:border-blue-300 hover:text-blue-200">
                Partner with us
              </Link>
            </div>
          </div>

          <div className="border border-neutral-700 bg-neutral-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              Current method
            </p>
            <div className="mt-5 grid gap-4">
              {[
                ["01", "Screen", "Find operating patterns and keep missing data visible."],
                ["02", "Explain", "Show source, quality, assumptions, limits, and comparisons."],
                ["03", "Validate", "Route the evidence to engineers before action or savings claims."],
              ].map(([number, title, text]) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-neutral-700 pt-4 first:border-t-0 first:pt-0">
                  <p className="font-mono text-sm text-blue-300">{number}</p>
                  <div>
                    <h2 className="font-semibold text-white">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Cross-study insight</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">
              The value is not ranking meters. It is knowing which question deserves engineer time.
            </h2>
            <p className="mt-4 text-sm leading-6 text-brand-muted">
              These public-data studies show three different business risks: treating an interacting
              system as isolated assets, mistaking a schedule pattern for a proven saving, and assuming
              a longer history explains the machine by itself.
            </p>
          </div>

          <div className="border border-neutral-200 bg-slate-50 p-5">
            <div className="grid gap-3">
              {operatingBoundaries.map(([boundary, asset, meaning], index) => (
                <div key={boundary} className="grid gap-3 bg-white p-4 md:grid-cols-[11rem_1fr] md:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">{boundary}</p>
                    <p className="mt-1 text-sm font-semibold text-brand-primary">{asset}</p>
                  </div>
                  <div>
                    <div className="h-2 bg-neutral-200">
                      <div
                        className={["h-full bg-blue-700", index === 0 ? "w-[86%]" : index === 1 ? "w-[68%]" : "w-[74%]"].join(" ")}
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-brand-muted">{meaning}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-brand-muted">
              The bars are communication markers for the kind of evidence each study contributes, not
              a cross-asset performance score. Raw kW values are not comparable across unknown machine
              functions and meter boundaries.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Case evidence</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">
                Three studies, three business lessons.
              </h2>
            </div>
            <Link href="/case-studies" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
              Open case-study overview
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.href} href={study.href} className="group border border-neutral-200 p-6 transition hover:border-blue-700 hover:bg-blue-50/40">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{study.label}</p>
                  <p className="text-xs font-semibold text-brand-muted">{study.type}</p>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-brand-primary">{study.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{study.insight}</p>
                <div className="mt-5 border-t border-neutral-200 pt-4">
                  <p className="text-3xl font-semibold tabular-nums text-brand-primary">{study.metric}</p>
                  <p className="mt-1 text-xs leading-5 text-brand-muted">{study.metricLabel}</p>
                </div>
                <p className="mt-5 text-sm font-semibold leading-6 text-brand-primary">{study.businessQuestion}</p>
                <p className="mt-3 text-xs leading-5 text-brand-muted">Validation needed: {study.validation}.</p>
                <span className="mt-5 inline-block text-sm font-semibold text-blue-700 group-hover:text-blue-900">
                  View detailed study
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">What Opcient brings</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">
              A software partner for teams that already understand the plant.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-brand-muted">
              We do not replace industrial engineers, controls specialists, maintenance teams, or site
              safety judgement. We build the data layer that makes their review faster, clearer, and
              easier to defend.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Decision support", "Candidate patterns are packaged with the evidence and limitation behind them."],
              ["Reproducibility", "Source, quality rules, denominator choices, and assumptions stay visible."],
              ["Post-change monitoring", "Approved interventions can be monitored without pretending correlation is proof."],
            ].map(([title, text]) => (
              <div key={title} className="border-l-4 border-blue-700 pl-5">
                <h3 className="font-semibold text-brand-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <p className="text-xs leading-5 text-brand-muted">
            Public analyses use the processed release by Flynn, Murphy, Walsh and Riordan, Zenodo v1.0,
            DOI 10.5281/zenodo.19180972, associated Data paper DOI 10.3390/data11050101, CC BY 4.0.
            The website and reproducible project work are maintained in the{" "}
            <a className="font-semibold text-blue-700 hover:text-blue-900" href="https://github.com/Opcient" target="_blank" rel="noreferrer">
              Opcient GitHub organisation
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}
