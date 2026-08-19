# Part 5 — Findings, gap analysis and outlook

---

## 1. What India borrowed

The DPDP Act is unmistakably descended from the GDPR family, and the borrowing is structural,
not cosmetic:

- **The controller/processor split**, renamed Data Fiduciary / Data Processor, with the
  Fiduciary accountable for its Processor's acts (S.8(1)) and a mandatory contract (S.8(2)) —
  functionally GDPR Articles 24 and 28.
- **Notice-and-consent** as the organising principle, with consent that must be free, specific,
  informed and unambiguous, given by clear affirmative action, and as easy to withdraw as to
  give (S.6) — GDPR Articles 4(11) and 7 almost verbatim.
- **Purpose limitation and necessity** through the S.6(1) rule that consent extends only to
  data necessary for the specified purpose.
- **Storage limitation** through erasure on withdrawal or purpose exhaustion (S.8(7)).
- **Security and breach notification** (S.8(5)–(6)) — GDPR Articles 32–34.
- **The risk-tiered entity concept**: SDFs with DPOs, audits and DPIAs mirror GDPR Articles 35
  and 37, and Brazil's and Nigeria's "major importance" tiers.
- **Extraterritorial reach** on a targeting basis — GDPR Article 3(2)(a).
- **An administrative-penalty regulator with an appellate route**, the standard post-GDPR
  enforcement shape.

Two features are genuinely India's own and worth watching for adoption elsewhere:

1. **The Consent Manager** (S.6(7)–(9), Rule 4, First Schedule) — a registered, fiduciary-like
   intermediary that holds no data but brokers, records and revokes consent across services.
   It is the only serious institutional answer anyone has legislated to consent fatigue, and it
   builds on India's tested Account Aggregator and DEPA architecture.
2. **The right to nominate** (S.14) — designating another individual to exercise one's rights
   on death or incapacity. Simple, obviously useful, and absent everywhere else.

---

## 2. What India dropped, and why it matters

| Dropped | Consequence |
|---|---|
| **Legitimate interests basis** | Every ordinary commercial purpose runs on consent. Analytics, personalisation, fraud analytics by private parties, product improvement and internal research have no clean basis. Expect widespread reliance on the untested S.7(a) "voluntarily provided" ground and on maximalist consent screens. |
| **Contractual necessity basis** | Even performing the contract the user asked for technically requires consent. This is a drafting gap, not a policy choice, and it is the strongest candidate for early amendment. |
| **Sensitive personal data** | Caste, religion, health, biometrics, sexual orientation and financial data carry no extra protection. A *regression* from the SPDI Rules 2011. India-specific discrimination risks around caste and religion are unaddressed. |
| **Portability** | India has built the infrastructure (Account Aggregator, ONDC, UPI) but withheld the right. Competition-policy benefits are left on the table. |
| **Automated decision-making rights** | No explanation, no contest, no human-review right — in an economy with mass algorithmic credit scoring, insurance underwriting and welfare eligibility determination. Rule 13's SDF-only "algorithmic due diligence" is a supply-side substitute with no individual remedy attached. |
| **Compensation and private right of action** | Once S.44(2) commences and S.43A of the IT Act goes, and with S.39 barring civil courts, an individual harmed by a breach has no statutory monetary remedy. Until then S.43A still stands — the loss is scheduled, not yet suffered. |
| **Journalism / research / archival exemptions in the Act** | The Rules restore research and archiving (Rule 16), but **journalism was never restored**. The Press Council's request for a media exemption was not accepted. |
| **Monitoring/profiling extraterritorial trigger** | Foreign entities that profile Indians without offering them goods or services fall outside S.3(b). |
| **Anonymisation standard** | No definition, so the boundary of the Act for de-identified and aggregated data is undefined — a live problem for AI training datasets. |

---

## 3. Seven structural divergences from global practice

### 3.1 Duties and penalties imposed on the individual (S.15, Schedule entry 5)
No other data protection statute in the world penalises the data subject. The ₹10,000 penalty
for a "false or frivolous" complaint is small in money and large in chilling effect, because
the person deciding what is frivolous is a Government-appointed Board and the complainant has
already been required to exhaust the Fiduciary's own grievance process (S.13(3)).

