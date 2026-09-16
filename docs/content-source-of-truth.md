# Opcient website content source of truth

This document is the editorial and factual reference for the public Opcient website. Future page
edits must follow it. If a new analysis changes a number or interpretation, update this document
first, then update the affected pages.

## Business position

Opcient is a software and industrial-data workflow business. It partners with industrial engineering,
controls, maintenance, and operations teams.

### Locked public direction

Current approved homepage headline:

> Same output. Less energy. Evidence first.

This is the spine of the public positioning. Preserve it unless the user explicitly changes direction.
It communicates the business objective, the operational constraint, and the evidence standard in one
line.

Supporting tone:

- business-first and direct;
- no filler language or clever wording that does not clarify the offer;
- strong visuals where numbers matter;
- honest limits and validation requirements;
- no fake savings claims, fake ROI, or unsupported fault claims;
- software as the evidence/workflow partner, not the industrial engineer.

Visual standard:

- graphics should explain the decision meaning of a number, not decorate the page;
- colour is allowed and encouraged when it clarifies business meaning;
- red may signal risk, missing data, overclaim danger, or "do not read this in isolation";
- amber may signal review priority or a pattern that deserves investigation;
- green may signal usable evidence, lower reference load, or acceptable coverage;
- every visual must be understandable by a business reader who is not fresh in statistics or theory;
- if a visual does not improve decision clarity, remove it.

Opcient provides:

- software engineering and data workflows;
- quality-aware interval analysis;
- reproducible screening and reporting;
- evidence presentation for professional review;
- monitoring and workflow automation after an intervention is approved.

Opcient does not present itself as an industrial engineering authority or replace qualified plant,
controls, maintenance, or safety professionals.

## Core working framework

### Screen → Explain → Validate

1. **Screen**: identify unusual operating patterns and preserve the full data denominator.
2. **Explain**: show the time window, signals, comparisons, source, quality, assumptions, and limitations.
3. **Validate**: qualified engineers and operators decide what the pattern means and whether action is safe.

This is an evidence and triage workflow. It is not autonomous fault diagnosis or autonomous plant control.

## Approved language

Prefer:

- candidate anomaly;
- unusual operating behaviour;
- operating pattern;
- candidate efficiency opportunity;
- worth investigating;
- engineer review;
- site validation;
- indicative or illustrative scenario;
- observed demand or observed energy.

Do not state or imply without site evidence:

- confirmed waste;
- confirmed fault;
- guaranteed saving;
- avoidable energy;
- annual saving;
- payback or ROI;
- production impact;
- verified efficiency improvement.

## Source attribution

The public analyses use the processed public release by Flynn, Murphy, Walsh and Riordan:

- Zenodo v1.0;
- DOI: `10.5281/zenodo.19180972`;
- associated Data paper DOI: `10.3390/data11050101`;
- licence: CC BY 4.0.

The release contains processed Gold records and quality fields. Original high-frequency Bronze and
Silver sensor readings are not supplied. We did not rerun the provider’s original reading checks from
raw sensor observations.

## Data interpretation rules

- L1/L2/L3 are simultaneous electrical phases, not consecutive periods.
- A normal UTC day has 96 quarter-hour intervals.
- Europe/Dublin local civil days can have 92 or 100 intervals at daylight-saving transitions.
- `SecondsReliable / 900 * 100` is reliable coverage for one phase/window.
- The provider’s `IsReliableWindow` uses a default 720-second threshold (80%).
- The project’s 891-second threshold (99%) is a provisional conservative analysis choice, not a standard or certification.
- Whole-asset reliability requires all three phases to be assessed separately.
- `ALL` coverage can hide a missing or unreliable phase because it sums/caps phase coverage.
- `ALL AvgPower_kW_15m` is a weighted mean across phases, not total asset power.
- `Energy_kWh_15m` is already kWh accumulated over reliable portions; do not rescale or fill it.
- Missing intervals remain in expected-span denominators.
- Fact-span coverage does not prove continuous commissioning history.
- Summing asset meters is not automatically an independent factory-consumption total.

## Case-study naming

### Study 01: compressed-air system

Public name: **Compressed-air system: Compressor A + Compressor B**.

Technical labels: `comp_a`, `comp_b`.

Why they are together: duty can transfer between compressors. A reduction in one compressor’s
electrical demand does not automatically mean a reduction in total compressed-air-system demand.

Established observations:

- approximate demand correlation: `-0.767`;
- common strict-quality operating-pattern analysis is appropriate for exploratory screening;
- alternating duty, simultaneous demand, schedules, transitions, and continuous runs are candidate
  patterns for review;
- one compressor appearing near zero is not proof of shutdown, no service, or savings.

Required validation includes pressure, airflow, compressor states, controls, production schedule,
receiver/network arrangement, maintenance records, and service constraints.

### Study 02: industrial extraction asset

Public name: **Industrial extraction asset A**.

Technical label: `ex_a`.

The provider category is `HVAC_AirExtraction`. This may indicate an extraction or fan-driven system,
but the exact equipment, purpose, meter boundary, and control arrangement are not confirmed.

Established observations:

- observed-span completeness: `98.662%`;
- strict pass rate among recorded intervals: `99.863%`;
- daytime/weekday demand is materially higher than overnight/weekend demand;
- this schedule shape can prioritise engineering review but does not prove avoidable consumption.

### Study 03: material-handling asset

Public name: **Material-handling asset A**.

Technical label: `mh_a`.

The provider category is `Automation_Handling`. The exact equipment, process function, meter boundary,
and control arrangement are not established by the public release.

Established observations:

- observed-span completeness: `98.351%`;
- strict pass rate among recorded intervals: `99.887%`;
- the longer history gives more temporal context;
- lower overnight/weekend demand is an observation, not proof of waste or an intervention.

## Cross-study hypothesis

The three studies support this working hypothesis:

> The commercial value is not merely finding the biggest energy users. It is helping an engineering
> team reduce energy pursuit risk while preserving output: what changed, what it could mean, what it
> does not prove, and what must be validated before action.

The studies provide three perspectives:

- coupled-system perspective: assets can interact;
- schedule perspective: time patterns can focus review;
- context perspective: longer history does not replace equipment knowledge.

Raw kW values must not be compared as if the assets have the same function, scale, production role, or
meter boundary.

## Business communication standard

Every case study should answer plainly:

1. What was measured?
2. Where did the data come from?
3. What pattern was observed?
4. What could the pattern mean?
5. What does it not prove?
6. What would an engineer need to validate next?
7. What business decision could this help prioritise?

The website should communicate commercial relevance without hiding uncertainty. A useful result may be
that it narrows an investigation, exposes a data gap, prevents a weak savings claim, or gives an
engineering team a reproducible starting point.
