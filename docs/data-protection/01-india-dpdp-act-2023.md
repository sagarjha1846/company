# Part 1 — The Digital Personal Data Protection Act, 2023

**Act 22 of 2023.** Passed by the Lok Sabha on 7 August 2023 and the Rajya Sabha on
9 August 2023; received Presidential assent on **11 August 2023**. Brought into force in
stages from **13 November 2025** alongside the DPDP Rules, 2025.

Structure: **9 chapters, 44 sections, one Schedule.** No sub-schedules, no recitals. At
roughly 6,500 words of operative text it is one of the shortest comprehensive data
protection statutes in the world — the GDPR runs to about 55,000 words including recitals.

---

## 1. Constitutional and legislative background

### 1.1 The right that made the Act necessary

The Act is the legislative answer to *Justice K.S. Puttaswamy (Retd.) v. Union of India*
(2017) 10 SCC 1, in which a nine-judge bench of the Supreme Court unanimously held that
the right to privacy — including informational privacy — is a fundamental right under
Article 21. The judgment did not merely declare the right; it directed the Union to put in
place a data protection framework, and it supplied the proportionality test
(legality, legitimate aim, necessity, proportionality, procedural safeguards) against which
any statutory intrusion on privacy is now measured. Several of the criticisms in
[Part 5](05-findings-and-gap-analysis.md) are proportionality arguments in that frame.

### 1.2 The five-year drafting sequence

| Year | Milestone |
|---|---|
| 2017 | *Puttaswamy*; Srikrishna Committee constituted |
| 2018 | Srikrishna Committee report + draft Personal Data Protection Bill, 2018 — GDPR-shaped, with sensitive/critical data categories and hard localisation |
| 2019 | Personal Data Protection Bill, 2019 introduced; referred to a Joint Parliamentary Committee |
| 2021 | JPC report; Bill expands to cover non-personal data |
| Aug 2022 | Bill **withdrawn** in its entirety — the Government said it would return with a redrawn framework |
| Nov 2022 | Draft Digital Personal Data Protection Bill, 2022 released for consultation — radically shorter, drops sensitive-data categories, drops hard localisation |
| Aug 2023 | DPDP Act enacted, largely tracking the 2022 draft |
| Jan 2025 | Draft DPDP Rules released for public consultation |
| **14 Nov 2025** | **DPDP Rules, 2025 notified; Act commenced in phases** |

The withdrawal in 2022 is the pivot. Everything distinctive about the DPDP Act — the
absence of sensitive-data categories, the negative-list approach to transfers, the tiny
lawful-basis list, the delegation of substance to rules — dates from that redraw, and is
best read as a deliberate move away from the GDPR template toward a lighter, more
executive-controlled model.

### 1.3 What the Act replaced

S.44(1) omits **S.43A of the Information Technology Act, 2000** (the compensation provision
for negligent handling of sensitive personal data) and the corresponding rule-making power,
which removes the legal foundation of the **SPDI Rules, 2011**. The practical effect: India
moved from a narrow, compensation-driven, sensitive-data-only regime to a broad,
penalty-driven regime that covers all digital personal data — while *losing* the individual
compensation remedy in the process. See [Part 5, §3.6](05-findings-and-gap-analysis.md).

---

## 2. Chapter I — Preliminary (S.1–S.3)

### S.1 — Short title and commencement
Commencement was left to Government notification on a provision-by-provision basis. This is
the hook that produced the three-phase rollout described in [Part 2](02-dpdp-rules-2025.md):
the Act sat un-commenced for 27 months after assent.

### S.2 — Definitions
Twenty-six definitions. The load-bearing ones:

- **Personal data** — "any data about an individual who is identifiable by or in relation to
  such data." Deliberately broad and identity-linked; no distinction by category.
- **Digital personal data** — personal data in digital form. The Act's entire scope is keyed
  to this.
- **Data Principal** — the individual. Where the individual is a child, includes the parent
  or lawful guardian; where a person with disability, includes the lawful guardian. India
  uses "principal" rather than "subject" — a drafting choice signalling agency.
- **Data Fiduciary** — any person who alone or with others determines the purpose and means
  of processing. Functionally the GDPR "controller," but named for a relationship of trust,
  echoing the Srikrishna Committee's framing.