### 3.2 Executive control over the regulator
Two-year renewable terms, Government-set qualifications and service conditions, a
Cabinet-Secretary-chaired selection committee, and S.36's power to call for information from
the Board itself. This is the design most exposed to a *Puttaswamy* proportionality challenge,
because *Puttaswamy* treated independent oversight as one of the procedural safeguards a
privacy-limiting law must supply.

### 3.3 Wholesale State exemptions (S.17(2)(a)) with no safeguards
The Central Government may exempt **any instrumentality of the State** from the Act on grounds
mirroring Article 19(2) — but without necessity, proportionality, time limits, independent
review, or ex-post notification. Compare: GDPR Article 23 permits restrictions only where they
"respect the essence" of the right and are necessary and proportionate, and requires the
restricting measure to specify purposes, categories, safeguards, storage periods and the risk
to data subjects. India's S.17(2)(a) has none of that architecture.

### 3.4 The information-demand power with a gag (S.36, Rule 23, Seventh Schedule)
No judicial authorisation, no purpose test on the face of the section, no transparency
reporting, no sunset, no notification of affected individuals, and an express power to forbid
disclosure of the demand. Even the US and EU cross-border evidence regimes — themselves
criticised — require issuance by a judicial or prosecutorial authority.

### 3.5 The absence of graded data categories
Uniform protection sounds egalitarian. In practice it means the law cannot distinguish a
newsletter mailing list from a genetic database, and it forces the entire risk-differentiation
job onto the SDF designation, which is a Government notification rather than a self-assessed
threshold.

### 3.6 Penalty design that under-deters the largest actors, with nothing for the victim
₹250 crore (~US$29 million) is an absolute ceiling. For a company with global revenue in the
hundreds of billions of dollars it is a cost of doing business; the GDPR's 4%, Korea's 10% and
China's 5% are not. Meanwhile the same ceiling can destroy an Indian mid-market firm. The
Schedule is therefore **regressive in effect**, and S.42 lets the Government raise the amounts
only to twice the stated figure — still absolute.

### 3.7 Delegation as a governing method
The Act delegates 26 subjects to rules (S.40), and the Rules in turn leave core parameters to
future notification: which entities are SDFs, which data must stay in India, which countries
are restricted, which classes get startup exemptions, and what lower age applies to which
Fiduciary. A company cannot fully determine its own obligations from the statute book. This is
the deepest divergence from the EU model, where obligations are self-assessable from the text.

---

## 4. The criticisms, fairly stated — and the counterarguments

### 4.1 The RTI amendment (S.44(3))
**The criticism.** Substituting a categorical "information which relates to personal
information" exemption for the old S.8(1)(j) deletes the public-activity test, the
unwarranted-invasion test and the larger-public-interest override. Critics — including former
Information Commissioners, the Editors Guild and opposition parliamentarians — argue this
shields officials' assets, qualifications, disciplinary records, welfare beneficiary lists and
recruitment records from scrutiny, and that it was enacted as a rider in a data protection
statute rather than through RTI-specific amendment.

**The counterargument.** The RTI Act's S.8(2) public-interest override, which applies to the
whole of S.8, survives; S.4 proactive-disclosure duties are untouched; and courts have
consistently read RTI purposively. Government's position is that the change harmonises RTI with
the fundamental right to privacy recognised in *Puttaswamy*.

**Where it stands.** Three PILs are pending in the **Supreme Court**, which in **August 2026**
gave the Union two weeks to respond. The petitions also challenge the absence of a journalism
exemption and the breadth of S.17(2)(a) as facilitating State surveillance. This is the single
most consequential open question about the Act, because a ruling on proportionality would reach
S.17(2)(a) and Rule 23 as well.

