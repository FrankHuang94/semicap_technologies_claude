# Key Materials, Gases, and Chemicals in Semiconductor Manufacturing

Semiconductor manufacturing is as much a materials science as an equipment discipline. Every process step consumes precisely formulated materials — ultra-pure silicon, photomasks, photoresists, slurries, dozens of process gases, high-purity wet chemicals, and an ever-expanding palette of dielectrics, metals, and channel materials. These consumables are not commodities: they are co-engineered with the process to parts-per-billion (and increasingly parts-per-trillion) purity, and the supply of several is as concentrated and strategically sensitive as the equipment itself. This file surveys the key materials classes, their roles, and the suppliers that dominate them.

A recurring theme is **purity and its supply-chain implications**. A single particle or a trace metallic contaminant at the wrong step can kill a die, so semiconductor-grade materials are purified to extraordinary levels, made by a small number of specialized suppliers (heavily concentrated in Japan, with growing positions in Europe, the U.S., and Korea), and qualified through long, exacting processes that make supplier switching difficult and supply disruptions dangerous.

---

## 1. Silicon and Substrates

The starting material is **electronic-grade polysilicon**, purified to 9N–11N (99.9999999%+). It is grown into single-crystal ingots by the **Czochralski (CZ)** method (the mainstream) or **float-zone (FZ)** method (higher purity/resistivity, used for power and detectors), then sliced, lapped, and polished into wafers (File 02). **Epitaxial wafers** add a defect-free, precisely doped epi layer; **SOI (silicon-on-insulator)** wafers — made by **Soitec's Smart Cut** layer-transfer process — provide a thin silicon device layer over a buried oxide for FD-SOI, RF-SOI, and photonics. The leading wafer suppliers are **Shin-Etsu and SUMCO (Japan, together a majority of the market), GlobalWafers (Taiwan), Siltronic (Germany), and SK Siltron (Korea)**, with **Soitec** dominant in SOI. Silicon-wafer supply is highly concentrated and a periodic source of tightness.

---

## 2. Photomasks and Mask Blanks

The **photomask (reticle)** carries the circuit pattern that lithography projects onto the wafer. DUV masks use a **fused-silica substrate** with a patterned **chrome or MoSi (molybdenum silicide) absorber**. **EUV mask blanks** are far more complex: a low-thermal-expansion substrate coated with a **40–50-pair Mo/Si multilayer mirror** and a **TaN/TaBN absorber**, requiring defect densities below ~0.003/cm². EUV blanks are supplied by only **three companies worldwide — AGC, Shin-Etsu, and Hoya** — making blank supply a genuine bottleneck. Mask writing is done by **e-beam mask writers** (IMS Nanofabrication, NuFlare), and masks are inspected and (for EUV) actinically inspected (ZEISS). The mask shop is a critical, capital-intensive, and concentrated link in the chain.

---

## 3. Photoresists

Photoresist is the light-sensitive polymer that records the lithographic image — one of the most performance-critical and tightly co-engineered materials in the fab:

- **ArF (193nm) CAR (Chemically Amplified Resist):** the workhorse for immersion lithography, using a photoacid generator to catalyze a solubility change.
- **EUV CAR:** adapted chemically amplified resists for 13.5nm, with carefully tuned **quencher chemistry** to control acid diffusion and limit stochastic blur.
- **Metal-oxide EUV resist (MOR):** **tin-oxide-based** resists (pioneered by **Inpria**, acquired by **JSR** in 2021) that absorb EUV directly in the metal atoms, offering higher resolution and lower line-edge roughness at the cost of sensitivity — increasingly important for High-NA EUV.
- **Non-CAR / molecular-glass resists:** small-molecule resists with inherently lower roughness, in research.

Photoresist is dominated by Japanese suppliers — **JSR, Tokyo Ohka Kogyo (TOK), Shin-Etsu, Fujifilm, and Sumitomo** — plus **Merck/EMD (Germany)** and **DuPont**. The concentration of advanced EUV resist supply in a handful of (mostly Japanese) firms is a notable supply-chain sensitivity, underscored when Japan's 2019 export restrictions on resist precursors to Korea caused alarm.

