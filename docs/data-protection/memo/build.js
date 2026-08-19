const {Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow,
       TableCell, WidthType, ShadingType, BorderStyle, PageBreak, Footer, PageNumber,
       LevelFormat, TableOfContents, convertInchesToTwip} = require('docx');
const fs = require('fs');
const REFS = require('./refs.js');

const W = 9638;                       // content width in DXA (A4, 2cm margins)
const SERIF = "Cambria";
const SANS  = "Calibri";
const INK   = "1A1A1A";
const ACC   = "1F3A6E";
const GREY  = "5A5A5A";

// ---- mini markup: **bold**, *italic*, {12} or {12,20} citation superscripts ----
function runs(text, opts = {}) {
  const base = {font: opts.font || SERIF, size: opts.size || 21, color: opts.color || INK};
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|\{[\d,\s]+\})/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({...base, text: text.slice(last, m.index)}));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(new TextRun({...base, text: tok.slice(2, -2), bold: true}));
    else if (tok.startsWith('{')) out.push(new TextRun({...base, text: tok.slice(1, -1).replace(/\s/g,''), superScript: true, color: ACC}));
    else out.push(new TextRun({...base, text: tok.slice(1, -1), italics: true}));
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(new TextRun({...base, text: text.slice(last)}));
  return out;
}

const P = (text, opts = {}) => new Paragraph({
  children: runs(text, opts),
  spacing: {after: opts.after === undefined ? 140 : opts.after, line: 276},
  alignment: opts.align,
});

const H1 = (text) => new Paragraph({
  children: [new TextRun({text, font: SANS, size: 28, bold: true, color: ACC})],
  heading: HeadingLevel.HEADING_1,
  spacing: {before: 360, after: 160},
});
const H2 = (text) => new Paragraph({
  children: [new TextRun({text, font: SANS, size: 23, bold: true, color: INK})],
  heading: HeadingLevel.HEADING_2,
  spacing: {before: 260, after: 110},
});
const BULLET = (text) => new Paragraph({children: runs(text), bullet: {level: 0}, spacing: {after: 90, line: 276}});

function table(cols, header, rows, caption) {
  const widths = cols.map(f => Math.round(W * f));
  widths[widths.length-1] += W - widths.reduce((a,b)=>a+b,0);
  const cell = (txt, opts={}) => new TableCell({
    width: {size: widths[opts.i], type: WidthType.DXA},
    shading: opts.head ? {type: ShadingType.CLEAR, fill: "EAEEF6"} : undefined,
    margins: {top: 60, bottom: 60, left: 90, right: 90},
    children: [new Paragraph({
      children: runs(txt, {font: SANS, size: opts.head ? 17 : 18, color: opts.head ? ACC : INK}),
      spacing: {after: 0, line: 240},
    })],
  });
  const els = [];
  if (caption) els.push(new Paragraph({
    children: [new TextRun({text: caption, font: SANS, size: 16, bold: true, color: GREY, allCaps: true})],
    spacing: {before: 160, after: 70},
  }));
  els.push(new Table({
    columnWidths: widths,
    width: {size: W, type: WidthType.DXA},
    rows: [
      new TableRow({tableHeader: true, children: header.map((h,i)=>cell(h,{i, head:true}))}),
      ...rows.map(r => new TableRow({children: r.map((c,i)=>cell(c,{i}))})),
    ],
  }));
  els.push(new Paragraph({text: "", spacing: {after: 140}}));
  return els;
}

const RULE = () => new Paragraph({
  text: "",
  border: {bottom: {style: BorderStyle.SINGLE, size: 6, color: "C9D2E4", space: 6}},
  spacing: {before: 60, after: 200},
});

// ============================ CONTENT ============================
const body = [];

// --- title block ---
body.push(new Paragraph({
  children: [new TextRun({text: "RESEARCH MEMORANDUM", font: SANS, size: 17, bold: true, color: GREY, allCaps: true, characterSpacing: 40})],
  spacing: {after: 120},
}));
body.push(new Paragraph({
  children: [new TextRun({text: "India's Digital Personal Data Protection Act in Global Context", font: SERIF, size: 40, bold: true, color: ACC})],
  spacing: {after: 100},
}));
body.push(new Paragraph({
  children: [new TextRun({text: "A cited study of the DPDP Act, 2023 and the DPDP Rules, 2025, read against nineteen comparable statutes", font: SERIF, size: 23, italics: true, color: GREY})],
  spacing: {after: 200},
}));
body.push(RULE());
body.push(...table([0.24,0.76], ["Field","Detail"], [
  ["Subject", "Digital Personal Data Protection Act, 2023 (Act 22 of 2023); DPDP Rules, 2025; comparable regimes in 19 jurisdictions"],
  ["Position as at", "19 August 2026"],
  ["Primary instruments", "Act 22 of 2023; G.S.R. 843(E), 844(E) and 846(E) of 13-14 November 2025"],
  ["Citation method", "Numbered superscripts keyed to the reference list at the end. Statutory provisions are cited by section (S.) and rule (R.) so every statement can be checked against the bare Act and the Gazette notification."],
  ["Status", "Working reference. Not legal advice."],
], null));

