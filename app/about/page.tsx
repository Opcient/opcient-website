export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
          Opcient builds the evidence layer for industrial energy decisions.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
          We partner with industrial engineering, controls, maintenance, and operations teams. Opcient
          brings software workflows and reproducible analysis; domain professionals bring plant
          knowledge, safety context, and validation authority.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          ["Our lane", "Detect patterns, preserve denominators, infer plausible intent, and package validation questions."],
          ["Your lane", "Confirm controls, service purpose, safety constraints, production impact, and engineering sign-off."],
          ["Shared result", "Lower energy pursuit risk without weakening output, reliability, or decision quality."],
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
            Industrial efficiency work can affect output, reliability, safety, and customer
            commitments. A software partner should make the evidence easier to challenge before
            anyone changes an operating policy.
          </p>
        </div>
        <div className="border border-neutral-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold text-brand-primary">What we will say clearly</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-muted">
            <li>This pattern may be intentional.</li>
            <li>This number comes from this source and denominator.</li>
            <li>This is the business risk of misreading it.</li>
            <li>This is what must be validated before action.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