---

## 4. CMP Slurries and Pads

CMP consumables (File 06) are precisely formulated suspensions and polyurethane pads:
- **Slurries:** abrasive nanoparticles (**fumed silica, ceria/CeO₂, or alumina**) in chemistries tuned with oxidizers (**H₂O₂**), pH buffers, corrosion inhibitors, and surfactants, each formulation matched to a specific material (oxide, tungsten, copper, cobalt). Suppliers: **Entegris (via CMC/Cabot Microelectronics), Fujimi, Versum/Merck, Resonac/Hitachi, Dow/DuPont**.
- **Pads:** engineered polyurethane structures (the classic **IC1000**), dominated by **DuPont** and **3M/Cabot**.

These recurring, process-critical consumables generate sticky, high-margin revenue and are deeply co-engineered with the process.

---

## 5. Process Gases

Modern fabs consume dozens of **process gases**, broadly grouped by function:

- **Etch gases:** chlorine and bromine species for conductor etch (**Cl₂, HBr, BCl₃**), and fluorocarbons for dielectric etch (**CF₄, C₄F₈, C₄F₆, CHF₃, SF₆, NF₃**), plus **O₂** for ashing and passivation tuning.
- **CVD/ALD precursors:** silicon sources (**silane SiH₄, dichlorosilane DCS, TEOS**), metal precursors (**WF₆** for tungsten, **TiCl₄** and **TDMAT** for titanium nitride, **TDMAHf/TEMAHf** for HfO₂, **TEMAZ** for ZrO₂, **TMA (trimethylaluminum)** for Al₂O₃, and Ru/Mo/Co precursors for the new metals).
- **Dopant and specialty gases:** **GeH₄ (germane), AsH₃ (arsine), PH₃ (phosphine), B₂H₆ (diborane)** for doping and epitaxy; **NH₃ (ammonia)** for nitrides.
- **Carrier and purge gases:** **H₂, N₂, Ar, He** in enormous volumes.

Many of these are **toxic, pyrophoric, or corrosive** (arsine, phosphine, diborane, silane), demanding sophisticated gas-handling, abatement, and safety systems (File 20, File 24). Several — notably **NF₃, SF₆, and the perfluorocarbons** — are potent greenhouse gases, driving emissions-reduction efforts (File 21). The major industrial-gas suppliers are **Air Liquide, Linde, Air Products, Taiyo Nippon Sanso (Nippon Sanso/Matheson), and Merck/Versum**, with the specialty-precursor business especially concentrated and high-value.

---

## 6. High-Purity Wet Chemicals

Wet processing and cleaning (File 10) consume large volumes of **semiconductor-grade wet chemicals** purified to parts-per-billion (and for the most critical, parts-per-trillion) levels of metallic and particulate contamination: **sulfuric acid (H₂SO₄), hydrofluoric acid (HF), hydrogen peroxide (H₂O₂), ammonium hydroxide (NH₄OH), hydrochloric acid (HCl), phosphoric acid (H₃PO₄), isopropyl alcohol (IPA), and TMAH**. The purity requirement is extreme — a part-per-billion of a metal like iron or copper in an acid can contaminate the wafer and kill devices. Suppliers include **Kanto Chemical, Stella Chemifa (a dominant HF supplier), Mitsubishi Chemical, BASF, Honeywell, and Entegris**, with HF supply notably concentrated in Japan.

---

## 7. Dielectrics — Low-k, High-k, and Ferroelectric

