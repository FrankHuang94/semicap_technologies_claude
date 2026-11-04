# Geopolitics, Export Controls, and Supply Chain Security

Since roughly 2018, semiconductor capital equipment has moved from the periphery of geopolitics to its center. The discovery that a handful of tools gate the entire advanced-chip supply chain transformed SemiCap into the most powerful lever in great-power technology competition. Governments learned that **controlling the equipment is far more effective than controlling the chips** — deny a rival access to EUV, advanced etch, and advanced metrology, and its leading-edge ambitions freeze. The result is an escalating contest of export controls, subsidies, and industrial policy that now shapes every major SemiCap company's strategy, revenue, and risk profile. This file traces the export-control regime, the subsidy programs, China's response, and the long-term supply-chain implications.

---

## 📊 Visual Overview

*Original schematics; Mermaid diagrams render natively on GitHub.*

**How equipment export controls work — and China's response**

```mermaid
flowchart TD
    US["US BIS / EAR + Foreign Direct Product Rule (FDPR)"] --> NL["Netherlands (ASML)"]
    US --> JP["Japan (TEL, Nikon, materials)"]
    US -->|"thresholds: ≤14nm logic,<br/>≤18nm DRAM, ≥128L NAND"| CN["China fabs (SMIC, CXMT, YMTC)"]
    NL -->|"no EUV since 2018;<br/>DUV restricted 2023-25"| CN
    JP -->|"23 tool categories (2023)"| CN
    CN --> DOM["Domestic response:<br/>Big Fund + NAURA · AMEC · SMEE · SiCarrier"]
    CN -.->|"countermeasures: Ga/Ge/rare-earth curbs<br/>(partly suspended under Nov 2025 truce)"| US
    style US fill:#cfe2ff
    style DOM fill:#fff3cd
```

**Why equipment is the perfect chokepoint**

```
 Chips:     made by the billions, designed by hundreds of firms → hard to control
 Equipment: a few hundred EUV tools, ~1 supplier, one tool gates many chips,
            and needs ongoing service/parts → IDEAL control point
```

**Subsidy programs (approximate headline size, US$B)**

```mermaid
pie showData
    title Major Semiconductor Subsidy Programs (US$B, approx.)
    "US CHIPS Act" : 52
    "EU Chips Act" : 46
    "China Big Fund III" : 47
    "Japan (Rapidus, TSMC etc.)" : 25
```

---

## 1. The Legal Architecture: ITAR, EAR, and the FDPR

U.S. control over semiconductor technology rests on two regimes. **ITAR (International Traffic in Arms Regulations)** governs a narrow set of defense-grade and radiation-hardened items. Far more consequential is the **EAR (Export Administration Regulations)**, administered by the **Bureau of Industry and Security (BIS)**, which controls dual-use technology — including essentially all advanced semiconductor equipment.

The decisive instrument is the **Foreign Direct Product Rule (FDPR)**, which extends U.S. jurisdiction to **foreign-made goods that incorporate U.S. technology or software**. Because virtually every advanced tool on Earth — including ASML's EUV scanners — contains U.S.-origin components, software, or design, the FDPR gives the United States extraterritorial reach over the entire global equipment supply chain. This is why the U.S. can effectively restrict a Dutch company's exports: the FDPR, combined with diplomatic pressure and allied coordination, makes U.S. controls global in practice.

---

## 2. The October 2022 Rules and Their Escalation

The watershed came on **October 7, 2022**, when BIS issued sweeping rules targeting China's advanced-chip capability. The rules restricted the export to China of equipment capable of producing:
- **Logic at ≤16/14nm** (FinFET-class and below),
- **DRAM at ≤18nm** half-pitch,
- **NAND at ≥128 layers**,

plus restrictions on advanced computing chips and on the activities of "U.S. persons" supporting Chinese advanced manufacturing. The rules directly curtailed China-bound sales by **Applied Materials, Lam Research, and KLA**, each of which had derived a substantial share of revenue from China.

