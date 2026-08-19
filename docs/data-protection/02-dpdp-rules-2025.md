# Part 2 — The DPDP Rules, 2025, and the road to May 2027

**Notified by MeitY on 14 November 2025** (G.S.R. notification), following a draft published
for consultation on 3 January 2025 and roughly 20,000 public submissions.

**Structure: 23 rules and 7 Schedules.** The Rules carry most of the operative detail the
Act deliberately left out — notice format, security controls, breach timelines, retention
periods, children's-consent mechanics, SDF duties, and the Board's own machinery.

---

## 1. The three-phase commencement

This is the single most important practical fact about the Indian regime, because it fixes
what is enforceable *today* versus what is merely scheduled.

| Phase | Date | What comes into force |
|---|---|---|
| **Phase 1** | **13/14 November 2025** | Rules **1, 2, 17–22** — short title, definitions, and the entire Board apparatus: appointment and service conditions of the Chairperson and Members, officers and employees, the Board's functioning as a **digital office**, and appeals to the Appellate Tribunal. The Data Protection Board is legally constituted and complaints can, in principle, be filed. |
| **Phase 2** | **13 November 2026** | Rule **4** — registration and obligations of **Consent Managers**. The consent-intermediation market opens. |
| **Phase 3** | **13 May 2027** | Rules **3, 5–16, 23** — everything substantive: notice, State processing, security safeguards, breach notification, erasure and retention, DPO contact publication, children's and disabled persons' verifiable consent, exemptions, SDF obligations, Data Principal rights, cross-border transfer, the research exemption, and the Government's power to call for information. |

**Reading the phasing correctly.** Two implications are widely misunderstood:

1. **Nothing substantive is enforceable against an ordinary business before 13 May 2027.**
   The obligations in Rules 3 and 5–16 do not bind until then. The Act's own sections came
   into force on the same staggered basis.
2. **The 18-month runway is a compliance-build window, not a holiday.** Consent
   re-collection, notice re-issuance for pre-existing consents (S.5(2)), retention-and-
   erasure engineering, and breach-response tooling all have long lead times, and the
   Consent Manager ecosystem needs a full six months of operation before Phase 3 lands.

---

## 2. Rule-by-rule

### Rule 1–2 — Short title, commencement, definitions
Sets the staggered commencement above and defines terms used in the Rules.

### Rule 3 — Notice given by a Data Fiduciary to a Data Principal
The notice must be **presented independently of any other information** — a standalone
document or interface element, not a clause inside terms of service. It must be in **clear
and plain language**, and must give:

- an **itemised description** of the personal data being collected (not a category-level
  gesture such as "usage data");
- the **specific purpose** with an itemised description of the goods, services or uses
  enabled by the processing;
- a **communication link** or equivalent means to access the Fiduciary's website or app;
- the means to **withdraw consent** with comparable ease to giving it, to **exercise rights**
  under the Act, and to **complain to the Board**.

Language: English or any of the 22 Eighth Schedule languages, at the Data Principal's option.

**Effect.** This is the death of the bundled, incorporate-by-reference privacy policy in
India. The privacy policy still exists, but consent must ride on a separate, itemised,
purpose-specific notice. Product and design teams carry most of this work, not legal.

### Rule 4 — Consent Manager (First Schedule)
Registration with the Board is conditional on the applicant being **a company incorporated in
India**, with a demonstrated **net worth of at least ₹2 crore**, sound technical capability,
interoperable platform architecture, fit-and-proper certification of promoters and directors,
and published transparency around its business model.

Obligations (First Schedule, Part B) include: enabling consent to be given, managed, reviewed
and withdrawn; maintaining a **record of consents, notices and data sharing** and making it
available to the Data Principal; **not accessing the personal data itself** where technically
avoidable (the Consent Manager is a routing and record layer, not a data pool); maintaining
records for a specified period; and complying with Board directions, including a change of
control regime.

**Analysis.** No comparable statute institutionalises consent intermediation this way. The
nearest cousins are India's own Account Aggregator framework under the RBI and the DEPA
architecture. The bet is that a market of neutral consent brokers can carry the load created
by a consent-first lawful-basis design. Whether that market materialises by November 2026 is
the biggest open question in the Indian regime.

