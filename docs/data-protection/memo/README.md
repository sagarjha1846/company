# Cited research memo (Word)

`DPDP-Act-Global-Context-Research-Memo.docx` — the study condensed into a formally cited
research memorandum: ~5,600 words, 12 tables, and **75 numbered references** carried as
superscripts in the text.

Reference groups:

| Refs | Contents |
|---|---|
| 1–8 | Primary instruments — the Act, the Rules, the three November 2025 Gazette notifications, IT Act and SPDI Rules, IT Rules 2021 (as amended 2026), CERT-In Directions, RBI payment-data circular |
| 9–15 | Indian cases — *Puttaswamy* (2017), *Puttaswamy* (2019, Aadhaar), *Anuradha Bhasin*, *PUCL*, *Girish Ramchandra Deshpande*, *Subhash Chandra Agarwal*, and the pending constitutional challenge |
| 16–23 | CJEU — *Breyer*, *Google Spain*, *Schrems I* and *II*, *Meta v. Bundeskartellamt*, *Österreichische Post*, *Quirin Privatbank*, *EDPS v. SRB* |
| 24–75 | Secondary sources, used for time-sensitive status as at 19 August 2026, each with a URL |

Every reference is cited at least once in the body.

## Rebuilding

```bash
npm install docx
node build.js
```

`refs.js` holds the reference list; `build.js` holds the memo content and a small markup
parser (`**bold**`, `*italic*`, `{12,20}` → superscript citations).

**Note on verification:** the generated file was checked structurally — well-formed XML across
all 24 package parts, 540 paragraphs, 12 tables, all 75 references cited — but it was **not
visually rendered**. LibreOffice conversion fails in this container (a one-paragraph docx fails
identically), and `pdftoppm` and `pandoc` are not installed here. Open it in Word or Google Docs
before circulating.