### 4.2 The surveillance objection
**The criticism.** S.7(b)–(e) give the State a consent-free basis for citizen data; S.17(2)(a)
lets it exempt itself from what remains; S.36 and Rule 23 let it demand data from private
Fiduciaries under a gag; the Board that would police this is Government-appointed on renewable
two-year terms. The net effect is a law that constrains private actors and largely releases the
State — the inverse of what *Puttaswamy*, a case about a State identity programme, was about.

**The counterargument.** National-security carve-outs exist in every regime, including GDPR
Article 23 and the UK's national-security certificates; India's are constitutionally anchored
to Article 19(2) grounds; and the Act does not itself authorise surveillance — that remains
governed by the IT Act, the Telecommunications Act 2023 and the CrPC/BNSS framework.

**Assessment.** The counterargument answers the *existence* of carve-outs but not their
*structure*. Other regimes attach necessity, proportionality, time limits, independent review
and transparency to the carve-out. India's attaches none of these. That is the gap.

### 4.3 The consent-fatigue objection
**The criticism.** A consent-only regime at Indian internet scale, with 22 language options and
itemised standalone notices for every purpose, will produce click-through consent, not informed
consent. The absence of legitimate interests makes it worse, because consent must carry
processing it is a poor instrument for.

**The counterargument.** That is exactly what the Consent Manager exists to solve, and India has
already proven the model in financial data through Account Aggregators.

**Assessment.** Plausible but unproven. Rule 4 does not commence until November 2026, leaving
six months before the substantive obligations land. If the Consent Manager market does not
mature on schedule, India will spend its first enforcement years with a consent architecture the
statute assumed away.

### 4.4 The compliance-burden objection (from industry)
**The criticism.** Under-18 verifiable parental consent, no-materiality-threshold breach
notification with dual reporting, the 22-language notice requirement, and prescriptive Rule 6
controls impose costs disproportionate to Indian mid-market capacity, especially with penalties
that are absolute rather than turnover-linked.

**The counterargument.** S.17(3)–(4) give the Government express power to exempt startups and
classes of Fiduciaries and to defer provisions for up to five years, and the 18-month runway was
extended in response to consultation.

**Assessment.** The safety valves are real but discretionary. Compare Vietnam, which wrote a
five-year small-business exemption **into the statute**, and Australia, where the small-business
exemption's statutory entrenchment has survived two decades of reform attempts.

---

## 5. What India got right

A fair account has to include these, because the drafting is not uniformly weak:

1. **Rule 6 is the best-drafted security provision in any of the statutes studied.** Naming
   encryption/tokenisation, access control, a one-year log-retention floor, backups and
   contractual flow-down converts an unfalsifiable "appropriate measures" standard into
   something an auditor and an engineer can both act on. The GDPR's Article 32 has produced a
   decade of argument about what "appropriate" means; Rule 6 will not.
2. **Consent quality is textually stronger than the GDPR's** — "unconditional," plus automatic
   voiding of consent beyond necessity, plus the withdrawal-parity rule, plus the standalone
   itemised notice in Rule 3.
3. **The children's regime is the most protective in the world on paper**, and the Fourth
   Schedule shows a genuine attempt to carve out the legitimate institutional cases (schools,
   hospitals, childcare, school transport) rather than either blanket-banning or blanket-permitting.
4. **The Consent Manager and the nomination right** are original contributions worth exporting.
5. **The negative-list transfer regime avoids the *Schrems* trap** — the GDPR's transfer
   architecture has consumed enormous compliance effort for contestable privacy gain, and India
   declined to replicate it.
6. **The 48-hour pre-erasure notice** in the Third Schedule is a small, thoughtful provision
   that no other regime has.
7. **The phased 18-month commencement** is genuinely responsive to industry consultation and
   compares well with Indonesia's abrupt two-year cliff.

---

## 6. Convergence and divergence: where global practice is heading

**Converging (near-universal now):**
- Extraterritorial targeting-based scope
- Controller/processor allocation with mandatory contracts
- Mandatory breach notification, generally 72 hours to the regulator
- Access, correction and erasure rights
- Risk-tiered obligations for large or high-risk processors
- Administrative penalties linked to turnover
- DPO or equivalent accountable person

