# Part 6 — From statute to control set

A translation layer: what the DPDP Act and Rules actually require an engineering and product
organisation to build, sequenced by lead time, with the equivalent obligation in other
jurisdictions noted so that one control set can serve multiple regimes.

---

## 1. The eleven control domains

### C1 — Data inventory and lawful-basis register
**Requirement:** implied by S.4–S.6 (you cannot prove a lawful basis you have not recorded) and
required in fact by Rule 3's itemised-notice duty, which is impossible to satisfy without an
element-level inventory.

**Build:** a machine-readable register — one row per personal-data element — carrying: element
name, system of record, purpose(s), lawful basis (S.6 consent / which S.7 ground), retention
trigger, downstream recipients (Processors and other Fiduciaries), and cross-border destination.

**Reuse:** this is also the GDPR Article 30 record, the LGPD register, and the input to US state
data protection assessments. Build it once.

**Test:** can you generate an itemised Rule 3 notice for any product surface directly from the
register? If not, the register is not granular enough.

---

### C2 — Notice and consent capture
**Requirement:** S.5, S.6, Rule 3.

**Build:**
- Notices rendered **standalone**, not embedded in terms of service, with itemised data and
  purposes.
- **22-language** support (Eighth Schedule) plus English, selectable by the user.
- **Per-purpose consent records**: purpose ID, notice version hash, timestamp, capture surface,
  language served, and the affirmative action taken.
- **Withdrawal with parity of ease** — if consent was one tap, withdrawal must be one tap. Model
  withdrawal as a first-class event that fans out to processing halts and Processor notifications
  (S.6(6)).
- **Retrospective notice** for every consent obtained before commencement (S.5(2)).

**Anti-pattern:** a single global "I agree to the privacy policy" checkbox. It fails S.5, S.6(1)
and Rule 3 simultaneously and is void to the extent it over-collects.

---

### C3 — Rule 6 security controls *(highest priority)*
**Requirement:** Rule 6 read with S.8(5) — the ₹250 crore tier.

| Control | Concrete implementation |
|---|---|
| Encryption / tokenisation / masking | Encryption at rest and in transit; tokenise identifiers in analytics and non-production environments; mask in logs and admin UIs |
| Access control | Authentication on every endpoint touching personal data; least-privilege roles; no shared credentials; no credentials in source |
| Logging and monitoring | Access logs for every read/write of personal data, sufficient to detect, investigate and remediate unauthorised access, **retained ≥ 1 year** |
| Backup and continuity | Tested restores; the rule requires continued processing after compromise, not merely backup existence |
| Processor flow-down | Contractual imposition of equivalent controls on every Processor (S.8(2) + Rule 6) |
| Organisational measures | Documented ownership, review cadence, and evidence that the above are observed in practice |

**Why first:** it is the most prescriptive, most auditable, highest-penalty and longest-lead-time
requirement in the framework, and it maps cleanly onto GDPR Art. 32, ISO 27001 Annex A,
SOC 2 CC6, Nigeria's GAID and Saudi PDPL controls. Nothing else in the Act gives this much
compliance leverage per unit of engineering effort.

---

### C4 — Breach detection, response and notification
**Requirement:** S.8(6), Rule 7 — plus CERT-In's 2022 Directions (6-hour reporting).

**Build a single runbook with three clocks:**

| Clock | Obligation |
|---|---|
| **6 hours** | CERT-In report for covered cyber incidents |
| **Without delay** | Board initial intimation **and** notification to every affected Data Principal, in plain language: nature, extent, timing, likely consequences, mitigation taken, safety measures the individual can take, contact point |
| **72 hours** | Detailed particulars to the Board: circumstances leading to the breach, mitigation, findings on cause, remedial measures, and a report on the individual notifications made |

**Design implication:** because there is **no materiality threshold**, the pipeline from
detection to notification must be capable of running frequently and cheaply. Pre-draft the
templates, pre-build the affected-user query path off the C1 register, and pre-agree the
approval chain. A process that requires a legal review meeting per incident will not hold.

---

### C5 — Retention and erasure
**Requirement:** S.8(7), Rule 8, Third Schedule.

**Build:** a retention clock per data element keyed to purpose exhaustion and consent
withdrawal; automated deletion jobs with an auditable record; cascade to backups, caches,
analytics stores, data warehouses and Processor systems. If in a Third Schedule class
(large e-commerce, online gaming, social media), add the **3-year inactivity clock** and the
**48-hour pre-erasure notice with a re-engagement path**.

**Common failure:** deleting from the primary database only. Erasure that leaves the record in a
warehouse, a search index, a CRM or a vendor system is not erasure.

---

