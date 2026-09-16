const steps = [
  {
    title: "Screen",
    outcome: "Candidate operating patterns",
    text: "Structure interval data, preserve quality fields, keep missing windows visible, and identify patterns that deserve review.",
  },
  {
    title: "Explain",
    outcome: "Operational hypothesis",
    text: "Show what the pattern could mean operationally: control intent, schedule alignment, standby readiness, or data gap.",
  },
  {
    title: "Validate",
    outcome: "Engineering decision",
    text: "Qualified engineers and operators compare the hypothesis with controls, output, pressure, flow, safety, and service constraints.",
  },
  {
    title: "Monitor",
    outcome: "Post-change visibility",
    text: "If a change is approved, track output-preserving behaviour afterwards before translating the result into a savings claim.",
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
            Opcient screens equipment data, forms a plausible operating hypothesis, and defines the
            validation needed before changing anything that may protect output.
          </p>
        </div>
        <div className="border border-neutral-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-brand-primary">Operating rule</p>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            A useful result can be a candidate opportunity, a rejected hypothesis, or proof that a
            pattern is intentional. All three are better than acting on an unsupported dashboard.
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
            <li>Changing a control pattern that exists for reliability, safety, or service continuity.</li>
            <li>Calling scheduled operation waste before checking production, service, controls, or safety.</li>
            <li>Dropping missing intervals from the denominator and overstating data confidence.</li>
            <li>Turning exploratory correlations into annual savings or payback claims.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What a partner receives</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-muted">
            <li>Data acceptance notes with missing intervals and quality rules explicit.</li>
            <li>Operational hypotheses tied to evidence, not generic anomaly labels.</li>
            <li>Validation questions for engineering, operations, maintenance, and business owners.</li>
            <li>Monitoring logic only after an approved output-preserving change.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
