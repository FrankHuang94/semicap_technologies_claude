# Etch Technologies — Dry Etch, Wet Etch, ALE, and Selective Etch

Etch is the subtractive counterpart to deposition and lithography: it removes material, transferring the pattern defined in photoresist into the underlying films and ultimately into the silicon itself. Etch is one of the three largest wafer-fab-equipment categories, typically commanding 18–22% of WFE spending, and it is the segment in which Lam Research and Tokyo Electron, alongside Applied Materials, compete most intensely. The difficulty of etch has escalated dramatically at the leading edge: the extreme aspect ratios of 3D NAND, the angstrom-level precision required for gate-all-around channel release, and the selectivity demands of modern materials stacks have pushed etch from a comparatively mature technology into one of the most innovation-rich areas of semiconductor manufacturing. This file covers dry-etch physics, the evolution to high-density plasma, 3D NAND high-aspect-ratio etch, atomic layer etch (ALE), wet and selective etch, cryogenic etch, and the vendor and roadmap picture.

---

## 1. Dry-Etch Fundamentals

Dry (plasma) etch uses a glow-discharge plasma to generate chemically reactive species and energetic ions that, together, remove material from the wafer surface. The power of plasma etch lies in its ability to combine two mechanisms:

- **Chemical etching**, in which neutral radicals (e.g., fluorine or chlorine atoms) react with the surface to form volatile products that are pumped away. Chemical etching is generally **isotropic** (etches equally in all directions) and **selective** (different materials etch at very different rates depending on the chemistry).
- **Physical etching (sputtering)**, in which energetic ions accelerated toward the wafer by an electric field physically knock atoms off the surface. Physical etching is **anisotropic** (directional, etching downward far faster than sideways) but relatively **non-selective**.

The art of plasma etch is to balance these mechanisms — often through **ion-assisted chemical etching**, where directional ion bombardment activates the chemical reaction preferentially at the bottom of a feature, producing the vertical, anisotropic profiles required to transfer a pattern faithfully without undercutting. A key enabling phenomenon is **sidewall passivation**: reaction byproducts or deliberately added polymer-forming gases deposit a protective film on the feature sidewalls, preventing lateral etch while the ion-bombarded bottom continues to etch downward.

Several plasma-source architectures are used, distinguished by how they generate and control the plasma:

- **CCP (Capacitively Coupled Plasma):** RF power is applied across two parallel-plate electrodes. CCP excels at **dielectric etch** (oxide, nitride, low-k) because it can sustain the high ion energies needed to etch these robust materials, and dual-frequency CCP allows partial decoupling of ion energy and ion flux.
- **ICP (Inductively Coupled Plasma):** RF power is coupled through a coil to generate a high-density plasma at low pressure, with a separate bias controlling ion energy. ICP gives more independent control of ion **flux** and **energy** and is favored for **conductor etch** (silicon, metal gates, polysilicon) and many advanced applications.
- **ECR (Electron Cyclotron Resonance):** uses microwave power and a magnetic field to generate very high-density plasma; historically important, now less common than ICP.

The two governing knobs — **ion energy** (which controls anisotropy, sputter component, and damage) and **ion flux** (which controls etch rate) — must be tuned together with chemistry, pressure, temperature, and pulsing to achieve the required profile, selectivity, uniformity, and minimal damage.

---

## 2. From RIE to High-Density Plasma

Early plasma etch used **Reactive Ion Etching (RIE)** — a moderate-density CCP process adequate for the relatively relaxed geometries of older nodes. As features shrank and aspect ratios climbed, the industry moved to **high-density plasma** sources (ICP, ECR) that could deliver high etch rates at the low pressures needed for good anisotropy and uniformity. The key applications diverged by material class:

- **Conductor etch** — patterning gates (polysilicon, metal-gate stacks), and metals such as tungsten, titanium nitride, and tantalum nitride — typically uses chlorine- and bromine-based chemistries (Cl₂, HBr, BCl₃) in ICP tools, where selectivity to the underlying gate dielectric and precise CD control are paramount.
- **Dielectric etch** — etching contacts, vias, and trenches in SiO₂, Si₃N₄, and low-k materials — uses fluorocarbon chemistries (CF₄, CHF₃, C₄F₈, C₄F₆) in CCP tools, where the fluorocarbon polymer simultaneously etches the dielectric and passivates sidewalls. The challenge is achieving high selectivity to underlying stop layers and avoiding damage to fragile low-k films.

Modern etch chambers add sophisticated control layers: **multi-zone electrostatic chucks** with independent temperature control across the wafer to tune etch uniformity, **pulsed RF** (pulsing the source and/or bias power) to control radical-to-ion ratios and reduce charging damage and aspect-ratio-dependent etching, and advanced endpoint detection by optical emission spectroscopy.

---

## 3. 3D NAND High-Aspect-Ratio (HAR) Etch

