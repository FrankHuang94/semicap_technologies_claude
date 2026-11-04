# Glossary of Semiconductor Capital Equipment Terms and Acronyms

A consolidated reference for the terms, acronyms, companies, and concepts used throughout this database. Definitions are written for quick reference; for fuller treatment, follow the file pointers (e.g., "File 15") to the relevant section. Entries are grouped by theme and ordered alphabetically within each group.

---

## 📊 Concept Map

*The database's themes at a glance (Mermaid mindmap renders natively on GitHub).*

```mermaid
mindmap
  root((SemiCap))
    Process steps
      Lithography
      Deposition
      Etch
      CMP
      Implant / anneal
      Clean / thermal
    Process control
      Metrology
      Inspection
      APC / yield
    Devices & roadmap
      FinFET
      GAA nanosheet
      CFET
      Backside power
    Memory & emerging
      3D NAND
      DRAM / HBM
      MRAM / PCM / ReRAM
    Packaging
      2.5D / CoWoS
      3D stacking
      Hybrid bonding
      Co-packaged optics
    Ecosystem
      Vendors
      Materials
      Subsystems
    Business
      Market / finance
      Geopolitics
      Sustainability
```

---

## 1. Process Steps and Equipment Categories

- **ALD (Atomic Layer Deposition):** Deposition by self-limiting, surface-saturating reactions that add one sub-monolayer per cycle, giving angstrom-level thickness control and near-perfect conformality. The enabling technology for high-k gate stacks, FinFET/GAA, DRAM capacitors, and 3D NAND. (File 04)
- **ALE (Atomic Layer Etch):** The subtractive counterpart to ALD — removing material one atomic layer at a time via self-limiting cycles, for atomic-scale precision and low damage (e.g., GAA channel release). (File 05)
- **APCVD (Atmospheric Pressure CVD):** CVD at atmospheric pressure; high throughput, lower conformality; limited modern role. (File 04)
- **ASD (Area-Selective Deposition):** Selective ALD/CVD that grows material only on certain surfaces (e.g., metal not dielectric), enabling self-aligned structures that relax overlay requirements. (Files 04, 23)
- **BEOL (Back-End-of-Line):** The multi-level metal interconnect (up to 15–20 layers) connecting transistors; copper dual-damascene with low-k dielectrics, transitioning to Ru/Mo. (File 02)
- **CCP (Capacitively Coupled Plasma):** Plasma-etch source using parallel-plate electrodes; excels at dielectric etch (oxide, nitride, low-k). (File 05)
- **CMP (Chemical Mechanical Planarization):** Polishing the wafer flat by combined chemical softening and mechanical abrasion; essential for multilayer builds and for hybrid-bonding surface preparation. (File 06)
- **CVD (Chemical Vapor Deposition):** Film deposition by gas-phase precursor reaction at the surface; variants LPCVD, APCVD, PECVD, HDP-CVD, FCVD. (File 04)
- **DRIE (Deep Reactive-Ion Etch):** Deep silicon etch (often Bosch process) for TSVs, MEMS, and backside vias. (Files 05, 11)
- **FCVD (Flowable CVD):** CVD depositing a liquid-like film that wicks into narrow gaps before curing, solving void-free gap-fill. (File 04)
- **FEOL (Front-End-of-Line):** The transistor-building part of the flow — isolation, wells, gate stack, source/drain, contacts. (File 02)
- **HDP-CVD (High-Density Plasma CVD):** CVD with simultaneous sputter-etch for void-free gap-fill. (File 04)
- **IBE (Ion Beam Etch):** Physical etch with a broad ion beam at an angle; used to pattern MRAM MTJ pillars where plasma etch causes redeposition shorts. (File 23)
- **ICP (Inductively Coupled Plasma):** Plasma-etch source with independent flux/energy control; favored for conductor etch. (File 05)
- **iPVD (Ionized PVD):** PVD with ionized metal flux directed into high-aspect-ratio features for barrier/seed layers. (File 04)
- **LPCVD (Low-Pressure CVD):** Batch CVD at reduced pressure and high temperature for polysilicon, nitride, and TEOS oxide. (File 04)
- **MOL (Middle-of-Line):** The tightest-pitch local interconnect bridging FEOL and BEOL (local interconnect, self-aligned contacts, M0/V0). (File 02)
- **PEALD / PECVD (Plasma-Enhanced ALD / CVD):** Plasma-assisted deposition enabling lower temperatures, essential for BEOL's ≤400°C budget. (File 04)
- **PLAD (Plasma Doping):** Conformal, high-dose doping of 3D surfaces by plasma immersion. (File 07)
- **PVD (Physical Vapor Deposition):** Sputter deposition of metals from a solid target; barriers, seeds, electrodes. (File 04)
- **RIE (Reactive-Ion Etch):** Moderate-density plasma etch; predecessor to high-density-plasma etch. (File 05)
- **RTP (Rapid Thermal Processing):** Single-wafer lamp heating to peak temperature in seconds for dopant activation with minimal diffusion. (Files 07, 09)
- **SADP / SAQP (Self-Aligned Double/Quadruple Patterning):** Spacer-based multi-patterning that doubles/quadruples line density beyond single-exposure resolution. (File 03)
- **Selective etch:** Etch that removes one material while sparing an adjacent similar one (e.g., SiGe vs. Si for GAA channel release). (File 05)
- **Spatial ALD:** ALD with spatially (not temporally) separated precursor zones for higher throughput. (File 04)

