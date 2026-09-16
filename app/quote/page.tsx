"use client";

import { useState } from "react";

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-2xl font-semibold text-brand-primary md:text-3xl">
        Request a Commercial Mover Quote
      </h1>

      <p className="mt-3 max-w-2xl text-sm text-brand-muted md:text-base">
        Quotes are reviewed manually. A formal quote and contract are issued before scheduling.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-10">
        {/* SECTION: Business details */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-brand-primary">Business & Contact Details</h2>

          <input
            name="businessName"
            placeholder="Business name"
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />

          <input
            name="contactName"
            placeholder="Primary contact name"
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />

          <input
            name="phone"
            placeholder="Phone number"
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </section>

        {/* SECTION: Locations */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-brand-primary">Locations & Access</h2>

          <input
            name="fromLocation"
            placeholder="Origin address"
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />

          <select name="fromAccess" className="w-full rounded border px-3 py-2 text-sm" required>
            <option value="">Access at origin</option>
            <option>Ground level</option>
            <option>Lift access</option>
            <option>Stairs (1–2 floors, no lift)</option>
            <option>Stairs (3+ floors, no lift)</option>
          </select>

          <input
            name="toLocation"
            placeholder="Destination address"
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />

          <select name="toAccess" className="w-full rounded border px-3 py-2 text-sm" required>
            <option value="">Access at destination</option>
            <option>Ground level</option>
            <option>Lift access</option>
            <option>Stairs (1–2 floors, no lift)</option>
            <option>Stairs (3+ floors, no lift)</option>
          </select>

          <div className="space-y-2 text-sm text-brand-muted">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="parkingAvailableOrigin" />
              Parking or loading zone available at origin
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" name="parkingAvailableDestination" />
              Parking or loading zone available at destination
            </label>
          </div>
        </section>

        {/* SECTION: Scope */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-brand-primary">Scope of Move</h2>

          <textarea
            name="items"
            rows={4}
            placeholder="Items being moved (e.g. 10 desks, 20 chairs, filing cabinets, boxed computers)"
            className="w-full rounded border px-3 py-2 text-sm"
            required
          />

          <select name="duration" className="w-full rounded border px-3 py-2 text-sm" required>
            <option value="">Estimated duration</option>
            <option>Minimum 4 hours</option>
            <option>6 hours</option>
            <option>8 hours (full day)</option>
            <option>Multiple days</option>
          </select>

          <input
            name="dates"
            placeholder="Preferred date(s)"
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </section>

        {/* SECTION: Operational qualifiers */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-brand-primary">Operational Considerations</h2>

          <div className="space-y-2 text-sm text-brand-muted">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="twoPersonLift" />
              All items can be safely handled by a two-person crew
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" name="fragileItems" />
              Includes fragile or sensitive equipment (e.g. computers)
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" name="includeSupervisor" />
              Include a Sydney Movers on-site supervisor (optional, additional cost)
            </label>
          </div>
        </section>

        {/* SECTION: Notes */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-brand-primary">Additional Notes</h2>

          <textarea
            name="notes"
            rows={3}
            placeholder="Loading docks, access times, special requirements"
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </section>

        {/* Submit */}
        <div className="space-y-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="
    w-full
    rounded-md
    bg-blue-700
    px-6 py-3
    text-sm font-semibold text-white
    shadow-md
    hover:bg-blue-800
    disabled:opacity-60
  "
          >
            {status === "sending" ? "Submitting…" : "Submit quote request"}
          </button>

          <p className="text-xs text-brand-muted">
            Travel time, minimum hours, and insurance terms are detailed in the formal quote and
            contract.
          </p>

          {status === "sent" && (
            <p className="text-sm text-green-700">Thank you. We’ll be in touch shortly.</p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>
    </main>
  );
}
