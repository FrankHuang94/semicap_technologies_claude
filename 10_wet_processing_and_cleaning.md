# Wet Processing, Cleaning, and Surface Preparation

Cleaning is the most frequently repeated operation in the entire fab. A leading-edge logic wafer is cleaned **hundreds of times** during its journey — after virtually every deposition, etch, implant, CMP, and lithography step — because a single particle, a trace of metallic contamination, or a residual film at the wrong moment can destroy the device. Wet processing and cleaning are therefore quietly among the highest-throughput and most yield-critical activities in manufacturing, even though they receive far less attention than lithography or etch. This file covers wet-bench chemistry, single-wafer and megasonic cleaning, supercritical and dry cleaning, photoresist strip, the vendor landscape, and the roadmap toward damage-free cleaning at the sub-2nm node.

The defining tension of modern cleaning is **removing contamination and residue without damaging the increasingly fragile structures on the wafer** — a tension that grows more acute as features shrink, aspect ratios climb, and materials become more delicate.

---

## 1. Wet-Bench Chemistry

The foundational cleaning chemistries date to the **RCA clean**, developed at RCA Laboratories in the 1960s and still the conceptual basis of wafer cleaning today:

- **SC-1 (Standard Clean 1):** a mixture of ammonium hydroxide, hydrogen peroxide, and water (NH₄OH/H₂O₂/H₂O). It removes particles and organic contamination by slightly etching the surface (lifting off particles) while the peroxide re-grows a thin protective oxide. SC-1 also removes some metals.
- **SC-2 (Standard Clean 2):** a mixture of hydrochloric acid, hydrogen peroxide, and water (HCl/H₂O₂/H₂O). It removes metallic contamination (alkali ions, and metals like iron, copper, and gold) by forming soluble complexes.
- **Piranha (SPM):** a mixture of sulfuric acid and hydrogen peroxide (H₂SO₄/H₂O₂), a powerful oxidizer used to strip organic residues and photoresist.
- **DHF (Dilute Hydrofluoric acid):** removes native and chemical oxide and is fundamental to surface preparation before critical depositions and contacts.
- **TMAH (Tetramethylammonium hydroxide):** an organic base used for both developing photoresist and anisotropically etching silicon.
- **Hot phosphoric acid (H₃PO₄):** selectively etches silicon nitride relative to oxide, important in spacer and 3D NAND word-line processing.

These chemistries are deployed in precisely controlled, temperature-regulated baths or single-wafer tools, using **semiconductor-grade chemicals** purified to parts-per-billion (ppb) levels of metallic and particulate contamination (File 16).

---

## 2. Single-Wafer Cleaning and Megasonics

Historically, cleaning was done by immersing batches of wafers in chemical baths (**wet benches**). The modern trend, driven by the need for tighter control and reduced cross-contamination, is toward **single-wafer cleaning**, in which each wafer is processed individually with precisely dispensed chemistries, spin-drying, and immediate inspection. Single-wafer tools give better uniformity and process control at the cost of throughput, and they dominate at the leading edge.

Physical assistance enhances particle removal:
- **Megasonic / ultrasonic cleaning** applies high-frequency acoustic energy to the cleaning fluid, creating microscopic agitation (and controlled cavitation) that dislodges particles from the surface — but the energy must be carefully controlled to avoid damaging fragile fine patterns.
- **Post-CMP cleaning** is a specialized, critical step: after CMP, the wafer is covered in slurry residue and particles that must be removed without scratching the freshly planarized surface, using brushes (PVA brushes), chemistry, and megasonics in combination.
- **EUV-specific surface preparation** addresses the unique residues and defect concerns of EUV patterning, including post-develop cleaning that must remove stochastic-defect-related residues without damaging the thin resist.

---

## 3. The Pattern-Collapse Problem and Supercritical CO₂

As feature aspect ratios climb and features grow taller and thinner, a new failure mode appears during the drying step of wet cleaning: **pattern collapse**. As the rinse liquid evaporates from between tall, narrow structures, **capillary forces** from the receding liquid surface pull adjacent structures together, causing them to stick and collapse — destroying the pattern. This is a major yield concern for high-aspect-ratio features such as fins, nanosheet stacks, DRAM capacitors, and 3D NAND structures.

**Supercritical CO₂ (scCO₂) drying** solves this elegantly. Carbon dioxide brought to its supercritical state has liquid-like density but **zero surface tension**, so it can be used to displace and then evaporate without any capillary force — eliminating pattern collapse. scCO₂ drying has become an important enabling technology for high-aspect-ratio cleaning at advanced nodes.