---

## 2. Lithography

- **193i (ArF immersion):** 193 nm lithography with water immersion (NA up to 1.35); the workhorse for most layers and mature nodes. (File 03)
- **Actinic inspection:** EUV mask inspection at the 13.5 nm working wavelength (ZEISS AIMS EUV), needed to see EUV-relevant and stochastic defects. (Files 03, 08, 23)
- **CAR (Chemically Amplified Resist):** Photoresist using a photoacid generator to catalyze a solubility change; the incumbent EUV resist. (Files 03, 23)
- **Computational lithography:** Software (OPC, SMO, ILT) that pre-distorts mask/illumination to compensate for diffraction; increasingly GPU/AI-accelerated (Nvidia cuLitho, adopted by TSMC). (Files 03, 22)
- **DSA (Directed Self-Assembly):** Patterning by block-copolymer microphase separation guided by a lithographic pre-pattern; multiplies density and rectifies roughness. (Files 03, 23)
- **DUV (Deep Ultraviolet):** Lithography at 248 nm (KrF) and 193 nm (ArF); DUV immersion remains the industry workhorse. (File 03)
- **EUV (Extreme Ultraviolet):** 13.5 nm lithography using laser-produced tin-plasma source, all-reflective Mo/Si optics, and reflective masks; ASML's monopoly. (File 03)
- **EXE:5200B:** ASML's second-generation, higher-throughput High-NA EUV production scanner; Intel reportedly completed acceptance of one at its D1X (Oregon) development fab in early 2026. (Files 03, 15)
- **High-NA EUV:** 0.55-NA EUV (ASML EXE platform) with anamorphic optics and a halved (26×16.5 mm) field; Intel plans Intel 14A as the first node to use it in HVM; Samsung and TSMC reportedly target high-volume use around 2028 and 2030 respectively. (Files 03, 15, 23)
- **Hyper-NA EUV:** Proposed future EUV beyond 0.55 NA (~0.75); faces severe mask-3D, depth-of-focus, and field-size challenges. (File 23)
- **ILT (Inverse Lithography Technology):** Computing the ideal (often curvilinear) mask by solving the inverse imaging problem. (File 03)
- **k₁ factor:** Process factor in the Rayleigh resolution equation (Resolution = k₁·λ/NA); single-exposure floor ≈ 0.25. (File 03)
- **LELE (Litho-Etch-Litho-Etch):** Multi-patterning interleaving two exposures/etches to double density. (File 03)
- **LER / LWR (Line-Edge / Line-Width Roughness):** Random edge/width variation, a key EUV stochastic limit driven by photon shot noise. (Files 03, 23)
- **MOR (Metal-Oxide Resist):** Tin-oxide-based EUV resist (Inpria/JSR) with higher resolution and lower LER; key for High-NA. (Files 03, 16, 23)
- **NA (Numerical Aperture):** Light-gathering measure of the projection optics (NA = n·sinθ); higher NA improves resolution but shrinks depth of focus. (File 03)
- **NIL (Nanoimprint Lithography):** Patterning by physically stamping resist with a template (Canon); first foothold in 3D NAND. (File 03)
- **NTD (Negative-Tone Develop):** Resist/process scheme improving contrast for contact/trench layers. (File 03)
- **OPC (Optical Proximity Correction):** Mask-shape modification to compensate for diffraction and process effects. (File 03)
- **Overlay:** Alignment accuracy of each layer to those beneath; budgets approaching/below 2 nm at advanced nodes. (File 08)
- **Pellicle:** Thin protective membrane over the mask; EUV pellicles must transmit ~90% and survive high power (CNT pellicles in development). (Files 03, 23)
- **SMO (Source-Mask Optimization):** Joint optimization of illumination and mask pattern. (File 03)
- **Stochastic effects:** Random EUV defects (bridges, breaks) and roughness from photon shot noise; a central EUV challenge. (Files 03, 23)

