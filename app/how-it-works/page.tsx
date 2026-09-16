const steps = [
  {
    title: "Screen",
    outcome: "Candidate operating patterns",
    text: "Structure interval data, preserve quality fields, keep missing windows in the denominator, and identify patterns worth review.",
  },
  {
    title: "Explain",
    outcome: "Reviewable evidence",
    text: "Show timestamps, comparisons, source data, assumptions, and limits so the pattern can be challenged by people who know the plant.",
  },
  {
    title: "Validate",
    outcome: "Engineering decision",
    text: "Qualified engineers and operators compare the evidence with pressure, flow, controls, production, maintenance, and service constraints.",
  },
  {
    title: "Monitor",
    outcome: "Post-change visibility",
    text: "If a change is approved, track the relevant operating behaviour afterwards without claiming savings the evidence cannot support.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Framework</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
            Screen {"->"} Explain {"->"} Validate.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
            Opcient is an evidence workflow around industrial expertise. The software narrows the
            search; the engineering team keeps responsibility for meaning, safety, output, and action.
          </p>
        </div>
        <div className="border border-neutral-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-brand-primary">Operating rule</p>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            A useful finding can be a validated opportunity, a rejected hypothesis, or a clear data
            gap. All three save time compared with acting on unsupported dashboards.
          </p>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="border border-neutral-200 p-6">
            <p className="font-mono text-sm text-blue-700">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 text-xl font-semibold text-brand-primary">{step.title}</h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{step.outcome}</p>
            <p className="mt-4 text-sm leading-6 text-brand-muted">{step.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 border-t border-neutral-200 pt-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What the workflow is built to prevent</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-muted">
            <li>Ranking high energy users without knowing whether the meter boundary is comparable.</li>
            <li>Calling an operating pattern waste before checking production, service, controls, or safety.</li>
            <li>Dropping missing intervals from the denominator and overstating data confidence.</li>
            <li>Turning exploratory correlations into annual savings or payback claims.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What a partner receives</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-muted">
            <li>Clean data acceptance notes and reproducible analysis logic.</li>
            <li>Evidence summaries that separate observation, hypothesis, limitation, and next validation.</li>
            <li>Business-facing outputs that engineering, operations, and management can discuss together.</li>
            <li>A base for dashboards or monitoring once the engineering decision is made.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
