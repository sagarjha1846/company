# Part 20 — Enforcement in practice: how a case will actually run

[Part 2](02-dpdp-rules-2025.md) established that the Board cannot yet act. This part is about
what happens when it can: the machinery already notified, how a case will move through it, and —
the practically useful question — **where enforcement attention will actually come from**.

---

## 1. The machinery that already exists

Rules 17–22 came into force on 13 November 2025, ahead of everything substantive. Rule by rule:

| Rule | Subject |
|---|---|
| **17** | Appointment of the Chairperson and other Members |
| **18** | Salary, allowances and other terms and conditions of service |
| **19** | Procedure for meetings of the Board, and **authentication of its orders, directions and instruments** |
| **20** | **Functioning of the Board as a digital office** |
| **21** | Terms and conditions of service of the Board's officers and employees |
| **22** | **Appeals to the Appellate Tribunal** |

Three details in these rules deserve more attention than they have had:

**The digital office is real, not rhetorical.** The Board is to operate through techno-legal
systems: complaints filed, hearings held and decisions issued **digitally**, with no need for
parties to travel to Delhi. Physical presence remains possible where a person must be summoned
or examined. For a mid-market company in Coimbatore or Indore, that is the difference between a
regulator that is theoretically available and one that is actually usable — and it cuts both
ways, because it also lowers the cost of *being* complained about.

**There is a six-month clock on inquiries.** The Board must complete an inquiry within **six
months**, extendable only in **three-month blocks with recorded written justification**. Compare
the EU, where investigations routinely run for years — the Irish DPC's major platform cases took
four to five. A six-month statutory clock is unusually disciplined, and it will shape what kinds
of cases the Board can realistically take: fewer sprawling structural investigations, more
discrete, evidenced, single-issue matters.

**Appeals are cheap and digital.** Rule 22 requires appeals to the Appellate Tribunal to be
filed **in digital form**, with a fee equivalent to that for appeals under the TRAI Act, payable
by **UPI** — and reducible or waivable by the Tribunal's Chairperson. Combined with S.29's
60-day window and S.30's six-month disposal target, the appellate route is designed to be
accessible rather than a deterrent.

---

## 2. What is still missing

| Element | Status |
|---|---|
| Chairperson and Members | **None appointed**; applications invited May 2026 |
| S.27 (functions), S.28 (procedure), S.33–34 (penalties) | **Not commenced** |
| S.29–S.32 (appeals, mediation, voluntary undertakings) | **Not commenced** |
| Case-management system, filing portal | Nothing public |
| Procedural regulations beyond Rules 19–20 | None |

So the *forum* exists on paper, the *powers* do not, and the *people* have not been appointed.

---

## 3. How a case will run, once it can

A projected lifecycle, assembled from the Act and Rules:

1. **The grievance precondition.** S.13(3) requires the Data Principal to exhaust the
   Fiduciary's own grievance mechanism **before** approaching the Board. This is the single most
   consequential procedural fact for a company: **your grievance process is the filter that
   determines whether a complaint ever becomes a Board matter.** A well-run one disposes of most
   complaints; a bad one manufactures the Board's docket.
2. **Complaint or reference.** The Board may act on a complaint, a Government reference, or a
   court direction (S.28).
3. **Triage.** The Board decides whether there are sufficient grounds to proceed; it may
   determine there are not, and record reasons.
4. **Interim directions.** S.27 lets the Board direct **urgent remedial or mitigation measures**
   before any finding — the fastest-moving risk in the whole process, and the one least
   discussed.
5. **Inquiry.** Conducted digitally, with **civil-court powers** of summons, discovery,
   evidence and inspection (S.28(7)). **Six-month clock.**
6. **Off-ramps.** Mediation (S.31), or a **voluntary undertaking** (S.32) — which, once
   accepted, **bars proceedings** on that subject matter. Expect this to become the dominant
   resolution route, as it has under comparable regimes.
7. **Penalty.** S.33 with the Schedule, having regard to nature, gravity, duration,
   repetitiveness, gain avoided, mitigation and proportionality. Proceeds to the Consolidated
   Fund (S.34).
8. **Appeal.** TDSAT within 60 days, digital filing, UPI fee, six-month disposal target; then
   the Supreme Court.

---

## 4. Where enforcement will actually come from

There is no Indian enforcement record to reason from, so the honest method is to look at what
triggers investigations in mature regimes. Four triggers dominate:

| Trigger | How it works | India-specific weighting |
|---|---|---|
| **Breach notifications** | The report itself invites scrutiny of whether the response — and the underlying controls — were adequate | **Much heavier in India.** See §4.1 |
| **Individual complaints** | Volume matters: multiple complaints citing the *same* processing activity get prioritised | Filtered by the S.13(3) precondition, so quality of your grievance process governs flow |
| **Regulator-initiated sweeps** | Sector-wide inspections of common failure modes | Likely, given Nigeria's 1,368-entity sweep and the Board's six-month clock favouring narrow, repeatable cases |
| **Media and researcher disclosure** | Published exposure findings and journalism | High in India, where breach disclosure by researchers is common and press attention is intense |

### 4.1 India has built a self-reporting firehose

