export default function MaterialHandlingScreeningPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Case study 03 · material-handling asset A</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
          Standby is not nothing. It is a readiness policy.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          Material-handling asset A shows a different business question: not whether the equipment is
          active, but whether the persistent base load is necessary to keep the operation ready.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          ["75.61%", "standby-base intervals"],
          ["13.83%", "high-activity intervals"],
          ["99.6%", "high activity on weekdays"],
          ["112.5 h", "long standby-base run"],
        ].map(([value, label]) => (
          <div key={label} className="border border-neutral-200 p-5">
            <p className="text-2xl font-semibold tabular-nums text-brand-primary">{value}</p>
            <p className="mt-2 text-xs leading-5 text-brand-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Time share versus energy share</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-muted">
            The asset spends most intervals in a low standby-base band, while short high-activity
            periods account for most observed energy. That split changes the business question from
            whether it is on to what readiness the standby state buys.
          </p>
          <div className="mt-7 grid gap-5">
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-amber-700">Time in standby-base</span>
                <span className="text-brand-primary">75.61%</span>
              </div>
              <div className="mt-1 h-4 bg-neutral-200"><div className="h-4 bg-amber-500" style={{ width: "75.61%" }} /></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-red-700">Energy in high activity</span>
                <span className="text-brand-primary">about 70%</span>
              </div>
              <div className="mt-1 h-4 bg-neutral-200"><div className="h-4 bg-red-600" style={{ width: "69.64%" }} /></div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-emerald-700">Off or idle intervals</span>
                <span className="text-brand-primary">5.61%</span>
              </div>
              <div className="mt-1 h-4 bg-neutral-200"><div className="h-4 bg-emerald-600" style={{ width: "5.61%" }} /></div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-blue-700 pl-6">
          <h2 className="text-2xl font-semibold text-brand-primary">Opcient hypothesis</h2>
          <p className="mt-4 text-sm leading-6 text-brand-muted">
            The persistent base load may power controls, drives, sensors, hydraulics, safety systems,
            network hardware, or another readiness layer. It may be necessary. It may also be a policy
            choice worth reviewing.
          </p>
          <p className="mt-5 text-sm font-semibold leading-6 text-brand-primary">
            The commercial question is whether deeper idle is safe, practical, and worth the restart
            or reliability tradeoff.
          </p>
        </div>
      </section>

      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Opcient questions for the business</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "What does the roughly 0.39-0.50 kW standby band power?",
            "Is standby required for safety, fast restart, controls health, or production readiness?",
            "Can the asset enter a deeper idle mode over weekends or long non-production windows?",
            "What is the restart penalty in time, reliability, quality, or operator intervention?",
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
          The analysis uses the processed public release by Flynn, Murphy, Walsh and Riordan:
          <a className="ml-1 font-semibold text-blue-700 hover:text-blue-900" href="https://doi.org/10.5281/zenodo.19180972" target="_blank" rel="noreferrer">Zenodo v1.0, DOI 10.5281/zenodo.19180972</a>,
          associated Data paper DOI 10.3390/data11050101, CC BY 4.0. The public data does not confirm
          machine function, throughput, restart constraints, safety requirements, fault, waste, or savings.
        </p>
      </section>
    </main>
  );
}
