# Part 10 — The economics, the readiness gap, and what is still unnotified

Two questions this study had not answered: **what does a regime like this actually cost, and
what is about to change?** The first has eight years of empirical evidence from the GDPR. The
second turns on a MeitY proposal from January 2026 that, if notified, moves the most important
deadline in the Indian regime forward by six months.

---

## 1. What the GDPR actually did to firms

This is the closest thing to a natural experiment for what the DPDP Act will do. The findings
below are the peer-reviewed ones; the caveats in §1.4 matter as much as the numbers.

### 1.1 Profits and sales

**Frey and Presidente, "Privacy regulation and firm performance: estimating the GDPR effect
globally," *Economic Inquiry* 62(3) (2024) 1074–1089.** An unbalanced panel of **276,638
patenting firms across 31 countries and 22 industries, 2011–2020**. Firms exposed to the GDPR
saw:

- **≈ 8% decline in profits** and **≈ 2% decline in sales**;
- for **technology firms specifically, a ≈ 2.1% decline in profits with no significant decline
  in sales** — consistent with a **cost channel** rather than a demand channel;
- increased expenses and wage bills, and accelerated patenting in GDPR-related technology fields.

The mechanism matters for India: the losses came from **compliance cost**, not from customers
buying less. That is the channel the DPDP Act will replicate, since its costs — 22-language
notices, consent infrastructure, Rule 6 controls, breach tooling — are overwhelmingly fixed.

### 1.2 Investment

**Jia, Jin and Wagman, "The short-run effects of the GDPR on technology venture investment,"
*Marketing Science* (2021).** Documents a **negative short-run effect on venture and angel
investment** in EU technology ventures, and an increase in **investor home bias**: foreign
investment fell by more than local investment.

The India-relevant reading is not "privacy law deters investment" — it is that **regulatory
uncertainty** deters *foreign* investment first. India's regime is uncommonly uncertain by
design: SDF status, localisation categories and restricted countries all arrive by notification.

### 1.3 Market concentration

**Johnson, Shriver and Goldberg, "Privacy and market concentration: intended and unintended
consequences of the GDPR."** The market for **web technology vendors became more concentrated**
immediately after the enforcement deadline — corroborated independently by **Peukert et al.
(2022)**. A cluster of studies (Bessen et al. 2020; Koski and Valmari 2020; Zhao et al. 2021;
Chen et al. 2022) finds the burden falls **disproportionately on smaller firms**.

The mechanism is simple and transfers directly: compliance cost is largely fixed, so it is
regressive in firm size, and buyers consolidate onto vendors who can evidence compliance.

### 1.4 What this evidence does not say

Stating it fairly matters, because these figures are widely misused:

- They measure **costs, not net welfare.** None of these studies prices the benefits — breaches
  avoided, harms prevented, trust gained. A regime can reduce measured profits and still be
  worth having.
- The estimates are **short- to medium-run**, concentrated around the 2018 enforcement shock,
  and identification strategies are contested.
- They study the **GDPR**, whose obligation set differs from India's in both directions: India
  is lighter on accountability paperwork (no universal records, DPO or DPIA) and **heavier** on
  prescribed security controls, notice localisation, breach notification and children's data.

The honest summary: **expect a real, cost-channel hit concentrated on mid-market firms, expect
vendor concentration, and do not expect the sky to fall.**

---

## 2. What it costs in India — and how ready anyone is

### 2.1 Readiness

**EY India's 2026 DPDP readiness survey** reports that **64% of Indian organisations have not
allocated a dedicated budget** for DPDP compliance, and **only 18% have completed a cost
estimation exercise**.

That is the single most consequential number in this part. With the outer deadline at 13 May
2027 — and possibly 13 November 2026 for SDFs (§3) — roughly two-thirds of the market has not
begun the step that precedes every other step.

### 2.2 Cost ranges

Market estimates, from vendors and advisers rather than any official source, so treat them as
indicative and skewed by who is selling:

| Organisation | Indicative annual compliance cost |
|---|---|
| Startup, under ~10,000 users | Under **₹50,000** |
| SME, ~500,000 users | **₹3–8 lakh** |
| Large enterprise, multiple subsidiaries, significant data flows | **₹15–60 lakh** |

