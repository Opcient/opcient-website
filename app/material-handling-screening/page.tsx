export default function MaterialHandlingScreeningPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Case study 03 · material-handling asset A</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
        More history gives more context—but not automatic understanding.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
        The source dataset labels this asset `mh_a` as `Automation_Handling`. That is a useful clue,
        not a complete equipment description. We use the longer history to screen operating patterns
        while keeping the missing machine context visible.
      </p>

      <section className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          ["98.351%", "recorded-span coverage"],
          ["99.887%", "strict pass rate of recorded intervals"],
          ["2.930 kW", "daytime mean demand"],
          ["0.469 kW", "overnight mean demand"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-lg border border-neutral-200 p-5">
            <p className="text-2xl font-semibold tabular-nums text-brand-primary">{value}</p>
            <p className="mt-2 text-xs leading-5 text-brand-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What the screening says</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-brand-muted">
            <li><span className="font-semibold text-brand-primary">Expected span:</span> 35,104 quarter-hour intervals.</li>
            <li><span className="font-semibold text-brand-primary">Observed:</span> 34,525 intervals, with 579 missing intervals retained in the denominator.</li>
            <li><span className="font-semibold text-brand-primary">Quality:</span> 34,486 strict intervals, using all three phases and at least 891 reliable seconds per phase.</li>
            <li><span className="font-semibold text-brand-primary">Shape:</span> weekday and daytime demand is higher than weekend and overnight demand.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What the screening cannot say</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-brand-muted">
            <li>It does not identify the machine’s exact function or useful output.</li>
            <li>It does not establish that low-load periods are waste or that high-load periods are necessary.</li>
            <li>It does not establish a fault, intervention, annual saving, or return on investment.</li>
          </ul>
        </div>
      </section>

      <section className="mt-14 rounded-lg bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-brand-primary">Business relevance</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-brand-muted">
          For a business, the immediate value is prioritisation: the screening identifies a machine
          history worth discussing with operations and engineering, and it makes the information gap
          explicit before anyone spends money on an intervention or promises a saving.
        </p>
      </section>

      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Source and validation</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-brand-muted">
          The analysis uses the processed public release by Flynn, Murphy, Walsh and Riordan:
          <a className="ml-1 font-semibold text-blue-700 hover:text-blue-900" href="https://doi.org/10.5281/zenodo.19180972" target="_blank" rel="noreferrer">Zenodo v1.0, DOI 10.5281/zenodo.19180972</a>,
          associated Data paper DOI 10.3390/data11050101, CC BY 4.0. Site validation would require the
          machine function, process relationship, controls, schedule, meter boundary, and maintenance context.
        </p>
      </section>
    </main>
  );
}