// --- 1 executive summary ---
body.push(H1("1. Executive summary"));
body.push(P("India's data protection regime moved from dormant to dated on 14 November 2025, when the Ministry of Electronics and Information Technology notified the DPDP Rules, 2025 alongside a staggered commencement of the Act itself, and established the Data Protection Board of India with its head office in the National Capital Region.{2,3,4,24,25} Every organisation processing the digital personal data of people in India now faces a fixed outer deadline of **13 May 2027**.{26,27}"));
body.push(P("The Act is 44 sections across nine chapters plus one Schedule — roughly a fifth the length of the GDPR — and delegates 26 subjects to rules made by the Central Government.{1} Most operative content lives in the Rules, and much of what remains lives in future notifications.{28,29}"));
body.push(H2("Ten findings"));
[
 "**Two lawful bases, not six.** Processing is lawful only on consent (S.6) or one of nine enumerated 'certain legitimate uses' (S.7).{1} There is no legitimate-interests basis and no contractual-necessity basis, so ordinary commercial processing runs on consent — which is why the Consent Manager institution exists (S.6(7)-(9), R.4).{30}",
 "**Sensitive personal data was abolished.** The Act creates no special category, making India the only major jurisdiction to move that way, and a regression from the SPDI Rules, 2011 that it displaces.{1,5}",
 "**Children's data is the strictest limb in the world.** Verifiable parental consent under 18, an absolute ban on tracking and targeted advertising directed at children (S.9), and a Rs 200 crore penalty ceiling; R.10 makes DigiLocker-style virtual tokens the de facto parental-consent rail.{1,2,32}",
 "**Cross-border transfer is the most liberal limb.** S.16 with R.15 adopts a negative list: data may leave India unless the Government restricts a destination. No adequacy decisions, no standard contractual clauses, no transfer impact assessments.{1,2,42}",
 "**Breach notification is stricter than the GDPR.** R.7 has no materiality threshold and requires notification to every affected individual without delay, plus full particulars to the Board within 72 hours — cumulative with CERT-In's six-hour incident report.{2,7,44}",
 "**The regulator cannot yet act.** Sections 27-34, which give the Board its functions, procedure and penalty powers, were not commenced on 13 November 2025;{3} and no Chairperson or Member has been appointed — MeitY only invited applications on 6 May 2026.{33,34,35}",
 "**The old regime is still alive.** S.44(2), which omits S.43A of the IT Act, was not commenced either, so S.43A and the SPDI Rules, 2011 remain in force alongside the DPDP framework until the substantive phase.{3,5}",
 "**The individual has no monetary remedy once the transition completes.** Penalties go to the Consolidated Fund (S.34), S.39 bars civil courts, and there is no private right of action anywhere in the Act.{1}",
 "**The RTI amendment is now before a five-judge Constitution Bench.** S.44(3) deleted the public-interest override from S.8(1)(j) of the RTI Act; the Supreme Court issued notice, refused an interim stay and referred the challenge to a Constitution Bench.{15,36,37,38,40}",
 "**Global direction of travel is simplification plus harder enforcement.** The EU's Digital Omnibus, the UK's DUAA and Japan's 2026 APPI amendment all loosen obligations,{46,48,49,52} while South Korea moved to 10% of total revenue for severe breach cases{54} and cumulative GDPR fines passed EUR 7.1 billion.{73}",
].forEach(t => body.push(BULLET(t)));

// --- 2 the Act ---
body.push(new Paragraph({children: [new PageBreak()]}));
body.push(H1("2. The Act"));
body.push(P("The Act answers *K.S. Puttaswamy (Retd.) v. Union of India*, in which a nine-judge bench held informational privacy to be a fundamental right under Article 21 and supplied the four-part proportionality test — legality, legitimate aim, necessity and least-restrictive means, and procedural safeguards.{9} Everything distinctive about the statute dates from August 2022, when the Personal Data Protection Bill, 2019 was withdrawn and redrawn without sensitive-data categories, hard localisation, or an open lawful-basis list.{1}"));
body.push(...table([0.09,0.14,0.30,0.47], ["Ch.","Sections","Subject","Load-bearing provisions"], [
 ["I","1-3","Preliminary","S.3 covers digital data only; catches foreign entities offering goods or services to people in India, but the profiling limb of the 2022 draft was dropped; publicly available data is outside the Act entirely"],
 ["II","4-10","Obligations of the Data Fiduciary","S.5 notice; S.6 consent, withdrawal parity and Consent Managers; S.7 nine legitimate uses; S.8 security, breach, erasure, grievance; S.9 children; S.10 Significant Data Fiduciaries"],
 ["III","11-15","Rights and duties of the Data Principal","Access (summary only), correction, erasure, mandatory grievance step, and the novel right to nominate; S.15 imposes duties on the individual"],
 ["IV","16-17","Special provisions","S.16 negative-list transfers; S.17 exemptions, including the outsourcing carve-out and the power to exempt any State instrumentality"],
 ["V-VII","18-32","Board, procedure, appeals","Digital-office adjudication, civil-court powers, appeal to TDSAT within 60 days, mediation, voluntary undertakings"],
 ["VIII","33-34","Penalties","Schedule ceilings per instance; proceeds to the Consolidated Fund of India"],
 ["IX","35-44","Miscellaneous","S.36 power to call for information; S.37 blocking after two penalties; S.39 bar of civil jurisdiction; S.44 amends the TRAI Act, omits S.43A of the IT Act, and rewrites the RTI exemption"],
], "Chapter map of the DPDP Act, 2023 (ref. 1)"));

