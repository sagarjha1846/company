# Part 11 — DPDP ↔ GDPR crosswalk

For teams running dual compliance. Each row maps an Indian obligation to its nearest GDPR
equivalent, states the **delta** that actually changes engineering or legal work, and says
which single control satisfies both.

Read the deltas, not the mappings. Where a row says "**India stricter**", a GDPR-compliant
control is *not* sufficient. Where it says "**EU stricter**", building for the EU covers India.

---

## 1. Scope and definitions

| Subject | DPDP | GDPR | Delta | Build once? |
|---|---|---|---|---|
| Material scope | S.3 — **digital** personal data only (incl. digitised) | Art. 2 — automated **and** structured manual filing systems | **EU broader.** Paper files and unstructured manual records sit outside the DPDP Act | Build to EU; India is a subset |
| Territorial scope | S.3(b) — offering goods or services to people in India | Art. 3(2) — offering **or monitoring behaviour** | **EU broader.** A pure profiling/analytics operation with no offering is outside S.3(b) | Build to EU |
| Public-domain data | S.3(c)(ii) — **outside the Act entirely** | No equivalent; public availability affects balancing only | **India far more permissive.** The single biggest divergence for AI corpora and scraping | Track separately; document provenance |
| Personal data | S.2(t) — identifiable by or in relation to the data | Art. 4(1) + Recital 26; *Breyer*; *EDPS v SRB* | Substantively similar; **India has no anonymisation or pseudonymisation definition** | Adopt EU test, document it |
| Controller / processor | Data Fiduciary / Data Processor | Controller / Processor | Same concept, different name | One model |
| Sensitive data | **None** | Art. 9 special categories | **EU stricter** | Build to EU |

## 2. Lawfulness, notice and consent

| Subject | DPDP | GDPR | Delta | Build once? |
|---|---|---|---|---|
| Lawful bases | S.4, S.6, S.7 — consent + 9 legitimate uses | Art. 6 — six bases incl. legitimate interests | **India narrower.** No legitimate interests, no contractual necessity | **No.** India needs consent where the EU uses Art. 6(1)(b)/(f) |
| Consent standard | S.6(1) — free, specific, informed, **unconditional**, unambiguous; void beyond necessity | Art. 4(11), Art. 7 | **India stricter** on paper — "unconditional" and automatic voiding have no GDPR analogue | Build to India |
| Withdrawal | S.6(4)–(6) — as easy as giving; processing must cease | Art. 7(3) — as easy as giving | Similar; India adds an express duty to make processors cease | Build to India |
| Notice content | S.5 + R.3 — itemised data and purposes, rights, complaint route; **standalone**; 22 languages | Arts. 13–14 — longer content list (retention, recipients, transfers, source, ADM) | **Split.** GDPR requires *more content*; India requires a *standalone itemised* presentation in 22 languages | Merge: GDPR content, Indian form |
| Retrospective notice | S.5(2) — re-notice pre-commencement consents | No equivalent | **India only** | India-specific task |
| Consent records | R.4 (via Consent Manager); implicit generally | Art. 7(1) — demonstrate consent | Similar in effect | One consent ledger |
| Consent intermediation | S.6(7)–(9), R.4 — **registered Consent Managers** | No equivalent | **India only** | India-specific integration |

## 3. Obligations of the organisation

| Subject | DPDP | GDPR | Delta | Build once? |
|---|---|---|---|---|
| Accountability for processors | S.8(1)–(2) | Arts. 24, 28 | Same | One DPA template + register |
| Security | S.8(5) + **R.6 — named controls**: encryption/tokenisation, access control, **≥1-year access logs**, backups, flow-down | Art. 32 — risk-based, unnamed | **India more prescriptive.** Art. 32 compliance does not prove R.6 compliance | Build to India; it satisfies Art. 32 |
| Breach → regulator | R.7 — without delay + particulars in 72h, **no threshold** | Art. 33 — 72h **where risk likely** | **India stricter** | Build to India |
| Breach → individuals | R.7 — **without delay, every breach** | Art. 34 — only where **high risk** | **India far stricter** | Build to India |
| Records of processing | SDF only (implicit) | Art. 30 | **EU stricter** | Build Art. 30 record; it feeds R.3 notices |
| DPO | S.10(a) — SDF only; **India-resident, reports to the board** | Art. 37 — risk-based; may be external, no residency rule | **Different, not comparable.** India's is narrower in scope but stricter in form | Nominate an India-resident candidate |
| DPIA | R.13 — SDF only, **annual** | Art. 35 — high-risk processing, event-driven | **Different cadence.** India is calendar-driven; the EU is trigger-driven | Run EU-style DPIAs, add an annual cycle if SDF |
| Independent audit | R.13 — SDF only, **annual, report to Board** | No equivalent | **India only** | India-specific |
| Privacy by design | **None** | Art. 25 | **EU only** | Build to EU |
| Algorithmic due diligence | R.13 — SDF only, undefined | Not in GDPR (AI Act separately) | **India only** in data law | Document a method |
| Contact publication | R.9 — publish DPO or answering person | Art. 13(1)(b) | Similar | One page |
| Grievance mechanism | S.8(10), S.13, R.14 — **published response period**; mandatory first step | Art. 12 + Art. 77 (complain direct to DPA) | **India adds a precondition**; the EU does not | Build India's; it satisfies the EU |