---

## 4. Dry Cleaning

Some cleaning tasks are better done without liquid at all, using gas-phase or plasma chemistries that are gentler or more selective:

- **Remote plasma cleaning** generates reactive radicals (e.g., from NF₃ or H₂) in a remote chamber and flows them to the wafer, removing residues and native oxide with low ion-bombardment damage.
- **UV-ozone cleaning** uses ultraviolet light and ozone to remove organic contamination.
- **HF vapor (anhydrous HF)** etches oxide in the gas phase, useful for native-oxide removal and certain release etches without the capillary forces of liquid HF.
- **Vapor chemistries (e.g., BCl₃ vapor)** address specific residue and surface-preparation needs.

Dry cleaning is increasingly important where liquid processes would cause damage, contamination, or pattern collapse, and it blurs the line between cleaning and etch (the gentlest selective etches and the most aggressive cleans are closely related).

---

## 5. Photoresist Strip

After each lithography-and-etch cycle, the photoresist mask must be removed completely. Resist strip uses several methods, often in combination:

- **Plasma ashing** uses an oxygen (O₂), nitrogen/hydrogen (N₂/H₂), or other plasma to oxidize and volatilize the organic resist. O₂ ashing is fast and thorough but can oxidize and damage underlying low-k dielectrics and metals, so **reducing (H₂-based)** chemistries are often used at the leading edge to protect sensitive materials.
- **Wet strip and solvent strip** dissolve resist and post-etch residues using organic solvents or chemistries like Piranha, especially where plasma would cause damage.

Resist strip must be complete (any residue causes defects) yet gentle (it must not damage the underlying device), a balance that becomes harder as dielectrics grow more fragile and metals more reactive. **Low-temperature resist strip** is increasingly required to protect temperature-sensitive structures.

---

## 6. Vendor Landscape

| Vendor | Position |
|---|---|
| **SCREEN Semiconductor Solutions (Japan)** | The **dominant single-wafer wet-clean supplier**, with a particularly strong position in Japan and globally; wet processing is core to SCREEN's identity. |
| **Tokyo Electron (TEL)** | A major clean and surface-preparation supplier, with strong single-wafer and batch clean platforms integrated with its broad process portfolio. |
| **Lam Research** | Strong in clean and surface preparation (including the former SEZ single-wafer clean business and Da Vinci platforms), tightly coupled to its etch and deposition franchises. |
| **Akrion, Modutek** | Specialist wet-process and wet-bench suppliers. |
| **MKS Instruments** | Supplies cleaning and surface-prep subsystems and chemistries (including through its acquisitions), and remote-plasma sources. |
| **Semes (Korea)** | Samsung-affiliated wet-clean and process-equipment supplier serving the Korean memory industry. |

The wet-clean market is notable for the strength of Japanese (SCREEN, TEL) and Korean (Semes) suppliers, reflecting the deep process know-how and customer relationships that cleaning — an unglamorous but yield-critical discipline — rewards.

---

## 7. Roadmap

The cleaning roadmap is defined by the imperative of **doing more cleaning, more gently, on more fragile structures**:

- **Damage-free cleaning for sub-2nm nodes:** as nanosheet stacks, inner spacers, and new channel materials become more delicate, cleaning must remove contamination and residue without etching, eroding, or collapsing these structures — driving gentler chemistries, single-wafer precision, and dry/supercritical methods.
- **EUV post-develop inspection and cleaning:** EUV's stochastic defects and thin resists demand specialized post-develop cleaning and inspection to remove defect-related residues without damaging the pattern.
- **Low-temperature resist strip and clean:** the spread of 3D integration and temperature-sensitive materials demands resist strip and cleaning at the lowest possible temperatures to protect already-formed structures.
- **New-material compatibility:** ruthenium, molybdenum, cobalt, high-k, and 2D channel materials each require cleaning chemistries that remove residue without corroding or damaging the new material — a continual co-development challenge as the materials set expands.
- **Pattern-collapse mitigation:** as aspect ratios climb further (3D NAND toward 1000 layers, taller capacitors and nanosheet stacks), supercritical and surface-tension-free drying methods become ever more essential.

Cleaning thus exemplifies a recurring theme of this database: a process that appears mundane and mature is, at the leading edge, a continually innovating, yield-critical enabler — performed hundreds of times per wafer, and increasingly the difference between a working chip and a scrapped one.

---

