# Compound Semiconductor Manufacturing Equipment — GaN, SiC, III-V

Not all semiconductors are silicon. A family of **compound semiconductors** — made by combining elements from different groups of the periodic table — offers electrical and optical properties that silicon cannot match, and they have become indispensable in power electronics, radio frequency (RF), optoelectronics, and photonics. Silicon carbide (SiC) and gallium nitride (GaN) are revolutionizing power conversion for electric vehicles, fast chargers, and the grid; III-V materials such as gallium arsenide (GaAs) and indium phosphide (InP) dominate RF front-ends and data-center optics. These materials require a distinct manufacturing ecosystem — different crystal-growth methods, different epitaxy, different thermal processing, and often smaller wafers — supplied by a largely separate set of equipment vendors. This file covers SiC, GaN, and III-V manufacturing and their equipment, the markets driving them, and the vendor landscape.

The fundamental reason these materials matter is the **bandgap** and related properties. A wide bandgap (SiC ~3.3eV, GaN ~3.4eV versus silicon's 1.1eV) allows devices to withstand much higher voltages and temperatures and to switch faster with lower losses — ideal for power. High electron mobility and direct bandgaps make III-V materials superior for high-frequency amplification and for emitting and detecting light.

---

## 1. Silicon Carbide (SiC)

Silicon carbide is the leading wide-bandgap material for **high-voltage power electronics** (typically 650V–1700V and above), where its low conduction and switching losses dramatically improve the efficiency of EV traction inverters, on-board chargers, solar inverters, and industrial drives. SiC's manufacturing challenges begin at the very first step: the crystal.

**Boule growth.** Unlike silicon, SiC cannot be pulled from a melt by the Czochralski method (it sublimes rather than melts at practical pressures). Instead, SiC boules are grown by **PVT (Physical Vapor Transport / seeded sublimation)**, in which SiC source powder is sublimed at ~2,200–2,400°C and re-condenses on a seed crystal — an extremely slow process (millimeters per hour) that produces short boules and is prone to defects (micropipes, dislocations). **HTCVD (High-Temperature CVD)** is an alternative growth method. The slow, defect-prone growth is the primary reason SiC wafers are expensive and supply-constrained.

**Wafer-size transition.** The SiC industry is undergoing a pivotal transition from **150mm to 200mm** wafers, which roughly doubles the die per wafer and lowers cost — a key competitive battleground, with Wolfspeed, Coherent (formerly II-VI), and others racing to ramp 200mm.

**Epitaxy.** A SiC CVD epitaxial layer is grown on the substrate to form the device's active region, with **n-type doping (nitrogen)** and **p-type doping (aluminum)** introduced in situ. SiC epitaxy occurs at high temperature in specialized CVD reactors.

**Device processing.** SiC device fabrication requires extraordinarily high-temperature **dopant-activation anneals (1,600–1,800°C)**, often with a carbon cap, far beyond anything in silicon processing. Devices include **trench and planar MOSFETs** and **Schottky barrier diodes (SBDs)**. The gate-oxide interface quality (SiC/SiO₂) is a persistent reliability challenge requiring specialized oxidation and passivation.

**Wafer vendors:** Wolfspeed (the long-time leader), Coherent/II-VI, SiCrystal (ROHM), SICC and TankeBlue (China), Resonac, STMicroelectronics (which acquired Norstel). **Equipment:** Aixtron and others for SiC CVD epitaxy; specialized high-temperature furnaces and implanters; PVT growth furnaces from a small set of suppliers.

---

## 2. Gallium Nitride (GaN)

Gallium nitride serves two distinct markets with two distinct substrate strategies:

- **GaN-on-Si (power):** GaN grown on inexpensive silicon substrates enables cost-effective **power devices** for the lower-voltage range (typically 100V–650V) — fast chargers, data-center power supplies, consumer electronics, and increasingly automotive. The lattice and thermal mismatch between GaN and silicon requires sophisticated buffer/transition layers grown by MOCVD.
- **GaN-on-SiC (RF):** GaN grown on SiC substrates (which provide excellent thermal conductivity) delivers high-power **RF amplifiers** for 5G base stations, radar, and defense, where GaN HEMTs (High-Electron-Mobility Transistors) far outperform older GaAs and LDMOS technologies.

**Epitaxy.** GaN device layers are grown by **MOCVD (Metal-Organic CVD)**, using precursors such as trimethylgallium and ammonia. The leading MOCVD tool suppliers are **Aixtron (G5+ C platform)** and **Veeco (Propel platform)**, which dominate compound-semiconductor and LED epitaxy. Precise control of the AlGaN/GaN heterostructure that forms the conductive **two-dimensional electron gas (2DEG)** channel is the heart of GaN HEMT performance.

**Device processing.** GaN HEMT/HBT fabrication involves **mesa etch** (isolating devices), **SiN passivation** (critical for surface-trap control and reliability), **ohmic and Schottky contact** formation, and gate processing. **Vertical GaN** — using true GaN-on-GaN substrates for higher-voltage vertical devices — is an emerging frontier promising better performance than lateral GaN-on-Si, but bulk GaN substrates remain expensive and small.

---

## 3. III-V Materials (InP, GaAs, InGaAs)

The III-V family — compounds of group-III (Ga, In, Al) and group-V (As, P, N) elements — dominates high-frequency and optoelectronic applications:

- **GaAs** is used for RF power amplifiers and switches in mobile handsets (pHEMT, HBT), and for some photonics and solar.
- **InP** is the workhorse of **data-center optics** and long-haul telecom, providing the lasers, modulators, and photodetectors for high-speed optical transceivers; it also serves the highest-frequency RF (mmWave, terahertz) applications.
- **InGaAs** (and related alloys) provides very high electron mobility for RF HEMTs and for photodetectors.

**Epitaxy.** III-V devices are built on epitaxial layers grown by **MOCVD** (for high-volume production) and **MBE (Molecular Beam Epitaxy)** (for the most precise, abrupt structures and research). The ability to grow lattice-matched and strained heterostructures with atomic precision underpins III-V device performance.

**Device processing.** III-V fabrication uses specialized **wet-etch chemistries** (the materials are sensitive to many of the chemistries used in silicon), along with dry etch, contact metallization, and passivation tailored to each material. Wafers are typically smaller (100–150mm) than silicon, and the fabs are correspondingly specialized.

**Applications** include **data-center optics** (the explosive growth in AI-driven optical interconnect is a major InP driver), **5G mmWave** front-ends, **satellite and defense** electronics, and **photonics** generally.

---

## 4. Markets

The compound-semiconductor markets are driven by powerful secular trends:

- **Power electronics (SiC and GaN):** the electrification of transportation (EVs), the buildout of fast-charging infrastructure, renewable-energy inverters, and grid modernization are driving rapid growth in SiC and GaN power devices. SiC dominates the high-voltage EV traction market; GaN is expanding in chargers, data-center power, and increasingly automotive.
- **RF (GaN and III-V):** 5G infrastructure (GaN-on-SiC base-station amplifiers), defense radar and electronic warfare, and satellite communications drive RF compound-semiconductor demand.
- **Optics and photonics (InP, GaAs):** the AI-driven explosion in data-center bandwidth is a massive tailwind for InP-based optical transceivers, and silicon photonics (File 23) increasingly integrates III-V lasers.

---

## 5. Key Vendors and Fab Landscape

| Category | Key players |
|---|---|
| **SiC substrates** | Wolfspeed, Coherent/II-VI, SiCrystal (ROHM), STMicroelectronics, SICC, TankeBlue, Resonac |
| **SiC/GaN power devices** | Infineon, STMicroelectronics, onsemi, ROHM, Wolfspeed, Mitsubishi, Toshiba, Navitas, Power Integrations, GaN Systems (Infineon), EPC |
| **RF GaN/III-V** | Qorvo, Broadcom, MACOM, Wolfspeed (former RF business to MACOM), NXP, Sumitomo |
| **MOCVD epitaxy equipment** | Aixtron, Veeco |
| **MBE equipment** | Riber, Veeco |
| **Compound-semi foundries** | Tower Semiconductor, WIN Semiconductors (GaAs/GaN foundry), GlobalFoundries (specialty), VPEC, IQE and others (epi-wafer supply) |

The compound-semiconductor equipment market is notably distinct from mainstream silicon WFE: it is led by epitaxy specialists (Aixtron, Veeco) and a constellation of materials and device companies, rather than by the silicon-CMOS giants (though Applied Materials and others supply some implant, etch, and deposition tools adapted for these materials). Crystal growth — PVT furnaces for SiC, bulk GaN and InP growth — is served by a small, specialized supplier base, and substrate supply remains the key bottleneck and value driver across the compound-semiconductor world.

As electrification and optical interconnect accelerate, compound semiconductors represent one of the most attractive growth areas adjacent to mainstream silicon — with their own equipment ecosystem, their own roadmaps (SiC's 150-to-200mm transition, vertical GaN, InP photonics integration), and their own strategic significance in the energy transition and the AI-driven bandwidth explosion.

---

## Extended Analysis: Device Physics, Markets, and Equipment Detail

### A. Why Wide-Bandgap Physics Wins in Power and RF

The advantages of SiC and GaN over silicon trace directly to material properties. The **critical breakdown field** of SiC (~3 MV/cm) and GaN (~3.3 MV/cm) is roughly ten times that of silicon (~0.3 MV/cm), which means a wide-bandgap device of a given voltage rating can be **ten times thinner** in its drift region and far more highly doped — drastically reducing the on-resistance that wastes energy as heat. This is captured by figures of merit such as the **Baliga Figure of Merit (BFOM)** for power and the **Johnson Figure of Merit (JFOM)** for RF, on which SiC and GaN score hundreds of times higher than silicon. The practical consequences are transformative: a SiC traction inverter in an electric vehicle can be smaller, lighter, and a few percent more efficient than its silicon-IGBT predecessor — and in an EV, a few points of inverter efficiency translate directly into extended range or a smaller, cheaper battery, which is why automakers (led by Tesla's pioneering adoption) drove SiC into the mainstream.

SiC's high thermal conductivity (~3–4× silicon) also lets devices run hotter and dissipate heat more easily, important for high-power and harsh-environment use. GaN's very high electron velocity and the two-dimensional electron gas (2DEG) at the AlGaN/GaN interface give it exceptional high-frequency performance, which is why GaN-on-SiC HEMTs have displaced older LDMOS and GaAs technologies in 5G base-station and radar power amplifiers.

### B. SiC Manufacturing Challenges in Depth

The SiC value chain is bottlenecked at the substrate. PVT crystal growth is slow (sub-millimeter per hour versus the centimeters-per-hour pull rate of silicon CZ) and prone to defects — **micropipes** (hollow core defects, now largely controlled), **basal-plane dislocations** (which cause bipolar degradation), and **threading dislocations**. Boules are short (a few centimeters), limiting wafers per boule, and SiC's extreme hardness makes slicing and polishing slow and costly (diamond wire sawing, with significant kerf loss, though laser-based "cold split" techniques such as Halo/Infineon's and the use of laser-assisted slicing are improving yield). The **150mm-to-200mm transition** roughly doubles usable die area and is the central cost-reduction lever, with Wolfspeed, Coherent, Bosch, STMicro, and Chinese suppliers (SICC, TankeBlue) racing to qualify 200mm. Substrate cost remains the single largest component of SiC device cost, which is why vertical integration (device makers securing or owning substrate supply) is a defining strategic theme.

### C. GaN Manufacturing and Reliability

GaN-on-Si power devices are typically **lateral HEMTs** (the current flows laterally in the 2DEG), normally-on by nature and engineered to be **normally-off (enhancement-mode)** for safe power switching via p-GaN gate, cascode, or recessed-gate structures. The buffer-layer engineering to bridge the large GaN/Si lattice and thermal mismatch (using AlN nucleation and graded AlGaN transition layers) is the heart of GaN epitaxy and a key MOCVD challenge. **Reliability** — dynamic on-resistance (current collapse from trapped charge), gate reliability, and the absence of an intrinsic body diode — drove years of qualification before GaN won broad adoption; **SiN passivation** and field-plate engineering are central to controlling surface traps. Vertical GaN (on bulk GaN substrates) promises higher voltages and better reliability but awaits affordable, large bulk-GaN substrates.

### D. Market Sizing and Outlook

| Segment | Primary material | Key applications | Growth driver |
|---|---|---|---|
| High-voltage power (650–1700V+) | SiC | EV traction inverters, charging, grid, rail | EV electrification |
| Mid-voltage power (100–650V) | GaN | Chargers, data-center PSUs, consumer, automotive | Efficiency, power density |
| RF power | GaN-on-SiC | 5G base stations, radar, defense, satcom | 5G/defense |
| RF front-end (handset) | GaAs | Power amplifiers, switches | Mobile |
| Data-center optics | InP | Lasers, modulators, detectors | AI bandwidth |

The SiC power-device market has grown rapidly on the back of EV adoption (with Infineon, STMicroelectronics, onsemi, ROHM, and Wolfspeed the leading device makers), while GaN power is expanding from chargers into data-center and automotive applications. The AI-driven boom in optical interconnect is a powerful tailwind for InP photonics. A recurring theme across all three is that the **equipment and substrate ecosystem is the value-determining bottleneck** — epitaxy reactors (Aixtron, Veeco), crystal-growth furnaces, and substrate supply gate the industry's growth more than device design does.

### E. Equipment Detail

Compound-semiconductor fabs use smaller wafers (100–200mm) and a distinct toolset: **MOCVD and MBE** for epitaxy (the highest-value tools); **high-temperature implant and anneal** (1,600–1,800°C for SiC activation, far beyond silicon); **specialized dry and wet etch** chemistries (BCl₃/Cl₂ for GaN/III-V, fluorine-based for SiC, with III-V materials sensitive to many silicon-fab chemistries); **dielectric deposition** (SiN passivation critical for GaN); and **ohmic-contact and metallization** processes tailored to each material. Because volumes are lower and wafers smaller than mainstream silicon, the equipment is often adapted from older silicon-tool generations or purpose-built by specialists, and the fabs (Wolfspeed, Infineon, STMicro, plus pure-play foundries like WIN Semiconductors and Tower) form a distinct ecosystem from the leading-edge silicon-logic world — even as the strategic importance of compound semiconductors, driven by electrification and AI-driven optics, continues to rise.
