export default function WorkWithUsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Partnerships</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
            Bring the plant knowledge. Opcient builds the evidence workflow.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
            We partner with engineering-led businesses and operating teams that want cleaner screening,
            clearer reporting, and a disciplined path from data pattern to validated action.
          </p>
        </div>
        <div className="border border-neutral-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-brand-primary">Good first project</p>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            One asset group, one time window, one operating question, and a clear decision on what
            evidence is strong enough for engineer review.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          ["For engineering firms", "Add software delivery, reproducible analysis, and business-facing evidence to energy-efficiency or maintenance projects."],
          ["For operators", "Convert existing equipment data into review queues, data-quality notes, and post-intervention monitoring."],
          ["For builders", "Prototype dashboards and workflows that can mature from case study to operating tool."],
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
            <li>Candidate operating-pattern screens for selected assets or systems.</li>
            <li>Evidence packs for engineer or business-owner review.</li>
            <li>Prototype dashboards or monitoring views for approved follow-up.</li>
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
