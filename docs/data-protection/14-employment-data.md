# Part 14 — Employment and workplace data

One of the few places where **India is more permissive than the GDPR** — and, precisely because
of that, one of the least examined and most misread parts of the Act.

---

## 1. The basis: S.7(i)

Processing is a "certain legitimate use", requiring **no consent**, where it is:

> "for the purposes of employment or those related to safeguarding the employer from loss or
> liability, such as prevention of corporate espionage, maintenance of confidentiality of trade
> secrets, intellectual property, classified information or provision of any service or benefit
> sought by a Data Principal who is an employee."

Compare the EU, where employee consent is generally treated as **invalid** because of the power
imbalance, forcing employers onto Article 6(1)(b) contract, 6(1)(c) legal obligation or
6(1)(f) legitimate interests — each with its own constraints, and Article 88 permitting member
states to legislate additional employment-specific safeguards, which several have.

India's approach is simpler and, on its face, broader: **one ground covering both ordinary HR
processing and loss-prevention**.

---

## 2. What S.7(i) actually covers

**Comfortably inside:**
- Recruitment, onboarding, payroll, benefits, tax and statutory filings
- Performance management, leave, attendance, appraisals
- Access provisioning and identity management
- Health and safety records where required
- Trade-secret and IP protection; classified-information handling
- Insider-threat and data-leak detection connected to a genuine risk
- Any service or benefit the employee has asked for

**Outside, or at least unsupported:**
- **Secondary and commercial uses** — selling or sharing employee data, marketing, training
  commercial models on employee communications
- **Wellness programmes, sentiment analysis and analytics-driven performance scoring**, where
  these go beyond what the employment relationship requires
- **Monitoring disproportionate to any identified risk** — continuous webcam capture,
  always-on location tracking of personal devices, keystroke logging, off-duty surveillance
- **Processing after the purpose ends** — S.8(7) erasure still applies, subject only to
  statutory retention

---

## 3. The limit that is doing the work

S.7(i) removes the *consent* requirement. It does **not** remove:

- **S.4** — processing must still be for a **lawful purpose**;
- **S.8(4)–(5)** — technical, organisational and security measures still apply;
- **S.8(7)** — erasure when the purpose is exhausted;
- **S.5 and R.3** — notice obligations, which is why an employee privacy notice is still
  required even though consent is not;
- **S.11–S.14** — employees retain access, correction, erasure, grievance and nomination
  rights against their employer;
- **The Constitution.** *Puttaswamy* established informational privacy as a fundamental right,
  and proportionality is the standard by which any intrusion is measured. A statutory ground
  that dispenses with consent does not dispense with proportionality.

Commentators have taken this further, arguing that **blanket employment surveillance clauses
are void rather than merely risky** under the DPDP regime — because a contractual term cannot
manufacture a legitimate use that S.7(i) does not supply, and because S.6(2) invalidates any
part of a consent request that infringes the Act. The argument has not been tested, but the
direction is clear enough that "the employment contract says we may monitor everything" is not
a defence worth relying on.

**Practical test for any monitoring measure**, drawn from the proportionality framework:

1. **Legitimate aim** — is there an identified risk this addresses, written down before
   deployment?
2. **Necessity** — is there a less intrusive way to achieve it?
3. **Proportionality** — is the intrusion commensurate with the risk, in scope, duration and
   population covered?
4. **Safeguards** — access controls on the monitoring data itself, retention limits, review,
   and a route for the employee to raise a grievance.

Monitoring that fails this test is exposed under the **residuary ₹50 crore** tier, and — if it
produces a breach of the monitoring data itself — the **₹250 crore** security tier.

---

## 4. The gaps in Indian workplace privacy law

Worth stating plainly, because they shape what an employer should do voluntarily:

- **No employment-specific data protection legislation.** India has no Article 88 equivalent, no
  works-council consultation requirement, and no statutory limits on workplace monitoring.
- **No automated-decision rights.** An employee subject to algorithmic performance scoring,
  productivity ranking or automated termination triage has **no right to an explanation, to
  contest, or to human review** under the DPDP Act. The EU, Brazil, China and Korea all give
  something here.
- **No special category for health or biometric data**, so attendance biometrics and workplace
  health records carry no heightened statutory protection — only the Aadhaar Act, where Aadhaar
  is involved, and general security duties.
- **Retention is driven elsewhere** — Shops and Establishments and wage records, EPF and ESI,
  POSH Act complaint records, and industrial-dispute limitation periods. As everywhere else in
  the Indian stack, the erasure duty resolves against a **field-level statutory retention map**.

---

## 5. What to do

1. **Publish an employee privacy notice** under S.5 and R.3, standalone and itemised, even
   though consent is not the basis. It is required, and it is the cheapest possible defence.
2. **Write down the S.7(i) basis for each processing activity** — HR system, monitoring tool,
   access log, DLP, badge system — and mark the ones that fall outside it.
3. **Get separate consent for the activities outside it**: wellness programmes, sentiment
   analysis, non-essential analytics, any secondary use. Consent from an employee is workable in
   India in a way it is not in the EU, but it must be genuinely optional and free of detriment,
   or S.6(1) voids it.
4. **Run the four-part proportionality test on every monitoring tool** and keep the record. This
   is the artefact that answers a Board inquiry.
5. **Apply Rule 6 to HR systems.** They hold the most sensitive concentration of personal data in
   most organisations and are frequently the least protected — encryption, access control,
   access logging with the one-year floor, and flow-down to HR SaaS vendors.
6. **Build erasure into offboarding**, gated by the statutory retention map rather than by
   default indefinite retention.
7. **Give employees a real rights channel.** They have the same S.11–S.14 rights as customers,
   they know where the data is, and they are the population most likely to exercise them — and
   S.13(3) makes your internal grievance mechanism their mandatory first step, which is an
   advantage only if it works.

---

## Citations

- DPDP Act, 2023, S.7(i), S.4, S.5, S.6(2), S.8, S.11–S.15; DPDP Rules, 2025, R.3 and R.6
- [Chambers and Partners, "Navigating the Legitimate Use Exemption for Employee Data under the DPDP Act"](https://chambers.com/articles/navigating-the-legitimate-use-exemption-for-employee-data-under-the-digital-personal-data-protection)
- [LiveLaw, "Why Employment Surveillance Clauses Are Void, Not Just Risky, Under DPDP Regime"](https://www.livelaw.in/articles/employment-surveillance-clauses-void-dpdp-regime-539957)
- [Mondaq, "The Invisible Tightrope: Navigating Employer's Interests And Employee's Privacy In India's DPDP Era"](https://www.mondaq.com/india/privacy-protection/1504252/the-invisible-tightrope-navigating-employers-interests-and-employees-privacy-in-indias-dpdp-era)
- [Vidhi Centre for Legal Policy, "Eyes Everywhere"](https://vidhilegalpolicy.in/blog/eyes-everywhere/)
- [Tsaaro, "HR & DPDPA: Do you need consent to process employee data?"](https://tsaaro.com/blogs/hr-dpdpa-do-you-need-consent-to-process-employee-data)
- *K.S. Puttaswamy (Retd.) v. Union of India*, (2017) 10 SCC 1
