# Part 7 — The rest of Indian law: what the DPDP Act sits on top of

The DPDP Act is not a code. **S.38(1) makes it *additional to* every other law, and S.38(2)
provides that where another law confers a higher degree of protection or restriction, that
higher standard prevails.** The Act is a floor, not a ceiling — and in the sectors where Indian
companies actually operate, the floor is frequently the *least* demanding instrument in the
stack.

Any real compliance programme therefore has to be built against the union of the DPDP
framework and the instruments below, not against the DPDP framework alone.

---

## 1. The instruments that overlap

### 1.1 IT Act, 2000 and the SPDI Rules, 2011 — still alive

Covered in [Part 2, §1.1](02-dpdp-rules-2025.md): **S.44(2) has not commenced**, so
**S.43A and the SPDI Rules remain in force** and coexist with the DPDP framework until the
substantive phase. Practical consequences today:

- **Sensitive personal data still exists as a legal category** — passwords, financial
  information, health, biometrics, sexual orientation — with the SPDI Rules' consent, policy,
  disclosure and transfer requirements attached.
- **The S.43A compensation claim is still available** to an individual injured by a body
  corporate's negligent handling of that data. It disappears when S.44(2) commences, and the
  DPDP Act puts nothing in its place.
- **S.72A of the IT Act is untouched by S.44** and survives permanently: disclosure of personal
  information in breach of a lawful contract remains criminal, up to three years' imprisonment
  and ₹5 lakh. After May 2027 it is the only provision in Indian law attaching personal
  criminal consequence to data misuse — the DPDP Act creates no offences at all.

### 1.2 CERT-In Directions, 28 April 2022

Issued under S.70B(6) of the IT Act, applying to body corporates, intermediaries, data centres,
cloud, VPS and VPN providers, and virtual asset businesses:

- **Six-hour reporting** of specified cyber incidents to CERT-In from noticing them.
- **180-day ICT log retention, stored within India**.
- Clock synchronisation to NIC/NPL NTP servers.
- Five-year KYC and subscriber-record retention for VPS, cloud, VPN and virtual asset providers.

**Interaction.** Cumulative with, not substituted by, Rule 7. A single incident generates a
six-hour CERT-In report, a "without delay" Board intimation and individual notifications, and a
72-hour detailed Board report. Note also that CERT-In's **180-day** log floor and Rule 6's
**one-year** access-log floor are different obligations on different log sets — the safe design
is one-year retention of access logs to personal data, held in India.

### 1.3 IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — as amended in 2026

For intermediaries and significant social media intermediaries: due diligence obligations, a
**Grievance Officer** who must acknowledge complaints within **24 hours** and dispose of them
within **15 days**, a Chief Compliance Officer and Nodal Contact Person for SSMIs, traceability
of first originator for messaging SSMIs, and retention of user records for **180 days after
account deletion**.

**2026 development.** The IT Amendment Rules, 2026 sharply compress the takedown clocks:
action on a court order or reasoned government intimation drops from **36 hours to 3 hours**,
and removal of non-consensual intimate or morphed imagery — including deepfakes — drops from
**24 hours to 2 hours**.

**Interaction.** Two separate grievance regimes now run in parallel for the same company: the
IT Rules' Grievance Officer with fixed 24-hour/15-day clocks, and the DPDP Act's S.13
mechanism with a **self-declared** published response period (Rule 14). Building one process
to the stricter IT Rules clocks and pointing both notices at it is the only sane design. The
180-day post-deletion retention rule also directly cuts against S.8(7) erasure — S.8(7)'s
"unless retention is required by law" proviso is what reconciles them, and the reconciliation
has to be documented field by field.

### 1.4 Banking and payments — RBI

- **Storage of Payment System Data (6 April 2018):** the *entire* payment data of system
  operators must be stored **only in India**; for cross-border transactions a copy of the
  foreign leg may also be stored abroad. This is hard localisation and is expressly preserved
  by **S.16(2)**.
- **Master Direction on KYC:** customer identification records retained for **at least five
  years** after the business relationship ends; transaction records for five years.
- **Master Directions on IT Governance, Risk and Controls (2023)** and on **Outsourcing of IT
  Services (2023):** board-level IT governance, vendor due diligence, audit rights, exit plans,
  and incident reporting to RBI on its own (shorter) clocks.
- **Account Aggregator (NBFC-AA) framework:** the consent-artefact architecture that the DPDP
  Consent Manager generalises. An organisation already integrated with AA has most of the
  consent-record plumbing Rule 4 will need.

### 1.5 Securities markets — SEBI

Record-retention obligations for intermediaries (commonly five to eight years depending on the
regulation), KYC Registration Agency requirements, the **Cybersecurity and Cyber Resilience
Framework (CSCRF, 2024)** with its graded controls, SOC requirements and incident reporting,
and localisation expectations for specified regulated-entity data.

### 1.6 Insurance — IRDAI

Information and Cyber Security Guidelines, policyholder-record localisation, and long
retention periods driven by policy tenure and claims tails — frequently the longest retention
obligations any Indian company carries, and the ones that most often defeat an erasure request.