Subsequent updates **tightened and broadened** the controls: the **October 2023** package refined the thresholds, closed loopholes, expanded the entity list, and constrained additional categories; further updates through **2024 and 2025** continued the pattern — the **December 2024** package added HBM controls, roughly 140 entity listings (including Chinese toolmakers) and FDPR expansions; the **September 2025 "Affiliates" (50%) Rule** extended Entity List restrictions to subsidiaries at least 50% owned by listed parties; and the **Validated End-User (VEU)** authorizations for Samsung's and SK hynix's China fabs were revoked effective 31 December 2025. The trajectory has been one of steady escalation, with each round closing gaps the previous round left open — although, from late 2025, escalation became entangled with US–China trade bargaining, and the Affiliates Rule was **suspended for one year from 10 November 2025** under the Busan truce (see the 2025–2026 update below).

---

## 3. ASML, EUV, and DUV Restrictions

ASML occupies the most sensitive position. It has **never been granted a license to ship EUV to China** (since 2018, under Dutch export policy aligned with U.S. pressure), meaning China has been categorically denied the single most important tool for leading-edge logic and advanced DRAM. The contest then shifted to **DUV immersion** scanners (the 193i tools used for multi-patterning and mature nodes): through **2023–2024**, the Netherlands progressively restricted exports of ASML's most advanced immersion systems to China, and the U.S. extended controls (including on servicing) to limit China's access to and support of installed DUV tools. ASML, for which China had become a large revenue source (amplified by a pre-restriction buying surge), faces a managed decline of its China business even as the rest of its market grows: China fell from 36% of ASML's system sales in Q4 2025 to 14% in Q2 2026 before rebounding to ~23% in Q3 2026, and ASML expects China to be ~20% of FY2026 net sales. A bill in Congress (the proposed **MATCH Act**) would go further by banning DUV sales and the servicing of installed tools in China; it had not been enacted as of November 2026.

---

## 4. Allied Coordination: The Netherlands, Japan, and Korea

U.S. controls are effective only because key allies — home to the rest of the equipment ecosystem — coordinate. **The Netherlands** (ASML) aligned its EUV and DUV policies with U.S. objectives. **Japan**, home to TEL, Nikon, Canon, Screen, and the critical materials suppliers, imposed its **own export controls in March 2023** covering **23 categories of equipment** (etch, deposition, lithography, cleaning, testing), affecting TEL and others and aligning Japan with the U.S.–Dutch framework. **South Korea** (home to Samsung and SK Hynix, which operate fabs in China) occupies a more delicate position — pressured to align while protecting its companies' large Chinese operations; that position became harder when the US revoked the VEU status of Samsung's Xi'an and SK hynix's Wuxi and Dalian fabs at the end of 2025, replacing it with annual licenses for 2026 that allow those fabs to be maintained but not expanded or upgraded. This **trilateral-plus coordination** (sometimes informally called the "Chip 4" dynamic with Taiwan) is what makes the controls bite; without it, China could simply buy from non-U.S. suppliers.

---

## 5. The Subsidy Era: CHIPS Act, EU Chips Act, and Beyond

In parallel with restrictions, the major economies launched enormous **subsidy programs** to localize capacity and reduce dependence on East Asia:

