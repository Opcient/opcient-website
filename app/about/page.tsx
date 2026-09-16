export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">About Opcient</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl">
        Software capability for engineering businesses.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
        Opcient builds software and data workflows that help industrial engineering teams screen
        operational data, focus investigations, and document what is known before decisions are made.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 p-7">
          <h2 className="text-xl font-semibold text-brand-primary">Our role</h2>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            We provide the software engineering, data handling, reproducibility, and workflow design.
            We work alongside domain specialists who validate the operational meaning.
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 p-7">
          <h2 className="text-xl font-semibold text-brand-primary">Our boundary</h2>
          <p className="mt-3 text-sm leading-6 text-brand-muted">
            We do not replace plant engineers or claim savings from an unvalidated pattern. Findings
            are candidate signals for qualified review.
          </p>
        </div>
      </div>
    </main>
  );
}
