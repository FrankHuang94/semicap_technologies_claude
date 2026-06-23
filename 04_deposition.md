# Thin Film Deposition — CVD, ALD, PVD, Epitaxy

Deposition is the family of processes that *add* material to the wafer — building up the dielectrics, conductors, barriers, and channels from which transistors and interconnects are constructed. Together with etch and lithography, deposition is one of the three pillars of wafer processing, and it represents roughly a fifth to a quarter of total wafer-fab-equipment spending. A modern logic chip contains scores of distinct deposited films, ranging from sub-nanometer ALD high-k gate dielectrics to micron-thick metallization, each requiring precise control of thickness, composition, conformality, stress, and purity. This file surveys the major deposition families — CVD, ALD, PVD, and epitaxy — together with the emerging materials, the vendor landscape, the patent picture, and the node-by-node deposition challenges driving the transition from FinFET to GAA to CFET.

---

## 1. Chemical Vapor Deposition (CVD)

In chemical vapor deposition, gaseous precursors react at or near the wafer surface to deposit a solid film, with volatile byproducts pumped away. CVD is the most versatile and widely used deposition method, and it exists in numerous variants distinguished by pressure, energy source, and temperature, each trading off film quality, conformality, throughput, and thermal budget.

**LPCVD (Low-Pressure CVD)** operates at reduced pressure (typically 0.1–1 Torr) and elevated temperature (600–800°C), often in large batch furnaces processing 50–150 wafers at once. The low pressure improves uniformity and conformality by increasing the mean free path of reactants. LPCVD produces high-quality polysilicon (for gates and 3D NAND channels), silicon nitride (Si₃N₄, for hard masks and spacers), and TEOS-based silicon dioxide. Its high temperature limits it to early FEOL steps before metal is present.

**APCVD (Atmospheric Pressure CVD)** runs at atmospheric pressure for high throughput on relatively non-critical films (e.g., doped oxides, passivation). Conformality and uniformity are poorer, so its modern role is limited.

**PECVD (Plasma-Enhanced CVD)** uses an RF plasma to supply reaction energy, enabling deposition at much lower temperatures (200–400°C). This makes PECVD indispensable for **BEOL** processing, where the underlying copper interconnects impose a strict thermal budget (typically ≤400°C). PECVD deposits the bulk of interlayer dielectrics (SiO₂, SiN, SiCN, SiOCH low-k), passivation layers, and hardmasks. The plasma allows tuning of film stress, density, and composition.

**HDP-CVD (High-Density Plasma CVD)** combines deposition and simultaneous sputter-etch (via biased high-density plasma) to achieve **void-free gap-fill** in high-aspect-ratio trenches — historically the workhorse for STI and pre-metal dielectric fill. As aspect ratios climbed, HDP-CVD increasingly ceded ground to flowable CVD and ALD.

**Flowable CVD (FCVD)** deposits a flowable, liquid-like film that wicks into the narrowest gaps before being cured into solid oxide — solving the void-free gap-fill problem for the extreme aspect ratios of advanced STI and the gaps between fins and nanosheets.

The central trade-off across all CVD variants is **thermal budget versus film quality**: hotter processes generally yield denser, purer films but cannot be used after temperature-sensitive structures (metal, strained junctions) are in place. This constraint becomes more acute at every node and is a primary driver of the shift toward lower-temperature ALD and plasma-assisted methods.

---

## 2. Atomic Layer Deposition (ALD)

Atomic layer deposition is arguably the most important deposition advance of the last two decades and the enabling technology for high-k/metal gate, FinFET, GAA, 3D NAND, and DRAM capacitors. ALD builds films **one atomic layer at a time** through a sequence of **self-limiting surface reactions**.

A single ALD cycle consists of: (1) a pulse of precursor A, which chemisorbs on the surface until all reactive sites are saturated and then stops (self-limiting); (2) a purge to remove excess A; (3) a pulse of co-reactant B, which reacts with the chemisorbed A to form a sub-monolayer of the desired film and regenerate surface sites; (4) another purge. Each cycle adds a precisely fixed, sub-monolayer increment, so total thickness is controlled simply by counting cycles. Because the reactions are surface-saturating rather than flux-limited, ALD achieves **near-perfect conformality** even in structures with aspect ratios exceeding 50:1 — exactly what is needed to coat the sidewalls of deep DRAM capacitors, 3D NAND channels, and the wrapped channels of GAA nanosheets.

**Thermal ALD** relies purely on temperature to drive the surface chemistry, giving the best conformality and lowest damage. **Plasma-Enhanced ALD (PEALD)** uses a plasma co-reactant (e.g., oxygen or nitrogen radicals) to enable lower-temperature deposition and access films difficult to form thermally, at some cost to conformality in the deepest features.

