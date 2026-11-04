# SemiCap Market Data, Financial Analysis, and Investment Dynamics

The semiconductor-equipment industry is a large, fast-growing, violently cyclical, and extraordinarily profitable sector that sits at the intersection of deep technology and financial markets. Its handful of dominant firms enjoy some of the highest margins and strongest competitive moats in the global economy, yet their revenues swing dramatically with the wafer-fab-equipment (WFE) cycle. This file surveys the market's size and structure, revenue and market-share data, R&D intensity and cyclicality, equipment pricing, company financials, the M&A history that built today's giants, and the considerations that shape SemiCap as an investment.

*Note on figures: the numbers below are representative industry estimates (SEMI, Gartner, VLSI Research, TechInsights, and company disclosures); exact values vary by source and definition (WFE vs. total equipment including test and assembly), and should be read as approximate.*

---

## 📊 Visual Overview

*Original schematics; Mermaid diagrams render natively on GitHub.*

**Global semiconductor equipment market growth (US$B, approximate; 2026e/2028e = SEMI July 2026 forecast)**

```
 2015   ████████████ 37
 2018   █████████████████████ 64
 2021   ██████████████████████████████████ 103
 2024   ███████████████████████████████████████ 117
 2025   ████████████████████████████████████████████ 133
 2026e  ███████████████████████████████████████████████████████ 166
 2028e  █████████████████████████████████████████████████████████████████████████████ 230
```

**The cyclicality engine — the WFE boom-bust loop**

```mermaid
flowchart LR
    UP["End demand tightens → prices rise"] --> CAPEX["Fabs add capacity (esp. memory)"]
    CAPEX --> PEAK["Equipment orders peak"]
    PEAK --> GLUT["Oversupply → prices crash"]
    GLUT --> CUT["Capex slashed → orders collapse"]
    CUT --> TROUGH["Trough → inventory clears"]
    TROUGH --> UP
    style PEAK fill:#d1e7dd
    style TROUGH fill:#f8d7da
```

**Tool price spans orders of magnitude (approx. ASP)**

```
 High-NA EUV scanner   $380M+   ████████████████████████████████████████
 EUV scanner (NXE)     ~$180M   ███████████████████
 DUV immersion         ~$75M    ████████
 e-beam inspection     ~$50M    █████
 etch / ALD chamber    ~$2-6M   ▏
```

---

## 1. Global SemiCap TAM, 2015–2030

Total semiconductor equipment spending has roughly tripled over fifteen years, growing through a series of cycles:

| Year | Total Equipment (US$B, approx.) | Driver |
|---|---|---|
| 2015 | ~37 | Mobile-driven; post-PC trough |
| 2016 | ~41 | 3D NAND / DRAM ramp |
| 2017 | ~57 | Memory super-cycle begins |
| 2018 | ~64 | Peak memory boom |
| 2019 | ~60 | Memory correction |
| 2020 | ~71 | COVID digital demand; EUV ramp |
| 2021 | ~103 | Pandemic supply crunch; record capex |
| 2022 | ~107 | Leading-edge logic/foundry peak |
| 2023 | ~106 | China DUV pull-in offsets memory downturn |
| 2024 | ~117 | AI-driven logic + advanced packaging; China mature-node buying |
| 2025 | ~133 (+13.7%) | AI capex, 2nm ramp, HBM (SEMI Dec 2025 year-end figure) |
| 2026 (fcst.) | ~166 (+23%) | DRAM-led memory upcycle, AI logic, advanced packaging; WFE ~$144B (SEMI Jul 2026) |
| 2027 (fcst.) | n/a (SEMI) — company WFE views ~$190–210B | DRAM, foundry/logic, NAND; cleanroom and component constraints (Lam, TEL, BofA views, Oct 2026) |
| 2028 (fcst.) | ~230 (record) | AI build-out sustained (SEMI Jul 2026) |
| 2030 (proj.) | >200 implied | Earlier ~160–200+ projections now superseded by the 2026 forecasts |

