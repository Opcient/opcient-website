export default function FAQsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-semibold text-brand-primary md:text-3xl">
        Frequently Asked Questions
      </h1>

      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-base font-medium text-brand-primary">
            Do you specialise in commercial moves?
          </h2>
          <p className="mt-2 text-sm text-brand-muted">
            Yes. Our primary focus is office relocations and SME commercial moves. Residential work
            may be accepted selectively.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-brand-primary">How are quotes calculated?</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Quotes are reviewed manually based on scope, access, duration, and logistics. A formal
            quote is issued before any work is scheduled.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-brand-primary">
            Do you work on hourly blocks?
          </h2>
          <p className="mt-2 text-sm text-brand-muted">
            Yes. Minimum hours apply. Travel time and access constraints may be included depending
            on the job.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-brand-primary">Are you insured?</h2>
          <p className="mt-2 text-sm text-brand-muted">
            We hold public liability insurance up to $5 million and goods in transit insurance up to
            $100,000. Coverage is subject to policy terms, exclusions, and the scope of the specific
            job. Certificates of currency are available upon request.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-brand-primary">
            How is damage handled if something goes wrong?
          </h2>
          <p className="mt-2 text-sm text-brand-muted">
            Any visible damage should be reported at completion where reasonably practicable.
            Non-visible damage must be reported in writing on the day of delivery. Claims are
            assessed in accordance with the agreed contract and applicable insurance.
          </p>
        </div>

        <div>
          <h2 className="text-base font-medium text-brand-primary">When is payment required?</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Payment terms are outlined in the formal quote and contract issued prior to the move.
          </p>
        </div>
      </div>
    </main>
  );
}