---

## 3. Devices, Architectures, and Roadmap

- **14A (Intel 14A):** Intel's post-18A node and the first planned to use High-NA EUV; Intel has tied its capacity build-out to committed external customer demand, with customer decisions expected 2H 2026–1H 2027. (Files 15, 18)
- **18A / 18A-P (Intel):** Intel's first GAA (RibbonFET) node and the industry's first with backside power (PowerVia); in HVM, with Panther Lake client CPUs launched in early 2026. 18A-P, a performance-enhanced variant aimed at foundry customers, entered risk production in June 2026. (File 15)
- **A14 (TSMC):** TSMC's next-generation node after A16, targeted for 2028. (File 15)
- **A16 (TSMC):** TSMC's first node with backside power delivery (Super Power Rail), built on nanosheet GAA; targeted at HPC/AI, with volume production in 2H 2026–2027 (sources differ). (File 15)
- **BPR (Buried Power Rail):** Power rail buried in a substrate trench, freeing lower-metal routing; a step toward backside power. (File 15)
- **BSPDN (Backside Power Delivery Network):** Moving power delivery to the wafer backside via nano-TSVs, freeing the frontside for signal routing. Intel PowerVia, TSMC Super Power Rail. (Files 15, 23)
- **CFET (Complementary FET):** Vertically stacking nMOS over pMOS in one footprint (~50% cell-area reduction); monolithic or sequential (bonded) implementations. (Files 15, 23)
- **CPP / CGP (Contacted (Poly) Gate Pitch):** Minimum gate-to-gate distance including contact; the key horizontal density metric. (File 15)
- **Dennard scaling:** The (now-ended, ~2005–07) principle that power density stayed constant as transistors shrank; its end caused the multi-core and power-density era. (File 15)
- **DIBL (Drain-Induced Barrier Lowering):** Short-channel effect where drain voltage lowers the source barrier, degrading gate control. (File 15)
- **DTCO / STCO (Design-/System-Technology Co-Optimization):** Co-designing process with the cell library (DTCO) or the whole system/package (STCO) to extract gains beyond pure shrink. (File 15)
- **FinFET:** 3D transistor with the gate wrapping a thin silicon fin on three sides; first commercialized at Intel 22nm (2011). (File 15)
- **Forksheet:** Intermediate GAA architecture with nMOS/pMOS separated by a dielectric wall; ~20% denser than nanosheet, simpler than CFET. (Files 15, 23)
- **GAA (Gate-All-Around):** Transistor whose gate wraps the channel on all sides; nanosheet implementation succeeds FinFET (Samsung SF3/SF2, TSMC N2 — in volume production since Q4 2025 — and Intel RibbonFET at 18A). (File 15)
- **HKMG (High-k/Metal Gate):** Gate stack using a high-k dielectric (HfO₂) and metal gate, introduced at 45nm to cut leakage. (Files 02, 15)
- **IRDS (International Roadmap for Devices and Systems):** IEEE-sponsored successor (2016–) to the ITRS; covers More Moore, More than Moore, and Beyond CMOS. (File 15)
- **ITRS (International Technology Roadmap for Semiconductors):** The 1992–2016 consensus industry roadmap. (File 15)
- **ITV / MIV (Inter-Tier / Monolithic Inter-tier Via):** Vertical connection between stacked device tiers in CFET / monolithic 3D. (File 23)
- **M3D (Monolithic 3D Integration):** Building multiple active device layers sequentially on one wafer; CEA-Leti CoolCube. (File 23)
- **MBCFET (Multi-Bridge-Channel FET):** Samsung's nanosheet (GAA) branding. (File 15)
- **MMP (Minimum Metal Pitch):** Tightest interconnect wiring pitch; the key interconnect density metric. (File 15)
- **MTr/mm² (Mega-Transistors per mm²):** Transistor density; the headline density figure. (File 15)
- **N2 / N2P (TSMC):** TSMC's first GAA nanosheet node family; N2 in volume production since Q4 2025 with capacity sold out, N2P the performance-enhanced follow-on. (File 15)
- **Nanosheet / Nanowire:** GAA channel cross-sections — wide thin sheet (more current, chosen for logic) vs. narrow wire (better electrostatics). (File 15)
- **NanoFlex:** TSMC's variable-nanosheet-width multi-Vt capability. (File 15)
- **Node naming problem:** "nm" node names are marketing labels, not physical dimensions; compare via CPP, MMP, density, SRAM cell instead. (File 15)
- **PowerVia:** Intel's backside power-delivery technology, paired with RibbonFET at 18A (in HVM since early 2026). (Files 15, 23)
- **RibbonFET:** Intel's GAA (nanosheet) transistor branding. (File 15)
- **SF2 (Samsung):** Samsung Foundry's 2nm-class GAA (MBCFET) process; in production (e.g., Exynos 2600), with a second generation ramping in 2H 2026; yields reportedly trail TSMC's N2. (File 15)
- **SS (Subthreshold Slope):** How sharply a transistor turns off (mV/decade); ~60 mV/dec Boltzmann limit at room temperature. (File 15)
- **Super Power Rail (SPR):** TSMC's backside power-delivery technology, introduced at A16; unlike via-based approaches, it connects the backside power network directly to the transistors' source/drain, freeing frontside routing and improving power delivery for HPC/AI chips. (File 15)
- **Vdd:** Supply voltage; has scaled slowly since Dennard scaling ended, contributing to power-density limits. (File 15)