### Rule 5 — Processing by the State and its instrumentalities (Second Schedule)
Where the State processes under S.7(b) — subsidies, benefits, services, certificates,
licences and permits — it must do so in accordance with Second Schedule standards: lawful
processing, **purpose limitation**, **data minimisation**, accuracy efforts, **retention
limitation**, security safeguards, notice to Data Principals, and accountability, including a
named person answerable for the processing.

**Analysis.** Note the structure: the State is exempted from consent, then re-subjected to a
principles-based standard by delegated legislation rather than by the Act. The standards are
real but the enforcement path is weak — the Board is Government-appointed, and S.17(2)(a) can
remove a State instrumentality from the regime entirely by notification.

### Rule 6 — Reasonable security safeguards
The most engineering-specific rule in the instrument. A Data Fiduciary must, at minimum:

- **encrypt, obfuscate, mask or use virtual tokens** for personal data;
- implement **access control** on computer resources used to process personal data;
- maintain **logs, monitoring and review of access**, sufficient to detect, investigate and
  remediate unauthorised access — **retained for at least one year** unless another law
  requires longer;
- ensure **backups and continued processing** in the event of loss of availability;
- impose **equivalent safeguards contractually on Data Processors**;
- maintain **technical and organisational measures** to ensure the above are actually observed.

**Analysis.** India has done something the GDPR pointedly avoided: prescribe named controls
rather than a pure risk-based standard. Encryption/tokenisation is effectively mandatory, and
the **one-year access-log retention floor** is a hard, testable requirement. This is closer to
China's and Nigeria's prescriptive style than to Article 32 GDPR, and it makes Rule 6 the
easiest rule for a regulator to audit — which, given the ₹250 crore ceiling attached to S.8(5),
makes it the highest-exposure rule in the framework.

### Rule 7 — Intimation of a personal data breach
On becoming aware of **any** personal data breach:

**To each affected Data Principal — without delay**, describing in plain language: the nature,
extent and timing of the breach, its likely consequences, the mitigation measures being taken,
the safety measures the individual can take, and contact details for queries.

**To the Board — in two stages**: (i) **without delay**, an initial description of the breach
including its nature, extent, timing and likely impact; and (ii) **within 72 hours** (or a
longer period the Board allows on request), detailed particulars — the events and circumstances
leading to the breach, the measures taken to mitigate risk, findings on who caused it, remedial
measures to prevent recurrence, and a report on the intimations given to affected individuals.

**Analysis — this is stricter than the GDPR in three ways.**

1. **No materiality threshold.** GDPR Article 33 requires notification only where the breach
   is likely to result in a risk to rights and freedoms, and Article 34 notifies individuals
   only on *high* risk. India requires notification of every breach, to both the Board and
   every affected individual.
2. **Individual notification is immediate, not risk-gated.** "Without delay" to individuals
   is a harder trigger than any comparable regime.
3. **The penalty is structural.** Failure to notify is its own ₹200 crore tier, independent of
   the ₹250 crore tier for the underlying security failure. A well-defended company that
   notifies late faces the second exposure regardless.

India also retains the parallel **CERT-In Directions of 28 April 2022**, which require
reporting of specified cyber incidents within **six hours**. The two regimes are cumulative:
six hours to CERT-In, without delay plus 72 hours to the Board.

### Rule 8 — Erasure and retention (Third Schedule)
Personal data must be erased when the Data Principal withdraws consent or when the specified
purpose is no longer served, unless retention is required by law.

The **Third Schedule** deems the purpose to be no longer served — and therefore triggers
erasure — after **three years** from the date the Data Principal last approached the Fiduciary
for the specified purpose or last exercised their rights (or from commencement of the Rules,
whichever is later), for three notified classes:

| Class | Threshold |
|---|---|
| E-commerce entities | ≥ 2 crore (20 million) registered users in India |
| Online gaming intermediaries | ≥ 50 lakh (5 million) registered users in India |
| Social media intermediaries | ≥ 2 crore (20 million) registered users in India |