If any single application embodies the modern etch challenge, it is the **channel-hole and slit etch in 3D NAND**. 3D NAND builds memory vertically by stacking alternating dielectric layers (an "ONON" or "OPOP" stack of oxide and nitride, or oxide and polysilicon) — and the layer count has exploded from 24 in early generations to 96, 128, 176, 232, and now toward 300+ layers, with string-stacking (etching two stacks and joining them) used to reach the highest counts.

Etching the channel holes through such a stack is one of the most extreme processes in all of manufacturing:

- **Aspect ratios exceed 60:1** and are pushing toward 100:1 — holes a few tens of nanometers wide and many microns deep, etched through hundreds of alternating layers in a single continuous process.
- **Profile control** is brutal: the etch must maintain a straight, uniform-diameter hole from top to bottom. Common defects include **bowing** (the hole bulging in the middle), **twisting**, **tapering** (the hole narrowing with depth), and incomplete etch at the bottom. Even tiny CD variations multiply into device failures across billions of holes.
- **CD loading and aspect-ratio-dependent etching (ARDE)** cause holes to etch at different rates depending on their local density and depth, demanding exquisite chemistry and plasma control.
- The etch relies on powerful **cryogenic or high-energy fluorocarbon CCP processes** with carefully engineered passivation and ion energy (sometimes exceeding 10 keV), and increasingly on **cryogenic etch** (see below) to improve etch rate and profile while reducing mask consumption.

3D NAND HAR etch is a primary battleground between Lam Research, TEL, and Applied Materials, and it consumes a disproportionate share of memory etch capacity. The accompanying **staircase etch** — forming the stepped contact landing structure by repeatedly etching and trimming a resist mask — is another NAND-specific etch specialty.

---

## 4. Atomic Layer Etch (ALE)

Just as ALD enables atomic-scale *addition* of material, **Atomic Layer Etch (ALE)** enables atomic-scale *removal* — etching one monolayer at a time through a sequence of self-limiting steps. ALE is essential where the etch must stop with near-atomic precision and minimal damage, which is increasingly the case at GAA and below.

A typical **plasma ALE** cycle alternates: (1) a **modification** step, in which a reactant (e.g., chlorine) chemisorbs onto and modifies the top atomic layer of the surface in a self-limiting manner; (2) a purge; (3) a **removal** step, in which low-energy ion bombardment (just energetic enough to remove the modified layer but not the underlying unmodified material) sputters away precisely that one modified layer; (4) another purge. Because each step is self-limiting, ALE delivers exceptional **uniformity, atomic-scale depth control, low damage, and high selectivity** — at the cost of throughput, since many cycles are needed.

**Thermal ALE** uses sequential gas-phase reactions (e.g., fluorination followed by a ligand-exchange reaction) with no plasma at all, giving isotropic, ultra-gentle, conformal etching valuable for releasing nanosheet channels and trimming three-dimensional structures.

Key ALE applications:
- **Fin and nanosheet trimming**, adjusting critical dimensions with angstrom precision.
- **Spacer pull-back** and **inner-spacer** processing in GAA flows.
- **GAA nanosheet channel release**, where the sacrificial SiGe must be removed from between the silicon channels with extreme selectivity and without damaging the delicate suspended sheets.
- **EUV resist and stochastic-defect mitigation**, using gentle ALE-like trimming and smoothing.

ALE adoption has grown rapidly because it solves problems that conventional continuous etch cannot: as device dimensions approach the size of the etch-rate variation itself, only self-limiting, atomically controlled removal preserves yield.

---

## 5. Wet Etch and Cleaning-Adjacent Etch

Despite the dominance of plasma etch, **wet (chemical) etch** remains indispensable for specific tasks, valued for its high selectivity, low damage, and throughput:

- **Dilute hydrofluoric acid (DHF)** etches silicon dioxide and removes native oxide, and is fundamental to surface preparation.
- **Hot phosphoric acid (H₃PO₄, ~160°C)** selectively etches silicon nitride relative to oxide — critical in spacer and 3D NAND processing (e.g., removing nitride to form word-line recesses).
- **KOH and TMAH** etch silicon anisotropically along crystal planes, used in MEMS, wafer thinning, and some advanced applications.
- **SC-1 and SC-2 (RCA chemistries)** straddle the line between cleaning and light etching, removing particles and metallic contamination.

Wet etch is increasingly performed in **single-wafer** tools (rather than immersion baths) for better control and reduced cross-contamination, and is tightly integrated with cleaning (File 10).

---

## 6. Selective Etch — The GAA Enabler

Selective etch — removing one material while leaving an adjacent, chemically similar material untouched — has become a defining capability at the leading edge, above all for **GAA channel release**. In a GAA flow, the silicon nanosheets are separated by sacrificial **SiGe** layers that must be etched away entirely, leaving the silicon sheets suspended and undamaged. This demands **Si-versus-SiGe selectivity of 30:1 to over 100:1**, achieved through carefully tuned gas-phase or wet chemistries (e.g., HF/H₂O₂-based, or dry chlorine/fluorine-based isotropic etches) that exploit the chemical difference between silicon and silicon-germanium.