- **Data Processor** — processes on behalf of a Fiduciary.
- **Consent Manager** — a person registered with the Board who enables a Data Principal to
  give, manage, review and withdraw consent through an accessible, transparent and
  interoperable platform. A genuine Indian innovation with no GDPR analogue; closest cousins
  are account-aggregator/DEPA-style consent intermediaries.
- **Processing** — a wholly or partly automated operation or set of operations. Note the
  automation qualifier: purely manual processing sits outside.
- **Significant Data Fiduciary (SDF)** — a Fiduciary or class notified by the Central
  Government under S.10.

**What is *not* defined:** sensitive personal data, critical personal data, pseudonymisation,
anonymisation, profiling, automated decision-making, or data protection officer duties. Each
absence has downstream consequences.

### S.3 — Application

**Applies to:**
- (a) processing of digital personal data **within India** where the data is collected in
  digital form, or collected in non-digital form and **subsequently digitised**;
- (b) processing **outside India**, if it is "in connection with any activity related to
  offering of goods or services to Data Principals within" India.

**Does not apply to:**
- (c)(i) personal data processed by an individual for **personal or domestic purposes**;
- (c)(ii) personal data that the Data Principal has **made publicly available themselves**,
  or that any person is under a **legal obligation to make public** (e.g. a company register,
  an electoral roll, a court judgment).

**Analysis.** Two features distinguish S.3 from GDPR Article 3:

1. **The extraterritorial trigger is narrower.** The GDPR catches both (a) offering goods or
   services and (b) *monitoring behaviour* of people in the EU. The 2022 draft Bill contained
   a profiling limb; the enacted Act dropped it. A foreign adtech or analytics firm that
   profiles Indian users without offering them anything is, on the face of S.3(b), outside
   the Act. This is the single largest scope gap in the statute.