The spread between quoted and achievable figures is wide. The cost drivers are consistent:
data mapping, vendor contract review, consent and notice rebuild, encryption and logging,
breach detection and response, and a named accountable person.

### 2.3 Why the burden is regressive in India specifically

Three features compound the fixed-cost problem:

1. **Penalties are absolute, not turnover-linked.** ₹250 crore is a rounding error for a global
   platform and terminal for an Indian mid-market firm. Every other major regime scales.
2. **No legitimate-interests basis** means consent infrastructure is not optional for anyone —
   the single largest build in the playbook, and one a large firm amortises across a far bigger
   revenue base.
3. **The 22-language notice requirement** is a fixed localisation cost independent of firm size.

The statutory counterweight exists but is **unused**: S.17(3) lets the Government exempt classes
of Data Fiduciaries — expressly including startups — from S.5, S.8(3), S.8(7), S.10 and S.11,
and S.17(4) permits deferral of any provision for up to five years. Compare Vietnam, which wrote
a five-year small-business exemption **into the statute** rather than leaving it to discretion.

---

## 3. The live change: MeitY's January 2026 proposal

**On 23 January 2026 MeitY held stakeholder discussions and circulated proposals to accelerate
implementation, with comments due by 4 February 2026.** The three elements:

1. **Compress the compliance window for Significant Data Fiduciaries from 18 months to 12** —
   moving SDF compliance from **13 May 2027 to 13 November 2026**.
2. **Notify the list of SDFs, or the criteria for classification.** Reporting indicates the
   intended targets are large platforms — Meta, Google, Amazon, Microsoft — together with major
   banks, financial services and insurance companies and large social media intermediaries.
3. **Enforce the SDF cross-border restriction immediately**, i.e. the Rule 13 duty not to
   transfer personal data and related traffic data outside India for categories identified by
   the Central Government on a committee's recommendation.

**Status as at 19 August 2026: still a proposal. It has not been notified.** The operative
dates remain **13 November 2026** for Consent Manager registration and **13 May 2027** for full
compliance. Separately, the Consent Manager framework was expected to be operationalised across
mid-2026.

**Why it matters even unnotified.** It tells you the Government's direction: SDFs first, faster,
with localisation live from day one. Any organisation plausibly within SDF scope — large
platforms, large BFSI, large intermediaries — should be planning to a **November 2026** date,
not a May 2027 one, and should assume the localisation duty arrives with the designation rather
than after a grace period.

---

## 4. The watchlist: every lever still unpulled

Each of these can change obligations by notification, without further legislation.

| Lever | Provision | Status | Why it matters |
|---|---|---|---|
| **Board appointments** | S.19, R.17–18 | Applications invited 6 May 2026; **none appointed** | No adjudication until filled |
| **Commencement of S.27–34** | S.1(2) | **Not commenced** | The Board has no functions, procedure or penalty power until it is |
| **SDF list or criteria** | S.10 | **None notified**; proposed Jan 2026 | Determines who carries DPO, audit, DPIA, algorithmic due diligence and localisation |
| **SDF localisation categories** | R.13 | **None notified**; committee not constituted publicly | The only hard-localisation lever; the largest latent multinational risk |
| **Restricted countries** | S.16, R.15 | **Empty** | Would convert a permissive transfer regime into a restrictive one overnight |
| **Lower age for children's consent** | S.9(5) | **Not exercised** | The pressure valve on the under-18 rule for consumer internet |
| **Startup and class exemptions** | S.17(3) | **Not exercised** | The main relief available to the Indian ecosystem |
| **Deferral of provisions** | S.17(4) | **Not exercised** | Up to five years, for specified classes |
| **State instrumentality exemptions** | S.17(2)(a) | **Not publicly exercised** | The most contested power in the Act |
| **Commencement of S.44(2)** | S.1(2) | **Not commenced** | Ends S.43A and the SPDI Rules, removing the last individual compensation route |
| **Acceleration of the SDF deadline** | Rule amendment | **Proposed 23 Jan 2026** | Would move SDF compliance to 13 Nov 2026 |

---

## 5. Planning conclusion

**Run a two-track plan.**

- **Track A — everyone, to 13 May 2027.** The control set in [Part 6](06-compliance-playbook.md),
  in the sequence given: Rule 6 controls first, inventory second, breach runbook third.
