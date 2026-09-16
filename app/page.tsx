import Link from "next/link";

type StudyKey = "stateMix" | "schedule" | "timeEnergy";

const caseStudies: Array<{
  href: string;
  label: string;
  type: string;
  title: string;
  insight: string;
  businessQuestion: string;
  validation: string;
  graphic: StudyKey;
}> = [
  {
    href: "/industrial-screening",
    label: "Study 01",
    type: "Coupled system",
    title: "Compressed-air system: Compressor A + Compressor B",
    insight: "Long A-only and B-only campaigns suggest managed duty, not random behaviour.",
    businessQuestion: "Understand the control intent before treating the pattern as an opportunity.",
    validation: "Pressure, airflow, states, controls, service constraints",
    graphic: "stateMix",
  },
  {
    href: "/extraction-screening",
    label: "Study 02",
    type: "Schedule shape",
    title: "Industrial extraction asset A",
    insight: "The asset is mostly off or full-service, which points to schedule alignment.",
    businessQuestion: "Confirm whether runtime matches production, safety, or extraction service.",
    validation: "Extraction requirement, controls, meter boundary, operating schedule",
    graphic: "schedule",
  },
  {
    href: "/material-handling-screening",
    label: "Study 03",
    type: "Standby policy",
    title: "Material-handling asset A",
    insight: "Most time is standby; most energy sits in short high-activity windows.",
    businessQuestion: "Validate what readiness load protects before changing idle policy.",
    validation: "Machine role, production relationship, controls, maintenance context",
    graphic: "timeEnergy",
  },
];