2. **The publicly-available carve-out is unusually wide.** Because it is an exclusion from
   *application* rather than a lawful basis, data lawfully in the public domain — including
   statutory registers — falls out of the Act entirely, along with every downstream right.
   The GDPR takes the opposite approach: public availability may affect the balancing test
   but never removes the data from scope. This carve-out is what makes large-scale scraping
   of Indian public registers legally uncomplicated under the DPDP Act, and it is directly
   relevant to any product built on registry data (see
   [Part 6, Annex A](06-compliance-playbook.md#annex-a--applicability-note-for-this-repository)).

---

## 3. Chapter II — Obligations of Data Fiduciary (S.4–S.10)

This is the operative heart of the Act.

### S.4 — Grounds for processing
Personal data may be processed **only** for a lawful purpose, and only either
(a) with the Data Principal's **consent**, or (b) for **certain legitimate uses**. "Lawful
purpose" means one not expressly forbidden by law.

There are therefore **two lawful bases**, not six. There is no contractual-necessity basis,
no vital-interests basis of general application, no public-task basis for private parties,
and — critically — **no legitimate-interests basis**. Every ordinary commercial purpose that
a GDPR controller would run on Article 6(1)(b) or 6(1)(f) must, in India, run on consent.

### S.5 — Notice
Consent requests must be accompanied or preceded by a notice stating:
- (i) the **personal data** to be collected and the **purpose** of processing;
- (ii) the manner of **exercising rights** under S.6(4) (withdrawal) and S.13 (grievance);
- (iii) the manner of **complaining to the Board**.

The notice must be presented in **English or any language in the Eighth Schedule** to the
Constitution (22 languages) at the Data Principal's option. For consent obtained *before*
commencement, S.5(2) requires a retrospective notice "as soon as reasonably practicable" —
pre-existing consents survive but must be re-papered.

The Rules add that the notice must be **standalone**, clear, understandable independently of
any other document, and itemised. This kills the bundled privacy-policy-by-reference model.

### S.6 — Consent
Consent must be **free, specific, informed, unconditional and unambiguous, with a clear
affirmative action**, and signifies agreement to processing **only for the specified purpose
and limited to the personal data necessary for it**. Consent to processing beyond that
necessity is void to that extent (S.6(1) proviso and illustrations).

- **S.6(2):** any part of a consent request infringing the Act is invalid to that extent.
- **S.6(4):** the Data Principal may **withdraw consent at any time**, and the ease of
  withdrawal must be **comparable to the ease of giving**.
- **S.6(5):** consequences of withdrawal are borne by the Data Principal.
- **S.6(6):** on withdrawal, the Fiduciary must **cease processing** — and cause its
  Processors to cease — within a reasonable time, unless another law requires retention.
- **S.6(7)–(9):** consent may be given, managed, reviewed and withdrawn **through a Consent
  Manager**, which must be registered with the Board and is **accountable to the Data
  Principal**, acting on their behalf.

**Analysis.** India's consent standard is textually *stricter* than the GDPR's: the GDPR
requires freely given, specific, informed and unambiguous consent, but not "unconditional,"
and it does not void over-broad consent by operation of law. Combined with the absence of a
legitimate-interests basis, the result is a **consent-maximalist** regime — which is precisely
why the Consent Manager institution exists. Without an intermediation layer, consent fatigue
would make the regime unworkable at Indian internet scale.

### S.7 — Certain legitimate uses
The nine non-consent grounds, and they are **exhaustive**:

| | Ground |
|---|---|
| (a) | Data **voluntarily provided** by the Principal for a specified purpose, where they have not indicated non-consent (illustration: giving a pharmacy a phone number for a bill) |
| (b) | The **State** providing a subsidy, benefit, service, certificate, licence or permit — including where the Principal previously consented, or where the data is already in a notified Government database or register |
| (c) | Performance of any **function under law**, or in the interest of **sovereignty and integrity of India or security of the State** |
| (d) | Fulfilling a **legal obligation to disclose** information to the State |
| (e) | Compliance with a **judgment, decree or order** (including foreign orders on contractual/civil claims) |
| (f) | **Medical emergency** involving a threat to life or immediate health |
| (g) | Taking measures during an **epidemic** or other threat to public health |
| (h) | Ensuring safety during a **disaster** or breakdown of public order |
| (i) | Purposes related to **employment**, or safeguarding the employer from loss or liability — corporate espionage, trade secrets, IP, classified information, or providing a service or benefit sought by an employee |

**Analysis.** Two ground families dominate: **State processing** (b)–(e), (g)–(h) and
**employment** (i). Note the asymmetry: the State gets a broad, self-executing basis for
essentially all citizen-facing service delivery, while a private company gets nothing
equivalent for its own service delivery. Ground (a) — "voluntarily provided" — is the only
flexible commercial ground, and its scope is genuinely unsettled: it plausibly covers a
customer handing over a delivery address, but not analytics, personalisation, or secondary use.

### S.8 — General obligations of a Data Fiduciary
The compliance spine. A Data Fiduciary:

1. **(1)** is responsible for compliance **including for processing by a Processor on its
   behalf**, regardless of any contrary agreement or the Principal's failure to perform a duty;
2. **(2)** may engage a Processor **only under a valid contract**;
3. **(3)** must ensure **completeness, accuracy and consistency** of data where it is used to
   make a decision affecting the Principal, or is disclosed to another Fiduciary;
4. **(4)** must implement **appropriate technical and organisational measures**;
5. **(5)** must take **reasonable security safeguards** to prevent a personal data breach;
6. **(6)** must **notify the Board and each affected Data Principal** of a breach;
7. **(7)** must **erase** personal data on withdrawal of consent or when the purpose is no
   longer being served, whichever is earlier — and cause its Processors to erase — unless
   retention is required by law;
8. **(9)** must publish the **business contact information of a Data Protection Officer** (if
   applicable) or of a person able to answer questions about processing;
9. **(10)** must establish an effective **grievance redressal** mechanism.

Note S.8(5) and S.8(6) carry the two highest penalty tiers in the Schedule (₹250 crore and
₹200 crore respectively). Also note what S.8 does *not* require: no record-of-processing
obligation for ordinary Fiduciaries, no privacy-by-design mandate, no DPIA except for SDFs.

### S.9 — Children and persons with disability
- **(1)** Before processing a child's data, obtain **verifiable consent of the parent or
  lawful guardian**; same for a person with disability who has a lawful guardian.
- **(2)** No processing **likely to cause any detrimental effect on the well-being of a child**.
- **(3)** No **tracking or behavioural monitoring** of children, and **no targeted advertising
  directed at children**.
- **(4)–(5)** The Central Government may exempt classes of Fiduciaries or purposes from (1)
  and (3), and may notify a **lower age** than 18 for a class of Fiduciary that processes
  children's data in a verifiably safe manner.

**Analysis.** "Child" means anyone under **18** (S.2(f)) — the highest threshold in any
comparable statute. The GDPR sets 16 with member-state discretion down to 13; US COPPA uses
13; Japan's 2026 amendment adopted 16; South Korea uses 14. The ban in S.9(3) is absolute on
its face — it is not a consent-defeasible restriction — which makes India, on paper, the most
restrictive major jurisdiction for children's advertising. The safety valve is S.9(4)–(5):
the entire limb can be softened by executive notification, and the Rules already use it (see
[Part 2](02-dpdp-rules-2025.md)).

### S.10 — Significant Data Fiduciaries
The Central Government may notify any Fiduciary or class as an SDF, on an assessment of:
volume and sensitivity of data; risk to Data Principals' rights; potential impact on the
**sovereignty and integrity of India**; risk to **electoral democracy**; **security of the
State**; and **public order**.

An SDF must:
- **(a)** appoint a **Data Protection Officer** who is **based in India**, **reports to the
  Board of Directors** or equivalent, and is the point of contact for grievance redressal;
- **(b)** appoint an **independent data auditor** to evaluate compliance;
- **(c)** undertake **periodic Data Protection Impact Assessments**, **periodic audits**, and
  other prescribed measures.

**Analysis.** Two things are unusual. First, the designation criteria are explicitly
*political* as well as risk-based — "risk to electoral democracy" and "sovereignty and
integrity" are not found in GDPR Article 37 or in any comparable statute. Second, SDF status
is **conferred by notification, not by self-assessment against thresholds**. A company cannot
know it is an SDF until the Government says so — the opposite of the GDPR's self-assessing
Article 35/37 model, and of Brazil's and Nigeria's threshold-based approaches. As of
August 2026 no SDF notification had issued.

---

## 4. Chapter III — Rights and Duties of the Data Principal (S.11–S.15)

### S.11 — Right to access information
On request, the Data Principal is entitled to:
- a **summary** of their personal data and of the processing activities undertaken;
- the **identities of all other Fiduciaries and Processors** with whom the data has been
  shared, with a description of what was shared;
- any other prescribed information.

*Not* included: a copy of the data itself (only a summary), the retention period, the source
of the data, or the existence of automated decision-making. The right does not apply to
sharing done under S.7(c)–(e) for prevention/detection/investigation of offences.

### S.12 — Right to correction, completion, updating and erasure
The Fiduciary must correct inaccurate or misleading data, complete incomplete data, update
data, and **erase** on request — subject to retention required by law or "for the specified
purpose."

### S.13 — Right of grievance redressal
The Principal has a right to a readily available means of grievance redressal provided by the
Fiduciary or Consent Manager, which must respond within a prescribed period. **S.13(3) requires
the Principal to exhaust this mechanism before approaching the Board.** This is a hard
precondition, unlike the GDPR where a complaint may go straight to a supervisory authority.

### S.14 — Right to nominate
The Principal may nominate any other individual to exercise their rights in the event of death
or incapacity. This is genuinely novel — a succession mechanism for personal data with no
equivalent in the GDPR, PIPL, LGPD or the US state laws. It reflects the practical reality of
digital account inheritance, and it is the most-copied candidate in the Act.

### S.15 — Duties of the Data Principal
The Principal **shall**: comply with all applicable laws when exercising rights; not
impersonate another person when providing data; not suppress material information when
providing data for a document/identifier issued by the State; not register a **false or
frivolous grievance or complaint**; and furnish only verifiably authentic information when
exercising the correction/erasure right.

Breach of these duties is punishable by a penalty of up to **₹10,000** (Schedule, entry 5).

**Analysis.** This is the Act's most criticised structural feature and has no analogue
anywhere in comparative law. No other data protection statute imposes enforceable duties —
let alone monetary penalties — on the individual whose data is being protected. The chilling
effect is the objection: an individual weighing a complaint against a large Fiduciary must
price in the risk that the Board deems it "frivolous." It inverts the protective asymmetry
that data protection law exists to create.

---

## 5. Chapter IV — Special Provisions (S.16–S.17)

### S.16 — Processing outside India
The Central Government **may, by notification, restrict** transfer of personal data to any
country or territory outside India. S.16(2) preserves any **higher** localisation standard
imposed by another law (e.g. RBI's payment-system data storage directive, IRDAI rules,
sectoral CERT-In and telecom obligations).

**Analysis — the negative list.** The default is *free transfer*; restriction requires
affirmative Government action. Compare:

| Model | Default | Mechanisms |
|---|---|---|
| **India (S.16 + Rule 15)** | Transfer permitted | Government blacklist; extra localisation only for SDFs on notified data categories |
| **EU GDPR (Ch. V)** | Transfer prohibited | Adequacy decisions, SCCs, BCRs, derogations, transfer impact assessments |
| **China PIPL (Art. 38)** | Transfer prohibited | CAC security assessment, CAC standard contract filing, or certification |
| **Vietnam PDPL** | Transfer permitted with filing | Transfer impact dossier lodged with the authority |

India's model is the most trade-friendly of the four and reverses the 2018–19 drafts, which
proposed mirror-copy localisation for all personal data and hard localisation for "critical"
data. The residual localisation power now sits only in Rule 15's SDF proviso.

### S.17 — Exemptions
The most consequential and most contested section.

**S.17(1) — self-executing exemptions** from Chapter II (except S.8(1) and S.8(5)),
Chapter III, and S.16, where processing is:
- (a) necessary to enforce a **legal right or claim**;
- (b) by a **court, tribunal or any body** performing judicial, quasi-judicial, regulatory or
  supervisory functions;
- (c) for **prevention, detection, investigation or prosecution** of any offence;
- (d) processing **in India of the personal data of non-residents** under a contract with a
  person outside India — the **outsourcing/BPO carve-out**;
- (e) approved **scheme of compromise, arrangement, merger, amalgamation or demerger**;
- (f) ascertaining the financial position of a **defaulter** who has taken a loan.

**S.17(2) — notification-based exemptions**, where the Central Government may exempt:
- (a) **any instrumentality of the State** from the Act (in whole or part) in the interests of
  sovereignty and integrity, security of the State, friendly relations with foreign States,
  public order, or preventing incitement to any cognisable offence;
- (b) processing for **research, archiving or statistical purposes**, subject to prescribed
  standards.

**S.17(3)–(4):** the Government may exempt classes of Fiduciaries — expressly including
**startups** — from S.5, S.8(3), S.8(7), S.10 and S.11; and may, for up to **five years** from
commencement, notify that any provision does not apply to specified Fiduciaries.

**Analysis.** S.17(2)(a) is the provision that draws the sharpest constitutional criticism.
Its grounds broadly mirror Article 19(2), but unlike Article 19(2) restrictions there is no
statutory requirement of necessity, proportionality, time limitation, independent oversight,
or notification to affected individuals — the safeguards *Puttaswamy* identified as
constitutionally required. The exemption is a plenary executive power exercised by
notification. Combined with S.7(c) and S.36, it means the State can process citizens' data on
a legitimate-use basis, exempt itself from the remaining obligations, and compel disclosure
from private Fiduciaries — with the Board, itself Government-appointed, as the only check.
This is the core of the surveillance objection considered in
[Part 5](05-findings-and-gap-analysis.md).

The **S.17(1)(d) BPO carve-out** deserves separate note: it exempts India's IT/BPM industry
from the Act when processing foreign data under contract. It is an industrial-policy provision
and a direct competitive response to the Philippines and Eastern Europe.

---

## 6. Chapters V–VII — The Board, its procedure, and appeals (S.18–S.32)

### S.18–S.26 — Data Protection Board of India
Constituted by Central Government notification as a body corporate. Composition, qualifications
and the appointment process are left to **rules** (S.19). Members serve **two-year terms** and
are **eligible for re-appointment** (S.20). The Board functions as a **digital office**:
proceedings, hearings and orders are conducted digitally (S.28(1) and Rule 18–20).

### S.27 — Functions
On a personal data breach or a complaint: direct **urgent remedial or mitigation measures**,
**inquire** into the breach or non-compliance, and **impose penalties**. Also: hear complaints
about Consent Manager breaches, refer complaints to mediation (S.31), accept voluntary
undertakings (S.32), and advise the Government on blocking (S.37).

### S.28 — Procedure
The Board may act on a complaint, on a reference from the Government, or on a court direction.
It has **the powers of a civil court** for summoning, discovery, receiving evidence and
inspection (S.28(7)), and may issue interim orders. It must record reasons; proceedings are
judicial proceedings for the purposes of the IPC/BNS.

### S.29–S.30 — Appeals
Appeal lies to the **Telecom Disputes Settlement and Appellate Tribunal (TDSAT)** within
**60 days**, extendable for sufficient cause. TDSAT must endeavour to dispose of the appeal
within **six months**, has the powers of a civil court, and its orders are executable as
decrees. A further appeal lies to the Supreme Court.

**Analysis.** Using TDSAT — a telecom-sector tribunal — as the data protection appellate
forum is a resource-driven choice that has drawn criticism on subject-matter-competence
grounds. It also means data protection jurisprudence in India will develop in a tribunal whose
institutional culture is licensing and tariff disputes, not fundamental rights.

### S.31 — Mediation; S.32 — Voluntary undertaking
The Board may direct mediation. It may also accept a **voluntary undertaking** at any stage,
which — once accepted — **bars proceedings** on that subject matter; breach of an undertaking
triggers penalties as if the underlying provision were breached. This is a settlement mechanism
modelled on UK/Australian regulatory practice, and it will likely become the dominant
resolution route in practice.

---

## 7. Chapter VIII — Penalties and adjudication (S.33–S.34), and the Schedule

### S.33 and the Schedule

| # | Breach | Penalty ceiling |
|---|---|---|
| 1 | Failure to take **reasonable security safeguards** to prevent a breach (S.8(5)) | **₹250 crore** |
| 2 | Failure to **notify** the Board or affected Principals of a breach (S.8(6)) | **₹200 crore** |
| 3 | Breach of **children's data** obligations (S.9) | **₹200 crore** |
| 4 | Breach of **additional SDF obligations** (S.10) | **₹150 crore** |
| 5 | Breach of **Data Principal duties** (S.15) | **₹10,000** |
| 6 | Breach of a **voluntary undertaking** (S.32) | Up to the extent applicable to the underlying breach |
| 7 | **Residuary** — any other breach of the Act or Rules | **₹50 crore** |

Amounts are **ceilings per instance**, not fixed fines. S.33(2) requires the Board to consider
the nature, gravity and duration of the breach, the type of data affected, repetitiveness, any
gain or loss avoided, mitigating action taken, proportionality and effectiveness, and the
likely impact of the penalty on the person.

### S.34 — Where the money goes
Penalties are credited to the **Consolidated Fund of India**.

**Analysis.** The penalty ceilings are large in absolute terms — ₹250 crore is roughly
US$28–30 million — but they are **absolute caps, not turnover-linked**. For a global platform
this is materially *less* exposure than the GDPR's 4% of worldwide annual turnover, Brazil's
2% of Brazilian revenue, or South Korea's post-2026 10% of total revenue in severe cases. For
an Indian mid-market company the same ceiling is existential. The regime is therefore
regressive in relative terms: it bites hardest on domestic firms and least on the largest
foreign platforms.

More importantly, **none of the money reaches the injured individual**. With S.43A of the IT
Act repealed, there is no statutory compensation route and no private right of action. An
individual harmed by a breach is left with common-law and constitutional remedies.

---

## 8. Chapter IX — Miscellaneous (S.35–S.44)

| Section | Provision | Note |
|---|---|---|
| S.35 | Protection of action taken in good faith | Immunity for the Board, Chairperson, Members, officers |
| **S.36** | **Power to call for information** | The Central Government may require the Board, any Data Fiduciary or any intermediary to furnish such information as it may call for. No stated purpose limitation, no proportionality test, no notice to affected individuals. A significant standalone information-gathering power |
| **S.37** | **Power to issue directions / blocking** | On a reference from the Board, where a Fiduciary has been penalised **on two or more occasions**, and after an opportunity of hearing, the Government may direct blocking of access to the Fiduciary's computer resource in the interests of the general public. An IT Act S.69A-style escalation applied to data protection |
| S.38 | Consistency with other laws | The Act is **in addition to** other laws; where another law provides a **higher degree of protection**, that higher standard prevails |
| S.39 | Bar of jurisdiction | **No civil court** shall have jurisdiction over any matter the Board is empowered to determine, and **no injunction** shall lie |
| S.40 | Power to make rules | Twenty-six enumerated rule-making subjects — the delegation map |
| S.41 | Laying of rules before Parliament | |
| S.42 | Power to amend the Schedule | The Government may amend penalty amounts, but **not beyond twice** the stated figure |
| S.43 | Power to remove difficulties | Exercisable for three years from commencement |
| **S.44** | **Amendments to certain Acts** | (1) omits **S.43A of the IT Act** and the related rule-making power; (2) amends S.30(2) of the Telecom Regulatory Authority of India Act; **(3) substitutes S.8(1)(j) of the Right to Information Act, 2005** |

### 8.1 S.44(3) — the RTI amendment

The pre-existing S.8(1)(j) of the RTI Act exempted from disclosure:

> "information which relates to personal information the disclosure of which has no
> relationship to any public activity or interest, or which would cause unwarranted invasion
> of the privacy of the individual **unless the Central Public Information Officer or the State
> Public Information Officer or the appellate authority, as the case may be, is satisfied that
> the larger public interest justifies the disclosure of such information**"

S.44(3) replaces the whole clause with:

> "information which relates to personal information"

The three elements deleted are: the **public-activity nexus test**, the **unwarranted-invasion
test**, and the **larger-public-interest override**. What remains is a categorical exemption.

**Analysis.** This converts a balancing provision into a blanket bar. Public Information
Officers lose the power to weigh privacy against accountability. The practical consequences
argued by critics: officials' assets, qualifications and disciplinary records; beneficiary
lists for welfare schemes; recruitment and selection records; and much investigative-journalism
source material all become presumptively exempt. Defenders argue the RTI Act's S.8(2)
public-interest override (over the whole of S.8) survives and can carry the balancing work, and
that S.4 proactive-disclosure duties are untouched — but S.8(2) has historically been used
sparingly, and the specific override that PIOs actually applied is gone.

Three PILs challenging the amendment are pending before the **Supreme Court**, which in
**August 2026** sought the Union's response. The petitions frame the amendment as
disproportionate under *Puttaswamy* and as an impermissible restriction on Article 19(1)(a),
also raising the absence of a journalism exemption and the breadth of S.17(2)(a). See
[Part 5, §4](05-findings-and-gap-analysis.md).

---

## 9. What the Act does not contain

A checklist of provisions found in comparable statutes and absent here. Each is analysed
comparatively in [Part 4](04-comparative-matrices.md) and [Part 5](05-findings-and-gap-analysis.md).

- **No sensitive / special-category data.** No heightened treatment for health, biometrics,
  caste, religion, sexual orientation, financial or genetic data.
- **No right to data portability.** Present in the 2019 Bill; dropped.
- **No right to object / restrict processing.**
- **No rights concerning automated decision-making or profiling.** No right to explanation, no
  right not to be subject to solely automated decisions. Notable given India's scale of
  algorithmic credit scoring and welfare targeting.
- **No purpose-limitation clause of general application** independent of consent.
- **No data-minimisation obligation** stated as a standalone principle (it is implicit in the
  consent-necessity rule in S.6(1)).
- **No mandatory records of processing** for non-SDF Fiduciaries.
- **No privacy-by-design or by-default obligation.**
- **No DPIA obligation** except for SDFs.
- **No statutory compensation right and no private right of action.**
- **No journalism, literary or artistic exemption.** The 2022 draft had none either; the 2018
  Srikrishna draft did. Its absence is a live free-speech issue in the pending litigation.
- **No express anonymisation standard**, so the boundary of the Act's application to
  de-identified data is undefined.
- **No breach-severity threshold.** *Every* personal data breach must be reported — see
  [Part 2](02-dpdp-rules-2025.md) — unlike the GDPR's "risk to rights and freedoms" filter.
