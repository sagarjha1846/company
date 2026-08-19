# Part 9 — AI, algorithms and data protection

The most consequential unanswered question in Indian data protection is not in the DPDP Act at
all: **on what legal footing may personal data be used to train and operate AI systems?** This
part sets out India's answer, the answers other jurisdictions have given, and where the Indian
position is genuinely unsettled rather than merely undecided.

---

## 1. India's architecture: no AI statute, governance through existing law

On **5 November 2025** — nine days before the DPDP Rules were notified — MeitY published the
**India AI Governance Guidelines** under the IndiaAI Mission. The central policy choice is
explicit: **India is not enacting a separate AI law.** Foreseeable AI harms are to be addressed
through instruments that already exist — the IT Act, 2000, the Bharatiya Nyaya Sanhita, 2023,
consumer protection legislation, and the DPDP Act, 2023.

The Guidelines are principle-based and techno-legal rather than prescriptive:

- **Seven sutras** as founding principles: trust is the foundation; people first; innovation
  over restraint; fairness and equity; accountability; understandable by design; and
  safety, resilience and sustainability.
- **Institutional architecture**: an **AI Governance Group (AIGG)** to steer national policy
  and coordinate across regulators; a **Technology and Policy Expert Committee (TPEC)** to
  supply technical advice; and an **IndiaAI Safety Institute (AISI)** for standards, model
  testing and evaluation.
- **Voluntary compliance and graded liability**, rather than a licensing or conformity regime.
- **A phased action plan**: near-term, stand up AIGG and TPEC and build India-specific risk
  assessment and classification frameworks; medium-term, publish standards for content
  authentication, data integrity and fairness and operationalise a **National AI Incidents
  Database**; long-term, monitor and legislate only if highly autonomous systems require it.

**Assessment.** This is the lightest-touch posture of any major economy, and it is coherent
with the DPDP Act's own design: keep the statute thin, govern through delegated instruments and
institutions, and preserve room to move. Its weakness is the same as the Act's — the binding
content is deferred. In the meantime, **the DPDP Act is India's operative AI law for anything
touching personal data**, and it was not drafted with models in mind.

---

## 2. Where the DPDP Act actually bites on AI

### 2.1 The training-data question: S.3(c)(ii)

The Act **does not apply** to personal data "made or caused to be made publicly available" by
the Data Principal themselves, or by a person under a legal obligation to publish it.

This is the widest such carve-out in comparative law. Elsewhere — Singapore, China, several US
states — public availability relieves the *consent* requirement while the data stays inside the
statute. In India the data leaves the statute's application altogether, taking every downstream
right and obligation with it. For a company assembling an Indian training corpus, that is an
enormous difference.

**Four limits are being argued, and none has been tested:**

1. **It is not a public-internet exemption.** The trigger is publication *by the data
   principal* or *under a legal obligation* — not visibility, crawlability, indexation, or
   presence in a third-party dataset. Data that leaked, was republished by someone else, or was
   scraped from a platform the individual did not publish to is not within S.3(c)(ii).
2. **Context of publication.** A person posting a photograph to a social network has made *that*
   publicly available; whether that extends to bulk ingestion into a commercial model is exactly
   the unsettled question.
3. **Aggregation and repurposing.** Combining exempt public data with non-exempt data produces
   a composite that is not "the published record," and the exemption plausibly does not travel
   with it.
4. **Outputs.** The exemption addresses the *input* data. A model that emits personal data
   about an identifiable Indian, or is used to make a decision about one, is processing
   personal data in a fresh context.

**Practical posture.** Treat S.3(c)(ii) as a *narrow, provenance-based* exemption: record, per
dataset, who published the data and under what obligation. A corpus whose provenance you cannot
evidence is not exempt merely because it was reachable.

### 2.2 No anonymisation standard

The Act defines neither anonymisation nor pseudonymisation, so the threshold at which training
data or a model leaves the Act's scope is undefined. Two external frameworks fill the vacuum:

- **EDPB Opinion 28/2024** (17 December 2024): an AI model is anonymous only where the
  likelihood of extracting personal data, or of obtaining it through queries, is
  **"insignificant"** — assessed comprehensively, accounting for unintended reuse and
  disclosure. It also holds that **Article 6(1)(f) legitimate interests cannot be a default
  basis** for training; the three-step test must be run and documented.
- **Case C-413/23 P *EDPS v. SRB*** (4 September 2025): identifiability is **relative and
  contextual** — data can be personal for the original controller and not for a recipient who
  cannot reasonably re-identify.

