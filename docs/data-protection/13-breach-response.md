# Part 13 — Breach response: the three clocks

The most operationally demanding thing in the Indian regime is not consent — it is what happens
in the six hours after somebody notices something wrong. Three separate clocks start, run in
parallel, and are owned by different teams. This part turns them into a runbook.

---

## 1. The three clocks

| Clock | Owner | Trigger | Deadline | Legal source | Failure exposure |
|---|---|---|---|---|---|
| **CERT-In** | Security | Noticing, or being informed of, a listed cyber incident | **6 hours** | CERT-In Directions, 28 April 2022, under S.70B(6) IT Act | Up to **₹1 lakh** fine and **1 year imprisonment** under S.70B(7) |
| **Data Principals** | Privacy / Comms | Becoming aware of *any* personal data breach | **Without delay** | R.7(1) | **₹200 crore** tier |
| **Data Protection Board** | Privacy / Legal | Becoming aware — two stages | **Without delay** (initial), then **72 hours** (particulars) | R.7(2) | **₹200 crore** tier |

Behind all three sits the **₹250 crore** tier for the underlying failure to maintain reasonable
security safeguards (S.8(5) with R.6). Notifying perfectly does not cure a control failure, and
having good controls does not excuse a late notification — they are independent exposures.

Sectoral clocks stack on top: RBI, SEBI and IRDAI incident reporting each run on their own
timelines for regulated entities.

**Note the asymmetry between the clocks.** CERT-In's trigger is a *cyber incident* from a
defined list — website defacement, intrusion, ransomware, malicious code, unauthorised access.
The DPDP trigger is a *personal data breach*, with **no severity threshold at all**. Most
personal data breaches are not CERT-In incidents (a misdirected email, a misconfigured
permission, an employee taking data to a competitor), and some CERT-In incidents involve no
personal data. **You need two reportability tests, not one.**

---

## 2. What "without delay" means in practice

The Rules do not define it, and there is no Board practice to calibrate against. Three
observations:

1. **It is stricter than 72 hours.** The drafters used both formulations in the same rule, so
   "without delay" must mean something shorter than the 72 hours they also specified.
2. **It runs from awareness, not confirmation.** Waiting for a complete forensic picture before
   notifying is the failure mode the phrase is designed to prevent. The initial Board intimation
   and the individual notification are both *first* communications, not final ones.
3. **The safe operating assumption is hours, not days** — and in practice, aligning the first
   individual notification with the six-hour CERT-In report is the only defensible design,
   because it means one decision point rather than two.

---

## 3. Reportability: two tests, run in parallel

**Test A — CERT-In (6 hours).** Is this one of the listed incident categories? Website
defacement or unauthorised change; intrusion; malicious code including ransomware, worms,
spyware and crypto miners; unauthorised access to data or systems; identity theft; attacks on
critical infrastructure or IoT; and the rest of the enumerated list. If yes → report, whether or
not personal data is involved.

**Test B — DPDP (without delay).** Was there **any** unauthorised processing, or accidental
disclosure, acquisition, sharing, use, alteration, destruction or loss of access, that
compromises the confidentiality, integrity or availability of personal data? If yes → notify
**every affected Data Principal and the Board**. There is no volume threshold, no harm
threshold, and no "unlikely to result in a risk" filter.

**The consequence teams underestimate:** Test B will fire many times a year in any organisation
of scale, for incidents that would be logged and closed under the GDPR without any external
communication. The process must therefore be **cheap to run**, or it will not be run.

---

## 4. What each notification must contain

**To the Data Principal (R.7(1))** — in clear and plain language:
- the **nature, extent and timing** of the breach;
- the **likely consequences** for that individual;
- the **mitigation measures** the Fiduciary has implemented or is implementing;
- the **safety measures the individual can take** — the part most often omitted, and the part
  that turns a notice from a disclaimer into something useful;
- **contact details** of a person able to answer questions.

**To the Board, stage 1 — without delay:** nature, extent, timing and likely impact.

