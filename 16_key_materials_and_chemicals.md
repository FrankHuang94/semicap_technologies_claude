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