Neither binds India. Both are the obvious analytical source when the Board first has to decide
whether a de-identified corpus or a trained model is inside the Act.

### 2.3 The lawful-basis problem

This is the sharpest structural difference between India and the EU on AI. In the EU, model
training generally runs on **legitimate interests**, subject to a balancing test. **India has no
such basis.** Training on non-exempt personal data must run on **consent for that specific
purpose** (S.6), or on one of the nine legitimate uses (S.7) — none of which is a research or
development ground for private parties.

The consequences are concrete: consent obtained to provide a service does not extend to model
training, because S.6(1) limits consent to the data necessary for the specified purpose and
voids it beyond that. **Training therefore needs its own notice and its own consent**, or it
needs data that is outside the Act — which is why S.3(c)(ii) is carrying so much weight in
Indian AI practice.

The one relief valve is **Rule 16**: processing necessary for **research, archiving or
statistical purposes** is exempt from the Act entirely, subject to the Second Schedule standards
and the condition that it is **not used to take any decision specific to a Data Principal**.
That condition is what excludes most commercial model deployment — but not necessarily
pre-training.

### 2.4 Withdrawal, erasure and model unlearning

S.6(4) permits withdrawal at any time; S.8(7) requires erasure on withdrawal or purpose
exhaustion. Neither the Act nor the Rules says what that means for a **model already trained**
on the data. Deleting the training row does not remove the parameter contribution. India has
not addressed machine unlearning, and no jurisdiction has solved it — but India's combination of
consent-only bases and an unqualified erasure duty makes the exposure sharper than under the
GDPR, where the legitimate-interests basis at least survives an objection that fails the
balancing test.

### 2.5 Rule 13 — algorithmic due diligence

The only provision in the DPDP framework aimed squarely at algorithms. A **Significant Data
Fiduciary** must "observe due diligence to verify that algorithmic software deployed by it for
hosting, display, uploading, modification, publishing, transmission, storage, updating or
sharing of personal data **does not pose a risk to the rights of Data Principals**."

Three observations:

- **It is supply-side only.** It creates a duty on the deployer and **no corresponding right for
  the individual** — no explanation, no contest, no human review. Compare GDPR Article 22,
  PIPL Article 24 and Korea's PIPA, all of which give the individual something.
- **It is undefined.** No methodology, no threshold, no documentation standard, no auditor
  qualification. In practice the annual DPIA and independent audit under the same rule are what
  will carry it.
- **It applies to nobody yet.** No SDF has been notified.

### 2.6 What the Act does *not* reach

No rules on automated decision-making for ordinary Fiduciaries; no transparency duty for
AI-generated content; no fairness or non-discrimination obligation; no dataset documentation
requirement; no rules on inference. In India those gaps are filled — if at all — by the IT
Rules, 2021 (as amended in 2026, with three-hour takedowns and two-hour removal for
non-consensual or morphed imagery), sectoral regulators, and the voluntary AI Governance
Guidelines.

---

## 3. The comparative AI-law map, as at 19 August 2026

| Jurisdiction | Instrument | Status | Approach |
|---|---|---|---|
| **EU** | **AI Act** (Reg. 2024/1689) + Digital Omnibus on AI | Omnibus **in force 27 July 2026**; high-risk obligations for **Annex III** systems deferred to **2 December 2027**, for **Annex I** embedded systems to **2 August 2028** | Risk tiers: prohibited, high-risk, transparency, GPAI. The only conformity-assessment model. Deferral driven by unfinished harmonised standards and unappointed national authorities |
| **South Korea** | **AI Framework (Basic) Act** | Promulgated 21 Jan 2025, **in force 22 January 2026** | Second comprehensive AI law in the world. Transparency disclosures, impact assessments for high-impact AI, risk management, and **domestic representatives for foreign operators** |
| **China** | PIPL Art. 24 + Algorithm Recommendation, Deep Synthesis and Generative AI Measures + **Labelling Measures** | Labelling Measures **in force 1 September 2025** | Sector-by-sector, filing-based. Requires **explicit labels** on AI-generated text, image, audio, video and virtual scenes and **implicit labels** in file metadata |
| **Japan** | AI-related basic law (2024, light-touch) + **APPI 2026 amendment** | Amendment promulgated 17 July 2026, in force within two years | The only jurisdiction to legislate a **statistical-processing consent exemption expressly for AI development**, with transparency and contractual safeguards |
| **United States** | No federal statute; state patchwork | **109 AI laws** enacted across the states as at 1 July 2026; **1,561 AI bills** introduced in 45 states by March 2026 | **Texas TRAIGA** in force **1 January 2026**; **Colorado** repealed and replaced its AI Act in May–June 2026, dropping the duty of care, risk programmes and impact assessments in favour of disclosure, with the effective date moved to **1 January 2027**. Federal posture is deregulatory, with preemption of state laws under discussion |
| **India** | **India AI Governance Guidelines** (5 Nov 2025) + DPDP Act | Voluntary; no statute proposed | Governance through existing law; seven sutras; AIGG, TPEC and AISI; graded liability; legislation only if autonomous systems demand it |