Key ALD films and their roles:
- **HfO₂ and ZrO₂** — high-k gate dielectrics (logic) and capacitor dielectrics (DRAM, typically a ZrO₂/Al₂O₃/ZrO₂ "ZAZ" stack).
- **Al₂O₃** — interfacial layers, passivation, and etch-stop/encapsulation.
- **TiN** — metal-gate work-function and electrode layers, and diffusion barriers.
- **Ru and Co** — emerging BEOL metals and liners (see below).
- **MoS₂ and other 2D materials** — channel materials in research (File 23).

Two frontier ALD modes are reshaping integration:
- **Spatial ALD** physically separates the precursor zones rather than separating them in time, moving the wafer between zones to dramatically increase throughput — important for high-volume applications.
- **Area-Selective Deposition (ASD / selective ALD)** exploits surface chemistry so that film grows only on certain materials (e.g., on metal but not dielectric), using inhibitor molecules (self-assembled monolayers) to block growth where it is not wanted. ASD promises **self-aligned** structures that relax overlay requirements — for example, growing a via cap only on exposed metal — and is one of the most actively researched deposition techniques for sub-3nm nodes.

---

## 3. Physical Vapor Deposition (PVD)

In physical vapor deposition, material is physically ejected from a solid target and condenses on the wafer, with no chemical reaction required (or only reactive-gas-assisted). PVD is the method of choice for metals.

**DC magnetron sputtering** bombards a metal target with argon ions; magnets confine the plasma near the target to increase sputter rate. It deposits aluminum, titanium, tantalum, and copper seed layers. **RF sputtering** extends PVD to insulating targets.

**Ionized PVD (iPVD)** ionizes the sputtered metal flux so that wafer bias can direct it into the bottoms of high-aspect-ratio features — essential for depositing thin, continuous **barrier (TaN/Ta)** and **copper seed** layers at the bottom and sidewalls of damascene vias and trenches before electroplating. PVD also forms **NiPt** layers for silicide and various work-function and capping metals.

PVD's limitation is conformality: as features shrink and aspect ratios rise, even iPVD struggles to coat sidewalls and bottoms uniformly, which is one reason ALD has displaced PVD for the thinnest barrier and liner layers at the leading edge. Nonetheless PVD remains indispensable for seed metals, electrodes, and the thick metallization of upper interconnect and packaging.

---

## 4. Epitaxy

Epitaxy grows a **single-crystal** film in registry with the underlying crystal lattice — the most demanding form of deposition, requiring atomically clean surfaces and precise temperature control.

**Silicon and SiGe/Ge CVD epitaxy** is central to modern transistors. **Selective epitaxial growth (SEG)** deposits SiGe (boron-doped, for pMOS) or Si:P (phosphorus-doped, for nMOS) only in the recessed source/drain regions, applying strain that boosts carrier mobility and providing low-resistance, in-situ-doped junctions. Facet control during SEG governs the final S/D shape and stress. For **GAA**, epitaxy grows the alternating **SiGe/Si superlattice** (typically 25–35% Ge in the sacrificial SiGe, with sheets a few nanometers thick) from which the nanosheet channels are later released — making epitaxy one of the defining GAA enabling steps.

**MBE (Molecular Beam Epitaxy)** uses ultra-high-vacuum thermal evaporation for the highest-purity, atomically abrupt films; it is a research and III-V/specialty tool, not a mainstream HVM logic method, because of low throughput.

**MOCVD (Metal-Organic CVD)** grows compound-semiconductor epitaxy (GaN, SiC, InP, GaAs and their alloys) for power, RF, and photonic devices, and is the leading method for wafer-scale 2D-material (MoS₂) deposition research. (Files 12 and 23 cover compound and 2D epitaxy in depth.)

---

## 5. Emerging Deposition Frontiers

Several deposition challenges define the leading edge:

- **Ru and Mo BEOL metals:** as copper's effective resistivity rises at sub-10nm pitches and its barrier consumes too much wire cross-section, the lower interconnect layers are transitioning to **ruthenium** (ALD from precursors such as Ru(DMBD)(CO)₃) and **molybdenum** (CVD/ALD from MoCl₅ or MoF₆ chemistries), which can be used with little or no barrier. This is one of the most consequential materials transitions in BEOL since copper itself.
- **High-aspect-ratio (HAR) tungsten fill** for 3D NAND word lines and DRAM buried word lines, where CVD tungsten must fill features tens of layers deep without voids or seams.
- **2D-material deposition** (MoS₂, WS₂) by MOCVD and ALD for future channel materials, where grain size, defect density, and 300mm uniformity remain unsolved (File 23).
- **Selective and self-aligned deposition** (ASD), enabling via caps, barrier-selective fills, and self-aligned structures that relax lithographic overlay.