### C6 — Data principal rights fulfilment
**Requirement:** S.11–S.14, Rule 14.

**Build:** a published request mechanism (Rule 14 requires publication of both the mechanism and
the response period); identity verification proportionate to the request; and fulfilment paths for
**access** (a summary of data *and* processing activities *and* the identities of every Fiduciary
and Processor the data was shared with, with a description of what was shared — this is the part
teams underestimate, because it requires the C1 register to track actual sharing, not just
intended sharing), **correction/completion/updating**, **erasure**, and **nomination**.

**Forward-compatibility note:** although India grants no portability right, the EU, UK, Brazil,
Korea and most US states do. If you serve any of those markets, build export in a structured,
machine-readable format now.

---

### C7 — Children's data
**Requirement:** S.9, Rules 10–12, Fourth Schedule.

**Build:** an age-determination step; a verifiable-parental-consent flow using held identity
details or a DigiLocker-style virtual token; a hard suppression of behavioural tracking and
targeted advertising for any user under 18; and, if relying on a Fourth Schedule exemption,
documented evidence that you are within the listed entity class **and** the stated processing
scope.

**Decision to take early:** whether to age-gate at all. If your service does not need users under
18, excluding them and documenting the exclusion mechanism is materially cheaper than building
verifiable parental consent — and "confirming that the user is not a child" is itself an exempt
purpose under Fourth Schedule Part B.

---

### C8 — Processor and vendor governance
**Requirement:** S.8(1)–(2), Rule 6.

**Build:** a Processor register; a standard data processing addendum imposing Rule 6-equivalent
controls, breach notification upstream fast enough to meet *your* "without delay" clock,
erasure-on-instruction, sub-processor consent, and audit rights. Remember S.8(1): you remain
liable for your Processor regardless of what the contract says.

---

### C9 — Cross-border transfer posture
**Requirement:** S.16, Rule 15, Rule 13 (SDF localisation).

**Build:** a destination map per data element (from C1); the ability to **re-route or localise a
data category on notice**, since both the restricted-country list and the SDF localisation
categories are unbounded executive powers; and a check for sector-specific localisation (RBI
payment data, IRDAI, telecom, CERT-In log storage).

**Do not build:** an SCC/adequacy apparatus for India. It has no legal function here. Do build one
if you touch EU, UK, Brazilian or Chinese data.

---

### C10 — SDF readiness
**Requirement:** S.10, Rule 13. Applies only on Government notification — but notification gives
little lead time.

**Pre-position:** identify who would be the India-resident DPO reporting to the board; identify a
candidate independent auditor; run a first DPIA voluntarily on the highest-risk processing;
document an algorithmic due-diligence method for any ranking, recommendation, scoring or
moderation system. A company that has done these four things can absorb an SDF notification in
weeks rather than quarters.

---

### C11 — Governance and evidence
**Requirement:** implied throughout; explicit for SDFs.

**Build:** named accountable owner; published contact per Rule 9; grievance mechanism with a
published response period per S.13 and Rule 14 (note S.13(3) makes this the mandatory first
step, so a weak grievance process directly increases Board complaint volume); training; and an
evidence pack — policies, notices with version history, consent records, DPIAs, audit reports,
incident records — because the Board's inquiry powers under S.28 are civil-court powers.

---

## 2. Sequencing

| Priority | Domain | Rationale |
|---|---|---|
| 1 | **C3 Rule 6 controls** | Highest penalty tier, most prescriptive, longest lead time, most reusable across regimes |
| 2 | **C1 inventory** | Every other control depends on it |
| 3 | **C4 breach runbook** | Second-highest penalty tier; must exist before an incident, not after |
| 4 | **C2 notice and consent** | Largest product/design surface; needs the longest design-and-localisation runway |
| 5 | **C5 retention and erasure** | Deep data-plumbing work across every store |
| 6 | **C6 rights fulfilment** | Buildable once C1 exists |
| 7 | **C7 children** | Scope decision first, build second |
| 8 | **C8 vendors** | Contract cycle times are long; start paper early |
| 9 | **C9 transfers** | Low current obligation, high optionality value |
| 10 | **C10 SDF readiness** | Only if plausibly in scope |
| 11 | **C11 governance** | Continuous |

---

## 3. Multi-jurisdiction reuse

If you build to the **union of India + EU**, you cover most of the world:

| Build for | Also satisfies |
|---|---|
| Rule 6 prescriptive controls | GDPR Art. 32, Nigeria GAID, Saudi PDPL, Thailand, Kenya, ISO 27001, SOC 2 |
| GDPR Art. 30 records (= C1) | India Rule 3 notice generation, LGPD, US state assessments, Korea |
| GDPR 72-hour breach process | India (tighten to "without delay" + no threshold), Korea, Nigeria, Saudi, Indonesia (3×24h), Singapore |
| GDPR rights + portability | India S.11–S.14, Brazil, Korea, US states |
| GDPR consent | India (tighten: standalone itemised notice, unconditional, 22 languages, withdrawal parity) |
| GDPR Ch. V transfer mechanisms | Brazil, Nigeria, Indonesia, Saudi; **not needed for India**; **not sufficient for China** |
| Under-18 controls (India) | Strictest global standard — satisfies COPPA, GDPR Art. 8, Japan 2026, Korea, Australia |

**The two India-specific builds that nothing else gives you:** 22-language standalone itemised
notices, and no-threshold immediate breach notification to every affected individual.

**The two things India does not give you:** portability, and automated-decision transparency.
Build both if you serve the EU, UK, Brazil, Korea or California.

---

## Annex A — Applicability note for this repository

*Illustrative, scoped to what is in the repo as of this commit. Not a legal opinion.*

**What the application does.** `server/` is an Express + Sequelize + PostgreSQL service exposing
`POST /company` (bulk insert) and `GET /company/get-company-data` (full table read) over a
`companyrecords` table holding MCA-style corporate registry fields: CIN, company name,
registration date, state, RoC, status, category, class, type, authorised and paid-up capital,
activity code and description, **registered office address**, and **email**.

**Is any of this personal data under S.2(t)?** Mostly no — a company is not an individual, and
corporate attributes are not personal data. But two fields can be:

- **`email`** — registry contact emails are frequently a director's or proprietor's personal
  address rather than a role account.
- **`registered_office_address`** — for One Person Companies, proprietorships and many small
  private limited companies, the registered office is the promoter's residence.

Where those fields identify an individual, they are personal data, and the record as a whole
becomes personal data "in relation to" an identifiable individual.

**Does the Act apply to it?** Probably not, on two independent grounds:

1. **S.3(c)(ii)** — the Act does not apply to personal data that any person is under a **legal
   obligation to make public**. The MCA registry is published under the Companies Act, so data
   *as sourced from the registry* is outside the Act.
2. Corporate-entity data is outside the definition of personal data altogether.

**Where that reasoning stops.** The S.3(c)(ii) exclusion attaches to the data as published. It
does **not** cover:

- **Enrichment** — appending phone numbers, LinkedIn profiles, personal emails, or inferred
  attributes from other sources. The composite is no longer "the published record."
- **Inference and scoring** — deriving lead scores, propensity or creditworthiness about a named
  individual.
- **Any user data the application later collects** — accounts, logins, saved searches, contact
  forms, billing. That is squarely in scope, needs a lawful basis, and pulls in C2, C5, C6 and
  the whole notice/consent build.
- **Outbound marketing** to registry emails, which engages the Telecom Commercial Communications
  Customer Preference Regulations and the Telecommunications Act 2023 regardless of the DPDP
  position.

**Observations on the current code**, framed against Rule 6 (which is the standard the service
would be held to the moment it processes any in-scope personal data):

| Observation | Location | Rule 6 element |
|---|---|---|
| Database credentials hardcoded in source (`'company', 'postgres', 'admin'`) | `server/src/configs/database.js:3` | Access control — credentials should come from environment/secret storage, and the shipped values are defaults that must not reach any real deployment |
| `server/.env` is tracked in git | `server/.env` | Currently holds only `PORT`, so no secret is exposed today — but the pattern invites one. Add `.env` (not just `.env.*.local`) to `.gitignore` |
| No authentication or authorisation on any route | `server/src/routes/companyRouter.js:5-7` | Access control — `POST /company` accepts unauthenticated bulk writes and `GET /company/get-company-data` returns the entire table |
| No access logging | throughout | Rule 6 requires logs of access to personal data retained ≥ 1 year |
| `console.log(companies)` prints full result sets | `server/src/controllers/company.js:21,33` | Logging personal data in cleartext to stdout is the opposite of the masking requirement |
| `getFilteredData` ignores filters and returns everything | `server/src/controllers/company.js:29-40` | Data minimisation in responses |
| No retention or deletion path | schema | S.8(7) / Rule 8, if in-scope data is ever stored |
| No transport security config | `server/src/index.js` | Encryption in transit |

**Recommendation.** None of this is urgent *today* on a registry-only dataset. It becomes
urgent the moment the service stores a user account, a contact form submission, or enriched
contact data — at which point the whole of C2–C6 applies with a fixed deadline of
**13 May 2027**. The two changes worth making regardless, because they are cheap and they are
prerequisites for everything else, are **moving credentials out of source** and **putting
authentication and access logging on the routes**.