Before erasing, the Fiduciary must give the Data Principal **at least 48 hours' notice**; the
individual can prevent erasure by logging in or otherwise re-engaging.

Carve-outs: data required for account/virtual-token enablement, and data whose retention is
mandated by other law, are outside the Schedule.

**Analysis.** A statutory maximum inactivity-retention period is rare — the GDPR leaves
retention entirely to controller-set purpose limitation. India has instead set a bright line
for the largest consumer platforms only, which is administratively efficient and leaves
everyone else on the general purpose test. The 48-hour pre-erasure notice is a thoughtful
touch (it prevents silent destruction of a dormant user's account data) and an awkward one
(it forces platforms to build a deletion-warning pipeline and re-engagement path).

### Rule 9 — Contact information
The Fiduciary must **prominently publish**, on its website or app and in every notice sent to
Data Principals, the business contact information of the **Data Protection Officer** (if it has
one) or of a person able to answer questions about processing.

### Rule 10 — Verifiable consent for a child
Before processing a child's personal data, the Fiduciary must adopt **appropriate technical and
organisational measures** to ensure that verifiable consent is genuinely that of an adult
parent identifiable as such. Two accepted routes:

1. **Reliable identity details already held** by the Fiduciary, or voluntarily provided; or
2. **Virtual token mapped to identity details**, issued by an entity entitled to issue them —
   expressly including a **Digital Locker (DigiLocker) service provider** and, in practice,
   government-issued digital identity credentials.

Where the parent is not already a user, they must be identified as an adult by reference to
identity and age details or a virtual token.

**Analysis.** This is age-*verification*-adjacent rather than pure age assurance: it does not
mandate universal age-gating, but it makes DigiLocker the de facto national parental-consent
rail. The privacy trade-off is explicit — protecting children requires more identity data
flowing to Fiduciaries. Compare the UK's Age Appropriate Design Code (risk-proportionate age
assurance) and the US COPPA rule's menu of verification methods; India's is the most
identity-infrastructure-dependent design of the three.

### Rule 11 — Verifiable consent for a person with disability
Equivalent mechanics where a person with disability has a **lawful guardian**: the Fiduciary
must verify that the guardian is appointed by a court, a designated authority or a local level
committee under the disability legislation.

### Rule 12 — Exemptions for certain classes and purposes (Fourth Schedule)
Relief from parts of S.9 (children's verifiable consent, and the tracking/behavioural-
monitoring and targeted-advertising ban) for listed entities and purposes:

**Part A — entity-based**, each limited to a stated processing scope:
- clinical establishments, mental health establishments, healthcare professionals — health
  services necessary to protect the child's health;
- allied healthcare professionals — supporting treatment and referral plans;
- educational institutions — tracking and behavioural monitoring **for educational activities
  or child safety**;
- crèches, childcare centres and child-safety institutions — safety-related tracking;
- transport providers engaged by educational institutions — **location tracking during travel**.

**Part B — purpose-based**, including: exercise of a duty or power under law; provision of a
subsidy, benefit, service, certificate, licence or permit; creating a user account for email;
confirming that the user is not a child; ensuring information likely to be detrimental is not
made accessible to a child; and emergency/health-protection contexts.

**Analysis.** The school-bus location-tracking exemption and the school behavioural-monitoring
exemption are the ones civil society has flagged: they legalise continuous minor-tracking by
institutions with weak data governance, without individual consent and with only a
purpose-scope limitation as the guardrail. Note also the elegance of "confirming that the user
is not a child" as an exempt purpose — it resolves the circularity that age assurance itself
requires processing children's data.

### Rule 13 — Additional obligations of a Significant Data Fiduciary
An SDF must:

- conduct a **Data Protection Impact Assessment** and a **comprehensive audit** **once every
  twelve months**, and submit a report of **significant observations** to the Board;
- observe **due diligence to verify that algorithmic software** deployed for hosting, display,
  upload or sharing of personal data **does not pose a risk to the rights of Data Principals**;
- ensure that **personal data specified by the Central Government**, on the recommendation of a
  committee constituted by it, and **traffic data pertaining to its flow**, are **not
  transferred outside India**.

