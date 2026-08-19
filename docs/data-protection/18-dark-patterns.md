# Part 18 — Dark patterns: the third regulator of consent design

There are **three separate Indian legal regimes governing the same consent screen**, enforced by
three different authorities. Most compliance programmes have folded in two of them. The third —
and the only one currently issuing penalties for bad consent UI — is consumer protection law.

> **Terminology warning.** In India, **CCPA** means the **Central Consumer Protection Authority**,
> established under the Consumer Protection Act, 2019. It is not the California Consumer Privacy
> Act. Both appear in privacy literature and they are routinely confused.

---

## 1. The three regimes on one screen

| Regime | Authority | What it asks of a consent screen | Status |
|---|---|---|---|
| **DPDP Act + Rules** | Data Protection Board | Is consent **free, specific, informed, unconditional, unambiguous**? Is the notice standalone and itemised? Is withdrawal as easy as giving? | **Not enforceable until 13 May 2027**; Board unstaffed |
| **Dark Patterns Guidelines, 2023** | **Central Consumer Protection Authority** | Does the interface **manipulate or deceive** the consumer into a choice they did not intend? | **In force and being enforced now** |
| **Competition Act, 2002** | Competition Commission of India | Is consent extracted by a **dominant** firm as a condition of access? | **In force**; CCI's ₹213 crore Meta order is the leading case ([Part 16](16-competition-and-privacy.md)) |

The striking fact: **the DPDP standard is the only one of the three not yet enforceable**, and
it is the one everybody is building for.

---

## 2. The Dark Patterns Guidelines, 2023

Notified by the CCPA on **30 November 2023** under the Consumer Protection Act, 2019, making
India one of the first countries in the world to issue a dedicated instrument defining and
regulating dark patterns. They apply to platforms systematically offering goods or services in
India, to advertisers and to sellers.

**The thirteen specified dark patterns:**

| # | Pattern | What it looks like on a consent screen |
|---|---|---|
| 1 | **False urgency** | "3 people are viewing this consent request" — countdown pressure on a choice that has no deadline |
| 2 | **Basket sneaking** | Additional purposes pre-added to a consent bundle the user did not select |
| 3 | **Confirm shaming** | "No thanks, I don't care about personalised service" as the decline button |
| 4 | **Forced action** | **Conditioning access on consent to unrelated processing** — the single most important one |
| 5 | **Subscription trap** | Easy to consent, hard to withdraw — precisely what S.6(4) prohibits |
| 6 | **Interface interference** | Accept in high-contrast, decline in grey; decline hidden behind "manage preferences" |
| 7 | **Bait and switch** | Advertised terms differ from what the consent actually authorises |
| 8 | **Drip pricing** | Purposes revealed progressively rather than up front |
| 9 | **Disguised advertisement** | Consent request styled as a system or security notice |
| 10 | **Nagging** | Re-prompting after a refusal until the user relents |
| 11 | **Trick question** | Double negatives and confusing phrasing in the opt-out |
| 12 | **SaaS billing** | Recurring charges harvested from an ambiguous initial consent |
| 13 | **Rogue malware** | Interfaces that mimic system dialogues to force a click |

**At least seven of the thirteen are consent-screen patterns.** The Guidelines are, functionally,
a UI-design specification for lawful consent — written two years before the DPDP consent standard
becomes enforceable.

---

## 3. Enforcement — this one is live

- **June 2025:** the CCPA advised e-commerce platforms to comply with the Guidelines and gave
  them **three months to conduct self-audits**, identify and remove dark patterns, and file
  **declarations of compliance**.
- **2025–26:** enforcement actions against companies across **aviation, e-commerce and digital
  healthcare**, including action reported against **nine companies**, and a **₹7 lakh** penalty
  on a quick-commerce platform for **hidden fees and default add-ons**.
- Cumulative penalties reported to Parliament stand at roughly **₹20 lakh** — small money, but a
  functioning enforcement pipeline, which is more than the DPDP regime has.

**The honest caveat**, and commentators have made it: the legal force of *guidelines* issued
under the Consumer Protection Act is softer than that of regulations, and the penalties so far
are trivial next to DPDP's ceilings. The signal matters more than the sums — a regulator is
actively examining consent interfaces in India **today**.

---

## 4. Where the three regimes converge — and where they do not