---

## 6. Vendor Landscape

| Vendor | Deposition strengths |
|---|---|
| **Lam Research** | Strong in PECVD/ALD dielectrics (VECTOR, Striker), tungsten and metal fill (ALTUS), and gap-fill; tightly coupled to its etch dominance for integrated module flows. |
| **Applied Materials (AMAT)** | The broadest deposition portfolio: PVD (Endura, the PVD leader), CVD (Producer), ALD, epitaxy (Centura/Epi), and selective deposition; market-share leader in deposition overall. |
| **ASM International** | The **ALD leader**, especially for high-k and gate-stack ALD and epitaxy (Intrepid/Epsilon); ALD is core to its identity and its strong margins. |
| **Tokyo Electron (TEL)** | Strong in CVD, ALD, and coat/develop; broad presence across deposition and clean. |
| **Kokusai Electric** | Leader in **batch (furnace) ALD/CVD**, important for memory (3D NAND ONON stacks, DRAM); spun out of Hitachi, formerly slated for KKR/AMAT ownership. |
| **Jusung Engineering, Wonik IPS (Korea)** | Domestic ALD/CVD suppliers serving Samsung and SK Hynix. |
| **NAURA (China)** | Fast-growing Chinese deposition (and etch) supplier, central to China's localization drive. |

---

## 7. Patent Landscape

The foundational ALD patents trace to **Tuomo Suntola** (Finland), who invented "atomic layer epitaxy" in the 1970s; ASM International built much of its ALD leadership on a strong patent position. Applied Materials and Lam hold extensive deposition IP across PVD, CVD, gap-fill, and ALD reactor design and chemistries. A particularly active modern area is **selective/area-selective deposition**, where ASM, Applied, Lam, and TEL are all building patent portfolios around inhibitor chemistries and self-aligned schemes, recognizing that ASD is likely to be a key differentiator at sub-3nm nodes. Precursor chemistry (the metal-organic compounds enabling new ALD films) is a parallel IP battleground involving chemical suppliers such as Merck/EMD, Entegris, and Air Liquide.

---

## 8. Node-by-Node Deposition Challenges

**FinFET era (22nm–5nm):** deposition challenges centered on conformal high-k/metal-gate ALD wrapping three sides of the fin, void-free gap-fill between increasingly tall, narrow fins (driving the move to flowable CVD and ALD), conformal SiGe S/D epitaxy with facet control, and the introduction of cobalt for lower-metal fill at N7 to combat copper's gap-fill and electromigration limits.

**GAA nanosheet era (3nm–2nm):** the defining deposition challenges are the **SiGe/Si superlattice epitaxy** (precise Ge concentration and layer-thickness control over multiple stacked pairs), **inner-spacer ALD** (filling a few-nanometer lateral cavity with a low-k dielectric after selectively recessing the SiGe — the signature GAA process), and **gate-stack ALD inside the released nanosheet gaps** (depositing high-k and work-function metals into channels separated by only a few nanometers, demanding flawless gap-fill conformality). In parallel, **Ru/Mo BEOL metallization** enters production for the lowest interconnect layers.

**CFET era (research, ~2027+):** deposition complexity roughly doubles. The dual-tier nanosheet stack requires independent gate-metal deposition for the bottom and top tiers, self-aligned dielectric isolation between them, ALD gap-fill at openings below 3nm, and — for sequential CFET — low-temperature (<400°C) high-quality dielectric deposition compatible with an already-bonded bottom tier. Selective and area-selective deposition becomes increasingly central to enabling self-aligned structures that lithography alone cannot resolve.

Across all these transitions, the unifying theme is the relentless demand for **atomic-scale thickness control, perfect conformality in ever-deeper features, lower thermal budgets, and selective (self-aligned) deposition** — requirements that have made ALD and its selective variants the fastest-growing and most strategically important corner of the deposition world.

---

## Extended Analysis: ALD's Ascendancy, Selective Deposition, and the Materials Frontier

### A. Why ALD Became the Defining Deposition Technology