---

## 4. Memory and Emerging Devices

- **3D NAND:** Vertically stacked NAND flash (96→300+ layers) using high-aspect-ratio channel-hole etch and word-line replacement. (File 13)
- **DRAM:** Dynamic RAM (1T1C cell) scaling in-plane with vertical high-aspect-ratio capacitors; first memory to adopt EUV; moving toward 3D DRAM. (Files 13, 23)
- **FeFET / FeRAM / FTJ (Ferroelectric FET / RAM / Tunnel Junction):** Non-volatile devices using ferroelectric HfO₂ (HZO). (File 23)
- **HBM (High-Bandwidth Memory):** Stacked DRAM (8–16 dies via TSV/micro-bump, with hybrid bonding expected only from HBM4E/HBM5) beside logic on an interposer; central to AI. (Files 11, 13)
- **HBM4 / HBM4E:** The sixth/seventh HBM generations; HBM4 doubles the interface to 2,048 bits and entered mass production in 2026 for Nvidia's Rubin platform, with base dies increasingly built on foundry logic processes. JEDEC raised the HBM4 package-height limit to 775 µm (from 720 µm), allowing 12/16-high stacks without hybrid bonding; per SK hynix (Hot Chips 2026), hybrid bonding is not ready for HBM4E and is expected at HBM5 at the earliest. (Files 11, 13)
- **HZO (Hafnium-Zirconium Oxide):** CMOS-compatible ferroelectric (doped HfO₂) for FeFET/FeRAM and negative-capacitance research. (Files 16, 23)
- **IGZO (Indium-Gallium-Zinc-Oxide):** Low-leakage oxide semiconductor for 3D DRAM access transistors and BEOL/monolithic-3D devices. (File 23)
- **IMC (In-Memory Computing):** Performing matrix-vector multiply within a memory crossbar (Ohm's/Kirchhoff's laws) for energy-efficient AI inference. (File 23)
- **MTJ (Magnetic Tunnel Junction):** The storage element of MRAM (~30-layer PVD stack with MgO barrier). (Files 13, 23)
- **NCFET (Negative-Capacitance FET):** Proposed sub-60-mV/dec device using a ferroelectric gate; mechanism still debated. (File 23)
- **PCM (Phase-Change Memory):** Memory using amorphous/crystalline states of a chalcogenide (GST); used in analog compute. (Files 13, 23)
- **RRAM / ReRAM (Resistive RAM):** Memory using a conductive filament in a metal-oxide (HfOx ALD); for embedded NVM and analog compute. (Files 13, 23)
- **STT-MRAM / SOT-MRAM (Spin-Transfer-Torque / Spin-Orbit-Torque MRAM):** Magnetoresistive memory switched by spin-polarized current (STT) or a separate heavy-metal write path (SOT). (Files 13, 23)
- **TMR (Tunneling Magnetoresistance):** Resistance ratio between MTJ magnetic states; >200% needed for read margin. (File 23)

---

