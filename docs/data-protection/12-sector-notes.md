# Part 12 — Sector notes

Where the DPDP framework lands differently depending on what business you are in. Each note
gives the binding constraint, the conflict that will actually bite, and the one thing to do
first.

---

## 1. Banking, financial services and insurance

**The binding constraint is not the DPDP Act.** BFSI entities already carry heavier duties from
their own regulators, and 2026 tightened them further:

- **RBI** reset its framework on **31 July 2026 with seven Directions, one per entity class**,
  layered on the Master Direction on Digital Payment Security Controls (2024), the Master
  Direction on Digital Lending (2025), the IT Governance and Outsourcing of IT Services
  Directions (2023), the **2018 payment-data localisation circular**, and KYC record retention.
- **SEBI** runs the **Cybersecurity and Cyber Resilience Framework (CSCRF)** with graded
  controls, SOC requirements and incident reporting.
- **IRDAI** reissued its **Information and Cyber Security Guidelines on 6 April 2026**,
  replacing the 2023 Guidelines and extending reach **down the intermediary chain**, not just to
  the insurer.

Each of these regulators has folded DPDP-style expectations into its own cyber and
data-governance rules, so a BFSI entity faces **dual obligations on consent, retention,
grievance handling, breach notification and cross-border transfer** — with the sectoral rule
prevailing wherever it is stricter, under S.38(2).

**The conflict that bites:** erasure. S.8(7) requires deletion on withdrawal or purpose
exhaustion; KYC requires five years after the relationship ends, PMLA five years from the
transaction, SEBI five to eight depending on the regulation, and insurance policy tails run
longer still. The proviso resolves it — but only if you can name the provision, isolate the
fields, keep them out of the erasure workflow, and tell the individual what was retained.

**Do first:** a **field-level retention map** keyed to the specific statutory provision behind
each retention period. Everything else in BFSI compliance hangs off it.

**Watch:** BFSI entities are the most likely candidates for **SDF designation** outside big
tech, which — under MeitY's January 2026 proposal — would bring a **13 November 2026** deadline
and an immediately effective localisation duty.

---

## 2. Healthcare and health tech

**The gap the Act created.** By abolishing sensitive personal data, the DPDP Act gives health
records **no special statutory status**. What fills the gap is sectoral: the **Ayushman Bharat
Digital Mission's Health Data Management Policy**, clinical establishment rules, and
professional-council confidentiality duties — all of which prevail where stricter under S.38(2).

**The relief the Rules gave.** Rule 12 with the **Fourth Schedule** exempts clinical
establishments, mental health establishments, healthcare professionals and allied health
professionals from parts of S.9, but **only within a stated processing scope** — health services
necessary to protect the child's health, and support for treatment and referral plans. Step
outside that scope and full verifiable parental consent applies.

**The conflict that bites:** long retention driven by clinical and medico-legal requirements
against S.8(7) erasure, plus the fact that a hospital's breach exposure is the ₹250 crore tier
while its security maturity is typically far below a bank's.

**Do first:** scope the Fourth Schedule exemption honestly — write down which entity limb you
fall within and which processing it covers — then Rule 6 controls, because health data breaches
are where the highest penalties and the greatest real-world harm coincide.

---

## 3. Education and edtech

**The strictest sector under the Act**, because everything it does involves people under 18.

- **Verifiable parental consent** before processing any child's data (S.9(1), R.10) — via
  identity details already held or a DigiLocker-style virtual token.
- **No tracking, no behavioural monitoring, no targeted advertising** directed at children
  (S.9(3)) — an absolute prohibition, not consent-defeasible.
- **Fourth Schedule relief** for educational institutions covers tracking and behavioural
  monitoring **for educational activities or child safety**, for crèches and childcare centres
  on safety grounds, and for **transport providers engaged by educational institutions doing
  location tracking during travel**. It does **not** cover commercial edtech marketing,
  engagement optimisation, or advertising.
- **Old student records must be deleted** once the purpose is served (S.8(7)).

**The exposure:** ₹200 crore for children's-data failures, and large edtech platforms are
plausible **SDF** candidates precisely because of the volume of children's data, the risk of
harm to minors, and their use of behavioural analytics and AI.

**The design decision to take now:** whether to age-gate or to build parental consent. If the
product genuinely serves under-18s, parental consent infrastructure is unavoidable and has a
long lead time. If it does not, excluding minors and documenting the exclusion is far cheaper —
and "confirming that the user is not a child" is itself an exempt purpose under Fourth Schedule
Part B.

**Do first:** separate the child-data flows from everything else in the data map. You cannot
apply S.9 to a system that cannot tell you which records belong to minors.

---

## 4. Consumer internet, e-commerce and D2C

**The sector with no sectoral regulator to defer to** — here the DPDP Act plus the IT Rules,
2021 *is* the whole stack, which makes it the sector where the Act is genuinely the binding
constraint.

- **Rule 3 notices** are a product and design problem, not a legal one: standalone, itemised,
  per-purpose, in 22 languages.
- **No legitimate-interests basis** means analytics, personalisation, recommendations and
  product improvement all need consent — the deepest change to how a consumer product is built.