### 1.7 Telecom — the Telecommunications Act, 2023 and licence conditions

Unified Licence conditions requiring subscriber data to remain in India and prohibiting
transfer of subscriber accounting information abroad; the **Telecommunications Act, 2023**
interception and suspension powers; the **Telecom Cyber Security Rules, 2024**; and the
**TCCCPR, 2018** governing commercial communications, consent registration and preference
management — which continues to govern marketing to Indian numbers independently of DPDP
consent.

### 1.8 Anti-money-laundering — PMLA and rules

Records of transactions and identity documents retained **five years** from the transaction or
from the end of the business relationship, whichever is later. Applies to reporting entities
well beyond banking — including many fintech, payment and virtual-asset businesses.

### 1.9 Aadhaar Act, 2016

S.29 restrictions on sharing core biometric information and identity data, the Authentication
Regulations' logging and retention rules, and offences for unauthorised disclosure. The DPDP
Act does **not** treat Aadhaar numbers or authentication data as a special category — the
Aadhaar framework is the only thing that does, and it prevails under S.38(2) to the extent it
is stricter.

### 1.10 Health

The Ayushman Bharat Digital Mission's **Health Data Management Policy**, the Clinical
Establishments framework, and professional-council confidentiality obligations do the work
that the DPDP Act's abolished "sensitive personal data" category would otherwise have done for
health records. The Fourth Schedule exemptions for clinical and mental health establishments
(Rule 12) have to be read together with these.

### 1.11 Employment

<span>S.7(i)</span> makes employment a legitimate use, but retention is driven elsewhere:
Payment of Wages and Shops and Establishments record-keeping, EPF and ESI, POSH Act complaint
records, and the Industrial Disputes framework. Employee monitoring sits on the S.7(i)
"safeguarding the employer from loss or liability" limb — a broad ground with no
proportionality test written into it, and one of the few places where India is *more*
permissive than the GDPR.

### 1.12 Consumer and e-commerce

The Consumer Protection (E-Commerce) Rules, 2020 impose their own grievance officer,
disclosure and record obligations, and the Legal Metrology (Packaged Commodities) Rules impose
seller-identity disclosure — obligations that push in the opposite direction from data
minimisation.

---

## 2. Where the stack actually conflicts

| Conflict | DPDP position | The other instrument | How S.38 resolves it |
|---|---|---|---|
| **Erasure vs. statutory retention** | S.8(7): erase on withdrawal or purpose exhaustion | KYC 5 years, PMLA 5 years, SEBI 5–8 years, IRDAI policy-tail, IT Rules 180 days post-deletion | The retention law wins via S.8(7)'s "required by law" proviso — but you must name the provision, isolate the fields, keep them out of the erasure workflow, and tell the individual which fields were kept and why |
| **Free transfer vs. localisation** | S.16 + Rule 15: transfer permitted unless restricted | RBI payment data (India only), SEBI, IRDAI, telecom licence conditions | S.16(2) expressly preserves the stricter sectoral rule. The negative list is irrelevant to a payment system operator |
| **Breach clocks** | Rule 7: "without delay" + 72 hours | CERT-In 6 hours; RBI/SEBI/IRDAI incident reporting on their own timelines | All cumulative. Design to the shortest clock and fan out |
| **Grievance clocks** | S.13 + Rule 14: self-declared published period | IT Rules 2021: acknowledge 24h, dispose 15 days | Publish the IT Rules clock as your DPDP period; one process, one SLA |
| **Consent vs. mandated collection** | S.6: consent must be free and unconditional | KYC, Aadhaar-based verification, tax reporting | Mandated collection runs on S.7(d) (legal obligation to disclose to the State) or the sectoral law directly — not on consent. Asking for consent you will collect anyway makes the consent unfree |
| **Marketing** | Consent under S.6 | TCCCPR 2018 preference registration | Both apply. DPDP consent does not cure a TCCCPR violation |
| **Uniform treatment vs. category-specific rules** | No sensitive-data category | Aadhaar Act, SPDI Rules (until commencement), ABDM health policy | The category-specific instrument prevails where stricter — which is why the DPDP Act's abolition of sensitive data is less consequential for regulated sectors than for the open internet |

---

## 3. The practical lesson

For a **regulated entity** — bank, NBFC, insurer, broker, telco, health provider — the DPDP
Act is rarely the binding constraint. The sectoral regulator already imposes localisation,
retention, incident reporting and governance duties that exceed it, and those regulators have
functioning enforcement machinery *today* while the Data Protection Board does not.

For an **unregulated consumer internet company**, the DPDP Act plus the IT Rules 2021 *is* the
whole stack, and the binding constraints are Rule 6 security controls, Rule 3 notices, Rule 7
breach reporting and the S.9 children's regime.

The design conclusion is the same in both cases: **build the retention and erasure engine
around a field-level map of statutory retention obligations**, because that map is what
reconciles the entire stack — it is what S.8(7) needs, what the sectoral regulators audit, and
what makes an erasure request answerable without a lawyer in the loop.