body.push(H2("2.1 Penalty schedule"));
body.push(...table([0.58,0.18,0.24], ["Breach","Provision","Ceiling"], [
 ["Failure to take reasonable security safeguards","S.8(5)","Rs 250 crore"],
 ["Failure to notify a personal data breach","S.8(6)","Rs 200 crore"],
 ["Breach of children's data obligations","S.9","Rs 200 crore"],
 ["Breach of additional obligations of a Significant Data Fiduciary","S.10","Rs 150 crore"],
 ["Breach of duties by the Data Principal","S.15","Rs 10,000"],
 ["Any other breach of the Act or Rules (residuary)","-","Rs 50 crore"],
], "The Schedule (ref. 1)"));
body.push(P("These are ceilings per instance and **absolute caps, not turnover-linked**. Rs 250 crore is roughly USD 29 million — a cost of doing business for a global platform and existential for an Indian mid-market firm. The schedule is therefore regressive in effect, and S.42 permits the Government to raise the amounts only to twice the stated figure.{1}"));

body.push(H2("2.2 The RTI amendment (S.44(3))"));
body.push(P("The former S.8(1)(j) of the Right to Information Act, 2005 exempted personal information only where disclosure bore no relationship to public activity or would cause an unwarranted invasion of privacy, **unless the larger public interest justified disclosure**. S.44(3) substitutes the entire clause with six words: 'information which relates to personal information'.{1} Three elements are deleted — the public-activity nexus test, the unwarranted-invasion test, and the public-interest override — converting a balancing provision into a categorical bar.{38,41}"));
body.push(P("This matters doubly because the Constitution Bench in *CPIO, Supreme Court of India v. Subhash Chandra Agarwal* had held that S.8(1)(j) required a genuine balancing exercise.{14} The amendment removes by legislative fiat the safeguard the Court had constructed, and it sits on top of a line of authority that had already narrowed disclosure of service records under the same clause.{13,14}"));

// --- 3 the Rules ---
body.push(new Paragraph({children: [new PageBreak()]}));
body.push(H1("3. The Rules and the commencement clock"));
body.push(...table([0.20,0.22,0.58], ["Phase","Date","In force"], [
 ["Phase 1 (done)","13 Nov 2025","Rules 1, 2, 17-22, and Act ss. 1(2), 2, 18-26, 35, 38-43, 44(1) and 44(3). The Board is constituted; the RTI amendment takes effect."],
 ["Phase 2","13 Nov 2026","Rule 4 - Consent Manager registration: Indian incorporation, net worth of at least Rs 2 crore, interoperable platform, fit-and-proper test."],
 ["Phase 3","13 May 2027","Rules 3, 5-16 and 23 - notice, State processing, security safeguards, breach notification, erasure, children, exemptions, SDF duties, rights, transfers, research exemption, and the power to call for information."],
], "Staggered commencement (refs. 2, 3, 26, 27)"));
body.push(P("**Three consequences follow, each correcting a claim that circulates widely.** First, the Board cannot act: sections 27-34 confer its functions, procedure and penalty powers and none has commenced, so no complaint can be adjudicated and no penalty imposed today.{3} Second, the RTI amendment is already operative, ahead of every substantive privacy protection in the Act — an asymmetry the petitioners rely on.{3,39} Third, because S.44(2) has not commenced, S.43A of the IT Act and the SPDI Rules, 2011 remain in force, so India currently runs two overlapping regimes.{3,5}"));