**Analysis.** Two provisions here are globally distinctive.

The **algorithmic due diligence duty** is the closest thing India has to AI regulation in the
data protection statute — a broad, undefined obligation to verify that algorithmic systems do
not endanger Data Principals' rights, with no methodology prescribed. It sits alongside the
EU AI Act and Japan's 2026 APPI amendments as one of three live legislative attempts to reach
algorithmic harm through data law, and it is by far the vaguest of the three.

The **localisation power** is the residue of the 2018–19 hard-localisation drafts. It is
narrow (SDFs only, notified data categories only) but open-ended, and it is the single largest
source of latent regulatory risk for multinationals: the categories have not been notified, so
an SDF cannot yet know which data must stay in India.

### Rule 14 — Rights of Data Principals
The Fiduciary and Consent Manager must **publish on their website or app** the means by which
a Data Principal may make a request to exercise rights, including any particulars required to
identify the requester, and must **publish the time period** within which they will respond to
grievances. Requests for access, correction, erasure, and nomination are exercised through
that published mechanism.

**Analysis.** Note what is delegated to the Fiduciary: the response deadline is *self-declared
and published*, not statutorily fixed. That is a genuine weakness relative to the GDPR's
one-month rule, Brazil's 15 days or California's 45 days. The discipline comes only from the
Board's ability to treat an unreasonable published period as a breach.

### Rule 15 — Transfer of personal data outside India
Transfer is permitted **subject to any restriction the Central Government notifies** in respect
of a country or territory, and subject to the Fiduciary meeting **any terms and conditions the
Government specifies** — in particular, conditions governing making personal data available to
a **foreign State or its agencies**.

**Analysis.** As of August 2026 no country had been placed on the restricted list. In effect,
India today has the most permissive cross-border regime of any major jurisdiction with a
comprehensive statute. The foreign-government-access condition is the interesting sleeper
clause: it is the hook by which India could impose *Schrems*-style scrutiny on foreign
surveillance access without building an adequacy machinery.

### Rule 16 — Exemption for research, archiving or statistical purposes (Second Schedule)
The Act does not apply to processing necessary for research, archiving or statistical purposes
provided it is carried on in accordance with the Second Schedule standards (lawful processing,
purpose limitation, data minimisation, accuracy, retention limitation, security, notice where
applicable, accountability), and provided the processing is **not used to take any decision
specific to a Data Principal**.

**Analysis.** A full exemption from the *entire Act*, not just from consent — considerably
broader than GDPR Article 89, which keeps research inside the Regulation and merely permits
derogations from specific rights. The safeguard doing the work is the no-individual-decisions
condition, plus the Schedule's standards.

### Rules 17–22 — The Board and appeals
Appointment, salary and service conditions of the **Chairperson and Members** (Fifth Schedule),
and of **officers and employees** (Sixth Schedule); the procedure for the Board's **functioning
as a digital office** — proceedings, hearings and orders conducted through digital means, with
techno-legal measures for authentication and record-keeping; and the **form, fee and manner of
filing an appeal** to the Appellate Tribunal (TDSAT), also digitally.

Selection of the Chairperson runs through a **Search-cum-Selection Committee headed by the
Cabinet Secretary**; a separate committee, headed by the Secretary, MeitY, shortlists Members.

### Rule 23 — Calling for information from a Data Fiduciary or intermediary (Seventh Schedule)
The Central Government, acting through the authorised person specified in the Seventh Schedule,
may require any Data Fiduciary or intermediary to furnish information for the purposes listed in
that Schedule, within a specified period. Where disclosure of the demand would prejudicially
affect the **sovereignty and integrity of India or the security of the State**, the Government
may direct the Fiduciary **not to disclose the demand** to the affected Data Principal or anyone
else without written permission.

**Analysis.** This is the operational face of S.36, and it includes a **statutory gag**. There
is no judicial authorisation requirement, no transparency-reporting obligation, no sunset, and
no notification to the individual — even after the fact. Compare the US ECPA non-disclosure
orders (judicially issued, time-limited, now subject to transparency reporting after *Microsoft
v. DOJ*) and the EU's e-Evidence Regulation (judicial or prosecutorial issuance with defined
grounds). Rule 23 is the provision that most sharply distinguishes India's regime from a
rights-first model, and it is squarely in the frame of the pending constitutional challenge.

