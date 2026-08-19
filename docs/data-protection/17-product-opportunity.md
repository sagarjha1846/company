# Part 17 — The product opportunity: a two-sided consent layer

Working name: **Sammati** (सहमति, "consent"). Name needs trademark clearance — several adjacent
marks are in use.

This part turns the study into a business thesis. It has one structural insight at its centre:
**Indian law creates a company that is legally obliged to serve both sides of the data
relationship at once.** That is normally an unresolvable conflict of interest. Here it is a
statutory design.

---

## 1. The insight

Under S.6(7)–(9) and Rule 4, a **Consent Manager** is registered with the Data Protection
Board, is integrated by **Data Fiduciaries**, and is **accountable to the Data Principal** —
the individual — not to the Fiduciary that pays it. It routes consent without reading the data.

So the same entity can legitimately:

- sell infrastructure to **the company** (Meta, a bank, a hospital, an e-commerce platform), and
- act as the fiduciary of **the person who uses that company**,

without the conflict that would sink an ordinary vendor. No other jurisdiction has legislated
this. It is the single most interesting business fact in the entire DPDP framework.

---

## 2. Why now — the clock is the go-to-market plan

| Date | Event | What it creates |
|---|---|---|
| **13 Nov 2025** | Rules notified; Board constituted in law | Category legitimacy; budgets start moving |
| **Now → Nov 2026** | Consent flows being rebuilt across the market | The window to become the default integration |
| **13 Nov 2026** | **Rule 4 commences** — Consent Manager registration opens | The licence itself becomes available |
| **13 May 2027** | Full substantive compliance | Hard forcing function for every Fiduciary |
| **Proposed** | MeitY's Jan 2026 plan to move **SDFs to 13 Nov 2026** | Pulls the largest buyers forward by six months |

Two asymmetries make this an unusually good moment. First, **the registrar does not exist yet**
— the Board has no members — so nobody can be first-to-register, only first-to-be-ready.
Second, **64% of Indian organisations have no compliance budget allocated** and only 18% have
costed it (EY India 2026), so the buying wave has not yet broken.

---

## 3. Who is already here

### 3.1 The Fiduciary side — crowded and consolidating

| Player | Position | Signal |
|---|---|---|
| **Privy by IDfy** | The one to beat in India | **Won MeitY's "Code for Consent" challenge** (declared winner March 2026); **$53M Series F** in Feb 2026; 500+ enterprise clients, 400+ connectors; $62.7M raised in total |
| **Securiti** | Global data-command-centre incumbent | $156M raised; **acquired by Veeam in December 2025** — the category is now a feature of a data-infrastructure roadmap |
| **Concur, Zoop, Redacto (VertexTech), Aurelion, Jio Platforms** | MeitY shortlist alongside IDfy | Jio is the strategic threat: distribution plus balance sheet |
| **OneTrust, TrustArc, Osano, Didomi, Usercentrics, Ketch, Transcend, DataGrail** | Global CMP/privacy-ops | Strong in GDPR/CCPA; weak on India-specific form — 22 languages, Rule 6 logs, Consent Manager interop |
| **Tsaaro, Seclore, Scrut, Sprinto, Protecto** | Indian consulting and adjacent GRC | Services-led; slower to productise |

**Read:** the compliance-tooling market is already contested and being rolled up. A pure
"DPDP compliance SaaS" entrant in 2026 is late.

### 3.2 The individual side — thin, and consolidating too

| Player | Position | Signal |
|---|---|---|
| **DeleteMe + Permission Slip** | The consumer benchmark | DeleteMe **acquired Permission Slip from Consumer Reports on 30 July 2026**; Permission Slip has run **~5 million privacy requests across 400+ companies** since 2022 |
| **Incogni, Optery** | Data-broker removal, subscription | Narrow scope: brokers, not the services people actually use |
| **Mine** | Data footprint discovery | Freemium; monetisation still forming |
| **India** | **Effectively nobody** | No consumer-facing data-rights product built for Indian law, in Indian languages, at Indian price points |

**Read:** the consumer category is proven — five million requests is real demand — but it is
built for the US broker ecosystem. India's version does not exist, and India's law gives it a
statutory hook the US version never had.

### 3.3 The gap

Nobody is building **one ledger with two faces**: enterprise consent infrastructure on one
side, a consumer rights app on the other, joined by the statutory Consent Manager licence.
The incumbents are structurally single-sided — Privy and Securiti sell to the company; DeleteMe
and Incogni sell to the person. The Indian statute is the only place where selling to both is
not a conflict.

---

## 4. The product

**One spine: the consent ledger.** An append-only, machine-readable record of every consent
artefact — purpose ID, notice version hash, timestamp, language served, capture surface,
affirmative action taken, withdrawal events, and every downstream sharing event. Data-blind by
construction: it holds *consent and metadata*, never the personal data itself.

Everything else is a surface on that spine.

### 4.1 Side A — for the Data Fiduciary (*the Meta*)