### Breakdown by Segment

| Segment | Approx. share of WFE | Leaders |
|---|---|---|
| Lithography | 20–25% | ASML |
| Deposition | 20–25% | AMAT, Lam, TEL, ASM |
| Etch | 18–22% | Lam, TEL, AMAT |
| Process control | 11–13% | KLA |
| CMP | 4–6% | AMAT, Ebara |
| Implant/thermal | 5–8% | AMAT, Axcelis |
| Clean | 5–7% | SCREEN, TEL, Lam |

### Breakdown by Geography (wafer-fab location)

Equipment spending follows fab construction: historically **China, Taiwan, and South Korea** have been the largest buyers, with China surging in 2023–2024 (mature-node buildout and pre-restriction stockpiling), Taiwan anchored by TSMC's leading-edge spend, and Korea by Samsung and SK Hynix memory. China remained the largest single region in 2025 but its share is declining in 2026 as Taiwan (TSMC 2nm/A16 and CoWoS) and Korea (DRAM/HBM) accelerate. The **U.S., Japan, and Europe** are rising as subsidy-driven fabs come online.

---

## 2. Equipment-to-Capex Ratio and Leading Customers

Equipment typically represents **75–80% of a leading-edge fab's construction cost** — the dominant component of capital spending. The largest equipment buyers are the handful of leading-edge manufacturers:
- **TSMC** — the single largest WFE customer, with annual capex in the **$30–40B+** range in 2021–2025 and raised to **$60–64B for 2026**, a double-digit share of total global WFE; analysts see ~$85B in 2027.
- **Samsung** — large spend across both leading-edge logic/foundry and memory.
- **Intel** — heavy spend on its IDM 2.0 / foundry buildout; after 2024–2025 capex cuts, capacity additions (e.g., for 14A) are now tied to committed external demand, though Intel Foundry equipment orders reportedly rose ~50% in 2026.
- **SK Hynix and Micron** — memory-driven, cyclical spend, sharply higher in 2026 on HBM and DRAM demand.
- **Chinese fabs (SMIC, CXMT, YMTC)** — significant mature-node and (constrained) advanced spend.

This concentration means a single customer's capex decision can move the entire equipment market.

---

## 3. Revenue and Market Share (2020–2024, approximate)

| Company | 2023 revenue (US$B, approx.) | Primary segments | Position |
|---|---|---|---|
| **ASML** | ~28 | Lithography | EUV monopoly |
| **Applied Materials** | ~26 | Deposition, etch, CMP, implant, control | Broadest portfolio |
| **Lam Research** | ~14–15 | Etch, deposition, clean | Etch leader |
| **Tokyo Electron** | ~13–15 | Track, etch, deposition, clean | Coater/developer leader |
| **KLA** | ~10 | Process control | Inspection/metrology leader |
| **ASM International** | ~3 | ALD, epitaxy | ALD leader |
| **SCREEN** | ~3 | Clean | Wet-clean leader |
| **Onto Innovation** | ~0.8 | Metrology | OCD/packaging |
| **Nova** | ~0.5 | Metrology | OCD specialist |
| **Axcelis** | ~1 | Ion implant | Implant specialist |

These five leaders — ASML, AMAT, Lam, TEL, KLA — together account for the large majority of WFE revenue, one of the most concentrated structures of any major industry. (For 2025–2026 figures — e.g., ASML 2025 net sales ~€32.7B and FY2026 guidance of €44–45B — see the 2025–2026 update below.)

---

## 4. R&D Intensity and Cyclicality

SemiCap firms sustain **R&D intensity of ~12–18% of revenue** — among the highest of any industry — funded by their high margins and large recurring-service revenue. This R&D is the foundation of their moats: the relentless investment required to stay ahead in EUV, ALD, etch, and process control is itself a barrier to entry.

