# Part 8 — The case law: what courts have actually decided

Statutes are only half the picture. This part collects the judicial decisions that determine
how the DPDP Act will be read, and the comparative rulings that show where a mature data
protection jurisprudence ends up. Every case is cited so the holding can be checked.

---

## 1. India — the constitutional foundation

### 1.1 *K.S. Puttaswamy (Retd.) v. Union of India* (2017) 10 SCC 1 — the nine-judge bench

Held unanimously that **privacy, including informational privacy, is a fundamental right**
under Article 21, overruling *M.P. Sharma* (1954) and *Kharak Singh* (1962) to the extent they
held otherwise.

The operative legacy for data protection is the **four-part proportionality test** that any
state intrusion on privacy must satisfy:

1. **Legality** — the intrusion must rest on a law;
2. **Legitimate aim** — the state must pursue a legitimate goal;
3. **Proportionality / necessity** — the means must be the least restrictive available and
   rationally connected to the aim;
4. **Procedural safeguards** — there must be safeguards against abuse.

Justice Kaul's concurrence went further and expressly called for a data protection statute,
which is what set the 2018–2023 legislative sequence in motion.

**Why it decides the DPDP Act's fate.** Limbs 3 and 4 are exactly what
[S.17(2)(a)](01-india-dpdp-act-2023.md) (blanket State exemptions) and
[Rule 23](02-dpdp-rules-2025.md) (information demands with a gag) omit: no necessity test, no
time limit, no independent review, no notification. The Act's own constitutional pedigree is
the standard by which its carve-outs are now being judged.

### 1.2 *K.S. Puttaswamy v. Union of India* (2019) 1 SCC 1 — the Aadhaar judgment

Applied the proportionality test to the Aadhaar Act. The majority upheld Aadhaar for subsidy
delivery but **struck down S.57**, which had permitted private entities to demand Aadhaar
authentication, and read down S.33(2) (disclosure on national-security grounds). It is the
leading Indian authority for the proposition that **a legitimate aim does not license
open-ended data collection**, and for judicial willingness to sever over-broad enabling
provisions.

### 1.3 *Anuradha Bhasin v. Union of India* (2020) 3 SCC 637

Applied proportionality to internet shutdowns and required that restriction orders be
**published, reasoned and subject to periodic review**. The relevance is procedural: it
establishes that executive action restricting digital rights must be transparent and
reviewable — a standard that S.17(2)(a) exemptions and Rule 23 demands, both issued without
publication or review, will have to answer.

### 1.4 *People's Union for Civil Liberties v. Union of India* (1997) 1 SCC 301

The telephone-tapping case, which created the procedural safeguards later codified in Rule 419A
of the Telegraph Rules. Still the baseline authority on surveillance safeguards, and still the
comparator when arguing that DPDP's State exemptions supply fewer protections than a 1997
judgment required for a phone tap.

### 1.5 *Justice K.S. Puttaswamy* applied to the RTI balance — *Girish Ramchandra Deshpande* (2013) and *Subhash Chandra Agarwal* (2020)

Before S.44(3), the Supreme Court had already restricted disclosure of service records and
assets under S.8(1)(j) in *Girish Ramchandra Deshpande*, while the Constitution Bench in
*CPIO, Supreme Court of India v. Subhash Chandra Agarwal* (2020) 5 SCC 481 held that the
**public-interest override in S.8(1)(j) required a genuine balancing exercise**, and that
judicial independence and transparency were to be weighed, not presumed. That balancing
exercise is the thing S.44(3) deleted — which is why the amendment is characterised in the
petitions as removing a judicially-constructed safeguard by legislative fiat.

---

## 2. India — the live constitutional challenge to the DPDP Act

**Status as of 19 August 2026: referred to a five-judge Constitution Bench.**

The petitions were filed by the **National Campaign for People's Right to Information
(NCPRI)**, RTI activist **Venkatesh Nayak**, and **The Reporters' Collective Trust**
(journalist Nitin Sethi). They seek a declaration that provisions of the DPDP Act, 2023 and the
DPDP Rules, 2025 are unconstitutional.

The grounds, in the order they are likely to matter:

1. **S.44(3) and the RTI Act.** Replacing the qualified S.8(1)(j) exemption with a blanket bar
   on "information which relates to personal information" is said to fail proportionality and
   to be *manifestly arbitrary* under Article 14, because it removes the public-interest
   override without any substitute safeguard.
