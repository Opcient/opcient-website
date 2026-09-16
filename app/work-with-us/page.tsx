export default function WorkWithUsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Partnerships</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
            Bring the plant knowledge. Opcient turns data into validation questions.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
            We partner with engineering-led businesses and operating teams that want lower energy
            operation without guessing, overclaiming, or putting output at risk.
          </p>
        </div>
        <div className="border border-neutral-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-brand-primary">Good first project</p>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            One asset group, one operating hypothesis, one validation plan, and no savings claim until
            the site evidence supports it.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          ["For engineering firms", "Add reproducible software analysis to controls, maintenance, or energy-efficiency work."],
          ["For operators", "Turn equipment data into review queues that respect output, safety, and service constraints."],
          ["For business owners", "See which energy questions are ready for action and which still need validation."],
        ].map(([title, text]) => (
          <div key={title} className="border border-neutral-200 p-6">
            <h2 className="font-semibold text-brand-primary">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 border-t border-neutral-200 pt-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What we can deliver first</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-muted">
            <li>Data inventory, quality acceptance notes, and missing-window reporting.</li>
            <li>Operating-pattern screens for selected assets or systems.</li>
            <li>Hypotheses that distinguish possible intent from possible inefficiency.</li>
            <li>Evidence packs with validation questions for engineer or owner review.</li>
            <li>Monitoring views for approved output-preserving changes.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">What we will not fake</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-muted">
            <li>No guaranteed savings without site validation.</li>
            <li>No fault diagnosis from electrical demand alone.</li>
            <li>No ROI or payback without explicit assumptions and approved commercial inputs.</li>
            <li>No claim that software replaces qualified plant judgement.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