The buyer is the DPO, CISO, GC or Head of Growth at a company facing 13 May 2027.

1. **Notice service.** Renders standalone, itemised, per-purpose notices in **English + 22
   Eighth Schedule languages** from a structured purpose registry, with versioning and hashes.
   Solves the single most under-estimated build in the Act.
2. **Consent SDKs** for web, Android, iOS and server, with withdrawal parity enforced in the
   component — you cannot ship a one-tap accept with a five-step withdrawal.
3. **Purpose and lawful-basis registry.** Every data element mapped to S.6 consent or a named
   S.7 legitimate use, with the S.7(a)/S.7(i) boundary flagged for review. This doubles as the
   GDPR Article 30 record.
4. **Rights fulfilment.** Access summary *including the S.11 recipient ledger* — the part every
   competitor under-builds because it requires actual sharing telemetry — plus correction,
   erasure and **nomination** (S.14), which nobody supports today.
5. **Retention and erasure engine.** Field-level statutory retention map (KYC 5y, PMLA 5y, SEBI
   5–8y, IRDAI tails, IT Rules 180d), purpose-expiry deletion, and the **Third Schedule 3-year
   inactivity clock with the 48-hour pre-erasure notice** for large e-commerce, gaming and
   social platforms.
6. **Breach console.** Two decision trees (CERT-In listed incident vs. any personal data
   breach), the pre-built affected-user query, and the three clocks — 6 hours, without delay,
   72 hours — with templates and an evidence pack.
7. **SDF pack.** Annual DPIA workflow, independent-audit evidence room, algorithmic
   due-diligence register for Rule 13, and a **localisation switch** that can pin a notified
   data category to India on short notice.

### 4.2 Side B — for the Data Principal (*the person who uses Meta*)

The user is an ordinary Indian internet user. The product must work in their language, on a
low-end Android device, and be free.

1. **One place to see every consent you have given** across every integrated Fiduciary — what
   data, for what purpose, since when.
2. **Withdraw in one tap**, with the withdrawal propagating to the Fiduciary and its processors
   under S.6(6) — and a receipt.
3. **Exercise rights without writing an email**: access, correction, erasure, and the S.13
   grievance step that S.13(3) makes a mandatory precondition to complaining to the Board.
   Track the clock against the Fiduciary's own published response period.
4. **Nominate** someone to hold your rights if you die or are incapacitated (S.14) — a
   genuinely novel feature nobody has shipped.
5. **Breach inbox.** Every R.7 notification you receive, in plain language, in your language,
   with the safety steps you can actually take.
6. **Children's controls** for parents: a single place to give and revoke verifiable parental
   consent, with a view of every service holding a child's data.
7. **Escalation.** When a Fiduciary misses its published SLA, a one-tap, pre-populated complaint
   to the Board — with the S.13(3) precondition already evidenced.

### 4.3 Why the two sides make each other stronger

- **The user side is the moat.** Consent intermediation has network effects: the useful Consent
  Manager is the one users already have and Fiduciaries already integrate. Consumer adoption is
  the hard half and the defensible half.
- **The Fiduciary side pays for it.** Enterprise contracts fund a free consumer product.
- **Each side sells the other.** Every consent screen rendered by Side A is a distribution
  surface for Side B: *"manage this later in your consent wallet."* Every user on Side B is a
  reason for the next Fiduciary to integrate.
- **The statute resolves the conflict.** Rule 4 makes accountability to the individual a
  registration condition — so the thing that would normally look like double-dealing is the
  licence requirement.

---

## 5. Business model

| Line | Who pays | Basis |
|---|---|---|
| **Consent infrastructure** | Fiduciary | Platform fee + per-MAU consent volume |
| **Notice localisation** | Fiduciary | Per purpose-set, per language |
| **Rights fulfilment** | Fiduciary | Per request, with a bundled floor |
| **Breach console + retainer** | Fiduciary | Annual; priced against the ₹200/250 crore tiers |
| **SDF pack** | Fiduciary | Premium tier — the highest-willingness-to-pay segment |
| **Consumer app** | **Free** | Free is strategic, not charitable: adoption is the moat |
| **Consumer premium** (later) | Individual | Broker removal, footprint discovery, family controls |

**Never monetise the individual's data.** Not because it is unattractive, but because the
statutory duty runs to them and the whole thesis dies the day that is compromised. Say it in
the registration filing and in the app.

---

## 6. Go to market

**Phase 1 — now to Nov 2026: earn the right to be the default.**
Sell the Fiduciary side to mid-market BFSI, health tech, edtech and D2C — the segments with a
hard deadline, real exposure and no in-house privacy team. Lead with **Rule 6 controls and the
breach console**, because they carry the ₹250 crore and ₹200 crore tiers and are the easiest
sale. Publish the interoperability spec openly.

