# Part 15 — The Consent Manager: India's institutional bet

The Consent Manager is the most original thing in the DPDP framework, and the one on which the
whole consent-first design depends. Rule 4 commences on **13 November 2026**. This part sets out
what the institution is, where it came from, who is building it, and the structural problem
sitting at the centre of it.

---

## 1. Why it exists

India built a regime with **two lawful bases** and no legitimate-interests ground
([Part 4](04-comparative-matrices.md)). Almost every commercial purpose therefore runs on
consent, and every consent must be free, specific, informed, unconditional and unambiguous,
preceded by a **standalone itemised notice in one of 22 languages**, and as easy to withdraw as
to give.

At Indian internet scale, that design collapses into click-through theatre unless something
absorbs the load. The Consent Manager is that something: a **registered intermediary through
which a Data Principal gives, manages, reviews and withdraws consent across many Data
Fiduciaries from one place** (S.6(7)–(9), R.4, First Schedule).

No other data protection statute institutionalises this. It is India's principal contribution
to the field, and it will be judged on whether it works.

---

## 2. What a Consent Manager must be

**To register** (First Schedule, Part A):

| Condition | Detail |
|---|---|
| Incorporation | A **company incorporated in India** |
| Net worth | At least **₹2 crore** |
| Capability | Demonstrated technical, operational and financial capacity to operate an **interoperable** consent platform across Fiduciaries |
| Fit and proper | Promoters and directors assessed; certification required |
| Transparency | The business model and terms must be published |
| Registration | Granted by, and revocable by, the **Data Protection Board** |

**Design constraint — data-blind by default.** The Consent Manager routes and records consent;
it is not a data store. The architecture mirrors the "sealed pipe" model already used in
financial services, and it is what makes the institution trustworthy: a consent broker that
could read the data would be a single point of catastrophic aggregation.

**Obligations** (First Schedule, Part B) include: enabling give / manage / review / withdraw;
maintaining **machine-readable consent, notice and data-sharing records** available to the Data
Principal — reported retention of a **minimum of seven years** — under encryption, access
control and incident-response duties; accountability **to the Data Principal**, not to the
Fiduciary that pays; and Board oversight extending to a change-of-control regime.

That last point is the constitutional core of the institution. **The Consent Manager's duty runs
to the individual**, which is what distinguishes it from a vendor consent-management platform
(a CMP) sold to a Fiduciary. Both may be called "consent management"; only one is a statutory
fiduciary of the user.

---

## 3. Where it came from: DEPA and Account Aggregators

The Consent Manager generalises **DEPA** — the Data Empowerment and Protection Architecture —
whose financial-sector implementation is the RBI-regulated **Account Aggregator** framework.
NBFC-AAs orchestrate consented, purpose-specific data flows between financial institutions as a
**data-blind conduit**, never storing the data. The ecosystem is live: **17 NBFC-AAs hold
operational licences and one holds an in-principle licence**.

This is the strongest argument that the DPDP design is achievable: India has already run this
architecture at national scale in the hardest sector.

**But it also creates a genuine conflict.** A fintech will shortly sit inside **two consent
regimes at once** — the RBI's AA framework for financial information, and the DPDP Consent
Manager framework for personal data — with different regulators, registration regimes,
consent-artefact formats and audit trails, overlapping in scope. Commentators have called this
the Account Aggregator–Consent Manager paradox, and it is unresolved. Neither MeitY nor the RBI
has published a reconciliation.

**Practical reading for fintechs:** assume both apply, map which data elements fall under which
framework, and design consent artefacts that can satisfy the stricter of the two rather than
building twice.

---

## 4. Who is building it

MeitY ran a consent-management challenge and shortlisted **six firms**:

| Entity | Base |
|---|---|
| **Jio Platforms** | Mumbai |
| **IDfy** (Baldor Technologies) | Mumbai |
| **VertexTech Labs** (Redacto) | Bengaluru |
| **Zoop** (Quagga Tech) | Pune |
| **Concur — Consent Manager** | Mumbai |
| **Aurelion Future Forge** | Chennai |

Alongside them, a wider vendor market is forming — Perfios launched a DPDP suite, Cross
Identity a consent portal, and a long tail of CMP vendors is repositioning. **Most of these are
not Consent Managers in the statutory sense**; they are compliance tooling sold to Fiduciaries.
Buyers should be clear which they are purchasing, because only a registered Consent Manager
discharges the S.6(7) function.

**The market-structure question.** A ₹2 crore net-worth bar plus interoperability and
fit-and-proper requirements is not a high wall for a large platform and is a meaningful one for
a startup. Combined with the network effects inherent in consent intermediation — the useful
Consent Manager is the one every Fiduciary already integrates with — the plausible outcome is
**a small number of large players**, with Jio Platforms the obvious anchor. That is precisely
the concentration pattern the GDPR literature documented in the vendor market
([Part 10](10-economics-and-watchlist.md)), arriving here by design rather than by accident.

