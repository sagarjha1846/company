#!/usr/bin/env python3
"""Build a static GitHub Pages site from the data-protection study.

No third-party dependencies: contains a small Markdown subset renderer that
covers exactly the constructs used in docs/data-protection/*.md — ATX headings,
paragraphs, bullet and ordered lists, pipe tables, blockquotes, horizontal
rules, and inline bold/italic/code/links.
"""
import html
import os
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "docs" / "data-protection"
OUT = ROOT / "docs"                       # GitHub Pages serves /docs
PARTS_OUT = OUT / "parts"

# ---------------------------------------------------------------- inline ----

def inline(text: str) -> str:
    """Render inline markdown to HTML. Code spans are protected first."""
    spans: list[str] = []

    def stash(m):
        spans.append(html.escape(m.group(1)))
        return f"\x00{len(spans) - 1}\x00"

    text = re.sub(r"`([^`]+)`", stash, text)
    text = html.escape(text)
    # links: [label](target)
    text = re.sub(
        r"\[([^\]]+)\]\(([^)\s]+)\)",
        lambda m: f'<a href="{m.group(2)}">{m.group(1)}</a>',
        text,
    )
    # bold may contain nested italics, and may close with *** (italic + bold)
    text = re.sub(r"\*\*(.+?)\*\*(?!\*)", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w*])\*([^*\n]+)\*(?![\w*])", r"<em>\1</em>", text)
    text = re.sub(r"&amp;(#?\w+);", r"&\1;", text)          # keep entities
    return re.sub(r"\x00(\d+)\x00", lambda m: f"<code>{spans[int(m.group(1))]}</code>", text)


def slug(text: str) -> str:
    s = re.sub(r"<[^>]+>", "", text).lower()
    s = re.sub(r"[^\w\s-]", "", s)
    return re.sub(r"[\s_]+", "-", s).strip("-")

# ----------------------------------------------------------------- block ----

def render(md: str):
    """Return (html, [(level, text, anchor)]) for the document body."""
    lines = md.split("\n")
    out: list[str] = []
    toc: list[tuple[int, str, str]] = []
    i, n = 0, len(lines)

    def close_lists(stack):
        while stack:
            out.append(f"</{stack.pop()}>")

    list_stack: list[str] = []

    while i < n:
        line = lines[i]
        stripped = line.strip()

        if not stripped:
            close_lists(list_stack)
            i += 1
            continue

        # horizontal rule
        if re.fullmatch(r"-{3,}|\*{3,}", stripped):
            close_lists(list_stack)
            out.append("<hr>")
            i += 1
            continue

        # heading
        m = re.match(r"^(#{1,6})\s+(.*)$", stripped)
        if m:
            close_lists(list_stack)
            level = len(m.group(1))
            body = inline(m.group(2))
            anchor = slug(m.group(2))
            if level <= 3:
                toc.append((level, re.sub(r"<[^>]+>", "", body), anchor))
            out.append(f'<h{level} id="{anchor}">{body}</h{level}>')
            i += 1
            continue

        # table
        if stripped.startswith("|") and i + 1 < n and re.match(r"^\s*\|[\s:|-]+\|\s*$", lines[i + 1]):
            close_lists(list_stack)
            header = [c.strip() for c in stripped.strip("|").split("|")]
            i += 2
            rows = []
            while i < n and lines[i].strip().startswith("|"):
                rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")])
                i += 1
            out.append('<div class="scroll"><table><thead><tr>')
            out.extend(f"<th>{inline(c)}</th>" for c in header)
            out.append("</tr></thead><tbody>")
            for r in rows:
                out.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
            out.append("</tbody></table></div>")
            continue

        # blockquote
        if stripped.startswith(">"):
            close_lists(list_stack)
            buf = []
            while i < n and lines[i].strip().startswith(">"):
                buf.append(lines[i].strip().lstrip(">").strip())
                i += 1
            # render the quote as one unit so emphasis spanning lines still matches
            joined = "\x01".join(b for b in buf if b)
            out.append("<blockquote>" + inline(joined).replace("\x01", "<br>") + "</blockquote>")
            continue

        # list item
        m = re.match(r"^(\s*)([-*]|\d+\.)\s+(.*)$", line)
        if m:
            indent, marker, body = m.group(1), m.group(2), m.group(3)
            want = "ol" if marker[0].isdigit() else "ul"
            depth = len(indent) // 2
            while len(list_stack) > depth + 1:
                out.append(f"</{list_stack.pop()}>")
            if len(list_stack) == depth + 1 and list_stack[-1] != want:
                out.append(f"</{list_stack.pop()}>")
            if len(list_stack) < depth + 1:
                out.append(f"<{want}>")
                list_stack.append(want)
            # continuation lines
            i += 1
            while i < n and lines[i].strip() and not re.match(r"^(\s*)([-*]|\d+\.)\s+", lines[i]) \
                    and not lines[i].strip().startswith(("#", "|", ">")) \
                    and not re.fullmatch(r"-{3,}", lines[i].strip()):
                body += " " + lines[i].strip()
                i += 1
            out.append(f"<li>{inline(body)}</li>")
            continue

        # paragraph
        close_lists(list_stack)
        buf = [stripped]
        i += 1
        while i < n and lines[i].strip() and not lines[i].strip().startswith(("#", "|", ">", "- ", "* ")) \
                and not re.match(r"^\d+\.\s", lines[i].strip()) \
                and not re.fullmatch(r"-{3,}", lines[i].strip()):
            buf.append(lines[i].strip())
            i += 1
        out.append(f"<p>{inline(' '.join(buf))}</p>")

    close_lists(list_stack)
    return "\n".join(out), toc