function EvidenceGraphic({ type }: { type: StudyKey }) {
  if (type === "stateMix") {
    return (
      <div className="mt-5 border-t border-neutral-200 pt-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-semibold tabular-nums text-brand-primary">92.19%</p>
            <p className="mt-1 text-xs leading-5 text-brand-muted">single-compressor duty</p>
          </div>
          <div className="bg-emerald-50 px-3 py-2 text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">Control intent</p>
            <p className="mt-1 max-w-[10rem] text-xs leading-5 text-emerald-900">Alternation may protect output.</p>
          </div>
        </div>
        <div className="mt-6 flex h-12 overflow-hidden border border-neutral-200 text-[0.65rem] font-semibold leading-none text-white">
          <div className="flex items-center justify-center bg-emerald-700" style={{ width: "43.86%" }}>A-only</div>
          <div className="flex items-center justify-center bg-emerald-500" style={{ width: "48.33%" }}>B-only</div>
          <div className="flex items-center justify-center bg-red-600" style={{ width: "3.5%" }}>Both</div>
          <div className="flex items-center justify-center bg-slate-500" style={{ width: "4.31%" }}>Low</div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
          <p><span className="font-semibold text-emerald-700">43.86%</span><br />A-only</p>
          <p><span className="font-semibold text-emerald-700">48.33%</span><br />B-only</p>
          <p><span className="font-semibold text-red-700">1.97%</span><br />both above</p>
          <p><span className="font-semibold text-slate-700">5.84%</span><br />both low</p>
        </div>
        <p className="mt-4 text-xs leading-5 text-brand-muted">
          The business question is control mode, not just correlation.
        </p>
      </div>
    );
  }

  if (type === "schedule") {
    return (
      <div className="mt-5 border-t border-neutral-200 pt-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-semibold tabular-nums text-brand-primary">69.65%</p>
            <p className="mt-1 text-xs leading-5 text-brand-muted">off or idle intervals</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold tabular-nums text-brand-primary">29.24%</p>
            <p className="mt-1 text-xs leading-5 text-brand-muted">full service intervals</p>
          </div>
        </div>
        <div className="mt-6 border border-neutral-200 p-3">
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 24 }).map((_, hour) => {
              const isReviewWindow = hour >= 8 && hour <= 15;
              return (
                <div key={hour} className="space-y-1">
                  <div className={["h-10", isReviewWindow ? "bg-amber-500" : hour < 6 || hour > 18 ? "bg-emerald-600" : "bg-amber-200"].join(" ")} />
                  {(hour === 0 || hour === 6 || hour === 12 || hour === 18) && (
                    <p className="text-[0.6rem] text-brand-muted">{hour}</p>
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-xs">
            <span className="font-semibold text-emerald-700">Green: low/off service window</span>
            <span className="font-semibold text-amber-700">Amber: review service schedule</span>
          </div>
        </div>
        <p className="mt-3 text-xs leading-5 text-brand-muted">
          The business question is whether runtime matches required service.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 border-t border-neutral-200 pt-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-semibold tabular-nums text-brand-primary">75.61%</p>
          <p className="mt-1 text-xs leading-5 text-brand-muted">standby-base intervals</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold tabular-nums text-brand-primary">13.83%</p>
          <p className="mt-1 text-xs leading-5 text-brand-muted">high-activity intervals</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-[4rem_1fr] gap-3 text-xs">
        <div className="pt-2 text-brand-muted">Time</div>
        <div className="flex h-8 overflow-hidden border border-neutral-200">
          <div className="bg-amber-500" style={{ width: "75.61%" }} />
          <div className="bg-red-600" style={{ width: "13.83%" }} />
          <div className="bg-emerald-600" style={{ width: "5.61%" }} />
          <div className="bg-slate-300" style={{ width: "4.95%" }} />
        </div>
        <div className="pt-2 text-brand-muted">Energy</div>
        <div className="flex h-8 overflow-hidden border border-neutral-200">
          <div className="bg-amber-500" style={{ width: "22.52%" }} />
          <div className="bg-red-600" style={{ width: "69.64%" }} />
          <div className="bg-emerald-600" style={{ width: "0.06%" }} />
          <div className="bg-slate-300" style={{ width: "7.78%" }} />
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
        <span className="text-amber-700">standby</span>
        <span className="text-red-700">high activity</span>
        <span className="text-emerald-700">off/idle</span>
      </div>
      <p className="mt-3 text-xs leading-5 text-brand-muted">
        The business question is whether standby readiness is worth its policy cost.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 md:py-18 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Same output. Less energy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Opcient builds software workflows for industrial teams that want lower energy operation
              without guessing, overclaiming, or risking the production result.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/case-studies" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-blue-100">
                View case evidence
              </Link>
              <Link href="/work-with-us" className="rounded-md border border-neutral-500 px-6 py-3 text-sm font-semibold text-white hover:border-blue-300 hover:text-blue-200">
                Partner with us
              </Link>
            </div>
          </div>

          <div className="border border-neutral-700 bg-neutral-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">Operating boundary</p>
            <p className="mt-3 text-2xl font-semibold leading-8 text-white">
              We separate what may be intentional from what may be inefficient.
            </p>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              The work is to protect output first, then challenge energy use with evidence that an
              engineering team can validate.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Cross-study insight</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">
              The same meter data can answer very different business questions.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Control intent", "Two compressors may alternate to protect reliability, balance wear, or maintain service continuity."],
              ["Schedule alignment", "A scheduled asset may already be well controlled. Validate whether runtime matches required service."],
              ["Standby readiness", "Small base loads over long periods become business questions when they preserve readiness."],
            ].map(([title, text]) => (
              <div key={title} className="border-l-4 border-blue-700 pl-4">
                <h3 className="font-semibold text-brand-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Case evidence</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">
                Three studies, three operating questions worth validating.
              </h2>
            </div>
            <Link href="/case-studies" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
              Open case-study overview
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.href} href={study.href} className="group border border-neutral-200 p-6 transition hover:border-blue-700 hover:bg-blue-50/40">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">{study.label}</p>
                  <p className="text-xs font-semibold text-brand-muted">{study.type}</p>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-brand-primary">{study.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{study.insight}</p>
                <EvidenceGraphic type={study.graphic} />
                <p className="mt-5 text-sm font-semibold leading-6 text-brand-primary">{study.businessQuestion}</p>
                <p className="mt-3 text-xs leading-5 text-brand-muted">Validation needed: {study.validation}.</p>
                <span className="mt-5 inline-block text-sm font-semibold text-blue-700 group-hover:text-blue-900">
                  View detailed study
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">What Opcient brings</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-primary">
              A software partner for teams that already understand the plant.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-brand-muted">
              We do not replace industrial engineers, controls specialists, maintenance teams, or site
              safety judgement. We build the data layer that makes their review faster, clearer, and
              easier to defend.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Intent before action", "We ask what the load may be protecting before proposing change."],
              ["Evidence with limits", "Source, quality rules, denominators, and missing data stay visible."],
              ["Validated change", "Only approved interventions move into monitoring or savings assessment."],
            ].map(([title, text]) => (
              <div key={title} className="border-l-4 border-blue-700 pl-5">
                <h3 className="font-semibold text-brand-primary">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <p className="text-xs leading-5 text-brand-muted">
            Public analyses use the processed release by Flynn, Murphy, Walsh and Riordan, Zenodo v1.0,
            DOI 10.5281/zenodo.19180972, associated Data paper DOI 10.3390/data11050101, CC BY 4.0.
            The website and reproducible project work are maintained in the{" "}
            <a className="font-semibold text-blue-700 hover:text-blue-900" href="https://github.com/Opcient" target="_blank" rel="noreferrer">
              Opcient GitHub organisation
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}
