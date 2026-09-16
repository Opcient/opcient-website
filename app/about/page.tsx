export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-semibold text-brand-primary md:text-3xl">About Sydney Movers</h1>

      <p className="mt-4 max-w-3xl text-sm text-brand-muted md:text-base">
        Sydney Movers is a Sydney-based commercial movers specialising in office relocations and SME
        moves across NSW.
      </p>

      <p className="mt-4 max-w-3xl text-sm text-brand-muted md:text-base">
        We focus on structured, contract-led relocations where clarity, insurance, and reliability
        matter. Our services are designed for businesses that require predictable outcomes,
        professional handling, and insured operations.
      </p>

      <div className="mt-8">
        <h2 className="text-base font-medium text-brand-primary">What sets us apart</h2>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand-muted">
          <li>Commercial-first focus</li>
          <li>Formal quotes and written contracts</li>
          <li>Public liability and goods in transit insurance</li>
          <li>Experienced handling of office environments</li>
        </ul>
      </div>
    </main>
  );
}
