import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Sydney Movers outlining how personal information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-semibold text-brand-primary md:text-3xl">Privacy Policy</h1>

      <p className="mt-2 text-sm text-brand-muted">Last updated: January 2026</p>

      <div className="mt-8 space-y-8 text-sm text-brand-muted leading-relaxed">
        <section>
          <h2 className="font-medium text-brand-primary">1. Introduction</h2>
          <p className="mt-2">
            Sydney Movers (“we”, “us”, “our”) is committed to protecting your privacy and handling
            personal information responsibly and transparently. This Privacy Policy explains how we
            collect, use, store, and disclose personal information in connection with our commercial
            removal and office relocation services.
          </p>
          <p className="mt-2">
            We comply with the Australian Privacy Principles (APPs) under the Privacy Act 1988
            (Cth).
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">2. Personal Information We Collect</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Business and contact details (business name, contact name, email, phone number,
              business address)
            </li>
            <li>
              Quote and service details (locations, access conditions, scope, preferred dates,
              operational notes)
            </li>
            <li>Payment and invoicing information required for bank transfers or invoicing</li>
            <li>Records of communications relating to our services</li>
          </ul>
          <p className="mt-2">
            We do not collect credit card details, identification documents, cookies, analytics, or
            marketing data.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">3. How We Collect Information</h2>
          <p className="mt-2">
            We collect personal information directly from you when you submit a quote request,
            contact us, or communicate with us regarding our services.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">4. How We Use Personal Information</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Preparing and issuing commercial quotes</li>
            <li>Planning, scheduling, and delivering services</li>
            <li>Communicating about enquiries and service delivery</li>
            <li>Issuing invoices and managing payments</li>
            <li>Meeting legal, insurance, and contractual obligations</li>
          </ul>
          <p className="mt-2">We do not use personal information for marketing purposes.</p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">5. Disclosure of Personal Information</h2>
          <p className="mt-2">
            Personal information may be disclosed to employees, contractors, and trusted service
            providers where required to deliver services, as well as to professional advisers or
            authorities where required by law.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">6. Storage and Security</h2>
          <p className="mt-2">
            We take reasonable steps to protect personal information through access controls, secure
            systems, and confidentiality obligations. Information is securely deleted or
            de-identified when no longer required.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">7. Cookies and Website Data</h2>
          <p className="mt-2">
            Our website does not use cookies, tracking technologies, or analytics tools.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">8. Access and Correction</h2>
          <p className="mt-2">
            You may request access to or correction of personal information we hold by contacting us
            using the details below.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">9. Complaints</h2>
          <p className="mt-2">
            If you believe we have breached the Australian Privacy Principles, you may contact us.
            You may also lodge a complaint with the Office of the Australian Information
            Commissioner (OAIC).
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">10. Contact Us</h2>
          <p className="mt-2">
            Email: contact@sydneymovers.com.au
            <br />
            Location: Sydney, NSW, Australia
          </p>
        </section>

        <section>
          <h2 className="font-medium text-brand-primary">11. Changes to This Policy</h2>
          <p className="mt-2">
            This policy may be updated from time to time. The current version will always be
            published on our website.
          </p>
        </section>
      </div>
    </main>
  );
}