- **Third Schedule erasure:** e-commerce and social media entities with **≥ 2 crore registered
  Indian users**, and online gaming intermediaries with **≥ 50 lakh**, must erase after **three
  years of inactivity**, with **48 hours' notice** and a re-engagement path.
- **IT Rules, 2021 as amended in 2026:** grievance officer with 24-hour acknowledgement and
  15-day disposal, plus takedown within **three hours** of a court order or reasoned government
  intimation and **two hours** for non-consensual intimate or morphed imagery.
- **TCCCPR, 2018** governs marketing to Indian numbers independently of DPDP consent.

**Do first:** the consent and notice rebuild. It has the longest lead time of anything in the
playbook, touches every surface, and cannot be retrofitted convincingly.

---

## 5. B2B SaaS and IT/BPM services

**The best-positioned sector**, for two reasons.

1. **S.17(1)(d)** exempts processing **in India of the personal data of non-residents under a
   contract with a person outside India** — the outsourcing carve-out, an explicit
   industrial-policy provision protecting India's IT/BPM export industry.
2. Most B2B SaaS acts as a **Data Processor**, whose obligations flow from the Fiduciary's
   contract under S.8(2) rather than directly from the Act.

**But three things still apply.** Rule 6 controls flow down contractually and are audited by
customers regardless. Your own employee and prospect data makes you a Fiduciary. And upstream
breach notification has to be fast enough for your customer to meet *their* "without delay"
clock — which is a contractual commitment you should price before a customer imposes it.

**Do first:** a customer-facing DPDP addendum and a Rule 6 control attestation. In this sector
compliance is a **sales asset** — the evidence pack is what unblocks Indian enterprise deals
through 2026–27.

---

## 6. Public sector and govtech

The State processes on the **legitimate use** in S.7(b) for subsidies, benefits, services,
certificates, licences and permits, so **no consent is required** — but Rule 5 subjects it to
the Second Schedule standards: lawful processing, purpose limitation, data minimisation,
accuracy, retention limitation, security, notice and a named accountable person.

Vendors building for government should note two things: **S.17(2)(a)** can exempt a State
instrumentality entirely by notification, which changes the compliance posture of a project
overnight; and the Second Schedule standards, while real, are enforced by a Board that the same
Government appoints.

---

## 7. Cross-sector summary

| Sector | Binding constraint | First action | SDF likelihood |
|---|---|---|---|
| BFSI | Sectoral regulators, not DPDP | Field-level retention map | **High** |
| Healthcare | ABDM policy + Rule 6 exposure | Scope the Fourth Schedule limb | Medium |
| Education / edtech | S.9 children's regime | Separate child-data flows | **High** for large platforms |
| Consumer internet / D2C | DPDP + IT Rules — the whole stack | Consent and notice rebuild | **High** for large platforms |
| B2B SaaS / IT-BPM | Customer contracts; S.17(1)(d) relief | DPDP addendum + Rule 6 attestation | Low |
| Public sector | Rule 5 + Second Schedule | Named accountable person | n/a |

---

## Citations

- [King Stubb & Kasiva, "DPDP & Sector Regulators: Navigating RBI, SEBI, IRDAI, TRAI"](https://ksandk.com/data-protection-and-data-privacy/dpdp-sector-regulators-navigating-rbi-sebi-irdai-trai/)
- [TCSA, "RBI & DPDP Act Dual Compliance for BFSI: 2026 Guide"](https://www.tcsa.in/resources/dpdp-compliance-bfsi-rbi-guidelines)
- [BitScore, "Cyber Security Regulations in India (2026)"](https://www.bitscore.in/resources/india-cyber-security-regulations) — RBI's 31 July 2026 reset into seven Directions; IRDAI's Information and Cyber Security Guidelines reissued 6 April 2026
- [King Stubb & Kasiva, "DPDP Act Compliance for EdTech & Schools in India"](https://ksandk.com/data-protection-and-data-privacy/dpdp-act-compliance-for-edtech-schools/)
- [King Stubb & Kasiva, "Children's Data Protection Under India's DPDP Rules"](https://ksandk.com/data-protection-and-data-privacy/childrens-data-protection-under-indias-dpdp-rules/)
- [Observer Research Foundation, "DPDP Rules and the Future of Child Data Safety"](https://www.orfonline.org/expert-speak/dpdp-rules-and-the-future-of-child-data-safety)
- [Dalberg, "Navigating the DPDP Act: What It Means for EdTech and the Future of Digital Learning"](https://dalberg.com/our-ideas/navigating-the-dpdp-act-what-it-means-for-edtech-and-the-future-of-digital-learning/)
- [AMLEGALS, "Health Data and the DPDP Act: A Practical Guide"](https://amlegals.com/health-data-and-the-dpdp-act-a-practical-guide/)
- [Storyboard18, "DPDP Rules carve out key exemptions for healthcare providers, schools and childcare services"](https://www.storyboard18.com/digital/dpdp-rules-carve-out-key-exemptions-for-healthcare-providers-schools-and-childcare-services-processing-childrens-data-84208.htm)
