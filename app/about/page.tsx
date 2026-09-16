export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
          Opcient builds the software layer around industrial efficiency work.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          The company is positioned as a partner to industrial engineering, controls, maintenance, and
          operations teams. We bring software engineering, data workflows, reproducible analysis, and
          evidence presentation. Domain professionals bring plant knowledge and validation authority.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          ["Our lane", "Data workflows, interval logic, reporting, dashboards, and post-change monitoring."],
          ["Your lane", "Equipment context, controls knowledge, safety, production constraints, and engineering sign-off."],
          ["Shared result", "A clearer decision process for where to investigate, what to validate, and what not to claim yet."],
        ].map(([title, text]) => (
          <div key={title} className="border border-neutral-200 p-6">
            <h2 className="text-xl font-semibold text-brand-primary">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
          </div>
        ))}
      </section>

      <section className="mt-14 grid gap-10 border-t border-neutral-200 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-brand-primary">Why this position matters</h2>
          <p className="mt-4 text-sm leading-6 text-brand-muted">
            Industrial efficiency work has real consequences: output, reliability, safety, and
            customer commitments. A software partner should make the evidence easier to inspect, not
            pretend a public dataset is enough to approve a plant intervention.
          </p>
        </div>
        <div className="border border-neutral-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold text-brand-primary">What we will say clearly</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-muted">
            <li>This pattern is worth investigating.</li>
            <li>This number comes from this source and this denominator.</li>
            <li>This is what the public data does not prove.</li>
            <li>This is the validation a qualified engineer would need before action.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