**They converge on "forced action."** The CCPA's dark pattern #4, the CCI's holding that data
sharing beyond service provision cannot be a precondition of access, and S.6(1)'s requirement
that consent be **unconditional** are three statements of the same rule from three statutes.
A take-it-or-leave-it consent wall in India is now simultaneously:

- an unfair trade practice under consumer law (enforceable **now**),
- potentially an abuse of dominance if you are dominant (enforceable **now**), and
- void consent under the DPDP Act (from **May 2027**).

**They diverge on who is covered.** The Guidelines reach platforms and sellers in commerce; the
Competition Act reaches only the dominant; the DPDP Act reaches every Data Fiduciary. So a
mid-market SaaS company is outside the first two and squarely inside the third — while a large
consumer platform is inside all three at once.

**They diverge on remedy.** Consumer law can order a practice to stop and fine modestly;
competition law scales with turnover; DPDP caps in absolute terms and pays the individual
nothing.

---

## 5. What this means for consent design

Design to the **union** of the three, because the strictest element of each is the safe position:

1. **Symmetry is non-negotiable.** Accept and decline must be equally prominent, equally
   worded, equally few taps. This is Guideline #6 (interface interference), S.6(4) withdrawal
   parity, and the fairness limb of "free" consent, all at once.
2. **Never condition service on unrelated consent.** Separate the processing you genuinely need
   from the processing you would like. Guideline #4, the CCI order, and S.6(1).
3. **No pre-ticked purposes, ever.** Guideline #2 (basket sneaking) and S.6(1)'s clear
   affirmative action.
4. **Neutral language on the decline path.** No confirm-shaming, no double negatives.
   Guidelines #3 and #11.
5. **One prompt, not a campaign.** Re-prompting a user who declined is Guideline #10 (nagging),
   and it also undermines any claim the original refusal was respected.
6. **Disclose every purpose at once**, itemised. Guideline #8 (drip pricing) and Rule 3's
   itemisation requirement point the same way.
7. **Make withdrawal reachable from where the service is used**, not buried in a settings tree.
   Guideline #5 (subscription trap) and S.6(4).
8. **Keep the evidence.** Screenshot and version every consent surface you ship. Three
   regulators may ask, and the question will be about a screen that no longer exists.

**Product implication for anything built in this space** ([Part 17](17-product-opportunity.md)):
a consent SDK should make the dark pattern *impossible to ship*, not merely discouraged.
Enforcing symmetry, purpose separation, no pre-ticking and single-prompt behaviour **in the
component** is a genuine differentiator, because it converts three regulatory regimes into a
build-time constraint rather than a review-time argument.

---

## Citations

- Guidelines for Prevention and Regulation of Dark Patterns, 2023, notified by the Central Consumer Protection Authority on 30 November 2023 under the Consumer Protection Act, 2019
- [IAPP, "India's CCPA guidelines on dark patterns: Welcome signal, but law is still soft"](https://iapp.org/news/a/india-s-ccpa-guidelines-on-dark-patterns-welcome-signal-but-law-is-still-soft)
- [Press Information Bureau, "CCPA Acts Against Dark Patterns on Digital Platforms"](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2268302&reg=3&lang=1)
- [AZB & Partners, "Regulatory Crackdown on Dark Patterns: CCPA's Enforcement Actions and Emerging Compliance Landscape in Indian E-Commerce"](https://www.azbpartners.com/bank/regulatory-crackdown-on-dark-patterns-ccpas-enforcement-actions-and-emerging-compliance-landscape-in-indian-e-commerce/)
- [Storyboard18, "CCPA levies ₹20 lakh in penalties over dark patterns, government informs Parliament"](https://www.storyboard18.com/brand-marketing/ccpa-levies-%E2%82%B920-lakh-in-penalties-over-dark-patterns-government-informs-parliament-ws-l-106623.htm)
- [The Logical Indian, "Dark Patterns Under Fire: CCPA Acts Against 9 Companies Across Key Sectors"](https://thelogicalindian.com/ccpa-acts-against-9-companies-over-dark-patterns-121157/)
- [Internet Freedom Foundation, "Turn On the Diyas, Turn Off the Dark Patterns"](https://internetfreedom.in/turn-on-the-diyas-turn-off-the-dark-patterns/)
- [Lexology, "Dark Patterns Decoded: India's Legal and Regulatory Guide"](https://www.lexology.com/library/detail.aspx?g=c9963888-f71c-4140-b068-bbbab6f5fe42)
