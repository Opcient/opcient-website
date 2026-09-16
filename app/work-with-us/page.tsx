export default function WorkWithUsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Partnerships</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
        Bring the plant knowledge. We build the software layer.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
        Opcient partners with industrial engineering, controls, maintenance, and operational teams
        that want to make better use of their data without weakening professional judgement.
      </p>
      <section className="mt-12 rounded-lg bg-slate-50 p-8">
        <h2 className="text-2xl font-semibold text-brand-primary">A useful first engagement</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-brand-muted">
          We can structure a narrow data set, build a screening workflow, produce an evidence report,
          and leave the engineering team with a reproducible method they can review and improve.
        </p>
      </section>
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          ["Data workflows", "Quality checks, interval logic, asset context, and reproducible analysis."],
          ["Decision support", "Candidate anomalies and operating patterns presented for expert review."],
          ["Delivery systems", "Reports, dashboards, automation, and monitoring workflows that fit existing practice."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-lg border border-neutral-200 p-6">
            <h2 className="font-semibold text-brand-primary">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