**Cyclicality** is the defining financial characteristic. The WFE cycle is driven by end-market demand (especially the volatile memory market) and fab-construction waves. Historical cycles — the 2017–2018 memory boom and 2019 bust, the 2021–2022 pandemic-driven peak, the 2023 memory downturn (offset by China) — show swings of 20–40% in annual spending. The largest, most diversified firms (AMAT, Lam, TEL) buffer the cycle with broad portfolios spanning logic and memory; pure-plays (Axcelis, Lam's memory tilt) are more leveraged to specific cycles.

---

## 5. Equipment Pricing (ASPs)

Average selling prices vary by orders of magnitude across tool classes:

| Tool | Approx. ASP |
|---|---|
| EUV scanner (NXE) | ~$150–200M |
| High-NA EUV scanner (EXE) | ~$380M+ |
| DUV immersion scanner | ~$60–90M |
| Etch chamber/system | ~$3–6M per chamber; systems higher |
| ALD/CVD chamber | ~$2–5M |
| CMP system | ~$3–5M |
| Ion implanter | ~$3–8M |
| Inspection (e-beam / BBP optical) | ~$30–80M+ |
| CD-SEM | ~$3–6M |

The EUV and High-NA scanners are the highest-value individual tools in the industry, which is why ASML's revenue rivals the much broader-portfolio AMAT. The trend in ASPs is strongly **upward** — each lithography generation costs more, process control tools grow more sophisticated, and the rising number of process steps per node multiplies tool demand.

---

## 6. Key Financial Profile

The leaders share a recognizable financial signature:
- **Gross margins** typically **40–60%**, with **KLA and ASML at the high end** (reflecting monopoly/oligopoly pricing power; ASML reported 57.5% in Q3 2026) and the broad-portfolio firms somewhat lower.
- **Strong recurring revenue** from service, spares, and upgrades on large installed bases — which smooths the cycle and funds R&D.
- **High operating leverage** — fixed R&D and manufacturing costs mean profits swing more than revenue across the cycle.
- **Backlog and book-to-bill ratios** are closely watched leading indicators: book-to-bill above 1.0 signals expansion, below 1.0 contraction.

---

## 7. SemiCap M&A History

Today's giants were built substantially through acquisition, consolidating capabilities into broad platforms:

| Acquisition | Year | Significance |
|---|---|---|
| **Applied Materials / Varian** | 2011 | Added ion implantation to AMAT |
| **Lam Research / Novellus** | 2012 | Added deposition to Lam's etch, creating a deposition-etch powerhouse |
| **ASML / Cymer** | 2013 | Secured the EUV light source |
| **ASML / HMI (Hermes Microvision)** | 2016 | Added e-beam inspection |
| **KLA / Orbotech** | 2019 | Expanded into PCB, packaging, and specialty inspection |
| **Entegris / CMC Materials** | 2022 | Added CMP slurries to Entegris's materials portfolio |
| **Applied Materials / Besi (~9% stake)** | 2025 | Minority stake; co-development of integrated hybrid-bonding systems |
| **Axcelis + Veeco (all-stock merger, ~$4.4B)** | Announced Oct 2025; closing expected by end Q1 2027 | Combines ion implant with deposition/etch/wet tools; pending China SAMR approval and a new HSR filing |
| **Applied Materials / ASMPT's NEXX business** | Agreed May 2026 (reported) | Adds advanced-packaging deposition/ECD |

Several proposed mega-deals were **blocked** — most notably **Applied Materials / Tokyo Electron (2013–2015)**, abandoned over U.S. antitrust concerns, and **AMAT/KKR's bid for Kokusai Electric (2023–2024)**, which fell through. The blocked deals reflect both the strategic value of consolidation and the antitrust limits on further concentration in an already-concentrated industry.

---

## 8. Investor Considerations

SemiCap presents investors with a distinctive risk-reward profile:
- **Cyclicality** — the central risk; revenues and especially earnings swing sharply with the WFE cycle, demanding a long-term view through the cycle.
- **China exposure** — the major swing factor; export controls structurally reduce China leading-edge revenue while the timing and depth remain uncertain (File 18).
- **Customer concentration** — a few customers drive demand; the loss or delay of a single customer's program is material.
- **R&D moats** — the flip side of the risks; the leaders' technological dominance and high margins are durable, and the competitive order rarely changes.
- **Gross-margin profiles** — the highest-margin franchises (ASML's EUV monopoly, KLA's process-control dominance) command premium valuations.
- **Secular tailwinds** — AI-driven capex, rising EUV/High-NA and process-control intensity per node, the explosion of advanced packaging, and SiC/GaN power growth provide multi-year structural demand beneath the cyclical noise.

The investment thesis for SemiCap ultimately rests on a paradox at the heart of this database: even as classical Moore's Law scaling slows and grows more expensive, the **complexity and cost of each node rise**, multiplying the demand for tools, driving up their value, and concentrating ever more of the industry's economics in the hands of the few firms that can make them. The slowing of dimensional scaling is not the end of the equipment industry's growth — it is the redistribution of that growth toward lithography, process control, new-materials processing, and packaging, and toward the handful of companies with the technology and the moats to dominate those frontiers.

---

## Extended Analysis: Cyclicality, Segment Dynamics, and the AI Super-Cycle

### A. Anatomy of the WFE Cycle

The WFE cycle is driven by the interaction of end-market demand, memory pricing, and fab-construction timing, and it has a recognizable rhythm. An **upturn** typically begins when end demand (PCs, phones, data centers, autos) tightens chip supply, prices firm, and manufacturers — especially memory makers — race to add capacity, ordering equipment in volume. Lead times stretch, OEM backlogs swell, and book-to-bill ratios climb above 1.0. The **peak** arrives when capacity additions catch up with (and often overshoot) demand. The **downturn** follows as oversupply crashes chip prices (memory most violently), manufacturers slash capex almost overnight, OEM orders evaporate, and book-to-bill falls below 1.0 — frequently a steep, sudden drop because capex is the most discretionary, most quickly cut line in a manufacturer's budget. The **trough** persists until inventories clear and demand recovers, seeding the next cycle.

Several features make the cycle tradeable and analyzable: it is led by **memory** (the most volatile segment), it is visible in advance through **book-to-bill and backlog** data, and it is buffered by **recurring service revenue** (the installed base needs spares and service regardless of new-tool demand, providing a floor). The largest, most diversified OEMs (Applied, Lam, TEL) ride the cycle with broad portfolios spanning logic and memory; pure-plays and memory-tilted firms (Lam's memory exposure, Axcelis) swing more.

### B. Segment Divergence

A crucial nuance is that the segments do **not** move in lockstep. **Leading-edge logic/foundry** (anchored by TSMC) follows the node-transition and now the AI cycle; **memory** follows the commodity-price cycle; **mature-node/specialty** follows automotive, industrial, and (recently) the chip-shortage-driven and China-localization-driven buildouts; and **advanced packaging** now follows the AI cycle largely independently. This divergence both smooths the aggregate (a memory downturn can coincide with a logic boom) and creates opportunity (the firms best exposed to the strongest segment at a given time outperform). The 2023 picture exemplified this: a memory downturn was substantially offset by a surge in Chinese mature-node tool buying and resilient leading-edge logic — so total WFE held roughly flat even as memory spending fell sharply.

### C. The AI Super-Cycle

The generative-AI boom of 2023 onward introduced a powerful new demand driver that cuts across segments. It drives **leading-edge logic** (NVIDIA/AMD GPUs on TSMC's most advanced nodes), **HBM** (high-bandwidth memory, the hottest corner of the DRAM market, requiring advanced DRAM plus TSV/stacking/bonding), and above all **advanced packaging** (CoWoS, whose capacity became a multi-year bottleneck on AI-accelerator supply). For the equipment industry, the AI super-cycle has several distinctive features: it concentrates demand at the **leading edge and in packaging** (favoring ASML, the advanced-deposition/etch/metrology leaders, and the packaging/bonding specialists), it made **HBM and packaging** rare bright spots even during the 2023 memory downturn — and by 2026 had helped turn memory into the *leading* growth segment (a DRAM-led "memory supercycle", with SEMI forecasting DRAM equipment up ~39% to ~$38.8B in 2026) — and it has driven TSMC and the memory makers to multi-year capacity expansions specifically for AI. Whether the AI super-cycle proves durable or eventually corrects (as all cycles do) is a central question for the sector's medium-term outlook, but it has unambiguously shifted the center of gravity of equipment demand toward the leading edge, advanced DRAM/HBM, and advanced packaging.

### D. Valuation and the Quality of the Franchises

The SemiCap leaders command premium valuations because, beneath the cyclicality, they possess unusually high-quality franchises: monopoly or oligopoly market positions, the highest R&D intensity in industry (funding durable moats), high gross margins (40–60%, with ASML and KLA at the top), large recurring service revenue, and exposure to multi-decade secular growth (computing demand, AI, electrification). The investment debate centers on weighing these durable strengths against the cyclical risk, the structural China headwind (File 18), and customer concentration. The market generally awards the highest multiples to the firms with the strongest moats and the cleanest secular growth — **ASML** (EUV monopoly), **KLA** (process-control dominance, rising intensity per node), and the broad-portfolio leaders — reflecting the judgment that, across the cycle, these are among the highest-quality industrial franchises in the world. The deteriorating economics of dimensional scaling, far from undermining this thesis, reinforce it: as each node grows more complex and tool-intensive, the value captured by the equipment leaders grows, making SemiCap a leveraged, if cyclical, play on the entire future of computing.

---

## Further Analysis: The Long-Run Investment Thesis

### A. The Secular Growth Beneath the Cycle

Beneath the violent cyclicality that dominates the year-to-year picture lies a powerful **secular growth trend** that defines the long-run investment thesis for SemiCap. Over decades, total equipment spending has roughly tripled (from ~$37B in 2015 to ~$133B in 2025, with SEMI forecasting ~$166B in 2026 and a record ~$230B in 2028 — well above the $160–200B once projected for 2030), driven by forces that transcend the cycle: the relentless growth in demand for computing (now supercharged by AI), the rising cost and complexity of each node (more steps, more EUV, more process control, new materials, three-dimensional integration — each multiplying tool demand and value), the explosive growth of advanced packaging as a new spending category, and the electrification-driven growth of compound-semiconductor (SiC/GaN) equipment. The key insight is that the equipment market grows even as the *pace of dimensional scaling slows*, because the rising complexity and cost of each node more than offset the slowing cadence — more process steps per wafer, higher-value tools, rising process-control and lithography intensity, and entirely new categories. This secular growth, riding beneath the cyclical noise, is the foundation of the long-run thesis: SemiCap is a structurally growing industry, leveraged to the entire future of computing, even as it remains cyclical in the short run.

### B. The Quality of the Franchises

Layered atop the secular growth is the **exceptional quality of the leading franchises**, which is what makes SemiCap not merely a growing but a highly profitable and defensible industry. The leaders possess monopoly or oligopoly positions (ASML's EUV monopoly, KLA's process-control dominance, the concentrated structure of nearly every category), the highest R&D intensity in industry (funding durable moats), high gross margins (40–60%, with the monopoly holders at the top), large recurring service revenue (smoothing the cycle and funding R&D), and the deepest competitive moats in any industry (accumulated know-how, customer co-development, installed-base lock-in, patents and trade secrets — Files 14, 17). These franchises are remarkably durable: the competitive order changes slowly, the leaders' positions are defensible against even well-funded challengers (including China's subsidized makers), and the moats deepen as nodes grow harder. The combination of secular growth and exceptional franchise quality is what awards the SemiCap leaders their premium valuations and makes them, across the cycle, among the highest-quality industrial businesses in the world — a leveraged, if cyclical, play on the entire future of computing.

### C. The Risks That Define the Debate

The investment debate centers on weighing these strengths against a set of real risks. **Cyclicality** is the central near-term risk — revenues and especially earnings swing sharply with the WFE cycle, demanding a long-term view through the cycle and a tolerance for volatility. **China exposure** is the major structural swing factor — export controls (File 18) structurally reduce the incumbents' China leading-edge revenue while nurturing Chinese domestic competitors that threaten the mature-node market, and the timing, depth, and ultimate outcome of this dynamic remain genuinely uncertain. **Customer concentration** means a few customers (TSMC, Samsung, Intel, SK Hynix, Micron) drive demand, so the delay or loss of a single customer's program is material. **The AI super-cycle's durability** is an open question — the AI-driven surge in leading-edge and packaging demand has been a powerful tailwind, but all cycles eventually correct, and the depth of the eventual correction matters. And **the pace and cost of leading-edge scaling** — whether the industry can continue to extract economic value from ever-more-expensive nodes — underlies the long-run demand. Weighing the durable strengths (secular growth, franchise quality, deep moats) against these risks (cyclicality, China, concentration, AI-cycle durability) is the essence of the SemiCap investment debate, and the market generally awards the highest valuations to the firms with the strongest moats and cleanest secular growth (ASML, KLA, the broad-portfolio leaders), reflecting the judgment that, across the cycle, the quality of the franchises and the power of the secular growth outweigh the risks. The deteriorating economics of dimensional scaling, far from undermining this thesis, reinforce it: as each node grows more complex and tool-intensive, the value captured by the equipment leaders grows — making SemiCap, for all its cyclicality and geopolitical exposure, a leveraged play on the indispensable foundation of the digital and AI age.

---

## 🆕 2025–2026 Update: Latest Developments (as of November 2026)

The AI build-out turned what was expected to be a moderate 2025–2026 expansion into the strongest equipment upcycle in the industry's history. Forecasts made as recently as late 2025 have been revised sharply upward, and the debate has shifted from "how long will the AI cycle last?" to "can the supply chain physically deliver the tools?"

### Market size: forecasts revised sharply upward

- **2025 actual:** SEMI's December 2025 year-end forecast put total OEM equipment sales at **~$133B (+13.7% YoY)**, a record. At the time SEMI projected $145B for 2026 and $156B for 2027.
- **2026:** SEMI's **14 July 2026 mid-year forecast** raised 2026 to **$165.9B (+23.2%)**, with **WFE at $143.9B (+23.1%)**, **DRAM equipment +39% to ~$38.8B**, **test equipment $15.3B** (a strong upward revision) and assembly & packaging ~$6.7B. SEMI now projects a record **$229.5B in 2028**.
- **2027:** SEMI (August 2026) expects 300mm fab equipment spending alone to exceed $150B in 2027. Company and analyst WFE views published in October 2026 point to a step-up well beyond SEMI's earlier $156B total-equipment figure:

| Source (date) | 2026 WFE view | 2027 WFE view |
|---|---|---|
| Lam Research (21 Oct 2026) | ~mid-$150B range | >$200B (preliminary); led by DRAM, then foundry/logic, then NAND |
| KLA (Oct 2026) | ~low-$150B (raised from "$140B+") | "Significant growth" |
| Tokyo Electron (reported) | — | ≥$190B |
| BofA | $156B | $210B |
| SEMI (Jul 2026), WFE only | $143.9B | — |

Definitions differ between SEMI's data and companies' own WFE estimates, so the ranges are not directly comparable. In the broader chip industry, Gartner sees 2026 semiconductor capex of ~$237B, WSTS forecasts 2026 semiconductor revenue of ~$975B, and Omdia says it could exceed $1T.

### Company financials (latest reported, per company releases and press reports)

| Company | Latest period | Key figures | Outlook / notes |
|---|---|---|---|
| **ASML** | Q3 2026 (14 Oct 2026) | Record net sales €11.7B; GM 57.5%; net income €5.0B; EUV system sales €4.1B incl. 1 High-NA | FY2026 guide €44–45B (vs ~€32.7B in 2025); Q4 guide €14.2–15.2B, GM ~57% |
| **Applied Materials** | FQ3 2026 (13 Aug 2026) | Record revenue ~$9.1B (+25% YoY); non-GAAP EPS $3.50; China 28% of revenue | FQ4 guide ~$10.25B; controls cut ~$600M from FY2026 revenue |
| **Lam Research** | FY2026 (ended Jun 2026); Sep-2026 quarter | FY revenue ~$23.2B (+26%, per press summaries); Sep-qtr EPS $2.20 vs $2.18 est.; record foundry sales | CY2027 WFE >$200B (preliminary); flags cleanroom/component constraints |
| **KLA** | Sep-2026 quarter | Advanced-packaging process control ~$1.1B expected in 2026 (+70%, reported) | Raised 2026 WFE view |
| **Tokyo Electron** | 1H FY2026 | Record first half (reported) | 2027 WFE ≥$190B (reported) |
| **Advantest** | Sep-2026 quarter | Record quarterly revenue and operating margin (per press reports; reported figures vary by source) | AI/HBM test demand |
| **Teradyne** | Sep-2026 quarter | Revenue ~$1.31B | 2026 guide midpoint ~$5.2B; AI ~70% of revenue (Q1 2026) |

The **test** segment has been an outsized winner: tester-market views for 2026 have reportedly been raised to ~$13.0–14.5B, driven by AI accelerators and HBM.

### Customer capex

**TSMC** raised 2026 capex to **$60–64B** (from $52–56B) and said 2026–2028 capex will be "significantly higher" than the prior three years; analysts see ~$85B in 2027. Q3 2026 revenue was ~$46.7B with Q4 guidance of $52.3–54.3B. Memory makers are expanding aggressively (SK hynix's Yongin fab 1 targeted for Q1 2027; a reported US listing by SK hynix to raise up to ~$36B for fabs and EUV tools; Micron's ~$7B HBM packaging plant in Singapore). Intel Foundry equipment orders reportedly rose ~50% in 2026.

### Supply becomes the constraint

ASML said planned supply will **not fully meet customer demand in 2027 and 2028**; it plans ~30% more low-NA EUV and DUV immersion capacity in 2027 and is studying further increases, while customers are asking to place orders for 2029–2030. Lam warned that **cleanroom-space shortages and component supply** could cap industry output. For investors this changes the cycle's shape: lead times and backlogs, rather than orders, may set 2027 revenue.

### M&A and portfolio moves

- **Axcelis–Veeco** (~$4.4B all-stock; 0.3575 ACLS per VECO share): shareholders approved 6 Feb 2026; closing now expected by end Q1 2027, pending China SAMR approval and a new HSR filing.
- **Applied Materials** agreed in May 2026 to acquire ASMPT's **NEXX** advanced-packaging deposition/ECD business (reported), after taking a ~9% stake in **Besi** in 2025.
- **ASML** led Mistral AI's Series C (~€1.3B, Sep 2025); **Lam** announced a reported ~$1.2B India investment in component manufacturing (Oct 2026).

### Valuation and sentiment

Equipment stocks were volatile in August–October 2026 despite earnings beats, reflecting sector rotation and debate over AI-capex durability, China exposure and supply limits rather than any deterioration in reported demand.

**What to watch (late 2026–2027)**

- SEMI's December 2026 year-end forecast and whether it adopts a ~$200B+ WFE view for 2027.
- ASML's Q4 2026 results (January 2027) and its Capital Markets Day on 10 June 2027 (2030 targets, High-NA adoption).
- Applied Materials' FY2026 results (November 2026) and China share trends.
- Evidence of tool-delivery bottlenecks (cleanrooms, components) pushing revenue into 2028.
- DRAM/HBM pricing as the swing factor for memory capex; any sign of AI-capex digestion.
- Closing of Axcelis–Veeco and further consolidation in packaging and test.