# ------------------------------------------------------------------ shell ----

CSS = "assets/site.css"

def page(title: str, body: str, depth: int = 0, description: str = "") -> str:
    up = "../" * depth
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title>
<meta name="description" content="{html.escape(description)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
<link rel="stylesheet" href="{up}{CSS}">
</head>
<body>
{body}
</body>
</html>
"""

def wrap_artifact(src: Path, title: str, description: str) -> str:
    """Artifact files are body fragments with a leading title/link/style block."""
    raw = src.read_text()
    cut = raw.find("</style>")
    head, body = (raw[: cut + len("</style>")], raw[cut + len("</style>") :]) if cut != -1 else ("", raw)
    head = re.sub(r"<title>.*?</title>", "", head, flags=re.S)
    nav = ('<div class="sitebar"><a href="index.html">&#8592; All parts</a>'
           '<span>India&rsquo;s DPDP Act &mdash; a study</span></div>')
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title>
<meta name="description" content="{html.escape(description)}">
{head}
<style>
.sitebar{{font:500 13px/1 "IBM Plex Mono",ui-monospace,monospace;padding:11px 20px;display:flex;
gap:16px;align-items:center;justify-content:space-between;background:#14181f;color:#c9d2e4}}
.sitebar a{{color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.4)}}
.sitebar span{{opacity:.65;letter-spacing:.08em;text-transform:uppercase;font-size:11px}}
</style>
</head>
<body>
{nav}
{body}
</body>
</html>
"""

# ------------------------------------------------------------------ build ----

