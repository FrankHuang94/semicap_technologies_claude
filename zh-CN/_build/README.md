# PDF build（PDF 构建说明）

Builds `zh-CN/SemiCap_Knowledge_Database_zh-CN.pdf` — a print-ready A4 book of the Simplified Chinese translation (cover, translator's note, clickable table of contents with page numbers, one chapter per file, rendered Mermaid diagrams, PDF bookmarks, page numbers).

本目录用于将 `zh-CN/` 下的简体中文译文生成可打印的 A4 PDF（含封面、译本说明、带页码的可点击目录、Mermaid 图表渲染、PDF 书签与页码）。

## Requirements

- [pandoc](https://pandoc.org/) 3.x
- Node.js 18+ and [Playwright](https://playwright.dev/) with Chromium (`npm i -g playwright && npx playwright install chromium`, or any existing install resolvable via `NODE_PATH`)
- Python 3 with `pypdf` (`pip install pypdf`)

## Build

```bash
cd zh-CN/_build
npm install          # mermaid + Noto Sans SC / Noto Serif SC web fonts (fontsource)
node build_pdf.mjs   # writes ../SemiCap_Knowledge_Database_zh-CN.pdf
```

The script prints the number of Mermaid diagrams rendered and any that failed to parse. Intermediate files go to `out/` (git-ignored).

## Files

- `build_pdf.mjs` — the pipeline: Markdown → pandoc HTML → one `book.html` → Chromium renders Mermaid → two-pass `page.pdf()` (pass 1 reads chapter page numbers from the PDF outline, pass 2 fills them into the TOC) → `pypdf` merges the unnumbered cover with the body and sets page labels/metadata.
- `print.css` — typography and print layout (Noto Serif SC body, Noto Sans SC headings/tables, JetBrains Mono with a width-matched CJK fallback so ASCII diagrams with Chinese labels stay aligned).