2. **Article 19(1)(a) and the press.** The Act contains **no journalism exemption**. Ordinary
   newsgathering — holding a source's contact details, publishing a public official's conduct —
   is processing of personal data with no lawful basis available under S.6 or S.7. The
   Reporters' Collective's participation frames this as a direct chill on investigative
   journalism.
3. **S.17(2)(a) and State surveillance.** Plenary power to exempt any State instrumentality,
   with none of *Puttaswamy*'s procedural safeguards attached.

A bench of **Chief Justice Surya Kant, Justice Joymalya Bagchi and Justice Vipul M. Pancholi**
issued notice to the Union, **declined to stay** the RTI amendment in the interim, and
**referred the matter to a Constitution Bench of five judges**.

**Why the referral matters more than the notice.** A reference to five judges signals that the
Court considers the case to raise a substantial question of constitutional interpretation —
which here means the interaction of Article 19(1)(a), Article 21 privacy and the RTI regime.
Two consequences follow:

- **Scope.** A Constitution Bench is not confined to S.44(3). Once the question is framed as
  the constitutional balance between privacy and transparency, S.17(2)(a), the absence of a
  press exemption and Rule 23's gag are all naturally within reach.
- **Timing.** Constitution Bench listings are slow. A ruling is unlikely before the substantive
  obligations commence on 13 May 2027, so **companies must build to the Act as written** while
  its constitutional foundations are still contested. Plan for the statute; do not plan for the
  judgment.

---

## 3. Comparative jurisprudence — what mature case law has settled

These matter to an Indian company for two reasons: they bind directly if it processes EU data,
and they are the persuasive material Indian courts and the Board will reach for when the DPDP
Act's undefined terms — "reasonable security safeguards," "voluntarily provided," "likely to
cause detrimental effect" — first require interpretation.

### 3.1 What counts as personal data

**Case C-582/14 *Breyer* (2016)** — dynamic IP addresses are personal data in the hands of a
website operator if it has *legal means reasonably likely* to be used to identify the user via
a third party. Established the **"means reasonably likely to be used"** standard.

**Case C-413/23 P *EDPS v. Single Resolution Board* (4 September 2025)** — the most important
recent decision, and the first time the CJEU has held expressly that **pseudonymised data can
be personal data for the original controller and not personal data for a recipient** who
cannot reasonably re-identify, assessed against technical, organisational and legal factors.
It moves the EU toward a **relative, contextual** concept of identifiability.

**Relevance to India.** The DPDP Act defines personal data as data "about an individual who is
identifiable by or in relation to such data" and **defines neither anonymisation nor
pseudonymisation**. *SRB* is the ready-made analytical framework for the boundary question the
Indian regime has not answered — and it matters most for AI training corpora and analytics
pipelines, where the whole compliance posture turns on whether de-identified data is in scope.

### 3.2 Consent, market power and "freely given"

**Case C-252/21 *Meta Platforms v. Bundeskartellamt* (4 July 2023)** — two holdings that travel:

- a **competition authority may find a GDPR infringement** incidentally when assessing abuse of
  dominance; and
- where a user **visits third-party websites or uses Like/Share buttons**, and the operator
  links that to the user's account, the operator may be processing **special-category data**
  under Article 9 — and the **dominant position of the controller is relevant to whether
  consent is freely given**.

**Relevance to India.** India's consent standard is textually *stricter* — "free, specific,
informed, unconditional and unambiguous." *Meta* supplies the reasoning for why take-it-or-
leave-it consent from a dominant platform is not free, which is precisely the question the
Data Protection Board will face first. It also bears on the interaction between the DPDP Act
and the Competition Act, 2002 and the proposed Digital Competition framework.

### 3.3 Compensation and non-material damage

**Case C-300/21 *UI v. Österreichische Post* (2023)** — Article 82 does not require a threshold
of seriousness, but an infringement alone does not create a right to compensation; the claimant
must prove **actual damage**, material or non-material.

**Case C-655/23 *IP v. Quirin Privatbank AG* (4 September 2025)** — addressed **injunctive
relief** under the GDPR, the threshold for non-material damage, and whether fault and parallel
injunctions matter when quantifying compensation.

**Relevance to India.** These cases mark out the remedy the DPDP Act does not have. Once
S.44(2) commences and S.43A of the IT Act goes, an Indian individual has **no statutory
compensation route at all**, and S.39 bars civil courts from matters the Board can decide. The
EU spent a decade litigating *how much* compensation; India will start by litigating *whether
any exists* — most likely as a constitutional argument that an effective remedy is part of the
Article 21 right recognised in *Puttaswamy*.

### 3.4 International transfers