**To the Board, stage 2 — within 72 hours** (extendable on request):
- the **events and circumstances** leading to the breach;
- **mitigation measures** taken;
- **findings on the person who caused it**, where known;
- **remedial measures** to prevent recurrence;
- a **report on the intimations given** to affected Data Principals.

Note stage 2 asks for a **root-cause narrative and attribution** within 72 hours. That is a
forensic timeline most organisations cannot meet from a standing start, which is the argument
for retaining a forensics provider on a pre-agreed SLA before you need one.

---

## 5. The runbook

**T+0 — detection.** Anyone can detect; the pipeline must accept reports from support,
engineering, a vendor, a researcher or a regulator. Start the clock at *first awareness within
the organisation*, not at escalation to the security team.

**T+0 to T+60 minutes — triage.**
- Assign an incident lead with authority to notify.
- Run **Test A** and **Test B** independently and record both answers with reasons.
- Snapshot logs. Rule 6's one-year access-log retention is what makes the affected-user query
  possible at all — an organisation without it cannot scope the breach and therefore cannot
  notify accurately.

**T+1 to T+6 hours — the hard window.**
- File the **CERT-In report** if Test A is positive.
- Run the **affected-user query** off the data inventory and log store.
- Send the **initial Board intimation** and begin **individual notifications** if Test B is
  positive. Do not wait for containment to complete.
- Notify sectoral regulators if applicable.

**T+6 to T+72 hours — the investigation.**
- Containment and eradication; preserve evidence.
- Build the root-cause narrative, attribution where possible, and the remediation plan.
- File the **stage 2 Board report** with the record of individual notifications.

**After.** Update the control set, record the lessons, and re-run the affected-user query to
confirm nobody was missed. Keep the whole file — the Board's inquiry powers under S.28 are
civil-court powers of discovery.

---

## 6. Pre-build these seven artefacts

A breach process assembled during a breach will miss the six-hour window. Before you need it:

1. **Two reportability decision trees** (Test A, Test B) with worked examples, so triage does
   not require a lawyer at 2 a.m.
2. **A CERT-In report template** and a named filing account with credentials that work.
3. **Notification templates** — Board stage 1, Board stage 2, and the individual notice — in
   English and the languages your notices use.
4. **A pre-built affected-user query** against the inventory and access logs, tested on a drill.
5. **A named decision-maker and deputy** with standing authority to notify without further
   sign-off. This is the single most common cause of missed windows.
6. **A forensics retainer** with an SLA short enough to support a 72-hour root-cause narrative.
7. **A vendor notification clause** in every processor contract requiring upstream notice fast
   enough to leave you time — hours, not "promptly."

**Run one tabletop before May 2027.** The scenario that tests everything: a third-party
processor discloses on a Friday evening that a misconfigured storage bucket exposed a table
containing names, phone numbers and order history of two lakh users, for an unknown period. It
is not a listed CERT-In category on its face; it is squarely a Test B breach; the affected-user
list must be reconstructed from logs you may not have; and the 72-hour root-cause report depends
on a vendor's cooperation you have not contracted for.

---

## Citations

- CERT-In Directions dated 28 April 2022 under S.70B(6) of the IT Act, 2000 — [Trilegal analysis](https://trilegal.com/wp-content/uploads/2022/05/2022-CERT-In-Directions-on-Reporting-Cyber-Incidents-1.pdf) · [National Law Review, "India Revamps Rules on Mandatory Incident Reporting"](https://natlawreview.com/article/cyber-security-india-revamps-rules-mandatory-incident-reporting-allied-compliances)
- [UpGuard, "India's 6-Hour Data Breach Reporting Rule"](https://www.upguard.com/blog/indias-6-hour-data-breach-reporting-rule)
- [Eventus Security, "CERT-In 6-Hour Incident Reporting: Format & Checklist 2026"](https://eventussecurity.com/cybersecurity/cert-in-six-hour-incident-reporting/)
- [Adaptive, "CERT-In Compliance Checklist for Indian Businesses (2026)"](https://adaptive.live/blog/cert-in-compliance-checklist-a-practical-guide-for-indian-businesses)
- DPDP Rules, 2025, Rule 6 and Rule 7; DPDP Act, 2023, S.8(5)–(6) and the Schedule
