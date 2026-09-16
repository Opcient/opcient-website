export default function IndustrialScreeningPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Exploratory case study</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
        Screening a coupled compressed-air system
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
        An open, reproducible exploration of compressor A and compressor B using public industrial
        data. The aim is to show how software can focus an engineer’s attention without pretending
        that a pattern is already a fault or a saving.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Observed", "Combined demand, duty transfer, simultaneous demand, schedules, transitions, and continuous runs."],
          ["Screened", "Only common strict-quality intervals were used for the operating-pattern comparisons."],
          ["Not claimed", "No confirmed fault, waste, intervention, annual saving, or financial return."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-lg border border-neutral-200 p-6">
            <h2 className="font-semibold text-brand-primary">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
          </div>
        ))}
      </div>

      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">What an engineer would review</h2>
        <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6 text-brand-muted">
          <li>Whether the apparent operating states match the site’s control strategy.</li>
          <li>Whether duty transfer is expected, constrained, or associated with a maintenance issue.</li>
          <li>Whether pressure, airflow, production schedule, and compressor-state data change the interpretation.</li>
          <li>Whether any candidate intervention could preserve output, quality, safety, and reliability.</li>
        </ul>
      </section>

      <p className="mt-12 rounded-lg bg-slate-50 p-6 text-sm leading-6 text-brand-muted">
        This is a technical demonstration using public data. Findings are exploratory and require
        site-specific validation before operational or financial decisions.
      </p>
    </main>
  );
}
