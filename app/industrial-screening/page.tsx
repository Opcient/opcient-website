export default function IndustrialScreeningPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Case study 01 · compressed-air system</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
          A compressor pattern can be a reliability strategy, not an efficiency problem.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          Compressor A and Compressor B show why energy work must start with control intent. The data
          suggests long lead-lag duty campaigns and rare simultaneous running. That pattern may protect
          air supply, balance wear, or support maintenance rotation.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          ["92.19%", "A-only or B-only duty"],
          ["1.97%", "both above threshold"],
          ["527 h", "longest A-only run"],
          ["486 h", "longest B-only run"],
        ].map(([value, label]) => (
          <div key={label} className="border border-neutral-200 p-5">
            <p className="text-2xl font-semibold tabular-nums text-brand-primary">{value}</p>
            <p className="mt-2 text-xs leading-5 text-brand-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Operating-state evidence</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-muted">
            Most strict-quality intervals show one compressor carrying the load. Both compressors
            running above threshold is uncommon and short-lived, which makes it the review point rather
            than proof of waste.
          </p>
          <div className="mt-7 grid gap-4">
            {[
              ["A-only", "43.86%", "#059669", "43.86%"],
              ["B-only", "48.33%", "#059669", "48.33%"],
              ["Both above", "1.97%", "#dc2626", "1.97%"],
              ["Both near zero", "5.84%", "#64748b", "5.84%"],
            ].map(([label, value, colour, width]) => (
              <div key={label}>
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-brand-primary">{label}</span>
                  <span className="tabular-nums text-brand-muted">{value}</span>
                </div>
                <div className="mt-1 h-3 bg-neutral-200">
                  <div className="h-3" style={{ width, backgroundColor: colour }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-l-4 border-blue-700 pl-6">
          <h2 className="text-2xl font-semibold text-brand-primary">Opcient hypothesis</h2>
          <p className="mt-4 text-sm leading-6 text-brand-muted">
            The compressor pair may be operating under intentional lead-lag control. Before anyone
            proposes an energy intervention, the business question is whether this alternation protects
            production continuity, pressure stability, equipment life, or maintenance access.
          </p>
          <p className="mt-5 text-sm font-semibold leading-6 text-brand-primary">
            The key review target is not the alternation itself. It is the short both-running periods:
            peak demand, transition overlap, pressure recovery, or avoidable sequencing?
          </p>
        </div>
      </section>

      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Opcient questions for the business</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Is lead-lag rotation scheduled by calendar, runtime hours, pressure state, fault state, or maintenance plan?",
            "Do both-running periods coincide with shift start, peak production, pressure recovery, or compressor transition?",
            "Would reducing simultaneous running risk pressure stability or production continuity?",
            "Are late-December near-zero periods holiday shutdowns, service gaps, or missing operational context?",
          ].map((question) => (
            <p key={question} className="border-l-4 border-neutral-300 pl-4 text-sm leading-6 text-brand-muted">
              {question}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Source and limits</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-brand-muted">
          This analysis uses the processed public release by Flynn, Murphy, Walsh and Riordan:
          Zenodo v1.0, DOI <a className="font-semibold text-blue-700 hover:text-blue-900" href="https://doi.org/10.5281/zenodo.19180972" target="_blank" rel="noreferrer">10.5281/zenodo.19180972</a>,
          associated Data paper DOI 10.3390/data11050101, CC BY 4.0. Electrical demand alone cannot
          confirm air output, pressure, compressor state, control logic, useful output, waste, or savings.
        </p>
      </section>
    </main>
  );
}