- **Low-k and ultra-low-k dielectrics:** **carbon-doped oxide (SiOCH)** for BEOL insulation (k≈2.4–2.7), **porous ultra-low-k** (k≈2.0–2.2), and **air gaps** (k≈1.0) for the lowest capacitance — balancing capacitance reduction against mechanical fragility (File 02, File 15).
- **High-k dielectrics:** **HfO₂ (hafnium oxide)** and **ZrO₂ (zirconium oxide)** for gate and capacitor dielectrics, with **Al₂O₃ and La₂O₃** as interface and tuning layers (File 04).
- **Ferroelectrics:** **HfZrO₂ (HZO)** — doped hafnium oxide that is CMOS-compatible and ferroelectric — enabling **FeFET and FeRAM** non-volatile memory and negative-capacitance research (File 23).

These deposited dielectric materials are delivered chiefly as **ALD/CVD precursors** (the metal-organic compounds in Section 5) rather than as bulk films.

---

## 8. Barrier Metals and the New Interconnect Materials

- **Barrier/liner metals:** **TaN/Ta** (the classic copper barrier), **TiN, WN, and Co/Ru liners** — thin layers that stop metal diffusion and promote adhesion.
- **New BEOL metals:** as copper reaches its limits, **ruthenium (Ru), molybdenum (Mo), and cobalt (Co)** are entering production as barrier-less or thin-barrier interconnect metals at the tightest pitches (File 04, File 15) — one of the most significant materials transitions in BEOL since copper itself.

These metals are deposited from specialized precursors (for ALD/CVD) or targets (for PVD), again concentrating value in the precursor and target suppliers.

---

## 9. 2D and Emerging Channel Materials

The frontier of channel materials (Files 15, 23) brings entirely new substances into the fab:
- **MoS₂, WS₂, WSe₂** — transition-metal dichalcogenides for ultra-thin 2D channels, deposited by MOCVD/ALD, with **grain size, defect density (sulfur vacancies), and 300mm uniformity** as the central materials challenges.
- **hBN (hexagonal boron nitride)** — a 2D insulator for gate dielectrics and substrates.
- **Carbon nanotubes** — requiring >99.99% semiconducting purity and alignment.

These materials are at the research stage, with the materials-purity and uniformity problems (not the devices) being the primary barrier to manufacturing.

---

## 10. The Materials Supplier Landscape

The materials supply chain is dominated by a concentrated set of specialists:

| Material class | Leading suppliers |
|---|---|
| Silicon wafers | Shin-Etsu, SUMCO, GlobalWafers, Siltronic, SK Siltron; Soitec (SOI) |
| Photoresist | JSR, Tokyo Ohka (TOK), Shin-Etsu, Fujifilm, Sumitomo, Merck/EMD, DuPont |
| EUV mask blanks | AGC, Shin-Etsu, Hoya |
| CMP slurries/pads | Entegris (CMC), Fujimi, Versum/Merck, Resonac, DuPont, 3M |
| Process gases | Air Liquide, Linde, Air Products, Nippon Sanso/Matheson, Merck/Versum |
| Wet chemicals | Stella Chemifa, Kanto, Mitsubishi Chemical, BASF, Honeywell, Entegris |
| ALD/CVD precursors | Merck/EMD, Entegris, Air Liquide, ADEKA, Tri Chemical, DNF |
| Filtration/purification/carriers | Entegris, Pall (Danaher), Swagelok |

Two strategic features stand out. First, **Japanese dominance**: Japan supplies a disproportionate share of the most critical materials (photoresist, silicon wafers, EUV blanks, HF, many specialty chemicals and gases), which is why Japan's 2019 export controls on resist precursors and HF to Korea sent shockwaves through the industry and why materials feature prominently in geopolitical strategy (File 18). Second, **the depth of co-engineering**: advanced materials are developed hand-in-hand with the specific process over years, qualified through exacting procedures, and difficult to second-source — creating sticky, high-margin franchises and real supply-chain vulnerability.

Materials are thus the quiet foundation of the entire industry: less visible than the multi-million-dollar tools, but equally indispensable, equally concentrated, and equally strategic. As the materials set expands — new EUV resists, new interconnect metals, ferroelectrics, 2D channels — the materials suppliers become ever more central to enabling each new node, and the security of their supply ever more a matter of national strategy.