## Extended Analysis: Mechanisms, Single-Wafer Transition, and New-Material Cleaning

### A. The Physics and Chemistry of Particle Removal

Removing a sub-100nm particle from a wafer is harder than it sounds, because the **adhesion forces** (van der Waals, electrostatic, and capillary) that bind a tiny particle to the surface scale down more slowly than the **removal forces** available, so as particles shrink they become proportionally *harder* to remove. The classic SC-1 chemistry removes particles partly by **etching a thin layer of the underlying surface** (undercutting the particle so it lifts off) while the hydrogen peroxide re-grows a protective chemical oxide — an elegant mechanism, but one that consumes a little material each time, which becomes problematic when the structures are only atoms thick. Megasonic agitation adds a **physical** removal force (acoustic streaming and controlled cavitation), but the same energy that dislodges particles can **damage fragile fine patterns** — so the megasonic power must be carefully tuned, and at the leading edge the process window between "removes the particle" and "breaks the pattern" narrows to the point where new approaches (gentler chemistries, controlled cavitation, alternative energy sources) are required.

### B. Why Single-Wafer Cleaning Won

The historical immersion **wet bench** — dunking batches of 25–50 wafers in a sequence of chemical and rinse tanks — offered high throughput but suffered cross-contamination (every wafer shares the bath, so a contaminant from one spreads to all) and limited process control (the whole batch gets the same treatment). The modern **single-wafer cleaner** processes each wafer individually: chemicals are precisely dispensed onto the spinning wafer, reacted for a controlled time, rinsed, and the wafer is spin-dried, all with per-wafer recipe control and no shared bath. This gives better uniformity, tighter control, reduced chemical consumption per wafer (chemicals are dispensed, not maintained in large baths), and elimination of batch cross-contamination — at the cost of lower throughput, which is mitigated by multi-chamber tools running many wafers in parallel. The transition to single-wafer cleaning, led by SCREEN and TEL, parallels the broader industry shift from batch to single-wafer processing for control-critical steps, and it is essential at the leading edge where contamination and uniformity tolerances are unforgiving.

### C. Drying — The Underappreciated Critical Step

Drying is deceptively difficult and a frequent source of defects. As a rinse liquid evaporates, it can leave behind **watermarks** (residue from dissolved species), can **collapse fragile high-aspect-ratio patterns** via capillary force (Section 3), and can re-deposit particles. Advanced drying methods — **Marangoni drying** (using a surface-tension gradient created by an IPA/alcohol vapor to pull liquid cleanly off the surface) and **supercritical-CO₂ drying** (eliminating surface tension entirely) — address these problems, and the choice of drying method becomes more critical as features grow taller and thinner. The fact that an entire wafer's worth of perfect processing can be ruined in the final drying step underscores how unforgiving cleaning is.

### D. Cleaning for New Materials

Each new material introduced at the leading edge brings new cleaning challenges, because a chemistry that safely cleans one material may corrode or damage another:
- **Cobalt, ruthenium, and molybdenum interconnects** (Files 04, 15) are more chemically reactive or differently reactive than copper, requiring cleaning chemistries that remove residue and post-etch byproducts without galvanic corrosion or excessive metal loss — a significant reformulation challenge.
- **High-k and ferroelectric materials** require cleans that do not degrade the dielectric.
- **2D channel materials** (File 23) are damaged by aggressive plasma and many wet chemistries, demanding extremely gentle cleaning.
- **Low-k and ultra-low-k dielectrics** are porous and fragile, easily damaged by the plasma ashing used for resist strip — driving the shift to **reducing (H₂-based) chemistries** and gentler strip methods that protect the dielectric.

This material-specific cleaning co-development — matching the clean to each new material — is a continual, often-overlooked enabling activity, performed hand-in-hand with the deposition and etch process owners.

### E. The Cleaning Roadmap in Context

The throughline is that cleaning, performed hundreds of times per wafer, must continually become **gentler, more selective, and more material-aware** even as it remains thorough — a tension that intensifies at every node. Damage-free cleaning for fragile sub-2nm structures, EUV-specific post-develop cleaning, low-temperature resist strip for 3D-integration thermal budgets, pattern-collapse-free drying for ever-higher aspect ratios, and new-material-compatible chemistries together define a roadmap in which a process once regarded as mundane is, in fact, a continually innovating, yield-critical frontier — and one where the deep process know-how of the Japanese and Korean wet-clean leaders (SCREEN, TEL, Semes) constitutes a durable competitive moat.
