# The published site

This folder is the GitHub Pages site. It is **generated** — do not hand-edit the HTML.

| Path | What it is |
|---|---|
| `index.html` | Landing page: the eighteen parts, plus links to the two designed pages |
| `parts/*.html` | Each part of the study, rendered from `data-protection/*.md` |
| `study.html` | The full study as one designed page |
| `consent-layer.html` | The plain-English explainer and the product thesis |
| `assets/site.css` | Shared stylesheet (light and dark) |
| `data-protection/` | The markdown sources and the cited Word memo |

## Rebuilding

```bash
python3 tools/build_site.py
```

No dependencies — `tools/build_site.py` contains a small Markdown-subset renderer covering
exactly the constructs the study uses (headings, pipe tables, lists, blockquotes, emphasis,
links, rules). Edit the markdown in `docs/data-protection/`, rerun, commit.

## Enabling Pages (one-time, repository settings)

The workflow at `.github/workflows/pages.yml` builds and deploys on every push that touches
`docs/`. It needs Pages switched on once:

**Settings → Pages → Build and deployment → Source: _GitHub Actions_**

If the `github-pages` environment restricts deployments to protected branches, either add
`claude/dp-act-analysis-international-yiaxgy` to the allowed branches
(**Settings → Environments → github-pages → Deployment branches**), or merge the branch into
the default branch and let it deploy from there.

**Alternative without Actions:** *Settings → Pages → Source: Deploy from a branch*, then pick
this branch and the `/docs` folder. The committed HTML is served as-is; `.nojekyll` stops
Jekyll from reprocessing it.

The site will be published at `https://<owner>.github.io/<repo>/`.