- **U.S. CHIPS and Science Act (2022):** ~**$52 billion**, including ~$39B in manufacturing incentives and ~$11B for R&D (anchoring the **National Semiconductor Technology Center, NSTC**). It catalyzed **TSMC Arizona, Intel Ohio and Arizona, Samsung Texas, and Micron New York**. In August 2025 the US government converted CHIPS grants owed to Intel into a ~10% equity stake (~US$8.9B), a departure from the original grant model. Critically, the Act includes **"guardrails"** prohibiting recipients from expanding advanced capacity in China for ten years — tying subsidies to decoupling.
- **EU Chips Act (2023):** ~**€43 billion** mobilized, supporting **ASML, IMEC, Infineon, STMicroelectronics**, and new fabs (the **TSMC/ESMC Dresden** joint venture; Intel's planned **Magdeburg** site was paused in 2024 and cancelled in July 2025). Europe's strategy emphasizes its strengths — equipment (ASML), research (IMEC), and automotive/industrial/power chips.
- **Japan** backed **Rapidus** (an ambitious 2nm venture with IBM and IMEC) and the **TSMC Kumamoto** fabs with substantial subsidies, seeking to rebuild its leading-edge position; Rapidus raised ¥267.6B from the government and 32 private companies in February 2026, with cumulative government support reportedly ~¥2.35T and HVM targeted for 2H FY2027.
- **South Korea** announced a massive semiconductor "mega-cluster" plan; **India** launched an incentive scheme attracting assembly and some fab investment; and **Taiwan**, **Singapore**, and others maintain their own support.

The net effect is a global subsidy race that is reshaping *where* capacity is built — often at higher cost and slower pace than the established Asian clusters — and creating a wave of new fab construction that drives equipment demand even as the China market contracts.

---

## 6. China's Response: The Big Fund and Domestic Equipment

China has responded to the controls with a determined drive for **self-sufficiency**, funded by the **National IC Industry Investment Fund ("Big Fund")**: **Phase I (~¥139B/~$22B, 2014), Phase II (~¥204B/~$30B, 2019), and Phase III (~¥344B/~$47B, 2024)** — the largest of the three, signaling intensified commitment under the pressure of controls.

The results are mixed but significant:
- **SMIC** reached **7nm-class** production (demonstrated in the **Huawei Kirin 9000S** processor, ~2023) using **DUV multi-patterning** rather than EUV — proving that meaningful leading-edge capability is possible without EUV, at higher cost and lower yield, but enough to alarm Western policymakers and to demonstrate the limits of controls. By late 2025, 5nm-class (N+3) chips (Huawei Kirin 9030) were reported, again via DUV multi-patterning at low yields and high cost.
- **Domestic equipment makers** — **NAURA** (etch, deposition, thermal, clean), **AMEC** (etch, MOCVD), **Piotech** (deposition), **ACM Research** (clean), **Kingsemi** (track), **SiCarrier** (a Huawei-linked broad-equipment effort), and **SMEE** (lithography) — are climbing the technology ladder, gaining strong share in **mature nodes** and many front-end categories while still facing **major gaps at the leading edge**, above all in **EUV lithography and advanced metrology**. Per an industry-body figure, domestic tools accounted for ~**35%** of equipment used in China in 2025 (up from ~25% in 2024 and ~7% in 2020).
- **SMEE's domestic lithography** remains limited to mature-node DUV, with a 28nm-class ArF immersion scanner in verification; a domestic EUV capability, while a stated goal, is widely assessed to be years away — Reuters reported in December 2025 that a prototype EUV machine assembled in Shenzhen generates EUV light but has not produced working chips, with insiders seeing ~2030 as a more realistic date for chips than the official 2028 target.

The controls have thus produced a paradox: they have **slowed** China's leading-edge progress and denied it EUV, while simultaneously **accelerating** China's domestic-equipment industry (by guaranteeing it a captive market) and prompting a near-term surge in Chinese **mature-node** capacity and tool buying. Whether the controls ultimately contain China or merely delay it while spurring a formidable domestic competitor is the central strategic question.

---

## 7. Impact on the SemiCap Companies

For the equipment makers, China historically represented **20–45% of sales** (AMAT, Lam, KLA, ASML, TEL). The controls have produced a complex revenue picture: a **near-term surge** in Chinese mature-node buying (as Chinese fabs stockpiled tools ahead of further restrictions), followed by an expected **structural decline** in China-bound leading-edge revenue, partly offset by the subsidy-driven fab buildout elsewhere. Every major OEM now manages this tension — capturing Western and allied demand while navigating the loss of Chinese leading-edge sales and the rise of Chinese domestic competition in mature segments. **Export-control exposure** has become a primary investment consideration across the sector. By 2026 the decline was visible but gradual: Applied Materials' China share fell to 28% of revenue in FQ3 2026 (from 35% a year earlier), and the company estimated that controls would cut ~US$600M from FY2026 revenue. Enforcement also bit: in February 2026 Applied agreed to a **US$252.5M** BIS civil penalty over unlicensed re-exports of ion implanters to SMIC via its Korean subsidiary.

---

## 8. Alternative Assembly Locations and Other Dependencies

Beyond the leading edge, the controls and broader "de-risking" are reshaping the **back-end** as well: **India, Vietnam, Malaysia, and Thailand** are attracting assembly, packaging, and test investment as companies diversify away from concentration in China. Meanwhile, the supply chain harbors other dependencies — **rare earths and specialty materials** (where China holds strong positions — it supplies ~80% of primary gallium and ~60% of germanium, and used both, plus rare earths, as countermeasures in 2023–2025), **neon and other gases** (a vulnerability exposed by the war in Ukraine, which disrupted Ukrainian neon supply), and the concentrated **Japanese materials** base. These dependencies cut in multiple directions, giving different actors different points of leverage and ensuring that supply-chain security will remain a permanent strategic concern.

---

## 9. Long-Term Strategic Implications

The geopoliticization of SemiCap has several durable implications. The industry will likely **bifurcate** to some degree into a Western-allied ecosystem and a Chinese domestic ecosystem, with reduced (but not zero) interchange. Equipment companies will continue to face the tension between a large Chinese market and escalating restrictions. Subsidy-driven capacity will be built in higher-cost locations, raising the cost floor of the industry. And **IP security** (File 17) will remain a front line, as the contest is fought not only over tools but over the knowledge to make them.

Above all, the episode has confirmed the central thesis of this database: semiconductor capital equipment is the **ultimate chokepoint** of the modern economy, and whoever controls the most advanced tools — and the ecosystem and knowledge behind them — holds decisive leverage over the future of computing, and therefore over economic and military power. That realization, more than any single rule or subsidy, is what has placed SemiCap permanently at the center of twenty-first-century geopolitics.

---

## Extended Analysis: Mechanisms, Effectiveness, and Second-Order Effects

### A. Why Equipment Is the Perfect Chokepoint

The reason export controls focus on equipment rather than chips is a matter of leverage geometry. Chips are made by the billions, designed by hundreds of companies, and shipped everywhere — controlling them is like trying to control water. Equipment, by contrast, is made by a handful of firms, in tiny volumes (a few hundred EUV scanners exist worldwide), and each tool gates the production of all the chips it makes. Denying one EUV scanner prevents an entire fab's worth of leading-edge production. Moreover, equipment requires ongoing **service, spare parts, software updates, and process support** from the OEM — so control extends beyond the initial sale into the tool's entire operating life, giving the controlling government a persistent lever (the ability to cut off servicing can disable an installed tool over time). This combination — extreme supply concentration, one-tool-gates-many-chips leverage, and lifecycle dependence — makes equipment the most effective possible chokepoint, which is precisely why it has become the central instrument of technology statecraft.

### B. The Tiered Logic of the Controls

The October 2022 rules and their successors embody a deliberate **tiered logic**: rather than banning all semiconductor trade with China (which would be economically catastrophic and diplomatically impossible), they target a precise capability frontier — advanced logic (≤16/14nm), advanced DRAM (≤18nm), and advanced NAND (≥128 layers) — chosen because these are the technologies with the greatest military and AI relevance and the ones where China most depends on foreign tools. Below that frontier (mature nodes), trade largely continues, because mature-node chips are ubiquitous, less strategically sensitive, and a market the Western OEMs value. This tiered approach aims to "yard with a high fence" — restrict the most sensitive technologies tightly while preserving broader trade — though the frontier has been progressively lowered and the fence raised with each update, and defining and policing the boundary (especially as Chinese capability advances) is an ongoing challenge.

### C. The SMIC 7nm Surprise and the Limits of Controls

The demonstration of a **7nm-class SMIC process in the Huawei Kirin 9000S** (around 2023), achieved using **DUV multi-patterning** without EUV, was a pivotal moment that revealed both the limits and the costs of the controls. It showed that a determined, well-funded manufacturer can reach 7nm-class capability without EUV — at higher cost, lower yield, and limited scalability, but enough to matter strategically and to embarrass the assumption that denying EUV would freeze China at much older nodes. At the same time, it underscored the controls' real bite: without EUV, SMIC faces severe cost and yield penalties and a hard ceiling on further scaling (5nm and below become extraordinarily difficult with DUV alone — the 5nm-class Kirin 9030 reported in late 2025 suggests the path exists, but at steep yield and cost penalties), and the subsequent tightening of DUV and servicing restrictions aimed precisely at closing the multi-patterning path. The episode crystallized the central strategic debate: do the controls *contain* China (slowing it and capping its ceiling) or merely *delay* it (while spurring a formidable domestic industry)? The honest answer is that they do both, and which effect dominates over the long run remains genuinely uncertain.

### D. Second-Order Effects on the Equipment Industry

The controls have produced a complex set of second-order effects on the SemiCap companies. In the **near term**, they triggered a *surge* in Chinese buying of mature-node and not-yet-restricted tools (as Chinese fabs stockpiled ahead of further restrictions), paradoxically boosting OEM revenue from China even as the long-term trajectory points down. In the **medium term**, they structurally reduce China-bound leading-edge revenue (a meaningful headwind for AMAT, Lam, KLA, ASML, and TEL, for whom China was 20–45% of sales). And they **accelerate Chinese domestic competition**: by guaranteeing domestic toolmakers (NAURA, AMEC, Piotech, ACM) a captive, subsidized market and by motivating intense self-sufficiency investment, the controls are helping to build the very competitors that will eventually erode the incumbents' mature-node share. There is a genuine strategic tension here: the controls protect the incumbents' leading-edge monopoly while simultaneously nurturing Chinese competition in the larger mature-node market — a trade-off whose long-run balance is hotly debated within the industry and among policymakers.

### E. The Subsidy Race and Its Risks

The parallel subsidy programs (CHIPS Act, EU Chips Act, and the Japanese, Korean, and Chinese equivalents) are reshaping *where* capacity is built, but they carry their own risks. Building fabs in the United States, Japan, and Europe is **more expensive and slower** than in the established Taiwanese and Korean clusters (higher labor and construction costs, less mature supply chains and talent pools, longer permitting) — the difficulties at TSMC's Arizona project (delays, cost and labor challenges) and the cancellation of Intel's Magdeburg plans (paused in 2024, abandoned in 2025) illustrate the friction. There is also a risk of **overcapacity**: if every major economy subsidizes domestic capacity simultaneously, the result could be a glut, particularly at mature nodes (where China is adding enormous capacity), depressing prices and returns. And the subsidies raise the industry's **cost floor**, as more production shifts to higher-cost locations for strategic rather than economic reasons. For the equipment industry, the subsidy race is a near-term demand boon (more fabs being built means more tools sold) but a source of longer-term uncertainty about capacity utilization and the geographic and economic structure of the industry.

### F. The Long-Run Strategic Picture

The deepest implication is that the semiconductor industry is **partially bifurcating** into a Western-allied ecosystem and a Chinese domestic ecosystem, with reduced but not eliminated interchange. This bifurcation is costly (duplicated capacity, lost economies of scale, higher prices) but is being driven by national-security imperatives that override pure economic logic. For SemiCap, it means navigating two increasingly separate markets, managing the structural loss of China leading-edge business while capturing subsidy-driven Western demand, and facing rising Chinese competition in mature segments. The episode has permanently established semiconductor capital equipment as an instrument of statecraft and a central arena of great-power competition — a status that, whatever the future course of the specific controls, is unlikely to reverse, and that makes geopolitical analysis an inseparable part of understanding the equipment industry's prospects.

---

## 🆕 2025–2026 Update: Latest Developments (as of November 2026)

Between mid-2025 and November 2026, equipment export controls shifted from a one-way ratchet to a **bargaining chip** in broader US–China trade negotiations. The core SME controls and FDPRs stayed in force, but new measures were alternately issued, suspended and licensed around them, while China answered with critical-mineral leverage and an accelerated localization drive.

### Export-control timeline, 2024–2026

| Date | Measure | Status (Nov 2026) |
|---|---|---|
| Dec 2024 | US package: HBM controls, ~140 Entity List additions (incl. Chinese toolmakers), FDPR expansions | In force |
| Jan → May 2025 | AI Diffusion Rule issued, then rescinded | Rescinded |
| 29 Sep 2025 | **Affiliates ("50%") Rule**: Entity List restrictions extend to ≥50%-owned subsidiaries | **Suspended** for one year from 10 Nov 2025; truce extended to 10 Jan 2027 (per Treasury Sec. Bessent, 23 Sep 2026), with a matching extension expected but not yet confirmed in the Federal Register |
| 30 Oct 2025 | Trump–Xi meeting in Busan: trade truce | Extended to 10 Jan 2027 |
| 31 Dec 2025 | **VEU revocation** for Samsung Xi'an, SK hynix Wuxi/Dalian (TSMC Nanjing similar) | Replaced by annual 2026 licenses — maintain, not expand/upgrade |
| Jan 2026 | Certain advanced AI chips (e.g., Nvidia H200-class) for China moved to case-by-case review with conditions, linked to a revenue-share arrangement | In force |
| 15 Jan 2026 | **Section 232**: 25% tariff on a narrow set of advanced chips, with exemptions for imports supporting US manufacturing | In force; broader phase-2 tariffs possible |
| Feb 2026 | BIS US$252.5M civil penalty settlement with Applied Materials (ion implanters re-exported to SMIC via Korea) | Settled |
| 2026 | Proposed **MATCH Act** (ban on DUV sales and servicing of installed tools in China) | Pending in Congress |

### What the truce did — and did not — change

- **Suspended:** the Affiliates Rule (which would have swept in hundreds of Chinese subsidiaries of listed entities) and, on China's side, the expansive October 2025 rare-earth controls and the gallium/germanium/antimony export ban to the US (paused until **27 November 2026**; licensing still applies).
- **Unchanged:** the 2022–2024 SME thresholds, the FDPRs, US-person restrictions, the Netherlands' and Japan's own controls, and the EUV denial. BIS enforcement shifted toward **SME, components and EDA** flowing to China.
- **Korean fabs in China** are now on a one-year licence cycle: they can keep running but cannot upgrade technology, a slow-motion cap on their competitiveness.

### Impact on the equipment makers

China demand for Western tools proved more resilient than feared, though its share is falling. Per company reports, Applied Materials' China share fell to 28% of revenue in FQ3 2026 (35% a year earlier), with controls cutting ~US$600M from FY2026 revenue; Applied still expects China revenue to grow in CY2026, led by 28nm foundry/logic. ASML's China share of system sales swung from 36% (Q4 2025) to 14% (Q2 2026) and ~23% (Q3 2026), with ~20% of FY2026 sales expected. The global WFE boom driven by AI (File 19) has more than offset China's decline for the Western OEMs.

### China's countermeasures and localization

- **Critical minerals:** China supplies ~80% of primary gallium and ~60% of germanium; gallium prices rose sharply from early 2025. Expiry of the mineral suspensions on 27 November 2026 is an immediate risk point.
- **Nexperia:** In October 2025 the Dutch government took control of Nexperia (owned by China's Wingtech) under the Goods Availability Act; China retaliated by blocking exports from Nexperia China, disrupting automotive supply, and the China unit switched to domestic wafers. A Chinese court froze ~¥2.14B of Nexperia assets (August 2026), and on 3 November 2026 Nexperia sued Wingtech for ~€2B in a Dutch court. The episode showed that mature-node and discrete chips can themselves become chokepoints.
- **Localization:** Domestic tools reached ~35% of equipment used in China in 2025 (industry-body figure; other methodologies put WFE localization near 25%). New capacity is reportedly required to source >50% domestic tools, with a reported 70% target for mature-node equipment by 2027. Gaps remain stark: lithography localization below 5%, and vacuum valves and RF power still ~80% foreign (reported August 2026). NAURA has 28nm-class etch in volume; AMEC has advanced etch in 14nm verification at SMIC; SMEE's 28nm ArF immersion scanner is in verification; Huawei-linked SiCarrier unveiled a broad tool portfolio in 2025.
- **EUV:** Reuters (December 2025) reported a Shenzhen prototype EUV machine, built partly by former ASML engineers using parts from older ASML systems, that generates EUV light but has not made working chips.
- **Japan:** Late-2025 rumours of Japanese photoresist shipment curbs to China were unverified, but China is pushing domestic KrF/ArF resists.

### Subsidy and industrial-policy updates

The US took a ~10% equity stake in Intel (August 2025, converting CHIPS grants), and Nvidia (US$5B) and SoftBank (US$2B) also invested. TSMC expanded its Arizona commitment to US$165B (March 2025). Intel cancelled its Magdeburg and Poland projects (July 2025). Japan continued to fund Rapidus (¥267.6B raise, February 2026), and Lam Research announced a reported ~US$1.2B investment in India for semiconductor component manufacturing (October 2026).

**What to watch (late 2026–2027)**

- Whether China extends its rare-earth and gallium/germanium suspensions beyond 27 November 2026, and whether the Affiliates Rule suspension is formally extended to match the 10 January 2027 truce date.
- Renewal terms for the Korean and Taiwanese China fabs' 2027 licences.
- Progress of the MATCH Act or any administrative move against DUV servicing in China.
- Possible phase-2 Section 232 tariffs and their exemptions for equipment imported for US fabs.
- Resolution of the Nexperia–Wingtech litigation and any new Chinese export controls on mature-node chips.
- Evidence that China's EUV prototype or SMEE's immersion scanner reaches production use.