def main() -> None:
    PARTS_OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "assets").mkdir(parents=True, exist_ok=True)
    (OUT / ".nojekyll").write_text("")

    parts = sorted(p for p in SRC.glob("*.md") if p.name != "README.md")

    titles: dict[str, str] = {}
    for src in parts:
        md = src.read_text()
        first = next((l for l in md.split("\n") if l.startswith("# ")), src.stem)
        titles[src.stem] = re.sub(r"^#\s+", "", first)

    # each part
    for idx, src in enumerate(parts):
        md = src.read_text()
        # rewrite intra-study links
        md = re.sub(r"\]\((\d\d-[a-z0-9-]+)\.md(#[\w-]*)?\)", r"](\1.html\2)", md)
        md = md.replace("](README.md)", "](../index.html)")
        body, toc = render(md)
        title = titles[src.stem]

        prev_link = (f'<a href="{parts[idx-1].stem}.html">&#8592; {html.escape(titles[parts[idx-1].stem])}</a>'
                     if idx else '<a href="../index.html">&#8592; Contents</a>')
        next_link = (f'<a href="{parts[idx+1].stem}.html">{html.escape(titles[parts[idx+1].stem])} &#8594;</a>'
                     if idx < len(parts) - 1 else '<a href="../index.html">Contents &#8594;</a>')

        toc_html = "".join(
            f'<a class="l{lv}" href="#{a}">{html.escape(t)}</a>' for lv, t, a in toc if lv > 1
        )
        aside = f'<aside class="toc"><p class="tl">On this page</p>{toc_html}</aside>' if toc_html else ""

        shell = f"""<div class="sitebar"><a href="../index.html">&#8592; All parts</a><span>India&rsquo;s DPDP Act &mdash; a study</span></div>
<div class="shell">{aside}<main class="prose">{body}
<nav class="pager">{prev_link}{next_link}</nav>
</main></div>"""
        (PARTS_OUT / f"{src.stem}.html").write_text(
            page(title, shell, depth=1, description=title))

    # the two designed pages
    scratch = Path("/tmp/claude-0/-home-user-company/b7582e7f-7d9a-573c-be4a-2f8202cb8d76/scratchpad")
    for fname, out_name, ttl, desc in [
        ("dpdp-global.html", "study.html", "DPDP in Global Context",
         "India's DPDP Act read against nineteen comparable regimes."),
        ("consent-layer.html", "consent-layer.html", "The Consent Layer",
         "The law in five minutes, then the product opening."),
    ]:
        cand = scratch / fname
        if not cand.exists():
            cand = SRC / "consent-layer-page.html"
        if cand.exists():
            (OUT / out_name).write_text(wrap_artifact(cand, ttl, desc))

    # index
    def card(p):
        label = re.sub(r"^Part\s+\d+\s*[^A-Za-z0-9]\s*", "", titles[p.stem])
        num = p.stem.split("-")[0]
        return ('<a class="pcard" href="parts/' + p.stem + '.html">'
                '<span class="pn">' + num + '</span>'
                '<span class="pt">' + html.escape(label) + '</span></a>')

    cards = "\n".join(card(p) for p in parts)
    index_body = f"""<header class="hero">
  <div class="wrap">
    <p class="kick">Act 22 of 2023 &nbsp;&middot;&nbsp; DPDP Rules notified 14 November 2025 &nbsp;&middot;&nbsp; Position at 19 August 2026</p>
    <h1>India&rsquo;s Digital Personal Data Protection Act, in global context</h1>
    <p class="sub">A study of the DPDP Act, 2023 and the DPDP Rules, 2025 read against nineteen comparable statutes &mdash; what India borrowed, what it dropped, what it costs, and what to build.</p>
    <div class="cta">
      <a class="btn primary" href="study.html">Read the study &#8594;</a>
      <a class="btn" href="consent-layer.html">The product thesis &#8594;</a>
    </div>
  </div>
</header>
<div class="wrap">
  <section>
    <h2>The eighteen parts</h2>
    <div class="pgrid">{cards}</div>
  </section>
  <section>
    <h2>Also here</h2>
    <ul class="plain">
      <li><a href="study.html">The study as one page</a> &mdash; the law, the comparison, the divergences, what to build.</li>
      <li><a href="consent-layer.html">The Consent Layer</a> &mdash; a plain-English explainer, then a two-sided product thesis.</li>
      <li><a href="data-protection/memo/DPDP-Act-Global-Context-Research-Memo.docx">Cited research memorandum</a> (Word) &mdash; 75 numbered references.</li>
    </ul>
  </section>
  <footer class="foot">
    <p>Statutory references are to the Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 as notified on 14 November 2025. Time-sensitive positions are stated as at 19 August 2026. Not legal advice.</p>
  </footer>
</div>"""
    (OUT / "index.html").write_text(
        page("India's DPDP Act, in global context", index_body, depth=0,
             description="A study of India's DPDP Act and Rules against nineteen comparable regimes."))

    print(f"built {len(parts)} parts + index + 2 pages -> {OUT}")


if __name__ == "__main__":
    main()
