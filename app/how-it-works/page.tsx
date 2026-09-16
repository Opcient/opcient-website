export default function HowItWorksPage() {
  const steps = [
    ["Screen", "Structure the available equipment and energy data, preserve its quality fields, and identify patterns that differ from normal operation."],
    ["Explain", "Return the timestamps, signals, comparisons, and coverage context behind each candidate finding so an engineer can inspect the evidence."],
    ["Review", "Route the finding to a qualified person who can compare it with controls, maintenance, production, pressure, airflow, and site constraints."],
    ["Monitor", "If a change is approved, track the relevant operating behaviour afterwards without assuming that a change automatically produced a saving."],
  ];
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">The workflow</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
        Screening first. Engineering judgement stays in the loop.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
        Opcient is designed as an evidence and triage layer around industrial expertise—not as an
        autonomous fault diagnosis or control system.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {steps.map(([title, text], index) => (
          <div key={title} className="rounded-lg border border-neutral-200 p-7">
            <p className="text-sm font-semibold text-blue-700">0{index + 1}</p>
            <h2 className="mt-3 text-xl font-semibold text-brand-primary">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