**Case C-362/14 *Schrems I* (2015)** invalidated Safe Harbour; **Case C-311/18 *Schrems II*
(2020)** invalidated Privacy Shield and held that standard contractual clauses remain valid
only where the exporter verifies that the destination's law provides essentially equivalent
protection — which created the transfer impact assessment.

**Relevance to India.** India deliberately built a regime with **no adequacy machinery and no
SCCs**, so *Schrems* has no direct Indian analogue. But Rule 15's power to impose conditions
on making data available to a **foreign State or its agencies** is a *Schrems*-shaped hook: it
is the mechanism by which India could, without an adequacy system, scrutinise foreign
surveillance access. It is currently unused.

### 3.5 Erasure and the balance with expression

**Case C-131/12 *Google Spain* (2014)** created the right to be forgotten as against search
engines; **Cases C-136/17 *GC and Others*** and **C-507/17 *Google v. CNIL*** refined it —
sensitive-data links require a stricter balance, and de-referencing is not required globally.

**Relevance to India.** The DPDP erasure right in S.12 has no express carve-out for freedom of
expression, and no journalism exemption exists elsewhere in the Act. The *Google Spain* line is
the natural source for the balancing that Indian law will have to import judicially, since the
statute supplies none. Indian High Courts have already been developing a right-to-be-forgotten
jurisprudence in the takedown context; the DPDP Act does not codify it.

---

## 4. Enforcement practice — the empirical picture

Case law tells you what the rules mean; enforcement data tells you what they cost.

| Metric | Position (early 2026) |
|---|---|
| Cumulative GDPR fines since 2018 | **≈ €7.1 billion** across **≈ 2,245** documented fines |
| Share imposed since January 2023 | **> 60%** — enforcement is accelerating, not plateauing |
| GDPR penalties in 2025 alone | **≈ €1.2 billion** |
| Largest single regulator by value | **Ireland's DPC — ≈ €4.04 billion**, a function of where the large platforms are established |
| Most active regulator by case count | **Spain's AEPD**, over 1,000 fines, seventh consecutive year |
| Nigeria (NDPC), 2025 | Compliance notices to **1,368 organisations** across banking, insurance, broking, gaming and pensions |
| India (Data Protection Board) | **Zero** — S.27–34 not commenced, no members appointed |

**Three lessons for an Indian company.**

1. **Enforcement concentrates where establishment is.** Ireland's €4.04 billion is not a
   statement about Irish strictness; it is the one-stop-shop mechanism routing platform cases
   through the country of main establishment. India's centralised single Board reproduces that
   concentration by design, without the one-stop-shop's compensating cross-border review.
2. **The lag between statute and enforcement is normal and then it ends abruptly.** The GDPR's
   first two years were quiet; more than 60% of all fines have landed since 2023. India's Board
   being inert in 2026 predicts nothing about 2028.
3. **The mid-market is where volume enforcement happens.** Spain's thousand-plus fines are
   mostly small, against ordinary businesses, for ordinary failures — CCTV, marketing, security.
   That is the realistic shape of Indian enforcement once the Board functions, not headline
   ₹250 crore penalties against large platforms.

---

## 5. What is still legally unsettled in India

| Question | Why it is open | Where an answer will come from |
|---|---|---|
| Is de-identified or anonymised data outside the Act? | No definition of anonymisation or pseudonymisation | Board practice, or Indian adoption of the *SRB* contextual test |
| How far does S.7(a) "voluntarily provided" stretch? | No illustration beyond simple transactional cases | The first Board orders; this is the most commercially consequential open question in the Act |
| Does the S.3(c)(ii) public-domain exclusion survive enrichment and inference? | The exclusion attaches to the data, not to the derived product | Litigation over scraping and data brokerage |
| Can consent be "free" when a dominant service conditions access on it? | S.6 says unconditional; the Act does not address market power | *Meta v. Bundeskartellamt* reasoning, plus CCI interaction |
| Is there any remedy for the individual after S.43A goes? | The Act supplies none | An Article 21 argument that an effective remedy is part of the right |
| Do the S.17(2)(a) exemptions survive *Puttaswamy*? | No necessity, proportionality, time limit or review | **The pending Constitution Bench** |
| Is the absence of a journalism exemption constitutional? | Article 19(1)(a) with no statutory carve-out | **The pending Constitution Bench** |

---

## Citations