This is the structural insight, and it follows from two provisions read together:

- **Rule 7 has no materiality threshold** — *every* personal data breach must be reported to the
  Board, and every affected individual notified without delay
  ([Part 13](13-breach-response.md)); and
- **Breach notifications are the number-one investigation trigger** in mature regimes, because
  the notification hands the regulator a documented incident and an implicit question: were the
  Rule 6 controls adequate?

Every comparable regime filters what reaches the regulator through a risk threshold. India does
not. So **the Board will receive proportionally more incident reports than any comparable
authority**, each one a potential entry point to the ₹250 crore security tier — and each one
filed by the company itself.

Two consequences follow, and they pull in opposite directions:

- **For companies:** the breach report is not a compliance formality, it is the most likely
  origin of an enforcement file. It should be drafted as though it will be read by an
  adversary, because it may be. What it says about root cause, controls and remediation is
  evidence.
- **For the Board:** a firehose with no filter and a six-month inquiry clock is an
  under-appreciated capacity problem. Expect either informal triage thresholds to emerge in
  practice, or pressure to amend Rule 7 — which is why Rule 7 remains the provision most likely
  to be softened.

### 4.2 What the comparative numbers say

Per the **DLA Piper GDPR Fines and Data Breach Survey (January 2026)**, cumulative penalties
since May 2018 have passed **€7.1 billion across more than 2,800 enforcement actions**. (Counts
vary by methodology — other trackers report roughly 2,245 *fines* against the same headline
total; "enforcement actions" is the broader category.) Daily breach notifications rose about
**22% year on year**, and EDPB coordination is spreading larger fines across smaller national
authorities.

The direction of travel is toward **proactive, sector-targeted inspection**: Belgium's published
2026–2028 strategy commits to fewer reactive complaint-driven investigations and more inspections
of sectors identified as systemically high-risk — explicitly naming retail loyalty programmes,
direct marketing, and organisations handling health or financial data at scale.

A second 2026 theme worth noting: **vendor oversight failures are increasingly treated as an
aggravating factor** rather than a separate breach. That transfers directly to India, where
S.8(1) makes the Fiduciary liable for its Processor **regardless of any contrary agreement**.

---

## 5. What this means practically

1. **Fix the grievance mechanism first.** S.13(3) makes it the gate to the Board. It is the
   cheapest enforcement-risk reduction available, and it is usually owned by a support team with
   no idea it has become a regulatory control.
2. **Treat every breach report as a filed document in a potential proceeding.** Accurate,
   complete, and consistent with the evidence you hold. Never speculative about cause.
3. **Keep the Rule 6 evidence pack current** — control inventory, log-retention proof, backup
   test results, processor flow-downs. It is what answers the question the breach report invites.
4. **Assume interim directions can arrive before any finding.** Know, in advance, what an order
   to suspend a particular processing activity would do to your product, and what your fastest
   compliant fallback is.
5. **Expect voluntary undertakings to be the normal outcome.** Being able to propose a credible,
   dated remediation plan is a negotiating asset — and it bars proceedings once accepted.
6. **Watch the sectors.** Where regulators go proactive, the pattern is consistent: marketing and
   loyalty data, health, financial services, and anything involving children. India's own
   penalty schedule already points at the last of these.

---

## Citations

- DPDP Rules, 2025, Rules 17–22; DPDP Act, 2023, S.13(3), S.18–S.34
- [Baker Botts, "India Notifies Final Rules for Digital Data Protection Act"](https://ourtake.bakerbotts.com/post/102lund/india-notifies-final-rules-for-digital-data-protection-act) — on the six-month inquiry limit and three-month extensions
- [MediaNama, "India activates Data Protection Board under new 2025 Rules"](https://www.medianama.com/2025/11/223-india-notifies-dpdp-rules-2025-dpbi-activation/)
- [Mondaq, "India Notifies Final Rules For Digital Data Protection Act"](https://www.mondaq.com/india/data-protection/1710032/india-notifies-final-rules-for-digital-data-protection-act) — on digital-office functioning and appeal filing
- [LiveLaw, "India's Data Protection Board: Established In Law, Absent In Fact"](https://www.livelaw.in/articles/india-data-protection-board-established-law-543751)
- DLA Piper, **GDPR Fines and Data Breach Survey, January 2026** — cumulative penalties and enforcement-action counts, as reported in [GDPR enforcement trend analyses](https://pages.priverion.com/gdpr-enforcement-trends-2026-what-privacy-teams-must-prepare)
- [Secure Privacy, "GDPR Enforcement Heat Map Q2 2026"](https://secureprivacy.ai/blog/gdpr-enforcement-heat-map-q2-2026) — on investigation triggers and the Belgian DPA's 2026–2028 proactive strategy
- [Kiteworks, "GDPR Enforcement in 2026: When Vendor Oversight Failures Become the Fine Multiplier"](https://www.kiteworks.com/gdpr-compliance/gdpr-enforcement-2026-vendor-oversight/)
- [Kiteworks, "GDPR Fines Hit €7.1 Billion: Data Privacy Enforcement Trends in 2026"](https://www.kiteworks.com/gdpr-compliance/gdpr-fines-data-privacy-enforcement-2026/)