---

## Extended Analysis: Purity, Concentration, and Strategic Vulnerability

### A. Why Purity Is the Defining Requirement

The single property that distinguishes semiconductor materials from their industrial counterparts is **purity**. The same hydrofluoric acid used industrially must, for semiconductor use, be purified to **parts-per-billion (and for the most critical applications, parts-per-trillion)** levels of metallic and particulate contamination, because a single part-per-billion of a metal like iron, copper, or sodium can diffuse into the silicon and create electrically active defects that kill devices. The same logic applies across the materials set: silicon must be 9N–11N pure, gases must be contaminant-free to ppb levels, photoresist must be free of metal ions and particles, and slurries must have tightly controlled particle-size distributions. Achieving and *verifying* these purity levels requires specialized purification, packaging (to avoid contamination in transit), handling, and metrology — which is why semiconductor materials are made by a small number of specialized suppliers with deep expertise, and why qualifying a new material or a new supplier is a long, exacting process that makes the supply chain sticky and switching costs high.

### B. The Concentration Problem

The semiconductor materials supply chain is remarkably **concentrated**, often more so than the equipment industry, and frequently in ways that create strategic vulnerability:
- **EUV mask blanks** come from just **three** suppliers (AGC, Shin-Etsu, Hoya).
- **Silicon wafers** are dominated by five firms, led by Shin-Etsu and SUMCO (both Japanese), who together hold a majority share.
- **Advanced photoresist** (especially EUV resist) is concentrated in a handful of mostly Japanese firms (JSR, TOK, Shin-Etsu, Fujifilm), plus Merck and DuPont.
- **High-purity HF** is concentrated in Japanese suppliers (notably Stella Chemifa).
- **Specialty precursors** for ALD/CVD come from a small set of specialized chemical makers.

This concentration means that disruption to a single supplier, region, or material can ripple through the entire industry — a risk made vivid by Japan's **2019 export restrictions** on photoresist precursors and HF to Korea, which threatened Samsung and SK Hynix and demonstrated that materials, not just equipment, are a geopolitical chokepoint (File 18). It was also underscored by the **neon** shortage from the war in Ukraine (Ukraine had supplied much of the world's semiconductor-grade neon, used in DUV lasers).

### C. The Japanese Materials Dominance

A striking structural feature is the **dominance of Japanese suppliers** across the most critical materials — silicon wafers, photoresist, EUV blanks, HF and many specialty chemicals and gases, CMP slurries, and ALD precursors. This dominance reflects decades of accumulated expertise, deep co-engineering with customers, and the exacting quality culture that materials purity rewards. It also gives Japan significant strategic leverage in the semiconductor supply chain — leverage that became explicit in the 2019 Korea dispute and that factors into the broader geopolitics of the industry (File 18). For the rest of the world, the concentration of critical materials in Japan (and a few other locations) is a supply-chain vulnerability that the subsidy programs (CHIPS Act, EU Chips Act) and "de-risking" efforts increasingly seek to address through diversification — though the depth of expertise required makes rapid diversification difficult.

### D. The Expanding Materials Set

A defining trend is that the **materials set is expanding** with each node, as new device architectures and the move to three dimensions bring new substances into the fab: new EUV resists (metal-oxide), new interconnect metals (Ru, Mo, Co), ferroelectric HfO₂ (HZO), 2D channel materials (MoS₂, WSe₂), new high-k and channel materials, and the specialty materials of advanced packaging (mold compounds, RDL dielectrics, bonding interfaces). Each new material requires a new precursor or formulation, a new purification and qualification effort, and often a new supplier relationship — expanding the materials suppliers' role and making them ever more central to enabling each new node. As the device set grows more materially diverse (File 23), the materials suppliers become, alongside the equipment makers, indispensable partners in every technology transition — and the security and resilience of their concentrated, high-purity, deeply co-engineered supply chains becomes ever more a matter of strategic and national concern.