body.push(H2("3.1 The four rules that will define compliance"));
body.push(P("**Rule 3 - notice.** The notice must be presented independently of any other information, in clear and plain language, with an itemised description of the data and purposes and the means to withdraw consent, exercise rights and complain to the Board — in English or any of the 22 Eighth Schedule languages.{2,29} This ends the bundled privacy policy in India."));
body.push(P("**Rule 6 - security safeguards.** India named the controls the GDPR pointedly left open: encryption, obfuscation, masking or tokenisation; access control; logs and monitoring of access **retained for at least one year**; backups sufficient for continued processing after compromise; and equivalent safeguards imposed on processors by contract.{2,31} It is the most auditable rule in the framework and carries the Rs 250 crore tier."));
body.push(P("**Rule 7 - breach notification.** Every affected individual must be told without delay, in plain language; the Board receives an initial intimation without delay and full particulars within 72 hours.{2} There is no materiality threshold, so a misdirected email is notifiable — and CERT-In's separate six-hour clock still applies.{7,44}"));
body.push(P("**Rule 13 - Significant Data Fiduciaries.** Annual DPIA and independent audit reported to the Board; due diligence that algorithmic software poses no risk to Data Principals' rights — India's only AI-facing provision, and undefined; and a duty not to transfer Government-notified data categories or their traffic data outside India.{2,31} SDF status arrives by notification, not self-assessment, so a company cannot know it is one until told.{1}"));

body.push(H2("3.2 Implementation status, 19 August 2026"));
body.push(...table([0.55,0.45], ["Item","Status"], [
 ["Rules notified","Done, 14 November 2025 {2}"],
 ["Data Protection Board constituted with members","No - applications invited 6 May 2026; none appointed {33,34,35}"],
 ["Board's functions, procedure, penalty powers (S.27-34)","Not commenced {3}"],
 ["S.43A IT Act and SPDI Rules, 2011","Still in force - S.44(2) not commenced {3,5}"],
 ["Consent Manager registrations","Not open until 13 November 2026 {2}"],
 ["Significant Data Fiduciary notifications","None issued"],
 ["Restricted-country list under R.15","Empty"],
 ["Data categories subject to SDF localisation","None notified"],
 ["Substantive obligations enforceable","13 May 2027 {26}"],
], null));

// --- 4 comparative ---
body.push(new Paragraph({children: [new PageBreak()]}));
body.push(H1("4. The comparative picture"));
body.push(P("Roughly 160 countries now have a comprehensive data protection law.{75} The regimes below are the ones that matter for an Indian company: the template India drew from, the template it rejected, the markets it sells into, and the peer economies that legislated in the same window and chose differently."));
body.push(...table([0.20,0.30,0.28,0.22], ["Jurisdiction","Instrument and status","Distinctive feature","Headline penalty"], [
 ["European Union","GDPR, applicable since 2018; Digital Omnibus proposed 19 Nov 2025, AI limb adopted by Council 29 Jun 2026, GDPR limb still in negotiation {46,47,48}","Six lawful bases incl. legitimate interests; Art. 22 automated-decision rights; Art. 82 compensation","EUR 20m / 4% worldwide turnover"],
 ["United Kingdom","UK GDPR as amended by the Data (Use and Access) Act 2025; commencement phased through 2026 {49,50,51}","Statutory 'recognised legitimate interests'; relaxed ADM rules; new controller complaints duty from 19 Jun 2026; ICO becomes the Information Commission","GBP 17.5m / 4%"],
 ["China","PIPL 2021; cross-border certification Measures in force 1 Jan 2026 {56,57}","No legitimate interests, but contract and HR bases; separate consent; harm-based sensitive data; Art. 24 ADM rights","CNY 50m / 5% turnover"],
 ["Japan","APPI; 2026 amendment passed the Diet 10 Jul 2026, promulgated 17 Jul 2026, in force within two years {52,53}","Statistical-processing consent exemption for AI development; parental consent under 16; 'Specific Biometric Personal Information'; administrative fines introduced","Orders; new administrative fines"],
 ["South Korea","PIPA; amendments passed 12 Feb 2026, promulgated 10 Mar 2026, mostly effective 11 Sep 2026 {54,55}","Portability, ADM rights, independent PIPC; CEO accountability; ISMS-P certification from 1 Jul 2027","Up to 10% of total revenue"],
 ["Brazil","LGPD, in force 2020; ANPD an autonomous agency since 2022","Closest full GDPR transposition outside Europe; portability and review of automated decisions","2% Brazil revenue, cap BRL 50m"],
 ["United States","No federal statute; 20 comprehensive state laws in effect in 2026, Alabama the 21st framework, Vermont signed 16 Jun 2026 {63,64}","Opt-out model; universal opt-out signals; BIPA and My Health My Data private rights of action","Per-violation civil penalties"],
 ["Australia","Privacy Act 1988 as amended 2024; statutory tort commenced 10 Jun 2025; tranche 2 unlegislated {60,61,62}","Statutory tort for serious invasions of privacy; small business exemption still intact","AUD 50m / 30% adjusted turnover"],
 ["Vietnam","PDPL 91/2025, in force 1 Jan 2026, with implementing Decree of 31 Dec 2025 {58,59}","Express ban on buying and selling personal data; filed impact dossiers; five-year small-business exemption in the statute","5% revenue (transfers); 10x illicit gain"],
 ["Nigeria","NDPA 2023 with the GAID effective 19 Sep 2025 {65,66}","Thresholds for entities of major importance; annual audit returns; compliance notices to 1,368 organisations in 2025 {67}","NGN 10m / 2% gross revenue"],
 ["Singapore","PDPA 2012, amended 2020","Legitimate interests and business improvement exceptions; DPO required in every organisation","10% Singapore turnover / SGD 1m"],
 ["India","DPDP Act 2023 + Rules 2025; phased to 13 May 2027 {1,2,3}","Consent Managers; right to nominate; negative-list transfers; duties on the individual","Rs 250 crore per instance (absolute)"],
], "Nineteen regimes studied - twelve summarised"));