Whether a consent broker owned by one of India's largest data-collecting conglomerates can
discharge a statutory duty **to the individual** is a question the Board will have to answer
when it grants the first registrations.

---

## 5. The structural problem

**Rule 4 commences on 13 November 2026. Registration is granted by the Data Protection Board.
The Board has no Chairperson and no Members** — MeitY invited applications only in May 2026 —
and the sections conferring its functions and procedure (S.27–S.34) have **not been commenced**
([Part 2](02-dpdp-rules-2025.md)).

So on the date the Consent Manager framework switches on, there may be no functioning body able
to register a Consent Manager. Three consequences follow:

1. **The date may slip in practice even if it does not slip in law.** A commenced rule with no
   registrar is a rule that cannot be complied with.
2. **Fiduciaries cannot plan around integration they cannot yet test.** No registered Consent
   Manager means no interoperability specification proven in production, six months before the
   substantive obligations land in May 2027.
3. **The consent-fatigue problem the institution exists to solve remains unsolved** through the
   period when Fiduciaries are building their consent flows — so they will build them without
   it, and retrofit later.

---

## 6. Readiness

Industry forecasts suggest that by 2027 roughly **60–70% of large firms** and **30–40% of
mid-sized companies** will reach full DPDP operational readiness. Large BFSI, telecom and IT
services firms are ahead; mid-market and traditional industry lack the audit trails, retention
systems and infrastructure. Read that alongside EY India's finding that **64% of organisations
have not allocated a compliance budget** ([Part 10](10-economics-and-watchlist.md)).

The implication is uncomfortable and worth stating: **a substantial share of the Indian market
will be non-compliant on 13 May 2027**, not through defiance but through capacity. What happens
then depends entirely on how a newly constituted Board chooses to open its enforcement account —
whether it starts with the largest and most culpable, or with whoever generates the first
complaints.

---

## 7. What to do about it

1. **Decide your posture now** — integrate with Consent Managers, become one, or run your own
   consent capture and integrate later. For most organisations it is the first.
2. **Build your consent ledger to be exportable.** Purpose IDs, notice version hashes,
   timestamps, language served, capture surface, and withdrawal events — in a machine-readable
   form you could hand to a Consent Manager. This is the single design decision that keeps the
   option open.
3. **Do not buy a "consent manager" without checking which thing it is.** A CMP is useful
   tooling; only a registered Consent Manager discharges S.6(7).
4. **If you are in financial services, map the AA/CM overlap explicitly** and design to the
   stricter artefact.
5. **Plan for the registrar not existing on time.** Your consent architecture should work
   standalone and integrate with a Consent Manager later, not depend on one existing.

---

## Citations

- DPDP Act, 2023, S.2(g) and S.6(7)–(9); DPDP Rules, 2025, Rule 4 and the First Schedule
- [AZB & Partners, "Consent Managers under India's DPDP Act and DPDP Rules"](https://www.azbpartners.com/bank/consent-managers-under-indias-dpdp-act-and-dpdp-rules/)
- [Candour Legal, "DPDP Consent Managers: A November 2026 Deadline, But No Regulator Yet"](https://candourlegal.com/dpdp-consent-manager-framework-2026/)
- [Consently, "DPDP Consent Manager Registration: Eligibility, the ₹2 Crore Net Worth Bar, and the Application Checklist"](https://www.consently.in/blog/dpdp-consent-manager-registration-eligibility-checklist)
- [Sahamati, "Reconciling the Account Aggregator and Consent Manager Frameworks"](https://sahamati.org.in/reconciling-the-account-aggregator-and-consent-manager-frameworks/)
- [SCC Online, "Fragmented Consent and Fractured Rights: Resolving the Account Aggregator–Consent Manager Paradox under DPDP Rules"](https://www.scconline.com/blog/post/2026/06/26/account-aggregator-consent-manager-paradox-dpdp-rules-fintech-sector/)
- [NITI Aayog, "Data Empowerment and Protection Architecture — Draft for Discussion"](https://www.niti.gov.in/sites/default/files/2023-03/Data-Empowerment-and-Protection-Architecture-A-Secure-Consent-Based.pdf)
- [Elets BFSI, "MeitY Picks Six Firms to Lead Digital Consent Management for DPDP Act"](https://bfsi.eletsonline.com/meity-picks-six-firms-to-lead-digital-consent-management-for-dpdp-act/)
- [Storyboard18, "DPDP deadline: 10–35% readiness gap pushes Indian organizations to adopt consent managers"](https://www.storyboard18.com/amp/brand-makers/dpdp-deadline-10-35-readiness-gap-pushes-indian-organizations-to-adopt-consent-managers-for-data-governance-84891.htm)
- [Ikigai Law, "Consent Managers in the financial space: Account Aggregators"](https://www.ikigailaw.com/article/230/consent-managers-in-the-financial-space-account-aggregators)
