# Part 19 — The interoperability layer: what a Consent Manager actually has to speak

Rule 4 requires a Consent Manager to operate an **interoperable platform**. Nobody has published
what that means. This part collects the three specification lineages India already has, sets out
what a DPDP consent artefact must carry beyond them, and proposes a minimum viable interface —
because whoever publishes a workable spec first has a real shot at becoming the default.

---

## 1. Why interoperability is the whole game

A Consent Manager that only works with the Fiduciaries it has bilaterally integrated is a
vendor, not an institution. The statutory promise — one place to see and withdraw every consent
you have given — only holds if:

- any Fiduciary can integrate against a **published interface** rather than a private one;
- consent artefacts are **portable** between Consent Managers, so a Data Principal can switch;
- withdrawal **propagates** to the Fiduciary *and its Processors* within S.6(6)'s "reasonable
  time"; and
- the record is **machine-readable and auditable** by the Board.

None of that exists yet. That is the gap, and it is a design gap rather than a legal one.

---

## 2. India already has three specification lineages

### 2.1 MeitY's Electronic Consent Framework (v1.1)

The ancestor. A MeitY technology specification defining a **digitally signed, machine-readable
consent artefact** — the idea that consent is a *document with structure*, not a checkbox event.
It predates the DPDP Act and is the conceptual source of everything that followed.

### 2.2 DEPA

The architectural pattern: a **data-blind consent intermediary** sitting between data providers
and data users, holding no data, brokering flows on the individual's instruction.

### 2.3 The Account Aggregator stack — the only one that runs in production

**ReBIT** publishes the **NBFC-AA API Specification (v2.0.0)** with three API catalogues:

| Catalogue | Role | DPDP analogue |
|---|---|---|
| **AA APIs** | The aggregator itself | The Consent Manager |
| **FIP APIs** | Financial Information Provider — holds the data | The Data Fiduciary holding data |
| **FIU APIs** | Financial Information User — wants the data | The Data Fiduciary requesting data |

The **consent artefact** specifies purpose, validity, and the recipients, with easy revocation
and auditable logs of every consent and data request. The flow: the FIU resolves the FIP
identifier from a **Central Registry**, then posts a consent request naming the data types, the
duration and the purpose.

**Three structural lessons transfer directly to DPDP:**

1. **A central registry is not optional.** Discovery — how does Fiduciary A find Consent Manager
   B, and verify it is registered? — is the piece a statutory registration regime should supply
   and currently does not.
2. **Separate the roles.** AA's three-catalogue split maps cleanly onto DPDP, where a Fiduciary
   may be both a holder and a requester of data.
3. **The artefact is the contract.** Everything else is transport.

---

## 3. MeitY's own requirements: the Code for Consent BRD

MeitY, through **NeGD with MeitY Startup Hub**, ran **"Code for Consent: The DPDP Innovation
Challenge,"** shortlisting six entities — **Jio Platforms, Baldor Technologies (IDfy), VertexTech
Labs (Redacto), Quagga Tech (Zoop), Concur, and Aurelion Future Forge** — for a three-month
coding round evaluated on functionality, compliance, usability and scalability.

The **Business Requirement Document, released June 2025**, is the closest thing to an official
statement of what a consent management system must do. Its notable requirements:

- **Real-time consent verification over secure APIs** before any personal data is collected or
  used — and the ability to **block the data request immediately** where consent is missing,
  expired or withdrawn;
- **administrative controls**: user role management and configurable retention policy;
- **multi-channel notification** to the individual — email, SMS, in-app.

The first of those is the significant one. It implies consent is not a record consulted after
the fact but an **enforcement point in the request path** — closer to an authorisation service
than to a compliance log. That is a much more demanding engineering posture than most CMP
vendors are built for, and it is where a genuine technical moat could exist.

**A distinction worth keeping straight:** being empanelled or shortlisted by NeGD is **not** the
same as being **registered as a Consent Manager by the Data Protection Board under Rule 4**. The
first is a government procurement and innovation track; the second is the statutory licence, and
it does not open until 13 November 2026 — before a Board exists to grant it
([Part 15](15-consent-managers.md)). Vendors are already blurring the two in their marketing.

---

## 4. What a DPDP consent artefact must carry beyond AA's

AA's artefact was designed for financial data sharing between regulated institutions. DPDP
consent is a broader thing, and the Act and Rules impose fields AA never needed:

| Field | Why it is required | Source |
|---|---|---|
| **Itemised data list** | Consent is limited to data *necessary* for the purpose; anything beyond is void | S.6(1) |
| **Itemised purpose list** | Notice must describe purposes item by item, not by category | R.3 |
| **Notice version hash** | You must be able to prove *which* notice text the consent was given against | S.5, R.3 |
| **Language served** | The notice must be available in English or any of 22 Eighth Schedule languages, at the individual's option | S.5(3), R.3 |
| **Capture surface and affirmative action** | Consent requires a clear affirmative action; you must be able to evidence what the user actually did | S.6(1) |
| **Withdrawal parity evidence** | Withdrawal must be as easy as giving — a claim that has to be demonstrable | S.6(4) |
| **Propagation state** | Whether cessation reached the Fiduciary *and its Processors* | S.6(6) |
| **Child / guardian flag and verification method** | Verifiable parental consent, and which method verified it | S.9(1), R.10 |
| **Recipient ledger** | The access right includes the identities of everyone the data was shared with, and what was shared | S.11 |
| **Legitimate-use marker** | Where processing runs on S.7 rather than consent, the artefact should record *which* ground | S.7 |
| **Retention trigger** | The erasure clock is per purpose, not per record | S.8(7), Third Schedule |
| **Nomination** | A nominee may exercise these rights on death or incapacity | S.14 |