The closely related **inner-spacer process** requires *laterally* recessing the SiGe by a precise, controlled amount relative to the silicon, then filling the resulting cavity with a low-k dielectric — a sequence that combines highly selective lateral etch with conformal ALD fill. Selective etch is also central to **high-selectivity dielectric etch** (stopping precisely on thin etch-stop layers) and to the self-aligned schemes increasingly used to relax overlay requirements.

---

## 7. Cryogenic Etch

**Cryogenic etch** cools the wafer to very low temperatures (often −60°C to below −100°C) during plasma etch. The cold temperature enhances sidewall passivation and changes reaction kinetics, dramatically improving etch rate, profile control, and mask selectivity. Originally developed for **deep silicon etch** in MEMS and **through-silicon vias (TSVs)**, cryogenic etch has become important for **3D NAND HAR channel etch**, where it enables faster, straighter, higher-aspect-ratio holes with less mask consumption — a key lever as NAND layer counts climb past 300. Cryogenic capability is now a competitive differentiator among the leading etch vendors.

---

## 8. EUV-Compatible Etch

The advent of EUV lithography created new etch requirements. EUV resists are **thin** (often <30nm) and prone to **stochastic defects** (random bridges and breaks). Etch must therefore transfer EUV patterns faithfully from a thin, rough, defect-prone resist into the underlying film, often using a **hardmask** (e.g., spin-on carbon plus a metal-containing hardmask) to provide etch resistance. Gentle **resist-trim** and **smoothing** etches reduce line-edge roughness inherited from the resist, and careful etch process design helps **mitigate stochastic defects** by not amplifying small resist imperfections. The tight coupling between EUV patterning and etch has made co-optimization of the litho-etch module a central activity at the leading edge.

---

## 9. Vendor Landscape

| Vendor | Etch position |
|---|---|
| **Lam Research** | The **etch market leader**, with dominant CCP (Flex/Exelan, Kiyo) and ICP platforms; especially strong in dielectric HAR etch (3D NAND) and conductor etch; etch is the core of Lam's business and a deep technology moat. |
| **Tokyo Electron (TEL)** | The number-two etch supplier and Lam's principal rival, with strong dielectric and conductor etch platforms (Tactras, Telius); also dominant in coat/develop, enabling integrated litho-etch offerings. |
| **Applied Materials (AMAT)** | A major etch player (Centura, Sym3, Producer Selectra for selective etch), with particular strength in selective and ALE for GAA channel release, leveraging its integrated-materials-solutions strategy. |
| **Hitachi High-Tech** | Strong in conductor and specialty etch with advanced control, and a leader in etch-related metrology (CD-SEM). |
| **SPTS (KLA company)** | Specialty and advanced-packaging etch (DRIE/Bosch process, MEMS, TSV). |
| **Mattson Technology (now Beijing E-Town/APS)** | Strip, dry etch, and RTP; now part of a China-linked group, relevant to localization. |
| **NAURA, AMEC (China)** | Fast-rising Chinese etch suppliers; AMEC in particular has credible CCP/ICP etch tools used by domestic and some international fabs, and is a focal point of China's equipment-localization effort. |

---

## 10. Patent Landscape

Etch IP is concentrated around **plasma-source design** (CCP and ICP reactor architectures, dual-frequency and pulsed-RF schemes), **electrostatic chuck and temperature control**, and **process chemistries**. Lam Research holds a deep portfolio in CCP/ICP reactor and dielectric-etch technology; Applied Materials has significant **ALE and selective-etch** IP; TEL holds strong etch and integrated litho-etch patents. The newer frontiers — atomic layer etch, cryogenic etch, and selective isotropic etch for channel release — are areas of active patent filing, as the vendors race to lock in the process IP that will define GAA and CFET manufacturing.

---

## 11. Roadmap

The etch roadmap is driven by the architecture transitions:

- **GAA nanosheet etch:** ever-higher Si/SiGe selectivity for channel release, precise inner-spacer lateral recess, and damage-free isotropic etch of suspended sheets — making selective and atomic-layer etch central.
- **CFET patterning:** dual-tier stacks roughly double the inner-spacer and channel-release complexity and demand new self-aligned isolation etches between the n and p tiers, plus high-aspect-ratio inter-tier via etch.
- **Backside etch for BSPDN:** etching nano-scale through-silicon vias from the wafer backside through ultra-thin (<5μm) silicon at aspect ratios above 40:1, aligned to frontside transistors — a wholly new etch challenge created by backside power delivery.
- **3D NAND beyond 1000 layers:** as string-stacking pushes total layer counts toward and past 1000, channel-hole etch faces ever-more-extreme aspect ratios, demanding cryogenic etch, new high-energy plasma sources, novel hardmasks, and tighter profile control to keep billions of holes uniform from top to bottom.
- **Atomic-scale everything:** across logic and memory, the common thread is the migration from continuous etch toward **self-limiting, atomically controlled removal**, because at these dimensions the natural variation of a conventional etch is no longer small compared with the features being made.

Etch has thus evolved from a mature, almost commoditized step into one of the most demanding and rapidly innovating areas of semiconductor equipment — the indispensable subtractive complement to the deposition and lithography that build the chip up.
