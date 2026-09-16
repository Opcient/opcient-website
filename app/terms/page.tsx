export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
      <h1 className="text-3xl font-semibold text-brand-primary">Terms of Use</h1>
      <p className="mt-4 text-sm text-brand-muted">Draft for review before production launch.</p>
      <div className="mt-8 space-y-6 text-sm leading-6 text-brand-muted">
        <p>The material on this prototype site describes software concepts and exploratory public-data work.</p>
        <section><h2 className="font-semibold text-brand-primary">Exploratory information</h2><p className="mt-2">Case-study findings are not engineering advice, a diagnosis, a guarantee of savings, or a recommendation to change plant operation.</p></section>
        <section><h2 className="font-semibold text-brand-primary">Professional review</h2><p className="mt-2">Operational decisions should be made by appropriately qualified professionals using site-specific information and applicable safety, production, and maintenance requirements.</p></section>
        <section><h2 className="font-semibold text-brand-primary">Final terms</h2><p className="mt-2">Project-specific services, responsibilities, data handling, intellectual property, and liability will be defined in written agreements.</p></section>
      </div>
    </main>
  );
}