body.push(H2("4.1 Lawful bases"));
body.push(...table([0.22,0.13,0.13,0.16,0.18,0.18], ["Jurisdiction","Consent","Contract","Legal obligation","Legitimate interests","Total"], [
 ["India","Yes","No","Yes","No","2 categories, 9 uses"],
 ["EU / UK","Yes","Yes","Yes","Yes","6 (UK: 6 plus a statutory list)"],
 ["Brazil","Yes","Yes","Yes","Yes","10"],
 ["China","Yes","Yes","Yes","No","7"],
 ["Singapore","Yes","Yes","Yes","Yes","8 or more"],
 ["South Korea","Yes","Yes","Yes","Narrow","7"],
], null));
body.push(P("India and China are the two majors with no legitimate-interests basis, but China compensates with contract and HR bases; India has neither.{1} This is the most consequential design decision in the Act, and it is what the Consent Manager exists to absorb."));

body.push(H2("4.2 Rights of the individual"));
body.push(...table([0.34,0.16,0.14,0.12,0.12,0.12], ["Right","India","EU","Brazil","China","Korea"], [
 ["Access","Summary only","Copy","Yes","Yes","Yes"],
 ["Correction and erasure","Yes","Yes","Yes","Yes","Yes"],
 ["Portability","No","Yes","Yes","Yes","Yes"],
 ["Object or restrict","No","Yes","Yes","Partial","Partial"],
 ["Automated decisions / explanation","No","Yes (Art. 22)","Yes","Yes (Art. 24)","Yes"],
 ["Nomination on death or incapacity","Yes (unique)","No","No","Partial","No"],
 ["Compensation for harm","No","Yes (Art. 82)","Yes","Yes","Yes"],
 ["Enforceable duties on the individual","Yes - Rs 10,000","No","No","No","No"],
], null));
body.push(P("India's is the thinnest rights set of any comprehensive regime studied, and the only one that runs the accountability arrow in both directions.{1} The two absences that matter most in practice are portability — for which India has built the infrastructure in Account Aggregator and ONDC without granting the right — and automated-decision rights, in an economy with algorithmic credit scoring and welfare eligibility determination at scale."));

body.push(H2("4.3 Breach notification and transfers"));
body.push(...table([0.20,0.28,0.24,0.28], ["Jurisdiction","To regulator","To individuals","Materiality threshold"], [
 ["India","Without delay, then 72 hours","Without delay","None - every breach {2}"],
 ["EU / UK","72h where risk is likely","Where risk is high","Risk-based"],
 ["South Korea","72h","72h","Partial"],
 ["Singapore","3 calendar days","Yes","500 individuals or significant harm"],
 ["Indonesia","3x24 hours","3x24 hours","None"],
 ["Nigeria / Saudi Arabia","72h","Where risk is high","Partial"],
], null));
body.push(P("On transfers the split is between a permissive bloc — India, the United States, Singapore — and a control bloc: the EU and UK (adequacy, SCCs, transfer impact assessments), China (CAC assessment, standard contract filing or certification{56,57}), Indonesia, and Vietnam (filed impact dossiers{58}). India's permissiveness is policy, not entitlement: both the restricted-country list and the SDF localisation categories are unbounded executive powers exercisable at short notice.{1,2,42}"));