## 4. Rights

| Right | DPDP | GDPR | Delta |
|---|---|---|---|
| Information | S.5 | Arts. 13–14 | EU content list longer |
| Access | S.11 — **summary** + recipients | Art. 15 — **copy** + retention, source, ADM, transfers | **EU stricter** |
| Rectification | S.12 | Art. 16 | Same |
| Erasure | S.12 | Art. 17 | Similar; GDPR has express carve-outs (expression, public interest) India lacks |
| Restriction | — | Art. 18 | **EU only** |
| Portability | — | Art. 20 | **EU only** |
| Objection | — | Art. 21 | **EU only** |
| Automated decisions | — | Art. 22 | **EU only** |
| Nomination | **S.14** | — | **India only** |
| Complaint to regulator | S.13(3) — **after** internal grievance | Art. 77 — direct | India adds a step |
| Compensation | — | Art. 82 | **EU only** |
| Duties on the individual | **S.15 — ₹10,000 penalty** | — | **India only** |

**Single build:** a request-handling system that returns an Art. 15 copy **plus** the S.11
recipient ledger, supports rectification, erasure, restriction, objection, portability and
nomination, and records the response against a published SLA. That covers both, plus Brazil,
Korea and the US states.

## 5. Transfers, exemptions and enforcement

| Subject | DPDP | GDPR | Delta |
|---|---|---|---|
| Transfers | S.16 + R.15 — permitted unless restricted | Ch. V — prohibited unless a mechanism applies | **EU far stricter.** No SCC apparatus is needed for India |
| Localisation | R.13 — SDF only, notified categories | None | **India only** |
| Research exemption | R.16 — **exempt from the whole Act**, no individual decisions | Art. 89 — stays in scope, derogations from specific rights | **India far broader** |
| Journalism | **None** | Art. 85 — member states must reconcile with expression | **EU only.** A live constitutional issue in India |
| State exemptions | S.17(2)(a) — plenary, by notification | Art. 23 — necessity, proportionality, specified safeguards | **EU far stricter on the carve-out** |
| Regulator | Board — Government-appointed, 2-year renewable | DPAs — Charter-level independence | Structural |
| Penalties | Schedule — absolute caps to ₹250 crore | Art. 83 — €20m / 4% worldwide | Different shape; EU scales with size |
| Private action | None; S.39 bars civil courts | Arts. 79, 80, 82 | **EU only** |

---

## 6. The seven India-only builds

If you already run a mature GDPR programme, these are the gaps it will **not** cover:

1. **Standalone itemised notices in 22 Eighth Schedule languages** (R.3).
2. **Consent as the basis for processing the EU runs on legitimate interests or contract** —
   analytics, personalisation, product improvement, most fraud analytics (S.4, S.6, S.7).
3. **Rule 6's named controls**, particularly the **one-year access-log floor** and mandatory
   encryption/tokenisation.
4. **No-threshold breach notification to every affected individual, without delay** (R.7) —
   plus the separate **CERT-In six-hour** report.
5. **Verifiable parental consent for everyone under 18**, with the tracking and targeted-ads
   ban (S.9, R.10).
6. **Consent Manager integration** from 13 November 2026 (R.4).
7. **The right to nominate** (S.14).

## 7. The four EU-only builds India does not require

Build them anyway if you serve the EU, UK, Brazil, Korea or California — and note that the
first two are the ones most likely to arrive in India by amendment:

1. **Portability** (Art. 20).
2. **Automated-decision rights** (Art. 22).
3. **Privacy by design and by default** (Art. 25).
4. **Restriction and objection** (Arts. 18, 21).
