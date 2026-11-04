// Build a print-ready PDF of the Simplified Chinese translation.
//
//   cd zh-CN/_build && npm install && node build_pdf.mjs
//
// Requirements: pandoc (>= 3), Node 18+, Playwright with Chromium, Python 3 with pypdf.
// Pipeline: Markdown --pandoc--> HTML fragments -> one book.html (cover, TOC, chapters)
//           -> Chromium renders Mermaid diagrams -> page.pdf() (pass 1 to learn chapter
//           page numbers from the PDF outline, pass 2 with the TOC filled in)
//           -> pypdf merges the unnumbered cover with the numbered body.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

// Resolve Playwright from the local node_modules or a global install (NODE_PATH).
const { chromium } = createRequire(import.meta.url)('playwright');

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ZH = path.resolve(HERE, '..');
const OUT_DIR = path.join(HERE, 'out');
const PDF_OUT = path.join(ZH, 'SemiCap_Knowledge_Database_zh-CN.pdf');
const BOOK_TITLE = '半导体资本设备（SemiCap）知识库';
const BOOK_SUBTITLE = '简体中文参考译本';
const EDITION = '2026年11月版';

fs.mkdirSync(OUT_DIR, { recursive: true });

// ---------- 1. Collect chapters ----------
const files = fs.readdirSync(ZH).filter(f => /^\d\d_.*\.md$/.test(f)).sort();
if (fs.existsSync(path.join(ZH, 'README.md'))) files.unshift('README.md');
if (files.length < 2) throw new Error('No translated chapters found in ' + ZH);

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const chapters = files.map(f => {
  const num = f === 'README.md' ? '00' : f.slice(0, 2);
  let md = fs.readFileSync(path.join(ZH, f), 'utf8');
  // Drop the per-file "reference translation" notice; the book has one notice up front.
  md = md.split('\n').filter(l => !/^>\s*📘/.test(l) && !/^\*\*可打印PDF版/.test(l)).join('\n');
  const title = (md.match(/^#\s+(.+)$/m) || [, f])[1].trim();
  let html = execFileSync('pandoc', ['-f', 'gfm', '-t', 'html5', '--wrap=none', `--id-prefix=c${num}-`],
    { input: md, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  // Cross-file links -> in-book anchors.
  html = html.replace(/href="(?:\.\/)?(\d\d)_[^"#]*\.md(#[^"]*)?"/g, (_, n) => `href="#ch-${n}"`)
             .replace(/href="(?:\.\/)?README\.md(#[^"]*)?"/g, 'href="#ch-00"')
             .replace(/href="\.\.\/(\d\d)_[^"]*\.md[^"]*"/g, (_, n) => `href="#ch-${n}"`)
             // Rename so Mermaid's own startOnLoad pass doesn't touch the sources; we render them ourselves.
             .replace(/<pre class="mermaid">/g, '<pre class="mmd-src">')
             // Links to files outside the book (English originals, build notes) become plain text.
             .replace(/<a href="(?!#|https?:|mailto:)[^"]*">([\s\S]*?)<\/a>/g, '$1');
  return { f, num, title, html };
});

// ---------- 2. Assemble HTML ----------
const nm = p => pathToFileURL(path.join(HERE, 'node_modules', p)).href;
// A monospace CJK fallback scaled to exactly two Latin cells of JetBrains Mono (0.6em),
// so ASCII/Unicode diagrams that contain Chinese labels stay aligned.
const sansCss = fs.readFileSync(path.join(HERE, 'node_modules/@fontsource/noto-sans-sc/400.css'), 'utf8');
const monoCjkCss = sansCss
  .replace(/font-family: 'Noto Sans SC';/g, "font-family: 'CJK Mono Fallback'; size-adjust: 120%;")
  .replace(/url\(\.\/files\//g, `url(${nm('@fontsource/noto-sans-sc/files/')}`);
fs.writeFileSync(path.join(OUT_DIR, 'cjk-mono.css'), monoCjkCss);

function bookHtml({ pageMap, coverOnly }) {
  const toc = chapters.map((c, i) => {
    const label = c.num === '00' ? '总览' : `文件 ${c.num}`;
    const pg = pageMap ? String(pageMap[i] ?? '') : '000';
    return `<li><a href="#ch-${c.num}"><span class="toc-num">${label}</span><span class="toc-title">${esc(c.title.replace(/[⭐]/g, '').trim())}</span><span class="toc-dots"></span><span class="toc-page">${pg}</span></a></li>`;
  }).join('\n');

  const cover = `
<div class="cover">
  <div class="cover-top">SEMICONDUCTOR CAPITAL EQUIPMENT KNOWLEDGE DATABASE</div>
  <div class="cover-title">半导体资本设备<br/>（SemiCap）知识库</div>
  <div class="cover-sub">${BOOK_SUBTITLE}</div>
  <div class="cover-rule"></div>
  <div class="cover-desc">光刻 · 薄膜沉积 · 刻蚀 · CMP · 离子注入 · 量测检测 · 先进封装<br/>存储与化合物半导体设备 · 供应商格局 · 市场数据<br/>地缘政治与出口管制 · 技术路线图 · 前沿研究</div>
  <div class="cover-meta">共 ${chapters.length - 1} 个专题文件 · 内容更新至 ${EDITION.replace('版', '')}</div>
  <div class="cover-bottom">${EDITION} · 仅供参考 · 以英文原版为准</div>
</div>`;

  const notice = `
<div class="front notice-page">
  <div class="front-title">译本说明</div>
  <p>本书是英文版《Semiconductor Capital Equipment (SemiCap) Knowledge Database》的<strong>简体中文参考译本</strong>，内容涵盖英文原版的全部 ${chapters.length - 1} 个专题文件及总览索引，并包含截至 2026 年 11 月的最新进展更新。</p>
  <p><strong>仅供参考。</strong>译文力求准确，但专业术语、数字与表述如与英文原版存在任何出入，<strong>一律以英文原版为准</strong>。书中的市场规模、财务数据、工艺尺寸与研究成果等数值均为基于公开资料的近似行业估计，不同来源与口径之间存在差异，并会随时间变化；用于时效性较强的决策时，请对照最新的原始资料核实。</p>
  <p>书中所有图表（Mermaid 流程图与字符示意图）均为本知识库原创示意图，未复制任何第三方受版权保护的图片。公司名称在首次出现时一般给出中文常用译名并附英文原名；缩略语在首次出现时给出中文全称及英文缩写。</p>
  <p>交叉引用中的“文件 NN”对应本书同编号章节；电子版中目录与交叉引用均可点击跳转，PDF 书签按章节与小节组织。</p>
</div>`;

  const body = coverOnly ? '' : chapters.map(c => `
<section class="chapter${c.num === '00' ? ' overview' : ''}" id="ch-${c.num}">
  <div class="chapter-kicker">${c.num === '00' ? '总览 · OVERVIEW' : `文件 ${c.num} · FILE ${c.num}`}</div>
  ${c.html}
</section>`).join('\n');

  return `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8">
<title>${BOOK_TITLE}（${BOOK_SUBTITLE}）</title>
<link rel="stylesheet" href="${nm('@fontsource/noto-serif-sc/400.css')}">
<link rel="stylesheet" href="${nm('@fontsource/noto-serif-sc/700.css')}">
<link rel="stylesheet" href="${nm('@fontsource/noto-sans-sc/400.css')}">
<link rel="stylesheet" href="${nm('@fontsource/noto-sans-sc/500.css')}">
<link rel="stylesheet" href="${nm('@fontsource/noto-sans-sc/700.css')}">
<link rel="stylesheet" href="cjk-mono.css">
<link rel="stylesheet" href="${pathToFileURL(path.join(HERE, 'print.css')).href}">
</head><body>
${coverOnly ? cover : `${notice}
<div class="front toc-page"><div class="front-title">目　录</div><ol class="toc">${toc}</ol></div>
${body}`}
<script src="${nm('mermaid/dist/mermaid.min.js')}"></script>
</body></html>`;
}

// ---------- 3. Render ----------
const browser = await chromium.launch();
const page = await browser.newPage();

async function render(html, pdfPath, { numbered }) {
  const htmlPath = path.join(OUT_DIR, numbered ? 'book.html' : 'cover.html');
  fs.writeFileSync(htmlPath, html);
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });
  const report = await page.evaluate(async () => {
    await document.fonts.ready;
    const errors = [];
    const blocks = [...document.querySelectorAll('pre.mmd-src')];
    if (blocks.length && window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false, theme: 'neutral', securityLevel: 'loose',
        fontFamily: '"Noto Sans SC", sans-serif',
        flowchart: { htmlLabels: true, useMaxWidth: true, curve: 'basis' },
        pie: { textPosition: 0.72 },
        themeVariables: {
          fontSize: '14px',
          pie1: '#1f4e79', pie2: '#2f6ea5', pie3: '#4f8cc0', pie4: '#7aaad3', pie5: '#a7c7e3',
          pie6: '#c9dcee', pie7: '#8a9bb0', pie8: '#b8c3d1', pie9: '#d5dde6', pie10: '#e3e9ef',
          pieSectionTextColor: '#ffffff', pieStrokeColor: '#ffffff', pieOuterStrokeWidth: '1px',
        },
      });
      let i = 0;
      for (const pre of blocks) {
        const src = pre.textContent;
        const fig = document.createElement('div');
        fig.className = 'mermaid-figure';
        try {
          const { svg } = await window.mermaid.render(`mmd-${i++}`, src);
          fig.innerHTML = svg;
          pre.replaceWith(fig);
        } catch (e) {
          errors.push({ src: src.slice(0, 120), err: String(e && e.message || e).slice(0, 200) });
          document.querySelectorAll('#dmmd-' + (i - 1)).forEach(n => n.remove());
          pre.classList.add('mermaid-failed');
        }
      }
    }
    // Keep a bold one-line caption on the same page as the figure that follows it.
    for (const el of document.querySelectorAll('.mermaid-figure, pre')) {
      const prev = el.previousElementSibling;
      if (prev && prev.tagName === 'P' && prev.children.length === 1 && prev.firstElementChild.tagName === 'STRONG'
          && prev.textContent.trim() === prev.firstElementChild.textContent.trim()) prev.classList.add('fig-caption');
    }
    // Shrink wide ASCII diagrams so they fit the text block instead of being clipped.
    for (const pre of document.querySelectorAll('pre:not(.mermaid-failed)')) {
      let size = parseFloat(getComputedStyle(pre).fontSize);
      while (pre.scrollWidth > pre.clientWidth + 1 && size > 5) {
        size -= 0.25; pre.style.fontSize = size + 'px';
      }
    }
    await document.fonts.ready;
    return { mermaid: blocks.length, errors };
  });
  await page.pdf({
    path: pdfPath, format: 'A4', printBackground: true, outline: numbered, tagged: true,
    displayHeaderFooter: numbered,
    margin: numbered ? { top: '22mm', bottom: '20mm', left: '20mm', right: '20mm' } : { top: '0', bottom: '0', left: '0', right: '0' },
    headerTemplate: `<div style="width:100%;font-size:7.5pt;color:#8a8f98;padding:0 20mm;font-family:'Noto Sans SC','WenQuanYi Zen Hei',sans-serif;display:flex;justify-content:space-between;"><span>${BOOK_TITLE}</span><span>${BOOK_SUBTITLE} · ${EDITION}</span></div>`,
    footerTemplate: `<div style="width:100%;font-size:8pt;color:#555;text-align:center;font-family:'Noto Sans SC','WenQuanYi Zen Hei',sans-serif;">— <span class="pageNumber"></span> —</div>`,
  });
  return report;
}

function chapterPages(pdfPath) {
  const py = `
import sys, json
from pypdf import PdfReader
r = PdfReader(sys.argv[1])
out = []
for item in r.outline:
    if isinstance(item, list):
        continue
    out.append(r.get_destination_page_number(item) + 1)
print(json.dumps(out))`;
  return JSON.parse(execFileSync('python3', ['-c', py, pdfPath], { encoding: 'utf8' }));
}

const coverPdf = path.join(OUT_DIR, 'cover.pdf');
const bodyPdf = path.join(OUT_DIR, 'body.pdf');
await render(bookHtml({ coverOnly: true }), coverPdf, { numbered: false });

console.log(`Pass 1: ${chapters.length} chapters …`);
const r1 = await render(bookHtml({}), bodyPdf, { numbered: true });
console.log(`  mermaid diagrams: ${r1.mermaid}, failed: ${r1.errors.length}`);
for (const e of r1.errors) console.log('  ! mermaid error:', e.err, '\n    in:', e.src.replace(/\n/g, ' ⏎ '));
let pages = chapterPages(bodyPdf);
if (pages.length !== chapters.length) {
  console.warn(`  outline has ${pages.length} top-level entries for ${chapters.length} chapters; TOC numbers may be off`);
}

console.log('Pass 2: filling TOC page numbers …');
await render(bookHtml({ pageMap: pages }), bodyPdf, { numbered: true });
const check = chapterPages(bodyPdf);
if (JSON.stringify(check) !== JSON.stringify(pages)) {
  console.log('  page numbers shifted; pass 3 …');
  pages = check;
  await render(bookHtml({ pageMap: pages }), bodyPdf, { numbered: true });
}
await browser.close();

// ---------- 4. Merge cover + body, set metadata ----------
const merge = `
import sys
from pypdf import PdfReader, PdfWriter
w = PdfWriter()
w.append(PdfReader(sys.argv[1]), import_outline=False)
w.append(PdfReader(sys.argv[2]))
w.add_metadata({'/Title': sys.argv[4], '/Author': 'SemiCap Knowledge Database', '/Subject': 'Simplified Chinese reference translation', '/Language': 'zh-CN'})
# Cover is unnumbered (label "封面"); body pages are labelled 1, 2, 3 … to match the printed footers.
w.set_page_label(0, 0, prefix='封面')
w.set_page_label(1, len(w.pages) - 1, style='/D', start=1)
w.page_mode = '/UseOutlines'
with open(sys.argv[3], 'wb') as f:
    w.write(f)
print(len(w.pages))`;
const total = execFileSync('python3', ['-c', merge, coverPdf, bodyPdf, PDF_OUT, `${BOOK_TITLE}（${BOOK_SUBTITLE}）`], { encoding: 'utf8' }).trim();
console.log(`Wrote ${path.relative(process.cwd(), PDF_OUT)} (${total} pages, ${(fs.statSync(PDF_OUT).size / 1048576).toFixed(1)} MB)`);