## 5. Beyond-Silicon and Compound Semiconductors

- **2DEG (Two-Dimensional Electron Gas):** The conductive channel at the AlGaN/GaN interface in GaN HEMTs. (File 12)
- **CNFET (Carbon-Nanotube FET):** Transistor using semiconducting carbon nanotubes; superb intrinsic properties but severe purity/alignment hurdles. (File 23)
- **GaN (Gallium Nitride):** Wide-bandgap semiconductor for power (GaN-on-Si) and RF (GaN-on-SiC); grown by MOCVD. (File 12)
- **HEMT (High-Electron-Mobility Transistor):** High-frequency/power transistor using a heterostructure 2DEG (GaN, GaAs, InGaAs). (File 12)
- **III-V:** Compound semiconductors (GaAs, InP, InGaAs) for RF and photonics; InP dominates data-center optics. (Files 12, 23)
- **MBE (Molecular Beam Epitaxy):** Ultra-high-vacuum epitaxy giving the highest-quality films; research/specialty, small wafers. (Files 04, 12)
- **MOCVD (Metal-Organic CVD):** Epitaxy for compound semiconductors (GaN, SiC, InP) and wafer-scale 2D-material growth; Aixtron, Veeco. (Files 04, 12, 23)
- **PVT (Physical Vapor Transport):** Seeded-sublimation crystal growth for SiC boules (~2,200–2,400°C); slow and defect-prone. (File 12)
- **SiC (Silicon Carbide):** Wide-bandgap semiconductor for high-voltage power (EVs, grid); 150→200 mm wafer transition is the key cost lever. (File 12)
- **TMD (Transition-Metal Dichalcogenide):** 2D channel materials (MoS₂, WS₂, WSe₂) with monolayer thickness for ultra-scaled channels. (File 23)
- **UWBG (Ultra-Wide-Bandgap):** Next-generation power/RF materials — Ga₂O₃, diamond, AlN. (File 23)

---

## 6. Advanced Packaging and Test

- **2.5D / CoWoS:** Side-by-side dies on a silicon interposer with TSVs (TSMC Chip-on-Wafer-on-Substrate); backbone of AI accelerators. (File 11)
- **ATE (Automated Test Equipment):** Testers applying patterns to verify chip function; Advantest, Teradyne. (File 25)
- **Chiplet:** A die that is one functional block of a larger system, integrated in a package with others. (Files 11, 15)
- **CoPoS (Chip-on-Panel-on-Substrate):** TSMC's panel-level evolution of CoWoS, processing interposers on large rectangular panels (with glass-core options on the roadmap) to fit more and larger AI packages per substrate than round 300 mm wafers. (File 11)
- **COUPE (Compact Universal Photonic Engine):** TSMC's co-packaged-optics engine, stacking an electronic IC on a photonic IC with SoIC hybrid bonding; entering mass production in 2H 2026. (Files 11, 23)
- **C4 / micro-bump:** Solder-bump interconnects for flip-chip and 3D stacking. (File 11)
- **CPO (Co-Packaged Optics):** Integrating optical transceivers directly in the package to beat the electrical bandwidth wall; shipping since 2025–2026 in Nvidia Spectrum-X/Quantum-X Photonics switches and TSMC COUPE, though industry test standards are still immature. (Files 11, 23, 25)
- **DFT (Design-for-Test):** Designing chips for testability (scan, BIST, boundary scan, test compression). (File 25)
- **Foveros / SoIC / X-Cube:** Intel / TSMC / Samsung 3D die-stacking platforms (moving to hybrid bonding). (File 11)
- **FOWLP / InFO (Fan-Out Wafer-Level Packaging):** Dies embedded in a molded wafer with redistribution wiring fanned out (TSMC InFO). (File 11)
- **Glass-core substrate:** Package substrate using a glass core instead of organic laminate, offering flatness, dimensional stability, and fine-pitch through-glass vias for very large AI packages; in development for panel-level packaging. (File 11)
- **Hybrid bonding (Cu-Cu):** Direct copper-and-dielectric bonding at sub-10 µm (toward sub-1 µm) pitch; requires sub-nm CMP and tight alignment; ~6 µm pitches reported in TSMC SoIC production. (Files 06, 11)
- **KGD (Known-Good-Die):** A die tested and verified good before integration into a costly multi-die package. (File 25)
- **Kinex:** Applied Materials' integrated die-to-wafer hybrid-bonding system, launched in 2025 and co-developed with Besi (in which Applied holds a ~9% stake); combines bonding with pre-bond preparation and inline metrology. (File 11)
- **MR-MUF (Mass Reflow Molded Underfill):** SK hynix's HBM stacking process — dies are stacked, reflowed together, and the gaps filled with a molded underfill, giving good thermal dissipation and throughput; retained for HBM4 after JEDEC relaxed the stack-height limit. (Files 11, 13)
- **OSAT (Outsourced Semiconductor Assembly and Test):** Packaging/test subcontractors (ASE, Amkor, JCET). (File 11)
- **RDL (Redistribution Layer):** Fine-pitch wiring built over dies/interposers to route connections. (File 11)
- **SLT (System-Level Test):** Testing a packaged device in a realistic application environment; complements/replaces burn-in. (File 25)
- **TC-NCF (Thermo-Compression with Non-Conductive Film):** HBM stacking approach (historically Samsung's and Micron's) that bonds each die with TCB through a non-conductive film; the main alternative to MR-MUF. (Files 11, 13)
- **TCB (Thermo-Compression Bonding):** Die bonding using heat and pressure for micro-bump stacks. (File 11)
- **TSV (Through-Silicon Via):** Vertical via through a wafer for 3D/2.5D interconnect; nano-TSVs for backside power. (Files 11, 15)
- **UCIe (Universal Chiplet Interconnect Express):** Open die-to-die interconnect standard for interoperable chiplets. (File 23)