// --- 5 wider stack ---
body.push(new Paragraph({children: [new PageBreak()]}));
body.push(H1("5. The Act is not the whole stack"));
body.push(P("S.38 makes the DPDP Act **additional to** every other law and provides that where another law confers a higher degree of protection or restriction, that higher standard prevails.{1} It is a floor, not a ceiling — and in regulated sectors it is frequently the least demanding instrument in the stack.{43}"));
body.push(...table([0.22,0.24,0.28,0.26], ["Conflict","DPDP position","Other instrument","Resolution"], [
 ["Erasure vs statutory retention","Erase on withdrawal or purpose exhaustion (S.8(7))","KYC 5 years; PMLA 5 years; SEBI 5-8 years; IRDAI policy tail; IT Rules 180 days post-deletion {6,43}","Retention law prevails through the 'required by law' proviso, but the provision must be named, the fields isolated, and the individual told"],
 ["Free transfer vs localisation","Permitted unless restricted (S.16, R.15)","RBI payment data must be stored only in India; SEBI, IRDAI and telecom licence conditions {8,43}","S.16(2) expressly preserves the stricter sectoral rule"],
 ["Breach clocks","Without delay, then 72 hours","CERT-In six hours; RBI, SEBI and IRDAI on their own timelines {7,44}","All cumulative; design to the shortest clock"],
 ["Grievance clocks","Self-declared published period (R.14)","IT Rules 2021: acknowledge in 24 hours, dispose in 15 days {6}","Publish the IT Rules clock as the DPDP period; one process"],
 ["Consent vs mandated collection","Consent must be free and unconditional (S.6)","KYC, Aadhaar verification, tax reporting","Run mandated collection on the sectoral law, not consent"],
 ["No sensitive-data category","Uniform treatment","Aadhaar Act; SPDI Rules; ABDM Health Data Management Policy {5}","The category-specific instrument prevails where stricter"],
], "Where the stack conflicts"));
body.push(P("Two further points belong here. The **IT Amendment Rules, 2026** cut the intermediary takedown clock from 36 hours to three hours, and removal of non-consensual intimate or morphed imagery, deepfakes included, from 24 hours to two hours.{6,45} And **S.72A of the IT Act is untouched by S.44** and survives permanently: after May 2027 it is the only provision in Indian law attaching personal criminal consequence to data misuse, because the DPDP Act creates no offences at all.{1,5}"));

// --- 6 case law ---
body.push(H1("6. The case law"));
body.push(H2("6.1 India"));
body.push(P("*Puttaswamy* (2017) established privacy as a fundamental right and the four-part proportionality test.{9} Its third and fourth limbs — necessity and procedural safeguards — are exactly what S.17(2)(a) (blanket State exemptions) and R.23 (information demands with a statutory gag) omit: no necessity test, no time limit, no independent review, no notification to the affected individual.{1,2} The Aadhaar judgment applied the test and struck down S.57 of the Aadhaar Act, showing judicial willingness to sever over-broad enabling provisions.{10} *Anuradha Bhasin* requires that executive orders restricting digital rights be published, reasoned and periodically reviewed.{11} *PUCL* remains the baseline on surveillance safeguards.{12}"));
body.push(P("**The live challenge.** Petitions by the National Campaign for People's Right to Information, Venkatesh Nayak and The Reporters' Collective seek a declaration that provisions of the Act and Rules are unconstitutional. A bench of Chief Justice Surya Kant, Bagchi and Pancholi JJ issued notice, **declined to stay** the RTI amendment, and **referred the matter to a five-judge Constitution Bench**.{15,36,37,38,40} The grounds are the RTI amendment's failure of proportionality and manifest arbitrariness; Article 19(1)(a), because the Act contains **no journalism exemption** at all; and the breadth of S.17(2)(a).{39}"));
body.push(P("The referral matters more than the notice. A Constitution Bench is not confined to S.44(3): once the question is framed as the constitutional balance between privacy and transparency, S.17(2)(a), the missing press exemption and R.23 are all within reach. But Constitution Bench listings are slow, so a ruling is unlikely before the obligations commence on 13 May 2027. **Build to the Act as written; do not plan around the judgment.**"));
body.push(H2("6.2 Comparative"));
[
 "**What counts as personal data.** *Breyer* established the 'means reasonably likely to be used' standard.{16} *EDPS v. Single Resolution Board* (4 September 2025) held for the first time that pseudonymised data may be personal data for the original controller and **not** personal data for a recipient who cannot reasonably re-identify — a relative, contextual test.{23,68,69} India defines neither anonymisation nor pseudonymisation, so this is the ready-made framework for the boundary question the Act leaves open, and it governs AI training corpora.",
 "**Consent and market power.** *Meta v. Bundeskartellamt* held that a competition authority may find a GDPR infringement incidentally, that linking off-platform browsing to an account may process special-category data, and that a controller's **dominant position is relevant to whether consent is freely given**.{20,72} India's standard is textually stricter — 'free, specific, informed, unconditional and unambiguous' — so this reasoning is directly transplantable to the Board's first cases.",
 "**Compensation.** *UI v. Osterreichische Post* held that infringement alone does not create a right to compensation, but no seriousness threshold applies to proven damage;{21} *IP v. Quirin Privatbank* addressed injunctive relief and quantification.{22,70,71} These mark the remedy the DPDP Act does not have: once S.44(2) commences, India has no statutory compensation route at all.",
 "**Transfers.** *Schrems I* and *Schrems II* invalidated Safe Harbour and Privacy Shield and created the transfer impact assessment.{18,19} India built a regime with no adequacy machinery, so there is no direct analogue — but R.15's power to impose conditions on making data available to a foreign State is a *Schrems*-shaped hook, currently unused.{2}",
 "**Erasure and expression.** The *Google Spain* line created and then bounded the right to be forgotten.{17} S.12 has no free-expression carve-out and the Act has no journalism exemption, so this balancing will have to be imported judicially.",
].forEach(t => body.push(BULLET(t)));