**The pattern.** 2026 is the year the AI-regulation wave broke. The EU deferred its own core
obligations; Colorado repealed and replaced its law before it ever took effect; the US federal
posture turned deregulatory. Meanwhile Korea's Act commenced, China's labelling rules bit, and
Japan legislated a targeted *permission* rather than a restriction. India's choice to regulate
AI through data protection and existing law now looks less like a gap and more like the median
position — but only because everyone else moved toward it.

---

## 4. Training-data legality, compared

| Jurisdiction | Basis for training on personal data | Public/scraped data | Explicit AI carve-out |
|---|---|---|---|
| **India** | **Consent only**, or R.16 research exemption (no individual decisions) | **Outside the Act** if published by the principal or under a legal obligation (S.3(c)(ii)) — narrower than it looks | None |
| **EU** | Legitimate interests, subject to the three-step test; **not a default basis** (EDPB Op. 28/2024) | In scope; Art. 14(5)(b) may relieve notice at scale | None; the AI Act regulates systems, not the lawful basis |
| **Japan** | **Statistical-processing exemption** covering AI development, incl. publicly available sensitive data, with safeguards | Permitted within the exemption | **Yes — the clearest in the world** |
| **China** | Consent, with **separate consent** for sensitive data; GenAI Measures require lawful sources | Restricted; provenance obligations on providers | Partial, via the GenAI Measures |
| **South Korea** | Consent; pseudonymised data may be used for statistical, research and public-interest purposes without consent | In scope | Partial |
| **US states** | Generally permitted; sensitive data opt-in; some ADMT rules (California, Colorado) | Publicly available information is typically excluded from "personal data" | Varies |

**The Indian anomaly.** India has simultaneously the **most restrictive lawful-basis regime**
(consent only) and the **most permissive public-data exclusion**. That combination pushes every
serious Indian AI effort toward the same strategy: build corpora that fall outside the Act
entirely, and document provenance to prove it. It is a legally rational response that produces
a policy outcome nobody designed — the protection of Indian personal data in AI turns almost
entirely on the meaning of one sub-clause.

---

## 5. What to do about it

For any organisation training or deploying models on Indian personal data before 13 May 2027:

1. **Keep a dataset provenance register.** Per corpus: source, date, who published it, under
   what obligation or act of the individual, licence, and whether S.3(c)(ii) is claimed. This is
   the single artefact that determines whether the Act applies, and it cannot be reconstructed
   later.
2. **Do not rely on service consent for training.** S.6(1) voids consent beyond the specified
   purpose. If training is the purpose, it needs its own itemised notice under Rule 3 and its
   own consent record.
3. **Test the Rule 16 route honestly.** The research, archiving and statistical exemption is
   real and broad, but it fails the moment the processing is used to take a decision specific
   to an individual. Pre-training may qualify; personalisation and scoring do not.
4. **Document a de-identification standard now.** India has none, so adopt the *SRB* and
   EDPB 28/2024 reasoning: assess re-identification risk contextually, evidence that it is
   insignificant, and record the assessment.
5. **Build the Rule 13 method before you are an SDF.** A documented algorithmic risk-review
   process — scope, tests for the rights actually at stake, findings, remediation, sign-off —
   is what converts an SDF notification from a crisis into paperwork.
6. **Build automated-decision transparency anyway.** India does not require it, but the EU, UK,
   Brazil, Korea, China, California and Colorado do in some form. It is cheaper to build once.
7. **Separate model artefacts by legal basis.** If a model is trained on data that later becomes
   subject to withdrawal or erasure, the ability to identify and, if necessary, retrain from a
   clean corpus is the only practical answer to the unlearning problem.

---

## Citations