---

## 3. The Schedules at a glance

| Schedule | Subject |
|---|---|
| **First** | Consent Manager — Part A: conditions of registration (Indian incorporation, ≥ ₹2 crore net worth, technical and interoperability capacity, fit-and-proper test); Part B: obligations, records, change of control |
| **Second** | Standards for processing exempt or specially treated under Rules 5 and 16 — State subsidy/benefit processing, and research/archiving/statistical processing |
| **Third** | Deemed erasure trigger (3 years of inactivity) for large e-commerce, online gaming and social media entities, with 48-hour pre-erasure notice |
| **Fourth** | Part A — classes of Data Fiduciary exempt from parts of S.9 (healthcare, education, childcare, child transport); Part B — exempt purposes |
| **Fifth** | Salary, allowances and terms of service of the Chairperson and Members of the Board |
| **Sixth** | Terms and conditions of service of the Board's officers and employees |
| **Seventh** | Purposes for which, and authorised persons through whom, the Government may call for information under Rule 23 |

---

## 4. State of implementation as of 19 August 2026

| Item | Status |
|---|---|
| DPDP Act commencement | Phased; Phase 1 provisions in force since 13 Nov 2025 |
| DPDP Rules notification | Done, 14 Nov 2025 |
| **Data Protection Board constituted with members** | **No.** MeitY invited applications for Chairperson and Members by notification dated **6 May 2026**; on the public record no Chairperson or Member had been appointed as of mid-August 2026 |
| Consent Manager registrations | Not open; Rule 4 commences 13 Nov 2026 |
| SDF notifications | None issued |
| Restricted-country list under Rule 15 | Empty |
| Notified data categories subject to SDF localisation | None |
| Substantive obligations enforceable | Not until **13 May 2027** |
| RTI amendment (S.44(3)) | In force; under challenge in the Supreme Court, which sought the Union's response in August 2026 |

**The enforcement gap is the defining feature of the present moment.** India has a fully
notified data protection framework, a fixed compliance deadline, penalty ceilings among the
highest in Asia — and no sitting regulator. Complaints can be filed in theory; there is nobody
appointed to hear them. Every quarter the Board remains unconstituted compresses the runway
for building institutional capacity before the May 2027 cliff, when the obligations of several
million Data Fiduciaries become enforceable at once.

---

## 5. Compliance calendar

| By | Do |
|---|---|
| **Now → Q4 2026** | Data discovery and mapping; classify every personal-data element and its lawful basis under S.6/S.7; identify child-data flows; identify Processor relationships and paper them under S.8(2) |
| **Now → Q4 2026** | Implement Rule 6 controls: encryption/tokenisation, access control, access logging with ≥ 1-year retention, backups, Processor flow-downs. These are the highest-penalty, most auditable requirements and have the longest engineering lead time |
| **Q3 2026 → Q1 2027** | Rebuild consent capture and notice: standalone itemised notices, 22-language support, withdrawal parity, per-purpose consent records |
| **By 13 Nov 2026** | Decide the Consent Manager posture — integrate with registered Consent Managers, or become one |
| **Q4 2026 → Q1 2027** | Build the breach runbook to Rule 7 timings *and* CERT-In's 6-hour direction; rehearse it |
| **Q1 2027** | Build rights fulfilment: access summary, correction, erasure, nomination; publish the request mechanism and the response period per Rule 14 |
| **Q1 2027** | Retention and deletion engineering: purpose-expiry deletion, Third Schedule inactivity clock and 48-hour pre-erasure notice if in scope |
| **Q1–Q2 2027** | Re-notice all pre-commencement consents under S.5(2); publish DPO/contact per Rule 9 |
| **By 13 May 2027** | Full compliance. If notified an SDF: DPO resident in India reporting to the board, independent auditor engaged, first annual DPIA and audit scheduled, algorithmic due-diligence process documented |