**Indian cases**
- *K.S. Puttaswamy (Retd.) v. Union of India*, (2017) 10 SCC 1 — nine-judge bench; privacy a fundamental right; four-part proportionality test.
- *K.S. Puttaswamy v. Union of India*, (2019) 1 SCC 1 — Aadhaar; S.57 struck down.
- *Anuradha Bhasin v. Union of India*, (2020) 3 SCC 637 — proportionality, publication and review of restriction orders.
- *People's Union for Civil Liberties v. Union of India*, (1997) 1 SCC 301 — surveillance safeguards.
- *Girish Ramchandra Deshpande v. CIC*, (2013) 1 SCC 212 — S.8(1)(j) and service records.
- *CPIO, Supreme Court of India v. Subhash Chandra Agarwal*, (2020) 5 SCC 481 — Constitution Bench; public-interest balancing under the RTI Act.
- *NCPRI v. Union of India*; *Venkatesh Nayak v. Union of India*; *The Reporters' Collective Trust v. Union of India* — pending; notice issued, stay refused, **referred to a five-judge Constitution Bench** by a bench of CJI Surya Kant, Bagchi and Pancholi JJ.

**CJEU**
- Case C-582/14 *Breyer v. Germany* (19 Oct 2016).
- Case C-131/12 *Google Spain v. AEPD* (13 May 2014); Case C-136/17 *GC and Others v. CNIL* (24 Sep 2019); Case C-507/17 *Google v. CNIL* (24 Sep 2019).
- Case C-362/14 *Schrems* (6 Oct 2015); Case C-311/18 *Data Protection Commissioner v. Facebook Ireland and Schrems* (16 Jul 2020).
- Case C-252/21 *Meta Platforms Inc. and Others v. Bundeskartellamt* (4 Jul 2023).
- Case C-300/21 *UI v. Österreichische Post AG* (4 May 2023).
- Case C-655/23 *IP v. Quirin Privatbank AG* (4 Sep 2025).
- Case C-413/23 P *EDPS v. Single Resolution Board* (4 Sep 2025).

**Secondary sources for current status**
- [Constitutionality of the Digital Personal Data Protection Act, 2023 — Supreme Court Observer](https://www.scobserver.in/cases/constitutionality-of-the-digital-personal-data-protection-act-2023/)
- [Challenge to DPDP Act: Bench refuses to stay amendment, issues notice — Supreme Court Observer](https://www.scobserver.in/reports/challenge-to-dpdp-amendment-of-rti-bench-refuses-to-stay-amendment-issues-notice/)
- [SC issues notice to Centre on DPDP Act provisions amending RTI law — The Wire](https://m.thewire.in/article/government/sc-issues-notice-to-centre-on-dpdp-act-provisions-amending-rti-law)
- [Supreme Court issues notice on constitutional challenge to the DPDP Act and Rules — Internet Freedom Foundation](https://internetfreedom.in/supreme-court-issues-notice-on-constitutional-challenge-to-the-digital-personal-data-protection-act-2023-and-the-digital-personal-data-protection-rules-2025/)
- [Five-judge bench to argue on RTI and freedom of journalism — Countercurrents](https://countercurrents.org/2026/08/five-judge-bench-to-argue-on-rti-freedom-of-journalism/)
- [In a landmark decision, EU court clarifies when pseudonymised data is not personal data — Skadden](https://www.skadden.com/insights/publications/2025/11/in-a-landmark-decision-eu-court-clarifies)
- [Rethinking personal data: the CJEU's contextual turn in EDPS v SRB — Future of Privacy Forum](https://fpf.org/blog/rethinking-personal-data-the-cjeus-contextual-turn-in-edps-vs-srb/)
- [A summary of 2025's key CJEU data protection judgments — Arthur Cox](https://www.arthurcox.com/knowledge/a-summary-of-2025s-key-cjeu-data-protection-judgments/)
- [CJEU clarifies injunctive relief and non-material damages under the GDPR — A&O Shearman](https://www.aoshearman.com/en/insights/ao-shearman-on-data/cjeu-clarifies-injunctive-relief-and-non-material-damages-under-the-gdpr)
- [CJEU's landmark decision in Meta v Bundeskartellamt — DLA Piper](https://www.dlapiper.com/en/insights/publications/2023/07/cjeus-landmark-decision-in-meta-vs-bundeskartellamt)
- [GDPR fines hit €7.1 billion: data privacy enforcement trends in 2026 — Kiteworks](https://www.kiteworks.com/gdpr-compliance/gdpr-fines-data-privacy-enforcement-2026/)
- [GDPR statistics worldwide 2026 — PrivacyEngine](https://www.privacyengine.io/gdpr-statistics-worldwide-2026/)