**Diverging (real, persistent splits):**
- **Consent-first vs. balancing-first.** India, China and Korea sit on the consent side; the EU,
  UK, Singapore and Brazil on the balancing side. This is the deepest fault line in the field.
- **Cross-border control.** A permissive bloc (India, US, Singapore) against a control bloc
  (EU, China, Indonesia, Vietnam, Russia).
- **Individual redress.** Private rights of action are expanding (Australia's tort, US
  state health and biometric laws, Korea's statutory damages) — while India moved the other way.
- **Sensitive-data method.** Enumerated lists (EU, Brazil, Thailand) vs. harm-based definitions
  (China) vs. none at all (India).
- **AI and data protection.** Three live models: a separate AI statute (EU AI Act), an
  in-statute AI exemption with safeguards (Japan 2026), and a vague duty on large platforms
  (India's Rule 13). No consensus.

**The 2025–26 trend is simplification plus harder enforcement.** The EU's Digital Omnibus, the
UK's DUAA and Japan's AI-oriented APPI amendment all loosen obligations, while Korea's 10%-of-
revenue penalties, Nigeria's 1,368-entity sweep and China's tightened Cybersecurity Law
penalties all raise the cost of non-compliance. India arrives into that environment with light
obligations and heavy nominal penalties but no operational regulator — the opposite ordering.

---

## 7. Outlook: what to watch, 2026–2028

| Watch item | Why it matters | Expected timing |
|---|---|---|
| **Constitution of the Data Protection Board** | Nothing is enforceable without it; institutional capacity takes years to build | Applications invited May 2026; appointments overdue |
| **Supreme Court ruling on the RTI/DPDP PILs** | A proportionality ruling would reach S.17(2)(a) and Rule 23, not just S.44(3) | Hearings from late 2026 |
| **First SDF notifications** | Defines who carries DPO, audit, DPIA, algorithmic due diligence and localisation duties | Expected before May 2027 |
| **Notification of SDF-localised data categories** | The only remaining hard-localisation lever; the largest latent multinational risk | Unknown |
| **Consent Manager registrations** | Whether the consent architecture actually functions | From 13 Nov 2026 |
| **S.9(5) age-threshold notifications** | Whether the under-18 rule is softened for consumer internet services | Before May 2027 |
| **S.17(3) startup exemptions** | Scope of relief for the Indian ecosystem | Before May 2027 |
| **A contract/legitimate-interests amendment** | The most obvious statutory gap | Speculative |
| **Interaction with the Telecommunications Act 2023 and any AI governance framework** | Overlapping obligations and regulators | Ongoing |
| **EU adequacy for India** | Would require India to bridge the independence and redress gaps; currently improbable | Not near-term |

---

## 7A. The Act is not the whole stack

A point that changes the practical conclusion and is developed in
[Part 7](07-indian-law-overlay.md): S.38 makes the DPDP Act *additional to* other laws, and
provides that a higher standard elsewhere prevails. For regulated entities — banks, NBFCs,
insurers, brokers, telcos, health providers — the sectoral regulator already imposes
localisation, retention, incident-reporting and governance duties that exceed the DPDP
framework, and those regulators are enforcing them today while the Board is not. The DPDP Act
is the binding constraint mainly for the unregulated consumer internet, where it operates
alongside the IT Rules, 2021 — whose takedown clocks were cut to three hours (and two hours for
non-consensual intimate imagery) by the IT Amendment Rules, 2026.

---

## 8. Bottom line

India has enacted a **short, delegation-heavy, consent-maximalist statute with strong
front-end obligations (consent quality, notice, security controls, children, breach reporting)
and weak back-end accountability (no independent regulator, no individual remedy, wide State
exemptions, executive-controlled parameters).**

For a company, the practical consequence is asymmetric and worth stating plainly: the
**engineering obligations are more prescriptive than the GDPR's** — encryption, access logging
with a one-year floor, itemised standalone notices in 22 languages, erasure clocks,
notification of every breach without delay — while the **legal exposure is lower and less
predictable**, because it depends on a regulator that has not been appointed and on parameters
that have not been notified.

The correct posture is therefore to **build to the obligations, not to the enforcement risk**:
the obligations are knowable today, they are testable, and the 13 May 2027 deadline is fixed.
[Part 6](06-compliance-playbook.md) turns that into a control set.

---

## Sources

Primary instruments: Digital Personal Data Protection Act, 2023 (Act 22 of 2023) and the
Digital Personal Data Protection Rules, 2025 (notified 14 November 2025). Current status
verified August 2026 against the following:

- [India Passes the Digital Personal Data Protection Rules — Privacy World](https://www.privacyworld.blog/2025/11/india-passes-the-digital-personal-data-protection-rules-ushering-in-a-new-digital-age-in-india/)
- [DPDP Rules, 2025 Notified — Press Information Bureau](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf)
- [India's DPDP Act: Phased Rollout and Key Compliance Milestones — AZB & Partners](https://www.azbpartners.com/bank/indias-digital-personal-data-protection-act-phased-rollout-and-key-compliance-milestones/)
- [India Notifies Final Rules for Digital Data Protection Act — Baker Botts](https://ourtake.bakerbotts.com/post/102lund/india-notifies-final-rules-for-digital-data-protection-act)
- [A closer look at the DPDP Rules 2025 — Ikigai Law](https://www.ikigailaw.com/article/647/a-closer-look-at-the-dpdp-rules-2025)
- [Digital Personal Data Protection (DPDP) Rules, 2025 — Spice Route Legal](https://spiceroutelegal.com/publications/digital-personal-data-protection-dpdp-rules-2025/)
- [India publishes consent management rules under the DPDP Act — Hogan Lovells](https://www.hoganlovells.com/en/publications/india-publishes-consent-management-rules-under-digital-personal-data-protection-act)
- [DPDP Rules carve out key exemptions for healthcare providers, schools and childcare services — Storyboard18](https://www.storyboard18.com/digital/dpdp-rules-carve-out-key-exemptions-for-healthcare-providers-schools-and-childcare-services-processing-childrens-data-84208.htm)
- [How DPDP Rules 2025 affect Data Fiduciaries and SDFs — MediaNama](https://www.medianama.com/2025/11/223-dpdp-rules-2025-data-fiduciary-obligations/)
- [India's Data Protection Board: The Enforcer That Isn't There Yet — Mondaq](https://www.mondaq.com/india/data-protection/1774316/indias-data-protection-board-the-enforcer-that-isnt-there-yet)
- [India's Data Protection Board: Established In Law, Absent In Fact — LiveLaw](https://www.livelaw.in/articles/india-data-protection-board-established-law-543751)
- [Operationalisation of the Data Protection Board: MeitY invites applications — nasscom](https://community.nasscom.in/communities/public-policy/operationalisation-data-protection-board-meity-invites-applications)
- [SC seeks Centre's response on DPDP Act amendment to right to information — Business Standard](https://www.business-standard.com/india-news/sc-seeks-centre-s-response-on-dpdp-act-amendment-to-right-to-information-126080701892_1.html)
- [SC reviews privacy, RTI and press freedom under DPDP Act — Vajiram & Ravi](https://vajiramandravi.com/current-affairs/dpdp-act-challenge/)
- [Harmonizing Privacy and Accountability (RTI vs DPDP) — Drishti IAS](https://www.drishtiias.com/daily-updates/daily-news-editorials/harmonizing-privacy-and-accountability-rti-vs-dpdp)
- [Cross-Border Data Transfers and Data Localisation under the Data Protection Regime — Vidhi Centre for Legal Policy](https://vidhilegalpolicy.in/blog/cross-border-data-transfers-and-data-localisation-mandate-under-the-data-protection-regime/)
- [The EU Commission's Digital Package: reforming GDPR, ePrivacy, Data Act, AI and Cybersecurity — Reed Smith](https://www.reedsmith.com/articles/the-eu-commissions-digital-package-reforming-gdpr/)
- [The Digital Omnibus Regulation Proposal — European Parliament Legislative Train](https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-digital-package)
- [The Digital Omnibus proposal — key changes to EU digital and data legislation — Taylor Wessing](https://www.taylorwessing.com/en/global-data-hub/2026/the-digital-omnibus-proposal)
- [Data (Use and Access) Act 2025 — Information Commissioner's Office](https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/)
- [UK: Commencement of the data protection provisions in the Data (Use and Access) Act — DLA Piper Privacy Matters](https://privacymatters.dlapiper.com/2026/02/uk-commencement-of-the-data-protection-provisions-in-the-data-use-and-access-act/)
- [The Data (Use and Access) Act 2025: commencement dates and planned guidance for 2026 — Kennedys](https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-data-use-and-access-act-2025-commencement-dates-and-planned-guidance-for-2026/)
- [Japan: APPI Reform — Key Changes — Baker McKenzie](https://www.bakermckenzie.com/en/insight/publications/2026/05/japan-appi-reform-key-changes)
- [Proposed Amendments to Japan's APPI (2026) — Mori Hamada](https://www.morihamada.com/en/insights/newsletters/138006)
- [South Korea Amends Privacy Law to Authorize Fines of Up to 10% of Total Revenue — Hunton](https://www.hunton.com/privacy-and-cybersecurity-law-blog/south-korea-amends-privacy-law-to-authorize-fines-of-up-to-10-of-total-revenue)
- [Data Protection & Privacy 2026: South Korea — Chambers and Partners](https://practiceguides.chambers.com/practice-guides/data-protection-privacy-2026/south-korea/trends-and-developments)
- [China Releases Cross-Border Data Transfer Certification Measures — China Briefing](https://www.china-briefing.com/news/china-cross-border-data-transfer-certification/)
- [China Finalizes Certification Route for Cross-Border Data Transfer — R&P China Lawyers](https://www.rplawyers.com/china-finalizes-certification-route-for-cross-border-data-transfer/)
- [Vietnam's New Personal Data Protection Law: A Closer Look — Tilleke & Gibbins](https://www.tilleke.com/insights/vietnams-new-personal-data-protection-law-a-closer-look/)
- [Vietnam Personal Data Protection 2026: Key Updates — DFDL](https://www.dfdl.com/insights/legal-and-tax-updates/vietnam-personal-data-protection-2026-what-foreign-organizations-need-to-know/)
- [Australia's first tranche of privacy reforms — Ashurst](https://www.ashurst.com/en/insights/australias-first-tranche-of-privacy-reforms-a-deep-dive-and-why-they-matter/)
- [Australian Privacy Alert: Parliament passes major privacy law reform — Norton Rose Fulbright](https://www.nortonrosefulbright.com/en/knowledge/publications/be98b0ff/australian-privacy-alert-parliament-passes-major-and-meaningful-privacy-law-reform)
- [The second tranche of Privacy Act reforms: what's proposed and what's still uncertain — Rules Mate](https://rulesmate.com.au/insights/privacy-act-second-tranche-reforms-2026-outlook)
- [20 State Privacy Laws in Effect in 2026 — MultiState](https://www.multistate.us/insider/2026/2/4/all-of-the-comprehensive-privacy-laws-that-take-effect-in-2026)
- [U.S. Data Privacy Laws: A Guide to the 2026 Landscape — Osano](https://www.osano.com/us-data-privacy-laws)
- [Nigeria: NDPC issues GAID — key compliance insights — DLA Piper Privacy Matters](https://privacymatters.dlapiper.com/2025/06/nigeria-ndpc-issues-gaid-key-compliance-insights/)
- [From principles to practice: operationalizing Nigeria's Data Protection Act through the GAID — IAPP](https://iapp.org/news/a/from-principles-to-practice-operationalizing-nigerias-data-protection-act-through-the-gaid)
- [Nigeria targets 1,368 firms in landmark data protection crackdown — AllAfrica](https://allafrica.com/stories/202509020009.html)
- [Tracking Global Data Protection Laws in 2026 — Forcepoint](https://www.forcepoint.com/blog/insights/tracking-global-data-protection-laws-2026)