---

## 7. Metrology, Process Control, and Reliability

- **APC (Advanced Process Control):** Using measurements to steer the process (run-to-run, feed-forward/back, FDC, virtual metrology). (File 08)
- **BTI (NBTI/PBTI — Bias Temperature Instability):** Threshold-voltage drift under bias/temperature; a reliability concern. (File 25)
- **CD (Critical Dimension):** A patterned feature's size; measured by CD-SEM, OCD/scatterometry, CD-AFM, TEM. (File 08)
- **CD-SEM:** Critical-dimension scanning electron microscopy; the workhorse inline CD tool (Hitachi High-Tech). (File 08)
- **D₀ (Defect Density):** Yield-killing defects per unit area; the central manufacturability metric. (File 15)
- **Electromigration:** Current-driven metal-atom transport causing interconnect failure (Black's equation). (File 25)
- **FDC (Fault Detection and Classification):** Monitoring tool sensors to detect excursions; increasingly ML-based. (Files 08, 22)
- **IBO / DBO (Image-/Diffraction-Based Overlay):** Optical overlay-measurement methods (KLA Archer, ASML YieldStar). (File 08)
- **OCD (Optical Critical Dimension) / Scatterometry:** Model-based optical metrology (RCWA) extracting 3D profiles from periodic structures. (File 08)
- **OEE (Overall Equipment Effectiveness):** Tool availability × performance × quality; the productivity metric. (File 24)
- **OES (Optical Emission Spectroscopy):** In-situ plasma/etch endpoint detection by emission lines. (Files 05, 08)
- **TDDB (Time-Dependent Dielectric Breakdown):** Gate-dielectric lifetime reliability test. (File 25)
- **Virtual metrology:** ML prediction of a wafer's measurements from tool sensor data, reducing physical sampling. (Files 08, 22)
- **Yield learning:** The process of driving defect density down and yield up along a learning curve during a node ramp. (File 15)

---

## 8. Materials, Subsystems, and Infrastructure

- **AMHS (Automated Material Handling System):** Overhead-hoist transport, stockers, and FOUP logistics in a fab (SEMI E84). (File 24)
- **CMP slurry / pad:** The abrasive chemistry and polyurethane pad consumables central to CMP cost and performance. (Files 06, 16)
- **EOT (Equivalent Oxide Thickness):** The SiO₂-equivalent thickness of a high-k gate dielectric. (File 02)
- **ESC (Electrostatic Chuck):** Wafer clamp providing electrostatic hold and multi-zone temperature control. (File 20)
- **F-GHG / PFC (Fluorinated Greenhouse Gas / Perfluorocarbon):** High-GWP process gases (NF₃, SF₆, CF₄) requiring abatement. (Files 20, 21)
- **FOUP (Front-Opening Unified Pod):** Standardized 300 mm wafer carrier providing a mini-environment (SEMI E47.1). (Files 20, 24)
- **High-k / Low-k / Ultra-low-k:** High-permittivity gate/capacitor dielectrics (HfO₂, ZrO₂) and low-permittivity BEOL insulators (SiOCH, porous, air gap). (Files 02, 16)
- **MFC (Mass Flow Controller):** Precise gas-flow regulator, critical for ALD dose control (Brooks, Horiba, Fujikin). (File 20)
- **PFAS (Per- and Polyfluoroalkyl Substances):** "Forever chemicals" used in fab fluoropolymer piping, seals, photoresists, and process fluids; an EU-wide restriction is advancing (ECHA RAC final and SEAC draft opinions, 26 Mar 2026) with time-limited derogations and earliest bans not before late 2028. (Files 16, 21, 24)
- **Process kit:** Consumable chamber parts (ceramic liners, focus rings, electrodes) that erode and are replaced on a cycle. (File 20)
- **RF power / matching network:** The plasma-excitation subsystem (MKS, Advanced Energy) whose precision and pulsing govern etch/deposition. (File 20)
- **Ru / Mo / Co (Ruthenium / Molybdenum / Cobalt):** New BEOL interconnect metals replacing copper at the tightest pitches (barrier-less or thin-barrier). (Files 04, 15)
- **SOI (Silicon-on-Insulator):** Wafer with a thin silicon device layer over a buried oxide (Soitec Smart Cut); FD-SOI, RF-SOI, photonics. (Files 12, 16)
- **UPW (Ultrapure Water):** Water purified to >18.2 MΩ·cm resistivity and <0.5 ppb TOC for wafer rinsing. (Files 10, 24)
- **ULPA / HEPA:** Ultra-low / high-efficiency particulate air filters maintaining cleanroom particle levels. (File 24)

---

## 9. Companies and Institutions (Quick Reference)

- **AMAT (Applied Materials):** Broadest WFE portfolio — deposition, etch, CMP, implant, thermal, e-beam. (File 14)
- **AMEC / NAURA / Piotech / SMEE / SiCarrier:** China domestic equipment makers (etch, deposition, lithography). (Files 14, 18)
- **ASE / Amkor / JCET:** Leading OSATs (packaging/test). (File 11)
- **ASM International:** ALD and epitaxy leader. (File 14)
- **ASML:** Sole EUV/High-NA supplier; leading DUV maker. (Files 03, 14)
- **Advantest / Teradyne / Cohu:** Test (ATE, handlers); AI accelerators and HBM drove a strong 2025–2026 upturn. (File 25)
- **Axcelis–Veeco:** All-stock merger (announced Oct 2025, ~$4.4B) combining ion implantation with MOCVD/ion-beam/laser-anneal tools; approved by shareholders Feb 2026, closing expected by end of Q1 2027 pending China SAMR and HSR review. (Files 07, 14)
- **BESI / Kulicke & Soffa / ASM Pacific:** Packaging assembly and bonding. (File 11)
- **DISCO:** Dicing and grinding/thinning leader. (Files 11, 14)
- **EV Group / SUSS MicroTec:** Wafer-bonding and temporary-bond/debond. (Files 11, 14)
- **IMEC / CEA-Leti / IBM Research / Fraunhofer:** Pre-competitive research hubs. (Files 01, 15, 23)
- **KLA:** Dominant process-control (inspection/metrology) company. (Files 08, 14)
- **Kokusai Electric:** Batch furnace/ALD leader (memory). (File 14)
- **Lam Research:** Etch leader; strong deposition and clean (memory-exposed). (Files 05, 14)
- **MKS Instruments / Advanced Energy / Entegris:** Subsystems and materials. (Files 16, 20)
- **Onto Innovation / Nova:** Metrology specialists. (Files 08, 14)
- **Rapidus:** Japanese government-backed foundry developing 2nm GAA at IIM-1 (Chitose, Hokkaido); prototypes running since Jul 2025, HVM targeted for 2H FY2027. (Files 15, 19)
- **SCREEN:** Single-wafer wet-clean leader. (Files 10, 14)
- **Shin-Etsu / SUMCO / JSR / TOK / AGC / Hoya:** Materials leaders (wafers, resist, EUV mask blanks). (File 16)
- **TEL (Tokyo Electron):** Coater/developer-track leader; broad etch, deposition, clean. (File 14)
- **ZEISS:** EUV/High-NA optics and actinic mask inspection. (Files 03, 14)

---

## 10. Market, Policy, and Economics

- **Affiliates Rule ("50% Rule"):** U.S. BIS rule (29 Sep 2025) extending Entity List restrictions to entities ≥50% owned by listed parties; suspended for one year from 10 Nov 2025 under the U.S.–China Busan truce, with the truce reportedly extended to 10 Jan 2027. (File 18)
- **AI Diffusion Rule:** January 2025 U.S. rule tiering countries' access to advanced AI chips; rescinded in May 2025. (File 18)
- **ASP (Average Selling Price):** Tool price (EUV ~$150–200M; High-NA ~$380M+; etch/ALD chambers ~$2–6M). (File 19)
- **BIS (Bureau of Industry and Security):** U.S. agency administering the EAR export controls. (File 18)
- **Book-to-bill:** Ratio of orders to shipments; >1.0 signals expansion. (File 19)
- **CHIPS Act / EU Chips Act:** U.S. (~$52B) and EU (~€43B) subsidy programs for domestic capacity and R&D; in Aug 2025 the U.S. converted Intel's CHIPS grants into a ~10% government equity stake. (File 18)
- **Domestic-tool share (China):** Share of equipment in Chinese fabs supplied by Chinese vendors — ~35% in 2025 by an industry-body measure (vs ~25% in 2024), lower (~25%) on WFE-value methodologies; lithography remains <5%. (Files 14, 18)
- **EAR (Export Administration Regulations):** U.S. dual-use export-control regime covering advanced equipment. (File 18)
- **FDPR (Foreign Direct Product Rule):** Extends U.S. jurisdiction to foreign goods incorporating U.S. technology — the key extraterritorial lever. (File 18)
- **MATCH Act:** Proposed U.S. legislation (pending as of Nov 2026) that would ban sales of DUV lithography tools to China and the servicing of tools already installed there. (File 18)
- **Memory supercycle:** Shorthand for the 2025–2027 DRAM-led memory upcycle driven by AI (HBM and server DRAM), with sharply rising DRAM/NAND prices and memory leading WFE growth. (Files 13, 19)
- **"Big Fund" (National IC Industry Investment Fund):** China's state semiconductor fund (Phases I–III, ~$22B/$30B/$47B). (File 18)
- **Section 232 (semiconductor tariffs):** U.S. national-security trade statute used for a 25% tariff on a narrow set of advanced chips effective 15 Jan 2026 (proclamation of 14 Jan 2026), with exemptions for imports supporting U.S. manufacturing; broader phase-2 tariffs possible. (Files 18, 19)
- **TAM (Total Addressable Market):** Market size; SemiCap TAM ~$37B (2015) → ~$113B (2024) → ~$133B (2025, SEMI) → ~$166B forecast (2026) → record ~$229.5B projected (2028, SEMI July 2026). (File 19)
- **VEU (Validated End-User):** U.S. program letting pre-approved foreign facilities receive controlled items without individual licenses; Samsung (Xi'an) and SK hynix (Wuxi, Dalian) China fabs were removed effective 31 Dec 2025 and moved to annual 2026 licenses permitting maintenance but not expansion or upgrades. (File 18)
- **WFE (Wafer Fab Equipment):** Front-end process equipment; the core of the SemiCap market. (Files 01, 19)

---

## 🆕 2025–2026 Update: Latest Developments (as of November 2026)

This edition adds terms that became important between mid-2025 and November 2026. On the **roadmap** side: TSMC N2/N2P and A16 (Super Power Rail), Intel 18A/18A-P and 14A, Samsung SF2, and ASML's EXE:5200B High-NA scanner. In **memory and packaging**: HBM4/HBM4E (with JEDEC's 775 µm stack-height limit), MR-MUF vs. TC-NCF stacking, Applied/Besi's Kinex hybrid bonder, TSMC's CoPoS panel-level packaging and COUPE co-packaged optics, and glass-core substrates. In **policy and markets**: the BIS Affiliates ("50%") Rule and its suspension, VEU revocations for Korean fabs in China, Section 232 chip tariffs, the proposed MATCH Act, China's domestic-tool share, PFAS restriction, and the "memory supercycle." Existing entries (High-NA EUV, GAA, HBM, CPO, CHIPS Act, TAM) were refreshed with 2026 status.

---

## Cross-Reference Note

This glossary consolidates terms defined throughout the database. The two deep-dive files retain their own focused appendices — **File 15 (Appendix: Key Roadmap Acronyms)** and **File 23 (Appendix: Key Frontier-Technology Acronyms)** — for roadmap- and research-specific terms in context. For full treatment of any entry, follow its file pointer to the relevant section.
