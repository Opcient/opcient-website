export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold md:text-3xl">How Our Commercial Moves Work</h1>
        <p className="mt-3 text-sm text-neutral-600 md:text-base">
          A simple, contract-led process designed for business relocations.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded border border-neutral-200 p-4">
          <h2 className="text-base font-medium">1. Request a Quote</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Submit your move details, locations, dates, and access requirements.
          </p>
        </div>

        <div className="rounded border border-neutral-200 p-4">
          <h2 className="text-base font-medium">2. Receive Quote & Contract</h2>
          <p className="mt-2 text-sm text-neutral-600">
            We review the request and issue a formal quote with terms.
          </p>
        </div>

        <div className="rounded border border-neutral-200 p-4">
          <h2 className="text-base font-medium">3. Schedule & Complete</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Once accepted, the move is scheduled and delivered as agreed.
          </p>
        </div>
      </section>
    </main>
  );
}
