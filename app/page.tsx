import Link from "next/link";

type StudyKey = "correlation" | "schedule" | "coverage";

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
    insight: "Compressor A and B move in opposite directions often enough that one meter cannot be read alone.",
    businessQuestion: "Is duty transferring between machines before anyone claims an efficiency win?",
    validation: "Pressure, airflow, states, controls, service constraints",
    graphic: "correlation",
  },
  {
    href: "/extraction-screening",
    label: "Study 02",
    type: "Schedule shape",
    title: "Industrial extraction asset A",
    insight: "The strongest signal is when the asset runs, not a standalone claim of waste.",
    businessQuestion: "Is the operating schedule aligned with the service the asset provides?",
    validation: "Extraction requirement, controls, meter boundary, operating schedule",
    graphic: "schedule",
  },
  {
    href: "/material-handling-screening",
    label: "Study 03",
    type: "Context test",
    title: "Material-handling asset A",
    insight: "More history improves the screen, but it does not replace machine knowledge.",
    businessQuestion: "Does a longer history change the priority for engineer review?",
    validation: "Machine role, production relationship, controls, maintenance context",
    graphic: "coverage",
  },
];

function EvidenceGraphic({ type }: { type: StudyKey }) {
  if (type === "correlation") {
    return (
      <div className="mt-5 border-t border-neutral-200 pt-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl font-semibold tabular-nums text-brand-primary">-0.767</p>
            <p className="mt-1 text-xs leading-5 text-brand-muted">approx. demand correlation</p>
          </div>
          <p className="max-w-[9rem] text-right text-xs leading-5 text-brand-muted">
            Close to opposite movement, not proof of control logic.
          </p>
        </div>
        <div className="relative mt-6 h-2 bg-neutral-200">
          <div className="absolute left-0 top-0 h-2 w-1/2 bg-slate-700" />
          <div className="absolute top-[-0.45rem] h-5 w-1 border-l-2 border-blue-700" style={{ left: "11.65%" }} />
        </div>
        <div className="mt-2 grid grid-cols-3 text-xs text-brand-muted">
          <span>-1 opposite</span>
          <span className="text-center">0 no linear association</span>
          <span className="text-right">+1 move together</span>
        </div>
      </div>
    );
  }

  if (type === "schedule") {
    return (
      <div className="mt-5 border-t border-neutral-200 pt-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-3xl font-semibold tabular-nums text-brand-primary">5.411 kW</p>
            <p className="mt-1 text-xs leading-5 text-brand-muted">daytime mean demand</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold tabular-nums text-brand-primary">0.219 kW</p>
            <p className="mt-1 text-xs leading-5 text-brand-muted">overnight mean</p>
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          <div>
            <div className="flex justify-between text-xs text-brand-muted"><span>Daytime</span><span>5.411 kW</span></div>
            <div className="mt-1 h-2 bg-neutral-200"><div className="h-2 bg-blue-700" style={{ width: "100%" }} /></div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-brand-muted"><span>Overnight</span><span>0.219 kW</span></div>
            <div className="mt-1 h-2 bg-neutral-200"><div className="h-2 bg-slate-700" style={{ width: "4.1%" }} /></div>
          </div>
        </div>
        <p className="mt-3 text-xs leading-5 text-brand-muted">
          The gap prioritises schedule review. It does not prove the daytime load is avoidable.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 border-t border-neutral-200 pt-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-3xl font-semibold tabular-nums text-brand-primary">98.351%</p>
          <p className="mt-1 text-xs leading-5 text-brand-muted">recorded-span coverage</p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold tabular-nums text-brand-primary">579</p>
          <p className="mt-1 text-xs leading-5 text-brand-muted">missing intervals</p>
        </div>
      </div>
      <div className="mt-5 h-3 bg-neutral-200">
        <div className="h-3 bg-blue-700" style={{ width: "98.351%" }} />
      </div>
      <div className="mt-2 flex justify-between text-xs text-brand-muted">
        <span>34,525 observed</span>
        <span>35,104 expected</span>
      </div>
      <p className="mt-3 text-xs leading-5 text-brand-muted">
        Strong coverage supports screening, but machine function still controls interpretation.
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
              Find the operating pattern worth validating first.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Opcient builds software workflows that screen industrial operating data, explain the
              evidence, and route candidate efficiency opportunities to qualified engineers.
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
              Evidence first. Engineering decision second. Savings claims last.
            </p>
            <p className="mt-4 text-sm leading-6 text-neutral-400">
              The business value is disciplined prioritisation: showing what to investigate, what the
              data does not prove, and what validation is needed before action.
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
              ["System risk", "Two assets can trade duty, so a local drop is not automatically a system improvement."],
              ["Schedule risk", "A time-of-day pattern can focus review before anyone labels consumption waste."],
              ["Context risk", "A long history still needs equipment purpose, output, and meter boundary."],
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
                Three studies, three signals a business can understand quickly.
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
              ["Decision support", "Candidate patterns are packaged with the evidence and limitation behind them."],
              ["Reproducibility", "Source, quality rules, denominator choices, and assumptions stay visible."],
              ["Post-change monitoring", "Approved interventions can be monitored without pretending correlation is proof."],
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
