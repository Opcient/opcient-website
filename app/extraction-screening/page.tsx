const weekday = [0.548, 0.248, 0.239, 0.239, 0.24, 0.285, 2.205, 3.815, 6.735, 7.427, 7.831, 8.215, 8.365, 8.33, 8.305, 7.707, 4.581, 1.711, 1.567, 1.338, 1.251, 1.046, 1.058, 0.964];
const weekend = [0, 0, 0, 0, 0, 0.105, 1.476, 2.252, 2.832, 2.85, 2.836, 2.763, 1.686, 1.359, 0.514, 0.608, 0.556, 0.292, 0.021, 0, 0, 0, 0, 0];

function linePoints(values: number[]) {
  return values.map((value, index) => `${index * 20},${104 - value * 10}`).join(" ");
}

export default function ExtractionScreeningPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Case study 02 · industrial extraction asset A</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
          A clear schedule can be evidence of control, not evidence of waste.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          Industrial extraction asset A looks schedule-driven: mostly off or idle, then clearly in
          service during work periods. The business question is whether that service schedule matches
          production, safety, air-quality, or process-extraction requirements.
        </p>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-4">
        {[
          ["69.65%", "off or idle intervals"],
          ["29.24%", "full-service intervals"],
          ["91.4%", "full service on weekdays"],
          ["25x", "daytime vs overnight mean"],
        ].map(([value, label]) => (
          <div key={label} className="border border-neutral-200 p-5">
            <p className="text-2xl font-semibold tabular-nums text-brand-primary">{value}</p>
            <p className="mt-2 text-xs leading-5 text-brand-muted">{label}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Schedule shape</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-muted">
            The weekday profile ramps from early morning into full service, then falls after the work
            window. Weekend operation is lower but not absent. That makes schedule validation the first
            business question.
          </p>
          <div className="mt-6 overflow-x-auto border border-neutral-200 p-4">
            <svg viewBox="0 0 490 155" role="img" aria-labelledby="profile-title profile-description" className="min-w-[490px] w-full">
              <title id="profile-title">Industrial extraction asset A weekday and weekend demand</title>
              <desc id="profile-description">Weekday demand rises sharply during working hours while weekend demand remains lower.</desc>
              <rect x="120" y="10" width="180" height="98" fill="#fef3c7" />
              <line x1="10" y1="104" x2="470" y2="104" stroke="#cbd5e1" />
              <line x1="10" y1="24" x2="470" y2="24" stroke="#e2e8f0" />
              <polyline points={linePoints(weekday)} transform="translate(10 0)" fill="none" stroke="#d97706" strokeWidth="3" />
              <polyline points={linePoints(weekend)} transform="translate(10 0)" fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="5 4" />
              {[0, 6, 12, 18, 23].map((hour) => <text key={hour} x={hour * 20 + 8} y="128" fontSize="11" fill="#475569">{String(hour).padStart(2, "0")}:00</text>)}
              <text x="14" y="18" fontSize="11" fill="#475569">8 kW</text>
              <text x="14" y="118" fontSize="11" fill="#475569">0</text>
              <text x="178" y="22" fontSize="11" fill="#92400e">review window</text>
              <text x="350" y="18" fontSize="11" fill="#d97706">weekday</text>
              <text x="402" y="34" fontSize="11" fill="#059669">weekend</text>
              <text x="210" y="150" fontSize="11" fill="#475569">Europe/Dublin local hour</text>
            </svg>
          </div>
        </div>

        <div className="border-l-4 border-blue-700 pl-6">
          <h2 className="text-2xl font-semibold text-brand-primary">Opcient hypothesis</h2>
          <p className="mt-4 text-sm leading-6 text-brand-muted">
            The asset may already be controlled around required service periods. The opportunity, if
            any, is not proven by the day-night gap. It depends on whether starts, stops, weekend
            activity, and residual running match the actual extraction requirement.
          </p>
          <p className="mt-5 text-sm font-semibold leading-6 text-brand-primary">
            The first decision is schedule alignment, not savings calculation.
          </p>
        </div>
      </section>

      <section className="mt-14 border-t border-neutral-200 pt-10">
        <h2 className="text-2xl font-semibold text-brand-primary">Opcient questions for the business</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Is this process extraction, safety ventilation, comfort ventilation, or another service?",
            "Are early starts required for purge, warm-up, safety, or production readiness?",
            "Why does some weekend daytime activity remain when most weekend hours are low or zero?",
            "What shutdown windows are allowed without affecting safety, air quality, or process output?",
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
          associated Data paper DOI 10.3390/data11050101, CC BY 4.0. The public data does not confirm
          equipment purpose, meter boundary, control mode, service requirement, waste, or savings.
        </p>
      </section>
    </main>
  );
}
