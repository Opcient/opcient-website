export default function IndustrialScreeningPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Exploratory case study</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
        Screening a coupled compressed-air system: Compressor A + Compressor B
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
        The source dataset contains electrical measurements for two compressor assets. We analyse them
        together because duty can transfer between them: a change in one compressor does not necessarily
        represent a change in total compressed-air-system demand.
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
      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Where this data came from</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-brand-muted">
          This is an exploratory analysis of the processed public release by Flynn, Murphy, Walsh and
          Riordan: Zenodo v1.0, DOI <a className="font-semibold text-blue-700 hover:text-blue-900" href="https://doi.org/10.5281/zenodo.19180972" target="_blank" rel="noreferrer">10.5281/zenodo.19180972</a>,
          associated Data paper DOI 10.3390/data11050101, CC BY 4.0. We use the supplied processed
          interval records and quality fields. Original sensor readings, pressure, airflow, production,
          control-state, and service data are not included, so this study cannot establish a saving.
        </p>
      </section>
      <p className="mt-8 text-sm text-brand-muted">
        Next comparison: <a className="font-semibold text-blue-700 hover:text-blue-900" href="/extraction-screening">screening an extraction asset →</a>
      </p>
    </main>
  );
}
