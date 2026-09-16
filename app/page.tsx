import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <section className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Industrial software and data workflows
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-primary md:text-6xl">
          Make operations more efficient without losing the output that matters.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
          Opcient helps industrial engineering teams screen equipment data for unusual operating
          behaviour, investigate candidate efficiency opportunities, and monitor what changes after
          an intervention.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/how-it-works" className="rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-800">
            See how it works
          </Link>
          <Link href="/work-with-us" className="rounded-md border border-neutral-300 px-6 py-3 text-sm font-semibold text-brand-primary hover:border-blue-700 hover:text-blue-700">
            Work with Opcient
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Case studies</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">Evidence that helps a business decide where to look next.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-brand-muted">
          Each study starts with public industrial data and ends with a clearer engineering question—not
          an invented saving. The same workflow can be applied to different assets and operating systems.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Link href="/industrial-screening" className="group rounded-lg border border-neutral-200 p-7 hover:border-blue-700">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Study 01 · coupled system</p>
            <h3 className="mt-3 text-xl font-semibold text-brand-primary">Compressed-air system: Compressor A + Compressor B</h3>
            <p className="mt-3 text-sm leading-6 text-brand-muted">Shows how duty transfer and simultaneous demand can be screened as a system rather than as two isolated meters.</p>
            <span className="mt-5 inline-block text-sm font-semibold text-blue-700 group-hover:text-blue-900">View study →</span>
          </Link>
          <Link href="/extraction-screening" className="group rounded-lg border border-neutral-200 p-7 hover:border-blue-700">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Study 02 · single asset</p>
            <h3 className="mt-3 text-xl font-semibold text-brand-primary">Industrial extraction asset A <span className="font-normal text-brand-muted">(`ex_a`)</span></h3>
            <p className="mt-3 text-sm leading-6 text-brand-muted">Shows how a clear weekday/daytime operating shape can focus review while the asset’s exact function remains to be confirmed.</p>
            <span className="mt-5 inline-block text-sm font-semibold text-blue-700 group-hover:text-blue-900">View study →</span>
          </Link>
          <Link href="/material-handling-screening" className="group rounded-lg border border-neutral-200 p-7 hover:border-blue-700">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Study 03 · longer history</p>
            <h3 className="mt-3 text-xl font-semibold text-brand-primary">Material-handling asset A <span className="font-normal text-brand-muted">(`mh_a`)</span></h3>
            <p className="mt-3 text-sm leading-6 text-brand-muted">Shows how longer history can improve context while the machine’s actual role still needs site confirmation.</p>
            <span className="mt-5 inline-block text-sm font-semibold text-blue-700 group-hover:text-blue-900">View study →</span>
          </Link>
        </div>
      </section>

      <section className="mt-20 border-t border-neutral-200 pt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Cross-study insight</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-brand-primary">The same number means different things at different operational boundaries.</h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-brand-muted">
          The three studies give Opcient a practical starting hypothesis: useful efficiency screening
          must combine pattern detection with asset context, system relationships, and data quality.
          A dashboard that only ranks high-consuming assets would miss the business question.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["System perspective", "Compressor A and B show why one asset’s apparent shutdown is not automatically a system saving. Duty can transfer between assets."],
            ["Schedule perspective", "The extraction asset shows how weekday, daytime, overnight, and weekend shapes can prioritise review without labelling low-load periods waste."],
            ["Context perspective", "The material-handling asset shows that longer history improves context, but an unclear machine function still limits interpretation."],
          ].map(([title, text]) => (
            <div key={title} className="border-l-2 border-blue-700 pl-5">
              <h3 className="text-lg font-semibold text-brand-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-sm font-semibold leading-6 text-brand-primary">
          Working hypothesis: the commercial value is not merely finding “big users”; it is helping an
          engineering team identify which operating pattern is worth validating first—and showing why.
        </p>
      </section>

      <section className="mt-20 border-t border-neutral-200 pt-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">The Opcient evidence workflow</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">Screen → Explain → Validate</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Screen", "Find unusual operating patterns and preserve the full data denominator."],
            ["02", "Explain", "Show the numbers, time window, comparison, source, and limitation behind the finding."],
            ["03", "Validate", "Let qualified engineers and operators decide what the pattern means and whether action is safe."],
          ].map(([number, title, text]) => (
            <div key={title} className="relative border-l-2 border-blue-700 pl-5">
              <p className="text-xs font-semibold text-blue-700">{number}</p>
              <h3 className="mt-2 text-xl font-semibold text-brand-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-6 text-brand-muted">
          This is our current working framework: software narrows the search and makes evidence legible;
          domain professionals retain responsibility for interpretation and intervention.
        </p>
      </section>

      <section className="mt-16 border-t border-neutral-200 pt-8">
        <p className="text-xs leading-5 text-brand-muted">
          The analyses use the public release by Flynn, Murphy, Walsh and Riordan, Zenodo v1.0, DOI
          10.3390/data11050101 / 10.5281/zenodo.19180972, CC BY 4.0. The public website and future
          reproducible project releases are maintained in the <a className="font-semibold text-blue-700 hover:text-blue-900" href="https://github.com/Opcient" target="_blank" rel="noreferrer">Opcient GitHub organisation</a>.
        </p>
      </section>
    </main>
  );
}