- Ministry of Electronics and Information Technology, **India AI Governance Guidelines**, IndiaAI Mission, 5 November 2025 — [Saikrishna & Associates analysis](https://www.saikrishnaassociates.com/decoding-the-india-ai-governance-guidelines/) · [IAPP, "India releases DPDPA rules, AI governance guidelines"](https://iapp.org/news/a/notes-from-the-asia-pacific-region-india-releases-dpdpa-rules-ai-governance-guidelines) · [Mondaq, "India's AI Governance Guidelines"](https://www.mondaq.com/india/new-technology/1746072/indias-ai-governance-guidelines)
- [S.S. Rana & Co., "Effect of Digital Personal Data Protection Rules, 2025 on AI Regulation"](https://ssrana.in/articles/effect-of-digital-personal-data-protection-rules-2025-on-ai-regulation/)
- [Future of Privacy Forum, "Five ways in which the DPDPA could shape the development of AI in India"](https://fpf.org/blog/five-ways-in-which-the-dpdpa-could-shape-the-development-of-ai-in-india/)
- [nasscom, "Publicly accessible personal data under the DPDP Act: AI training and other public-source data uses"](https://community.nasscom.in/communities/public-policy/publicly-accessible-personal-data-under-dpdp-act-ai-training-and-other)
- [IAPP, "Scraping public data in India: Innovation enabler or privacy threat?"](https://iapp.org/news/a/scraping-public-data-in-india-innovation-enabler-or-privacy-threat-)
- [Law School Policy Review, "Publicly Available Data under the DPDP Act: The Limits of Exemptions in AI-Driven Processing"](https://lawschoolpolicyreview.com/2026/01/13/publicly-available-data-under-the-dpdp-act-the-limits-of-exemptions-in-ai-driven-processing/)
- [Mondaq, "AI Training Data Under India's DPDP Regime: Compliance Challenges and Strategies"](https://www.mondaq.com/india/new-technology/1740470/ai-training-data-under-indias-dpdp-regime-compliance-challenges-and-strategies)
- EDPB, **Opinion 28/2024** on certain data protection aspects related to the processing of personal data in the context of AI models, 17 December 2024 — [full text](https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf) · [CMS summary](https://cms.law/en/deu/legal-updates/edpb-opinion-28-2024-key-takeaways-on-processing-personal-data-in-the-context-of-ai-models)
- Case C-413/23 P *EDPS v. Single Resolution Board* (4 September 2025) — [Skadden](https://www.skadden.com/insights/publications/2025/11/in-a-landmark-decision-eu-court-clarifies) · [Future of Privacy Forum](https://fpf.org/blog/rethinking-personal-data-the-cjeus-contextual-turn-in-edps-vs-srb/)
- [Gibson Dunn, "EU AI Act Omnibus Agreement — Postponed High-Risk Deadlines and Other Key Changes"](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/) · [Freshfields, "The final Digital Omnibus on AI"](https://www.freshfields.com/en/our-thinking/blogs/technology-quotient/eu-ai-act-unpacked-34-the-final-digital-omnibus-on-ai-key-amendments-to-the-a-102nber)
- [Cooley, "South Korea's AI Basic Act: Overview and Key Takeaways"](https://www.cooley.com/news/insight/2026/2026-01-27-south-koreas-ai-basic-act-overview-and-key-takeaways) · [Future of Privacy Forum, "South Korea's New AI Framework Act"](https://fpf.org/blog/south-koreas-new-ai-framework-act-a-balancing-act-between-innovation-and-regulation/)
- [Loeb & Loeb, "China's AI-Labeling Measures and Mandatory National Standards Take Effect September 1"](https://www.loeb.com/en/insights/publications/2025/03/chinas-ai-labeling-measures-and-mandatory-national-standards-take-effect-september-1) · [Bird & Bird, "New AI Content Labelling Rules in China"](https://www.twobirds.com/en/insights/2025/new-ai-content-labelling-rules-in-china-what-are-they-and-how-do-they-compare-to-the-eu-ai-act)
- [Skadden, "Colorado Repeals and Replaces Its AI Act"](https://www.skadden.com/insights/publications/2026/06/colorado-repeals-and-replaces-its-ai-act) · [Hunton, "Colorado AI Act Amended and Effective Date Delayed"](https://www.hunton.com/privacy-and-cybersecurity-law-blog/colorado-ai-act-amended-and-effective-date-delayed)
- [Norton Rose Fulbright, "The Texas Responsible AI Governance Act"](https://www.nortonrosefulbright.com/en/knowledge/publications/c6c60e0c/the-texas-responsible-ai-governance-act)
- [TechPolicy.Press, "Where State AI Legislation Stands Half Way Into 2026"](https://www.techpolicy.press/where-state-ai-legislation-stands-half-way-into-2026/) · [Baker Botts, "US Artificial Intelligence Law Update"](https://www.bakerbotts.com/thought-leadership/publications/2026/january/us-ai-law-update)