- **Track B — plausible SDFs, to 13 November 2026.** If you are a large platform, a large BFSI
  entity or a large intermediary, treat the January 2026 proposal as the planning date. That
  means: an India-resident DPO identified now, an independent auditor engaged, the first DPIA
  scheduled, an algorithmic due-diligence method documented, and — most demanding — **a data
  architecture that can localise a notified category on short notice**, because the proposal
  would make the transfer restriction effective immediately on designation.

The asymmetry to internalise: **the cost of being wrong about Track B is much higher than the
cost of preparing for it.** SDF designation arrives by notification with no appeal on the
designation itself, and the localisation duty is the one obligation that cannot be satisfied by
paperwork after the fact.

---

## Citations

**Empirical literature**
- Carl Benedikt Frey and Giorgio Presidente, "Privacy regulation and firm performance: Estimating the GDPR effect globally," *Economic Inquiry* 62(3) (2024) 1074–1089 — [Wiley](https://onlinelibrary.wiley.com/doi/10.1111/ecin.13213) · [Oxford Martin working paper](https://oms-www.files.svdcdn.com/production/downloads/Privacy-Regulation-and-Firm-Performance-Giorgio-WP-Upload-2022-1.pdf) · [CEPR VoxEU summary](https://cepr.org/voxeu/columns/gdpr-effect-how-data-privacy-regulation-shaped-firm-performance-globally)
- Jian Jia, Ginger Zhe Jin and Liad Wagman, "The short-run effects of the General Data Protection Regulation on technology venture investment," *Marketing Science* (2021) — [INFORMS](https://pubsonline.informs.org/doi/10.1287/mksc.2020.1271) · [NBER w25248](https://www.nber.org/papers/w25248)
- Garrett Johnson, Scott Shriver and Samuel Goldberg, "Privacy and market concentration: intended and unintended consequences of the GDPR"; and Peukert et al. (2022) on post-enforcement vendor concentration — surveyed in [Jin and Wagman, "Economic Research on Privacy Regulation," NBER w30705](https://www.nber.org/system/files/working_papers/w30705/w30705.pdf)
- [Stanford SIEPR, "Balancing act: Protecting privacy, protecting competition"](https://siepr.stanford.edu/publications/policy-brief/balancing-act-protecting-privacy-protecting-competition)
- [George Mason Law Review, "A Report Card on the Impact of Europe's Privacy Regulation (GDPR) on Digital Markets"](https://lawreview.gmu.edu/forum/a-report-card-on-the-impact-of-europes-privacy-regulation-gdpr-on-digital-markets/)

**India — cost, readiness and the January 2026 proposal**
- [Chambers and Partners, "MeitY plans to cut short DPDP compliance timeline and notify cross-border restrictions for SDFs"](https://chambers.com/articles/meity-plans-to-cut-short-dpdp-compliance-timeline-and-notify-cross-border-restrictions-for-sdfs)
- [Mondaq, "MeitY Plans To Cut Short DPDP Compliance Timeline And Notify Cross Border Restrictions For SDFs"](https://www.mondaq.com/india/data-protection/1773554/meity-plans-to-cut-short-dpdp-compliance-timeline-and-notify-cross-border-restrictions-for-sdfs)
- [India Briefing, "India's DPDP Timeline: Critical Compliance Deadlines for 2026-27"](https://www.india-briefing.com/news/india-dpdp-compliance-timeline-enforcement-2026-27-44740.html/)
- [Shardul Amarchand Mangaldas, "Enforcement of the DPDP Act and notification of the DPDP Rules"](https://www.amsshardul.com/insight/enforcement-of-the-dpdp-act-and-notification-of-the-dpdp-rules/)
- [Inc42, "DPDP Act Is Coming Fast But Indian Startups Are Moving At Different Speeds"](https://inc42.com/features/dpdp-act-compliance-indian-startups-moving-at-different-speeds/)
- EY India 2026 DPDP readiness survey, as reported in market commentary — [Consently, "DPDP Act compliance cost in India: a real breakdown"](https://www.consently.in/blog/dpdp-act-compliance-cost-india-2026)

*Cost ranges in §2.2 are market estimates from advisers and vendors, not official figures.*