Of all the deposition methods, **ALD has risen fastest in importance**, and the reasons illuminate the broader direction of the industry. ALD's defining property — **self-limiting, surface-saturating reactions that deposit a precise sub-monolayer per cycle** — gives it two capabilities no other method matches: **angstrom-level thickness control** (set simply by counting cycles) and **near-perfect conformality** (the reactions saturate every surface equally, regardless of geometry). These are exactly the capabilities the leading edge demands. High-k/metal-gate dielectrics must be a few atomic layers thick and uniform — ALD. FinFET gate stacks must conformally wrap three-dimensional fins — ALD. DRAM capacitors and 3D NAND structures must be coated conformally at aspect ratios above 50:1 — ALD. GAA inner spacers and gate fill must deposit into few-nanometer cavities and gaps — ALD. As devices became thinner, more three-dimensional, and more conformality-demanding, ALD moved from a niche to a central, fast-growing technology, and it is why **ASM International** (the ALD leader) has been one of the strongest-growing, highest-margin equipment makers. The number of ALD steps per advanced chip has risen steadily, and ALD's share of deposition spending continues to grow — a structural tailwind rooted in the same three-dimensional, atomic-scale trends that run throughout this database.

### B. Selective and Area-Selective Deposition — The Self-Aligned Future

The most important deposition frontier is **area-selective deposition (ASD)** — growing material **only where it is wanted** (e.g., on metal but not on dielectric), using surface chemistry (inhibitor molecules, self-assembled monolayers) to block growth elsewhere. The significance of ASD is profound: it enables **self-aligned structures** that relax the lithographic overlay requirement, which is one of the hardest and most expensive challenges at advanced nodes. If a via cap, a barrier, or a metal can be grown selectively on an exposed feature without needing a separate, perfectly-aligned lithography step, the process is simpler, cheaper, and more robust to overlay error. As pitches shrink below what lithography can reliably align, self-alignment via selective deposition becomes increasingly essential — which is why ASD is one of the most actively researched and patented deposition technologies (ASM, Applied, Lam, TEL all investing heavily), and why it is expected to be a key enabler at sub-3nm nodes and for CFET (File 23). Selective deposition, together with selective etch (File 05), points toward a future of **self-aligned processing** in which the structure increasingly directs its own formation, reducing reliance on the lithography that can no longer align everything.

### C. The Interconnect-Metal Transition

One of the most consequential deposition challenges is the **transition of BEOL interconnect from copper to ruthenium and molybdenum** (Files 04, 15). This is fundamentally a deposition problem: Ru and Mo must be deposited (by ALD/CVD) as thin, low-resistance, well-adhered films, ideally barrier-less (one of their key advantages over copper, which needs a non-scaling TaN barrier). Developing the precursors (Ru precursors such as Ru(DMBD)(CO)₃; Mo precursors such as MoCl₅ and MoF₆), the deposition processes (conformal fill at tiny dimensions), and the integration (with the new patterning and CMP these metals require) is a major, ongoing effort. The payoff is lower effective resistance at the tightest pitches, where copper's resistivity penalty and barrier overhead become prohibitive. This metal transition — the most significant since copper replaced aluminum 25 years ago — places deposition at the center of one of the leading edge's defining challenges, and it exemplifies how each new material brings a corresponding deposition-development effort.

### D. The 2D-Material Deposition Challenge

Looking further ahead, the deposition of **2D channel materials** (MoS₂, WSe₂, File 23) is one of the hardest and most important frontiers. The challenge is not the device physics (favorable) but growing **wafer-scale, low-defect, uniform** 2D films — IMEC's 300mm MOCVD MoS₂ demonstration was a milestone, but grain size, defect density (sulfur vacancies), and uniformity remain far from logic-quality. Solving this is a deposition problem: developing MOCVD and ALD processes (and the reactors, from Aixtron, Veeco, ASM, Applied) that can grow these atomically-thin crystals uniformly across 300mm with low defect density. The 2D-material deposition challenge exemplifies the broader pattern: as the industry reaches for new materials to extend scaling, the **deposition of those materials** — uniformly, conformally, at scale, with the required quality — is often the gating challenge, placing the deposition-equipment makers and the precursor suppliers at the center of enabling each new frontier.

### E. The Node-by-Node Deposition Summary

The deposition challenge intensifies with each architecture transition: FinFET demanded conformal gate-stack ALD over fins and void-free gap-fill between them; GAA demands superlattice epitaxy, inner-spacer ALD in few-nanometer cavities, and gate-fill ALD in released nanosheet gaps; CFET roughly doubles the gap-fill and gate-metal complexity and demands sub-3nm-opening fill and dual-tier integration. Across all of these, the unifying demands are **atomic-scale thickness control, perfect conformality in ever-deeper and narrower features, lower thermal budgets, selective (self-aligned) deposition, and an expanding palette of new materials** — requirements that have made ALD and its selective variants the fastest-growing and most strategically important corner of deposition, and that ensure deposition remains, alongside lithography and etch, one of the three central pillars on which the leading edge depends.