**Phase 2 — Rule 4 opens: register.**
₹2 crore net worth, Indian incorporation, fit-and-proper, published business model. File on day
one. Expect the Board to be slow; being ready is the differentiator, not being fast.

**Phase 3 — 2027: turn on the consumer side.**
Launch inside the consent screens already deployed. Distribution is the installed base, not paid
acquisition.

**Wedge segments, in order:** (1) mid-market BFSI — the most regulated, most afraid, most able
to pay; (2) health tech — highest harm, weakest security maturity; (3) edtech — the ₹200 crore
children's tier and the hardest consent problem; (4) D2C and e-commerce — the Third Schedule
inactivity clock is a forcing function nobody has built for.

---

## 7. How you lose

| Risk | Severity | Mitigation |
|---|---|---|
| **The Board never functions**, so registration cannot happen | High | Build so the product works standalone; the licence is upside, not the business |
| **Jio launches** with distribution and a balance sheet | High | Be the **neutral** Consent Manager — a consent broker owned by a data conglomerate has an obvious problem, and enterprises will want an alternative |
| **Privy/IDfy compounds** its MeitY win and $53M | High | Do not fight on compliance tooling; win on the **consumer side they have not built** |
| **Consumers do not care** | High | Assume they do not. Adoption comes from consent screens, breach notices and account deletion — moments where the user is already engaged |
| **Deadlines slip** | Medium | Diversify into the sectoral stack — RBI, SEBI, IRDAI, CERT-In obligations do not slip |
| **Category gets absorbed** into data platforms, as with Veeam/Securiti | Medium | The consumer relationship is not absorbable by an infrastructure vendor |
| **Trust failure** — one breach of the consent ledger | **Fatal** | Data-blind architecture, Rule 6 controls held to a higher standard than customers', published audits |

---

## 8. MVP — what to build in the first 90 days

1. **The purpose registry and consent ledger.** Append-only, exportable, hash-versioned.
2. **The notice renderer** with 22-language output from a structured purpose definition. This
   alone is a sellable product and nobody does it well.
3. **A web + Android consent SDK** with withdrawal parity enforced in the component.
4. **The breach console**, seeded with both decision trees and the three-clock timer.
5. **A read-only consumer view** — a link from any consent screen showing the person what they
   consented to. Not the full app; just the surface that proves the two-sided thesis and starts
   the network effect.

Everything else — rights fulfilment automation, retention engine, SDF pack, the full consumer
app — follows the statutory calendar in [Part 2](02-dpdp-rules-2025.md).

---

## Citations

- DPDP Act, 2023, S.6(7)–(9), S.11–S.14; DPDP Rules, 2025, Rules 3, 4, 6, 7, 8, 13, 14 and the First and Third Schedules
- [Elets BFSI, "MeitY Picks Six Firms to Lead Digital Consent Management for DPDP Act"](https://bfsi.eletsonline.com/meity-picks-six-firms-to-lead-digital-consent-management-for-dpdp-act/)
- [Privy by IDfy — DPDP compliance platform](https://www.idfy.com/privy/dpdp-compliance-platform/) · [Business Standard, "IDfy's Privy unveils Data Compass"](https://www.business-standard.com/content/press-releases-ani/idfy-s-privy-unveils-data-compass-india-s-first-dpdpa-focused-data-governance-solution-125052100014_1.html) · [FinTech Global, "Identity verification firm IDfy secures $53m"](https://fintech.global/2026/02/16/identity-verification-firm-idfy-secures-53m/)
- [Tracxn — Securiti company profile and funding](https://tracxn.com/d/companies/securiti/__2bEXKaMRQPklus-9BMXDKzYmzyB84JfN0nvhaci1Tjk) (Veeam acquisition, December 2025)
- [GlobeNewswire, "DeleteMe Acquires Permission Slip from Consumer Reports"](https://www.globenewswire.com/news-release/2026/07/30/3336081/0/en/deleteme-acquires-permission-slip-from-consumer-reports-to-expand-consumer-privacy-and-data-rights-protection.html) · [Consumer Reports, "Permission Slip's Next Chapter with DeleteMe"](https://innovation.consumerreports.org/permission-slips-next-chapter-with-deleteme/)
- [Consumer Reports, "Authorized Agents Can Make It Easier to Delete Your Data"](https://www.consumerreports.org/electronics/privacy/authorized-agents-plan-to-make-it-easier-to-delete-your-data-a8655835448/)
- [GRC3, "DPDP Compliance Software in India — 2026 Buyer's Guide"](https://grc3.io/blog/dpdp/dpdp-compliance-software-india) · [Seqrite, "Top DPDPA Compliance Platforms in India for 2026"](https://www.seqrite.com/blog/top-dpdpa-compliance-platforms-india-2026/)
- [Sahamati, "Reconciling the Account Aggregator and Consent Manager Frameworks"](https://sahamati.org.in/reconciling-the-account-aggregator-and-consent-manager-frameworks/)
- EY India 2026 DPDP readiness survey, as reported in market commentary