body.push(H2("6.3 Enforcement practice"));
body.push(...table([0.55,0.45], ["Metric","Position, early 2026"], [
 ["Cumulative GDPR fines since 2018","About EUR 7.1 billion across roughly 2,245 fines {73,74}"],
 ["Share imposed since January 2023","More than 60% - enforcement is accelerating {73}"],
 ["GDPR penalties in 2025 alone","About EUR 1.2 billion {73}"],
 ["Largest regulator by value","Ireland's DPC, about EUR 4.04 billion {73}"],
 ["Most active regulator by case count","Spain's AEPD, over 1,000 fines, seventh consecutive year {73}"],
 ["Nigeria (NDPC), 2025","Compliance notices to 1,368 organisations {67}"],
 ["India (Data Protection Board)","Zero - S.27-34 not commenced, no members appointed {3,33}"],
], null));
body.push(P("Three lessons follow. Enforcement concentrates where establishment is, and India's single centralised Board reproduces that concentration by design. The lag between statute and enforcement is normal and then ends abruptly — the GDPR's first two years were quiet and over 60% of all fines have landed since 2023, so an inert Indian Board in 2026 predicts nothing about 2028. And volume enforcement lands on the mid-market for ordinary failures — CCTV, marketing, security — not on headline penalties against large platforms.{73,74}"));

// --- 7 divergences ---
body.push(new Paragraph({children: [new PageBreak()]}));
body.push(H1("7. Seven structural divergences"));
[
 "**Penalties on the individual whose data is protected.** S.15 imposes duties on the Data Principal and the Schedule attaches a Rs 10,000 penalty for a false or frivolous complaint. No other data protection statute in the world does this, and the person deciding what is frivolous is a Government-appointed Board.{1}",
 "**Executive control over the regulator.** Two-year renewable terms, Government-set qualifications and service conditions, and a selection committee chaired by the Cabinet Secretary.{1,2}",
 "**Wholesale State exemptions with no safeguards.** S.17(2)(a) permits exemption of any State instrumentality on Article 19(2)-style grounds with no necessity test, time limit, independent review or notification - the safeguards *Puttaswamy* treated as constitutionally required.{1,9}",
 "**An information-demand power with a statutory gag.** S.36 with R.23 and the Seventh Schedule permits demands on any Fiduciary or intermediary and forbids disclosure of the demand, with no judicial authorisation, transparency reporting or sunset.{1,2}",
 "**No graded data categories.** The Act cannot distinguish a newsletter list from a genetic database, so all risk differentiation falls on SDF designation - a Government notification rather than a self-assessed threshold.{1}",
 "**Penalty design that under-deters the largest actors.** Absolute ceilings rather than a share of turnover; the GDPR's 4%, Korea's 10% and China's 5% scale with the offender, Rs 250 crore does not.{1,54}",
 "**Delegation as a governing method.** Which entities are SDFs, which data must stay in India, which countries are restricted, which classes get startup exemptions and what lower age applies to whom are all left to future notification, so obligations are not self-assessable from the text.{1,2,28}",
].forEach(t => body.push(BULLET(t)));

body.push(H1("8. What India got right"));
[
 "**Rule 6 is the best-drafted security provision in any statute studied.** Naming encryption, access control, a one-year log-retention floor, backups and contractual flow-down converts an unfalsifiable 'appropriate measures' standard into something an auditor and an engineer can both act on.{2,31}",
 "**Consent quality is textually stronger than the GDPR's** - 'unconditional', automatic voiding of consent beyond necessity, withdrawal parity, and a standalone itemised notice.{1,2}",
 "**The Consent Manager is an original institution** - a registered intermediary that holds no data but brokers, records and revokes consent, building on the tested Account Aggregator and DEPA architecture.{2,30}",
 "**The right to nominate (S.14)** has no equivalent in the GDPR, PIPL, LGPD or the US state laws.{1}",
 "**The children's regime is the most protective in the world on paper**, and the Fourth Schedule carves out the legitimate institutional cases - schools, hospitals, childcare, school transport - rather than blanket-banning or blanket-permitting.{2,32}",
 "**The negative-list transfer regime avoids the *Schrems* trap**, declining to replicate an architecture that has consumed enormous compliance effort for contestable privacy gain.{1,19}",
 "**The 48-hour pre-erasure notice** in the Third Schedule prevents silent destruction of a dormant user's data; no other regime has it.{2}",
].forEach(t => body.push(BULLET(t)));

