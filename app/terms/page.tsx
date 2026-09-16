import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Sydney Movers commercial removal and office relocation services.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-semibold text-brand-primary md:text-3xl">Terms & Conditions</h1>

      <p className="mt-2 text-sm text-brand-muted">Last updated: January 2026</p>

      <div className="mt-8 space-y-8 text-sm text-brand-muted leading-relaxed">
        <section>
          <h2 className="font-medium text-brand-primary">1. Who We Are</h2>
          <p className="mt-2">
            In these Terms and Conditions, “we”, “us”, or “our” refers to Sydney Movers. “You” or
            “your” refers to the client engaging our services. “Goods” means the items we transport,
            and “Services” means the removal and relocation services we provide.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">2. Our Services</h2>
          <p className="mt-2">
            We provide commercial removal and office relocation services primarily within Sydney,
            NSW. We are not common carriers and reserve the right to refuse to transport any item at
            our discretion.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">3. Client Responsibilities</h2>
          <p className="mt-2">
            You warrant that all information provided for quoting and service delivery is accurate
            and complete, and that you have authority to deal with the Goods.
          </p>
          <p className="mt-2">
            You must ensure an authorised representative is available at commencement and completion
            of the Services, unless alternative arrangements are agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">4. Charges and Payment</h2>
          <p className="mt-2">
            Charges, minimum service periods, time increments, travel time charges, and any
            additional costs are detailed in the formal quote and contract issued for each job.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">
            5. Fragile Items, Packing, and Liability
          </h2>
          <p className="mt-2">
            Certain items are inherently fragile or susceptible to damage despite reasonable
            handling, including but not limited to glass, stone, marble, particleboard furniture,
            and electronic equipment.
          </p>
          <p className="mt-2">We are not responsible for damage or loss arising from:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Inadequate, defective, or improper packing by you or a third party not engaged by us;
            </li>
            <li>
              Undisclosed fragile contents or items whose fragility was not made known prior to
              handling;
            </li>
            <li>Pre-existing damage, defects, or normal wear and tear;</li>
            <li>
              Internal or non-visible damage where there is no corresponding external damage and the
              item was handled with reasonable care.
            </li>
          </ul>
          <p className="mt-2">
            Where fragile items are disclosed, appropriately packed, and handled with reasonable
            care, liability (if any) will be assessed in accordance with these Terms, the agreed
            contract, and applicable insurance.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">6. Damage Reporting</h2>
          <p className="mt-2">
            Visible damage must be reported at the time of delivery or completion of the Services
            where reasonably practicable. Any non-visible damage must be reported in writing on the
            same day as delivery. Failure to report damage within this timeframe may affect our
            ability to investigate or accept liability, subject to applicable consumer laws.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">7. Subcontractors</h2>
          <p className="mt-2">
            We may engage subcontractors or third-party service providers to perform part or all of
            the Services. Where subcontractors are engaged, our responsibility remains subject to
            these Terms and the applicable quote or contract for the job.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">8. Limitation of Liability</h2>
          <p className="mt-2">
            To the extent permitted by law, our liability for any loss or damage arising out of or
            in connection with the Services is limited to the extent provided under the applicable
            quote, contract, or insurance arrangements in place for the specific job. We are not
            liable for loss or damage beyond what is reasonably foreseeable in the ordinary course
            of providing the Services.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">
            9. Exclusion of Indirect or Consequential Loss
          </h2>
          <p className="mt-2">
            To the extent permitted by law, we are not liable for any indirect, consequential,
            incidental, or economic loss, including but not limited to loss of profit, loss of
            business, loss of use, business interruption, delay-related losses, or reputational
            loss, even if such loss was foreseeable.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">10. Force Majeure</h2>
          <p className="mt-2">
            We are not liable for any failure or delay in performing the Services where such failure
            or delay is caused by events beyond our reasonable control, including but not limited to
            adverse weather conditions, traffic incidents, mechanical breakdown, building access
            restrictions, industrial action, acts or omissions of third parties, or other
            circumstances outside our control.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">11. Australian Consumer Law</h2>
          <p className="mt-2">
            Our services come with guarantees under the Australian Consumer Law that cannot be
            excluded. Nothing in these Terms is intended to exclude, restrict, or modify those
            rights.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">12. Governing Law</h2>
          <p className="mt-2">
            These Terms and Conditions are governed by the laws of New South Wales, Australia.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">
            13. Entire Agreement and Order of Precedence
          </h2>
          <p className="mt-2">
            These website Terms and Conditions form part of the contractual framework between you
            and us. If any provision of these Terms differs from the terms set out in the formal
            quote, job confirmation, or written contract issued for the specific job, the
            job-specific terms will prevail in relation to that matter.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">14. Changes to These Terms</h2>
          <p className="mt-2">
            We may update these Terms from time to time. The current version will always be
            published on our website.
          </p>
        </section>
      </div>
    </main>
  );
}