The last four are the ones no existing specification covers, and the **recipient ledger** is the
hardest: it requires sharing telemetry, not just a consent record. It is also the field that
makes the S.11 access right meaningful rather than decorative, which is why it is worth building
even though nobody is asking for it yet.

---

## 5. A minimum viable interface

Offered as a design proposal, not a standard. Five endpoints and a registry get you most of the
way:

**Registry (needed from the Board, or bootstrapped by the ecosystem)**
- `GET /registry/consent-managers` — registered CMs, status, public keys, endpoints
- `GET /registry/fiduciaries/{id}` — identity, endpoints, SDF status

**Consent Manager, called by a Fiduciary**
1. `POST /consent/requests` — Fiduciary proposes an itemised purpose set with the notice
   reference and language; returns an artefact in `pending` state
2. `GET /consent/artefacts/{id}` — current state, signed
3. `POST /consent/verify` — **the enforcement call in the request path.** Given artefact +
   purpose, returns allow/deny with a reason. Must be fast enough to sit inline
4. `POST /consent/withdrawals` — from either side; returns propagation obligations
5. `POST /consent/events` — Fiduciary reports back: propagation complete, processors notified,
   data shared with recipient X, retention clock started

**Non-negotiables**
- Every artefact **digitally signed** by the issuing Consent Manager, verifiable offline
- **Append-only** artefact history; states change by adding events, never by mutation
- The Consent Manager holds **no personal data** beyond what identifies the artefact and the
  individual to the Fiduciary
- **Exportable** in full, so an individual can move Consent Managers without losing history —
  portability of the *consent record* is achievable even though the Act grants no data
  portability right ([Part 11](11-dpdp-gdpr-crosswalk.md))

---

## 6. What is still unspecified

| Question | Status |
|---|---|
| Is there a Board-run registry of Consent Managers? | Nothing published |
| Is there a mandated artefact schema? | No |
| How does a Fiduciary discover which CM a given individual uses? | Undefined — the hardest UX problem in the whole design |
| Must a Fiduciary integrate with *every* registered CM? | Unclear; if yes, that is an N×M problem the registry must solve |
| How do AA consent artefacts and DPDP artefacts coexist for a fintech? | Unresolved — the AA/CM paradox ([Part 15](15-consent-managers.md)) |
| Who audits a Consent Manager's own compliance? | Rule 4 says the Board; no procedure published |
| What happens to artefacts if a CM's registration is revoked? | Undefined — an obvious systemic risk |

---

## 7. The strategic read

The specification vacuum is the opportunity in
[Part 17](17-product-opportunity.md). Three consequences:

1. **Publish first.** An open, well-documented interface published before the Board acts is how a
   private spec becomes the de facto standard — the AA ecosystem's own history shows how much
   power sits with whoever writes the reference implementation.
2. **Build the verify endpoint properly.** MeitY's BRD already asks for **real-time consent
   verification with immediate blocking**. Treating consent as an authorisation service in the
   request path — rather than an audit log consulted later — is technically hard, genuinely
   differentiating, and exactly what a regulator will eventually require.
3. **Build the recipient ledger nobody wants yet.** It is the hardest field, it makes the S.11
   access right real, and it is what a consumer-facing product needs in order to show a person
   something they have never been able to see: where their data actually went.

---

## Citations

- Reserve Bank Information Technology Pvt Ltd (ReBIT), **NBFC-Account Aggregator API Specification v2.0.0** — [specification PDF](https://specifications.rebit.org.in/artefacts/NBFC-AA_API_Specification_v2.0.0.pdf) · [Sahamati mirror](https://sahamati.org.in/wp-content/uploads/2025/02/2-API_Specifications_v2.0.0.pdf)
- ReBIT, **Standards to enhance customer protection and user experience within the AA Framework v1.0** — [PDF](https://specifications.rebit.org.in/artefacts/NBFC-AA_Standards_to_enhance_customer_protection_and_user_experience_in_AA_Framework_v1.0.pdf)
- [Sahamati, "RBI announces technical specifications for the Account Aggregator ecosystem"](https://sahamati.org.in/rbi-announces-technical-specifications-for-the-account-aggregator-ecosystem/)
- MeitY, **Electronic Consent Framework Technology Specifications, Version 1.1** — [PDF](https://dla.gov.in/sites/default/files/pdf/MeitY-Consent-Tech-Framework%20v1.1.pdf)
- [Storyboard18, "MeitY selects six firms, including Jio Platforms, for 'Code for Consent' challenge"](https://www.storyboard18.com/digital/meity-selects-six-firms-including-jio-platforms-for-code-for-consent-challenge-77886.htm) · [MediaNama, "MeitY chooses Jio, IDfy for DPDPA consent management systems"](https://www.medianama.com/2025/08/223-jio-idfy-meity-consent-management-systems-dpdpa/)
- [The420.in, "DPDP Act 2023: MeitY details the ideal consent management system"](https://the420.in/india-consent-management-system-dpdp-act-guidelines/) — on the June 2025 Business Requirement Document
- [Consent.in, "Are NeGD empanelled Consent Managers needed for businesses?"](https://www.consent.in/blog/negd-consent-manager) — on the empanelment/registration distinction
- DPDP Act, 2023, S.5–S.9, S.11, S.14; DPDP Rules, 2025, Rules 3, 4, 10 and the First Schedule