body.push(H1("9. What to build, in order"));
body.push(...table([0.06,0.24,0.42,0.28], ["#","Domain","In practice","Why here"], [
 ["1","Rule 6 security controls","Encryption and tokenisation; authentication on every endpoint touching personal data; access logs retained at least one year; tested restores; contractual flow-down","Highest penalty tier, most prescriptive, longest lead time; doubles as GDPR Art. 32, ISO 27001, SOC 2, Nigeria GAID and Saudi PDPL {2}"],
 ["2","Inventory and lawful-basis register","One row per personal-data element: system of record, purposes, basis, retention trigger, recipients, destination","Everything else depends on it, and an itemised R.3 notice cannot be generated without it {2}"],
 ["3","Breach runbook","Three clocks: six hours to CERT-In, without delay to Board and individuals, 72 hours for full particulars; pre-drafted templates and a pre-built affected-user query","Second-highest penalty tier; with no materiality threshold the pipeline must run cheaply and often {2,7}"],
 ["4","Notice and consent","Standalone itemised notices in 22 languages; per-purpose consent records with notice version hashes; withdrawal parity; retrospective notice under S.5(2)","Largest product surface; longest localisation runway {1,2}"],
 ["5","Retention and erasure","Retention clock per element; cascade to warehouses, caches, indexes, CRM and vendors; Third Schedule inactivity clock and 48-hour notice if in scope","Deep plumbing; deleting only from the primary database is not erasure {2}"],
 ["6","Rights fulfilment","Published request mechanism and response period; access summary including recipients and what was shared; correction, erasure, nomination","The sharing ledger is the part teams underestimate {1,2}"],
 ["7","Children","Age determination; verifiable parental consent via held identity details or a virtual token; hard suppression of tracking and targeted advertising under 18","Scope decision first: 'confirming the user is not a child' is itself an exempt purpose {2,32}"],
 ["8","Vendors","Processor register; addendum imposing Rule 6-equivalent controls and upstream breach notification fast enough for your own clock","S.8(1) keeps you liable regardless of the contract {1}"],
 ["9","Transfer posture","Destination map per element; ability to re-route or localise a category on notice","Low obligation today, high optionality value; do not build an SCC apparatus for India {2}"],
 ["10","SDF readiness","India-resident DPO candidate, auditor candidate, one voluntary DPIA, documented algorithmic due-diligence method","Notification gives little lead time {1,2}"],
], null));
body.push(P("Build to the union of India and the EU and you cover most of the world. The two India-specific builds nothing else gives you are **22-language standalone itemised notices** and **no-threshold immediate breach notification to every affected individual**. The two things India does not give you are **portability** and **automated-decision transparency** — build both anyway if you serve the EU, UK, Brazil, Korea or California.{1,2}"));

// --- references ---
body.push(new Paragraph({children: [new PageBreak()]}));
body.push(H1("References"));
body.push(P("Superscript numbers in the text refer to these entries. Primary instruments and cases are listed first; secondary sources, used for time-sensitive status as at 19 August 2026, follow.", {size: 19, color: GREY}));
const groups = [[1,8,"Primary instruments"],[9,15,"Indian cases"],[16,23,"Court of Justice of the European Union"],[24,75,"Secondary sources"]];
groups.forEach(([a,b,label]) => {
  body.push(new Paragraph({
    children: [new TextRun({text: label, font: SANS, size: 18, bold: true, color: ACC, allCaps: true})],
    spacing: {before: 200, after: 90},
  }));
  for (let i = a; i <= b; i++) {
    body.push(new Paragraph({
      children: [
        new TextRun({text: String(i) + ".", font: SANS, size: 17, bold: true, color: ACC}),
        new TextRun({text: "\t" + REFS[i-1], font: SERIF, size: 18, color: INK}),
      ],
      indent: {left: 460, hanging: 460},
      spacing: {after: 70, line: 240},
    }));
  }
});

const doc = new Document({
  creator: "Data protection research",
  title: "India's Digital Personal Data Protection Act in Global Context",
  description: "A cited study of the DPDP Act, 2023 and DPDP Rules, 2025 against nineteen comparable statutes",
  styles: {default: {document: {run: {font: SERIF, size: 21, color: INK}}}},
  sections: [{
    properties: {page: {margin: {top: 1134, right: 1134, bottom: 1134, left: 1134}}},
    footers: {default: new Footer({children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({text: "DPDP Act in Global Context  |  19 August 2026  |  page ", font: SANS, size: 16, color: GREY}),
                 new TextRun({children: [PageNumber.CURRENT], font: SANS, size: 16, color: GREY})],
    })]})},
    children: body,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(__dirname + "/DPDP-Act-Global-Context-Research-Memo.docx", buf);
  console.log("written:", buf.length, "bytes");
});
