const weekday = [0, 0, 0, 0, 0, 0, 6.1, 7.6, 7.8, 7.8, 7.9, 8.4, 8.6, 8.6, 8.5, 8.5, 5.4, .9, .5, .6, .6, .7, .9, .9];
const weekend = [.2, .2, .2, .2, .2, .2, .3, .4, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .4, .3];

function linePoints(values: number[]) {
  return values.map((value, index) => `${index * 20},${96 - value * 9}`).join(" ");
}

export default function ExtractionScreeningPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Case study 02 · industrial extraction asset A</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
        A screening workflow should reveal the operating shape before it suggests a decision.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
        The dataset labels this asset `ex_a`. Its category is recorded as HVAC_AirExtraction, which
        suggests an extraction or fan-driven system, but the exact equipment, service, meter boundary,
        and control arrangement are not supplied. That uncertainty is part of the result—not something
        to hide.
      </p>

      <section className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          ["98.662%", "recorded-span coverage"],
          ["99.863%", "strict pass rate of recorded intervals"],
          ["5.411 kW", "daytime mean demand"],
          ["0.219 kW", "overnight mean demand"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-lg border border-neutral-200 p-5">
            <p className="text-2xl font-semibold tabular-nums text-brand-primary">{value}</p>
            <p className="mt-2 text-xs leading-5 text-brand-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
        <h2 className="text-2xl font-semibold text-brand-primary">Industrial extraction asset A: operating profile</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-muted">
            The shape is useful for deciding where an engineer should look first. It is not proof that
            the lower-load periods are waste, nor that the daytime load is fully required.
          </p>
          <div className="mt-6 overflow-x-auto">
            <svg viewBox="0 0 480 150" role="img" aria-labelledby="profile-title profile-description" className="min-w-[480px] w-full">
              <title id="profile-title">ex_a weekday and weekend demand by local hour</title>
              <desc id="profile-description">Weekday demand rises around 06:00, remains around eight kilowatts through the day, and falls after 16:00. Weekend demand remains below one kilowatt.</desc>
              <line x1="0" y1="96" x2="460" y2="96" stroke="#cbd5e1" />
              <line x1="0" y1="24" x2="460" y2="24" stroke="#e2e8f0" />
              <polyline points={linePoints(weekday)} transform="translate(10 0)" fill="none" stroke="#1d4ed8" strokeWidth="3" />
              <polyline points={linePoints(weekend)} transform="translate(10 0)" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5 4" />
              {[0, 6, 12, 18, 23].map((hour) => <text key={hour} x={hour * 20 + 8} y="122" fontSize="11" fill="#475569">{String(hour).padStart(2, "0")}:00</text>)}
              <text x="2" y="18" fontSize="11" fill="#475569">8 kW</text>
              <text x="2" y="110" fontSize="11" fill="#475569">0</text>
              <text x="350" y="18" fontSize="11" fill="#1d4ed8">weekday</text>
              <text x="406" y="34" fontSize="11" fill="#64748b">weekend</text>
              <text x="215" y="145" fontSize="11" fill="#475569">Europe/Dublin local hour</text>
            </svg>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Evidence boundary</h2>
          <div className="mt-5 space-y-4 text-sm leading-6 text-brand-muted">
            <p><span className="font-semibold text-brand-primary">Observed:</span> daytime and weekday demand is materially higher than overnight and weekend demand.</p>
            <p><span className="font-semibold text-brand-primary">Worth reviewing:</span> operating schedule, extraction requirement, controls, and whether the meter boundary matches the service delivered.</p>
            <p><span className="font-semibold text-brand-primary">Not established:</span> fault, unnecessary consumption, production impact, annual saving, or return on investment.</p>
          </div>
        </div>
      </section>

      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Coverage is part of the finding</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-muted">
          A business decision should show both what passed and what was absent. `ex_a` has 21,164
          recorded intervals out of 21,451 expected in its observed span. The 287 missing intervals
          remain in the denominator; they are not silently treated as shutdowns.
        </p>
        <div className="mt-7 max-w-3xl">
          <div className="flex justify-between text-xs text-brand-muted"><span>Expected span</span><span>21,451 intervals</span></div>
          <div className="mt-2 h-4 overflow-hidden rounded bg-slate-100"><div className="h-full bg-blue-700" style={{ width: "98.662%" }} /></div>
          <div className="mt-2 flex justify-between text-xs text-brand-muted"><span>Recorded 98.662%</span><span>Missing 1.338%</span></div>
          <div className="mt-5 flex justify-between text-xs text-brand-muted"><span>Recorded quality</span><span>21,135 strict · 29 rejected</span></div>
          <div className="mt-2 h-4 overflow-hidden rounded bg-slate-100"><div className="h-full bg-slate-700" style={{ width: "99.863%" }} /></div>
          <div className="mt-2 text-xs text-brand-muted">Strict-quality pass rate among recorded intervals: 99.863%</div>
        </div>
      </section>

      <section className="mt-14 rounded-lg bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-brand-primary">Business conclusion</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-brand-muted">
          This screening reduces the search space for an engineering team: investigate the asset’s
          daytime schedule, service requirement, controls, and meter boundary first. It does not sell
          a saving that the data cannot yet support. The commercial value at this stage is faster,
          clearer, more auditable investigation.
        </p>
      </section>
      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Where this data came from</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-brand-muted">
          This analysis uses the processed public release by Flynn, Murphy, Walsh and Riordan:
          Zenodo v1.0, DOI <a className="font-semibold text-blue-700 hover:text-blue-900" href="https://doi.org/10.5281/zenodo.19180972" target="_blank" rel="noreferrer">10.5281/zenodo.19180972</a>,
          with the associated Data paper DOI 10.3390/data11050101, released under CC BY 4.0. The
          release contains processed Gold records and quality fields; the original high-frequency
          sensor readings are not included. The analysis code and generated report are maintained
          with the Opcient project.
        </p>
      </section>
    </main>
  );
}