---

## Further Analysis: The Precursor Economy and the Future Materials Set

### A. The Hidden World of Precursor Chemistry

Behind every ALD and CVD film lies a **precursor** — a specially designed metal-organic or inorganic molecule that delivers the desired atoms to the wafer surface under controlled conditions. Precursor chemistry is a deep, high-value, and often-overlooked discipline at the heart of deposition. A good precursor must be **volatile** (deliver as a vapor), **thermally stable** (not decompose prematurely), **reactive** (chemisorb cleanly and react with the co-reactant), and **clean** (leave no carbon, halogen, or metallic residue). Designing molecules that satisfy all these constraints for each new film — HfO₂, ZrO₂, TiN, the Ru and Mo interconnect metals, the MoS₂ 2D channels — is a specialized chemical art, and the precursor suppliers (Merck/EMD, Entegris, Air Liquide, ADEKA, Tri Chemical, DNF, and others) hold valuable IP and deep co-engineering relationships with the deposition-tool makers and fabs. As each new node introduces new materials, the precursor that enables a given film can be as much a gating factor as the deposition tool itself, and the development of a new precursor (and its purification to the required levels and qualification in production) is often a multi-year effort that runs in parallel with the equipment development. The precursor economy is thus a hidden but essential layer of the materials supply chain, where chemistry, IP, and process know-how combine to enable each new film the leading edge requires.

### B. Materials as the Pacing Factor for New Devices

A recurring theme across this database is that, for many frontier devices, the **materials — not the device concept — are the pacing factor**. 2D-channel transistors are limited by the difficulty of growing wafer-scale, low-defect MoS₂ (a materials problem), not by the device physics. Ferroelectric memory depends on controlling the ferroelectric phase of HZO (a materials problem). New interconnect depends on developing Ru/Mo deposition and their precursors. Carbon-nanotube transistors are limited by CNT purity and alignment (materials problems). Ultra-wide-bandgap power devices are limited by Ga₂O₃ and diamond substrate growth. In each case, the device has been demonstrated, but bringing it to manufacturing waits on solving the materials challenge — growing, purifying, depositing, or integrating the material at scale with the required quality and uniformity. This places the materials suppliers, alongside the equipment makers, at the center of enabling each new device generation, and it means that the future roadmap (Files 15, 23) is as much a materials roadmap as a device or equipment roadmap. The expanding materials set — new resists, new metals, ferroelectrics, 2D channels, ultra-wide-bandgap semiconductors, packaging materials — is one of the defining features of the post-dimensional-scaling era, and it makes materials science and supply an ever-more-central determinant of progress.

### C. Supply Resilience as Strategic Imperative

The concentration and criticality of the materials supply chain make **supply resilience** a strategic imperative that the geopolitical era has thrown into sharp relief. The dependence on three EUV-blank suppliers, on heavily Japanese photoresist and HF supply, on specific precursor and specialty-gas sources, and on materials like neon (the Ukraine disruption) and rare earths represents a set of vulnerabilities that a single disruption — a natural disaster, a trade dispute, a conflict — could turn into an industry-wide crisis. The 2019 Japan-Korea materials dispute and the neon shortage were warnings of how a materials disruption can ripple through the entire chip industry. In response, the subsidy programs (CHIPS Act, EU Chips Act) increasingly fund materials capacity and diversification, manufacturers pursue dual-sourcing and inventory buffers, and the resilience of the materials supply chain has become a matter of corporate and national strategy alongside the equipment supply chain. Yet the depth of expertise and the exacting qualification required make rapid diversification difficult — a fab cannot simply switch to an unqualified resist or precursor — so materials resilience remains a hard, long-term challenge. The quiet, concentrated, high-purity, deeply co-engineered world of semiconductor materials is, in the end, as strategically critical and as vulnerable as the multi-million-dollar tools it supplies, and its security is inseparable from the security of the entire semiconductor enterprise.
